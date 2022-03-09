# js-financial-tools

**前端开发金融场景中常用的工具**

[![npm version](https://img.shields.io/npm/v/js-financial-tools.svg)](https://www.npmjs.com/package/js-financial-tools)

## 特性

- API简单，支持模块化导入
- 无依赖
- 单元测试覆盖率及行输出覆盖率均达到100%

## 安装

入口为单文件 *js-financial-tools.js*.

```bash
$ npm install js-financial-tools
```

### Node.js环境

CommonJS:

```javascript
const jsFinancialTools = require('js-financial-tools');
```

ES module:

```javascript
import jsFinancialTools from 'js-financial-tools';
```

### 浏览器环境

通过src引入全局变量jsFinancialTools

```html
<script src='path/to/js-financial-tools.js'></script>
```

## 使用

JS库导出一个名为`jsFinancialTools`的对象
这个对象的每一个key对应一个src目录下的二级文件

*文件目录示例如下*
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

使用formatter模块下的formatToPercent方法

```javascript
const res1 = jsFinancialTools.formatter.formatToPercent(0.233578, "+", 3);
console.log(res1); // +23.358%

const res2 = jsFinancialTools.formatter.formatToPercent(0.232323, "", 2);
console.log(res2); // 23.23%
```

使用acquire模块下的getIntPartLength方法

```javascript
const res3 = jsFinancialTools.acquire.getIntPartLength(123.456);
console.log(res3); // 3
```

## 模块化导入
项目编译产物中有一个modules目录，这些文件的输出格式是CJS

*文件目录示例如下*
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