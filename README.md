# scroll-animation.js

animate scrolling

## Installation

```sh
$ npm install sasaplus1-prototype/scroll-animation.js
```

## Usage

via `require()`

```js
var scrollAnimation = require('scroll-animation');
```

via `<script>`

```html
<script src="scroll-animation.min.js"></script>
```

### Example

```js
var params = {
  duration: 500,
  from: 400,
  to: 0
};

scrollAnimation.scroll(params, function() {
  console.log('scrolled');
});
```

## Functions

### createTween(params)

- `params`
  - `Object`
- `params.duration`
  - `Number`
- `params.from`
  - `Number`
- `params.to`
  - `Number`
- `return`
  - `Tween`

return tween instance.

### scroll(params, callback)

- `params`
  - `Object`
- `params.duration`
  - `Number`
- `params.from`
  - `Number`
- `params.to`
  - `Number`
- `[params.timer]`
  - `Function`
- `[params.easing]`
  - `Function`
- `callback`
  - `Function`
- `return`
  - `Tween`

scroll with animation.

## License

The MIT license.
