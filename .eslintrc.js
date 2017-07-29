module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "react/forbid-prop-types": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "class-methods-use-this": 0,
    "react/prefer-stateless-function": 0
  },
  "env": {
    "browser": true
  }
};
