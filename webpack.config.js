const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// ENVIRONMENT VARIABLES

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: 'Development.env' });

} else if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({ path: 'Production.env' });
}

//MODULE EXPORTS

module.exports = (env) => {
    console.log('Build Environment :', env);
    const isProduction = (env === 'production');
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },

        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },// CSS-LOADER
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        } // SASS_LOADER
                    ] // USE : USE
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.APIKEY1': JSON.stringify(process.env.APIKEY1),
                'process.env.APIKEY2': JSON.stringify(process.env.APIKEY2)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    }
}
