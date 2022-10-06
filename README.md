# js-financial-tools

**Tools commonly used in front-end development financial scenarios**

[![npm version](https://img.shields.io/npm/v/js-financial-tools.svg)](https://www.npmjs.com/package/js-financial-tools)

## Features

- Simple API, support modular import
- No dependencies
- ~~Unit function test coverage rate and line output coverage rate are both 100%~~

### @2.0.0 
- ↑ refactor this project by typescript, now ts project can use those tools directly
- modular outputs format were set to "esm" ("cjs" format in version 1.x.x)
- ↓ mocha unit test was removed because of the conflict between mocha ts config and compilation config

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
console.log(res1); // +23.358%

const res2 = jsFinancialTools.formatter.formatToPercent(0.232323, "", 2);
console.log(res2); // 23.23%
```

Use the getIntPartLength method in acquire module.

```javascript
const res3 = jsFinancialTools.acquire.getIntPartLength(123.456);
console.log(res3); // 3
```

## Modular import

There is a modules directory in the project compilation product, the output format of these files is CJS

*The directory list example is as follows*
```
|-- modules
    |-- number.js
    |-- formatter.js
    |-- acquire.js
    |-- compare.js
```

CommonJS:
```javascript
const { isRealNumber } = require('js-financial-tools/modules/number');
```

ES module:
```javascript
import { isRealNumber } from 'js-financial-tools/modules/number';
```


