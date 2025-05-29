module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/src/app/components/wallet.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WalletConnectorModal": (()=>WalletConnectorModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@starknet-react+core@3.7.4_get-starknet-core@4.0.0_react@19.1.0_starknet@6.24.1_typescript@5.8.3/node_modules/@starknet-react/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$starknetkit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/starknetkit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
"use client";
;
;
;
const buttonStyles = "bg-[#e2a127] border-black border rounded-lg p-2 transition-shadow hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] cursor-pointer";
;
function WalletConnectorModal() {
    const { connect, connectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnect"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { starknetkitConnectModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$starknetkit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStarknetkitConnectModal"])({
        connectors: connectors
    });
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$core$40$3$2e$7$2e$4_get$2d$starknet$2d$core$40$4$2e$0$2e$0_react$40$19$2e$1$2e$0_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    async function connectWallet() {
        const { connector } = await starknetkitConnectModal();
        if (!connector) {
            return;
        }
        await connect({
            connector: connector
        });
    }
    // const optionsRef = React.useRef<HTMLDivElement>(null);
    // // Sync state when account changes
    // useEffect(() => {
    //   setShowOptions(false);
    //   // You can add more sync logic here if needed
    // }, [address]);
    // useEffect(() => {
    //   if (!showOptions) return;
    //   function handleClickOutside(event: MouseEvent) {
    //     if (
    //       optionsRef.current &&
    //       !optionsRef.current.contains(event.target as Node)
    //     ) {
    //       setShowOptions(false);
    //     }
    //   }
    //   document.addEventListener("mousedown", handleClickOutside);
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, [showOptions]);
    console.log("WalletConnectorModal rendered", __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["stat"]);
    if (!address) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: connectWallet,
            className: buttonStyles,
            children: "Connect Wallet"
        }, void 0, false, {
            fileName: "[project]/src/app/components/wallet.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
// return (
//   <div className="relative flex flex-col gap-2">
//     <button
//       onClick={() => setShowOptions((prev) => !prev)}
//       className={buttonStyles}
//     >
//       {address?.slice(0, 8)}...{address?.slice(-4)}
//     </button>
//     {showOptions && (
//       <div
//         ref={optionsRef}
//         className="absolute top-full right-0 mt-2 min-w-[200px] bg-white border border-black rounded-lg shadow-lg z-10 p-1"
//       >
//         <button
//           onClick={() => {
//             navigator.clipboard.writeText(address!);
//             setShowOptions(false);
//           }}
//           className="block w-full text-left px-4 py-2 hover:bg-[#e2a127] cursor-pointer rounded-lg  cursor-pointer"
//         >
//           Copy Address
//         </button>
//         <a
//           href={`https://starkscan.co/contract/${address}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block w-full text-left px-4 py-2 hover:bg-[#e2a127] cursor-pointer rounded-lg cursor-pointer"
//           onClick={() => setShowOptions(false)}
//         >
//           View on Explorer
//         </a>
//         <button
//           onClick={() => {
//             disconnect();
//             setShowOptions(false);
//           }}
//           className="block w-full text-left px-4 py-2 hover:bg-[#e2a127] cursor-pointer rounded-lg cursor-pointer"
//         >
//           Disconnect
//         </button>
//       </div>
//     )}
//   </div>
// );
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__becb5036._.js.map