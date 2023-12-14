const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      // {
      //   test: /\.ts$/,
      //   loader: "ts-loader",
      //   exclude: /node_modules/,
      //   options: {
      //     appendTsSuffixTo: [/\.vue$/],
      //   },
      // },
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(styl|stylus)$/,
        // 将 Stylus 文件编译为 CSS
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: "asset",
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "oh my app",
      template: "./template.html",
    }),
  ],
  // 解析规则
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
};
