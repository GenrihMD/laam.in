const isServe = process.argv.includes('serve')
const isNolintEnv = process.env.NO_ESLINT_DEV !== undefined

const devRules = {}
const prodRules = {
  "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  "quotes": [2, "single", "avoid-escape"],
  "semi": ["error", "never", {
    "beforeStatementContinuationChars": "never"
  }],
  "arrow-body-style": "warn",
  "arrow-parens": ["warn", "as-needed"],
  "brace-style": ["warn", "1tbs"],
  'camelcase': 'warn',
  "comma-dangle": ["warn", "always-multiline"],
  'complexity': 'off',
  "constructor-super": "warn",
  'curly': 'warn',
  "eol-last": "warn",
  'eqeqeq': ['warn', 'smart'],
  "guard-for-in": "warn",
  "id-blacklist": [
    "warn",
    "any",
    "Number",
    "number",
    "String",
    "string",
    "Boolean",
    "boolean",
    "Undefined",
    "undefined"
  ],
  "id-match": "warn",
  "import/order": "off",
  "jsdoc/check-alignment": "warn",
  "jsdoc/check-indentation": "warn",
  "jsdoc/newline-after-description": "warn",
  "max-classes-per-file": ["warn", 1],
  "max-len": [
    "warn",
    {
      code: 120,
    },
  ],
  "new-parens": "warn",
  "no-bitwise": "warn",
  "no-caller": "warn",
  "no-cond-assign": "warn",
  "no-empty": "warn",
  "no-eval": "warn",
  "no-fallthrough": "off",
  "no-invalid-this": "off",
  "no-multiple-empty-lines": "off",
  "no-new-wrappers": "warn",
  "no-shadow": [
    "warn",
    {
      hoist: "all"
    },
  ],
  "no-throw-literal": "warn",
  "no-trailing-spaces": "warn",
  "no-undef-init": "warn",
  "no-underscore-dangle": "warn",
  "no-unsafe-finally": "warn",
  "no-unused-labels": "warn",
  "no-var": "warn",
  "object-shorthand": "warn",
  "one-var": ["warn", "never"],
  "prefer-arrow/prefer-arrow-functions": "warn",
  "prefer-const": "warn",
  "quote-props": ["warn", "consistent-as-needed"],
  'radix': 'warn',
  "space-before-function-paren": [
    "warn",
    {
      anonymous: "never",
      asyncArrow: "always",
      named: "never"
    },
  ],
  "spaced-comment": [
    "warn",
    "always",
    {
      markers: ["/"],
    },
  ],
  "array-bracket-spacing": [
    "warn",
    "always",
    {
      "arraysInArrays": false,
      "objectsInArrays": false
    }
  ],
  "object-curly-spacing": [
    "warn",
    "always",
    {
      "objectsInObjects": false
    }
  ],
  "space-in-parens": ["error", "always", {
    "exceptions": ["{}", "[]", "empty"]
  }],
  "comma-spacing": ["error", {
    "before": false,
    "after": true
  }],
  "use-isnan": "warn",
  "valid-typeof": "off",

  // typescript special rules
  "@typescript-eslint/prefer-optional-chain": "warn",
  "@typescript-eslint/prefer-nullish-coalescing": "warn",
  "@typescript-eslint/unified-signatures": "warn",
  "@typescript-eslint/require-array-sort-compare": "warn",
  "@typescript-eslint/type-annotation-spacing": [
    "warn",
    {
      "before": false,
      "after": true
    }
  ],
  "@typescript-eslint/adjacent-overload-signatures": "warn",
  "@typescript-eslint/array-type": [
    "warn",
    {
      default: "generic"
    },
  ],
  "@typescript-eslint/ban-types": [
    "warn",
    {
      types: {
        Object: {
          message: "Avoid using the `Object` type. Did you mean `object`?"
        },
        Function: {
          message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
        },
        Boolean: {
          message: "Avoid using the `Boolean` type. Did you mean `boolean`?"
        },
        Number: {
          message: "Avoid using the `Number` type. Did you mean `number`?"
        },
        String: {
          message: "Avoid using the `String` type. Did you mean `string`?"
        },
        Symbol: {
          message: "Avoid using the `Symbol` type. Did you mean `symbol`?"
        },
      },
    },
  ],
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variableLike",
      "format": ["camelCase", "UPPER_CASE", "PascalCase"]
    },
    {
      "selector": "typeLike",
      "format": ["PascalCase"]
    },
  ],
  "@typescript-eslint/consistent-type-assertions": "warn",
  "@typescript-eslint/consistent-type-definitions": "warn",
  "@typescript-eslint/dot-notation": "off",
  "@typescript-eslint/indent": [
    "warn",
    2,
    {
      FunctionDeclaration: {
        parameters: "first"
      },
      FunctionExpression: {
        parameters: "first"
      },
    },
  ],
  "@typescript-eslint/interface-name-prefix": "off",
  "@typescript-eslint/member-delimiter-style": [
    "off",
    {
      multiline: {
        delimiter: "none",
        requireLast: true,
      },
      singleline: {
        delimiter: "none",
        requireLast: false,
      },
    },
  ],
  "@typescript-eslint/member-ordering": [
    "warn",
    {
      classes: [
        "public-static-field",
        "protected-static-field",
        "private-static-field",

        "public-instance-field",
        "protected-instance-field",
        "private-instance-field",

        "public-static-method",
        "protected-static-method",
        "private-static-method",

        "public-constructor",
        "public-instance-method",
        "protected-constructor",
        "protected-instance-method",
        "private-constructor",
        "private-instance-method"
      ]
    }
  ],
  "@typescript-eslint/explicit-member-accessibility": [
    "warn",
    {
      accessibility: "no-public",
      overrides: {
        methods: "explicit",
        properties: 'off'
      }
    },
  ],
  "@typescript-eslint/no-empty-function": "warn",
  "@typescript-eslint/no-empty-interface": "warn",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-misused-new": "warn",
  "@typescript-eslint/no-namespace": "warn",
  "@typescript-eslint/no-parameter-properties": "off",
  "@typescript-eslint/no-unused-expressions": "warn",
  "@typescript-eslint/no-use-before-define": "off",
  "@typescript-eslint/no-var-requires": "warn",
  "@typescript-eslint/prefer-for-of": "warn",
  "@typescript-eslint/prefer-namespace-keyword": "warn",
  "@typescript-eslint/quotes": ["warn", "single"],
  "@typescript-eslint/semi": ["off", null],
  "@typescript-eslint/triple-slash-reference": [
    "warn",
    {
      path: "always",
      types: "prefer-import",
      lib: "always"
    },
  ],
  "@typescript-eslint/type-annotation-spacing": "warn",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/unified-signatures": "warn",

  // prettier default
  // "@typescript-eslint/brace-style": "off",
  // "@typescript-eslint/comma-spacing": "off",
  // "@typescript-eslint/func-call-spacing": "off",
  // "@typescript-eslint/indent": "off",
  // "@typescript-eslint/keyword-spacing": "off",
  // "@typescript-eslint/member-delimiter-style": "off",
  // "@typescript-eslint/no-extra-parens": "off",
  // "@typescript-eslint/no-extra-semi": "off",
  // "@typescript-eslint/semi": "off",
  // "@typescript-eslint/space-before-function-paren": "off",
  // "@typescript-eslint/type-annotation-spacing": "off",
}
const rules = isNolintEnv && isServe ? devRules : prodRules

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "@vue/prettier",
  ],

  plugins: [
    "prettier",
    "prefer-arrow",
    "jsdoc"
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules,

  overrides: [{
    files: [
      "**/__tests__/*.{j,t}s?(x)",
      "**/tests/unit/**/*.spec.{j,t}s?(x)"
    ],
    env: {
      jest: true,
    },
  }, ],

}
