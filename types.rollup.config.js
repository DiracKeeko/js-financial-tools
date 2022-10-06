import dts from "rollup-plugin-dts";

const fs = require("fs");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

const plugins = [dts()];

const bundleOutputOptions = {
  input: "src/index.ts",
  output: {
    file: "dist/js-financial-tools.d.ts"
  },
  plugins,
};

const bundleMinOutputOptions = {
  input: "src/index.ts",
  output: {
    file: "dist/js-financal-tools.min.d.ts"
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
  },
  plugins,
};

export default isProduction
? [bundleMinOutputOptions]
: [bundleOutputOptions, moduleOutputOptions];
