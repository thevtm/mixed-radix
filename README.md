# Mixed Radix

A small library that encode and decode using [mixed radix].

```javascript
mrDecode([2, 3], 5); // [1, 2]
mrEncode([2, 3], [1, 2]); // 5

mrDecode([3, 3, 2], 7); // [1, 0, 1]
mrEncode([3, 3, 2], [1, 0, 1]); // 7
```

[mixed radix]: https://en.wikipedia.org/wiki/Mixed_radix
