# babel-plugin-modules-regexp

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
