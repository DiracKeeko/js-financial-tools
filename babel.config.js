const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: { version: 2 },
    },
  ],
];

const plugins = [
  "@babel/plugin-transform-runtime",
  [
    "module-resolver",
    {
      "alias": {
        "@": "./src",
      },
    },
  ],
];

module.exports = { presets, plugins };
