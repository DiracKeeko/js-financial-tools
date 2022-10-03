import filesize from "rollup-plugin-filesize";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
import alias from "@rollup/plugin-alias";
import typescript from "@rollup/plugin-typescript";

import dts from 'rollup-plugin-dts'

const fs = require("fs");
const path = require("path");
function resolveDir(dir) {
  return path.join(__dirname, dir);
}

const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  dts(),
  // typescript(),
  // eslint({
  //   throwOnError: true,
  //   throwOnWarning: true,
  //   include: ["src/**"],
  //   exclude: ["node_modules/**"],
  // }),
  // resolve(),
  // commonjs(),
  // filesize(),
  // babel({ babelHelpers: "runtime", exclude: ["node_modules/**"] }),
  // alias({
  //   entries: [{ find: "@", replacement: resolveDir("src") }],
  // }),
  // isProduction && terser(),
];

const bundleOutputOptions = {
  input: "src/index.ts",
  output: {
    file: isProduction
      ? "dist/js-financal-tools.min.ts"
      : "dist/js-financial-tools.ts",
    format: "umd",
    exports: "default",
    name: "jsFinancialTools",
  },
  plugins,
};

function walkSync(curPath, callback) {
  const indexReg = /index/;
  fs.readdirSync(curPath).forEach(function (name) {
    const filePath = path.join(curPath, name);
    const stat = fs.statSync(filePath); // stat has a lot of file information
    if (stat.isFile()) {
      !indexReg.test(filePath) && callback(filePath, stat); // ban "/*/index.ts"
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

const inputObj = {};
walkSync("src", function (filePath, stat) {
  const fileNameReg = /\\([a-z]+)\.ts$/;
  filePath.replace(fileNameReg, (matchStr, fileName) => {
    inputObj[fileName] = filePath;
  });
});

const moduleOutputOptions = {
  input: inputObj,
  output: {
    dir: "modules",
    format: "cjs", // cjs or esm; UMD and IIFE output formats are not supported for code-splitting builds.
    name: "[name].ts",
  },
  plugins,
};

export default isProduction
  ? [bundleOutputOptions]
  : [bundleOutputOptions, moduleOutputOptions];
