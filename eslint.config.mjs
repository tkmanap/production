import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';
import reactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    reactHooks.configs['recommended-latest'],
    i18next.configs['flat/recommended'],
    {
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        rules: {
            'react/jsx-indent': [2, 4, {checkAttributes: true, indentLogicalExpressions: true}],
            'react/jsx-indent-props': [2, 4],
            'indent': [2, 4],
            'react/react-in-jsx-scope': 'off',
            "react/display-name": ["off"],
            'i18next/no-literal-string': ['error', {markupOnly: true}],
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            }],

        }
    },
    {
        files: ["**/*.test.{ts,tsx}", "**/*.stories.{ts,tsx}"],
        rules: {
            'i18next/no-literal-string': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        }
    }
];