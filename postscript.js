;(function () {
  var je =
      '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>',
    Ne =
      '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>'
  document.addEventListener("nav", () => {
    let qe = document.getElementsByTagName("pre")
    for (let Ee = 0; Ee < qe.length; Ee++) {
      let Jt = qe[Ee].getElementsByTagName("code")[0]
      if (Jt) {
        let Oe = function () {
          navigator.clipboard.writeText(Ie).then(
            () => {
              Yt.blur(),
                (Yt.innerHTML = Ne),
                setTimeout(() => {
                  ;(Yt.innerHTML = je), (Yt.style.borderColor = "")
                }, 2e3)
            },
            (on) => console.error(on),
          )
        }
        var ve = Oe
        let Ie = Jt.innerText.replace(
            /\n\n/g,
            `
`,
          ),
          Yt = document.createElement("button")
        ;(Yt.className = "clipboard-button"),
          (Yt.type = "button"),
          (Yt.innerHTML = je),
          (Yt.ariaLabel = "Copy source"),
          Yt.addEventListener("click", Oe),
          window.addCleanup(() => Yt.removeEventListener("click", Oe)),
          qe[Ee].prepend(Yt)
      }
    }
  })
})(),
  (function () {
    var je = Object.create,
      Ne = Object.defineProperty,
      qe = Object.getOwnPropertyDescriptor,
      ve = Object.getOwnPropertyNames,
      Ee = Object.getPrototypeOf,
      Jt = Object.prototype.hasOwnProperty,
      Oe = (t, n) => () => (n || t((n = { exports: {} }).exports, n), n.exports),
      Ie = (t, n, u, o) => {
        if ((n && typeof n == "object") || typeof n == "function")
          for (let l of ve(n))
            !Jt.call(t, l) &&
              l !== u &&
              Ne(t, l, { get: () => n[l], enumerable: !(o = qe(n, l)) || o.enumerable })
        return t
      },
      Yt = (t, n, u) => (
        (u = t != null ? je(Ee(t)) : {}),
        Ie(n || !t || !t.__esModule ? Ne(u, "default", { value: t, enumerable: !0 }) : u, t)
      ),
      on = Oe((t, n) => {
        "use strict"
        n.exports = o
        function u(f) {
          return f instanceof Buffer
            ? Buffer.from(f)
            : new f.constructor(f.buffer.slice(), f.byteOffset, f.length)
        }
        function o(f) {
          if (((f = f || {}), f.circles)) return l(f)
          return f.proto ? w : m
          function d(A, $) {
            for (var D = Object.keys(A), S = new Array(D.length), P = 0; P < D.length; P++) {
              var Q = D[P],
                tt = A[Q]
              typeof tt != "object" || tt === null
                ? (S[Q] = tt)
                : tt instanceof Date
                  ? (S[Q] = new Date(tt))
                  : ArrayBuffer.isView(tt)
                    ? (S[Q] = u(tt))
                    : (S[Q] = $(tt))
            }
            return S
          }
          function m(A) {
            if (typeof A != "object" || A === null) return A
            if (A instanceof Date) return new Date(A)
            if (Array.isArray(A)) return d(A, m)
            if (A instanceof Map) return new Map(d(Array.from(A), m))
            if (A instanceof Set) return new Set(d(Array.from(A), m))
            var $ = {}
            for (var D in A)
              if (Object.hasOwnProperty.call(A, D) !== !1) {
                var S = A[D]
                typeof S != "object" || S === null
                  ? ($[D] = S)
                  : S instanceof Date
                    ? ($[D] = new Date(S))
                    : S instanceof Map
                      ? ($[D] = new Map(d(Array.from(S), m)))
                      : S instanceof Set
                        ? ($[D] = new Set(d(Array.from(S), m)))
                        : ArrayBuffer.isView(S)
                          ? ($[D] = u(S))
                          : ($[D] = m(S))
              }
            return $
          }
          function w(A) {
            if (typeof A != "object" || A === null) return A
            if (A instanceof Date) return new Date(A)
            if (Array.isArray(A)) return d(A, w)
            if (A instanceof Map) return new Map(d(Array.from(A), w))
            if (A instanceof Set) return new Set(d(Array.from(A), w))
            var $ = {}
            for (var D in A) {
              var S = A[D]
              typeof S != "object" || S === null
                ? ($[D] = S)
                : S instanceof Date
                  ? ($[D] = new Date(S))
                  : S instanceof Map
                    ? ($[D] = new Map(d(Array.from(S), w)))
                    : S instanceof Set
                      ? ($[D] = new Set(d(Array.from(S), w)))
                      : ArrayBuffer.isView(S)
                        ? ($[D] = u(S))
                        : ($[D] = w(S))
            }
            return $
          }
        }
        function l(f) {
          var d = [],
            m = []
          return f.proto ? $ : A
          function w(D, S) {
            for (var P = Object.keys(D), Q = new Array(P.length), tt = 0; tt < P.length; tt++) {
              var ut = P[tt],
                rt = D[ut]
              if (typeof rt != "object" || rt === null) Q[ut] = rt
              else if (rt instanceof Date) Q[ut] = new Date(rt)
              else if (ArrayBuffer.isView(rt)) Q[ut] = u(rt)
              else {
                var _t = d.indexOf(rt)
                _t !== -1 ? (Q[ut] = m[_t]) : (Q[ut] = S(rt))
              }
            }
            return Q
          }
          function A(D) {
            if (typeof D != "object" || D === null) return D
            if (D instanceof Date) return new Date(D)
            if (Array.isArray(D)) return w(D, A)
            if (D instanceof Map) return new Map(w(Array.from(D), A))
            if (D instanceof Set) return new Set(w(Array.from(D), A))
            var S = {}
            d.push(D), m.push(S)
            for (var P in D)
              if (Object.hasOwnProperty.call(D, P) !== !1) {
                var Q = D[P]
                if (typeof Q != "object" || Q === null) S[P] = Q
                else if (Q instanceof Date) S[P] = new Date(Q)
                else if (Q instanceof Map) S[P] = new Map(w(Array.from(Q), A))
                else if (Q instanceof Set) S[P] = new Set(w(Array.from(Q), A))
                else if (ArrayBuffer.isView(Q)) S[P] = u(Q)
                else {
                  var tt = d.indexOf(Q)
                  tt !== -1 ? (S[P] = m[tt]) : (S[P] = A(Q))
                }
              }
            return d.pop(), m.pop(), S
          }
          function $(D) {
            if (typeof D != "object" || D === null) return D
            if (D instanceof Date) return new Date(D)
            if (Array.isArray(D)) return w(D, $)
            if (D instanceof Map) return new Map(w(Array.from(D), $))
            if (D instanceof Set) return new Set(w(Array.from(D), $))
            var S = {}
            d.push(D), m.push(S)
            for (var P in D) {
              var Q = D[P]
              if (typeof Q != "object" || Q === null) S[P] = Q
              else if (Q instanceof Date) S[P] = new Date(Q)
              else if (Q instanceof Map) S[P] = new Map(w(Array.from(Q), $))
              else if (Q instanceof Set) S[P] = new Set(w(Array.from(Q), $))
              else if (ArrayBuffer.isView(Q)) S[P] = u(Q)
              else {
                var tt = d.indexOf(Q)
                tt !== -1 ? (S[P] = m[tt]) : (S[P] = $(Q))
              }
            }
            return d.pop(), m.pop(), S
          }
        }
      })
    function de(t, n) {
      if (!t) return
      function u(l) {
        l.target === this && (l.preventDefault(), n())
      }
      function o(l) {
        l.key.startsWith("Esc") && (l.preventDefault(), n())
      }
      t?.addEventListener("click", u),
        window.addCleanup(() => t?.removeEventListener("click", u)),
        document.addEventListener("keydown", o),
        window.addCleanup(() => document.removeEventListener("keydown", o))
    }
    function Vt(t) {
      for (; t.firstChild; ) t.removeChild(t.firstChild)
    }
    function Se(t, ...n) {
      t &&
        n.forEach(([u, o]) => {
          let l = (f) => o(f)
          t.addEventListener(u, l), window.addCleanup(() => t.removeEventListener(u, l))
        })
    }
    function ne(t, n, u = 1e3) {
      let o = performance.now(),
        l = o + u
      function f() {
        let d = performance.now(),
          m = (d - o) / u,
          w = Math.floor(m * n.length)
        if (d < l) {
          let A = n.substring(0, w) + ye(n.length - w)
          ;(t.textContent = A), requestAnimationFrame(f)
        } else t.textContent = n
      }
      requestAnimationFrame(f)
    }
    function ye(t) {
      let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        u = ""
      for (let o = 0; o < t; o++) u += n.charAt(Math.floor(Math.random() * n.length))
      return u
    }
    var mn = { value: () => {} }
    function se() {
      for (var t = 0, n = arguments.length, u = {}, o; t < n; ++t) {
        if (!(o = arguments[t] + "") || o in u || /[\s.]/.test(o))
          throw new Error("illegal type: " + o)
        u[o] = []
      }
      return new De(u)
    }
    function De(t) {
      this._ = t
    }
    function te(t, n) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function (u) {
          var o = "",
            l = u.indexOf(".")
          if ((l >= 0 && ((o = u.slice(l + 1)), (u = u.slice(0, l))), u && !n.hasOwnProperty(u)))
            throw new Error("unknown type: " + u)
          return { type: u, name: o }
        })
    }
    De.prototype = se.prototype = {
      constructor: De,
      on: function (t, n) {
        var u = this._,
          o = te(t + "", u),
          l,
          f = -1,
          d = o.length
        if (arguments.length < 2) {
          for (; ++f < d; ) if ((l = (t = o[f]).type) && (l = Ye(u[l], t.name))) return l
          return
        }
        if (n != null && typeof n != "function") throw new Error("invalid callback: " + n)
        for (; ++f < d; )
          if ((l = (t = o[f]).type)) u[l] = vn(u[l], t.name, n)
          else if (n == null) for (l in u) u[l] = vn(u[l], t.name, null)
        return this
      },
      copy: function () {
        var t = {},
          n = this._
        for (var u in n) t[u] = n[u].slice()
        return new De(t)
      },
      call: function (t, n) {
        if ((l = arguments.length - 2) > 0)
          for (var u = new Array(l), o = 0, l, f; o < l; ++o) u[o] = arguments[o + 2]
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
        for (f = this._[t], o = 0, l = f.length; o < l; ++o) f[o].value.apply(n, u)
      },
      apply: function (t, n, u) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
        for (var o = this._[t], l = 0, f = o.length; l < f; ++l) o[l].value.apply(n, u)
      },
    }
    function Ye(t, n) {
      for (var u = 0, o = t.length, l; u < o; ++u) if ((l = t[u]).name === n) return l.value
    }
    function vn(t, n, u) {
      for (var o = 0, l = t.length; o < l; ++o)
        if (t[o].name === n) {
          ;(t[o] = mn), (t = t.slice(0, o).concat(t.slice(o + 1)))
          break
        }
      return u != null && t.push({ name: n, value: u }), t
    }
    var Ge = se,
      Ue = "http://www.w3.org/1999/xhtml",
      ie = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: Ue,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      }
    function ce(t) {
      var n = (t += ""),
        u = n.indexOf(":")
      return (
        u >= 0 && (n = t.slice(0, u)) !== "xmlns" && (t = t.slice(u + 1)),
        ie.hasOwnProperty(n) ? { space: ie[n], local: t } : t
      )
    }
    function an(t) {
      return function () {
        var n = this.ownerDocument,
          u = this.namespaceURI
        return u === Ue && n.documentElement.namespaceURI === Ue
          ? n.createElement(t)
          : n.createElementNS(u, t)
      }
    }
    function pe(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    }
    function An(t) {
      var n = ce(t)
      return (n.local ? pe : an)(n)
    }
    function xe() {}
    function _e(t) {
      return t == null
        ? xe
        : function () {
            return this.querySelector(t)
          }
    }
    function yn(t) {
      typeof t != "function" && (t = _e(t))
      for (var n = this._groups, u = n.length, o = new Array(u), l = 0; l < u; ++l)
        for (var f = n[l], d = f.length, m = (o[l] = new Array(d)), w, A, $ = 0; $ < d; ++$)
          (w = f[$]) &&
            (A = t.call(w, w.__data__, $, f)) &&
            ("__data__" in w && (A.__data__ = w.__data__), (m[$] = A))
      return new ct(o, this._parents)
    }
    function Re(t) {
      return t == null ? [] : Array.isArray(t) ? t : Array.from(t)
    }
    function Be() {
      return []
    }
    function sn(t) {
      return t == null
        ? Be
        : function () {
            return this.querySelectorAll(t)
          }
    }
    function We(t) {
      return function () {
        return Re(t.apply(this, arguments))
      }
    }
    function tn(t) {
      typeof t == "function" ? (t = We(t)) : (t = sn(t))
      for (var n = this._groups, u = n.length, o = [], l = [], f = 0; f < u; ++f)
        for (var d = n[f], m = d.length, w, A = 0; A < m; ++A)
          (w = d[A]) && (o.push(t.call(w, w.__data__, A, d)), l.push(w))
      return new ct(o, l)
    }
    function we(t) {
      return function () {
        return this.matches(t)
      }
    }
    function en(t) {
      return function (n) {
        return n.matches(t)
      }
    }
    var Pe = Array.prototype.find
    function nn(t) {
      return function () {
        return Pe.call(this.children, t)
      }
    }
    function Ve() {
      return this.firstElementChild
    }
    function Ae(t) {
      return this.select(t == null ? Ve : nn(typeof t == "function" ? t : en(t)))
    }
    var Z = Array.prototype.filter
    function vt() {
      return Array.from(this.children)
    }
    function Ct(t) {
      return function () {
        return Z.call(this.children, t)
      }
    }
    function Nt(t) {
      return this.selectAll(t == null ? vt : Ct(typeof t == "function" ? t : en(t)))
    }
    function qt(t) {
      typeof t != "function" && (t = we(t))
      for (var n = this._groups, u = n.length, o = new Array(u), l = 0; l < u; ++l)
        for (var f = n[l], d = f.length, m = (o[l] = []), w, A = 0; A < d; ++A)
          (w = f[A]) && t.call(w, w.__data__, A, f) && m.push(w)
      return new ct(o, this._parents)
    }
    function Tt(t) {
      return new Array(t.length)
    }
    function jt() {
      return new ct(this._enter || this._groups.map(Tt), this._parents)
    }
    function fe(t, n) {
      ;(this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = n)
    }
    fe.prototype = {
      constructor: fe,
      appendChild: function (t) {
        return this._parent.insertBefore(t, this._next)
      },
      insertBefore: function (t, n) {
        return this._parent.insertBefore(t, n)
      },
      querySelector: function (t) {
        return this._parent.querySelector(t)
      },
      querySelectorAll: function (t) {
        return this._parent.querySelectorAll(t)
      },
    }
    function Gt(t) {
      return function () {
        return t
      }
    }
    function Ht(t, n, u, o, l, f) {
      for (var d = 0, m, w = n.length, A = f.length; d < A; ++d)
        (m = n[d]) ? ((m.__data__ = f[d]), (o[d] = m)) : (u[d] = new fe(t, f[d]))
      for (; d < w; ++d) (m = n[d]) && (l[d] = m)
    }
    function ue(t, n, u, o, l, f, d) {
      var m,
        w,
        A = new Map(),
        $ = n.length,
        D = f.length,
        S = new Array($),
        P
      for (m = 0; m < $; ++m)
        (w = n[m]) &&
          ((S[m] = P = d.call(w, w.__data__, m, n) + ""), A.has(P) ? (l[m] = w) : A.set(P, w))
      for (m = 0; m < D; ++m)
        (P = d.call(t, f[m], m, f) + ""),
          (w = A.get(P)) ? ((o[m] = w), (w.__data__ = f[m]), A.delete(P)) : (u[m] = new fe(t, f[m]))
      for (m = 0; m < $; ++m) (w = n[m]) && A.get(S[m]) === w && (l[m] = w)
    }
    function St(t) {
      return t.__data__
    }
    function Lt(t, n) {
      if (!arguments.length) return Array.from(this, St)
      var u = n ? ue : Ht,
        o = this._parents,
        l = this._groups
      typeof t != "function" && (t = Gt(t))
      for (
        var f = l.length, d = new Array(f), m = new Array(f), w = new Array(f), A = 0;
        A < f;
        ++A
      ) {
        var $ = o[A],
          D = l[A],
          S = D.length,
          P = he(t.call($, $ && $.__data__, A, o)),
          Q = P.length,
          tt = (m[A] = new Array(Q)),
          ut = (d[A] = new Array(Q)),
          rt = (w[A] = new Array(S))
        u($, D, tt, ut, rt, P, n)
        for (var _t = 0, It = 0, st, H; _t < Q; ++_t)
          if ((st = tt[_t])) {
            for (_t >= It && (It = _t + 1); !(H = ut[It]) && ++It < Q; );
            st._next = H || null
          }
      }
      return (d = new ct(d, o)), (d._enter = m), (d._exit = w), d
    }
    function he(t) {
      return typeof t == "object" && "length" in t ? t : Array.from(t)
    }
    function zt() {
      return new ct(this._exit || this._groups.map(Tt), this._parents)
    }
    function ke(t, n, u) {
      var o = this.enter(),
        l = this,
        f = this.exit()
      return (
        typeof t == "function" ? ((o = t(o)), o && (o = o.selection())) : (o = o.append(t + "")),
        n != null && ((l = n(l)), l && (l = l.selection())),
        u == null ? f.remove() : u(f),
        o && l ? o.merge(l).order() : l
      )
    }
    function Ke(t) {
      for (
        var n = t.selection ? t.selection() : t,
          u = this._groups,
          o = n._groups,
          l = u.length,
          f = o.length,
          d = Math.min(l, f),
          m = new Array(l),
          w = 0;
        w < d;
        ++w
      )
        for (var A = u[w], $ = o[w], D = A.length, S = (m[w] = new Array(D)), P, Q = 0; Q < D; ++Q)
          (P = A[Q] || $[Q]) && (S[Q] = P)
      for (; w < l; ++w) m[w] = u[w]
      return new ct(m, this._parents)
    }
    function Te() {
      for (var t = this._groups, n = -1, u = t.length; ++n < u; )
        for (var o = t[n], l = o.length - 1, f = o[l], d; --l >= 0; )
          (d = o[l]) &&
            (f && d.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(d, f), (f = d))
      return this
    }
    function Je(t) {
      t || (t = wn)
      function n(D, S) {
        return D && S ? t(D.__data__, S.__data__) : !D - !S
      }
      for (var u = this._groups, o = u.length, l = new Array(o), f = 0; f < o; ++f) {
        for (var d = u[f], m = d.length, w = (l[f] = new Array(m)), A, $ = 0; $ < m; ++$)
          (A = d[$]) && (w[$] = A)
        w.sort(n)
      }
      return new ct(l, this._parents).order()
    }
    function wn(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function xn() {
      var t = arguments[0]
      return (arguments[0] = this), t.apply(null, arguments), this
    }
    function bn() {
      return Array.from(this)
    }
    function kn() {
      for (var t = this._groups, n = 0, u = t.length; n < u; ++n)
        for (var o = t[n], l = 0, f = o.length; l < f; ++l) {
          var d = o[l]
          if (d) return d
        }
      return null
    }
    function cn() {
      let t = 0
      for (let n of this) ++t
      return t
    }
    function Cn() {
      return !this.node()
    }
    function $n(t) {
      for (var n = this._groups, u = 0, o = n.length; u < o; ++u)
        for (var l = n[u], f = 0, d = l.length, m; f < d; ++f)
          (m = l[f]) && t.call(m, m.__data__, f, l)
      return this
    }
    function On(t) {
      return function () {
        this.removeAttribute(t)
      }
    }
    function In(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }
    function Dn(t, n) {
      return function () {
        this.setAttribute(t, n)
      }
    }
    function Rn(t, n) {
      return function () {
        this.setAttributeNS(t.space, t.local, n)
      }
    }
    function h(t, n) {
      return function () {
        var u = n.apply(this, arguments)
        u == null ? this.removeAttribute(t) : this.setAttribute(t, u)
      }
    }
    function M(t, n) {
      return function () {
        var u = n.apply(this, arguments)
        u == null
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, u)
      }
    }
    function T(t, n) {
      var u = ce(t)
      if (arguments.length < 2) {
        var o = this.node()
        return u.local ? o.getAttributeNS(u.space, u.local) : o.getAttribute(u)
      }
      return this.each(
        (n == null
          ? u.local
            ? In
            : On
          : typeof n == "function"
            ? u.local
              ? M
              : h
            : u.local
              ? Rn
              : Dn)(u, n),
      )
    }
    function j(t) {
      return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView
    }
    function V(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }
    function J(t, n, u) {
      return function () {
        this.style.setProperty(t, n, u)
      }
    }
    function dt(t, n, u) {
      return function () {
        var o = n.apply(this, arguments)
        o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, u)
      }
    }
    function pt(t, n, u) {
      return arguments.length > 1
        ? this.each((n == null ? V : typeof n == "function" ? dt : J)(t, n, u ?? ""))
        : Et(this.node(), t)
    }
    function Et(t, n) {
      return t.style.getPropertyValue(n) || j(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function Pt(t) {
      return function () {
        delete this[t]
      }
    }
    function Kt(t, n) {
      return function () {
        this[t] = n
      }
    }
    function me(t, n) {
      return function () {
        var u = n.apply(this, arguments)
        u == null ? delete this[t] : (this[t] = u)
      }
    }
    function oe(t, n) {
      return arguments.length > 1
        ? this.each((n == null ? Pt : typeof n == "function" ? me : Kt)(t, n))
        : this.node()[t]
    }
    function Zt(t) {
      return t.trim().split(/^|\s+/)
    }
    function Ft(t) {
      return t.classList || new ae(t)
    }
    function ae(t) {
      ;(this._node = t), (this._names = Zt(t.getAttribute("class") || ""))
    }
    ae.prototype = {
      add: function (t) {
        var n = this._names.indexOf(t)
        n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
      },
      remove: function (t) {
        var n = this._names.indexOf(t)
        n >= 0 &&
          (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
      },
      contains: function (t) {
        return this._names.indexOf(t) >= 0
      },
    }
    function Fe(t, n) {
      for (var u = Ft(t), o = -1, l = n.length; ++o < l; ) u.add(n[o])
    }
    function Qe(t, n) {
      for (var u = Ft(t), o = -1, l = n.length; ++o < l; ) u.remove(n[o])
    }
    function ze(t) {
      return function () {
        Fe(this, t)
      }
    }
    function Me(t) {
      return function () {
        Qe(this, t)
      }
    }
    function fn(t, n) {
      return function () {
        ;(n.apply(this, arguments) ? Fe : Qe)(this, t)
      }
    }
    function Mn(t, n) {
      var u = Zt(t + "")
      if (arguments.length < 2) {
        for (var o = Ft(this.node()), l = -1, f = u.length; ++l < f; )
          if (!o.contains(u[l])) return !1
        return !0
      }
      return this.each((typeof n == "function" ? fn : n ? ze : Me)(u, n))
    }
    function Bn() {
      this.textContent = ""
    }
    function hn(t) {
      return function () {
        this.textContent = t
      }
    }
    function L(t) {
      return function () {
        var n = t.apply(this, arguments)
        this.textContent = n ?? ""
      }
    }
    function U(t) {
      return arguments.length
        ? this.each(t == null ? Bn : (typeof t == "function" ? L : hn)(t))
        : this.node().textContent
    }
    function a() {
      this.innerHTML = ""
    }
    function c(t) {
      return function () {
        this.innerHTML = t
      }
    }
    function y(t) {
      return function () {
        var n = t.apply(this, arguments)
        this.innerHTML = n ?? ""
      }
    }
    function b(t) {
      return arguments.length
        ? this.each(t == null ? a : (typeof t == "function" ? y : c)(t))
        : this.node().innerHTML
    }
    function _() {
      this.nextSibling && this.parentNode.appendChild(this)
    }
    function F() {
      return this.each(_)
    }
    function z() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function O() {
      return this.each(z)
    }
    function K(t) {
      var n = typeof t == "function" ? t : An(t)
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments))
      })
    }
    function R() {
      return null
    }
    function G(t, n) {
      var u = typeof t == "function" ? t : An(t),
        o = n == null ? R : typeof n == "function" ? n : _e(n)
      return this.select(function () {
        return this.insertBefore(u.apply(this, arguments), o.apply(this, arguments) || null)
      })
    }
    function X() {
      var t = this.parentNode
      t && t.removeChild(this)
    }
    function W() {
      return this.each(X)
    }
    function ot() {
      var t = this.cloneNode(!1),
        n = this.parentNode
      return n ? n.insertBefore(t, this.nextSibling) : t
    }
    function it() {
      var t = this.cloneNode(!0),
        n = this.parentNode
      return n ? n.insertBefore(t, this.nextSibling) : t
    }
    function r(t) {
      return this.select(t ? it : ot)
    }
    function g(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__
    }
    function x(t) {
      return function (n) {
        t.call(this, n, this.__data__)
      }
    }
    function C(t) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function (n) {
          var u = "",
            o = n.indexOf(".")
          return o >= 0 && ((u = n.slice(o + 1)), (n = n.slice(0, o))), { type: n, name: u }
        })
    }
    function B(t) {
      return function () {
        var n = this.__on
        if (n) {
          for (var u = 0, o = -1, l = n.length, f; u < l; ++u)
            (f = n[u]),
              (!t.type || f.type === t.type) && f.name === t.name
                ? this.removeEventListener(f.type, f.listener, f.options)
                : (n[++o] = f)
          ++o ? (n.length = o) : delete this.__on
        }
      }
    }
    function I(t, n, u) {
      return function () {
        var o = this.__on,
          l,
          f = x(n)
        if (o) {
          for (var d = 0, m = o.length; d < m; ++d)
            if ((l = o[d]).type === t.type && l.name === t.name) {
              this.removeEventListener(l.type, l.listener, l.options),
                this.addEventListener(l.type, (l.listener = f), (l.options = u)),
                (l.value = n)
              return
            }
        }
        this.addEventListener(t.type, f, u),
          (l = { type: t.type, name: t.name, value: n, listener: f, options: u }),
          o ? o.push(l) : (this.__on = [l])
      }
    }
    function et(t, n, u) {
      var o = C(t + ""),
        l,
        f = o.length,
        d
      if (arguments.length < 2) {
        var m = this.node().__on
        if (m) {
          for (var w = 0, A = m.length, $; w < A; ++w)
            for (l = 0, $ = m[w]; l < f; ++l)
              if ((d = o[l]).type === $.type && d.name === $.name) return $.value
        }
        return
      }
      for (m = n ? I : B, l = 0; l < f; ++l) this.each(m(o[l], n, u))
      return this
    }
    function nt(t, n, u) {
      var o = j(t),
        l = o.CustomEvent
      typeof l == "function"
        ? (l = new l(n, u))
        : ((l = o.document.createEvent("Event")),
          u
            ? (l.initEvent(n, u.bubbles, u.cancelable), (l.detail = u.detail))
            : l.initEvent(n, !1, !1)),
        t.dispatchEvent(l)
    }
    function lt(t, n) {
      return function () {
        return nt(this, t, n)
      }
    }
    function bt(t, n) {
      return function () {
        return nt(this, t, n.apply(this, arguments))
      }
    }
    function Bt(t, n) {
      return this.each((typeof n == "function" ? bt : lt)(t, n))
    }
    function* ft() {
      for (var t = this._groups, n = 0, u = t.length; n < u; ++n)
        for (var o = t[n], l = 0, f = o.length, d; l < f; ++l) (d = o[l]) && (yield d)
    }
    var ht = [null]
    function ct(t, n) {
      ;(this._groups = t), (this._parents = n)
    }
    function yt() {
      return new ct([[document.documentElement]], ht)
    }
    function Dt() {
      return this
    }
    ct.prototype = yt.prototype = {
      constructor: ct,
      select: yn,
      selectAll: tn,
      selectChild: Ae,
      selectChildren: Nt,
      filter: qt,
      data: Lt,
      enter: jt,
      exit: zt,
      join: ke,
      merge: Ke,
      selection: Dt,
      order: Te,
      sort: Je,
      call: xn,
      nodes: bn,
      node: kn,
      size: cn,
      empty: Cn,
      each: $n,
      attr: T,
      style: pt,
      property: oe,
      classed: Mn,
      text: U,
      html: b,
      raise: F,
      lower: O,
      append: K,
      insert: G,
      remove: W,
      clone: r,
      datum: g,
      on: et,
      dispatch: Bt,
      [Symbol.iterator]: ft,
    }
    var Rt = yt
    function le(t) {
      return typeof t == "string"
        ? new ct([[document.querySelector(t)]], [document.documentElement])
        : new ct([[t]], ht)
    }
    function Le(t) {
      let n
      for (; (n = t.sourceEvent); ) t = n
      return t
    }
    function Qt(t, n) {
      if (((t = Le(t)), n === void 0 && (n = t.currentTarget), n)) {
        var u = n.ownerSVGElement || n
        if (u.createSVGPoint) {
          var o = u.createSVGPoint()
          return (
            (o.x = t.clientX),
            (o.y = t.clientY),
            (o = o.matrixTransform(n.getScreenCTM().inverse())),
            [o.x, o.y]
          )
        }
        if (n.getBoundingClientRect) {
          var l = n.getBoundingClientRect()
          return [t.clientX - l.left - n.clientLeft, t.clientY - l.top - n.clientTop]
        }
      }
      return [t.pageX, t.pageY]
    }
    function rn(t) {
      return typeof t == "string"
        ? new ct([document.querySelectorAll(t)], [document.documentElement])
        : new ct([Re(t)], ht)
    }
    var cr = { passive: !1 },
      Ln = { capture: !0, passive: !1 }
    function jn(t) {
      t.stopImmediatePropagation()
    }
    function fr(t) {
      t.preventDefault(), t.stopImmediatePropagation()
    }
    function Bi(t) {
      var n = t.document.documentElement,
        u = le(t).on("dragstart.drag", fr, Ln)
      "onselectstart" in n
        ? u.on("selectstart.drag", fr, Ln)
        : ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = "none"))
    }
    function Li(t, n) {
      var u = t.document.documentElement,
        o = le(t).on("dragstart.drag", null)
      n &&
        (o.on("click.drag", fr, Ln),
        setTimeout(function () {
          o.on("click.drag", null)
        }, 0)),
        "onselectstart" in u
          ? o.on("selectstart.drag", null)
          : ((u.style.MozUserSelect = u.__noselect), delete u.__noselect)
    }
    var Pr = (t) => () => t
    function fi(
      t,
      {
        sourceEvent: n,
        subject: u,
        target: o,
        identifier: l,
        active: f,
        x: d,
        y: m,
        dx: w,
        dy: A,
        dispatch: $,
      },
    ) {
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        subject: { value: u, enumerable: !0, configurable: !0 },
        target: { value: o, enumerable: !0, configurable: !0 },
        identifier: { value: l, enumerable: !0, configurable: !0 },
        active: { value: f, enumerable: !0, configurable: !0 },
        x: { value: d, enumerable: !0, configurable: !0 },
        y: { value: m, enumerable: !0, configurable: !0 },
        dx: { value: w, enumerable: !0, configurable: !0 },
        dy: { value: A, enumerable: !0, configurable: !0 },
        _: { value: $ },
      })
    }
    fi.prototype.on = function () {
      var t = this._.on.apply(this._, arguments)
      return t === this._ ? this : t
    }
    function hi(t) {
      return !t.ctrlKey && !t.button
    }
    function Ni() {
      return this.parentNode
    }
    function Ar(t, n) {
      return n ?? { x: t.x, y: t.y }
    }
    function kr() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function Ir() {
      var t = hi,
        n = Ni,
        u = Ar,
        o = kr,
        l = {},
        f = Ge("start", "drag", "end"),
        d = 0,
        m,
        w,
        A,
        $,
        D = 0
      function S(st) {
        st.on("mousedown.drag", P)
          .filter(o)
          .on("touchstart.drag", ut)
          .on("touchmove.drag", rt, cr)
          .on("touchend.drag touchcancel.drag", _t)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      function P(st, H) {
        if (!($ || !t.call(this, st, H))) {
          var wt = It(this, n.call(this, st, H), st, H, "mouse")
          wt &&
            (le(st.view).on("mousemove.drag", Q, Ln).on("mouseup.drag", tt, Ln),
            Bi(st.view),
            jn(st),
            (A = !1),
            (m = st.clientX),
            (w = st.clientY),
            wt("start", st))
        }
      }
      function Q(st) {
        if ((fr(st), !A)) {
          var H = st.clientX - m,
            wt = st.clientY - w
          A = H * H + wt * wt > D
        }
        l.mouse("drag", st)
      }
      function tt(st) {
        le(st.view).on("mousemove.drag mouseup.drag", null),
          Li(st.view, A),
          fr(st),
          l.mouse("end", st)
      }
      function ut(st, H) {
        if (t.call(this, st, H)) {
          var wt = st.changedTouches,
            at = n.call(this, st, H),
            kt = wt.length,
            $t,
            Ot
          for ($t = 0; $t < kt; ++$t)
            (Ot = It(this, at, st, H, wt[$t].identifier, wt[$t])) &&
              (jn(st), Ot("start", st, wt[$t]))
        }
      }
      function rt(st) {
        var H = st.changedTouches,
          wt = H.length,
          at,
          kt
        for (at = 0; at < wt; ++at) (kt = l[H[at].identifier]) && (fr(st), kt("drag", st, H[at]))
      }
      function _t(st) {
        var H = st.changedTouches,
          wt = H.length,
          at,
          kt
        for (
          $ && clearTimeout($),
            $ = setTimeout(function () {
              $ = null
            }, 500),
            at = 0;
          at < wt;
          ++at
        )
          (kt = l[H[at].identifier]) && (jn(st), kt("end", st, H[at]))
      }
      function It(st, H, wt, at, kt, $t) {
        var Ot = f.copy(),
          gt = Qt($t || wt, H),
          Wt,
          ee,
          Y
        if (
          (Y = u.call(
            st,
            new fi("beforestart", {
              sourceEvent: wt,
              target: S,
              identifier: kt,
              active: d,
              x: gt[0],
              y: gt[1],
              dx: 0,
              dy: 0,
              dispatch: Ot,
            }),
            at,
          )) != null
        )
          return (
            (Wt = Y.x - gt[0] || 0),
            (ee = Y.y - gt[1] || 0),
            function At(mt, Mt, Ut) {
              var Xt = gt,
                xt
              switch (mt) {
                case "start":
                  ;(l[kt] = At), (xt = d++)
                  break
                case "end":
                  delete l[kt], --d
                case "drag":
                  ;(gt = Qt(Ut || Mt, H)), (xt = d)
                  break
              }
              Ot.call(
                mt,
                st,
                new fi(mt, {
                  sourceEvent: Mt,
                  subject: Y,
                  target: S,
                  identifier: kt,
                  active: xt,
                  x: gt[0] + Wt,
                  y: gt[1] + ee,
                  dx: gt[0] - Xt[0],
                  dy: gt[1] - Xt[1],
                  dispatch: Ot,
                }),
                at,
              )
            }
          )
      }
      return (
        (S.filter = function (st) {
          return arguments.length ? ((t = typeof st == "function" ? st : Pr(!!st)), S) : t
        }),
        (S.container = function (st) {
          return arguments.length ? ((n = typeof st == "function" ? st : Pr(st)), S) : n
        }),
        (S.subject = function (st) {
          return arguments.length ? ((u = typeof st == "function" ? st : Pr(st)), S) : u
        }),
        (S.touchable = function (st) {
          return arguments.length ? ((o = typeof st == "function" ? st : Pr(!!st)), S) : o
        }),
        (S.on = function () {
          var st = f.on.apply(f, arguments)
          return st === f ? S : st
        }),
        (S.clickDistance = function (st) {
          return arguments.length ? ((D = (st = +st) * st), S) : Math.sqrt(D)
        }),
        S
      )
    }
    function Gn(t, n, u) {
      ;(t.prototype = n.prototype = u), (u.constructor = t)
    }
    function hr(t, n) {
      var u = Object.create(t.prototype)
      for (var o in n) u[o] = n[o]
      return u
    }
    function En() {}
    var Cr = 0.7,
      Rr = 1 / Cr,
      dr = "\\s*([+-]?\\d+)\\s*",
      Dr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      pu = /^#([0-9a-f]{3,8})$/,
      gu = new RegExp(`^rgb\\(${dr},${dr},${dr}\\)$`),
      Si = new RegExp(`^rgb\\(${qn},${qn},${qn}\\)$`),
      Ti = new RegExp(`^rgba\\(${dr},${dr},${dr},${Dr}\\)$`),
      mu = new RegExp(`^rgba\\(${qn},${qn},${qn},${Dr}\\)$`),
      vu = new RegExp(`^hsl\\(${Dr},${qn},${qn}\\)$`),
      Fi = new RegExp(`^hsla\\(${Dr},${qn},${qn},${Dr}\\)$`),
      pr = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      }
    Gn(En, Ze, {
      copy(t) {
        return Object.assign(new this.constructor(), this, t)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: di,
      formatHex: di,
      formatHex8: Vr,
      formatHsl: yu,
      formatRgb: Mr,
      toString: Mr,
    })
    function di() {
      return this.rgb().formatHex()
    }
    function Vr() {
      return this.rgb().formatHex8()
    }
    function yu() {
      return Wr(this).formatHsl()
    }
    function Mr() {
      return this.rgb().formatRgb()
    }
    function Ze(t) {
      var n, u
      return (
        (t = (t + "").trim().toLowerCase()),
        (n = pu.exec(t))
          ? ((u = n[1].length),
            (n = parseInt(n[1], 16)),
            u === 6
              ? pi(n)
              : u === 3
                ? new He(
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (n & 240),
                    ((n & 15) << 4) | (n & 15),
                    1,
                  )
                : u === 8
                  ? Hr((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (n & 255) / 255)
                  : u === 4
                    ? Hr(
                        ((n >> 12) & 15) | ((n >> 8) & 240),
                        ((n >> 8) & 15) | ((n >> 4) & 240),
                        ((n >> 4) & 15) | (n & 240),
                        (((n & 15) << 4) | (n & 15)) / 255,
                      )
                    : null)
          : (n = gu.exec(t))
            ? new He(n[1], n[2], n[3], 1)
            : (n = Si.exec(t))
              ? new He((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
              : (n = Ti.exec(t))
                ? Hr(n[1], n[2], n[3], n[4])
                : (n = mu.exec(t))
                  ? Hr((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
                  : (n = vu.exec(t))
                    ? Br(n[1], n[2] / 100, n[3] / 100, 1)
                    : (n = Fi.exec(t))
                      ? Br(n[1], n[2] / 100, n[3] / 100, n[4])
                      : pr.hasOwnProperty(t)
                        ? pi(pr[t])
                        : t === "transparent"
                          ? new He(NaN, NaN, NaN, 0)
                          : null
      )
    }
    function pi(t) {
      return new He((t >> 16) & 255, (t >> 8) & 255, t & 255, 1)
    }
    function Hr(t, n, u, o) {
      return o <= 0 && (t = n = u = NaN), new He(t, n, u, o)
    }
    function $i(t) {
      return (
        t instanceof En || (t = Ze(t)),
        t ? ((t = t.rgb()), new He(t.r, t.g, t.b, t.opacity)) : new He()
      )
    }
    function rr(t, n, u, o) {
      return arguments.length === 1 ? $i(t) : new He(t, n, u, o ?? 1)
    }
    function He(t, n, u, o) {
      ;(this.r = +t), (this.g = +n), (this.b = +u), (this.opacity = +o)
    }
    Gn(
      He,
      rr,
      hr(En, {
        brighter(t) {
          return (
            (t = t == null ? Rr : Math.pow(Rr, t)),
            new He(this.r * t, this.g * t, this.b * t, this.opacity)
          )
        },
        darker(t) {
          return (
            (t = t == null ? Cr : Math.pow(Cr, t)),
            new He(this.r * t, this.g * t, this.b * t, this.opacity)
          )
        },
        rgb() {
          return this
        },
        clamp() {
          return new He(un(this.r), un(this.g), un(this.b), Ur(this.opacity))
        },
        displayable() {
          return (
            -0.5 <= this.r &&
            this.r < 255.5 &&
            -0.5 <= this.g &&
            this.g < 255.5 &&
            -0.5 <= this.b &&
            this.b < 255.5 &&
            0 <= this.opacity &&
            this.opacity <= 1
          )
        },
        hex: Jn,
        formatHex: Jn,
        formatHex8: Oi,
        formatRgb: gi,
        toString: gi,
      }),
    )
    function Jn() {
      return `#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}`
    }
    function Oi() {
      return `#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}${Qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
    }
    function gi() {
      let t = Ur(this.opacity)
      return `${t === 1 ? "rgb(" : "rgba("}${un(this.r)}, ${un(this.g)}, ${un(this.b)}${t === 1 ? ")" : `, ${t})`}`
    }
    function Ur(t) {
      return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
    }
    function un(t) {
      return Math.max(0, Math.min(255, Math.round(t) || 0))
    }
    function Qn(t) {
      return (t = un(t)), (t < 16 ? "0" : "") + t.toString(16)
    }
    function Br(t, n, u, o) {
      return (
        o <= 0 ? (t = n = u = NaN) : u <= 0 || u >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
        new Nn(t, n, u, o)
      )
    }
    function Wr(t) {
      if (t instanceof Nn) return new Nn(t.h, t.s, t.l, t.opacity)
      if ((t instanceof En || (t = Ze(t)), !t)) return new Nn()
      if (t instanceof Nn) return t
      t = t.rgb()
      var n = t.r / 255,
        u = t.g / 255,
        o = t.b / 255,
        l = Math.min(n, u, o),
        f = Math.max(n, u, o),
        d = NaN,
        m = f - l,
        w = (f + l) / 2
      return (
        m
          ? (n === f
              ? (d = (u - o) / m + (u < o) * 6)
              : u === f
                ? (d = (o - n) / m + 2)
                : (d = (n - u) / m + 4),
            (m /= w < 0.5 ? f + l : 2 - f - l),
            (d *= 60))
          : (m = w > 0 && w < 1 ? 0 : d),
        new Nn(d, m, w, t.opacity)
      )
    }
    function ji(t, n, u, o) {
      return arguments.length === 1 ? Wr(t) : new Nn(t, n, u, o ?? 1)
    }
    function Nn(t, n, u, o) {
      ;(this.h = +t), (this.s = +n), (this.l = +u), (this.opacity = +o)
    }
    Gn(
      Nn,
      ji,
      hr(En, {
        brighter(t) {
          return (
            (t = t == null ? Rr : Math.pow(Rr, t)), new Nn(this.h, this.s, this.l * t, this.opacity)
          )
        },
        darker(t) {
          return (
            (t = t == null ? Cr : Math.pow(Cr, t)), new Nn(this.h, this.s, this.l * t, this.opacity)
          )
        },
        rgb() {
          var t = (this.h % 360) + (this.h < 0) * 360,
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            u = this.l,
            o = u + (u < 0.5 ? u : 1 - u) * n,
            l = 2 * u - o
          return new He(
            mi(t >= 240 ? t - 240 : t + 120, l, o),
            mi(t, l, o),
            mi(t < 120 ? t + 240 : t - 120, l, o),
            this.opacity,
          )
        },
        clamp() {
          return new Nn(qi(this.h), Lr(this.s), Lr(this.l), Ur(this.opacity))
        },
        displayable() {
          return (
            ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
            0 <= this.l &&
            this.l <= 1 &&
            0 <= this.opacity &&
            this.opacity <= 1
          )
        },
        formatHsl() {
          let t = Ur(this.opacity)
          return `${t === 1 ? "hsl(" : "hsla("}${qi(this.h)}, ${Lr(this.s) * 100}%, ${Lr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`
        },
      }),
    )
    function qi(t) {
      return (t = (t || 0) % 360), t < 0 ? t + 360 : t
    }
    function Lr(t) {
      return Math.max(0, Math.min(1, t || 0))
    }
    function mi(t, n, u) {
      return (
        (t < 60
          ? n + ((u - n) * t) / 60
          : t < 180
            ? u
            : t < 240
              ? n + ((u - n) * (240 - t)) / 60
              : n) * 255
      )
    }
    function zi(t, n, u, o, l) {
      var f = t * t,
        d = f * t
      return (
        ((1 - 3 * t + 3 * f - d) * n +
          (4 - 6 * f + 3 * d) * u +
          (1 + 3 * t + 3 * f - 3 * d) * o +
          d * l) /
        6
      )
    }
    function wu(t) {
      var n = t.length - 1
      return function (u) {
        var o = u <= 0 ? (u = 0) : u >= 1 ? ((u = 1), n - 1) : Math.floor(u * n),
          l = t[o],
          f = t[o + 1],
          d = o > 0 ? t[o - 1] : 2 * l - f,
          m = o < n - 1 ? t[o + 2] : 2 * f - l
        return zi((u - o / n) * n, d, l, f, m)
      }
    }
    function Pi(t) {
      var n = t.length
      return function (u) {
        var o = Math.floor(((u %= 1) < 0 ? ++u : u) * n),
          l = t[(o + n - 1) % n],
          f = t[o % n],
          d = t[(o + 1) % n],
          m = t[(o + 2) % n]
        return zi((u - o / n) * n, l, f, d, m)
      }
    }
    var vi = (t) => () => t
    function Ii(t, n) {
      return function (u) {
        return t + u * n
      }
    }
    function ta(t, n, u) {
      return (
        (t = Math.pow(t, u)),
        (n = Math.pow(n, u) - t),
        (u = 1 / u),
        function (o) {
          return Math.pow(t + o * n, u)
        }
      )
    }
    function ea(t) {
      return (t = +t) == 1
        ? Vn
        : function (n, u) {
            return u - n ? ta(n, u, t) : vi(isNaN(n) ? u : n)
          }
    }
    function Vn(t, n) {
      var u = n - t
      return u ? Ii(t, u) : vi(isNaN(t) ? n : t)
    }
    var Kr = (function t(n) {
      var u = ea(n)
      function o(l, f) {
        var d = u((l = rr(l)).r, (f = rr(f)).r),
          m = u(l.g, f.g),
          w = u(l.b, f.b),
          A = Vn(l.opacity, f.opacity)
        return function ($) {
          return (l.r = d($)), (l.g = m($)), (l.b = w($)), (l.opacity = A($)), l + ""
        }
      }
      return (o.gamma = t), o
    })(1)
    function Xr(t) {
      return function (n) {
        var u = n.length,
          o = new Array(u),
          l = new Array(u),
          f = new Array(u),
          d,
          m
        for (d = 0; d < u; ++d)
          (m = rr(n[d])), (o[d] = m.r || 0), (l[d] = m.g || 0), (f[d] = m.b || 0)
        return (
          (o = t(o)),
          (l = t(l)),
          (f = t(f)),
          (m.opacity = 1),
          function (w) {
            return (m.r = o(w)), (m.g = l(w)), (m.b = f(w)), m + ""
          }
        )
      }
    }
    var na = Xr(wu),
      ra = Xr(Pi)
    function Zn(t, n) {
      return (
        (t = +t),
        (n = +n),
        function (u) {
          return t * (1 - u) + n * u
        }
      )
    }
    var Yr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Nr = new RegExp(Yr.source, "g")
    function Ri(t) {
      return function () {
        return t
      }
    }
    function Gr(t) {
      return function (n) {
        return t(n) + ""
      }
    }
    function xu(t, n) {
      var u = (Yr.lastIndex = Nr.lastIndex = 0),
        o,
        l,
        f,
        d = -1,
        m = [],
        w = []
      for (t = t + "", n = n + ""; (o = Yr.exec(t)) && (l = Nr.exec(n)); )
        (f = l.index) > u && ((f = n.slice(u, f)), m[d] ? (m[d] += f) : (m[++d] = f)),
          (o = o[0]) === (l = l[0])
            ? m[d]
              ? (m[d] += l)
              : (m[++d] = l)
            : ((m[++d] = null), w.push({ i: d, x: Zn(o, l) })),
          (u = Nr.lastIndex)
      return (
        u < n.length && ((f = n.slice(u)), m[d] ? (m[d] += f) : (m[++d] = f)),
        m.length < 2
          ? w[0]
            ? Gr(w[0].x)
            : Ri(n)
          : ((n = w.length),
            function (A) {
              for (var $ = 0, D; $ < n; ++$) m[(D = w[$]).i] = D.x(A)
              return m.join("")
            })
      )
    }
    var Vi = 180 / Math.PI,
      Jr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
    function Hi(t, n, u, o, l, f) {
      var d, m, w
      return (
        (d = Math.sqrt(t * t + n * n)) && ((t /= d), (n /= d)),
        (w = t * u + n * o) && ((u -= t * w), (o -= n * w)),
        (m = Math.sqrt(u * u + o * o)) && ((u /= m), (o /= m), (w /= m)),
        t * o < n * u && ((t = -t), (n = -n), (w = -w), (d = -d)),
        {
          translateX: l,
          translateY: f,
          rotate: Math.atan2(n, t) * Vi,
          skewX: Math.atan(w) * Vi,
          scaleX: d,
          scaleY: m,
        }
      )
    }
    var Qr
    function bu(t) {
      let n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "")
      return n.isIdentity ? Jr : Hi(n.a, n.b, n.c, n.d, n.e, n.f)
    }
    function Ui(t) {
      return t == null
        ? Jr
        : (Qr || (Qr = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          Qr.setAttribute("transform", t),
          (t = Qr.transform.baseVal.consolidate())
            ? ((t = t.matrix), Hi(t.a, t.b, t.c, t.d, t.e, t.f))
            : Jr)
    }
    function Wi(t, n, u, o) {
      function l(A) {
        return A.length ? A.pop() + " " : ""
      }
      function f(A, $, D, S, P, Q) {
        if (A !== D || $ !== S) {
          var tt = P.push("translate(", null, n, null, u)
          Q.push({ i: tt - 4, x: Zn(A, D) }, { i: tt - 2, x: Zn($, S) })
        } else (D || S) && P.push("translate(" + D + n + S + u)
      }
      function d(A, $, D, S) {
        A !== $
          ? (A - $ > 180 ? ($ += 360) : $ - A > 180 && (A += 360),
            S.push({ i: D.push(l(D) + "rotate(", null, o) - 2, x: Zn(A, $) }))
          : $ && D.push(l(D) + "rotate(" + $ + o)
      }
      function m(A, $, D, S) {
        A !== $
          ? S.push({ i: D.push(l(D) + "skewX(", null, o) - 2, x: Zn(A, $) })
          : $ && D.push(l(D) + "skewX(" + $ + o)
      }
      function w(A, $, D, S, P, Q) {
        if (A !== D || $ !== S) {
          var tt = P.push(l(P) + "scale(", null, ",", null, ")")
          Q.push({ i: tt - 4, x: Zn(A, D) }, { i: tt - 2, x: Zn($, S) })
        } else (D !== 1 || S !== 1) && P.push(l(P) + "scale(" + D + "," + S + ")")
      }
      return function (A, $) {
        var D = [],
          S = []
        return (
          (A = t(A)),
          ($ = t($)),
          f(A.translateX, A.translateY, $.translateX, $.translateY, D, S),
          d(A.rotate, $.rotate, D, S),
          m(A.skewX, $.skewX, D, S),
          w(A.scaleX, A.scaleY, $.scaleX, $.scaleY, D, S),
          (A = $ = null),
          function (P) {
            for (var Q = -1, tt = S.length, ut; ++Q < tt; ) D[(ut = S[Q]).i] = ut.x(P)
            return D.join("")
          }
        )
      }
    }
    var Eu = Wi(bu, "px, ", "px)", "deg)"),
      _u = Wi(Ui, ", ", ")", ")"),
      gr = 1e-12
    function mr(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2
    }
    function Sr(t) {
      return ((t = Math.exp(t)) - 1 / t) / 2
    }
    function Ki(t) {
      return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }
    var Zr = (function t(n, u, o) {
        function l(f, d) {
          var m = f[0],
            w = f[1],
            A = f[2],
            $ = d[0],
            D = d[1],
            S = d[2],
            P = $ - m,
            Q = D - w,
            tt = P * P + Q * Q,
            ut,
            rt
          if (tt < gr)
            (rt = Math.log(S / A) / n),
              (ut = function (at) {
                return [m + at * P, w + at * Q, A * Math.exp(n * at * rt)]
              })
          else {
            var _t = Math.sqrt(tt),
              It = (S * S - A * A + o * tt) / (2 * A * u * _t),
              st = (S * S - A * A - o * tt) / (2 * S * u * _t),
              H = Math.log(Math.sqrt(It * It + 1) - It),
              wt = Math.log(Math.sqrt(st * st + 1) - st)
            ;(rt = (wt - H) / n),
              (ut = function (at) {
                var kt = at * rt,
                  $t = mr(H),
                  Ot = (A / (u * _t)) * ($t * Ki(n * kt + H) - Sr(H))
                return [m + Ot * P, w + Ot * Q, (A * $t) / mr(n * kt + H)]
              })
          }
          return (ut.duration = (rt * 1e3 * n) / Math.SQRT2), ut
        }
        return (
          (l.rho = function (f) {
            var d = Math.max(0.001, +f),
              m = d * d,
              w = m * m
            return t(d, m, w)
          }),
          l
        )
      })(Math.SQRT2, 2, 4),
      zn = 0,
      tr = 0,
      Sn = 0,
      Tr = 1e3,
      er,
      vr,
      yr = 0,
      ir = 0,
      ur = 0,
      or = typeof performance == "object" && performance.now ? performance : Date,
      Xi =
        typeof window == "object" && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17)
            }
    function ti() {
      return ir || (Xi(Au), (ir = or.now() + ur))
    }
    function Au() {
      ir = 0
    }
    function ei() {
      this._call = this._time = this._next = null
    }
    ei.prototype = Fr.prototype = {
      constructor: ei,
      restart: function (t, n, u) {
        if (typeof t != "function") throw new TypeError("callback is not a function")
        ;(u = (u == null ? ti() : +u) + (n == null ? 0 : +n)),
          !this._next && vr !== this && (vr ? (vr._next = this) : (er = this), (vr = this)),
          (this._call = t),
          (this._time = u),
          ni()
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), ni())
      },
    }
    function Fr(t, n, u) {
      var o = new ei()
      return o.restart(t, n, u), o
    }
    function Yi() {
      ti(), ++zn
      for (var t = er, n; t; ) (n = ir - t._time) >= 0 && t._call.call(void 0, n), (t = t._next)
      --zn
    }
    function Gi() {
      ;(ir = (yr = or.now()) + ur), (zn = tr = 0)
      try {
        Yi()
      } finally {
        ;(zn = 0), Ji(), (ir = 0)
      }
    }
    function ku() {
      var t = or.now(),
        n = t - yr
      n > Tr && ((ur -= n), (yr = t))
    }
    function Ji() {
      for (var t, n = er, u, o = 1 / 0; n; )
        n._call
          ? (o > n._time && (o = n._time), (t = n), (n = n._next))
          : ((u = n._next), (n._next = null), (n = t ? (t._next = u) : (er = u)))
      ;(vr = t), ni(o)
    }
    function ni(t) {
      if (!zn) {
        tr && (tr = clearTimeout(tr))
        var n = t - ir
        n > 24
          ? (t < 1 / 0 && (tr = setTimeout(Gi, t - or.now() - ur)), Sn && (Sn = clearInterval(Sn)))
          : (Sn || ((yr = or.now()), (Sn = setInterval(ku, Tr))), (zn = 1), Xi(Gi))
      }
    }
    function ri(t, n, u) {
      var o = new ei()
      return (
        (n = n == null ? 0 : +n),
        o.restart(
          (l) => {
            o.stop(), t(l + n)
          },
          n,
          u,
        ),
        o
      )
    }
    var ii = Ge("start", "end", "cancel", "interrupt"),
      Qi = [],
      ui = 0,
      $r = 1,
      wr = 2,
      xr = 3,
      Tn = 4,
      _n = 5,
      oi = 6
    function ar(t, n, u, o, l, f) {
      var d = t.__transition
      if (!d) t.__transition = {}
      else if (u in d) return
      Cu(t, u, {
        name: n,
        index: o,
        group: l,
        on: ii,
        tween: Qi,
        time: f.time,
        delay: f.delay,
        duration: f.duration,
        ease: f.ease,
        timer: null,
        state: ui,
      })
    }
    function yi(t, n) {
      var u = Fn(t, n)
      if (u.state > ui) throw new Error("too late; already scheduled")
      return u
    }
    function Pn(t, n) {
      var u = Fn(t, n)
      if (u.state > xr) throw new Error("too late; already running")
      return u
    }
    function Fn(t, n) {
      var u = t.__transition
      if (!u || !(u = u[n])) throw new Error("transition not found")
      return u
    }
    function Cu(t, n, u) {
      var o = t.__transition,
        l
      ;(o[n] = u), (u.timer = Fr(f, 0, u.time))
      function f(A) {
        ;(u.state = $r), u.timer.restart(d, u.delay, u.time), u.delay <= A && d(A - u.delay)
      }
      function d(A) {
        var $, D, S, P
        if (u.state !== $r) return w()
        for ($ in o)
          if (((P = o[$]), P.name === u.name)) {
            if (P.state === xr) return ri(d)
            P.state === Tn
              ? ((P.state = oi),
                P.timer.stop(),
                P.on.call("interrupt", t, t.__data__, P.index, P.group),
                delete o[$])
              : +$ < n &&
                ((P.state = oi),
                P.timer.stop(),
                P.on.call("cancel", t, t.__data__, P.index, P.group),
                delete o[$])
          }
        if (
          (ri(function () {
            u.state === xr && ((u.state = Tn), u.timer.restart(m, u.delay, u.time), m(A))
          }),
          (u.state = wr),
          u.on.call("start", t, t.__data__, u.index, u.group),
          u.state === wr)
        ) {
          for (u.state = xr, l = new Array((S = u.tween.length)), $ = 0, D = -1; $ < S; ++$)
            (P = u.tween[$].value.call(t, t.__data__, u.index, u.group)) && (l[++D] = P)
          l.length = D + 1
        }
      }
      function m(A) {
        for (
          var $ =
              A < u.duration
                ? u.ease.call(null, A / u.duration)
                : (u.timer.restart(w), (u.state = _n), 1),
            D = -1,
            S = l.length;
          ++D < S;

        )
          l[D].call(t, $)
        u.state === _n && (u.on.call("end", t, t.__data__, u.index, u.group), w())
      }
      function w() {
        ;(u.state = oi), u.timer.stop(), delete o[n]
        for (var A in o) return
        delete t.__transition
      }
    }
    function br(t, n) {
      var u = t.__transition,
        o,
        l,
        f = !0,
        d
      if (u) {
        n = n == null ? null : n + ""
        for (d in u) {
          if ((o = u[d]).name !== n) {
            f = !1
            continue
          }
          ;(l = o.state > wr && o.state < _n),
            (o.state = oi),
            o.timer.stop(),
            o.on.call(l ? "interrupt" : "cancel", t, t.__data__, o.index, o.group),
            delete u[d]
        }
        f && delete t.__transition
      }
    }
    function Zi(t) {
      return this.each(function () {
        br(this, t)
      })
    }
    function Du(t, n) {
      var u, o
      return function () {
        var l = Pn(this, t),
          f = l.tween
        if (f !== u) {
          o = u = f
          for (var d = 0, m = o.length; d < m; ++d)
            if (o[d].name === n) {
              ;(o = o.slice()), o.splice(d, 1)
              break
            }
        }
        l.tween = o
      }
    }
    function Mu(t, n, u) {
      var o, l
      if (typeof u != "function") throw new Error()
      return function () {
        var f = Pn(this, t),
          d = f.tween
        if (d !== o) {
          l = (o = d).slice()
          for (var m = { name: n, value: u }, w = 0, A = l.length; w < A; ++w)
            if (l[w].name === n) {
              l[w] = m
              break
            }
          w === A && l.push(m)
        }
        f.tween = l
      }
    }
    function Bu(t, n) {
      var u = this._id
      if (((t += ""), arguments.length < 2)) {
        for (var o = Fn(this.node(), u).tween, l = 0, f = o.length, d; l < f; ++l)
          if ((d = o[l]).name === t) return d.value
        return null
      }
      return this.each((n == null ? Du : Mu)(u, t, n))
    }
    function wi(t, n, u) {
      var o = t._id
      return (
        t.each(function () {
          var l = Pn(this, o)
          ;(l.value || (l.value = {}))[n] = u.apply(this, arguments)
        }),
        function (l) {
          return Fn(l, o).value[n]
        }
      )
    }
    function tu(t, n) {
      var u
      return (typeof n == "number" ? Zn : n instanceof Ze ? Kr : (u = Ze(n)) ? ((n = u), Kr) : xu)(
        t,
        n,
      )
    }
    function Lu(t) {
      return function () {
        this.removeAttribute(t)
      }
    }
    function Nu(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }
    function Su(t, n, u) {
      var o,
        l = u + "",
        f
      return function () {
        var d = this.getAttribute(t)
        return d === l ? null : d === o ? f : (f = n((o = d), u))
      }
    }
    function Tu(t, n, u) {
      var o,
        l = u + "",
        f
      return function () {
        var d = this.getAttributeNS(t.space, t.local)
        return d === l ? null : d === o ? f : (f = n((o = d), u))
      }
    }
    function Fu(t, n, u) {
      var o, l, f
      return function () {
        var d,
          m = u(this),
          w
        return m == null
          ? void this.removeAttribute(t)
          : ((d = this.getAttribute(t)),
            (w = m + ""),
            d === w ? null : d === o && w === l ? f : ((l = w), (f = n((o = d), m))))
      }
    }
    function $u(t, n, u) {
      var o, l, f
      return function () {
        var d,
          m = u(this),
          w
        return m == null
          ? void this.removeAttributeNS(t.space, t.local)
          : ((d = this.getAttributeNS(t.space, t.local)),
            (w = m + ""),
            d === w ? null : d === o && w === l ? f : ((l = w), (f = n((o = d), m))))
      }
    }
    function Ou(t, n) {
      var u = ce(t),
        o = u === "transform" ? _u : tu
      return this.attrTween(
        t,
        typeof n == "function"
          ? (u.local ? $u : Fu)(u, o, wi(this, "attr." + t, n))
          : n == null
            ? (u.local ? Nu : Lu)(u)
            : (u.local ? Tu : Su)(u, o, n),
      )
    }
    function ju(t, n) {
      return function (u) {
        this.setAttribute(t, n.call(this, u))
      }
    }
    function qu(t, n) {
      return function (u) {
        this.setAttributeNS(t.space, t.local, n.call(this, u))
      }
    }
    function zu(t, n) {
      var u, o
      function l() {
        var f = n.apply(this, arguments)
        return f !== o && (u = (o = f) && qu(t, f)), u
      }
      return (l._value = n), l
    }
    function Pu(t, n) {
      var u, o
      function l() {
        var f = n.apply(this, arguments)
        return f !== o && (u = (o = f) && ju(t, f)), u
      }
      return (l._value = n), l
    }
    function Iu(t, n) {
      var u = "attr." + t
      if (arguments.length < 2) return (u = this.tween(u)) && u._value
      if (n == null) return this.tween(u, null)
      if (typeof n != "function") throw new Error()
      var o = ce(t)
      return this.tween(u, (o.local ? zu : Pu)(o, n))
    }
    function Ru(t, n) {
      return function () {
        yi(this, t).delay = +n.apply(this, arguments)
      }
    }
    function Vu(t, n) {
      return (
        (n = +n),
        function () {
          yi(this, t).delay = n
        }
      )
    }
    function Hu(t) {
      var n = this._id
      return arguments.length
        ? this.each((typeof t == "function" ? Ru : Vu)(n, t))
        : Fn(this.node(), n).delay
    }
    function Uu(t, n) {
      return function () {
        Pn(this, t).duration = +n.apply(this, arguments)
      }
    }
    function Wu(t, n) {
      return (
        (n = +n),
        function () {
          Pn(this, t).duration = n
        }
      )
    }
    function Ku(t) {
      var n = this._id
      return arguments.length
        ? this.each((typeof t == "function" ? Uu : Wu)(n, t))
        : Fn(this.node(), n).duration
    }
    function Xu(t, n) {
      if (typeof n != "function") throw new Error()
      return function () {
        Pn(this, t).ease = n
      }
    }
    function Yu(t) {
      var n = this._id
      return arguments.length ? this.each(Xu(n, t)) : Fn(this.node(), n).ease
    }
    function Gu(t, n) {
      return function () {
        var u = n.apply(this, arguments)
        if (typeof u != "function") throw new Error()
        Pn(this, t).ease = u
      }
    }
    function Ju(t) {
      if (typeof t != "function") throw new Error()
      return this.each(Gu(this._id, t))
    }
    function Qu(t) {
      typeof t != "function" && (t = we(t))
      for (var n = this._groups, u = n.length, o = new Array(u), l = 0; l < u; ++l)
        for (var f = n[l], d = f.length, m = (o[l] = []), w, A = 0; A < d; ++A)
          (w = f[A]) && t.call(w, w.__data__, A, f) && m.push(w)
      return new Wn(o, this._parents, this._name, this._id)
    }
    function Zu(t) {
      if (t._id !== this._id) throw new Error()
      for (
        var n = this._groups,
          u = t._groups,
          o = n.length,
          l = u.length,
          f = Math.min(o, l),
          d = new Array(o),
          m = 0;
        m < f;
        ++m
      )
        for (var w = n[m], A = u[m], $ = w.length, D = (d[m] = new Array($)), S, P = 0; P < $; ++P)
          (S = w[P] || A[P]) && (D[P] = S)
      for (; m < o; ++m) d[m] = n[m]
      return new Wn(d, this._parents, this._name, this._id)
    }
    function to(t) {
      return (t + "")
        .trim()
        .split(/^|\s+/)
        .every(function (n) {
          var u = n.indexOf(".")
          return u >= 0 && (n = n.slice(0, u)), !n || n === "start"
        })
    }
    function eo(t, n, u) {
      var o,
        l,
        f = to(n) ? yi : Pn
      return function () {
        var d = f(this, t),
          m = d.on
        m !== o && (l = (o = m).copy()).on(n, u), (d.on = l)
      }
    }
    function no(t, n) {
      var u = this._id
      return arguments.length < 2 ? Fn(this.node(), u).on.on(t) : this.each(eo(u, t, n))
    }
    function ro(t) {
      return function () {
        var n = this.parentNode
        for (var u in this.__transition) if (+u !== t) return
        n && n.removeChild(this)
      }
    }
    function io() {
      return this.on("end.remove", ro(this._id))
    }
    function eu(t) {
      var n = this._name,
        u = this._id
      typeof t != "function" && (t = _e(t))
      for (var o = this._groups, l = o.length, f = new Array(l), d = 0; d < l; ++d)
        for (var m = o[d], w = m.length, A = (f[d] = new Array(w)), $, D, S = 0; S < w; ++S)
          ($ = m[S]) &&
            (D = t.call($, $.__data__, S, m)) &&
            ("__data__" in $ && (D.__data__ = $.__data__),
            (A[S] = D),
            ar(A[S], n, u, S, A, Fn($, u)))
      return new Wn(f, this._parents, n, u)
    }
    function uo(t) {
      var n = this._name,
        u = this._id
      typeof t != "function" && (t = sn(t))
      for (var o = this._groups, l = o.length, f = [], d = [], m = 0; m < l; ++m)
        for (var w = o[m], A = w.length, $, D = 0; D < A; ++D)
          if (($ = w[D])) {
            for (
              var S = t.call($, $.__data__, D, w), P, Q = Fn($, u), tt = 0, ut = S.length;
              tt < ut;
              ++tt
            )
              (P = S[tt]) && ar(P, n, u, tt, S, Q)
            f.push(S), d.push($)
          }
      return new Wn(f, d, n, u)
    }
    var oo = Rt.prototype.constructor
    function ao() {
      return new oo(this._groups, this._parents)
    }
    function so(t, n) {
      var u, o, l
      return function () {
        var f = Et(this, t),
          d = (this.style.removeProperty(t), Et(this, t))
        return f === d ? null : f === u && d === o ? l : (l = n((u = f), (o = d)))
      }
    }
    function nu(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }
    function lo(t, n, u) {
      var o,
        l = u + "",
        f
      return function () {
        var d = Et(this, t)
        return d === l ? null : d === o ? f : (f = n((o = d), u))
      }
    }
    function co(t, n, u) {
      var o, l, f
      return function () {
        var d = Et(this, t),
          m = u(this),
          w = m + ""
        return (
          m == null && (w = m = (this.style.removeProperty(t), Et(this, t))),
          d === w ? null : d === o && w === l ? f : ((l = w), (f = n((o = d), m)))
        )
      }
    }
    function fo(t, n) {
      var u,
        o,
        l,
        f = "style." + n,
        d = "end." + f,
        m
      return function () {
        var w = Pn(this, t),
          A = w.on,
          $ = w.value[f] == null ? m || (m = nu(n)) : void 0
        ;(A !== u || l !== $) && (o = (u = A).copy()).on(d, (l = $)), (w.on = o)
      }
    }
    function ho(t, n, u) {
      var o = (t += "") == "transform" ? Eu : tu
      return n == null
        ? this.styleTween(t, so(t, o)).on("end.style." + t, nu(t))
        : typeof n == "function"
          ? this.styleTween(t, co(t, o, wi(this, "style." + t, n))).each(fo(this._id, t))
          : this.styleTween(t, lo(t, o, n), u).on("end.style." + t, null)
    }
    function po(t, n, u) {
      return function (o) {
        this.style.setProperty(t, n.call(this, o), u)
      }
    }
    function go(t, n, u) {
      var o, l
      function f() {
        var d = n.apply(this, arguments)
        return d !== l && (o = (l = d) && po(t, d, u)), o
      }
      return (f._value = n), f
    }
    function mo(t, n, u) {
      var o = "style." + (t += "")
      if (arguments.length < 2) return (o = this.tween(o)) && o._value
      if (n == null) return this.tween(o, null)
      if (typeof n != "function") throw new Error()
      return this.tween(o, go(t, n, u ?? ""))
    }
    function vo(t) {
      return function () {
        this.textContent = t
      }
    }
    function yo(t) {
      return function () {
        var n = t(this)
        this.textContent = n ?? ""
      }
    }
    function wo(t) {
      return this.tween(
        "text",
        typeof t == "function" ? yo(wi(this, "text", t)) : vo(t == null ? "" : t + ""),
      )
    }
    function xo(t) {
      return function (n) {
        this.textContent = t.call(this, n)
      }
    }
    function Hn(t) {
      var n, u
      function o() {
        var l = t.apply(this, arguments)
        return l !== u && (n = (u = l) && xo(l)), n
      }
      return (o._value = t), o
    }
    function bo(t) {
      var n = "text"
      if (arguments.length < 1) return (n = this.tween(n)) && n._value
      if (t == null) return this.tween(n, null)
      if (typeof t != "function") throw new Error()
      return this.tween(n, Hn(t))
    }
    function ru() {
      for (
        var t = this._name, n = this._id, u = iu(), o = this._groups, l = o.length, f = 0;
        f < l;
        ++f
      )
        for (var d = o[f], m = d.length, w, A = 0; A < m; ++A)
          if ((w = d[A])) {
            var $ = Fn(w, n)
            ar(w, t, u, A, d, {
              time: $.time + $.delay + $.duration,
              delay: 0,
              duration: $.duration,
              ease: $.ease,
            })
          }
      return new Wn(o, this._parents, t, u)
    }
    function Un() {
      var t,
        n,
        u = this,
        o = u._id,
        l = u.size()
      return new Promise(function (f, d) {
        var m = { value: d },
          w = {
            value: function () {
              --l === 0 && f()
            },
          }
        u.each(function () {
          var A = Pn(this, o),
            $ = A.on
          $ !== t &&
            ((n = (t = $).copy()), n._.cancel.push(m), n._.interrupt.push(m), n._.end.push(w)),
            (A.on = n)
        }),
          l === 0 && f()
      })
    }
    var Eo = 0
    function Wn(t, n, u, o) {
      ;(this._groups = t), (this._parents = n), (this._name = u), (this._id = o)
    }
    function _o(t) {
      return Rt().transition(t)
    }
    function iu() {
      return ++Eo
    }
    var nr = Rt.prototype
    Wn.prototype = _o.prototype = {
      constructor: Wn,
      select: eu,
      selectAll: uo,
      selectChild: nr.selectChild,
      selectChildren: nr.selectChildren,
      filter: Qu,
      merge: Zu,
      selection: ao,
      transition: ru,
      call: nr.call,
      nodes: nr.nodes,
      node: nr.node,
      size: nr.size,
      empty: nr.empty,
      each: nr.each,
      on: no,
      attr: Ou,
      attrTween: Iu,
      style: ho,
      styleTween: mo,
      text: wo,
      textTween: bo,
      remove: io,
      tween: Bu,
      delay: Hu,
      duration: Ku,
      ease: Yu,
      easeVarying: Ju,
      end: Un,
      [Symbol.iterator]: nr[Symbol.iterator],
    }
    function ia(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }
    var ua = { time: null, delay: 0, duration: 250, ease: ia }
    function uu(t, n) {
      for (var u; !(u = t.__transition) || !(u = u[n]); )
        if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`)
      return u
    }
    function Ao(t) {
      var n, u
      t instanceof Wn
        ? ((n = t._id), (t = t._name))
        : ((n = iu()), ((u = ua).time = ti()), (t = t == null ? null : t + ""))
      for (var o = this._groups, l = o.length, f = 0; f < l; ++f)
        for (var d = o[f], m = d.length, w, A = 0; A < m; ++A)
          (w = d[A]) && ar(w, t, n, A, d, u || uu(w, n))
      return new Wn(o, this._parents, t, n)
    }
    ;(Rt.prototype.interrupt = Zi), (Rt.prototype.transition = Ao)
    var { abs: ha, max: da, min: pa } = Math
    function ai(t) {
      return [+t[0], +t[1]]
    }
    function ko(t) {
      return [ai(t[0]), ai(t[1])]
    }
    var oa = {
        name: "x",
        handles: ["w", "e"].map(xi),
        input: function (t, n) {
          return t == null
            ? null
            : [
                [+t[0], n[0][1]],
                [+t[1], n[1][1]],
              ]
        },
        output: function (t) {
          return t && [t[0][0], t[1][0]]
        },
      },
      Co = {
        name: "y",
        handles: ["n", "s"].map(xi),
        input: function (t, n) {
          return t == null
            ? null
            : [
                [n[0][0], +t[0]],
                [n[1][0], +t[1]],
              ]
        },
        output: function (t) {
          return t && [t[0][1], t[1][1]]
        },
      },
      aa = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(xi),
        input: function (t) {
          return t == null ? null : ko(t)
        },
        output: function (t) {
          return t
        },
      }
    function xi(t) {
      return { type: t }
    }
    function Do(t, n) {
      var u,
        o = 1
      t == null && (t = 0), n == null && (n = 0)
      function l() {
        var f,
          d = u.length,
          m,
          w = 0,
          A = 0
        for (f = 0; f < d; ++f) (m = u[f]), (w += m.x), (A += m.y)
        for (w = (w / d - t) * o, A = (A / d - n) * o, f = 0; f < d; ++f)
          (m = u[f]), (m.x -= w), (m.y -= A)
      }
      return (
        (l.initialize = function (f) {
          u = f
        }),
        (l.x = function (f) {
          return arguments.length ? ((t = +f), l) : t
        }),
        (l.y = function (f) {
          return arguments.length ? ((n = +f), l) : n
        }),
        (l.strength = function (f) {
          return arguments.length ? ((o = +f), l) : o
        }),
        l
      )
    }
    function Mo(t) {
      let n = +this._x.call(null, t),
        u = +this._y.call(null, t)
      return ln(this.cover(n, u), n, u, t)
    }
    function ln(t, n, u, o) {
      if (isNaN(n) || isNaN(u)) return t
      var l,
        f = t._root,
        d = { data: o },
        m = t._x0,
        w = t._y0,
        A = t._x1,
        $ = t._y1,
        D,
        S,
        P,
        Q,
        tt,
        ut,
        rt,
        _t
      if (!f) return (t._root = d), t
      for (; f.length; )
        if (
          ((tt = n >= (D = (m + A) / 2)) ? (m = D) : (A = D),
          (ut = u >= (S = (w + $) / 2)) ? (w = S) : ($ = S),
          (l = f),
          !(f = f[(rt = (ut << 1) | tt)]))
        )
          return (l[rt] = d), t
      if (((P = +t._x.call(null, f.data)), (Q = +t._y.call(null, f.data)), n === P && u === Q))
        return (d.next = f), l ? (l[rt] = d) : (t._root = d), t
      do
        (l = l ? (l[rt] = new Array(4)) : (t._root = new Array(4))),
          (tt = n >= (D = (m + A) / 2)) ? (m = D) : (A = D),
          (ut = u >= (S = (w + $) / 2)) ? (w = S) : ($ = S)
      while ((rt = (ut << 1) | tt) === (_t = ((Q >= S) << 1) | (P >= D)))
      return (l[_t] = f), (l[rt] = d), t
    }
    function Bo(t) {
      var n,
        u,
        o = t.length,
        l,
        f,
        d = new Array(o),
        m = new Array(o),
        w = 1 / 0,
        A = 1 / 0,
        $ = -1 / 0,
        D = -1 / 0
      for (u = 0; u < o; ++u)
        isNaN((l = +this._x.call(null, (n = t[u])))) ||
          isNaN((f = +this._y.call(null, n))) ||
          ((d[u] = l),
          (m[u] = f),
          l < w && (w = l),
          l > $ && ($ = l),
          f < A && (A = f),
          f > D && (D = f))
      if (w > $ || A > D) return this
      for (this.cover(w, A).cover($, D), u = 0; u < o; ++u) ln(this, d[u], m[u], t[u])
      return this
    }
    function Lo(t, n) {
      if (isNaN((t = +t)) || isNaN((n = +n))) return this
      var u = this._x0,
        o = this._y0,
        l = this._x1,
        f = this._y1
      if (isNaN(u)) (l = (u = Math.floor(t)) + 1), (f = (o = Math.floor(n)) + 1)
      else {
        for (var d = l - u || 1, m = this._root, w, A; u > t || t >= l || o > n || n >= f; )
          switch (
            ((A = ((n < o) << 1) | (t < u)), (w = new Array(4)), (w[A] = m), (m = w), (d *= 2), A)
          ) {
            case 0:
              ;(l = u + d), (f = o + d)
              break
            case 1:
              ;(u = l - d), (f = o + d)
              break
            case 2:
              ;(l = u + d), (o = f - d)
              break
            case 3:
              ;(u = l - d), (o = f - d)
              break
          }
        this._root && this._root.length && (this._root = m)
      }
      return (this._x0 = u), (this._y0 = o), (this._x1 = l), (this._y1 = f), this
    }
    function No() {
      var t = []
      return (
        this.visit(function (n) {
          if (!n.length)
            do t.push(n.data)
            while ((n = n.next))
        }),
        t
      )
    }
    function So(t) {
      return arguments.length
        ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
        : isNaN(this._x0)
          ? void 0
          : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ]
    }
    function dn(t, n, u, o, l) {
      ;(this.node = t), (this.x0 = n), (this.y0 = u), (this.x1 = o), (this.y1 = l)
    }
    function To(t, n, u) {
      var o,
        l = this._x0,
        f = this._y0,
        d,
        m,
        w,
        A,
        $ = this._x1,
        D = this._y1,
        S = [],
        P = this._root,
        Q,
        tt
      for (
        P && S.push(new dn(P, l, f, $, D)),
          u == null ? (u = 1 / 0) : ((l = t - u), (f = n - u), ($ = t + u), (D = n + u), (u *= u));
        (Q = S.pop());

      )
        if (
          !(!(P = Q.node) || (d = Q.x0) > $ || (m = Q.y0) > D || (w = Q.x1) < l || (A = Q.y1) < f)
        )
          if (P.length) {
            var ut = (d + w) / 2,
              rt = (m + A) / 2
            S.push(
              new dn(P[3], ut, rt, w, A),
              new dn(P[2], d, rt, ut, A),
              new dn(P[1], ut, m, w, rt),
              new dn(P[0], d, m, ut, rt),
            ),
              (tt = ((n >= rt) << 1) | (t >= ut)) &&
                ((Q = S[S.length - 1]),
                (S[S.length - 1] = S[S.length - 1 - tt]),
                (S[S.length - 1 - tt] = Q))
          } else {
            var _t = t - +this._x.call(null, P.data),
              It = n - +this._y.call(null, P.data),
              st = _t * _t + It * It
            if (st < u) {
              var H = Math.sqrt((u = st))
              ;(l = t - H), (f = n - H), ($ = t + H), (D = n + H), (o = P.data)
            }
          }
      return o
    }
    function Fo(t) {
      if (isNaN(($ = +this._x.call(null, t))) || isNaN((D = +this._y.call(null, t)))) return this
      var n,
        u = this._root,
        o,
        l,
        f,
        d = this._x0,
        m = this._y0,
        w = this._x1,
        A = this._y1,
        $,
        D,
        S,
        P,
        Q,
        tt,
        ut,
        rt
      if (!u) return this
      if (u.length)
        for (;;) {
          if (
            ((Q = $ >= (S = (d + w) / 2)) ? (d = S) : (w = S),
            (tt = D >= (P = (m + A) / 2)) ? (m = P) : (A = P),
            (n = u),
            !(u = u[(ut = (tt << 1) | Q)]))
          )
            return this
          if (!u.length) break
          ;(n[(ut + 1) & 3] || n[(ut + 2) & 3] || n[(ut + 3) & 3]) && ((o = n), (rt = ut))
        }
      for (; u.data !== t; ) if (((l = u), !(u = u.next))) return this
      return (
        (f = u.next) && delete u.next,
        l
          ? (f ? (l.next = f) : delete l.next, this)
          : n
            ? (f ? (n[ut] = f) : delete n[ut],
              (u = n[0] || n[1] || n[2] || n[3]) &&
                u === (n[3] || n[2] || n[1] || n[0]) &&
                !u.length &&
                (o ? (o[rt] = u) : (this._root = u)),
              this)
            : ((this._root = f), this)
      )
    }
    function $o(t) {
      for (var n = 0, u = t.length; n < u; ++n) this.remove(t[n])
      return this
    }
    function Oo() {
      return this._root
    }
    function jo() {
      var t = 0
      return (
        this.visit(function (n) {
          if (!n.length)
            do ++t
            while ((n = n.next))
        }),
        t
      )
    }
    function qo(t) {
      var n = [],
        u,
        o = this._root,
        l,
        f,
        d,
        m,
        w
      for (o && n.push(new dn(o, this._x0, this._y0, this._x1, this._y1)); (u = n.pop()); )
        if (!t((o = u.node), (f = u.x0), (d = u.y0), (m = u.x1), (w = u.y1)) && o.length) {
          var A = (f + m) / 2,
            $ = (d + w) / 2
          ;(l = o[3]) && n.push(new dn(l, A, $, m, w)),
            (l = o[2]) && n.push(new dn(l, f, $, A, w)),
            (l = o[1]) && n.push(new dn(l, A, d, m, $)),
            (l = o[0]) && n.push(new dn(l, f, d, A, $))
        }
      return this
    }
    function ou(t) {
      var n = [],
        u = [],
        o
      for (
        this._root && n.push(new dn(this._root, this._x0, this._y0, this._x1, this._y1));
        (o = n.pop());

      ) {
        var l = o.node
        if (l.length) {
          var f,
            d = o.x0,
            m = o.y0,
            w = o.x1,
            A = o.y1,
            $ = (d + w) / 2,
            D = (m + A) / 2
          ;(f = l[0]) && n.push(new dn(f, d, m, $, D)),
            (f = l[1]) && n.push(new dn(f, $, m, w, D)),
            (f = l[2]) && n.push(new dn(f, d, D, $, A)),
            (f = l[3]) && n.push(new dn(f, $, D, w, A))
        }
        u.push(o)
      }
      for (; (o = u.pop()); ) t(o.node, o.x0, o.y0, o.x1, o.y1)
      return this
    }
    function bi(t) {
      return t[0]
    }
    function au(t) {
      return arguments.length ? ((this._x = t), this) : this._x
    }
    function pn(t) {
      return t[1]
    }
    function Or(t) {
      return arguments.length ? ((this._y = t), this) : this._y
    }
    function sr(t, n, u) {
      var o = new Ei(n ?? bi, u ?? pn, NaN, NaN, NaN, NaN)
      return t == null ? o : o.addAll(t)
    }
    function Ei(t, n, u, o, l, f) {
      ;(this._x = t),
        (this._y = n),
        (this._x0 = u),
        (this._y0 = o),
        (this._x1 = l),
        (this._y1 = f),
        (this._root = void 0)
    }
    function _i(t) {
      for (var n = { data: t.data }, u = n; (t = t.next); ) u = u.next = { data: t.data }
      return n
    }
    var gn = (sr.prototype = Ei.prototype)
    ;(gn.copy = function () {
      var t = new Ei(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        n = this._root,
        u,
        o
      if (!n) return t
      if (!n.length) return (t._root = _i(n)), t
      for (u = [{ source: n, target: (t._root = new Array(4)) }]; (n = u.pop()); )
        for (var l = 0; l < 4; ++l)
          (o = n.source[l]) &&
            (o.length
              ? u.push({ source: o, target: (n.target[l] = new Array(4)) })
              : (n.target[l] = _i(o)))
      return t
    }),
      (gn.add = Mo),
      (gn.addAll = Bo),
      (gn.cover = Lo),
      (gn.data = No),
      (gn.extent = So),
      (gn.find = To),
      (gn.remove = Fo),
      (gn.removeAll = $o),
      (gn.root = Oo),
      (gn.size = jo),
      (gn.visit = qo),
      (gn.visitAfter = ou),
      (gn.x = au),
      (gn.y = Or)
    function jr(t) {
      return function () {
        return t
      }
    }
    function Er(t) {
      return (t() - 0.5) * 1e-6
    }
    function zo(t) {
      return t.index
    }
    function su(t, n) {
      var u = t.get(n)
      if (!u) throw new Error("node not found: " + n)
      return u
    }
    function Po(t) {
      var n = zo,
        u = D,
        o,
        l = jr(30),
        f,
        d,
        m,
        w,
        A,
        $ = 1
      t == null && (t = [])
      function D(ut) {
        return 1 / Math.min(m[ut.source.index], m[ut.target.index])
      }
      function S(ut) {
        for (var rt = 0, _t = t.length; rt < $; ++rt)
          for (var It = 0, st, H, wt, at, kt, $t, Ot; It < _t; ++It)
            (st = t[It]),
              (H = st.source),
              (wt = st.target),
              (at = wt.x + wt.vx - H.x - H.vx || Er(A)),
              (kt = wt.y + wt.vy - H.y - H.vy || Er(A)),
              ($t = Math.sqrt(at * at + kt * kt)),
              ($t = (($t - f[It]) / $t) * ut * o[It]),
              (at *= $t),
              (kt *= $t),
              (wt.vx -= at * (Ot = w[It])),
              (wt.vy -= kt * Ot),
              (H.vx += at * (Ot = 1 - Ot)),
              (H.vy += kt * Ot)
      }
      function P() {
        if (d) {
          var ut,
            rt = d.length,
            _t = t.length,
            It = new Map(d.map((H, wt) => [n(H, wt, d), H])),
            st
          for (ut = 0, m = new Array(rt); ut < _t; ++ut)
            (st = t[ut]),
              (st.index = ut),
              typeof st.source != "object" && (st.source = su(It, st.source)),
              typeof st.target != "object" && (st.target = su(It, st.target)),
              (m[st.source.index] = (m[st.source.index] || 0) + 1),
              (m[st.target.index] = (m[st.target.index] || 0) + 1)
          for (ut = 0, w = new Array(_t); ut < _t; ++ut)
            (st = t[ut]), (w[ut] = m[st.source.index] / (m[st.source.index] + m[st.target.index]))
          ;(o = new Array(_t)), Q(), (f = new Array(_t)), tt()
        }
      }
      function Q() {
        if (d) for (var ut = 0, rt = t.length; ut < rt; ++ut) o[ut] = +u(t[ut], ut, t)
      }
      function tt() {
        if (d) for (var ut = 0, rt = t.length; ut < rt; ++ut) f[ut] = +l(t[ut], ut, t)
      }
      return (
        (S.initialize = function (ut, rt) {
          ;(d = ut), (A = rt), P()
        }),
        (S.links = function (ut) {
          return arguments.length ? ((t = ut), P(), S) : t
        }),
        (S.id = function (ut) {
          return arguments.length ? ((n = ut), S) : n
        }),
        (S.iterations = function (ut) {
          return arguments.length ? (($ = +ut), S) : $
        }),
        (S.strength = function (ut) {
          return arguments.length ? ((u = typeof ut == "function" ? ut : jr(+ut)), Q(), S) : u
        }),
        (S.distance = function (ut) {
          return arguments.length ? ((l = typeof ut == "function" ? ut : jr(+ut)), tt(), S) : l
        }),
        S
      )
    }
    function Io() {
      let t = 1
      return () => (t = (1664525 * t + 1013904223) % 4294967296) / 4294967296
    }
    function Ro(t) {
      return t.x
    }
    function si(t) {
      return t.y
    }
    var Vo = 10,
      Kn = Math.PI * (3 - Math.sqrt(5))
    function Ai(t) {
      var n,
        u = 1,
        o = 0.001,
        l = 1 - Math.pow(o, 1 / 300),
        f = 0,
        d = 0.6,
        m = new Map(),
        w = Fr(D),
        A = Ge("tick", "end"),
        $ = Io()
      t == null && (t = [])
      function D() {
        S(), A.call("tick", n), u < o && (w.stop(), A.call("end", n))
      }
      function S(tt) {
        var ut,
          rt = t.length,
          _t
        tt === void 0 && (tt = 1)
        for (var It = 0; It < tt; ++It)
          for (
            u += (f - u) * l,
              m.forEach(function (st) {
                st(u)
              }),
              ut = 0;
            ut < rt;
            ++ut
          )
            (_t = t[ut]),
              _t.fx == null ? (_t.x += _t.vx *= d) : ((_t.x = _t.fx), (_t.vx = 0)),
              _t.fy == null ? (_t.y += _t.vy *= d) : ((_t.y = _t.fy), (_t.vy = 0))
        return n
      }
      function P() {
        for (var tt = 0, ut = t.length, rt; tt < ut; ++tt) {
          if (
            ((rt = t[tt]),
            (rt.index = tt),
            rt.fx != null && (rt.x = rt.fx),
            rt.fy != null && (rt.y = rt.fy),
            isNaN(rt.x) || isNaN(rt.y))
          ) {
            var _t = Vo * Math.sqrt(0.5 + tt),
              It = tt * Kn
            ;(rt.x = _t * Math.cos(It)), (rt.y = _t * Math.sin(It))
          }
          ;(isNaN(rt.vx) || isNaN(rt.vy)) && (rt.vx = rt.vy = 0)
        }
      }
      function Q(tt) {
        return tt.initialize && tt.initialize(t, $), tt
      }
      return (
        P(),
        (n = {
          tick: S,
          restart: function () {
            return w.restart(D), n
          },
          stop: function () {
            return w.stop(), n
          },
          nodes: function (tt) {
            return arguments.length ? ((t = tt), P(), m.forEach(Q), n) : t
          },
          alpha: function (tt) {
            return arguments.length ? ((u = +tt), n) : u
          },
          alphaMin: function (tt) {
            return arguments.length ? ((o = +tt), n) : o
          },
          alphaDecay: function (tt) {
            return arguments.length ? ((l = +tt), n) : +l
          },
          alphaTarget: function (tt) {
            return arguments.length ? ((f = +tt), n) : f
          },
          velocityDecay: function (tt) {
            return arguments.length ? ((d = 1 - tt), n) : 1 - d
          },
          randomSource: function (tt) {
            return arguments.length ? (($ = tt), m.forEach(Q), n) : $
          },
          force: function (tt, ut) {
            return arguments.length > 1
              ? (ut == null ? m.delete(tt) : m.set(tt, Q(ut)), n)
              : m.get(tt)
          },
          find: function (tt, ut, rt) {
            var _t = 0,
              It = t.length,
              st,
              H,
              wt,
              at,
              kt
            for (rt == null ? (rt = 1 / 0) : (rt *= rt), _t = 0; _t < It; ++_t)
              (at = t[_t]),
                (st = tt - at.x),
                (H = ut - at.y),
                (wt = st * st + H * H),
                wt < rt && ((kt = at), (rt = wt))
            return kt
          },
          on: function (tt, ut) {
            return arguments.length > 1 ? (A.on(tt, ut), n) : A.on(tt)
          },
        })
      )
    }
    function Ho() {
      var t,
        n,
        u,
        o,
        l = jr(-30),
        f,
        d = 1,
        m = 1 / 0,
        w = 0.81
      function A(P) {
        var Q,
          tt = t.length,
          ut = sr(t, Ro, si).visitAfter(D)
        for (o = P, Q = 0; Q < tt; ++Q) (n = t[Q]), ut.visit(S)
      }
      function $() {
        if (t) {
          var P,
            Q = t.length,
            tt
          for (f = new Array(Q), P = 0; P < Q; ++P) (tt = t[P]), (f[tt.index] = +l(tt, P, t))
        }
      }
      function D(P) {
        var Q = 0,
          tt,
          ut,
          rt = 0,
          _t,
          It,
          st
        if (P.length) {
          for (_t = It = st = 0; st < 4; ++st)
            (tt = P[st]) &&
              (ut = Math.abs(tt.value)) &&
              ((Q += tt.value), (rt += ut), (_t += ut * tt.x), (It += ut * tt.y))
          ;(P.x = _t / rt), (P.y = It / rt)
        } else {
          ;(tt = P), (tt.x = tt.data.x), (tt.y = tt.data.y)
          do Q += f[tt.data.index]
          while ((tt = tt.next))
        }
        P.value = Q
      }
      function S(P, Q, tt, ut) {
        if (!P.value) return !0
        var rt = P.x - n.x,
          _t = P.y - n.y,
          It = ut - Q,
          st = rt * rt + _t * _t
        if ((It * It) / w < st)
          return (
            st < m &&
              (rt === 0 && ((rt = Er(u)), (st += rt * rt)),
              _t === 0 && ((_t = Er(u)), (st += _t * _t)),
              st < d && (st = Math.sqrt(d * st)),
              (n.vx += (rt * P.value * o) / st),
              (n.vy += (_t * P.value * o) / st)),
            !0
          )
        if (!(P.length || st >= m)) {
          ;(P.data !== n || P.next) &&
            (rt === 0 && ((rt = Er(u)), (st += rt * rt)),
            _t === 0 && ((_t = Er(u)), (st += _t * _t)),
            st < d && (st = Math.sqrt(d * st)))
          do
            P.data !== n &&
              ((It = (f[P.data.index] * o) / st), (n.vx += rt * It), (n.vy += _t * It))
          while ((P = P.next))
        }
      }
      return (
        (A.initialize = function (P, Q) {
          ;(t = P), (u = Q), $()
        }),
        (A.strength = function (P) {
          return arguments.length ? ((l = typeof P == "function" ? P : jr(+P)), $(), A) : l
        }),
        (A.distanceMin = function (P) {
          return arguments.length ? ((d = P * P), A) : Math.sqrt(d)
        }),
        (A.distanceMax = function (P) {
          return arguments.length ? ((m = P * P), A) : Math.sqrt(m)
        }),
        (A.theta = function (P) {
          return arguments.length ? ((w = P * P), A) : Math.sqrt(w)
        }),
        A
      )
    }
    var _r = (t) => () => t
    function qr(t, { sourceEvent: n, target: u, transform: o, dispatch: l }) {
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        target: { value: u, enumerable: !0, configurable: !0 },
        transform: { value: o, enumerable: !0, configurable: !0 },
        _: { value: l },
      })
    }
    function Xn(t, n, u) {
      ;(this.k = t), (this.x = n), (this.y = u)
    }
    Xn.prototype = {
      constructor: Xn,
      scale: function (t) {
        return t === 1 ? this : new Xn(this.k * t, this.x, this.y)
      },
      translate: function (t, n) {
        return (t === 0) & (n === 0)
          ? this
          : new Xn(this.k, this.x + this.k * t, this.y + this.k * n)
      },
      apply: function (t) {
        return [t[0] * this.k + this.x, t[1] * this.k + this.y]
      },
      applyX: function (t) {
        return t * this.k + this.x
      },
      applyY: function (t) {
        return t * this.k + this.y
      },
      invert: function (t) {
        return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
      },
      invertX: function (t) {
        return (t - this.x) / this.k
      },
      invertY: function (t) {
        return (t - this.y) / this.k
      },
      rescaleX: function (t) {
        return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
      },
      rescaleY: function (t) {
        return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
      },
      toString: function () {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
      },
    }
    var ki = new Xn(1, 0, 0)
    lu.prototype = Xn.prototype
    function lu(t) {
      for (; !t.__zoom; ) if (!(t = t.parentNode)) return ki
      return t.__zoom
    }
    function Ci(t) {
      t.stopImmediatePropagation()
    }
    function zr(t) {
      t.preventDefault(), t.stopImmediatePropagation()
    }
    function Uo(t) {
      return (!t.ctrlKey || t.type === "wheel") && !t.button
    }
    function Wo() {
      var t = this
      return t instanceof SVGElement
        ? ((t = t.ownerSVGElement || t),
          t.hasAttribute("viewBox")
            ? ((t = t.viewBox.baseVal),
              [
                [t.x, t.y],
                [t.x + t.width, t.y + t.height],
              ])
            : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value],
              ])
        : [
            [0, 0],
            [t.clientWidth, t.clientHeight],
          ]
    }
    function cu() {
      return this.__zoom || ki
    }
    function fu(t) {
      return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) * (t.ctrlKey ? 10 : 1)
    }
    function sa() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function Ko(t, n, u) {
      var o = t.invertX(n[0][0]) - u[0][0],
        l = t.invertX(n[1][0]) - u[1][0],
        f = t.invertY(n[0][1]) - u[0][1],
        d = t.invertY(n[1][1]) - u[1][1]
      return t.translate(
        l > o ? (o + l) / 2 : Math.min(0, o) || Math.max(0, l),
        d > f ? (f + d) / 2 : Math.min(0, f) || Math.max(0, d),
      )
    }
    function la() {
      var t = Uo,
        n = Wo,
        u = Ko,
        o = fu,
        l = sa,
        f = [0, 1 / 0],
        d = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0],
        ],
        m = 250,
        w = Zr,
        A = Ge("start", "zoom", "end"),
        $,
        D,
        S,
        P = 500,
        Q = 150,
        tt = 0,
        ut = 10
      function rt(Y) {
        Y.property("__zoom", cu)
          .on("wheel.zoom", kt, { passive: !1 })
          .on("mousedown.zoom", $t)
          .on("dblclick.zoom", Ot)
          .filter(l)
          .on("touchstart.zoom", gt)
          .on("touchmove.zoom", Wt)
          .on("touchend.zoom touchcancel.zoom", ee)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      ;(rt.transform = function (Y, At, mt, Mt) {
        var Ut = Y.selection ? Y.selection() : Y
        Ut.property("__zoom", cu),
          Y !== Ut
            ? H(Y, At, mt, Mt)
            : Ut.interrupt().each(function () {
                wt(this, arguments)
                  .event(Mt)
                  .start()
                  .zoom(null, typeof At == "function" ? At.apply(this, arguments) : At)
                  .end()
              })
      }),
        (rt.scaleBy = function (Y, At, mt, Mt) {
          rt.scaleTo(
            Y,
            function () {
              var Ut = this.__zoom.k,
                Xt = typeof At == "function" ? At.apply(this, arguments) : At
              return Ut * Xt
            },
            mt,
            Mt,
          )
        }),
        (rt.scaleTo = function (Y, At, mt, Mt) {
          rt.transform(
            Y,
            function () {
              var Ut = n.apply(this, arguments),
                Xt = this.__zoom,
                xt = mt == null ? st(Ut) : typeof mt == "function" ? mt.apply(this, arguments) : mt,
                re = Xt.invert(xt),
                ge = typeof At == "function" ? At.apply(this, arguments) : At
              return u(It(_t(Xt, ge), xt, re), Ut, d)
            },
            mt,
            Mt,
          )
        }),
        (rt.translateBy = function (Y, At, mt, Mt) {
          rt.transform(
            Y,
            function () {
              return u(
                this.__zoom.translate(
                  typeof At == "function" ? At.apply(this, arguments) : At,
                  typeof mt == "function" ? mt.apply(this, arguments) : mt,
                ),
                n.apply(this, arguments),
                d,
              )
            },
            null,
            Mt,
          )
        }),
        (rt.translateTo = function (Y, At, mt, Mt, Ut) {
          rt.transform(
            Y,
            function () {
              var Xt = n.apply(this, arguments),
                xt = this.__zoom,
                re = Mt == null ? st(Xt) : typeof Mt == "function" ? Mt.apply(this, arguments) : Mt
              return u(
                ki
                  .translate(re[0], re[1])
                  .scale(xt.k)
                  .translate(
                    typeof At == "function" ? -At.apply(this, arguments) : -At,
                    typeof mt == "function" ? -mt.apply(this, arguments) : -mt,
                  ),
                Xt,
                d,
              )
            },
            Mt,
            Ut,
          )
        })
      function _t(Y, At) {
        return (At = Math.max(f[0], Math.min(f[1], At))), At === Y.k ? Y : new Xn(At, Y.x, Y.y)
      }
      function It(Y, At, mt) {
        var Mt = At[0] - mt[0] * Y.k,
          Ut = At[1] - mt[1] * Y.k
        return Mt === Y.x && Ut === Y.y ? Y : new Xn(Y.k, Mt, Ut)
      }
      function st(Y) {
        return [(+Y[0][0] + +Y[1][0]) / 2, (+Y[0][1] + +Y[1][1]) / 2]
      }
      function H(Y, At, mt, Mt) {
        Y.on("start.zoom", function () {
          wt(this, arguments).event(Mt).start()
        })
          .on("interrupt.zoom end.zoom", function () {
            wt(this, arguments).event(Mt).end()
          })
          .tween("zoom", function () {
            var Ut = this,
              Xt = arguments,
              xt = wt(Ut, Xt).event(Mt),
              re = n.apply(Ut, Xt),
              ge = mt == null ? st(re) : typeof mt == "function" ? mt.apply(Ut, Xt) : mt,
              Ce = Math.max(re[1][0] - re[0][0], re[1][1] - re[0][1]),
              be = Ut.__zoom,
              Xe = typeof At == "function" ? At.apply(Ut, Xt) : At,
              $e = w(be.invert(ge).concat(Ce / be.k), Xe.invert(ge).concat(Ce / Xe.k))
            return function (Yn) {
              if (Yn === 1) Yn = Xe
              else {
                var lr = $e(Yn),
                  Zo = Ce / lr[2]
                Yn = new Xn(Zo, ge[0] - lr[0] * Zo, ge[1] - lr[1] * Zo)
              }
              xt.zoom(null, Yn)
            }
          })
      }
      function wt(Y, At, mt) {
        return (!mt && Y.__zooming) || new at(Y, At)
      }
      function at(Y, At) {
        ;(this.that = Y),
          (this.args = At),
          (this.active = 0),
          (this.sourceEvent = null),
          (this.extent = n.apply(Y, At)),
          (this.taps = 0)
      }
      at.prototype = {
        event: function (Y) {
          return Y && (this.sourceEvent = Y), this
        },
        start: function () {
          return ++this.active === 1 && ((this.that.__zooming = this), this.emit("start")), this
        },
        zoom: function (Y, At) {
          return (
            this.mouse && Y !== "mouse" && (this.mouse[1] = At.invert(this.mouse[0])),
            this.touch0 && Y !== "touch" && (this.touch0[1] = At.invert(this.touch0[0])),
            this.touch1 && Y !== "touch" && (this.touch1[1] = At.invert(this.touch1[0])),
            (this.that.__zoom = At),
            this.emit("zoom"),
            this
          )
        },
        end: function () {
          return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this
        },
        emit: function (Y) {
          var At = le(this.that).datum()
          A.call(
            Y,
            this.that,
            new qr(Y, {
              sourceEvent: this.sourceEvent,
              target: rt,
              type: Y,
              transform: this.that.__zoom,
              dispatch: A,
            }),
            At,
          )
        },
      }
      function kt(Y, ...At) {
        if (!t.apply(this, arguments)) return
        var mt = wt(this, At).event(Y),
          Mt = this.__zoom,
          Ut = Math.max(f[0], Math.min(f[1], Mt.k * Math.pow(2, o.apply(this, arguments)))),
          Xt = Qt(Y)
        if (mt.wheel)
          (mt.mouse[0][0] !== Xt[0] || mt.mouse[0][1] !== Xt[1]) &&
            (mt.mouse[1] = Mt.invert((mt.mouse[0] = Xt))),
            clearTimeout(mt.wheel)
        else {
          if (Mt.k === Ut) return
          ;(mt.mouse = [Xt, Mt.invert(Xt)]), br(this), mt.start()
        }
        zr(Y),
          (mt.wheel = setTimeout(xt, Q)),
          mt.zoom("mouse", u(It(_t(Mt, Ut), mt.mouse[0], mt.mouse[1]), mt.extent, d))
        function xt() {
          ;(mt.wheel = null), mt.end()
        }
      }
      function $t(Y, ...At) {
        if (S || !t.apply(this, arguments)) return
        var mt = Y.currentTarget,
          Mt = wt(this, At, !0).event(Y),
          Ut = le(Y.view).on("mousemove.zoom", ge, !0).on("mouseup.zoom", Ce, !0),
          Xt = Qt(Y, mt),
          xt = Y.clientX,
          re = Y.clientY
        Bi(Y.view), Ci(Y), (Mt.mouse = [Xt, this.__zoom.invert(Xt)]), br(this), Mt.start()
        function ge(be) {
          if ((zr(be), !Mt.moved)) {
            var Xe = be.clientX - xt,
              $e = be.clientY - re
            Mt.moved = Xe * Xe + $e * $e > tt
          }
          Mt.event(be).zoom(
            "mouse",
            u(It(Mt.that.__zoom, (Mt.mouse[0] = Qt(be, mt)), Mt.mouse[1]), Mt.extent, d),
          )
        }
        function Ce(be) {
          Ut.on("mousemove.zoom mouseup.zoom", null),
            Li(be.view, Mt.moved),
            zr(be),
            Mt.event(be).end()
        }
      }
      function Ot(Y, ...At) {
        if (t.apply(this, arguments)) {
          var mt = this.__zoom,
            Mt = Qt(Y.changedTouches ? Y.changedTouches[0] : Y, this),
            Ut = mt.invert(Mt),
            Xt = mt.k * (Y.shiftKey ? 0.5 : 2),
            xt = u(It(_t(mt, Xt), Mt, Ut), n.apply(this, At), d)
          zr(Y),
            m > 0
              ? le(this).transition().duration(m).call(H, xt, Mt, Y)
              : le(this).call(rt.transform, xt, Mt, Y)
        }
      }
      function gt(Y, ...At) {
        if (t.apply(this, arguments)) {
          var mt = Y.touches,
            Mt = mt.length,
            Ut = wt(this, At, Y.changedTouches.length === Mt).event(Y),
            Xt,
            xt,
            re,
            ge
          for (Ci(Y), xt = 0; xt < Mt; ++xt)
            (re = mt[xt]),
              (ge = Qt(re, this)),
              (ge = [ge, this.__zoom.invert(ge), re.identifier]),
              Ut.touch0
                ? !Ut.touch1 && Ut.touch0[2] !== ge[2] && ((Ut.touch1 = ge), (Ut.taps = 0))
                : ((Ut.touch0 = ge), (Xt = !0), (Ut.taps = 1 + !!$))
          $ && ($ = clearTimeout($)),
            Xt &&
              (Ut.taps < 2 &&
                ((D = ge[0]),
                ($ = setTimeout(function () {
                  $ = null
                }, P))),
              br(this),
              Ut.start())
        }
      }
      function Wt(Y, ...At) {
        if (this.__zooming) {
          var mt = wt(this, At).event(Y),
            Mt = Y.changedTouches,
            Ut = Mt.length,
            Xt,
            xt,
            re,
            ge
          for (zr(Y), Xt = 0; Xt < Ut; ++Xt)
            (xt = Mt[Xt]),
              (re = Qt(xt, this)),
              mt.touch0 && mt.touch0[2] === xt.identifier
                ? (mt.touch0[0] = re)
                : mt.touch1 && mt.touch1[2] === xt.identifier && (mt.touch1[0] = re)
          if (((xt = mt.that.__zoom), mt.touch1)) {
            var Ce = mt.touch0[0],
              be = mt.touch0[1],
              Xe = mt.touch1[0],
              $e = mt.touch1[1],
              Yn = (Yn = Xe[0] - Ce[0]) * Yn + (Yn = Xe[1] - Ce[1]) * Yn,
              lr = (lr = $e[0] - be[0]) * lr + (lr = $e[1] - be[1]) * lr
            ;(xt = _t(xt, Math.sqrt(Yn / lr))),
              (re = [(Ce[0] + Xe[0]) / 2, (Ce[1] + Xe[1]) / 2]),
              (ge = [(be[0] + $e[0]) / 2, (be[1] + $e[1]) / 2])
          } else if (mt.touch0) (re = mt.touch0[0]), (ge = mt.touch0[1])
          else return
          mt.zoom("touch", u(It(xt, re, ge), mt.extent, d))
        }
      }
      function ee(Y, ...At) {
        if (this.__zooming) {
          var mt = wt(this, At).event(Y),
            Mt = Y.changedTouches,
            Ut = Mt.length,
            Xt,
            xt
          for (
            Ci(Y),
              S && clearTimeout(S),
              S = setTimeout(function () {
                S = null
              }, P),
              Xt = 0;
            Xt < Ut;
            ++Xt
          )
            (xt = Mt[Xt]),
              mt.touch0 && mt.touch0[2] === xt.identifier
                ? delete mt.touch0
                : mt.touch1 && mt.touch1[2] === xt.identifier && delete mt.touch1
          if ((mt.touch1 && !mt.touch0 && ((mt.touch0 = mt.touch1), delete mt.touch1), mt.touch0))
            mt.touch0[1] = this.__zoom.invert(mt.touch0[0])
          else if (
            (mt.end(),
            mt.taps === 2 && ((xt = Qt(xt, this)), Math.hypot(D[0] - xt[0], D[1] - xt[1]) < ut))
          ) {
            var re = le(this).on("dblclick.zoom")
            re && re.apply(this, arguments)
          }
        }
      }
      return (
        (rt.wheelDelta = function (Y) {
          return arguments.length ? ((o = typeof Y == "function" ? Y : _r(+Y)), rt) : o
        }),
        (rt.filter = function (Y) {
          return arguments.length ? ((t = typeof Y == "function" ? Y : _r(!!Y)), rt) : t
        }),
        (rt.touchable = function (Y) {
          return arguments.length ? ((l = typeof Y == "function" ? Y : _r(!!Y)), rt) : l
        }),
        (rt.extent = function (Y) {
          return arguments.length
            ? ((n =
                typeof Y == "function"
                  ? Y
                  : _r([
                      [+Y[0][0], +Y[0][1]],
                      [+Y[1][0], +Y[1][1]],
                    ])),
              rt)
            : n
        }),
        (rt.scaleExtent = function (Y) {
          return arguments.length ? ((f[0] = +Y[0]), (f[1] = +Y[1]), rt) : [f[0], f[1]]
        }),
        (rt.translateExtent = function (Y) {
          return arguments.length
            ? ((d[0][0] = +Y[0][0]),
              (d[1][0] = +Y[1][0]),
              (d[0][1] = +Y[0][1]),
              (d[1][1] = +Y[1][1]),
              rt)
            : [
                [d[0][0], d[0][1]],
                [d[1][0], d[1][1]],
              ]
        }),
        (rt.constrain = function (Y) {
          return arguments.length ? ((u = Y), rt) : u
        }),
        (rt.duration = function (Y) {
          return arguments.length ? ((m = +Y), rt) : m
        }),
        (rt.interpolate = function (Y) {
          return arguments.length ? ((w = Y), rt) : w
        }),
        (rt.on = function () {
          var Y = A.on.apply(A, arguments)
          return Y === A ? rt : Y
        }),
        (rt.clickDistance = function (Y) {
          return arguments.length ? ((tt = (Y = +Y) * Y), rt) : Math.sqrt(tt)
        }),
        (rt.tapDistance = function (Y) {
          return arguments.length ? ((ut = +Y), rt) : ut
        }),
        rt
      )
    }
    var ca = Object.hasOwnProperty,
      li = Yt(on(), 1),
      fa = (0, li.default)()
    function Xo(t) {
      return t.document.body.dataset.slug
    }
    function ci(t) {
      let n = Qo(du(t, "index"), !0)
      return n.length === 0 ? "/" : n
    }
    function Yo(t) {
      let n = t
        .split("/")
        .filter((u) => u !== "")
        .slice(0, -1)
        .map((u) => "..")
        .join("/")
      return n.length === 0 && (n = "."), n
    }
    function Go(t, n) {
      return Jo(Yo(t), ci(n))
    }
    function Jo(...t) {
      return t
        .filter((n) => n !== "")
        .join("/")
        .replace(/\/\/+/g, "/")
    }
    function hu(t, n) {
      return t === n || t.endsWith("/" + n)
    }
    function du(t, n) {
      return hu(t, n) && (t = t.slice(0, -n.length)), t
    }
    function Qo(t, n) {
      return (
        t.startsWith("/") && (t = t.substring(1)), !n && t.endsWith("/") && (t = t.slice(0, -1)), t
      )
    }
    var Di = "graph-visited"
    function Mi() {
      return new Set(JSON.parse(localStorage.getItem(Di) ?? "[]"))
    }
    function e(t) {
      let n = Mi()
      n.add(t), localStorage.setItem(Di, JSON.stringify([...n]))
    }
    async function i(t, n) {
      let u = ci(n),
        o = Mi(),
        l = document.getElementById(t)
      if (!l) return
      Vt(l)
      let {
          drag: f,
          zoom: d,
          depth: m,
          scale: w,
          repelForce: A,
          centerForce: $,
          linkDistance: D,
          fontSize: S,
          opacityScale: P,
          removeTags: Q,
          showTags: tt,
          focusOnHover: ut,
        } = JSON.parse(l.dataset.cfg),
        rt = new Map(Object.entries(await fetchData).map(([xt, re]) => [ci(xt), re])),
        _t = [],
        It = [],
        st = new Set(rt.keys())
      for (let [xt, re] of rt.entries()) {
        let ge = re.links ?? []
        for (let Ce of ge) st.has(Ce) && _t.push({ source: xt, target: Ce })
        if (tt) {
          let Ce = re.tags.filter((be) => !Q.includes(be)).map((be) => ci("tags/" + be))
          It.push(...Ce.filter((be) => !It.includes(be)))
          for (let be of Ce) _t.push({ source: xt, target: be })
        }
      }
      let H = new Set(),
        wt = [u, "__SENTINEL"]
      if (m >= 0)
        for (; m >= 0 && wt.length > 0; ) {
          let xt = wt.shift()
          if (xt === "__SENTINEL") m--, wt.push("__SENTINEL")
          else {
            H.add(xt)
            let re = _t.filter((Ce) => Ce.source === xt),
              ge = _t.filter((Ce) => Ce.target === xt)
            wt.push(...re.map((Ce) => Ce.target), ...ge.map((Ce) => Ce.source))
          }
        }
      else st.forEach((xt) => H.add(xt)), tt && It.forEach((xt) => H.add(xt))
      let at = {
          nodes: [...H].map((xt) => {
            let re = xt.startsWith("tags/") ? "#" + xt.substring(5) : rt.get(xt)?.title ?? xt
            return { id: xt, text: re, tags: rt.get(xt)?.tags ?? [] }
          }),
          links: _t.filter((xt) => H.has(xt.source) && H.has(xt.target)),
        },
        kt = Ai(at.nodes)
          .force("charge", Ho().strength(-100 * A))
          .force(
            "link",
            Po(at.links)
              .id((xt) => xt.id)
              .distance(D),
          )
          .force("center", Do().strength($)),
        $t = Math.max(l.offsetHeight, 250),
        Ot = l.offsetWidth,
        gt = le("#" + t)
          .append("svg")
          .attr("width", Ot)
          .attr("height", $t)
          .attr("viewBox", [-Ot / 2 / w, -$t / 2 / w, Ot / w, $t / w]),
        Wt = gt
          .append("g")
          .selectAll("line")
          .data(at.links)
          .join("line")
          .attr("class", "link")
          .attr("stroke", "var(--lightgray)")
          .attr("stroke-width", 1),
        ee = gt.append("g").selectAll("g").data(at.nodes).enter().append("g"),
        Y = (xt) =>
          xt.id === u
            ? "var(--secondary)"
            : o.has(xt.id) || xt.id.startsWith("tags/")
              ? "var(--tertiary)"
              : "var(--gray)",
        At = (xt) => {
          function re(Xe, $e) {
            Xe.active || xt.alphaTarget(1).restart(), ($e.fx = $e.x), ($e.fy = $e.y)
          }
          function ge(Xe, $e) {
            ;($e.fx = Xe.x), ($e.fy = Xe.y)
          }
          function Ce(Xe, $e) {
            Xe.active || xt.alphaTarget(0), ($e.fx = null), ($e.fy = null)
          }
          let be = () => {}
          return Ir()
            .on("start", f ? re : be)
            .on("drag", f ? ge : be)
            .on("end", f ? Ce : be)
        }
      function mt(xt) {
        let re = _t.filter((ge) => ge.source.id === xt.id || ge.target.id === xt.id).length
        return 2 + Math.sqrt(re)
      }
      let Mt = [],
        Ut = ee
          .append("circle")
          .attr("class", "node")
          .attr("id", (xt) => xt.id)
          .attr("r", mt)
          .attr("fill", Y)
          .style("cursor", "pointer")
          .on("click", (xt, re) => {
            let ge = Go(n, re.id)
            window.spaNavigate(new URL(ge, window.location.toString()))
          })
          .on("mouseover", function (xt, re) {
            let ge = re.id,
              Ce = rn(".link").filter(($e) => $e.source.id === ge || $e.target.id === ge)
            ut &&
              ((Mt = Ce.data().flatMap(($e) => [$e.source.id, $e.target.id])),
              rn(".link").style("opacity", 0.2),
              rn(".node")
                .filter(($e) => !Mt.includes($e.id))
                .style("opacity", 0.2)),
              Ce.attr("stroke", "var(--gray)").attr("stroke-width", 1)
            let be = S * 1.5,
              Xe = this.parentNode
            le(Xe)
              .raise()
              .select("text")
              .attr("opacityOld", le(Xe).select("text").style("opacity"))
              .style("opacity", 1)
              .style("font-size", be + "em")
          })
          .on("mouseleave", function (xt, re) {
            ut && (rn(".link").style("opacity", 1), rn(".node").style("opacity", 1))
            let ge = re.id
            rn(".link")
              .filter((be) => be.source.id === ge || be.target.id === ge)
              .attr("stroke", "var(--lightgray)")
            let Ce = this.parentNode
            le(Ce)
              .select("text")
              .style("opacity", le(Ce).select("text").attr("opacityOld"))
              .style("font-size", S + "em")
          })
          .call(At(kt)),
        Xt = ee
          .append("text")
          .attr("dx", 0)
          .attr("dy", (xt) => -mt(xt) + "px")
          .attr("text-anchor", "middle")
          .text((xt) => xt.text)
          .style("opacity", (P - 1) / 3.75)
          .style("pointer-events", "none")
          .style("font-size", S + "em")
          .raise()
          .call(At(kt))
      d &&
        gt.call(
          la()
            .extent([
              [0, 0],
              [Ot, $t],
            ])
            .scaleExtent([0.25, 4])
            .on("zoom", ({ transform: xt }) => {
              Wt.attr("transform", xt), Ut.attr("transform", xt)
              let re = xt.k * P,
                ge = Math.max((re - 1) / 3.75, 0)
              Xt.attr("transform", xt).style("opacity", ge)
            }),
        ),
        kt.on("tick", () => {
          Wt.attr("x1", (xt) => xt.source.x)
            .attr("y1", (xt) => xt.source.y)
            .attr("x2", (xt) => xt.target.x)
            .attr("y2", (xt) => xt.target.y),
            Ut.attr("cx", (xt) => xt.x).attr("cy", (xt) => xt.y),
            Xt.attr("x", (xt) => xt.x).attr("y", (xt) => xt.y)
        })
    }
    function s() {
      let t = Xo(window),
        n = document.getElementById("global-graph-outer"),
        u = n?.closest(".sidebar")
      n?.classList.add("active"), u && (u.style.zIndex = "1"), i("global-graph-container", t)
      function o() {
        n?.classList.remove("active")
        let l = document.getElementById("global-graph-container")
        u && (u.style.zIndex = "unset"), l && Vt(l)
      }
      de(n, o)
    }
    document.addEventListener("nav", async (t) => {
      let n = t.detail.url
      e(n), await i("graph-container", n)
      let u = document.getElementById("global-graph-icon")
      u?.addEventListener("click", s), window.addCleanup(() => u?.removeEventListener("click", s))
    })
    var p = (t) => ({
      ctrKey: t === "ctrl",
      metaKey: t === "cmd",
      shiftKey: t === "shift",
      altKey: t === "alt",
    })
    function v(t) {
      t.preventDefault()
      let n = (t?.target).dataset.keybind
      if (!n) return
      let [u, o] = n.split("--"),
        l = new KeyboardEvent("keydown", {
          ...p(u),
          key: o.length === 1 ? o : o.toLowerCase(),
          bubbles: !0,
          cancelable: !0,
        })
      document.dispatchEvent(l)
    }
    document.addEventListener("nav", async () => {
      let t = document.getElementById("highlight-modal"),
        n = document.getElementById("shortcut-container"),
        u = document.getElementById("shortcut-key"),
        o = document.getElementsByClassName("keybind")[0],
        l = document.querySelector(".center"),
        f = document.querySelector(".right.sidebar"),
        d = () => {
          l && (l.style.zIndex = "-1"), f && (f.style.zIndex = "-1"), n?.classList.add("active")
        },
        m = () => {
          l && (l.style.zIndex = "unset"),
            f && (f.style.zIndex = "unset"),
            n?.classList.remove("active")
        }
      async function w(S) {
        if (u)
          for (let P of JSON.parse(u.dataset.mapping)) {
            let [Q, tt] = P.split("--")
            if ((t && D(), S.key === tt && (S.ctrlKey || S.metaKey))) {
              S.preventDefault(), n?.classList.contains("active") ? m() : d()
              break
            }
          }
      }
      let A = () => {
        let S = n?.classList.contains("active")
        if (
          (t && D(),
          Array.from(document.querySelectorAll(".active")).filter(
            (P) => !P.classList.contains("keybind"),
          ).length > 0)
        ) {
          m()
          return
        } else S ? m() : d()
      }
      document.addEventListener("keydown", w),
        window.addCleanup(() => document.removeEventListener("keydown", w)),
        o?.addEventListener("click", A),
        window.addCleanup(() => o?.removeEventListener("click", A)),
        de(o, m)
      for (let S of document.querySelectorAll("#clickable-kbd")) {
        let P = (Q) => {
          Q.preventDefault(), m(), v(Q)
        }
        S.addEventListener("click", P), window.addCleanup(() => S.removeEventListener("click", P))
      }
      if (!t) return
      let $ = (S) => {
          n?.classList.contains("active") ||
            (t.classList.add("active"), (t.style.visibility = "visible"))
        },
        D = () => {
          t.classList.remove("active"), (t.style.visibility = "hidden")
        }
      Se(
        o,
        ["mouseenter", $],
        [
          "mouseleave",
          () => {
            n?.classList.contains("active") || D()
          },
        ],
        [
          "mousemove",
          ({ pageX: S, pageY: P }) => {
            n?.classList.contains("active") ||
              (t.classList.add("active"),
              Object.assign(t.style, { left: `${S + 10}px`, top: `${P + 10}px` }))
          },
        ],
      )
    })
    var E = new Map([
      ["\\", "/"],
      ["l", "/projects"],
      ["j", "/curius"],
    ])
    document.addEventListener("nav", () => {
      let t = document.querySelector("#darkmode-toggle"),
        n = document.getElementById("global-graph-outer"),
        u = document.getElementById("shortcut-container")
      function o(m) {
        t &&
          m.key === "o" &&
          (m.ctrlKey || m.metaKey) &&
          (m.preventDefault(), u?.classList.toggle("active", !1), t.click())
      }
      function l() {
        n?.classList.remove("active")
        let m = document.getElementById("global-graph-container"),
          w = n?.closest(".sidebar")
        m && (w && (w.style.zIndex = "unset"), Vt(m))
      }
      function f(m) {
        m.key === "g" &&
          (m.ctrlKey || m.metaKey) &&
          (m.preventDefault(),
          u?.classList.toggle("active", !1),
          n?.classList.contains("active") ? l() : s())
      }
      function d(m) {
        if (E.get(m.key) !== void 0 && (m.ctrlKey || m.metaKey)) {
          m.preventDefault()
          let w = E.get(m.key)
          if ((u?.classList.toggle("active", !1), window.location.pathname === w)) return
          window.location.href = w
        }
      }
      Se(document, ["keydown", o], ["keydown", f], ["keydown", d])
    })
    var k = { openllm: "OpenLLM", bentoml: "BentoML", onw: "onw" },
      N = {
        openllm: "Serve, fine-tune and deploy LLMs in production",
        bentoml: "Build Production-grade AI Application",
        onw: "A real-time navigation tools for safer commute",
      },
      q = { openllm: "2023", bentoml: "2023", onw: "2021" }
    document.addEventListener("nav", () => {
      document.querySelectorAll(".project-item").forEach((t) => {
        let n = t.querySelector(".title"),
          u = t.querySelector(".description"),
          o = t.querySelector(".year")
        ne(n, k[n.dataset.name]), ne(u, N[u.dataset.name]), ne(o, q[o.dataset.name])
      })
    })
  })(),
  (function () {
    document.addEventListener("nav", (je) => {
      if (je.detail.url !== "music") return
      let Ne = document.getElementsByClassName("playlists")[0],
        qe = document.querySelector(".previous"),
        ve = document.querySelector(".next"),
        Ee = Ne?.querySelectorAll("iframe")
      if ((console.log(Ee), !Ne || !Ee)) return
      let Jt = 0,
        Oe = 20,
        Ie = (de) => {
          let Vt = 0
          for (let ne = 0; ne < de; ne++) Vt += Ee[ne].offsetWidth + Oe
          let Se = Ee[de]
          Se &&
            ((Vt -= (Ne.offsetWidth - Se.offsetWidth) / 2),
            Ne.scrollTo({ left: Vt, behavior: "smooth" }))
        },
        Yt = () => {
          Jt > 0 && (Jt--, Ie(Jt))
        },
        on = () => {
          Jt < Ee.length - 1 && (Jt++, Ie(Jt))
        }
      qe?.addEventListener("click", Yt),
        window.addCleanup(() => qe?.removeEventListener("click", Yt)),
        ve?.addEventListener("click", on),
        window.addCleanup(() => ve?.removeEventListener("click", on))
    })
  })(),
  (function () {
    var je = Object.create,
      Ne = Object.defineProperty,
      qe = Object.getOwnPropertyDescriptor,
      ve = Object.getOwnPropertyNames,
      Ee = Object.getPrototypeOf,
      Jt = Object.prototype.hasOwnProperty,
      Oe = (a, c) => () => (c || a((c = { exports: {} }).exports, c), c.exports),
      Ie = (a, c, y, b) => {
        if ((c && typeof c == "object") || typeof c == "function")
          for (let _ of ve(c))
            !Jt.call(a, _) &&
              _ !== y &&
              Ne(a, _, { get: () => c[_], enumerable: !(b = qe(c, _)) || b.enumerable })
        return a
      },
      Yt = (a, c, y) => (
        (y = a != null ? je(Ee(a)) : {}),
        Ie(c || !a || !a.__esModule ? Ne(y, "default", { value: a, enumerable: !0 }) : y, a)
      ),
      on = Oe(() => {}),
      de = Oe((a, c) => {
        "use strict"
        c.exports = b
        function y(F) {
          return F instanceof Buffer
            ? Buffer.from(F)
            : new F.constructor(F.buffer.slice(), F.byteOffset, F.length)
        }
        function b(F) {
          if (((F = F || {}), F.circles)) return _(F)
          return F.proto ? K : O
          function z(R, G) {
            for (var X = Object.keys(R), W = new Array(X.length), ot = 0; ot < X.length; ot++) {
              var it = X[ot],
                r = R[it]
              typeof r != "object" || r === null
                ? (W[it] = r)
                : r instanceof Date
                  ? (W[it] = new Date(r))
                  : ArrayBuffer.isView(r)
                    ? (W[it] = y(r))
                    : (W[it] = G(r))
            }
            return W
          }
          function O(R) {
            if (typeof R != "object" || R === null) return R
            if (R instanceof Date) return new Date(R)
            if (Array.isArray(R)) return z(R, O)
            if (R instanceof Map) return new Map(z(Array.from(R), O))
            if (R instanceof Set) return new Set(z(Array.from(R), O))
            var G = {}
            for (var X in R)
              if (Object.hasOwnProperty.call(R, X) !== !1) {
                var W = R[X]
                typeof W != "object" || W === null
                  ? (G[X] = W)
                  : W instanceof Date
                    ? (G[X] = new Date(W))
                    : W instanceof Map
                      ? (G[X] = new Map(z(Array.from(W), O)))
                      : W instanceof Set
                        ? (G[X] = new Set(z(Array.from(W), O)))
                        : ArrayBuffer.isView(W)
                          ? (G[X] = y(W))
                          : (G[X] = O(W))
              }
            return G
          }
          function K(R) {
            if (typeof R != "object" || R === null) return R
            if (R instanceof Date) return new Date(R)
            if (Array.isArray(R)) return z(R, K)
            if (R instanceof Map) return new Map(z(Array.from(R), K))
            if (R instanceof Set) return new Set(z(Array.from(R), K))
            var G = {}
            for (var X in R) {
              var W = R[X]
              typeof W != "object" || W === null
                ? (G[X] = W)
                : W instanceof Date
                  ? (G[X] = new Date(W))
                  : W instanceof Map
                    ? (G[X] = new Map(z(Array.from(W), K)))
                    : W instanceof Set
                      ? (G[X] = new Set(z(Array.from(W), K)))
                      : ArrayBuffer.isView(W)
                        ? (G[X] = y(W))
                        : (G[X] = K(W))
            }
            return G
          }
        }
        function _(F) {
          var z = [],
            O = []
          return F.proto ? G : R
          function K(X, W) {
            for (var ot = Object.keys(X), it = new Array(ot.length), r = 0; r < ot.length; r++) {
              var g = ot[r],
                x = X[g]
              if (typeof x != "object" || x === null) it[g] = x
              else if (x instanceof Date) it[g] = new Date(x)
              else if (ArrayBuffer.isView(x)) it[g] = y(x)
              else {
                var C = z.indexOf(x)
                C !== -1 ? (it[g] = O[C]) : (it[g] = W(x))
              }
            }
            return it
          }
          function R(X) {
            if (typeof X != "object" || X === null) return X
            if (X instanceof Date) return new Date(X)
            if (Array.isArray(X)) return K(X, R)
            if (X instanceof Map) return new Map(K(Array.from(X), R))
            if (X instanceof Set) return new Set(K(Array.from(X), R))
            var W = {}
            z.push(X), O.push(W)
            for (var ot in X)
              if (Object.hasOwnProperty.call(X, ot) !== !1) {
                var it = X[ot]
                if (typeof it != "object" || it === null) W[ot] = it
                else if (it instanceof Date) W[ot] = new Date(it)
                else if (it instanceof Map) W[ot] = new Map(K(Array.from(it), R))
                else if (it instanceof Set) W[ot] = new Set(K(Array.from(it), R))
                else if (ArrayBuffer.isView(it)) W[ot] = y(it)
                else {
                  var r = z.indexOf(it)
                  r !== -1 ? (W[ot] = O[r]) : (W[ot] = R(it))
                }
              }
            return z.pop(), O.pop(), W
          }
          function G(X) {
            if (typeof X != "object" || X === null) return X
            if (X instanceof Date) return new Date(X)
            if (Array.isArray(X)) return K(X, G)
            if (X instanceof Map) return new Map(K(Array.from(X), G))
            if (X instanceof Set) return new Set(K(Array.from(X), G))
            var W = {}
            z.push(X), O.push(W)
            for (var ot in X) {
              var it = X[ot]
              if (typeof it != "object" || it === null) W[ot] = it
              else if (it instanceof Date) W[ot] = new Date(it)
              else if (it instanceof Map) W[ot] = new Map(K(Array.from(it), G))
              else if (it instanceof Set) W[ot] = new Set(K(Array.from(it), G))
              else if (ArrayBuffer.isView(it)) W[ot] = y(it)
              else {
                var r = z.indexOf(it)
                r !== -1 ? (W[ot] = O[r]) : (W[ot] = G(it))
              }
            }
            return z.pop(), O.pop(), W
          }
        }
      }),
      Vt
    function Se(a) {
      return typeof a < "u" ? a : !0
    }
    function ne(a) {
      let c = Array(a)
      for (let y = 0; y < a; y++) c[y] = ye()
      return c
    }
    function ye() {
      return Object.create(null)
    }
    function mn(a, c) {
      return c.length - a.length
    }
    function se(a) {
      return typeof a == "string"
    }
    function De(a) {
      return typeof a == "object"
    }
    function te(a) {
      return typeof a == "function"
    }
    function Ye(a, c) {
      var y = vn
      if (
        a &&
        (c && (a = ie(a, c)),
        this.H && (a = ie(a, this.H)),
        this.J && 1 < a.length && (a = ie(a, this.J)),
        y || y === "")
      ) {
        if (((c = a.split(y)), this.filter)) {
          ;(a = this.filter), (y = c.length)
          let b = []
          for (let _ = 0, F = 0; _ < y; _++) {
            let z = c[_]
            z && !a[z] && (b[F++] = z)
          }
          a = b
        } else a = c
        return a
      }
      return a
    }
    var vn = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      Ge = /[\u0300-\u036f]/g
    function Ue(a, c) {
      let y = Object.keys(a),
        b = y.length,
        _ = [],
        F = "",
        z = 0
      for (let O = 0, K, R; O < b; O++)
        (K = y[O]),
          (R = a[K])
            ? ((_[z++] = ce(c ? "(?!\\b)" + K + "(\\b|_)" : K)), (_[z++] = R))
            : (F += (F ? "|" : "") + K)
      return F && ((_[z++] = ce(c ? "(?!\\b)(" + F + ")(\\b|_)" : "(" + F + ")")), (_[z] = "")), _
    }
    function ie(a, c) {
      for (let y = 0, b = c.length; y < b && ((a = a.replace(c[y], c[y + 1])), a); y += 2);
      return a
    }
    function ce(a) {
      return new RegExp(a, "g")
    }
    function an(a) {
      let c = "",
        y = ""
      for (let b = 0, _ = a.length, F; b < _; b++) (F = a[b]) !== y && (c += y = F)
      return c
    }
    var pe = { encode: An, F: !1, G: "" }
    function An(a) {
      return Ye.call(this, ("" + a).toLowerCase(), !1)
    }
    var xe = {},
      _e = {}
    function yn(a) {
      Re(a, "add"), Re(a, "append"), Re(a, "search"), Re(a, "update"), Re(a, "remove")
    }
    function Re(a, c) {
      a[c + "Async"] = function () {
        let y = this,
          b = arguments
        var _ = b[b.length - 1]
        let F
        return (
          te(_) && ((F = _), delete b[b.length - 1]),
          (_ = new Promise(function (z) {
            setTimeout(function () {
              y.async = !0
              let O = y[c].apply(y, b)
              ;(y.async = !1), z(O)
            })
          })),
          F ? (_.then(F), this) : _
        )
      }
    }
    function Be(a, c, y, b) {
      let _ = a.length,
        F = [],
        z,
        O,
        K = 0
      b && (b = [])
      for (let R = _ - 1; 0 <= R; R--) {
        let G = a[R],
          X = G.length,
          W = ye(),
          ot = !z
        for (let it = 0; it < X; it++) {
          let r = G[it],
            g = r.length
          if (g)
            for (let x = 0, C, B; x < g; x++)
              if (((B = r[x]), z)) {
                if (z[B]) {
                  if (!R) {
                    if (y) y--
                    else if (((F[K++] = B), K === c)) return F
                  }
                  ;(R || b) && (W[B] = 1), (ot = !0)
                }
                if (b && ((C = (O[B] || 0) + 1), (O[B] = C), C < _)) {
                  let I = b[C - 2] || (b[C - 2] = [])
                  I[I.length] = B
                }
              } else W[B] = 1
        }
        if (b) z || (O = W)
        else if (!ot) return []
        z = W
      }
      if (b)
        for (let R = b.length - 1, G, X; 0 <= R; R--) {
          ;(G = b[R]), (X = G.length)
          for (let W = 0, ot; W < X; W++)
            if (((ot = G[W]), !z[ot])) {
              if (y) y--
              else if (((F[K++] = ot), K === c)) return F
              z[ot] = 1
            }
        }
      return F
    }
    function sn(a, c) {
      let y = ye(),
        b = ye(),
        _ = []
      for (let F = 0; F < a.length; F++) y[a[F]] = 1
      for (let F = 0, z; F < c.length; F++) {
        z = c[F]
        for (let O = 0, K; O < z.length; O++)
          (K = z[O]), y[K] && !b[K] && ((b[K] = 1), (_[_.length] = K))
      }
      return _
    }
    function We(a) {
      ;(this.l = a !== !0 && a), (this.cache = ye()), (this.h = [])
    }
    function tn(a, c, y) {
      De(a) && (a = a.query)
      let b = this.cache.get(a)
      return b || ((b = this.search(a, c, y)), this.cache.set(a, b)), b
    }
    ;(We.prototype.set = function (a, c) {
      if (!this.cache[a]) {
        var y = this.h.length
        for (y === this.l ? delete this.cache[this.h[y - 1]] : y++, --y; 0 < y; y--)
          this.h[y] = this.h[y - 1]
        this.h[0] = a
      }
      this.cache[a] = c
    }),
      (We.prototype.get = function (a) {
        let c = this.cache[a]
        if (this.l && c && (a = this.h.indexOf(a))) {
          let y = this.h[a - 1]
          ;(this.h[a - 1] = this.h[a]), (this.h[a] = y)
        }
        return c
      })
    var we = {
      memory: { charset: "latin:extra", D: 3, B: 4, m: !1 },
      performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } },
      match: { charset: "latin:extra", G: "reverse" },
      score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } },
      default: {},
    }
    function en(a, c, y, b, _, F, z, O) {
      setTimeout(function () {
        let K = a(y ? y + "." + b : b, JSON.stringify(z))
        K && K.then
          ? K.then(function () {
              c.export(a, c, y, _, F + 1, O)
            })
          : c.export(a, c, y, _, F + 1, O)
      })
    }
    function Pe(a, c) {
      if (!(this instanceof Pe)) return new Pe(a)
      var y
      if (a) {
        se(a) ? (a = we[a]) : (y = a.preset) && (a = Object.assign({}, y[y], a)), (y = a.charset)
        var b = a.lang
        se(y) && (y.indexOf(":") === -1 && (y += ":default"), (y = _e[y])), se(b) && (b = xe[b])
      } else a = {}
      let _,
        F,
        z = a.context || {}
      if (
        ((this.encode = a.encode || (y && y.encode) || An),
        (this.register = c || ye()),
        (this.D = _ = a.resolution || 9),
        (this.G = c = (y && y.G) || a.tokenize || "strict"),
        (this.depth = c === "strict" && z.depth),
        (this.l = Se(z.bidirectional)),
        (this.s = F = Se(a.optimize)),
        (this.m = Se(a.fastupdate)),
        (this.B = a.minlength || 1),
        (this.C = a.boost),
        (this.map = F ? ne(_) : ye()),
        (this.A = _ = z.resolution || 1),
        (this.h = F ? ne(_) : ye()),
        (this.F = (y && y.F) || a.rtl),
        (this.H = (c = a.matcher || (b && b.H)) && Ue(c, !1)),
        (this.J = (c = a.stemmer || (b && b.J)) && Ue(c, !0)),
        (y = c = a.filter || (b && b.filter)))
      ) {
        ;(y = c), (b = ye())
        for (let O = 0, K = y.length; O < K; O++) b[y[O]] = 1
        y = b
      }
      ;(this.filter = y), (this.cache = (c = a.cache) && new We(c))
    }
    ;(Vt = Pe.prototype),
      (Vt.append = function (a, c) {
        return this.add(a, c, !0)
      }),
      (Vt.add = function (a, c, y, b) {
        if (c && (a || a === 0)) {
          if (!b && !y && this.register[a]) return this.update(a, c)
          if (((c = this.encode(c)), (b = c.length))) {
            let R = ye(),
              G = ye(),
              X = this.depth,
              W = this.D
            for (let ot = 0; ot < b; ot++) {
              let it = c[this.F ? b - 1 - ot : ot]
              var _ = it.length
              if (it && _ >= this.B && (X || !G[it])) {
                var F = nn(W, b, ot),
                  z = ""
                switch (this.G) {
                  case "full":
                    if (2 < _) {
                      for (F = 0; F < _; F++)
                        for (var O = _; O > F; O--)
                          if (O - F >= this.B) {
                            var K = nn(W, b, ot, _, F)
                            ;(z = it.substring(F, O)), Ve(this, G, z, K, a, y)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < _) {
                      for (O = _ - 1; 0 < O; O--)
                        (z = it[O] + z),
                          z.length >= this.B && Ve(this, G, z, nn(W, b, ot, _, O), a, y)
                      z = ""
                    }
                  case "forward":
                    if (1 < _) {
                      for (O = 0; O < _; O++)
                        (z += it[O]), z.length >= this.B && Ve(this, G, z, F, a, y)
                      break
                    }
                  default:
                    if (
                      (this.C && (F = Math.min((F / this.C(c, it, ot)) | 0, W - 1)),
                      Ve(this, G, it, F, a, y),
                      X && 1 < b && ot < b - 1)
                    ) {
                      for (
                        _ = ye(), z = this.A, F = it, O = Math.min(X + 1, b - ot), _[F] = 1, K = 1;
                        K < O;
                        K++
                      )
                        if (
                          (it = c[this.F ? b - 1 - ot - K : ot + K]) &&
                          it.length >= this.B &&
                          !_[it]
                        ) {
                          _[it] = 1
                          let r = this.l && it > F
                          Ve(
                            this,
                            R,
                            r ? F : it,
                            nn(z + (b / 2 > z ? 0 : 1), b, ot, O - 1, K - 1),
                            a,
                            y,
                            r ? it : F,
                          )
                        }
                    }
                }
              }
            }
            this.m || (this.register[a] = 1)
          }
        }
        return this
      })
    function nn(a, c, y, b, _) {
      return y && 1 < a
        ? c + (b || 0) <= a
          ? y + (_ || 0)
          : (((a - 1) / (c + (b || 0))) * (y + (_ || 0)) + 1) | 0
        : 0
    }
    function Ve(a, c, y, b, _, F, z) {
      let O = z ? a.h : a.map
      ;(!c[y] || (z && !c[y][z])) &&
        (a.s && (O = O[b]),
        z ? ((c = c[y] || (c[y] = ye())), (c[z] = 1), (O = O[z] || (O[z] = ye()))) : (c[y] = 1),
        (O = O[y] || (O[y] = [])),
        a.s || (O = O[b] || (O[b] = [])),
        (F && O.includes(_)) ||
          ((O[O.length] = _),
          a.m && ((a = a.register[_] || (a.register[_] = [])), (a[a.length] = O))))
    }
    Vt.search = function (a, c, y) {
      y || (!c && De(a) ? ((y = a), (a = y.query)) : De(c) && (y = c))
      let b = [],
        _,
        F,
        z = 0
      if (y) {
        ;(a = y.query || a), (c = y.limit), (z = y.offset || 0)
        var O = y.context
        F = y.suggest
      }
      if (a && ((a = this.encode("" + a)), (_ = a.length), 1 < _)) {
        y = ye()
        var K = []
        for (let G = 0, X = 0, W; G < _; G++)
          if ((W = a[G]) && W.length >= this.B && !y[W])
            if (this.s || F || this.map[W]) (K[X++] = W), (y[W] = 1)
            else return b
        ;(a = K), (_ = a.length)
      }
      if (!_) return b
      c || (c = 100), (O = this.depth && 1 < _ && O !== !1), (y = 0)
      let R
      O ? ((R = a[0]), (y = 1)) : 1 < _ && a.sort(mn)
      for (let G, X; y < _; y++) {
        if (
          ((X = a[y]),
          O
            ? ((G = Ae(this, b, F, c, z, _ === 2, X, R)), (F && G === !1 && b.length) || (R = X))
            : (G = Ae(this, b, F, c, z, _ === 1, X)),
          G)
        )
          return G
        if (F && y === _ - 1) {
          if (((K = b.length), !K)) {
            if (O) {
              ;(O = 0), (y = -1)
              continue
            }
            return b
          }
          if (K === 1) return Z(b[0], c, z)
        }
      }
      return Be(b, c, z, F)
    }
    function Ae(a, c, y, b, _, F, z, O) {
      let K = [],
        R = O ? a.h : a.map
      if ((a.s || (R = vt(R, z, O, a.l)), R)) {
        let G = 0,
          X = Math.min(R.length, O ? a.A : a.D)
        for (
          let W = 0, ot = 0, it, r;
          W < X &&
          !(
            (it = R[W]) &&
            (a.s && (it = vt(it, z, O, a.l)),
            _ &&
              it &&
              F &&
              ((r = it.length), r <= _ ? ((_ -= r), (it = null)) : ((it = it.slice(_)), (_ = 0))),
            it && ((K[G++] = it), F && ((ot += it.length), ot >= b)))
          );
          W++
        );
        if (G) {
          if (F) return Z(K, b, 0)
          c[c.length] = K
          return
        }
      }
      return !y && K
    }
    function Z(a, c, y) {
      return (
        (a = a.length === 1 ? a[0] : [].concat.apply([], a)),
        y || a.length > c ? a.slice(y, y + c) : a
      )
    }
    function vt(a, c, y, b) {
      return y ? ((b = b && c > y), (a = (a = a[b ? c : y]) && a[b ? y : c])) : (a = a[c]), a
    }
    ;(Vt.contain = function (a) {
      return !!this.register[a]
    }),
      (Vt.update = function (a, c) {
        return this.remove(a).add(a, c)
      }),
      (Vt.remove = function (a, c) {
        let y = this.register[a]
        if (y) {
          if (this.m) for (let b = 0, _; b < y.length; b++) (_ = y[b]), _.splice(_.indexOf(a), 1)
          else Ct(this.map, a, this.D, this.s), this.depth && Ct(this.h, a, this.A, this.s)
          if ((c || delete this.register[a], this.cache)) {
            c = this.cache
            for (let b = 0, _, F; b < c.h.length; b++)
              (F = c.h[b]),
                (_ = c.cache[F]),
                _.includes(a) && (c.h.splice(b--, 1), delete c.cache[F])
          }
        }
        return this
      })
    function Ct(a, c, y, b, _) {
      let F = 0
      if (a.constructor === Array)
        if (_) (c = a.indexOf(c)), c !== -1 ? 1 < a.length && (a.splice(c, 1), F++) : F++
        else {
          _ = Math.min(a.length, y)
          for (let z = 0, O; z < _; z++)
            (O = a[z]) && ((F = Ct(O, c, y, b, _)), b || F || delete a[z])
        }
      else for (let z in a) (F = Ct(a[z], c, y, b, _)) || delete a[z]
      return F
    }
    ;(Vt.searchCache = tn),
      (Vt.export = function (a, c, y, b, _, F) {
        let z = !0
        typeof F > "u" &&
          (z = new Promise((R) => {
            F = R
          }))
        let O, K
        switch (_ || (_ = 0)) {
          case 0:
            if (((O = "reg"), this.m)) {
              K = ye()
              for (let R in this.register) K[R] = 1
            } else K = this.register
            break
          case 1:
            ;(O = "cfg"), (K = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(O = "map"), (K = this.map)
            break
          case 3:
            ;(O = "ctx"), (K = this.h)
            break
          default:
            typeof y > "u" && F && F()
            return
        }
        return en(a, c || this, y, O, b, _, K, F), z
      }),
      (Vt.import = function (a, c) {
        if (c)
          switch ((se(c) && (c = JSON.parse(c)), a)) {
            case "cfg":
              this.s = !!c.opt
              break
            case "reg":
              ;(this.m = !1), (this.register = c)
              break
            case "map":
              this.map = c
              break
            case "ctx":
              this.h = c
          }
      }),
      yn(Pe.prototype)
    function Nt(a) {
      a = a.data
      var c = self._index
      let y = a.args
      var b = a.task
      switch (b) {
        case "init":
          ;(b = a.options || {}),
            (a = a.factory),
            (c = b.encode),
            (b.cache = !1),
            c && c.indexOf("function") === 0 && (b.encode = Function("return " + c)()),
            a
              ? (Function("return " + a)()(self),
                (self._index = new self.FlexSearch.Index(b)),
                delete self.FlexSearch)
              : (self._index = new Pe(b))
          break
        default:
          ;(a = a.id),
            (c = c[b].apply(c, y)),
            postMessage(b === "search" ? { id: a, msg: c } : { id: a })
      }
    }
    var qt = 0
    function Tt(a) {
      if (!(this instanceof Tt)) return new Tt(a)
      var c
      a ? te((c = a.encode)) && (a.encode = c.toString()) : (a = {}),
        (c = (self || window)._factory) && (c = c.toString())
      let y = typeof window > "u" && self.exports,
        b = this
      ;(this.o = fe(c, y, a.worker)),
        (this.h = ye()),
        this.o &&
          (y
            ? this.o.on("message", function (_) {
                b.h[_.id](_.msg), delete b.h[_.id]
              })
            : (this.o.onmessage = function (_) {
                ;(_ = _.data), b.h[_.id](_.msg), delete b.h[_.id]
              }),
          this.o.postMessage({ task: "init", factory: c, options: a }))
    }
    jt("add"), jt("append"), jt("search"), jt("update"), jt("remove")
    function jt(a) {
      Tt.prototype[a] = Tt.prototype[a + "Async"] = function () {
        let c = this,
          y = [].slice.call(arguments)
        var b = y[y.length - 1]
        let _
        return (
          te(b) && ((_ = b), y.splice(y.length - 1, 1)),
          (b = new Promise(function (F) {
            setTimeout(function () {
              ;(c.h[++qt] = F), c.o.postMessage({ task: a, id: qt, args: y })
            })
          })),
          _ ? (b.then(_), this) : b
        )
      }
    }
    function fe(a, c, y) {
      let b
      try {
        b = c
          ? new (on().Worker)(__dirname + "/node/node.js")
          : a
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + Nt.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(se(y) ? y : "worker/worker.js", { type: "module" })
      } catch {}
      return b
    }
    function Gt(a) {
      if (!(this instanceof Gt)) return new Gt(a)
      var c = a.document || a.doc || a,
        y
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = ye()),
        (this.key = ((y = c.key || c.id) && Ht(y, this.A)) || "id"),
        (this.m = Se(a.fastupdate)),
        (this.C = (y = c.store) && y !== !0 && []),
        (this.store = y && ye()),
        (this.I = (y = c.tag) && Ht(y, this.A)),
        (this.l = y && ye()),
        (this.cache = (y = a.cache) && new We(y)),
        (a.cache = !1),
        (this.o = a.worker),
        (this.async = !1),
        (y = ye())
      let b = c.index || c.field || c
      se(b) && (b = [b])
      for (let _ = 0, F, z; _ < b.length; _++)
        (F = b[_]),
          se(F) || ((z = F), (F = F.field)),
          (z = De(z) ? Object.assign({}, a, z) : a),
          this.o && ((y[F] = new Tt(z)), y[F].o || (this.o = !1)),
          this.o || (y[F] = new Pe(z, this.register)),
          (this.K[_] = Ht(F, this.A)),
          (this.h[_] = F)
      if (this.C)
        for (a = c.store, se(a) && (a = [a]), c = 0; c < a.length; c++) this.C[c] = Ht(a[c], this.A)
      this.index = y
    }
    function Ht(a, c) {
      let y = a.split(":"),
        b = 0
      for (let _ = 0; _ < y.length; _++)
        (a = y[_]),
          0 <= a.indexOf("[]") && (a = a.substring(0, a.length - 2)) && (c[b] = !0),
          a && (y[b++] = a)
      return b < y.length && (y.length = b), 1 < b ? y : y[0]
    }
    function ue(a, c) {
      if (se(c)) a = a[c]
      else for (let y = 0; a && y < c.length; y++) a = a[c[y]]
      return a
    }
    function St(a, c, y, b, _) {
      if (((a = a[_]), b === y.length - 1)) c[_] = a
      else if (a)
        if (a.constructor === Array)
          for (c = c[_] = Array(a.length), _ = 0; _ < a.length; _++) St(a, c, y, b, _)
        else (c = c[_] || (c[_] = ye())), (_ = y[++b]), St(a, c, y, b, _)
    }
    function Lt(a, c, y, b, _, F, z, O) {
      if ((a = a[z]))
        if (b === c.length - 1) {
          if (a.constructor === Array) {
            if (y[b]) {
              for (c = 0; c < a.length; c++) _.add(F, a[c], !0, !0)
              return
            }
            a = a.join(" ")
          }
          _.add(F, a, O, !0)
        } else if (a.constructor === Array)
          for (z = 0; z < a.length; z++) Lt(a, c, y, b, _, F, z, O)
        else (z = c[++b]), Lt(a, c, y, b, _, F, z, O)
    }
    ;(Vt = Gt.prototype),
      (Vt.add = function (a, c, y) {
        if ((De(a) && ((c = a), (a = ue(c, this.key))), c && (a || a === 0))) {
          if (!y && this.register[a]) return this.update(a, c)
          for (let b = 0, _, F; b < this.h.length; b++)
            (F = this.h[b]),
              (_ = this.K[b]),
              se(_) && (_ = [_]),
              Lt(c, _, this.A, 0, this.index[F], a, _[0], y)
          if (this.I) {
            let b = ue(c, this.I),
              _ = ye()
            se(b) && (b = [b])
            for (let F = 0, z, O; F < b.length; F++)
              if (
                ((z = b[F]),
                !_[z] &&
                  ((_[z] = 1), (O = this.l[z] || (this.l[z] = [])), !y || !O.includes(a)) &&
                  ((O[O.length] = a), this.m))
              ) {
                let K = this.register[a] || (this.register[a] = [])
                K[K.length] = O
              }
          }
          if (this.store && (!y || !this.store[a])) {
            let b
            if (this.C) {
              b = ye()
              for (let _ = 0, F; _ < this.C.length; _++)
                (F = this.C[_]), se(F) ? (b[F] = c[F]) : St(c, b, F, 0, F[0])
            }
            this.store[a] = b || c
          }
        }
        return this
      }),
      (Vt.append = function (a, c) {
        return this.add(a, c, !0)
      }),
      (Vt.update = function (a, c) {
        return this.remove(a).add(a, c)
      }),
      (Vt.remove = function (a) {
        if ((De(a) && (a = ue(a, this.key)), this.register[a])) {
          for (
            var c = 0;
            c < this.h.length && (this.index[this.h[c]].remove(a, !this.o), !this.m);
            c++
          );
          if (this.I && !this.m)
            for (let y in this.l) {
              c = this.l[y]
              let b = c.indexOf(a)
              b !== -1 && (1 < c.length ? c.splice(b, 1) : delete this.l[y])
            }
          this.store && delete this.store[a], delete this.register[a]
        }
        return this
      }),
      (Vt.search = function (a, c, y, b) {
        y || (!c && De(a) ? ((y = a), (a = "")) : De(c) && ((y = c), (c = 0)))
        let _ = [],
          F = [],
          z,
          O,
          K,
          R,
          G,
          X,
          W = 0
        if (y)
          if (y.constructor === Array) (K = y), (y = null)
          else {
            if (
              ((a = y.query || a),
              (K = (z = y.pluck) || y.index || y.field),
              (R = y.tag),
              (O = this.store && y.enrich),
              (G = y.bool === "and"),
              (c = y.limit || c || 100),
              (X = y.offset || 0),
              R && (se(R) && (R = [R]), !a))
            ) {
              for (let it = 0, r; it < R.length; it++)
                (r = he.call(this, R[it], c, X, O)) && ((_[_.length] = r), W++)
              return W ? _ : []
            }
            se(K) && (K = [K])
          }
        K || (K = this.h), (G = G && (1 < K.length || (R && 1 < R.length)))
        let ot = !b && (this.o || this.async) && []
        for (let it = 0, r, g, x; it < K.length; it++) {
          let C
          if (
            ((g = K[it]),
            se(g) ||
              ((C = g), (g = C.field), (a = C.query || a), (c = C.limit || c), (O = C.enrich || O)),
            ot)
          )
            ot[it] = this.index[g].searchAsync(a, c, C || y)
          else {
            if (
              (b ? (r = b[it]) : (r = this.index[g].search(a, c, C || y)),
              (x = r && r.length),
              R && x)
            ) {
              let B = [],
                I = 0
              G && (B[0] = [r])
              for (let et = 0, nt, lt; et < R.length; et++)
                (nt = R[et]),
                  (x = (lt = this.l[nt]) && lt.length) && (I++, (B[B.length] = G ? [lt] : lt))
              I && ((r = G ? Be(B, c || 100, X || 0) : sn(r, B)), (x = r.length))
            }
            if (x) (F[W] = g), (_[W++] = r)
            else if (G) return []
          }
        }
        if (ot) {
          let it = this
          return new Promise(function (r) {
            Promise.all(ot).then(function (g) {
              r(it.search(a, c, y, g))
            })
          })
        }
        if (!W) return []
        if (z && (!O || !this.store)) return _[0]
        for (let it = 0, r; it < F.length; it++) {
          if (((r = _[it]), r.length && O && (r = zt.call(this, r)), z)) return r
          _[it] = { field: F[it], result: r }
        }
        return _
      })
    function he(a, c, y, b) {
      let _ = this.l[a],
        F = _ && _.length - y
      if (F && 0 < F)
        return (
          (F > c || y) && (_ = _.slice(y, y + c)),
          b && (_ = zt.call(this, _)),
          { tag: a, result: _ }
        )
    }
    function zt(a) {
      let c = Array(a.length)
      for (let y = 0, b; y < a.length; y++) (b = a[y]), (c[y] = { id: b, doc: this.store[b] })
      return c
    }
    ;(Vt.contain = function (a) {
      return !!this.register[a]
    }),
      (Vt.get = function (a) {
        return this.store[a]
      }),
      (Vt.set = function (a, c) {
        return (this.store[a] = c), this
      }),
      (Vt.searchCache = tn),
      (Vt.export = function (a, c, y, b, _, F) {
        let z
        if (
          (typeof F > "u" &&
            (z = new Promise((O) => {
              F = O
            })),
          _ || (_ = 0),
          b || (b = 0),
          b < this.h.length)
        ) {
          let O = this.h[b],
            K = this.index[O]
          ;(c = this),
            setTimeout(function () {
              K.export(a, c, _ ? O : "", b, _++, F) || (b++, (_ = 1), c.export(a, c, O, b, _, F))
            })
        } else {
          let O, K
          switch (_) {
            case 1:
              ;(O = "tag"), (K = this.l), (y = null)
              break
            case 2:
              ;(O = "store"), (K = this.store), (y = null)
              break
            default:
              F()
              return
          }
          en(a, this, y, O, b, _, K, F)
        }
        return z
      }),
      (Vt.import = function (a, c) {
        if (c)
          switch ((se(c) && (c = JSON.parse(c)), a)) {
            case "tag":
              this.l = c
              break
            case "reg":
              ;(this.m = !1), (this.register = c)
              for (let b = 0, _; b < this.h.length; b++)
                (_ = this.index[this.h[b]]), (_.register = c), (_.m = !1)
              break
            case "store":
              this.store = c
              break
            default:
              a = a.split(".")
              let y = a[0]
              ;(a = a[1]), y && a && this.index[y].import(a, c)
          }
      }),
      yn(Gt.prototype)
    var ke = { encode: Te, F: !1, G: "" },
      Ke = [
        ce("[\xE0\xE1\xE2\xE3\xE4\xE5]"),
        "a",
        ce("[\xE8\xE9\xEA\xEB]"),
        "e",
        ce("[\xEC\xED\xEE\xEF]"),
        "i",
        ce("[\xF2\xF3\xF4\xF5\xF6\u0151]"),
        "o",
        ce("[\xF9\xFA\xFB\xFC\u0171]"),
        "u",
        ce("[\xFD\u0177\xFF]"),
        "y",
        ce("\xF1"),
        "n",
        ce("[\xE7c]"),
        "k",
        ce("\xDF"),
        "s",
        ce(" & "),
        " and ",
      ]
    function Te(a) {
      var c = (a = "" + a)
      return (
        c.normalize && (c = c.normalize("NFD").replace(Ge, "")),
        Ye.call(this, c.toLowerCase(), !a.normalize && Ke)
      )
    }
    var Je = { encode: bn, F: !1, G: "strict" },
      wn = /[^a-z0-9]+/,
      xn = {
        b: "p",
        v: "f",
        w: "f",
        z: "s",
        x: "s",
        ß: "s",
        d: "t",
        n: "m",
        c: "k",
        g: "k",
        j: "k",
        q: "k",
        i: "e",
        y: "e",
        u: "o",
      }
    function bn(a) {
      a = Te.call(this, a).join(" ")
      let c = []
      if (a) {
        let y = a.split(wn),
          b = y.length
        for (let _ = 0, F, z = 0; _ < b; _++)
          if ((a = y[_]) && (!this.filter || !this.filter[a])) {
            F = a[0]
            let O = xn[F] || F,
              K = O
            for (let R = 1; R < a.length; R++) {
              F = a[R]
              let G = xn[F] || F
              G && G !== K && ((O += G), (K = G))
            }
            c[z++] = O
          }
      }
      return c
    }
    var kn = { encode: Cn, F: !1, G: "" },
      cn = [
        ce("ae"),
        "a",
        ce("oe"),
        "o",
        ce("sh"),
        "s",
        ce("th"),
        "t",
        ce("ph"),
        "f",
        ce("pf"),
        "f",
        ce("(?![aeo])h(?![aeo])"),
        "",
        ce("(?!^[aeo])h(?!^[aeo])"),
        "",
      ]
    function Cn(a, c) {
      return (
        a &&
          ((a = bn.call(this, a).join(" ")),
          2 < a.length && (a = ie(a, cn)),
          c || (1 < a.length && (a = an(a)), a && (a = a.split(" ")))),
        a || []
      )
    }
    var $n = { encode: In, F: !1, G: "" },
      On = ce("(?!\\b)[aeo]")
    function In(a) {
      return (
        a &&
          ((a = Cn.call(this, a, !0)),
          1 < a.length && (a = a.replace(On, "")),
          1 < a.length && (a = an(a)),
          a && (a = a.split(" "))),
        a || []
      )
    }
    ;(_e["latin:default"] = pe),
      (_e["latin:simple"] = ke),
      (_e["latin:balance"] = Je),
      (_e["latin:advanced"] = kn),
      (_e["latin:extra"] = $n)
    var Dn = {
      Index: Pe,
      Document: Gt,
      Worker: Tt,
      registerCharset: function (a, c) {
        _e[a] = c
      },
      registerLanguage: function (a, c) {
        xe[a] = c
      },
    }
    function Rn(a, c) {
      if (!a) return
      function y(_) {
        _.target === this && (_.preventDefault(), c())
      }
      function b(_) {
        _.key.startsWith("Esc") && (_.preventDefault(), c())
      }
      a?.addEventListener("click", y),
        window.addCleanup(() => a?.removeEventListener("click", y)),
        document.addEventListener("keydown", b),
        window.addCleanup(() => document.removeEventListener("keydown", b))
    }
    function h(a) {
      for (; a.firstChild; ) a.removeChild(a.firstChild)
    }
    var M = Object.hasOwnProperty,
      T = Yt(de(), 1),
      j = (0, T.default)()
    function V(a) {
      let c = oe(me(a, "index"), !0)
      return c.length === 0 ? "/" : c
    }
    var J = (a, c, y) => {
      let b = new URL(a.getAttribute(c), y)
      a.setAttribute(c, b.pathname + b.hash)
    }
    function dt(a, c) {
      a.querySelectorAll('[href^="./"], [href^="../"]').forEach((y) => J(y, "href", c)),
        a.querySelectorAll('[src^="./"], [src^="../"]').forEach((y) => J(y, "src", c))
    }
    function pt(a) {
      let c = a
        .split("/")
        .filter((y) => y !== "")
        .slice(0, -1)
        .map((y) => "..")
        .join("/")
      return c.length === 0 && (c = "."), c
    }
    function Et(a, c) {
      return Pt(pt(a), V(c))
    }
    function Pt(...a) {
      return a
        .filter((c) => c !== "")
        .join("/")
        .replace(/\/\/+/g, "/")
    }
    function Kt(a, c) {
      return a === c || a.endsWith("/" + c)
    }
    function me(a, c) {
      return Kt(a, c) && (a = a.slice(0, -c.length)), a
    }
    function oe(a, c) {
      return (
        a.startsWith("/") && (a = a.substring(1)), !c && a.endsWith("/") && (a = a.slice(0, -1)), a
      )
    }
    var Zt = "basic",
      Ft = "",
      ae = (a) => a.toLowerCase().split(/([^a-z]|[^\x00-\x7F])/),
      Fe = new Dn.Document({
        charset: "latin:extra",
        encode: ae,
        document: {
          id: "id",
          index: [
            { field: "title", tokenize: "forward" },
            { field: "content", tokenize: "forward" },
            { field: "tags", tokenize: "forward" },
          ],
        },
      }),
      Qe = new DOMParser(),
      ze = new Map(),
      Me = 50,
      fn = 15,
      Mn = 15,
      Bn = (a) => {
        let c = a.split(/\s+/).filter((b) => b.trim() !== ""),
          y = c.length
        if (y > 1) for (let b = 1; b < y; b++) c.push(c.slice(0, b + 1).join(" "))
        return c.sort((b, _) => _.length - b.length)
      }
    function hn(a, c, y) {
      let b = Bn(a),
        _ = c.split(/\s+/).filter((K) => K !== ""),
        F = 0,
        z = _.length - 1
      if (y) {
        let K = (W) => b.some((ot) => W.toLowerCase().startsWith(ot.toLowerCase())),
          R = _.map(K),
          G = 0,
          X = 0
        for (let W = 0; W < Math.max(_.length - Me, 0); W++) {
          let ot = R.slice(W, W + Me).reduce((it, r) => it + (r ? 1 : 0), 0)
          ot >= G && ((G = ot), (X = W))
        }
        ;(F = Math.max(X - Me, 0)), (z = Math.min(F + 2 * Me, _.length - 1)), (_ = _.slice(F, z))
      }
      let O = _.map((K) => {
        for (let R of b)
          if (K.toLowerCase().includes(R.toLowerCase())) {
            let G = new RegExp(R.toLowerCase(), "gi")
            return K.replace(G, '<span class="highlight">$&</span>')
          }
        return K
      }).join(" ")
      return `${F === 0 ? "" : "..."}${O}${z === _.length - 1 ? "" : "..."}`
    }
    function L(a, c) {
      let y = new DOMParser(),
        b = Bn(a),
        _ = y.parseFromString(c.innerHTML, "text/html"),
        F = (O) => {
          let K = document.createElement("span")
          return (K.className = "highlight"), (K.textContent = O), K
        },
        z = (O, K) => {
          if (O.nodeType === Node.TEXT_NODE) {
            let R = O.nodeValue ?? "",
              G = new RegExp(K.toLowerCase(), "gi"),
              X = R.match(G)
            if (!X || X.length === 0) return
            let W = document.createElement("span"),
              ot = 0
            for (let it of X) {
              let r = R.indexOf(it, ot)
              W.appendChild(document.createTextNode(R.slice(ot, r))),
                W.appendChild(F(it)),
                (ot = r + it.length)
            }
            W.appendChild(document.createTextNode(R.slice(ot))), O.parentNode?.replaceChild(W, O)
          } else if (O.nodeType === Node.ELEMENT_NODE) {
            if (O.classList.contains("highlight")) return
            Array.from(O.childNodes).forEach((R) => z(R, K))
          }
        }
      for (let O of b) z(_.body, O)
      return _.body
    }
    document.addEventListener("nav", async (a) => {
      let c = a.detail.url,
        y = await fetchData,
        b = document.getElementById("search-container"),
        _ = b?.closest(".sidebar"),
        F = document.getElementById("search-icon"),
        z = document.getElementById("search-bar"),
        O = document.getElementById("search-layout"),
        K = Object.keys(y),
        R = (ft) => {
          O?.querySelector(`#${ft.id}`) === null && O?.appendChild(ft)
        },
        G = O?.dataset?.preview === "true",
        X,
        W,
        ot = document.createElement("div")
      ;(ot.id = "results-container"),
        R(ot),
        G && ((X = document.createElement("div")), (X.id = "preview-container"), R(X))
      function it() {
        b?.classList.remove("active"),
          z && (z.value = ""),
          _ && (_.style.zIndex = "unset"),
          ot && h(ot),
          X && h(X),
          O && O.classList.remove("display-results"),
          (Zt = "basic")
      }
      function r(ft) {
        ;(Zt = ft), _ && (_.style.zIndex = "1"), b?.classList.add("active"), z?.focus()
      }
      let g = null
      async function x(ft) {
        if (ft.key === "k" && (ft.ctrlKey || ft.metaKey) && !ft.shiftKey) {
          ft.preventDefault(), b?.classList.contains("active") ? it() : r("basic")
          return
        } else if (ft.shiftKey && (ft.ctrlKey || ft.metaKey) && ft.key.toLowerCase() === "k") {
          ft.preventDefault(),
            b?.classList.contains("active") ? it() : r("tags"),
            z && (z.value = "#")
          return
        }
        if ((g && g.classList.remove("focus"), !!b?.classList.contains("active"))) {
          if (ft.key === "Enter")
            if (ot?.contains(document.activeElement)) {
              let ht = document.activeElement
              if (ht.classList.contains("no-match")) return
              await bt(ht), ht.click()
            } else {
              let ht = document.getElementsByClassName("result-card")[0]
              if (!ht || ht?.classList.contains("no-match")) return
              await bt(ht), ht.click()
            }
          else if (ft.key === "ArrowUp" || (ft.shiftKey && ft.key === "Tab")) {
            if ((ft.preventDefault(), ot?.contains(document.activeElement))) {
              let ht = g || document.activeElement,
                ct = ht?.previousElementSibling
              ht?.classList.remove("focus"), ct?.focus(), ct && (g = ct), await bt(ct)
            }
          } else if (
            (ft.key === "ArrowDown" || ft.key === "Tab") &&
            (ft.preventDefault(), document.activeElement === z || g !== null)
          ) {
            let ht = g || document.getElementsByClassName("result-card")[0],
              ct = ht?.nextElementSibling
            ht?.classList.remove("focus"), ct?.focus(), ct && (g = ct), await bt(ct)
          }
        }
      }
      let C = (ft, ht) => {
        let ct = K[ht]
        return {
          id: ht,
          slug: ct,
          title: Zt === "tags" ? y[ct].title : hn(ft, y[ct].title ?? ""),
          content: hn(ft, y[ct].content ?? "", !0),
          tags: B(ft.substring(1), y[ct].tags),
        }
      }
      function B(ft, ht) {
        return !ht || Zt !== "tags"
          ? []
          : ht
              .map((ct) =>
                ct.toLowerCase().includes(ft.toLowerCase())
                  ? `<li><p class="match-tag">#${ct}</p></li>`
                  : `<li><p>#${ct}</p></li>`,
              )
              .slice(0, Mn)
      }
      function I(ft) {
        return new URL(Et(c, ft), location.toString())
      }
      let et = ({ slug: ft, title: ht, content: ct, tags: yt }) => {
        let Dt = yt.length > 0 ? `<ul class="tags">${yt.join("")}</ul>` : "",
          Rt = document.createElement("a")
        Rt.classList.add("result-card"),
          (Rt.id = ft),
          (Rt.href = I(ft).toString()),
          (Rt.innerHTML = `<h3>${ht}</h3>${Dt}${G && window.innerWidth > 600 ? "" : `<p>${ct}</p>`}`),
          Rt.addEventListener("click", (Qt) => {
            Qt.altKey || Qt.ctrlKey || Qt.metaKey || Qt.shiftKey || it()
          })
        let le = (Qt) => {
          Qt.altKey || Qt.ctrlKey || Qt.metaKey || Qt.shiftKey || it()
        }
        async function Le(Qt) {
          if (!Qt.target) return
          let rn = Qt.target
          await bt(rn)
        }
        return (
          Rt.addEventListener("mouseenter", Le),
          window.addCleanup(() => Rt.removeEventListener("mouseenter", Le)),
          Rt.addEventListener("click", le),
          window.addCleanup(() => Rt.removeEventListener("click", le)),
          Rt
        )
      }
      async function nt(ft) {
        if (ot)
          if (
            (h(ot),
            ft.length === 0
              ? (ot.innerHTML = `<a class="result-card no-match">
          <h3>No results.</h3>
          <p>Try another search term?</p>
      </a>`)
              : ot.append(...ft.map(et)),
            ft.length === 0 && X)
          )
            h(X)
          else {
            let ht = ot.firstElementChild
            ht.classList.add("focus"), (g = ht), await bt(ht)
          }
      }
      async function lt(ft) {
        if (ze.has(ft)) return ze.get(ft)
        let ht = I(ft).toString(),
          ct = await fetch(ht)
            .then((yt) => yt.text())
            .then((yt) => {
              if (yt === void 0) throw new Error(`Could not fetch ${ht}`)
              let Dt = Qe.parseFromString(yt ?? "", "text/html")
              if (Dt.body.dataset.enablePreview === "false") {
                let Rt = document.createElement("div")
                return (
                  (Rt.innerHTML = "<p>L'aper\xE7u est d\xE9sactiv\xE9 sur cette page.</p>"), [Rt]
                )
              }
              return dt(Dt, ht), [...Dt.getElementsByClassName("popover-hint")]
            })
        return ze.set(ft, ct), ct
      }
      async function bt(ft) {
        if (!O || !G || !ft || !X) return
        let ht = ft.id,
          ct = await lt(ht).then((yt) => yt.flatMap((Dt) => [...L(Ft, Dt).children]))
        ;(W = document.createElement("div")),
          W.classList.add("preview-inner"),
          W.append(...ct),
          X.replaceChildren(W),
          [...X.querySelectorAll(".highlight")]
            .sort((yt, Dt) => Dt.innerHTML.length - yt.innerHTML.length)[0]
            ?.scrollIntoView({ block: "start" })
      }
      async function Bt(ft) {
        if (!O || !Fe) return
        ;(Ft = ft.target.value),
          O.classList.toggle("display-results", Ft !== ""),
          (Zt = Ft.startsWith("#") ? "tags" : "basic")
        let ht
        Zt === "tags"
          ? (ht = await Fe.searchAsync({ query: Ft.substring(1), limit: fn, index: ["tags"] }))
          : Zt === "basic" &&
            (ht = await Fe.searchAsync({ query: Ft, limit: fn, index: ["title", "content"] }))
        let ct = (Dt) => {
            let Rt = ht.filter((le) => le.field === Dt)
            return Rt.length === 0 ? [] : [...Rt[0].result]
          },
          yt = [...new Set([...ct("title"), ...ct("content"), ...ct("tags")])].map((Dt) =>
            C(Ft, Dt),
          )
        await nt(yt)
      }
      document.addEventListener("keydown", x),
        window.addCleanup(() => document.removeEventListener("keydown", x)),
        F?.addEventListener("click", () => r("basic")),
        window.addCleanup(() => F?.removeEventListener("click", () => r("basic"))),
        z?.addEventListener("input", Bt),
        window.addCleanup(() => z?.removeEventListener("input", Bt)),
        Rn(b, it),
        await U(y)
    })
    async function U(a) {
      let c = 0,
        y = []
      for (let [b, _] of Object.entries(a))
        y.push(
          Fe.addAsync(c++, { id: c, slug: b, title: _.title, content: _.content, tags: _.tags }),
        )
      return await Promise.all(y)
    }
  })(),
  (function () {
    var je = Object.create,
      Ne = Object.defineProperty,
      qe = Object.getOwnPropertyDescriptor,
      ve = Object.getOwnPropertyNames,
      Ee = Object.getPrototypeOf,
      Jt = Object.prototype.hasOwnProperty,
      Oe = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports),
      Ie = (e, i, s, p) => {
        if ((i && typeof i == "object") || typeof i == "function")
          for (let v of ve(i))
            !Jt.call(e, v) &&
              v !== s &&
              Ne(e, v, { get: () => i[v], enumerable: !(p = qe(i, v)) || p.enumerable })
        return e
      },
      Yt = (e, i, s) => (
        (s = e != null ? je(Ee(e)) : {}),
        Ie(i || !e || !e.__esModule ? Ne(s, "default", { value: e, enumerable: !0 }) : s, e)
      ),
      on = Oe((e, i) => {
        "use strict"
        i.exports = p
        function s(E) {
          return E instanceof Buffer
            ? Buffer.from(E)
            : new E.constructor(E.buffer.slice(), E.byteOffset, E.length)
        }
        function p(E) {
          if (((E = E || {}), E.circles)) return v(E)
          return E.proto ? q : N
          function k(t, n) {
            for (var u = Object.keys(t), o = new Array(u.length), l = 0; l < u.length; l++) {
              var f = u[l],
                d = t[f]
              typeof d != "object" || d === null
                ? (o[f] = d)
                : d instanceof Date
                  ? (o[f] = new Date(d))
                  : ArrayBuffer.isView(d)
                    ? (o[f] = s(d))
                    : (o[f] = n(d))
            }
            return o
          }
          function N(t) {
            if (typeof t != "object" || t === null) return t
            if (t instanceof Date) return new Date(t)
            if (Array.isArray(t)) return k(t, N)
            if (t instanceof Map) return new Map(k(Array.from(t), N))
            if (t instanceof Set) return new Set(k(Array.from(t), N))
            var n = {}
            for (var u in t)
              if (Object.hasOwnProperty.call(t, u) !== !1) {
                var o = t[u]
                typeof o != "object" || o === null
                  ? (n[u] = o)
                  : o instanceof Date
                    ? (n[u] = new Date(o))
                    : o instanceof Map
                      ? (n[u] = new Map(k(Array.from(o), N)))
                      : o instanceof Set
                        ? (n[u] = new Set(k(Array.from(o), N)))
                        : ArrayBuffer.isView(o)
                          ? (n[u] = s(o))
                          : (n[u] = N(o))
              }
            return n
          }
          function q(t) {
            if (typeof t != "object" || t === null) return t
            if (t instanceof Date) return new Date(t)
            if (Array.isArray(t)) return k(t, q)
            if (t instanceof Map) return new Map(k(Array.from(t), q))
            if (t instanceof Set) return new Set(k(Array.from(t), q))
            var n = {}
            for (var u in t) {
              var o = t[u]
              typeof o != "object" || o === null
                ? (n[u] = o)
                : o instanceof Date
                  ? (n[u] = new Date(o))
                  : o instanceof Map
                    ? (n[u] = new Map(k(Array.from(o), q)))
                    : o instanceof Set
                      ? (n[u] = new Set(k(Array.from(o), q)))
                      : ArrayBuffer.isView(o)
                        ? (n[u] = s(o))
                        : (n[u] = q(o))
            }
            return n
          }
        }
        function v(E) {
          var k = [],
            N = []
          return E.proto ? n : t
          function q(u, o) {
            for (var l = Object.keys(u), f = new Array(l.length), d = 0; d < l.length; d++) {
              var m = l[d],
                w = u[m]
              if (typeof w != "object" || w === null) f[m] = w
              else if (w instanceof Date) f[m] = new Date(w)
              else if (ArrayBuffer.isView(w)) f[m] = s(w)
              else {
                var A = k.indexOf(w)
                A !== -1 ? (f[m] = N[A]) : (f[m] = o(w))
              }
            }
            return f
          }
          function t(u) {
            if (typeof u != "object" || u === null) return u
            if (u instanceof Date) return new Date(u)
            if (Array.isArray(u)) return q(u, t)
            if (u instanceof Map) return new Map(q(Array.from(u), t))
            if (u instanceof Set) return new Set(q(Array.from(u), t))
            var o = {}
            k.push(u), N.push(o)
            for (var l in u)
              if (Object.hasOwnProperty.call(u, l) !== !1) {
                var f = u[l]
                if (typeof f != "object" || f === null) o[l] = f
                else if (f instanceof Date) o[l] = new Date(f)
                else if (f instanceof Map) o[l] = new Map(q(Array.from(f), t))
                else if (f instanceof Set) o[l] = new Set(q(Array.from(f), t))
                else if (ArrayBuffer.isView(f)) o[l] = s(f)
                else {
                  var d = k.indexOf(f)
                  d !== -1 ? (o[l] = N[d]) : (o[l] = t(f))
                }
              }
            return k.pop(), N.pop(), o
          }
          function n(u) {
            if (typeof u != "object" || u === null) return u
            if (u instanceof Date) return new Date(u)
            if (Array.isArray(u)) return q(u, n)
            if (u instanceof Map) return new Map(q(Array.from(u), n))
            if (u instanceof Set) return new Set(q(Array.from(u), n))
            var o = {}
            k.push(u), N.push(o)
            for (var l in u) {
              var f = u[l]
              if (typeof f != "object" || f === null) o[l] = f
              else if (f instanceof Date) o[l] = new Date(f)
              else if (f instanceof Map) o[l] = new Map(q(Array.from(f), n))
              else if (f instanceof Set) o[l] = new Set(q(Array.from(f), n))
              else if (ArrayBuffer.isView(f)) o[l] = s(f)
              else {
                var d = k.indexOf(f)
                d !== -1 ? (o[l] = N[d]) : (o[l] = n(f))
              }
            }
            return k.pop(), N.pop(), o
          }
        }
      }),
      de = { value: () => {} }
    function Vt() {
      for (var e = 0, i = arguments.length, s = {}, p; e < i; ++e) {
        if (!(p = arguments[e] + "") || p in s || /[\s.]/.test(p))
          throw new Error("illegal type: " + p)
        s[p] = []
      }
      return new Se(s)
    }
    function Se(e) {
      this._ = e
    }
    function ne(e, i) {
      return e
        .trim()
        .split(/^|\s+/)
        .map(function (s) {
          var p = "",
            v = s.indexOf(".")
          if ((v >= 0 && ((p = s.slice(v + 1)), (s = s.slice(0, v))), s && !i.hasOwnProperty(s)))
            throw new Error("unknown type: " + s)
          return { type: s, name: p }
        })
    }
    Se.prototype = Vt.prototype = {
      constructor: Se,
      on: function (e, i) {
        var s = this._,
          p = ne(e + "", s),
          v,
          E = -1,
          k = p.length
        if (arguments.length < 2) {
          for (; ++E < k; ) if ((v = (e = p[E]).type) && (v = ye(s[v], e.name))) return v
          return
        }
        if (i != null && typeof i != "function") throw new Error("invalid callback: " + i)
        for (; ++E < k; )
          if ((v = (e = p[E]).type)) s[v] = mn(s[v], e.name, i)
          else if (i == null) for (v in s) s[v] = mn(s[v], e.name, null)
        return this
      },
      copy: function () {
        var e = {},
          i = this._
        for (var s in i) e[s] = i[s].slice()
        return new Se(e)
      },
      call: function (e, i) {
        if ((v = arguments.length - 2) > 0)
          for (var s = new Array(v), p = 0, v, E; p < v; ++p) s[p] = arguments[p + 2]
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e)
        for (E = this._[e], p = 0, v = E.length; p < v; ++p) E[p].value.apply(i, s)
      },
      apply: function (e, i, s) {
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e)
        for (var p = this._[e], v = 0, E = p.length; v < E; ++v) p[v].value.apply(i, s)
      },
    }
    function ye(e, i) {
      for (var s = 0, p = e.length, v; s < p; ++s) if ((v = e[s]).name === i) return v.value
    }
    function mn(e, i, s) {
      for (var p = 0, v = e.length; p < v; ++p)
        if (e[p].name === i) {
          ;(e[p] = de), (e = e.slice(0, p).concat(e.slice(p + 1)))
          break
        }
      return s != null && e.push({ name: i, value: s }), e
    }
    var se = Vt,
      De = "http://www.w3.org/1999/xhtml",
      te = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: De,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      }
    function Ye(e) {
      var i = (e += ""),
        s = i.indexOf(":")
      return (
        s >= 0 && (i = e.slice(0, s)) !== "xmlns" && (e = e.slice(s + 1)),
        te.hasOwnProperty(i) ? { space: te[i], local: e } : e
      )
    }
    function vn(e) {
      return function () {
        var i = this.ownerDocument,
          s = this.namespaceURI
        return s === De && i.documentElement.namespaceURI === De
          ? i.createElement(e)
          : i.createElementNS(s, e)
      }
    }
    function Ge(e) {
      return function () {
        return this.ownerDocument.createElementNS(e.space, e.local)
      }
    }
    function Ue(e) {
      var i = Ye(e)
      return (i.local ? Ge : vn)(i)
    }
    function ie() {}
    function ce(e) {
      return e == null
        ? ie
        : function () {
            return this.querySelector(e)
          }
    }
    function an(e) {
      typeof e != "function" && (e = ce(e))
      for (var i = this._groups, s = i.length, p = new Array(s), v = 0; v < s; ++v)
        for (var E = i[v], k = E.length, N = (p[v] = new Array(k)), q, t, n = 0; n < k; ++n)
          (q = E[n]) &&
            (t = e.call(q, q.__data__, n, E)) &&
            ("__data__" in q && (t.__data__ = q.__data__), (N[n] = t))
      return new lt(p, this._parents)
    }
    function pe(e) {
      return e == null ? [] : Array.isArray(e) ? e : Array.from(e)
    }
    function An() {
      return []
    }
    function xe(e) {
      return e == null
        ? An
        : function () {
            return this.querySelectorAll(e)
          }
    }
    function _e(e) {
      return function () {
        return pe(e.apply(this, arguments))
      }
    }
    function yn(e) {
      typeof e == "function" ? (e = _e(e)) : (e = xe(e))
      for (var i = this._groups, s = i.length, p = [], v = [], E = 0; E < s; ++E)
        for (var k = i[E], N = k.length, q, t = 0; t < N; ++t)
          (q = k[t]) && (p.push(e.call(q, q.__data__, t, k)), v.push(q))
      return new lt(p, v)
    }
    function Re(e) {
      return function () {
        return this.matches(e)
      }
    }
    function Be(e) {
      return function (i) {
        return i.matches(e)
      }
    }
    var sn = Array.prototype.find
    function We(e) {
      return function () {
        return sn.call(this.children, e)
      }
    }
    function tn() {
      return this.firstElementChild
    }
    function we(e) {
      return this.select(e == null ? tn : We(typeof e == "function" ? e : Be(e)))
    }
    var en = Array.prototype.filter
    function Pe() {
      return Array.from(this.children)
    }
    function nn(e) {
      return function () {
        return en.call(this.children, e)
      }
    }
    function Ve(e) {
      return this.selectAll(e == null ? Pe : nn(typeof e == "function" ? e : Be(e)))
    }
    function Ae(e) {
      typeof e != "function" && (e = Re(e))
      for (var i = this._groups, s = i.length, p = new Array(s), v = 0; v < s; ++v)
        for (var E = i[v], k = E.length, N = (p[v] = []), q, t = 0; t < k; ++t)
          (q = E[t]) && e.call(q, q.__data__, t, E) && N.push(q)
      return new lt(p, this._parents)
    }
    function Z(e) {
      return new Array(e.length)
    }
    function vt() {
      return new lt(this._enter || this._groups.map(Z), this._parents)
    }
    function Ct(e, i) {
      ;(this.ownerDocument = e.ownerDocument),
        (this.namespaceURI = e.namespaceURI),
        (this._next = null),
        (this._parent = e),
        (this.__data__ = i)
    }
    Ct.prototype = {
      constructor: Ct,
      appendChild: function (e) {
        return this._parent.insertBefore(e, this._next)
      },
      insertBefore: function (e, i) {
        return this._parent.insertBefore(e, i)
      },
      querySelector: function (e) {
        return this._parent.querySelector(e)
      },
      querySelectorAll: function (e) {
        return this._parent.querySelectorAll(e)
      },
    }
    function Nt(e) {
      return function () {
        return e
      }
    }
    function qt(e, i, s, p, v, E) {
      for (var k = 0, N, q = i.length, t = E.length; k < t; ++k)
        (N = i[k]) ? ((N.__data__ = E[k]), (p[k] = N)) : (s[k] = new Ct(e, E[k]))
      for (; k < q; ++k) (N = i[k]) && (v[k] = N)
    }
    function Tt(e, i, s, p, v, E, k) {
      var N,
        q,
        t = new Map(),
        n = i.length,
        u = E.length,
        o = new Array(n),
        l
      for (N = 0; N < n; ++N)
        (q = i[N]) &&
          ((o[N] = l = k.call(q, q.__data__, N, i) + ""), t.has(l) ? (v[N] = q) : t.set(l, q))
      for (N = 0; N < u; ++N)
        (l = k.call(e, E[N], N, E) + ""),
          (q = t.get(l)) ? ((p[N] = q), (q.__data__ = E[N]), t.delete(l)) : (s[N] = new Ct(e, E[N]))
      for (N = 0; N < n; ++N) (q = i[N]) && t.get(o[N]) === q && (v[N] = q)
    }
    function jt(e) {
      return e.__data__
    }
    function fe(e, i) {
      if (!arguments.length) return Array.from(this, jt)
      var s = i ? Tt : qt,
        p = this._parents,
        v = this._groups
      typeof e != "function" && (e = Nt(e))
      for (
        var E = v.length, k = new Array(E), N = new Array(E), q = new Array(E), t = 0;
        t < E;
        ++t
      ) {
        var n = p[t],
          u = v[t],
          o = u.length,
          l = Gt(e.call(n, n && n.__data__, t, p)),
          f = l.length,
          d = (N[t] = new Array(f)),
          m = (k[t] = new Array(f)),
          w = (q[t] = new Array(o))
        s(n, u, d, m, w, l, i)
        for (var A = 0, $ = 0, D, S; A < f; ++A)
          if ((D = d[A])) {
            for (A >= $ && ($ = A + 1); !(S = m[$]) && ++$ < f; );
            D._next = S || null
          }
      }
      return (k = new lt(k, p)), (k._enter = N), (k._exit = q), k
    }
    function Gt(e) {
      return typeof e == "object" && "length" in e ? e : Array.from(e)
    }
    function Ht() {
      return new lt(this._exit || this._groups.map(Z), this._parents)
    }
    function ue(e, i, s) {
      var p = this.enter(),
        v = this,
        E = this.exit()
      return (
        typeof e == "function" ? ((p = e(p)), p && (p = p.selection())) : (p = p.append(e + "")),
        i != null && ((v = i(v)), v && (v = v.selection())),
        s == null ? E.remove() : s(E),
        p && v ? p.merge(v).order() : v
      )
    }
    function St(e) {
      for (
        var i = e.selection ? e.selection() : e,
          s = this._groups,
          p = i._groups,
          v = s.length,
          E = p.length,
          k = Math.min(v, E),
          N = new Array(v),
          q = 0;
        q < k;
        ++q
      )
        for (var t = s[q], n = p[q], u = t.length, o = (N[q] = new Array(u)), l, f = 0; f < u; ++f)
          (l = t[f] || n[f]) && (o[f] = l)
      for (; q < v; ++q) N[q] = s[q]
      return new lt(N, this._parents)
    }
    function Lt() {
      for (var e = this._groups, i = -1, s = e.length; ++i < s; )
        for (var p = e[i], v = p.length - 1, E = p[v], k; --v >= 0; )
          (k = p[v]) &&
            (E && k.compareDocumentPosition(E) ^ 4 && E.parentNode.insertBefore(k, E), (E = k))
      return this
    }
    function he(e) {
      e || (e = zt)
      function i(u, o) {
        return u && o ? e(u.__data__, o.__data__) : !u - !o
      }
      for (var s = this._groups, p = s.length, v = new Array(p), E = 0; E < p; ++E) {
        for (var k = s[E], N = k.length, q = (v[E] = new Array(N)), t, n = 0; n < N; ++n)
          (t = k[n]) && (q[n] = t)
        q.sort(i)
      }
      return new lt(v, this._parents).order()
    }
    function zt(e, i) {
      return e < i ? -1 : e > i ? 1 : e >= i ? 0 : NaN
    }
    function ke() {
      var e = arguments[0]
      return (arguments[0] = this), e.apply(null, arguments), this
    }
    function Ke() {
      return Array.from(this)
    }
    function Te() {
      for (var e = this._groups, i = 0, s = e.length; i < s; ++i)
        for (var p = e[i], v = 0, E = p.length; v < E; ++v) {
          var k = p[v]
          if (k) return k
        }
      return null
    }
    function Je() {
      let e = 0
      for (let i of this) ++e
      return e
    }
    function wn() {
      return !this.node()
    }
    function xn(e) {
      for (var i = this._groups, s = 0, p = i.length; s < p; ++s)
        for (var v = i[s], E = 0, k = v.length, N; E < k; ++E)
          (N = v[E]) && e.call(N, N.__data__, E, v)
      return this
    }
    function bn(e) {
      return function () {
        this.removeAttribute(e)
      }
    }
    function kn(e) {
      return function () {
        this.removeAttributeNS(e.space, e.local)
      }
    }
    function cn(e, i) {
      return function () {
        this.setAttribute(e, i)
      }
    }
    function Cn(e, i) {
      return function () {
        this.setAttributeNS(e.space, e.local, i)
      }
    }
    function $n(e, i) {
      return function () {
        var s = i.apply(this, arguments)
        s == null ? this.removeAttribute(e) : this.setAttribute(e, s)
      }
    }
    function On(e, i) {
      return function () {
        var s = i.apply(this, arguments)
        s == null
          ? this.removeAttributeNS(e.space, e.local)
          : this.setAttributeNS(e.space, e.local, s)
      }
    }
    function In(e, i) {
      var s = Ye(e)
      if (arguments.length < 2) {
        var p = this.node()
        return s.local ? p.getAttributeNS(s.space, s.local) : p.getAttribute(s)
      }
      return this.each(
        (i == null
          ? s.local
            ? kn
            : bn
          : typeof i == "function"
            ? s.local
              ? On
              : $n
            : s.local
              ? Cn
              : cn)(s, i),
      )
    }
    function Dn(e) {
      return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView
    }
    function Rn(e) {
      return function () {
        this.style.removeProperty(e)
      }
    }
    function h(e, i, s) {
      return function () {
        this.style.setProperty(e, i, s)
      }
    }
    function M(e, i, s) {
      return function () {
        var p = i.apply(this, arguments)
        p == null ? this.style.removeProperty(e) : this.style.setProperty(e, p, s)
      }
    }
    function T(e, i, s) {
      return arguments.length > 1
        ? this.each((i == null ? Rn : typeof i == "function" ? M : h)(e, i, s ?? ""))
        : j(this.node(), e)
    }
    function j(e, i) {
      return e.style.getPropertyValue(i) || Dn(e).getComputedStyle(e, null).getPropertyValue(i)
    }
    function V(e) {
      return function () {
        delete this[e]
      }
    }
    function J(e, i) {
      return function () {
        this[e] = i
      }
    }
    function dt(e, i) {
      return function () {
        var s = i.apply(this, arguments)
        s == null ? delete this[e] : (this[e] = s)
      }
    }
    function pt(e, i) {
      return arguments.length > 1
        ? this.each((i == null ? V : typeof i == "function" ? dt : J)(e, i))
        : this.node()[e]
    }
    function Et(e) {
      return e.trim().split(/^|\s+/)
    }
    function Pt(e) {
      return e.classList || new Kt(e)
    }
    function Kt(e) {
      ;(this._node = e), (this._names = Et(e.getAttribute("class") || ""))
    }
    Kt.prototype = {
      add: function (e) {
        var i = this._names.indexOf(e)
        i < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")))
      },
      remove: function (e) {
        var i = this._names.indexOf(e)
        i >= 0 &&
          (this._names.splice(i, 1), this._node.setAttribute("class", this._names.join(" ")))
      },
      contains: function (e) {
        return this._names.indexOf(e) >= 0
      },
    }
    function me(e, i) {
      for (var s = Pt(e), p = -1, v = i.length; ++p < v; ) s.add(i[p])
    }
    function oe(e, i) {
      for (var s = Pt(e), p = -1, v = i.length; ++p < v; ) s.remove(i[p])
    }
    function Zt(e) {
      return function () {
        me(this, e)
      }
    }
    function Ft(e) {
      return function () {
        oe(this, e)
      }
    }
    function ae(e, i) {
      return function () {
        ;(i.apply(this, arguments) ? me : oe)(this, e)
      }
    }
    function Fe(e, i) {
      var s = Et(e + "")
      if (arguments.length < 2) {
        for (var p = Pt(this.node()), v = -1, E = s.length; ++v < E; )
          if (!p.contains(s[v])) return !1
        return !0
      }
      return this.each((typeof i == "function" ? ae : i ? Zt : Ft)(s, i))
    }
    function Qe() {
      this.textContent = ""
    }
    function ze(e) {
      return function () {
        this.textContent = e
      }
    }
    function Me(e) {
      return function () {
        var i = e.apply(this, arguments)
        this.textContent = i ?? ""
      }
    }
    function fn(e) {
      return arguments.length
        ? this.each(e == null ? Qe : (typeof e == "function" ? Me : ze)(e))
        : this.node().textContent
    }
    function Mn() {
      this.innerHTML = ""
    }
    function Bn(e) {
      return function () {
        this.innerHTML = e
      }
    }
    function hn(e) {
      return function () {
        var i = e.apply(this, arguments)
        this.innerHTML = i ?? ""
      }
    }
    function L(e) {
      return arguments.length
        ? this.each(e == null ? Mn : (typeof e == "function" ? hn : Bn)(e))
        : this.node().innerHTML
    }
    function U() {
      this.nextSibling && this.parentNode.appendChild(this)
    }
    function a() {
      return this.each(U)
    }
    function c() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function y() {
      return this.each(c)
    }
    function b(e) {
      var i = typeof e == "function" ? e : Ue(e)
      return this.select(function () {
        return this.appendChild(i.apply(this, arguments))
      })
    }
    function _() {
      return null
    }
    function F(e, i) {
      var s = typeof e == "function" ? e : Ue(e),
        p = i == null ? _ : typeof i == "function" ? i : ce(i)
      return this.select(function () {
        return this.insertBefore(s.apply(this, arguments), p.apply(this, arguments) || null)
      })
    }
    function z() {
      var e = this.parentNode
      e && e.removeChild(this)
    }
    function O() {
      return this.each(z)
    }
    function K() {
      var e = this.cloneNode(!1),
        i = this.parentNode
      return i ? i.insertBefore(e, this.nextSibling) : e
    }
    function R() {
      var e = this.cloneNode(!0),
        i = this.parentNode
      return i ? i.insertBefore(e, this.nextSibling) : e
    }
    function G(e) {
      return this.select(e ? R : K)
    }
    function X(e) {
      return arguments.length ? this.property("__data__", e) : this.node().__data__
    }
    function W(e) {
      return function (i) {
        e.call(this, i, this.__data__)
      }
    }
    function ot(e) {
      return e
        .trim()
        .split(/^|\s+/)
        .map(function (i) {
          var s = "",
            p = i.indexOf(".")
          return p >= 0 && ((s = i.slice(p + 1)), (i = i.slice(0, p))), { type: i, name: s }
        })
    }
    function it(e) {
      return function () {
        var i = this.__on
        if (i) {
          for (var s = 0, p = -1, v = i.length, E; s < v; ++s)
            (E = i[s]),
              (!e.type || E.type === e.type) && E.name === e.name
                ? this.removeEventListener(E.type, E.listener, E.options)
                : (i[++p] = E)
          ++p ? (i.length = p) : delete this.__on
        }
      }
    }
    function r(e, i, s) {
      return function () {
        var p = this.__on,
          v,
          E = W(i)
        if (p) {
          for (var k = 0, N = p.length; k < N; ++k)
            if ((v = p[k]).type === e.type && v.name === e.name) {
              this.removeEventListener(v.type, v.listener, v.options),
                this.addEventListener(v.type, (v.listener = E), (v.options = s)),
                (v.value = i)
              return
            }
        }
        this.addEventListener(e.type, E, s),
          (v = { type: e.type, name: e.name, value: i, listener: E, options: s }),
          p ? p.push(v) : (this.__on = [v])
      }
    }
    function g(e, i, s) {
      var p = ot(e + ""),
        v,
        E = p.length,
        k
      if (arguments.length < 2) {
        var N = this.node().__on
        if (N) {
          for (var q = 0, t = N.length, n; q < t; ++q)
            for (v = 0, n = N[q]; v < E; ++v)
              if ((k = p[v]).type === n.type && k.name === n.name) return n.value
        }
        return
      }
      for (N = i ? r : it, v = 0; v < E; ++v) this.each(N(p[v], i, s))
      return this
    }
    function x(e, i, s) {
      var p = Dn(e),
        v = p.CustomEvent
      typeof v == "function"
        ? (v = new v(i, s))
        : ((v = p.document.createEvent("Event")),
          s
            ? (v.initEvent(i, s.bubbles, s.cancelable), (v.detail = s.detail))
            : v.initEvent(i, !1, !1)),
        e.dispatchEvent(v)
    }
    function C(e, i) {
      return function () {
        return x(this, e, i)
      }
    }
    function B(e, i) {
      return function () {
        return x(this, e, i.apply(this, arguments))
      }
    }
    function I(e, i) {
      return this.each((typeof i == "function" ? B : C)(e, i))
    }
    function* et() {
      for (var e = this._groups, i = 0, s = e.length; i < s; ++i)
        for (var p = e[i], v = 0, E = p.length, k; v < E; ++v) (k = p[v]) && (yield k)
    }
    var nt = [null]
    function lt(e, i) {
      ;(this._groups = e), (this._parents = i)
    }
    function bt() {
      return new lt([[document.documentElement]], nt)
    }
    function Bt() {
      return this
    }
    lt.prototype = bt.prototype = {
      constructor: lt,
      select: an,
      selectAll: yn,
      selectChild: we,
      selectChildren: Ve,
      filter: Ae,
      data: fe,
      enter: vt,
      exit: Ht,
      join: ue,
      merge: St,
      selection: Bt,
      order: Lt,
      sort: he,
      call: ke,
      nodes: Ke,
      node: Te,
      size: Je,
      empty: wn,
      each: xn,
      attr: In,
      style: T,
      property: pt,
      classed: Fe,
      text: fn,
      html: L,
      raise: a,
      lower: y,
      append: b,
      insert: F,
      remove: O,
      clone: G,
      datum: X,
      on: g,
      dispatch: I,
      [Symbol.iterator]: et,
    }
    var ft = bt
    function ht(e) {
      return typeof e == "string"
        ? new lt([[document.querySelector(e)]], [document.documentElement])
        : new lt([[e]], nt)
    }
    function ct(e) {
      let i
      for (; (i = e.sourceEvent); ) e = i
      return e
    }
    function yt(e, i) {
      if (((e = ct(e)), i === void 0 && (i = e.currentTarget), i)) {
        var s = i.ownerSVGElement || i
        if (s.createSVGPoint) {
          var p = s.createSVGPoint()
          return (
            (p.x = e.clientX),
            (p.y = e.clientY),
            (p = p.matrixTransform(i.getScreenCTM().inverse())),
            [p.x, p.y]
          )
        }
        if (i.getBoundingClientRect) {
          var v = i.getBoundingClientRect()
          return [e.clientX - v.left - i.clientLeft, e.clientY - v.top - i.clientTop]
        }
      }
      return [e.pageX, e.pageY]
    }
    function Dt(e) {
      return typeof e == "string"
        ? new lt([document.querySelectorAll(e)], [document.documentElement])
        : new lt([pe(e)], nt)
    }
    var Rt = { passive: !1 },
      le = { capture: !0, passive: !1 }
    function Le(e) {
      e.stopImmediatePropagation()
    }
    function Qt(e) {
      e.preventDefault(), e.stopImmediatePropagation()
    }
    function rn(e) {
      var i = e.document.documentElement,
        s = ht(e).on("dragstart.drag", Qt, le)
      "onselectstart" in i
        ? s.on("selectstart.drag", Qt, le)
        : ((i.__noselect = i.style.MozUserSelect), (i.style.MozUserSelect = "none"))
    }
    function cr(e, i) {
      var s = e.document.documentElement,
        p = ht(e).on("dragstart.drag", null)
      i &&
        (p.on("click.drag", Qt, le),
        setTimeout(function () {
          p.on("click.drag", null)
        }, 0)),
        "onselectstart" in s
          ? p.on("selectstart.drag", null)
          : ((s.style.MozUserSelect = s.__noselect), delete s.__noselect)
    }
    var Ln = (e) => () => e
    function jn(
      e,
      {
        sourceEvent: i,
        subject: s,
        target: p,
        identifier: v,
        active: E,
        x: k,
        y: N,
        dx: q,
        dy: t,
        dispatch: n,
      },
    ) {
      Object.defineProperties(this, {
        type: { value: e, enumerable: !0, configurable: !0 },
        sourceEvent: { value: i, enumerable: !0, configurable: !0 },
        subject: { value: s, enumerable: !0, configurable: !0 },
        target: { value: p, enumerable: !0, configurable: !0 },
        identifier: { value: v, enumerable: !0, configurable: !0 },
        active: { value: E, enumerable: !0, configurable: !0 },
        x: { value: k, enumerable: !0, configurable: !0 },
        y: { value: N, enumerable: !0, configurable: !0 },
        dx: { value: q, enumerable: !0, configurable: !0 },
        dy: { value: t, enumerable: !0, configurable: !0 },
        _: { value: n },
      })
    }
    jn.prototype.on = function () {
      var e = this._.on.apply(this._, arguments)
      return e === this._ ? this : e
    }
    function fr(e) {
      return !e.ctrlKey && !e.button
    }
    function Bi() {
      return this.parentNode
    }
    function Li(e, i) {
      return i ?? { x: e.x, y: e.y }
    }
    function Pr() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function fi() {
      var e = fr,
        i = Bi,
        s = Li,
        p = Pr,
        v = {},
        E = se("start", "drag", "end"),
        k = 0,
        N,
        q,
        t,
        n,
        u = 0
      function o(D) {
        D.on("mousedown.drag", l)
          .filter(p)
          .on("touchstart.drag", m)
          .on("touchmove.drag", w, Rt)
          .on("touchend.drag touchcancel.drag", A)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      function l(D, S) {
        if (!(n || !e.call(this, D, S))) {
          var P = $(this, i.call(this, D, S), D, S, "mouse")
          P &&
            (ht(D.view).on("mousemove.drag", f, le).on("mouseup.drag", d, le),
            rn(D.view),
            Le(D),
            (t = !1),
            (N = D.clientX),
            (q = D.clientY),
            P("start", D))
        }
      }
      function f(D) {
        if ((Qt(D), !t)) {
          var S = D.clientX - N,
            P = D.clientY - q
          t = S * S + P * P > u
        }
        v.mouse("drag", D)
      }
      function d(D) {
        ht(D.view).on("mousemove.drag mouseup.drag", null), cr(D.view, t), Qt(D), v.mouse("end", D)
      }
      function m(D, S) {
        if (e.call(this, D, S)) {
          var P = D.changedTouches,
            Q = i.call(this, D, S),
            tt = P.length,
            ut,
            rt
          for (ut = 0; ut < tt; ++ut)
            (rt = $(this, Q, D, S, P[ut].identifier, P[ut])) && (Le(D), rt("start", D, P[ut]))
        }
      }
      function w(D) {
        var S = D.changedTouches,
          P = S.length,
          Q,
          tt
        for (Q = 0; Q < P; ++Q) (tt = v[S[Q].identifier]) && (Qt(D), tt("drag", D, S[Q]))
      }
      function A(D) {
        var S = D.changedTouches,
          P = S.length,
          Q,
          tt
        for (
          n && clearTimeout(n),
            n = setTimeout(function () {
              n = null
            }, 500),
            Q = 0;
          Q < P;
          ++Q
        )
          (tt = v[S[Q].identifier]) && (Le(D), tt("end", D, S[Q]))
      }
      function $(D, S, P, Q, tt, ut) {
        var rt = E.copy(),
          _t = yt(ut || P, S),
          It,
          st,
          H
        if (
          (H = s.call(
            D,
            new jn("beforestart", {
              sourceEvent: P,
              target: o,
              identifier: tt,
              active: k,
              x: _t[0],
              y: _t[1],
              dx: 0,
              dy: 0,
              dispatch: rt,
            }),
            Q,
          )) != null
        )
          return (
            (It = H.x - _t[0] || 0),
            (st = H.y - _t[1] || 0),
            function wt(at, kt, $t) {
              var Ot = _t,
                gt
              switch (at) {
                case "start":
                  ;(v[tt] = wt), (gt = k++)
                  break
                case "end":
                  delete v[tt], --k
                case "drag":
                  ;(_t = yt($t || kt, S)), (gt = k)
                  break
              }
              rt.call(
                at,
                D,
                new jn(at, {
                  sourceEvent: kt,
                  subject: H,
                  target: o,
                  identifier: tt,
                  active: gt,
                  x: _t[0] + It,
                  y: _t[1] + st,
                  dx: _t[0] - Ot[0],
                  dy: _t[1] - Ot[1],
                  dispatch: rt,
                }),
                Q,
              )
            }
          )
      }
      return (
        (o.filter = function (D) {
          return arguments.length ? ((e = typeof D == "function" ? D : Ln(!!D)), o) : e
        }),
        (o.container = function (D) {
          return arguments.length ? ((i = typeof D == "function" ? D : Ln(D)), o) : i
        }),
        (o.subject = function (D) {
          return arguments.length ? ((s = typeof D == "function" ? D : Ln(D)), o) : s
        }),
        (o.touchable = function (D) {
          return arguments.length ? ((p = typeof D == "function" ? D : Ln(!!D)), o) : p
        }),
        (o.on = function () {
          var D = E.on.apply(E, arguments)
          return D === E ? o : D
        }),
        (o.clickDistance = function (D) {
          return arguments.length ? ((u = (D = +D) * D), o) : Math.sqrt(u)
        }),
        o
      )
    }
    function hi(e, i, s) {
      ;(e.prototype = i.prototype = s), (s.constructor = e)
    }
    function Ni(e, i) {
      var s = Object.create(e.prototype)
      for (var p in i) s[p] = i[p]
      return s
    }
    function Ar() {}
    var kr = 0.7,
      Ir = 1 / kr,
      Gn = "\\s*([+-]?\\d+)\\s*",
      hr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      En = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Cr = /^#([0-9a-f]{3,8})$/,
      Rr = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`),
      dr = new RegExp(`^rgb\\(${En},${En},${En}\\)$`),
      Dr = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${hr}\\)$`),
      qn = new RegExp(`^rgba\\(${En},${En},${En},${hr}\\)$`),
      pu = new RegExp(`^hsl\\(${hr},${En},${En}\\)$`),
      gu = new RegExp(`^hsla\\(${hr},${En},${En},${hr}\\)$`),
      Si = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      }
    hi(Ar, pr, {
      copy(e) {
        return Object.assign(new this.constructor(), this, e)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: Ti,
      formatHex: Ti,
      formatHex8: mu,
      formatHsl: vu,
      formatRgb: Fi,
      toString: Fi,
    })
    function Ti() {
      return this.rgb().formatHex()
    }
    function mu() {
      return this.rgb().formatHex8()
    }
    function vu() {
      return gi(this).formatHsl()
    }
    function Fi() {
      return this.rgb().formatRgb()
    }
    function pr(e) {
      var i, s
      return (
        (e = (e + "").trim().toLowerCase()),
        (i = Cr.exec(e))
          ? ((s = i[1].length),
            (i = parseInt(i[1], 16)),
            s === 6
              ? di(i)
              : s === 3
                ? new Ze(
                    ((i >> 8) & 15) | ((i >> 4) & 240),
                    ((i >> 4) & 15) | (i & 240),
                    ((i & 15) << 4) | (i & 15),
                    1,
                  )
                : s === 8
                  ? Vr((i >> 24) & 255, (i >> 16) & 255, (i >> 8) & 255, (i & 255) / 255)
                  : s === 4
                    ? Vr(
                        ((i >> 12) & 15) | ((i >> 8) & 240),
                        ((i >> 8) & 15) | ((i >> 4) & 240),
                        ((i >> 4) & 15) | (i & 240),
                        (((i & 15) << 4) | (i & 15)) / 255,
                      )
                    : null)
          : (i = Rr.exec(e))
            ? new Ze(i[1], i[2], i[3], 1)
            : (i = dr.exec(e))
              ? new Ze((i[1] * 255) / 100, (i[2] * 255) / 100, (i[3] * 255) / 100, 1)
              : (i = Dr.exec(e))
                ? Vr(i[1], i[2], i[3], i[4])
                : (i = qn.exec(e))
                  ? Vr((i[1] * 255) / 100, (i[2] * 255) / 100, (i[3] * 255) / 100, i[4])
                  : (i = pu.exec(e))
                    ? Oi(i[1], i[2] / 100, i[3] / 100, 1)
                    : (i = gu.exec(e))
                      ? Oi(i[1], i[2] / 100, i[3] / 100, i[4])
                      : Si.hasOwnProperty(e)
                        ? di(Si[e])
                        : e === "transparent"
                          ? new Ze(NaN, NaN, NaN, 0)
                          : null
      )
    }
    function di(e) {
      return new Ze((e >> 16) & 255, (e >> 8) & 255, e & 255, 1)
    }
    function Vr(e, i, s, p) {
      return p <= 0 && (e = i = s = NaN), new Ze(e, i, s, p)
    }
    function yu(e) {
      return (
        e instanceof Ar || (e = pr(e)),
        e ? ((e = e.rgb()), new Ze(e.r, e.g, e.b, e.opacity)) : new Ze()
      )
    }
    function Mr(e, i, s, p) {
      return arguments.length === 1 ? yu(e) : new Ze(e, i, s, p ?? 1)
    }
    function Ze(e, i, s, p) {
      ;(this.r = +e), (this.g = +i), (this.b = +s), (this.opacity = +p)
    }
    hi(
      Ze,
      Mr,
      Ni(Ar, {
        brighter(e) {
          return (
            (e = e == null ? Ir : Math.pow(Ir, e)),
            new Ze(this.r * e, this.g * e, this.b * e, this.opacity)
          )
        },
        darker(e) {
          return (
            (e = e == null ? kr : Math.pow(kr, e)),
            new Ze(this.r * e, this.g * e, this.b * e, this.opacity)
          )
        },
        rgb() {
          return this
        },
        clamp() {
          return new Ze(He(this.r), He(this.g), He(this.b), rr(this.opacity))
        },
        displayable() {
          return (
            -0.5 <= this.r &&
            this.r < 255.5 &&
            -0.5 <= this.g &&
            this.g < 255.5 &&
            -0.5 <= this.b &&
            this.b < 255.5 &&
            0 <= this.opacity &&
            this.opacity <= 1
          )
        },
        hex: pi,
        formatHex: pi,
        formatHex8: Hr,
        formatRgb: $i,
        toString: $i,
      }),
    )
    function pi() {
      return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}`
    }
    function Hr() {
      return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}${Jn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
    }
    function $i() {
      let e = rr(this.opacity)
      return `${e === 1 ? "rgb(" : "rgba("}${He(this.r)}, ${He(this.g)}, ${He(this.b)}${e === 1 ? ")" : `, ${e})`}`
    }
    function rr(e) {
      return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
    }
    function He(e) {
      return Math.max(0, Math.min(255, Math.round(e) || 0))
    }
    function Jn(e) {
      return (e = He(e)), (e < 16 ? "0" : "") + e.toString(16)
    }
    function Oi(e, i, s, p) {
      return (
        p <= 0 ? (e = i = s = NaN) : s <= 0 || s >= 1 ? (e = i = NaN) : i <= 0 && (e = NaN),
        new un(e, i, s, p)
      )
    }
    function gi(e) {
      if (e instanceof un) return new un(e.h, e.s, e.l, e.opacity)
      if ((e instanceof Ar || (e = pr(e)), !e)) return new un()
      if (e instanceof un) return e
      e = e.rgb()
      var i = e.r / 255,
        s = e.g / 255,
        p = e.b / 255,
        v = Math.min(i, s, p),
        E = Math.max(i, s, p),
        k = NaN,
        N = E - v,
        q = (E + v) / 2
      return (
        N
          ? (i === E
              ? (k = (s - p) / N + (s < p) * 6)
              : s === E
                ? (k = (p - i) / N + 2)
                : (k = (i - s) / N + 4),
            (N /= q < 0.5 ? E + v : 2 - E - v),
            (k *= 60))
          : (N = q > 0 && q < 1 ? 0 : k),
        new un(k, N, q, e.opacity)
      )
    }
    function Ur(e, i, s, p) {
      return arguments.length === 1 ? gi(e) : new un(e, i, s, p ?? 1)
    }
    function un(e, i, s, p) {
      ;(this.h = +e), (this.s = +i), (this.l = +s), (this.opacity = +p)
    }
    hi(
      un,
      Ur,
      Ni(Ar, {
        brighter(e) {
          return (
            (e = e == null ? Ir : Math.pow(Ir, e)), new un(this.h, this.s, this.l * e, this.opacity)
          )
        },
        darker(e) {
          return (
            (e = e == null ? kr : Math.pow(kr, e)), new un(this.h, this.s, this.l * e, this.opacity)
          )
        },
        rgb() {
          var e = (this.h % 360) + (this.h < 0) * 360,
            i = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            s = this.l,
            p = s + (s < 0.5 ? s : 1 - s) * i,
            v = 2 * s - p
          return new Ze(
            Wr(e >= 240 ? e - 240 : e + 120, v, p),
            Wr(e, v, p),
            Wr(e < 120 ? e + 240 : e - 120, v, p),
            this.opacity,
          )
        },
        clamp() {
          return new un(Qn(this.h), Br(this.s), Br(this.l), rr(this.opacity))
        },
        displayable() {
          return (
            ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
            0 <= this.l &&
            this.l <= 1 &&
            0 <= this.opacity &&
            this.opacity <= 1
          )
        },
        formatHsl() {
          let e = rr(this.opacity)
          return `${e === 1 ? "hsl(" : "hsla("}${Qn(this.h)}, ${Br(this.s) * 100}%, ${Br(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`
        },
      }),
    )
    function Qn(e) {
      return (e = (e || 0) % 360), e < 0 ? e + 360 : e
    }
    function Br(e) {
      return Math.max(0, Math.min(1, e || 0))
    }
    function Wr(e, i, s) {
      return (
        (e < 60
          ? i + ((s - i) * e) / 60
          : e < 180
            ? s
            : e < 240
              ? i + ((s - i) * (240 - e)) / 60
              : i) * 255
      )
    }
    function ji(e, i, s, p, v) {
      var E = e * e,
        k = E * e
      return (
        ((1 - 3 * e + 3 * E - k) * i +
          (4 - 6 * E + 3 * k) * s +
          (1 + 3 * e + 3 * E - 3 * k) * p +
          k * v) /
        6
      )
    }
    function Nn(e) {
      var i = e.length - 1
      return function (s) {
        var p = s <= 0 ? (s = 0) : s >= 1 ? ((s = 1), i - 1) : Math.floor(s * i),
          v = e[p],
          E = e[p + 1],
          k = p > 0 ? e[p - 1] : 2 * v - E,
          N = p < i - 1 ? e[p + 2] : 2 * E - v
        return ji((s - p / i) * i, k, v, E, N)
      }
    }
    function qi(e) {
      var i = e.length
      return function (s) {
        var p = Math.floor(((s %= 1) < 0 ? ++s : s) * i),
          v = e[(p + i - 1) % i],
          E = e[p % i],
          k = e[(p + 1) % i],
          N = e[(p + 2) % i]
        return ji((s - p / i) * i, v, E, k, N)
      }
    }
    var Lr = (e) => () => e
    function mi(e, i) {
      return function (s) {
        return e + s * i
      }
    }
    function zi(e, i, s) {
      return (
        (e = Math.pow(e, s)),
        (i = Math.pow(i, s) - e),
        (s = 1 / s),
        function (p) {
          return Math.pow(e + p * i, s)
        }
      )
    }
    function wu(e) {
      return (e = +e) == 1
        ? Pi
        : function (i, s) {
            return s - i ? zi(i, s, e) : Lr(isNaN(i) ? s : i)
          }
    }
    function Pi(e, i) {
      var s = i - e
      return s ? mi(e, s) : Lr(isNaN(e) ? i : e)
    }
    var vi = (function e(i) {
      var s = wu(i)
      function p(v, E) {
        var k = s((v = Mr(v)).r, (E = Mr(E)).r),
          N = s(v.g, E.g),
          q = s(v.b, E.b),
          t = Pi(v.opacity, E.opacity)
        return function (n) {
          return (v.r = k(n)), (v.g = N(n)), (v.b = q(n)), (v.opacity = t(n)), v + ""
        }
      }
      return (p.gamma = e), p
    })(1)
    function Ii(e) {
      return function (i) {
        var s = i.length,
          p = new Array(s),
          v = new Array(s),
          E = new Array(s),
          k,
          N
        for (k = 0; k < s; ++k)
          (N = Mr(i[k])), (p[k] = N.r || 0), (v[k] = N.g || 0), (E[k] = N.b || 0)
        return (
          (p = e(p)),
          (v = e(v)),
          (E = e(E)),
          (N.opacity = 1),
          function (q) {
            return (N.r = p(q)), (N.g = v(q)), (N.b = E(q)), N + ""
          }
        )
      }
    }
    var ta = Ii(Nn),
      ea = Ii(qi)
    function Vn(e, i) {
      return (
        (e = +e),
        (i = +i),
        function (s) {
          return e * (1 - s) + i * s
        }
      )
    }
    var Kr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Xr = new RegExp(Kr.source, "g")
    function na(e) {
      return function () {
        return e
      }
    }
    function ra(e) {
      return function (i) {
        return e(i) + ""
      }
    }
    function Zn(e, i) {
      var s = (Kr.lastIndex = Xr.lastIndex = 0),
        p,
        v,
        E,
        k = -1,
        N = [],
        q = []
      for (e = e + "", i = i + ""; (p = Kr.exec(e)) && (v = Xr.exec(i)); )
        (E = v.index) > s && ((E = i.slice(s, E)), N[k] ? (N[k] += E) : (N[++k] = E)),
          (p = p[0]) === (v = v[0])
            ? N[k]
              ? (N[k] += v)
              : (N[++k] = v)
            : ((N[++k] = null), q.push({ i: k, x: Vn(p, v) })),
          (s = Xr.lastIndex)
      return (
        s < i.length && ((E = i.slice(s)), N[k] ? (N[k] += E) : (N[++k] = E)),
        N.length < 2
          ? q[0]
            ? ra(q[0].x)
            : na(i)
          : ((i = q.length),
            function (t) {
              for (var n = 0, u; n < i; ++n) N[(u = q[n]).i] = u.x(t)
              return N.join("")
            })
      )
    }
    var Yr = 180 / Math.PI,
      Nr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
    function Ri(e, i, s, p, v, E) {
      var k, N, q
      return (
        (k = Math.sqrt(e * e + i * i)) && ((e /= k), (i /= k)),
        (q = e * s + i * p) && ((s -= e * q), (p -= i * q)),
        (N = Math.sqrt(s * s + p * p)) && ((s /= N), (p /= N), (q /= N)),
        e * p < i * s && ((e = -e), (i = -i), (q = -q), (k = -k)),
        {
          translateX: v,
          translateY: E,
          rotate: Math.atan2(i, e) * Yr,
          skewX: Math.atan(q) * Yr,
          scaleX: k,
          scaleY: N,
        }
      )
    }
    var Gr
    function xu(e) {
      let i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "")
      return i.isIdentity ? Nr : Ri(i.a, i.b, i.c, i.d, i.e, i.f)
    }
    function Vi(e) {
      return e == null
        ? Nr
        : (Gr || (Gr = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          Gr.setAttribute("transform", e),
          (e = Gr.transform.baseVal.consolidate())
            ? ((e = e.matrix), Ri(e.a, e.b, e.c, e.d, e.e, e.f))
            : Nr)
    }
    function Jr(e, i, s, p) {
      function v(t) {
        return t.length ? t.pop() + " " : ""
      }
      function E(t, n, u, o, l, f) {
        if (t !== u || n !== o) {
          var d = l.push("translate(", null, i, null, s)
          f.push({ i: d - 4, x: Vn(t, u) }, { i: d - 2, x: Vn(n, o) })
        } else (u || o) && l.push("translate(" + u + i + o + s)
      }
      function k(t, n, u, o) {
        t !== n
          ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
            o.push({ i: u.push(v(u) + "rotate(", null, p) - 2, x: Vn(t, n) }))
          : n && u.push(v(u) + "rotate(" + n + p)
      }
      function N(t, n, u, o) {
        t !== n
          ? o.push({ i: u.push(v(u) + "skewX(", null, p) - 2, x: Vn(t, n) })
          : n && u.push(v(u) + "skewX(" + n + p)
      }
      function q(t, n, u, o, l, f) {
        if (t !== u || n !== o) {
          var d = l.push(v(l) + "scale(", null, ",", null, ")")
          f.push({ i: d - 4, x: Vn(t, u) }, { i: d - 2, x: Vn(n, o) })
        } else (u !== 1 || o !== 1) && l.push(v(l) + "scale(" + u + "," + o + ")")
      }
      return function (t, n) {
        var u = [],
          o = []
        return (
          (t = e(t)),
          (n = e(n)),
          E(t.translateX, t.translateY, n.translateX, n.translateY, u, o),
          k(t.rotate, n.rotate, u, o),
          N(t.skewX, n.skewX, u, o),
          q(t.scaleX, t.scaleY, n.scaleX, n.scaleY, u, o),
          (t = n = null),
          function (l) {
            for (var f = -1, d = o.length, m; ++f < d; ) u[(m = o[f]).i] = m.x(l)
            return u.join("")
          }
        )
      }
    }
    var Hi = Jr(xu, "px, ", "px)", "deg)"),
      Qr = Jr(Vi, ", ", ")", ")"),
      bu = 1e-12
    function Ui(e) {
      return ((e = Math.exp(e)) + 1 / e) / 2
    }
    function Wi(e) {
      return ((e = Math.exp(e)) - 1 / e) / 2
    }
    function Eu(e) {
      return ((e = Math.exp(2 * e)) - 1) / (e + 1)
    }
    var _u = (function e(i, s, p) {
        function v(E, k) {
          var N = E[0],
            q = E[1],
            t = E[2],
            n = k[0],
            u = k[1],
            o = k[2],
            l = n - N,
            f = u - q,
            d = l * l + f * f,
            m,
            w
          if (d < bu)
            (w = Math.log(o / t) / i),
              (m = function (Q) {
                return [N + Q * l, q + Q * f, t * Math.exp(i * Q * w)]
              })
          else {
            var A = Math.sqrt(d),
              $ = (o * o - t * t + p * d) / (2 * t * s * A),
              D = (o * o - t * t - p * d) / (2 * o * s * A),
              S = Math.log(Math.sqrt($ * $ + 1) - $),
              P = Math.log(Math.sqrt(D * D + 1) - D)
            ;(w = (P - S) / i),
              (m = function (Q) {
                var tt = Q * w,
                  ut = Ui(S),
                  rt = (t / (s * A)) * (ut * Eu(i * tt + S) - Wi(S))
                return [N + rt * l, q + rt * f, (t * ut) / Ui(i * tt + S)]
              })
          }
          return (m.duration = (w * 1e3 * i) / Math.SQRT2), m
        }
        return (
          (v.rho = function (E) {
            var k = Math.max(0.001, +E),
              N = k * k,
              q = N * N
            return e(k, N, q)
          }),
          v
        )
      })(Math.SQRT2, 2, 4),
      gr = 0,
      mr = 0,
      Sr = 0,
      Ki = 1e3,
      Zr,
      zn,
      tr = 0,
      Sn = 0,
      Tr = 0,
      er = typeof performance == "object" && performance.now ? performance : Date,
      vr =
        typeof window == "object" && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (e) {
              setTimeout(e, 17)
            }
    function yr() {
      return Sn || (vr(ir), (Sn = er.now() + Tr))
    }
    function ir() {
      Sn = 0
    }
    function ur() {
      this._call = this._time = this._next = null
    }
    ur.prototype = or.prototype = {
      constructor: ur,
      restart: function (e, i, s) {
        if (typeof e != "function") throw new TypeError("callback is not a function")
        ;(s = (s == null ? yr() : +s) + (i == null ? 0 : +i)),
          !this._next && zn !== this && (zn ? (zn._next = this) : (Zr = this), (zn = this)),
          (this._call = e),
          (this._time = s),
          Fr()
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), Fr())
      },
    }
    function or(e, i, s) {
      var p = new ur()
      return p.restart(e, i, s), p
    }
    function Xi() {
      yr(), ++gr
      for (var e = Zr, i; e; ) (i = Sn - e._time) >= 0 && e._call.call(void 0, i), (e = e._next)
      --gr
    }
    function ti() {
      ;(Sn = (tr = er.now()) + Tr), (gr = mr = 0)
      try {
        Xi()
      } finally {
        ;(gr = 0), ei(), (Sn = 0)
      }
    }
    function Au() {
      var e = er.now(),
        i = e - tr
      i > Ki && ((Tr -= i), (tr = e))
    }
    function ei() {
      for (var e, i = Zr, s, p = 1 / 0; i; )
        i._call
          ? (p > i._time && (p = i._time), (e = i), (i = i._next))
          : ((s = i._next), (i._next = null), (i = e ? (e._next = s) : (Zr = s)))
      ;(zn = e), Fr(p)
    }
    function Fr(e) {
      if (!gr) {
        mr && (mr = clearTimeout(mr))
        var i = e - Sn
        i > 24
          ? (e < 1 / 0 && (mr = setTimeout(ti, e - er.now() - Tr)), Sr && (Sr = clearInterval(Sr)))
          : (Sr || ((tr = er.now()), (Sr = setInterval(Au, Ki))), (gr = 1), vr(ti))
      }
    }
    function Yi(e, i, s) {
      var p = new ur()
      return (
        (i = i == null ? 0 : +i),
        p.restart(
          (v) => {
            p.stop(), e(v + i)
          },
          i,
          s,
        ),
        p
      )
    }
    var Gi = se("start", "end", "cancel", "interrupt"),
      ku = [],
      Ji = 0,
      ni = 1,
      ri = 2,
      ii = 3,
      Qi = 4,
      ui = 5,
      $r = 6
    function wr(e, i, s, p, v, E) {
      var k = e.__transition
      if (!k) e.__transition = {}
      else if (s in k) return
      oi(e, s, {
        name: i,
        index: p,
        group: v,
        on: Gi,
        tween: ku,
        time: E.time,
        delay: E.delay,
        duration: E.duration,
        ease: E.ease,
        timer: null,
        state: Ji,
      })
    }
    function xr(e, i) {
      var s = _n(e, i)
      if (s.state > Ji) throw new Error("too late; already scheduled")
      return s
    }
    function Tn(e, i) {
      var s = _n(e, i)
      if (s.state > ii) throw new Error("too late; already running")
      return s
    }
    function _n(e, i) {
      var s = e.__transition
      if (!s || !(s = s[i])) throw new Error("transition not found")
      return s
    }
    function oi(e, i, s) {
      var p = e.__transition,
        v
      ;(p[i] = s), (s.timer = or(E, 0, s.time))
      function E(t) {
        ;(s.state = ni), s.timer.restart(k, s.delay, s.time), s.delay <= t && k(t - s.delay)
      }
      function k(t) {
        var n, u, o, l
        if (s.state !== ni) return q()
        for (n in p)
          if (((l = p[n]), l.name === s.name)) {
            if (l.state === ii) return Yi(k)
            l.state === Qi
              ? ((l.state = $r),
                l.timer.stop(),
                l.on.call("interrupt", e, e.__data__, l.index, l.group),
                delete p[n])
              : +n < i &&
                ((l.state = $r),
                l.timer.stop(),
                l.on.call("cancel", e, e.__data__, l.index, l.group),
                delete p[n])
          }
        if (
          (Yi(function () {
            s.state === ii && ((s.state = Qi), s.timer.restart(N, s.delay, s.time), N(t))
          }),
          (s.state = ri),
          s.on.call("start", e, e.__data__, s.index, s.group),
          s.state === ri)
        ) {
          for (s.state = ii, v = new Array((o = s.tween.length)), n = 0, u = -1; n < o; ++n)
            (l = s.tween[n].value.call(e, e.__data__, s.index, s.group)) && (v[++u] = l)
          v.length = u + 1
        }
      }
      function N(t) {
        for (
          var n =
              t < s.duration
                ? s.ease.call(null, t / s.duration)
                : (s.timer.restart(q), (s.state = ui), 1),
            u = -1,
            o = v.length;
          ++u < o;

        )
          v[u].call(e, n)
        s.state === ui && (s.on.call("end", e, e.__data__, s.index, s.group), q())
      }
      function q() {
        ;(s.state = $r), s.timer.stop(), delete p[i]
        for (var t in p) return
        delete e.__transition
      }
    }
    function ar(e, i) {
      var s = e.__transition,
        p,
        v,
        E = !0,
        k
      if (s) {
        i = i == null ? null : i + ""
        for (k in s) {
          if ((p = s[k]).name !== i) {
            E = !1
            continue
          }
          ;(v = p.state > ri && p.state < ui),
            (p.state = $r),
            p.timer.stop(),
            p.on.call(v ? "interrupt" : "cancel", e, e.__data__, p.index, p.group),
            delete s[k]
        }
        E && delete e.__transition
      }
    }
    function yi(e) {
      return this.each(function () {
        ar(this, e)
      })
    }
    function Pn(e, i) {
      var s, p
      return function () {
        var v = Tn(this, e),
          E = v.tween
        if (E !== s) {
          p = s = E
          for (var k = 0, N = p.length; k < N; ++k)
            if (p[k].name === i) {
              ;(p = p.slice()), p.splice(k, 1)
              break
            }
        }
        v.tween = p
      }
    }
    function Fn(e, i, s) {
      var p, v
      if (typeof s != "function") throw new Error()
      return function () {
        var E = Tn(this, e),
          k = E.tween
        if (k !== p) {
          v = (p = k).slice()
          for (var N = { name: i, value: s }, q = 0, t = v.length; q < t; ++q)
            if (v[q].name === i) {
              v[q] = N
              break
            }
          q === t && v.push(N)
        }
        E.tween = v
      }
    }
    function Cu(e, i) {
      var s = this._id
      if (((e += ""), arguments.length < 2)) {
        for (var p = _n(this.node(), s).tween, v = 0, E = p.length, k; v < E; ++v)
          if ((k = p[v]).name === e) return k.value
        return null
      }
      return this.each((i == null ? Pn : Fn)(s, e, i))
    }
    function br(e, i, s) {
      var p = e._id
      return (
        e.each(function () {
          var v = Tn(this, p)
          ;(v.value || (v.value = {}))[i] = s.apply(this, arguments)
        }),
        function (v) {
          return _n(v, p).value[i]
        }
      )
    }
    function Zi(e, i) {
      var s
      return (typeof i == "number" ? Vn : i instanceof pr ? vi : (s = pr(i)) ? ((i = s), vi) : Zn)(
        e,
        i,
      )
    }
    function Du(e) {
      return function () {
        this.removeAttribute(e)
      }
    }
    function Mu(e) {
      return function () {
        this.removeAttributeNS(e.space, e.local)
      }
    }
    function Bu(e, i, s) {
      var p,
        v = s + "",
        E
      return function () {
        var k = this.getAttribute(e)
        return k === v ? null : k === p ? E : (E = i((p = k), s))
      }
    }
    function wi(e, i, s) {
      var p,
        v = s + "",
        E
      return function () {
        var k = this.getAttributeNS(e.space, e.local)
        return k === v ? null : k === p ? E : (E = i((p = k), s))
      }
    }
    function tu(e, i, s) {
      var p, v, E
      return function () {
        var k,
          N = s(this),
          q
        return N == null
          ? void this.removeAttribute(e)
          : ((k = this.getAttribute(e)),
            (q = N + ""),
            k === q ? null : k === p && q === v ? E : ((v = q), (E = i((p = k), N))))
      }
    }
    function Lu(e, i, s) {
      var p, v, E
      return function () {
        var k,
          N = s(this),
          q
        return N == null
          ? void this.removeAttributeNS(e.space, e.local)
          : ((k = this.getAttributeNS(e.space, e.local)),
            (q = N + ""),
            k === q ? null : k === p && q === v ? E : ((v = q), (E = i((p = k), N))))
      }
    }
    function Nu(e, i) {
      var s = Ye(e),
        p = s === "transform" ? Qr : Zi
      return this.attrTween(
        e,
        typeof i == "function"
          ? (s.local ? Lu : tu)(s, p, br(this, "attr." + e, i))
          : i == null
            ? (s.local ? Mu : Du)(s)
            : (s.local ? wi : Bu)(s, p, i),
      )
    }
    function Su(e, i) {
      return function (s) {
        this.setAttribute(e, i.call(this, s))
      }
    }
    function Tu(e, i) {
      return function (s) {
        this.setAttributeNS(e.space, e.local, i.call(this, s))
      }
    }
    function Fu(e, i) {
      var s, p
      function v() {
        var E = i.apply(this, arguments)
        return E !== p && (s = (p = E) && Tu(e, E)), s
      }
      return (v._value = i), v
    }
    function $u(e, i) {
      var s, p
      function v() {
        var E = i.apply(this, arguments)
        return E !== p && (s = (p = E) && Su(e, E)), s
      }
      return (v._value = i), v
    }
    function Ou(e, i) {
      var s = "attr." + e
      if (arguments.length < 2) return (s = this.tween(s)) && s._value
      if (i == null) return this.tween(s, null)
      if (typeof i != "function") throw new Error()
      var p = Ye(e)
      return this.tween(s, (p.local ? Fu : $u)(p, i))
    }
    function ju(e, i) {
      return function () {
        xr(this, e).delay = +i.apply(this, arguments)
      }
    }
    function qu(e, i) {
      return (
        (i = +i),
        function () {
          xr(this, e).delay = i
        }
      )
    }
    function zu(e) {
      var i = this._id
      return arguments.length
        ? this.each((typeof e == "function" ? ju : qu)(i, e))
        : _n(this.node(), i).delay
    }
    function Pu(e, i) {
      return function () {
        Tn(this, e).duration = +i.apply(this, arguments)
      }
    }
    function Iu(e, i) {
      return (
        (i = +i),
        function () {
          Tn(this, e).duration = i
        }
      )
    }
    function Ru(e) {
      var i = this._id
      return arguments.length
        ? this.each((typeof e == "function" ? Pu : Iu)(i, e))
        : _n(this.node(), i).duration
    }
    function Vu(e, i) {
      if (typeof i != "function") throw new Error()
      return function () {
        Tn(this, e).ease = i
      }
    }
    function Hu(e) {
      var i = this._id
      return arguments.length ? this.each(Vu(i, e)) : _n(this.node(), i).ease
    }
    function Uu(e, i) {
      return function () {
        var s = i.apply(this, arguments)
        if (typeof s != "function") throw new Error()
        Tn(this, e).ease = s
      }
    }
    function Wu(e) {
      if (typeof e != "function") throw new Error()
      return this.each(Uu(this._id, e))
    }
    function Ku(e) {
      typeof e != "function" && (e = Re(e))
      for (var i = this._groups, s = i.length, p = new Array(s), v = 0; v < s; ++v)
        for (var E = i[v], k = E.length, N = (p[v] = []), q, t = 0; t < k; ++t)
          (q = E[t]) && e.call(q, q.__data__, t, E) && N.push(q)
      return new Hn(p, this._parents, this._name, this._id)
    }
    function Xu(e) {
      if (e._id !== this._id) throw new Error()
      for (
        var i = this._groups,
          s = e._groups,
          p = i.length,
          v = s.length,
          E = Math.min(p, v),
          k = new Array(p),
          N = 0;
        N < E;
        ++N
      )
        for (var q = i[N], t = s[N], n = q.length, u = (k[N] = new Array(n)), o, l = 0; l < n; ++l)
          (o = q[l] || t[l]) && (u[l] = o)
      for (; N < p; ++N) k[N] = i[N]
      return new Hn(k, this._parents, this._name, this._id)
    }
    function Yu(e) {
      return (e + "")
        .trim()
        .split(/^|\s+/)
        .every(function (i) {
          var s = i.indexOf(".")
          return s >= 0 && (i = i.slice(0, s)), !i || i === "start"
        })
    }
    function Gu(e, i, s) {
      var p,
        v,
        E = Yu(i) ? xr : Tn
      return function () {
        var k = E(this, e),
          N = k.on
        N !== p && (v = (p = N).copy()).on(i, s), (k.on = v)
      }
    }
    function Ju(e, i) {
      var s = this._id
      return arguments.length < 2 ? _n(this.node(), s).on.on(e) : this.each(Gu(s, e, i))
    }
    function Qu(e) {
      return function () {
        var i = this.parentNode
        for (var s in this.__transition) if (+s !== e) return
        i && i.removeChild(this)
      }
    }
    function Zu() {
      return this.on("end.remove", Qu(this._id))
    }
    function to(e) {
      var i = this._name,
        s = this._id
      typeof e != "function" && (e = ce(e))
      for (var p = this._groups, v = p.length, E = new Array(v), k = 0; k < v; ++k)
        for (var N = p[k], q = N.length, t = (E[k] = new Array(q)), n, u, o = 0; o < q; ++o)
          (n = N[o]) &&
            (u = e.call(n, n.__data__, o, N)) &&
            ("__data__" in n && (u.__data__ = n.__data__),
            (t[o] = u),
            wr(t[o], i, s, o, t, _n(n, s)))
      return new Hn(E, this._parents, i, s)
    }
    function eo(e) {
      var i = this._name,
        s = this._id
      typeof e != "function" && (e = xe(e))
      for (var p = this._groups, v = p.length, E = [], k = [], N = 0; N < v; ++N)
        for (var q = p[N], t = q.length, n, u = 0; u < t; ++u)
          if ((n = q[u])) {
            for (
              var o = e.call(n, n.__data__, u, q), l, f = _n(n, s), d = 0, m = o.length;
              d < m;
              ++d
            )
              (l = o[d]) && wr(l, i, s, d, o, f)
            E.push(o), k.push(n)
          }
      return new Hn(E, k, i, s)
    }
    var no = ft.prototype.constructor
    function ro() {
      return new no(this._groups, this._parents)
    }
    function io(e, i) {
      var s, p, v
      return function () {
        var E = j(this, e),
          k = (this.style.removeProperty(e), j(this, e))
        return E === k ? null : E === s && k === p ? v : (v = i((s = E), (p = k)))
      }
    }
    function eu(e) {
      return function () {
        this.style.removeProperty(e)
      }
    }
    function uo(e, i, s) {
      var p,
        v = s + "",
        E
      return function () {
        var k = j(this, e)
        return k === v ? null : k === p ? E : (E = i((p = k), s))
      }
    }
    function oo(e, i, s) {
      var p, v, E
      return function () {
        var k = j(this, e),
          N = s(this),
          q = N + ""
        return (
          N == null && (q = N = (this.style.removeProperty(e), j(this, e))),
          k === q ? null : k === p && q === v ? E : ((v = q), (E = i((p = k), N)))
        )
      }
    }
    function ao(e, i) {
      var s,
        p,
        v,
        E = "style." + i,
        k = "end." + E,
        N
      return function () {
        var q = Tn(this, e),
          t = q.on,
          n = q.value[E] == null ? N || (N = eu(i)) : void 0
        ;(t !== s || v !== n) && (p = (s = t).copy()).on(k, (v = n)), (q.on = p)
      }
    }
    function so(e, i, s) {
      var p = (e += "") == "transform" ? Hi : Zi
      return i == null
        ? this.styleTween(e, io(e, p)).on("end.style." + e, eu(e))
        : typeof i == "function"
          ? this.styleTween(e, oo(e, p, br(this, "style." + e, i))).each(ao(this._id, e))
          : this.styleTween(e, uo(e, p, i), s).on("end.style." + e, null)
    }
    function nu(e, i, s) {
      return function (p) {
        this.style.setProperty(e, i.call(this, p), s)
      }
    }
    function lo(e, i, s) {
      var p, v
      function E() {
        var k = i.apply(this, arguments)
        return k !== v && (p = (v = k) && nu(e, k, s)), p
      }
      return (E._value = i), E
    }
    function co(e, i, s) {
      var p = "style." + (e += "")
      if (arguments.length < 2) return (p = this.tween(p)) && p._value
      if (i == null) return this.tween(p, null)
      if (typeof i != "function") throw new Error()
      return this.tween(p, lo(e, i, s ?? ""))
    }
    function fo(e) {
      return function () {
        this.textContent = e
      }
    }
    function ho(e) {
      return function () {
        var i = e(this)
        this.textContent = i ?? ""
      }
    }
    function po(e) {
      return this.tween(
        "text",
        typeof e == "function" ? ho(br(this, "text", e)) : fo(e == null ? "" : e + ""),
      )
    }
    function go(e) {
      return function (i) {
        this.textContent = e.call(this, i)
      }
    }
    function mo(e) {
      var i, s
      function p() {
        var v = e.apply(this, arguments)
        return v !== s && (i = (s = v) && go(v)), i
      }
      return (p._value = e), p
    }
    function vo(e) {
      var i = "text"
      if (arguments.length < 1) return (i = this.tween(i)) && i._value
      if (e == null) return this.tween(i, null)
      if (typeof e != "function") throw new Error()
      return this.tween(i, mo(e))
    }
    function yo() {
      for (
        var e = this._name, i = this._id, s = ru(), p = this._groups, v = p.length, E = 0;
        E < v;
        ++E
      )
        for (var k = p[E], N = k.length, q, t = 0; t < N; ++t)
          if ((q = k[t])) {
            var n = _n(q, i)
            wr(q, e, s, t, k, {
              time: n.time + n.delay + n.duration,
              delay: 0,
              duration: n.duration,
              ease: n.ease,
            })
          }
      return new Hn(p, this._parents, e, s)
    }
    function wo() {
      var e,
        i,
        s = this,
        p = s._id,
        v = s.size()
      return new Promise(function (E, k) {
        var N = { value: k },
          q = {
            value: function () {
              --v === 0 && E()
            },
          }
        s.each(function () {
          var t = Tn(this, p),
            n = t.on
          n !== e &&
            ((i = (e = n).copy()), i._.cancel.push(N), i._.interrupt.push(N), i._.end.push(q)),
            (t.on = i)
        }),
          v === 0 && E()
      })
    }
    var xo = 0
    function Hn(e, i, s, p) {
      ;(this._groups = e), (this._parents = i), (this._name = s), (this._id = p)
    }
    function bo(e) {
      return ft().transition(e)
    }
    function ru() {
      return ++xo
    }
    var Un = ft.prototype
    Hn.prototype = bo.prototype = {
      constructor: Hn,
      select: to,
      selectAll: eo,
      selectChild: Un.selectChild,
      selectChildren: Un.selectChildren,
      filter: Ku,
      merge: Xu,
      selection: ro,
      transition: yo,
      call: Un.call,
      nodes: Un.nodes,
      node: Un.node,
      size: Un.size,
      empty: Un.empty,
      each: Un.each,
      on: Ju,
      attr: Nu,
      attrTween: Ou,
      style: so,
      styleTween: co,
      text: po,
      textTween: vo,
      remove: Zu,
      tween: Cu,
      delay: zu,
      duration: Ru,
      ease: Hu,
      easeVarying: Wu,
      end: wo,
      [Symbol.iterator]: Un[Symbol.iterator],
    }
    function Eo(e) {
      return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
    }
    var Wn = { time: null, delay: 0, duration: 250, ease: Eo }
    function _o(e, i) {
      for (var s; !(s = e.__transition) || !(s = s[i]); )
        if (!(e = e.parentNode)) throw new Error(`transition ${i} not found`)
      return s
    }
    function iu(e) {
      var i, s
      e instanceof Hn
        ? ((i = e._id), (e = e._name))
        : ((i = ru()), ((s = Wn).time = yr()), (e = e == null ? null : e + ""))
      for (var p = this._groups, v = p.length, E = 0; E < v; ++E)
        for (var k = p[E], N = k.length, q, t = 0; t < N; ++t)
          (q = k[t]) && wr(q, e, i, t, k, s || _o(q, i))
      return new Hn(p, this._parents, e, i)
    }
    ;(ft.prototype.interrupt = yi), (ft.prototype.transition = iu)
    var { abs: nr, max: ia, min: ua } = Math
    function uu(e) {
      return [+e[0], +e[1]]
    }
    function Ao(e) {
      return [uu(e[0]), uu(e[1])]
    }
    var ha = {
        name: "x",
        handles: ["w", "e"].map(ai),
        input: function (e, i) {
          return e == null
            ? null
            : [
                [+e[0], i[0][1]],
                [+e[1], i[1][1]],
              ]
        },
        output: function (e) {
          return e && [e[0][0], e[1][0]]
        },
      },
      da = {
        name: "y",
        handles: ["n", "s"].map(ai),
        input: function (e, i) {
          return e == null
            ? null
            : [
                [i[0][0], +e[0]],
                [i[1][0], +e[1]],
              ]
        },
        output: function (e) {
          return e && [e[0][1], e[1][1]]
        },
      },
      pa = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(ai),
        input: function (e) {
          return e == null ? null : Ao(e)
        },
        output: function (e) {
          return e
        },
      }
    function ai(e) {
      return { type: e }
    }
    function ko(e, i) {
      var s,
        p = 1
      e == null && (e = 0), i == null && (i = 0)
      function v() {
        var E,
          k = s.length,
          N,
          q = 0,
          t = 0
        for (E = 0; E < k; ++E) (N = s[E]), (q += N.x), (t += N.y)
        for (q = (q / k - e) * p, t = (t / k - i) * p, E = 0; E < k; ++E)
          (N = s[E]), (N.x -= q), (N.y -= t)
      }
      return (
        (v.initialize = function (E) {
          s = E
        }),
        (v.x = function (E) {
          return arguments.length ? ((e = +E), v) : e
        }),
        (v.y = function (E) {
          return arguments.length ? ((i = +E), v) : i
        }),
        (v.strength = function (E) {
          return arguments.length ? ((p = +E), v) : p
        }),
        v
      )
    }
    function oa(e) {
      let i = +this._x.call(null, e),
        s = +this._y.call(null, e)
      return Co(this.cover(i, s), i, s, e)
    }
    function Co(e, i, s, p) {
      if (isNaN(i) || isNaN(s)) return e
      var v,
        E = e._root,
        k = { data: p },
        N = e._x0,
        q = e._y0,
        t = e._x1,
        n = e._y1,
        u,
        o,
        l,
        f,
        d,
        m,
        w,
        A
      if (!E) return (e._root = k), e
      for (; E.length; )
        if (
          ((d = i >= (u = (N + t) / 2)) ? (N = u) : (t = u),
          (m = s >= (o = (q + n) / 2)) ? (q = o) : (n = o),
          (v = E),
          !(E = E[(w = (m << 1) | d)]))
        )
          return (v[w] = k), e
      if (((l = +e._x.call(null, E.data)), (f = +e._y.call(null, E.data)), i === l && s === f))
        return (k.next = E), v ? (v[w] = k) : (e._root = k), e
      do
        (v = v ? (v[w] = new Array(4)) : (e._root = new Array(4))),
          (d = i >= (u = (N + t) / 2)) ? (N = u) : (t = u),
          (m = s >= (o = (q + n) / 2)) ? (q = o) : (n = o)
      while ((w = (m << 1) | d) === (A = ((f >= o) << 1) | (l >= u)))
      return (v[A] = E), (v[w] = k), e
    }
    function aa(e) {
      var i,
        s,
        p = e.length,
        v,
        E,
        k = new Array(p),
        N = new Array(p),
        q = 1 / 0,
        t = 1 / 0,
        n = -1 / 0,
        u = -1 / 0
      for (s = 0; s < p; ++s)
        isNaN((v = +this._x.call(null, (i = e[s])))) ||
          isNaN((E = +this._y.call(null, i))) ||
          ((k[s] = v),
          (N[s] = E),
          v < q && (q = v),
          v > n && (n = v),
          E < t && (t = E),
          E > u && (u = E))
      if (q > n || t > u) return this
      for (this.cover(q, t).cover(n, u), s = 0; s < p; ++s) Co(this, k[s], N[s], e[s])
      return this
    }
    function xi(e, i) {
      if (isNaN((e = +e)) || isNaN((i = +i))) return this
      var s = this._x0,
        p = this._y0,
        v = this._x1,
        E = this._y1
      if (isNaN(s)) (v = (s = Math.floor(e)) + 1), (E = (p = Math.floor(i)) + 1)
      else {
        for (var k = v - s || 1, N = this._root, q, t; s > e || e >= v || p > i || i >= E; )
          switch (
            ((t = ((i < p) << 1) | (e < s)), (q = new Array(4)), (q[t] = N), (N = q), (k *= 2), t)
          ) {
            case 0:
              ;(v = s + k), (E = p + k)
              break
            case 1:
              ;(s = v - k), (E = p + k)
              break
            case 2:
              ;(v = s + k), (p = E - k)
              break
            case 3:
              ;(s = v - k), (p = E - k)
              break
          }
        this._root && this._root.length && (this._root = N)
      }
      return (this._x0 = s), (this._y0 = p), (this._x1 = v), (this._y1 = E), this
    }
    function Do() {
      var e = []
      return (
        this.visit(function (i) {
          if (!i.length)
            do e.push(i.data)
            while ((i = i.next))
        }),
        e
      )
    }
    function Mo(e) {
      return arguments.length
        ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
        : isNaN(this._x0)
          ? void 0
          : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ]
    }
    function ln(e, i, s, p, v) {
      ;(this.node = e), (this.x0 = i), (this.y0 = s), (this.x1 = p), (this.y1 = v)
    }
    function Bo(e, i, s) {
      var p,
        v = this._x0,
        E = this._y0,
        k,
        N,
        q,
        t,
        n = this._x1,
        u = this._y1,
        o = [],
        l = this._root,
        f,
        d
      for (
        l && o.push(new ln(l, v, E, n, u)),
          s == null ? (s = 1 / 0) : ((v = e - s), (E = i - s), (n = e + s), (u = i + s), (s *= s));
        (f = o.pop());

      )
        if (
          !(!(l = f.node) || (k = f.x0) > n || (N = f.y0) > u || (q = f.x1) < v || (t = f.y1) < E)
        )
          if (l.length) {
            var m = (k + q) / 2,
              w = (N + t) / 2
            o.push(
              new ln(l[3], m, w, q, t),
              new ln(l[2], k, w, m, t),
              new ln(l[1], m, N, q, w),
              new ln(l[0], k, N, m, w),
            ),
              (d = ((i >= w) << 1) | (e >= m)) &&
                ((f = o[o.length - 1]),
                (o[o.length - 1] = o[o.length - 1 - d]),
                (o[o.length - 1 - d] = f))
          } else {
            var A = e - +this._x.call(null, l.data),
              $ = i - +this._y.call(null, l.data),
              D = A * A + $ * $
            if (D < s) {
              var S = Math.sqrt((s = D))
              ;(v = e - S), (E = i - S), (n = e + S), (u = i + S), (p = l.data)
            }
          }
      return p
    }
    function Lo(e) {
      if (isNaN((n = +this._x.call(null, e))) || isNaN((u = +this._y.call(null, e)))) return this
      var i,
        s = this._root,
        p,
        v,
        E,
        k = this._x0,
        N = this._y0,
        q = this._x1,
        t = this._y1,
        n,
        u,
        o,
        l,
        f,
        d,
        m,
        w
      if (!s) return this
      if (s.length)
        for (;;) {
          if (
            ((f = n >= (o = (k + q) / 2)) ? (k = o) : (q = o),
            (d = u >= (l = (N + t) / 2)) ? (N = l) : (t = l),
            (i = s),
            !(s = s[(m = (d << 1) | f)]))
          )
            return this
          if (!s.length) break
          ;(i[(m + 1) & 3] || i[(m + 2) & 3] || i[(m + 3) & 3]) && ((p = i), (w = m))
        }
      for (; s.data !== e; ) if (((v = s), !(s = s.next))) return this
      return (
        (E = s.next) && delete s.next,
        v
          ? (E ? (v.next = E) : delete v.next, this)
          : i
            ? (E ? (i[m] = E) : delete i[m],
              (s = i[0] || i[1] || i[2] || i[3]) &&
                s === (i[3] || i[2] || i[1] || i[0]) &&
                !s.length &&
                (p ? (p[w] = s) : (this._root = s)),
              this)
            : ((this._root = E), this)
      )
    }
    function No(e) {
      for (var i = 0, s = e.length; i < s; ++i) this.remove(e[i])
      return this
    }
    function So() {
      return this._root
    }
    function dn() {
      var e = 0
      return (
        this.visit(function (i) {
          if (!i.length)
            do ++e
            while ((i = i.next))
        }),
        e
      )
    }
    function To(e) {
      var i = [],
        s,
        p = this._root,
        v,
        E,
        k,
        N,
        q
      for (p && i.push(new ln(p, this._x0, this._y0, this._x1, this._y1)); (s = i.pop()); )
        if (!e((p = s.node), (E = s.x0), (k = s.y0), (N = s.x1), (q = s.y1)) && p.length) {
          var t = (E + N) / 2,
            n = (k + q) / 2
          ;(v = p[3]) && i.push(new ln(v, t, n, N, q)),
            (v = p[2]) && i.push(new ln(v, E, n, t, q)),
            (v = p[1]) && i.push(new ln(v, t, k, N, n)),
            (v = p[0]) && i.push(new ln(v, E, k, t, n))
        }
      return this
    }
    function Fo(e) {
      var i = [],
        s = [],
        p
      for (
        this._root && i.push(new ln(this._root, this._x0, this._y0, this._x1, this._y1));
        (p = i.pop());

      ) {
        var v = p.node
        if (v.length) {
          var E,
            k = p.x0,
            N = p.y0,
            q = p.x1,
            t = p.y1,
            n = (k + q) / 2,
            u = (N + t) / 2
          ;(E = v[0]) && i.push(new ln(E, k, N, n, u)),
            (E = v[1]) && i.push(new ln(E, n, N, q, u)),
            (E = v[2]) && i.push(new ln(E, k, u, n, t)),
            (E = v[3]) && i.push(new ln(E, n, u, q, t))
        }
        s.push(p)
      }
      for (; (p = s.pop()); ) e(p.node, p.x0, p.y0, p.x1, p.y1)
      return this
    }
    function $o(e) {
      return e[0]
    }
    function Oo(e) {
      return arguments.length ? ((this._x = e), this) : this._x
    }
    function jo(e) {
      return e[1]
    }
    function qo(e) {
      return arguments.length ? ((this._y = e), this) : this._y
    }
    function ou(e, i, s) {
      var p = new bi(i ?? $o, s ?? jo, NaN, NaN, NaN, NaN)
      return e == null ? p : p.addAll(e)
    }
    function bi(e, i, s, p, v, E) {
      ;(this._x = e),
        (this._y = i),
        (this._x0 = s),
        (this._y0 = p),
        (this._x1 = v),
        (this._y1 = E),
        (this._root = void 0)
    }
    function au(e) {
      for (var i = { data: e.data }, s = i; (e = e.next); ) s = s.next = { data: e.data }
      return i
    }
    var pn = (ou.prototype = bi.prototype)
    ;(pn.copy = function () {
      var e = new bi(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        i = this._root,
        s,
        p
      if (!i) return e
      if (!i.length) return (e._root = au(i)), e
      for (s = [{ source: i, target: (e._root = new Array(4)) }]; (i = s.pop()); )
        for (var v = 0; v < 4; ++v)
          (p = i.source[v]) &&
            (p.length
              ? s.push({ source: p, target: (i.target[v] = new Array(4)) })
              : (i.target[v] = au(p)))
      return e
    }),
      (pn.add = oa),
      (pn.addAll = aa),
      (pn.cover = xi),
      (pn.data = Do),
      (pn.extent = Mo),
      (pn.find = Bo),
      (pn.remove = Lo),
      (pn.removeAll = No),
      (pn.root = So),
      (pn.size = dn),
      (pn.visit = To),
      (pn.visitAfter = Fo),
      (pn.x = Oo),
      (pn.y = qo)
    function Or(e) {
      return function () {
        return e
      }
    }
    function sr(e) {
      return (e() - 0.5) * 1e-6
    }
    function Ei(e) {
      return e.index
    }
    function _i(e, i) {
      var s = e.get(i)
      if (!s) throw new Error("node not found: " + i)
      return s
    }
    function gn(e) {
      var i = Ei,
        s = u,
        p,
        v = Or(30),
        E,
        k,
        N,
        q,
        t,
        n = 1
      e == null && (e = [])
      function u(m) {
        return 1 / Math.min(N[m.source.index], N[m.target.index])
      }
      function o(m) {
        for (var w = 0, A = e.length; w < n; ++w)
          for (var $ = 0, D, S, P, Q, tt, ut, rt; $ < A; ++$)
            (D = e[$]),
              (S = D.source),
              (P = D.target),
              (Q = P.x + P.vx - S.x - S.vx || sr(t)),
              (tt = P.y + P.vy - S.y - S.vy || sr(t)),
              (ut = Math.sqrt(Q * Q + tt * tt)),
              (ut = ((ut - E[$]) / ut) * m * p[$]),
              (Q *= ut),
              (tt *= ut),
              (P.vx -= Q * (rt = q[$])),
              (P.vy -= tt * rt),
              (S.vx += Q * (rt = 1 - rt)),
              (S.vy += tt * rt)
      }
      function l() {
        if (k) {
          var m,
            w = k.length,
            A = e.length,
            $ = new Map(k.map((S, P) => [i(S, P, k), S])),
            D
          for (m = 0, N = new Array(w); m < A; ++m)
            (D = e[m]),
              (D.index = m),
              typeof D.source != "object" && (D.source = _i($, D.source)),
              typeof D.target != "object" && (D.target = _i($, D.target)),
              (N[D.source.index] = (N[D.source.index] || 0) + 1),
              (N[D.target.index] = (N[D.target.index] || 0) + 1)
          for (m = 0, q = new Array(A); m < A; ++m)
            (D = e[m]), (q[m] = N[D.source.index] / (N[D.source.index] + N[D.target.index]))
          ;(p = new Array(A)), f(), (E = new Array(A)), d()
        }
      }
      function f() {
        if (k) for (var m = 0, w = e.length; m < w; ++m) p[m] = +s(e[m], m, e)
      }
      function d() {
        if (k) for (var m = 0, w = e.length; m < w; ++m) E[m] = +v(e[m], m, e)
      }
      return (
        (o.initialize = function (m, w) {
          ;(k = m), (t = w), l()
        }),
        (o.links = function (m) {
          return arguments.length ? ((e = m), l(), o) : e
        }),
        (o.id = function (m) {
          return arguments.length ? ((i = m), o) : i
        }),
        (o.iterations = function (m) {
          return arguments.length ? ((n = +m), o) : n
        }),
        (o.strength = function (m) {
          return arguments.length ? ((s = typeof m == "function" ? m : Or(+m)), f(), o) : s
        }),
        (o.distance = function (m) {
          return arguments.length ? ((v = typeof m == "function" ? m : Or(+m)), d(), o) : v
        }),
        o
      )
    }
    function jr() {
      let e = 1
      return () => (e = (1664525 * e + 1013904223) % 4294967296) / 4294967296
    }
    function Er(e) {
      return e.x
    }
    function zo(e) {
      return e.y
    }
    var su = 10,
      Po = Math.PI * (3 - Math.sqrt(5))
    function Io(e) {
      var i,
        s = 1,
        p = 0.001,
        v = 1 - Math.pow(p, 1 / 300),
        E = 0,
        k = 0.6,
        N = new Map(),
        q = or(u),
        t = se("tick", "end"),
        n = jr()
      e == null && (e = [])
      function u() {
        o(), t.call("tick", i), s < p && (q.stop(), t.call("end", i))
      }
      function o(d) {
        var m,
          w = e.length,
          A
        d === void 0 && (d = 1)
        for (var $ = 0; $ < d; ++$)
          for (
            s += (E - s) * v,
              N.forEach(function (D) {
                D(s)
              }),
              m = 0;
            m < w;
            ++m
          )
            (A = e[m]),
              A.fx == null ? (A.x += A.vx *= k) : ((A.x = A.fx), (A.vx = 0)),
              A.fy == null ? (A.y += A.vy *= k) : ((A.y = A.fy), (A.vy = 0))
        return i
      }
      function l() {
        for (var d = 0, m = e.length, w; d < m; ++d) {
          if (
            ((w = e[d]),
            (w.index = d),
            w.fx != null && (w.x = w.fx),
            w.fy != null && (w.y = w.fy),
            isNaN(w.x) || isNaN(w.y))
          ) {
            var A = su * Math.sqrt(0.5 + d),
              $ = d * Po
            ;(w.x = A * Math.cos($)), (w.y = A * Math.sin($))
          }
          ;(isNaN(w.vx) || isNaN(w.vy)) && (w.vx = w.vy = 0)
        }
      }
      function f(d) {
        return d.initialize && d.initialize(e, n), d
      }
      return (
        l(),
        (i = {
          tick: o,
          restart: function () {
            return q.restart(u), i
          },
          stop: function () {
            return q.stop(), i
          },
          nodes: function (d) {
            return arguments.length ? ((e = d), l(), N.forEach(f), i) : e
          },
          alpha: function (d) {
            return arguments.length ? ((s = +d), i) : s
          },
          alphaMin: function (d) {
            return arguments.length ? ((p = +d), i) : p
          },
          alphaDecay: function (d) {
            return arguments.length ? ((v = +d), i) : +v
          },
          alphaTarget: function (d) {
            return arguments.length ? ((E = +d), i) : E
          },
          velocityDecay: function (d) {
            return arguments.length ? ((k = 1 - d), i) : 1 - k
          },
          randomSource: function (d) {
            return arguments.length ? ((n = d), N.forEach(f), i) : n
          },
          force: function (d, m) {
            return arguments.length > 1 ? (m == null ? N.delete(d) : N.set(d, f(m)), i) : N.get(d)
          },
          find: function (d, m, w) {
            var A = 0,
              $ = e.length,
              D,
              S,
              P,
              Q,
              tt
            for (w == null ? (w = 1 / 0) : (w *= w), A = 0; A < $; ++A)
              (Q = e[A]),
                (D = d - Q.x),
                (S = m - Q.y),
                (P = D * D + S * S),
                P < w && ((tt = Q), (w = P))
            return tt
          },
          on: function (d, m) {
            return arguments.length > 1 ? (t.on(d, m), i) : t.on(d)
          },
        })
      )
    }
    function Ro() {
      var e,
        i,
        s,
        p,
        v = Or(-30),
        E,
        k = 1,
        N = 1 / 0,
        q = 0.81
      function t(l) {
        var f,
          d = e.length,
          m = ou(e, Er, zo).visitAfter(u)
        for (p = l, f = 0; f < d; ++f) (i = e[f]), m.visit(o)
      }
      function n() {
        if (e) {
          var l,
            f = e.length,
            d
          for (E = new Array(f), l = 0; l < f; ++l) (d = e[l]), (E[d.index] = +v(d, l, e))
        }
      }
      function u(l) {
        var f = 0,
          d,
          m,
          w = 0,
          A,
          $,
          D
        if (l.length) {
          for (A = $ = D = 0; D < 4; ++D)
            (d = l[D]) &&
              (m = Math.abs(d.value)) &&
              ((f += d.value), (w += m), (A += m * d.x), ($ += m * d.y))
          ;(l.x = A / w), (l.y = $ / w)
        } else {
          ;(d = l), (d.x = d.data.x), (d.y = d.data.y)
          do f += E[d.data.index]
          while ((d = d.next))
        }
        l.value = f
      }
      function o(l, f, d, m) {
        if (!l.value) return !0
        var w = l.x - i.x,
          A = l.y - i.y,
          $ = m - f,
          D = w * w + A * A
        if (($ * $) / q < D)
          return (
            D < N &&
              (w === 0 && ((w = sr(s)), (D += w * w)),
              A === 0 && ((A = sr(s)), (D += A * A)),
              D < k && (D = Math.sqrt(k * D)),
              (i.vx += (w * l.value * p) / D),
              (i.vy += (A * l.value * p) / D)),
            !0
          )
        if (!(l.length || D >= N)) {
          ;(l.data !== i || l.next) &&
            (w === 0 && ((w = sr(s)), (D += w * w)),
            A === 0 && ((A = sr(s)), (D += A * A)),
            D < k && (D = Math.sqrt(k * D)))
          do l.data !== i && (($ = (E[l.data.index] * p) / D), (i.vx += w * $), (i.vy += A * $))
          while ((l = l.next))
        }
      }
      return (
        (t.initialize = function (l, f) {
          ;(e = l), (s = f), n()
        }),
        (t.strength = function (l) {
          return arguments.length ? ((v = typeof l == "function" ? l : Or(+l)), n(), t) : v
        }),
        (t.distanceMin = function (l) {
          return arguments.length ? ((k = l * l), t) : Math.sqrt(k)
        }),
        (t.distanceMax = function (l) {
          return arguments.length ? ((N = l * l), t) : Math.sqrt(N)
        }),
        (t.theta = function (l) {
          return arguments.length ? ((q = l * l), t) : Math.sqrt(q)
        }),
        t
      )
    }
    var si = (e) => () => e
    function Vo(e, { sourceEvent: i, target: s, transform: p, dispatch: v }) {
      Object.defineProperties(this, {
        type: { value: e, enumerable: !0, configurable: !0 },
        sourceEvent: { value: i, enumerable: !0, configurable: !0 },
        target: { value: s, enumerable: !0, configurable: !0 },
        transform: { value: p, enumerable: !0, configurable: !0 },
        _: { value: v },
      })
    }
    function Kn(e, i, s) {
      ;(this.k = e), (this.x = i), (this.y = s)
    }
    Kn.prototype = {
      constructor: Kn,
      scale: function (e) {
        return e === 1 ? this : new Kn(this.k * e, this.x, this.y)
      },
      translate: function (e, i) {
        return (e === 0) & (i === 0)
          ? this
          : new Kn(this.k, this.x + this.k * e, this.y + this.k * i)
      },
      apply: function (e) {
        return [e[0] * this.k + this.x, e[1] * this.k + this.y]
      },
      applyX: function (e) {
        return e * this.k + this.x
      },
      applyY: function (e) {
        return e * this.k + this.y
      },
      invert: function (e) {
        return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
      },
      invertX: function (e) {
        return (e - this.x) / this.k
      },
      invertY: function (e) {
        return (e - this.y) / this.k
      },
      rescaleX: function (e) {
        return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
      },
      rescaleY: function (e) {
        return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
      },
      toString: function () {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
      },
    }
    var Ai = new Kn(1, 0, 0)
    Ho.prototype = Kn.prototype
    function Ho(e) {
      for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ai
      return e.__zoom
    }
    function _r(e) {
      e.stopImmediatePropagation()
    }
    function qr(e) {
      e.preventDefault(), e.stopImmediatePropagation()
    }
    function Xn(e) {
      return (!e.ctrlKey || e.type === "wheel") && !e.button
    }
    function ki() {
      var e = this
      return e instanceof SVGElement
        ? ((e = e.ownerSVGElement || e),
          e.hasAttribute("viewBox")
            ? ((e = e.viewBox.baseVal),
              [
                [e.x, e.y],
                [e.x + e.width, e.y + e.height],
              ])
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ])
        : [
            [0, 0],
            [e.clientWidth, e.clientHeight],
          ]
    }
    function lu() {
      return this.__zoom || Ai
    }
    function Ci(e) {
      return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1)
    }
    function zr() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function Uo(e, i, s) {
      var p = e.invertX(i[0][0]) - s[0][0],
        v = e.invertX(i[1][0]) - s[1][0],
        E = e.invertY(i[0][1]) - s[0][1],
        k = e.invertY(i[1][1]) - s[1][1]
      return e.translate(
        v > p ? (p + v) / 2 : Math.min(0, p) || Math.max(0, v),
        k > E ? (E + k) / 2 : Math.min(0, E) || Math.max(0, k),
      )
    }
    function Wo() {
      var e = Xn,
        i = ki,
        s = Uo,
        p = Ci,
        v = zr,
        E = [0, 1 / 0],
        k = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0],
        ],
        N = 250,
        q = _u,
        t = se("start", "zoom", "end"),
        n,
        u,
        o,
        l = 500,
        f = 150,
        d = 0,
        m = 10
      function w(H) {
        H.property("__zoom", lu)
          .on("wheel.zoom", tt, { passive: !1 })
          .on("mousedown.zoom", ut)
          .on("dblclick.zoom", rt)
          .filter(v)
          .on("touchstart.zoom", _t)
          .on("touchmove.zoom", It)
          .on("touchend.zoom touchcancel.zoom", st)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      ;(w.transform = function (H, wt, at, kt) {
        var $t = H.selection ? H.selection() : H
        $t.property("__zoom", lu),
          H !== $t
            ? S(H, wt, at, kt)
            : $t.interrupt().each(function () {
                P(this, arguments)
                  .event(kt)
                  .start()
                  .zoom(null, typeof wt == "function" ? wt.apply(this, arguments) : wt)
                  .end()
              })
      }),
        (w.scaleBy = function (H, wt, at, kt) {
          w.scaleTo(
            H,
            function () {
              var $t = this.__zoom.k,
                Ot = typeof wt == "function" ? wt.apply(this, arguments) : wt
              return $t * Ot
            },
            at,
            kt,
          )
        }),
        (w.scaleTo = function (H, wt, at, kt) {
          w.transform(
            H,
            function () {
              var $t = i.apply(this, arguments),
                Ot = this.__zoom,
                gt = at == null ? D($t) : typeof at == "function" ? at.apply(this, arguments) : at,
                Wt = Ot.invert(gt),
                ee = typeof wt == "function" ? wt.apply(this, arguments) : wt
              return s($(A(Ot, ee), gt, Wt), $t, k)
            },
            at,
            kt,
          )
        }),
        (w.translateBy = function (H, wt, at, kt) {
          w.transform(
            H,
            function () {
              return s(
                this.__zoom.translate(
                  typeof wt == "function" ? wt.apply(this, arguments) : wt,
                  typeof at == "function" ? at.apply(this, arguments) : at,
                ),
                i.apply(this, arguments),
                k,
              )
            },
            null,
            kt,
          )
        }),
        (w.translateTo = function (H, wt, at, kt, $t) {
          w.transform(
            H,
            function () {
              var Ot = i.apply(this, arguments),
                gt = this.__zoom,
                Wt = kt == null ? D(Ot) : typeof kt == "function" ? kt.apply(this, arguments) : kt
              return s(
                Ai.translate(Wt[0], Wt[1])
                  .scale(gt.k)
                  .translate(
                    typeof wt == "function" ? -wt.apply(this, arguments) : -wt,
                    typeof at == "function" ? -at.apply(this, arguments) : -at,
                  ),
                Ot,
                k,
              )
            },
            kt,
            $t,
          )
        })
      function A(H, wt) {
        return (wt = Math.max(E[0], Math.min(E[1], wt))), wt === H.k ? H : new Kn(wt, H.x, H.y)
      }
      function $(H, wt, at) {
        var kt = wt[0] - at[0] * H.k,
          $t = wt[1] - at[1] * H.k
        return kt === H.x && $t === H.y ? H : new Kn(H.k, kt, $t)
      }
      function D(H) {
        return [(+H[0][0] + +H[1][0]) / 2, (+H[0][1] + +H[1][1]) / 2]
      }
      function S(H, wt, at, kt) {
        H.on("start.zoom", function () {
          P(this, arguments).event(kt).start()
        })
          .on("interrupt.zoom end.zoom", function () {
            P(this, arguments).event(kt).end()
          })
          .tween("zoom", function () {
            var $t = this,
              Ot = arguments,
              gt = P($t, Ot).event(kt),
              Wt = i.apply($t, Ot),
              ee = at == null ? D(Wt) : typeof at == "function" ? at.apply($t, Ot) : at,
              Y = Math.max(Wt[1][0] - Wt[0][0], Wt[1][1] - Wt[0][1]),
              At = $t.__zoom,
              mt = typeof wt == "function" ? wt.apply($t, Ot) : wt,
              Mt = q(At.invert(ee).concat(Y / At.k), mt.invert(ee).concat(Y / mt.k))
            return function (Ut) {
              if (Ut === 1) Ut = mt
              else {
                var Xt = Mt(Ut),
                  xt = Y / Xt[2]
                Ut = new Kn(xt, ee[0] - Xt[0] * xt, ee[1] - Xt[1] * xt)
              }
              gt.zoom(null, Ut)
            }
          })
      }
      function P(H, wt, at) {
        return (!at && H.__zooming) || new Q(H, wt)
      }
      function Q(H, wt) {
        ;(this.that = H),
          (this.args = wt),
          (this.active = 0),
          (this.sourceEvent = null),
          (this.extent = i.apply(H, wt)),
          (this.taps = 0)
      }
      Q.prototype = {
        event: function (H) {
          return H && (this.sourceEvent = H), this
        },
        start: function () {
          return ++this.active === 1 && ((this.that.__zooming = this), this.emit("start")), this
        },
        zoom: function (H, wt) {
          return (
            this.mouse && H !== "mouse" && (this.mouse[1] = wt.invert(this.mouse[0])),
            this.touch0 && H !== "touch" && (this.touch0[1] = wt.invert(this.touch0[0])),
            this.touch1 && H !== "touch" && (this.touch1[1] = wt.invert(this.touch1[0])),
            (this.that.__zoom = wt),
            this.emit("zoom"),
            this
          )
        },
        end: function () {
          return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this
        },
        emit: function (H) {
          var wt = ht(this.that).datum()
          t.call(
            H,
            this.that,
            new Vo(H, {
              sourceEvent: this.sourceEvent,
              target: w,
              type: H,
              transform: this.that.__zoom,
              dispatch: t,
            }),
            wt,
          )
        },
      }
      function tt(H, ...wt) {
        if (!e.apply(this, arguments)) return
        var at = P(this, wt).event(H),
          kt = this.__zoom,
          $t = Math.max(E[0], Math.min(E[1], kt.k * Math.pow(2, p.apply(this, arguments)))),
          Ot = yt(H)
        if (at.wheel)
          (at.mouse[0][0] !== Ot[0] || at.mouse[0][1] !== Ot[1]) &&
            (at.mouse[1] = kt.invert((at.mouse[0] = Ot))),
            clearTimeout(at.wheel)
        else {
          if (kt.k === $t) return
          ;(at.mouse = [Ot, kt.invert(Ot)]), ar(this), at.start()
        }
        qr(H),
          (at.wheel = setTimeout(gt, f)),
          at.zoom("mouse", s($(A(kt, $t), at.mouse[0], at.mouse[1]), at.extent, k))
        function gt() {
          ;(at.wheel = null), at.end()
        }
      }
      function ut(H, ...wt) {
        if (o || !e.apply(this, arguments)) return
        var at = H.currentTarget,
          kt = P(this, wt, !0).event(H),
          $t = ht(H.view).on("mousemove.zoom", ee, !0).on("mouseup.zoom", Y, !0),
          Ot = yt(H, at),
          gt = H.clientX,
          Wt = H.clientY
        rn(H.view), _r(H), (kt.mouse = [Ot, this.__zoom.invert(Ot)]), ar(this), kt.start()
        function ee(At) {
          if ((qr(At), !kt.moved)) {
            var mt = At.clientX - gt,
              Mt = At.clientY - Wt
            kt.moved = mt * mt + Mt * Mt > d
          }
          kt.event(At).zoom(
            "mouse",
            s($(kt.that.__zoom, (kt.mouse[0] = yt(At, at)), kt.mouse[1]), kt.extent, k),
          )
        }
        function Y(At) {
          $t.on("mousemove.zoom mouseup.zoom", null),
            cr(At.view, kt.moved),
            qr(At),
            kt.event(At).end()
        }
      }
      function rt(H, ...wt) {
        if (e.apply(this, arguments)) {
          var at = this.__zoom,
            kt = yt(H.changedTouches ? H.changedTouches[0] : H, this),
            $t = at.invert(kt),
            Ot = at.k * (H.shiftKey ? 0.5 : 2),
            gt = s($(A(at, Ot), kt, $t), i.apply(this, wt), k)
          qr(H),
            N > 0
              ? ht(this).transition().duration(N).call(S, gt, kt, H)
              : ht(this).call(w.transform, gt, kt, H)
        }
      }
      function _t(H, ...wt) {
        if (e.apply(this, arguments)) {
          var at = H.touches,
            kt = at.length,
            $t = P(this, wt, H.changedTouches.length === kt).event(H),
            Ot,
            gt,
            Wt,
            ee
          for (_r(H), gt = 0; gt < kt; ++gt)
            (Wt = at[gt]),
              (ee = yt(Wt, this)),
              (ee = [ee, this.__zoom.invert(ee), Wt.identifier]),
              $t.touch0
                ? !$t.touch1 && $t.touch0[2] !== ee[2] && (($t.touch1 = ee), ($t.taps = 0))
                : (($t.touch0 = ee), (Ot = !0), ($t.taps = 1 + !!n))
          n && (n = clearTimeout(n)),
            Ot &&
              ($t.taps < 2 &&
                ((u = ee[0]),
                (n = setTimeout(function () {
                  n = null
                }, l))),
              ar(this),
              $t.start())
        }
      }
      function It(H, ...wt) {
        if (this.__zooming) {
          var at = P(this, wt).event(H),
            kt = H.changedTouches,
            $t = kt.length,
            Ot,
            gt,
            Wt,
            ee
          for (qr(H), Ot = 0; Ot < $t; ++Ot)
            (gt = kt[Ot]),
              (Wt = yt(gt, this)),
              at.touch0 && at.touch0[2] === gt.identifier
                ? (at.touch0[0] = Wt)
                : at.touch1 && at.touch1[2] === gt.identifier && (at.touch1[0] = Wt)
          if (((gt = at.that.__zoom), at.touch1)) {
            var Y = at.touch0[0],
              At = at.touch0[1],
              mt = at.touch1[0],
              Mt = at.touch1[1],
              Ut = (Ut = mt[0] - Y[0]) * Ut + (Ut = mt[1] - Y[1]) * Ut,
              Xt = (Xt = Mt[0] - At[0]) * Xt + (Xt = Mt[1] - At[1]) * Xt
            ;(gt = A(gt, Math.sqrt(Ut / Xt))),
              (Wt = [(Y[0] + mt[0]) / 2, (Y[1] + mt[1]) / 2]),
              (ee = [(At[0] + Mt[0]) / 2, (At[1] + Mt[1]) / 2])
          } else if (at.touch0) (Wt = at.touch0[0]), (ee = at.touch0[1])
          else return
          at.zoom("touch", s($(gt, Wt, ee), at.extent, k))
        }
      }
      function st(H, ...wt) {
        if (this.__zooming) {
          var at = P(this, wt).event(H),
            kt = H.changedTouches,
            $t = kt.length,
            Ot,
            gt
          for (
            _r(H),
              o && clearTimeout(o),
              o = setTimeout(function () {
                o = null
              }, l),
              Ot = 0;
            Ot < $t;
            ++Ot
          )
            (gt = kt[Ot]),
              at.touch0 && at.touch0[2] === gt.identifier
                ? delete at.touch0
                : at.touch1 && at.touch1[2] === gt.identifier && delete at.touch1
          if ((at.touch1 && !at.touch0 && ((at.touch0 = at.touch1), delete at.touch1), at.touch0))
            at.touch0[1] = this.__zoom.invert(at.touch0[0])
          else if (
            (at.end(),
            at.taps === 2 && ((gt = yt(gt, this)), Math.hypot(u[0] - gt[0], u[1] - gt[1]) < m))
          ) {
            var Wt = ht(this).on("dblclick.zoom")
            Wt && Wt.apply(this, arguments)
          }
        }
      }
      return (
        (w.wheelDelta = function (H) {
          return arguments.length ? ((p = typeof H == "function" ? H : si(+H)), w) : p
        }),
        (w.filter = function (H) {
          return arguments.length ? ((e = typeof H == "function" ? H : si(!!H)), w) : e
        }),
        (w.touchable = function (H) {
          return arguments.length ? ((v = typeof H == "function" ? H : si(!!H)), w) : v
        }),
        (w.extent = function (H) {
          return arguments.length
            ? ((i =
                typeof H == "function"
                  ? H
                  : si([
                      [+H[0][0], +H[0][1]],
                      [+H[1][0], +H[1][1]],
                    ])),
              w)
            : i
        }),
        (w.scaleExtent = function (H) {
          return arguments.length ? ((E[0] = +H[0]), (E[1] = +H[1]), w) : [E[0], E[1]]
        }),
        (w.translateExtent = function (H) {
          return arguments.length
            ? ((k[0][0] = +H[0][0]),
              (k[1][0] = +H[1][0]),
              (k[0][1] = +H[0][1]),
              (k[1][1] = +H[1][1]),
              w)
            : [
                [k[0][0], k[0][1]],
                [k[1][0], k[1][1]],
              ]
        }),
        (w.constrain = function (H) {
          return arguments.length ? ((s = H), w) : s
        }),
        (w.duration = function (H) {
          return arguments.length ? ((N = +H), w) : N
        }),
        (w.interpolate = function (H) {
          return arguments.length ? ((q = H), w) : q
        }),
        (w.on = function () {
          var H = t.on.apply(t, arguments)
          return H === t ? w : H
        }),
        (w.clickDistance = function (H) {
          return arguments.length ? ((d = (H = +H) * H), w) : Math.sqrt(d)
        }),
        (w.tapDistance = function (H) {
          return arguments.length ? ((m = +H), w) : m
        }),
        w
      )
    }
    function cu(e, i) {
      if (!e) return
      function s(v) {
        v.target === this && (v.preventDefault(), i())
      }
      function p(v) {
        v.key.startsWith("Esc") && (v.preventDefault(), i())
      }
      e?.addEventListener("click", s),
        window.addCleanup(() => e?.removeEventListener("click", s)),
        document.addEventListener("keydown", p),
        window.addCleanup(() => document.removeEventListener("keydown", p))
    }
    function fu(e) {
      for (; e.firstChild; ) e.removeChild(e.firstChild)
    }
    var sa = Object.hasOwnProperty,
      Ko = Yt(on(), 1),
      la = (0, Ko.default)()
    function ca(e) {
      return e.document.body.dataset.slug
    }
    function li(e) {
      let i = Jo(Go(e, "index"), !0)
      return i.length === 0 ? "/" : i
    }
    function fa(e) {
      let i = e
        .split("/")
        .filter((s) => s !== "")
        .slice(0, -1)
        .map((s) => "..")
        .join("/")
      return i.length === 0 && (i = "."), i
    }
    function Xo(e, i) {
      return ci(fa(e), li(i))
    }
    function ci(...e) {
      return e
        .filter((i) => i !== "")
        .join("/")
        .replace(/\/\/+/g, "/")
    }
    function Yo(e, i) {
      return e === i || e.endsWith("/" + i)
    }
    function Go(e, i) {
      return Yo(e, i) && (e = e.slice(0, -i.length)), e
    }
    function Jo(e, i) {
      return (
        e.startsWith("/") && (e = e.substring(1)), !i && e.endsWith("/") && (e = e.slice(0, -1)), e
      )
    }
    var hu = "graph-visited"
    function du() {
      return new Set(JSON.parse(localStorage.getItem(hu) ?? "[]"))
    }
    function Qo(e) {
      let i = du()
      i.add(e), localStorage.setItem(hu, JSON.stringify([...i]))
    }
    async function Di(e, i) {
      let s = li(i),
        p = du(),
        v = document.getElementById(e)
      if (!v) return
      fu(v)
      let {
          drag: E,
          zoom: k,
          depth: N,
          scale: q,
          repelForce: t,
          centerForce: n,
          linkDistance: u,
          fontSize: o,
          opacityScale: l,
          removeTags: f,
          showTags: d,
          focusOnHover: m,
        } = JSON.parse(v.dataset.cfg),
        w = new Map(Object.entries(await fetchData).map(([gt, Wt]) => [li(gt), Wt])),
        A = [],
        $ = [],
        D = new Set(w.keys())
      for (let [gt, Wt] of w.entries()) {
        let ee = Wt.links ?? []
        for (let Y of ee) D.has(Y) && A.push({ source: gt, target: Y })
        if (d) {
          let Y = Wt.tags.filter((At) => !f.includes(At)).map((At) => li("tags/" + At))
          $.push(...Y.filter((At) => !$.includes(At)))
          for (let At of Y) A.push({ source: gt, target: At })
        }
      }
      let S = new Set(),
        P = [s, "__SENTINEL"]
      if (N >= 0)
        for (; N >= 0 && P.length > 0; ) {
          let gt = P.shift()
          if (gt === "__SENTINEL") N--, P.push("__SENTINEL")
          else {
            S.add(gt)
            let Wt = A.filter((Y) => Y.source === gt),
              ee = A.filter((Y) => Y.target === gt)
            P.push(...Wt.map((Y) => Y.target), ...ee.map((Y) => Y.source))
          }
        }
      else D.forEach((gt) => S.add(gt)), d && $.forEach((gt) => S.add(gt))
      let Q = {
          nodes: [...S].map((gt) => {
            let Wt = gt.startsWith("tags/") ? "#" + gt.substring(5) : w.get(gt)?.title ?? gt
            return { id: gt, text: Wt, tags: w.get(gt)?.tags ?? [] }
          }),
          links: A.filter((gt) => S.has(gt.source) && S.has(gt.target)),
        },
        tt = Io(Q.nodes)
          .force("charge", Ro().strength(-100 * t))
          .force(
            "link",
            gn(Q.links)
              .id((gt) => gt.id)
              .distance(u),
          )
          .force("center", ko().strength(n)),
        ut = Math.max(v.offsetHeight, 250),
        rt = v.offsetWidth,
        _t = ht("#" + e)
          .append("svg")
          .attr("width", rt)
          .attr("height", ut)
          .attr("viewBox", [-rt / 2 / q, -ut / 2 / q, rt / q, ut / q]),
        It = _t
          .append("g")
          .selectAll("line")
          .data(Q.links)
          .join("line")
          .attr("class", "link")
          .attr("stroke", "var(--lightgray)")
          .attr("stroke-width", 1),
        st = _t.append("g").selectAll("g").data(Q.nodes).enter().append("g"),
        H = (gt) =>
          gt.id === s
            ? "var(--secondary)"
            : p.has(gt.id) || gt.id.startsWith("tags/")
              ? "var(--tertiary)"
              : "var(--gray)",
        wt = (gt) => {
          function Wt(mt, Mt) {
            mt.active || gt.alphaTarget(1).restart(), (Mt.fx = Mt.x), (Mt.fy = Mt.y)
          }
          function ee(mt, Mt) {
            ;(Mt.fx = mt.x), (Mt.fy = mt.y)
          }
          function Y(mt, Mt) {
            mt.active || gt.alphaTarget(0), (Mt.fx = null), (Mt.fy = null)
          }
          let At = () => {}
          return fi()
            .on("start", E ? Wt : At)
            .on("drag", E ? ee : At)
            .on("end", E ? Y : At)
        }
      function at(gt) {
        let Wt = A.filter((ee) => ee.source.id === gt.id || ee.target.id === gt.id).length
        return 2 + Math.sqrt(Wt)
      }
      let kt = [],
        $t = st
          .append("circle")
          .attr("class", "node")
          .attr("id", (gt) => gt.id)
          .attr("r", at)
          .attr("fill", H)
          .style("cursor", "pointer")
          .on("click", (gt, Wt) => {
            let ee = Xo(i, Wt.id)
            window.spaNavigate(new URL(ee, window.location.toString()))
          })
          .on("mouseover", function (gt, Wt) {
            let ee = Wt.id,
              Y = Dt(".link").filter((Mt) => Mt.source.id === ee || Mt.target.id === ee)
            m &&
              ((kt = Y.data().flatMap((Mt) => [Mt.source.id, Mt.target.id])),
              Dt(".link").style("opacity", 0.2),
              Dt(".node")
                .filter((Mt) => !kt.includes(Mt.id))
                .style("opacity", 0.2)),
              Y.attr("stroke", "var(--gray)").attr("stroke-width", 1)
            let At = o * 1.5,
              mt = this.parentNode
            ht(mt)
              .raise()
              .select("text")
              .attr("opacityOld", ht(mt).select("text").style("opacity"))
              .style("opacity", 1)
              .style("font-size", At + "em")
          })
          .on("mouseleave", function (gt, Wt) {
            m && (Dt(".link").style("opacity", 1), Dt(".node").style("opacity", 1))
            let ee = Wt.id
            Dt(".link")
              .filter((At) => At.source.id === ee || At.target.id === ee)
              .attr("stroke", "var(--lightgray)")
            let Y = this.parentNode
            ht(Y)
              .select("text")
              .style("opacity", ht(Y).select("text").attr("opacityOld"))
              .style("font-size", o + "em")
          })
          .call(wt(tt)),
        Ot = st
          .append("text")
          .attr("dx", 0)
          .attr("dy", (gt) => -at(gt) + "px")
          .attr("text-anchor", "middle")
          .text((gt) => gt.text)
          .style("opacity", (l - 1) / 3.75)
          .style("pointer-events", "none")
          .style("font-size", o + "em")
          .raise()
          .call(wt(tt))
      k &&
        _t.call(
          Wo()
            .extent([
              [0, 0],
              [rt, ut],
            ])
            .scaleExtent([0.25, 4])
            .on("zoom", ({ transform: gt }) => {
              It.attr("transform", gt), $t.attr("transform", gt)
              let Wt = gt.k * l,
                ee = Math.max((Wt - 1) / 3.75, 0)
              Ot.attr("transform", gt).style("opacity", ee)
            }),
        ),
        tt.on("tick", () => {
          It.attr("x1", (gt) => gt.source.x)
            .attr("y1", (gt) => gt.source.y)
            .attr("x2", (gt) => gt.target.x)
            .attr("y2", (gt) => gt.target.y),
            $t.attr("cx", (gt) => gt.x).attr("cy", (gt) => gt.y),
            Ot.attr("x", (gt) => gt.x).attr("y", (gt) => gt.y)
        })
    }
    function Mi() {
      let e = ca(window),
        i = document.getElementById("global-graph-outer"),
        s = i?.closest(".sidebar")
      i?.classList.add("active"), s && (s.style.zIndex = "1"), Di("global-graph-container", e)
      function p() {
        i?.classList.remove("active")
        let v = document.getElementById("global-graph-container")
        s && (s.style.zIndex = "unset"), v && fu(v)
      }
      cu(i, p)
    }
    document.addEventListener("nav", async (e) => {
      let i = e.detail.url
      Qo(i), await Di("graph-container", i)
      let s = document.getElementById("global-graph-icon")
      s?.addEventListener("click", Mi), window.addCleanup(() => s?.removeEventListener("click", Mi))
    })
  })(),
  (function () {
    var je = new IntersectionObserver((ve) => {
      for (let Ee of ve) {
        let Jt = Ee.target.id,
          Oe = document.querySelector(`a[data-for="${Jt}"]`),
          Ie = Ee.rootBounds?.height
        Ie &&
          Oe &&
          (Ee.boundingClientRect.y < Ie
            ? Oe.classList.add("in-view")
            : Oe.classList.remove("in-view"))
      }
    })
    function Ne() {
      this.classList.toggle("collapsed")
      let ve = this.nextElementSibling
      ve &&
        (ve.classList.toggle("collapsed"),
        (ve.style.maxHeight = ve.style.maxHeight === "0px" ? ve.scrollHeight + "px" : "0px"))
    }
    function qe() {
      let ve = document.getElementById("toc")
      if (ve) {
        let Ee = ve.classList.contains("collapsed"),
          Jt = ve.nextElementSibling
        if (!Jt) return
        ;(Jt.style.maxHeight = Ee ? "0px" : Jt.scrollHeight + "px"),
          ve.addEventListener("click", Ne),
          window.addCleanup(() => ve.removeEventListener("click", Ne))
      }
    }
    window.addEventListener("resize", qe),
      document.addEventListener("nav", () => {
        qe(),
          je.disconnect(),
          document
            .querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
            .forEach((ve) => je.observe(ve))
      })
  })(),
  (function () {
    var je = (r, g) => () => (g || r((g = { exports: {} }).exports, g), g.exports),
      Ne = je(() => {})
    function qe(r, g) {
      if (!r) return
      function x(B) {
        B.target === this && (B.preventDefault(), g())
      }
      function C(B) {
        B.key.startsWith("Esc") && (B.preventDefault(), g())
      }
      r?.addEventListener("click", x),
        window.addCleanup(() => r?.removeEventListener("click", x)),
        document.addEventListener("keydown", C),
        window.addCleanup(() => document.removeEventListener("keydown", C))
    }
    function ve(r) {
      for (; r.firstChild; ) r.removeChild(r.firstChild)
    }
    function Ee(r, ...g) {
      r &&
        g.forEach(([x, C]) => {
          let B = (I) => C(I)
          r.addEventListener(x, B), window.addCleanup(() => r.removeEventListener(x, B))
        })
    }
    var Jt = {
        propertyDefaults: { title: "Untitled", description: "No description provided" },
        components: {
          callout: {
            note: "Note",
            abstract: "Abstract",
            info: "Info",
            todo: "Todo",
            tip: "Tip",
            success: "Success",
            question: "Question",
            warning: "Warning",
            failure: "Failure",
            danger: "Danger",
            bug: "Bug",
            example: "Example",
            quote: "Quote",
          },
          backlinks: { title: "Backlinks", noBacklinksFound: "No backlinks found" },
          themeToggle: { lightMode: "Light mode", darkMode: "Dark mode" },
          explorer: { title: "Explorer" },
          footer: { createdWith: "Created with" },
          graph: { title: "Graph View" },
          recentNotes: {
            title: "Recent Notes",
            seeRemainingMore: ({ remaining: r }) => `See ${r} more \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Transclude of ${r}`,
            linkToOriginal: "Link to original",
          },
          search: { title: "Search", searchBarPlaceholder: "Search for something" },
          tableOfContents: { title: "Table of Contents" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} min read` },
        },
        pages: {
          rss: { recentNotes: "Recent notes", lastFewNotes: ({ count: r }) => `Last ${r} notes` },
          error: { title: "Not Found", notFound: "Either this page is private or doesn't exist." },
          folderContent: {
            folder: "Folder",
            itemsUnderFolder: ({ count: r }) =>
              r === 1 ? "1 item under this folder." : `${r} items under this folder.`,
          },
          tagContent: {
            tag: "Tag",
            tagIndex: "Tag Index",
            itemsUnderTag: ({ count: r }) =>
              r === 1 ? "1 item with this tag." : `${r} items with this tag.`,
            showingFirst: ({ count: r }) => `Showing first ${r} tags.`,
            totalTags: ({ count: r }) => `Found ${r} total tags.`,
          },
        },
      },
      Oe = {
        propertyDefaults: { title: "Sans titre", description: "Aucune description fournie" },
        components: {
          callout: {
            note: "Note",
            abstract: "R\xE9sum\xE9",
            info: "Info",
            todo: "\xC0 faire",
            tip: "Conseil",
            success: "Succ\xE8s",
            question: "Question",
            warning: "Avertissement",
            failure: "\xC9chec",
            danger: "Danger",
            bug: "Bogue",
            example: "Exemple",
            quote: "Citation",
          },
          backlinks: { title: "Liens retour", noBacklinksFound: "Aucun lien retour trouv\xE9" },
          themeToggle: { lightMode: "Mode clair", darkMode: "Mode sombre" },
          explorer: { title: "Explorateur" },
          footer: { createdWith: "Cr\xE9\xE9 avec" },
          graph: { title: "Vue Graphique" },
          recentNotes: {
            title: "Notes R\xE9centes",
            seeRemainingMore: ({ remaining: r }) => `Voir ${r} de plus \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Transclusion de ${r}`,
            linkToOriginal: "Lien vers l'original",
          },
          search: { title: "Recherche", searchBarPlaceholder: "Rechercher quelque chose" },
          tableOfContents: { title: "Table des Mati\xE8res" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} min read` },
        },
        pages: {
          rss: {
            recentNotes: "Notes r\xE9centes",
            lastFewNotes: ({ count: r }) => `Les derni\xE8res ${r} notes`,
          },
          error: {
            title: "Pas trouv\xE9",
            notFound: "Cette page est soit priv\xE9e, soit elle n'existe pas.",
          },
          folderContent: {
            folder: "Dossier",
            itemsUnderFolder: ({ count: r }) =>
              r === 1 ? "1 \xE9l\xE9ment sous ce dossier." : `${r} \xE9l\xE9ments sous ce dossier.`,
          },
          tagContent: {
            tag: "\xC9tiquette",
            tagIndex: "Index des \xE9tiquettes",
            itemsUnderTag: ({ count: r }) =>
              r === 1
                ? "1 \xE9l\xE9ment avec cette \xE9tiquette."
                : `${r} \xE9l\xE9ments avec cette \xE9tiquette.`,
            showingFirst: ({ count: r }) => `Affichage des premi\xE8res ${r} \xE9tiquettes.`,
            totalTags: ({ count: r }) => `Trouv\xE9 ${r} \xE9tiquettes au total.`,
          },
        },
      },
      Ie = {
        propertyDefaults: { title: "Senza titolo", description: "Nessuna descrizione" },
        components: {
          callout: {
            note: "Nota",
            abstract: "Astratto",
            info: "Info",
            todo: "Da fare",
            tip: "Consiglio",
            success: "Completato",
            question: "Domanda",
            warning: "Attenzione",
            failure: "Errore",
            danger: "Pericolo",
            bug: "Bug",
            example: "Esempio",
            quote: "Citazione",
          },
          backlinks: { title: "Link entranti", noBacklinksFound: "Nessun link entrante" },
          themeToggle: { lightMode: "Tema chiaro", darkMode: "Tema scuro" },
          explorer: { title: "Esplora" },
          footer: { createdWith: "Creato con" },
          graph: { title: "Vista grafico" },
          recentNotes: {
            title: "Note recenti",
            seeRemainingMore: ({ remaining: r }) => `Vedi ${r} altro \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Transclusione di ${r}`,
            linkToOriginal: "Link all'originale",
          },
          search: { title: "Cerca", searchBarPlaceholder: "Cerca qualcosa" },
          tableOfContents: { title: "Tabella dei contenuti" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} minuti` },
        },
        pages: {
          rss: { recentNotes: "Note recenti", lastFewNotes: ({ count: r }) => `Ultime ${r} note` },
          error: { title: "Non trovato", notFound: "Questa pagina \xE8 privata o non esiste." },
          folderContent: {
            folder: "Cartella",
            itemsUnderFolder: ({ count: r }) =>
              r === 1 ? "1 oggetto in questa cartella." : `${r} oggetti in questa cartella.`,
          },
          tagContent: {
            tag: "Etichetta",
            tagIndex: "Indice etichette",
            itemsUnderTag: ({ count: r }) =>
              r === 1 ? "1 oggetto con questa etichetta." : `${r} oggetti con questa etichetta.`,
            showingFirst: ({ count: r }) => `Prime ${r} etichette.`,
            totalTags: ({ count: r }) => `Trovate ${r} etichette totali.`,
          },
        },
      },
      Yt = {
        propertyDefaults: { title: "\u7121\u984C", description: "\u8AAC\u660E\u306A\u3057" },
        components: {
          callout: {
            note: "\u30CE\u30FC\u30C8",
            abstract: "\u6284\u9332",
            info: "\u60C5\u5831",
            todo: "\u3084\u308B\u3079\u304D\u3053\u3068",
            tip: "\u30D2\u30F3\u30C8",
            success: "\u6210\u529F",
            question: "\u8CEA\u554F",
            warning: "\u8B66\u544A",
            failure: "\u5931\u6557",
            danger: "\u5371\u967A",
            bug: "\u30D0\u30B0",
            example: "\u4F8B",
            quote: "\u5F15\u7528",
          },
          backlinks: {
            title: "\u30D0\u30C3\u30AF\u30EA\u30F3\u30AF",
            noBacklinksFound:
              "\u30D0\u30C3\u30AF\u30EA\u30F3\u30AF\u306F\u3042\u308A\u307E\u305B\u3093",
          },
          themeToggle: {
            lightMode: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9",
            darkMode: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9",
          },
          explorer: { title: "\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC" },
          footer: { createdWith: "\u4F5C\u6210" },
          graph: { title: "\u30B0\u30E9\u30D5\u30D3\u30E5\u30FC" },
          recentNotes: {
            title: "\u6700\u8FD1\u306E\u8A18\u4E8B",
            seeRemainingMore: ({ remaining: r }) => `\u3055\u3089\u306B${r}\u4EF6 \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `${r}\u306E\u307E\u3068\u3081`,
            linkToOriginal: "\u5143\u8A18\u4E8B\u3078\u306E\u30EA\u30F3\u30AF",
          },
          search: {
            title: "\u691C\u7D22",
            searchBarPlaceholder: "\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B",
          },
          tableOfContents: { title: "\u76EE\u6B21" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} min read` },
        },
        pages: {
          rss: {
            recentNotes: "\u6700\u8FD1\u306E\u8A18\u4E8B",
            lastFewNotes: ({ count: r }) => `\u6700\u65B0\u306E${r}\u4EF6`,
          },
          error: {
            title: "Not Found",
            notFound:
              "\u30DA\u30FC\u30B8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u975E\u516C\u958B\u8A2D\u5B9A\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",
          },
          folderContent: {
            folder: "\u30D5\u30A9\u30EB\u30C0",
            itemsUnderFolder: ({ count: r }) => `${r}\u4EF6\u306E\u30DA\u30FC\u30B8`,
          },
          tagContent: {
            tag: "\u30BF\u30B0",
            tagIndex: "\u30BF\u30B0\u4E00\u89A7",
            itemsUnderTag: ({ count: r }) => `${r}\u4EF6\u306E\u30DA\u30FC\u30B8`,
            showingFirst: ({ count: r }) =>
              `\u306E\u3046\u3061\u6700\u521D\u306E${r}\u4EF6\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059`,
            totalTags: ({ count: r }) =>
              `\u5168${r}\u500B\u306E\u30BF\u30B0\u3092\u8868\u793A\u4E2D`,
          },
        },
      },
      on = {
        propertyDefaults: { title: "Unbenannt", description: "Keine Beschreibung angegeben" },
        components: {
          callout: {
            note: "Hinweis",
            abstract: "Zusammenfassung",
            info: "Info",
            todo: "Zu erledigen",
            tip: "Tipp",
            success: "Erfolg",
            question: "Frage",
            warning: "Warnung",
            failure: "Misserfolg",
            danger: "Gefahr",
            bug: "Fehler",
            example: "Beispiel",
            quote: "Zitat",
          },
          backlinks: { title: "Backlinks", noBacklinksFound: "Keine Backlinks gefunden" },
          themeToggle: { lightMode: "Light Mode", darkMode: "Dark Mode" },
          explorer: { title: "Explorer" },
          footer: { createdWith: "Erstellt mit" },
          graph: { title: "Graphansicht" },
          recentNotes: {
            title: "Zuletzt bearbeitete Seiten",
            seeRemainingMore: ({ remaining: r }) => `${r} weitere ansehen \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Transklusion von ${r}`,
            linkToOriginal: "Link zum Original",
          },
          search: { title: "Suche", searchBarPlaceholder: "Suche nach etwas" },
          tableOfContents: { title: "Inhaltsverzeichnis" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} min read` },
        },
        pages: {
          rss: {
            recentNotes: "Zuletzt bearbeitete Seiten",
            lastFewNotes: ({ count: r }) => `Letzte ${r} Seiten`,
          },
          error: {
            title: "Nicht gefunden",
            notFound: "Diese Seite ist entweder nicht \xF6ffentlich oder existiert nicht.",
          },
          folderContent: {
            folder: "Ordner",
            itemsUnderFolder: ({ count: r }) =>
              r === 1 ? "1 Datei in diesem Ordner." : `${r} Dateien in diesem Ordner.`,
          },
          tagContent: {
            tag: "Tag",
            tagIndex: "Tag-\xDCbersicht",
            itemsUnderTag: ({ count: r }) =>
              r === 1 ? "1 Datei mit diesem Tag." : `${r} Dateien mit diesem Tag.`,
            showingFirst: ({ count: r }) => `Die ersten ${r} Tags werden angezeigt.`,
            totalTags: ({ count: r }) => `${r} Tags insgesamt.`,
          },
        },
      },
      de = {
        propertyDefaults: { title: "Naamloos", description: "Geen beschrijving gegeven." },
        components: {
          callout: {
            note: "Notitie",
            abstract: "Samenvatting",
            info: "Info",
            todo: "Te doen",
            tip: "Tip",
            success: "Succes",
            question: "Vraag",
            warning: "Waarschuwing",
            failure: "Mislukking",
            danger: "Gevaar",
            bug: "Bug",
            example: "Voorbeeld",
            quote: "Citaat",
          },
          backlinks: { title: "Backlinks", noBacklinksFound: "Geen backlinks gevonden" },
          themeToggle: { lightMode: "Lichte modus", darkMode: "Donkere modus" },
          explorer: { title: "Verkenner" },
          footer: { createdWith: "Gemaakt met" },
          graph: { title: "Grafiekweergave" },
          recentNotes: {
            title: "Recente notities",
            seeRemainingMore: ({ remaining: r }) => `Zie ${r} meer \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Invoeging van ${r}`,
            linkToOriginal: "Link naar origineel",
          },
          search: { title: "Zoeken", searchBarPlaceholder: "Doorzoek de website" },
          tableOfContents: { title: "Inhoudsopgave" },
          contentMeta: {
            readingTime: ({ minutes: r }) =>
              r === 1 ? "1 minuut leestijd" : `${r} minuten leestijd`,
          },
        },
        pages: {
          rss: {
            recentNotes: "Recente notities",
            lastFewNotes: ({ count: r }) => `Laatste ${r} notities`,
          },
          error: {
            title: "Niet gevonden",
            notFound: "Deze pagina is niet zichtbaar of bestaat niet.",
          },
          folderContent: {
            folder: "Map",
            itemsUnderFolder: ({ count: r }) =>
              r === 1 ? "1 item in deze map." : `${r} items in deze map.`,
          },
          tagContent: {
            tag: "Label",
            tagIndex: "Label-index",
            itemsUnderTag: ({ count: r }) =>
              r === 1 ? "1 item met dit label." : `${r} items met dit label.`,
            showingFirst: ({ count: r }) =>
              r === 1 ? "Eerste label tonen." : `Eerste ${r} labels tonen.`,
            totalTags: ({ count: r }) => `${r} labels gevonden.`,
          },
        },
      },
      Vt = {
        propertyDefaults: {
          title: "F\u0103r\u0103 titlu",
          description: "Nici o descriere furnizat\u0103",
        },
        components: {
          callout: {
            note: "Not\u0103",
            abstract: "Rezumat",
            info: "Informa\u021Bie",
            todo: "De f\u0103cut",
            tip: "Sfat",
            success: "Succes",
            question: "\xCEntrebare",
            warning: "Avertisment",
            failure: "E\u0219ec",
            danger: "Pericol",
            bug: "Bug",
            example: "Exemplu",
            quote: "Citat",
          },
          backlinks: {
            title: "Leg\u0103turi \xEEnapoi",
            noBacklinksFound: "Nu s-au g\u0103sit leg\u0103turi \xEEnapoi",
          },
          themeToggle: { lightMode: "Modul luminos", darkMode: "Modul \xEEntunecat" },
          explorer: { title: "Explorator" },
          footer: { createdWith: "Creat cu" },
          graph: { title: "Graf" },
          recentNotes: {
            title: "Noti\u021Be recente",
            seeRemainingMore: ({ remaining: r }) => `Vezi \xEEnc\u0103 ${r} \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Extras din ${r}`,
            linkToOriginal: "Leg\u0103tur\u0103 c\u0103tre original",
          },
          search: {
            title: "C\u0103utare",
            searchBarPlaceholder: "Introduce\u021Bi termenul de c\u0103utare...",
          },
          tableOfContents: { title: "Cuprins" },
          contentMeta: {
            readingTime: ({ minutes: r }) =>
              r == 1 ? "lectur\u0103 de 1 minut" : `lectur\u0103 de ${r} minute`,
          },
        },
        pages: {
          rss: {
            recentNotes: "Noti\u021Be recente",
            lastFewNotes: ({ count: r }) => `Ultimele ${r} noti\u021Be`,
          },
          error: {
            title: "Pagina nu a fost g\u0103sit\u0103",
            notFound: "Fie aceast\u0103 pagin\u0103 este privat\u0103, fie nu exist\u0103.",
          },
          folderContent: {
            folder: "Dosar",
            itemsUnderFolder: ({ count: r }) =>
              r === 1 ? "1 articol \xEEn acest dosar." : `${r} elemente \xEEn acest dosar.`,
          },
          tagContent: {
            tag: "Etichet\u0103",
            tagIndex: "Indexul etichetelor",
            itemsUnderTag: ({ count: r }) =>
              r === 1
                ? "1 articol cu aceast\u0103 etichet\u0103."
                : `${r} articole cu aceast\u0103 etichet\u0103.`,
            showingFirst: ({ count: r }) => `Se afi\u0219eaz\u0103 primele ${r} etichete.`,
            totalTags: ({ count: r }) => `Au fost g\u0103site ${r} etichete \xEEn total.`,
          },
        },
      },
      Se = {
        propertyDefaults: { title: "Sin t\xEDtulo", description: "Sin descripci\xF3n" },
        components: {
          callout: {
            note: "Nota",
            abstract: "Resumen",
            info: "Informaci\xF3n",
            todo: "Por hacer",
            tip: "Consejo",
            success: "\xC9xito",
            question: "Pregunta",
            warning: "Advertencia",
            failure: "Fallo",
            danger: "Peligro",
            bug: "Error",
            example: "Ejemplo",
            quote: "Cita",
          },
          backlinks: {
            title: "Enlaces de Retroceso",
            noBacklinksFound: "No se han encontrado enlaces traseros",
          },
          themeToggle: { lightMode: "Modo claro", darkMode: "Modo oscuro" },
          explorer: { title: "Explorador" },
          footer: { createdWith: "Creado con" },
          graph: { title: "Vista Gr\xE1fica" },
          recentNotes: {
            title: "Notas Recientes",
            seeRemainingMore: ({ remaining: r }) => `Vea ${r} m\xE1s \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Transcluido de ${r}`,
            linkToOriginal: "Enlace al original",
          },
          search: { title: "Buscar", searchBarPlaceholder: "Busca algo" },
          tableOfContents: { title: "Tabla de Contenidos" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} min read` },
        },
        pages: {
          rss: {
            recentNotes: "Notas recientes",
            lastFewNotes: ({ count: r }) => `\xDAltim\xE1s ${r} notas`,
          },
          error: {
            title: "No se encontr\xF3.",
            notFound: "Esta p\xE1gina es privada o no existe.",
          },
          folderContent: {
            folder: "Carpeta",
            itemsUnderFolder: ({ count: r }) =>
              r === 1 ? "1 art\xEDculo en esta carpeta." : `${r} art\xEDculos en esta carpeta.`,
          },
          tagContent: {
            tag: "Etiqueta",
            tagIndex: "\xCDndice de Etiquetas",
            itemsUnderTag: ({ count: r }) =>
              r === 1 ? "1 art\xEDculo con esta etiqueta." : `${r} art\xEDculos con esta etiqueta.`,
            showingFirst: ({ count: r }) => `Mostrando las primeras ${r} etiquetas.`,
            totalTags: ({ count: r }) => `Se encontraron ${r} etiquetas en total.`,
          },
        },
      },
      ne = {
        propertyDefaults: {
          title: "\u063A\u064A\u0631 \u0645\u0639\u0646\u0648\u0646",
          description:
            "\u0644\u0645 \u064A\u062A\u0645 \u062A\u0642\u062F\u064A\u0645 \u0623\u064A \u0648\u0635\u0641",
        },
        components: {
          callout: {
            note: "\u0645\u0644\u0627\u062D\u0638\u0629",
            abstract: "\u0645\u0644\u062E\u0635",
            info: "\u0645\u0639\u0644\u0648\u0645\u0627\u062A",
            todo: "\u0644\u0644\u0642\u064A\u0627\u0645",
            tip: "\u0646\u0635\u064A\u062D\u0629",
            success: "\u0646\u062C\u0627\u062D",
            question: "\u0633\u0624\u0627\u0644",
            warning: "\u062A\u062D\u0630\u064A\u0631",
            failure: "\u0641\u0634\u0644",
            danger: "\u062E\u0637\u0631",
            bug: "\u062E\u0644\u0644",
            example: "\u0645\u062B\u0627\u0644",
            quote: "\u0627\u0642\u062A\u0628\u0627\u0633",
          },
          backlinks: {
            title: "\u0648\u0635\u0644\u0627\u062A \u0627\u0644\u0639\u0648\u062F\u0629",
            noBacklinksFound:
              "\u0644\u0627 \u064A\u0648\u062C\u062F \u0648\u0635\u0644\u0627\u062A \u0639\u0648\u062F\u0629",
          },
          themeToggle: {
            lightMode: "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u064A",
            darkMode: "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0644\u064A\u0644\u064A",
          },
          explorer: { title: "\u0627\u0644\u0645\u0633\u062A\u0639\u0631\u0636" },
          footer: {
            createdWith:
              "\u0623\u064F\u0646\u0634\u0626 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
          },
          graph: {
            title:
              "\u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A",
          },
          recentNotes: {
            title: "\u0622\u062E\u0631 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A",
            seeRemainingMore: ({ remaining: r }) =>
              `\u062A\u0635\u0641\u062D ${r} \u0623\u0643\u062B\u0631 \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `\u0645\u0642\u062A\u0628\u0633 \u0645\u0646 ${r}`,
            linkToOriginal:
              "\u0648\u0635\u0644\u0629 \u0644\u0644\u0645\u0644\u0627\u062D\u0638\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u0629",
          },
          search: {
            title: "\u0628\u062D\u062B",
            searchBarPlaceholder:
              "\u0627\u0628\u062D\u062B \u0639\u0646 \u0634\u064A\u0621 \u0645\u0627",
          },
          tableOfContents: {
            title:
              "\u0641\u0647\u0631\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u064A\u0627\u062A",
          },
          contentMeta: {
            readingTime: ({ minutes: r }) =>
              r == 1
                ? "\u062F\u0642\u064A\u0642\u0629 \u0623\u0648 \u0623\u0642\u0644 \u0644\u0644\u0642\u0631\u0627\u0621\u0629"
                : r == 2
                  ? "\u062F\u0642\u064A\u0642\u062A\u0627\u0646 \u0644\u0644\u0642\u0631\u0627\u0621\u0629"
                  : `${r} \u062F\u0642\u0627\u0626\u0642 \u0644\u0644\u0642\u0631\u0627\u0621\u0629`,
          },
        },
        pages: {
          rss: {
            recentNotes:
              "\u0622\u062E\u0631 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A",
            lastFewNotes: ({ count: r }) =>
              `\u0622\u062E\u0631 ${r} \u0645\u0644\u0627\u062D\u0638\u0629`,
          },
          error: {
            title: "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
            notFound:
              "\u0625\u0645\u0627 \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062E\u0627\u0635\u0629 \u0623\u0648 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629.",
          },
          folderContent: {
            folder: "\u0645\u062C\u0644\u062F",
            itemsUnderFolder: ({ count: r }) =>
              r === 1
                ? "\u064A\u0648\u062C\u062F \u0639\u0646\u0635\u0631 \u0648\u0627\u062D\u062F \u0641\u0642\u0637 \u062A\u062D\u062A \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0644\u062F"
                : `\u064A\u0648\u062C\u062F ${r} \u0639\u0646\u0627\u0635\u0631 \u062A\u062D\u062A \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0644\u062F.`,
          },
          tagContent: {
            tag: "\u0627\u0644\u0648\u0633\u0645",
            tagIndex: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0648\u0633\u0645",
            itemsUnderTag: ({ count: r }) =>
              r === 1
                ? "\u064A\u0648\u062C\u062F \u0639\u0646\u0635\u0631 \u0648\u0627\u062D\u062F \u0641\u0642\u0637 \u062A\u062D\u062A \u0647\u0630\u0627 \u0627\u0644\u0648\u0633\u0645"
                : `\u064A\u0648\u062C\u062F ${r} \u0639\u0646\u0627\u0635\u0631 \u062A\u062D\u062A \u0647\u0630\u0627 \u0627\u0644\u0648\u0633\u0645.`,
            showingFirst: ({ count: r }) =>
              `\u0625\u0638\u0647\u0627\u0631 \u0623\u0648\u0644 ${r} \u0623\u0648\u0633\u0645\u0629.`,
            totalTags: ({ count: r }) =>
              `\u064A\u0648\u062C\u062F ${r} \u0623\u0648\u0633\u0645\u0629.`,
          },
        },
      },
      ye = {
        propertyDefaults: {
          title: "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0438",
          description: "\u041E\u043F\u0438\u0441 \u043D\u0435 \u043D\u0430\u0434\u0430\u043D\u043E",
        },
        components: {
          callout: {
            note: "\u041F\u0440\u0438\u043C\u0456\u0442\u043A\u0430",
            abstract: "\u0410\u0431\u0441\u0442\u0440\u0430\u043A\u0442",
            info: "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F",
            todo: "\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F",
            tip: "\u041F\u043E\u0440\u0430\u0434\u0430",
            success: "\u0423\u0441\u043F\u0456\u0445",
            question: "\u041F\u0438\u0442\u0430\u043D\u043D\u044F",
            warning: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F",
            failure: "\u041D\u0435\u0432\u0434\u0430\u0447\u0430",
            danger: "\u041D\u0435\u0431\u0435\u0437\u043F\u0435\u043A\u0430",
            bug: "\u0411\u0430\u0433",
            example: "\u041F\u0440\u0438\u043A\u043B\u0430\u0434",
            quote: "\u0426\u0438\u0442\u0430\u0442\u0430",
          },
          backlinks: {
            title:
              "\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
            noBacklinksFound:
              "\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0438\u0445 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u044C \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
          },
          themeToggle: {
            lightMode: "\u0421\u0432\u0456\u0442\u043B\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
            darkMode: "\u0422\u0435\u043C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
          },
          explorer: { title: "\u041F\u0440\u043E\u0432\u0456\u0434\u043D\u0438\u043A" },
          footer: {
            createdWith:
              "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E",
          },
          graph: { title: "\u0412\u0438\u0433\u043B\u044F\u0434 \u0433\u0440\u0430\u0444\u0430" },
          recentNotes: {
            title:
              "\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",
            seeRemainingMore: ({ remaining: r }) =>
              `\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0449\u0435 ${r} \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) =>
              `\u0412\u0438\u0434\u043E\u0431\u0443\u0442\u043E \u0437 ${r}`,
            linkToOriginal:
              "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B",
          },
          search: {
            title: "\u041F\u043E\u0448\u0443\u043A",
            searchBarPlaceholder: "\u0428\u0443\u043A\u0430\u0442\u0438 \u0449\u043E\u0441\u044C",
          },
          tableOfContents: { title: "\u0417\u043C\u0456\u0441\u0442" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} min read` },
        },
        pages: {
          rss: {
            recentNotes:
              "\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",
            lastFewNotes: ({ count: r }) =>
              `\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438: ${r}`,
          },
          error: {
            title: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
            notFound:
              "\u0426\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0430\u0431\u043E \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0430, \u0430\u0431\u043E \u043D\u0435 \u0456\u0441\u043D\u0443\u0454.",
          },
          folderContent: {
            folder: "\u041F\u0430\u043F\u043A\u0430",
            itemsUnderFolder: ({ count: r }) =>
              r === 1
                ? "\u0423 \u0446\u0456\u0439 \u043F\u0430\u043F\u0446\u0456 1 \u0435\u043B\u0435\u043C\u0435\u043D\u0442."
                : `\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0443 \u0446\u0456\u0439 \u043F\u0430\u043F\u0446\u0456: ${r}.`,
          },
          tagContent: {
            tag: "\u0422\u0435\u0433",
            tagIndex: "\u0406\u043D\u0434\u0435\u043A\u0441 \u0442\u0435\u0433\u0443",
            itemsUnderTag: ({ count: r }) =>
              r === 1
                ? "1 \u0435\u043B\u0435\u043C\u0435\u043D\u0442 \u0437 \u0446\u0438\u043C \u0442\u0435\u0433\u043E\u043C."
                : `\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0437 \u0446\u0438\u043C \u0442\u0435\u0433\u043E\u043C: ${r}.`,
            showingFirst: ({ count: r }) =>
              `\u041F\u043E\u043A\u0430\u0437 \u043F\u0435\u0440\u0448\u0438\u0445 ${r} \u0442\u0435\u0433\u0456\u0432.`,
            totalTags: ({ count: r }) =>
              `\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u0435\u0433\u0456\u0432: ${r}.`,
          },
        },
      },
      mn = {
        propertyDefaults: {
          title: "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F",
          description:
            "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",
        },
        components: {
          callout: {
            note: "\u0417\u0430\u043C\u0435\u0442\u043A\u0430",
            abstract: "\u0420\u0435\u0437\u044E\u043C\u0435",
            info: "\u0418\u043D\u0444\u043E",
            todo: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C",
            tip: "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430",
            success: "\u0423\u0441\u043F\u0435\u0445",
            question: "\u0412\u043E\u043F\u0440\u043E\u0441",
            warning:
              "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",
            failure: "\u041D\u0435\u0443\u0434\u0430\u0447\u0430",
            danger: "\u041E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
            bug: "\u0411\u0430\u0433",
            example: "\u041F\u0440\u0438\u043C\u0435\u0440",
            quote: "\u0426\u0438\u0442\u0430\u0442\u0430",
          },
          backlinks: {
            title:
              "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",
            noBacklinksFound:
              "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442",
          },
          themeToggle: {
            lightMode: "\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
            darkMode: "\u0422\u0451\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
          },
          explorer: { title: "\u041F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A" },
          footer: {
            createdWith:
              "\u0421\u043E\u0437\u0434\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",
          },
          graph: { title: "\u0412\u0438\u0434 \u0433\u0440\u0430\u0444\u0430" },
          recentNotes: {
            title:
              "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
            seeRemainingMore: ({ remaining: r }) =>
              `\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0448${se(r, "\u0443\u044E\u0441\u044F", "\u0438\u0435\u0441\u044F", "\u0438\u0435\u0441\u044F")} ${r} \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) =>
              `\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0438\u0437 ${r}`,
            linkToOriginal:
              "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B",
          },
          search: {
            title: "\u041F\u043E\u0438\u0441\u043A",
            searchBarPlaceholder:
              "\u041D\u0430\u0439\u0442\u0438 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C",
          },
          tableOfContents: {
            title: "\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435",
          },
          contentMeta: {
            readingTime: ({ minutes: r }) =>
              `\u0432\u0440\u0435\u043C\u044F \u0447\u0442\u0435\u043D\u0438\u044F ~${r} \u043C\u0438\u043D.`,
          },
        },
        pages: {
          rss: {
            recentNotes:
              "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
            lastFewNotes: ({ count: r }) =>
              `\u041F\u043E\u0441\u043B\u0435\u0434\u043D${se(r, "\u044F\u044F", "\u0438\u0435", "\u0438\u0435")} ${r} \u0437\u0430\u043C\u0435\u0442${se(r, "\u043A\u0430", "\u043A\u0438", "\u043E\u043A")}`,
          },
          error: {
            title:
              "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",
            notFound:
              "\u042D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0430\u044F \u0438\u043B\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",
          },
          folderContent: {
            folder: "\u041F\u0430\u043F\u043A\u0430",
            itemsUnderFolder: ({ count: r }) =>
              `\u0432 \u044D\u0442\u043E\u0439 \u043F\u0430\u043F\u043A\u0435 ${r} \u044D\u043B\u0435\u043C\u0435\u043D\u0442${se(r, "", "\u0430", "\u043E\u0432")}`,
          },
          tagContent: {
            tag: "\u0422\u0435\u0433",
            tagIndex: "\u0418\u043D\u0434\u0435\u043A\u0441 \u0442\u0435\u0433\u043E\u0432",
            itemsUnderTag: ({ count: r }) =>
              `\u0441 \u044D\u0442\u0438\u043C \u0442\u0435\u0433\u043E\u043C ${r} \u044D\u043B\u0435\u043C\u0435\u043D\u0442${se(r, "", "\u0430", "\u043E\u0432")}`,
            showingFirst: ({ count: r }) =>
              `\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430${se(r, "\u0435\u0442\u0441\u044F", "\u044E\u0442\u0441\u044F", "\u044E\u0442\u0441\u044F")} ${r} \u0442\u0435\u0433${se(r, "", "\u0430", "\u043E\u0432")}`,
            totalTags: ({ count: r }) =>
              `\u0412\u0441\u0435\u0433\u043E ${r} \u0442\u0435\u0433${se(r, "", "\u0430", "\u043E\u0432")}`,
          },
        },
      }
    function se(r, g, x, C) {
      let B = r % 100,
        I = B % 10
      return B >= 10 && B <= 20 ? C : I > 1 && I < 5 ? x : I == 1 ? g : C
    }
    var De = {
        propertyDefaults: {
          title: "\uC81C\uBAA9 \uC5C6\uC74C",
          description: "\uC124\uBA85 \uC5C6\uC74C",
        },
        components: {
          callout: {
            note: "\uB178\uD2B8",
            abstract: "\uAC1C\uC694",
            info: "\uC815\uBCF4",
            todo: "\uD560\uC77C",
            tip: "\uD301",
            success: "\uC131\uACF5",
            question: "\uC9C8\uBB38",
            warning: "\uC8FC\uC758",
            failure: "\uC2E4\uD328",
            danger: "\uC704\uD5D8",
            bug: "\uBC84\uADF8",
            example: "\uC608\uC2DC",
            quote: "\uC778\uC6A9",
          },
          backlinks: {
            title: "\uBC31\uB9C1\uD06C",
            noBacklinksFound: "\uBC31\uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
          },
          themeToggle: {
            lightMode: "\uB77C\uC774\uD2B8 \uBAA8\uB4DC",
            darkMode: "\uB2E4\uD06C \uBAA8\uB4DC",
          },
          explorer: { title: "\uD0D0\uC0C9\uAE30" },
          footer: { createdWith: "Created with" },
          graph: { title: "\uADF8\uB798\uD504 \uBDF0" },
          recentNotes: {
            title: "\uCD5C\uADFC \uAC8C\uC2DC\uAE00",
            seeRemainingMore: ({ remaining: r }) => `${r}\uAC74 \uB354\uBCF4\uAE30 \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `${r}\uC758 \uD3EC\uD568`,
            linkToOriginal: "\uC6D0\uBCF8 \uB9C1\uD06C",
          },
          search: {
            title: "\uAC80\uC0C9",
            searchBarPlaceholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694",
          },
          tableOfContents: { title: "\uBAA9\uCC28" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} min read` },
        },
        pages: {
          rss: {
            recentNotes: "\uCD5C\uADFC \uAC8C\uC2DC\uAE00",
            lastFewNotes: ({ count: r }) => `\uCD5C\uADFC ${r} \uAC74`,
          },
          error: {
            title: "Not Found",
            notFound:
              "\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uAC70\uB098 \uBE44\uACF5\uAC1C \uC124\uC815\uC774 \uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
          },
          folderContent: {
            folder: "\uD3F4\uB354",
            itemsUnderFolder: ({ count: r }) => `${r}\uAC74\uC758 \uD56D\uBAA9`,
          },
          tagContent: {
            tag: "\uD0DC\uADF8",
            tagIndex: "\uD0DC\uADF8 \uBAA9\uB85D",
            itemsUnderTag: ({ count: r }) => `${r}\uAC74\uC758 \uD56D\uBAA9`,
            showingFirst: ({ count: r }) => `\uCC98\uC74C ${r}\uAC1C\uC758 \uD0DC\uADF8`,
            totalTags: ({ count: r }) =>
              `\uCD1D ${r}\uAC1C\uC758 \uD0DC\uADF8\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4.`,
          },
        },
      },
      te = {
        propertyDefaults: { title: "\u65E0\u9898", description: "\u65E0\u63CF\u8FF0" },
        components: {
          callout: {
            note: "\u7B14\u8BB0",
            abstract: "\u6458\u8981",
            info: "\u63D0\u793A",
            todo: "\u5F85\u529E",
            tip: "\u63D0\u793A",
            success: "\u6210\u529F",
            question: "\u95EE\u9898",
            warning: "\u8B66\u544A",
            failure: "\u5931\u8D25",
            danger: "\u5371\u9669",
            bug: "\u9519\u8BEF",
            example: "\u793A\u4F8B",
            quote: "\u5F15\u7528",
          },
          backlinks: {
            title: "\u53CD\u5411\u94FE\u63A5",
            noBacklinksFound: "\u65E0\u6CD5\u627E\u5230\u53CD\u5411\u94FE\u63A5",
          },
          themeToggle: {
            lightMode: "\u4EAE\u8272\u6A21\u5F0F",
            darkMode: "\u6697\u8272\u6A21\u5F0F",
          },
          explorer: { title: "\u63A2\u7D22" },
          footer: { createdWith: "Created with" },
          graph: { title: "\u5173\u7CFB\u56FE\u8C31" },
          recentNotes: {
            title: "\u6700\u8FD1\u7684\u7B14\u8BB0",
            seeRemainingMore: ({ remaining: r }) =>
              `\u67E5\u770B\u66F4\u591A${r}\u7BC7\u7B14\u8BB0 \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `\u5305\u542B${r}`,
            linkToOriginal: "\u6307\u5411\u539F\u59CB\u7B14\u8BB0\u7684\u94FE\u63A5",
          },
          search: { title: "\u641C\u7D22", searchBarPlaceholder: "\u641C\u7D22\u4E9B\u4EC0\u4E48" },
          tableOfContents: { title: "\u76EE\u5F55" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r}\u5206\u949F\u9605\u8BFB` },
        },
        pages: {
          rss: {
            recentNotes: "\u6700\u8FD1\u7684\u7B14\u8BB0",
            lastFewNotes: ({ count: r }) => `\u6700\u8FD1\u7684${r}\u6761\u7B14\u8BB0`,
          },
          error: {
            title: "\u65E0\u6CD5\u627E\u5230",
            notFound: "\u79C1\u6709\u7B14\u8BB0\u6216\u7B14\u8BB0\u4E0D\u5B58\u5728\u3002",
          },
          folderContent: {
            folder: "\u6587\u4EF6\u5939",
            itemsUnderFolder: ({ count: r }) =>
              `\u6B64\u6587\u4EF6\u5939\u4E0B\u6709${r}\u6761\u7B14\u8BB0\u3002`,
          },
          tagContent: {
            tag: "\u6807\u7B7E",
            tagIndex: "\u6807\u7B7E\u7D22\u5F15",
            itemsUnderTag: ({ count: r }) =>
              `\u6B64\u6807\u7B7E\u4E0B\u6709${r}\u6761\u7B14\u8BB0\u3002`,
            showingFirst: ({ count: r }) => `\u663E\u793A\u524D${r}\u4E2A\u6807\u7B7E\u3002`,
            totalTags: ({ count: r }) => `\u603B\u5171\u6709${r}\u4E2A\u6807\u7B7E\u3002`,
          },
        },
      },
      Ye = {
        propertyDefaults: {
          title: "Kh\xF4ng c\xF3 ti\xEAu \u0111\u1EC1",
          description: "Kh\xF4ng c\xF3 m\xF4 t\u1EA3 \u0111\u01B0\u1EE3c cung c\u1EA5p",
        },
        components: {
          callout: {
            note: "Ghi Ch\xFA",
            abstract: "T\xF3m T\u1EAFt",
            info: "Th\xF4ng tin",
            todo: "C\u1EA7n L\xE0m",
            tip: "G\u1EE3i \xDD",
            success: "Th\xE0nh C\xF4ng",
            question: "Nghi V\u1EA5n",
            warning: "C\u1EA3nh B\xE1o",
            failure: "Th\u1EA5t B\u1EA1i",
            danger: "Nguy Hi\u1EC3m",
            bug: "L\u1ED7i",
            example: "V\xED D\u1EE5",
            quote: "Tr\xEDch D\u1EABn",
          },
          backlinks: {
            title: "Li\xEAn K\u1EBFt Ng\u01B0\u1EE3c",
            noBacklinksFound:
              "Kh\xF4ng c\xF3 li\xEAn k\u1EBFt ng\u01B0\u1EE3c \u0111\u01B0\u1EE3c t\xECm th\u1EA5y",
          },
          themeToggle: { lightMode: "S\xE1ng", darkMode: "T\u1ED1i" },
          explorer: { title: "Trong b\xE0i n\xE0y" },
          footer: { createdWith: "\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi" },
          graph: { title: "Bi\u1EC3u \u0110\u1ED3" },
          recentNotes: {
            title: "B\xE0i vi\u1EBFt g\u1EA7n \u0111\xE2y",
            seeRemainingMore: ({ remaining: r }) => `Xem ${r} th\xEAm \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Bao g\u1ED3m ${r}`,
            linkToOriginal: "Li\xEAn K\u1EBFt G\u1ED1c",
          },
          search: {
            title: "T\xECm Ki\u1EBFm",
            searchBarPlaceholder: "T\xECm ki\u1EBFm th\xF4ng tin",
          },
          tableOfContents: { title: "B\u1EA3ng N\u1ED9i Dung" },
          contentMeta: { readingTime: ({ minutes: r }) => `\u0111\u1ECDc ${r} ph\xFAt` },
        },
        pages: {
          rss: {
            recentNotes: "Nh\u1EEFng b\xE0i g\u1EA7n \u0111\xE2y",
            lastFewNotes: ({ count: r }) => `${r} B\xE0i g\u1EA7n \u0111\xE2y`,
          },
          error: {
            title: "Kh\xF4ng T\xECm Th\u1EA5y",
            notFound:
              "Trang n\xE0y \u0111\u01B0\u1EE3c b\u1EA3o m\u1EADt ho\u1EB7c kh\xF4ng t\u1ED3n t\u1EA1i.",
          },
          folderContent: {
            folder: "Th\u01B0 M\u1EE5c",
            itemsUnderFolder: ({ count: r }) =>
              r === 1
                ? "1 m\u1EE5c trong th\u01B0 m\u1EE5c n\xE0y."
                : `${r} m\u1EE5c trong th\u01B0 m\u1EE5c n\xE0y.`,
          },
          tagContent: {
            tag: "Th\u1EBB",
            tagIndex: "Th\u1EBB M\u1EE5c L\u1EE5c",
            itemsUnderTag: ({ count: r }) =>
              r === 1
                ? "1 m\u1EE5c g\u1EAFn th\u1EBB n\xE0y."
                : `${r} m\u1EE5c g\u1EAFn th\u1EBB n\xE0y.`,
            showingFirst: ({ count: r }) => `Hi\u1EC3n th\u1ECB tr\u01B0\u1EDBc ${r} th\u1EBB.`,
            totalTags: ({ count: r }) => `T\xECm th\u1EA5y ${r} th\u1EBB t\u1ED5ng c\u1ED9ng.`,
          },
        },
      },
      vn = {
        "en-US": Jt,
        "fr-FR": Oe,
        "it-IT": Ie,
        "ja-JP": Yt,
        "de-DE": on,
        "nl-NL": de,
        "nl-BE": de,
        "ro-RO": Vt,
        "ro-MD": Vt,
        "es-ES": Se,
        "ar-SA": ne,
        "ar-AE": ne,
        "ar-QA": ne,
        "ar-BH": ne,
        "ar-KW": ne,
        "ar-OM": ne,
        "ar-YE": ne,
        "ar-IR": ne,
        "ar-SY": ne,
        "ar-IQ": ne,
        "ar-JO": ne,
        "ar-PL": ne,
        "ar-LB": ne,
        "ar-EG": ne,
        "ar-SD": ne,
        "ar-LY": ne,
        "ar-MA": ne,
        "ar-TN": ne,
        "ar-DZ": ne,
        "ar-MR": ne,
        "uk-UA": ye,
        "ru-RU": mn,
        "ko-KR": De,
        "zh-CN": te,
        "vi-VN": Ye,
      },
      Ge = "en-US",
      Ue = (r) => vn[r ?? Ge],
      ie
    function ce(r) {
      return typeof r < "u" ? r : !0
    }
    function an(r) {
      let g = Array(r)
      for (let x = 0; x < r; x++) g[x] = pe()
      return g
    }
    function pe() {
      return Object.create(null)
    }
    function An(r, g) {
      return g.length - r.length
    }
    function xe(r) {
      return typeof r == "string"
    }
    function _e(r) {
      return typeof r == "object"
    }
    function yn(r) {
      return typeof r == "function"
    }
    function Re(r, g) {
      var x = Be
      if (
        r &&
        (g && (r = tn(r, g)),
        this.H && (r = tn(r, this.H)),
        this.J && 1 < r.length && (r = tn(r, this.J)),
        x || x === "")
      ) {
        if (((g = r.split(x)), this.filter)) {
          ;(r = this.filter), (x = g.length)
          let C = []
          for (let B = 0, I = 0; B < x; B++) {
            let et = g[B]
            et && !r[et] && (C[I++] = et)
          }
          r = C
        } else r = g
        return r
      }
      return r
    }
    var Be = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      sn = /[\u0300-\u036f]/g
    function We(r, g) {
      let x = Object.keys(r),
        C = x.length,
        B = [],
        I = "",
        et = 0
      for (let nt = 0, lt, bt; nt < C; nt++)
        (lt = x[nt]),
          (bt = r[lt])
            ? ((B[et++] = we(g ? "(?!\\b)" + lt + "(\\b|_)" : lt)), (B[et++] = bt))
            : (I += (I ? "|" : "") + lt)
      return I && ((B[et++] = we(g ? "(?!\\b)(" + I + ")(\\b|_)" : "(" + I + ")")), (B[et] = "")), B
    }
    function tn(r, g) {
      for (let x = 0, C = g.length; x < C && ((r = r.replace(g[x], g[x + 1])), r); x += 2);
      return r
    }
    function we(r) {
      return new RegExp(r, "g")
    }
    function en(r) {
      let g = "",
        x = ""
      for (let C = 0, B = r.length, I; C < B; C++) (I = r[C]) !== x && (g += x = I)
      return g
    }
    var Pe = { encode: nn, F: !1, G: "" }
    function nn(r) {
      return Re.call(this, ("" + r).toLowerCase(), !1)
    }
    var Ve = {},
      Ae = {}
    function Z(r) {
      vt(r, "add"), vt(r, "append"), vt(r, "search"), vt(r, "update"), vt(r, "remove")
    }
    function vt(r, g) {
      r[g + "Async"] = function () {
        let x = this,
          C = arguments
        var B = C[C.length - 1]
        let I
        return (
          yn(B) && ((I = B), delete C[C.length - 1]),
          (B = new Promise(function (et) {
            setTimeout(function () {
              x.async = !0
              let nt = x[g].apply(x, C)
              ;(x.async = !1), et(nt)
            })
          })),
          I ? (B.then(I), this) : B
        )
      }
    }
    function Ct(r, g, x, C) {
      let B = r.length,
        I = [],
        et,
        nt,
        lt = 0
      C && (C = [])
      for (let bt = B - 1; 0 <= bt; bt--) {
        let Bt = r[bt],
          ft = Bt.length,
          ht = pe(),
          ct = !et
        for (let yt = 0; yt < ft; yt++) {
          let Dt = Bt[yt],
            Rt = Dt.length
          if (Rt)
            for (let le = 0, Le, Qt; le < Rt; le++)
              if (((Qt = Dt[le]), et)) {
                if (et[Qt]) {
                  if (!bt) {
                    if (x) x--
                    else if (((I[lt++] = Qt), lt === g)) return I
                  }
                  ;(bt || C) && (ht[Qt] = 1), (ct = !0)
                }
                if (C && ((Le = (nt[Qt] || 0) + 1), (nt[Qt] = Le), Le < B)) {
                  let rn = C[Le - 2] || (C[Le - 2] = [])
                  rn[rn.length] = Qt
                }
              } else ht[Qt] = 1
        }
        if (C) et || (nt = ht)
        else if (!ct) return []
        et = ht
      }
      if (C)
        for (let bt = C.length - 1, Bt, ft; 0 <= bt; bt--) {
          ;(Bt = C[bt]), (ft = Bt.length)
          for (let ht = 0, ct; ht < ft; ht++)
            if (((ct = Bt[ht]), !et[ct])) {
              if (x) x--
              else if (((I[lt++] = ct), lt === g)) return I
              et[ct] = 1
            }
        }
      return I
    }
    function Nt(r, g) {
      let x = pe(),
        C = pe(),
        B = []
      for (let I = 0; I < r.length; I++) x[r[I]] = 1
      for (let I = 0, et; I < g.length; I++) {
        et = g[I]
        for (let nt = 0, lt; nt < et.length; nt++)
          (lt = et[nt]), x[lt] && !C[lt] && ((C[lt] = 1), (B[B.length] = lt))
      }
      return B
    }
    function qt(r) {
      ;(this.l = r !== !0 && r), (this.cache = pe()), (this.h = [])
    }
    function Tt(r, g, x) {
      _e(r) && (r = r.query)
      let C = this.cache.get(r)
      return C || ((C = this.search(r, g, x)), this.cache.set(r, C)), C
    }
    ;(qt.prototype.set = function (r, g) {
      if (!this.cache[r]) {
        var x = this.h.length
        for (x === this.l ? delete this.cache[this.h[x - 1]] : x++, --x; 0 < x; x--)
          this.h[x] = this.h[x - 1]
        this.h[0] = r
      }
      this.cache[r] = g
    }),
      (qt.prototype.get = function (r) {
        let g = this.cache[r]
        if (this.l && g && (r = this.h.indexOf(r))) {
          let x = this.h[r - 1]
          ;(this.h[r - 1] = this.h[r]), (this.h[r] = x)
        }
        return g
      })
    var jt = {
      memory: { charset: "latin:extra", D: 3, B: 4, m: !1 },
      performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } },
      match: { charset: "latin:extra", G: "reverse" },
      score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } },
      default: {},
    }
    function fe(r, g, x, C, B, I, et, nt) {
      setTimeout(function () {
        let lt = r(x ? x + "." + C : C, JSON.stringify(et))
        lt && lt.then
          ? lt.then(function () {
              g.export(r, g, x, B, I + 1, nt)
            })
          : g.export(r, g, x, B, I + 1, nt)
      })
    }
    function Gt(r, g) {
      if (!(this instanceof Gt)) return new Gt(r)
      var x
      if (r) {
        xe(r) ? (r = jt[r]) : (x = r.preset) && (r = Object.assign({}, x[x], r)), (x = r.charset)
        var C = r.lang
        xe(x) && (x.indexOf(":") === -1 && (x += ":default"), (x = Ae[x])), xe(C) && (C = Ve[C])
      } else r = {}
      let B,
        I,
        et = r.context || {}
      if (
        ((this.encode = r.encode || (x && x.encode) || nn),
        (this.register = g || pe()),
        (this.D = B = r.resolution || 9),
        (this.G = g = (x && x.G) || r.tokenize || "strict"),
        (this.depth = g === "strict" && et.depth),
        (this.l = ce(et.bidirectional)),
        (this.s = I = ce(r.optimize)),
        (this.m = ce(r.fastupdate)),
        (this.B = r.minlength || 1),
        (this.C = r.boost),
        (this.map = I ? an(B) : pe()),
        (this.A = B = et.resolution || 1),
        (this.h = I ? an(B) : pe()),
        (this.F = (x && x.F) || r.rtl),
        (this.H = (g = r.matcher || (C && C.H)) && We(g, !1)),
        (this.J = (g = r.stemmer || (C && C.J)) && We(g, !0)),
        (x = g = r.filter || (C && C.filter)))
      ) {
        ;(x = g), (C = pe())
        for (let nt = 0, lt = x.length; nt < lt; nt++) C[x[nt]] = 1
        x = C
      }
      ;(this.filter = x), (this.cache = (g = r.cache) && new qt(g))
    }
    ;(ie = Gt.prototype),
      (ie.append = function (r, g) {
        return this.add(r, g, !0)
      }),
      (ie.add = function (r, g, x, C) {
        if (g && (r || r === 0)) {
          if (!C && !x && this.register[r]) return this.update(r, g)
          if (((g = this.encode(g)), (C = g.length))) {
            let bt = pe(),
              Bt = pe(),
              ft = this.depth,
              ht = this.D
            for (let ct = 0; ct < C; ct++) {
              let yt = g[this.F ? C - 1 - ct : ct]
              var B = yt.length
              if (yt && B >= this.B && (ft || !Bt[yt])) {
                var I = Ht(ht, C, ct),
                  et = ""
                switch (this.G) {
                  case "full":
                    if (2 < B) {
                      for (I = 0; I < B; I++)
                        for (var nt = B; nt > I; nt--)
                          if (nt - I >= this.B) {
                            var lt = Ht(ht, C, ct, B, I)
                            ;(et = yt.substring(I, nt)), ue(this, Bt, et, lt, r, x)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < B) {
                      for (nt = B - 1; 0 < nt; nt--)
                        (et = yt[nt] + et),
                          et.length >= this.B && ue(this, Bt, et, Ht(ht, C, ct, B, nt), r, x)
                      et = ""
                    }
                  case "forward":
                    if (1 < B) {
                      for (nt = 0; nt < B; nt++)
                        (et += yt[nt]), et.length >= this.B && ue(this, Bt, et, I, r, x)
                      break
                    }
                  default:
                    if (
                      (this.C && (I = Math.min((I / this.C(g, yt, ct)) | 0, ht - 1)),
                      ue(this, Bt, yt, I, r, x),
                      ft && 1 < C && ct < C - 1)
                    ) {
                      for (
                        B = pe(),
                          et = this.A,
                          I = yt,
                          nt = Math.min(ft + 1, C - ct),
                          B[I] = 1,
                          lt = 1;
                        lt < nt;
                        lt++
                      )
                        if (
                          (yt = g[this.F ? C - 1 - ct - lt : ct + lt]) &&
                          yt.length >= this.B &&
                          !B[yt]
                        ) {
                          B[yt] = 1
                          let Dt = this.l && yt > I
                          ue(
                            this,
                            bt,
                            Dt ? I : yt,
                            Ht(et + (C / 2 > et ? 0 : 1), C, ct, nt - 1, lt - 1),
                            r,
                            x,
                            Dt ? yt : I,
                          )
                        }
                    }
                }
              }
            }
            this.m || (this.register[r] = 1)
          }
        }
        return this
      })
    function Ht(r, g, x, C, B) {
      return x && 1 < r
        ? g + (C || 0) <= r
          ? x + (B || 0)
          : (((r - 1) / (g + (C || 0))) * (x + (B || 0)) + 1) | 0
        : 0
    }
    function ue(r, g, x, C, B, I, et) {
      let nt = et ? r.h : r.map
      ;(!g[x] || (et && !g[x][et])) &&
        (r.s && (nt = nt[C]),
        et
          ? ((g = g[x] || (g[x] = pe())), (g[et] = 1), (nt = nt[et] || (nt[et] = pe())))
          : (g[x] = 1),
        (nt = nt[x] || (nt[x] = [])),
        r.s || (nt = nt[C] || (nt[C] = [])),
        (I && nt.includes(B)) ||
          ((nt[nt.length] = B),
          r.m && ((r = r.register[B] || (r.register[B] = [])), (r[r.length] = nt))))
    }
    ie.search = function (r, g, x) {
      x || (!g && _e(r) ? ((x = r), (r = x.query)) : _e(g) && (x = g))
      let C = [],
        B,
        I,
        et = 0
      if (x) {
        ;(r = x.query || r), (g = x.limit), (et = x.offset || 0)
        var nt = x.context
        I = x.suggest
      }
      if (r && ((r = this.encode("" + r)), (B = r.length), 1 < B)) {
        x = pe()
        var lt = []
        for (let Bt = 0, ft = 0, ht; Bt < B; Bt++)
          if ((ht = r[Bt]) && ht.length >= this.B && !x[ht])
            if (this.s || I || this.map[ht]) (lt[ft++] = ht), (x[ht] = 1)
            else return C
        ;(r = lt), (B = r.length)
      }
      if (!B) return C
      g || (g = 100), (nt = this.depth && 1 < B && nt !== !1), (x = 0)
      let bt
      nt ? ((bt = r[0]), (x = 1)) : 1 < B && r.sort(An)
      for (let Bt, ft; x < B; x++) {
        if (
          ((ft = r[x]),
          nt
            ? ((Bt = St(this, C, I, g, et, B === 2, ft, bt)),
              (I && Bt === !1 && C.length) || (bt = ft))
            : (Bt = St(this, C, I, g, et, B === 1, ft)),
          Bt)
        )
          return Bt
        if (I && x === B - 1) {
          if (((lt = C.length), !lt)) {
            if (nt) {
              ;(nt = 0), (x = -1)
              continue
            }
            return C
          }
          if (lt === 1) return Lt(C[0], g, et)
        }
      }
      return Ct(C, g, et, I)
    }
    function St(r, g, x, C, B, I, et, nt) {
      let lt = [],
        bt = nt ? r.h : r.map
      if ((r.s || (bt = he(bt, et, nt, r.l)), bt)) {
        let Bt = 0,
          ft = Math.min(bt.length, nt ? r.A : r.D)
        for (
          let ht = 0, ct = 0, yt, Dt;
          ht < ft &&
          !(
            (yt = bt[ht]) &&
            (r.s && (yt = he(yt, et, nt, r.l)),
            B &&
              yt &&
              I &&
              ((Dt = yt.length),
              Dt <= B ? ((B -= Dt), (yt = null)) : ((yt = yt.slice(B)), (B = 0))),
            yt && ((lt[Bt++] = yt), I && ((ct += yt.length), ct >= C)))
          );
          ht++
        );
        if (Bt) {
          if (I) return Lt(lt, C, 0)
          g[g.length] = lt
          return
        }
      }
      return !x && lt
    }
    function Lt(r, g, x) {
      return (
        (r = r.length === 1 ? r[0] : [].concat.apply([], r)),
        x || r.length > g ? r.slice(x, x + g) : r
      )
    }
    function he(r, g, x, C) {
      return x ? ((C = C && g > x), (r = (r = r[C ? g : x]) && r[C ? x : g])) : (r = r[g]), r
    }
    ;(ie.contain = function (r) {
      return !!this.register[r]
    }),
      (ie.update = function (r, g) {
        return this.remove(r).add(r, g)
      }),
      (ie.remove = function (r, g) {
        let x = this.register[r]
        if (x) {
          if (this.m) for (let C = 0, B; C < x.length; C++) (B = x[C]), B.splice(B.indexOf(r), 1)
          else zt(this.map, r, this.D, this.s), this.depth && zt(this.h, r, this.A, this.s)
          if ((g || delete this.register[r], this.cache)) {
            g = this.cache
            for (let C = 0, B, I; C < g.h.length; C++)
              (I = g.h[C]),
                (B = g.cache[I]),
                B.includes(r) && (g.h.splice(C--, 1), delete g.cache[I])
          }
        }
        return this
      })
    function zt(r, g, x, C, B) {
      let I = 0
      if (r.constructor === Array)
        if (B) (g = r.indexOf(g)), g !== -1 ? 1 < r.length && (r.splice(g, 1), I++) : I++
        else {
          B = Math.min(r.length, x)
          for (let et = 0, nt; et < B; et++)
            (nt = r[et]) && ((I = zt(nt, g, x, C, B)), C || I || delete r[et])
        }
      else for (let et in r) (I = zt(r[et], g, x, C, B)) || delete r[et]
      return I
    }
    ;(ie.searchCache = Tt),
      (ie.export = function (r, g, x, C, B, I) {
        let et = !0
        typeof I > "u" &&
          (et = new Promise((bt) => {
            I = bt
          }))
        let nt, lt
        switch (B || (B = 0)) {
          case 0:
            if (((nt = "reg"), this.m)) {
              lt = pe()
              for (let bt in this.register) lt[bt] = 1
            } else lt = this.register
            break
          case 1:
            ;(nt = "cfg"), (lt = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(nt = "map"), (lt = this.map)
            break
          case 3:
            ;(nt = "ctx"), (lt = this.h)
            break
          default:
            typeof x > "u" && I && I()
            return
        }
        return fe(r, g || this, x, nt, C, B, lt, I), et
      }),
      (ie.import = function (r, g) {
        if (g)
          switch ((xe(g) && (g = JSON.parse(g)), r)) {
            case "cfg":
              this.s = !!g.opt
              break
            case "reg":
              ;(this.m = !1), (this.register = g)
              break
            case "map":
              this.map = g
              break
            case "ctx":
              this.h = g
          }
      }),
      Z(Gt.prototype)
    function ke(r) {
      r = r.data
      var g = self._index
      let x = r.args
      var C = r.task
      switch (C) {
        case "init":
          ;(C = r.options || {}),
            (r = r.factory),
            (g = C.encode),
            (C.cache = !1),
            g && g.indexOf("function") === 0 && (C.encode = Function("return " + g)()),
            r
              ? (Function("return " + r)()(self),
                (self._index = new self.FlexSearch.Index(C)),
                delete self.FlexSearch)
              : (self._index = new Gt(C))
          break
        default:
          ;(r = r.id),
            (g = g[C].apply(g, x)),
            postMessage(C === "search" ? { id: r, msg: g } : { id: r })
      }
    }
    var Ke = 0
    function Te(r) {
      if (!(this instanceof Te)) return new Te(r)
      var g
      r ? yn((g = r.encode)) && (r.encode = g.toString()) : (r = {}),
        (g = (self || window)._factory) && (g = g.toString())
      let x = typeof window > "u" && self.exports,
        C = this
      ;(this.o = wn(g, x, r.worker)),
        (this.h = pe()),
        this.o &&
          (x
            ? this.o.on("message", function (B) {
                C.h[B.id](B.msg), delete C.h[B.id]
              })
            : (this.o.onmessage = function (B) {
                ;(B = B.data), C.h[B.id](B.msg), delete C.h[B.id]
              }),
          this.o.postMessage({ task: "init", factory: g, options: r }))
    }
    Je("add"), Je("append"), Je("search"), Je("update"), Je("remove")
    function Je(r) {
      Te.prototype[r] = Te.prototype[r + "Async"] = function () {
        let g = this,
          x = [].slice.call(arguments)
        var C = x[x.length - 1]
        let B
        return (
          yn(C) && ((B = C), x.splice(x.length - 1, 1)),
          (C = new Promise(function (I) {
            setTimeout(function () {
              ;(g.h[++Ke] = I), g.o.postMessage({ task: r, id: Ke, args: x })
            })
          })),
          B ? (C.then(B), this) : C
        )
      }
    }
    function wn(r, g, x) {
      let C
      try {
        C = g
          ? new (Ne().Worker)(__dirname + "/node/node.js")
          : r
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + ke.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(xe(x) ? x : "worker/worker.js", { type: "module" })
      } catch {}
      return C
    }
    function xn(r) {
      if (!(this instanceof xn)) return new xn(r)
      var g = r.document || r.doc || r,
        x
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = pe()),
        (this.key = ((x = g.key || g.id) && bn(x, this.A)) || "id"),
        (this.m = ce(r.fastupdate)),
        (this.C = (x = g.store) && x !== !0 && []),
        (this.store = x && pe()),
        (this.I = (x = g.tag) && bn(x, this.A)),
        (this.l = x && pe()),
        (this.cache = (x = r.cache) && new qt(x)),
        (r.cache = !1),
        (this.o = r.worker),
        (this.async = !1),
        (x = pe())
      let C = g.index || g.field || g
      xe(C) && (C = [C])
      for (let B = 0, I, et; B < C.length; B++)
        (I = C[B]),
          xe(I) || ((et = I), (I = I.field)),
          (et = _e(et) ? Object.assign({}, r, et) : r),
          this.o && ((x[I] = new Te(et)), x[I].o || (this.o = !1)),
          this.o || (x[I] = new Gt(et, this.register)),
          (this.K[B] = bn(I, this.A)),
          (this.h[B] = I)
      if (this.C)
        for (r = g.store, xe(r) && (r = [r]), g = 0; g < r.length; g++) this.C[g] = bn(r[g], this.A)
      this.index = x
    }
    function bn(r, g) {
      let x = r.split(":"),
        C = 0
      for (let B = 0; B < x.length; B++)
        (r = x[B]),
          0 <= r.indexOf("[]") && (r = r.substring(0, r.length - 2)) && (g[C] = !0),
          r && (x[C++] = r)
      return C < x.length && (x.length = C), 1 < C ? x : x[0]
    }
    function kn(r, g) {
      if (xe(g)) r = r[g]
      else for (let x = 0; r && x < g.length; x++) r = r[g[x]]
      return r
    }
    function cn(r, g, x, C, B) {
      if (((r = r[B]), C === x.length - 1)) g[B] = r
      else if (r)
        if (r.constructor === Array)
          for (g = g[B] = Array(r.length), B = 0; B < r.length; B++) cn(r, g, x, C, B)
        else (g = g[B] || (g[B] = pe())), (B = x[++C]), cn(r, g, x, C, B)
    }
    function Cn(r, g, x, C, B, I, et, nt) {
      if ((r = r[et]))
        if (C === g.length - 1) {
          if (r.constructor === Array) {
            if (x[C]) {
              for (g = 0; g < r.length; g++) B.add(I, r[g], !0, !0)
              return
            }
            r = r.join(" ")
          }
          B.add(I, r, nt, !0)
        } else if (r.constructor === Array)
          for (et = 0; et < r.length; et++) Cn(r, g, x, C, B, I, et, nt)
        else (et = g[++C]), Cn(r, g, x, C, B, I, et, nt)
    }
    ;(ie = xn.prototype),
      (ie.add = function (r, g, x) {
        if ((_e(r) && ((g = r), (r = kn(g, this.key))), g && (r || r === 0))) {
          if (!x && this.register[r]) return this.update(r, g)
          for (let C = 0, B, I; C < this.h.length; C++)
            (I = this.h[C]),
              (B = this.K[C]),
              xe(B) && (B = [B]),
              Cn(g, B, this.A, 0, this.index[I], r, B[0], x)
          if (this.I) {
            let C = kn(g, this.I),
              B = pe()
            xe(C) && (C = [C])
            for (let I = 0, et, nt; I < C.length; I++)
              if (
                ((et = C[I]),
                !B[et] &&
                  ((B[et] = 1), (nt = this.l[et] || (this.l[et] = [])), !x || !nt.includes(r)) &&
                  ((nt[nt.length] = r), this.m))
              ) {
                let lt = this.register[r] || (this.register[r] = [])
                lt[lt.length] = nt
              }
          }
          if (this.store && (!x || !this.store[r])) {
            let C
            if (this.C) {
              C = pe()
              for (let B = 0, I; B < this.C.length; B++)
                (I = this.C[B]), xe(I) ? (C[I] = g[I]) : cn(g, C, I, 0, I[0])
            }
            this.store[r] = C || g
          }
        }
        return this
      }),
      (ie.append = function (r, g) {
        return this.add(r, g, !0)
      }),
      (ie.update = function (r, g) {
        return this.remove(r).add(r, g)
      }),
      (ie.remove = function (r) {
        if ((_e(r) && (r = kn(r, this.key)), this.register[r])) {
          for (
            var g = 0;
            g < this.h.length && (this.index[this.h[g]].remove(r, !this.o), !this.m);
            g++
          );
          if (this.I && !this.m)
            for (let x in this.l) {
              g = this.l[x]
              let C = g.indexOf(r)
              C !== -1 && (1 < g.length ? g.splice(C, 1) : delete this.l[x])
            }
          this.store && delete this.store[r], delete this.register[r]
        }
        return this
      }),
      (ie.search = function (r, g, x, C) {
        x || (!g && _e(r) ? ((x = r), (r = "")) : _e(g) && ((x = g), (g = 0)))
        let B = [],
          I = [],
          et,
          nt,
          lt,
          bt,
          Bt,
          ft,
          ht = 0
        if (x)
          if (x.constructor === Array) (lt = x), (x = null)
          else {
            if (
              ((r = x.query || r),
              (lt = (et = x.pluck) || x.index || x.field),
              (bt = x.tag),
              (nt = this.store && x.enrich),
              (Bt = x.bool === "and"),
              (g = x.limit || g || 100),
              (ft = x.offset || 0),
              bt && (xe(bt) && (bt = [bt]), !r))
            ) {
              for (let yt = 0, Dt; yt < bt.length; yt++)
                (Dt = $n.call(this, bt[yt], g, ft, nt)) && ((B[B.length] = Dt), ht++)
              return ht ? B : []
            }
            xe(lt) && (lt = [lt])
          }
        lt || (lt = this.h), (Bt = Bt && (1 < lt.length || (bt && 1 < bt.length)))
        let ct = !C && (this.o || this.async) && []
        for (let yt = 0, Dt, Rt, le; yt < lt.length; yt++) {
          let Le
          if (
            ((Rt = lt[yt]),
            xe(Rt) ||
              ((Le = Rt),
              (Rt = Le.field),
              (r = Le.query || r),
              (g = Le.limit || g),
              (nt = Le.enrich || nt)),
            ct)
          )
            ct[yt] = this.index[Rt].searchAsync(r, g, Le || x)
          else {
            if (
              (C ? (Dt = C[yt]) : (Dt = this.index[Rt].search(r, g, Le || x)),
              (le = Dt && Dt.length),
              bt && le)
            ) {
              let Qt = [],
                rn = 0
              Bt && (Qt[0] = [Dt])
              for (let cr = 0, Ln, jn; cr < bt.length; cr++)
                (Ln = bt[cr]),
                  (le = (jn = this.l[Ln]) && jn.length) && (rn++, (Qt[Qt.length] = Bt ? [jn] : jn))
              rn && ((Dt = Bt ? Ct(Qt, g || 100, ft || 0) : Nt(Dt, Qt)), (le = Dt.length))
            }
            if (le) (I[ht] = Rt), (B[ht++] = Dt)
            else if (Bt) return []
          }
        }
        if (ct) {
          let yt = this
          return new Promise(function (Dt) {
            Promise.all(ct).then(function (Rt) {
              Dt(yt.search(r, g, x, Rt))
            })
          })
        }
        if (!ht) return []
        if (et && (!nt || !this.store)) return B[0]
        for (let yt = 0, Dt; yt < I.length; yt++) {
          if (((Dt = B[yt]), Dt.length && nt && (Dt = On.call(this, Dt)), et)) return Dt
          B[yt] = { field: I[yt], result: Dt }
        }
        return B
      })
    function $n(r, g, x, C) {
      let B = this.l[r],
        I = B && B.length - x
      if (I && 0 < I)
        return (
          (I > g || x) && (B = B.slice(x, x + g)),
          C && (B = On.call(this, B)),
          { tag: r, result: B }
        )
    }
    function On(r) {
      let g = Array(r.length)
      for (let x = 0, C; x < r.length; x++) (C = r[x]), (g[x] = { id: C, doc: this.store[C] })
      return g
    }
    ;(ie.contain = function (r) {
      return !!this.register[r]
    }),
      (ie.get = function (r) {
        return this.store[r]
      }),
      (ie.set = function (r, g) {
        return (this.store[r] = g), this
      }),
      (ie.searchCache = Tt),
      (ie.export = function (r, g, x, C, B, I) {
        let et
        if (
          (typeof I > "u" &&
            (et = new Promise((nt) => {
              I = nt
            })),
          B || (B = 0),
          C || (C = 0),
          C < this.h.length)
        ) {
          let nt = this.h[C],
            lt = this.index[nt]
          ;(g = this),
            setTimeout(function () {
              lt.export(r, g, B ? nt : "", C, B++, I) || (C++, (B = 1), g.export(r, g, nt, C, B, I))
            })
        } else {
          let nt, lt
          switch (B) {
            case 1:
              ;(nt = "tag"), (lt = this.l), (x = null)
              break
            case 2:
              ;(nt = "store"), (lt = this.store), (x = null)
              break
            default:
              I()
              return
          }
          fe(r, this, x, nt, C, B, lt, I)
        }
        return et
      }),
      (ie.import = function (r, g) {
        if (g)
          switch ((xe(g) && (g = JSON.parse(g)), r)) {
            case "tag":
              this.l = g
              break
            case "reg":
              ;(this.m = !1), (this.register = g)
              for (let C = 0, B; C < this.h.length; C++)
                (B = this.index[this.h[C]]), (B.register = g), (B.m = !1)
              break
            case "store":
              this.store = g
              break
            default:
              r = r.split(".")
              let x = r[0]
              ;(r = r[1]), x && r && this.index[x].import(r, g)
          }
      }),
      Z(xn.prototype)
    var In = { encode: Rn, F: !1, G: "" },
      Dn = [
        we("[\xE0\xE1\xE2\xE3\xE4\xE5]"),
        "a",
        we("[\xE8\xE9\xEA\xEB]"),
        "e",
        we("[\xEC\xED\xEE\xEF]"),
        "i",
        we("[\xF2\xF3\xF4\xF5\xF6\u0151]"),
        "o",
        we("[\xF9\xFA\xFB\xFC\u0171]"),
        "u",
        we("[\xFD\u0177\xFF]"),
        "y",
        we("\xF1"),
        "n",
        we("[\xE7c]"),
        "k",
        we("\xDF"),
        "s",
        we(" & "),
        " and ",
      ]
    function Rn(r) {
      var g = (r = "" + r)
      return (
        g.normalize && (g = g.normalize("NFD").replace(sn, "")),
        Re.call(this, g.toLowerCase(), !r.normalize && Dn)
      )
    }
    var h = { encode: j, F: !1, G: "strict" },
      M = /[^a-z0-9]+/,
      T = {
        b: "p",
        v: "f",
        w: "f",
        z: "s",
        x: "s",
        ß: "s",
        d: "t",
        n: "m",
        c: "k",
        g: "k",
        j: "k",
        q: "k",
        i: "e",
        y: "e",
        u: "o",
      }
    function j(r) {
      r = Rn.call(this, r).join(" ")
      let g = []
      if (r) {
        let x = r.split(M),
          C = x.length
        for (let B = 0, I, et = 0; B < C; B++)
          if ((r = x[B]) && (!this.filter || !this.filter[r])) {
            I = r[0]
            let nt = T[I] || I,
              lt = nt
            for (let bt = 1; bt < r.length; bt++) {
              I = r[bt]
              let Bt = T[I] || I
              Bt && Bt !== lt && ((nt += Bt), (lt = Bt))
            }
            g[et++] = nt
          }
      }
      return g
    }
    var V = { encode: dt, F: !1, G: "" },
      J = [
        we("ae"),
        "a",
        we("oe"),
        "o",
        we("sh"),
        "s",
        we("th"),
        "t",
        we("ph"),
        "f",
        we("pf"),
        "f",
        we("(?![aeo])h(?![aeo])"),
        "",
        we("(?!^[aeo])h(?!^[aeo])"),
        "",
      ]
    function dt(r, g) {
      return (
        r &&
          ((r = j.call(this, r).join(" ")),
          2 < r.length && (r = tn(r, J)),
          g || (1 < r.length && (r = en(r)), r && (r = r.split(" ")))),
        r || []
      )
    }
    var pt = { encode: Pt, F: !1, G: "" },
      Et = we("(?!\\b)[aeo]")
    function Pt(r) {
      return (
        r &&
          ((r = dt.call(this, r, !0)),
          1 < r.length && (r = r.replace(Et, "")),
          1 < r.length && (r = en(r)),
          r && (r = r.split(" "))),
        r || []
      )
    }
    ;(Ae["latin:default"] = Pe),
      (Ae["latin:simple"] = In),
      (Ae["latin:balance"] = h),
      (Ae["latin:advanced"] = V),
      (Ae["latin:extra"] = pt)
    var Kt = {
      Index: Gt,
      Document: xn,
      Worker: Te,
      registerCharset: function (r, g) {
        Ae[r] = g
      },
      registerLanguage: function (r, g) {
        Ve[r] = g
      },
    }
    function me(r, g) {
      return g == null && ((g = r), (r = 0)), r + Math.floor(Math.random() * (g - r + 1))
    }
    function oe(r, g) {
      let x = [...r]
      var C = x.length
      g = Math.max(Math.min(g, C), 0)
      for (var B = C - 1, I = 0; I < g; I++) {
        var et = me(I, B),
          nt = r[I]
        ;(x[I] = x[et]), (x[et] = nt)
      }
      return x.slice(0, g)
    }
    var Zt = "https://curius.app",
      Ft = `${Zt}/aaron-pham`,
      ae = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/,
      Fe = { method: "POST", headers: { "Content-Type": "application/json" } },
      Qe = {
        id: 0,
        link: "",
        title: "",
        favorite: !1,
        snippet: "",
        toRead: !1,
        createdBy: 0,
        metadata: { full_text: "", author: "", page_type: "" },
        createdDate: "",
        modifiedDate: "",
        lastCrawled: null,
        trails: [],
        comments: [],
        mentions: [],
        topics: [],
        highlights: [],
        userIds: [],
      },
      ze = {
        favourite:
          '<svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1rem" width="1rem" viewBox="0 0 40 40" currentItem="false" class="favorite-icon" style="vertical-align: unset"><g><path stroke-width="5" fill="rgb(236, 180, 19)" d="m5.2 18.8l6 5.5-1.7 7.7c-0.2 1 0.2 2 1 2.5 0.3 0.3 0.8 0.5 1.3 0.5 0.4 0 0.7 0 1-0.2 0 0 0.2 0 0.2-0.1l6.8-3.9 6.9 3.9s0.1 0 0.1 0.1c0.9 0.4 1.9 0.4 2.5-0.1 0.9-0.5 1.2-1.5 1-2.5l-1.6-7.7c0.6-0.5 1.6-1.5 2.6-2.5l3.2-2.8 0.2-0.2c0.6-0.7 0.8-1.7 0.5-2.5s-1-1.5-2-1.7h-0.2l-7.8-0.8-3.2-7.2s0-0.1-0.2-0.1c-0.1-1.2-1-1.7-1.8-1.7s-1.7 0.5-2.2 1.3c0 0 0 0.2-0.1 0.2l-3.2 7.2-7.8 0.8h-0.2c-0.8 0.2-1.7 0.8-2 1.7-0.2 1 0 2 0.7 2.6z"></path></g></svg>',
        default:
          '<svg width="11" height="11" fill="none" viewBox="0 0 46 46" preserveAspectRatio="none"><path stroke="#000" stroke-width="4" d="M2.828 22.627L22.627 2.828l19.799 19.8-19.8 19.798z"></path><path fill="#000" d="M17 22.657L22.657 17l5.657 5.657-5.657 5.657z"></path></svg>',
        youtube:
          '<svg width="11" height="11" fill="none" viewBox="0 0 46 46" preserveAspectRatio="none"><path d="M32.076 24.233L4.998 39.816C3.664 40.584 2 39.621 2 38.084V6.917c0-1.538 1.664-2.5 2.998-1.734l27.078 15.584c1.337.769 1.337 2.697 0 3.466z" stroke="#000" stroke-width="4"></path></svg>',
        github:
          '<svg viewBox="64 64 896 896" focusable="false" data-icon="github" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>',
        twitter:
          '<svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>',
        arxiv:
          '<svg width="10" height="10" fill="none" viewBox="0 0 45 45" data-icon="arxiv" preserveAspectRatio="none"><path d="M25.468 7.836C24.993 3.384 24.4 0 20.244 0c-5.64 0-9.499 4.037-9.499 5.7 0 .415.357.415.653.415.654 0 3.266-.772 4.334-2.79l.119-.06c3.265 0 4.037 1.84 4.63 7.955l.832 8.727c-2.137 1.188-10.152 5.996-14.426 8.965C.119 33.72 0 35.502 0 37.223c0 2.018 1.069 3.325 2.85 3.325 1.78 0 4.511-1.96 4.511-2.85 0-.297-.178-.356-.415-.416-.475-.059-1.9-.296-1.9-2.612 0-1.603 0-2.315 6.293-6.53 3.621-2.375 7.065-4.275 10.152-6.234 0 .12.89 9.024 1.009 10.033.475 4.69.89 8.608 5.284 8.608 5.64 0 9.498-4.036 9.498-5.699 0-.415-.296-.415-.653-.415-.593 0-3.206.772-4.334 2.79-.178.06-.474.06-.593.06-3.384 0-3.74-3.74-4.215-8.728-.178-1.9-.356-3.443-.95-9.617C45 7.896 45 5.818 45 3.325 45 1.306 43.931 0 42.21 0c-1.84 0-4.572 2.018-4.572 2.85 0 .356.357.415.416.415.475.06 1.9.297 1.9 2.612 0 1.484-.178 2.375-5.224 5.818-1.781 1.188-4.275 2.731-8.371 5.224l-.89-9.083z" fill="#000"></path></svg>',
      },
      Me = (r) => ze[r] ?? null
    function fn(r) {
      let g = r.match(ae)
      return g ? g[1] : ""
    }
    function Mn(r) {
      let g = new Date(),
        x = r instanceof Date ? r : new Date(r),
        C = Math.floor((g.getTime() - x.getTime()) / 1e3),
        B = Math.floor(C / (3600 * 24)),
        I = Math.floor((C % (3600 * 24)) / 3600),
        et = Math.floor((C % 3600) / 60)
      return B > 1
        ? `${B} days ago`
        : B === 1
          ? "1 day ago"
          : I > 1
            ? `${I} hours ago`
            : I === 1
              ? "1 hour ago"
              : et > 1
                ? `${et} minutes ago`
                : et === 1
                  ? "1 minute ago"
                  : "just now"
    }
    var Bn = { Link: Qe, elementType: "div", addFaIcon: !1 },
      hn,
      L = (r) => {
        let { Link: g, elementType: x, addFaIcon: C } = { ...Bn, ...r }
        if (x === void 0) throw new Error("Element type is undefined")
        hn = hn || new DOMParser()
        let B = document.createElement(x)
        B.classList.add("curius-item-title")
        let I = document.createElement("div")
        I.classList.add("curius-item-link")
        let et = document.createElement("a")
        Object.assign(et, {
          href: g.link,
          target: "_blank",
          rel: "noopener noreferrer",
          innerHTML: g.title,
        }),
          I.appendChild(et)
        let nt = document.createElement("div")
        if ((nt.classList.add("curius-item-address"), (nt.textContent = fn(g.link)), C)) {
          let bt = document.createElement("div")
          switch ((bt.classList.add("curius-item-fa"), !0)) {
            case /twitter/.test(g.link):
              bt.innerHTML = Me("twitter")
              break
            case /youtube/.test(g.link):
              bt.innerHTML = Me("youtube")
              break
            case /github/.test(g.link):
              bt.innerHTML = Me("github")
              break
            case /arxiv/.test(g.link):
              bt.innerHTML = Me("arxiv")
              break
            default:
              bt.innerHTML = Me("default")
              break
          }
          B.appendChild(bt)
        }
        B.append(I, nt)
        let lt = document.createElement("div")
        if ((lt.classList.add("curius-item-icons"), g.favorite)) {
          let bt = document.createElement("div")
          bt.classList.add("curius-item-favorite"),
            (bt.innerHTML = Me("favourite")),
            lt.appendChild(bt)
        }
        return B.appendChild(lt), B
      }
    async function U() {
      return fetch("https://raw.aarnphm.xyz/api/curius?query=following", Fe)
        .then((r) => r.json())
        .then((r) => {
          if (r === void 0 || r.following === void 0) throw new Error("No following data")
          return r.following
        })
    }
    async function a() {
      let r = await fetch("https://raw.aarnphm.xyz/api/curius?query=user", Fe)
          .then((x) => x.json())
          .then((x) => {
            if (x === void 0 || x.user === void 0) throw new Error("Failed to fetch user")
            return x.user
          }),
        g = await U()
      return {
        links: await fetch("https://raw.aarnphm.xyz/api/curius?query=links", Fe)
          .then((x) => x.json())
          .then((x) => {
            if (x === void 0 || x.links === void 0) throw new Error("Failed to fetch links")
            return x.links
          }),
        user: r,
        following: g,
      }
    }
    function c(r) {
      let g = new Map()
      return (
        (r.links ?? [])
          .filter((x) => x.trails.length > 0)
          .map((x) => {
            x.trails.map((C) => {
              g.has(C.trailName) || g.set(C.trailName, { trail: C, links: new Map() }),
                g.get(C.trailName).links.set(x.id, x)
            })
          }),
        g
      )
    }
    var y = (r) => {
      let g = document.getElementById("trail-list"),
        x = document.getElementsByClassName("curius-trail")[0]
      if (!g || !x) return
      let C = parseInt(x.dataset.limits) ?? 5,
        B = x.dataset.locale
      ve(g)
      for (let [I, { trail: et, links: nt }] of Array.from(r.entries()).slice(0, 4)) {
        let lt = Array.from(nt.values()),
          bt = Math.max(0, lt.length - C)
        g.appendChild(b(I, lt.slice(0, C), et, bt, B))
      }
    }
    function b(r, g, x, C, B) {
      let I = document.createElement("li")
      I.classList.add("trails-li")
      let et = document.createElement("div")
      et.classList.add("curius-trail-header"),
        (et.innerHTML = `<span class="trail-title">sentier: ${r}</span><span class="trail-description">${x.description}</span>`)
      let nt = `${Zt}/trail/${x.slug}`,
        lt = document.createElement("ul")
      lt.classList.add("trail-ul"),
        lt.append(
          ...g.map((Bt) => {
            let ft = L({ Link: Bt, elementType: "li" })
            return (
              Ee(
                ft,
                [
                  "mouseenter",
                  () => {
                    let ht = ft.querySelector(".curius-item-favorite")
                    ht && ht.classList.add("focus"), ft.classList.add("focus")
                  },
                ],
                [
                  "mouseleave",
                  () => {
                    let ht = ft.querySelector(".curius-item-favorite")
                    ht && ht.classList.remove("focus"), ft.classList.remove("focus")
                  },
                ],
                [
                  "click",
                  (ht) => {
                    ht.target instanceof HTMLAnchorElement || window.open(nt, "_blank")
                  },
                ],
              ),
              ft
            )
          }),
        )
      let bt = document.createElement("div")
      return (
        bt.classList.add("see-more"),
        (bt.innerHTML = `<span><a href=${nt} target="_blank">${C > 0 ? Ue(B).components.recentNotes.seeRemainingMore({ remaining: C }) : "Void de plus \u2192"}</a></span>`),
        I.append(et, lt, bt),
        I
      )
    }
    var _ = new Kt.Document({
        charset: "latin:advanced",
        document: {
          id: "id",
          index: [...Object.keys(Qe).map((r) => ({ field: r, tokenize: "forward" }))],
        },
      }),
      F = 20,
      z = 30,
      O = (r) => {
        let g = r.split(/\s+/).filter((C) => C.trim() !== ""),
          x = g.length
        if (x > 1) for (let C = 1; C < x; C++) g.push(g.slice(0, C + 1).join(" "))
        return g.sort((C, B) => B.length - C.length)
      }
    function K(r, g, x) {
      let C = O(r),
        B = g.split(/\s+/).filter((lt) => lt !== ""),
        I = 0,
        et = B.length - 1
      if (x) {
        let lt = (ht) => C.some((ct) => ht.toLowerCase().startsWith(ct.toLowerCase())),
          bt = B.map(lt),
          Bt = 0,
          ft = 0
        for (let ht = 0; ht < Math.max(B.length - z, 0); ht++) {
          let ct = bt.slice(ht, ht + z).reduce((yt, Dt) => yt + (Dt ? 1 : 0), 0)
          ct >= Bt && ((Bt = ct), (ft = ht))
        }
        ;(I = Math.max(ft - z, 0)), (et = Math.min(I + 2 * z, B.length - 1)), (B = B.slice(I, et))
      }
      let nt = B.map((lt) => {
        for (let bt of C)
          if (lt.toLowerCase().includes(bt.toLowerCase())) {
            let Bt = new RegExp(bt.toLowerCase(), "gi")
            return lt.replace(Bt, '<span class="highlight">$&</span>')
          }
        return lt
      }).join(" ")
      return `${I === 0 ? "" : "..."}${nt}${et === B.length - 1 ? "" : "..."}`
    }
    async function R(r) {
      let g = oe(r, 20),
        x = document.getElementById("curius-bar"),
        C = document.getElementById("curius-search-container")
      async function B(ct) {
        let yt = ct.target.value
        C?.classList.toggle("active", yt !== "")
        let Dt =
            (await _?.searchAsync({
              query: yt,
              limit: F,
              index: ["title", "snippet", "topics"],
            })) ?? [],
          Rt = (Le) => {
            let Qt = Dt.filter((rn) => rn.field === Le)
            return Qt.length === 0 ? [] : [...Qt[0].result]
          },
          le = [...new Set([...Rt("title"), ...Rt("snippet"), ...Rt("topics")])].map((Le) =>
            I(yt, Le),
          )
        nt(le)
      }
      let I = (ct, yt) => {
          let Dt = r[yt]
          return { ...Dt, title: K(ct, Dt.title), snippet: K(ct, Dt.snippet, !0) }
        },
        et = document.getElementsByClassName("curius-notes")[0]
      function nt(ct) {
        C &&
          (ve(C),
          ct.length === 0
            ? (C.innerHTML =
                '<a class="curius-search-link"><span class="curius-search-title">No results found.</span><p class="curius-search-snippet">Try another search term?</p></a>')
            : C?.append(...ct.map(ht)))
      }
      function lt(ct) {
        if (ct.key === "k" && (ct.ctrlKey || ct.metaKey)) {
          ct.preventDefault(),
            et?.classList.contains("active") && et.classList.remove("active"),
            C?.classList.contains("active") ? ft() : Bt(g)
          return
        }
        C?.classList.contains("active") &&
          (ct.key === "Enter"
            ? C?.contains(document.activeElement)
              ? document.activeElement.click()
              : document.getElementsByClassName("curius-search-link")[0]?.click()
            : ct.key === "ArrowUp" || (ct.shiftKey && ct.key === "Tab")
              ? (ct.preventDefault(),
                C?.contains(document.activeElement) &&
                  document.activeElement?.previousElementSibling?.focus())
              : (ct.key === "ArrowDown" || ct.key === "Tab") &&
                (ct.preventDefault(),
                C?.contains(document.activeElement)
                  ? document.activeElement?.nextElementSibling?.focus()
                  : document.getElementsByClassName("curius-search-link")[0]?.focus()))
      }
      function bt() {
        x?.classList.contains("active") ||
          (et?.classList.contains("active") && et.classList.remove("active"),
          C?.classList.contains("active") ? ft() : Bt(g))
      }
      function Bt(ct) {
        C &&
          (C?.classList.add("active"),
          x?.focus(),
          x?.scrollIntoView({ behavior: "smooth" }),
          nt(ct))
      }
      function ft() {
        C && C.classList.remove("active"), x && (x.value = "")
      }
      function ht(ct) {
        let yt = document.createElement("a")
        yt.classList.add("curius-search-link"),
          (yt.target = "_blank"),
          (yt.href = ct.link),
          (yt.innerHTML = `<span class="curius-search-title">${ct.title}</span><p class="curius-search-snippet">${ct.snippet}</div>`)
        let Dt = (Rt) => {
          Rt.altKey || Rt.ctrlKey || Rt.metaKey || Rt.shiftKey || ft()
        }
        return (
          yt.addEventListener("click", Dt),
          window.addCleanup(() => yt.removeEventListener("click", Dt)),
          yt
        )
      }
      document.addEventListener("keydown", lt),
        window.addCleanup(() => document.removeEventListener("keydown", lt)),
        x?.addEventListener("input", B),
        window.addCleanup(() => x?.removeEventListener("input", B)),
        x?.addEventListener("click", bt),
        window.addCleanup(() => x?.removeEventListener("click", bt)),
        qe(C, ft),
        await G(r)
    }
    async function G(r) {
      let g = 0,
        x = []
      for (let C of r) x.push(_.addAsync(g++, { ...C }))
      return await Promise.all(x)
    }
    var X = 2 * 60 * 1e3,
      W = null
    function ot(r) {
      let g = document.createElement("li")
      ;(g.id = `curius-item-${r.id}`), g.classList.add("curius-item")
      let x = (B) => {
        let I = document.createElement("div")
        I.classList.add("curius-item-metadata")
        let et = document.createElement("ul")
        et.classList.add("curius-item-tags"),
          (et.innerHTML =
            B.topics.length > 0
              ? `${B.topics.map((Bt) => (Bt.public ? `<li><a href="https://curius.app/aaron-pham/${Bt.slug}" target="_blank">${Bt.topic}</a></li>` : "")).join("")}`
              : "")
        let nt = document.createElement("div")
        nt.id = `curius-misc-${B.id}`
        let lt = document.createElement("span")
        lt.id = `curius-span-${B.id}`
        let bt = new Date(B.modifiedDate)
        if (
          ((lt.innerHTML = `<time datetime=${B.modifiedDate} title="${bt.toUTCString()}">${Mn(B.createdDate)}</time>`),
          nt.appendChild(lt),
          B.highlights.length > 0)
        ) {
          let Bt = document.createElement("div")
          ;(Bt.id = `curius-highlights-${B.id}`),
            (Bt.innerHTML = `${B.highlights.length} ${B.highlights.length > 0 ? "highlights" : "highlight"}`),
            nt.appendChild(Bt)
          let ft = document.getElementById("highlight-modal"),
            ht = document.getElementById("highlight-modal-list")
          Ee(
            Bt,
            [
              "mouseenter",
              () => {
                let ct = B.highlights
                !ft ||
                  !ht ||
                  ((ht.innerHTML = ""),
                  g.classList.remove("focus"),
                  ct.forEach((yt) => {
                    let Dt = document.createElement("li")
                    ;(Dt.textContent = yt.highlight), ht.appendChild(Dt)
                  }),
                  (ft.style.visibility = "visible"),
                  ft.classList.add("active"))
              },
            ],
            [
              "mouseleave",
              () => {
                g.classList.add("focus"),
                  ft && ((ft.style.visibility = "hidden"), ft.classList.remove("active"))
              },
            ],
            [
              "mousemove",
              ({ pageX: ct, pageY: yt }) => {
                g.classList.remove("focus"),
                  ft &&
                    (ft.classList.add("active"),
                    (ft.style.left = `${ct + 10}px`),
                    (ft.style.top = `${yt + 10}px`))
              },
            ],
          )
        }
        return I.append(et, nt), I
      }
      g.append(L({ Link: r, addFaIcon: !0 }), x(r)), (g.dataset.items = JSON.stringify(!0))
      let C = (B) => {
        let I = document.getElementsByClassName("curius-notes")[0]
        if (!(B.altKey || B.ctrlKey || B.metaKey || B.shiftKey)) {
          if (
            (W && W.classList.remove("active"),
            I && I.classList.remove("active"),
            (W = g),
            W.classList.add("active"),
            r.highlights.length > 0)
          ) {
            if (!I) return
            I.classList.add("active"), it(r, I, W)
          }
          B.target instanceof HTMLAnchorElement ||
            I?.classList.contains("active") ||
            window.open(r.link, "_blank")
        }
      }
      return (
        qe(g, () => g.classList.remove("active")),
        Ee(
          g,
          ["click", C],
          [
            "mouseenter",
            () => {
              let B = g.querySelector(".curius-item-favorite")
              B && B.classList.add("focus"), g.classList.add("focus")
            },
          ],
          [
            "mouseleave",
            () => {
              let B = g.querySelector(".curius-item-favorite")
              B && B.classList.remove("focus"), g.classList.remove("focus")
            },
          ],
        ),
        g
      )
    }
    function it(r, g, x) {
      let C = g.querySelector("#note-link"),
        B = g.querySelector(".curius-note-snippet"),
        I = g.querySelector(".curius-note-highlights")
      ;(C.innerHTML = `<span class="curius-item-span">${r.title}</span>`),
        (C.href = r.link),
        (C.target = "_blank"),
        (C.rel = "noopener noreferrer")
      let et = document.querySelector(".icon-container"),
        nt = () => {
          g.classList.remove("active"), x.classList.remove("active")
        }
      if (
        (et?.addEventListener("click", nt),
        window.addCleanup(() => et?.removeEventListener("click", nt)),
        qe(g, nt),
        ve(B),
        (B.textContent = r.metadata ? r.metadata.full_text : r.snippet),
        ve(I),
        r.highlights.length !== 0)
      )
        for (let lt of r.highlights) {
          let bt = document.createElement("li"),
            Bt = document.createElement("a")
          ;(Bt.dataset.highlight = lt.id.toString()),
            (Bt.href = `${r.link}?curius=${lt.userId}`),
            (Bt.target = "_blank"),
            (Bt.rel = "noopener noreferrer"),
            (Bt.textContent = lt.highlight),
            bt.appendChild(Bt),
            I.appendChild(bt)
        }
    }
    document.addEventListener("nav", async (r) => {
      if (r.detail.url !== "curius") return
      let g = [
        ".curius-container",
        "#curius-fetching-text",
        "#curius-fragments",
        ".navigation-container",
      ].map((ht) => document.querySelector(ht))
      if (g.some((ht) => ht === null)) return
      let [x, C, B, I] = g,
        et = document.querySelector(".curius-friends"),
        nt = document.getElementsByClassName("curius-trail")[0]
      ;(C.textContent = "R\xE9cup\xE9ration des liens curius"), C.classList.toggle("active", !0)
      let lt = await a()
      C.classList.toggle("active", !1)
      let bt = (ht) =>
          ht.length === 0
            ? ((x.innerHTML = "<p>\xC9chec de la r\xE9cup\xE9ration des liens.</p>"), [])
            : ht.filter((ct) => ct.trails.length === 0),
        Bt = bt(lt.links)
      if (Bt.length === 0) return
      y(c(lt)),
        await R(Bt),
        B.append(...Bt.map(ot)),
        I.classList.toggle("active", !0),
        et && et.classList.toggle("active", !0),
        nt && nt.classList.toggle("active", !0)
      let ft = document.getElementById("curius-refetch")
      if (ft) {
        let ht = (Dt) => {
          let Rt = document.getElementById("curius-refetch")
          !Rt ||
            !Rt.classList.contains("disabled") ||
            ((Dt.key === "r" || Dt.key === "R") &&
              (Dt.ctrlKey || Dt.metaKey) &&
              (Dt.preventDefault(), Dt.stopPropagation()))
        }
        document.addEventListener("keydown", ht),
          window.addCleanup(() => document.removeEventListener("keydown", ht))
        let ct = !1,
          yt = async () => {
            if (ct) return
            let Dt = document.getElementById("curius-search-container")
            Dt?.classList.contains("active") && Dt.classList.remove("active"),
              ft.classList.add("disabled"),
              (ft.style.opacity = "0.5")
            let Rt = document.getElementById("trail-list"),
              le = document.getElementsByClassName("curius-notes")[0]
            ve(B),
              ve(Rt),
              le?.classList.toggle("active", !1),
              I.classList.toggle("active", !1),
              et?.classList.toggle("active", !1),
              nt?.classList.toggle("active", !1),
              C.classList.toggle("active", !0),
              (C.textContent = "Rafra\xEEchissement des liens curius")
            let Le = await a()
            C.classList.toggle("active", !1), y(c(Le))
            let Qt = bt(Le.links)
            Qt.length !== 0 &&
              (await R(Le.links),
              B.append(...Qt.map(ot)),
              I.classList.toggle("active", !0),
              et?.classList.toggle("active", !0),
              nt?.classList.toggle("active", !0),
              (ct = !0),
              setTimeout(() => {
                ft.classList.remove("disabled"), (ct = !1)
              }, X))
          }
        ft.addEventListener("click", yt),
          window.addCleanup(() => ft.removeEventListener("click", yt)),
          Ee(
            ft,
            [
              "mouseenter",
              () => (ft.style.opacity = ft.classList.contains("disabled") ? "0.5" : "1"),
            ],
            [
              "mouseleave",
              () => (ft.style.opacity = ft.classList.contains("disabled") ? "0.5" : "1"),
            ],
          )
      }
    })
  })(),
  (function () {
    var je = (h, M) => () => (M || h((M = { exports: {} }).exports, M), M.exports),
      Ne = je(() => {})
    function qe(h) {
      for (; h.firstChild; ) h.removeChild(h.firstChild)
    }
    function ve(h, ...M) {
      Ee(
        h,
        ["mouseenter", () => h.classList.add(...M)],
        ["mouseleave", () => h.classList.remove(...M)],
      )
    }
    function Ee(h, ...M) {
      h &&
        M.forEach(([T, j]) => {
          let V = (J) => j(J)
          h.addEventListener(T, V), window.addCleanup(() => h.removeEventListener(T, V))
        })
    }
    var Jt
    function Oe(h) {
      return typeof h < "u" ? h : !0
    }
    function Ie(h) {
      let M = Array(h)
      for (let T = 0; T < h; T++) M[T] = Yt()
      return M
    }
    function Yt() {
      return Object.create(null)
    }
    function on(h, M) {
      return M.length - h.length
    }
    function de(h) {
      return typeof h == "string"
    }
    function Vt(h) {
      return typeof h == "object"
    }
    function Se(h) {
      return typeof h == "function"
    }
    function ne(h, M) {
      var T = ye
      if (
        h &&
        (M && (h = De(h, M)),
        this.H && (h = De(h, this.H)),
        this.J && 1 < h.length && (h = De(h, this.J)),
        T || T === "")
      ) {
        if (((M = h.split(T)), this.filter)) {
          ;(h = this.filter), (T = M.length)
          let j = []
          for (let V = 0, J = 0; V < T; V++) {
            let dt = M[V]
            dt && !h[dt] && (j[J++] = dt)
          }
          h = j
        } else h = M
        return h
      }
      return h
    }
    var ye = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      mn = /[\u0300-\u036f]/g
    function se(h, M) {
      let T = Object.keys(h),
        j = T.length,
        V = [],
        J = "",
        dt = 0
      for (let pt = 0, Et, Pt; pt < j; pt++)
        (Et = T[pt]),
          (Pt = h[Et])
            ? ((V[dt++] = te(M ? "(?!\\b)" + Et + "(\\b|_)" : Et)), (V[dt++] = Pt))
            : (J += (J ? "|" : "") + Et)
      return J && ((V[dt++] = te(M ? "(?!\\b)(" + J + ")(\\b|_)" : "(" + J + ")")), (V[dt] = "")), V
    }
    function De(h, M) {
      for (let T = 0, j = M.length; T < j && ((h = h.replace(M[T], M[T + 1])), h); T += 2);
      return h
    }
    function te(h) {
      return new RegExp(h, "g")
    }
    function Ye(h) {
      let M = "",
        T = ""
      for (let j = 0, V = h.length, J; j < V; j++) (J = h[j]) !== T && (M += T = J)
      return M
    }
    var vn = { encode: Ge, F: !1, G: "" }
    function Ge(h) {
      return ne.call(this, ("" + h).toLowerCase(), !1)
    }
    var Ue = {},
      ie = {}
    function ce(h) {
      an(h, "add"), an(h, "append"), an(h, "search"), an(h, "update"), an(h, "remove")
    }
    function an(h, M) {
      h[M + "Async"] = function () {
        let T = this,
          j = arguments
        var V = j[j.length - 1]
        let J
        return (
          Se(V) && ((J = V), delete j[j.length - 1]),
          (V = new Promise(function (dt) {
            setTimeout(function () {
              T.async = !0
              let pt = T[M].apply(T, j)
              ;(T.async = !1), dt(pt)
            })
          })),
          J ? (V.then(J), this) : V
        )
      }
    }
    function pe(h, M, T, j) {
      let V = h.length,
        J = [],
        dt,
        pt,
        Et = 0
      j && (j = [])
      for (let Pt = V - 1; 0 <= Pt; Pt--) {
        let Kt = h[Pt],
          me = Kt.length,
          oe = Yt(),
          Zt = !dt
        for (let Ft = 0; Ft < me; Ft++) {
          let ae = Kt[Ft],
            Fe = ae.length
          if (Fe)
            for (let Qe = 0, ze, Me; Qe < Fe; Qe++)
              if (((Me = ae[Qe]), dt)) {
                if (dt[Me]) {
                  if (!Pt) {
                    if (T) T--
                    else if (((J[Et++] = Me), Et === M)) return J
                  }
                  ;(Pt || j) && (oe[Me] = 1), (Zt = !0)
                }
                if (j && ((ze = (pt[Me] || 0) + 1), (pt[Me] = ze), ze < V)) {
                  let fn = j[ze - 2] || (j[ze - 2] = [])
                  fn[fn.length] = Me
                }
              } else oe[Me] = 1
        }
        if (j) dt || (pt = oe)
        else if (!Zt) return []
        dt = oe
      }
      if (j)
        for (let Pt = j.length - 1, Kt, me; 0 <= Pt; Pt--) {
          ;(Kt = j[Pt]), (me = Kt.length)
          for (let oe = 0, Zt; oe < me; oe++)
            if (((Zt = Kt[oe]), !dt[Zt])) {
              if (T) T--
              else if (((J[Et++] = Zt), Et === M)) return J
              dt[Zt] = 1
            }
        }
      return J
    }
    function An(h, M) {
      let T = Yt(),
        j = Yt(),
        V = []
      for (let J = 0; J < h.length; J++) T[h[J]] = 1
      for (let J = 0, dt; J < M.length; J++) {
        dt = M[J]
        for (let pt = 0, Et; pt < dt.length; pt++)
          (Et = dt[pt]), T[Et] && !j[Et] && ((j[Et] = 1), (V[V.length] = Et))
      }
      return V
    }
    function xe(h) {
      ;(this.l = h !== !0 && h), (this.cache = Yt()), (this.h = [])
    }
    function _e(h, M, T) {
      Vt(h) && (h = h.query)
      let j = this.cache.get(h)
      return j || ((j = this.search(h, M, T)), this.cache.set(h, j)), j
    }
    ;(xe.prototype.set = function (h, M) {
      if (!this.cache[h]) {
        var T = this.h.length
        for (T === this.l ? delete this.cache[this.h[T - 1]] : T++, --T; 0 < T; T--)
          this.h[T] = this.h[T - 1]
        this.h[0] = h
      }
      this.cache[h] = M
    }),
      (xe.prototype.get = function (h) {
        let M = this.cache[h]
        if (this.l && M && (h = this.h.indexOf(h))) {
          let T = this.h[h - 1]
          ;(this.h[h - 1] = this.h[h]), (this.h[h] = T)
        }
        return M
      })
    var yn = {
      memory: { charset: "latin:extra", D: 3, B: 4, m: !1 },
      performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } },
      match: { charset: "latin:extra", G: "reverse" },
      score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } },
      default: {},
    }
    function Re(h, M, T, j, V, J, dt, pt) {
      setTimeout(function () {
        let Et = h(T ? T + "." + j : j, JSON.stringify(dt))
        Et && Et.then
          ? Et.then(function () {
              M.export(h, M, T, V, J + 1, pt)
            })
          : M.export(h, M, T, V, J + 1, pt)
      })
    }
    function Be(h, M) {
      if (!(this instanceof Be)) return new Be(h)
      var T
      if (h) {
        de(h) ? (h = yn[h]) : (T = h.preset) && (h = Object.assign({}, T[T], h)), (T = h.charset)
        var j = h.lang
        de(T) && (T.indexOf(":") === -1 && (T += ":default"), (T = ie[T])), de(j) && (j = Ue[j])
      } else h = {}
      let V,
        J,
        dt = h.context || {}
      if (
        ((this.encode = h.encode || (T && T.encode) || Ge),
        (this.register = M || Yt()),
        (this.D = V = h.resolution || 9),
        (this.G = M = (T && T.G) || h.tokenize || "strict"),
        (this.depth = M === "strict" && dt.depth),
        (this.l = Oe(dt.bidirectional)),
        (this.s = J = Oe(h.optimize)),
        (this.m = Oe(h.fastupdate)),
        (this.B = h.minlength || 1),
        (this.C = h.boost),
        (this.map = J ? Ie(V) : Yt()),
        (this.A = V = dt.resolution || 1),
        (this.h = J ? Ie(V) : Yt()),
        (this.F = (T && T.F) || h.rtl),
        (this.H = (M = h.matcher || (j && j.H)) && se(M, !1)),
        (this.J = (M = h.stemmer || (j && j.J)) && se(M, !0)),
        (T = M = h.filter || (j && j.filter)))
      ) {
        ;(T = M), (j = Yt())
        for (let pt = 0, Et = T.length; pt < Et; pt++) j[T[pt]] = 1
        T = j
      }
      ;(this.filter = T), (this.cache = (M = h.cache) && new xe(M))
    }
    ;(Jt = Be.prototype),
      (Jt.append = function (h, M) {
        return this.add(h, M, !0)
      }),
      (Jt.add = function (h, M, T, j) {
        if (M && (h || h === 0)) {
          if (!j && !T && this.register[h]) return this.update(h, M)
          if (((M = this.encode(M)), (j = M.length))) {
            let Pt = Yt(),
              Kt = Yt(),
              me = this.depth,
              oe = this.D
            for (let Zt = 0; Zt < j; Zt++) {
              let Ft = M[this.F ? j - 1 - Zt : Zt]
              var V = Ft.length
              if (Ft && V >= this.B && (me || !Kt[Ft])) {
                var J = sn(oe, j, Zt),
                  dt = ""
                switch (this.G) {
                  case "full":
                    if (2 < V) {
                      for (J = 0; J < V; J++)
                        for (var pt = V; pt > J; pt--)
                          if (pt - J >= this.B) {
                            var Et = sn(oe, j, Zt, V, J)
                            ;(dt = Ft.substring(J, pt)), We(this, Kt, dt, Et, h, T)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < V) {
                      for (pt = V - 1; 0 < pt; pt--)
                        (dt = Ft[pt] + dt),
                          dt.length >= this.B && We(this, Kt, dt, sn(oe, j, Zt, V, pt), h, T)
                      dt = ""
                    }
                  case "forward":
                    if (1 < V) {
                      for (pt = 0; pt < V; pt++)
                        (dt += Ft[pt]), dt.length >= this.B && We(this, Kt, dt, J, h, T)
                      break
                    }
                  default:
                    if (
                      (this.C && (J = Math.min((J / this.C(M, Ft, Zt)) | 0, oe - 1)),
                      We(this, Kt, Ft, J, h, T),
                      me && 1 < j && Zt < j - 1)
                    ) {
                      for (
                        V = Yt(),
                          dt = this.A,
                          J = Ft,
                          pt = Math.min(me + 1, j - Zt),
                          V[J] = 1,
                          Et = 1;
                        Et < pt;
                        Et++
                      )
                        if (
                          (Ft = M[this.F ? j - 1 - Zt - Et : Zt + Et]) &&
                          Ft.length >= this.B &&
                          !V[Ft]
                        ) {
                          V[Ft] = 1
                          let ae = this.l && Ft > J
                          We(
                            this,
                            Pt,
                            ae ? J : Ft,
                            sn(dt + (j / 2 > dt ? 0 : 1), j, Zt, pt - 1, Et - 1),
                            h,
                            T,
                            ae ? Ft : J,
                          )
                        }
                    }
                }
              }
            }
            this.m || (this.register[h] = 1)
          }
        }
        return this
      })
    function sn(h, M, T, j, V) {
      return T && 1 < h
        ? M + (j || 0) <= h
          ? T + (V || 0)
          : (((h - 1) / (M + (j || 0))) * (T + (V || 0)) + 1) | 0
        : 0
    }
    function We(h, M, T, j, V, J, dt) {
      let pt = dt ? h.h : h.map
      ;(!M[T] || (dt && !M[T][dt])) &&
        (h.s && (pt = pt[j]),
        dt
          ? ((M = M[T] || (M[T] = Yt())), (M[dt] = 1), (pt = pt[dt] || (pt[dt] = Yt())))
          : (M[T] = 1),
        (pt = pt[T] || (pt[T] = [])),
        h.s || (pt = pt[j] || (pt[j] = [])),
        (J && pt.includes(V)) ||
          ((pt[pt.length] = V),
          h.m && ((h = h.register[V] || (h.register[V] = [])), (h[h.length] = pt))))
    }
    Jt.search = function (h, M, T) {
      T || (!M && Vt(h) ? ((T = h), (h = T.query)) : Vt(M) && (T = M))
      let j = [],
        V,
        J,
        dt = 0
      if (T) {
        ;(h = T.query || h), (M = T.limit), (dt = T.offset || 0)
        var pt = T.context
        J = T.suggest
      }
      if (h && ((h = this.encode("" + h)), (V = h.length), 1 < V)) {
        T = Yt()
        var Et = []
        for (let Kt = 0, me = 0, oe; Kt < V; Kt++)
          if ((oe = h[Kt]) && oe.length >= this.B && !T[oe])
            if (this.s || J || this.map[oe]) (Et[me++] = oe), (T[oe] = 1)
            else return j
        ;(h = Et), (V = h.length)
      }
      if (!V) return j
      M || (M = 100), (pt = this.depth && 1 < V && pt !== !1), (T = 0)
      let Pt
      pt ? ((Pt = h[0]), (T = 1)) : 1 < V && h.sort(on)
      for (let Kt, me; T < V; T++) {
        if (
          ((me = h[T]),
          pt
            ? ((Kt = tn(this, j, J, M, dt, V === 2, me, Pt)),
              (J && Kt === !1 && j.length) || (Pt = me))
            : (Kt = tn(this, j, J, M, dt, V === 1, me)),
          Kt)
        )
          return Kt
        if (J && T === V - 1) {
          if (((Et = j.length), !Et)) {
            if (pt) {
              ;(pt = 0), (T = -1)
              continue
            }
            return j
          }
          if (Et === 1) return we(j[0], M, dt)
        }
      }
      return pe(j, M, dt, J)
    }
    function tn(h, M, T, j, V, J, dt, pt) {
      let Et = [],
        Pt = pt ? h.h : h.map
      if ((h.s || (Pt = en(Pt, dt, pt, h.l)), Pt)) {
        let Kt = 0,
          me = Math.min(Pt.length, pt ? h.A : h.D)
        for (
          let oe = 0, Zt = 0, Ft, ae;
          oe < me &&
          !(
            (Ft = Pt[oe]) &&
            (h.s && (Ft = en(Ft, dt, pt, h.l)),
            V &&
              Ft &&
              J &&
              ((ae = Ft.length),
              ae <= V ? ((V -= ae), (Ft = null)) : ((Ft = Ft.slice(V)), (V = 0))),
            Ft && ((Et[Kt++] = Ft), J && ((Zt += Ft.length), Zt >= j)))
          );
          oe++
        );
        if (Kt) {
          if (J) return we(Et, j, 0)
          M[M.length] = Et
          return
        }
      }
      return !T && Et
    }
    function we(h, M, T) {
      return (
        (h = h.length === 1 ? h[0] : [].concat.apply([], h)),
        T || h.length > M ? h.slice(T, T + M) : h
      )
    }
    function en(h, M, T, j) {
      return T ? ((j = j && M > T), (h = (h = h[j ? M : T]) && h[j ? T : M])) : (h = h[M]), h
    }
    ;(Jt.contain = function (h) {
      return !!this.register[h]
    }),
      (Jt.update = function (h, M) {
        return this.remove(h).add(h, M)
      }),
      (Jt.remove = function (h, M) {
        let T = this.register[h]
        if (T) {
          if (this.m) for (let j = 0, V; j < T.length; j++) (V = T[j]), V.splice(V.indexOf(h), 1)
          else Pe(this.map, h, this.D, this.s), this.depth && Pe(this.h, h, this.A, this.s)
          if ((M || delete this.register[h], this.cache)) {
            M = this.cache
            for (let j = 0, V, J; j < M.h.length; j++)
              (J = M.h[j]),
                (V = M.cache[J]),
                V.includes(h) && (M.h.splice(j--, 1), delete M.cache[J])
          }
        }
        return this
      })
    function Pe(h, M, T, j, V) {
      let J = 0
      if (h.constructor === Array)
        if (V) (M = h.indexOf(M)), M !== -1 ? 1 < h.length && (h.splice(M, 1), J++) : J++
        else {
          V = Math.min(h.length, T)
          for (let dt = 0, pt; dt < V; dt++)
            (pt = h[dt]) && ((J = Pe(pt, M, T, j, V)), j || J || delete h[dt])
        }
      else for (let dt in h) (J = Pe(h[dt], M, T, j, V)) || delete h[dt]
      return J
    }
    ;(Jt.searchCache = _e),
      (Jt.export = function (h, M, T, j, V, J) {
        let dt = !0
        typeof J > "u" &&
          (dt = new Promise((Pt) => {
            J = Pt
          }))
        let pt, Et
        switch (V || (V = 0)) {
          case 0:
            if (((pt = "reg"), this.m)) {
              Et = Yt()
              for (let Pt in this.register) Et[Pt] = 1
            } else Et = this.register
            break
          case 1:
            ;(pt = "cfg"), (Et = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(pt = "map"), (Et = this.map)
            break
          case 3:
            ;(pt = "ctx"), (Et = this.h)
            break
          default:
            typeof T > "u" && J && J()
            return
        }
        return Re(h, M || this, T, pt, j, V, Et, J), dt
      }),
      (Jt.import = function (h, M) {
        if (M)
          switch ((de(M) && (M = JSON.parse(M)), h)) {
            case "cfg":
              this.s = !!M.opt
              break
            case "reg":
              ;(this.m = !1), (this.register = M)
              break
            case "map":
              this.map = M
              break
            case "ctx":
              this.h = M
          }
      }),
      ce(Be.prototype)
    function nn(h) {
      h = h.data
      var M = self._index
      let T = h.args
      var j = h.task
      switch (j) {
        case "init":
          ;(j = h.options || {}),
            (h = h.factory),
            (M = j.encode),
            (j.cache = !1),
            M && M.indexOf("function") === 0 && (j.encode = Function("return " + M)()),
            h
              ? (Function("return " + h)()(self),
                (self._index = new self.FlexSearch.Index(j)),
                delete self.FlexSearch)
              : (self._index = new Be(j))
          break
        default:
          ;(h = h.id),
            (M = M[j].apply(M, T)),
            postMessage(j === "search" ? { id: h, msg: M } : { id: h })
      }
    }
    var Ve = 0
    function Ae(h) {
      if (!(this instanceof Ae)) return new Ae(h)
      var M
      h ? Se((M = h.encode)) && (h.encode = M.toString()) : (h = {}),
        (M = (self || window)._factory) && (M = M.toString())
      let T = typeof window > "u" && self.exports,
        j = this
      ;(this.o = vt(M, T, h.worker)),
        (this.h = Yt()),
        this.o &&
          (T
            ? this.o.on("message", function (V) {
                j.h[V.id](V.msg), delete j.h[V.id]
              })
            : (this.o.onmessage = function (V) {
                ;(V = V.data), j.h[V.id](V.msg), delete j.h[V.id]
              }),
          this.o.postMessage({ task: "init", factory: M, options: h }))
    }
    Z("add"), Z("append"), Z("search"), Z("update"), Z("remove")
    function Z(h) {
      Ae.prototype[h] = Ae.prototype[h + "Async"] = function () {
        let M = this,
          T = [].slice.call(arguments)
        var j = T[T.length - 1]
        let V
        return (
          Se(j) && ((V = j), T.splice(T.length - 1, 1)),
          (j = new Promise(function (J) {
            setTimeout(function () {
              ;(M.h[++Ve] = J), M.o.postMessage({ task: h, id: Ve, args: T })
            })
          })),
          V ? (j.then(V), this) : j
        )
      }
    }
    function vt(h, M, T) {
      let j
      try {
        j = M
          ? new (Ne().Worker)(__dirname + "/node/node.js")
          : h
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + nn.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(de(T) ? T : "worker/worker.js", { type: "module" })
      } catch {}
      return j
    }
    function Ct(h) {
      if (!(this instanceof Ct)) return new Ct(h)
      var M = h.document || h.doc || h,
        T
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = Yt()),
        (this.key = ((T = M.key || M.id) && Nt(T, this.A)) || "id"),
        (this.m = Oe(h.fastupdate)),
        (this.C = (T = M.store) && T !== !0 && []),
        (this.store = T && Yt()),
        (this.I = (T = M.tag) && Nt(T, this.A)),
        (this.l = T && Yt()),
        (this.cache = (T = h.cache) && new xe(T)),
        (h.cache = !1),
        (this.o = h.worker),
        (this.async = !1),
        (T = Yt())
      let j = M.index || M.field || M
      de(j) && (j = [j])
      for (let V = 0, J, dt; V < j.length; V++)
        (J = j[V]),
          de(J) || ((dt = J), (J = J.field)),
          (dt = Vt(dt) ? Object.assign({}, h, dt) : h),
          this.o && ((T[J] = new Ae(dt)), T[J].o || (this.o = !1)),
          this.o || (T[J] = new Be(dt, this.register)),
          (this.K[V] = Nt(J, this.A)),
          (this.h[V] = J)
      if (this.C)
        for (h = M.store, de(h) && (h = [h]), M = 0; M < h.length; M++) this.C[M] = Nt(h[M], this.A)
      this.index = T
    }
    function Nt(h, M) {
      let T = h.split(":"),
        j = 0
      for (let V = 0; V < T.length; V++)
        (h = T[V]),
          0 <= h.indexOf("[]") && (h = h.substring(0, h.length - 2)) && (M[j] = !0),
          h && (T[j++] = h)
      return j < T.length && (T.length = j), 1 < j ? T : T[0]
    }
    function qt(h, M) {
      if (de(M)) h = h[M]
      else for (let T = 0; h && T < M.length; T++) h = h[M[T]]
      return h
    }
    function Tt(h, M, T, j, V) {
      if (((h = h[V]), j === T.length - 1)) M[V] = h
      else if (h)
        if (h.constructor === Array)
          for (M = M[V] = Array(h.length), V = 0; V < h.length; V++) Tt(h, M, T, j, V)
        else (M = M[V] || (M[V] = Yt())), (V = T[++j]), Tt(h, M, T, j, V)
    }
    function jt(h, M, T, j, V, J, dt, pt) {
      if ((h = h[dt]))
        if (j === M.length - 1) {
          if (h.constructor === Array) {
            if (T[j]) {
              for (M = 0; M < h.length; M++) V.add(J, h[M], !0, !0)
              return
            }
            h = h.join(" ")
          }
          V.add(J, h, pt, !0)
        } else if (h.constructor === Array)
          for (dt = 0; dt < h.length; dt++) jt(h, M, T, j, V, J, dt, pt)
        else (dt = M[++j]), jt(h, M, T, j, V, J, dt, pt)
    }
    ;(Jt = Ct.prototype),
      (Jt.add = function (h, M, T) {
        if ((Vt(h) && ((M = h), (h = qt(M, this.key))), M && (h || h === 0))) {
          if (!T && this.register[h]) return this.update(h, M)
          for (let j = 0, V, J; j < this.h.length; j++)
            (J = this.h[j]),
              (V = this.K[j]),
              de(V) && (V = [V]),
              jt(M, V, this.A, 0, this.index[J], h, V[0], T)
          if (this.I) {
            let j = qt(M, this.I),
              V = Yt()
            de(j) && (j = [j])
            for (let J = 0, dt, pt; J < j.length; J++)
              if (
                ((dt = j[J]),
                !V[dt] &&
                  ((V[dt] = 1), (pt = this.l[dt] || (this.l[dt] = [])), !T || !pt.includes(h)) &&
                  ((pt[pt.length] = h), this.m))
              ) {
                let Et = this.register[h] || (this.register[h] = [])
                Et[Et.length] = pt
              }
          }
          if (this.store && (!T || !this.store[h])) {
            let j
            if (this.C) {
              j = Yt()
              for (let V = 0, J; V < this.C.length; V++)
                (J = this.C[V]), de(J) ? (j[J] = M[J]) : Tt(M, j, J, 0, J[0])
            }
            this.store[h] = j || M
          }
        }
        return this
      }),
      (Jt.append = function (h, M) {
        return this.add(h, M, !0)
      }),
      (Jt.update = function (h, M) {
        return this.remove(h).add(h, M)
      }),
      (Jt.remove = function (h) {
        if ((Vt(h) && (h = qt(h, this.key)), this.register[h])) {
          for (
            var M = 0;
            M < this.h.length && (this.index[this.h[M]].remove(h, !this.o), !this.m);
            M++
          );
          if (this.I && !this.m)
            for (let T in this.l) {
              M = this.l[T]
              let j = M.indexOf(h)
              j !== -1 && (1 < M.length ? M.splice(j, 1) : delete this.l[T])
            }
          this.store && delete this.store[h], delete this.register[h]
        }
        return this
      }),
      (Jt.search = function (h, M, T, j) {
        T || (!M && Vt(h) ? ((T = h), (h = "")) : Vt(M) && ((T = M), (M = 0)))
        let V = [],
          J = [],
          dt,
          pt,
          Et,
          Pt,
          Kt,
          me,
          oe = 0
        if (T)
          if (T.constructor === Array) (Et = T), (T = null)
          else {
            if (
              ((h = T.query || h),
              (Et = (dt = T.pluck) || T.index || T.field),
              (Pt = T.tag),
              (pt = this.store && T.enrich),
              (Kt = T.bool === "and"),
              (M = T.limit || M || 100),
              (me = T.offset || 0),
              Pt && (de(Pt) && (Pt = [Pt]), !h))
            ) {
              for (let Ft = 0, ae; Ft < Pt.length; Ft++)
                (ae = fe.call(this, Pt[Ft], M, me, pt)) && ((V[V.length] = ae), oe++)
              return oe ? V : []
            }
            de(Et) && (Et = [Et])
          }
        Et || (Et = this.h), (Kt = Kt && (1 < Et.length || (Pt && 1 < Pt.length)))
        let Zt = !j && (this.o || this.async) && []
        for (let Ft = 0, ae, Fe, Qe; Ft < Et.length; Ft++) {
          let ze
          if (
            ((Fe = Et[Ft]),
            de(Fe) ||
              ((ze = Fe),
              (Fe = ze.field),
              (h = ze.query || h),
              (M = ze.limit || M),
              (pt = ze.enrich || pt)),
            Zt)
          )
            Zt[Ft] = this.index[Fe].searchAsync(h, M, ze || T)
          else {
            if (
              (j ? (ae = j[Ft]) : (ae = this.index[Fe].search(h, M, ze || T)),
              (Qe = ae && ae.length),
              Pt && Qe)
            ) {
              let Me = [],
                fn = 0
              Kt && (Me[0] = [ae])
              for (let Mn = 0, Bn, hn; Mn < Pt.length; Mn++)
                (Bn = Pt[Mn]),
                  (Qe = (hn = this.l[Bn]) && hn.length) && (fn++, (Me[Me.length] = Kt ? [hn] : hn))
              fn && ((ae = Kt ? pe(Me, M || 100, me || 0) : An(ae, Me)), (Qe = ae.length))
            }
            if (Qe) (J[oe] = Fe), (V[oe++] = ae)
            else if (Kt) return []
          }
        }
        if (Zt) {
          let Ft = this
          return new Promise(function (ae) {
            Promise.all(Zt).then(function (Fe) {
              ae(Ft.search(h, M, T, Fe))
            })
          })
        }
        if (!oe) return []
        if (dt && (!pt || !this.store)) return V[0]
        for (let Ft = 0, ae; Ft < J.length; Ft++) {
          if (((ae = V[Ft]), ae.length && pt && (ae = Gt.call(this, ae)), dt)) return ae
          V[Ft] = { field: J[Ft], result: ae }
        }
        return V
      })
    function fe(h, M, T, j) {
      let V = this.l[h],
        J = V && V.length - T
      if (J && 0 < J)
        return (
          (J > M || T) && (V = V.slice(T, T + M)),
          j && (V = Gt.call(this, V)),
          { tag: h, result: V }
        )
    }
    function Gt(h) {
      let M = Array(h.length)
      for (let T = 0, j; T < h.length; T++) (j = h[T]), (M[T] = { id: j, doc: this.store[j] })
      return M
    }
    ;(Jt.contain = function (h) {
      return !!this.register[h]
    }),
      (Jt.get = function (h) {
        return this.store[h]
      }),
      (Jt.set = function (h, M) {
        return (this.store[h] = M), this
      }),
      (Jt.searchCache = _e),
      (Jt.export = function (h, M, T, j, V, J) {
        let dt
        if (
          (typeof J > "u" &&
            (dt = new Promise((pt) => {
              J = pt
            })),
          V || (V = 0),
          j || (j = 0),
          j < this.h.length)
        ) {
          let pt = this.h[j],
            Et = this.index[pt]
          ;(M = this),
            setTimeout(function () {
              Et.export(h, M, V ? pt : "", j, V++, J) || (j++, (V = 1), M.export(h, M, pt, j, V, J))
            })
        } else {
          let pt, Et
          switch (V) {
            case 1:
              ;(pt = "tag"), (Et = this.l), (T = null)
              break
            case 2:
              ;(pt = "store"), (Et = this.store), (T = null)
              break
            default:
              J()
              return
          }
          Re(h, this, T, pt, j, V, Et, J)
        }
        return dt
      }),
      (Jt.import = function (h, M) {
        if (M)
          switch ((de(M) && (M = JSON.parse(M)), h)) {
            case "tag":
              this.l = M
              break
            case "reg":
              ;(this.m = !1), (this.register = M)
              for (let j = 0, V; j < this.h.length; j++)
                (V = this.index[this.h[j]]), (V.register = M), (V.m = !1)
              break
            case "store":
              this.store = M
              break
            default:
              h = h.split(".")
              let T = h[0]
              ;(h = h[1]), T && h && this.index[T].import(h, M)
          }
      }),
      ce(Ct.prototype)
    var Ht = { encode: St, F: !1, G: "" },
      ue = [
        te("[\xE0\xE1\xE2\xE3\xE4\xE5]"),
        "a",
        te("[\xE8\xE9\xEA\xEB]"),
        "e",
        te("[\xEC\xED\xEE\xEF]"),
        "i",
        te("[\xF2\xF3\xF4\xF5\xF6\u0151]"),
        "o",
        te("[\xF9\xFA\xFB\xFC\u0171]"),
        "u",
        te("[\xFD\u0177\xFF]"),
        "y",
        te("\xF1"),
        "n",
        te("[\xE7c]"),
        "k",
        te("\xDF"),
        "s",
        te(" & "),
        " and ",
      ]
    function St(h) {
      var M = (h = "" + h)
      return (
        M.normalize && (M = M.normalize("NFD").replace(mn, "")),
        ne.call(this, M.toLowerCase(), !h.normalize && ue)
      )
    }
    var Lt = { encode: ke, F: !1, G: "strict" },
      he = /[^a-z0-9]+/,
      zt = {
        b: "p",
        v: "f",
        w: "f",
        z: "s",
        x: "s",
        ß: "s",
        d: "t",
        n: "m",
        c: "k",
        g: "k",
        j: "k",
        q: "k",
        i: "e",
        y: "e",
        u: "o",
      }
    function ke(h) {
      h = St.call(this, h).join(" ")
      let M = []
      if (h) {
        let T = h.split(he),
          j = T.length
        for (let V = 0, J, dt = 0; V < j; V++)
          if ((h = T[V]) && (!this.filter || !this.filter[h])) {
            J = h[0]
            let pt = zt[J] || J,
              Et = pt
            for (let Pt = 1; Pt < h.length; Pt++) {
              J = h[Pt]
              let Kt = zt[J] || J
              Kt && Kt !== Et && ((pt += Kt), (Et = Kt))
            }
            M[dt++] = pt
          }
      }
      return M
    }
    var Ke = { encode: Je, F: !1, G: "" },
      Te = [
        te("ae"),
        "a",
        te("oe"),
        "o",
        te("sh"),
        "s",
        te("th"),
        "t",
        te("ph"),
        "f",
        te("pf"),
        "f",
        te("(?![aeo])h(?![aeo])"),
        "",
        te("(?!^[aeo])h(?!^[aeo])"),
        "",
      ]
    function Je(h, M) {
      return (
        h &&
          ((h = ke.call(this, h).join(" ")),
          2 < h.length && (h = De(h, Te)),
          M || (1 < h.length && (h = Ye(h)), h && (h = h.split(" ")))),
        h || []
      )
    }
    var wn = { encode: bn, F: !1, G: "" },
      xn = te("(?!\\b)[aeo]")
    function bn(h) {
      return (
        h &&
          ((h = Je.call(this, h, !0)),
          1 < h.length && (h = h.replace(xn, "")),
          1 < h.length && (h = Ye(h)),
          h && (h = h.split(" "))),
        h || []
      )
    }
    ;(ie["latin:default"] = vn),
      (ie["latin:simple"] = Ht),
      (ie["latin:balance"] = Lt),
      (ie["latin:advanced"] = Ke),
      (ie["latin:extra"] = wn)
    var kn = {
        Index: Be,
        Document: Ct,
        Worker: Ae,
        registerCharset: function (h, M) {
          ie[h] = M
        },
        registerLanguage: function (h, M) {
          Ue[h] = M
        },
      },
      cn = "https://curius.app",
      Cn = `${cn}/aaron-pham`,
      $n = { method: "POST", headers: { "Content-Type": "application/json" } },
      On = {
        id: 0,
        link: "",
        title: "",
        favorite: !1,
        snippet: "",
        toRead: !1,
        createdBy: 0,
        metadata: { full_text: "", author: "", page_type: "" },
        createdDate: "",
        modifiedDate: "",
        lastCrawled: null,
        trails: [],
        comments: [],
        mentions: [],
        topics: [],
        highlights: [],
        userIds: [],
      }
    function In(h) {
      let M = new Date(),
        T = h instanceof Date ? h : new Date(h),
        j = Math.floor((M.getTime() - T.getTime()) / 1e3),
        V = Math.floor(j / (3600 * 24)),
        J = Math.floor((j % (3600 * 24)) / 3600),
        dt = Math.floor((j % 3600) / 60)
      return V > 1
        ? `${V} days ago`
        : V === 1
          ? "1 day ago"
          : J > 1
            ? `${J} hours ago`
            : J === 1
              ? "1 hour ago"
              : dt > 1
                ? `${dt} minutes ago`
                : dt === 1
                  ? "1 minute ago"
                  : "just now"
    }
    async function Dn() {
      return fetch("https://raw.aarnphm.xyz/api/curius?query=following", $n)
        .then((h) => h.json())
        .then((h) => {
          if (h === void 0 || h.following === void 0) throw new Error("No following data")
          return h.following
        })
    }
    var Rn = new kn.Document({
      charset: "latin:advanced",
      document: {
        id: "id",
        index: [...Object.keys(On).map((h) => ({ field: h, tokenize: "forward" }))],
      },
    })
    document.addEventListener("nav", async () => {
      let h = document.getElementById("friends-list"),
        M = document.getElementById("see-more-friends")
      if (!h) return
      let T = await Dn()
      qe(h),
        T.map((V, J) => {
          let { user: dt, link: pt } = V,
            Et = document.createElement("li")
          Et.classList.add("friend-li")
          let Pt = (ae) => {
            ae.target instanceof HTMLAnchorElement || window.open(pt.link, "_blank")
          }
          Et.addEventListener("click", Pt),
            window.addCleanup(() => Et.removeEventListener("click", Pt)),
            ve(Et, "focus"),
            J < 4 ? Et.classList.add("active") : (Et.id = "inactive")
          let Kt = document.createElement("div")
          Kt.classList.add("friend-title")
          let me = document.createElement("a")
          me.classList.add("friend-name"),
            (me.innerHTML = `${dt.firstName} ${dt.lastName}`),
            (me.style.fontWeight = "bold"),
            (me.href = `https://curius.app/${dt.userLink}`),
            (me.target = "_blank")
          let oe = document.createElement("span")
          oe.id = `curius-span-${V.link.id}`
          let Zt = new Date(pt.modifiedDate)
          ;(oe.innerHTML = `<time datetime=${pt.modifiedDate} title="${Zt.toUTCString()}">${In(pt.createdDate)}</time>`),
            Kt.append(me, oe)
          let Ft = document.createElement("div")
          Ft.classList.add("friend-shortcut"),
            (Ft.innerHTML = `in <span style="color: var(--gray) !important">${pt.title}</span>`),
            Et.append(Kt, Ft),
            h.appendChild(Et)
        })
      let j = () => {
        let V = document.getElementById("friends-list"),
          J = M?.querySelectorAll("svg")[0],
          dt = M?.querySelectorAll("span")[0],
          pt = Array.from(V?.children).filter((Et) => Et.id === "inactive")
        M?.classList.contains("expand")
          ? (M.classList.remove("expand"),
            pt.map((Et) => Et.classList.remove("active")),
            J && (J.classList.remove("fold"), (J.viewBox.baseVal.y = -10)),
            dt && (dt.textContent = "de plus"))
          : (M?.classList.add("expand"),
            pt.map((Et) => Et.classList.add("active")),
            J && (J.classList.add("fold"), (J.viewBox.baseVal.y = 10)),
            dt && (dt.textContent = "moins"))
      }
      M?.addEventListener("click", j), window.addCleanup(() => M?.removeEventListener("click", j))
    })
  })(),
  (function () {
    var je = Object.create,
      Ne = Object.defineProperty,
      qe = Object.getOwnPropertyDescriptor,
      ve = Object.getOwnPropertyNames,
      Ee = Object.getPrototypeOf,
      Jt = Object.prototype.hasOwnProperty,
      Oe = (L, U) => () => (U || L((U = { exports: {} }).exports, U), U.exports),
      Ie = (L, U, a, c) => {
        if ((U && typeof U == "object") || typeof U == "function")
          for (let y of ve(U))
            !Jt.call(L, y) &&
              y !== a &&
              Ne(L, y, { get: () => U[y], enumerable: !(c = qe(U, y)) || c.enumerable })
        return L
      },
      Yt = (L, U, a) => (
        (a = L != null ? je(Ee(L)) : {}),
        Ie(U || !L || !L.__esModule ? Ne(a, "default", { value: L, enumerable: !0 }) : a, L)
      ),
      on = Oe((L, U) => {
        "use strict"
        U.exports = c
        function a(b) {
          return b instanceof Buffer
            ? Buffer.from(b)
            : new b.constructor(b.buffer.slice(), b.byteOffset, b.length)
        }
        function c(b) {
          if (((b = b || {}), b.circles)) return y(b)
          return b.proto ? z : F
          function _(O, K) {
            for (var R = Object.keys(O), G = new Array(R.length), X = 0; X < R.length; X++) {
              var W = R[X],
                ot = O[W]
              typeof ot != "object" || ot === null
                ? (G[W] = ot)
                : ot instanceof Date
                  ? (G[W] = new Date(ot))
                  : ArrayBuffer.isView(ot)
                    ? (G[W] = a(ot))
                    : (G[W] = K(ot))
            }
            return G
          }
          function F(O) {
            if (typeof O != "object" || O === null) return O
            if (O instanceof Date) return new Date(O)
            if (Array.isArray(O)) return _(O, F)
            if (O instanceof Map) return new Map(_(Array.from(O), F))
            if (O instanceof Set) return new Set(_(Array.from(O), F))
            var K = {}
            for (var R in O)
              if (Object.hasOwnProperty.call(O, R) !== !1) {
                var G = O[R]
                typeof G != "object" || G === null
                  ? (K[R] = G)
                  : G instanceof Date
                    ? (K[R] = new Date(G))
                    : G instanceof Map
                      ? (K[R] = new Map(_(Array.from(G), F)))
                      : G instanceof Set
                        ? (K[R] = new Set(_(Array.from(G), F)))
                        : ArrayBuffer.isView(G)
                          ? (K[R] = a(G))
                          : (K[R] = F(G))
              }
            return K
          }
          function z(O) {
            if (typeof O != "object" || O === null) return O
            if (O instanceof Date) return new Date(O)
            if (Array.isArray(O)) return _(O, z)
            if (O instanceof Map) return new Map(_(Array.from(O), z))
            if (O instanceof Set) return new Set(_(Array.from(O), z))
            var K = {}
            for (var R in O) {
              var G = O[R]
              typeof G != "object" || G === null
                ? (K[R] = G)
                : G instanceof Date
                  ? (K[R] = new Date(G))
                  : G instanceof Map
                    ? (K[R] = new Map(_(Array.from(G), z)))
                    : G instanceof Set
                      ? (K[R] = new Set(_(Array.from(G), z)))
                      : ArrayBuffer.isView(G)
                        ? (K[R] = a(G))
                        : (K[R] = z(G))
            }
            return K
          }
        }
        function y(b) {
          var _ = [],
            F = []
          return b.proto ? K : O
          function z(R, G) {
            for (var X = Object.keys(R), W = new Array(X.length), ot = 0; ot < X.length; ot++) {
              var it = X[ot],
                r = R[it]
              if (typeof r != "object" || r === null) W[it] = r
              else if (r instanceof Date) W[it] = new Date(r)
              else if (ArrayBuffer.isView(r)) W[it] = a(r)
              else {
                var g = _.indexOf(r)
                g !== -1 ? (W[it] = F[g]) : (W[it] = G(r))
              }
            }
            return W
          }
          function O(R) {
            if (typeof R != "object" || R === null) return R
            if (R instanceof Date) return new Date(R)
            if (Array.isArray(R)) return z(R, O)
            if (R instanceof Map) return new Map(z(Array.from(R), O))
            if (R instanceof Set) return new Set(z(Array.from(R), O))
            var G = {}
            _.push(R), F.push(G)
            for (var X in R)
              if (Object.hasOwnProperty.call(R, X) !== !1) {
                var W = R[X]
                if (typeof W != "object" || W === null) G[X] = W
                else if (W instanceof Date) G[X] = new Date(W)
                else if (W instanceof Map) G[X] = new Map(z(Array.from(W), O))
                else if (W instanceof Set) G[X] = new Set(z(Array.from(W), O))
                else if (ArrayBuffer.isView(W)) G[X] = a(W)
                else {
                  var ot = _.indexOf(W)
                  ot !== -1 ? (G[X] = F[ot]) : (G[X] = O(W))
                }
              }
            return _.pop(), F.pop(), G
          }
          function K(R) {
            if (typeof R != "object" || R === null) return R
            if (R instanceof Date) return new Date(R)
            if (Array.isArray(R)) return z(R, K)
            if (R instanceof Map) return new Map(z(Array.from(R), K))
            if (R instanceof Set) return new Set(z(Array.from(R), K))
            var G = {}
            _.push(R), F.push(G)
            for (var X in R) {
              var W = R[X]
              if (typeof W != "object" || W === null) G[X] = W
              else if (W instanceof Date) G[X] = new Date(W)
              else if (W instanceof Map) G[X] = new Map(z(Array.from(W), K))
              else if (W instanceof Set) G[X] = new Set(z(Array.from(W), K))
              else if (ArrayBuffer.isView(W)) G[X] = a(W)
              else {
                var ot = _.indexOf(W)
                ot !== -1 ? (G[X] = F[ot]) : (G[X] = K(W))
              }
            }
            return _.pop(), F.pop(), G
          }
        }
      }),
      de = Math.min,
      Vt = Math.max,
      Se = Math.round,
      ne = (L) => ({ x: L, y: L }),
      ye = { left: "right", right: "left", bottom: "top", top: "bottom" },
      mn = { start: "end", end: "start" }
    function se(L, U, a) {
      return Vt(L, de(U, a))
    }
    function De(L, U) {
      return typeof L == "function" ? L(U) : L
    }
    function te(L) {
      return L.split("-")[0]
    }
    function Ye(L) {
      return L.split("-")[1]
    }
    function vn(L) {
      return L === "x" ? "y" : "x"
    }
    function Ge(L) {
      return L === "y" ? "height" : "width"
    }
    function Ue(L) {
      return ["top", "bottom"].includes(te(L)) ? "y" : "x"
    }
    function ie(L) {
      return vn(Ue(L))
    }
    function ce(L, U, a) {
      a === void 0 && (a = !1)
      let c = Ye(L),
        y = ie(L),
        b = Ge(y),
        _ =
          y === "x"
            ? c === (a ? "end" : "start")
              ? "right"
              : "left"
            : c === "start"
              ? "bottom"
              : "top"
      return U.reference[b] > U.floating[b] && (_ = _e(_)), [_, _e(_)]
    }
    function an(L) {
      let U = _e(L)
      return [pe(L), U, pe(U)]
    }
    function pe(L) {
      return L.replace(/start|end/g, (U) => mn[U])
    }
    function An(L, U, a) {
      let c = ["left", "right"],
        y = ["right", "left"],
        b = ["top", "bottom"],
        _ = ["bottom", "top"]
      switch (L) {
        case "top":
        case "bottom":
          return a ? (U ? y : c) : U ? c : y
        case "left":
        case "right":
          return U ? b : _
        default:
          return []
      }
    }
    function xe(L, U, a, c) {
      let y = Ye(L),
        b = An(te(L), a === "start", c)
      return y && ((b = b.map((_) => _ + "-" + y)), U && (b = b.concat(b.map(pe)))), b
    }
    function _e(L) {
      return L.replace(/left|right|bottom|top/g, (U) => ye[U])
    }
    function yn(L) {
      return { top: 0, right: 0, bottom: 0, left: 0, ...L }
    }
    function Re(L) {
      return typeof L != "number" ? yn(L) : { top: L, right: L, bottom: L, left: L }
    }
    function Be(L) {
      return { ...L, top: L.y, left: L.x, right: L.x + L.width, bottom: L.y + L.height }
    }
    function sn(L, U, a) {
      let { reference: c, floating: y } = L,
        b = Ue(U),
        _ = ie(U),
        F = Ge(_),
        z = te(U),
        O = b === "y",
        K = c.x + c.width / 2 - y.width / 2,
        R = c.y + c.height / 2 - y.height / 2,
        G = c[F] / 2 - y[F] / 2,
        X
      switch (z) {
        case "top":
          X = { x: K, y: c.y - y.height }
          break
        case "bottom":
          X = { x: K, y: c.y + c.height }
          break
        case "right":
          X = { x: c.x + c.width, y: R }
          break
        case "left":
          X = { x: c.x - y.width, y: R }
          break
        default:
          X = { x: c.x, y: c.y }
      }
      switch (Ye(U)) {
        case "start":
          X[_] -= G * (a && O ? -1 : 1)
          break
        case "end":
          X[_] += G * (a && O ? -1 : 1)
          break
      }
      return X
    }
    var We = async (L, U, a) => {
      let {
          placement: c = "bottom",
          strategy: y = "absolute",
          middleware: b = [],
          platform: _,
        } = a,
        F = b.filter(Boolean),
        z = await (_.isRTL == null ? void 0 : _.isRTL(U)),
        O = await _.getElementRects({ reference: L, floating: U, strategy: y }),
        { x: K, y: R } = sn(O, c, z),
        G = c,
        X = {},
        W = 0
      for (let ot = 0; ot < F.length; ot++) {
        let { name: it, fn: r } = F[ot],
          {
            x: g,
            y: x,
            data: C,
            reset: B,
          } = await r({
            x: K,
            y: R,
            initialPlacement: c,
            placement: G,
            strategy: y,
            middlewareData: X,
            rects: O,
            platform: _,
            elements: { reference: L, floating: U },
          })
        ;(K = g ?? K),
          (R = x ?? R),
          (X = { ...X, [it]: { ...X[it], ...C } }),
          B &&
            W <= 50 &&
            (W++,
            typeof B == "object" &&
              (B.placement && (G = B.placement),
              B.rects &&
                (O =
                  B.rects === !0
                    ? await _.getElementRects({ reference: L, floating: U, strategy: y })
                    : B.rects),
              ({ x: K, y: R } = sn(O, G, z))),
            (ot = -1))
      }
      return { x: K, y: R, placement: G, strategy: y, middlewareData: X }
    }
    async function tn(L, U) {
      var a
      U === void 0 && (U = {})
      let { x: c, y, platform: b, rects: _, elements: F, strategy: z } = L,
        {
          boundary: O = "clippingAncestors",
          rootBoundary: K = "viewport",
          elementContext: R = "floating",
          altBoundary: G = !1,
          padding: X = 0,
        } = De(U, L),
        W = Re(X),
        ot = F[G ? (R === "floating" ? "reference" : "floating") : R],
        it = Be(
          await b.getClippingRect({
            element:
              (a = await (b.isElement == null ? void 0 : b.isElement(ot))) == null || a
                ? ot
                : ot.contextElement ||
                  (await (b.getDocumentElement == null
                    ? void 0
                    : b.getDocumentElement(F.floating))),
            boundary: O,
            rootBoundary: K,
            strategy: z,
          }),
        ),
        r = R === "floating" ? { ..._.floating, x: c, y } : _.reference,
        g = await (b.getOffsetParent == null ? void 0 : b.getOffsetParent(F.floating)),
        x = (await (b.isElement == null ? void 0 : b.isElement(g)))
          ? (await (b.getScale == null ? void 0 : b.getScale(g))) || { x: 1, y: 1 }
          : { x: 1, y: 1 },
        C = Be(
          b.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await b.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: F,
                rect: r,
                offsetParent: g,
                strategy: z,
              })
            : r,
        )
      return {
        top: (it.top - C.top + W.top) / x.y,
        bottom: (C.bottom - it.bottom + W.bottom) / x.y,
        left: (it.left - C.left + W.left) / x.x,
        right: (C.right - it.right + W.right) / x.x,
      }
    }
    var we = function (L) {
      return (
        L === void 0 && (L = {}),
        {
          name: "flip",
          options: L,
          async fn(U) {
            var a, c
            let {
                placement: y,
                middlewareData: b,
                rects: _,
                initialPlacement: F,
                platform: z,
                elements: O,
              } = U,
              {
                mainAxis: K = !0,
                crossAxis: R = !0,
                fallbackPlacements: G,
                fallbackStrategy: X = "bestFit",
                fallbackAxisSideDirection: W = "none",
                flipAlignment: ot = !0,
                ...it
              } = De(L, U)
            if ((a = b.arrow) != null && a.alignmentOffset) return {}
            let r = te(y),
              g = te(F) === F,
              x = await (z.isRTL == null ? void 0 : z.isRTL(O.floating)),
              C = G || (g || !ot ? [_e(F)] : an(F))
            !G && W !== "none" && C.push(...xe(F, ot, W, x))
            let B = [F, ...C],
              I = await tn(U, it),
              et = [],
              nt = ((c = b.flip) == null ? void 0 : c.overflows) || []
            if ((K && et.push(I[r]), R)) {
              let ft = ce(y, _, x)
              et.push(I[ft[0]], I[ft[1]])
            }
            if (((nt = [...nt, { placement: y, overflows: et }]), !et.every((ft) => ft <= 0))) {
              var lt, bt
              let ft = (((lt = b.flip) == null ? void 0 : lt.index) || 0) + 1,
                ht = B[ft]
              if (ht) return { data: { index: ft, overflows: nt }, reset: { placement: ht } }
              let ct =
                (bt = nt
                  .filter((yt) => yt.overflows[0] <= 0)
                  .sort((yt, Dt) => yt.overflows[1] - Dt.overflows[1])[0]) == null
                  ? void 0
                  : bt.placement
              if (!ct)
                switch (X) {
                  case "bestFit": {
                    var Bt
                    let yt =
                      (Bt = nt
                        .map((Dt) => [
                          Dt.placement,
                          Dt.overflows.filter((Rt) => Rt > 0).reduce((Rt, le) => Rt + le, 0),
                        ])
                        .sort((Dt, Rt) => Dt[1] - Rt[1])[0]) == null
                        ? void 0
                        : Bt[0]
                    yt && (ct = yt)
                    break
                  }
                  case "initialPlacement":
                    ct = F
                    break
                }
              if (y !== ct) return { reset: { placement: ct } }
            }
            return {}
          },
        }
      )
    }
    function en(L) {
      let U = de(...L.map((b) => b.left)),
        a = de(...L.map((b) => b.top)),
        c = Vt(...L.map((b) => b.right)),
        y = Vt(...L.map((b) => b.bottom))
      return { x: U, y: a, width: c - U, height: y - a }
    }
    function Pe(L) {
      let U = L.slice().sort((y, b) => y.y - b.y),
        a = [],
        c = null
      for (let y = 0; y < U.length; y++) {
        let b = U[y]
        !c || b.y - c.y > c.height / 2 ? a.push([b]) : a[a.length - 1].push(b), (c = b)
      }
      return a.map((y) => Be(en(y)))
    }
    var nn = function (L) {
        return (
          L === void 0 && (L = {}),
          {
            name: "inline",
            options: L,
            async fn(U) {
              let { placement: a, elements: c, rects: y, platform: b, strategy: _ } = U,
                { padding: F = 2, x: z, y: O } = De(L, U),
                K = Array.from(
                  (await (b.getClientRects == null ? void 0 : b.getClientRects(c.reference))) || [],
                ),
                R = Pe(K),
                G = Be(en(K)),
                X = Re(F)
              function W() {
                if (R.length === 2 && R[0].left > R[1].right && z != null && O != null)
                  return (
                    R.find(
                      (it) =>
                        z > it.left - X.left &&
                        z < it.right + X.right &&
                        O > it.top - X.top &&
                        O < it.bottom + X.bottom,
                    ) || G
                  )
                if (R.length >= 2) {
                  if (Ue(a) === "y") {
                    let bt = R[0],
                      Bt = R[R.length - 1],
                      ft = te(a) === "top",
                      ht = bt.top,
                      ct = Bt.bottom,
                      yt = ft ? bt.left : Bt.left,
                      Dt = ft ? bt.right : Bt.right,
                      Rt = Dt - yt,
                      le = ct - ht
                    return {
                      top: ht,
                      bottom: ct,
                      left: yt,
                      right: Dt,
                      width: Rt,
                      height: le,
                      x: yt,
                      y: ht,
                    }
                  }
                  let it = te(a) === "left",
                    r = Vt(...R.map((bt) => bt.right)),
                    g = de(...R.map((bt) => bt.left)),
                    x = R.filter((bt) => (it ? bt.left === g : bt.right === r)),
                    C = x[0].top,
                    B = x[x.length - 1].bottom,
                    I = g,
                    et = r,
                    nt = et - I,
                    lt = B - C
                  return {
                    top: C,
                    bottom: B,
                    left: I,
                    right: et,
                    width: nt,
                    height: lt,
                    x: I,
                    y: C,
                  }
                }
                return G
              }
              let ot = await b.getElementRects({
                reference: { getBoundingClientRect: W },
                floating: c.floating,
                strategy: _,
              })
              return y.reference.x !== ot.reference.x ||
                y.reference.y !== ot.reference.y ||
                y.reference.width !== ot.reference.width ||
                y.reference.height !== ot.reference.height
                ? { reset: { rects: ot } }
                : {}
            },
          }
        )
      },
      Ve = function (L) {
        return (
          L === void 0 && (L = {}),
          {
            name: "shift",
            options: L,
            async fn(U) {
              let { x: a, y: c, placement: y } = U,
                {
                  mainAxis: b = !0,
                  crossAxis: _ = !1,
                  limiter: F = {
                    fn: (it) => {
                      let { x: r, y: g } = it
                      return { x: r, y: g }
                    },
                  },
                  ...z
                } = De(L, U),
                O = { x: a, y: c },
                K = await tn(U, z),
                R = Ue(te(y)),
                G = vn(R),
                X = O[G],
                W = O[R]
              if (b) {
                let it = G === "y" ? "top" : "left",
                  r = G === "y" ? "bottom" : "right",
                  g = X + K[it],
                  x = X - K[r]
                X = se(g, X, x)
              }
              if (_) {
                let it = R === "y" ? "top" : "left",
                  r = R === "y" ? "bottom" : "right",
                  g = W + K[it],
                  x = W - K[r]
                W = se(g, W, x)
              }
              let ot = F.fn({ ...U, [G]: X, [R]: W })
              return { ...ot, data: { x: ot.x - a, y: ot.y - c } }
            },
          }
        )
      }
    function Ae(L) {
      return Ct(L) ? (L.nodeName || "").toLowerCase() : "#document"
    }
    function Z(L) {
      var U
      return (L == null || (U = L.ownerDocument) == null ? void 0 : U.defaultView) || window
    }
    function vt(L) {
      var U
      return (U = (Ct(L) ? L.ownerDocument : L.document) || window.document) == null
        ? void 0
        : U.documentElement
    }
    function Ct(L) {
      return L instanceof Node || L instanceof Z(L).Node
    }
    function Nt(L) {
      return L instanceof Element || L instanceof Z(L).Element
    }
    function qt(L) {
      return L instanceof HTMLElement || L instanceof Z(L).HTMLElement
    }
    function Tt(L) {
      return typeof ShadowRoot > "u" ? !1 : L instanceof ShadowRoot || L instanceof Z(L).ShadowRoot
    }
    function jt(L) {
      let { overflow: U, overflowX: a, overflowY: c, display: y } = Lt(L)
      return (
        /auto|scroll|overlay|hidden|clip/.test(U + c + a) && !["inline", "contents"].includes(y)
      )
    }
    function fe(L) {
      return ["table", "td", "th"].includes(Ae(L))
    }
    function Gt(L) {
      let U = ue(),
        a = Lt(L)
      return (
        a.transform !== "none" ||
        a.perspective !== "none" ||
        (a.containerType ? a.containerType !== "normal" : !1) ||
        (!U && (a.backdropFilter ? a.backdropFilter !== "none" : !1)) ||
        (!U && (a.filter ? a.filter !== "none" : !1)) ||
        ["transform", "perspective", "filter"].some((c) => (a.willChange || "").includes(c)) ||
        ["paint", "layout", "strict", "content"].some((c) => (a.contain || "").includes(c))
      )
    }
    function Ht(L) {
      let U = zt(L)
      for (; qt(U) && !St(U); ) {
        if (Gt(U)) return U
        U = zt(U)
      }
      return null
    }
    function ue() {
      return typeof CSS > "u" || !CSS.supports
        ? !1
        : CSS.supports("-webkit-backdrop-filter", "none")
    }
    function St(L) {
      return ["html", "body", "#document"].includes(Ae(L))
    }
    function Lt(L) {
      return Z(L).getComputedStyle(L)
    }
    function he(L) {
      return Nt(L)
        ? { scrollLeft: L.scrollLeft, scrollTop: L.scrollTop }
        : { scrollLeft: L.pageXOffset, scrollTop: L.pageYOffset }
    }
    function zt(L) {
      if (Ae(L) === "html") return L
      let U = L.assignedSlot || L.parentNode || (Tt(L) && L.host) || vt(L)
      return Tt(U) ? U.host : U
    }
    function ke(L) {
      let U = zt(L)
      return St(U) ? (L.ownerDocument ? L.ownerDocument.body : L.body) : qt(U) && jt(U) ? U : ke(U)
    }
    function Ke(L, U, a) {
      var c
      U === void 0 && (U = []), a === void 0 && (a = !0)
      let y = ke(L),
        b = y === ((c = L.ownerDocument) == null ? void 0 : c.body),
        _ = Z(y)
      return b
        ? U.concat(
            _,
            _.visualViewport || [],
            jt(y) ? y : [],
            _.frameElement && a ? Ke(_.frameElement) : [],
          )
        : U.concat(y, Ke(y, [], a))
    }
    function Te(L) {
      let U = Lt(L),
        a = parseFloat(U.width) || 0,
        c = parseFloat(U.height) || 0,
        y = qt(L),
        b = y ? L.offsetWidth : a,
        _ = y ? L.offsetHeight : c,
        F = Se(a) !== b || Se(c) !== _
      return F && ((a = b), (c = _)), { width: a, height: c, $: F }
    }
    function Je(L) {
      return Nt(L) ? L : L.contextElement
    }
    function wn(L) {
      let U = Je(L)
      if (!qt(U)) return ne(1)
      let a = U.getBoundingClientRect(),
        { width: c, height: y, $: b } = Te(U),
        _ = (b ? Se(a.width) : a.width) / c,
        F = (b ? Se(a.height) : a.height) / y
      return (
        (!_ || !Number.isFinite(_)) && (_ = 1),
        (!F || !Number.isFinite(F)) && (F = 1),
        { x: _, y: F }
      )
    }
    var xn = ne(0)
    function bn(L) {
      let U = Z(L)
      return !ue() || !U.visualViewport
        ? xn
        : { x: U.visualViewport.offsetLeft, y: U.visualViewport.offsetTop }
    }
    function kn(L, U, a) {
      return U === void 0 && (U = !1), !a || (U && a !== Z(L)) ? !1 : U
    }
    function cn(L, U, a, c) {
      U === void 0 && (U = !1), a === void 0 && (a = !1)
      let y = L.getBoundingClientRect(),
        b = Je(L),
        _ = ne(1)
      U && (c ? Nt(c) && (_ = wn(c)) : (_ = wn(L)))
      let F = kn(b, a, c) ? bn(b) : ne(0),
        z = (y.left + F.x) / _.x,
        O = (y.top + F.y) / _.y,
        K = y.width / _.x,
        R = y.height / _.y
      if (b) {
        let G = Z(b),
          X = c && Nt(c) ? Z(c) : c,
          W = G,
          ot = W.frameElement
        for (; ot && c && X !== W; ) {
          let it = wn(ot),
            r = ot.getBoundingClientRect(),
            g = Lt(ot),
            x = r.left + (ot.clientLeft + parseFloat(g.paddingLeft)) * it.x,
            C = r.top + (ot.clientTop + parseFloat(g.paddingTop)) * it.y
          ;(z *= it.x),
            (O *= it.y),
            (K *= it.x),
            (R *= it.y),
            (z += x),
            (O += C),
            (W = Z(ot)),
            (ot = W.frameElement)
        }
      }
      return Be({ width: K, height: R, x: z, y: O })
    }
    var Cn = [":popover-open", ":modal"]
    function $n(L) {
      return Cn.some((U) => {
        try {
          return L.matches(U)
        } catch {
          return !1
        }
      })
    }
    function On(L) {
      let { elements: U, rect: a, offsetParent: c, strategy: y } = L,
        b = y === "fixed",
        _ = vt(c),
        F = U ? $n(U.floating) : !1
      if (c === _ || (F && b)) return a
      let z = { scrollLeft: 0, scrollTop: 0 },
        O = ne(1),
        K = ne(0),
        R = qt(c)
      if ((R || (!R && !b)) && ((Ae(c) !== "body" || jt(_)) && (z = he(c)), qt(c))) {
        let G = cn(c)
        ;(O = wn(c)), (K.x = G.x + c.clientLeft), (K.y = G.y + c.clientTop)
      }
      return {
        width: a.width * O.x,
        height: a.height * O.y,
        x: a.x * O.x - z.scrollLeft * O.x + K.x,
        y: a.y * O.y - z.scrollTop * O.y + K.y,
      }
    }
    function In(L) {
      return Array.from(L.getClientRects())
    }
    function Dn(L) {
      return cn(vt(L)).left + he(L).scrollLeft
    }
    function Rn(L) {
      let U = vt(L),
        a = he(L),
        c = L.ownerDocument.body,
        y = Vt(U.scrollWidth, U.clientWidth, c.scrollWidth, c.clientWidth),
        b = Vt(U.scrollHeight, U.clientHeight, c.scrollHeight, c.clientHeight),
        _ = -a.scrollLeft + Dn(L),
        F = -a.scrollTop
      return (
        Lt(c).direction === "rtl" && (_ += Vt(U.clientWidth, c.clientWidth) - y),
        { width: y, height: b, x: _, y: F }
      )
    }
    function h(L, U) {
      let a = Z(L),
        c = vt(L),
        y = a.visualViewport,
        b = c.clientWidth,
        _ = c.clientHeight,
        F = 0,
        z = 0
      if (y) {
        ;(b = y.width), (_ = y.height)
        let O = ue()
        ;(!O || (O && U === "fixed")) && ((F = y.offsetLeft), (z = y.offsetTop))
      }
      return { width: b, height: _, x: F, y: z }
    }
    function M(L, U) {
      let a = cn(L, !0, U === "fixed"),
        c = a.top + L.clientTop,
        y = a.left + L.clientLeft,
        b = qt(L) ? wn(L) : ne(1),
        _ = L.clientWidth * b.x,
        F = L.clientHeight * b.y,
        z = y * b.x,
        O = c * b.y
      return { width: _, height: F, x: z, y: O }
    }
    function T(L, U, a) {
      let c
      if (U === "viewport") c = h(L, a)
      else if (U === "document") c = Rn(vt(L))
      else if (Nt(U)) c = M(U, a)
      else {
        let y = bn(L)
        c = { ...U, x: U.x - y.x, y: U.y - y.y }
      }
      return Be(c)
    }
    function j(L, U) {
      let a = zt(L)
      return a === U || !Nt(a) || St(a) ? !1 : Lt(a).position === "fixed" || j(a, U)
    }
    function V(L, U) {
      let a = U.get(L)
      if (a) return a
      let c = Ke(L, [], !1).filter((F) => Nt(F) && Ae(F) !== "body"),
        y = null,
        b = Lt(L).position === "fixed",
        _ = b ? zt(L) : L
      for (; Nt(_) && !St(_); ) {
        let F = Lt(_),
          z = Gt(_)
        !z && F.position === "fixed" && (y = null),
          (
            b
              ? !z && !y
              : (!z &&
                  F.position === "static" &&
                  y &&
                  ["absolute", "fixed"].includes(y.position)) ||
                (jt(_) && !z && j(L, _))
          )
            ? (c = c.filter((O) => O !== _))
            : (y = F),
          (_ = zt(_))
      }
      return U.set(L, c), c
    }
    function J(L) {
      let { element: U, boundary: a, rootBoundary: c, strategy: y } = L,
        b = [...(a === "clippingAncestors" ? V(U, this._c) : [].concat(a)), c],
        _ = b[0],
        F = b.reduce(
          (z, O) => {
            let K = T(U, O, y)
            return (
              (z.top = Vt(K.top, z.top)),
              (z.right = de(K.right, z.right)),
              (z.bottom = de(K.bottom, z.bottom)),
              (z.left = Vt(K.left, z.left)),
              z
            )
          },
          T(U, _, y),
        )
      return { width: F.right - F.left, height: F.bottom - F.top, x: F.left, y: F.top }
    }
    function dt(L) {
      let { width: U, height: a } = Te(L)
      return { width: U, height: a }
    }
    function pt(L, U, a) {
      let c = qt(U),
        y = vt(U),
        b = a === "fixed",
        _ = cn(L, !0, b, U),
        F = { scrollLeft: 0, scrollTop: 0 },
        z = ne(0)
      if (c || (!c && !b))
        if (((Ae(U) !== "body" || jt(y)) && (F = he(U)), c)) {
          let R = cn(U, !0, b, U)
          ;(z.x = R.x + U.clientLeft), (z.y = R.y + U.clientTop)
        } else y && (z.x = Dn(y))
      let O = _.left + F.scrollLeft - z.x,
        K = _.top + F.scrollTop - z.y
      return { x: O, y: K, width: _.width, height: _.height }
    }
    function Et(L, U) {
      return !qt(L) || Lt(L).position === "fixed" ? null : U ? U(L) : L.offsetParent
    }
    function Pt(L, U) {
      let a = Z(L)
      if (!qt(L) || $n(L)) return a
      let c = Et(L, U)
      for (; c && fe(c) && Lt(c).position === "static"; ) c = Et(c, U)
      return c && (Ae(c) === "html" || (Ae(c) === "body" && Lt(c).position === "static" && !Gt(c)))
        ? a
        : c || Ht(L) || a
    }
    var Kt = async function (L) {
      let U = this.getOffsetParent || Pt,
        a = this.getDimensions
      return {
        reference: pt(L.reference, await U(L.floating), L.strategy),
        floating: { x: 0, y: 0, ...(await a(L.floating)) },
      }
    }
    function me(L) {
      return Lt(L).direction === "rtl"
    }
    var oe = {
        convertOffsetParentRelativeRectToViewportRelativeRect: On,
        getDocumentElement: vt,
        getClippingRect: J,
        getOffsetParent: Pt,
        getElementRects: Kt,
        getClientRects: In,
        getDimensions: dt,
        getScale: wn,
        isElement: Nt,
        isRTL: me,
      },
      Zt = Ve,
      Ft = we,
      ae = nn,
      Fe = (L, U, a) => {
        let c = new Map(),
          y = { platform: oe, ...a },
          b = { ...y.platform, _c: c }
        return We(L, U, { ...y, platform: b })
      },
      Qe = Object.hasOwnProperty,
      ze = Yt(on(), 1),
      Me = (0, ze.default)(),
      fn = (L, U, a) => {
        let c = new URL(L.getAttribute(U), a)
        L.setAttribute(U, c.pathname + c.hash)
      }
    function Mn(L, U) {
      L.querySelectorAll('[href^="./"], [href^="../"]').forEach((a) => fn(a, "href", U)),
        L.querySelectorAll('[src^="./"], [src^="../"]').forEach((a) => fn(a, "src", U))
    }
    var Bn = new DOMParser()
    async function hn({ clientX: L, clientY: U }) {
      let a = this
      if (a.dataset.noPopover === "true") return
      async function c(W) {
        let { x: ot, y: it } = await Fe(a, W, { middleware: [ae({ x: L, y: U }), Zt(), Ft()] })
        Object.assign(W.style, { left: `${ot}px`, top: `${it}px` })
      }
      let y = () => [...a.children].some((W) => W.classList.contains("popover"))
      if (y()) return c(a.lastChild)
      let b = new URL(document.location.href)
      ;(b.hash = ""), (b.search = "")
      let _ = new URL(a.href),
        F = _.hash
      if (((_.hash = ""), (_.search = ""), b.toString() === _.toString())) return
      let z = await fetch(`${_}`).catch((W) => {
        console.error(W)
      })
      if (y() || !z) return
      let [O] = z.headers.get("Content-Type").split(";"),
        [K, R] = O.split("/"),
        G = document.createElement("div")
      G.classList.add("popover")
      let X = document.createElement("div")
      switch (
        (X.classList.add("popover-inner"),
        G.appendChild(X),
        (X.dataset.contentType = O ?? void 0),
        K)
      ) {
        case "image":
          let W = document.createElement("img")
          ;(W.src = _.toString()), (W.alt = _.pathname), X.appendChild(W)
          break
        case "application":
          switch (R) {
            case "pdf":
              let g = document.createElement("iframe")
              ;(g.src = _.toString()), X.appendChild(g)
              break
            default:
              break
          }
          break
        default:
          let ot = await z.text(),
            it = Bn.parseFromString(ot, "text/html")
          Mn(it, _)
          let r
          if (it.body.dataset.enablePreview === "false") {
            let g = document.createElement("div")
            ;(g.innerHTML = "<p>L'aper\xE7u est d\xE9sactiv\xE9 sur cette page.</p>"), (r = [g])
          } else r = [...it.getElementsByClassName("popover-hint")]
          if (r.length === 0) return
          r.forEach((g) => X.appendChild(g))
      }
      if ((c(G), a.appendChild(G), F !== "")) {
        let W = X.querySelector(F)
        W && X.scroll({ top: W.offsetTop - 12, behavior: "instant" })
      }
    }
    document.addEventListener("nav", () => {
      let L = [...document.getElementsByClassName("internal")]
      for (let U of L)
        U.addEventListener("mouseenter", hn),
          window.addCleanup(() => U.removeEventListener("mouseenter", hn))
    })
  })(),
  (function () {
    const je = document.createElement("script")
    ;(je.src = "https://plausible.io/js/script.manual.js"),
      je.setAttribute("data-domain", location.hostname),
      (je.defer = !0),
      document.head.appendChild(je),
      (window.plausible =
        window.plausible ||
        function () {
          ;(window.plausible.q = window.plausible.q || []).push(arguments)
        }),
      document.addEventListener("nav", () => {
        plausible("pageview")
      })
  })(),
  (function () {
    var je = Object.create,
      Ne = Object.defineProperty,
      qe = Object.getOwnPropertyDescriptor,
      ve = Object.getOwnPropertyNames,
      Ee = Object.getPrototypeOf,
      Jt = Object.prototype.hasOwnProperty,
      Oe = (Z, vt) => () => (vt || Z((vt = { exports: {} }).exports, vt), vt.exports),
      Ie = (Z, vt, Ct, Nt) => {
        if ((vt && typeof vt == "object") || typeof vt == "function")
          for (let qt of ve(vt))
            !Jt.call(Z, qt) &&
              qt !== Ct &&
              Ne(Z, qt, { get: () => vt[qt], enumerable: !(Nt = qe(vt, qt)) || Nt.enumerable })
        return Z
      },
      Yt = (Z, vt, Ct) => (
        (Ct = Z != null ? je(Ee(Z)) : {}),
        Ie(vt || !Z || !Z.__esModule ? Ne(Ct, "default", { value: Z, enumerable: !0 }) : Ct, Z)
      ),
      on = Oe((Z, vt) => {
        "use strict"
        vt.exports = Nt
        function Ct(Tt) {
          return Tt instanceof Buffer
            ? Buffer.from(Tt)
            : new Tt.constructor(Tt.buffer.slice(), Tt.byteOffset, Tt.length)
        }
        function Nt(Tt) {
          if (((Tt = Tt || {}), Tt.circles)) return qt(Tt)
          return Tt.proto ? Gt : fe
          function jt(Ht, ue) {
            for (
              var St = Object.keys(Ht), Lt = new Array(St.length), he = 0;
              he < St.length;
              he++
            ) {
              var zt = St[he],
                ke = Ht[zt]
              typeof ke != "object" || ke === null
                ? (Lt[zt] = ke)
                : ke instanceof Date
                  ? (Lt[zt] = new Date(ke))
                  : ArrayBuffer.isView(ke)
                    ? (Lt[zt] = Ct(ke))
                    : (Lt[zt] = ue(ke))
            }
            return Lt
          }
          function fe(Ht) {
            if (typeof Ht != "object" || Ht === null) return Ht
            if (Ht instanceof Date) return new Date(Ht)
            if (Array.isArray(Ht)) return jt(Ht, fe)
            if (Ht instanceof Map) return new Map(jt(Array.from(Ht), fe))
            if (Ht instanceof Set) return new Set(jt(Array.from(Ht), fe))
            var ue = {}
            for (var St in Ht)
              if (Object.hasOwnProperty.call(Ht, St) !== !1) {
                var Lt = Ht[St]
                typeof Lt != "object" || Lt === null
                  ? (ue[St] = Lt)
                  : Lt instanceof Date
                    ? (ue[St] = new Date(Lt))
                    : Lt instanceof Map
                      ? (ue[St] = new Map(jt(Array.from(Lt), fe)))
                      : Lt instanceof Set
                        ? (ue[St] = new Set(jt(Array.from(Lt), fe)))
                        : ArrayBuffer.isView(Lt)
                          ? (ue[St] = Ct(Lt))
                          : (ue[St] = fe(Lt))
              }
            return ue
          }
          function Gt(Ht) {
            if (typeof Ht != "object" || Ht === null) return Ht
            if (Ht instanceof Date) return new Date(Ht)
            if (Array.isArray(Ht)) return jt(Ht, Gt)
            if (Ht instanceof Map) return new Map(jt(Array.from(Ht), Gt))
            if (Ht instanceof Set) return new Set(jt(Array.from(Ht), Gt))
            var ue = {}
            for (var St in Ht) {
              var Lt = Ht[St]
              typeof Lt != "object" || Lt === null
                ? (ue[St] = Lt)
                : Lt instanceof Date
                  ? (ue[St] = new Date(Lt))
                  : Lt instanceof Map
                    ? (ue[St] = new Map(jt(Array.from(Lt), Gt)))
                    : Lt instanceof Set
                      ? (ue[St] = new Set(jt(Array.from(Lt), Gt)))
                      : ArrayBuffer.isView(Lt)
                        ? (ue[St] = Ct(Lt))
                        : (ue[St] = Gt(Lt))
            }
            return ue
          }
        }
        function qt(Tt) {
          var jt = [],
            fe = []
          return Tt.proto ? ue : Ht
          function Gt(St, Lt) {
            for (
              var he = Object.keys(St), zt = new Array(he.length), ke = 0;
              ke < he.length;
              ke++
            ) {
              var Ke = he[ke],
                Te = St[Ke]
              if (typeof Te != "object" || Te === null) zt[Ke] = Te
              else if (Te instanceof Date) zt[Ke] = new Date(Te)
              else if (ArrayBuffer.isView(Te)) zt[Ke] = Ct(Te)
              else {
                var Je = jt.indexOf(Te)
                Je !== -1 ? (zt[Ke] = fe[Je]) : (zt[Ke] = Lt(Te))
              }
            }
            return zt
          }
          function Ht(St) {
            if (typeof St != "object" || St === null) return St
            if (St instanceof Date) return new Date(St)
            if (Array.isArray(St)) return Gt(St, Ht)
            if (St instanceof Map) return new Map(Gt(Array.from(St), Ht))
            if (St instanceof Set) return new Set(Gt(Array.from(St), Ht))
            var Lt = {}
            jt.push(St), fe.push(Lt)
            for (var he in St)
              if (Object.hasOwnProperty.call(St, he) !== !1) {
                var zt = St[he]
                if (typeof zt != "object" || zt === null) Lt[he] = zt
                else if (zt instanceof Date) Lt[he] = new Date(zt)
                else if (zt instanceof Map) Lt[he] = new Map(Gt(Array.from(zt), Ht))
                else if (zt instanceof Set) Lt[he] = new Set(Gt(Array.from(zt), Ht))
                else if (ArrayBuffer.isView(zt)) Lt[he] = Ct(zt)
                else {
                  var ke = jt.indexOf(zt)
                  ke !== -1 ? (Lt[he] = fe[ke]) : (Lt[he] = Ht(zt))
                }
              }
            return jt.pop(), fe.pop(), Lt
          }
          function ue(St) {
            if (typeof St != "object" || St === null) return St
            if (St instanceof Date) return new Date(St)
            if (Array.isArray(St)) return Gt(St, ue)
            if (St instanceof Map) return new Map(Gt(Array.from(St), ue))
            if (St instanceof Set) return new Set(Gt(Array.from(St), ue))
            var Lt = {}
            jt.push(St), fe.push(Lt)
            for (var he in St) {
              var zt = St[he]
              if (typeof zt != "object" || zt === null) Lt[he] = zt
              else if (zt instanceof Date) Lt[he] = new Date(zt)
              else if (zt instanceof Map) Lt[he] = new Map(Gt(Array.from(zt), ue))
              else if (zt instanceof Set) Lt[he] = new Set(Gt(Array.from(zt), ue))
              else if (ArrayBuffer.isView(zt)) Lt[he] = Ct(zt)
              else {
                var ke = jt.indexOf(zt)
                ke !== -1 ? (Lt[he] = fe[ke]) : (Lt[he] = ue(zt))
              }
            }
            return jt.pop(), fe.pop(), Lt
          }
        }
      }),
      de = (Z) => (vt, Ct) => vt[`node${Z}`] === Ct[`node${Z}`],
      Vt = de("Name"),
      Se = de("Type"),
      ne = de("Value")
    function ye(Z, vt) {
      if (Z.attributes.length === 0 && vt.attributes.length === 0) return []
      let Ct = [],
        Nt = new Map(),
        qt = new Map()
      for (let Tt of Z.attributes) Nt.set(Tt.name, Tt.value)
      for (let Tt of vt.attributes) {
        let jt = Nt.get(Tt.name)
        Tt.value === jt
          ? Nt.delete(Tt.name)
          : (typeof jt < "u" && Nt.delete(Tt.name), qt.set(Tt.name, Tt.value))
      }
      for (let Tt of Nt.keys()) Ct.push({ type: 5, name: Tt })
      for (let [Tt, jt] of qt.entries()) Ct.push({ type: 4, name: Tt, value: jt })
      return Ct
    }
    function mn(Z, vt = !0) {
      let Ct = `${Z.localName}`
      for (let { name: Nt, value: qt } of Z.attributes)
        (vt && Nt.startsWith("data-")) || (Ct += `[${Nt}=${qt}]`)
      return (Ct += Z.innerHTML), Ct
    }
    function se(Z) {
      switch (Z.tagName) {
        case "BASE":
        case "TITLE":
          return Z.localName
        case "META": {
          if (Z.hasAttribute("name")) return `meta[name="${Z.getAttribute("name")}"]`
          if (Z.hasAttribute("property")) return `meta[name="${Z.getAttribute("property")}"]`
          break
        }
        case "LINK": {
          if (Z.hasAttribute("rel") && Z.hasAttribute("href"))
            return `link[rel="${Z.getAttribute("rel")}"][href="${Z.getAttribute("href")}"]`
          if (Z.hasAttribute("href")) return `link[href="${Z.getAttribute("href")}"]`
          break
        }
      }
      return mn(Z)
    }
    function De(Z) {
      let [vt, Ct = ""] = Z.split("?")
      return `${vt}?t=${Date.now()}&${Ct.replace(/t=\d+/g, "")}`
    }
    function te(Z) {
      if (Z.nodeType === 1 && Z.hasAttribute("data-persist")) return Z
      if (Z.nodeType === 1 && Z.localName === "script") {
        let vt = document.createElement("script")
        for (let { name: Ct, value: Nt } of Z.attributes)
          Ct === "src" && (Nt = De(Nt)), vt.setAttribute(Ct, Nt)
        return (vt.innerHTML = Z.innerHTML), vt
      }
      return Z.cloneNode(!0)
    }
    function Ye(Z, vt) {
      if (Z.children.length === 0 && vt.children.length === 0) return []
      let Ct = [],
        Nt = new Map(),
        qt = new Map(),
        Tt = new Map()
      for (let jt of Z.children) Nt.set(se(jt), jt)
      for (let jt of vt.children) {
        let fe = se(jt),
          Gt = Nt.get(fe)
        Gt ? mn(jt, !1) !== mn(Gt, !1) && qt.set(fe, te(jt)) : Tt.set(fe, te(jt)), Nt.delete(fe)
      }
      for (let jt of Z.childNodes) {
        if (jt.nodeType === 1) {
          let fe = se(jt)
          if (Nt.has(fe)) {
            Ct.push({ type: 1 })
            continue
          } else if (qt.has(fe)) {
            let Gt = qt.get(fe)
            Ct.push({ type: 3, attributes: ye(jt, Gt), children: vn(jt, Gt) })
            continue
          }
        }
        Ct.push(void 0)
      }
      for (let jt of Tt.values()) Ct.push({ type: 0, node: te(jt) })
      return Ct
    }
    function vn(Z, vt) {
      let Ct = [],
        Nt = Math.max(Z.childNodes.length, vt.childNodes.length)
      for (let qt = 0; qt < Nt; qt++) {
        let Tt = Z.childNodes.item(qt),
          jt = vt.childNodes.item(qt)
        Ct[qt] = Ge(Tt, jt)
      }
      return Ct
    }
    function Ge(Z, vt) {
      if (!Z) return { type: 0, node: te(vt) }
      if (!vt) return { type: 1 }
      if (Se(Z, vt)) {
        if (Z.nodeType === 3) {
          let Ct = Z.nodeValue,
            Nt = vt.nodeValue
          if (Ct.trim().length === 0 && Nt.trim().length === 0) return
        }
        if (Z.nodeType === 1) {
          if (Vt(Z, vt)) {
            let Ct = Z.tagName === "HEAD" ? Ye : vn
            return { type: 3, attributes: ye(Z, vt), children: Ct(Z, vt) }
          }
          return { type: 2, node: te(vt) }
        } else
          return Z.nodeType === 9
            ? Ge(Z.documentElement, vt.documentElement)
            : ne(Z, vt)
              ? void 0
              : { type: 2, value: vt.nodeValue }
      }
      return { type: 2, node: te(vt) }
    }
    function Ue(Z, vt) {
      if (vt.length !== 0)
        for (let { type: Ct, name: Nt, value: qt } of vt)
          Ct === 5 ? Z.removeAttribute(Nt) : Ct === 4 && Z.setAttribute(Nt, qt)
    }
    async function ie(Z, vt, Ct) {
      if (!vt) return
      let Nt
      switch (
        (Z.nodeType === 9 ? ((Z = Z.documentElement), (Nt = Z)) : Ct ? (Nt = Ct) : (Nt = Z),
        vt.type)
      ) {
        case 0: {
          let { node: qt } = vt
          Z.appendChild(qt)
          return
        }
        case 1: {
          if (!Nt) return
          Z.removeChild(Nt)
          return
        }
        case 2: {
          if (!Nt) return
          let { node: qt, value: Tt } = vt
          if (typeof Tt == "string") {
            Nt.nodeValue = Tt
            return
          }
          Nt.replaceWith(qt)
          return
        }
        case 3: {
          if (!Nt) return
          let { attributes: qt, children: Tt } = vt
          Ue(Nt, qt)
          let jt = Array.from(Nt.childNodes)
          await Promise.all(Tt.map((fe, Gt) => ie(Nt, fe, jt[Gt])))
          return
        }
      }
    }
    function ce(Z, vt) {
      let Ct = Ge(Z, vt)
      return ie(Z, Ct)
    }
    var an = Object.hasOwnProperty,
      pe = Yt(on(), 1),
      An = (0, pe.default)()
    function xe(Z) {
      return Z.document.body.dataset.slug
    }
    var _e = (Z, vt, Ct) => {
      let Nt = new URL(Z.getAttribute(vt), Ct)
      Z.setAttribute(vt, Nt.pathname + Nt.hash)
    }
    function yn(Z, vt) {
      Z.querySelectorAll('[href^="./"], [href^="../"]').forEach((Ct) => _e(Ct, "href", vt)),
        Z.querySelectorAll('[src^="./"], [src^="../"]').forEach((Ct) => _e(Ct, "src", vt))
    }
    var Re = 1,
      Be = document.createElement("route-announcer"),
      sn = (Z) => Z?.nodeType === Re,
      We = (Z) => {
        try {
          let vt = new URL(Z)
          if (window.location.origin === vt.origin) return !0
        } catch {}
        return !1
      },
      tn = (Z) => {
        let vt = Z.origin === window.location.origin,
          Ct = Z.pathname === window.location.pathname
        return vt && Ct
      },
      we = ({ target: Z }) => {
        if (!sn(Z) || Z.attributes.getNamedItem("target")?.value === "_blank") return
        let vt = Z.closest("a")
        if (!vt || "routerIgnore" in vt.dataset) return
        let { href: Ct } = vt
        if (We(Ct))
          return { url: new URL(Ct), scroll: "routerNoscroll" in vt.dataset ? !1 : void 0 }
      }
    function en(Z) {
      let vt = new CustomEvent("nav", { detail: { url: Z } })
      document.dispatchEvent(vt)
    }
    var Pe = new Set()
    window.addCleanup = (Z) => Pe.add(Z)
    var nn
    async function Ve(Z, vt = !1) {
      nn = nn || new DOMParser()
      let Ct = await fetch(`${Z}`)
        .then((Tt) => {
          if (Tt.headers.get("content-type")?.startsWith("text/html")) return Tt.text()
          window.location.assign(Z)
        })
        .catch(() => {
          window.location.assign(Z)
        })
      if (!Ct) return
      Pe.forEach((Tt) => Tt()), Pe.clear()
      let Nt = nn.parseFromString(Ct, "text/html")
      yn(Nt, Z)
      let qt = Nt.querySelector("title")?.textContent
      if (qt) document.title = qt
      else {
        let Tt = document.querySelector("h1")
        qt = Tt?.innerText ?? Tt?.textContent ?? Z.pathname
      }
      Be.textContent !== qt && (Be.textContent = qt),
        (Be.dataset.persist = ""),
        Nt.body.appendChild(Be),
        ce(document.body, Nt.body),
        vt ||
          (Z.hash
            ? document.getElementById(decodeURIComponent(Z.hash.substring(1)))?.scrollIntoView()
            : window.scrollTo({ top: 0 })),
        document.head.querySelectorAll(":not([spa-preserve])").forEach((Tt) => Tt.remove()),
        Nt.head
          .querySelectorAll(":not([spa-preserve])")
          .forEach((Tt) => document.head.appendChild(Tt)),
        vt || history.pushState({}, "", Z),
        en(xe(window)),
        delete Be.dataset.persist
    }
    window.spaNavigate = Ve
    function Ae() {
      return (
        typeof window < "u" &&
          (window.addEventListener("click", async (Z) => {
            let { url: vt } = we(Z) ?? {}
            if (!(!vt || Z.ctrlKey || Z.metaKey)) {
              if ((Z.preventDefault(), tn(vt) && vt.hash)) {
                document.getElementById(decodeURIComponent(vt.hash.substring(1)))?.scrollIntoView(),
                  history.pushState({}, "", vt)
                return
              }
              try {
                Ve(vt, !1)
              } catch {
                window.location.assign(vt)
              }
            }
          }),
          window.addEventListener("popstate", (Z) => {
            let { url: vt } = we(Z) ?? {}
            if (!(window.location.hash && window.location.pathname === vt?.pathname))
              try {
                Ve(new URL(window.location.toString()), !0)
              } catch {
                window.location.reload()
              }
          })),
        new (class {
          go(Z) {
            let vt = new URL(Z, window.location.toString())
            return Ve(vt, !1)
          }
          back() {
            return window.history.back()
          }
          forward() {
            return window.history.forward()
          }
        })()
      )
    }
    if ((Ae(), en(xe(window)), !customElements.get("route-announcer"))) {
      let Z = {
        "aria-live": "assertive",
        "aria-atomic": "true",
        style:
          "position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px",
      }
      customElements.define(
        "route-announcer",
        class extends HTMLElement {
          constructor() {
            super()
          }
          connectedCallback() {
            for (let [vt, Ct] of Object.entries(Z)) this.setAttribute(vt, Ct)
          }
        },
      )
    }
  })()
