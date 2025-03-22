/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard-scss"],
    "rules": {
        "selector-class-pattern": "^[a-z0-9\\-_]+$"
    }
};
