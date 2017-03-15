var amodroTrace = require('amodro-trace'),
    path = require('path');

const util = require('util')

function trace(id) {
  return amodroTrace(
    // The options for trace
    {
      // The root directory, usually the root of the web project, and what the
      // AMD baseUrl is relative to. Should be an absolute path.
      rootDir: __dirname,

      fileRead: function(defaultRead, id, filePath) {
        console.log(filePath);
        return defaultRead(id, filePath);
      },

      // The module ID to trace.
      id: id
    }, {
      baseUrl: "./src"
    }
  ).then(function(traceResult) {
    console.log(util.inspect(traceResult, {showHidden: false, depth: null}))
  }).catch(function(error) {
    console.error(error);
  });
}

trace('app');