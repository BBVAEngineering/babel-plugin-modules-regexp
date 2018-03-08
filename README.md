# babel-plugin-modules-regexp

[![Build Status](https://travis-ci.org/BBVAEngineering/babel-plugin-modules-regexp.svg?branch=master)](https://travis-ci.org/BBVAEngineering/babel-plugin-modules-regexp)
[![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fbabel-plugin-modules-regexp.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fbabel-plugin-modules-regexp)
[![npm version](https://badge.fury.io/js/ember-modal-service.svg)](https://badge.fury.io/js/babel-plugin-modules-regexp)
[![Dependency Status](https://david-dm.org/BBVAEngineering/babel-plugin-modules-regexp.svg)](https://david-dm.org/BBVAEngineering/babel-plugin-modules-regexp)

## Information

[![NPM](https://nodei.co/npm/babel-plugin-modules-regexp.png?downloads=true&downloadRank=true)](https://nodei.co/npm/babel-plugin-modules-regexp/)

## Motivation

Bypass framework limitation to configure babel options like `getModuleId`.

This plugin injects a regexp to replace default module names.

## Usage

```javascript
{
  "plugins": [
    ["babel-plugin-modules-regexp", {
      regexp: /(foo)/,
      substr: 'test/$1'
    }]
  ]
}

```

## Contributing

We're thankful to the community for contributing any improvements.

Do not forget to follow our [eslint](https://github.com/BBVAEngineering/javascript/tree/master/eslint-config-bbva) rules and make tests for the new functionalities/fixes.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/BBVAEngineering/babel-plugin-modules-regexp/tags).

## Authors

See the list of [contributors](https://github.com/BBVAEngineering/babel-plugin-modules-regexp/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
