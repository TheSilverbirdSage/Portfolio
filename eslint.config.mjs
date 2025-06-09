import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // This new object will add or override rules
    rules: {
      // Ensure the base no-unused-vars is off, as TypeScript ESLint provides its own
      "no-unused-vars": "off",

      // Configure the TypeScript-specific unused vars rule
      "@typescript-eslint/no-unused-vars": [
        "error", // Keep it as an error
        {
          // This tells ESLint to ignore variables that start with an underscore
          // This is the most common and robust solution
          "varsIgnorePattern": "^_",
          "argsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      // If you specifically wanted to ignore `isMobile` without underscore (not recommended):
      // "@typescript-eslint/no-unused-vars": [
      //   "error",
      //   {
      //     "varsIgnorePattern": "^(isMobile|_)$", // Ignores 'isMobile' and variables starting with '_'
      //   }
      // ]
    },
    // Make sure these rules apply to your TypeScript files
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
  },
];

export default eslintConfig;
