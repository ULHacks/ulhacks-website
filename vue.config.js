/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
	configureWebpack(config) {
		config.resolve.alias['~'] = path.resolve(__dirname, 'src');
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [autoprefixer, tailwindcss],
			},
		},
	},
};
