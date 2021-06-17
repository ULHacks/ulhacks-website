module.exports = {
	purge: ['./src/**/*.vue'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				height: 'height',
			},
			colors: {
				'ul-blue': '#3ea7dd',
				'ul-blue-light': '#cee9f7',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
