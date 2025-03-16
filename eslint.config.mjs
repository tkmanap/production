import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
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
            'react/jsx-content': [2, {indentMode: 4, ignoreTernaryOperator: true}],
            'react/jsx-indent-props': [2, 4],
            'indent': [2, 4],
            'react/react-in-jsx-scope': 'off',
            'i18next/no-literal-string': ['error', {markupOnly: true}]
        }
    }
];