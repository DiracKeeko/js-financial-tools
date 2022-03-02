import filesize from 'rollup-plugin-filesize'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import commonjs from '@rollup/plugin-commonjs'
import eslint from '@rollup/plugin-eslint'
import alias from '@rollup/plugin-alias';

const path = require('path');
function resolveDir(dir) {
  return path.join(__dirname, dir);
}

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.js',
  output: {
    file: isProduction ? 'dist/js-financal-tools.min.js' : 'dist/js-financial-tools.js',
    format: 'umd',
    exports: 'default',
    name: 'JsFinancalTools',
  },
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    resolve(),
    commonjs(),
    filesize(),
    babel({ babelHelpers: 'runtime', exclude: ['node_modules/**'] }),
    alias({
      entries: [
        { find: '@', replacement: resolveDir('src') }
      ]
    }),
    (isProduction && uglify()),
  ]
}
