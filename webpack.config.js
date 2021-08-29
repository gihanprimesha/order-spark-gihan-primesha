'use strict';

const webpack = require('webpack'),
	path = require('path');
const APP_DIR = path.resolve(__dirname, './public/');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: {
		app: './public/app.js',
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash:6].bundle.js',
		publicPath: process.env.BASE_URL,
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue: '@vue/runtime-dom',
		},
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: APP_DIR + '/views/index.html',
			filename: './index.html',
		}),
		new VueLoaderPlugin(),
	],
	devtool: 'source-map',
	devServer: {
		// inline: false,
		port: '8090',
		// contentBase: APP_DIR,
		// 	watchContentBase: true,
		// 	static: 'dist',
	},
};
