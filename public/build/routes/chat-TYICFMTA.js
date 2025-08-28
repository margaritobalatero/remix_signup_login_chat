import {
  require_auth,
  require_db
} from "/build/_shared/chunk-Y2BOH5YV.js";
import {
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-MID7PSDM.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  createHotContext
} from "/build/_shared/chunk-N5HM5AQT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/chat.tsx
var import_node = __toESM(require_node(), 1);

// app/components/Chat.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Chat.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Chat.tsx"
  );
  import.meta.hot.lastModified = "1756281181793.331";
}
function Chat({
  messages: initialMessages,
  username
}) {
  _s();
  const [messages, setMessages] = (0, import_react2.useState)(initialMessages);
  const fetcher = useFetcher();
  const messageEndRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  (0, import_react2.useEffect)(() => {
    if (fetcher.data?.newMessage) {
      setMessages((prev) => [...prev, fetcher.data.newMessage]);
    }
  }, [fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "chat-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "chat-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Chat Room" }, void 0, false, {
        fileName: "app/components/Chat.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        "Welcome, ",
        username,
        "!"
      ] }, void 0, true, {
        fileName: "app/components/Chat.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Chat.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "messages-container", children: [
      messages.map((message) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `message ${message.sender === username ? "own-message" : "other-message"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "message-sender", children: message.sender }, void 0, false, {
          fileName: "app/components/Chat.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "message-content", children: message.content }, void 0, false, {
          fileName: "app/components/Chat.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "message-time", children: new Date(message.timestamp).toLocaleTimeString() }, void 0, false, {
          fileName: "app/components/Chat.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, message._id, true, {
        fileName: "app/components/Chat.tsx",
        lineNumber: 49,
        columnNumber: 34
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: messageEndRef }, void 0, false, {
        fileName: "app/components/Chat.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Chat.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", className: "message-form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "message", placeholder: "Type your message...", required: true, className: "message-input" }, void 0, false, {
        fileName: "app/components/Chat.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "send-button", children: "Send" }, void 0, false, {
        fileName: "app/components/Chat.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Chat.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Chat.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(Chat, "Un53X9R2BV1EbgqGMpE5StLrawQ=", false, function() {
  return [useFetcher];
});
_c = Chat;
var _c;
$RefreshReg$(_c, "Chat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/chat.tsx
var import_auth = __toESM(require_auth(), 1);
var import_session = __toESM(require_session(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\chat.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\chat.tsx"
  );
  import.meta.hot.lastModified = "1756274455239.803";
}
function ChatRoute() {
  _s2();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chat-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "chat-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Chat App" }, void 0, false, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "logout-button", children: "Logout" }, void 0, false, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Chat, { messages: data.messages, username: data.username }, void 0, false, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/chat.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_s2(ChatRoute, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c2 = ChatRoute;
var _c2;
$RefreshReg$(_c2, "ChatRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ChatRoute as default
};
//# sourceMappingURL=/build/routes/chat-TYICFMTA.js.map
