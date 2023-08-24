module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-less',
  ],
  customSyntax: "postcss-less",
  rules: {
    'block-no-empty': null,
    'no-empty-source': null,
    'function-no-unknown': null,
    'property-no-vendor-prefix': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'color-no-invalid-hex': true,
    'less/color-no-invalid-hex': true,
    'max-line-length': 200,
    'string-quotes': 'single',
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'no-missing-end-of-source-newline': null,
    indentation: [
      2,
      {
        severity: 'warning'
      }
    ],
    'keyframes-name-pattern': null
  },
  overrides: [
    {
      files: "**/*.{js,jsx}",
      customSyntax: "",
      processors: [
        "stylelint-processor-styled-components"
      ],
    }
  ]
};
