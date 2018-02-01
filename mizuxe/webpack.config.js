const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

  module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
               test: /\.scss$/,
               loader: 'style-loader!css-loader!sass-loader'
            },
            // {
            //     test: /\.(scss)$/,
            //     use: [{
            //       loader: 'style-loader', // inject CSS to page
            //     }, {
            //       loader: 'css-loader', // translates CSS into CommonJS modules
            //     }, {
            //       loader: 'postcss-loader', // Run post css actions
            //       options: {
            //         plugins: function () { // post css plugins, can be exported to postcss.config.js
            //           return [
            //             require('precss'),
            //             require('autoprefixer')
            //           ];
            //         }
            //       }
            //     }, {
            //       loader: 'sass-loader' // compiles Sass to CSS
            //     }]
            //   },
              {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            //{
            //    test: /\.(png|svg|jpg|gif)$/,
            //    use: ['file-loader']
            //},
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'img/[name].[ext]'
                    } 
                }]
            }
    
        ],
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
