import js from "@eslint/js";

export default [
    {
        ignores: ["node_modules/**", "dist/**", "coverage/**"],
    },

    js.configs.recommended,

    {
        files: ["**/*.js"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",

            globals: {
                console: "readonly",
                document: "readonly",
                localStorage: "readonly",
                window: "readonly",
                alert: "readonly",
                setInterval: "readonly",
            },
        },

        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
        },
    },
];
