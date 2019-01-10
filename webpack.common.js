/* eslint 
  import/no-extraneous-dependencies: 0,
  no-undef: 0
*/
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src/"),
  entry: {
    app: "./demos/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist/public/js"),
    filename: "app.js",
    publicPath: "/",
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      RMComponents: path.resolve(__dirname, "./src/libs"),
    },
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./public",
        to: path.resolve(__dirname, "./dist/public"),
        force: true,
      },
      {
        from: "./server",
        to: path.resolve(__dirname, "./dist"),
        force: true,
      },
      {
        from: "../dist/compressed.css",
        to: path.resolve(__dirname, "./dist/public/css/compressed.css"),
        force: true,
      },
    ]),
  ],
};
