const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const baseConfig = require("./webpack.base.js");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      // from后的路径是相对于项目的根目录，to后的路径是相对于打包后的dist目录
      patterns: [{ from: "./public", to: "./public" }],
    }),
  ],
});
