const tailwindcss = require("tailwindcss");
const { plugins } = require("./webpack.config");
module.exports = {
  plugins: ["postcss-preset-env", "tailwindcss"],
};
