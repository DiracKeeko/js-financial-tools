# js-financial-tools

**Tools commonly used in front-end development financial scenarios**

[![npm version](https://img.shields.io/npm/v/js-financial-tools.svg)](https://www.npmjs.com/package/js-financial-tools)

## Features

- Simple API
- No dependencies
- Unit function test coverage and line output coverage are both 100%

## Install

The library is the single JavaScript file *js-financial-tools.js*.

```bash
$ npm install js-financial-tools
```

### Node.js

CommonJS:

```javascript
const jsFinancialTools = require('js-financial-tools');
```

ES module:

```javascript
import jsFinancialTools from 'js-financial-tools';
```

### Browsers

Add jsFinancialTools to global scope:

```html
<script src='path/to/js-financial-tools.js'></script>
```

## Use

The library exports a single object, `jsFinancialTools`.
Each key of this object corresponds to a secondary file in the src folder.

*The directory list example is as follows*
```
|-- src
    |-- index.js
    |-- calc
    |   |-- index.js
    |   |-- number.js
    |-- display
    |   |-- formatter.js
    |   |-- index.js
    |-- util
        |-- acquire.js
        |-- compare.js
        |-- index.js
```

Use the formatToPercent method in formatter module.

```javascript
const res1 = jsFinancialTools.formatter.formatToPercent(0.233578, "+", 3);
console.log(res1); // 23.358%
```

Use the getIntPartLength method in acquire module.

```javascript
const res2 = jsFinancialTools.acquire.getIntPartLength(123.456);
console.log(res2); // 3
```
