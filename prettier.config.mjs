/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "auto",
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "all",
  semi: true,
  arrowParens: "always",
  quoteProps: "as-needed",
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
