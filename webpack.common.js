const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "sourcemap",
    entry: {
        vendor: "./src/vendor.js",
        main: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/views/index.pug",
            minify: false,
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/views/about.pug",
            minify: false,
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/views/contact.pug",
            minify: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader",
                        options: {
                            pretty: true
                        }
                    },
                ],
            },
        ],
    }
};