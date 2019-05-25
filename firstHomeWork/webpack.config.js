var path = require("path");

module.exports = {
  entry: {
    app: ["./src/JScode.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "main.js"
  }
};