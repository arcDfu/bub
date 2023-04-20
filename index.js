let _o, Ce, ys, Cs, Aa, $o, Se, Bt, rp, oo, pa, Es, ap, er, Is, me, fa, ga, Gt, Bs, gt, Ms, mt, ma, Sn, ha, Qs, Ss, xn, Lt, Ge, va, ip, sp, xs, ba, kn, tr, wa, lp, K, On, nr, ae, R, S, q, Pe, up, Oe, ht, I, Le, vt, He, Te, G, bt, Qe, Dn, or, Be, ks, pe, cp, QC = (async()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload"))
            return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
            n(o);
        new MutationObserver(o=>{
            for (const r of o)
                if (r.type === "childList")
                    for (const i of r.addedNodes)
                        i.tagName === "LINK" && i.rel === "modulepreload" && n(i)
        }
        ).observe(document, {
            childList: !0,
            subtree: !0
        });
        function t(o) {
            const r = {};
            return o.integrity && (r.integrity = o.integrity),
            o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
            r
        }
        function n(o) {
            if (o.ep)
                return;
            o.ep = !0;
            const r = t(o);
            fetch(o.href, r)
        }
    }
    )();
    function ya(e, t) {
        const n = Object.create(null)
          , o = e.split(",");
        for (let r = 0; r < o.length; r++)
            n[o[r]] = !0;
        return t ? r=>!!n[r.toLowerCase()] : r=>!!n[r]
    }
    or = function e(t) {
        if (se(t)) {
            const n = {};
            for (let o = 0; o < t.length; o++) {
                const r = t[o]
                  , i = Fe(r) ? fp(r) : e(r);
                if (i)
                    for (const s in i)
                        n[s] = i[s]
            }
            return n
        } else if (Fe(t) || ke(t))
            return t
    }
    ;
    const dp = /;(?![^(]*\))/g
      , Ap = /:([^]+)/
      , pp = /\/\*.*?\*\//gs;
    function fp(e) {
        const t = {};
        return e.replace(pp, "").split(dp).forEach(n=>{
            if (n) {
                const o = n.split(Ap);
                o.length > 1 && (t[o[0].trim()] = o[1].trim())
            }
        }
        ),
        t
    }
    Le = function e(t) {
        let n = "";
        if (Fe(t))
            n = t;
        else if (se(t))
            for (let o = 0; o < t.length; o++) {
                const r = e(t[o]);
                r && (n += r + " ")
            }
        else if (ke(t))
            for (const o in t)
                t[o] && (n += o + " ");
        return n.trim()
    }
    ;
    const gp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
      , mp = ya(gp);
    function Os(e) {
        return !!e || e === ""
    }
    let Ca, xe, on, ut, Ds, Ls, ro, rr, ze, ar, Ts, we, se, rn, Ea, Ae, Fe, ir, ke, Ia, Ba, ao, Vs, Ma, sr, io, so, Fs, ct, Rs, an, sn, lo, Ln, uo, co, lr, Us;
    Qe = e=>Fe(e) ? e : e == null ? "" : se(e) || ke(e) && (e.toString === Ba || !Ae(e.toString)) ? JSON.stringify(e, Ca, 2) : String(e),
    Ca = (e,t)=>t && t.__v_isRef ? Ca(e, t.value) : rn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`] = r,
        n), {})
    } : Ea(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : ke(t) && !se(t) && !Ma(t) ? String(t) : t,
    xe = {},
    on = [],
    ut = ()=>{}
    ,
    Ds = ()=>!1,
    Ls = /^on[^a-z]/,
    ro = e=>Ls.test(e),
    rr = e=>e.startsWith("onUpdate:"),
    ze = Object.assign,
    ar = (e,t)=>{
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
    ,
    Ts = Object.prototype.hasOwnProperty,
    we = (e,t)=>Ts.call(e, t),
    se = Array.isArray,
    rn = e=>ao(e) === "[object Map]",
    Ea = e=>ao(e) === "[object Set]",
    Ae = e=>typeof e == "function",
    Fe = e=>typeof e == "string",
    ir = e=>typeof e == "symbol",
    ke = e=>e !== null && typeof e == "object",
    Ia = e=>ke(e) && Ae(e.then) && Ae(e.catch),
    Ba = Object.prototype.toString,
    ao = e=>Ba.call(e),
    Vs = e=>ao(e).slice(8, -1),
    Ma = e=>ao(e) === "[object Object]",
    sr = e=>Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    io = ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    so = e=>{
        const t = Object.create(null);
        return n=>t[n] || (t[n] = e(n))
    }
    ,
    Fs = /-(\w)/g,
    ct = so(e=>e.replace(Fs, (t,n)=>n ? n.toUpperCase() : "")),
    Rs = /\B([A-Z])/g,
    an = so(e=>e.replace(Rs, "-$1").toLowerCase()),
    sn = so(e=>e.charAt(0).toUpperCase() + e.slice(1)),
    lo = so(e=>e ? `on${sn(e)}` : ""),
    Ln = (e,t)=>!Object.is(e, t),
    uo = (e,t)=>{
        for (let n = 0; n < e.length; n++)
            e[n](t)
    }
    ,
    co = (e,t,n)=>{
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    }
    ,
    lr = e=>{
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }
    ,
    Us = e=>{
        const t = Fe(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    }
    ;
    let Gs;
    const hp = ()=>Gs || (Gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let nt;
    class js {
        constructor(t=!1) {
            this.detached = t,
            this._active = !0,
            this.effects = [],
            this.cleanups = [],
            this.parent = nt,
            !t && nt && (this.index = (nt.scopes || (nt.scopes = [])).push(this) - 1)
        }
        get active() {
            return this._active
        }
        run(t) {
            if (this._active) {
                const n = nt;
                try {
                    return nt = this,
                    t()
                } finally {
                    nt = n
                }
            }
        }
        on() {
            nt = this
        }
        off() {
            nt = this.parent
        }
        stop(t) {
            if (this._active) {
                let n, o;
                for (n = 0,
                o = this.effects.length; n < o; n++)
                    this.effects[n].stop();
                for (n = 0,
                o = this.cleanups.length; n < o; n++)
                    this.cleanups[n]();
                if (this.scopes)
                    for (n = 0,
                    o = this.scopes.length; n < o; n++)
                        this.scopes[n].stop(!0);
                if (!this.detached && this.parent && !t) {
                    const r = this.parent.scopes.pop();
                    r && r !== this && (this.parent.scopes[this.index] = r,
                    r.index = this.index)
                }
                this.parent = void 0,
                this._active = !1
            }
        }
    }
    function Ao(e) {
        return new js(e)
    }
    function vp(e, t=nt) {
        t && t.active && t.effects.push(e)
    }
    function Ns() {
        return nt
    }
    function ot(e) {
        nt && nt.cleanups.push(e)
    }
    const Qa = e=>{
        const t = new Set(e);
        return t.w = 0,
        t.n = 0,
        t
    }
      , qs = e=>(e.w & jt) > 0
      , Ys = e=>(e.n & jt) > 0
      , bp = ({deps: e})=>{
        if (e.length)
            for (let t = 0; t < e.length; t++)
                e[t].w |= jt
    }
      , wp = e=>{
        const {deps: t} = e;
        if (t.length) {
            let n = 0;
            for (let o = 0; o < t.length; o++) {
                const r = t[o];
                qs(r) && !Ys(r) ? r.delete(e) : t[n++] = r,
                r.w &= ~jt,
                r.n &= ~jt
            }
            t.length = n
        }
    }
      , ur = new WeakMap;
    let po = 0
      , jt = 1;
    const Sa = 30;
    let wt;
    const ln = Symbol("")
      , xa = Symbol("");
    class ka {
        constructor(t, n=null, o) {
            this.fn = t,
            this.scheduler = n,
            this.active = !0,
            this.deps = [],
            this.parent = void 0,
            vp(this, o)
        }
        run() {
            if (!this.active)
                return this.fn();
            let t = wt
              , n = Nt;
            for (; t; ) {
                if (t === this)
                    return;
                t = t.parent
            }
            try {
                return this.parent = wt,
                wt = this,
                Nt = !0,
                jt = 1 << ++po,
                po <= Sa ? bp(this) : zs(this),
                this.fn()
            } finally {
                po <= Sa && wp(this),
                jt = 1 << --po,
                wt = this.parent,
                Nt = n,
                this.parent = void 0,
                this.deferStop && this.stop()
            }
        }
        stop() {
            wt === this ? this.deferStop = !0 : this.active && (zs(this),
            this.onStop && this.onStop(),
            this.active = !1)
        }
    }
    function zs(e) {
        const {deps: t} = e;
        if (t.length) {
            for (let n = 0; n < t.length; n++)
                t[n].delete(e);
            t.length = 0
        }
    }
    let Nt = !0;
    const Hs = [];
    function Tn() {
        Hs.push(Nt),
        Nt = !1
    }
    function Vn() {
        const e = Hs.pop();
        Nt = e === void 0 ? !0 : e
    }
    function _e(e, t, n) {
        if (Nt && wt) {
            let o = ur.get(e);
            o || ur.set(e, o = new Map);
            let r = o.get(n);
            r || o.set(n, r = Qa()),
            Ks(r)
        }
    }
    function Ks(e, t) {
        let n = !1;
        po <= Sa ? Ys(e) || (e.n |= jt,
        n = !qs(e)) : n = !e.has(wt),
        n && (e.add(wt),
        wt.deps.push(e))
    }
    function Tt(e, t, n, o, r, i) {
        const s = ur.get(e);
        if (!s)
            return;
        let u = [];
        if (t === "clear")
            u = [...s.values()];
        else if (n === "length" && se(e)) {
            const c = Number(o);
            s.forEach((A,p)=>{
                (p === "length" || p >= c) && u.push(A)
            }
            )
        } else
            switch (n !== void 0 && u.push(s.get(n)),
            t) {
            case "add":
                se(e) ? sr(n) && u.push(s.get("length")) : (u.push(s.get(ln)),
                rn(e) && u.push(s.get(xa)));
                break;
            case "delete":
                se(e) || (u.push(s.get(ln)),
                rn(e) && u.push(s.get(xa)));
                break;
            case "set":
                rn(e) && u.push(s.get(ln));
                break
            }
        if (u.length === 1)
            u[0] && Oa(u[0]);
        else {
            const c = [];
            for (const A of u)
                A && c.push(...A);
            Oa(Qa(c))
        }
    }
    function Oa(e, t) {
        const n = se(e) ? e : [...e];
        for (const o of n)
            o.computed && Zs(o);
        for (const o of n)
            o.computed || Zs(o)
    }
    function Zs(e, t) {
        (e !== wt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    function yp(e, t) {
        var n;
        return (n = ur.get(e)) === null || n === void 0 ? void 0 : n.get(t)
    }
    const Cp = ya("__proto__,__v_isRef,__isVue")
      , Ps = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(ir))
      , Ep = Da()
      , Ip = Da(!1, !0)
      , Bp = Da(!0)
      , Ws = Mp();
    function Mp() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
            e[t] = function(...n) {
                const o = ve(this);
                for (let i = 0, s = this.length; i < s; i++)
                    _e(o, "get", i + "");
                const r = o[t](...n);
                return r === -1 || r === !1 ? o[t](...n.map(ve)) : r
            }
        }
        ),
        ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
            e[t] = function(...n) {
                Tn();
                const o = ve(this)[t].apply(this, n);
                return Vn(),
                o
            }
        }
        ),
        e
    }
    function Qp(e) {
        const t = ve(this);
        return _e(t, "has", e),
        t.hasOwnProperty(e)
    }
    function Da(e=!1, t=!1) {
        return function(n, o, r) {
            if (o === "__v_isReactive")
                return !e;
            if (o === "__v_isReadonly")
                return e;
            if (o === "__v_isShallow")
                return t;
            if (o === "__v_raw" && r === (e ? t ? Yp : rl : t ? ol : nl).get(n))
                return n;
            const i = se(n);
            if (!e) {
                if (i && we(Ws, o))
                    return Reflect.get(Ws, o, r);
                if (o === "hasOwnProperty")
                    return Qp
            }
            const s = Reflect.get(n, o, r);
            return (ir(o) ? Ps.has(o) : Cp(o)) || (e || _e(n, "get", o),
            t) ? s : Ce(s) ? i && sr(o) ? s : s.value : ke(s) ? e ? fo(s) : Ve(s) : s
        }
    }
    const Sp = Js()
      , xp = Js(!0);
    function Js(e=!1) {
        return function(t, n, o, r) {
            let i = t[n];
            if (Fn(i) && Ce(i) && !Ce(o))
                return !1;
            if (!e && (!mr(o) && !Fn(o) && (i = ve(i),
            o = ve(o)),
            !se(t) && Ce(i) && !Ce(o)))
                return i.value = o,
                !0;
            const s = se(t) && sr(n) ? Number(n) < t.length : we(t, n)
              , u = Reflect.set(t, n, o, r);
            return t === ve(r) && (s ? Ln(o, i) && Tt(t, "set", n, o) : Tt(t, "add", n, o)),
            u
        }
    }
    function kp(e, t) {
        const n = we(e, t);
        e[t];
        const o = Reflect.deleteProperty(e, t);
        return o && n && Tt(e, "delete", t, void 0),
        o
    }
    function Op(e, t) {
        const n = Reflect.has(e, t);
        return (!ir(t) || !Ps.has(t)) && _e(e, "has", t),
        n
    }
    function Dp(e) {
        return _e(e, "iterate", se(e) ? "length" : ln),
        Reflect.ownKeys(e)
    }
    const Xs = {
        get: Ep,
        set: Sp,
        deleteProperty: kp,
        has: Op,
        ownKeys: Dp
    }
      , Lp = {
        get: Bp,
        set(e, t) {
            return !0
        },
        deleteProperty(e, t) {
            return !0
        }
    }
      , Tp = ze({}, Xs, {
        get: Ip,
        set: xp
    })
      , La = e=>e
      , cr = e=>Reflect.getPrototypeOf(e);
    function dr(e, t, n=!1, o=!1) {
        e = e.__v_raw;
        const r = ve(e)
          , i = ve(t);
        n || (t !== i && _e(r, "get", t),
        _e(r, "get", i));
        const {has: s} = cr(r)
          , u = o ? La : n ? Fa : go;
        if (s.call(r, t))
            return u(e.get(t));
        if (s.call(r, i))
            return u(e.get(i));
        e !== r && e.get(t)
    }
    function Ar(e, t=!1) {
        const n = this.__v_raw
          , o = ve(n)
          , r = ve(e);
        return t || (e !== r && _e(o, "has", e),
        _e(o, "has", r)),
        e === r ? n.has(e) : n.has(e) || n.has(r)
    }
    function pr(e, t=!1) {
        return e = e.__v_raw,
        !t && _e(ve(e), "iterate", ln),
        Reflect.get(e, "size", e)
    }
    function _s(e) {
        e = ve(e);
        const t = ve(this);
        return cr(t).has.call(t, e) || (t.add(e),
        Tt(t, "add", e, e)),
        this
    }
    function $s(e, t) {
        t = ve(t);
        const n = ve(this)
          , {has: o, get: r} = cr(n);
        let i = o.call(n, e);
        i || (e = ve(e),
        i = o.call(n, e));
        const s = r.call(n, e);
        return n.set(e, t),
        i ? Ln(t, s) && Tt(n, "set", e, t) : Tt(n, "add", e, t),
        this
    }
    function el(e) {
        const t = ve(this)
          , {has: n, get: o} = cr(t);
        let r = n.call(t, e);
        r || (e = ve(e),
        r = n.call(t, e)),
        o && o.call(t, e);
        const i = t.delete(e);
        return r && Tt(t, "delete", e, void 0),
        i
    }
    function tl() {
        const e = ve(this)
          , t = e.size !== 0
          , n = e.clear();
        return t && Tt(e, "clear", void 0, void 0),
        n
    }
    function fr(e, t) {
        return function(n, o) {
            const r = this
              , i = r.__v_raw
              , s = ve(i)
              , u = t ? La : e ? Fa : go;
            return !e && _e(s, "iterate", ln),
            i.forEach((c,A)=>n.call(o, u(c), u(A), r))
        }
    }
    function gr(e, t, n) {
        return function(...o) {
            const r = this.__v_raw
              , i = ve(r)
              , s = rn(i)
              , u = e === "entries" || e === Symbol.iterator && s
              , c = e === "keys" && s
              , A = r[e](...o)
              , p = n ? La : t ? Fa : go;
            return !t && _e(i, "iterate", c ? xa : ln),
            {
                next() {
                    const {value: a, done: l} = A.next();
                    return l ? {
                        value: a,
                        done: l
                    } : {
                        value: u ? [p(a[0]), p(a[1])] : p(a),
                        done: l
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }
    function qt(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }
    function Vp() {
        const e = {
            get(r) {
                return dr(this, r)
            },
            get size() {
                return pr(this)
            },
            has: Ar,
            add: _s,
            set: $s,
            delete: el,
            clear: tl,
            forEach: fr(!1, !1)
        }
          , t = {
            get(r) {
                return dr(this, r, !1, !0)
            },
            get size() {
                return pr(this)
            },
            has: Ar,
            add: _s,
            set: $s,
            delete: el,
            clear: tl,
            forEach: fr(!1, !0)
        }
          , n = {
            get(r) {
                return dr(this, r, !0)
            },
            get size() {
                return pr(this, !0)
            },
            has(r) {
                return Ar.call(this, r, !0)
            },
            add: qt("add"),
            set: qt("set"),
            delete: qt("delete"),
            clear: qt("clear"),
            forEach: fr(!0, !1)
        }
          , o = {
            get(r) {
                return dr(this, r, !0, !0)
            },
            get size() {
                return pr(this, !0)
            },
            has(r) {
                return Ar.call(this, r, !0)
            },
            add: qt("add"),
            set: qt("set"),
            delete: qt("delete"),
            clear: qt("clear"),
            forEach: fr(!0, !0)
        };
        return ["keys", "values", "entries", Symbol.iterator].forEach(r=>{
            e[r] = gr(r, !1, !1),
            n[r] = gr(r, !0, !1),
            t[r] = gr(r, !1, !0),
            o[r] = gr(r, !0, !0)
        }
        ),
        [e, n, t, o]
    }
    const [Fp,Rp,Up,Gp] = Vp();
    function Ta(e, t) {
        const n = t ? e ? Gp : Up : e ? Rp : Fp;
        return (o,r,i)=>r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(we(n, r) && r in o ? n : o, r, i)
    }
    const jp = {
        get: Ta(!1, !1)
    }
      , Np = {
        get: Ta(!1, !0)
    }
      , qp = {
        get: Ta(!0, !1)
    }
      , nl = new WeakMap
      , ol = new WeakMap
      , rl = new WeakMap
      , Yp = new WeakMap;
    function zp(e) {
        switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
        }
    }
    function Hp(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : zp(Vs(e))
    }
    function Ve(e) {
        return Fn(e) ? e : Va(e, !1, Xs, jp, nl)
    }
    function Kp(e) {
        return Va(e, !1, Tp, Np, ol)
    }
    function fo(e) {
        return Va(e, !0, Lp, qp, rl)
    }
    function Va(e, t, n, o, r) {
        if (!ke(e) || e.__v_raw && !(t && e.__v_isReactive))
            return e;
        const i = r.get(e);
        if (i)
            return i;
        const s = Hp(e);
        if (s === 0)
            return e;
        const u = new Proxy(e,s === 2 ? o : n);
        return r.set(e, u),
        u
    }
    function Yt(e) {
        return Fn(e) ? Yt(e.__v_raw) : !!(e && e.__v_isReactive)
    }
    function Fn(e) {
        return !!(e && e.__v_isReadonly)
    }
    function mr(e) {
        return !!(e && e.__v_isShallow)
    }
    function al(e) {
        return Yt(e) || Fn(e)
    }
    function ve(e) {
        const t = e && e.__v_raw;
        return t ? ve(t) : e
    }
    function un(e) {
        return co(e, "__v_skip", !0),
        e
    }
    const go = e=>ke(e) ? Ve(e) : e
      , Fa = e=>ke(e) ? fo(e) : e;
    function il(e) {
        Nt && wt && (e = ve(e),
        Ks(e.dep || (e.dep = Qa())))
    }
    function sl(e, t) {
        e = ve(e);
        const n = e.dep;
        n && Oa(n)
    }
    Ce = function(t) {
        return !!(t && t.__v_isRef === !0)
    }
    ,
    G = function(t) {
        return ll(t, !1)
    }
    ;
    function Ra(e) {
        return ll(e, !0)
    }
    function ll(e, t) {
        return Ce(e) ? e : new Zp(e,t)
    }
    class Zp {
        constructor(t, n) {
            this.__v_isShallow = n,
            this.dep = void 0,
            this.__v_isRef = !0,
            this._rawValue = n ? t : ve(t),
            this._value = n ? t : go(t)
        }
        get value() {
            return il(this),
            this._value
        }
        set value(t) {
            const n = this.__v_isShallow || mr(t) || Fn(t);
            t = n ? t : ve(t),
            Ln(t, this._rawValue) && (this._rawValue = t,
            this._value = n ? t : go(t),
            sl(this))
        }
    }
    q = function(t) {
        return Ce(t) ? t.value : t
    }
    ;
    const Pp = {
        get: (e,t,n)=>q(Reflect.get(e, t, n)),
        set: (e,t,n,o)=>{
            const r = e[t];
            return Ce(r) && !Ce(n) ? (r.value = n,
            !0) : Reflect.set(e, t, n, o)
        }
    };
    function ul(e) {
        return Yt(e) ? e : new Proxy(e,Pp)
    }
    function hr(e) {
        const t = se(e) ? new Array(e.length) : {};
        for (const n in e)
            t[n] = dt(e, n);
        return t
    }
    class Wp {
        constructor(t, n, o) {
            this._object = t,
            this._key = n,
            this._defaultValue = o,
            this.__v_isRef = !0
        }
        get value() {
            const t = this._object[this._key];
            return t === void 0 ? this._defaultValue : t
        }
        set value(t) {
            this._object[this._key] = t
        }
        get dep() {
            return yp(ve(this._object), this._key)
        }
    }
    function dt(e, t, n) {
        const o = e[t];
        return Ce(o) ? o : new Wp(e,t,n)
    }
    var cl;
    class Jp {
        constructor(t, n, o, r) {
            this._setter = n,
            this.dep = void 0,
            this.__v_isRef = !0,
            this[cl] = !1,
            this._dirty = !0,
            this.effect = new ka(t,()=>{
                this._dirty || (this._dirty = !0,
                sl(this))
            }
            ),
            this.effect.computed = this,
            this.effect.active = this._cacheable = !r,
            this.__v_isReadonly = o
        }
        get value() {
            const t = ve(this);
            return il(t),
            (t._dirty || !t._cacheable) && (t._dirty = !1,
            t._value = t.effect.run()),
            t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    cl = "__v_isReadonly";
    function Xp(e, t, n=!1) {
        let o, r;
        const i = Ae(e);
        return i ? (o = e,
        r = ut) : (o = e.get,
        r = e.set),
        new Jp(o,r,i || !r,n)
    }
    function zt(e, t, n, o) {
        let r;
        try {
            r = o ? e(...o) : e()
        } catch (i) {
            mo(i, t, n)
        }
        return r
    }
    function At(e, t, n, o) {
        if (Ae(e)) {
            const i = zt(e, t, n, o);
            return i && Ia(i) && i.catch(s=>{
                mo(s, t, n)
            }
            ),
            i
        }
        const r = [];
        for (let i = 0; i < e.length; i++)
            r.push(At(e[i], t, n, o));
        return r
    }
    function mo(e, t, n, o=!0) {
        const r = t ? t.vnode : null;
        if (t) {
            let i = t.parent;
            const s = t.proxy
              , u = n;
            for (; i; ) {
                const A = i.ec;
                if (A) {
                    for (let p = 0; p < A.length; p++)
                        if (A[p](e, s, u) === !1)
                            return
                }
                i = i.parent
            }
            const c = t.appContext.config.errorHandler;
            if (c) {
                zt(c, null, 10, [e, s, u]);
                return
            }
        }
    }
    let ho = !1
      , Ua = !1;
    const Ze = [];
    let Mt = 0;
    const Rn = [];
    let Vt = null
      , cn = 0;
    const dl = Promise.resolve();
    let Ga = null;
    function rt(e) {
        const t = Ga || dl;
        return e ? t.then(this ? e.bind(this) : e) : t
    }
    function _p(e) {
        let t = Mt + 1
          , n = Ze.length;
        for (; t < n; ) {
            const o = t + n >>> 1;
            vo(Ze[o]) < e ? t = o + 1 : n = o
        }
        return t
    }
    function vr(e) {
        (!Ze.length || !Ze.includes(e, ho && e.allowRecurse ? Mt + 1 : Mt)) && (e.id == null ? Ze.push(e) : Ze.splice(_p(e.id), 0, e),
        Al())
    }
    function Al() {
        !ho && !Ua && (Ua = !0,
        Ga = dl.then(gl))
    }
    function $p(e) {
        const t = Ze.indexOf(e);
        t > Mt && Ze.splice(t, 1)
    }
    function ef(e) {
        se(e) ? Rn.push(...e) : (!Vt || !Vt.includes(e, e.allowRecurse ? cn + 1 : cn)) && Rn.push(e),
        Al()
    }
    function pl(e, t=ho ? Mt + 1 : 0) {
        for (; t < Ze.length; t++) {
            const n = Ze[t];
            n && n.pre && (Ze.splice(t, 1),
            t--,
            n())
        }
    }
    function fl(e) {
        if (Rn.length) {
            const t = [...new Set(Rn)];
            if (Rn.length = 0,
            Vt) {
                Vt.push(...t);
                return
            }
            for (Vt = t,
            Vt.sort((n,o)=>vo(n) - vo(o)),
            cn = 0; cn < Vt.length; cn++)
                Vt[cn]();
            Vt = null,
            cn = 0
        }
    }
    const vo = e=>e.id == null ? 1 / 0 : e.id
      , tf = (e,t)=>{
        const n = vo(e) - vo(t);
        if (n === 0) {
            if (e.pre && !t.pre)
                return -1;
            if (t.pre && !e.pre)
                return 1
        }
        return n
    }
    ;
    function gl(e) {
        Ua = !1,
        ho = !0,
        Ze.sort(tf);
        const t = ut;
        try {
            for (Mt = 0; Mt < Ze.length; Mt++) {
                const n = Ze[Mt];
                n && n.active !== !1 && zt(n, null, 14)
            }
        } finally {
            Mt = 0,
            Ze.length = 0,
            fl(),
            ho = !1,
            Ga = null,
            (Ze.length || Rn.length) && gl()
        }
    }
    function nf(e, t, ...n) {
        if (e.isUnmounted)
            return;
        const o = e.vnode.props || xe;
        let r = n;
        const i = t.startsWith("update:")
          , s = i && t.slice(7);
        if (s && s in o) {
            const p = `${s === "modelValue" ? "model" : s}Modifiers`
              , {number: a, trim: l} = o[p] || xe;
            l && (r = n.map(d=>Fe(d) ? d.trim() : d)),
            a && (r = n.map(lr))
        }
        let u, c = o[u = lo(t)] || o[u = lo(ct(t))];
        !c && i && (c = o[u = lo(an(t))]),
        c && At(c, e, 6, r);
        const A = o[u + "Once"];
        if (A) {
            if (!e.emitted)
                e.emitted = {};
            else if (e.emitted[u])
                return;
            e.emitted[u] = !0,
            At(A, e, 6, r)
        }
    }
    function ml(e, t, n=!1) {
        const o = t.emitsCache
          , r = o.get(e);
        if (r !== void 0)
            return r;
        const i = e.emits;
        let s = {}
          , u = !1;
        if (!Ae(e)) {
            const c = A=>{
                const p = ml(A, t, !0);
                p && (u = !0,
                ze(s, p))
            }
            ;
            !n && t.mixins.length && t.mixins.forEach(c),
            e.extends && c(e.extends),
            e.mixins && e.mixins.forEach(c)
        }
        return !i && !u ? (ke(e) && o.set(e, null),
        null) : (se(i) ? i.forEach(c=>s[c] = null) : ze(s, i),
        ke(e) && o.set(e, s),
        s)
    }
    function br(e, t) {
        return !e || !ro(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
        we(e, t[0].toLowerCase() + t.slice(1)) || we(e, an(t)) || we(e, t))
    }
    let Ke = null
      , wr = null;
    function yr(e) {
        const t = Ke;
        return Ke = e,
        wr = e && e.type.__scopeId || null,
        t
    }
    ip = function(t) {
        wr = t
    }
    ,
    sp = function() {
        wr = null
    }
    ,
    Be = function(t, n=Ke, o) {
        if (!n || t._n)
            return t;
        const r = (...i)=>{
            r._d && Kl(-1);
            const s = yr(n);
            let u;
            try {
                u = t(...i)
            } finally {
                yr(s),
                r._d && Kl(1)
            }
            return u
        }
        ;
        return r._n = !0,
        r._c = !0,
        r._d = !0,
        r
    }
    ;
    function ja(e) {
        const {type: t, vnode: n, proxy: o, withProxy: r, props: i, propsOptions: [s], slots: u, attrs: c, emit: A, render: p, renderCache: a, data: l, setupState: d, ctx: f, inheritAttrs: m} = e;
        let v, g;
        const h = yr(e);
        try {
            if (n.shapeFlag & 4) {
                const E = r || o;
                v = xt(p.call(E, E, a, i, d, l, f)),
                g = c
            } else {
                const E = t;
                v = xt(E.length > 1 ? E(i, {
                    attrs: c,
                    slots: u,
                    emit: A
                }) : E(i, null)),
                g = t.props ? c : of(c)
            }
        } catch (E) {
            Gn.length = 0,
            mo(E, e, 1),
            v = S(at)
        }
        let b = v;
        if (g && m !== !1) {
            const E = Object.keys(g)
              , {shapeFlag: T} = b;
            E.length && T & 7 && (s && E.some(rr) && (g = rf(g, s)),
            b = St(b, g))
        }
        return n.dirs && (b = St(b),
        b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs),
        n.transition && (b.transition = n.transition),
        v = b,
        yr(h),
        v
    }
    const of = e=>{
        let t;
        for (const n in e)
            (n === "class" || n === "style" || ro(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    }
      , rf = (e,t)=>{
        const n = {};
        for (const o in e)
            (!rr(o) || !(o.slice(9)in t)) && (n[o] = e[o]);
        return n
    }
    ;
    function af(e, t, n) {
        const {props: o, children: r, component: i} = e
          , {props: s, children: u, patchFlag: c} = t
          , A = i.emitsOptions;
        if (t.dirs || t.transition)
            return !0;
        if (n && c >= 0) {
            if (c & 1024)
                return !0;
            if (c & 16)
                return o ? hl(o, s, A) : !!s;
            if (c & 8) {
                const p = t.dynamicProps;
                for (let a = 0; a < p.length; a++) {
                    const l = p[a];
                    if (s[l] !== o[l] && !br(A, l))
                        return !0
                }
            }
        } else
            return (r || u) && (!u || !u.$stable) ? !0 : o === s ? !1 : o ? s ? hl(o, s, A) : !0 : !!s;
        return !1
    }
    function hl(e, t, n) {
        const o = Object.keys(t);
        if (o.length !== Object.keys(e).length)
            return !0;
        for (let r = 0; r < o.length; r++) {
            const i = o[r];
            if (t[i] !== e[i] && !br(n, i))
                return !0
        }
        return !1
    }
    function sf({vnode: e, parent: t}, n) {
        for (; t && t.subTree === e; )
            (e = t.vnode).el = n,
            t = t.parent
    }
    const lf = e=>e.__isSuspense;
    function uf(e, t) {
        t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : ef(e)
    }
    function qe(e, t) {
        if (Re) {
            let n = Re.provides;
            const o = Re.parent && Re.parent.provides;
            o === n && (n = Re.provides = Object.create(o)),
            n[e] = t
        }
    }
    pe = function(t, n, o=!1) {
        const r = Re || Ke;
        if (r) {
            const i = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
            if (i && t in i)
                return i[t];
            if (arguments.length > 1)
                return o && Ae(n) ? n.call(r.proxy) : n
        }
    }
    ;
    function yt(e, t) {
        return Na(e, null, t)
    }
    const Cr = {};
    me = function(t, n, o) {
        return Na(t, n, o)
    }
    ;
    function Na(e, t, {immediate: n, deep: o, flush: r, onTrack: i, onTrigger: s}=xe) {
        const u = Ns() === (Re == null ? void 0 : Re.scope) ? Re : null;
        let c, A = !1, p = !1;
        if (Ce(e) ? (c = ()=>e.value,
        A = mr(e)) : Yt(e) ? (c = ()=>e,
        o = !0) : se(e) ? (p = !0,
        A = e.some(b=>Yt(b) || mr(b)),
        c = ()=>e.map(b=>{
            if (Ce(b))
                return b.value;
            if (Yt(b))
                return dn(b);
            if (Ae(b))
                return zt(b, u, 2)
        }
        )) : Ae(e) ? t ? c = ()=>zt(e, u, 2) : c = ()=>{
            if (!(u && u.isUnmounted))
                return a && a(),
                At(e, u, 3, [l])
        }
        : c = ut,
        t && o) {
            const b = c;
            c = ()=>dn(b())
        }
        let a, l = b=>{
            a = g.onStop = ()=>{
                zt(b, u, 4)
            }
        }
        , d;
        if (Nn)
            if (l = ut,
            t ? n && At(t, u, 3, [c(), p ? [] : void 0, l]) : c(),
            r === "sync") {
                const b = _f();
                d = b.__watcherHandles || (b.__watcherHandles = [])
            } else
                return ut;
        let f = p ? new Array(e.length).fill(Cr) : Cr;
        const m = ()=>{
            if (g.active)
                if (t) {
                    const b = g.run();
                    (o || A || (p ? b.some((E,T)=>Ln(E, f[T])) : Ln(b, f))) && (a && a(),
                    At(t, u, 3, [b, f === Cr ? void 0 : p && f[0] === Cr ? [] : f, l]),
                    f = b)
                } else
                    g.run()
        }
        ;
        m.allowRecurse = !!t;
        let v;
        r === "sync" ? v = m : r === "post" ? v = ()=>$e(m, u && u.suspense) : (m.pre = !0,
        u && (m.id = u.uid),
        v = ()=>vr(m));
        const g = new ka(c,v);
        t ? n ? m() : f = g.run() : r === "post" ? $e(g.run.bind(g), u && u.suspense) : g.run();
        const h = ()=>{
            g.stop(),
            u && u.scope && ar(u.scope.effects, g)
        }
        ;
        return d && d.push(h),
        h
    }
    function cf(e, t, n) {
        const o = this.proxy
          , r = Fe(e) ? e.includes(".") ? vl(o, e) : ()=>o[e] : e.bind(o, o);
        let i;
        Ae(t) ? i = t : (i = t.handler,
        n = t);
        const s = Re;
        jn(this);
        const u = Na(r, i.bind(o), n);
        return s ? jn(s) : hn(),
        u
    }
    function vl(e, t) {
        const n = t.split(".");
        return ()=>{
            let o = e;
            for (let r = 0; r < n.length && o; r++)
                o = o[n[r]];
            return o
        }
    }
    function dn(e, t) {
        if (!ke(e) || e.__v_skip || (t = t || new Set,
        t.has(e)))
            return e;
        if (t.add(e),
        Ce(e))
            dn(e.value, t);
        else if (se(e))
            for (let n = 0; n < e.length; n++)
                dn(e[n], t);
        else if (Ea(e) || rn(e))
            e.forEach(n=>{
                dn(n, t)
            }
            );
        else if (Ma(e))
            for (const n in e)
                dn(e[n], t);
        return e
    }
    function df() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return vt(()=>{
            e.isMounted = !0
        }
        ),
        An(()=>{
            e.isUnmounting = !0
        }
        ),
        e
    }
    const pt = [Function, Array]
      , Af = {
        name: "BaseTransition",
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: pt,
            onEnter: pt,
            onAfterEnter: pt,
            onEnterCancelled: pt,
            onBeforeLeave: pt,
            onLeave: pt,
            onAfterLeave: pt,
            onLeaveCancelled: pt,
            onBeforeAppear: pt,
            onAppear: pt,
            onAfterAppear: pt,
            onAppearCancelled: pt
        },
        setup(e, {slots: t}) {
            const n = kr()
              , o = df();
            let r;
            return ()=>{
                const i = t.default && Cl(t.default(), !0);
                if (!i || !i.length)
                    return;
                let s = i[0];
                if (i.length > 1) {
                    for (const m of i)
                        if (m.type !== at) {
                            s = m;
                            break
                        }
                }
                const u = ve(e)
                  , {mode: c} = u;
                if (o.isLeaving)
                    return Ya(s);
                const A = yl(s);
                if (!A)
                    return Ya(s);
                const p = qa(A, u, o, n);
                za(A, p);
                const a = n.subTree
                  , l = a && yl(a);
                let d = !1;
                const {getTransitionKey: f} = A.type;
                if (f) {
                    const m = f();
                    r === void 0 ? r = m : m !== r && (r = m,
                    d = !0)
                }
                if (l && l.type !== at && (!mn(A, l) || d)) {
                    const m = qa(l, u, o, n);
                    if (za(l, m),
                    c === "out-in")
                        return o.isLeaving = !0,
                        m.afterLeave = ()=>{
                            o.isLeaving = !1,
                            n.update.active !== !1 && n.update()
                        }
                        ,
                        Ya(s);
                    c === "in-out" && A.type !== at && (m.delayLeave = (v,g,h)=>{
                        const b = wl(o, l);
                        b[String(l.key)] = l,
                        v._leaveCb = ()=>{
                            g(),
                            v._leaveCb = void 0,
                            delete p.delayedLeave
                        }
                        ,
                        p.delayedLeave = h
                    }
                    )
                }
                return s
            }
        }
    }
      , bl = Af;
    function wl(e, t) {
        const {leavingVNodes: n} = e;
        let o = n.get(t.type);
        return o || (o = Object.create(null),
        n.set(t.type, o)),
        o
    }
    function qa(e, t, n, o) {
        const {appear: r, mode: i, persisted: s=!1, onBeforeEnter: u, onEnter: c, onAfterEnter: A, onEnterCancelled: p, onBeforeLeave: a, onLeave: l, onAfterLeave: d, onLeaveCancelled: f, onBeforeAppear: m, onAppear: v, onAfterAppear: g, onAppearCancelled: h} = t
          , b = String(e.key)
          , E = wl(n, e)
          , T = (C,x)=>{
            C && At(C, o, 9, x)
        }
          , B = (C,x)=>{
            const V = x[1];
            T(C, x),
            se(C) ? C.every(D=>D.length <= 1) && V() : C.length <= 1 && V()
        }
          , Q = {
            mode: i,
            persisted: s,
            beforeEnter(C) {
                let x = u;
                if (!n.isMounted)
                    if (r)
                        x = m || u;
                    else
                        return;
                C._leaveCb && C._leaveCb(!0);
                const V = E[b];
                V && mn(e, V) && V.el._leaveCb && V.el._leaveCb(),
                T(x, [C])
            },
            enter(C) {
                let x = c
                  , V = A
                  , D = p;
                if (!n.isMounted)
                    if (r)
                        x = v || c,
                        V = g || A,
                        D = h || p;
                    else
                        return;
                let O = !1;
                const Z = C._enterCb = ne=>{
                    O || (O = !0,
                    ne ? T(D, [C]) : T(V, [C]),
                    Q.delayedLeave && Q.delayedLeave(),
                    C._enterCb = void 0)
                }
                ;
                x ? B(x, [C, Z]) : Z()
            },
            leave(C, x) {
                const V = String(e.key);
                if (C._enterCb && C._enterCb(!0),
                n.isUnmounting)
                    return x();
                T(a, [C]);
                let D = !1;
                const O = C._leaveCb = Z=>{
                    D || (D = !0,
                    x(),
                    Z ? T(f, [C]) : T(d, [C]),
                    C._leaveCb = void 0,
                    E[V] === e && delete E[V])
                }
                ;
                E[V] = e,
                l ? B(l, [C, O]) : O()
            },
            clone(C) {
                return qa(C, t, n, o)
            }
        };
        return Q
    }
    function Ya(e) {
        if (wo(e))
            return e = St(e),
            e.children = null,
            e
    }
    function yl(e) {
        return wo(e) ? e.children ? e.children[0] : void 0 : e
    }
    function za(e, t) {
        e.shapeFlag & 6 && e.component ? za(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
        e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }
    function Cl(e, t=!1, n) {
        let o = []
          , r = 0;
        for (let i = 0; i < e.length; i++) {
            let s = e[i];
            const u = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
            s.type === Se ? (s.patchFlag & 128 && r++,
            o = o.concat(Cl(s.children, t, u))) : (t || s.type !== at) && o.push(u != null ? St(s, {
                key: u
            }) : s)
        }
        if (r > 1)
            for (let i = 0; i < o.length; i++)
                o[i].patchFlag = -2;
        return o
    }
    Lt = function(t) {
        return Ae(t) ? {
            setup: t,
            name: t.name
        } : t
    }
    ;
    const bo = e=>!!e.type.__asyncLoader;
    function pf(e) {
        Ae(e) && (e = {
            loader: e
        });
        const {loader: t, loadingComponent: n, errorComponent: o, delay: r=200, timeout: i, suspensible: s=!0, onError: u} = e;
        let c = null, A, p = 0;
        const a = ()=>(p++,
        c = null,
        l())
          , l = ()=>{
            let d;
            return c || (d = c = t().catch(f=>{
                if (f = f instanceof Error ? f : new Error(String(f)),
                u)
                    return new Promise((m,v)=>{
                        u(f, ()=>m(a()), ()=>v(f), p + 1)
                    }
                    );
                throw f
            }
            ).then(f=>d !== c && c ? c : (f && (f.__esModule || f[Symbol.toStringTag] === "Module") && (f = f.default),
            A = f,
            f)))
        }
        ;
        return Lt({
            name: "AsyncComponentWrapper",
            __asyncLoader: l,
            get __asyncResolved() {
                return A
            },
            setup() {
                const d = Re;
                if (A)
                    return ()=>Ha(A, d);
                const f = h=>{
                    c = null,
                    mo(h, d, 13, !o)
                }
                ;
                if (s && d.suspense || Nn)
                    return l().then(h=>()=>Ha(h, d)).catch(h=>(f(h),
                    ()=>o ? S(o, {
                        error: h
                    }) : null));
                const m = G(!1)
                  , v = G()
                  , g = G(!!r);
                return r && setTimeout(()=>{
                    g.value = !1
                }
                , r),
                i != null && setTimeout(()=>{
                    if (!m.value && !v.value) {
                        const h = new Error(`Async component timed out after ${i}ms.`);
                        f(h),
                        v.value = h
                    }
                }
                , i),
                l().then(()=>{
                    m.value = !0,
                    d.parent && wo(d.parent.vnode) && vr(d.parent.update)
                }
                ).catch(h=>{
                    f(h),
                    v.value = h
                }
                ),
                ()=>{
                    if (m.value && A)
                        return Ha(A, d);
                    if (v.value && o)
                        return S(o, {
                            error: v.value
                        });
                    if (n && !g.value)
                        return S(n)
                }
            }
        })
    }
    function Ha(e, t) {
        const {ref: n, props: o, children: r, ce: i} = t.vnode
          , s = S(e, o, r);
        return s.ref = n,
        s.ce = i,
        delete t.vnode.ce,
        s
    }
    const wo = e=>e.type.__isKeepAlive;
    function ff(e, t) {
        El(e, "a", t)
    }
    function gf(e, t) {
        El(e, "da", t)
    }
    function El(e, t, n=Re) {
        const o = e.__wdc || (e.__wdc = ()=>{
            let r = n;
            for (; r; ) {
                if (r.isDeactivated)
                    return;
                r = r.parent
            }
            return e()
        }
        );
        if (Er(t, o, n),
        n) {
            let r = n.parent;
            for (; r && r.parent; )
                wo(r.parent.vnode) && mf(o, t, n, r),
                r = r.parent
        }
    }
    function mf(e, t, n, o) {
        const r = Er(t, e, o, !0);
        xn(()=>{
            ar(o[t], r)
        }
        , n)
    }
    function Er(e, t, n=Re, o=!1) {
        if (n) {
            const r = n[e] || (n[e] = [])
              , i = t.__weh || (t.__weh = (...s)=>{
                if (n.isUnmounted)
                    return;
                Tn(),
                jn(n);
                const u = At(t, n, e, s);
                return hn(),
                Vn(),
                u
            }
            );
            return o ? r.unshift(i) : r.push(i),
            i
        }
    }
    let Qt, Il, Ir, An, Bl, Ml, Ql;
    Qt = e=>(t,n=Re)=>(!Nn || e === "sp") && Er(e, (...o)=>t(...o), n),
    Aa = Qt("bm"),
    vt = Qt("m"),
    Il = Qt("bu"),
    Ir = Qt("u"),
    An = Qt("bum"),
    xn = Qt("um"),
    Bl = Qt("sp"),
    Ml = Qt("rtg"),
    Ql = Qt("rtc");
    function hf(e, t=Re) {
        Er("ec", e, t)
    }
    Gt = function(t, n) {
        const o = Ke;
        if (o === null)
            return t;
        const r = Or(o) || o.proxy
          , i = t.dirs || (t.dirs = []);
        for (let s = 0; s < n.length; s++) {
            let[u,c,A,p=xe] = n[s];
            u && (Ae(u) && (u = {
                mounted: u,
                updated: u
            }),
            u.deep && dn(c),
            i.push({
                dir: u,
                instance: r,
                value: c,
                oldValue: void 0,
                arg: A,
                modifiers: p
            }))
        }
        return t
    }
    ;
    function pn(e, t, n, o) {
        const r = e.dirs
          , i = t && t.dirs;
        for (let s = 0; s < r.length; s++) {
            const u = r[s];
            i && (u.oldValue = i[s].value);
            let c = u.dir[o];
            c && (Tn(),
            At(c, n, 8, [e.el, u, e, t]),
            Vn())
        }
    }
    const Ka = "components"
      , vf = "directives";
    function Za(e, t) {
        return Ja(Ka, e, !0, t) || e
    }
    const Sl = Symbol();
    function Pa(e) {
        return Fe(e) ? Ja(Ka, e, !1) || e : e || Sl
    }
    function Wa(e) {
        return Ja(vf, e)
    }
    function Ja(e, t, n=!0, o=!1) {
        const r = Ke || Re;
        if (r) {
            const i = r.type;
            if (e === Ka) {
                const u = Wf(i, !1);
                if (u && (u === t || u === ct(t) || u === sn(ct(t))))
                    return i
            }
            const s = xl(r[e] || i[e], t) || xl(r.appContext[e], t);
            return !s && o ? i : s
        }
    }
    function xl(e, t) {
        return e && (e[t] || e[ct(t)] || e[sn(ct(t))])
    }
    ht = function(t, n, o, r) {
        let i;
        const s = o && o[r];
        if (se(t) || Fe(t)) {
            i = new Array(t.length);
            for (let u = 0, c = t.length; u < c; u++)
                i[u] = n(t[u], u, void 0, s && s[u])
        } else if (typeof t == "number") {
            i = new Array(t);
            for (let u = 0; u < t; u++)
                i[u] = n(u + 1, u, void 0, s && s[u])
        } else if (ke(t))
            if (t[Symbol.iterator])
                i = Array.from(t, (u,c)=>n(u, c, void 0, s && s[c]));
            else {
                const u = Object.keys(t);
                i = new Array(u.length);
                for (let c = 0, A = u.length; c < A; c++) {
                    const p = u[c];
                    i[c] = n(t[p], p, c, s && s[c])
                }
            }
        else
            i = [];
        return o && (o[r] = i),
        i
    }
    ,
    cp = function(t, n, o={}, r, i) {
        if (Ke.isCE || Ke.parent && bo(Ke.parent) && Ke.parent.isCE)
            return n !== "default" && (o.name = n),
            S("slot", o, r && r());
        let s = t[n];
        s && s._c && (s._d = !1),
        K();
        const u = s && kl(s(o))
          , c = Te(Se, {
            key: o.key || u && u.key || `_${n}`
        }, u || (r ? r() : []), u && t._ === 1 ? 64 : -2);
        return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
        s && s._c && (s._d = !0),
        c
    }
    ;
    function kl(e) {
        return e.some(t=>Qr(t) ? !(t.type === at || t.type === Se && !kl(t.children)) : !0) ? e : null
    }
    function Xa(e, t) {
        const n = {};
        for (const o in e)
            n[t && /[A-Z]/.test(o) ? `on:${o}` : lo(o)] = e[o];
        return n
    }
    const _a = e=>e ? Wl(e) ? Or(e) || e.proxy : _a(e.parent) : null
      , yo = ze(Object.create(null), {
        $: e=>e,
        $el: e=>e.vnode.el,
        $data: e=>e.data,
        $props: e=>e.props,
        $attrs: e=>e.attrs,
        $slots: e=>e.slots,
        $refs: e=>e.refs,
        $parent: e=>_a(e.parent),
        $root: e=>_a(e.root),
        $emit: e=>e.emit,
        $options: e=>ti(e),
        $forceUpdate: e=>e.f || (e.f = ()=>vr(e.update)),
        $nextTick: e=>e.n || (e.n = rt.bind(e.proxy)),
        $watch: e=>cf.bind(e)
    })
      , $a = (e,t)=>e !== xe && !e.__isScriptSetup && we(e, t)
      , bf = {
        get({_: e}, t) {
            const {ctx: n, setupState: o, data: r, props: i, accessCache: s, type: u, appContext: c} = e;
            let A;
            if (t[0] !== "$") {
                const d = s[t];
                if (d !== void 0)
                    switch (d) {
                    case 1:
                        return o[t];
                    case 2:
                        return r[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                    }
                else {
                    if ($a(o, t))
                        return s[t] = 1,
                        o[t];
                    if (r !== xe && we(r, t))
                        return s[t] = 2,
                        r[t];
                    if ((A = e.propsOptions[0]) && we(A, t))
                        return s[t] = 3,
                        i[t];
                    if (n !== xe && we(n, t))
                        return s[t] = 4,
                        n[t];
                    ei && (s[t] = 0)
                }
            }
            const p = yo[t];
            let a, l;
            if (p)
                return t === "$attrs" && _e(e, "get", t),
                p(e);
            if ((a = u.__cssModules) && (a = a[t]))
                return a;
            if (n !== xe && we(n, t))
                return s[t] = 4,
                n[t];
            if (l = c.config.globalProperties,
            we(l, t))
                return l[t]
        },
        set({_: e}, t, n) {
            const {data: o, setupState: r, ctx: i} = e;
            return $a(r, t) ? (r[t] = n,
            !0) : o !== xe && we(o, t) ? (o[t] = n,
            !0) : we(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (i[t] = n,
            !0)
        },
        has({_: {data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i}}, s) {
            let u;
            return !!n[s] || e !== xe && we(e, s) || $a(t, s) || (u = i[0]) && we(u, s) || we(o, s) || we(yo, s) || we(r.config.globalProperties, s)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : we(n, "value") && this.set(e, t, n.value, null),
            Reflect.defineProperty(e, t, n)
        }
    };
    let ei = !0;
    function wf(e) {
        const t = ti(e)
          , n = e.proxy
          , o = e.ctx;
        ei = !1,
        t.beforeCreate && Ol(t.beforeCreate, e, "bc");
        const {data: r, computed: i, methods: s, watch: u, provide: c, inject: A, created: p, beforeMount: a, mounted: l, beforeUpdate: d, updated: f, activated: m, deactivated: v, beforeDestroy: g, beforeUnmount: h, destroyed: b, unmounted: E, render: T, renderTracked: B, renderTriggered: Q, errorCaptured: C, serverPrefetch: x, expose: V, inheritAttrs: D, components: O, directives: Z, filters: ne} = t;
        if (A && yf(A, o, null, e.appContext.config.unwrapInjectedRef),
        s)
            for (const ie in s) {
                const ee = s[ie];
                Ae(ee) && (o[ie] = ee.bind(n))
            }
        if (r) {
            const ie = r.call(n, n);
            ke(ie) && (e.data = Ve(ie))
        }
        if (ei = !0,
        i)
            for (const ie in i) {
                const ee = i[ie]
                  , _ = Ae(ee) ? ee.bind(n, n) : Ae(ee.get) ? ee.get.bind(n, n) : ut
                  , J = !Ae(ee) && Ae(ee.set) ? ee.set.bind(n) : ut
                  , oe = I({
                    get: _,
                    set: J
                });
                Object.defineProperty(o, ie, {
                    enumerable: !0,
                    configurable: !0,
                    get: ()=>oe.value,
                    set: ue=>oe.value = ue
                })
            }
        if (u)
            for (const ie in u)
                Dl(u[ie], o, n, ie);
        if (c) {
            const ie = Ae(c) ? c.call(n) : c;
            Reflect.ownKeys(ie).forEach(ee=>{
                qe(ee, ie[ee])
            }
            )
        }
        p && Ol(p, e, "c");
        function W(ie, ee) {
            se(ee) ? ee.forEach(_=>ie(_.bind(n))) : ee && ie(ee.bind(n))
        }
        if (W(Aa, a),
        W(vt, l),
        W(Il, d),
        W(Ir, f),
        W(ff, m),
        W(gf, v),
        W(hf, C),
        W(Ql, B),
        W(Ml, Q),
        W(An, h),
        W(xn, E),
        W(Bl, x),
        se(V))
            if (V.length) {
                const ie = e.exposed || (e.exposed = {});
                V.forEach(ee=>{
                    Object.defineProperty(ie, ee, {
                        get: ()=>n[ee],
                        set: _=>n[ee] = _
                    })
                }
                )
            } else
                e.exposed || (e.exposed = {});
        T && e.render === ut && (e.render = T),
        D != null && (e.inheritAttrs = D),
        O && (e.components = O),
        Z && (e.directives = Z)
    }
    function yf(e, t, n=ut, o=!1) {
        se(e) && (e = ni(e));
        for (const r in e) {
            const i = e[r];
            let s;
            ke(i) ? "default"in i ? s = pe(i.from || r, i.default, !0) : s = pe(i.from || r) : s = pe(i),
            Ce(s) && o ? Object.defineProperty(t, r, {
                enumerable: !0,
                configurable: !0,
                get: ()=>s.value,
                set: u=>s.value = u
            }) : t[r] = s
        }
    }
    function Ol(e, t, n) {
        At(se(e) ? e.map(o=>o.bind(t.proxy)) : e.bind(t.proxy), t, n)
    }
    function Dl(e, t, n, o) {
        const r = o.includes(".") ? vl(n, o) : ()=>n[o];
        if (Fe(e)) {
            const i = t[e];
            Ae(i) && me(r, i)
        } else if (Ae(e))
            me(r, e.bind(n));
        else if (ke(e))
            if (se(e))
                e.forEach(i=>Dl(i, t, n, o));
            else {
                const i = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
                Ae(i) && me(r, i, e)
            }
    }
    function ti(e) {
        const t = e.type
          , {mixins: n, extends: o} = t
          , {mixins: r, optionsCache: i, config: {optionMergeStrategies: s}} = e.appContext
          , u = i.get(t);
        let c;
        return u ? c = u : !r.length && !n && !o ? c = t : (c = {},
        r.length && r.forEach(A=>Br(c, A, s, !0)),
        Br(c, t, s)),
        ke(t) && i.set(t, c),
        c
    }
    function Br(e, t, n, o=!1) {
        const {mixins: r, extends: i} = t;
        i && Br(e, i, n, !0),
        r && r.forEach(s=>Br(e, s, n, !0));
        for (const s in t)
            if (!(o && s === "expose")) {
                const u = Cf[s] || n && n[s];
                e[s] = u ? u(e[s], t[s]) : t[s]
            }
        return e
    }
    const Cf = {
        data: Ll,
        props: fn,
        emits: fn,
        methods: fn,
        computed: fn,
        beforeCreate: We,
        created: We,
        beforeMount: We,
        mounted: We,
        beforeUpdate: We,
        updated: We,
        beforeDestroy: We,
        beforeUnmount: We,
        destroyed: We,
        unmounted: We,
        activated: We,
        deactivated: We,
        errorCaptured: We,
        serverPrefetch: We,
        components: fn,
        directives: fn,
        watch: If,
        provide: Ll,
        inject: Ef
    };
    function Ll(e, t) {
        return t ? e ? function() {
            return ze(Ae(e) ? e.call(this, this) : e, Ae(t) ? t.call(this, this) : t)
        }
        : t : e
    }
    function Ef(e, t) {
        return fn(ni(e), ni(t))
    }
    function ni(e) {
        if (se(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++)
                t[e[n]] = e[n];
            return t
        }
        return e
    }
    function We(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }
    function fn(e, t) {
        return e ? ze(ze(Object.create(null), e), t) : t
    }
    function If(e, t) {
        if (!e)
            return t;
        if (!t)
            return e;
        const n = ze(Object.create(null), e);
        for (const o in t)
            n[o] = We(e[o], t[o]);
        return n
    }
    function Bf(e, t, n, o=!1) {
        const r = {}
          , i = {};
        co(i, Sr, 1),
        e.propsDefaults = Object.create(null),
        Tl(e, t, r, i);
        for (const s in e.propsOptions[0])
            s in r || (r[s] = void 0);
        n ? e.props = o ? r : Kp(r) : e.type.props ? e.props = r : e.props = i,
        e.attrs = i
    }
    function Mf(e, t, n, o) {
        const {props: r, attrs: i, vnode: {patchFlag: s}} = e
          , u = ve(r)
          , [c] = e.propsOptions;
        let A = !1;
        if ((o || s > 0) && !(s & 16)) {
            if (s & 8) {
                const p = e.vnode.dynamicProps;
                for (let a = 0; a < p.length; a++) {
                    let l = p[a];
                    if (br(e.emitsOptions, l))
                        continue;
                    const d = t[l];
                    if (c)
                        if (we(i, l))
                            d !== i[l] && (i[l] = d,
                            A = !0);
                        else {
                            const f = ct(l);
                            r[f] = oi(c, u, f, d, e, !1)
                        }
                    else
                        d !== i[l] && (i[l] = d,
                        A = !0)
                }
            }
        } else {
            Tl(e, t, r, i) && (A = !0);
            let p;
            for (const a in u)
                (!t || !we(t, a) && ((p = an(a)) === a || !we(t, p))) && (c ? n && (n[a] !== void 0 || n[p] !== void 0) && (r[a] = oi(c, u, a, void 0, e, !0)) : delete r[a]);
            if (i !== u)
                for (const a in i)
                    (!t || !we(t, a)) && (delete i[a],
                    A = !0)
        }
        A && Tt(e, "set", "$attrs")
    }
    function Tl(e, t, n, o) {
        const [r,i] = e.propsOptions;
        let s = !1, u;
        if (t)
            for (let c in t) {
                if (io(c))
                    continue;
                const A = t[c];
                let p;
                r && we(r, p = ct(c)) ? !i || !i.includes(p) ? n[p] = A : (u || (u = {}))[p] = A : br(e.emitsOptions, c) || (!(c in o) || A !== o[c]) && (o[c] = A,
                s = !0)
            }
        if (i) {
            const c = ve(n)
              , A = u || xe;
            for (let p = 0; p < i.length; p++) {
                const a = i[p];
                n[a] = oi(r, c, a, A[a], e, !we(A, a))
            }
        }
        return s
    }
    function oi(e, t, n, o, r, i) {
        const s = e[n];
        if (s != null) {
            const u = we(s, "default");
            if (u && o === void 0) {
                const c = s.default;
                if (s.type !== Function && Ae(c)) {
                    const {propsDefaults: A} = r;
                    n in A ? o = A[n] : (jn(r),
                    o = A[n] = c.call(null, t),
                    hn())
                } else
                    o = c
            }
            s[0] && (i && !u ? o = !1 : s[1] && (o === "" || o === an(n)) && (o = !0))
        }
        return o
    }
    function Vl(e, t, n=!1) {
        const o = t.propsCache
          , r = o.get(e);
        if (r)
            return r;
        const i = e.props
          , s = {}
          , u = [];
        let c = !1;
        if (!Ae(e)) {
            const p = a=>{
                c = !0;
                const [l,d] = Vl(a, t, !0);
                ze(s, l),
                d && u.push(...d)
            }
            ;
            !n && t.mixins.length && t.mixins.forEach(p),
            e.extends && p(e.extends),
            e.mixins && e.mixins.forEach(p)
        }
        if (!i && !c)
            return ke(e) && o.set(e, on),
            on;
        if (se(i))
            for (let p = 0; p < i.length; p++) {
                const a = ct(i[p]);
                Fl(a) && (s[a] = xe)
            }
        else if (i)
            for (const p in i) {
                const a = ct(p);
                if (Fl(a)) {
                    const l = i[p]
                      , d = s[a] = se(l) || Ae(l) ? {
                        type: l
                    } : Object.assign({}, l);
                    if (d) {
                        const f = Gl(Boolean, d.type)
                          , m = Gl(String, d.type);
                        d[0] = f > -1,
                        d[1] = m < 0 || f < m,
                        (f > -1 || we(d, "default")) && u.push(a)
                    }
                }
            }
        const A = [s, u];
        return ke(e) && o.set(e, A),
        A
    }
    function Fl(e) {
        return e[0] !== "$"
    }
    function Rl(e) {
        const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
        return t ? t[2] : e === null ? "null" : ""
    }
    function Ul(e, t) {
        return Rl(e) === Rl(t)
    }
    function Gl(e, t) {
        return se(t) ? t.findIndex(n=>Ul(n, e)) : Ae(t) && Ul(t, e) ? 0 : -1
    }
    const jl = e=>e[0] === "_" || e === "$stable"
      , ri = e=>se(e) ? e.map(xt) : [xt(e)]
      , Qf = (e,t,n)=>{
        if (t._n)
            return t;
        const o = Be((...r)=>ri(t(...r)), n);
        return o._c = !1,
        o
    }
      , Nl = (e,t,n)=>{
        const o = e._ctx;
        for (const r in e) {
            if (jl(r))
                continue;
            const i = e[r];
            if (Ae(i))
                t[r] = Qf(r, i, o);
            else if (i != null) {
                const s = ri(i);
                t[r] = ()=>s
            }
        }
    }
      , ql = (e,t)=>{
        const n = ri(t);
        e.slots.default = ()=>n
    }
      , Sf = (e,t)=>{
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = ve(t),
            co(t, "_", n)) : Nl(t, e.slots = {})
        } else
            e.slots = {},
            t && ql(e, t);
        co(e.slots, Sr, 1)
    }
      , xf = (e,t,n)=>{
        const {vnode: o, slots: r} = e;
        let i = !0
          , s = xe;
        if (o.shapeFlag & 32) {
            const u = t._;
            u ? n && u === 1 ? i = !1 : (ze(r, t),
            !n && u === 1 && delete r._) : (i = !t.$stable,
            Nl(t, r)),
            s = t
        } else
            t && (ql(e, t),
            s = {
                default: 1
            });
        if (i)
            for (const u in r)
                !jl(u) && !(u in s) && delete r[u]
    }
    ;
    function Yl() {
        return {
            app: null,
            config: {
                isNativeTag: Ds,
                performance: !1,
                globalProperties: {},
                optionMergeStrategies: {},
                errorHandler: void 0,
                warnHandler: void 0,
                compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap,
            propsCache: new WeakMap,
            emitsCache: new WeakMap
        }
    }
    let kf = 0;
    function Of(e, t) {
        return function(n, o=null) {
            Ae(n) || (n = Object.assign({}, n)),
            o != null && !ke(o) && (o = null);
            const r = Yl()
              , i = new Set;
            let s = !1;
            const u = r.app = {
                _uid: kf++,
                _component: n,
                _props: o,
                _container: null,
                _context: r,
                _instance: null,
                version: $f,
                get config() {
                    return r.config
                },
                set config(c) {},
                use(c, ...A) {
                    return i.has(c) || (c && Ae(c.install) ? (i.add(c),
                    c.install(u, ...A)) : Ae(c) && (i.add(c),
                    c(u, ...A))),
                    u
                },
                mixin(c) {
                    return r.mixins.includes(c) || r.mixins.push(c),
                    u
                },
                component(c, A) {
                    return A ? (r.components[c] = A,
                    u) : r.components[c]
                },
                directive(c, A) {
                    return A ? (r.directives[c] = A,
                    u) : r.directives[c]
                },
                mount(c, A, p) {
                    if (!s) {
                        const a = S(n, o);
                        return a.appContext = r,
                        A && t ? t(a, c) : e(a, c, p),
                        s = !0,
                        u._container = c,
                        c.__vue_app__ = u,
                        Or(a.component) || a.component.proxy
                    }
                },
                unmount() {
                    s && (e(null, u._container),
                    delete u._container.__vue_app__)
                },
                provide(c, A) {
                    return r.provides[c] = A,
                    u
                }
            };
            return u
        }
    }
    function ai(e, t, n, o, r=!1) {
        if (se(e)) {
            e.forEach((l,d)=>ai(l, t && (se(t) ? t[d] : t), n, o, r));
            return
        }
        if (bo(o) && !r)
            return;
        const i = o.shapeFlag & 4 ? Or(o.component) || o.component.proxy : o.el
          , s = r ? null : i
          , {i: u, r: c} = e
          , A = t && t.r
          , p = u.refs === xe ? u.refs = {} : u.refs
          , a = u.setupState;
        if (A != null && A !== c && (Fe(A) ? (p[A] = null,
        we(a, A) && (a[A] = null)) : Ce(A) && (A.value = null)),
        Ae(c))
            zt(c, u, 12, [s, p]);
        else {
            const l = Fe(c)
              , d = Ce(c);
            if (l || d) {
                const f = ()=>{
                    if (e.f) {
                        const m = l ? we(a, c) ? a[c] : p[c] : c.value;
                        r ? se(m) && ar(m, i) : se(m) ? m.includes(i) || m.push(i) : l ? (p[c] = [i],
                        we(a, c) && (a[c] = p[c])) : (c.value = [i],
                        e.k && (p[e.k] = c.value))
                    } else
                        l ? (p[c] = s,
                        we(a, c) && (a[c] = s)) : d && (c.value = s,
                        e.k && (p[e.k] = s))
                }
                ;
                s ? (f.id = -1,
                $e(f, n)) : f()
            }
        }
    }
    const $e = uf;
    function Df(e) {
        return Lf(e)
    }
    function Lf(e, t) {
        const n = hp();
        n.__VUE__ = !0;
        const {insert: o, remove: r, patchProp: i, createElement: s, createText: u, createComment: c, setText: A, setElementText: p, parentNode: a, nextSibling: l, setScopeId: d=ut, insertStaticContent: f} = e
          , m = (w,y,M,k=null,F=null,N=null,P=!1,j=null,z=!!y.dynamicChildren)=>{
            if (w === y)
                return;
            w && !mn(w, y) && (k = H(w),
            le(w, F, N, !0),
            w = null),
            y.patchFlag === -2 && (z = !1,
            y.dynamicChildren = null);
            const {type: U, ref: $, shapeFlag: te} = y;
            switch (U) {
            case Un:
                v(w, y, M, k);
                break;
            case at:
                g(w, y, M, k);
                break;
            case Eo:
                w == null && h(y, M, k, P);
                break;
            case Se:
                O(w, y, M, k, F, N, P, j, z);
                break;
            default:
                te & 1 ? T(w, y, M, k, F, N, P, j, z) : te & 6 ? Z(w, y, M, k, F, N, P, j, z) : (te & 64 || te & 128) && U.process(w, y, M, k, F, N, P, j, z, he)
            }
            $ != null && F && ai($, w && w.ref, N, y || w, !y)
        }
          , v = (w,y,M,k)=>{
            if (w == null)
                o(y.el = u(y.children), M, k);
            else {
                const F = y.el = w.el;
                y.children !== w.children && A(F, y.children)
            }
        }
          , g = (w,y,M,k)=>{
            w == null ? o(y.el = c(y.children || ""), M, k) : y.el = w.el
        }
          , h = (w,y,M,k)=>{
            [w.el,w.anchor] = f(w.children, y, M, k, w.el, w.anchor)
        }
          , b = ({el: w, anchor: y},M,k)=>{
            let F;
            for (; w && w !== y; )
                F = l(w),
                o(w, M, k),
                w = F;
            o(y, M, k)
        }
          , E = ({el: w, anchor: y})=>{
            let M;
            for (; w && w !== y; )
                M = l(w),
                r(w),
                w = M;
            r(y)
        }
          , T = (w,y,M,k,F,N,P,j,z)=>{
            P = P || y.type === "svg",
            w == null ? B(y, M, k, F, N, P, j, z) : x(w, y, F, N, P, j, z)
        }
          , B = (w,y,M,k,F,N,P,j)=>{
            let z, U;
            const {type: $, props: te, shapeFlag: re, transition: ce, dirs: ge} = w;
            if (z = w.el = s(w.type, N, te && te.is, te),
            re & 8 ? p(z, w.children) : re & 16 && C(w.children, z, null, k, F, N && $ !== "foreignObject", P, j),
            ge && pn(w, null, k, "created"),
            Q(z, w, w.scopeId, P, k),
            te) {
                for (const ye in te)
                    ye !== "value" && !io(ye) && i(z, ye, null, te[ye], N, w.children, k, F, Y);
                "value"in te && i(z, "value", null, te.value),
                (U = te.onVnodeBeforeMount) && kt(U, k, w)
            }
            ge && pn(w, null, k, "beforeMount");
            const De = (!F || F && !F.pendingBranch) && ce && !ce.persisted;
            De && ce.beforeEnter(z),
            o(z, y, M),
            ((U = te && te.onVnodeMounted) || De || ge) && $e(()=>{
                U && kt(U, k, w),
                De && ce.enter(z),
                ge && pn(w, null, k, "mounted")
            }
            , F)
        }
          , Q = (w,y,M,k,F)=>{
            if (M && d(w, M),
            k)
                for (let N = 0; N < k.length; N++)
                    d(w, k[N]);
            if (F) {
                let N = F.subTree;
                if (y === N) {
                    const P = F.vnode;
                    Q(w, P, P.scopeId, P.slotScopeIds, F.parent)
                }
            }
        }
          , C = (w,y,M,k,F,N,P,j,z=0)=>{
            for (let U = z; U < w.length; U++) {
                const $ = w[U] = j ? Ht(w[U]) : xt(w[U]);
                m(null, $, y, M, k, F, N, P, j)
            }
        }
          , x = (w,y,M,k,F,N,P)=>{
            const j = y.el = w.el;
            let {patchFlag: z, dynamicChildren: U, dirs: $} = y;
            z |= w.patchFlag & 16;
            const te = w.props || xe
              , re = y.props || xe;
            let ce;
            M && gn(M, !1),
            (ce = re.onVnodeBeforeUpdate) && kt(ce, M, y, w),
            $ && pn(y, w, M, "beforeUpdate"),
            M && gn(M, !0);
            const ge = F && y.type !== "foreignObject";
            if (U ? V(w.dynamicChildren, U, j, M, k, ge, N) : P || _(w, y, j, null, M, k, ge, N, !1),
            z > 0) {
                if (z & 16)
                    D(j, y, te, re, M, k, F);
                else if (z & 2 && te.class !== re.class && i(j, "class", null, re.class, F),
                z & 4 && i(j, "style", te.style, re.style, F),
                z & 8) {
                    const De = y.dynamicProps;
                    for (let ye = 0; ye < De.length; ye++) {
                        const Ue = De[ye]
                          , lt = te[Ue]
                          , nn = re[Ue];
                        (nn !== lt || Ue === "value") && i(j, Ue, lt, nn, F, w.children, M, k, Y)
                    }
                }
                z & 1 && w.children !== y.children && p(j, y.children)
            } else
                !P && U == null && D(j, y, te, re, M, k, F);
            ((ce = re.onVnodeUpdated) || $) && $e(()=>{
                ce && kt(ce, M, y, w),
                $ && pn(y, w, M, "updated")
            }
            , k)
        }
          , V = (w,y,M,k,F,N,P)=>{
            for (let j = 0; j < y.length; j++) {
                const z = w[j]
                  , U = y[j]
                  , $ = z.el && (z.type === Se || !mn(z, U) || z.shapeFlag & 70) ? a(z.el) : M;
                m(z, U, $, null, k, F, N, P, !0)
            }
        }
          , D = (w,y,M,k,F,N,P)=>{
            if (M !== k) {
                if (M !== xe)
                    for (const j in M)
                        !io(j) && !(j in k) && i(w, j, M[j], null, P, y.children, F, N, Y);
                for (const j in k) {
                    if (io(j))
                        continue;
                    const z = k[j]
                      , U = M[j];
                    z !== U && j !== "value" && i(w, j, U, z, P, y.children, F, N, Y)
                }
                "value"in k && i(w, "value", M.value, k.value)
            }
        }
          , O = (w,y,M,k,F,N,P,j,z)=>{
            const U = y.el = w ? w.el : u("")
              , $ = y.anchor = w ? w.anchor : u("");
            let {patchFlag: te, dynamicChildren: re, slotScopeIds: ce} = y;
            ce && (j = j ? j.concat(ce) : ce),
            w == null ? (o(U, M, k),
            o($, M, k),
            C(y.children, M, $, F, N, P, j, z)) : te > 0 && te & 64 && re && w.dynamicChildren ? (V(w.dynamicChildren, re, M, F, N, P, j),
            (y.key != null || F && y === F.subTree) && ii(w, y, !0)) : _(w, y, M, $, F, N, P, j, z)
        }
          , Z = (w,y,M,k,F,N,P,j,z)=>{
            y.slotScopeIds = j,
            w == null ? y.shapeFlag & 512 ? F.ctx.activate(y, M, k, P, z) : ne(y, M, k, F, N, P, z) : W(w, y, z)
        }
          , ne = (w,y,M,k,F,N,P)=>{
            const j = w.component = zf(w, k, F);
            if (wo(w) && (j.ctx.renderer = he),
            Hf(j),
            j.asyncDep) {
                if (F && F.registerDep(j, ie),
                !w.el) {
                    const z = j.subTree = S(at);
                    g(null, z, y, M)
                }
                return
            }
            ie(j, w, y, M, F, N, P)
        }
          , W = (w,y,M)=>{
            const k = y.component = w.component;
            if (af(w, y, M))
                if (k.asyncDep && !k.asyncResolved) {
                    ee(k, y, M);
                    return
                } else
                    k.next = y,
                    $p(k.update),
                    k.update();
            else
                y.el = w.el,
                k.vnode = y
        }
          , ie = (w,y,M,k,F,N,P)=>{
            const j = ()=>{
                if (w.isMounted) {
                    let {next: $, bu: te, u: re, parent: ce, vnode: ge} = w, De = $, ye;
                    gn(w, !1),
                    $ ? ($.el = ge.el,
                    ee(w, $, P)) : $ = ge,
                    te && uo(te),
                    (ye = $.props && $.props.onVnodeBeforeUpdate) && kt(ye, ce, $, ge),
                    gn(w, !0);
                    const Ue = ja(w)
                      , lt = w.subTree;
                    w.subTree = Ue,
                    m(lt, Ue, a(lt.el), H(lt), w, F, N),
                    $.el = Ue.el,
                    De === null && sf(w, Ue.el),
                    re && $e(re, F),
                    (ye = $.props && $.props.onVnodeUpdated) && $e(()=>kt(ye, ce, $, ge), F)
                } else {
                    let$;
                    const {el: te, props: re} = y
                      , {bm: ce, m: ge, parent: De} = w
                      , ye = bo(y);
                    if (gn(w, !1),
                    ce && uo(ce),
                    !ye && ($ = re && re.onVnodeBeforeMount) && kt($, De, y),
                    gn(w, !0),
                    te && de) {
                        const Ue = ()=>{
                            w.subTree = ja(w),
                            de(te, w.subTree, w, F, null)
                        }
                        ;
                        ye ? y.type.__asyncLoader().then(()=>!w.isUnmounted && Ue()) : Ue()
                    } else {
                        const Ue = w.subTree = ja(w);
                        m(null, Ue, M, k, w, F, N),
                        y.el = Ue.el
                    }
                    if (ge && $e(ge, F),
                    !ye && ($ = re && re.onVnodeMounted)) {
                        const Ue = y;
                        $e(()=>kt($, De, Ue), F)
                    }
                    (y.shapeFlag & 256 || De && bo(De.vnode) && De.vnode.shapeFlag & 256) && w.a && $e(w.a, F),
                    w.isMounted = !0,
                    y = M = k = null
                }
            }
              , z = w.effect = new ka(j,()=>vr(U),w.scope)
              , U = w.update = ()=>z.run();
            U.id = w.uid,
            gn(w, !0),
            U()
        }
          , ee = (w,y,M)=>{
            y.component = w;
            const k = w.vnode.props;
            w.vnode = y,
            w.next = null,
            Mf(w, y.props, k, M),
            xf(w, y.children, M),
            Tn(),
            pl(),
            Vn()
        }
          , _ = (w,y,M,k,F,N,P,j,z=!1)=>{
            const U = w && w.children
              , $ = w ? w.shapeFlag : 0
              , te = y.children
              , {patchFlag: re, shapeFlag: ce} = y;
            if (re > 0) {
                if (re & 128) {
                    oe(U, te, M, k, F, N, P, j, z);
                    return
                } else if (re & 256) {
                    J(U, te, M, k, F, N, P, j, z);
                    return
                }
            }
            ce & 8 ? ($ & 16 && Y(U, F, N),
            te !== U && p(M, te)) : $ & 16 ? ce & 16 ? oe(U, te, M, k, F, N, P, j, z) : Y(U, F, N, !0) : ($ & 8 && p(M, ""),
            ce & 16 && C(te, M, k, F, N, P, j, z))
        }
          , J = (w,y,M,k,F,N,P,j,z)=>{
            w = w || on,
            y = y || on;
            const U = w.length
              , $ = y.length
              , te = Math.min(U, $);
            let re;
            for (re = 0; re < te; re++) {
                const ce = y[re] = z ? Ht(y[re]) : xt(y[re]);
                m(w[re], ce, M, null, F, N, P, j, z)
            }
            U > $ ? Y(w, F, N, !0, !1, te) : C(y, M, k, F, N, P, j, z, te)
        }
          , oe = (w,y,M,k,F,N,P,j,z)=>{
            let U = 0;
            const $ = y.length;
            let te = w.length - 1
              , re = $ - 1;
            for (; U <= te && U <= re; ) {
                const ce = w[U]
                  , ge = y[U] = z ? Ht(y[U]) : xt(y[U]);
                if (mn(ce, ge))
                    m(ce, ge, M, null, F, N, P, j, z);
                else
                    break;
                U++
            }
            for (; U <= te && U <= re; ) {
                const ce = w[te]
                  , ge = y[re] = z ? Ht(y[re]) : xt(y[re]);
                if (mn(ce, ge))
                    m(ce, ge, M, null, F, N, P, j, z);
                else
                    break;
                te--,
                re--
            }
            if (U > te) {
                if (U <= re) {
                    const ce = re + 1
                      , ge = ce < $ ? y[ce].el : k;
                    for (; U <= re; )
                        m(null, y[U] = z ? Ht(y[U]) : xt(y[U]), M, ge, F, N, P, j, z),
                        U++
                }
            } else if (U > re)
                for (; U <= te; )
                    le(w[U], F, N, !0),
                    U++;
            else {
                const ce = U
                  , ge = U
                  , De = new Map;
                for (U = ge; U <= re; U++) {
                    const Xe = y[U] = z ? Ht(y[U]) : xt(y[U]);
                    Xe.key != null && De.set(Xe.key, U)
                }
                let ye, Ue = 0;
                const lt = re - ge + 1;
                let nn = !1
                  , la = 0;
                const It = new Array(lt);
                for (U = 0; U < lt; U++)
                    It[U] = 0;
                for (U = ce; U <= te; U++) {
                    const Xe = w[U];
                    if (Ue >= lt) {
                        le(Xe, F, N, !0);
                        continue
                    }
                    let ft;
                    if (Xe.key != null)
                        ft = De.get(Xe.key);
                    else
                        for (ye = ge; ye <= re; ye++)
                            if (It[ye - ge] === 0 && mn(Xe, y[ye])) {
                                ft = ye;
                                break
                            }
                    ft === void 0 ? le(Xe, F, N, !0) : (It[ft - ge] = U + 1,
                    ft >= la ? la = ft : nn = !0,
                    m(Xe, y[ft], M, null, F, N, P, j, z),
                    Ue++)
                }
                const ua = nn ? Tf(It) : on;
                for (ye = ua.length - 1,
                U = lt - 1; U >= 0; U--) {
                    const Xe = ge + U
                      , ft = y[Xe]
                      , ca = Xe + 1 < $ ? y[Xe + 1].el : k;
                    It[U] === 0 ? m(null, ft, M, ca, F, N, P, j, z) : nn && (ye < 0 || U !== ua[ye] ? ue(ft, M, ca, 2) : ye--)
                }
            }
        }
          , ue = (w,y,M,k,F=null)=>{
            const {el: N, type: P, transition: j, children: z, shapeFlag: U} = w;
            if (U & 6) {
                ue(w.component.subTree, y, M, k);
                return
            }
            if (U & 128) {
                w.suspense.move(y, M, k);
                return
            }
            if (U & 64) {
                P.move(w, y, M, he);
                return
            }
            if (P === Se) {
                o(N, y, M);
                for (let$ = 0; $ < z.length; $++)
                    ue(z[$], y, M, k);
                o(w.anchor, y, M);
                return
            }
            if (P === Eo) {
                b(w, y, M);
                return
            }
            if (k !== 2 && U & 1 && j)
                if (k === 0)
                    j.beforeEnter(N),
                    o(N, y, M),
                    $e(()=>j.enter(N), F);
                else {
                    const {leave: $, delayLeave: te, afterLeave: re} = j
                      , ce = ()=>o(N, y, M)
                      , ge = ()=>{
                        $(N, ()=>{
                            ce(),
                            re && re()
                        }
                        )
                    }
                    ;
                    te ? te(N, ce, ge) : ge()
                }
            else
                o(N, y, M)
        }
          , le = (w,y,M,k=!1,F=!1)=>{
            const {type: N, props: P, ref: j, children: z, dynamicChildren: U, shapeFlag: $, patchFlag: te, dirs: re} = w;
            if (j != null && ai(j, null, M, w, !0),
            $ & 256) {
                y.ctx.deactivate(w);
                return
            }
            const ce = $ & 1 && re
              , ge = !bo(w);
            let De;
            if (ge && (De = P && P.onVnodeBeforeUnmount) && kt(De, y, w),
            $ & 6)
                L(w.component, M, k);
            else {
                if ($ & 128) {
                    w.suspense.unmount(M, k);
                    return
                }
                ce && pn(w, null, y, "beforeUnmount"),
                $ & 64 ? w.type.remove(w, y, M, F, he, k) : U && (N !== Se || te > 0 && te & 64) ? Y(U, y, M, !1, !0) : (N === Se && te & 384 || !F && $ & 16) && Y(z, y, M),
                k && Ne(w)
            }
            (ge && (De = P && P.onVnodeUnmounted) || ce) && $e(()=>{
                De && kt(De, y, w),
                ce && pn(w, null, y, "unmounted")
            }
            , M)
        }
          , Ne = w=>{
            const {type: y, el: M, anchor: k, transition: F} = w;
            if (y === Se) {
                fe(M, k);
                return
            }
            if (y === Eo) {
                E(w);
                return
            }
            const N = ()=>{
                r(M),
                F && !F.persisted && F.afterLeave && F.afterLeave()
            }
            ;
            if (w.shapeFlag & 1 && F && !F.persisted) {
                const {leave: P, delayLeave: j} = F
                  , z = ()=>P(M, N);
                j ? j(w.el, N, z) : z()
            } else
                N()
        }
          , fe = (w,y)=>{
            let M;
            for (; w !== y; )
                M = l(w),
                r(w),
                w = M;
            r(y)
        }
          , L = (w,y,M)=>{
            const {bum: k, scope: F, update: N, subTree: P, um: j} = w;
            k && uo(k),
            F.stop(),
            N && (N.active = !1,
            le(P, w, y, M)),
            j && $e(j, y),
            $e(()=>{
                w.isUnmounted = !0
            }
            , y),
            y && y.pendingBranch && !y.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === y.pendingId && (y.deps--,
            y.deps === 0 && y.resolve())
        }
          , Y = (w,y,M,k=!1,F=!1,N=0)=>{
            for (let P = N; P < w.length; P++)
                le(w[P], y, M, k, F)
        }
          , H = w=>w.shapeFlag & 6 ? H(w.component.subTree) : w.shapeFlag & 128 ? w.suspense.next() : l(w.anchor || w.el)
          , X = (w,y,M)=>{
            w == null ? y._vnode && le(y._vnode, null, null, !0) : m(y._vnode || null, w, y, null, null, null, M),
            pl(),
            fl(),
            y._vnode = w
        }
          , he = {
            p: m,
            um: le,
            m: ue,
            r: Ne,
            mt: ne,
            mc: C,
            pc: _,
            pbc: V,
            n: H,
            o: e
        };
        let Ie, de;
        return t && ([Ie,de] = t(he)),
        {
            render: X,
            hydrate: Ie,
            createApp: Of(X, Ie)
        }
    }
    function gn({effect: e, update: t}, n) {
        e.allowRecurse = t.allowRecurse = n
    }
    function ii(e, t, n=!1) {
        const o = e.children
          , r = t.children;
        if (se(o) && se(r))
            for (let i = 0; i < o.length; i++) {
                const s = o[i];
                let u = r[i];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = r[i] = Ht(r[i]),
                u.el = s.el),
                n || ii(s, u)),
                u.type === Un && (u.el = s.el)
            }
    }
    function Tf(e) {
        const t = e.slice()
          , n = [0];
        let o, r, i, s, u;
        const c = e.length;
        for (o = 0; o < c; o++) {
            const A = e[o];
            if (A !== 0) {
                if (r = n[n.length - 1],
                e[r] < A) {
                    t[o] = r,
                    n.push(o);
                    continue
                }
                for (i = 0,
                s = n.length - 1; i < s; )
                    u = i + s >> 1,
                    e[n[u]] < A ? i = u + 1 : s = u;
                A < e[n[i]] && (i > 0 && (t[o] = n[i - 1]),
                n[i] = o)
            }
        }
        for (i = n.length,
        s = n[i - 1]; i-- > 0; )
            n[i] = s,
            s = t[s];
        return n
    }
    const Vf = e=>e.__isTeleport
      , Co = e=>e && (e.disabled || e.disabled === "")
      , zl = e=>typeof SVGElement < "u" && e instanceof SVGElement
      , si = (e,t)=>{
        const n = e && e.to;
        return Fe(n) ? t ? t(n) : null : n
    }
      , Ff = {
        __isTeleport: !0,
        process(e, t, n, o, r, i, s, u, c, A) {
            const {mc: p, pc: a, pbc: l, o: {insert: d, querySelector: f, createText: m, createComment: v}} = A
              , g = Co(t.props);
            let {shapeFlag: h, children: b, dynamicChildren: E} = t;
            if (e == null) {
                const T = t.el = m("")
                  , B = t.anchor = m("");
                d(T, n, o),
                d(B, n, o);
                const Q = t.target = si(t.props, f)
                  , C = t.targetAnchor = m("");
                Q && (d(C, Q),
                s = s || zl(Q));
                const x = (V,D)=>{
                    h & 16 && p(b, V, D, r, i, s, u, c)
                }
                ;
                g ? x(n, B) : Q && x(Q, C)
            } else {
                t.el = e.el;
                const T = t.anchor = e.anchor
                  , B = t.target = e.target
                  , Q = t.targetAnchor = e.targetAnchor
                  , C = Co(e.props)
                  , x = C ? n : B
                  , V = C ? T : Q;
                if (s = s || zl(B),
                E ? (l(e.dynamicChildren, E, x, r, i, s, u),
                ii(e, t, !0)) : c || a(e, t, x, V, r, i, s, u, !1),
                g)
                    C || Mr(t, n, T, A, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const D = t.target = si(t.props, f);
                    D && Mr(t, D, null, A, 0)
                } else
                    C && Mr(t, B, Q, A, 1)
            }
            Hl(t)
        },
        remove(e, t, n, o, {um: r, o: {remove: i}}, s) {
            const {shapeFlag: u, children: c, anchor: A, targetAnchor: p, target: a, props: l} = e;
            if (a && i(p),
            (s || !Co(l)) && (i(A),
            u & 16))
                for (let d = 0; d < c.length; d++) {
                    const f = c[d];
                    r(f, t, n, !0, !!f.dynamicChildren)
                }
        },
        move: Mr,
        hydrate: Rf
    };
    function Mr(e, t, n, {o: {insert: o}, m: r}, i=2) {
        i === 0 && o(e.targetAnchor, t, n);
        const {el: s, anchor: u, shapeFlag: c, children: A, props: p} = e
          , a = i === 2;
        if (a && o(s, t, n),
        (!a || Co(p)) && c & 16)
            for (let l = 0; l < A.length; l++)
                r(A[l], t, n, 2);
        a && o(u, t, n)
    }
    function Rf(e, t, n, o, r, i, {o: {nextSibling: s, parentNode: u, querySelector: c}}, A) {
        const p = t.target = si(t.props, c);
        if (p) {
            const a = p._lpa || p.firstChild;
            if (t.shapeFlag & 16)
                if (Co(t.props))
                    t.anchor = A(s(e), t, u(e), n, o, r, i),
                    t.targetAnchor = a;
                else {
                    t.anchor = s(e);
                    let l = a;
                    for (; l; )
                        if (l = s(l),
                        l && l.nodeType === 8 && l.data === "teleport anchor") {
                            t.targetAnchor = l,
                            p._lpa = t.targetAnchor && s(t.targetAnchor);
                            break
                        }
                    A(a, t, p, n, o, r, i)
                }
            Hl(t)
        }
        return t.anchor && s(t.anchor)
    }
    const Uf = Ff;
    function Hl(e) {
        const t = e.ctx;
        if (t && t.ut) {
            let n = e.children[0].el;
            for (; n !== e.targetAnchor; )
                n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
                n = n.nextSibling;
            t.ut()
        }
    }
    let Un, at, Eo, Gn;
    Se = Symbol(void 0),
    Un = Symbol(void 0),
    at = Symbol(void 0),
    Eo = Symbol(void 0),
    Gn = [];
    let Ct = null;
    K = function(t=!1) {
        Gn.push(Ct = t ? null : [])
    }
    ;
    function Gf() {
        Gn.pop(),
        Ct = Gn[Gn.length - 1] || null
    }
    let Io = 1;
    function Kl(e) {
        Io += e
    }
    function Zl(e) {
        return e.dynamicChildren = Io > 0 ? Ct || on : null,
        Gf(),
        Io > 0 && Ct && Ct.push(e),
        e
    }
    ae = function(t, n, o, r, i, s) {
        return Zl(R(t, n, o, r, i, s, !0))
    }
    ,
    Te = function(t, n, o, r, i) {
        return Zl(S(t, n, o, r, i, !0))
    }
    ;
    function Qr(e) {
        return e ? e.__v_isVNode === !0 : !1
    }
    function mn(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Sr = "__vInternal"
      , Pl = ({key: e})=>e ?? null
      , xr = ({ref: e, ref_key: t, ref_for: n})=>e != null ? Fe(e) || Ce(e) || Ae(e) ? {
        i: Ke,
        r: e,
        k: t,
        f: !!n
    } : e : null;
    R = function(t, n=null, o=null, r=0, i=null, s=t === Se ? 0 : 1, u=!1, c=!1) {
        const A = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: t,
            props: n,
            key: n && Pl(n),
            ref: n && xr(n),
            scopeId: wr,
            slotScopeIds: null,
            children: o,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: s,
            patchFlag: r,
            dynamicProps: i,
            dynamicChildren: null,
            appContext: null,
            ctx: Ke
        };
        return c ? (li(A, o),
        s & 128 && t.normalize(A)) : o && (A.shapeFlag |= Fe(o) ? 8 : 16),
        Io > 0 && !u && Ct && (A.patchFlag > 0 || s & 6) && A.patchFlag !== 32 && Ct.push(A),
        A
    }
    ,
    S = jf;
    function jf(e, t=null, n=null, o=0, r=null, i=!1) {
        if ((!e || e === Sl) && (e = at),
        Qr(e)) {
            const u = St(e, t, !0);
            return n && li(u, n),
            Io > 0 && !i && Ct && (u.shapeFlag & 6 ? Ct[Ct.indexOf(e)] = u : Ct.push(u)),
            u.patchFlag |= -2,
            u
        }
        if (Jf(e) && (e = e.__vccOpts),
        t) {
            t = Nf(t);
            let {class: u, style: c} = t;
            u && !Fe(u) && (t.class = Le(u)),
            ke(c) && (al(c) && !se(c) && (c = ze({}, c)),
            t.style = or(c))
        }
        const s = Fe(e) ? 1 : lf(e) ? 128 : Vf(e) ? 64 : ke(e) ? 4 : Ae(e) ? 2 : 0;
        return R(e, t, n, o, r, s, i, !0)
    }
    function Nf(e) {
        return e ? al(e) || Sr in e ? ze({}, e) : e : null
    }
    function St(e, t, n=!1) {
        const {props: o, ref: r, patchFlag: i, children: s} = e
          , u = t ? He(o || {}, t) : o;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && Pl(u),
            ref: t && t.ref ? n && r ? se(r) ? r.concat(xr(t)) : [r, xr(t)] : xr(t) : r,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: s,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Se ? i === -1 ? 16 : i | 16 : i,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && St(e.ssContent),
            ssFallback: e.ssFallback && St(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce
        }
    }
    Pe = function(t=" ", n=0) {
        return S(Un, null, t, n)
    }
    ,
    wa = function(t, n) {
        const o = S(Eo, null, t);
        return o.staticCount = n,
        o
    }
    ,
    Oe = function(t="", n=!1) {
        return n ? (K(),
        Te(at, null, t)) : S(at, null, t)
    }
    ;
    function xt(e) {
        return e == null || typeof e == "boolean" ? S(at) : se(e) ? S(Se, null, e.slice()) : typeof e == "object" ? Ht(e) : S(Un, null, String(e))
    }
    function Ht(e) {
        return e.el === null && e.patchFlag !== -1 || e.memo ? e : St(e)
    }
    function li(e, t) {
        let n = 0;
        const {shapeFlag: o} = e;
        if (t == null)
            t = null;
        else if (se(t))
            n = 16;
        else if (typeof t == "object")
            if (o & 65) {
                const r = t.default;
                r && (r._c && (r._d = !1),
                li(e, r()),
                r._c && (r._d = !0));
                return
            } else {
                n = 32;
                const r = t._;
                !r && !(Sr in t) ? t._ctx = Ke : r === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2,
                e.patchFlag |= 1024))
            }
        else
            Ae(t) ? (t = {
                default: t,
                _ctx: Ke
            },
            n = 32) : (t = String(t),
            o & 64 ? (n = 16,
            t = [Pe(t)]) : n = 8);
        e.children = t,
        e.shapeFlag |= n
    }
    He = function(...t) {
        const n = {};
        for (let o = 0; o < t.length; o++) {
            const r = t[o];
            for (const i in r)
                if (i === "class")
                    n.class !== r.class && (n.class = Le([n.class, r.class]));
                else if (i === "style")
                    n.style = or([n.style, r.style]);
                else if (ro(i)) {
                    const s = n[i]
                      , u = r[i];
                    u && s !== u && !(se(s) && s.includes(u)) && (n[i] = s ? [].concat(s, u) : u)
                } else
                    i !== "" && (n[i] = r[i])
        }
        return n
    }
    ;
    function kt(e, t, n, o=null) {
        At(e, t, 7, [n, o])
    }
    const qf = Yl();
    let Yf = 0;
    function zf(e, t, n) {
        const o = e.type
          , r = (t ? t.appContext : e.appContext) || qf
          , i = {
            uid: Yf++,
            vnode: e,
            type: o,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new js(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Vl(o, r),
            emitsOptions: ml(o, r),
            emit: null,
            emitted: null,
            propsDefaults: xe,
            inheritAttrs: o.inheritAttrs,
            ctx: xe,
            data: xe,
            props: xe,
            attrs: xe,
            slots: xe,
            refs: xe,
            setupState: xe,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
        return i.ctx = {
            _: i
        },
        i.root = t ? t.root : i,
        i.emit = nf.bind(null, i),
        e.ce && e.ce(i),
        i
    }
    let Re = null;
    const kr = ()=>Re || Ke
      , jn = e=>{
        Re = e,
        e.scope.on()
    }
      , hn = ()=>{
        Re && Re.scope.off(),
        Re = null
    }
    ;
    function Wl(e) {
        return e.vnode.shapeFlag & 4
    }
    let Nn = !1;
    function Hf(e, t=!1) {
        Nn = t;
        const {props: n, children: o} = e.vnode
          , r = Wl(e);
        Bf(e, n, r, t),
        Sf(e, o);
        const i = r ? Kf(e, t) : void 0;
        return Nn = !1,
        i
    }
    function Kf(e, t) {
        const n = e.type;
        e.accessCache = Object.create(null),
        e.proxy = un(new Proxy(e.ctx,bf));
        const {setup: o} = n;
        if (o) {
            const r = e.setupContext = o.length > 1 ? Pf(e) : null;
            jn(e),
            Tn();
            const i = zt(o, e, 0, [e.props, r]);
            if (Vn(),
            hn(),
            Ia(i)) {
                if (i.then(hn, hn),
                t)
                    return i.then(s=>{
                        Jl(e, s, t)
                    }
                    ).catch(s=>{
                        mo(s, e, 0)
                    }
                    );
                e.asyncDep = i
            } else
                Jl(e, i, t)
        } else
            _l(e, t)
    }
    function Jl(e, t, n) {
        Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ke(t) && (e.setupState = ul(t)),
        _l(e, n)
    }
    let Xl;
    function _l(e, t, n) {
        const o = e.type;
        if (!e.render) {
            if (!t && Xl && !o.render) {
                const r = o.template || ti(e).template;
                if (r) {
                    const {isCustomElement: i, compilerOptions: s} = e.appContext.config
                      , {delimiters: u, compilerOptions: c} = o
                      , A = ze(ze({
                        isCustomElement: i,
                        delimiters: u
                    }, s), c);
                    o.render = Xl(r, A)
                }
            }
            e.render = o.render || ut
        }
        jn(e),
        Tn(),
        wf(e),
        Vn(),
        hn()
    }
    function Zf(e) {
        return new Proxy(e.attrs,{
            get(t, n) {
                return _e(e, "get", "$attrs"),
                t[n]
            }
        })
    }
    function Pf(e) {
        const t = o=>{
            e.exposed = o || {}
        }
        ;
        let n;
        return {
            get attrs() {
                return n || (n = Zf(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }
    function Or(e) {
        if (e.exposed)
            return e.exposeProxy || (e.exposeProxy = new Proxy(ul(un(e.exposed)),{
                get(t, n) {
                    if (n in t)
                        return t[n];
                    if (n in yo)
                        return yo[n](e)
                },
                has(t, n) {
                    return n in t || n in yo
                }
            }))
    }
    function Wf(e, t=!0) {
        return Ae(e) ? e.displayName || e.name : e.name || t && e.__name
    }
    function Jf(e) {
        return Ae(e) && "__vccOpts"in e
    }
    I = (e,t)=>Xp(e, t, Nn),
    Ge = function(t, n, o) {
        const r = arguments.length;
        return r === 2 ? ke(n) && !se(n) ? Qr(n) ? S(t, null, [n]) : S(t, n) : S(t, null, n) : (r > 3 ? o = Array.prototype.slice.call(arguments, 2) : r === 3 && Qr(o) && (o = [o]),
        S(t, n, o))
    }
    ;
    const Xf = Symbol("")
      , _f = ()=>pe(Xf)
      , $f = "3.2.47"
      , eg = "http://www.w3.org/2000/svg"
      , vn = typeof document < "u" ? document : null
      , $l = vn && vn.createElement("template")
      , tg = {
        insert: (e,t,n)=>{
            t.insertBefore(e, n || null)
        }
        ,
        remove: e=>{
            const t = e.parentNode;
            t && t.removeChild(e)
        }
        ,
        createElement: (e,t,n,o)=>{
            const r = t ? vn.createElementNS(eg, e) : vn.createElement(e, n ? {
                is: n
            } : void 0);
            return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple),
            r
        }
        ,
        createText: e=>vn.createTextNode(e),
        createComment: e=>vn.createComment(e),
        setText: (e,t)=>{
            e.nodeValue = t
        }
        ,
        setElementText: (e,t)=>{
            e.textContent = t
        }
        ,
        parentNode: e=>e.parentNode,
        nextSibling: e=>e.nextSibling,
        querySelector: e=>vn.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, o, r, i) {
            const s = n ? n.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), n),
                !(r === i || !(r = r.nextSibling)); )
                    ;
            else {
                $l.innerHTML = o ? `<svg>${e}</svg>` : e;
                const u = $l.content;
                if (o) {
                    const c = u.firstChild;
                    for (; c.firstChild; )
                        u.appendChild(c.firstChild);
                    u.removeChild(c)
                }
                t.insertBefore(u, n)
            }
            return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    };
    function ng(e, t, n) {
        const o = e._vtc;
        o && (t = (t ? [t, ...o] : [...o]).join(" ")),
        t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
    }
    function og(e, t, n) {
        const o = e.style
          , r = Fe(n);
        if (n && !r) {
            if (t && !Fe(t))
                for (const i in t)
                    n[i] == null && ui(o, i, "");
            for (const i in n)
                ui(o, i, n[i])
        } else {
            const i = o.display;
            r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"),
            "_vod"in e && (o.display = i)
        }
    }
    const eu = /\s*!important$/;
    function ui(e, t, n) {
        if (se(n))
            n.forEach(o=>ui(e, t, o));
        else if (n == null && (n = ""),
        t.startsWith("--"))
            e.setProperty(t, n);
        else {
            const o = rg(e, t);
            eu.test(n) ? e.setProperty(an(o), n.replace(eu, ""), "important") : e[o] = n
        }
    }
    const tu = ["Webkit", "Moz", "ms"]
      , ci = {};
    function rg(e, t) {
        const n = ci[t];
        if (n)
            return n;
        let o = ct(t);
        if (o !== "filter" && o in e)
            return ci[t] = o;
        o = sn(o);
        for (let r = 0; r < tu.length; r++) {
            const i = tu[r] + o;
            if (i in e)
                return ci[t] = i
        }
        return t
    }
    const nu = "http://www.w3.org/1999/xlink";
    function ag(e, t, n, o, r) {
        if (o && t.startsWith("xlink:"))
            n == null ? e.removeAttributeNS(nu, t.slice(6, t.length)) : e.setAttributeNS(nu, t, n);
        else {
            const i = mp(t);
            n == null || i && !Os(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n)
        }
    }
    function ig(e, t, n, o, r, i, s) {
        if (t === "innerHTML" || t === "textContent") {
            o && s(o, r, i),
            e[t] = n ?? "";
            return
        }
        if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
            e._value = n;
            const c = n ?? "";
            (e.value !== c || e.tagName === "OPTION") && (e.value = c),
            n == null && e.removeAttribute(t);
            return
        }
        let u = !1;
        if (n === "" || n == null) {
            const c = typeof e[t];
            c === "boolean" ? n = Os(n) : n == null && c === "string" ? (n = "",
            u = !0) : c === "number" && (n = 0,
            u = !0)
        }
        try {
            e[t] = n
        } catch {}
        u && e.removeAttribute(t)
    }
    function qn(e, t, n, o) {
        e.addEventListener(t, n, o)
    }
    function sg(e, t, n, o) {
        e.removeEventListener(t, n, o)
    }
    function lg(e, t, n, o, r=null) {
        const i = e._vei || (e._vei = {})
          , s = i[t];
        if (o && s)
            s.value = o;
        else {
            const [u,c] = ug(t);
            if (o) {
                const A = i[t] = Ag(o, r);
                qn(e, u, A, c)
            } else
                s && (sg(e, u, s, c),
                i[t] = void 0)
        }
    }
    const ou = /(?:Once|Passive|Capture)$/;
    function ug(e) {
        let t;
        if (ou.test(e)) {
            t = {};
            let n;
            for (; n = e.match(ou); )
                e = e.slice(0, e.length - n[0].length),
                t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : an(e.slice(2)), t]
    }
    let di = 0;
    const cg = Promise.resolve()
      , dg = ()=>di || (cg.then(()=>di = 0),
    di = Date.now());
    function Ag(e, t) {
        const n = o=>{
            if (!o._vts)
                o._vts = Date.now();
            else if (o._vts <= n.attached)
                return;
            At(pg(o, n.value), t, 5, [o])
        }
        ;
        return n.value = e,
        n.attached = dg(),
        n
    }
    function pg(e, t) {
        if (se(t)) {
            const n = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = ()=>{
                n.call(e),
                e._stopped = !0
            }
            ,
            t.map(o=>r=>!r._stopped && o && o(r))
        } else
            return t
    }
    const ru = /^on[a-z]/
      , fg = (e,t,n,o,r=!1,i,s,u,c)=>{
        t === "class" ? ng(e, o, r) : t === "style" ? og(e, n, o) : ro(t) ? rr(t) || lg(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1),
        !0) : t[0] === "^" ? (t = t.slice(1),
        !1) : gg(e, t, o, r)) ? ig(e, t, o, i, s, u, c) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o),
        ag(e, t, o, r))
    }
    ;
    function gg(e, t, n, o) {
        return o ? !!(t === "innerHTML" || t === "textContent" || t in e && ru.test(t) && Ae(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ru.test(t) && Fe(n) ? !1 : t in e
    }
    let Ft, Yn;
    Ft = "transition",
    Yn = "animation",
    gt = (e,{slots: t})=>Ge(bl, mg(e), t),
    gt.displayName = "Transition";
    const au = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    };
    gt.props = ze({}, bl.props, au);
    const bn = (e,t=[])=>{
        se(e) ? e.forEach(n=>n(...t)) : e && e(...t)
    }
      , iu = e=>e ? se(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
    function mg(e) {
        const t = {};
        for (const O in e)
            O in au || (t[O] = e[O]);
        if (e.css === !1)
            return t;
        const {name: n="v", type: o, duration: r, enterFromClass: i=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: u=`${n}-enter-to`, appearFromClass: c=i, appearActiveClass: A=s, appearToClass: p=u, leaveFromClass: a=`${n}-leave-from`, leaveActiveClass: l=`${n}-leave-active`, leaveToClass: d=`${n}-leave-to`} = e
          , f = hg(r)
          , m = f && f[0]
          , v = f && f[1]
          , {onBeforeEnter: g, onEnter: h, onEnterCancelled: b, onLeave: E, onLeaveCancelled: T, onBeforeAppear: B=g, onAppear: Q=h, onAppearCancelled: C=b} = t
          , x = (O,Z,ne)=>{
            wn(O, Z ? p : u),
            wn(O, Z ? A : s),
            ne && ne()
        }
          , V = (O,Z)=>{
            O._isLeaving = !1,
            wn(O, a),
            wn(O, d),
            wn(O, l),
            Z && Z()
        }
          , D = O=>(Z,ne)=>{
            const W = O ? Q : h
              , ie = ()=>x(Z, O, ne);
            bn(W, [Z, ie]),
            su(()=>{
                wn(Z, O ? c : i),
                Kt(Z, O ? p : u),
                iu(W) || lu(Z, o, m, ie)
            }
            )
        }
        ;
        return ze(t, {
            onBeforeEnter(O) {
                bn(g, [O]),
                Kt(O, i),
                Kt(O, s)
            },
            onBeforeAppear(O) {
                bn(B, [O]),
                Kt(O, c),
                Kt(O, A)
            },
            onEnter: D(!1),
            onAppear: D(!0),
            onLeave(O, Z) {
                O._isLeaving = !0;
                const ne = ()=>V(O, Z);
                Kt(O, a),
                wg(),
                Kt(O, l),
                su(()=>{
                    O._isLeaving && (wn(O, a),
                    Kt(O, d),
                    iu(E) || lu(O, o, v, ne))
                }
                ),
                bn(E, [O, ne])
            },
            onEnterCancelled(O) {
                x(O, !1),
                bn(b, [O])
            },
            onAppearCancelled(O) {
                x(O, !0),
                bn(C, [O])
            },
            onLeaveCancelled(O) {
                V(O),
                bn(T, [O])
            }
        })
    }
    function hg(e) {
        if (e == null)
            return null;
        if (ke(e))
            return [Ai(e.enter), Ai(e.leave)];
        {
            const t = Ai(e);
            return [t, t]
        }
    }
    function Ai(e) {
        return Us(e)
    }
    function Kt(e, t) {
        t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
        (e._vtc || (e._vtc = new Set)).add(t)
    }
    function wn(e, t) {
        t.split(/\s+/).forEach(o=>o && e.classList.remove(o));
        const {_vtc: n} = e;
        n && (n.delete(t),
        n.size || (e._vtc = void 0))
    }
    function su(e) {
        requestAnimationFrame(()=>{
            requestAnimationFrame(e)
        }
        )
    }
    let vg = 0;
    function lu(e, t, n, o) {
        const r = e._endId = ++vg
          , i = ()=>{
            r === e._endId && o()
        }
        ;
        if (n)
            return setTimeout(i, n);
        const {type: s, timeout: u, propCount: c} = bg(e, t);
        if (!s)
            return o();
        const A = s + "end";
        let p = 0;
        const a = ()=>{
            e.removeEventListener(A, l),
            i()
        }
          , l = d=>{
            d.target === e && ++p >= c && a()
        }
        ;
        setTimeout(()=>{
            p < c && a()
        }
        , u + 1),
        e.addEventListener(A, l)
    }
    function bg(e, t) {
        const n = window.getComputedStyle(e)
          , o = f=>(n[f] || "").split(", ")
          , r = o(`${Ft}Delay`)
          , i = o(`${Ft}Duration`)
          , s = uu(r, i)
          , u = o(`${Yn}Delay`)
          , c = o(`${Yn}Duration`)
          , A = uu(u, c);
        let p = null
          , a = 0
          , l = 0;
        t === Ft ? s > 0 && (p = Ft,
        a = s,
        l = i.length) : t === Yn ? A > 0 && (p = Yn,
        a = A,
        l = c.length) : (a = Math.max(s, A),
        p = a > 0 ? s > A ? Ft : Yn : null,
        l = p ? p === Ft ? i.length : c.length : 0);
        const d = p === Ft && /\b(transform|all)(,|$)/.test(o(`${Ft}Property`).toString());
        return {
            type: p,
            timeout: a,
            propCount: l,
            hasTransform: d
        }
    }
    function uu(e, t) {
        for (; e.length < t.length; )
            e = e.concat(e);
        return Math.max(...t.map((n,o)=>cu(n) + cu(e[o])))
    }
    function cu(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }
    function wg() {
        return document.body.offsetHeight
    }
    const du = e=>{
        const t = e.props["onUpdate:modelValue"] || !1;
        return se(t) ? n=>uo(t, n) : t
    }
    ;
    function yg(e) {
        e.target.composing = !0
    }
    function Au(e) {
        const t = e.target;
        t.composing && (t.composing = !1,
        t.dispatchEvent(new Event("input")))
    }
    let pi;
    Ms = {
        created(e, {modifiers: {lazy: t, trim: n, number: o}}, r) {
            e._assign = du(r);
            const i = o || r.props && r.props.type === "number";
            qn(e, t ? "change" : "input", s=>{
                if (s.target.composing)
                    return;
                let u = e.value;
                n && (u = u.trim()),
                i && (u = lr(u)),
                e._assign(u)
            }
            ),
            n && qn(e, "change", ()=>{
                e.value = e.value.trim()
            }
            ),
            t || (qn(e, "compositionstart", yg),
            qn(e, "compositionend", Au),
            qn(e, "change", Au))
        },
        mounted(e, {value: t}) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: o, number: r}}, i) {
            if (e._assign = du(i),
            e.composing || document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === t || (r || e.type === "number") && lr(e.value) === t))
                return;
            const s = t ?? "";
            e.value !== s && (e.value = s)
        }
    },
    pi = {
        beforeMount(e, {value: t}, {transition: n}) {
            e._vod = e.style.display === "none" ? "" : e.style.display,
            n && t ? n.beforeEnter(e) : Bo(e, t)
        },
        mounted(e, {value: t}, {transition: n}) {
            n && t && n.enter(e)
        },
        updated(e, {value: t, oldValue: n}, {transition: o}) {
            !t != !n && (o ? t ? (o.beforeEnter(e),
            Bo(e, !0),
            o.enter(e)) : o.leave(e, ()=>{
                Bo(e, !1)
            }
            ) : Bo(e, t))
        },
        beforeUnmount(e, {value: t}) {
            Bo(e, t)
        }
    };
    function Bo(e, t) {
        e.style.display = t ? e._vod : "none"
    }
    const Cg = ze({
        patchProp: fg
    }, tg);
    let pu;
    function Eg() {
        return pu || (pu = Df(Cg))
    }
    const Ig = (...e)=>{
        const t = Eg().createApp(...e)
          , {mount: n} = t;
        return t.mount = o=>{
            const r = Bg(o);
            if (!r)
                return;
            const i = t._component;
            !Ae(i) && !i.render && !i.template && (i.template = r.innerHTML),
            r.innerHTML = "";
            const s = n(r, !1, r instanceof SVGElement);
            return r instanceof Element && (r.removeAttribute("v-cloak"),
            r.setAttribute("data-v-app", "")),
            s
        }
        ,
        t
    }
    ;
    function Bg(e) {
        return Fe(e) ? document.querySelector(e) : e
    }
    let fu, gu;
    Ss = (e,t)=>{
        const n = e.__vccOpts || e;
        for (const [o,r] of t)
            n[o] = r;
        return n
    }
    ,
    fu = ["href"],
    gu = {
        __name: "BaseLogo",
        props: {
            withBlur: {
                type: Boolean,
                default: !1
            },
            noRedirect: {
                type: Boolean,
                default: !1
            },
            logo: {
                type: String,
                default: "logo/bubble-rider-logo"
            }
        },
        setup(e) {
            const t = e;
            return (n,o)=>{
                const r = Za("BaseSvg");
                return K(),
                ae("a", {
                    class: Le(["base-logo__container", {
                        "no-redirect": e.noRedirect
                    }]),
                    href: e.noRedirect ? "javascript:void(0)" : "/"
                }, [S(r, {
                    class: "base-logo",
                    icon: e.logo,
                    width: "68",
                    height: "31"
                }, null, 8, ["icon"]), t.withBlur ? (K(),
                Te(r, {
                    key: 0,
                    class: "base-logo-blur",
                    icon: e.logo,
                    width: "68",
                    height: "31"
                }, null, 8, ["icon"])) : Oe("", !0)], 10, fu)
            }
        }
    },
    va = Ss(gu, [["__scopeId", "data-v-c3482ed5"]]);
    const zn = typeof window < "u";
    function Mg(e) {
        return e.__esModule || e[Symbol.toStringTag] === "Module"
    }
    const Ee = Object.assign;
    function fi(e, t) {
        const n = {};
        for (const o in t) {
            const r = t[o];
            n[o] = Et(r) ? r.map(e) : e(r)
        }
        return n
    }
    const Mo = ()=>{}
      , Et = Array.isArray
      , Qg = /\/$/
      , Sg = e=>e.replace(Qg, "");
    function gi(e, t, n="/") {
        let o, r = {}, i = "", s = "";
        const u = t.indexOf("#");
        let c = t.indexOf("?");
        return u < c && u >= 0 && (c = -1),
        c > -1 && (o = t.slice(0, c),
        i = t.slice(c + 1, u > -1 ? u : t.length),
        r = e(i)),
        u > -1 && (o = o || t.slice(0, u),
        s = t.slice(u, t.length)),
        o = Dg(o ?? t, n),
        {
            fullPath: o + (i && "?") + i + s,
            path: o,
            query: r,
            hash: s
        }
    }
    function xg(e, t) {
        const n = t.query ? e(t.query) : "";
        return t.path + (n && "?") + n + (t.hash || "")
    }
    function mu(e, t) {
        return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
    }
    function kg(e, t, n) {
        const o = t.matched.length - 1
          , r = n.matched.length - 1;
        return o > -1 && o === r && Hn(t.matched[o], n.matched[r]) && hu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
    }
    function Hn(e, t) {
        return (e.aliasOf || e) === (t.aliasOf || t)
    }
    function hu(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (const n in e)
            if (!Og(e[n], t[n]))
                return !1;
        return !0
    }
    function Og(e, t) {
        return Et(e) ? vu(e, t) : Et(t) ? vu(t, e) : e === t
    }
    function vu(e, t) {
        return Et(t) ? e.length === t.length && e.every((n,o)=>n === t[o]) : e.length === 1 && e[0] === t
    }
    function Dg(e, t) {
        if (e.startsWith("/"))
            return e;
        if (!e)
            return t;
        const n = t.split("/")
          , o = e.split("/");
        let r = n.length - 1, i, s;
        for (i = 0; i < o.length; i++)
            if (s = o[i],
            s !== ".")
                if (s === "..")
                    r > 1 && r--;
                else
                    break;
        return n.slice(0, r).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/")
    }
    var Qo;
    (function(e) {
        e.pop = "pop",
        e.push = "push"
    }
    )(Qo || (Qo = {}));
    var So;
    (function(e) {
        e.back = "back",
        e.forward = "forward",
        e.unknown = ""
    }
    )(So || (So = {}));
    function Lg(e) {
        if (!e)
            if (zn) {
                const t = document.querySelector("base");
                e = t && t.getAttribute("href") || "/",
                e = e.replace(/^\w+:\/\/[^\/]+/, "")
            } else
                e = "/";
        return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
        Sg(e)
    }
    const Tg = /^[^#]+#/;
    function Vg(e, t) {
        return e.replace(Tg, "#") + t
    }
    function Fg(e, t) {
        const n = document.documentElement.getBoundingClientRect()
          , o = e.getBoundingClientRect();
        return {
            behavior: t.behavior,
            left: o.left - n.left - (t.left || 0),
            top: o.top - n.top - (t.top || 0)
        }
    }
    const Dr = ()=>({
        left: window.pageXOffset,
        top: window.pageYOffset
    });
    function Rg(e) {
        let t;
        if ("el"in e) {
            const n = e.el
              , o = typeof n == "string" && n.startsWith("#")
              , r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
            if (!r)
                return;
            t = Fg(r, e)
        } else
            t = e;
        "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
    }
    function bu(e, t) {
        return (history.state ? history.state.position - t : -1) + e
    }
    const mi = new Map;
    function Ug(e, t) {
        mi.set(e, t)
    }
    function Gg(e) {
        const t = mi.get(e);
        return mi.delete(e),
        t
    }
    let jg = ()=>location.protocol + "//" + location.host;
    function wu(e, t) {
        const {pathname: n, search: o, hash: r} = t
          , i = e.indexOf("#");
        if (i > -1) {
            let s = r.includes(e.slice(i)) ? e.slice(i).length : 1
              , u = r.slice(s);
            return u[0] !== "/" && (u = "/" + u),
            mu(u, "")
        }
        return mu(n, e) + o + r
    }
    function Ng(e, t, n, o) {
        let r = []
          , i = []
          , s = null;
        const u = ({state: l})=>{
            const d = wu(e, location)
              , f = n.value
              , m = t.value;
            let v = 0;
            if (l) {
                if (n.value = d,
                t.value = l,
                s && s === f) {
                    s = null;
                    return
                }
                v = m ? l.position - m.position : 0
            } else
                o(d);
            r.forEach(g=>{
                g(n.value, f, {
                    delta: v,
                    type: Qo.pop,
                    direction: v ? v > 0 ? So.forward : So.back : So.unknown
                })
            }
            )
        }
        ;
        function c() {
            s = n.value
        }
        function A(l) {
            r.push(l);
            const d = ()=>{
                const f = r.indexOf(l);
                f > -1 && r.splice(f, 1)
            }
            ;
            return i.push(d),
            d
        }
        function p() {
            const {history: l} = window;
            l.state && l.replaceState(Ee({}, l.state, {
                scroll: Dr()
            }), "")
        }
        function a() {
            for (const l of i)
                l();
            i = [],
            window.removeEventListener("popstate", u),
            window.removeEventListener("beforeunload", p)
        }
        return window.addEventListener("popstate", u),
        window.addEventListener("beforeunload", p),
        {
            pauseListeners: c,
            listen: A,
            destroy: a
        }
    }
    function yu(e, t, n, o=!1, r=!1) {
        return {
            back: e,
            current: t,
            forward: n,
            replaced: o,
            position: window.history.length,
            scroll: r ? Dr() : null
        }
    }
    function qg(e) {
        const {history: t, location: n} = window
          , o = {
            value: wu(e, n)
        }
          , r = {
            value: t.state
        };
        r.value || i(o.value, {
            back: null,
            current: o.value,
            forward: null,
            position: t.length - 1,
            replaced: !0,
            scroll: null
        }, !0);
        function i(c, A, p) {
            const a = e.indexOf("#")
              , l = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + c : jg() + e + c;
            try {
                t[p ? "replaceState" : "pushState"](A, "", l),
                r.value = A
            } catch {
                n[p ? "replace" : "assign"](l)
            }
        }
        function s(c, A) {
            const p = Ee({}, t.state, yu(r.value.back, c, r.value.forward, !0), A, {
                position: r.value.position
            });
            i(c, p, !0),
            o.value = c
        }
        function u(c, A) {
            const p = Ee({}, r.value, t.state, {
                forward: c,
                scroll: Dr()
            });
            i(p.current, p, !0);
            const a = Ee({}, yu(o.value, c, null), {
                position: p.position + 1
            }, A);
            i(c, a, !1),
            o.value = c
        }
        return {
            location: o,
            state: r,
            push: u,
            replace: s
        }
    }
    function Yg(e) {
        e = Lg(e);
        const t = qg(e)
          , n = Ng(e, t.state, t.location, t.replace);
        function o(i, s=!0) {
            s || n.pauseListeners(),
            history.go(i)
        }
        const r = Ee({
            location: "",
            base: e,
            go: o,
            createHref: Vg.bind(null, e)
        }, t, n);
        return Object.defineProperty(r, "location", {
            enumerable: !0,
            get: ()=>t.location.value
        }),
        Object.defineProperty(r, "state", {
            enumerable: !0,
            get: ()=>t.state.value
        }),
        r
    }
    function zg(e) {
        return typeof e == "string" || e && typeof e == "object"
    }
    function Cu(e) {
        return typeof e == "string" || typeof e == "symbol"
    }
    const Zt = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    }
      , Eu = Symbol("");
    var Iu;
    (function(e) {
        e[e.aborted = 4] = "aborted",
        e[e.cancelled = 8] = "cancelled",
        e[e.duplicated = 16] = "duplicated"
    }
    )(Iu || (Iu = {}));
    function Kn(e, t) {
        return Ee(new Error, {
            type: e,
            [Eu]: !0
        }, t)
    }
    function Rt(e, t) {
        return e instanceof Error && Eu in e && (t == null || !!(e.type & t))
    }
    const Bu = "[^/]+?"
      , Hg = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    }
      , Kg = /[.+*?^${}()[\]/\\]/g;
    function Zg(e, t) {
        const n = Ee({}, Hg, t)
          , o = [];
        let r = n.start ? "^" : "";
        const i = [];
        for (const A of e) {
            const p = A.length ? [] : [90];
            n.strict && !A.length && (r += "/");
            for (let a = 0; a < A.length; a++) {
                const l = A[a];
                let d = 40 + (n.sensitive ? .25 : 0);
                if (l.type === 0)
                    a || (r += "/"),
                    r += l.value.replace(Kg, "\\$&"),
                    d += 40;
                else if (l.type === 1) {
                    const {value: f, repeatable: m, optional: v, regexp: g} = l;
                    i.push({
                        name: f,
                        repeatable: m,
                        optional: v
                    });
                    const h = g || Bu;
                    if (h !== Bu) {
                        d += 10;
                        try {
                            new RegExp(`(${h})`)
                        } catch (E) {
                            throw new Error(`Invalid custom RegExp for param "${f}" (${h}): ` + E.message)
                        }
                    }
                    let b = m ? `((?:${h})(?:/(?:${h}))*)` : `(${h})`;
                    a || (b = v && A.length < 2 ? `(?:/${b})` : "/" + b),
                    v && (b += "?"),
                    r += b,
                    d += 20,
                    v && (d += -8),
                    m && (d += -20),
                    h === ".*" && (d += -50)
                }
                p.push(d)
            }
            o.push(p)
        }
        if (n.strict && n.end) {
            const A = o.length - 1;
            o[A][o[A].length - 1] += .7000000000000001
        }
        n.strict || (r += "/?"),
        n.end ? r += "$" : n.strict && (r += "(?:/|$)");
        const s = new RegExp(r,n.sensitive ? "" : "i");
        function u(A) {
            const p = A.match(s)
              , a = {};
            if (!p)
                return null;
            for (let l = 1; l < p.length; l++) {
                const d = p[l] || ""
                  , f = i[l - 1];
                a[f.name] = d && f.repeatable ? d.split("/") : d
            }
            return a
        }
        function c(A) {
            let p = ""
              , a = !1;
            for (const l of e) {
                (!a || !p.endsWith("/")) && (p += "/"),
                a = !1;
                for (const d of l)
                    if (d.type === 0)
                        p += d.value;
                    else if (d.type === 1) {
                        const {value: f, repeatable: m, optional: v} = d
                          , g = f in A ? A[f] : "";
                        if (Et(g) && !m)
                            throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);
                        const h = Et(g) ? g.join("/") : g;
                        if (!h)
                            if (v)
                                l.length < 2 && (p.endsWith("/") ? p = p.slice(0, -1) : a = !0);
                            else
                                throw new Error(`Missing required param "${f}"`);
                        p += h
                    }
            }
            return p || "/"
        }
        return {
            re: s,
            score: o,
            keys: i,
            parse: u,
            stringify: c
        }
    }
    function Pg(e, t) {
        let n = 0;
        for (; n < e.length && n < t.length; ) {
            const o = t[n] - e[n];
            if (o)
                return o;
            n++
        }
        return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
    }
    function Wg(e, t) {
        let n = 0;
        const o = e.score
          , r = t.score;
        for (; n < o.length && n < r.length; ) {
            const i = Pg(o[n], r[n]);
            if (i)
                return i;
            n++
        }
        if (Math.abs(r.length - o.length) === 1) {
            if (Mu(o))
                return 1;
            if (Mu(r))
                return -1
        }
        return r.length - o.length
    }
    function Mu(e) {
        const t = e[e.length - 1];
        return e.length > 0 && t[t.length - 1] < 0
    }
    const Jg = {
        type: 0,
        value: ""
    }
      , Xg = /[a-zA-Z0-9_]/;
    function _g(e) {
        if (!e)
            return [[]];
        if (e === "/")
            return [[Jg]];
        if (!e.startsWith("/"))
            throw new Error(`Invalid path "${e}"`);
        function t(d) {
            throw new Error(`ERR (${n})/"${A}": ${d}`)
        }
        let n = 0
          , o = n;
        const r = [];
        let i;
        function s() {
            i && r.push(i),
            i = []
        }
        let u = 0, c, A = "", p = "";
        function a() {
            A && (n === 0 ? i.push({
                type: 0,
                value: A
            }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${A}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
                type: 1,
                value: A,
                regexp: p,
                repeatable: c === "*" || c === "+",
                optional: c === "*" || c === "?"
            })) : t("Invalid state to consume buffer"),
            A = "")
        }
        function l() {
            A += c
        }
        for (; u < e.length; ) {
            if (c = e[u++],
            c === "\\" && n !== 2) {
                o = n,
                n = 4;
                continue
            }
            switch (n) {
            case 0:
                c === "/" ? (A && a(),
                s()) : c === ":" ? (a(),
                n = 1) : l();
                break;
            case 4:
                l(),
                n = o;
                break;
            case 1:
                c === "(" ? n = 2 : Xg.test(c) ? l() : (a(),
                n = 0,
                c !== "*" && c !== "?" && c !== "+" && u--);
                break;
            case 2:
                c === ")" ? p[p.length - 1] == "\\" ? p = p.slice(0, -1) + c : n = 3 : p += c;
                break;
            case 3:
                a(),
                n = 0,
                c !== "*" && c !== "?" && c !== "+" && u--,
                p = "";
                break;
            default:
                t("Unknown state");
                break
            }
        }
        return n === 2 && t(`Unfinished custom RegExp for param "${A}"`),
        a(),
        s(),
        r
    }
    function $g(e, t, n) {
        const o = Zg(_g(e.path), n)
          , r = Ee(o, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
        return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
        r
    }
    function em(e, t) {
        const n = []
          , o = new Map;
        t = xu({
            strict: !1,
            end: !0,
            sensitive: !1
        }, t);
        function r(p) {
            return o.get(p)
        }
        function i(p, a, l) {
            const d = !l
              , f = tm(p);
            f.aliasOf = l && l.record;
            const m = xu(t, p)
              , v = [f];
            if ("alias"in p) {
                const b = typeof p.alias == "string" ? [p.alias] : p.alias;
                for (const E of b)
                    v.push(Ee({}, f, {
                        components: l ? l.record.components : f.components,
                        path: E,
                        aliasOf: l ? l.record : f
                    }))
            }
            let g, h;
            for (const b of v) {
                const {path: E} = b;
                if (a && E[0] !== "/") {
                    const T = a.record.path
                      , B = T[T.length - 1] === "/" ? "" : "/";
                    b.path = a.record.path + (E && B + E)
                }
                if (g = $g(b, a, m),
                l ? l.alias.push(g) : (h = h || g,
                h !== g && h.alias.push(g),
                d && p.name && !Su(g) && s(p.name)),
                f.children) {
                    const T = f.children;
                    for (let B = 0; B < T.length; B++)
                        i(T[B], g, l && l.children[B])
                }
                l = l || g,
                (g.record.components && Object.keys(g.record.components).length || g.record.name || g.record.redirect) && c(g)
            }
            return h ? ()=>{
                s(h)
            }
            : Mo
        }
        function s(p) {
            if (Cu(p)) {
                const a = o.get(p);
                a && (o.delete(p),
                n.splice(n.indexOf(a), 1),
                a.children.forEach(s),
                a.alias.forEach(s))
            } else {
                const a = n.indexOf(p);
                a > -1 && (n.splice(a, 1),
                p.record.name && o.delete(p.record.name),
                p.children.forEach(s),
                p.alias.forEach(s))
            }
        }
        function u() {
            return n
        }
        function c(p) {
            let a = 0;
            for (; a < n.length && Wg(p, n[a]) >= 0 && (p.record.path !== n[a].record.path || !ku(p, n[a])); )
                a++;
            n.splice(a, 0, p),
            p.record.name && !Su(p) && o.set(p.record.name, p)
        }
        function A(p, a) {
            let l, d = {}, f, m;
            if ("name"in p && p.name) {
                if (l = o.get(p.name),
                !l)
                    throw Kn(1, {
                        location: p
                    });
                m = l.record.name,
                d = Ee(Qu(a.params, l.keys.filter(h=>!h.optional).map(h=>h.name)), p.params && Qu(p.params, l.keys.map(h=>h.name))),
                f = l.stringify(d)
            } else if ("path"in p)
                f = p.path,
                l = n.find(h=>h.re.test(f)),
                l && (d = l.parse(f),
                m = l.record.name);
            else {
                if (l = a.name ? o.get(a.name) : n.find(h=>h.re.test(a.path)),
                !l)
                    throw Kn(1, {
                        location: p,
                        currentLocation: a
                    });
                m = l.record.name,
                d = Ee({}, a.params, p.params),
                f = l.stringify(d)
            }
            const v = [];
            let g = l;
            for (; g; )
                v.unshift(g.record),
                g = g.parent;
            return {
                name: m,
                path: f,
                params: d,
                matched: v,
                meta: om(v)
            }
        }
        return e.forEach(p=>i(p)),
        {
            addRoute: i,
            resolve: A,
            removeRoute: s,
            getRoutes: u,
            getRecordMatcher: r
        }
    }
    function Qu(e, t) {
        const n = {};
        for (const o of t)
            o in e && (n[o] = e[o]);
        return n
    }
    function tm(e) {
        return {
            path: e.path,
            redirect: e.redirect,
            name: e.name,
            meta: e.meta || {},
            aliasOf: void 0,
            beforeEnter: e.beforeEnter,
            props: nm(e),
            children: e.children || [],
            instances: {},
            leaveGuards: new Set,
            updateGuards: new Set,
            enterCallbacks: {},
            components: "components"in e ? e.components || null : e.component && {
                default: e.component
            }
        }
    }
    function nm(e) {
        const t = {}
          , n = e.props || !1;
        if ("component"in e)
            t.default = n;
        else
            for (const o in e.components)
                t[o] = typeof n == "boolean" ? n : n[o];
        return t
    }
    function Su(e) {
        for (; e; ) {
            if (e.record.aliasOf)
                return !0;
            e = e.parent
        }
        return !1
    }
    function om(e) {
        return e.reduce((t,n)=>Ee(t, n.meta), {})
    }
    function xu(e, t) {
        const n = {};
        for (const o in e)
            n[o] = o in t ? t[o] : e[o];
        return n
    }
    function ku(e, t) {
        return t.children.some(n=>n === e || ku(e, n))
    }
    const Ou = /#/g
      , rm = /&/g
      , am = /\//g
      , im = /=/g
      , sm = /\?/g
      , Du = /\+/g
      , lm = /%5B/g
      , um = /%5D/g
      , Lu = /%5E/g
      , cm = /%60/g
      , Tu = /%7B/g
      , dm = /%7C/g
      , Vu = /%7D/g
      , Am = /%20/g;
    function hi(e) {
        return encodeURI("" + e).replace(dm, "|").replace(lm, "[").replace(um, "]")
    }
    function pm(e) {
        return hi(e).replace(Tu, "{").replace(Vu, "}").replace(Lu, "^")
    }
    function vi(e) {
        return hi(e).replace(Du, "%2B").replace(Am, "+").replace(Ou, "%23").replace(rm, "%26").replace(cm, "`").replace(Tu, "{").replace(Vu, "}").replace(Lu, "^")
    }
    function fm(e) {
        return vi(e).replace(im, "%3D")
    }
    function gm(e) {
        return hi(e).replace(Ou, "%23").replace(sm, "%3F")
    }
    function mm(e) {
        return e == null ? "" : gm(e).replace(am, "%2F")
    }
    function Lr(e) {
        try {
            return decodeURIComponent("" + e)
        } catch {}
        return "" + e
    }
    function hm(e) {
        const t = {};
        if (e === "" || e === "?")
            return t;
        const n = (e[0] === "?" ? e.slice(1) : e).split("&");
        for (let o = 0; o < n.length; ++o) {
            const r = n[o].replace(Du, " ")
              , i = r.indexOf("=")
              , s = Lr(i < 0 ? r : r.slice(0, i))
              , u = i < 0 ? null : Lr(r.slice(i + 1));
            if (s in t) {
                let c = t[s];
                Et(c) || (c = t[s] = [c]),
                c.push(u)
            } else
                t[s] = u
        }
        return t
    }
    function Fu(e) {
        let t = "";
        for (let n in e) {
            const o = e[n];
            if (n = fm(n),
            o == null) {
                o !== void 0 && (t += (t.length ? "&" : "") + n);
                continue
            }
            (Et(o) ? o.map(r=>r && vi(r)) : [o && vi(o)]).forEach(r=>{
                r !== void 0 && (t += (t.length ? "&" : "") + n,
                r != null && (t += "=" + r))
            }
            )
        }
        return t
    }
    function vm(e) {
        const t = {};
        for (const n in e) {
            const o = e[n];
            o !== void 0 && (t[n] = Et(o) ? o.map(r=>r == null ? null : "" + r) : o == null ? o : "" + o)
        }
        return t
    }
    const bm = Symbol("")
      , Ru = Symbol("")
      , Tr = Symbol("")
      , bi = Symbol("")
      , wi = Symbol("");
    function xo() {
        let e = [];
        function t(o) {
            return e.push(o),
            ()=>{
                const r = e.indexOf(o);
                r > -1 && e.splice(r, 1)
            }
        }
        function n() {
            e = []
        }
        return {
            add: t,
            list: ()=>e,
            reset: n
        }
    }
    function Pt(e, t, n, o, r) {
        const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
        return ()=>new Promise((s,u)=>{
            const c = a=>{
                a === !1 ? u(Kn(4, {
                    from: n,
                    to: t
                })) : a instanceof Error ? u(a) : zg(a) ? u(Kn(2, {
                    from: t,
                    to: a
                })) : (i && o.enterCallbacks[r] === i && typeof a == "function" && i.push(a),
                s())
            }
              , A = e.call(o && o.instances[r], t, n, c);
            let p = Promise.resolve(A);
            e.length < 3 && (p = p.then(c)),
            p.catch(a=>u(a))
        }
        )
    }
    function yi(e, t, n, o) {
        const r = [];
        for (const i of e)
            for (const s in i.components) {
                let u = i.components[s];
                if (!(t !== "beforeRouteEnter" && !i.instances[s]))
                    if (wm(u)) {
                        const c = (u.__vccOpts || u)[t];
                        c && r.push(Pt(c, n, o, i, s))
                    } else {
                        let c = u();
                        r.push(()=>c.then(A=>{
                            if (!A)
                                return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));
                            const p = Mg(A) ? A.default : A;
                            i.components[s] = p;
                            const a = (p.__vccOpts || p)[t];
                            return a && Pt(a, n, o, i, s)()
                        }
                        ))
                    }
            }
        return r
    }
    function wm(e) {
        return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
    }
    function Uu(e) {
        const t = pe(Tr)
          , n = pe(bi)
          , o = I(()=>t.resolve(q(e.to)))
          , r = I(()=>{
            const {matched: c} = o.value
              , {length: A} = c
              , p = c[A - 1]
              , a = n.matched;
            if (!p || !a.length)
                return -1;
            const l = a.findIndex(Hn.bind(null, p));
            if (l > -1)
                return l;
            const d = Gu(c[A - 2]);
            return A > 1 && Gu(p) === d && a[a.length - 1].path !== d ? a.findIndex(Hn.bind(null, c[A - 2])) : l
        }
        )
          , i = I(()=>r.value > -1 && Im(n.params, o.value.params))
          , s = I(()=>r.value > -1 && r.value === n.matched.length - 1 && hu(n.params, o.value.params));
        function u(c={}) {
            return Em(c) ? t[q(e.replace) ? "replace" : "push"](q(e.to)).catch(Mo) : Promise.resolve()
        }
        return {
            route: o,
            href: I(()=>o.value.href),
            isActive: i,
            isExactActive: s,
            navigate: u
        }
    }
    const ym = Lt({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: Uu,
        setup(e, {slots: t}) {
            const n = Ve(Uu(e))
              , {options: o} = pe(Tr)
              , r = I(()=>({
                [ju(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
                [ju(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
            }));
            return ()=>{
                const i = t.default && t.default(n);
                return e.custom ? i : Ge("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: r.value
                }, i)
            }
        }
    })
      , Cm = ym;
    function Em(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                const t = e.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(t))
                    return
            }
            return e.preventDefault && e.preventDefault(),
            !0
        }
    }
    function Im(e, t) {
        for (const n in t) {
            const o = t[n]
              , r = e[n];
            if (typeof o == "string") {
                if (o !== r)
                    return !1
            } else if (!Et(r) || r.length !== o.length || o.some((i,s)=>i !== r[s]))
                return !1
        }
        return !0
    }
    function Gu(e) {
        return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
    }
    const ju = (e,t,n)=>e ?? t ?? n
      , Bm = Lt({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {attrs: t, slots: n}) {
            const o = pe(wi)
              , r = I(()=>e.route || o.value)
              , i = pe(Ru, 0)
              , s = I(()=>{
                let A = q(i);
                const {matched: p} = r.value;
                let a;
                for (; (a = p[A]) && !a.components; )
                    A++;
                return A
            }
            )
              , u = I(()=>r.value.matched[s.value]);
            qe(Ru, I(()=>s.value + 1)),
            qe(bm, u),
            qe(wi, r);
            const c = G();
            return me(()=>[c.value, u.value, e.name], ([A,p,a],[l,d,f])=>{
                p && (p.instances[a] = A,
                d && d !== p && A && A === l && (p.leaveGuards.size || (p.leaveGuards = d.leaveGuards),
                p.updateGuards.size || (p.updateGuards = d.updateGuards))),
                A && p && (!d || !Hn(p, d) || !l) && (p.enterCallbacks[a] || []).forEach(m=>m(A))
            }
            , {
                flush: "post"
            }),
            ()=>{
                const A = r.value
                  , p = e.name
                  , a = u.value
                  , l = a && a.components[p];
                if (!l)
                    return Nu(n.default, {
                        Component: l,
                        route: A
                    });
                const d = a.props[p]
                  , f = d ? d === !0 ? A.params : typeof d == "function" ? d(A) : d : null
                  , m = Ge(l, Ee({}, f, t, {
                    onVnodeUnmounted: v=>{
                        v.component.isUnmounted && (a.instances[p] = null)
                    }
                    ,
                    ref: c
                }));
                return Nu(n.default, {
                    Component: m,
                    route: A
                }) || m
            }
        }
    });
    function Nu(e, t) {
        if (!e)
            return null;
        const n = e(t);
        return n.length === 1 ? n[0] : n
    }
    const Mm = Bm;
    function Qm(e) {
        const t = em(e.routes, e)
          , n = e.parseQuery || hm
          , o = e.stringifyQuery || Fu
          , r = e.history
          , i = xo()
          , s = xo()
          , u = xo()
          , c = Ra(Zt);
        let A = Zt;
        zn && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
        const p = fi.bind(null, L=>"" + L)
          , a = fi.bind(null, mm)
          , l = fi.bind(null, Lr);
        function d(L, Y) {
            let H, X;
            return Cu(L) ? (H = t.getRecordMatcher(L),
            X = Y) : X = L,
            t.addRoute(X, H)
        }
        function f(L) {
            const Y = t.getRecordMatcher(L);
            Y && t.removeRoute(Y)
        }
        function m() {
            return t.getRoutes().map(L=>L.record)
        }
        function v(L) {
            return !!t.getRecordMatcher(L)
        }
        function g(L, Y) {
            if (Y = Ee({}, Y || c.value),
            typeof L == "string") {
                const w = gi(n, L, Y.path)
                  , y = t.resolve({
                    path: w.path
                }, Y)
                  , M = r.createHref(w.fullPath);
                return Ee(w, y, {
                    params: l(y.params),
                    hash: Lr(w.hash),
                    redirectedFrom: void 0,
                    href: M
                })
            }
            let H;
            if ("path"in L)
                H = Ee({}, L, {
                    path: gi(n, L.path, Y.path).path
                });
            else {
                const w = Ee({}, L.params);
                for (const y in w)
                    w[y] == null && delete w[y];
                H = Ee({}, L, {
                    params: a(L.params)
                }),
                Y.params = a(Y.params)
            }
            const X = t.resolve(H, Y)
              , he = L.hash || "";
            X.params = p(l(X.params));
            const Ie = xg(o, Ee({}, L, {
                hash: pm(he),
                path: X.path
            }))
              , de = r.createHref(Ie);
            return Ee({
                fullPath: Ie,
                hash: he,
                query: o === Fu ? vm(L.query) : L.query || {}
            }, X, {
                redirectedFrom: void 0,
                href: de
            })
        }
        function h(L) {
            return typeof L == "string" ? gi(n, L, c.value.path) : Ee({}, L)
        }
        function b(L, Y) {
            if (A !== L)
                return Kn(8, {
                    from: Y,
                    to: L
                })
        }
        function E(L) {
            return Q(L)
        }
        function T(L) {
            return E(Ee(h(L), {
                replace: !0
            }))
        }
        function B(L) {
            const Y = L.matched[L.matched.length - 1];
            if (Y && Y.redirect) {
                const {redirect: H} = Y;
                let X = typeof H == "function" ? H(L) : H;
                return typeof X == "string" && (X = X.includes("?") || X.includes("#") ? X = h(X) : {
                    path: X
                },
                X.params = {}),
                Ee({
                    query: L.query,
                    hash: L.hash,
                    params: "path"in X ? {} : L.params
                }, X)
            }
        }
        function Q(L, Y) {
            const H = A = g(L)
              , X = c.value
              , he = L.state
              , Ie = L.force
              , de = L.replace === !0
              , w = B(H);
            if (w)
                return Q(Ee(h(w), {
                    state: typeof w == "object" ? Ee({}, he, w.state) : he,
                    force: Ie,
                    replace: de
                }), Y || H);
            const y = H;
            y.redirectedFrom = Y;
            let M;
            return !Ie && kg(o, X, H) && (M = Kn(16, {
                to: y,
                from: X
            }),
            oe(X, X, !0, !1)),
            (M ? Promise.resolve(M) : x(y, X)).catch(k=>Rt(k) ? Rt(k, 2) ? k : J(k) : ee(k, y, X)).then(k=>{
                if (k) {
                    if (Rt(k, 2))
                        return Q(Ee({
                            replace: de
                        }, h(k.to), {
                            state: typeof k.to == "object" ? Ee({}, he, k.to.state) : he,
                            force: Ie
                        }), Y || y)
                } else
                    k = D(y, X, !0, de, he);
                return V(y, X, k),
                k
            }
            )
        }
        function C(L, Y) {
            const H = b(L, Y);
            return H ? Promise.reject(H) : Promise.resolve()
        }
        function x(L, Y) {
            let H;
            const [X,he,Ie] = Sm(L, Y);
            H = yi(X.reverse(), "beforeRouteLeave", L, Y);
            for (const w of X)
                w.leaveGuards.forEach(y=>{
                    H.push(Pt(y, L, Y))
                }
                );
            const de = C.bind(null, L, Y);
            return H.push(de),
            Zn(H).then(()=>{
                H = [];
                for (const w of i.list())
                    H.push(Pt(w, L, Y));
                return H.push(de),
                Zn(H)
            }
            ).then(()=>{
                H = yi(he, "beforeRouteUpdate", L, Y);
                for (const w of he)
                    w.updateGuards.forEach(y=>{
                        H.push(Pt(y, L, Y))
                    }
                    );
                return H.push(de),
                Zn(H)
            }
            ).then(()=>{
                H = [];
                for (const w of L.matched)
                    if (w.beforeEnter && !Y.matched.includes(w))
                        if (Et(w.beforeEnter))
                            for (const y of w.beforeEnter)
                                H.push(Pt(y, L, Y));
                        else
                            H.push(Pt(w.beforeEnter, L, Y));
                return H.push(de),
                Zn(H)
            }
            ).then(()=>(L.matched.forEach(w=>w.enterCallbacks = {}),
            H = yi(Ie, "beforeRouteEnter", L, Y),
            H.push(de),
            Zn(H))).then(()=>{
                H = [];
                for (const w of s.list())
                    H.push(Pt(w, L, Y));
                return H.push(de),
                Zn(H)
            }
            ).catch(w=>Rt(w, 8) ? w : Promise.reject(w))
        }
        function V(L, Y, H) {
            for (const X of u.list())
                X(L, Y, H)
        }
        function D(L, Y, H, X, he) {
            const Ie = b(L, Y);
            if (Ie)
                return Ie;
            const de = Y === Zt
              , w = zn ? history.state : {};
            H && (X || de ? r.replace(L.fullPath, Ee({
                scroll: de && w && w.scroll
            }, he)) : r.push(L.fullPath, he)),
            c.value = L,
            oe(L, Y, H, de),
            J()
        }
        let O;
        function Z() {
            O || (O = r.listen((L,Y,H)=>{
                if (!fe.listening)
                    return;
                const X = g(L)
                  , he = B(X);
                if (he) {
                    Q(Ee(he, {
                        replace: !0
                    }), X).catch(Mo);
                    return
                }
                A = X;
                const Ie = c.value;
                zn && Ug(bu(Ie.fullPath, H.delta), Dr()),
                x(X, Ie).catch(de=>Rt(de, 12) ? de : Rt(de, 2) ? (Q(de.to, X).then(w=>{
                    Rt(w, 20) && !H.delta && H.type === Qo.pop && r.go(-1, !1)
                }
                ).catch(Mo),
                Promise.reject()) : (H.delta && r.go(-H.delta, !1),
                ee(de, X, Ie))).then(de=>{
                    de = de || D(X, Ie, !1),
                    de && (H.delta && !Rt(de, 8) ? r.go(-H.delta, !1) : H.type === Qo.pop && Rt(de, 20) && r.go(-1, !1)),
                    V(X, Ie, de)
                }
                ).catch(Mo)
            }
            ))
        }
        let ne = xo(), W = xo(), ie;
        function ee(L, Y, H) {
            J(L);
            const X = W.list();
            return X.length && X.forEach(he=>he(L, Y, H)),
            Promise.reject(L)
        }
        function _() {
            return ie && c.value !== Zt ? Promise.resolve() : new Promise((L,Y)=>{
                ne.add([L, Y])
            }
            )
        }
        function J(L) {
            return ie || (ie = !L,
            Z(),
            ne.list().forEach(([Y,H])=>L ? H(L) : Y()),
            ne.reset()),
            L
        }
        function oe(L, Y, H, X) {
            const {scrollBehavior: he} = e;
            if (!zn || !he)
                return Promise.resolve();
            const Ie = !H && Gg(bu(L.fullPath, 0)) || (X || !H) && history.state && history.state.scroll || null;
            return rt().then(()=>he(L, Y, Ie)).then(de=>de && Rg(de)).catch(de=>ee(de, L, Y))
        }
        const ue = L=>r.go(L);
        let le;
        const Ne = new Set
          , fe = {
            currentRoute: c,
            listening: !0,
            addRoute: d,
            removeRoute: f,
            hasRoute: v,
            getRoutes: m,
            resolve: g,
            options: e,
            push: E,
            replace: T,
            go: ue,
            back: ()=>ue(-1),
            forward: ()=>ue(1),
            beforeEach: i.add,
            beforeResolve: s.add,
            afterEach: u.add,
            onError: W.add,
            isReady: _,
            install(L) {
                const Y = this;
                L.component("RouterLink", Cm),
                L.component("RouterView", Mm),
                L.config.globalProperties.$router = Y,
                Object.defineProperty(L.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: ()=>q(c)
                }),
                zn && !le && c.value === Zt && (le = !0,
                E(r.location).catch(he=>{}
                ));
                const H = {};
                for (const he in Zt)
                    H[he] = I(()=>c.value[he]);
                L.provide(Tr, Y),
                L.provide(bi, Ve(H)),
                L.provide(wi, c);
                const X = L.unmount;
                Ne.add(L),
                L.unmount = function() {
                    Ne.delete(L),
                    Ne.size < 1 && (A = Zt,
                    O && O(),
                    O = null,
                    c.value = Zt,
                    le = !1,
                    ie = !1),
                    X()
                }
            }
        };
        return fe
    }
    function Zn(e) {
        return e.reduce((t,n)=>t.then(()=>n()), Promise.resolve())
    }
    function Sm(e, t) {
        const n = []
          , o = []
          , r = []
          , i = Math.max(t.matched.length, e.matched.length);
        for (let s = 0; s < i; s++) {
            const u = t.matched[s];
            u && (e.matched.find(A=>Hn(A, u)) ? o.push(u) : n.push(u));
            const c = e.matched[s];
            c && (t.matched.find(A=>Hn(A, c)) || r.push(c))
        }
        return [n, o, r]
    }
    $o = function() {
        return pe(Tr)
    }
    ,
    kn = function() {
        return pe(bi)
    }
    ;
    const xm = {
        key: 0,
        class: "d-sm-none",
        "aria-hidden": ""
    }
      , km = {
        key: 1,
        class: "coming-soon"
    }
      , Om = {
        __name: "HeaderSidebarMenuLink",
        props: {
            url: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },
            mobileTitle: {
                type: String,
                default: ""
            },
            isMintDApp: {
                type: Boolean,
                default: !1
            },
            isNuxtLink: {
                type: Boolean,
                default: !1
            },
            isActive: {
                type: Boolean,
                default: !1
            },
            newTab: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["click"],
        setup(e, {emit: t}) {
            const n = e;
            kn();
            const o = I(()=>{
                const A = {};
                return n.isNuxtLink ? A.to = s.value : u.value && (A.href = s.value,
                n.newTab && (A.target = "_blank",
                A.rel = "noopener nofollow")),
                A
            }
            )
              , r = I(()=>({
                "is-active": n.isActive,
                "nav__link--coming-soon": !u.value
            }))
              , i = I(()=>u.value ? n.isNuxtLink ? "router-link" : "a" : "span")
              , s = I(()=>n.url)
              , u = I(()=>s.value && s.value !== "#")
              , c = ()=>{
                u.value && t("click")
            }
            ;
            return (A,p)=>(K(),
            Te(Pa(q(i)), He({
                class: ["nav__link", q(r)]
            }, q(o), {
                onClick: c
            }), {
                default: Be(()=>[e.mobileTitle ? (K(),
                ae("span", xm, Qe(e.mobileTitle), 1)) : Oe("", !0), R("span", {
                    class: Le({
                        "d-none d-sm-block": e.mobileTitle
                    })
                }, Qe(e.title), 3), q(u) ? Oe("", !0) : (K(),
                ae("span", km, "Coming Soon"))]),
                _: 1
            }, 16, ["class"]))
        }
    };
    var Dm = !1;
    let qu;
    const Vr = e=>qu = e
      , Yu = Symbol();
    function Ci(e) {
        return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
    }
    var ko;
    (function(e) {
        e.direct = "direct",
        e.patchObject = "patch object",
        e.patchFunction = "patch function"
    }
    )(ko || (ko = {}));
    function Lm() {
        const e = Ao(!0)
          , t = e.run(()=>G({}));
        let n = []
          , o = [];
        const r = un({
            install(i) {
                Vr(r),
                r._a = i,
                i.provide(Yu, r),
                i.config.globalProperties.$pinia = r,
                o.forEach(s=>n.push(s)),
                o = []
            },
            use(i) {
                return !this._a && !Dm ? o.push(i) : n.push(i),
                this
            },
            _p: n,
            _a: null,
            _e: e,
            _s: new Map,
            state: t
        });
        return r
    }
    const zu = ()=>{}
    ;
    function Hu(e, t, n, o=zu) {
        e.push(t);
        const r = ()=>{
            const i = e.indexOf(t);
            i > -1 && (e.splice(i, 1),
            o())
        }
        ;
        return !n && Ns() && ot(r),
        r
    }
    function Pn(e, ...t) {
        e.slice().forEach(n=>{
            n(...t)
        }
        )
    }
    function Ei(e, t) {
        e instanceof Map && t instanceof Map && t.forEach((n,o)=>e.set(o, n)),
        e instanceof Set && t instanceof Set && t.forEach(e.add, e);
        for (const n in t) {
            if (!t.hasOwnProperty(n))
                continue;
            const o = t[n]
              , r = e[n];
            Ci(r) && Ci(o) && e.hasOwnProperty(n) && !Ce(o) && !Yt(o) ? e[n] = Ei(r, o) : e[n] = o
        }
        return e
    }
    const Tm = Symbol();
    function Vm(e) {
        return !Ci(e) || !e.hasOwnProperty(Tm)
    }
    const {assign: Wt} = Object;
    function Fm(e) {
        return !!(Ce(e) && e.effect)
    }
    function Rm(e, t, n, o) {
        const {state: r, actions: i, getters: s} = t
          , u = n.state.value[e];
        let c;
        function A() {
            u || (n.state.value[e] = r ? r() : {});
            const p = hr(n.state.value[e]);
            return Wt(p, i, Object.keys(s || {}).reduce((a,l)=>(a[l] = un(I(()=>{
                Vr(n);
                const d = n._s.get(e);
                return s[l].call(d, d)
            }
            )),
            a), {}))
        }
        return c = Ku(e, A, t, n, o, !0),
        c
    }
    function Ku(e, t, n={}, o, r, i) {
        let s;
        const u = Wt({
            actions: {}
        }, n)
          , c = {
            deep: !0
        };
        let A, p, a = un([]), l = un([]), d;
        const f = o.state.value[e];
        !i && !f && (o.state.value[e] = {}),
        G({});
        let m;
        function v(Q) {
            let C;
            A = p = !1,
            typeof Q == "function" ? (Q(o.state.value[e]),
            C = {
                type: ko.patchFunction,
                storeId: e,
                events: d
            }) : (Ei(o.state.value[e], Q),
            C = {
                type: ko.patchObject,
                payload: Q,
                storeId: e,
                events: d
            });
            const x = m = Symbol();
            rt().then(()=>{
                m === x && (A = !0)
            }
            ),
            p = !0,
            Pn(a, C, o.state.value[e])
        }
        const g = i ? function() {
            const {state: Q} = n
              , C = Q ? Q() : {};
            this.$patch(x=>{
                Wt(x, C)
            }
            )
        }
        : zu;
        function h() {
            s.stop(),
            a = [],
            l = [],
            o._s.delete(e)
        }
        function b(Q, C) {
            return function() {
                Vr(o);
                const x = Array.from(arguments)
                  , V = []
                  , D = [];
                function O(W) {
                    V.push(W)
                }
                function Z(W) {
                    D.push(W)
                }
                Pn(l, {
                    args: x,
                    name: Q,
                    store: T,
                    after: O,
                    onError: Z
                });
                let ne;
                try {
                    ne = C.apply(this && this.$id === e ? this : T, x)
                } catch (W) {
                    throw Pn(D, W),
                    W
                }
                return ne instanceof Promise ? ne.then(W=>(Pn(V, W),
                W)).catch(W=>(Pn(D, W),
                Promise.reject(W))) : (Pn(V, ne),
                ne)
            }
        }
        const E = {
            _p: o,
            $id: e,
            $onAction: Hu.bind(null, l),
            $patch: v,
            $reset: g,
            $subscribe(Q, C={}) {
                const x = Hu(a, Q, C.detached, ()=>V())
                  , V = s.run(()=>me(()=>o.state.value[e], D=>{
                    (C.flush === "sync" ? p : A) && Q({
                        storeId: e,
                        type: ko.direct,
                        events: d
                    }, D)
                }
                , Wt({}, c, C)));
                return x
            },
            $dispose: h
        }
          , T = Ve(E);
        o._s.set(e, T);
        const B = o._e.run(()=>(s = Ao(),
        s.run(()=>t())));
        for (const Q in B) {
            const C = B[Q];
            if (Ce(C) && !Fm(C) || Yt(C))
                i || (f && Vm(C) && (Ce(C) ? C.value = f[Q] : Ei(C, f[Q])),
                o.state.value[e][Q] = C);
            else if (typeof C == "function") {
                const x = b(Q, C);
                B[Q] = x,
                u.actions[Q] = C
            }
        }
        return Wt(T, B),
        Wt(ve(T), B),
        Object.defineProperty(T, "$state", {
            get: ()=>o.state.value[e],
            set: Q=>{
                v(C=>{
                    Wt(C, Q)
                }
                )
            }
        }),
        o._p.forEach(Q=>{
            Wt(T, s.run(()=>Q({
                store: T,
                app: o._a,
                pinia: o,
                options: u
            })))
        }
        ),
        f && i && n.hydrate && n.hydrate(T.$state, f),
        A = !0,
        p = !0,
        T
    }
    function Ii(e, t, n) {
        let o, r;
        const i = typeof t == "function";
        typeof e == "string" ? (o = e,
        r = i ? n : t) : (r = e,
        o = e.id);
        function s(u, c) {
            const A = kr();
            return u = u || A && pe(Yu, null),
            u && Vr(u),
            u = qu,
            u._s.has(o) || (i ? Ku(o, t, r, u) : Rm(o, r, u)),
            u._s.get(o)
        }
        return s.$id = o,
        s
    }
    let Fr;
    On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Fr = {},
    function(e) {
        (function() {
            var t = function() {
                this.init()
            };
            t.prototype = {
                init: function() {
                    var a = this || n;
                    return a._counter = 1e3,
                    a._html5AudioPool = [],
                    a.html5PoolSize = 10,
                    a._codecs = {},
                    a._howls = [],
                    a._muted = !1,
                    a._volume = 1,
                    a._canPlayEvent = "canplaythrough",
                    a._navigator = typeof window < "u" && window.navigator ? window.navigator : null,
                    a.masterGain = null,
                    a.noAudio = !1,
                    a.usingWebAudio = !0,
                    a.autoSuspend = !0,
                    a.ctx = null,
                    a.autoUnlock = !0,
                    a._setup(),
                    a
                },
                volume: function(a) {
                    var l = this || n;
                    if (a = parseFloat(a),
                    l.ctx || p(),
                    typeof a < "u" && a >= 0 && a <= 1) {
                        if (l._volume = a,
                        l._muted)
                            return l;
                        l.usingWebAudio && l.masterGain.gain.setValueAtTime(a, n.ctx.currentTime);
                        for (var d = 0; d < l._howls.length; d++)
                            if (!l._howls[d]._webAudio)
                                for (var f = l._howls[d]._getSoundIds(), m = 0; m < f.length; m++) {
                                    var v = l._howls[d]._soundById(f[m]);
                                    v && v._node && (v._node.volume = v._volume * a)
                                }
                        return l
                    }
                    return l._volume
                },
                mute: function(a) {
                    var l = this || n;
                    l.ctx || p(),
                    l._muted = a,
                    l.usingWebAudio && l.masterGain.gain.setValueAtTime(a ? 0 : l._volume, n.ctx.currentTime);
                    for (var d = 0; d < l._howls.length; d++)
                        if (!l._howls[d]._webAudio)
                            for (var f = l._howls[d]._getSoundIds(), m = 0; m < f.length; m++) {
                                var v = l._howls[d]._soundById(f[m]);
                                v && v._node && (v._node.muted = a ? !0 : v._muted)
                            }
                    return l
                },
                stop: function() {
                    for (var a = this || n, l = 0; l < a._howls.length; l++)
                        a._howls[l].stop();
                    return a
                },
                unload: function() {
                    for (var a = this || n, l = a._howls.length - 1; l >= 0; l--)
                        a._howls[l].unload();
                    return a.usingWebAudio && a.ctx && typeof a.ctx.close < "u" && (a.ctx.close(),
                    a.ctx = null,
                    p()),
                    a
                },
                codecs: function(a) {
                    return (this || n)._codecs[a.replace(/^x-/, "")]
                },
                _setup: function() {
                    var a = this || n;
                    if (a.state = a.ctx && a.ctx.state || "suspended",
                    a._autoSuspend(),
                    !a.usingWebAudio)
                        if (typeof Audio < "u")
                            try {
                                var l = new Audio;
                                typeof l.oncanplaythrough > "u" && (a._canPlayEvent = "canplay")
                            } catch {
                                a.noAudio = !0
                            }
                        else
                            a.noAudio = !0;
                    try {
                        var l = new Audio;
                        l.muted && (a.noAudio = !0)
                    } catch {}
                    return a.noAudio || a._setupCodecs(),
                    a
                },
                _setupCodecs: function() {
                    var a = this || n
                      , l = null;
                    try {
                        l = typeof Audio < "u" ? new Audio : null
                    } catch {
                        return a
                    }
                    if (!l || typeof l.canPlayType != "function")
                        return a;
                    var d = l.canPlayType("audio/mpeg;").replace(/^no$/, "")
                      , f = a._navigator ? a._navigator.userAgent : ""
                      , m = f.match(/OPR\/([0-6].)/g)
                      , v = m && parseInt(m[0].split("/")[1], 10) < 33
                      , g = f.indexOf("Safari") !== -1 && f.indexOf("Chrome") === -1
                      , h = f.match(/Version\/(.*?) /)
                      , b = g && h && parseInt(h[1], 10) < 15;
                    return a._codecs = {
                        mp3: !!(!v && (d || l.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                        mpeg: !!d,
                        opus: !!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                        ogg: !!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        oga: !!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        wav: !!(l.canPlayType('audio/wav; codecs="1"') || l.canPlayType("audio/wav")).replace(/^no$/, ""),
                        aac: !!l.canPlayType("audio/aac;").replace(/^no$/, ""),
                        caf: !!l.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                        m4a: !!(l.canPlayType("audio/x-m4a;") || l.canPlayType("audio/m4a;") || l.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        m4b: !!(l.canPlayType("audio/x-m4b;") || l.canPlayType("audio/m4b;") || l.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        mp4: !!(l.canPlayType("audio/x-mp4;") || l.canPlayType("audio/mp4;") || l.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        weba: !!(!b && l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                        webm: !!(!b && l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                        dolby: !!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                        flac: !!(l.canPlayType("audio/x-flac;") || l.canPlayType("audio/flac;")).replace(/^no$/, "")
                    },
                    a
                },
                _unlockAudio: function() {
                    var a = this || n;
                    if (!(a._audioUnlocked || !a.ctx)) {
                        a._audioUnlocked = !1,
                        a.autoUnlock = !1,
                        !a._mobileUnloaded && a.ctx.sampleRate !== 44100 && (a._mobileUnloaded = !0,
                        a.unload()),
                        a._scratchBuffer = a.ctx.createBuffer(1, 1, 22050);
                        var l = function(d) {
                            for (; a._html5AudioPool.length < a.html5PoolSize; )
                                try {
                                    var f = new Audio;
                                    f._unlocked = !0,
                                    a._releaseHtml5Audio(f)
                                } catch {
                                    a.noAudio = !0;
                                    break
                                }
                            for (var m = 0; m < a._howls.length; m++)
                                if (!a._howls[m]._webAudio)
                                    for (var v = a._howls[m]._getSoundIds(), g = 0; g < v.length; g++) {
                                        var h = a._howls[m]._soundById(v[g]);
                                        h && h._node && !h._node._unlocked && (h._node._unlocked = !0,
                                        h._node.load())
                                    }
                            a._autoResume();
                            var b = a.ctx.createBufferSource();
                            b.buffer = a._scratchBuffer,
                            b.connect(a.ctx.destination),
                            typeof b.start > "u" ? b.noteOn(0) : b.start(0),
                            typeof a.ctx.resume == "function" && a.ctx.resume(),
                            b.onended = function() {
                                b.disconnect(0),
                                a._audioUnlocked = !0,
                                document.removeEventListener("touchstart", l, !0),
                                document.removeEventListener("touchend", l, !0),
                                document.removeEventListener("click", l, !0),
                                document.removeEventListener("keydown", l, !0);
                                for (var E = 0; E < a._howls.length; E++)
                                    a._howls[E]._emit("unlock")
                            }
                        };
                        return document.addEventListener("touchstart", l, !0),
                        document.addEventListener("touchend", l, !0),
                        document.addEventListener("click", l, !0),
                        document.addEventListener("keydown", l, !0),
                        a
                    }
                },
                _obtainHtml5Audio: function() {
                    var a = this || n;
                    if (a._html5AudioPool.length)
                        return a._html5AudioPool.pop();
                    var l = new Audio().play();
                    return l && typeof Promise < "u" && (l instanceof Promise || typeof l.then == "function") && l.catch(function() {}),
                    new Audio
                },
                _releaseHtml5Audio: function(a) {
                    var l = this || n;
                    return a._unlocked && l._html5AudioPool.push(a),
                    l
                },
                _autoSuspend: function() {
                    var a = this;
                    if (!(!a.autoSuspend || !a.ctx || typeof a.ctx.suspend > "u" || !n.usingWebAudio)) {
                        for (var l = 0; l < a._howls.length; l++)
                            if (a._howls[l]._webAudio) {
                                for (var d = 0; d < a._howls[l]._sounds.length; d++)
                                    if (!a._howls[l]._sounds[d]._paused)
                                        return a
                            }
                        return a._suspendTimer && clearTimeout(a._suspendTimer),
                        a._suspendTimer = setTimeout(function() {
                            if (a.autoSuspend) {
                                a._suspendTimer = null,
                                a.state = "suspending";
                                var f = function() {
                                    a.state = "suspended",
                                    a._resumeAfterSuspend && (delete a._resumeAfterSuspend,
                                    a._autoResume())
                                };
                                a.ctx.suspend().then(f, f)
                            }
                        }, 3e4),
                        a
                    }
                },
                _autoResume: function() {
                    var a = this;
                    if (!(!a.ctx || typeof a.ctx.resume > "u" || !n.usingWebAudio))
                        return a.state === "running" && a.ctx.state !== "interrupted" && a._suspendTimer ? (clearTimeout(a._suspendTimer),
                        a._suspendTimer = null) : a.state === "suspended" || a.state === "running" && a.ctx.state === "interrupted" ? (a.ctx.resume().then(function() {
                            a.state = "running";
                            for (var l = 0; l < a._howls.length; l++)
                                a._howls[l]._emit("resume")
                        }),
                        a._suspendTimer && (clearTimeout(a._suspendTimer),
                        a._suspendTimer = null)) : a.state === "suspending" && (a._resumeAfterSuspend = !0),
                        a
                }
            };
            var n = new t
              , o = function(a) {
                var l = this;
                !a.src || a.src.length === 0 || l.init(a)
            };
            o.prototype = {
                init: function(a) {
                    var l = this;
                    return n.ctx || p(),
                    l._autoplay = a.autoplay || !1,
                    l._format = typeof a.format != "string" ? a.format : [a.format],
                    l._html5 = a.html5 || !1,
                    l._muted = a.mute || !1,
                    l._loop = a.loop || !1,
                    l._pool = a.pool || 5,
                    l._preload = typeof a.preload == "boolean" || a.preload === "metadata" ? a.preload : !0,
                    l._rate = a.rate || 1,
                    l._sprite = a.sprite || {},
                    l._src = typeof a.src != "string" ? a.src : [a.src],
                    l._volume = a.volume !== void 0 ? a.volume : 1,
                    l._xhr = {
                        method: a.xhr && a.xhr.method ? a.xhr.method : "GET",
                        headers: a.xhr && a.xhr.headers ? a.xhr.headers : null,
                        withCredentials: a.xhr && a.xhr.withCredentials ? a.xhr.withCredentials : !1
                    },
                    l._duration = 0,
                    l._state = "unloaded",
                    l._sounds = [],
                    l._endTimers = {},
                    l._queue = [],
                    l._playLock = !1,
                    l._onend = a.onend ? [{
                        fn: a.onend
                    }] : [],
                    l._onfade = a.onfade ? [{
                        fn: a.onfade
                    }] : [],
                    l._onload = a.onload ? [{
                        fn: a.onload
                    }] : [],
                    l._onloaderror = a.onloaderror ? [{
                        fn: a.onloaderror
                    }] : [],
                    l._onplayerror = a.onplayerror ? [{
                        fn: a.onplayerror
                    }] : [],
                    l._onpause = a.onpause ? [{
                        fn: a.onpause
                    }] : [],
                    l._onplay = a.onplay ? [{
                        fn: a.onplay
                    }] : [],
                    l._onstop = a.onstop ? [{
                        fn: a.onstop
                    }] : [],
                    l._onmute = a.onmute ? [{
                        fn: a.onmute
                    }] : [],
                    l._onvolume = a.onvolume ? [{
                        fn: a.onvolume
                    }] : [],
                    l._onrate = a.onrate ? [{
                        fn: a.onrate
                    }] : [],
                    l._onseek = a.onseek ? [{
                        fn: a.onseek
                    }] : [],
                    l._onunlock = a.onunlock ? [{
                        fn: a.onunlock
                    }] : [],
                    l._onresume = [],
                    l._webAudio = n.usingWebAudio && !l._html5,
                    typeof n.ctx < "u" && n.ctx && n.autoUnlock && n._unlockAudio(),
                    n._howls.push(l),
                    l._autoplay && l._queue.push({
                        event: "play",
                        action: function() {
                            l.play()
                        }
                    }),
                    l._preload && l._preload !== "none" && l.load(),
                    l
                },
                load: function() {
                    var a = this
                      , l = null;
                    if (n.noAudio) {
                        a._emit("loaderror", null, "No audio support.");
                        return
                    }
                    typeof a._src == "string" && (a._src = [a._src]);
                    for (var d = 0; d < a._src.length; d++) {
                        var f, m;
                        if (a._format && a._format[d])
                            f = a._format[d];
                        else {
                            if (m = a._src[d],
                            typeof m != "string") {
                                a._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                continue
                            }
                            f = /^data:audio\/([^;,]+);/i.exec(m),
                            f || (f = /\.([^.]+)$/.exec(m.split("?", 1)[0])),
                            f && (f = f[1].toLowerCase())
                        }
                        if (f && n.codecs(f)) {
                            l = a._src[d];
                            break
                        }
                    }
                    if (!l) {
                        a._emit("loaderror", null, "No codec support for selected audio sources.");
                        return
                    }
                    return a._src = l,
                    a._state = "loading",
                    window.location.protocol === "https:" && l.slice(0, 5) === "http:" && (a._html5 = !0,
                    a._webAudio = !1),
                    new r(a),
                    a._webAudio && s(a),
                    a
                },
                play: function(a, l) {
                    var d = this
                      , f = null;
                    if (typeof a == "number")
                        f = a,
                        a = null;
                    else {
                        if (typeof a == "string" && d._state === "loaded" && !d._sprite[a])
                            return null;
                        if (typeof a > "u" && (a = "__default",
                        !d._playLock)) {
                            for (var m = 0, v = 0; v < d._sounds.length; v++)
                                d._sounds[v]._paused && !d._sounds[v]._ended && (m++,
                                f = d._sounds[v]._id);
                            m === 1 ? a = null : f = null
                        }
                    }
                    var g = f ? d._soundById(f) : d._inactiveSound();
                    if (!g)
                        return null;
                    if (f && !a && (a = g._sprite || "__default"),
                    d._state !== "loaded") {
                        g._sprite = a,
                        g._ended = !1;
                        var h = g._id;
                        return d._queue.push({
                            event: "play",
                            action: function() {
                                d.play(h)
                            }
                        }),
                        h
                    }
                    if (f && !g._paused)
                        return l || d._loadQueue("play"),
                        g._id;
                    d._webAudio && n._autoResume();
                    var b = Math.max(0, g._seek > 0 ? g._seek : d._sprite[a][0] / 1e3)
                      , E = Math.max(0, (d._sprite[a][0] + d._sprite[a][1]) / 1e3 - b)
                      , T = E * 1e3 / Math.abs(g._rate)
                      , B = d._sprite[a][0] / 1e3
                      , Q = (d._sprite[a][0] + d._sprite[a][1]) / 1e3;
                    g._sprite = a,
                    g._ended = !1;
                    var C = function() {
                        g._paused = !1,
                        g._seek = b,
                        g._start = B,
                        g._stop = Q,
                        g._loop = !!(g._loop || d._sprite[a][2])
                    };
                    if (b >= Q) {
                        d._ended(g);
                        return
                    }
                    var x = g._node;
                    if (d._webAudio) {
                        var V = function() {
                            d._playLock = !1,
                            C(),
                            d._refreshBuffer(g);
                            var ne = g._muted || d._muted ? 0 : g._volume;
                            x.gain.setValueAtTime(ne, n.ctx.currentTime),
                            g._playStart = n.ctx.currentTime,
                            typeof x.bufferSource.start > "u" ? g._loop ? x.bufferSource.noteGrainOn(0, b, 86400) : x.bufferSource.noteGrainOn(0, b, E) : g._loop ? x.bufferSource.start(0, b, 86400) : x.bufferSource.start(0, b, E),
                            T !== 1 / 0 && (d._endTimers[g._id] = setTimeout(d._ended.bind(d, g), T)),
                            l || setTimeout(function() {
                                d._emit("play", g._id),
                                d._loadQueue()
                            }, 0)
                        };
                        n.state === "running" && n.ctx.state !== "interrupted" ? V() : (d._playLock = !0,
                        d.once("resume", V),
                        d._clearTimer(g._id))
                    } else {
                        var D = function() {
                            x.currentTime = b,
                            x.muted = g._muted || d._muted || n._muted || x.muted,
                            x.volume = g._volume * n.volume(),
                            x.playbackRate = g._rate;
                            try {
                                var ne = x.play();
                                if (ne && typeof Promise < "u" && (ne instanceof Promise || typeof ne.then == "function") ? (d._playLock = !0,
                                C(),
                                ne.then(function() {
                                    d._playLock = !1,
                                    x._unlocked = !0,
                                    l ? d._loadQueue() : d._emit("play", g._id)
                                }).catch(function() {
                                    d._playLock = !1,
                                    d._emit("playerror", g._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),
                                    g._ended = !0,
                                    g._paused = !0
                                })) : l || (d._playLock = !1,
                                C(),
                                d._emit("play", g._id)),
                                x.playbackRate = g._rate,
                                x.paused) {
                                    d._emit("playerror", g._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                    return
                                }
                                a !== "__default" || g._loop ? d._endTimers[g._id] = setTimeout(d._ended.bind(d, g), T) : (d._endTimers[g._id] = function() {
                                    d._ended(g),
                                    x.removeEventListener("ended", d._endTimers[g._id], !1)
                                }
                                ,
                                x.addEventListener("ended", d._endTimers[g._id], !1))
                            } catch (W) {
                                d._emit("playerror", g._id, W)
                            }
                        };
                        x.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (x.src = d._src,
                        x.load());
                        var O = window && window.ejecta || !x.readyState && n._navigator.isCocoonJS;
                        if (x.readyState >= 3 || O)
                            D();
                        else {
                            d._playLock = !0,
                            d._state = "loading";
                            var Z = function() {
                                d._state = "loaded",
                                D(),
                                x.removeEventListener(n._canPlayEvent, Z, !1)
                            };
                            x.addEventListener(n._canPlayEvent, Z, !1),
                            d._clearTimer(g._id)
                        }
                    }
                    return g._id
                },
                pause: function(a) {
                    var l = this;
                    if (l._state !== "loaded" || l._playLock)
                        return l._queue.push({
                            event: "pause",
                            action: function() {
                                l.pause(a)
                            }
                        }),
                        l;
                    for (var d = l._getSoundIds(a), f = 0; f < d.length; f++) {
                        l._clearTimer(d[f]);
                        var m = l._soundById(d[f]);
                        if (m && !m._paused && (m._seek = l.seek(d[f]),
                        m._rateSeek = 0,
                        m._paused = !0,
                        l._stopFade(d[f]),
                        m._node))
                            if (l._webAudio) {
                                if (!m._node.bufferSource)
                                    continue;
                                typeof m._node.bufferSource.stop > "u" ? m._node.bufferSource.noteOff(0) : m._node.bufferSource.stop(0),
                                l._cleanBuffer(m._node)
                            } else
                                (!isNaN(m._node.duration) || m._node.duration === 1 / 0) && m._node.pause();
                        arguments[1] || l._emit("pause", m ? m._id : null)
                    }
                    return l
                },
                stop: function(a, l) {
                    var d = this;
                    if (d._state !== "loaded" || d._playLock)
                        return d._queue.push({
                            event: "stop",
                            action: function() {
                                d.stop(a)
                            }
                        }),
                        d;
                    for (var f = d._getSoundIds(a), m = 0; m < f.length; m++) {
                        d._clearTimer(f[m]);
                        var v = d._soundById(f[m]);
                        v && (v._seek = v._start || 0,
                        v._rateSeek = 0,
                        v._paused = !0,
                        v._ended = !0,
                        d._stopFade(f[m]),
                        v._node && (d._webAudio ? v._node.bufferSource && (typeof v._node.bufferSource.stop > "u" ? v._node.bufferSource.noteOff(0) : v._node.bufferSource.stop(0),
                        d._cleanBuffer(v._node)) : (!isNaN(v._node.duration) || v._node.duration === 1 / 0) && (v._node.currentTime = v._start || 0,
                        v._node.pause(),
                        v._node.duration === 1 / 0 && d._clearSound(v._node))),
                        l || d._emit("stop", v._id))
                    }
                    return d
                },
                mute: function(a, l) {
                    var d = this;
                    if (d._state !== "loaded" || d._playLock)
                        return d._queue.push({
                            event: "mute",
                            action: function() {
                                d.mute(a, l)
                            }
                        }),
                        d;
                    if (typeof l > "u")
                        if (typeof a == "boolean")
                            d._muted = a;
                        else
                            return d._muted;
                    for (var f = d._getSoundIds(l), m = 0; m < f.length; m++) {
                        var v = d._soundById(f[m]);
                        v && (v._muted = a,
                        v._interval && d._stopFade(v._id),
                        d._webAudio && v._node ? v._node.gain.setValueAtTime(a ? 0 : v._volume, n.ctx.currentTime) : v._node && (v._node.muted = n._muted ? !0 : a),
                        d._emit("mute", v._id))
                    }
                    return d
                },
                volume: function() {
                    var a = this, l = arguments, d, f;
                    if (l.length === 0)
                        return a._volume;
                    if (l.length === 1 || l.length === 2 && typeof l[1] > "u") {
                        var m = a._getSoundIds()
                          , v = m.indexOf(l[0]);
                        v >= 0 ? f = parseInt(l[0], 10) : d = parseFloat(l[0])
                    } else
                        l.length >= 2 && (d = parseFloat(l[0]),
                        f = parseInt(l[1], 10));
                    var g;
                    if (typeof d < "u" && d >= 0 && d <= 1) {
                        if (a._state !== "loaded" || a._playLock)
                            return a._queue.push({
                                event: "volume",
                                action: function() {
                                    a.volume.apply(a, l)
                                }
                            }),
                            a;
                        typeof f > "u" && (a._volume = d),
                        f = a._getSoundIds(f);
                        for (var h = 0; h < f.length; h++)
                            g = a._soundById(f[h]),
                            g && (g._volume = d,
                            l[2] || a._stopFade(f[h]),
                            a._webAudio && g._node && !g._muted ? g._node.gain.setValueAtTime(d, n.ctx.currentTime) : g._node && !g._muted && (g._node.volume = d * n.volume()),
                            a._emit("volume", g._id))
                    } else
                        return g = f ? a._soundById(f) : a._sounds[0],
                        g ? g._volume : 0;
                    return a
                },
                fade: function(a, l, d, f) {
                    var m = this;
                    if (m._state !== "loaded" || m._playLock)
                        return m._queue.push({
                            event: "fade",
                            action: function() {
                                m.fade(a, l, d, f)
                            }
                        }),
                        m;
                    a = Math.min(Math.max(0, parseFloat(a)), 1),
                    l = Math.min(Math.max(0, parseFloat(l)), 1),
                    d = parseFloat(d),
                    m.volume(a, f);
                    for (var v = m._getSoundIds(f), g = 0; g < v.length; g++) {
                        var h = m._soundById(v[g]);
                        if (h) {
                            if (f || m._stopFade(v[g]),
                            m._webAudio && !h._muted) {
                                var b = n.ctx.currentTime
                                  , E = b + d / 1e3;
                                h._volume = a,
                                h._node.gain.setValueAtTime(a, b),
                                h._node.gain.linearRampToValueAtTime(l, E)
                            }
                            m._startFadeInterval(h, a, l, d, v[g], typeof f > "u")
                        }
                    }
                    return m
                },
                _startFadeInterval: function(a, l, d, f, m, v) {
                    var g = this
                      , h = l
                      , b = d - l
                      , E = Math.abs(b / .01)
                      , T = Math.max(4, E > 0 ? f / E : f)
                      , B = Date.now();
                    a._fadeTo = d,
                    a._interval = setInterval(function() {
                        var Q = (Date.now() - B) / f;
                        B = Date.now(),
                        h += b * Q,
                        h = Math.round(h * 100) / 100,
                        b < 0 ? h = Math.max(d, h) : h = Math.min(d, h),
                        g._webAudio ? a._volume = h : g.volume(h, a._id, !0),
                        v && (g._volume = h),
                        (d < l && h <= d || d > l && h >= d) && (clearInterval(a._interval),
                        a._interval = null,
                        a._fadeTo = null,
                        g.volume(d, a._id),
                        g._emit("fade", a._id))
                    }, T)
                },
                _stopFade: function(a) {
                    var l = this
                      , d = l._soundById(a);
                    return d && d._interval && (l._webAudio && d._node.gain.cancelScheduledValues(n.ctx.currentTime),
                    clearInterval(d._interval),
                    d._interval = null,
                    l.volume(d._fadeTo, a),
                    d._fadeTo = null,
                    l._emit("fade", a)),
                    l
                },
                loop: function() {
                    var a = this, l = arguments, d, f, m;
                    if (l.length === 0)
                        return a._loop;
                    if (l.length === 1)
                        if (typeof l[0] == "boolean")
                            d = l[0],
                            a._loop = d;
                        else
                            return m = a._soundById(parseInt(l[0], 10)),
                            m ? m._loop : !1;
                    else
                        l.length === 2 && (d = l[0],
                        f = parseInt(l[1], 10));
                    for (var v = a._getSoundIds(f), g = 0; g < v.length; g++)
                        m = a._soundById(v[g]),
                        m && (m._loop = d,
                        a._webAudio && m._node && m._node.bufferSource && (m._node.bufferSource.loop = d,
                        d && (m._node.bufferSource.loopStart = m._start || 0,
                        m._node.bufferSource.loopEnd = m._stop,
                        a.playing(v[g]) && (a.pause(v[g], !0),
                        a.play(v[g], !0)))));
                    return a
                },
                rate: function() {
                    var a = this, l = arguments, d, f;
                    if (l.length === 0)
                        f = a._sounds[0]._id;
                    else if (l.length === 1) {
                        var m = a._getSoundIds()
                          , v = m.indexOf(l[0]);
                        v >= 0 ? f = parseInt(l[0], 10) : d = parseFloat(l[0])
                    } else
                        l.length === 2 && (d = parseFloat(l[0]),
                        f = parseInt(l[1], 10));
                    var g;
                    if (typeof d == "number") {
                        if (a._state !== "loaded" || a._playLock)
                            return a._queue.push({
                                event: "rate",
                                action: function() {
                                    a.rate.apply(a, l)
                                }
                            }),
                            a;
                        typeof f > "u" && (a._rate = d),
                        f = a._getSoundIds(f);
                        for (var h = 0; h < f.length; h++)
                            if (g = a._soundById(f[h]),
                            g) {
                                a.playing(f[h]) && (g._rateSeek = a.seek(f[h]),
                                g._playStart = a._webAudio ? n.ctx.currentTime : g._playStart),
                                g._rate = d,
                                a._webAudio && g._node && g._node.bufferSource ? g._node.bufferSource.playbackRate.setValueAtTime(d, n.ctx.currentTime) : g._node && (g._node.playbackRate = d);
                                var b = a.seek(f[h])
                                  , E = (a._sprite[g._sprite][0] + a._sprite[g._sprite][1]) / 1e3 - b
                                  , T = E * 1e3 / Math.abs(g._rate);
                                (a._endTimers[f[h]] || !g._paused) && (a._clearTimer(f[h]),
                                a._endTimers[f[h]] = setTimeout(a._ended.bind(a, g), T)),
                                a._emit("rate", g._id)
                            }
                    } else
                        return g = a._soundById(f),
                        g ? g._rate : a._rate;
                    return a
                },
                seek: function() {
                    var a = this, l = arguments, d, f;
                    if (l.length === 0)
                        a._sounds.length && (f = a._sounds[0]._id);
                    else if (l.length === 1) {
                        var m = a._getSoundIds()
                          , v = m.indexOf(l[0]);
                        v >= 0 ? f = parseInt(l[0], 10) : a._sounds.length && (f = a._sounds[0]._id,
                        d = parseFloat(l[0]))
                    } else
                        l.length === 2 && (d = parseFloat(l[0]),
                        f = parseInt(l[1], 10));
                    if (typeof f > "u")
                        return 0;
                    if (typeof d == "number" && (a._state !== "loaded" || a._playLock))
                        return a._queue.push({
                            event: "seek",
                            action: function() {
                                a.seek.apply(a, l)
                            }
                        }),
                        a;
                    var g = a._soundById(f);
                    if (g)
                        if (typeof d == "number" && d >= 0) {
                            var h = a.playing(f);
                            h && a.pause(f, !0),
                            g._seek = d,
                            g._ended = !1,
                            a._clearTimer(f),
                            !a._webAudio && g._node && !isNaN(g._node.duration) && (g._node.currentTime = d);
                            var b = function() {
                                h && a.play(f, !0),
                                a._emit("seek", f)
                            };
                            if (h && !a._webAudio) {
                                var E = function() {
                                    a._playLock ? setTimeout(E, 0) : b()
                                };
                                setTimeout(E, 0)
                            } else
                                b()
                        } else if (a._webAudio) {
                            var T = a.playing(f) ? n.ctx.currentTime - g._playStart : 0
                              , B = g._rateSeek ? g._rateSeek - g._seek : 0;
                            return g._seek + (B + T * Math.abs(g._rate))
                        } else
                            return g._node.currentTime;
                    return a
                },
                playing: function(a) {
                    var l = this;
                    if (typeof a == "number") {
                        var d = l._soundById(a);
                        return d ? !d._paused : !1
                    }
                    for (var f = 0; f < l._sounds.length; f++)
                        if (!l._sounds[f]._paused)
                            return !0;
                    return !1
                },
                duration: function(a) {
                    var l = this
                      , d = l._duration
                      , f = l._soundById(a);
                    return f && (d = l._sprite[f._sprite][1] / 1e3),
                    d
                },
                state: function() {
                    return this._state
                },
                unload: function() {
                    for (var a = this, l = a._sounds, d = 0; d < l.length; d++)
                        l[d]._paused || a.stop(l[d]._id),
                        a._webAudio || (a._clearSound(l[d]._node),
                        l[d]._node.removeEventListener("error", l[d]._errorFn, !1),
                        l[d]._node.removeEventListener(n._canPlayEvent, l[d]._loadFn, !1),
                        l[d]._node.removeEventListener("ended", l[d]._endFn, !1),
                        n._releaseHtml5Audio(l[d]._node)),
                        delete l[d]._node,
                        a._clearTimer(l[d]._id);
                    var f = n._howls.indexOf(a);
                    f >= 0 && n._howls.splice(f, 1);
                    var m = !0;
                    for (d = 0; d < n._howls.length; d++)
                        if (n._howls[d]._src === a._src || a._src.indexOf(n._howls[d]._src) >= 0) {
                            m = !1;
                            break
                        }
                    return i && m && delete i[a._src],
                    n.noAudio = !1,
                    a._state = "unloaded",
                    a._sounds = [],
                    a = null,
                    null
                },
                on: function(a, l, d, f) {
                    var m = this
                      , v = m["_on" + a];
                    return typeof l == "function" && v.push(f ? {
                        id: d,
                        fn: l,
                        once: f
                    } : {
                        id: d,
                        fn: l
                    }),
                    m
                },
                off: function(a, l, d) {
                    var f = this
                      , m = f["_on" + a]
                      , v = 0;
                    if (typeof l == "number" && (d = l,
                    l = null),
                    l || d)
                        for (v = 0; v < m.length; v++) {
                            var g = d === m[v].id;
                            if (l === m[v].fn && g || !l && g) {
                                m.splice(v, 1);
                                break
                            }
                        }
                    else if (a)
                        f["_on" + a] = [];
                    else {
                        var h = Object.keys(f);
                        for (v = 0; v < h.length; v++)
                            h[v].indexOf("_on") === 0 && Array.isArray(f[h[v]]) && (f[h[v]] = [])
                    }
                    return f
                },
                once: function(a, l, d) {
                    var f = this;
                    return f.on(a, l, d, 1),
                    f
                },
                _emit: function(a, l, d) {
                    for (var f = this, m = f["_on" + a], v = m.length - 1; v >= 0; v--)
                        (!m[v].id || m[v].id === l || a === "load") && (setTimeout(function(g) {
                            g.call(this, l, d)
                        }
                        .bind(f, m[v].fn), 0),
                        m[v].once && f.off(a, m[v].fn, m[v].id));
                    return f._loadQueue(a),
                    f
                },
                _loadQueue: function(a) {
                    var l = this;
                    if (l._queue.length > 0) {
                        var d = l._queue[0];
                        d.event === a && (l._queue.shift(),
                        l._loadQueue()),
                        a || d.action()
                    }
                    return l
                },
                _ended: function(a) {
                    var l = this
                      , d = a._sprite;
                    if (!l._webAudio && a._node && !a._node.paused && !a._node.ended && a._node.currentTime < a._stop)
                        return setTimeout(l._ended.bind(l, a), 100),
                        l;
                    var f = !!(a._loop || l._sprite[d][2]);
                    if (l._emit("end", a._id),
                    !l._webAudio && f && l.stop(a._id, !0).play(a._id),
                    l._webAudio && f) {
                        l._emit("play", a._id),
                        a._seek = a._start || 0,
                        a._rateSeek = 0,
                        a._playStart = n.ctx.currentTime;
                        var m = (a._stop - a._start) * 1e3 / Math.abs(a._rate);
                        l._endTimers[a._id] = setTimeout(l._ended.bind(l, a), m)
                    }
                    return l._webAudio && !f && (a._paused = !0,
                    a._ended = !0,
                    a._seek = a._start || 0,
                    a._rateSeek = 0,
                    l._clearTimer(a._id),
                    l._cleanBuffer(a._node),
                    n._autoSuspend()),
                    !l._webAudio && !f && l.stop(a._id, !0),
                    l
                },
                _clearTimer: function(a) {
                    var l = this;
                    if (l._endTimers[a]) {
                        if (typeof l._endTimers[a] != "function")
                            clearTimeout(l._endTimers[a]);
                        else {
                            var d = l._soundById(a);
                            d && d._node && d._node.removeEventListener("ended", l._endTimers[a], !1)
                        }
                        delete l._endTimers[a]
                    }
                    return l
                },
                _soundById: function(a) {
                    for (var l = this, d = 0; d < l._sounds.length; d++)
                        if (a === l._sounds[d]._id)
                            return l._sounds[d];
                    return null
                },
                _inactiveSound: function() {
                    var a = this;
                    a._drain();
                    for (var l = 0; l < a._sounds.length; l++)
                        if (a._sounds[l]._ended)
                            return a._sounds[l].reset();
                    return new r(a)
                },
                _drain: function() {
                    var a = this
                      , l = a._pool
                      , d = 0
                      , f = 0;
                    if (!(a._sounds.length < l)) {
                        for (f = 0; f < a._sounds.length; f++)
                            a._sounds[f]._ended && d++;
                        for (f = a._sounds.length - 1; f >= 0; f--) {
                            if (d <= l)
                                return;
                            a._sounds[f]._ended && (a._webAudio && a._sounds[f]._node && a._sounds[f]._node.disconnect(0),
                            a._sounds.splice(f, 1),
                            d--)
                        }
                    }
                },
                _getSoundIds: function(a) {
                    var l = this;
                    if (typeof a > "u") {
                        for (var d = [], f = 0; f < l._sounds.length; f++)
                            d.push(l._sounds[f]._id);
                        return d
                    } else
                        return [a]
                },
                _refreshBuffer: function(a) {
                    var l = this;
                    return a._node.bufferSource = n.ctx.createBufferSource(),
                    a._node.bufferSource.buffer = i[l._src],
                    a._panner ? a._node.bufferSource.connect(a._panner) : a._node.bufferSource.connect(a._node),
                    a._node.bufferSource.loop = a._loop,
                    a._loop && (a._node.bufferSource.loopStart = a._start || 0,
                    a._node.bufferSource.loopEnd = a._stop || 0),
                    a._node.bufferSource.playbackRate.setValueAtTime(a._rate, n.ctx.currentTime),
                    l
                },
                _cleanBuffer: function(a) {
                    var l = this
                      , d = n._navigator && n._navigator.vendor.indexOf("Apple") >= 0;
                    if (n._scratchBuffer && a.bufferSource && (a.bufferSource.onended = null,
                    a.bufferSource.disconnect(0),
                    d))
                        try {
                            a.bufferSource.buffer = n._scratchBuffer
                        } catch {}
                    return a.bufferSource = null,
                    l
                },
                _clearSound: function(a) {
                    var l = /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent);
                    l || (a.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                }
            };
            var r = function(a) {
                this._parent = a,
                this.init()
            };
            r.prototype = {
                init: function() {
                    var a = this
                      , l = a._parent;
                    return a._muted = l._muted,
                    a._loop = l._loop,
                    a._volume = l._volume,
                    a._rate = l._rate,
                    a._seek = 0,
                    a._paused = !0,
                    a._ended = !0,
                    a._sprite = "__default",
                    a._id = ++n._counter,
                    l._sounds.push(a),
                    a.create(),
                    a
                },
                create: function() {
                    var a = this
                      , l = a._parent
                      , d = n._muted || a._muted || a._parent._muted ? 0 : a._volume;
                    return l._webAudio ? (a._node = typeof n.ctx.createGain > "u" ? n.ctx.createGainNode() : n.ctx.createGain(),
                    a._node.gain.setValueAtTime(d, n.ctx.currentTime),
                    a._node.paused = !0,
                    a._node.connect(n.masterGain)) : n.noAudio || (a._node = n._obtainHtml5Audio(),
                    a._errorFn = a._errorListener.bind(a),
                    a._node.addEventListener("error", a._errorFn, !1),
                    a._loadFn = a._loadListener.bind(a),
                    a._node.addEventListener(n._canPlayEvent, a._loadFn, !1),
                    a._endFn = a._endListener.bind(a),
                    a._node.addEventListener("ended", a._endFn, !1),
                    a._node.src = l._src,
                    a._node.preload = l._preload === !0 ? "auto" : l._preload,
                    a._node.volume = d * n.volume(),
                    a._node.load()),
                    a
                },
                reset: function() {
                    var a = this
                      , l = a._parent;
                    return a._muted = l._muted,
                    a._loop = l._loop,
                    a._volume = l._volume,
                    a._rate = l._rate,
                    a._seek = 0,
                    a._rateSeek = 0,
                    a._paused = !0,
                    a._ended = !0,
                    a._sprite = "__default",
                    a._id = ++n._counter,
                    a
                },
                _errorListener: function() {
                    var a = this;
                    a._parent._emit("loaderror", a._id, a._node.error ? a._node.error.code : 0),
                    a._node.removeEventListener("error", a._errorFn, !1)
                },
                _loadListener: function() {
                    var a = this
                      , l = a._parent;
                    l._duration = Math.ceil(a._node.duration * 10) / 10,
                    Object.keys(l._sprite).length === 0 && (l._sprite = {
                        __default: [0, l._duration * 1e3]
                    }),
                    l._state !== "loaded" && (l._state = "loaded",
                    l._emit("load"),
                    l._loadQueue()),
                    a._node.removeEventListener(n._canPlayEvent, a._loadFn, !1)
                },
                _endListener: function() {
                    var a = this
                      , l = a._parent;
                    l._duration === 1 / 0 && (l._duration = Math.ceil(a._node.duration * 10) / 10,
                    l._sprite.__default[1] === 1 / 0 && (l._sprite.__default[1] = l._duration * 1e3),
                    l._ended(a)),
                    a._node.removeEventListener("ended", a._endFn, !1)
                }
            };
            var i = {}
              , s = function(a) {
                var l = a._src;
                if (i[l]) {
                    a._duration = i[l].duration,
                    A(a);
                    return
                }
                if (/^data:[^;]+;base64,/.test(l)) {
                    for (var d = atob(l.split(",")[1]), f = new Uint8Array(d.length), m = 0; m < d.length; ++m)
                        f[m] = d.charCodeAt(m);
                    c(f.buffer, a)
                } else {
                    var v = new XMLHttpRequest;
                    v.open(a._xhr.method, l, !0),
                    v.withCredentials = a._xhr.withCredentials,
                    v.responseType = "arraybuffer",
                    a._xhr.headers && Object.keys(a._xhr.headers).forEach(function(g) {
                        v.setRequestHeader(g, a._xhr.headers[g])
                    }),
                    v.onload = function() {
                        var g = (v.status + "")[0];
                        if (g !== "0" && g !== "2" && g !== "3") {
                            a._emit("loaderror", null, "Failed loading audio file with status: " + v.status + ".");
                            return
                        }
                        c(v.response, a)
                    }
                    ,
                    v.onerror = function() {
                        a._webAudio && (a._html5 = !0,
                        a._webAudio = !1,
                        a._sounds = [],
                        delete i[l],
                        a.load())
                    }
                    ,
                    u(v)
                }
            }
              , u = function(a) {
                try {
                    a.send()
                } catch {
                    a.onerror()
                }
            }
              , c = function(a, l) {
                var d = function() {
                    l._emit("loaderror", null, "Decoding audio data failed.")
                }
                  , f = function(m) {
                    m && l._sounds.length > 0 ? (i[l._src] = m,
                    A(l, m)) : d()
                };
                typeof Promise < "u" && n.ctx.decodeAudioData.length === 1 ? n.ctx.decodeAudioData(a).then(f).catch(d) : n.ctx.decodeAudioData(a, f, d)
            }
              , A = function(a, l) {
                l && !a._duration && (a._duration = l.duration),
                Object.keys(a._sprite).length === 0 && (a._sprite = {
                    __default: [0, a._duration * 1e3]
                }),
                a._state !== "loaded" && (a._state = "loaded",
                a._emit("load"),
                a._loadQueue())
            }
              , p = function() {
                if (n.usingWebAudio) {
                    try {
                        typeof AudioContext < "u" ? n.ctx = new AudioContext : typeof webkitAudioContext < "u" ? n.ctx = new webkitAudioContext : n.usingWebAudio = !1
                    } catch {
                        n.usingWebAudio = !1
                    }
                    n.ctx || (n.usingWebAudio = !1);
                    var a = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform)
                      , l = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
                      , d = l ? parseInt(l[1], 10) : null;
                    if (a && d && d < 9) {
                        var f = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
                        n._navigator && !f && (n.usingWebAudio = !1)
                    }
                    n.usingWebAudio && (n.masterGain = typeof n.ctx.createGain > "u" ? n.ctx.createGainNode() : n.ctx.createGain(),
                    n.masterGain.gain.setValueAtTime(n._muted ? 0 : n._volume, n.ctx.currentTime),
                    n.masterGain.connect(n.ctx.destination)),
                    n._setup()
                }
            };
            e.Howler = n,
            e.Howl = o,
            typeof On < "u" ? (On.HowlerGlobal = t,
            On.Howler = n,
            On.Howl = o,
            On.Sound = r) : typeof window < "u" && (window.HowlerGlobal = t,
            window.Howler = n,
            window.Howl = o,
            window.Sound = r)
        }
        )(),
        function() {
            HowlerGlobal.prototype._pos = [0, 0, 0],
            HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
            HowlerGlobal.prototype.stereo = function(n) {
                var o = this;
                if (!o.ctx || !o.ctx.listener)
                    return o;
                for (var r = o._howls.length - 1; r >= 0; r--)
                    o._howls[r].stereo(n);
                return o
            }
            ,
            HowlerGlobal.prototype.pos = function(n, o, r) {
                var i = this;
                if (!i.ctx || !i.ctx.listener)
                    return i;
                if (o = typeof o != "number" ? i._pos[1] : o,
                r = typeof r != "number" ? i._pos[2] : r,
                typeof n == "number")
                    i._pos = [n, o, r],
                    typeof i.ctx.listener.positionX < "u" ? (i.ctx.listener.positionX.setTargetAtTime(i._pos[0], Howler.ctx.currentTime, .1),
                    i.ctx.listener.positionY.setTargetAtTime(i._pos[1], Howler.ctx.currentTime, .1),
                    i.ctx.listener.positionZ.setTargetAtTime(i._pos[2], Howler.ctx.currentTime, .1)) : i.ctx.listener.setPosition(i._pos[0], i._pos[1], i._pos[2]);
                else
                    return i._pos;
                return i
            }
            ,
            HowlerGlobal.prototype.orientation = function(n, o, r, i, s, u) {
                var c = this;
                if (!c.ctx || !c.ctx.listener)
                    return c;
                var A = c._orientation;
                if (o = typeof o != "number" ? A[1] : o,
                r = typeof r != "number" ? A[2] : r,
                i = typeof i != "number" ? A[3] : i,
                s = typeof s != "number" ? A[4] : s,
                u = typeof u != "number" ? A[5] : u,
                typeof n == "number")
                    c._orientation = [n, o, r, i, s, u],
                    typeof c.ctx.listener.forwardX < "u" ? (c.ctx.listener.forwardX.setTargetAtTime(n, Howler.ctx.currentTime, .1),
                    c.ctx.listener.forwardY.setTargetAtTime(o, Howler.ctx.currentTime, .1),
                    c.ctx.listener.forwardZ.setTargetAtTime(r, Howler.ctx.currentTime, .1),
                    c.ctx.listener.upX.setTargetAtTime(i, Howler.ctx.currentTime, .1),
                    c.ctx.listener.upY.setTargetAtTime(s, Howler.ctx.currentTime, .1),
                    c.ctx.listener.upZ.setTargetAtTime(u, Howler.ctx.currentTime, .1)) : c.ctx.listener.setOrientation(n, o, r, i, s, u);
                else
                    return A;
                return c
            }
            ,
            Howl.prototype.init = function(n) {
                return function(o) {
                    var r = this;
                    return r._orientation = o.orientation || [1, 0, 0],
                    r._stereo = o.stereo || null,
                    r._pos = o.pos || null,
                    r._pannerAttr = {
                        coneInnerAngle: typeof o.coneInnerAngle < "u" ? o.coneInnerAngle : 360,
                        coneOuterAngle: typeof o.coneOuterAngle < "u" ? o.coneOuterAngle : 360,
                        coneOuterGain: typeof o.coneOuterGain < "u" ? o.coneOuterGain : 0,
                        distanceModel: typeof o.distanceModel < "u" ? o.distanceModel : "inverse",
                        maxDistance: typeof o.maxDistance < "u" ? o.maxDistance : 1e4,
                        panningModel: typeof o.panningModel < "u" ? o.panningModel : "HRTF",
                        refDistance: typeof o.refDistance < "u" ? o.refDistance : 1,
                        rolloffFactor: typeof o.rolloffFactor < "u" ? o.rolloffFactor : 1
                    },
                    r._onstereo = o.onstereo ? [{
                        fn: o.onstereo
                    }] : [],
                    r._onpos = o.onpos ? [{
                        fn: o.onpos
                    }] : [],
                    r._onorientation = o.onorientation ? [{
                        fn: o.onorientation
                    }] : [],
                    n.call(this, o)
                }
            }(Howl.prototype.init),
            Howl.prototype.stereo = function(n, o) {
                var r = this;
                if (!r._webAudio)
                    return r;
                if (r._state !== "loaded")
                    return r._queue.push({
                        event: "stereo",
                        action: function() {
                            r.stereo(n, o)
                        }
                    }),
                    r;
                var i = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
                if (typeof o > "u")
                    if (typeof n == "number")
                        r._stereo = n,
                        r._pos = [n, 0, 0];
                    else
                        return r._stereo;
                for (var s = r._getSoundIds(o), u = 0; u < s.length; u++) {
                    var c = r._soundById(s[u]);
                    if (c)
                        if (typeof n == "number")
                            c._stereo = n,
                            c._pos = [n, 0, 0],
                            c._node && (c._pannerAttr.panningModel = "equalpower",
                            (!c._panner || !c._panner.pan) && t(c, i),
                            i === "spatial" ? typeof c._panner.positionX < "u" ? (c._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime),
                            c._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                            c._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : c._panner.setPosition(n, 0, 0) : c._panner.pan.setValueAtTime(n, Howler.ctx.currentTime)),
                            r._emit("stereo", c._id);
                        else
                            return c._stereo
                }
                return r
            }
            ,
            Howl.prototype.pos = function(n, o, r, i) {
                var s = this;
                if (!s._webAudio)
                    return s;
                if (s._state !== "loaded")
                    return s._queue.push({
                        event: "pos",
                        action: function() {
                            s.pos(n, o, r, i)
                        }
                    }),
                    s;
                if (o = typeof o != "number" ? 0 : o,
                r = typeof r != "number" ? -.5 : r,
                typeof i > "u")
                    if (typeof n == "number")
                        s._pos = [n, o, r];
                    else
                        return s._pos;
                for (var u = s._getSoundIds(i), c = 0; c < u.length; c++) {
                    var A = s._soundById(u[c]);
                    if (A)
                        if (typeof n == "number")
                            A._pos = [n, o, r],
                            A._node && ((!A._panner || A._panner.pan) && t(A, "spatial"),
                            typeof A._panner.positionX < "u" ? (A._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime),
                            A._panner.positionY.setValueAtTime(o, Howler.ctx.currentTime),
                            A._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : A._panner.setPosition(n, o, r)),
                            s._emit("pos", A._id);
                        else
                            return A._pos
                }
                return s
            }
            ,
            Howl.prototype.orientation = function(n, o, r, i) {
                var s = this;
                if (!s._webAudio)
                    return s;
                if (s._state !== "loaded")
                    return s._queue.push({
                        event: "orientation",
                        action: function() {
                            s.orientation(n, o, r, i)
                        }
                    }),
                    s;
                if (o = typeof o != "number" ? s._orientation[1] : o,
                r = typeof r != "number" ? s._orientation[2] : r,
                typeof i > "u")
                    if (typeof n == "number")
                        s._orientation = [n, o, r];
                    else
                        return s._orientation;
                for (var u = s._getSoundIds(i), c = 0; c < u.length; c++) {
                    var A = s._soundById(u[c]);
                    if (A)
                        if (typeof n == "number")
                            A._orientation = [n, o, r],
                            A._node && (A._panner || (A._pos || (A._pos = s._pos || [0, 0, -.5]),
                            t(A, "spatial")),
                            typeof A._panner.orientationX < "u" ? (A._panner.orientationX.setValueAtTime(n, Howler.ctx.currentTime),
                            A._panner.orientationY.setValueAtTime(o, Howler.ctx.currentTime),
                            A._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)) : A._panner.setOrientation(n, o, r)),
                            s._emit("orientation", A._id);
                        else
                            return A._orientation
                }
                return s
            }
            ,
            Howl.prototype.pannerAttr = function() {
                var n = this, o = arguments, r, i, s;
                if (!n._webAudio)
                    return n;
                if (o.length === 0)
                    return n._pannerAttr;
                if (o.length === 1)
                    if (typeof o[0] == "object")
                        r = o[0],
                        typeof i > "u" && (r.pannerAttr || (r.pannerAttr = {
                            coneInnerAngle: r.coneInnerAngle,
                            coneOuterAngle: r.coneOuterAngle,
                            coneOuterGain: r.coneOuterGain,
                            distanceModel: r.distanceModel,
                            maxDistance: r.maxDistance,
                            refDistance: r.refDistance,
                            rolloffFactor: r.rolloffFactor,
                            panningModel: r.panningModel
                        }),
                        n._pannerAttr = {
                            coneInnerAngle: typeof r.pannerAttr.coneInnerAngle < "u" ? r.pannerAttr.coneInnerAngle : n._coneInnerAngle,
                            coneOuterAngle: typeof r.pannerAttr.coneOuterAngle < "u" ? r.pannerAttr.coneOuterAngle : n._coneOuterAngle,
                            coneOuterGain: typeof r.pannerAttr.coneOuterGain < "u" ? r.pannerAttr.coneOuterGain : n._coneOuterGain,
                            distanceModel: typeof r.pannerAttr.distanceModel < "u" ? r.pannerAttr.distanceModel : n._distanceModel,
                            maxDistance: typeof r.pannerAttr.maxDistance < "u" ? r.pannerAttr.maxDistance : n._maxDistance,
                            refDistance: typeof r.pannerAttr.refDistance < "u" ? r.pannerAttr.refDistance : n._refDistance,
                            rolloffFactor: typeof r.pannerAttr.rolloffFactor < "u" ? r.pannerAttr.rolloffFactor : n._rolloffFactor,
                            panningModel: typeof r.pannerAttr.panningModel < "u" ? r.pannerAttr.panningModel : n._panningModel
                        });
                    else
                        return s = n._soundById(parseInt(o[0], 10)),
                        s ? s._pannerAttr : n._pannerAttr;
                else
                    o.length === 2 && (r = o[0],
                    i = parseInt(o[1], 10));
                for (var u = n._getSoundIds(i), c = 0; c < u.length; c++)
                    if (s = n._soundById(u[c]),
                    s) {
                        var A = s._pannerAttr;
                        A = {
                            coneInnerAngle: typeof r.coneInnerAngle < "u" ? r.coneInnerAngle : A.coneInnerAngle,
                            coneOuterAngle: typeof r.coneOuterAngle < "u" ? r.coneOuterAngle : A.coneOuterAngle,
                            coneOuterGain: typeof r.coneOuterGain < "u" ? r.coneOuterGain : A.coneOuterGain,
                            distanceModel: typeof r.distanceModel < "u" ? r.distanceModel : A.distanceModel,
                            maxDistance: typeof r.maxDistance < "u" ? r.maxDistance : A.maxDistance,
                            refDistance: typeof r.refDistance < "u" ? r.refDistance : A.refDistance,
                            rolloffFactor: typeof r.rolloffFactor < "u" ? r.rolloffFactor : A.rolloffFactor,
                            panningModel: typeof r.panningModel < "u" ? r.panningModel : A.panningModel
                        };
                        var p = s._panner;
                        p ? (p.coneInnerAngle = A.coneInnerAngle,
                        p.coneOuterAngle = A.coneOuterAngle,
                        p.coneOuterGain = A.coneOuterGain,
                        p.distanceModel = A.distanceModel,
                        p.maxDistance = A.maxDistance,
                        p.refDistance = A.refDistance,
                        p.rolloffFactor = A.rolloffFactor,
                        p.panningModel = A.panningModel) : (s._pos || (s._pos = n._pos || [0, 0, -.5]),
                        t(s, "spatial"))
                    }
                return n
            }
            ,
            Sound.prototype.init = function(n) {
                return function() {
                    var o = this
                      , r = o._parent;
                    o._orientation = r._orientation,
                    o._stereo = r._stereo,
                    o._pos = r._pos,
                    o._pannerAttr = r._pannerAttr,
                    n.call(this),
                    o._stereo ? r.stereo(o._stereo) : o._pos && r.pos(o._pos[0], o._pos[1], o._pos[2], o._id)
                }
            }(Sound.prototype.init),
            Sound.prototype.reset = function(n) {
                return function() {
                    var o = this
                      , r = o._parent;
                    return o._orientation = r._orientation,
                    o._stereo = r._stereo,
                    o._pos = r._pos,
                    o._pannerAttr = r._pannerAttr,
                    o._stereo ? r.stereo(o._stereo) : o._pos ? r.pos(o._pos[0], o._pos[1], o._pos[2], o._id) : o._panner && (o._panner.disconnect(0),
                    o._panner = void 0,
                    r._refreshBuffer(o)),
                    n.call(this)
                }
            }(Sound.prototype.reset);
            var t = function(n, o) {
                o = o || "spatial",
                o === "spatial" ? (n._panner = Howler.ctx.createPanner(),
                n._panner.coneInnerAngle = n._pannerAttr.coneInnerAngle,
                n._panner.coneOuterAngle = n._pannerAttr.coneOuterAngle,
                n._panner.coneOuterGain = n._pannerAttr.coneOuterGain,
                n._panner.distanceModel = n._pannerAttr.distanceModel,
                n._panner.maxDistance = n._pannerAttr.maxDistance,
                n._panner.refDistance = n._pannerAttr.refDistance,
                n._panner.rolloffFactor = n._pannerAttr.rolloffFactor,
                n._panner.panningModel = n._pannerAttr.panningModel,
                typeof n._panner.positionX < "u" ? (n._panner.positionX.setValueAtTime(n._pos[0], Howler.ctx.currentTime),
                n._panner.positionY.setValueAtTime(n._pos[1], Howler.ctx.currentTime),
                n._panner.positionZ.setValueAtTime(n._pos[2], Howler.ctx.currentTime)) : n._panner.setPosition(n._pos[0], n._pos[1], n._pos[2]),
                typeof n._panner.orientationX < "u" ? (n._panner.orientationX.setValueAtTime(n._orientation[0], Howler.ctx.currentTime),
                n._panner.orientationY.setValueAtTime(n._orientation[1], Howler.ctx.currentTime),
                n._panner.orientationZ.setValueAtTime(n._orientation[2], Howler.ctx.currentTime)) : n._panner.setOrientation(n._orientation[0], n._orientation[1], n._orientation[2])) : (n._panner = Howler.ctx.createStereoPanner(),
                n._panner.pan.setValueAtTime(n._stereo, Howler.ctx.currentTime)),
                n._panner.connect(n._node),
                n._paused || n._parent.pause(n._id, !0).play(n._id, !0)
            }
        }()
    }(Fr);
    var Zu = {
        expireTimes: "1d",
        path: "; path=/",
        domain: "",
        secure: !1,
        sameSite: "; SameSite=Lax"
    }
      , Um = function() {
        function e() {
            this.current_default_config = Zu
        }
        return e.prototype.config = function(t) {
            for (var n in this.current_default_config)
                this.current_default_config[n] = t[n] ? t[n] : Zu[n]
        }
        ,
        e.prototype.get = function(t) {
            var n = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            if (n && n.substring(0, 1) === "{" && n.substring(n.length - 1, n.length) === "}")
                try {
                    n = JSON.parse(n)
                } catch {
                    return n
                }
            return n
        }
        ,
        e.prototype.set = function(t, n, o, r, i, s, u) {
            if (t) {
                if (/^(?:expires|max-age|path|domain|secure|SameSite)$/i.test(t))
                    throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: ' + t)
            } else
                throw new Error("Cookie name is not found in the first argument.");
            n && n.constructor === Object && (n = JSON.stringify(n));
            var c = "";
            if (o == null && (o = this.current_default_config.expireTimes ? this.current_default_config.expireTimes : ""),
            o && o != 0)
                switch (o.constructor) {
                case Number:
                    o === 1 / 0 || o === -1 ? c = "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : c = "; max-age=" + o;
                    break;
                case String:
                    if (/^(?:\d+(y|m|d|h|min|s))$/i.test(o)) {
                        var A = o.replace(/^(\d+)(?:y|m|d|h|min|s)$/i, "$1");
                        switch (o.replace(/^(?:\d+)(y|m|d|h|min|s)$/i, "$1").toLowerCase()) {
                        case "m":
                            c = "; max-age=" + +A * 2592e3;
                            break;
                        case "d":
                            c = "; max-age=" + +A * 86400;
                            break;
                        case "h":
                            c = "; max-age=" + +A * 3600;
                            break;
                        case "min":
                            c = "; max-age=" + +A * 60;
                            break;
                        case "s":
                            c = "; max-age=" + A;
                            break;
                        case "y":
                            c = "; max-age=" + +A * 31104e3;
                            break
                        }
                    } else
                        c = "; expires=" + o;
                    break;
                case Date:
                    c = "; expires=" + o.toUTCString();
                    break
                }
            return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(n) + c + (i ? "; domain=" + i : this.current_default_config.domain ? this.current_default_config.domain : "") + (r ? "; path=" + r : this.current_default_config.path ? this.current_default_config.path : "; path=/") + (s == null ? this.current_default_config.secure ? "; Secure" : "" : s ? "; Secure" : "") + (u == null ? this.current_default_config.sameSite ? "; SameSute=" + this.current_default_config.sameSite : "" : u ? "; SameSite=" + u : ""),
            this
        }
        ,
        e.prototype.remove = function(t, n, o) {
            return !t || !this.isKey(t) ? !1 : (document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (o ? "; domain=" + o : this.current_default_config.domain ? this.current_default_config.domain : "") + (n ? "; path=" + n : this.current_default_config.path ? this.current_default_config.path : "; path=/") + "; SameSite=Lax",
            !0)
        }
        ,
        e.prototype.isKey = function(t) {
            return new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
        }
        ,
        e.prototype.keys = function() {
            if (!document.cookie)
                return [];
            for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), n = 0; n < t.length; n++)
                t[n] = decodeURIComponent(t[n]);
            return t
        }
        ,
        e
    }()
      , Bi = null;
    function Gm() {
        Bi == null && (Bi = new Um);
        var e = Ve(Bi);
        return {
            cookies: e
        }
    }
    let Pu;
    nr = {},
    Pu = {
        get exports() {
            return nr
        },
        set exports(e) {
            nr = e
        }
    },
    function(e) {
        e.exports = function(t) {
            var n = {};
            function o(r) {
                if (n[r])
                    return n[r].exports;
                var i = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, o),
                i.l = !0,
                i.exports
            }
            return o.m = t,
            o.c = n,
            o.d = function(r, i, s) {
                o.o(r, i) || Object.defineProperty(r, i, {
                    configurable: !1,
                    enumerable: !0,
                    get: s
                })
            }
            ,
            o.n = function(r) {
                var i = r && r.__esModule ? function() {
                    return r.default
                }
                : function() {
                    return r
                }
                ;
                return o.d(i, "a", i),
                i
            }
            ,
            o.o = function(r, i) {
                return Object.prototype.hasOwnProperty.call(r, i)
            }
            ,
            o.p = "",
            o(o.s = 1)
        }([function(t, n, o) {
            var r = {
                MOBILE: "mobile",
                TABLET: "tablet",
                SMART_TV: "smarttv",
                CONSOLE: "console",
                WEARABLE: "wearable",
                BROWSER: void 0
            }
              , i = {
                CHROME: "Chrome",
                FIREFOX: "Firefox",
                OPERA: "Opera",
                YANDEX: "Yandex",
                SAFARI: "Safari",
                INTERNET_EXPLORER: "Internet Explorer",
                EDGE: "Edge",
                CHROMIUM: "Chromium",
                IE: "IE",
                MOBILE_SAFARI: "Mobile Safari",
                EDGE_CHROMIUM: "Edge Chromium"
            }
              , s = {
                IOS: "iOS",
                ANDROID: "Android",
                WINDOWS_PHONE: "Windows Phone",
                WINDOWS: "Windows",
                MAC_OS: "Mac OS"
            }
              , u = {
                isMobile: !1,
                isTablet: !1,
                isBrowser: !1,
                isSmartTV: !1,
                isConsole: !1,
                isWearable: !1
            };
            t.exports = {
                BROWSER_TYPES: i,
                DEVICE_TYPES: r,
                OS_TYPES: s,
                defaultData: u
            }
        }
        , function(t, n, o) {
            var r = o(2)
              , i = o(0)
              , s = i.BROWSER_TYPES
              , u = i.OS_TYPES
              , c = i.DEVICE_TYPES
              , A = o(4)
              , p = A.checkType
              , a = A.broPayload
              , l = A.mobilePayload
              , d = A.wearPayload
              , f = A.consolePayload
              , m = A.stvPayload
              , v = A.getNavigatorInstance
              , g = A.isIOS13Check
              , h = new r
              , b = h.getBrowser()
              , E = h.getDevice()
              , T = h.getEngine()
              , B = h.getOS()
              , Q = h.getUA()
              , C = s.CHROME
              , x = s.CHROMIUM
              , V = s.IE
              , D = s.INTERNET_EXPLORER
              , O = s.OPERA
              , Z = s.FIREFOX
              , ne = s.SAFARI
              , W = s.EDGE
              , ie = s.YANDEX
              , ee = s.MOBILE_SAFARI
              , _ = c.MOBILE
              , J = c.TABLET
              , oe = c.SMART_TV
              , ue = c.BROWSER
              , le = c.WEARABLE
              , Ne = c.CONSOLE
              , fe = u.ANDROID
              , L = u.WINDOWS_PHONE
              , Y = u.IOS
              , H = u.WINDOWS
              , X = u.MAC_OS
              , he = function() {
                return E.type === _
            }
              , Ie = function() {
                return E.type === J
            }
              , de = function() {
                switch (E.type) {
                case _:
                case J:
                    return !0;
                default:
                    return !1
                }
            }
              , w = function() {
                return B.name === u.WINDOWS && B.version === "10" ? typeof Q == "string" && Q.indexOf("Edg/") !== -1 : !1
            }
              , y = function() {
                return E.type === oe
            }
              , M = function() {
                return E.type === ue
            }
              , k = function() {
                return E.type === le
            }
              , F = function() {
                return E.type === Ne
            }
              , N = function() {
                return B.name === fe
            }
              , P = function() {
                return B.name === H
            }
              , j = function() {
                return B.name === X
            }
              , z = function() {
                return B.name === L
            }
              , U = function() {
                return B.name === Y
            }
              , $ = function() {
                return b.name === C
            }
              , te = function() {
                return b.name === Z
            }
              , re = function() {
                return b.name === x
            }
              , ce = function() {
                return b.name === W
            }
              , ge = function() {
                return b.name === ie
            }
              , De = function() {
                return b.name === ne || b.name === ee
            }
              , ye = function() {
                return b.name === ee
            }
              , Ue = function() {
                return b.name === O
            }
              , lt = function() {
                return b.name === D || b.name === V
            }
              , nn = function() {
                var Dt = v()
                  , da = Dt && Dt.userAgent.toLowerCase();
                return typeof da == "string" ? /electron/.test(da) : !1
            }
              , la = function() {
                var Dt = v();
                return Dt && (/iPad|iPhone|iPod/.test(Dt.platform) || Dt.platform === "MacIntel" && Dt.maxTouchPoints > 1) && !window.MSStream
            }
              , It = function() {
                return g("iPad")
            }
              , ua = function() {
                return g("iPhone")
            }
              , Xe = function() {
                return g("iPod")
            }
              , ft = function() {
                return b.major
            }
              , ca = function() {
                return b.version
            }
              , Oy = function() {
                return B.version ? B.version : "none"
            }
              , Dy = function() {
                return B.name ? B.name : "none"
            }
              , Ly = function() {
                return b.name
            }
              , Ty = function() {
                return E.vendor ? E.vendor : "none"
            }
              , Vy = function() {
                return E.model ? E.model : "none"
            }
              , Fy = function() {
                return T.name
            }
              , Ry = function() {
                return T.version
            }
              , Uy = function() {
                return Q
            }
              , Gy = function() {
                return E.type
            }
              , jy = y()
              , Ny = F()
              , qy = k()
              , Yy = ye() || It()
              , zy = re()
              , Hy = de() || It()
              , Ky = he()
              , Zy = Ie() || It()
              , Py = M()
              , Wy = N()
              , Jy = z()
              , Xy = U() || It()
              , _y = $()
              , $y = te()
              , eC = De()
              , tC = Ue()
              , nC = lt()
              , oC = Oy()
              , rC = Dy()
              , aC = ft()
              , iC = ca()
              , sC = Ly()
              , lC = Ty()
              , uC = Vy()
              , cC = Fy()
              , dC = Ry()
              , AC = Uy()
              , pC = ce() || w()
              , fC = ge()
              , gC = Gy()
              , mC = la()
              , hC = It()
              , vC = ua()
              , bC = Xe()
              , wC = nn()
              , yC = w()
              , CC = ce()
              , EC = P()
              , IC = j()
              , Qn = p(E.type);
            function BC() {
                var Dt = Qn.isBrowser
                  , da = Qn.isMobile
                  , MC = Qn.isTablet
                  , tp = Qn.isSmartTV
                  , np = Qn.isConsole
                  , op = Qn.isWearable;
                if (Dt)
                    return a(Dt, b, T, B, Q);
                if (tp)
                    return m(tp, T, B, Q);
                if (np)
                    return f(np, T, B, Q);
                if (da || MC)
                    return l(Qn, E, B, Q);
                if (op)
                    return d(op, T, B, Q)
            }
            t.exports = {
                deviceDetect: BC,
                isSmartTV: jy,
                isConsole: Ny,
                isWearable: qy,
                isMobileSafari: Yy,
                isChromium: zy,
                isMobile: Hy,
                isMobileOnly: Ky,
                isTablet: Zy,
                isBrowser: Py,
                isAndroid: Wy,
                isWinPhone: Jy,
                isIOS: Xy,
                isChrome: _y,
                isFirefox: $y,
                isSafari: eC,
                isOpera: tC,
                isIE: nC,
                osVersion: oC,
                osName: rC,
                fullBrowserVersion: aC,
                browserVersion: iC,
                browserName: sC,
                mobileVendor: lC,
                mobileModel: uC,
                engineName: cC,
                engineVersion: dC,
                getUA: AC,
                isEdge: pC,
                isYandex: fC,
                deviceType: gC,
                isIOS13: mC,
                isIPad13: hC,
                isIPhone13: vC,
                isIPod13: bC,
                isElectron: wC,
                isEdgeChromium: yC,
                isLegacyEdge: CC,
                isWindows: EC,
                isMacOs: IC
            }
        }
        , function(t, n, o) {
            var r;
            (function(i, s) {
                var u = "0.7.18"
                  , c = ""
                  , A = "?"
                  , p = "function"
                  , a = "undefined"
                  , l = "object"
                  , d = "string"
                  , f = "major"
                  , m = "model"
                  , v = "name"
                  , g = "type"
                  , h = "vendor"
                  , b = "version"
                  , E = "architecture"
                  , T = "console"
                  , B = "mobile"
                  , Q = "tablet"
                  , C = "smarttv"
                  , x = "wearable"
                  , V = "embedded"
                  , D = {
                    extend: function(_, J) {
                        var oe = {};
                        for (var ue in _)
                            J[ue] && J[ue].length % 2 === 0 ? oe[ue] = J[ue].concat(_[ue]) : oe[ue] = _[ue];
                        return oe
                    },
                    has: function(_, J) {
                        return typeof _ == "string" ? J.toLowerCase().indexOf(_.toLowerCase()) !== -1 : !1
                    },
                    lowerize: function(_) {
                        return _.toLowerCase()
                    },
                    major: function(_) {
                        return typeof _ === d ? _.replace(/[^\d\.]/g, "").split(".")[0] : s
                    },
                    trim: function(_) {
                        return _.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                }
                  , O = {
                    rgx: function(_, J) {
                        for (var oe = 0, ue, le, Ne, fe, L, Y; oe < J.length && !L; ) {
                            var H = J[oe]
                              , X = J[oe + 1];
                            for (ue = le = 0; ue < H.length && !L; )
                                if (L = H[ue++].exec(_),
                                L)
                                    for (Ne = 0; Ne < X.length; Ne++)
                                        Y = L[++le],
                                        fe = X[Ne],
                                        typeof fe === l && fe.length > 0 ? fe.length == 2 ? typeof fe[1] == p ? this[fe[0]] = fe[1].call(this, Y) : this[fe[0]] = fe[1] : fe.length == 3 ? typeof fe[1] === p && !(fe[1].exec && fe[1].test) ? this[fe[0]] = Y ? fe[1].call(this, Y, fe[2]) : s : this[fe[0]] = Y ? Y.replace(fe[1], fe[2]) : s : fe.length == 4 && (this[fe[0]] = Y ? fe[3].call(this, Y.replace(fe[1], fe[2])) : s) : this[fe] = Y || s;
                            oe += 2
                        }
                    },
                    str: function(_, J) {
                        for (var oe in J)
                            if (typeof J[oe] === l && J[oe].length > 0) {
                                for (var ue = 0; ue < J[oe].length; ue++)
                                    if (D.has(J[oe][ue], _))
                                        return oe === A ? s : oe
                            } else if (D.has(J[oe], _))
                                return oe === A ? s : oe;
                        return _
                    }
                }
                  , Z = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                }
                  , ne = {
                    browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [v, b], [/(opios)[\/\s]+([\w\.]+)/i], [[v, "Opera Mini"], b], [/\s(opr)\/([\w\.]+)/i], [[v, "Opera"], b], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [v, b], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[v, "IE"], b], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[v, "Edge"], b], [/(yabrowser)\/([\w\.]+)/i], [[v, "Yandex"], b], [/(puffin)\/([\w\.]+)/i], [[v, "Puffin"], b], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[v, "UCBrowser"], b], [/(comodo_dragon)\/([\w\.]+)/i], [[v, /_/g, " "], b], [/(micromessenger)\/([\w\.]+)/i], [[v, "WeChat"], b], [/(qqbrowserlite)\/([\w\.]+)/i], [v, b], [/(QQ)\/([\d\.]+)/i], [v, b], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [v, b], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [v, b], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [v, b], [/(MetaSr)[\/\s]?([\w\.]+)/i], [v], [/(LBBROWSER)/i], [v], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [b, [v, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [b, [v, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [b, [v, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[v, /(.+)/, "$1 WebView"], b], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[v, /(.+(?:g|us))(.+)/, "$1 $2"], b], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [b, [v, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [v, b], [/(dolfin)\/([\w\.]+)/i], [[v, "Dolphin"], b], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[v, "Chrome"], b], [/(coast)\/([\w\.]+)/i], [[v, "Opera Coast"], b], [/fxios\/([\w\.-]+)/i], [b, [v, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [b, [v, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [b, v], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[v, "GSA"], b], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [v, [b, O.str, Z.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [v, b], [/(navigator|netscape)\/([\w\.-]+)/i], [[v, "Netscape"], b], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [v, b]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[E, "amd64"]], [/(ia32(?=;))/i], [[E, D.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[E, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[E, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[E, /ower/, "", D.lowerize]], [/(sun4\w)[;\)]/i], [[E, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[E, D.lowerize]]],
                    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [m, h, [g, Q]], [/applecoremedia\/[\w\.]+ \((ipad)/], [m, [h, "Apple"], [g, Q]], [/(apple\s{0,1}tv)/i], [[m, "Apple TV"], [h, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [h, m, [g, Q]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [m, [h, "Amazon"], [g, Q]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[m, O.str, Z.device.amazon.model], [h, "Amazon"], [g, B]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [m, h, [g, B]], [/\((ip[honed|\s\w*]+);/i], [m, [h, "Apple"], [g, B]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [h, m, [g, B]], [/\(bb10;\s(\w+)/i], [m, [h, "BlackBerry"], [g, B]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [m, [h, "Asus"], [g, Q]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[h, "Sony"], [m, "Xperia Tablet"], [g, Q]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [m, [h, "Sony"], [g, B]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [h, m, [g, T]], [/android.+;\s(shield)\sbuild/i], [m, [h, "Nvidia"], [g, T]], [/(playstation\s[34portablevi]+)/i], [m, [h, "Sony"], [g, T]], [/(sprint\s(\w+))/i], [[h, O.str, Z.device.sprint.vendor], [m, O.str, Z.device.sprint.model], [g, B]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [h, m, [g, Q]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [h, [m, /_/g, " "], [g, B]], [/(nexus\s9)/i], [m, [h, "HTC"], [g, Q]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [m, [h, "Huawei"], [g, B]], [/(microsoft);\s(lumia[\s\w]+)/i], [h, m, [g, B]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [m, [h, "Microsoft"], [g, T]], [/(kin\.[onetw]{3})/i], [[m, /\./g, " "], [h, "Microsoft"], [g, B]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [m, [h, "Motorola"], [g, B]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [m, [h, "Motorola"], [g, Q]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[h, D.trim], [m, D.trim], [g, C]], [/hbbtv.+maple;(\d+)/i], [[m, /^/, "SmartTV"], [h, "Samsung"], [g, C]], [/\(dtv[\);].+(aquos)/i], [m, [h, "Sharp"], [g, C]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[h, "Samsung"], m, [g, Q]], [/smart-tv.+(samsung)/i], [h, [g, C], m], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[h, "Samsung"], m, [g, B]], [/sie-(\w*)/i], [m, [h, "Siemens"], [g, B]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[h, "Nokia"], m, [g, B]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [m, [h, "Acer"], [g, Q]], [/android.+([vl]k\-?\d{3})\s+build/i], [m, [h, "LG"], [g, Q]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[h, "LG"], m, [g, Q]], [/(lg) netcast\.tv/i], [h, m, [g, C]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [m, [h, "LG"], [g, B]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [m, [h, "Lenovo"], [g, Q]], [/linux;.+((jolla));/i], [h, m, [g, B]], [/((pebble))app\/[\d\.]+\s/i], [h, m, [g, x]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [h, m, [g, B]], [/crkey/i], [[m, "Chromecast"], [h, "Google"]], [/android.+;\s(glass)\s\d/i], [m, [h, "Google"], [g, x]], [/android.+;\s(pixel c)\s/i], [m, [h, "Google"], [g, Q]], [/android.+;\s(pixel xl|pixel)\s/i], [m, [h, "Google"], [g, B]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[m, /_/g, " "], [h, "Xiaomi"], [g, B]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[m, /_/g, " "], [h, "Xiaomi"], [g, Q]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [m, [h, "Meizu"], [g, Q]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [m, [h, "OnePlus"], [g, B]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [m, [h, "RCA"], [g, Q]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [m, [h, "Dell"], [g, Q]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [m, [h, "Verizon"], [g, Q]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[h, "Barnes & Noble"], m, [g, Q]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [m, [h, "NuVision"], [g, Q]], [/android.+;\s(k88)\sbuild/i], [m, [h, "ZTE"], [g, Q]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [m, [h, "Swiss"], [g, B]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [m, [h, "Swiss"], [g, Q]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [m, [h, "Zeki"], [g, Q]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[h, "Dragon Touch"], m, [g, Q]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [m, [h, "Insignia"], [g, Q]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [m, [h, "NextBook"], [g, Q]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[h, "Voice"], m, [g, B]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[h, "LvTel"], m, [g, B]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [m, [h, "Envizen"], [g, Q]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [h, m, [g, Q]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [m, [h, "MachSpeed"], [g, Q]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [h, m, [g, Q]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [m, [h, "Rotor"], [g, Q]], [/android.+(KS(.+))\s+build/i], [m, [h, "Amazon"], [g, Q]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [h, m, [g, Q]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[g, D.lowerize], h, m], [/(android[\w\.\s\-]{0,9});.+build/i], [m, [h, "Generic"]]],
                    engine: [[/windows.+\sedge\/([\w\.]+)/i], [b, [v, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [v, b], [/rv\:([\w\.]{1,9}).+(gecko)/i], [b, v]],
                    os: [[/microsoft\s(windows)\s(vista|xp)/i], [v, b], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [v, [b, O.str, Z.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[v, "Windows"], [b, O.str, Z.os.windows.version]], [/\((bb)(10);/i], [[v, "BlackBerry"], b], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [v, b], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[v, "Symbian"], b], [/\((series40);/i], [v], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[v, "Firefox OS"], b], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [v, b], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[v, "Chromium OS"], b], [/(sunos)\s?([\w\.\d]*)/i], [[v, "Solaris"], b], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [v, b], [/(haiku)\s(\w+)/i], [v, b], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[b, /_/g, "."], [v, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[v, "Mac OS"], [b, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [v, b]]
                }
                  , W = function(_, J) {
                    if (typeof _ == "object" && (J = _,
                    _ = s),
                    !(this instanceof W))
                        return new W(_,J).getResult();
                    var oe = _ || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : c)
                      , ue = J ? D.extend(ne, J) : ne;
                    return this.getBrowser = function() {
                        var le = {
                            name: s,
                            version: s
                        };
                        return O.rgx.call(le, oe, ue.browser),
                        le.major = D.major(le.version),
                        le
                    }
                    ,
                    this.getCPU = function() {
                        var le = {
                            architecture: s
                        };
                        return O.rgx.call(le, oe, ue.cpu),
                        le
                    }
                    ,
                    this.getDevice = function() {
                        var le = {
                            vendor: s,
                            model: s,
                            type: s
                        };
                        return O.rgx.call(le, oe, ue.device),
                        le
                    }
                    ,
                    this.getEngine = function() {
                        var le = {
                            name: s,
                            version: s
                        };
                        return O.rgx.call(le, oe, ue.engine),
                        le
                    }
                    ,
                    this.getOS = function() {
                        var le = {
                            name: s,
                            version: s
                        };
                        return O.rgx.call(le, oe, ue.os),
                        le
                    }
                    ,
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ,
                    this.getUA = function() {
                        return oe
                    }
                    ,
                    this.setUA = function(le) {
                        return oe = le,
                        this
                    }
                    ,
                    this
                };
                W.VERSION = u,
                W.BROWSER = {
                    NAME: v,
                    MAJOR: f,
                    VERSION: b
                },
                W.CPU = {
                    ARCHITECTURE: E
                },
                W.DEVICE = {
                    MODEL: m,
                    VENDOR: h,
                    TYPE: g,
                    CONSOLE: T,
                    MOBILE: B,
                    SMARTTV: C,
                    TABLET: Q,
                    WEARABLE: x,
                    EMBEDDED: V
                },
                W.ENGINE = {
                    NAME: v,
                    VERSION: b
                },
                W.OS = {
                    NAME: v,
                    VERSION: b
                },
                typeof n !== a ? (typeof t !== a && t.exports && (n = t.exports = W),
                n.UAParser = W) : o(3) ? (r = function() {
                    return W
                }
                .call(n, o, n, t),
                r !== s && (t.exports = r)) : i && (i.UAParser = W);
                var ie = i && (i.jQuery || i.Zepto);
                if (typeof ie !== a) {
                    var ee = new W;
                    ie.ua = ee.getResult(),
                    ie.ua.get = function() {
                        return ee.getUA()
                    }
                    ,
                    ie.ua.set = function(_) {
                        ee.setUA(_);
                        var J = ee.getResult();
                        for (var oe in J)
                            ie.ua[oe] = J[oe]
                    }
                }
            }
            )(typeof window == "object" ? window : this)
        }
        , function(t, n) {
            (function(o) {
                t.exports = o
            }
            ).call(n, {})
        }
        , function(t, n, o) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(v) {
                for (var g = 1; g < arguments.length; g++) {
                    var h = arguments[g];
                    for (var b in h)
                        Object.prototype.hasOwnProperty.call(h, b) && (v[b] = h[b])
                }
                return v
            }
              , i = o(0)
              , s = i.DEVICE_TYPES
              , u = i.defaultData
              , c = function(v) {
                switch (v) {
                case s.MOBILE:
                    return {
                        isMobile: !0
                    };
                case s.TABLET:
                    return {
                        isTablet: !0
                    };
                case s.SMART_TV:
                    return {
                        isSmartTV: !0
                    };
                case s.CONSOLE:
                    return {
                        isConsole: !0
                    };
                case s.WEARABLE:
                    return {
                        isWearable: !0
                    };
                case s.BROWSER:
                    return {
                        isBrowser: !0
                    };
                default:
                    return u
                }
            }
              , A = function(v, g, h, b, E) {
                return {
                    isBrowser: v,
                    browserMajorVersion: g.major,
                    browserFullVersion: g.version,
                    browserName: g.name,
                    engineName: h.name || !1,
                    engineVersion: h.version,
                    osName: b.name,
                    osVersion: b.version,
                    userAgent: E
                }
            }
              , p = function(v, g, h, b) {
                return r({}, v, {
                    vendor: g.vendor,
                    model: g.model,
                    os: h.name,
                    osVersion: h.version,
                    ua: b
                })
            }
              , a = function(v, g, h, b) {
                return {
                    isSmartTV: v,
                    engineName: g.name,
                    engineVersion: g.version,
                    osName: h.name,
                    osVersion: h.version,
                    userAgent: b
                }
            }
              , l = function(v, g, h, b) {
                return {
                    isConsole: v,
                    engineName: g.name,
                    engineVersion: g.version,
                    osName: h.name,
                    osVersion: h.version,
                    userAgent: b
                }
            }
              , d = function(v, g, h, b) {
                return {
                    isWearable: v,
                    engineName: g.name,
                    engineVersion: g.version,
                    osName: h.name,
                    osVersion: h.version,
                    userAgent: b
                }
            }
              , f = n.getNavigatorInstance = function() {
                return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1
            }
              , m = n.isIOS13Check = function(v) {
                var g = f();
                return g && g.platform && (g.platform.indexOf(v) !== -1 || g.platform === "MacIntel" && g.maxTouchPoints > 1 && !window.MSStream)
            }
            ;
            t.exports = {
                checkType: c,
                broPayload: A,
                mobilePayload: p,
                stvPayload: a,
                consolePayload: l,
                wearPayload: d,
                getNavigatorInstance: f,
                isIOS13Check: m
            }
        }
        ])
    }(Pu);
    let Wn;
    ({cookies: Wn} = Gm()),
    Dn = Ii({
        id: "general",
        state: ()=>({
            showLoader: !0,
            loaderPrecentage: 0,
            infoIsVisible: !1,
            isMobileView: nr.isMobile,
            bgmTimeout: null,
            isEnableAudioBtn: !1,
            BGMs: {
                ioRides: {
                    src: "/audio/io-rides-music.mp3",
                    howl: null,
                    extraVolume: 0
                },
                info: {
                    src: "/audio/info.mp3",
                    howl: null,
                    extraVolume: 0
                }
            },
            BGMVolume: .5,
            isBGMMuted: null,
            sfxs: {
                menu: {
                    src: "/audio/sfx-bubble.mp3",
                    howl: null,
                    extraVolume: 0
                },
                menuClose: {
                    src: "/audio/sfx-pop.mp3",
                    howl: null,
                    extraVolume: 0
                },
                others: {
                    src: "/audio/sfx-mouth.mp3",
                    howl: null,
                    extraVolume: .5
                },
                switch: {
                    src: "/audio/sfx-head.mp3",
                    howl: null,
                    extraVolume: 0
                },
                navbar: {
                    src: "/audio/sfx-navbar-pop.mp3",
                    howl: null,
                    extraVolume: 1.5
                }
            },
            sfxVolume: .5,
            currentHowl: null,
            ridesPreloader: null,
            cursorImage: null
        }),
        getters: {},
        actions: {
            initIsMute() {
                Wn.get("muted") === null ? Wn.set("muted", !1) : this.isBGMMuted = Wn.get("muted") === "true"
            },
            initBGM() {
                Object.keys(this.BGMs).forEach(e=>{
                    const t = new Fr.Howl({
                        src: [this.BGMs[e].src],
                        loop: !0,
                        volume: this.BGMVolume + this.BGMs[e].extraVolume
                    });
                    this.BGMs[e].howl = t
                }
                ),
                this.isBGMMuted || this.playParticularBgm()
            },
            playParticularBgm(e) {
                var r, i;
                const t = e === "muteBtn" ? 1e3 : 2500
                  , n = this.infoIsVisible ? "info" : "ioRides";
                this.currentHowl = this.BGMs[n].howl,
                (r = this.currentHowl) != null && r.playing() && !this.isBGMMuted && ((i = this.currentHowl) == null || i.pause());
                const o = Object.keys(this.BGMs).filter(s=>s !== n);
                o.forEach(s=>{
                    var u;
                    (u = this.BGMs[s].howl) == null || u.fade(this.BGMVolume, 0, t)
                }
                ),
                clearTimeout(this.bgmTimeout),
                this.bgmTimeout = setTimeout(()=>{
                    var s, u, c;
                    o.forEach(A=>{
                        var p, a;
                        (a = (p = this.BGMs[A]) == null ? void 0 : p.howl) == null || a.pause()
                    }
                    ),
                    this.isBGMMuted ? this.isBGMMuted && ((s = this.currentHowl) == null || s.fade(this.BGMVolume, 0, t),
                    setTimeout(A=>{
                        var p;
                        (p = this.currentHowl) == null || p.pause()
                    }
                    , t)) : ((u = this.currentHowl) == null || u.play(),
                    (c = this.currentHowl) == null || c.fade(0, this.BGMVolume, t)),
                    clearTimeout(this.bgmTimeout)
                }
                , 1e3)
            },
            pauseBGM() {
                var e, t;
                (e = this.currentHowl) != null && e.playing() && ((t = this.currentHowl) == null || t.pause())
            },
            unmuteBGM() {
                this.isBGMMuted && (this.isBGMMuted = !1,
                Wn.set("muted", !1),
                this.playParticularBgm("muteBtn"))
            },
            muteBGM() {
                this.isBGMMuted || (this.isBGMMuted = !0,
                Wn.set("muted", !0),
                this.playParticularBgm("muteBtn"))
            },
            initSFX() {
                Object.keys(this.sfxs).forEach(e=>{
                    const t = new Fr.Howl({
                        src: [this.sfxs[e].src],
                        autoplay: !1,
                        loop: !1,
                        volume: this.sfxVolume + this.sfxs[e].extraVolume
                    });
                    this.sfxs[e].howl = t
                }
                )
            },
            playSfx(e) {
                var t, n, o, r, i;
                switch (e) {
                case "open":
                    (t = this.sfxs.menu.howl) == null || t.play();
                    break;
                case "close":
                    (n = this.sfxs.menuClose.howl) == null || n.play();
                    break;
                case "switch":
                    (o = this.sfxs.switch.howl) == null || o.play();
                    break;
                case "navbar":
                    (r = this.sfxs.navbar.howl) == null || r.play();
                    break;
                default:
                    (i = this.sfxs.others.howl) == null || i.play();
                    break
                }
            },
            loadPriorityImage() {
                this.ridesPreloader = "data:image/gif;base64,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SbKkyZMoU6pcybKly5cwY8qcSbOmzZs4cw7aybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2pFxrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbt2stu4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4v/H0++vPnz6NOrX8++vfv38OPLn0+/vv37+PPr38+/v///AAYo4IAEFmjggQgmqOCCDDbo4IMQRijhhBRWaOGFhGSo4YYcdujhhyCGKOKIJJZo4okopqjiiiy26OKLMMYo44w01mjjjTjmqOOOPPaIoY9ABinkkEQWaeSRSCap5JJMNunkk1BGKeUkVEoypZVYZqnlllx26eWXYIYp5pjNlGnmmWimqWYjVbLpZptwXrnmnHTWaeedeOZJ5p5x9vkmn4AGKuighBZq6KGIyqnnoooeyogbkBb0J6OUNlppophy+QYYxhizjKegviHqQZmWauqpqBrqhhdegLrMq562/woIqanWauuttXb6Kqyf9tppp7TiaumwHpbhKa+78tqpF2sE6yex0JZ6bLK7Tvvpr2BIKmy02yJ6SLLWggvrr81S8my33KI7pq7Utkutrq3ica666dLL5RruLgPNvvu+ey0VV7wx6bz1FizmG+7u28IwKkCxwhMAV6srNOUabLGhxmRBLb8tQOFGJAKJQoW/y0hBkL0XI4nvxtCYYMISZ9hxhiWWCBLEFVdUu0w0Wzib8s+aotLuvjLckYgdithhySVxCOJFztfu7DHBQFc9SbivttBCIJZU4vXXgnzdxhca6wuNwFRbnbK1nkLTwjRTCBLI3FPMPbfXbTiNidkfp/+ttsErb6yHHrx8McQPQwyuR+I/FP4FL7zoO0zFf1dex946Q6PE4M8s4nnnig/h+SI/KPGEvi1k67fl0TICxes4b6HE5no8o/jtnNsuzTO8K7Fw36yrzcYoaZAxxhhe0J477rrrznkLbqMd/KVPJhLzHb/Ygf32YYTRguK821577eLrboIeLazAhrlcCMEFF11QL//89Ndv/5dnXK/99vtjH4byzuMc+XZHvhYQ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",
                this.cursorImage = "data:image/png;base64,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"
            }
        }
    });
    function jm(e, t, n) {
        const o = t.length - 1;
        if (o < 0)
            return e === void 0 ? n : e;
        for (let r = 0; r < o; r++) {
            if (e == null)
                return n;
            e = e[t[r]]
        }
        return e == null || e[t[o]] === void 0 ? n : e[t[o]]
    }
    function Wu(e, t) {
        if (e === t)
            return !0;
        if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
            return !1;
        const n = Object.keys(e);
        return n.length !== Object.keys(t).length ? !1 : n.every(o=>Wu(e[o], t[o]))
    }
    function Ju(e, t, n) {
        return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"),
        t = t.replace(/^\./, ""),
        jm(e, t.split("."), n))
    }
    function Nm(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return Array.from({
            length: e
        }, (n,o)=>t + o)
    }
    function be(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
        if (!(e == null || e === ""))
            return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0
    }
    function Mi(e) {
        return e !== null && typeof e == "object" && !Array.isArray(e)
    }
    function qm(e) {
        return e == null ? void 0 : e.$el
    }
    const Xu = Object.freeze({
        enter: 13,
        tab: 9,
        delete: 46,
        esc: 27,
        space: 32,
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        end: 35,
        home: 36,
        del: 46,
        backspace: 8,
        insert: 45,
        pageup: 33,
        pagedown: 34,
        shift: 16
    });
    function Ym(e, t) {
        const n = Object.create(null)
          , o = Object.create(null);
        for (const r in e)
            t.some(i=>i instanceof RegExp ? i.test(r) : i === r) ? n[r] = e[r] : o[r] = e[r];
        return [n, o]
    }
    function zm(e, t) {
        const n = {
            ...e
        };
        return t.forEach(o=>delete n[o]),
        n
    }
    function Hm(e) {
        return e == null ? [] : Array.isArray(e) ? e : [e]
    }
    function Qi(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
          , n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        return Math.max(t, Math.min(n, e))
    }
    function _u(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
        return e + n.repeat(Math.max(0, t - e.length))
    }
    function Km(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const n = [];
        let o = 0;
        for (; o < e.length; )
            n.push(e.substr(o, t)),
            o += t;
        return n
    }
    function Ut() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0;
        const o = {};
        for (const r in e)
            o[r] = e[r];
        for (const r in t) {
            const i = e[r]
              , s = t[r];
            if (Mi(i) && Mi(s)) {
                o[r] = Ut(i, s, n);
                continue
            }
            if (Array.isArray(i) && Array.isArray(s) && n) {
                o[r] = n(i, s);
                continue
            }
            o[r] = s
        }
        return o
    }
    function Jt() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        if (Jt.cache.has(e))
            return Jt.cache.get(e);
        const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
        return Jt.cache.set(e, t),
        t
    }
    Jt.cache = new Map;
    function Oo(e, t) {
        if (!t || typeof t != "object")
            return [];
        if (Array.isArray(t))
            return t.map(n=>Oo(e, n)).flat(1);
        if (Array.isArray(t.children))
            return t.children.map(n=>Oo(e, n)).flat(1);
        if (t.component) {
            if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
                return [t.component];
            if (t.component.subTree)
                return Oo(e, t.component.subTree).flat(1)
        }
        return []
    }
    function Si(e) {
        const t = Ve({})
          , n = I(e);
        return yt(()=>{
            for (const o in n.value)
                t[o] = n.value[o]
        }
        , {
            flush: "sync"
        }),
        hr(t)
    }
    function Rr(e, t) {
        return e.includes(t)
    }
    function $u(e, t) {
        return t = "on" + sn(t),
        !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`])
    }
    const ec = ["top", "bottom"]
      , Zm = ["start", "end", "left", "right"];
    function xi(e, t) {
        let[n,o] = e.split(" ");
        return o || (o = Rr(ec, n) ? "start" : Rr(Zm, n) ? "top" : "center"),
        {
            side: tc(n, t),
            align: tc(o, t)
        }
    }
    function tc(e, t) {
        return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e
    }
    function ki(e) {
        return {
            side: {
                center: "center",
                top: "bottom",
                bottom: "top",
                left: "right",
                right: "left"
            }[e.side],
            align: e.align
        }
    }
    function Oi(e) {
        return {
            side: e.side,
            align: {
                center: "center",
                top: "bottom",
                bottom: "top",
                left: "right",
                right: "left"
            }[e.align]
        }
    }
    function nc(e) {
        return {
            side: e.align,
            align: e.side
        }
    }
    function oc(e) {
        return Rr(ec, e.side) ? "y" : "x"
    }
    class Jn {
        constructor(t) {
            let {x: n, y: o, width: r, height: i} = t;
            this.x = n,
            this.y = o,
            this.width = r,
            this.height = i
        }
        get top() {
            return this.y
        }
        get bottom() {
            return this.y + this.height
        }
        get left() {
            return this.x
        }
        get right() {
            return this.x + this.width
        }
    }
    function rc(e, t) {
        return {
            x: {
                before: Math.max(0, t.left - e.left),
                after: Math.max(0, e.right - t.right)
            },
            y: {
                before: Math.max(0, t.top - e.top),
                after: Math.max(0, e.bottom - t.bottom)
            }
        }
    }
    function ac(e) {
        const t = e.getBoundingClientRect()
          , n = getComputedStyle(e)
          , o = n.transform;
        if (o) {
            let r, i, s, u, c;
            if (o.startsWith("matrix3d("))
                r = o.slice(9, -1).split(/, /),
                i = +r[0],
                s = +r[5],
                u = +r[12],
                c = +r[13];
            else if (o.startsWith("matrix("))
                r = o.slice(7, -1).split(/, /),
                i = +r[0],
                s = +r[3],
                u = +r[4],
                c = +r[5];
            else
                return new Jn(t);
            const A = n.transformOrigin
              , p = t.x - u - (1 - i) * parseFloat(A)
              , a = t.y - c - (1 - s) * parseFloat(A.slice(A.indexOf(" ") + 1))
              , l = i ? t.width / i : e.offsetWidth + 1
              , d = s ? t.height / s : e.offsetHeight + 1;
            return new Jn({
                x: p,
                y: a,
                width: l,
                height: d
            })
        } else
            return new Jn(t)
    }
    function Do(e, t, n) {
        if (typeof e.animate > "u")
            return {
                finished: Promise.resolve()
            };
        let o;
        try {
            o = e.animate(t, n)
        } catch {
            return {
                finished: Promise.resolve()
            }
        }
        return typeof o.finished > "u" && (o.finished = new Promise(r=>{
            o.onfinish = ()=>{
                r(o)
            }
        }
        )),
        o
    }
    function ic(e, t, n) {
        if (n && (t = {
            __isVue: !0,
            $parent: n,
            $options: t
        }),
        t) {
            if (t.$_alreadyWarned = t.$_alreadyWarned || [],
            t.$_alreadyWarned.includes(e))
                return;
            t.$_alreadyWarned.push(e)
        }
        return `[Vuetify] ${e}` + (t ? Jm(t) : "")
    }
    function Xn(e, t, n) {
        ic(e, t, n) != null
    }
    function Di(e, t, n) {
        ic(e, t, n) != null
    }
    const Pm = /(?:^|[-_])(\w)/g
      , Wm = e=>e.replace(Pm, t=>t.toUpperCase()).replace(/[-_]/g, "");
    function Li(e, t) {
        var i;
        if (e.$root === e)
            return "<Root>";
        const n = typeof e == "function" && e.cid != null ? e.options : e.__isVue ? e.$options || e.constructor.options : e || {};
        let o = n.name || n._componentTag;
        const r = n.__file;
        return !o && r && (o = (i = r.match(/([^/\\]+)\.vue$/)) == null ? void 0 : i[1]),
        (o ? `<${Wm(o)}>` : "<Anonymous>") + (r && t !== !1 ? ` at ${r}` : "")
    }
    function Jm(e) {
        if (e.__isVue && e.$parent) {
            const t = [];
            let n = 0;
            for (; e; ) {
                if (t.length > 0) {
                    const o = t[t.length - 1];
                    if (o.constructor === e.constructor) {
                        n++,
                        e = e.$parent;
                        continue
                    } else
                        n > 0 && (t[t.length - 1] = [o, n],
                        n = 0)
                }
                t.push(e),
                e = e.$parent
            }
            return `

found in

` + t.map((o,r)=>`${r === 0 ? "---> " : " ".repeat(5 + r * 2)}${Array.isArray(o) ? `${Li(o[0])}... (${o[1]} recursive calls)` : Li(o)}`).join(`
`)
        } else
            return `

(found in ${Li(e)})`
    }
    const Xm = [[3.2406, -1.5372, -.4986], [-.9689, 1.8758, .0415], [.0557, -.204, 1.057]]
      , _m = e=>e <= .0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - .055
      , $m = [[.4124, .3576, .1805], [.2126, .7152, .0722], [.0193, .1192, .9505]]
      , eh = e=>e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
    function sc(e) {
        const t = Array(3)
          , n = _m
          , o = Xm;
        for (let r = 0; r < 3; ++r)
            t[r] = Math.round(Qi(n(o[r][0] * e[0] + o[r][1] * e[1] + o[r][2] * e[2])) * 255);
        return {
            r: t[0],
            g: t[1],
            b: t[2]
        }
    }
    function Ti(e) {
        let {r: t, g: n, b: o} = e;
        const r = [0, 0, 0]
          , i = eh
          , s = $m;
        t = i(t / 255),
        n = i(n / 255),
        o = i(o / 255);
        for (let u = 0; u < 3; ++u)
            r[u] = s[u][0] * t + s[u][1] * n + s[u][2] * o;
        return r
    }
    const Ur = .20689655172413793
      , th = e=>e > Ur ** 3 ? Math.cbrt(e) : e / (3 * Ur ** 2) + 4 / 29
      , nh = e=>e > Ur ? e ** 3 : 3 * Ur ** 2 * (e - 4 / 29);
    function lc(e) {
        const t = th
          , n = t(e[1]);
        return [116 * n - 16, 500 * (t(e[0] / .95047) - n), 200 * (n - t(e[2] / 1.08883))]
    }
    function uc(e) {
        const t = nh
          , n = (e[0] + 16) / 116;
        return [t(n + e[1] / 500) * .95047, t(n), t(n - e[2] / 200) * 1.08883]
    }
    function cc(e) {
        return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e)
    }
    function yn(e) {
        if (typeof e == "number")
            return (isNaN(e) || e < 0 || e > 16777215) && Xn(`'${e}' is not a valid hex color`),
            {
                r: (e & 16711680) >> 16,
                g: (e & 65280) >> 8,
                b: e & 255
            };
        if (typeof e == "string") {
            let t = e.startsWith("#") ? e.slice(1) : e;
            [3, 4].includes(t.length) ? t = t.split("").map(o=>o + o).join("") : [6, 8].includes(t.length) || Xn(`'${e}' is not a valid hex(a) color`);
            const n = parseInt(t, 16);
            return (isNaN(n) || n < 0 || n > 4294967295) && Xn(`'${e}' is not a valid hex(a) color`),
            rh(t)
        } else
            throw new TypeError(`Colors can only be numbers or strings, recieved ${e == null ? e : e.constructor.name} instead`)
    }
    function Gr(e) {
        const t = Math.round(e).toString(16);
        return ("00".substr(0, 2 - t.length) + t).toUpperCase()
    }
    function oh(e) {
        let {r: t, g: n, b: o, a: r} = e;
        return `#${[Gr(t), Gr(n), Gr(o), r !== void 0 ? Gr(Math.round(r * 255)) : ""].join("")}`
    }
    function rh(e) {
        e = ah(e);
        let[t,n,o,r] = Km(e, 2).map(i=>parseInt(i, 16));
        return r = r === void 0 ? r : r / 255,
        {
            r: t,
            g: n,
            b: o,
            a: r
        }
    }
    function ah(e) {
        return e.startsWith("#") && (e = e.slice(1)),
        e = e.replace(/([^0-9a-f])/gi, "F"),
        (e.length === 3 || e.length === 4) && (e = e.split("").map(t=>t + t).join("")),
        e.length !== 6 && (e = _u(_u(e, 6), 8, "F")),
        e
    }
    function ih(e, t) {
        const n = lc(Ti(e));
        return n[0] = n[0] + t * 10,
        sc(uc(n))
    }
    function sh(e, t) {
        const n = lc(Ti(e));
        return n[0] = n[0] - t * 10,
        sc(uc(n))
    }
    function lh(e) {
        const t = yn(e);
        return Ti(t)[1]
    }
    function it(e, t) {
        const n = kr();
        if (!n)
            throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
        return n
    }
    function Cn() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
        const t = it(e).type;
        return Jt((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name))
    }
    let dc = 0
      , jr = new WeakMap;
    function Nr() {
        const e = it("getUid");
        if (jr.has(e))
            return jr.get(e);
        {
            const t = dc++;
            return jr.set(e, t),
            t
        }
    }
    Nr.reset = ()=>{
        dc = 0,
        jr = new WeakMap
    }
    ;
    function uh(e) {
        const {provides: t} = it("injectSelf");
        if (t && e in t)
            return t[e]
    }
    function Me(e, t) {
        return n=>Object.keys(e).reduce((o,r)=>{
            const i = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : {
                type: e[r]
            };
            return n && r in n ? o[r] = {
                ...i,
                default: n[r]
            } : o[r] = i,
            t && !o[r].source && (o[r].source = t),
            o
        }
        , {})
    }
    const Lo = Symbol.for("vuetify:defaults");
    function ch(e) {
        return G(e)
    }
    function Ac() {
        const e = pe(Lo);
        if (!e)
            throw new Error("[Vuetify] Could not find defaults instance");
        return e
    }
    function Vi(e, t) {
        const n = Ac()
          , o = G(e)
          , r = I(()=>{
            if (q(t == null ? void 0 : t.disabled))
                return n.value;
            const i = q(t == null ? void 0 : t.scoped)
              , s = q(t == null ? void 0 : t.reset)
              , u = q(t == null ? void 0 : t.root);
            let c = Ut(o.value, {
                prev: n.value
            });
            if (i)
                return c;
            if (s || u) {
                const A = Number(s || 1 / 0);
                for (let p = 0; p <= A && !(!c || !("prev"in c)); p++)
                    c = c.prev;
                return c
            }
            return Ut(c.prev, c)
        }
        );
        return qe(Lo, r),
        r
    }
    function To(e, t) {
        let n;
        function o() {
            n = Ao(),
            n.run(()=>t.length ? t(()=>{
                n == null || n.stop(),
                o()
            }
            ) : t())
        }
        me(e, r=>{
            r && !n ? o() : r || (n == null || n.stop(),
            n = void 0)
        }
        , {
            immediate: !0
        }),
        ot(()=>{
            n == null || n.stop()
        }
        )
    }
    function dh(e, t) {
        var n, o;
        return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((o = e.props) == null ? void 0 : o[Jt(t)]) < "u"
    }
    function Vo(e) {
        if (e._setup = e._setup ?? e.setup,
        !e.name)
            return Xn("The component is missing an explicit name, unable to generate default prop value"),
            e;
        if (e._setup) {
            e.props = Me(e.props ?? {}, Jt(e.name))();
            const t = Object.keys(e.props);
            e.filterProps = function(n) {
                return Ym(n, t)
            }
            ,
            e.props._as = String,
            e.setup = function(n, o) {
                const r = Ac();
                if (!r.value)
                    return e._setup(n, o);
                const i = kr()
                  , s = I(()=>r.value[n._as ?? e.name])
                  , u = new Proxy(n,{
                    get(p, a) {
                        var d, f;
                        const l = Reflect.get(p, a);
                        return typeof a == "string" && !dh(i.vnode, a) ? ((d = s.value) == null ? void 0 : d[a]) ?? ((f = r.value.global) == null ? void 0 : f[a]) ?? l : l
                    }
                })
                  , c = Ra();
                yt(()=>{
                    if (s.value) {
                        const p = Object.entries(s.value).filter(a=>{
                            let[l] = a;
                            return l.startsWith(l[0].toUpperCase())
                        }
                        );
                        p.length && (c.value = Object.fromEntries(p))
                    }
                }
                );
                const A = e._setup(u, o);
                return To(c, ()=>{
                    var p;
                    Vi(Ut(((p = uh(Lo)) == null ? void 0 : p.value) ?? {}, c.value))
                }
                ),
                A
            }
        }
        return e
    }
    function Ye() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        return t=>(e ? Vo : Lt)(t)
    }
    function Ah(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div"
          , n = arguments.length > 2 ? arguments[2] : void 0;
        return Ye()({
            name: n ?? sn(ct(e.replace(/__/g, "-"))),
            props: {
                tag: {
                    type: String,
                    default: t
                }
            },
            setup(o, r) {
                let {slots: i} = r;
                return ()=>{
                    var s;
                    return Ge(o.tag, {
                        class: e
                    }, (s = i.default) == null ? void 0 : s.call(i))
                }
            }
        })
    }
    function pc(e) {
        if (typeof e.getRootNode != "function") {
            for (; e.parentNode; )
                e = e.parentNode;
            return e !== document ? null : document
        }
        const t = e.getRootNode();
        return t !== document && t.getRootNode({
            composed: !0
        }) !== document ? null : t
    }
    const Fi = "cubic-bezier(0.4, 0, 0.2, 1)"
      , ph = "cubic-bezier(0.0, 0, 0.2, 1)"
      , fh = "cubic-bezier(0.4, 0, 1, 1)";
    function gh(e) {
        for (; e; ) {
            if (Ri(e))
                return e;
            e = e.parentElement
        }
        return document.scrollingElement
    }
    function qr(e, t) {
        const n = [];
        if (t && e && !t.contains(e))
            return n;
        for (; e && (Ri(e) && n.push(e),
        e !== t); )
            e = e.parentElement;
        return n
    }
    function Ri(e) {
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
            return !1;
        const t = window.getComputedStyle(e);
        return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight
    }
    const je = typeof window < "u"
      , Ui = je && "IntersectionObserver"in window
      , mh = je && ("ontouchstart"in window || window.navigator.maxTouchPoints > 0)
      , hh = je && typeof CSS < "u" && CSS.supports("selector(:focus-visible)");
    function vh(e) {
        for (; e; ) {
            if (window.getComputedStyle(e).position === "fixed")
                return !0;
            e = e.offsetParent
        }
        return !1
    }
    function et(e) {
        const t = it("useRender");
        t.render = e
    }
    const fc = Me({
        border: [Boolean, Number, String]
    }, "border");
    function gc(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
        return {
            borderClasses: I(()=>{
                const n = Ce(e) ? e.value : e.border
                  , o = [];
                if (n === !0 || n === "")
                    o.push(`${t}--border`);
                else if (typeof n == "string" || n === 0)
                    for (const r of String(n).split(" "))
                        o.push(`border-${r}`);
                return o
            }
            )
        }
    }
    const bh = [null, "default", "comfortable", "compact"]
      , Gi = Me({
        density: {
            type: String,
            default: "default",
            validator: e=>bh.includes(e)
        }
    }, "density");
    function ji(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
        return {
            densityClasses: I(()=>`${t}--density-${e.density}`)
        }
    }
    const Ni = Me({
        elevation: {
            type: [Number, String],
            validator(e) {
                const t = parseInt(e);
                return !isNaN(t) && t >= 0 && t <= 24
            }
        }
    }, "elevation");
    function qi(e) {
        return {
            elevationClasses: I(()=>{
                const t = Ce(e) ? e.value : e.elevation
                  , n = [];
                return t == null || n.push(`elevation-${t}`),
                n
            }
            )
        }
    }
    const Yr = Me({
        rounded: {
            type: [Boolean, Number, String],
            default: void 0
        }
    }, "rounded");
    function zr(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
        return {
            roundedClasses: I(()=>{
                const n = Ce(e) ? e.value : e.rounded
                  , o = [];
                if (n === !0 || n === "")
                    o.push(`${t}--rounded`);
                else if (typeof n == "string" || n === 0)
                    for (const r of String(n).split(" "))
                        o.push(`rounded-${r}`);
                return o
            }
            )
        }
    }
    const Xt = Me({
        tag: {
            type: String,
            default: "div"
        }
    }, "tag")
      , _n = 2.4
      , mc = .2126729
      , hc = .7151522
      , vc = .072175
      , wh = .55
      , yh = .58
      , Ch = .57
      , Eh = .62
      , Hr = .03
      , bc = 1.45
      , Ih = 5e-4
      , Bh = 1.25
      , Mh = 1.25
      , wc = .078
      , yc = 12.82051282051282
      , Kr = .06
      , Cc = .001;
    function Ec(e, t) {
        const n = (e.r / 255) ** _n
          , o = (e.g / 255) ** _n
          , r = (e.b / 255) ** _n
          , i = (t.r / 255) ** _n
          , s = (t.g / 255) ** _n
          , u = (t.b / 255) ** _n;
        let c = n * mc + o * hc + r * vc
          , A = i * mc + s * hc + u * vc;
        if (c <= Hr && (c += (Hr - c) ** bc),
        A <= Hr && (A += (Hr - A) ** bc),
        Math.abs(A - c) < Ih)
            return 0;
        let p;
        if (A > c) {
            const a = (A ** wh - c ** yh) * Bh;
            p = a < Cc ? 0 : a < wc ? a - a * yc * Kr : a - Kr
        } else {
            const a = (A ** Eh - c ** Ch) * Mh;
            p = a > -Cc ? 0 : a > -wc ? a - a * yc * Kr : a + Kr
        }
        return p * 100
    }
    const Zr = Symbol.for("vuetify:theme")
      , _t = Me({
        theme: String
    }, "theme")
      , Fo = {
        defaultTheme: "light",
        variations: {
            colors: [],
            lighten: 0,
            darken: 0
        },
        themes: {
            light: {
                dark: !1,
                colors: {
                    background: "#FFFFFF",
                    surface: "#FFFFFF",
                    "surface-variant": "#424242",
                    "on-surface-variant": "#EEEEEE",
                    primary: "#6200EE",
                    "primary-darken-1": "#3700B3",
                    secondary: "#03DAC6",
                    "secondary-darken-1": "#018786",
                    error: "#B00020",
                    info: "#2196F3",
                    success: "#4CAF50",
                    warning: "#FB8C00"
                },
                variables: {
                    "border-color": "#000000",
                    "border-opacity": .12,
                    "high-emphasis-opacity": .87,
                    "medium-emphasis-opacity": .6,
                    "disabled-opacity": .38,
                    "idle-opacity": .04,
                    "hover-opacity": .04,
                    "focus-opacity": .12,
                    "selected-opacity": .08,
                    "activated-opacity": .12,
                    "pressed-opacity": .12,
                    "dragged-opacity": .08,
                    "theme-kbd": "#212529",
                    "theme-on-kbd": "#FFFFFF",
                    "theme-code": "#F5F5F5",
                    "theme-on-code": "#000000"
                }
            },
            dark: {
                dark: !0,
                colors: {
                    background: "#121212",
                    surface: "#212121",
                    "surface-variant": "#BDBDBD",
                    "on-surface-variant": "#424242",
                    primary: "#BB86FC",
                    "primary-darken-1": "#3700B3",
                    secondary: "#03DAC5",
                    "secondary-darken-1": "#03DAC5",
                    error: "#CF6679",
                    info: "#2196F3",
                    success: "#4CAF50",
                    warning: "#FB8C00"
                },
                variables: {
                    "border-color": "#FFFFFF",
                    "border-opacity": .12,
                    "high-emphasis-opacity": .87,
                    "medium-emphasis-opacity": .6,
                    "disabled-opacity": .38,
                    "idle-opacity": .1,
                    "hover-opacity": .04,
                    "focus-opacity": .12,
                    "selected-opacity": .08,
                    "activated-opacity": .12,
                    "pressed-opacity": .16,
                    "dragged-opacity": .08,
                    "theme-kbd": "#212529",
                    "theme-on-kbd": "#FFFFFF",
                    "theme-code": "#343434",
                    "theme-on-code": "#CCCCCC"
                }
            }
        }
    };
    function Qh() {
        var n, o;
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fo;
        if (!e)
            return {
                ...Fo,
                isDisabled: !0
            };
        const t = {};
        for (const [r,i] of Object.entries(e.themes ?? {})) {
            const s = i.dark || r === "dark" ? (n = Fo.themes) == null ? void 0 : n.dark : (o = Fo.themes) == null ? void 0 : o.light;
            t[r] = Ut(s, i)
        }
        return Ut(Fo, {
            ...e,
            themes: t
        })
    }
    function Sh(e) {
        const t = Ve(Qh(e))
          , n = G(t.defaultTheme)
          , o = G(t.themes)
          , r = I(()=>{
            const p = {};
            for (const [a,l] of Object.entries(o.value)) {
                const d = p[a] = {
                    ...l,
                    colors: {
                        ...l.colors
                    }
                };
                if (t.variations)
                    for (const f of t.variations.colors) {
                        const m = d.colors[f];
                        if (m)
                            for (const v of ["lighten", "darken"]) {
                                const g = v === "lighten" ? ih : sh;
                                for (const h of Nm(t.variations[v], 1))
                                    d.colors[`${f}-${v}-${h}`] = oh(g(yn(m), h))
                            }
                    }
                for (const f of Object.keys(d.colors)) {
                    if (/^on-[a-z]/.test(f) || d.colors[`on-${f}`])
                        continue;
                    const m = `on-${f}`
                      , v = yn(d.colors[f])
                      , g = Math.abs(Ec(yn(0), v))
                      , h = Math.abs(Ec(yn(16777215), v));
                    d.colors[m] = h > Math.min(g, 50) ? "#fff" : "#000"
                }
            }
            return p
        }
        )
          , i = I(()=>r.value[n.value])
          , s = I(()=>{
            const p = [];
            i.value.dark && En(p, ":root", ["color-scheme: dark"]),
            En(p, ":root", Ic(i.value));
            for (const [f,m] of Object.entries(r.value))
                En(p, `.v-theme--${f}`, [`color-scheme: ${m.dark ? "dark" : "normal"}`, ...Ic(m)]);
            const a = []
              , l = []
              , d = new Set(Object.values(r.value).flatMap(f=>Object.keys(f.colors)));
            for (const f of d)
                /^on-[a-z]/.test(f) ? En(l, `.${f}`, [`color: rgb(var(--v-theme-${f})) !important`]) : (En(a, `.bg-${f}`, [`--v-theme-overlay-multiplier: var(--v-theme-${f}-overlay-multiplier)`, `background: rgb(var(--v-theme-${f})) !important`, `color: rgb(var(--v-theme-on-${f})) !important`]),
                En(l, `.text-${f}`, [`color: rgb(var(--v-theme-${f})) !important`]),
                En(l, `.border-${f}`, [`--v-border-color: var(--v-theme-${f})`]));
            return p.push(...a, ...l),
            p.map((f,m)=>m === 0 ? f : `    ${f}`).join("")
        }
        );
        function u() {
            return {
                style: [{
                    children: s.value,
                    id: "vuetify-theme-stylesheet",
                    nonce: t.cspNonce || !1
                }]
            }
        }
        function c(p) {
            const a = p._context.provides.usehead;
            if (a)
                if (a.push) {
                    const l = a.push(u);
                    me(s, ()=>{
                        l.patch(u)
                    }
                    )
                } else
                    je ? (a.addHeadObjs(I(u)),
                    yt(()=>a.updateDOM())) : a.addHeadObjs(u());
            else {
                let l = function() {
                    if (!t.isDisabled) {
                        if (typeof document < "u" && !d) {
                            const f = document.createElement("style");
                            f.type = "text/css",
                            f.id = "vuetify-theme-stylesheet",
                            t.cspNonce && f.setAttribute("nonce", t.cspNonce),
                            d = f,
                            document.head.appendChild(d)
                        }
                        d && (d.innerHTML = s.value)
                    }
                }
                  , d = je ? document.getElementById("vuetify-theme-stylesheet") : null;
                me(s, l, {
                    immediate: !0
                })
            }
        }
        const A = I(()=>t.isDisabled ? void 0 : `v-theme--${n.value}`);
        return {
            install: c,
            isDisabled: t.isDisabled,
            name: n,
            themes: o,
            current: i,
            computedThemes: r,
            themeClasses: A,
            styles: s,
            global: {
                name: n,
                current: i
            }
        }
    }
    function $t(e) {
        it("provideTheme");
        const t = pe(Zr, null);
        if (!t)
            throw new Error("Could not find Vuetify theme injection");
        const n = I(()=>e.theme ?? (t == null ? void 0 : t.name.value))
          , o = I(()=>t.isDisabled ? void 0 : `v-theme--${n.value}`)
          , r = {
            ...t,
            name: n,
            themeClasses: o
        };
        return qe(Zr, r),
        r
    }
    function En(e, t, n) {
        e.push(`${t} {
`, ...n.map(o=>`  ${o};
`), `}
`)
    }
    function Ic(e) {
        const t = e.dark ? 2 : 1
          , n = e.dark ? 1 : 2
          , o = [];
        for (const [r,i] of Object.entries(e.colors)) {
            const s = yn(i);
            o.push(`--v-theme-${r}: ${s.r},${s.g},${s.b}`),
            r.startsWith("on-") || o.push(`--v-theme-${r}-overlay-multiplier: ${lh(i) > .18 ? t : n}`)
        }
        for (const [r,i] of Object.entries(e.variables)) {
            const s = typeof i == "string" && i.startsWith("#") ? yn(i) : void 0
              , u = s ? `${s.r}, ${s.g}, ${s.b}` : void 0;
            o.push(`--v-${r}: ${u ?? i}`)
        }
        return o
    }
    function Yi(e) {
        return Si(()=>{
            const t = []
              , n = {};
            return e.value.background && (cc(e.value.background) ? n.backgroundColor = e.value.background : t.push(`bg-${e.value.background}`)),
            e.value.text && (cc(e.value.text) ? (n.color = e.value.text,
            n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)),
            {
                colorClasses: t,
                colorStyles: n
            }
        }
        )
    }
    function Ro(e, t) {
        const n = I(()=>({
            text: Ce(e) ? e.value : t ? e[t] : null
        }))
          , {colorClasses: o, colorStyles: r} = Yi(n);
        return {
            textColorClasses: o,
            textColorStyles: r
        }
    }
    function zi(e, t) {
        const n = I(()=>({
            background: Ce(e) ? e.value : t ? e[t] : null
        }))
          , {colorClasses: o, colorStyles: r} = Yi(n);
        return {
            backgroundColorClasses: o,
            backgroundColorStyles: r
        }
    }
    const xh = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
    function Bc(e, t) {
        return S(Se, null, [e && S("span", {
            key: "overlay",
            class: `${t}__overlay`
        }, null), S("span", {
            key: "underlay",
            class: `${t}__underlay`
        }, null)])
    }
    const Hi = Me({
        color: String,
        variant: {
            type: String,
            default: "elevated",
            validator: e=>xh.includes(e)
        }
    }, "variant");
    function Mc(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
        const n = I(()=>{
            const {variant: i} = q(e);
            return `${t}--variant-${i}`
        }
        )
          , {colorClasses: o, colorStyles: r} = Yi(I(()=>{
            const {variant: i, color: s} = q(e);
            return {
                [["elevated", "flat"].includes(i) ? "background" : "text"]: s
            }
        }
        ));
        return {
            colorClasses: o,
            colorStyles: r,
            variantClasses: n
        }
    }
    const Qc = Me({
        divided: Boolean,
        ...fc(),
        ...Gi(),
        ...Ni(),
        ...Yr(),
        ...Xt(),
        ..._t(),
        ...Hi()
    }, "v-btn-group")
      , Sc = Ye()({
        name: "VBtnGroup",
        props: Qc(),
        setup(e, t) {
            let {slots: n} = t;
            const {themeClasses: o} = $t(e)
              , {densityClasses: r} = ji(e)
              , {borderClasses: i} = gc(e)
              , {elevationClasses: s} = qi(e)
              , {roundedClasses: u} = zr(e);
            Vi({
                VBtn: {
                    height: "auto",
                    color: dt(e, "color"),
                    density: dt(e, "density"),
                    flat: !0,
                    variant: dt(e, "variant")
                }
            }),
            et(()=>S(e.tag, {
                class: ["v-btn-group", {
                    "v-btn-group--divided": e.divided
                }, o.value, i.value, r.value, s.value, u.value]
            }, n))
        }
    });
    function In(e, t, n) {
        let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : p=>p
          , r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : p=>p;
        const i = it("useProxiedModel")
          , s = G(e[t] !== void 0 ? e[t] : n)
          , u = Jt(t)
          , c = I(u !== t ? ()=>{
            var p, a, l, d;
            return e[t],
            !!(((p = i.vnode.props) != null && p.hasOwnProperty(t) || (a = i.vnode.props) != null && a.hasOwnProperty(u)) && ((l = i.vnode.props) != null && l.hasOwnProperty(`onUpdate:${t}`) || (d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${u}`)))
        }
        : ()=>{
            var p, a;
            return e[t],
            !!((p = i.vnode.props) != null && p.hasOwnProperty(t) && ((a = i.vnode.props) != null && a.hasOwnProperty(`onUpdate:${t}`)))
        }
        );
        To(()=>!c.value, ()=>{
            me(()=>e[t], p=>{
                s.value = p
            }
            )
        }
        );
        const A = I({
            get() {
                return o(c.value ? e[t] : s.value)
            },
            set(p) {
                const a = r(p)
                  , l = ve(c.value ? e[t] : s.value);
                l === a || o(l) === p || (s.value = a,
                i == null || i.emit(`update:${t}`, a))
            }
        });
        return Object.defineProperty(A, "externalValue", {
            get: ()=>c.value ? e[t] : s.value
        }),
        A
    }
    const kh = Me({
        modelValue: {
            type: null,
            default: void 0
        },
        multiple: Boolean,
        mandatory: [Boolean, String],
        max: Number,
        selectedClass: String,
        disabled: Boolean
    }, "group")
      , Oh = Me({
        value: null,
        disabled: Boolean,
        selectedClass: String
    }, "group-item");
    function Dh(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        const o = it("useGroupItem");
        if (!o)
            throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
        const r = Nr();
        qe(Symbol.for(`${t.description}:id`), r);
        const i = pe(t, null);
        if (!i) {
            if (!n)
                return i;
            throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)
        }
        const s = dt(e, "value")
          , u = I(()=>i.disabled.value || e.disabled);
        i.register({
            id: r,
            value: s,
            disabled: u
        }, o),
        An(()=>{
            i.unregister(r)
        }
        );
        const c = I(()=>i.isSelected(r))
          , A = I(()=>c.value && [i.selectedClass.value, e.selectedClass]);
        return me(c, p=>{
            o.emit("group:selected", {
                value: p
            })
        }
        ),
        {
            id: r,
            isSelected: c,
            toggle: ()=>i.select(r, !c.value),
            select: p=>i.select(r, p),
            selectedClass: A,
            value: s,
            disabled: u,
            group: i
        }
    }
    function Lh(e, t) {
        let n = !1;
        const o = Ve([])
          , r = In(e, "modelValue", [], l=>l == null ? [] : xc(o, Hm(l)), l=>{
            const d = Vh(o, l);
            return e.multiple ? d : d[0]
        }
        )
          , i = it("useGroup");
        function s(l, d) {
            const f = l
              , m = Symbol.for(`${t.description}:id`)
              , v = Oo(m, i == null ? void 0 : i.vnode).indexOf(d);
            v > -1 ? o.splice(v, 0, f) : o.push(f)
        }
        function u(l) {
            if (n)
                return;
            c();
            const d = o.findIndex(f=>f.id === l);
            o.splice(d, 1)
        }
        function c() {
            const l = o.find(d=>!d.disabled);
            l && e.mandatory === "force" && !r.value.length && (r.value = [l.id])
        }
        vt(()=>{
            c()
        }
        ),
        An(()=>{
            n = !0
        }
        );
        function A(l, d) {
            const f = o.find(m=>m.id === l);
            if (!(d && (f != null && f.disabled)))
                if (e.multiple) {
                    const m = r.value.slice()
                      , v = m.findIndex(h=>h === l)
                      , g = ~v;
                    if (d = d ?? !g,
                    g && e.mandatory && m.length <= 1 || !g && e.max != null && m.length + 1 > e.max)
                        return;
                    v < 0 && d ? m.push(l) : v >= 0 && !d && m.splice(v, 1),
                    r.value = m
                } else {
                    const m = r.value.includes(l);
                    if (e.mandatory && m)
                        return;
                    r.value = d ?? !m ? [l] : []
                }
        }
        function p(l) {
            if (e.multiple && Xn('This method is not supported when using "multiple" prop'),
            r.value.length) {
                const d = r.value[0]
                  , f = o.findIndex(g=>g.id === d);
                let m = (f + l) % o.length
                  , v = o[m];
                for (; v.disabled && m !== f; )
                    m = (m + l) % o.length,
                    v = o[m];
                if (v.disabled)
                    return;
                r.value = [o[m].id]
            } else {
                const d = o.find(f=>!f.disabled);
                d && (r.value = [d.id])
            }
        }
        const a = {
            register: s,
            unregister: u,
            selected: r,
            select: A,
            disabled: dt(e, "disabled"),
            prev: ()=>p(o.length - 1),
            next: ()=>p(1),
            isSelected: l=>r.value.includes(l),
            selectedClass: I(()=>e.selectedClass),
            items: I(()=>o),
            getItemIndex: l=>Th(o, l)
        };
        return qe(t, a),
        a
    }
    function Th(e, t) {
        const n = xc(e, [t]);
        return n.length ? e.findIndex(o=>o.id === n[0]) : -1
    }
    function xc(e, t) {
        const n = [];
        for (let o = 0; o < e.length; o++) {
            const r = e[o];
            r.value != null ? t.find(i=>Wu(i, r.value)) != null && n.push(r.id) : t.includes(o) && n.push(r.id)
        }
        return n
    }
    function Vh(e, t) {
        const n = [];
        for (let o = 0; o < e.length; o++) {
            const r = e[o];
            t.includes(r.id) && n.push(r.value != null ? r.value : o)
        }
        return n
    }
    const kc = Symbol.for("vuetify:v-btn-toggle");
    Ye()({
        name: "VBtnToggle",
        props: {
            ...Qc(),
            ...kh()
        },
        emits: {
            "update:modelValue": e=>!0
        },
        setup(e, t) {
            let {slots: n} = t;
            const {isSelected: o, next: r, prev: i, select: s, selected: u} = Lh(e, kc);
            return et(()=>{
                const [c] = Sc.filterProps(e);
                return S(Sc, He({
                    class: "v-btn-toggle"
                }, c), {
                    default: ()=>{
                        var A;
                        return [(A = n.default) == null ? void 0 : A.call(n, {
                            isSelected: o,
                            next: r,
                            prev: i,
                            select: s,
                            selected: u
                        })]
                    }
                })
            }
            ),
            {
                next: r,
                prev: i,
                select: s
            }
        }
    });
    const $n = Ye(!1)({
        name: "VDefaultsProvider",
        props: {
            defaults: Object,
            disabled: Boolean,
            reset: [Number, String],
            root: Boolean,
            scoped: Boolean
        },
        setup(e, t) {
            let {slots: n} = t;
            const {defaults: o, disabled: r, reset: i, root: s, scoped: u} = hr(e);
            return Vi(o, {
                reset: i,
                root: s,
                scoped: u,
                disabled: r
            }),
            ()=>{
                var c;
                return (c = n.default) == null ? void 0 : c.call(n)
            }
        }
    })
      , Fh = {
        collapse: "mdi-chevron-up",
        complete: "mdi-check",
        cancel: "mdi-close-circle",
        close: "mdi-close",
        delete: "mdi-close-circle",
        clear: "mdi-close-circle",
        success: "mdi-check-circle",
        info: "mdi-information",
        warning: "mdi-alert-circle",
        error: "mdi-close-circle",
        prev: "mdi-chevron-left",
        next: "mdi-chevron-right",
        checkboxOn: "mdi-checkbox-marked",
        checkboxOff: "mdi-checkbox-blank-outline",
        checkboxIndeterminate: "mdi-minus-box",
        delimiter: "mdi-circle",
        sortAsc: "mdi-arrow-up",
        sortDesc: "mdi-arrow-down",
        expand: "mdi-chevron-down",
        menu: "mdi-menu",
        subgroup: "mdi-menu-down",
        dropdown: "mdi-menu-down",
        radioOn: "mdi-radiobox-marked",
        radioOff: "mdi-radiobox-blank",
        edit: "mdi-pencil",
        ratingEmpty: "mdi-star-outline",
        ratingFull: "mdi-star",
        ratingHalf: "mdi-star-half-full",
        loading: "mdi-cached",
        first: "mdi-page-first",
        last: "mdi-page-last",
        unfold: "mdi-unfold-more-horizontal",
        file: "mdi-paperclip",
        plus: "mdi-plus",
        minus: "mdi-minus"
    }
      , Rh = {
        component: e=>Ge(Dc, {
            ...e,
            class: "mdi"
        })
    }
      , Uo = [String, Function, Object]
      , Ki = Symbol.for("vuetify:icons")
      , Pr = Me({
        icon: {
            type: Uo
        },
        tag: {
            type: String,
            required: !0
        }
    }, "icon")
      , Oc = Ye()({
        name: "VComponentIcon",
        props: Pr(),
        setup(e, t) {
            let {slots: n} = t;
            return ()=>S(e.tag, null, {
                default: ()=>{
                    var o;
                    return [e.icon ? S(e.icon, null, null) : (o = n.default) == null ? void 0 : o.call(n)]
                }
            })
        }
    })
      , Uh = Vo({
        name: "VSvgIcon",
        inheritAttrs: !1,
        props: Pr(),
        setup(e, t) {
            let {attrs: n} = t;
            return ()=>S(e.tag, He(n, {
                style: null
            }), {
                default: ()=>[S("svg", {
                    class: "v-icon__svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": "true"
                }, [S("path", {
                    d: e.icon
                }, null)])]
            })
        }
    });
    Vo({
        name: "VLigatureIcon",
        props: Pr(),
        setup(e) {
            return ()=>S(e.tag, null, {
                default: ()=>[e.icon]
            })
        }
    });
    const Dc = Vo({
        name: "VClassIcon",
        props: Pr(),
        setup(e) {
            return ()=>S(e.tag, {
                class: e.icon
            }, null)
        }
    })
      , Gh = {
        svg: {
            component: Uh
        },
        class: {
            component: Dc
        }
    };
    function jh(e) {
        return Ut({
            defaultSet: "mdi",
            sets: {
                ...Gh,
                mdi: Rh
            },
            aliases: Fh
        }, e)
    }
    const Nh = e=>{
        const t = pe(Ki);
        if (!t)
            throw new Error("Missing Vuetify Icons provide!");
        return {
            iconData: I(()=>{
                var s;
                const n = Ce(e) ? e.value : e.icon;
                if (!n)
                    return {
                        component: Oc
                    };
                let o = n;
                if (typeof o == "string" && (o = o.trim(),
                o.startsWith("$") && (o = (s = t.aliases) == null ? void 0 : s[o.slice(1)])),
                !o)
                    throw new Error(`Could not find aliased icon "${n}"`);
                if (typeof o != "string")
                    return {
                        component: Oc,
                        icon: o
                    };
                const r = Object.keys(t.sets).find(u=>typeof o == "string" && o.startsWith(`${u}:`))
                  , i = r ? o.slice(r.length + 1) : o;
                return {
                    component: t.sets[r ?? t.defaultSet].component,
                    icon: i
                }
            }
            )
        }
    }
      , qh = ["x-small", "small", "default", "large", "x-large"]
      , Zi = Me({
        size: {
            type: [String, Number],
            default: "default"
        }
    }, "size");
    function Pi(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
        return Si(()=>{
            let n, o;
            return Rr(qh, e.size) ? n = `${t}--size-${e.size}` : e.size && (o = {
                width: be(e.size),
                height: be(e.size)
            }),
            {
                sizeClasses: n,
                sizeStyles: o
            }
        }
        )
    }
    const Yh = Me({
        color: String,
        start: Boolean,
        end: Boolean,
        icon: Uo,
        ...Zi(),
        ...Xt({
            tag: "i"
        }),
        ..._t()
    }, "v-icon")
      , Bn = Ye()({
        name: "VIcon",
        props: Yh(),
        setup(e, t) {
            let {attrs: n, slots: o} = t, r;
            o.default && (r = I(()=>{
                var a, l;
                const p = (a = o.default) == null ? void 0 : a.call(o);
                if (p)
                    return (l = p.filter(d=>d.type === Un && d.children && typeof d.children == "string")[0]) == null ? void 0 : l.children
            }
            ));
            const {themeClasses: i} = $t(e)
              , {iconData: s} = Nh(r || e)
              , {sizeClasses: u} = Pi(e)
              , {textColorClasses: c, textColorStyles: A} = Ro(dt(e, "color"));
            return et(()=>S(s.value.component, {
                tag: e.tag,
                icon: s.value.icon,
                class: ["v-icon", "notranslate", i.value, u.value, c.value, {
                    "v-icon--clickable": !!n.onClick,
                    "v-icon--start": e.start,
                    "v-icon--end": e.end
                }],
                style: [u.value ? void 0 : {
                    fontSize: be(e.size),
                    height: be(e.size),
                    width: be(e.size)
                }, A.value],
                role: n.onClick ? "button" : void 0,
                "aria-hidden": !n.onClick
            }, {
                default: ()=>{
                    var p;
                    return [(p = o.default) == null ? void 0 : p.call(o)]
                }
            })),
            {}
        }
    });
    function Lc(e) {
        const t = G()
          , n = G(!1);
        if (Ui) {
            const o = new IntersectionObserver(r=>{
                e == null || e(r, o),
                n.value = !!r.find(i=>i.isIntersecting)
            }
            );
            An(()=>{
                o.disconnect()
            }
            ),
            me(t, (r,i)=>{
                i && (o.unobserve(i),
                n.value = !1),
                r && o.observe(r)
            }
            , {
                flush: "post"
            })
        }
        return {
            intersectionRef: t,
            isIntersecting: n
        }
    }
    function Tc(e) {
        const t = G()
          , n = G();
        if (je) {
            const o = new ResizeObserver(r=>{
                e == null || e(r, o),
                r.length && (n.value = r[0].contentRect)
            }
            );
            An(()=>{
                o.disconnect()
            }
            ),
            me(t, (r,i)=>{
                i && (o.unobserve(i),
                n.value = void 0),
                r && o.observe(r)
            }
            , {
                flush: "post"
            })
        }
        return {
            resizeRef: t,
            contentRect: fo(n)
        }
    }
    _o = Ye()({
        name: "VProgressCircular",
        props: {
            bgColor: String,
            color: String,
            indeterminate: [Boolean, String],
            modelValue: {
                type: [Number, String],
                default: 0
            },
            rotate: {
                type: [Number, String],
                default: 0
            },
            width: {
                type: [Number, String],
                default: 4
            },
            ...Zi(),
            ...Xt({
                tag: "div"
            }),
            ..._t()
        },
        setup(e, t) {
            let {slots: n} = t;
            const o = 20
              , r = 2 * Math.PI * o
              , i = G()
              , {themeClasses: s} = $t(e)
              , {sizeClasses: u, sizeStyles: c} = Pi(e)
              , {textColorClasses: A, textColorStyles: p} = Ro(dt(e, "color"))
              , {textColorClasses: a, textColorStyles: l} = Ro(dt(e, "bgColor"))
              , {intersectionRef: d, isIntersecting: f} = Lc()
              , {resizeRef: m, contentRect: v} = Tc()
              , g = I(()=>Math.max(0, Math.min(100, parseFloat(e.modelValue))))
              , h = I(()=>Number(e.width))
              , b = I(()=>c.value ? Number(e.size) : v.value ? v.value.width : Math.max(h.value, 32))
              , E = I(()=>o / (1 - h.value / b.value) * 2)
              , T = I(()=>h.value / b.value * E.value)
              , B = I(()=>be((100 - g.value) / 100 * r));
            return yt(()=>{
                d.value = i.value,
                m.value = i.value
            }
            ),
            et(()=>S(e.tag, {
                ref: i,
                class: ["v-progress-circular", {
                    "v-progress-circular--indeterminate": !!e.indeterminate,
                    "v-progress-circular--visible": f.value,
                    "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
                }, s.value, u.value, A.value],
                style: [c.value, p.value],
                role: "progressbar",
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                "aria-valuenow": e.indeterminate ? void 0 : g.value
            }, {
                default: ()=>[S("svg", {
                    style: {
                        transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: `0 0 ${E.value} ${E.value}`
                }, [S("circle", {
                    class: ["v-progress-circular__underlay", a.value],
                    style: l.value,
                    fill: "transparent",
                    cx: "50%",
                    cy: "50%",
                    r: o,
                    "stroke-width": T.value,
                    "stroke-dasharray": r,
                    "stroke-dashoffset": 0
                }, null), S("circle", {
                    class: "v-progress-circular__overlay",
                    fill: "transparent",
                    cx: "50%",
                    cy: "50%",
                    r: o,
                    "stroke-width": T.value,
                    "stroke-dasharray": r,
                    "stroke-dashoffset": B.value
                }, null)]), n.default && S("div", {
                    class: "v-progress-circular__content"
                }, [n.default({
                    value: g.value
                })])]
            })),
            {}
        }
    });
    const Wi = Symbol("rippleStop")
      , zh = 80;
    function Vc(e, t) {
        e.style.transform = t,
        e.style.webkitTransform = t
    }
    function Ji(e) {
        return e.constructor.name === "TouchEvent"
    }
    function Fc(e) {
        return e.constructor.name === "KeyboardEvent"
    }
    const Hh = function(e, t) {
        var a;
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
          , o = 0
          , r = 0;
        if (!Fc(e)) {
            const l = t.getBoundingClientRect()
              , d = Ji(e) ? e.touches[e.touches.length - 1] : e;
            o = d.clientX - l.left,
            r = d.clientY - l.top
        }
        let i = 0
          , s = .3;
        (a = t._ripple) != null && a.circle ? (s = .15,
        i = t.clientWidth / 2,
        i = n.center ? i : i + Math.sqrt((o - i) ** 2 + (r - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
        const u = `${(t.clientWidth - i * 2) / 2}px`
          , c = `${(t.clientHeight - i * 2) / 2}px`
          , A = n.center ? u : `${o - i}px`
          , p = n.center ? c : `${r - i}px`;
        return {
            radius: i,
            scale: s,
            x: A,
            y: p,
            centerX: u,
            centerY: c
        }
    }
      , Wr = {
        show(e, t) {
            var d;
            let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (!((d = t == null ? void 0 : t._ripple) != null && d.enabled))
                return;
            const o = document.createElement("span")
              , r = document.createElement("span");
            o.appendChild(r),
            o.className = "v-ripple__container",
            n.class && (o.className += ` ${n.class}`);
            const {radius: i, scale: s, x: u, y: c, centerX: A, centerY: p} = Hh(e, t, n)
              , a = `${i * 2}px`;
            r.className = "v-ripple__animation",
            r.style.width = a,
            r.style.height = a,
            t.appendChild(o);
            const l = window.getComputedStyle(t);
            l && l.position === "static" && (t.style.position = "relative",
            t.dataset.previousPosition = "static"),
            r.classList.add("v-ripple__animation--enter"),
            r.classList.add("v-ripple__animation--visible"),
            Vc(r, `translate(${u}, ${c}) scale3d(${s},${s},${s})`),
            r.dataset.activated = String(performance.now()),
            setTimeout(()=>{
                r.classList.remove("v-ripple__animation--enter"),
                r.classList.add("v-ripple__animation--in"),
                Vc(r, `translate(${A}, ${p}) scale3d(1,1,1)`)
            }
            , 0)
        },
        hide(e) {
            var i;
            if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled))
                return;
            const t = e.getElementsByClassName("v-ripple__animation");
            if (t.length === 0)
                return;
            const n = t[t.length - 1];
            if (n.dataset.isHiding)
                return;
            n.dataset.isHiding = "true";
            const o = performance.now() - Number(n.dataset.activated)
              , r = Math.max(250 - o, 0);
            setTimeout(()=>{
                n.classList.remove("v-ripple__animation--in"),
                n.classList.add("v-ripple__animation--out"),
                setTimeout(()=>{
                    var s;
                    e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition,
                    delete e.dataset.previousPosition),
                    ((s = n.parentNode) == null ? void 0 : s.parentNode) === e && e.removeChild(n.parentNode)
                }
                , 300)
            }
            , r)
        }
    };
    function Rc(e) {
        return typeof e > "u" || !!e
    }
    function Go(e) {
        const t = {}
          , n = e.currentTarget;
        if (!(!(n != null && n._ripple) || n._ripple.touched || e[Wi])) {
            if (e[Wi] = !0,
            Ji(e))
                n._ripple.touched = !0,
                n._ripple.isTouch = !0;
            else if (n._ripple.isTouch)
                return;
            if (t.center = n._ripple.centered || Fc(e),
            n._ripple.class && (t.class = n._ripple.class),
            Ji(e)) {
                if (n._ripple.showTimerCommit)
                    return;
                n._ripple.showTimerCommit = ()=>{
                    Wr.show(e, n, t)
                }
                ,
                n._ripple.showTimer = window.setTimeout(()=>{
                    var o;
                    (o = n == null ? void 0 : n._ripple) != null && o.showTimerCommit && (n._ripple.showTimerCommit(),
                    n._ripple.showTimerCommit = null)
                }
                , zh)
            } else
                Wr.show(e, n, t)
        }
    }
    function Uc(e) {
        e[Wi] = !0
    }
    function st(e) {
        const t = e.currentTarget;
        if (t != null && t._ripple) {
            if (window.clearTimeout(t._ripple.showTimer),
            e.type === "touchend" && t._ripple.showTimerCommit) {
                t._ripple.showTimerCommit(),
                t._ripple.showTimerCommit = null,
                t._ripple.showTimer = window.setTimeout(()=>{
                    st(e)
                }
                );
                return
            }
            window.setTimeout(()=>{
                t._ripple && (t._ripple.touched = !1)
            }
            ),
            Wr.hide(t)
        }
    }
    function Gc(e) {
        const t = e.currentTarget;
        t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
        window.clearTimeout(t._ripple.showTimer))
    }
    let jo = !1;
    function jc(e) {
        !jo && (e.keyCode === Xu.enter || e.keyCode === Xu.space) && (jo = !0,
        Go(e))
    }
    function Nc(e) {
        jo = !1,
        st(e)
    }
    function qc(e) {
        jo && (jo = !1,
        st(e))
    }
    function Yc(e, t, n) {
        const {value: o, modifiers: r} = t
          , i = Rc(o);
        if (i || Wr.hide(e),
        e._ripple = e._ripple ?? {},
        e._ripple.enabled = i,
        e._ripple.centered = r.center,
        e._ripple.circle = r.circle,
        Mi(o) && o.class && (e._ripple.class = o.class),
        i && !n) {
            if (r.stop) {
                e.addEventListener("touchstart", Uc, {
                    passive: !0
                }),
                e.addEventListener("mousedown", Uc);
                return
            }
            e.addEventListener("touchstart", Go, {
                passive: !0
            }),
            e.addEventListener("touchend", st, {
                passive: !0
            }),
            e.addEventListener("touchmove", Gc, {
                passive: !0
            }),
            e.addEventListener("touchcancel", st),
            e.addEventListener("mousedown", Go),
            e.addEventListener("mouseup", st),
            e.addEventListener("mouseleave", st),
            e.addEventListener("keydown", jc),
            e.addEventListener("keyup", Nc),
            e.addEventListener("blur", qc),
            e.addEventListener("dragstart", st, {
                passive: !0
            })
        } else
            !i && n && zc(e)
    }
    function zc(e) {
        e.removeEventListener("mousedown", Go),
        e.removeEventListener("touchstart", Go),
        e.removeEventListener("touchend", st),
        e.removeEventListener("touchmove", Gc),
        e.removeEventListener("touchcancel", st),
        e.removeEventListener("mouseup", st),
        e.removeEventListener("mouseleave", st),
        e.removeEventListener("keydown", jc),
        e.removeEventListener("keyup", Nc),
        e.removeEventListener("dragstart", st),
        e.removeEventListener("blur", qc)
    }
    function Kh(e, t) {
        Yc(e, t, !1)
    }
    function Zh(e) {
        delete e._ripple,
        zc(e)
    }
    function Ph(e, t) {
        if (t.value === t.oldValue)
            return;
        const n = Rc(t.oldValue);
        Yc(e, t, n)
    }
    const Wh = {
        mounted: Kh,
        unmounted: Zh,
        updated: Ph
    }
      , Jr = Me({
        height: [Number, String],
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        width: [Number, String]
    }, "dimension");
    function Xr(e) {
        return {
            dimensionStyles: I(()=>({
                height: be(e.height),
                maxHeight: be(e.maxHeight),
                maxWidth: be(e.maxWidth),
                minHeight: be(e.minHeight),
                minWidth: be(e.minWidth),
                width: be(e.width)
            }))
        }
    }
    const Jh = {
        badge: "Badge",
        close: "Close",
        dataIterator: {
            noResultsText: "No matching records found",
            loadingText: "Loading items..."
        },
        dataTable: {
            itemsPerPageText: "Rows per page:",
            ariaLabel: {
                sortDescending: "Sorted descending.",
                sortAscending: "Sorted ascending.",
                sortNone: "Not sorted.",
                activateNone: "Activate to remove sorting.",
                activateDescending: "Activate to sort descending.",
                activateAscending: "Activate to sort ascending."
            },
            sortBy: "Sort by"
        },
        dataFooter: {
            itemsPerPageText: "Items per page:",
            itemsPerPageAll: "All",
            nextPage: "Next page",
            prevPage: "Previous page",
            firstPage: "First page",
            lastPage: "Last page",
            pageText: "{0}-{1} of {2}"
        },
        datePicker: {
            itemsSelected: "{0} selected",
            nextMonthAriaLabel: "Next month",
            nextYearAriaLabel: "Next year",
            prevMonthAriaLabel: "Previous month",
            prevYearAriaLabel: "Previous year"
        },
        noDataText: "No data available",
        carousel: {
            prev: "Previous visual",
            next: "Next visual",
            ariaLabel: {
                delimiter: "Carousel slide {0} of {1}"
            }
        },
        calendar: {
            moreEvents: "{0} more"
        },
        input: {
            clear: "Clear {0}",
            prependAction: "{0} prepended action",
            appendAction: "{0} appended action"
        },
        fileInput: {
            counter: "{0} files",
            counterSize: "{0} files ({1} in total)"
        },
        timePicker: {
            am: "AM",
            pm: "PM"
        },
        pagination: {
            ariaLabel: {
                root: "Pagination Navigation",
                next: "Next page",
                previous: "Previous page",
                page: "Go to page {0}",
                currentPage: "Page {0}, Current page",
                first: "First page",
                last: "Last page"
            }
        },
        rating: {
            ariaLabel: {
                item: "Rating {0} of {1}"
            }
        }
    }
      , Hc = "$vuetify."
      , Kc = (e,t)=>e.replace(/\{(\d+)\}/g, (n,o)=>String(t[+o]))
      , Zc = (e,t,n)=>function(o) {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
            i[s - 1] = arguments[s];
        if (!o.startsWith(Hc))
            return Kc(o, i);
        const u = o.replace(Hc, "")
          , c = e.value && n.value[e.value]
          , A = t.value && n.value[t.value];
        let p = Ju(c, u, null);
        return p || (Xn(`Translation key "${o}" not found in "${e.value}", trying fallback locale`),
        p = Ju(A, u, null)),
        p || (Di(`Translation key "${o}" not found in fallback`),
        p = o),
        typeof p != "string" && (Di(`Translation key "${o}" has a non-string value`),
        p = o),
        Kc(p, i)
    }
    ;
    function Pc(e, t) {
        return (n,o)=>new Intl.NumberFormat([e.value, t.value],o).format(n)
    }
    function Xi(e, t, n) {
        const o = In(e, t, e[t] ?? n.value);
        return o.value = e[t] ?? n.value,
        me(n, r=>{
            e[t] == null && (o.value = n.value)
        }
        ),
        o
    }
    function Wc(e) {
        return t=>{
            const n = Xi(t, "locale", e.current)
              , o = Xi(t, "fallback", e.fallback)
              , r = Xi(t, "messages", e.messages);
            return {
                name: "vuetify",
                current: n,
                fallback: o,
                messages: r,
                t: Zc(n, o, r),
                n: Pc(n, o),
                provide: Wc({
                    current: n,
                    fallback: o,
                    messages: r
                })
            }
        }
    }
    function Xh(e) {
        const t = G((e == null ? void 0 : e.locale) ?? "en")
          , n = G((e == null ? void 0 : e.fallback) ?? "en")
          , o = G({
            en: Jh,
            ...e == null ? void 0 : e.messages
        });
        return {
            name: "vuetify",
            current: t,
            fallback: n,
            messages: o,
            t: Zc(t, n, o),
            n: Pc(t, n),
            provide: Wc({
                current: t,
                fallback: n,
                messages: o
            })
        }
    }
    const _h = {
        af: !1,
        ar: !0,
        bg: !1,
        ca: !1,
        ckb: !1,
        cs: !1,
        de: !1,
        el: !1,
        en: !1,
        es: !1,
        et: !1,
        fa: !0,
        fi: !1,
        fr: !1,
        hr: !1,
        hu: !1,
        he: !0,
        id: !1,
        it: !1,
        ja: !1,
        ko: !1,
        lv: !1,
        lt: !1,
        nl: !1,
        no: !1,
        pl: !1,
        pt: !1,
        ro: !1,
        ru: !1,
        sk: !1,
        sl: !1,
        srCyrl: !1,
        srLatn: !1,
        sv: !1,
        th: !1,
        tr: !1,
        az: !1,
        uk: !1,
        vi: !1,
        zhHans: !1,
        zhHant: !1
    }
      , _r = Symbol.for("vuetify:locale");
    function $h(e) {
        return e.name != null
    }
    function ev(e) {
        const t = e != null && e.adapter && $h(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Xh(e)
          , n = nv(t, e);
        return {
            ...t,
            ...n
        }
    }
    function tv() {
        const e = pe(_r);
        if (!e)
            throw new Error("[Vuetify] Could not find injected locale instance");
        return e
    }
    function nv(e, t) {
        const n = G((t == null ? void 0 : t.rtl) ?? _h)
          , o = I(()=>n.value[e.current.value] ?? !1);
        return {
            isRtl: o,
            rtl: n,
            rtlClasses: I(()=>`v-locale--is-${o.value ? "rtl" : "ltr"}`)
        }
    }
    function $r() {
        const e = pe(_r);
        if (!e)
            throw new Error("[Vuetify] Could not find injected rtl instance");
        return {
            isRtl: e.isRtl,
            rtlClasses: e.rtlClasses
        }
    }
    const Jc = {
        center: "center",
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
    }
      , _i = Me({
        location: String
    }, "location");
    function $i(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
          , n = arguments.length > 2 ? arguments[2] : void 0;
        const {isRtl: o} = $r();
        return {
            locationStyles: I(()=>{
                if (!e.location)
                    return {};
                const {side: r, align: i} = xi(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, o.value);
                function s(c) {
                    return n ? n(c) : 0
                }
                const u = {};
                return r !== "center" && (t ? u[Jc[r]] = `calc(100% - ${s(r)}px)` : u[r] = 0),
                i !== "center" ? t ? u[Jc[i]] = `calc(100% - ${s(i)}px)` : u[i] = 0 : (r === "center" ? u.top = u.left = "50%" : u[{
                    top: "left",
                    bottom: "left",
                    left: "top",
                    right: "top"
                }[r]] = "50%",
                u.transform = {
                    top: "translateX(-50%)",
                    bottom: "translateX(-50%)",
                    left: "translateY(-50%)",
                    right: "translateY(-50%)",
                    center: "translate(-50%, -50%)"
                }[r]),
                u
            }
            )
        }
    }
    const ov = Ye()({
        name: "VProgressLinear",
        props: {
            absolute: Boolean,
            active: {
                type: Boolean,
                default: !0
            },
            bgColor: String,
            bgOpacity: [Number, String],
            bufferValue: {
                type: [Number, String],
                default: 0
            },
            clickable: Boolean,
            color: String,
            height: {
                type: [Number, String],
                default: 4
            },
            indeterminate: Boolean,
            max: {
                type: [Number, String],
                default: 100
            },
            modelValue: {
                type: [Number, String],
                default: 0
            },
            reverse: Boolean,
            stream: Boolean,
            striped: Boolean,
            roundedBar: Boolean,
            ..._i({
                location: "top"
            }),
            ...Yr(),
            ...Xt(),
            ..._t()
        },
        emits: {
            "update:modelValue": e=>!0
        },
        setup(e, t) {
            let {slots: n} = t;
            const o = In(e, "modelValue")
              , {isRtl: r} = $r()
              , {themeClasses: i} = $t(e)
              , {locationStyles: s} = $i(e)
              , {textColorClasses: u, textColorStyles: c} = Ro(e, "color")
              , {backgroundColorClasses: A, backgroundColorStyles: p} = zi(I(()=>e.bgColor || e.color))
              , {backgroundColorClasses: a, backgroundColorStyles: l} = zi(e, "color")
              , {roundedClasses: d} = zr(e)
              , {intersectionRef: f, isIntersecting: m} = Lc()
              , v = I(()=>parseInt(e.max, 10))
              , g = I(()=>parseInt(e.height, 10))
              , h = I(()=>parseFloat(e.bufferValue) / v.value * 100)
              , b = I(()=>parseFloat(o.value) / v.value * 100)
              , E = I(()=>r.value !== e.reverse)
              , T = I(()=>e.indeterminate ? "fade-transition" : "slide-x-transition")
              , B = I(()=>e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
            function Q(C) {
                if (!f.value)
                    return;
                const {left: x, right: V, width: D} = f.value.getBoundingClientRect()
                  , O = E.value ? D - C.clientX + (V - D) : C.clientX - x;
                o.value = Math.round(O / D * v.value)
            }
            return et(()=>S(e.tag, {
                ref: f,
                class: ["v-progress-linear", {
                    "v-progress-linear--absolute": e.absolute,
                    "v-progress-linear--active": e.active && m.value,
                    "v-progress-linear--reverse": E.value,
                    "v-progress-linear--rounded": e.rounded,
                    "v-progress-linear--rounded-bar": e.roundedBar,
                    "v-progress-linear--striped": e.striped
                }, d.value, i.value],
                style: {
                    bottom: e.location === "bottom" ? 0 : void 0,
                    top: e.location === "top" ? 0 : void 0,
                    height: e.active ? be(g.value) : 0,
                    "--v-progress-linear-height": be(g.value),
                    ...s.value
                },
                role: "progressbar",
                "aria-hidden": e.active ? "false" : "true",
                "aria-valuemin": "0",
                "aria-valuemax": e.max,
                "aria-valuenow": e.indeterminate ? void 0 : b.value,
                onClick: e.clickable && Q
            }, {
                default: ()=>[e.stream && S("div", {
                    key: "stream",
                    class: ["v-progress-linear__stream", u.value],
                    style: {
                        ...c.value,
                        [E.value ? "left" : "right"]: be(-g.value),
                        borderTop: `${be(g.value / 2)} dotted`,
                        opacity: B.value,
                        top: `calc(50% - ${be(g.value / 4)})`,
                        width: be(100 - h.value, "%"),
                        "--v-progress-linear-stream-to": be(g.value * (E.value ? 1 : -1))
                    }
                }, null), S("div", {
                    class: ["v-progress-linear__background", A.value],
                    style: [p.value, {
                        opacity: B.value,
                        width: be(e.stream ? h.value : 100, "%")
                    }]
                }, null), S(gt, {
                    name: T.value
                }, {
                    default: ()=>[e.indeterminate ? S("div", {
                        class: "v-progress-linear__indeterminate"
                    }, [["long", "short"].map(C=>S("div", {
                        key: C,
                        class: ["v-progress-linear__indeterminate", C, a.value],
                        style: l.value
                    }, null))]) : S("div", {
                        class: ["v-progress-linear__determinate", a.value],
                        style: [l.value, {
                            width: be(b.value, "%")
                        }]
                    }, null)]
                }), n.default && S("div", {
                    class: "v-progress-linear__content"
                }, [n.default({
                    value: b.value,
                    buffer: h.value
                })])]
            })),
            {}
        }
    })
      , rv = Me({
        loading: [Boolean, String]
    }, "loader");
    function av(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
        return {
            loaderClasses: I(()=>({
                [`${t}--loading`]: e.loading
            }))
        }
    }
    const iv = ["static", "relative", "fixed", "absolute", "sticky"]
      , Xc = Me({
        position: {
            type: String,
            validator: e=>iv.includes(e)
        }
    }, "position");
    function _c(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn();
        return {
            positionClasses: I(()=>e.position ? `${t}--${e.position}` : void 0)
        }
    }
    function sv() {
        var e, t;
        return (t = (e = it("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router
    }
    function lv(e, t) {
        const n = Pa("RouterLink")
          , o = I(()=>!!(e.href || e.to))
          , r = I(()=>(o == null ? void 0 : o.value) || $u(t, "click") || $u(e, "click"));
        if (typeof n == "string")
            return {
                isLink: o,
                isClickable: r,
                href: dt(e, "href")
            };
        const i = e.to ? n.useLink(e) : void 0;
        return {
            isLink: o,
            isClickable: r,
            route: i == null ? void 0 : i.route,
            navigate: i == null ? void 0 : i.navigate,
            isActive: i && I(()=>{
                var s, u;
                return e.exact ? (s = i.isExactActive) == null ? void 0 : s.value : (u = i.isActive) == null ? void 0 : u.value
            }
            ),
            href: I(()=>e.to ? i == null ? void 0 : i.route.value.href : e.href)
        }
    }
    const uv = Me({
        href: String,
        replace: Boolean,
        to: [String, Object],
        exact: Boolean
    }, "router");
    let es = !1;
    function cv(e, t) {
        let n = !1, o, r;
        je && (rt(()=>{
            window.addEventListener("popstate", i),
            o = e == null ? void 0 : e.beforeEach((s,u,c)=>{
                es ? n ? t(c) : c() : setTimeout(()=>n ? t(c) : c()),
                es = !0
            }
            ),
            r = e == null ? void 0 : e.afterEach(()=>{
                es = !1
            }
            )
        }
        ),
        ot(()=>{
            window.removeEventListener("popstate", i),
            o == null || o(),
            r == null || r()
        }
        ));
        function i(s) {
            var u;
            (u = s.state) != null && u.replaced || (n = !0,
            setTimeout(()=>n = !1))
        }
    }
    function dv(e, t) {
        me(()=>{
            var n;
            return (n = e.isActive) == null ? void 0 : n.value
        }
        , n=>{
            e.isLink.value && n && t && rt(()=>{
                t(!0)
            }
            )
        }
        , {
            immediate: !0
        })
    }
    let $c;
    $c = Me({
        active: {
            type: Boolean,
            default: void 0
        },
        symbol: {
            type: null,
            default: kc
        },
        flat: Boolean,
        icon: [Boolean, String, Function, Object],
        prependIcon: Uo,
        appendIcon: Uo,
        block: Boolean,
        stacked: Boolean,
        ripple: {
            type: Boolean,
            default: !0
        },
        ...fc(),
        ...Yr(),
        ...Gi(),
        ...Jr(),
        ...Ni(),
        ...Oh(),
        ...rv(),
        ..._i(),
        ...Xc(),
        ...uv(),
        ...Zi(),
        ...Xt({
            tag: "button"
        }),
        ..._t(),
        ...Hi({
            variant: "elevated"
        })
    }, "VBtn"),
    mt = Ye()({
        name: "VBtn",
        directives: {
            Ripple: Wh
        },
        props: $c(),
        emits: {
            "group:selected": e=>!0
        },
        setup(e, t) {
            let {attrs: n, slots: o} = t;
            const {themeClasses: r} = $t(e)
              , {borderClasses: i} = gc(e)
              , {colorClasses: s, colorStyles: u, variantClasses: c} = Mc(e)
              , {densityClasses: A} = ji(e)
              , {dimensionStyles: p} = Xr(e)
              , {elevationClasses: a} = qi(e)
              , {loaderClasses: l} = av(e)
              , {locationStyles: d} = $i(e)
              , {positionClasses: f} = _c(e)
              , {roundedClasses: m} = zr(e)
              , {sizeClasses: v, sizeStyles: g} = Pi(e)
              , h = Dh(e, e.symbol, !1)
              , b = lv(e, n)
              , E = I(()=>{
                var C;
                return e.active !== void 0 ? e.active : b.isLink.value ? (C = b.isActive) == null ? void 0 : C.value : h == null ? void 0 : h.isSelected.value
            }
            )
              , T = I(()=>(h == null ? void 0 : h.disabled.value) || e.disabled)
              , B = I(()=>e.variant === "elevated" && !(e.disabled || e.flat || e.border))
              , Q = I(()=>{
                if (e.value !== void 0)
                    return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value
            }
            );
            return dv(b, h == null ? void 0 : h.select),
            et(()=>{
                var Z, ne;
                const C = b.isLink.value ? "a" : e.tag
                  , x = !!(e.prependIcon || o.prepend)
                  , V = !!(e.appendIcon || o.append)
                  , D = !!(e.icon && e.icon !== !0)
                  , O = (h == null ? void 0 : h.isSelected.value) && (!b.isLink.value || ((Z = b.isActive) == null ? void 0 : Z.value)) || !h || ((ne = b.isActive) == null ? void 0 : ne.value);
                return Gt(S(C, {
                    type: C === "a" ? void 0 : "button",
                    class: ["v-btn", h == null ? void 0 : h.selectedClass.value, {
                        "v-btn--active": E.value,
                        "v-btn--block": e.block,
                        "v-btn--disabled": T.value,
                        "v-btn--elevated": B.value,
                        "v-btn--flat": e.flat,
                        "v-btn--icon": !!e.icon,
                        "v-btn--loading": e.loading,
                        "v-btn--stacked": e.stacked
                    }, r.value, i.value, O ? s.value : void 0, A.value, a.value, l.value, f.value, m.value, v.value, c.value],
                    style: [O ? u.value : void 0, p.value, d.value, g.value],
                    disabled: T.value || void 0,
                    href: b.href.value,
                    onClick: W=>{
                        var ie;
                        T.value || ((ie = b.navigate) == null || ie.call(b, W),
                        h == null || h.toggle())
                    }
                    ,
                    value: Q.value
                }, {
                    default: ()=>{
                        var W;
                        return [Bc(!0, "v-btn"), !e.icon && x && S("span", {
                            key: "prepend",
                            class: "v-btn__prepend"
                        }, [o.prepend ? S($n, {
                            key: "prepend-defaults",
                            disabled: !e.prependIcon,
                            defaults: {
                                VIcon: {
                                    icon: e.prependIcon
                                }
                            }
                        }, o.prepend) : S(Bn, {
                            key: "prepend-icon",
                            icon: e.prependIcon
                        }, null)]), S("span", {
                            class: "v-btn__content",
                            "data-no-activator": ""
                        }, [!o.default && D ? S(Bn, {
                            key: "content-icon",
                            icon: e.icon
                        }, null) : S($n, {
                            key: "content-defaults",
                            disabled: !D,
                            defaults: {
                                VIcon: {
                                    icon: e.icon
                                }
                            }
                        }, o.default)]), !e.icon && V && S("span", {
                            key: "append",
                            class: "v-btn__append"
                        }, [o.append ? S($n, {
                            key: "append-defaults",
                            disabled: !e.appendIcon,
                            defaults: {
                                VIcon: {
                                    icon: e.appendIcon
                                }
                            }
                        }, o.append) : S(Bn, {
                            key: "append-icon",
                            icon: e.appendIcon
                        }, null)]), !!e.loading && S("span", {
                            key: "loader",
                            class: "v-btn__loader"
                        }, [((W = o.loader) == null ? void 0 : W.call(o)) ?? S(_o, {
                            color: typeof e.loading == "boolean" ? void 0 : e.loading,
                            indeterminate: !0,
                            size: "23",
                            width: "2"
                        }, null)])]
                    }
                }), [[Wa("ripple"), !T.value && e.ripple, null]])
            }
            ),
            {}
        }
    });
    const Av = Me({
        closeDelay: [Number, String],
        openDelay: [Number, String]
    }, "delay");
    function pv(e, t) {
        const n = {}
          , o = r=>()=>{
            if (!je)
                return Promise.resolve(!0);
            const i = r === "openDelay";
            return n.closeDelay && window.clearTimeout(n.closeDelay),
            delete n.closeDelay,
            n.openDelay && window.clearTimeout(n.openDelay),
            delete n.openDelay,
            new Promise(s=>{
                const u = parseInt(e[r] ?? 0, 10);
                n[r] = window.setTimeout(()=>{
                    t == null || t(i),
                    s(i)
                }
                , u)
            }
            )
        }
        ;
        return {
            runCloseDelay: o("closeDelay"),
            runOpenDelay: o("openDelay")
        }
    }
    const fv = Symbol.for("vuetify:v-menu")
      , gv = Me({
        activator: [String, Object],
        activatorProps: {
            type: Object,
            default: ()=>({})
        },
        openOnClick: {
            type: Boolean,
            default: void 0
        },
        openOnHover: Boolean,
        openOnFocus: {
            type: Boolean,
            default: void 0
        },
        closeOnContentClick: Boolean,
        ...Av()
    }, "v-overlay-activator");
    function mv(e, t) {
        let {isActive: n, isTop: o} = t;
        const r = G();
        let i = !1
          , s = !1
          , u = !0;
        const c = I(()=>e.openOnFocus || e.openOnFocus == null && e.openOnHover)
          , A = I(()=>e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value)
          , {runOpenDelay: p, runCloseDelay: a} = pv(e, b=>{
            b === (e.openOnHover && i || c.value && s) && !(e.openOnHover && n.value && !o.value) && (n.value !== b && (u = !0),
            n.value = b)
        }
        )
          , l = {
            click: b=>{
                b.stopPropagation(),
                r.value = b.currentTarget || b.target,
                n.value = !n.value
            }
            ,
            mouseenter: b=>{
                i = !0,
                r.value = b.currentTarget || b.target,
                p()
            }
            ,
            mouseleave: b=>{
                i = !1,
                a()
            }
            ,
            focus: b=>{
                hh && !b.target.matches(":focus-visible") || (s = !0,
                b.stopPropagation(),
                r.value = b.currentTarget || b.target,
                p())
            }
            ,
            blur: b=>{
                s = !1,
                b.stopPropagation(),
                a()
            }
        }
          , d = I(()=>{
            const b = {};
            return A.value && (b.click = l.click),
            e.openOnHover && (b.mouseenter = l.mouseenter,
            b.mouseleave = l.mouseleave),
            c.value && (b.focus = l.focus,
            b.blur = l.blur),
            b
        }
        )
          , f = I(()=>{
            const b = {};
            if (e.openOnHover && (b.mouseenter = ()=>{
                i = !0,
                p()
            }
            ,
            b.mouseleave = ()=>{
                i = !1,
                a()
            }
            ),
            e.closeOnContentClick) {
                const E = pe(fv, null);
                b.click = ()=>{
                    n.value = !1,
                    E == null || E.closeParents()
                }
            }
            return b
        }
        )
          , m = I(()=>{
            const b = {};
            return e.openOnHover && (b.mouseenter = ()=>{
                u && (i = !0,
                u = !1,
                p())
            }
            ,
            b.mouseleave = ()=>{
                i = !1,
                a()
            }
            ),
            b
        }
        );
        me(o, b=>{
            b && (e.openOnHover && !i && (!c.value || !s) || c.value && !s && (!e.openOnHover || !i)) && (n.value = !1)
        }
        );
        const v = G();
        yt(()=>{
            v.value && rt(()=>{
                const b = v.value;
                r.value = qm(b) ? b.$el : b
            }
            )
        }
        );
        const g = it("useActivator");
        let h;
        return me(()=>!!e.activator, b=>{
            b && je ? (h = Ao(),
            h.run(()=>{
                hv(e, g, {
                    activatorEl: r,
                    activatorEvents: d
                })
            }
            )) : h && h.stop()
        }
        , {
            flush: "post",
            immediate: !0
        }),
        ot(()=>{
            h == null || h.stop()
        }
        ),
        {
            activatorEl: r,
            activatorRef: v,
            activatorEvents: d,
            contentEvents: f,
            scrimEvents: m
        }
    }
    function hv(e, t, n) {
        let {activatorEl: o, activatorEvents: r} = n;
        me(()=>e.activator, (c,A)=>{
            if (A && c !== A) {
                const p = u(A);
                p && s(p)
            }
            c && rt(()=>i())
        }
        , {
            immediate: !0
        }),
        me(()=>e.activatorProps, ()=>{
            i()
        }
        ),
        ot(()=>{
            s()
        }
        );
        function i() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u()
              , A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
            c && (Object.entries(r.value).forEach(p=>{
                let[a,l] = p;
                c.addEventListener(a, l)
            }
            ),
            Object.keys(A).forEach(p=>{
                A[p] == null ? c.removeAttribute(p) : c.setAttribute(p, A[p])
            }
            ))
        }
        function s() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u()
              , A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
            c && (Object.entries(r.value).forEach(p=>{
                let[a,l] = p;
                c.removeEventListener(a, l)
            }
            ),
            Object.keys(A).forEach(p=>{
                c.removeAttribute(p)
            }
            ))
        }
        function u() {
            var p, a;
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator, A;
            if (c)
                if (c === "parent") {
                    let l = (a = (p = t == null ? void 0 : t.proxy) == null ? void 0 : p.$el) == null ? void 0 : a.parentNode;
                    for (; l.hasAttribute("data-no-activator"); )
                        l = l.parentNode;
                    A = l
                } else
                    typeof c == "string" ? A = document.querySelector(c) : "$el"in c ? A = c.$el : A = c;
            return o.value = (A == null ? void 0 : A.nodeType) === Node.ELEMENT_NODE ? A : null,
            o.value
        }
    }
    const vv = Me({
        eager: Boolean
    }, "lazy");
    function bv(e, t) {
        const n = G(!1)
          , o = I(()=>n.value || e.eager || t.value);
        me(t, ()=>n.value = !0);
        function r() {
            e.eager || (n.value = !1)
        }
        return {
            isBooted: n,
            hasContent: o,
            onAfterLeave: r
        }
    }
    function ts(e, t) {
        return {
            x: e.x + t.x,
            y: e.y + t.y
        }
    }
    function wv(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }
    function ed(e, t) {
        if (e.side === "top" || e.side === "bottom") {
            const {side: n, align: o} = e
              , r = o === "left" ? 0 : o === "center" ? t.width / 2 : o === "right" ? t.width : o
              , i = n === "top" ? 0 : n === "bottom" ? t.height : n;
            return ts({
                x: r,
                y: i
            }, t)
        } else if (e.side === "left" || e.side === "right") {
            const {side: n, align: o} = e
              , r = n === "left" ? 0 : n === "right" ? t.width : n
              , i = o === "top" ? 0 : o === "center" ? t.height / 2 : o === "bottom" ? t.height : o;
            return ts({
                x: r,
                y: i
            }, t)
        }
        return ts({
            x: t.width / 2,
            y: t.height / 2
        }, t)
    }
    const td = {
        static: Ev,
        connected: Bv
    }
      , yv = Me({
        locationStrategy: {
            type: [String, Function],
            default: "static",
            validator: e=>typeof e == "function" || e in td
        },
        location: {
            type: String,
            default: "bottom"
        },
        origin: {
            type: String,
            default: "auto"
        },
        offset: [Number, String, Array]
    }, "v-overlay-location-strategies");
    function Cv(e, t) {
        const n = G({})
          , o = G();
        je && (To(()=>!!(t.isActive.value && e.locationStrategy), i=>{
            var s, u;
            me(()=>e.locationStrategy, i),
            ot(()=>{
                o.value = void 0
            }
            ),
            typeof e.locationStrategy == "function" ? o.value = (s = e.locationStrategy(t, e, n)) == null ? void 0 : s.updateLocation : o.value = (u = td[e.locationStrategy](t, e, n)) == null ? void 0 : u.updateLocation
        }
        ),
        window.addEventListener("resize", r, {
            passive: !0
        }),
        ot(()=>{
            window.removeEventListener("resize", r),
            o.value = void 0
        }
        ));
        function r(i) {
            var s;
            (s = o.value) == null || s.call(o, i)
        }
        return {
            contentStyles: n,
            updateLocation: o
        }
    }
    function Ev() {}
    function Iv(e) {
        const t = ac(e);
        return t.x -= parseFloat(e.style.left || 0),
        t.y -= parseFloat(e.style.top || 0),
        t
    }
    function Bv(e, t, n) {
        vh(e.activatorEl.value) && Object.assign(n.value, {
            position: "fixed"
        });
        const {preferredAnchor: o, preferredOrigin: r} = Si(()=>{
            const d = xi(t.location, e.isRtl.value)
              , f = t.origin === "overlap" ? d : t.origin === "auto" ? ki(d) : xi(t.origin, e.isRtl.value);
            return d.side === f.side && d.align === Oi(f).align ? {
                preferredAnchor: nc(d),
                preferredOrigin: nc(f)
            } : {
                preferredAnchor: d,
                preferredOrigin: f
            }
        }
        )
          , [i,s,u,c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map(d=>I(()=>{
            const f = parseFloat(t[d]);
            return isNaN(f) ? 1 / 0 : f
        }
        ))
          , A = I(()=>{
            if (Array.isArray(t.offset))
                return t.offset;
            if (typeof t.offset == "string") {
                const d = t.offset.split(" ").map(parseFloat);
                return d.length < 2 && d.push(0),
                d
            }
            return typeof t.offset == "number" ? [t.offset, 0] : [0, 0]
        }
        );
        let p = !1;
        const a = new ResizeObserver(()=>{
            p && l()
        }
        );
        me([e.activatorEl, e.contentEl], (d,f)=>{
            let[m,v] = d
              , [g,h] = f;
            g && a.unobserve(g),
            m && a.observe(m),
            h && a.unobserve(h),
            v && a.observe(v)
        }
        , {
            immediate: !0
        }),
        ot(()=>{
            a.disconnect()
        }
        );
        function l() {
            if (p = !1,
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>p = !0)
            }
            ),
            !e.activatorEl.value || !e.contentEl.value)
                return;
            const d = e.activatorEl.value.getBoundingClientRect()
              , f = Iv(e.contentEl.value)
              , m = qr(e.contentEl.value)
              , v = 12;
            m.length || (m.push(document.documentElement),
            e.contentEl.value.style.top && e.contentEl.value.style.left || (f.x += parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0),
            f.y += parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
            const g = m.reduce((V,D)=>{
                const O = D.getBoundingClientRect()
                  , Z = new Jn({
                    x: D === document.documentElement ? 0 : O.x,
                    y: D === document.documentElement ? 0 : O.y,
                    width: D.clientWidth,
                    height: D.clientHeight
                });
                return V ? new Jn({
                    x: Math.max(V.left, Z.left),
                    y: Math.max(V.top, Z.top),
                    width: Math.min(V.right, Z.right) - Math.max(V.left, Z.left),
                    height: Math.min(V.bottom, Z.bottom) - Math.max(V.top, Z.top)
                }) : Z
            }
            , void 0);
            g.x += v,
            g.y += v,
            g.width -= v * 2,
            g.height -= v * 2;
            let h = {
                anchor: o.value,
                origin: r.value
            };
            function b(V) {
                const D = new Jn(f)
                  , O = ed(V.anchor, d)
                  , Z = ed(V.origin, D);
                let {x: ne, y: W} = wv(O, Z);
                switch (V.anchor.side) {
                case "top":
                    W -= A.value[0];
                    break;
                case "bottom":
                    W += A.value[0];
                    break;
                case "left":
                    ne -= A.value[0];
                    break;
                case "right":
                    ne += A.value[0];
                    break
                }
                switch (V.anchor.align) {
                case "top":
                    W -= A.value[1];
                    break;
                case "bottom":
                    W += A.value[1];
                    break;
                case "left":
                    ne -= A.value[1];
                    break;
                case "right":
                    ne += A.value[1];
                    break
                }
                return D.x += ne,
                D.y += W,
                D.width = Math.min(D.width, u.value),
                D.height = Math.min(D.height, c.value),
                {
                    overflows: rc(D, g),
                    x: ne,
                    y: W
                }
            }
            let E = 0
              , T = 0;
            const B = {
                x: 0,
                y: 0
            }
              , Q = {
                x: !1,
                y: !1
            };
            let C = -1;
            for (; ; ) {
                if (C++ > 10) {
                    Di("Infinite loop detected in connectedLocationStrategy");
                    break
                }
                const {x: V, y: D, overflows: O} = b(h);
                E += V,
                T += D,
                f.x += V,
                f.y += D;
                {
                    const Z = oc(h.anchor)
                      , ne = O.x.before || O.x.after
                      , W = O.y.before || O.y.after;
                    let ie = !1;
                    if (["x", "y"].forEach(ee=>{
                        if (ee === "x" && ne && !Q.x || ee === "y" && W && !Q.y) {
                            const _ = {
                                anchor: {
                                    ...h.anchor
                                },
                                origin: {
                                    ...h.origin
                                }
                            }
                              , J = ee === "x" ? Z === "y" ? Oi : ki : Z === "y" ? ki : Oi;
                            _.anchor = J(_.anchor),
                            _.origin = J(_.origin);
                            const {overflows: oe} = b(_);
                            (oe[ee].before <= O[ee].before && oe[ee].after <= O[ee].after || oe[ee].before + oe[ee].after < (O[ee].before + O[ee].after) / 2) && (h = _,
                            ie = Q[ee] = !0)
                        }
                    }
                    ),
                    ie)
                        continue
                }
                O.x.before && (E += O.x.before,
                f.x += O.x.before),
                O.x.after && (E -= O.x.after,
                f.x -= O.x.after),
                O.y.before && (T += O.y.before,
                f.y += O.y.before),
                O.y.after && (T -= O.y.after,
                f.y -= O.y.after);
                {
                    const Z = rc(f, g);
                    B.x = g.width - Z.x.before - Z.x.after,
                    B.y = g.height - Z.y.before - Z.y.after,
                    E += Z.x.before,
                    f.x += Z.x.before,
                    T += Z.y.before,
                    f.y += Z.y.before
                }
                break
            }
            const x = oc(h.anchor);
            return Object.assign(n.value, {
                "--v-overlay-anchor-origin": `${h.anchor.side} ${h.anchor.align}`,
                transformOrigin: `${h.origin.side} ${h.origin.align}`,
                top: be(nd(T)),
                left: be(nd(E)),
                minWidth: be(x === "y" ? Math.min(i.value, d.width) : i.value),
                maxWidth: be(od(Qi(B.x, i.value === 1 / 0 ? 0 : i.value, u.value))),
                maxHeight: be(od(Qi(B.y, s.value === 1 / 0 ? 0 : s.value, c.value)))
            }),
            {
                available: B,
                contentBox: f
            }
        }
        return me(()=>[o.value, r.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], ()=>l()),
        rt(()=>{
            const d = l();
            if (!d)
                return;
            const {available: f, contentBox: m} = d;
            m.height > f.y && requestAnimationFrame(()=>{
                l(),
                requestAnimationFrame(()=>{
                    l()
                }
                )
            }
            )
        }
        ),
        {
            updateLocation: l
        }
    }
    function nd(e) {
        return Math.round(e * devicePixelRatio) / devicePixelRatio
    }
    function od(e) {
        return Math.ceil(e * devicePixelRatio) / devicePixelRatio
    }
    let ns = !0;
    const ea = [];
    function Mv(e) {
        !ns || ea.length ? (ea.push(e),
        os()) : (ns = !1,
        e(),
        os())
    }
    let rd = -1;
    function os() {
        cancelAnimationFrame(rd),
        rd = requestAnimationFrame(()=>{
            const e = ea.shift();
            e && e(),
            ea.length ? os() : ns = !0
        }
        )
    }
    const ta = {
        none: null,
        close: xv,
        block: kv,
        reposition: Ov
    }
      , Qv = Me({
        scrollStrategy: {
            type: [String, Function],
            default: "block",
            validator: e=>typeof e == "function" || e in ta
        }
    }, "v-overlay-scroll-strategies");
    function Sv(e, t) {
        if (!je)
            return;
        let n;
        yt(async()=>{
            n == null || n.stop(),
            t.isActive.value && e.scrollStrategy && (n = Ao(),
            await rt(),
            n.active && n.run(()=>{
                var o;
                typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (o = ta[e.scrollStrategy]) == null || o.call(ta, t, e, n)
            }
            ))
        }
        ),
        ot(()=>{
            n == null || n.stop()
        }
        )
    }
    function xv(e) {
        function t(n) {
            e.isActive.value = !1
        }
        ad(e.activatorEl.value ?? e.contentEl.value, t)
    }
    function kv(e, t) {
        var s;
        const n = (s = e.root.value) == null ? void 0 : s.offsetParent
          , o = [...new Set([...qr(e.activatorEl.value, t.contained ? n : void 0), ...qr(e.contentEl.value, t.contained ? n : void 0)])].filter(u=>!u.classList.contains("v-overlay-scroll-blocked"))
          , r = window.innerWidth - document.documentElement.offsetWidth
          , i = (u=>Ri(u) && u)(n || document.documentElement);
        i && e.root.value.classList.add("v-overlay--scroll-blocked"),
        o.forEach((u,c)=>{
            u.style.setProperty("--v-body-scroll-x", be(-u.scrollLeft)),
            u.style.setProperty("--v-body-scroll-y", be(-u.scrollTop)),
            u.style.setProperty("--v-scrollbar-offset", be(r)),
            u.classList.add("v-overlay-scroll-blocked")
        }
        ),
        ot(()=>{
            o.forEach((u,c)=>{
                const A = parseFloat(u.style.getPropertyValue("--v-body-scroll-x"))
                  , p = parseFloat(u.style.getPropertyValue("--v-body-scroll-y"));
                u.style.removeProperty("--v-body-scroll-x"),
                u.style.removeProperty("--v-body-scroll-y"),
                u.style.removeProperty("--v-scrollbar-offset"),
                u.classList.remove("v-overlay-scroll-blocked"),
                u.scrollLeft = -A,
                u.scrollTop = -p
            }
            ),
            i && e.root.value.classList.remove("v-overlay--scroll-blocked")
        }
        )
    }
    function Ov(e, t, n) {
        let o = !1
          , r = -1
          , i = -1;
        function s(u) {
            Mv(()=>{
                var A, p;
                const c = performance.now();
                (p = (A = e.updateLocation).value) == null || p.call(A, u),
                o = (performance.now() - c) / 16.666666666666668 > 2
            }
            )
        }
        i = (typeof requestIdleCallback > "u" ? u=>u() : requestIdleCallback)(()=>{
            n.run(()=>{
                ad(e.activatorEl.value ?? e.contentEl.value, u=>{
                    o ? (cancelAnimationFrame(r),
                    r = requestAnimationFrame(()=>{
                        r = requestAnimationFrame(()=>{
                            s(u)
                        }
                        )
                    }
                    )) : s(u)
                }
                )
            }
            )
        }
        ),
        ot(()=>{
            typeof cancelIdleCallback < "u" && cancelIdleCallback(i),
            cancelAnimationFrame(r)
        }
        )
    }
    function ad(e, t) {
        const n = [document, ...qr(e)];
        n.forEach(o=>{
            o.addEventListener("scroll", t, {
                passive: !0
            })
        }
        ),
        ot(()=>{
            n.forEach(o=>{
                o.removeEventListener("scroll", t)
            }
            )
        }
        )
    }
    const id = Me({
        transition: {
            type: [Boolean, String, Object],
            default: "fade-transition",
            validator: e=>e !== !0
        }
    }, "transition")
      , No = (e,t)=>{
        let {slots: n} = t;
        const {transition: o, ...r} = e
          , {component: i=gt, ...s} = typeof o == "object" ? o : {};
        return Ge(i, He(typeof o == "string" ? {
            name: o
        } : s, r), n)
    }
      , rs = Symbol.for("vuetify:display")
      , sd = {
        mobileBreakpoint: "lg",
        thresholds: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            xxl: 2560
        }
    }
      , Dv = function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sd;
        return Ut(sd, e)
    };
    function ld(e) {
        return je && !e ? window.innerWidth : 0
    }
    function ud(e) {
        return je && !e ? window.innerHeight : 0
    }
    function cd(e) {
        const t = je && !e ? window.navigator.userAgent : "ssr";
        function n(f) {
            return !!t.match(f)
        }
        const o = n(/android/i)
          , r = n(/iphone|ipad|ipod/i)
          , i = n(/cordova/i)
          , s = n(/electron/i)
          , u = n(/chrome/i)
          , c = n(/edge/i)
          , A = n(/firefox/i)
          , p = n(/opera/i)
          , a = n(/win/i)
          , l = n(/mac/i)
          , d = n(/linux/i);
        return {
            android: o,
            ios: r,
            cordova: i,
            electron: s,
            chrome: u,
            edge: c,
            firefox: A,
            opera: p,
            win: a,
            mac: l,
            linux: d,
            touch: mh,
            ssr: t === "ssr"
        }
    }
    function Lv(e, t) {
        const {thresholds: n, mobileBreakpoint: o} = Dv(e)
          , r = G(ud(t))
          , i = Ra(cd(t))
          , s = Ve({})
          , u = G(ld(t));
        function c() {
            r.value = ud(),
            u.value = ld()
        }
        function A() {
            c(),
            i.value = cd()
        }
        return yt(()=>{
            const p = u.value < n.sm
              , a = u.value < n.md && !p
              , l = u.value < n.lg && !(a || p)
              , d = u.value < n.xl && !(l || a || p)
              , f = u.value < n.xxl && !(d || l || a || p)
              , m = u.value >= n.xxl
              , v = p ? "xs" : a ? "sm" : l ? "md" : d ? "lg" : f ? "xl" : "xxl"
              , g = typeof o == "number" ? o : n[o]
              , h = u.value < g;
            s.xs = p,
            s.sm = a,
            s.md = l,
            s.lg = d,
            s.xl = f,
            s.xxl = m,
            s.smAndUp = !p,
            s.mdAndUp = !(p || a),
            s.lgAndUp = !(p || a || l),
            s.xlAndUp = !(p || a || l || d),
            s.smAndDown = !(l || d || f || m),
            s.mdAndDown = !(d || f || m),
            s.lgAndDown = !(f || m),
            s.xlAndDown = !m,
            s.name = v,
            s.height = r.value,
            s.width = u.value,
            s.mobile = h,
            s.mobileBreakpoint = o,
            s.platform = i.value,
            s.thresholds = n
        }
        ),
        je && window.addEventListener("resize", c, {
            passive: !0
        }),
        {
            ...hr(s),
            update: A,
            ssr: !!t
        }
    }
    function Tv() {
        const e = pe(rs);
        if (!e)
            throw new Error("Could not find Vuetify display injection");
        return e
    }
    function Vv() {
        if (!je)
            return G(!1);
        const {ssr: e} = Tv();
        if (e) {
            const t = G(!1);
            return vt(()=>{
                t.value = !0
            }
            ),
            t
        } else
            return G(!0)
    }
    function as() {
        const e = it("useScopeId").vnode.scopeId;
        return {
            scopeId: e ? {
                [e]: ""
            } : void 0
        }
    }
    const dd = Symbol.for("vuetify:stack")
      , qo = Ve([]);
    function Fv(e, t, n) {
        const o = it("useStack")
          , r = !n
          , i = pe(dd, void 0)
          , s = Ve({
            activeChildren: new Set
        });
        qe(dd, s);
        const u = G(+t.value);
        To(e, ()=>{
            var a;
            const p = (a = qo.at(-1)) == null ? void 0 : a[1];
            u.value = p ? p + 10 : +t.value,
            r && qo.push([o.uid, u.value]),
            i == null || i.activeChildren.add(o.uid),
            ot(()=>{
                if (r) {
                    const l = ve(qo).findIndex(d=>d[0] === o.uid);
                    qo.splice(l, 1)
                }
                i == null || i.activeChildren.delete(o.uid)
            }
            )
        }
        );
        const c = G(!0);
        r && yt(()=>{
            var a;
            const p = ((a = qo.at(-1)) == null ? void 0 : a[0]) === o.uid;
            setTimeout(()=>c.value = p)
        }
        );
        const A = I(()=>!s.activeChildren.size);
        return {
            globalTop: fo(c),
            localTop: A,
            stackStyles: I(()=>({
                zIndex: u.value
            }))
        }
    }
    function Rv(e) {
        return {
            teleportTarget: I(()=>{
                const t = e.value;
                if (t === !0 || !je)
                    return;
                const n = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
                if (n == null)
                    return;
                let o = n.querySelector(":scope > .v-overlay-container");
                return o || (o = document.createElement("div"),
                o.className = "v-overlay-container",
                n.appendChild(o)),
                o
            }
            )
        }
    }
    function Uv() {
        return !0
    }
    function Ad(e, t, n) {
        if (!e || pd(e, n) === !1)
            return !1;
        const o = pc(t);
        if (typeof ShadowRoot < "u" && o instanceof ShadowRoot && o.host === e.target)
            return !1;
        const r = (typeof n.value == "object" && n.value.include || (()=>[]))();
        return r.push(t),
        !r.some(i=>i == null ? void 0 : i.contains(e.target))
    }
    function pd(e, t) {
        return (typeof t.value == "object" && t.value.closeConditional || Uv)(e)
    }
    function Gv(e, t, n) {
        const o = typeof n.value == "function" ? n.value : n.value.handler;
        t._clickOutside.lastMousedownWasOutside && Ad(e, t, n) && setTimeout(()=>{
            pd(e, n) && o && o(e)
        }
        , 0)
    }
    function fd(e, t) {
        const n = pc(e);
        t(document),
        typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n)
    }
    const jv = {
        mounted(e, t) {
            const n = r=>Gv(r, e, t)
              , o = r=>{
                e._clickOutside.lastMousedownWasOutside = Ad(r, e, t)
            }
            ;
            fd(e, r=>{
                r.addEventListener("click", n, !0),
                r.addEventListener("mousedown", o, !0)
            }
            ),
            e._clickOutside || (e._clickOutside = {
                lastMousedownWasOutside: !0
            }),
            e._clickOutside[t.instance.$.uid] = {
                onClick: n,
                onMousedown: o
            }
        },
        unmounted(e, t) {
            e._clickOutside && (fd(e, n=>{
                var i;
                if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid]))
                    return;
                const {onClick: o, onMousedown: r} = e._clickOutside[t.instance.$.uid];
                n.removeEventListener("click", o, !0),
                n.removeEventListener("mousedown", r, !0)
            }
            ),
            delete e._clickOutside[t.instance.$.uid])
        }
    };
    function Nv(e) {
        const {modelValue: t, color: n, ...o} = e;
        return S(gt, {
            name: "fade-transition",
            appear: !0
        }, {
            default: ()=>[e.modelValue && S("div", He({
                class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
                style: e.color.backgroundColorStyles.value
            }, o), null)]
        })
    }
    const is = Me({
        absolute: Boolean,
        attach: [Boolean, String, Object],
        closeOnBack: {
            type: Boolean,
            default: !0
        },
        contained: Boolean,
        contentClass: null,
        contentProps: null,
        disabled: Boolean,
        noClickAnimation: Boolean,
        modelValue: Boolean,
        persistent: Boolean,
        scrim: {
            type: [String, Boolean],
            default: !0
        },
        zIndex: {
            type: [Number, String],
            default: 2e3
        },
        ...gv(),
        ...Jr(),
        ...vv(),
        ...yv(),
        ...Qv(),
        ..._t(),
        ...id()
    }, "v-overlay")
      , Yo = Ye()({
        name: "VOverlay",
        directives: {
            ClickOutside: jv
        },
        inheritAttrs: !1,
        props: {
            _disableGlobalStack: Boolean,
            ...is()
        },
        emits: {
            "click:outside": e=>!0,
            "update:modelValue": e=>!0,
            afterLeave: ()=>!0
        },
        setup(e, t) {
            let {slots: n, attrs: o, emit: r} = t;
            const i = In(e, "modelValue")
              , s = I({
                get: ()=>i.value,
                set: J=>{
                    J && e.disabled || (i.value = J)
                }
            })
              , {teleportTarget: u} = Rv(I(()=>e.attach || e.contained))
              , {themeClasses: c} = $t(e)
              , {rtlClasses: A, isRtl: p} = $r()
              , {hasContent: a, onAfterLeave: l} = bv(e, s)
              , d = zi(I(()=>typeof e.scrim == "string" ? e.scrim : null))
              , {globalTop: f, localTop: m, stackStyles: v} = Fv(s, dt(e, "zIndex"), e._disableGlobalStack)
              , {activatorEl: g, activatorRef: h, activatorEvents: b, contentEvents: E, scrimEvents: T} = mv(e, {
                isActive: s,
                isTop: m
            })
              , {dimensionStyles: B} = Xr(e)
              , Q = Vv()
              , {scopeId: C} = as();
            me(()=>e.disabled, J=>{
                J && (s.value = !1)
            }
            );
            const x = G()
              , V = G()
              , {contentStyles: D, updateLocation: O} = Cv(e, {
                isRtl: p,
                contentEl: V,
                activatorEl: g,
                isActive: s
            });
            Sv(e, {
                root: x,
                contentEl: V,
                activatorEl: g,
                isActive: s,
                updateLocation: O
            });
            function Z(J) {
                r("click:outside", J),
                e.persistent ? _() : s.value = !1
            }
            function ne() {
                return s.value && f.value
            }
            je && me(s, J=>{
                J ? window.addEventListener("keydown", W) : window.removeEventListener("keydown", W)
            }
            , {
                immediate: !0
            });
            function W(J) {
                J.key === "Escape" && f.value && (e.persistent ? _() : s.value = !1)
            }
            const ie = sv();
            To(()=>e.closeOnBack, ()=>{
                cv(ie, J=>{
                    f.value && s.value ? (J(!1),
                    e.persistent ? _() : s.value = !1) : J()
                }
                )
            }
            );
            const ee = G();
            me(()=>s.value && (e.absolute || e.contained) && u.value == null, J=>{
                if (J) {
                    const oe = gh(x.value);
                    oe && oe !== document.scrollingElement && (ee.value = oe.scrollTop)
                }
            }
            );
            function _() {
                e.noClickAnimation || V.value && Do(V.value, [{
                    transformOrigin: "center"
                }, {
                    transform: "scale(1.03)"
                }, {
                    transformOrigin: "center"
                }], {
                    duration: 150,
                    easing: Fi
                })
            }
            return et(()=>{
                var J;
                return S(Se, null, [(J = n.activator) == null ? void 0 : J.call(n, {
                    isActive: s.value,
                    props: He({
                        ref: h
                    }, Xa(b.value), e.activatorProps)
                }), Q.value && S(Uf, {
                    disabled: !u.value,
                    to: u.value
                }, {
                    default: ()=>[a.value && S("div", He({
                        class: ["v-overlay", {
                            "v-overlay--absolute": e.absolute || e.contained,
                            "v-overlay--active": s.value,
                            "v-overlay--contained": e.contained
                        }, c.value, A.value],
                        style: [v.value, {
                            top: be(ee.value)
                        }],
                        ref: x
                    }, C, o), [S(Nv, He({
                        color: d,
                        modelValue: s.value && !!e.scrim
                    }, Xa(T.value)), null), S(No, {
                        appear: !0,
                        persisted: !0,
                        transition: e.transition,
                        target: g.value,
                        onAfterLeave: ()=>{
                            l(),
                            r("afterLeave")
                        }
                    }, {
                        default: ()=>{
                            var oe;
                            return [Gt(S("div", He({
                                ref: V,
                                class: ["v-overlay__content", e.contentClass],
                                style: [B.value, D.value]
                            }, Xa(E.value), e.contentProps), [(oe = n.default) == null ? void 0 : oe.call(n, {
                                isActive: s
                            })]), [[pi, s.value], [Wa("click-outside"), {
                                handler: Z,
                                closeConditional: ne,
                                include: ()=>[g.value]
                            }]])]
                        }
                    })])]
                })])
            }
            ),
            {
                activatorEl: g,
                animateClick: _,
                contentEl: V,
                globalTop: f,
                localTop: m,
                updateLocation: O
            }
        }
    })
      , ss = Symbol("Forwarded refs");
    function gd(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
        return e[ss] = n,
        new Proxy(e,{
            get(r, i) {
                if (Reflect.has(r, i))
                    return Reflect.get(r, i);
                for (const s of n)
                    if (s.value && Reflect.has(s.value, i)) {
                        const u = Reflect.get(s.value, i);
                        return typeof u == "function" ? u.bind(s.value) : u
                    }
            },
            getOwnPropertyDescriptor(r, i) {
                const s = Reflect.getOwnPropertyDescriptor(r, i);
                if (s)
                    return s;
                if (!(typeof i == "symbol" || i.startsWith("__"))) {
                    for (const u of n) {
                        if (!u.value)
                            continue;
                        const c = Reflect.getOwnPropertyDescriptor(u.value, i);
                        if (c)
                            return c;
                        if ("_"in u.value && "setupState"in u.value._) {
                            const A = Reflect.getOwnPropertyDescriptor(u.value._.setupState, i);
                            if (A)
                                return A
                        }
                    }
                    for (const u of n) {
                        let c = u.value && Object.getPrototypeOf(u.value);
                        for (; c; ) {
                            const A = Reflect.getOwnPropertyDescriptor(c, i);
                            if (A)
                                return A;
                            c = Object.getPrototypeOf(c)
                        }
                    }
                    for (const u of n) {
                        const c = u.value && u.value[ss];
                        if (!c)
                            continue;
                        const A = c.slice();
                        for (; A.length; ) {
                            const p = A.shift()
                              , a = Reflect.getOwnPropertyDescriptor(p.value, i);
                            if (a)
                                return a;
                            const l = p.value && p.value[ss];
                            l && A.push(...l)
                        }
                    }
                }
            }
        })
    }
    const qv = Ye()({
        name: "VTooltip",
        props: {
            id: String,
            text: String,
            ...zm(is({
                closeOnBack: !1,
                location: "end",
                locationStrategy: "connected",
                minWidth: 0,
                offset: 10,
                openOnClick: !1,
                openOnHover: !0,
                origin: "auto",
                scrim: !1,
                scrollStrategy: "reposition",
                transition: !1
            }), ["absolute", "persistent", "eager"])
        },
        emits: {
            "update:modelValue": e=>!0
        },
        setup(e, t) {
            let {slots: n} = t;
            const o = In(e, "modelValue")
              , {scopeId: r} = as()
              , i = Nr()
              , s = I(()=>e.id || `v-tooltip-${i}`)
              , u = G()
              , c = I(()=>e.location.split(" ").length > 1 ? e.location : e.location + " center")
              , A = I(()=>e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center")
              , p = I(()=>e.transition ? e.transition : o.value ? "scale-transition" : "fade-transition")
              , a = I(()=>He({
                "aria-describedby": s.value
            }, e.activatorProps));
            return et(()=>{
                const [l] = Yo.filterProps(e);
                return S(Yo, He({
                    ref: u,
                    class: ["v-tooltip"],
                    id: s.value
                }, l, {
                    modelValue: o.value,
                    "onUpdate:modelValue": d=>o.value = d,
                    transition: p.value,
                    absolute: !0,
                    location: c.value,
                    origin: A.value,
                    persistent: !0,
                    role: "tooltip",
                    eager: !0,
                    activatorProps: a.value,
                    _disableGlobalStack: !0
                }, r), {
                    activator: n.activator,
                    default: function() {
                        var v;
                        for (var d = arguments.length, f = new Array(d), m = 0; m < d; m++)
                            f[m] = arguments[m];
                        return ((v = n.default) == null ? void 0 : v.call(n, ...f)) ?? e.text
                    }
                })
            }
            ),
            gd({}, u)
        }
    })
      , Yv = {
        class: "vh"
    }
      , zv = {
        key: 0,
        class: "bars"
    }
      , Hv = R("span", {
        class: "bar"
    }, null, -1)
      , Kv = R("span", {
        class: "bar"
    }, null, -1)
      , Zv = R("span", {
        class: "bar"
    }, null, -1)
      , Pv = R("span", {
        class: "bar"
    }, null, -1)
      , Wv = R("span", {
        class: "bar"
    }, null, -1)
      , Jv = [Hv, Kv, Zv, Pv, Wv]
      , ls = {
        __name: "AudioButton",
        setup(e) {
            const t = Dn()
              , n = ()=>"mdi-volume-off"
              , o = ()=>t.isBGMMuted ? "Mute" : "Unmute"
              , r = ()=>{
                t.isEnableAudioBtn && (t.playSfx("others"),
                t.isBGMMuted ? t.unmuteBGM() : t.muteBGM())
            }
            ;
            return (i,s)=>(K(),
            Te(qv, {
                activator: "parent",
                location: "bottom"
            }, {
                activator: Be(({})=>[S(mt, {
                    class: "audio-button__button",
                    icon: "",
                    onClick: r
                }, {
                    default: Be(()=>[R("span", Yv, Qe(`Click to ${o}`), 1), q(t).isBGMMuted ? (K(),
                    Te(Bn, {
                        key: 1
                    }, {
                        default: Be(()=>[Pe(Qe(n()), 1)]),
                        _: 1
                    })) : (K(),
                    ae("span", zv, Jv))]),
                    _: 1
                })]),
                default: Be(()=>[R("span", null, Qe(o()), 1)]),
                _: 1
            }))
        }
    }
      , Xv = [{
        title: "Home",
        url: "https://imaginaryones.com"
    }, {
        title: "Imaginary Rides",
        url: "/",
        isActive: !0,
        isNuxtLink: !0
    }, {
        title: "Staking",
        url: "https://world.imaginaryones.com"
    }, {
        title: "Hugo x IO",
        mobileTitle: "Hugo x IO",
        url: "https://imaginaryones.com/hugo"
    }, {
        title: "Roadmap",
        mobileTitle: "Roadmap",
        url: "https://imaginaryones.com/imaginary-world"
    }, {
        title: "Creation Myth",
        url: "https://imaginaryones.com/creation-myth"
    }, {
        title: "PFP Tool",
        url: "https://imaginaryones.com/pfp-tool"
    }, {
        title: "Careers",
        url: "https://imaginaryones.com/careers"
    }, {
        title: "Gallery",
        url: "#"
    }, {
        title: "Events",
        url: "#"
    }, {
        title: "Fan Art",
        url: "#"
    }]
      , _v = [{
        title: "Opensea",
        icon: "icon icon-opensea",
        url: "https://opensea.io/collection/io-imaginary-ones"
    }, {
        title: "Foundation",
        icon: "icon icon-foundation",
        url: "https://foundation.app/collection/imaginary-ones"
    }, {
        title: "Discord",
        icon: "icon icon-discord",
        url: "https://discord.gg/io-imaginary-ones"
    }, {
        title: "Twitter",
        icon: "icon icon-twitter",
        url: "https://twitter.com/imaginary_ones"
    }, {
        title: "Instagram",
        icon: "icon icon-instagram",
        url: "https://www.instagram.com/theimaginaryones/"
    }, {
        title: "Medium",
        icon: "icon icon-medium",
        url: "https://imaginaryones.medium.com/"
    }]
      , $v = {
        class: "header-sidebar",
        "aria-modal": "true"
    }
      , eb = {
        class: "header-sidebar__header"
    }
      , tb = {
        style: {
            background: "transparent !important"
        }
    }
      , nb = {
        class: "header-sidebar__nav",
        "aria-label": "Accessibility Navigation",
        role: "navigation"
    }
      , ob = {
        class: "nav__list"
    }
      , rb = {
        class: "social__footer"
    }
      , ab = {
        class: "header-sidebar__social"
    }
      , ib = {
        class: "social__item"
    }
      , sb = {
        key: 0,
        class: "social__link"
    }
      , lb = {
        class: "vh"
    }
      , ub = ["href"]
      , cb = {
        class: "vh"
    }
      , db = {
        __name: "HeaderSidebar",
        emits: ["close"],
        setup(e, {emit: t}) {
            const n = Dn()
              , o = r=>{
                t("close"),
                r === "closeBtn" || n.playSfx("others"),
                n.playSfx("close")
            }
            ;
            return (r,i)=>(K(),
            ae("div", $v, [R("div", eb, [R("span", tb, [S(ls)]), S(mt, {
                class: "btn-close",
                icon: "mdi-close",
                onClick: i[0] || (i[0] = s=>o("closeBtn"))
            })]), R("nav", nb, [R("ul", ob, [(K(!0),
            ae(Se, null, ht(q(Xv), (s,u)=>(K(),
            ae("li", {
                class: "nav__item",
                key: u
            }, [S(Om, {
                url: s.url,
                title: s.title,
                mobileTitle: s.mobileTitle,
                "is-mint-d-app": s.isMintDApp,
                "is-nuxt-link": s.isNuxtLink,
                "is-active": s.isActive,
                "new-tab": s.newTab,
                onClick: o
            }, null, 8, ["url", "title", "mobileTitle", "is-mint-d-app", "is-nuxt-link", "is-active", "new-tab"])]))), 128))])]), R("div", rb, [R("ul", ab, [(K(!0),
            ae(Se, null, ht(q(_v), s=>(K(),
            ae("li", ib, [s.url === "#" || !s.url ? (K(),
            ae("span", sb, [R("span", lb, Qe(s.title), 1), S(Bn, null, {
                default: Be(()=>[Pe(Qe(s.icon), 1)]),
                _: 2
            }, 1024)])) : (K(),
            ae("a", {
                key: 1,
                class: "social__link",
                href: s.url,
                target: "_blank",
                rel: "noopener nofollow"
            }, [R("span", cb, Qe(s.title), 1), S(Bn, null, {
                default: Be(()=>[Pe(Qe(s.icon), 1)]),
                _: 2
            }, 1024)], 8, ub))]))), 256))])])]))
        }
    };
    let md, hd, vd, bd, wd, yd, Cd, Ed, Id, Bd, Md, Qd, Sd, xd, kd, Od, Dd, Ld, Td, Vd, Fd, Rd, Ud, Gd, jd, Nd, qd, Yd, eo, zo, Ho, zd, Hd, Kd, en, us, Zd, Pd, cs, Wd, tt, Jd, Xd, _d, $d, eA, tA, nA;
    md = Ye()({
        name: "VContainer",
        props: {
            fluid: {
                type: Boolean,
                default: !1
            },
            ...Xt()
        },
        setup(e, t) {
            let {slots: n} = t;
            return et(()=>S(e.tag, {
                class: ["v-container", {
                    "v-container--fluid": e.fluid
                }]
            }, n)),
            {}
        }
    }),
    hd = {
        class: "header__nav"
    },
    vd = {
        class: "hide-mobile"
    },
    bd = {
        __name: "HeaderContainer",
        props: {
            isWhite: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e
              , n = Dn()
              , o = pe("emitter")
              , r = G(!1)
              , i = G(!1)
              , s = G(!1)
              , u = G(!1)
              , c = G(!1)
              , A = !1;
            kn(),
            $o();
            const p = I(()=>c.value || t.isWhite);
            me(u, ()=>{
                u.value && !s.value ? c.value = !0 : c.value = !1
            }
            );
            const a = ()=>{
                r.value = !1,
                document.body.closest("html").classList.remove("no-scroll")
            }
              , l = ()=>{
                r.value = !0,
                document.body.closest("html").classList.add("no-scroll"),
                n.playSfx("open")
            }
              , d = ()=>{
                c.value = !1,
                o.emit("set-show-rides-info", !1),
                n.infoIsVisible = !1,
                n.playSfx("close"),
                n.playParticularBgm()
            }
            ;
            vt(()=>{
                i.value = !0,
                document.addEventListener("scroll", m)
            }
            ),
            xn(()=>{
                document.removeEventListener("scroll", m)
            }
            );
            const f = v=>{
                var g;
                return ((g = document.querySelector(v)) == null ? void 0 : g.offsetHeight) || 0
            }
              , m = v=>{
                const g = window.scrollY;
                s.value = g > 50;
                const h = f(".landing-game__container")
                  , b = f(".landing-mint__container")
                  , E = f(".landing-info__container")
                  , T = f(".landing-service__container")
                  , B = f(".landing-rewards__container")
                  , Q = f(".landing-guide__container")
                  , C = f(".landing-phases__container")
                  , x = f(".landing-partner__container")
                  , V = f(".landing-community__container")
                  , D = {
                    1: h,
                    2: b,
                    3: E,
                    4: T,
                    5: B,
                    6: Q,
                    7: C,
                    8: x,
                    9: V
                }
                  , O = ()=>g < D[1] + D[2] + D[3] || g > D[1] + D[2] + D[3] + D[4] && g < D[1] + D[2] + D[3] + D[4] + D[5] + D[6] || g > D[1] + D[2] + D[3] + D[4] + D[5] + D[6] + D[7] && g < D[1] + D[2] + D[3] + D[4] + D[5] + D[6] + D[7] + D[8];
                u.value && (O() ? c.value = !0 : c.value = !1)
            }
            ;
            return o.on("set-show-rides-info", v=>{
                u.value = v
            }
            ),
            (v,g)=>(K(),
            ae("header", {
                class: Le(["header", {
                    "show-menu": r.value,
                    "is-out": !i.value,
                    "is-dark": A
                }])
            }, [S(Yo, {
                persistent: "",
                "model-value": r.value,
                scrim: "#000000",
                "z-index": "98",
                onClick: a
            }, null, 8, ["model-value"]), S(md, null, {
                default: Be(()=>[S(va, {
                    class: Le(["header__logo", {
                        "is-light": q(p)
                    }]),
                    logo: "logo/imaginary-rides-logo"
                }, null, 8, ["class"]), R("div", hd, [R("div", vd, [S(ls)]), S(mt, {
                    class: Le(["v-btn--menu", {
                        "is-light": q(p)
                    }]),
                    icon: "mdi-menu",
                    onClick: l
                }, null, 8, ["class"]), u.value ? (K(),
                Te(mt, {
                    key: 0,
                    class: Le(["v-btn--close-info", {
                        "is-light": q(p)
                    }]),
                    icon: "mdi-close",
                    title: "Click to close info",
                    onClick: d
                }, null, 8, ["class"])) : Oe("", !0)])]),
                _: 1
            }), S(gt, {
                name: "slide-left"
            }, {
                default: Be(()=>[r.value ? (K(),
                Te(db, {
                    key: 0,
                    onClose: a
                })) : Oe("", !0)]),
                _: 1
            })], 2))
        }
    },
    bt = Ii({
        id: "bubbleRider",
        state: ()=>({
            version: "",
            activeLeague: "",
            activeLeaderboardType: "",
            activeLeaderboardTab: "individual",
            selectedIOBuddies: "",
            userLeaderboardList: {},
            partners: [],
            qualifiedPartners: [],
            isFromRootLeague: !1,
            lastSelectedPrivateLeaguePartner: null
        }),
        getters: {
            isOnOverallLeaderboard: e=>e.activeLeaderboardType === "overall",
            isOnPrivateLeaderboard: e=>e.activeLeaderboardType === "private",
            getSelectedLeagueId: e=>{
                let t = -1;
                return e.activeLeaderboardType && (e.activeLeaderboardType === "overall" ? t = 0 : e.activeLeaderboardType === "public" ? t = 1 : t = e.selectedIOBuddies),
                t
            }
        },
        actions: {
            setActiveLeague(e) {
                this.activeLeague = e
            },
            setActiveLeaderboardType(e) {
                this.activeLeaderboardType = e
            },
            setActiveLeaderboardTab(e) {
                this.activeLeaderboardTab = e
            },
            setSelectedIOBuddies(e) {
                this.selectedIOBuddies = e
            }
        }
    }),
    wd = "/assets/1-3598777e.png",
    yd = "/assets/10-4a8653da.png",
    Cd = "/assets/11-91bf6951.png",
    Ed = "/assets/12-dcd39b69.png",
    Id = "/assets/13-b5f6a9cc.png",
    Bd = "/assets/14-9fba5b09.png",
    Md = "/assets/15-a70a79a3.png",
    Qd = "/assets/16-1de428f1.png",
    Sd = "/assets/17-e822215b.png",
    xd = "/assets/18-90f94ac9.png",
    kd = "/assets/19-f71ce134.png",
    Od = "/assets/2-a2393a52.png",
    Dd = "/assets/20-b471787d.png",
    Ld = "/assets/21-6b29e333.png",
    Td = "/assets/22-c8910c61.png",
    Vd = "/assets/23-23e49f73.png",
    Fd = "/assets/24-56debd3a.png",
    Rd = "/assets/3-b9c64da8.png",
    Ud = "/assets/4-9b0b205f.png",
    Gd = "/assets/5-47b74629.png",
    jd = "/assets/6-8a7157ba.png",
    Nd = "/assets/7-8efa55de.png",
    qd = "/assets/8-6bc69bd9.png",
    Yd = "/assets/9-f7b9e9b3.png",
    oo = ()=>window.localStorage.getItem("brider-token"),
    pa = e=>window.localStorage.setItem("brider-token", e),
    eo = ()=>window.localStorage.removeItem("brider-token"),
    rp = ()=>{
        if (typeof Storage < "u")
            return !0
    }
    ,
    zo = e=>e == null ? void 0 : e.getDate().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: !1
    }),
    Ho = e=>e == null ? void 0 : e.toLocaleString("default", {
        month: "long"
    }),
    zd = e=>e == null ? void 0 : e.toLocaleString("default", {
        year: "numeric"
    }),
    lp = e=>`${zo(e)} ${Ho(e)} ${zd(e)}`,
    up = e=>{
        let t = "";
        const n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if (e.startTime || e.endTime) {
            const {startTime: o, endTime: r} = e;
            let i = zo(o)
              , s = zo(r);
            Ho(o) === Ho(r) ? t = `${i} - ${s} ${Ho(r)}` : t = `${i} ${n[o.getMonth()]} - ${s} ${n[r.getMonth()]}`
        } else
            t = `${zo(e)} ${e.toLocaleString("en-US", {
                month: "long"
            })} ${e.toLocaleString("en-US", {
                hour: "numeric",
                hour12: !0
            }).replace(/\s/g, "").toLowerCase()}`;
        return t
    }
    ,
    Hd = e=>e ? `${e.slice(0, 6)}...${e.slice(-4)}` : "",
    Kd = e=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(e),
    ha = (e,t)=>{
        if (e && t)
            return `https://cdn.discordapp.com/avatars/${e}/${t}`;
        let n;
        do
            n = Math.floor(Math.random() * "24");
        while (n === 0);
        return new URL(Object.assign({
            "../assets/images/bubble-rider/default-avatars/1.png": wd,
            "../assets/images/bubble-rider/default-avatars/10.png": yd,
            "../assets/images/bubble-rider/default-avatars/11.png": Cd,
            "../assets/images/bubble-rider/default-avatars/12.png": Ed,
            "../assets/images/bubble-rider/default-avatars/13.png": Id,
            "../assets/images/bubble-rider/default-avatars/14.png": Bd,
            "../assets/images/bubble-rider/default-avatars/15.png": Md,
            "../assets/images/bubble-rider/default-avatars/16.png": Qd,
            "../assets/images/bubble-rider/default-avatars/17.png": Sd,
            "../assets/images/bubble-rider/default-avatars/18.png": xd,
            "../assets/images/bubble-rider/default-avatars/19.png": kd,
            "../assets/images/bubble-rider/default-avatars/2.png": Od,
            "../assets/images/bubble-rider/default-avatars/20.png": Dd,
            "../assets/images/bubble-rider/default-avatars/21.png": Ld,
            "../assets/images/bubble-rider/default-avatars/22.png": Td,
            "../assets/images/bubble-rider/default-avatars/23.png": Vd,
            "../assets/images/bubble-rider/default-avatars/24.png": Fd,
            "../assets/images/bubble-rider/default-avatars/3.png": Rd,
            "../assets/images/bubble-rider/default-avatars/4.png": Ud,
            "../assets/images/bubble-rider/default-avatars/5.png": Gd,
            "../assets/images/bubble-rider/default-avatars/6.png": jd,
            "../assets/images/bubble-rider/default-avatars/7.png": Nd,
            "../assets/images/bubble-rider/default-avatars/8.png": qd,
            "../assets/images/bubble-rider/default-avatars/9.png": Yd
        })[`../assets/images/bubble-rider/default-avatars/${n}.png`],self.location).href
    }
    ,
    en = e=>{
        const t = new Image;
        t.src = e
    }
    ,
    us = ()=>{
        [new URL("/assets/public-league-bg-760455bd.png",self.location).href, new URL("/assets/hovered-public-league-bg-1020778f.png",self.location).href, new URL("/assets/private-league-bg-c015b984.png",self.location).href, new URL("/assets/hovered-private-league-bg-cb2ec202.png",self.location).href, new URL("/assets/public-league-banner-2193f900.png",self.location).href, new URL("/assets/ride-1-28cb97ef.png",self.location).href, new URL("/assets/ride-3-d72ff9ba.png",self.location).href, new URL("/assets/crown-icon-plain-81ca06a2.png",self.location).href, new URL("/assets/non-desktop-bg-b78f6115.png",self.location).href, new URL("/assets/1-f5d6c768.jpg",self.location).href, new URL("/assets/2-4e40e2af.png",self.location).href, new URL("/assets/3-b275acb5.png",self.location).href, new URL("/assets/4-d3eb844c.png",self.location).href, new URL("/assets/5-0404dbd3.png",self.location).href, new URL("/assets/6-609a79be.png",self.location).href, new URL("/assets/7-01d38f58.png",self.location).href, new URL("/assets/8-0bd31f9f.png",self.location).href, new URL("/assets/9-8f1cfe6b.png",self.location).href].forEach(e=>en(e))
    }
    ,
    Zd = ()=>{
        [new URL("/assets/about-5dd8bfc4.png",self.location).href, new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAACbklEQVR4AbWSS2sUQRSFz0xnnJCYaKIkZGE0iVGJGzGiggjjwo1o8LFzEQUX+g+MO/+D4MaFijvBnYvgUhQEcREENZjHmEwymUfPo6urq7q7usrbPZlxERFBvHCqi6bud0/VvcA/Rup3P83tuZw+PnHJKDHMvnxPFRYWV5wt+8W58qflPwLkzJ3D2bNnniBSOSx8A88XUHEZmioEJwnbfeYw9/51LJd3AOTFu5PZ3PQHQA9iaRUyv47CYgFll8ONQqiUhpVOI23MCmds+hryjTgvnVgmUHZ05A1SZhBrBWjhoio8lJWArSVqkd9y0ZuGNbZ/vG/fnqftwgkAJ27ewkDvIRQ2YZgDu2qjtFEmCAGUj7oO4GgCkIvsyaPoGR26+rrryPlfDsLgHmo2TL0OhzFsFSuoMI566KMaxQByEAXgQoJzDz1T4+gf3H05zu2KF834qdTnJTSkh1IoUa7WYfseWRdoULJvFLqRgeV3wSlVMDQ5QZXTxzoA6XmWl3fpzj5JohIK1OjuDVKTFEBBG40e34Io22hksrAC1d8BFAO+LiNzoEKHK7Fl41OygBN58CAR0jNnSCrKQK7bYLZAtwzznTfYDJ2XpZCjqjy6LyniYJonyRI6AShaFSKEnBwRwAvlfGcOXmHkoEinVhl1u0HVm0aCkXFOiWK7XX2kIVqH0YuB1K78rFkb6zi4geIPG825mmZgxqVEnyrHVZMZSapoUuxBQJmm8Wfac2C1N/MmfH8aSrswF0RyuCW9DbFa2iDYlQeof9wBiOMd8HYKeO4CA4zkAXtlC/KVPo9pN/sIwSL+NnLUpYftaf1f8RPQ+XJa6l1ehQAAAABJRU5ErkJggg==",self.location).href, new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAACXklEQVR4AbWTvWsUQRjGn5nZ271cTjTm9CwSTLANqewsTCdYWFhop0kRtLJKMKVBwUq0sEgKEUStxMbORsifoIWN4IXc5UOT+9jv2Z0P370jB2IQQfLCMMyyz+953pcZ4D+LHfXx4Rc7VxvDJSEx3dpGtNWS39zEflhbGGn8FfB4x06NV/Eyk5hr7gLbLSBsJ0ijAI7ScDR/fmWyfv/ONRb/AVjp2KkLFWwoicnGFrBH4p87JPY7yJIIRmeA4KiVT3+ePlG//GyBdQsdPwSMlfBJKUy2yDluA2nHIOuF/ZUHMfJIwiQKgUpmG9J/eqjrA1aadt4xmNrdA4J9wD8Aep0UMkiQBSmyUELFOYzUOD/qIbN2fumtnR0CshSL3YOBMKFgvbam6Ak5p8jDjNwVVGqRp4CkfbzsYjNWNwqt0weEuOjTWGICpBQ/6uUkzqEiTcvA5PSTyyCEQCc0mDjloKfYzBAgu3B9f+Auu5aiq4E4ttQ3IwDrhzVKIJYc7ZBOrjg5bIH5aKkeoAiiyEGHFjoB9SxgcxfQHrh2wQ31n5dQpK0CrSGAB3hnggFAR+SYclhZAlNlMDMCZoudli1gJSILjAIfh4CaxrpHVFu4UmQU4twD0+W+mLMKGCuTuAA4KBvWWF9kr4aAR7fY1zGLBx5NmUsCZA6JydlUIFgVgiCiSEBi1zg4W2K3f7sHRa0ts9W6wGpF0mQzDk4QQQl40X/RCp29THRr2t58scQ2jnwLRd29Z2e+b2I5bdvrMs+rlq6wI/Q+r9rXZ+rek/dvKk38a82hOXF19Mc5HGf9AvvyQrmyJkJEAAAAAElFTkSuQmCC",self.location).href, new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRklEQVR4Aa2TQWsUMRTH/8nMZGa1K5UqooJa/AQevUgvevLgvd9BEFEUoXrwoFgE74Ko6HdQPPgFvCl4sutBbet2d3Yyk5kkk8S3u7RrKXtrIJNJmN/vvRfeMMwZ4UM4ColT0ABbZT/mfccOgBthBQt4iBIr6APtLwO5VaKx7Vst/dry/dO9uYKwGV6gi5vYoM1PQG/X2Ml3IJWEcRYJEziWnLhz9t7J9V2G78G/w2MsErxFmxHglUeeF8hHJWShUMkGsqZ3M3i2tT68sU8QvodlpHgwgbdpUuqKostcoSRYlRpaGTgTEHcTOGdfhaehO8ugwRoKWv/SHFDdfYdiWE2iKqnRyBZGBdjaQ2QZxEK8qCK7OhNIXMMfWjenEtVvUBcNgRa6ILhs4UgQGgY9tMi6HQQWLo/ReCIocAZqGl3nHlVuCHZwpUcoIwTrgYyDiwiuoLOKQM/PzTLIKYch3QVdnh5RRIraEgwVgTc0dYzICMRtCkZnhkqMQmT/L+HL+OYdzbYM8BVFUwl4nSC1HaQt1e1SJE6AmwSMpPT8PBPUeDm+RFeOZVM4rgUSipjaDJkjiU8pA4GojcEdR6Pwfk/AbrF3MPgWkYBXZFcCQhNoCBzD6JAsmwhYy+Fa9rzziPX2NRL15PWoRS+l9FMSpJpAe4TS70zKiGyMoBm4F5+W1sXtA53InrAeW8KV2OJ1MuSIBwmigaCujOCHDH7Ec9+wu+ffdK9i3r+wOzYWw4Wmalakqy4a6CDS5GuSJh8v5cdzHPb4B5UqMdXztjA3AAAAAElFTkSuQmCC",self.location).href, new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAACYklEQVR4AbWTTWjUQBiG30my3f5XVkQUxCIV/LmpV2F7UEFBPHkTDwpW8aAX9VT27EEEDx48KN7syWPxLCiIIAoKItvV1mZb6eZvkpkkkxm/pHSLWEQQvxDyN88zX95MgH8sttXN69Gr5qQ9cVrxaGfHXWJfVrttCfb05Ylr7T8KLpm3U4ex/ZESotnuduC6LrgXQMUCShUQlnmiGjtuvz91dfU3wRXzcf8BbHtdFFHj28oi3CUXK90upB8hExJKaxjbgjU20rZ3jR99N33TLzmroo1hDTgvtE4aSz0XUc9D4geQAUcc0R4nEGUXMsWgzPapnni8MXEluFC8uVg3anI5XIc9z8OPwEfMORKCZUKCVCLPMkyNTGC4KM4dmr93vC+QqZzxeQ8BwVEQYs1bh2MCuUgQSgGeSUR5hoBEuwdHYOviTMk6lSDkxxa4QLzmQVBofhRVcESDRVoGqMBqNRjtoCsiTDUmoHV6sC+IeWSnFJYIA8RhSLPGSAiWeYpMZdD0BSybUVQankqxnIRQo/XxvoAnyaLgfE8ZViLpnWlWQe0qnUPTBstUR8MM1oxCriSGrKFOPwOeZnM+gQGBIc2aqE3Y2KhAY1EH9NFTmGpndWe+LxCO/YAbbXgukaocuSkILQgyALWOGg2rRIAyBgVjnc/TN571BQtHLn+FM3AnJ3NBLWIDLp+WAodOGAMjsWUxY+z62V/WQVneyVt3B0bHZhkNLsPaXKckKui6UOXxu21bTe/87Ict/4WqHs5MIgxa4LxJie6lMKgL5xOc2hyGnftoPffx19VsOmi1LPzP+gml0YGxfHgWmAAAAABJRU5ErkJggg==",self.location).href, new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAACX0lEQVR4AbWSvWsUQRiHfzO3e3unl88iBjEYFVKZVHYWphT/gHRiGsHCxkJQbC6WWmghiJUQS+0sFBGUoCg2QhobMVGTXMwl3sfuzu7szOz4zp45kIgI4rvMzjIzzzPvO7PAPwb73eCTi3Z2dAInFceRxhrijU/JR6HY46tPq6t/FLy5YCdHjuG+yjG78RVYW7doxwJJFkJDwebsTu2wf+Xyg/F4j8DBB6ewJAwmPq8AjQbwbStCJL4jNSSwCiXuoVIbWvb9gVP1lyNtx/FdwcAgXqQEb3wB2hEQCo0o7iIW1CKBVKTIsgxaJzPWqFu7XCF4fdbO2wCTm2tAq0OClkVrS0CEAnGHSogSyCiDlArDRwMgx/zN03bGsZ57JRnO6xbBIdCl6lpbisAYokuSWEIbBe7RXsZChjlqY2VkzWyO0OVCQBmekCu91LuxRbiTIOmkSGKFVNHxWQ1f+ygZKq1hMDjlwWQ43s8gilCmctFxcEdR6hIipZSNQWYt3QADswxGlSC3STJApjwY6p8Bnc96SCUImhQtDUlXkdEaZTkMfFiUqWyfIB+qWYJYZfA9vt4XJBKPkh3qSSLTHDIHXVuJoDLNuhZQDpVCZFMfueSwHn/WF+SjuKdox2JXGlJUmSUIBDHso5Eq9U7isig5bPXaK7bYF1x6zj6ghrqmb10cS4V27wl6cKWAcyf2OfaPs3O//Acurm+yhWqFLfBiYfATcq1MzZXDkXPb9ob5XP19dWmPwMWNlNWHDrBpxrGooSOFrHgMzLYFu+0HwfTd5thD/G3M4u2hM3g3jv8ZPwBk3zhA4SW1zwAAAABJRU5ErkJggg==",self.location).href, new URL("/assets/bubble-blur-1-ee25293f.png",self.location).href, new URL("/assets/bubble-blur-2-7a1396dc.png",self.location).href, new URL("/assets/bubble-blur-3-9e6e54dc.png",self.location).href].forEach(e=>en(e))
    }
    ,
    Pd = ()=>{
        [new URL("/assets/tutorial-1-03c179da.gif",self.location).href, new URL("/assets/tutorial-2-6cb7c76f.gif",self.location).href, new URL("/assets/bubble-blur-1-ee25293f.png",self.location).href, new URL("/assets/bubble-blur-2-7a1396dc.png",self.location).href, new URL("/assets/bubble-blur-3-9e6e54dc.png",self.location).href, new URL("/assets/magnet-bubble-ccde5241.png",self.location).href, new URL("/assets/crown-bubble-08bb3307.png",self.location).href, new URL("/assets/gem-bubble-8f9a8be3.png",self.location).href].forEach(e=>en(e))
    }
    ,
    cs = ()=>{
        [new URL("/assets/legendary-banner-8519078f.png",self.location).href, new URL("/assets/io-banner-1b099e02.png",self.location).href, new URL("/assets/rides-banner-aabe08aa.png",self.location).href, new URL("/assets/imaginary-ones-8d997220.png",self.location).href, new URL("/assets/ride-1-28cb97ef.png",self.location).href, new URL("/assets/ride-2-86fa264f.png",self.location).href, new URL("/assets/ride-3-d72ff9ba.png",self.location).href, new URL("/assets/more-reward-88442b79.png",self.location).href, new URL("/assets/crown-9b0236cb.png",self.location).href, new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBpZPNLgRBEMf/1T0iuLiTWAeHuc26OBoewNeZ+HgBbo6yNzfeYEmcfbwAe3VhJZKJcTAS7stpMd2le7AzYz/Y7D/ppKer6jfVVV1AB72H8PhOnnAoy3yN4U6+TjuDDWQYCKGQHAxKA1KL7fwpF3wvdsDkm21kAAvgfBYEqhovswycuEITutQEikO5JoAyupBSNNPnxhW7FymRPfSgBggaEbqU0x8/5EC2sCRos1NQ9MQozmkcHnN6GDtbDRAHKPCQvAa+u2NUe+VkZb9nVjQenxnTU2l/GLzFobOXgDSJhSzEamObMTmvkyx+IC+vwPmRRGEkn2kCu4VHH4HjS8kXWWM1YMwua4yNUuJ6EwBXZxKei5Z6U2pc2PYxUylr8Fwyfxd4fPqClHepNYQ50ozFARdR48IqFPvmweUKXrnkpC6rS6JlJlph3XHVgd2nI2Lb/8vfTwpLaCfZrxolSUOp81C2VF0Wm0Baiwq6kalPnVQ1zSNrM29KQfoMioSAT8Q7GWuNNUqaRdWMU0HW1SkVUcN/pO7kgQ4l2xUHcg29yL6z97Dvz4H+BMiSuybOLYDBAAAAAElFTkSuQmCC",self.location).href, new URL("/assets/legendary-video-banner-16957707.mp4",self.location).href, new URL("/assets/io-video-banner-f1fb1b4f.mp4",self.location).href, new URL("/assets/rides-video-banner-0ebbd8c4.mp4",self.location).href].forEach(e=>en(e))
    }
    ,
    Wd = ()=>{
        en(new URL("/assets/landing-game-bg-59036de6.png",self.location).href)
    }
    ,
    Qs = e=>e.toString().replace(/.(?=(?:.{3})+$)/g, "$&,"),
    ba = ()=>navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && navigator.userAgent.indexOf("CriOS") == -1 && navigator.userAgent.indexOf("FxiOS") == -1,
    Bt = Ii({
        id: "bRiderUser",
        state: ()=>({
            id: 0,
            discordId: 0,
            username: "",
            wallet: "",
            avatar: null,
            hasSeenPropsPreslected: !1,
            gameData: []
        }),
        getters: {
            isLoggedIn: e=>e.id,
            getSelectedGameData: e=>{
                const t = bt();
                return e.gameData.find(n=>n.partnerId === t.getSelectedLeagueId) || e.gameData.find(n=>n.partnerId === 0)
            }
        },
        actions: {
            setUser(e) {
                e.id && (this.id = e.id),
                e.username && (this.username = e.username + (e.discriminator ? `#${e.discriminator}` : "")),
                e.discord && (this.discordId = e.discord),
                e.address && (this.wallet = e.address),
                this.discordId && e.avatar && (this.avatar = ha(this.discordId, e.avatar))
            },
            resetUser() {
                this.id = 0,
                this.discordId = 0,
                this.wallet = ""
            }
        }
    }),
    tr = 960,
    Sn = 50,
    tt = function e(t) {
        function n(r, i, s) {
            var u, c = {};
            if (Array.isArray(r))
                return r.concat(i);
            for (u in r)
                c[s ? u.toLowerCase() : u] = r[u];
            for (u in i) {
                var A = s ? u.toLowerCase() : u
                  , p = i[u];
                c[A] = A in c && typeof p == "object" ? n(c[A], p, A == "headers") : p
            }
            return c
        }
        function o(r, i, s, u, c) {
            var A = typeof r != "string" ? (i = r).url : r
              , p = {
                config: i
            }
              , a = n(t, i)
              , l = {};
            u = u || a.data,
            (a.transformRequest || []).map(function(d) {
                u = d(u, a.headers) || u
            }),
            a.auth && (l.authorization = a.auth),
            u && typeof u == "object" && typeof u.append != "function" && typeof u.text != "function" && (u = JSON.stringify(u),
            l["content-type"] = "application/json");
            try {
                l[a.xsrfHeaderName] = decodeURIComponent(document.cookie.match(RegExp("(^|; )" + a.xsrfCookieName + "=([^;]*)"))[2])
            } catch {}
            return a.baseURL && (A = A.replace(/^(?!.*\/\/)\/?/, a.baseURL + "/")),
            a.params && (A += (~A.indexOf("?") ? "&" : "?") + (a.paramsSerializer ? a.paramsSerializer(a.params) : new URLSearchParams(a.params))),
            (a.fetch || fetch)(A, {
                method: (s || a.method || "get").toUpperCase(),
                body: u,
                headers: n(a.headers, l, !0),
                credentials: a.withCredentials ? "include" : c
            }).then(function(d) {
                for (var f in d)
                    typeof d[f] != "function" && (p[f] = d[f]);
                return a.responseType == "stream" ? (p.data = d.body,
                p) : d[a.responseType || "text"]().then(function(m) {
                    p.data = m,
                    p.data = JSON.parse(m)
                }).catch(Object).then(function() {
                    return (a.validateStatus ? a.validateStatus(d.status) : d.ok) ? p : Promise.reject(p)
                })
            })
        }
        return t = t || {},
        o.request = o,
        o.get = function(r, i) {
            return o(r, i, "get")
        }
        ,
        o.delete = function(r, i) {
            return o(r, i, "delete")
        }
        ,
        o.head = function(r, i) {
            return o(r, i, "head")
        }
        ,
        o.options = function(r, i) {
            return o(r, i, "options")
        }
        ,
        o.post = function(r, i, s) {
            return o(r, s, "post", i)
        }
        ,
        o.put = function(r, i, s) {
            return o(r, s, "put", i)
        }
        ,
        o.patch = function(r, i, s) {
            return o(r, s, "patch", i)
        }
        ,
        o.all = Promise.all.bind(Promise),
        o.spread = function(r) {
            return r.apply.bind(r, r)
        }
        ,
        o.CancelToken = typeof AbortController == "function" ? AbortController : Object,
        o.defaults = t,
        o.create = e,
        o
    }(),
    Jd = async e=>await tt.get("auth/verify", {
        headers: {
            Authorization: `Bearer ${e}`
        }
    }),
    Xd = async(e,t)=>await tt.post("auth/discord/authorize", {
        code: t
    }, {
        headers: {
            Authorization: `Bearer ${e}`,
            "Content-Type": "application/json"
        }
    }),
    _d = async()=>await tt.post("auth/discord/revoke", {}, {
        headers: {
            Authorization: `Bearer ${oo()}`,
            "Content-Type": "application/json"
        }
    }),
    $d = async()=>await tt.get("auth/discord"),
    eA = async e=>await tt.post("auth/discord/league/iseligible", {
        guildId: e
    }, {
        headers: {
            Authorization: `Bearer ${oo()}`,
            "Content-Type": "application/json"
        }
    }),
    er = {
        verify: Jd,
        discordAuthorize: Xd,
        discordRevoke: _d,
        retieveDiscordAuthURL: $d,
        isEligibleForLeague: eA
    },
    Es = async()=>{
        try {
            const e = oo();
            if (!e || e === "" || typeof e > "u" || e === null)
                return eo(),
                !1;
            let t = await er.verify(e);
            if (t.status === 200) {
                const n = Bt();
                switch (t = t.data,
                t.state) {
                case "renew":
                    return pa(t.token),
                    n.setUser(t.credentials),
                    !0;
                case "valid":
                    return n.setUser(t.credentials),
                    !0;
                default:
                    return eo(),
                    !1
                }
            } else
                return eo(),
                !1
        } catch (e) {
            return eo(),
            e
        }
    }
    ,
    ap = async e=>{
        try {
            let t = await er.isEligibleForLeague(e);
            if (t.status === 200)
                return pa(t.data.token),
                !0
        } catch {
            return !1
        }
    }
    ,
    tA = async()=>{
        try {
            if ((await er.discordRevoke()).status === 200) {
                const e = Bt();
                eo(),
                e.resetUser()
            }
        } catch (e) {
            return e
        }
    }
    ,
    nA = "6.2.2";
    function Ab(e, t, n) {
        const o = t.split("|").map(i=>i.trim());
        for (let i = 0; i < o.length; i++)
            switch (t) {
            case "any":
                return;
            case "bigint":
            case "boolean":
            case "number":
            case "string":
                if (typeof e === t)
                    return
            }
        const r = new Error(`invalid value for type ${t}`);
        throw r.code = "INVALID_ARGUMENT",
        r.argument = `value.${n}`,
        r.value = e,
        r
    }
    function pb(e, t, n) {
        for (let o in t) {
            let r = t[o];
            const i = n ? n[o] : null;
            i && Ab(r, i, o),
            Object.defineProperty(e, o, {
                enumerable: !0,
                value: r,
                writable: !1
            })
        }
    }
    function to(e) {
        if (e == null)
            return "null";
        if (Array.isArray(e))
            return "[ " + e.map(to).join(", ") + " ]";
        if (e instanceof Uint8Array) {
            const t = "0123456789abcdef";
            let n = "0x";
            for (let o = 0; o < e.length; o++)
                n += t[e[o] >> 4],
                n += t[e[o] & 15];
            return n
        }
        if (typeof e == "object" && typeof e.toJSON == "function")
            return to(e.toJSON());
        switch (typeof e) {
        case "boolean":
        case "symbol":
            return e.toString();
        case "bigint":
            return BigInt(e).toString();
        case "number":
            return e.toString();
        case "string":
            return JSON.stringify(e);
        case "object":
            {
                const t = Object.keys(e);
                return t.sort(),
                "{ " + t.map(n=>`${to(n)}: ${to(e[n])}`).join(", ") + " }"
            }
        }
        return "[ COULD NOT SERIALIZE ]"
    }
    function fb(e, t, n) {
        {
            const r = [];
            if (n) {
                if ("message"in n || "code"in n || "name"in n)
                    throw new Error(`value will overwrite populated values: ${to(n)}`);
                for (const i in n) {
                    const s = n[i];
                    r.push(i + "=" + to(s))
                }
            }
            r.push(`code=${t}`),
            r.push(`version=${nA}`),
            r.length && (e += " (" + r.join(", ") + ")")
        }
        let o;
        switch (t) {
        case "INVALID_ARGUMENT":
            o = new TypeError(e);
            break;
        case "NUMERIC_FAULT":
        case "BUFFER_OVERRUN":
            o = new RangeError(e);
            break;
        default:
            o = new Error(e)
        }
        return pb(o, {
            code: t
        }),
        n && Object.assign(o, n),
        o
    }
    function gb(e, t, n, o) {
        if (!e)
            throw fb(t, n, o)
    }
    function Ko(e, t, n, o) {
        gb(e, t, "INVALID_ARGUMENT", {
            argument: n,
            value: o
        })
    }
    ["NFD", "NFC", "NFKD", "NFKC"].reduce((e,t)=>{
        try {
            if ("test".normalize(t) !== "test")
                throw new Error("bad");
            if (t === "NFD") {
                const n = String.fromCharCode(233).normalize("NFD")
                  , o = String.fromCharCode(101, 769);
                if (n !== o)
                    throw new Error("broken")
            }
            e.push(t)
        } catch {}
        return e
    }
    , []);
    function mb(e, t, n) {
        if (e instanceof Uint8Array)
            return n ? new Uint8Array(e) : e;
        if (typeof e == "string" && e.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
            const o = new Uint8Array((e.length - 2) / 2);
            let r = 2;
            for (let i = 0; i < o.length; i++)
                o[i] = parseInt(e.substring(r, r + 2), 16),
                r += 2;
            return o
        }
        Ko(!1, "invalid BytesLike value", t || "value", e)
    }
    function ds(e, t) {
        return mb(e, t, !1)
    }
    const oA = "0123456789abcdef";
    function hb(e) {
        const t = ds(e);
        let n = "0x";
        for (let o = 0; o < t.length; o++) {
            const r = t[o];
            n += oA[(r & 240) >> 4] + oA[r & 15]
        }
        return n
    }
    function As(e) {
        if (!Number.isSafeInteger(e) || e < 0)
            throw new Error(`Wrong positive integer: ${e}`)
    }
    function vb(e) {
        if (typeof e != "boolean")
            throw new Error(`Expected boolean, not ${e}`)
    }
    function rA(e, ...t) {
        if (!(e instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length))
            throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
    }
    function bb(e) {
        if (typeof e != "function" || typeof e.create != "function")
            throw new Error("Hash should be wrapped by utils.wrapConstructor");
        As(e.outputLen),
        As(e.blockLen)
    }
    function wb(e, t=!0) {
        if (e.destroyed)
            throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
            throw new Error("Hash#digest() has already been called")
    }
    function yb(e, t) {
        rA(e);
        const n = t.outputLen;
        if (e.length < n)
            throw new Error(`digestInto() expects output buffer of length at least ${n}`)
    }
    const no = {
        number: As,
        bool: vb,
        bytes: rA,
        hash: bb,
        exists: wb,
        output: yb
    }
      , Cb = e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength / 4));
    if (!(new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68))
        throw new Error("Non little-endian hardware is not supported");
    Array.from({
        length: 256
    }, (e,t)=>t.toString(16).padStart(2, "0"));
    function Eb(e) {
        if (typeof e != "string")
            throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
        return new TextEncoder().encode(e)
    }
    function ps(e) {
        if (typeof e == "string" && (e = Eb(e)),
        !(e instanceof Uint8Array))
            throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
        return e
    }
    class Ib {
        clone() {
            return this._cloneInto()
        }
    }
    function Bb(e) {
        const t = o=>e().update(ps(o)).digest()
          , n = e();
        return t.outputLen = n.outputLen,
        t.blockLen = n.blockLen,
        t.create = ()=>e(),
        t
    }
    function Mb(e) {
        const t = (o,r)=>e(r).update(ps(o)).digest()
          , n = e({});
        return t.outputLen = n.outputLen,
        t.blockLen = n.blockLen,
        t.create = o=>e(o),
        t
    }
    const na = BigInt(2 ** 32 - 1)
      , fs = BigInt(32);
    function aA(e, t=!1) {
        return t ? {
            h: Number(e & na),
            l: Number(e >> fs & na)
        } : {
            h: Number(e >> fs & na) | 0,
            l: Number(e & na) | 0
        }
    }
    function Qb(e, t=!1) {
        let n = new Uint32Array(e.length)
          , o = new Uint32Array(e.length);
        for (let r = 0; r < e.length; r++) {
            const {h: i, l: s} = aA(e[r], t);
            [n[r],o[r]] = [i, s]
        }
        return [n, o]
    }
    const Sb = (e,t)=>BigInt(e >>> 0) << fs | BigInt(t >>> 0)
      , xb = (e,t,n)=>e >>> n
      , kb = (e,t,n)=>e << 32 - n | t >>> n
      , Ob = (e,t,n)=>e >>> n | t << 32 - n
      , Db = (e,t,n)=>e << 32 - n | t >>> n
      , Lb = (e,t,n)=>e << 64 - n | t >>> n - 32
      , Tb = (e,t,n)=>e >>> n - 32 | t << 64 - n
      , Vb = (e,t)=>t
      , Fb = (e,t)=>e
      , Rb = (e,t,n)=>e << n | t >>> 32 - n
      , Ub = (e,t,n)=>t << n | e >>> 32 - n
      , Gb = (e,t,n)=>t << n - 32 | e >>> 64 - n
      , jb = (e,t,n)=>e << n - 32 | t >>> 64 - n;
    function Nb(e, t, n, o) {
        const r = (t >>> 0) + (o >>> 0);
        return {
            h: e + n + (r / 4294967296 | 0) | 0,
            l: r | 0
        }
    }
    const qb = (e,t,n)=>(e >>> 0) + (t >>> 0) + (n >>> 0)
      , Yb = (e,t,n,o)=>t + n + o + (e / 2 ** 32 | 0) | 0
      , zb = (e,t,n,o)=>(e >>> 0) + (t >>> 0) + (n >>> 0) + (o >>> 0)
      , Hb = (e,t,n,o,r)=>t + n + o + r + (e / 2 ** 32 | 0) | 0
      , Kb = (e,t,n,o,r)=>(e >>> 0) + (t >>> 0) + (n >>> 0) + (o >>> 0) + (r >>> 0)
      , Zb = (e,t,n,o,r,i)=>t + n + o + r + i + (e / 2 ** 32 | 0) | 0
      , Zo = {
        fromBig: aA,
        split: Qb,
        toBig: Sb,
        shrSH: xb,
        shrSL: kb,
        rotrSH: Ob,
        rotrSL: Db,
        rotrBH: Lb,
        rotrBL: Tb,
        rotr32H: Vb,
        rotr32L: Fb,
        rotlSH: Rb,
        rotlSL: Ub,
        rotlBH: Gb,
        rotlBL: jb,
        add: Nb,
        add3L: qb,
        add3H: Yb,
        add4L: zb,
        add4H: Hb,
        add5H: Zb,
        add5L: Kb
    }
      , [iA,sA,lA] = [[], [], []]
      , Pb = BigInt(0)
      , Po = BigInt(1)
      , Wb = BigInt(2)
      , Jb = BigInt(7)
      , Xb = BigInt(256)
      , _b = BigInt(113);
    for (let e = 0, t = Po, n = 1, o = 0; e < 24; e++) {
        [n,o] = [o, (2 * n + 3 * o) % 5],
        iA.push(2 * (5 * o + n)),
        sA.push((e + 1) * (e + 2) / 2 % 64);
        let r = Pb;
        for (let i = 0; i < 7; i++)
            t = (t << Po ^ (t >> Jb) * _b) % Xb,
            t & Wb && (r ^= Po << (Po << BigInt(i)) - Po);
        lA.push(r)
    }
    const [$b,e0] = Zo.split(lA, !0)
      , uA = (e,t,n)=>n > 32 ? Zo.rotlBH(e, t, n) : Zo.rotlSH(e, t, n)
      , cA = (e,t,n)=>n > 32 ? Zo.rotlBL(e, t, n) : Zo.rotlSL(e, t, n);
    function t0(e, t=24) {
        const n = new Uint32Array(10);
        for (let o = 24 - t; o < 24; o++) {
            for (let s = 0; s < 10; s++)
                n[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
            for (let s = 0; s < 10; s += 2) {
                const u = (s + 8) % 10
                  , c = (s + 2) % 10
                  , A = n[c]
                  , p = n[c + 1]
                  , a = uA(A, p, 1) ^ n[u]
                  , l = cA(A, p, 1) ^ n[u + 1];
                for (let d = 0; d < 50; d += 10)
                    e[s + d] ^= a,
                    e[s + d + 1] ^= l
            }
            let r = e[2]
              , i = e[3];
            for (let s = 0; s < 24; s++) {
                const u = sA[s]
                  , c = uA(r, i, u)
                  , A = cA(r, i, u)
                  , p = iA[s];
                r = e[p],
                i = e[p + 1],
                e[p] = c,
                e[p + 1] = A
            }
            for (let s = 0; s < 50; s += 10) {
                for (let u = 0; u < 10; u++)
                    n[u] = e[s + u];
                for (let u = 0; u < 10; u++)
                    e[s + u] ^= ~n[(u + 2) % 10] & n[(u + 4) % 10]
            }
            e[0] ^= $b[o],
            e[1] ^= e0[o]
        }
        n.fill(0)
    }
    class oa extends Ib {
        constructor(t, n, o, r=!1, i=24) {
            if (super(),
            this.blockLen = t,
            this.suffix = n,
            this.outputLen = o,
            this.enableXOF = r,
            this.rounds = i,
            this.pos = 0,
            this.posOut = 0,
            this.finished = !1,
            this.destroyed = !1,
            no.number(o),
            0 >= this.blockLen || this.blockLen >= 200)
                throw new Error("Sha3 supports only keccak-f1600 function");
            this.state = new Uint8Array(200),
            this.state32 = Cb(this.state)
        }
        keccak() {
            t0(this.state32, this.rounds),
            this.posOut = 0,
            this.pos = 0
        }
        update(t) {
            no.exists(this);
            const {blockLen: n, state: o} = this;
            t = ps(t);
            const r = t.length;
            for (let i = 0; i < r; ) {
                const s = Math.min(n - this.pos, r - i);
                for (let u = 0; u < s; u++)
                    o[this.pos++] ^= t[i++];
                this.pos === n && this.keccak()
            }
            return this
        }
        finish() {
            if (this.finished)
                return;
            this.finished = !0;
            const {state: t, suffix: n, pos: o, blockLen: r} = this;
            t[o] ^= n,
            n & 128 && o === r - 1 && this.keccak(),
            t[r - 1] ^= 128,
            this.keccak()
        }
        writeInto(t) {
            no.exists(this, !1),
            no.bytes(t),
            this.finish();
            const n = this.state
              , {blockLen: o} = this;
            for (let r = 0, i = t.length; r < i; ) {
                this.posOut >= o && this.keccak();
                const s = Math.min(o - this.posOut, i - r);
                t.set(n.subarray(this.posOut, this.posOut + s), r),
                this.posOut += s,
                r += s
            }
            return t
        }
        xofInto(t) {
            if (!this.enableXOF)
                throw new Error("XOF is not possible for this instance");
            return this.writeInto(t)
        }
        xof(t) {
            return no.number(t),
            this.xofInto(new Uint8Array(t))
        }
        digestInto(t) {
            if (no.output(t, this),
            this.finished)
                throw new Error("digest() was already called");
            return this.writeInto(t),
            this.destroy(),
            t
        }
        digest() {
            return this.digestInto(new Uint8Array(this.outputLen))
        }
        destroy() {
            this.destroyed = !0,
            this.state.fill(0)
        }
        _cloneInto(t) {
            const {blockLen: n, suffix: o, outputLen: r, rounds: i, enableXOF: s} = this;
            return t || (t = new oa(n,o,r,s,i)),
            t.state32.set(this.state32),
            t.pos = this.pos,
            t.posOut = this.posOut,
            t.finished = this.finished,
            t.rounds = i,
            t.suffix = o,
            t.outputLen = r,
            t.enableXOF = s,
            t.destroyed = this.destroyed,
            t
        }
    }
    const tn = (e,t,n)=>Bb(()=>new oa(t,e,n));
    tn(6, 144, 28),
    tn(6, 136, 32),
    tn(6, 104, 48),
    tn(6, 72, 64),
    tn(1, 144, 28);
    const n0 = tn(1, 136, 256 / 8);
    tn(1, 104, 48),
    tn(1, 72, 64);
    const dA = (e,t,n)=>Mb((o={})=>new oa(t,e,o.dkLen === void 0 ? n : o.dkLen,!0));
    dA(31, 168, 16),
    dA(31, 136, 32);
    let AA = !1;
    const pA = function(e) {
        return n0(e)
    };
    let fA = pA;
    function Wo(e) {
        const t = ds(e, "data");
        return hb(fA(t))
    }
    Wo._ = pA,
    Wo.lock = function() {
        AA = !0
    }
    ,
    Wo.register = function(e) {
        if (AA)
            throw new TypeError("keccak256 is locked");
        fA = e
    }
    ,
    Object.freeze(Wo);
    const o0 = BigInt(0)
      , r0 = BigInt(36);
    function gA(e) {
        e = e.toLowerCase();
        const t = e.substring(2).split("")
          , n = new Uint8Array(40);
        for (let r = 0; r < 40; r++)
            n[r] = t[r].charCodeAt(0);
        const o = ds(Wo(n));
        for (let r = 0; r < 40; r += 2)
            o[r >> 1] >> 4 >= 8 && (t[r] = t[r].toUpperCase()),
            (o[r >> 1] & 15) >= 8 && (t[r + 1] = t[r + 1].toUpperCase());
        return "0x" + t.join("")
    }
    const gs = {};
    for (let e = 0; e < 10; e++)
        gs[String(e)] = String(e);
    for (let e = 0; e < 26; e++)
        gs[String.fromCharCode(65 + e)] = String(10 + e);
    const mA = 15;
    function a0(e) {
        e = e.toUpperCase(),
        e = e.substring(4) + e.substring(0, 2) + "00";
        let t = e.split("").map(o=>gs[o]).join("");
        for (; t.length >= mA; ) {
            let o = t.substring(0, mA);
            t = parseInt(o, 10) % 97 + t.substring(o.length)
        }
        let n = String(98 - parseInt(t, 10) % 97);
        for (; n.length < 2; )
            n = "0" + n;
        return n
    }
    const i0 = function() {
        const e = {};
        for (let t = 0; t < 36; t++) {
            const n = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
            e[n] = BigInt(t)
        }
        return e
    }();
    function s0(e) {
        e = e.toLowerCase();
        let t = o0;
        for (let n = 0; n < e.length; n++)
            t = t * r0 + i0[e[n]];
        return t
    }
    function l0(e) {
        if (Ko(typeof e == "string", "invalid address", "address", e),
        e.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
            e.startsWith("0x") || (e = "0x" + e);
            const t = gA(e);
            return Ko(!e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === e, "bad address checksum", "address", e),
            t
        }
        if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
            Ko(e.substring(2, 4) === a0(e), "bad icap checksum", "address", e);
            let t = s0(e.substring(4)).toString(16);
            for (; t.length < 40; )
                t = "0" + t;
            return gA("0x" + t)
        }
        Ko(!1, "invalid address", "address", e)
    }
    function u0(e) {
        try {
            return l0(e),
            !0
        } catch {}
        return !1
    }
    const c0 = async(e,t={})=>await tt.post("v1/api/user", t, {
        headers: {
            Authorization: `Bearer ${oo()}`
        },
        params: {
            id: e
        }
    })
      , d0 = {
        updateUser: c0
    }
      , A0 = Ye()({
        name: "VDialogTransition",
        props: {
            target: Object
        },
        setup(e, t) {
            let {slots: n} = t;
            const o = {
                onBeforeEnter(r) {
                    r.style.pointerEvents = "none",
                    r.style.visibility = "hidden"
                },
                async onEnter(r, i) {
                    var l;
                    await new Promise(d=>requestAnimationFrame(d)),
                    await new Promise(d=>requestAnimationFrame(d)),
                    r.style.visibility = "";
                    const {x: s, y: u, sx: c, sy: A, speed: p} = vA(e.target, r)
                      , a = Do(r, [{
                        transform: `translate(${s}px, ${u}px) scale(${c}, ${A})`,
                        opacity: 0
                    }, {}], {
                        duration: 225 * p,
                        easing: ph
                    });
                    (l = hA(r)) == null || l.forEach(d=>{
                        Do(d, [{
                            opacity: 0
                        }, {
                            opacity: 0,
                            offset: .33
                        }, {}], {
                            duration: 225 * 2 * p,
                            easing: Fi
                        })
                    }
                    ),
                    a.finished.then(()=>i())
                },
                onAfterEnter(r) {
                    r.style.removeProperty("pointer-events")
                },
                onBeforeLeave(r) {
                    r.style.pointerEvents = "none"
                },
                async onLeave(r, i) {
                    var a;
                    await new Promise(l=>requestAnimationFrame(l));
                    const {x: s, y: u, sx: c, sy: A, speed: p} = vA(e.target, r);
                    Do(r, [{}, {
                        transform: `translate(${s}px, ${u}px) scale(${c}, ${A})`,
                        opacity: 0
                    }], {
                        duration: 125 * p,
                        easing: fh
                    }).finished.then(()=>i()),
                    (a = hA(r)) == null || a.forEach(l=>{
                        Do(l, [{}, {
                            opacity: 0,
                            offset: .2
                        }, {
                            opacity: 0
                        }], {
                            duration: 125 * 2 * p,
                            easing: Fi
                        })
                    }
                    )
                },
                onAfterLeave(r) {
                    r.style.removeProperty("pointer-events")
                }
            };
            return ()=>e.target ? S(gt, He({
                name: "dialog-transition"
            }, o, {
                css: !1
            }), n) : S(gt, {
                name: "dialog-transition"
            }, n)
        }
    });
    function hA(e) {
        var n;
        const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
        return t && [...t]
    }
    function vA(e, t) {
        const n = e.getBoundingClientRect()
          , o = ac(t)
          , [r,i] = getComputedStyle(t).transformOrigin.split(" ").map(g=>parseFloat(g))
          , [s,u] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
        let c = n.left + n.width / 2;
        s === "left" || u === "left" ? c -= n.width / 2 : (s === "right" || u === "right") && (c += n.width / 2);
        let A = n.top + n.height / 2;
        s === "top" || u === "top" ? A -= n.height / 2 : (s === "bottom" || u === "bottom") && (A += n.height / 2);
        const p = n.width / o.width
          , a = n.height / o.height
          , l = Math.max(1, p, a)
          , d = p / l || 0
          , f = a / l || 0
          , m = o.width * o.height / (window.innerWidth * window.innerHeight)
          , v = m > .12 ? Math.min(1.5, (m - .12) * 10 + 1) : 1;
        return {
            x: c - (r + o.left),
            y: A - (i + o.top),
            sx: d,
            sy: f,
            speed: v
        }
    }
    let bA, wA, yA, CA;
    ys = Ye()({
        name: "VDialog",
        props: {
            fullscreen: Boolean,
            retainFocus: {
                type: Boolean,
                default: !0
            },
            scrollable: Boolean,
            ...is({
                origin: "center center",
                scrollStrategy: "block",
                transition: {
                    component: A0
                },
                zIndex: 2400
            })
        },
        emits: {
            "update:modelValue": e=>!0
        },
        setup(e, t) {
            let {slots: n} = t;
            const o = In(e, "modelValue")
              , {scopeId: r} = as()
              , i = G();
            function s(c) {
                var a, l;
                const A = c.relatedTarget
                  , p = c.target;
                if (A !== p && ((a = i.value) != null && a.contentEl) && ((l = i.value) != null && l.globalTop) && ![document, i.value.contentEl].includes(p) && !i.value.contentEl.contains(p)) {
                    const d = [...i.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled") && !v.matches('[tabindex="-1"]'));
                    if (!d.length)
                        return;
                    const f = d[0]
                      , m = d[d.length - 1];
                    A === f ? m.focus() : f.focus()
                }
            }
            je && me(()=>o.value && e.retainFocus, c=>{
                c ? document.addEventListener("focusin", s) : document.removeEventListener("focusin", s)
            }
            , {
                immediate: !0
            }),
            me(o, async c=>{
                var A, p;
                await rt(),
                c ? (A = i.value.contentEl) == null || A.focus({
                    preventScroll: !0
                }) : (p = i.value.activatorEl) == null || p.focus({
                    preventScroll: !0
                })
            }
            );
            const u = I(()=>He({
                "aria-haspopup": "dialog",
                "aria-expanded": String(o.value)
            }, e.activatorProps));
            return et(()=>{
                const [c] = Yo.filterProps(e);
                return S(Yo, He({
                    ref: i,
                    class: ["v-dialog", {
                        "v-dialog--fullscreen": e.fullscreen,
                        "v-dialog--scrollable": e.scrollable
                    }]
                }, c, {
                    modelValue: o.value,
                    "onUpdate:modelValue": A=>o.value = A,
                    "aria-role": "dialog",
                    "aria-modal": "true",
                    activatorProps: u.value
                }, r), {
                    activator: n.activator,
                    default: function() {
                        for (var A = arguments.length, p = new Array(A), a = 0; a < A; a++)
                            p[a] = arguments[a];
                        return S($n, {
                            root: !0
                        }, {
                            default: ()=>{
                                var l;
                                return [(l = n.default) == null ? void 0 : l.call(n, ...p)]
                            }
                        })
                    }
                })
            }
            ),
            gd({}, i)
        }
    }),
    bA = R("h1", {
        class: "title"
    }, "Switch Wallets", -1),
    wA = R("p", {
        class: "subtitle"
    }, "Submit the wallet you want to use.", -1),
    yA = {
        class: "wallet-form"
    },
    CA = {
        __name: "SwitchWalletModal",
        props: {
            isShow: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["close", "submit"],
        setup(e, {emit: t}) {
            const n = e
              , o = pe("emitter")
              , r = Bt()
              , i = G(r.wallet)
              , s = G(!1)
              , u = I({
                get() {
                    return n.isShow
                },
                set(p) {
                    p || c()
                }
            })
              , c = ()=>{
                t("close"),
                i.value = r.wallet
            }
              , A = async()=>{
                if (i.value === r.wallet)
                    return;
                let p = "";
                if ((!i.value || !u0(i.value)) && (p = "Please enter a valid wallet address"),
                p !== "")
                    o.emit("notify", {
                        msg: p,
                        type: "error"
                    });
                else {
                    s.value = !0;
                    try {
                        await d0.updateUser(r.id, {
                            wallet: i.value
                        }),
                        r.setUser({
                            address: i.value
                        }),
                        o.emit("notify", {
                            msg: `Wallet for allowlist has been updated to ${i.value}`,
                            type: "success"
                        }),
                        s.value = !1
                    } catch {
                        s.value = !1
                    }
                }
            }
            ;
            return (p,a)=>(K(),
            Te(ys, {
                class: "switch-wallet-modal",
                modelValue: q(u),
                "onUpdate:modelValue": a[1] || (a[1] = l=>Ce(u) ? u.value = l : null)
            }, {
                default: Be(()=>[R("button", {
                    class: "icon-cross modal__close-button",
                    type: "button",
                    onClick: c
                }), bA, wA, R("div", yA, [Gt(R("input", {
                    class: "input",
                    type: "text",
                    placeholder: "Enter your wallet address here",
                    "onUpdate:modelValue": a[0] || (a[0] = l=>i.value = l)
                }, null, 512), [[Ms, i.value]]), S(mt, {
                    class: "submit-button",
                    loading: s.value,
                    onClick: A
                }, {
                    default: Be(()=>[Pe("Submit")]),
                    _: 1
                }, 8, ["loading"])])]),
                _: 1
            }, 8, ["modelValue"]))
        }
    };
    const p0 = {
        key: 0,
        class: "b-rider__auth-buttons"
    }
      , f0 = {
        class: "auth-button auth--wallet"
    }
      , g0 = {
        class: "content-details"
    }
      , m0 = R("i", {
        class: "icon-wallet"
    }, null, -1)
      , h0 = {
        class: "text"
    }
      , v0 = R("i", {
        class: "icon-dropdown-arrow-up"
    }, null, -1)
      , b0 = {
        class: "auth-button"
    }
      , w0 = {
        class: "content-details"
    }
      , y0 = R("i", {
        class: "icon-discord-2"
    }, null, -1)
      , C0 = {
        class: "text username"
    }
      , E0 = R("i", {
        class: "icon-dropdown-arrow-up"
    }, null, -1)
      , I0 = {
        __name: "BRiderAuthButtons",
        setup(e) {
            const t = Bt()
              , n = {
                beforeMount: (a,l)=>{
                    a.clickOutsideEvent = d=>{
                        !(a == d.target || a.contains(d.target)) && l.value()
                    }
                    ,
                    document.addEventListener("click", a.clickOutsideEvent)
                }
                ,
                unmounted: a=>{
                    document.removeEventListener("click", a.clickOutsideEvent)
                }
            }
              , o = G(!1)
              , r = G(!1)
              , i = G(!1)
              , s = a=>{
                a === "wallet" && (o.value = !o.value),
                a === "discord" && (r.value = !r.value)
            }
              , u = ()=>{
                i.value = !0
            }
              , c = async()=>{
                await tA()
            }
              , A = ()=>{
                o.value = !1
            }
              , p = ()=>{
                r.value = !1
            }
            ;
            return (a,l)=>q(t).isLoggedIn ? (K(),
            ae("div", p0, [Gt((K(),
            ae("div", f0, [R("button", {
                class: "content",
                type: "button",
                onClick: l[0] || (l[0] = d=>s("wallet"))
            }, [R("div", g0, [m0, R("span", h0, Qe(q(Hd)(q(t).wallet)), 1)]), v0]), R("div", {
                class: Le(["dropdown", {
                    "is-show": o.value
                }])
            }, [R("button", {
                class: "dropdown-button",
                type: "button",
                onClick: u
            }, "Change Wallet")], 2)])), [[n, A]]), Gt((K(),
            ae("div", b0, [R("button", {
                class: "content",
                type: "button",
                onClick: l[1] || (l[1] = d=>s("discord"))
            }, [R("div", w0, [y0, R("span", C0, Qe(q(t).username), 1)]), E0]), R("div", {
                class: Le(["dropdown", {
                    "is-show": r.value
                }])
            }, [R("button", {
                class: "dropdown-button",
                type: "button",
                onClick: c
            }, "Disconnect Discord")], 2)])), [[n, p]]), S(CA, {
                "is-show": i.value,
                onClose: l[2] || (l[2] = d=>i.value = !1)
            }, null, 8, ["is-show"])])) : Oe("", !0)
        }
    }
      , B0 = {
        class: "bubble-rider__header"
    }
      , M0 = {
        class: "header__center-nav"
    }
      , Q0 = {
        key: 1,
        class: "overall-ranking__nav"
    }
      , S0 = ["onClick"]
      , x0 = {
        class: "header__right-nav"
    }
      , k0 = {
        class: "audio-button__container"
    }
      , O0 = {
        __name: "BRiderHeader",
        setup(e) {
            const t = kn()
              , n = $o()
              , o = bt()
              , r = Bt()
              , i = [{
                name: "Global",
                value: "individual"
            }, {
                name: "NFT Projects",
                value: "group"
            }]
              , s = I(()=>screen.width <= tr)
              , u = ()=>{
                t.path === "/b-rider" && o.activeLeague ? o.setActiveLeague("") : t.path.includes("/b-rider/leaderboard") && o.selectedIOBuddies ? (n.push("/b-rider/leaderboard"),
                o.setSelectedIOBuddies("")) : t.path === "/b-rider/leaderboard" && o.isFromRootLeague ? (n.push("/b-rider"),
                o.isFromRootLeague = !1,
                o.setActiveLeaderboardType("")) : t.path === "/b-rider/leaderboard" && o.activeLeaderboardType ? o.setActiveLeaderboardType("") : t.path !== "/b-rider" ? n.push("/b-rider") : n.push("/")
            }
              , c = A=>{
                o.setActiveLeaderboardTab(A)
            }
            ;
            return (A,p)=>(K(),
            ae("div", {
                class: Le(["bubble-rider__header-container", {
                    "header--non-desktop": q(s),
                    "header--logged-in": q(r).isLoggedIn
                }])
            }, [R("div", B0, [R("button", {
                class: "icon-chevron-left-2 header__back-button",
                type: "button",
                onClick: u
            }), R("div", M0, [q(o).isOnOverallLeaderboard ? q(o).isOnOverallLeaderboard ? (K(),
            ae("div", Q0, [(K(),
            ae(Se, null, ht(i, a=>R("button", {
                class: Le(["nav", {
                    "nav--active": q(o).activeLeaderboardTab === a.value
                }]),
                key: a.value,
                type: "button",
                onClick: l=>c(a.value)
            }, Qe(a.name), 11, S0)), 64))])) : Oe("", !0) : (K(),
            Te(va, {
                key: 0,
                class: "header__logo",
                "with-blur": !0
            }))]), R("div", x0, [S(I0), R("div", k0, [S(ls)])])])], 2))
        }
    }
      , D0 = {
        class: "bubble-rider__footer"
    }
      , L0 = {
        __name: "BRiderFooter",
        setup(e) {
            const t = [{
                name: "About Game",
                url: "/b-rider/about"
            }, {
                name: "How To Play",
                url: "/b-rider/tutorial"
            }, {
                name: "TOS",
                url: "/b-rider/terms-of-service"
            }, {
                name: "Leaderboard",
                url: "/b-rider/leaderboard"
            }];
            return (n,o)=>{
                const r = Za("RouterLink");
                return K(),
                ae("div", D0, [(K(),
                ae(Se, null, ht(t, (i,s)=>S(r, {
                    class: Le(["footer-link", {
                        "link--leaderboard": i.name === "Leaderboard"
                    }]),
                    key: s,
                    to: i.url
                }, {
                    default: Be(()=>[Pe(Qe(i.name), 1)]),
                    _: 2
                }, 1032, ["to", "class"])), 64))])
            }
        }
    };
    function T0(e) {
        return {
            aspectStyles: I(()=>{
                const t = Number(e.aspectRatio);
                return t ? {
                    paddingBottom: String(1 / t * 100) + "%"
                } : void 0
            }
            )
        }
    }
    const V0 = Ye()({
        name: "VResponsive",
        props: {
            aspectRatio: [String, Number],
            contentClass: String,
            ...Jr()
        },
        setup(e, t) {
            let {slots: n} = t;
            const {aspectStyles: o} = T0(e)
              , {dimensionStyles: r} = Xr(e);
            return et(()=>{
                var i;
                return S("div", {
                    class: "v-responsive",
                    style: r.value
                }, [S("div", {
                    class: "v-responsive__sizer",
                    style: o.value
                }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && S("div", {
                    class: ["v-responsive__content", e.contentClass]
                }, [n.default()])])
            }
            ),
            {}
        }
    });
    function F0(e, t) {
        if (!Ui)
            return;
        const n = t.modifiers || {}
          , o = t.value
          , {handler: r, options: i} = typeof o == "object" ? o : {
            handler: o,
            options: {}
        }
          , s = new IntersectionObserver(function() {
            var a;
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
              , c = arguments.length > 1 ? arguments[1] : void 0;
            const A = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
            if (!A)
                return;
            const p = u.some(l=>l.isIntersecting);
            r && (!n.quiet || A.init) && (!n.once || p || A.init) && r(p, u, c),
            p && n.once ? EA(e, t) : A.init = !0
        }
        ,i);
        e._observe = Object(e._observe),
        e._observe[t.instance.$.uid] = {
            init: !1,
            observer: s
        },
        s.observe(e)
    }
    function EA(e, t) {
        var o;
        const n = (o = e._observe) == null ? void 0 : o[t.instance.$.uid];
        n && (n.observer.unobserve(e),
        delete e._observe[t.instance.$.uid])
    }
    let IA, BA, MA, QA, SA, xA, kA;
    IA = {
        mounted: F0,
        unmounted: EA
    },
    BA = IA,
    ma = Ye()({
        name: "VImg",
        directives: {
            intersect: BA
        },
        props: {
            aspectRatio: [String, Number],
            alt: String,
            cover: Boolean,
            eager: Boolean,
            gradient: String,
            lazySrc: String,
            options: {
                type: Object,
                default: ()=>({
                    root: void 0,
                    rootMargin: void 0,
                    threshold: void 0
                })
            },
            sizes: String,
            src: {
                type: [String, Object],
                default: ""
            },
            srcset: String,
            width: [String, Number],
            ...id()
        },
        emits: {
            loadstart: e=>!0,
            load: e=>!0,
            error: e=>!0
        },
        setup(e, t) {
            let {emit: n, slots: o} = t;
            const r = G("")
              , i = G()
              , s = G(e.eager ? "loading" : "idle")
              , u = G()
              , c = G()
              , A = I(()=>e.src && typeof e.src == "object" ? {
                src: e.src.src,
                srcset: e.srcset || e.src.srcset,
                lazySrc: e.lazySrc || e.src.lazySrc,
                aspect: Number(e.aspectRatio || e.src.aspect || 0)
            } : {
                src: e.src,
                srcset: e.srcset,
                lazySrc: e.lazySrc,
                aspect: Number(e.aspectRatio || 0)
            })
              , p = I(()=>A.value.aspect || u.value / c.value || 0);
            me(()=>e.src, ()=>{
                a(s.value !== "idle")
            }
            ),
            me(p, (C,x)=>{
                !C && x && i.value && v(i.value)
            }
            ),
            Aa(()=>a());
            function a(C) {
                if (!(e.eager && C) && !(Ui && !C && !e.eager)) {
                    if (s.value = "loading",
                    A.value.lazySrc) {
                        const x = new Image;
                        x.src = A.value.lazySrc,
                        v(x, null)
                    }
                    A.value.src && rt(()=>{
                        var x, V;
                        if (n("loadstart", ((x = i.value) == null ? void 0 : x.currentSrc) || A.value.src),
                        (V = i.value) == null ? void 0 : V.complete) {
                            if (i.value.naturalWidth || d(),
                            s.value === "error")
                                return;
                            p.value || v(i.value, null),
                            l()
                        } else
                            p.value || v(i.value),
                            f()
                    }
                    )
                }
            }
            function l() {
                var C;
                f(),
                s.value = "loaded",
                n("load", ((C = i.value) == null ? void 0 : C.currentSrc) || A.value.src)
            }
            function d() {
                var C;
                s.value = "error",
                n("error", ((C = i.value) == null ? void 0 : C.currentSrc) || A.value.src)
            }
            function f() {
                const C = i.value;
                C && (r.value = C.currentSrc || C.src)
            }
            let m = -1;
            function v(C) {
                let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
                const V = ()=>{
                    clearTimeout(m);
                    const {naturalHeight: D, naturalWidth: O} = C;
                    D || O ? (u.value = O,
                    c.value = D) : !C.complete && s.value === "loading" && x != null ? m = window.setTimeout(V, x) : (C.currentSrc.endsWith(".svg") || C.currentSrc.startsWith("data:image/svg+xml")) && (u.value = 1,
                    c.value = 1)
                }
                ;
                V()
            }
            const g = I(()=>({
                "v-img__img--cover": e.cover,
                "v-img__img--contain": !e.cover
            }))
              , h = ()=>{
                var V;
                if (!A.value.src || s.value === "idle")
                    return null;
                const C = S("img", {
                    class: ["v-img__img", g.value],
                    src: A.value.src,
                    srcset: A.value.srcset,
                    alt: e.alt,
                    sizes: e.sizes,
                    ref: i,
                    onLoad: l,
                    onError: d
                }, null)
                  , x = (V = o.sources) == null ? void 0 : V.call(o);
                return S(No, {
                    transition: e.transition,
                    appear: !0
                }, {
                    default: ()=>[Gt(x ? S("picture", {
                        class: "v-img__picture"
                    }, [x, C]) : C, [[pi, s.value === "loaded"]])]
                })
            }
              , b = ()=>S(No, {
                transition: e.transition
            }, {
                default: ()=>[A.value.lazySrc && s.value !== "loaded" && S("img", {
                    class: ["v-img__img", "v-img__img--preload", g.value],
                    src: A.value.lazySrc,
                    alt: e.alt
                }, null)]
            })
              , E = ()=>o.placeholder ? S(No, {
                transition: e.transition,
                appear: !0
            }, {
                default: ()=>[(s.value === "loading" || s.value === "error" && !o.error) && S("div", {
                    class: "v-img__placeholder"
                }, [o.placeholder()])]
            }) : null
              , T = ()=>o.error ? S(No, {
                transition: e.transition,
                appear: !0
            }, {
                default: ()=>[s.value === "error" && S("div", {
                    class: "v-img__error"
                }, [o.error()])]
            }) : null
              , B = ()=>e.gradient ? S("div", {
                class: "v-img__gradient",
                style: {
                    backgroundImage: `linear-gradient(${e.gradient})`
                }
            }, null) : null
              , Q = G(!1);
            {
                const C = me(p, x=>{
                    x && (requestAnimationFrame(()=>{
                        requestAnimationFrame(()=>{
                            Q.value = !0
                        }
                        )
                    }
                    ),
                    C())
                }
                )
            }
            return et(()=>Gt(S(V0, {
                class: ["v-img", {
                    "v-img--booting": !Q.value
                }],
                style: {
                    width: be(e.width === "auto" ? u.value : e.width)
                },
                aspectRatio: p.value,
                "aria-label": e.alt,
                role: e.alt ? "img" : void 0
            }, {
                additional: ()=>S(Se, null, [S(h, null, null), S(b, null, null), S(B, null, null), S(E, null, null), S(T, null, null)]),
                default: o.default
            }), [[Wa("intersect"), {
                handler: a,
                options: e.options
            }, null, {
                once: !0
            }]])),
            {
                currentSrc: r,
                image: i,
                state: s,
                naturalWidth: u,
                naturalHeight: c
            }
        }
    }),
    MA = {
        key: 0,
        class: "blur-preloader"
    },
    QA = {
        class: "blur-prealoader-container"
    },
    SA = {
        class: "loading-container"
    },
    xA = {
        class: "blur-preloader__text blur-preloader__loading"
    },
    kA = {
        __name: "RidesBlurPreloader",
        props: {
            isLoading: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e
              , n = Dn();
            let o = G(""), r = 0, i;
            const s = G(null);
            return yt(async()=>{
                t.isLoading ? i = window.setInterval(()=>{
                    o.value += ". ",
                    r % 4 === 0 && (o.value = ""),
                    r += 1
                }
                , 500) : clearInterval(i)
            }
            ),
            (u,c)=>e.isLoading ? (K(),
            ae("div", MA, [R("div", QA, [S(ma, {
                class: "blur-preloader-content",
                ref_key: "animationContainer",
                ref: s,
                id: "animation-container",
                src: q(n).ridesPreloader
            }, null, 8, ["src"]), R("div", SA, [R("div", xA, "Loading " + Qe(q(o)), 1)])])])) : Oe("", !0)
        }
    };
    const R0 = Ah("v-alert-title")
      , U0 = ["success", "info", "warning", "error"]
      , G0 = Ye()({
        name: "VAlert",
        props: {
            border: {
                type: [Boolean, String],
                validator: e=>typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
            },
            borderColor: String,
            closable: Boolean,
            closeIcon: {
                type: Uo,
                default: "$close"
            },
            closeLabel: {
                type: String,
                default: "$vuetify.close"
            },
            icon: {
                type: [Boolean, String, Function, Object],
                default: null
            },
            modelValue: {
                type: Boolean,
                default: !0
            },
            prominent: Boolean,
            title: String,
            text: String,
            type: {
                type: String,
                validator: e=>U0.includes(e)
            },
            ...Gi(),
            ...Jr(),
            ...Ni(),
            ..._i(),
            ...Xc(),
            ...Yr(),
            ...Xt(),
            ..._t(),
            ...Hi({
                variant: "flat"
            })
        },
        emits: {
            "click:close": e=>!0,
            "update:modelValue": e=>!0
        },
        setup(e, t) {
            let {emit: n, slots: o} = t;
            const r = In(e, "modelValue")
              , i = I(()=>{
                if (e.icon !== !1)
                    return e.type ? e.icon ?? `$${e.type}` : e.icon
            }
            )
              , s = I(()=>({
                color: e.color ?? e.type,
                variant: e.variant
            }))
              , {themeClasses: u} = $t(e)
              , {colorClasses: c, colorStyles: A, variantClasses: p} = Mc(s)
              , {densityClasses: a} = ji(e)
              , {dimensionStyles: l} = Xr(e)
              , {elevationClasses: d} = qi(e)
              , {locationStyles: f} = $i(e)
              , {positionClasses: m} = _c(e)
              , {roundedClasses: v} = zr(e)
              , {textColorClasses: g, textColorStyles: h} = Ro(dt(e, "borderColor"))
              , {t: b} = tv()
              , E = I(()=>({
                "aria-label": b(e.closeLabel),
                onClick(T) {
                    r.value = !1,
                    n("click:close", T)
                }
            }));
            return ()=>{
                const T = !!(o.prepend || i.value)
                  , B = !!(o.title || e.title)
                  , Q = !!(e.text || o.text)
                  , C = !!(o.close || e.closable);
                return r.value && S(e.tag, {
                    class: ["v-alert", e.border && {
                        "v-alert--border": !!e.border,
                        [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
                    }, {
                        "v-alert--prominent": e.prominent
                    }, u.value, c.value, a.value, d.value, m.value, v.value, p.value],
                    style: [A.value, l.value, f.value],
                    role: "alert"
                }, {
                    default: ()=>{
                        var x, V;
                        return [Bc(!1, "v-alert"), e.border && S("div", {
                            key: "border",
                            class: ["v-alert__border", g.value],
                            style: h.value
                        }, null), T && S("div", {
                            key: "prepend",
                            class: "v-alert__prepend"
                        }, [o.prepend ? S($n, {
                            key: "prepend-defaults",
                            disabled: !i.value,
                            defaults: {
                                VIcon: {
                                    density: e.density,
                                    icon: i.value,
                                    size: e.prominent ? 44 : 28
                                }
                            }
                        }, o.prepend) : S(Bn, {
                            key: "prepend-icon",
                            density: e.density,
                            icon: i.value,
                            size: e.prominent ? 44 : 28
                        }, null)]), S("div", {
                            class: "v-alert__content"
                        }, [B && S(R0, {
                            key: "title"
                        }, {
                            default: ()=>{
                                var D;
                                return [((D = o.title) == null ? void 0 : D.call(o)) ?? e.title]
                            }
                        }), Q && (((x = o.text) == null ? void 0 : x.call(o)) ?? e.text), (V = o.default) == null ? void 0 : V.call(o)]), o.append && S("div", {
                            key: "append",
                            class: "v-alert__append"
                        }, [o.append()]), C && S("div", {
                            key: "close",
                            class: "v-alert__close"
                        }, [o.close ? S($n, {
                            key: "close-defaults",
                            defaults: {
                                VBtn: {
                                    icon: e.closeIcon,
                                    size: "x-small",
                                    variant: "text"
                                }
                            }
                        }, {
                            default: ()=>{
                                var D;
                                return [(D = o.close) == null ? void 0 : D.call(o, {
                                    props: E.value
                                })]
                            }
                        }) : S(mt, He({
                            key: "close-btn",
                            icon: e.closeIcon,
                            size: "x-small",
                            variant: "text"
                        }, E.value), null)])]
                    }
                })
            }
        }
    })
      , ms = Symbol.for("vuetify:layout")
      , j0 = Symbol.for("vuetify:layout-item")
      , OA = 1e3
      , N0 = Me({
        overlaps: {
            type: Array,
            default: ()=>[]
        },
        fullHeight: Boolean
    }, "layout");
    function q0() {
        const e = pe(ms);
        if (!e)
            throw new Error("[Vuetify] Could not find injected layout");
        return {
            getLayoutItem: e.getLayoutItem,
            mainRect: e.mainRect,
            mainStyles: e.mainStyles
        }
    }
    const Y0 = (e,t,n,o)=>{
        let r = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        };
        const i = [{
            id: "",
            layer: {
                ...r
            }
        }];
        for (const s of e) {
            const u = t.get(s)
              , c = n.get(s)
              , A = o.get(s);
            if (!u || !c || !A)
                continue;
            const p = {
                ...r,
                [u.value]: parseInt(r[u.value], 10) + (A.value ? parseInt(c.value, 10) : 0)
            };
            i.push({
                id: s,
                layer: p
            }),
            r = p
        }
        return i
    }
    ;
    function z0(e) {
        const t = pe(ms, null)
          , n = I(()=>t ? t.rootZIndex.value - 100 : OA)
          , o = G([])
          , r = Ve(new Map)
          , i = Ve(new Map)
          , s = Ve(new Map)
          , u = Ve(new Map)
          , c = Ve(new Map)
          , {resizeRef: A, contentRect: p} = Tc()
          , a = I(()=>{
            const B = new Map
              , Q = e.overlaps ?? [];
            for (const C of Q.filter(x=>x.includes(":"))) {
                const [x,V] = C.split(":");
                if (!o.value.includes(x) || !o.value.includes(V))
                    continue;
                const D = r.get(x)
                  , O = r.get(V)
                  , Z = i.get(x)
                  , ne = i.get(V);
                !D || !O || !Z || !ne || (B.set(V, {
                    position: D.value,
                    amount: parseInt(Z.value, 10)
                }),
                B.set(x, {
                    position: O.value,
                    amount: -parseInt(ne.value, 10)
                }))
            }
            return B
        }
        )
          , l = I(()=>{
            const B = [...new Set([...s.values()].map(C=>C.value))].sort((C,x)=>C - x)
              , Q = [];
            for (const C of B) {
                const x = o.value.filter(V=>{
                    var D;
                    return ((D = s.get(V)) == null ? void 0 : D.value) === C
                }
                );
                Q.push(...x)
            }
            return Y0(Q, r, i, u)
        }
        )
          , d = I(()=>!Array.from(c.values()).some(B=>B.value))
          , f = I(()=>l.value[l.value.length - 1].layer)
          , m = I(()=>({
            "--v-layout-left": be(f.value.left),
            "--v-layout-right": be(f.value.right),
            "--v-layout-top": be(f.value.top),
            "--v-layout-bottom": be(f.value.bottom),
            ...d.value ? void 0 : {
                transition: "none"
            }
        }))
          , v = I(()=>l.value.slice(1).map((B,Q)=>{
            let {id: C} = B;
            const {layer: x} = l.value[Q]
              , V = i.get(C)
              , D = r.get(C);
            return {
                id: C,
                ...x,
                size: Number(V.value),
                position: D.value
            }
        }
        ))
          , g = B=>v.value.find(Q=>Q.id === B)
          , h = it("createLayout")
          , b = G(!1);
        vt(()=>{
            b.value = !0
        }
        ),
        qe(ms, {
            register: (B,Q)=>{
                let {id: C, order: x, position: V, layoutSize: D, elementSize: O, active: Z, disableTransitions: ne, absolute: W} = Q;
                s.set(C, x),
                r.set(C, V),
                i.set(C, D),
                u.set(C, Z),
                ne && c.set(C, ne);
                const ie = Oo(j0, h == null ? void 0 : h.vnode).indexOf(B);
                ie > -1 ? o.value.splice(ie, 0, C) : o.value.push(C);
                const ee = I(()=>v.value.findIndex(ue=>ue.id === C))
                  , _ = I(()=>n.value + l.value.length * 2 - ee.value * 2)
                  , J = I(()=>{
                    const ue = V.value === "left" || V.value === "right"
                      , le = V.value === "right"
                      , Ne = V.value === "bottom"
                      , fe = {
                        [V.value]: 0,
                        zIndex: _.value,
                        transform: `translate${ue ? "X" : "Y"}(${(Z.value ? 0 : -110) * (le || Ne ? -1 : 1)}%)`,
                        position: W.value || n.value !== OA ? "absolute" : "fixed",
                        ...d.value ? void 0 : {
                            transition: "none"
                        }
                    };
                    if (!b.value)
                        return fe;
                    const L = v.value[ee.value];
                    if (!L)
                        throw new Error(`[Vuetify] Could not find layout item "${C}"`);
                    const Y = a.value.get(C);
                    return Y && (L[Y.position] += Y.amount),
                    {
                        ...fe,
                        height: ue ? `calc(100% - ${L.top}px - ${L.bottom}px)` : O.value ? `${O.value}px` : void 0,
                        left: le ? void 0 : `${L.left}px`,
                        right: le ? `${L.right}px` : void 0,
                        top: V.value !== "bottom" ? `${L.top}px` : void 0,
                        bottom: V.value !== "top" ? `${L.bottom}px` : void 0,
                        width: ue ? O.value ? `${O.value}px` : void 0 : `calc(100% - ${L.left}px - ${L.right}px)`
                    }
                }
                )
                  , oe = I(()=>({
                    zIndex: _.value - 1
                }));
                return {
                    layoutItemStyles: J,
                    layoutItemScrimStyles: oe,
                    zIndex: _
                }
            }
            ,
            unregister: B=>{
                s.delete(B),
                r.delete(B),
                i.delete(B),
                u.delete(B),
                c.delete(B),
                o.value = o.value.filter(Q=>Q !== B)
            }
            ,
            mainRect: f,
            mainStyles: m,
            getLayoutItem: g,
            items: v,
            layoutRect: p,
            rootZIndex: n
        });
        const E = I(()=>["v-layout", {
            "v-layout--full-height": e.fullHeight
        }])
          , T = I(()=>({
            zIndex: n.value,
            position: t ? "relative" : void 0,
            overflow: t ? "hidden" : void 0
        }));
        return {
            layoutClasses: E,
            layoutStyles: T,
            getLayoutItem: g,
            items: v,
            layoutRect: p,
            layoutRef: A
        }
    }
    const H0 = Ye()({
        name: "VApp",
        props: {
            ...N0({
                fullHeight: !0
            }),
            ..._t()
        },
        setup(e, t) {
            let {slots: n} = t;
            const o = $t(e)
              , {layoutClasses: r, layoutStyles: i, getLayoutItem: s, items: u, layoutRef: c} = z0(e)
              , {rtlClasses: A} = $r();
            return et(()=>{
                var p;
                return S("div", {
                    ref: c,
                    class: ["v-application", o.themeClasses.value, r.value, A.value],
                    style: i.value
                }, [S("div", {
                    class: "v-application__wrap"
                }, [(p = n.default) == null ? void 0 : p.call(n)])])
            }
            ),
            {
                getLayoutItem: s,
                items: u,
                theme: o
            }
        }
    });
    function K0() {
        const e = G(!1);
        return vt(()=>{
            window.requestAnimationFrame(()=>{
                e.value = !0
            }
            )
        }
        ),
        {
            ssrBootStyles: I(()=>e.value ? void 0 : {
                transition: "none !important"
            }),
            isBooted: fo(e)
        }
    }
    const Z0 = Ye()({
        name: "VMain",
        props: {
            scrollable: Boolean,
            ...Xt({
                tag: "main"
            })
        },
        setup(e, t) {
            let {slots: n} = t;
            const {mainStyles: o} = q0()
              , {ssrBootStyles: r} = K0();
            return et(()=>S(e.tag, {
                class: ["v-main", {
                    "v-main--scrollable": e.scrollable
                }],
                style: [o.value, r.value]
            }, {
                default: ()=>{
                    var i, s;
                    return [e.scrollable ? S("div", {
                        class: "v-main__scroller"
                    }, [(i = n.default) == null ? void 0 : i.call(n)]) : (s = n.default) == null ? void 0 : s.call(n)]
                }
            })),
            {}
        }
    })
      , P0 = {
        __name: "App",
        setup(e) {
            const t = pe("emitter")
              , n = Dn()
              , o = kn()
              , r = ba()
              , i = G(!1);
            let s = G("")
              , u = G("success")
              , c = G(!1);
            t.on("game-auth", ()=>{
                i.value = !0
            }
            );
            const A = I(()=>screen.width <= tr)
              , p = I(()=>o.path.includes("/b-rider/maintenance"))
              , a = I(()=>o.path.includes("/not-found"))
              , l = I(()=>o.path.includes("/b-rider"))
              , d = I(()=>p.value || a.value)
              , f = I(()=>!i.value && !p.value && !r)
              , m = I(()=>l.value && !o.path.includes("/leaderboard") && !d.value && !i.value && !A.value && !r)
              , v = I(()=>!n.infoIsVisible && !n.isMobileView && !l.value && !d.value)
              , g = I(()=>n.showLoader && !l.value && !d.value);
            return n.loadPriorityImage(),
            window.addEventListener("mousemove", function(h) {
                const b = document.getElementsByClassName("landing-info__section")[0]
                  , E = document.querySelector(".custom-cursor");
                if (!b && E) {
                    const C = h.clientY
                      , x = h.clientX;
                    E.style.transform = `translate3d(${x}px, ${C}px, 0)`;
                    var T = document.getElementsByClassName("loader-container")[0]
                      , B = document.createElement("div");
                    B.className = "loader-container";
                    var Q = document.createElement("div");
                    Q.className = "loader",
                    B.appendChild(Q),
                    document.body.appendChild(B),
                    B.style.left = h.clientX - 25 + "px",
                    B.style.top = h.clientY - 25 + "px",
                    document.getElementsByClassName("loader-container").length > 50 && document.body.removeChild(T)
                } else {
                    const C = Array.from(document.getElementsByClassName("loader-container"));
                    C.length && C.forEach(x=>{
                        document.body.removeChild(x)
                    }
                    )
                }
            }),
            yt(()=>{
                var h = document.getElementsByTagName("html")[0];
                h && (n.isMobileView && !n.infoIsVisible ? (document.body.classList.add("fixed"),
                h.classList.add("fixed")) : (document.body.classList.remove("fixed"),
                h.classList.remove("fixed")))
            }
            ),
            me(o, ()=>{
                l.value && !d.value ? document.body.classList.add("bubble-rider-page") : (document.body.classList.remove("bubble-rider-page"),
                n.infoIsVisible = !1),
                o.path !== "/" && !n.isEnableAudioBtn && (n.infoIsVisible = !0,
                n.initBGM(),
                n.initSFX(),
                n.isEnableAudioBtn = !0)
            }
            ),
            n.initIsMute(),
            t.on("notify", h=>{
                s.value = h.msg,
                u.value = h.type,
                c.value = !0,
                setTimeout(()=>{
                    c.value = !1
                }
                , 3e3)
            }
            ),
            (h,b)=>{
                const E = Za("RouterView");
                return K(),
                Te(H0, null, {
                    default: Be(()=>[q(l) ? q(f) ? (K(),
                    Te(O0, {
                        key: 1
                    })) : Oe("", !0) : (K(),
                    Te(bd, {
                        key: 0,
                        "is-white": q(a)
                    }, null, 8, ["is-white"])), S(Z0, null, {
                        default: Be(()=>[q(v) ? (K(),
                        Te(ma, {
                            key: 0,
                            class: "custom-cursor",
                            src: q(n).cursorImage
                        }, null, 8, ["src"])) : Oe("", !0), S(gt, {
                            name: "fadeout"
                        }, {
                            default: Be(()=>[S(kA, {
                                isLoading: q(g)
                            }, null, 8, ["isLoading"])]),
                            _: 1
                        }), S(E), S(gt, {
                            name: "fade"
                        }, {
                            default: Be(()=>[S(G0, {
                                type: q(u),
                                "model-value": q(c),
                                position: "fixed",
                                rounded: ""
                            }, {
                                default: Be(()=>[Pe(Qe(q(s)), 1)]),
                                _: 1
                            }, 8, ["type", "model-value"])]),
                            _: 1
                        })]),
                        _: 1
                    }), q(m) ? (K(),
                    Te(L0, {
                        key: 2
                    })) : Oe("", !0)]),
                    _: 1
                })
            }
        }
    }
      , W0 = "modulepreload"
      , J0 = function(e) {
        return "/" + e
    }
      , DA = {}
      , Ot = function(e, t, n) {
        if (!t || t.length === 0)
            return e();
        const o = document.getElementsByTagName("link");
        return Promise.all(t.map(r=>{
            if (r = J0(r),
            r in DA)
                return;
            DA[r] = !0;
            const i = r.endsWith(".css")
              , s = i ? '[rel="stylesheet"]' : "";
            if (n)
                for (let c = o.length - 1; c >= 0; c--) {
                    const A = o[c];
                    if (A.href === r && (!i || A.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${r}"]${s}`))
                return;
            const u = document.createElement("link");
            if (u.rel = i ? "stylesheet" : W0,
            i || (u.as = "script",
            u.crossOrigin = ""),
            u.href = r,
            document.head.appendChild(u),
            i)
                return new Promise((c,A)=>{
                    u.addEventListener("load", c),
                    u.addEventListener("error", ()=>A(new Error(`Unable to preload CSS for ${r}`)))
                }
                )
        }
        )).then(()=>e())
    }
      , Je = {
        itemsToShow: 1,
        itemsToScroll: 1,
        modelValue: 0,
        transition: 300,
        autoplay: 0,
        snapAlign: "center",
        wrapAround: !1,
        throttle: 16,
        pauseAutoplayOnHover: !1,
        mouseDrag: !0,
        touchDrag: !0,
        dir: "ltr",
        breakpoints: void 0
    }
      , LA = {
        itemsToShow: {
            default: Je.itemsToShow,
            type: Number
        },
        itemsToScroll: {
            default: Je.itemsToScroll,
            type: Number
        },
        wrapAround: {
            default: Je.wrapAround,
            type: Boolean
        },
        throttle: {
            default: Je.throttle,
            type: Number
        },
        snapAlign: {
            default: Je.snapAlign,
            validator(e) {
                return ["start", "end", "center", "center-even", "center-odd"].includes(e)
            }
        },
        transition: {
            default: Je.transition,
            type: Number
        },
        breakpoints: {
            default: Je.breakpoints,
            type: Object
        },
        autoplay: {
            default: Je.autoplay,
            type: Number
        },
        pauseAutoplayOnHover: {
            default: Je.pauseAutoplayOnHover,
            type: Boolean
        },
        modelValue: {
            default: void 0,
            type: Number
        },
        mouseDrag: {
            default: Je.mouseDrag,
            type: Boolean
        },
        touchDrag: {
            default: Je.touchDrag,
            type: Boolean
        },
        dir: {
            default: Je.dir,
            validator(e) {
                return ["rtl", "ltr"].includes(e)
            }
        },
        settings: {
            default() {
                return {}
            },
            type: Object
        }
    };
    function X0({config: e, slidesCount: t}) {
        const {snapAlign: n, wrapAround: o, itemsToShow: r=1} = e;
        if (o)
            return Math.max(t - 1, 0);
        let i;
        switch (n) {
        case "start":
            i = t - r;
            break;
        case "end":
            i = t - 1;
            break;
        case "center":
        case "center-odd":
            i = t - Math.ceil((r - .5) / 2);
            break;
        case "center-even":
            i = t - Math.ceil(r / 2);
            break;
        default:
            i = 0;
            break
        }
        return Math.max(i, 0)
    }
    function _0({config: e, slidesCount: t}) {
        const {wrapAround: n, snapAlign: o, itemsToShow: r=1} = e;
        let i = 0;
        if (n || r > t)
            return i;
        switch (o) {
        case "start":
            i = 0;
            break;
        case "end":
            i = r - 1;
            break;
        case "center":
        case "center-odd":
            i = Math.floor((r - 1) / 2);
            break;
        case "center-even":
            i = Math.floor((r - 2) / 2);
            break;
        default:
            i = 0;
            break
        }
        return i
    }
    function hs({val: e, max: t, min: n}) {
        return t < n ? e : Math.min(Math.max(e, n), t)
    }
    function $0({config: e, currentSlide: t, slidesCount: n}) {
        const {snapAlign: o, wrapAround: r, itemsToShow: i=1} = e;
        let s = t;
        switch (o) {
        case "center":
        case "center-odd":
            s -= (i - 1) / 2;
            break;
        case "center-even":
            s -= (i - 2) / 2;
            break;
        case "end":
            s -= i - 1;
            break
        }
        return r ? s : hs({
            val: s,
            max: n - i,
            min: 0
        })
    }
    function ew(e) {
        var t, n, o, r;
        return e ? ((t = e[0]) === null || t === void 0 ? void 0 : t.children) === "v-if" || ((o = (n = e[0]) === null || n === void 0 ? void 0 : n.type) === null || o === void 0 ? void 0 : o.name) === "CarouselSlide" ? e.filter(i=>{
            var s;
            return ((s = i.type) === null || s === void 0 ? void 0 : s.name) === "CarouselSlide"
        }
        ) : ((r = e[0]) === null || r === void 0 ? void 0 : r.children) || [] : []
    }
    function vs({val: e, max: t, min: n=0}) {
        return e > t ? vs({
            val: e - (t + 1),
            max: t,
            min: n
        }) : e < n ? vs({
            val: e + (t + 1),
            max: t,
            min: n
        }) : e
    }
    function tw(e, t) {
        let n;
        return t ? function(...o) {
            const r = this;
            n || (e.apply(r, o),
            n = !0,
            setTimeout(()=>n = !1, t))
        }
        : e
    }
    function nw(e, t) {
        let n;
        return function(...o) {
            n && clearTimeout(n),
            n = setTimeout(()=>{
                e(...o),
                n = null
            }
            , t)
        }
    }
    let TA;
    TA = Lt({
        name: "ARIA",
        setup() {
            const e = pe("currentSlide", G(0))
              , t = pe("slidesCount", G(0));
            return ()=>Ge("div", {
                class: ["carousel__liveregion", "carousel__sr-only"],
                "aria-live": "polite",
                "aria-atomic": "true"
            }, `Item ${e.value + 1} of ${t.value}`)
        }
    }),
    Cs = Lt({
        name: "Carousel",
        props: LA,
        setup(e, {slots: t, emit: n, expose: o}) {
            var r;
            const i = G(null)
              , s = G([])
              , u = G(0)
              , c = G(0);
            let A = G({})
              , p = Object.assign({}, Je);
            const a = Ve(Object.assign({}, p))
              , l = G((r = e.modelValue) !== null && r !== void 0 ? r : 0)
              , d = G(0)
              , f = G(0)
              , m = G(0)
              , v = G(0);
            let g, h;
            qe("config", a),
            qe("slidesCount", c),
            qe("currentSlide", l),
            qe("maxSlide", m),
            qe("minSlide", v),
            qe("slideWidth", u);
            function b() {
                const y = Object.assign(Object.assign({}, e), e.settings);
                A = G(Object.assign({}, y.breakpoints)),
                p = Object.assign(Object.assign({}, y), {
                    settings: void 0,
                    breakpoints: void 0
                }),
                T(p)
            }
            function E() {
                if (!Object.keys(A.value).length)
                    return;
                const y = Object.keys(A.value).map(k=>Number(k)).sort((k,F)=>+F - +k);
                let M = Object.assign({}, p);
                y.some(k=>window.matchMedia(`(min-width: ${k}px)`).matches ? (M = Object.assign(Object.assign({}, M), A.value[k]),
                !0) : !1),
                T(M)
            }
            function T(y) {
                Object.entries(y).forEach(([M,k])=>a[M] = k)
            }
            const B = nw(()=>{
                E(),
                C(),
                Q()
            }
            , 16);
            function Q() {
                if (!i.value)
                    return;
                const y = i.value.getBoundingClientRect();
                u.value = y.width / a.itemsToShow
            }
            function C() {
                c.value <= 0 || (f.value = Math.ceil((c.value - 1) / 2),
                m.value = X0({
                    config: a,
                    slidesCount: c.value
                }),
                v.value = _0({
                    config: a,
                    slidesCount: c.value
                }),
                a.wrapAround || (l.value = hs({
                    val: l.value,
                    max: m.value,
                    min: v.value
                })))
            }
            vt(()=>{
                rt(()=>setTimeout(()=>{
                    E(),
                    C(),
                    Q(),
                    n("init")
                }
                , 16)),
                J(),
                window.addEventListener("resize", B, {
                    passive: !0
                })
            }
            ),
            xn(()=>{
                h && clearTimeout(h),
                g && clearInterval(g),
                window.removeEventListener("resize", B, {
                    passive: !0
                })
            }
            );
            let x = !1;
            const V = {
                x: 0,
                y: 0
            }
              , D = {
                x: 0,
                y: 0
            }
              , O = Ve({
                x: 0,
                y: 0
            })
              , Z = G(!1)
              , ne = ()=>{
                Z.value = !0
            }
              , W = ()=>{
                Z.value = !1
            }
            ;
            function ie(y) {
                ["INPUT", "TEXTAREA"].includes(y.target.tagName) || (x = y.type === "touchstart",
                x || y.preventDefault(),
                !(!x && y.button !== 0 || ue.value) && (V.x = x ? y.touches[0].clientX : y.clientX,
                V.y = x ? y.touches[0].clientY : y.clientY,
                document.addEventListener(x ? "touchmove" : "mousemove", ee, !0),
                document.addEventListener(x ? "touchend" : "mouseup", _, !0)))
            }
            const ee = tw(y=>{
                D.x = x ? y.touches[0].clientX : y.clientX,
                D.y = x ? y.touches[0].clientY : y.clientY;
                const M = D.x - V.x
                  , k = D.y - V.y;
                O.y = k,
                O.x = M
            }
            , a.throttle);
            function _() {
                const y = a.dir === "rtl" ? -1 : 1
                  , M = Math.sign(O.x) * .4
                  , k = Math.round(O.x / u.value + M) * y;
                if (k && !x) {
                    const F = N=>{
                        N.stopPropagation(),
                        window.removeEventListener("click", F, !0)
                    }
                    ;
                    window.addEventListener("click", F, !0)
                }
                le(l.value - k),
                O.x = 0,
                O.y = 0,
                document.removeEventListener(x ? "touchmove" : "mousemove", ee, !0),
                document.removeEventListener(x ? "touchend" : "mouseup", _, !0)
            }
            function J() {
                !a.autoplay || a.autoplay <= 0 || (g = setInterval(()=>{
                    a.pauseAutoplayOnHover && Z.value || Ne()
                }
                , a.autoplay))
            }
            function oe() {
                g && (clearInterval(g),
                g = null),
                J()
            }
            const ue = G(!1);
            function le(y) {
                const M = a.wrapAround ? y : hs({
                    val: y,
                    max: m.value,
                    min: v.value
                });
                l.value === M || ue.value || (n("slide-start", {
                    slidingToIndex: y,
                    currentSlideIndex: l.value,
                    prevSlideIndex: d.value,
                    slidesCount: c.value
                }),
                ue.value = !0,
                d.value = l.value,
                l.value = M,
                h = setTimeout(()=>{
                    if (a.wrapAround) {
                        const k = vs({
                            val: M,
                            max: m.value,
                            min: 0
                        });
                        k !== l.value && (l.value = k,
                        n("loop", {
                            currentSlideIndex: l.value,
                            slidingToIndex: y
                        }))
                    }
                    n("update:modelValue", l.value),
                    n("slide-end", {
                        currentSlideIndex: l.value,
                        prevSlideIndex: d.value,
                        slidesCount: c.value
                    }),
                    ue.value = !1,
                    oe()
                }
                , a.transition))
            }
            function Ne() {
                le(l.value + a.itemsToScroll)
            }
            function fe() {
                le(l.value - a.itemsToScroll)
            }
            const L = {
                slideTo: le,
                next: Ne,
                prev: fe
            };
            qe("nav", L),
            qe("isSliding", ue);
            const Y = I(()=>$0({
                config: a,
                currentSlide: l.value,
                slidesCount: c.value
            }));
            qe("slidesToScroll", Y);
            const H = I(()=>{
                const y = a.dir === "rtl" ? -1 : 1
                  , M = Y.value * u.value * y;
                return {
                    transform: `translateX(${O.x - M}px)`,
                    transition: `${ue.value ? a.transition : 0}ms`,
                    margin: a.wrapAround ? `0 -${c.value * u.value}px` : "",
                    width: "100%"
                }
            }
            );
            function X() {
                b(),
                E(),
                C(),
                Q(),
                oe()
            }
            Object.keys(LA).forEach(y=>{
                ["modelValue"].includes(y) || me(()=>e[y], X)
            }
            ),
            me(()=>e.modelValue, y=>{
                y !== l.value && le(Number(y))
            }
            ),
            me(c, C),
            b();
            const he = {
                config: a,
                slidesCount: c,
                slideWidth: u,
                next: Ne,
                prev: fe,
                slideTo: le,
                currentSlide: l,
                maxSlide: m,
                minSlide: v,
                middleSlide: f
            };
            o({
                updateBreakpointsConfigs: E,
                updateSlidesData: C,
                updateSlideWidth: Q,
                initDefaultConfigs: b,
                restartCarousel: X,
                slideTo: le,
                next: Ne,
                prev: fe,
                nav: L,
                data: he
            });
            const Ie = t.default || t.slides
              , de = t.addons
              , w = Ve(he);
            return ()=>{
                const y = ew(Ie == null ? void 0 : Ie(w))
                  , M = (de == null ? void 0 : de(w)) || [];
                y.forEach((P,j)=>P.props.index = j);
                let k = y;
                if (a.wrapAround) {
                    const P = y.map((z,U)=>St(z, {
                        index: -y.length + U,
                        isClone: !0,
                        key: `clone-before-${U}`
                    }))
                      , j = y.map((z,U)=>St(z, {
                        index: y.length + U,
                        isClone: !0,
                        key: `clone-after-${U}`
                    }));
                    k = [...P, ...y, ...j]
                }
                s.value = y,
                c.value = Math.max(y.length, 1);
                const F = Ge("ol", {
                    class: "carousel__track",
                    style: H.value,
                    onMousedownCapture: a.mouseDrag ? ie : null,
                    onTouchstartPassiveCapture: a.touchDrag ? ie : null
                }, k)
                  , N = Ge("div", {
                    class: "carousel__viewport"
                }, F);
                return Ge("section", {
                    ref: i,
                    class: {
                        carousel: !0,
                        "carousel--rtl": a.dir === "rtl"
                    },
                    dir: a.dir,
                    "aria-label": "Gallery",
                    tabindex: "0",
                    onMouseenter: ne,
                    onMouseleave: W
                }, [N, M, Ge(TA)])
            }
        }
    });
    const ow = {
        arrowUp: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
        arrowDown: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
        arrowRight: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
        arrowLeft: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
    }
      , bs = e=>{
        const t = e.name;
        if (!t || typeof t != "string")
            return;
        const n = ow[t]
          , o = Ge("path", {
            d: n
        })
          , r = e.title || t
          , i = Ge("title", r);
        return Ge("svg", {
            class: "carousel__icon",
            viewBox: "0 0 24 24",
            role: "img",
            ariaLabel: r
        }, [i, o])
    }
    ;
    bs.props = {
        name: String,
        title: String
    },
    Is = (e,{slots: t, attrs: n})=>{
        const {next: o, prev: r} = t || {}
          , i = pe("config", Ve(Object.assign({}, Je)))
          , s = pe("maxSlide", G(1))
          , u = pe("minSlide", G(1))
          , c = pe("currentSlide", G(1))
          , A = pe("nav", {})
          , {dir: p, wrapAround: a} = i
          , l = p === "rtl"
          , d = Ge("button", {
            type: "button",
            class: ["carousel__prev", !a && c.value <= u.value && "carousel__prev--disabled", n == null ? void 0 : n.class],
            "aria-label": "Navigate to previous slide",
            onClick: A.prev
        }, (r == null ? void 0 : r()) || Ge(bs, {
            name: l ? "arrowRight" : "arrowLeft"
        }))
          , f = Ge("button", {
            type: "button",
            class: ["carousel__next", !a && c.value >= s.value && "carousel__next--disabled", n == null ? void 0 : n.class],
            "aria-label": "Navigate to next slide",
            onClick: A.next
        }, (o == null ? void 0 : o()) || Ge(bs, {
            name: l ? "arrowLeft" : "arrowRight"
        }));
        return [d, f]
    }
    ,
    Bs = Lt({
        name: "CarouselSlide",
        props: {
            index: {
                type: Number,
                default: 1
            },
            isClone: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {slots: t}) {
            const n = pe("config", Ve(Object.assign({}, Je)))
              , o = pe("currentSlide", G(0))
              , r = pe("slidesToScroll", G(0))
              , i = pe("slideWidth", G(0))
              , s = pe("isSliding", G(!1))
              , u = I(()=>({
                width: i.value ? `${i.value}px` : "100%"
            }))
              , c = ()=>e.index === o.value
              , A = ()=>e.index === o.value - 1
              , p = ()=>e.index === o.value + 1
              , a = ()=>{
                const l = Math.floor(r.value)
                  , d = Math.ceil(r.value + n.itemsToShow - 1);
                return e.index >= l && e.index <= d
            }
            ;
            return ()=>{
                var l;
                return Ge("li", {
                    style: u.value,
                    class: {
                        carousel__slide: !0,
                        "carousel_slide--clone": e.isClone,
                        "carousel__slide--visible": a(),
                        "carousel__slide--active": c(),
                        "carousel__slide--prev": A(),
                        "carousel__slide--next": p(),
                        "carousel__slide--sliding": s.value
                    },
                    "aria-hidden": !a()
                }, (l = t.default) === null || l === void 0 ? void 0 : l.call(t))
            }
        }
    });
    const rw = {
        class: "leaderboard__selection-list"
    }
      , aw = R("h1", {
        class: "content-title"
    }, "Leaderboard", -1)
      , iw = {
        class: "rank-banner__carousel-container"
    }
      , sw = {
        class: "rank-banner__container"
    }
      , lw = ["src", "poster"]
      , uw = {
        class: "banner-section"
    }
      , cw = R("h3", {
        class: "banner-title"
    }, [R("span", {
        class: "yellow"
    }, "Global\xA0"), Pe("Rank Rewards")], -1)
      , dw = {
        class: "banner-subtitle"
    }
      , Aw = {
        class: "yellow"
    }
      , pw = R("br", null, null, -1)
      , fw = R("p", {
        class: "banner-description"
    }, [Pe("Play in Public or Private leagues. Your top score"), R("br"), Pe("will compete in the global ranking for attractive rewards.")], -1)
      , gw = R("span", {
        class: "paginate-left-btn"
    }, [R("i", {
        class: "icon-double-arrow-left"
    })], -1)
      , mw = R("span", {
        class: "paginate-right-btn"
    }, [R("i", {
        class: "icon-double-arrow-right"
    })], -1)
      , hw = {
        class: "rank-options"
    }
      , vw = R("h3", {
        class: "title"
    }, "Global", -1)
      , bw = R("p", {
        class: "description"
    }, [R("span", {
        class: "yellow"
    }, "Public + Private\xA0"), Pe("High Score Rewards")], -1)
      , ww = [vw, bw]
      , yw = R("span", {
        class: "divider"
    }, null, -1)
      , Cw = wa('<h5 class="label label--short">Open for All</h5><div class="text-container"><h3 class="title"><span class="yellow">Public\xA0</span>League</h3><p class="description">Win Allowlists</p></div>', 2)
      , Ew = [Cw]
      , Iw = wa('<h5 class="label">IO Buddies (Partners)</h5><div class="text-container"><h3 class="title"><span class="yellow">Private\xA0</span>Leagues</h3><p class="description">Win Allowlists</p></div>', 2)
      , Bw = [Iw]
      , Mw = {
        __name: "LeaderboardSelectionList",
        setup(e) {
            const t = new URL("/assets/legendary-video-banner-16957707.mp4",self.location).href
              , n = new URL("/assets/legendary-banner-8519078f.png",self.location).href
              , o = new URL("/assets/io-video-banner-f1fb1b4f.mp4",self.location).href
              , r = new URL("/assets/io-banner-1b099e02.png",self.location).href
              , i = new URL("/assets/rides-video-banner-0ebbd8c4.mp4",self.location).href
              , s = new URL("/assets/rides-banner-aabe08aa.png",self.location).href
              , u = bt()
              , c = {
                itemsToShow: 1,
                itemsToScroll: 1,
                snapAlign: "start"
            }
              , A = [{
                video: t,
                poster: n,
                subtitle: "Seven Epic Legendary Rides"
            }, {
                video: o,
                poster: r,
                subtitle: "30 Imaginary Ones Nfts"
            }, {
                video: i,
                poster: s,
                subtitle: "50 Imaginary Rides Nfts"
            }]
              , p = a=>{
                u.setActiveLeaderboardType(a)
            }
            ;
            return (a,l)=>(K(),
            ae("div", rw, [aw, R("div", iw, [S(q(Cs), {
                class: "rank-banner__carousel",
                ref: "carouselRef",
                settings: c
            }, {
                addons: Be(({slidesCount: d, currentSlide: f})=>[S(q(Is), null, {
                    prev: Be(()=>[gw]),
                    next: Be(()=>[mw]),
                    _: 1
                })]),
                default: Be(()=>[(K(),
                ae(Se, null, ht(A, (d,f)=>S(q(Bs), {
                    key: f
                }, {
                    default: Be(()=>[R("div", sw, [R("video", {
                        class: "banner-video",
                        ref_for: !0,
                        ref: "videoRef",
                        src: d.video,
                        poster: d.poster,
                        autoplay: !0,
                        muted: !0,
                        loop: !0,
                        playsinline: !0,
                        controls: !1
                    }, null, 8, lw), R("div", uw, [cw, R("h5", dw, [R("span", Aw, Qe(d.subtitle), 1), pw, Pe("To Be Won in Top Global Ranking")]), fw])])]),
                    _: 2
                }, 1024)), 64))]),
                _: 1
            }, 512)]), R("div", hw, [R("button", {
                class: "option-box box--global",
                type: "button",
                onClick: l[0] || (l[0] = d=>p("overall"))
            }, ww), yw, R("button", {
                class: "option-box box--public",
                type: "button",
                onClick: l[1] || (l[1] = d=>p("public"))
            }, Ew), R("button", {
                class: "option-box box--private",
                type: "button",
                onClick: l[2] || (l[2] = d=>p("private"))
            }, Bw)])]))
        }
    };
    function ws(e, t, n) {
        var o, r, i, s, u;
        t == null && (t = 100);
        function c() {
            var p = Date.now() - s;
            p < t && p >= 0 ? o = setTimeout(c, t - p) : (o = null,
            n || (u = e.apply(i, r),
            i = r = null))
        }
        var A = function() {
            i = this,
            r = arguments,
            s = Date.now();
            var p = n && !o;
            return o || (o = setTimeout(c, t)),
            p && (u = e.apply(i, r),
            i = r = null),
            u
        };
        return A.clear = function() {
            o && (clearTimeout(o),
            o = null)
        }
        ,
        A.flush = function() {
            o && (u = e.apply(i, r),
            i = r = null,
            clearTimeout(o),
            o = null)
        }
        ,
        A
    }
    ws.debounce = ws,
    ga = ws;
    let VA, FA, RA, UA, GA, jA, Jo, NA, qA, YA;
    VA = async()=>await tt.get("v1/api/partners"),
    FA = async()=>await tt.get("v1/api/partner"),
    RA = async()=>await tt.get("v1/api/partners/qualified"),
    UA = {
        retrievePartner: FA,
        retrievePartners: VA,
        retrieveQualifiedPartners: RA
    },
    GA = async(e,t=0)=>{
        const n = {};
        return e && (n.partnerId = e),
        t && (n.userId = t),
        await tt.get("v2/api/leaderboard/user-rank", {
            params: n
        })
    }
    ,
    jA = async()=>await tt.get("v1/api/leaderboard/partner-rank"),
    Jo = {
        retrieveLeaderboard: GA,
        retrievePartnerLeaderboard: jA
    },
    NA = async()=>await tt.get("v1/api/game-version/latest"),
    qA = {
        retrieveLatestGameVersion: NA
    },
    YA = [{
        name: "Plague",
        slug: "plague",
        order: 271,
        media: '{"thumb":"/partners/019-Plague-Pfp.png"}',
        feOnly: !0
    }, {
        name: "Sappy Seals",
        slug: "sappy-seals",
        order: 272,
        media: '{"thumb":"/partners/020-SappySeals-Pfp.png"}',
        feOnly: !0
    }, {
        name: "On Chain Buccanneers",
        slug: "on-chain-buccanneers",
        order: 273,
        media: '{"thumb":"/partners/021-OnChainBuccanneers-Pfp.png"}',
        feOnly: !0
    }, {
        name: "NFTBOI",
        slug: "nftboi",
        order: 360,
        media: '{"thumb":"/partners/032-NFTBOI-Pfp.png"}',
        feOnly: !0
    }, {
        name: "Search Fi",
        slug: "search-fi",
        order: 370,
        media: '{"thumb":"/partners/033-SearchFi-Pfp.png"}',
        feOnly: !0
    }, {
        name: "OliveX",
        slug: "olivex",
        order: 50,
        media: '{"thumb":"/partners/037-OliveXGenesis-Pfp.png"}',
        feOnly: !0
    }, {
        name: "Vee Friends",
        slug: "vee-friends",
        order: 60,
        media: '{"thumb":"/partners/039-VeeFriends-Pfp.png"}',
        feOnly: !0
    }, {
        name: "0xBasement",
        slug: "0xbasement",
        order: 270,
        media: '{"thumb":"/partners/047-0xBasement-Pfp.png"}',
        feOnly: !0
    }, {
        name: "Gemscope",
        slug: "gemscope",
        order: 150,
        media: '{"thumb":"/partners/049-Gemscope-Pfp.png"}',
        feOnly: !0
    }, {
        name: "Maison Ghost",
        slug: "maison-ghost",
        order: 231,
        media: '{"thumb":"/partners/051-MaisonGhost-Pfp.png"}',
        feOnly: !0
    }, {
        name: "MCN Network",
        slug: "mcn-network",
        order: 245,
        media: '{"thumb":"/partners/071-MCNNetwork-Pfp.png"}',
        feOnly: !0
    }, {
        name: "Wale.Swoosh",
        slug: "wale-swoosh",
        order: 171,
        media: '{"thumb":"/partners/073-Wale.Swoosh-Pfp.png"}',
        feOnly: !0
    }, {
        name: "HOOT LIST",
        slug: "imaginary",
        order: 275,
        media: '{"thumb":"/partners/074-HOOTLIST-Pfp.png"}',
        feOnly: !0
    }, {
        name: "Taiji",
        slug: "taiji",
        order: 269,
        media: '{"thumb":"/partners/076-Taiji-Pfp.png"}',
        feOnly: !0
    }],
    ks = async()=>{
        const e = bt();
        if (!e.partners.length) {
            const t = (await UA.retrievePartners()).data.rows;
            e.partners = t.map(n=>(n.id = n.id.toString(),
            n)),
            e.qualifiedPartners = e.partners.filter(n=>n.id > 1 && n.holderRoleId),
            e.qualifiedPartners = e.qualifiedPartners.concat(YA),
            e.qualifiedPartners = e.qualifiedPartners.sort((n,o)=>n.order - o.order),
            e.qualifiedPartners.length && e.qualifiedPartners.forEach(n=>{
                if (n.media) {
                    const o = JSON.parse(n.media);
                    o.resource && en(`https://assets.imaginaryones.com/rides${o.resource}`),
                    o.thumb && en(`https://assets.imaginaryones.com/rides${o.thumb}`)
                }
            }
            )
        }
    }
    ,
    xs = async()=>{
        const e = bt()
          , t = Bt();
        ks(),
        t.isLoggedIn || await Es();
        try {
            const n = t.isLoggedIn ? t.id : 0;
            if (Object.keys(e.userLeaderboardList).length === 0) {
                let[o,r,i,s] = await Promise.all([Jo.retrieveLeaderboard(0, n), Jo.retrieveLeaderboard(1, n), Jo.retrievePartnerLeaderboard(), qA.retrieveLatestGameVersion()]);
                e.version = s.data.version;
                const u = o.data;
                e.userLeaderboardList["overall/individual"] = u.leaderBoardsTop100Ranks.slice(0, Sn);
                const c = r.data;
                e.userLeaderboardList["public/top-x"] = c.topX;
                const A = i.data
                  , p = [];
                A.leaderBoardsPartnerRanks.map(a=>{
                    p.push({
                        username: a.partner_name,
                        avatar: `https://assets.imaginaryones.com/rides${JSON.parse(e.partners.find(l=>a.partnerId === l.id).media).resource}`,
                        rank: a.rank,
                        score: a.total_scores
                    })
                }
                ),
                e.userLeaderboardList["overall/group"] = p,
                t.isLoggedIn && (t.gameData = [],
                u.myRank && u.myScore && t.gameData.push({
                    partnerId: 0,
                    ranking: u.myRank,
                    score: u.myScore,
                    league: u.myLeague
                }),
                c.myRank && c.myScore && (t.gameData.push({
                    partnerId: 1,
                    ranking: c.myRank,
                    score: c.myScore
                }),
                e.userLeaderboardList["public/my-rank"] = c.myRankTopBottom))
            }
        } catch {}
    }
    ,
    fa = async e=>{
        const t = bt()
          , n = Bt()
          , o = (await Jo.retrieveLeaderboard(e, n.isLoggedIn ? n.id : 0)).data;
        t.userLeaderboardList["private/top-x"] = o.topX,
        n.isLoggedIn && o.myRank && o.myScore && n.gameData.push({
            partnerId: e,
            ranking: o.myRank,
            score: o.myScore
        })
    }
    ;
    const Qw = {
        class: "bubble-rider__leaderboard-io-buddies"
    }
      , Sw = {
        class: "content"
    }
      , xw = R("p", {
        class: "title--small"
    }, "IO Buddies", -1)
      , kw = R("h1", {
        class: "title"
    }, [Pe("Select\xA0"), R("span", {
        class: "yellow"
    }, "Project")], -1)
      , Ow = R("p", {
        class: "subtitle"
    }, "Select project to view their leaderboard", -1)
      , Dw = {
        key: 0,
        class: "option-list"
    }
      , Lw = R("i", {
        class: "icon-double-arrow-left"
    }, null, -1)
      , Tw = R("div", {
        class: "overlay"
    }, null, -1)
      , Vw = {
        class: "option-text"
    }
      , Fw = R("i", {
        class: "icon-double-arrow-right"
    }, null, -1)
      , Rw = {
        key: 1,
        class: "io-buddies__loader"
    }
      , Uw = {
        __name: "LeaderboardIOBuddies",
        setup(e) {
            const t = bt()
              , n = G(1)
              , o = G(27)
              , r = G(!0)
              , i = G(225)
              , s = I(()=>{
                let m = [];
                return t.qualifiedPartners.length && (m = m.concat(t.qualifiedPartners.filter(v=>!v.feOnly))),
                m
            }
            )
              , u = I(()=>{
                const m = o.value * (n.value - 1)
                  , v = o.value * n.value;
                return s.value.slice(m, v)
            }
            )
              , c = I(()=>Math.ceil(s.value.length / o.value))
              , A = I(()=>n.value > 1)
              , p = I(()=>n.value < c.value);
            vt(()=>{
                d(),
                window.addEventListener("resize", ga(()=>{
                    d()
                }
                , 300))
            }
            ),
            Ir(()=>{
                const m = document.querySelectorAll(".option")[0];
                i.value = (m == null ? void 0 : m.clientWidth) * 1.42
            }
            ),
            xn(()=>{
                window.removeEventListener("resize", ga(()=>{
                    d()
                }
                , 300))
            }
            );
            const a = m=>{
                const v = {};
                if (m.media) {
                    const g = JSON.parse(m.media);
                    v.backgroundImage = `url(https://assets.imaginaryones.com/rides${g.resource})`
                }
                return v.height = `${i.value || 225}px`,
                v
            }
              , l = async m=>{
                fa(m),
                t.setSelectedIOBuddies(m)
            }
              , d = ()=>{
                r.value = !0,
                screen.width >= 1920 ? o.value = 27 : screen.width <= 1536 && screen.width > 1366 ? o.value = 21 : screen.width <= 1366 && (o.value = 18),
                n.value > c.value && (n.value = c.value),
                setTimeout(()=>{
                    r.value = !1
                }
                , 300)
            }
              , f = m=>{
                m === "next" ? n.value += 1 : n.value -= 1
            }
            ;
            return (m,v)=>(K(),
            ae("div", Qw, [R("div", Sw, [xw, kw, Ow, r.value ? (K(),
            ae("div", Rw, [S(_o, {
                indeterminate: ""
            })])) : (K(),
            ae("div", Dw, [q(A) ? (K(),
            Te(mt, {
                key: 0,
                class: "paginate-left-btn",
                onClick: v[0] || (v[0] = g=>f("prev"))
            }, {
                default: Be(()=>[Lw]),
                _: 1
            })) : Oe("", !0), (K(!0),
            ae(Se, null, ht(q(u), (g,h)=>(K(),
            ae("div", {
                class: "option-container",
                key: h
            }, [S(mt, {
                class: "option",
                style: or(a(g)),
                onClick: b=>l(g.id)
            }, {
                default: Be(()=>[Tw, R("p", Vw, Qe(g.name), 1)]),
                _: 2
            }, 1032, ["style", "onClick"])]))), 128)), q(p) ? (K(),
            Te(mt, {
                key: 1,
                class: "paginate-right-btn",
                onClick: v[1] || (v[1] = g=>f("next"))
            }, {
                default: Be(()=>[Fw]),
                _: 1
            })) : Oe("", !0)]))])]))
        }
    }
      , Gw = {
        class: "bubble-rider__leaderboard-header"
    }
      , jw = {
        class: "title"
    }
      , Nw = {
        class: "t--yellow"
    }
      , qw = R("span", null, "Leaderboard", -1)
      , Yw = {
        key: 0
    }
      , zw = {
        key: 0,
        class: "subtitle"
    }
      , Hw = {
        key: 1,
        class: "leaderboard-rewards"
    }
      , Kw = R("h3", {
        class: "text"
    }, "Rewards", -1)
      , Zw = R("div", {
        class: "gradient-circle"
    }, null, -1)
      , Pw = ["src"]
      , Ww = {
        class: "content"
    }
      , Jw = {
        class: "reward-detail"
    }
      , Xw = {
        class: "name"
    }
      , _w = ["innerHTML"]
      , $w = {
        __name: "LeaderboardHeader",
        props: {
            selectedBuddy: {
                type: Object,
                default: ()=>{}
            }
        },
        setup(e) {
            const t = e
              , n = new URL("/assets/imaginary-ones-8d997220.png",self.location).href
              , o = new URL("/assets/ride-1-28cb97ef.png",self.location).href
              , r = new URL("/assets/ride-2-86fa264f.png",self.location).href
              , i = new URL("/assets/ride-3-d72ff9ba.png",self.location).href
              , s = new URL("/assets/more-reward-88442b79.png",self.location).href
              , u = bt()
              , c = [{
                name: "Rank 1 - 7",
                benefit: "<p>Win 1x <span>Imaginary Rides - Legendary</span></p>",
                icon: o
            }, {
                name: "Rank 1 - 30",
                benefit: "<p>Win 1x <span>Imaginary Ones</span></p>",
                icon: n
            }, {
                name: `Rank 1 - ${Sn}`,
                benefit: "<p>Win 1x <span>Imaginary Rides</span></p>",
                icon: r
            }]
              , A = [{
                name: "Rank 1 - {airdropSlots}",
                benefit: "<p>Win 1x <span>Imaginary Rides</span></p>",
                icon: r
            }, {
                name: "Rank {airdropSlots} - {allowlistSlots}",
                benefit: "<p>Win 1x <span>VIP Allowlist</span></p>",
                icon: i
            }, {
                name: "More rewards in global ranking",
                icon: n,
                hasButton: !0
            }]
              , p = [{
                name: "Rank 1 - {allowlistSlots}",
                benefit: "<p>Win 1x <span>VIP Allowlist</span></p>",
                icon: i
            }, {
                name: "More rewards in global ranking",
                benefit: "<p>Legendary Ride, Imaginary Ones and more.</p>",
                icon: s,
                hasButton: !0
            }]
              , a = I(()=>u.isOnOverallLeaderboard && u.activeLeaderboardTab === "group")
              , l = I(()=>u.isOnOverallLeaderboard && u.activeLeaderboardTab === "individual")
              , d = I(()=>{
                const h = u.activeLeaderboardType
                  , b = u.activeLeaderboardTab;
                let E = "";
                return h === "overall" && (b === "individual" ? E = "Global" : E = "NFT Projects"),
                h === "public" && (E = "Public"),
                h === "private" && t.selectedBuddy && (E = t.selectedBuddy.name),
                E
            }
            )
              , f = I(()=>{
                const h = [];
                return m.value.length === 2 && h.push("two-rewards"),
                m.value.length === 3 && h.push("three-rewards"),
                h.join(" ")
            }
            )
              , m = I(()=>{
                let h = [];
                const {airdropSlots: b, allowlistSlots: E} = t.selectedBuddy;
                return u.activeLeaderboardType && (u.isOnOverallLeaderboard ? h = c : u.isOnPrivateLeaderboard ? (h = A,
                b === 1 ? h[0].name = h[0].name.replace(" - {airdropSlots}", "") : h[0].name = h[0].name.replace("{airdropSlots}", b),
                h[1].name = h[1].name.replace("{airdropSlots}", b + 1),
                h[1].name = h[1].name.replace("{allowlistSlots}", E),
                b || h.shift()) : (h = p,
                h[0].name = h[0].name.replace("{allowlistSlots}", E))),
                h
            }
            )
              , v = (h,b)=>{
                const E = [`reward-${b + 1}`];
                return u.isOnOverallLeaderboard && E.push("is-overall"),
                u.isOnPrivateLeaderboard && E.push("is-private"),
                h.hasButton && E.push("has-button"),
                E.join(" ")
            }
              , g = ()=>{
                u.setActiveLeaderboardType("overall"),
                u.setActiveLeaderboardTab("individual")
            }
            ;
            return (h,b)=>(K(),
            ae("div", Gw, [R("h3", jw, [R("span", Nw, Qe(q(d)) + "\xA0", 1), qw, q(l) ? (K(),
            ae("span", Yw, "\xA0(Public + Private)")) : Oe("", !0)]), q(a) ? (K(),
            ae("h3", zw, "Friendly competition among NFT Projects.")) : Oe("", !0), q(a) ? Oe("", !0) : (K(),
            ae("div", Hw, [Kw, R("div", {
                class: Le(["leaderboard-rewards__list", q(f)])
            }, [(K(!0),
            ae(Se, null, ht(q(m), (E,T)=>(K(),
            ae("div", {
                class: Le(["reward-list__item", v(E, T)]),
                key: `reward-${T + 1}`
            }, [Zw, R("img", {
                src: E.icon
            }, null, 8, Pw), R("div", Ww, [R("div", Jw, [R("h4", Xw, Qe(E.name), 1), E.benefit ? (K(),
            ae("h4", {
                key: 0,
                class: Le(["benefit", {
                    "no-shadow": E.hasButton
                }]),
                innerHTML: E.benefit
            }, null, 10, _w)) : Oe("", !0)]), E.hasButton ? (K(),
            Te(mt, {
                key: 0,
                class: "overall-leaderboard__button",
                rounded: "",
                color: "#8600ff",
                onClick: g
            }, {
                default: Be(()=>[Pe("Global Leaderboard")]),
                _: 1
            })) : Oe("", !0)])], 2))), 128))], 2)]))]))
        }
    }
      , ey = "/assets/crown-9b0236cb.png"
      , ty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBpZPNLgRBEMf/1T0iuLiTWAeHuc26OBoewNeZ+HgBbo6yNzfeYEmcfbwAe3VhJZKJcTAS7stpMd2le7AzYz/Y7D/ppKer6jfVVV1AB72H8PhOnnAoy3yN4U6+TjuDDWQYCKGQHAxKA1KL7fwpF3wvdsDkm21kAAvgfBYEqhovswycuEITutQEikO5JoAyupBSNNPnxhW7FymRPfSgBggaEbqU0x8/5EC2sCRos1NQ9MQozmkcHnN6GDtbDRAHKPCQvAa+u2NUe+VkZb9nVjQenxnTU2l/GLzFobOXgDSJhSzEamObMTmvkyx+IC+vwPmRRGEkn2kCu4VHH4HjS8kXWWM1YMwua4yNUuJ6EwBXZxKei5Z6U2pc2PYxUylr8Fwyfxd4fPqClHepNYQ50ozFARdR48IqFPvmweUKXrnkpC6rS6JlJlph3XHVgd2nI2Lb/8vfTwpLaCfZrxolSUOp81C2VF0Wm0Baiwq6kalPnVQ1zSNrM29KQfoMioSAT8Q7GWuNNUqaRdWMU0HW1SkVUcN/pO7kgQ4l2xUHcg29yL6z97Dvz4H+BMiSuybOLYDBAAAAAElFTkSuQmCC"
      , ny = {
        class: "ranking"
    }
      , oy = {
        class: "player-card"
    }
      , ry = {
        class: "avatar"
    }
      , ay = ["src"]
      , iy = ["src"]
      , sy = {
        class: "username"
    }
      , ly = {
        key: 0,
        class: "tag"
    }
      , uy = {
        key: 0,
        class: "league"
    }
      , cy = {
        key: 1,
        class: "project"
    }
      , dy = {
        class: "score"
    }
      , zA = {
        __name: "LeaderboardPlayerCard",
        props: {
            isShowPlayerCard: {
                type: Boolean,
                default: !1
            },
            isMyRank: {
                type: Boolean,
                default: !1
            },
            isEligible: {
                type: Boolean,
                default: !1
            },
            tableData: {
                type: Object,
                default: ()=>{}
            },
            isOverallGroup: {
                type: Boolean,
                default: !1
            },
            isOverallIndividual: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e
              , n = I(()=>{
                const r = [];
                return t.isShowPlayerCard && r.push("is-show-player-card"),
                t.isOverallIndividual && r.push("is-overall-individual"),
                t.isOverallGroup && r.push("is-overall-group"),
                r.join(" ")
            }
            )
              , o = I(()=>Kd(t.tableData.avatar) ? t.tableData.avatar : ha(t.tableData.discord, t.tableData.avatar));
            return (r,i)=>(K(),
            ae("div", {
                class: Le(["leaderboard-player__card", q(n)])
            }, [R("h3", ny, Qe(e.tableData.rank), 1), R("div", oy, [R("div", ry, [R("img", {
                src: q(o)
            }, null, 8, ay), e.isOverallGroup ? (K(),
            ae("img", {
                key: 0,
                class: "verified-tag",
                src: q(ty)
            }, null, 8, iy)) : Oe("", !0)]), R("h3", sy, Qe(e.tableData.username), 1), e.isShowPlayerCard || e.isMyRank ? (K(),
            ae("h3", ly, Qe(e.isEligible ? "Eligible" : "Not Eligible"), 1)) : Oe("", !0)]), e.isOverallIndividual ? (K(),
            ae("h3", uy, Qe(e.tableData.partnerName === "default" ? "Public" : "Private"), 1)) : Oe("", !0), e.isOverallIndividual ? (K(),
            ae("h3", cy, Qe(e.tableData.partnerName === "default" ? "Public" : e.tableData.partnerName), 1)) : Oe("", !0), R("h3", dy, Qe(q(Qs)(e.tableData.score)), 1)], 2))
        }
    }
      , Ay = {
        key: 0,
        class: "leaderboard-table__container"
    }
      , py = R("span", {
        class: "divider-line"
    }, null, -1)
      , fy = ["innerHTML"]
      , gy = {
        class: "table-header"
    }
      , my = ["src"]
      , hy = {
        key: 1,
        class: "leaderboard-table__loader"
    }
      , vy = {
        __name: "LeaderboardTable",
        props: {
            tableContent: {
                type: Array,
                default: ()=>[]
            },
            isOnTop3: {
                type: Boolean,
                default: !1
            },
            isOnTopN: {
                type: Boolean,
                default: !1
            },
            selectedBuddy: {
                type: Object,
                default: ()=>{}
            }
        },
        setup(e) {
            const t = e
              , n = bt()
              , o = Bt()
              , r = G(!1)
              , i = G(!1)
              , s = I(()=>n.isOnOverallLeaderboard && n.activeLeaderboardTab === "group")
              , u = I(()=>n.isOnOverallLeaderboard && n.activeLeaderboardTab === "individual")
              , c = I(()=>{
                const h = [];
                return n.isOnOverallLeaderboard && (h.push("is-overall"),
                n.activeLeaderboardTab === "group" && h.push("is-overall-group")),
                h.join(" ")
            }
            )
              , A = (h,b)=>{
                var T;
                const E = [`rank-${h.rank}`];
                return o.isLoggedIn && h.userId === o.id && h.rank === ((T = o.getSelectedGameData) == null ? void 0 : T.ranking) && (t.isOnTopN || t.isOnTop3) && E.push("my-rank"),
                b + 1 === h.length && E.push("is-last"),
                E.join(" ")
            }
              , p = I(()=>{
                let h = !1;
                for (let b = 0; b < t.tableContent.length; b++)
                    typeof t.tableContent[b].tableData == "object" ? h = !0 : h = !1;
                return h
            }
            )
              , a = I(()=>o.gameData.find(h=>h.partnerId === n.getSelectedLeagueId))
              , l = I(()=>{
                var b, E, T, B;
                const h = {
                    id: o.id,
                    username: o.username,
                    rank: (b = o.getSelectedGameData) == null ? void 0 : b.ranking,
                    avatar: o.avatar,
                    score: (E = o.getSelectedGameData) == null ? void 0 : E.score
                };
                return u.value && (h.partnerName = ((T = o.getSelectedGameData) == null ? void 0 : T.league) === "default" ? "default" : (B = o.getSelectedGameData) == null ? void 0 : B.league),
                h
            }
            )
              , d = I(()=>{
                var h;
                return r.value || !a.value ? !1 : n.activeLeaderboardType === "public" || n.activeLeaderboardType === "private" ? !!o.isLoggedIn && ((h = o.getSelectedGameData) == null ? void 0 : h.ranking) > 10 : u.value && !t.isOnTop3 ? !!o.isLoggedIn : !1
            }
            )
              , f = I(()=>{
                var h;
                return ((h = o.getSelectedGameData) == null ? void 0 : h.ranking) <= (u.value ? Sn : t.selectedBuddy.allowlistSlots)
            }
            );
            vt(()=>{
                n.isOnOverallLeaderboard && v(),
                m()
            }
            ),
            Ir(()=>{
                m()
            }
            );
            const m = ()=>{
                const h = document.querySelector(".leaderboard-table__content .table-content");
                if (h) {
                    let b = (h == null ? void 0 : h.scrollHeight) > (h == null ? void 0 : h.offsetHeight);
                    i.value = b
                }
            }
              , v = ()=>{
                if (n.isOnOverallLeaderboard)
                    return;
                const h = document.querySelector(".leaderboard-table__content .table-content")
                  , b = document.querySelector(".leaderboard-player__card.my-rank");
                r.value = o.isLoggedIn ? g(h, b) : !1
            }
              , g = (h,b)=>{
                if (!h || !b)
                    return;
                const E = h.getBoundingClientRect()
                  , T = b.getBoundingClientRect()
                  , B = Math.max(document.documentElement.clientHeight, window.innerHeight);
                return !(T.bottom < E.top || T.top - B + 100 >= 0)
            }
            ;
            return (h,b)=>(K(),
            ae("div", {
                class: Le(["bubble-rider__leaderboard-table", {
                    "is-show-player-card": q(d),
                    "is-nft-projects": q(s),
                    "is-show-scrollbar": i.value
                }])
            }, [q(p) ? (K(),
            ae("div", Ay, [py, (K(!0),
            ae(Se, null, ht(e.tableContent, (E,T)=>(K(),
            ae("div", {
                class: Le(["leaderboard-table__content", q(c)]),
                key: T
            }, [R("h3", {
                class: "title",
                innerHTML: E.title
            }, null, 8, fy), R("div", gy, [(K(!0),
            ae(Se, null, ht(E.tableHeader, (B,Q)=>(K(),
            ae("h3", {
                class: Le(["header-item", `${B}-header`]),
                key: `header-${Q + 1}`
            }, Qe(B), 3))), 128))]), R("div", {
                class: "table-content",
                onScroll: v
            }, [(K(!0),
            ae(Se, null, ht(E.tableData, (B,Q)=>{
                var C;
                return K(),
                ae("div", {
                    class: Le(["table-data", `rank-${B.ranking || B.rank}`]),
                    key: `tableData-${Q + 1}`
                }, [B.ranking === 1 || B.rank === 1 ? (K(),
                ae("img", {
                    key: 0,
                    class: "crown",
                    src: q(ey)
                }, null, 8, my)) : Oe("", !0), S(zA, {
                    class: Le(A(B, Q)),
                    "is-my-rank": B.userId === q(o).id && B.rank === ((C = q(o).getSelectedGameData) == null ? void 0 : C.ranking) && (e.isOnTopN || e.isOnTop3),
                    "table-data": B,
                    "is-overall-group": q(s),
                    "is-overall-individual": q(u),
                    "is-eligible": q(f)
                }, null, 8, ["class", "is-my-rank", "table-data", "is-overall-group", "is-overall-individual", "is-eligible"])], 2)
            }
            ), 128))], 32)], 2))), 128))])) : (K(),
            ae("div", hy, [S(_o, {
                indeterminate: ""
            })])), q(d) ? (K(),
            Te(zA, {
                key: 2,
                "is-show-player-card": q(d),
                "table-data": q(l),
                "is-overall-individual": q(u),
                "is-eligible": q(f)
            }, null, 8, ["is-show-player-card", "table-data", "is-overall-individual", "is-eligible"])) : Oe("", !0)], 2))
        }
    }
      , by = {
        key: 2
    }
      , HA = {
        __name: "BRiderLeaderboard",
        setup(e) {
            xs();
            const t = kn()
              , n = $o()
              , o = bt()
              , r = Bt()
              , i = G(!1)
              , s = I(()=>t.params.slug)
              , u = pe("emitter")
              , c = I(()=>r.gameData.find(g=>g.partnerId === o.selectedIOBuddies))
              , A = I(()=>{
                var g;
                return !r.isLoggedIn || !r.getSelectedGameData ? !1 : ((g = r.getSelectedGameData) == null ? void 0 : g.ranking) <= 3
            }
            )
              , p = I(()=>{
                var h;
                if (!r.isLoggedIn || o.isOnOverallLeaderboard && o.activeLeaderboardTab !== "individual")
                    return !1;
                let g;
                return o.isOnOverallLeaderboard && o.activeLeaderboardTab === "individual" ? g = Sn : g = o.partners.find(b=>b.id == o.getSelectedLeagueId).allowlistSlots,
                o.isOnPrivateLeaderboard ? !!c.value : ((h = r.getSelectedGameData) == null ? void 0 : h.ranking) <= g
            }
            )
              , a = I(()=>{
                let g = [];
                return o.isOnOverallLeaderboard ? g = o.activeLeaderboardTab === "individual" ? [`<p><span class="t--yellow">TOP ${Sn}</span> RIDERS <span class="t--small">(All Leagues)</span></p>`] : ['<p><span class="t--yellow">PROJECT</span> RANKING</p>'] : g = [`<p><span class="t--yellow">TOP ${o.partners.find(h=>h.id == o.getSelectedLeagueId).allowlistSlots}</span> RIDERS</p>`],
                g
            }
            )
              , l = I(()=>o.isOnOverallLeaderboard && o.activeLeaderboardTab === "individual" ? ["ranking", "player", "league", "project", "score"] : o.isOnOverallLeaderboard && o.activeLeaderboardTab !== "individual" ? ["ranking", "project", "score"] : ["ranking", "player", "score"])
              , d = I(()=>{
                let g = [];
                return o.isOnOverallLeaderboard ? g.push(o.userLeaderboardList[`overall/${o.activeLeaderboardTab}`]) : g.push(o.userLeaderboardList[`${o.activeLeaderboardType}/top-x`]),
                g
            }
            )
              , f = I(()=>{
                let g = [];
                return o.activeLeaderboardType && g.push({
                    title: a.value[0],
                    tableHeader: l.value,
                    tableData: d.value[0]
                }),
                g
            }
            )
              , m = I(()=>o.isOnPrivateLeaderboard && !o.selectedIOBuddies)
              , v = I(()=>o.partners.find(h=>h.id === o.selectedIOBuddies) || o.partners.find(h=>parseInt(h.id) === 1));
            return me(()=>o.selectedIOBuddies, (g,h)=>{
                g && g !== h && Object.keys(o.userLeaderboardList).filter(b=>b.includes("private/")).forEach(b=>{
                    o.userLeaderboardList[b] && delete o.userLeaderboardList[b]
                }
                )
            }
            ),
            yt(()=>{
                if (s.value && o.partners && r.getSelectedGameData && !i.value)
                    if (i.value = !0,
                    s.value === "public")
                        o.activeLeaderboardType = s.value;
                    else {
                        const g = o.partners.find(h=>h.slug === s.value);
                        g ? (fa(g.id),
                        o.activeLeaderboardType = "private",
                        o.selectedIOBuddies = g.id) : (u.emit("notify", {
                            msg: "Invalid IO Buddy League",
                            type: "error"
                        }),
                        n.push("/b-rider/leaderboard"))
                    }
            }
            ),
            (g,h)=>(K(),
            ae("div", {
                class: Le(["bubble-rider__leaderboard-container", {
                    "is-on-selection": !q(o).activeLeaderboardType,
                    "is-selecting-buddy": q(m)
                }])
            }, [q(o).activeLeaderboardType ? q(m) ? (K(),
            Te(Uw, {
                key: 1
            })) : (K(),
            ae("div", by, [S($w, {
                "selected-buddy": q(v)
            }, null, 8, ["selected-buddy"]), S(vy, {
                "table-content": q(f),
                "is-on-top-3": q(A),
                "is-on-top-n": q(p),
                "selected-buddy": q(v)
            }, null, 8, ["table-content", "is-on-top-3", "is-on-top-n", "selected-buddy"])])) : (K(),
            Te(Mw, {
                key: 0
            }))], 2))
        }
    }
      , wy = [{
        path: "/",
        name: "Home",
        component: ()=>Ot(()=>import("./Landing-d56b07ff.js").then(async e=>(await e.__tla,
        e)), ["assets/Landing-d56b07ff.js", "assets/Landing-4135238c.css"])
    }, {
        path: "/b-rider",
        name: "Bubble Rider",
        component: ()=>Ot(()=>import("./BubbleRider-b37b8478.js").then(async e=>(await e.__tla,
        e)), ["assets/BubbleRider-b37b8478.js", "assets/BubbleRider-05890527.css"]),
        beforeEnter(e, t, n) {
            us(),
            n()
        }
    }, {
        path: "/b-rider/:slug",
        name: "Bubble Rider Partner",
        component: ()=>Ot(()=>import("./BubbleRider-b37b8478.js").then(async e=>(await e.__tla,
        e)), ["assets/BubbleRider-b37b8478.js", "assets/BubbleRider-05890527.css"]),
        beforeEnter(e, t, n) {
            us(),
            n()
        }
    }, {
        path: "/b-rider/about",
        name: "Bubble Rider About",
        component: ()=>Ot(()=>import("./BRiderAbout-cddf0194.js").then(async e=>(await e.__tla,
        e)), ["assets/BRiderAbout-cddf0194.js", "assets/BRiderAbout-9a4a7817.css"]),
        beforeEnter(e, t, n) {
            Zd(),
            n()
        }
    }, {
        path: "/b-rider/tutorial",
        name: "Bubble Rider Tutorial",
        component: ()=>Ot(()=>import("./BRiderTutorial-8f290b4c.js").then(async e=>(await e.__tla,
        e)), ["assets/BRiderTutorial-8f290b4c.js", "assets/BRiderTutorial-69ae8ea7.css"]),
        beforeEnter(e, t, n) {
            Pd(),
            n()
        }
    }, {
        path: "/b-rider/leaderboard",
        name: "Bubble Rider Leaderboard",
        component: HA,
        beforeEnter(e, t, n) {
            cs(),
            n()
        }
    }, {
        path: "/b-rider/leaderboard/:slug",
        name: "Bubble Rider Partner Leaderboard",
        component: HA,
        beforeEnter(e, t, n) {
            cs(),
            n()
        }
    }, {
        path: "/b-rider/terms-of-service",
        name: "Bubble Rider TOS",
        component: ()=>Ot(()=>import("./BRiderTOS-2a04698d.js").then(async e=>(await e.__tla,
        e)), ["assets/BRiderTOS-2a04698d.js", "assets/BRiderTOS-87be6204.css"])
    }, {
        path: "/b-rider/maintenance",
        name: "Bubble Rider Maintenance",
        component: ()=>Ot(()=>import("./BRiderMaintenance-7818cae5.js").then(async e=>(await e.__tla,
        e)), ["assets/BRiderMaintenance-7818cae5.js", "assets/BRiderMaintenance-8874d112.css"]),
        beforeEnter(e, t, n) {
            Wd(),
            n()
        }
    }, {
        path: "/not-found",
        name: "Not Found",
        component: ()=>Ot(()=>import("./404-4b27a46b.js").then(async e=>(await e.__tla,
        e)), ["assets/404-4b27a46b.js", "assets/404-491c6c4e.css"])
    }, {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        beforeEnter: (e,t,n)=>{
            n("/not-found")
        }
    }]
      , ra = Qm({
        history: Yg(),
        routes: wy
    });
    ra.beforeEach(e=>{
        const t = screen.width <= tr
          , n = ba();
        e.path.includes("/b-rider/") && (t || n) && ra.push("/b-rider")
    }
    );
    function KA() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const {blueprint: t, ...n} = e
          , o = Ut(t, n)
          , {aliases: r={}, components: i={}, directives: s={}} = o
          , u = ch(o.defaults)
          , c = Lv(o.display, o.ssr)
          , A = Sh(o.theme)
          , p = jh(o.icons)
          , a = ev(o.locale);
        return {
            install: l=>{
                for (const d in s)
                    l.directive(d, s[d]);
                for (const d in i)
                    l.component(d, i[d]);
                for (const d in r)
                    l.component(d, Vo({
                        ...r[d],
                        name: d,
                        aliasName: r[d].name
                    }));
                if (A.install(l),
                l.provide(Lo, u),
                l.provide(rs, c),
                l.provide(Zr, A),
                l.provide(Ki, p),
                l.provide(_r, a),
                je && o.ssr)
                    if (l.$nuxt)
                        l.$nuxt.hook("app:suspense:resolve", ()=>{
                            c.update()
                        }
                        );
                    else {
                        const {mount: d} = l;
                        l.mount = function() {
                            const f = d(...arguments);
                            return rt(()=>c.update()),
                            l.mount = d,
                            f
                        }
                    }
                Nr.reset(),
                l.mixin({
                    computed: {
                        $vuetify() {
                            return Ve({
                                defaults: Xo.call(this, Lo),
                                display: Xo.call(this, rs),
                                theme: Xo.call(this, Zr),
                                icons: Xo.call(this, Ki),
                                locale: Xo.call(this, _r)
                            })
                        }
                    }
                })
            }
            ,
            defaults: u,
            display: c,
            theme: A,
            icons: p,
            locale: a
        }
    }
    const yy = "3.1.11";
    KA.version = yy;
    function Xo(e) {
        var o, r;
        const t = this.$
          , n = ((o = t.parent) == null ? void 0 : o.provides) ?? ((r = t.vnode.appContext) == null ? void 0 : r.provides);
        if (n && e in n)
            return n[e]
    }
    const Cy = KA({
        theme: {
            defaultTheme: "imaginaryWorldTheme",
            themes: {
                variables: {},
                imaginaryWorldTheme: {
                    dark: !0,
                    colors: {
                        background: "#243040",
                        primary: "#0BB07B",
                        secondary: "#0F5EDD",
                        accent: "#0F5EDD",
                        warning: "#FFBF47",
                        success: "#20CE50",
                        error: "#FF5D5D"
                    }
                }
            }
        }
    })
      , Ey = {
        name: "BaseSvg"
    }
      , Iy = Object.assign(Ey, {
        props: {
            icon: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            const t = e
              , n = Object.assign({
                "../../assets/images/logo/bubble-rider-logo.svg": ()=>Ot(()=>import("./bubble-rider-logo-3bec8a1a.js").then(async r=>(await r.__tla,
                r)), []),
                "../../assets/images/logo/imaginary-rides-logo.svg": ()=>Ot(()=>import("./imaginary-rides-logo-6a1ea75e.js").then(async r=>(await r.__tla,
                r)), [])
            })
              , o = I(()=>pf(n[`../../assets/images/${t.icon}.svg`]));
            return (r,i)=>(K(),
            Te(Pa(q(o))))
        }
    })
      , By = {
        name: "BaseRainbowProgress"
    }
      , My = Object.assign(By, {
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        setup(e) {
            const t = e;
            return (n,o)=>(K(),
            Te(ov, {
                class: "base-rainbow-progress",
                rounded: "",
                "model-value": Math.ceil(t.value)
            }, null, 8, ["model-value"]))
        }
    })
      , Qy = Object.freeze(Object.defineProperty({
        __proto__: null,
        BaseRainbowProgress: My,
        BaseSvg: Iy
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function Sy(e) {
        return {
            all: e = e || new Map,
            on: function(t, n) {
                var o = e.get(t);
                o ? o.push(n) : e.set(t, [n])
            },
            off: function(t, n) {
                var o = e.get(t);
                o && (n ? o.splice(o.indexOf(n) >>> 0, 1) : e.set(t, []))
            },
            emit: function(t, n) {
                var o = e.get(t);
                o && o.slice().map(function(r) {
                    r(n)
                }),
                (o = e.get("*")) && o.slice().map(function(r) {
                    r(t, n)
                })
            }
        }
    }
    const aa = 1e3
      , ia = 60 * aa
      , sa = 60 * ia
      , ZA = 24 * sa
      , PA = "abort"
      , WA = "end"
      , JA = "progress"
      , XA = "start"
      , _A = "visibilitychange";
    var $A = Lt({
        name: "VueCountdown",
        props: {
            autoStart: {
                type: Boolean,
                default: !0
            },
            emitEvents: {
                type: Boolean,
                default: !0
            },
            interval: {
                type: Number,
                default: 1e3,
                validator: e=>e >= 0
            },
            now: {
                type: Function,
                default: ()=>Date.now()
            },
            tag: {
                type: String,
                default: "span"
            },
            time: {
                type: Number,
                default: 0,
                validator: e=>e >= 0
            },
            transform: {
                type: Function,
                default: e=>e
            }
        },
        emits: [PA, WA, JA, XA],
        data() {
            return {
                counting: !1,
                endTime: 0,
                totalMilliseconds: 0,
                requestId: 0
            }
        },
        computed: {
            days() {
                return Math.floor(this.totalMilliseconds / ZA)
            },
            hours() {
                return Math.floor(this.totalMilliseconds % ZA / sa)
            },
            minutes() {
                return Math.floor(this.totalMilliseconds % sa / ia)
            },
            seconds() {
                return Math.floor(this.totalMilliseconds % ia / aa)
            },
            milliseconds() {
                return Math.floor(this.totalMilliseconds % aa)
            },
            totalDays() {
                return this.days
            },
            totalHours() {
                return Math.floor(this.totalMilliseconds / sa)
            },
            totalMinutes() {
                return Math.floor(this.totalMilliseconds / ia)
            },
            totalSeconds() {
                return Math.floor(this.totalMilliseconds / aa)
            }
        },
        watch: {
            $props: {
                deep: !0,
                immediate: !0,
                handler() {
                    this.totalMilliseconds = this.time,
                    this.endTime = this.now() + this.time,
                    this.autoStart && this.start()
                }
            }
        },
        mounted() {
            document.addEventListener(_A, this.handleVisibilityChange)
        },
        beforeUnmount() {
            document.removeEventListener(_A, this.handleVisibilityChange),
            this.pause()
        },
        methods: {
            start() {
                this.counting || (this.counting = !0,
                this.emitEvents && this.$emit(XA),
                document.visibilityState === "visible" && this.continue())
            },
            continue() {
                if (!this.counting)
                    return;
                const e = Math.min(this.totalMilliseconds, this.interval);
                if (e > 0) {
                    let t, n;
                    const o = r=>{
                        t || (t = r),
                        n || (n = r);
                        const i = r - t;
                        i >= e || i + (r - n) / 2 >= e ? this.progress() : this.requestId = requestAnimationFrame(o),
                        n = r
                    }
                    ;
                    this.requestId = requestAnimationFrame(o)
                } else
                    this.end()
            },
            pause() {
                cancelAnimationFrame(this.requestId)
            },
            progress() {
                this.counting && (this.update(),
                this.emitEvents && this.totalMilliseconds > 0 && this.$emit(JA, {
                    days: this.days,
                    hours: this.hours,
                    minutes: this.minutes,
                    seconds: this.seconds,
                    milliseconds: this.milliseconds,
                    totalDays: this.totalDays,
                    totalHours: this.totalHours,
                    totalMinutes: this.totalMinutes,
                    totalSeconds: this.totalSeconds,
                    totalMilliseconds: this.totalMilliseconds
                }),
                this.continue())
            },
            abort() {
                this.counting && (this.pause(),
                this.counting = !1,
                this.emitEvents && this.$emit(PA))
            },
            end() {
                this.counting && (this.pause(),
                this.totalMilliseconds = 0,
                this.counting = !1,
                this.emitEvents && this.$emit(WA))
            },
            update() {
                this.counting && (this.totalMilliseconds = Math.max(0, this.endTime - this.now()))
            },
            restart() {
                this.pause(),
                this.totalMilliseconds = this.time,
                this.endTime = this.now() + this.time,
                this.counting = !1,
                this.start()
            },
            handleVisibilityChange() {
                switch (document.visibilityState) {
                case "visible":
                    this.update(),
                    this.continue();
                    break;
                case "hidden":
                    this.pause();
                    break
                }
            }
        },
        render() {
            return Ge(this.tag, this.$slots.default ? [this.$slots.default(this.transform({
                days: this.days,
                hours: this.hours,
                minutes: this.minutes,
                seconds: this.seconds,
                milliseconds: this.milliseconds,
                totalDays: this.totalDays,
                totalHours: this.totalHours,
                totalMinutes: this.totalMinutes,
                totalSeconds: this.totalSeconds,
                totalMilliseconds: this.totalMilliseconds
            }))] : void 0)
        }
    });
    tt.defaults.baseURL = "https://rides-api.imaginaryones.com/production";
    const xy = {
        install(e) {
            Object.values(Qy).forEach(t=>{
                e.component(t.name, t)
            }
            )
        }
    }
      , ky = Sy()
      , ep = Lm();
    ep.use(({store: e})=>{
        e.$router = un(ra)
    }
    );
    const Mn = Ig(P0);
    Mn.component($A.name, $A),
    Mn.provide("emitter", ky),
    Mn.use(ep),
    Mn.use(ra),
    Mn.use(Cy),
    Mn.use(xy),
    Mn.mount("#app")
}
)();
export {_o as$, Ce as A, ys as B, Cs as C, Aa as D, $o as E, Se as F, Bt as G, rp as H, oo as I, pa as J, Es as K, ap as L, er as M, Is as N, me as O, fa as P, ga as Q, Gt as R, Bs as S, gt as T, Ms as U, mt as V, ma as W, Sn as X, ha as Y, Qs as Z, Ss as _, QC as __tla, xn as a, Lt as a0, Ge as a1, va as a2, ip as a3, sp as a4, xs as a5, ba as a6, kn as a7, tr as a8, wa as a9, lp as aa, K as b, On as c, nr as d, ae as e, R as f, S as g, q as h, Pe as i, up as j, Oe as k, ht as l, I as m, Le as n, vt as o, He as p, Te as q, G as r, bt as s, Qe as t, Dn as u, or as v, Be as w, ks as x, pe as y, cp as z};
