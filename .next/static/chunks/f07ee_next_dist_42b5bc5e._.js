(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}}),
"[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(function() {
    var r = {
        992: function(r) {
            r.exports = function(r, t, n) {
                if (r.filter) return r.filter(t, n);
                if (void 0 === r || null === r) throw new TypeError;
                if ("function" != typeof t) throw new TypeError;
                var o = [];
                for(var i = 0; i < r.length; i++){
                    if (!e.call(r, i)) continue;
                    var a = r[i];
                    if (t.call(n, a, i, r)) o.push(a);
                }
                return o;
            };
            var e = Object.prototype.hasOwnProperty;
        },
        256: function(r, e, t) {
            "use strict";
            var n = t(192);
            var o = t(139);
            var i = o(n("String.prototype.indexOf"));
            r.exports = function callBoundIntrinsic(r, e) {
                var t = n(r, !!e);
                if (typeof t === "function" && i(r, ".prototype.") > -1) {
                    return o(t);
                }
                return t;
            };
        },
        139: function(r, e, t) {
            "use strict";
            var n = t(212);
            var o = t(192);
            var i = o("%Function.prototype.apply%");
            var a = o("%Function.prototype.call%");
            var f = o("%Reflect.apply%", true) || n.call(a, i);
            var u = o("%Object.getOwnPropertyDescriptor%", true);
            var s = o("%Object.defineProperty%", true);
            var c = o("%Math.max%");
            if (s) {
                try {
                    s({}, "a", {
                        value: 1
                    });
                } catch (r) {
                    s = null;
                }
            }
            r.exports = function callBind(r) {
                var e = f(n, a, arguments);
                if (u && s) {
                    var t = u(e, "length");
                    if (t.configurable) {
                        s(e, "length", {
                            value: 1 + c(0, r.length - (arguments.length - 1))
                        });
                    }
                }
                return e;
            };
            var y = function applyBind() {
                return f(n, i, arguments);
            };
            if (s) {
                s(r.exports, "apply", {
                    value: y
                });
            } else {
                r.exports.apply = y;
            }
        },
        181: function(r) {
            "use strict";
            r.exports = EvalError;
        },
        545: function(r) {
            "use strict";
            r.exports = Error;
        },
        22: function(r) {
            "use strict";
            r.exports = RangeError;
        },
        803: function(r) {
            "use strict";
            r.exports = ReferenceError;
        },
        182: function(r) {
            "use strict";
            r.exports = SyntaxError;
        },
        202: function(r) {
            "use strict";
            r.exports = TypeError;
        },
        284: function(r) {
            "use strict";
            r.exports = URIError;
        },
        144: function(r) {
            var e = Object.prototype.hasOwnProperty;
            var t = Object.prototype.toString;
            r.exports = function forEach(r, n, o) {
                if (t.call(n) !== "[object Function]") {
                    throw new TypeError("iterator must be a function");
                }
                var i = r.length;
                if (i === +i) {
                    for(var a = 0; a < i; a++){
                        n.call(o, r[a], a, r);
                    }
                } else {
                    for(var f in r){
                        if (e.call(r, f)) {
                            n.call(o, r[f], f, r);
                        }
                    }
                }
            };
        },
        136: function(r) {
            "use strict";
            var e = "Function.prototype.bind called on incompatible ";
            var t = Object.prototype.toString;
            var n = Math.max;
            var o = "[object Function]";
            var i = function concatty(r, e) {
                var t = [];
                for(var n = 0; n < r.length; n += 1){
                    t[n] = r[n];
                }
                for(var o = 0; o < e.length; o += 1){
                    t[o + r.length] = e[o];
                }
                return t;
            };
            var a = function slicy(r, e) {
                var t = [];
                for(var n = e || 0, o = 0; n < r.length; n += 1, o += 1){
                    t[o] = r[n];
                }
                return t;
            };
            var joiny = function(r, e) {
                var t = "";
                for(var n = 0; n < r.length; n += 1){
                    t += r[n];
                    if (n + 1 < r.length) {
                        t += e;
                    }
                }
                return t;
            };
            r.exports = function bind(r) {
                var f = this;
                if (typeof f !== "function" || t.apply(f) !== o) {
                    throw new TypeError(e + f);
                }
                var u = a(arguments, 1);
                var s;
                var binder = function() {
                    if (this instanceof s) {
                        var e = f.apply(this, i(u, arguments));
                        if (Object(e) === e) {
                            return e;
                        }
                        return this;
                    }
                    return f.apply(r, i(u, arguments));
                };
                var c = n(0, f.length - u.length);
                var y = [];
                for(var p = 0; p < c; p++){
                    y[p] = "$" + p;
                }
                s = Function("binder", "return function (" + joiny(y, ",") + "){ return binder.apply(this,arguments); }")(binder);
                if (f.prototype) {
                    var l = function Empty() {};
                    l.prototype = f.prototype;
                    s.prototype = new l;
                    l.prototype = null;
                }
                return s;
            };
        },
        212: function(r, e, t) {
            "use strict";
            var n = t(136);
            r.exports = Function.prototype.bind || n;
        },
        192: function(r, e, t) {
            "use strict";
            var n;
            var o = t(545);
            var i = t(181);
            var a = t(22);
            var f = t(803);
            var u = t(182);
            var s = t(202);
            var c = t(284);
            var y = Function;
            var getEvalledConstructor = function(r) {
                try {
                    return y('"use strict"; return (' + r + ").constructor;")();
                } catch (r) {}
            };
            var p = Object.getOwnPropertyDescriptor;
            if (p) {
                try {
                    p({}, "");
                } catch (r) {
                    p = null;
                }
            }
            var throwTypeError = function() {
                throw new s;
            };
            var l = p ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (r) {
                    try {
                        return p(arguments, "callee").get;
                    } catch (r) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var g = t(115)();
            var v = t(14)();
            var b = Object.getPrototypeOf || (v ? function(r) {
                return r.__proto__;
            } : null);
            var d = {};
            var m = typeof Uint8Array === "undefined" || !b ? n : b(Uint8Array);
            var S = {
                __proto__: null,
                "%AggregateError%": typeof AggregateError === "undefined" ? n : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? n : ArrayBuffer,
                "%ArrayIteratorPrototype%": g && b ? b([][Symbol.iterator]()) : n,
                "%AsyncFromSyncIteratorPrototype%": n,
                "%AsyncFunction%": d,
                "%AsyncGenerator%": d,
                "%AsyncGeneratorFunction%": d,
                "%AsyncIteratorPrototype%": d,
                "%Atomics%": typeof Atomics === "undefined" ? n : Atomics,
                "%BigInt%": typeof BigInt === "undefined" ? n : BigInt,
                "%BigInt64Array%": typeof BigInt64Array === "undefined" ? n : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array === "undefined" ? n : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView === "undefined" ? n : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": o,
                "%eval%": eval,
                "%EvalError%": i,
                "%Float32Array%": typeof Float32Array === "undefined" ? n : Float32Array,
                "%Float64Array%": typeof Float64Array === "undefined" ? n : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? n : FinalizationRegistry,
                "%Function%": y,
                "%GeneratorFunction%": d,
                "%Int8Array%": typeof Int8Array === "undefined" ? n : Int8Array,
                "%Int16Array%": typeof Int16Array === "undefined" ? n : Int16Array,
                "%Int32Array%": typeof Int32Array === "undefined" ? n : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": g && b ? b(b([][Symbol.iterator]())) : n,
                "%JSON%": typeof JSON === "object" ? JSON : n,
                "%Map%": typeof Map === "undefined" ? n : Map,
                "%MapIteratorPrototype%": typeof Map === "undefined" || !g || !b ? n : b((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise === "undefined" ? n : Promise,
                "%Proxy%": typeof Proxy === "undefined" ? n : Proxy,
                "%RangeError%": a,
                "%ReferenceError%": f,
                "%Reflect%": typeof Reflect === "undefined" ? n : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set === "undefined" ? n : Set,
                "%SetIteratorPrototype%": typeof Set === "undefined" || !g || !b ? n : b((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? n : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": g && b ? b(""[Symbol.iterator]()) : n,
                "%Symbol%": g ? Symbol : n,
                "%SyntaxError%": u,
                "%ThrowTypeError%": l,
                "%TypedArray%": m,
                "%TypeError%": s,
                "%Uint8Array%": typeof Uint8Array === "undefined" ? n : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? n : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array === "undefined" ? n : Uint16Array,
                "%Uint32Array%": typeof Uint32Array === "undefined" ? n : Uint32Array,
                "%URIError%": c,
                "%WeakMap%": typeof WeakMap === "undefined" ? n : WeakMap,
                "%WeakRef%": typeof WeakRef === "undefined" ? n : WeakRef,
                "%WeakSet%": typeof WeakSet === "undefined" ? n : WeakSet
            };
            if (b) {
                try {
                    null.error;
                } catch (r) {
                    var A = b(b(r));
                    S["%Error.prototype%"] = A;
                }
            }
            var h = function doEval(r) {
                var e;
                if (r === "%AsyncFunction%") {
                    e = getEvalledConstructor("async function () {}");
                } else if (r === "%GeneratorFunction%") {
                    e = getEvalledConstructor("function* () {}");
                } else if (r === "%AsyncGeneratorFunction%") {
                    e = getEvalledConstructor("async function* () {}");
                } else if (r === "%AsyncGenerator%") {
                    var t = doEval("%AsyncGeneratorFunction%");
                    if (t) {
                        e = t.prototype;
                    }
                } else if (r === "%AsyncIteratorPrototype%") {
                    var n = doEval("%AsyncGenerator%");
                    if (n && b) {
                        e = b(n.prototype);
                    }
                }
                S[r] = e;
                return e;
            };
            var O = {
                __proto__: null,
                "%ArrayBufferPrototype%": [
                    "ArrayBuffer",
                    "prototype"
                ],
                "%ArrayPrototype%": [
                    "Array",
                    "prototype"
                ],
                "%ArrayProto_entries%": [
                    "Array",
                    "prototype",
                    "entries"
                ],
                "%ArrayProto_forEach%": [
                    "Array",
                    "prototype",
                    "forEach"
                ],
                "%ArrayProto_keys%": [
                    "Array",
                    "prototype",
                    "keys"
                ],
                "%ArrayProto_values%": [
                    "Array",
                    "prototype",
                    "values"
                ],
                "%AsyncFunctionPrototype%": [
                    "AsyncFunction",
                    "prototype"
                ],
                "%AsyncGenerator%": [
                    "AsyncGeneratorFunction",
                    "prototype"
                ],
                "%AsyncGeneratorPrototype%": [
                    "AsyncGeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%BooleanPrototype%": [
                    "Boolean",
                    "prototype"
                ],
                "%DataViewPrototype%": [
                    "DataView",
                    "prototype"
                ],
                "%DatePrototype%": [
                    "Date",
                    "prototype"
                ],
                "%ErrorPrototype%": [
                    "Error",
                    "prototype"
                ],
                "%EvalErrorPrototype%": [
                    "EvalError",
                    "prototype"
                ],
                "%Float32ArrayPrototype%": [
                    "Float32Array",
                    "prototype"
                ],
                "%Float64ArrayPrototype%": [
                    "Float64Array",
                    "prototype"
                ],
                "%FunctionPrototype%": [
                    "Function",
                    "prototype"
                ],
                "%Generator%": [
                    "GeneratorFunction",
                    "prototype"
                ],
                "%GeneratorPrototype%": [
                    "GeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%Int8ArrayPrototype%": [
                    "Int8Array",
                    "prototype"
                ],
                "%Int16ArrayPrototype%": [
                    "Int16Array",
                    "prototype"
                ],
                "%Int32ArrayPrototype%": [
                    "Int32Array",
                    "prototype"
                ],
                "%JSONParse%": [
                    "JSON",
                    "parse"
                ],
                "%JSONStringify%": [
                    "JSON",
                    "stringify"
                ],
                "%MapPrototype%": [
                    "Map",
                    "prototype"
                ],
                "%NumberPrototype%": [
                    "Number",
                    "prototype"
                ],
                "%ObjectPrototype%": [
                    "Object",
                    "prototype"
                ],
                "%ObjProto_toString%": [
                    "Object",
                    "prototype",
                    "toString"
                ],
                "%ObjProto_valueOf%": [
                    "Object",
                    "prototype",
                    "valueOf"
                ],
                "%PromisePrototype%": [
                    "Promise",
                    "prototype"
                ],
                "%PromiseProto_then%": [
                    "Promise",
                    "prototype",
                    "then"
                ],
                "%Promise_all%": [
                    "Promise",
                    "all"
                ],
                "%Promise_reject%": [
                    "Promise",
                    "reject"
                ],
                "%Promise_resolve%": [
                    "Promise",
                    "resolve"
                ],
                "%RangeErrorPrototype%": [
                    "RangeError",
                    "prototype"
                ],
                "%ReferenceErrorPrototype%": [
                    "ReferenceError",
                    "prototype"
                ],
                "%RegExpPrototype%": [
                    "RegExp",
                    "prototype"
                ],
                "%SetPrototype%": [
                    "Set",
                    "prototype"
                ],
                "%SharedArrayBufferPrototype%": [
                    "SharedArrayBuffer",
                    "prototype"
                ],
                "%StringPrototype%": [
                    "String",
                    "prototype"
                ],
                "%SymbolPrototype%": [
                    "Symbol",
                    "prototype"
                ],
                "%SyntaxErrorPrototype%": [
                    "SyntaxError",
                    "prototype"
                ],
                "%TypedArrayPrototype%": [
                    "TypedArray",
                    "prototype"
                ],
                "%TypeErrorPrototype%": [
                    "TypeError",
                    "prototype"
                ],
                "%Uint8ArrayPrototype%": [
                    "Uint8Array",
                    "prototype"
                ],
                "%Uint8ClampedArrayPrototype%": [
                    "Uint8ClampedArray",
                    "prototype"
                ],
                "%Uint16ArrayPrototype%": [
                    "Uint16Array",
                    "prototype"
                ],
                "%Uint32ArrayPrototype%": [
                    "Uint32Array",
                    "prototype"
                ],
                "%URIErrorPrototype%": [
                    "URIError",
                    "prototype"
                ],
                "%WeakMapPrototype%": [
                    "WeakMap",
                    "prototype"
                ],
                "%WeakSetPrototype%": [
                    "WeakSet",
                    "prototype"
                ]
            };
            var j = t(212);
            var w = t(270);
            var P = j.call(Function.call, Array.prototype.concat);
            var B = j.call(Function.apply, Array.prototype.splice);
            var E = j.call(Function.call, String.prototype.replace);
            var x = j.call(Function.call, String.prototype.slice);
            var T = j.call(Function.call, RegExp.prototype.exec);
            var I = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var k = /\\(\\)?/g;
            var F = function stringToPath(r) {
                var e = x(r, 0, 1);
                var t = x(r, -1);
                if (e === "%" && t !== "%") {
                    throw new u("invalid intrinsic syntax, expected closing `%`");
                } else if (t === "%" && e !== "%") {
                    throw new u("invalid intrinsic syntax, expected opening `%`");
                }
                var n = [];
                E(r, I, function(r, e, t, o) {
                    n[n.length] = t ? E(o, k, "$1") : e || r;
                });
                return n;
            };
            var U = function getBaseIntrinsic(r, e) {
                var t = r;
                var n;
                if (w(O, t)) {
                    n = O[t];
                    t = "%" + n[0] + "%";
                }
                if (w(S, t)) {
                    var o = S[t];
                    if (o === d) {
                        o = h(t);
                    }
                    if (typeof o === "undefined" && !e) {
                        throw new s("intrinsic " + r + " exists, but is not available. Please file an issue!");
                    }
                    return {
                        alias: n,
                        name: t,
                        value: o
                    };
                }
                throw new u("intrinsic " + r + " does not exist!");
            };
            r.exports = function GetIntrinsic(r, e) {
                if (typeof r !== "string" || r.length === 0) {
                    throw new s("intrinsic name must be a non-empty string");
                }
                if (arguments.length > 1 && typeof e !== "boolean") {
                    throw new s('"allowMissing" argument must be a boolean');
                }
                if (T(/^%?[^%]*%?$/, r) === null) {
                    throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                }
                var t = F(r);
                var o = t.length > 0 ? t[0] : "";
                var i = U("%" + o + "%", e);
                var a = i.name;
                var f = i.value;
                var c = false;
                var y = i.alias;
                if (y) {
                    o = y[0];
                    B(t, P([
                        0,
                        1
                    ], y));
                }
                for(var l = 1, g = true; l < t.length; l += 1){
                    var v = t[l];
                    var b = x(v, 0, 1);
                    var d = x(v, -1);
                    if ((b === '"' || b === "'" || b === "`" || d === '"' || d === "'" || d === "`") && b !== d) {
                        throw new u("property names with quotes must have matching quotes");
                    }
                    if (v === "constructor" || !g) {
                        c = true;
                    }
                    o += "." + v;
                    a = "%" + o + "%";
                    if (w(S, a)) {
                        f = S[a];
                    } else if (f != null) {
                        if (!(v in f)) {
                            if (!e) {
                                throw new s("base intrinsic for " + r + " exists, but the property is not available.");
                            }
                            return void n;
                        }
                        if (p && l + 1 >= t.length) {
                            var m = p(f, v);
                            g = !!m;
                            if (g && "get" in m && !("originalValue" in m.get)) {
                                f = m.get;
                            } else {
                                f = f[v];
                            }
                        } else {
                            g = w(f, v);
                            f = f[v];
                        }
                        if (g && !c) {
                            S[a] = f;
                        }
                    }
                }
                return f;
            };
        },
        14: function(r) {
            "use strict";
            var e = {
                __proto__: null,
                foo: {}
            };
            var t = Object;
            r.exports = function hasProto() {
                return ({
                    __proto__: e
                }).foo === e.foo && !(e instanceof t);
            };
        },
        942: function(r, e, t) {
            "use strict";
            var n = typeof Symbol !== "undefined" && Symbol;
            var o = t(773);
            r.exports = function hasNativeSymbols() {
                if (typeof n !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof n("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return o();
            };
        },
        773: function(r) {
            "use strict";
            r.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var r = {};
                var e = Symbol("test");
                var t = Object(e);
                if (typeof e === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(e) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                var n = 42;
                r[e] = n;
                for(e in r){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(r).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(r).length !== 0) {
                    return false;
                }
                var o = Object.getOwnPropertySymbols(r);
                if (o.length !== 1 || o[0] !== e) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(r, e)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    if (i.value !== n || i.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        115: function(r, e, t) {
            "use strict";
            var n = typeof Symbol !== "undefined" && Symbol;
            var o = t(832);
            r.exports = function hasNativeSymbols() {
                if (typeof n !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof n("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return o();
            };
        },
        832: function(r) {
            "use strict";
            r.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var r = {};
                var e = Symbol("test");
                var t = Object(e);
                if (typeof e === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(e) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                var n = 42;
                r[e] = n;
                for(e in r){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(r).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(r).length !== 0) {
                    return false;
                }
                var o = Object.getOwnPropertySymbols(r);
                if (o.length !== 1 || o[0] !== e) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(r, e)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    if (i.value !== n || i.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        270: function(r, e, t) {
            "use strict";
            var n = Function.prototype.call;
            var o = Object.prototype.hasOwnProperty;
            var i = t(212);
            r.exports = i.call(n, o);
        },
        782: function(r) {
            if (typeof Object.create === "function") {
                r.exports = function inherits(r, e) {
                    if (e) {
                        r.super_ = e;
                        r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                    }
                };
            } else {
                r.exports = function inherits(r, e) {
                    if (e) {
                        r.super_ = e;
                        var TempCtor = function() {};
                        TempCtor.prototype = e.prototype;
                        r.prototype = new TempCtor;
                        r.prototype.constructor = r;
                    }
                };
            }
        },
        157: function(r) {
            "use strict";
            var e = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var t = Object.prototype.toString;
            var n = function isArguments(r) {
                if (e && r && typeof r === "object" && Symbol.toStringTag in r) {
                    return false;
                }
                return t.call(r) === "[object Arguments]";
            };
            var o = function isArguments(r) {
                if (n(r)) {
                    return true;
                }
                return r !== null && typeof r === "object" && typeof r.length === "number" && r.length >= 0 && t.call(r) !== "[object Array]" && t.call(r.callee) === "[object Function]";
            };
            var i = function() {
                return n(arguments);
            }();
            n.isLegacyArguments = o;
            r.exports = i ? n : o;
        },
        391: function(r) {
            "use strict";
            var e = Object.prototype.toString;
            var t = Function.prototype.toString;
            var n = /^\s*(?:function)?\*/;
            var o = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var i = Object.getPrototypeOf;
            var getGeneratorFunc = function() {
                if (!o) {
                    return false;
                }
                try {
                    return Function("return function*() {}")();
                } catch (r) {}
            };
            var a = getGeneratorFunc();
            var f = a ? i(a) : {};
            r.exports = function isGeneratorFunction(r) {
                if (typeof r !== "function") {
                    return false;
                }
                if (n.test(t.call(r))) {
                    return true;
                }
                if (!o) {
                    var a = e.call(r);
                    return a === "[object GeneratorFunction]";
                }
                return i(r) === f;
            };
        },
        994: function(r, e, t) {
            "use strict";
            var n = t(144);
            var o = t(349);
            var i = t(256);
            var a = i("Object.prototype.toString");
            var f = t(942)();
            var u = f && typeof Symbol.toStringTag === "symbol";
            var s = o();
            var c = i("Array.prototype.indexOf", true) || function indexOf(r, e) {
                for(var t = 0; t < r.length; t += 1){
                    if (r[t] === e) {
                        return t;
                    }
                }
                return -1;
            };
            var y = i("String.prototype.slice");
            var p = {};
            var l = t(24);
            var g = Object.getPrototypeOf;
            if (u && l && g) {
                n(s, function(r) {
                    var e = new global[r];
                    if (!(Symbol.toStringTag in e)) {
                        throw new EvalError("this engine has support for Symbol.toStringTag, but " + r + " does not have the property! Please report this.");
                    }
                    var t = g(e);
                    var n = l(t, Symbol.toStringTag);
                    if (!n) {
                        var o = g(t);
                        n = l(o, Symbol.toStringTag);
                    }
                    p[r] = n.get;
                });
            }
            var v = function tryAllTypedArrays(r) {
                var e = false;
                n(p, function(t, n) {
                    if (!e) {
                        try {
                            e = t.call(r) === n;
                        } catch (r) {}
                    }
                });
                return e;
            };
            r.exports = function isTypedArray(r) {
                if (!r || typeof r !== "object") {
                    return false;
                }
                if (!u) {
                    var e = y(a(r), 8, -1);
                    return c(s, e) > -1;
                }
                if (!l) {
                    return false;
                }
                return v(r);
            };
        },
        369: function(r) {
            r.exports = function isBuffer(r) {
                return r instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"];
            };
        },
        584: function(r, e, t) {
            "use strict";
            var n = t(157);
            var o = t(391);
            var i = t(490);
            var a = t(994);
            function uncurryThis(r) {
                return r.call.bind(r);
            }
            var f = typeof BigInt !== "undefined";
            var u = typeof Symbol !== "undefined";
            var s = uncurryThis(Object.prototype.toString);
            var c = uncurryThis(Number.prototype.valueOf);
            var y = uncurryThis(String.prototype.valueOf);
            var p = uncurryThis(Boolean.prototype.valueOf);
            if (f) {
                var l = uncurryThis(BigInt.prototype.valueOf);
            }
            if (u) {
                var g = uncurryThis(Symbol.prototype.valueOf);
            }
            function checkBoxedPrimitive(r, e) {
                if (typeof r !== "object") {
                    return false;
                }
                try {
                    e(r);
                    return true;
                } catch (r) {
                    return false;
                }
            }
            e.isArgumentsObject = n;
            e.isGeneratorFunction = o;
            e.isTypedArray = a;
            function isPromise(r) {
                return typeof Promise !== "undefined" && r instanceof Promise || r !== null && typeof r === "object" && typeof r.then === "function" && typeof r.catch === "function";
            }
            e.isPromise = isPromise;
            function isArrayBufferView(r) {
                if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
                    return ArrayBuffer.isView(r);
                }
                return a(r) || isDataView(r);
            }
            e.isArrayBufferView = isArrayBufferView;
            function isUint8Array(r) {
                return i(r) === "Uint8Array";
            }
            e.isUint8Array = isUint8Array;
            function isUint8ClampedArray(r) {
                return i(r) === "Uint8ClampedArray";
            }
            e.isUint8ClampedArray = isUint8ClampedArray;
            function isUint16Array(r) {
                return i(r) === "Uint16Array";
            }
            e.isUint16Array = isUint16Array;
            function isUint32Array(r) {
                return i(r) === "Uint32Array";
            }
            e.isUint32Array = isUint32Array;
            function isInt8Array(r) {
                return i(r) === "Int8Array";
            }
            e.isInt8Array = isInt8Array;
            function isInt16Array(r) {
                return i(r) === "Int16Array";
            }
            e.isInt16Array = isInt16Array;
            function isInt32Array(r) {
                return i(r) === "Int32Array";
            }
            e.isInt32Array = isInt32Array;
            function isFloat32Array(r) {
                return i(r) === "Float32Array";
            }
            e.isFloat32Array = isFloat32Array;
            function isFloat64Array(r) {
                return i(r) === "Float64Array";
            }
            e.isFloat64Array = isFloat64Array;
            function isBigInt64Array(r) {
                return i(r) === "BigInt64Array";
            }
            e.isBigInt64Array = isBigInt64Array;
            function isBigUint64Array(r) {
                return i(r) === "BigUint64Array";
            }
            e.isBigUint64Array = isBigUint64Array;
            function isMapToString(r) {
                return s(r) === "[object Map]";
            }
            isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map);
            function isMap(r) {
                if (typeof Map === "undefined") {
                    return false;
                }
                return isMapToString.working ? isMapToString(r) : r instanceof Map;
            }
            e.isMap = isMap;
            function isSetToString(r) {
                return s(r) === "[object Set]";
            }
            isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set);
            function isSet(r) {
                if (typeof Set === "undefined") {
                    return false;
                }
                return isSetToString.working ? isSetToString(r) : r instanceof Set;
            }
            e.isSet = isSet;
            function isWeakMapToString(r) {
                return s(r) === "[object WeakMap]";
            }
            isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap);
            function isWeakMap(r) {
                if (typeof WeakMap === "undefined") {
                    return false;
                }
                return isWeakMapToString.working ? isWeakMapToString(r) : r instanceof WeakMap;
            }
            e.isWeakMap = isWeakMap;
            function isWeakSetToString(r) {
                return s(r) === "[object WeakSet]";
            }
            isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet);
            function isWeakSet(r) {
                return isWeakSetToString(r);
            }
            e.isWeakSet = isWeakSet;
            function isArrayBufferToString(r) {
                return s(r) === "[object ArrayBuffer]";
            }
            isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer);
            function isArrayBuffer(r) {
                if (typeof ArrayBuffer === "undefined") {
                    return false;
                }
                return isArrayBufferToString.working ? isArrayBufferToString(r) : r instanceof ArrayBuffer;
            }
            e.isArrayBuffer = isArrayBuffer;
            function isDataViewToString(r) {
                return s(r) === "[object DataView]";
            }
            isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
            function isDataView(r) {
                if (typeof DataView === "undefined") {
                    return false;
                }
                return isDataViewToString.working ? isDataViewToString(r) : r instanceof DataView;
            }
            e.isDataView = isDataView;
            var v = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
            function isSharedArrayBufferToString(r) {
                return s(r) === "[object SharedArrayBuffer]";
            }
            function isSharedArrayBuffer(r) {
                if (typeof v === "undefined") {
                    return false;
                }
                if (typeof isSharedArrayBufferToString.working === "undefined") {
                    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new v);
                }
                return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(r) : r instanceof v;
            }
            e.isSharedArrayBuffer = isSharedArrayBuffer;
            function isAsyncFunction(r) {
                return s(r) === "[object AsyncFunction]";
            }
            e.isAsyncFunction = isAsyncFunction;
            function isMapIterator(r) {
                return s(r) === "[object Map Iterator]";
            }
            e.isMapIterator = isMapIterator;
            function isSetIterator(r) {
                return s(r) === "[object Set Iterator]";
            }
            e.isSetIterator = isSetIterator;
            function isGeneratorObject(r) {
                return s(r) === "[object Generator]";
            }
            e.isGeneratorObject = isGeneratorObject;
            function isWebAssemblyCompiledModule(r) {
                return s(r) === "[object WebAssembly.Module]";
            }
            e.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
            function isNumberObject(r) {
                return checkBoxedPrimitive(r, c);
            }
            e.isNumberObject = isNumberObject;
            function isStringObject(r) {
                return checkBoxedPrimitive(r, y);
            }
            e.isStringObject = isStringObject;
            function isBooleanObject(r) {
                return checkBoxedPrimitive(r, p);
            }
            e.isBooleanObject = isBooleanObject;
            function isBigIntObject(r) {
                return f && checkBoxedPrimitive(r, l);
            }
            e.isBigIntObject = isBigIntObject;
            function isSymbolObject(r) {
                return u && checkBoxedPrimitive(r, g);
            }
            e.isSymbolObject = isSymbolObject;
            function isBoxedPrimitive(r) {
                return isNumberObject(r) || isStringObject(r) || isBooleanObject(r) || isBigIntObject(r) || isSymbolObject(r);
            }
            e.isBoxedPrimitive = isBoxedPrimitive;
            function isAnyArrayBuffer(r) {
                return typeof Uint8Array !== "undefined" && (isArrayBuffer(r) || isSharedArrayBuffer(r));
            }
            e.isAnyArrayBuffer = isAnyArrayBuffer;
            [
                "isProxy",
                "isExternal",
                "isModuleNamespaceObject"
            ].forEach(function(r) {
                Object.defineProperty(e, r, {
                    enumerable: false,
                    value: function() {
                        throw new Error(r + " is not supported in userland");
                    }
                });
            });
        },
        177: function(r, e, t) {
            var n = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(r) {
                var e = Object.keys(r);
                var t = {};
                for(var n = 0; n < e.length; n++){
                    t[e[n]] = Object.getOwnPropertyDescriptor(r, e[n]);
                }
                return t;
            };
            var o = /%[sdj%]/g;
            e.format = function(r) {
                if (!isString(r)) {
                    var e = [];
                    for(var t = 0; t < arguments.length; t++){
                        e.push(inspect(arguments[t]));
                    }
                    return e.join(" ");
                }
                var t = 1;
                var n = arguments;
                var i = n.length;
                var a = String(r).replace(o, function(r) {
                    if (r === "%%") return "%";
                    if (t >= i) return r;
                    switch(r){
                        case "%s":
                            return String(n[t++]);
                        case "%d":
                            return Number(n[t++]);
                        case "%j":
                            try {
                                return JSON.stringify(n[t++]);
                            } catch (r) {
                                return "[Circular]";
                            }
                        default:
                            return r;
                    }
                });
                for(var f = n[t]; t < i; f = n[++t]){
                    if (isNull(f) || !isObject(f)) {
                        a += " " + f;
                    } else {
                        a += " " + inspect(f);
                    }
                }
                return a;
            };
            e.deprecate = function(r, t) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].noDeprecation === true) {
                    return r;
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
                    return function() {
                        return e.deprecate(r, t).apply(this, arguments);
                    };
                }
                var n = false;
                function deprecated() {
                    if (!n) {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].throwDeprecation) {
                            throw new Error(t);
                        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traceDeprecation) {
                            console.trace(t);
                        } else {
                            console.error(t);
                        }
                        n = true;
                    }
                    return r.apply(this, arguments);
                }
                return deprecated;
            };
            var i = {};
            var a = /^$/;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG) {
                var f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG;
                f = f.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
                a = new RegExp("^" + f + "$", "i");
            }
            e.debuglog = function(r) {
                r = r.toUpperCase();
                if (!i[r]) {
                    if (a.test(r)) {
                        var t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pid;
                        i[r] = function() {
                            var n = e.format.apply(e, arguments);
                            console.error("%s %d: %s", r, t, n);
                        };
                    } else {
                        i[r] = function() {};
                    }
                }
                return i[r];
            };
            function inspect(r, t) {
                var n = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                if (arguments.length >= 3) n.depth = arguments[2];
                if (arguments.length >= 4) n.colors = arguments[3];
                if (isBoolean(t)) {
                    n.showHidden = t;
                } else if (t) {
                    e._extend(n, t);
                }
                if (isUndefined(n.showHidden)) n.showHidden = false;
                if (isUndefined(n.depth)) n.depth = 2;
                if (isUndefined(n.colors)) n.colors = false;
                if (isUndefined(n.customInspect)) n.customInspect = true;
                if (n.colors) n.stylize = stylizeWithColor;
                return formatValue(n, r, n.depth);
            }
            e.inspect = inspect;
            inspect.colors = {
                bold: [
                    1,
                    22
                ],
                italic: [
                    3,
                    23
                ],
                underline: [
                    4,
                    24
                ],
                inverse: [
                    7,
                    27
                ],
                white: [
                    37,
                    39
                ],
                grey: [
                    90,
                    39
                ],
                black: [
                    30,
                    39
                ],
                blue: [
                    34,
                    39
                ],
                cyan: [
                    36,
                    39
                ],
                green: [
                    32,
                    39
                ],
                magenta: [
                    35,
                    39
                ],
                red: [
                    31,
                    39
                ],
                yellow: [
                    33,
                    39
                ]
            };
            inspect.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            function stylizeWithColor(r, e) {
                var t = inspect.styles[e];
                if (t) {
                    return "[" + inspect.colors[t][0] + "m" + r + "[" + inspect.colors[t][1] + "m";
                } else {
                    return r;
                }
            }
            function stylizeNoColor(r, e) {
                return r;
            }
            function arrayToHash(r) {
                var e = {};
                r.forEach(function(r, t) {
                    e[r] = true;
                });
                return e;
            }
            function formatValue(r, t, n) {
                if (r.customInspect && t && isFunction(t.inspect) && t.inspect !== e.inspect && !(t.constructor && t.constructor.prototype === t)) {
                    var o = t.inspect(n, r);
                    if (!isString(o)) {
                        o = formatValue(r, o, n);
                    }
                    return o;
                }
                var i = formatPrimitive(r, t);
                if (i) {
                    return i;
                }
                var a = Object.keys(t);
                var f = arrayToHash(a);
                if (r.showHidden) {
                    a = Object.getOwnPropertyNames(t);
                }
                if (isError(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) {
                    return formatError(t);
                }
                if (a.length === 0) {
                    if (isFunction(t)) {
                        var u = t.name ? ": " + t.name : "";
                        return r.stylize("[Function" + u + "]", "special");
                    }
                    if (isRegExp(t)) {
                        return r.stylize(RegExp.prototype.toString.call(t), "regexp");
                    }
                    if (isDate(t)) {
                        return r.stylize(Date.prototype.toString.call(t), "date");
                    }
                    if (isError(t)) {
                        return formatError(t);
                    }
                }
                var s = "", c = false, y = [
                    "{",
                    "}"
                ];
                if (isArray(t)) {
                    c = true;
                    y = [
                        "[",
                        "]"
                    ];
                }
                if (isFunction(t)) {
                    var p = t.name ? ": " + t.name : "";
                    s = " [Function" + p + "]";
                }
                if (isRegExp(t)) {
                    s = " " + RegExp.prototype.toString.call(t);
                }
                if (isDate(t)) {
                    s = " " + Date.prototype.toUTCString.call(t);
                }
                if (isError(t)) {
                    s = " " + formatError(t);
                }
                if (a.length === 0 && (!c || t.length == 0)) {
                    return y[0] + s + y[1];
                }
                if (n < 0) {
                    if (isRegExp(t)) {
                        return r.stylize(RegExp.prototype.toString.call(t), "regexp");
                    } else {
                        return r.stylize("[Object]", "special");
                    }
                }
                r.seen.push(t);
                var l;
                if (c) {
                    l = formatArray(r, t, n, f, a);
                } else {
                    l = a.map(function(e) {
                        return formatProperty(r, t, n, f, e, c);
                    });
                }
                r.seen.pop();
                return reduceToSingleString(l, s, y);
            }
            function formatPrimitive(r, e) {
                if (isUndefined(e)) return r.stylize("undefined", "undefined");
                if (isString(e)) {
                    var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return r.stylize(t, "string");
                }
                if (isNumber(e)) return r.stylize("" + e, "number");
                if (isBoolean(e)) return r.stylize("" + e, "boolean");
                if (isNull(e)) return r.stylize("null", "null");
            }
            function formatError(r) {
                return "[" + Error.prototype.toString.call(r) + "]";
            }
            function formatArray(r, e, t, n, o) {
                var i = [];
                for(var a = 0, f = e.length; a < f; ++a){
                    if (hasOwnProperty(e, String(a))) {
                        i.push(formatProperty(r, e, t, n, String(a), true));
                    } else {
                        i.push("");
                    }
                }
                o.forEach(function(o) {
                    if (!o.match(/^\d+$/)) {
                        i.push(formatProperty(r, e, t, n, o, true));
                    }
                });
                return i;
            }
            function formatProperty(r, e, t, n, o, i) {
                var a, f, u;
                u = Object.getOwnPropertyDescriptor(e, o) || {
                    value: e[o]
                };
                if (u.get) {
                    if (u.set) {
                        f = r.stylize("[Getter/Setter]", "special");
                    } else {
                        f = r.stylize("[Getter]", "special");
                    }
                } else {
                    if (u.set) {
                        f = r.stylize("[Setter]", "special");
                    }
                }
                if (!hasOwnProperty(n, o)) {
                    a = "[" + o + "]";
                }
                if (!f) {
                    if (r.seen.indexOf(u.value) < 0) {
                        if (isNull(t)) {
                            f = formatValue(r, u.value, null);
                        } else {
                            f = formatValue(r, u.value, t - 1);
                        }
                        if (f.indexOf("\n") > -1) {
                            if (i) {
                                f = f.split("\n").map(function(r) {
                                    return "  " + r;
                                }).join("\n").substr(2);
                            } else {
                                f = "\n" + f.split("\n").map(function(r) {
                                    return "   " + r;
                                }).join("\n");
                            }
                        }
                    } else {
                        f = r.stylize("[Circular]", "special");
                    }
                }
                if (isUndefined(a)) {
                    if (i && o.match(/^\d+$/)) {
                        return f;
                    }
                    a = JSON.stringify("" + o);
                    if (a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                        a = a.substr(1, a.length - 2);
                        a = r.stylize(a, "name");
                    } else {
                        a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                        a = r.stylize(a, "string");
                    }
                }
                return a + ": " + f;
            }
            function reduceToSingleString(r, e, t) {
                var n = 0;
                var o = r.reduce(function(r, e) {
                    n++;
                    if (e.indexOf("\n") >= 0) n++;
                    return r + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0);
                if (o > 60) {
                    return t[0] + (e === "" ? "" : e + "\n ") + " " + r.join(",\n  ") + " " + t[1];
                }
                return t[0] + e + " " + r.join(", ") + " " + t[1];
            }
            e.types = t(584);
            function isArray(r) {
                return Array.isArray(r);
            }
            e.isArray = isArray;
            function isBoolean(r) {
                return typeof r === "boolean";
            }
            e.isBoolean = isBoolean;
            function isNull(r) {
                return r === null;
            }
            e.isNull = isNull;
            function isNullOrUndefined(r) {
                return r == null;
            }
            e.isNullOrUndefined = isNullOrUndefined;
            function isNumber(r) {
                return typeof r === "number";
            }
            e.isNumber = isNumber;
            function isString(r) {
                return typeof r === "string";
            }
            e.isString = isString;
            function isSymbol(r) {
                return typeof r === "symbol";
            }
            e.isSymbol = isSymbol;
            function isUndefined(r) {
                return r === void 0;
            }
            e.isUndefined = isUndefined;
            function isRegExp(r) {
                return isObject(r) && objectToString(r) === "[object RegExp]";
            }
            e.isRegExp = isRegExp;
            e.types.isRegExp = isRegExp;
            function isObject(r) {
                return typeof r === "object" && r !== null;
            }
            e.isObject = isObject;
            function isDate(r) {
                return isObject(r) && objectToString(r) === "[object Date]";
            }
            e.isDate = isDate;
            e.types.isDate = isDate;
            function isError(r) {
                return isObject(r) && (objectToString(r) === "[object Error]" || r instanceof Error);
            }
            e.isError = isError;
            e.types.isNativeError = isError;
            function isFunction(r) {
                return typeof r === "function";
            }
            e.isFunction = isFunction;
            function isPrimitive(r) {
                return r === null || typeof r === "boolean" || typeof r === "number" || typeof r === "string" || typeof r === "symbol" || typeof r === "undefined";
            }
            e.isPrimitive = isPrimitive;
            e.isBuffer = t(369);
            function objectToString(r) {
                return Object.prototype.toString.call(r);
            }
            function pad(r) {
                return r < 10 ? "0" + r.toString(10) : r.toString(10);
            }
            var u = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            function timestamp() {
                var r = new Date;
                var e = [
                    pad(r.getHours()),
                    pad(r.getMinutes()),
                    pad(r.getSeconds())
                ].join(":");
                return [
                    r.getDate(),
                    u[r.getMonth()],
                    e
                ].join(" ");
            }
            e.log = function() {
                console.log("%s - %s", timestamp(), e.format.apply(e, arguments));
            };
            e.inherits = t(782);
            e._extend = function(r, e) {
                if (!e || !isObject(e)) return r;
                var t = Object.keys(e);
                var n = t.length;
                while(n--){
                    r[t[n]] = e[t[n]];
                }
                return r;
            };
            function hasOwnProperty(r, e) {
                return Object.prototype.hasOwnProperty.call(r, e);
            }
            var s = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
            e.promisify = function promisify(r) {
                if (typeof r !== "function") throw new TypeError('The "original" argument must be of type Function');
                if (s && r[s]) {
                    var e = r[s];
                    if (typeof e !== "function") {
                        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    }
                    Object.defineProperty(e, s, {
                        value: e,
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                    return e;
                }
                function e() {
                    var e, t;
                    var n = new Promise(function(r, n) {
                        e = r;
                        t = n;
                    });
                    var o = [];
                    for(var i = 0; i < arguments.length; i++){
                        o.push(arguments[i]);
                    }
                    o.push(function(r, n) {
                        if (r) {
                            t(r);
                        } else {
                            e(n);
                        }
                    });
                    try {
                        r.apply(this, o);
                    } catch (r) {
                        t(r);
                    }
                    return n;
                }
                Object.setPrototypeOf(e, Object.getPrototypeOf(r));
                if (s) Object.defineProperty(e, s, {
                    value: e,
                    enumerable: false,
                    writable: false,
                    configurable: true
                });
                return Object.defineProperties(e, n(r));
            };
            e.promisify.custom = s;
            function callbackifyOnRejected(r, e) {
                if (!r) {
                    var t = new Error("Promise was rejected with a falsy value");
                    t.reason = r;
                    r = t;
                }
                return e(r);
            }
            function callbackify(r) {
                if (typeof r !== "function") {
                    throw new TypeError('The "original" argument must be of type Function');
                }
                function callbackified() {
                    var e = [];
                    for(var t = 0; t < arguments.length; t++){
                        e.push(arguments[t]);
                    }
                    var n = e.pop();
                    if (typeof n !== "function") {
                        throw new TypeError("The last argument must be of type Function");
                    }
                    var o = this;
                    var cb = function() {
                        return n.apply(o, arguments);
                    };
                    r.apply(this, e).then(function(r) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(cb.bind(null, null, r));
                    }, function(r) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callbackifyOnRejected.bind(null, r, cb));
                    });
                }
                Object.setPrototypeOf(callbackified, Object.getPrototypeOf(r));
                Object.defineProperties(callbackified, n(r));
                return callbackified;
            }
            e.callbackify = callbackify;
        },
        490: function(r, e, t) {
            "use strict";
            var n = t(144);
            var o = t(349);
            var i = t(256);
            var a = i("Object.prototype.toString");
            var f = t(942)();
            var u = f && typeof Symbol.toStringTag === "symbol";
            var s = o();
            var c = i("String.prototype.slice");
            var y = {};
            var p = t(24);
            var l = Object.getPrototypeOf;
            if (u && p && l) {
                n(s, function(r) {
                    if (typeof global[r] === "function") {
                        var e = new global[r];
                        if (!(Symbol.toStringTag in e)) {
                            throw new EvalError("this engine has support for Symbol.toStringTag, but " + r + " does not have the property! Please report this.");
                        }
                        var t = l(e);
                        var n = p(t, Symbol.toStringTag);
                        if (!n) {
                            var o = l(t);
                            n = p(o, Symbol.toStringTag);
                        }
                        y[r] = n.get;
                    }
                });
            }
            var g = function tryAllTypedArrays(r) {
                var e = false;
                n(y, function(t, n) {
                    if (!e) {
                        try {
                            var o = t.call(r);
                            if (o === n) {
                                e = o;
                            }
                        } catch (r) {}
                    }
                });
                return e;
            };
            var v = t(994);
            r.exports = function whichTypedArray(r) {
                if (!v(r)) {
                    return false;
                }
                if (!u) {
                    return c(a(r), 8, -1);
                }
                return g(r);
            };
        },
        349: function(r, e, t) {
            "use strict";
            var n = t(992);
            r.exports = function availableTypedArrays() {
                return n([
                    "BigInt64Array",
                    "BigUint64Array",
                    "Float32Array",
                    "Float64Array",
                    "Int16Array",
                    "Int32Array",
                    "Int8Array",
                    "Uint16Array",
                    "Uint32Array",
                    "Uint8Array",
                    "Uint8ClampedArray"
                ], function(r) {
                    return typeof global[r] === "function";
                });
            };
        },
        24: function(r, e, t) {
            "use strict";
            var n = t(192);
            var o = n("%Object.getOwnPropertyDescriptor%", true);
            if (o) {
                try {
                    o([], "length");
                } catch (r) {
                    o = null;
                }
            }
            r.exports = o;
        }
    };
    var e = {};
    function __nccwpck_require__(t) {
        var n = e[t];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[t] = {
            exports: {}
        };
        var i = true;
        try {
            r[t](o, o.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete e[t];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(177);
    module.exports = t;
})();
}}),
"[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/* globals self */ "use strict";
exports.Headers = self.Headers;
exports.Request = self.Request;
exports.Response = self.Response;
exports.fetch = self.fetch; //# sourceMappingURL=whatwg-fetch.js.map
}}),
}]);

//# sourceMappingURL=f07ee_next_dist_42b5bc5e._.js.map