(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/provider/starknet-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StarknetProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@starknet-react+chains@3.1.3/node_modules/@starknet-react/chains/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@starknet-react+core@3.7.4_get-starknet-core@4.0.0_react@19.1.0_starknet@6.24.1_typescript@5.8.3/node_modules/@starknet-react/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$injectedConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/injectedConnector.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__InjectedConnector$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript) <export I as InjectedConnector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$webwalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/webwalletConnector.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__W__as__WebWalletConnector$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-8edbd361.js [app-client] (ecmascript) <export W as WebWalletConnector>");
"use client";
;
;
;
;
;
const connectors = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__InjectedConnector$3e$__["InjectedConnector"]({
        options: {
            id: "argentX",
            name: "Argent X"
        }
    }),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__InjectedConnector$3e$__["InjectedConnector"]({
        options: {
            id: "braavos",
            name: "Braavos"
        }
    }),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__W__as__WebWalletConnector$3e$__["WebWalletConnector"]({
        url: "https://web.argent.xyz"
    })
];
function StarknetProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarknetConfig"], {
        chains: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"]
        ],
        provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicProvider"])(),
        connectors: connectors,
        explorer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voyager"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/provider/starknet-provider.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = StarknetProvider;
var _c;
__turbopack_context__.k.register(_c, "StarknetProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_provider_starknet-provider_tsx_5ec440c0._.js.map