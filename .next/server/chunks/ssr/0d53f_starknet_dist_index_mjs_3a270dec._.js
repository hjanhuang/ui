module.exports = {

"[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Account": (()=>Account),
    "AccountInterface": (()=>AccountInterface),
    "BatchClient": (()=>BatchClient),
    "BlockStatus": (()=>BlockStatus),
    "BlockTag": (()=>BlockTag),
    "CairoCustomEnum": (()=>CairoCustomEnum),
    "CairoFixedArray": (()=>CairoFixedArray),
    "CairoOption": (()=>CairoOption),
    "CairoOptionVariant": (()=>CairoOptionVariant),
    "CairoResult": (()=>CairoResult),
    "CairoResultVariant": (()=>CairoResultVariant),
    "CairoUint256": (()=>CairoUint256),
    "CairoUint512": (()=>CairoUint512),
    "CallData": (()=>CallData),
    "Contract": (()=>Contract),
    "ContractFactory": (()=>ContractFactory),
    "ContractInterface": (()=>ContractInterface),
    "CustomError": (()=>CustomError),
    "ETH_ADDRESS": (()=>ETH_ADDRESS),
    "EntryPointType": (()=>EntryPointType),
    "EthSigner": (()=>EthSigner),
    "LedgerSigner": (()=>LedgerSigner111),
    "LedgerSigner111": (()=>LedgerSigner111),
    "LedgerSigner221": (()=>LedgerSigner221),
    "LibraryError": (()=>LibraryError),
    "Literal": (()=>Literal),
    "LogLevelIndex": (()=>LogLevelIndex),
    "NON_ZERO_PREFIX": (()=>NON_ZERO_PREFIX),
    "OutsideExecutionTypesV1": (()=>OutsideExecutionTypesV1),
    "OutsideExecutionTypesV2": (()=>OutsideExecutionTypesV2),
    "OutsideExecutionVersion": (()=>OutsideExecutionVersion),
    "Provider": (()=>RpcProvider2),
    "ProviderInterface": (()=>ProviderInterface),
    "RPC": (()=>api_exports),
    "RPC06": (()=>rpc_0_6_exports),
    "RPC07": (()=>rpc_0_7_exports),
    "RPCResponseParser": (()=>RPCResponseParser),
    "ReceiptTx": (()=>ReceiptTx),
    "ResponseParser": (()=>ResponseParser),
    "RpcChannel": (()=>RpcChannel2),
    "RpcError": (()=>RpcError),
    "RpcProvider": (()=>RpcProvider2),
    "Signer": (()=>Signer),
    "SignerInterface": (()=>SignerInterface),
    "TransactionExecutionStatus": (()=>TransactionExecutionStatus),
    "TransactionFinalityStatus": (()=>TransactionFinalityStatus),
    "TransactionStatus": (()=>TransactionStatus),
    "TransactionType": (()=>TransactionType),
    "UINT_128_MAX": (()=>UINT_128_MAX),
    "UINT_128_MIN": (()=>UINT_128_MIN),
    "UINT_256_HIGH_MAX": (()=>UINT_256_HIGH_MAX),
    "UINT_256_HIGH_MIN": (()=>UINT_256_HIGH_MIN),
    "UINT_256_LOW_MAX": (()=>UINT_256_LOW_MAX),
    "UINT_256_LOW_MIN": (()=>UINT_256_LOW_MIN),
    "UINT_256_MAX": (()=>UINT_256_MAX),
    "UINT_256_MIN": (()=>UINT_256_MIN),
    "UINT_512_MAX": (()=>UINT_512_MAX),
    "UINT_512_MIN": (()=>UINT_512_MIN),
    "Uint": (()=>Uint),
    "ValidateType": (()=>ValidateType),
    "WalletAccount": (()=>WalletAccount),
    "addAddressPadding": (()=>addAddressPadding),
    "byteArray": (()=>byteArray_exports),
    "cairo": (()=>cairo_exports),
    "config": (()=>config),
    "constants": (()=>constants_exports),
    "contractClassResponseToLegacyCompiledContract": (()=>contractClassResponseToLegacyCompiledContract),
    "defaultProvider": (()=>defaultProvider),
    "ec": (()=>ec_exports),
    "encode": (()=>encode_exports),
    "eth": (()=>eth_exports),
    "events": (()=>events_exports),
    "extractContractHashes": (()=>extractContractHashes),
    "fixProto": (()=>fixProto),
    "fixStack": (()=>fixStack),
    "getCalldata": (()=>getCalldata),
    "getChecksumAddress": (()=>getChecksumAddress),
    "getLedgerPathBuffer": (()=>getLedgerPathBuffer111),
    "getLedgerPathBuffer111": (()=>getLedgerPathBuffer111),
    "getLedgerPathBuffer221": (()=>getLedgerPathBuffer221),
    "hash": (()=>hash_exports),
    "isSierra": (()=>isSierra),
    "json": (()=>json_exports),
    "logger": (()=>logger),
    "merkle": (()=>merkle_exports),
    "num": (()=>num_exports),
    "number": (()=>number),
    "outsideExecution": (()=>outsideExecution_exports),
    "parseCalldataField": (()=>parseCalldataField),
    "provider": (()=>provider_exports),
    "selector": (()=>selector_exports),
    "shortString": (()=>shortString_exports),
    "splitArgsAndOptions": (()=>splitArgsAndOptions),
    "src5": (()=>src5_exports),
    "stark": (()=>stark_exports),
    "starknetId": (()=>starknetId_exports),
    "transaction": (()=>transaction_exports),
    "typedData": (()=>typedData_exports),
    "types": (()=>types_exports),
    "uint256": (()=>uint256_exports),
    "units": (()=>units),
    "v2hash": (()=>v2_exports),
    "v3hash": (()=>v3_exports),
    "validateAndParseAddress": (()=>validateAndParseAddress),
    "validateChecksumAddress": (()=>validateChecksumAddress),
    "wallet": (()=>connect_exports)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@starknet-io+types-js@0.7.10/node_modules/@starknet-io/types-js/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$base$40$1$2e$2$2e$1$2f$node_modules$2f40$scure$2f$base$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scure+base@1.2.1/node_modules/@scure/base/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lossless-json@4.0.2/node_modules/lossless-json/lib/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lossless-json@4.0.2/node_modules/lossless-json/lib/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lossless-json@4.0.2/node_modules/lossless-json/lib/esm/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$numberParsers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lossless-json@4.0.2/node_modules/lossless-json/lib/esm/numberParsers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lossless-json@4.0.2/node_modules/lossless-json/lib/esm/stringify.js [app-rsc] (ecmascript)");
// src/types/typedData.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@starknet-io+types-js@0.7.10/node_modules/@starknet-io/types-js/dist/esm/wallet-api/typedData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.7.0/node_modules/@noble/curves/esm/abstract/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$6$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.6.0/node_modules/@noble/hashes/esm/sha256.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scure+starknet@1.1.0/node_modules/@scure/starknet/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$6$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.6.0/node_modules/@noble/hashes/esm/sha3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$poseidon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.7.0/node_modules/@noble/curves/esm/abstract/poseidon.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$weierstrass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.7.0/node_modules/@noble/curves/esm/abstract/weierstrass.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pako$40$2$2e$1$2e$0$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pako@2.1.0/node_modules/pako/dist/pako.esm.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.7.0/node_modules/@noble/curves/esm/secp256k1.js [app-rsc] (ecmascript)");
// src/utils/fetchPonyfill.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fetch$2d$cookie$40$3$2e$0$2e$1$2f$node_modules$2f$fetch$2d$cookie$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fetch-cookie@3.0.1/node_modules/fetch-cookie/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$isomorphic$2d$fetch$40$3$2e$0$2e$0$2f$node_modules$2f$isomorphic$2d$fetch$2f$fetch$2d$npm$2d$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/isomorphic-fetch@3.0.0/node_modules/isomorphic-fetch/fetch-npm-node.js [app-rsc] (ecmascript)");
// src/provider/extensions/default.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ts$2d$mixer$40$6$2e$0$2e$4$2f$node_modules$2f$ts$2d$mixer$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ts-mixer@6.0.4/node_modules/ts-mixer/dist/esm/index.js [app-rsc] (ecmascript)");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __reExport = (target, mod, secondTarget)=>(__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
// src/global/constants.ts
var constants_exports = {};
__export(constants_exports, {
    ADDR_BOUND: ()=>ADDR_BOUND,
    API_VERSION: ()=>API_VERSION,
    BaseUrl: ()=>BaseUrl,
    DEFAULT_GLOBAL_CONFIG: ()=>DEFAULT_GLOBAL_CONFIG,
    FeeMarginPercentage: ()=>FeeMarginPercentage,
    HARDENING_4BYTES: ()=>HARDENING_4BYTES,
    HARDENING_BYTE: ()=>HARDENING_BYTE,
    IS_BROWSER: ()=>IS_BROWSER,
    MASK_250: ()=>MASK_250,
    MASK_31: ()=>MASK_31,
    MAX_STORAGE_ITEM_SIZE: ()=>MAX_STORAGE_ITEM_SIZE,
    NetworkName: ()=>NetworkName,
    OutsideExecutionCallerAny: ()=>OutsideExecutionCallerAny,
    PRIME: ()=>PRIME,
    RANGE_FELT: ()=>RANGE_FELT,
    RANGE_I128: ()=>RANGE_I128,
    RANGE_U128: ()=>RANGE_U128,
    RPC_DEFAULT_VERSION: ()=>RPC_DEFAULT_VERSION,
    RPC_NODES: ()=>RPC_NODES,
    SNIP9_V1_INTERFACE_ID: ()=>SNIP9_V1_INTERFACE_ID,
    SNIP9_V2_INTERFACE_ID: ()=>SNIP9_V2_INTERFACE_ID,
    SYSTEM_MESSAGES: ()=>SYSTEM_MESSAGES,
    StarknetChainId: ()=>StarknetChainId,
    TEXT_TO_FELT_MAX_LEN: ()=>TEXT_TO_FELT_MAX_LEN,
    TRANSACTION_VERSION: ()=>api_exports.ETransactionVersion,
    TransactionHashPrefix: ()=>TransactionHashPrefix,
    UDC: ()=>UDC,
    ZERO: ()=>ZERO
});
// src/types/api/index.ts
var api_exports = {};
__export(api_exports, {
    JRPC: ()=>jsonrpc_exports,
    RPCSPEC06: ()=>rpcspec_0_6_exports,
    RPCSPEC07: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
// src/types/api/jsonrpc/index.ts
var jsonrpc_exports = {};
// src/types/api/rpcspec_0_6/index.ts
var rpcspec_0_6_exports = {};
__export(rpcspec_0_6_exports, {
    EBlockTag: ()=>EBlockTag,
    EDAMode: ()=>EDAMode,
    EDataAvailabilityMode: ()=>EDataAvailabilityMode,
    ESimulationFlag: ()=>ESimulationFlag,
    ETransactionExecutionStatus: ()=>ETransactionExecutionStatus,
    ETransactionFinalityStatus: ()=>ETransactionFinalityStatus,
    ETransactionStatus: ()=>ETransactionStatus,
    ETransactionType: ()=>ETransactionType,
    ETransactionVersion: ()=>ETransactionVersion,
    ETransactionVersion2: ()=>ETransactionVersion2,
    ETransactionVersion3: ()=>ETransactionVersion3,
    Errors: ()=>errors_exports,
    SPEC: ()=>components_exports
});
// src/types/api/rpcspec_0_6/errors.ts
var errors_exports = {};
// src/types/api/rpcspec_0_6/components.ts
var components_exports = {};
// src/types/api/rpcspec_0_6/nonspec.ts
var ETransactionType = {
    DECLARE: "DECLARE",
    DEPLOY: "DEPLOY",
    DEPLOY_ACCOUNT: "DEPLOY_ACCOUNT",
    INVOKE: "INVOKE",
    L1_HANDLER: "L1_HANDLER"
};
var ESimulationFlag = {
    SKIP_VALIDATE: "SKIP_VALIDATE",
    SKIP_FEE_CHARGE: "SKIP_FEE_CHARGE"
};
var ETransactionStatus = {
    RECEIVED: "RECEIVED",
    REJECTED: "REJECTED",
    ACCEPTED_ON_L2: "ACCEPTED_ON_L2",
    ACCEPTED_ON_L1: "ACCEPTED_ON_L1"
};
var ETransactionFinalityStatus = {
    ACCEPTED_ON_L2: "ACCEPTED_ON_L2",
    ACCEPTED_ON_L1: "ACCEPTED_ON_L1"
};
var ETransactionExecutionStatus = {
    SUCCEEDED: "SUCCEEDED",
    REVERTED: "REVERTED"
};
var EBlockTag = {
    PENDING: "pending",
    LATEST: "latest"
};
var EDataAvailabilityMode = {
    L1: "L1",
    L2: "L2"
};
var EDAMode = {
    L1: 0,
    L2: 1
};
var ETransactionVersion = {
    V0: "0x0",
    V1: "0x1",
    V2: "0x2",
    V3: "0x3",
    F0: "0x100000000000000000000000000000000",
    F1: "0x100000000000000000000000000000001",
    F2: "0x100000000000000000000000000000002",
    F3: "0x100000000000000000000000000000003"
};
var ETransactionVersion2 = {
    V0: "0x0",
    V1: "0x1",
    V2: "0x2",
    F0: "0x100000000000000000000000000000000",
    F1: "0x100000000000000000000000000000001",
    F2: "0x100000000000000000000000000000002"
};
var ETransactionVersion3 = {
    V3: "0x3",
    F3: "0x100000000000000000000000000000003"
};
// src/types/api/index.ts
__reExport(api_exports, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__);
;
;
// src/utils/encode.ts
var encode_exports = {};
__export(encode_exports, {
    IS_BROWSER: ()=>IS_BROWSER,
    addHexPrefix: ()=>addHexPrefix,
    arrayBufferToString: ()=>arrayBufferToString,
    atobUniversal: ()=>atobUniversal,
    btoaUniversal: ()=>btoaUniversal,
    buf2hex: ()=>buf2hex,
    calcByteLength: ()=>calcByteLength,
    concatenateArrayBuffer: ()=>concatenateArrayBuffer,
    padLeft: ()=>padLeft,
    pascalToSnake: ()=>pascalToSnake,
    removeHexPrefix: ()=>removeHexPrefix,
    sanitizeBytes: ()=>sanitizeBytes,
    sanitizeHex: ()=>sanitizeHex,
    stringToArrayBuffer: ()=>stringToArrayBuffer,
    utf8ToArray: ()=>utf8ToArray
});
;
var IS_BROWSER = "undefined" !== "undefined";
var STRING_ZERO = "0";
function arrayBufferToString(array) {
    return new Uint8Array(array).reduce((data, byte)=>data + String.fromCharCode(byte), "");
}
function utf8ToArray(str) {
    return new TextEncoder().encode(str);
}
function stringToArrayBuffer(str) {
    return utf8ToArray(str);
}
function atobUniversal(a) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$base$40$1$2e$2$2e$1$2f$node_modules$2f40$scure$2f$base$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64"].decode(a);
}
function btoaUniversal(b) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$base$40$1$2e$2$2e$1$2f$node_modules$2f40$scure$2f$base$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64"].encode(new Uint8Array(b));
}
function buf2hex(buffer) {
    return buffer.reduce((r, x)=>r + x.toString(16).padStart(2, "0"), "");
}
function removeHexPrefix(hex) {
    return hex.replace(/^0x/i, "");
}
function addHexPrefix(hex) {
    return `0x${removeHexPrefix(hex)}`;
}
function padString(str, length, left, padding = STRING_ZERO) {
    const diff = length - str.length;
    let result = str;
    if (diff > 0) {
        const pad = padding.repeat(diff);
        result = left ? pad + str : str + pad;
    }
    return result;
}
function padLeft(str, length, padding = STRING_ZERO) {
    return padString(str, length, true, padding);
}
function calcByteLength(str, byteSize = 8) {
    const { length } = str;
    const remainder = length % byteSize;
    return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;
}
function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
    return padLeft(str, calcByteLength(str, byteSize), padding);
}
function sanitizeHex(hex) {
    const hexWithoutPrefix = removeHexPrefix(hex);
    const sanitizedHex = sanitizeBytes(hexWithoutPrefix, 2);
    return sanitizedHex ? addHexPrefix(sanitizedHex) : sanitizedHex;
}
var pascalToSnake = (text)=>/[a-z]/.test(text) ? text.split(/(?=[A-Z])/).join("_").toUpperCase() : text;
function concatenateArrayBuffer(uint8arrays) {
    const totalLength = uint8arrays.reduce((total, uint8array)=>total + uint8array.byteLength, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    uint8arrays.forEach((uint8array)=>{
        result.set(uint8array, offset);
        offset += uint8array.byteLength;
    });
    return result;
}
// src/global/constants.ts
var TEXT_TO_FELT_MAX_LEN = 31;
var ZERO = 0n;
var MASK_250 = 2n ** 250n - 1n;
var MASK_31 = 2n ** 31n - 1n;
var API_VERSION = ZERO;
var PRIME = 2n ** 251n + 17n * 2n ** 192n + 1n;
var MAX_STORAGE_ITEM_SIZE = 256n;
var ADDR_BOUND = 2n ** 251n - MAX_STORAGE_ITEM_SIZE;
var range = (min, max)=>({
        min,
        max
    });
var RANGE_FELT = range(ZERO, PRIME - 1n);
var RANGE_I128 = range(-(2n ** 127n), 2n ** 127n - 1n);
var RANGE_U128 = range(ZERO, 2n ** 128n - 1n);
var BaseUrl = /* @__PURE__ */ ((BaseUrl2)=>{
    BaseUrl2["SN_MAIN"] = "https://alpha-mainnet.starknet.io";
    BaseUrl2["SN_SEPOLIA"] = "https://alpha-sepolia.starknet.io";
    return BaseUrl2;
})(BaseUrl || {});
var NetworkName = /* @__PURE__ */ ((NetworkName2)=>{
    NetworkName2["SN_MAIN"] = "SN_MAIN";
    NetworkName2["SN_SEPOLIA"] = "SN_SEPOLIA";
    return NetworkName2;
})(NetworkName || {});
var StarknetChainId = /* @__PURE__ */ ((StarknetChainId6)=>{
    StarknetChainId6["SN_MAIN"] = "0x534e5f4d41494e";
    StarknetChainId6["SN_SEPOLIA"] = "0x534e5f5345504f4c4941";
    return StarknetChainId6;
})(StarknetChainId || {});
var TransactionHashPrefix = /* @__PURE__ */ ((TransactionHashPrefix2)=>{
    TransactionHashPrefix2["DECLARE"] = "0x6465636c617265";
    TransactionHashPrefix2["DEPLOY"] = "0x6465706c6f79";
    TransactionHashPrefix2["DEPLOY_ACCOUNT"] = "0x6465706c6f795f6163636f756e74";
    TransactionHashPrefix2["INVOKE"] = "0x696e766f6b65";
    TransactionHashPrefix2["L1_HANDLER"] = "0x6c315f68616e646c6572";
    return TransactionHashPrefix2;
})(TransactionHashPrefix || {});
var FeeMarginPercentage = /* @__PURE__ */ ((FeeMarginPercentage2)=>{
    FeeMarginPercentage2[FeeMarginPercentage2["L1_BOUND_MAX_AMOUNT"] = 50] = "L1_BOUND_MAX_AMOUNT";
    FeeMarginPercentage2[FeeMarginPercentage2["L1_BOUND_MAX_PRICE_PER_UNIT"] = 50] = "L1_BOUND_MAX_PRICE_PER_UNIT";
    FeeMarginPercentage2[FeeMarginPercentage2["MAX_FEE"] = 50] = "MAX_FEE";
    return FeeMarginPercentage2;
})(FeeMarginPercentage || {});
var UDC = {
    ADDRESS: "0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf",
    ENTRYPOINT: "deployContract"
};
var RPC_DEFAULT_VERSION = "v0_7";
var RPC_NODES = {
    SN_MAIN: [
        `https://starknet-mainnet.public.blastapi.io/rpc/${RPC_DEFAULT_VERSION}`,
        `https://free-rpc.nethermind.io/mainnet-juno/${RPC_DEFAULT_VERSION}`
    ],
    SN_SEPOLIA: [
        `https://starknet-sepolia.public.blastapi.io/rpc/${RPC_DEFAULT_VERSION}`,
        `https://free-rpc.nethermind.io/sepolia-juno/${RPC_DEFAULT_VERSION}`
    ]
};
var OutsideExecutionCallerAny = "0x414e595f43414c4c4552";
var SNIP9_V1_INTERFACE_ID = "0x68cfd18b92d1907b8ba3cc324900277f5a3622099431ea85dd8089255e4181";
var SNIP9_V2_INTERFACE_ID = "0x1d1144bb2138366ff28d8e9ab57456b1d332ac42196230c3a602003c89872";
var HARDENING_BYTE = 128;
var HARDENING_4BYTES = 2147483648n;
var DEFAULT_GLOBAL_CONFIG = {
    legacyMode: false,
    logLevel: "INFO",
    accountTxVersion: api_exports.ETransactionVersion.V2
};
var SYSTEM_MESSAGES = {
    legacyTxWarningMessage: "You are using a deprecated transaction version (V0,V1,V2)!\nUpdate to the latest V3 transactions!"
};
// src/channel/rpc_0_6.ts
var rpc_0_6_exports = {};
__export(rpc_0_6_exports, {
    RpcChannel: ()=>RpcChannel
});
// src/utils/json.ts
var json_exports = {};
__export(json_exports, {
    parse: ()=>parse2,
    parseAlwaysAsBig: ()=>parseAlwaysAsBig,
    stringify: ()=>stringify2,
    stringifyAlwaysAsBig: ()=>stringifyAlwaysAsBig
});
;
var parseIntAsNumberOrBigInt = (str)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInteger"])(str)) return parseFloat(str);
    const num = parseInt(str, 10);
    return Number.isSafeInteger(num) ? num : BigInt(str);
};
var parse2 = (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(String(str), void 0, parseIntAsNumberOrBigInt);
var parseAlwaysAsBig = (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(String(str), void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$numberParsers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNumberAndBigInt"]);
var stringify2 = (value, replacer, space, numberStringifiers)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(value, replacer, space, numberStringifiers);
var stringifyAlwaysAsBig = stringify2;
// src/utils/errors/rpc.ts
var errorCodes = {
    FAILED_TO_RECEIVE_TXN: 1,
    NO_TRACE_AVAILABLE: 10,
    CONTRACT_NOT_FOUND: 20,
    BLOCK_NOT_FOUND: 24,
    INVALID_TXN_INDEX: 27,
    CLASS_HASH_NOT_FOUND: 28,
    TXN_HASH_NOT_FOUND: 29,
    PAGE_SIZE_TOO_BIG: 31,
    NO_BLOCKS: 32,
    INVALID_CONTINUATION_TOKEN: 33,
    TOO_MANY_KEYS_IN_FILTER: 34,
    CONTRACT_ERROR: 40,
    TRANSACTION_EXECUTION_ERROR: 41,
    CLASS_ALREADY_DECLARED: 51,
    INVALID_TRANSACTION_NONCE: 52,
    INSUFFICIENT_MAX_FEE: 53,
    INSUFFICIENT_ACCOUNT_BALANCE: 54,
    VALIDATION_FAILURE: 55,
    COMPILATION_FAILED: 56,
    CONTRACT_CLASS_SIZE_IS_TOO_LARGE: 57,
    NON_ACCOUNT: 58,
    DUPLICATE_TX: 59,
    COMPILED_CLASS_HASH_MISMATCH: 60,
    UNSUPPORTED_TX_VERSION: 61,
    UNSUPPORTED_CONTRACT_CLASS_VERSION: 62,
    UNEXPECTED_ERROR: 63
};
var rpc_default = errorCodes;
// src/utils/errors/index.ts
function fixStack(target, fn = target.constructor) {
    const { captureStackTrace } = Error;
    captureStackTrace && captureStackTrace(target, fn);
}
function fixProto(target, prototype) {
    const { setPrototypeOf } = Object;
    setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
}
var CustomError = class extends Error {
    name;
    constructor(message){
        super(message);
        Object.defineProperty(this, "name", {
            value: new.target.name,
            enumerable: false,
            configurable: true
        });
        fixProto(this, new.target.prototype);
        fixStack(this);
    }
};
var LibraryError = class extends CustomError {
};
var RpcError = class extends LibraryError {
    constructor(baseError, method, params){
        super(`RPC: ${method} with params ${stringify2(params, null, 2)}

      ${baseError.code}: ${baseError.message}: ${stringify2(baseError.data)}`);
        this.baseError = baseError;
        this.request = {
            method,
            params
        };
    }
    request;
    get code() {
        return this.baseError.code;
    }
    /**
   * Verifies the underlying RPC error, also serves as a type guard for the _baseError_ property
   * @example
   * ```typescript
   * SomeError.isType('UNEXPECTED_ERROR');
   * ```
   */ isType(typeName) {
        return rpc_default[typeName] === this.code;
    }
};
// src/types/index.ts
var types_exports = {};
__export(types_exports, {
    BlockStatus: ()=>BlockStatus,
    BlockTag: ()=>BlockTag,
    ETH_ADDRESS: ()=>ETH_ADDRESS,
    EntryPointType: ()=>EntryPointType,
    Literal: ()=>Literal,
    NON_ZERO_PREFIX: ()=>NON_ZERO_PREFIX,
    OutsideExecutionTypesV1: ()=>OutsideExecutionTypesV1,
    OutsideExecutionTypesV2: ()=>OutsideExecutionTypesV2,
    OutsideExecutionVersion: ()=>OutsideExecutionVersion,
    RPC: ()=>api_exports,
    TransactionExecutionStatus: ()=>TransactionExecutionStatus,
    TransactionFinalityStatus: ()=>TransactionFinalityStatus,
    TransactionStatus: ()=>TransactionStatus,
    TransactionType: ()=>TransactionType,
    TypedDataRevision: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"],
    Uint: ()=>Uint,
    ValidateType: ()=>ValidateType
});
// src/types/lib/contract/index.ts
var EntryPointType = {
    EXTERNAL: "EXTERNAL",
    L1_HANDLER: "L1_HANDLER",
    CONSTRUCTOR: "CONSTRUCTOR"
};
// src/types/lib/index.ts
var TransactionType = {
    DECLARE: "DECLARE",
    DEPLOY: "DEPLOY",
    DEPLOY_ACCOUNT: "DEPLOY_ACCOUNT",
    INVOKE: "INVOKE_FUNCTION"
};
var TransactionStatus = {
    NOT_RECEIVED: "NOT_RECEIVED",
    RECEIVED: "RECEIVED",
    ACCEPTED_ON_L2: "ACCEPTED_ON_L2",
    ACCEPTED_ON_L1: "ACCEPTED_ON_L1",
    REJECTED: "REJECTED",
    REVERTED: "REVERTED"
};
var TransactionFinalityStatus = {
    NOT_RECEIVED: "NOT_RECEIVED",
    RECEIVED: "RECEIVED",
    ACCEPTED_ON_L2: "ACCEPTED_ON_L2",
    ACCEPTED_ON_L1: "ACCEPTED_ON_L1"
};
var TransactionExecutionStatus = {
    REJECTED: "REJECTED",
    REVERTED: "REVERTED",
    SUCCEEDED: "SUCCEEDED"
};
var BlockStatus = {
    PENDING: "PENDING",
    ACCEPTED_ON_L1: "ACCEPTED_ON_L1",
    ACCEPTED_ON_L2: "ACCEPTED_ON_L2",
    REJECTED: "REJECTED"
};
var BlockTag = {
    PENDING: "pending",
    LATEST: "latest"
};
// src/types/calldata.ts
var ValidateType = {
    DEPLOY: "DEPLOY",
    CALL: "CALL",
    INVOKE: "INVOKE"
};
var Uint = {
    u8: "core::integer::u8",
    u16: "core::integer::u16",
    u32: "core::integer::u32",
    u64: "core::integer::u64",
    u128: "core::integer::u128",
    u256: "core::integer::u256",
    // This one is struct
    u512: "core::integer::u512"
};
var Literal = {
    ClassHash: "core::starknet::class_hash::ClassHash",
    ContractAddress: "core::starknet::contract_address::ContractAddress",
    Secp256k1Point: "core::starknet::secp256k1::Secp256k1Point",
    U96: "core::internal::bounded_int::BoundedInt::<0, 79228162514264337593543950335>"
};
var ETH_ADDRESS = "core::starknet::eth_address::EthAddress";
var NON_ZERO_PREFIX = "core::zeroable::NonZero::";
// src/types/outsideExecution.ts
var OutsideExecutionTypesV1 = {
    StarkNetDomain: [
        {
            name: "name",
            type: "felt"
        },
        {
            name: "version",
            type: "felt"
        },
        {
            name: "chainId",
            type: "felt"
        }
    ],
    OutsideExecution: [
        {
            name: "caller",
            type: "felt"
        },
        {
            name: "nonce",
            type: "felt"
        },
        {
            name: "execute_after",
            type: "felt"
        },
        {
            name: "execute_before",
            type: "felt"
        },
        {
            name: "calls_len",
            type: "felt"
        },
        {
            name: "calls",
            type: "OutsideCall*"
        }
    ],
    OutsideCall: [
        {
            name: "to",
            type: "felt"
        },
        {
            name: "selector",
            type: "felt"
        },
        {
            name: "calldata_len",
            type: "felt"
        },
        {
            name: "calldata",
            type: "felt*"
        }
    ]
};
var OutsideExecutionTypesV2 = {
    StarknetDomain: [
        // SNIP-12 revision 1 is used, so should be "StarknetDomain", not "StarkNetDomain"
        {
            name: "name",
            type: "shortstring"
        },
        {
            name: "version",
            type: "shortstring"
        },
        // set to 2 in v2
        {
            name: "chainId",
            type: "shortstring"
        },
        {
            name: "revision",
            type: "shortstring"
        }
    ],
    OutsideExecution: [
        {
            name: "Caller",
            type: "ContractAddress"
        },
        {
            name: "Nonce",
            type: "felt"
        },
        {
            name: "Execute After",
            type: "u128"
        },
        {
            name: "Execute Before",
            type: "u128"
        },
        {
            name: "Calls",
            type: "Call*"
        }
    ],
    Call: [
        {
            name: "To",
            type: "ContractAddress"
        },
        {
            name: "Selector",
            type: "selector"
        },
        {
            name: "Calldata",
            type: "felt*"
        }
    ]
};
var OutsideExecutionVersion = /* @__PURE__ */ ((OutsideExecutionVersion2)=>{
    OutsideExecutionVersion2["UNSUPPORTED"] = "0";
    OutsideExecutionVersion2["V1"] = "1";
    OutsideExecutionVersion2["V2"] = "2";
    return OutsideExecutionVersion2;
})(OutsideExecutionVersion || {});
;
// src/utils/batch/index.ts
var BatchClient = class {
    nodeUrl;
    headers;
    interval;
    requestId = 0;
    pendingRequests = {};
    batchPromises = {};
    delayTimer;
    delayPromise;
    delayPromiseResolve;
    baseFetch;
    constructor(options){
        this.nodeUrl = options.nodeUrl;
        this.headers = options.headers;
        this.interval = options.interval;
        this.baseFetch = options.baseFetch;
    }
    async wait() {
        if (!this.delayPromise || !this.delayPromiseResolve) {
            this.delayPromise = new Promise((resolve)=>{
                this.delayPromiseResolve = resolve;
            });
        }
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = void 0;
        }
        this.delayTimer = setTimeout(()=>{
            if (this.delayPromiseResolve) {
                this.delayPromiseResolve();
                this.delayPromise = void 0;
                this.delayPromiseResolve = void 0;
            }
        }, this.interval);
        return this.delayPromise;
    }
    addPendingRequest(method, params, id) {
        const request = {
            id: id ?? `batched_${this.requestId += 1}`,
            jsonrpc: "2.0",
            method,
            params: params ?? void 0
        };
        this.pendingRequests[request.id] = request;
        return request.id;
    }
    async sendBatch(requests) {
        const raw = await this.baseFetch(this.nodeUrl, {
            method: "POST",
            body: stringify2(requests),
            headers: this.headers
        });
        return raw.json();
    }
    /**
   * Automatically batches and fetches JSON-RPC calls in a single request.
   * @param method Method to call
   * @param params Method parameters
   * @param id JSON-RPC Request ID
   * @returns JSON-RPC Response
   */ async fetch(method, params, id) {
        const requestId = this.addPendingRequest(method, params, id);
        await this.wait();
        const requests = this.pendingRequests;
        this.pendingRequests = {};
        if (!this.batchPromises[requestId]) {
            const promise = this.sendBatch(Object.values(requests));
            Object.keys(requests).forEach((key)=>{
                this.batchPromises[key] = promise;
            });
        }
        const results = await this.batchPromises[requestId];
        delete this.batchPromises[requestId];
        const result = results.find((res)=>res.id === requestId);
        if (!result) throw new Error(`Couldn't find the result for the request. Method: ${method}`);
        return result;
    }
};
// src/utils/assert.ts
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failure");
    }
}
// src/utils/num.ts
var num_exports = {};
__export(num_exports, {
    addPercent: ()=>addPercent,
    assertInRange: ()=>assertInRange,
    bigNumberishArrayToDecimalStringArray: ()=>bigNumberishArrayToDecimalStringArray,
    bigNumberishArrayToHexadecimalStringArray: ()=>bigNumberishArrayToHexadecimalStringArray,
    cleanHex: ()=>cleanHex,
    getDecimalString: ()=>getDecimalString,
    getHexString: ()=>getHexString,
    getHexStringArray: ()=>getHexStringArray,
    hexToBytes: ()=>hexToBytes,
    hexToDecimalString: ()=>hexToDecimalString,
    isBigNumberish: ()=>isBigNumberish,
    isHex: ()=>isHex,
    isStringWholeNumber: ()=>isStringWholeNumber,
    stringToSha256ToArrayBuff4: ()=>stringToSha256ToArrayBuff4,
    toBigInt: ()=>toBigInt,
    toCairoBool: ()=>toCairoBool,
    toHex: ()=>toHex,
    toHex64: ()=>toHex64,
    toHexString: ()=>toHexString,
    toStorageKey: ()=>toStorageKey
});
;
;
// src/utils/typed.ts
var isUndefined = (value)=>{
    return typeof value === "undefined" || value === void 0;
};
function isNumber(value) {
    return typeof value === "number";
}
function isBoolean(value) {
    return typeof value === "boolean";
}
function isBigInt(value) {
    return typeof value === "bigint";
}
function isString(value) {
    return typeof value === "string";
}
function isObject(item) {
    return !!item && typeof item === "object" && !Array.isArray(item);
}
// src/utils/num.ts
function isHex(hex) {
    return /^0x[0-9a-f]*$/i.test(hex);
}
function toBigInt(value) {
    return BigInt(value);
}
function toHex(value) {
    return addHexPrefix(toBigInt(value).toString(16));
}
var toHexString = toHex;
function toStorageKey(number2) {
    return addHexPrefix(toBigInt(number2).toString(16).padStart(64, "0"));
}
function toHex64(number2) {
    const res = addHexPrefix(toBigInt(number2).toString(16).padStart(64, "0"));
    if (res.length !== 66) throw TypeError("number is too big for hex 0x(64) representation");
    return res;
}
function hexToDecimalString(hex) {
    return BigInt(addHexPrefix(hex)).toString(10);
}
function cleanHex(hex) {
    return hex.toLowerCase().replace(/^(0x)0+/, "$1");
}
function assertInRange(input, lowerBound, upperBound, inputName = "") {
    const messageSuffix = inputName === "" ? "invalid length" : `invalid ${inputName} length`;
    const inputBigInt = BigInt(input);
    const lowerBoundBigInt = BigInt(lowerBound);
    const upperBoundBigInt = BigInt(upperBound);
    assert(inputBigInt >= lowerBoundBigInt && inputBigInt <= upperBoundBigInt, `Message not signable, ${messageSuffix}.`);
}
function bigNumberishArrayToDecimalStringArray(data) {
    return data.map((x)=>toBigInt(x).toString(10));
}
function bigNumberishArrayToHexadecimalStringArray(data) {
    return data.map((x)=>toHex(x));
}
function isStringWholeNumber(str) {
    return /^\d+$/.test(str);
}
function getDecimalString(str) {
    if (isHex(str)) {
        return hexToDecimalString(str);
    }
    if (isStringWholeNumber(str)) {
        return str;
    }
    throw new Error(`${str} needs to be a hex-string or whole-number-string`);
}
function getHexString(str) {
    if (isHex(str)) {
        return str;
    }
    if (isStringWholeNumber(str)) {
        return toHexString(str);
    }
    throw new Error(`${str} needs to be a hex-string or whole-number-string`);
}
function getHexStringArray(array) {
    return array.map(getHexString);
}
function toCairoBool(value) {
    return (+value).toString();
}
function hexToBytes(str) {
    if (!isHex(str)) throw new Error(`${str} needs to be a hex-string`);
    let adaptedValue = removeHexPrefix(str);
    if (adaptedValue.length % 2 !== 0) {
        adaptedValue = `0${adaptedValue}`;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(adaptedValue);
}
function addPercent(number2, percent) {
    const bigIntNum = BigInt(number2);
    return bigIntNum + bigIntNum * BigInt(percent) / 100n;
}
function stringToSha256ToArrayBuff4(str) {
    const int31 = (n)=>Number(n & MASK_31);
    const result = int31(BigInt(addHexPrefix(buf2hex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$6$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha256"])(str)))));
    return hexToBytes(toHex(result));
}
function isBigNumberish(input) {
    return isNumber(input) || isBigInt(input) || isString(input) && (isHex(input) || isStringWholeNumber(input));
}
// src/utils/hash/selector.ts
var selector_exports = {};
__export(selector_exports, {
    getL2MessageHash: ()=>getL2MessageHash,
    getSelector: ()=>getSelector,
    getSelectorFromName: ()=>getSelectorFromName,
    keccakBn: ()=>keccakBn,
    solidityUint256PackedKeccak256: ()=>solidityUint256PackedKeccak256,
    starknetKeccak: ()=>starknetKeccak
});
;
;
;
function keccakBn(value) {
    const hexWithoutPrefix = removeHexPrefix(toHex(BigInt(value)));
    const evenHex = hexWithoutPrefix.length % 2 === 0 ? hexWithoutPrefix : `0${hexWithoutPrefix}`;
    return addHexPrefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keccak"])(hexToBytes(addHexPrefix(evenHex))).toString(16));
}
function keccakHex(str) {
    return addHexPrefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keccak"])(utf8ToArray(str)).toString(16));
}
function starknetKeccak(str) {
    const hash = BigInt(keccakHex(str));
    return hash & MASK_250;
}
function getSelectorFromName(funcName) {
    return toHex(starknetKeccak(funcName));
}
function getSelector(value) {
    if (isNumber(value) || isBigInt(value)) return toHex(value);
    if (isHex(value)) return value;
    if (isStringWholeNumber(value)) return toHex(value);
    return getSelectorFromName(value);
}
function solidityUint256PackedKeccak256(params) {
    const myEncode = addHexPrefix(params.reduce((res, par)=>res + removeHexPrefix(toHex(par)).padStart(64, "0"), ""));
    return addHexPrefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$6$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keccak_256"])(hexToBytes(myEncode))));
}
function getL2MessageHash(l1FromAddress, l2ToAddress, l2Selector, l2Calldata, l1Nonce) {
    return solidityUint256PackedKeccak256([
        l1FromAddress,
        l2ToAddress,
        l1Nonce,
        l2Selector,
        l2Calldata.length,
        ...l2Calldata
    ]);
}
// src/utils/shortString.ts
var shortString_exports = {};
__export(shortString_exports, {
    decodeShortString: ()=>decodeShortString,
    encodeShortString: ()=>encodeShortString,
    isASCII: ()=>isASCII,
    isDecimalString: ()=>isDecimalString,
    isLongText: ()=>isLongText,
    isShortString: ()=>isShortString,
    isShortText: ()=>isShortText,
    isText: ()=>isText,
    splitLongString: ()=>splitLongString
});
function isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
}
function isShortString(str) {
    return str.length <= TEXT_TO_FELT_MAX_LEN;
}
function isDecimalString(str) {
    return /^[0-9]*$/i.test(str);
}
function isText(val) {
    return isString(val) && !isHex(val) && !isStringWholeNumber(val);
}
var isShortText = (val)=>isText(val) && isShortString(val);
var isLongText = (val)=>isText(val) && !isShortString(val);
function splitLongString(longStr) {
    const regex = RegExp(`[^]{1,${TEXT_TO_FELT_MAX_LEN}}`, "g");
    return longStr.match(regex) || [];
}
function encodeShortString(str) {
    if (!isASCII(str)) throw new Error(`${str} is not an ASCII string`);
    if (!isShortString(str)) throw new Error(`${str} is too long`);
    return addHexPrefix(str.replace(/./g, (char)=>char.charCodeAt(0).toString(16)));
}
function decodeShortString(str) {
    if (!isASCII(str)) throw new Error(`${str} is not an ASCII string`);
    if (isHex(str)) {
        return removeHexPrefix(str).replace(/.{2}/g, (hex)=>String.fromCharCode(parseInt(hex, 16)));
    }
    if (isDecimalString(str)) {
        return decodeShortString("0X".concat(BigInt(str).toString(16)));
    }
    throw new Error(`${str} is not Hex or decimal`);
}
// src/utils/calldata/byteArray.ts
var byteArray_exports = {};
__export(byteArray_exports, {
    byteArrayFromString: ()=>byteArrayFromString,
    stringFromByteArray: ()=>stringFromByteArray
});
function stringFromByteArray(myByteArray) {
    const pending_word = BigInt(myByteArray.pending_word) === 0n ? "" : decodeShortString(toHex(myByteArray.pending_word));
    return myByteArray.data.reduce((cumuledString, encodedString)=>{
        const add = BigInt(encodedString) === 0n ? "" : decodeShortString(toHex(encodedString));
        return cumuledString + add;
    }, "") + pending_word;
}
function byteArrayFromString(targetString) {
    const shortStrings = splitLongString(targetString);
    const remainder = shortStrings[shortStrings.length - 1];
    const shortStringsEncoded = shortStrings.map(encodeShortString);
    const [pendingWord, pendingWordLength] = remainder === void 0 || remainder.length === 31 ? [
        "0x00",
        0
    ] : [
        shortStringsEncoded.pop(),
        remainder.length
    ];
    return {
        data: shortStringsEncoded.length === 0 ? [] : shortStringsEncoded,
        pending_word: pendingWord,
        pending_word_len: pendingWordLength
    };
}
// src/utils/calldata/cairo.ts
var cairo_exports = {};
__export(cairo_exports, {
    felt: ()=>felt,
    getAbiContractVersion: ()=>getAbiContractVersion,
    getArrayType: ()=>getArrayType,
    isCairo1Abi: ()=>isCairo1Abi,
    isCairo1Type: ()=>isCairo1Type,
    isLen: ()=>isLen,
    isTypeArray: ()=>isTypeArray,
    isTypeBool: ()=>isTypeBool,
    isTypeByteArray: ()=>isTypeByteArray,
    isTypeBytes31: ()=>isTypeBytes31,
    isTypeContractAddress: ()=>isTypeContractAddress,
    isTypeEnum: ()=>isTypeEnum,
    isTypeEthAddress: ()=>isTypeEthAddress,
    isTypeFelt: ()=>isTypeFelt,
    isTypeLiteral: ()=>isTypeLiteral,
    isTypeNamedTuple: ()=>isTypeNamedTuple,
    isTypeNonZero: ()=>isTypeNonZero,
    isTypeOption: ()=>isTypeOption,
    isTypeResult: ()=>isTypeResult,
    isTypeSecp256k1Point: ()=>isTypeSecp256k1Point,
    isTypeStruct: ()=>isTypeStruct,
    isTypeTuple: ()=>isTypeTuple,
    isTypeU96: ()=>isTypeU96,
    isTypeUint: ()=>isTypeUint,
    isTypeUint256: ()=>isTypeUint256,
    tuple: ()=>tuple,
    uint256: ()=>uint256,
    uint512: ()=>uint512
});
// src/utils/cairoDataTypes/felt.ts
function CairoFelt(it) {
    if (isBigInt(it) || Number.isInteger(it)) {
        return it.toString();
    }
    if (isString(it)) {
        if (isHex(it)) {
            return BigInt(it).toString();
        }
        if (isText(it)) {
            if (!isShortString(it)) {
                throw new Error(`${it} is a long string > 31 chars. Please split it into an array of short strings.`);
            }
            return BigInt(encodeShortString(it)).toString();
        }
        if (isStringWholeNumber(it)) {
            return it;
        }
    }
    if (isBoolean(it)) {
        return `${+it}`;
    }
    throw new Error(`${it} can't be computed by felt()`);
}
// src/utils/cairoDataTypes/uint256.ts
var UINT_128_MAX = (1n << 128n) - 1n;
var UINT_256_MAX = (1n << 256n) - 1n;
var UINT_256_MIN = 0n;
var UINT_256_LOW_MAX = 340282366920938463463374607431768211455n;
var UINT_256_HIGH_MAX = 340282366920938463463374607431768211455n;
var UINT_256_LOW_MIN = 0n;
var UINT_256_HIGH_MIN = 0n;
var CairoUint256 = class _CairoUint256 {
    low;
    high;
    static abiSelector = "core::integer::u256";
    constructor(...arr){
        if (typeof arr[0] === "object" && arr.length === 1 && "low" in arr[0] && "high" in arr[0]) {
            const props = _CairoUint256.validateProps(arr[0].low, arr[0].high);
            this.low = props.low;
            this.high = props.high;
        } else if (arr.length === 1) {
            const bigInt = _CairoUint256.validate(arr[0]);
            this.low = bigInt & UINT_128_MAX;
            this.high = bigInt >> 128n;
        } else if (arr.length === 2) {
            const props = _CairoUint256.validateProps(arr[0], arr[1]);
            this.low = props.low;
            this.high = props.high;
        } else {
            throw Error("Incorrect constructor parameters");
        }
    }
    /**
   * Validate if BigNumberish can be represented as Unit256
   */ static validate(bigNumberish) {
        const bigInt = BigInt(bigNumberish);
        if (bigInt < UINT_256_MIN) throw Error("bigNumberish is smaller than UINT_256_MIN");
        if (bigInt > UINT_256_MAX) throw new Error("bigNumberish is bigger than UINT_256_MAX");
        return bigInt;
    }
    /**
   * Validate if low and high can be represented as Unit256
   */ static validateProps(low, high) {
        const bigIntLow = BigInt(low);
        const bigIntHigh = BigInt(high);
        if (bigIntLow < UINT_256_LOW_MIN || bigIntLow > UINT_256_LOW_MAX) {
            throw new Error("low is out of range UINT_256_LOW_MIN - UINT_256_LOW_MAX");
        }
        if (bigIntHigh < UINT_256_HIGH_MIN || bigIntHigh > UINT_256_HIGH_MAX) {
            throw new Error("high is out of range UINT_256_HIGH_MIN - UINT_256_HIGH_MAX");
        }
        return {
            low: bigIntLow,
            high: bigIntHigh
        };
    }
    /**
   * Check if BigNumberish can be represented as Unit256
   */ static is(bigNumberish) {
        try {
            _CairoUint256.validate(bigNumberish);
        } catch (error) {
            return false;
        }
        return true;
    }
    /**
   * Check if provided abi type is this data type
   */ static isAbiType(abiType) {
        return abiType === _CairoUint256.abiSelector;
    }
    /**
   * Return bigint representation
   */ toBigInt() {
        return (this.high << 128n) + this.low;
    }
    /**
   * Return Uint256 structure with HexString props
   * {low: HexString, high: HexString}
   */ toUint256HexString() {
        return {
            low: addHexPrefix(this.low.toString(16)),
            high: addHexPrefix(this.high.toString(16))
        };
    }
    /**
   * Return Uint256 structure with DecimalString props
   * {low: DecString, high: DecString}
   */ toUint256DecimalString() {
        return {
            low: this.low.toString(10),
            high: this.high.toString(10)
        };
    }
    /**
   * Return api requests representation witch is felt array
   */ toApiRequest() {
        return [
            CairoFelt(this.low),
            CairoFelt(this.high)
        ];
    }
};
// src/utils/cairoDataTypes/uint512.ts
var UINT_512_MAX = (1n << 512n) - 1n;
var UINT_512_MIN = 0n;
var UINT_128_MIN = 0n;
var CairoUint512 = class _CairoUint512 {
    limb0;
    limb1;
    limb2;
    limb3;
    static abiSelector = "core::integer::u512";
    constructor(...arr){
        if (typeof arr[0] === "object" && arr.length === 1 && "limb0" in arr[0] && "limb1" in arr[0] && "limb2" in arr[0] && "limb3" in arr[0]) {
            const props = _CairoUint512.validateProps(arr[0].limb0, arr[0].limb1, arr[0].limb2, arr[0].limb3);
            this.limb0 = props.limb0;
            this.limb1 = props.limb1;
            this.limb2 = props.limb2;
            this.limb3 = props.limb3;
        } else if (arr.length === 1) {
            const bigInt = _CairoUint512.validate(arr[0]);
            this.limb0 = bigInt & UINT_128_MAX;
            this.limb1 = (bigInt & UINT_128_MAX << 128n) >> 128n;
            this.limb2 = (bigInt & UINT_128_MAX << 256n) >> 256n;
            this.limb3 = bigInt >> 384n;
        } else if (arr.length === 4) {
            const props = _CairoUint512.validateProps(arr[0], arr[1], arr[2], arr[3]);
            this.limb0 = props.limb0;
            this.limb1 = props.limb1;
            this.limb2 = props.limb2;
            this.limb3 = props.limb3;
        } else {
            throw Error("Incorrect Uint512 constructor parameters");
        }
    }
    /**
   * Validate if BigNumberish can be represented as Uint512
   */ static validate(bigNumberish) {
        const bigInt = BigInt(bigNumberish);
        if (bigInt < UINT_512_MIN) throw Error("bigNumberish is smaller than UINT_512_MIN.");
        if (bigInt > UINT_512_MAX) throw Error("bigNumberish is bigger than UINT_512_MAX.");
        return bigInt;
    }
    /**
   * Validate if limbs can be represented as Uint512
   */ static validateProps(limb0, limb1, limb2, limb3) {
        const l0 = BigInt(limb0);
        const l1 = BigInt(limb1);
        const l2 = BigInt(limb2);
        const l3 = BigInt(limb3);
        [
            l0,
            l1,
            l2,
            l3
        ].forEach((value, index)=>{
            if (value < UINT_128_MIN || value > UINT_128_MAX) {
                throw Error(`limb${index} is not in the range of a u128 number`);
            }
        });
        return {
            limb0: l0,
            limb1: l1,
            limb2: l2,
            limb3: l3
        };
    }
    /**
   * Check if BigNumberish can be represented as Uint512
   */ static is(bigNumberish) {
        try {
            _CairoUint512.validate(bigNumberish);
        } catch (error) {
            return false;
        }
        return true;
    }
    /**
   * Check if provided abi type is this data type
   */ static isAbiType(abiType) {
        return abiType === _CairoUint512.abiSelector;
    }
    /**
   * Return bigint representation
   */ toBigInt() {
        return (this.limb3 << 384n) + (this.limb2 << 256n) + (this.limb1 << 128n) + this.limb0;
    }
    /**
   * Return Uint512 structure with HexString props
   * limbx: HexString
   */ toUint512HexString() {
        return {
            limb0: addHexPrefix(this.limb0.toString(16)),
            limb1: addHexPrefix(this.limb1.toString(16)),
            limb2: addHexPrefix(this.limb2.toString(16)),
            limb3: addHexPrefix(this.limb3.toString(16))
        };
    }
    /**
   * Return Uint512 structure with DecimalString props
   * limbx DecString
   */ toUint512DecimalString() {
        return {
            limb0: this.limb0.toString(10),
            limb1: this.limb1.toString(10),
            limb2: this.limb2.toString(10),
            limb3: this.limb3.toString(10)
        };
    }
    /**
   * Return api requests representation witch is felt array
   */ toApiRequest() {
        return [
            CairoFelt(this.limb0),
            CairoFelt(this.limb1),
            CairoFelt(this.limb2),
            CairoFelt(this.limb3)
        ];
    }
};
// src/utils/calldata/cairo.ts
var isLen = (name)=>/_len$/.test(name);
var isTypeFelt = (type)=>type === "felt" || type === "core::felt252";
var isTypeArray = (type)=>/\*/.test(type) || type.startsWith("core::array::Array::") || type.startsWith("core::array::Span::");
var isTypeTuple = (type)=>/^\(.*\)$/i.test(type);
var isTypeNamedTuple = (type)=>/\(.*\)/i.test(type) && type.includes(":");
var isTypeStruct = (type, structs)=>type in structs;
var isTypeEnum = (type, enums)=>type in enums;
var isTypeOption = (type)=>type.startsWith("core::option::Option::");
var isTypeResult = (type)=>type.startsWith("core::result::Result::");
var isTypeUint = (type)=>Object.values(Uint).includes(type);
var isTypeUint256 = (type)=>CairoUint256.isAbiType(type);
var isTypeLiteral = (type)=>Object.values(Literal).includes(type);
var isTypeBool = (type)=>type === "core::bool";
var isTypeContractAddress = (type)=>type === Literal.ContractAddress;
var isTypeEthAddress = (type)=>type === ETH_ADDRESS;
var isTypeBytes31 = (type)=>type === "core::bytes_31::bytes31";
var isTypeByteArray = (type)=>type === "core::byte_array::ByteArray";
var isTypeU96 = (type)=>type === "core::internal::bounded_int::BoundedInt::<0, 79228162514264337593543950335>";
var isTypeSecp256k1Point = (type)=>type === Literal.Secp256k1Point;
var isCairo1Type = (type)=>type.includes("::");
var getArrayType = (type)=>{
    return isCairo1Type(type) ? type.substring(type.indexOf("<") + 1, type.lastIndexOf(">")) : type.replace("*", "");
};
function isCairo1Abi(abi) {
    const { cairo } = getAbiContractVersion(abi);
    if (cairo === void 0) {
        throw Error("Unable to determine Cairo version");
    }
    return cairo === "1";
}
function isTypeNonZero(type) {
    return type.startsWith(NON_ZERO_PREFIX);
}
function getAbiContractVersion(abi) {
    if (abi.find((it)=>it.type === "interface")) {
        return {
            cairo: "1",
            compiler: "2"
        };
    }
    const testSubject = abi.find((it)=>(it.type === "function" || it.type === "constructor") && (it.inputs.length || it.outputs.length));
    if (!testSubject) {
        return {
            cairo: void 0,
            compiler: void 0
        };
    }
    const io = testSubject.inputs.length ? testSubject.inputs : testSubject.outputs;
    if (isCairo1Type(io[0].type)) {
        return {
            cairo: "1",
            compiler: "1"
        };
    }
    return {
        cairo: "0",
        compiler: "0"
    };
}
var uint256 = (it)=>{
    return new CairoUint256(it).toUint256DecimalString();
};
var uint512 = (it)=>{
    return new CairoUint512(it).toUint512DecimalString();
};
var tuple = (...args)=>({
        ...args
    });
function felt(it) {
    return CairoFelt(it);
}
// src/utils/calldata/enum/CairoCustomEnum.ts
var CairoCustomEnum = class {
    /**
   * direct readonly access to variants of the Cairo Custom Enum.
   * @returns a value of type any
   * @example
   * ```typescript
   * const successValue = myCairoEnum.variant.Success;
   */ variant;
    /**
   * @param enumContent an object with the variants as keys and the content as value. Only one content shall be defined.
   */ constructor(enumContent){
        const variantsList = Object.values(enumContent);
        if (variantsList.length === 0) {
            throw new Error("This Enum must have at least 1 variant");
        }
        const nbActiveVariants = variantsList.filter((content)=>!isUndefined(content)).length;
        if (nbActiveVariants !== 1) {
            throw new Error("This Enum must have exactly one active variant");
        }
        this.variant = enumContent;
    }
    /**
   *
   * @returns the content of the valid variant of a Cairo custom Enum.
   */ unwrap() {
        const variants = Object.values(this.variant);
        return variants.find((item)=>!isUndefined(item));
    }
    /**
   *
   * @returns the name of the valid variant of a Cairo custom Enum.
   */ activeVariant() {
        const variants = Object.entries(this.variant);
        const activeVariant = variants.find((item)=>!isUndefined(item[1]));
        return isUndefined(activeVariant) ? "" : activeVariant[0];
    }
};
// src/utils/calldata/enum/CairoOption.ts
var CairoOptionVariant = {
    Some: 0,
    None: 1
};
var CairoOption = class {
    Some;
    None;
    constructor(variant, content){
        if (!(variant in Object.values(CairoOptionVariant))) {
            throw new Error("Wrong variant! It should be CairoOptionVariant.Some or .None.");
        }
        if (variant === CairoOptionVariant.Some) {
            if (isUndefined(content)) {
                throw new Error('The creation of a Cairo Option with "Some" variant needs a content as input.');
            }
            this.Some = content;
            this.None = void 0;
        } else {
            this.Some = void 0;
            this.None = true;
        }
    }
    /**
   *
   * @returns the content of the valid variant of a Cairo custom Enum.
   *  If None, returns 'undefined'.
   */ unwrap() {
        return this.None ? void 0 : this.Some;
    }
    /**
   *
   * @returns true if the valid variant is 'isSome'.
   */ isSome() {
        return !isUndefined(this.Some);
    }
    /**
   *
   * @returns true if the valid variant is 'isNone'.
   */ isNone() {
        return this.None === true;
    }
};
// src/utils/calldata/enum/CairoResult.ts
var CairoResultVariant = {
    Ok: 0,
    Err: 1
};
var CairoResult = class {
    Ok;
    Err;
    constructor(variant, resultContent){
        if (!(variant in Object.values(CairoResultVariant))) {
            throw new Error("Wrong variant! It should be CairoResultVariant.Ok or .Err.");
        }
        if (variant === CairoResultVariant.Ok) {
            this.Ok = resultContent;
            this.Err = void 0;
        } else {
            this.Ok = void 0;
            this.Err = resultContent;
        }
    }
    /**
   *
   * @returns the content of the valid variant of a Cairo Result.
   */ unwrap() {
        if (!isUndefined(this.Ok)) {
            return this.Ok;
        }
        if (!isUndefined(this.Err)) {
            return this.Err;
        }
        throw new Error("Both Result.Ok and .Err are undefined. Not authorized.");
    }
    /**
   *
   * @returns true if the valid variant is 'Ok'.
   */ isOk() {
        return !isUndefined(this.Ok);
    }
    /**
   *
   * @returns true if the valid variant is 'isErr'.
   */ isErr() {
        return !isUndefined(this.Err);
    }
};
// src/utils/calldata/formatter.ts
var guard = {
    /**
   * Checks if the data is a BigInt (BN) and throws an error if not.
   *
   * @param {Record<string, any>} data - The data object containing the key to check.
   * @param {Record<string, any>} type - The type definition object.
   * @param {string} key - The key in the data object to check.
   * @throws {Error} If the data type does not match the expected BigInt (BN) type.
   */ isBN: (data, type, key)=>{
        if (!isBigInt(data[key])) throw new Error(`Data and formatter mismatch on ${key}:${type[key]}, expected response data ${key}:${data[key]} to be BN instead it is ${typeof data[key]}`);
    },
    /**
   * Throws an error for unhandled formatter types.
   *
   * @param {Record<string, any>} data - The data object containing the key.
   * @param {Record<string, any>} type - The type definition object.
   * @param {string} key - The key in the data object to check.
   * @throws {Error} If the formatter encounters an unknown type.
   */ unknown: (data, type, key)=>{
        throw new Error(`Unhandled formatter type on ${key}:${type[key]} for data ${key}:${data[key]}`);
    }
};
function formatter(data, type, sameType) {
    return Object.entries(data).reduce((acc, [key, value])=>{
        const elType = sameType ?? type[key];
        if (!(key in type) && !sameType) {
            acc[key] = value;
            return acc;
        }
        if (elType === "string") {
            if (Array.isArray(data[key])) {
                const arrayStr = formatter(data[key], data[key].map((_)=>elType));
                acc[key] = Object.values(arrayStr).join("");
                return acc;
            }
            guard.isBN(data, type, key);
            acc[key] = decodeShortString(value);
            return acc;
        }
        if (elType === "number") {
            guard.isBN(data, type, key);
            acc[key] = Number(value);
            return acc;
        }
        if (typeof elType === "function") {
            acc[key] = elType(value);
            return acc;
        }
        if (Array.isArray(elType)) {
            const arrayObj = formatter(data[key], elType, elType[0]);
            acc[key] = Object.values(arrayObj);
            return acc;
        }
        if (isObject(elType)) {
            acc[key] = formatter(data[key], elType);
            return acc;
        }
        guard.unknown(data, type, key);
        return acc;
    }, {});
}
// src/utils/calldata/parser/parser-0-1.1.0.ts
var AbiParser1 = class {
    abi;
    constructor(abi){
        this.abi = abi;
    }
    /**
   * abi method inputs length without '_len' inputs
   * cairo 0 reducer
   * @param abiMethod FunctionAbi
   * @returns number
   */ methodInputsLength(abiMethod) {
        return abiMethod.inputs.reduce((acc, input)=>!isLen(input.name) ? acc + 1 : acc, 0);
    }
    /**
   * get method definition from abi
   * @param name string
   * @returns FunctionAbi | undefined
   */ getMethod(name) {
        return this.abi.find((it)=>it.name === name);
    }
    /**
   * Get Abi in legacy format
   * @returns Abi
   */ getLegacyFormat() {
        return this.abi;
    }
};
// src/utils/calldata/parser/parser-2.0.0.ts
var AbiParser2 = class {
    abi;
    constructor(abi){
        this.abi = abi;
    }
    /**
   * abi method inputs length
   * @param abiMethod FunctionAbi
   * @returns number
   */ methodInputsLength(abiMethod) {
        return abiMethod.inputs.length;
    }
    /**
   * get method definition from abi
   * @param name string
   * @returns FunctionAbi | undefined
   */ getMethod(name) {
        const intf = this.abi.find((it)=>it.type === "interface");
        return intf?.items?.find((it)=>it.name === name);
    }
    /**
   * Get Abi in legacy format
   * @returns Abi
   */ getLegacyFormat() {
        return this.abi.flatMap((it)=>{
            return it.type === "interface" ? it.items : it;
        });
    }
};
// src/utils/calldata/parser/index.ts
function createAbiParser(abi) {
    const version = getAbiVersion(abi);
    if (version === 0 || version === 1) {
        return new AbiParser1(abi);
    }
    if (version === 2) {
        return new AbiParser2(abi);
    }
    throw Error(`Unsupported ABI version ${version}`);
}
function getAbiVersion(abi) {
    if (abi.find((it)=>it.type === "interface")) return 2;
    if (isCairo1Abi(abi)) return 1;
    return 0;
}
function isNoConstructorValid(method, argsCalldata, abiMethod) {
    return method === "constructor" && !abiMethod && !argsCalldata.length;
}
// src/utils/calldata/tuple.ts
function parseNamedTuple(namedTuple) {
    const name = namedTuple.substring(0, namedTuple.indexOf(":"));
    const type = namedTuple.substring(name.length + ":".length);
    return {
        name,
        type
    };
}
function parseSubTuple(s) {
    if (!s.includes("(")) return {
        subTuple: [],
        result: s
    };
    const subTuple = [];
    let result = "";
    let i = 0;
    while(i < s.length){
        if (s[i] === "(") {
            let counter = 1;
            const lBracket = i;
            i++;
            while(counter){
                if (s[i] === ")") counter--;
                if (s[i] === "(") counter++;
                i++;
            }
            subTuple.push(s.substring(lBracket, i));
            result += " ";
            i--;
        } else {
            result += s[i];
        }
        i++;
    }
    return {
        subTuple,
        result
    };
}
function extractCairo0Tuple(type) {
    const cleanType = type.replace(/\s/g, "").slice(1, -1);
    const { subTuple, result } = parseSubTuple(cleanType);
    let recomposed = result.split(",").map((it)=>{
        return subTuple.length ? it.replace(" ", subTuple.shift()) : it;
    });
    if (isTypeNamedTuple(type)) {
        recomposed = recomposed.reduce((acc, it)=>{
            return acc.concat(parseNamedTuple(it));
        }, []);
    }
    return recomposed;
}
function getClosureOffset(input, open, close) {
    for(let i = 0, counter = 0; i < input.length; i++){
        if (input[i] === open) {
            counter++;
        } else if (input[i] === close && --counter === 0) {
            return i;
        }
    }
    return Number.POSITIVE_INFINITY;
}
function extractCairo1Tuple(type) {
    const input = type.slice(1, -1);
    const result = [];
    let currentIndex = 0;
    let limitIndex;
    while(currentIndex < input.length){
        switch(true){
            // Tuple
            case input[currentIndex] === "(":
                {
                    limitIndex = currentIndex + getClosureOffset(input.slice(currentIndex), "(", ")") + 1;
                    break;
                }
            case input.startsWith("core::result::Result::<", currentIndex) || input.startsWith("core::array::Array::<", currentIndex) || input.startsWith("core::option::Option::<", currentIndex):
                {
                    limitIndex = currentIndex + getClosureOffset(input.slice(currentIndex), "<", ">") + 1;
                    break;
                }
            default:
                {
                    const commaIndex = input.indexOf(",", currentIndex);
                    limitIndex = commaIndex !== -1 ? commaIndex : Number.POSITIVE_INFINITY;
                }
        }
        result.push(input.slice(currentIndex, limitIndex));
        currentIndex = limitIndex + 2;
    }
    return result;
}
function extractTupleMemberTypes(type) {
    return isCairo1Type(type) ? extractCairo1Tuple(type) : extractCairo0Tuple(type);
}
// src/utils/cairoDataTypes/fixedArray.ts
var CairoFixedArray = class _CairoFixedArray {
    /**
   * JS array representing a Cairo fixed array.
   */ content;
    /**
   * Cairo fixed array type.
   */ arrayType;
    /**
   * Create an instance representing a Cairo fixed Array.
   * @param {any[]} content JS array representing a Cairo fixed array.
   * @param {string} arrayType Cairo fixed array type.
   */ constructor(content, arrayType){
        assert(_CairoFixedArray.isTypeFixedArray(arrayType), `The type ${arrayType} is not a Cairo fixed array. Needs [type; length].`);
        try {
            _CairoFixedArray.getFixedArrayType(arrayType);
        } catch  {
            throw new Error(`The type ${arrayType} do not includes any content type. Needs [type; length].`);
        }
        try {
            _CairoFixedArray.getFixedArraySize(arrayType);
        } catch  {
            throw new Error(`The type ${arrayType} type do not includes any length. Needs [type; length].`);
        }
        assert(_CairoFixedArray.getFixedArraySize(arrayType) === content.length, `The ABI type ${arrayType} is expecting ${_CairoFixedArray.getFixedArraySize(arrayType)} items. ${content.length} items provided.`);
        this.content = content;
        this.arrayType = arrayType;
    }
    /**
   * Retrieves the array size from the given type string representing a Cairo fixed array.
   * @param {string} type - The Cairo fixed array type.
   * @returns {number} The array size.
   * @example
   * ```typescript
   * const result = CairoFixedArray.getFixedArraySize("[core::integer::u32; 8]");
   * // result = 8
   * ```
   */ static getFixedArraySize(type) {
        const matchArray = type.match(/(?<=; )\d+(?=\])/);
        if (matchArray === null) throw new Error(`ABI type ${type} do not includes a valid number after ';' character.`);
        return Number(matchArray[0]);
    }
    /**
   * Retrieves the Cairo fixed array size from the CairoFixedArray instance.
   * @returns {number} The fixed array size.
   * @example
   * ```typescript
   * const fArray = new CairoFixedArray([10,20,30], "[core::integer::u32; 3]");
   * const result = fArray.getFixedArraySize();
   * // result = 3
   * ```
   */ getFixedArraySize() {
        return _CairoFixedArray.getFixedArraySize(this.arrayType);
    }
    /**
   * Retrieve the Cairo content type from a Cairo fixed array type.
   * @param {string} type - The type string.
   * @returns {string} The fixed-array type.
   * @example
   * ```typescript
   * const result = CairoFixedArray.getFixedArrayType("[core::integer::u32; 8]");
   * // result = "core::integer::u32"
   * ```
   */ static getFixedArrayType = (type)=>{
        const matchArray = type.match(/(?<=\[).+(?=;)/);
        if (matchArray === null) throw new Error(`ABI type ${type} do not includes a valid type of data.`);
        return matchArray[0];
    };
    /**
   * Retrieve the Cairo content type of the Cairo fixed array.
   * @returns {string} The fixed-array content type.
   * @example
   * ```typescript
   * const fArray = new CairoFixedArray([10,20,30], "[core::integer::u32; 3]");
   * const result = fArray.getFixedArrayType();
   * // result = "core::integer::u32"
   * ```
   */ getFixedArrayType() {
        return _CairoFixedArray.getFixedArrayType(this.arrayType);
    }
    /**
   * Create an object from a Cairo fixed array.
   * Be sure to have an array length conform to the ABI.
   * To be used with CallData.compile().
   * @param {Array<any>} input JS array representing a Cairo fixed array.
   * @returns {Object} a specific struct representing a fixed Array.
   * @example
   * ```typescript
   * const result = CairoFixedArray.compile([10,20,30]);
   * // result = { '0': 10, '1': 20, '2': 30 }
   * ```
   */ static compile(input) {
        return input.reduce((acc, item, idx)=>{
            acc[idx] = item;
            return acc;
        }, {});
    }
    /**
   * Generate an object from the Cairo fixed array instance.
   * To be used with CallData.compile().
   * @returns a specific struct representing a fixed array.
   * @example
   * ```typescript
   * const fArray = new CairoFixedArray([10,20,30], "[core::integer::u32; 3]");
   * const result = fArray.compile();
   * // result = { '0': 10, '1': 20, '2': 30 }
   * ```
   */ compile() {
        return _CairoFixedArray.compile(this.content);
    }
    /**
   * Checks if the given Cairo type is a fixed-array type.
   *
   * @param {string} type - The type to check.
   * @returns - `true` if the type is a fixed array type, `false` otherwise.
   * ```typescript
   * const result = CairoFixedArray.isTypeFixedArray("[core::integer::u32; 8]");
   * // result = true
   */ static isTypeFixedArray(type) {
        return /^\[.*;\s.*\]$/.test(type) && /(?<=\[).+(?=;)/.test(type) && /(?<=; )\d+(?=\])/.test(type);
    }
};
// src/utils/calldata/propertyOrder.ts
function errorU256(key) {
    return Error(`Your object includes the property : ${key}, containing an Uint256 object without the 'low' and 'high' keys.`);
}
function errorU512(key) {
    return Error(`Your object includes the property : ${key}, containing an Uint512 object without the 'limb0' to 'limb3' keys.`);
}
function orderPropsByAbi(unorderedObject, abiOfObject, structs, enums) {
    const orderInput = (unorderedItem, abiType)=>{
        if (CairoFixedArray.isTypeFixedArray(abiType)) {
            return orderFixedArray(unorderedItem, abiType);
        }
        if (isTypeArray(abiType)) {
            return orderArray(unorderedItem, abiType);
        }
        if (isTypeEnum(abiType, enums)) {
            const abiObj = enums[abiType];
            return orderEnum(unorderedItem, abiObj);
        }
        if (isTypeTuple(abiType)) {
            return orderTuple(unorderedItem, abiType);
        }
        if (isTypeEthAddress(abiType)) {
            return unorderedItem;
        }
        if (isTypeNonZero(abiType)) {
            return unorderedItem;
        }
        if (isTypeByteArray(abiType)) {
            return unorderedItem;
        }
        if (isTypeU96(abiType)) {
            return unorderedItem;
        }
        if (isTypeSecp256k1Point(abiType)) {
            return unorderedItem;
        }
        if (CairoUint256.isAbiType(abiType)) {
            const u256 = unorderedItem;
            if (typeof u256 !== "object") {
                return u256;
            }
            if (!("low" in u256 && "high" in u256)) {
                throw errorU256(abiType);
            }
            return {
                low: u256.low,
                high: u256.high
            };
        }
        if (CairoUint512.isAbiType(abiType)) {
            const u512 = unorderedItem;
            if (typeof u512 !== "object") {
                return u512;
            }
            if (![
                "limb0",
                "limb1",
                "limb2",
                "limb3"
            ].every((key)=>key in u512)) {
                throw errorU512(abiType);
            }
            return {
                limb0: u512.limb0,
                limb1: u512.limb1,
                limb2: u512.limb2,
                limb3: u512.limb3
            };
        }
        if (isTypeStruct(abiType, structs)) {
            const abiOfStruct = structs[abiType].members;
            return orderStruct(unorderedItem, abiOfStruct);
        }
        return unorderedItem;
    };
    const orderStruct = (unorderedObject2, abiObject)=>{
        const orderedObject2 = abiObject.reduce((orderedObject, abiParam)=>{
            const setProperty = (value)=>Object.defineProperty(orderedObject, abiParam.name, {
                    enumerable: true,
                    value: value ?? unorderedObject2[abiParam.name]
                });
            if (unorderedObject2[abiParam.name] === "undefined") {
                if (isCairo1Type(abiParam.type) || !isLen(abiParam.name)) {
                    throw Error(`Your object needs a property with key : ${abiParam.name} .`);
                }
            }
            setProperty(orderInput(unorderedObject2[abiParam.name], abiParam.type));
            return orderedObject;
        }, {});
        return orderedObject2;
    };
    function orderArray(myArray, abiParam) {
        const typeInArray = getArrayType(abiParam);
        if (isString(myArray)) {
            return myArray;
        }
        return myArray.map((myElem)=>orderInput(myElem, typeInArray));
    }
    function orderFixedArray(input, abiParam) {
        const typeInFixedArray = CairoFixedArray.getFixedArrayType(abiParam);
        const arraySize = CairoFixedArray.getFixedArraySize(abiParam);
        if (Array.isArray(input)) {
            if (arraySize !== input.length) {
                throw new Error(`ABI type ${abiParam}: array provided do not includes  ${arraySize} items. ${input.length} items provided.`);
            }
            return input.map((myElem)=>orderInput(myElem, typeInFixedArray));
        }
        if (arraySize !== Object.keys(input).length) {
            throw new Error(`ABI type ${abiParam}: object provided do not includes  ${arraySize} properties. ${Object.keys(input).length} items provided.`);
        }
        return orderInput(input, typeInFixedArray);
    }
    function orderTuple(unorderedObject2, abiParam) {
        const typeList = extractTupleMemberTypes(abiParam);
        const orderedObject2 = typeList.reduce((orderedObject, abiTypeCairoX, index)=>{
            const myObjKeys = Object.keys(unorderedObject2);
            const setProperty = (value)=>Object.defineProperty(orderedObject, index.toString(), {
                    enumerable: true,
                    value: value ?? unorderedObject2[myObjKeys[index]]
                });
            const abiType = abiTypeCairoX?.type ? abiTypeCairoX.type : abiTypeCairoX;
            setProperty(orderInput(unorderedObject2[myObjKeys[index]], abiType));
            return orderedObject;
        }, {});
        return orderedObject2;
    }
    const orderEnum = (unorderedObject2, abiObject)=>{
        if (isTypeResult(abiObject.name)) {
            const unorderedResult = unorderedObject2;
            const resultOkType = abiObject.name.substring(abiObject.name.indexOf("<") + 1, abiObject.name.lastIndexOf(","));
            const resultErrType = abiObject.name.substring(abiObject.name.indexOf(",") + 1, abiObject.name.lastIndexOf(">"));
            if (unorderedResult.isOk()) {
                return new CairoResult(CairoResultVariant.Ok, orderInput(unorderedObject2.unwrap(), resultOkType));
            }
            return new CairoResult(CairoResultVariant.Err, orderInput(unorderedObject2.unwrap(), resultErrType));
        }
        if (isTypeOption(abiObject.name)) {
            const unorderedOption = unorderedObject2;
            const resultSomeType = abiObject.name.substring(abiObject.name.indexOf("<") + 1, abiObject.name.lastIndexOf(">"));
            if (unorderedOption.isSome()) {
                return new CairoOption(CairoOptionVariant.Some, orderInput(unorderedOption.unwrap(), resultSomeType));
            }
            return new CairoOption(CairoOptionVariant.None, {});
        }
        const unorderedCustomEnum = unorderedObject2;
        const variants = Object.entries(unorderedCustomEnum.variant);
        const newEntries = variants.map((variant)=>{
            if (isUndefined(variant[1])) {
                return variant;
            }
            const variantType = abiObject.type.substring(abiObject.type.lastIndexOf("<") + 1, abiObject.type.lastIndexOf(">"));
            if (variantType === "()") {
                return variant;
            }
            return [
                variant[0],
                orderInput(unorderedCustomEnum.unwrap(), variantType)
            ];
        });
        return new CairoCustomEnum(Object.fromEntries(newEntries));
    };
    const finalOrderedObject = abiOfObject.reduce((orderedObject, abiParam)=>{
        const setProperty = (value)=>Object.defineProperty(orderedObject, abiParam.name, {
                enumerable: true,
                value
            });
        if (isLen(abiParam.name) && !isCairo1Type(abiParam.type)) {
            return orderedObject;
        }
        setProperty(orderInput(unorderedObject[abiParam.name], abiParam.type));
        return orderedObject;
    }, {});
    return finalOrderedObject;
}
// src/utils/calldata/requestParser.ts
function parseBaseTypes(type, val) {
    switch(true){
        case CairoUint256.isAbiType(type):
            return new CairoUint256(val).toApiRequest();
        case CairoUint512.isAbiType(type):
            return new CairoUint512(val).toApiRequest();
        case isTypeBytes31(type):
            return encodeShortString(val.toString());
        case isTypeSecp256k1Point(type):
            {
                const pubKeyETH = removeHexPrefix(toHex(val)).padStart(128, "0");
                const pubKeyETHy = uint256(addHexPrefix(pubKeyETH.slice(-64)));
                const pubKeyETHx = uint256(addHexPrefix(pubKeyETH.slice(0, -64)));
                return [
                    felt(pubKeyETHx.low),
                    felt(pubKeyETHx.high),
                    felt(pubKeyETHy.low),
                    felt(pubKeyETHy.high)
                ];
            }
        default:
            return felt(val);
    }
}
function parseTuple(element, typeStr) {
    const memberTypes = extractTupleMemberTypes(typeStr);
    const elements = Object.values(element);
    if (elements.length !== memberTypes.length) {
        throw Error(`ParseTuple: provided and expected abi tuple size do not match.
      provided: ${elements}
      expected: ${memberTypes}`);
    }
    return memberTypes.map((it, dx)=>{
        return {
            element: elements[dx],
            type: it.type ?? it
        };
    });
}
function parseByteArray(element) {
    const myByteArray = byteArrayFromString(element);
    return [
        myByteArray.data.length.toString(),
        ...myByteArray.data.map((bn)=>bn.toString()),
        myByteArray.pending_word.toString(),
        myByteArray.pending_word_len.toString()
    ];
}
function parseCalldataValue(element, type, structs, enums) {
    if (element === void 0) {
        throw Error(`Missing parameter for type ${type}`);
    }
    if (CairoFixedArray.isTypeFixedArray(type)) {
        const arrayType = CairoFixedArray.getFixedArrayType(type);
        let values = [];
        if (Array.isArray(element)) {
            const array = new CairoFixedArray(element, type);
            values = array.content;
        } else if (typeof element === "object") {
            values = Object.values(element);
            assert(values.length === CairoFixedArray.getFixedArraySize(type), `ABI type ${type}: object provided do not includes  ${CairoFixedArray.getFixedArraySize(type)} items. ${values.length} items provided.`);
        } else {
            throw new Error(`ABI type ${type}: not an Array representing a cairo.fixedArray() provided.`);
        }
        return values.reduce((acc, it)=>{
            return acc.concat(parseCalldataValue(it, arrayType, structs, enums));
        }, []);
    }
    if (Array.isArray(element)) {
        const result = [];
        result.push(felt(element.length));
        const arrayType = getArrayType(type);
        return element.reduce((acc, it)=>{
            return acc.concat(parseCalldataValue(it, arrayType, structs, enums));
        }, result);
    }
    if (structs[type] && structs[type].members.length) {
        if (CairoUint256.isAbiType(type)) {
            return new CairoUint256(element).toApiRequest();
        }
        if (CairoUint512.isAbiType(type)) {
            return new CairoUint512(element).toApiRequest();
        }
        if (isTypeEthAddress(type)) return parseBaseTypes(type, element);
        if (isTypeByteArray(type)) return parseByteArray(element);
        const { members } = structs[type];
        const subElement = element;
        return members.reduce((acc, it)=>{
            return acc.concat(parseCalldataValue(subElement[it.name], it.type, structs, enums));
        }, []);
    }
    if (isTypeTuple(type)) {
        const tupled = parseTuple(element, type);
        return tupled.reduce((acc, it)=>{
            const parsedData = parseCalldataValue(it.element, it.type, structs, enums);
            return acc.concat(parsedData);
        }, []);
    }
    if (CairoUint256.isAbiType(type)) {
        return new CairoUint256(element).toApiRequest();
    }
    if (CairoUint512.isAbiType(type)) {
        return new CairoUint512(element).toApiRequest();
    }
    if (isTypeEnum(type, enums)) {
        const { variants } = enums[type];
        if (isTypeOption(type)) {
            const myOption = element;
            if (myOption.isSome()) {
                const listTypeVariant2 = variants.find((variant)=>variant.name === "Some");
                if (isUndefined(listTypeVariant2)) {
                    throw Error(`Error in abi : Option has no 'Some' variant.`);
                }
                const typeVariantSome = listTypeVariant2.type;
                if (typeVariantSome === "()") {
                    return CairoOptionVariant.Some.toString();
                }
                const parsedParameter2 = parseCalldataValue(myOption.unwrap(), typeVariantSome, structs, enums);
                if (Array.isArray(parsedParameter2)) {
                    return [
                        CairoOptionVariant.Some.toString(),
                        ...parsedParameter2
                    ];
                }
                return [
                    CairoOptionVariant.Some.toString(),
                    parsedParameter2
                ];
            }
            return CairoOptionVariant.None.toString();
        }
        if (isTypeResult(type)) {
            const myResult = element;
            if (myResult.isOk()) {
                const listTypeVariant3 = variants.find((variant)=>variant.name === "Ok");
                if (isUndefined(listTypeVariant3)) {
                    throw Error(`Error in abi : Result has no 'Ok' variant.`);
                }
                const typeVariantOk = listTypeVariant3.type;
                if (typeVariantOk === "()") {
                    return CairoResultVariant.Ok.toString();
                }
                const parsedParameter3 = parseCalldataValue(myResult.unwrap(), typeVariantOk, structs, enums);
                if (Array.isArray(parsedParameter3)) {
                    return [
                        CairoResultVariant.Ok.toString(),
                        ...parsedParameter3
                    ];
                }
                return [
                    CairoResultVariant.Ok.toString(),
                    parsedParameter3
                ];
            }
            const listTypeVariant2 = variants.find((variant)=>variant.name === "Err");
            if (isUndefined(listTypeVariant2)) {
                throw Error(`Error in abi : Result has no 'Err' variant.`);
            }
            const typeVariantErr = listTypeVariant2.type;
            if (typeVariantErr === "()") {
                return CairoResultVariant.Err.toString();
            }
            const parsedParameter2 = parseCalldataValue(myResult.unwrap(), typeVariantErr, structs, enums);
            if (Array.isArray(parsedParameter2)) {
                return [
                    CairoResultVariant.Err.toString(),
                    ...parsedParameter2
                ];
            }
            return [
                CairoResultVariant.Err.toString(),
                parsedParameter2
            ];
        }
        const myEnum = element;
        const activeVariant = myEnum.activeVariant();
        const listTypeVariant = variants.find((variant)=>variant.name === activeVariant);
        if (isUndefined(listTypeVariant)) {
            throw Error(`Not find in abi : Enum has no '${activeVariant}' variant.`);
        }
        const typeActiveVariant = listTypeVariant.type;
        const numActiveVariant = variants.findIndex((variant)=>variant.name === activeVariant);
        if (typeActiveVariant === "()") {
            return numActiveVariant.toString();
        }
        const parsedParameter = parseCalldataValue(myEnum.unwrap(), typeActiveVariant, structs, enums);
        if (Array.isArray(parsedParameter)) {
            return [
                numActiveVariant.toString(),
                ...parsedParameter
            ];
        }
        return [
            numActiveVariant.toString(),
            parsedParameter
        ];
    }
    if (isTypeNonZero(type)) {
        return parseBaseTypes(getArrayType(type), element);
    }
    if (typeof element === "object") {
        throw Error(`Parameter ${element} do not align with abi parameter ${type}`);
    }
    return parseBaseTypes(type, element);
}
function parseCalldataField(argsIterator, input, structs, enums) {
    const { name, type } = input;
    let { value } = argsIterator.next();
    switch(true){
        // Fixed array
        case CairoFixedArray.isTypeFixedArray(type):
            if (!Array.isArray(value) && !(typeof value === "object")) {
                throw Error(`ABI expected parameter ${name} to be an array or an object, got ${value}`);
            }
            return parseCalldataValue(value, input.type, structs, enums);
        // Normal Array
        case isTypeArray(type):
            if (!Array.isArray(value) && !isText(value)) {
                throw Error(`ABI expected parameter ${name} to be array or long string, got ${value}`);
            }
            if (isString(value)) {
                value = splitLongString(value);
            }
            return parseCalldataValue(value, input.type, structs, enums);
        case isTypeNonZero(type):
            return parseBaseTypes(getArrayType(type), value);
        case isTypeEthAddress(type):
            return parseBaseTypes(type, value);
        // Struct or Tuple
        case isTypeStruct(type, structs) || isTypeTuple(type) || CairoUint256.isAbiType(type):
            return parseCalldataValue(value, type, structs, enums);
        // Enums
        case isTypeEnum(type, enums):
            return parseCalldataValue(value, type, structs, enums);
        // Felt or unhandled
        default:
            return parseBaseTypes(type, value);
    }
}
// src/utils/calldata/responseParser.ts
function parseBaseTypes2(type, it) {
    let temp;
    switch(true){
        case isTypeBool(type):
            temp = it.next().value;
            return Boolean(BigInt(temp));
        case CairoUint256.isAbiType(type):
            const low = it.next().value;
            const high = it.next().value;
            return new CairoUint256(low, high).toBigInt();
        case CairoUint512.isAbiType(type):
            const limb0 = it.next().value;
            const limb1 = it.next().value;
            const limb2 = it.next().value;
            const limb3 = it.next().value;
            return new CairoUint512(limb0, limb1, limb2, limb3).toBigInt();
        case isTypeEthAddress(type):
            temp = it.next().value;
            return BigInt(temp);
        case isTypeBytes31(type):
            temp = it.next().value;
            return decodeShortString(temp);
        case isTypeSecp256k1Point(type):
            const xLow = removeHexPrefix(it.next().value).padStart(32, "0");
            const xHigh = removeHexPrefix(it.next().value).padStart(32, "0");
            const yLow = removeHexPrefix(it.next().value).padStart(32, "0");
            const yHigh = removeHexPrefix(it.next().value).padStart(32, "0");
            const pubK = BigInt(addHexPrefix(xHigh + xLow + yHigh + yLow));
            return pubK;
        default:
            temp = it.next().value;
            return BigInt(temp);
    }
}
function parseResponseValue(responseIterator, element, structs, enums) {
    if (element.type === "()") {
        return {};
    }
    if (CairoUint256.isAbiType(element.type)) {
        const low = responseIterator.next().value;
        const high = responseIterator.next().value;
        return new CairoUint256(low, high).toBigInt();
    }
    if (CairoUint512.isAbiType(element.type)) {
        const limb0 = responseIterator.next().value;
        const limb1 = responseIterator.next().value;
        const limb2 = responseIterator.next().value;
        const limb3 = responseIterator.next().value;
        return new CairoUint512(limb0, limb1, limb2, limb3).toBigInt();
    }
    if (isTypeByteArray(element.type)) {
        const parsedBytes31Arr = [];
        const bytes31ArrLen = BigInt(responseIterator.next().value);
        while(parsedBytes31Arr.length < bytes31ArrLen){
            parsedBytes31Arr.push(toHex(responseIterator.next().value));
        }
        const pending_word = toHex(responseIterator.next().value);
        const pending_word_len = BigInt(responseIterator.next().value);
        const myByteArray = {
            data: parsedBytes31Arr,
            pending_word,
            pending_word_len
        };
        return stringFromByteArray(myByteArray);
    }
    if (CairoFixedArray.isTypeFixedArray(element.type)) {
        const parsedDataArr = [];
        const el = {
            name: "",
            type: CairoFixedArray.getFixedArrayType(element.type)
        };
        const arraySize = CairoFixedArray.getFixedArraySize(element.type);
        while(parsedDataArr.length < arraySize){
            parsedDataArr.push(parseResponseValue(responseIterator, el, structs, enums));
        }
        return parsedDataArr;
    }
    if (isTypeArray(element.type)) {
        const parsedDataArr = [];
        const el = {
            name: "",
            type: getArrayType(element.type)
        };
        const len = BigInt(responseIterator.next().value);
        while(parsedDataArr.length < len){
            parsedDataArr.push(parseResponseValue(responseIterator, el, structs, enums));
        }
        return parsedDataArr;
    }
    if (isTypeNonZero(element.type)) {
        const el = {
            name: "",
            type: getArrayType(element.type)
        };
        return parseResponseValue(responseIterator, el, structs, enums);
    }
    if (structs && element.type in structs && structs[element.type]) {
        if (isTypeEthAddress(element.type)) {
            return parseBaseTypes2(element.type, responseIterator);
        }
        return structs[element.type].members.reduce((acc, el)=>{
            acc[el.name] = parseResponseValue(responseIterator, el, structs, enums);
            return acc;
        }, {});
    }
    if (enums && element.type in enums && enums[element.type]) {
        const variantNum = Number(responseIterator.next().value);
        const rawEnum = enums[element.type].variants.reduce((acc, variant, num)=>{
            if (num === variantNum) {
                acc[variant.name] = parseResponseValue(responseIterator, {
                    name: "",
                    type: variant.type
                }, structs, enums);
                return acc;
            }
            acc[variant.name] = void 0;
            return acc;
        }, {});
        if (element.type.startsWith("core::option::Option")) {
            const content = variantNum === CairoOptionVariant.Some ? rawEnum.Some : void 0;
            return new CairoOption(variantNum, content);
        }
        if (element.type.startsWith("core::result::Result")) {
            let content;
            if (variantNum === CairoResultVariant.Ok) {
                content = rawEnum.Ok;
            } else {
                content = rawEnum.Err;
            }
            return new CairoResult(variantNum, content);
        }
        const customEnum = new CairoCustomEnum(rawEnum);
        return customEnum;
    }
    if (isTypeTuple(element.type)) {
        const memberTypes = extractTupleMemberTypes(element.type);
        return memberTypes.reduce((acc, it, idx)=>{
            const name = it?.name ? it.name : idx;
            const type = it?.type ? it.type : it;
            const el = {
                name,
                type
            };
            acc[name] = parseResponseValue(responseIterator, el, structs, enums);
            return acc;
        }, {});
    }
    if (isTypeArray(element.type)) {
        const parsedDataArr = [];
        const el = {
            name: "",
            type: getArrayType(element.type)
        };
        const len = BigInt(responseIterator.next().value);
        while(parsedDataArr.length < len){
            parsedDataArr.push(parseResponseValue(responseIterator, el, structs, enums));
        }
        return parsedDataArr;
    }
    return parseBaseTypes2(element.type, responseIterator);
}
function responseParser(responseIterator, output, structs, enums, parsedResult) {
    const { name, type } = output;
    let temp;
    switch(true){
        case isLen(name):
            temp = responseIterator.next().value;
            return BigInt(temp);
        case structs && type in structs || isTypeTuple(type):
            return parseResponseValue(responseIterator, output, structs, enums);
        case enums && isTypeEnum(type, enums):
            return parseResponseValue(responseIterator, output, structs, enums);
        case CairoFixedArray.isTypeFixedArray(type):
            return parseResponseValue(responseIterator, output, structs, enums);
        case isTypeArray(type):
            if (isCairo1Type(type)) {
                return parseResponseValue(responseIterator, output, structs, enums);
            }
            const parsedDataArr = [];
            if (parsedResult && parsedResult[`${name}_len`]) {
                const arrLen = parsedResult[`${name}_len`];
                while(parsedDataArr.length < arrLen){
                    parsedDataArr.push(parseResponseValue(responseIterator, {
                        name,
                        type: output.type.replace("*", "")
                    }, structs, enums));
                }
            }
            return parsedDataArr;
        case isTypeNonZero(type):
            return parseResponseValue(responseIterator, output, structs, enums);
        default:
            return parseBaseTypes2(type, responseIterator);
    }
}
// src/utils/calldata/validate.ts
var validateFelt = (parameter, input)=>{
    assert(isString(parameter) || isNumber(parameter) || isBigInt(parameter), `Validate: arg ${input.name} should be a felt typed as (String, Number or BigInt)`);
    if (isString(parameter) && !isHex(parameter)) return;
    const param = BigInt(parameter.toString(10));
    assert(// from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1266
    param >= 0n && param <= 2n ** 252n - 1n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^252-1]`);
};
var validateBytes31 = (parameter, input)=>{
    assert(isString(parameter), `Validate: arg ${input.name} should be a string.`);
    assert(parameter.length < 32, `Validate: arg ${input.name} cairo typed ${input.type} should be a string of less than 32 characters.`);
};
var validateByteArray = (parameter, input)=>{
    assert(isString(parameter), `Validate: arg ${input.name} should be a string.`);
};
var validateUint = (parameter, input)=>{
    if (isNumber(parameter)) {
        assert(parameter <= Number.MAX_SAFE_INTEGER, "Validation: Parameter is too large to be typed as Number use (BigInt or String)");
    }
    assert(isString(parameter) || isNumber(parameter) || isBigInt(parameter) || isObject(parameter) && "low" in parameter && "high" in parameter || isObject(parameter) && [
        "limb0",
        "limb1",
        "limb2",
        "limb3"
    ].every((key)=>key in parameter), `Validate: arg ${input.name} of cairo type ${input.type} should be type (String, Number or BigInt), but is ${typeof parameter} ${parameter}.`);
    let param;
    switch(input.type){
        case Uint.u256:
            param = new CairoUint256(parameter).toBigInt();
            break;
        case Uint.u512:
            param = new CairoUint512(parameter).toBigInt();
            break;
        default:
            param = toBigInt(parameter);
    }
    switch(input.type){
        case Uint.u8:
            assert(param >= 0n && param <= 255n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0 - 255]`);
            break;
        case Uint.u16:
            assert(param >= 0n && param <= 65535n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 65535]`);
            break;
        case Uint.u32:
            assert(param >= 0n && param <= 4294967295n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 4294967295]`);
            break;
        case Uint.u64:
            assert(param >= 0n && param <= 2n ** 64n - 1n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^64-1]`);
            break;
        case Uint.u128:
            assert(param >= 0n && param <= 2n ** 128n - 1n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^128-1]`);
            break;
        case Uint.u256:
            assert(param >= 0n && param <= 2n ** 256n - 1n, `Validate: arg ${input.name} is ${input.type} should be in range 0 - 2^256-1`);
            break;
        case Uint.u512:
            assert(CairoUint512.is(param), `Validate: arg ${input.name} is ${input.type} should be in range 0 - 2^512-1`);
            break;
        case Literal.ClassHash:
            assert(// from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1670
            param >= 0n && param <= 2n ** 252n - 1n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^252-1]`);
            break;
        case Literal.ContractAddress:
            assert(// from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1245
            param >= 0n && param <= 2n ** 252n - 1n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^252-1]`);
            break;
        case Literal.Secp256k1Point:
            {
                assert(param >= 0n && param <= 2n ** 512n - 1n, `Validate: arg ${input.name} must be ${input.type} : a 512 bits number.`);
                break;
            }
        case Literal.U96:
            {
                assert(param >= 0n && param <= 2n ** 96n - 1n, `Validate: arg ${input.name} must be ${input.type} : a 96 bits number.`);
                break;
            }
        default:
            break;
    }
};
var validateBool = (parameter, input)=>{
    assert(isBoolean(parameter), `Validate: arg ${input.name} of cairo type ${input.type} should be type (Boolean)`);
};
var validateStruct = (parameter, input, structs)=>{
    if (input.type === Uint.u256 || input.type === Uint.u512) {
        validateUint(parameter, input);
        return;
    }
    if (isTypeEthAddress(input.type)) {
        assert(!isObject(parameter), `EthAddress type is waiting a BigNumberish. Got "${parameter}"`);
        const param = BigInt(parameter.toString(10));
        assert(// from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1259
        param >= 0n && param <= 2n ** 160n - 1n, `Validate: arg ${input.name} cairo typed ${input.type} should be in range [0, 2^160-1]`);
        return;
    }
    assert(isObject(parameter), `Validate: arg ${input.name} is cairo type struct (${input.type}), and should be defined as a js object (not array)`);
    structs[input.type].members.forEach(({ name })=>{
        assert(Object.keys(parameter).includes(name), `Validate: arg ${input.name} should have a property ${name}`);
    });
};
var validateEnum = (parameter, input)=>{
    assert(isObject(parameter), `Validate: arg ${input.name} is cairo type Enum (${input.type}), and should be defined as a js object (not array)`);
    const methodsKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(parameter));
    const keys = [
        ...Object.getOwnPropertyNames(parameter),
        ...methodsKeys
    ];
    if (isTypeOption(input.type) && keys.includes("isSome") && keys.includes("isNone")) {
        return;
    }
    if (isTypeResult(input.type) && keys.includes("isOk") && keys.includes("isErr")) {
        return;
    }
    if (keys.includes("variant") && keys.includes("activeVariant")) {
        return;
    }
    throw new Error(`Validate Enum: argument ${input.name}, type ${input.type}, value received "${parameter}", is not an Enum.`);
};
var validateTuple = (parameter, input)=>{
    assert(isObject(parameter), `Validate: arg ${input.name} should be a tuple (defined as object)`);
};
var validateArray = (parameterArray, input, structs, enums)=>{
    const isNormalArray = isTypeArray(input.type);
    const baseType = isNormalArray ? getArrayType(input.type) : CairoFixedArray.getFixedArrayType(input.type);
    if (isNormalArray && isTypeFelt(baseType) && isLongText(parameterArray)) {
        return;
    }
    let parameter = [];
    if (isNormalArray) {
        assert(Array.isArray(parameterArray), `Validate: arg ${input.name} should be an Array`);
        parameter = parameterArray;
    } else {
        switch(true){
            case Array.isArray(parameterArray):
                parameter = parameterArray;
                break;
            case typeof parameterArray === "object":
                parameter = Object.values(parameterArray);
                break;
            default:
                throw new Error(`Validate: arg ${input.name} should be an Array or an object.`);
        }
    }
    switch(true){
        case isTypeFelt(baseType):
            parameter.forEach((param)=>validateFelt(param, input));
            break;
        case isTypeTuple(baseType):
            parameter.forEach((it)=>validateTuple(it, {
                    name: input.name,
                    type: baseType
                }));
            break;
        case isTypeArray(baseType):
            parameter.forEach((param)=>validateArray(param, {
                    name: "",
                    type: baseType
                }, structs, enums));
            break;
        case isTypeStruct(baseType, structs):
            parameter.forEach((it)=>validateStruct(it, {
                    name: input.name,
                    type: baseType
                }, structs));
            break;
        case isTypeEnum(baseType, enums):
            parameter.forEach((it)=>validateEnum(it, {
                    name: input.name,
                    type: baseType
                }));
            break;
        case isTypeUint(baseType) || isTypeLiteral(baseType):
            parameter.forEach((param)=>validateUint(param, {
                    name: "",
                    type: baseType
                }));
            break;
        case isTypeBool(baseType):
            parameter.forEach((param)=>validateBool(param, input));
            break;
        default:
            throw new Error(`Validate Unhandled: argument ${input.name}, type ${input.type}, value ${parameter}`);
    }
};
var validateNonZero = (parameter, input)=>{
    const baseType = getArrayType(input.type);
    assert(isTypeUint(baseType) && baseType !== CairoUint512.abiSelector || isTypeFelt(baseType), `Validate: ${input.name} type is not authorized for NonZero type.`);
    switch(true){
        case isTypeFelt(baseType):
            validateFelt(parameter, input);
            assert(BigInt(parameter.toString(10)) > 0, "Validate: value 0 is not authorized in NonZero felt252 type.");
            break;
        case isTypeUint(baseType):
            validateUint(parameter, {
                name: "",
                type: baseType
            });
            switch(baseType){
                case Uint.u256:
                    assert(new CairoUint256(parameter).toBigInt() > 0, "Validate: value 0 is not authorized in NonZero uint256 type.");
                    break;
                default:
                    assert(toBigInt(parameter) > 0, "Validate: value 0 is not authorized in NonZero uint type.");
            }
            break;
        default:
            throw new Error(`Validate Unhandled: argument ${input.name}, type ${input.type}, value "${parameter}"`);
    }
};
function validateFields(abiMethod, args, structs, enums) {
    abiMethod.inputs.reduce((acc, input)=>{
        const parameter = args[acc];
        switch(true){
            case isLen(input.name):
                return acc;
            case isTypeFelt(input.type):
                validateFelt(parameter, input);
                break;
            case isTypeBytes31(input.type):
                validateBytes31(parameter, input);
                break;
            case isTypeUint(input.type) || isTypeLiteral(input.type):
                validateUint(parameter, input);
                break;
            case isTypeBool(input.type):
                validateBool(parameter, input);
                break;
            case isTypeByteArray(input.type):
                validateByteArray(parameter, input);
                break;
            case isTypeArray(input.type) || CairoFixedArray.isTypeFixedArray(input.type):
                validateArray(parameter, input, structs, enums);
                break;
            case isTypeStruct(input.type, structs):
                validateStruct(parameter, input, structs);
                break;
            case isTypeEnum(input.type, enums):
                validateEnum(parameter, input);
                break;
            case isTypeTuple(input.type):
                validateTuple(parameter, input);
                break;
            case isTypeNonZero(input.type):
                validateNonZero(parameter, input);
                break;
            default:
                throw new Error(`Validate Unhandled: argument ${input.name}, type ${input.type}, value ${parameter}`);
        }
        return acc + 1;
    }, 0);
}
// src/utils/calldata/index.ts
var CallData = class _CallData {
    abi;
    parser;
    structs;
    enums;
    constructor(abi){
        this.structs = _CallData.getAbiStruct(abi);
        this.enums = _CallData.getAbiEnum(abi);
        this.parser = createAbiParser(abi);
        this.abi = this.parser.getLegacyFormat();
    }
    /**
   * Validate arguments passed to the method as corresponding to the ones in the abi
   * @param type ValidateType - type of the method
   * @param method string - name of the method
   * @param args ArgsOrCalldata - arguments that are passed to the method
   */ validate(type, method, args = []) {
        if (type !== ValidateType.DEPLOY) {
            const invocableFunctionNames = this.abi.filter((abi)=>{
                if (abi.type !== "function") return false;
                const isView = abi.stateMutability === "view" || abi.state_mutability === "view";
                return type === ValidateType.INVOKE ? !isView : isView;
            }).map((abi)=>abi.name);
            assert(invocableFunctionNames.includes(method), `${type === ValidateType.INVOKE ? "invocable" : "viewable"} method not found in abi`);
        }
        const abiMethod = this.abi.find((abi)=>type === ValidateType.DEPLOY ? abi.name === method && abi.type === "constructor" : abi.name === method && abi.type === "function");
        if (isNoConstructorValid(method, args, abiMethod)) {
            return;
        }
        const inputsLength = this.parser.methodInputsLength(abiMethod);
        if (args.length !== inputsLength) {
            throw Error(`Invalid number of arguments, expected ${inputsLength} arguments, but got ${args.length}`);
        }
        validateFields(abiMethod, args, this.structs, this.enums);
    }
    /**
   * Compile contract callData with abi
   * Parse the calldata by using input fields from the abi for that method
   * @param method string - method name
   * @param argsCalldata RawArgs - arguments passed to the method. Can be an array of arguments (in the order of abi definition), or an object constructed in conformity with abi (in this case, the parameter can be in a wrong order).
   * @return Calldata - parsed arguments in format that contract is expecting
   * @example
   * ```typescript
   * const calldata = myCallData.compile("constructor", ["0x34a", [1, 3n]]);
   * ```
   * ```typescript
   * const calldata2 = myCallData.compile("constructor", {list:[1, 3n], balance:"0x34"}); // wrong order is valid
   * ```
   */ compile(method, argsCalldata) {
        const abiMethod = this.abi.find((abiFunction)=>abiFunction.name === method);
        if (isNoConstructorValid(method, argsCalldata, abiMethod)) {
            return [];
        }
        let args;
        if (Array.isArray(argsCalldata)) {
            args = argsCalldata;
        } else {
            const orderedObject = orderPropsByAbi(argsCalldata, abiMethod.inputs, this.structs, this.enums);
            args = Object.values(orderedObject);
            validateFields(abiMethod, args, this.structs, this.enums);
        }
        const argsIterator = args[Symbol.iterator]();
        const callArray = abiMethod.inputs.reduce((acc, input)=>isLen(input.name) && !isCairo1Type(input.type) ? acc : acc.concat(parseCalldataField(argsIterator, input, this.structs, this.enums)), []);
        Object.defineProperty(callArray, "__compiled__", {
            enumerable: false,
            writable: false,
            value: true
        });
        return callArray;
    }
    /**
   * Compile contract callData without abi
   * @param rawArgs RawArgs representing cairo method arguments or string array of compiled data
   * @returns Calldata
   */ static compile(rawArgs) {
        const createTree = (obj)=>{
            const getEntries = (o, prefix = ".")=>{
                const oe = Array.isArray(o) ? [
                    o.length.toString(),
                    ...o
                ] : o;
                return Object.entries(oe).flatMap(([k, v])=>{
                    let value = v;
                    if (k === "entrypoint") value = getSelectorFromName(value);
                    else if (isLongText(value)) value = byteArrayFromString(value);
                    const kk = Array.isArray(oe) && k === "0" ? "$$len" : k;
                    if (isBigInt(value)) return [
                        [
                            `${prefix}${kk}`,
                            felt(value)
                        ]
                    ];
                    if (Object(value) === value) {
                        const methodsKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(value));
                        const keys = [
                            ...Object.getOwnPropertyNames(value),
                            ...methodsKeys
                        ];
                        if (keys.includes("isSome") && keys.includes("isNone")) {
                            const myOption = value;
                            const variantNb = myOption.isSome() ? CairoOptionVariant.Some : CairoOptionVariant.None;
                            if (myOption.isSome()) return getEntries({
                                0: variantNb,
                                1: myOption.unwrap()
                            }, `${prefix}${kk}.`);
                            return [
                                [
                                    `${prefix}${kk}`,
                                    felt(variantNb)
                                ]
                            ];
                        }
                        if (keys.includes("isOk") && keys.includes("isErr")) {
                            const myResult = value;
                            const variantNb = myResult.isOk() ? CairoResultVariant.Ok : CairoResultVariant.Err;
                            return getEntries({
                                0: variantNb,
                                1: myResult.unwrap()
                            }, `${prefix}${kk}.`);
                        }
                        if (keys.includes("variant") && keys.includes("activeVariant")) {
                            const myEnum = value;
                            const activeVariant = myEnum.activeVariant();
                            const listVariants = Object.keys(myEnum.variant);
                            const activeVariantNb = listVariants.findIndex((variant)=>variant === activeVariant);
                            if (typeof myEnum.unwrap() === "object" && Object.keys(myEnum.unwrap()).length === 0) {
                                return [
                                    [
                                        `${prefix}${kk}`,
                                        felt(activeVariantNb)
                                    ]
                                ];
                            }
                            return getEntries({
                                0: activeVariantNb,
                                1: myEnum.unwrap()
                            }, `${prefix}${kk}.`);
                        }
                        return getEntries(value, `${prefix}${kk}.`);
                    }
                    return [
                        [
                            `${prefix}${kk}`,
                            felt(value)
                        ]
                    ];
                });
            };
            const result = Object.fromEntries(getEntries(obj));
            return result;
        };
        let callTreeArray;
        if (!Array.isArray(rawArgs)) {
            const callTree = createTree(rawArgs);
            callTreeArray = Object.values(callTree);
        } else {
            const callObj = {
                ...rawArgs
            };
            const callTree = createTree(callObj);
            callTreeArray = Object.values(callTree);
        }
        Object.defineProperty(callTreeArray, "__compiled__", {
            enumerable: false,
            writable: false,
            value: true
        });
        return callTreeArray;
    }
    /**
   * Parse elements of the response array and structuring them into response object
   * @param method string - method name
   * @param response string[] - response from the method
   * @return Result - parsed response corresponding to the abi
   */ parse(method, response) {
        const { outputs } = this.abi.find((abi)=>abi.name === method);
        const responseIterator = response.flat()[Symbol.iterator]();
        const parsed = outputs.flat().reduce((acc, output, idx)=>{
            const propName = output.name ?? idx;
            acc[propName] = responseParser(responseIterator, output, this.structs, this.enums, acc);
            if (acc[propName] && acc[`${propName}_len`]) {
                delete acc[`${propName}_len`];
            }
            return acc;
        }, {});
        return Object.keys(parsed).length === 1 && 0 in parsed ? parsed[0] : parsed;
    }
    /**
   * Format cairo method response data to native js values based on provided format schema
   * @param method string - cairo method name
   * @param response string[] - cairo method response
   * @param format object - formatter object schema
   * @returns Result - parsed and formatted response object
   */ format(method, response, format) {
        const parsed = this.parse(method, response);
        return formatter(parsed, format);
    }
    /**
   * Helper to extract structs from abi
   * @param abi Abi
   * @returns AbiStructs - structs from abi
   */ static getAbiStruct(abi) {
        return abi.filter((abiEntry)=>abiEntry.type === "struct").reduce((acc, abiEntry)=>({
                ...acc,
                [abiEntry.name]: abiEntry
            }), {});
    }
    /**
   * Helper to extract enums from abi
   * @param abi Abi
   * @returns AbiEnums - enums from abi
   */ static getAbiEnum(abi) {
        const fullEnumList = abi.filter((abiEntry)=>abiEntry.type === "enum").reduce((acc, abiEntry)=>({
                ...acc,
                [abiEntry.name]: abiEntry
            }), {});
        delete fullEnumList["core::bool"];
        return fullEnumList;
    }
    /**
   * Helper: Compile HexCalldata | RawCalldata | RawArgs
   * @param rawCalldata HexCalldata | RawCalldata | RawArgs
   * @returns Calldata
   */ static toCalldata(rawCalldata = []) {
        return _CallData.compile(rawCalldata);
    }
    /**
   * Helper: Convert raw to HexCalldata
   * @param raw HexCalldata | RawCalldata | RawArgs
   * @returns HexCalldata
   */ static toHex(raw = []) {
        const calldata = _CallData.compile(raw);
        return calldata.map((it)=>toHex(it));
    }
    /**
   * Parse the elements of a contract response and structure them into one or several Result.
   * In Cairo 0, arrays are not supported.
   * @param typeCairo string or string[] - Cairo type name, ex : "hello::hello::UserData"
   * @param response string[] - serialized data corresponding to typeCairo.
   * @return Result or Result[] - parsed response corresponding to typeData.
   * @example
   * const res2=helloCallData.decodeParameters("hello::hello::UserData",["0x123456","0x1"]);
   * result = { address: 1193046n, is_claimed: true }
   */ decodeParameters(typeCairo, response) {
        const typeCairoArray = Array.isArray(typeCairo) ? typeCairo : [
            typeCairo
        ];
        const responseIterator = response.flat()[Symbol.iterator]();
        const decodedArray = typeCairoArray.map((typeParam)=>responseParser(responseIterator, {
                name: "",
                type: typeParam
            }, this.structs, this.enums));
        return decodedArray.length === 1 ? decodedArray[0] : decodedArray;
    }
};
// src/utils/hash/index.ts
var hash_exports = {};
__export(hash_exports, {
    calculateContractAddressFromHash: ()=>calculateContractAddressFromHash,
    calculateDeclareTransactionHash: ()=>calculateDeclareTransactionHash3,
    calculateDeployAccountTransactionHash: ()=>calculateDeployAccountTransactionHash3,
    calculateInvokeTransactionHash: ()=>calculateInvokeTransactionHash2,
    calculateL2MessageTxHash: ()=>calculateL2MessageTxHash,
    computeCompiledClassHash: ()=>computeCompiledClassHash,
    computeContractClassHash: ()=>computeContractClassHash,
    computeHashOnElements: ()=>computeHashOnElements2,
    computeHintedClassHash: ()=>computeHintedClassHash,
    computeLegacyContractClassHash: ()=>computeLegacyContractClassHash,
    computePedersenHash: ()=>computePedersenHash,
    computePedersenHashOnElements: ()=>computePedersenHashOnElements,
    computePoseidonHash: ()=>computePoseidonHash,
    computePoseidonHashOnElements: ()=>computePoseidonHashOnElements,
    computeSierraContractClassHash: ()=>computeSierraContractClassHash,
    formatSpaces: ()=>formatSpaces,
    getL2MessageHash: ()=>getL2MessageHash,
    getSelector: ()=>getSelector,
    getSelectorFromName: ()=>getSelectorFromName,
    hashByteCodeSegments: ()=>hashByteCodeSegments,
    keccakBn: ()=>keccakBn,
    poseidon: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$poseidon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    solidityUint256PackedKeccak256: ()=>solidityUint256PackedKeccak256,
    starknetKeccak: ()=>starknetKeccak
});
;
// src/utils/hash/transactionHash/v2.ts
var v2_exports = {};
__export(v2_exports, {
    calculateDeclareTransactionHash: ()=>calculateDeclareTransactionHash,
    calculateDeployAccountTransactionHash: ()=>calculateDeployAccountTransactionHash,
    calculateL2MessageTxHash: ()=>calculateL2MessageTxHash,
    calculateTransactionHash: ()=>calculateTransactionHash,
    calculateTransactionHashCommon: ()=>calculateTransactionHashCommon,
    computeHashOnElements: ()=>computeHashOnElements
});
// src/utils/ec.ts
var ec_exports = {};
__export(ec_exports, {
    starkCurve: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    weierstrass: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$weierstrass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
;
;
// src/utils/hash/transactionHash/v2.ts
function computeHashOnElements(data) {
    return [
        ...data,
        data.length
    ].reduce((x, y)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.pedersen(toBigInt(x), toBigInt(y)), 0).toString();
}
function calculateTransactionHashCommon(txHashPrefix, version, contractAddress, entryPointSelector, calldata, maxFee, chainId, additionalData = []) {
    const calldataHash = computeHashOnElements(calldata);
    const dataToHash = [
        txHashPrefix,
        version,
        contractAddress,
        entryPointSelector,
        calldataHash,
        maxFee,
        chainId,
        ...additionalData
    ];
    return computeHashOnElements(dataToHash);
}
function calculateDeclareTransactionHash(classHash, senderAddress, version, maxFee, chainId, nonce, compiledClassHash) {
    return calculateTransactionHashCommon("0x6465636c617265" /* DECLARE */ , version, senderAddress, 0, [
        classHash
    ], maxFee, chainId, [
        nonce,
        ...compiledClassHash ? [
            compiledClassHash
        ] : []
    ]);
}
function calculateDeployAccountTransactionHash(contractAddress, classHash, constructorCalldata, salt, version, maxFee, chainId, nonce) {
    const calldata = [
        classHash,
        salt,
        ...constructorCalldata
    ];
    return calculateTransactionHashCommon("0x6465706c6f795f6163636f756e74" /* DEPLOY_ACCOUNT */ , version, contractAddress, 0, calldata, maxFee, chainId, [
        nonce
    ]);
}
function calculateTransactionHash(contractAddress, version, calldata, maxFee, chainId, nonce) {
    return calculateTransactionHashCommon("0x696e766f6b65" /* INVOKE */ , version, contractAddress, 0, calldata, maxFee, chainId, [
        nonce
    ]);
}
function calculateL2MessageTxHash(l1FromAddress, l2ToAddress, l2Selector, l2Calldata, l2ChainId, l1Nonce) {
    const payload = [
        l1FromAddress,
        ...l2Calldata
    ];
    return calculateTransactionHashCommon("0x6c315f68616e646c6572" /* L1_HANDLER */ , 0, l2ToAddress, getSelector(l2Selector), payload, 0, l2ChainId, [
        l1Nonce
    ]);
}
// src/utils/hash/transactionHash/v3.ts
var v3_exports = {};
__export(v3_exports, {
    calculateDeclareTransactionHash: ()=>calculateDeclareTransactionHash2,
    calculateDeployAccountTransactionHash: ()=>calculateDeployAccountTransactionHash2,
    calculateInvokeTransactionHash: ()=>calculateInvokeTransactionHash,
    calculateTransactionHashCommon: ()=>calculateTransactionHashCommon2,
    encodeResourceBoundsL1: ()=>encodeResourceBoundsL1,
    encodeResourceBoundsL2: ()=>encodeResourceBoundsL2,
    hashDAMode: ()=>hashDAMode,
    hashFeeField: ()=>hashFeeField
});
;
var AToBI = (array)=>array.map((it)=>BigInt(it));
var DATA_AVAILABILITY_MODE_BITS = 32n;
var MAX_AMOUNT_BITS = 64n;
var MAX_PRICE_PER_UNIT_BITS = 128n;
var RESOURCE_VALUE_OFFSET = MAX_AMOUNT_BITS + MAX_PRICE_PER_UNIT_BITS;
var L1_GAS_NAME = BigInt(encodeShortString("L1_GAS"));
var L2_GAS_NAME = BigInt(encodeShortString("L2_GAS"));
function hashDAMode(nonceDAMode, feeDAMode) {
    return (BigInt(nonceDAMode) << DATA_AVAILABILITY_MODE_BITS) + BigInt(feeDAMode);
}
function encodeResourceBoundsL1(bounds) {
    return (L1_GAS_NAME << RESOURCE_VALUE_OFFSET) + (BigInt(bounds.l1_gas.max_amount) << MAX_PRICE_PER_UNIT_BITS) + BigInt(bounds.l1_gas.max_price_per_unit);
}
function encodeResourceBoundsL2(bounds) {
    return (L2_GAS_NAME << RESOURCE_VALUE_OFFSET) + (BigInt(bounds.l2_gas.max_amount) << MAX_PRICE_PER_UNIT_BITS) + BigInt(bounds.l2_gas.max_price_per_unit);
}
function hashFeeField(tip, bounds) {
    const L1Bound = encodeResourceBoundsL1(bounds);
    const L2Bound = encodeResourceBoundsL2(bounds);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])([
        BigInt(tip),
        L1Bound,
        L2Bound
    ]);
}
function calculateTransactionHashCommon2(txHashPrefix, version, senderAddress, chainId, nonce, tip, paymasterData, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, additionalData = []) {
    const feeFieldHash = hashFeeField(tip, resourceBounds);
    const dAModeHash = hashDAMode(nonceDataAvailabilityMode, feeDataAvailabilityMode);
    const dataToHash = AToBI([
        txHashPrefix,
        version,
        senderAddress,
        feeFieldHash,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(AToBI(paymasterData)),
        chainId,
        nonce,
        dAModeHash,
        ...AToBI(additionalData)
    ]);
    return toHex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(dataToHash));
}
function calculateDeployAccountTransactionHash2(contractAddress, classHash, compiledConstructorCalldata, salt, version, chainId, nonce, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, tip, paymasterData) {
    return calculateTransactionHashCommon2("0x6465706c6f795f6163636f756e74" /* DEPLOY_ACCOUNT */ , version, contractAddress, chainId, nonce, tip, paymasterData, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(AToBI(compiledConstructorCalldata)),
        classHash,
        salt
    ]);
}
function calculateDeclareTransactionHash2(classHash, compiledClassHash, senderAddress, version, chainId, nonce, accountDeploymentData, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, tip, paymasterData) {
    return calculateTransactionHashCommon2("0x6465636c617265" /* DECLARE */ , version, senderAddress, chainId, nonce, tip, AToBI(paymasterData), nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(AToBI(accountDeploymentData)),
        classHash,
        compiledClassHash
    ]);
}
function calculateInvokeTransactionHash(senderAddress, version, compiledCalldata, chainId, nonce, accountDeploymentData, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, tip, paymasterData) {
    return calculateTransactionHashCommon2("0x696e766f6b65" /* INVOKE */ , version, senderAddress, chainId, nonce, tip, paymasterData, nonceDataAvailabilityMode, feeDataAvailabilityMode, resourceBounds, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(AToBI(accountDeploymentData)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(AToBI(compiledCalldata))
    ]);
}
// src/utils/hash/transactionHash/index.ts
function isV3InvokeTx(args) {
    return [
        api_exports.ETransactionVersion.V3,
        api_exports.ETransactionVersion.F3
    ].includes(args.version);
}
function calculateInvokeTransactionHash2(args) {
    if (isV3InvokeTx(args)) {
        return calculateInvokeTransactionHash(args.senderAddress, args.version, args.compiledCalldata, args.chainId, args.nonce, args.accountDeploymentData, args.nonceDataAvailabilityMode, args.feeDataAvailabilityMode, args.resourceBounds, args.tip, args.paymasterData);
    }
    return calculateTransactionHash(args.senderAddress, args.version, args.compiledCalldata, args.maxFee, args.chainId, args.nonce);
}
function isV3DeclareTx(args) {
    return [
        api_exports.ETransactionVersion.V3,
        api_exports.ETransactionVersion.F3
    ].includes(args.version);
}
function calculateDeclareTransactionHash3(args) {
    if (isV3DeclareTx(args)) {
        return calculateDeclareTransactionHash2(args.classHash, args.compiledClassHash, args.senderAddress, args.version, args.chainId, args.nonce, args.accountDeploymentData, args.nonceDataAvailabilityMode, args.feeDataAvailabilityMode, args.resourceBounds, args.tip, args.paymasterData);
    }
    return calculateDeclareTransactionHash(args.classHash, args.senderAddress, args.version, args.maxFee, args.chainId, args.nonce, args.compiledClassHash);
}
function isV3DeployAccountTx(args) {
    return [
        api_exports.ETransactionVersion.V3,
        api_exports.ETransactionVersion.F3
    ].includes(args.version);
}
function calculateDeployAccountTransactionHash3(args) {
    if (isV3DeployAccountTx(args)) {
        return calculateDeployAccountTransactionHash2(args.contractAddress, args.classHash, args.compiledConstructorCalldata, args.salt, args.version, args.chainId, args.nonce, args.nonceDataAvailabilityMode, args.feeDataAvailabilityMode, args.resourceBounds, args.tip, args.paymasterData);
    }
    return calculateDeployAccountTransactionHash(args.contractAddress, args.classHash, args.constructorCalldata, args.salt, args.version, args.maxFee, args.chainId, args.nonce);
}
;
function computePedersenHash(a, b) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.pedersen(BigInt(a), BigInt(b));
}
function computePoseidonHash(a, b) {
    return toHex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.poseidonHash(BigInt(a), BigInt(b)));
}
function computeHashOnElements2(data) {
    return [
        ...data,
        data.length
    ].reduce((x, y)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.pedersen(BigInt(x), BigInt(y)), 0).toString();
}
var computePedersenHashOnElements = computeHashOnElements2;
function computePoseidonHashOnElements(data) {
    return toHex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(data.map((x)=>BigInt(x))));
}
function calculateContractAddressFromHash(salt, classHash, constructorCalldata, deployerAddress) {
    const compiledCalldata = CallData.compile(constructorCalldata);
    const constructorCalldataHash = computeHashOnElements2(compiledCalldata);
    const CONTRACT_ADDRESS_PREFIX = felt("0x535441524b4e45545f434f4e54524143545f41444452455353");
    const hash = computeHashOnElements2([
        CONTRACT_ADDRESS_PREFIX,
        deployerAddress,
        salt,
        classHash,
        constructorCalldataHash
    ]);
    return toHex(BigInt(hash) % ADDR_BOUND);
}
function nullSkipReplacer(key, value) {
    if (key === "attributes" || key === "accessible_scopes") {
        return Array.isArray(value) && value.length === 0 ? void 0 : value;
    }
    if (key === "debug_info") {
        return null;
    }
    return value === null ? void 0 : value;
}
function formatSpaces(json2) {
    let insideQuotes = false;
    const newString = [];
    for (const char of json2){
        if (char === '"' && (newString.length > 0 && newString.slice(-1)[0] === "\\") === false) {
            insideQuotes = !insideQuotes;
        }
        if (insideQuotes) {
            newString.push(char);
        } else {
            newString.push(char === ":" ? ": " : char === "," ? ", " : char);
        }
    }
    return newString.join("");
}
function computeHintedClassHash(compiledContract) {
    const { abi, program } = compiledContract;
    const contractClass = {
        abi,
        program
    };
    const serializedJson = formatSpaces(stringify2(contractClass, nullSkipReplacer));
    return addHexPrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.keccak(utf8ToArray(serializedJson)).toString(16));
}
function computeLegacyContractClassHash(contract) {
    const compiledContract = isString(contract) ? parse2(contract) : contract;
    const apiVersion = toHex(API_VERSION);
    const externalEntryPointsHash = computeHashOnElements2(compiledContract.entry_points_by_type.EXTERNAL.flatMap((e)=>[
            e.selector,
            e.offset
        ]));
    const l1HandlerEntryPointsHash = computeHashOnElements2(compiledContract.entry_points_by_type.L1_HANDLER.flatMap((e)=>[
            e.selector,
            e.offset
        ]));
    const constructorEntryPointHash = computeHashOnElements2(compiledContract.entry_points_by_type.CONSTRUCTOR.flatMap((e)=>[
            e.selector,
            e.offset
        ]));
    const builtinsHash = computeHashOnElements2(compiledContract.program.builtins.map((s)=>encodeShortString(s)));
    const hintedClassHash = computeHintedClassHash(compiledContract);
    const dataHash = computeHashOnElements2(compiledContract.program.data);
    return computeHashOnElements2([
        apiVersion,
        externalEntryPointsHash,
        l1HandlerEntryPointsHash,
        constructorEntryPointHash,
        builtinsHash,
        hintedClassHash,
        dataHash
    ]);
}
function hashBuiltins(builtins) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(builtins.flatMap((it)=>{
        return BigInt(encodeShortString(it));
    }));
}
function hashEntryPoint(data) {
    const base = data.flatMap((it)=>{
        return [
            BigInt(it.selector),
            BigInt(it.offset),
            hashBuiltins(it.builtins)
        ];
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(base);
}
function hashByteCodeSegments(casm) {
    const byteCode = casm.bytecode.map((n)=>BigInt(n));
    const bytecodeSegmentLengths = casm.bytecode_segment_lengths ?? [];
    let segmentStart = 0;
    const hashLeaves = bytecodeSegmentLengths.flatMap((len)=>{
        const segment = byteCode.slice(segmentStart, segmentStart += len);
        return [
            BigInt(len),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(segment)
        ];
    });
    return 1n + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(hashLeaves);
}
function computeCompiledClassHash(casm) {
    const COMPILED_CLASS_VERSION = "COMPILED_CLASS_V1";
    const compiledClassVersion = BigInt(encodeShortString(COMPILED_CLASS_VERSION));
    const externalEntryPointsHash = hashEntryPoint(casm.entry_points_by_type.EXTERNAL);
    const l1Handlers = hashEntryPoint(casm.entry_points_by_type.L1_HANDLER);
    const constructor = hashEntryPoint(casm.entry_points_by_type.CONSTRUCTOR);
    const bytecode = casm.bytecode_segment_lengths ? hashByteCodeSegments(casm) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(casm.bytecode.map((it)=>BigInt(it)));
    return toHex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])([
        compiledClassVersion,
        externalEntryPointsHash,
        l1Handlers,
        constructor,
        bytecode
    ]));
}
function hashEntryPointSierra(data) {
    const base = data.flatMap((it)=>{
        return [
            BigInt(it.selector),
            BigInt(it.function_idx)
        ];
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(base);
}
function hashAbi(sierra) {
    const indentString = formatSpaces(stringify2(sierra.abi, null));
    return BigInt(addHexPrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.keccak(utf8ToArray(indentString)).toString(16)));
}
function computeSierraContractClassHash(sierra) {
    const CONTRACT_CLASS_VERSION = "CONTRACT_CLASS_V0.1.0";
    const compiledClassVersion = BigInt(encodeShortString(CONTRACT_CLASS_VERSION));
    const externalEntryPointsHash = hashEntryPointSierra(sierra.entry_points_by_type.EXTERNAL);
    const l1Handlers = hashEntryPointSierra(sierra.entry_points_by_type.L1_HANDLER);
    const constructor = hashEntryPointSierra(sierra.entry_points_by_type.CONSTRUCTOR);
    const abiHash = hashAbi(sierra);
    const sierraProgram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])(sierra.sierra_program.map((it)=>BigInt(it)));
    return toHex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["poseidonHashMany"])([
        compiledClassVersion,
        externalEntryPointsHash,
        l1Handlers,
        constructor,
        abiHash,
        sierraProgram
    ]));
}
function computeContractClassHash(contract) {
    const compiledContract = isString(contract) ? parse2(contract) : contract;
    if ("sierra_program" in compiledContract) {
        return computeSierraContractClassHash(compiledContract);
    }
    return computeLegacyContractClassHash(compiledContract);
}
// src/utils/stark.ts
var stark_exports = {};
__export(stark_exports, {
    compressProgram: ()=>compressProgram,
    decompressProgram: ()=>decompressProgram,
    estimateFeeToBounds: ()=>estimateFeeToBounds,
    estimatedFeeToMaxFee: ()=>estimatedFeeToMaxFee,
    formatSignature: ()=>formatSignature,
    getFullPublicKey: ()=>getFullPublicKey,
    intDAM: ()=>intDAM,
    makeAddress: ()=>makeAddress,
    randomAddress: ()=>randomAddress,
    reduceV2: ()=>reduceV2,
    signatureToDecimalArray: ()=>signatureToDecimalArray,
    signatureToHexArray: ()=>signatureToHexArray,
    toFeeVersion: ()=>toFeeVersion,
    toTransactionVersion: ()=>toTransactionVersion,
    v3Details: ()=>v3Details
});
;
;
function compressProgram(jsonProgram) {
    const stringified = isString(jsonProgram) ? jsonProgram : stringify2(jsonProgram);
    const compressedProgram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pako$40$2$2e$1$2e$0$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gzip"])(stringified);
    return btoaUniversal(compressedProgram);
}
function decompressProgram(base642) {
    if (Array.isArray(base642)) return base642;
    const decompressed = arrayBufferToString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pako$40$2$2e$1$2e$0$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ungzip"])(atobUniversal(base642)));
    return parse2(decompressed);
}
function randomAddress() {
    const randomKeyPair = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utils"].randomPrivateKey();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStarkKey"])(randomKeyPair);
}
function makeAddress(input) {
    return addHexPrefix(input).toLowerCase();
}
function formatSignature(sig) {
    if (!sig) throw Error("formatSignature: provided signature is undefined");
    if (Array.isArray(sig)) {
        return sig.map((it)=>toHex(it));
    }
    try {
        const { r, s } = sig;
        return [
            toHex(r),
            toHex(s)
        ];
    } catch (e) {
        throw new Error("Signature need to be weierstrass.SignatureType or an array for custom");
    }
}
function signatureToDecimalArray(sig) {
    return bigNumberishArrayToDecimalStringArray(formatSignature(sig));
}
function signatureToHexArray(sig) {
    return bigNumberishArrayToHexadecimalStringArray(formatSignature(sig));
}
function estimatedFeeToMaxFee(estimatedFee, overhead = 50 /* MAX_FEE */ ) {
    return addPercent(estimatedFee, overhead);
}
function estimateFeeToBounds(estimate, amountOverhead = 50 /* L1_BOUND_MAX_AMOUNT */ , priceOverhead = 50 /* L1_BOUND_MAX_PRICE_PER_UNIT */ ) {
    if (isBigInt(estimate)) {
        return {
            l2_gas: {
                max_amount: "0x0",
                max_price_per_unit: "0x0"
            },
            l1_gas: {
                max_amount: "0x0",
                max_price_per_unit: "0x0"
            }
        };
    }
    if (isUndefined(estimate.gas_consumed) || isUndefined(estimate.gas_price)) {
        throw Error("estimateFeeToBounds: estimate is undefined");
    }
    const maxUnits = estimate.data_gas_consumed !== void 0 && estimate.data_gas_price !== void 0 ? toHex(addPercent(BigInt(estimate.overall_fee) / BigInt(estimate.gas_price), amountOverhead)) : toHex(addPercent(estimate.gas_consumed, amountOverhead));
    const maxUnitPrice = toHex(addPercent(estimate.gas_price, priceOverhead));
    return {
        l2_gas: {
            max_amount: "0x0",
            max_price_per_unit: "0x0"
        },
        l1_gas: {
            max_amount: maxUnits,
            max_price_per_unit: maxUnitPrice
        }
    };
}
function intDAM(dam) {
    if (dam === api_exports.EDataAvailabilityMode.L1) return api_exports.EDAMode.L1;
    if (dam === api_exports.EDataAvailabilityMode.L2) return api_exports.EDAMode.L2;
    throw Error("EDAM conversion");
}
function toTransactionVersion(defaultVersion, providedVersion) {
    const providedVersion0xs = providedVersion ? toHex(providedVersion) : void 0;
    const defaultVersion0xs = toHex(defaultVersion);
    if (providedVersion && !Object.values(api_exports.ETransactionVersion).includes(providedVersion0xs)) {
        throw Error(`providedVersion ${providedVersion} is not ETransactionVersion`);
    }
    if (!Object.values(api_exports.ETransactionVersion).includes(defaultVersion0xs)) {
        throw Error(`defaultVersion ${defaultVersion} is not ETransactionVersion`);
    }
    return providedVersion ? providedVersion0xs : defaultVersion0xs;
}
function toFeeVersion(providedVersion) {
    if (!providedVersion) return void 0;
    const version = toHex(providedVersion);
    if (version === api_exports.ETransactionVersion.V0) return api_exports.ETransactionVersion.F0;
    if (version === api_exports.ETransactionVersion.V1) return api_exports.ETransactionVersion.F1;
    if (version === api_exports.ETransactionVersion.V2) return api_exports.ETransactionVersion.F2;
    if (version === api_exports.ETransactionVersion.V3) return api_exports.ETransactionVersion.F3;
    throw Error(`toFeeVersion: ${version} is not supported`);
}
function v3Details(details) {
    return {
        tip: details.tip || 0,
        paymasterData: details.paymasterData || [],
        accountDeploymentData: details.accountDeploymentData || [],
        nonceDataAvailabilityMode: details.nonceDataAvailabilityMode || api_exports.EDataAvailabilityMode.L1,
        feeDataAvailabilityMode: details.feeDataAvailabilityMode || api_exports.EDataAvailabilityMode.L1,
        resourceBounds: details.resourceBounds ?? estimateFeeToBounds(ZERO)
    };
}
function reduceV2(providedVersion) {
    if (providedVersion === api_exports.ETransactionVersion.F2) return api_exports.ETransactionVersion.F1;
    if (providedVersion === api_exports.ETransactionVersion.V2) return api_exports.ETransactionVersion.V1;
    return providedVersion;
}
function getFullPublicKey(privateKey) {
    const privKey = toHex(privateKey);
    const fullPrivKey = addHexPrefix(buf2hex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicKey"])(privKey, false)));
    return fullPrivKey;
}
// src/utils/contract.ts
function isSierra(contract) {
    const compiledContract = isString(contract) ? parse2(contract) : contract;
    return "sierra_program" in compiledContract;
}
function extractContractHashes(payload) {
    const response = {
        ...payload
    };
    if (isSierra(payload.contract)) {
        if (!payload.compiledClassHash && payload.casm) {
            response.compiledClassHash = computeCompiledClassHash(payload.casm);
        }
        if (!response.compiledClassHash) throw new Error("Extract compiledClassHash failed, provide (CairoAssembly).casm file or compiledClassHash");
    }
    response.classHash = payload.classHash ?? computeContractClassHash(payload.contract);
    if (!response.classHash) throw new Error("Extract classHash failed, provide (CompiledContract).json file or classHash");
    return response;
}
function contractClassResponseToLegacyCompiledContract(ccr) {
    if (isSierra(ccr)) {
        throw Error("ContractClassResponse need to be LegacyContractClass (cairo0 response class)");
    }
    const contract = ccr;
    return {
        ...contract,
        program: decompressProgram(contract.program)
    };
}
// src/utils/eth.ts
var eth_exports = {};
__export(eth_exports, {
    ethRandomPrivateKey: ()=>ethRandomPrivateKey,
    validateAndParseEthAddress: ()=>validateAndParseEthAddress
});
;
function ethRandomPrivateKey() {
    return sanitizeHex(buf2hex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["secp256k1"].utils.randomPrivateKey()));
}
function validateAndParseEthAddress(address) {
    assertInRange(address, ZERO, 2n ** 160n - 1n, "Ethereum Address ");
    const result = addHexPrefix(removeHexPrefix(toHex(address)).padStart(40, "0"));
    assert(Boolean(result.match(/^(0x)?[0-9a-f]{40}$/)), "Invalid Ethereum Address Format");
    return result;
}
;
;
var fetchPonyfill_default = IS_BROWSER && window.fetch.bind(window) || // use built-in fetch in browser if available
!isUndefined(global) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fetch$2d$cookie$40$3$2e$0$2e$1$2f$node_modules$2f$fetch$2d$cookie$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(global.fetch) || // use built-in fetch in node, react-native and service worker if available
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$isomorphic$2d$fetch$40$3$2e$0$2e$0$2f$node_modules$2f$isomorphic$2d$fetch$2f$fetch$2d$npm$2d$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
// src/utils/provider.ts
var provider_exports = {};
__export(provider_exports, {
    Block: ()=>Block,
    createSierraContractClass: ()=>createSierraContractClass,
    getDefaultNodeUrl: ()=>getDefaultNodeUrl,
    isPendingBlock: ()=>isPendingBlock,
    isPendingStateUpdate: ()=>isPendingStateUpdate,
    isPendingTransaction: ()=>isPendingTransaction,
    isV3Tx: ()=>isV3Tx,
    isVersion: ()=>isVersion,
    parseContract: ()=>parseContract,
    validBlockTags: ()=>validBlockTags,
    wait: ()=>wait
});
// src/global/config.ts
var Configuration = class _Configuration {
    static instance;
    config;
    constructor(){
        this.initialize();
    }
    initialize() {
        this.config = {
            ...DEFAULT_GLOBAL_CONFIG
        };
    }
    static getInstance() {
        if (!_Configuration.instance) {
            _Configuration.instance = new _Configuration();
        }
        return _Configuration.instance;
    }
    get(key, defaultValue) {
        return this.config[key] ?? defaultValue;
    }
    set(key, value) {
        this.config[key] = value;
    }
    update(configData) {
        this.config = {
            ...this.config,
            ...configData
        };
    }
    getAll() {
        return {
            ...this.config
        };
    }
    reset() {
        this.initialize();
    }
    delete(key) {
        delete this.config[key];
    }
    hasKey(key) {
        return key in this.config;
    }
};
var config = Configuration.getInstance();
// src/global/logger.type.ts
var LogLevelIndex = {
    DEBUG: 5,
    INFO: 4,
    WARN: 3,
    ERROR: 2,
    FATAL: 1,
    OFF: 0
};
// src/global/logger.ts
var Logger = class _Logger {
    static instance;
    config;
    constructor(){
        this.config = config;
    }
    static getInstance() {
        if (!_Logger.instance) {
            _Logger.instance = new _Logger();
        }
        return _Logger.instance;
    }
    getTimestamp() {
        return /* @__PURE__ */ new Date().toISOString();
    }
    shouldLog(messageLevel) {
        const configLevel = this.config.get("logLevel", "INFO");
        return messageLevel <= LogLevelIndex[configLevel];
    }
    formatMessage(logMessage) {
        const { level, message, timestamp, data } = logMessage;
        let formattedMessage = `[${timestamp}] ${level}: ${message}`;
        if (data) {
            try {
                formattedMessage += `
${JSON.stringify(data, null, 2)}`;
            } catch (error) {
                formattedMessage += `
[JSON.stringify Error/Circular]: ${error}`;
            }
        }
        return formattedMessage;
    }
    log(level, message, data) {
        if (!this.shouldLog(LogLevelIndex[level])) {
            return;
        }
        const logMessage = {
            level,
            message,
            timestamp: this.getTimestamp(),
            data
        };
        const formattedMessage = this.formatMessage(logMessage);
        switch(level){
            case "DEBUG":
                console.debug(formattedMessage);
                break;
            case "INFO":
                console.info(formattedMessage);
                break;
            case "WARN":
                console.warn(formattedMessage);
                break;
            case "ERROR":
            case "FATAL":
                console.error(formattedMessage);
                break;
            case "OFF":
                break;
            default:
                console.log(formattedMessage);
                break;
        }
    }
    /**
   * debug will be displayed when LogLevel level is set to DEBUG(5)
   */ debug(message, data) {
        this.log("DEBUG", message, data);
    }
    /**
   * info will be displayed when LogLevel level is set to DEBUG(5), INFO(4)
   */ info(message, data) {
        this.log("INFO", message, data);
    }
    /**
   * warn will be displayed when LogLevel level is set to DEBUG(5), INFO(4), WARN(3)
   */ warn(message, data) {
        this.log("WARN", message, data);
    }
    /**
   * error will be displayed when LogLevel level is set to DEBUG(5), INFO(4), WARN(3), ERROR(2)
   */ error(message, data) {
        this.log("ERROR", message, data);
    }
    /**
   * fatal will be displayed when LogLevel level is set to DEBUG(5), INFO(4), WARN(3), ERROR(2), FATAL(1)
   */ fatal(message, data) {
        this.log("FATAL", message, data);
    }
    /**
   * Set the logging level you would like system to display
   * * 5 DEBUG  - show all logs
   * * 4 INFO
   * * 3 WARN
   * * 2 ERROR
   * * 1 FATAL
   * * 0 OFF    - disable logs
   */ setLogLevel(level) {
        this.config.set("logLevel", level);
    }
    getLogLevel() {
        return this.config.get("logLevel", "INFO");
    }
    /**
   *
   * @returns logs levels displayed on the configured LogLevel
   */ getEnabledLogLevels() {
        return Object.keys(LogLevelIndex).filter((s)=>{
            return this.shouldLog(LogLevelIndex[s]) && s !== "OFF";
        });
    }
};
var logger = Logger.getInstance();
// src/utils/provider.ts
function wait(delay) {
    return new Promise((res)=>{
        setTimeout(res, delay);
    });
}
function createSierraContractClass(contract) {
    const result = {
        ...contract
    };
    delete result.sierra_program_debug_info;
    result.abi = formatSpaces(stringify2(contract.abi));
    result.sierra_program = formatSpaces(stringify2(contract.sierra_program));
    result.sierra_program = compressProgram(result.sierra_program);
    return result;
}
function parseContract(contract) {
    const parsedContract = isString(contract) ? parse2(contract) : contract;
    if (!isSierra(contract)) {
        return {
            ...parsedContract,
            ..."program" in parsedContract && {
                program: compressProgram(parsedContract.program)
            }
        };
    }
    return createSierraContractClass(parsedContract);
}
var getDefaultNodeUrl = (networkName, mute = false)=>{
    if (!mute) {
        logger.info("Using default public node url, please provide nodeUrl in provider options!");
    }
    const nodes = RPC_NODES[networkName ?? "SN_SEPOLIA" /* SN_SEPOLIA */ ];
    const randIdx = Math.floor(Math.random() * nodes.length);
    return nodes[randIdx];
};
var validBlockTags = Object.values(BlockTag);
var Block = class {
    /**
   * @param {BlockIdentifier} hash if not null, contains the block hash
   */ hash = null;
    /**
   * @param {BlockIdentifier} number if not null, contains the block number
   */ number = null;
    /**
   * @param {BlockIdentifier} tag if not null, contains "pending" or "latest"
   */ tag = null;
    setIdentifier(__identifier) {
        if (isString(__identifier)) {
            if (isDecimalString(__identifier)) {
                this.number = parseInt(__identifier, 10);
            } else if (isHex(__identifier)) {
                this.hash = __identifier;
            } else if (validBlockTags.includes(__identifier)) {
                this.tag = __identifier;
            } else {
                throw TypeError(`Block identifier unmanaged: ${__identifier}`);
            }
        } else if (isBigInt(__identifier)) {
            this.hash = toHex(__identifier);
        } else if (isNumber(__identifier)) {
            this.number = __identifier;
        } else {
            this.tag = BlockTag.PENDING;
        }
        if (isNumber(this.number) && this.number < 0) {
            throw TypeError(`Block number (${this.number}) can't be negative`);
        }
    }
    /**
   * Create a Block instance
   * @param {BlockIdentifier} _identifier  hex string and BigInt are detected as block hashes.
   * decimal string and number are detected as block numbers.
   * text string are detected as block tag.
   * null is considered as a 'pending' block tag.
   */ constructor(_identifier){
        this.setIdentifier(_identifier);
    }
    // TODO: fix any
    /**
   * @returns {any} the identifier as a string
   * @example
   * ```typescript
   * const result = new provider.Block(123456n).queryIdentifier;
   * // result = "blockHash=0x1e240"
   * ```
   */ get queryIdentifier() {
        if (this.number !== null) {
            return `blockNumber=${this.number}`;
        }
        if (this.hash !== null) {
            return `blockHash=${this.hash}`;
        }
        return `blockNumber=${this.tag}`;
    }
    // TODO: fix any
    /**
   * @returns {any} the identifier as an object
   * @example
   * ```typescript
   * const result = new provider.Block(56789).identifier;
   * // result = { block_number: 56789 }
   * ```
   */ get identifier() {
        if (this.number !== null) {
            return {
                block_number: this.number
            };
        }
        if (this.hash !== null) {
            return {
                block_hash: this.hash
            };
        }
        return this.tag;
    }
    /**
   * change the identifier of an existing Block instance
   * @example
   * ```typescript
   * const myBlock = new provider.Block("latest");
   * myBlock.identifier ="0x3456789abc";
   * const result = myBlock.identifier;
   * // result = { block_hash: '0x3456789abc' }
   * ```
   */ set identifier(_identifier) {
        this.setIdentifier(_identifier);
    }
    valueOf = ()=>this.number;
    toString = ()=>this.hash;
};
function isV3Tx(details) {
    const version = details.version ? toHex(details.version) : api_exports.ETransactionVersion.V3;
    return version === api_exports.ETransactionVersion.V3 || version === api_exports.ETransactionVersion.F3;
}
function isVersion(version, response) {
    const [majorS, minorS] = version.split(".");
    const [majorR, minorR] = response.split(".");
    return majorS === majorR && minorS === minorR;
}
function isPendingBlock(response) {
    return response.status === "PENDING";
}
function isPendingTransaction(response) {
    return !("block_hash" in response);
}
function isPendingStateUpdate(response) {
    return !("block_hash" in response);
}
// src/utils/transaction.ts
var transaction_exports = {};
__export(transaction_exports, {
    buildUDCCall: ()=>buildUDCCall,
    fromCallsToExecuteCalldata: ()=>fromCallsToExecuteCalldata,
    fromCallsToExecuteCalldataWithNonce: ()=>fromCallsToExecuteCalldataWithNonce,
    fromCallsToExecuteCalldata_cairo1: ()=>fromCallsToExecuteCalldata_cairo1,
    getExecuteCalldata: ()=>getExecuteCalldata,
    getVersionsByType: ()=>getVersionsByType,
    transformCallsToMulticallArrays: ()=>transformCallsToMulticallArrays,
    transformCallsToMulticallArrays_cairo1: ()=>transformCallsToMulticallArrays_cairo1
});
var transformCallsToMulticallArrays = (calls)=>{
    const callArray = [];
    const calldata = [];
    calls.forEach((call)=>{
        const data = CallData.compile(call.calldata || []);
        callArray.push({
            to: toBigInt(call.contractAddress).toString(10),
            selector: toBigInt(getSelectorFromName(call.entrypoint)).toString(10),
            data_offset: calldata.length.toString(),
            data_len: data.length.toString()
        });
        calldata.push(...data);
    });
    return {
        callArray,
        calldata: CallData.compile({
            calldata
        })
    };
};
var fromCallsToExecuteCalldata = (calls)=>{
    const { callArray, calldata } = transformCallsToMulticallArrays(calls);
    const compiledCalls = CallData.compile({
        callArray
    });
    return [
        ...compiledCalls,
        ...calldata
    ];
};
var fromCallsToExecuteCalldataWithNonce = (calls, nonce)=>{
    return [
        ...fromCallsToExecuteCalldata(calls),
        toBigInt(nonce).toString()
    ];
};
var transformCallsToMulticallArrays_cairo1 = (calls)=>{
    const callArray = calls.map((call)=>({
            to: toBigInt(call.contractAddress).toString(10),
            selector: toBigInt(getSelectorFromName(call.entrypoint)).toString(10),
            calldata: CallData.compile(call.calldata || [])
        }));
    return callArray;
};
var fromCallsToExecuteCalldata_cairo1 = (calls)=>{
    const orderCalls = calls.map((call)=>({
            contractAddress: call.contractAddress,
            entrypoint: call.entrypoint,
            calldata: Array.isArray(call.calldata) && "__compiled__" in call.calldata ? call.calldata : CallData.compile(call.calldata)
        }));
    return CallData.compile({
        orderCalls
    });
};
var getExecuteCalldata = (calls, cairoVersion = "0")=>{
    if (cairoVersion === "1") {
        return fromCallsToExecuteCalldata_cairo1(calls);
    }
    return fromCallsToExecuteCalldata(calls);
};
function buildUDCCall(payload, address) {
    const params = [].concat(payload).map((it)=>{
        const { classHash, salt, unique = true, constructorCalldata = [] } = it;
        const compiledConstructorCallData = CallData.compile(constructorCalldata);
        const deploySalt = salt ?? randomAddress();
        return {
            call: {
                contractAddress: UDC.ADDRESS,
                entrypoint: UDC.ENTRYPOINT,
                calldata: [
                    classHash,
                    deploySalt,
                    toCairoBool(unique),
                    compiledConstructorCallData.length,
                    ...compiledConstructorCallData
                ]
            },
            address: calculateContractAddressFromHash(unique ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.pedersen(address, deploySalt) : deploySalt, classHash, compiledConstructorCallData, unique ? UDC.ADDRESS : 0)
        };
    });
    return {
        calls: params.map((it)=>it.call),
        addresses: params.map((it)=>it.address)
    };
}
function getVersionsByType(versionType) {
    return versionType === "fee" ? {
        v1: api_exports.ETransactionVersion.F1,
        v2: api_exports.ETransactionVersion.F2,
        v3: api_exports.ETransactionVersion.F3
    } : {
        v1: api_exports.ETransactionVersion.V1,
        v2: api_exports.ETransactionVersion.V2,
        v3: api_exports.ETransactionVersion.V3
    };
}
// src/channel/rpc_0_6.ts
var defaultOptions = {
    headers: {
        "Content-Type": "application/json"
    },
    blockIdentifier: BlockTag.PENDING,
    retries: 200
};
var RpcChannel = class {
    nodeUrl;
    headers;
    requestId;
    blockIdentifier;
    retries;
    waitMode;
    // behave like web2 rpc and return when tx is processed
    chainId;
    specVersion;
    transactionRetryIntervalFallback;
    batchClient;
    baseFetch;
    constructor(optionsOrProvider){
        const { baseFetch, batch, blockIdentifier, chainId, headers, nodeUrl, retries, specVersion, transactionRetryIntervalFallback, waitMode } = optionsOrProvider || {};
        if (Object.values(NetworkName).includes(nodeUrl)) {
            this.nodeUrl = getDefaultNodeUrl(nodeUrl, optionsOrProvider?.default);
        } else if (nodeUrl) {
            this.nodeUrl = nodeUrl;
        } else {
            this.nodeUrl = getDefaultNodeUrl(void 0, optionsOrProvider?.default);
        }
        this.baseFetch = baseFetch ?? fetchPonyfill_default;
        this.blockIdentifier = blockIdentifier ?? defaultOptions.blockIdentifier;
        this.chainId = chainId;
        this.headers = {
            ...defaultOptions.headers,
            ...headers
        };
        this.retries = retries ?? defaultOptions.retries;
        this.specVersion = specVersion;
        this.transactionRetryIntervalFallback = transactionRetryIntervalFallback;
        this.waitMode = waitMode ?? false;
        this.requestId = 0;
        if (typeof batch === "number") {
            this.batchClient = new BatchClient({
                nodeUrl: this.nodeUrl,
                headers: this.headers,
                interval: batch,
                baseFetch: this.baseFetch
            });
        }
    }
    get transactionRetryIntervalDefault() {
        return this.transactionRetryIntervalFallback ?? 5e3;
    }
    setChainId(chainId) {
        this.chainId = chainId;
    }
    fetch(method, params, id = 0) {
        const rpcRequestBody = {
            id,
            jsonrpc: "2.0",
            method,
            ...params && {
                params
            }
        };
        return this.baseFetch(this.nodeUrl, {
            method: "POST",
            body: stringify2(rpcRequestBody),
            headers: this.headers
        });
    }
    errorHandler(method, params, rpcError, otherError) {
        if (rpcError) {
            throw new RpcError(rpcError, method, params);
        }
        if (otherError instanceof LibraryError) {
            throw otherError;
        }
        if (otherError) {
            throw Error(otherError.message);
        }
    }
    async fetchEndpoint(method, params) {
        try {
            if (this.batchClient) {
                const { error: error2, result: result2 } = await this.batchClient.fetch(method, params, this.requestId += 1);
                this.errorHandler(method, params, error2);
                return result2;
            }
            const rawResult = await this.fetch(method, params, this.requestId += 1);
            const { error, result } = await rawResult.json();
            this.errorHandler(method, params, error);
            return result;
        } catch (error) {
            this.errorHandler(method, params, error?.response?.data, error);
            throw error;
        }
    }
    async getChainId() {
        this.chainId ??= await this.fetchEndpoint("starknet_chainId");
        return this.chainId;
    }
    async getSpecVersion() {
        this.specVersion ??= await this.fetchEndpoint("starknet_specVersion");
        return this.specVersion;
    }
    getNonceForAddress(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getNonce", {
            contract_address,
            block_id
        });
    }
    /**
   * Get the most recent accepted block hash and number
   */ getBlockLatestAccepted() {
        return this.fetchEndpoint("starknet_blockHashAndNumber");
    }
    /**
   * Get the most recent accepted block number
   * redundant use getBlockLatestAccepted();
   * @returns Number of the latest block
   */ getBlockNumber() {
        return this.fetchEndpoint("starknet_blockNumber");
    }
    getBlockWithTxHashes(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithTxHashes", {
            block_id
        });
    }
    getBlockWithTxs(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithTxs", {
            block_id
        });
    }
    getBlockStateUpdate(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getStateUpdate", {
            block_id
        });
    }
    getBlockTransactionsTraces(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_traceBlockTransactions", {
            block_id
        });
    }
    getBlockTransactionCount(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockTransactionCount", {
            block_id
        });
    }
    getTransactionByHash(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_getTransactionByHash", {
            transaction_hash
        });
    }
    getTransactionByBlockIdAndIndex(blockIdentifier, index) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getTransactionByBlockIdAndIndex", {
            block_id,
            index
        });
    }
    getTransactionReceipt(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_getTransactionReceipt", {
            transaction_hash
        });
    }
    getTransactionTrace(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_traceTransaction", {
            transaction_hash
        });
    }
    /**
   * Get the status of a transaction
   */ getTransactionStatus(transactionHash) {
        const transaction_hash = toHex(transactionHash);
        return this.fetchEndpoint("starknet_getTransactionStatus", {
            transaction_hash
        });
    }
    /**
   * @param invocations AccountInvocations
   * @param simulateTransactionOptions blockIdentifier and flags to skip validation and fee charge<br/>
   * - blockIdentifier<br/>
   * - skipValidate (default false)<br/>
   * - skipFeeCharge (default true)<br/>
   */ simulateTransaction(invocations, simulateTransactionOptions = {}) {
        const { blockIdentifier = this.blockIdentifier, skipValidate = true, skipFeeCharge = true } = simulateTransactionOptions;
        const block_id = new Block(blockIdentifier).identifier;
        const simulationFlags = [];
        if (skipValidate) simulationFlags.push(rpcspec_0_6_exports.ESimulationFlag.SKIP_VALIDATE);
        if (skipFeeCharge) simulationFlags.push(rpcspec_0_6_exports.ESimulationFlag.SKIP_FEE_CHARGE);
        return this.fetchEndpoint("starknet_simulateTransactions", {
            block_id,
            transactions: invocations.map((it)=>this.buildTransaction(it)),
            simulation_flags: simulationFlags
        });
    }
    async waitForTransaction(txHash, options) {
        const transactionHash = toHex(txHash);
        let { retries } = this;
        let onchain = false;
        let isErrorState = false;
        const retryInterval = options?.retryInterval ?? this.transactionRetryIntervalDefault;
        const errorStates = options?.errorStates ?? [
            rpcspec_0_6_exports.ETransactionStatus.REJECTED
        ];
        const successStates = options?.successStates ?? [
            rpcspec_0_6_exports.ETransactionExecutionStatus.SUCCEEDED,
            rpcspec_0_6_exports.ETransactionStatus.ACCEPTED_ON_L2,
            rpcspec_0_6_exports.ETransactionStatus.ACCEPTED_ON_L1
        ];
        let txStatus;
        while(!onchain){
            await wait(retryInterval);
            try {
                txStatus = await this.getTransactionStatus(transactionHash);
                const executionStatus = txStatus.execution_status;
                const finalityStatus = txStatus.finality_status;
                if (!finalityStatus) {
                    const error = new Error("waiting for transaction status");
                    throw error;
                }
                if (errorStates.includes(executionStatus) || errorStates.includes(finalityStatus)) {
                    const message = `${executionStatus}: ${finalityStatus}`;
                    const error = new Error(message);
                    error.response = txStatus;
                    isErrorState = true;
                    throw error;
                } else if (successStates.includes(executionStatus) || successStates.includes(finalityStatus)) {
                    onchain = true;
                }
            } catch (error) {
                if (error instanceof Error && isErrorState) {
                    throw error;
                }
                if (retries <= 0) {
                    throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
                }
            }
            retries -= 1;
        }
        let txReceipt = null;
        while(txReceipt === null){
            try {
                txReceipt = await this.getTransactionReceipt(transactionHash);
            } catch (error) {
                if (retries <= 0) {
                    throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
                }
            }
            retries -= 1;
            await wait(retryInterval);
        }
        return txReceipt;
    }
    getStorageAt(contractAddress, key, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const parsedKey = toStorageKey(key);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getStorageAt", {
            contract_address,
            key: parsedKey,
            block_id
        });
    }
    getClassHashAt(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClassHashAt", {
            block_id,
            contract_address
        });
    }
    getClass(classHash, blockIdentifier = this.blockIdentifier) {
        const class_hash = toHex(classHash);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClass", {
            class_hash,
            block_id
        });
    }
    getClassAt(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClassAt", {
            block_id,
            contract_address
        });
    }
    async getEstimateFee(invocations, { blockIdentifier = this.blockIdentifier, skipValidate = true }) {
        const block_id = new Block(blockIdentifier).identifier;
        let flags = {};
        if (!isVersion("0.5", await this.getSpecVersion())) {
            flags = {
                simulation_flags: skipValidate ? [
                    rpcspec_0_6_exports.ESimulationFlag.SKIP_VALIDATE
                ] : []
            };
        }
        return this.fetchEndpoint("starknet_estimateFee", {
            request: invocations.map((it)=>this.buildTransaction(it, "fee")),
            block_id,
            ...flags
        });
    }
    async invoke(functionInvocation, details) {
        let promise;
        if (!isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addInvokeTransaction", {
                invoke_transaction: {
                    sender_address: functionInvocation.contractAddress,
                    calldata: CallData.toHex(functionInvocation.calldata),
                    type: rpcspec_0_6_exports.ETransactionType.INVOKE,
                    max_fee: toHex(details.maxFee || 0),
                    version: rpcspec_0_6_exports.ETransactionVersion.V1,
                    signature: signatureToHexArray(functionInvocation.signature),
                    nonce: toHex(details.nonce)
                }
            });
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: rpcspec_0_6_exports.ETransactionVersion.V1,
                type: rpcspec_0_6_exports.ETransactionType.INVOKE
            });
        } else {
            promise = this.fetchEndpoint("starknet_addInvokeTransaction", {
                invoke_transaction: {
                    type: rpcspec_0_6_exports.ETransactionType.INVOKE,
                    sender_address: functionInvocation.contractAddress,
                    calldata: CallData.toHex(functionInvocation.calldata),
                    version: rpcspec_0_6_exports.ETransactionVersion.V3,
                    signature: signatureToHexArray(functionInvocation.signature),
                    nonce: toHex(details.nonce),
                    resource_bounds: details.resourceBounds,
                    tip: toHex(details.tip),
                    paymaster_data: details.paymasterData.map((it)=>toHex(it)),
                    account_deployment_data: details.accountDeploymentData.map((it)=>toHex(it)),
                    nonce_data_availability_mode: details.nonceDataAvailabilityMode,
                    fee_data_availability_mode: details.feeDataAvailabilityMode
                }
            });
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
    }
    async declare({ contract, signature, senderAddress, compiledClassHash }, details) {
        let promise;
        if (!isSierra(contract) && !isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
                declare_transaction: {
                    type: rpcspec_0_6_exports.ETransactionType.DECLARE,
                    contract_class: {
                        program: contract.program,
                        entry_points_by_type: contract.entry_points_by_type,
                        abi: contract.abi
                    },
                    version: rpcspec_0_6_exports.ETransactionVersion.V1,
                    max_fee: toHex(details.maxFee || 0),
                    signature: signatureToHexArray(signature),
                    sender_address: senderAddress,
                    nonce: toHex(details.nonce)
                }
            });
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: rpcspec_0_6_exports.ETransactionVersion.V1,
                type: rpcspec_0_6_exports.ETransactionType.DECLARE
            });
        } else if (isSierra(contract) && !isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
                declare_transaction: {
                    type: rpcspec_0_6_exports.ETransactionType.DECLARE,
                    contract_class: {
                        sierra_program: decompressProgram(contract.sierra_program),
                        contract_class_version: contract.contract_class_version,
                        entry_points_by_type: contract.entry_points_by_type,
                        abi: contract.abi
                    },
                    compiled_class_hash: compiledClassHash || "",
                    version: rpcspec_0_6_exports.ETransactionVersion.V2,
                    max_fee: toHex(details.maxFee || 0),
                    signature: signatureToHexArray(signature),
                    sender_address: senderAddress,
                    nonce: toHex(details.nonce)
                }
            });
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: rpcspec_0_6_exports.ETransactionVersion.V2,
                type: rpcspec_0_6_exports.ETransactionType.DECLARE
            });
        } else if (isSierra(contract) && isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
                declare_transaction: {
                    type: rpcspec_0_6_exports.ETransactionType.DECLARE,
                    sender_address: senderAddress,
                    compiled_class_hash: compiledClassHash || "",
                    version: rpcspec_0_6_exports.ETransactionVersion.V3,
                    signature: signatureToHexArray(signature),
                    nonce: toHex(details.nonce),
                    contract_class: {
                        sierra_program: decompressProgram(contract.sierra_program),
                        contract_class_version: contract.contract_class_version,
                        entry_points_by_type: contract.entry_points_by_type,
                        abi: contract.abi
                    },
                    resource_bounds: details.resourceBounds,
                    tip: toHex(details.tip),
                    paymaster_data: details.paymasterData.map((it)=>toHex(it)),
                    account_deployment_data: details.accountDeploymentData.map((it)=>toHex(it)),
                    nonce_data_availability_mode: details.nonceDataAvailabilityMode,
                    fee_data_availability_mode: details.feeDataAvailabilityMode
                }
            });
        } else {
            throw Error("declare unspotted parameters");
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
    }
    async deployAccount({ classHash, constructorCalldata, addressSalt, signature }, details) {
        let promise;
        if (!isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
                deploy_account_transaction: {
                    constructor_calldata: CallData.toHex(constructorCalldata || []),
                    class_hash: toHex(classHash),
                    contract_address_salt: toHex(addressSalt || 0),
                    type: rpcspec_0_6_exports.ETransactionType.DEPLOY_ACCOUNT,
                    max_fee: toHex(details.maxFee || 0),
                    version: rpcspec_0_6_exports.ETransactionVersion.V1,
                    signature: signatureToHexArray(signature),
                    nonce: toHex(details.nonce)
                }
            });
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: rpcspec_0_6_exports.ETransactionVersion.V1,
                type: rpcspec_0_6_exports.ETransactionType.DEPLOY_ACCOUNT
            });
        } else {
            promise = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
                deploy_account_transaction: {
                    type: rpcspec_0_6_exports.ETransactionType.DEPLOY_ACCOUNT,
                    version: rpcspec_0_6_exports.ETransactionVersion.V3,
                    signature: signatureToHexArray(signature),
                    nonce: toHex(details.nonce),
                    contract_address_salt: toHex(addressSalt || 0),
                    constructor_calldata: CallData.toHex(constructorCalldata || []),
                    class_hash: toHex(classHash),
                    resource_bounds: details.resourceBounds,
                    tip: toHex(details.tip),
                    paymaster_data: details.paymasterData.map((it)=>toHex(it)),
                    nonce_data_availability_mode: details.nonceDataAvailabilityMode,
                    fee_data_availability_mode: details.feeDataAvailabilityMode
                }
            });
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
    }
    callContract(call, blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_call", {
            request: {
                contract_address: call.contractAddress,
                entry_point_selector: getSelectorFromName(call.entrypoint),
                calldata: CallData.toHex(call.calldata)
            },
            block_id
        });
    }
    /**
   * NEW: Estimate the fee for a message from L1
   * @param message Message From L1
   */ estimateMessageFee(message, blockIdentifier = this.blockIdentifier) {
        const { from_address, to_address, entry_point_selector, payload } = message;
        const formattedMessage = {
            from_address: validateAndParseEthAddress(from_address),
            to_address: toHex(to_address),
            entry_point_selector: getSelector(entry_point_selector),
            payload: getHexStringArray(payload)
        };
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_estimateMessageFee", {
            message: formattedMessage,
            block_id
        });
    }
    /**
   * Returns an object about the sync status, or false if the node is not synching
   * @returns Object with the stats data
   */ getSyncingStats() {
        return this.fetchEndpoint("starknet_syncing");
    }
    /**
   * Returns all events matching the given filter
   * @returns events and the pagination of the events
   */ getEvents(eventFilter) {
        return this.fetchEndpoint("starknet_getEvents", {
            filter: eventFilter
        });
    }
    buildTransaction(invocation, versionType) {
        const defaultVersions = getVersionsByType(versionType);
        let details;
        if (!isV3Tx(invocation)) {
            details = {
                signature: signatureToHexArray(invocation.signature),
                nonce: toHex(invocation.nonce),
                max_fee: toHex(invocation.maxFee || 0)
            };
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: invocation.version,
                type: invocation.type
            });
        } else {
            details = {
                signature: signatureToHexArray(invocation.signature),
                nonce: toHex(invocation.nonce),
                resource_bounds: invocation.resourceBounds,
                tip: toHex(invocation.tip),
                paymaster_data: invocation.paymasterData.map((it)=>toHex(it)),
                nonce_data_availability_mode: invocation.nonceDataAvailabilityMode,
                fee_data_availability_mode: invocation.feeDataAvailabilityMode,
                account_deployment_data: invocation.accountDeploymentData.map((it)=>toHex(it))
            };
        }
        if (invocation.type === TransactionType.INVOKE) {
            return {
                // v0 v1 v3
                type: rpcspec_0_6_exports.ETransactionType.INVOKE,
                sender_address: invocation.contractAddress,
                calldata: CallData.toHex(invocation.calldata),
                version: toHex(invocation.version || defaultVersions.v3),
                ...details
            };
        }
        if (invocation.type === TransactionType.DECLARE) {
            if (!isSierra(invocation.contract)) {
                return {
                    type: invocation.type,
                    contract_class: invocation.contract,
                    sender_address: invocation.senderAddress,
                    version: toHex(invocation.version || defaultVersions.v1),
                    ...details
                };
            }
            return {
                // Cairo 1 - v2 v3
                type: invocation.type,
                contract_class: {
                    ...invocation.contract,
                    sierra_program: decompressProgram(invocation.contract.sierra_program)
                },
                compiled_class_hash: invocation.compiledClassHash || "",
                sender_address: invocation.senderAddress,
                version: toHex(invocation.version || defaultVersions.v3),
                ...details
            };
        }
        if (invocation.type === TransactionType.DEPLOY_ACCOUNT) {
            const { account_deployment_data, ...restDetails } = details;
            return {
                type: invocation.type,
                constructor_calldata: CallData.toHex(invocation.constructorCalldata || []),
                class_hash: toHex(invocation.classHash),
                contract_address_salt: toHex(invocation.addressSalt || 0),
                version: toHex(invocation.version || defaultVersions.v3),
                ...restDetails
            };
        }
        throw Error("RPC buildTransaction received unknown TransactionType");
    }
};
// src/channel/rpc_0_7.ts
var rpc_0_7_exports = {};
__export(rpc_0_7_exports, {
    RpcChannel: ()=>RpcChannel2
});
var defaultOptions2 = {
    headers: {
        "Content-Type": "application/json"
    },
    blockIdentifier: BlockTag.PENDING,
    retries: 200
};
var RpcChannel2 = class {
    nodeUrl;
    headers;
    requestId;
    blockIdentifier;
    retries;
    waitMode;
    // behave like web2 rpc and return when tx is processed
    chainId;
    specVersion;
    transactionRetryIntervalFallback;
    batchClient;
    baseFetch;
    constructor(optionsOrProvider){
        const { baseFetch, batch, blockIdentifier, chainId, headers, nodeUrl, retries, specVersion, transactionRetryIntervalFallback, waitMode } = optionsOrProvider || {};
        if (Object.values(NetworkName).includes(nodeUrl)) {
            this.nodeUrl = getDefaultNodeUrl(nodeUrl, optionsOrProvider?.default);
        } else if (nodeUrl) {
            this.nodeUrl = nodeUrl;
        } else {
            this.nodeUrl = getDefaultNodeUrl(void 0, optionsOrProvider?.default);
        }
        this.baseFetch = baseFetch ?? fetchPonyfill_default;
        this.blockIdentifier = blockIdentifier ?? defaultOptions2.blockIdentifier;
        this.chainId = chainId;
        this.headers = {
            ...defaultOptions2.headers,
            ...headers
        };
        this.retries = retries ?? defaultOptions2.retries;
        this.specVersion = specVersion;
        this.transactionRetryIntervalFallback = transactionRetryIntervalFallback;
        this.waitMode = waitMode ?? false;
        this.requestId = 0;
        if (typeof batch === "number") {
            this.batchClient = new BatchClient({
                nodeUrl: this.nodeUrl,
                headers: this.headers,
                interval: batch,
                baseFetch: this.baseFetch
            });
        }
    }
    get transactionRetryIntervalDefault() {
        return this.transactionRetryIntervalFallback ?? 5e3;
    }
    setChainId(chainId) {
        this.chainId = chainId;
    }
    fetch(method, params, id = 0) {
        const rpcRequestBody = {
            id,
            jsonrpc: "2.0",
            method,
            ...params && {
                params
            }
        };
        return this.baseFetch(this.nodeUrl, {
            method: "POST",
            body: stringify2(rpcRequestBody),
            headers: this.headers
        });
    }
    errorHandler(method, params, rpcError, otherError) {
        if (rpcError) {
            throw new RpcError(rpcError, method, params);
        }
        if (otherError instanceof LibraryError) {
            throw otherError;
        }
        if (otherError) {
            throw Error(otherError.message);
        }
    }
    async fetchEndpoint(method, params) {
        try {
            if (this.batchClient) {
                const { error: error2, result: result2 } = await this.batchClient.fetch(method, params, this.requestId += 1);
                this.errorHandler(method, params, error2);
                return result2;
            }
            const rawResult = await this.fetch(method, params, this.requestId += 1);
            const { error, result } = await rawResult.json();
            this.errorHandler(method, params, error);
            return result;
        } catch (error) {
            this.errorHandler(method, params, error?.response?.data, error);
            throw error;
        }
    }
    async getChainId() {
        this.chainId ??= await this.fetchEndpoint("starknet_chainId");
        return this.chainId;
    }
    async getSpecVersion() {
        this.specVersion ??= await this.fetchEndpoint("starknet_specVersion");
        return this.specVersion;
    }
    getNonceForAddress(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getNonce", {
            contract_address,
            block_id
        });
    }
    /**
   * Get the most recent accepted block hash and number
   */ getBlockLatestAccepted() {
        return this.fetchEndpoint("starknet_blockHashAndNumber");
    }
    /**
   * Get the most recent accepted block number
   * redundant use getBlockLatestAccepted();
   * @returns Number of the latest block
   */ getBlockNumber() {
        return this.fetchEndpoint("starknet_blockNumber");
    }
    getBlockWithTxHashes(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithTxHashes", {
            block_id
        });
    }
    getBlockWithTxs(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithTxs", {
            block_id
        });
    }
    getBlockWithReceipts(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockWithReceipts", {
            block_id
        });
    }
    getBlockStateUpdate(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getStateUpdate", {
            block_id
        });
    }
    getBlockTransactionsTraces(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_traceBlockTransactions", {
            block_id
        });
    }
    getBlockTransactionCount(blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getBlockTransactionCount", {
            block_id
        });
    }
    getTransactionByHash(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_getTransactionByHash", {
            transaction_hash
        });
    }
    getTransactionByBlockIdAndIndex(blockIdentifier, index) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getTransactionByBlockIdAndIndex", {
            block_id,
            index
        });
    }
    getTransactionReceipt(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_getTransactionReceipt", {
            transaction_hash
        });
    }
    getTransactionTrace(txHash) {
        const transaction_hash = toHex(txHash);
        return this.fetchEndpoint("starknet_traceTransaction", {
            transaction_hash
        });
    }
    /**
   * Get the status of a transaction
   */ getTransactionStatus(transactionHash) {
        const transaction_hash = toHex(transactionHash);
        return this.fetchEndpoint("starknet_getTransactionStatus", {
            transaction_hash
        });
    }
    /**
   * @param invocations AccountInvocations
   * @param simulateTransactionOptions blockIdentifier and flags to skip validation and fee charge<br/>
   * - blockIdentifier<br/>
   * - skipValidate (default false)<br/>
   * - skipFeeCharge (default true)<br/>
   */ simulateTransaction(invocations, simulateTransactionOptions = {}) {
        const { blockIdentifier = this.blockIdentifier, skipValidate = true, skipFeeCharge = true } = simulateTransactionOptions;
        const block_id = new Block(blockIdentifier).identifier;
        const simulationFlags = [];
        if (skipValidate) simulationFlags.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ESimulationFlag.SKIP_VALIDATE);
        if (skipFeeCharge) simulationFlags.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ESimulationFlag.SKIP_FEE_CHARGE);
        return this.fetchEndpoint("starknet_simulateTransactions", {
            block_id,
            transactions: invocations.map((it)=>this.buildTransaction(it)),
            simulation_flags: simulationFlags
        });
    }
    async waitForTransaction(txHash, options) {
        const transactionHash = toHex(txHash);
        let { retries } = this;
        let onchain = false;
        let isErrorState = false;
        const retryInterval = options?.retryInterval ?? this.transactionRetryIntervalDefault;
        const errorStates = options?.errorStates ?? [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionStatus.REJECTED
        ];
        const successStates = options?.successStates ?? [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionExecutionStatus.SUCCEEDED,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionStatus.ACCEPTED_ON_L2,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionStatus.ACCEPTED_ON_L1
        ];
        let txStatus;
        while(!onchain){
            await wait(retryInterval);
            try {
                txStatus = await this.getTransactionStatus(transactionHash);
                const executionStatus = txStatus.execution_status;
                const finalityStatus = txStatus.finality_status;
                if (!finalityStatus) {
                    const error = new Error("waiting for transaction status");
                    throw error;
                }
                if (errorStates.includes(executionStatus) || errorStates.includes(finalityStatus)) {
                    const message = `${executionStatus}: ${finalityStatus}`;
                    const error = new Error(message);
                    error.response = txStatus;
                    isErrorState = true;
                    throw error;
                } else if (successStates.includes(executionStatus) || successStates.includes(finalityStatus)) {
                    onchain = true;
                }
            } catch (error) {
                if (error instanceof Error && isErrorState) {
                    throw error;
                }
                if (retries <= 0) {
                    throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
                }
            }
            retries -= 1;
        }
        let txReceipt = null;
        while(txReceipt === null){
            try {
                txReceipt = await this.getTransactionReceipt(transactionHash);
            } catch (error) {
                if (retries <= 0) {
                    throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
                }
            }
            retries -= 1;
            await wait(retryInterval);
        }
        return txReceipt;
    }
    getStorageAt(contractAddress, key, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const parsedKey = toStorageKey(key);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getStorageAt", {
            contract_address,
            key: parsedKey,
            block_id
        });
    }
    getClassHashAt(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClassHashAt", {
            block_id,
            contract_address
        });
    }
    getClass(classHash, blockIdentifier = this.blockIdentifier) {
        const class_hash = toHex(classHash);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClass", {
            class_hash,
            block_id
        });
    }
    getClassAt(contractAddress, blockIdentifier = this.blockIdentifier) {
        const contract_address = toHex(contractAddress);
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_getClassAt", {
            block_id,
            contract_address
        });
    }
    async getEstimateFee(invocations, { blockIdentifier = this.blockIdentifier, skipValidate = true }) {
        const block_id = new Block(blockIdentifier).identifier;
        let flags = {};
        if (!isVersion("0.5", await this.getSpecVersion())) {
            flags = {
                simulation_flags: skipValidate ? [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ESimulationFlag.SKIP_VALIDATE
                ] : []
            };
        }
        return this.fetchEndpoint("starknet_estimateFee", {
            request: invocations.map((it)=>this.buildTransaction(it, "fee")),
            block_id,
            ...flags
        });
    }
    async invoke(functionInvocation, details) {
        let promise;
        if (!isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addInvokeTransaction", {
                invoke_transaction: {
                    sender_address: functionInvocation.contractAddress,
                    calldata: CallData.toHex(functionInvocation.calldata),
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.INVOKE,
                    max_fee: toHex(details.maxFee || 0),
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V1,
                    signature: signatureToHexArray(functionInvocation.signature),
                    nonce: toHex(details.nonce)
                }
            });
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V1,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.INVOKE
            });
        } else {
            promise = this.fetchEndpoint("starknet_addInvokeTransaction", {
                invoke_transaction: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.INVOKE,
                    sender_address: functionInvocation.contractAddress,
                    calldata: CallData.toHex(functionInvocation.calldata),
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V3,
                    signature: signatureToHexArray(functionInvocation.signature),
                    nonce: toHex(details.nonce),
                    resource_bounds: details.resourceBounds,
                    tip: toHex(details.tip),
                    paymaster_data: details.paymasterData.map((it)=>toHex(it)),
                    account_deployment_data: details.accountDeploymentData.map((it)=>toHex(it)),
                    nonce_data_availability_mode: details.nonceDataAvailabilityMode,
                    fee_data_availability_mode: details.feeDataAvailabilityMode
                }
            });
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
    }
    async declare({ contract, signature, senderAddress, compiledClassHash }, details) {
        let promise;
        if (!isSierra(contract) && !isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
                declare_transaction: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.DECLARE,
                    contract_class: {
                        program: contract.program,
                        entry_points_by_type: contract.entry_points_by_type,
                        abi: contract.abi
                    },
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V1,
                    max_fee: toHex(details.maxFee || 0),
                    signature: signatureToHexArray(signature),
                    sender_address: senderAddress,
                    nonce: toHex(details.nonce)
                }
            });
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V1,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.DECLARE
            });
        } else if (isSierra(contract) && !isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
                declare_transaction: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.DECLARE,
                    contract_class: {
                        sierra_program: decompressProgram(contract.sierra_program),
                        contract_class_version: contract.contract_class_version,
                        entry_points_by_type: contract.entry_points_by_type,
                        abi: contract.abi
                    },
                    compiled_class_hash: compiledClassHash || "",
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V2,
                    max_fee: toHex(details.maxFee || 0),
                    signature: signatureToHexArray(signature),
                    sender_address: senderAddress,
                    nonce: toHex(details.nonce)
                }
            });
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V2,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.DECLARE
            });
        } else if (isSierra(contract) && isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addDeclareTransaction", {
                declare_transaction: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.DECLARE,
                    sender_address: senderAddress,
                    compiled_class_hash: compiledClassHash || "",
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V3,
                    signature: signatureToHexArray(signature),
                    nonce: toHex(details.nonce),
                    contract_class: {
                        sierra_program: decompressProgram(contract.sierra_program),
                        contract_class_version: contract.contract_class_version,
                        entry_points_by_type: contract.entry_points_by_type,
                        abi: contract.abi
                    },
                    resource_bounds: details.resourceBounds,
                    tip: toHex(details.tip),
                    paymaster_data: details.paymasterData.map((it)=>toHex(it)),
                    account_deployment_data: details.accountDeploymentData.map((it)=>toHex(it)),
                    nonce_data_availability_mode: details.nonceDataAvailabilityMode,
                    fee_data_availability_mode: details.feeDataAvailabilityMode
                }
            });
        } else {
            throw Error("declare unspotted parameters");
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
    }
    async deployAccount({ classHash, constructorCalldata, addressSalt, signature }, details) {
        let promise;
        if (!isV3Tx(details)) {
            promise = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
                deploy_account_transaction: {
                    constructor_calldata: CallData.toHex(constructorCalldata || []),
                    class_hash: toHex(classHash),
                    contract_address_salt: toHex(addressSalt || 0),
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.DEPLOY_ACCOUNT,
                    max_fee: toHex(details.maxFee || 0),
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V1,
                    signature: signatureToHexArray(signature),
                    nonce: toHex(details.nonce)
                }
            });
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V1,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.DEPLOY_ACCOUNT
            });
        } else {
            promise = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
                deploy_account_transaction: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.DEPLOY_ACCOUNT,
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionVersion.V3,
                    signature: signatureToHexArray(signature),
                    nonce: toHex(details.nonce),
                    contract_address_salt: toHex(addressSalt || 0),
                    constructor_calldata: CallData.toHex(constructorCalldata || []),
                    class_hash: toHex(classHash),
                    resource_bounds: details.resourceBounds,
                    tip: toHex(details.tip),
                    paymaster_data: details.paymasterData.map((it)=>toHex(it)),
                    nonce_data_availability_mode: details.nonceDataAvailabilityMode,
                    fee_data_availability_mode: details.feeDataAvailabilityMode
                }
            });
        }
        return this.waitMode ? this.waitForTransaction((await promise).transaction_hash) : promise;
    }
    callContract(call, blockIdentifier = this.blockIdentifier) {
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_call", {
            request: {
                contract_address: call.contractAddress,
                entry_point_selector: getSelectorFromName(call.entrypoint),
                calldata: CallData.toHex(call.calldata)
            },
            block_id
        });
    }
    /**
   * NEW: Estimate the fee for a message from L1
   * @param message Message From L1
   */ estimateMessageFee(message, blockIdentifier = this.blockIdentifier) {
        const { from_address, to_address, entry_point_selector, payload } = message;
        const formattedMessage = {
            from_address: validateAndParseEthAddress(from_address),
            to_address: toHex(to_address),
            entry_point_selector: getSelector(entry_point_selector),
            payload: getHexStringArray(payload)
        };
        const block_id = new Block(blockIdentifier).identifier;
        return this.fetchEndpoint("starknet_estimateMessageFee", {
            message: formattedMessage,
            block_id
        });
    }
    /**
   * Returns an object about the sync status, or false if the node is not synching
   * @returns Object with the stats data
   */ getSyncingStats() {
        return this.fetchEndpoint("starknet_syncing");
    }
    /**
   * Returns all events matching the given filter
   * @returns events and the pagination of the events
   */ getEvents(eventFilter) {
        return this.fetchEndpoint("starknet_getEvents", {
            filter: eventFilter
        });
    }
    buildTransaction(invocation, versionType) {
        const defaultVersions = getVersionsByType(versionType);
        let details;
        if (!isV3Tx(invocation)) {
            details = {
                signature: signatureToHexArray(invocation.signature),
                nonce: toHex(invocation.nonce),
                max_fee: toHex(invocation.maxFee || 0)
            };
            logger.warn(SYSTEM_MESSAGES.legacyTxWarningMessage, {
                version: invocation.version,
                type: invocation.type
            });
        } else {
            details = {
                signature: signatureToHexArray(invocation.signature),
                nonce: toHex(invocation.nonce),
                resource_bounds: invocation.resourceBounds,
                tip: toHex(invocation.tip),
                paymaster_data: invocation.paymasterData.map((it)=>toHex(it)),
                nonce_data_availability_mode: invocation.nonceDataAvailabilityMode,
                fee_data_availability_mode: invocation.feeDataAvailabilityMode,
                account_deployment_data: invocation.accountDeploymentData.map((it)=>toHex(it))
            };
        }
        if (invocation.type === TransactionType.INVOKE) {
            return {
                // v0 v1 v3
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ETransactionType.INVOKE,
                sender_address: invocation.contractAddress,
                calldata: CallData.toHex(invocation.calldata),
                version: toHex(invocation.version || defaultVersions.v3),
                ...details
            };
        }
        if (invocation.type === TransactionType.DECLARE) {
            if (!isSierra(invocation.contract)) {
                return {
                    type: invocation.type,
                    contract_class: invocation.contract,
                    sender_address: invocation.senderAddress,
                    version: toHex(invocation.version || defaultVersions.v1),
                    ...details
                };
            }
            return {
                // Cairo 1 - v2 v3
                type: invocation.type,
                contract_class: {
                    ...invocation.contract,
                    sierra_program: decompressProgram(invocation.contract.sierra_program)
                },
                compiled_class_hash: invocation.compiledClassHash || "",
                sender_address: invocation.senderAddress,
                version: toHex(invocation.version || defaultVersions.v3),
                ...details
            };
        }
        if (invocation.type === TransactionType.DEPLOY_ACCOUNT) {
            const { account_deployment_data, ...restDetails } = details;
            return {
                type: invocation.type,
                constructor_calldata: CallData.toHex(invocation.constructorCalldata || []),
                class_hash: toHex(invocation.classHash),
                contract_address_salt: toHex(invocation.addressSalt || 0),
                version: toHex(invocation.version || defaultVersions.v3),
                ...restDetails
            };
        }
        throw Error("RPC buildTransaction received unknown TransactionType");
    }
};
// src/utils/responseParser/rpc.ts
var RPCResponseParser = class {
    margin;
    constructor(margin){
        this.margin = margin;
    }
    estimatedFeeToMaxFee(estimatedFee) {
        return estimatedFeeToMaxFee(estimatedFee, this.margin?.maxFee);
    }
    estimateFeeToBounds(estimate) {
        return estimateFeeToBounds(estimate, this.margin?.l1BoundMaxAmount, this.margin?.l1BoundMaxPricePerUnit);
    }
    parseGetBlockResponse(res) {
        return {
            status: "PENDING",
            ...res
        };
    }
    parseTransactionReceipt(res) {
        if ("actual_fee" in res && isString(res.actual_fee)) {
            return {
                ...res,
                actual_fee: {
                    amount: res.actual_fee,
                    unit: "FRI"
                }
            };
        }
        return res;
    }
    parseFeeEstimateResponse(res) {
        const val = res[0];
        return {
            overall_fee: toBigInt(val.overall_fee),
            gas_consumed: toBigInt(val.gas_consumed),
            gas_price: toBigInt(val.gas_price),
            unit: val.unit,
            suggestedMaxFee: this.estimatedFeeToMaxFee(val.overall_fee),
            resourceBounds: this.estimateFeeToBounds(val),
            data_gas_consumed: val.data_gas_consumed ? toBigInt(val.data_gas_consumed) : 0n,
            data_gas_price: val.data_gas_price ? toBigInt(val.data_gas_price) : 0n
        };
    }
    parseFeeEstimateBulkResponse(res) {
        return res.map((val)=>({
                overall_fee: toBigInt(val.overall_fee),
                gas_consumed: toBigInt(val.gas_consumed),
                gas_price: toBigInt(val.gas_price),
                unit: val.unit,
                suggestedMaxFee: this.estimatedFeeToMaxFee(val.overall_fee),
                resourceBounds: this.estimateFeeToBounds(val),
                data_gas_consumed: val.data_gas_consumed ? toBigInt(val.data_gas_consumed) : 0n,
                data_gas_price: val.data_gas_price ? toBigInt(val.data_gas_price) : 0n
            }));
    }
    parseSimulateTransactionResponse(res) {
        return res.map((it)=>{
            return {
                ...it,
                suggestedMaxFee: this.estimatedFeeToMaxFee(it.fee_estimation.overall_fee),
                resourceBounds: this.estimateFeeToBounds(it.fee_estimation)
            };
        });
    }
    parseContractClassResponse(res) {
        return {
            ...res,
            abi: isString(res.abi) ? JSON.parse(res.abi) : res.abi
        };
    }
    parseL1GasPriceResponse(res) {
        return res.l1_gas_price.price_in_wei;
    }
};
// src/utils/transactionReceipt.ts
var ReceiptTx = class _ReceiptTx {
    statusReceipt;
    value;
    constructor(receipt){
        [this.statusReceipt, this.value] = _ReceiptTx.isSuccess(receipt) ? [
            "success",
            receipt
        ] : _ReceiptTx.isReverted(receipt) ? [
            "reverted",
            receipt
        ] : _ReceiptTx.isRejected(receipt) ? [
            "rejected",
            receipt
        ] : [
            "error",
            new Error("Unknown response type")
        ];
        for (const [key] of Object.entries(this)){
            Object.defineProperty(this, key, {
                enumerable: false
            });
        }
        for (const [key, value] of Object.entries(receipt)){
            Object.defineProperty(this, key, {
                enumerable: true,
                writable: false,
                value
            });
        }
    }
    match(callbacks) {
        if (this.statusReceipt in callbacks) {
            return callbacks[this.statusReceipt](this.value);
        }
        return callbacks._();
    }
    isSuccess() {
        return this.statusReceipt === "success";
    }
    isReverted() {
        return this.statusReceipt === "reverted";
    }
    isRejected() {
        return this.statusReceipt === "rejected";
    }
    isError() {
        return this.statusReceipt === "error";
    }
    static isSuccess(transactionReceipt) {
        return transactionReceipt.execution_status === TransactionExecutionStatus.SUCCEEDED;
    }
    static isReverted(transactionReceipt) {
        return transactionReceipt.execution_status === TransactionExecutionStatus.REVERTED;
    }
    static isRejected(transactionReceipt) {
        return transactionReceipt.status === TransactionExecutionStatus.REJECTED;
    }
};
// src/utils/typedData.ts
var typedData_exports = {};
__export(typedData_exports, {
    TypedDataRevision: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"],
    encodeData: ()=>encodeData,
    encodeType: ()=>encodeType,
    encodeValue: ()=>encodeValue,
    getDependencies: ()=>getDependencies,
    getMessageHash: ()=>getMessageHash,
    getStructHash: ()=>getStructHash,
    getTypeHash: ()=>getTypeHash,
    isMerkleTreeType: ()=>isMerkleTreeType,
    prepareSelector: ()=>prepareSelector,
    validateTypedData: ()=>validateTypedData,
    verifyMessage: ()=>verifyMessage
});
// src/utils/merkle.ts
var merkle_exports = {};
__export(merkle_exports, {
    MerkleTree: ()=>MerkleTree,
    proofMerklePath: ()=>proofMerklePath
});
var MerkleTree = class _MerkleTree {
    leaves;
    branches = [];
    root;
    hashMethod;
    /**
   * Create a Merkle tree
   *
   * @param leafHashes hex-string array
   * @param hashMethod hash method to use, default: Pedersen
   * @returns created Merkle tree
   * @example
   * ```typescript
   * const leaves = ['0x1', '0x2', '0x3', '0x4', '0x5', '0x6', '0x7'];
   * const tree = new MerkleTree(leaves);
   * // tree = {
   * //   branches: [['0x5bb9440e2...', '0x262697b88...', ...], ['0x38118a340...', ...], ...],
   * //   leaves: ['0x1', '0x2', '0x3', '0x4', '0x5', '0x6', '0x7'],
   * //   root: '0x7f748c75e5bdb7ae28013f076b8ab650c4e01d3530c6e5ab665f9f1accbe7d4',
   * //   hashMethod: [Function computePedersenHash],
   * // }
   * ```
   */ constructor(leafHashes, hashMethod = computePedersenHash){
        this.hashMethod = hashMethod;
        this.leaves = leafHashes;
        this.root = this.build(leafHashes);
    }
    /** @ignore */ build(leaves) {
        if (leaves.length === 1) {
            return leaves[0];
        }
        if (leaves.length !== this.leaves.length) {
            this.branches.push(leaves);
        }
        const newLeaves = [];
        for(let i = 0; i < leaves.length; i += 2){
            if (i + 1 === leaves.length) {
                newLeaves.push(_MerkleTree.hash(leaves[i], "0x0", this.hashMethod));
            } else {
                newLeaves.push(_MerkleTree.hash(leaves[i], leaves[i + 1], this.hashMethod));
            }
        }
        return this.build(newLeaves);
    }
    /**
   * Calculate hash from ordered a and b, Pedersen hash default
   *
   * @param a first value
   * @param b second value
   * @param hashMethod hash method to use, default: Pedersen
   * @returns result of the hash function
   * @example
   * ```typescript
   * const result1 = MerkleTree.hash('0xabc', '0xdef');
   * // result1 = '0x484f029da7914ada038b1adf67fc83632364a3ebc2cd9349b41ab61626d9e82'
   *
   * const customHashMethod = (a, b) => `custom_${a}_${b}`;
   * const result2 = MerkleTree.hash('0xabc', '0xdef', customHashMethod);
   * // result2 = 'custom_2748_3567'
   * ```
   */ static hash(a, b, hashMethod = computePedersenHash) {
        const [aSorted, bSorted] = [
            BigInt(a),
            BigInt(b)
        ].sort((x, y)=>x >= y ? 1 : -1);
        return hashMethod(aSorted, bSorted);
    }
    /**
   * Calculates the merkle membership proof path
   *
   * @param leaf hex-string
   * @param branch hex-string array
   * @param hashPath hex-string array
   * @returns collection of merkle proof hex-string hashes
   * @example
   * ```typescript
   * const leaves = ['0x1', '0x2', '0x3', '0x4', '0x5', '0x6', '0x7'];
   * const tree = new MerkleTree(leaves);
   * const result = tree.getProof('0x3');
   * // result = [
   * //   '0x4',
   * //   '0x5bb9440e27889a364bcb678b1f679ecd1347acdedcbf36e83494f857cc58026',
   * //   '0x8c0e46dd2df9aaf3a8ebfbc25408a582ad7fa7171f0698ddbbc5130b4b4e60',
   * // ]
   * ```
   */ getProof(leaf, branch = this.leaves, hashPath = []) {
        const index = branch.indexOf(leaf);
        if (index === -1) {
            throw new Error("leaf not found");
        }
        if (branch.length === 1) {
            return hashPath;
        }
        const isLeft = index % 2 === 0;
        const neededBranch = (isLeft ? branch[index + 1] : branch[index - 1]) ?? "0x0";
        const newHashPath = [
            ...hashPath,
            neededBranch
        ];
        const currentBranchLevelIndex = this.leaves.length === branch.length ? -1 : this.branches.findIndex((b)=>b.length === branch.length);
        const nextBranch = this.branches[currentBranchLevelIndex + 1] ?? [
            this.root
        ];
        return this.getProof(_MerkleTree.hash(isLeft ? leaf : neededBranch, isLeft ? neededBranch : leaf, this.hashMethod), nextBranch, newHashPath);
    }
};
function proofMerklePath(root, leaf, path, hashMethod = computePedersenHash) {
    if (path.length === 0) {
        return root === leaf;
    }
    const [next, ...rest] = path;
    return proofMerklePath(root, MerkleTree.hash(leaf, next, hashMethod), rest, hashMethod);
}
// src/utils/typedData.ts
var presetTypes = {
    u256: JSON.parse('[{ "name": "low", "type": "u128" }, { "name": "high", "type": "u128" }]'),
    TokenAmount: JSON.parse('[{ "name": "token_address", "type": "ContractAddress" }, { "name": "amount", "type": "u256" }]'),
    NftId: JSON.parse('[{ "name": "collection_address", "type": "ContractAddress" }, { "name": "token_id", "type": "u256" }]')
};
var revisionConfiguration = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE]: {
        domain: "StarknetDomain",
        hashMethod: computePoseidonHashOnElements,
        hashMerkleMethod: computePoseidonHash,
        escapeTypeString: (s)=>`"${s}"`,
        presetTypes
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY]: {
        domain: "StarkNetDomain",
        hashMethod: computePedersenHashOnElements,
        hashMerkleMethod: computePedersenHash,
        escapeTypeString: (s)=>s,
        presetTypes: {}
    }
};
function assertRange(data, type, { min, max }) {
    const value = BigInt(data);
    assert(value >= min && value <= max, `${value} (${type}) is out of bounds [${min}, ${max}]`);
}
function identifyRevision({ types, domain }) {
    if (revisionConfiguration[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE].domain in types && domain.revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE;
    if (revisionConfiguration[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY].domain in types && (domain.revision ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY;
    return void 0;
}
function getHex(value) {
    try {
        return toHex(value);
    } catch (e) {
        if (isString(value)) {
            return toHex(encodeShortString(value));
        }
        throw new Error(`Invalid BigNumberish: ${value}`);
    }
}
function validateTypedData(data) {
    const typedData = data;
    return Boolean(typedData.message && typedData.primaryType && typedData.types && identifyRevision(typedData));
}
function prepareSelector(selector) {
    return isHex(selector) ? selector : getSelectorFromName(selector);
}
function isMerkleTreeType(type) {
    return type.type === "merkletree";
}
function getDependencies(types, type, dependencies = [], contains = "", revision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY) {
    let dependencyTypes = [
        type
    ];
    if (type[type.length - 1] === "*") {
        dependencyTypes = [
            type.slice(0, -1)
        ];
    } else if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
        if (type === "enum") {
            dependencyTypes = [
                contains
            ];
        } else if (type.match(/^\(.*\)$/)) {
            dependencyTypes = type.slice(1, -1).split(",").map((depType)=>depType[depType.length - 1] === "*" ? depType.slice(0, -1) : depType);
        }
    }
    return dependencyTypes.filter((t)=>!dependencies.includes(t) && types[t]).reduce(// This comment prevents prettier from rolling everything here into a single line.
    (p, depType)=>[
            ...p,
            ...[
                depType,
                ...types[depType].reduce((previous, t)=>[
                        ...previous,
                        ...getDependencies(types, t.type, previous, t.contains, revision).filter((dependency)=>!previous.includes(dependency))
                    ], [])
            ].filter((dependency)=>!p.includes(dependency))
        ], []);
}
function getMerkleTreeType(types, ctx) {
    if (ctx.parent && ctx.key) {
        const parentType = types[ctx.parent];
        const merkleType = parentType.find((t)=>t.name === ctx.key);
        const isMerkleTree = isMerkleTreeType(merkleType);
        if (!isMerkleTree) {
            throw new Error(`${ctx.key} is not a merkle tree`);
        }
        if (merkleType.contains.endsWith("*")) {
            throw new Error(`Merkle tree contain property must not be an array but was given ${ctx.key}`);
        }
        return merkleType.contains;
    }
    return "raw";
}
function encodeType(types, type, revision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY) {
    const allTypes = revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE ? {
        ...types,
        ...revisionConfiguration[revision].presetTypes
    } : types;
    const [primary, ...dependencies] = getDependencies(allTypes, type, void 0, void 0, revision);
    const newTypes = !primary ? [] : [
        primary,
        ...dependencies.sort()
    ];
    const esc = revisionConfiguration[revision].escapeTypeString;
    return newTypes.map((dependency)=>{
        const dependencyElements = allTypes[dependency].map((t)=>{
            const targetType = t.type === "enum" && revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE ? t.contains : t.type;
            const typeString = targetType.match(/^\(.*\)$/) ? `(${targetType.slice(1, -1).split(",").map((e)=>e ? esc(e) : e).join(",")})` : esc(targetType);
            return `${esc(t.name)}:${typeString}`;
        });
        return `${esc(dependency)}(${dependencyElements})`;
    }).join("");
}
function getTypeHash(types, type, revision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY) {
    return getSelectorFromName(encodeType(types, type, revision));
}
function encodeValue(types, type, data, ctx = {}, revision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY) {
    if (types[type]) {
        return [
            type,
            getStructHash(types, type, data, revision)
        ];
    }
    if (revisionConfiguration[revision].presetTypes[type]) {
        return [
            type,
            getStructHash(revisionConfiguration[revision].presetTypes, type, data, revision)
        ];
    }
    if (type.endsWith("*")) {
        const hashes = data.map((entry)=>encodeValue(types, type.slice(0, -1), entry, void 0, revision)[1]);
        return [
            type,
            revisionConfiguration[revision].hashMethod(hashes)
        ];
    }
    switch(type){
        case "enum":
            {
                if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
                    const [variantKey, variantData] = Object.entries(data)[0];
                    const parentType = types[ctx.parent].find((t)=>t.name === ctx.key);
                    const enumType = types[parentType.contains];
                    const variantType = enumType.find((t)=>t.name === variantKey);
                    const variantIndex = enumType.indexOf(variantType);
                    const encodedSubtypes = variantType.type.slice(1, -1).split(",").map((subtype, index)=>{
                        if (!subtype) return subtype;
                        const subtypeData = variantData[index];
                        return encodeValue(types, subtype, subtypeData, void 0, revision)[1];
                    });
                    return [
                        type,
                        revisionConfiguration[revision].hashMethod([
                            variantIndex,
                            ...encodedSubtypes
                        ])
                    ];
                }
                return [
                    type,
                    getHex(data)
                ];
            }
        case "merkletree":
            {
                const merkleTreeType = getMerkleTreeType(types, ctx);
                const structHashes = data.map((struct)=>{
                    return encodeValue(types, merkleTreeType, struct, void 0, revision)[1];
                });
                const { root } = new MerkleTree(structHashes, revisionConfiguration[revision].hashMerkleMethod);
                return [
                    "felt",
                    root
                ];
            }
        case "selector":
            {
                return [
                    "felt",
                    prepareSelector(data)
                ];
            }
        case "string":
            {
                if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
                    const byteArray = byteArrayFromString(data);
                    const elements = [
                        byteArray.data.length,
                        ...byteArray.data,
                        byteArray.pending_word,
                        byteArray.pending_word_len
                    ];
                    return [
                        type,
                        revisionConfiguration[revision].hashMethod(elements)
                    ];
                }
                return [
                    type,
                    getHex(data)
                ];
            }
        case "i128":
            {
                if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
                    const value = BigInt(data);
                    assertRange(value, type, RANGE_I128);
                    return [
                        type,
                        getHex(value < 0n ? PRIME + value : value)
                    ];
                }
                return [
                    type,
                    getHex(data)
                ];
            }
        case "timestamp":
        case "u128":
            {
                if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
                    assertRange(data, type, RANGE_U128);
                }
                return [
                    type,
                    getHex(data)
                ];
            }
        case "felt":
        case "shortstring":
            {
                if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
                    assertRange(getHex(data), type, RANGE_FELT);
                }
                return [
                    type,
                    getHex(data)
                ];
            }
        case "ClassHash":
        case "ContractAddress":
            {
                if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
                    assertRange(data, type, RANGE_FELT);
                }
                return [
                    type,
                    getHex(data)
                ];
            }
        case "bool":
            {
                if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
                    assert(isBoolean(data), `Type mismatch for ${type} ${data}`);
                }
                return [
                    type,
                    getHex(data)
                ];
            }
        default:
            {
                if (revision === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].ACTIVE) {
                    throw new Error(`Unsupported type: ${type}`);
                }
                return [
                    type,
                    getHex(data)
                ];
            }
    }
}
function encodeData(types, type, data, revision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY) {
    const targetType = types[type] ?? revisionConfiguration[revision].presetTypes[type];
    const [returnTypes, values] = targetType.reduce(([ts, vs], field)=>{
        if (data[field.name] === void 0 || data[field.name] === null && field.type !== "enum") {
            throw new Error(`Cannot encode data: missing data for '${field.name}'`);
        }
        const value = data[field.name];
        const ctx = {
            parent: type,
            key: field.name
        };
        const [t, encodedValue] = encodeValue(types, field.type, value, ctx, revision);
        return [
            [
                ...ts,
                t
            ],
            [
                ...vs,
                encodedValue
            ]
        ];
    }, [
        [
            "felt"
        ],
        [
            getTypeHash(types, type, revision)
        ]
    ]);
    return [
        returnTypes,
        values
    ];
}
function getStructHash(types, type, data, revision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$typedData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypedDataRevision"].LEGACY) {
    return revisionConfiguration[revision].hashMethod(encodeData(types, type, data, revision)[1]);
}
function getMessageHash(typedData, account) {
    if (!validateTypedData(typedData)) {
        throw new Error("Typed data does not match JSON schema");
    }
    const revision = identifyRevision(typedData);
    const { domain, hashMethod } = revisionConfiguration[revision];
    const message = [
        encodeShortString("StarkNet Message"),
        getStructHash(typedData.types, domain, typedData.domain, revision),
        account,
        getStructHash(typedData.types, typedData.primaryType, typedData.message, revision)
    ];
    return hashMethod(message);
}
function verifyMessage(message, signature, fullPublicKey, accountAddress) {
    const isTypedData = validateTypedData(message);
    if (!isBigNumberish(message) && !isTypedData) {
        throw new Error("message has a wrong format.");
    }
    if (isTypedData && accountAddress === void 0) {
        throw new Error("When providing a TypedData in message parameter, the accountAddress parameter has to be provided.");
    }
    if (isTypedData && !isBigNumberish(accountAddress)) {
        throw new Error("accountAddress shall be a BigNumberish");
    }
    const messageHash = isTypedData ? getMessageHash(message, accountAddress) : toHex(message);
    const sign = Array.isArray(signature) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Signature(BigInt(signature[0]), BigInt(signature[1])) : signature;
    const fullPubKey = toHex(fullPublicKey);
    const isValid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.verify(sign, messageHash, fullPubKey);
    return isValid;
}
// src/provider/rpc.ts
var RpcProvider = class {
    responseParser;
    channel;
    constructor(optionsOrProvider){
        if (optionsOrProvider && "channel" in optionsOrProvider) {
            this.channel = optionsOrProvider.channel;
            this.responseParser = "responseParser" in optionsOrProvider ? optionsOrProvider.responseParser : new RPCResponseParser();
        } else {
            this.channel = new RpcChannel2({
                ...optionsOrProvider,
                waitMode: false
            });
            this.responseParser = new RPCResponseParser(optionsOrProvider?.feeMarginPercentage);
        }
    }
    fetch(method, params, id = 0) {
        return this.channel.fetch(method, params, id);
    }
    async getChainId() {
        return this.channel.getChainId();
    }
    async getSpecVersion() {
        return this.channel.getSpecVersion();
    }
    async getNonceForAddress(contractAddress, blockIdentifier) {
        return this.channel.getNonceForAddress(contractAddress, blockIdentifier);
    }
    async getBlock(blockIdentifier) {
        return this.channel.getBlockWithTxHashes(blockIdentifier).then(this.responseParser.parseGetBlockResponse);
    }
    /**
   * Get the most recent accepted block hash and number
   */ async getBlockLatestAccepted() {
        return this.channel.getBlockLatestAccepted();
    }
    /**
   * Get the most recent accepted block number
   * redundant use getBlockLatestAccepted();
   * @returns Number of the latest block
   */ async getBlockNumber() {
        return this.channel.getBlockNumber();
    }
    async getBlockWithTxHashes(blockIdentifier) {
        return this.channel.getBlockWithTxHashes(blockIdentifier);
    }
    async getBlockWithTxs(blockIdentifier) {
        return this.channel.getBlockWithTxs(blockIdentifier);
    }
    /**
   * Pause the execution of the script until a specified block is created.
   * @param {BlockIdentifier} blockIdentifier bloc number (BigNumberish) or 'pending' or 'latest'.
   * Use of 'latest" or of a block already created will generate no pause.
   * @param {number} [retryInterval] number of milliseconds between 2 requests to the node
   * @example
   * ```typescript
   * await myProvider.waitForBlock();
   * // wait the creation of the pending block
   * ```
   */ async waitForBlock(blockIdentifier = "pending", retryInterval = 5e3) {
        if (blockIdentifier === BlockTag.LATEST) return;
        const currentBlock = await this.getBlockNumber();
        const targetBlock = blockIdentifier === BlockTag.PENDING ? currentBlock + 1 : Number(toHex(blockIdentifier));
        if (targetBlock <= currentBlock) return;
        const { retries } = this.channel;
        let retriesCount = retries;
        let isTargetBlock = false;
        while(!isTargetBlock){
            const currBlock = await this.getBlockNumber();
            if (currBlock === targetBlock) {
                isTargetBlock = true;
            } else {
                await wait(retryInterval);
            }
            retriesCount -= 1;
            if (retriesCount <= 0) {
                throw new Error(`waitForBlock() timed-out after ${retries} tries.`);
            }
        }
    }
    async getL1GasPrice(blockIdentifier) {
        return this.channel.getBlockWithTxHashes(blockIdentifier).then(this.responseParser.parseL1GasPriceResponse);
    }
    async getL1MessageHash(l2TxHash) {
        const transaction = await this.channel.getTransactionByHash(l2TxHash);
        assert(transaction.type === "L1_HANDLER", "This L2 transaction is not a L1 message.");
        const { calldata, contract_address, entry_point_selector, nonce } = transaction;
        const params = [
            calldata[0],
            contract_address,
            nonce,
            entry_point_selector,
            calldata.length - 1,
            ...calldata.slice(1)
        ];
        return solidityUint256PackedKeccak256(params);
    }
    async getBlockWithReceipts(blockIdentifier) {
        if (this.channel instanceof rpc_0_6_exports.RpcChannel) throw new LibraryError("Unsupported method for RPC version");
        return this.channel.getBlockWithReceipts(blockIdentifier);
    }
    getStateUpdate = this.getBlockStateUpdate;
    async getBlockStateUpdate(blockIdentifier) {
        return this.channel.getBlockStateUpdate(blockIdentifier);
    }
    async getBlockTransactionsTraces(blockIdentifier) {
        return this.channel.getBlockTransactionsTraces(blockIdentifier);
    }
    async getBlockTransactionCount(blockIdentifier) {
        return this.channel.getBlockTransactionCount(blockIdentifier);
    }
    /**
   * Return transactions from pending block
   * @deprecated Instead use getBlock(BlockTag.PENDING); (will be removed in next minor version)
   * Utility method, same result can be achieved using getBlockWithTxHashes(BlockTag.pending);
   */ async getPendingTransactions() {
        const { transactions } = await this.getBlockWithTxHashes(BlockTag.PENDING).then(this.responseParser.parseGetBlockResponse);
        return Promise.all(transactions.map((it)=>this.getTransactionByHash(it)));
    }
    async getTransaction(txHash) {
        return this.channel.getTransactionByHash(txHash);
    }
    async getTransactionByHash(txHash) {
        return this.channel.getTransactionByHash(txHash);
    }
    async getTransactionByBlockIdAndIndex(blockIdentifier, index) {
        return this.channel.getTransactionByBlockIdAndIndex(blockIdentifier, index);
    }
    async getTransactionReceipt(txHash) {
        const txReceiptWoHelper = await this.channel.getTransactionReceipt(txHash);
        const txReceiptWoHelperModified = this.responseParser.parseTransactionReceipt(txReceiptWoHelper);
        return new ReceiptTx(txReceiptWoHelperModified);
    }
    async getTransactionTrace(txHash) {
        return this.channel.getTransactionTrace(txHash);
    }
    /**
   * Get the status of a transaction
   */ async getTransactionStatus(transactionHash) {
        return this.channel.getTransactionStatus(transactionHash);
    }
    /**
   * @param invocations AccountInvocations
   * @param options blockIdentifier and flags to skip validation and fee charge<br/>
   * - blockIdentifier<br/>
   * - skipValidate (default false)<br/>
   * - skipFeeCharge (default true)<br/>
   */ async getSimulateTransaction(invocations, options) {
        return this.channel.simulateTransaction(invocations, options).then((r)=>this.responseParser.parseSimulateTransactionResponse(r));
    }
    async waitForTransaction(txHash, options) {
        const receiptWoHelper = await this.channel.waitForTransaction(txHash, options);
        return new ReceiptTx(receiptWoHelper);
    }
    async getStorageAt(contractAddress, key, blockIdentifier) {
        return this.channel.getStorageAt(contractAddress, key, blockIdentifier);
    }
    async getClassHashAt(contractAddress, blockIdentifier) {
        return this.channel.getClassHashAt(contractAddress, blockIdentifier);
    }
    async getClassByHash(classHash) {
        return this.getClass(classHash);
    }
    async getClass(classHash, blockIdentifier) {
        return this.channel.getClass(classHash, blockIdentifier).then(this.responseParser.parseContractClassResponse);
    }
    async getClassAt(contractAddress, blockIdentifier) {
        return this.channel.getClassAt(contractAddress, blockIdentifier).then(this.responseParser.parseContractClassResponse);
    }
    async getContractVersion(contractAddress, classHash, { blockIdentifier = this.channel.blockIdentifier, compiler = true } = {}) {
        let contractClass;
        if (contractAddress) {
            contractClass = await this.getClassAt(contractAddress, blockIdentifier);
        } else if (classHash) {
            contractClass = await this.getClass(classHash, blockIdentifier);
        } else {
            throw Error("getContractVersion require contractAddress or classHash");
        }
        if (isSierra(contractClass)) {
            if (compiler) {
                const abiTest = getAbiContractVersion(contractClass.abi);
                return {
                    cairo: "1",
                    compiler: abiTest.compiler
                };
            }
            return {
                cairo: "1",
                compiler: void 0
            };
        }
        return {
            cairo: "0",
            compiler: "0"
        };
    }
    /**
   * @deprecated use get*type*EstimateFee (will be refactored based on type after sequencer deprecation)
   */ async getEstimateFee(invocation, invocationDetails, blockIdentifier, skipValidate) {
        return this.getInvokeEstimateFee(invocation, invocationDetails, blockIdentifier, skipValidate);
    }
    async getInvokeEstimateFee(invocation, invocationDetails, blockIdentifier, skipValidate) {
        return this.channel.getEstimateFee([
            {
                type: TransactionType.INVOKE,
                ...invocation,
                ...invocationDetails
            }
        ], {
            blockIdentifier,
            skipValidate
        }).then((r)=>this.responseParser.parseFeeEstimateResponse(r));
    }
    async getDeclareEstimateFee(invocation, details, blockIdentifier, skipValidate) {
        return this.channel.getEstimateFee([
            {
                type: TransactionType.DECLARE,
                ...invocation,
                ...details
            }
        ], {
            blockIdentifier,
            skipValidate
        }).then((r)=>this.responseParser.parseFeeEstimateResponse(r));
    }
    async getDeployAccountEstimateFee(invocation, details, blockIdentifier, skipValidate) {
        return this.channel.getEstimateFee([
            {
                type: TransactionType.DEPLOY_ACCOUNT,
                ...invocation,
                ...details
            }
        ], {
            blockIdentifier,
            skipValidate
        }).then((r)=>this.responseParser.parseFeeEstimateResponse(r));
    }
    async getEstimateFeeBulk(invocations, options) {
        return this.channel.getEstimateFee(invocations, options).then((r)=>this.responseParser.parseFeeEstimateBulkResponse(r));
    }
    async invokeFunction(functionInvocation, details) {
        return this.channel.invoke(functionInvocation, details);
    }
    async declareContract(transaction, details) {
        return this.channel.declare(transaction, details);
    }
    async deployAccountContract(transaction, details) {
        return this.channel.deployAccount(transaction, details);
    }
    async callContract(call, blockIdentifier) {
        return this.channel.callContract(call, blockIdentifier);
    }
    /**
   * NEW: Estimate the fee for a message from L1
   * @param message Message From L1
   */ async estimateMessageFee(message, blockIdentifier) {
        return this.channel.estimateMessageFee(message, blockIdentifier);
    }
    /**
   * Returns an object about the sync status, or false if the node is not synching
   * @returns Object with the stats data
   */ async getSyncingStats() {
        return this.channel.getSyncingStats();
    }
    /**
   * Returns all events matching the given filter
   * @returns events and the pagination of the events
   */ async getEvents(eventFilter) {
        return this.channel.getEvents(eventFilter);
    }
    /**
   * Verify in Starknet a signature of a TypedData object or of a given hash.
   * @param {BigNumberish | TypedData} message TypedData object to be verified, or message hash to be verified.
   * @param {Signature} signature signature of the message.
   * @param {BigNumberish} accountAddress address of the account that has signed the message.
   * @param {string} [signatureVerificationFunctionName] if account contract with non standard account verification function name.
   * @param { okResponse: string[]; nokResponse: string[]; error: string[] } [signatureVerificationResponse] if account contract with non standard response of verification function.
   * @returns
   * ```typescript
   * const myTypedMessage: TypedMessage = .... ;
   * const messageHash = typedData.getMessageHash(myTypedMessage,accountAddress);
   * const sign: WeierstrassSignatureType = ec.starkCurve.sign(messageHash, privateKey);
   * const accountAddress = "0x43b7240d227aa2fb8434350b3321c40ac1b88c7067982549e7609870621b535";
   * const result1 = myRpcProvider.verifyMessageInStarknet(myTypedMessage, sign, accountAddress);
   * const result2 = myRpcProvider.verifyMessageInStarknet(messageHash, sign, accountAddress);
   * // result1 = result2 = true
   * ```
   */ async verifyMessageInStarknet(message, signature, accountAddress, signatureVerificationFunctionName, signatureVerificationResponse) {
        const isTypedData = validateTypedData(message);
        if (!isBigNumberish(message) && !isTypedData) {
            throw new Error("message has a wrong format.");
        }
        if (!isBigNumberish(accountAddress)) {
            throw new Error("accountAddress shall be a BigNumberish");
        }
        const messageHash = isTypedData ? getMessageHash(message, accountAddress) : toHex(message);
        const knownSigVerificationFName = signatureVerificationFunctionName ? [
            signatureVerificationFunctionName
        ] : [
            "isValidSignature",
            "is_valid_signature"
        ];
        const knownSignatureResponse = signatureVerificationResponse || {
            okResponse: [],
            nokResponse: [
                "0x0",
                // Devnet
                "0x00"
            ],
            error: [
                "argent/invalid-signature",
                // ArgentX 0.3.0 to 0.3.1
                "is invalid, with respect to the public key",
                // OpenZeppelin until 0.6.1, Braavos 0.0.11
                "INVALID_SIG"
            ]
        };
        let error;
        for (const SigVerificationFName of knownSigVerificationFName){
            try {
                const resp = await this.callContract({
                    contractAddress: toHex(accountAddress),
                    entrypoint: SigVerificationFName,
                    calldata: CallData.compile({
                        hash: toBigInt(messageHash).toString(),
                        signature: formatSignature(signature)
                    })
                });
                if (knownSignatureResponse.nokResponse.includes(resp[0].toString())) {
                    return false;
                }
                if (knownSignatureResponse.okResponse.length === 0 || knownSignatureResponse.okResponse.includes(resp[0].toString())) {
                    return true;
                }
                throw Error("signatureVerificationResponse Error: response is not part of known responses");
            } catch (err) {
                if (knownSignatureResponse.error.some((errMessage)=>err.message.includes(errMessage))) {
                    return false;
                }
                error = err;
            }
        }
        throw Error(`Signature verification Error: ${error}`);
    }
    /**
   * Test if class is already declared from ContractClassIdentifier
   * Helper method using getClass
   * @param ContractClassIdentifier
   * @param blockIdentifier
   */ async isClassDeclared(contractClassIdentifier, blockIdentifier) {
        let classHash;
        if (!contractClassIdentifier.classHash && "contract" in contractClassIdentifier) {
            const hashes = extractContractHashes(contractClassIdentifier);
            classHash = hashes.classHash;
        } else if (contractClassIdentifier.classHash) {
            classHash = contractClassIdentifier.classHash;
        } else {
            throw Error("contractClassIdentifier type not satisfied");
        }
        try {
            const result = await this.getClass(classHash, blockIdentifier);
            return result instanceof Object;
        } catch (error) {
            if (error instanceof LibraryError) {
                return false;
            }
            throw error;
        }
    }
    /**
   * Build bulk invocations with auto-detect declared class
   * 1. Test if class is declared if not declare it preventing already declared class error and not declared class errors
   * 2. Order declarations first
   * @param invocations
   */ async prepareInvocations(invocations) {
        const bulk = [];
        for (const invocation of invocations){
            if (invocation.type === TransactionType.DECLARE) {
                const isDeclared = await this.isClassDeclared("payload" in invocation ? invocation.payload : invocation);
                if (!isDeclared) {
                    bulk.unshift(invocation);
                }
            } else {
                bulk.push(invocation);
            }
        }
        return bulk;
    }
};
;
// src/utils/starknetId.ts
var starknetId_exports = {};
__export(starknetId_exports, {
    StarknetIdContract: ()=>StarknetIdContract,
    StarknetIdIdentityContract: ()=>StarknetIdIdentityContract,
    StarknetIdMulticallContract: ()=>StarknetIdMulticallContract,
    StarknetIdPfpContract: ()=>StarknetIdPfpContract,
    StarknetIdPopContract: ()=>StarknetIdPopContract,
    StarknetIdVerifierContract: ()=>StarknetIdVerifierContract,
    dynamicCallData: ()=>dynamicCallData,
    dynamicFelt: ()=>dynamicFelt,
    execution: ()=>execution,
    getStarknetIdContract: ()=>getStarknetIdContract,
    getStarknetIdIdentityContract: ()=>getStarknetIdIdentityContract,
    getStarknetIdMulticallContract: ()=>getStarknetIdMulticallContract,
    getStarknetIdPfpContract: ()=>getStarknetIdPfpContract,
    getStarknetIdPopContract: ()=>getStarknetIdPopContract,
    getStarknetIdVerifierContract: ()=>getStarknetIdVerifierContract,
    isStarkDomain: ()=>isStarkDomain,
    useDecoded: ()=>useDecoded,
    useEncoded: ()=>useEncoded
});
var basicAlphabet = "abcdefghijklmnopqrstuvwxyz0123456789-";
var basicSizePlusOne = BigInt(basicAlphabet.length + 1);
var bigAlphabet = "\u8FD9\u6765";
var basicAlphabetSize = BigInt(basicAlphabet.length);
var bigAlphabetSize = BigInt(bigAlphabet.length);
var bigAlphabetSizePlusOne = BigInt(bigAlphabet.length + 1);
function extractStars(str) {
    let k = 0;
    while(str.endsWith(bigAlphabet[bigAlphabet.length - 1])){
        str = str.substring(0, str.length - 1);
        k += 1;
    }
    return [
        str,
        k
    ];
}
function useDecoded(encoded) {
    let decoded = "";
    encoded.forEach((subdomain)=>{
        while(subdomain !== ZERO){
            const code = subdomain % basicSizePlusOne;
            subdomain /= basicSizePlusOne;
            if (code === BigInt(basicAlphabet.length)) {
                const nextSubdomain = subdomain / bigAlphabetSizePlusOne;
                if (nextSubdomain === ZERO) {
                    const code2 = subdomain % bigAlphabetSizePlusOne;
                    subdomain = nextSubdomain;
                    if (code2 === ZERO) decoded += basicAlphabet[0];
                    else decoded += bigAlphabet[Number(code2) - 1];
                } else {
                    const code2 = subdomain % bigAlphabetSize;
                    decoded += bigAlphabet[Number(code2)];
                    subdomain /= bigAlphabetSize;
                }
            } else decoded += basicAlphabet[Number(code)];
        }
        const [str, k] = extractStars(decoded);
        if (k) decoded = str + (k % 2 === 0 ? bigAlphabet[bigAlphabet.length - 1].repeat(k / 2 - 1) + bigAlphabet[0] + basicAlphabet[1] : bigAlphabet[bigAlphabet.length - 1].repeat((k - 1) / 2 + 1));
        decoded += ".";
    });
    if (!decoded) {
        return decoded;
    }
    return decoded.concat("stark");
}
function useEncoded(decoded) {
    let encoded = BigInt(0);
    let multiplier = BigInt(1);
    if (decoded.endsWith(bigAlphabet[0] + basicAlphabet[1])) {
        const [str, k] = extractStars(decoded.substring(0, decoded.length - 2));
        decoded = str + bigAlphabet[bigAlphabet.length - 1].repeat(2 * (k + 1));
    } else {
        const [str, k] = extractStars(decoded);
        if (k) decoded = str + bigAlphabet[bigAlphabet.length - 1].repeat(1 + 2 * (k - 1));
    }
    for(let i = 0; i < decoded.length; i += 1){
        const char = decoded[i];
        const index = basicAlphabet.indexOf(char);
        const bnIndex = BigInt(basicAlphabet.indexOf(char));
        if (index !== -1) {
            if (i === decoded.length - 1 && decoded[i] === basicAlphabet[0]) {
                encoded += multiplier * basicAlphabetSize;
                multiplier *= basicSizePlusOne;
                multiplier *= basicSizePlusOne;
            } else {
                encoded += multiplier * bnIndex;
                multiplier *= basicSizePlusOne;
            }
        } else if (bigAlphabet.indexOf(char) !== -1) {
            encoded += multiplier * basicAlphabetSize;
            multiplier *= basicSizePlusOne;
            const newid = (i === decoded.length - 1 ? 1 : 0) + bigAlphabet.indexOf(char);
            encoded += multiplier * BigInt(newid);
            multiplier *= bigAlphabetSize;
        }
    }
    return encoded;
}
var StarknetIdContract = {
    MAINNET: "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678",
    TESTNET_SEPOLIA: "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474"
};
function getStarknetIdContract(chainId) {
    switch(chainId){
        case "0x534e5f4d41494e" /* SN_MAIN */ :
            return StarknetIdContract.MAINNET;
        case "0x534e5f5345504f4c4941" /* SN_SEPOLIA */ :
            return StarknetIdContract.TESTNET_SEPOLIA;
        default:
            throw new Error("Starknet.id is not yet deployed on this network");
    }
}
var StarknetIdIdentityContract = {
    MAINNET: "0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af",
    TESTNET_SEPOLIA: "0x3697660a0981d734780731949ecb2b4a38d6a58fc41629ed611e8defda"
};
function getStarknetIdIdentityContract(chainId) {
    switch(chainId){
        case "0x534e5f4d41494e" /* SN_MAIN */ :
            return StarknetIdIdentityContract.MAINNET;
        case "0x534e5f5345504f4c4941" /* SN_SEPOLIA */ :
            return StarknetIdIdentityContract.TESTNET_SEPOLIA;
        default:
            throw new Error("Starknet.id verifier contract is not yet deployed on this network");
    }
}
var StarknetIdMulticallContract = "0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970";
function getStarknetIdMulticallContract(chainId) {
    switch(chainId){
        case "0x534e5f4d41494e" /* SN_MAIN */ :
            return StarknetIdMulticallContract;
        case "0x534e5f5345504f4c4941" /* SN_SEPOLIA */ :
            return StarknetIdMulticallContract;
        default:
            throw new Error("Starknet.id multicall contract is not yet deployed on this network");
    }
}
var StarknetIdVerifierContract = {
    MAINNET: "0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf",
    TESTNET_SEPOLIA: "0x60B94fEDe525f815AE5E8377A463e121C787cCCf3a36358Aa9B18c12c4D566"
};
function getStarknetIdVerifierContract(chainId) {
    switch(chainId){
        case "0x534e5f4d41494e" /* SN_MAIN */ :
            return StarknetIdVerifierContract.MAINNET;
        case "0x534e5f5345504f4c4941" /* SN_SEPOLIA */ :
            return StarknetIdVerifierContract.TESTNET_SEPOLIA;
        default:
            throw new Error("Starknet.id verifier contract is not yet deployed on this network");
    }
}
var StarknetIdPfpContract = {
    MAINNET: "0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7",
    TESTNET_SEPOLIA: "0x9e7bdb8dabd02ea8cfc23b1d1c5278e46490f193f87516ed5ff2dfec02"
};
function getStarknetIdPfpContract(chainId) {
    switch(chainId){
        case "0x534e5f4d41494e" /* SN_MAIN */ :
            return StarknetIdPfpContract.MAINNET;
        case "0x534e5f5345504f4c4941" /* SN_SEPOLIA */ :
            return StarknetIdPfpContract.TESTNET_SEPOLIA;
        default:
            throw new Error("Starknet.id profile picture verifier contract is not yet deployed on this network");
    }
}
var StarknetIdPopContract = {
    MAINNET: "0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4",
    TESTNET_SEPOLIA: "0x15ae88ae054caa74090b89025c1595683f12edf7a4ed2ad0274de3e1d4a"
};
function getStarknetIdPopContract(chainId) {
    switch(chainId){
        case "0x534e5f4d41494e" /* SN_MAIN */ :
            return StarknetIdPopContract.MAINNET;
        case "0x534e5f5345504f4c4941" /* SN_SEPOLIA */ :
            return StarknetIdPopContract.TESTNET_SEPOLIA;
        default:
            throw new Error("Starknet.id proof of personhood verifier contract is not yet deployed on this network");
    }
}
function execution(staticEx, ifEqual = void 0, ifNotEqual = void 0) {
    return new CairoCustomEnum({
        Static: staticEx,
        IfEqual: ifEqual ? tuple(ifEqual[0], ifEqual[1], ifEqual[2]) : void 0,
        IfNotEqual: ifNotEqual ? tuple(ifNotEqual[0], ifNotEqual[1], ifNotEqual[2]) : void 0
    });
}
function dynamicFelt(hardcoded, reference = void 0) {
    return new CairoCustomEnum({
        Hardcoded: hardcoded,
        Reference: reference ? tuple(reference[0], reference[1]) : void 0
    });
}
function dynamicCallData(hardcoded, reference = void 0, arrayReference = void 0) {
    return new CairoCustomEnum({
        Hardcoded: hardcoded,
        Reference: reference ? tuple(reference[0], reference[1]) : void 0,
        ArrayReference: arrayReference ? tuple(arrayReference[0], arrayReference[1]) : void 0
    });
}
function isStarkDomain(domain) {
    return /^(?:[a-z0-9-]{1,48}(?:[a-z0-9-]{1,48}[a-z0-9-])?\.)*[a-z0-9-]{1,48}\.stark$/.test(domain);
}
// src/provider/extensions/starknetId.ts
var StarknetId = class _StarknetId {
    async getStarkName(address, StarknetIdContract2) {
        return _StarknetId.getStarkName(// After Mixin, this is ProviderInterface
        this, address, StarknetIdContract2);
    }
    async getAddressFromStarkName(name, StarknetIdContract2) {
        return _StarknetId.getAddressFromStarkName(// After Mixin, this is ProviderInterface
        this, name, StarknetIdContract2);
    }
    async getStarkProfile(address, StarknetIdContract2, StarknetIdIdentityContract2, StarknetIdVerifierContract2, StarknetIdPfpContract2, StarknetIdPopContract2, StarknetIdMulticallContract2) {
        return _StarknetId.getStarkProfile(// After Mixin, this is ProviderInterface
        this, address, StarknetIdContract2, StarknetIdIdentityContract2, StarknetIdVerifierContract2, StarknetIdPfpContract2, StarknetIdPopContract2, StarknetIdMulticallContract2);
    }
    static async getStarkName(provider, address, StarknetIdContract2) {
        const chainId = await provider.getChainId();
        const contract = StarknetIdContract2 ?? getStarknetIdContract(chainId);
        try {
            const hexDomain = await provider.callContract({
                contractAddress: contract,
                entrypoint: "address_to_domain",
                calldata: CallData.compile({
                    address,
                    hint: []
                })
            });
            const decimalDomain = hexDomain.map((element)=>BigInt(element)).slice(1);
            const stringDomain = useDecoded(decimalDomain);
            if (!stringDomain) {
                throw Error("Starkname not found");
            }
            return stringDomain;
        } catch (e) {
            if (e instanceof Error && e.message === "Starkname not found") {
                throw e;
            }
            throw Error("Could not get stark name");
        }
    }
    static async getAddressFromStarkName(provider, name, StarknetIdContract2) {
        const starkName = name.endsWith(".stark") ? name : `${name}.stark`;
        if (!isStarkDomain(starkName)) {
            throw new Error("Invalid domain, must be a valid .stark domain");
        }
        const chainId = await provider.getChainId();
        const contract = StarknetIdContract2 ?? getStarknetIdContract(chainId);
        try {
            const encodedDomain = starkName.replace(".stark", "").split(".").map((part)=>useEncoded(part).toString(10));
            const addressData = await provider.callContract({
                contractAddress: contract,
                entrypoint: "domain_to_address",
                calldata: CallData.compile({
                    domain: encodedDomain,
                    hint: []
                })
            });
            return addressData[0];
        } catch  {
            throw Error("Could not get address from stark name");
        }
    }
    static async getStarkProfile(provider, address, StarknetIdContract2, StarknetIdIdentityContract2, StarknetIdVerifierContract2, StarknetIdPfpContract2, StarknetIdPopContract2, StarknetIdMulticallContract2) {
        const chainId = await provider.getChainId();
        const contract = StarknetIdContract2 ?? getStarknetIdContract(chainId);
        const identityContract = StarknetIdIdentityContract2 ?? getStarknetIdIdentityContract(chainId);
        const verifierContract = StarknetIdVerifierContract2 ?? getStarknetIdVerifierContract(chainId);
        const pfpContract = StarknetIdPfpContract2 ?? getStarknetIdPfpContract(chainId);
        const popContract = StarknetIdPopContract2 ?? getStarknetIdPopContract(chainId);
        const multicallAddress = StarknetIdMulticallContract2 ?? getStarknetIdMulticallContract(chainId);
        try {
            const calls = [
                {
                    execution: execution({}),
                    to: dynamicCallData(contract),
                    selector: dynamicCallData(getSelectorFromName("address_to_domain")),
                    calldata: [
                        dynamicCallData(address),
                        dynamicCallData("0")
                    ]
                },
                {
                    execution: execution({}),
                    to: dynamicFelt(contract),
                    selector: dynamicFelt(getSelectorFromName("domain_to_id")),
                    calldata: [
                        dynamicCallData(void 0, void 0, [
                            0,
                            0
                        ])
                    ]
                },
                {
                    execution: execution({}),
                    to: dynamicFelt(identityContract),
                    selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                    calldata: [
                        dynamicCallData(void 0, [
                            1,
                            0
                        ]),
                        dynamicCallData(encodeShortString("twitter")),
                        dynamicCallData(verifierContract),
                        dynamicCallData("0")
                    ]
                },
                {
                    execution: execution({}),
                    to: dynamicFelt(identityContract),
                    selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                    calldata: [
                        dynamicCallData(void 0, [
                            1,
                            0
                        ]),
                        dynamicCallData(encodeShortString("github")),
                        dynamicCallData(verifierContract),
                        dynamicCallData("0")
                    ]
                },
                {
                    execution: execution({}),
                    to: dynamicFelt(identityContract),
                    selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                    calldata: [
                        dynamicCallData(void 0, [
                            1,
                            0
                        ]),
                        dynamicCallData(encodeShortString("discord")),
                        dynamicCallData(verifierContract),
                        dynamicCallData("0")
                    ]
                },
                {
                    execution: execution({}),
                    to: dynamicFelt(identityContract),
                    selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                    calldata: [
                        dynamicCallData(void 0, [
                            1,
                            0
                        ]),
                        dynamicCallData(encodeShortString("proof_of_personhood")),
                        dynamicCallData(popContract),
                        dynamicCallData("0")
                    ]
                },
                // PFP
                {
                    execution: execution({}),
                    to: dynamicFelt(identityContract),
                    selector: dynamicFelt(getSelectorFromName("get_verifier_data")),
                    calldata: [
                        dynamicCallData(void 0, [
                            1,
                            0
                        ]),
                        dynamicCallData(encodeShortString("nft_pp_contract")),
                        dynamicCallData(pfpContract),
                        dynamicCallData("0")
                    ]
                },
                {
                    execution: execution({}),
                    to: dynamicFelt(identityContract),
                    selector: dynamicFelt(getSelectorFromName("get_extended_verifier_data")),
                    calldata: [
                        dynamicCallData(void 0, [
                            1,
                            0
                        ]),
                        dynamicCallData(encodeShortString("nft_pp_id")),
                        dynamicCallData("2"),
                        dynamicCallData(pfpContract),
                        dynamicCallData("0")
                    ]
                },
                {
                    execution: execution(void 0, void 0, [
                        6,
                        0,
                        0
                    ]),
                    to: dynamicFelt(void 0, [
                        6,
                        0
                    ]),
                    selector: dynamicFelt(getSelectorFromName("tokenURI")),
                    calldata: [
                        dynamicCallData(void 0, [
                            7,
                            1
                        ]),
                        dynamicCallData(void 0, [
                            7,
                            2
                        ])
                    ]
                }
            ];
            const data = await provider.callContract({
                contractAddress: multicallAddress,
                entrypoint: "aggregate",
                calldata: CallData.compile({
                    calls
                })
            });
            if (Array.isArray(data)) {
                const size = parseInt(data[0], 16);
                const finalArray = [];
                let index = 1;
                for(let i = 0; i < size; i += 1){
                    if (index < data.length) {
                        const subArraySize = parseInt(data[index], 16);
                        index += 1;
                        const subArray = data.slice(index, index + subArraySize);
                        finalArray.push(subArray);
                        index += subArraySize;
                    } else {
                        break;
                    }
                }
                const name = useDecoded(finalArray[0].slice(1).map((hexString)=>BigInt(hexString)));
                const twitter = finalArray[2][0] !== "0x0" ? BigInt(finalArray[2][0]).toString() : void 0;
                const github = finalArray[3][0] !== "0x0" ? BigInt(finalArray[3][0]).toString() : void 0;
                const discord = finalArray[4][0] !== "0x0" ? BigInt(finalArray[4][0]).toString() : void 0;
                const proofOfPersonhood = finalArray[5][0] === "0x1";
                const profilePictureMetadata = data[0] === "0x9" ? finalArray[8].slice(1).map((val)=>decodeShortString(val)).join("") : void 0;
                const profilePicture = profilePictureMetadata || `https://starknet.id/api/identicons/${BigInt(finalArray[1][0]).toString()}`;
                return {
                    name,
                    twitter,
                    github,
                    discord,
                    proofOfPersonhood,
                    profilePicture
                };
            }
            throw Error("Error while calling aggregate function");
        } catch (e) {
            if (e instanceof Error) {
                throw e;
            }
            throw Error("Could not get user stark profile data from address");
        }
    }
};
// src/provider/extensions/default.ts
var RpcProvider2 = class extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ts$2d$mixer$40$6$2e$0$2e$4$2f$node_modules$2f$ts$2d$mixer$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Mixin"])(RpcProvider, StarknetId) {
};
// src/provider/interface.ts
var ProviderInterface = class {
};
// src/provider/index.ts
var defaultProvider = new RpcProvider({
    default: true
});
// src/signer/interface.ts
var SignerInterface = class {
};
// src/signer/default.ts
var Signer = class {
    pk;
    constructor(pk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.utils.randomPrivateKey()){
        this.pk = pk instanceof Uint8Array ? buf2hex(pk) : toHex(pk);
    }
    async getPubKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.getStarkKey(this.pk);
    }
    async signMessage(typedData, accountAddress) {
        const msgHash = getMessageHash(typedData, accountAddress);
        return this.signRaw(msgHash);
    }
    async signTransaction(transactions, details) {
        const compiledCalldata = getExecuteCalldata(transactions, details.cairoVersion);
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateInvokeTransactionHash2({
                ...det,
                senderAddress: det.walletAddress,
                compiledCalldata,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateInvokeTransactionHash2({
                ...det,
                senderAddress: det.walletAddress,
                compiledCalldata,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signTransaction version");
        }
        return this.signRaw(msgHash);
    }
    async signDeployAccountTransaction(details) {
        const compiledConstructorCalldata = CallData.compile(details.constructorCalldata);
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateDeployAccountTransactionHash3({
                ...det,
                salt: det.addressSalt,
                constructorCalldata: compiledConstructorCalldata,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateDeployAccountTransactionHash3({
                ...det,
                salt: det.addressSalt,
                compiledConstructorCalldata,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signDeployAccountTransaction version");
        }
        return this.signRaw(msgHash);
    }
    async signDeclareTransaction(details) {
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateDeclareTransactionHash3({
                ...det,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateDeclareTransactionHash3({
                ...det,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signDeclareTransaction version");
        }
        return this.signRaw(msgHash);
    }
    async signRaw(msgHash) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.sign(msgHash, this.pk);
    }
};
;
// src/utils/uint256.ts
var uint256_exports = {};
__export(uint256_exports, {
    UINT_128_MAX: ()=>UINT_128_MAX,
    UINT_256_MAX: ()=>UINT_256_MAX,
    bnToUint256: ()=>bnToUint256,
    isUint256: ()=>isUint256,
    uint256ToBN: ()=>uint256ToBN
});
function uint256ToBN(uint2562) {
    return new CairoUint256(uint2562).toBigInt();
}
function isUint256(bn) {
    return CairoUint256.is(bn);
}
function bnToUint256(bn) {
    return new CairoUint256(bn).toUint256HexString();
}
// src/signer/ethSigner.ts
var EthSigner = class {
    pk;
    // hex string without 0x and with an odd number of characters
    constructor(pk = ethRandomPrivateKey()){
        this.pk = pk instanceof Uint8Array ? buf2hex(pk).padStart(64, "0") : removeHexPrefix(toHex(pk)).padStart(64, "0");
    }
    /**
   * provides the Ethereum full public key (without parity prefix)
   * @returns an hex string : 64 first characters are Point X coordinate. 64 last characters are Point Y coordinate.
   */ async getPubKey() {
        return addHexPrefix(buf2hex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["secp256k1"].getPublicKey(this.pk, false)).padStart(130, "0").slice(2));
    }
    async signMessage(typedData, accountAddress) {
        const msgHash = getMessageHash(typedData, accountAddress);
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["secp256k1"].sign(removeHexPrefix(sanitizeHex(msgHash)), this.pk);
        return this.formatEthSignature(signature);
    }
    async signTransaction(transactions, details) {
        const compiledCalldata = getExecuteCalldata(transactions, details.cairoVersion);
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateInvokeTransactionHash2({
                ...det,
                senderAddress: det.walletAddress,
                compiledCalldata,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateInvokeTransactionHash2({
                ...det,
                senderAddress: det.walletAddress,
                compiledCalldata,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signTransaction version");
        }
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["secp256k1"].sign(removeHexPrefix(sanitizeHex(msgHash)), this.pk);
        return this.formatEthSignature(signature);
    }
    async signDeployAccountTransaction(details) {
        const compiledConstructorCalldata = CallData.compile(details.constructorCalldata);
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateDeployAccountTransactionHash3({
                ...det,
                salt: det.addressSalt,
                constructorCalldata: compiledConstructorCalldata,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateDeployAccountTransactionHash3({
                ...det,
                salt: det.addressSalt,
                compiledConstructorCalldata,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signDeployAccountTransaction version");
        }
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["secp256k1"].sign(removeHexPrefix(sanitizeHex(msgHash)), this.pk);
        return this.formatEthSignature(signature);
    }
    async signDeclareTransaction(details) {
        let msgHash;
        if (Object.values(api_exports.ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateDeclareTransactionHash3({
                ...det,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateDeclareTransactionHash3({
                ...det,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signDeclareTransaction version");
        }
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["secp256k1"].sign(removeHexPrefix(sanitizeHex(msgHash)), this.pk);
        return this.formatEthSignature(signature);
    }
    /**
   * Serialize the signature in conformity with starknet::eth_signature::Signature
   * @param ethSignature secp256k1 signature from Noble curves library
   * @return an array of felts, representing a Cairo Eth Signature.
   */ formatEthSignature(ethSignature) {
        const r = bnToUint256(ethSignature.r);
        const s = bnToUint256(ethSignature.s);
        return [
            toHex(r.low),
            toHex(r.high),
            toHex(s.low),
            toHex(s.high),
            toHex(ethSignature.recovery)
        ];
    }
};
// src/signer/ledgerSigner111.ts
var LedgerSigner111 = class {
    transporter;
    // this is a hack to allow the '@ledgerhq/hw-transport' type to be used as a dev dependency but not exposed in the production build
    _transporter;
    accountID;
    eip2645applicationName;
    pathBuffer;
    appVersion;
    pubKey;
    fullPubKey;
    /**
   * constructor of the LedgerSigner class.
   * @param {Transport} transport 5 transports are available to handle USB, bluetooth, Node, Web, Mobile.
   * See Guides for more details.
   * @param {number} accountID ID of Ledger Nano (can handle 2**31 accounts).
   * @param {string} [eip2645application='LedgerW'] A wallet is defined by an ERC2645 derivation path (6 items),
   * and one item is the `application` and can be customized.
   * Default value is `LedgerW`.
   * @param {LedgerPathCalculation} [pathFunction=getLedgerPathBuffer111]
   * defines the function that will calculate the path. By default `getLedgerPathBuffer111` is selected.
   * @example
   * ```typescript
   * import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
   * const myNodeTransport = await TransportNodeHid.create();
   * const myLedgerSigner = new LedgerSigner111(myNodeTransport, 0);
   * ```
   */ constructor(transport, accountID, eip2645application = "LedgerW", pathFunction = getLedgerPathBuffer111){
        assert(accountID >= 0, "Ledger account ID shall not be a negative number.");
        assert(accountID <= MASK_31, "Ledger account ID shall be < 2**31.");
        assert(!!eip2645application, "Ledger application name shall not be empty.");
        this.transporter = transport;
        this._transporter = this.transporter;
        this.accountID = accountID;
        this.pubKey = "";
        this.fullPubKey = "";
        this.eip2645applicationName = eip2645application;
        this.appVersion = "";
        this.pathBuffer = pathFunction(this.accountID, this.eip2645applicationName);
    }
    /**
   * provides the Starknet public key
   * @returns an hex string : 64 characters are Point X coordinate.
   * @example
   * ```typescript
   * const result = await myLedgerSigner.getPubKey();
   * // result= "0x03681417ba3e1f050dd3ccdceb8d22b5e44fa70ee7844d472c6a768bded5174e"
   * ```
   */ async getPubKey() {
        if (!this.pubKey) await this.getPublicKeys();
        return this.pubKey;
    }
    /**
   * provides the full public key (with parity prefix)
   * @returns an hex string : 2 first characters are the parity, the 64 following characters are Point X coordinate. 64 last characters are Point Y coordinate.
   * @example
   * ```typescript
   * const result = await myLedgerSigner.getFullPubKey();
   * // result= "0x0403681417ba3e1f050dd3ccdceb8d22b5e44fa70ee7844d472c6a768bded5174e03cbc86f805dcfcb0c1922dd4daf181afa289d86223a18bc856276615bcc7787"
   * ```
   */ async getFullPubKey() {
        if (!this.fullPubKey) await this.getPublicKeys();
        return this.fullPubKey;
    }
    /**
   * Returns the version of the Starknet APP implemented in the Ledger.
   * @returns {string} version.
   * @example
   * ```typescript
   * const result = await myLedgerSigner.getAppVersion();
   * // result= "1.1.1"
   * ```
   */ async getAppVersion() {
        if (!this.appVersion) {
            const resp = await this._transporter.send(Number("0x5a"), 0, 0, 0);
            this.appVersion = `${resp[0]}.${resp[1]}.${resp[2]}`;
        }
        return this.appVersion;
    }
    /**
   * Sign a TypedData message (SNIP-12) in a Ledger.
   * @param {typedDataToHash} typedDataToHash A TypedData message compatible with SNIP-12.
   * @param {string} accountAddress Signer account address (Hex or num string)
   * @returns {Signature} The signed message.
   * @example
   * ```typescript
   * const result = myLedgerSigner.signMessage(snip12Message, account0.address);
   * // result = Signature { r: 611475243393396148729326917410546146405234155928298353899191529090923298688n,
   * // s: 798839819213540985856952481651392652149797817551686626114697493101433761982n,
   * // recovery: 0}
   * ```
   */ async signMessage(typedDataToHash, accountAddress) {
        const msgHash = getMessageHash(typedDataToHash, accountAddress);
        return this.signRaw(msgHash);
    }
    /**
   * Sign in a Ledger a V1 or a V3 transaction. This is a blind sign on the Ledger screen.
   * @param {Call1[]} transactions An array of `Call` transactions (generated for example by `myContract.populate()`).
   * @param {InvocationsSignerDetails} transactionsDetail An object that includes all the necessary inputs to hash the transaction. Can be `V2InvocationsSignerDetails` or `V3InvocationsSignerDetails` type.
   * @returns {Signature} The signed transaction.
   * @example
   * ```typescript
   * const txDetailsV3: V3InvocationsSignerDetails = {
   * chainId: constants.StarknetChainId.SN_MAIN,
   * nonce: "28",
   * accountDeploymentData: [],
   * paymasterData: [],
   * cairoVersion: "1",
   * feeDataAvailabilityMode: "L1",
   * nonceDataAvailabilityMode: "L1",
   * resourceBounds: {
   *   l1_gas: {
   *     max_amount: "0x2a00",
   *     max_price_per_unit: "0x5c00000"
   *   },
   *   l2_gas: {
   *     max_amount: "0x00",
   *     max_price_per_unit: "0x00"
   *   },
   * },
   * tip: 0,
   * version: "0x3",
   * walletAddress: account0.address
   * }
   * const result = myLedgerSigner.signTransaction([call0, call1], txDetailsV3);
   * // result = Signature { r: 611475243393396148729326917410546146405234155928298353899191529090923298688n,
   * // s: 798839819213540985856952481651392652149797817551686626114697493101433761982n,
   * // recovery: 0}
   * ```
   */ async signTransaction(transactions, transactionsDetail) {
        const compiledCalldata = getExecuteCalldata(transactions, transactionsDetail.cairoVersion);
        let msgHash;
        if (Object.values(ETransactionVersion2).includes(transactionsDetail.version)) {
            const det = transactionsDetail;
            msgHash = calculateInvokeTransactionHash2({
                ...det,
                senderAddress: det.walletAddress,
                compiledCalldata,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(transactionsDetail.version)) {
            const det = transactionsDetail;
            msgHash = calculateInvokeTransactionHash2({
                ...det,
                senderAddress: det.walletAddress,
                compiledCalldata,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signTransaction version");
        }
        return this.signRaw(msgHash);
    }
    /**
   * Sign in a Ledger the deployment of a new account. This is a blind sign on the Ledger screen.
   * @param {DeployAccountSignerDetails} details An object that includes all necessary data to calculate the Hash. It can be `V2DeployAccountSignerDetails` or `V3DeployAccountSignerDetails` types.
   * @returns {Signature} The deploy account signature.
   * @example
   * ```typescript
   * const result = myLedgerSigner.signDeployAccountTransaction(details);
   * // result = Signature { r: 611475243393396148729326917410546146405234155928298353899191529090923298688n,
   * // s: 798839819213540985856952481651392652149797817551686626114697493101433761982n,
   * // recovery: 0}
   * ```
   */ async signDeployAccountTransaction(details) {
        const compiledConstructorCalldata = CallData.compile(details.constructorCalldata);
        let msgHash;
        if (Object.values(ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateDeployAccountTransactionHash3({
                ...det,
                salt: det.addressSalt,
                constructorCalldata: compiledConstructorCalldata,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateDeployAccountTransactionHash3({
                ...det,
                salt: det.addressSalt,
                compiledConstructorCalldata,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signDeployAccountTransaction version");
        }
        return this.signRaw(msgHash);
    }
    /**
   * Sign in a Ledger the declaration of a new class. This is a blind sign on the Ledger screen.
   * @param {DeclareSignerDetails} details An object that includes all necessary data to calculate the Hash. It can be `V3DeclareSignerDetails` or `V2DeclareSignerDetails` types.
   * @returns {Signature} The declare Signature.
   * @example
   * ```typescript
   * const result = myLedgerSigner.signDeclareTransaction(details);
   * // result = Signature { r: 611475243393396148729326917410546146405234155928298353899191529090923298688n,
   * // s: 798839819213540985856952481651392652149797817551686626114697493101433761982n,
   * // recovery: 0}
   * ```
   */ async signDeclareTransaction(details) {
        let msgHash;
        if (Object.values(ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateDeclareTransactionHash3({
                ...det,
                version: det.version
            });
        } else if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateDeclareTransactionHash3({
                ...det,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
        } else {
            throw Error("unsupported signDeclareTransaction version");
        }
        return this.signRaw(msgHash);
    }
    /**
   * Internal function to sign a hash in a Ledger Nano.
   * This is a blind sign in the Ledger ; no display of what you are signing.
   */ async signRaw(msgHash) {
        addHexPrefix(buf2hex(await this._transporter.send(Number("0x5a"), 2, 0, 0, Buffer.from(this.pathBuffer))));
        const shiftedHash = toHex(BigInt(msgHash) << 4n);
        const buff2 = hexToBytes(shiftedHash);
        const respSign2 = Uint8Array.from(await this._transporter.send(Number("0x5a"), 2, 1, 0, Buffer.from(buff2)));
        const r = BigInt(addHexPrefix(buf2hex(respSign2.subarray(1, 33))));
        const s = BigInt(addHexPrefix(buf2hex(respSign2.subarray(33, 65))));
        const v = respSign2[65];
        const sign0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Signature(r, s);
        const sign1 = sign0.addRecoveryBit(v);
        return sign1;
    }
    /** internal function to get both the Starknet public key and the full public key */ async getPublicKeys() {
        const pathBuff = this.pathBuffer;
        const respGetPublic = Uint8Array.from(await this._transporter.send(Number("0x5a"), 1, 0, 0, Buffer.from(pathBuff)));
        this.pubKey = addHexPrefix(buf2hex(respGetPublic.subarray(1, 33)));
        this.fullPubKey = addHexPrefix(buf2hex(respGetPublic.subarray(0, 65)));
    }
};
function getLedgerPathBuffer111(accountId, applicationName = "LedgerW") {
    const path0buff = new Uint8Array([
        128,
        0,
        10,
        85
    ]);
    const path1buff = new Uint8Array([
        71,
        65,
        233,
        201
    ]);
    const path2buff = applicationName === "LedgerW" ? new Uint8Array([
        43,
        206,
        231,
        219
    ]) : stringToSha256ToArrayBuff4(applicationName);
    const path3buff = new Uint8Array([
        0,
        0,
        0,
        0
    ]);
    const hex = toHex(accountId);
    const padded = addHexPrefix(removeHexPrefix(hex).padStart(8, "0"));
    const path4buff = hexToBytes(padded);
    const path5buff = new Uint8Array([
        0,
        0,
        0,
        0
    ]);
    const pathBuff = concatenateArrayBuffer([
        path0buff,
        path1buff,
        path2buff,
        path3buff,
        path4buff,
        path5buff
    ]);
    return pathBuff;
}
;
function addAddressPadding(address) {
    const hex = toHex(addHexPrefix(address.toString()));
    const padded = removeHexPrefix(hex).padStart(64, "0");
    return addHexPrefix(padded);
}
function validateAndParseAddress(address) {
    const result = addAddressPadding(address);
    if (!result.match(/^(0x)?[0-9a-fA-F]{64}$/)) {
        throw new Error("Invalid Address Format");
    }
    assertInRange(result, ZERO, ADDR_BOUND - 1n, "Starknet Address");
    return result;
}
function getChecksumAddress(address) {
    const chars = removeHexPrefix(validateAndParseAddress(address)).toLowerCase().split("");
    const hex = removeHexPrefix(keccakBn(address));
    const hashed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$7$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(hex.padStart(64, "0"));
    for(let i = 0; i < chars.length; i += 2){
        if (hashed[i >> 1] >> 4 >= 8) {
            chars[i] = chars[i].toUpperCase();
        }
        if ((hashed[i >> 1] & 15) >= 8) {
            chars[i + 1] = chars[i + 1].toUpperCase();
        }
    }
    return addHexPrefix(chars.join(""));
}
function validateChecksumAddress(address) {
    return getChecksumAddress(address) === address;
}
// src/signer/ledgerSigner221.ts
var LedgerSigner221 = class extends LedgerSigner111 {
    /**
   * constructor of the LedgerSigner class.
   * @param {Transport} transport 5 transports are available to handle USB, bluetooth, Node, Web, Mobile.
   * See Guides for more details.
   * @param {number} accountID ID of Ledger Nano (can handle 2**31 accounts).
   * @param {string} [eip2645application='LedgerW'] A wallet is defined by an ERC2645 derivation path (6 items).
   * One item is called `application` and can be customized.
   * Default value is `LedgerW`.
   * @param {LedgerPathCalculation} [pathFunction=getLedgerPathBuffer221]
   * defines the function that will calculate the path. By default `getLedgerPathBuffer221` is selected.
   *
   * If you are using APP v2.2.1 with an account created with the v1.1.1, you need to use :
   * ```typescript
   * const myLedgerSigner = new LedgerSigner211(myNodeTransport, 0, undefined, getLedgerPathBuffer111);
   * ```
   * @example
   * ```typescript
   * import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
   * const myNodeTransport = await TransportNodeHid.create();
   * const myLedgerSigner = new LedgerSigner211(myNodeTransport, 0);
   * ```
   */ constructor(transport, accountID, eip2645application = "LedgerW", pathFunction = getLedgerPathBuffer221){
        super(transport, accountID, eip2645application, pathFunction);
    }
    /**
   * Sign in a Ledger a V1 or a V3 transaction. The details are displayed on the Ledger screen.
   * @param {Call[]} transactions An array of `Call` transactions (generated for example by `myContract.populate()`).
   * @param {InvocationsSignerDetails} transactionsDetail An object that includes all the necessary inputs to hash the transaction. Can be `V2InvocationsSignerDetails` or `V3InvocationsSignerDetails` type.
   * @returns {Signature} The signed transaction.
   * @example
   * ```typescript
   * const txDetailsV3: V3InvocationsSignerDetails = {
   * chainId: constants.StarknetChainId.SN_MAIN,
   * nonce: "28",
   * accountDeploymentData: [],
   * paymasterData: [],
   * cairoVersion: "1",
   * feeDataAvailabilityMode: "L1",
   * nonceDataAvailabilityMode: "L1",
   * resourceBounds: {
   *   l1_gas: {
   *     max_amount: "0x2a00",
   *     max_price_per_unit: "0x5c00000"
   *   },
   *   l2_gas: {
   *     max_amount: "0x00",
   *     max_price_per_unit: "0x00"
   *   },
   * },
   * tip: 0,
   * version: "0x3",
   * walletAddress: account0.address
   * }
   * const result = myLedgerSigner.signTransaction([call0, call1], txDetailsV3);
   * // result = Signature { r: 611475243393396148729326917410546146405234155928298353899191529090923298688n,
   * // s: 798839819213540985856952481651392652149797817551686626114697493101433761982n,
   * // recovery: 0}
   * ```
   */ async signTransaction(transactions, transactionsDetail) {
        const compiledCalldata = getExecuteCalldata(transactions, transactionsDetail.cairoVersion);
        if (Object.values(ETransactionVersion2).includes(transactionsDetail.version)) {
            const det = transactionsDetail;
            const msgHash = calculateInvokeTransactionHash2({
                ...det,
                senderAddress: det.walletAddress,
                compiledCalldata,
                version: det.version
            });
            const ledgerResponse = await this.signTxV1(det, transactions);
            assert(toBigInt(msgHash) === ledgerResponse.hash, "The transaction hash calculated by Starknet.js is different from the one calculated by the Ledger.");
            return ledgerResponse.signature;
        }
        if (Object.values(api_exports.ETransactionVersion3).includes(transactionsDetail.version)) {
            const det = transactionsDetail;
            const msgHash = calculateInvokeTransactionHash2({
                ...det,
                senderAddress: det.walletAddress,
                compiledCalldata,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
            const ledgerResponse = await this.signTxV3(det, transactions);
            assert(toBigInt(msgHash) === ledgerResponse.hash, "The transaction hash calculated by Starknet.js is different from the one calculated by the Ledger.");
            return ledgerResponse.signature;
        }
        throw Error("unsupported signTransaction version");
    }
    /**
   * Sign in a Ledger the deployment of a new account. The details are displayed on the Ledger screen.
   * @param {DeployAccountSignerDetails} details An object that includes all necessary data to calculate the Hash. It can be `V2DeployAccountSignerDetails` or `V3DeployAccountSignerDetails` types.
   * @returns {Signature} The deploy account signature.
   * @example
   * ```typescript
   * const result = myLedgerSigner.signDeployAccountTransaction(details);
   * // result = Signature { r: 611475243393396148729326917410546146405234155928298353899191529090923298688n,
   * // s: 798839819213540985856952481651392652149797817551686626114697493101433761982n,
   * // recovery: 0}
   * ```
   */ async signDeployAccountTransaction(details) {
        const compiledConstructorCalldata = CallData.compile(details.constructorCalldata);
        let msgHash;
        if (Object.values(ETransactionVersion2).includes(details.version)) {
            const det = details;
            msgHash = calculateDeployAccountTransactionHash3({
                ...det,
                salt: det.addressSalt,
                constructorCalldata: compiledConstructorCalldata,
                version: det.version
            });
            const ledgerResponse = await this.signDeployAccountV1(det);
            assert(toBigInt(msgHash) === ledgerResponse.hash, "The transaction hash calculated by Starknet.js is different from the one calculated by the Ledger.");
            return ledgerResponse.signature;
        }
        if (Object.values(api_exports.ETransactionVersion3).includes(details.version)) {
            const det = details;
            msgHash = calculateDeployAccountTransactionHash3({
                ...det,
                salt: det.addressSalt,
                compiledConstructorCalldata,
                version: det.version,
                nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
                feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode)
            });
            const ledgerResponse = await this.signDeployAccountV3(det);
            assert(toBigInt(msgHash) === ledgerResponse.hash, "The transaction hash calculated by Starknet.js is different from the one calculated by the Ledger.");
            return ledgerResponse.signature;
        }
        throw Error("unsupported signDeployAccountTransaction version");
    }
    /**
   * Internal function to convert a bigNumberish to an Uint8array of 256 bits
   * @param {BigNumberish} input input value
   * @returns {Uint8Array} a Uint8Array containing 32 bytes.
   */ convertBnToLedger(input) {
        return hexToBytes(addAddressPadding(toHex(input)));
    }
    /**
   * Internal function to decode the response of the Ledger signature
   * @param {Uint8Array} respSign the Buffer response of the Ledger
   * @returns { hash: bigint; signature: Signature } transaction hash & signature
   */ decodeSignatureLedger(respSign) {
        const h = BigInt(addHexPrefix(buf2hex(respSign.subarray(0, 32))));
        const r = BigInt(addHexPrefix(buf2hex(respSign.subarray(33, 65))));
        const s = BigInt(addHexPrefix(buf2hex(respSign.subarray(65, 97))));
        const v = respSign[97];
        const sign0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Signature(r, s);
        const sign1 = sign0.addRecoveryBit(v);
        return {
            hash: h,
            signature: sign1
        };
    }
    /** Internal function to convert a Call to an array of Uint8Array.
   * @param {Call} call A Call to convert.
   * @return {Uint8Array[]} Call encoded in an array of Uint8Array (each containing 7 u256).
   */ encodeCall(call) {
        const toBuf = this.convertBnToLedger(call.contractAddress);
        const selectorBuf = hexToBytes(addAddressPadding(getSelector(call.entrypoint)));
        let calldataBuf = new Uint8Array([]);
        if (call.calldata) {
            const compiledCalldata = CallData.compile(call.calldata);
            calldataBuf = concatenateArrayBuffer(compiledCalldata.map((parameter)=>{
                const a = this.convertBnToLedger(parameter);
                return a;
            }));
        }
        const callBuf = concatenateArrayBuffer([
            toBuf,
            selectorBuf,
            calldataBuf
        ]);
        const calldatas = [];
        const chunkSize = 7 * 32;
        for(let i = 0; i < callBuf.length; i += chunkSize)calldatas.push(callBuf.subarray(i, i + chunkSize));
        return calldatas;
    }
    /**
   * Ask the Ledger Nano to display and sign a Starknet V1 transaction.
   * @param {V2InvocationsSignerDetails} txDetails All the details needed for a txV1.
   * @param {Call[]} calls array of Starknet invocations
   * @returns an object including the transaction Hash and the signature
   * @example
   * ```typescript
   * const calls: Call[] = [{contractAddress: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
   *      entrypoint: "transfer",
   *      calldata:["0x11f5fc2a92ac03434a7937fe982f5e5293b65ad438a989c5b78fb8f04a12016",
   *        "0x9184e72a000", "0x0"]}];
   * const txDet: V2InvocationsSignerDetails = {
   *    walletAddress: txDetails.accountAddress,
   *    chainId: constants.StarknetChainId.SN_MAIN,
   *    cairoVersion: "1", maxFee: txDetails.max_fee,
   *    nonce: txDetails.nonce, version: "0x1"
   *  };
   * const res = await myLedgerSigner.signTxV1(txDet, calls);
   * // res = {hash:
   * //   signature:
   * // }
   * ```
   */ async signTxV1(txDetails, calls) {
        await this._transporter.send(Number("0x5a"), 4, 0, 0, Buffer.from(this.pathBuffer));
        const accountAddressBuf = this.convertBnToLedger(txDetails.walletAddress);
        const maxFeeBuf = this.convertBnToLedger(txDetails.maxFee);
        const chainIdBuf = this.convertBnToLedger(txDetails.chainId);
        const nonceBuf = this.convertBnToLedger(txDetails.nonce);
        const dataBuf = concatenateArrayBuffer([
            accountAddressBuf,
            maxFeeBuf,
            chainIdBuf,
            nonceBuf
        ]);
        await this._transporter.send(Number("0x5a"), 4, 1, 0, Buffer.from(dataBuf));
        const nbCallsBuf = this.convertBnToLedger(calls.length);
        await this._transporter.send(Number("0x5a"), 4, 2, 0, Buffer.from(nbCallsBuf));
        let respSign = new Uint8Array(0);
        for (const call of calls){
            const calldatas = this.encodeCall(call);
            await this._transporter.send(Number("0x5a"), 4, 3, 0, Buffer.from(calldatas[0]));
            if (calldatas.length > 1) {
                calldatas.slice(1).forEach(async (part)=>{
                    await this._transporter.send(Number("0x5a"), 4, 3, 1, Buffer.from(part));
                });
            }
            respSign = await this._transporter.send(Number("0x5a"), 4, 3, 2);
        }
        return this.decodeSignatureLedger(respSign);
    }
    /**
   * Ask to the Ledger Nano to display and sign a Starknet V3 transaction.
   * @param {V3InvocationsSignerDetails} txDetails All the details needed for a txV3.
   * @param {Call[]} calls array of Starknet invocations
   * @returns an object including the transaction Hash and the signature
   * @example
   * ```typescript
   * const calls: Call[] = [{contractAddress: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
   *      entrypoint: "transfer",
   *      calldata:["0x11f5fc2a92ac03434a7937fe982f5e5293b65ad438a989c5b78fb8f04a12016",
   *        "0x9184e72a000", "0x0"]}];
   * const txDetailsV3: V3InvocationsSignerDetails = {
   *   chainId: constants.StarknetChainId.SN_MAIN,
   *   nonce: "28", accountDeploymentData: [],
   *   paymasterData: [], cairoVersion: "1",
   *   feeDataAvailabilityMode: "L1", nonceDataAvailabilityMode: "L1",
   *   resourceBounds: {
   *     l1_gas: { max_amount: "0x2a00", max_price_per_unit: "0x5c00000"
   *     },
   *     l2_gas: { max_amount: "0x00", max_price_per_unit: "0x00"},
   *   }, tip: 0, version: "0x3", walletAddress: account0.address
   *  };
   * const res = await myLedgerSigner.signTxV3(txDetailsV3, calls);
   * // res = {hash:
   * //   signature:
   * // }
   * ```
   */ async signTxV3(txDetails, calls) {
        assert(txDetails.paymasterData.length <= 7, "Paymaster data includes more than 7 items.");
        assert(txDetails.accountDeploymentData.length <= 7, "accountDeploymentData includes more than 7 items");
        await this._transporter.send(Number("0x5a"), 3, 0, 0, Buffer.from(this.pathBuffer));
        const accountAddressBuf = this.convertBnToLedger(txDetails.walletAddress);
        const tipBuf = this.convertBnToLedger(txDetails.tip);
        const chainIdBuf = this.convertBnToLedger(txDetails.chainId);
        const nonceBuf = this.convertBnToLedger(txDetails.nonce);
        const dAModeHashBuf = this.convertBnToLedger(hashDAMode(txDetails.nonceDataAvailabilityMode === api_exports.EDataAvailabilityMode.L1 ? api_exports.EDAMode.L1 : api_exports.EDAMode.L2, txDetails.feeDataAvailabilityMode === api_exports.EDataAvailabilityMode.L1 ? api_exports.EDAMode.L1 : api_exports.EDAMode.L2));
        const l1_gasBuf = this.convertBnToLedger(encodeResourceBoundsL1(txDetails.resourceBounds));
        const l2_gasBuf = this.convertBnToLedger(encodeResourceBoundsL2(txDetails.resourceBounds));
        const dataBuf = concatenateArrayBuffer([
            accountAddressBuf,
            tipBuf,
            l1_gasBuf,
            l2_gasBuf,
            chainIdBuf,
            nonceBuf,
            dAModeHashBuf
        ]);
        await this._transporter.send(Number("0x5a"), 3, 1, 0, Buffer.from(dataBuf));
        const paymasterBuf = concatenateArrayBuffer(txDetails.paymasterData.map((value)=>{
            const a = this.convertBnToLedger(value);
            return a;
        }));
        await this._transporter.send(Number("0x5a"), 3, 2, 0, Buffer.from(paymasterBuf));
        const accountDeployDataBuf = concatenateArrayBuffer(txDetails.paymasterData.map((value)=>{
            const a = this.convertBnToLedger(value);
            return a;
        }));
        await this._transporter.send(Number("0x5a"), 3, 3, 0, Buffer.from(accountDeployDataBuf));
        const nbCallsBuf = this.convertBnToLedger(calls.length);
        await this._transporter.send(Number("0x5a"), 3, 4, 0, Buffer.from(nbCallsBuf));
        let respSign = new Uint8Array(0);
        for (const call of calls){
            const calldatas = this.encodeCall(call);
            await this._transporter.send(Number("0x5a"), 3, 5, 0, Buffer.from(calldatas[0]));
            if (calldatas.length > 1) {
                calldatas.slice(1).forEach(async (part)=>{
                    await this._transporter.send(Number("0x5a"), 3, 5, 1, Buffer.from(part));
                });
            }
            respSign = await this._transporter.send(Number("0x5a"), 3, 5, 2);
        }
        return this.decodeSignatureLedger(respSign);
    }
    /**
   * Ask the Ledger Nano to display and sign a Starknet V1 account deployment.
   * @param {V2DeployAccountSignerDetails} deployAccountDetail All the details needed for a V1 deploy account.
   * @returns an object including the transaction Hash and the signature
   * @example
   * ```typescript
   * const deployData: V2DeployAccountSignerDetails =
   * {
   *  tip: 0, paymasterData: [], accountDeploymentData: [],
   *  nonceDataAvailabilityMode: 'L1', feeDataAvailabilityMode: 'L1',
   *  resourceBounds: {
   *    l2_gas: { max_amount: '0x0', max_price_per_unit: '0x0' },
   *    l1_gas: { max_amount: '0x0', max_price_per_unit: '0x0' }
   *   },
   *  classHash: '0x540d7f5ec7ecf317e68d48564934cb99259781b1ee3cedbbc37ec5337f8e688',
   *  constructorCalldata: [
   *    '89832696000889662999767022750851886674077821293893187900664573372145410755'
   *  ],
   *  contractAddress: '0x32c60fba64eb96831d064bbb2319375b7b7381543abe66da872e4344bcd72a0',
   *  addressSalt: '0x0032d7efe2a9232f9b463e7206c68fdea4aeb13fec0cb308c6ba1d197d5922c3',
   *  chainId: '0x534e5f5345504f4c4941', maxFee: 55050000000000n,
   *  version: '0x1', nonce: 0n
   *}
   * const res = await myLedgerSigner.signDeployAccountV1(deployData);
   * // res = {hash:
   * //   signature:
   * // }
   * ```
   */ async signDeployAccountV1(deployAccountDetail) {
        await this._transporter.send(Number("0x5a"), 6, 0, 0, Buffer.from(this.pathBuffer));
        const accountAddressBuf = this.convertBnToLedger(deployAccountDetail.contractAddress);
        const classHashBuf = this.convertBnToLedger(deployAccountDetail.classHash);
        const saltBuf = this.convertBnToLedger(deployAccountDetail.addressSalt);
        const chainIdBuf = this.convertBnToLedger(deployAccountDetail.chainId);
        const nonceBuf = this.convertBnToLedger(deployAccountDetail.nonce);
        const dataBuf = concatenateArrayBuffer([
            accountAddressBuf,
            classHashBuf,
            saltBuf,
            chainIdBuf,
            nonceBuf
        ]);
        await this._transporter.send(Number("0x5a"), 6, 1, 0, Buffer.from(dataBuf));
        const maxFreeBuf = this.convertBnToLedger(deployAccountDetail.maxFee);
        await this._transporter.send(Number("0x5a"), 6, 2, 0, Buffer.from(maxFreeBuf));
        const compiledConstructor = CallData.compile(deployAccountDetail.constructorCalldata);
        const constructorLengthBuf = this.convertBnToLedger(compiledConstructor.length);
        await this._transporter.send(Number("0x5a"), 6, 3, 0, Buffer.from(constructorLengthBuf));
        const constructorBuf = concatenateArrayBuffer(compiledConstructor.map((parameter)=>{
            const a = this.convertBnToLedger(parameter);
            return a;
        }));
        const constructorChunks = [];
        const chunkSize = 7 * 32;
        for(let i = 0; i < constructorBuf.length; i += chunkSize)constructorChunks.push(constructorBuf.subarray(i, i + chunkSize));
        let respSign = new Uint8Array(0);
        for (const chunk of constructorChunks){
            respSign = await this._transporter.send(Number("0x5a"), 6, 4, 0, Buffer.from(chunk));
        }
        return this.decodeSignatureLedger(respSign);
    }
    /**
   *Ask the Ledger Nano to display and sign a Starknet V3 account deployment.
   * @param {V3DeployAccountSignerDetails} deployAccountDetail All the details needed for a V3 deploy account.
   * @returns an object including the transaction Hash and the signature
   * @example
   * ```typescript
   * const deployData: V3DeployAccountSignerDetails =
   * {
   *  tip: 0, paymasterData: [], accountDeploymentData: [],
   *  nonceDataAvailabilityMode: 'L1', feeDataAvailabilityMode: 'L1',
   *  resourceBounds: {
   *    l2_gas: { max_amount: '0x0', max_price_per_unit: '0x0' },
   *    l1_gas: { max_amount: '0x226', max_price_per_unit: '0x22ecb25c00' }
   *   },
   *  classHash: '0x540d7f5ec7ecf317e68d48564934cb99259781b1ee3cedbbc37ec5337f8e688',
   *  constructorCalldata: [
   *    '3571125127744830445572285574469842579401255431821644822726857471463672199621'
   *  ],
   *  contractAddress: '0x4ca062add1cf12a107be1107af17981cf6e544a24d987693230ea481d3d5e34',
   *  addressSalt: '0x07e52f68e3160e1ef698211cdf6d3792368fe347e7e2d4a8ace14d9b248f39c5',
   *  chainId: '0x534e5f5345504f4c4941', maxFee: 0,
   *  version: '0x3', nonce: 0n
   *}
   * const res = await myLedgerSigner.signDeployAccountV3(deployData);
   * // res = {hash:
   * //   signature:
   * // }
   * ```
   */ async signDeployAccountV3(deployAccountDetail) {
        await this._transporter.send(Number("0x5a"), 5, 0, 0, Buffer.from(this.pathBuffer));
        const accountAddressBuf = this.convertBnToLedger(deployAccountDetail.contractAddress);
        const chainIdBuf = this.convertBnToLedger(deployAccountDetail.chainId);
        const nonceBuf = this.convertBnToLedger(deployAccountDetail.nonce);
        const dAModeHashBuf = this.convertBnToLedger(hashDAMode(deployAccountDetail.nonceDataAvailabilityMode === api_exports.EDataAvailabilityMode.L1 ? api_exports.EDAMode.L1 : api_exports.EDAMode.L2, deployAccountDetail.feeDataAvailabilityMode === api_exports.EDataAvailabilityMode.L1 ? api_exports.EDAMode.L1 : api_exports.EDAMode.L2));
        const classHashBuf = this.convertBnToLedger(deployAccountDetail.classHash);
        const saltBuf = this.convertBnToLedger(deployAccountDetail.addressSalt);
        const dataBuf = concatenateArrayBuffer([
            accountAddressBuf,
            chainIdBuf,
            nonceBuf,
            dAModeHashBuf,
            classHashBuf,
            saltBuf
        ]);
        await this._transporter.send(Number("0x5a"), 5, 1, 0, Buffer.from(dataBuf));
        const tipBuf = this.convertBnToLedger(deployAccountDetail.tip);
        const l1_gasBuf = this.convertBnToLedger(encodeResourceBoundsL1(deployAccountDetail.resourceBounds));
        const l2_gasBuf = this.convertBnToLedger(encodeResourceBoundsL2(deployAccountDetail.resourceBounds));
        const feeBuf = concatenateArrayBuffer([
            tipBuf,
            l1_gasBuf,
            l2_gasBuf
        ]);
        await this._transporter.send(Number("0x5a"), 5, 2, 0, Buffer.from(feeBuf));
        const paymasterBuf = concatenateArrayBuffer(deployAccountDetail.paymasterData.map((value)=>{
            const a = this.convertBnToLedger(value);
            return a;
        }));
        await this._transporter.send(Number("0x5a"), 5, 3, 0, Buffer.from(paymasterBuf));
        const compiledConstructor = CallData.compile(deployAccountDetail.constructorCalldata);
        const constructorLengthBuf = this.convertBnToLedger(compiledConstructor.length);
        await this._transporter.send(Number("0x5a"), 5, 4, 0, Buffer.from(constructorLengthBuf));
        const constructorBuf = concatenateArrayBuffer(compiledConstructor.map((parameter)=>{
            const a = this.convertBnToLedger(parameter);
            return a;
        }));
        const constructorChunks = [];
        const chunkSize = 7 * 32;
        for(let i = 0; i < constructorBuf.length; i += chunkSize)constructorChunks.push(constructorBuf.subarray(i, i + chunkSize));
        let respSign = new Uint8Array(0);
        for (const chunk of constructorChunks){
            respSign = await this._transporter.send(Number("0x5a"), 5, 5, 0, Buffer.from(chunk));
        }
        return this.decodeSignatureLedger(respSign);
    }
};
function getLedgerPathBuffer221(accountId, applicationName = "LedgerW") {
    const path0buff = new Uint8Array([
        HARDENING_BYTE,
        0,
        10,
        85
    ]);
    const path1buff = new Uint8Array([
        71 | HARDENING_BYTE,
        65,
        233,
        201
    ]);
    const path2Base = applicationName === "LedgerW" ? new Uint8Array([
        43,
        206,
        231,
        219
    ]) : stringToSha256ToArrayBuff4(applicationName);
    const path2buff = concatenateArrayBuffer([
        new Uint8Array([
            path2Base[0] | HARDENING_BYTE
        ]),
        path2Base.subarray(1)
    ]);
    const path3buff = new Uint8Array([
        HARDENING_BYTE,
        0,
        0,
        0
    ]);
    const hex = toHex(BigInt(accountId) | HARDENING_4BYTES);
    const padded = addHexPrefix(removeHexPrefix(hex).padStart(8, "0"));
    const path4buff = hexToBytes(padded);
    const path5buff = new Uint8Array([
        0,
        0,
        0,
        0
    ]);
    const pathBuff = concatenateArrayBuffer([
        path0buff,
        path1buff,
        path2buff,
        path3buff,
        path4buff,
        path5buff
    ]);
    return pathBuff;
}
// src/utils/events/index.ts
var events_exports = {};
__export(events_exports, {
    getAbiEvents: ()=>getAbiEvents,
    isAbiEvent: ()=>isAbiEvent,
    parseEvents: ()=>parseEvents,
    parseUDCEvent: ()=>parseUDCEvent
});
function isAbiEvent(object) {
    return object.type === "event";
}
function getCairo0AbiEvents(abi) {
    return abi.filter((abiEntry)=>abiEntry.type === "event").reduce((acc, abiEntry)=>{
        const entryName = abiEntry.name;
        const abiEntryMod = {
            ...abiEntry
        };
        abiEntryMod.name = entryName;
        return {
            ...acc,
            [addHexPrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.keccak(utf8ToArray(entryName)).toString(16))]: abiEntryMod
        };
    }, {});
}
function getCairo1AbiEvents(abi) {
    const abiEventsStructs = abi.filter((obj)=>isAbiEvent(obj) && obj.kind === "struct");
    const abiEventsEnums = abi.filter((obj)=>isAbiEvent(obj) && obj.kind === "enum");
    const abiEventsData = abiEventsStructs.reduce((acc, event)=>{
        let nameList = [];
        let { name } = event;
        let flat = false;
        const findName = (variant)=>variant.type === name;
        while(true){
            const eventEnum = abiEventsEnums.find((eventE)=>eventE.variants.some(findName));
            if (isUndefined(eventEnum)) break;
            const variant = eventEnum.variants.find(findName);
            nameList.unshift(variant.name);
            if (variant.kind === "flat") flat = true;
            name = eventEnum.name;
        }
        if (nameList.length === 0) {
            throw new Error("inconsistency in ABI events definition.");
        }
        if (flat) nameList = [
            nameList[nameList.length - 1]
        ];
        const final = nameList.pop();
        let result = {
            [addHexPrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.keccak(utf8ToArray(final)).toString(16))]: event
        };
        while(nameList.length > 0){
            result = {
                [addHexPrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.keccak(utf8ToArray(nameList.pop())).toString(16))]: result
            };
        }
        result = {
            ...result
        };
        return mergeAbiEvents(acc, result);
    }, {});
    return abiEventsData;
}
function getAbiEvents(abi) {
    return isCairo1Abi(abi) ? getCairo1AbiEvents(abi) : getCairo0AbiEvents(abi);
}
function mergeAbiEvents(target, source) {
    const output = {
        ...target
    };
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key)=>{
            if (isObject(source[key])) {
                if (!(key in target)) Object.assign(output, {
                    [key]: source[key]
                });
                else output[key] = mergeAbiEvents(target[key], source[key]);
            } else {
                Object.assign(output, {
                    [key]: source[key]
                });
            }
        });
    }
    return output;
}
function parseEvents(providerReceivedEvents, abiEvents, abiStructs, abiEnums) {
    const ret = providerReceivedEvents.flat().reduce((acc, recEvent)=>{
        let abiEvent = abiEvents[recEvent.keys.shift() ?? 0];
        if (!abiEvent) {
            return acc;
        }
        while(!abiEvent.name){
            const hashName = recEvent.keys.shift();
            assert(!!hashName, 'Not enough data in "keys" property of this event.');
            abiEvent = abiEvent[hashName];
        }
        const parsedEvent = {};
        parsedEvent[abiEvent.name] = {};
        const keysIter = recEvent.keys[Symbol.iterator]();
        const dataIter = recEvent.data[Symbol.iterator]();
        const abiEventKeys = abiEvent.members?.filter((it)=>it.kind === "key") || abiEvent.keys;
        const abiEventData = abiEvent.members?.filter((it)=>it.kind === "data") || abiEvent.data;
        abiEventKeys.forEach((key)=>{
            parsedEvent[abiEvent.name][key.name] = responseParser(keysIter, key, abiStructs, abiEnums, parsedEvent[abiEvent.name]);
        });
        abiEventData.forEach((data)=>{
            parsedEvent[abiEvent.name][data.name] = responseParser(dataIter, data, abiStructs, abiEnums, parsedEvent[abiEvent.name]);
        });
        if ("block_hash" in recEvent) parsedEvent.block_hash = recEvent.block_hash;
        if ("block_number" in recEvent) parsedEvent.block_number = recEvent.block_number;
        if ("transaction_hash" in recEvent) parsedEvent.transaction_hash = recEvent.transaction_hash;
        acc.push(parsedEvent);
        return acc;
    }, []);
    return ret;
}
function parseUDCEvent(txReceipt) {
    if (!txReceipt.events?.length) {
        throw new Error("UDC emitted event is empty");
    }
    const event = txReceipt.events.find((it)=>cleanHex(it.from_address) === cleanHex(UDC.ADDRESS)) || {
        data: []
    };
    return {
        transaction_hash: txReceipt.transaction_hash,
        contract_address: event.data[0],
        address: event.data[0],
        deployer: event.data[1],
        unique: event.data[2],
        classHash: event.data[3],
        calldata_len: event.data[4],
        calldata: event.data.slice(5, 5 + parseInt(event.data[4], 16)),
        salt: event.data[event.data.length - 1]
    };
}
// src/utils/outsideExecution.ts
var outsideExecution_exports = {};
__export(outsideExecution_exports, {
    buildExecuteFromOutsideCall: ()=>buildExecuteFromOutsideCall,
    buildExecuteFromOutsideCallData: ()=>buildExecuteFromOutsideCallData,
    getOutsideCall: ()=>getOutsideCall,
    getTypedData: ()=>getTypedData
});
function getOutsideCall(call) {
    const callData = call.calldata ?? [];
    const callDataCompiled = Array.isArray(callData) ? callData : CallData.compile(callData);
    return {
        to: call.contractAddress,
        selector: getSelectorFromName(call.entrypoint),
        calldata: callDataCompiled
    };
}
function callToTypedData(call, version) {
    const outsideCall = getOutsideCall(call);
    if (version === "1") {
        return {
            ...outsideCall,
            calldata_len: outsideCall.calldata.length,
            calldata: outsideCall.calldata
        };
    }
    return {
        To: outsideCall.to,
        Selector: outsideCall.selector,
        Calldata: outsideCall.calldata
    };
}
function getDomain(chainId, version) {
    return {
        name: "Account.execute_from_outside",
        version,
        chainId,
        ...version === "2" ? {
            revision: "1"
        } : {}
    };
}
function getTypedData(chainId, options, nonce, myCalls, version) {
    if (version === "1") {
        return {
            types: OutsideExecutionTypesV1,
            primaryType: "OutsideExecution",
            domain: getDomain(chainId, version),
            message: {
                ...options,
                nonce,
                calls_len: myCalls.length,
                calls: myCalls.map((call)=>callToTypedData(call, version))
            }
        };
    }
    return {
        types: OutsideExecutionTypesV2,
        primaryType: "OutsideExecution",
        domain: getDomain(chainId, version),
        message: {
            Caller: options.caller,
            Nonce: nonce,
            "Execute After": options.execute_after,
            "Execute Before": options.execute_before,
            Calls: myCalls.map((call)=>callToTypedData(call, version))
        }
    };
}
function buildExecuteFromOutsideCallData(outsideTransaction) {
    const execution2 = outsideTransaction.outsideExecution;
    const formattedSignature = formatSignature(outsideTransaction.signature);
    return CallData.compile({
        outside_execution: execution2,
        signature: formattedSignature
    });
}
function buildExecuteFromOutsideCall(outsideTransaction) {
    const myOutsideTransactions = Array.isArray(outsideTransaction) ? outsideTransaction : [
        outsideTransaction
    ];
    const multiCall = myOutsideTransactions.map((outsideTx)=>{
        let entrypoint;
        if (outsideTx.version === "1" /* V1 */ ) {
            entrypoint = "execute_from_outside";
        } else if (outsideTx.version === "2" /* V2 */ ) {
            entrypoint = "execute_from_outside_v2";
        } else {
            throw new Error("Unsupported OutsideExecution version");
        }
        return {
            contractAddress: toHex(outsideTx.signerAddress),
            entrypoint,
            calldata: buildExecuteFromOutsideCallData(outsideTx)
        };
    });
    return multiCall;
}
// src/utils/src5.ts
var src5_exports = {};
__export(src5_exports, {
    supportsInterface: ()=>supportsInterface
});
async function supportsInterface(provider, contractAddress, interfaceId) {
    const call = {
        contractAddress: toHex(contractAddress),
        entrypoint: "supports_interface",
        calldata: [
            toHex(interfaceId)
        ]
    };
    try {
        const resp = await provider.callContract(call);
        return BigInt(resp[0]) !== 0n;
    } catch  {
        return false;
    }
}
// src/account/default.ts
var Account = class extends RpcProvider2 {
    signer;
    address;
    cairoVersion;
    transactionVersion;
    constructor(providerOrOptions, address, pkOrSigner, cairoVersion, transactionVersion = config.get("accountTxVersion")){
        super(providerOrOptions);
        this.address = address.toLowerCase();
        this.signer = isString(pkOrSigner) || pkOrSigner instanceof Uint8Array ? new Signer(pkOrSigner) : pkOrSigner;
        if (cairoVersion) {
            this.cairoVersion = cairoVersion.toString();
        }
        this.transactionVersion = transactionVersion;
    }
    // provided version or contract based preferred transactionVersion
    getPreferredVersion(type12, type3) {
        if (this.transactionVersion === api_exports.ETransactionVersion.V3) return type3;
        if (this.transactionVersion === api_exports.ETransactionVersion.V2) return type12;
        return api_exports.ETransactionVersion.V3;
    }
    async getNonce(blockIdentifier) {
        return super.getNonceForAddress(this.address, blockIdentifier);
    }
    async getNonceSafe(nonce) {
        try {
            return toBigInt(nonce ?? await this.getNonce());
        } catch (error) {
            return 0n;
        }
    }
    /**
   * Retrieves the Cairo version from the network and sets `cairoVersion` if not already set in the constructor.
   * @param classHash if provided detects Cairo version from classHash, otherwise from the account address
   */ async getCairoVersion(classHash) {
        if (!this.cairoVersion) {
            const { cairo } = classHash ? await super.getContractVersion(void 0, classHash) : await super.getContractVersion(this.address);
            this.cairoVersion = cairo;
        }
        return this.cairoVersion;
    }
    async estimateFee(calls, estimateFeeDetails = {}) {
        return this.estimateInvokeFee(calls, estimateFeeDetails);
    }
    async estimateInvokeFee(calls, details = {}) {
        const { nonce: providedNonce, blockIdentifier, version: providedVersion, skipValidate = true } = details;
        const transactions = Array.isArray(calls) ? calls : [
            calls
        ];
        const nonce = toBigInt(providedNonce ?? await this.getNonce());
        const version = toTransactionVersion(this.getPreferredVersion(api_exports.ETransactionVersion.F1, api_exports.ETransactionVersion.F3), toFeeVersion(providedVersion));
        const chainId = await this.getChainId();
        const signerDetails = {
            ...v3Details(details),
            walletAddress: this.address,
            nonce,
            maxFee: ZERO,
            version,
            chainId,
            cairoVersion: await this.getCairoVersion(),
            skipValidate
        };
        const invocation = await this.buildInvocation(transactions, signerDetails);
        return super.getInvokeEstimateFee({
            ...invocation
        }, {
            ...v3Details(details),
            version,
            nonce
        }, blockIdentifier, details.skipValidate);
    }
    async estimateDeclareFee(payload, details = {}) {
        const { blockIdentifier, nonce: providedNonce, version: providedVersion, skipValidate = true } = details;
        const nonce = toBigInt(providedNonce ?? await this.getNonce());
        const version = toTransactionVersion(!isSierra(payload.contract) ? api_exports.ETransactionVersion.F1 : this.getPreferredVersion(api_exports.ETransactionVersion.F2, api_exports.ETransactionVersion.F3), toFeeVersion(providedVersion));
        const chainId = await this.getChainId();
        const declareContractTransaction = await this.buildDeclarePayload(payload, {
            ...v3Details(details),
            nonce,
            chainId,
            version,
            walletAddress: this.address,
            maxFee: ZERO,
            cairoVersion: void 0,
            // unused parameter
            skipValidate
        });
        return super.getDeclareEstimateFee(declareContractTransaction, {
            ...v3Details(details),
            version,
            nonce
        }, blockIdentifier, details.skipValidate);
    }
    async estimateAccountDeployFee({ classHash, addressSalt = 0, constructorCalldata = [], contractAddress }, details = {}) {
        const { blockIdentifier, version: providedVersion, skipValidate = true } = details;
        const version = toTransactionVersion(this.getPreferredVersion(api_exports.ETransactionVersion.F1, api_exports.ETransactionVersion.F3), toFeeVersion(providedVersion));
        const nonce = ZERO;
        const chainId = await this.getChainId();
        const payload = await this.buildAccountDeployPayload({
            classHash,
            addressSalt,
            constructorCalldata,
            contractAddress
        }, {
            ...v3Details(details),
            nonce,
            chainId,
            version,
            walletAddress: this.address,
            // unused parameter
            maxFee: ZERO,
            cairoVersion: void 0,
            // unused parameter,
            skipValidate
        });
        return super.getDeployAccountEstimateFee({
            ...payload
        }, {
            ...v3Details(details),
            version,
            nonce
        }, blockIdentifier, details.skipValidate);
    }
    async estimateDeployFee(payload, details = {}) {
        const calls = this.buildUDCContractPayload(payload);
        return this.estimateInvokeFee(calls, details);
    }
    async estimateFeeBulk(invocations, details = {}) {
        if (!invocations.length) throw TypeError("Invocations should be non-empty array");
        const { nonce, blockIdentifier, version, skipValidate } = details;
        const accountInvocations = await this.accountInvocationsFactory(invocations, {
            ...v3Details(details),
            versions: [
                api_exports.ETransactionVersion.F1,
                // non-sierra
                toTransactionVersion(this.getPreferredVersion(api_exports.ETransactionVersion.F2, api_exports.ETransactionVersion.F3), version)
            ],
            nonce,
            blockIdentifier,
            skipValidate
        });
        return super.getEstimateFeeBulk(accountInvocations, {
            blockIdentifier,
            skipValidate
        });
    }
    async simulateTransaction(invocations, details = {}) {
        if (!invocations.length) throw TypeError("Invocations should be non-empty array");
        const { nonce, blockIdentifier, skipValidate = true, skipExecute, version } = details;
        const accountInvocations = await this.accountInvocationsFactory(invocations, {
            ...v3Details(details),
            versions: [
                api_exports.ETransactionVersion.V1,
                // non-sierra
                toTransactionVersion(this.getPreferredVersion(api_exports.ETransactionVersion.V2, api_exports.ETransactionVersion.V3), version)
            ],
            nonce,
            blockIdentifier,
            skipValidate
        });
        return super.getSimulateTransaction(accountInvocations, {
            blockIdentifier,
            skipValidate,
            skipExecute
        });
    }
    async execute(transactions, arg2, transactionsDetail = {}) {
        const details = arg2 === void 0 || Array.isArray(arg2) ? transactionsDetail : arg2;
        const calls = Array.isArray(transactions) ? transactions : [
            transactions
        ];
        const nonce = toBigInt(details.nonce ?? await this.getNonce());
        const version = toTransactionVersion(this.getPreferredVersion(api_exports.ETransactionVersion.V1, api_exports.ETransactionVersion.V3), // TODO: does this depend on cairo version ?
        details.version);
        const estimate = await this.getUniversalSuggestedFee(version, {
            type: TransactionType.INVOKE,
            payload: transactions
        }, {
            ...details,
            version
        });
        const chainId = await this.getChainId();
        const signerDetails = {
            ...v3Details(details),
            resourceBounds: estimate.resourceBounds,
            walletAddress: this.address,
            nonce,
            maxFee: estimate.maxFee,
            version,
            chainId,
            cairoVersion: await this.getCairoVersion()
        };
        const signature = await this.signer.signTransaction(calls, signerDetails);
        const calldata = getExecuteCalldata(calls, await this.getCairoVersion());
        return this.invokeFunction({
            contractAddress: this.address,
            calldata,
            signature
        }, {
            ...v3Details(details),
            resourceBounds: estimate.resourceBounds,
            nonce,
            maxFee: estimate.maxFee,
            version
        });
    }
    /**
   * First check if contract is already declared, if not declare it
   * If contract already declared returned transaction_hash is ''.
   * Method will pass even if contract is already declared
   * @param transactionsDetail (optional)
   */ async declareIfNot(payload, transactionsDetail = {}) {
        const declareContractPayload = extractContractHashes(payload);
        try {
            await this.getClassByHash(declareContractPayload.classHash);
        } catch (error) {
            return this.declare(payload, transactionsDetail);
        }
        return {
            transaction_hash: "",
            class_hash: declareContractPayload.classHash
        };
    }
    async declare(payload, details = {}) {
        const declareContractPayload = extractContractHashes(payload);
        const { nonce, version: providedVersion } = details;
        const version = toTransactionVersion(!isSierra(payload.contract) ? api_exports.ETransactionVersion.V1 : this.getPreferredVersion(api_exports.ETransactionVersion.V2, api_exports.ETransactionVersion.V3), providedVersion);
        const estimate = await this.getUniversalSuggestedFee(version, {
            type: TransactionType.DECLARE,
            payload: declareContractPayload
        }, {
            ...details,
            version
        });
        const declareDetails = {
            ...v3Details(details),
            resourceBounds: estimate.resourceBounds,
            maxFee: estimate.maxFee,
            nonce: toBigInt(nonce ?? await this.getNonce()),
            version,
            chainId: await this.getChainId(),
            walletAddress: this.address,
            cairoVersion: void 0
        };
        const declareContractTransaction = await this.buildDeclarePayload(declareContractPayload, declareDetails);
        return this.declareContract(declareContractTransaction, declareDetails);
    }
    async deploy(payload, details = {}) {
        const { calls, addresses } = buildUDCCall(payload, this.address);
        const invokeResponse = await this.execute(calls, void 0, details);
        return {
            ...invokeResponse,
            contract_address: addresses
        };
    }
    async deployContract(payload, details = {}) {
        const deployTx = await this.deploy(payload, details);
        const txReceipt = await this.waitForTransaction(deployTx.transaction_hash);
        return parseUDCEvent(txReceipt);
    }
    async declareAndDeploy(payload, details = {}) {
        const { constructorCalldata, salt, unique } = payload;
        let declare = await this.declareIfNot(payload, details);
        if (declare.transaction_hash !== "") {
            const tx = await this.waitForTransaction(declare.transaction_hash);
            declare = {
                ...declare,
                ...tx
            };
        }
        const deploy = await this.deployContract({
            classHash: declare.class_hash,
            salt,
            unique,
            constructorCalldata
        }, details);
        return {
            declare: {
                ...declare
            },
            deploy
        };
    }
    deploySelf = this.deployAccount;
    async deployAccount({ classHash, constructorCalldata = [], addressSalt = 0, contractAddress: providedContractAddress }, details = {}) {
        const version = toTransactionVersion(this.getPreferredVersion(api_exports.ETransactionVersion.V1, api_exports.ETransactionVersion.V3), details.version);
        const nonce = ZERO;
        const chainId = await this.getChainId();
        const compiledCalldata = CallData.compile(constructorCalldata);
        const contractAddress = providedContractAddress ?? calculateContractAddressFromHash(addressSalt, classHash, compiledCalldata, 0);
        const estimate = await this.getUniversalSuggestedFee(version, {
            type: TransactionType.DEPLOY_ACCOUNT,
            payload: {
                classHash,
                constructorCalldata: compiledCalldata,
                addressSalt,
                contractAddress
            }
        }, details);
        const signature = await this.signer.signDeployAccountTransaction({
            ...v3Details(details),
            classHash,
            constructorCalldata: compiledCalldata,
            contractAddress,
            addressSalt,
            chainId,
            resourceBounds: estimate.resourceBounds,
            maxFee: estimate.maxFee,
            version,
            nonce
        });
        return this.deployAccountContract({
            classHash,
            addressSalt,
            constructorCalldata,
            signature
        }, {
            ...v3Details(details),
            nonce,
            resourceBounds: estimate.resourceBounds,
            maxFee: estimate.maxFee,
            version
        });
    }
    async signMessage(typedData) {
        return this.signer.signMessage(typedData, this.address);
    }
    async hashMessage(typedData) {
        return getMessageHash(typedData, this.address);
    }
    /**
   * @deprecated To replace by `myRpcProvider.verifyMessageInStarknet()`
   */ async verifyMessageHash(hash, signature, signatureVerificationFunctionName, signatureVerificationResponse) {
        return this.verifyMessageInStarknet(hash, signature, this.address, signatureVerificationFunctionName, signatureVerificationResponse);
    }
    /**
   * @deprecated To replace by `myRpcProvider.verifyMessageInStarknet()`
   */ async verifyMessage(typedData, signature, signatureVerificationFunctionName, signatureVerificationResponse) {
        return this.verifyMessageInStarknet(typedData, signature, this.address, signatureVerificationFunctionName, signatureVerificationResponse);
    }
    /**
   * Verify if an account is compatible with SNIP-9 outside execution, and with which version of this standard.
   * @returns {OutsideExecutionVersion} Not compatible, V1, V2.
   * @example
   * ```typescript
   * const result = myAccount.getSnip9Version();
   * // result = "V1"
   * ```
   */ async getSnip9Version() {
        if (await supportsInterface(this, this.address, SNIP9_V2_INTERFACE_ID)) {
            return "2" /* V2 */ ;
        }
        if (await supportsInterface(this, this.address, SNIP9_V1_INTERFACE_ID)) {
            return "1" /* V1 */ ;
        }
        return "0" /* UNSUPPORTED */ ;
    }
    /**
   * Verify if a SNIP-9 nonce has not yet been used by the account.
   * @param {BigNumberish} nonce SNIP-9 nonce to test.
   * @returns  {boolean} true if SNIP-9 nonce not yet used.
   * @example
   * ```typescript
   * const result = myAccount.isValidSnip9Nonce(1234);
   * // result = true
   * ```
   */ async isValidSnip9Nonce(nonce) {
        try {
            const call = {
                contractAddress: this.address,
                entrypoint: "is_valid_outside_execution_nonce",
                calldata: [
                    toHex(nonce)
                ]
            };
            const resp = await this.callContract(call);
            return BigInt(resp[0]) !== 0n;
        } catch (error) {
            throw new Error(`Failed to check if nonce is valid: ${error}`);
        }
    }
    /**
   * Outside transaction needs a specific SNIP-9 nonce, that we get in this function.
   * A SNIP-9 nonce can be any number not yet used ; no ordering is needed.
   * @returns  {string} an Hex string of a SNIP-9 nonce.
   * @example
   * ```typescript
   * const result = myAccount.getSnip9Nonce();
   * // result = "0x28a612590dbc36927933c8ee0f357eee639c8b22b3d3aa86949eed3ada4ac55"
   * ```
   */ async getSnip9Nonce() {
        const nonce = randomAddress();
        const isValidNonce = await this.isValidSnip9Nonce(nonce);
        if (!isValidNonce) {
            return this.getSnip9Nonce();
        }
        return nonce;
    }
    /**
   * Creates an object containing transaction(s) that can be executed by an other account with` Account.executeFromOutside()`, called Outside Transaction.
   * @param {OutsideExecutionOptions} options Parameters of the transaction(s).
   * @param {AllowArray<Call>} calls Transaction(s) to execute.
   * @param {OutsideExecutionVersion} [version] SNIP-9 version of the Account that creates the outside transaction.
   * @param {BigNumberish} [nonce] Outside Nonce.
   * @returns {OutsideTransaction} and object that can be used in `Account.executeFromOutside()`
   * @example
   * ```typescript
   * const now_seconds = Math.floor(Date.now() / 1000);
   * const callOptions: OutsideExecutionOptions = {
      caller: executorAccount.address, execute_after: now_seconds - 3600, execute_before: now_seconds + 3600 };
   * const call1: Call = { contractAddress: ethAddress, entrypoint: 'transfer', calldata: {
   *     recipient: recipientAccount.address, amount: cairo.uint256(100) } };
   * const outsideTransaction1: OutsideTransaction = await signerAccount.getOutsideTransaction(callOptions, call3);
   * // result = {
   * // outsideExecution: {
   * // caller: '0x64b48806902a367c8598f4f95c305e8c1a1acba5f082d294a43793113115691',
   * // nonce: '0x28a612590dbc36927933c8ee0f357eee639c8b22b3d3aa86949eed3ada4ac55',
   * // execute_after: 1723650229, execute_before: 1723704229, calls: [[Object]] },
   * // signature: Signature {
   * // r: 67518627037915514985321278857825384106482999609634873287406612756843916814n,
   * // s: 737198738569840639192844101690009498983611654458636624293579534560862067709n, recovery: 0 },
   * // signerAddress: '0x655f8fd7c4013c07cf12a92184aa6c314d181443913e21f7e209a18f0c78492',
   * // version: '2'
   * // }
   * ```
   */ async getOutsideTransaction(options, calls, version, nonce) {
        if (!isHex(options.caller) && options.caller !== "ANY_CALLER") {
            throw new Error(`The caller ${options.caller} is not valid.`);
        }
        const codedCaller = isHex(options.caller) ? options.caller : OutsideExecutionCallerAny;
        const myCalls = Array.isArray(calls) ? calls : [
            calls
        ];
        const supportedVersion = version ?? await this.getSnip9Version();
        if (!supportedVersion) {
            throw new Error("This account is not handling outside transactions.");
        }
        const myNonce = nonce ? toHex(nonce) : await this.getSnip9Nonce();
        const message = getTypedData(await this.getChainId(), {
            caller: codedCaller,
            execute_after: options.execute_after,
            execute_before: options.execute_before
        }, myNonce, myCalls, supportedVersion);
        const sign = await this.signMessage(message);
        const toExecute = {
            caller: codedCaller,
            nonce: myNonce,
            execute_after: options.execute_after,
            execute_before: options.execute_before,
            calls: myCalls.map(getOutsideCall)
        };
        return {
            outsideExecution: toExecute,
            signature: sign,
            signerAddress: this.address,
            version: supportedVersion
        };
    }
    /**
   * An account B executes a transaction that has been signed by an account A.
   * Fees are paid by B.
   * @param {AllowArray<OutsideTransaction>} outsideTransaction the signed transaction generated by `Account.getOutsideTransaction()`.
   * @param {UniversalDetails} [opts] same options than `Account.execute()`.
   * @returns {InvokeFunctionResponse} same response than `Account.execute()`.
   * @example
   * ```typescript
   * const outsideTransaction1: OutsideTransaction = await signerAccount.getOutsideTransaction(callOptions, call1);
   * const outsideTransaction2: OutsideTransaction = await signerAccount.getOutsideTransaction(callOptions4, call4);
   * const result = await myAccount.executeFromOutside([
      outsideTransaction1,
      outsideTransaction2,
    ]);
   * // result = { transaction_hash: '0x11233...`}
   * ```
   */ async executeFromOutside(outsideTransaction, opts) {
        const multiCall = buildExecuteFromOutsideCall(outsideTransaction);
        return this.execute(multiCall, opts);
    }
    /*
   * Support methods
   */ async getUniversalSuggestedFee(version, { type, payload }, details) {
        let maxFee = 0;
        let resourceBounds = estimateFeeToBounds(ZERO);
        if (version === api_exports.ETransactionVersion.V3) {
            resourceBounds = details.resourceBounds ?? (await this.getSuggestedFee({
                type,
                payload
            }, details)).resourceBounds;
        } else {
            maxFee = details.maxFee ?? (await this.getSuggestedFee({
                type,
                payload
            }, details)).suggestedMaxFee;
        }
        return {
            maxFee,
            resourceBounds
        };
    }
    async getSuggestedFee({ type, payload }, details) {
        switch(type){
            case TransactionType.INVOKE:
                return this.estimateInvokeFee(payload, details);
            case TransactionType.DECLARE:
                return this.estimateDeclareFee(payload, details);
            case TransactionType.DEPLOY_ACCOUNT:
                return this.estimateAccountDeployFee(payload, details);
            case TransactionType.DEPLOY:
                return this.estimateDeployFee(payload, details);
            default:
                return {
                    gas_consumed: 0n,
                    gas_price: 0n,
                    overall_fee: ZERO,
                    unit: "FRI",
                    suggestedMaxFee: ZERO,
                    resourceBounds: estimateFeeToBounds(ZERO),
                    data_gas_consumed: 0n,
                    data_gas_price: 0n
                };
        }
    }
    async buildInvocation(call, details) {
        const calldata = getExecuteCalldata(call, await this.getCairoVersion());
        const signature = !details.skipValidate ? await this.signer.signTransaction(call, details) : [];
        return {
            ...v3Details(details),
            contractAddress: this.address,
            calldata,
            signature
        };
    }
    async buildDeclarePayload(payload, details) {
        const { classHash, contract, compiledClassHash } = extractContractHashes(payload);
        const compressedCompiledContract = parseContract(contract);
        if (isUndefined(compiledClassHash) && (details.version === api_exports.ETransactionVersion3.F3 || details.version === api_exports.ETransactionVersion3.V3)) {
            throw Error("V3 Transaction work with Cairo1 Contracts and require compiledClassHash");
        }
        const signature = !details.skipValidate ? await this.signer.signDeclareTransaction({
            ...details,
            ...v3Details(details),
            classHash,
            compiledClassHash,
            // TODO: TS, cast because optional for v2 and required for v3, thrown if not present
            senderAddress: details.walletAddress
        }) : [];
        return {
            senderAddress: details.walletAddress,
            signature,
            contract: compressedCompiledContract,
            compiledClassHash
        };
    }
    async buildAccountDeployPayload({ classHash, addressSalt = 0, constructorCalldata = [], contractAddress: providedContractAddress }, details) {
        const compiledCalldata = CallData.compile(constructorCalldata);
        const contractAddress = providedContractAddress ?? calculateContractAddressFromHash(addressSalt, classHash, compiledCalldata, 0);
        const signature = !details.skipValidate ? await this.signer.signDeployAccountTransaction({
            ...details,
            ...v3Details(details),
            classHash,
            contractAddress,
            addressSalt,
            constructorCalldata: compiledCalldata
        }) : [];
        return {
            ...v3Details(details),
            classHash,
            addressSalt,
            constructorCalldata: compiledCalldata,
            signature
        };
    }
    buildUDCContractPayload(payload) {
        const calls = [].concat(payload).map((it)=>{
            const { classHash, salt = "0", unique = true, constructorCalldata = [] } = it;
            const compiledConstructorCallData = CallData.compile(constructorCalldata);
            return {
                contractAddress: UDC.ADDRESS,
                entrypoint: UDC.ENTRYPOINT,
                calldata: [
                    classHash,
                    salt,
                    toCairoBool(unique),
                    compiledConstructorCallData.length,
                    ...compiledConstructorCallData
                ]
            };
        });
        return calls;
    }
    async accountInvocationsFactory(invocations, details) {
        const { nonce, blockIdentifier, skipValidate = true } = details;
        const safeNonce = await this.getNonceSafe(nonce);
        const chainId = await this.getChainId();
        const versions = details.versions.map((it)=>toTransactionVersion(it));
        const tx0Payload = "payload" in invocations[0] ? invocations[0].payload : invocations[0];
        const cairoVersion = invocations[0].type === TransactionType.DEPLOY_ACCOUNT ? await this.getCairoVersion(tx0Payload.classHash) : await this.getCairoVersion();
        return Promise.all([].concat(invocations).map(async (transaction, index)=>{
            const txPayload = "payload" in transaction ? transaction.payload : transaction;
            const signerDetails = {
                ...v3Details(details),
                walletAddress: this.address,
                nonce: toBigInt(Number(safeNonce) + index),
                maxFee: ZERO,
                chainId,
                cairoVersion,
                version: "",
                skipValidate
            };
            const common = {
                type: transaction.type,
                nonce: toBigInt(Number(safeNonce) + index),
                blockIdentifier,
                version: ""
            };
            if (transaction.type === TransactionType.INVOKE) {
                const versionX = reduceV2(versions[1]);
                signerDetails.version = versionX;
                common.version = versionX;
                const payload = await this.buildInvocation([].concat(txPayload), signerDetails);
                return {
                    ...common,
                    ...payload,
                    ...signerDetails
                };
            }
            if (transaction.type === TransactionType.DEPLOY) {
                const versionX = reduceV2(versions[1]);
                signerDetails.version = versionX;
                common.version = versionX;
                const calls = this.buildUDCContractPayload(txPayload);
                const payload = await this.buildInvocation(calls, signerDetails);
                return {
                    ...common,
                    ...payload,
                    ...signerDetails,
                    type: TransactionType.INVOKE
                };
            }
            if (transaction.type === TransactionType.DECLARE) {
                const versionX = !isSierra(txPayload.contract) ? versions[0] : versions[1];
                signerDetails.version = versionX;
                common.version = versionX;
                const payload = await this.buildDeclarePayload(txPayload, signerDetails);
                return {
                    ...common,
                    ...payload,
                    ...signerDetails
                };
            }
            if (transaction.type === TransactionType.DEPLOY_ACCOUNT) {
                const versionX = reduceV2(versions[1]);
                signerDetails.version = versionX;
                common.version = versionX;
                const payload = await this.buildAccountDeployPayload(txPayload, signerDetails);
                return {
                    ...common,
                    ...payload,
                    ...signerDetails
                };
            }
            throw Error(`accountInvocationsFactory: unsupported transaction type: ${transaction}`);
        }));
    }
    async getStarkName(address = this.address, StarknetIdContract2) {
        return super.getStarkName(address, StarknetIdContract2);
    }
};
// src/account/interface.ts
var AccountInterface = class extends ProviderInterface {
};
// src/wallet/connect.ts
var connect_exports = {};
__export(connect_exports, {
    addDeclareTransaction: ()=>addDeclareTransaction,
    addInvokeTransaction: ()=>addInvokeTransaction,
    addStarknetChain: ()=>addStarknetChain,
    deploymentData: ()=>deploymentData,
    getPermissions: ()=>getPermissions,
    onAccountChange: ()=>onAccountChange,
    onNetworkChanged: ()=>onNetworkChanged,
    requestAccounts: ()=>requestAccounts,
    requestChainId: ()=>requestChainId,
    signMessage: ()=>signMessage,
    supportedSpecs: ()=>supportedSpecs,
    switchStarknetChain: ()=>switchStarknetChain,
    watchAsset: ()=>watchAsset
});
function requestAccounts(swo, silent_mode = false) {
    return swo.request({
        type: "wallet_requestAccounts",
        params: {
            silent_mode
        }
    });
}
function getPermissions(swo) {
    return swo.request({
        type: "wallet_getPermissions"
    });
}
function watchAsset(swo, asset) {
    return swo.request({
        type: "wallet_watchAsset",
        params: asset
    });
}
function addStarknetChain(swo, chain) {
    return swo.request({
        type: "wallet_addStarknetChain",
        params: chain
    });
}
function switchStarknetChain(swo, chainId) {
    return swo.request({
        type: "wallet_switchStarknetChain",
        params: {
            chainId
        }
    });
}
function requestChainId(swo) {
    return swo.request({
        type: "wallet_requestChainId"
    });
}
function deploymentData(swo) {
    return swo.request({
        type: "wallet_deploymentData"
    });
}
function addInvokeTransaction(swo, params) {
    return swo.request({
        type: "wallet_addInvokeTransaction",
        params
    });
}
function addDeclareTransaction(swo, params) {
    return swo.request({
        type: "wallet_addDeclareTransaction",
        params
    });
}
function signMessage(swo, typedData) {
    return swo.request({
        type: "wallet_signTypedData",
        params: typedData
    });
}
function supportedSpecs(swo) {
    return swo.request({
        type: "wallet_supportedSpecs"
    });
}
function onAccountChange(swo, callback) {
    swo.on("accountsChanged", callback);
}
function onNetworkChanged(swo, callback) {
    swo.on("networkChanged", callback);
}
// src/wallet/account.ts
var WalletAccount = class _WalletAccount extends Account {
    walletProvider;
    constructor(providerOrOptions, walletProvider, cairoVersion, address = ""){
        super(providerOrOptions, address, "", cairoVersion);
        this.walletProvider = walletProvider;
        this.walletProvider.on("accountsChanged", (res)=>{
            if (!res) return;
            this.address = res[0].toLowerCase();
        });
        this.walletProvider.on("networkChanged", (res)=>{
            if (!res) return;
            this.channel.setChainId(res);
        });
        if (!address.length) {
            logger.warn("@deprecated Use static method WalletAccount.connect or WalletAccount.connectSilent instead. Constructor {@link WalletAccount.(format:2)}.");
            requestAccounts(this.walletProvider).then(([accountAddress])=>{
                this.address = accountAddress.toLowerCase();
            });
        }
    }
    /**
   * WALLET EVENTS
   */ onAccountChange(callback) {
        onAccountChange(this.walletProvider, callback);
    }
    onNetworkChanged(callback) {
        onNetworkChanged(this.walletProvider, callback);
    }
    /**
   * WALLET SPECIFIC METHODS
   */ requestAccounts(silentMode = false) {
        return requestAccounts(this.walletProvider, silentMode);
    }
    getPermissions() {
        return getPermissions(this.walletProvider);
    }
    switchStarknetChain(chainId) {
        return switchStarknetChain(this.walletProvider, chainId);
    }
    watchAsset(asset) {
        return watchAsset(this.walletProvider, asset);
    }
    addStarknetChain(chain) {
        return addStarknetChain(this.walletProvider, chain);
    }
    /**
   * ACCOUNT METHODS
   */ execute(calls) {
        const txCalls = [].concat(calls).map((it)=>{
            const { contractAddress, entrypoint, calldata } = it;
            return {
                contract_address: contractAddress,
                entry_point: entrypoint,
                calldata
            };
        });
        const params = {
            calls: txCalls
        };
        return addInvokeTransaction(this.walletProvider, params);
    }
    declare(payload) {
        const declareContractPayload = extractContractHashes(payload);
        const pContract = payload.contract;
        const cairo1Contract = {
            ...pContract,
            abi: stringify2(pContract.abi)
        };
        if (!declareContractPayload.compiledClassHash) {
            throw Error("compiledClassHash is required");
        }
        const params = {
            compiled_class_hash: declareContractPayload.compiledClassHash,
            contract_class: cairo1Contract
        };
        return addDeclareTransaction(this.walletProvider, params);
    }
    async deploy(payload) {
        const { calls, addresses } = buildUDCCall(payload, this.address);
        const invokeResponse = await this.execute(calls);
        return {
            ...invokeResponse,
            contract_address: addresses
        };
    }
    signMessage(typedData) {
        return signMessage(this.walletProvider, typedData);
    }
    static async connect(provider, walletProvider, cairoVersion, silentMode = false) {
        const [accountAddress] = await requestAccounts(walletProvider, silentMode);
        return new _WalletAccount(provider, walletProvider, cairoVersion, accountAddress);
    }
    static async connectSilent(provider, walletProvider, cairoVersion) {
        return _WalletAccount.connect(provider, walletProvider, cairoVersion, true);
    }
};
// src/contract/default.ts
var splitArgsAndOptions = (args)=>{
    const options = [
        "blockIdentifier",
        "parseRequest",
        "parseResponse",
        "formatResponse",
        "maxFee",
        "nonce",
        "signature",
        "addressSalt"
    ];
    const lastArg = args[args.length - 1];
    if (typeof lastArg === "object" && options.some((x)=>x in lastArg)) {
        return {
            args,
            options: args.pop()
        };
    }
    return {
        args
    };
};
function buildCall(contract, functionAbi) {
    return async function(...args) {
        const params = splitArgsAndOptions(args);
        return contract.call(functionAbi.name, params.args, {
            parseRequest: true,
            parseResponse: true,
            ...params.options
        });
    };
}
function buildInvoke(contract, functionAbi) {
    return async function(...args) {
        const params = splitArgsAndOptions(args);
        return contract.invoke(functionAbi.name, params.args, {
            parseRequest: true,
            ...params.options
        });
    };
}
function buildDefault(contract, functionAbi) {
    if (functionAbi.stateMutability === "view" || functionAbi.state_mutability === "view") {
        return buildCall(contract, functionAbi);
    }
    return buildInvoke(contract, functionAbi);
}
function buildPopulate(contract, functionAbi) {
    return function(...args) {
        return contract.populate(functionAbi.name, args);
    };
}
function buildEstimate(contract, functionAbi) {
    return function(...args) {
        return contract.estimate(functionAbi.name, args);
    };
}
function getCalldata(args, callback) {
    if (Array.isArray(args) && "__compiled__" in args) return args;
    if (Array.isArray(args) && Array.isArray(args[0]) && "__compiled__" in args[0]) return args[0];
    return callback();
}
var Contract = class {
    abi;
    address;
    providerOrAccount;
    deployTransactionHash;
    structs;
    events;
    functions;
    callStatic;
    populateTransaction;
    estimateFee;
    callData;
    /**
   * Contract class to handle contract methods
   *
   * @param abi - Abi of the contract object
   * @param address (optional) - address to connect to
   * @param providerOrAccount (optional) - Provider or Account to attach to
   */ constructor(abi, address, providerOrAccount = defaultProvider){
        this.address = address && address.toLowerCase();
        this.providerOrAccount = providerOrAccount;
        this.callData = new CallData(abi);
        this.structs = CallData.getAbiStruct(abi);
        this.events = getAbiEvents(abi);
        const parser = createAbiParser(abi);
        this.abi = parser.getLegacyFormat();
        const options = {
            enumerable: true,
            value: {},
            writable: false
        };
        Object.defineProperties(this, {
            functions: {
                enumerable: true,
                value: {},
                writable: false
            },
            callStatic: {
                enumerable: true,
                value: {},
                writable: false
            },
            populateTransaction: {
                enumerable: true,
                value: {},
                writable: false
            },
            estimateFee: {
                enumerable: true,
                value: {},
                writable: false
            }
        });
        this.abi.forEach((abiElement)=>{
            if (abiElement.type !== "function") return;
            const signature = abiElement.name;
            if (!this[signature]) {
                Object.defineProperty(this, signature, {
                    ...options,
                    value: buildDefault(this, abiElement)
                });
            }
            if (!this.functions[signature]) {
                Object.defineProperty(this.functions, signature, {
                    ...options,
                    value: buildDefault(this, abiElement)
                });
            }
            if (!this.callStatic[signature]) {
                Object.defineProperty(this.callStatic, signature, {
                    ...options,
                    value: buildCall(this, abiElement)
                });
            }
            if (!this.populateTransaction[signature]) {
                Object.defineProperty(this.populateTransaction, signature, {
                    ...options,
                    value: buildPopulate(this, abiElement)
                });
            }
            if (!this.estimateFee[signature]) {
                Object.defineProperty(this.estimateFee, signature, {
                    ...options,
                    value: buildEstimate(this, abiElement)
                });
            }
        });
    }
    attach(address) {
        this.address = address;
    }
    connect(providerOrAccount) {
        this.providerOrAccount = providerOrAccount;
    }
    async deployed() {
        if (this.deployTransactionHash) {
            await this.providerOrAccount.waitForTransaction(this.deployTransactionHash);
            this.deployTransactionHash = void 0;
        }
        return this;
    }
    async call(method, args = [], { parseRequest = true, parseResponse = true, formatResponse = void 0, blockIdentifier = void 0 } = {}) {
        assert(this.address !== null, "contract is not connected to an address");
        const calldata = getCalldata(args, ()=>{
            if (parseRequest) {
                this.callData.validate(ValidateType.CALL, method, args);
                return this.callData.compile(method, args);
            }
            logger.warn("Call skipped parsing but provided rawArgs, possible malfunction request");
            return args;
        });
        return this.providerOrAccount.callContract({
            contractAddress: this.address,
            calldata,
            entrypoint: method
        }, blockIdentifier).then((it)=>{
            if (!parseResponse) {
                return it;
            }
            if (formatResponse) {
                return this.callData.format(method, it, formatResponse);
            }
            return this.callData.parse(method, it);
        });
    }
    invoke(method, args = [], { parseRequest = true, maxFee, nonce, signature } = {}) {
        assert(this.address !== null, "contract is not connected to an address");
        const calldata = getCalldata(args, ()=>{
            if (parseRequest) {
                this.callData.validate(ValidateType.INVOKE, method, args);
                return this.callData.compile(method, args);
            }
            logger.warn("Invoke skipped parsing but provided rawArgs, possible malfunction request");
            return args;
        });
        const invocation = {
            contractAddress: this.address,
            calldata,
            entrypoint: method
        };
        if ("execute" in this.providerOrAccount) {
            return this.providerOrAccount.execute(invocation, void 0, {
                maxFee,
                nonce
            });
        }
        if (!nonce) throw new Error(`Nonce is required when invoking a function without an account`);
        logger.warn(`Invoking ${method} without an account. This will not work on a public node.`);
        return this.providerOrAccount.invokeFunction({
            ...invocation,
            signature
        }, {
            nonce
        });
    }
    async estimate(method, args = []) {
        assert(this.address !== null, "contract is not connected to an address");
        if (!getCalldata(args, ()=>false)) {
            this.callData.validate(ValidateType.INVOKE, method, args);
        }
        const invocation = this.populate(method, args);
        if ("estimateInvokeFee" in this.providerOrAccount) {
            return this.providerOrAccount.estimateInvokeFee(invocation);
        }
        throw Error("Contract must be connected to the account contract to estimate");
    }
    populate(method, args = []) {
        const calldata = getCalldata(args, ()=>this.callData.compile(method, args));
        return {
            contractAddress: this.address,
            entrypoint: method,
            calldata
        };
    }
    parseEvents(receipt) {
        let parsed;
        receipt.match({
            success: (txR)=>{
                const emittedEvents = txR.events?.map((event)=>{
                    return {
                        block_hash: txR.block_hash,
                        block_number: txR.block_number,
                        transaction_hash: txR.transaction_hash,
                        ...event
                    };
                }).filter((event)=>cleanHex(event.from_address) === cleanHex(this.address), []) || [];
                parsed = parseEvents(emittedEvents, this.events, this.structs, CallData.getAbiEnum(this.abi));
            },
            _: ()=>{
                throw Error("This transaction was not successful.");
            }
        });
        return parsed;
    }
    isCairo1() {
        return cairo_exports.isCairo1Abi(this.abi);
    }
    async getVersion() {
        return this.providerOrAccount.getContractVersion(this.address);
    }
    typedv2(tAbi) {
        return this;
    }
};
// src/contract/interface.ts
var ContractInterface = class {
    functions;
    callStatic;
    populateTransaction;
    estimateFee;
};
// src/contract/contractFactory.ts
var ContractFactory = class {
    compiledContract;
    account;
    abi;
    classHash;
    casm;
    compiledClassHash;
    CallData;
    /**
   * @param params CFParams
   *  - compiledContract: CompiledContract;
   *  - account: AccountInterface;
   *  - casm?: CairoAssembly;
   *  - classHash?: string;
   *  - compiledClassHash?: string;
   *  - abi?: Abi;
   */ constructor(params){
        this.compiledContract = params.compiledContract;
        this.account = params.account;
        this.casm = params.casm;
        this.abi = params.abi ?? params.compiledContract.abi;
        this.classHash = params.classHash;
        this.compiledClassHash = params.compiledClassHash;
        this.CallData = new CallData(this.abi);
    }
    /**
   * Deploys contract and returns new instance of the Contract
   *
   * If contract is not declared it will first declare it, and then deploy
   */ async deploy(...args) {
        const { args: param, options = {
            parseRequest: true
        } } = splitArgsAndOptions(args);
        const constructorCalldata = getCalldata(param, ()=>{
            if (options.parseRequest) {
                this.CallData.validate(ValidateType.DEPLOY, "constructor", param);
                return this.CallData.compile("constructor", param);
            }
            logger.warn("Call skipped parsing but provided rawArgs, possible malfunction request");
            return param;
        });
        const { deploy: { contract_address, transaction_hash } } = await this.account.declareAndDeploy({
            contract: this.compiledContract,
            casm: this.casm,
            classHash: this.classHash,
            compiledClassHash: this.compiledClassHash,
            constructorCalldata,
            salt: options.addressSalt
        });
        assert(Boolean(contract_address), "Deployment of the contract failed");
        const contractInstance = new Contract(this.compiledContract.abi, contract_address, this.account);
        contractInstance.deployTransactionHash = transaction_hash;
        return contractInstance;
    }
    /**
   * Attaches to new Account
   *
   * @param account - new Account to attach to
   */ connect(account) {
        this.account = account;
        return this;
    }
    /**
   * Attaches current abi and account to the new address
   */ attach(address) {
        return new Contract(this.abi, address, this.account);
    }
};
// src/utils/responseParser/interface.ts
var ResponseParser = class {
};
// src/utils/units.ts
function units(amount, simbol = "fri") {
    if (simbol === "strk") {
        let numStr = "";
        if (typeof amount === "bigint") numStr = amount.toString();
        else if (typeof amount === "string") {
            if (isHex(amount)) {
                numStr = BigInt(amount).toString();
            } else {
                numStr = amount;
            }
        }
        const [integer, decimal = "0"] = numStr.split(".");
        const pdec = decimal.padEnd(18, "0");
        return `${integer}${pdec}`.replace(/\b0+/g, "");
    }
    const bis = BigInt(amount).toString();
    let strk;
    if (bis.length <= 18) {
        strk = `0.${bis.padStart(18, "0")}`;
    } else {
        strk = `${bis.slice(0, bis.length - 18)}.${bis.slice(bis.length - 18)}`;
    }
    return strk.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1");
}
// src/index.ts
var number = num_exports;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lossless$2d$json$40$4$2e$0$2e$2$2f$node_modules$2f$lossless$2d$json$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lossless-json@4.0.2/node_modules/lossless-json/lib/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$starknet$40$1$2e$1$2e$0$2f$node_modules$2f40$scure$2f$starknet$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scure+starknet@1.1.0/node_modules/@scure/starknet/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pako$40$2$2e$1$2e$0$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pako@2.1.0/node_modules/pako/dist/pako.esm.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fetch$2d$cookie$40$3$2e$0$2e$1$2f$node_modules$2f$fetch$2d$cookie$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fetch-cookie@3.0.1/node_modules/fetch-cookie/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$isomorphic$2d$fetch$40$3$2e$0$2e$0$2f$node_modules$2f$isomorphic$2d$fetch$2f$fetch$2d$npm$2d$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/isomorphic-fetch@3.0.0/node_modules/isomorphic-fetch/fetch-npm-node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ts$2d$mixer$40$6$2e$0$2e$4$2f$node_modules$2f$ts$2d$mixer$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ts-mixer@6.0.4/node_modules/ts-mixer/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-rsc] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=0d53f_starknet_dist_index_mjs_3a270dec._.js.map