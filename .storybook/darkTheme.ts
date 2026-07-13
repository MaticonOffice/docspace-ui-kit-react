import { create } from "storybook/theming/create";

import { globalColors } from "../providers/theme/themes/globalColors";

export default create({
  base: "dark",
  appBg: globalColors.black,
  appContentBg: globalColors.black,

  brandTitle: "DocSpace UI Kit",
  brandUrl: "https://www.maticonoffice.ru/docspace.aspx",
  brandTarget: "_self",
});
