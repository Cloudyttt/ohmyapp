const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true, // 在每次构建前清理 /dist 文件夹，这样只会生成用到的文件
  },
  // 解析规则
  resolve: {
    extensions: [".ts", ".js", ".json", ".vue"],
    alias: {
      "~": path.resolve(__dirname, "../src"),
    },
  },
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
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
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
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
