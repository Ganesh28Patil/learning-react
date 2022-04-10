const { dirname } = require("path");

const path = require("path");
module.exports = {
    entry:'./src/index.js',
    output:{
        // path:path.join(__dirname,"build"),
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js",
    },
    mode:"development",
    module:{
        rules:[{test:/\.css$/,use:["style-loader","css-loader"],}, 
        {test: /\.(png|jpe?g|gif)$/i,use: [{loader: 'file-loader',},],},
   /* { test: /\.(png|svg|jpg|jpeg|gif)$/i,type: 'asset/resource', },*/]
    },
   
}
