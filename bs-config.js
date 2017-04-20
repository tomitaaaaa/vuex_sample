
var historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  files: './_dist/**/*',
  server: {
    baseDir: './_dist/',
    index: 'index.html',
    middleware: [ historyApiFallback() ]
  }
};