(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/injectedConnector.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript)");
;
;
;
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/injectedConnector.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$injectedConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/injectedConnector.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript) <export I as InjectedConnector>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InjectedConnector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$9bb48f8a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-9bb48f8a.js [app-client] (ecmascript)");
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
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/webwalletConnector.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$getStarknetChainId$2d$7c4b3163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/getStarknetChainId-7c4b3163.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-8edbd361.js [app-client] (ecmascript)");
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/webwalletConnector.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$lastConnected$2d$e9351912$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/lastConnected-e9351912.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$getStarknetChainId$2d$7c4b3163$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/getStarknetChainId-7c4b3163.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-8edbd361.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$webwalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/webwalletConnector.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-8edbd361.js [app-client] (ecmascript) <export W as WebWalletConnector>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WebWalletConnector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknetkit$40$2$2e$10$2e$4_starknet$40$6$2e$24$2e$1_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$starknetkit$2f$dist$2f$index$2d$8edbd361$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknetkit@2.10.4_starknet@6.24.1_typescript@5.8.3_zod@3.24.4/node_modules/starknetkit/dist/index-8edbd361.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=99bf9_starknetkit_dist_37a304c6._.js.map