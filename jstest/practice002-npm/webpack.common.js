const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	//entry: './src/index.js',
	entry: {
		index: './src/index.js'
		// , another: './src/another-module.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
	],
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		    {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
		    },
		    {
			    test: /\.(png|svg|jpg|gif)$/,
			    use: [
				  'file-loader'
			    ]
		    },
			{
				test: /.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};