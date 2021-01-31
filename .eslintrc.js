/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended", ],
    rules: {
        "array-bracket-newline": "error",
        "array-bracket-spacing": [
            "error",
            "always",
            {
                "singleValue": false,
                "objectsInArrays": false,
                "arraysInArrays": false
            }
        ],
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "comma-spacing": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "eqeqeq": "error",
        "func-call-spacing": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            4,
            {
                "VariableDeclarator": "first",
                "MemberExpression": 1,
                "FunctionExpression": {
                    "body": 1,
                    "parameters": 2
                },
                "CallExpression": { "arguments": 1 },
                "ArrayExpression": 1,
                "ObjectExpression": 1,
                "ImportDeclaration": 1
            }
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [
            "error",
            { "ignoreStrings": true }
        ],
        "no-else-return": [
            "error",
            { "allowElseIf": false }
        ],
        "no-magic-numbers": [
            "error",
            {
                "ignore": [
                    0,
                    1
                ],
                "ignoreDefaultValues": true,
                "enforceConst": true
            }
        ],
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 0,
                "maxBOF": 0
            }
        ],
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                "allow": ["_"],
                "hoist": "functions"
            }
        ],
        "no-shadow-restricted-names": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": [
            "error",
            { "skipBlankLines": false }
        ],
        "no-underscore-dangle": [
            "error",
            { "allow": [ "_id", "__v" ] }
        ],
        "no-unneeded-ternary": "error",
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": {
                    "multiline": true,
                    "minProperties": 3
                },
                "ObjectPattern": {
                    "multiline": true,
                    "minProperties": 3
                },
                "ImportDeclaration": {
                    "multiline": true,
                    "minProperties": 3
                },
                "ExportDeclaration": {
                    "multiline": true,
                    "minProperties": 3
                }
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-property-newline": [
            "error",
            { "allowAllPropertiesOnSameLine": true }
        ],
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            },
            {
                "blankLine": "always",
                "prev": [
                    "const",
                    "let",
                    "var"
                ],
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": [
                    "const",
                    "let",
                    "var"
                ],
                "next": [
                    "const",
                    "let",
                    "var"
                ]
            }
        ],
        "prefer-const": "error",
        "prefer-destructuring": [
            "error",
            {
                "array": true,
                "object": true
            },
            { "enforceForRenamedProperties": true }
        ],
        "quotes": [
            2,
            "double"
        ],
        "rest-spread-spacing": "error",
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": "error",
        "semi-style": "error",
        "yoda": [
            "error",
            "never",
            { "exceptRange": true }
        ]
    }
};
