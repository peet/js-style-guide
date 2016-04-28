module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'extends': 'awesome/base',
  'rules': {
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': [2, { "selfClosing": "line-aligned", "nonEmpty": "after-props" }],
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-space-before-closing': [2, 'never'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': [2, 'allow-in-func'],
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [2, { 'ignoreStateless': true }],
    'react/no-unknown-property': 2,
    'react/prop-types': 1,
//    'react/prefer-stateless-function': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [1, {
      'order': [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
    'react/wrap-multilines': 2
  },
  'plugins': [
    'react'
  ],
  'settings': {
    'react': {
      'version': '0.13'
    }
  }
};
