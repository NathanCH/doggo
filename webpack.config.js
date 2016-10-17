var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:3000/build/'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				include: path.resolve(__dirname, 'src'),
				loader: ExtractTextPlugin.extract('css-loader!sass-loader')
			},
			{ 
			 	test: /\.jsx?$/, 
			 	loaders: ['react-hot', 'jsx-loader', 'babel-loader?presets[]=es2015&presets[]=react'], 
			 	include: path.join(__dirname, 'src') 
			}
		]
	},
	watch: true,
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('styles.css'),
		new webpack.HotModuleReplacementPlugin()
	]
};