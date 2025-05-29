(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/core-d21d2e96.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "m": (()=>main)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var te = Object.defineProperty, ne = (t, e, o)=>e in t ? te(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[e] = o, _ = (t, e, o)=>(ne(t, typeof e != "symbol" ? e + "" : e, o), o), K = (t, e, o)=>{
    if (!e.has(t)) throw TypeError("Cannot " + o);
}, N = (t, e, o)=>(K(t, e, "read from private field"), o ? o.call(t) : e.get(t)), T = (t, e, o)=>{
    if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, o);
}, B = (t, e, o, n)=>(K(t, e, "write to private field"), n ? n.call(t, o) : e.set(t, o), o), E = (t, e, o)=>(K(t, e, "access private method"), o);
const generateUID = ()=>`${Date.now()}-${Math.floor(Math.random() * 8999999999999) + 1e12}`, shuffle = (t)=>{
    for(let e = t.length - 1; e > 0; e--){
        const o = Math.floor(Math.random() * (e + 1));
        [t[e], t[o]] = [
            t[o],
            t[e]
        ];
    }
    return t;
}, pipe$1 = (...t)=>(e)=>t.reduce((o, n)=>o.then(n), Promise.resolve(e));
function ensureKeysArray(t) {
    return Object.keys(t);
}
const ssrSafeWindow = typeof window < "u" ? window : null;
function getBuilderId() {
    return typeof FEDERATION_BUILD_IDENTIFIER < "u" ? FEDERATION_BUILD_IDENTIFIER : "";
}
function isDebugMode$1() {
    return !!"";
}
function isBrowserEnv$1() {
    return typeof window < "u";
}
const LOG_CATEGORY$1 = "[ Federation Runtime ]";
function assert(t, e) {
    t || error(e);
}
function error(t) {
    throw t instanceof Error ? (t.message = `${LOG_CATEGORY$1}: ${t.message}`, t) : new Error(`${LOG_CATEGORY$1}: ${t}`);
}
function warn$1(t) {
    t instanceof Error ? (t.message = `${LOG_CATEGORY$1}: ${t.message}`, console.warn(t)) : console.warn(`${LOG_CATEGORY$1}: ${t}`);
}
function addUniqueItem(t, e) {
    return t.findIndex((o)=>o === e) === -1 && t.push(e), t;
}
function getFMId(t) {
    return "version" in t && t.version ? `${t.name}:${t.version}` : "entry" in t && t.entry ? `${t.name}:${t.entry}` : `${t.name}`;
}
function isRemoteInfoWithEntry(t) {
    return typeof t.entry < "u";
}
function isPureRemoteEntry(t) {
    return !t.entry.includes(".json") && t.entry.includes(".js");
}
function safeToString$1(t) {
    try {
        return JSON.stringify(t, null, 2);
    } catch  {
        return "";
    }
}
function isObject(t) {
    return t && typeof t == "object";
}
const objectToString = Object.prototype.toString;
function isPlainObject(t) {
    return objectToString.call(t) === "[object Object]";
}
function _extends$1$1() {
    return _extends$1$1 = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, _extends$1$1.apply(this, arguments);
}
function _object_without_properties_loose$1(t, e) {
    if (t == null) return {};
    var o = {}, n = Object.keys(t), r, i;
    for(i = 0; i < n.length; i++)r = n[i], !(e.indexOf(r) >= 0) && (o[r] = t[r]);
    return o;
}
const nativeGlobal = (()=>{
    try {
        return new Function("return this")();
    } catch  {
        return globalThis;
    }
})(), Global = nativeGlobal;
function definePropertyGlobalVal(t, e, o) {
    Object.defineProperty(t, e, {
        value: o,
        configurable: !1,
        writable: !0
    });
}
function includeOwnProperty(t, e) {
    return Object.hasOwnProperty.call(t, e);
}
includeOwnProperty(globalThis, "__GLOBAL_LOADING_REMOTE_ENTRY__") || definePropertyGlobalVal(globalThis, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
const globalLoading = globalThis.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(t) {
    var e, o, n, r, i, a;
    includeOwnProperty(t, "__VMOK__") && !includeOwnProperty(t, "__FEDERATION__") && definePropertyGlobalVal(t, "__FEDERATION__", t.__VMOK__), includeOwnProperty(t, "__FEDERATION__") || (definePropertyGlobalVal(t, "__FEDERATION__", {
        __GLOBAL_PLUGIN__: [],
        __INSTANCES__: [],
        moduleInfo: {},
        __SHARE__: {},
        __MANIFEST_LOADING__: {},
        __PRELOADED_MAP__: /* @__PURE__ */ new Map()
    }), definePropertyGlobalVal(t, "__VMOK__", t.__FEDERATION__)), (e = t.__FEDERATION__).__GLOBAL_PLUGIN__ != null || (e.__GLOBAL_PLUGIN__ = []), (o = t.__FEDERATION__).__INSTANCES__ != null || (o.__INSTANCES__ = []), (n = t.__FEDERATION__).moduleInfo != null || (n.moduleInfo = {}), (r = t.__FEDERATION__).__SHARE__ != null || (r.__SHARE__ = {}), (i = t.__FEDERATION__).__MANIFEST_LOADING__ != null || (i.__MANIFEST_LOADING__ = {}), (a = t.__FEDERATION__).__PRELOADED_MAP__ != null || (a.__PRELOADED_MAP__ = /* @__PURE__ */ new Map());
}
setGlobalDefaultVal(globalThis);
setGlobalDefaultVal(nativeGlobal);
function getGlobalFederationInstance(t, e) {
    const o = getBuilderId();
    return globalThis.__FEDERATION__.__INSTANCES__.find((n)=>!!(o && n.options.id === getBuilderId() || n.options.name === t && !n.options.version && !e || n.options.name === t && e && n.options.version === e));
}
function setGlobalFederationInstance(t) {
    globalThis.__FEDERATION__.__INSTANCES__.push(t);
}
function getGlobalFederationConstructor() {
    return globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(t, e = isDebugMode$1()) {
    e && (globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = t, globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.1.2");
}
function getInfoWithoutType(t, e) {
    if (typeof e == "string") {
        if (t[e]) return {
            value: t[e],
            key: e
        };
        {
            const o = Object.keys(t);
            for (const n of o){
                const [r, i] = n.split(":"), a = `${r}:${e}`, s = t[a];
                if (s) return {
                    value: s,
                    key: a
                };
            }
            return {
                value: void 0,
                key: e
            };
        }
    } else throw new Error("key must be string");
}
const getGlobalSnapshot = ()=>nativeGlobal.__FEDERATION__.moduleInfo, getTargetSnapshotInfoByModuleInfo = (t, e)=>{
    const o = getFMId(t), n = getInfoWithoutType(e, o).value;
    if (n && !n.version && "version" in t && t.version && (n.version = t.version), n) return n;
    if ("version" in t && t.version) {
        const { version: r } = t, i = _object_without_properties_loose$1(t, [
            "version"
        ]), a = getFMId(i), s = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, a).value;
        if (s?.version === r) return s;
    }
}, getGlobalSnapshotInfoByModuleInfo = (t)=>getTargetSnapshotInfoByModuleInfo(t, nativeGlobal.__FEDERATION__.moduleInfo), setGlobalSnapshotInfoByModuleInfo = (t, e)=>{
    const o = getFMId(t);
    return nativeGlobal.__FEDERATION__.moduleInfo[o] = e, nativeGlobal.__FEDERATION__.moduleInfo;
}, addGlobalSnapshot = (t)=>(nativeGlobal.__FEDERATION__.moduleInfo = _extends$1$1({}, nativeGlobal.__FEDERATION__.moduleInfo, t), ()=>{
        const e = Object.keys(t);
        for (const o of e)delete nativeGlobal.__FEDERATION__.moduleInfo[o];
    }), getRemoteEntryExports = (t, e)=>{
    const o = e || `__FEDERATION_${t}:custom__`, n = globalThis[o];
    return {
        remoteEntryKey: o,
        entryExports: n
    };
}, getGlobalHostPlugins = ()=>nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__, getPreloaded = (t)=>globalThis.__FEDERATION__.__PRELOADED_MAP__.get(t), setPreloaded = (t)=>globalThis.__FEDERATION__.__PRELOADED_MAP__.set(t, !0), DEFAULT_SCOPE = "default", DEFAULT_REMOTE_TYPE = "global", buildIdentifier = "[0-9A-Za-z-]+", build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`, numericIdentifier = "0|[1-9]\\d*", numericIdentifierLoose = "[0-9]+", nonNumericIdentifier = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`, preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`, preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`, preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`, xRangeIdentifier = `${numericIdentifier}|x|X|\\*`, xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`, hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`, mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`, loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`, gtlt = "((?:<|>)?=?)", comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`, loneTilde = "(?:~>?)", tildeTrim = `(\\s*)${loneTilde}\\s+`, loneCaret = "(?:\\^)", caretTrim = `(\\s*)${loneCaret}\\s+`, star = "(<|>)?=?\\s*\\*", caret = `^${loneCaret}${xRangePlain}$`, mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`, fullPlain = `v?${mainVersion}${preRelease}?${build}?`, tilde = `^${loneTilde}${xRangePlain}$`, xRange = `^${gtlt}\\s*${xRangePlain}$`, comparator = `^${gtlt}\\s*(${fullPlain})$|^$`, gte0 = "^\\s*>=\\s*0.0.0\\s*$";
function parseRegex(t) {
    return new RegExp(t);
}
function isXVersion(t) {
    return !t || t.toLowerCase() === "x" || t === "*";
}
function pipe(...t) {
    return (e)=>t.reduce((o, n)=>n(o), e);
}
function extractComparator(t) {
    return t.match(parseRegex(comparator));
}
function combineVersion(t, e, o, n) {
    const r = `${t}.${e}.${o}`;
    return n ? `${r}-${n}` : r;
}
function parseHyphen(t) {
    return t.replace(parseRegex(hyphenRange), (e, o, n, r, i, a, s, c, l, u, h, g)=>(isXVersion(n) ? o = "" : isXVersion(r) ? o = `>=${n}.0.0` : isXVersion(i) ? o = `>=${n}.${r}.0` : o = `>=${o}`, isXVersion(l) ? c = "" : isXVersion(u) ? c = `<${Number(l) + 1}.0.0-0` : isXVersion(h) ? c = `<${l}.${Number(u) + 1}.0-0` : g ? c = `<=${l}.${u}.${h}-${g}` : c = `<=${c}`, `${o} ${c}`.trim()));
}
function parseComparatorTrim(t) {
    return t.replace(parseRegex(comparatorTrim), "$1$2$3");
}
function parseTildeTrim(t) {
    return t.replace(parseRegex(tildeTrim), "$1~");
}
function parseCaretTrim(t) {
    return t.replace(parseRegex(caretTrim), "$1^");
}
function parseCarets(t) {
    return t.trim().split(/\s+/).map((e)=>e.replace(parseRegex(caret), (o, n, r, i, a)=>isXVersion(n) ? "" : isXVersion(r) ? `>=${n}.0.0 <${Number(n) + 1}.0.0-0` : isXVersion(i) ? n === "0" ? `>=${n}.${r}.0 <${n}.${Number(r) + 1}.0-0` : `>=${n}.${r}.0 <${Number(n) + 1}.0.0-0` : a ? n === "0" ? r === "0" ? `>=${n}.${r}.${i}-${a} <${n}.${r}.${Number(i) + 1}-0` : `>=${n}.${r}.${i}-${a} <${n}.${Number(r) + 1}.0-0` : `>=${n}.${r}.${i}-${a} <${Number(n) + 1}.0.0-0` : n === "0" ? r === "0" ? `>=${n}.${r}.${i} <${n}.${r}.${Number(i) + 1}-0` : `>=${n}.${r}.${i} <${n}.${Number(r) + 1}.0-0` : `>=${n}.${r}.${i} <${Number(n) + 1}.0.0-0`)).join(" ");
}
function parseTildes(t) {
    return t.trim().split(/\s+/).map((e)=>e.replace(parseRegex(tilde), (o, n, r, i, a)=>isXVersion(n) ? "" : isXVersion(r) ? `>=${n}.0.0 <${Number(n) + 1}.0.0-0` : isXVersion(i) ? `>=${n}.${r}.0 <${n}.${Number(r) + 1}.0-0` : a ? `>=${n}.${r}.${i}-${a} <${n}.${Number(r) + 1}.0-0` : `>=${n}.${r}.${i} <${n}.${Number(r) + 1}.0-0`)).join(" ");
}
function parseXRanges(t) {
    return t.split(/\s+/).map((e)=>e.trim().replace(parseRegex(xRange), (o, n, r, i, a, s)=>{
            const c = isXVersion(r), l = c || isXVersion(i), u = l || isXVersion(a);
            return n === "=" && u && (n = ""), s = "", c ? n === ">" || n === "<" ? "<0.0.0-0" : "*" : n && u ? (l && (i = 0), a = 0, n === ">" ? (n = ">=", l ? (r = Number(r) + 1, i = 0, a = 0) : (i = Number(i) + 1, a = 0)) : n === "<=" && (n = "<", l ? r = Number(r) + 1 : i = Number(i) + 1), n === "<" && (s = "-0"), `${n + r}.${i}.${a}${s}`) : l ? `>=${r}.0.0${s} <${Number(r) + 1}.0.0-0` : u ? `>=${r}.${i}.0${s} <${r}.${Number(i) + 1}.0-0` : o;
        })).join(" ");
}
function parseStar(t) {
    return t.trim().replace(parseRegex(star), "");
}
function parseGTE0(t) {
    return t.trim().replace(parseRegex(gte0), "");
}
function compareAtom(t, e) {
    return t = Number(t) || t, e = Number(e) || e, t > e ? 1 : t === e ? 0 : -1;
}
function comparePreRelease(t, e) {
    const { preRelease: o } = t, { preRelease: n } = e;
    if (o === void 0 && n) return 1;
    if (o && n === void 0) return -1;
    if (o === void 0 && n === void 0) return 0;
    for(let r = 0, i = o.length; r <= i; r++){
        const a = o[r], s = n[r];
        if (a !== s) return a === void 0 && s === void 0 ? 0 : a ? s ? compareAtom(a, s) : -1 : 1;
    }
    return 0;
}
function compareVersion(t, e) {
    return compareAtom(t.major, e.major) || compareAtom(t.minor, e.minor) || compareAtom(t.patch, e.patch) || comparePreRelease(t, e);
}
function eq(t, e) {
    return t.version === e.version;
}
function compare(t, e) {
    switch(t.operator){
        case "":
        case "=":
            return eq(t, e);
        case ">":
            return compareVersion(t, e) < 0;
        case ">=":
            return eq(t, e) || compareVersion(t, e) < 0;
        case "<":
            return compareVersion(t, e) > 0;
        case "<=":
            return eq(t, e) || compareVersion(t, e) > 0;
        case void 0:
            return !0;
        default:
            return !1;
    }
}
function parseComparatorString(t) {
    return pipe(parseCarets, parseTildes, parseXRanges, parseStar)(t);
}
function parseRange(t) {
    return pipe(parseHyphen, parseComparatorTrim, parseTildeTrim, parseCaretTrim)(t.trim()).split(/\s+/).join(" ");
}
function satisfy(t, e) {
    if (!t) return !1;
    const o = parseRange(e).split(" ").map((u)=>parseComparatorString(u)).join(" ").split(/\s+/).map((u)=>parseGTE0(u)), n = extractComparator(t);
    if (!n) return !1;
    const [, r, , i, a, s, c] = n, l = {
        operator: r,
        version: combineVersion(i, a, s, c),
        major: i,
        minor: a,
        patch: s,
        preRelease: c?.split(".")
    };
    for (const u of o){
        const h = extractComparator(u);
        if (!h) return !1;
        const [, g, , p, d, m, M] = h, I = {
            operator: g,
            version: combineVersion(p, d, m, M),
            major: p,
            minor: d,
            patch: m,
            preRelease: M?.split(".")
        };
        if (!compare(I, l)) return !1;
    }
    return !0;
}
function _extends$6() {
    return _extends$6 = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, _extends$6.apply(this, arguments);
}
function formatShare(t, e) {
    let o;
    return "get" in t ? o = t.get : o = ()=>Promise.resolve(t.lib), _extends$6({
        deps: [],
        useIn: [],
        from: e,
        loading: null
    }, t, {
        shareConfig: _extends$6({
            requiredVersion: `^${t.version}`,
            singleton: !1,
            eager: !1,
            strictVersion: !1
        }, t.shareConfig),
        get: o,
        loaded: "lib" in t ? !0 : void 0,
        scope: Array.isArray(t.scope) ? t.scope : [
            "default"
        ],
        strategy: t.strategy || "version-first"
    });
}
function formatShareConfigs(t, e) {
    return t ? Object.keys(t).reduce((o, n)=>(o[n] = formatShare(t[n], e), o), {}) : {};
}
function versionLt(t, e) {
    const o = (n)=>{
        if (!Number.isNaN(Number(n))) {
            const r = n.split(".");
            let i = n;
            for(let a = 0; a < 3 - r.length; a++)i += ".0";
            return i;
        }
        return n;
    };
    return !!satisfy(o(t), `<=${o(e)}`);
}
const findVersion = (t, e, o, n)=>{
    const r = t[e][o], i = n || function(a, s) {
        return versionLt(a, s);
    };
    return Object.keys(r).reduce((a, s)=>!a || i(a, s) || a === "0" ? s : a, 0);
}, isLoaded = (t)=>!!t.loaded || typeof t.lib == "function";
function findSingletonVersionOrderByVersion(t, e, o) {
    const n = t[e][o];
    return findVersion(t, e, o, function(r, i) {
        return !isLoaded(n[r]) && versionLt(r, i);
    });
}
function findSingletonVersionOrderByLoaded(t, e, o) {
    const n = t[e][o];
    return findVersion(t, e, o, function(r, i) {
        return isLoaded(n[i]) ? isLoaded(n[r]) ? !!versionLt(r, i) : !0 : isLoaded(n[r]) ? !1 : versionLt(r, i);
    });
}
function getFindShareFunction(t) {
    return t === "loaded-first" ? findSingletonVersionOrderByLoaded : findSingletonVersionOrderByVersion;
}
function getRegisteredShare(t, e, o, n) {
    if (!t) return;
    const { shareConfig: r, scope: i = DEFAULT_SCOPE, strategy: a } = o, s = Array.isArray(i) ? i : [
        i
    ];
    for (const c of s)if (r && t[c] && t[c][e]) {
        const { requiredVersion: l } = r, u = getFindShareFunction(a)(t, c, e), h = ()=>{
            if (r.singleton) {
                if (typeof l == "string" && !satisfy(u, l)) {
                    const p = `Version ${u} from ${u && t[c][e][u].from} of shared singleton module ${e} does not satisfy the requirement of ${o.from} which needs ${l})`;
                    r.strictVersion ? error(p) : warn$1(p);
                }
                return t[c][e][u];
            } else {
                if (l === !1 || l === "*" || satisfy(u, l)) return t[c][e][u];
                for (const [p, d] of Object.entries(t[c][e]))if (satisfy(p, l)) return d;
            }
        }, g = {
            shareScopeMap: t,
            scope: c,
            pkgName: e,
            version: u,
            GlobalFederation: Global.__FEDERATION__,
            resolver: h
        };
        return (n.emit(g) || g).resolver();
    }
}
function getGlobalShareScope() {
    return Global.__FEDERATION__.__SHARE__;
}
function _define_property$3(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}
var MANIFEST_EXT = ".json", BROWSER_LOG_KEY = "FEDERATION_DEBUG", BROWSER_LOG_VALUE = "1", NameTransformSymbol = {
    AT: "@",
    HYPHEN: "-",
    SLASH: "/"
}, _obj, NameTransformMap = (_obj = {}, _define_property$3(_obj, NameTransformSymbol.AT, "scope_"), _define_property$3(_obj, NameTransformSymbol.HYPHEN, "_"), _define_property$3(_obj, NameTransformSymbol.SLASH, "__"), _obj), _obj1;
_obj1 = {}, _define_property$3(_obj1, NameTransformMap[NameTransformSymbol.AT], NameTransformSymbol.AT), _define_property$3(_obj1, NameTransformMap[NameTransformSymbol.HYPHEN], NameTransformSymbol.HYPHEN), _define_property$3(_obj1, NameTransformMap[NameTransformSymbol.SLASH], NameTransformSymbol.SLASH);
var SEPARATOR = ":";
function isBrowserEnv() {
    return typeof window < "u";
}
function isDebugMode() {
    return typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] < "u" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.FEDERATION_DEBUG ? !!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.FEDERATION_DEBUG : typeof FEDERATION_DEBUG < "u" && !!FEDERATION_DEBUG;
}
function _array_like_to_array$2(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for(var o = 0, n = new Array(e); o < e; o++)n[o] = t[o];
    return n;
}
function _array_without_holes(t) {
    if (Array.isArray(t)) return _array_like_to_array$2(t);
}
function _class_call_check(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for(var o = 0; o < e.length; o++){
        var n = e[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function _create_class(t, e, o) {
    return e && _defineProperties(t.prototype, e), o && _defineProperties(t, o), t;
}
function _define_property$2(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}
function _iterable_to_array$1(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(t) {
    return _array_without_holes(t) || _iterable_to_array$1(t) || _unsupported_iterable_to_array$2(t) || _non_iterable_spread();
}
function _unsupported_iterable_to_array$2(t, e) {
    if (t) {
        if (typeof t == "string") return _array_like_to_array$2(t, e);
        var o = Object.prototype.toString.call(t).slice(8, -1);
        if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(o);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return _array_like_to_array$2(t, e);
    }
}
function safeToString(t) {
    try {
        return JSON.stringify(t, null, 2);
    } catch  {
        return "";
    }
}
var DEBUG_LOG = "[ FEDERATION DEBUG ]";
function safeGetLocalStorageItem() {
    try {
        if (typeof window < "u" && window.localStorage) return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
    } catch  {
        return typeof document < "u";
    }
    return !1;
}
var Logger = /* @__PURE__ */ function() {
    function t(e) {
        _class_call_check(this, t), _define_property$2(this, "enable", !1), _define_property$2(this, "identifier", void 0), this.identifier = e || DEBUG_LOG, isBrowserEnv() && safeGetLocalStorageItem() ? this.enable = !0 : isDebugMode() && (this.enable = !0);
    }
    return _create_class(t, [
        {
            key: "info",
            value: function(e, o) {
                if (this.enable) {
                    var n = safeToString(o) || "";
                    isBrowserEnv() ? console.info("%c ".concat(this.identifier, ": ").concat(e, " ").concat(n), "color:#3300CC") : console.info("\x1B[34m%s", "".concat(this.identifier, ": ").concat(e, " ").concat(n ? `
`.concat(n) : ""));
                }
            }
        },
        {
            key: "logOriginalInfo",
            value: function() {
                for(var e = arguments.length, o = new Array(e), n = 0; n < e; n++)o[n] = arguments[n];
                if (this.enable) if (isBrowserEnv()) {
                    var r;
                    console.info("%c ".concat(this.identifier, ": OriginalInfo"), "color:#3300CC"), (r = console).log.apply(r, _to_consumable_array(o));
                } else {
                    var i;
                    console.info("%c ".concat(this.identifier, ": OriginalInfo"), "color:#3300CC"), (i = console).log.apply(i, _to_consumable_array(o));
                }
            }
        }
    ]), t;
}(), LOG_CATEGORY = "[ Federation Runtime ]";
new Logger();
var composeKeyWithSeparator = function() {
    for(var t = arguments.length, e = new Array(t), o = 0; o < t; o++)e[o] = arguments[o];
    return e.length ? e.reduce(function(n, r) {
        return r ? n ? "".concat(n).concat(SEPARATOR).concat(r) : r : n;
    }, "") : "";
}, getResourceUrl = function(t, e) {
    if ("getPublicPath" in t) {
        var o = new Function(t.getPublicPath)();
        return "".concat(o).concat(e);
    } else return "publicPath" in t ? "".concat(t.publicPath).concat(e) : (console.warn("Can not get resource url, if in debug mode, please ignore", t, e), "");
}, warn = function(t) {
    console.warn("".concat(LOG_CATEGORY, ": ").concat(t));
};
function _define_property$1(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}
function _object_spread$1(t) {
    for(var e = 1; e < arguments.length; e++){
        var o = arguments[e] != null ? arguments[e] : {}, n = Object.keys(o);
        typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(r) {
            return Object.getOwnPropertyDescriptor(o, r).enumerable;
        }))), n.forEach(function(r) {
            _define_property$1(t, r, o[r]);
        });
    }
    return t;
}
function ownKeys(t, e) {
    var o = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable;
        })), o.push.apply(o, n);
    }
    return o;
}
function _object_spread_props(t, e) {
    return e = e ?? {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : ownKeys(Object(e)).forEach(function(o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o));
    }), t;
}
var simpleJoinRemoteEntry = function(t, e) {
    if (!t) return e;
    var o = function(r) {
        if (r === ".") return "";
        if (r.startsWith("./")) return r.replace("./", "");
        if (r.startsWith("/")) {
            var i = r.slice(1);
            return i.endsWith("/") ? i.slice(0, -1) : i;
        }
        return r;
    }, n = o(t);
    return n ? n.endsWith("/") ? "".concat(n).concat(e) : "".concat(n, "/").concat(e) : e;
};
function generateSnapshotFromManifest(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, n, r = e.remotes, i = r === void 0 ? {} : r, a = e.overrides, s = a === void 0 ? {} : a, c = e.version, l, u = function() {
        return "publicPath" in t.metaData ? t.metaData.publicPath : t.metaData.getPublicPath;
    }, h = Object.keys(s), g = {};
    if (!Object.keys(i).length) {
        var p;
        g = ((p = t.remotes) === null || p === void 0 ? void 0 : p.reduce(function(w, R) {
            var U, W = R.federationContainerName;
            return h.includes(W) ? U = s[W] : "version" in R ? U = R.version : U = R.entry, w[W] = {
                matchedVersion: U
            }, w;
        }, {})) || {};
    }
    Object.keys(i).forEach(function(w) {
        return g[w] = {
            matchedVersion: h.includes(w) ? s[w] : i[w]
        };
    });
    var d = t.metaData, m = d.remoteEntry, M = m.path, I = m.name, D = m.type, S = d.types, O = d.buildInfo.buildVersion, L = d.globalName, v = t.exposes, y = {
        version: c || "",
        buildVersion: O,
        globalName: L,
        remoteEntry: simpleJoinRemoteEntry(M, I),
        remoteEntryType: D,
        remoteTypes: simpleJoinRemoteEntry(S.path, S.name),
        remoteTypesZip: S.zip || "",
        remoteTypesAPI: S.api || "",
        remotesInfo: g,
        shared: t?.shared.map(function(w) {
            return {
                assets: w.assets,
                sharedName: w.name
            };
        }),
        modules: v?.map(function(w) {
            return {
                moduleName: w.name,
                modulePath: w.path,
                assets: w.assets
            };
        })
    };
    if (!((o = t.metaData) === null || o === void 0) && o.prefetchInterface) {
        var A = t.metaData.prefetchInterface;
        y = _object_spread_props(_object_spread$1({}, y), {
            prefetchInterface: A
        });
    }
    if (!((n = t.metaData) === null || n === void 0) && n.prefetchEntry) {
        var b = t.metaData.prefetchEntry, x = b.path, H = b.name, $ = b.type;
        y = _object_spread_props(_object_spread$1({}, y), {
            prefetchEntry: simpleJoinRemoteEntry(x, H),
            prefetchEntryType: $
        });
    }
    return "publicPath" in t.metaData ? l = _object_spread_props(_object_spread$1({}, y), {
        publicPath: u()
    }) : l = _object_spread_props(_object_spread$1({}, y), {
        getPublicPath: u()
    }), l;
}
function isManifestProvider(t) {
    return !!("remoteEntry" in t && t.remoteEntry.includes(MANIFEST_EXT));
}
function asyncGeneratorStep$1(t, e, o, n, r, i, a) {
    try {
        var s = t[i](a), c = s.value;
    } catch (l) {
        o(l);
        return;
    }
    s.done ? e(c) : Promise.resolve(c).then(n, r);
}
function _async_to_generator$1(t) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(n, r) {
            var i = t.apply(e, o);
            function a(c) {
                asyncGeneratorStep$1(i, n, r, a, s, "next", c);
            }
            function s(c) {
                asyncGeneratorStep$1(i, n, r, a, s, "throw", c);
            }
            a(void 0);
        });
    };
}
function _instanceof(t, e) {
    return e != null && typeof Symbol < "u" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function _ts_generator$1(t, e) {
    var o, n, r, i, a = {
        label: 0,
        sent: function() {
            if (r[0] & 1) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    "TURBOPACK unreachable";
    function s(l) {
        return function(u) {
            return c([
                l,
                u
            ]);
        };
    }
    function c(l) {
        if (o) throw new TypeError("Generator is already executing.");
        for(; a;)try {
            if (o = 1, n && (r = l[0] & 2 ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
            switch(n = 0, r && (l = [
                l[0] & 2,
                r.value
            ]), l[0]){
                case 0:
                case 1:
                    r = l;
                    break;
                case 4:
                    return a.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    a.label++, n = l[1], l = [
                        0
                    ];
                    continue;
                case 7:
                    l = a.ops.pop(), a.trys.pop();
                    continue;
                default:
                    if (r = a.trys, !(r = r.length > 0 && r[r.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        a = 0;
                        continue;
                    }
                    if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) {
                        a.label = l[1];
                        break;
                    }
                    if (l[0] === 6 && a.label < r[1]) {
                        a.label = r[1], r = l;
                        break;
                    }
                    if (r && a.label < r[2]) {
                        a.label = r[2], a.ops.push(l);
                        break;
                    }
                    r[2] && a.ops.pop(), a.trys.pop();
                    continue;
            }
            l = e.call(t, a);
        } catch (u) {
            l = [
                6,
                u
            ], n = 0;
        } finally{
            o = r = 0;
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        };
    }
}
function safeWrapper(t, e) {
    return _safeWrapper.apply(this, arguments);
}
function _safeWrapper() {
    return _safeWrapper = _async_to_generator$1(function(t, e) {
        var o, n;
        return _ts_generator$1(this, function(r) {
            switch(r.label){
                case 0:
                    return r.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]), [
                        4,
                        t()
                    ];
                case 1:
                    return o = r.sent(), [
                        2,
                        o
                    ];
                case 2:
                    return n = r.sent(), !e && warn(n), [
                        2
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    }), _safeWrapper.apply(this, arguments);
}
function isStaticResourcesEqual(t, e) {
    var o = /^(https?:)?\/\//i, n = t.replace(o, "").replace(/\/$/, ""), r = e.replace(o, "").replace(/\/$/, "");
    return n === r;
}
function createScript(t, e, o, n) {
    for(var r = null, i = !0, a = document.getElementsByTagName("script"), s = 0; s < a.length; s++){
        var c = a[s], l = c.getAttribute("src");
        if (l && isStaticResourcesEqual(l, t)) {
            r = c, i = !1;
            break;
        }
    }
    if (!r && (r = document.createElement("script"), r.type = "text/javascript", r.src = t, n)) {
        var u = n(t);
        _instanceof(u, HTMLScriptElement) && (r = u);
    }
    o && Object.keys(o).forEach(function(g) {
        r && (g === "async" || g === "defer" ? r[g] = o[g] : r.setAttribute(g, o[g]));
    });
    var h = function(g, p) {
        if (r && (r.onerror = null, r.onload = null, safeWrapper(function() {
            r != null && r.parentNode && r.parentNode.removeChild(r);
        }), g)) {
            var d = g(p);
            return e(), d;
        }
        e();
    };
    return r.onerror = h.bind(null, r.onerror), r.onload = h.bind(null, r.onload), {
        script: r,
        needAttach: i
    };
}
function createLink(t, e) {
    for(var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 ? arguments[3] : void 0, r = null, i = !0, a = document.getElementsByTagName("link"), s = 0; s < a.length; s++){
        var c = a[s], l = c.getAttribute("href"), u = c.getAttribute("ref");
        if (l && isStaticResourcesEqual(l, t) && u === o.ref) {
            r = c, i = !1;
            break;
        }
    }
    if (!r && (r = document.createElement("link"), r.setAttribute("href", t), n)) {
        var h = n(t);
        _instanceof(h, HTMLLinkElement) && (r = h);
    }
    o && Object.keys(o).forEach(function(p) {
        r && r.setAttribute(p, o[p]);
    });
    var g = function(p, d) {
        if (r && (r.onerror = null, r.onload = null, safeWrapper(function() {
            r != null && r.parentNode && r.parentNode.removeChild(r);
        }), p)) {
            var m = p(d);
            return e(), m;
        }
        e();
    };
    return r.onerror = g.bind(null, r.onerror), r.onload = g.bind(null, r.onload), {
        link: r,
        needAttach: i
    };
}
function loadScript(t, e) {
    var o = e.attrs, n = e.createScriptHook;
    return new Promise(function(r, i) {
        var a = createScript(t, r, o, n), s = a.script, c = a.needAttach;
        c && document.getElementsByTagName("head")[0].appendChild(s);
    });
}
function _array_like_to_array(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for(var o = 0, n = new Array(e); o < e; o++)n[o] = t[o];
    return n;
}
function _array_with_holes(t) {
    if (Array.isArray(t)) return t;
}
function asyncGeneratorStep(t, e, o, n, r, i, a) {
    try {
        var s = t[i](a), c = s.value;
    } catch (l) {
        o(l);
        return;
    }
    s.done ? e(c) : Promise.resolve(c).then(n, r);
}
function _async_to_generator(t) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(n, r) {
            var i = t.apply(e, o);
            function a(c) {
                asyncGeneratorStep(i, n, r, a, s, "next", c);
            }
            function s(c) {
                asyncGeneratorStep(i, n, r, a, s, "throw", c);
            }
            a(void 0);
        });
    };
}
function _iterable_to_array_limit(t, e) {
    var o = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (o != null) {
        var n = [], r = !0, i = !1, a, s;
        try {
            for(o = o.call(t); !(r = (a = o.next()).done) && (n.push(a.value), !(e && n.length === e)); r = !0);
        } catch (c) {
            i = !0, s = c;
        } finally{
            try {
                !r && o.return != null && o.return();
            } finally{
                if (i) throw s;
            }
        }
        return n;
    }
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(t, e) {
    return _array_with_holes(t) || _iterable_to_array_limit(t, e) || _unsupported_iterable_to_array(t, e) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(t, e) {
    if (t) {
        if (typeof t == "string") return _array_like_to_array(t, e);
        var o = Object.prototype.toString.call(t).slice(8, -1);
        if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(o);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return _array_like_to_array(t, e);
    }
}
function _ts_generator(t, e) {
    var o, n, r, i, a = {
        label: 0,
        sent: function() {
            if (r[0] & 1) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    "TURBOPACK unreachable";
    function s(l) {
        return function(u) {
            return c([
                l,
                u
            ]);
        };
    }
    function c(l) {
        if (o) throw new TypeError("Generator is already executing.");
        for(; a;)try {
            if (o = 1, n && (r = l[0] & 2 ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
            switch(n = 0, r && (l = [
                l[0] & 2,
                r.value
            ]), l[0]){
                case 0:
                case 1:
                    r = l;
                    break;
                case 4:
                    return a.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    a.label++, n = l[1], l = [
                        0
                    ];
                    continue;
                case 7:
                    l = a.ops.pop(), a.trys.pop();
                    continue;
                default:
                    if (r = a.trys, !(r = r.length > 0 && r[r.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        a = 0;
                        continue;
                    }
                    if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) {
                        a.label = l[1];
                        break;
                    }
                    if (l[0] === 6 && a.label < r[1]) {
                        a.label = r[1], r = l;
                        break;
                    }
                    if (r && a.label < r[2]) {
                        a.label = r[2], a.ops.push(l);
                        break;
                    }
                    r[2] && a.ops.pop(), a.trys.pop();
                    continue;
            }
            l = e.call(t, a);
        } catch (u) {
            l = [
                6,
                u
            ], n = 0;
        } finally{
            o = r = 0;
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        };
    }
}
function importNodeModule(t) {
    if (!t) throw new Error("import specifier is required");
    var e = new Function("name", "return import(name)");
    return e(t).then(function(o) {
        return o.default;
    }).catch(function(o) {
        throw console.error("Error importing module ".concat(t, ":"), o), o;
    });
}
function createScriptNode(url, cb, attrs, createScriptHook) {
    if (createScriptHook) {
        var hookResult = createScriptHook(url);
        hookResult && typeof hookResult == "object" && "url" in hookResult && (url = hookResult.url);
    }
    var urlObj;
    try {
        urlObj = new URL(url);
    } catch (t) {
        console.error("Error constructing URL:", t), cb(new Error("Invalid URL: ".concat(t)));
        return;
    }
    var getFetch = function() {
        var t = _async_to_generator(function() {
            var e;
            return _ts_generator(this, function(o) {
                switch(o.label){
                    case 0:
                        return typeof fetch > "u" ? [
                            4,
                            importNodeModule("node-fetch")
                        ] : [
                            3,
                            2
                        ];
                    case 1:
                        return e = o.sent(), [
                            2,
                            e?.default || e
                        ];
                    case 2:
                        return [
                            2,
                            fetch
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function() {
            return t.apply(this, arguments);
        };
    }();
    console.log("fetching", urlObj.href), getFetch().then(function(f) {
        f(urlObj.href).then(function(t) {
            return t.text();
        }).then(function() {
            var _ref = _async_to_generator(function(data) {
                var _ref, path, vm, scriptContext, urlDirname, filename, script, exportedInterface, container;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all([
                                    importNodeModule("path"),
                                    importNodeModule("vm")
                                ])
                            ];
                        case 1:
                            _ref = _sliced_to_array.apply(void 0, [
                                _state.sent(),
                                2
                            ]), path = _ref[0], vm = _ref[1], scriptContext = {
                                exports: {},
                                module: {
                                    exports: {}
                                }
                            }, urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/"), filename = path.basename(urlObj.pathname);
                            try {
                                if (script = new vm.Script("(function(exports, module, require, __dirname, __filename) {".concat(data, `
})`), filename), script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename), exportedInterface = scriptContext.module.exports || scriptContext.exports, attrs && exportedInterface && attrs.globalName) return container = exportedInterface[attrs.globalName] || exportedInterface, cb(void 0, container), [
                                    2
                                ];
                                cb(void 0, exportedInterface);
                            } catch (t) {
                                cb(new Error("Script execution error: ".concat(t)));
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return function(t) {
                return _ref.apply(this, arguments);
            };
        }()).catch(function(t) {
            cb(t);
        });
    });
}
function loadScriptNode(t, e) {
    return new Promise(function(o, n) {
        createScriptNode(t, function(r, i) {
            if (r) n(r);
            else {
                var a, s, c = (e == null || (a = e.attrs) === null || a === void 0 ? void 0 : a.globalName) || "__FEDERATION_".concat(e == null || (s = e.attrs) === null || s === void 0 ? void 0 : s.name, ":custom__"), l = globalThis[c] = i;
                o(l);
            }
        }, e.attrs, e.createScriptHook);
    });
}
function matchRemoteWithNameAndExpose(t, e) {
    for (const o of t){
        const n = e.startsWith(o.name);
        let r = e.replace(o.name, "");
        if (n) {
            if (r.startsWith("/")) {
                const s = o.name;
                return r = `.${r}`, {
                    pkgNameOrAlias: s,
                    expose: r,
                    remote: o
                };
            } else if (r === "") return {
                pkgNameOrAlias: o.name,
                expose: ".",
                remote: o
            };
        }
        const i = o.alias && e.startsWith(o.alias);
        let a = o.alias && e.replace(o.alias, "");
        if (o.alias && i) {
            if (a && a.startsWith("/")) {
                const s = o.alias;
                return a = `.${a}`, {
                    pkgNameOrAlias: s,
                    expose: a,
                    remote: o
                };
            } else if (a === "") return {
                pkgNameOrAlias: o.alias,
                expose: ".",
                remote: o
            };
        }
    }
}
function matchRemote(t, e) {
    for (const o of t)if (e === o.name || o.alias && e === o.alias) return o;
}
function registerPlugins(t, e) {
    const o = getGlobalHostPlugins();
    o.length > 0 && o.forEach((n)=>{
        t != null && t.find((r)=>r.name !== n.name) && t.push(n);
    }), t && t.length > 0 && t.forEach((n)=>{
        e.forEach((r)=>{
            r.applyPlugin(n);
        });
    });
}
function _extends$5() {
    return _extends$5 = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, _extends$5.apply(this, arguments);
}
async function loadEsmEntry({ entry: t, remoteEntryExports: e }) {
    return new Promise((o, n)=>{
        try {
            e ? o(e) : new Function("callbacks", `import("${t}").then(callbacks[0]).catch(callbacks[1])`)([
                o,
                n
            ]);
        } catch (r) {
            n(r);
        }
    });
}
async function loadEntryScript({ name: t, globalName: e, entry: o, createScriptHook: n }) {
    const { entryExports: r } = getRemoteEntryExports(t, e);
    return r || (typeof document > "u" ? loadScriptNode(o, {
        attrs: {
            name: t,
            globalName: e
        },
        createScriptHook: n
    }).then(()=>{
        const { remoteEntryKey: i, entryExports: a } = getRemoteEntryExports(t, e);
        return assert(a, `
        Unable to use the ${t}'s '${o}' URL with ${i}'s globalName to get remoteEntry exports.
        Possible reasons could be:

        1. '${o}' is not the correct URL, or the remoteEntry resource or name is incorrect.

        2. ${i} cannot be used to get remoteEntry exports in the window object.
      `), a;
    }).catch((i)=>i) : loadScript(o, {
        attrs: {},
        createScriptHook: n
    }).then(()=>{
        const { remoteEntryKey: i, entryExports: a } = getRemoteEntryExports(t, e);
        return assert(a, `
      Unable to use the ${t}'s '${o}' URL with ${i}'s globalName to get remoteEntry exports.
      Possible reasons could be:

      1. '${o}' is not the correct URL, or the remoteEntry resource or name is incorrect.

      2. ${i} cannot be used to get remoteEntry exports in the window object.
    `), a;
    }).catch((i)=>i));
}
function getRemoteEntryUniqueKey(t) {
    const { entry: e, name: o } = t;
    return composeKeyWithSeparator(o, e);
}
async function getRemoteEntry({ remoteEntryExports: t, remoteInfo: e, createScriptHook: o }) {
    const { entry: n, name: r, type: i, entryGlobalName: a } = e, s = getRemoteEntryUniqueKey(e);
    return t || (globalLoading[s] || (i === "esm" ? globalLoading[s] = loadEsmEntry({
        entry: n,
        remoteEntryExports: t
    }) : globalLoading[s] = loadEntryScript({
        name: r,
        globalName: a,
        entry: n,
        createScriptHook: o
    })), globalLoading[s]);
}
function getRemoteInfo(t) {
    return _extends$5({}, t, {
        entry: "entry" in t ? t.entry : "",
        type: t.type || DEFAULT_REMOTE_TYPE,
        entryGlobalName: t.entryGlobalName || t.name,
        shareScope: t.shareScope || DEFAULT_SCOPE
    });
}
function _extends$4() {
    return _extends$4 = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, _extends$4.apply(this, arguments);
}
let Module = class {
    async getEntry() {
        if (this.remoteEntryExports) return this.remoteEntryExports;
        const t = await getRemoteEntry({
            remoteInfo: this.remoteInfo,
            remoteEntryExports: this.remoteEntryExports,
            createScriptHook: (e)=>{
                const o = this.host.loaderHook.lifecycle.createScript.emit({
                    url: e
                });
                if (typeof document > "u" || o instanceof HTMLScriptElement) return o;
            }
        });
        return assert(t, `remoteEntryExports is undefined 
 ${safeToString$1(this.remoteInfo)}`), this.remoteEntryExports = t, this.remoteEntryExports;
    }
    async get(t, e) {
        const { loadFactory: o = !0 } = e || {
            loadFactory: !0
        }, n = await this.getEntry();
        if (!this.inited) {
            const i = this.host.shareScopeMap, a = this.remoteInfo.shareScope || "default";
            i[a] || (i[a] = {});
            const s = i[a], c = [], l = {
                version: this.remoteInfo.version || ""
            };
            Object.defineProperty(l, "hostId", {
                value: this.host.options.id || this.host.name,
                enumerable: !1
            });
            const u = await this.host.hooks.lifecycle.beforeInitContainer.emit({
                shareScope: s,
                remoteEntryInitOptions: l,
                initScope: c,
                remoteInfo: this.remoteInfo,
                origin: this.host
            });
            await n.init(u.shareScope, u.initScope, u.remoteEntryInitOptions), await this.host.hooks.lifecycle.initContainer.emit(_extends$4({}, u, {
                remoteEntryExports: n
            }));
        }
        this.lib = n, this.inited = !0;
        const r = await n.get(t);
        return assert(r, `${getFMId(this.remoteInfo)} remote don't export ${t}.`), o ? await r() : r;
    }
    constructor({ remoteInfo: t, host: e }){
        this.inited = !1, this.lib = void 0, this.remoteInfo = t, this.host = e;
    }
};
class SyncHook {
    on(e) {
        typeof e == "function" && this.listeners.add(e);
    }
    once(e) {
        const o = this;
        this.on(function n(...r) {
            return o.remove(n), e.apply(null, r);
        });
    }
    emit(...e) {
        let o;
        return this.listeners.size > 0 && this.listeners.forEach((n)=>{
            o = n(...e);
        }), o;
    }
    remove(e) {
        this.listeners.delete(e);
    }
    removeAll() {
        this.listeners.clear();
    }
    constructor(e){
        this.type = "", this.listeners = /* @__PURE__ */ new Set(), e && (this.type = e);
    }
}
class AsyncHook extends SyncHook {
    emit(...e) {
        let o;
        const n = Array.from(this.listeners);
        if (n.length > 0) {
            let r = 0;
            const i = (a)=>a === !1 ? !1 : r < n.length ? Promise.resolve(n[r++].apply(null, e)).then(i) : a;
            o = i();
        }
        return Promise.resolve(o);
    }
}
function checkReturnData(t, e) {
    if (!isObject(e)) return !1;
    if (t !== e) {
        for(const o in t)if (!(o in e)) return !1;
    }
    return !0;
}
class SyncWaterfallHook extends SyncHook {
    emit(e) {
        isObject(e) || error(`The data for the "${this.type}" hook should be an object.`);
        for (const o of this.listeners)try {
            const n = o(e);
            if (checkReturnData(e, n)) e = n;
            else {
                this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
                break;
            }
        } catch (n) {
            warn$1(n), this.onerror(n);
        }
        return e;
    }
    constructor(e){
        super(), this.onerror = error, this.type = e;
    }
}
class AsyncWaterfallHook extends SyncHook {
    emit(e) {
        isObject(e) || error(`The response data for the "${this.type}" hook must be an object.`);
        const o = Array.from(this.listeners);
        if (o.length > 0) {
            let n = 0;
            const r = (a)=>(warn$1(a), this.onerror(a), e), i = (a)=>{
                if (checkReturnData(e, a)) {
                    if (e = a, n < o.length) try {
                        return Promise.resolve(o[n++](e)).then(i, r);
                    } catch (s) {
                        return r(s);
                    }
                } else this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
                return e;
            };
            return Promise.resolve(i(e));
        }
        return Promise.resolve(e);
    }
    constructor(e){
        super(), this.onerror = error, this.type = e;
    }
}
class PluginSystem {
    applyPlugin(e) {
        assert(isPlainObject(e), "Plugin configuration is invalid.");
        const o = e.name;
        assert(o, "A name must be provided by the plugin."), this.registerPlugins[o] || (this.registerPlugins[o] = e, Object.keys(this.lifecycle).forEach((n)=>{
            const r = e[n];
            r && this.lifecycle[n].on(r);
        }));
    }
    removePlugin(e) {
        assert(e, "A name is required.");
        const o = this.registerPlugins[e];
        assert(o, `The plugin "${e}" is not registered.`), Object.keys(o).forEach((n)=>{
            n !== "name" && this.lifecycle[n].remove(o[n]);
        });
    }
    inherit({ lifecycle: e, registerPlugins: o }) {
        Object.keys(e).forEach((n)=>{
            assert(!this.lifecycle[n], `The hook "${n}" has a conflict and cannot be inherited.`), this.lifecycle[n] = e[n];
        }), Object.keys(o).forEach((n)=>{
            assert(!this.registerPlugins[n], `The plugin "${n}" has a conflict and cannot be inherited.`), this.applyPlugin(o[n]);
        });
    }
    constructor(e){
        this.registerPlugins = {}, this.lifecycle = e, this.lifecycleKeys = Object.keys(e);
    }
}
function _extends$3() {
    return _extends$3 = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, _extends$3.apply(this, arguments);
}
function defaultPreloadArgs(t) {
    return _extends$3({
        resourceCategory: "sync",
        share: !0,
        depsRemote: !0,
        prefetchInterface: !1
    }, t);
}
function formatPreloadArgs(t, e) {
    return e.map((o)=>{
        const n = matchRemote(t, o.nameOrAlias);
        return assert(n, `Unable to preload ${o.nameOrAlias} as it is not included in ${!n && safeToString$1({
            remoteInfo: n,
            remotes: t
        })}`), {
            remote: n,
            preloadConfig: defaultPreloadArgs(o)
        };
    });
}
function normalizePreloadExposes(t) {
    return t ? t.map((e)=>e === "." ? e : e.startsWith("./") ? e.replace("./", "") : e) : [];
}
function preloadAssets(t, e, o) {
    const { cssAssets: n, jsAssetsWithoutEntry: r, entryAssets: i } = o;
    if (e.options.inBrowser) {
        i.forEach((s)=>{
            const { moduleInfo: c } = s, l = e.moduleCache.get(t.name);
            getRemoteEntry(l ? {
                remoteInfo: c,
                remoteEntryExports: l.remoteEntryExports,
                createScriptHook: (u)=>{
                    const h = e.loaderHook.lifecycle.createScript.emit({
                        url: u
                    });
                    if (h instanceof HTMLScriptElement) return h;
                }
            } : {
                remoteInfo: c,
                remoteEntryExports: void 0,
                createScriptHook: (u)=>{
                    const h = e.loaderHook.lifecycle.createScript.emit({
                        url: u
                    });
                    if (h instanceof HTMLScriptElement) return h;
                }
            });
        });
        const a = document.createDocumentFragment();
        n.forEach((s)=>{
            const { link: c, needAttach: l } = createLink(s, ()=>{}, {
                rel: "preload",
                as: "style"
            }, (u)=>{
                const h = e.loaderHook.lifecycle.createLink.emit({
                    url: u
                });
                if (h instanceof HTMLLinkElement) return h;
            });
            l && a.appendChild(c);
        }), r.forEach((s)=>{
            const { link: c, needAttach: l } = createLink(s, ()=>{}, {
                rel: "preload",
                as: "script"
            }, (u)=>{
                const h = e.loaderHook.lifecycle.createLink.emit({
                    url: u
                });
                if (h instanceof HTMLLinkElement) return h;
            });
            l && document.head.appendChild(c);
        }), document.head.appendChild(a);
    }
}
function _extends$2() {
    return _extends$2 = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, _extends$2.apply(this, arguments);
}
function assignRemoteInfo(t, e) {
    (!("remoteEntry" in e) || !e.remoteEntry) && error(`The attribute remoteEntry of ${name} must not be undefined.`);
    const { remoteEntry: o } = e, n = getResourceUrl(e, o);
    t.type = e.remoteEntryType, t.entryGlobalName = e.globalName, t.entry = n, t.version = e.version, t.buildVersion = e.buildVersion;
}
function snapshotPlugin() {
    return {
        name: "snapshot-plugin",
        async afterResolve (t) {
            const { remote: e, pkgNameOrAlias: o, expose: n, origin: r, remoteInfo: i } = t;
            if (!isRemoteInfoWithEntry(e) || !isPureRemoteEntry(e)) {
                const { remoteSnapshot: a, globalSnapshot: s } = await r.snapshotHandler.loadRemoteSnapshotInfo(e);
                assignRemoteInfo(i, a);
                const c = {
                    remote: e,
                    preloadConfig: {
                        nameOrAlias: o,
                        exposes: [
                            n
                        ],
                        resourceCategory: "sync",
                        share: !1,
                        depsRemote: !1
                    }
                }, l = await r.hooks.lifecycle.generatePreloadAssets.emit({
                    origin: r,
                    preloadOptions: c,
                    remoteInfo: i,
                    remote: e,
                    remoteSnapshot: a,
                    globalSnapshot: s
                });
                return l && preloadAssets(i, r, l), _extends$2({}, t, {
                    remoteSnapshot: a
                });
            }
            return t;
        }
    };
}
function splitId(t) {
    const e = t.split(":");
    return e.length === 1 ? {
        name: e[0],
        version: void 0
    } : e.length === 2 ? {
        name: e[0],
        version: e[1]
    } : {
        name: e[1],
        version: e[2]
    };
}
function traverseModuleInfo(t, e, o, n, r = {}, i) {
    const a = getFMId(e), { value: s } = getInfoWithoutType(t, a), c = i || s;
    if (c && !isManifestProvider(c) && (o(c, e, n), c.remotesInfo)) {
        const l = Object.keys(c.remotesInfo);
        for (const u of l){
            if (r[u]) continue;
            r[u] = !0;
            const h = splitId(u), g = c.remotesInfo[u];
            traverseModuleInfo(t, {
                name: h.name,
                version: g.matchedVersion
            }, o, !1, r, void 0);
        }
    }
}
function generatePreloadAssets(t, e, o, n, r) {
    const i = [], a = [], s = [], c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), { options: u } = t, { preloadConfig: h } = e, { depsRemote: g } = h;
    traverseModuleInfo(n, o, (d, m, M)=>{
        let I;
        if (M) I = h;
        else if (Array.isArray(g)) {
            const y = g.find((A)=>A.nameOrAlias === m.name || A.nameOrAlias === m.alias);
            if (!y) return;
            I = defaultPreloadArgs(y);
        } else if (g === !0) I = h;
        else return;
        const D = getResourceUrl(d, "remoteEntry" in d ? d.remoteEntry : "");
        D && s.push({
            name: m.name,
            moduleInfo: {
                name: m.name,
                entry: D,
                type: "remoteEntryType" in d ? d.remoteEntryType : "global",
                entryGlobalName: "globalName" in d ? d.globalName : m.name,
                shareScope: "",
                version: "version" in d ? d.version : void 0
            },
            url: D
        });
        let S = "modules" in d ? d.modules : [];
        const O = normalizePreloadExposes(I.exposes);
        if (O.length && "modules" in d) {
            var L;
            S = d == null || (L = d.modules) == null ? void 0 : L.reduce((y, A)=>(O?.indexOf(A.moduleName) !== -1 && y.push(A), y), []);
        }
        function v(y) {
            const A = y.map((b)=>getResourceUrl(d, b));
            return I.filter ? A.filter(I.filter) : A;
        }
        if (S) {
            const y = S.length;
            for(let A = 0; A < y; A++){
                const b = S[A], x = `${m.name}/${b.moduleName}`;
                t.hooks.lifecycle.handlePreloadModule.emit({
                    id: b.moduleName === "." ? m.name : x,
                    name: m.name,
                    remoteSnapshot: d,
                    preloadConfig: I,
                    remote: m,
                    origin: t
                }), !getPreloaded(x) && (I.resourceCategory === "all" ? (i.push(...v(b.assets.css.async)), i.push(...v(b.assets.css.sync)), a.push(...v(b.assets.js.async)), a.push(...v(b.assets.js.sync))) : (I.resourceCategory = "sync") && (i.push(...v(b.assets.css.sync)), a.push(...v(b.assets.js.sync))), setPreloaded(x));
            }
        }
    }, !0, {}, r), r.shared && r.shared.forEach((d)=>{
        var m;
        const M = (m = u.shared) == null ? void 0 : m[d.sharedName];
        if (!M) return;
        const I = getRegisteredShare(t.shareScopeMap, d.sharedName, M, t.hooks.lifecycle.resolveShare);
        I && typeof I.lib == "function" && (d.assets.js.sync.forEach((D)=>{
            c.add(D);
        }), d.assets.css.sync.forEach((D)=>{
            l.add(D);
        }));
    });
    const p = a.filter((d)=>!c.has(d));
    return {
        cssAssets: i.filter((d)=>!l.has(d)),
        jsAssetsWithoutEntry: p,
        entryAssets: s
    };
}
const generatePreloadAssetsPlugin = function() {
    return {
        name: "generate-preload-assets-plugin",
        async generatePreloadAssets (t) {
            const { origin: e, preloadOptions: o, remoteInfo: n, remote: r, globalSnapshot: i, remoteSnapshot: a } = t;
            return isRemoteInfoWithEntry(r) && isPureRemoteEntry(r) ? {
                cssAssets: [],
                jsAssetsWithoutEntry: [],
                entryAssets: [
                    {
                        name: r.name,
                        url: r.entry,
                        moduleInfo: {
                            name: n.name,
                            entry: r.entry,
                            type: "global",
                            entryGlobalName: "",
                            shareScope: ""
                        }
                    }
                ]
            } : (assignRemoteInfo(n, a), generatePreloadAssets(e, o, n, i, a));
        }
    };
};
function _extends$1() {
    return _extends$1 = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, _extends$1.apply(this, arguments);
}
class SnapshotHandler {
    async loadSnapshot(e) {
        const { options: o } = this.HostInstance, { hostGlobalSnapshot: n, remoteSnapshot: r, globalSnapshot: i } = this.getGlobalRemoteInfo(e), { remoteSnapshot: a, globalSnapshot: s } = await this.hooks.lifecycle.loadSnapshot.emit({
            options: o,
            moduleInfo: e,
            hostGlobalSnapshot: n,
            remoteSnapshot: r,
            globalSnapshot: i
        });
        return {
            remoteSnapshot: a,
            globalSnapshot: s
        };
    }
    async loadRemoteSnapshotInfo(e) {
        const { options: o } = this.HostInstance;
        await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
            options: o,
            moduleInfo: e
        });
        let n = getGlobalSnapshotInfoByModuleInfo({
            name: this.HostInstance.options.name,
            version: this.HostInstance.options.version
        });
        n || (n = {
            version: this.HostInstance.options.version || "",
            remoteEntry: "",
            remotesInfo: {}
        }, addGlobalSnapshot({
            [this.HostInstance.options.name]: n
        })), n && "remotesInfo" in n && !getInfoWithoutType(n.remotesInfo, e.name).value && ("version" in e || "entry" in e) && (n.remotesInfo = _extends$1({}, n?.remotesInfo, {
            [e.name]: {
                matchedVersion: "version" in e ? e.version : e.entry
            }
        }));
        const { hostGlobalSnapshot: r, remoteSnapshot: i, globalSnapshot: a } = this.getGlobalRemoteInfo(e), { remoteSnapshot: s, globalSnapshot: c } = await this.hooks.lifecycle.loadSnapshot.emit({
            options: o,
            moduleInfo: e,
            hostGlobalSnapshot: r,
            remoteSnapshot: i,
            globalSnapshot: a
        });
        if (s) if (isManifestProvider(s)) {
            const l = await this.getManifestJson(s.remoteEntry, e, {}), u = setGlobalSnapshotInfoByModuleInfo(_extends$1({}, e, {
                entry: s.remoteEntry
            }), l);
            return {
                remoteSnapshot: l,
                globalSnapshot: u
            };
        } else {
            const { remoteSnapshot: l } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo: e,
                remoteSnapshot: s,
                from: "global"
            });
            return {
                remoteSnapshot: l,
                globalSnapshot: c
            };
        }
        else if (isRemoteInfoWithEntry(e)) {
            const l = await this.getManifestJson(e.entry, e, {}), u = setGlobalSnapshotInfoByModuleInfo(e, l), { remoteSnapshot: h } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo: e,
                remoteSnapshot: l,
                from: "global"
            });
            return {
                remoteSnapshot: h,
                globalSnapshot: u
            };
        } else error(`
          Cannot get remoteSnapshot with the name: '${e.name}', version: '${e.version}' from __FEDERATION__.moduleInfo. The following reasons may be causing the problem:

          1. The Deploy platform did not deliver the correct data. You can use __FEDERATION__.moduleInfo to check the remoteInfo.

          2. The remote '${e.name}' version '${e.version}' is not released.

          The transformed module info: ${JSON.stringify(c)}
        `);
    }
    getGlobalRemoteInfo(e) {
        const o = getGlobalSnapshotInfoByModuleInfo({
            name: this.HostInstance.options.name,
            version: this.HostInstance.options.version
        }), n = o && "remotesInfo" in o && o.remotesInfo && getInfoWithoutType(o.remotesInfo, e.name).value;
        return n && n.matchedVersion ? {
            hostGlobalSnapshot: o,
            globalSnapshot: getGlobalSnapshot(),
            remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
                name: e.name,
                version: n.matchedVersion
            })
        } : {
            hostGlobalSnapshot: void 0,
            globalSnapshot: getGlobalSnapshot(),
            remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
                name: e.name,
                version: "version" in e ? e.version : void 0
            })
        };
    }
    async getManifestJson(e, o, n) {
        const r = async ()=>{
            let a = this.manifestCache.get(e);
            if (a) return a;
            try {
                let s = await this.loaderHook.lifecycle.fetch.emit(e, {});
                return (!s || !(s instanceof Response)) && (s = await fetch(e, {})), a = await s.json(), assert(a.metaData && a.exposes && a.shared, `${e} is not a federation manifest`), this.manifestCache.set(e, a), a;
            } catch (s) {
                error(`Failed to get manifestJson for ${o.name}. The manifest URL is ${e}. Please ensure that the manifestUrl is accessible.
          
 Error message:
          
 ${s}`);
            }
        }, i = async ()=>{
            const a = await r(), s = generateSnapshotFromManifest(a, {
                version: e
            }), { remoteSnapshot: c } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo: o,
                manifestJson: a,
                remoteSnapshot: s,
                manifestUrl: e,
                from: "manifest"
            });
            return c;
        };
        return this.manifestLoading[e] || (this.manifestLoading[e] = i().then((a)=>a)), this.manifestLoading[e];
    }
    constructor(e){
        this.loadingHostSnapshot = null, this.manifestCache = /* @__PURE__ */ new Map(), this.hooks = new PluginSystem({
            beforeLoadRemoteSnapshot: new AsyncHook("beforeLoadRemoteSnapshot"),
            loadSnapshot: new AsyncWaterfallHook("loadGlobalSnapshot"),
            loadRemoteSnapshot: new AsyncWaterfallHook("loadRemoteSnapshot")
        }), this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__, this.HostInstance = e, this.loaderHook = e.loaderHook;
    }
}
function _extends() {
    return _extends = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, _extends.apply(this, arguments);
}
function _object_without_properties_loose(t, e) {
    if (t == null) return {};
    var o = {}, n = Object.keys(t), r, i;
    for(i = 0; i < n.length; i++)r = n[i], !(e.indexOf(r) >= 0) && (o[r] = t[r]);
    return o;
}
class FederationHost {
    _setGlobalShareScopeMap() {
        const e = getGlobalShareScope(), o = this.options.id || this.options.name;
        o && !e[o] && (e[o] = this.shareScopeMap);
    }
    initOptions(e) {
        this.registerPlugins(e.plugins);
        const o = this.formatOptions(this.options, e);
        return this.options = o, o;
    }
    async loadShare(e, o) {
        var n;
        const r = Object.assign({}, (n = this.options.shared) == null ? void 0 : n[e], o);
        r != null && r.scope && await Promise.all(r.scope.map(async (l)=>{
            await Promise.all(this.initializeSharing(l, r.strategy));
        }));
        const i = await this.hooks.lifecycle.beforeLoadShare.emit({
            pkgName: e,
            shareInfo: r,
            shared: this.options.shared,
            origin: this
        }), { shareInfo: a } = i;
        assert(a, `Cannot find ${e} Share in the ${this.options.name}. Please ensure that the ${e} Share parameters have been injected`);
        const s = getRegisteredShare(this.shareScopeMap, e, a, this.hooks.lifecycle.resolveShare), c = (l)=>{
            l.useIn || (l.useIn = []), addUniqueItem(l.useIn, this.options.name);
        };
        if (s && s.lib) return c(s), s.lib;
        if (s && s.loading && !s.loaded) {
            const l = await s.loading;
            return s.loaded = !0, s.lib || (s.lib = l), c(s), l;
        } else if (s) {
            const l = (async ()=>{
                const u = await s.get();
                a.lib = u, a.loaded = !0, c(a);
                const h = getRegisteredShare(this.shareScopeMap, e, a, this.hooks.lifecycle.resolveShare);
                return h && (h.lib = u, h.loaded = !0), u;
            })();
            return this.setShared({
                pkgName: e,
                loaded: !1,
                shared: s,
                from: this.options.name,
                lib: null,
                loading: l
            }), l;
        } else {
            if (o) return !1;
            const l = (async ()=>{
                const u = await a.get();
                a.lib = u, a.loaded = !0, c(a);
                const h = getRegisteredShare(this.shareScopeMap, e, a, this.hooks.lifecycle.resolveShare);
                return h && (h.lib = u, h.loaded = !0), u;
            })();
            return this.setShared({
                pkgName: e,
                loaded: !1,
                shared: a,
                from: this.options.name,
                lib: null,
                loading: l
            }), l;
        }
    }
    loadShareSync(e, o) {
        var n;
        const r = Object.assign({}, (n = this.options.shared) == null ? void 0 : n[e], o);
        r != null && r.scope && r.scope.forEach((s)=>{
            this.initializeSharing(s, r.strategy);
        });
        const i = getRegisteredShare(this.shareScopeMap, e, r, this.hooks.lifecycle.resolveShare), a = (s)=>{
            s.useIn || (s.useIn = []), addUniqueItem(s.useIn, this.options.name);
        };
        if (i) {
            if (typeof i.lib == "function") return a(i), i.loaded || (i.loaded = !0, i.from === this.options.name && (r.loaded = !0)), i.lib;
            if (typeof i.get == "function") {
                const s = i.get();
                if (!(s instanceof Promise)) return a(i), this.setShared({
                    pkgName: e,
                    loaded: !0,
                    from: this.options.name,
                    lib: s,
                    shared: i
                }), s;
            }
        }
        if (r.lib) return r.loaded || (r.loaded = !0), r.lib;
        if (r.get) {
            const s = r.get();
            if (s instanceof Promise) throw new Error(`
        The loadShareSync function was unable to load ${e}. The ${e} could not be found in ${this.options.name}.
        Possible reasons for failure: 

        1. The ${e} share was registered with the 'get' attribute, but loadShare was not used beforehand.

        2. The ${e} share was not registered with the 'lib' attribute.

      `);
            return r.lib = s, this.setShared({
                pkgName: e,
                loaded: !0,
                from: this.options.name,
                lib: r.lib,
                shared: r
            }), r.lib;
        }
        throw new Error(`
        The loadShareSync function was unable to load ${e}. The ${e} could not be found in ${this.options.name}.
        Possible reasons for failure: 

        1. The ${e} share was registered with the 'get' attribute, but loadShare was not used beforehand.

        2. The ${e} share was not registered with the 'lib' attribute.

      `);
    }
    initRawContainer(e, o, n) {
        const r = getRemoteInfo({
            name: e,
            entry: o
        }), i = new Module({
            host: this,
            remoteInfo: r
        });
        return i.remoteEntryExports = n, this.moduleCache.set(e, i), i;
    }
    async _getRemoteModuleAndOptions(e) {
        const o = await this.hooks.lifecycle.beforeRequest.emit({
            id: e,
            options: this.options,
            origin: this
        }), { id: n } = o, r = matchRemoteWithNameAndExpose(this.options.remotes, n);
        assert(r, `
        Unable to locate ${n} in ${this.options.name}. Potential reasons for failure include:

        1. ${n} was not included in the 'remotes' parameter of ${this.options.name || "the host"}.

        2. ${n} could not be found in the 'remotes' of ${this.options.name} with either 'name' or 'alias' attributes.
        3. ${n} is not online, injected, or loaded.
        4. ${n}  cannot be accessed on the expected.
        5. The 'beforeRequest' hook was provided but did not return the correct 'remoteInfo' when attempting to load ${n}.
      `);
        const { remote: i } = r, a = getRemoteInfo(i), s = await this.hooks.lifecycle.afterResolve.emit(_extends({
            id: n
        }, r, {
            options: this.options,
            origin: this,
            remoteInfo: a
        })), { remote: c, expose: l } = s;
        assert(c && l, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${n}.`);
        let u = this.moduleCache.get(c.name);
        const h = {
            host: this,
            remoteInfo: a
        };
        return u || (u = new Module(h), this.moduleCache.set(c.name, u)), {
            module: u,
            moduleOptions: h,
            remoteMatchInfo: s
        };
    }
    async loadRemote(e, o) {
        try {
            const { loadFactory: n = !0 } = o || {
                loadFactory: !0
            }, { module: r, moduleOptions: i, remoteMatchInfo: a } = await this._getRemoteModuleAndOptions(e), { pkgNameOrAlias: s, remote: c, expose: l, id: u } = a, h = await r.get(l, o), g = await this.hooks.lifecycle.onLoad.emit({
                id: u,
                pkgNameOrAlias: s,
                expose: l,
                exposeModule: n ? h : void 0,
                exposeModuleFactory: n ? void 0 : h,
                remote: c,
                options: i,
                moduleInstance: r,
                origin: this
            });
            return typeof g == "function" ? g : h;
        } catch (n) {
            const { from: r = "runtime" } = o || {
                from: "runtime"
            }, i = await this.hooks.lifecycle.errorLoadRemote.emit({
                id: e,
                error: n,
                from: r,
                origin: this
            });
            if (!i) throw n;
            return i;
        }
    }
    async preloadRemote(e) {
        await this.hooks.lifecycle.beforePreloadRemote.emit({
            preloadOptions: e,
            options: this.options,
            origin: this
        });
        const o = formatPreloadArgs(this.options.remotes, e);
        await Promise.all(o.map(async (n)=>{
            const { remote: r } = n, i = getRemoteInfo(r), { globalSnapshot: a, remoteSnapshot: s } = await this.snapshotHandler.loadRemoteSnapshotInfo(r), c = await this.hooks.lifecycle.generatePreloadAssets.emit({
                origin: this,
                preloadOptions: n,
                remote: r,
                remoteInfo: i,
                globalSnapshot: a,
                remoteSnapshot: s
            });
            !c || preloadAssets(i, this, c);
        }));
    }
    initializeSharing(e = DEFAULT_SCOPE, o) {
        const n = this.shareScopeMap, r = this.options.name;
        n[e] || (n[e] = {});
        const i = n[e], a = (u, h)=>{
            var g;
            const { version: p, eager: d } = h;
            i[u] = i[u] || {};
            const m = i[u], M = m[p], I = !!(M && (M.eager || (g = M.shareConfig) != null && g.eager));
            (!M || M.strategy !== "loaded-first" && !M.loaded && (!d != !I ? d : r > M.from)) && (m[p] = h);
        }, s = [], c = (u)=>u && u.init && u.init(n[e]), l = async (u)=>{
            const { module: h } = await this._getRemoteModuleAndOptions(u);
            if (h.getEntry) {
                const g = await h.getEntry();
                h.inited || (c(g), h.inited = !0);
            }
        };
        return Object.keys(this.options.shared).forEach((u)=>{
            const h = this.options.shared[u];
            h.scope.includes(e) && a(u, h);
        }), o === "version-first" && this.options.remotes.forEach((u)=>{
            u.shareScope === e && s.push(l(u.name));
        }), s;
    }
    initShareScopeMap(e, o) {
        this.shareScopeMap[e] = o, this.hooks.lifecycle.initContainerShareScopeMap.emit({
            shareScope: o,
            options: this.options,
            origin: this
        });
    }
    formatOptions(e, o) {
        const n = formatShareConfigs(o.shared || {}, o.name), r = _extends({}, e.shared, n), { userOptions: i, options: a } = this.hooks.lifecycle.beforeInit.emit({
            origin: this,
            userOptions: o,
            options: e,
            shareInfo: r
        }), s = (i.remotes || []).reduce((u, h)=>(this.registerRemote(h, u, {
                force: !1
            }), u), a.remotes);
        Object.keys(n).forEach((u)=>{
            const h = n[u];
            !getRegisteredShare(this.shareScopeMap, u, h, this.hooks.lifecycle.resolveShare) && h && h.lib && this.setShared({
                pkgName: u,
                lib: h.lib,
                get: h.get,
                loaded: !0,
                shared: h,
                from: o.name
            });
        });
        const c = [
            ...a.plugins
        ];
        i.plugins && i.plugins.forEach((u)=>{
            c.includes(u) || c.push(u);
        });
        const l = _extends({}, e, o, {
            plugins: c,
            remotes: s,
            shared: r
        });
        return this.hooks.lifecycle.init.emit({
            origin: this,
            options: l
        }), l;
    }
    registerPlugins(e) {
        registerPlugins(e, [
            this.hooks,
            this.snapshotHandler.hooks,
            this.loaderHook
        ]);
    }
    setShared({ pkgName: e, shared: o, from: n, lib: r, loading: i, loaded: a, get: s }) {
        const { version: c, scope: l = "default" } = o, u = _object_without_properties_loose(o, [
            "version",
            "scope"
        ]);
        (Array.isArray(l) ? l : [
            l
        ]).forEach((h)=>{
            this.shareScopeMap[h] || (this.shareScopeMap[h] = {}), this.shareScopeMap[h][e] || (this.shareScopeMap[h][e] = {}), !this.shareScopeMap[h][e][c] && (this.shareScopeMap[h][e][c] = _extends({
                version: c,
                scope: [
                    "default"
                ]
            }, u, {
                lib: r,
                loaded: a,
                loading: i
            }), s && (this.shareScopeMap[h][e][c].get = s));
        });
    }
    removeRemote(e) {
        const { name: o } = e, n = this.options.remotes.findIndex((i)=>i.name === o);
        n !== -1 && this.options.remotes.splice(n, 1);
        const r = this.moduleCache.get(e.name);
        if (r) {
            const i = r.remoteInfo.entryGlobalName;
            globalThis[i] && delete globalThis[i];
            const a = getRemoteEntryUniqueKey(r.remoteInfo);
            globalLoading[a] && delete globalLoading[a], this.moduleCache.delete(e.name);
        }
    }
    registerRemote(e, o, n) {
        const r = ()=>{
            if (e.alias) {
                const a = o.find((s)=>{
                    var c;
                    return e.alias && (s.name.startsWith(e.alias) || ((c = s.alias) == null ? void 0 : c.startsWith(e.alias)));
                });
                assert(!a, `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${a && a.name} name or alias`);
            }
            "entry" in e && isBrowserEnv$1() && !e.entry.startsWith("http") && (e.entry = new URL(e.entry, window.location.origin).href), e.shareScope || (e.shareScope = DEFAULT_SCOPE), e.type || (e.type = DEFAULT_REMOTE_TYPE);
        }, i = o.find((a)=>a.name === e.name);
        if (!i) r(), o.push(e);
        else {
            const a = [
                `The remote "${e.name}" is already registered.`,
                n != null && n.force ? "Hope you have known that OVERRIDE it may have some unexpected errors" : 'If you want to merge the remote, you can set "force: true".'
            ];
            n != null && n.force && (this.removeRemote(i), r(), o.push(e)), warn$1(a.join(" "));
        }
    }
    registerRemotes(e, o) {
        e.forEach((n)=>{
            this.registerRemote(n, this.options.remotes, {
                force: o?.force
            });
        });
    }
    constructor(e){
        this.hooks = new PluginSystem({
            beforeInit: new SyncWaterfallHook("beforeInit"),
            init: new SyncHook(),
            beforeRequest: new AsyncWaterfallHook("beforeRequest"),
            afterResolve: new AsyncWaterfallHook("afterResolve"),
            beforeInitContainer: new AsyncWaterfallHook("beforeInitContainer"),
            initContainerShareScopeMap: new AsyncWaterfallHook("initContainer"),
            initContainer: new AsyncWaterfallHook("initContainer"),
            onLoad: new AsyncHook("onLoad"),
            handlePreloadModule: new SyncHook("handlePreloadModule"),
            errorLoadRemote: new AsyncHook("errorLoadRemote"),
            beforeLoadShare: new AsyncWaterfallHook("beforeLoadShare"),
            loadShare: new AsyncHook(),
            resolveShare: new SyncWaterfallHook("resolveShare"),
            beforePreloadRemote: new AsyncHook(),
            generatePreloadAssets: new AsyncHook("generatePreloadAssets"),
            afterPreloadRemote: new AsyncHook()
        }), this.version = "0.1.2", this.moduleCache = /* @__PURE__ */ new Map(), this.loaderHook = new PluginSystem({
            getModuleInfo: new SyncHook(),
            createScript: new SyncHook(),
            createLink: new SyncHook(),
            fetch: new AsyncHook("fetch")
        });
        const o = {
            id: getBuilderId(),
            name: e.name,
            plugins: [
                snapshotPlugin(),
                generatePreloadAssetsPlugin()
            ],
            remotes: [],
            shared: {},
            inBrowser: isBrowserEnv$1()
        };
        this.name = e.name, this.options = o, this.shareScopeMap = {}, this._setGlobalShareScopeMap(), this.snapshotHandler = new SnapshotHandler(this), this.registerPlugins([
            ...o.plugins,
            ...e.plugins || []
        ]), this.options = this.formatOptions(o, e);
    }
}
let FederationInstance = null;
function init(t) {
    const e = getGlobalFederationInstance(t.name, t.version);
    if (e) return e.initOptions(t), FederationInstance || (FederationInstance = e), e;
    {
        const o = getGlobalFederationConstructor() || FederationHost;
        return FederationInstance = new o(t), setGlobalFederationInstance(FederationInstance), FederationInstance;
    }
}
function loadRemote(...t) {
    return assert(FederationInstance, "Please call init first"), FederationInstance.loadRemote.apply(FederationInstance, t);
}
setGlobalFederationConstructor(FederationHost);
function __awaiter(t, e, o, n) {
    function r(i) {
        return i instanceof o ? i : new o(function(a) {
            a(i);
        });
    }
    return new (o || (o = Promise))(function(i, a) {
        function s(u) {
            try {
                l(n.next(u));
            } catch (h) {
                a(h);
            }
        }
        function c(u) {
            try {
                l(n.throw(u));
            } catch (h) {
                a(h);
            }
        }
        function l(u) {
            u.done ? i(u.value) : r(u.value).then(s, c);
        }
        l((n = n.apply(t, e || [])).next());
    });
}
function __generator(t, e) {
    var o = {
        label: 0,
        sent: function() {
            if (i[0] & 1) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    }, n, r, i, a;
    return a = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    "TURBOPACK unreachable";
    function s(l) {
        return function(u) {
            return c([
                l,
                u
            ]);
        };
    }
    function c(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for(; o;)try {
            if (n = 1, r && (i = l[0] & 2 ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
            switch(r = 0, i && (l = [
                l[0] & 2,
                i.value
            ]), l[0]){
                case 0:
                case 1:
                    i = l;
                    break;
                case 4:
                    return o.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    o.label++, r = l[1], l = [
                        0
                    ];
                    continue;
                case 7:
                    l = o.ops.pop(), o.trys.pop();
                    continue;
                default:
                    if (i = o.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        o = 0;
                        continue;
                    }
                    if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
                        o.label = l[1];
                        break;
                    }
                    if (l[0] === 6 && o.label < i[1]) {
                        o.label = i[1], i = l;
                        break;
                    }
                    if (i && o.label < i[2]) {
                        o.label = i[2], o.ops.push(l);
                        break;
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue;
            }
            l = e.call(t, o);
        } catch (u) {
            l = [
                6,
                u
            ], r = 0;
        } finally{
            n = i = 0;
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        };
    }
}
var E_CANCELED = new Error("request for lock canceled"), Semaphore = function() {
    function t(e, o) {
        o === void 0 && (o = E_CANCELED), this._value = e, this._cancelError = o, this._queue = [], this._weightedWaiters = [];
    }
    return t.prototype.acquire = function(e, o) {
        var n = this;
        if (e === void 0 && (e = 1), o === void 0 && (o = 0), e <= 0) throw new Error("invalid weight ".concat(e, ": must be positive"));
        return new Promise(function(r, i) {
            var a = {
                resolve: r,
                reject: i,
                weight: e,
                priority: o
            }, s = findIndexFromEnd(n._queue, function(c) {
                return o <= c.priority;
            });
            s === -1 && e <= n._value ? n._dispatchItem(a) : n._queue.splice(s + 1, 0, a);
        });
    }, t.prototype.runExclusive = function(e) {
        return __awaiter(this, arguments, void 0, function(o, n, r) {
            var i, a, s;
            return n === void 0 && (n = 1), r === void 0 && (r = 0), __generator(this, function(c) {
                switch(c.label){
                    case 0:
                        return [
                            4,
                            this.acquire(n, r)
                        ];
                    case 1:
                        i = c.sent(), a = i[0], s = i[1], c.label = 2;
                    case 2:
                        return c.trys.push([
                            2,
                            ,
                            4,
                            5
                        ]), [
                            4,
                            o(a)
                        ];
                    case 3:
                        return [
                            2,
                            c.sent()
                        ];
                    case 4:
                        return s(), [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
    }, t.prototype.waitForUnlock = function(e, o) {
        var n = this;
        if (e === void 0 && (e = 1), o === void 0 && (o = 0), e <= 0) throw new Error("invalid weight ".concat(e, ": must be positive"));
        return this._couldLockImmediately(e, o) ? Promise.resolve() : new Promise(function(r) {
            n._weightedWaiters[e - 1] || (n._weightedWaiters[e - 1] = []), insertSorted(n._weightedWaiters[e - 1], {
                resolve: r,
                priority: o
            });
        });
    }, t.prototype.isLocked = function() {
        return this._value <= 0;
    }, t.prototype.getValue = function() {
        return this._value;
    }, t.prototype.setValue = function(e) {
        this._value = e, this._dispatchQueue();
    }, t.prototype.release = function(e) {
        if (e === void 0 && (e = 1), e <= 0) throw new Error("invalid weight ".concat(e, ": must be positive"));
        this._value += e, this._dispatchQueue();
    }, t.prototype.cancel = function() {
        var e = this;
        this._queue.forEach(function(o) {
            return o.reject(e._cancelError);
        }), this._queue = [];
    }, t.prototype._dispatchQueue = function() {
        for(this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;)this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters();
    }, t.prototype._dispatchItem = function(e) {
        var o = this._value;
        this._value -= e.weight, e.resolve([
            o,
            this._newReleaser(e.weight)
        ]);
    }, t.prototype._newReleaser = function(e) {
        var o = this, n = !1;
        return function() {
            n || (n = !0, o.release(e));
        };
    }, t.prototype._drainUnlockWaiters = function() {
        if (this._queue.length === 0) for(var e = this._value; e > 0; e--){
            var o = this._weightedWaiters[e - 1];
            !o || (o.forEach(function(i) {
                return i.resolve();
            }), this._weightedWaiters[e - 1] = []);
        }
        else for(var n = this._queue[0].priority, e = this._value; e > 0; e--){
            var o = this._weightedWaiters[e - 1];
            if (o) {
                var r = o.findIndex(function(s) {
                    return s.priority <= n;
                });
                (r === -1 ? o : o.splice(0, r)).forEach(function(s) {
                    return s.resolve();
                });
            }
        }
    }, t.prototype._couldLockImmediately = function(e, o) {
        return (this._queue.length === 0 || this._queue[0].priority < o) && e <= this._value;
    }, t;
}();
function insertSorted(t, e) {
    var o = findIndexFromEnd(t, function(n) {
        return e.priority <= n.priority;
    });
    t.splice(o + 1, 0, e);
}
function findIndexFromEnd(t, e) {
    for(var o = t.length - 1; o >= 0; o--)if (e(t[o])) return o;
    return -1;
}
var Mutex = function() {
    function t(e) {
        this._semaphore = new Semaphore(1, e);
    }
    return t.prototype.acquire = function() {
        return __awaiter(this, arguments, void 0, function(e) {
            var o, n;
            return e === void 0 && (e = 0), __generator(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            this._semaphore.acquire(1, e)
                        ];
                    case 1:
                        return o = r.sent(), n = o[1], [
                            2,
                            n
                        ];
                }
            });
        });
    }, t.prototype.runExclusive = function(e, o) {
        return o === void 0 && (o = 0), this._semaphore.runExclusive(function() {
            return e();
        }, 1, o);
    }, t.prototype.isLocked = function() {
        return this._semaphore.isLocked();
    }, t.prototype.waitForUnlock = function(e) {
        return e === void 0 && (e = 0), this._semaphore.waitForUnlock(1, e);
    }, t.prototype.release = function() {
        this._semaphore.isLocked() && this._semaphore.release();
    }, t.prototype.cancel = function() {
        return this._semaphore.cancel();
    }, t;
}();
function isMetaMaskProvider(t) {
    return t !== null && typeof t == "object" && t.hasOwnProperty("isMetaMask") && t.hasOwnProperty("request");
}
function detectMetaMaskProvider(t, { timeout: e = 3e3 } = {}) {
    let o = !1;
    return new Promise((n)=>{
        const r = (i)=>{
            const { info: a, provider: s } = i.detail;
            (a.rdns === "io.metamask" || a.rdns === "io.metamask.flask") && isMetaMaskProvider(s) && (n(s), o = !0);
        };
        typeof t.addEventListener == "function" && t.addEventListener("eip6963:announceProvider", r), setTimeout(()=>{
            o || n(null);
        }, e), typeof t.dispatchEvent == "function" && t.dispatchEvent(new Event("eip6963:requestProvider"));
    });
}
async function waitForMetaMaskProvider(t, e = {}) {
    const { timeout: o = 3e3, retries: n = 0 } = e;
    let r = null;
    try {
        r = await detectMetaMaskProvider(t, {
            timeout: o
        });
    } catch  {}
    return r || (n === 0 ? null : (r = await waitForMetaMaskProvider({
        timeout: o,
        retries: n - 1
    }), r));
}
async function detectMetamaskSupport(t) {
    return await waitForMetaMaskProvider(t, {
        retries: 3
    });
}
var Q, q, C, G, Y, J;
class MetaMaskVirtualWallet {
    constructor(){
        T(this, Q), T(this, C), T(this, Y), _(this, "id", "metamask"), _(this, "name", "MetaMask"), _(this, "icon", "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTIiIGhlaWdodD0iMTg5IiB2aWV3Qm94PSIwIDAgMjEyIDE4OSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cG9seWdvbiBmaWxsPSIjQ0RCREIyIiBwb2ludHM9IjYwLjc1IDE3My4yNSA4OC4zMTMgMTgwLjU2MyA4OC4zMTMgMTcxIDkwLjU2MyAxNjguNzUgMTA2LjMxMyAxNjguNzUgMTA2LjMxMyAxODAgMTA2LjMxMyAxODcuODc1IDg5LjQzOCAxODcuODc1IDY4LjYyNSAxNzguODc1Ii8+PHBvbHlnb24gZmlsbD0iI0NEQkRCMiIgcG9pbnRzPSIxMDUuNzUgMTczLjI1IDEzMi43NSAxODAuNTYzIDEzMi43NSAxNzEgMTM1IDE2OC43NSAxNTAuNzUgMTY4Ljc1IDE1MC43NSAxODAgMTUwLjc1IDE4Ny44NzUgMTMzLjg3NSAxODcuODc1IDExMy4wNjMgMTc4Ljg3NSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjU2LjUgMCkiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjkwLjU2MyAxNTIuNDM4IDg4LjMxMyAxNzEgOTEuMTI1IDE2OC43NSAxMjAuMzc1IDE2OC43NSAxMjMuNzUgMTcxIDEyMS41IDE1Mi40MzggMTE3IDE0OS42MjUgOTQuNSAxNTAuMTg4Ii8+PHBvbHlnb24gZmlsbD0iI0Y4OUMzNSIgcG9pbnRzPSI3NS4zNzUgMjcgODguODc1IDU4LjUgOTUuMDYzIDE1MC4xODggMTE3IDE1MC4xODggMTIzLjc1IDU4LjUgMTM2LjEyNSAyNyIvPjxwb2x5Z29uIGZpbGw9IiNGODlEMzUiIHBvaW50cz0iMTYuMzEzIDk2LjE4OCAuNTYzIDE0MS43NSAzOS45MzggMTM5LjUgNjUuMjUgMTM5LjUgNjUuMjUgMTE5LjgxMyA2NC4xMjUgNzkuMzEzIDU4LjUgODMuODEzIi8+PHBvbHlnb24gZmlsbD0iI0Q4N0MzMCIgcG9pbnRzPSI0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi4zNzUgODcuMTg4IDEyNiA2NS4yNSAxMjAuMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VBOEQzQSIgcG9pbnRzPSI0Ni4xMjUgMTAxLjgxMyA2NS4yNSAxMTkuODEzIDY1LjI1IDEzNy44MTMiLz48cG9seWdvbiBmaWxsPSIjRjg5RDM1IiBwb2ludHM9IjY1LjI1IDEyMC4zNzUgODcuNzUgMTI2IDk1LjA2MyAxNTAuMTg4IDkwIDE1MyA2NS4yNSAxMzguMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSI2NS4yNSAxMzguMzc1IDYwLjc1IDE3My4yNSA5MC41NjMgMTUyLjQzOCIvPjxwb2x5Z29uIGZpbGw9IiNFQThFM0EiIHBvaW50cz0iOTIuMjUgMTAyLjM3NSA5NS4wNjMgMTUwLjE4OCA4Ni42MjUgMTI1LjcxOSIvPjxwb2x5Z29uIGZpbGw9IiNEODdDMzAiIHBvaW50cz0iMzkuMzc1IDEzOC45MzggNjUuMjUgMTM4LjM3NSA2MC43NSAxNzMuMjUiLz48cG9seWdvbiBmaWxsPSIjRUI4RjM1IiBwb2ludHM9IjEyLjkzOCAxODguNDM4IDYwLjc1IDE3My4yNSAzOS4zNzUgMTM4LjkzOCAuNTYzIDE0MS43NSIvPjxwb2x5Z29uIGZpbGw9IiNFODgyMUUiIHBvaW50cz0iODguODc1IDU4LjUgNjQuNjg4IDc4Ljc1IDQ2LjEyNSAxMDEuMjUgOTIuMjUgMTAyLjkzOCIvPjxwb2x5Z29uIGZpbGw9IiNERkNFQzMiIHBvaW50cz0iNjAuNzUgMTczLjI1IDkwLjU2MyAxNTIuNDM4IDg4LjMxMyAxNzAuNDM4IDg4LjMxMyAxODAuNTYzIDY4LjA2MyAxNzYuNjI1Ii8+PHBvbHlnb24gZmlsbD0iI0RGQ0VDMyIgcG9pbnRzPSIxMjEuNSAxNzMuMjUgMTUwLjc1IDE1Mi40MzggMTQ4LjUgMTcwLjQzOCAxNDguNSAxODAuNTYzIDEyOC4yNSAxNzYuNjI1IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyNzIuMjUgMCkiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjcwLjMxMyAxMTIuNSA2NC4xMjUgMTI1LjQzOCA4Ni4wNjMgMTE5LjgxMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUwLjE4OCAwKSIvPjxwb2x5Z29uIGZpbGw9IiNFODhGMzUiIHBvaW50cz0iMTIuMzc1IC41NjMgODguODc1IDU4LjUgNzUuOTM4IDI3Ii8+PHBhdGggZmlsbD0iIzhFNUEzMCIgZD0iTTEyLjM3NTAwMDIsMC41NjI1MDAwMDggTDIuMjUwMDAwMDMsMzEuNTAwMDAwNSBMNy44NzUwMDAxMiw2NS4yNTAwMDEgTDMuOTM3NTAwMDYsNjcuNTAwMDAxIEw5LjU2MjUwMDE0LDcyLjU2MjUgTDUuMDYyNTAwMDgsNzYuNTAwMDAxMSBMMTEuMjUsODIuMTI1MDAxMiBMNy4zMTI1MDAxMSw4NS41MDAwMDEzIEwxNi4zMTI1MDAyLDk2Ljc1MDAwMTQgTDU4LjUwMDAwMDksODMuODEyNTAxMiBDNzkuMTI1MDAxMiw2Ny4zMTI1MDA0IDg5LjI1MDAwMTMsNTguODc1MDAwMyA4OC44NzUwMDEzLDU4LjUwMDAwMDkgQzg4LjUwMDAwMTMsNTguMTI1MDAwOSA2My4wMDAwMDA5LDM4LjgxMjUwMDYgMTIuMzc1MDAwMiwwLjU2MjUwMDAwOCBaIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjExLjUgMCkiPjxwb2x5Z29uIGZpbGw9IiNGODlEMzUiIHBvaW50cz0iMTYuMzEzIDk2LjE4OCAuNTYzIDE0MS43NSAzOS45MzggMTM5LjUgNjUuMjUgMTM5LjUgNjUuMjUgMTE5LjgxMyA2NC4xMjUgNzkuMzEzIDU4LjUgODMuODEzIi8+PHBvbHlnb24gZmlsbD0iI0Q4N0MzMCIgcG9pbnRzPSI0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi4zNzUgODcuMTg4IDEyNiA2NS4yNSAxMjAuMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VBOEQzQSIgcG9pbnRzPSI0Ni4xMjUgMTAxLjgxMyA2NS4yNSAxMTkuODEzIDY1LjI1IDEzNy44MTMiLz48cG9seWdvbiBmaWxsPSIjRjg5RDM1IiBwb2ludHM9IjY1LjI1IDEyMC4zNzUgODcuNzUgMTI2IDk1LjA2MyAxNTAuMTg4IDkwIDE1MyA2NS4yNSAxMzguMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSI2NS4yNSAxMzguMzc1IDYwLjc1IDE3My4yNSA5MCAxNTMiLz48cG9seWdvbiBmaWxsPSIjRUE4RTNBIiBwb2ludHM9IjkyLjI1IDEwMi4zNzUgOTUuMDYzIDE1MC4xODggODYuNjI1IDEyNS43MTkiLz48cG9seWdvbiBmaWxsPSIjRDg3QzMwIiBwb2ludHM9IjM5LjM3NSAxMzguOTM4IDY1LjI1IDEzOC4zNzUgNjAuNzUgMTczLjI1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSIxMi45MzggMTg4LjQzOCA2MC43NSAxNzMuMjUgMzkuMzc1IDEzOC45MzggLjU2MyAxNDEuNzUiLz48cG9seWdvbiBmaWxsPSIjRTg4MjFFIiBwb2ludHM9Ijg4Ljg3NSA1OC41IDY0LjY4OCA3OC43NSA0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi45MzgiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjcwLjMxMyAxMTIuNSA2NC4xMjUgMTI1LjQzOCA4Ni4wNjMgMTE5LjgxMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUwLjE4OCAwKSIvPjxwb2x5Z29uIGZpbGw9IiNFODhGMzUiIHBvaW50cz0iMTIuMzc1IC41NjMgODguODc1IDU4LjUgNzUuOTM4IDI3Ii8+PHBhdGggZmlsbD0iIzhFNUEzMCIgZD0iTTEyLjM3NTAwMDIsMC41NjI1MDAwMDggTDIuMjUwMDAwMDMsMzEuNTAwMDAwNSBMNy44NzUwMDAxMiw2NS4yNTAwMDEgTDMuOTM3NTAwMDYsNjcuNTAwMDAxIEw5LjU2MjUwMDE0LDcyLjU2MjUgTDUuMDYyNTAwMDgsNzYuNTAwMDAxMSBMMTEuMjUsODIuMTI1MDAxMiBMNy4zMTI1MDAxMSw4NS41MDAwMDEzIEwxNi4zMTI1MDAyLDk2Ljc1MDAwMTQgTDU4LjUwMDAwMDksODMuODEyNTAxMiBDNzkuMTI1MDAxMiw2Ny4zMTI1MDA0IDg5LjI1MDAwMTMsNTguODc1MDAwMyA4OC44NzUwMDEzLDU4LjUwMDAwMDkgQzg4LjUwMDAwMTMsNTguMTI1MDAwOSA2My4wMDAwMDA5LDM4LjgxMjUwMDYgMTIuMzc1MDAwMiwwLjU2MjUwMDAwOCBaIi8+PC9nPjwvZz48L3N2Zz4="), _(this, "windowKey", "starknet_metamask"), _(this, "provider", null), _(this, "swo", null), _(this, "lock"), _(this, "version", "v2.0.0"), this.lock = new Mutex();
    }
    async loadWallet(e) {
        return await E(this, C, G).call(this, e), this;
    }
    async hasSupport(e) {
        return this.provider = await detectMetamaskSupport(e), this.provider !== null;
    }
    async request(e) {
        return E(this, C, G).call(this).then((o)=>o.request(e));
    }
    on(e, o) {
        E(this, C, G).call(this).then((n)=>n.on(e, o));
    }
    off(e, o) {
        E(this, C, G).call(this).then((n)=>n.off(e, o));
    }
}
Q = /* @__PURE__ */ new WeakSet(), q = async function(t) {
    this.provider || (this.provider = await detectMetamaskSupport(t)), await init({
        name: "MetaMaskStarknetSnapWallet",
        remotes: [
            {
                name: "MetaMaskStarknetSnapWallet",
                alias: "MetaMaskStarknetSnapWallet",
                entry: `https://snaps.consensys.io/starknet/get-starknet/v1/remoteEntry.js?ts=${Date.now()}`
            }
        ]
    });
    const e = await loadRemote("MetaMaskStarknetSnapWallet/index");
    if (!e) throw new Error("Failed to load MetaMask Wallet");
    return new e.MetaMaskSnapWallet(this.provider, "*");
}, C = /* @__PURE__ */ new WeakSet(), G = async function(t = window) {
    return this.lock.runExclusive(async ()=>(this.swo || (this.swo = await E(this, Q, q).call(this, t), E(this, Y, J).call(this)), this.swo));
}, Y = /* @__PURE__ */ new WeakSet(), J = function() {
    this.swo && (this.version = this.swo.version, this.name = this.swo.name, this.id = this.swo.id, this.icon = this.swo.icon);
};
const metaMaskVirtualWallet = new MetaMaskVirtualWallet();
var X, Z;
const wallets = [
    {
        id: "argentX",
        name: "Argent X",
        icon: "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgNDAgMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC43NTgyIC0zLjk3MzY0ZS0wN0gxNC42MjM4QzE0LjI4NTEgLTMuOTczNjRlLTA3IDE0LjAxMzggMC4yODExNzggMTQuMDA2NCAwLjYzMDY4M0MxMy44MDE3IDEwLjQ1NDkgOC44MjIzNCAxOS43NzkyIDAuMjUxODkzIDI2LjM4MzdDLTAuMDIwMjA0NiAyNi41OTMzIC0wLjA4MjE5NDYgMjYuOTg3MiAwLjExNjczNCAyNy4yNzA5TDYuMDQ2MjMgMzUuNzM0QzYuMjQ3OTYgMzYuMDIyIDYuNjQwOTkgMzYuMDg3IDYuOTE3NjYgMzUuODc1NEMxMi4yNzY1IDMxLjc3MjggMTYuNTg2OSAyNi44MjM2IDE5LjY5MSAyMS4zMzhDMjIuNzk1MSAyNi44MjM2IDI3LjEwNTcgMzEuNzcyOCAzMi40NjQ2IDM1Ljg3NTRDMzIuNzQxIDM2LjA4NyAzMy4xMzQxIDM2LjAyMiAzMy4zMzYxIDM1LjczNEwzOS4yNjU2IDI3LjI3MDlDMzkuNDY0MiAyNi45ODcyIDM5LjQwMjIgMjYuNTkzMyAzOS4xMzA0IDI2LjM4MzdDMzAuNTU5NyAxOS43NzkyIDI1LjU4MDQgMTAuNDU0OSAyNS4zNzU5IDAuNjMwNjgzQzI1LjM2ODUgMC4yODExNzggMjUuMDk2OSAtMy45NzM2NGUtMDcgMjQuNzU4MiAtMy45NzM2NGUtMDdaIiBmaWxsPSIjRkY4NzVCIi8+Cjwvc3ZnPgo=",
        downloads: {
            chrome: "https://chrome.google.com/webstore/detail/argent-x-starknet-wallet/dlcobpjiigpikoobohmabehhmhfoodbb",
            firefox: "https://addons.mozilla.org/en-US/firefox/addon/argent-x",
            edge: "https://microsoftedge.microsoft.com/addons/detail/argent-x/ajcicjlkibolbeaaagejfhnofogocgcj"
        }
    },
    {
        id: "braavos",
        name: "Braavos",
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aAogICAgICAgIGQ9Ik02Mi43MDUgMTMuOTExNkM2Mi44MzU5IDE0LjEzMzMgNjIuNjYyMSAxNC40MDcgNjIuNDAzOSAxNC40MDdDNTcuMTgwNyAxNC40MDcgNTIuOTM0OCAxOC41NDI3IDUyLjgzNTEgMjMuNjgxN0M1MS4wNDY1IDIzLjM0NzcgNDkuMTkzMyAyMy4zMjI2IDQ3LjM2MjYgMjMuNjMxMUM0Ny4yMzYxIDE4LjUxNTYgNDMuMDAwOSAxNC40MDcgMzcuNzk0OCAxNC40MDdDMzcuNTM2NSAxNC40MDcgMzcuMzYyNSAxNC4xMzMxIDM3LjQ5MzUgMTMuOTExMkM0MC4wMjE3IDkuNjI4MDkgNDQuNzIwNCA2Ljc1IDUwLjA5OTEgNi43NUM1NS40NzgxIDYuNzUgNjAuMTc2OSA5LjYyODI2IDYyLjcwNSAxMy45MTE2WiIKICAgICAgICBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzcyXzQwMjU5KSIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTc4Ljc2MDYgNDUuODcxOEM4MC4yNzI1IDQ2LjMyOTcgODEuNzAyNSA0NS4wMDU1IDgxLjE3MTQgNDMuNTIyMkM3Ni40MTM3IDMwLjIzMzQgNjEuMzkxMSAyNC44MDM5IDUwLjAyNzcgMjQuODAzOUMzOC42NDQyIDI0LjgwMzkgMjMuMjg2OCAzMC40MDcgMTguODc1NCA0My41OTEyQzE4LjM4MjQgNDUuMDY0NSAxOS44MDgzIDQ2LjM0NDYgMjEuMjk3OCA0NS44ODgxTDQ4Ljg3MiAzNy40MzgxQzQ5LjUzMzEgMzcuMjM1NSA1MC4yMzk5IDM3LjIzNDQgNTAuOTAxNyAzNy40MzQ4TDc4Ljc2MDYgNDUuODcxOFoiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM3Ml80MDI1OSkiIC8+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0xOC44MTMyIDQ4LjE3MDdMNDguODkzNSAzOS4wNDcyQzQ5LjU1MDYgMzguODQ3OCA1MC4yNTI0IDM4Ljg0NzMgNTAuOTA5OCAzOS4wNDU2TDgxLjE3ODEgNDguMTc1MkM4My42OTEyIDQ4LjkzMzIgODUuNDExIDUxLjI0ODMgODUuNDExIDUzLjg3MzVWODEuMjIzM0M4NS4yOTQ0IDg3Ljg5OTEgNzkuMjk3NyA5My4yNSA3Mi42MjQ1IDkzLjI1SDYxLjU0MDZDNjAuNDQ0OSA5My4yNSA1OS41NTc3IDkyLjM2MzcgNTkuNTU3NyA5MS4yNjhWODEuNjc4OUM1OS41NTc3IDc3LjkwMzEgNjEuNzkyMSA3NC40ODU1IDY1LjI0OTggNzIuOTcyOUM2OS44ODQ5IDcwLjk0NTQgNzUuMzY4MSA2OC4yMDI4IDc2LjM5OTQgNjIuNjk5MkM3Ni43MzIzIDYwLjkyMjkgNzUuNTc0MSA1OS4yMDk0IDczLjgwMjQgNTguODU3M0M2OS4zMjI2IDU3Ljk2NjcgNjQuMzU2MiA1OC4zMTA3IDYwLjE1NjQgNjAuMTg5M0M1NS4zODg3IDYyLjMyMTkgNTQuMTQxNSA2NS44Njk0IDUzLjY3OTcgNzAuNjMzN0w1My4xMjAxIDc1Ljc2NjJDNTIuOTQ5MSA3Ny4zMzQ5IDUxLjQ3ODUgNzguNTM2NiA0OS45MDE0IDc4LjUzNjZDNDguMjY5OSA3OC41MzY2IDQ3LjA0NjUgNzcuMjk0IDQ2Ljg2OTYgNzUuNjcxMkw0Ni4zMjA0IDcwLjYzMzdDNDUuOTI0OSA2Ni41NTI5IDQ1LjIwNzkgNjIuNTg4NyA0MC45ODk1IDYwLjcwMThDMzYuMTc3NiA1OC41NDk0IDMxLjM0MTkgNTcuODM0NyAyNi4xOTc2IDU4Ljg1NzNDMjQuNDI2IDU5LjIwOTQgMjMuMjY3OCA2MC45MjI5IDIzLjYwMDcgNjIuNjk5MkMyNC42NDEgNjguMjUwNyAzMC4wODEyIDcwLjkzMDUgMzQuNzUwMyA3Mi45NzI5QzM4LjIwOCA3NC40ODU1IDQwLjQ0MjQgNzcuOTAzMSA0MC40NDI0IDgxLjY3ODlWOTEuMjY2M0M0MC40NDI0IDkyLjM2MiAzOS41NTU1IDkzLjI1IDM4LjQ1OTkgOTMuMjVIMjcuMzc1NkMyMC43MDI0IDkzLjI1IDE0LjcwNTcgODcuODk5MSAxNC41ODkxIDgxLjIyMzNWNTMuODY2M0MxNC41ODkxIDUxLjI0NDYgMTYuMzA0NSA0OC45MzE2IDE4LjgxMzIgNDguMTcwN1oiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzM3Ml80MDI1OSkiIC8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzcyXzQwMjU5IiB4MT0iNDkuMzA1NyIgeTE9IjIuMDc5IiB4Mj0iODAuMzYyNyIgeTI9IjkzLjY1OTciCiAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5NjAwIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM3Ml80MDI1OSIgeDE9IjQ5LjMwNTciIHkxPSIyLjA3OSIgeDI9IjgwLjM2MjciIHkyPSI5My42NTk3IgogICAgICAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNUQ0NUUiIC8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTYwMCIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8zNzJfNDAyNTkiIHgxPSI0OS4zMDU3IiB5MT0iMi4wNzkiIHgyPSI4MC4zNjI3IiB5Mj0iOTMuNjU5NyIKICAgICAgICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjVENDVFIiAvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+",
        downloads: {
            chrome: "https://chrome.google.com/webstore/detail/braavos-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma",
            firefox: "https://addons.mozilla.org/en-US/firefox/addon/braavos-wallet",
            edge: "https://microsoftedge.microsoft.com/addons/detail/braavos-wallet/hkkpjehhcnhgefhbdcgfkeegglpjchdc",
            ios: `https://link.braavos.app/dapp/${(X = ssrSafeWindow?.location) == null ? void 0 : X.host}`,
            android: `https://link.braavos.app/dapp/${(Z = ssrSafeWindow?.location) == null ? void 0 : Z.host}`
        }
    },
    {
        id: metaMaskVirtualWallet.id,
        name: metaMaskVirtualWallet.name,
        icon: metaMaskVirtualWallet.icon,
        downloads: {
            chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
            firefox: "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",
            edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US"
        }
    },
    {
        id: "okxwallet",
        name: "OKX Wallet",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Zq9jtpAEMfHlhEgQLiioXEkoAGECwoKxMcTRHmC5E3IoyRPkPAEkI7unJYmTgEFTYwA8a3NTKScLnCHN6c9r1e3P2llWQy7M/s1Gv1twCP0ej37dDq9x+Zut1t3t9vZjDEHIiSRSPg4ZpDL5fxkMvn1cDh8m0wmfugfO53OoFQq/crn8wxfY9EymQyrVCqMfHvScZx1p9ls3pFxXBy/bKlUipGPrVbLuQqAfsCliq3zl0H84zwtjQrOw4Mt1W63P5LvBm2d+Xz+YzqdgkqUy+WgWCy+Mc/nc282m4FqLBYL+3g8fjDxenq72WxANZbLJeA13zDX67UDioL5ybXwafMYu64Ltn3bdDweQ5R97fd7GyhBQMipx4POeEDHIu2LfDdBIGGz+hJ9CQ1ABjoA2egAZPM6AgiCAEQhsi/C4jHyPA/6/f5NG3Ks2+3CYDC4aTccDrn6ojG54MnEvG00GoVmWLIRNZ7wTCwDHYBsdACy0QHIhiuRETxlICWpMMhGZHmqS8qH6JLyGegAZKMDkI0uKf8X4SWlaZo+Pp1bRrwlJU8ZKLIvUjKh0WiQ3sRUbNVq9c5Ebew7KEo2m/1p4jJ4qAmDaqDQBzj5XyiAT4VCQezJigAU+IDU+z8vJFnGWeC+bKQV/5VZ71FV6L7PA3gg3tXrdQ+DgLhC+75Wq3no69P3MC0NFQpx2lL04Ql9gHK1bRDjsSBIvScBnDTk1WrlGIZBorIDEYJj+rhdgnQ67VmWRe0zlplXl81vcyEt0rSoYDUAAAAASUVORK5CYII=",
        downloads: {
            chrome: "https://chrome.google.com/webstore/detail/mcohilncbfahbmgdjkbpemcciiolgcge",
            firefox: "https://addons.mozilla.org/en-US/firefox/addon/okexwallet",
            edge: "https://microsoftedge.microsoft.com/addons/detail/%E6%AC%A7%E6%98%93-web3-%E9%92%B1%E5%8C%85/pbpjkcldjiffchgbbndmhojiacbgflha",
            safari: "https://apps.apple.com/us/app/okx-wallet/id6463797825"
        }
    },
    {
        id: "keplr",
        name: "Keplr",
        icon: "data:image/png;base64,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",
        downloads: {
            chrome: "https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap",
            firefox: "https://addons.mozilla.org/en-US/firefox/addon/keplr",
            edge: "https://microsoftedge.microsoft.com/addons/detail/keplr/ocodgmmffbkkeecmadcijjhkmeohinei"
        }
    },
    {
        id: "fordefi",
        name: "Fordefi",
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzNDk0XzY2MjU0KSI+CjxwYXRoIGQ9Ik0xMC44NzY5IDE1LjYzNzhIMS41VjE4LjM5OUMxLjUgMTkuODAxMyAyLjYzNDQ3IDIwLjkzOCA0LjAzMzkyIDIwLjkzOEg4LjI0OTkyTDEwLjg3NjkgMTUuNjM3OFoiIGZpbGw9IiM3OTk0RkYiLz4KPHBhdGggZD0iTTEuNSA5Ljc3NTUxSDE5LjA1MTZMMTcuMDEzOSAxMy44NzExSDEuNVY5Ljc3NTUxWiIgZmlsbD0iIzQ4NkRGRiIvPgo8cGF0aCBkPSJNNy42NTk5NiAzSDEuNTI0NDFWOC4wMDcwNEgyMi40NjEyVjNIMTYuMzI1NlY2LjczOTQ0SDE1LjA2MDZWM0g4LjkyNTAyVjYuNzM5NDRINy42NTk5NlYzWiIgZmlsbD0iIzVDRDFGQSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzNDk0XzY2MjU0Ij4KPHJlY3Qgd2lkdGg9IjIxIiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS41IDMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
        downloads: {
            chrome: "https://chrome.google.com/webstore/detail/fordefi/hcmehenccjdmfbojapcbcofkgdpbnlle"
        }
    }
];
var z, j, P, V, ee, k, F;
class LocalStorageWrapper {
    constructor(e){
        T(this, V), T(this, k), T(this, z, !1), T(this, j, void 0), T(this, P, void 0), _(this, "value"), B(this, P, e), E(this, k, F).call(this);
    }
    set(e) {
        return !N(this, z) && !E(this, k, F).call(this) ? !1 : (this.delete(), this.value = e, e && (B(this, j, `${N(this, P)}-${generateUID()}`), localStorage.setItem(N(this, j), e)), !0);
    }
    get() {
        return E(this, V, ee).call(this), this.value;
    }
    delete() {
        return !N(this, z) && !E(this, k, F).call(this) ? !1 : (this.value = null, N(this, j) && localStorage.removeItem(N(this, j)), !0);
    }
}
z = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakSet(), ee = function() {
    this.value && this.set(this.value);
}, k = /* @__PURE__ */ new WeakSet(), F = function() {
    try {
        !N(this, z) && typeof window < "u" && (B(this, j, Object.keys(localStorage).find((t)=>t.startsWith(N(this, P)))), B(this, z, !0), N(this, j) && this.set(localStorage.getItem(N(this, j))));
    } catch (t) {
        console.warn(t);
    }
    return N(this, z);
};
const Permission = {
    ACCOUNTS: "accounts"
};
function filterBy(t, e) {
    var o, n;
    if ((o = e?.include) != null && o.length) {
        const r = new Set(e.include);
        return t.filter((i)=>r.has(i.id));
    }
    if ((n = e?.exclude) != null && n.length) {
        const r = new Set(e.exclude);
        return t.filter((i)=>!r.has(i.id));
    }
    return t;
}
const filterByAuthorized = async (t)=>{
    const e = await Promise.all(t.map(async (o)=>{
        try {
            return (await o.request({
                type: "wallet_getPermissions"
            })).includes(Permission.ACCOUNTS);
        } catch  {
            return !1;
        }
    }));
    return t.filter((o, n)=>e[n]);
}, virtualWalletKeys = ensureKeysArray({
    id: !0,
    name: !0,
    icon: !0,
    windowKey: !0,
    loadWallet: !0,
    hasSupport: !0
}), fullWalletKeys = ensureKeysArray({
    id: !0,
    name: !0,
    version: !0,
    icon: !0,
    request: !0,
    on: !0,
    off: !0
});
function createWalletGuard(t) {
    return function(e) {
        return e !== null && typeof e == "object" && t.every((o)=>o in e);
    };
}
const isFullWallet = createWalletGuard(fullWalletKeys), isVirtualWallet = createWalletGuard(virtualWalletKeys);
function isWalletObject(t) {
    try {
        return isFullWallet(t) || isVirtualWallet(t);
    } catch  {}
    return !1;
}
function scanObjectForWallets(t, e) {
    return Object.values(Object.getOwnPropertyNames(t).reduce((o, n)=>{
        if (n.startsWith("starknet")) {
            const r = t[n];
            e(r) && !o[r.id] && (o[r.id] = r);
        }
        return o;
    }, {}));
}
const sortBy = (t, e)=>{
    if (e && Array.isArray(e)) {
        t.sort((n, r)=>e.indexOf(n.id) - e.indexOf(r.id));
        const o = t.length - e.length;
        return [
            ...t.slice(o),
            ...shuffle(t.slice(0, o))
        ];
    } else return shuffle(t);
}, virtualWallets = [
    metaMaskVirtualWallet
];
function initiateVirtualWallets(t) {
    virtualWallets.forEach(async (e)=>{
        e.windowKey in t || await e.hasSupport(t) && (t[e.windowKey] = e);
    });
}
const virtualWalletsMap = {};
async function resolveVirtualWallet(t, e) {
    let o = virtualWalletsMap[e.id];
    return o || (o = await e.loadWallet(t), virtualWalletsMap[e.id] = o), o;
}
const defaultOptions = {
    windowObject: ssrSafeWindow ?? {},
    isWalletObject,
    storageFactoryImplementation: (t)=>new LocalStorageWrapper(t)
};
function getStarknet(t = {}) {
    const { storageFactoryImplementation: e, windowObject: o, isWalletObject: n } = {
        ...defaultOptions,
        ...t
    }, r = e("gsw-last");
    return initiateVirtualWallets(o), {
        getAvailableWallets: async (i = {})=>{
            const a = scanObjectForWallets(o, n);
            return pipe$1((s)=>filterBy(s, i), (s)=>sortBy(s, i.sort))(a);
        },
        getAuthorizedWallets: async (i = {})=>{
            const a = scanObjectForWallets(o, n);
            return pipe$1((s)=>filterByAuthorized(s), (s)=>filterBy(s, i), (s)=>sortBy(s, i.sort))(a);
        },
        getDiscoveryWallets: async (i = {})=>pipe$1((a)=>filterBy(a, i), (a)=>sortBy(a, i.sort))(wallets),
        getLastConnectedWallet: async ()=>{
            const i = r.get(), a = scanObjectForWallets(o, n).find((c)=>c.id === i), [s] = await filterByAuthorized(a ? [
                a
            ] : []);
            return s || (r.delete(), null);
        },
        discoverVirtualWallets: async (i = [])=>{
            const a = new Set(i), s = a.size > 0 ? virtualWallets.filter((c)=>a.has(c.name) || a.has(c.id)) : virtualWallets;
            await Promise.all(s.map(async (c)=>{
                await c.hasSupport(o) && (o[c.windowKey] = c);
            }));
        },
        enable: async (i, a)=>{
            let s;
            if (isVirtualWallet(i)) s = await resolveVirtualWallet(o, i);
            else if (isFullWallet(i)) s = i;
            else throw new Error("Invalid wallet object");
            await s.request({
                type: "wallet_requestAccounts",
                params: {
                    silent_mode: a?.silent_mode
                }
            });
            const c = await s.request({
                type: "wallet_getPermissions"
            });
            if (!(c != null && c.includes(Permission.ACCOUNTS))) throw new Error("Failed to connect to wallet");
            return r.set(s.id), s;
        },
        disconnect: async ({ clearLastWallet: i } = {})=>{
            i && r.delete();
        }
    };
}
const main = getStarknet();
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "C": (()=>R),
    "P": (()=>T),
    "U": (()=>q),
    "a": (()=>U),
    "b": (()=>W),
    "c": (()=>A),
    "d": (()=>L),
    "g": (()=>S),
    "r": (()=>M),
    "s": (()=>F)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var x = Object.defineProperty;
var O = (s, a, o)=>a in s ? x(s, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : s[a] = o;
var m = (s, a, o)=>(O(s, typeof a != "symbol" ? a + "" : a, o), o);
;
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function L(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function S(s) {
    if (s.__esModule) return s;
    var a = s.default;
    if (typeof a == "function") {
        var o = function v() {
            return this instanceof v ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments);
        };
        o.prototype = a.prototype;
    } else o = {};
    return Object.defineProperty(o, "__esModule", {
        value: !0
    }), Object.keys(s).forEach(function(v) {
        var g = Object.getOwnPropertyDescriptor(s, v);
        Object.defineProperty(o, v, g.get ? g : {
            enumerable: !0,
            get: function() {
                return s[v];
            }
        });
    }), o;
}
var E = {
    exports: {}
};
(function(s) {
    var a = Object.prototype.hasOwnProperty, o = "~";
    function v() {}
    Object.create && (v.prototype = /* @__PURE__ */ Object.create(null), new v().__proto__ || (o = !1));
    function g(c, t, n) {
        this.fn = c, this.context = t, this.once = n || !1;
    }
    function C(c, t, n, r, p) {
        if (typeof n != "function") throw new TypeError("The listener must be a function");
        var l = new g(n, r || c, p), i = o ? o + t : t;
        return c._events[i] ? c._events[i].fn ? c._events[i] = [
            c._events[i],
            l
        ] : c._events[i].push(l) : (c._events[i] = l, c._eventsCount++), c;
    }
    function b(c, t) {
        --c._eventsCount === 0 ? c._events = new v() : delete c._events[t];
    }
    function u() {
        this._events = new v(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
        var t = [], n, r;
        if (this._eventsCount === 0) return t;
        for(r in n = this._events)a.call(n, r) && t.push(o ? r.slice(1) : r);
        return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(n)) : t;
    }, u.prototype.listeners = function(t) {
        var n = o ? o + t : t, r = this._events[n];
        if (!r) return [];
        if (r.fn) return [
            r.fn
        ];
        for(var p = 0, l = r.length, i = new Array(l); p < l; p++)i[p] = r[p].fn;
        return i;
    }, u.prototype.listenerCount = function(t) {
        var n = o ? o + t : t, r = this._events[n];
        return r ? r.fn ? 1 : r.length : 0;
    }, u.prototype.emit = function(t, n, r, p, l, i) {
        var h = o ? o + t : t;
        if (!this._events[h]) return !1;
        var e = this._events[h], d = arguments.length, y, f;
        if (e.fn) {
            switch(e.once && this.removeListener(t, e.fn, void 0, !0), d){
                case 1:
                    return e.fn.call(e.context), !0;
                case 2:
                    return e.fn.call(e.context, n), !0;
                case 3:
                    return e.fn.call(e.context, n, r), !0;
                case 4:
                    return e.fn.call(e.context, n, r, p), !0;
                case 5:
                    return e.fn.call(e.context, n, r, p, l), !0;
                case 6:
                    return e.fn.call(e.context, n, r, p, l, i), !0;
            }
            for(f = 1, y = new Array(d - 1); f < d; f++)y[f - 1] = arguments[f];
            e.fn.apply(e.context, y);
        } else {
            var w = e.length, _;
            for(f = 0; f < w; f++)switch(e[f].once && this.removeListener(t, e[f].fn, void 0, !0), d){
                case 1:
                    e[f].fn.call(e[f].context);
                    break;
                case 2:
                    e[f].fn.call(e[f].context, n);
                    break;
                case 3:
                    e[f].fn.call(e[f].context, n, r);
                    break;
                case 4:
                    e[f].fn.call(e[f].context, n, r, p);
                    break;
                default:
                    if (!y) for(_ = 1, y = new Array(d - 1); _ < d; _++)y[_ - 1] = arguments[_];
                    e[f].fn.apply(e[f].context, y);
            }
        }
        return !0;
    }, u.prototype.on = function(t, n, r) {
        return C(this, t, n, r, !1);
    }, u.prototype.once = function(t, n, r) {
        return C(this, t, n, r, !0);
    }, u.prototype.removeListener = function(t, n, r, p) {
        var l = o ? o + t : t;
        if (!this._events[l]) return this;
        if (!n) return b(this, l), this;
        var i = this._events[l];
        if (i.fn) i.fn === n && (!p || i.once) && (!r || i.context === r) && b(this, l);
        else {
            for(var h = 0, e = [], d = i.length; h < d; h++)(i[h].fn !== n || p && !i[h].once || r && i[h].context !== r) && e.push(i[h]);
            e.length ? this._events[l] = e.length === 1 ? e[0] : e : b(this, l);
        }
        return this;
    }, u.prototype.removeAllListeners = function(t) {
        var n;
        return t ? (n = o ? o + t : t, this._events[n] && b(this, n)) : (this._events = new v(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = o, u.EventEmitter = u, s.exports = u;
})(E);
var j = E.exports;
const P = /* @__PURE__ */ L(j);
class R extends P {
}
const T = {
    ACCOUNTS: "accounts"
};
class U extends Error {
    constructor(){
        super(...arguments);
        m(this, "name", "ConnectorNotConnectedError");
        m(this, "message", "Connector not connected");
    }
}
class W extends Error {
    constructor(){
        super(...arguments);
        m(this, "name", "ConnectorNotFoundError");
        m(this, "message", "Connector not found");
    }
}
class q extends Error {
    constructor(){
        super(...arguments);
        m(this, "name", "UserRejectedRequestError");
        m(this, "message", "User rejected request");
    }
}
const F = (s)=>{
    localStorage.setItem("starknetLastConnectedWallet", s);
}, M = ()=>{
    localStorage.removeItem("starknetLastConnectedWallet");
};
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/getStarknetChainId-7c4b3163.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "g": (()=>S)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const S = (n)=>n === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].StarknetChainId.SN_MAIN ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].StarknetChainId.SN_MAIN : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].StarknetChainId.SN_SEPOLIA;
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-8edbd361.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "C": (()=>Ln),
    "D": (()=>Tr),
    "W": (()=>bo),
    "a": (()=>En),
    "b": (()=>$n),
    "h": (()=>wo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$getStarknetChainId$2d$7c4b3163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/getStarknetChainId-7c4b3163.js [app-client] (ecmascript)");
var On = Object.defineProperty;
var Sn = (t, e, r)=>e in t ? On(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r;
var Te = (t, e, r)=>(Sn(t, typeof e != "symbol" ? e + "" : e, r), r);
;
;
;
const Tr = "https://web.argent.xyz", rr = `<svg
    width="32"
    height="28"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.5 0.4375C0.982233 0.4375 0.5625 0.857233 0.5625 1.375V12C0.5625 12.4144 0.72712 12.8118 1.02015 13.1049C1.31317 13.3979 1.7106 13.5625 2.125 13.5625H15.875C16.2894 13.5625 16.6868 13.3979 16.9799 13.1049C17.2729 12.8118 17.4375 12.4144 17.4375 12V1.375C17.4375 0.857233 17.0178 0.4375 16.5 0.4375H1.5ZM2.4375 3.50616V11.6875H15.5625V3.50616L9.63349 8.94108C9.27507 9.26964 8.72493 9.26964 8.36651 8.94108L2.4375 3.50616ZM14.0899 2.3125H3.91013L9 6.97822L14.0899 2.3125Z"
      fill="currentColor"
    />
  </svg>`, In = "https://static.hydrogen.argent47.net/webwallet/iframe_whitelist_testnet.json", jn = "https://static.argent.net/webwallet/iframe_whitelist_mainnet.json";
class Ln extends Error {
    constructor(r, n){
        super(r);
        Te(this, "code");
        this.name = "ConnectAndSignSessionError", this.code = n;
    }
}
class $n extends Error {
    constructor(r, n){
        super(r);
        Te(this, "code");
        this.name = "WebwalletError", this.code = n;
    }
}
const Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].NetworkName, Mn = Q.SN_SEPOLIA;
function Dn(t) {
    try {
        const { origin: e } = new URL(t);
        if (e.includes("localhost") || e.includes("127.0.0.1")) return Mn;
        if (e.includes("hydrogen") || e.includes("sepolia-web.staging")) return Q.SN_SEPOLIA;
        if (e.includes("staging")) return Q.SN_MAIN;
        if (e.includes("dev") || e.includes("sepolia-web.argent.xyz")) return Q.SN_SEPOLIA;
        if (e.includes("argent.xyz")) return Q.SN_MAIN;
    } catch  {
        console.warn("Could not determine network from target URL, defaulting to mainnet-alpha");
    }
    return Q.SN_MAIN;
}
const Zn = 385, Un = 775, Wn = 385, qn = 440, zn = 420, Bn = 438;
function Vn(t) {
    return t;
}
function Fn(t) {
    return t.length === 0 ? Vn : t.length === 1 ? t[0] : function(r) {
        return t.reduce((n, s)=>s(n), r);
    };
}
function Hn(t) {
    return typeof t == "object" && t !== null && "subscribe" in t;
}
function nt(t) {
    const e = {
        subscribe (r) {
            let n = null, s = !1, a = !1, i = !1;
            function o() {
                if (n === null) {
                    i = !0;
                    return;
                }
                a || (a = !0, typeof n == "function" ? n() : n && n.unsubscribe());
            }
            return n = t({
                next (c) {
                    s || r.next?.(c);
                },
                error (c) {
                    s || (s = !0, r.error?.(c), o());
                },
                complete () {
                    s || (s = !0, r.complete?.(), o());
                }
            }), i && o(), {
                unsubscribe: o
            };
        },
        pipe (...r) {
            return Fn(r)(e);
        }
    };
    return e;
}
function Er(t) {
    return (e)=>{
        let r = 0, n = null;
        const s = [];
        function a() {
            n || (n = e.subscribe({
                next (o) {
                    for (const c of s)c.next?.(o);
                },
                error (o) {
                    for (const c of s)c.error?.(o);
                },
                complete () {
                    for (const o of s)o.complete?.();
                }
            }));
        }
        function i() {
            if (r === 0 && n) {
                const o = n;
                n = null, o.unsubscribe();
            }
        }
        return {
            subscribe (o) {
                return r++, s.push(o), a(), {
                    unsubscribe () {
                        r--, i();
                        const c = s.findIndex((u)=>u === o);
                        c > -1 && s.splice(c, 1);
                    }
                };
            }
        };
    };
}
function Gn(t) {
    return (e)=>({
            subscribe (r) {
                let n = 0;
                return e.subscribe({
                    next (a) {
                        r.next?.(t(a, n++));
                    },
                    error (a) {
                        r.error?.(a);
                    },
                    complete () {
                        r.complete?.();
                    }
                });
            }
        });
}
function Cr(t) {
    return (e)=>({
            subscribe (r) {
                return e.subscribe({
                    next (n) {
                        t.next?.(n), r.next?.(n);
                    },
                    error (n) {
                        t.error?.(n), r.error?.(n);
                    },
                    complete () {
                        t.complete?.(), r.complete?.();
                    }
                });
            }
        });
}
let Jn = class Rr extends Error {
    constructor(e){
        super(e), this.name = "ObservableAbortError", Object.setPrototypeOf(this, Rr.prototype);
    }
};
function Or(t) {
    let e;
    return {
        promise: new Promise((n, s)=>{
            let a = !1;
            function i() {
                a || (a = !0, s(new Jn("This operation was aborted.")), o.unsubscribe());
            }
            const o = t.subscribe({
                next (c) {
                    a = !0, n(c), i();
                },
                error (c) {
                    a = !0, s(c), i();
                },
                complete () {
                    a = !0, i();
                }
            });
            e = i;
        }),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        abort: e
    };
}
const Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    isObservable: Hn,
    map: Gn,
    observable: nt,
    observableToPromise: Or,
    share: Er,
    tap: Cr
}, Symbol.toStringTag, {
    value: "Module"
}));
function Sr(t) {
    return nt((e)=>{
        function r(s = 0, a = t.op) {
            const i = t.links[s];
            if (!i) throw new Error("No more links to execute - did you forget to add an ending link?");
            return i({
                op: a,
                next (c) {
                    return r(s + 1, c);
                }
            });
        }
        return r().subscribe(e);
    });
}
function nr(t) {
    return Array.isArray(t) ? t : [
        t
    ];
}
function Xn(t) {
    return (e)=>{
        const r = nr(t.true).map((s)=>s(e)), n = nr(t.false).map((s)=>s(e));
        return (s)=>nt((a)=>{
                const i = t.condition(s.op) ? r : n;
                return Sr({
                    op: s.op,
                    links: i
                }).subscribe(a);
            });
    };
}
function Pr(t) {
    const e = /* @__PURE__ */ Object.create(null);
    for(const r in t){
        const n = t[r];
        e[n] = r;
    }
    return e;
}
const st = {
    /**
  * Invalid JSON was received by the server.
  * An error occurred on the server while parsing the JSON text.
  */ PARSE_ERROR: -32700,
    /**
  * The JSON sent is not a valid Request object.
  */ BAD_REQUEST: -32600,
    // Internal JSON-RPC error
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    // Implementation specific errors
    UNAUTHORIZED: -32001,
    FORBIDDEN: -32003,
    NOT_FOUND: -32004,
    METHOD_NOT_SUPPORTED: -32005,
    TIMEOUT: -32008,
    CONFLICT: -32009,
    PRECONDITION_FAILED: -32012,
    PAYLOAD_TOO_LARGE: -32013,
    UNPROCESSABLE_CONTENT: -32022,
    TOO_MANY_REQUESTS: -32029,
    CLIENT_CLOSED_REQUEST: -32099
};
Pr(st);
Pr(st);
const Qn = {
    PARSE_ERROR: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    METHOD_NOT_SUPPORTED: 405,
    TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNPROCESSABLE_CONTENT: 422,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501
};
function Kn(t) {
    return Qn[t] ?? 500;
}
function Ar(t) {
    return Kn(t.code);
}
const Nr = ()=>{};
function Ir(t, e) {
    return new Proxy(Nr, {
        get (n, s) {
            if (!(typeof s != "string" || s === "then")) return Ir(t, [
                ...e,
                s
            ]);
        },
        apply (n, s, a) {
            const i = e[e.length - 1] === "apply";
            return t({
                args: i ? a.length >= 2 ? a[1] : [] : a,
                path: i ? e.slice(0, -1) : e
            });
        }
    });
}
const Zt = (t)=>Ir(t, []), Ut = (t)=>new Proxy(Nr, {
        get (e, r) {
            if (!(typeof r != "string" || r === "then")) return t(r);
        }
    });
function es(t) {
    const { path: e, error: r, config: n } = t, { code: s } = t.error, a = {
        message: r.message,
        code: st[s],
        data: {
            code: s,
            httpStatus: Ar(r)
        }
    };
    return n.isDev && typeof t.error.stack == "string" && (a.data.stack = t.error.stack), typeof e == "string" && (a.data.path = e), n.errorFormatter({
        ...t,
        shape: a
    });
}
function sr(t, e) {
    return "error" in e ? {
        ...e,
        error: t.transformer.output.serialize(e.error)
    } : "data" in e.result ? {
        ...e,
        result: {
            ...e.result,
            data: t.transformer.output.serialize(e.result.data)
        }
    } : e;
}
function ts(t, e) {
    return Array.isArray(e) ? e.map((r)=>sr(t, r)) : sr(t, e);
}
function rs(t) {
    return !!t && !Array.isArray(t) && typeof t == "object";
}
class ns extends Error {
}
function Wt(t) {
    if (t instanceof Error) return t;
    const e = typeof t;
    if (!(e === "undefined" || e === "function" || t === null)) {
        if (e !== "object") return new Error(String(t));
        if (rs(t)) {
            const r = new ns();
            for(const n in t)r[n] = t[n];
            return r;
        }
    }
}
const ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    createFlatProxy: Ut,
    createRecursiveProxy: Zt,
    getCauseFromUnknown: Wt,
    getErrorShape: es,
    transformTRPCResponse: ts
}, Symbol.toStringTag, {
    value: "Module"
}));
function ar(t) {
    return !!t && !Array.isArray(t) && typeof t == "object";
}
function as(t) {
    return t instanceof jr || /**
  * @deprecated
  * Delete in next major
  */ t instanceof Error && t.name === "TRPCClientError";
}
function is(t) {
    return ar(t) && ar(t.error) && typeof t.error.code == "number" && typeof t.error.message == "string";
}
let jr = class Ee extends Error {
    static from(e, r = {}) {
        const n = e;
        return as(n) ? (r.meta && (n.meta = {
            ...n.meta,
            ...r.meta
        }), n) : is(n) ? new Ee(n.error.message, {
            ...r,
            result: n
        }) : n instanceof Error ? new Ee(n.message, {
            ...r,
            cause: Wt(n)
        }) : new Ee("Unknown error", {
            ...r,
            cause: n
        });
    }
    constructor(e, r){
        const n = r?.cause;
        super(e, {
            cause: n
        }), this.meta = r?.meta, this.cause = n, this.shape = r?.result?.error, this.data = r?.result?.error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, Ee.prototype);
    }
};
function os(t) {
    return typeof FormData > "u" ? !1 : t instanceof FormData;
}
const mt = {
    css: {
        query: [
            "72e3ff",
            "3fb0d8"
        ],
        mutation: [
            "c5a3fc",
            "904dfc"
        ],
        subscription: [
            "ff49e1",
            "d83fbe"
        ]
    },
    ansi: {
        regular: {
            // Cyan background, black and white text respectively
            query: [
                "\x1B[30;46m",
                "\x1B[97;46m"
            ],
            // Magenta background, black and white text respectively
            mutation: [
                "\x1B[30;45m",
                "\x1B[97;45m"
            ],
            // Green background, black and white text respectively
            subscription: [
                "\x1B[30;42m",
                "\x1B[97;42m"
            ]
        },
        bold: {
            query: [
                "\x1B[1;30;46m",
                "\x1B[1;97;46m"
            ],
            mutation: [
                "\x1B[1;30;45m",
                "\x1B[1;97;45m"
            ],
            subscription: [
                "\x1B[1;30;42m",
                "\x1B[1;97;42m"
            ]
        }
    }
};
function cs(t) {
    const { direction: e, type: r, path: n, id: s, input: a } = t, i = [], o = [];
    if (t.colorMode === "ansi") {
        const [h, y] = mt.ansi.regular[r], [k, T] = mt.ansi.bold[r], A = "\x1B[0m";
        return i.push(e === "up" ? h : y, e === "up" ? ">>" : "<<", r, e === "up" ? k : T, `#${s}`, n, A), e === "up" ? o.push({
            input: t.input
        }) : o.push({
            input: t.input,
            // strip context from result cause it's too noisy in terminal wihtout collapse mode
            result: "result" in t.result ? t.result.result : t.result,
            elapsedMs: t.elapsedMs
        }), {
            parts: i,
            args: o
        };
    }
    const [c, u] = mt.css[r], d = `
    background-color: #${e === "up" ? c : u}; 
    color: ${e === "up" ? "black" : "white"};
    padding: 2px;
  `;
    return i.push("%c", e === "up" ? ">>" : "<<", r, `#${s}`, `%c${n}%c`, "%O"), o.push(d, `${d}; font-weight: bold;`, `${d}; font-weight: normal;`), e === "up" ? o.push({
        input: a,
        context: t.context
    }) : o.push({
        input: a,
        result: t.result,
        elapsedMs: t.elapsedMs,
        context: t.context
    }), {
        parts: i,
        args: o
    };
}
const us = ({ c: t = console, colorMode: e = "css" })=>(r)=>{
        const n = r.input, s = os(n) ? Object.fromEntries(n) : n, { parts: a, args: i } = cs({
            ...r,
            colorMode: e,
            input: s
        }), o = r.direction === "down" && r.result && (r.result instanceof Error || "error" in r.result.result) ? "error" : "log";
        t[o].apply(null, [
            a.join(" ")
        ].concat(i));
    };
function ls(t = {}) {
    const { enabled: e = ()=>!0 } = t, r = t.colorMode ?? (typeof window > "u" ? "ansi" : "css"), { logger: n = us({
        c: t.console,
        colorMode: r
    }) } = t;
    return ()=>({ op: s, next: a })=>nt((i)=>{
                e({
                    ...s,
                    direction: "up"
                }) && n({
                    ...s,
                    direction: "up"
                });
                const o = Date.now();
                function c(u) {
                    const d = Date.now() - o;
                    e({
                        ...s,
                        direction: "down",
                        result: u
                    }) && n({
                        ...s,
                        direction: "down",
                        elapsedMs: d,
                        result: u
                    });
                }
                return a(s).pipe(Cr({
                    next (u) {
                        c(u);
                    },
                    error (u) {
                        c(u);
                    }
                })).subscribe(i);
            });
}
let ds = class {
    $request({ type: e, input: r, path: n, context: s = {} }) {
        return Sr({
            links: this.links,
            op: {
                id: ++this.requestId,
                type: e,
                path: n,
                input: r,
                context: s
            }
        }).pipe(Er());
    }
    requestAsPromise(e) {
        const r = this.$request(e), { promise: n, abort: s } = Or(r);
        return new Promise((i, o)=>{
            e.signal?.addEventListener("abort", s), n.then((c)=>{
                i(c.result.data);
            }).catch((c)=>{
                o(jr.from(c));
            });
        });
    }
    query(e, r, n) {
        return this.requestAsPromise({
            type: "query",
            path: e,
            input: r,
            context: n?.context,
            signal: n?.signal
        });
    }
    mutation(e, r, n) {
        return this.requestAsPromise({
            type: "mutation",
            path: e,
            input: r,
            context: n?.context,
            signal: n?.signal
        });
    }
    subscription(e, r, n) {
        return this.$request({
            type: "subscription",
            path: e,
            input: r,
            context: n?.context
        }).subscribe({
            next (a) {
                a.result.type === "started" ? n.onStarted?.() : a.result.type === "stopped" ? n.onStopped?.() : n.onData?.(a.result.data);
            },
            error (a) {
                n.onError?.(a);
            },
            complete () {
                n.onComplete?.();
            }
        });
    }
    constructor(e){
        this.requestId = 0;
        const r = (()=>{
            const n = e.transformer;
            return n ? "input" in n ? e.transformer : {
                input: n,
                output: n
            } : {
                input: {
                    serialize: (s)=>s,
                    deserialize: (s)=>s
                },
                output: {
                    serialize: (s)=>s,
                    deserialize: (s)=>s
                }
            };
        })();
        this.runtime = {
            transformer: {
                serialize: (n)=>r.input.serialize(n),
                deserialize: (n)=>r.output.deserialize(n)
            },
            combinedTransformer: r
        }, this.links = e.links.map((n)=>n(this.runtime));
    }
};
const fs = {
    query: "query",
    mutate: "mutation",
    subscribe: "subscription"
}, ps = (t)=>fs[t];
function hs(t) {
    return Ut((e)=>t.hasOwnProperty(e) ? t[e] : e === "__untypedClient" ? t : Zt(({ path: r, args: n })=>{
            const s = [
                e,
                ...r
            ], a = ps(s.pop()), i = s.join(".");
            return t[a](i, ...n);
        }));
}
function ms(t) {
    const e = new ds(t);
    return hs(e);
}
function ys(t) {
    if (t instanceof ye || t instanceof Error && t.name === "TRPCError") return t;
    const e = new ye({
        code: "INTERNAL_SERVER_ERROR",
        cause: t
    });
    return t instanceof Error && t.stack && (e.stack = t.stack), e;
}
class ye extends Error {
    constructor(e){
        const r = Wt(e.cause), n = e.message ?? r?.message ?? e.code;
        super(n, {
            cause: r
        }), this.code = e.code, this.name = "TRPCError", this.cause || (this.cause = r);
    }
}
function gs(t) {
    return "input" in t ? t : {
        input: t,
        output: t
    };
}
const Se = {
    _default: !0,
    input: {
        serialize: (t)=>t,
        deserialize: (t)=>t
    },
    output: {
        serialize: (t)=>t,
        deserialize: (t)=>t
    }
}, Pe = ({ shape: t })=>t;
function _s(t) {
    return Object.assign(/* @__PURE__ */ Object.create(null), t);
}
const vs = [
    "query",
    "mutation",
    "subscription"
];
function bs(t) {
    return "router" in t._def;
}
const ws = {
    _ctx: null,
    _errorShape: null,
    _meta: null,
    queries: {},
    mutations: {},
    subscriptions: {},
    errorFormatter: Pe,
    transformer: Se
}, xs = [
    /**
  * Then is a reserved word because otherwise we can't return a promise that returns a Proxy
  * since JS will think that `.then` is something that exists
  */ "then"
];
function Lr(t) {
    return function(r) {
        const n = new Set(Object.keys(r).filter((c)=>xs.includes(c)));
        if (n.size > 0) throw new Error("Reserved words used in `router({})` call: " + Array.from(n).join(", "));
        const s = _s({});
        function a(c, u = "") {
            for (const [d, h] of Object.entries(c ?? {})){
                const y = `${u}${d}`;
                if (bs(h)) {
                    a(h._def.procedures, `${y}.`);
                    continue;
                }
                if (s[y]) throw new Error(`Duplicate key: ${y}`);
                s[y] = h;
            }
        }
        a(r);
        const i = {
            _config: t,
            router: !0,
            procedures: s,
            ...ws,
            record: r,
            queries: Object.entries(s).filter((c)=>c[1]._def.query).reduce((c, [u, d])=>({
                    ...c,
                    [u]: d
                }), {}),
            mutations: Object.entries(s).filter((c)=>c[1]._def.mutation).reduce((c, [u, d])=>({
                    ...c,
                    [u]: d
                }), {}),
            subscriptions: Object.entries(s).filter((c)=>c[1]._def.subscription).reduce((c, [u, d])=>({
                    ...c,
                    [u]: d
                }), {})
        }, o = {
            ...r,
            _def: i,
            createCaller (c) {
                return $r()(o)(c);
            },
            getErrorShape (c) {
                const { path: u, error: d } = c, { code: h } = c.error, y = {
                    message: d.message,
                    code: st[h],
                    data: {
                        code: h,
                        httpStatus: Ar(d)
                    }
                };
                return t.isDev && typeof c.error.stack == "string" && (y.data.stack = c.error.stack), typeof u == "string" && (y.data.path = u), this._def._config.errorFormatter({
                    ...c,
                    shape: y
                });
            }
        };
        return o;
    };
}
function ks(t) {
    const { type: e, path: r } = t;
    if (!(r in t.procedures) || !t.procedures[r]?._def[e]) throw new ye({
        code: "NOT_FOUND",
        message: `No "${e}"-procedure on path "${r}"`
    });
    const n = t.procedures[r];
    return n(t);
}
function $r() {
    return function(e) {
        const r = e._def;
        return function(s) {
            return Zt(({ path: i, args: o })=>{
                if (i.length === 1 && vs.includes(i[0])) return ks({
                    procedures: r.procedures,
                    path: o[0],
                    rawInput: o[1],
                    ctx: s,
                    type: i[0]
                });
                const c = i.join("."), u = r.procedures[c];
                let d = "query";
                return u._def.mutation ? d = "mutation" : u._def.subscription && (d = "subscription"), u({
                    path: c,
                    rawInput: o[0],
                    ctx: s,
                    type: d
                });
            });
        };
    };
}
const ir = typeof window > "u" || "Deno" in window || globalThis.process?.env?.NODE_ENV === "test" || !!globalThis.process?.env?.JEST_WORKER_ID || !!globalThis.process?.env?.VITEST_WORKER_ID;
function or(t) {
    const e = t;
    if (typeof e == "function") return e;
    if (typeof e.parseAsync == "function") return e.parseAsync.bind(e);
    if (typeof e.parse == "function") return e.parse.bind(e);
    if (typeof e.validateSync == "function") return e.validateSync.bind(e);
    if (typeof e.create == "function") return e.create.bind(e);
    if (typeof e.assert == "function") return (r)=>(e.assert(r), r);
    throw new Error("Could not find a validator fn");
}
function Mr(t, ...e) {
    const r = Object.assign(/* @__PURE__ */ Object.create(null), t);
    for (const n of e)for(const s in n){
        if (s in r && r[s] !== n[s]) throw new Error(`Duplicate key ${s}`);
        r[s] = n[s];
    }
    return r;
}
function Ts() {
    function t(r) {
        return {
            _middlewares: r,
            unstable_pipe (n) {
                const s = "_middlewares" in n ? n._middlewares : [
                    n
                ];
                return t([
                    ...r,
                    ...s
                ]);
            }
        };
    }
    function e(r) {
        return t([
            r
        ]);
    }
    return e;
}
function cr(t) {
    return t && typeof t == "object" && !Array.isArray(t);
}
function Es(t) {
    const e = async ({ next: r, rawInput: n, input: s })=>{
        let a;
        try {
            a = await t(n);
        } catch (o) {
            throw new ye({
                code: "BAD_REQUEST",
                cause: o
            });
        }
        const i = cr(s) && cr(a) ? {
            ...s,
            ...a
        } : a;
        return r({
            input: i
        });
    };
    return e._type = "input", e;
}
function Cs(t) {
    const e = async ({ next: r })=>{
        const n = await r();
        if (!n.ok) return n;
        try {
            const s = await t(n.data);
            return {
                ...n,
                data: s
            };
        } catch (s) {
            throw new ye({
                message: "Output validation failed",
                code: "INTERNAL_SERVER_ERROR",
                cause: s
            });
        }
    };
    return e._type = "output", e;
}
const Dr = "middlewareMarker";
function fe(t, e) {
    const { middlewares: r = [], inputs: n, meta: s, ...a } = e;
    return Zr({
        ...Mr(t, a),
        inputs: [
            ...t.inputs,
            ...n ?? []
        ],
        middlewares: [
            ...t.middlewares,
            ...r
        ],
        meta: t.meta && s ? {
            ...t.meta,
            ...s
        } : s ?? t.meta
    });
}
function Zr(t = {}) {
    const e = {
        inputs: [],
        middlewares: [],
        ...t
    };
    return {
        _def: e,
        input (r) {
            const n = or(r);
            return fe(e, {
                inputs: [
                    r
                ],
                middlewares: [
                    Es(n)
                ]
            });
        },
        output (r) {
            const n = or(r);
            return fe(e, {
                output: r,
                middlewares: [
                    Cs(n)
                ]
            });
        },
        meta (r) {
            return fe(e, {
                meta: r
            });
        },
        /**
    * @deprecated
    * This functionality is deprecated and will be removed in the next major version.
    */ unstable_concat (r) {
            return fe(e, r._def);
        },
        use (r) {
            const n = "_middlewares" in r ? r._middlewares : [
                r
            ];
            return fe(e, {
                middlewares: n
            });
        },
        query (r) {
            return yt({
                ...e,
                query: !0
            }, r);
        },
        mutation (r) {
            return yt({
                ...e,
                mutation: !0
            }, r);
        },
        subscription (r) {
            return yt({
                ...e,
                subscription: !0
            }, r);
        }
    };
}
function yt(t, e) {
    const r = fe(t, {
        resolver: e,
        middlewares: [
            async function(s) {
                const a = await e(s);
                return {
                    marker: Dr,
                    ok: !0,
                    data: a,
                    ctx: s.ctx
                };
            }
        ]
    });
    return Os(r._def);
}
const Rs = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/server/server-side-calls
`.trim();
function Os(t) {
    const e = async function(n) {
        if (!n || !("rawInput" in n)) throw new Error(Rs);
        const s = async (i = {
            index: 0,
            ctx: n.ctx
        })=>{
            try {
                const o = t.middlewares[i.index];
                return await o({
                    ctx: i.ctx,
                    type: n.type,
                    path: n.path,
                    rawInput: i.rawInput ?? n.rawInput,
                    meta: t.meta,
                    input: i.input,
                    next (u) {
                        const d = u;
                        return s({
                            index: i.index + 1,
                            ctx: d && "ctx" in d ? {
                                ...i.ctx,
                                ...d.ctx
                            } : i.ctx,
                            input: d && "input" in d ? d.input : i.input,
                            rawInput: d && "rawInput" in d ? d.rawInput : i.rawInput
                        });
                    }
                });
            } catch (o) {
                return {
                    ok: !1,
                    error: ys(o),
                    marker: Dr
                };
            }
        }, a = await s();
        if (!a) throw new ye({
            code: "INTERNAL_SERVER_ERROR",
            message: "No result from middlewares - did you forget to `return next()`?"
        });
        if (!a.ok) throw a.error;
        return a.data;
    };
    return e._def = t, e.meta = t.meta, e;
}
function Ss(...t) {
    const e = Mr({}, ...t.map((a)=>a._def.record)), r = t.reduce((a, i)=>{
        if (i._def._config.errorFormatter && i._def._config.errorFormatter !== Pe) {
            if (a !== Pe && a !== i._def._config.errorFormatter) throw new Error("You seem to have several error formatters");
            return i._def._config.errorFormatter;
        }
        return a;
    }, Pe), n = t.reduce((a, i)=>{
        if (i._def._config.transformer && i._def._config.transformer !== Se) {
            if (a !== Se && a !== i._def._config.transformer) throw new Error("You seem to have several transformers");
            return i._def._config.transformer;
        }
        return a;
    }, Se);
    return Lr({
        errorFormatter: r,
        transformer: n,
        isDev: t.some((a)=>a._def._config.isDev),
        allowOutsideOfServer: t.some((a)=>a._def._config.allowOutsideOfServer),
        isServer: t.some((a)=>a._def._config.isServer),
        $types: t[0]?._def._config.$types
    })(e);
}
class Je {
    context() {
        return new Je();
    }
    meta() {
        return new Je();
    }
    create(e) {
        return As()(e);
    }
}
const Ps = new Je();
function As() {
    return function(e) {
        const r = e?.errorFormatter ?? Pe, s = {
            transformer: gs(e?.transformer ?? Se),
            isDev: e?.isDev ?? globalThis.process?.env?.NODE_ENV !== "production",
            allowOutsideOfServer: e?.allowOutsideOfServer ?? !1,
            errorFormatter: r,
            isServer: e?.isServer ?? ir,
            /**
      * @internal
      */ $types: Ut((a)=>{
                throw new Error(`Tried to access "$types.${a}" which is not available at runtime`);
            })
        };
        if (!(e?.isServer ?? ir) && e?.allowOutsideOfServer !== !0) throw new Error("You're trying to use @trpc/server in a non-server environment. This is not supported by default.");
        return {
            /**
      * These are just types, they can't be used
      * @internal
      */ _config: s,
            /**
      * Builder object for creating procedures
      * @see https://trpc.io/docs/server/procedures
      */ procedure: Zr({
                meta: e?.defaultMeta
            }),
            /**
      * Create reusable middlewares
      * @see https://trpc.io/docs/server/middlewares
      */ middleware: Ts(),
            /**
      * Create a router
      * @see https://trpc.io/docs/server/routers
      */ router: Lr(s),
            /**
      * Merge Routers
      * @see https://trpc.io/docs/server/merging-routers
      */ mergeRouters: Ss,
            /**
      * Create a server-side caller for a router
      * @see https://trpc.io/docs/server/server-side-calls
      */ createCallerFactory: $r()
        };
    };
}
var Rt = {}, at = {}, be = {}, S = {};
const we = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(Yn);
var qt = {}, Ur = we;
function Wr(t) {
    return Ur.observable((e)=>{
        function r(s = 0, a = t.op) {
            const i = t.links[s];
            if (!i) throw new Error("No more links to execute - did you forget to add an ending link?");
            return i({
                op: a,
                next (c) {
                    return r(s + 1, c);
                }
            });
        }
        return r().subscribe(e);
    });
}
function ur(t) {
    return Array.isArray(t) ? t : [
        t
    ];
}
function Ns(t) {
    return (e)=>{
        const r = ur(t.true).map((s)=>s(e)), n = ur(t.false).map((s)=>s(e));
        return (s)=>Ur.observable((a)=>{
                const i = t.condition(s.op) ? r : n;
                return Wr({
                    op: s.op,
                    links: i
                }).subscribe(a);
            });
    };
}
qt.createChain = Wr;
qt.splitLink = Ns;
var xe = {};
const qr = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(ss);
var ke = {};
function Ot(t) {
    return !!t && !Array.isArray(t) && typeof t == "object";
}
function Is(t, e) {
    if ("error" in t) {
        const n = e.transformer.deserialize(t.error);
        return {
            ok: !1,
            error: {
                ...t,
                error: n
            }
        };
    }
    return {
        ok: !0,
        result: {
            ...t.result,
            ...(!t.result.type || t.result.type === "data") && {
                type: "data",
                data: e.transformer.deserialize(t.result.data)
            }
        }
    };
}
class gt extends Error {
    constructor(){
        super("Unable to transform response from server");
    }
}
function js(t, e) {
    let r;
    try {
        r = Is(t, e);
    } catch  {
        throw new gt();
    }
    if (!r.ok && (!Ot(r.error.error) || typeof r.error.error.code != "number")) throw new gt();
    if (r.ok && !Ot(r.result)) throw new gt();
    return r;
}
ke.isObject = Ot;
ke.transformResult = js;
var Ls = qr, lr = ke;
function $s(t) {
    return t instanceof zr || /**
  * @deprecated
  * Delete in next major
  */ t instanceof Error && t.name === "TRPCClientError";
}
function Ms(t) {
    return lr.isObject(t) && lr.isObject(t.error) && typeof t.error.code == "number" && typeof t.error.message == "string";
}
let zr = class Ce extends Error {
    static from(e, r = {}) {
        const n = e;
        return $s(n) ? (r.meta && (n.meta = {
            ...n.meta,
            ...r.meta
        }), n) : Ms(n) ? new Ce(n.error.message, {
            ...r,
            result: n
        }) : n instanceof Error ? new Ce(n.message, {
            ...r,
            cause: Ls.getCauseFromUnknown(n)
        }) : new Ce("Unknown error", {
            ...r,
            cause: n
        });
    }
    constructor(e, r){
        const n = r?.cause;
        super(e, {
            cause: n
        }), this.meta = r?.meta, this.cause = n, this.shape = r?.result?.error, this.data = r?.result?.error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, Ce.prototype);
    }
};
xe.TRPCClientError = zr;
var F = {}, Ds = xe;
const dr = (t)=>typeof t == "function";
function Br(t) {
    if (t) return t;
    if (typeof window < "u" && dr(window.fetch)) return window.fetch;
    if (typeof globalThis < "u" && dr(globalThis.fetch)) return globalThis.fetch;
    throw new Error("No fetch implementation found");
}
function Zs(t) {
    return t || (typeof window < "u" && window.AbortController ? window.AbortController : typeof globalThis < "u" && globalThis.AbortController ? globalThis.AbortController : null);
}
function Us(t) {
    return {
        url: t.url.toString().replace(/\/$/, ""),
        fetch: t.fetch,
        AbortController: Zs(t.AbortController)
    };
}
function Ws(t) {
    const e = {};
    for(let r = 0; r < t.length; r++){
        const n = t[r];
        e[r] = n;
    }
    return e;
}
const qs = {
    query: "GET",
    mutation: "POST"
};
function Vr(t) {
    return "input" in t ? t.runtime.transformer.serialize(t.input) : Ws(t.inputs.map((e)=>t.runtime.transformer.serialize(e)));
}
const Fr = (t)=>{
    let e = t.url + "/" + t.path;
    const r = [];
    if ("inputs" in t && r.push("batch=1"), t.type === "query") {
        const n = Vr(t);
        n !== void 0 && r.push(`input=${encodeURIComponent(JSON.stringify(n))}`);
    }
    return r.length && (e += "?" + r.join("&")), e;
}, Hr = (t)=>{
    if (t.type === "query") return;
    const e = Vr(t);
    return e !== void 0 ? JSON.stringify(e) : void 0;
}, zs = (t)=>Jr({
        ...t,
        contentTypeHeader: "application/json",
        getUrl: Fr,
        getBody: Hr
    });
async function Gr(t, e) {
    const r = t.getUrl(t), n = t.getBody(t), { type: s } = t, a = await t.headers();
    /* istanbul ignore if -- @preserve */ if (s === "subscription") throw new Error("Subscriptions should use wsLink");
    const i = {
        ...t.contentTypeHeader ? {
            "content-type": t.contentTypeHeader
        } : {},
        ...t.batchModeHeader ? {
            "trpc-batch-mode": t.batchModeHeader
        } : {},
        ...a
    };
    return Br(t.fetch)(r, {
        method: qs[s],
        signal: e?.signal,
        body: n,
        headers: i
    });
}
function Jr(t) {
    const e = t.AbortController ? new t.AbortController() : null, r = {};
    let n = !1;
    return {
        promise: new Promise((i, o)=>{
            Gr(t, e).then((c)=>(r.response = c, n = !0, c.json())).then((c)=>{
                r.responseJSON = c, i({
                    json: c,
                    meta: r
                });
            }).catch((c)=>{
                n = !0, o(Ds.TRPCClientError.from(c, {
                    meta: r
                }));
            });
        }),
        cancel: ()=>{
            n || e?.abort();
        }
    };
}
F.fetchHTTPResponse = Gr;
F.getBody = Hr;
F.getFetch = Br;
F.getUrl = Fr;
F.httpRequest = Jr;
F.jsonHttpRequester = zs;
F.resolveHTTPLinkOptions = Us;
var zt = {}, Bs = we, Vs = ke, fr = xe, St = F;
const _t = ()=>{
    throw new Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new");
};
function vt(t) {
    let e = null, r = null;
    const n = ()=>{
        clearTimeout(r), r = null, e = null;
    };
    function s(o) {
        const c = [
            []
        ];
        let u = 0;
        for(;;){
            const d = o[u];
            if (!d) break;
            const h = c[c.length - 1];
            if (d.aborted) {
                d.reject?.(new Error("Aborted")), u++;
                continue;
            }
            if (t.validate(h.concat(d).map((k)=>k.key))) {
                h.push(d), u++;
                continue;
            }
            if (h.length === 0) {
                d.reject?.(new Error("Input is too big for a single dispatch")), u++;
                continue;
            }
            c.push([]);
        }
        return c;
    }
    function a() {
        const o = s(e);
        n();
        for (const c of o){
            if (!c.length) continue;
            const u = {
                items: c,
                cancel: _t
            };
            for (const k of c)k.batch = u;
            const d = (k, T)=>{
                const A = u.items[k];
                A.resolve?.(T), A.batch = null, A.reject = null, A.resolve = null;
            }, { promise: h, cancel: y } = t.fetch(u.items.map((k)=>k.key), d);
            u.cancel = y, h.then((k)=>{
                for(let T = 0; T < k.length; T++){
                    const A = k[T];
                    d(T, A);
                }
                for (const T of u.items)T.reject?.(new Error("Missing result")), T.batch = null;
            }).catch((k)=>{
                for (const T of u.items)T.reject?.(k), T.batch = null;
            });
        }
    }
    function i(o) {
        const c = {
            aborted: !1,
            key: o,
            batch: null,
            resolve: _t,
            reject: _t
        }, u = new Promise((h, y)=>{
            c.reject = y, c.resolve = h, e || (e = []), e.push(c);
        });
        return r || (r = setTimeout(a)), {
            promise: u,
            cancel: ()=>{
                c.aborted = !0, c.batch?.items.every((h)=>h.aborted) && (c.batch.cancel(), c.batch = null);
            }
        };
    }
    return {
        load: i
    };
}
function Yr(t) {
    return function(r) {
        const n = St.resolveHTTPLinkOptions(r), s = r.maxURLLength ?? 1 / 0;
        return (a)=>{
            const i = (h)=>{
                const y = (T)=>{
                    if (s === 1 / 0) return !0;
                    const A = T.map((H)=>H.path).join(","), le = T.map((H)=>H.input);
                    return St.getUrl({
                        ...n,
                        runtime: a,
                        type: h,
                        path: A,
                        inputs: le
                    }).length <= s;
                }, k = t({
                    ...n,
                    runtime: a,
                    type: h,
                    opts: r
                });
                return {
                    validate: y,
                    fetch: k
                };
            }, o = vt(i("query")), c = vt(i("mutation")), u = vt(i("subscription")), d = {
                query: o,
                subscription: u,
                mutation: c
            };
            return ({ op: h })=>Bs.observable((y)=>{
                    const k = d[h.type], { promise: T, cancel: A } = k.load(h);
                    let le;
                    return T.then(($)=>{
                        le = $;
                        const H = Vs.transformResult($.json, a);
                        if (!H.ok) {
                            y.error(fr.TRPCClientError.from(H.error, {
                                meta: $.meta
                            }));
                            return;
                        }
                        y.next({
                            context: $.meta,
                            result: H.result
                        }), y.complete();
                    }).catch(($)=>{
                        y.error(fr.TRPCClientError.from($, {
                            meta: le?.meta
                        }));
                    }), ()=>{
                        A();
                    };
                });
        };
    };
}
const Fs = (t)=>(e)=>{
        const r = e.map((i)=>i.path).join(","), n = e.map((i)=>i.input), { promise: s, cancel: a } = St.jsonHttpRequester({
            ...t,
            path: r,
            inputs: n,
            headers () {
                return t.opts.headers ? typeof t.opts.headers == "function" ? t.opts.headers({
                    opList: e
                }) : t.opts.headers : {};
            }
        });
        return {
            promise: s.then((i)=>(Array.isArray(i.json) ? i.json : e.map(()=>i.json)).map((u)=>({
                        meta: i.meta,
                        json: u
                    }))),
            cancel: a
        };
    }, Hs = Yr(Fs);
zt.createHTTPBatchLink = Yr;
zt.httpBatchLink = Hs;
var it = {};
Object.defineProperty(it, "__esModule", {
    value: !0
});
var Gs = we, Js = ke, pr = xe, Xr = F;
function Qr(t) {
    return (e)=>{
        const r = Xr.resolveHTTPLinkOptions(e);
        return (n)=>({ op: s })=>Gs.observable((a)=>{
                    const { path: i, input: o, type: c } = s, { promise: u, cancel: d } = t.requester({
                        ...r,
                        runtime: n,
                        type: c,
                        path: i,
                        input: o,
                        headers () {
                            return e.headers ? typeof e.headers == "function" ? e.headers({
                                op: s
                            }) : e.headers : {};
                        }
                    });
                    let h;
                    return u.then((y)=>{
                        h = y.meta;
                        const k = Js.transformResult(y.json, n);
                        if (!k.ok) {
                            a.error(pr.TRPCClientError.from(k.error, {
                                meta: h
                            }));
                            return;
                        }
                        a.next({
                            context: y.meta,
                            result: k.result
                        }), a.complete();
                    }).catch((y)=>{
                        a.error(pr.TRPCClientError.from(y, {
                            meta: h
                        }));
                    }), ()=>{
                        d();
                    };
                });
    };
}
const Ys = Qr({
    requester: Xr.jsonHttpRequester
});
it.httpLink = Ys;
it.httpLinkFactory = Qr;
var Bt = {};
Object.defineProperty(Bt, "__esModule", {
    value: !0
});
var hr = we;
function Xs(t) {
    return typeof FormData > "u" ? !1 : t instanceof FormData;
}
const bt = {
    css: {
        query: [
            "72e3ff",
            "3fb0d8"
        ],
        mutation: [
            "c5a3fc",
            "904dfc"
        ],
        subscription: [
            "ff49e1",
            "d83fbe"
        ]
    },
    ansi: {
        regular: {
            // Cyan background, black and white text respectively
            query: [
                "\x1B[30;46m",
                "\x1B[97;46m"
            ],
            // Magenta background, black and white text respectively
            mutation: [
                "\x1B[30;45m",
                "\x1B[97;45m"
            ],
            // Green background, black and white text respectively
            subscription: [
                "\x1B[30;42m",
                "\x1B[97;42m"
            ]
        },
        bold: {
            query: [
                "\x1B[1;30;46m",
                "\x1B[1;97;46m"
            ],
            mutation: [
                "\x1B[1;30;45m",
                "\x1B[1;97;45m"
            ],
            subscription: [
                "\x1B[1;30;42m",
                "\x1B[1;97;42m"
            ]
        }
    }
};
function Qs(t) {
    const { direction: e, type: r, path: n, id: s, input: a } = t, i = [], o = [];
    if (t.colorMode === "ansi") {
        const [h, y] = bt.ansi.regular[r], [k, T] = bt.ansi.bold[r], A = "\x1B[0m";
        return i.push(e === "up" ? h : y, e === "up" ? ">>" : "<<", r, e === "up" ? k : T, `#${s}`, n, A), e === "up" ? o.push({
            input: t.input
        }) : o.push({
            input: t.input,
            // strip context from result cause it's too noisy in terminal wihtout collapse mode
            result: "result" in t.result ? t.result.result : t.result,
            elapsedMs: t.elapsedMs
        }), {
            parts: i,
            args: o
        };
    }
    const [c, u] = bt.css[r], d = `
    background-color: #${e === "up" ? c : u}; 
    color: ${e === "up" ? "black" : "white"};
    padding: 2px;
  `;
    return i.push("%c", e === "up" ? ">>" : "<<", r, `#${s}`, `%c${n}%c`, "%O"), o.push(d, `${d}; font-weight: bold;`, `${d}; font-weight: normal;`), e === "up" ? o.push({
        input: a,
        context: t.context
    }) : o.push({
        input: a,
        result: t.result,
        elapsedMs: t.elapsedMs,
        context: t.context
    }), {
        parts: i,
        args: o
    };
}
const Ks = ({ c: t = console, colorMode: e = "css" })=>(r)=>{
        const n = r.input, s = Xs(n) ? Object.fromEntries(n) : n, { parts: a, args: i } = Qs({
            ...r,
            colorMode: e,
            input: s
        }), o = r.direction === "down" && r.result && (r.result instanceof Error || "error" in r.result.result) ? "error" : "log";
        t[o].apply(null, [
            a.join(" ")
        ].concat(i));
    };
function ea(t = {}) {
    const { enabled: e = ()=>!0 } = t, r = t.colorMode ?? (typeof window > "u" ? "ansi" : "css"), { logger: n = Ks({
        c: t.console,
        colorMode: r
    }) } = t;
    return ()=>({ op: s, next: a })=>hr.observable((i)=>{
                e({
                    ...s,
                    direction: "up"
                }) && n({
                    ...s,
                    direction: "up"
                });
                const o = Date.now();
                function c(u) {
                    const d = Date.now() - o;
                    e({
                        ...s,
                        direction: "down",
                        result: u
                    }) && n({
                        ...s,
                        direction: "down",
                        elapsedMs: d,
                        result: u
                    });
                }
                return a(s).pipe(hr.tap({
                    next (u) {
                        c(u);
                    },
                    error (u) {
                        c(u);
                    }
                })).subscribe(i);
            });
}
Bt.loggerLink = ea;
var ot = {};
Object.defineProperty(ot, "__esModule", {
    value: !0
});
var ta = we, ra = ke, Kr = xe;
/* istanbul ignore next -- @preserve */ const na = (t)=>t === 0 ? 0 : Math.min(1e3 * 2 ** t, 3e4);
function sa(t) {
    const { url: e, WebSocket: r = WebSocket, retryDelayMs: n = na, onOpen: s, onClose: a } = t;
    /* istanbul ignore next -- @preserve */ if (!r) throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill");
    let i = [];
    const o = /* @__PURE__ */ Object.create(null);
    let c = 0, u = null, d = null, h = Qt(), y = "connecting";
    function k() {
        y !== "open" || u || (u = setTimeout(()=>{
            u = null, i.length === 1 ? h.send(JSON.stringify(i.pop())) : h.send(JSON.stringify(i)), i = [];
        }));
    }
    function T() {
        if (d !== null || y === "closed") return;
        const R = n(c++);
        le(R);
    }
    function A() {
        y = "connecting";
        const R = h;
        h = Qt(), $(R);
    }
    function le(R) {
        d || (y = "connecting", d = setTimeout(A, R));
    }
    function $(R) {
        Object.values(o).some((de)=>de.ws === R) || R.close();
    }
    function H() {
        Object.values(o).forEach((R)=>{
            R.type === "subscription" && R.callbacks.complete();
        });
    }
    function Xt(R) {
        i.some((P)=>P.id === R.op.id) || Kt(R.op, R.callbacks);
    }
    function Qt() {
        const R = typeof e == "function" ? e() : e, P = new r(R);
        clearTimeout(d), d = null, P.addEventListener("open", ()=>{
            /* istanbul ignore next -- @preserve */ P === h && (c = 0, y = "open", s?.(), k());
        }), P.addEventListener("error", ()=>{
            P === h && T();
        });
        const de = (j)=>{
            if (j.method === "reconnect" && P === h) {
                y === "open" && a?.(), A();
                for (const E of Object.values(o))E.type === "subscription" && Xt(E);
            }
        }, pt = (j)=>{
            const E = j.id !== null && o[j.id];
            if (E) {
                if (E.callbacks.next?.(j), E.ws !== h && P === h) {
                    const G = E.ws;
                    E.ws = h, $(G);
                }
                "result" in j && j.result.type === "stopped" && P === h && E.callbacks.complete();
            }
        };
        return P.addEventListener("message", ({ data: j })=>{
            const E = JSON.parse(j);
            "method" in E ? de(E) : pt(E), (P !== h || y === "closed") && $(P);
        }), P.addEventListener("close", ({ code: j })=>{
            y === "open" && a?.({
                code: j
            }), h === P && T();
            for (const [E, G] of Object.entries(o))if (G.ws === P) {
                if (y === "closed") {
                    delete o[E], G.callbacks.complete?.();
                    continue;
                }
                G.type === "subscription" ? Xt(G) : (delete o[E], G.callbacks.error?.(Kr.TRPCClientError.from(new Vt("WebSocket closed prematurely"))));
            }
        }), P;
    }
    function Kt(R, P) {
        const { type: de, input: pt, path: j, id: E } = R, G = {
            id: E,
            method: de,
            params: {
                input: pt,
                path: j
            }
        };
        return o[E] = {
            ws: h,
            type: de,
            callbacks: P,
            op: R
        }, i.push(G), k(), ()=>{
            const Cn = o[E]?.callbacks;
            delete o[E], i = i.filter((Rn)=>Rn.id !== E), Cn?.complete?.(), h.readyState === r.OPEN && R.type === "subscription" && (i.push({
                id: E,
                method: "subscription.stop"
            }), k());
        };
    }
    return {
        close: ()=>{
            y = "closed", a?.(), H(), $(h), clearTimeout(d), d = null;
        },
        request: Kt,
        getConnection () {
            return h;
        }
    };
}
class Vt extends Error {
    constructor(e){
        super(e), this.name = "TRPCWebSocketClosedError", Object.setPrototypeOf(this, Vt.prototype);
    }
}
function aa(t) {
    return (e)=>{
        const { client: r } = t;
        return ({ op: n })=>ta.observable((s)=>{
                const { type: a, path: i, id: o, context: c } = n, u = e.transformer.serialize(n.input), d = r.request({
                    type: a,
                    path: i,
                    input: u,
                    id: o,
                    context: c
                }, {
                    error (h) {
                        s.error(h), d();
                    },
                    complete () {
                        s.complete();
                    },
                    next (h) {
                        const y = ra.transformResult(h, e);
                        if (!y.ok) {
                            s.error(Kr.TRPCClientError.from(y.error));
                            return;
                        }
                        s.next({
                            result: y.result
                        }), n.type !== "subscription" && (d(), s.complete());
                    }
                });
                return ()=>{
                    d();
                };
            });
    };
}
ot.createWSClient = sa;
ot.wsLink = aa;
Object.defineProperty(S, "__esModule", {
    value: !0
});
var mr = we, en = qt, tn = xe, yr = qr, Ae = F, rn = zt, Ft = it, ia = Bt, nn = ot;
class ct {
    $request({ type: e, input: r, path: n, context: s = {} }) {
        return en.createChain({
            links: this.links,
            op: {
                id: ++this.requestId,
                type: e,
                path: n,
                input: r,
                context: s
            }
        }).pipe(mr.share());
    }
    requestAsPromise(e) {
        const r = this.$request(e), { promise: n, abort: s } = mr.observableToPromise(r);
        return new Promise((i, o)=>{
            e.signal?.addEventListener("abort", s), n.then((c)=>{
                i(c.result.data);
            }).catch((c)=>{
                o(tn.TRPCClientError.from(c));
            });
        });
    }
    query(e, r, n) {
        return this.requestAsPromise({
            type: "query",
            path: e,
            input: r,
            context: n?.context,
            signal: n?.signal
        });
    }
    mutation(e, r, n) {
        return this.requestAsPromise({
            type: "mutation",
            path: e,
            input: r,
            context: n?.context,
            signal: n?.signal
        });
    }
    subscription(e, r, n) {
        return this.$request({
            type: "subscription",
            path: e,
            input: r,
            context: n?.context
        }).subscribe({
            next (a) {
                a.result.type === "started" ? n.onStarted?.() : a.result.type === "stopped" ? n.onStopped?.() : n.onData?.(a.result.data);
            },
            error (a) {
                n.onError?.(a);
            },
            complete () {
                n.onComplete?.();
            }
        });
    }
    constructor(e){
        this.requestId = 0;
        const r = (()=>{
            const n = e.transformer;
            return n ? "input" in n ? e.transformer : {
                input: n,
                output: n
            } : {
                input: {
                    serialize: (s)=>s,
                    deserialize: (s)=>s
                },
                output: {
                    serialize: (s)=>s,
                    deserialize: (s)=>s
                }
            };
        })();
        this.runtime = {
            transformer: {
                serialize: (n)=>r.input.serialize(n),
                deserialize: (n)=>r.output.deserialize(n)
            },
            combinedTransformer: r
        }, this.links = e.links.map((n)=>n(this.runtime));
    }
}
function oa(t) {
    return new ct(t);
}
function ca(t) {
    return new ct(t);
}
const ua = {
    query: "query",
    mutate: "mutation",
    subscribe: "subscription"
}, sn = (t)=>ua[t];
function an(t) {
    return yr.createFlatProxy((e)=>t.hasOwnProperty(e) ? t[e] : e === "__untypedClient" ? t : yr.createRecursiveProxy(({ path: r, args: n })=>{
            const s = [
                e,
                ...r
            ], a = sn(s.pop()), i = s.join(".");
            return t[a](i, ...n);
        }));
}
function la(t) {
    const e = new ct(t);
    return an(e);
}
function da(t) {
    return t.__untypedClient;
}
function fa(t) {
    if (t) return t;
    if (typeof window < "u" && window.TextDecoder) return new window.TextDecoder();
    if (typeof globalThis < "u" && globalThis.TextDecoder) return new globalThis.TextDecoder();
    throw new Error("No TextDecoder implementation found");
}
async function pa(t) {
    const e = t.parse ?? JSON.parse, r = (n)=>{
        if (t.signal?.aborted || !n || n === "}") return;
        const s = n.indexOf(":"), a = n.substring(2, s - 1), i = n.substring(s + 1);
        t.onSingle(Number(a), e(i));
    };
    await ha(t.readableStream, r, t.textDecoder);
}
async function ha(t, e, r) {
    let n = "";
    const s = (a)=>{
        const o = r.decode(a).split(`
`);
        if (o.length === 1) n += o[0];
        else if (o.length > 1) {
            e(n + o[0]);
            for(let c = 1; c < o.length - 1; c++)e(o[c]);
            n = o[o.length - 1];
        }
    };
    "getReader" in t ? await ya(t, s) : await ma(t, s), e(n);
}
function ma(t, e) {
    return new Promise((r)=>{
        t.on("data", e), t.on("end", r);
    });
}
async function ya(t, e) {
    const r = t.getReader();
    let n = await r.read();
    for(; !n.done;)e(n.value), n = await r.read();
}
const ga = (t, e)=>{
    const r = t.AbortController ? new t.AbortController() : null, n = Ae.fetchHTTPResponse({
        ...t,
        contentTypeHeader: "application/json",
        batchModeHeader: "stream",
        getUrl: Ae.getUrl,
        getBody: Ae.getBody
    }, r), s = ()=>r?.abort(), a = n.then(async (i)=>{
        if (!i.body) throw new Error("Received response without body");
        const o = {
            response: i
        };
        return pa({
            readableStream: i.body,
            onSingle: e,
            parse: (c)=>({
                    json: JSON.parse(c),
                    meta: o
                }),
            signal: r?.signal,
            textDecoder: t.textDecoder
        });
    });
    return {
        cancel: s,
        promise: a
    };
}, _a = (t)=>{
    const e = fa(t.opts.textDecoder);
    return (r, n)=>{
        const s = r.map((c)=>c.path).join(","), a = r.map((c)=>c.input), { cancel: i, promise: o } = ga({
            ...t,
            textDecoder: e,
            path: s,
            inputs: a,
            headers () {
                return t.opts.headers ? typeof t.opts.headers == "function" ? t.opts.headers({
                    opList: r
                }) : t.opts.headers : {};
            }
        }, (c, u)=>{
            n(c, u);
        });
        return {
            /**
      * return an empty array because the batchLoader expects an array of results
      * but we've already called the `unitResolver` for each of them, there's
      * nothing left to do here.
      */ promise: o.then(()=>[]),
            cancel: i
        };
    };
}, va = rn.createHTTPBatchLink(_a), ba = (t)=>{
    if ("input" in t) {
        if (!(t.input instanceof FormData)) throw new Error("Input is not FormData");
        return t.input;
    }
}, wa = (t)=>{
    if (t.type !== "mutation") throw new Error("We only handle mutations with formdata");
    return Ae.httpRequest({
        ...t,
        getUrl () {
            return `${t.url}/${t.path}`;
        },
        getBody: ba
    });
}, xa = Ft.httpLinkFactory({
    requester: wa
});
S.splitLink = en.splitLink;
S.TRPCClientError = tn.TRPCClientError;
S.getFetch = Ae.getFetch;
S.httpBatchLink = rn.httpBatchLink;
S.httpLink = Ft.httpLink;
S.httpLinkFactory = Ft.httpLinkFactory;
S.loggerLink = ia.loggerLink;
S.createWSClient = nn.createWSClient;
S.wsLink = nn.wsLink;
S.TRPCUntypedClient = ct;
S.clientCallTypeToProcedureType = sn;
S.createTRPCClient = ca;
S.createTRPCClientProxy = an;
S.createTRPCProxyClient = la;
S.createTRPCUntypedClient = oa;
S.experimental_formDataLink = xa;
S.getUntypedClient = da;
S.unstable_httpBatchStreamLink = va;
var ne = {}, Ht = {};
function ka(t) {
    return t;
}
function Ta(t) {
    return t.length === 0 ? ka : t.length === 1 ? t[0] : function(r) {
        return t.reduce((n, s)=>s(n), r);
    };
}
function Ea(t) {
    return typeof t == "object" && t !== null && "subscribe" in t;
}
function Ca(t) {
    const e = {
        subscribe (r) {
            let n = null, s = !1, a = !1, i = !1;
            function o() {
                if (n === null) {
                    i = !0;
                    return;
                }
                a || (a = !0, typeof n == "function" ? n() : n && n.unsubscribe());
            }
            return n = t({
                next (c) {
                    s || r.next?.(c);
                },
                error (c) {
                    s || (s = !0, r.error?.(c), o());
                },
                complete () {
                    s || (s = !0, r.complete?.(), o());
                }
            }), i && o(), {
                unsubscribe: o
            };
        },
        pipe (...r) {
            return Ta(r)(e);
        }
    };
    return e;
}
Ht.isObservable = Ea;
Ht.observable = Ca;
Object.defineProperty(ne, "__esModule", {
    value: !0
});
var on = Ht;
function Ra(t) {
    return (e)=>{
        let r = 0, n = null;
        const s = [];
        function a() {
            n || (n = e.subscribe({
                next (o) {
                    for (const c of s)c.next?.(o);
                },
                error (o) {
                    for (const c of s)c.error?.(o);
                },
                complete () {
                    for (const o of s)o.complete?.();
                }
            }));
        }
        function i() {
            if (r === 0 && n) {
                const o = n;
                n = null, o.unsubscribe();
            }
        }
        return {
            subscribe (o) {
                return r++, s.push(o), a(), {
                    unsubscribe () {
                        r--, i();
                        const c = s.findIndex((u)=>u === o);
                        c > -1 && s.splice(c, 1);
                    }
                };
            }
        };
    };
}
function Oa(t) {
    return (e)=>({
            subscribe (r) {
                let n = 0;
                return e.subscribe({
                    next (a) {
                        r.next?.(t(a, n++));
                    },
                    error (a) {
                        r.error?.(a);
                    },
                    complete () {
                        r.complete?.();
                    }
                });
            }
        });
}
function Sa(t) {
    return (e)=>({
            subscribe (r) {
                return e.subscribe({
                    next (n) {
                        t.next?.(n), r.next?.(n);
                    },
                    error (n) {
                        t.error?.(n), r.error?.(n);
                    },
                    complete () {
                        t.complete?.(), r.complete?.();
                    }
                });
            }
        });
}
class Gt extends Error {
    constructor(e){
        super(e), this.name = "ObservableAbortError", Object.setPrototypeOf(this, Gt.prototype);
    }
}
function Pa(t) {
    let e;
    return {
        promise: new Promise((n, s)=>{
            let a = !1;
            function i() {
                a || (a = !0, s(new Gt("This operation was aborted.")), o.unsubscribe());
            }
            const o = t.subscribe({
                next (c) {
                    a = !0, n(c), i();
                },
                error (c) {
                    a = !0, s(c), i();
                },
                complete () {
                    a = !0, i();
                }
            });
            e = i;
        }),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        abort: e
    };
}
ne.isObservable = on.isObservable;
ne.observable = on.observable;
ne.map = Oa;
ne.observableToPromise = Pa;
ne.share = Ra;
ne.tap = Sa;
var q = {};
Object.defineProperty(q, "__esModule", {
    value: !0
});
q.isTRPCRequestWithId = q.isTRPCRequest = q.isTRPCResponse = q.isTRPCMessage = void 0;
function gr(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
}
function Aa(t) {
    return t == null;
}
function cn(t) {
    return !!(gr(t) && "trpc" in t && gr(t.trpc));
}
q.isTRPCMessage = cn;
function Jt(t) {
    return cn(t) && "id" in t.trpc && !Aa(t.trpc.id);
}
function Na(t) {
    return Jt(t) && ("error" in t.trpc || "result" in t.trpc);
}
q.isTRPCResponse = Na;
function un(t) {
    return Jt(t) && "method" in t.trpc;
}
q.isTRPCRequest = un;
function Ia(t) {
    return un(t) && Jt(t);
}
q.isTRPCRequestWithId = Ia;
Object.defineProperty(be, "__esModule", {
    value: !0
});
be.createBaseLink = void 0;
const wt = S, ja = ne, La = q, $a = (t)=>(e)=>({ op: r })=>(0, ja.observable)((n)=>{
                const s = [], { id: a, type: i, path: o } = r;
                try {
                    const c = e.transformer.serialize(r.input), u = ()=>{
                        n.error(new wt.TRPCClientError("Port disconnected prematurely"));
                    };
                    t.addCloseListener(u), s.push(()=>t.removeCloseListener(u));
                    const d = (h)=>{
                        if (!(0, La.isTRPCResponse)(h)) return;
                        const { trpc: y } = h;
                        if (a === y.id) {
                            if ("error" in y) return n.error(wt.TRPCClientError.from(y));
                            n.next({
                                result: Object.assign(Object.assign({}, y.result), (!y.result.type || y.result.type === "data") && {
                                    type: "data",
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                    data: e.transformer.deserialize(y.result.data)
                                })
                            }), (i !== "subscription" || y.result.type === "stopped") && n.complete();
                        }
                    };
                    t.addMessageListener(d), s.push(()=>t.removeMessageListener(d)), t.postMessage({
                        trpc: {
                            id: a,
                            jsonrpc: void 0,
                            method: i,
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            params: {
                                path: o,
                                input: c
                            }
                        }
                    });
                } catch (c) {
                    n.error(new wt.TRPCClientError(c instanceof Error ? c.message : "Unknown error"));
                }
                return ()=>{
                    i === "subscription" && t.postMessage({
                        trpc: {
                            id: a,
                            jsonrpc: void 0,
                            method: "subscription.stop"
                        }
                    }), s.forEach((c)=>c());
                };
            });
be.createBaseLink = $a;
Object.defineProperty(at, "__esModule", {
    value: !0
});
at.chromeLink = void 0;
const Ma = be, Da = (t)=>(0, Ma.createBaseLink)({
        postMessage (e) {
            t.port.postMessage(e);
        },
        addMessageListener (e) {
            t.port.onMessage.addListener(e);
        },
        removeMessageListener (e) {
            t.port.onMessage.removeListener(e);
        },
        addCloseListener (e) {
            t.port.onDisconnect.addListener(e);
        },
        removeCloseListener (e) {
            t.port.onDisconnect.removeListener(e);
        }
    });
at.chromeLink = Da;
var ut = {};
Object.defineProperty(ut, "__esModule", {
    value: !0
});
ut.windowLink = void 0;
const Za = be, Ua = (t)=>{
    var e;
    const r = /* @__PURE__ */ new Map(), n = t.window, s = (e = t.postWindow) !== null && e !== void 0 ? e : n;
    return (0, Za.createBaseLink)({
        postMessage (a) {
            s.postMessage(a, {
                targetOrigin: t.postOrigin
            });
        },
        addMessageListener (a) {
            const i = (o)=>{
                a(o.data);
            };
            r.set(a, i), n.addEventListener("message", i);
        },
        removeMessageListener (a) {
            const i = r.get(a);
            i && n.removeEventListener("message", i);
        },
        addCloseListener (a) {
            n.addEventListener("beforeunload", a);
        },
        removeCloseListener (a) {
            n.removeEventListener("beforeunload", a);
        }
    });
};
ut.windowLink = Ua;
var lt = {}, dt = {};
Object.defineProperty(dt, "__esModule", {
    value: !0
});
dt.TRPC_BROWSER_LOADED_EVENT = void 0;
dt.TRPC_BROWSER_LOADED_EVENT = "TRPC_BROWSER::POPUP_LOADED";
Object.defineProperty(lt, "__esModule", {
    value: !0
});
lt.popupLink = void 0;
const Wa = dt, qa = be, za = (t)=>{
    const e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let n = null;
    async function s(a) {
        if (!n || n.closed) {
            n = t.createPopup(), await Promise.race([
                // wait til window is loaded (same origin)
                new Promise((i)=>{
                    var o;
                    try {
                        (o = n?.addEventListener) === null || o === void 0 || o.call(n, "load", i);
                    } catch  {}
                }),
                // this is needed for cross-origin popups as they don't have a load event
                new Promise((i)=>{
                    a.addEventListener("message", (o)=>{
                        o.data === Wa.TRPC_BROWSER_LOADED_EVENT && i();
                    });
                }),
                // expect the popup to load after 15s max, in case non of the above events fire
                new Promise((i)=>{
                    console.warn("Could not detect if popup loading succeeded after 15s timeout, continuing anyway"), setTimeout(i, 15e3);
                })
            ]);
            try {
                if (!n.addEventListener) throw new Error("popupWindow.addEventListener is not a function");
                n.addEventListener("beforeunload", ()=>{
                    n = null;
                });
            } catch  {
                const o = setInterval(()=>{
                    n && n.closed && (n = null, r.forEach((c)=>{
                        c();
                    }), clearInterval(o));
                }, 1e3);
            }
        }
        return n;
    }
    return (0, qa.createBaseLink)({
        async postMessage (a) {
            return (await s(t.listenWindow)).postMessage(a, {
                targetOrigin: t.postOrigin
            });
        },
        addMessageListener (a) {
            const i = (o)=>{
                a(o.data);
            };
            e.set(a, i), t.listenWindow.addEventListener("message", i);
        },
        removeMessageListener (a) {
            const i = e.get(a);
            i && t.listenWindow.removeEventListener("message", i);
        },
        addCloseListener (a) {
            t.listenWindow.addEventListener("beforeunload", a), r.add(a);
        },
        removeCloseListener (a) {
            t.listenWindow.removeEventListener("beforeunload", a), r.delete(a);
        }
    });
};
lt.popupLink = za;
(function(t) {
    var e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].__createBinding || (Object.create ? function(n, s, a, i) {
        i === void 0 && (i = a);
        var o = Object.getOwnPropertyDescriptor(s, a);
        (!o || ("get" in o ? !s.__esModule : o.writable || o.configurable)) && (o = {
            enumerable: !0,
            get: function() {
                return s[a];
            }
        }), Object.defineProperty(n, i, o);
    } : function(n, s, a, i) {
        i === void 0 && (i = a), n[i] = s[a];
    }), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].__exportStar || function(n, s) {
        for(var a in n)a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, n, a);
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(at, t), r(ut, t), r(lt, t);
})(Rt);
var x;
(function(t) {
    t.assertEqual = (s)=>s;
    function e(s) {}
    t.assertIs = e;
    function r(s) {
        throw new Error();
    }
    t.assertNever = r, t.arrayToEnum = (s)=>{
        const a = {};
        for (const i of s)a[i] = i;
        return a;
    }, t.getValidEnumValues = (s)=>{
        const a = t.objectKeys(s).filter((o)=>typeof s[s[o]] != "number"), i = {};
        for (const o of a)i[o] = s[o];
        return t.objectValues(i);
    }, t.objectValues = (s)=>t.objectKeys(s).map(function(a) {
            return s[a];
        }), t.objectKeys = typeof Object.keys == "function" ? (s)=>Object.keys(s) : (s)=>{
        const a = [];
        for(const i in s)Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
        return a;
    }, t.find = (s, a)=>{
        for (const i of s)if (a(i)) return i;
    }, t.isInteger = typeof Number.isInteger == "function" ? (s)=>Number.isInteger(s) : (s)=>typeof s == "number" && isFinite(s) && Math.floor(s) === s;
    function n(s, a = " | ") {
        return s.map((i)=>typeof i == "string" ? `'${i}'` : i).join(a);
    }
    t.joinValues = n, t.jsonStringifyReplacer = (s, a)=>typeof a == "bigint" ? a.toString() : a;
})(x || (x = {}));
var Pt;
(function(t) {
    t.mergeShapes = (e, r)=>({
            ...e,
            ...r
        });
})(Pt || (Pt = {}));
const m = x.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]), Y = (t)=>{
    switch(typeof t){
        case "undefined":
            return m.undefined;
        case "string":
            return m.string;
        case "number":
            return isNaN(t) ? m.nan : m.number;
        case "boolean":
            return m.boolean;
        case "function":
            return m.function;
        case "bigint":
            return m.bigint;
        case "symbol":
            return m.symbol;
        case "object":
            return Array.isArray(t) ? m.array : t === null ? m.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? m.promise : typeof Map < "u" && t instanceof Map ? m.map : typeof Set < "u" && t instanceof Set ? m.set : typeof Date < "u" && t instanceof Date ? m.date : m.object;
        default:
            return m.unknown;
    }
}, f = x.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]), Ba = (t)=>JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class L extends Error {
    get errors() {
        return this.issues;
    }
    constructor(e){
        super(), this.issues = [], this.addIssue = (n)=>{
            this.issues = [
                ...this.issues,
                n
            ];
        }, this.addIssues = (n = [])=>{
            this.issues = [
                ...this.issues,
                ...n
            ];
        };
        const r = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
    }
    format(e) {
        const r = e || function(a) {
            return a.message;
        }, n = {
            _errors: []
        }, s = (a)=>{
            for (const i of a.issues)if (i.code === "invalid_union") i.unionErrors.map(s);
            else if (i.code === "invalid_return_type") s(i.returnTypeError);
            else if (i.code === "invalid_arguments") s(i.argumentsError);
            else if (i.path.length === 0) n._errors.push(r(i));
            else {
                let o = n, c = 0;
                for(; c < i.path.length;){
                    const u = i.path[c];
                    c === i.path.length - 1 ? (o[u] = o[u] || {
                        _errors: []
                    }, o[u]._errors.push(r(i))) : o[u] = o[u] || {
                        _errors: []
                    }, o = o[u], c++;
                }
            }
        };
        return s(this), n;
    }
    static assert(e) {
        if (!(e instanceof L)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, x.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(e = (r)=>r.message) {
        const r = {}, n = [];
        for (const s of this.issues)s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(e(s))) : n.push(e(s));
        return {
            formErrors: n,
            fieldErrors: r
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
L.create = (t)=>new L(t);
const ge = (t, e)=>{
    let r;
    switch(t.code){
        case f.invalid_type:
            t.received === m.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
            break;
        case f.invalid_literal:
            r = `Invalid literal value, expected ${JSON.stringify(t.expected, x.jsonStringifyReplacer)}`;
            break;
        case f.unrecognized_keys:
            r = `Unrecognized key(s) in object: ${x.joinValues(t.keys, ", ")}`;
            break;
        case f.invalid_union:
            r = "Invalid input";
            break;
        case f.invalid_union_discriminator:
            r = `Invalid discriminator value. Expected ${x.joinValues(t.options)}`;
            break;
        case f.invalid_enum_value:
            r = `Invalid enum value. Expected ${x.joinValues(t.options)}, received '${t.received}'`;
            break;
        case f.invalid_arguments:
            r = "Invalid function arguments";
            break;
        case f.invalid_return_type:
            r = "Invalid function return type";
            break;
        case f.invalid_date:
            r = "Invalid date";
            break;
        case f.invalid_string:
            typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : x.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
            break;
        case f.too_small:
            t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
            break;
        case f.too_big:
            t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
            break;
        case f.custom:
            r = "Invalid input";
            break;
        case f.invalid_intersection_types:
            r = "Intersection results could not be merged";
            break;
        case f.not_multiple_of:
            r = `Number must be a multiple of ${t.multipleOf}`;
            break;
        case f.not_finite:
            r = "Number must be finite";
            break;
        default:
            r = e.defaultError, x.assertNever(t);
    }
    return {
        message: r
    };
};
let ln = ge;
function Va(t) {
    ln = t;
}
function Ye() {
    return ln;
}
const Xe = (t)=>{
    const { data: e, path: r, errorMaps: n, issueData: s } = t, a = [
        ...r,
        ...s.path || []
    ], i = {
        ...s,
        path: a
    };
    if (s.message !== void 0) return {
        ...s,
        path: a,
        message: s.message
    };
    let o = "";
    const c = n.filter((u)=>!!u).slice().reverse();
    for (const u of c)o = u(i, {
        data: e,
        defaultError: o
    }).message;
    return {
        ...s,
        path: a,
        message: o
    };
}, Fa = [];
function p(t, e) {
    const r = Ye(), n = Xe({
        issueData: e,
        data: t.data,
        path: t.path,
        errorMaps: [
            t.common.contextualErrorMap,
            // contextual error map is first priority
            t.schemaErrorMap,
            // then schema-bound map if available
            r,
            // then global override map
            r === ge ? void 0 : ge
        ].filter((s)=>!!s)
    });
    t.common.issues.push(n);
}
class N {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty");
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(e, r) {
        const n = [];
        for (const s of r){
            if (s.status === "aborted") return v;
            s.status === "dirty" && e.dirty(), n.push(s.value);
        }
        return {
            status: e.value,
            value: n
        };
    }
    static async mergeObjectAsync(e, r) {
        const n = [];
        for (const s of r){
            const a = await s.key, i = await s.value;
            n.push({
                key: a,
                value: i
            });
        }
        return N.mergeObjectSync(e, n);
    }
    static mergeObjectSync(e, r) {
        const n = {};
        for (const s of r){
            const { key: a, value: i } = s;
            if (a.status === "aborted" || i.status === "aborted") return v;
            a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (n[a.value] = i.value);
        }
        return {
            status: e.value,
            value: n
        };
    }
}
const v = Object.freeze({
    status: "aborted"
}), he = (t)=>({
        status: "dirty",
        value: t
    }), I = (t)=>({
        status: "valid",
        value: t
    }), At = (t)=>t.status === "aborted", Nt = (t)=>t.status === "dirty", oe = (t)=>t.status === "valid", Ne = (t)=>typeof Promise < "u" && t instanceof Promise;
function Qe(t, e, r, n) {
    if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}
function dn(t, e, r, n, s) {
    if (n === "m") throw new TypeError("Private method is not writable");
    if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? s.call(t, r) : s ? s.value = r : e.set(t, r), r;
}
var g;
(function(t) {
    t.errToObj = (e)=>typeof e == "string" ? {
            message: e
        } : e || {}, t.toString = (e)=>typeof e == "string" ? e : e?.message;
})(g || (g = {}));
var Re, Oe;
class B {
    constructor(e, r, n, s){
        this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
    }
}
const _r = (t, e)=>{
    if (oe(e)) return {
        success: !0,
        data: e.value
    };
    if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error () {
            if (this._error) return this._error;
            const r = new L(t.common.issues);
            return this._error = r, this._error;
        }
    };
};
function b(t) {
    if (!t) return {};
    const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
    if (e && (r || n)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: s
    } : {
        errorMap: (i, o)=>{
            var c, u;
            const { message: d } = t;
            return i.code === "invalid_enum_value" ? {
                message: d ?? o.defaultError
            } : typeof o.data > "u" ? {
                message: (c = d ?? n) !== null && c !== void 0 ? c : o.defaultError
            } : i.code !== "invalid_type" ? {
                message: o.defaultError
            } : {
                message: (u = d ?? r) !== null && u !== void 0 ? u : o.defaultError
            };
        },
        description: s
    };
}
class w {
    get description() {
        return this._def.description;
    }
    _getType(e) {
        return Y(e.data);
    }
    _getOrReturnCtx(e, r) {
        return r || {
            common: e.parent.common,
            data: e.data,
            parsedType: Y(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        };
    }
    _processInputParams(e) {
        return {
            status: new N(),
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: Y(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        };
    }
    _parseSync(e) {
        const r = this._parse(e);
        if (Ne(r)) throw new Error("Synchronous parse encountered promise.");
        return r;
    }
    _parseAsync(e) {
        const r = this._parse(e);
        return Promise.resolve(r);
    }
    parse(e, r) {
        const n = this.safeParse(e, r);
        if (n.success) return n.data;
        throw n.error;
    }
    safeParse(e, r) {
        var n;
        const s = {
            common: {
                issues: [],
                async: (n = r?.async) !== null && n !== void 0 ? n : !1,
                contextualErrorMap: r?.errorMap
            },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Y(e)
        }, a = this._parseSync({
            data: e,
            path: s.path,
            parent: s
        });
        return _r(s, a);
    }
    "~validate"(e) {
        var r, n;
        const s = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Y(e)
        };
        if (!this["~standard"].async) try {
            const a = this._parseSync({
                data: e,
                path: [],
                parent: s
            });
            return oe(a) ? {
                value: a.value
            } : {
                issues: s.common.issues
            };
        } catch (a) {
            !((n = (r = a?.message) === null || r === void 0 ? void 0 : r.toLowerCase()) === null || n === void 0) && n.includes("encountered") && (this["~standard"].async = !0), s.common = {
                issues: [],
                async: !0
            };
        }
        return this._parseAsync({
            data: e,
            path: [],
            parent: s
        }).then((a)=>oe(a) ? {
                value: a.value
            } : {
                issues: s.common.issues
            });
    }
    async parseAsync(e, r) {
        const n = await this.safeParseAsync(e, r);
        if (n.success) return n.data;
        throw n.error;
    }
    async safeParseAsync(e, r) {
        const n = {
            common: {
                issues: [],
                contextualErrorMap: r?.errorMap,
                async: !0
            },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Y(e)
        }, s = this._parse({
            data: e,
            path: n.path,
            parent: n
        }), a = await (Ne(s) ? s : Promise.resolve(s));
        return _r(n, a);
    }
    refine(e, r) {
        const n = (s)=>typeof r == "string" || typeof r > "u" ? {
                message: r
            } : typeof r == "function" ? r(s) : r;
        return this._refinement((s, a)=>{
            const i = e(s), o = ()=>a.addIssue({
                    code: f.custom,
                    ...n(s)
                });
            return typeof Promise < "u" && i instanceof Promise ? i.then((c)=>c ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
        });
    }
    refinement(e, r) {
        return this._refinement((n, s)=>e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
    }
    _refinement(e) {
        return new W({
            schema: this,
            typeName: _.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        });
    }
    superRefine(e) {
        return this._refinement(e);
    }
    constructor(e){
        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (r)=>this["~validate"](r)
        };
    }
    optional() {
        return z.create(this, this._def);
    }
    nullable() {
        return re.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return U.create(this);
    }
    promise() {
        return ve.create(this, this._def);
    }
    or(e) {
        return $e.create([
            this,
            e
        ], this._def);
    }
    and(e) {
        return Me.create(this, e, this._def);
    }
    transform(e) {
        return new W({
            ...b(this._def),
            schema: this,
            typeName: _.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        });
    }
    default(e) {
        const r = typeof e == "function" ? e : ()=>e;
        return new qe({
            ...b(this._def),
            innerType: this,
            defaultValue: r,
            typeName: _.ZodDefault
        });
    }
    brand() {
        return new Yt({
            typeName: _.ZodBranded,
            type: this,
            ...b(this._def)
        });
    }
    catch(e) {
        const r = typeof e == "function" ? e : ()=>e;
        return new ze({
            ...b(this._def),
            innerType: this,
            catchValue: r,
            typeName: _.ZodCatch
        });
    }
    describe(e) {
        const r = this.constructor;
        return new r({
            ...this._def,
            description: e
        });
    }
    pipe(e) {
        return Fe.create(this, e);
    }
    readonly() {
        return Be.create(this);
    }
    isOptional() {
        return this.safeParse(void 0).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const Ha = /^c[^\s-]{8,}$/i, Ga = /^[0-9a-z]+$/, Ja = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Ya = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Xa = /^[a-z0-9_-]{21}$/i, Qa = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Ka = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, ei = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ti = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let xt;
const ri = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ni = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, si = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ai = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ii = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, oi = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, fn = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ci = new RegExp(`^${fn}$`);
function pn(t) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function ui(t) {
    return new RegExp(`^${pn(t)}$`);
}
function hn(t) {
    let e = `${fn}T${pn(t)}`;
    const r = [];
    return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function li(t, e) {
    return !!((e === "v4" || !e) && ri.test(t) || (e === "v6" || !e) && si.test(t));
}
function di(t, e) {
    if (!Qa.test(t)) return !1;
    try {
        const [r] = t.split("."), n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), s = JSON.parse(atob(n));
        return !(typeof s != "object" || s === null || !s.typ || !s.alg || e && s.alg !== e);
    } catch  {
        return !1;
    }
}
function fi(t, e) {
    return !!((e === "v4" || !e) && ni.test(t) || (e === "v6" || !e) && ai.test(t));
}
class Z extends w {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== m.string) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: f.invalid_type,
                expected: m.string,
                received: a.parsedType
            }), v;
        }
        const n = new N();
        let s;
        for (const a of this._def.checks)if (a.kind === "min") e.data.length < a.value && (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.too_small,
            minimum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message
        }), n.dirty());
        else if (a.kind === "max") e.data.length > a.value && (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message
        }), n.dirty());
        else if (a.kind === "length") {
            const i = e.data.length > a.value, o = e.data.length < a.value;
            (i || o) && (s = this._getOrReturnCtx(e, s), i ? p(s, {
                code: f.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message
            }) : o && p(s, {
                code: f.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message
            }), n.dirty());
        } else if (a.kind === "email") ei.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "email",
            code: f.invalid_string,
            message: a.message
        }), n.dirty());
        else if (a.kind === "emoji") xt || (xt = new RegExp(ti, "u")), xt.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "emoji",
            code: f.invalid_string,
            message: a.message
        }), n.dirty());
        else if (a.kind === "uuid") Ya.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "uuid",
            code: f.invalid_string,
            message: a.message
        }), n.dirty());
        else if (a.kind === "nanoid") Xa.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "nanoid",
            code: f.invalid_string,
            message: a.message
        }), n.dirty());
        else if (a.kind === "cuid") Ha.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "cuid",
            code: f.invalid_string,
            message: a.message
        }), n.dirty());
        else if (a.kind === "cuid2") Ga.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "cuid2",
            code: f.invalid_string,
            message: a.message
        }), n.dirty());
        else if (a.kind === "ulid") Ja.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "ulid",
            code: f.invalid_string,
            message: a.message
        }), n.dirty());
        else if (a.kind === "url") try {
            new URL(e.data);
        } catch  {
            s = this._getOrReturnCtx(e, s), p(s, {
                validation: "url",
                code: f.invalid_string,
                message: a.message
            }), n.dirty();
        }
        else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "regex",
            code: f.invalid_string,
            message: a.message
        }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.invalid_string,
            validation: {
                includes: a.value,
                position: a.position
            },
            message: a.message
        }), n.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.invalid_string,
            validation: {
                startsWith: a.value
            },
            message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.invalid_string,
            validation: {
                endsWith: a.value
            },
            message: a.message
        }), n.dirty()) : a.kind === "datetime" ? hn(a).test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.invalid_string,
            validation: "datetime",
            message: a.message
        }), n.dirty()) : a.kind === "date" ? ci.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.invalid_string,
            validation: "date",
            message: a.message
        }), n.dirty()) : a.kind === "time" ? ui(a).test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.invalid_string,
            validation: "time",
            message: a.message
        }), n.dirty()) : a.kind === "duration" ? Ka.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "duration",
            code: f.invalid_string,
            message: a.message
        }), n.dirty()) : a.kind === "ip" ? li(e.data, a.version) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "ip",
            code: f.invalid_string,
            message: a.message
        }), n.dirty()) : a.kind === "jwt" ? di(e.data, a.alg) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "jwt",
            code: f.invalid_string,
            message: a.message
        }), n.dirty()) : a.kind === "cidr" ? fi(e.data, a.version) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "cidr",
            code: f.invalid_string,
            message: a.message
        }), n.dirty()) : a.kind === "base64" ? ii.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "base64",
            code: f.invalid_string,
            message: a.message
        }), n.dirty()) : a.kind === "base64url" ? oi.test(e.data) || (s = this._getOrReturnCtx(e, s), p(s, {
            validation: "base64url",
            code: f.invalid_string,
            message: a.message
        }), n.dirty()) : x.assertNever(a);
        return {
            status: n.value,
            value: e.data
        };
    }
    _regex(e, r, n) {
        return this.refinement((s)=>e.test(s), {
            validation: r,
            code: f.invalid_string,
            ...g.errToObj(n)
        });
    }
    _addCheck(e) {
        return new Z({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...g.errToObj(e)
        });
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...g.errToObj(e)
        });
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...g.errToObj(e)
        });
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...g.errToObj(e)
        });
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...g.errToObj(e)
        });
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...g.errToObj(e)
        });
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...g.errToObj(e)
        });
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...g.errToObj(e)
        });
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...g.errToObj(e)
        });
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...g.errToObj(e)
        });
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...g.errToObj(e)
        });
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...g.errToObj(e)
        });
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...g.errToObj(e)
        });
    }
    datetime(e) {
        var r, n;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            offset: (r = e?.offset) !== null && r !== void 0 ? r : !1,
            local: (n = e?.local) !== null && n !== void 0 ? n : !1,
            ...g.errToObj(e?.message)
        });
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        });
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            ...g.errToObj(e?.message)
        });
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...g.errToObj(e)
        });
    }
    regex(e, r) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...g.errToObj(r)
        });
    }
    includes(e, r) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: r?.position,
            ...g.errToObj(r?.message)
        });
    }
    startsWith(e, r) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...g.errToObj(r)
        });
    }
    endsWith(e, r) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...g.errToObj(r)
        });
    }
    min(e, r) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...g.errToObj(r)
        });
    }
    max(e, r) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...g.errToObj(r)
        });
    }
    length(e, r) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...g.errToObj(r)
        });
    }
    /**
   * Equivalent to `.min(1)`
   */ nonempty(e) {
        return this.min(1, g.errToObj(e));
    }
    trim() {
        return new Z({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new Z({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new Z({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((e)=>e.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((e)=>e.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((e)=>e.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((e)=>e.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((e)=>e.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((e)=>e.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((e)=>e.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((e)=>e.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((e)=>e.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((e)=>e.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((e)=>e.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((e)=>e.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((e)=>e.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((e)=>e.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((e)=>e.kind === "base64");
    }
    get isBase64url() {
        return !!this._def.checks.find((e)=>e.kind === "base64url");
    }
    get minLength() {
        let e = null;
        for (const r of this._def.checks)r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
    }
    get maxLength() {
        let e = null;
        for (const r of this._def.checks)r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
    }
}
Z.create = (t)=>{
    var e;
    return new Z({
        checks: [],
        typeName: _.ZodString,
        coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
        ...b(t)
    });
};
function pi(t, e) {
    const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, a = parseInt(t.toFixed(s).replace(".", "")), i = parseInt(e.toFixed(s).replace(".", ""));
    return a % i / Math.pow(10, s);
}
class K extends w {
    constructor(){
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== m.number) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: f.invalid_type,
                expected: m.number,
                received: a.parsedType
            }), v;
        }
        let n;
        const s = new N();
        for (const a of this._def.checks)a.kind === "int" ? x.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), p(n, {
            code: f.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message
        }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), p(n, {
            code: f.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message
        }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), p(n, {
            code: f.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message
        }), s.dirty()) : a.kind === "multipleOf" ? pi(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), p(n, {
            code: f.not_multiple_of,
            multipleOf: a.value,
            message: a.message
        }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), p(n, {
            code: f.not_finite,
            message: a.message
        }), s.dirty()) : x.assertNever(a);
        return {
            status: s.value,
            value: e.data
        };
    }
    gte(e, r) {
        return this.setLimit("min", e, !0, g.toString(r));
    }
    gt(e, r) {
        return this.setLimit("min", e, !1, g.toString(r));
    }
    lte(e, r) {
        return this.setLimit("max", e, !0, g.toString(r));
    }
    lt(e, r) {
        return this.setLimit("max", e, !1, g.toString(r));
    }
    setLimit(e, r, n, s) {
        return new K({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: e,
                    value: r,
                    inclusive: n,
                    message: g.toString(s)
                }
            ]
        });
    }
    _addCheck(e) {
        return new K({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: g.toString(e)
        });
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: g.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: g.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: g.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: g.toString(e)
        });
    }
    multipleOf(e, r) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: g.toString(r)
        });
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: g.toString(e)
        });
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: g.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: g.toString(e)
        });
    }
    get minValue() {
        let e = null;
        for (const r of this._def.checks)r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const r of this._def.checks)r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
    }
    get isInt() {
        return !!this._def.checks.find((e)=>e.kind === "int" || e.kind === "multipleOf" && x.isInteger(e.value));
    }
    get isFinite() {
        let e = null, r = null;
        for (const n of this._def.checks){
            if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
            n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        }
        return Number.isFinite(r) && Number.isFinite(e);
    }
}
K.create = (t)=>new K({
        checks: [],
        typeName: _.ZodNumber,
        coerce: t?.coerce || !1,
        ...b(t)
    });
class ee extends w {
    constructor(){
        super(...arguments), this.min = this.gte, this.max = this.lte;
    }
    _parse(e) {
        if (this._def.coerce) try {
            e.data = BigInt(e.data);
        } catch  {
            return this._getInvalidInput(e);
        }
        if (this._getType(e) !== m.bigint) return this._getInvalidInput(e);
        let n;
        const s = new N();
        for (const a of this._def.checks)a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), p(n, {
            code: f.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message
        }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), p(n, {
            code: f.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message
        }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), p(n, {
            code: f.not_multiple_of,
            multipleOf: a.value,
            message: a.message
        }), s.dirty()) : x.assertNever(a);
        return {
            status: s.value,
            value: e.data
        };
    }
    _getInvalidInput(e) {
        const r = this._getOrReturnCtx(e);
        return p(r, {
            code: f.invalid_type,
            expected: m.bigint,
            received: r.parsedType
        }), v;
    }
    gte(e, r) {
        return this.setLimit("min", e, !0, g.toString(r));
    }
    gt(e, r) {
        return this.setLimit("min", e, !1, g.toString(r));
    }
    lte(e, r) {
        return this.setLimit("max", e, !0, g.toString(r));
    }
    lt(e, r) {
        return this.setLimit("max", e, !1, g.toString(r));
    }
    setLimit(e, r, n, s) {
        return new ee({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: e,
                    value: r,
                    inclusive: n,
                    message: g.toString(s)
                }
            ]
        });
    }
    _addCheck(e) {
        return new ee({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: g.toString(e)
        });
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: g.toString(e)
        });
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: g.toString(e)
        });
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: g.toString(e)
        });
    }
    multipleOf(e, r) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: g.toString(r)
        });
    }
    get minValue() {
        let e = null;
        for (const r of this._def.checks)r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const r of this._def.checks)r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
    }
}
ee.create = (t)=>{
    var e;
    return new ee({
        checks: [],
        typeName: _.ZodBigInt,
        coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
        ...b(t)
    });
};
class Ie extends w {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean) {
            const n = this._getOrReturnCtx(e);
            return p(n, {
                code: f.invalid_type,
                expected: m.boolean,
                received: n.parsedType
            }), v;
        }
        return I(e.data);
    }
}
Ie.create = (t)=>new Ie({
        typeName: _.ZodBoolean,
        coerce: t?.coerce || !1,
        ...b(t)
    });
class ce extends w {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== m.date) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: f.invalid_type,
                expected: m.date,
                received: a.parsedType
            }), v;
        }
        if (isNaN(e.data.getTime())) {
            const a = this._getOrReturnCtx(e);
            return p(a, {
                code: f.invalid_date
            }), v;
        }
        const n = new N();
        let s;
        for (const a of this._def.checks)a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date"
        }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), p(s, {
            code: f.too_big,
            message: a.message,
            inclusive: !0,
            exact: !1,
            maximum: a.value,
            type: "date"
        }), n.dirty()) : x.assertNever(a);
        return {
            status: n.value,
            value: new Date(e.data.getTime())
        };
    }
    _addCheck(e) {
        return new ce({
            ...this._def,
            checks: [
                ...this._def.checks,
                e
            ]
        });
    }
    min(e, r) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: g.toString(r)
        });
    }
    max(e, r) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: g.toString(r)
        });
    }
    get minDate() {
        let e = null;
        for (const r of this._def.checks)r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e != null ? new Date(e) : null;
    }
    get maxDate() {
        let e = null;
        for (const r of this._def.checks)r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e != null ? new Date(e) : null;
    }
}
ce.create = (t)=>new ce({
        checks: [],
        coerce: t?.coerce || !1,
        typeName: _.ZodDate,
        ...b(t)
    });
class Ke extends w {
    _parse(e) {
        if (this._getType(e) !== m.symbol) {
            const n = this._getOrReturnCtx(e);
            return p(n, {
                code: f.invalid_type,
                expected: m.symbol,
                received: n.parsedType
            }), v;
        }
        return I(e.data);
    }
}
Ke.create = (t)=>new Ke({
        typeName: _.ZodSymbol,
        ...b(t)
    });
class je extends w {
    _parse(e) {
        if (this._getType(e) !== m.undefined) {
            const n = this._getOrReturnCtx(e);
            return p(n, {
                code: f.invalid_type,
                expected: m.undefined,
                received: n.parsedType
            }), v;
        }
        return I(e.data);
    }
}
je.create = (t)=>new je({
        typeName: _.ZodUndefined,
        ...b(t)
    });
class Le extends w {
    _parse(e) {
        if (this._getType(e) !== m.null) {
            const n = this._getOrReturnCtx(e);
            return p(n, {
                code: f.invalid_type,
                expected: m.null,
                received: n.parsedType
            }), v;
        }
        return I(e.data);
    }
}
Le.create = (t)=>new Le({
        typeName: _.ZodNull,
        ...b(t)
    });
class _e extends w {
    constructor(){
        super(...arguments), this._any = !0;
    }
    _parse(e) {
        return I(e.data);
    }
}
_e.create = (t)=>new _e({
        typeName: _.ZodAny,
        ...b(t)
    });
class ie extends w {
    constructor(){
        super(...arguments), this._unknown = !0;
    }
    _parse(e) {
        return I(e.data);
    }
}
ie.create = (t)=>new ie({
        typeName: _.ZodUnknown,
        ...b(t)
    });
class X extends w {
    _parse(e) {
        const r = this._getOrReturnCtx(e);
        return p(r, {
            code: f.invalid_type,
            expected: m.never,
            received: r.parsedType
        }), v;
    }
}
X.create = (t)=>new X({
        typeName: _.ZodNever,
        ...b(t)
    });
class et extends w {
    _parse(e) {
        if (this._getType(e) !== m.undefined) {
            const n = this._getOrReturnCtx(e);
            return p(n, {
                code: f.invalid_type,
                expected: m.void,
                received: n.parsedType
            }), v;
        }
        return I(e.data);
    }
}
et.create = (t)=>new et({
        typeName: _.ZodVoid,
        ...b(t)
    });
class U extends w {
    _parse(e) {
        const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
        if (r.parsedType !== m.array) return p(r, {
            code: f.invalid_type,
            expected: m.array,
            received: r.parsedType
        }), v;
        if (s.exactLength !== null) {
            const i = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
            (i || o) && (p(r, {
                code: i ? f.too_big : f.too_small,
                minimum: o ? s.exactLength.value : void 0,
                maximum: i ? s.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: s.exactLength.message
            }), n.dirty());
        }
        if (s.minLength !== null && r.data.length < s.minLength.value && (p(r, {
            code: f.too_small,
            minimum: s.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: s.minLength.message
        }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (p(r, {
            code: f.too_big,
            maximum: s.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: s.maxLength.message
        }), n.dirty()), r.common.async) return Promise.all([
            ...r.data
        ].map((i, o)=>s.type._parseAsync(new B(r, i, r.path, o)))).then((i)=>N.mergeArray(n, i));
        const a = [
            ...r.data
        ].map((i, o)=>s.type._parseSync(new B(r, i, r.path, o)));
        return N.mergeArray(n, a);
    }
    get element() {
        return this._def.type;
    }
    min(e, r) {
        return new U({
            ...this._def,
            minLength: {
                value: e,
                message: g.toString(r)
            }
        });
    }
    max(e, r) {
        return new U({
            ...this._def,
            maxLength: {
                value: e,
                message: g.toString(r)
            }
        });
    }
    length(e, r) {
        return new U({
            ...this._def,
            exactLength: {
                value: e,
                message: g.toString(r)
            }
        });
    }
    nonempty(e) {
        return this.min(1, e);
    }
}
U.create = (t, e)=>new U({
        type: t,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: _.ZodArray,
        ...b(e)
    });
function pe(t) {
    if (t instanceof C) {
        const e = {};
        for(const r in t.shape){
            const n = t.shape[r];
            e[r] = z.create(pe(n));
        }
        return new C({
            ...t._def,
            shape: ()=>e
        });
    } else return t instanceof U ? new U({
        ...t._def,
        type: pe(t.element)
    }) : t instanceof z ? z.create(pe(t.unwrap())) : t instanceof re ? re.create(pe(t.unwrap())) : t instanceof V ? V.create(t.items.map((e)=>pe(e))) : t;
}
class C extends w {
    constructor(){
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const e = this._def.shape(), r = x.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: r
        };
    }
    _parse(e) {
        if (this._getType(e) !== m.object) {
            const u = this._getOrReturnCtx(e);
            return p(u, {
                code: f.invalid_type,
                expected: m.object,
                received: u.parsedType
            }), v;
        }
        const { status: n, ctx: s } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
        if (!(this._def.catchall instanceof X && this._def.unknownKeys === "strip")) for(const u in s.data)i.includes(u) || o.push(u);
        const c = [];
        for (const u of i){
            const d = a[u], h = s.data[u];
            c.push({
                key: {
                    status: "valid",
                    value: u
                },
                value: d._parse(new B(s, h, s.path, u)),
                alwaysSet: u in s.data
            });
        }
        if (this._def.catchall instanceof X) {
            const u = this._def.unknownKeys;
            if (u === "passthrough") for (const d of o)c.push({
                key: {
                    status: "valid",
                    value: d
                },
                value: {
                    status: "valid",
                    value: s.data[d]
                }
            });
            else if (u === "strict") o.length > 0 && (p(s, {
                code: f.unrecognized_keys,
                keys: o
            }), n.dirty());
            else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
            const u = this._def.catchall;
            for (const d of o){
                const h = s.data[d];
                c.push({
                    key: {
                        status: "valid",
                        value: d
                    },
                    value: u._parse(new B(s, h, s.path, d)),
                    alwaysSet: d in s.data
                });
            }
        }
        return s.common.async ? Promise.resolve().then(async ()=>{
            const u = [];
            for (const d of c){
                const h = await d.key, y = await d.value;
                u.push({
                    key: h,
                    value: y,
                    alwaysSet: d.alwaysSet
                });
            }
            return u;
        }).then((u)=>N.mergeObjectSync(n, u)) : N.mergeObjectSync(n, c);
    }
    get shape() {
        return this._def.shape();
    }
    strict(e) {
        return g.errToObj, new C({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (r, n)=>{
                    var s, a, i, o;
                    const c = (i = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, r, n).message) !== null && i !== void 0 ? i : n.defaultError;
                    return r.code === "unrecognized_keys" ? {
                        message: (o = g.errToObj(e).message) !== null && o !== void 0 ? o : c
                    } : {
                        message: c
                    };
                }
            } : {}
        });
    }
    strip() {
        return new C({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new C({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(e) {
        return new C({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...e
                })
        });
    }
    /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */ merge(e) {
        return new C({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...e._def.shape()
                }),
            typeName: _.ZodObject
        });
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(e, r) {
        return this.augment({
            [e]: r
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(e) {
        return new C({
            ...this._def,
            catchall: e
        });
    }
    pick(e) {
        const r = {};
        return x.objectKeys(e).forEach((n)=>{
            e[n] && this.shape[n] && (r[n] = this.shape[n]);
        }), new C({
            ...this._def,
            shape: ()=>r
        });
    }
    omit(e) {
        const r = {};
        return x.objectKeys(this.shape).forEach((n)=>{
            e[n] || (r[n] = this.shape[n]);
        }), new C({
            ...this._def,
            shape: ()=>r
        });
    }
    /**
   * @deprecated
   */ deepPartial() {
        return pe(this);
    }
    partial(e) {
        const r = {};
        return x.objectKeys(this.shape).forEach((n)=>{
            const s = this.shape[n];
            e && !e[n] ? r[n] = s : r[n] = s.optional();
        }), new C({
            ...this._def,
            shape: ()=>r
        });
    }
    required(e) {
        const r = {};
        return x.objectKeys(this.shape).forEach((n)=>{
            if (e && !e[n]) r[n] = this.shape[n];
            else {
                let a = this.shape[n];
                for(; a instanceof z;)a = a._def.innerType;
                r[n] = a;
            }
        }), new C({
            ...this._def,
            shape: ()=>r
        });
    }
    keyof() {
        return mn(x.objectKeys(this.shape));
    }
}
C.create = (t, e)=>new C({
        shape: ()=>t,
        unknownKeys: "strip",
        catchall: X.create(),
        typeName: _.ZodObject,
        ...b(e)
    });
C.strictCreate = (t, e)=>new C({
        shape: ()=>t,
        unknownKeys: "strict",
        catchall: X.create(),
        typeName: _.ZodObject,
        ...b(e)
    });
C.lazycreate = (t, e)=>new C({
        shape: t,
        unknownKeys: "strip",
        catchall: X.create(),
        typeName: _.ZodObject,
        ...b(e)
    });
class $e extends w {
    _parse(e) {
        const { ctx: r } = this._processInputParams(e), n = this._def.options;
        function s(a) {
            for (const o of a)if (o.result.status === "valid") return o.result;
            for (const o of a)if (o.result.status === "dirty") return r.common.issues.push(...o.ctx.common.issues), o.result;
            const i = a.map((o)=>new L(o.ctx.common.issues));
            return p(r, {
                code: f.invalid_union,
                unionErrors: i
            }), v;
        }
        if (r.common.async) return Promise.all(n.map(async (a)=>{
            const i = {
                ...r,
                common: {
                    ...r.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await a._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: i
                }),
                ctx: i
            };
        })).then(s);
        {
            let a;
            const i = [];
            for (const c of n){
                const u = {
                    ...r,
                    common: {
                        ...r.common,
                        issues: []
                    },
                    parent: null
                }, d = c._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: u
                });
                if (d.status === "valid") return d;
                d.status === "dirty" && !a && (a = {
                    result: d,
                    ctx: u
                }), u.common.issues.length && i.push(u.common.issues);
            }
            if (a) return r.common.issues.push(...a.ctx.common.issues), a.result;
            const o = i.map((c)=>new L(c));
            return p(r, {
                code: f.invalid_union,
                unionErrors: o
            }), v;
        }
    }
    get options() {
        return this._def.options;
    }
}
$e.create = (t, e)=>new $e({
        options: t,
        typeName: _.ZodUnion,
        ...b(e)
    });
const J = (t)=>t instanceof Ze ? J(t.schema) : t instanceof W ? J(t.innerType()) : t instanceof Ue ? [
        t.value
    ] : t instanceof te ? t.options : t instanceof We ? x.objectValues(t.enum) : t instanceof qe ? J(t._def.innerType) : t instanceof je ? [
        void 0
    ] : t instanceof Le ? [
        null
    ] : t instanceof z ? [
        void 0,
        ...J(t.unwrap())
    ] : t instanceof re ? [
        null,
        ...J(t.unwrap())
    ] : t instanceof Yt || t instanceof Be ? J(t.unwrap()) : t instanceof ze ? J(t._def.innerType) : [];
class ft extends w {
    _parse(e) {
        const { ctx: r } = this._processInputParams(e);
        if (r.parsedType !== m.object) return p(r, {
            code: f.invalid_type,
            expected: m.object,
            received: r.parsedType
        }), v;
        const n = this.discriminator, s = r.data[n], a = this.optionsMap.get(s);
        return a ? r.common.async ? a._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }) : a._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }) : (p(r, {
            code: f.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [
                n
            ]
        }), v);
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */ static create(e, r, n) {
        const s = /* @__PURE__ */ new Map();
        for (const a of r){
            const i = J(a.shape[e]);
            if (!i.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const o of i){
                if (s.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
                s.set(o, a);
            }
        }
        return new ft({
            typeName: _.ZodDiscriminatedUnion,
            discriminator: e,
            options: r,
            optionsMap: s,
            ...b(n)
        });
    }
}
function It(t, e) {
    const r = Y(t), n = Y(e);
    if (t === e) return {
        valid: !0,
        data: t
    };
    if (r === m.object && n === m.object) {
        const s = x.objectKeys(e), a = x.objectKeys(t).filter((o)=>s.indexOf(o) !== -1), i = {
            ...t,
            ...e
        };
        for (const o of a){
            const c = It(t[o], e[o]);
            if (!c.valid) return {
                valid: !1
            };
            i[o] = c.data;
        }
        return {
            valid: !0,
            data: i
        };
    } else if (r === m.array && n === m.array) {
        if (t.length !== e.length) return {
            valid: !1
        };
        const s = [];
        for(let a = 0; a < t.length; a++){
            const i = t[a], o = e[a], c = It(i, o);
            if (!c.valid) return {
                valid: !1
            };
            s.push(c.data);
        }
        return {
            valid: !0,
            data: s
        };
    } else return r === m.date && n === m.date && +t == +e ? {
        valid: !0,
        data: t
    } : {
        valid: !1
    };
}
class Me extends w {
    _parse(e) {
        const { status: r, ctx: n } = this._processInputParams(e), s = (a, i)=>{
            if (At(a) || At(i)) return v;
            const o = It(a.value, i.value);
            return o.valid ? ((Nt(a) || Nt(i)) && r.dirty(), {
                status: r.value,
                value: o.data
            }) : (p(n, {
                code: f.invalid_intersection_types
            }), v);
        };
        return n.common.async ? Promise.all([
            this._def.left._parseAsync({
                data: n.data,
                path: n.path,
                parent: n
            }),
            this._def.right._parseAsync({
                data: n.data,
                path: n.path,
                parent: n
            })
        ]).then(([a, i])=>s(a, i)) : s(this._def.left._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }), this._def.right._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }));
    }
}
Me.create = (t, e, r)=>new Me({
        left: t,
        right: e,
        typeName: _.ZodIntersection,
        ...b(r)
    });
class V extends w {
    _parse(e) {
        const { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== m.array) return p(n, {
            code: f.invalid_type,
            expected: m.array,
            received: n.parsedType
        }), v;
        if (n.data.length < this._def.items.length) return p(n, {
            code: f.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), v;
        !this._def.rest && n.data.length > this._def.items.length && (p(n, {
            code: f.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), r.dirty());
        const a = [
            ...n.data
        ].map((i, o)=>{
            const c = this._def.items[o] || this._def.rest;
            return c ? c._parse(new B(n, i, n.path, o)) : null;
        }).filter((i)=>!!i);
        return n.common.async ? Promise.all(a).then((i)=>N.mergeArray(r, i)) : N.mergeArray(r, a);
    }
    get items() {
        return this._def.items;
    }
    rest(e) {
        return new V({
            ...this._def,
            rest: e
        });
    }
}
V.create = (t, e)=>{
    if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new V({
        items: t,
        typeName: _.ZodTuple,
        rest: null,
        ...b(e)
    });
};
class De extends w {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== m.object) return p(n, {
            code: f.invalid_type,
            expected: m.object,
            received: n.parsedType
        }), v;
        const s = [], a = this._def.keyType, i = this._def.valueType;
        for(const o in n.data)s.push({
            key: a._parse(new B(n, o, n.path, o)),
            value: i._parse(new B(n, n.data[o], n.path, o)),
            alwaysSet: o in n.data
        });
        return n.common.async ? N.mergeObjectAsync(r, s) : N.mergeObjectSync(r, s);
    }
    get element() {
        return this._def.valueType;
    }
    static create(e, r, n) {
        return r instanceof w ? new De({
            keyType: e,
            valueType: r,
            typeName: _.ZodRecord,
            ...b(n)
        }) : new De({
            keyType: Z.create(),
            valueType: e,
            typeName: _.ZodRecord,
            ...b(r)
        });
    }
}
class tt extends w {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== m.map) return p(n, {
            code: f.invalid_type,
            expected: m.map,
            received: n.parsedType
        }), v;
        const s = this._def.keyType, a = this._def.valueType, i = [
            ...n.data.entries()
        ].map(([o, c], u)=>({
                key: s._parse(new B(n, o, n.path, [
                    u,
                    "key"
                ])),
                value: a._parse(new B(n, c, n.path, [
                    u,
                    "value"
                ]))
            }));
        if (n.common.async) {
            const o = /* @__PURE__ */ new Map();
            return Promise.resolve().then(async ()=>{
                for (const c of i){
                    const u = await c.key, d = await c.value;
                    if (u.status === "aborted" || d.status === "aborted") return v;
                    (u.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(u.value, d.value);
                }
                return {
                    status: r.value,
                    value: o
                };
            });
        } else {
            const o = /* @__PURE__ */ new Map();
            for (const c of i){
                const u = c.key, d = c.value;
                if (u.status === "aborted" || d.status === "aborted") return v;
                (u.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(u.value, d.value);
            }
            return {
                status: r.value,
                value: o
            };
        }
    }
}
tt.create = (t, e, r)=>new tt({
        valueType: e,
        keyType: t,
        typeName: _.ZodMap,
        ...b(r)
    });
class ue extends w {
    _parse(e) {
        const { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== m.set) return p(n, {
            code: f.invalid_type,
            expected: m.set,
            received: n.parsedType
        }), v;
        const s = this._def;
        s.minSize !== null && n.data.size < s.minSize.value && (p(n, {
            code: f.too_small,
            minimum: s.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.minSize.message
        }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (p(n, {
            code: f.too_big,
            maximum: s.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.maxSize.message
        }), r.dirty());
        const a = this._def.valueType;
        function i(c) {
            const u = /* @__PURE__ */ new Set();
            for (const d of c){
                if (d.status === "aborted") return v;
                d.status === "dirty" && r.dirty(), u.add(d.value);
            }
            return {
                status: r.value,
                value: u
            };
        }
        const o = [
            ...n.data.values()
        ].map((c, u)=>a._parse(new B(n, c, n.path, u)));
        return n.common.async ? Promise.all(o).then((c)=>i(c)) : i(o);
    }
    min(e, r) {
        return new ue({
            ...this._def,
            minSize: {
                value: e,
                message: g.toString(r)
            }
        });
    }
    max(e, r) {
        return new ue({
            ...this._def,
            maxSize: {
                value: e,
                message: g.toString(r)
            }
        });
    }
    size(e, r) {
        return this.min(e, r).max(e, r);
    }
    nonempty(e) {
        return this.min(1, e);
    }
}
ue.create = (t, e)=>new ue({
        valueType: t,
        minSize: null,
        maxSize: null,
        typeName: _.ZodSet,
        ...b(e)
    });
class me extends w {
    constructor(){
        super(...arguments), this.validate = this.implement;
    }
    _parse(e) {
        const { ctx: r } = this._processInputParams(e);
        if (r.parsedType !== m.function) return p(r, {
            code: f.invalid_type,
            expected: m.function,
            received: r.parsedType
        }), v;
        function n(o, c) {
            return Xe({
                data: o,
                path: r.path,
                errorMaps: [
                    r.common.contextualErrorMap,
                    r.schemaErrorMap,
                    Ye(),
                    ge
                ].filter((u)=>!!u),
                issueData: {
                    code: f.invalid_arguments,
                    argumentsError: c
                }
            });
        }
        function s(o, c) {
            return Xe({
                data: o,
                path: r.path,
                errorMaps: [
                    r.common.contextualErrorMap,
                    r.schemaErrorMap,
                    Ye(),
                    ge
                ].filter((u)=>!!u),
                issueData: {
                    code: f.invalid_return_type,
                    returnTypeError: c
                }
            });
        }
        const a = {
            errorMap: r.common.contextualErrorMap
        }, i = r.data;
        if (this._def.returns instanceof ve) {
            const o = this;
            return I(async function(...c) {
                const u = new L([]), d = await o._def.args.parseAsync(c, a).catch((k)=>{
                    throw u.addIssue(n(c, k)), u;
                }), h = await Reflect.apply(i, this, d);
                return await o._def.returns._def.type.parseAsync(h, a).catch((k)=>{
                    throw u.addIssue(s(h, k)), u;
                });
            });
        } else {
            const o = this;
            return I(function(...c) {
                const u = o._def.args.safeParse(c, a);
                if (!u.success) throw new L([
                    n(c, u.error)
                ]);
                const d = Reflect.apply(i, this, u.data), h = o._def.returns.safeParse(d, a);
                if (!h.success) throw new L([
                    s(d, h.error)
                ]);
                return h.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...e) {
        return new me({
            ...this._def,
            args: V.create(e).rest(ie.create())
        });
    }
    returns(e) {
        return new me({
            ...this._def,
            returns: e
        });
    }
    implement(e) {
        return this.parse(e);
    }
    strictImplement(e) {
        return this.parse(e);
    }
    static create(e, r, n) {
        return new me({
            args: e || V.create([]).rest(ie.create()),
            returns: r || ie.create(),
            typeName: _.ZodFunction,
            ...b(n)
        });
    }
}
class Ze extends w {
    get schema() {
        return this._def.getter();
    }
    _parse(e) {
        const { ctx: r } = this._processInputParams(e);
        return this._def.getter()._parse({
            data: r.data,
            path: r.path,
            parent: r
        });
    }
}
Ze.create = (t, e)=>new Ze({
        getter: t,
        typeName: _.ZodLazy,
        ...b(e)
    });
class Ue extends w {
    _parse(e) {
        if (e.data !== this._def.value) {
            const r = this._getOrReturnCtx(e);
            return p(r, {
                received: r.data,
                code: f.invalid_literal,
                expected: this._def.value
            }), v;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
    get value() {
        return this._def.value;
    }
}
Ue.create = (t, e)=>new Ue({
        value: t,
        typeName: _.ZodLiteral,
        ...b(e)
    });
function mn(t, e) {
    return new te({
        values: t,
        typeName: _.ZodEnum,
        ...b(e)
    });
}
class te extends w {
    constructor(){
        super(...arguments), Re.set(this, void 0);
    }
    _parse(e) {
        if (typeof e.data != "string") {
            const r = this._getOrReturnCtx(e), n = this._def.values;
            return p(r, {
                expected: x.joinValues(n),
                received: r.parsedType,
                code: f.invalid_type
            }), v;
        }
        if (Qe(this, Re, "f") || dn(this, Re, new Set(this._def.values), "f"), !Qe(this, Re, "f").has(e.data)) {
            const r = this._getOrReturnCtx(e), n = this._def.values;
            return p(r, {
                received: r.data,
                code: f.invalid_enum_value,
                options: n
            }), v;
        }
        return I(e.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const e = {};
        for (const r of this._def.values)e[r] = r;
        return e;
    }
    get Values() {
        const e = {};
        for (const r of this._def.values)e[r] = r;
        return e;
    }
    get Enum() {
        const e = {};
        for (const r of this._def.values)e[r] = r;
        return e;
    }
    extract(e, r = this._def) {
        return te.create(e, {
            ...this._def,
            ...r
        });
    }
    exclude(e, r = this._def) {
        return te.create(this.options.filter((n)=>!e.includes(n)), {
            ...this._def,
            ...r
        });
    }
}
Re = /* @__PURE__ */ new WeakMap();
te.create = mn;
class We extends w {
    constructor(){
        super(...arguments), Oe.set(this, void 0);
    }
    _parse(e) {
        const r = x.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
        if (n.parsedType !== m.string && n.parsedType !== m.number) {
            const s = x.objectValues(r);
            return p(n, {
                expected: x.joinValues(s),
                received: n.parsedType,
                code: f.invalid_type
            }), v;
        }
        if (Qe(this, Oe, "f") || dn(this, Oe, new Set(x.getValidEnumValues(this._def.values)), "f"), !Qe(this, Oe, "f").has(e.data)) {
            const s = x.objectValues(r);
            return p(n, {
                received: n.data,
                code: f.invalid_enum_value,
                options: s
            }), v;
        }
        return I(e.data);
    }
    get enum() {
        return this._def.values;
    }
}
Oe = /* @__PURE__ */ new WeakMap();
We.create = (t, e)=>new We({
        values: t,
        typeName: _.ZodNativeEnum,
        ...b(e)
    });
class ve extends w {
    unwrap() {
        return this._def.type;
    }
    _parse(e) {
        const { ctx: r } = this._processInputParams(e);
        if (r.parsedType !== m.promise && r.common.async === !1) return p(r, {
            code: f.invalid_type,
            expected: m.promise,
            received: r.parsedType
        }), v;
        const n = r.parsedType === m.promise ? r.data : Promise.resolve(r.data);
        return I(n.then((s)=>this._def.type.parseAsync(s, {
                path: r.path,
                errorMap: r.common.contextualErrorMap
            })));
    }
}
ve.create = (t, e)=>new ve({
        type: t,
        typeName: _.ZodPromise,
        ...b(e)
    });
class W extends w {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === _.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(e) {
        const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null, a = {
            addIssue: (i)=>{
                p(n, i), i.fatal ? r.abort() : r.dirty();
            },
            get path () {
                return n.path;
            }
        };
        if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
            const i = s.transform(n.data, a);
            if (n.common.async) return Promise.resolve(i).then(async (o)=>{
                if (r.value === "aborted") return v;
                const c = await this._def.schema._parseAsync({
                    data: o,
                    path: n.path,
                    parent: n
                });
                return c.status === "aborted" ? v : c.status === "dirty" || r.value === "dirty" ? he(c.value) : c;
            });
            {
                if (r.value === "aborted") return v;
                const o = this._def.schema._parseSync({
                    data: i,
                    path: n.path,
                    parent: n
                });
                return o.status === "aborted" ? v : o.status === "dirty" || r.value === "dirty" ? he(o.value) : o;
            }
        }
        if (s.type === "refinement") {
            const i = (o)=>{
                const c = s.refinement(o, a);
                if (n.common.async) return Promise.resolve(c);
                if (c instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return o;
            };
            if (n.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                });
                return o.status === "aborted" ? v : (o.status === "dirty" && r.dirty(), i(o.value), {
                    status: r.value,
                    value: o.value
                });
            } else return this._def.schema._parseAsync({
                data: n.data,
                path: n.path,
                parent: n
            }).then((o)=>o.status === "aborted" ? v : (o.status === "dirty" && r.dirty(), i(o.value).then(()=>({
                        status: r.value,
                        value: o.value
                    }))));
        }
        if (s.type === "transform") if (n.common.async === !1) {
            const i = this._def.schema._parseSync({
                data: n.data,
                path: n.path,
                parent: n
            });
            if (!oe(i)) return i;
            const o = s.transform(i.value, a);
            if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
                status: r.value,
                value: o
            };
        } else return this._def.schema._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }).then((i)=>oe(i) ? Promise.resolve(s.transform(i.value, a)).then((o)=>({
                    status: r.value,
                    value: o
                })) : i);
        x.assertNever(s);
    }
}
W.create = (t, e, r)=>new W({
        schema: t,
        typeName: _.ZodEffects,
        effect: e,
        ...b(r)
    });
W.createWithPreprocess = (t, e, r)=>new W({
        schema: e,
        effect: {
            type: "preprocess",
            transform: t
        },
        typeName: _.ZodEffects,
        ...b(r)
    });
class z extends w {
    _parse(e) {
        return this._getType(e) === m.undefined ? I(void 0) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
z.create = (t, e)=>new z({
        innerType: t,
        typeName: _.ZodOptional,
        ...b(e)
    });
class re extends w {
    _parse(e) {
        return this._getType(e) === m.null ? I(null) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
re.create = (t, e)=>new re({
        innerType: t,
        typeName: _.ZodNullable,
        ...b(e)
    });
class qe extends w {
    _parse(e) {
        const { ctx: r } = this._processInputParams(e);
        let n = r.data;
        return r.parsedType === m.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
            data: n,
            path: r.path,
            parent: r
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
qe.create = (t, e)=>new qe({
        innerType: t,
        typeName: _.ZodDefault,
        defaultValue: typeof e.default == "function" ? e.default : ()=>e.default,
        ...b(e)
    });
class ze extends w {
    _parse(e) {
        const { ctx: r } = this._processInputParams(e), n = {
            ...r,
            common: {
                ...r.common,
                issues: []
            }
        }, s = this._def.innerType._parse({
            data: n.data,
            path: n.path,
            parent: {
                ...n
            }
        });
        return Ne(s) ? s.then((a)=>({
                status: "valid",
                value: a.status === "valid" ? a.value : this._def.catchValue({
                    get error () {
                        return new L(n.common.issues);
                    },
                    input: n.data
                })
            })) : {
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error () {
                    return new L(n.common.issues);
                },
                input: n.data
            })
        };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ze.create = (t, e)=>new ze({
        innerType: t,
        typeName: _.ZodCatch,
        catchValue: typeof e.catch == "function" ? e.catch : ()=>e.catch,
        ...b(e)
    });
class rt extends w {
    _parse(e) {
        if (this._getType(e) !== m.nan) {
            const n = this._getOrReturnCtx(e);
            return p(n, {
                code: f.invalid_type,
                expected: m.nan,
                received: n.parsedType
            }), v;
        }
        return {
            status: "valid",
            value: e.data
        };
    }
}
rt.create = (t)=>new rt({
        typeName: _.ZodNaN,
        ...b(t)
    });
const hi = Symbol("zod_brand");
class Yt extends w {
    _parse(e) {
        const { ctx: r } = this._processInputParams(e), n = r.data;
        return this._def.type._parse({
            data: n,
            path: r.path,
            parent: r
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class Fe extends w {
    _parse(e) {
        const { status: r, ctx: n } = this._processInputParams(e);
        if (n.common.async) return (async ()=>{
            const a = await this._def.in._parseAsync({
                data: n.data,
                path: n.path,
                parent: n
            });
            return a.status === "aborted" ? v : a.status === "dirty" ? (r.dirty(), he(a.value)) : this._def.out._parseAsync({
                data: a.value,
                path: n.path,
                parent: n
            });
        })();
        {
            const s = this._def.in._parseSync({
                data: n.data,
                path: n.path,
                parent: n
            });
            return s.status === "aborted" ? v : s.status === "dirty" ? (r.dirty(), {
                status: "dirty",
                value: s.value
            }) : this._def.out._parseSync({
                data: s.value,
                path: n.path,
                parent: n
            });
        }
    }
    static create(e, r) {
        return new Fe({
            in: e,
            out: r,
            typeName: _.ZodPipeline
        });
    }
}
class Be extends w {
    _parse(e) {
        const r = this._def.innerType._parse(e), n = (s)=>(oe(s) && (s.value = Object.freeze(s.value)), s);
        return Ne(r) ? r.then((s)=>n(s)) : n(r);
    }
    unwrap() {
        return this._def.innerType;
    }
}
Be.create = (t, e)=>new Be({
        innerType: t,
        typeName: _.ZodReadonly,
        ...b(e)
    });
function yn(t, e = {}, r) {
    return t ? _e.create().superRefine((n, s)=>{
        var a, i;
        if (!t(n)) {
            const o = typeof e == "function" ? e(n) : typeof e == "string" ? {
                message: e
            } : e, c = (i = (a = o.fatal) !== null && a !== void 0 ? a : r) !== null && i !== void 0 ? i : !0, u = typeof o == "string" ? {
                message: o
            } : o;
            s.addIssue({
                code: "custom",
                ...u,
                fatal: c
            });
        }
    }) : _e.create();
}
const mi = {
    object: C.lazycreate
};
var _;
(function(t) {
    t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(_ || (_ = {}));
const yi = (t, e = {
    message: `Input not instance of ${t.name}`
})=>yn((r)=>r instanceof t, e), gn = Z.create, _n = K.create, gi = rt.create, _i = ee.create, vn = Ie.create, vi = ce.create, bi = Ke.create, wi = je.create, xi = Le.create, ki = _e.create, Ti = ie.create, Ei = X.create, Ci = et.create, Ri = U.create, Oi = C.create, Si = C.strictCreate, Pi = $e.create, Ai = ft.create, Ni = Me.create, Ii = V.create, ji = De.create, Li = tt.create, $i = ue.create, Mi = me.create, Di = Ze.create, Zi = Ue.create, Ui = te.create, Wi = We.create, qi = ve.create, vr = W.create, zi = z.create, Bi = re.create, Vi = W.createWithPreprocess, Fi = Fe.create, Hi = ()=>gn().optional(), Gi = ()=>_n().optional(), Ji = ()=>vn().optional(), Yi = {
    string: (t)=>Z.create({
            ...t,
            coerce: !0
        }),
    number: (t)=>K.create({
            ...t,
            coerce: !0
        }),
    boolean: (t)=>Ie.create({
            ...t,
            coerce: !0
        }),
    bigint: (t)=>ee.create({
            ...t,
            coerce: !0
        }),
    date: (t)=>ce.create({
            ...t,
            coerce: !0
        })
}, Xi = v;
var l = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    defaultErrorMap: ge,
    setErrorMap: Va,
    getErrorMap: Ye,
    makeIssue: Xe,
    EMPTY_PATH: Fa,
    addIssueToContext: p,
    ParseStatus: N,
    INVALID: v,
    DIRTY: he,
    OK: I,
    isAborted: At,
    isDirty: Nt,
    isValid: oe,
    isAsync: Ne,
    get util () {
        return x;
    },
    get objectUtil () {
        return Pt;
    },
    ZodParsedType: m,
    getParsedType: Y,
    ZodType: w,
    datetimeRegex: hn,
    ZodString: Z,
    ZodNumber: K,
    ZodBigInt: ee,
    ZodBoolean: Ie,
    ZodDate: ce,
    ZodSymbol: Ke,
    ZodUndefined: je,
    ZodNull: Le,
    ZodAny: _e,
    ZodUnknown: ie,
    ZodNever: X,
    ZodVoid: et,
    ZodArray: U,
    ZodObject: C,
    ZodUnion: $e,
    ZodDiscriminatedUnion: ft,
    ZodIntersection: Me,
    ZodTuple: V,
    ZodRecord: De,
    ZodMap: tt,
    ZodSet: ue,
    ZodFunction: me,
    ZodLazy: Ze,
    ZodLiteral: Ue,
    ZodEnum: te,
    ZodNativeEnum: We,
    ZodPromise: ve,
    ZodEffects: W,
    ZodTransformer: W,
    ZodOptional: z,
    ZodNullable: re,
    ZodDefault: qe,
    ZodCatch: ze,
    ZodNaN: rt,
    BRAND: hi,
    ZodBranded: Yt,
    ZodPipeline: Fe,
    ZodReadonly: Be,
    custom: yn,
    Schema: w,
    ZodSchema: w,
    late: mi,
    get ZodFirstPartyTypeKind () {
        return _;
    },
    coerce: Yi,
    any: ki,
    array: Ri,
    bigint: _i,
    boolean: vn,
    date: vi,
    discriminatedUnion: Ai,
    effect: vr,
    enum: Ui,
    function: Mi,
    instanceof: yi,
    intersection: Ni,
    lazy: Di,
    literal: Zi,
    map: Li,
    nan: gi,
    nativeEnum: Wi,
    never: Ei,
    null: xi,
    nullable: Bi,
    number: _n,
    object: Oi,
    oboolean: Ji,
    onumber: Gi,
    optional: zi,
    ostring: Hi,
    pipeline: Fi,
    preprocess: Vi,
    promise: qi,
    record: ji,
    set: $i,
    strictObject: Si,
    string: gn,
    symbol: bi,
    transformer: vr,
    tuple: Ii,
    undefined: wi,
    union: Pi,
    unknown: Ti,
    void: Ci,
    NEVER: Xi,
    ZodIssueCode: f,
    quotelessJson: Ba,
    ZodError: L
});
const bn = /^0x[0-9a-f]+$/i, wn = /^\d+$/, Qi = l.string().min(1, "The short string cannot be empty").max(31, "The short string cannot exceed 31 characters").refine((t)=>!bn.test(t), "The shortString should not be a hex string").refine((t)=>!wn.test(t), "The shortString should not be an integer string"), M = l.union([
    l.string().regex(bn, "Only hex, integers and bigint are supported in calldata"),
    l.string().regex(wn, "Only hex, integers and bigint are supported in calldata"),
    Qi,
    l.number().int("Only hex, integers and bigint are supported in calldata"),
    l.bigint()
]), Ve = l.object({
    contractAddress: l.string(),
    entrypoint: l.string(),
    calldata: l.array(M.or(l.array(M))).optional()
}), jt = l.array(Ve).nonempty(), xn = l.object({
    types: l.record(l.array(l.union([
        l.object({
            name: l.string(),
            type: l.literal("merkletree"),
            contains: l.string()
        }),
        l.object({
            name: l.string(),
            type: l.literal("enum"),
            contains: l.string()
        }),
        l.object({
            name: l.string(),
            type: l.string()
        })
    ]))),
    primaryType: l.string(),
    domain: l.record(l.unknown()),
    message: l.record(l.unknown()).or(l.object({}))
}), Lt = l.object({
    type: l.literal("ERC20"),
    options: l.object({
        address: l.string(),
        symbol: l.string().optional(),
        decimals: l.number().optional(),
        image: l.string().optional(),
        name: l.string().optional()
    })
}), Ki = l.union([
    l.object({
        id: l.string(),
        chain_id: l.string(),
        chain_name: l.string(),
        rpc_urls: l.array(l.string()).optional(),
        native_currency: Lt.optional(),
        block_explorer_url: l.array(l.string()).optional()
    }),
    l.object({
        id: l.string(),
        chainId: l.string(),
        chainName: l.string(),
        rpcUrls: l.array(l.string()).optional(),
        nativeCurrency: Lt.optional(),
        blockExplorerUrl: l.array(l.string()).optional()
    }).transform((t)=>({
            id: t.id,
            chain_id: t.chainId,
            chain_name: t.chainName,
            rpc_urls: t.rpcUrls,
            native_currency: t.nativeCurrency,
            block_explorer_url: t.blockExplorerUrl
        }))
]), kt = {
    enable: l.tuple([
        l.object({
            starknetVersion: l.union([
                l.literal("v3"),
                l.literal("v4"),
                l.literal("v5")
            ]).optional()
        }).optional()
    ]).or(l.tuple([])),
    addStarknetChain: l.tuple([
        Ki
    ]),
    switchStarknetChain: l.tuple([
        l.object({
            chainId: l.string()
        })
    ]),
    watchAsset: l.tuple([
        Lt
    ]),
    requestAccounts: l.tuple([
        l.object({
            silent_mode: l.boolean().optional()
        })
    ]),
    execute: l.tuple([
        jt.or(Ve),
        l.object({
            nonce: M.optional(),
            maxFee: M.optional(),
            version: M.optional()
        }).optional()
    ]),
    signMessage: l.tuple([
        xn
    ])
};
l.tuple([
    jt.or(Ve),
    l.object({
        nonce: M.optional(),
        maxFee: M.optional(),
        version: M.optional()
    }).optional()
]).or(l.tuple([
    jt.or(Ve),
    l.array(l.any()).optional(),
    l.object({
        nonce: M.optional(),
        maxFee: M.optional(),
        version: M.optional()
    }).optional()
]));
const kn = l.object({
    contract_address: l.string(),
    entry_point: l.string(),
    calldata: l.array(M).optional()
}).transform(({ contract_address: t, entry_point: e, calldata: r })=>({
        contractAddress: t,
        entrypoint: e,
        calldata: r || []
    })), eo = l.array(kn).nonempty(), to = {
    ZERO: 0,
    ONE: 1
}, ro = l.object({
    address: l.string(),
    class_hash: l.string(),
    salt: l.string(),
    calldata: l.array(l.string()),
    sigdata: l.array(l.string()).optional(),
    //version: z.literal([0, 1]),
    version: l.nativeEnum(to)
}), no = l.object({
    callbackData: l.string().optional(),
    approvalRequests: l.array(l.object({
        tokenAddress: l.string(),
        amount: l.string(),
        spender: l.string()
    })),
    sessionTypedData: xn
}), so = l.object({
    account: l.string().array().optional(),
    chainId: l.string().optional(),
    signature: l.string().array().optional(),
    approvalTransactionHash: l.string().optional(),
    deploymentPayload: l.any().optional(),
    approvalRequestsCalls: l.array(Ve).optional(),
    errorCode: l.enum([
        "USER_REJECTED",
        "ACCOUNT_NOT_DEPLOYED",
        "NOT_ENOUGH_BALANCE",
        "NOT_ENOUGH_BALANCE_DEPLOYMENT",
        "GENERIC_ERROR"
    ]).optional()
}), O = Ps.create({
    isServer: !1,
    allowOutsideOfServer: !0
});
let $t = Tr, Mt = "", Tn = "";
const Dt = ({ width: t = 775, height: e = 385, origin: r, location: n, atLeftBottom: s = !1 })=>{
    const a = window?.outerWidth ?? window?.innerWidth ?? window?.screen.width ?? 0, i = window?.outerHeight ?? window?.innerHeight ?? window?.screen.height ?? 0, o = window?.screenLeft ?? window?.screenX ?? 0, c = window?.screenTop ?? window?.screenY ?? 0, u = s ? 0 : o + a / 2 - t / 2, d = s ? window.screen.availHeight + 10 : c + i / 2 - e / 2;
    $t = r ?? $t, Mt = n ?? Mt, Tn = `width=${t},height=${e},top=${d},left=${u},toolbar=no,menubar=no,scrollbars=no,location=no,status=no,popup=1`;
};
O.router({
    authorize: O.procedure.output(l.boolean()).mutation(async ()=>!0),
    connect: O.procedure.mutation(async ()=>""),
    connectWebwallet: O.procedure.input(l.object({
        theme: l.enum([
            "light",
            "dark",
            "auto"
        ]).optional()
    })).output(l.object({
        account: l.string().array().optional(),
        chainId: l.string().optional()
    })).mutation(async ()=>({})),
    connectWebwalletSSO: O.procedure.input(l.object({
        token: l.string(),
        authorizedPartyId: l.string().optional()
    })).output(l.object({
        account: l.string().array().optional(),
        chainId: l.string().optional()
    })).mutation(async ()=>({})),
    connectAndSignSession: O.procedure.input(no).output(so).mutation(async ()=>({})),
    enable: O.procedure.output(l.string()).mutation(async ()=>""),
    execute: O.procedure.input(kt.execute).output(l.string()).mutation(async ()=>""),
    signMessage: O.procedure.input(kt.signMessage).output(l.string().array()).mutation(async ()=>[]),
    getLoginStatus: O.procedure.output(l.object({
        isLoggedIn: l.boolean(),
        hasSession: l.boolean().optional(),
        isPreauthorized: l.boolean().optional()
    })).mutation(async ()=>({
            isLoggedIn: !0
        })),
    // RPC Messages
    requestAccounts: O.procedure.input(l.object({
        silent_mode: l.boolean().optional()
    })).output(l.string().array()).mutation(async ()=>[]),
    requestChainId: O.procedure.output(l.string()).mutation(async ()=>""),
    signTypedData: O.procedure.input(kt.signMessage).output(l.string().array()).mutation(async ()=>[]),
    getPermissions: O.procedure.output(l.array(l.enum([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"].ACCOUNTS
    ]))).mutation(async ()=>[
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"].ACCOUNTS
        ]),
    addInvokeTransaction: O.procedure.input(kn.or(eo)).output(l.string()).mutation(async (t)=>""),
    addStarknetChain: O.procedure.mutation((t)=>{
        throw Error("not implemented");
    }),
    switchStarknetChain: O.procedure.mutation((t)=>{
        throw Error("not implemented");
    }),
    watchAsset: O.procedure.mutation((t)=>{
        throw Error("not implemented");
    }),
    updateModal: O.procedure.subscription(async ()=>{}),
    deploymentData: O.procedure.output(ro).mutation(async ()=>({
            address: "",
            calldata: [],
            version: 0,
            class_hash: "",
            salt: ""
        }))
});
const Tt = ({ iframe: t })=>ms({
        links: [
            ls({
                enabled: (e)=>("TURBOPACK compile-time value", "development") === "development" && typeof window < "u" || ("TURBOPACK compile-time value", "development") === "development" && e.direction === "down" && e.result instanceof Error
            }),
            Xn({
                condition (e) {
                    if (!t && e.type === "subscription") throw new Error("subscription is not supported without an iframe window");
                    return !!t;
                },
                true: Rt.windowLink({
                    window,
                    postWindow: t,
                    postOrigin: "*"
                }),
                false: Rt.popupLink({
                    listenWindow: window,
                    createPopup: ()=>{
                        let e = null;
                        const r = document.createElement("button");
                        if (r.style.display = "none", r.addEventListener("click", ()=>{
                            e = window.open(`${$t}${Mt}`, "popup", Tn);
                        }), r.click(), (async ()=>{
                            for(; !e;)await new Promise((n)=>setTimeout(n, 100));
                        })(), !e) throw new Error("Could not open popup");
                        return e;
                    },
                    postOrigin: "*"
                })
            })
        ]
    }), Ge = [], ao = (t, e)=>({
        ...t,
        getLoginStatus: ()=>e.getLoginStatus.mutate(),
        connectWebwallet: (n = {})=>{
            const { theme: s } = n;
            return e.connectWebwallet.mutate({
                theme: s
            });
        },
        connectAndSignSession: (n)=>e.connectAndSignSession.mutate(n),
        connectWebwalletSSO: (n, s)=>e.connectWebwalletSSO.mutate({
                token: n,
                authorizedPartyId: s
            }),
        async request (n) {
            switch(n.type){
                case "wallet_requestAccounts":
                    return e.requestAccounts.mutate(n.params);
                case "wallet_signTypedData":
                    {
                        const s = n.params, a = s?.primaryType === "Session" && s?.domain.name === "SessionAccount.session";
                        Dt({
                            width: Wn,
                            height: qn,
                            location: a ? "/signSessionKeys" : "/signMessage"
                        });
                        const i = Array.isArray(n.params) ? n.params : [
                            n.params
                        ];
                        return e.signTypedData.mutate(i);
                    }
                case "wallet_getPermissions":
                    return e.getPermissions.mutate();
                case "wallet_addInvokeTransaction":
                    {
                        const s = n.params.calls;
                        return Dt({
                            width: Zn,
                            height: Un,
                            location: "/review"
                        }), {
                            transaction_hash: await e.addInvokeTransaction.mutate(s)
                        };
                    }
                case "wallet_requestChainId":
                    return await e.requestChainId.mutate();
                case "wallet_addStarknetChain":
                    return e.addStarknetChain.mutate(n.params);
                case "wallet_switchStarknetChain":
                    return e.switchStarknetChain.mutate(n.params);
                case "wallet_watchAsset":
                    return e.watchAsset.mutate();
                case "wallet_deploymentData":
                    return e.deploymentData.mutate();
                default:
                    throw new Error("not implemented");
            }
        },
        on: (n, s)=>{
            if (n === "accountsChanged") Ge.push({
                type: n,
                handler: s
            });
            else if (n === "networkChanged") Ge.push({
                type: n,
                handler: s
            });
            else throw new Error(`Unknwown event: ${n}`);
        },
        off: (n, s)=>{
            if (n !== "accountsChanged" && n !== "networkChanged") throw new Error(`Unknwown event: ${n}`);
            const a = Ge.findIndex((i)=>i.type === n && i.handler === s);
            a >= 0 && Ge.splice(a, 1);
        }
    }), io = (t)=>{
    t.style.display = "none", t.style.borderRadius = "40px", t.style.inset = "0", t.style.position = "fixed", t.style.top = "50%", t.style.left = "50%", t.style.transform = "translate(-50%, -50%)", t.style.backgroundColor = "transparent", t.style.zIndex = "999999", t.style.height = `${Bn}px`, t.style.width = `${zn}px`;
}, oo = (t, e)=>{
    t.style.display = "block", e.style.display = "block";
}, co = (t, e)=>{
    t.style.display = "none", e.style.display = "none";
}, uo = (t, e, r)=>{
    t.style.width = `${e}px`, t.style.height = `${r}px`;
}, br = "argent-webwallet-iframe", lo = async (t, e)=>{
    const r = "argent-webwallet-backdrop", n = new URL(t);
    n.pathname = "/iframes/comms", t = n.toString();
    const s = document.createElement("iframe");
    s.src = t, s.loading = "eager", s.sandbox.add("allow-scripts", "allow-same-origin", "allow-forms", "allow-top-navigation", "allow-popups"), s.allow = "clipboard-write", s.id = br, s.setAttribute("allowtransparency", "true"), s.setAttribute("transparent", "true"), io(s), s.style.display = e ? "block" : "none";
    const a = document.createElement("div");
    a.id = r, a.style.position = "fixed", a.style.inset = "0", a.style.backgroundColor = "rgba(0,0,0,0.5)", a.style.zIndex = "999998", a.style.width = "100dvw", a.style.height = "100dvh", a.style.backdropFilter = "blur(4px)";
    const i = document.getElementById(br);
    return i && (i.remove(), document.getElementById(r)?.remove()), window.document.body.appendChild(s), await new Promise((o, c)=>{
        const u = setTimeout(()=>c(new Error("Timeout while loading an iframe")), 2e4);
        s.addEventListener("load", async ()=>{
            clearTimeout(u), o();
        });
    }), window.document.body.appendChild(a), {
        iframe: s,
        backdrop: a
    };
}, Et = async (t, e, r)=>{
    const n = typeof window < "u" ? window : void 0;
    if (!n) throw new Error("window is not defined");
    const s = ao({
        host: n.location.origin,
        id: "argentWebWallet",
        icon: "https://www.argent.xyz/favicon.ico",
        name: "Argent Web Wallet",
        version: "1.0.0"
    }, e);
    if (r) {
        const { iframe: a, backdrop: i } = r;
        e.updateModal.subscribe(void 0, {
            onData (o) {
                switch(o.action){
                    case "show":
                        oo(a, i);
                        break;
                    case "hide":
                        co(a, i);
                        break;
                    case "updateSize":
                        uo(a, o.width, o.height);
                        break;
                }
            }
        });
    }
    return s;
}, wr = "allowed-dapps", fo = async (t)=>{
    const e = t === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].NetworkName.SN_MAIN ? jn : In;
    try {
        const n = await (await caches.open(wr)).match(e);
        if (n) {
            const u = parseInt(n.headers.get("X-Cache-Timestamp") ?? "0", 10);
            if ((/* @__PURE__ */ new Date().getTime() - u) / (1e3 * 60 * 60) < 24) return n.json();
        }
        const s = await fetch(e), a = new Headers(s.headers);
        a.set("X-Cache-Timestamp", /* @__PURE__ */ new Date().getTime().toString());
        const i = await s.json(), o = new Response(JSON.stringify(i), {
            status: s.status,
            statusText: s.statusText,
            headers: a
        });
        return await (await caches.open(wr)).put(e, o), i;
    } catch (r) {
        throw new Error(r);
    }
}, po = async (t)=>new Promise((e)=>{
        if (!t) return e(!1);
        try {
            navigator.webkitTemporaryStorage.queryUsageAndQuota((n, s)=>{
                e(Math.round(s / (1024 * 1024)) < Math.round((performance?.memory?.jsHeapSizeLimit ?? 1073741824) / (1024 * 1024)) * 2);
            }, ()=>e(!1));
        } catch  {
            e(!1);
        }
    }), ho = async (t)=>{
    const { userAgent: e } = navigator, r = !!(navigator.vendor && navigator.vendor.indexOf("Google") === 0 && navigator.brave === void 0 && !e.match(/Edg/) && !e.match(/OPR/)), n = await po(r);
    if (!r || n) {
        const i = Tt({});
        return await Et(t, i, void 0);
    }
    const s = Dn(t), { allowedDapps: a } = await fo(s);
    if (a.includes(window.location.hostname)) {
        const i = "argent-webwallet-backdrop", o = "argent-webwallet-iframe", c = document.getElementById(i), u = document.getElementById(o);
        u && u && c && (u.remove(), c.remove());
        const { iframe: d, backdrop: h } = await lo(t, !1), y = Tt({
            iframe: d.contentWindow ?? void 0
        });
        return await Et(t, y, {
            iframe: d,
            backdrop: h
        });
    } else {
        const i = Tt({});
        return await Et(t, i, void 0);
    }
}, En = "webwallet_logout";
let D = null, ae = null;
class bo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"] {
    constructor(r = {}){
        super();
        Te(this, "_wallet", null);
        Te(this, "_options");
        this._options = r;
    }
    available() {
        return !0;
    }
    async ready() {
        if (this._wallet || await this.ensureWallet(), this._wallet) try {
            return (await this._wallet.request({
                type: "wallet_getPermissions"
            })).includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"].ACCOUNTS);
        } catch  {
            return !1;
        }
        else return this._wallet = null, ae = null, !1;
    }
    get id() {
        return this._wallet = D, this._wallet?.id || "argentWebWallet";
    }
    get name() {
        return this._wallet = D, this._wallet?.name || "Argent Web Wallet";
    }
    get icon() {
        return {
            light: rr,
            dark: rr
        };
    }
    get wallet() {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        return this._wallet;
    }
    get title() {
        return "Email";
    }
    get subtitle() {
        return "Powered by Argent";
    }
    async connectAndSignSession({ callbackData: r, approvalRequests: n, sessionTypedData: s }) {
        if (this._wallet || await this.ensureWallet(), !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]();
        try {
            return await this._wallet.connectAndSignSession({
                callbackData: r,
                approvalRequests: n,
                sessionTypedData: s,
                theme: this._options.theme
            });
        } catch (a) {
            if (a instanceof Error && (a.constructor.name === "TRPCClientError" || a.name === "TRPCClientError")) {
                const i = a, o = i.shape.data.webwalletErrorMessage || i.message, c = i.shape.data.webwalletErrorCode || i.shape.message;
                throw new Ln(o, c);
            }
            throw new Error(a instanceof Error ? a.message : String(a));
        }
    }
    async connect(r = {}) {
        if (this._wallet || await this.ensureWallet(), !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]();
        try {
            let n, s;
            if (this._options.ssoToken) {
                const i = await this._wallet.connectWebwalletSSO(this._options.ssoToken, this._options.authorizedPartyId);
                n = i.account, s = i.chainId;
            } else {
                const i = await this._wallet.connectWebwallet({
                    theme: this._options.theme
                });
                n = i.account, s = i.chainId;
            }
            if (!n || !s) return {};
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$getStarknetChainId$2d$7c4b3163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(s);
            return ae = n[0], {
                account: n[0],
                chainId: BigInt(a)
            };
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"]();
        }
    }
    async request(r) {
        if (this._wallet || await this.ensureWallet(), !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        try {
            return await this._wallet.request(r);
        } catch (n) {
            if (n instanceof Error && (n.constructor.name === "TRPCClientError" || n.name === "TRPCClientError")) {
                const s = n, a = s.shape.data.webwalletErrorMessage || s.message, i = s.shape.data.webwalletErrorCode || s.shape.message;
                throw i === "USER_LOGGED_OUT" && (D = null, ae = null, this._wallet = null, document.dispatchEvent(new Event(En))), new $n(a, i);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"]();
        }
    }
    async disconnect() {
        if (!this.available() && !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]();
        D = null, ae = null, this._wallet = D, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])();
    }
    async account(r) {
        if (this._wallet = D, !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        if (!ae) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletAccount"](r, this._wallet, void 0, ae);
    }
    async chainId() {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        const r = await this._wallet.request({
            type: "wallet_requestChainId"
        }), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$getStarknetChainId$2d$7c4b3163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(r);
        return BigInt(n);
    }
    async initEventListener(r) {
        if (this._wallet = D, !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        this._wallet.on("accountsChanged", r);
    }
    async removeEventListener(r) {
        if (this._wallet = D, !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        this._wallet.off("accountsChanged", r), D = null, ae = null, this._wallet = null;
    }
    async ensureWallet() {
        const r = this._options.url || Tr;
        Dt({
            origin: r,
            location: "/interstitialLogin"
        }), D = await ho(r) ?? null, this._wallet = D;
    }
}
const wo = (t)=>{
    document.addEventListener(En, ()=>{
        t();
    });
};
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>l),
    "I": (()=>T)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var y = Object.defineProperty;
var O = (A, D, M)=>D in A ? y(A, D, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: M
    }) : A[D] = M;
var i = (A, D, M)=>(O(A, typeof D != "symbol" ? D + "" : D, M), M);
;
;
const l = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE4LjQwMTggNy41NTU1NkgxMy41OTgyQzEzLjQzNzcgNy41NTU1NiAxMy4zMDkxIDcuNjg3NDcgMTMuMzA1NiA3Ljg1MTQzQzEzLjIwODUgMTIuNDYwMyAxMC44NDg0IDE2LjgzNDcgNi43ODYwOCAxOS45MzMxQzYuNjU3MTEgMjAuMDMxNCA2LjYyNzczIDIwLjIxNjIgNi43MjIwMiAyMC4zNDkzTDkuNTMyNTMgMjQuMzE5NkM5LjYyODE1IDI0LjQ1NDggOS44MTQ0NCAyNC40ODUzIDkuOTQ1NTggMjQuMzg2QzEyLjQ4NTYgMjIuNDYxMyAxNC41Mjg3IDIwLjEzOTUgMTYgMTcuNTY2QzE3LjQ3MTMgMjAuMTM5NSAxOS41MTQ1IDIyLjQ2MTMgMjIuMDU0NSAyNC4zODZDMjIuMTg1NiAyNC40ODUzIDIyLjM3MTkgMjQuNDU0OCAyMi40Njc2IDI0LjMxOTZMMjUuMjc4MSAyMC4zNDkzQzI1LjM3MjMgMjAuMjE2MiAyNS4zNDI5IDIwLjAzMTQgMjUuMjE0IDE5LjkzMzFDMjEuMTUxNiAxNi44MzQ3IDE4Ljc5MTUgMTIuNDYwMyAxOC42OTQ2IDcuODUxNDNDMTguNjkxMSA3LjY4NzQ3IDE4LjU2MjMgNy41NTU1NiAxOC40MDE4IDcuNTU1NTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjQuNzIzNiAxMC40OTJMMjQuMjIzMSA4LjkyNDM5QzI0LjEyMTMgOC42MDYxNCAyMy44NzM0IDguMzU4MjQgMjMuNTU3NyA4LjI2MDIzTDIyLjAwMzkgNy43NzU5NUMyMS43ODk1IDcuNzA5MDYgMjEuNzg3MyA3LjQwMTc3IDIyLjAwMTEgNy4zMzIwMUwyMy41NDY5IDYuODI0NjZDMjMuODYwOSA2LjcyMTQ2IDI0LjEwNiA2LjQ2OTUyIDI0LjIwMjcgNi4xNTAxMUwyNC42Nzk4IDQuNTc1MDJDMjQuNzQ1OCA0LjM1NzA5IDI1LjA0ODkgNC4zNTQ3NyAyNS4xMTgzIDQuNTcxNTZMMjUuNjE4OCA2LjEzOTE1QzI1LjcyMDYgNi40NTc0IDI1Ljk2ODYgNi43MDUzMSAyNi4yODQyIDYuODAzOUwyNy44MzggNy4yODc2MUMyOC4wNTI0IDcuMzU0NSAyOC4wNTQ3IDcuNjYxNzkgMjcuODQwOCA3LjczMjEzTDI2LjI5NSA4LjIzOTQ4QzI1Ljk4MTEgOC4zNDIxIDI1LjczNiA4LjU5NDA0IDI1LjYzOTMgOC45MTQwMkwyNS4xNjIxIDEwLjQ4ODVDMjUuMDk2MSAxMC43MDY1IDI0Ljc5MyAxMC43MDg4IDI0LjcyMzYgMTAuNDkyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==", E = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iYmxhY2siPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+", U = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+Cg==", L = {
    argentX: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2NS4xOTUwOCA1Ny43MzU2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjUuMTk1MDggNTcuNzM1NjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkY4NzVCO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjk4NTkyLDBIMjQuMjA4ODhjLTAuNTYsMC0xLjAxMDAxLDAuNDUxMDItMS4wMjE5NywxLjAxMjAyCgljLTAuMzM4OTksMTUuNzU1LTguNTgyMDMsMzAuNzA4OTgtMjIuNzcwMDIsNDEuMzAwOTljLTAuNDUwMDEsMC4zMzcwMS0wLjU1Mjk4LDAuOTY3OTktMC4yMjQsMS40MjNsOS44MTU5OCwxMy41NzMKCWMwLjMzNDA1LDAuNDYyMDEsMC45ODUwNSwwLjU2NTk4LDEuNDQyOTksMC4yMjY5OWM4Ljg3MTAzLTYuNTc5MDEsMTYuMDA3MDItMTQuNTE3LDIxLjE0NjA2LTIzLjMxNQoJYzUuMTM4LDguNzk4LDEyLjI3Mzk5LDE2LjczNTk5LDIxLjE0NiwyMy4zMTVjMC40NTY5NywwLjMzODk5LDEuMTA3OTcsMC4yMzUwMiwxLjQ0MTk2LTAuMjI2OTlsOS44MTYwNC0xMy41NzMKCWMwLjMyODk4LTAuNDU1MDIsMC4yMjY5OS0xLjA4Ni0wLjIyNC0xLjQyM0M1MC41ODk4NiwzMS43MjEwMSw0Mi4zNDY4OCwxNi43NjcwMyw0Mi4wMDc4OSwxLjAxMjAyCglDNDEuOTk1ODcsMC40NTEwMiw0MS41NDY4OSwwLDQwLjk4NTkyLDAiLz4KPC9zdmc+Cg==",
    braavos: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMjMuNDQgNDEuMzg4NkMzMjQuMTk4IDQyLjY3MjggMzIzLjE5NSA0NC4yNjAzIDMyMS43MDQgNDQuMjYwM0MyOTEuNTEgNDQuMjYwMyAyNjYuOTY1IDY4LjE2NTYgMjY2LjM4OSA5Ny44NzFDMjU2LjA1IDk1Ljk0MDcgMjQ1LjMzNyA5NS43OTU2IDIzNC43NTQgOTcuNTc4N0MyMzQuMDIzIDY4LjAwOSAyMDkuNTQgNDQuMjYwMyAxNzkuNDQ1IDQ0LjI2MDNDMTc3Ljk1MyA0NC4yNjAzIDE3Ni45NDkgNDIuNjcxNiAxNzcuNzA3IDQxLjM4NjVDMTkyLjMyMyAxNi42MzMgMjE5LjQ4MyAwIDI1MC41NzMgMEMyODEuNjY0IDAgMzA4LjgyNCAxNi42MzM5IDMyMy40NCA0MS4zODg2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzIzMjRfNjE4NjkpIi8+CjxwYXRoIGQ9Ik00MTguNzU2IDIyNi44OTRDNDI2LjM3IDIyOS4yIDQzMy41ODEgMjIyLjUxNyA0MzEuMDM2IDIxNC45NzlDNDA0LjUwNyAxMzYuNDAxIDMxNi41MzUgMTA0LjM1OCAyNTAuMTU5IDEwNC4zNThDMTgzLjY3NCAxMDQuMzU4IDkzLjczOTEgMTM3LjQxOCA2OS4zMDUxIDIxNS4zMzFDNjYuOTU3NCAyMjIuODE4IDc0LjE0NjUgMjI5LjI3NSA4MS42NDc5IDIyNi45NzdMMjQ0LjI1IDE3Ny4xNTFDMjQ3LjU2OSAxNzYuMTM0IDI1MS4xMTYgMTc2LjEyOCAyNTQuNDM5IDE3Ny4xMzVMNDE4Ljc1NiAyMjYuODk0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzIzMjRfNjE4NjkpIi8+CjxwYXRoIGQ9Ik02OS43MTY1IDIzOS40MjZMMjQ0LjM3IDE4Ni40NTZDMjQ3LjY2OSAxODUuNDU2IDI1MS4xOTEgMTg1LjQ1MyAyNTQuNDkyIDE4Ni40NDhMNDMwLjIzMiAyMzkuNDUyQzQ0NC43NiAyNDMuODMzIDQ1NC43MDEgMjU3LjIxNiA0NTQuNzAxIDI3Mi4zOVY0MzAuNDgxQzQ1NC4wMjggNDY5LjA3IDQxOS4zNjIgNTAwIDM4MC43ODYgNTAwSDMxNi43MTJDMzEwLjM3OSA1MDAgMzA1LjI1IDQ5NC44NzcgMzA1LjI1IDQ4OC41NDNWNDMzLjExNUMzMDUuMjUgNDExLjI4OSAzMTguMTY3IDM5MS41MzUgMzM4LjE1NSAzODIuNzkyQzM2NC45NDkgMzcxLjA3MSAzOTYuNjQ2IDM1NS4yMTggNDAyLjYwOCAzMjMuNDA2QzQwNC41MzIgMzEzLjEzOCAzOTcuODM3IDMwMy4yMzQgMzg3LjU5NSAzMDEuMTk4QzM2MS42OTkgMjk2LjA1MSAzMzIuOTg5IDI5OC4wMzkgMzA4LjcxMSAzMDguODk4QzI4MS4xNSAzMjEuMjI1IDI3My45NCAzNDEuNzMxIDI3MS4yNzEgMzY5LjI3TDI2OC4wMzYgMzk4LjkzOEMyNjcuMDQ3IDQwOC4wMDUgMjU4LjU0NiA0MTQuOTUyIDI0OS40MjkgNDE0Ljk1MkMyMzkuOTk4IDQxNC45NTIgMjMyLjkyNiA0MDcuNzY5IDIzMS45MDMgMzk4LjM4OEwyMjguNzI4IDM2OS4yN0MyMjYuNDQyIDM0NS42ODEgMjIyLjI5OCAzMjIuNzY3IDE5Ny45MTIgMzExLjg2QzE3MC4wOTUgMjk5LjQxOSAxNDIuMTQxIDI5NS4yODcgMTEyLjQwNCAzMDEuMTk4QzEwMi4xNjIgMzAzLjIzNCA5NS40NjcgMzEzLjEzOCA5Ny4zOTEzIDMyMy40MDZDMTAzLjQwNSAzNTUuNDk1IDEzNC44NTQgMzcwLjk4NSAxNjEuODQ0IDM4Mi43OTJDMTgxLjgzMyAzOTEuNTM1IDE5NC43NSA0MTEuMjg5IDE5NC43NSA0MzMuMTE1VjQ4OC41MzNDMTk0Ljc1IDQ5NC44NjcgMTg5LjYyMiA1MDAgMTgzLjI4OSA1MDBIMTE5LjIxNEM4MC42Mzc0IDUwMCA0NS45NzE2IDQ2OS4wNyA0NS4yOTc5IDQzMC40ODFWMjcyLjM0OUM0NS4yOTc5IDI1Ny4xOTQgNTUuMjE0MiAyNDMuODI0IDY5LjcxNjUgMjM5LjQyNloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yMzI0XzYxODY5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=",
    keplr: "data:image/png;base64,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",
    metamask: "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTIiIGhlaWdodD0iMTg5IiB2aWV3Qm94PSIwIDAgMjEyIDE4OSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cG9seWdvbiBmaWxsPSIjQ0RCREIyIiBwb2ludHM9IjYwLjc1IDE3My4yNSA4OC4zMTMgMTgwLjU2MyA4OC4zMTMgMTcxIDkwLjU2MyAxNjguNzUgMTA2LjMxMyAxNjguNzUgMTA2LjMxMyAxODAgMTA2LjMxMyAxODcuODc1IDg5LjQzOCAxODcuODc1IDY4LjYyNSAxNzguODc1Ii8+PHBvbHlnb24gZmlsbD0iI0NEQkRCMiIgcG9pbnRzPSIxMDUuNzUgMTczLjI1IDEzMi43NSAxODAuNTYzIDEzMi43NSAxNzEgMTM1IDE2OC43NSAxNTAuNzUgMTY4Ljc1IDE1MC43NSAxODAgMTUwLjc1IDE4Ny44NzUgMTMzLjg3NSAxODcuODc1IDExMy4wNjMgMTc4Ljg3NSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjU2LjUgMCkiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjkwLjU2MyAxNTIuNDM4IDg4LjMxMyAxNzEgOTEuMTI1IDE2OC43NSAxMjAuMzc1IDE2OC43NSAxMjMuNzUgMTcxIDEyMS41IDE1Mi40MzggMTE3IDE0OS42MjUgOTQuNSAxNTAuMTg4Ii8+PHBvbHlnb24gZmlsbD0iI0Y4OUMzNSIgcG9pbnRzPSI3NS4zNzUgMjcgODguODc1IDU4LjUgOTUuMDYzIDE1MC4xODggMTE3IDE1MC4xODggMTIzLjc1IDU4LjUgMTM2LjEyNSAyNyIvPjxwb2x5Z29uIGZpbGw9IiNGODlEMzUiIHBvaW50cz0iMTYuMzEzIDk2LjE4OCAuNTYzIDE0MS43NSAzOS45MzggMTM5LjUgNjUuMjUgMTM5LjUgNjUuMjUgMTE5LjgxMyA2NC4xMjUgNzkuMzEzIDU4LjUgODMuODEzIi8+PHBvbHlnb24gZmlsbD0iI0Q4N0MzMCIgcG9pbnRzPSI0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi4zNzUgODcuMTg4IDEyNiA2NS4yNSAxMjAuMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VBOEQzQSIgcG9pbnRzPSI0Ni4xMjUgMTAxLjgxMyA2NS4yNSAxMTkuODEzIDY1LjI1IDEzNy44MTMiLz48cG9seWdvbiBmaWxsPSIjRjg5RDM1IiBwb2ludHM9IjY1LjI1IDEyMC4zNzUgODcuNzUgMTI2IDk1LjA2MyAxNTAuMTg4IDkwIDE1MyA2NS4yNSAxMzguMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSI2NS4yNSAxMzguMzc1IDYwLjc1IDE3My4yNSA5MC41NjMgMTUyLjQzOCIvPjxwb2x5Z29uIGZpbGw9IiNFQThFM0EiIHBvaW50cz0iOTIuMjUgMTAyLjM3NSA5NS4wNjMgMTUwLjE4OCA4Ni42MjUgMTI1LjcxOSIvPjxwb2x5Z29uIGZpbGw9IiNEODdDMzAiIHBvaW50cz0iMzkuMzc1IDEzOC45MzggNjUuMjUgMTM4LjM3NSA2MC43NSAxNzMuMjUiLz48cG9seWdvbiBmaWxsPSIjRUI4RjM1IiBwb2ludHM9IjEyLjkzOCAxODguNDM4IDYwLjc1IDE3My4yNSAzOS4zNzUgMTM4LjkzOCAuNTYzIDE0MS43NSIvPjxwb2x5Z29uIGZpbGw9IiNFODgyMUUiIHBvaW50cz0iODguODc1IDU4LjUgNjQuNjg4IDc4Ljc1IDQ2LjEyNSAxMDEuMjUgOTIuMjUgMTAyLjkzOCIvPjxwb2x5Z29uIGZpbGw9IiNERkNFQzMiIHBvaW50cz0iNjAuNzUgMTczLjI1IDkwLjU2MyAxNTIuNDM4IDg4LjMxMyAxNzAuNDM4IDg4LjMxMyAxODAuNTYzIDY4LjA2MyAxNzYuNjI1Ii8+PHBvbHlnb24gZmlsbD0iI0RGQ0VDMyIgcG9pbnRzPSIxMjEuNSAxNzMuMjUgMTUwLjc1IDE1Mi40MzggMTQ4LjUgMTcwLjQzOCAxNDguNSAxODAuNTYzIDEyOC4yNSAxNzYuNjI1IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyNzIuMjUgMCkiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjcwLjMxMyAxMTIuNSA2NC4xMjUgMTI1LjQzOCA4Ni4wNjMgMTE5LjgxMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUwLjE4OCAwKSIvPjxwb2x5Z29uIGZpbGw9IiNFODhGMzUiIHBvaW50cz0iMTIuMzc1IC41NjMgODguODc1IDU4LjUgNzUuOTM4IDI3Ii8+PHBhdGggZmlsbD0iIzhFNUEzMCIgZD0iTTEyLjM3NTAwMDIsMC41NjI1MDAwMDggTDIuMjUwMDAwMDMsMzEuNTAwMDAwNSBMNy44NzUwMDAxMiw2NS4yNTAwMDEgTDMuOTM3NTAwMDYsNjcuNTAwMDAxIEw5LjU2MjUwMDE0LDcyLjU2MjUgTDUuMDYyNTAwMDgsNzYuNTAwMDAxMSBMMTEuMjUsODIuMTI1MDAxMiBMNy4zMTI1MDAxMSw4NS41MDAwMDEzIEwxNi4zMTI1MDAyLDk2Ljc1MDAwMTQgTDU4LjUwMDAwMDksODMuODEyNTAxMiBDNzkuMTI1MDAxMiw2Ny4zMTI1MDA0IDg5LjI1MDAwMTMsNTguODc1MDAwMyA4OC44NzUwMDEzLDU4LjUwMDAwMDkgQzg4LjUwMDAwMTMsNTguMTI1MDAwOSA2My4wMDAwMDA5LDM4LjgxMjUwMDYgMTIuMzc1MDAwMiwwLjU2MjUwMDAwOCBaIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjExLjUgMCkiPjxwb2x5Z29uIGZpbGw9IiNGODlEMzUiIHBvaW50cz0iMTYuMzEzIDk2LjE4OCAuNTYzIDE0MS43NSAzOS45MzggMTM5LjUgNjUuMjUgMTM5LjUgNjUuMjUgMTE5LjgxMyA2NC4xMjUgNzkuMzEzIDU4LjUgODMuODEzIi8+PHBvbHlnb24gZmlsbD0iI0Q4N0MzMCIgcG9pbnRzPSI0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi4zNzUgODcuMTg4IDEyNiA2NS4yNSAxMjAuMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VBOEQzQSIgcG9pbnRzPSI0Ni4xMjUgMTAxLjgxMyA2NS4yNSAxMTkuODEzIDY1LjI1IDEzNy44MTMiLz48cG9seWdvbiBmaWxsPSIjRjg5RDM1IiBwb2ludHM9IjY1LjI1IDEyMC4zNzUgODcuNzUgMTI2IDk1LjA2MyAxNTAuMTg4IDkwIDE1MyA2NS4yNSAxMzguMzc1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSI2NS4yNSAxMzguMzc1IDYwLjc1IDE3My4yNSA5MCAxNTMiLz48cG9seWdvbiBmaWxsPSIjRUE4RTNBIiBwb2ludHM9IjkyLjI1IDEwMi4zNzUgOTUuMDYzIDE1MC4xODggODYuNjI1IDEyNS43MTkiLz48cG9seWdvbiBmaWxsPSIjRDg3QzMwIiBwb2ludHM9IjM5LjM3NSAxMzguOTM4IDY1LjI1IDEzOC4zNzUgNjAuNzUgMTczLjI1Ii8+PHBvbHlnb24gZmlsbD0iI0VCOEYzNSIgcG9pbnRzPSIxMi45MzggMTg4LjQzOCA2MC43NSAxNzMuMjUgMzkuMzc1IDEzOC45MzggLjU2MyAxNDEuNzUiLz48cG9seWdvbiBmaWxsPSIjRTg4MjFFIiBwb2ludHM9Ijg4Ljg3NSA1OC41IDY0LjY4OCA3OC43NSA0Ni4xMjUgMTAxLjI1IDkyLjI1IDEwMi45MzgiLz48cG9seWdvbiBmaWxsPSIjMzkzOTM5IiBwb2ludHM9IjcwLjMxMyAxMTIuNSA2NC4xMjUgMTI1LjQzOCA4Ni4wNjMgMTE5LjgxMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTUwLjE4OCAwKSIvPjxwb2x5Z29uIGZpbGw9IiNFODhGMzUiIHBvaW50cz0iMTIuMzc1IC41NjMgODguODc1IDU4LjUgNzUuOTM4IDI3Ii8+PHBhdGggZmlsbD0iIzhFNUEzMCIgZD0iTTEyLjM3NTAwMDIsMC41NjI1MDAwMDggTDIuMjUwMDAwMDMsMzEuNTAwMDAwNSBMNy44NzUwMDAxMiw2NS4yNTAwMDEgTDMuOTM3NTAwMDYsNjcuNTAwMDAxIEw5LjU2MjUwMDE0LDcyLjU2MjUgTDUuMDYyNTAwMDgsNzYuNTAwMDAxMSBMMTEuMjUsODIuMTI1MDAxMiBMNy4zMTI1MDAxMSw4NS41MDAwMDEzIEwxNi4zMTI1MDAyLDk2Ljc1MDAwMTQgTDU4LjUwMDAwMDksODMuODEyNTAxMiBDNzkuMTI1MDAxMiw2Ny4zMTI1MDA0IDg5LjI1MDAwMTMsNTguODc1MDAwMyA4OC44NzUwMDEzLDU4LjUwMDAwMDkgQzg4LjUwMDAwMTMsNTguMTI1MDAwOSA2My4wMDAwMDA5LDM4LjgxMjUwMDYgMTIuMzc1MDAwMiwwLjU2MjUwMDAwOCBaIi8+PC9nPjwvZz48L3N2Zz4=",
    fordefi: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzNDk0XzY2MjU0KSI+CjxwYXRoIGQ9Ik0xMC44NzY5IDE1LjYzNzhIMS41VjE4LjM5OUMxLjUgMTkuODAxMyAyLjYzNDQ3IDIwLjkzOCA0LjAzMzkyIDIwLjkzOEg4LjI0OTkyTDEwLjg3NjkgMTUuNjM3OFoiIGZpbGw9IiM3OTk0RkYiLz4KPHBhdGggZD0iTTEuNSA5Ljc3NTUxSDE5LjA1MTZMMTcuMDEzOSAxMy44NzExSDEuNVY5Ljc3NTUxWiIgZmlsbD0iIzQ4NkRGRiIvPgo8cGF0aCBkPSJNNy42NTk5NiAzSDEuNTI0NDFWOC4wMDcwNEgyMi40NjEyVjNIMTYuMzI1NlY2LjczOTQ0SDE1LjA2MDZWM0g4LjkyNTAyVjYuNzM5NDRINy42NTk5NlYzWiIgZmlsbD0iIzVDRDFGQSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzNDk0XzY2MjU0Ij4KPHJlY3Qgd2lkdGg9IjIxIiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS41IDMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
};
class T extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"] {
    constructor({ options: M }){
        super();
        i(this, "_wallet");
        i(this, "_options");
        this._options = M;
    }
    static getInjectedWallet(M) {
        return globalThis?.[`starknet_${M}`];
    }
    static isWalletInjected(M) {
        return !!T.getInjectedWallet(M);
    }
    get id() {
        return this._options.id;
    }
    get name() {
        return this.ensureWallet(), this._options.name ?? this._wallet?.name ?? this._options.id;
    }
    get icon() {
        this.ensureWallet();
        const M = {
            dark: L[this.id] || U,
            light: L[this.id] || E
        };
        return this._options.icon || this._wallet?.icon || M;
    }
    available() {
        return this.ensureWallet(), this._wallet !== void 0;
    }
    async chainId() {
        this.ensureWallet();
        const M = await this.isLocked();
        if (!this._wallet || M) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        try {
            const I = await this.request({
                type: "wallet_requestChainId"
            });
            return BigInt(I);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]();
        }
    }
    async ready() {
        return this.ensureWallet(), this._wallet ? (await this.request({
            type: "wallet_getPermissions"
        }))?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"].ACCOUNTS) : !1;
    }
    async account(M) {
        if (this.ensureWallet(), await this.isLocked() || !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        const N = await this.request({
            type: "wallet_requestAccounts",
            params: {
                silent_mode: !0
            }
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletAccount"](M, this._wallet, void 0, N[0]);
    }
    async connect(M = {}) {
        if (this.ensureWallet(), !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]();
        let I;
        try {
            I = await this.request({
                type: "wallet_requestAccounts"
            });
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"]();
        }
        if (!I) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"]();
        this._wallet.on("accountsChanged", async (z)=>{
            await this.onAccountsChanged(z);
        }), this._wallet.on("networkChanged", (z, c)=>{
            this.onNetworkChanged(z, c);
        }), await this.onAccountsChanged(I);
        const [N] = I, j = await this.chainId();
        return this.emit("connect", {
            account: N,
            chainId: j
        }), {
            account: N,
            chainId: j
        };
    }
    async disconnect() {
        if (this.ensureWallet(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(), !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]();
        this.emit("disconnect");
    }
    async request(M) {
        if (this.ensureWallet(), !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        try {
            return await this._wallet.request(M);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"]();
        }
    }
    async isLocked() {
        return (await this.request({
            type: "wallet_requestAccounts",
            params: {
                silent_mode: !0
            }
        })).length === 0;
    }
    ensureWallet() {
        const M = T.getInjectedWallet(this._options.id);
        M && (this._wallet = M);
    }
    async onAccountsChanged(M) {
        if (!M) this.emit("disconnect");
        else {
            const [I] = M;
            if (I) {
                const N = await this.chainId();
                this.emit("change", {
                    account: I,
                    chainId: N
                });
            } else this.emit("disconnect");
        }
    }
    onNetworkChanged(M, I) {
        if (M) {
            const N = BigInt(M), [j] = I || [];
            this.emit("change", {
                chainId: N,
                account: j
            });
        } else this.emit("change", {});
    }
    get wallet() {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        return this._wallet;
    }
}
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-d4f30f2e.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>U),
    "a": (()=>G),
    "i": (()=>B),
    "r": (()=>p)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$core$2d$d21d2e96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/core-d21d2e96.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$getStarknetChainId$2d$7c4b3163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/getStarknetChainId-7c4b3163.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript)");
var N = Object.defineProperty;
var v = (e, n, t)=>n in e ? N(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t;
var l = (e, n, t)=>(v(e, typeof n != "symbol" ? n + "" : n, t), t);
;
;
;
;
;
const L = {
    mainnet: "https://starknet-mainnet.public.blastapi.io",
    testnet: "https://starknet-sepolia.public.blastapi.io"
}, O = {
    mainnet: "https://rpc.starknet.lava.build",
    testnet: "https://rpc.starknet-sepolia.lava.build"
}, d = [
    L,
    O
];
function q() {
    const e = Math.floor(Math.random() * d.length);
    return d[e];
}
const W = ()=>Object.keys(localStorage).some((e)=>e === "walletconnect" || e.startsWith("wc@2:")), p = ()=>{
    if (W()) {
        delete localStorage.walletconnect;
        for(const e in localStorage)e.startsWith("wc@2:") && delete localStorage[e];
    }
}, _ = "f2e613881f7a0e811295cdd57999e31b", g = `<svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="#FF875B" />
    <path
      d="M18.316 8H13.684C13.5292 8 13.4052 8.1272 13.4018 8.28531C13.3082 12.7296 11.0323 16.9477 7.11513 19.9355C6.99077 20.0303 6.96243 20.2085 7.05335 20.3369L9.76349 24.1654C9.85569 24.2957 10.0353 24.3251 10.1618 24.2294C12.6111 22.3734 14.5812 20.1345 16 17.6529C17.4187 20.1345 19.389 22.3734 21.8383 24.2294C21.9646 24.3251 22.1443 24.2957 22.2366 24.1654L24.9467 20.3369C25.0375 20.2085 25.0092 20.0303 24.885 19.9355C20.9676 16.9477 18.6918 12.7296 18.5983 8.28531C18.5949 8.1272 18.4708 8 18.316 8Z"
      fill="white"
    />
  </svg>`, B = ()=>typeof window > "u" || !window?.starknet_argentX ? !1 : window?.starknet_argentX?.isInAppBrowser;
class U extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"] {
    constructor(t){
        super();
        l(this, "_wallet", null);
        l(this, "_options");
        this._options = t;
    }
    available() {
        return !0;
    }
    async ready() {
        if (!this._wallet) return !1;
        try {
            return (await this._wallet.request({
                type: "wallet_getPermissions"
            })).includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"].ACCOUNTS);
        } catch  {
            return !1;
        }
    }
    get id() {
        return "argentMobile";
    }
    get name() {
        return "Argent (mobile)";
    }
    get icon() {
        return {
            dark: g,
            light: g
        };
    }
    get wallet() {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        return this._wallet;
    }
    async connect(t = {}) {
        if (await this.ensureWallet(), !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]();
        const o = await this._wallet.request({
            type: "wallet_requestAccounts"
        }), s = await this.chainId();
        return {
            account: o[0],
            chainId: s
        };
    }
    async disconnect() {
        if (await this._wallet.disable(), p(), !this.available() && !this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]();
        this._wallet = null;
    }
    async account(t) {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        const o = await this._wallet.request({
            type: "wallet_requestAccounts",
            params: {
                silent_mode: !0
            }
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletAccount"](t, this._wallet, void 0, o[0]);
    }
    async chainId() {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        const t = await this._wallet.request({
            type: "wallet_requestChainId"
        }), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$getStarknetChainId$2d$7c4b3163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(t);
        return BigInt(o);
    }
    async request(t) {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        try {
            return await this._wallet.request(t);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"]();
        }
    }
    // needed, methods required by starknet-react. Otherwise an exception is throwd
    async initEventListener(t) {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        this._wallet.on("accountsChanged", t);
    }
    // needed, methods required by starknet-react. Otherwise an exception is throwd
    async removeEventListener(t) {
        if (!this._wallet) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]();
        this._wallet.off("accountsChanged", t), this._wallet = null;
    }
    async ensureWallet() {
        const { getStarknetWindowObject: t } = await __turbopack_context__.r("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-1c1d2b10.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i), { chainId: o, projectId: s, dappName: f, description: C, url: m, icons: I, rpcUrl: b } = this._options, r = q(), y = b ?? (!o || o === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].NetworkName.SN_MAIN ? r.mainnet : r.testnet), A = {
            chainId: o ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].NetworkName.SN_MAIN,
            name: f,
            projectId: s ?? _,
            description: C,
            url: m,
            icons: I,
            rpcUrl: y
        };
        s === _ && (console.log("========= NOTICE ========="), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys."), console.log("Go to WalletConnect Cloud (https://cloud.walletconnect.com) and create a new account."), console.log("Once your account is created, create a new project and collect the Project ID"), console.log("=========================="));
        const i = await t(A);
        if (!i) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"]();
        this._wallet = i;
        const c = this._wallet;
        await c.enable(), c.client.on("session_delete", ()=>{
            p(), this._wallet = null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(), document.dispatchEvent(new Event("wallet_disconnected"));
        });
    }
}
class G {
    static init({ options: n, inAppBrowserOptions: t }) {
        return B() ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
            options: {
                id: "argentX",
                ...t
            }
        }) : new U(n);
    }
}
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/braavosMobile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BraavosMobileBaseConnector": (()=>c),
    "BraavosMobileConnector": (()=>g),
    "isInBraavosMobileAppBrowser": (()=>p)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$core$2d$d21d2e96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/core-d21d2e96.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript)");
var i = Object.defineProperty;
var l = (r, e, t)=>e in r ? i(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t;
var n = (r, e, t)=>(l(r, typeof e != "symbol" ? e + "" : e, t), t);
;
;
;
;
const o = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
    <defs>
    <clipPath id="clip1">
      <path d="M 5.332031 0 L 26.667969 0 C 29.613281 0 32 2.386719 32 5.332031 L 32 26.667969 C 32 29.613281 29.613281 32 26.667969 32 L 5.332031 32 C 2.386719 32 0 29.613281 0 26.667969 L 0 5.332031 C 0 2.386719 2.386719 0 5.332031 0 Z M 5.332031 0 "/>
    </clipPath>
    <linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="-9.552" y1="-6.444" x2="50.240002" y2="41.303001" gradientTransform="matrix(0.666667,0,0,0.666667,0,0)">
      <stop offset="0" style="stop-color:rgb(3.529412%,45.09804%,75.294119%);stop-opacity:1;"/>
      <stop offset="1" style="stop-color:rgb(10.980392%,28.627452%,87.058824%);stop-opacity:1;"/>
    </linearGradient>
    <clipPath id="clip2">
      <path d="M 7 4 L 25 4 L 25 15 L 7 15 Z M 7 4 "/>
    </clipPath>
    <clipPath id="clip3">
      <path d="M 5.332031 0 L 26.667969 0 C 29.613281 0 32 2.386719 32 5.332031 L 32 26.667969 C 32 29.613281 29.613281 32 26.667969 32 L 5.332031 32 C 2.386719 32 0 29.613281 0 26.667969 L 0 5.332031 C 0 2.386719 2.386719 0 5.332031 0 Z M 5.332031 0 "/>
    </clipPath>
    <clipPath id="clip4">
    	<path d="M 6 13 L 26 13 L 26 28 L 6 28 Z M 6 13 "/>
    </clipPath>
    <clipPath id="clip5">
      <path d="M 5.332031 0 L 26.667969 0 C 29.613281 0 32 2.386719 32 5.332031 L 32 26.667969 C 32 29.613281 29.613281 32 26.667969 32 L 5.332031 32 C 2.386719 32 0 29.613281 0 26.667969 L 0 5.332031 C 0 2.386719 2.386719 0 5.332031 0 Z M 5.332031 0 "/>
    </clipPath>
    </defs>
    <g id="surface1">
      <g clip-path="url(#clip1)" clip-rule="nonzero">
        <rect x="0" y="0" width="32" height="32" style="fill:url(#linear0);stroke:none;"/>
      </g>
    	<g clip-path="url(#clip2)" clip-rule="nonzero">
        <g clip-path="url(#clip3)" clip-rule="nonzero">
	        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 19.507812 6.320312 C 19.542969 6.378906 19.496094 6.453125 19.425781 6.453125 C 18.027344 6.453125 16.886719 7.5625 16.859375 8.941406 C 16.375 8.851562 15.878906 8.847656 15.390625 8.929688 C 15.359375 7.554688 14.222656 6.453125 12.824219 6.453125 C 12.757812 6.453125 12.710938 6.378906 12.746094 6.320312 C 13.453125 5.128906 14.738281 4.398438 16.125 4.398438 C 17.515625 4.394531 18.800781 5.125 19.507812 6.320312 M 23.65625 14.847656 C 24.132812 14.992188 24.585938 14.574219 24.402344 14.109375 C 23.066406 10.65625 19.109375 9.242188 16.105469 9.242188 C 13.097656 9.242188 9.054688 10.703125 7.804688 14.128906 C 7.632812 14.589844 8.082031 14.996094 8.550781 14.851562 L 15.75 12.648438 C 15.957031 12.582031 16.179688 12.582031 16.386719 12.644531 Z M 23.65625 14.847656 "/>
        </g>
    	</g>
    	<g clip-path="url(#clip4)" clip-rule="nonzero">
        <g clip-path="url(#clip5)" clip-rule="nonzero">
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.734375 15.511719 L 15.757812 13.078125 C 15.964844 13.015625 16.183594 13.015625 16.390625 13.078125 L 24.464844 15.511719 C 25.136719 15.714844 25.597656 16.335938 25.597656 17.042969 L 25.597656 24.378906 C 25.566406 26.167969 23.960938 27.605469 22.167969 27.605469 L 19.195312 27.605469 C 19.054688 27.605469 18.917969 27.550781 18.820312 27.449219 C 18.71875 27.347656 18.664062 27.214844 18.664062 27.074219 L 18.664062 24.5 C 18.664062 23.488281 19.261719 22.570312 20.191406 22.164062 C 21.433594 21.621094 22.90625 20.886719 23.183594 19.410156 C 23.269531 18.933594 22.960938 18.472656 22.484375 18.378906 C 21.285156 18.140625 19.953125 18.230469 18.824219 18.734375 C 17.546875 19.308594 17.210938 20.257812 17.085938 21.539062 L 16.9375 22.914062 C 16.890625 23.335938 16.496094 23.65625 16.074219 23.65625 C 15.636719 23.65625 15.308594 23.324219 15.261719 22.886719 L 15.113281 21.539062 C 15.007812 20.441406 14.8125 19.378906 13.683594 18.875 C 12.390625 18.296875 11.09375 18.105469 9.714844 18.378906 C 9.238281 18.472656 8.929688 18.933594 9.015625 19.410156 C 9.296875 20.898438 10.757812 21.617188 12.007812 22.164062 C 12.9375 22.570312 13.535156 23.488281 13.535156 24.5 L 13.535156 27.074219 C 13.535156 27.367188 13.296875 27.605469 13.003906 27.605469 L 10.03125 27.605469 C 8.238281 27.605469 6.628906 26.167969 6.597656 24.378906 L 6.597656 17.039062 C 6.597656 16.335938 7.058594 15.714844 7.734375 15.511719 "/>
        </g>
    	</g>
    </g>
</svg>
`, p = ()=>{
    if (typeof window > "u") return !1;
    const e = navigator.userAgent.toLowerCase().includes("braavos");
    return e || !1;
};
class c extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"] {
    constructor(){
        super();
        n(this, "_wallet", null);
    }
    available() {
        return !0;
    }
    async ready() {
        return !0;
    }
    get id() {
        return "braavosMobile";
    }
    get name() {
        return "Braavos (mobile)";
    }
    get icon() {
        return {
            dark: o,
            light: o
        };
    }
    get wallet() {
        throw new Error("not implemented");
    }
    async connect(t = {}) {
        return await this.ensureWallet(), {
            account: "",
            chainId: BigInt(0)
        };
    }
    async disconnect() {
        throw new Error("not implemented");
    }
    async account(t) {
        throw new Error("not implemented");
    }
    async chainId() {
        throw new Error("not implemented");
    }
    async request(t) {
        throw new Error("not implemented");
    }
    // needed, methods required by starknet-react. Otherwise an exception is throwd
    async initEventListener(t) {
        throw new Error("not implemented");
    }
    // needed, methods required by starknet-react. Otherwise an exception is throwd
    async removeEventListener(t) {
        throw new Error("not implemented");
    }
    async ensureWallet() {
        window.open(`https://link.braavos.app/dapp/${window.origin}`, "_blank");
    }
}
class g {
    static init(e) {
        const { inAppBrowserOptions: t } = e || {};
        return p() ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
            options: {
                id: "braavos",
                ...t
            }
        }) : new c();
    }
}
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/starknetkit.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "connect": (()=>It),
    "disconnect": (()=>$t),
    "getSelectedConnectorWallet": (()=>Yt),
    "useStarknetkitConnectModal": (()=>Kt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$core$2d$d21d2e96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/core-d21d2e96.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-8edbd361.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$d4f30f2e$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-d4f30f2e.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$braavosMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/braavosMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$getStarknetChainId$2d$7c4b3163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/getStarknetChainId-7c4b3163.js [app-client] (ecmascript)");
var Ee = Object.defineProperty;
var Pe = (t, e, r)=>e in t ? Ee(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r;
var J = (t, e, r)=>(Pe(t, typeof e != "symbol" ? e + "" : e, r), r);
;
;
;
;
;
;
;
;
const Re = ()=>{
    const t = navigator.userAgent.toLowerCase(), e = /android|webos|iphone|ipad|ipod|blackberry|windows phone/.test(t), r = "ontouchstart" in window || navigator.maxTouchPoints > 0, n = window.innerWidth <= 768;
    return e && (r || n);
}, Ie = ({ argentMobileOptions: t, webWalletUrl: e })=>{
    const r = typeof window < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1, n = [];
    return r || (n.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
        options: {
            id: "argentX"
        }
    })), n.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
        options: {
            id: "braavos"
        }
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].isWalletInjected("metamask") && n.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
        options: {
            id: "metamask"
        }
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].isWalletInjected("fordefi") && n.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
        options: {
            id: "fordefi"
        }
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"].isWalletInjected("keplr") && n.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
        options: {
            id: "keplr"
        }
    }))), n.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$d4f30f2e$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"](t)), Re() && n.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$braavosMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BraavosMobileBaseConnector"]()), n.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"]({
        url: e
    })), n;
}, Ve = {
    "Amazon Silk": "amazon_silk",
    "Android Browser": "android",
    Bada: "bada",
    BlackBerry: "blackberry",
    Chrome: "chrome",
    Chromium: "chromium",
    Electron: "electron",
    Epiphany: "epiphany",
    Firefox: "firefox",
    Focus: "focus",
    Generic: "generic",
    "Google Search": "google_search",
    Googlebot: "googlebot",
    "Internet Explorer": "ie",
    "K-Meleon": "k_meleon",
    Maxthon: "maxthon",
    "Microsoft Edge": "edge",
    "MZ Browser": "mz",
    "NAVER Whale Browser": "naver",
    Opera: "opera",
    "Opera Coast": "opera_coast",
    PhantomJS: "phantomjs",
    Puffin: "puffin",
    QupZilla: "qupzilla",
    QQ: "qq",
    QQLite: "qqlite",
    Safari: "safari",
    Sailfish: "sailfish",
    "Samsung Internet for Android": "samsung_internet",
    SeaMonkey: "seamonkey",
    Sleipnir: "sleipnir",
    Swing: "swing",
    Tizen: "tizen",
    "UC Browser": "uc",
    Vivaldi: "vivaldi",
    "WebOS Browser": "webos",
    WeChat: "wechat",
    "Yandex Browser": "yandex",
    Roku: "roku"
}, be = {
    amazon_silk: "Amazon Silk",
    android: "Android Browser",
    bada: "Bada",
    blackberry: "BlackBerry",
    chrome: "Chrome",
    chromium: "Chromium",
    electron: "Electron",
    epiphany: "Epiphany",
    firefox: "Firefox",
    focus: "Focus",
    generic: "Generic",
    googlebot: "Googlebot",
    google_search: "Google Search",
    ie: "Internet Explorer",
    k_meleon: "K-Meleon",
    maxthon: "Maxthon",
    edge: "Microsoft Edge",
    mz: "MZ Browser",
    naver: "NAVER Whale Browser",
    opera: "Opera",
    opera_coast: "Opera Coast",
    phantomjs: "PhantomJS",
    puffin: "Puffin",
    qupzilla: "QupZilla",
    qq: "QQ Browser",
    qqlite: "QQ Browser Lite",
    safari: "Safari",
    sailfish: "Sailfish",
    samsung_internet: "Samsung Internet for Android",
    seamonkey: "SeaMonkey",
    sleipnir: "Sleipnir",
    swing: "Swing",
    tizen: "Tizen",
    uc: "UC Browser",
    vivaldi: "Vivaldi",
    webos: "WebOS Browser",
    wechat: "WeChat",
    yandex: "Yandex Browser"
}, M = {
    tablet: "tablet",
    mobile: "mobile",
    desktop: "desktop",
    tv: "tv"
}, F = {
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MacOS: "macOS",
    iOS: "iOS",
    Android: "Android",
    WebOS: "WebOS",
    BlackBerry: "BlackBerry",
    Bada: "Bada",
    Tizen: "Tizen",
    Linux: "Linux",
    ChromeOS: "Chrome OS",
    PlayStation4: "PlayStation 4",
    Roku: "Roku"
}, P = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit"
};
class i {
    /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */ static getFirstMatch(e, r) {
        const n = r.match(e);
        return n && n.length > 0 && n[1] || "";
    }
    /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */ static getSecondMatch(e, r) {
        const n = r.match(e);
        return n && n.length > 1 && n[2] || "";
    }
    /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */ static matchAndReturnConst(e, r, n) {
        if (e.test(r)) return n;
    }
    static getWindowsVersionName(e) {
        switch(e){
            case "NT":
                return "NT";
            case "XP":
                return "XP";
            case "NT 5.0":
                return "2000";
            case "NT 5.1":
                return "XP";
            case "NT 5.2":
                return "2003";
            case "NT 6.0":
                return "Vista";
            case "NT 6.1":
                return "7";
            case "NT 6.2":
                return "8";
            case "NT 6.3":
                return "8.1";
            case "NT 10.0":
                return "10";
            default:
                return;
        }
    }
    /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */ static getMacOSVersionName(e) {
        const r = e.split(".").splice(0, 2).map((n)=>parseInt(n, 10) || 0);
        if (r.push(0), r[0] === 10) switch(r[1]){
            case 5:
                return "Leopard";
            case 6:
                return "Snow Leopard";
            case 7:
                return "Lion";
            case 8:
                return "Mountain Lion";
            case 9:
                return "Mavericks";
            case 10:
                return "Yosemite";
            case 11:
                return "El Capitan";
            case 12:
                return "Sierra";
            case 13:
                return "High Sierra";
            case 14:
                return "Mojave";
            case 15:
                return "Catalina";
            default:
                return;
        }
    }
    /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */ static getAndroidVersionName(e) {
        const r = e.split(".").splice(0, 2).map((n)=>parseInt(n, 10) || 0);
        if (r.push(0), !(r[0] === 1 && r[1] < 5)) {
            if (r[0] === 1 && r[1] < 6) return "Cupcake";
            if (r[0] === 1 && r[1] >= 6) return "Donut";
            if (r[0] === 2 && r[1] < 2) return "Eclair";
            if (r[0] === 2 && r[1] === 2) return "Froyo";
            if (r[0] === 2 && r[1] > 2) return "Gingerbread";
            if (r[0] === 3) return "Honeycomb";
            if (r[0] === 4 && r[1] < 1) return "Ice Cream Sandwich";
            if (r[0] === 4 && r[1] < 4) return "Jelly Bean";
            if (r[0] === 4 && r[1] >= 4) return "KitKat";
            if (r[0] === 5) return "Lollipop";
            if (r[0] === 6) return "Marshmallow";
            if (r[0] === 7) return "Nougat";
            if (r[0] === 8) return "Oreo";
            if (r[0] === 9) return "Pie";
        }
    }
    /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */ static getVersionPrecision(e) {
        return e.split(".").length;
    }
    /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */ /* eslint consistent-return: 1 */ static compareVersions(e, r, n = !1) {
        const o = i.getVersionPrecision(e), s = i.getVersionPrecision(r);
        let d = Math.max(o, s), h = 0;
        const w = i.map([
            e,
            r
        ], (l)=>{
            const a = d - i.getVersionPrecision(l), g = l + new Array(a + 1).join(".0");
            return i.map(g.split("."), (y)=>new Array(20 - y.length).join("0") + y).reverse();
        });
        for(n && (h = d - Math.min(o, s)), d -= 1; d >= h;){
            if (w[0][d] > w[1][d]) return 1;
            if (w[0][d] === w[1][d]) {
                if (d === h) return 0;
                d -= 1;
            } else if (w[0][d] < w[1][d]) return -1;
        }
    }
    /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */ static map(e, r) {
        const n = [];
        let o;
        if (Array.prototype.map) return Array.prototype.map.call(e, r);
        for(o = 0; o < e.length; o += 1)n.push(r(e[o]));
        return n;
    }
    /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */ static find(e, r) {
        let n, o;
        if (Array.prototype.find) return Array.prototype.find.call(e, r);
        for(n = 0, o = e.length; n < o; n += 1){
            const s = e[n];
            if (r(s, n)) return s;
        }
    }
    /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */ static assign(e, ...r) {
        const n = e;
        let o, s;
        if ("TURBOPACK compile-time truthy", 1) return Object.assign(e, ...r);
        "TURBOPACK unreachable";
    }
    /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */ static getBrowserAlias(e) {
        return Ve[e];
    }
    /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */ static getBrowserTypeByAlias(e) {
        return be[e] || "";
    }
}
const k = /version\/(\d+(\.?_?\d+)+)/i, De = [
    /* Googlebot */ {
        test: [
            /googlebot/i
        ],
        describe (t) {
            const e = {
                name: "Googlebot"
            }, r = i.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    /* Opera < 13.0 */ {
        test: [
            /opera/i
        ],
        describe (t) {
            const e = {
                name: "Opera"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    /* Opera > 13.0 */ {
        test: [
            /opr\/|opios/i
        ],
        describe (t) {
            const e = {
                name: "Opera"
            }, r = i.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /SamsungBrowser/i
        ],
        describe (t) {
            const e = {
                name: "Samsung Internet for Android"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /Whale/i
        ],
        describe (t) {
            const e = {
                name: "NAVER Whale Browser"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /MZBrowser/i
        ],
        describe (t) {
            const e = {
                name: "MZ Browser"
            }, r = i.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /focus/i
        ],
        describe (t) {
            const e = {
                name: "Focus"
            }, r = i.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /swing/i
        ],
        describe (t) {
            const e = {
                name: "Swing"
            }, r = i.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /coast/i
        ],
        describe (t) {
            const e = {
                name: "Opera Coast"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /opt\/\d+(?:.?_?\d+)+/i
        ],
        describe (t) {
            const e = {
                name: "Opera Touch"
            }, r = i.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /yabrowser/i
        ],
        describe (t) {
            const e = {
                name: "Yandex Browser"
            }, r = i.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /ucbrowser/i
        ],
        describe (t) {
            const e = {
                name: "UC Browser"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /Maxthon|mxios/i
        ],
        describe (t) {
            const e = {
                name: "Maxthon"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /epiphany/i
        ],
        describe (t) {
            const e = {
                name: "Epiphany"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /puffin/i
        ],
        describe (t) {
            const e = {
                name: "Puffin"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /sleipnir/i
        ],
        describe (t) {
            const e = {
                name: "Sleipnir"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /k-meleon/i
        ],
        describe (t) {
            const e = {
                name: "K-Meleon"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /micromessenger/i
        ],
        describe (t) {
            const e = {
                name: "WeChat"
            }, r = i.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /qqbrowser/i
        ],
        describe (t) {
            const e = {
                name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
            }, r = i.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /msie|trident/i
        ],
        describe (t) {
            const e = {
                name: "Internet Explorer"
            }, r = i.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /\sedg\//i
        ],
        describe (t) {
            const e = {
                name: "Microsoft Edge"
            }, r = i.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /edg([ea]|ios)/i
        ],
        describe (t) {
            const e = {
                name: "Microsoft Edge"
            }, r = i.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /vivaldi/i
        ],
        describe (t) {
            const e = {
                name: "Vivaldi"
            }, r = i.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /seamonkey/i
        ],
        describe (t) {
            const e = {
                name: "SeaMonkey"
            }, r = i.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /sailfish/i
        ],
        describe (t) {
            const e = {
                name: "Sailfish"
            }, r = i.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /silk/i
        ],
        describe (t) {
            const e = {
                name: "Amazon Silk"
            }, r = i.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /phantom/i
        ],
        describe (t) {
            const e = {
                name: "PhantomJS"
            }, r = i.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /slimerjs/i
        ],
        describe (t) {
            const e = {
                name: "SlimerJS"
            }, r = i.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /blackberry|\bbb\d+/i,
            /rim\stablet/i
        ],
        describe (t) {
            const e = {
                name: "BlackBerry"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /(web|hpw)[o0]s/i
        ],
        describe (t) {
            const e = {
                name: "WebOS Browser"
            }, r = i.getFirstMatch(k, t) || i.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /bada/i
        ],
        describe (t) {
            const e = {
                name: "Bada"
            }, r = i.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /tizen/i
        ],
        describe (t) {
            const e = {
                name: "Tizen"
            }, r = i.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /qupzilla/i
        ],
        describe (t) {
            const e = {
                name: "QupZilla"
            }, r = i.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /firefox|iceweasel|fxios/i
        ],
        describe (t) {
            const e = {
                name: "Firefox"
            }, r = i.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /electron/i
        ],
        describe (t) {
            const e = {
                name: "Electron"
            }, r = i.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /MiuiBrowser/i
        ],
        describe (t) {
            const e = {
                name: "Miui"
            }, r = i.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /chromium/i
        ],
        describe (t) {
            const e = {
                name: "Chromium"
            }, r = i.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /chrome|crios|crmo/i
        ],
        describe (t) {
            const e = {
                name: "Chrome"
            }, r = i.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    {
        test: [
            /GSA/i
        ],
        describe (t) {
            const e = {
                name: "Google Search"
            }, r = i.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    /* Android Browser */ {
        test (t) {
            const e = !t.test(/like android/i), r = t.test(/android/i);
            return e && r;
        },
        describe (t) {
            const e = {
                name: "Android Browser"
            }, r = i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    /* PlayStation 4 */ {
        test: [
            /playstation 4/i
        ],
        describe (t) {
            const e = {
                name: "PlayStation 4"
            }, r = i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    /* Safari */ {
        test: [
            /safari|applewebkit/i
        ],
        describe (t) {
            const e = {
                name: "Safari"
            }, r = i.getFirstMatch(k, t);
            return r && (e.version = r), e;
        }
    },
    /* Something else */ {
        test: [
            /.*/i
        ],
        describe (t) {
            const e = /^(.*)\/(.*) /, r = /^(.*)\/(.*)[ \t]\((.*)/, o = t.search("\\(") !== -1 ? r : e;
            return {
                name: i.getFirstMatch(o, t),
                version: i.getSecondMatch(o, t)
            };
        }
    }
], qe = [
    /* Roku */ {
        test: [
            /Roku\/DVP/
        ],
        describe (t) {
            const e = i.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
            return {
                name: F.Roku,
                version: e
            };
        }
    },
    /* Windows Phone */ {
        test: [
            /windows phone/i
        ],
        describe (t) {
            const e = i.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
            return {
                name: F.WindowsPhone,
                version: e
            };
        }
    },
    /* Windows */ {
        test: [
            /windows /i
        ],
        describe (t) {
            const e = i.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t), r = i.getWindowsVersionName(e);
            return {
                name: F.Windows,
                version: e,
                versionName: r
            };
        }
    },
    /* Firefox on iPad */ {
        test: [
            /Macintosh(.*?) FxiOS(.*?)\//
        ],
        describe (t) {
            const e = {
                name: F.iOS
            }, r = i.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
            return r && (e.version = r), e;
        }
    },
    /* macOS */ {
        test: [
            /macintosh/i
        ],
        describe (t) {
            const e = i.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."), r = i.getMacOSVersionName(e), n = {
                name: F.MacOS,
                version: e
            };
            return r && (n.versionName = r), n;
        }
    },
    /* iOS */ {
        test: [
            /(ipod|iphone|ipad)/i
        ],
        describe (t) {
            const e = i.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
            return {
                name: F.iOS,
                version: e
            };
        }
    },
    /* Android */ {
        test (t) {
            const e = !t.test(/like android/i), r = t.test(/android/i);
            return e && r;
        },
        describe (t) {
            const e = i.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t), r = i.getAndroidVersionName(e), n = {
                name: F.Android,
                version: e
            };
            return r && (n.versionName = r), n;
        }
    },
    /* WebOS */ {
        test: [
            /(web|hpw)[o0]s/i
        ],
        describe (t) {
            const e = i.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t), r = {
                name: F.WebOS
            };
            return e && e.length && (r.version = e), r;
        }
    },
    /* BlackBerry */ {
        test: [
            /blackberry|\bbb\d+/i,
            /rim\stablet/i
        ],
        describe (t) {
            const e = i.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || i.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || i.getFirstMatch(/\bbb(\d+)/i, t);
            return {
                name: F.BlackBerry,
                version: e
            };
        }
    },
    /* Bada */ {
        test: [
            /bada/i
        ],
        describe (t) {
            const e = i.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
            return {
                name: F.Bada,
                version: e
            };
        }
    },
    /* Tizen */ {
        test: [
            /tizen/i
        ],
        describe (t) {
            const e = i.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
            return {
                name: F.Tizen,
                version: e
            };
        }
    },
    /* Linux */ {
        test: [
            /linux/i
        ],
        describe () {
            return {
                name: F.Linux
            };
        }
    },
    /* Chrome OS */ {
        test: [
            /CrOS/
        ],
        describe () {
            return {
                name: F.ChromeOS
            };
        }
    },
    /* Playstation 4 */ {
        test: [
            /PlayStation 4/
        ],
        describe (t) {
            const e = i.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
            return {
                name: F.PlayStation4,
                version: e
            };
        }
    }
], Ge = [
    /* Googlebot */ {
        test: [
            /googlebot/i
        ],
        describe () {
            return {
                type: "bot",
                vendor: "Google"
            };
        }
    },
    /* Huawei */ {
        test: [
            /huawei/i
        ],
        describe (t) {
            const e = i.getFirstMatch(/(can-l01)/i, t) && "Nova", r = {
                type: M.mobile,
                vendor: "Huawei"
            };
            return e && (r.model = e), r;
        }
    },
    /* Nexus Tablet */ {
        test: [
            /nexus\s*(?:7|8|9|10).*/i
        ],
        describe () {
            return {
                type: M.tablet,
                vendor: "Nexus"
            };
        }
    },
    /* iPad */ {
        test: [
            /ipad/i
        ],
        describe () {
            return {
                type: M.tablet,
                vendor: "Apple",
                model: "iPad"
            };
        }
    },
    /* Firefox on iPad */ {
        test: [
            /Macintosh(.*?) FxiOS(.*?)\//
        ],
        describe () {
            return {
                type: M.tablet,
                vendor: "Apple",
                model: "iPad"
            };
        }
    },
    /* Amazon Kindle Fire */ {
        test: [
            /kftt build/i
        ],
        describe () {
            return {
                type: M.tablet,
                vendor: "Amazon",
                model: "Kindle Fire HD 7"
            };
        }
    },
    /* Another Amazon Tablet with Silk */ {
        test: [
            /silk/i
        ],
        describe () {
            return {
                type: M.tablet,
                vendor: "Amazon"
            };
        }
    },
    /* Tablet */ {
        test: [
            /tablet(?! pc)/i
        ],
        describe () {
            return {
                type: M.tablet
            };
        }
    },
    /* iPod/iPhone */ {
        test (t) {
            const e = t.test(/ipod|iphone/i), r = t.test(/like (ipod|iphone)/i);
            return e && !r;
        },
        describe (t) {
            const e = i.getFirstMatch(/(ipod|iphone)/i, t);
            return {
                type: M.mobile,
                vendor: "Apple",
                model: e
            };
        }
    },
    /* Nexus Mobile */ {
        test: [
            /nexus\s*[0-6].*/i,
            /galaxy nexus/i
        ],
        describe () {
            return {
                type: M.mobile,
                vendor: "Nexus"
            };
        }
    },
    /* Mobile */ {
        test: [
            /[^-]mobi/i
        ],
        describe () {
            return {
                type: M.mobile
            };
        }
    },
    /* BlackBerry */ {
        test (t) {
            return t.getBrowserName(!0) === "blackberry";
        },
        describe () {
            return {
                type: M.mobile,
                vendor: "BlackBerry"
            };
        }
    },
    /* Bada */ {
        test (t) {
            return t.getBrowserName(!0) === "bada";
        },
        describe () {
            return {
                type: M.mobile
            };
        }
    },
    /* Windows Phone */ {
        test (t) {
            return t.getBrowserName() === "windows phone";
        },
        describe () {
            return {
                type: M.mobile,
                vendor: "Microsoft"
            };
        }
    },
    /* Android Tablet */ {
        test (t) {
            const e = Number(String(t.getOSVersion()).split(".")[0]);
            return t.getOSName(!0) === "android" && e >= 3;
        },
        describe () {
            return {
                type: M.tablet
            };
        }
    },
    /* Android Mobile */ {
        test (t) {
            return t.getOSName(!0) === "android";
        },
        describe () {
            return {
                type: M.mobile
            };
        }
    },
    /* desktop */ {
        test (t) {
            return t.getOSName(!0) === "macos";
        },
        describe () {
            return {
                type: M.desktop,
                vendor: "Apple"
            };
        }
    },
    /* Windows */ {
        test (t) {
            return t.getOSName(!0) === "windows";
        },
        describe () {
            return {
                type: M.desktop
            };
        }
    },
    /* Linux */ {
        test (t) {
            return t.getOSName(!0) === "linux";
        },
        describe () {
            return {
                type: M.desktop
            };
        }
    },
    /* PlayStation 4 */ {
        test (t) {
            return t.getOSName(!0) === "playstation 4";
        },
        describe () {
            return {
                type: M.tv
            };
        }
    },
    /* Roku */ {
        test (t) {
            return t.getOSName(!0) === "roku";
        },
        describe () {
            return {
                type: M.tv
            };
        }
    }
], Qe = [
    /* EdgeHTML */ {
        test (t) {
            return t.getBrowserName(!0) === "microsoft edge";
        },
        describe (t) {
            if (/\sedg\//i.test(t)) return {
                name: P.Blink
            };
            const r = i.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
            return {
                name: P.EdgeHTML,
                version: r
            };
        }
    },
    /* Trident */ {
        test: [
            /trident/i
        ],
        describe (t) {
            const e = {
                name: P.Trident
            }, r = i.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    /* Presto */ {
        test (t) {
            return t.test(/presto/i);
        },
        describe (t) {
            const e = {
                name: P.Presto
            }, r = i.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    /* Gecko */ {
        test (t) {
            const e = t.test(/gecko/i), r = t.test(/like gecko/i);
            return e && !r;
        },
        describe (t) {
            const e = {
                name: P.Gecko
            }, r = i.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    },
    /* Blink */ {
        test: [
            /(apple)?webkit\/537\.36/i
        ],
        describe () {
            return {
                name: P.Blink
            };
        }
    },
    /* WebKit */ {
        test: [
            /(apple)?webkit/i
        ],
        describe (t) {
            const e = {
                name: P.WebKit
            }, r = i.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
            return r && (e.version = r), e;
        }
    }
];
class se {
    /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */ constructor(e, r = !1){
        if (e == null || e === "") throw new Error("UserAgent parameter can't be empty");
        this._ua = e, this.parsedResult = {}, r !== !0 && this.parse();
    }
    /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */ getUA() {
        return this._ua;
    }
    /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */ test(e) {
        return e.test(this._ua);
    }
    /**
   * Get parsed browser object
   * @return {Object}
   */ parseBrowser() {
        this.parsedResult.browser = {};
        const e = i.find(De, (r)=>{
            if (typeof r.test == "function") return r.test(this);
            if (r.test instanceof Array) return r.test.some((n)=>this.test(n));
            throw new Error("Browser's test function is not valid");
        });
        return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
    }
    /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */ getBrowser() {
        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
    }
    /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */ getBrowserName(e) {
        return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
    }
    /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */ getBrowserVersion() {
        return this.getBrowser().version;
    }
    /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */ getOS() {
        return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
    }
    /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */ parseOS() {
        this.parsedResult.os = {};
        const e = i.find(qe, (r)=>{
            if (typeof r.test == "function") return r.test(this);
            if (r.test instanceof Array) return r.test.some((n)=>this.test(n));
            throw new Error("Browser's test function is not valid");
        });
        return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
    }
    /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */ getOSName(e) {
        const { name: r } = this.getOS();
        return e ? String(r).toLowerCase() || "" : r || "";
    }
    /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */ getOSVersion() {
        return this.getOS().version;
    }
    /**
   * Get parsed platform
   * @return {{}}
   */ getPlatform() {
        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
    }
    /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */ getPlatformType(e = !1) {
        const { type: r } = this.getPlatform();
        return e ? String(r).toLowerCase() || "" : r || "";
    }
    /**
   * Get parsed platform
   * @return {{}}
   */ parsePlatform() {
        this.parsedResult.platform = {};
        const e = i.find(Ge, (r)=>{
            if (typeof r.test == "function") return r.test(this);
            if (r.test instanceof Array) return r.test.some((n)=>this.test(n));
            throw new Error("Browser's test function is not valid");
        });
        return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
    }
    /**
   * Get parsed engine
   * @return {{}}
   */ getEngine() {
        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
    }
    /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */ getEngineName(e) {
        return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
    }
    /**
   * Get parsed platform
   * @return {{}}
   */ parseEngine() {
        this.parsedResult.engine = {};
        const e = i.find(Qe, (r)=>{
            if (typeof r.test == "function") return r.test(this);
            if (r.test instanceof Array) return r.test.some((n)=>this.test(n));
            throw new Error("Browser's test function is not valid");
        });
        return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
    }
    /**
   * Parse full information about the browser
   * @returns {Parser}
   */ parse() {
        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
    }
    /**
   * Get parsed result
   * @return {ParsedResult}
   */ getResult() {
        return i.assign({}, this.parsedResult);
    }
    /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */ satisfies(e) {
        const r = {};
        let n = 0;
        const o = {};
        let s = 0;
        if (Object.keys(e).forEach((h)=>{
            const w = e[h];
            typeof w == "string" ? (o[h] = w, s += 1) : typeof w == "object" && (r[h] = w, n += 1);
        }), n > 0) {
            const h = Object.keys(r), w = i.find(h, (a)=>this.isOS(a));
            if (w) {
                const a = this.satisfies(r[w]);
                if (a !== void 0) return a;
            }
            const l = i.find(h, (a)=>this.isPlatform(a));
            if (l) {
                const a = this.satisfies(r[l]);
                if (a !== void 0) return a;
            }
        }
        if (s > 0) {
            const h = Object.keys(o), w = i.find(h, (l)=>this.isBrowser(l, !0));
            if (w !== void 0) return this.compareVersion(o[w]);
        }
    }
    /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */ isBrowser(e, r = !1) {
        const n = this.getBrowserName().toLowerCase();
        let o = e.toLowerCase();
        const s = i.getBrowserTypeByAlias(o);
        return r && s && (o = s.toLowerCase()), o === n;
    }
    compareVersion(e) {
        let r = [
            0
        ], n = e, o = !1;
        const s = this.getBrowserVersion();
        if (typeof s == "string") return e[0] === ">" || e[0] === "<" ? (n = e.substr(1), e[1] === "=" ? (o = !0, n = e.substr(2)) : r = [], e[0] === ">" ? r.push(1) : r.push(-1)) : e[0] === "=" ? n = e.substr(1) : e[0] === "~" && (o = !0, n = e.substr(1)), r.indexOf(i.compareVersions(s, n, o)) > -1;
    }
    isOS(e) {
        return this.getOSName(!0) === String(e).toLowerCase();
    }
    isPlatform(e) {
        return this.getPlatformType(!0) === String(e).toLowerCase();
    }
    isEngine(e) {
        return this.getEngineName(!0) === String(e).toLowerCase();
    }
    /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */ is(e, r = !1) {
        return this.isBrowser(e, r) || this.isOS(e) || this.isPlatform(e);
    }
    /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */ some(e = []) {
        return e.some((r)=>this.is(r));
    }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */ class Xe {
    /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */ static getParser(e, r = !1) {
        if (typeof e != "string") throw new Error("UserAgent should be a string");
        return new se(e, r);
    }
    /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */ static parse(e) {
        return new se(e).getResult();
    }
    static get BROWSER_MAP() {
        return be;
    }
    static get ENGINE_MAP() {
        return P;
    }
    static get OS_MAP() {
        return F;
    }
    static get PLATFORMS_MAP() {
        return M;
    }
}
const ae = typeof window < "u" ? window : null;
function He() {
    if (!ae) return null;
    switch(Xe.getParser(ae.navigator.userAgent).getBrowserName()?.toLowerCase()){
        case "firefox":
            return "firefox";
        case "microsoft edge":
            return "edge";
        case "android browser":
        case "chrome":
        case "chromium":
        case "electron":
        case "opera":
        case "vivaldi":
            return "chrome";
        default:
            return null;
    }
}
var Ue = typeof global == "object" && global && global.Object === Object && global;
const Ze = Ue;
var Ke = typeof self == "object" && self && self.Object === Object && self, Ye = Ze || Ke || Function("return this")();
const $e = Ye;
var Je = $e.Symbol;
const Y = Je;
var me = Object.prototype, et = me.hasOwnProperty, tt = me.toString, G = Y ? Y.toStringTag : void 0;
function rt(t) {
    var e = et.call(t, G), r = t[G];
    try {
        t[G] = void 0;
        var n = !0;
    } catch  {}
    var o = tt.call(t);
    return n && (e ? t[G] = r : delete t[G]), o;
}
var nt = Object.prototype, it = nt.toString;
function ot(t) {
    return it.call(t);
}
var st = "[object Null]", at = "[object Undefined]", ce = Y ? Y.toStringTag : void 0;
function ct(t) {
    return t == null ? t === void 0 ? at : st : ce && ce in Object(t) ? rt(t) : ot(t);
}
function lt(t) {
    return t != null && typeof t == "object";
}
var dt = Array.isArray;
const ut = dt;
var ft = "[object String]";
function te(t) {
    return typeof t == "string" || !ut(t) && lt(t) && ct(t) == ft;
}
const wt = ({ availableConnectors: t, installedWallets: e, discoveryWallets: r, storeVersion: n, customOrder: o })=>{
    if (window?.starknet_argentX?.isInAppBrowser) return [];
    const h = e.map((a)=>t.find((g)=>g.id === a.id));
    return (o ? t : [
        ...t.filter((a)=>h.includes(a)),
        ...t.filter((a)=>!h.includes(a))
    ]).map((a)=>{
        const g = e.find((f)=>f.id === a.id);
        if (g) {
            const f = g.id === "argentX" ? {
                light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"],
                dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"]
            } : te(g.icon) ? {
                light: g.icon,
                dark: g.icon
            } : g.icon;
            return {
                name: g.name,
                id: g.id,
                icon: f,
                connector: a
            };
        }
        const y = r.filter((f)=>!!f.downloads[n]).find((f)=>f.id === a.id);
        if (y) {
            const { downloads: f } = y, b = y.id === "argentX" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"] : y.icon;
            return {
                name: y.name,
                id: y.id,
                icon: {
                    light: b,
                    dark: b
                },
                connector: a,
                download: f[n]
            };
        }
        return !a || !a.id || !a.name ? null : {
            name: a.name,
            id: a.id,
            icon: a.icon,
            connector: a,
            title: "title" in a && te(a.title) ? a.title : void 0,
            subtitle: "subtitle" in a && te(a.subtitle) ? a.subtitle : void 0
        };
    }).filter((a)=>a !== null);
};
function R() {}
function ve(t) {
    return t();
}
function le() {
    return /* @__PURE__ */ Object.create(null);
}
function j(t) {
    t.forEach(ve);
}
function ye(t) {
    return typeof t == "function";
}
function ke(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let U;
function _e(t, e) {
    return t === e ? !0 : (U || (U = document.createElement("a")), U.href = e, t === U.href);
}
function gt(t) {
    return Object.keys(t).length === 0;
}
function _(t, e) {
    t.appendChild(e);
}
function W(t, e, r) {
    t.insertBefore(e, r || null);
}
function E(t) {
    t.parentNode && t.parentNode.removeChild(t);
}
function ht(t, e) {
    for(let r = 0; r < t.length; r += 1)t[r] && t[r].d(e);
}
function B(t) {
    return document.createElement(t);
}
function I(t) {
    return document.createTextNode(t);
}
function z() {
    return I(" ");
}
function xe() {
    return I("");
}
function O(t, e, r, n) {
    return t.addEventListener(e, r, n), ()=>t.removeEventListener(e, r, n);
}
function p(t, e, r) {
    r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function pt(t) {
    return Array.from(t.childNodes);
}
function $(t, e) {
    e = "" + e, t.data !== e && (t.data = /** @type {string} */ e);
}
function Me(t, e, r, n) {
    r == null ? t.style.removeProperty(e) : t.style.setProperty(e, r, n ? "important" : "");
}
let X;
function Q(t) {
    X = t;
}
function bt() {
    if (!X) throw new Error("Function called outside component initialization");
    return X;
}
function mt(t) {
    bt().$$.on_mount.push(t);
}
const D = [], de = [];
let q = [];
const ue = [], vt = /* @__PURE__ */ Promise.resolve();
let ne = !1;
function yt() {
    ne || (ne = !0, vt.then(Se));
}
function ie(t) {
    q.push(t);
}
const re = /* @__PURE__ */ new Set();
let V = 0;
function Se() {
    if (V !== 0) return;
    const t = X;
    do {
        try {
            for(; V < D.length;){
                const e = D[V];
                V++, Q(e), kt(e.$$);
            }
        } catch (e) {
            throw D.length = 0, V = 0, e;
        }
        for(Q(null), D.length = 0, V = 0; de.length;)de.pop()();
        for(let e = 0; e < q.length; e += 1){
            const r = q[e];
            re.has(r) || (re.add(r), r());
        }
        q.length = 0;
    }while (D.length)
    for(; ue.length;)ue.pop()();
    ne = !1, re.clear(), Q(t);
}
function kt(t) {
    if (t.fragment !== null) {
        t.update(), j(t.before_update);
        const e = t.dirty;
        t.dirty = [
            -1
        ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ie);
    }
}
function _t(t) {
    const e = [], r = [];
    q.forEach((n)=>t.indexOf(n) === -1 ? e.push(n) : r.push(n)), r.forEach((n)=>n()), q = e;
}
const K = /* @__PURE__ */ new Set();
let T;
function Be() {
    T = {
        r: 0,
        c: [],
        p: T
    };
}
function Fe() {
    T.r || j(T.c), T = T.p;
}
function L(t, e) {
    t && t.i && (K.delete(t), t.i(e));
}
function H(t, e, r, n) {
    if (t && t.o) {
        if (K.has(t)) return;
        K.add(t), T.c.push(()=>{
            K.delete(t), n && (r && t.d(1), n());
        }), t.o(e);
    } else n && n();
}
function fe(t) {
    return t?.length !== void 0 ? t : Array.from(t);
}
function xt(t) {
    t && t.c();
}
function Ce(t, e, r) {
    const { fragment: n, after_update: o } = t.$$;
    n && n.m(e, r), ie(()=>{
        const s = t.$$.on_mount.map(ve).filter(ye);
        t.$$.on_destroy ? t.$$.on_destroy.push(...s) : j(s), t.$$.on_mount = [];
    }), o.forEach(ie);
}
function Ae(t, e) {
    const r = t.$$;
    r.fragment !== null && (_t(r.after_update), j(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Mt(t, e) {
    t.$$.dirty[0] === -1 && (D.push(t), yt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Oe(t, e, r, n, o, s, d = null, h = [
    -1
]) {
    const w = X;
    Q(t);
    const l = t.$$ = {
        fragment: null,
        ctx: [],
        // state
        props: s,
        update: R,
        not_equal: o,
        bound: le(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (w ? w.$$.context : [])),
        // everything else
        callbacks: le(),
        dirty: h,
        skip_bound: !1,
        root: e.target || w.$$.root
    };
    d && d(l.root);
    let a = !1;
    if (l.ctx = r ? r(t, e.props || {}, (g, y, ...f)=>{
        const b = f.length ? f[0] : y;
        return l.ctx && o(l.ctx[g], l.ctx[g] = b) && (!l.skip_bound && l.bound[g] && l.bound[g](b), a && Mt(t, g)), y;
    }) : [], l.update(), a = !0, j(l.before_update), l.fragment = n ? n(l.ctx) : !1, e.target) {
        if (e.hydrate) {
            const g = pt(e.target);
            l.fragment && l.fragment.l(g), g.forEach(E);
        } else l.fragment && l.fragment.c();
        e.intro && L(t.$$.fragment), Ce(t, e.target, e.anchor), Se();
    }
    Q(w);
}
class Ne {
    constructor(){
        /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */ J(this, "$$");
        /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */ J(this, "$$set");
    }
    /** @returns {void} */ $destroy() {
        Ae(this, 1), this.$destroy = R;
    }
    /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */ $on(e, r) {
        if (!ye(r)) return R;
        const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return n.push(r), ()=>{
            const o = n.indexOf(r);
            o !== -1 && n.splice(o, 1);
        };
    }
    /**
   * @param {Partial<Props>} props
   * @returns {void}
   */ $set(e) {
        this.$$set && !gt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
    }
}
const St = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: /* @__PURE__ */ new Set()
})).v.add(St);
function Bt(t) {
    let e, r, n, o, s, d = /*wallet*/ (t[0].title ?? /*wallet*/ t[0].name) + "", h, w, l, a = /*wallet*/ (t[0].subtitle ?? "") + "", g, y, f, b;
    function x(v, u) {
        return /*loadingItem*/ v[2] === /*wallet*/ v[0]?.id ? Ot : /*isSvg*/ v[4] ? At : Ct;
    }
    let m = x(t), c = m(t);
    return {
        c () {
            e = B("li"), r = B("span"), n = z(), o = B("div"), s = B("p"), h = I(d), w = z(), l = B("p"), g = I(a), y = z(), c.c(), p(r, "class", "w-8 h-8"), p(s, "class", "font-semibold text-base p"), p(l, "class", "l2 p"), Me(l, "text-align", "center"), p(o, "class", "flex flex-col justify-center items-center"), p(e, "class", `flex flex-row-reverse justify-between items-center 
            p-3 rounded-md cursor-pointer shadow-list-item 
            dark:shadow-none dark:bg-neutral-800 dark:text-white 
          hover:bg-neutral-100 dark:hover:bg-neutral-700 
          focus:outline-none focus:ring-2 
        focus:ring-neutral-200 dark:focus:ring-neutral-700 
          transition-colors`), p(e, "role", "button"), p(e, "tabindex", "0");
        },
        m (v, u) {
            W(v, e, u), _(e, r), _(e, n), _(e, o), _(o, s), _(s, h), _(o, w), _(o, l), _(l, g), _(e, y), c.m(e, null), f || (b = [
                O(e, "click", /*click_handler_1*/ t[8]),
                O(e, "keyup", /*keyup_handler_1*/ t[9])
            ], f = !0);
        },
        p (v, u) {
            u & /*wallet*/ 1 && d !== (d = /*wallet*/ (v[0].title ?? /*wallet*/ v[0].name) + "") && $(h, d), u & /*wallet*/ 1 && a !== (a = /*wallet*/ (v[0].subtitle ?? "") + "") && $(g, a), m === (m = x(v)) && c ? c.p(v, u) : (c.d(1), c = m(v), c && (c.c(), c.m(e, null)));
        },
        d (v) {
            v && E(e), c.d(), f = !1, j(b);
        }
    };
}
function Ft(t) {
    let e, r, n, o, s, d, h = /*wallet*/ t[0].name + "", w, l, a, g, y, f, b, x, m;
    return {
        c () {
            e = B("a"), r = B("li"), n = B("span"), o = z(), s = B("p"), d = I("Install "), w = I(h), l = z(), a = B("img"), p(n, "class", "w-8 h-8"), p(s, "class", "font-semibold text-base p"), p(a, "alt", g = /*wallet*/ t[0].name), _e(a.src, y = /*icon*/ t[3]) || p(a, "src", y), p(a, "class", "w-8 h-8 rounded-full"), p(r, "class", `flex flex-row-reverse justify-between items-center 
              p-3 rounded-md cursor-pointer shadow-list-item 
              dark:shadow-none dark:bg-neutral-800 dark:text-white 
            hover:bg-neutral-100 dark:hover:bg-neutral-700`), p(e, "aria-label", f = /*wallet*/ t[0].name + " download link"), p(e, "href", b = /*wallet*/ t[0].download), p(e, "target", "_blank"), p(e, "rel", "noopener noreferrer"), p(e, "class", `rounded-md focus:outline-none  focus:ring-2 
    focus:ring-neutral-200  dark:focus:ring-neutral-700 transition-colors`);
        },
        m (c, v) {
            W(c, e, v), _(e, r), _(r, n), _(r, o), _(r, s), _(s, d), _(s, w), _(r, l), _(r, a), x || (m = [
                O(r, "click", /*click_handler*/ t[6]),
                O(r, "keyup", /*keyup_handler*/ t[7])
            ], x = !0);
        },
        p (c, v) {
            v & /*wallet*/ 1 && h !== (h = /*wallet*/ c[0].name + "") && $(w, h), v & /*wallet*/ 1 && g !== (g = /*wallet*/ c[0].name) && p(a, "alt", g), v & /*wallet*/ 1 && f !== (f = /*wallet*/ c[0].name + " download link") && p(e, "aria-label", f), v & /*wallet*/ 1 && b !== (b = /*wallet*/ c[0].download) && p(e, "href", b);
        },
        d (c) {
            c && E(e), x = !1, j(m);
        }
    };
}
function Ct(t) {
    let e, r, n;
    return {
        c () {
            e = B("img"), p(e, "alt", r = /*wallet*/ t[0]?.name), _e(e.src, n = /*icon*/ t[3]) || p(e, "src", n), p(e, "class", "w-8 h-8 rounded");
        },
        m (o, s) {
            W(o, e, s);
        },
        p (o, s) {
            s & /*wallet*/ 1 && r !== (r = /*wallet*/ o[0]?.name) && p(e, "alt", r);
        },
        d (o) {
            o && E(e);
        }
    };
}
function At(t) {
    let e;
    return {
        c () {
            e = B("div"), Me(e, "position", "relative");
        },
        m (r, n) {
            W(r, e, n), e.innerHTML = /*icon*/ t[3];
        },
        p: R,
        d (r) {
            r && E(e);
        }
    };
}
function Ot(t) {
    let e;
    return {
        c () {
            e = B("div"), e.innerHTML = '<svg aria-hidden="true" class="w-8 h-8 text-neutral-300 animate-spin dark:text-neutral-600 fill-neutral-600 dark:fill-neutral-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg> <span class="sr-only">Loading...</span>', p(e, "role", "status");
        },
        m (r, n) {
            W(r, e, n);
        },
        p: R,
        d (r) {
            r && E(e);
        }
    };
}
function Nt(t) {
    let e;
    function r(s, d) {
        return /*wallet*/ s[0].download ? Ft : Bt;
    }
    let n = r(t), o = n(t);
    return {
        c () {
            o.c(), e = xe();
        },
        m (s, d) {
            o.m(s, d), W(s, e, d);
        },
        p (s, [d]) {
            n === (n = r(s)) && o ? o.p(s, d) : (o.d(1), o = n(s), o && (o.c(), o.m(e.parentNode, e)));
        },
        i: R,
        o: R,
        d (s) {
            s && E(e), o.d(s);
        }
    };
}
function Et(t, e, r) {
    let { wallet: n } = e, { theme: o = null } = e, { cb: s = async ()=>{} } = e, { loadingItem: d = !1 } = e;
    const h = typeof n.icon == "string" ? n.icon : o === "dark" ? n.icon.dark : n.icon.light, w = h?.startsWith("<svg"), l = ()=>{
        s(null);
    }, a = (f)=>{
        f.key === "Enter" && s(null);
    }, g = async ()=>{
        s(n.connector);
    }, y = async (f)=>{
        f.key === "Enter" && s(n.connector);
    };
    return t.$$set = (f)=>{
        "wallet" in f && r(0, n = f.wallet), "theme" in f && r(5, o = f.theme), "cb" in f && r(1, s = f.cb), "loadingItem" in f && r(2, d = f.loadingItem);
    }, [
        n,
        s,
        d,
        h,
        w,
        o,
        l,
        a,
        g,
        y
    ];
}
class Pt extends Ne {
    constructor(e){
        super(), Oe(this, e, Et, Nt, ke, {
            wallet: 0,
            theme: 5,
            cb: 1,
            loadingItem: 2
        });
    }
}
function we(t, e, r) {
    const n = t.slice();
    return n[16] = e[r], n;
}
function ge(t) {
    let e, r, n, o, s, d, h, w, l, a, g, y, f, b, x, m = fe(/*modalWallets*/ t[1]), c = [];
    for(let u = 0; u < m.length; u += 1)c[u] = he(we(t, m, u));
    const v = (u)=>H(c[u], 1, 1, ()=>{
            c[u] = null;
        });
    return {
        c () {
            e = B("div"), r = B("main"), n = B("header"), o = B("h2"), o.textContent = "Connect to", s = z(), d = B("h1"), h = I(/*dappName*/ t[0]), w = z(), l = B("span"), l.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.77275 3.02275C9.99242 2.80308 9.99242 2.44692 9.77275 2.22725C9.55308 2.00758 9.19692 2.00758 8.97725 2.22725L6 5.20451L3.02275 2.22725C2.80308 2.00758 2.44692 2.00758 2.22725 2.22725C2.00758 2.44692 2.00758 2.80308 2.22725 3.02275L5.20451 6L2.22725 8.97725C2.00758 9.19692 2.00758 9.55308 2.22725 9.77275C2.44692 9.99242 2.80308 9.99242 3.02275 9.77275L6 6.79549L8.97725 9.77275C9.19692 9.99242 9.55308 9.99242 9.77275 9.77275C9.99242 9.55308 9.99242 9.19692 9.77275 8.97725L6.79549 6L9.77275 3.02275Z" fill="currentColor"></path></svg>', a = z(), g = B("ul");
            for(let u = 0; u < c.length; u += 1)c[u].c();
            p(o, "class", "text-sm text-gray-400 font-semibold"), p(d, "class", `text-xl font-semibold mb-6 
                  max-w-[240px] overflow-hidden 
                  whitespace-nowrap text-ellipsis`), p(l, "class", `absolute top-0 right-0 p-2 cursor-pointer
                  rounded-full bg-neutral-100 dark:bg-neutral-800
                  text-neutral-400 dark:text-white
                  hover:bg-neutral-100 dark:hover:bg-neutral-700
                  focus:outline-none focus:ring-2
                focus:ring-neutral-200 dark:focus:ring-neutral-700
                  transition-colors`), p(l, "role", "button"), p(l, "tabindex", "0"), p(l, "aria-label", "Close"), p(n, "class", "flex items-center justify-center flex-col mb-2 relative"), p(g, "class", "flex flex-col gap-3"), p(r, "role", "dialog"), p(r, "class", `rounded-3xl shadow-modal dark:shadow-none 
              w-full max-w-[380px] z-50 
              mx-6 p-6 pb-8 text-center 
              bg-slate-50 dark:bg-neutral-900 
            text-neutral-900 dark:text-white`), p(e, "part", "starknetkit-modal"), p(e, "class", y = `modal-font backdrop-blur-sm fixed inset-0 flex items-center 
            justify-center bg-black/25 z-[9999] ${t[4]}`);
        },
        m (u, C) {
            W(u, e, C), _(e, r), _(r, n), _(n, o), _(n, s), _(n, d), _(d, h), _(n, w), _(n, l), _(r, a), _(r, g);
            for(let S = 0; S < c.length; S += 1)c[S] && c[S].m(g, null);
            f = !0, b || (x = [
                O(l, "click", /*click_handler*/ t[8]),
                O(l, "keyup", /*keyup_handler*/ t[9]),
                O(r, "click", Lt),
                O(r, "keyup", jt),
                O(e, "click", /*click_handler_2*/ t[10]),
                O(e, "keyup", /*keyup_handler_2*/ t[11])
            ], b = !0);
        },
        p (u, C) {
            if ((!f || C & /*dappName*/ 1) && $(h, /*dappName*/ u[0]), C & /*modalWallets, loadingItem, cb, theme*/ 78) {
                m = fe(/*modalWallets*/ u[1]);
                let S;
                for(S = 0; S < m.length; S += 1){
                    const oe = we(u, m, S);
                    c[S] ? (c[S].p(oe, C), L(c[S], 1)) : (c[S] = he(oe), c[S].c(), L(c[S], 1), c[S].m(g, null));
                }
                for(Be(), S = m.length; S < c.length; S += 1)v(S);
                Fe();
            }
            (!f || C & /*darkModeControlClass*/ 16 && y !== (y = `modal-font backdrop-blur-sm fixed inset-0 flex items-center 
            justify-center bg-black/25 z-[9999] ${u[4]}`)) && p(e, "class", y);
        },
        i (u) {
            if (!f) {
                for(let C = 0; C < m.length; C += 1)L(c[C]);
                f = !0;
            }
        },
        o (u) {
            c = c.filter(Boolean);
            for(let C = 0; C < c.length; C += 1)H(c[C]);
            f = !1;
        },
        d (u) {
            u && E(e), ht(c, u), b = !1, j(x);
        }
    };
}
function he(t) {
    let e, r;
    return e = new Pt({
        props: {
            wallet: /*wallet*/ t[16],
            loadingItem: /*loadingItem*/ t[3],
            cb: /*cb*/ t[6],
            theme: /*theme*/ t[2]
        }
    }), {
        c () {
            xt(e.$$.fragment);
        },
        m (n, o) {
            Ce(e, n, o), r = !0;
        },
        p (n, o) {
            const s = {};
            o & /*modalWallets*/ 2 && (s.wallet = /*wallet*/ n[16]), o & /*loadingItem*/ 8 && (s.loadingItem = /*loadingItem*/ n[3]), o & /*theme*/ 4 && (s.theme = /*theme*/ n[2]), e.$set(s);
        },
        i (n) {
            r || (L(e.$$.fragment, n), r = !0);
        },
        o (n) {
            H(e.$$.fragment, n), r = !1;
        },
        d (n) {
            Ae(e, n);
        }
    };
}
function zt(t) {
    let e, r, n = !/*isInAppBrowser*/ t[5] && /*modalWallets*/ t[1].length > 1 && ge(t);
    return {
        c () {
            n && n.c(), e = xe();
        },
        m (o, s) {
            n && n.m(o, s), W(o, e, s), r = !0;
        },
        p (o, [s]) {
            !/*isInAppBrowser*/ o[5] && /*modalWallets*/ o[1].length > 1 ? n ? (n.p(o, s), s & /*modalWallets*/ 2 && L(n, 1)) : (n = ge(o), n.c(), L(n, 1), n.m(e.parentNode, e)) : n && (Be(), H(n, 1, 1, ()=>{
                n = null;
            }), Fe());
        },
        i (o) {
            r || (L(n), r = !0);
        },
        o (o) {
            H(n), r = !1;
        },
        d (o) {
            o && E(e), n && n.d(o);
        }
    };
}
const Lt = (t)=>t.stopPropagation(), jt = (t)=>{
    t.stopPropagation();
};
function Wt(t, e, r) {
    let { dappName: n = window?.document.title ?? "" } = e, { modalWallets: o } = e, { callback: s = async ()=>{} } = e, { theme: d = null } = e, h = !1, l = window?.starknet_argentX?.isInAppBrowser;
    const g = navigator.userAgent.toLowerCase().includes("braavos"), y = (u)=>{
        r(3, h = u);
    };
    let f = async (u)=>{
        y(u?.id ?? !1);
        try {
            await s(u ?? null);
        } finally{
            y(!1);
        }
    }, b = d === "dark" ? "dark" : "";
    mt(async ()=>{
        if (d === "dark" || d === null && window.matchMedia("(prefers-color-scheme: dark)").matches ? r(4, b = "dark") : r(4, b = ""), l && window?.starknet_argentX) {
            try {
                s(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
                    options: {
                        id: "argentX"
                    }
                }));
            } catch  {}
            return;
        }
        if (g && window?.starknet_braavos) {
            try {
                s(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"]({
                    options: {
                        id: "braavos"
                    }
                }));
            } catch  {}
            return;
        }
        if (o.length === 1) try {
            const [u] = o;
            await s(u.connector);
        } catch (u) {
            console.error(u);
        }
    });
    const x = ()=>f(null), m = (u)=>{
        u.key === "Enter" && f(null);
    }, c = ()=>f(null), v = (u)=>{
        u.key === "Escape" && f(null);
    };
    return t.$$set = (u)=>{
        "dappName" in u && r(0, n = u.dappName), "modalWallets" in u && r(1, o = u.modalWallets), "callback" in u && r(7, s = u.callback), "theme" in u && r(2, d = u.theme);
    }, [
        n,
        o,
        d,
        h,
        b,
        l,
        f,
        s,
        x,
        m,
        c,
        v
    ];
}
class Tt extends Ne {
    constructor(e){
        super(), Oe(this, e, Wt, zt, ke, {
            dappName: 0,
            modalWallets: 1,
            callback: 7,
            theme: 2
        });
    }
}
const Rt = `@import"https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&display=swap";.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.right-0{right:0}.top-0{top:0}.z-50{z-index:50}.z-\\[9999\\]{z-index:9999}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mb-2{margin-bottom:.5rem}.mb-6{margin-bottom:1.5rem}.block{display:block}.inline{display:inline}.flex{display:flex}.h-8{height:2rem}.w-8{width:2rem}.w-full{width:100%}.max-w-\\[240px\\]{max-width:240px}.max-w-\\[380px\\]{max-width:380px}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-3{gap:.75rem}.overflow-hidden{overflow:hidden}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border{border-width:1px}.bg-black\\/25{background-color:#00000040}.bg-neutral-100{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1))}.bg-slate-50{--tw-bg-opacity: 1;background-color:rgb(248 250 252 / var(--tw-bg-opacity, 1))}.fill-neutral-600{fill:#525252}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-6{padding:1.5rem}.pb-8{padding-bottom:2rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-neutral-300{--tw-text-opacity: 1;color:rgb(212 212 212 / var(--tw-text-opacity, 1))}.text-neutral-400{--tw-text-opacity: 1;color:rgb(163 163 163 / var(--tw-text-opacity, 1))}.text-neutral-900{--tw-text-opacity: 1;color:rgb(23 23 23 / var(--tw-text-opacity, 1))}.shadow-list-item{--tw-shadow: 0px 2px 12px rgba(0, 0, 0, .12);--tw-shadow-colored: 0px 2px 12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-modal{--tw-shadow: 0px 4px 20px rgba(0, 0, 0, .5);--tw-shadow-colored: 0px 4px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.modal-font{font-family:Barlow,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-feature-settings:"kern"}.l2{color:#8c8c8c;font-size:12px;font-weight:500;line-height:14px;letter-spacing:0em;text-align:left}.p{margin:0}.hover\\:bg-neutral-100:hover{--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-neutral-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 229 229 / var(--tw-ring-opacity, 1))}.dark\\:bg-neutral-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(38 38 38 / var(--tw-bg-opacity, 1))}.dark\\:bg-neutral-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(23 23 23 / var(--tw-bg-opacity, 1))}.dark\\:fill-neutral-300:is(.dark *){fill:#d4d4d4}.dark\\:text-neutral-600:is(.dark *){--tw-text-opacity: 1;color:rgb(82 82 82 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:shadow-none:is(.dark *){--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.dark\\:hover\\:bg-neutral-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(64 64 64 / var(--tw-bg-opacity, 1))}.dark\\:focus\\:ring-neutral-700:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(64 64 64 / var(--tw-ring-opacity, 1))}
`, Kt = (t)=>({
        starknetkitConnectModal: async ()=>await It({
                ...t,
                resultType: t?.resultType ?? "connector"
            })
    });
let N = null;
const It = async ({ modalMode: t = "canAsk", storeVersion: e = He(), modalTheme: r, dappName: n, resultType: o = "wallet", ...s })=>{
    const { webWalletUrl: d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"], argentMobileOptions: h } = s, { connectors: w } = s;
    N = null;
    const l = !w || w.length === 0 ? Ie({
        argentMobileOptions: h,
        webWalletUrl: d
    }) : w, a = localStorage.getItem("starknetLastConnectedWallet");
    if (t === "neverAsk") try {
        const b = l.find((m)=>m.id === a) ?? null;
        let x = null;
        return b && o === "wallet" && (x = await b.connect()), {
            connector: b,
            wallet: b?.wallet ?? null,
            connectorData: x
        };
    } catch (b) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(), new Error(b);
    }
    const g = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$core$2d$d21d2e96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].getAvailableWallets(s);
    if (t === "canAsk" && a && ((await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$core$2d$d21d2e96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].getAuthorizedWallets(s)).find((m)=>m.id === a) ?? g.length === 1 ? g[0] : void 0)) {
        const m = l.find((v)=>v.id === a);
        let c = null;
        return o === "wallet" && (c = await m?.connect() ?? null), m && (N = m), {
            connector: N,
            connectorData: c,
            wallet: m?.wallet ?? null
        };
    }
    const y = wt({
        availableConnectors: l,
        installedWallets: g,
        discoveryWallets: await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$core$2d$d21d2e96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].getDiscoveryWallets(s),
        storeVersion: e,
        customOrder: w ? w?.length > 0 : !1
    }), f = ()=>{
        const b = "starknetkit-modal-container", x = document.getElementById(b);
        if (x) {
            if (x.shadowRoot) return x.shadowRoot;
            x.remove();
        }
        const m = document.createElement("div");
        m.id = b, document.body.appendChild(m);
        const c = m.attachShadow({
            mode: "open"
        });
        return c.innerHTML = `<style>${Rt}</style>`, c;
    };
    return new Promise((b, x)=>{
        const m = new Tt({
            target: f(),
            props: {
                dappName: n,
                callback: async (c)=>{
                    try {
                        if (N = c, o === "wallet") {
                            const v = await c?.connect() ?? null;
                            c !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(c.id), b({
                                connector: c,
                                connectorData: v,
                                wallet: c?.wallet ?? null
                            });
                        } else b({
                            connector: c,
                            wallet: null,
                            connectorData: null
                        });
                    } catch (v) {
                        x(v);
                    } finally{
                        setTimeout(()=>m.$destroy());
                    }
                },
                theme: r === "system" ? null : r ?? null,
                modalWallets: y
            }
        });
    });
}, Yt = ()=>N ? N.wallet : null, $t = async (t = {})=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(), N && await N.disconnect(), N = null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$core$2d$d21d2e96$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].disconnect(t));
;
}}),
}]);

//# sourceMappingURL=99bf9_starknetkit_dist_ae79608a._.js.map