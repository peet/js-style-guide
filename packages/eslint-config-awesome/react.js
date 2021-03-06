module.exports = {
  extends: ['./base'].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-quotes': 'error',
    'react/display-name': 'off',
    'react/forbid-prop-types': 'warn',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'after-props',
      selfClosing: 'line-aligned',
    }],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': ['error', 'never'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'off',
    'react/no-danger': 'off',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-render-return-value': 'warn',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'warn',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': ['warn', {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],
    'react/sort-prop-types': 'off',
  },
  settings: {
    react: {
      version: '0.14',
    },
  },
};
