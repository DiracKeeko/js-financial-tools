module.exports = {
  require: ["@babel/register"], // 运行单测代码时需要使用babel解析
  // require: ["ts-node/register", "tsconfig-paths/register"], // 运行单测代码时需要使用babel解析 test1 failed
  recursive: true, // 深度遍历指定目录
  spec: "test/", // 遍历test/目录下的所有文件夹，执行所有测试代码
  // spec: 'test/**/*.test.js', // 运行test目录下的所有单测代码
};
