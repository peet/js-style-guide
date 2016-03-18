module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    },
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'jquery': true,
    'es6': true
  },
  'globals': {
    'require': true,
    'module': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'array-callback-return': 2,
    'arrow-body-style': 2,
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'camelcase': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'complexity': [1, 10],
    'curly': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'jsx-quotes': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'max-depth': [2, 4],
    'max-statements': [1, 20],
    'no-constant-condition': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-labels': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': [2, { 'defaultAssignment': false }],
    'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }],
    'no-use-before-define': [2, { 'functions': false }],
    'no-useless-concat': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    'object-curly-spacing': [2, 'always'],
    'object-shorthand': 2,
    'padded-blocks': [2, 'never'],
    'prefer-arrow-callback': 1,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 1,
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single'],
    'radix': 2,
    'semi': [2, 'always'],
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'strict': [2, 'never'],
    'template-curly-spacing': 2
  }
};
