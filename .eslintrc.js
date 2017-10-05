module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "modules": true,
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "jsx-quotes": ["error", "prefer-single"],
    "react/jsx-curly-spacing": [2, "never", {"allowMultiline": false}],
    "react/jsx-max-props-per-line": [2, {maximum: 3}],
    // "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": [2, {selfClosing: "after-props", nonEmpty: "after-props"}],
    // "react/jsx-no-literals": 1,
    "react/sort-prop-types": 2,
    "react/self-closing-comp": 2,
    "react/prefer-stateless-function": 0,
    "linebreak-style": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 0,
    "object-shorthand": 0,
    "react/jsx-curly-spacing": 0,
    "arrow-body-style": 0,
    "max-len": [
      2,
      120
    ]
  }
};
