# babel-plugin-modules-regexp [![Build Status](https://travis-ci.org/BBVAEngineering/babel-plugin-modules-regexp.svg?branch=master)](https://travis-ci.org/BBVAEngineering/babel-plugin-modules-regexp) [![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fbabel-plugin-modules-regexp.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fbabel-plugin-modules-regexp) [![Dependency Status](https://david-dm.org/BBVAEngineering/babel-plugin-modules-regexp.svg)](https://david-dm.org/BBVAEngineering/babel-plugin-modules-regexp)

## Information

[![NPM](https://nodei.co/npm/babel-plugin-modules-regexp.png?downloads=true&downloadRank=true)](https://nodei.co/npm/babel-plugin-modules-regexp/)

## Motivation

Bypass framework limitation to configure babel options like `getModuleId`.

This plugin injects a regexp to replace default module names.

## Usage

```
{
  "plugins": [
    ["babel-plugin-modules-regexp", {
      regexp: /(foo)/,
      substr: 'test/$1'
    }]
  ]
}

```
