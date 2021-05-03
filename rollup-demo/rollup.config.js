import image from '@rollup/plugin-image';
const html = require("@rollup/plugin-html");

module.exports = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [html({ title: "使用rollup构建的html" }),image()],
};
