// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs", // Use CJS for Netlify compatibility
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
};