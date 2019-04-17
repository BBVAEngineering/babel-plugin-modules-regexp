'use strict';

module.exports = function modulesRegexp() {
	return {
		pre(file) {
			const opts = file.opts;
			const getModuleId = opts.getModuleId;
			const regexp = this.opts.regexp;
			const substr = this.opts.substr;

			opts.getModuleId = (moduleName) => {
				moduleName = getModuleId ? getModuleId.apply(opts, [moduleName]) : moduleName;

				return moduleName.replace(regexp, substr);
			};
		},
		visitor: {
			ImportDeclaration(path) {
				const regexp = this.opts.regexp;
				const substr = this.opts.substr;

				path.node.source.value = path.node.source.value.replace(regexp, substr);
			}
		}
	};
};

module.exports.baseDir = function baseDir() {
	return __dirname;
};
