module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    "jest/globals": true
  },
  globals: {
    __HTTP_HOST: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest-dom/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jest",
    "import",
    "testing-library",
    "jest-dom",
    "prettier",
    "@nrwl/nx"
  ],
  root: true,
  rules: {
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "none",
        printWidth: 120,
        semi: false,
        tabWidth: 2
      }
    ],
    indent: "off",
    camelcase: "off",
    "max-len": ["warn", { code: 120 }],
    // suppress errors for missing 'import React' in files because it's not need now
    "react/react-in-jsx-scope": "off",
    "accessor-pairs": "error",
    "array-bracket-spacing": ["error", "never"],
    "array-callback-return": "error",
    "arrow-body-style": "error",
    "arrow-spacing": [
      "error",
      {
        after: true,
        before: true
      }
    ],
    "block-scoped-var": "error",
    "block-spacing": ["error", "always"],
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true
      }
    ],
    "callback-return": "warn",
    "class-methods-use-this": "warn",
    "comma-dangle": [2, "never"],
    "comma-spacing": "warn",
    "comma-style": ["error", "last"],
    complexity: ["error", { max: 12 }],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "off",
    "consistent-this": "error",
    curly: "error",
    "default-case": "off",
    "dot-location": ["error", "property"],
    "dot-notation": ["warn", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
    "eol-last": "error",
    eqeqeq: "error",
    "func-call-spacing": "error",
    "func-names": "error",
    "func-style": ["error", "expression"],
    "generator-star-spacing": "error",
    "global-require": "warn",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-match": "error",
    "init-declarations": "error",
    "implicit-arrow-linebreak": "off",
    "jsx-quotes": ["warn"],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/no-autofocus": "off",
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-directive": "warn",
    "lines-between-class-members": ["error", "never"],
    "max-depth": "error",
    "max-lines": ["error", 520],
    "max-nested-callbacks": "error",
    "max-params": ["error", 3],
    "max-statements-per-line": "error",
    "multiline-ternary": ["warn", "never"],
    "new-parens": "warn",
    "newline-after-var": "warn",
    "newline-before-return": "warn",
    "newline-per-chained-call": "off",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "off",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-mixed-requires": "error",
    "no-multi-spaces": "warn",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "warn",
    "no-new": "off",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "error",
      {
        props: false
      }
    ],
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "warn",
    "no-shadow": "warn",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "warn",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": "off",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true
      }
    ],
    "object-shorthand": "error",
    "one-var": ["warn", { const: "never" }],
    "one-var-declaration-per-line": ["error", "initializations"],
    "operator-assignment": "error",
    "padded-blocks": ["warn", "never"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "warn",
    "prefer-numeric-literals": "error",
    "prefer-reflect": ["warn", { exceptions: ["call"] }], // d3 use 'call'
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    "quote-props": ["warn", "as-needed"],
    quotes: ["error", "double", { avoidEscape: true }],
    radix: "error",
    "react/function-component-definition": "off",
    "import/no-import-module-exports": "off",
    "import/export": "off",
    "require-jsdoc": "off",
    "rest-spread-spacing": ["error", "never"],
    semi: ["warn", "never"],
    "semi-spacing": "error",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    strict: "warn",
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "valid-jsdoc": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "no-console": ["error", { allow: ["error"] }],
    "yield-star-spacing": "error",
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-no-literals": "off",
    "react/jsx-handler-names": "off",
    "react/prop-types": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-sort-props": "off",
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/jsx-wrap-multilines": "off",
    "react/forbid-component-props": "off",
    "react/no-set-state": "off",
    "react/jsx-closing-bracket-location": [1, "tag-aligned"],
    "react/display-name": "off",
    "react/destructuring-assignment": "off",
    "react/button-has-type": "warn",
    "import/no-mutable-exports": "error",
    "import/first": "error",
    "import/prefer-default-export": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-duplicates": "off",
    "import/no-cycle": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "object"],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@multi-chat/**",
            group: "parent",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin"]
      }
    ],
    "react/jsx-one-expression-per-line": "off",
    yoda: ["error", "never"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-key": "error",
    "react/jsx-curly-brace-presence": "error",
    // Ok, we still use "confirm"
    "no-alert": "off",
    "no-undef": "off",
    "max-statements": ["error", 20],
    "react/jsx-no-bind": "error",
    "react/prefer-stateless-function": "error",
    "react/require-optimization": "error",
    "react/no-children-prop": "error",
    "react/self-closing-comp": "error",
    "react/no-render-return-value": "error",
    "react/no-unknown-property": "error",
    "react/jsx-max-depth": ["warn", { max: 4 }],
    "react/no-this-in-sfc": "error",
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".tsx"] }],
    "react/jsx-curly-newline": "off",
    "react/require-default-props": "off",
    "react/no-unused-prop-types": "off",
    "react/sort-comp": "off",

    // Rules of @typescript-eslint
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_.*$",
        varsIgnorePattern: "^_.*$",
        ignoreRestSiblings: true
      }
    ],

    // TODO: fix and enable this rues
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "error",

    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      { blankLine: "always", prev: ["case", "default"], next: "*" },
      { blankLine: "always", prev: "*", next: "multiline-block-like" }
    ],
    "no-fallthrough": "off",

    // Rules of @testing-library and jest-dom
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off"
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"]
    },
    {
      files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
      rules: {
        "import/no-extraneous-dependencies": "off"
      }
    },
    // because this is part of webpack config
    {
      files: ["bootstrap.config.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "no-process-env": "off"
      }
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@nrwl/nx/enforce-module-boundaries": [
          "warn",
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"]
              }
            ]
          }
        ]
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@nrwl/nx/typescript"],
      rules: {}
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@nrwl/nx/javascript"],
      rules: {}
    }
  ]
}
