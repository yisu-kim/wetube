const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.resolve(__dirname, "static");

module.exports = {
  mode: MODE,
  entry: ["@babel/polyfill", ENTRY_FILE],
  plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // MODE === "production" ? MiniCssExtractPlugin.loader : "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: OUTPUT_DIR,
  },
};
