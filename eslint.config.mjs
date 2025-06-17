import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    semi: true,
    quotes: "double",
  },
  ignores: ["./utils/static/*.js"],
  jsonc: true,
  markdown: true,
  yaml: true,
  formatters: {
    markdown: true,
  },
}, {
  files: ["**/*.ts"],
  rules: {
    "no-console": "off",
  },
});
