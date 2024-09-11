import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    overrides: [
      {
        files: ["tests/**/*"],
        env: {
          jest: true,
        },
      },
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
