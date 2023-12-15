const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require("./webpack.base.js");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
});
