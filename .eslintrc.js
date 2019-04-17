'use strict';

module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'script',
		ecmaVersion: 2015
	},
	plugins: [
		'node'
	],
	extends: [
		'plugin:node/recommended',
		'eslint-config-bbva'
	]
};
