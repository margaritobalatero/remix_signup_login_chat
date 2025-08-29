// server.js
const { createRequestHandler } = require("@remix-run/netlify");

function purgeRequireCache() {
  // Purge require cache on requests for "server side HMR" (Hot Module Replacement)
  for (const key in require.cache) {
    if (key.startsWith(__dirname)) {
      delete require.cache[key];
    }
  }
}

exports.handler = createRequestHandler({
  build: require("./build"),
  getLoadContext(event, context) {
    return { event, context };
  },
});