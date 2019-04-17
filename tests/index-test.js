'use strict';
/* globals QUnit */

const { module: describe, test: it } = QUnit;
const babel = require('@babel/core');
const Plugin = require('../src');

describe('modules-regexp', () => {
	function transform(code, moduleId, pluginOptions) {
		const options = {
			moduleId,
			filenameRelative: `${moduleId}.js`,
			plugins: [
				['@babel/plugin-transform-modules-amd', { noInterop: true }],
				[Plugin, pluginOptions]
			]
		};

		return babel.transform(code, options).code.trim();
	}

	it('replaces module name', (assert) => {
		const actual = transform('import bar from "bar"', 'foo', {
			regexp: 'foo',
			substr: 'foz'
		});

		assert.ok(/^define\("foz"/.test(actual));
	});

	it('replaces module dependencies', (assert) => {
		const actual = transform('import bar from "bar"', 'foo', {
			regexp: 'bar',
			substr: 'baz'
		});

		assert.ok(/\["baz"\]/.test(actual));
	});
});
