'use strict';

const { module: describe, test: it } = require('qunit');
const babel = require('@babel/core');
const Plugin = require('../src');
const path = require('path');

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

		assert.ok((/^define\("foz"/).test(actual));
	});

	it('replaces module dependencies', (assert) => {
		const actual = transform('import bar from "bar"', 'foo', {
			regexp: 'bar',
			substr: 'baz'
		});

		assert.ok((/\["baz"\]/).test(actual));
	});

	it('has base dir', (assert) => {
		const baseDir = Plugin.baseDir();

		assert.equal(baseDir, path.resolve('src'));
	});
});

describe('modules-regexp with getModuleId', () => {
	function transform(code, moduleId, pluginOptions) {
		const options = {
			moduleId,
			getModuleId(name) {
				return `dummy/${name}`;
			},
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

		assert.ok((/^define\("dummy\/foz"/).test(actual));
	});

	it('replaces module dependencies', (assert) => {
		const actual = transform('import bar from "bar"', 'foo', {
			regexp: 'bar',
			substr: 'baz'
		});

		assert.ok((/\["baz"\]/).test(actual));
	});
});

