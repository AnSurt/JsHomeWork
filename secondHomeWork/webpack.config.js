var path = require("path");

module.exports = {
  entry: {
    app: ["./modules/board.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "main.js"
  }
};