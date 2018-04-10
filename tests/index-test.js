'use strict';
/* globals QUnit */

const { module: describe, test: it } = QUnit;
const babel = require('babel-core');
const amdNameResolver = require('amd-name-resolver');
const Plugin = require('../src');

describe('modules-regexp', () => {
	function transform(code, moduleId, pluginOptions) {
		const options = {
			moduleId,
			filename: `${moduleId}.js`,
			resolveModuleSource: amdNameResolver.moduleResolve,
			plugins: [
				['transform-es2015-modules-amd'],
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
