module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ["jest-dom"],
  rules: {
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
  },
};
