(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/wallet.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletConnectorModal": (()=>WalletConnectorModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@starknet-react+core@3.7.4_get-starknet-core@4.0.0_react@19.1.0_starknet@6.24.1_typescript@5.8.3/node_modules/@starknet-react/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$starknetkit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/starknetkit.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const buttonStyles = "bg-[#e2a127] border-black border rounded-lg p-2 transition-shadow hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] cursor-pointer";
function WalletConnectorModal() {
    _s();
    const { connect, connectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"])();
    const { starknetkitConnectModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$starknetkit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStarknetkitConnectModal"])({
        connectors: connectors
    });
    async function connectWallet() {
        const { connector } = await starknetkitConnectModal();
        if (!connector) {
            return;
        }
        await connect({
            connector: connector
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: connectWallet,
        className: buttonStyles,
        children: "Connect Wallet"
    }, void 0, false, {
        fileName: "[project]/src/app/components/wallet.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(WalletConnectorModal, "E5HRuodHQBfcRo8ZmahuRKqoipk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$starknetkit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStarknetkitConnectModal"]
    ];
});
_c = WalletConnectorModal;
var _c;
__turbopack_context__.k.register(_c, "WalletConnectorModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/utils/getShortAddress.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getShortAddress": (()=>getShortAddress)
});
function getShortAddress(address, startChars = 6, endChars = 4) {
    if (!address) {
        return "";
    }
    if (address.length <= startChars + endChars) {
        return address;
    }
    return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/utils/parseBalance.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseBalance": (()=>parseBalance)
});
function parseBalance(balanceData, displayDecimals = 4) {
    if (!balanceData) return "0.0000";
    const { formatted, symbol } = balanceData;
    const balance = parseFloat(formatted);
    const formattedBalance = balance.toFixed(displayDecimals);
    return `${formattedBalance} ${symbol}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/home/page.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/home/page.tsx'

Expected ';', '}' or <eof>`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
}]);

//# sourceMappingURL=src_app_fbd71d8f._.js.map