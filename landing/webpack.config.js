const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/Landing",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3003,
    },
    output: {
      publicPath: "auto",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-flow"],
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "Landing",
        filename: "remoteEntry.js",
        exposes:{
          "./Landing": "./src/Landing"
        },
        shared: {
          "@material-ui/core": {
            singleton: true,
          },
          "@material-ui/styles": {
            singleton: true
          },
          "react-router-dom": {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
          react: {
            singleton: true,
          },
        },
      })
    ],
  };