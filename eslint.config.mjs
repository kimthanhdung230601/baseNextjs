import { createRequire } from "node:module";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const eslintConfigNextPath = dirname(
  require.resolve("eslint-config-next/package.json")
);
const nextPlugin = require(
  require.resolve("@next/eslint-plugin-next", {
    paths: [eslintConfigNextPath],
  })
);
const reactPlugin = require(
  require.resolve("eslint-plugin-react", {
    paths: [eslintConfigNextPath],
  })
);
const reactHooksPlugin = require(
  require.resolve("eslint-plugin-react-hooks", {
    paths: [eslintConfigNextPath],
  })
);
const jsxA11yPlugin = require(
  require.resolve("eslint-plugin-jsx-a11y", {
    paths: [eslintConfigNextPath],
  })
);
const typescriptEslintPlugin = require(
  require.resolve("@typescript-eslint/eslint-plugin", {
    paths: [eslintConfigNextPath],
  })
);
const nextParser = require(require.resolve("eslint-config-next/parser.js"));
const typescriptParser = require(
  require.resolve("@typescript-eslint/parser", {
    paths: [eslintConfigNextPath],
  })
);

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "coverage/**",
    ],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      parser: nextParser,
      parserOptions: {
        allowImportExportEverywhere: true,
        babelOptions: {
          caller: {
            supportsTopLevelAwait: true,
          },
          presets: ["next/babel"],
        },
        requireConfigFile: false,
        sourceType: "module",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "jsx-a11y": jsxA11yPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
      "react/jsx-no-target-blank": "off",
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": typescriptEslintPlugin,
      "jsx-a11y": jsxA11yPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
      "react/jsx-no-target-blank": "off",
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "ImportDeclaration[source.value='react'] > ImportNamespaceSpecifier",
          message:
            'Do not use `import * as React from "react"`. Import only the React APIs you need.',
        },
      ],
    },
  },
];
