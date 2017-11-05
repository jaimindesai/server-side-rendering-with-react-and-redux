const path = require('path');

module.exports = {

    entry: './src/clients/client.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public')
    },

 module: {
     rules: [
        {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: [
                'react',
                'stage-0',
                ['env',{target:{browsers: ['last 2 versions']}}]
            ]
        }
    }
    ]
 }
}