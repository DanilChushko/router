const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new WriteFilePlugin(),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'importmap.json'),
				to: path.resolve(__dirname, 'dist/importmap.json'),
			},
		]),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body',
			templateParameters: {
				hash: new Date().getTime(),
			},
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		}
	}
};