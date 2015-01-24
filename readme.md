# string-match [![Build Status](http://img.shields.io/travis/matiassingers/string-match.svg?style=flat-square)](https://travis-ci.org/matiassingers/string-match) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/string-match.svg?style=flat-square)](https://gemnasium.com/matiassingers/string-match)
> return first match or empty string

## Install

```sh
$ npm install --save string-match
```


## Usage

```js
var stringMatch = require('string-match');

stringMatch('foo bar', /[bc]ar/);
// => bar
```


## CLI

```sh
$ npm install --global string-match
```

```sh
$ string-match --help
  
  return first match or empty string

  Example
    string-match "foo bar" /[bc]ar/
    => bar
```


## License

MIT © [Matias Singers](http://mts.io)
