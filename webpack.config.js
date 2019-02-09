const path = require("path");

const env = process.env.REACT_APP_ENV;

module.exports = {
  mode: env || "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};
