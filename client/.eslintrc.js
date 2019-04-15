module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  plugins: [
    "react",
    "react-hooks"
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
  },
  env: {
    "jest": true,
    "browser": true
  },
  rules:  {
    "comma-dangle": [
      2,
      "never"
    ],
    "no-cond-assign": 2,
    "no-console": 0,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [
      2,
      "functions"
    ],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "block-scoped-var": 0,
    "complexity": [
      0,
      11
    ],
    "consistent-return": 2,
    "curly": [
      2,
      "all"
    ],
    "default-case": 0,
    "dot-notation": [
      2,
      {
        "allowKeywords": true
      }
    ],
    "eqeqeq": 2,
    "guard-for-in": 0,
    "no-alert": 2,
    "no-caller": 2,
    "no-div-regex": 0,
    "no-else-return": 0,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 0,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 0,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 0,
    "no-process-env": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 0,
    "no-sequences": 2,
    "no-throw-literal": 0,
    "no-unused-expressions": 2,
    "no-void": 0,
    "no-warning-comments": [
      0,
      {
        "terms": [
          "todo",
          "fixme"
        ],
        "location": "start"
      }
    ],
    "no-with": 2,
    "radix": 0,
    "vars-on-top": 0,
    "wrap-iife": 0,
    "yoda": [
      2,
      "never"
    ],
    "strict": 2,
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-undefined": 0,
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "after-used"
      }
    ],
    "no-use-before-define": 2,
    "handle-callback-err": 0,
    "no-mixed-requires": [
      0,
      false
    ],
    "no-new-require": 0,
    "no-path-concat": 0,
    "no-process-exit": 2,
    "no-restricted-modules": 0,
    "no-sync": 0,
    "brace-style": [
      2,
      "1tbs"
    ],
    "camelcase": 2,
    "comma-spacing": 2,
    "comma-style": 0,
    "consistent-this": [
      0,
      "that"
    ],
    "eol-last": 0,
    "func-names": 0,
    "func-style": [
      0,
      "declaration"
    ],
    "indent": [2, 2],
    "@typescript-eslint/indent": [2, 2],
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": 2,
    "linebreak-style": [
      0,
      "unix"
    ],
    "max-nested-callbacks": [
      0,
      2
    ],
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 0,
    "no-array-constructor": 2,
    "no-continue": 0,
    "no-inline-comments": 0,
    "no-lonely-if": 0,
    "no-mixed-spaces-and-tabs": [
      2,
      false
    ],
    "no-multiple-empty-lines": [
      0,
      {
        "max": 2
      }
    ],
    "no-nested-ternary": 0,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 2,
    "no-unneeded-ternary": 0,
    "one-var": 0,
    "operator-assignment": [
      0,
      "always"
    ],
    "operator-linebreak": 0,
    "padded-blocks": 0,
    "quote-props": 0,
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true
      }
    ],
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "semi": 2,
    "sort-vars": 0,
    "space-after-keywords": [
      0,
      "always"
    ],
    "space-before-blocks": [
      0,
      "always"
    ],
    "space-before-function-paren": [
      0,
      "always"
    ],
    "space-in-brackets": [
      0,
      "never"
    ],
    "space-in-parens": [
      0,
      "never"
    ],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false
      }
    ],
    "spaced-line-comment": [
      0,
      "always"
    ],
    "wrap-regex": 0,
    "generator-star-spacing": 0,
    "no-var": 2,
    "object-shorthand": 0,
    "max-depth": [
      0,
      4
    ],
    "max-len": [
      0,
      80,
      4
    ],
    "max-params": [
      0,
      3
    ],
    "max-statements": [
      0,
      10
    ],
    "no-bitwise": 0,
    "no-plusplus": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};