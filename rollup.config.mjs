import { createRequire } from "node:module";

import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import dts from "rollup-plugin-dts";
import nodePolyfills from "rollup-plugin-polyfill-node";
import postcss from "rollup-plugin-postcss";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");
const runtimeDependencies = new Set([
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
]);

const isRuntimeExternal = (id) =>
  [...runtimeDependencies].some(
    (dependency) => id === dependency || id.startsWith(`${dependency}/`),
  );

function preserveUseClientDirectives() {
  const clientModules = new Set();
  const directivePattern = /^\s*(?:\/\*[\s\S]*?\*\/\s*)?["']use client["'];/;

  return {
    name: "preserve-use-client-directives",
    transform(code, id) {
      if (directivePattern.test(code)) clientModules.add(id);
      return null;
    },
    renderChunk(code, chunk) {
      if (!chunk.moduleIds.some((id) => clientModules.has(id))) return null;
      return { code: `"use client";\n${code}`, map: null };
    },
  };
}

function handleBuildWarning(warning, warn) {
  if (
    warning.code === "MODULE_LEVEL_DIRECTIVE" &&
    warning.message.includes("use client")
  ) {
    return;
  }
  warn(warning);
}

export default [
  {
    input: "index.ts",
    onwarn: handleBuildWarning,
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: ".",
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: ".",
      },
    ],
    plugins: [
      preserveUseClientDirectives(),
      resolve({
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        browser: true,
        preferBuiltins: false,
      }),
      nodePolyfills(),
      svgr(),
      json(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
        declarationDir: undefined,
      }),
      postcss({
        modules: {
          generateScopedName: "[hash:base64:5]",
        },
        inject: (cssVariableName) =>
          `\nimport styleInject from "style-inject";\nstyleInject(${cssVariableName});`,
        minimize: true,
        use: [
          [
            "sass",
            {
              silenceDeprecations: ["legacy-js-api"],
            },
          ],
        ],
      }),
    ],
    external: isRuntimeExternal,
  },
  // Type definitions
  {
    input: "index.ts",
    output: {
      dir: "dist/types",
      format: "esm",
    },
    plugins: [
      dts({
        tsconfig: "./tsconfig.json",
      }),
    ],
    external: (id) => isRuntimeExternal(id) || /\.(?:scss|css|svg)$/.test(id),
  },
];
