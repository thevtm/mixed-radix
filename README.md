# Mixed Radix

![Travis](https://img.shields.io/travis/thevtm/mixed-radix.svg) ![npm](https://img.shields.io/npm/v/mixed-radix.svg) [![Coverage Status](https://coveralls.io/repos/github/thevtm/mixed-radix/badge.svg)](https://coveralls.io/github/thevtm/mixed-radix)

A small library that encode and decode using [mixed radix].

[Try it online.](https://npm.runkit.com/mixed-radix)

## Install

`npm install --save mixed-radix`

## Usage

```js
mrDecode([2, 3], 5); // [1, 2]
mrEncode([2, 3], [1, 2]); // 5

mrDecode([3, 3, 2], 7); // [1, 0, 1]
mrEncode([3, 3, 2], [1, 0, 1]); // 7

mrDecode([24, 24, 60], 3661); // [1, 1, 1]
mrEncode([24, 60, 60], [1, 1, 1])); // 3661
```

## API

### mrEncode(bases, ns)

Encodes using mixed radix.

- **bases**: `number[]` Mixed bases, must be integers.
- **ns**: `number[]` Values to encode, must be an array of integer with the same length as bases.

**return**: `number` Encoded values.

### mrDecode(bases, n)

Decodes mixed radix.

- **bases**: `number[]` Mixed bases, must be an array integers.
- **n**: `number[]` Values to decode, must be an integer.

**return**: `number[]` Decoded values.

[mixed radix]: https://en.wikipedia.org/wiki/Mixed_radix

## License

MIT
