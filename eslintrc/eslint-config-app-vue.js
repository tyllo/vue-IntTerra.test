module.exports = {
  extends: [
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
      multiline: { max: 1, allowFirstLine: false },
    }],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/prop-name-casing': 'off',
    'vue/no-v-html': 'off',
    'vue/this-in-template': ['error', 'never'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        'validations',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      selfClosingTag: 'always',
    }],
  },
}
