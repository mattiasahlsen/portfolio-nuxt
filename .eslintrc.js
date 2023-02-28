module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "space-before-function-paren": "off",
    "comma-dangle": "off",
    "vue/require-prop-types": "off",
    "arrow-parens": "off",
    quotes: "single",
    "vue/max-attributes-per-line": "off",
    semi: "off"
  }
};
