import {
  createHotContext
} from "/build/_shared/chunk-N5HM5AQT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-PNG5AS42.js";

// app/routes/ws.ts
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\ws.ts"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\ws.ts"
  );
  import.meta.hot.lastModified = "1756377991416.7";
}
function WebSocketRoute() {
  return null;
}
_c = WebSocketRoute;
var _c;
$RefreshReg$(_c, "WebSocketRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WebSocketRoute as default
};
//# sourceMappingURL=/build/routes/ws-AHIX6DO2.js.map
