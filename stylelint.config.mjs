/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard-scss"],
    "rules": {
        "selector-class-pattern": "^[a-zA-Z0-9\\-_]+$"
    }
};
