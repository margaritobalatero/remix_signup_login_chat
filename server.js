// server.js
import { createRequestHandler } from "@vercel/remix";
export default createRequestHandler({ build: require("./build") });