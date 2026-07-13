const fs = require("node:fs");
const path = require("node:path");

const REQUIRED_PATHS = [
  "public/locales",
  "public/images/icons/96",
  "packages/client/public/locales",
];

function isDocSpaceClientRoot(candidate) {
  return REQUIRED_PATHS.every((relativePath) =>
    fs.existsSync(path.join(candidate, relativePath)),
  );
}

function resolveDocSpaceClientRoot() {
  const workspaceRoot = path.resolve(__dirname, "../..");
  const candidates = [
    process.env.DOCSPACE_CLIENT_ROOT,
    process.env.DOCSPACE_ROOT,
    process.env.DOCSPACE_ROOT && path.join(process.env.DOCSPACE_ROOT, "client"),
    path.resolve(__dirname, "../../.."),
    path.join(workspaceRoot, "DocSpace-client"),
    path.join(workspaceRoot, "DocSpace", "client"),
  ].filter(Boolean);

  const checked = [
    ...new Set(candidates.map((candidate) => path.resolve(candidate))),
  ];
  const root = checked.find(isDocSpaceClientRoot);

  if (root) return root;

  throw new Error(
    [
      "DocSpace client sources were not found.",
      "Set DOCSPACE_CLIENT_ROOT to the DocSpace-client repository root.",
      `Checked: ${checked.join(", ")}`,
    ].join(" "),
  );
}

module.exports = { resolveDocSpaceClientRoot };
