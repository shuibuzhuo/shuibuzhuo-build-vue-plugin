const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = function (api, params) {
  const config = api.getWebpackConfig();
  const dir = process.cwd();

  config.entry("index").clear().add(path.resolve(dir, "./src/main.js"));

  config.module
    .rule("vue")
    .test(/\.vue$/)
    .exclude.add(/node_modules/)
    .end()
    .use("vue-loader")
    .loader("vue-loader");

  config.plugin("VueLoaderPlugin").use(VueLoaderPlugin);
};
