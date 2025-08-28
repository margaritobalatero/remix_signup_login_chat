// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  server: "./server.js",
  serverBuildPath: "api/index.js",
  // If you want to use Vite (optional):
  // vite: true,
};