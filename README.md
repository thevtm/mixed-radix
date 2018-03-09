# Mixed Radix

![npm](https://img.shields.io/npm/v/mixed-radix.svg) ![Travis](https://img.shields.io/travis/thevtm/mixed-radix.svg)

A small library that encode and decode using [mixed radix].

```javascript
mrDecode([2, 3], 5); // [1, 2]
mrEncode([2, 3], [1, 2]); // 5

mrDecode([3, 3, 2], 7); // [1, 0, 1]
mrEncode([3, 3, 2], [1, 0, 1]); // 7

mrDecode([24, 24, 60], 3661); // [1, 1, 1]
mrEncode([24, 60, 60], [1, 1, 1])); // 3661
```

[mixed radix]: https://en.wikipedia.org/wiki/Mixed_radix
