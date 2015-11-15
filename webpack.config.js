var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/index.js',
  out: 'dist',
  clearBeforeBuild: true
});