var webpack = require('webpack');

module.exports = {
	entry: {
    common: __dirname + '/_src/js/index.js'
  },
	output: {
		path: __dirname + '/_dist/assets/js',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }
		]
	}
};
