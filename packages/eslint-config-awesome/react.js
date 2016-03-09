module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'extends': 'awesome/base',
  'rules': {
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-curly-spacing': 2,
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-no-bind': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-deprecated': [1, { 'react': '0.14.0' }],
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': [2, 'allow-in-func'],
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [2, { 'ignoreStateless': true }],
    'react/no-unknown-property': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': [2, { 'declaration': true, 'assignment': false, 'return': true }]
  },
  'plugins': [
    'react'
  ]
};
