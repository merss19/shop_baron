


module.exports = {
    entry: "./app/scripts/main.js",
    output: {
        filename: "dist/assets/scripts/main.js"
    },



    module: {
        loaders:[{
             test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"

        }]
    },
    watch:true


};
