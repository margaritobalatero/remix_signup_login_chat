// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm", // Use ESM
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  
  // Optional: Add Vercel/Netlify specific settings
  // serverBuildTarget: "vercel", // For Vercel
  // serverBuildTarget: "netlify", // For Netlify
};