
const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
   },
   devtool: "eval-source-map",
   devServer: {
     watchFiles: ["./src/main.html"],
   },
   plugins:[
    new htmlPlugin({
        template: "./src/main.html",
    }),
   ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Matches common image formats
        type: 'asset/resource',
      },
    ],
  },
};