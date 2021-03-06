module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'@vue/typescript/recommended',
		'prettier',
	],
	plugins: ['simple-import-sort'],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-param-reassign': 'off',
		'no-restricted-syntax': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-continue': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'import/prefer-default-export': 'off',
		'@typescript-eslint/no-var-requires': 'off',
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['~', './src']],
				extensions: ['.js', '.ts', '.vue'],
			},
		},
	},
};
