;(function () {
  var Be =
      '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>',
    Le =
      '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>'
  document.addEventListener("nav", () => {
    let Oe = document.getElementsByTagName("pre")
    for (let xe = 0; xe < Oe.length; xe++) {
      let Gt = Oe[xe].getElementsByTagName("code")[0]
      if (Gt) {
        let $e = function () {
          navigator.clipboard.writeText(ze).then(
            () => {
              Xt.blur(),
                (Xt.innerHTML = Le),
                setTimeout(() => {
                  ;(Xt.innerHTML = Be), (Xt.style.borderColor = "")
                }, 2e3)
            },
            (rn) => console.error(rn),
          )
        }
        var ge = $e
        let ze = Gt.innerText.replace(
            /\n\n/g,
            `
`,
          ),
          Xt = document.createElement("button")
        ;(Xt.className = "clipboard-button"),
          (Xt.type = "button"),
          (Xt.innerHTML = Be),
          (Xt.ariaLabel = "Copy source"),
          Xt.addEventListener("click", $e),
          window.addCleanup(() => Xt.removeEventListener("click", $e)),
          Oe[xe].prepend(Xt)
      }
    }
  })
})(),
  (function () {
    var Be = Object.create,
      Le = Object.defineProperty,
      Oe = Object.getOwnPropertyDescriptor,
      ge = Object.getOwnPropertyNames,
      xe = Object.getPrototypeOf,
      Gt = Object.prototype.hasOwnProperty,
      $e = (t, n) => () => (n || t((n = { exports: {} }).exports, n), n.exports),
      ze = (t, n, r, o) => {
        if ((n && typeof n == "object") || typeof n == "function")
          for (let l of ge(n))
            !Gt.call(t, l) &&
              l !== r &&
              Le(t, l, { get: () => n[l], enumerable: !(o = Oe(n, l)) || o.enumerable })
        return t
      },
      Xt = (t, n, r) => (
        (r = t != null ? Be(xe(t)) : {}),
        ze(n || !t || !t.__esModule ? Le(r, "default", { value: t, enumerable: !0 }) : r, t)
      ),
      rn = $e((t, n) => {
        "use strict"
        n.exports = o
        function r(c) {
          return c instanceof Buffer
            ? Buffer.from(c)
            : new c.constructor(c.buffer.slice(), c.byteOffset, c.length)
        }
        function o(c) {
          if (((c = c || {}), c.circles)) return l(c)
          return c.proto ? w : y
          function f(x, k) {
            for (var F = Object.keys(x), $ = new Array(F.length), L = 0; L < F.length; L++) {
              var K = F[L],
                X = x[K]
              typeof X != "object" || X === null
                ? ($[K] = X)
                : X instanceof Date
                  ? ($[K] = new Date(X))
                  : ArrayBuffer.isView(X)
                    ? ($[K] = r(X))
                    : ($[K] = k(X))
            }
            return $
          }
          function y(x) {
            if (typeof x != "object" || x === null) return x
            if (x instanceof Date) return new Date(x)
            if (Array.isArray(x)) return f(x, y)
            if (x instanceof Map) return new Map(f(Array.from(x), y))
            if (x instanceof Set) return new Set(f(Array.from(x), y))
            var k = {}
            for (var F in x)
              if (Object.hasOwnProperty.call(x, F) !== !1) {
                var $ = x[F]
                typeof $ != "object" || $ === null
                  ? (k[F] = $)
                  : $ instanceof Date
                    ? (k[F] = new Date($))
                    : $ instanceof Map
                      ? (k[F] = new Map(f(Array.from($), y)))
                      : $ instanceof Set
                        ? (k[F] = new Set(f(Array.from($), y)))
                        : ArrayBuffer.isView($)
                          ? (k[F] = r($))
                          : (k[F] = y($))
              }
            return k
          }
          function w(x) {
            if (typeof x != "object" || x === null) return x
            if (x instanceof Date) return new Date(x)
            if (Array.isArray(x)) return f(x, w)
            if (x instanceof Map) return new Map(f(Array.from(x), w))
            if (x instanceof Set) return new Set(f(Array.from(x), w))
            var k = {}
            for (var F in x) {
              var $ = x[F]
              typeof $ != "object" || $ === null
                ? (k[F] = $)
                : $ instanceof Date
                  ? (k[F] = new Date($))
                  : $ instanceof Map
                    ? (k[F] = new Map(f(Array.from($), w)))
                    : $ instanceof Set
                      ? (k[F] = new Set(f(Array.from($), w)))
                      : ArrayBuffer.isView($)
                        ? (k[F] = r($))
                        : (k[F] = w($))
            }
            return k
          }
        }
        function l(c) {
          var f = [],
            y = []
          return c.proto ? k : x
          function w(F, $) {
            for (var L = Object.keys(F), K = new Array(L.length), X = 0; X < L.length; X++) {
              var Z = L[X],
                Q = F[Z]
              if (typeof Q != "object" || Q === null) K[Z] = Q
              else if (Q instanceof Date) K[Z] = new Date(Q)
              else if (ArrayBuffer.isView(Q)) K[Z] = r(Q)
              else {
                var wt = f.indexOf(Q)
                wt !== -1 ? (K[Z] = y[wt]) : (K[Z] = $(Q))
              }
            }
            return K
          }
          function x(F) {
            if (typeof F != "object" || F === null) return F
            if (F instanceof Date) return new Date(F)
            if (Array.isArray(F)) return w(F, x)
            if (F instanceof Map) return new Map(w(Array.from(F), x))
            if (F instanceof Set) return new Set(w(Array.from(F), x))
            var $ = {}
            f.push(F), y.push($)
            for (var L in F)
              if (Object.hasOwnProperty.call(F, L) !== !1) {
                var K = F[L]
                if (typeof K != "object" || K === null) $[L] = K
                else if (K instanceof Date) $[L] = new Date(K)
                else if (K instanceof Map) $[L] = new Map(w(Array.from(K), x))
                else if (K instanceof Set) $[L] = new Set(w(Array.from(K), x))
                else if (ArrayBuffer.isView(K)) $[L] = r(K)
                else {
                  var X = f.indexOf(K)
                  X !== -1 ? ($[L] = y[X]) : ($[L] = x(K))
                }
              }
            return f.pop(), y.pop(), $
          }
          function k(F) {
            if (typeof F != "object" || F === null) return F
            if (F instanceof Date) return new Date(F)
            if (Array.isArray(F)) return w(F, k)
            if (F instanceof Map) return new Map(w(Array.from(F), k))
            if (F instanceof Set) return new Set(w(Array.from(F), k))
            var $ = {}
            f.push(F), y.push($)
            for (var L in F) {
              var K = F[L]
              if (typeof K != "object" || K === null) $[L] = K
              else if (K instanceof Date) $[L] = new Date(K)
              else if (K instanceof Map) $[L] = new Map(w(Array.from(K), k))
              else if (K instanceof Set) $[L] = new Set(w(Array.from(K), k))
              else if (ArrayBuffer.isView(K)) $[L] = r(K)
              else {
                var X = f.indexOf(K)
                X !== -1 ? ($[L] = y[X]) : ($[L] = k(K))
              }
            }
            return f.pop(), y.pop(), $
          }
        }
      })
    function he(t, n) {
      if (!t) return
      function r(l) {
        l.target === this && (l.preventDefault(), n())
      }
      function o(l) {
        l.key.startsWith("Esc") && (l.preventDefault(), n())
      }
      t?.addEventListener("click", r),
        window.addCleanup(() => t?.removeEventListener("click", r)),
        document.addEventListener("keydown", o),
        window.addCleanup(() => document.removeEventListener("keydown", o))
    }
    function Vt(t) {
      for (; t.firstChild; ) t.removeChild(t.firstChild)
    }
    function Ne(t, ...n) {
      t &&
        n.forEach(([r, o]) => {
          let l = (c) => o(c)
          t.addEventListener(r, l), window.addCleanup(() => t.removeEventListener(r, l))
        })
    }
    function ee(t, n, r = 1e3) {
      let o = performance.now(),
        l = o + r
      function c() {
        let f = performance.now(),
          y = (f - o) / r,
          w = Math.floor(y * n.length)
        if (f < l) {
          let x = n.substring(0, w) + me(n.length - w)
          ;(t.textContent = x), requestAnimationFrame(c)
        } else t.textContent = n
      }
      requestAnimationFrame(c)
    }
    function me(t) {
      let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        r = ""
      for (let o = 0; o < t; o++) r += n.charAt(Math.floor(Math.random() * n.length))
      return r
    }
    var pn = { value: () => {} }
    function ae() {
      for (var t = 0, n = arguments.length, r = {}, o; t < n; ++t) {
        if (!(o = arguments[t] + "") || o in r || /[\s.]/.test(o))
          throw new Error("illegal type: " + o)
        r[o] = []
      }
      return new ke(r)
    }
    function ke(t) {
      this._ = t
    }
    function te(t, n) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function (r) {
          var o = "",
            l = r.indexOf(".")
          if ((l >= 0 && ((o = r.slice(l + 1)), (r = r.slice(0, l))), r && !n.hasOwnProperty(r)))
            throw new Error("unknown type: " + r)
          return { type: r, name: o }
        })
    }
    ke.prototype = ae.prototype = {
      constructor: ke,
      on: function (t, n) {
        var r = this._,
          o = te(t + "", r),
          l,
          c = -1,
          f = o.length
        if (arguments.length < 2) {
          for (; ++c < f; ) if ((l = (t = o[c]).type) && (l = Ke(r[l], t.name))) return l
          return
        }
        if (n != null && typeof n != "function") throw new Error("invalid callback: " + n)
        for (; ++c < f; )
          if ((l = (t = o[c]).type)) r[l] = gn(r[l], t.name, n)
          else if (n == null) for (l in r) r[l] = gn(r[l], t.name, null)
        return this
      },
      copy: function () {
        var t = {},
          n = this._
        for (var r in n) t[r] = n[r].slice()
        return new ke(t)
      },
      call: function (t, n) {
        if ((l = arguments.length - 2) > 0)
          for (var r = new Array(l), o = 0, l, c; o < l; ++o) r[o] = arguments[o + 2]
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
        for (c = this._[t], o = 0, l = c.length; o < l; ++o) c[o].value.apply(n, r)
      },
      apply: function (t, n, r) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
        for (var o = this._[t], l = 0, c = o.length; l < c; ++l) o[l].value.apply(n, r)
      },
    }
    function Ke(t, n) {
      for (var r = 0, o = t.length, l; r < o; ++r) if ((l = t[r]).name === n) return l.value
    }
    function gn(t, n, r) {
      for (var o = 0, l = t.length; o < l; ++o)
        if (t[o].name === n) {
          ;(t[o] = pn), (t = t.slice(0, o).concat(t.slice(o + 1)))
          break
        }
      return r != null && t.push({ name: n, value: r }), t
    }
    var Xe = ae,
      Ve = "http://www.w3.org/1999/xhtml",
      ne = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: Ve,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      }
    function le(t) {
      var n = (t += ""),
        r = n.indexOf(":")
      return (
        r >= 0 && (n = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)),
        ne.hasOwnProperty(n) ? { space: ne[n], local: t } : t
      )
    }
    function un(t) {
      return function () {
        var n = this.ownerDocument,
          r = this.namespaceURI
        return r === Ve && n.documentElement.namespaceURI === Ve
          ? n.createElement(t)
          : n.createElementNS(r, t)
      }
    }
    function de(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    }
    function En(t) {
      var n = le(t)
      return (n.local ? de : un)(n)
    }
    function ye() {}
    function be(t) {
      return t == null
        ? ye
        : function () {
            return this.querySelector(t)
          }
    }
    function mn(t) {
      typeof t != "function" && (t = be(t))
      for (var n = this._groups, r = n.length, o = new Array(r), l = 0; l < r; ++l)
        for (var c = n[l], f = c.length, y = (o[l] = new Array(f)), w, x, k = 0; k < f; ++k)
          (w = c[k]) &&
            (x = t.call(w, w.__data__, k, c)) &&
            ("__data__" in w && (x.__data__ = w.__data__), (y[k] = x))
      return new at(o, this._parents)
    }
    function Pe(t) {
      return t == null ? [] : Array.isArray(t) ? t : Array.from(t)
    }
    function De() {
      return []
    }
    function on(t) {
      return t == null
        ? De
        : function () {
            return this.querySelectorAll(t)
          }
    }
    function He(t) {
      return function () {
        return Pe(t.apply(this, arguments))
      }
    }
    function Qe(t) {
      typeof t == "function" ? (t = He(t)) : (t = on(t))
      for (var n = this._groups, r = n.length, o = [], l = [], c = 0; c < r; ++c)
        for (var f = n[c], y = f.length, w, x = 0; x < y; ++x)
          (w = f[x]) && (o.push(t.call(w, w.__data__, x, f)), l.push(w))
      return new at(o, l)
    }
    function ve(t) {
      return function () {
        return this.matches(t)
      }
    }
    function Ze(t) {
      return function (n) {
        return n.matches(t)
      }
    }
    var qe = Array.prototype.find
    function tn(t) {
      return function () {
        return qe.call(this.children, t)
      }
    }
    function Ie() {
      return this.firstElementChild
    }
    function Ee(t) {
      return this.select(t == null ? Ie : tn(typeof t == "function" ? t : Ze(t)))
    }
    var tt = Array.prototype.filter
    function gt() {
      return Array.from(this.children)
    }
    function At(t) {
      return function () {
        return tt.call(this.children, t)
      }
    }
    function Lt(t) {
      return this.selectAll(t == null ? gt : At(typeof t == "function" ? t : Ze(t)))
    }
    function qt(t) {
      typeof t != "function" && (t = ve(t))
      for (var n = this._groups, r = n.length, o = new Array(r), l = 0; l < r; ++l)
        for (var c = n[l], f = c.length, y = (o[l] = []), w, x = 0; x < f; ++x)
          (w = c[x]) && t.call(w, w.__data__, x, c) && y.push(w)
      return new at(o, this._parents)
    }
    function St(t) {
      return new Array(t.length)
    }
    function jt() {
      return new at(this._enter || this._groups.map(St), this._parents)
    }
    function ce(t, n) {
      ;(this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = n)
    }
    ce.prototype = {
      constructor: ce,
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
    function Yt(t) {
      return function () {
        return t
      }
    }
    function Ht(t, n, r, o, l, c) {
      for (var f = 0, y, w = n.length, x = c.length; f < x; ++f)
        (y = n[f]) ? ((y.__data__ = c[f]), (o[f] = y)) : (r[f] = new ce(t, c[f]))
      for (; f < w; ++f) (y = n[f]) && (l[f] = y)
    }
    function re(t, n, r, o, l, c, f) {
      var y,
        w,
        x = new Map(),
        k = n.length,
        F = c.length,
        $ = new Array(k),
        L
      for (y = 0; y < k; ++y)
        (w = n[y]) &&
          (($[y] = L = f.call(w, w.__data__, y, n) + ""), x.has(L) ? (l[y] = w) : x.set(L, w))
      for (y = 0; y < F; ++y)
        (L = f.call(t, c[y], y, c) + ""),
          (w = x.get(L)) ? ((o[y] = w), (w.__data__ = c[y]), x.delete(L)) : (r[y] = new ce(t, c[y]))
      for (y = 0; y < k; ++y) (w = n[y]) && x.get($[y]) === w && (l[y] = w)
    }
    function Nt(t) {
      return t.__data__
    }
    function Mt(t, n) {
      if (!arguments.length) return Array.from(this, Nt)
      var r = n ? re : Ht,
        o = this._parents,
        l = this._groups
      typeof t != "function" && (t = Yt(t))
      for (
        var c = l.length, f = new Array(c), y = new Array(c), w = new Array(c), x = 0;
        x < c;
        ++x
      ) {
        var k = o[x],
          F = l[x],
          $ = F.length,
          L = fe(t.call(k, k && k.__data__, x, o)),
          K = L.length,
          X = (y[x] = new Array(K)),
          Z = (f[x] = new Array(K)),
          Q = (w[x] = new Array($))
        r(k, F, X, Z, Q, L, n)
        for (var wt = 0, Bt = 0, it, $t; wt < K; ++wt)
          if ((it = X[wt])) {
            for (wt >= Bt && (Bt = wt + 1); !($t = Z[Bt]) && ++Bt < K; );
            it._next = $t || null
          }
      }
      return (f = new at(f, o)), (f._enter = y), (f._exit = w), f
    }
    function fe(t) {
      return typeof t == "object" && "length" in t ? t : Array.from(t)
    }
    function zt() {
      return new at(this._exit || this._groups.map(St), this._parents)
    }
    function _e(t, n, r) {
      var o = this.enter(),
        l = this,
        c = this.exit()
      return (
        typeof t == "function" ? ((o = t(o)), o && (o = o.selection())) : (o = o.append(t + "")),
        n != null && ((l = n(l)), l && (l = l.selection())),
        r == null ? c.remove() : r(c),
        o && l ? o.merge(l).order() : l
      )
    }
    function Ue(t) {
      for (
        var n = t.selection ? t.selection() : t,
          r = this._groups,
          o = n._groups,
          l = r.length,
          c = o.length,
          f = Math.min(l, c),
          y = new Array(l),
          w = 0;
        w < f;
        ++w
      )
        for (var x = r[w], k = o[w], F = x.length, $ = (y[w] = new Array(F)), L, K = 0; K < F; ++K)
          (L = x[K] || k[K]) && ($[K] = L)
      for (; w < l; ++w) y[w] = r[w]
      return new at(y, this._parents)
    }
    function Se() {
      for (var t = this._groups, n = -1, r = t.length; ++n < r; )
        for (var o = t[n], l = o.length - 1, c = o[l], f; --l >= 0; )
          (f = o[l]) &&
            (c && f.compareDocumentPosition(c) ^ 4 && c.parentNode.insertBefore(f, c), (c = f))
      return this
    }
    function Ye(t) {
      t || (t = vn)
      function n(F, $) {
        return F && $ ? t(F.__data__, $.__data__) : !F - !$
      }
      for (var r = this._groups, o = r.length, l = new Array(o), c = 0; c < o; ++c) {
        for (var f = r[c], y = f.length, w = (l[c] = new Array(y)), x, k = 0; k < y; ++k)
          (x = f[k]) && (w[k] = x)
        w.sort(n)
      }
      return new at(l, this._parents).order()
    }
    function vn(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function yn() {
      var t = arguments[0]
      return (arguments[0] = this), t.apply(null, arguments), this
    }
    function wn() {
      return Array.from(this)
    }
    function _n() {
      for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
        for (var o = t[n], l = 0, c = o.length; l < c; ++l) {
          var f = o[l]
          if (f) return f
        }
      return null
    }
    function sn() {
      let t = 0
      for (let n of this) ++t
      return t
    }
    function An() {
      return !this.node()
    }
    function Tn(t) {
      for (var n = this._groups, r = 0, o = n.length; r < o; ++r)
        for (var l = n[r], c = 0, f = l.length, y; c < f; ++c)
          (y = l[c]) && t.call(y, y.__data__, c, l)
      return this
    }
    function Fn(t) {
      return function () {
        this.removeAttribute(t)
      }
    }
    function zn(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }
    function kn(t, n) {
      return function () {
        this.setAttribute(t, n)
      }
    }
    function Pn(t, n) {
      return function () {
        this.setAttributeNS(t.space, t.local, n)
      }
    }
    function d(t, n) {
      return function () {
        var r = n.apply(this, arguments)
        r == null ? this.removeAttribute(t) : this.setAttribute(t, r)
      }
    }
    function M(t, n) {
      return function () {
        var r = n.apply(this, arguments)
        r == null
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, r)
      }
    }
    function S(t, n) {
      var r = le(t)
      if (arguments.length < 2) {
        var o = this.node()
        return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r)
      }
      return this.each(
        (n == null
          ? r.local
            ? zn
            : Fn
          : typeof n == "function"
            ? r.local
              ? M
              : d
            : r.local
              ? Pn
              : kn)(r, n),
      )
    }
    function j(t) {
      return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView
    }
    function I(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }
    function J(t, n, r) {
      return function () {
        this.style.setProperty(t, n, r)
      }
    }
    function ft(t, n, r) {
      return function () {
        var o = n.apply(this, arguments)
        o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, r)
      }
    }
    function ht(t, n, r) {
      return arguments.length > 1
        ? this.each((n == null ? I : typeof n == "function" ? ft : J)(t, n, r ?? ""))
        : xt(this.node(), t)
    }
    function xt(t, n) {
      return t.style.getPropertyValue(n) || j(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function It(t) {
      return function () {
        delete this[t]
      }
    }
    function Kt(t, n) {
      return function () {
        this[t] = n
      }
    }
    function pe(t, n) {
      return function () {
        var r = n.apply(this, arguments)
        r == null ? delete this[t] : (this[t] = r)
      }
    }
    function ie(t, n) {
      return arguments.length > 1
        ? this.each((n == null ? It : typeof n == "function" ? pe : Kt)(t, n))
        : this.node()[t]
    }
    function Zt(t) {
      return t.trim().split(/^|\s+/)
    }
    function Tt(t) {
      return t.classList || new ue(t)
    }
    function ue(t) {
      ;(this._node = t), (this._names = Zt(t.getAttribute("class") || ""))
    }
    ue.prototype = {
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
    function Te(t, n) {
      for (var r = Tt(t), o = -1, l = n.length; ++o < l; ) r.add(n[o])
    }
    function Ge(t, n) {
      for (var r = Tt(t), o = -1, l = n.length; ++o < l; ) r.remove(n[o])
    }
    function je(t) {
      return function () {
        Te(this, t)
      }
    }
    function Ce(t) {
      return function () {
        Ge(this, t)
      }
    }
    function ln(t, n) {
      return function () {
        ;(n.apply(this, arguments) ? Te : Ge)(this, t)
      }
    }
    function Cn(t, n) {
      var r = Zt(t + "")
      if (arguments.length < 2) {
        for (var o = Tt(this.node()), l = -1, c = r.length; ++l < c; )
          if (!o.contains(r[l])) return !1
        return !0
      }
      return this.each((typeof n == "function" ? ln : n ? je : Ce)(r, n))
    }
    function Dn() {
      this.textContent = ""
    }
    function cn(t) {
      return function () {
        this.textContent = t
      }
    }
    function N(t) {
      return function () {
        var n = t.apply(this, arguments)
        this.textContent = n ?? ""
      }
    }
    function R(t) {
      return arguments.length
        ? this.each(t == null ? Dn : (typeof t == "function" ? N : cn)(t))
        : this.node().textContent
    }
    function a() {
      this.innerHTML = ""
    }
    function h(t) {
      return function () {
        this.innerHTML = t
      }
    }
    function v(t) {
      return function () {
        var n = t.apply(this, arguments)
        this.innerHTML = n ?? ""
      }
    }
    function E(t) {
      return arguments.length
        ? this.each(t == null ? a : (typeof t == "function" ? v : h)(t))
        : this.node().innerHTML
    }
    function A() {
      this.nextSibling && this.parentNode.appendChild(this)
    }
    function T() {
      return this.each(A)
    }
    function q() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function O() {
      return this.each(q)
    }
    function U(t) {
      var n = typeof t == "function" ? t : En(t)
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments))
      })
    }
    function P() {
      return null
    }
    function G(t, n) {
      var r = typeof t == "function" ? t : En(t),
        o = n == null ? P : typeof n == "function" ? n : be(n)
      return this.select(function () {
        return this.insertBefore(r.apply(this, arguments), o.apply(this, arguments) || null)
      })
    }
    function Y() {
      var t = this.parentNode
      t && t.removeChild(this)
    }
    function V() {
      return this.each(Y)
    }
    function ut() {
      var t = this.cloneNode(!1),
        n = this.parentNode
      return n ? n.insertBefore(t, this.nextSibling) : t
    }
    function rt() {
      var t = this.cloneNode(!0),
        n = this.parentNode
      return n ? n.insertBefore(t, this.nextSibling) : t
    }
    function i(t) {
      return this.select(t ? rt : ut)
    }
    function g(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__
    }
    function b(t) {
      return function (n) {
        t.call(this, n, this.__data__)
      }
    }
    function D(t) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function (n) {
          var r = "",
            o = n.indexOf(".")
          return o >= 0 && ((r = n.slice(o + 1)), (n = n.slice(0, o))), { type: n, name: r }
        })
    }
    function B(t) {
      return function () {
        var n = this.__on
        if (n) {
          for (var r = 0, o = -1, l = n.length, c; r < l; ++r)
            (c = n[r]),
              (!t.type || c.type === t.type) && c.name === t.name
                ? this.removeEventListener(c.type, c.listener, c.options)
                : (n[++o] = c)
          ++o ? (n.length = o) : delete this.__on
        }
      }
    }
    function z(t, n, r) {
      return function () {
        var o = this.__on,
          l,
          c = b(n)
        if (o) {
          for (var f = 0, y = o.length; f < y; ++f)
            if ((l = o[f]).type === t.type && l.name === t.name) {
              this.removeEventListener(l.type, l.listener, l.options),
                this.addEventListener(l.type, (l.listener = c), (l.options = r)),
                (l.value = n)
              return
            }
        }
        this.addEventListener(t.type, c, r),
          (l = { type: t.type, name: t.name, value: n, listener: c, options: r }),
          o ? o.push(l) : (this.__on = [l])
      }
    }
    function et(t, n, r) {
      var o = D(t + ""),
        l,
        c = o.length,
        f
      if (arguments.length < 2) {
        var y = this.node().__on
        if (y) {
          for (var w = 0, x = y.length, k; w < x; ++w)
            for (l = 0, k = y[w]; l < c; ++l)
              if ((f = o[l]).type === k.type && f.name === k.name) return k.value
        }
        return
      }
      for (y = n ? z : B, l = 0; l < c; ++l) this.each(y(o[l], n, r))
      return this
    }
    function nt(t, n, r) {
      var o = j(t),
        l = o.CustomEvent
      typeof l == "function"
        ? (l = new l(n, r))
        : ((l = o.document.createEvent("Event")),
          r
            ? (l.initEvent(n, r.bubbles, r.cancelable), (l.detail = r.detail))
            : l.initEvent(n, !1, !1)),
        t.dispatchEvent(l)
    }
    function ot(t, n) {
      return function () {
        return nt(this, t, n)
      }
    }
    function yt(t, n) {
      return function () {
        return nt(this, t, n.apply(this, arguments))
      }
    }
    function Ct(t, n) {
      return this.each((typeof n == "function" ? yt : ot)(t, n))
    }
    function* lt() {
      for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
        for (var o = t[n], l = 0, c = o.length, f; l < c; ++l) (f = o[l]) && (yield f)
    }
    var ct = [null]
    function at(t, n) {
      ;(this._groups = t), (this._parents = n)
    }
    function vt() {
      return new at([[document.documentElement]], ct)
    }
    function kt() {
      return this
    }
    at.prototype = vt.prototype = {
      constructor: at,
      select: mn,
      selectAll: Qe,
      selectChild: Ee,
      selectChildren: Lt,
      filter: qt,
      data: Mt,
      enter: jt,
      exit: zt,
      join: _e,
      merge: Ue,
      selection: kt,
      order: Se,
      sort: Ye,
      call: yn,
      nodes: wn,
      node: _n,
      size: sn,
      empty: An,
      each: Tn,
      attr: S,
      style: ht,
      property: ie,
      classed: Cn,
      text: R,
      html: E,
      raise: T,
      lower: O,
      append: U,
      insert: G,
      remove: V,
      clone: i,
      datum: g,
      on: et,
      dispatch: Ct,
      [Symbol.iterator]: lt,
    }
    var Rt = vt
    function se(t) {
      return typeof t == "string"
        ? new at([[document.querySelector(t)]], [document.documentElement])
        : new at([[t]], ct)
    }
    function Me(t) {
      let n
      for (; (n = t.sourceEvent); ) t = n
      return t
    }
    function Jt(t, n) {
      if (((t = Me(t)), n === void 0 && (n = t.currentTarget), n)) {
        var r = n.ownerSVGElement || n
        if (r.createSVGPoint) {
          var o = r.createSVGPoint()
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
    function en(t) {
      return typeof t == "string"
        ? new at([document.querySelectorAll(t)], [document.documentElement])
        : new at([Pe(t)], ct)
    }
    var sr = { passive: !1 },
      Mn = { capture: !0, passive: !1 }
    function $n(t) {
      t.stopImmediatePropagation()
    }
    function lr(t) {
      t.preventDefault(), t.stopImmediatePropagation()
    }
    function Di(t) {
      var n = t.document.documentElement,
        r = se(t).on("dragstart.drag", lr, Mn)
      "onselectstart" in n
        ? r.on("selectstart.drag", lr, Mn)
        : ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = "none"))
    }
    function Mi(t, n) {
      var r = t.document.documentElement,
        o = se(t).on("dragstart.drag", null)
      n &&
        (o.on("click.drag", lr, Mn),
        setTimeout(function () {
          o.on("click.drag", null)
        }, 0)),
        "onselectstart" in r
          ? o.on("selectstart.drag", null)
          : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect)
    }
    var qr = (t) => () => t
    function li(
      t,
      {
        sourceEvent: n,
        subject: r,
        target: o,
        identifier: l,
        active: c,
        x: f,
        y,
        dx: w,
        dy: x,
        dispatch: k,
      },
    ) {
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        subject: { value: r, enumerable: !0, configurable: !0 },
        target: { value: o, enumerable: !0, configurable: !0 },
        identifier: { value: l, enumerable: !0, configurable: !0 },
        active: { value: c, enumerable: !0, configurable: !0 },
        x: { value: f, enumerable: !0, configurable: !0 },
        y: { value: y, enumerable: !0, configurable: !0 },
        dx: { value: w, enumerable: !0, configurable: !0 },
        dy: { value: x, enumerable: !0, configurable: !0 },
        _: { value: k },
      })
    }
    li.prototype.on = function () {
      var t = this._.on.apply(this._, arguments)
      return t === this._ ? this : t
    }
    function ci(t) {
      return !t.ctrlKey && !t.button
    }
    function Bi() {
      return this.parentNode
    }
    function Er(t, n) {
      return n ?? { x: t.x, y: t.y }
    }
    function _r() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function zr() {
      var t = ci,
        n = Bi,
        r = Er,
        o = _r,
        l = {},
        c = Xe("start", "drag", "end"),
        f = 0,
        y,
        w,
        x,
        k,
        F = 0
      function $(it) {
        it.on("mousedown.drag", L)
          .filter(o)
          .on("touchstart.drag", Z)
          .on("touchmove.drag", Q, sr)
          .on("touchend.drag touchcancel.drag", wt)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      function L(it, $t) {
        if (!(k || !t.call(this, it, $t))) {
          var Wt = Bt(this, n.call(this, it, $t), it, $t, "mouse")
          Wt &&
            (se(it.view).on("mousemove.drag", K, Mn).on("mouseup.drag", X, Mn),
            Di(it.view),
            $n(it),
            (x = !1),
            (y = it.clientX),
            (w = it.clientY),
            Wt("start", it))
        }
      }
      function K(it) {
        if ((lr(it), !x)) {
          var $t = it.clientX - y,
            Wt = it.clientY - w
          x = $t * $t + Wt * Wt > F
        }
        l.mouse("drag", it)
      }
      function X(it) {
        se(it.view).on("mousemove.drag mouseup.drag", null),
          Mi(it.view, x),
          lr(it),
          l.mouse("end", it)
      }
      function Z(it, $t) {
        if (t.call(this, it, $t)) {
          var Wt = it.changedTouches,
            W = n.call(this, it, $t),
            _t = Wt.length,
            dt,
            Dt
          for (dt = 0; dt < _t; ++dt)
            (Dt = Bt(this, W, it, $t, Wt[dt].identifier, Wt[dt])) &&
              ($n(it), Dt("start", it, Wt[dt]))
        }
      }
      function Q(it) {
        var $t = it.changedTouches,
          Wt = $t.length,
          W,
          _t
        for (W = 0; W < Wt; ++W) (_t = l[$t[W].identifier]) && (lr(it), _t("drag", it, $t[W]))
      }
      function wt(it) {
        var $t = it.changedTouches,
          Wt = $t.length,
          W,
          _t
        for (
          k && clearTimeout(k),
            k = setTimeout(function () {
              k = null
            }, 500),
            W = 0;
          W < Wt;
          ++W
        )
          (_t = l[$t[W].identifier]) && ($n(it), _t("end", it, $t[W]))
      }
      function Bt(it, $t, Wt, W, _t, dt) {
        var Dt = c.copy(),
          Pt = Jt(dt || Wt, $t),
          Qt,
          mt,
          H
        if (
          (H = r.call(
            it,
            new li("beforestart", {
              sourceEvent: Wt,
              target: $,
              identifier: _t,
              active: f,
              x: Pt[0],
              y: Pt[1],
              dx: 0,
              dy: 0,
              dispatch: Dt,
            }),
            W,
          )) != null
        )
          return (
            (Qt = H.x - Pt[0] || 0),
            (mt = H.y - Pt[1] || 0),
            function bt(st, Et, Ot) {
              var Ft = Pt,
                pt
              switch (st) {
                case "start":
                  ;(l[_t] = bt), (pt = f++)
                  break
                case "end":
                  delete l[_t], --f
                case "drag":
                  ;(Pt = Jt(Ot || Et, $t)), (pt = f)
                  break
              }
              Dt.call(
                st,
                it,
                new li(st, {
                  sourceEvent: Et,
                  subject: H,
                  target: $,
                  identifier: _t,
                  active: pt,
                  x: Pt[0] + Qt,
                  y: Pt[1] + mt,
                  dx: Pt[0] - Ft[0],
                  dy: Pt[1] - Ft[1],
                  dispatch: Dt,
                }),
                W,
              )
            }
          )
      }
      return (
        ($.filter = function (it) {
          return arguments.length ? ((t = typeof it == "function" ? it : qr(!!it)), $) : t
        }),
        ($.container = function (it) {
          return arguments.length ? ((n = typeof it == "function" ? it : qr(it)), $) : n
        }),
        ($.subject = function (it) {
          return arguments.length ? ((r = typeof it == "function" ? it : qr(it)), $) : r
        }),
        ($.touchable = function (it) {
          return arguments.length ? ((o = typeof it == "function" ? it : qr(!!it)), $) : o
        }),
        ($.on = function () {
          var it = c.on.apply(c, arguments)
          return it === c ? $ : it
        }),
        ($.clickDistance = function (it) {
          return arguments.length ? ((F = (it = +it) * it), $) : Math.sqrt(F)
        }),
        $
      )
    }
    function Xn(t, n, r) {
      ;(t.prototype = n.prototype = r), (r.constructor = t)
    }
    function cr(t, n) {
      var r = Object.create(t.prototype)
      for (var o in n) r[o] = n[o]
      return r
    }
    function xn() {}
    var Ar = 0.7,
      Pr = 1 / Ar,
      fr = "\\s*([+-]?\\d+)\\s*",
      kr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      On = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      hu = /^#([0-9a-f]{3,8})$/,
      du = new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`),
      Li = new RegExp(`^rgb\\(${On},${On},${On}\\)$`),
      Ni = new RegExp(`^rgba\\(${fr},${fr},${fr},${kr}\\)$`),
      pu = new RegExp(`^rgba\\(${On},${On},${On},${kr}\\)$`),
      gu = new RegExp(`^hsl\\(${kr},${On},${On}\\)$`),
      Si = new RegExp(`^hsla\\(${kr},${On},${On},${kr}\\)$`),
      hr = {
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
    Xn(xn, Je, {
      copy(t) {
        return Object.assign(new this.constructor(), this, t)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: fi,
      formatHex: fi,
      formatHex8: Ir,
      formatHsl: mu,
      formatRgb: Cr,
      toString: Cr,
    })
    function fi() {
      return this.rgb().formatHex()
    }
    function Ir() {
      return this.rgb().formatHex8()
    }
    function mu() {
      return Hr(this).formatHsl()
    }
    function Cr() {
      return this.rgb().formatRgb()
    }
    function Je(t) {
      var n, r
      return (
        (t = (t + "").trim().toLowerCase()),
        (n = hu.exec(t))
          ? ((r = n[1].length),
            (n = parseInt(n[1], 16)),
            r === 6
              ? hi(n)
              : r === 3
                ? new Re(
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (n & 240),
                    ((n & 15) << 4) | (n & 15),
                    1,
                  )
                : r === 8
                  ? Rr((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (n & 255) / 255)
                  : r === 4
                    ? Rr(
                        ((n >> 12) & 15) | ((n >> 8) & 240),
                        ((n >> 8) & 15) | ((n >> 4) & 240),
                        ((n >> 4) & 15) | (n & 240),
                        (((n & 15) << 4) | (n & 15)) / 255,
                      )
                    : null)
          : (n = du.exec(t))
            ? new Re(n[1], n[2], n[3], 1)
            : (n = Li.exec(t))
              ? new Re((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
              : (n = Ni.exec(t))
                ? Rr(n[1], n[2], n[3], n[4])
                : (n = pu.exec(t))
                  ? Rr((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
                  : (n = gu.exec(t))
                    ? Dr(n[1], n[2] / 100, n[3] / 100, 1)
                    : (n = Si.exec(t))
                      ? Dr(n[1], n[2] / 100, n[3] / 100, n[4])
                      : hr.hasOwnProperty(t)
                        ? hi(hr[t])
                        : t === "transparent"
                          ? new Re(NaN, NaN, NaN, 0)
                          : null
      )
    }
    function hi(t) {
      return new Re((t >> 16) & 255, (t >> 8) & 255, t & 255, 1)
    }
    function Rr(t, n, r, o) {
      return o <= 0 && (t = n = r = NaN), new Re(t, n, r, o)
    }
    function Ti(t) {
      return (
        t instanceof xn || (t = Je(t)),
        t ? ((t = t.rgb()), new Re(t.r, t.g, t.b, t.opacity)) : new Re()
      )
    }
    function er(t, n, r, o) {
      return arguments.length === 1 ? Ti(t) : new Re(t, n, r, o ?? 1)
    }
    function Re(t, n, r, o) {
      ;(this.r = +t), (this.g = +n), (this.b = +r), (this.opacity = +o)
    }
    Xn(
      Re,
      er,
      cr(xn, {
        brighter(t) {
          return (
            (t = t == null ? Pr : Math.pow(Pr, t)),
            new Re(this.r * t, this.g * t, this.b * t, this.opacity)
          )
        },
        darker(t) {
          return (
            (t = t == null ? Ar : Math.pow(Ar, t)),
            new Re(this.r * t, this.g * t, this.b * t, this.opacity)
          )
        },
        rgb() {
          return this
        },
        clamp() {
          return new Re(nn(this.r), nn(this.g), nn(this.b), Vr(this.opacity))
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
        hex: Yn,
        formatHex: Yn,
        formatHex8: Fi,
        formatRgb: di,
        toString: di,
      }),
    )
    function Yn() {
      return `#${Gn(this.r)}${Gn(this.g)}${Gn(this.b)}`
    }
    function Fi() {
      return `#${Gn(this.r)}${Gn(this.g)}${Gn(this.b)}${Gn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
    }
    function di() {
      let t = Vr(this.opacity)
      return `${t === 1 ? "rgb(" : "rgba("}${nn(this.r)}, ${nn(this.g)}, ${nn(this.b)}${t === 1 ? ")" : `, ${t})`}`
    }
    function Vr(t) {
      return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
    }
    function nn(t) {
      return Math.max(0, Math.min(255, Math.round(t) || 0))
    }
    function Gn(t) {
      return (t = nn(t)), (t < 16 ? "0" : "") + t.toString(16)
    }
    function Dr(t, n, r, o) {
      return (
        o <= 0 ? (t = n = r = NaN) : r <= 0 || r >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
        new Bn(t, n, r, o)
      )
    }
    function Hr(t) {
      if (t instanceof Bn) return new Bn(t.h, t.s, t.l, t.opacity)
      if ((t instanceof xn || (t = Je(t)), !t)) return new Bn()
      if (t instanceof Bn) return t
      t = t.rgb()
      var n = t.r / 255,
        r = t.g / 255,
        o = t.b / 255,
        l = Math.min(n, r, o),
        c = Math.max(n, r, o),
        f = NaN,
        y = c - l,
        w = (c + l) / 2
      return (
        y
          ? (n === c
              ? (f = (r - o) / y + (r < o) * 6)
              : r === c
                ? (f = (o - n) / y + 2)
                : (f = (n - r) / y + 4),
            (y /= w < 0.5 ? c + l : 2 - c - l),
            (f *= 60))
          : (y = w > 0 && w < 1 ? 0 : f),
        new Bn(f, y, w, t.opacity)
      )
    }
    function $i(t, n, r, o) {
      return arguments.length === 1 ? Hr(t) : new Bn(t, n, r, o ?? 1)
    }
    function Bn(t, n, r, o) {
      ;(this.h = +t), (this.s = +n), (this.l = +r), (this.opacity = +o)
    }
    Xn(
      Bn,
      $i,
      cr(xn, {
        brighter(t) {
          return (
            (t = t == null ? Pr : Math.pow(Pr, t)), new Bn(this.h, this.s, this.l * t, this.opacity)
          )
        },
        darker(t) {
          return (
            (t = t == null ? Ar : Math.pow(Ar, t)), new Bn(this.h, this.s, this.l * t, this.opacity)
          )
        },
        rgb() {
          var t = (this.h % 360) + (this.h < 0) * 360,
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            o = r + (r < 0.5 ? r : 1 - r) * n,
            l = 2 * r - o
          return new Re(
            pi(t >= 240 ? t - 240 : t + 120, l, o),
            pi(t, l, o),
            pi(t < 120 ? t + 240 : t - 120, l, o),
            this.opacity,
          )
        },
        clamp() {
          return new Bn(Oi(this.h), Mr(this.s), Mr(this.l), Vr(this.opacity))
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
          let t = Vr(this.opacity)
          return `${t === 1 ? "hsl(" : "hsla("}${Oi(this.h)}, ${Mr(this.s) * 100}%, ${Mr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`
        },
      }),
    )
    function Oi(t) {
      return (t = (t || 0) % 360), t < 0 ? t + 360 : t
    }
    function Mr(t) {
      return Math.max(0, Math.min(1, t || 0))
    }
    function pi(t, n, r) {
      return (
        (t < 60
          ? n + ((r - n) * t) / 60
          : t < 180
            ? r
            : t < 240
              ? n + ((r - n) * (240 - t)) / 60
              : n) * 255
      )
    }
    function ji(t, n, r, o, l) {
      var c = t * t,
        f = c * t
      return (
        ((1 - 3 * t + 3 * c - f) * n +
          (4 - 6 * c + 3 * f) * r +
          (1 + 3 * t + 3 * c - 3 * f) * o +
          f * l) /
        6
      )
    }
    function vu(t) {
      var n = t.length - 1
      return function (r) {
        var o = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), n - 1) : Math.floor(r * n),
          l = t[o],
          c = t[o + 1],
          f = o > 0 ? t[o - 1] : 2 * l - c,
          y = o < n - 1 ? t[o + 2] : 2 * c - l
        return ji((r - o / n) * n, f, l, c, y)
      }
    }
    function qi(t) {
      var n = t.length
      return function (r) {
        var o = Math.floor(((r %= 1) < 0 ? ++r : r) * n),
          l = t[(o + n - 1) % n],
          c = t[o % n],
          f = t[(o + 1) % n],
          y = t[(o + 2) % n]
        return ji((r - o / n) * n, l, c, f, y)
      }
    }
    var gi = (t) => () => t
    function zi(t, n) {
      return function (r) {
        return t + r * n
      }
    }
    function Qo(t, n, r) {
      return (
        (t = Math.pow(t, r)),
        (n = Math.pow(n, r) - t),
        (r = 1 / r),
        function (o) {
          return Math.pow(t + o * n, r)
        }
      )
    }
    function Zo(t) {
      return (t = +t) == 1
        ? In
        : function (n, r) {
            return r - n ? Qo(n, r, t) : gi(isNaN(n) ? r : n)
          }
    }
    function In(t, n) {
      var r = n - t
      return r ? zi(t, r) : gi(isNaN(t) ? n : t)
    }
    var Ur = (function t(n) {
      var r = Zo(n)
      function o(l, c) {
        var f = r((l = er(l)).r, (c = er(c)).r),
          y = r(l.g, c.g),
          w = r(l.b, c.b),
          x = In(l.opacity, c.opacity)
        return function (k) {
          return (l.r = f(k)), (l.g = y(k)), (l.b = w(k)), (l.opacity = x(k)), l + ""
        }
      }
      return (o.gamma = t), o
    })(1)
    function Wr(t) {
      return function (n) {
        var r = n.length,
          o = new Array(r),
          l = new Array(r),
          c = new Array(r),
          f,
          y
        for (f = 0; f < r; ++f)
          (y = er(n[f])), (o[f] = y.r || 0), (l[f] = y.g || 0), (c[f] = y.b || 0)
        return (
          (o = t(o)),
          (l = t(l)),
          (c = t(c)),
          (y.opacity = 1),
          function (w) {
            return (y.r = o(w)), (y.g = l(w)), (y.b = c(w)), y + ""
          }
        )
      }
    }
    var ta = Wr(vu),
      ea = Wr(qi)
    function Jn(t, n) {
      return (
        (t = +t),
        (n = +n),
        function (r) {
          return t * (1 - r) + n * r
        }
      )
    }
    var Kr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Br = new RegExp(Kr.source, "g")
    function Pi(t) {
      return function () {
        return t
      }
    }
    function Xr(t) {
      return function (n) {
        return t(n) + ""
      }
    }
    function yu(t, n) {
      var r = (Kr.lastIndex = Br.lastIndex = 0),
        o,
        l,
        c,
        f = -1,
        y = [],
        w = []
      for (t = t + "", n = n + ""; (o = Kr.exec(t)) && (l = Br.exec(n)); )
        (c = l.index) > r && ((c = n.slice(r, c)), y[f] ? (y[f] += c) : (y[++f] = c)),
          (o = o[0]) === (l = l[0])
            ? y[f]
              ? (y[f] += l)
              : (y[++f] = l)
            : ((y[++f] = null), w.push({ i: f, x: Jn(o, l) })),
          (r = Br.lastIndex)
      return (
        r < n.length && ((c = n.slice(r)), y[f] ? (y[f] += c) : (y[++f] = c)),
        y.length < 2
          ? w[0]
            ? Xr(w[0].x)
            : Pi(n)
          : ((n = w.length),
            function (x) {
              for (var k = 0, F; k < n; ++k) y[(F = w[k]).i] = F.x(x)
              return y.join("")
            })
      )
    }
    var Ii = 180 / Math.PI,
      Yr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
    function Ri(t, n, r, o, l, c) {
      var f, y, w
      return (
        (f = Math.sqrt(t * t + n * n)) && ((t /= f), (n /= f)),
        (w = t * r + n * o) && ((r -= t * w), (o -= n * w)),
        (y = Math.sqrt(r * r + o * o)) && ((r /= y), (o /= y), (w /= y)),
        t * o < n * r && ((t = -t), (n = -n), (w = -w), (f = -f)),
        {
          translateX: l,
          translateY: c,
          rotate: Math.atan2(n, t) * Ii,
          skewX: Math.atan(w) * Ii,
          scaleX: f,
          scaleY: y,
        }
      )
    }
    var Gr
    function wu(t) {
      let n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "")
      return n.isIdentity ? Yr : Ri(n.a, n.b, n.c, n.d, n.e, n.f)
    }
    function Vi(t) {
      return t == null
        ? Yr
        : (Gr || (Gr = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          Gr.setAttribute("transform", t),
          (t = Gr.transform.baseVal.consolidate())
            ? ((t = t.matrix), Ri(t.a, t.b, t.c, t.d, t.e, t.f))
            : Yr)
    }
    function Hi(t, n, r, o) {
      function l(x) {
        return x.length ? x.pop() + " " : ""
      }
      function c(x, k, F, $, L, K) {
        if (x !== F || k !== $) {
          var X = L.push("translate(", null, n, null, r)
          K.push({ i: X - 4, x: Jn(x, F) }, { i: X - 2, x: Jn(k, $) })
        } else (F || $) && L.push("translate(" + F + n + $ + r)
      }
      function f(x, k, F, $) {
        x !== k
          ? (x - k > 180 ? (k += 360) : k - x > 180 && (x += 360),
            $.push({ i: F.push(l(F) + "rotate(", null, o) - 2, x: Jn(x, k) }))
          : k && F.push(l(F) + "rotate(" + k + o)
      }
      function y(x, k, F, $) {
        x !== k
          ? $.push({ i: F.push(l(F) + "skewX(", null, o) - 2, x: Jn(x, k) })
          : k && F.push(l(F) + "skewX(" + k + o)
      }
      function w(x, k, F, $, L, K) {
        if (x !== F || k !== $) {
          var X = L.push(l(L) + "scale(", null, ",", null, ")")
          K.push({ i: X - 4, x: Jn(x, F) }, { i: X - 2, x: Jn(k, $) })
        } else (F !== 1 || $ !== 1) && L.push(l(L) + "scale(" + F + "," + $ + ")")
      }
      return function (x, k) {
        var F = [],
          $ = []
        return (
          (x = t(x)),
          (k = t(k)),
          c(x.translateX, x.translateY, k.translateX, k.translateY, F, $),
          f(x.rotate, k.rotate, F, $),
          y(x.skewX, k.skewX, F, $),
          w(x.scaleX, x.scaleY, k.scaleX, k.scaleY, F, $),
          (x = k = null),
          function (L) {
            for (var K = -1, X = $.length, Z; ++K < X; ) F[(Z = $[K]).i] = Z.x(L)
            return F.join("")
          }
        )
      }
    }
    var xu = Hi(wu, "px, ", "px)", "deg)"),
      bu = Hi(Vi, ", ", ")", ")"),
      dr = 1e-12
    function pr(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2
    }
    function Lr(t) {
      return ((t = Math.exp(t)) - 1 / t) / 2
    }
    function Ui(t) {
      return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }
    var Jr = (function t(n, r, o) {
        function l(c, f) {
          var y = c[0],
            w = c[1],
            x = c[2],
            k = f[0],
            F = f[1],
            $ = f[2],
            L = k - y,
            K = F - w,
            X = L * L + K * K,
            Z,
            Q
          if (X < dr)
            (Q = Math.log($ / x) / n),
              (Z = function (W) {
                return [y + W * L, w + W * K, x * Math.exp(n * W * Q)]
              })
          else {
            var wt = Math.sqrt(X),
              Bt = ($ * $ - x * x + o * X) / (2 * x * r * wt),
              it = ($ * $ - x * x - o * X) / (2 * $ * r * wt),
              $t = Math.log(Math.sqrt(Bt * Bt + 1) - Bt),
              Wt = Math.log(Math.sqrt(it * it + 1) - it)
            ;(Q = (Wt - $t) / n),
              (Z = function (W) {
                var _t = W * Q,
                  dt = pr($t),
                  Dt = (x / (r * wt)) * (dt * Ui(n * _t + $t) - Lr($t))
                return [y + Dt * L, w + Dt * K, (x * dt) / pr(n * _t + $t)]
              })
          }
          return (Z.duration = (Q * 1e3 * n) / Math.SQRT2), Z
        }
        return (
          (l.rho = function (c) {
            var f = Math.max(0.001, +c),
              y = f * f,
              w = y * y
            return t(f, y, w)
          }),
          l
        )
      })(Math.SQRT2, 2, 4),
      jn = 0,
      Qn = 0,
      Ln = 0,
      Nr = 1e3,
      Zn,
      gr,
      mr = 0,
      nr = 0,
      rr = 0,
      ir = typeof performance == "object" && performance.now ? performance : Date,
      Wi =
        typeof window == "object" && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17)
            }
    function Qr() {
      return nr || (Wi(Eu), (nr = ir.now() + rr))
    }
    function Eu() {
      nr = 0
    }
    function Zr() {
      this._call = this._time = this._next = null
    }
    Zr.prototype = Sr.prototype = {
      constructor: Zr,
      restart: function (t, n, r) {
        if (typeof t != "function") throw new TypeError("callback is not a function")
        ;(r = (r == null ? Qr() : +r) + (n == null ? 0 : +n)),
          !this._next && gr !== this && (gr ? (gr._next = this) : (Zn = this), (gr = this)),
          (this._call = t),
          (this._time = r),
          ti()
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), ti())
      },
    }
    function Sr(t, n, r) {
      var o = new Zr()
      return o.restart(t, n, r), o
    }
    function Ki() {
      Qr(), ++jn
      for (var t = Zn, n; t; ) (n = nr - t._time) >= 0 && t._call.call(void 0, n), (t = t._next)
      --jn
    }
    function Xi() {
      ;(nr = (mr = ir.now()) + rr), (jn = Qn = 0)
      try {
        Ki()
      } finally {
        ;(jn = 0), Yi(), (nr = 0)
      }
    }
    function _u() {
      var t = ir.now(),
        n = t - mr
      n > Nr && ((rr -= n), (mr = t))
    }
    function Yi() {
      for (var t, n = Zn, r, o = 1 / 0; n; )
        n._call
          ? (o > n._time && (o = n._time), (t = n), (n = n._next))
          : ((r = n._next), (n._next = null), (n = t ? (t._next = r) : (Zn = r)))
      ;(gr = t), ti(o)
    }
    function ti(t) {
      if (!jn) {
        Qn && (Qn = clearTimeout(Qn))
        var n = t - nr
        n > 24
          ? (t < 1 / 0 && (Qn = setTimeout(Xi, t - ir.now() - rr)), Ln && (Ln = clearInterval(Ln)))
          : (Ln || ((mr = ir.now()), (Ln = setInterval(_u, Nr))), (jn = 1), Wi(Xi))
      }
    }
    function ei(t, n, r) {
      var o = new Zr()
      return (
        (n = n == null ? 0 : +n),
        o.restart(
          (l) => {
            o.stop(), t(l + n)
          },
          n,
          r,
        ),
        o
      )
    }
    var ni = Xe("start", "end", "cancel", "interrupt"),
      Gi = [],
      ri = 0,
      Tr = 1,
      vr = 2,
      yr = 3,
      Nn = 4,
      bn = 5,
      ii = 6
    function ur(t, n, r, o, l, c) {
      var f = t.__transition
      if (!f) t.__transition = {}
      else if (r in f) return
      Au(t, r, {
        name: n,
        index: o,
        group: l,
        on: ni,
        tween: Gi,
        time: c.time,
        delay: c.delay,
        duration: c.duration,
        ease: c.ease,
        timer: null,
        state: ri,
      })
    }
    function mi(t, n) {
      var r = Sn(t, n)
      if (r.state > ri) throw new Error("too late; already scheduled")
      return r
    }
    function qn(t, n) {
      var r = Sn(t, n)
      if (r.state > yr) throw new Error("too late; already running")
      return r
    }
    function Sn(t, n) {
      var r = t.__transition
      if (!r || !(r = r[n])) throw new Error("transition not found")
      return r
    }
    function Au(t, n, r) {
      var o = t.__transition,
        l
      ;(o[n] = r), (r.timer = Sr(c, 0, r.time))
      function c(x) {
        ;(r.state = Tr), r.timer.restart(f, r.delay, r.time), r.delay <= x && f(x - r.delay)
      }
      function f(x) {
        var k, F, $, L
        if (r.state !== Tr) return w()
        for (k in o)
          if (((L = o[k]), L.name === r.name)) {
            if (L.state === yr) return ei(f)
            L.state === Nn
              ? ((L.state = ii),
                L.timer.stop(),
                L.on.call("interrupt", t, t.__data__, L.index, L.group),
                delete o[k])
              : +k < n &&
                ((L.state = ii),
                L.timer.stop(),
                L.on.call("cancel", t, t.__data__, L.index, L.group),
                delete o[k])
          }
        if (
          (ei(function () {
            r.state === yr && ((r.state = Nn), r.timer.restart(y, r.delay, r.time), y(x))
          }),
          (r.state = vr),
          r.on.call("start", t, t.__data__, r.index, r.group),
          r.state === vr)
        ) {
          for (r.state = yr, l = new Array(($ = r.tween.length)), k = 0, F = -1; k < $; ++k)
            (L = r.tween[k].value.call(t, t.__data__, r.index, r.group)) && (l[++F] = L)
          l.length = F + 1
        }
      }
      function y(x) {
        for (
          var k =
              x < r.duration
                ? r.ease.call(null, x / r.duration)
                : (r.timer.restart(w), (r.state = bn), 1),
            F = -1,
            $ = l.length;
          ++F < $;

        )
          l[F].call(t, k)
        r.state === bn && (r.on.call("end", t, t.__data__, r.index, r.group), w())
      }
      function w() {
        ;(r.state = ii), r.timer.stop(), delete o[n]
        for (var x in o) return
        delete t.__transition
      }
    }
    function wr(t, n) {
      var r = t.__transition,
        o,
        l,
        c = !0,
        f
      if (r) {
        n = n == null ? null : n + ""
        for (f in r) {
          if ((o = r[f]).name !== n) {
            c = !1
            continue
          }
          ;(l = o.state > vr && o.state < bn),
            (o.state = ii),
            o.timer.stop(),
            o.on.call(l ? "interrupt" : "cancel", t, t.__data__, o.index, o.group),
            delete r[f]
        }
        c && delete t.__transition
      }
    }
    function Ji(t) {
      return this.each(function () {
        wr(this, t)
      })
    }
    function ku(t, n) {
      var r, o
      return function () {
        var l = qn(this, t),
          c = l.tween
        if (c !== r) {
          o = r = c
          for (var f = 0, y = o.length; f < y; ++f)
            if (o[f].name === n) {
              ;(o = o.slice()), o.splice(f, 1)
              break
            }
        }
        l.tween = o
      }
    }
    function Cu(t, n, r) {
      var o, l
      if (typeof r != "function") throw new Error()
      return function () {
        var c = qn(this, t),
          f = c.tween
        if (f !== o) {
          l = (o = f).slice()
          for (var y = { name: n, value: r }, w = 0, x = l.length; w < x; ++w)
            if (l[w].name === n) {
              l[w] = y
              break
            }
          w === x && l.push(y)
        }
        c.tween = l
      }
    }
    function Du(t, n) {
      var r = this._id
      if (((t += ""), arguments.length < 2)) {
        for (var o = Sn(this.node(), r).tween, l = 0, c = o.length, f; l < c; ++l)
          if ((f = o[l]).name === t) return f.value
        return null
      }
      return this.each((n == null ? ku : Cu)(r, t, n))
    }
    function vi(t, n, r) {
      var o = t._id
      return (
        t.each(function () {
          var l = qn(this, o)
          ;(l.value || (l.value = {}))[n] = r.apply(this, arguments)
        }),
        function (l) {
          return Sn(l, o).value[n]
        }
      )
    }
    function Qi(t, n) {
      var r
      return (typeof n == "number" ? Jn : n instanceof Je ? Ur : (r = Je(n)) ? ((n = r), Ur) : yu)(
        t,
        n,
      )
    }
    function Mu(t) {
      return function () {
        this.removeAttribute(t)
      }
    }
    function Bu(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }
    function Lu(t, n, r) {
      var o,
        l = r + "",
        c
      return function () {
        var f = this.getAttribute(t)
        return f === l ? null : f === o ? c : (c = n((o = f), r))
      }
    }
    function Nu(t, n, r) {
      var o,
        l = r + "",
        c
      return function () {
        var f = this.getAttributeNS(t.space, t.local)
        return f === l ? null : f === o ? c : (c = n((o = f), r))
      }
    }
    function Su(t, n, r) {
      var o, l, c
      return function () {
        var f,
          y = r(this),
          w
        return y == null
          ? void this.removeAttribute(t)
          : ((f = this.getAttribute(t)),
            (w = y + ""),
            f === w ? null : f === o && w === l ? c : ((l = w), (c = n((o = f), y))))
      }
    }
    function Tu(t, n, r) {
      var o, l, c
      return function () {
        var f,
          y = r(this),
          w
        return y == null
          ? void this.removeAttributeNS(t.space, t.local)
          : ((f = this.getAttributeNS(t.space, t.local)),
            (w = y + ""),
            f === w ? null : f === o && w === l ? c : ((l = w), (c = n((o = f), y))))
      }
    }
    function Fu(t, n) {
      var r = le(t),
        o = r === "transform" ? bu : Qi
      return this.attrTween(
        t,
        typeof n == "function"
          ? (r.local ? Tu : Su)(r, o, vi(this, "attr." + t, n))
          : n == null
            ? (r.local ? Bu : Mu)(r)
            : (r.local ? Nu : Lu)(r, o, n),
      )
    }
    function $u(t, n) {
      return function (r) {
        this.setAttribute(t, n.call(this, r))
      }
    }
    function Ou(t, n) {
      return function (r) {
        this.setAttributeNS(t.space, t.local, n.call(this, r))
      }
    }
    function ju(t, n) {
      var r, o
      function l() {
        var c = n.apply(this, arguments)
        return c !== o && (r = (o = c) && Ou(t, c)), r
      }
      return (l._value = n), l
    }
    function qu(t, n) {
      var r, o
      function l() {
        var c = n.apply(this, arguments)
        return c !== o && (r = (o = c) && $u(t, c)), r
      }
      return (l._value = n), l
    }
    function zu(t, n) {
      var r = "attr." + t
      if (arguments.length < 2) return (r = this.tween(r)) && r._value
      if (n == null) return this.tween(r, null)
      if (typeof n != "function") throw new Error()
      var o = le(t)
      return this.tween(r, (o.local ? ju : qu)(o, n))
    }
    function Pu(t, n) {
      return function () {
        mi(this, t).delay = +n.apply(this, arguments)
      }
    }
    function Iu(t, n) {
      return (
        (n = +n),
        function () {
          mi(this, t).delay = n
        }
      )
    }
    function Ru(t) {
      var n = this._id
      return arguments.length
        ? this.each((typeof t == "function" ? Pu : Iu)(n, t))
        : Sn(this.node(), n).delay
    }
    function Vu(t, n) {
      return function () {
        qn(this, t).duration = +n.apply(this, arguments)
      }
    }
    function Hu(t, n) {
      return (
        (n = +n),
        function () {
          qn(this, t).duration = n
        }
      )
    }
    function Uu(t) {
      var n = this._id
      return arguments.length
        ? this.each((typeof t == "function" ? Vu : Hu)(n, t))
        : Sn(this.node(), n).duration
    }
    function Wu(t, n) {
      if (typeof n != "function") throw new Error()
      return function () {
        qn(this, t).ease = n
      }
    }
    function Ku(t) {
      var n = this._id
      return arguments.length ? this.each(Wu(n, t)) : Sn(this.node(), n).ease
    }
    function Xu(t, n) {
      return function () {
        var r = n.apply(this, arguments)
        if (typeof r != "function") throw new Error()
        qn(this, t).ease = r
      }
    }
    function Yu(t) {
      if (typeof t != "function") throw new Error()
      return this.each(Xu(this._id, t))
    }
    function Gu(t) {
      typeof t != "function" && (t = ve(t))
      for (var n = this._groups, r = n.length, o = new Array(r), l = 0; l < r; ++l)
        for (var c = n[l], f = c.length, y = (o[l] = []), w, x = 0; x < f; ++x)
          (w = c[x]) && t.call(w, w.__data__, x, c) && y.push(w)
      return new Hn(o, this._parents, this._name, this._id)
    }
    function Ju(t) {
      if (t._id !== this._id) throw new Error()
      for (
        var n = this._groups,
          r = t._groups,
          o = n.length,
          l = r.length,
          c = Math.min(o, l),
          f = new Array(o),
          y = 0;
        y < c;
        ++y
      )
        for (var w = n[y], x = r[y], k = w.length, F = (f[y] = new Array(k)), $, L = 0; L < k; ++L)
          ($ = w[L] || x[L]) && (F[L] = $)
      for (; y < o; ++y) f[y] = n[y]
      return new Hn(f, this._parents, this._name, this._id)
    }
    function Qu(t) {
      return (t + "")
        .trim()
        .split(/^|\s+/)
        .every(function (n) {
          var r = n.indexOf(".")
          return r >= 0 && (n = n.slice(0, r)), !n || n === "start"
        })
    }
    function Zu(t, n, r) {
      var o,
        l,
        c = Qu(n) ? mi : qn
      return function () {
        var f = c(this, t),
          y = f.on
        y !== o && (l = (o = y).copy()).on(n, r), (f.on = l)
      }
    }
    function to(t, n) {
      var r = this._id
      return arguments.length < 2 ? Sn(this.node(), r).on.on(t) : this.each(Zu(r, t, n))
    }
    function eo(t) {
      return function () {
        var n = this.parentNode
        for (var r in this.__transition) if (+r !== t) return
        n && n.removeChild(this)
      }
    }
    function no() {
      return this.on("end.remove", eo(this._id))
    }
    function Zi(t) {
      var n = this._name,
        r = this._id
      typeof t != "function" && (t = be(t))
      for (var o = this._groups, l = o.length, c = new Array(l), f = 0; f < l; ++f)
        for (var y = o[f], w = y.length, x = (c[f] = new Array(w)), k, F, $ = 0; $ < w; ++$)
          (k = y[$]) &&
            (F = t.call(k, k.__data__, $, y)) &&
            ("__data__" in k && (F.__data__ = k.__data__),
            (x[$] = F),
            ur(x[$], n, r, $, x, Sn(k, r)))
      return new Hn(c, this._parents, n, r)
    }
    function ro(t) {
      var n = this._name,
        r = this._id
      typeof t != "function" && (t = on(t))
      for (var o = this._groups, l = o.length, c = [], f = [], y = 0; y < l; ++y)
        for (var w = o[y], x = w.length, k, F = 0; F < x; ++F)
          if ((k = w[F])) {
            for (
              var $ = t.call(k, k.__data__, F, w), L, K = Sn(k, r), X = 0, Z = $.length;
              X < Z;
              ++X
            )
              (L = $[X]) && ur(L, n, r, X, $, K)
            c.push($), f.push(k)
          }
      return new Hn(c, f, n, r)
    }
    var io = Rt.prototype.constructor
    function uo() {
      return new io(this._groups, this._parents)
    }
    function oo(t, n) {
      var r, o, l
      return function () {
        var c = xt(this, t),
          f = (this.style.removeProperty(t), xt(this, t))
        return c === f ? null : c === r && f === o ? l : (l = n((r = c), (o = f)))
      }
    }
    function tu(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }
    function ao(t, n, r) {
      var o,
        l = r + "",
        c
      return function () {
        var f = xt(this, t)
        return f === l ? null : f === o ? c : (c = n((o = f), r))
      }
    }
    function so(t, n, r) {
      var o, l, c
      return function () {
        var f = xt(this, t),
          y = r(this),
          w = y + ""
        return (
          y == null && (w = y = (this.style.removeProperty(t), xt(this, t))),
          f === w ? null : f === o && w === l ? c : ((l = w), (c = n((o = f), y)))
        )
      }
    }
    function lo(t, n) {
      var r,
        o,
        l,
        c = "style." + n,
        f = "end." + c,
        y
      return function () {
        var w = qn(this, t),
          x = w.on,
          k = w.value[c] == null ? y || (y = tu(n)) : void 0
        ;(x !== r || l !== k) && (o = (r = x).copy()).on(f, (l = k)), (w.on = o)
      }
    }
    function co(t, n, r) {
      var o = (t += "") == "transform" ? xu : Qi
      return n == null
        ? this.styleTween(t, oo(t, o)).on("end.style." + t, tu(t))
        : typeof n == "function"
          ? this.styleTween(t, so(t, o, vi(this, "style." + t, n))).each(lo(this._id, t))
          : this.styleTween(t, ao(t, o, n), r).on("end.style." + t, null)
    }
    function fo(t, n, r) {
      return function (o) {
        this.style.setProperty(t, n.call(this, o), r)
      }
    }
    function ho(t, n, r) {
      var o, l
      function c() {
        var f = n.apply(this, arguments)
        return f !== l && (o = (l = f) && fo(t, f, r)), o
      }
      return (c._value = n), c
    }
    function po(t, n, r) {
      var o = "style." + (t += "")
      if (arguments.length < 2) return (o = this.tween(o)) && o._value
      if (n == null) return this.tween(o, null)
      if (typeof n != "function") throw new Error()
      return this.tween(o, ho(t, n, r ?? ""))
    }
    function go(t) {
      return function () {
        this.textContent = t
      }
    }
    function mo(t) {
      return function () {
        var n = t(this)
        this.textContent = n ?? ""
      }
    }
    function vo(t) {
      return this.tween(
        "text",
        typeof t == "function" ? mo(vi(this, "text", t)) : go(t == null ? "" : t + ""),
      )
    }
    function yo(t) {
      return function (n) {
        this.textContent = t.call(this, n)
      }
    }
    function Rn(t) {
      var n, r
      function o() {
        var l = t.apply(this, arguments)
        return l !== r && (n = (r = l) && yo(l)), n
      }
      return (o._value = t), o
    }
    function wo(t) {
      var n = "text"
      if (arguments.length < 1) return (n = this.tween(n)) && n._value
      if (t == null) return this.tween(n, null)
      if (typeof t != "function") throw new Error()
      return this.tween(n, Rn(t))
    }
    function eu() {
      for (
        var t = this._name, n = this._id, r = nu(), o = this._groups, l = o.length, c = 0;
        c < l;
        ++c
      )
        for (var f = o[c], y = f.length, w, x = 0; x < y; ++x)
          if ((w = f[x])) {
            var k = Sn(w, n)
            ur(w, t, r, x, f, {
              time: k.time + k.delay + k.duration,
              delay: 0,
              duration: k.duration,
              ease: k.ease,
            })
          }
      return new Hn(o, this._parents, t, r)
    }
    function Vn() {
      var t,
        n,
        r = this,
        o = r._id,
        l = r.size()
      return new Promise(function (c, f) {
        var y = { value: f },
          w = {
            value: function () {
              --l === 0 && c()
            },
          }
        r.each(function () {
          var x = qn(this, o),
            k = x.on
          k !== t &&
            ((n = (t = k).copy()), n._.cancel.push(y), n._.interrupt.push(y), n._.end.push(w)),
            (x.on = n)
        }),
          l === 0 && c()
      })
    }
    var xo = 0
    function Hn(t, n, r, o) {
      ;(this._groups = t), (this._parents = n), (this._name = r), (this._id = o)
    }
    function bo(t) {
      return Rt().transition(t)
    }
    function nu() {
      return ++xo
    }
    var tr = Rt.prototype
    Hn.prototype = bo.prototype = {
      constructor: Hn,
      select: Zi,
      selectAll: ro,
      selectChild: tr.selectChild,
      selectChildren: tr.selectChildren,
      filter: Gu,
      merge: Ju,
      selection: uo,
      transition: eu,
      call: tr.call,
      nodes: tr.nodes,
      node: tr.node,
      size: tr.size,
      empty: tr.empty,
      each: tr.each,
      on: to,
      attr: Fu,
      attrTween: zu,
      style: co,
      styleTween: po,
      text: vo,
      textTween: wo,
      remove: no,
      tween: Du,
      delay: Ru,
      duration: Uu,
      ease: Ku,
      easeVarying: Yu,
      end: Vn,
      [Symbol.iterator]: tr[Symbol.iterator],
    }
    function na(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }
    var ra = { time: null, delay: 0, duration: 250, ease: na }
    function ru(t, n) {
      for (var r; !(r = t.__transition) || !(r = r[n]); )
        if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`)
      return r
    }
    function Eo(t) {
      var n, r
      t instanceof Hn
        ? ((n = t._id), (t = t._name))
        : ((n = nu()), ((r = ra).time = Qr()), (t = t == null ? null : t + ""))
      for (var o = this._groups, l = o.length, c = 0; c < l; ++c)
        for (var f = o[c], y = f.length, w, x = 0; x < y; ++x)
          (w = f[x]) && ur(w, t, n, x, f, r || ru(w, n))
      return new Hn(o, this._parents, t, n)
    }
    ;(Rt.prototype.interrupt = Ji), (Rt.prototype.transition = Eo)
    var { abs: ca, max: fa, min: ha } = Math
    function ui(t) {
      return [+t[0], +t[1]]
    }
    function _o(t) {
      return [ui(t[0]), ui(t[1])]
    }
    var ia = {
        name: "x",
        handles: ["w", "e"].map(yi),
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
      Ao = {
        name: "y",
        handles: ["n", "s"].map(yi),
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
      ua = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(yi),
        input: function (t) {
          return t == null ? null : _o(t)
        },
        output: function (t) {
          return t
        },
      }
    function yi(t) {
      return { type: t }
    }
    function ko(t, n) {
      var r,
        o = 1
      t == null && (t = 0), n == null && (n = 0)
      function l() {
        var c,
          f = r.length,
          y,
          w = 0,
          x = 0
        for (c = 0; c < f; ++c) (y = r[c]), (w += y.x), (x += y.y)
        for (w = (w / f - t) * o, x = (x / f - n) * o, c = 0; c < f; ++c)
          (y = r[c]), (y.x -= w), (y.y -= x)
      }
      return (
        (l.initialize = function (c) {
          r = c
        }),
        (l.x = function (c) {
          return arguments.length ? ((t = +c), l) : t
        }),
        (l.y = function (c) {
          return arguments.length ? ((n = +c), l) : n
        }),
        (l.strength = function (c) {
          return arguments.length ? ((o = +c), l) : o
        }),
        l
      )
    }
    function Co(t) {
      let n = +this._x.call(null, t),
        r = +this._y.call(null, t)
      return an(this.cover(n, r), n, r, t)
    }
    function an(t, n, r, o) {
      if (isNaN(n) || isNaN(r)) return t
      var l,
        c = t._root,
        f = { data: o },
        y = t._x0,
        w = t._y0,
        x = t._x1,
        k = t._y1,
        F,
        $,
        L,
        K,
        X,
        Z,
        Q,
        wt
      if (!c) return (t._root = f), t
      for (; c.length; )
        if (
          ((X = n >= (F = (y + x) / 2)) ? (y = F) : (x = F),
          (Z = r >= ($ = (w + k) / 2)) ? (w = $) : (k = $),
          (l = c),
          !(c = c[(Q = (Z << 1) | X)]))
        )
          return (l[Q] = f), t
      if (((L = +t._x.call(null, c.data)), (K = +t._y.call(null, c.data)), n === L && r === K))
        return (f.next = c), l ? (l[Q] = f) : (t._root = f), t
      do
        (l = l ? (l[Q] = new Array(4)) : (t._root = new Array(4))),
          (X = n >= (F = (y + x) / 2)) ? (y = F) : (x = F),
          (Z = r >= ($ = (w + k) / 2)) ? (w = $) : (k = $)
      while ((Q = (Z << 1) | X) === (wt = ((K >= $) << 1) | (L >= F)))
      return (l[wt] = c), (l[Q] = f), t
    }
    function Do(t) {
      var n,
        r,
        o = t.length,
        l,
        c,
        f = new Array(o),
        y = new Array(o),
        w = 1 / 0,
        x = 1 / 0,
        k = -1 / 0,
        F = -1 / 0
      for (r = 0; r < o; ++r)
        isNaN((l = +this._x.call(null, (n = t[r])))) ||
          isNaN((c = +this._y.call(null, n))) ||
          ((f[r] = l),
          (y[r] = c),
          l < w && (w = l),
          l > k && (k = l),
          c < x && (x = c),
          c > F && (F = c))
      if (w > k || x > F) return this
      for (this.cover(w, x).cover(k, F), r = 0; r < o; ++r) an(this, f[r], y[r], t[r])
      return this
    }
    function Mo(t, n) {
      if (isNaN((t = +t)) || isNaN((n = +n))) return this
      var r = this._x0,
        o = this._y0,
        l = this._x1,
        c = this._y1
      if (isNaN(r)) (l = (r = Math.floor(t)) + 1), (c = (o = Math.floor(n)) + 1)
      else {
        for (var f = l - r || 1, y = this._root, w, x; r > t || t >= l || o > n || n >= c; )
          switch (
            ((x = ((n < o) << 1) | (t < r)), (w = new Array(4)), (w[x] = y), (y = w), (f *= 2), x)
          ) {
            case 0:
              ;(l = r + f), (c = o + f)
              break
            case 1:
              ;(r = l - f), (c = o + f)
              break
            case 2:
              ;(l = r + f), (o = c - f)
              break
            case 3:
              ;(r = l - f), (o = c - f)
              break
          }
        this._root && this._root.length && (this._root = y)
      }
      return (this._x0 = r), (this._y0 = o), (this._x1 = l), (this._y1 = c), this
    }
    function Bo() {
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
    function Lo(t) {
      return arguments.length
        ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
        : isNaN(this._x0)
          ? void 0
          : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ]
    }
    function fn(t, n, r, o, l) {
      ;(this.node = t), (this.x0 = n), (this.y0 = r), (this.x1 = o), (this.y1 = l)
    }
    function No(t, n, r) {
      var o,
        l = this._x0,
        c = this._y0,
        f,
        y,
        w,
        x,
        k = this._x1,
        F = this._y1,
        $ = [],
        L = this._root,
        K,
        X
      for (
        L && $.push(new fn(L, l, c, k, F)),
          r == null ? (r = 1 / 0) : ((l = t - r), (c = n - r), (k = t + r), (F = n + r), (r *= r));
        (K = $.pop());

      )
        if (
          !(!(L = K.node) || (f = K.x0) > k || (y = K.y0) > F || (w = K.x1) < l || (x = K.y1) < c)
        )
          if (L.length) {
            var Z = (f + w) / 2,
              Q = (y + x) / 2
            $.push(
              new fn(L[3], Z, Q, w, x),
              new fn(L[2], f, Q, Z, x),
              new fn(L[1], Z, y, w, Q),
              new fn(L[0], f, y, Z, Q),
            ),
              (X = ((n >= Q) << 1) | (t >= Z)) &&
                ((K = $[$.length - 1]),
                ($[$.length - 1] = $[$.length - 1 - X]),
                ($[$.length - 1 - X] = K))
          } else {
            var wt = t - +this._x.call(null, L.data),
              Bt = n - +this._y.call(null, L.data),
              it = wt * wt + Bt * Bt
            if (it < r) {
              var $t = Math.sqrt((r = it))
              ;(l = t - $t), (c = n - $t), (k = t + $t), (F = n + $t), (o = L.data)
            }
          }
      return o
    }
    function So(t) {
      if (isNaN((k = +this._x.call(null, t))) || isNaN((F = +this._y.call(null, t)))) return this
      var n,
        r = this._root,
        o,
        l,
        c,
        f = this._x0,
        y = this._y0,
        w = this._x1,
        x = this._y1,
        k,
        F,
        $,
        L,
        K,
        X,
        Z,
        Q
      if (!r) return this
      if (r.length)
        for (;;) {
          if (
            ((K = k >= ($ = (f + w) / 2)) ? (f = $) : (w = $),
            (X = F >= (L = (y + x) / 2)) ? (y = L) : (x = L),
            (n = r),
            !(r = r[(Z = (X << 1) | K)]))
          )
            return this
          if (!r.length) break
          ;(n[(Z + 1) & 3] || n[(Z + 2) & 3] || n[(Z + 3) & 3]) && ((o = n), (Q = Z))
        }
      for (; r.data !== t; ) if (((l = r), !(r = r.next))) return this
      return (
        (c = r.next) && delete r.next,
        l
          ? (c ? (l.next = c) : delete l.next, this)
          : n
            ? (c ? (n[Z] = c) : delete n[Z],
              (r = n[0] || n[1] || n[2] || n[3]) &&
                r === (n[3] || n[2] || n[1] || n[0]) &&
                !r.length &&
                (o ? (o[Q] = r) : (this._root = r)),
              this)
            : ((this._root = c), this)
      )
    }
    function To(t) {
      for (var n = 0, r = t.length; n < r; ++n) this.remove(t[n])
      return this
    }
    function Fo() {
      return this._root
    }
    function $o() {
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
    function Oo(t) {
      var n = [],
        r,
        o = this._root,
        l,
        c,
        f,
        y,
        w
      for (o && n.push(new fn(o, this._x0, this._y0, this._x1, this._y1)); (r = n.pop()); )
        if (!t((o = r.node), (c = r.x0), (f = r.y0), (y = r.x1), (w = r.y1)) && o.length) {
          var x = (c + y) / 2,
            k = (f + w) / 2
          ;(l = o[3]) && n.push(new fn(l, x, k, y, w)),
            (l = o[2]) && n.push(new fn(l, c, k, x, w)),
            (l = o[1]) && n.push(new fn(l, x, f, y, k)),
            (l = o[0]) && n.push(new fn(l, c, f, x, k))
        }
      return this
    }
    function iu(t) {
      var n = [],
        r = [],
        o
      for (
        this._root && n.push(new fn(this._root, this._x0, this._y0, this._x1, this._y1));
        (o = n.pop());

      ) {
        var l = o.node
        if (l.length) {
          var c,
            f = o.x0,
            y = o.y0,
            w = o.x1,
            x = o.y1,
            k = (f + w) / 2,
            F = (y + x) / 2
          ;(c = l[0]) && n.push(new fn(c, f, y, k, F)),
            (c = l[1]) && n.push(new fn(c, k, y, w, F)),
            (c = l[2]) && n.push(new fn(c, f, F, k, x)),
            (c = l[3]) && n.push(new fn(c, k, F, w, x))
        }
        r.push(o)
      }
      for (; (o = r.pop()); ) t(o.node, o.x0, o.y0, o.x1, o.y1)
      return this
    }
    function wi(t) {
      return t[0]
    }
    function uu(t) {
      return arguments.length ? ((this._x = t), this) : this._x
    }
    function hn(t) {
      return t[1]
    }
    function Fr(t) {
      return arguments.length ? ((this._y = t), this) : this._y
    }
    function or(t, n, r) {
      var o = new xi(n ?? wi, r ?? hn, NaN, NaN, NaN, NaN)
      return t == null ? o : o.addAll(t)
    }
    function xi(t, n, r, o, l, c) {
      ;(this._x = t),
        (this._y = n),
        (this._x0 = r),
        (this._y0 = o),
        (this._x1 = l),
        (this._y1 = c),
        (this._root = void 0)
    }
    function bi(t) {
      for (var n = { data: t.data }, r = n; (t = t.next); ) r = r.next = { data: t.data }
      return n
    }
    var dn = (or.prototype = xi.prototype)
    ;(dn.copy = function () {
      var t = new xi(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        n = this._root,
        r,
        o
      if (!n) return t
      if (!n.length) return (t._root = bi(n)), t
      for (r = [{ source: n, target: (t._root = new Array(4)) }]; (n = r.pop()); )
        for (var l = 0; l < 4; ++l)
          (o = n.source[l]) &&
            (o.length
              ? r.push({ source: o, target: (n.target[l] = new Array(4)) })
              : (n.target[l] = bi(o)))
      return t
    }),
      (dn.add = Co),
      (dn.addAll = Do),
      (dn.cover = Mo),
      (dn.data = Bo),
      (dn.extent = Lo),
      (dn.find = No),
      (dn.remove = So),
      (dn.removeAll = To),
      (dn.root = Fo),
      (dn.size = $o),
      (dn.visit = Oo),
      (dn.visitAfter = iu),
      (dn.x = uu),
      (dn.y = Fr)
    function $r(t) {
      return function () {
        return t
      }
    }
    function xr(t) {
      return (t() - 0.5) * 1e-6
    }
    function jo(t) {
      return t.index
    }
    function ou(t, n) {
      var r = t.get(n)
      if (!r) throw new Error("node not found: " + n)
      return r
    }
    function qo(t) {
      var n = jo,
        r = F,
        o,
        l = $r(30),
        c,
        f,
        y,
        w,
        x,
        k = 1
      t == null && (t = [])
      function F(Z) {
        return 1 / Math.min(y[Z.source.index], y[Z.target.index])
      }
      function $(Z) {
        for (var Q = 0, wt = t.length; Q < k; ++Q)
          for (var Bt = 0, it, $t, Wt, W, _t, dt, Dt; Bt < wt; ++Bt)
            (it = t[Bt]),
              ($t = it.source),
              (Wt = it.target),
              (W = Wt.x + Wt.vx - $t.x - $t.vx || xr(x)),
              (_t = Wt.y + Wt.vy - $t.y - $t.vy || xr(x)),
              (dt = Math.sqrt(W * W + _t * _t)),
              (dt = ((dt - c[Bt]) / dt) * Z * o[Bt]),
              (W *= dt),
              (_t *= dt),
              (Wt.vx -= W * (Dt = w[Bt])),
              (Wt.vy -= _t * Dt),
              ($t.vx += W * (Dt = 1 - Dt)),
              ($t.vy += _t * Dt)
      }
      function L() {
        if (f) {
          var Z,
            Q = f.length,
            wt = t.length,
            Bt = new Map(f.map(($t, Wt) => [n($t, Wt, f), $t])),
            it
          for (Z = 0, y = new Array(Q); Z < wt; ++Z)
            (it = t[Z]),
              (it.index = Z),
              typeof it.source != "object" && (it.source = ou(Bt, it.source)),
              typeof it.target != "object" && (it.target = ou(Bt, it.target)),
              (y[it.source.index] = (y[it.source.index] || 0) + 1),
              (y[it.target.index] = (y[it.target.index] || 0) + 1)
          for (Z = 0, w = new Array(wt); Z < wt; ++Z)
            (it = t[Z]), (w[Z] = y[it.source.index] / (y[it.source.index] + y[it.target.index]))
          ;(o = new Array(wt)), K(), (c = new Array(wt)), X()
        }
      }
      function K() {
        if (f) for (var Z = 0, Q = t.length; Z < Q; ++Z) o[Z] = +r(t[Z], Z, t)
      }
      function X() {
        if (f) for (var Z = 0, Q = t.length; Z < Q; ++Z) c[Z] = +l(t[Z], Z, t)
      }
      return (
        ($.initialize = function (Z, Q) {
          ;(f = Z), (x = Q), L()
        }),
        ($.links = function (Z) {
          return arguments.length ? ((t = Z), L(), $) : t
        }),
        ($.id = function (Z) {
          return arguments.length ? ((n = Z), $) : n
        }),
        ($.iterations = function (Z) {
          return arguments.length ? ((k = +Z), $) : k
        }),
        ($.strength = function (Z) {
          return arguments.length ? ((r = typeof Z == "function" ? Z : $r(+Z)), K(), $) : r
        }),
        ($.distance = function (Z) {
          return arguments.length ? ((l = typeof Z == "function" ? Z : $r(+Z)), X(), $) : l
        }),
        $
      )
    }
    function zo() {
      let t = 1
      return () => (t = (1664525 * t + 1013904223) % 4294967296) / 4294967296
    }
    function Po(t) {
      return t.x
    }
    function oi(t) {
      return t.y
    }
    var Io = 10,
      Un = Math.PI * (3 - Math.sqrt(5))
    function Ei(t) {
      var n,
        r = 1,
        o = 0.001,
        l = 1 - Math.pow(o, 1 / 300),
        c = 0,
        f = 0.6,
        y = new Map(),
        w = Sr(F),
        x = Xe("tick", "end"),
        k = zo()
      t == null && (t = [])
      function F() {
        $(), x.call("tick", n), r < o && (w.stop(), x.call("end", n))
      }
      function $(X) {
        var Z,
          Q = t.length,
          wt
        X === void 0 && (X = 1)
        for (var Bt = 0; Bt < X; ++Bt)
          for (
            r += (c - r) * l,
              y.forEach(function (it) {
                it(r)
              }),
              Z = 0;
            Z < Q;
            ++Z
          )
            (wt = t[Z]),
              wt.fx == null ? (wt.x += wt.vx *= f) : ((wt.x = wt.fx), (wt.vx = 0)),
              wt.fy == null ? (wt.y += wt.vy *= f) : ((wt.y = wt.fy), (wt.vy = 0))
        return n
      }
      function L() {
        for (var X = 0, Z = t.length, Q; X < Z; ++X) {
          if (
            ((Q = t[X]),
            (Q.index = X),
            Q.fx != null && (Q.x = Q.fx),
            Q.fy != null && (Q.y = Q.fy),
            isNaN(Q.x) || isNaN(Q.y))
          ) {
            var wt = Io * Math.sqrt(0.5 + X),
              Bt = X * Un
            ;(Q.x = wt * Math.cos(Bt)), (Q.y = wt * Math.sin(Bt))
          }
          ;(isNaN(Q.vx) || isNaN(Q.vy)) && (Q.vx = Q.vy = 0)
        }
      }
      function K(X) {
        return X.initialize && X.initialize(t, k), X
      }
      return (
        L(),
        (n = {
          tick: $,
          restart: function () {
            return w.restart(F), n
          },
          stop: function () {
            return w.stop(), n
          },
          nodes: function (X) {
            return arguments.length ? ((t = X), L(), y.forEach(K), n) : t
          },
          alpha: function (X) {
            return arguments.length ? ((r = +X), n) : r
          },
          alphaMin: function (X) {
            return arguments.length ? ((o = +X), n) : o
          },
          alphaDecay: function (X) {
            return arguments.length ? ((l = +X), n) : +l
          },
          alphaTarget: function (X) {
            return arguments.length ? ((c = +X), n) : c
          },
          velocityDecay: function (X) {
            return arguments.length ? ((f = 1 - X), n) : 1 - f
          },
          randomSource: function (X) {
            return arguments.length ? ((k = X), y.forEach(K), n) : k
          },
          force: function (X, Z) {
            return arguments.length > 1 ? (Z == null ? y.delete(X) : y.set(X, K(Z)), n) : y.get(X)
          },
          find: function (X, Z, Q) {
            var wt = 0,
              Bt = t.length,
              it,
              $t,
              Wt,
              W,
              _t
            for (Q == null ? (Q = 1 / 0) : (Q *= Q), wt = 0; wt < Bt; ++wt)
              (W = t[wt]),
                (it = X - W.x),
                ($t = Z - W.y),
                (Wt = it * it + $t * $t),
                Wt < Q && ((_t = W), (Q = Wt))
            return _t
          },
          on: function (X, Z) {
            return arguments.length > 1 ? (x.on(X, Z), n) : x.on(X)
          },
        })
      )
    }
    function Ro() {
      var t,
        n,
        r,
        o,
        l = $r(-30),
        c,
        f = 1,
        y = 1 / 0,
        w = 0.81
      function x(L) {
        var K,
          X = t.length,
          Z = or(t, Po, oi).visitAfter(F)
        for (o = L, K = 0; K < X; ++K) (n = t[K]), Z.visit($)
      }
      function k() {
        if (t) {
          var L,
            K = t.length,
            X
          for (c = new Array(K), L = 0; L < K; ++L) (X = t[L]), (c[X.index] = +l(X, L, t))
        }
      }
      function F(L) {
        var K = 0,
          X,
          Z,
          Q = 0,
          wt,
          Bt,
          it
        if (L.length) {
          for (wt = Bt = it = 0; it < 4; ++it)
            (X = L[it]) &&
              (Z = Math.abs(X.value)) &&
              ((K += X.value), (Q += Z), (wt += Z * X.x), (Bt += Z * X.y))
          ;(L.x = wt / Q), (L.y = Bt / Q)
        } else {
          ;(X = L), (X.x = X.data.x), (X.y = X.data.y)
          do K += c[X.data.index]
          while ((X = X.next))
        }
        L.value = K
      }
      function $(L, K, X, Z) {
        if (!L.value) return !0
        var Q = L.x - n.x,
          wt = L.y - n.y,
          Bt = Z - K,
          it = Q * Q + wt * wt
        if ((Bt * Bt) / w < it)
          return (
            it < y &&
              (Q === 0 && ((Q = xr(r)), (it += Q * Q)),
              wt === 0 && ((wt = xr(r)), (it += wt * wt)),
              it < f && (it = Math.sqrt(f * it)),
              (n.vx += (Q * L.value * o) / it),
              (n.vy += (wt * L.value * o) / it)),
            !0
          )
        if (!(L.length || it >= y)) {
          ;(L.data !== n || L.next) &&
            (Q === 0 && ((Q = xr(r)), (it += Q * Q)),
            wt === 0 && ((wt = xr(r)), (it += wt * wt)),
            it < f && (it = Math.sqrt(f * it)))
          do
            L.data !== n && ((Bt = (c[L.data.index] * o) / it), (n.vx += Q * Bt), (n.vy += wt * Bt))
          while ((L = L.next))
        }
      }
      return (
        (x.initialize = function (L, K) {
          ;(t = L), (r = K), k()
        }),
        (x.strength = function (L) {
          return arguments.length ? ((l = typeof L == "function" ? L : $r(+L)), k(), x) : l
        }),
        (x.distanceMin = function (L) {
          return arguments.length ? ((f = L * L), x) : Math.sqrt(f)
        }),
        (x.distanceMax = function (L) {
          return arguments.length ? ((y = L * L), x) : Math.sqrt(y)
        }),
        (x.theta = function (L) {
          return arguments.length ? ((w = L * L), x) : Math.sqrt(w)
        }),
        x
      )
    }
    var br = (t) => () => t
    function Or(t, { sourceEvent: n, target: r, transform: o, dispatch: l }) {
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        target: { value: r, enumerable: !0, configurable: !0 },
        transform: { value: o, enumerable: !0, configurable: !0 },
        _: { value: l },
      })
    }
    function Wn(t, n, r) {
      ;(this.k = t), (this.x = n), (this.y = r)
    }
    Wn.prototype = {
      constructor: Wn,
      scale: function (t) {
        return t === 1 ? this : new Wn(this.k * t, this.x, this.y)
      },
      translate: function (t, n) {
        return (t === 0) & (n === 0)
          ? this
          : new Wn(this.k, this.x + this.k * t, this.y + this.k * n)
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
    var _i = new Wn(1, 0, 0)
    au.prototype = Wn.prototype
    function au(t) {
      for (; !t.__zoom; ) if (!(t = t.parentNode)) return _i
      return t.__zoom
    }
    function Ai(t) {
      t.stopImmediatePropagation()
    }
    function jr(t) {
      t.preventDefault(), t.stopImmediatePropagation()
    }
    function Vo(t) {
      return (!t.ctrlKey || t.type === "wheel") && !t.button
    }
    function Ho() {
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
    function su() {
      return this.__zoom || _i
    }
    function lu(t) {
      return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) * (t.ctrlKey ? 10 : 1)
    }
    function oa() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function Uo(t, n, r) {
      var o = t.invertX(n[0][0]) - r[0][0],
        l = t.invertX(n[1][0]) - r[1][0],
        c = t.invertY(n[0][1]) - r[0][1],
        f = t.invertY(n[1][1]) - r[1][1]
      return t.translate(
        l > o ? (o + l) / 2 : Math.min(0, o) || Math.max(0, l),
        f > c ? (c + f) / 2 : Math.min(0, c) || Math.max(0, f),
      )
    }
    function aa() {
      var t = Vo,
        n = Ho,
        r = Uo,
        o = lu,
        l = oa,
        c = [0, 1 / 0],
        f = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0],
        ],
        y = 250,
        w = Jr,
        x = Xe("start", "zoom", "end"),
        k,
        F,
        $,
        L = 500,
        K = 150,
        X = 0,
        Z = 10
      function Q(H) {
        H.property("__zoom", su)
          .on("wheel.zoom", _t, { passive: !1 })
          .on("mousedown.zoom", dt)
          .on("dblclick.zoom", Dt)
          .filter(l)
          .on("touchstart.zoom", Pt)
          .on("touchmove.zoom", Qt)
          .on("touchend.zoom touchcancel.zoom", mt)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      ;(Q.transform = function (H, bt, st, Et) {
        var Ot = H.selection ? H.selection() : H
        Ot.property("__zoom", su),
          H !== Ot
            ? $t(H, bt, st, Et)
            : Ot.interrupt().each(function () {
                Wt(this, arguments)
                  .event(Et)
                  .start()
                  .zoom(null, typeof bt == "function" ? bt.apply(this, arguments) : bt)
                  .end()
              })
      }),
        (Q.scaleBy = function (H, bt, st, Et) {
          Q.scaleTo(
            H,
            function () {
              var Ot = this.__zoom.k,
                Ft = typeof bt == "function" ? bt.apply(this, arguments) : bt
              return Ot * Ft
            },
            st,
            Et,
          )
        }),
        (Q.scaleTo = function (H, bt, st, Et) {
          Q.transform(
            H,
            function () {
              var Ot = n.apply(this, arguments),
                Ft = this.__zoom,
                pt = st == null ? it(Ot) : typeof st == "function" ? st.apply(this, arguments) : st,
                Ut = Ft.invert(pt),
                oe = typeof bt == "function" ? bt.apply(this, arguments) : bt
              return r(Bt(wt(Ft, oe), pt, Ut), Ot, f)
            },
            st,
            Et,
          )
        }),
        (Q.translateBy = function (H, bt, st, Et) {
          Q.transform(
            H,
            function () {
              return r(
                this.__zoom.translate(
                  typeof bt == "function" ? bt.apply(this, arguments) : bt,
                  typeof st == "function" ? st.apply(this, arguments) : st,
                ),
                n.apply(this, arguments),
                f,
              )
            },
            null,
            Et,
          )
        }),
        (Q.translateTo = function (H, bt, st, Et, Ot) {
          Q.transform(
            H,
            function () {
              var Ft = n.apply(this, arguments),
                pt = this.__zoom,
                Ut = Et == null ? it(Ft) : typeof Et == "function" ? Et.apply(this, arguments) : Et
              return r(
                _i
                  .translate(Ut[0], Ut[1])
                  .scale(pt.k)
                  .translate(
                    typeof bt == "function" ? -bt.apply(this, arguments) : -bt,
                    typeof st == "function" ? -st.apply(this, arguments) : -st,
                  ),
                Ft,
                f,
              )
            },
            Et,
            Ot,
          )
        })
      function wt(H, bt) {
        return (bt = Math.max(c[0], Math.min(c[1], bt))), bt === H.k ? H : new Wn(bt, H.x, H.y)
      }
      function Bt(H, bt, st) {
        var Et = bt[0] - st[0] * H.k,
          Ot = bt[1] - st[1] * H.k
        return Et === H.x && Ot === H.y ? H : new Wn(H.k, Et, Ot)
      }
      function it(H) {
        return [(+H[0][0] + +H[1][0]) / 2, (+H[0][1] + +H[1][1]) / 2]
      }
      function $t(H, bt, st, Et) {
        H.on("start.zoom", function () {
          Wt(this, arguments).event(Et).start()
        })
          .on("interrupt.zoom end.zoom", function () {
            Wt(this, arguments).event(Et).end()
          })
          .tween("zoom", function () {
            var Ot = this,
              Ft = arguments,
              pt = Wt(Ot, Ft).event(Et),
              Ut = n.apply(Ot, Ft),
              oe = st == null ? it(Ut) : typeof st == "function" ? st.apply(Ot, Ft) : st,
              Ae = Math.max(Ut[1][0] - Ut[0][0], Ut[1][1] - Ut[0][1]),
              we = Ot.__zoom,
              We = typeof bt == "function" ? bt.apply(Ot, Ft) : bt,
              Fe = w(we.invert(oe).concat(Ae / we.k), We.invert(oe).concat(Ae / We.k))
            return function (Kn) {
              if (Kn === 1) Kn = We
              else {
                var ar = Fe(Kn),
                  Jo = Ae / ar[2]
                Kn = new Wn(Jo, oe[0] - ar[0] * Jo, oe[1] - ar[1] * Jo)
              }
              pt.zoom(null, Kn)
            }
          })
      }
      function Wt(H, bt, st) {
        return (!st && H.__zooming) || new W(H, bt)
      }
      function W(H, bt) {
        ;(this.that = H),
          (this.args = bt),
          (this.active = 0),
          (this.sourceEvent = null),
          (this.extent = n.apply(H, bt)),
          (this.taps = 0)
      }
      W.prototype = {
        event: function (H) {
          return H && (this.sourceEvent = H), this
        },
        start: function () {
          return ++this.active === 1 && ((this.that.__zooming = this), this.emit("start")), this
        },
        zoom: function (H, bt) {
          return (
            this.mouse && H !== "mouse" && (this.mouse[1] = bt.invert(this.mouse[0])),
            this.touch0 && H !== "touch" && (this.touch0[1] = bt.invert(this.touch0[0])),
            this.touch1 && H !== "touch" && (this.touch1[1] = bt.invert(this.touch1[0])),
            (this.that.__zoom = bt),
            this.emit("zoom"),
            this
          )
        },
        end: function () {
          return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this
        },
        emit: function (H) {
          var bt = se(this.that).datum()
          x.call(
            H,
            this.that,
            new Or(H, {
              sourceEvent: this.sourceEvent,
              target: Q,
              type: H,
              transform: this.that.__zoom,
              dispatch: x,
            }),
            bt,
          )
        },
      }
      function _t(H, ...bt) {
        if (!t.apply(this, arguments)) return
        var st = Wt(this, bt).event(H),
          Et = this.__zoom,
          Ot = Math.max(c[0], Math.min(c[1], Et.k * Math.pow(2, o.apply(this, arguments)))),
          Ft = Jt(H)
        if (st.wheel)
          (st.mouse[0][0] !== Ft[0] || st.mouse[0][1] !== Ft[1]) &&
            (st.mouse[1] = Et.invert((st.mouse[0] = Ft))),
            clearTimeout(st.wheel)
        else {
          if (Et.k === Ot) return
          ;(st.mouse = [Ft, Et.invert(Ft)]), wr(this), st.start()
        }
        jr(H),
          (st.wheel = setTimeout(pt, K)),
          st.zoom("mouse", r(Bt(wt(Et, Ot), st.mouse[0], st.mouse[1]), st.extent, f))
        function pt() {
          ;(st.wheel = null), st.end()
        }
      }
      function dt(H, ...bt) {
        if ($ || !t.apply(this, arguments)) return
        var st = H.currentTarget,
          Et = Wt(this, bt, !0).event(H),
          Ot = se(H.view).on("mousemove.zoom", oe, !0).on("mouseup.zoom", Ae, !0),
          Ft = Jt(H, st),
          pt = H.clientX,
          Ut = H.clientY
        Di(H.view), Ai(H), (Et.mouse = [Ft, this.__zoom.invert(Ft)]), wr(this), Et.start()
        function oe(we) {
          if ((jr(we), !Et.moved)) {
            var We = we.clientX - pt,
              Fe = we.clientY - Ut
            Et.moved = We * We + Fe * Fe > X
          }
          Et.event(we).zoom(
            "mouse",
            r(Bt(Et.that.__zoom, (Et.mouse[0] = Jt(we, st)), Et.mouse[1]), Et.extent, f),
          )
        }
        function Ae(we) {
          Ot.on("mousemove.zoom mouseup.zoom", null),
            Mi(we.view, Et.moved),
            jr(we),
            Et.event(we).end()
        }
      }
      function Dt(H, ...bt) {
        if (t.apply(this, arguments)) {
          var st = this.__zoom,
            Et = Jt(H.changedTouches ? H.changedTouches[0] : H, this),
            Ot = st.invert(Et),
            Ft = st.k * (H.shiftKey ? 0.5 : 2),
            pt = r(Bt(wt(st, Ft), Et, Ot), n.apply(this, bt), f)
          jr(H),
            y > 0
              ? se(this).transition().duration(y).call($t, pt, Et, H)
              : se(this).call(Q.transform, pt, Et, H)
        }
      }
      function Pt(H, ...bt) {
        if (t.apply(this, arguments)) {
          var st = H.touches,
            Et = st.length,
            Ot = Wt(this, bt, H.changedTouches.length === Et).event(H),
            Ft,
            pt,
            Ut,
            oe
          for (Ai(H), pt = 0; pt < Et; ++pt)
            (Ut = st[pt]),
              (oe = Jt(Ut, this)),
              (oe = [oe, this.__zoom.invert(oe), Ut.identifier]),
              Ot.touch0
                ? !Ot.touch1 && Ot.touch0[2] !== oe[2] && ((Ot.touch1 = oe), (Ot.taps = 0))
                : ((Ot.touch0 = oe), (Ft = !0), (Ot.taps = 1 + !!k))
          k && (k = clearTimeout(k)),
            Ft &&
              (Ot.taps < 2 &&
                ((F = oe[0]),
                (k = setTimeout(function () {
                  k = null
                }, L))),
              wr(this),
              Ot.start())
        }
      }
      function Qt(H, ...bt) {
        if (this.__zooming) {
          var st = Wt(this, bt).event(H),
            Et = H.changedTouches,
            Ot = Et.length,
            Ft,
            pt,
            Ut,
            oe
          for (jr(H), Ft = 0; Ft < Ot; ++Ft)
            (pt = Et[Ft]),
              (Ut = Jt(pt, this)),
              st.touch0 && st.touch0[2] === pt.identifier
                ? (st.touch0[0] = Ut)
                : st.touch1 && st.touch1[2] === pt.identifier && (st.touch1[0] = Ut)
          if (((pt = st.that.__zoom), st.touch1)) {
            var Ae = st.touch0[0],
              we = st.touch0[1],
              We = st.touch1[0],
              Fe = st.touch1[1],
              Kn = (Kn = We[0] - Ae[0]) * Kn + (Kn = We[1] - Ae[1]) * Kn,
              ar = (ar = Fe[0] - we[0]) * ar + (ar = Fe[1] - we[1]) * ar
            ;(pt = wt(pt, Math.sqrt(Kn / ar))),
              (Ut = [(Ae[0] + We[0]) / 2, (Ae[1] + We[1]) / 2]),
              (oe = [(we[0] + Fe[0]) / 2, (we[1] + Fe[1]) / 2])
          } else if (st.touch0) (Ut = st.touch0[0]), (oe = st.touch0[1])
          else return
          st.zoom("touch", r(Bt(pt, Ut, oe), st.extent, f))
        }
      }
      function mt(H, ...bt) {
        if (this.__zooming) {
          var st = Wt(this, bt).event(H),
            Et = H.changedTouches,
            Ot = Et.length,
            Ft,
            pt
          for (
            Ai(H),
              $ && clearTimeout($),
              $ = setTimeout(function () {
                $ = null
              }, L),
              Ft = 0;
            Ft < Ot;
            ++Ft
          )
            (pt = Et[Ft]),
              st.touch0 && st.touch0[2] === pt.identifier
                ? delete st.touch0
                : st.touch1 && st.touch1[2] === pt.identifier && delete st.touch1
          if ((st.touch1 && !st.touch0 && ((st.touch0 = st.touch1), delete st.touch1), st.touch0))
            st.touch0[1] = this.__zoom.invert(st.touch0[0])
          else if (
            (st.end(),
            st.taps === 2 && ((pt = Jt(pt, this)), Math.hypot(F[0] - pt[0], F[1] - pt[1]) < Z))
          ) {
            var Ut = se(this).on("dblclick.zoom")
            Ut && Ut.apply(this, arguments)
          }
        }
      }
      return (
        (Q.wheelDelta = function (H) {
          return arguments.length ? ((o = typeof H == "function" ? H : br(+H)), Q) : o
        }),
        (Q.filter = function (H) {
          return arguments.length ? ((t = typeof H == "function" ? H : br(!!H)), Q) : t
        }),
        (Q.touchable = function (H) {
          return arguments.length ? ((l = typeof H == "function" ? H : br(!!H)), Q) : l
        }),
        (Q.extent = function (H) {
          return arguments.length
            ? ((n =
                typeof H == "function"
                  ? H
                  : br([
                      [+H[0][0], +H[0][1]],
                      [+H[1][0], +H[1][1]],
                    ])),
              Q)
            : n
        }),
        (Q.scaleExtent = function (H) {
          return arguments.length ? ((c[0] = +H[0]), (c[1] = +H[1]), Q) : [c[0], c[1]]
        }),
        (Q.translateExtent = function (H) {
          return arguments.length
            ? ((f[0][0] = +H[0][0]),
              (f[1][0] = +H[1][0]),
              (f[0][1] = +H[0][1]),
              (f[1][1] = +H[1][1]),
              Q)
            : [
                [f[0][0], f[0][1]],
                [f[1][0], f[1][1]],
              ]
        }),
        (Q.constrain = function (H) {
          return arguments.length ? ((r = H), Q) : r
        }),
        (Q.duration = function (H) {
          return arguments.length ? ((y = +H), Q) : y
        }),
        (Q.interpolate = function (H) {
          return arguments.length ? ((w = H), Q) : w
        }),
        (Q.on = function () {
          var H = x.on.apply(x, arguments)
          return H === x ? Q : H
        }),
        (Q.clickDistance = function (H) {
          return arguments.length ? ((X = (H = +H) * H), Q) : Math.sqrt(X)
        }),
        (Q.tapDistance = function (H) {
          return arguments.length ? ((Z = +H), Q) : Z
        }),
        Q
      )
    }
    var sa = Object.hasOwnProperty,
      ai = Xt(rn(), 1),
      la = (0, ai.default)()
    function Wo(t) {
      return t.document.body.dataset.slug
    }
    function si(t) {
      let n = Go(fu(t, "index"), !0)
      return n.length === 0 ? "/" : n
    }
    function Ko(t) {
      let n = t
        .split("/")
        .filter((r) => r !== "")
        .slice(0, -1)
        .map((r) => "..")
        .join("/")
      return n.length === 0 && (n = "."), n
    }
    function Xo(t, n) {
      return Yo(Ko(t), si(n))
    }
    function Yo(...t) {
      return t
        .filter((n) => n !== "")
        .join("/")
        .replace(/\/\/+/g, "/")
    }
    function cu(t, n) {
      return t === n || t.endsWith("/" + n)
    }
    function fu(t, n) {
      return cu(t, n) && (t = t.slice(0, -n.length)), t
    }
    function Go(t, n) {
      return (
        t.startsWith("/") && (t = t.substring(1)), !n && t.endsWith("/") && (t = t.slice(0, -1)), t
      )
    }
    var ki = "graph-visited"
    function Ci() {
      return new Set(JSON.parse(localStorage.getItem(ki) ?? "[]"))
    }
    function e(t) {
      let n = Ci()
      n.add(t), localStorage.setItem(ki, JSON.stringify([...n]))
    }
    async function u(t, n) {
      let r = si(n),
        o = Ci(),
        l = document.getElementById(t)
      if (!l) return
      Vt(l)
      let {
          drag: c,
          zoom: f,
          depth: y,
          scale: w,
          repelForce: x,
          centerForce: k,
          linkDistance: F,
          fontSize: $,
          opacityScale: L,
          removeTags: K,
          showTags: X,
          focusOnHover: Z,
        } = JSON.parse(l.dataset.cfg),
        Q = new Map(Object.entries(await fetchData).map(([pt, Ut]) => [si(pt), Ut])),
        wt = [],
        Bt = [],
        it = new Set(Q.keys())
      for (let [pt, Ut] of Q.entries()) {
        let oe = Ut.links ?? []
        for (let Ae of oe) it.has(Ae) && wt.push({ source: pt, target: Ae })
        if (X) {
          let Ae = Ut.tags.filter((we) => !K.includes(we)).map((we) => si("tags/" + we))
          Bt.push(...Ae.filter((we) => !Bt.includes(we)))
          for (let we of Ae) wt.push({ source: pt, target: we })
        }
      }
      let $t = new Set(),
        Wt = [r, "__SENTINEL"]
      if (y >= 0)
        for (; y >= 0 && Wt.length > 0; ) {
          let pt = Wt.shift()
          if (pt === "__SENTINEL") y--, Wt.push("__SENTINEL")
          else {
            $t.add(pt)
            let Ut = wt.filter((Ae) => Ae.source === pt),
              oe = wt.filter((Ae) => Ae.target === pt)
            Wt.push(...Ut.map((Ae) => Ae.target), ...oe.map((Ae) => Ae.source))
          }
        }
      else it.forEach((pt) => $t.add(pt)), X && Bt.forEach((pt) => $t.add(pt))
      let W = {
          nodes: [...$t].map((pt) => {
            let Ut = pt.startsWith("tags/") ? "#" + pt.substring(5) : Q.get(pt)?.title ?? pt
            return { id: pt, text: Ut, tags: Q.get(pt)?.tags ?? [] }
          }),
          links: wt.filter((pt) => $t.has(pt.source) && $t.has(pt.target)),
        },
        _t = Ei(W.nodes)
          .force("charge", Ro().strength(-100 * x))
          .force(
            "link",
            qo(W.links)
              .id((pt) => pt.id)
              .distance(F),
          )
          .force("center", ko().strength(k)),
        dt = Math.max(l.offsetHeight, 250),
        Dt = l.offsetWidth,
        Pt = se("#" + t)
          .append("svg")
          .attr("width", Dt)
          .attr("height", dt)
          .attr("viewBox", [-Dt / 2 / w, -dt / 2 / w, Dt / w, dt / w]),
        Qt = Pt.append("g")
          .selectAll("line")
          .data(W.links)
          .join("line")
          .attr("class", "link")
          .attr("stroke", "var(--lightgray)")
          .attr("stroke-width", 1),
        mt = Pt.append("g").selectAll("g").data(W.nodes).enter().append("g"),
        H = (pt) =>
          pt.id === r
            ? "var(--secondary)"
            : o.has(pt.id) || pt.id.startsWith("tags/")
              ? "var(--tertiary)"
              : "var(--gray)",
        bt = (pt) => {
          function Ut(We, Fe) {
            We.active || pt.alphaTarget(1).restart(), (Fe.fx = Fe.x), (Fe.fy = Fe.y)
          }
          function oe(We, Fe) {
            ;(Fe.fx = We.x), (Fe.fy = We.y)
          }
          function Ae(We, Fe) {
            We.active || pt.alphaTarget(0), (Fe.fx = null), (Fe.fy = null)
          }
          let we = () => {}
          return zr()
            .on("start", c ? Ut : we)
            .on("drag", c ? oe : we)
            .on("end", c ? Ae : we)
        }
      function st(pt) {
        let Ut = wt.filter((oe) => oe.source.id === pt.id || oe.target.id === pt.id).length
        return 2 + Math.sqrt(Ut)
      }
      let Et = [],
        Ot = mt
          .append("circle")
          .attr("class", "node")
          .attr("id", (pt) => pt.id)
          .attr("r", st)
          .attr("fill", H)
          .style("cursor", "pointer")
          .on("click", (pt, Ut) => {
            let oe = Xo(n, Ut.id)
            window.spaNavigate(new URL(oe, window.location.toString()))
          })
          .on("mouseover", function (pt, Ut) {
            let oe = Ut.id,
              Ae = en(".link").filter((Fe) => Fe.source.id === oe || Fe.target.id === oe)
            Z &&
              ((Et = Ae.data().flatMap((Fe) => [Fe.source.id, Fe.target.id])),
              en(".link").style("opacity", 0.2),
              en(".node")
                .filter((Fe) => !Et.includes(Fe.id))
                .style("opacity", 0.2)),
              Ae.attr("stroke", "var(--gray)").attr("stroke-width", 1)
            let we = $ * 1.5,
              We = this.parentNode
            se(We)
              .raise()
              .select("text")
              .attr("opacityOld", se(We).select("text").style("opacity"))
              .style("opacity", 1)
              .style("font-size", we + "em")
          })
          .on("mouseleave", function (pt, Ut) {
            Z && (en(".link").style("opacity", 1), en(".node").style("opacity", 1))
            let oe = Ut.id
            en(".link")
              .filter((we) => we.source.id === oe || we.target.id === oe)
              .attr("stroke", "var(--lightgray)")
            let Ae = this.parentNode
            se(Ae)
              .select("text")
              .style("opacity", se(Ae).select("text").attr("opacityOld"))
              .style("font-size", $ + "em")
          })
          .call(bt(_t)),
        Ft = mt
          .append("text")
          .attr("dx", 0)
          .attr("dy", (pt) => -st(pt) + "px")
          .attr("text-anchor", "middle")
          .text((pt) => pt.text)
          .style("opacity", (L - 1) / 3.75)
          .style("pointer-events", "none")
          .style("font-size", $ + "em")
          .raise()
          .call(bt(_t))
      f &&
        Pt.call(
          aa()
            .extent([
              [0, 0],
              [Dt, dt],
            ])
            .scaleExtent([0.25, 4])
            .on("zoom", ({ transform: pt }) => {
              Qt.attr("transform", pt), Ot.attr("transform", pt)
              let Ut = pt.k * L,
                oe = Math.max((Ut - 1) / 3.75, 0)
              Ft.attr("transform", pt).style("opacity", oe)
            }),
        ),
        _t.on("tick", () => {
          Qt.attr("x1", (pt) => pt.source.x)
            .attr("y1", (pt) => pt.source.y)
            .attr("x2", (pt) => pt.target.x)
            .attr("y2", (pt) => pt.target.y),
            Ot.attr("cx", (pt) => pt.x).attr("cy", (pt) => pt.y),
            Ft.attr("x", (pt) => pt.x).attr("y", (pt) => pt.y)
        })
    }
    function s() {
      let t = Wo(window),
        n = document.getElementById("global-graph-outer"),
        r = n?.closest(".sidebar")
      n?.classList.add("active"), r && (r.style.zIndex = "1"), u("global-graph-container", t)
      function o() {
        n?.classList.remove("active")
        let l = document.getElementById("global-graph-container")
        r && (r.style.zIndex = "unset"), l && Vt(l)
      }
      he(n, o)
    }
    document.addEventListener("nav", async (t) => {
      let n = t.detail.url
      e(n), await u("graph-container", n)
      let r = document.getElementById("global-graph-icon")
      r?.addEventListener("click", s), window.addCleanup(() => r?.removeEventListener("click", s))
    }),
      document.addEventListener("nav", async () => {
        let t = document.getElementById("highlight-modal"),
          n = document.getElementById("shortcut-container"),
          r = document.getElementById("shortcut-key"),
          o = document.getElementsByClassName("keybind")[0],
          l = document.querySelector(".center"),
          c = document.querySelector(".right.sidebar"),
          f = () => {
            l && (l.style.zIndex = "-1"), c && (c.style.zIndex = "-1"), n?.classList.add("active")
          },
          y = () => {
            l && (l.style.zIndex = "unset"),
              c && (c.style.zIndex = "unset"),
              n?.classList.remove("active")
          }
        async function w(F) {
          if (r)
            for (let $ of JSON.parse(r.dataset.mapping)) {
              let [L, K] = $.split("--")
              if ((t && k(), F.key === K && (F.ctrlKey || F.metaKey))) {
                F.preventDefault(), n?.classList.contains("active") ? y() : f()
                break
              }
            }
        }
        if (
          (document.addEventListener("keydown", w),
          window.addCleanup(() => document.removeEventListener("keydown", w)),
          he(o, y),
          !t)
        )
          return
        let x = (F) => {
            n?.classList.contains("active") ||
              (t.classList.add("active"), (t.style.visibility = "visible"))
          },
          k = () => {
            t.classList.remove("active"), (t.style.visibility = "hidden")
          }
        Ne(
          o,
          ["mouseenter", x],
          [
            "mouseleave",
            () => {
              n?.classList.contains("active") || k()
            },
          ],
          [
            "mousemove",
            ({ pageX: F, pageY: $ }) => {
              n?.classList.contains("active") ||
                (t.classList.add("active"),
                Object.assign(t.style, { left: `${F + 10}px`, top: `${$ + 10}px` }))
            },
          ],
        )
      })
    var p = new Map([
      ["\\", "/"],
      ["l", "/projects"],
      ["j", "/curius"],
    ])
    document.addEventListener("nav", () => {
      let t = document.querySelector("#darkmode-toggle"),
        n = document.getElementById("global-graph-outer"),
        r = document.getElementById("shortcut-container")
      function o(y) {
        t &&
          y.key === "o" &&
          (y.ctrlKey || y.metaKey) &&
          (y.preventDefault(), r?.classList.toggle("active", !1), t.click())
      }
      function l() {
        n?.classList.remove("active")
        let y = document.getElementById("global-graph-container"),
          w = n?.closest(".sidebar")
        y && (w && (w.style.zIndex = "unset"), Vt(y))
      }
      function c(y) {
        y.key === "g" &&
          (y.ctrlKey || y.metaKey) &&
          (y.preventDefault(),
          r?.classList.toggle("active", !1),
          n?.classList.contains("active") ? l() : s())
      }
      function f(y) {
        if (p.get(y.key) !== void 0 && (y.ctrlKey || y.metaKey)) {
          y.preventDefault()
          let w = p.get(y.key)
          if ((r?.classList.toggle("active", !1), window.location.pathname === w)) return
          window.location.href = w
        }
      }
      Ne(document, ["keydown", o], ["keydown", c], ["keydown", f])
    })
    var m = { openllm: "OpenLLM", bentoml: "BentoML", onw: "onw" },
      _ = {
        openllm: "Serve, fine-tune and deploy LLMs in production",
        bentoml: "Build Production-grade AI Application",
        onw: "A real-time navigation tools for safer commute",
      },
      C = { openllm: "2023", bentoml: "2023", onw: "2021" }
    document.addEventListener("nav", () => {
      document.querySelectorAll(".project-item").forEach((t) => {
        let n = t.querySelector(".title"),
          r = t.querySelector(".description"),
          o = t.querySelector(".year")
        ee(n, m[n.dataset.name]), ee(r, _[r.dataset.name]), ee(o, C[o.dataset.name])
      })
    })
  })(),
  (function () {
    document.addEventListener("nav", async () => {
      let Be = document.getElementById("content-popover")
      Be && (Be.dataset.show = "true")
    })
  })(),
  (function () {
    document.addEventListener("nav", (Be) => {
      if (Be.detail.url !== "music") return
      let Le = document.getElementsByClassName("playlists")[0],
        Oe = document.querySelector(".previous"),
        ge = document.querySelector(".next"),
        xe = Le?.querySelectorAll("iframe")
      if ((console.log(xe), !Le || !xe)) return
      let Gt = 0,
        $e = 20,
        ze = (he) => {
          let Vt = 0
          for (let ee = 0; ee < he; ee++) Vt += xe[ee].offsetWidth + $e
          let Ne = xe[he]
          Ne &&
            ((Vt -= (Le.offsetWidth - Ne.offsetWidth) / 2),
            Le.scrollTo({ left: Vt, behavior: "smooth" }))
        },
        Xt = () => {
          Gt > 0 && (Gt--, ze(Gt))
        },
        rn = () => {
          Gt < xe.length - 1 && (Gt++, ze(Gt))
        }
      Oe?.addEventListener("click", Xt),
        window.addCleanup(() => Oe?.removeEventListener("click", Xt)),
        ge?.addEventListener("click", rn),
        window.addCleanup(() => ge?.removeEventListener("click", rn))
    })
  })(),
  (function () {
    var Be = Object.create,
      Le = Object.defineProperty,
      Oe = Object.getOwnPropertyDescriptor,
      ge = Object.getOwnPropertyNames,
      xe = Object.getPrototypeOf,
      Gt = Object.prototype.hasOwnProperty,
      $e = (a, h) => () => (h || a((h = { exports: {} }).exports, h), h.exports),
      ze = (a, h, v, E) => {
        if ((h && typeof h == "object") || typeof h == "function")
          for (let A of ge(h))
            !Gt.call(a, A) &&
              A !== v &&
              Le(a, A, { get: () => h[A], enumerable: !(E = Oe(h, A)) || E.enumerable })
        return a
      },
      Xt = (a, h, v) => (
        (v = a != null ? Be(xe(a)) : {}),
        ze(h || !a || !a.__esModule ? Le(v, "default", { value: a, enumerable: !0 }) : v, a)
      ),
      rn = $e(() => {}),
      he = $e((a, h) => {
        "use strict"
        h.exports = E
        function v(T) {
          return T instanceof Buffer
            ? Buffer.from(T)
            : new T.constructor(T.buffer.slice(), T.byteOffset, T.length)
        }
        function E(T) {
          if (((T = T || {}), T.circles)) return A(T)
          return T.proto ? U : O
          function q(P, G) {
            for (var Y = Object.keys(P), V = new Array(Y.length), ut = 0; ut < Y.length; ut++) {
              var rt = Y[ut],
                i = P[rt]
              typeof i != "object" || i === null
                ? (V[rt] = i)
                : i instanceof Date
                  ? (V[rt] = new Date(i))
                  : ArrayBuffer.isView(i)
                    ? (V[rt] = v(i))
                    : (V[rt] = G(i))
            }
            return V
          }
          function O(P) {
            if (typeof P != "object" || P === null) return P
            if (P instanceof Date) return new Date(P)
            if (Array.isArray(P)) return q(P, O)
            if (P instanceof Map) return new Map(q(Array.from(P), O))
            if (P instanceof Set) return new Set(q(Array.from(P), O))
            var G = {}
            for (var Y in P)
              if (Object.hasOwnProperty.call(P, Y) !== !1) {
                var V = P[Y]
                typeof V != "object" || V === null
                  ? (G[Y] = V)
                  : V instanceof Date
                    ? (G[Y] = new Date(V))
                    : V instanceof Map
                      ? (G[Y] = new Map(q(Array.from(V), O)))
                      : V instanceof Set
                        ? (G[Y] = new Set(q(Array.from(V), O)))
                        : ArrayBuffer.isView(V)
                          ? (G[Y] = v(V))
                          : (G[Y] = O(V))
              }
            return G
          }
          function U(P) {
            if (typeof P != "object" || P === null) return P
            if (P instanceof Date) return new Date(P)
            if (Array.isArray(P)) return q(P, U)
            if (P instanceof Map) return new Map(q(Array.from(P), U))
            if (P instanceof Set) return new Set(q(Array.from(P), U))
            var G = {}
            for (var Y in P) {
              var V = P[Y]
              typeof V != "object" || V === null
                ? (G[Y] = V)
                : V instanceof Date
                  ? (G[Y] = new Date(V))
                  : V instanceof Map
                    ? (G[Y] = new Map(q(Array.from(V), U)))
                    : V instanceof Set
                      ? (G[Y] = new Set(q(Array.from(V), U)))
                      : ArrayBuffer.isView(V)
                        ? (G[Y] = v(V))
                        : (G[Y] = U(V))
            }
            return G
          }
        }
        function A(T) {
          var q = [],
            O = []
          return T.proto ? G : P
          function U(Y, V) {
            for (var ut = Object.keys(Y), rt = new Array(ut.length), i = 0; i < ut.length; i++) {
              var g = ut[i],
                b = Y[g]
              if (typeof b != "object" || b === null) rt[g] = b
              else if (b instanceof Date) rt[g] = new Date(b)
              else if (ArrayBuffer.isView(b)) rt[g] = v(b)
              else {
                var D = q.indexOf(b)
                D !== -1 ? (rt[g] = O[D]) : (rt[g] = V(b))
              }
            }
            return rt
          }
          function P(Y) {
            if (typeof Y != "object" || Y === null) return Y
            if (Y instanceof Date) return new Date(Y)
            if (Array.isArray(Y)) return U(Y, P)
            if (Y instanceof Map) return new Map(U(Array.from(Y), P))
            if (Y instanceof Set) return new Set(U(Array.from(Y), P))
            var V = {}
            q.push(Y), O.push(V)
            for (var ut in Y)
              if (Object.hasOwnProperty.call(Y, ut) !== !1) {
                var rt = Y[ut]
                if (typeof rt != "object" || rt === null) V[ut] = rt
                else if (rt instanceof Date) V[ut] = new Date(rt)
                else if (rt instanceof Map) V[ut] = new Map(U(Array.from(rt), P))
                else if (rt instanceof Set) V[ut] = new Set(U(Array.from(rt), P))
                else if (ArrayBuffer.isView(rt)) V[ut] = v(rt)
                else {
                  var i = q.indexOf(rt)
                  i !== -1 ? (V[ut] = O[i]) : (V[ut] = P(rt))
                }
              }
            return q.pop(), O.pop(), V
          }
          function G(Y) {
            if (typeof Y != "object" || Y === null) return Y
            if (Y instanceof Date) return new Date(Y)
            if (Array.isArray(Y)) return U(Y, G)
            if (Y instanceof Map) return new Map(U(Array.from(Y), G))
            if (Y instanceof Set) return new Set(U(Array.from(Y), G))
            var V = {}
            q.push(Y), O.push(V)
            for (var ut in Y) {
              var rt = Y[ut]
              if (typeof rt != "object" || rt === null) V[ut] = rt
              else if (rt instanceof Date) V[ut] = new Date(rt)
              else if (rt instanceof Map) V[ut] = new Map(U(Array.from(rt), G))
              else if (rt instanceof Set) V[ut] = new Set(U(Array.from(rt), G))
              else if (ArrayBuffer.isView(rt)) V[ut] = v(rt)
              else {
                var i = q.indexOf(rt)
                i !== -1 ? (V[ut] = O[i]) : (V[ut] = G(rt))
              }
            }
            return q.pop(), O.pop(), V
          }
        }
      }),
      Vt
    function Ne(a) {
      return typeof a < "u" ? a : !0
    }
    function ee(a) {
      let h = Array(a)
      for (let v = 0; v < a; v++) h[v] = me()
      return h
    }
    function me() {
      return Object.create(null)
    }
    function pn(a, h) {
      return h.length - a.length
    }
    function ae(a) {
      return typeof a == "string"
    }
    function ke(a) {
      return typeof a == "object"
    }
    function te(a) {
      return typeof a == "function"
    }
    function Ke(a, h) {
      var v = gn
      if (
        a &&
        (h && (a = ne(a, h)),
        this.H && (a = ne(a, this.H)),
        this.J && 1 < a.length && (a = ne(a, this.J)),
        v || v === "")
      ) {
        if (((h = a.split(v)), this.filter)) {
          ;(a = this.filter), (v = h.length)
          let E = []
          for (let A = 0, T = 0; A < v; A++) {
            let q = h[A]
            q && !a[q] && (E[T++] = q)
          }
          a = E
        } else a = h
        return a
      }
      return a
    }
    var gn = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      Xe = /[\u0300-\u036f]/g
    function Ve(a, h) {
      let v = Object.keys(a),
        E = v.length,
        A = [],
        T = "",
        q = 0
      for (let O = 0, U, P; O < E; O++)
        (U = v[O]),
          (P = a[U])
            ? ((A[q++] = le(h ? "(?!\\b)" + U + "(\\b|_)" : U)), (A[q++] = P))
            : (T += (T ? "|" : "") + U)
      return T && ((A[q++] = le(h ? "(?!\\b)(" + T + ")(\\b|_)" : "(" + T + ")")), (A[q] = "")), A
    }
    function ne(a, h) {
      for (let v = 0, E = h.length; v < E && ((a = a.replace(h[v], h[v + 1])), a); v += 2);
      return a
    }
    function le(a) {
      return new RegExp(a, "g")
    }
    function un(a) {
      let h = "",
        v = ""
      for (let E = 0, A = a.length, T; E < A; E++) (T = a[E]) !== v && (h += v = T)
      return h
    }
    var de = { encode: En, F: !1, G: "" }
    function En(a) {
      return Ke.call(this, ("" + a).toLowerCase(), !1)
    }
    var ye = {},
      be = {}
    function mn(a) {
      Pe(a, "add"), Pe(a, "append"), Pe(a, "search"), Pe(a, "update"), Pe(a, "remove")
    }
    function Pe(a, h) {
      a[h + "Async"] = function () {
        let v = this,
          E = arguments
        var A = E[E.length - 1]
        let T
        return (
          te(A) && ((T = A), delete E[E.length - 1]),
          (A = new Promise(function (q) {
            setTimeout(function () {
              v.async = !0
              let O = v[h].apply(v, E)
              ;(v.async = !1), q(O)
            })
          })),
          T ? (A.then(T), this) : A
        )
      }
    }
    function De(a, h, v, E) {
      let A = a.length,
        T = [],
        q,
        O,
        U = 0
      E && (E = [])
      for (let P = A - 1; 0 <= P; P--) {
        let G = a[P],
          Y = G.length,
          V = me(),
          ut = !q
        for (let rt = 0; rt < Y; rt++) {
          let i = G[rt],
            g = i.length
          if (g)
            for (let b = 0, D, B; b < g; b++)
              if (((B = i[b]), q)) {
                if (q[B]) {
                  if (!P) {
                    if (v) v--
                    else if (((T[U++] = B), U === h)) return T
                  }
                  ;(P || E) && (V[B] = 1), (ut = !0)
                }
                if (E && ((D = (O[B] || 0) + 1), (O[B] = D), D < A)) {
                  let z = E[D - 2] || (E[D - 2] = [])
                  z[z.length] = B
                }
              } else V[B] = 1
        }
        if (E) q || (O = V)
        else if (!ut) return []
        q = V
      }
      if (E)
        for (let P = E.length - 1, G, Y; 0 <= P; P--) {
          ;(G = E[P]), (Y = G.length)
          for (let V = 0, ut; V < Y; V++)
            if (((ut = G[V]), !q[ut])) {
              if (v) v--
              else if (((T[U++] = ut), U === h)) return T
              q[ut] = 1
            }
        }
      return T
    }
    function on(a, h) {
      let v = me(),
        E = me(),
        A = []
      for (let T = 0; T < a.length; T++) v[a[T]] = 1
      for (let T = 0, q; T < h.length; T++) {
        q = h[T]
        for (let O = 0, U; O < q.length; O++)
          (U = q[O]), v[U] && !E[U] && ((E[U] = 1), (A[A.length] = U))
      }
      return A
    }
    function He(a) {
      ;(this.l = a !== !0 && a), (this.cache = me()), (this.h = [])
    }
    function Qe(a, h, v) {
      ke(a) && (a = a.query)
      let E = this.cache.get(a)
      return E || ((E = this.search(a, h, v)), this.cache.set(a, E)), E
    }
    ;(He.prototype.set = function (a, h) {
      if (!this.cache[a]) {
        var v = this.h.length
        for (v === this.l ? delete this.cache[this.h[v - 1]] : v++, --v; 0 < v; v--)
          this.h[v] = this.h[v - 1]
        this.h[0] = a
      }
      this.cache[a] = h
    }),
      (He.prototype.get = function (a) {
        let h = this.cache[a]
        if (this.l && h && (a = this.h.indexOf(a))) {
          let v = this.h[a - 1]
          ;(this.h[a - 1] = this.h[a]), (this.h[a] = v)
        }
        return h
      })
    var ve = {
      memory: { charset: "latin:extra", D: 3, B: 4, m: !1 },
      performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } },
      match: { charset: "latin:extra", G: "reverse" },
      score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } },
      default: {},
    }
    function Ze(a, h, v, E, A, T, q, O) {
      setTimeout(function () {
        let U = a(v ? v + "." + E : E, JSON.stringify(q))
        U && U.then
          ? U.then(function () {
              h.export(a, h, v, A, T + 1, O)
            })
          : h.export(a, h, v, A, T + 1, O)
      })
    }
    function qe(a, h) {
      if (!(this instanceof qe)) return new qe(a)
      var v
      if (a) {
        ae(a) ? (a = ve[a]) : (v = a.preset) && (a = Object.assign({}, v[v], a)), (v = a.charset)
        var E = a.lang
        ae(v) && (v.indexOf(":") === -1 && (v += ":default"), (v = be[v])), ae(E) && (E = ye[E])
      } else a = {}
      let A,
        T,
        q = a.context || {}
      if (
        ((this.encode = a.encode || (v && v.encode) || En),
        (this.register = h || me()),
        (this.D = A = a.resolution || 9),
        (this.G = h = (v && v.G) || a.tokenize || "strict"),
        (this.depth = h === "strict" && q.depth),
        (this.l = Ne(q.bidirectional)),
        (this.s = T = Ne(a.optimize)),
        (this.m = Ne(a.fastupdate)),
        (this.B = a.minlength || 1),
        (this.C = a.boost),
        (this.map = T ? ee(A) : me()),
        (this.A = A = q.resolution || 1),
        (this.h = T ? ee(A) : me()),
        (this.F = (v && v.F) || a.rtl),
        (this.H = (h = a.matcher || (E && E.H)) && Ve(h, !1)),
        (this.J = (h = a.stemmer || (E && E.J)) && Ve(h, !0)),
        (v = h = a.filter || (E && E.filter)))
      ) {
        ;(v = h), (E = me())
        for (let O = 0, U = v.length; O < U; O++) E[v[O]] = 1
        v = E
      }
      ;(this.filter = v), (this.cache = (h = a.cache) && new He(h))
    }
    ;(Vt = qe.prototype),
      (Vt.append = function (a, h) {
        return this.add(a, h, !0)
      }),
      (Vt.add = function (a, h, v, E) {
        if (h && (a || a === 0)) {
          if (!E && !v && this.register[a]) return this.update(a, h)
          if (((h = this.encode(h)), (E = h.length))) {
            let P = me(),
              G = me(),
              Y = this.depth,
              V = this.D
            for (let ut = 0; ut < E; ut++) {
              let rt = h[this.F ? E - 1 - ut : ut]
              var A = rt.length
              if (rt && A >= this.B && (Y || !G[rt])) {
                var T = tn(V, E, ut),
                  q = ""
                switch (this.G) {
                  case "full":
                    if (2 < A) {
                      for (T = 0; T < A; T++)
                        for (var O = A; O > T; O--)
                          if (O - T >= this.B) {
                            var U = tn(V, E, ut, A, T)
                            ;(q = rt.substring(T, O)), Ie(this, G, q, U, a, v)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < A) {
                      for (O = A - 1; 0 < O; O--)
                        (q = rt[O] + q),
                          q.length >= this.B && Ie(this, G, q, tn(V, E, ut, A, O), a, v)
                      q = ""
                    }
                  case "forward":
                    if (1 < A) {
                      for (O = 0; O < A; O++)
                        (q += rt[O]), q.length >= this.B && Ie(this, G, q, T, a, v)
                      break
                    }
                  default:
                    if (
                      (this.C && (T = Math.min((T / this.C(h, rt, ut)) | 0, V - 1)),
                      Ie(this, G, rt, T, a, v),
                      Y && 1 < E && ut < E - 1)
                    ) {
                      for (
                        A = me(), q = this.A, T = rt, O = Math.min(Y + 1, E - ut), A[T] = 1, U = 1;
                        U < O;
                        U++
                      )
                        if (
                          (rt = h[this.F ? E - 1 - ut - U : ut + U]) &&
                          rt.length >= this.B &&
                          !A[rt]
                        ) {
                          A[rt] = 1
                          let i = this.l && rt > T
                          Ie(
                            this,
                            P,
                            i ? T : rt,
                            tn(q + (E / 2 > q ? 0 : 1), E, ut, O - 1, U - 1),
                            a,
                            v,
                            i ? rt : T,
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
    function tn(a, h, v, E, A) {
      return v && 1 < a
        ? h + (E || 0) <= a
          ? v + (A || 0)
          : (((a - 1) / (h + (E || 0))) * (v + (A || 0)) + 1) | 0
        : 0
    }
    function Ie(a, h, v, E, A, T, q) {
      let O = q ? a.h : a.map
      ;(!h[v] || (q && !h[v][q])) &&
        (a.s && (O = O[E]),
        q ? ((h = h[v] || (h[v] = me())), (h[q] = 1), (O = O[q] || (O[q] = me()))) : (h[v] = 1),
        (O = O[v] || (O[v] = [])),
        a.s || (O = O[E] || (O[E] = [])),
        (T && O.includes(A)) ||
          ((O[O.length] = A),
          a.m && ((a = a.register[A] || (a.register[A] = [])), (a[a.length] = O))))
    }
    Vt.search = function (a, h, v) {
      v || (!h && ke(a) ? ((v = a), (a = v.query)) : ke(h) && (v = h))
      let E = [],
        A,
        T,
        q = 0
      if (v) {
        ;(a = v.query || a), (h = v.limit), (q = v.offset || 0)
        var O = v.context
        T = v.suggest
      }
      if (a && ((a = this.encode("" + a)), (A = a.length), 1 < A)) {
        v = me()
        var U = []
        for (let G = 0, Y = 0, V; G < A; G++)
          if ((V = a[G]) && V.length >= this.B && !v[V])
            if (this.s || T || this.map[V]) (U[Y++] = V), (v[V] = 1)
            else return E
        ;(a = U), (A = a.length)
      }
      if (!A) return E
      h || (h = 100), (O = this.depth && 1 < A && O !== !1), (v = 0)
      let P
      O ? ((P = a[0]), (v = 1)) : 1 < A && a.sort(pn)
      for (let G, Y; v < A; v++) {
        if (
          ((Y = a[v]),
          O
            ? ((G = Ee(this, E, T, h, q, A === 2, Y, P)), (T && G === !1 && E.length) || (P = Y))
            : (G = Ee(this, E, T, h, q, A === 1, Y)),
          G)
        )
          return G
        if (T && v === A - 1) {
          if (((U = E.length), !U)) {
            if (O) {
              ;(O = 0), (v = -1)
              continue
            }
            return E
          }
          if (U === 1) return tt(E[0], h, q)
        }
      }
      return De(E, h, q, T)
    }
    function Ee(a, h, v, E, A, T, q, O) {
      let U = [],
        P = O ? a.h : a.map
      if ((a.s || (P = gt(P, q, O, a.l)), P)) {
        let G = 0,
          Y = Math.min(P.length, O ? a.A : a.D)
        for (
          let V = 0, ut = 0, rt, i;
          V < Y &&
          !(
            (rt = P[V]) &&
            (a.s && (rt = gt(rt, q, O, a.l)),
            A &&
              rt &&
              T &&
              ((i = rt.length), i <= A ? ((A -= i), (rt = null)) : ((rt = rt.slice(A)), (A = 0))),
            rt && ((U[G++] = rt), T && ((ut += rt.length), ut >= E)))
          );
          V++
        );
        if (G) {
          if (T) return tt(U, E, 0)
          h[h.length] = U
          return
        }
      }
      return !v && U
    }
    function tt(a, h, v) {
      return (
        (a = a.length === 1 ? a[0] : [].concat.apply([], a)),
        v || a.length > h ? a.slice(v, v + h) : a
      )
    }
    function gt(a, h, v, E) {
      return v ? ((E = E && h > v), (a = (a = a[E ? h : v]) && a[E ? v : h])) : (a = a[h]), a
    }
    ;(Vt.contain = function (a) {
      return !!this.register[a]
    }),
      (Vt.update = function (a, h) {
        return this.remove(a).add(a, h)
      }),
      (Vt.remove = function (a, h) {
        let v = this.register[a]
        if (v) {
          if (this.m) for (let E = 0, A; E < v.length; E++) (A = v[E]), A.splice(A.indexOf(a), 1)
          else At(this.map, a, this.D, this.s), this.depth && At(this.h, a, this.A, this.s)
          if ((h || delete this.register[a], this.cache)) {
            h = this.cache
            for (let E = 0, A, T; E < h.h.length; E++)
              (T = h.h[E]),
                (A = h.cache[T]),
                A.includes(a) && (h.h.splice(E--, 1), delete h.cache[T])
          }
        }
        return this
      })
    function At(a, h, v, E, A) {
      let T = 0
      if (a.constructor === Array)
        if (A) (h = a.indexOf(h)), h !== -1 ? 1 < a.length && (a.splice(h, 1), T++) : T++
        else {
          A = Math.min(a.length, v)
          for (let q = 0, O; q < A; q++)
            (O = a[q]) && ((T = At(O, h, v, E, A)), E || T || delete a[q])
        }
      else for (let q in a) (T = At(a[q], h, v, E, A)) || delete a[q]
      return T
    }
    ;(Vt.searchCache = Qe),
      (Vt.export = function (a, h, v, E, A, T) {
        let q = !0
        typeof T > "u" &&
          (q = new Promise((P) => {
            T = P
          }))
        let O, U
        switch (A || (A = 0)) {
          case 0:
            if (((O = "reg"), this.m)) {
              U = me()
              for (let P in this.register) U[P] = 1
            } else U = this.register
            break
          case 1:
            ;(O = "cfg"), (U = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(O = "map"), (U = this.map)
            break
          case 3:
            ;(O = "ctx"), (U = this.h)
            break
          default:
            typeof v > "u" && T && T()
            return
        }
        return Ze(a, h || this, v, O, E, A, U, T), q
      }),
      (Vt.import = function (a, h) {
        if (h)
          switch ((ae(h) && (h = JSON.parse(h)), a)) {
            case "cfg":
              this.s = !!h.opt
              break
            case "reg":
              ;(this.m = !1), (this.register = h)
              break
            case "map":
              this.map = h
              break
            case "ctx":
              this.h = h
          }
      }),
      mn(qe.prototype)
    function Lt(a) {
      a = a.data
      var h = self._index
      let v = a.args
      var E = a.task
      switch (E) {
        case "init":
          ;(E = a.options || {}),
            (a = a.factory),
            (h = E.encode),
            (E.cache = !1),
            h && h.indexOf("function") === 0 && (E.encode = Function("return " + h)()),
            a
              ? (Function("return " + a)()(self),
                (self._index = new self.FlexSearch.Index(E)),
                delete self.FlexSearch)
              : (self._index = new qe(E))
          break
        default:
          ;(a = a.id),
            (h = h[E].apply(h, v)),
            postMessage(E === "search" ? { id: a, msg: h } : { id: a })
      }
    }
    var qt = 0
    function St(a) {
      if (!(this instanceof St)) return new St(a)
      var h
      a ? te((h = a.encode)) && (a.encode = h.toString()) : (a = {}),
        (h = (self || window)._factory) && (h = h.toString())
      let v = typeof window > "u" && self.exports,
        E = this
      ;(this.o = ce(h, v, a.worker)),
        (this.h = me()),
        this.o &&
          (v
            ? this.o.on("message", function (A) {
                E.h[A.id](A.msg), delete E.h[A.id]
              })
            : (this.o.onmessage = function (A) {
                ;(A = A.data), E.h[A.id](A.msg), delete E.h[A.id]
              }),
          this.o.postMessage({ task: "init", factory: h, options: a }))
    }
    jt("add"), jt("append"), jt("search"), jt("update"), jt("remove")
    function jt(a) {
      St.prototype[a] = St.prototype[a + "Async"] = function () {
        let h = this,
          v = [].slice.call(arguments)
        var E = v[v.length - 1]
        let A
        return (
          te(E) && ((A = E), v.splice(v.length - 1, 1)),
          (E = new Promise(function (T) {
            setTimeout(function () {
              ;(h.h[++qt] = T), h.o.postMessage({ task: a, id: qt, args: v })
            })
          })),
          A ? (E.then(A), this) : E
        )
      }
    }
    function ce(a, h, v) {
      let E
      try {
        E = h
          ? new (rn().Worker)(__dirname + "/node/node.js")
          : a
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + Lt.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(ae(v) ? v : "worker/worker.js", { type: "module" })
      } catch {}
      return E
    }
    function Yt(a) {
      if (!(this instanceof Yt)) return new Yt(a)
      var h = a.document || a.doc || a,
        v
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = me()),
        (this.key = ((v = h.key || h.id) && Ht(v, this.A)) || "id"),
        (this.m = Ne(a.fastupdate)),
        (this.C = (v = h.store) && v !== !0 && []),
        (this.store = v && me()),
        (this.I = (v = h.tag) && Ht(v, this.A)),
        (this.l = v && me()),
        (this.cache = (v = a.cache) && new He(v)),
        (a.cache = !1),
        (this.o = a.worker),
        (this.async = !1),
        (v = me())
      let E = h.index || h.field || h
      ae(E) && (E = [E])
      for (let A = 0, T, q; A < E.length; A++)
        (T = E[A]),
          ae(T) || ((q = T), (T = T.field)),
          (q = ke(q) ? Object.assign({}, a, q) : a),
          this.o && ((v[T] = new St(q)), v[T].o || (this.o = !1)),
          this.o || (v[T] = new qe(q, this.register)),
          (this.K[A] = Ht(T, this.A)),
          (this.h[A] = T)
      if (this.C)
        for (a = h.store, ae(a) && (a = [a]), h = 0; h < a.length; h++) this.C[h] = Ht(a[h], this.A)
      this.index = v
    }
    function Ht(a, h) {
      let v = a.split(":"),
        E = 0
      for (let A = 0; A < v.length; A++)
        (a = v[A]),
          0 <= a.indexOf("[]") && (a = a.substring(0, a.length - 2)) && (h[E] = !0),
          a && (v[E++] = a)
      return E < v.length && (v.length = E), 1 < E ? v : v[0]
    }
    function re(a, h) {
      if (ae(h)) a = a[h]
      else for (let v = 0; a && v < h.length; v++) a = a[h[v]]
      return a
    }
    function Nt(a, h, v, E, A) {
      if (((a = a[A]), E === v.length - 1)) h[A] = a
      else if (a)
        if (a.constructor === Array)
          for (h = h[A] = Array(a.length), A = 0; A < a.length; A++) Nt(a, h, v, E, A)
        else (h = h[A] || (h[A] = me())), (A = v[++E]), Nt(a, h, v, E, A)
    }
    function Mt(a, h, v, E, A, T, q, O) {
      if ((a = a[q]))
        if (E === h.length - 1) {
          if (a.constructor === Array) {
            if (v[E]) {
              for (h = 0; h < a.length; h++) A.add(T, a[h], !0, !0)
              return
            }
            a = a.join(" ")
          }
          A.add(T, a, O, !0)
        } else if (a.constructor === Array)
          for (q = 0; q < a.length; q++) Mt(a, h, v, E, A, T, q, O)
        else (q = h[++E]), Mt(a, h, v, E, A, T, q, O)
    }
    ;(Vt = Yt.prototype),
      (Vt.add = function (a, h, v) {
        if ((ke(a) && ((h = a), (a = re(h, this.key))), h && (a || a === 0))) {
          if (!v && this.register[a]) return this.update(a, h)
          for (let E = 0, A, T; E < this.h.length; E++)
            (T = this.h[E]),
              (A = this.K[E]),
              ae(A) && (A = [A]),
              Mt(h, A, this.A, 0, this.index[T], a, A[0], v)
          if (this.I) {
            let E = re(h, this.I),
              A = me()
            ae(E) && (E = [E])
            for (let T = 0, q, O; T < E.length; T++)
              if (
                ((q = E[T]),
                !A[q] &&
                  ((A[q] = 1), (O = this.l[q] || (this.l[q] = [])), !v || !O.includes(a)) &&
                  ((O[O.length] = a), this.m))
              ) {
                let U = this.register[a] || (this.register[a] = [])
                U[U.length] = O
              }
          }
          if (this.store && (!v || !this.store[a])) {
            let E
            if (this.C) {
              E = me()
              for (let A = 0, T; A < this.C.length; A++)
                (T = this.C[A]), ae(T) ? (E[T] = h[T]) : Nt(h, E, T, 0, T[0])
            }
            this.store[a] = E || h
          }
        }
        return this
      }),
      (Vt.append = function (a, h) {
        return this.add(a, h, !0)
      }),
      (Vt.update = function (a, h) {
        return this.remove(a).add(a, h)
      }),
      (Vt.remove = function (a) {
        if ((ke(a) && (a = re(a, this.key)), this.register[a])) {
          for (
            var h = 0;
            h < this.h.length && (this.index[this.h[h]].remove(a, !this.o), !this.m);
            h++
          );
          if (this.I && !this.m)
            for (let v in this.l) {
              h = this.l[v]
              let E = h.indexOf(a)
              E !== -1 && (1 < h.length ? h.splice(E, 1) : delete this.l[v])
            }
          this.store && delete this.store[a], delete this.register[a]
        }
        return this
      }),
      (Vt.search = function (a, h, v, E) {
        v || (!h && ke(a) ? ((v = a), (a = "")) : ke(h) && ((v = h), (h = 0)))
        let A = [],
          T = [],
          q,
          O,
          U,
          P,
          G,
          Y,
          V = 0
        if (v)
          if (v.constructor === Array) (U = v), (v = null)
          else {
            if (
              ((a = v.query || a),
              (U = (q = v.pluck) || v.index || v.field),
              (P = v.tag),
              (O = this.store && v.enrich),
              (G = v.bool === "and"),
              (h = v.limit || h || 100),
              (Y = v.offset || 0),
              P && (ae(P) && (P = [P]), !a))
            ) {
              for (let rt = 0, i; rt < P.length; rt++)
                (i = fe.call(this, P[rt], h, Y, O)) && ((A[A.length] = i), V++)
              return V ? A : []
            }
            ae(U) && (U = [U])
          }
        U || (U = this.h), (G = G && (1 < U.length || (P && 1 < P.length)))
        let ut = !E && (this.o || this.async) && []
        for (let rt = 0, i, g, b; rt < U.length; rt++) {
          let D
          if (
            ((g = U[rt]),
            ae(g) ||
              ((D = g), (g = D.field), (a = D.query || a), (h = D.limit || h), (O = D.enrich || O)),
            ut)
          )
            ut[rt] = this.index[g].searchAsync(a, h, D || v)
          else {
            if (
              (E ? (i = E[rt]) : (i = this.index[g].search(a, h, D || v)),
              (b = i && i.length),
              P && b)
            ) {
              let B = [],
                z = 0
              G && (B[0] = [i])
              for (let et = 0, nt, ot; et < P.length; et++)
                (nt = P[et]),
                  (b = (ot = this.l[nt]) && ot.length) && (z++, (B[B.length] = G ? [ot] : ot))
              z && ((i = G ? De(B, h || 100, Y || 0) : on(i, B)), (b = i.length))
            }
            if (b) (T[V] = g), (A[V++] = i)
            else if (G) return []
          }
        }
        if (ut) {
          let rt = this
          return new Promise(function (i) {
            Promise.all(ut).then(function (g) {
              i(rt.search(a, h, v, g))
            })
          })
        }
        if (!V) return []
        if (q && (!O || !this.store)) return A[0]
        for (let rt = 0, i; rt < T.length; rt++) {
          if (((i = A[rt]), i.length && O && (i = zt.call(this, i)), q)) return i
          A[rt] = { field: T[rt], result: i }
        }
        return A
      })
    function fe(a, h, v, E) {
      let A = this.l[a],
        T = A && A.length - v
      if (T && 0 < T)
        return (
          (T > h || v) && (A = A.slice(v, v + h)),
          E && (A = zt.call(this, A)),
          { tag: a, result: A }
        )
    }
    function zt(a) {
      let h = Array(a.length)
      for (let v = 0, E; v < a.length; v++) (E = a[v]), (h[v] = { id: E, doc: this.store[E] })
      return h
    }
    ;(Vt.contain = function (a) {
      return !!this.register[a]
    }),
      (Vt.get = function (a) {
        return this.store[a]
      }),
      (Vt.set = function (a, h) {
        return (this.store[a] = h), this
      }),
      (Vt.searchCache = Qe),
      (Vt.export = function (a, h, v, E, A, T) {
        let q
        if (
          (typeof T > "u" &&
            (q = new Promise((O) => {
              T = O
            })),
          A || (A = 0),
          E || (E = 0),
          E < this.h.length)
        ) {
          let O = this.h[E],
            U = this.index[O]
          ;(h = this),
            setTimeout(function () {
              U.export(a, h, A ? O : "", E, A++, T) || (E++, (A = 1), h.export(a, h, O, E, A, T))
            })
        } else {
          let O, U
          switch (A) {
            case 1:
              ;(O = "tag"), (U = this.l), (v = null)
              break
            case 2:
              ;(O = "store"), (U = this.store), (v = null)
              break
            default:
              T()
              return
          }
          Ze(a, this, v, O, E, A, U, T)
        }
        return q
      }),
      (Vt.import = function (a, h) {
        if (h)
          switch ((ae(h) && (h = JSON.parse(h)), a)) {
            case "tag":
              this.l = h
              break
            case "reg":
              ;(this.m = !1), (this.register = h)
              for (let E = 0, A; E < this.h.length; E++)
                (A = this.index[this.h[E]]), (A.register = h), (A.m = !1)
              break
            case "store":
              this.store = h
              break
            default:
              a = a.split(".")
              let v = a[0]
              ;(a = a[1]), v && a && this.index[v].import(a, h)
          }
      }),
      mn(Yt.prototype)
    var _e = { encode: Se, F: !1, G: "" },
      Ue = [
        le("[\xE0\xE1\xE2\xE3\xE4\xE5]"),
        "a",
        le("[\xE8\xE9\xEA\xEB]"),
        "e",
        le("[\xEC\xED\xEE\xEF]"),
        "i",
        le("[\xF2\xF3\xF4\xF5\xF6\u0151]"),
        "o",
        le("[\xF9\xFA\xFB\xFC\u0171]"),
        "u",
        le("[\xFD\u0177\xFF]"),
        "y",
        le("\xF1"),
        "n",
        le("[\xE7c]"),
        "k",
        le("\xDF"),
        "s",
        le(" & "),
        " and ",
      ]
    function Se(a) {
      var h = (a = "" + a)
      return (
        h.normalize && (h = h.normalize("NFD").replace(Xe, "")),
        Ke.call(this, h.toLowerCase(), !a.normalize && Ue)
      )
    }
    var Ye = { encode: wn, F: !1, G: "strict" },
      vn = /[^a-z0-9]+/,
      yn = {
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
    function wn(a) {
      a = Se.call(this, a).join(" ")
      let h = []
      if (a) {
        let v = a.split(vn),
          E = v.length
        for (let A = 0, T, q = 0; A < E; A++)
          if ((a = v[A]) && (!this.filter || !this.filter[a])) {
            T = a[0]
            let O = yn[T] || T,
              U = O
            for (let P = 1; P < a.length; P++) {
              T = a[P]
              let G = yn[T] || T
              G && G !== U && ((O += G), (U = G))
            }
            h[q++] = O
          }
      }
      return h
    }
    var _n = { encode: An, F: !1, G: "" },
      sn = [
        le("ae"),
        "a",
        le("oe"),
        "o",
        le("sh"),
        "s",
        le("th"),
        "t",
        le("ph"),
        "f",
        le("pf"),
        "f",
        le("(?![aeo])h(?![aeo])"),
        "",
        le("(?!^[aeo])h(?!^[aeo])"),
        "",
      ]
    function An(a, h) {
      return (
        a &&
          ((a = wn.call(this, a).join(" ")),
          2 < a.length && (a = ne(a, sn)),
          h || (1 < a.length && (a = un(a)), a && (a = a.split(" ")))),
        a || []
      )
    }
    var Tn = { encode: zn, F: !1, G: "" },
      Fn = le("(?!\\b)[aeo]")
    function zn(a) {
      return (
        a &&
          ((a = An.call(this, a, !0)),
          1 < a.length && (a = a.replace(Fn, "")),
          1 < a.length && (a = un(a)),
          a && (a = a.split(" "))),
        a || []
      )
    }
    ;(be["latin:default"] = de),
      (be["latin:simple"] = _e),
      (be["latin:balance"] = Ye),
      (be["latin:advanced"] = _n),
      (be["latin:extra"] = Tn)
    var kn = {
      Index: qe,
      Document: Yt,
      Worker: St,
      registerCharset: function (a, h) {
        be[a] = h
      },
      registerLanguage: function (a, h) {
        ye[a] = h
      },
    }
    function Pn(a, h) {
      if (!a) return
      function v(A) {
        A.target === this && (A.preventDefault(), h())
      }
      function E(A) {
        A.key.startsWith("Esc") && (A.preventDefault(), h())
      }
      a?.addEventListener("click", v),
        window.addCleanup(() => a?.removeEventListener("click", v)),
        document.addEventListener("keydown", E),
        window.addCleanup(() => document.removeEventListener("keydown", E))
    }
    function d(a) {
      for (; a.firstChild; ) a.removeChild(a.firstChild)
    }
    var M = Object.hasOwnProperty,
      S = Xt(he(), 1),
      j = (0, S.default)()
    function I(a) {
      let h = ie(pe(a, "index"), !0)
      return h.length === 0 ? "/" : h
    }
    var J = (a, h, v) => {
      let E = new URL(a.getAttribute(h), v)
      a.setAttribute(h, E.pathname + E.hash)
    }
    function ft(a, h) {
      a.querySelectorAll('[href^="./"], [href^="../"]').forEach((v) => J(v, "href", h)),
        a.querySelectorAll('[src^="./"], [src^="../"]').forEach((v) => J(v, "src", h))
    }
    function ht(a) {
      let h = a
        .split("/")
        .filter((v) => v !== "")
        .slice(0, -1)
        .map((v) => "..")
        .join("/")
      return h.length === 0 && (h = "."), h
    }
    function xt(a, h) {
      return It(ht(a), I(h))
    }
    function It(...a) {
      return a
        .filter((h) => h !== "")
        .join("/")
        .replace(/\/\/+/g, "/")
    }
    function Kt(a, h) {
      return a === h || a.endsWith("/" + h)
    }
    function pe(a, h) {
      return Kt(a, h) && (a = a.slice(0, -h.length)), a
    }
    function ie(a, h) {
      return (
        a.startsWith("/") && (a = a.substring(1)), !h && a.endsWith("/") && (a = a.slice(0, -1)), a
      )
    }
    var Zt = "basic",
      Tt = "",
      ue = (a) => a.toLowerCase().split(/([^a-z]|[^\x00-\x7F])/),
      Te = new kn.Document({
        charset: "latin:extra",
        encode: ue,
        document: {
          id: "id",
          index: [
            { field: "title", tokenize: "forward" },
            { field: "content", tokenize: "forward" },
            { field: "tags", tokenize: "forward" },
          ],
        },
      }),
      Ge = new DOMParser(),
      je = new Map(),
      Ce = 50,
      ln = 15,
      Cn = 15,
      Dn = (a) => {
        let h = a.split(/\s+/).filter((E) => E.trim() !== ""),
          v = h.length
        if (v > 1) for (let E = 1; E < v; E++) h.push(h.slice(0, E + 1).join(" "))
        return h.sort((E, A) => A.length - E.length)
      }
    function cn(a, h, v) {
      let E = Dn(a),
        A = h.split(/\s+/).filter((U) => U !== ""),
        T = 0,
        q = A.length - 1
      if (v) {
        let U = (V) => E.some((ut) => V.toLowerCase().startsWith(ut.toLowerCase())),
          P = A.map(U),
          G = 0,
          Y = 0
        for (let V = 0; V < Math.max(A.length - Ce, 0); V++) {
          let ut = P.slice(V, V + Ce).reduce((rt, i) => rt + (i ? 1 : 0), 0)
          ut >= G && ((G = ut), (Y = V))
        }
        ;(T = Math.max(Y - Ce, 0)), (q = Math.min(T + 2 * Ce, A.length - 1)), (A = A.slice(T, q))
      }
      let O = A.map((U) => {
        for (let P of E)
          if (U.toLowerCase().includes(P.toLowerCase())) {
            let G = new RegExp(P.toLowerCase(), "gi")
            return U.replace(G, '<span class="highlight">$&</span>')
          }
        return U
      }).join(" ")
      return `${T === 0 ? "" : "..."}${O}${q === A.length - 1 ? "" : "..."}`
    }
    function N(a, h) {
      let v = new DOMParser(),
        E = Dn(a),
        A = v.parseFromString(h.innerHTML, "text/html"),
        T = (O) => {
          let U = document.createElement("span")
          return (U.className = "highlight"), (U.textContent = O), U
        },
        q = (O, U) => {
          if (O.nodeType === Node.TEXT_NODE) {
            let P = O.nodeValue ?? "",
              G = new RegExp(U.toLowerCase(), "gi"),
              Y = P.match(G)
            if (!Y || Y.length === 0) return
            let V = document.createElement("span"),
              ut = 0
            for (let rt of Y) {
              let i = P.indexOf(rt, ut)
              V.appendChild(document.createTextNode(P.slice(ut, i))),
                V.appendChild(T(rt)),
                (ut = i + rt.length)
            }
            V.appendChild(document.createTextNode(P.slice(ut))), O.parentNode?.replaceChild(V, O)
          } else if (O.nodeType === Node.ELEMENT_NODE) {
            if (O.classList.contains("highlight")) return
            Array.from(O.childNodes).forEach((P) => q(P, U))
          }
        }
      for (let O of E) q(A.body, O)
      return A.body
    }
    document.addEventListener("nav", async (a) => {
      let h = a.detail.url,
        v = await fetchData,
        E = document.getElementById("search-container"),
        A = E?.closest(".sidebar"),
        T = document.getElementById("search-icon"),
        q = document.getElementById("search-bar"),
        O = document.getElementById("search-layout"),
        U = Object.keys(v),
        P = (lt) => {
          O?.querySelector(`#${lt.id}`) === null && O?.appendChild(lt)
        },
        G = O?.dataset?.preview === "true",
        Y,
        V,
        ut = document.createElement("div")
      ;(ut.id = "results-container"),
        P(ut),
        G && ((Y = document.createElement("div")), (Y.id = "preview-container"), P(Y))
      function rt() {
        E?.classList.remove("active"),
          q && (q.value = ""),
          A && (A.style.zIndex = "unset"),
          ut && d(ut),
          Y && d(Y),
          O && O.classList.remove("display-results"),
          (Zt = "basic")
      }
      function i(lt) {
        ;(Zt = lt), A && (A.style.zIndex = "1"), E?.classList.add("active"), q?.focus()
      }
      let g = null
      async function b(lt) {
        if (lt.key === "k" && (lt.ctrlKey || lt.metaKey) && !lt.shiftKey) {
          lt.preventDefault(), E?.classList.contains("active") ? rt() : i("basic")
          return
        } else if (lt.shiftKey && (lt.ctrlKey || lt.metaKey) && lt.key.toLowerCase() === "k") {
          lt.preventDefault(),
            E?.classList.contains("active") ? rt() : i("tags"),
            q && (q.value = "#")
          return
        }
        if ((g && g.classList.remove("focus"), !!E?.classList.contains("active"))) {
          if (lt.key === "Enter")
            if (ut?.contains(document.activeElement)) {
              let ct = document.activeElement
              if (ct.classList.contains("no-match")) return
              await yt(ct), ct.click()
            } else {
              let ct = document.getElementsByClassName("result-card")[0]
              if (!ct || ct?.classList.contains("no-match")) return
              await yt(ct), ct.click()
            }
          else if (lt.key === "ArrowUp" || (lt.shiftKey && lt.key === "Tab")) {
            if ((lt.preventDefault(), ut?.contains(document.activeElement))) {
              let ct = g || document.activeElement,
                at = ct?.previousElementSibling
              ct?.classList.remove("focus"), at?.focus(), at && (g = at), await yt(at)
            }
          } else if (
            (lt.key === "ArrowDown" || lt.key === "Tab") &&
            (lt.preventDefault(), document.activeElement === q || g !== null)
          ) {
            let ct = g || document.getElementsByClassName("result-card")[0],
              at = ct?.nextElementSibling
            ct?.classList.remove("focus"), at?.focus(), at && (g = at), await yt(at)
          }
        }
      }
      let D = (lt, ct) => {
        let at = U[ct]
        return {
          id: ct,
          slug: at,
          title: Zt === "tags" ? v[at].title : cn(lt, v[at].title ?? ""),
          content: cn(lt, v[at].content ?? "", !0),
          tags: B(lt.substring(1), v[at].tags),
        }
      }
      function B(lt, ct) {
        return !ct || Zt !== "tags"
          ? []
          : ct
              .map((at) =>
                at.toLowerCase().includes(lt.toLowerCase())
                  ? `<li><p class="match-tag">#${at}</p></li>`
                  : `<li><p>#${at}</p></li>`,
              )
              .slice(0, Cn)
      }
      function z(lt) {
        return new URL(xt(h, lt), location.toString())
      }
      let et = ({ slug: lt, title: ct, content: at, tags: vt }) => {
        let kt = vt.length > 0 ? `<ul class="tags">${vt.join("")}</ul>` : "",
          Rt = document.createElement("a")
        Rt.classList.add("result-card"),
          (Rt.id = lt),
          (Rt.href = z(lt).toString()),
          (Rt.innerHTML = `<h3>${ct}</h3>${kt}${G && window.innerWidth > 600 ? "" : `<p>${at}</p>`}`),
          Rt.addEventListener("click", (Jt) => {
            Jt.altKey || Jt.ctrlKey || Jt.metaKey || Jt.shiftKey || rt()
          })
        let se = (Jt) => {
          Jt.altKey || Jt.ctrlKey || Jt.metaKey || Jt.shiftKey || rt()
        }
        async function Me(Jt) {
          if (!Jt.target) return
          let en = Jt.target
          await yt(en)
        }
        return (
          Rt.addEventListener("mouseenter", Me),
          window.addCleanup(() => Rt.removeEventListener("mouseenter", Me)),
          Rt.addEventListener("click", se),
          window.addCleanup(() => Rt.removeEventListener("click", se)),
          Rt
        )
      }
      async function nt(lt) {
        if (ut)
          if (
            (d(ut),
            lt.length === 0
              ? (ut.innerHTML = `<a class="result-card no-match">
          <h3>No results.</h3>
          <p>Try another search term?</p>
      </a>`)
              : ut.append(...lt.map(et)),
            lt.length === 0 && Y)
          )
            d(Y)
          else {
            let ct = ut.firstElementChild
            ct.classList.add("focus"), (g = ct), await yt(ct)
          }
      }
      async function ot(lt) {
        if (je.has(lt)) return je.get(lt)
        let ct = z(lt).toString(),
          at = await fetch(ct)
            .then((vt) => vt.text())
            .then((vt) => {
              if (vt === void 0) throw new Error(`Could not fetch ${ct}`)
              let kt = Ge.parseFromString(vt ?? "", "text/html")
              if (kt.body.dataset.enablePreview === "false") {
                let Rt = document.createElement("div")
                return (
                  (Rt.innerHTML = "<p>L'aper\xE7u est d\xE9sactiv\xE9 sur cette page.</p>"), [Rt]
                )
              }
              return ft(kt, ct), [...kt.getElementsByClassName("popover-hint")]
            })
        return je.set(lt, at), at
      }
      async function yt(lt) {
        if (!O || !G || !lt || !Y) return
        let ct = lt.id,
          at = await ot(ct).then((vt) => vt.flatMap((kt) => [...N(Tt, kt).children]))
        ;(V = document.createElement("div")),
          V.classList.add("preview-inner"),
          V.append(...at),
          Y.replaceChildren(V),
          [...Y.querySelectorAll(".highlight")]
            .sort((vt, kt) => kt.innerHTML.length - vt.innerHTML.length)[0]
            ?.scrollIntoView({ block: "start" })
      }
      async function Ct(lt) {
        if (!O || !Te) return
        ;(Tt = lt.target.value),
          O.classList.toggle("display-results", Tt !== ""),
          (Zt = Tt.startsWith("#") ? "tags" : "basic")
        let ct
        Zt === "tags"
          ? (ct = await Te.searchAsync({ query: Tt.substring(1), limit: ln, index: ["tags"] }))
          : Zt === "basic" &&
            (ct = await Te.searchAsync({ query: Tt, limit: ln, index: ["title", "content"] }))
        let at = (kt) => {
            let Rt = ct.filter((se) => se.field === kt)
            return Rt.length === 0 ? [] : [...Rt[0].result]
          },
          vt = [...new Set([...at("title"), ...at("content"), ...at("tags")])].map((kt) =>
            D(Tt, kt),
          )
        await nt(vt)
      }
      document.addEventListener("keydown", b),
        window.addCleanup(() => document.removeEventListener("keydown", b)),
        T?.addEventListener("click", () => i("basic")),
        window.addCleanup(() => T?.removeEventListener("click", () => i("basic"))),
        q?.addEventListener("input", Ct),
        window.addCleanup(() => q?.removeEventListener("input", Ct)),
        Pn(E, rt),
        await R(v)
    })
    async function R(a) {
      let h = 0,
        v = []
      for (let [E, A] of Object.entries(a))
        v.push(
          Te.addAsync(h++, { id: h, slug: E, title: A.title, content: A.content, tags: A.tags }),
        )
      return await Promise.all(v)
    }
  })(),
  (function () {
    var Be = Object.create,
      Le = Object.defineProperty,
      Oe = Object.getOwnPropertyDescriptor,
      ge = Object.getOwnPropertyNames,
      xe = Object.getPrototypeOf,
      Gt = Object.prototype.hasOwnProperty,
      $e = (e, u) => () => (u || e((u = { exports: {} }).exports, u), u.exports),
      ze = (e, u, s, p) => {
        if ((u && typeof u == "object") || typeof u == "function")
          for (let m of ge(u))
            !Gt.call(e, m) &&
              m !== s &&
              Le(e, m, { get: () => u[m], enumerable: !(p = Oe(u, m)) || p.enumerable })
        return e
      },
      Xt = (e, u, s) => (
        (s = e != null ? Be(xe(e)) : {}),
        ze(u || !e || !e.__esModule ? Le(s, "default", { value: e, enumerable: !0 }) : s, e)
      ),
      rn = $e((e, u) => {
        "use strict"
        u.exports = p
        function s(_) {
          return _ instanceof Buffer
            ? Buffer.from(_)
            : new _.constructor(_.buffer.slice(), _.byteOffset, _.length)
        }
        function p(_) {
          if (((_ = _ || {}), _.circles)) return m(_)
          return _.proto ? n : t
          function C(r, o) {
            for (var l = Object.keys(r), c = new Array(l.length), f = 0; f < l.length; f++) {
              var y = l[f],
                w = r[y]
              typeof w != "object" || w === null
                ? (c[y] = w)
                : w instanceof Date
                  ? (c[y] = new Date(w))
                  : ArrayBuffer.isView(w)
                    ? (c[y] = s(w))
                    : (c[y] = o(w))
            }
            return c
          }
          function t(r) {
            if (typeof r != "object" || r === null) return r
            if (r instanceof Date) return new Date(r)
            if (Array.isArray(r)) return C(r, t)
            if (r instanceof Map) return new Map(C(Array.from(r), t))
            if (r instanceof Set) return new Set(C(Array.from(r), t))
            var o = {}
            for (var l in r)
              if (Object.hasOwnProperty.call(r, l) !== !1) {
                var c = r[l]
                typeof c != "object" || c === null
                  ? (o[l] = c)
                  : c instanceof Date
                    ? (o[l] = new Date(c))
                    : c instanceof Map
                      ? (o[l] = new Map(C(Array.from(c), t)))
                      : c instanceof Set
                        ? (o[l] = new Set(C(Array.from(c), t)))
                        : ArrayBuffer.isView(c)
                          ? (o[l] = s(c))
                          : (o[l] = t(c))
              }
            return o
          }
          function n(r) {
            if (typeof r != "object" || r === null) return r
            if (r instanceof Date) return new Date(r)
            if (Array.isArray(r)) return C(r, n)
            if (r instanceof Map) return new Map(C(Array.from(r), n))
            if (r instanceof Set) return new Set(C(Array.from(r), n))
            var o = {}
            for (var l in r) {
              var c = r[l]
              typeof c != "object" || c === null
                ? (o[l] = c)
                : c instanceof Date
                  ? (o[l] = new Date(c))
                  : c instanceof Map
                    ? (o[l] = new Map(C(Array.from(c), n)))
                    : c instanceof Set
                      ? (o[l] = new Set(C(Array.from(c), n)))
                      : ArrayBuffer.isView(c)
                        ? (o[l] = s(c))
                        : (o[l] = n(c))
            }
            return o
          }
        }
        function m(_) {
          var C = [],
            t = []
          return _.proto ? o : r
          function n(l, c) {
            for (var f = Object.keys(l), y = new Array(f.length), w = 0; w < f.length; w++) {
              var x = f[w],
                k = l[x]
              if (typeof k != "object" || k === null) y[x] = k
              else if (k instanceof Date) y[x] = new Date(k)
              else if (ArrayBuffer.isView(k)) y[x] = s(k)
              else {
                var F = C.indexOf(k)
                F !== -1 ? (y[x] = t[F]) : (y[x] = c(k))
              }
            }
            return y
          }
          function r(l) {
            if (typeof l != "object" || l === null) return l
            if (l instanceof Date) return new Date(l)
            if (Array.isArray(l)) return n(l, r)
            if (l instanceof Map) return new Map(n(Array.from(l), r))
            if (l instanceof Set) return new Set(n(Array.from(l), r))
            var c = {}
            C.push(l), t.push(c)
            for (var f in l)
              if (Object.hasOwnProperty.call(l, f) !== !1) {
                var y = l[f]
                if (typeof y != "object" || y === null) c[f] = y
                else if (y instanceof Date) c[f] = new Date(y)
                else if (y instanceof Map) c[f] = new Map(n(Array.from(y), r))
                else if (y instanceof Set) c[f] = new Set(n(Array.from(y), r))
                else if (ArrayBuffer.isView(y)) c[f] = s(y)
                else {
                  var w = C.indexOf(y)
                  w !== -1 ? (c[f] = t[w]) : (c[f] = r(y))
                }
              }
            return C.pop(), t.pop(), c
          }
          function o(l) {
            if (typeof l != "object" || l === null) return l
            if (l instanceof Date) return new Date(l)
            if (Array.isArray(l)) return n(l, o)
            if (l instanceof Map) return new Map(n(Array.from(l), o))
            if (l instanceof Set) return new Set(n(Array.from(l), o))
            var c = {}
            C.push(l), t.push(c)
            for (var f in l) {
              var y = l[f]
              if (typeof y != "object" || y === null) c[f] = y
              else if (y instanceof Date) c[f] = new Date(y)
              else if (y instanceof Map) c[f] = new Map(n(Array.from(y), o))
              else if (y instanceof Set) c[f] = new Set(n(Array.from(y), o))
              else if (ArrayBuffer.isView(y)) c[f] = s(y)
              else {
                var w = C.indexOf(y)
                w !== -1 ? (c[f] = t[w]) : (c[f] = o(y))
              }
            }
            return C.pop(), t.pop(), c
          }
        }
      }),
      he = { value: () => {} }
    function Vt() {
      for (var e = 0, u = arguments.length, s = {}, p; e < u; ++e) {
        if (!(p = arguments[e] + "") || p in s || /[\s.]/.test(p))
          throw new Error("illegal type: " + p)
        s[p] = []
      }
      return new Ne(s)
    }
    function Ne(e) {
      this._ = e
    }
    function ee(e, u) {
      return e
        .trim()
        .split(/^|\s+/)
        .map(function (s) {
          var p = "",
            m = s.indexOf(".")
          if ((m >= 0 && ((p = s.slice(m + 1)), (s = s.slice(0, m))), s && !u.hasOwnProperty(s)))
            throw new Error("unknown type: " + s)
          return { type: s, name: p }
        })
    }
    Ne.prototype = Vt.prototype = {
      constructor: Ne,
      on: function (e, u) {
        var s = this._,
          p = ee(e + "", s),
          m,
          _ = -1,
          C = p.length
        if (arguments.length < 2) {
          for (; ++_ < C; ) if ((m = (e = p[_]).type) && (m = me(s[m], e.name))) return m
          return
        }
        if (u != null && typeof u != "function") throw new Error("invalid callback: " + u)
        for (; ++_ < C; )
          if ((m = (e = p[_]).type)) s[m] = pn(s[m], e.name, u)
          else if (u == null) for (m in s) s[m] = pn(s[m], e.name, null)
        return this
      },
      copy: function () {
        var e = {},
          u = this._
        for (var s in u) e[s] = u[s].slice()
        return new Ne(e)
      },
      call: function (e, u) {
        if ((m = arguments.length - 2) > 0)
          for (var s = new Array(m), p = 0, m, _; p < m; ++p) s[p] = arguments[p + 2]
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e)
        for (_ = this._[e], p = 0, m = _.length; p < m; ++p) _[p].value.apply(u, s)
      },
      apply: function (e, u, s) {
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e)
        for (var p = this._[e], m = 0, _ = p.length; m < _; ++m) p[m].value.apply(u, s)
      },
    }
    function me(e, u) {
      for (var s = 0, p = e.length, m; s < p; ++s) if ((m = e[s]).name === u) return m.value
    }
    function pn(e, u, s) {
      for (var p = 0, m = e.length; p < m; ++p)
        if (e[p].name === u) {
          ;(e[p] = he), (e = e.slice(0, p).concat(e.slice(p + 1)))
          break
        }
      return s != null && e.push({ name: u, value: s }), e
    }
    var ae = Vt,
      ke = "http://www.w3.org/1999/xhtml",
      te = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: ke,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      }
    function Ke(e) {
      var u = (e += ""),
        s = u.indexOf(":")
      return (
        s >= 0 && (u = e.slice(0, s)) !== "xmlns" && (e = e.slice(s + 1)),
        te.hasOwnProperty(u) ? { space: te[u], local: e } : e
      )
    }
    function gn(e) {
      return function () {
        var u = this.ownerDocument,
          s = this.namespaceURI
        return s === ke && u.documentElement.namespaceURI === ke
          ? u.createElement(e)
          : u.createElementNS(s, e)
      }
    }
    function Xe(e) {
      return function () {
        return this.ownerDocument.createElementNS(e.space, e.local)
      }
    }
    function Ve(e) {
      var u = Ke(e)
      return (u.local ? Xe : gn)(u)
    }
    function ne() {}
    function le(e) {
      return e == null
        ? ne
        : function () {
            return this.querySelector(e)
          }
    }
    function un(e) {
      typeof e != "function" && (e = le(e))
      for (var u = this._groups, s = u.length, p = new Array(s), m = 0; m < s; ++m)
        for (var _ = u[m], C = _.length, t = (p[m] = new Array(C)), n, r, o = 0; o < C; ++o)
          (n = _[o]) &&
            (r = e.call(n, n.__data__, o, _)) &&
            ("__data__" in n && (r.__data__ = n.__data__), (t[o] = r))
      return new ot(p, this._parents)
    }
    function de(e) {
      return e == null ? [] : Array.isArray(e) ? e : Array.from(e)
    }
    function En() {
      return []
    }
    function ye(e) {
      return e == null
        ? En
        : function () {
            return this.querySelectorAll(e)
          }
    }
    function be(e) {
      return function () {
        return de(e.apply(this, arguments))
      }
    }
    function mn(e) {
      typeof e == "function" ? (e = be(e)) : (e = ye(e))
      for (var u = this._groups, s = u.length, p = [], m = [], _ = 0; _ < s; ++_)
        for (var C = u[_], t = C.length, n, r = 0; r < t; ++r)
          (n = C[r]) && (p.push(e.call(n, n.__data__, r, C)), m.push(n))
      return new ot(p, m)
    }
    function Pe(e) {
      return function () {
        return this.matches(e)
      }
    }
    function De(e) {
      return function (u) {
        return u.matches(e)
      }
    }
    var on = Array.prototype.find
    function He(e) {
      return function () {
        return on.call(this.children, e)
      }
    }
    function Qe() {
      return this.firstElementChild
    }
    function ve(e) {
      return this.select(e == null ? Qe : He(typeof e == "function" ? e : De(e)))
    }
    var Ze = Array.prototype.filter
    function qe() {
      return Array.from(this.children)
    }
    function tn(e) {
      return function () {
        return Ze.call(this.children, e)
      }
    }
    function Ie(e) {
      return this.selectAll(e == null ? qe : tn(typeof e == "function" ? e : De(e)))
    }
    function Ee(e) {
      typeof e != "function" && (e = Pe(e))
      for (var u = this._groups, s = u.length, p = new Array(s), m = 0; m < s; ++m)
        for (var _ = u[m], C = _.length, t = (p[m] = []), n, r = 0; r < C; ++r)
          (n = _[r]) && e.call(n, n.__data__, r, _) && t.push(n)
      return new ot(p, this._parents)
    }
    function tt(e) {
      return new Array(e.length)
    }
    function gt() {
      return new ot(this._enter || this._groups.map(tt), this._parents)
    }
    function At(e, u) {
      ;(this.ownerDocument = e.ownerDocument),
        (this.namespaceURI = e.namespaceURI),
        (this._next = null),
        (this._parent = e),
        (this.__data__ = u)
    }
    At.prototype = {
      constructor: At,
      appendChild: function (e) {
        return this._parent.insertBefore(e, this._next)
      },
      insertBefore: function (e, u) {
        return this._parent.insertBefore(e, u)
      },
      querySelector: function (e) {
        return this._parent.querySelector(e)
      },
      querySelectorAll: function (e) {
        return this._parent.querySelectorAll(e)
      },
    }
    function Lt(e) {
      return function () {
        return e
      }
    }
    function qt(e, u, s, p, m, _) {
      for (var C = 0, t, n = u.length, r = _.length; C < r; ++C)
        (t = u[C]) ? ((t.__data__ = _[C]), (p[C] = t)) : (s[C] = new At(e, _[C]))
      for (; C < n; ++C) (t = u[C]) && (m[C] = t)
    }
    function St(e, u, s, p, m, _, C) {
      var t,
        n,
        r = new Map(),
        o = u.length,
        l = _.length,
        c = new Array(o),
        f
      for (t = 0; t < o; ++t)
        (n = u[t]) &&
          ((c[t] = f = C.call(n, n.__data__, t, u) + ""), r.has(f) ? (m[t] = n) : r.set(f, n))
      for (t = 0; t < l; ++t)
        (f = C.call(e, _[t], t, _) + ""),
          (n = r.get(f)) ? ((p[t] = n), (n.__data__ = _[t]), r.delete(f)) : (s[t] = new At(e, _[t]))
      for (t = 0; t < o; ++t) (n = u[t]) && r.get(c[t]) === n && (m[t] = n)
    }
    function jt(e) {
      return e.__data__
    }
    function ce(e, u) {
      if (!arguments.length) return Array.from(this, jt)
      var s = u ? St : qt,
        p = this._parents,
        m = this._groups
      typeof e != "function" && (e = Lt(e))
      for (
        var _ = m.length, C = new Array(_), t = new Array(_), n = new Array(_), r = 0;
        r < _;
        ++r
      ) {
        var o = p[r],
          l = m[r],
          c = l.length,
          f = Yt(e.call(o, o && o.__data__, r, p)),
          y = f.length,
          w = (t[r] = new Array(y)),
          x = (C[r] = new Array(y)),
          k = (n[r] = new Array(c))
        s(o, l, w, x, k, f, u)
        for (var F = 0, $ = 0, L, K; F < y; ++F)
          if ((L = w[F])) {
            for (F >= $ && ($ = F + 1); !(K = x[$]) && ++$ < y; );
            L._next = K || null
          }
      }
      return (C = new ot(C, p)), (C._enter = t), (C._exit = n), C
    }
    function Yt(e) {
      return typeof e == "object" && "length" in e ? e : Array.from(e)
    }
    function Ht() {
      return new ot(this._exit || this._groups.map(tt), this._parents)
    }
    function re(e, u, s) {
      var p = this.enter(),
        m = this,
        _ = this.exit()
      return (
        typeof e == "function" ? ((p = e(p)), p && (p = p.selection())) : (p = p.append(e + "")),
        u != null && ((m = u(m)), m && (m = m.selection())),
        s == null ? _.remove() : s(_),
        p && m ? p.merge(m).order() : m
      )
    }
    function Nt(e) {
      for (
        var u = e.selection ? e.selection() : e,
          s = this._groups,
          p = u._groups,
          m = s.length,
          _ = p.length,
          C = Math.min(m, _),
          t = new Array(m),
          n = 0;
        n < C;
        ++n
      )
        for (var r = s[n], o = p[n], l = r.length, c = (t[n] = new Array(l)), f, y = 0; y < l; ++y)
          (f = r[y] || o[y]) && (c[y] = f)
      for (; n < m; ++n) t[n] = s[n]
      return new ot(t, this._parents)
    }
    function Mt() {
      for (var e = this._groups, u = -1, s = e.length; ++u < s; )
        for (var p = e[u], m = p.length - 1, _ = p[m], C; --m >= 0; )
          (C = p[m]) &&
            (_ && C.compareDocumentPosition(_) ^ 4 && _.parentNode.insertBefore(C, _), (_ = C))
      return this
    }
    function fe(e) {
      e || (e = zt)
      function u(l, c) {
        return l && c ? e(l.__data__, c.__data__) : !l - !c
      }
      for (var s = this._groups, p = s.length, m = new Array(p), _ = 0; _ < p; ++_) {
        for (var C = s[_], t = C.length, n = (m[_] = new Array(t)), r, o = 0; o < t; ++o)
          (r = C[o]) && (n[o] = r)
        n.sort(u)
      }
      return new ot(m, this._parents).order()
    }
    function zt(e, u) {
      return e < u ? -1 : e > u ? 1 : e >= u ? 0 : NaN
    }
    function _e() {
      var e = arguments[0]
      return (arguments[0] = this), e.apply(null, arguments), this
    }
    function Ue() {
      return Array.from(this)
    }
    function Se() {
      for (var e = this._groups, u = 0, s = e.length; u < s; ++u)
        for (var p = e[u], m = 0, _ = p.length; m < _; ++m) {
          var C = p[m]
          if (C) return C
        }
      return null
    }
    function Ye() {
      let e = 0
      for (let u of this) ++e
      return e
    }
    function vn() {
      return !this.node()
    }
    function yn(e) {
      for (var u = this._groups, s = 0, p = u.length; s < p; ++s)
        for (var m = u[s], _ = 0, C = m.length, t; _ < C; ++_)
          (t = m[_]) && e.call(t, t.__data__, _, m)
      return this
    }
    function wn(e) {
      return function () {
        this.removeAttribute(e)
      }
    }
    function _n(e) {
      return function () {
        this.removeAttributeNS(e.space, e.local)
      }
    }
    function sn(e, u) {
      return function () {
        this.setAttribute(e, u)
      }
    }
    function An(e, u) {
      return function () {
        this.setAttributeNS(e.space, e.local, u)
      }
    }
    function Tn(e, u) {
      return function () {
        var s = u.apply(this, arguments)
        s == null ? this.removeAttribute(e) : this.setAttribute(e, s)
      }
    }
    function Fn(e, u) {
      return function () {
        var s = u.apply(this, arguments)
        s == null
          ? this.removeAttributeNS(e.space, e.local)
          : this.setAttributeNS(e.space, e.local, s)
      }
    }
    function zn(e, u) {
      var s = Ke(e)
      if (arguments.length < 2) {
        var p = this.node()
        return s.local ? p.getAttributeNS(s.space, s.local) : p.getAttribute(s)
      }
      return this.each(
        (u == null
          ? s.local
            ? _n
            : wn
          : typeof u == "function"
            ? s.local
              ? Fn
              : Tn
            : s.local
              ? An
              : sn)(s, u),
      )
    }
    function kn(e) {
      return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView
    }
    function Pn(e) {
      return function () {
        this.style.removeProperty(e)
      }
    }
    function d(e, u, s) {
      return function () {
        this.style.setProperty(e, u, s)
      }
    }
    function M(e, u, s) {
      return function () {
        var p = u.apply(this, arguments)
        p == null ? this.style.removeProperty(e) : this.style.setProperty(e, p, s)
      }
    }
    function S(e, u, s) {
      return arguments.length > 1
        ? this.each((u == null ? Pn : typeof u == "function" ? M : d)(e, u, s ?? ""))
        : j(this.node(), e)
    }
    function j(e, u) {
      return e.style.getPropertyValue(u) || kn(e).getComputedStyle(e, null).getPropertyValue(u)
    }
    function I(e) {
      return function () {
        delete this[e]
      }
    }
    function J(e, u) {
      return function () {
        this[e] = u
      }
    }
    function ft(e, u) {
      return function () {
        var s = u.apply(this, arguments)
        s == null ? delete this[e] : (this[e] = s)
      }
    }
    function ht(e, u) {
      return arguments.length > 1
        ? this.each((u == null ? I : typeof u == "function" ? ft : J)(e, u))
        : this.node()[e]
    }
    function xt(e) {
      return e.trim().split(/^|\s+/)
    }
    function It(e) {
      return e.classList || new Kt(e)
    }
    function Kt(e) {
      ;(this._node = e), (this._names = xt(e.getAttribute("class") || ""))
    }
    Kt.prototype = {
      add: function (e) {
        var u = this._names.indexOf(e)
        u < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")))
      },
      remove: function (e) {
        var u = this._names.indexOf(e)
        u >= 0 &&
          (this._names.splice(u, 1), this._node.setAttribute("class", this._names.join(" ")))
      },
      contains: function (e) {
        return this._names.indexOf(e) >= 0
      },
    }
    function pe(e, u) {
      for (var s = It(e), p = -1, m = u.length; ++p < m; ) s.add(u[p])
    }
    function ie(e, u) {
      for (var s = It(e), p = -1, m = u.length; ++p < m; ) s.remove(u[p])
    }
    function Zt(e) {
      return function () {
        pe(this, e)
      }
    }
    function Tt(e) {
      return function () {
        ie(this, e)
      }
    }
    function ue(e, u) {
      return function () {
        ;(u.apply(this, arguments) ? pe : ie)(this, e)
      }
    }
    function Te(e, u) {
      var s = xt(e + "")
      if (arguments.length < 2) {
        for (var p = It(this.node()), m = -1, _ = s.length; ++m < _; )
          if (!p.contains(s[m])) return !1
        return !0
      }
      return this.each((typeof u == "function" ? ue : u ? Zt : Tt)(s, u))
    }
    function Ge() {
      this.textContent = ""
    }
    function je(e) {
      return function () {
        this.textContent = e
      }
    }
    function Ce(e) {
      return function () {
        var u = e.apply(this, arguments)
        this.textContent = u ?? ""
      }
    }
    function ln(e) {
      return arguments.length
        ? this.each(e == null ? Ge : (typeof e == "function" ? Ce : je)(e))
        : this.node().textContent
    }
    function Cn() {
      this.innerHTML = ""
    }
    function Dn(e) {
      return function () {
        this.innerHTML = e
      }
    }
    function cn(e) {
      return function () {
        var u = e.apply(this, arguments)
        this.innerHTML = u ?? ""
      }
    }
    function N(e) {
      return arguments.length
        ? this.each(e == null ? Cn : (typeof e == "function" ? cn : Dn)(e))
        : this.node().innerHTML
    }
    function R() {
      this.nextSibling && this.parentNode.appendChild(this)
    }
    function a() {
      return this.each(R)
    }
    function h() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function v() {
      return this.each(h)
    }
    function E(e) {
      var u = typeof e == "function" ? e : Ve(e)
      return this.select(function () {
        return this.appendChild(u.apply(this, arguments))
      })
    }
    function A() {
      return null
    }
    function T(e, u) {
      var s = typeof e == "function" ? e : Ve(e),
        p = u == null ? A : typeof u == "function" ? u : le(u)
      return this.select(function () {
        return this.insertBefore(s.apply(this, arguments), p.apply(this, arguments) || null)
      })
    }
    function q() {
      var e = this.parentNode
      e && e.removeChild(this)
    }
    function O() {
      return this.each(q)
    }
    function U() {
      var e = this.cloneNode(!1),
        u = this.parentNode
      return u ? u.insertBefore(e, this.nextSibling) : e
    }
    function P() {
      var e = this.cloneNode(!0),
        u = this.parentNode
      return u ? u.insertBefore(e, this.nextSibling) : e
    }
    function G(e) {
      return this.select(e ? P : U)
    }
    function Y(e) {
      return arguments.length ? this.property("__data__", e) : this.node().__data__
    }
    function V(e) {
      return function (u) {
        e.call(this, u, this.__data__)
      }
    }
    function ut(e) {
      return e
        .trim()
        .split(/^|\s+/)
        .map(function (u) {
          var s = "",
            p = u.indexOf(".")
          return p >= 0 && ((s = u.slice(p + 1)), (u = u.slice(0, p))), { type: u, name: s }
        })
    }
    function rt(e) {
      return function () {
        var u = this.__on
        if (u) {
          for (var s = 0, p = -1, m = u.length, _; s < m; ++s)
            (_ = u[s]),
              (!e.type || _.type === e.type) && _.name === e.name
                ? this.removeEventListener(_.type, _.listener, _.options)
                : (u[++p] = _)
          ++p ? (u.length = p) : delete this.__on
        }
      }
    }
    function i(e, u, s) {
      return function () {
        var p = this.__on,
          m,
          _ = V(u)
        if (p) {
          for (var C = 0, t = p.length; C < t; ++C)
            if ((m = p[C]).type === e.type && m.name === e.name) {
              this.removeEventListener(m.type, m.listener, m.options),
                this.addEventListener(m.type, (m.listener = _), (m.options = s)),
                (m.value = u)
              return
            }
        }
        this.addEventListener(e.type, _, s),
          (m = { type: e.type, name: e.name, value: u, listener: _, options: s }),
          p ? p.push(m) : (this.__on = [m])
      }
    }
    function g(e, u, s) {
      var p = ut(e + ""),
        m,
        _ = p.length,
        C
      if (arguments.length < 2) {
        var t = this.node().__on
        if (t) {
          for (var n = 0, r = t.length, o; n < r; ++n)
            for (m = 0, o = t[n]; m < _; ++m)
              if ((C = p[m]).type === o.type && C.name === o.name) return o.value
        }
        return
      }
      for (t = u ? i : rt, m = 0; m < _; ++m) this.each(t(p[m], u, s))
      return this
    }
    function b(e, u, s) {
      var p = kn(e),
        m = p.CustomEvent
      typeof m == "function"
        ? (m = new m(u, s))
        : ((m = p.document.createEvent("Event")),
          s
            ? (m.initEvent(u, s.bubbles, s.cancelable), (m.detail = s.detail))
            : m.initEvent(u, !1, !1)),
        e.dispatchEvent(m)
    }
    function D(e, u) {
      return function () {
        return b(this, e, u)
      }
    }
    function B(e, u) {
      return function () {
        return b(this, e, u.apply(this, arguments))
      }
    }
    function z(e, u) {
      return this.each((typeof u == "function" ? B : D)(e, u))
    }
    function* et() {
      for (var e = this._groups, u = 0, s = e.length; u < s; ++u)
        for (var p = e[u], m = 0, _ = p.length, C; m < _; ++m) (C = p[m]) && (yield C)
    }
    var nt = [null]
    function ot(e, u) {
      ;(this._groups = e), (this._parents = u)
    }
    function yt() {
      return new ot([[document.documentElement]], nt)
    }
    function Ct() {
      return this
    }
    ot.prototype = yt.prototype = {
      constructor: ot,
      select: un,
      selectAll: mn,
      selectChild: ve,
      selectChildren: Ie,
      filter: Ee,
      data: ce,
      enter: gt,
      exit: Ht,
      join: re,
      merge: Nt,
      selection: Ct,
      order: Mt,
      sort: fe,
      call: _e,
      nodes: Ue,
      node: Se,
      size: Ye,
      empty: vn,
      each: yn,
      attr: zn,
      style: S,
      property: ht,
      classed: Te,
      text: ln,
      html: N,
      raise: a,
      lower: v,
      append: E,
      insert: T,
      remove: O,
      clone: G,
      datum: Y,
      on: g,
      dispatch: z,
      [Symbol.iterator]: et,
    }
    var lt = yt
    function ct(e) {
      return typeof e == "string"
        ? new ot([[document.querySelector(e)]], [document.documentElement])
        : new ot([[e]], nt)
    }
    function at(e) {
      let u
      for (; (u = e.sourceEvent); ) e = u
      return e
    }
    function vt(e, u) {
      if (((e = at(e)), u === void 0 && (u = e.currentTarget), u)) {
        var s = u.ownerSVGElement || u
        if (s.createSVGPoint) {
          var p = s.createSVGPoint()
          return (
            (p.x = e.clientX),
            (p.y = e.clientY),
            (p = p.matrixTransform(u.getScreenCTM().inverse())),
            [p.x, p.y]
          )
        }
        if (u.getBoundingClientRect) {
          var m = u.getBoundingClientRect()
          return [e.clientX - m.left - u.clientLeft, e.clientY - m.top - u.clientTop]
        }
      }
      return [e.pageX, e.pageY]
    }
    function kt(e) {
      return typeof e == "string"
        ? new ot([document.querySelectorAll(e)], [document.documentElement])
        : new ot([de(e)], nt)
    }
    var Rt = { passive: !1 },
      se = { capture: !0, passive: !1 }
    function Me(e) {
      e.stopImmediatePropagation()
    }
    function Jt(e) {
      e.preventDefault(), e.stopImmediatePropagation()
    }
    function en(e) {
      var u = e.document.documentElement,
        s = ct(e).on("dragstart.drag", Jt, se)
      "onselectstart" in u
        ? s.on("selectstart.drag", Jt, se)
        : ((u.__noselect = u.style.MozUserSelect), (u.style.MozUserSelect = "none"))
    }
    function sr(e, u) {
      var s = e.document.documentElement,
        p = ct(e).on("dragstart.drag", null)
      u &&
        (p.on("click.drag", Jt, se),
        setTimeout(function () {
          p.on("click.drag", null)
        }, 0)),
        "onselectstart" in s
          ? p.on("selectstart.drag", null)
          : ((s.style.MozUserSelect = s.__noselect), delete s.__noselect)
    }
    var Mn = (e) => () => e
    function $n(
      e,
      {
        sourceEvent: u,
        subject: s,
        target: p,
        identifier: m,
        active: _,
        x: C,
        y: t,
        dx: n,
        dy: r,
        dispatch: o,
      },
    ) {
      Object.defineProperties(this, {
        type: { value: e, enumerable: !0, configurable: !0 },
        sourceEvent: { value: u, enumerable: !0, configurable: !0 },
        subject: { value: s, enumerable: !0, configurable: !0 },
        target: { value: p, enumerable: !0, configurable: !0 },
        identifier: { value: m, enumerable: !0, configurable: !0 },
        active: { value: _, enumerable: !0, configurable: !0 },
        x: { value: C, enumerable: !0, configurable: !0 },
        y: { value: t, enumerable: !0, configurable: !0 },
        dx: { value: n, enumerable: !0, configurable: !0 },
        dy: { value: r, enumerable: !0, configurable: !0 },
        _: { value: o },
      })
    }
    $n.prototype.on = function () {
      var e = this._.on.apply(this._, arguments)
      return e === this._ ? this : e
    }
    function lr(e) {
      return !e.ctrlKey && !e.button
    }
    function Di() {
      return this.parentNode
    }
    function Mi(e, u) {
      return u ?? { x: e.x, y: e.y }
    }
    function qr() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function li() {
      var e = lr,
        u = Di,
        s = Mi,
        p = qr,
        m = {},
        _ = ae("start", "drag", "end"),
        C = 0,
        t,
        n,
        r,
        o,
        l = 0
      function c(L) {
        L.on("mousedown.drag", f)
          .filter(p)
          .on("touchstart.drag", x)
          .on("touchmove.drag", k, Rt)
          .on("touchend.drag touchcancel.drag", F)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      function f(L, K) {
        if (!(o || !e.call(this, L, K))) {
          var X = $(this, u.call(this, L, K), L, K, "mouse")
          X &&
            (ct(L.view).on("mousemove.drag", y, se).on("mouseup.drag", w, se),
            en(L.view),
            Me(L),
            (r = !1),
            (t = L.clientX),
            (n = L.clientY),
            X("start", L))
        }
      }
      function y(L) {
        if ((Jt(L), !r)) {
          var K = L.clientX - t,
            X = L.clientY - n
          r = K * K + X * X > l
        }
        m.mouse("drag", L)
      }
      function w(L) {
        ct(L.view).on("mousemove.drag mouseup.drag", null), sr(L.view, r), Jt(L), m.mouse("end", L)
      }
      function x(L, K) {
        if (e.call(this, L, K)) {
          var X = L.changedTouches,
            Z = u.call(this, L, K),
            Q = X.length,
            wt,
            Bt
          for (wt = 0; wt < Q; ++wt)
            (Bt = $(this, Z, L, K, X[wt].identifier, X[wt])) && (Me(L), Bt("start", L, X[wt]))
        }
      }
      function k(L) {
        var K = L.changedTouches,
          X = K.length,
          Z,
          Q
        for (Z = 0; Z < X; ++Z) (Q = m[K[Z].identifier]) && (Jt(L), Q("drag", L, K[Z]))
      }
      function F(L) {
        var K = L.changedTouches,
          X = K.length,
          Z,
          Q
        for (
          o && clearTimeout(o),
            o = setTimeout(function () {
              o = null
            }, 500),
            Z = 0;
          Z < X;
          ++Z
        )
          (Q = m[K[Z].identifier]) && (Me(L), Q("end", L, K[Z]))
      }
      function $(L, K, X, Z, Q, wt) {
        var Bt = _.copy(),
          it = vt(wt || X, K),
          $t,
          Wt,
          W
        if (
          (W = s.call(
            L,
            new $n("beforestart", {
              sourceEvent: X,
              target: c,
              identifier: Q,
              active: C,
              x: it[0],
              y: it[1],
              dx: 0,
              dy: 0,
              dispatch: Bt,
            }),
            Z,
          )) != null
        )
          return (
            ($t = W.x - it[0] || 0),
            (Wt = W.y - it[1] || 0),
            function _t(dt, Dt, Pt) {
              var Qt = it,
                mt
              switch (dt) {
                case "start":
                  ;(m[Q] = _t), (mt = C++)
                  break
                case "end":
                  delete m[Q], --C
                case "drag":
                  ;(it = vt(Pt || Dt, K)), (mt = C)
                  break
              }
              Bt.call(
                dt,
                L,
                new $n(dt, {
                  sourceEvent: Dt,
                  subject: W,
                  target: c,
                  identifier: Q,
                  active: mt,
                  x: it[0] + $t,
                  y: it[1] + Wt,
                  dx: it[0] - Qt[0],
                  dy: it[1] - Qt[1],
                  dispatch: Bt,
                }),
                Z,
              )
            }
          )
      }
      return (
        (c.filter = function (L) {
          return arguments.length ? ((e = typeof L == "function" ? L : Mn(!!L)), c) : e
        }),
        (c.container = function (L) {
          return arguments.length ? ((u = typeof L == "function" ? L : Mn(L)), c) : u
        }),
        (c.subject = function (L) {
          return arguments.length ? ((s = typeof L == "function" ? L : Mn(L)), c) : s
        }),
        (c.touchable = function (L) {
          return arguments.length ? ((p = typeof L == "function" ? L : Mn(!!L)), c) : p
        }),
        (c.on = function () {
          var L = _.on.apply(_, arguments)
          return L === _ ? c : L
        }),
        (c.clickDistance = function (L) {
          return arguments.length ? ((l = (L = +L) * L), c) : Math.sqrt(l)
        }),
        c
      )
    }
    function ci(e, u, s) {
      ;(e.prototype = u.prototype = s), (s.constructor = e)
    }
    function Bi(e, u) {
      var s = Object.create(e.prototype)
      for (var p in u) s[p] = u[p]
      return s
    }
    function Er() {}
    var _r = 0.7,
      zr = 1 / _r,
      Xn = "\\s*([+-]?\\d+)\\s*",
      cr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      xn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Ar = /^#([0-9a-f]{3,8})$/,
      Pr = new RegExp(`^rgb\\(${Xn},${Xn},${Xn}\\)$`),
      fr = new RegExp(`^rgb\\(${xn},${xn},${xn}\\)$`),
      kr = new RegExp(`^rgba\\(${Xn},${Xn},${Xn},${cr}\\)$`),
      On = new RegExp(`^rgba\\(${xn},${xn},${xn},${cr}\\)$`),
      hu = new RegExp(`^hsl\\(${cr},${xn},${xn}\\)$`),
      du = new RegExp(`^hsla\\(${cr},${xn},${xn},${cr}\\)$`),
      Li = {
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
    ci(Er, hr, {
      copy(e) {
        return Object.assign(new this.constructor(), this, e)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: Ni,
      formatHex: Ni,
      formatHex8: pu,
      formatHsl: gu,
      formatRgb: Si,
      toString: Si,
    })
    function Ni() {
      return this.rgb().formatHex()
    }
    function pu() {
      return this.rgb().formatHex8()
    }
    function gu() {
      return di(this).formatHsl()
    }
    function Si() {
      return this.rgb().formatRgb()
    }
    function hr(e) {
      var u, s
      return (
        (e = (e + "").trim().toLowerCase()),
        (u = Ar.exec(e))
          ? ((s = u[1].length),
            (u = parseInt(u[1], 16)),
            s === 6
              ? fi(u)
              : s === 3
                ? new Je(
                    ((u >> 8) & 15) | ((u >> 4) & 240),
                    ((u >> 4) & 15) | (u & 240),
                    ((u & 15) << 4) | (u & 15),
                    1,
                  )
                : s === 8
                  ? Ir((u >> 24) & 255, (u >> 16) & 255, (u >> 8) & 255, (u & 255) / 255)
                  : s === 4
                    ? Ir(
                        ((u >> 12) & 15) | ((u >> 8) & 240),
                        ((u >> 8) & 15) | ((u >> 4) & 240),
                        ((u >> 4) & 15) | (u & 240),
                        (((u & 15) << 4) | (u & 15)) / 255,
                      )
                    : null)
          : (u = Pr.exec(e))
            ? new Je(u[1], u[2], u[3], 1)
            : (u = fr.exec(e))
              ? new Je((u[1] * 255) / 100, (u[2] * 255) / 100, (u[3] * 255) / 100, 1)
              : (u = kr.exec(e))
                ? Ir(u[1], u[2], u[3], u[4])
                : (u = On.exec(e))
                  ? Ir((u[1] * 255) / 100, (u[2] * 255) / 100, (u[3] * 255) / 100, u[4])
                  : (u = hu.exec(e))
                    ? Fi(u[1], u[2] / 100, u[3] / 100, 1)
                    : (u = du.exec(e))
                      ? Fi(u[1], u[2] / 100, u[3] / 100, u[4])
                      : Li.hasOwnProperty(e)
                        ? fi(Li[e])
                        : e === "transparent"
                          ? new Je(NaN, NaN, NaN, 0)
                          : null
      )
    }
    function fi(e) {
      return new Je((e >> 16) & 255, (e >> 8) & 255, e & 255, 1)
    }
    function Ir(e, u, s, p) {
      return p <= 0 && (e = u = s = NaN), new Je(e, u, s, p)
    }
    function mu(e) {
      return (
        e instanceof Er || (e = hr(e)),
        e ? ((e = e.rgb()), new Je(e.r, e.g, e.b, e.opacity)) : new Je()
      )
    }
    function Cr(e, u, s, p) {
      return arguments.length === 1 ? mu(e) : new Je(e, u, s, p ?? 1)
    }
    function Je(e, u, s, p) {
      ;(this.r = +e), (this.g = +u), (this.b = +s), (this.opacity = +p)
    }
    ci(
      Je,
      Cr,
      Bi(Er, {
        brighter(e) {
          return (
            (e = e == null ? zr : Math.pow(zr, e)),
            new Je(this.r * e, this.g * e, this.b * e, this.opacity)
          )
        },
        darker(e) {
          return (
            (e = e == null ? _r : Math.pow(_r, e)),
            new Je(this.r * e, this.g * e, this.b * e, this.opacity)
          )
        },
        rgb() {
          return this
        },
        clamp() {
          return new Je(Re(this.r), Re(this.g), Re(this.b), er(this.opacity))
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
        hex: hi,
        formatHex: hi,
        formatHex8: Rr,
        formatRgb: Ti,
        toString: Ti,
      }),
    )
    function hi() {
      return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}`
    }
    function Rr() {
      return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}${Yn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
    }
    function Ti() {
      let e = er(this.opacity)
      return `${e === 1 ? "rgb(" : "rgba("}${Re(this.r)}, ${Re(this.g)}, ${Re(this.b)}${e === 1 ? ")" : `, ${e})`}`
    }
    function er(e) {
      return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
    }
    function Re(e) {
      return Math.max(0, Math.min(255, Math.round(e) || 0))
    }
    function Yn(e) {
      return (e = Re(e)), (e < 16 ? "0" : "") + e.toString(16)
    }
    function Fi(e, u, s, p) {
      return (
        p <= 0 ? (e = u = s = NaN) : s <= 0 || s >= 1 ? (e = u = NaN) : u <= 0 && (e = NaN),
        new nn(e, u, s, p)
      )
    }
    function di(e) {
      if (e instanceof nn) return new nn(e.h, e.s, e.l, e.opacity)
      if ((e instanceof Er || (e = hr(e)), !e)) return new nn()
      if (e instanceof nn) return e
      e = e.rgb()
      var u = e.r / 255,
        s = e.g / 255,
        p = e.b / 255,
        m = Math.min(u, s, p),
        _ = Math.max(u, s, p),
        C = NaN,
        t = _ - m,
        n = (_ + m) / 2
      return (
        t
          ? (u === _
              ? (C = (s - p) / t + (s < p) * 6)
              : s === _
                ? (C = (p - u) / t + 2)
                : (C = (u - s) / t + 4),
            (t /= n < 0.5 ? _ + m : 2 - _ - m),
            (C *= 60))
          : (t = n > 0 && n < 1 ? 0 : C),
        new nn(C, t, n, e.opacity)
      )
    }
    function Vr(e, u, s, p) {
      return arguments.length === 1 ? di(e) : new nn(e, u, s, p ?? 1)
    }
    function nn(e, u, s, p) {
      ;(this.h = +e), (this.s = +u), (this.l = +s), (this.opacity = +p)
    }
    ci(
      nn,
      Vr,
      Bi(Er, {
        brighter(e) {
          return (
            (e = e == null ? zr : Math.pow(zr, e)), new nn(this.h, this.s, this.l * e, this.opacity)
          )
        },
        darker(e) {
          return (
            (e = e == null ? _r : Math.pow(_r, e)), new nn(this.h, this.s, this.l * e, this.opacity)
          )
        },
        rgb() {
          var e = (this.h % 360) + (this.h < 0) * 360,
            u = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            s = this.l,
            p = s + (s < 0.5 ? s : 1 - s) * u,
            m = 2 * s - p
          return new Je(
            Hr(e >= 240 ? e - 240 : e + 120, m, p),
            Hr(e, m, p),
            Hr(e < 120 ? e + 240 : e - 120, m, p),
            this.opacity,
          )
        },
        clamp() {
          return new nn(Gn(this.h), Dr(this.s), Dr(this.l), er(this.opacity))
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
          let e = er(this.opacity)
          return `${e === 1 ? "hsl(" : "hsla("}${Gn(this.h)}, ${Dr(this.s) * 100}%, ${Dr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`
        },
      }),
    )
    function Gn(e) {
      return (e = (e || 0) % 360), e < 0 ? e + 360 : e
    }
    function Dr(e) {
      return Math.max(0, Math.min(1, e || 0))
    }
    function Hr(e, u, s) {
      return (
        (e < 60
          ? u + ((s - u) * e) / 60
          : e < 180
            ? s
            : e < 240
              ? u + ((s - u) * (240 - e)) / 60
              : u) * 255
      )
    }
    function $i(e, u, s, p, m) {
      var _ = e * e,
        C = _ * e
      return (
        ((1 - 3 * e + 3 * _ - C) * u +
          (4 - 6 * _ + 3 * C) * s +
          (1 + 3 * e + 3 * _ - 3 * C) * p +
          C * m) /
        6
      )
    }
    function Bn(e) {
      var u = e.length - 1
      return function (s) {
        var p = s <= 0 ? (s = 0) : s >= 1 ? ((s = 1), u - 1) : Math.floor(s * u),
          m = e[p],
          _ = e[p + 1],
          C = p > 0 ? e[p - 1] : 2 * m - _,
          t = p < u - 1 ? e[p + 2] : 2 * _ - m
        return $i((s - p / u) * u, C, m, _, t)
      }
    }
    function Oi(e) {
      var u = e.length
      return function (s) {
        var p = Math.floor(((s %= 1) < 0 ? ++s : s) * u),
          m = e[(p + u - 1) % u],
          _ = e[p % u],
          C = e[(p + 1) % u],
          t = e[(p + 2) % u]
        return $i((s - p / u) * u, m, _, C, t)
      }
    }
    var Mr = (e) => () => e
    function pi(e, u) {
      return function (s) {
        return e + s * u
      }
    }
    function ji(e, u, s) {
      return (
        (e = Math.pow(e, s)),
        (u = Math.pow(u, s) - e),
        (s = 1 / s),
        function (p) {
          return Math.pow(e + p * u, s)
        }
      )
    }
    function vu(e) {
      return (e = +e) == 1
        ? qi
        : function (u, s) {
            return s - u ? ji(u, s, e) : Mr(isNaN(u) ? s : u)
          }
    }
    function qi(e, u) {
      var s = u - e
      return s ? pi(e, s) : Mr(isNaN(e) ? u : e)
    }
    var gi = (function e(u) {
      var s = vu(u)
      function p(m, _) {
        var C = s((m = Cr(m)).r, (_ = Cr(_)).r),
          t = s(m.g, _.g),
          n = s(m.b, _.b),
          r = qi(m.opacity, _.opacity)
        return function (o) {
          return (m.r = C(o)), (m.g = t(o)), (m.b = n(o)), (m.opacity = r(o)), m + ""
        }
      }
      return (p.gamma = e), p
    })(1)
    function zi(e) {
      return function (u) {
        var s = u.length,
          p = new Array(s),
          m = new Array(s),
          _ = new Array(s),
          C,
          t
        for (C = 0; C < s; ++C)
          (t = Cr(u[C])), (p[C] = t.r || 0), (m[C] = t.g || 0), (_[C] = t.b || 0)
        return (
          (p = e(p)),
          (m = e(m)),
          (_ = e(_)),
          (t.opacity = 1),
          function (n) {
            return (t.r = p(n)), (t.g = m(n)), (t.b = _(n)), t + ""
          }
        )
      }
    }
    var Qo = zi(Bn),
      Zo = zi(Oi)
    function In(e, u) {
      return (
        (e = +e),
        (u = +u),
        function (s) {
          return e * (1 - s) + u * s
        }
      )
    }
    var Ur = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Wr = new RegExp(Ur.source, "g")
    function ta(e) {
      return function () {
        return e
      }
    }
    function ea(e) {
      return function (u) {
        return e(u) + ""
      }
    }
    function Jn(e, u) {
      var s = (Ur.lastIndex = Wr.lastIndex = 0),
        p,
        m,
        _,
        C = -1,
        t = [],
        n = []
      for (e = e + "", u = u + ""; (p = Ur.exec(e)) && (m = Wr.exec(u)); )
        (_ = m.index) > s && ((_ = u.slice(s, _)), t[C] ? (t[C] += _) : (t[++C] = _)),
          (p = p[0]) === (m = m[0])
            ? t[C]
              ? (t[C] += m)
              : (t[++C] = m)
            : ((t[++C] = null), n.push({ i: C, x: In(p, m) })),
          (s = Wr.lastIndex)
      return (
        s < u.length && ((_ = u.slice(s)), t[C] ? (t[C] += _) : (t[++C] = _)),
        t.length < 2
          ? n[0]
            ? ea(n[0].x)
            : ta(u)
          : ((u = n.length),
            function (r) {
              for (var o = 0, l; o < u; ++o) t[(l = n[o]).i] = l.x(r)
              return t.join("")
            })
      )
    }
    var Kr = 180 / Math.PI,
      Br = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
    function Pi(e, u, s, p, m, _) {
      var C, t, n
      return (
        (C = Math.sqrt(e * e + u * u)) && ((e /= C), (u /= C)),
        (n = e * s + u * p) && ((s -= e * n), (p -= u * n)),
        (t = Math.sqrt(s * s + p * p)) && ((s /= t), (p /= t), (n /= t)),
        e * p < u * s && ((e = -e), (u = -u), (n = -n), (C = -C)),
        {
          translateX: m,
          translateY: _,
          rotate: Math.atan2(u, e) * Kr,
          skewX: Math.atan(n) * Kr,
          scaleX: C,
          scaleY: t,
        }
      )
    }
    var Xr
    function yu(e) {
      let u = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "")
      return u.isIdentity ? Br : Pi(u.a, u.b, u.c, u.d, u.e, u.f)
    }
    function Ii(e) {
      return e == null
        ? Br
        : (Xr || (Xr = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          Xr.setAttribute("transform", e),
          (e = Xr.transform.baseVal.consolidate())
            ? ((e = e.matrix), Pi(e.a, e.b, e.c, e.d, e.e, e.f))
            : Br)
    }
    function Yr(e, u, s, p) {
      function m(r) {
        return r.length ? r.pop() + " " : ""
      }
      function _(r, o, l, c, f, y) {
        if (r !== l || o !== c) {
          var w = f.push("translate(", null, u, null, s)
          y.push({ i: w - 4, x: In(r, l) }, { i: w - 2, x: In(o, c) })
        } else (l || c) && f.push("translate(" + l + u + c + s)
      }
      function C(r, o, l, c) {
        r !== o
          ? (r - o > 180 ? (o += 360) : o - r > 180 && (r += 360),
            c.push({ i: l.push(m(l) + "rotate(", null, p) - 2, x: In(r, o) }))
          : o && l.push(m(l) + "rotate(" + o + p)
      }
      function t(r, o, l, c) {
        r !== o
          ? c.push({ i: l.push(m(l) + "skewX(", null, p) - 2, x: In(r, o) })
          : o && l.push(m(l) + "skewX(" + o + p)
      }
      function n(r, o, l, c, f, y) {
        if (r !== l || o !== c) {
          var w = f.push(m(f) + "scale(", null, ",", null, ")")
          y.push({ i: w - 4, x: In(r, l) }, { i: w - 2, x: In(o, c) })
        } else (l !== 1 || c !== 1) && f.push(m(f) + "scale(" + l + "," + c + ")")
      }
      return function (r, o) {
        var l = [],
          c = []
        return (
          (r = e(r)),
          (o = e(o)),
          _(r.translateX, r.translateY, o.translateX, o.translateY, l, c),
          C(r.rotate, o.rotate, l, c),
          t(r.skewX, o.skewX, l, c),
          n(r.scaleX, r.scaleY, o.scaleX, o.scaleY, l, c),
          (r = o = null),
          function (f) {
            for (var y = -1, w = c.length, x; ++y < w; ) l[(x = c[y]).i] = x.x(f)
            return l.join("")
          }
        )
      }
    }
    var Ri = Yr(yu, "px, ", "px)", "deg)"),
      Gr = Yr(Ii, ", ", ")", ")"),
      wu = 1e-12
    function Vi(e) {
      return ((e = Math.exp(e)) + 1 / e) / 2
    }
    function Hi(e) {
      return ((e = Math.exp(e)) - 1 / e) / 2
    }
    function xu(e) {
      return ((e = Math.exp(2 * e)) - 1) / (e + 1)
    }
    var bu = (function e(u, s, p) {
        function m(_, C) {
          var t = _[0],
            n = _[1],
            r = _[2],
            o = C[0],
            l = C[1],
            c = C[2],
            f = o - t,
            y = l - n,
            w = f * f + y * y,
            x,
            k
          if (w < wu)
            (k = Math.log(c / r) / u),
              (x = function (Z) {
                return [t + Z * f, n + Z * y, r * Math.exp(u * Z * k)]
              })
          else {
            var F = Math.sqrt(w),
              $ = (c * c - r * r + p * w) / (2 * r * s * F),
              L = (c * c - r * r - p * w) / (2 * c * s * F),
              K = Math.log(Math.sqrt($ * $ + 1) - $),
              X = Math.log(Math.sqrt(L * L + 1) - L)
            ;(k = (X - K) / u),
              (x = function (Z) {
                var Q = Z * k,
                  wt = Vi(K),
                  Bt = (r / (s * F)) * (wt * xu(u * Q + K) - Hi(K))
                return [t + Bt * f, n + Bt * y, (r * wt) / Vi(u * Q + K)]
              })
          }
          return (x.duration = (k * 1e3 * u) / Math.SQRT2), x
        }
        return (
          (m.rho = function (_) {
            var C = Math.max(0.001, +_),
              t = C * C,
              n = t * t
            return e(C, t, n)
          }),
          m
        )
      })(Math.SQRT2, 2, 4),
      dr = 0,
      pr = 0,
      Lr = 0,
      Ui = 1e3,
      Jr,
      jn,
      Qn = 0,
      Ln = 0,
      Nr = 0,
      Zn = typeof performance == "object" && performance.now ? performance : Date,
      gr =
        typeof window == "object" && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (e) {
              setTimeout(e, 17)
            }
    function mr() {
      return Ln || (gr(nr), (Ln = Zn.now() + Nr))
    }
    function nr() {
      Ln = 0
    }
    function rr() {
      this._call = this._time = this._next = null
    }
    rr.prototype = ir.prototype = {
      constructor: rr,
      restart: function (e, u, s) {
        if (typeof e != "function") throw new TypeError("callback is not a function")
        ;(s = (s == null ? mr() : +s) + (u == null ? 0 : +u)),
          !this._next && jn !== this && (jn ? (jn._next = this) : (Jr = this), (jn = this)),
          (this._call = e),
          (this._time = s),
          Sr()
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), Sr())
      },
    }
    function ir(e, u, s) {
      var p = new rr()
      return p.restart(e, u, s), p
    }
    function Wi() {
      mr(), ++dr
      for (var e = Jr, u; e; ) (u = Ln - e._time) >= 0 && e._call.call(void 0, u), (e = e._next)
      --dr
    }
    function Qr() {
      ;(Ln = (Qn = Zn.now()) + Nr), (dr = pr = 0)
      try {
        Wi()
      } finally {
        ;(dr = 0), Zr(), (Ln = 0)
      }
    }
    function Eu() {
      var e = Zn.now(),
        u = e - Qn
      u > Ui && ((Nr -= u), (Qn = e))
    }
    function Zr() {
      for (var e, u = Jr, s, p = 1 / 0; u; )
        u._call
          ? (p > u._time && (p = u._time), (e = u), (u = u._next))
          : ((s = u._next), (u._next = null), (u = e ? (e._next = s) : (Jr = s)))
      ;(jn = e), Sr(p)
    }
    function Sr(e) {
      if (!dr) {
        pr && (pr = clearTimeout(pr))
        var u = e - Ln
        u > 24
          ? (e < 1 / 0 && (pr = setTimeout(Qr, e - Zn.now() - Nr)), Lr && (Lr = clearInterval(Lr)))
          : (Lr || ((Qn = Zn.now()), (Lr = setInterval(Eu, Ui))), (dr = 1), gr(Qr))
      }
    }
    function Ki(e, u, s) {
      var p = new rr()
      return (
        (u = u == null ? 0 : +u),
        p.restart(
          (m) => {
            p.stop(), e(m + u)
          },
          u,
          s,
        ),
        p
      )
    }
    var Xi = ae("start", "end", "cancel", "interrupt"),
      _u = [],
      Yi = 0,
      ti = 1,
      ei = 2,
      ni = 3,
      Gi = 4,
      ri = 5,
      Tr = 6
    function vr(e, u, s, p, m, _) {
      var C = e.__transition
      if (!C) e.__transition = {}
      else if (s in C) return
      ii(e, s, {
        name: u,
        index: p,
        group: m,
        on: Xi,
        tween: _u,
        time: _.time,
        delay: _.delay,
        duration: _.duration,
        ease: _.ease,
        timer: null,
        state: Yi,
      })
    }
    function yr(e, u) {
      var s = bn(e, u)
      if (s.state > Yi) throw new Error("too late; already scheduled")
      return s
    }
    function Nn(e, u) {
      var s = bn(e, u)
      if (s.state > ni) throw new Error("too late; already running")
      return s
    }
    function bn(e, u) {
      var s = e.__transition
      if (!s || !(s = s[u])) throw new Error("transition not found")
      return s
    }
    function ii(e, u, s) {
      var p = e.__transition,
        m
      ;(p[u] = s), (s.timer = ir(_, 0, s.time))
      function _(r) {
        ;(s.state = ti), s.timer.restart(C, s.delay, s.time), s.delay <= r && C(r - s.delay)
      }
      function C(r) {
        var o, l, c, f
        if (s.state !== ti) return n()
        for (o in p)
          if (((f = p[o]), f.name === s.name)) {
            if (f.state === ni) return Ki(C)
            f.state === Gi
              ? ((f.state = Tr),
                f.timer.stop(),
                f.on.call("interrupt", e, e.__data__, f.index, f.group),
                delete p[o])
              : +o < u &&
                ((f.state = Tr),
                f.timer.stop(),
                f.on.call("cancel", e, e.__data__, f.index, f.group),
                delete p[o])
          }
        if (
          (Ki(function () {
            s.state === ni && ((s.state = Gi), s.timer.restart(t, s.delay, s.time), t(r))
          }),
          (s.state = ei),
          s.on.call("start", e, e.__data__, s.index, s.group),
          s.state === ei)
        ) {
          for (s.state = ni, m = new Array((c = s.tween.length)), o = 0, l = -1; o < c; ++o)
            (f = s.tween[o].value.call(e, e.__data__, s.index, s.group)) && (m[++l] = f)
          m.length = l + 1
        }
      }
      function t(r) {
        for (
          var o =
              r < s.duration
                ? s.ease.call(null, r / s.duration)
                : (s.timer.restart(n), (s.state = ri), 1),
            l = -1,
            c = m.length;
          ++l < c;

        )
          m[l].call(e, o)
        s.state === ri && (s.on.call("end", e, e.__data__, s.index, s.group), n())
      }
      function n() {
        ;(s.state = Tr), s.timer.stop(), delete p[u]
        for (var r in p) return
        delete e.__transition
      }
    }
    function ur(e, u) {
      var s = e.__transition,
        p,
        m,
        _ = !0,
        C
      if (s) {
        u = u == null ? null : u + ""
        for (C in s) {
          if ((p = s[C]).name !== u) {
            _ = !1
            continue
          }
          ;(m = p.state > ei && p.state < ri),
            (p.state = Tr),
            p.timer.stop(),
            p.on.call(m ? "interrupt" : "cancel", e, e.__data__, p.index, p.group),
            delete s[C]
        }
        _ && delete e.__transition
      }
    }
    function mi(e) {
      return this.each(function () {
        ur(this, e)
      })
    }
    function qn(e, u) {
      var s, p
      return function () {
        var m = Nn(this, e),
          _ = m.tween
        if (_ !== s) {
          p = s = _
          for (var C = 0, t = p.length; C < t; ++C)
            if (p[C].name === u) {
              ;(p = p.slice()), p.splice(C, 1)
              break
            }
        }
        m.tween = p
      }
    }
    function Sn(e, u, s) {
      var p, m
      if (typeof s != "function") throw new Error()
      return function () {
        var _ = Nn(this, e),
          C = _.tween
        if (C !== p) {
          m = (p = C).slice()
          for (var t = { name: u, value: s }, n = 0, r = m.length; n < r; ++n)
            if (m[n].name === u) {
              m[n] = t
              break
            }
          n === r && m.push(t)
        }
        _.tween = m
      }
    }
    function Au(e, u) {
      var s = this._id
      if (((e += ""), arguments.length < 2)) {
        for (var p = bn(this.node(), s).tween, m = 0, _ = p.length, C; m < _; ++m)
          if ((C = p[m]).name === e) return C.value
        return null
      }
      return this.each((u == null ? qn : Sn)(s, e, u))
    }
    function wr(e, u, s) {
      var p = e._id
      return (
        e.each(function () {
          var m = Nn(this, p)
          ;(m.value || (m.value = {}))[u] = s.apply(this, arguments)
        }),
        function (m) {
          return bn(m, p).value[u]
        }
      )
    }
    function Ji(e, u) {
      var s
      return (typeof u == "number" ? In : u instanceof hr ? gi : (s = hr(u)) ? ((u = s), gi) : Jn)(
        e,
        u,
      )
    }
    function ku(e) {
      return function () {
        this.removeAttribute(e)
      }
    }
    function Cu(e) {
      return function () {
        this.removeAttributeNS(e.space, e.local)
      }
    }
    function Du(e, u, s) {
      var p,
        m = s + "",
        _
      return function () {
        var C = this.getAttribute(e)
        return C === m ? null : C === p ? _ : (_ = u((p = C), s))
      }
    }
    function vi(e, u, s) {
      var p,
        m = s + "",
        _
      return function () {
        var C = this.getAttributeNS(e.space, e.local)
        return C === m ? null : C === p ? _ : (_ = u((p = C), s))
      }
    }
    function Qi(e, u, s) {
      var p, m, _
      return function () {
        var C,
          t = s(this),
          n
        return t == null
          ? void this.removeAttribute(e)
          : ((C = this.getAttribute(e)),
            (n = t + ""),
            C === n ? null : C === p && n === m ? _ : ((m = n), (_ = u((p = C), t))))
      }
    }
    function Mu(e, u, s) {
      var p, m, _
      return function () {
        var C,
          t = s(this),
          n
        return t == null
          ? void this.removeAttributeNS(e.space, e.local)
          : ((C = this.getAttributeNS(e.space, e.local)),
            (n = t + ""),
            C === n ? null : C === p && n === m ? _ : ((m = n), (_ = u((p = C), t))))
      }
    }
    function Bu(e, u) {
      var s = Ke(e),
        p = s === "transform" ? Gr : Ji
      return this.attrTween(
        e,
        typeof u == "function"
          ? (s.local ? Mu : Qi)(s, p, wr(this, "attr." + e, u))
          : u == null
            ? (s.local ? Cu : ku)(s)
            : (s.local ? vi : Du)(s, p, u),
      )
    }
    function Lu(e, u) {
      return function (s) {
        this.setAttribute(e, u.call(this, s))
      }
    }
    function Nu(e, u) {
      return function (s) {
        this.setAttributeNS(e.space, e.local, u.call(this, s))
      }
    }
    function Su(e, u) {
      var s, p
      function m() {
        var _ = u.apply(this, arguments)
        return _ !== p && (s = (p = _) && Nu(e, _)), s
      }
      return (m._value = u), m
    }
    function Tu(e, u) {
      var s, p
      function m() {
        var _ = u.apply(this, arguments)
        return _ !== p && (s = (p = _) && Lu(e, _)), s
      }
      return (m._value = u), m
    }
    function Fu(e, u) {
      var s = "attr." + e
      if (arguments.length < 2) return (s = this.tween(s)) && s._value
      if (u == null) return this.tween(s, null)
      if (typeof u != "function") throw new Error()
      var p = Ke(e)
      return this.tween(s, (p.local ? Su : Tu)(p, u))
    }
    function $u(e, u) {
      return function () {
        yr(this, e).delay = +u.apply(this, arguments)
      }
    }
    function Ou(e, u) {
      return (
        (u = +u),
        function () {
          yr(this, e).delay = u
        }
      )
    }
    function ju(e) {
      var u = this._id
      return arguments.length
        ? this.each((typeof e == "function" ? $u : Ou)(u, e))
        : bn(this.node(), u).delay
    }
    function qu(e, u) {
      return function () {
        Nn(this, e).duration = +u.apply(this, arguments)
      }
    }
    function zu(e, u) {
      return (
        (u = +u),
        function () {
          Nn(this, e).duration = u
        }
      )
    }
    function Pu(e) {
      var u = this._id
      return arguments.length
        ? this.each((typeof e == "function" ? qu : zu)(u, e))
        : bn(this.node(), u).duration
    }
    function Iu(e, u) {
      if (typeof u != "function") throw new Error()
      return function () {
        Nn(this, e).ease = u
      }
    }
    function Ru(e) {
      var u = this._id
      return arguments.length ? this.each(Iu(u, e)) : bn(this.node(), u).ease
    }
    function Vu(e, u) {
      return function () {
        var s = u.apply(this, arguments)
        if (typeof s != "function") throw new Error()
        Nn(this, e).ease = s
      }
    }
    function Hu(e) {
      if (typeof e != "function") throw new Error()
      return this.each(Vu(this._id, e))
    }
    function Uu(e) {
      typeof e != "function" && (e = Pe(e))
      for (var u = this._groups, s = u.length, p = new Array(s), m = 0; m < s; ++m)
        for (var _ = u[m], C = _.length, t = (p[m] = []), n, r = 0; r < C; ++r)
          (n = _[r]) && e.call(n, n.__data__, r, _) && t.push(n)
      return new Rn(p, this._parents, this._name, this._id)
    }
    function Wu(e) {
      if (e._id !== this._id) throw new Error()
      for (
        var u = this._groups,
          s = e._groups,
          p = u.length,
          m = s.length,
          _ = Math.min(p, m),
          C = new Array(p),
          t = 0;
        t < _;
        ++t
      )
        for (var n = u[t], r = s[t], o = n.length, l = (C[t] = new Array(o)), c, f = 0; f < o; ++f)
          (c = n[f] || r[f]) && (l[f] = c)
      for (; t < p; ++t) C[t] = u[t]
      return new Rn(C, this._parents, this._name, this._id)
    }
    function Ku(e) {
      return (e + "")
        .trim()
        .split(/^|\s+/)
        .every(function (u) {
          var s = u.indexOf(".")
          return s >= 0 && (u = u.slice(0, s)), !u || u === "start"
        })
    }
    function Xu(e, u, s) {
      var p,
        m,
        _ = Ku(u) ? yr : Nn
      return function () {
        var C = _(this, e),
          t = C.on
        t !== p && (m = (p = t).copy()).on(u, s), (C.on = m)
      }
    }
    function Yu(e, u) {
      var s = this._id
      return arguments.length < 2 ? bn(this.node(), s).on.on(e) : this.each(Xu(s, e, u))
    }
    function Gu(e) {
      return function () {
        var u = this.parentNode
        for (var s in this.__transition) if (+s !== e) return
        u && u.removeChild(this)
      }
    }
    function Ju() {
      return this.on("end.remove", Gu(this._id))
    }
    function Qu(e) {
      var u = this._name,
        s = this._id
      typeof e != "function" && (e = le(e))
      for (var p = this._groups, m = p.length, _ = new Array(m), C = 0; C < m; ++C)
        for (var t = p[C], n = t.length, r = (_[C] = new Array(n)), o, l, c = 0; c < n; ++c)
          (o = t[c]) &&
            (l = e.call(o, o.__data__, c, t)) &&
            ("__data__" in o && (l.__data__ = o.__data__),
            (r[c] = l),
            vr(r[c], u, s, c, r, bn(o, s)))
      return new Rn(_, this._parents, u, s)
    }
    function Zu(e) {
      var u = this._name,
        s = this._id
      typeof e != "function" && (e = ye(e))
      for (var p = this._groups, m = p.length, _ = [], C = [], t = 0; t < m; ++t)
        for (var n = p[t], r = n.length, o, l = 0; l < r; ++l)
          if ((o = n[l])) {
            for (
              var c = e.call(o, o.__data__, l, n), f, y = bn(o, s), w = 0, x = c.length;
              w < x;
              ++w
            )
              (f = c[w]) && vr(f, u, s, w, c, y)
            _.push(c), C.push(o)
          }
      return new Rn(_, C, u, s)
    }
    var to = lt.prototype.constructor
    function eo() {
      return new to(this._groups, this._parents)
    }
    function no(e, u) {
      var s, p, m
      return function () {
        var _ = j(this, e),
          C = (this.style.removeProperty(e), j(this, e))
        return _ === C ? null : _ === s && C === p ? m : (m = u((s = _), (p = C)))
      }
    }
    function Zi(e) {
      return function () {
        this.style.removeProperty(e)
      }
    }
    function ro(e, u, s) {
      var p,
        m = s + "",
        _
      return function () {
        var C = j(this, e)
        return C === m ? null : C === p ? _ : (_ = u((p = C), s))
      }
    }
    function io(e, u, s) {
      var p, m, _
      return function () {
        var C = j(this, e),
          t = s(this),
          n = t + ""
        return (
          t == null && (n = t = (this.style.removeProperty(e), j(this, e))),
          C === n ? null : C === p && n === m ? _ : ((m = n), (_ = u((p = C), t)))
        )
      }
    }
    function uo(e, u) {
      var s,
        p,
        m,
        _ = "style." + u,
        C = "end." + _,
        t
      return function () {
        var n = Nn(this, e),
          r = n.on,
          o = n.value[_] == null ? t || (t = Zi(u)) : void 0
        ;(r !== s || m !== o) && (p = (s = r).copy()).on(C, (m = o)), (n.on = p)
      }
    }
    function oo(e, u, s) {
      var p = (e += "") == "transform" ? Ri : Ji
      return u == null
        ? this.styleTween(e, no(e, p)).on("end.style." + e, Zi(e))
        : typeof u == "function"
          ? this.styleTween(e, io(e, p, wr(this, "style." + e, u))).each(uo(this._id, e))
          : this.styleTween(e, ro(e, p, u), s).on("end.style." + e, null)
    }
    function tu(e, u, s) {
      return function (p) {
        this.style.setProperty(e, u.call(this, p), s)
      }
    }
    function ao(e, u, s) {
      var p, m
      function _() {
        var C = u.apply(this, arguments)
        return C !== m && (p = (m = C) && tu(e, C, s)), p
      }
      return (_._value = u), _
    }
    function so(e, u, s) {
      var p = "style." + (e += "")
      if (arguments.length < 2) return (p = this.tween(p)) && p._value
      if (u == null) return this.tween(p, null)
      if (typeof u != "function") throw new Error()
      return this.tween(p, ao(e, u, s ?? ""))
    }
    function lo(e) {
      return function () {
        this.textContent = e
      }
    }
    function co(e) {
      return function () {
        var u = e(this)
        this.textContent = u ?? ""
      }
    }
    function fo(e) {
      return this.tween(
        "text",
        typeof e == "function" ? co(wr(this, "text", e)) : lo(e == null ? "" : e + ""),
      )
    }
    function ho(e) {
      return function (u) {
        this.textContent = e.call(this, u)
      }
    }
    function po(e) {
      var u, s
      function p() {
        var m = e.apply(this, arguments)
        return m !== s && (u = (s = m) && ho(m)), u
      }
      return (p._value = e), p
    }
    function go(e) {
      var u = "text"
      if (arguments.length < 1) return (u = this.tween(u)) && u._value
      if (e == null) return this.tween(u, null)
      if (typeof e != "function") throw new Error()
      return this.tween(u, po(e))
    }
    function mo() {
      for (
        var e = this._name, u = this._id, s = eu(), p = this._groups, m = p.length, _ = 0;
        _ < m;
        ++_
      )
        for (var C = p[_], t = C.length, n, r = 0; r < t; ++r)
          if ((n = C[r])) {
            var o = bn(n, u)
            vr(n, e, s, r, C, {
              time: o.time + o.delay + o.duration,
              delay: 0,
              duration: o.duration,
              ease: o.ease,
            })
          }
      return new Rn(p, this._parents, e, s)
    }
    function vo() {
      var e,
        u,
        s = this,
        p = s._id,
        m = s.size()
      return new Promise(function (_, C) {
        var t = { value: C },
          n = {
            value: function () {
              --m === 0 && _()
            },
          }
        s.each(function () {
          var r = Nn(this, p),
            o = r.on
          o !== e &&
            ((u = (e = o).copy()), u._.cancel.push(t), u._.interrupt.push(t), u._.end.push(n)),
            (r.on = u)
        }),
          m === 0 && _()
      })
    }
    var yo = 0
    function Rn(e, u, s, p) {
      ;(this._groups = e), (this._parents = u), (this._name = s), (this._id = p)
    }
    function wo(e) {
      return lt().transition(e)
    }
    function eu() {
      return ++yo
    }
    var Vn = lt.prototype
    Rn.prototype = wo.prototype = {
      constructor: Rn,
      select: Qu,
      selectAll: Zu,
      selectChild: Vn.selectChild,
      selectChildren: Vn.selectChildren,
      filter: Uu,
      merge: Wu,
      selection: eo,
      transition: mo,
      call: Vn.call,
      nodes: Vn.nodes,
      node: Vn.node,
      size: Vn.size,
      empty: Vn.empty,
      each: Vn.each,
      on: Yu,
      attr: Bu,
      attrTween: Fu,
      style: oo,
      styleTween: so,
      text: fo,
      textTween: go,
      remove: Ju,
      tween: Au,
      delay: ju,
      duration: Pu,
      ease: Ru,
      easeVarying: Hu,
      end: vo,
      [Symbol.iterator]: Vn[Symbol.iterator],
    }
    function xo(e) {
      return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
    }
    var Hn = { time: null, delay: 0, duration: 250, ease: xo }
    function bo(e, u) {
      for (var s; !(s = e.__transition) || !(s = s[u]); )
        if (!(e = e.parentNode)) throw new Error(`transition ${u} not found`)
      return s
    }
    function nu(e) {
      var u, s
      e instanceof Rn
        ? ((u = e._id), (e = e._name))
        : ((u = eu()), ((s = Hn).time = mr()), (e = e == null ? null : e + ""))
      for (var p = this._groups, m = p.length, _ = 0; _ < m; ++_)
        for (var C = p[_], t = C.length, n, r = 0; r < t; ++r)
          (n = C[r]) && vr(n, e, u, r, C, s || bo(n, u))
      return new Rn(p, this._parents, e, u)
    }
    ;(lt.prototype.interrupt = mi), (lt.prototype.transition = nu)
    var { abs: tr, max: na, min: ra } = Math
    function ru(e) {
      return [+e[0], +e[1]]
    }
    function Eo(e) {
      return [ru(e[0]), ru(e[1])]
    }
    var ca = {
        name: "x",
        handles: ["w", "e"].map(ui),
        input: function (e, u) {
          return e == null
            ? null
            : [
                [+e[0], u[0][1]],
                [+e[1], u[1][1]],
              ]
        },
        output: function (e) {
          return e && [e[0][0], e[1][0]]
        },
      },
      fa = {
        name: "y",
        handles: ["n", "s"].map(ui),
        input: function (e, u) {
          return e == null
            ? null
            : [
                [u[0][0], +e[0]],
                [u[1][0], +e[1]],
              ]
        },
        output: function (e) {
          return e && [e[0][1], e[1][1]]
        },
      },
      ha = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(ui),
        input: function (e) {
          return e == null ? null : Eo(e)
        },
        output: function (e) {
          return e
        },
      }
    function ui(e) {
      return { type: e }
    }
    function _o(e, u) {
      var s,
        p = 1
      e == null && (e = 0), u == null && (u = 0)
      function m() {
        var _,
          C = s.length,
          t,
          n = 0,
          r = 0
        for (_ = 0; _ < C; ++_) (t = s[_]), (n += t.x), (r += t.y)
        for (n = (n / C - e) * p, r = (r / C - u) * p, _ = 0; _ < C; ++_)
          (t = s[_]), (t.x -= n), (t.y -= r)
      }
      return (
        (m.initialize = function (_) {
          s = _
        }),
        (m.x = function (_) {
          return arguments.length ? ((e = +_), m) : e
        }),
        (m.y = function (_) {
          return arguments.length ? ((u = +_), m) : u
        }),
        (m.strength = function (_) {
          return arguments.length ? ((p = +_), m) : p
        }),
        m
      )
    }
    function ia(e) {
      let u = +this._x.call(null, e),
        s = +this._y.call(null, e)
      return Ao(this.cover(u, s), u, s, e)
    }
    function Ao(e, u, s, p) {
      if (isNaN(u) || isNaN(s)) return e
      var m,
        _ = e._root,
        C = { data: p },
        t = e._x0,
        n = e._y0,
        r = e._x1,
        o = e._y1,
        l,
        c,
        f,
        y,
        w,
        x,
        k,
        F
      if (!_) return (e._root = C), e
      for (; _.length; )
        if (
          ((w = u >= (l = (t + r) / 2)) ? (t = l) : (r = l),
          (x = s >= (c = (n + o) / 2)) ? (n = c) : (o = c),
          (m = _),
          !(_ = _[(k = (x << 1) | w)]))
        )
          return (m[k] = C), e
      if (((f = +e._x.call(null, _.data)), (y = +e._y.call(null, _.data)), u === f && s === y))
        return (C.next = _), m ? (m[k] = C) : (e._root = C), e
      do
        (m = m ? (m[k] = new Array(4)) : (e._root = new Array(4))),
          (w = u >= (l = (t + r) / 2)) ? (t = l) : (r = l),
          (x = s >= (c = (n + o) / 2)) ? (n = c) : (o = c)
      while ((k = (x << 1) | w) === (F = ((y >= c) << 1) | (f >= l)))
      return (m[F] = _), (m[k] = C), e
    }
    function ua(e) {
      var u,
        s,
        p = e.length,
        m,
        _,
        C = new Array(p),
        t = new Array(p),
        n = 1 / 0,
        r = 1 / 0,
        o = -1 / 0,
        l = -1 / 0
      for (s = 0; s < p; ++s)
        isNaN((m = +this._x.call(null, (u = e[s])))) ||
          isNaN((_ = +this._y.call(null, u))) ||
          ((C[s] = m),
          (t[s] = _),
          m < n && (n = m),
          m > o && (o = m),
          _ < r && (r = _),
          _ > l && (l = _))
      if (n > o || r > l) return this
      for (this.cover(n, r).cover(o, l), s = 0; s < p; ++s) Ao(this, C[s], t[s], e[s])
      return this
    }
    function yi(e, u) {
      if (isNaN((e = +e)) || isNaN((u = +u))) return this
      var s = this._x0,
        p = this._y0,
        m = this._x1,
        _ = this._y1
      if (isNaN(s)) (m = (s = Math.floor(e)) + 1), (_ = (p = Math.floor(u)) + 1)
      else {
        for (var C = m - s || 1, t = this._root, n, r; s > e || e >= m || p > u || u >= _; )
          switch (
            ((r = ((u < p) << 1) | (e < s)), (n = new Array(4)), (n[r] = t), (t = n), (C *= 2), r)
          ) {
            case 0:
              ;(m = s + C), (_ = p + C)
              break
            case 1:
              ;(s = m - C), (_ = p + C)
              break
            case 2:
              ;(m = s + C), (p = _ - C)
              break
            case 3:
              ;(s = m - C), (p = _ - C)
              break
          }
        this._root && this._root.length && (this._root = t)
      }
      return (this._x0 = s), (this._y0 = p), (this._x1 = m), (this._y1 = _), this
    }
    function ko() {
      var e = []
      return (
        this.visit(function (u) {
          if (!u.length)
            do e.push(u.data)
            while ((u = u.next))
        }),
        e
      )
    }
    function Co(e) {
      return arguments.length
        ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
        : isNaN(this._x0)
          ? void 0
          : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ]
    }
    function an(e, u, s, p, m) {
      ;(this.node = e), (this.x0 = u), (this.y0 = s), (this.x1 = p), (this.y1 = m)
    }
    function Do(e, u, s) {
      var p,
        m = this._x0,
        _ = this._y0,
        C,
        t,
        n,
        r,
        o = this._x1,
        l = this._y1,
        c = [],
        f = this._root,
        y,
        w
      for (
        f && c.push(new an(f, m, _, o, l)),
          s == null ? (s = 1 / 0) : ((m = e - s), (_ = u - s), (o = e + s), (l = u + s), (s *= s));
        (y = c.pop());

      )
        if (
          !(!(f = y.node) || (C = y.x0) > o || (t = y.y0) > l || (n = y.x1) < m || (r = y.y1) < _)
        )
          if (f.length) {
            var x = (C + n) / 2,
              k = (t + r) / 2
            c.push(
              new an(f[3], x, k, n, r),
              new an(f[2], C, k, x, r),
              new an(f[1], x, t, n, k),
              new an(f[0], C, t, x, k),
            ),
              (w = ((u >= k) << 1) | (e >= x)) &&
                ((y = c[c.length - 1]),
                (c[c.length - 1] = c[c.length - 1 - w]),
                (c[c.length - 1 - w] = y))
          } else {
            var F = e - +this._x.call(null, f.data),
              $ = u - +this._y.call(null, f.data),
              L = F * F + $ * $
            if (L < s) {
              var K = Math.sqrt((s = L))
              ;(m = e - K), (_ = u - K), (o = e + K), (l = u + K), (p = f.data)
            }
          }
      return p
    }
    function Mo(e) {
      if (isNaN((o = +this._x.call(null, e))) || isNaN((l = +this._y.call(null, e)))) return this
      var u,
        s = this._root,
        p,
        m,
        _,
        C = this._x0,
        t = this._y0,
        n = this._x1,
        r = this._y1,
        o,
        l,
        c,
        f,
        y,
        w,
        x,
        k
      if (!s) return this
      if (s.length)
        for (;;) {
          if (
            ((y = o >= (c = (C + n) / 2)) ? (C = c) : (n = c),
            (w = l >= (f = (t + r) / 2)) ? (t = f) : (r = f),
            (u = s),
            !(s = s[(x = (w << 1) | y)]))
          )
            return this
          if (!s.length) break
          ;(u[(x + 1) & 3] || u[(x + 2) & 3] || u[(x + 3) & 3]) && ((p = u), (k = x))
        }
      for (; s.data !== e; ) if (((m = s), !(s = s.next))) return this
      return (
        (_ = s.next) && delete s.next,
        m
          ? (_ ? (m.next = _) : delete m.next, this)
          : u
            ? (_ ? (u[x] = _) : delete u[x],
              (s = u[0] || u[1] || u[2] || u[3]) &&
                s === (u[3] || u[2] || u[1] || u[0]) &&
                !s.length &&
                (p ? (p[k] = s) : (this._root = s)),
              this)
            : ((this._root = _), this)
      )
    }
    function Bo(e) {
      for (var u = 0, s = e.length; u < s; ++u) this.remove(e[u])
      return this
    }
    function Lo() {
      return this._root
    }
    function fn() {
      var e = 0
      return (
        this.visit(function (u) {
          if (!u.length)
            do ++e
            while ((u = u.next))
        }),
        e
      )
    }
    function No(e) {
      var u = [],
        s,
        p = this._root,
        m,
        _,
        C,
        t,
        n
      for (p && u.push(new an(p, this._x0, this._y0, this._x1, this._y1)); (s = u.pop()); )
        if (!e((p = s.node), (_ = s.x0), (C = s.y0), (t = s.x1), (n = s.y1)) && p.length) {
          var r = (_ + t) / 2,
            o = (C + n) / 2
          ;(m = p[3]) && u.push(new an(m, r, o, t, n)),
            (m = p[2]) && u.push(new an(m, _, o, r, n)),
            (m = p[1]) && u.push(new an(m, r, C, t, o)),
            (m = p[0]) && u.push(new an(m, _, C, r, o))
        }
      return this
    }
    function So(e) {
      var u = [],
        s = [],
        p
      for (
        this._root && u.push(new an(this._root, this._x0, this._y0, this._x1, this._y1));
        (p = u.pop());

      ) {
        var m = p.node
        if (m.length) {
          var _,
            C = p.x0,
            t = p.y0,
            n = p.x1,
            r = p.y1,
            o = (C + n) / 2,
            l = (t + r) / 2
          ;(_ = m[0]) && u.push(new an(_, C, t, o, l)),
            (_ = m[1]) && u.push(new an(_, o, t, n, l)),
            (_ = m[2]) && u.push(new an(_, C, l, o, r)),
            (_ = m[3]) && u.push(new an(_, o, l, n, r))
        }
        s.push(p)
      }
      for (; (p = s.pop()); ) e(p.node, p.x0, p.y0, p.x1, p.y1)
      return this
    }
    function To(e) {
      return e[0]
    }
    function Fo(e) {
      return arguments.length ? ((this._x = e), this) : this._x
    }
    function $o(e) {
      return e[1]
    }
    function Oo(e) {
      return arguments.length ? ((this._y = e), this) : this._y
    }
    function iu(e, u, s) {
      var p = new wi(u ?? To, s ?? $o, NaN, NaN, NaN, NaN)
      return e == null ? p : p.addAll(e)
    }
    function wi(e, u, s, p, m, _) {
      ;(this._x = e),
        (this._y = u),
        (this._x0 = s),
        (this._y0 = p),
        (this._x1 = m),
        (this._y1 = _),
        (this._root = void 0)
    }
    function uu(e) {
      for (var u = { data: e.data }, s = u; (e = e.next); ) s = s.next = { data: e.data }
      return u
    }
    var hn = (iu.prototype = wi.prototype)
    ;(hn.copy = function () {
      var e = new wi(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        u = this._root,
        s,
        p
      if (!u) return e
      if (!u.length) return (e._root = uu(u)), e
      for (s = [{ source: u, target: (e._root = new Array(4)) }]; (u = s.pop()); )
        for (var m = 0; m < 4; ++m)
          (p = u.source[m]) &&
            (p.length
              ? s.push({ source: p, target: (u.target[m] = new Array(4)) })
              : (u.target[m] = uu(p)))
      return e
    }),
      (hn.add = ia),
      (hn.addAll = ua),
      (hn.cover = yi),
      (hn.data = ko),
      (hn.extent = Co),
      (hn.find = Do),
      (hn.remove = Mo),
      (hn.removeAll = Bo),
      (hn.root = Lo),
      (hn.size = fn),
      (hn.visit = No),
      (hn.visitAfter = So),
      (hn.x = Fo),
      (hn.y = Oo)
    function Fr(e) {
      return function () {
        return e
      }
    }
    function or(e) {
      return (e() - 0.5) * 1e-6
    }
    function xi(e) {
      return e.index
    }
    function bi(e, u) {
      var s = e.get(u)
      if (!s) throw new Error("node not found: " + u)
      return s
    }
    function dn(e) {
      var u = xi,
        s = l,
        p,
        m = Fr(30),
        _,
        C,
        t,
        n,
        r,
        o = 1
      e == null && (e = [])
      function l(x) {
        return 1 / Math.min(t[x.source.index], t[x.target.index])
      }
      function c(x) {
        for (var k = 0, F = e.length; k < o; ++k)
          for (var $ = 0, L, K, X, Z, Q, wt, Bt; $ < F; ++$)
            (L = e[$]),
              (K = L.source),
              (X = L.target),
              (Z = X.x + X.vx - K.x - K.vx || or(r)),
              (Q = X.y + X.vy - K.y - K.vy || or(r)),
              (wt = Math.sqrt(Z * Z + Q * Q)),
              (wt = ((wt - _[$]) / wt) * x * p[$]),
              (Z *= wt),
              (Q *= wt),
              (X.vx -= Z * (Bt = n[$])),
              (X.vy -= Q * Bt),
              (K.vx += Z * (Bt = 1 - Bt)),
              (K.vy += Q * Bt)
      }
      function f() {
        if (C) {
          var x,
            k = C.length,
            F = e.length,
            $ = new Map(C.map((K, X) => [u(K, X, C), K])),
            L
          for (x = 0, t = new Array(k); x < F; ++x)
            (L = e[x]),
              (L.index = x),
              typeof L.source != "object" && (L.source = bi($, L.source)),
              typeof L.target != "object" && (L.target = bi($, L.target)),
              (t[L.source.index] = (t[L.source.index] || 0) + 1),
              (t[L.target.index] = (t[L.target.index] || 0) + 1)
          for (x = 0, n = new Array(F); x < F; ++x)
            (L = e[x]), (n[x] = t[L.source.index] / (t[L.source.index] + t[L.target.index]))
          ;(p = new Array(F)), y(), (_ = new Array(F)), w()
        }
      }
      function y() {
        if (C) for (var x = 0, k = e.length; x < k; ++x) p[x] = +s(e[x], x, e)
      }
      function w() {
        if (C) for (var x = 0, k = e.length; x < k; ++x) _[x] = +m(e[x], x, e)
      }
      return (
        (c.initialize = function (x, k) {
          ;(C = x), (r = k), f()
        }),
        (c.links = function (x) {
          return arguments.length ? ((e = x), f(), c) : e
        }),
        (c.id = function (x) {
          return arguments.length ? ((u = x), c) : u
        }),
        (c.iterations = function (x) {
          return arguments.length ? ((o = +x), c) : o
        }),
        (c.strength = function (x) {
          return arguments.length ? ((s = typeof x == "function" ? x : Fr(+x)), y(), c) : s
        }),
        (c.distance = function (x) {
          return arguments.length ? ((m = typeof x == "function" ? x : Fr(+x)), w(), c) : m
        }),
        c
      )
    }
    function $r() {
      let e = 1
      return () => (e = (1664525 * e + 1013904223) % 4294967296) / 4294967296
    }
    function xr(e) {
      return e.x
    }
    function jo(e) {
      return e.y
    }
    var ou = 10,
      qo = Math.PI * (3 - Math.sqrt(5))
    function zo(e) {
      var u,
        s = 1,
        p = 0.001,
        m = 1 - Math.pow(p, 1 / 300),
        _ = 0,
        C = 0.6,
        t = new Map(),
        n = ir(l),
        r = ae("tick", "end"),
        o = $r()
      e == null && (e = [])
      function l() {
        c(), r.call("tick", u), s < p && (n.stop(), r.call("end", u))
      }
      function c(w) {
        var x,
          k = e.length,
          F
        w === void 0 && (w = 1)
        for (var $ = 0; $ < w; ++$)
          for (
            s += (_ - s) * m,
              t.forEach(function (L) {
                L(s)
              }),
              x = 0;
            x < k;
            ++x
          )
            (F = e[x]),
              F.fx == null ? (F.x += F.vx *= C) : ((F.x = F.fx), (F.vx = 0)),
              F.fy == null ? (F.y += F.vy *= C) : ((F.y = F.fy), (F.vy = 0))
        return u
      }
      function f() {
        for (var w = 0, x = e.length, k; w < x; ++w) {
          if (
            ((k = e[w]),
            (k.index = w),
            k.fx != null && (k.x = k.fx),
            k.fy != null && (k.y = k.fy),
            isNaN(k.x) || isNaN(k.y))
          ) {
            var F = ou * Math.sqrt(0.5 + w),
              $ = w * qo
            ;(k.x = F * Math.cos($)), (k.y = F * Math.sin($))
          }
          ;(isNaN(k.vx) || isNaN(k.vy)) && (k.vx = k.vy = 0)
        }
      }
      function y(w) {
        return w.initialize && w.initialize(e, o), w
      }
      return (
        f(),
        (u = {
          tick: c,
          restart: function () {
            return n.restart(l), u
          },
          stop: function () {
            return n.stop(), u
          },
          nodes: function (w) {
            return arguments.length ? ((e = w), f(), t.forEach(y), u) : e
          },
          alpha: function (w) {
            return arguments.length ? ((s = +w), u) : s
          },
          alphaMin: function (w) {
            return arguments.length ? ((p = +w), u) : p
          },
          alphaDecay: function (w) {
            return arguments.length ? ((m = +w), u) : +m
          },
          alphaTarget: function (w) {
            return arguments.length ? ((_ = +w), u) : _
          },
          velocityDecay: function (w) {
            return arguments.length ? ((C = 1 - w), u) : 1 - C
          },
          randomSource: function (w) {
            return arguments.length ? ((o = w), t.forEach(y), u) : o
          },
          force: function (w, x) {
            return arguments.length > 1 ? (x == null ? t.delete(w) : t.set(w, y(x)), u) : t.get(w)
          },
          find: function (w, x, k) {
            var F = 0,
              $ = e.length,
              L,
              K,
              X,
              Z,
              Q
            for (k == null ? (k = 1 / 0) : (k *= k), F = 0; F < $; ++F)
              (Z = e[F]),
                (L = w - Z.x),
                (K = x - Z.y),
                (X = L * L + K * K),
                X < k && ((Q = Z), (k = X))
            return Q
          },
          on: function (w, x) {
            return arguments.length > 1 ? (r.on(w, x), u) : r.on(w)
          },
        })
      )
    }
    function Po() {
      var e,
        u,
        s,
        p,
        m = Fr(-30),
        _,
        C = 1,
        t = 1 / 0,
        n = 0.81
      function r(f) {
        var y,
          w = e.length,
          x = iu(e, xr, jo).visitAfter(l)
        for (p = f, y = 0; y < w; ++y) (u = e[y]), x.visit(c)
      }
      function o() {
        if (e) {
          var f,
            y = e.length,
            w
          for (_ = new Array(y), f = 0; f < y; ++f) (w = e[f]), (_[w.index] = +m(w, f, e))
        }
      }
      function l(f) {
        var y = 0,
          w,
          x,
          k = 0,
          F,
          $,
          L
        if (f.length) {
          for (F = $ = L = 0; L < 4; ++L)
            (w = f[L]) &&
              (x = Math.abs(w.value)) &&
              ((y += w.value), (k += x), (F += x * w.x), ($ += x * w.y))
          ;(f.x = F / k), (f.y = $ / k)
        } else {
          ;(w = f), (w.x = w.data.x), (w.y = w.data.y)
          do y += _[w.data.index]
          while ((w = w.next))
        }
        f.value = y
      }
      function c(f, y, w, x) {
        if (!f.value) return !0
        var k = f.x - u.x,
          F = f.y - u.y,
          $ = x - y,
          L = k * k + F * F
        if (($ * $) / n < L)
          return (
            L < t &&
              (k === 0 && ((k = or(s)), (L += k * k)),
              F === 0 && ((F = or(s)), (L += F * F)),
              L < C && (L = Math.sqrt(C * L)),
              (u.vx += (k * f.value * p) / L),
              (u.vy += (F * f.value * p) / L)),
            !0
          )
        if (!(f.length || L >= t)) {
          ;(f.data !== u || f.next) &&
            (k === 0 && ((k = or(s)), (L += k * k)),
            F === 0 && ((F = or(s)), (L += F * F)),
            L < C && (L = Math.sqrt(C * L)))
          do f.data !== u && (($ = (_[f.data.index] * p) / L), (u.vx += k * $), (u.vy += F * $))
          while ((f = f.next))
        }
      }
      return (
        (r.initialize = function (f, y) {
          ;(e = f), (s = y), o()
        }),
        (r.strength = function (f) {
          return arguments.length ? ((m = typeof f == "function" ? f : Fr(+f)), o(), r) : m
        }),
        (r.distanceMin = function (f) {
          return arguments.length ? ((C = f * f), r) : Math.sqrt(C)
        }),
        (r.distanceMax = function (f) {
          return arguments.length ? ((t = f * f), r) : Math.sqrt(t)
        }),
        (r.theta = function (f) {
          return arguments.length ? ((n = f * f), r) : Math.sqrt(n)
        }),
        r
      )
    }
    var oi = (e) => () => e
    function Io(e, { sourceEvent: u, target: s, transform: p, dispatch: m }) {
      Object.defineProperties(this, {
        type: { value: e, enumerable: !0, configurable: !0 },
        sourceEvent: { value: u, enumerable: !0, configurable: !0 },
        target: { value: s, enumerable: !0, configurable: !0 },
        transform: { value: p, enumerable: !0, configurable: !0 },
        _: { value: m },
      })
    }
    function Un(e, u, s) {
      ;(this.k = e), (this.x = u), (this.y = s)
    }
    Un.prototype = {
      constructor: Un,
      scale: function (e) {
        return e === 1 ? this : new Un(this.k * e, this.x, this.y)
      },
      translate: function (e, u) {
        return (e === 0) & (u === 0)
          ? this
          : new Un(this.k, this.x + this.k * e, this.y + this.k * u)
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
    var Ei = new Un(1, 0, 0)
    Ro.prototype = Un.prototype
    function Ro(e) {
      for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ei
      return e.__zoom
    }
    function br(e) {
      e.stopImmediatePropagation()
    }
    function Or(e) {
      e.preventDefault(), e.stopImmediatePropagation()
    }
    function Wn(e) {
      return (!e.ctrlKey || e.type === "wheel") && !e.button
    }
    function _i() {
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
    function au() {
      return this.__zoom || Ei
    }
    function Ai(e) {
      return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1)
    }
    function jr() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function Vo(e, u, s) {
      var p = e.invertX(u[0][0]) - s[0][0],
        m = e.invertX(u[1][0]) - s[1][0],
        _ = e.invertY(u[0][1]) - s[0][1],
        C = e.invertY(u[1][1]) - s[1][1]
      return e.translate(
        m > p ? (p + m) / 2 : Math.min(0, p) || Math.max(0, m),
        C > _ ? (_ + C) / 2 : Math.min(0, _) || Math.max(0, C),
      )
    }
    function Ho() {
      var e = Wn,
        u = _i,
        s = Vo,
        p = Ai,
        m = jr,
        _ = [0, 1 / 0],
        C = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0],
        ],
        t = 250,
        n = bu,
        r = ae("start", "zoom", "end"),
        o,
        l,
        c,
        f = 500,
        y = 150,
        w = 0,
        x = 10
      function k(W) {
        W.property("__zoom", au)
          .on("wheel.zoom", Q, { passive: !1 })
          .on("mousedown.zoom", wt)
          .on("dblclick.zoom", Bt)
          .filter(m)
          .on("touchstart.zoom", it)
          .on("touchmove.zoom", $t)
          .on("touchend.zoom touchcancel.zoom", Wt)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      ;(k.transform = function (W, _t, dt, Dt) {
        var Pt = W.selection ? W.selection() : W
        Pt.property("__zoom", au),
          W !== Pt
            ? K(W, _t, dt, Dt)
            : Pt.interrupt().each(function () {
                X(this, arguments)
                  .event(Dt)
                  .start()
                  .zoom(null, typeof _t == "function" ? _t.apply(this, arguments) : _t)
                  .end()
              })
      }),
        (k.scaleBy = function (W, _t, dt, Dt) {
          k.scaleTo(
            W,
            function () {
              var Pt = this.__zoom.k,
                Qt = typeof _t == "function" ? _t.apply(this, arguments) : _t
              return Pt * Qt
            },
            dt,
            Dt,
          )
        }),
        (k.scaleTo = function (W, _t, dt, Dt) {
          k.transform(
            W,
            function () {
              var Pt = u.apply(this, arguments),
                Qt = this.__zoom,
                mt = dt == null ? L(Pt) : typeof dt == "function" ? dt.apply(this, arguments) : dt,
                H = Qt.invert(mt),
                bt = typeof _t == "function" ? _t.apply(this, arguments) : _t
              return s($(F(Qt, bt), mt, H), Pt, C)
            },
            dt,
            Dt,
          )
        }),
        (k.translateBy = function (W, _t, dt, Dt) {
          k.transform(
            W,
            function () {
              return s(
                this.__zoom.translate(
                  typeof _t == "function" ? _t.apply(this, arguments) : _t,
                  typeof dt == "function" ? dt.apply(this, arguments) : dt,
                ),
                u.apply(this, arguments),
                C,
              )
            },
            null,
            Dt,
          )
        }),
        (k.translateTo = function (W, _t, dt, Dt, Pt) {
          k.transform(
            W,
            function () {
              var Qt = u.apply(this, arguments),
                mt = this.__zoom,
                H = Dt == null ? L(Qt) : typeof Dt == "function" ? Dt.apply(this, arguments) : Dt
              return s(
                Ei.translate(H[0], H[1])
                  .scale(mt.k)
                  .translate(
                    typeof _t == "function" ? -_t.apply(this, arguments) : -_t,
                    typeof dt == "function" ? -dt.apply(this, arguments) : -dt,
                  ),
                Qt,
                C,
              )
            },
            Dt,
            Pt,
          )
        })
      function F(W, _t) {
        return (_t = Math.max(_[0], Math.min(_[1], _t))), _t === W.k ? W : new Un(_t, W.x, W.y)
      }
      function $(W, _t, dt) {
        var Dt = _t[0] - dt[0] * W.k,
          Pt = _t[1] - dt[1] * W.k
        return Dt === W.x && Pt === W.y ? W : new Un(W.k, Dt, Pt)
      }
      function L(W) {
        return [(+W[0][0] + +W[1][0]) / 2, (+W[0][1] + +W[1][1]) / 2]
      }
      function K(W, _t, dt, Dt) {
        W.on("start.zoom", function () {
          X(this, arguments).event(Dt).start()
        })
          .on("interrupt.zoom end.zoom", function () {
            X(this, arguments).event(Dt).end()
          })
          .tween("zoom", function () {
            var Pt = this,
              Qt = arguments,
              mt = X(Pt, Qt).event(Dt),
              H = u.apply(Pt, Qt),
              bt = dt == null ? L(H) : typeof dt == "function" ? dt.apply(Pt, Qt) : dt,
              st = Math.max(H[1][0] - H[0][0], H[1][1] - H[0][1]),
              Et = Pt.__zoom,
              Ot = typeof _t == "function" ? _t.apply(Pt, Qt) : _t,
              Ft = n(Et.invert(bt).concat(st / Et.k), Ot.invert(bt).concat(st / Ot.k))
            return function (pt) {
              if (pt === 1) pt = Ot
              else {
                var Ut = Ft(pt),
                  oe = st / Ut[2]
                pt = new Un(oe, bt[0] - Ut[0] * oe, bt[1] - Ut[1] * oe)
              }
              mt.zoom(null, pt)
            }
          })
      }
      function X(W, _t, dt) {
        return (!dt && W.__zooming) || new Z(W, _t)
      }
      function Z(W, _t) {
        ;(this.that = W),
          (this.args = _t),
          (this.active = 0),
          (this.sourceEvent = null),
          (this.extent = u.apply(W, _t)),
          (this.taps = 0)
      }
      Z.prototype = {
        event: function (W) {
          return W && (this.sourceEvent = W), this
        },
        start: function () {
          return ++this.active === 1 && ((this.that.__zooming = this), this.emit("start")), this
        },
        zoom: function (W, _t) {
          return (
            this.mouse && W !== "mouse" && (this.mouse[1] = _t.invert(this.mouse[0])),
            this.touch0 && W !== "touch" && (this.touch0[1] = _t.invert(this.touch0[0])),
            this.touch1 && W !== "touch" && (this.touch1[1] = _t.invert(this.touch1[0])),
            (this.that.__zoom = _t),
            this.emit("zoom"),
            this
          )
        },
        end: function () {
          return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this
        },
        emit: function (W) {
          var _t = ct(this.that).datum()
          r.call(
            W,
            this.that,
            new Io(W, {
              sourceEvent: this.sourceEvent,
              target: k,
              type: W,
              transform: this.that.__zoom,
              dispatch: r,
            }),
            _t,
          )
        },
      }
      function Q(W, ..._t) {
        if (!e.apply(this, arguments)) return
        var dt = X(this, _t).event(W),
          Dt = this.__zoom,
          Pt = Math.max(_[0], Math.min(_[1], Dt.k * Math.pow(2, p.apply(this, arguments)))),
          Qt = vt(W)
        if (dt.wheel)
          (dt.mouse[0][0] !== Qt[0] || dt.mouse[0][1] !== Qt[1]) &&
            (dt.mouse[1] = Dt.invert((dt.mouse[0] = Qt))),
            clearTimeout(dt.wheel)
        else {
          if (Dt.k === Pt) return
          ;(dt.mouse = [Qt, Dt.invert(Qt)]), ur(this), dt.start()
        }
        Or(W),
          (dt.wheel = setTimeout(mt, y)),
          dt.zoom("mouse", s($(F(Dt, Pt), dt.mouse[0], dt.mouse[1]), dt.extent, C))
        function mt() {
          ;(dt.wheel = null), dt.end()
        }
      }
      function wt(W, ..._t) {
        if (c || !e.apply(this, arguments)) return
        var dt = W.currentTarget,
          Dt = X(this, _t, !0).event(W),
          Pt = ct(W.view).on("mousemove.zoom", bt, !0).on("mouseup.zoom", st, !0),
          Qt = vt(W, dt),
          mt = W.clientX,
          H = W.clientY
        en(W.view), br(W), (Dt.mouse = [Qt, this.__zoom.invert(Qt)]), ur(this), Dt.start()
        function bt(Et) {
          if ((Or(Et), !Dt.moved)) {
            var Ot = Et.clientX - mt,
              Ft = Et.clientY - H
            Dt.moved = Ot * Ot + Ft * Ft > w
          }
          Dt.event(Et).zoom(
            "mouse",
            s($(Dt.that.__zoom, (Dt.mouse[0] = vt(Et, dt)), Dt.mouse[1]), Dt.extent, C),
          )
        }
        function st(Et) {
          Pt.on("mousemove.zoom mouseup.zoom", null),
            sr(Et.view, Dt.moved),
            Or(Et),
            Dt.event(Et).end()
        }
      }
      function Bt(W, ..._t) {
        if (e.apply(this, arguments)) {
          var dt = this.__zoom,
            Dt = vt(W.changedTouches ? W.changedTouches[0] : W, this),
            Pt = dt.invert(Dt),
            Qt = dt.k * (W.shiftKey ? 0.5 : 2),
            mt = s($(F(dt, Qt), Dt, Pt), u.apply(this, _t), C)
          Or(W),
            t > 0
              ? ct(this).transition().duration(t).call(K, mt, Dt, W)
              : ct(this).call(k.transform, mt, Dt, W)
        }
      }
      function it(W, ..._t) {
        if (e.apply(this, arguments)) {
          var dt = W.touches,
            Dt = dt.length,
            Pt = X(this, _t, W.changedTouches.length === Dt).event(W),
            Qt,
            mt,
            H,
            bt
          for (br(W), mt = 0; mt < Dt; ++mt)
            (H = dt[mt]),
              (bt = vt(H, this)),
              (bt = [bt, this.__zoom.invert(bt), H.identifier]),
              Pt.touch0
                ? !Pt.touch1 && Pt.touch0[2] !== bt[2] && ((Pt.touch1 = bt), (Pt.taps = 0))
                : ((Pt.touch0 = bt), (Qt = !0), (Pt.taps = 1 + !!o))
          o && (o = clearTimeout(o)),
            Qt &&
              (Pt.taps < 2 &&
                ((l = bt[0]),
                (o = setTimeout(function () {
                  o = null
                }, f))),
              ur(this),
              Pt.start())
        }
      }
      function $t(W, ..._t) {
        if (this.__zooming) {
          var dt = X(this, _t).event(W),
            Dt = W.changedTouches,
            Pt = Dt.length,
            Qt,
            mt,
            H,
            bt
          for (Or(W), Qt = 0; Qt < Pt; ++Qt)
            (mt = Dt[Qt]),
              (H = vt(mt, this)),
              dt.touch0 && dt.touch0[2] === mt.identifier
                ? (dt.touch0[0] = H)
                : dt.touch1 && dt.touch1[2] === mt.identifier && (dt.touch1[0] = H)
          if (((mt = dt.that.__zoom), dt.touch1)) {
            var st = dt.touch0[0],
              Et = dt.touch0[1],
              Ot = dt.touch1[0],
              Ft = dt.touch1[1],
              pt = (pt = Ot[0] - st[0]) * pt + (pt = Ot[1] - st[1]) * pt,
              Ut = (Ut = Ft[0] - Et[0]) * Ut + (Ut = Ft[1] - Et[1]) * Ut
            ;(mt = F(mt, Math.sqrt(pt / Ut))),
              (H = [(st[0] + Ot[0]) / 2, (st[1] + Ot[1]) / 2]),
              (bt = [(Et[0] + Ft[0]) / 2, (Et[1] + Ft[1]) / 2])
          } else if (dt.touch0) (H = dt.touch0[0]), (bt = dt.touch0[1])
          else return
          dt.zoom("touch", s($(mt, H, bt), dt.extent, C))
        }
      }
      function Wt(W, ..._t) {
        if (this.__zooming) {
          var dt = X(this, _t).event(W),
            Dt = W.changedTouches,
            Pt = Dt.length,
            Qt,
            mt
          for (
            br(W),
              c && clearTimeout(c),
              c = setTimeout(function () {
                c = null
              }, f),
              Qt = 0;
            Qt < Pt;
            ++Qt
          )
            (mt = Dt[Qt]),
              dt.touch0 && dt.touch0[2] === mt.identifier
                ? delete dt.touch0
                : dt.touch1 && dt.touch1[2] === mt.identifier && delete dt.touch1
          if ((dt.touch1 && !dt.touch0 && ((dt.touch0 = dt.touch1), delete dt.touch1), dt.touch0))
            dt.touch0[1] = this.__zoom.invert(dt.touch0[0])
          else if (
            (dt.end(),
            dt.taps === 2 && ((mt = vt(mt, this)), Math.hypot(l[0] - mt[0], l[1] - mt[1]) < x))
          ) {
            var H = ct(this).on("dblclick.zoom")
            H && H.apply(this, arguments)
          }
        }
      }
      return (
        (k.wheelDelta = function (W) {
          return arguments.length ? ((p = typeof W == "function" ? W : oi(+W)), k) : p
        }),
        (k.filter = function (W) {
          return arguments.length ? ((e = typeof W == "function" ? W : oi(!!W)), k) : e
        }),
        (k.touchable = function (W) {
          return arguments.length ? ((m = typeof W == "function" ? W : oi(!!W)), k) : m
        }),
        (k.extent = function (W) {
          return arguments.length
            ? ((u =
                typeof W == "function"
                  ? W
                  : oi([
                      [+W[0][0], +W[0][1]],
                      [+W[1][0], +W[1][1]],
                    ])),
              k)
            : u
        }),
        (k.scaleExtent = function (W) {
          return arguments.length ? ((_[0] = +W[0]), (_[1] = +W[1]), k) : [_[0], _[1]]
        }),
        (k.translateExtent = function (W) {
          return arguments.length
            ? ((C[0][0] = +W[0][0]),
              (C[1][0] = +W[1][0]),
              (C[0][1] = +W[0][1]),
              (C[1][1] = +W[1][1]),
              k)
            : [
                [C[0][0], C[0][1]],
                [C[1][0], C[1][1]],
              ]
        }),
        (k.constrain = function (W) {
          return arguments.length ? ((s = W), k) : s
        }),
        (k.duration = function (W) {
          return arguments.length ? ((t = +W), k) : t
        }),
        (k.interpolate = function (W) {
          return arguments.length ? ((n = W), k) : n
        }),
        (k.on = function () {
          var W = r.on.apply(r, arguments)
          return W === r ? k : W
        }),
        (k.clickDistance = function (W) {
          return arguments.length ? ((w = (W = +W) * W), k) : Math.sqrt(w)
        }),
        (k.tapDistance = function (W) {
          return arguments.length ? ((x = +W), k) : x
        }),
        k
      )
    }
    function su(e, u) {
      if (!e) return
      function s(m) {
        m.target === this && (m.preventDefault(), u())
      }
      function p(m) {
        m.key.startsWith("Esc") && (m.preventDefault(), u())
      }
      e?.addEventListener("click", s),
        window.addCleanup(() => e?.removeEventListener("click", s)),
        document.addEventListener("keydown", p),
        window.addCleanup(() => document.removeEventListener("keydown", p))
    }
    function lu(e) {
      for (; e.firstChild; ) e.removeChild(e.firstChild)
    }
    var oa = Object.hasOwnProperty,
      Uo = Xt(rn(), 1),
      aa = (0, Uo.default)()
    function sa(e) {
      return e.document.body.dataset.slug
    }
    function ai(e) {
      let u = Yo(Xo(e, "index"), !0)
      return u.length === 0 ? "/" : u
    }
    function la(e) {
      let u = e
        .split("/")
        .filter((s) => s !== "")
        .slice(0, -1)
        .map((s) => "..")
        .join("/")
      return u.length === 0 && (u = "."), u
    }
    function Wo(e, u) {
      return si(la(e), ai(u))
    }
    function si(...e) {
      return e
        .filter((u) => u !== "")
        .join("/")
        .replace(/\/\/+/g, "/")
    }
    function Ko(e, u) {
      return e === u || e.endsWith("/" + u)
    }
    function Xo(e, u) {
      return Ko(e, u) && (e = e.slice(0, -u.length)), e
    }
    function Yo(e, u) {
      return (
        e.startsWith("/") && (e = e.substring(1)), !u && e.endsWith("/") && (e = e.slice(0, -1)), e
      )
    }
    var cu = "graph-visited"
    function fu() {
      return new Set(JSON.parse(localStorage.getItem(cu) ?? "[]"))
    }
    function Go(e) {
      let u = fu()
      u.add(e), localStorage.setItem(cu, JSON.stringify([...u]))
    }
    async function ki(e, u) {
      let s = ai(u),
        p = fu(),
        m = document.getElementById(e)
      if (!m) return
      lu(m)
      let {
          drag: _,
          zoom: C,
          depth: t,
          scale: n,
          repelForce: r,
          centerForce: o,
          linkDistance: l,
          fontSize: c,
          opacityScale: f,
          removeTags: y,
          showTags: w,
          focusOnHover: x,
        } = JSON.parse(m.dataset.cfg),
        k = new Map(Object.entries(await fetchData).map(([mt, H]) => [ai(mt), H])),
        F = [],
        $ = [],
        L = new Set(k.keys())
      for (let [mt, H] of k.entries()) {
        let bt = H.links ?? []
        for (let st of bt) L.has(st) && F.push({ source: mt, target: st })
        if (w) {
          let st = H.tags.filter((Et) => !y.includes(Et)).map((Et) => ai("tags/" + Et))
          $.push(...st.filter((Et) => !$.includes(Et)))
          for (let Et of st) F.push({ source: mt, target: Et })
        }
      }
      let K = new Set(),
        X = [s, "__SENTINEL"]
      if (t >= 0)
        for (; t >= 0 && X.length > 0; ) {
          let mt = X.shift()
          if (mt === "__SENTINEL") t--, X.push("__SENTINEL")
          else {
            K.add(mt)
            let H = F.filter((st) => st.source === mt),
              bt = F.filter((st) => st.target === mt)
            X.push(...H.map((st) => st.target), ...bt.map((st) => st.source))
          }
        }
      else L.forEach((mt) => K.add(mt)), w && $.forEach((mt) => K.add(mt))
      let Z = {
          nodes: [...K].map((mt) => {
            let H = mt.startsWith("tags/") ? "#" + mt.substring(5) : k.get(mt)?.title ?? mt
            return { id: mt, text: H, tags: k.get(mt)?.tags ?? [] }
          }),
          links: F.filter((mt) => K.has(mt.source) && K.has(mt.target)),
        },
        Q = zo(Z.nodes)
          .force("charge", Po().strength(-100 * r))
          .force(
            "link",
            dn(Z.links)
              .id((mt) => mt.id)
              .distance(l),
          )
          .force("center", _o().strength(o)),
        wt = Math.max(m.offsetHeight, 250),
        Bt = m.offsetWidth,
        it = ct("#" + e)
          .append("svg")
          .attr("width", Bt)
          .attr("height", wt)
          .attr("viewBox", [-Bt / 2 / n, -wt / 2 / n, Bt / n, wt / n]),
        $t = it
          .append("g")
          .selectAll("line")
          .data(Z.links)
          .join("line")
          .attr("class", "link")
          .attr("stroke", "var(--lightgray)")
          .attr("stroke-width", 1),
        Wt = it.append("g").selectAll("g").data(Z.nodes).enter().append("g"),
        W = (mt) =>
          mt.id === s
            ? "var(--secondary)"
            : p.has(mt.id) || mt.id.startsWith("tags/")
              ? "var(--tertiary)"
              : "var(--gray)",
        _t = (mt) => {
          function H(Ot, Ft) {
            Ot.active || mt.alphaTarget(1).restart(), (Ft.fx = Ft.x), (Ft.fy = Ft.y)
          }
          function bt(Ot, Ft) {
            ;(Ft.fx = Ot.x), (Ft.fy = Ot.y)
          }
          function st(Ot, Ft) {
            Ot.active || mt.alphaTarget(0), (Ft.fx = null), (Ft.fy = null)
          }
          let Et = () => {}
          return li()
            .on("start", _ ? H : Et)
            .on("drag", _ ? bt : Et)
            .on("end", _ ? st : Et)
        }
      function dt(mt) {
        let H = F.filter((bt) => bt.source.id === mt.id || bt.target.id === mt.id).length
        return 2 + Math.sqrt(H)
      }
      let Dt = [],
        Pt = Wt.append("circle")
          .attr("class", "node")
          .attr("id", (mt) => mt.id)
          .attr("r", dt)
          .attr("fill", W)
          .style("cursor", "pointer")
          .on("click", (mt, H) => {
            let bt = Wo(u, H.id)
            window.spaNavigate(new URL(bt, window.location.toString()))
          })
          .on("mouseover", function (mt, H) {
            let bt = H.id,
              st = kt(".link").filter((Ft) => Ft.source.id === bt || Ft.target.id === bt)
            x &&
              ((Dt = st.data().flatMap((Ft) => [Ft.source.id, Ft.target.id])),
              kt(".link").style("opacity", 0.2),
              kt(".node")
                .filter((Ft) => !Dt.includes(Ft.id))
                .style("opacity", 0.2)),
              st.attr("stroke", "var(--gray)").attr("stroke-width", 1)
            let Et = c * 1.5,
              Ot = this.parentNode
            ct(Ot)
              .raise()
              .select("text")
              .attr("opacityOld", ct(Ot).select("text").style("opacity"))
              .style("opacity", 1)
              .style("font-size", Et + "em")
          })
          .on("mouseleave", function (mt, H) {
            x && (kt(".link").style("opacity", 1), kt(".node").style("opacity", 1))
            let bt = H.id
            kt(".link")
              .filter((Et) => Et.source.id === bt || Et.target.id === bt)
              .attr("stroke", "var(--lightgray)")
            let st = this.parentNode
            ct(st)
              .select("text")
              .style("opacity", ct(st).select("text").attr("opacityOld"))
              .style("font-size", c + "em")
          })
          .call(_t(Q)),
        Qt = Wt.append("text")
          .attr("dx", 0)
          .attr("dy", (mt) => -dt(mt) + "px")
          .attr("text-anchor", "middle")
          .text((mt) => mt.text)
          .style("opacity", (f - 1) / 3.75)
          .style("pointer-events", "none")
          .style("font-size", c + "em")
          .raise()
          .call(_t(Q))
      C &&
        it.call(
          Ho()
            .extent([
              [0, 0],
              [Bt, wt],
            ])
            .scaleExtent([0.25, 4])
            .on("zoom", ({ transform: mt }) => {
              $t.attr("transform", mt), Pt.attr("transform", mt)
              let H = mt.k * f,
                bt = Math.max((H - 1) / 3.75, 0)
              Qt.attr("transform", mt).style("opacity", bt)
            }),
        ),
        Q.on("tick", () => {
          $t
            .attr("x1", (mt) => mt.source.x)
            .attr("y1", (mt) => mt.source.y)
            .attr("x2", (mt) => mt.target.x)
            .attr("y2", (mt) => mt.target.y),
            Pt.attr("cx", (mt) => mt.x).attr("cy", (mt) => mt.y),
            Qt.attr("x", (mt) => mt.x).attr("y", (mt) => mt.y)
        })
    }
    function Ci() {
      let e = sa(window),
        u = document.getElementById("global-graph-outer"),
        s = u?.closest(".sidebar")
      u?.classList.add("active"), s && (s.style.zIndex = "1"), ki("global-graph-container", e)
      function p() {
        u?.classList.remove("active")
        let m = document.getElementById("global-graph-container")
        s && (s.style.zIndex = "unset"), m && lu(m)
      }
      su(u, p)
    }
    document.addEventListener("nav", async (e) => {
      let u = e.detail.url
      Go(u), await ki("graph-container", u)
      let s = document.getElementById("global-graph-icon")
      s?.addEventListener("click", Ci), window.addCleanup(() => s?.removeEventListener("click", Ci))
    })
  })(),
  (function () {
    var Be = new IntersectionObserver((ge) => {
      for (let xe of ge) {
        let Gt = xe.target.id,
          $e = document.querySelector(`a[data-for="${Gt}"]`),
          ze = xe.rootBounds?.height
        ze &&
          $e &&
          (xe.boundingClientRect.y < ze
            ? $e.classList.add("in-view")
            : $e.classList.remove("in-view"))
      }
    })
    function Le() {
      this.classList.toggle("collapsed")
      let ge = this.nextElementSibling
      ge &&
        (ge.classList.toggle("collapsed"),
        (ge.style.maxHeight = ge.style.maxHeight === "0px" ? ge.scrollHeight + "px" : "0px"))
    }
    function Oe() {
      let ge = document.getElementById("toc")
      if (ge) {
        let xe = ge.classList.contains("collapsed"),
          Gt = ge.nextElementSibling
        if (!Gt) return
        ;(Gt.style.maxHeight = xe ? "0px" : Gt.scrollHeight + "px"),
          ge.addEventListener("click", Le),
          window.addCleanup(() => ge.removeEventListener("click", Le))
      }
    }
    window.addEventListener("resize", Oe),
      document.addEventListener("nav", () => {
        Oe(),
          Be.disconnect(),
          document
            .querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
            .forEach((ge) => Be.observe(ge))
      })
  })(),
  (function () {
    var Be = (i, g) => () => (g || i((g = { exports: {} }).exports, g), g.exports),
      Le = Be(() => {})
    function Oe(i, g) {
      if (!i) return
      function b(B) {
        B.target === this && (B.preventDefault(), g())
      }
      function D(B) {
        B.key.startsWith("Esc") && (B.preventDefault(), g())
      }
      i?.addEventListener("click", b),
        window.addCleanup(() => i?.removeEventListener("click", b)),
        document.addEventListener("keydown", D),
        window.addCleanup(() => document.removeEventListener("keydown", D))
    }
    function ge(i) {
      for (; i.firstChild; ) i.removeChild(i.firstChild)
    }
    function xe(i, ...g) {
      i &&
        g.forEach(([b, D]) => {
          let B = (z) => D(z)
          i.addEventListener(b, B), window.addCleanup(() => i.removeEventListener(b, B))
        })
    }
    var Gt = {
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
            seeRemainingMore: ({ remaining: i }) => `See ${i} more \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `Transclude of ${i}`,
            linkToOriginal: "Link to original",
          },
          search: { title: "Search", searchBarPlaceholder: "Search for something" },
          tableOfContents: { title: "Table of Contents" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i} min read` },
        },
        pages: {
          rss: { recentNotes: "Recent notes", lastFewNotes: ({ count: i }) => `Last ${i} notes` },
          error: { title: "Not Found", notFound: "Either this page is private or doesn't exist." },
          folderContent: {
            folder: "Folder",
            itemsUnderFolder: ({ count: i }) =>
              i === 1 ? "1 item under this folder." : `${i} items under this folder.`,
          },
          tagContent: {
            tag: "Tag",
            tagIndex: "Tag Index",
            itemsUnderTag: ({ count: i }) =>
              i === 1 ? "1 item with this tag." : `${i} items with this tag.`,
            showingFirst: ({ count: i }) => `Showing first ${i} tags.`,
            totalTags: ({ count: i }) => `Found ${i} total tags.`,
          },
        },
      },
      $e = {
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
            seeRemainingMore: ({ remaining: i }) => `Voir ${i} de plus \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `Transclusion de ${i}`,
            linkToOriginal: "Lien vers l'original",
          },
          search: { title: "Recherche", searchBarPlaceholder: "Rechercher quelque chose" },
          tableOfContents: { title: "Table des Mati\xE8res" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i} min read` },
        },
        pages: {
          rss: {
            recentNotes: "Notes r\xE9centes",
            lastFewNotes: ({ count: i }) => `Les derni\xE8res ${i} notes`,
          },
          error: {
            title: "Pas trouv\xE9",
            notFound: "Cette page est soit priv\xE9e, soit elle n'existe pas.",
          },
          folderContent: {
            folder: "Dossier",
            itemsUnderFolder: ({ count: i }) =>
              i === 1 ? "1 \xE9l\xE9ment sous ce dossier." : `${i} \xE9l\xE9ments sous ce dossier.`,
          },
          tagContent: {
            tag: "\xC9tiquette",
            tagIndex: "Index des \xE9tiquettes",
            itemsUnderTag: ({ count: i }) =>
              i === 1
                ? "1 \xE9l\xE9ment avec cette \xE9tiquette."
                : `${i} \xE9l\xE9ments avec cette \xE9tiquette.`,
            showingFirst: ({ count: i }) => `Affichage des premi\xE8res ${i} \xE9tiquettes.`,
            totalTags: ({ count: i }) => `Trouv\xE9 ${i} \xE9tiquettes au total.`,
          },
        },
      },
      ze = {
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
            seeRemainingMore: ({ remaining: i }) => `Vedi ${i} altro \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `Transclusione di ${i}`,
            linkToOriginal: "Link all'originale",
          },
          search: { title: "Cerca", searchBarPlaceholder: "Cerca qualcosa" },
          tableOfContents: { title: "Tabella dei contenuti" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i} minuti` },
        },
        pages: {
          rss: { recentNotes: "Note recenti", lastFewNotes: ({ count: i }) => `Ultime ${i} note` },
          error: { title: "Non trovato", notFound: "Questa pagina \xE8 privata o non esiste." },
          folderContent: {
            folder: "Cartella",
            itemsUnderFolder: ({ count: i }) =>
              i === 1 ? "1 oggetto in questa cartella." : `${i} oggetti in questa cartella.`,
          },
          tagContent: {
            tag: "Etichetta",
            tagIndex: "Indice etichette",
            itemsUnderTag: ({ count: i }) =>
              i === 1 ? "1 oggetto con questa etichetta." : `${i} oggetti con questa etichetta.`,
            showingFirst: ({ count: i }) => `Prime ${i} etichette.`,
            totalTags: ({ count: i }) => `Trovate ${i} etichette totali.`,
          },
        },
      },
      Xt = {
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
            seeRemainingMore: ({ remaining: i }) => `\u3055\u3089\u306B${i}\u4EF6 \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `${i}\u306E\u307E\u3068\u3081`,
            linkToOriginal: "\u5143\u8A18\u4E8B\u3078\u306E\u30EA\u30F3\u30AF",
          },
          search: {
            title: "\u691C\u7D22",
            searchBarPlaceholder: "\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B",
          },
          tableOfContents: { title: "\u76EE\u6B21" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i} min read` },
        },
        pages: {
          rss: {
            recentNotes: "\u6700\u8FD1\u306E\u8A18\u4E8B",
            lastFewNotes: ({ count: i }) => `\u6700\u65B0\u306E${i}\u4EF6`,
          },
          error: {
            title: "Not Found",
            notFound:
              "\u30DA\u30FC\u30B8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u975E\u516C\u958B\u8A2D\u5B9A\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",
          },
          folderContent: {
            folder: "\u30D5\u30A9\u30EB\u30C0",
            itemsUnderFolder: ({ count: i }) => `${i}\u4EF6\u306E\u30DA\u30FC\u30B8`,
          },
          tagContent: {
            tag: "\u30BF\u30B0",
            tagIndex: "\u30BF\u30B0\u4E00\u89A7",
            itemsUnderTag: ({ count: i }) => `${i}\u4EF6\u306E\u30DA\u30FC\u30B8`,
            showingFirst: ({ count: i }) =>
              `\u306E\u3046\u3061\u6700\u521D\u306E${i}\u4EF6\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059`,
            totalTags: ({ count: i }) =>
              `\u5168${i}\u500B\u306E\u30BF\u30B0\u3092\u8868\u793A\u4E2D`,
          },
        },
      },
      rn = {
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
            seeRemainingMore: ({ remaining: i }) => `${i} weitere ansehen \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `Transklusion von ${i}`,
            linkToOriginal: "Link zum Original",
          },
          search: { title: "Suche", searchBarPlaceholder: "Suche nach etwas" },
          tableOfContents: { title: "Inhaltsverzeichnis" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i} min read` },
        },
        pages: {
          rss: {
            recentNotes: "Zuletzt bearbeitete Seiten",
            lastFewNotes: ({ count: i }) => `Letzte ${i} Seiten`,
          },
          error: {
            title: "Nicht gefunden",
            notFound: "Diese Seite ist entweder nicht \xF6ffentlich oder existiert nicht.",
          },
          folderContent: {
            folder: "Ordner",
            itemsUnderFolder: ({ count: i }) =>
              i === 1 ? "1 Datei in diesem Ordner." : `${i} Dateien in diesem Ordner.`,
          },
          tagContent: {
            tag: "Tag",
            tagIndex: "Tag-\xDCbersicht",
            itemsUnderTag: ({ count: i }) =>
              i === 1 ? "1 Datei mit diesem Tag." : `${i} Dateien mit diesem Tag.`,
            showingFirst: ({ count: i }) => `Die ersten ${i} Tags werden angezeigt.`,
            totalTags: ({ count: i }) => `${i} Tags insgesamt.`,
          },
        },
      },
      he = {
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
            seeRemainingMore: ({ remaining: i }) => `Zie ${i} meer \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `Invoeging van ${i}`,
            linkToOriginal: "Link naar origineel",
          },
          search: { title: "Zoeken", searchBarPlaceholder: "Doorzoek de website" },
          tableOfContents: { title: "Inhoudsopgave" },
          contentMeta: {
            readingTime: ({ minutes: i }) =>
              i === 1 ? "1 minuut leestijd" : `${i} minuten leestijd`,
          },
        },
        pages: {
          rss: {
            recentNotes: "Recente notities",
            lastFewNotes: ({ count: i }) => `Laatste ${i} notities`,
          },
          error: {
            title: "Niet gevonden",
            notFound: "Deze pagina is niet zichtbaar of bestaat niet.",
          },
          folderContent: {
            folder: "Map",
            itemsUnderFolder: ({ count: i }) =>
              i === 1 ? "1 item in deze map." : `${i} items in deze map.`,
          },
          tagContent: {
            tag: "Label",
            tagIndex: "Label-index",
            itemsUnderTag: ({ count: i }) =>
              i === 1 ? "1 item met dit label." : `${i} items met dit label.`,
            showingFirst: ({ count: i }) =>
              i === 1 ? "Eerste label tonen." : `Eerste ${i} labels tonen.`,
            totalTags: ({ count: i }) => `${i} labels gevonden.`,
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
            seeRemainingMore: ({ remaining: i }) => `Vezi \xEEnc\u0103 ${i} \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `Extras din ${i}`,
            linkToOriginal: "Leg\u0103tur\u0103 c\u0103tre original",
          },
          search: {
            title: "C\u0103utare",
            searchBarPlaceholder: "Introduce\u021Bi termenul de c\u0103utare...",
          },
          tableOfContents: { title: "Cuprins" },
          contentMeta: {
            readingTime: ({ minutes: i }) =>
              i == 1 ? "lectur\u0103 de 1 minut" : `lectur\u0103 de ${i} minute`,
          },
        },
        pages: {
          rss: {
            recentNotes: "Noti\u021Be recente",
            lastFewNotes: ({ count: i }) => `Ultimele ${i} noti\u021Be`,
          },
          error: {
            title: "Pagina nu a fost g\u0103sit\u0103",
            notFound: "Fie aceast\u0103 pagin\u0103 este privat\u0103, fie nu exist\u0103.",
          },
          folderContent: {
            folder: "Dosar",
            itemsUnderFolder: ({ count: i }) =>
              i === 1 ? "1 articol \xEEn acest dosar." : `${i} elemente \xEEn acest dosar.`,
          },
          tagContent: {
            tag: "Etichet\u0103",
            tagIndex: "Indexul etichetelor",
            itemsUnderTag: ({ count: i }) =>
              i === 1
                ? "1 articol cu aceast\u0103 etichet\u0103."
                : `${i} articole cu aceast\u0103 etichet\u0103.`,
            showingFirst: ({ count: i }) => `Se afi\u0219eaz\u0103 primele ${i} etichete.`,
            totalTags: ({ count: i }) => `Au fost g\u0103site ${i} etichete \xEEn total.`,
          },
        },
      },
      Ne = {
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
            seeRemainingMore: ({ remaining: i }) => `Vea ${i} m\xE1s \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `Transcluido de ${i}`,
            linkToOriginal: "Enlace al original",
          },
          search: { title: "Buscar", searchBarPlaceholder: "Busca algo" },
          tableOfContents: { title: "Tabla de Contenidos" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i} min read` },
        },
        pages: {
          rss: {
            recentNotes: "Notas recientes",
            lastFewNotes: ({ count: i }) => `\xDAltim\xE1s ${i} notas`,
          },
          error: {
            title: "No se encontr\xF3.",
            notFound: "Esta p\xE1gina es privada o no existe.",
          },
          folderContent: {
            folder: "Carpeta",
            itemsUnderFolder: ({ count: i }) =>
              i === 1 ? "1 art\xEDculo en esta carpeta." : `${i} art\xEDculos en esta carpeta.`,
          },
          tagContent: {
            tag: "Etiqueta",
            tagIndex: "\xCDndice de Etiquetas",
            itemsUnderTag: ({ count: i }) =>
              i === 1 ? "1 art\xEDculo con esta etiqueta." : `${i} art\xEDculos con esta etiqueta.`,
            showingFirst: ({ count: i }) => `Mostrando las primeras ${i} etiquetas.`,
            totalTags: ({ count: i }) => `Se encontraron ${i} etiquetas en total.`,
          },
        },
      },
      ee = {
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
            seeRemainingMore: ({ remaining: i }) =>
              `\u062A\u0635\u0641\u062D ${i} \u0623\u0643\u062B\u0631 \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `\u0645\u0642\u062A\u0628\u0633 \u0645\u0646 ${i}`,
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
            readingTime: ({ minutes: i }) =>
              i == 1
                ? "\u062F\u0642\u064A\u0642\u0629 \u0623\u0648 \u0623\u0642\u0644 \u0644\u0644\u0642\u0631\u0627\u0621\u0629"
                : i == 2
                  ? "\u062F\u0642\u064A\u0642\u062A\u0627\u0646 \u0644\u0644\u0642\u0631\u0627\u0621\u0629"
                  : `${i} \u062F\u0642\u0627\u0626\u0642 \u0644\u0644\u0642\u0631\u0627\u0621\u0629`,
          },
        },
        pages: {
          rss: {
            recentNotes:
              "\u0622\u062E\u0631 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A",
            lastFewNotes: ({ count: i }) =>
              `\u0622\u062E\u0631 ${i} \u0645\u0644\u0627\u062D\u0638\u0629`,
          },
          error: {
            title: "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
            notFound:
              "\u0625\u0645\u0627 \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062E\u0627\u0635\u0629 \u0623\u0648 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629.",
          },
          folderContent: {
            folder: "\u0645\u062C\u0644\u062F",
            itemsUnderFolder: ({ count: i }) =>
              i === 1
                ? "\u064A\u0648\u062C\u062F \u0639\u0646\u0635\u0631 \u0648\u0627\u062D\u062F \u0641\u0642\u0637 \u062A\u062D\u062A \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0644\u062F"
                : `\u064A\u0648\u062C\u062F ${i} \u0639\u0646\u0627\u0635\u0631 \u062A\u062D\u062A \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0644\u062F.`,
          },
          tagContent: {
            tag: "\u0627\u0644\u0648\u0633\u0645",
            tagIndex: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0648\u0633\u0645",
            itemsUnderTag: ({ count: i }) =>
              i === 1
                ? "\u064A\u0648\u062C\u062F \u0639\u0646\u0635\u0631 \u0648\u0627\u062D\u062F \u0641\u0642\u0637 \u062A\u062D\u062A \u0647\u0630\u0627 \u0627\u0644\u0648\u0633\u0645"
                : `\u064A\u0648\u062C\u062F ${i} \u0639\u0646\u0627\u0635\u0631 \u062A\u062D\u062A \u0647\u0630\u0627 \u0627\u0644\u0648\u0633\u0645.`,
            showingFirst: ({ count: i }) =>
              `\u0625\u0638\u0647\u0627\u0631 \u0623\u0648\u0644 ${i} \u0623\u0648\u0633\u0645\u0629.`,
            totalTags: ({ count: i }) =>
              `\u064A\u0648\u062C\u062F ${i} \u0623\u0648\u0633\u0645\u0629.`,
          },
        },
      },
      me = {
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
            seeRemainingMore: ({ remaining: i }) =>
              `\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0449\u0435 ${i} \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) =>
              `\u0412\u0438\u0434\u043E\u0431\u0443\u0442\u043E \u0437 ${i}`,
            linkToOriginal:
              "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B",
          },
          search: {
            title: "\u041F\u043E\u0448\u0443\u043A",
            searchBarPlaceholder: "\u0428\u0443\u043A\u0430\u0442\u0438 \u0449\u043E\u0441\u044C",
          },
          tableOfContents: { title: "\u0417\u043C\u0456\u0441\u0442" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i} min read` },
        },
        pages: {
          rss: {
            recentNotes:
              "\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",
            lastFewNotes: ({ count: i }) =>
              `\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438: ${i}`,
          },
          error: {
            title: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
            notFound:
              "\u0426\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0430\u0431\u043E \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0430, \u0430\u0431\u043E \u043D\u0435 \u0456\u0441\u043D\u0443\u0454.",
          },
          folderContent: {
            folder: "\u041F\u0430\u043F\u043A\u0430",
            itemsUnderFolder: ({ count: i }) =>
              i === 1
                ? "\u0423 \u0446\u0456\u0439 \u043F\u0430\u043F\u0446\u0456 1 \u0435\u043B\u0435\u043C\u0435\u043D\u0442."
                : `\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0443 \u0446\u0456\u0439 \u043F\u0430\u043F\u0446\u0456: ${i}.`,
          },
          tagContent: {
            tag: "\u0422\u0435\u0433",
            tagIndex: "\u0406\u043D\u0434\u0435\u043A\u0441 \u0442\u0435\u0433\u0443",
            itemsUnderTag: ({ count: i }) =>
              i === 1
                ? "1 \u0435\u043B\u0435\u043C\u0435\u043D\u0442 \u0437 \u0446\u0438\u043C \u0442\u0435\u0433\u043E\u043C."
                : `\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0437 \u0446\u0438\u043C \u0442\u0435\u0433\u043E\u043C: ${i}.`,
            showingFirst: ({ count: i }) =>
              `\u041F\u043E\u043A\u0430\u0437 \u043F\u0435\u0440\u0448\u0438\u0445 ${i} \u0442\u0435\u0433\u0456\u0432.`,
            totalTags: ({ count: i }) =>
              `\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u0435\u0433\u0456\u0432: ${i}.`,
          },
        },
      },
      pn = {
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
            seeRemainingMore: ({ remaining: i }) =>
              `\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0448${ae(i, "\u0443\u044E\u0441\u044F", "\u0438\u0435\u0441\u044F", "\u0438\u0435\u0441\u044F")} ${i} \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) =>
              `\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0438\u0437 ${i}`,
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
            readingTime: ({ minutes: i }) =>
              `\u0432\u0440\u0435\u043C\u044F \u0447\u0442\u0435\u043D\u0438\u044F ~${i} \u043C\u0438\u043D.`,
          },
        },
        pages: {
          rss: {
            recentNotes:
              "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
            lastFewNotes: ({ count: i }) =>
              `\u041F\u043E\u0441\u043B\u0435\u0434\u043D${ae(i, "\u044F\u044F", "\u0438\u0435", "\u0438\u0435")} ${i} \u0437\u0430\u043C\u0435\u0442${ae(i, "\u043A\u0430", "\u043A\u0438", "\u043E\u043A")}`,
          },
          error: {
            title:
              "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",
            notFound:
              "\u042D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0430\u044F \u0438\u043B\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",
          },
          folderContent: {
            folder: "\u041F\u0430\u043F\u043A\u0430",
            itemsUnderFolder: ({ count: i }) =>
              `\u0432 \u044D\u0442\u043E\u0439 \u043F\u0430\u043F\u043A\u0435 ${i} \u044D\u043B\u0435\u043C\u0435\u043D\u0442${ae(i, "", "\u0430", "\u043E\u0432")}`,
          },
          tagContent: {
            tag: "\u0422\u0435\u0433",
            tagIndex: "\u0418\u043D\u0434\u0435\u043A\u0441 \u0442\u0435\u0433\u043E\u0432",
            itemsUnderTag: ({ count: i }) =>
              `\u0441 \u044D\u0442\u0438\u043C \u0442\u0435\u0433\u043E\u043C ${i} \u044D\u043B\u0435\u043C\u0435\u043D\u0442${ae(i, "", "\u0430", "\u043E\u0432")}`,
            showingFirst: ({ count: i }) =>
              `\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430${ae(i, "\u0435\u0442\u0441\u044F", "\u044E\u0442\u0441\u044F", "\u044E\u0442\u0441\u044F")} ${i} \u0442\u0435\u0433${ae(i, "", "\u0430", "\u043E\u0432")}`,
            totalTags: ({ count: i }) =>
              `\u0412\u0441\u0435\u0433\u043E ${i} \u0442\u0435\u0433${ae(i, "", "\u0430", "\u043E\u0432")}`,
          },
        },
      }
    function ae(i, g, b, D) {
      let B = i % 100,
        z = B % 10
      return B >= 10 && B <= 20 ? D : z > 1 && z < 5 ? b : z == 1 ? g : D
    }
    var ke = {
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
            seeRemainingMore: ({ remaining: i }) => `${i}\uAC74 \uB354\uBCF4\uAE30 \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `${i}\uC758 \uD3EC\uD568`,
            linkToOriginal: "\uC6D0\uBCF8 \uB9C1\uD06C",
          },
          search: {
            title: "\uAC80\uC0C9",
            searchBarPlaceholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694",
          },
          tableOfContents: { title: "\uBAA9\uCC28" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i} min read` },
        },
        pages: {
          rss: {
            recentNotes: "\uCD5C\uADFC \uAC8C\uC2DC\uAE00",
            lastFewNotes: ({ count: i }) => `\uCD5C\uADFC ${i} \uAC74`,
          },
          error: {
            title: "Not Found",
            notFound:
              "\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uAC70\uB098 \uBE44\uACF5\uAC1C \uC124\uC815\uC774 \uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
          },
          folderContent: {
            folder: "\uD3F4\uB354",
            itemsUnderFolder: ({ count: i }) => `${i}\uAC74\uC758 \uD56D\uBAA9`,
          },
          tagContent: {
            tag: "\uD0DC\uADF8",
            tagIndex: "\uD0DC\uADF8 \uBAA9\uB85D",
            itemsUnderTag: ({ count: i }) => `${i}\uAC74\uC758 \uD56D\uBAA9`,
            showingFirst: ({ count: i }) => `\uCC98\uC74C ${i}\uAC1C\uC758 \uD0DC\uADF8`,
            totalTags: ({ count: i }) =>
              `\uCD1D ${i}\uAC1C\uC758 \uD0DC\uADF8\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4.`,
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
            seeRemainingMore: ({ remaining: i }) =>
              `\u67E5\u770B\u66F4\u591A${i}\u7BC7\u7B14\u8BB0 \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `\u5305\u542B${i}`,
            linkToOriginal: "\u6307\u5411\u539F\u59CB\u7B14\u8BB0\u7684\u94FE\u63A5",
          },
          search: { title: "\u641C\u7D22", searchBarPlaceholder: "\u641C\u7D22\u4E9B\u4EC0\u4E48" },
          tableOfContents: { title: "\u76EE\u5F55" },
          contentMeta: { readingTime: ({ minutes: i }) => `${i}\u5206\u949F\u9605\u8BFB` },
        },
        pages: {
          rss: {
            recentNotes: "\u6700\u8FD1\u7684\u7B14\u8BB0",
            lastFewNotes: ({ count: i }) => `\u6700\u8FD1\u7684${i}\u6761\u7B14\u8BB0`,
          },
          error: {
            title: "\u65E0\u6CD5\u627E\u5230",
            notFound: "\u79C1\u6709\u7B14\u8BB0\u6216\u7B14\u8BB0\u4E0D\u5B58\u5728\u3002",
          },
          folderContent: {
            folder: "\u6587\u4EF6\u5939",
            itemsUnderFolder: ({ count: i }) =>
              `\u6B64\u6587\u4EF6\u5939\u4E0B\u6709${i}\u6761\u7B14\u8BB0\u3002`,
          },
          tagContent: {
            tag: "\u6807\u7B7E",
            tagIndex: "\u6807\u7B7E\u7D22\u5F15",
            itemsUnderTag: ({ count: i }) =>
              `\u6B64\u6807\u7B7E\u4E0B\u6709${i}\u6761\u7B14\u8BB0\u3002`,
            showingFirst: ({ count: i }) => `\u663E\u793A\u524D${i}\u4E2A\u6807\u7B7E\u3002`,
            totalTags: ({ count: i }) => `\u603B\u5171\u6709${i}\u4E2A\u6807\u7B7E\u3002`,
          },
        },
      },
      Ke = {
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
            seeRemainingMore: ({ remaining: i }) => `Xem ${i} th\xEAm \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: i }) => `Bao g\u1ED3m ${i}`,
            linkToOriginal: "Li\xEAn K\u1EBFt G\u1ED1c",
          },
          search: {
            title: "T\xECm Ki\u1EBFm",
            searchBarPlaceholder: "T\xECm ki\u1EBFm th\xF4ng tin",
          },
          tableOfContents: { title: "B\u1EA3ng N\u1ED9i Dung" },
          contentMeta: { readingTime: ({ minutes: i }) => `\u0111\u1ECDc ${i} ph\xFAt` },
        },
        pages: {
          rss: {
            recentNotes: "Nh\u1EEFng b\xE0i g\u1EA7n \u0111\xE2y",
            lastFewNotes: ({ count: i }) => `${i} B\xE0i g\u1EA7n \u0111\xE2y`,
          },
          error: {
            title: "Kh\xF4ng T\xECm Th\u1EA5y",
            notFound:
              "Trang n\xE0y \u0111\u01B0\u1EE3c b\u1EA3o m\u1EADt ho\u1EB7c kh\xF4ng t\u1ED3n t\u1EA1i.",
          },
          folderContent: {
            folder: "Th\u01B0 M\u1EE5c",
            itemsUnderFolder: ({ count: i }) =>
              i === 1
                ? "1 m\u1EE5c trong th\u01B0 m\u1EE5c n\xE0y."
                : `${i} m\u1EE5c trong th\u01B0 m\u1EE5c n\xE0y.`,
          },
          tagContent: {
            tag: "Th\u1EBB",
            tagIndex: "Th\u1EBB M\u1EE5c L\u1EE5c",
            itemsUnderTag: ({ count: i }) =>
              i === 1
                ? "1 m\u1EE5c g\u1EAFn th\u1EBB n\xE0y."
                : `${i} m\u1EE5c g\u1EAFn th\u1EBB n\xE0y.`,
            showingFirst: ({ count: i }) => `Hi\u1EC3n th\u1ECB tr\u01B0\u1EDBc ${i} th\u1EBB.`,
            totalTags: ({ count: i }) => `T\xECm th\u1EA5y ${i} th\u1EBB t\u1ED5ng c\u1ED9ng.`,
          },
        },
      },
      gn = {
        "en-US": Gt,
        "fr-FR": $e,
        "it-IT": ze,
        "ja-JP": Xt,
        "de-DE": rn,
        "nl-NL": he,
        "nl-BE": he,
        "ro-RO": Vt,
        "ro-MD": Vt,
        "es-ES": Ne,
        "ar-SA": ee,
        "ar-AE": ee,
        "ar-QA": ee,
        "ar-BH": ee,
        "ar-KW": ee,
        "ar-OM": ee,
        "ar-YE": ee,
        "ar-IR": ee,
        "ar-SY": ee,
        "ar-IQ": ee,
        "ar-JO": ee,
        "ar-PL": ee,
        "ar-LB": ee,
        "ar-EG": ee,
        "ar-SD": ee,
        "ar-LY": ee,
        "ar-MA": ee,
        "ar-TN": ee,
        "ar-DZ": ee,
        "ar-MR": ee,
        "uk-UA": me,
        "ru-RU": pn,
        "ko-KR": ke,
        "zh-CN": te,
        "vi-VN": Ke,
      },
      Xe = "en-US",
      Ve = (i) => gn[i ?? Xe],
      ne
    function le(i) {
      return typeof i < "u" ? i : !0
    }
    function un(i) {
      let g = Array(i)
      for (let b = 0; b < i; b++) g[b] = de()
      return g
    }
    function de() {
      return Object.create(null)
    }
    function En(i, g) {
      return g.length - i.length
    }
    function ye(i) {
      return typeof i == "string"
    }
    function be(i) {
      return typeof i == "object"
    }
    function mn(i) {
      return typeof i == "function"
    }
    function Pe(i, g) {
      var b = De
      if (
        i &&
        (g && (i = Qe(i, g)),
        this.H && (i = Qe(i, this.H)),
        this.J && 1 < i.length && (i = Qe(i, this.J)),
        b || b === "")
      ) {
        if (((g = i.split(b)), this.filter)) {
          ;(i = this.filter), (b = g.length)
          let D = []
          for (let B = 0, z = 0; B < b; B++) {
            let et = g[B]
            et && !i[et] && (D[z++] = et)
          }
          i = D
        } else i = g
        return i
      }
      return i
    }
    var De = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      on = /[\u0300-\u036f]/g
    function He(i, g) {
      let b = Object.keys(i),
        D = b.length,
        B = [],
        z = "",
        et = 0
      for (let nt = 0, ot, yt; nt < D; nt++)
        (ot = b[nt]),
          (yt = i[ot])
            ? ((B[et++] = ve(g ? "(?!\\b)" + ot + "(\\b|_)" : ot)), (B[et++] = yt))
            : (z += (z ? "|" : "") + ot)
      return z && ((B[et++] = ve(g ? "(?!\\b)(" + z + ")(\\b|_)" : "(" + z + ")")), (B[et] = "")), B
    }
    function Qe(i, g) {
      for (let b = 0, D = g.length; b < D && ((i = i.replace(g[b], g[b + 1])), i); b += 2);
      return i
    }
    function ve(i) {
      return new RegExp(i, "g")
    }
    function Ze(i) {
      let g = "",
        b = ""
      for (let D = 0, B = i.length, z; D < B; D++) (z = i[D]) !== b && (g += b = z)
      return g
    }
    var qe = { encode: tn, F: !1, G: "" }
    function tn(i) {
      return Pe.call(this, ("" + i).toLowerCase(), !1)
    }
    var Ie = {},
      Ee = {}
    function tt(i) {
      gt(i, "add"), gt(i, "append"), gt(i, "search"), gt(i, "update"), gt(i, "remove")
    }
    function gt(i, g) {
      i[g + "Async"] = function () {
        let b = this,
          D = arguments
        var B = D[D.length - 1]
        let z
        return (
          mn(B) && ((z = B), delete D[D.length - 1]),
          (B = new Promise(function (et) {
            setTimeout(function () {
              b.async = !0
              let nt = b[g].apply(b, D)
              ;(b.async = !1), et(nt)
            })
          })),
          z ? (B.then(z), this) : B
        )
      }
    }
    function At(i, g, b, D) {
      let B = i.length,
        z = [],
        et,
        nt,
        ot = 0
      D && (D = [])
      for (let yt = B - 1; 0 <= yt; yt--) {
        let Ct = i[yt],
          lt = Ct.length,
          ct = de(),
          at = !et
        for (let vt = 0; vt < lt; vt++) {
          let kt = Ct[vt],
            Rt = kt.length
          if (Rt)
            for (let se = 0, Me, Jt; se < Rt; se++)
              if (((Jt = kt[se]), et)) {
                if (et[Jt]) {
                  if (!yt) {
                    if (b) b--
                    else if (((z[ot++] = Jt), ot === g)) return z
                  }
                  ;(yt || D) && (ct[Jt] = 1), (at = !0)
                }
                if (D && ((Me = (nt[Jt] || 0) + 1), (nt[Jt] = Me), Me < B)) {
                  let en = D[Me - 2] || (D[Me - 2] = [])
                  en[en.length] = Jt
                }
              } else ct[Jt] = 1
        }
        if (D) et || (nt = ct)
        else if (!at) return []
        et = ct
      }
      if (D)
        for (let yt = D.length - 1, Ct, lt; 0 <= yt; yt--) {
          ;(Ct = D[yt]), (lt = Ct.length)
          for (let ct = 0, at; ct < lt; ct++)
            if (((at = Ct[ct]), !et[at])) {
              if (b) b--
              else if (((z[ot++] = at), ot === g)) return z
              et[at] = 1
            }
        }
      return z
    }
    function Lt(i, g) {
      let b = de(),
        D = de(),
        B = []
      for (let z = 0; z < i.length; z++) b[i[z]] = 1
      for (let z = 0, et; z < g.length; z++) {
        et = g[z]
        for (let nt = 0, ot; nt < et.length; nt++)
          (ot = et[nt]), b[ot] && !D[ot] && ((D[ot] = 1), (B[B.length] = ot))
      }
      return B
    }
    function qt(i) {
      ;(this.l = i !== !0 && i), (this.cache = de()), (this.h = [])
    }
    function St(i, g, b) {
      be(i) && (i = i.query)
      let D = this.cache.get(i)
      return D || ((D = this.search(i, g, b)), this.cache.set(i, D)), D
    }
    ;(qt.prototype.set = function (i, g) {
      if (!this.cache[i]) {
        var b = this.h.length
        for (b === this.l ? delete this.cache[this.h[b - 1]] : b++, --b; 0 < b; b--)
          this.h[b] = this.h[b - 1]
        this.h[0] = i
      }
      this.cache[i] = g
    }),
      (qt.prototype.get = function (i) {
        let g = this.cache[i]
        if (this.l && g && (i = this.h.indexOf(i))) {
          let b = this.h[i - 1]
          ;(this.h[i - 1] = this.h[i]), (this.h[i] = b)
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
    function ce(i, g, b, D, B, z, et, nt) {
      setTimeout(function () {
        let ot = i(b ? b + "." + D : D, JSON.stringify(et))
        ot && ot.then
          ? ot.then(function () {
              g.export(i, g, b, B, z + 1, nt)
            })
          : g.export(i, g, b, B, z + 1, nt)
      })
    }
    function Yt(i, g) {
      if (!(this instanceof Yt)) return new Yt(i)
      var b
      if (i) {
        ye(i) ? (i = jt[i]) : (b = i.preset) && (i = Object.assign({}, b[b], i)), (b = i.charset)
        var D = i.lang
        ye(b) && (b.indexOf(":") === -1 && (b += ":default"), (b = Ee[b])), ye(D) && (D = Ie[D])
      } else i = {}
      let B,
        z,
        et = i.context || {}
      if (
        ((this.encode = i.encode || (b && b.encode) || tn),
        (this.register = g || de()),
        (this.D = B = i.resolution || 9),
        (this.G = g = (b && b.G) || i.tokenize || "strict"),
        (this.depth = g === "strict" && et.depth),
        (this.l = le(et.bidirectional)),
        (this.s = z = le(i.optimize)),
        (this.m = le(i.fastupdate)),
        (this.B = i.minlength || 1),
        (this.C = i.boost),
        (this.map = z ? un(B) : de()),
        (this.A = B = et.resolution || 1),
        (this.h = z ? un(B) : de()),
        (this.F = (b && b.F) || i.rtl),
        (this.H = (g = i.matcher || (D && D.H)) && He(g, !1)),
        (this.J = (g = i.stemmer || (D && D.J)) && He(g, !0)),
        (b = g = i.filter || (D && D.filter)))
      ) {
        ;(b = g), (D = de())
        for (let nt = 0, ot = b.length; nt < ot; nt++) D[b[nt]] = 1
        b = D
      }
      ;(this.filter = b), (this.cache = (g = i.cache) && new qt(g))
    }
    ;(ne = Yt.prototype),
      (ne.append = function (i, g) {
        return this.add(i, g, !0)
      }),
      (ne.add = function (i, g, b, D) {
        if (g && (i || i === 0)) {
          if (!D && !b && this.register[i]) return this.update(i, g)
          if (((g = this.encode(g)), (D = g.length))) {
            let yt = de(),
              Ct = de(),
              lt = this.depth,
              ct = this.D
            for (let at = 0; at < D; at++) {
              let vt = g[this.F ? D - 1 - at : at]
              var B = vt.length
              if (vt && B >= this.B && (lt || !Ct[vt])) {
                var z = Ht(ct, D, at),
                  et = ""
                switch (this.G) {
                  case "full":
                    if (2 < B) {
                      for (z = 0; z < B; z++)
                        for (var nt = B; nt > z; nt--)
                          if (nt - z >= this.B) {
                            var ot = Ht(ct, D, at, B, z)
                            ;(et = vt.substring(z, nt)), re(this, Ct, et, ot, i, b)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < B) {
                      for (nt = B - 1; 0 < nt; nt--)
                        (et = vt[nt] + et),
                          et.length >= this.B && re(this, Ct, et, Ht(ct, D, at, B, nt), i, b)
                      et = ""
                    }
                  case "forward":
                    if (1 < B) {
                      for (nt = 0; nt < B; nt++)
                        (et += vt[nt]), et.length >= this.B && re(this, Ct, et, z, i, b)
                      break
                    }
                  default:
                    if (
                      (this.C && (z = Math.min((z / this.C(g, vt, at)) | 0, ct - 1)),
                      re(this, Ct, vt, z, i, b),
                      lt && 1 < D && at < D - 1)
                    ) {
                      for (
                        B = de(),
                          et = this.A,
                          z = vt,
                          nt = Math.min(lt + 1, D - at),
                          B[z] = 1,
                          ot = 1;
                        ot < nt;
                        ot++
                      )
                        if (
                          (vt = g[this.F ? D - 1 - at - ot : at + ot]) &&
                          vt.length >= this.B &&
                          !B[vt]
                        ) {
                          B[vt] = 1
                          let kt = this.l && vt > z
                          re(
                            this,
                            yt,
                            kt ? z : vt,
                            Ht(et + (D / 2 > et ? 0 : 1), D, at, nt - 1, ot - 1),
                            i,
                            b,
                            kt ? vt : z,
                          )
                        }
                    }
                }
              }
            }
            this.m || (this.register[i] = 1)
          }
        }
        return this
      })
    function Ht(i, g, b, D, B) {
      return b && 1 < i
        ? g + (D || 0) <= i
          ? b + (B || 0)
          : (((i - 1) / (g + (D || 0))) * (b + (B || 0)) + 1) | 0
        : 0
    }
    function re(i, g, b, D, B, z, et) {
      let nt = et ? i.h : i.map
      ;(!g[b] || (et && !g[b][et])) &&
        (i.s && (nt = nt[D]),
        et
          ? ((g = g[b] || (g[b] = de())), (g[et] = 1), (nt = nt[et] || (nt[et] = de())))
          : (g[b] = 1),
        (nt = nt[b] || (nt[b] = [])),
        i.s || (nt = nt[D] || (nt[D] = [])),
        (z && nt.includes(B)) ||
          ((nt[nt.length] = B),
          i.m && ((i = i.register[B] || (i.register[B] = [])), (i[i.length] = nt))))
    }
    ne.search = function (i, g, b) {
      b || (!g && be(i) ? ((b = i), (i = b.query)) : be(g) && (b = g))
      let D = [],
        B,
        z,
        et = 0
      if (b) {
        ;(i = b.query || i), (g = b.limit), (et = b.offset || 0)
        var nt = b.context
        z = b.suggest
      }
      if (i && ((i = this.encode("" + i)), (B = i.length), 1 < B)) {
        b = de()
        var ot = []
        for (let Ct = 0, lt = 0, ct; Ct < B; Ct++)
          if ((ct = i[Ct]) && ct.length >= this.B && !b[ct])
            if (this.s || z || this.map[ct]) (ot[lt++] = ct), (b[ct] = 1)
            else return D
        ;(i = ot), (B = i.length)
      }
      if (!B) return D
      g || (g = 100), (nt = this.depth && 1 < B && nt !== !1), (b = 0)
      let yt
      nt ? ((yt = i[0]), (b = 1)) : 1 < B && i.sort(En)
      for (let Ct, lt; b < B; b++) {
        if (
          ((lt = i[b]),
          nt
            ? ((Ct = Nt(this, D, z, g, et, B === 2, lt, yt)),
              (z && Ct === !1 && D.length) || (yt = lt))
            : (Ct = Nt(this, D, z, g, et, B === 1, lt)),
          Ct)
        )
          return Ct
        if (z && b === B - 1) {
          if (((ot = D.length), !ot)) {
            if (nt) {
              ;(nt = 0), (b = -1)
              continue
            }
            return D
          }
          if (ot === 1) return Mt(D[0], g, et)
        }
      }
      return At(D, g, et, z)
    }
    function Nt(i, g, b, D, B, z, et, nt) {
      let ot = [],
        yt = nt ? i.h : i.map
      if ((i.s || (yt = fe(yt, et, nt, i.l)), yt)) {
        let Ct = 0,
          lt = Math.min(yt.length, nt ? i.A : i.D)
        for (
          let ct = 0, at = 0, vt, kt;
          ct < lt &&
          !(
            (vt = yt[ct]) &&
            (i.s && (vt = fe(vt, et, nt, i.l)),
            B &&
              vt &&
              z &&
              ((kt = vt.length),
              kt <= B ? ((B -= kt), (vt = null)) : ((vt = vt.slice(B)), (B = 0))),
            vt && ((ot[Ct++] = vt), z && ((at += vt.length), at >= D)))
          );
          ct++
        );
        if (Ct) {
          if (z) return Mt(ot, D, 0)
          g[g.length] = ot
          return
        }
      }
      return !b && ot
    }
    function Mt(i, g, b) {
      return (
        (i = i.length === 1 ? i[0] : [].concat.apply([], i)),
        b || i.length > g ? i.slice(b, b + g) : i
      )
    }
    function fe(i, g, b, D) {
      return b ? ((D = D && g > b), (i = (i = i[D ? g : b]) && i[D ? b : g])) : (i = i[g]), i
    }
    ;(ne.contain = function (i) {
      return !!this.register[i]
    }),
      (ne.update = function (i, g) {
        return this.remove(i).add(i, g)
      }),
      (ne.remove = function (i, g) {
        let b = this.register[i]
        if (b) {
          if (this.m) for (let D = 0, B; D < b.length; D++) (B = b[D]), B.splice(B.indexOf(i), 1)
          else zt(this.map, i, this.D, this.s), this.depth && zt(this.h, i, this.A, this.s)
          if ((g || delete this.register[i], this.cache)) {
            g = this.cache
            for (let D = 0, B, z; D < g.h.length; D++)
              (z = g.h[D]),
                (B = g.cache[z]),
                B.includes(i) && (g.h.splice(D--, 1), delete g.cache[z])
          }
        }
        return this
      })
    function zt(i, g, b, D, B) {
      let z = 0
      if (i.constructor === Array)
        if (B) (g = i.indexOf(g)), g !== -1 ? 1 < i.length && (i.splice(g, 1), z++) : z++
        else {
          B = Math.min(i.length, b)
          for (let et = 0, nt; et < B; et++)
            (nt = i[et]) && ((z = zt(nt, g, b, D, B)), D || z || delete i[et])
        }
      else for (let et in i) (z = zt(i[et], g, b, D, B)) || delete i[et]
      return z
    }
    ;(ne.searchCache = St),
      (ne.export = function (i, g, b, D, B, z) {
        let et = !0
        typeof z > "u" &&
          (et = new Promise((yt) => {
            z = yt
          }))
        let nt, ot
        switch (B || (B = 0)) {
          case 0:
            if (((nt = "reg"), this.m)) {
              ot = de()
              for (let yt in this.register) ot[yt] = 1
            } else ot = this.register
            break
          case 1:
            ;(nt = "cfg"), (ot = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(nt = "map"), (ot = this.map)
            break
          case 3:
            ;(nt = "ctx"), (ot = this.h)
            break
          default:
            typeof b > "u" && z && z()
            return
        }
        return ce(i, g || this, b, nt, D, B, ot, z), et
      }),
      (ne.import = function (i, g) {
        if (g)
          switch ((ye(g) && (g = JSON.parse(g)), i)) {
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
      tt(Yt.prototype)
    function _e(i) {
      i = i.data
      var g = self._index
      let b = i.args
      var D = i.task
      switch (D) {
        case "init":
          ;(D = i.options || {}),
            (i = i.factory),
            (g = D.encode),
            (D.cache = !1),
            g && g.indexOf("function") === 0 && (D.encode = Function("return " + g)()),
            i
              ? (Function("return " + i)()(self),
                (self._index = new self.FlexSearch.Index(D)),
                delete self.FlexSearch)
              : (self._index = new Yt(D))
          break
        default:
          ;(i = i.id),
            (g = g[D].apply(g, b)),
            postMessage(D === "search" ? { id: i, msg: g } : { id: i })
      }
    }
    var Ue = 0
    function Se(i) {
      if (!(this instanceof Se)) return new Se(i)
      var g
      i ? mn((g = i.encode)) && (i.encode = g.toString()) : (i = {}),
        (g = (self || window)._factory) && (g = g.toString())
      let b = typeof window > "u" && self.exports,
        D = this
      ;(this.o = vn(g, b, i.worker)),
        (this.h = de()),
        this.o &&
          (b
            ? this.o.on("message", function (B) {
                D.h[B.id](B.msg), delete D.h[B.id]
              })
            : (this.o.onmessage = function (B) {
                ;(B = B.data), D.h[B.id](B.msg), delete D.h[B.id]
              }),
          this.o.postMessage({ task: "init", factory: g, options: i }))
    }
    Ye("add"), Ye("append"), Ye("search"), Ye("update"), Ye("remove")
    function Ye(i) {
      Se.prototype[i] = Se.prototype[i + "Async"] = function () {
        let g = this,
          b = [].slice.call(arguments)
        var D = b[b.length - 1]
        let B
        return (
          mn(D) && ((B = D), b.splice(b.length - 1, 1)),
          (D = new Promise(function (z) {
            setTimeout(function () {
              ;(g.h[++Ue] = z), g.o.postMessage({ task: i, id: Ue, args: b })
            })
          })),
          B ? (D.then(B), this) : D
        )
      }
    }
    function vn(i, g, b) {
      let D
      try {
        D = g
          ? new (Le().Worker)(__dirname + "/node/node.js")
          : i
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + _e.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(ye(b) ? b : "worker/worker.js", { type: "module" })
      } catch {}
      return D
    }
    function yn(i) {
      if (!(this instanceof yn)) return new yn(i)
      var g = i.document || i.doc || i,
        b
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = de()),
        (this.key = ((b = g.key || g.id) && wn(b, this.A)) || "id"),
        (this.m = le(i.fastupdate)),
        (this.C = (b = g.store) && b !== !0 && []),
        (this.store = b && de()),
        (this.I = (b = g.tag) && wn(b, this.A)),
        (this.l = b && de()),
        (this.cache = (b = i.cache) && new qt(b)),
        (i.cache = !1),
        (this.o = i.worker),
        (this.async = !1),
        (b = de())
      let D = g.index || g.field || g
      ye(D) && (D = [D])
      for (let B = 0, z, et; B < D.length; B++)
        (z = D[B]),
          ye(z) || ((et = z), (z = z.field)),
          (et = be(et) ? Object.assign({}, i, et) : i),
          this.o && ((b[z] = new Se(et)), b[z].o || (this.o = !1)),
          this.o || (b[z] = new Yt(et, this.register)),
          (this.K[B] = wn(z, this.A)),
          (this.h[B] = z)
      if (this.C)
        for (i = g.store, ye(i) && (i = [i]), g = 0; g < i.length; g++) this.C[g] = wn(i[g], this.A)
      this.index = b
    }
    function wn(i, g) {
      let b = i.split(":"),
        D = 0
      for (let B = 0; B < b.length; B++)
        (i = b[B]),
          0 <= i.indexOf("[]") && (i = i.substring(0, i.length - 2)) && (g[D] = !0),
          i && (b[D++] = i)
      return D < b.length && (b.length = D), 1 < D ? b : b[0]
    }
    function _n(i, g) {
      if (ye(g)) i = i[g]
      else for (let b = 0; i && b < g.length; b++) i = i[g[b]]
      return i
    }
    function sn(i, g, b, D, B) {
      if (((i = i[B]), D === b.length - 1)) g[B] = i
      else if (i)
        if (i.constructor === Array)
          for (g = g[B] = Array(i.length), B = 0; B < i.length; B++) sn(i, g, b, D, B)
        else (g = g[B] || (g[B] = de())), (B = b[++D]), sn(i, g, b, D, B)
    }
    function An(i, g, b, D, B, z, et, nt) {
      if ((i = i[et]))
        if (D === g.length - 1) {
          if (i.constructor === Array) {
            if (b[D]) {
              for (g = 0; g < i.length; g++) B.add(z, i[g], !0, !0)
              return
            }
            i = i.join(" ")
          }
          B.add(z, i, nt, !0)
        } else if (i.constructor === Array)
          for (et = 0; et < i.length; et++) An(i, g, b, D, B, z, et, nt)
        else (et = g[++D]), An(i, g, b, D, B, z, et, nt)
    }
    ;(ne = yn.prototype),
      (ne.add = function (i, g, b) {
        if ((be(i) && ((g = i), (i = _n(g, this.key))), g && (i || i === 0))) {
          if (!b && this.register[i]) return this.update(i, g)
          for (let D = 0, B, z; D < this.h.length; D++)
            (z = this.h[D]),
              (B = this.K[D]),
              ye(B) && (B = [B]),
              An(g, B, this.A, 0, this.index[z], i, B[0], b)
          if (this.I) {
            let D = _n(g, this.I),
              B = de()
            ye(D) && (D = [D])
            for (let z = 0, et, nt; z < D.length; z++)
              if (
                ((et = D[z]),
                !B[et] &&
                  ((B[et] = 1), (nt = this.l[et] || (this.l[et] = [])), !b || !nt.includes(i)) &&
                  ((nt[nt.length] = i), this.m))
              ) {
                let ot = this.register[i] || (this.register[i] = [])
                ot[ot.length] = nt
              }
          }
          if (this.store && (!b || !this.store[i])) {
            let D
            if (this.C) {
              D = de()
              for (let B = 0, z; B < this.C.length; B++)
                (z = this.C[B]), ye(z) ? (D[z] = g[z]) : sn(g, D, z, 0, z[0])
            }
            this.store[i] = D || g
          }
        }
        return this
      }),
      (ne.append = function (i, g) {
        return this.add(i, g, !0)
      }),
      (ne.update = function (i, g) {
        return this.remove(i).add(i, g)
      }),
      (ne.remove = function (i) {
        if ((be(i) && (i = _n(i, this.key)), this.register[i])) {
          for (
            var g = 0;
            g < this.h.length && (this.index[this.h[g]].remove(i, !this.o), !this.m);
            g++
          );
          if (this.I && !this.m)
            for (let b in this.l) {
              g = this.l[b]
              let D = g.indexOf(i)
              D !== -1 && (1 < g.length ? g.splice(D, 1) : delete this.l[b])
            }
          this.store && delete this.store[i], delete this.register[i]
        }
        return this
      }),
      (ne.search = function (i, g, b, D) {
        b || (!g && be(i) ? ((b = i), (i = "")) : be(g) && ((b = g), (g = 0)))
        let B = [],
          z = [],
          et,
          nt,
          ot,
          yt,
          Ct,
          lt,
          ct = 0
        if (b)
          if (b.constructor === Array) (ot = b), (b = null)
          else {
            if (
              ((i = b.query || i),
              (ot = (et = b.pluck) || b.index || b.field),
              (yt = b.tag),
              (nt = this.store && b.enrich),
              (Ct = b.bool === "and"),
              (g = b.limit || g || 100),
              (lt = b.offset || 0),
              yt && (ye(yt) && (yt = [yt]), !i))
            ) {
              for (let vt = 0, kt; vt < yt.length; vt++)
                (kt = Tn.call(this, yt[vt], g, lt, nt)) && ((B[B.length] = kt), ct++)
              return ct ? B : []
            }
            ye(ot) && (ot = [ot])
          }
        ot || (ot = this.h), (Ct = Ct && (1 < ot.length || (yt && 1 < yt.length)))
        let at = !D && (this.o || this.async) && []
        for (let vt = 0, kt, Rt, se; vt < ot.length; vt++) {
          let Me
          if (
            ((Rt = ot[vt]),
            ye(Rt) ||
              ((Me = Rt),
              (Rt = Me.field),
              (i = Me.query || i),
              (g = Me.limit || g),
              (nt = Me.enrich || nt)),
            at)
          )
            at[vt] = this.index[Rt].searchAsync(i, g, Me || b)
          else {
            if (
              (D ? (kt = D[vt]) : (kt = this.index[Rt].search(i, g, Me || b)),
              (se = kt && kt.length),
              yt && se)
            ) {
              let Jt = [],
                en = 0
              Ct && (Jt[0] = [kt])
              for (let sr = 0, Mn, $n; sr < yt.length; sr++)
                (Mn = yt[sr]),
                  (se = ($n = this.l[Mn]) && $n.length) && (en++, (Jt[Jt.length] = Ct ? [$n] : $n))
              en && ((kt = Ct ? At(Jt, g || 100, lt || 0) : Lt(kt, Jt)), (se = kt.length))
            }
            if (se) (z[ct] = Rt), (B[ct++] = kt)
            else if (Ct) return []
          }
        }
        if (at) {
          let vt = this
          return new Promise(function (kt) {
            Promise.all(at).then(function (Rt) {
              kt(vt.search(i, g, b, Rt))
            })
          })
        }
        if (!ct) return []
        if (et && (!nt || !this.store)) return B[0]
        for (let vt = 0, kt; vt < z.length; vt++) {
          if (((kt = B[vt]), kt.length && nt && (kt = Fn.call(this, kt)), et)) return kt
          B[vt] = { field: z[vt], result: kt }
        }
        return B
      })
    function Tn(i, g, b, D) {
      let B = this.l[i],
        z = B && B.length - b
      if (z && 0 < z)
        return (
          (z > g || b) && (B = B.slice(b, b + g)),
          D && (B = Fn.call(this, B)),
          { tag: i, result: B }
        )
    }
    function Fn(i) {
      let g = Array(i.length)
      for (let b = 0, D; b < i.length; b++) (D = i[b]), (g[b] = { id: D, doc: this.store[D] })
      return g
    }
    ;(ne.contain = function (i) {
      return !!this.register[i]
    }),
      (ne.get = function (i) {
        return this.store[i]
      }),
      (ne.set = function (i, g) {
        return (this.store[i] = g), this
      }),
      (ne.searchCache = St),
      (ne.export = function (i, g, b, D, B, z) {
        let et
        if (
          (typeof z > "u" &&
            (et = new Promise((nt) => {
              z = nt
            })),
          B || (B = 0),
          D || (D = 0),
          D < this.h.length)
        ) {
          let nt = this.h[D],
            ot = this.index[nt]
          ;(g = this),
            setTimeout(function () {
              ot.export(i, g, B ? nt : "", D, B++, z) || (D++, (B = 1), g.export(i, g, nt, D, B, z))
            })
        } else {
          let nt, ot
          switch (B) {
            case 1:
              ;(nt = "tag"), (ot = this.l), (b = null)
              break
            case 2:
              ;(nt = "store"), (ot = this.store), (b = null)
              break
            default:
              z()
              return
          }
          ce(i, this, b, nt, D, B, ot, z)
        }
        return et
      }),
      (ne.import = function (i, g) {
        if (g)
          switch ((ye(g) && (g = JSON.parse(g)), i)) {
            case "tag":
              this.l = g
              break
            case "reg":
              ;(this.m = !1), (this.register = g)
              for (let D = 0, B; D < this.h.length; D++)
                (B = this.index[this.h[D]]), (B.register = g), (B.m = !1)
              break
            case "store":
              this.store = g
              break
            default:
              i = i.split(".")
              let b = i[0]
              ;(i = i[1]), b && i && this.index[b].import(i, g)
          }
      }),
      tt(yn.prototype)
    var zn = { encode: Pn, F: !1, G: "" },
      kn = [
        ve("[\xE0\xE1\xE2\xE3\xE4\xE5]"),
        "a",
        ve("[\xE8\xE9\xEA\xEB]"),
        "e",
        ve("[\xEC\xED\xEE\xEF]"),
        "i",
        ve("[\xF2\xF3\xF4\xF5\xF6\u0151]"),
        "o",
        ve("[\xF9\xFA\xFB\xFC\u0171]"),
        "u",
        ve("[\xFD\u0177\xFF]"),
        "y",
        ve("\xF1"),
        "n",
        ve("[\xE7c]"),
        "k",
        ve("\xDF"),
        "s",
        ve(" & "),
        " and ",
      ]
    function Pn(i) {
      var g = (i = "" + i)
      return (
        g.normalize && (g = g.normalize("NFD").replace(on, "")),
        Pe.call(this, g.toLowerCase(), !i.normalize && kn)
      )
    }
    var d = { encode: j, F: !1, G: "strict" },
      M = /[^a-z0-9]+/,
      S = {
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
    function j(i) {
      i = Pn.call(this, i).join(" ")
      let g = []
      if (i) {
        let b = i.split(M),
          D = b.length
        for (let B = 0, z, et = 0; B < D; B++)
          if ((i = b[B]) && (!this.filter || !this.filter[i])) {
            z = i[0]
            let nt = S[z] || z,
              ot = nt
            for (let yt = 1; yt < i.length; yt++) {
              z = i[yt]
              let Ct = S[z] || z
              Ct && Ct !== ot && ((nt += Ct), (ot = Ct))
            }
            g[et++] = nt
          }
      }
      return g
    }
    var I = { encode: ft, F: !1, G: "" },
      J = [
        ve("ae"),
        "a",
        ve("oe"),
        "o",
        ve("sh"),
        "s",
        ve("th"),
        "t",
        ve("ph"),
        "f",
        ve("pf"),
        "f",
        ve("(?![aeo])h(?![aeo])"),
        "",
        ve("(?!^[aeo])h(?!^[aeo])"),
        "",
      ]
    function ft(i, g) {
      return (
        i &&
          ((i = j.call(this, i).join(" ")),
          2 < i.length && (i = Qe(i, J)),
          g || (1 < i.length && (i = Ze(i)), i && (i = i.split(" ")))),
        i || []
      )
    }
    var ht = { encode: It, F: !1, G: "" },
      xt = ve("(?!\\b)[aeo]")
    function It(i) {
      return (
        i &&
          ((i = ft.call(this, i, !0)),
          1 < i.length && (i = i.replace(xt, "")),
          1 < i.length && (i = Ze(i)),
          i && (i = i.split(" "))),
        i || []
      )
    }
    ;(Ee["latin:default"] = qe),
      (Ee["latin:simple"] = zn),
      (Ee["latin:balance"] = d),
      (Ee["latin:advanced"] = I),
      (Ee["latin:extra"] = ht)
    var Kt = {
      Index: Yt,
      Document: yn,
      Worker: Se,
      registerCharset: function (i, g) {
        Ee[i] = g
      },
      registerLanguage: function (i, g) {
        Ie[i] = g
      },
    }
    function pe(i, g) {
      return g == null && ((g = i), (i = 0)), i + Math.floor(Math.random() * (g - i + 1))
    }
    function ie(i, g) {
      let b = [...i]
      var D = b.length
      g = Math.max(Math.min(g, D), 0)
      for (var B = D - 1, z = 0; z < g; z++) {
        var et = pe(z, B),
          nt = i[z]
        ;(b[z] = b[et]), (b[et] = nt)
      }
      return b.slice(0, g)
    }
    var Zt = "https://curius.app",
      Tt = `${Zt}/aaron-pham`,
      ue = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/,
      Te = { method: "POST", headers: { "Content-Type": "application/json" } },
      Ge = {
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
      je = {
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
      Ce = (i) => je[i] ?? null
    function ln(i) {
      let g = i.match(ue)
      return g ? g[1] : ""
    }
    function Cn(i) {
      let g = new Date(),
        b = i instanceof Date ? i : new Date(i),
        D = Math.floor((g.getTime() - b.getTime()) / 1e3),
        B = Math.floor(D / (3600 * 24)),
        z = Math.floor((D % (3600 * 24)) / 3600),
        et = Math.floor((D % 3600) / 60)
      return B > 1
        ? `${B} days ago`
        : B === 1
          ? "1 day ago"
          : z > 1
            ? `${z} hours ago`
            : z === 1
              ? "1 hour ago"
              : et > 1
                ? `${et} minutes ago`
                : et === 1
                  ? "1 minute ago"
                  : "just now"
    }
    var Dn = { Link: Ge, elementType: "div", addFaIcon: !1 },
      cn,
      N = (i) => {
        let { Link: g, elementType: b, addFaIcon: D } = { ...Dn, ...i }
        if (b === void 0) throw new Error("Element type is undefined")
        cn = cn || new DOMParser()
        let B = document.createElement(b)
        B.classList.add("curius-item-title")
        let z = document.createElement("div")
        z.classList.add("curius-item-link")
        let et = document.createElement("a")
        Object.assign(et, {
          href: g.link,
          target: "_blank",
          rel: "noopener noreferrer",
          innerHTML: g.title,
        }),
          z.appendChild(et)
        let nt = document.createElement("div")
        if ((nt.classList.add("curius-item-address"), (nt.textContent = ln(g.link)), D)) {
          let yt = document.createElement("div")
          switch ((yt.classList.add("curius-item-fa"), !0)) {
            case /twitter/.test(g.link):
              yt.innerHTML = Ce("twitter")
              break
            case /youtube/.test(g.link):
              yt.innerHTML = Ce("youtube")
              break
            case /github/.test(g.link):
              yt.innerHTML = Ce("github")
              break
            case /arxiv/.test(g.link):
              yt.innerHTML = Ce("arxiv")
              break
            default:
              yt.innerHTML = Ce("default")
              break
          }
          B.appendChild(yt)
        }
        B.append(z, nt)
        let ot = document.createElement("div")
        if ((ot.classList.add("curius-item-icons"), g.favorite)) {
          let yt = document.createElement("div")
          yt.classList.add("curius-item-favorite"),
            (yt.innerHTML = Ce("favourite")),
            ot.appendChild(yt)
        }
        return B.appendChild(ot), B
      }
    async function R() {
      return fetch("https://raw.aarnphm.xyz/api/curius?query=following", Te)
        .then((i) => i.json())
        .then((i) => {
          if (i === void 0 || i.following === void 0) throw new Error("No following data")
          return i.following
        })
    }
    async function a() {
      let i = await fetch("https://raw.aarnphm.xyz/api/curius?query=user", Te)
          .then((b) => b.json())
          .then((b) => {
            if (b === void 0 || b.user === void 0) throw new Error("Failed to fetch user")
            return b.user
          }),
        g = await R()
      return {
        links: await fetch("https://raw.aarnphm.xyz/api/curius?query=links", Te)
          .then((b) => b.json())
          .then((b) => {
            if (b === void 0 || b.links === void 0) throw new Error("Failed to fetch links")
            return b.links
          }),
        user: i,
        following: g,
      }
    }
    function h(i) {
      let g = new Map()
      return (
        (i.links ?? [])
          .filter((b) => b.trails.length > 0)
          .map((b) => {
            b.trails.map((D) => {
              g.has(D.trailName) || g.set(D.trailName, { trail: D, links: new Map() }),
                g.get(D.trailName).links.set(b.id, b)
            })
          }),
        g
      )
    }
    var v = (i) => {
      let g = document.getElementById("trail-list"),
        b = document.getElementsByClassName("curius-trail")[0]
      if (!g || !b) return
      let D = parseInt(b.dataset.limits) ?? 5,
        B = b.dataset.locale
      ge(g)
      for (let [z, { trail: et, links: nt }] of Array.from(i.entries()).slice(0, 4)) {
        let ot = Array.from(nt.values()),
          yt = Math.max(0, ot.length - D)
        g.appendChild(E(z, ot.slice(0, D), et, yt, B))
      }
    }
    function E(i, g, b, D, B) {
      let z = document.createElement("li")
      z.classList.add("trails-li")
      let et = document.createElement("div")
      et.classList.add("curius-trail-header"),
        (et.innerHTML = `<span class="trail-title">sentier: ${i}</span><span class="trail-description">${b.description}</span>`)
      let nt = `${Zt}/trail/${b.slug}`,
        ot = document.createElement("ul")
      ot.classList.add("trail-ul"),
        ot.append(
          ...g.map((Ct) => {
            let lt = N({ Link: Ct, elementType: "li" })
            return (
              xe(
                lt,
                [
                  "mouseenter",
                  () => {
                    let ct = lt.querySelector(".curius-item-favorite")
                    ct && ct.classList.add("focus"), lt.classList.add("focus")
                  },
                ],
                [
                  "mouseleave",
                  () => {
                    let ct = lt.querySelector(".curius-item-favorite")
                    ct && ct.classList.remove("focus"), lt.classList.remove("focus")
                  },
                ],
                [
                  "click",
                  (ct) => {
                    ct.target instanceof HTMLAnchorElement || window.open(nt, "_blank")
                  },
                ],
              ),
              lt
            )
          }),
        )
      let yt = document.createElement("div")
      return (
        yt.classList.add("see-more"),
        (yt.innerHTML = `<span><a href=${nt} target="_blank">${D > 0 ? Ve(B).components.recentNotes.seeRemainingMore({ remaining: D }) : "Void de plus \u2192"}</a></span>`),
        z.append(et, ot, yt),
        z
      )
    }
    var A = new Kt.Document({
        charset: "latin:advanced",
        document: {
          id: "id",
          index: [...Object.keys(Ge).map((i) => ({ field: i, tokenize: "forward" }))],
        },
      }),
      T = 20,
      q = 30,
      O = (i) => {
        let g = i.split(/\s+/).filter((D) => D.trim() !== ""),
          b = g.length
        if (b > 1) for (let D = 1; D < b; D++) g.push(g.slice(0, D + 1).join(" "))
        return g.sort((D, B) => B.length - D.length)
      }
    function U(i, g, b) {
      let D = O(i),
        B = g.split(/\s+/).filter((ot) => ot !== ""),
        z = 0,
        et = B.length - 1
      if (b) {
        let ot = (ct) => D.some((at) => ct.toLowerCase().startsWith(at.toLowerCase())),
          yt = B.map(ot),
          Ct = 0,
          lt = 0
        for (let ct = 0; ct < Math.max(B.length - q, 0); ct++) {
          let at = yt.slice(ct, ct + q).reduce((vt, kt) => vt + (kt ? 1 : 0), 0)
          at >= Ct && ((Ct = at), (lt = ct))
        }
        ;(z = Math.max(lt - q, 0)), (et = Math.min(z + 2 * q, B.length - 1)), (B = B.slice(z, et))
      }
      let nt = B.map((ot) => {
        for (let yt of D)
          if (ot.toLowerCase().includes(yt.toLowerCase())) {
            let Ct = new RegExp(yt.toLowerCase(), "gi")
            return ot.replace(Ct, '<span class="highlight">$&</span>')
          }
        return ot
      }).join(" ")
      return `${z === 0 ? "" : "..."}${nt}${et === B.length - 1 ? "" : "..."}`
    }
    async function P(i) {
      let g = ie(i, 20),
        b = document.getElementById("curius-bar"),
        D = document.getElementById("curius-search-container")
      async function B(at) {
        let vt = at.target.value
        D?.classList.toggle("active", vt !== "")
        let kt =
            (await A?.searchAsync({
              query: vt,
              limit: T,
              index: ["title", "snippet", "topics"],
            })) ?? [],
          Rt = (Me) => {
            let Jt = kt.filter((en) => en.field === Me)
            return Jt.length === 0 ? [] : [...Jt[0].result]
          },
          se = [...new Set([...Rt("title"), ...Rt("snippet"), ...Rt("topics")])].map((Me) =>
            z(vt, Me),
          )
        nt(se)
      }
      let z = (at, vt) => {
          let kt = i[vt]
          return { ...kt, title: U(at, kt.title), snippet: U(at, kt.snippet, !0) }
        },
        et = document.getElementsByClassName("curius-notes")[0]
      function nt(at) {
        D &&
          (ge(D),
          at.length === 0
            ? (D.innerHTML =
                '<a class="curius-search-link"><span class="curius-search-title">No results found.</span><p class="curius-search-snippet">Try another search term?</p></a>')
            : D?.append(...at.map(ct)))
      }
      function ot(at) {
        if (at.key === "k" && (at.ctrlKey || at.metaKey)) {
          at.preventDefault(),
            et?.classList.contains("active") && et.classList.remove("active"),
            D?.classList.contains("active") ? lt() : Ct(g)
          return
        }
        D?.classList.contains("active") &&
          (at.key === "Enter"
            ? D?.contains(document.activeElement)
              ? document.activeElement.click()
              : document.getElementsByClassName("curius-search-link")[0]?.click()
            : at.key === "ArrowUp" || (at.shiftKey && at.key === "Tab")
              ? (at.preventDefault(),
                D?.contains(document.activeElement) &&
                  document.activeElement?.previousElementSibling?.focus())
              : (at.key === "ArrowDown" || at.key === "Tab") &&
                (at.preventDefault(),
                D?.contains(document.activeElement)
                  ? document.activeElement?.nextElementSibling?.focus()
                  : document.getElementsByClassName("curius-search-link")[0]?.focus()))
      }
      function yt() {
        b?.classList.contains("active") ||
          (et?.classList.contains("active") && et.classList.remove("active"),
          D?.classList.contains("active") ? lt() : Ct(g))
      }
      function Ct(at) {
        D &&
          (D?.classList.add("active"),
          b?.focus(),
          b?.scrollIntoView({ behavior: "smooth" }),
          nt(at))
      }
      function lt() {
        D && D.classList.remove("active"), b && (b.value = "")
      }
      function ct(at) {
        let vt = document.createElement("a")
        vt.classList.add("curius-search-link"),
          (vt.target = "_blank"),
          (vt.href = at.link),
          (vt.innerHTML = `<span class="curius-search-title">${at.title}</span><p class="curius-search-snippet">${at.snippet}</div>`)
        let kt = (Rt) => {
          Rt.altKey || Rt.ctrlKey || Rt.metaKey || Rt.shiftKey || lt()
        }
        return (
          vt.addEventListener("click", kt),
          window.addCleanup(() => vt.removeEventListener("click", kt)),
          vt
        )
      }
      document.addEventListener("keydown", ot),
        window.addCleanup(() => document.removeEventListener("keydown", ot)),
        b?.addEventListener("input", B),
        window.addCleanup(() => b?.removeEventListener("input", B)),
        b?.addEventListener("click", yt),
        window.addCleanup(() => b?.removeEventListener("click", yt)),
        Oe(D, lt),
        await G(i)
    }
    async function G(i) {
      let g = 0,
        b = []
      for (let D of i) b.push(A.addAsync(g++, { ...D }))
      return await Promise.all(b)
    }
    var Y = 2 * 60 * 1e3,
      V = null
    function ut(i) {
      let g = document.createElement("li")
      ;(g.id = `curius-item-${i.id}`), g.classList.add("curius-item")
      let b = (B) => {
        let z = document.createElement("div")
        z.classList.add("curius-item-metadata")
        let et = document.createElement("ul")
        et.classList.add("curius-item-tags"),
          (et.innerHTML =
            B.topics.length > 0
              ? `${B.topics.map((Ct) => (Ct.public ? `<li><a href="https://curius.app/aaron-pham/${Ct.slug}" target="_blank">${Ct.topic}</a></li>` : "")).join("")}`
              : "")
        let nt = document.createElement("div")
        nt.id = `curius-misc-${B.id}`
        let ot = document.createElement("span")
        ot.id = `curius-span-${B.id}`
        let yt = new Date(B.modifiedDate)
        if (
          ((ot.innerHTML = `<time datetime=${B.modifiedDate} title="${yt.toUTCString()}">${Cn(B.createdDate)}</time>`),
          nt.appendChild(ot),
          B.highlights.length > 0)
        ) {
          let Ct = document.createElement("div")
          ;(Ct.id = `curius-highlights-${B.id}`),
            (Ct.innerHTML = `${B.highlights.length} ${B.highlights.length > 0 ? "highlights" : "highlight"}`),
            nt.appendChild(Ct)
          let lt = document.getElementById("highlight-modal"),
            ct = document.getElementById("highlight-modal-list")
          xe(
            Ct,
            [
              "mouseenter",
              () => {
                let at = B.highlights
                !lt ||
                  !ct ||
                  ((ct.innerHTML = ""),
                  g.classList.remove("focus"),
                  at.forEach((vt) => {
                    let kt = document.createElement("li")
                    ;(kt.textContent = vt.highlight), ct.appendChild(kt)
                  }),
                  (lt.style.visibility = "visible"),
                  lt.classList.add("active"))
              },
            ],
            [
              "mouseleave",
              () => {
                g.classList.add("focus"),
                  lt && ((lt.style.visibility = "hidden"), lt.classList.remove("active"))
              },
            ],
            [
              "mousemove",
              ({ pageX: at, pageY: vt }) => {
                g.classList.remove("focus"),
                  lt &&
                    (lt.classList.add("active"),
                    (lt.style.left = `${at + 10}px`),
                    (lt.style.top = `${vt + 10}px`))
              },
            ],
          )
        }
        return z.append(et, nt), z
      }
      g.append(N({ Link: i, addFaIcon: !0 }), b(i)), (g.dataset.items = JSON.stringify(!0))
      let D = (B) => {
        let z = document.getElementsByClassName("curius-notes")[0]
        if (!(B.altKey || B.ctrlKey || B.metaKey || B.shiftKey)) {
          if (
            (V && V.classList.remove("active"),
            z && z.classList.remove("active"),
            (V = g),
            V.classList.add("active"),
            i.highlights.length > 0)
          ) {
            if (!z) return
            z.classList.add("active"), rt(i, z, V)
          }
          B.target instanceof HTMLAnchorElement ||
            z?.classList.contains("active") ||
            window.open(i.link, "_blank")
        }
      }
      return (
        Oe(g, () => g.classList.remove("active")),
        xe(
          g,
          ["click", D],
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
    function rt(i, g, b) {
      let D = g.querySelector("#note-link"),
        B = g.querySelector(".curius-note-snippet"),
        z = g.querySelector(".curius-note-highlights")
      ;(D.innerHTML = `<span class="curius-item-span">${i.title}</span>`),
        (D.href = i.link),
        (D.target = "_blank"),
        (D.rel = "noopener noreferrer")
      let et = document.querySelector(".icon-container"),
        nt = () => {
          g.classList.remove("active"), b.classList.remove("active")
        }
      if (
        (et?.addEventListener("click", nt),
        window.addCleanup(() => et?.removeEventListener("click", nt)),
        Oe(g, nt),
        ge(B),
        (B.textContent = i.metadata ? i.metadata.full_text : i.snippet),
        ge(z),
        i.highlights.length !== 0)
      )
        for (let ot of i.highlights) {
          let yt = document.createElement("li"),
            Ct = document.createElement("a")
          ;(Ct.dataset.highlight = ot.id.toString()),
            (Ct.href = `${i.link}?curius=${ot.userId}`),
            (Ct.target = "_blank"),
            (Ct.rel = "noopener noreferrer"),
            (Ct.textContent = ot.highlight),
            yt.appendChild(Ct),
            z.appendChild(yt)
        }
    }
    document.addEventListener("nav", async (i) => {
      if (i.detail.url !== "curius") return
      let g = [
        ".curius-container",
        "#curius-fetching-text",
        "#curius-fragments",
        ".navigation-container",
      ].map((ct) => document.querySelector(ct))
      if (g.some((ct) => ct === null)) return
      let [b, D, B, z] = g,
        et = document.querySelector(".curius-friends"),
        nt = document.getElementsByClassName("curius-trail")[0]
      ;(D.textContent = "R\xE9cup\xE9ration des liens curius"), D.classList.toggle("active", !0)
      let ot = await a()
      D.classList.toggle("active", !1)
      let yt = (ct) =>
          ct.length === 0
            ? ((b.innerHTML = "<p>\xC9chec de la r\xE9cup\xE9ration des liens.</p>"), [])
            : ct.filter((at) => at.trails.length === 0),
        Ct = yt(ot.links)
      if (Ct.length === 0) return
      v(h(ot)),
        await P(Ct),
        B.append(...Ct.map(ut)),
        z.classList.toggle("active", !0),
        et && et.classList.toggle("active", !0),
        nt && nt.classList.toggle("active", !0)
      let lt = document.getElementById("curius-refetch")
      if (lt) {
        let ct = (kt) => {
          let Rt = document.getElementById("curius-refetch")
          !Rt ||
            !Rt.classList.contains("disabled") ||
            ((kt.key === "r" || kt.key === "R") &&
              (kt.ctrlKey || kt.metaKey) &&
              (kt.preventDefault(), kt.stopPropagation()))
        }
        document.addEventListener("keydown", ct),
          window.addCleanup(() => document.removeEventListener("keydown", ct))
        let at = !1,
          vt = async () => {
            if (at) return
            let kt = document.getElementById("curius-search-container")
            kt?.classList.contains("active") && kt.classList.remove("active"),
              lt.classList.add("disabled"),
              (lt.style.opacity = "0.5")
            let Rt = document.getElementById("trail-list"),
              se = document.getElementsByClassName("curius-notes")[0]
            ge(B),
              ge(Rt),
              se?.classList.toggle("active", !1),
              z.classList.toggle("active", !1),
              et?.classList.toggle("active", !1),
              nt?.classList.toggle("active", !1),
              D.classList.toggle("active", !0),
              (D.textContent = "Rafra\xEEchissement des liens curius")
            let Me = await a()
            D.classList.toggle("active", !1), v(h(Me))
            let Jt = yt(Me.links)
            Jt.length !== 0 &&
              (await P(Me.links),
              B.append(...Jt.map(ut)),
              z.classList.toggle("active", !0),
              et?.classList.toggle("active", !0),
              nt?.classList.toggle("active", !0),
              (at = !0),
              setTimeout(() => {
                lt.classList.remove("disabled"), (at = !1)
              }, Y))
          }
        lt.addEventListener("click", vt),
          window.addCleanup(() => lt.removeEventListener("click", vt)),
          xe(
            lt,
            [
              "mouseenter",
              () => (lt.style.opacity = lt.classList.contains("disabled") ? "0.5" : "1"),
            ],
            [
              "mouseleave",
              () => (lt.style.opacity = lt.classList.contains("disabled") ? "0.5" : "1"),
            ],
          )
      }
    })
  })(),
  (function () {
    var Be = (d, M) => () => (M || d((M = { exports: {} }).exports, M), M.exports),
      Le = Be(() => {})
    function Oe(d) {
      for (; d.firstChild; ) d.removeChild(d.firstChild)
    }
    function ge(d, ...M) {
      xe(
        d,
        ["mouseenter", () => d.classList.add(...M)],
        ["mouseleave", () => d.classList.remove(...M)],
      )
    }
    function xe(d, ...M) {
      d &&
        M.forEach(([S, j]) => {
          let I = (J) => j(J)
          d.addEventListener(S, I), window.addCleanup(() => d.removeEventListener(S, I))
        })
    }
    var Gt
    function $e(d) {
      return typeof d < "u" ? d : !0
    }
    function ze(d) {
      let M = Array(d)
      for (let S = 0; S < d; S++) M[S] = Xt()
      return M
    }
    function Xt() {
      return Object.create(null)
    }
    function rn(d, M) {
      return M.length - d.length
    }
    function he(d) {
      return typeof d == "string"
    }
    function Vt(d) {
      return typeof d == "object"
    }
    function Ne(d) {
      return typeof d == "function"
    }
    function ee(d, M) {
      var S = me
      if (
        d &&
        (M && (d = ke(d, M)),
        this.H && (d = ke(d, this.H)),
        this.J && 1 < d.length && (d = ke(d, this.J)),
        S || S === "")
      ) {
        if (((M = d.split(S)), this.filter)) {
          ;(d = this.filter), (S = M.length)
          let j = []
          for (let I = 0, J = 0; I < S; I++) {
            let ft = M[I]
            ft && !d[ft] && (j[J++] = ft)
          }
          d = j
        } else d = M
        return d
      }
      return d
    }
    var me = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      pn = /[\u0300-\u036f]/g
    function ae(d, M) {
      let S = Object.keys(d),
        j = S.length,
        I = [],
        J = "",
        ft = 0
      for (let ht = 0, xt, It; ht < j; ht++)
        (xt = S[ht]),
          (It = d[xt])
            ? ((I[ft++] = te(M ? "(?!\\b)" + xt + "(\\b|_)" : xt)), (I[ft++] = It))
            : (J += (J ? "|" : "") + xt)
      return J && ((I[ft++] = te(M ? "(?!\\b)(" + J + ")(\\b|_)" : "(" + J + ")")), (I[ft] = "")), I
    }
    function ke(d, M) {
      for (let S = 0, j = M.length; S < j && ((d = d.replace(M[S], M[S + 1])), d); S += 2);
      return d
    }
    function te(d) {
      return new RegExp(d, "g")
    }
    function Ke(d) {
      let M = "",
        S = ""
      for (let j = 0, I = d.length, J; j < I; j++) (J = d[j]) !== S && (M += S = J)
      return M
    }
    var gn = { encode: Xe, F: !1, G: "" }
    function Xe(d) {
      return ee.call(this, ("" + d).toLowerCase(), !1)
    }
    var Ve = {},
      ne = {}
    function le(d) {
      un(d, "add"), un(d, "append"), un(d, "search"), un(d, "update"), un(d, "remove")
    }
    function un(d, M) {
      d[M + "Async"] = function () {
        let S = this,
          j = arguments
        var I = j[j.length - 1]
        let J
        return (
          Ne(I) && ((J = I), delete j[j.length - 1]),
          (I = new Promise(function (ft) {
            setTimeout(function () {
              S.async = !0
              let ht = S[M].apply(S, j)
              ;(S.async = !1), ft(ht)
            })
          })),
          J ? (I.then(J), this) : I
        )
      }
    }
    function de(d, M, S, j) {
      let I = d.length,
        J = [],
        ft,
        ht,
        xt = 0
      j && (j = [])
      for (let It = I - 1; 0 <= It; It--) {
        let Kt = d[It],
          pe = Kt.length,
          ie = Xt(),
          Zt = !ft
        for (let Tt = 0; Tt < pe; Tt++) {
          let ue = Kt[Tt],
            Te = ue.length
          if (Te)
            for (let Ge = 0, je, Ce; Ge < Te; Ge++)
              if (((Ce = ue[Ge]), ft)) {
                if (ft[Ce]) {
                  if (!It) {
                    if (S) S--
                    else if (((J[xt++] = Ce), xt === M)) return J
                  }
                  ;(It || j) && (ie[Ce] = 1), (Zt = !0)
                }
                if (j && ((je = (ht[Ce] || 0) + 1), (ht[Ce] = je), je < I)) {
                  let ln = j[je - 2] || (j[je - 2] = [])
                  ln[ln.length] = Ce
                }
              } else ie[Ce] = 1
        }
        if (j) ft || (ht = ie)
        else if (!Zt) return []
        ft = ie
      }
      if (j)
        for (let It = j.length - 1, Kt, pe; 0 <= It; It--) {
          ;(Kt = j[It]), (pe = Kt.length)
          for (let ie = 0, Zt; ie < pe; ie++)
            if (((Zt = Kt[ie]), !ft[Zt])) {
              if (S) S--
              else if (((J[xt++] = Zt), xt === M)) return J
              ft[Zt] = 1
            }
        }
      return J
    }
    function En(d, M) {
      let S = Xt(),
        j = Xt(),
        I = []
      for (let J = 0; J < d.length; J++) S[d[J]] = 1
      for (let J = 0, ft; J < M.length; J++) {
        ft = M[J]
        for (let ht = 0, xt; ht < ft.length; ht++)
          (xt = ft[ht]), S[xt] && !j[xt] && ((j[xt] = 1), (I[I.length] = xt))
      }
      return I
    }
    function ye(d) {
      ;(this.l = d !== !0 && d), (this.cache = Xt()), (this.h = [])
    }
    function be(d, M, S) {
      Vt(d) && (d = d.query)
      let j = this.cache.get(d)
      return j || ((j = this.search(d, M, S)), this.cache.set(d, j)), j
    }
    ;(ye.prototype.set = function (d, M) {
      if (!this.cache[d]) {
        var S = this.h.length
        for (S === this.l ? delete this.cache[this.h[S - 1]] : S++, --S; 0 < S; S--)
          this.h[S] = this.h[S - 1]
        this.h[0] = d
      }
      this.cache[d] = M
    }),
      (ye.prototype.get = function (d) {
        let M = this.cache[d]
        if (this.l && M && (d = this.h.indexOf(d))) {
          let S = this.h[d - 1]
          ;(this.h[d - 1] = this.h[d]), (this.h[d] = S)
        }
        return M
      })
    var mn = {
      memory: { charset: "latin:extra", D: 3, B: 4, m: !1 },
      performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } },
      match: { charset: "latin:extra", G: "reverse" },
      score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } },
      default: {},
    }
    function Pe(d, M, S, j, I, J, ft, ht) {
      setTimeout(function () {
        let xt = d(S ? S + "." + j : j, JSON.stringify(ft))
        xt && xt.then
          ? xt.then(function () {
              M.export(d, M, S, I, J + 1, ht)
            })
          : M.export(d, M, S, I, J + 1, ht)
      })
    }
    function De(d, M) {
      if (!(this instanceof De)) return new De(d)
      var S
      if (d) {
        he(d) ? (d = mn[d]) : (S = d.preset) && (d = Object.assign({}, S[S], d)), (S = d.charset)
        var j = d.lang
        he(S) && (S.indexOf(":") === -1 && (S += ":default"), (S = ne[S])), he(j) && (j = Ve[j])
      } else d = {}
      let I,
        J,
        ft = d.context || {}
      if (
        ((this.encode = d.encode || (S && S.encode) || Xe),
        (this.register = M || Xt()),
        (this.D = I = d.resolution || 9),
        (this.G = M = (S && S.G) || d.tokenize || "strict"),
        (this.depth = M === "strict" && ft.depth),
        (this.l = $e(ft.bidirectional)),
        (this.s = J = $e(d.optimize)),
        (this.m = $e(d.fastupdate)),
        (this.B = d.minlength || 1),
        (this.C = d.boost),
        (this.map = J ? ze(I) : Xt()),
        (this.A = I = ft.resolution || 1),
        (this.h = J ? ze(I) : Xt()),
        (this.F = (S && S.F) || d.rtl),
        (this.H = (M = d.matcher || (j && j.H)) && ae(M, !1)),
        (this.J = (M = d.stemmer || (j && j.J)) && ae(M, !0)),
        (S = M = d.filter || (j && j.filter)))
      ) {
        ;(S = M), (j = Xt())
        for (let ht = 0, xt = S.length; ht < xt; ht++) j[S[ht]] = 1
        S = j
      }
      ;(this.filter = S), (this.cache = (M = d.cache) && new ye(M))
    }
    ;(Gt = De.prototype),
      (Gt.append = function (d, M) {
        return this.add(d, M, !0)
      }),
      (Gt.add = function (d, M, S, j) {
        if (M && (d || d === 0)) {
          if (!j && !S && this.register[d]) return this.update(d, M)
          if (((M = this.encode(M)), (j = M.length))) {
            let It = Xt(),
              Kt = Xt(),
              pe = this.depth,
              ie = this.D
            for (let Zt = 0; Zt < j; Zt++) {
              let Tt = M[this.F ? j - 1 - Zt : Zt]
              var I = Tt.length
              if (Tt && I >= this.B && (pe || !Kt[Tt])) {
                var J = on(ie, j, Zt),
                  ft = ""
                switch (this.G) {
                  case "full":
                    if (2 < I) {
                      for (J = 0; J < I; J++)
                        for (var ht = I; ht > J; ht--)
                          if (ht - J >= this.B) {
                            var xt = on(ie, j, Zt, I, J)
                            ;(ft = Tt.substring(J, ht)), He(this, Kt, ft, xt, d, S)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < I) {
                      for (ht = I - 1; 0 < ht; ht--)
                        (ft = Tt[ht] + ft),
                          ft.length >= this.B && He(this, Kt, ft, on(ie, j, Zt, I, ht), d, S)
                      ft = ""
                    }
                  case "forward":
                    if (1 < I) {
                      for (ht = 0; ht < I; ht++)
                        (ft += Tt[ht]), ft.length >= this.B && He(this, Kt, ft, J, d, S)
                      break
                    }
                  default:
                    if (
                      (this.C && (J = Math.min((J / this.C(M, Tt, Zt)) | 0, ie - 1)),
                      He(this, Kt, Tt, J, d, S),
                      pe && 1 < j && Zt < j - 1)
                    ) {
                      for (
                        I = Xt(),
                          ft = this.A,
                          J = Tt,
                          ht = Math.min(pe + 1, j - Zt),
                          I[J] = 1,
                          xt = 1;
                        xt < ht;
                        xt++
                      )
                        if (
                          (Tt = M[this.F ? j - 1 - Zt - xt : Zt + xt]) &&
                          Tt.length >= this.B &&
                          !I[Tt]
                        ) {
                          I[Tt] = 1
                          let ue = this.l && Tt > J
                          He(
                            this,
                            It,
                            ue ? J : Tt,
                            on(ft + (j / 2 > ft ? 0 : 1), j, Zt, ht - 1, xt - 1),
                            d,
                            S,
                            ue ? Tt : J,
                          )
                        }
                    }
                }
              }
            }
            this.m || (this.register[d] = 1)
          }
        }
        return this
      })
    function on(d, M, S, j, I) {
      return S && 1 < d
        ? M + (j || 0) <= d
          ? S + (I || 0)
          : (((d - 1) / (M + (j || 0))) * (S + (I || 0)) + 1) | 0
        : 0
    }
    function He(d, M, S, j, I, J, ft) {
      let ht = ft ? d.h : d.map
      ;(!M[S] || (ft && !M[S][ft])) &&
        (d.s && (ht = ht[j]),
        ft
          ? ((M = M[S] || (M[S] = Xt())), (M[ft] = 1), (ht = ht[ft] || (ht[ft] = Xt())))
          : (M[S] = 1),
        (ht = ht[S] || (ht[S] = [])),
        d.s || (ht = ht[j] || (ht[j] = [])),
        (J && ht.includes(I)) ||
          ((ht[ht.length] = I),
          d.m && ((d = d.register[I] || (d.register[I] = [])), (d[d.length] = ht))))
    }
    Gt.search = function (d, M, S) {
      S || (!M && Vt(d) ? ((S = d), (d = S.query)) : Vt(M) && (S = M))
      let j = [],
        I,
        J,
        ft = 0
      if (S) {
        ;(d = S.query || d), (M = S.limit), (ft = S.offset || 0)
        var ht = S.context
        J = S.suggest
      }
      if (d && ((d = this.encode("" + d)), (I = d.length), 1 < I)) {
        S = Xt()
        var xt = []
        for (let Kt = 0, pe = 0, ie; Kt < I; Kt++)
          if ((ie = d[Kt]) && ie.length >= this.B && !S[ie])
            if (this.s || J || this.map[ie]) (xt[pe++] = ie), (S[ie] = 1)
            else return j
        ;(d = xt), (I = d.length)
      }
      if (!I) return j
      M || (M = 100), (ht = this.depth && 1 < I && ht !== !1), (S = 0)
      let It
      ht ? ((It = d[0]), (S = 1)) : 1 < I && d.sort(rn)
      for (let Kt, pe; S < I; S++) {
        if (
          ((pe = d[S]),
          ht
            ? ((Kt = Qe(this, j, J, M, ft, I === 2, pe, It)),
              (J && Kt === !1 && j.length) || (It = pe))
            : (Kt = Qe(this, j, J, M, ft, I === 1, pe)),
          Kt)
        )
          return Kt
        if (J && S === I - 1) {
          if (((xt = j.length), !xt)) {
            if (ht) {
              ;(ht = 0), (S = -1)
              continue
            }
            return j
          }
          if (xt === 1) return ve(j[0], M, ft)
        }
      }
      return de(j, M, ft, J)
    }
    function Qe(d, M, S, j, I, J, ft, ht) {
      let xt = [],
        It = ht ? d.h : d.map
      if ((d.s || (It = Ze(It, ft, ht, d.l)), It)) {
        let Kt = 0,
          pe = Math.min(It.length, ht ? d.A : d.D)
        for (
          let ie = 0, Zt = 0, Tt, ue;
          ie < pe &&
          !(
            (Tt = It[ie]) &&
            (d.s && (Tt = Ze(Tt, ft, ht, d.l)),
            I &&
              Tt &&
              J &&
              ((ue = Tt.length),
              ue <= I ? ((I -= ue), (Tt = null)) : ((Tt = Tt.slice(I)), (I = 0))),
            Tt && ((xt[Kt++] = Tt), J && ((Zt += Tt.length), Zt >= j)))
          );
          ie++
        );
        if (Kt) {
          if (J) return ve(xt, j, 0)
          M[M.length] = xt
          return
        }
      }
      return !S && xt
    }
    function ve(d, M, S) {
      return (
        (d = d.length === 1 ? d[0] : [].concat.apply([], d)),
        S || d.length > M ? d.slice(S, S + M) : d
      )
    }
    function Ze(d, M, S, j) {
      return S ? ((j = j && M > S), (d = (d = d[j ? M : S]) && d[j ? S : M])) : (d = d[M]), d
    }
    ;(Gt.contain = function (d) {
      return !!this.register[d]
    }),
      (Gt.update = function (d, M) {
        return this.remove(d).add(d, M)
      }),
      (Gt.remove = function (d, M) {
        let S = this.register[d]
        if (S) {
          if (this.m) for (let j = 0, I; j < S.length; j++) (I = S[j]), I.splice(I.indexOf(d), 1)
          else qe(this.map, d, this.D, this.s), this.depth && qe(this.h, d, this.A, this.s)
          if ((M || delete this.register[d], this.cache)) {
            M = this.cache
            for (let j = 0, I, J; j < M.h.length; j++)
              (J = M.h[j]),
                (I = M.cache[J]),
                I.includes(d) && (M.h.splice(j--, 1), delete M.cache[J])
          }
        }
        return this
      })
    function qe(d, M, S, j, I) {
      let J = 0
      if (d.constructor === Array)
        if (I) (M = d.indexOf(M)), M !== -1 ? 1 < d.length && (d.splice(M, 1), J++) : J++
        else {
          I = Math.min(d.length, S)
          for (let ft = 0, ht; ft < I; ft++)
            (ht = d[ft]) && ((J = qe(ht, M, S, j, I)), j || J || delete d[ft])
        }
      else for (let ft in d) (J = qe(d[ft], M, S, j, I)) || delete d[ft]
      return J
    }
    ;(Gt.searchCache = be),
      (Gt.export = function (d, M, S, j, I, J) {
        let ft = !0
        typeof J > "u" &&
          (ft = new Promise((It) => {
            J = It
          }))
        let ht, xt
        switch (I || (I = 0)) {
          case 0:
            if (((ht = "reg"), this.m)) {
              xt = Xt()
              for (let It in this.register) xt[It] = 1
            } else xt = this.register
            break
          case 1:
            ;(ht = "cfg"), (xt = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(ht = "map"), (xt = this.map)
            break
          case 3:
            ;(ht = "ctx"), (xt = this.h)
            break
          default:
            typeof S > "u" && J && J()
            return
        }
        return Pe(d, M || this, S, ht, j, I, xt, J), ft
      }),
      (Gt.import = function (d, M) {
        if (M)
          switch ((he(M) && (M = JSON.parse(M)), d)) {
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
      le(De.prototype)
    function tn(d) {
      d = d.data
      var M = self._index
      let S = d.args
      var j = d.task
      switch (j) {
        case "init":
          ;(j = d.options || {}),
            (d = d.factory),
            (M = j.encode),
            (j.cache = !1),
            M && M.indexOf("function") === 0 && (j.encode = Function("return " + M)()),
            d
              ? (Function("return " + d)()(self),
                (self._index = new self.FlexSearch.Index(j)),
                delete self.FlexSearch)
              : (self._index = new De(j))
          break
        default:
          ;(d = d.id),
            (M = M[j].apply(M, S)),
            postMessage(j === "search" ? { id: d, msg: M } : { id: d })
      }
    }
    var Ie = 0
    function Ee(d) {
      if (!(this instanceof Ee)) return new Ee(d)
      var M
      d ? Ne((M = d.encode)) && (d.encode = M.toString()) : (d = {}),
        (M = (self || window)._factory) && (M = M.toString())
      let S = typeof window > "u" && self.exports,
        j = this
      ;(this.o = gt(M, S, d.worker)),
        (this.h = Xt()),
        this.o &&
          (S
            ? this.o.on("message", function (I) {
                j.h[I.id](I.msg), delete j.h[I.id]
              })
            : (this.o.onmessage = function (I) {
                ;(I = I.data), j.h[I.id](I.msg), delete j.h[I.id]
              }),
          this.o.postMessage({ task: "init", factory: M, options: d }))
    }
    tt("add"), tt("append"), tt("search"), tt("update"), tt("remove")
    function tt(d) {
      Ee.prototype[d] = Ee.prototype[d + "Async"] = function () {
        let M = this,
          S = [].slice.call(arguments)
        var j = S[S.length - 1]
        let I
        return (
          Ne(j) && ((I = j), S.splice(S.length - 1, 1)),
          (j = new Promise(function (J) {
            setTimeout(function () {
              ;(M.h[++Ie] = J), M.o.postMessage({ task: d, id: Ie, args: S })
            })
          })),
          I ? (j.then(I), this) : j
        )
      }
    }
    function gt(d, M, S) {
      let j
      try {
        j = M
          ? new (Le().Worker)(__dirname + "/node/node.js")
          : d
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + tn.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(he(S) ? S : "worker/worker.js", { type: "module" })
      } catch {}
      return j
    }
    function At(d) {
      if (!(this instanceof At)) return new At(d)
      var M = d.document || d.doc || d,
        S
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = Xt()),
        (this.key = ((S = M.key || M.id) && Lt(S, this.A)) || "id"),
        (this.m = $e(d.fastupdate)),
        (this.C = (S = M.store) && S !== !0 && []),
        (this.store = S && Xt()),
        (this.I = (S = M.tag) && Lt(S, this.A)),
        (this.l = S && Xt()),
        (this.cache = (S = d.cache) && new ye(S)),
        (d.cache = !1),
        (this.o = d.worker),
        (this.async = !1),
        (S = Xt())
      let j = M.index || M.field || M
      he(j) && (j = [j])
      for (let I = 0, J, ft; I < j.length; I++)
        (J = j[I]),
          he(J) || ((ft = J), (J = J.field)),
          (ft = Vt(ft) ? Object.assign({}, d, ft) : d),
          this.o && ((S[J] = new Ee(ft)), S[J].o || (this.o = !1)),
          this.o || (S[J] = new De(ft, this.register)),
          (this.K[I] = Lt(J, this.A)),
          (this.h[I] = J)
      if (this.C)
        for (d = M.store, he(d) && (d = [d]), M = 0; M < d.length; M++) this.C[M] = Lt(d[M], this.A)
      this.index = S
    }
    function Lt(d, M) {
      let S = d.split(":"),
        j = 0
      for (let I = 0; I < S.length; I++)
        (d = S[I]),
          0 <= d.indexOf("[]") && (d = d.substring(0, d.length - 2)) && (M[j] = !0),
          d && (S[j++] = d)
      return j < S.length && (S.length = j), 1 < j ? S : S[0]
    }
    function qt(d, M) {
      if (he(M)) d = d[M]
      else for (let S = 0; d && S < M.length; S++) d = d[M[S]]
      return d
    }
    function St(d, M, S, j, I) {
      if (((d = d[I]), j === S.length - 1)) M[I] = d
      else if (d)
        if (d.constructor === Array)
          for (M = M[I] = Array(d.length), I = 0; I < d.length; I++) St(d, M, S, j, I)
        else (M = M[I] || (M[I] = Xt())), (I = S[++j]), St(d, M, S, j, I)
    }
    function jt(d, M, S, j, I, J, ft, ht) {
      if ((d = d[ft]))
        if (j === M.length - 1) {
          if (d.constructor === Array) {
            if (S[j]) {
              for (M = 0; M < d.length; M++) I.add(J, d[M], !0, !0)
              return
            }
            d = d.join(" ")
          }
          I.add(J, d, ht, !0)
        } else if (d.constructor === Array)
          for (ft = 0; ft < d.length; ft++) jt(d, M, S, j, I, J, ft, ht)
        else (ft = M[++j]), jt(d, M, S, j, I, J, ft, ht)
    }
    ;(Gt = At.prototype),
      (Gt.add = function (d, M, S) {
        if ((Vt(d) && ((M = d), (d = qt(M, this.key))), M && (d || d === 0))) {
          if (!S && this.register[d]) return this.update(d, M)
          for (let j = 0, I, J; j < this.h.length; j++)
            (J = this.h[j]),
              (I = this.K[j]),
              he(I) && (I = [I]),
              jt(M, I, this.A, 0, this.index[J], d, I[0], S)
          if (this.I) {
            let j = qt(M, this.I),
              I = Xt()
            he(j) && (j = [j])
            for (let J = 0, ft, ht; J < j.length; J++)
              if (
                ((ft = j[J]),
                !I[ft] &&
                  ((I[ft] = 1), (ht = this.l[ft] || (this.l[ft] = [])), !S || !ht.includes(d)) &&
                  ((ht[ht.length] = d), this.m))
              ) {
                let xt = this.register[d] || (this.register[d] = [])
                xt[xt.length] = ht
              }
          }
          if (this.store && (!S || !this.store[d])) {
            let j
            if (this.C) {
              j = Xt()
              for (let I = 0, J; I < this.C.length; I++)
                (J = this.C[I]), he(J) ? (j[J] = M[J]) : St(M, j, J, 0, J[0])
            }
            this.store[d] = j || M
          }
        }
        return this
      }),
      (Gt.append = function (d, M) {
        return this.add(d, M, !0)
      }),
      (Gt.update = function (d, M) {
        return this.remove(d).add(d, M)
      }),
      (Gt.remove = function (d) {
        if ((Vt(d) && (d = qt(d, this.key)), this.register[d])) {
          for (
            var M = 0;
            M < this.h.length && (this.index[this.h[M]].remove(d, !this.o), !this.m);
            M++
          );
          if (this.I && !this.m)
            for (let S in this.l) {
              M = this.l[S]
              let j = M.indexOf(d)
              j !== -1 && (1 < M.length ? M.splice(j, 1) : delete this.l[S])
            }
          this.store && delete this.store[d], delete this.register[d]
        }
        return this
      }),
      (Gt.search = function (d, M, S, j) {
        S || (!M && Vt(d) ? ((S = d), (d = "")) : Vt(M) && ((S = M), (M = 0)))
        let I = [],
          J = [],
          ft,
          ht,
          xt,
          It,
          Kt,
          pe,
          ie = 0
        if (S)
          if (S.constructor === Array) (xt = S), (S = null)
          else {
            if (
              ((d = S.query || d),
              (xt = (ft = S.pluck) || S.index || S.field),
              (It = S.tag),
              (ht = this.store && S.enrich),
              (Kt = S.bool === "and"),
              (M = S.limit || M || 100),
              (pe = S.offset || 0),
              It && (he(It) && (It = [It]), !d))
            ) {
              for (let Tt = 0, ue; Tt < It.length; Tt++)
                (ue = ce.call(this, It[Tt], M, pe, ht)) && ((I[I.length] = ue), ie++)
              return ie ? I : []
            }
            he(xt) && (xt = [xt])
          }
        xt || (xt = this.h), (Kt = Kt && (1 < xt.length || (It && 1 < It.length)))
        let Zt = !j && (this.o || this.async) && []
        for (let Tt = 0, ue, Te, Ge; Tt < xt.length; Tt++) {
          let je
          if (
            ((Te = xt[Tt]),
            he(Te) ||
              ((je = Te),
              (Te = je.field),
              (d = je.query || d),
              (M = je.limit || M),
              (ht = je.enrich || ht)),
            Zt)
          )
            Zt[Tt] = this.index[Te].searchAsync(d, M, je || S)
          else {
            if (
              (j ? (ue = j[Tt]) : (ue = this.index[Te].search(d, M, je || S)),
              (Ge = ue && ue.length),
              It && Ge)
            ) {
              let Ce = [],
                ln = 0
              Kt && (Ce[0] = [ue])
              for (let Cn = 0, Dn, cn; Cn < It.length; Cn++)
                (Dn = It[Cn]),
                  (Ge = (cn = this.l[Dn]) && cn.length) && (ln++, (Ce[Ce.length] = Kt ? [cn] : cn))
              ln && ((ue = Kt ? de(Ce, M || 100, pe || 0) : En(ue, Ce)), (Ge = ue.length))
            }
            if (Ge) (J[ie] = Te), (I[ie++] = ue)
            else if (Kt) return []
          }
        }
        if (Zt) {
          let Tt = this
          return new Promise(function (ue) {
            Promise.all(Zt).then(function (Te) {
              ue(Tt.search(d, M, S, Te))
            })
          })
        }
        if (!ie) return []
        if (ft && (!ht || !this.store)) return I[0]
        for (let Tt = 0, ue; Tt < J.length; Tt++) {
          if (((ue = I[Tt]), ue.length && ht && (ue = Yt.call(this, ue)), ft)) return ue
          I[Tt] = { field: J[Tt], result: ue }
        }
        return I
      })
    function ce(d, M, S, j) {
      let I = this.l[d],
        J = I && I.length - S
      if (J && 0 < J)
        return (
          (J > M || S) && (I = I.slice(S, S + M)),
          j && (I = Yt.call(this, I)),
          { tag: d, result: I }
        )
    }
    function Yt(d) {
      let M = Array(d.length)
      for (let S = 0, j; S < d.length; S++) (j = d[S]), (M[S] = { id: j, doc: this.store[j] })
      return M
    }
    ;(Gt.contain = function (d) {
      return !!this.register[d]
    }),
      (Gt.get = function (d) {
        return this.store[d]
      }),
      (Gt.set = function (d, M) {
        return (this.store[d] = M), this
      }),
      (Gt.searchCache = be),
      (Gt.export = function (d, M, S, j, I, J) {
        let ft
        if (
          (typeof J > "u" &&
            (ft = new Promise((ht) => {
              J = ht
            })),
          I || (I = 0),
          j || (j = 0),
          j < this.h.length)
        ) {
          let ht = this.h[j],
            xt = this.index[ht]
          ;(M = this),
            setTimeout(function () {
              xt.export(d, M, I ? ht : "", j, I++, J) || (j++, (I = 1), M.export(d, M, ht, j, I, J))
            })
        } else {
          let ht, xt
          switch (I) {
            case 1:
              ;(ht = "tag"), (xt = this.l), (S = null)
              break
            case 2:
              ;(ht = "store"), (xt = this.store), (S = null)
              break
            default:
              J()
              return
          }
          Pe(d, this, S, ht, j, I, xt, J)
        }
        return ft
      }),
      (Gt.import = function (d, M) {
        if (M)
          switch ((he(M) && (M = JSON.parse(M)), d)) {
            case "tag":
              this.l = M
              break
            case "reg":
              ;(this.m = !1), (this.register = M)
              for (let j = 0, I; j < this.h.length; j++)
                (I = this.index[this.h[j]]), (I.register = M), (I.m = !1)
              break
            case "store":
              this.store = M
              break
            default:
              d = d.split(".")
              let S = d[0]
              ;(d = d[1]), S && d && this.index[S].import(d, M)
          }
      }),
      le(At.prototype)
    var Ht = { encode: Nt, F: !1, G: "" },
      re = [
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
    function Nt(d) {
      var M = (d = "" + d)
      return (
        M.normalize && (M = M.normalize("NFD").replace(pn, "")),
        ee.call(this, M.toLowerCase(), !d.normalize && re)
      )
    }
    var Mt = { encode: _e, F: !1, G: "strict" },
      fe = /[^a-z0-9]+/,
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
    function _e(d) {
      d = Nt.call(this, d).join(" ")
      let M = []
      if (d) {
        let S = d.split(fe),
          j = S.length
        for (let I = 0, J, ft = 0; I < j; I++)
          if ((d = S[I]) && (!this.filter || !this.filter[d])) {
            J = d[0]
            let ht = zt[J] || J,
              xt = ht
            for (let It = 1; It < d.length; It++) {
              J = d[It]
              let Kt = zt[J] || J
              Kt && Kt !== xt && ((ht += Kt), (xt = Kt))
            }
            M[ft++] = ht
          }
      }
      return M
    }
    var Ue = { encode: Ye, F: !1, G: "" },
      Se = [
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
    function Ye(d, M) {
      return (
        d &&
          ((d = _e.call(this, d).join(" ")),
          2 < d.length && (d = ke(d, Se)),
          M || (1 < d.length && (d = Ke(d)), d && (d = d.split(" ")))),
        d || []
      )
    }
    var vn = { encode: wn, F: !1, G: "" },
      yn = te("(?!\\b)[aeo]")
    function wn(d) {
      return (
        d &&
          ((d = Ye.call(this, d, !0)),
          1 < d.length && (d = d.replace(yn, "")),
          1 < d.length && (d = Ke(d)),
          d && (d = d.split(" "))),
        d || []
      )
    }
    ;(ne["latin:default"] = gn),
      (ne["latin:simple"] = Ht),
      (ne["latin:balance"] = Mt),
      (ne["latin:advanced"] = Ue),
      (ne["latin:extra"] = vn)
    var _n = {
        Index: De,
        Document: At,
        Worker: Ee,
        registerCharset: function (d, M) {
          ne[d] = M
        },
        registerLanguage: function (d, M) {
          Ve[d] = M
        },
      },
      sn = "https://curius.app",
      An = `${sn}/aaron-pham`,
      Tn = { method: "POST", headers: { "Content-Type": "application/json" } },
      Fn = {
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
    function zn(d) {
      let M = new Date(),
        S = d instanceof Date ? d : new Date(d),
        j = Math.floor((M.getTime() - S.getTime()) / 1e3),
        I = Math.floor(j / (3600 * 24)),
        J = Math.floor((j % (3600 * 24)) / 3600),
        ft = Math.floor((j % 3600) / 60)
      return I > 1
        ? `${I} days ago`
        : I === 1
          ? "1 day ago"
          : J > 1
            ? `${J} hours ago`
            : J === 1
              ? "1 hour ago"
              : ft > 1
                ? `${ft} minutes ago`
                : ft === 1
                  ? "1 minute ago"
                  : "just now"
    }
    async function kn() {
      return fetch("https://raw.aarnphm.xyz/api/curius?query=following", Tn)
        .then((d) => d.json())
        .then((d) => {
          if (d === void 0 || d.following === void 0) throw new Error("No following data")
          return d.following
        })
    }
    var Pn = new _n.Document({
      charset: "latin:advanced",
      document: {
        id: "id",
        index: [...Object.keys(Fn).map((d) => ({ field: d, tokenize: "forward" }))],
      },
    })
    document.addEventListener("nav", async () => {
      let d = document.getElementById("friends-list"),
        M = document.getElementById("see-more-friends")
      if (!d) return
      let S = await kn()
      Oe(d),
        S.map((I, J) => {
          let { user: ft, link: ht } = I,
            xt = document.createElement("li")
          xt.classList.add("friend-li")
          let It = (ue) => {
            ue.target instanceof HTMLAnchorElement || window.open(ht.link, "_blank")
          }
          xt.addEventListener("click", It),
            window.addCleanup(() => xt.removeEventListener("click", It)),
            ge(xt, "focus"),
            J < 4 ? xt.classList.add("active") : (xt.id = "inactive")
          let Kt = document.createElement("div")
          Kt.classList.add("friend-title")
          let pe = document.createElement("a")
          pe.classList.add("friend-name"),
            (pe.innerHTML = `${ft.firstName} ${ft.lastName}`),
            (pe.style.fontWeight = "bold"),
            (pe.href = `https://curius.app/${ft.userLink}`),
            (pe.target = "_blank")
          let ie = document.createElement("span")
          ie.id = `curius-span-${I.link.id}`
          let Zt = new Date(ht.modifiedDate)
          ;(ie.innerHTML = `<time datetime=${ht.modifiedDate} title="${Zt.toUTCString()}">${zn(ht.createdDate)}</time>`),
            Kt.append(pe, ie)
          let Tt = document.createElement("div")
          Tt.classList.add("friend-shortcut"),
            (Tt.innerHTML = `in <span style="color: var(--gray) !important">${ht.title}</span>`),
            xt.append(Kt, Tt),
            d.appendChild(xt)
        })
      let j = () => {
        let I = document.getElementById("friends-list"),
          J = M?.querySelectorAll("svg")[0],
          ft = M?.querySelectorAll("span")[0],
          ht = Array.from(I?.children).filter((xt) => xt.id === "inactive")
        M?.classList.contains("expand")
          ? (M.classList.remove("expand"),
            ht.map((xt) => xt.classList.remove("active")),
            J && (J.classList.remove("fold"), (J.viewBox.baseVal.y = -10)),
            ft && (ft.textContent = "de plus"))
          : (M?.classList.add("expand"),
            ht.map((xt) => xt.classList.add("active")),
            J && (J.classList.add("fold"), (J.viewBox.baseVal.y = 10)),
            ft && (ft.textContent = "moins"))
      }
      M?.addEventListener("click", j), window.addCleanup(() => M?.removeEventListener("click", j))
    })
  })(),
  (function () {
    var Be = Object.create,
      Le = Object.defineProperty,
      Oe = Object.getOwnPropertyDescriptor,
      ge = Object.getOwnPropertyNames,
      xe = Object.getPrototypeOf,
      Gt = Object.prototype.hasOwnProperty,
      $e = (N, R) => () => (R || N((R = { exports: {} }).exports, R), R.exports),
      ze = (N, R, a, h) => {
        if ((R && typeof R == "object") || typeof R == "function")
          for (let v of ge(R))
            !Gt.call(N, v) &&
              v !== a &&
              Le(N, v, { get: () => R[v], enumerable: !(h = Oe(R, v)) || h.enumerable })
        return N
      },
      Xt = (N, R, a) => (
        (a = N != null ? Be(xe(N)) : {}),
        ze(R || !N || !N.__esModule ? Le(a, "default", { value: N, enumerable: !0 }) : a, N)
      ),
      rn = $e((N, R) => {
        "use strict"
        R.exports = h
        function a(E) {
          return E instanceof Buffer
            ? Buffer.from(E)
            : new E.constructor(E.buffer.slice(), E.byteOffset, E.length)
        }
        function h(E) {
          if (((E = E || {}), E.circles)) return v(E)
          return E.proto ? q : T
          function A(O, U) {
            for (var P = Object.keys(O), G = new Array(P.length), Y = 0; Y < P.length; Y++) {
              var V = P[Y],
                ut = O[V]
              typeof ut != "object" || ut === null
                ? (G[V] = ut)
                : ut instanceof Date
                  ? (G[V] = new Date(ut))
                  : ArrayBuffer.isView(ut)
                    ? (G[V] = a(ut))
                    : (G[V] = U(ut))
            }
            return G
          }
          function T(O) {
            if (typeof O != "object" || O === null) return O
            if (O instanceof Date) return new Date(O)
            if (Array.isArray(O)) return A(O, T)
            if (O instanceof Map) return new Map(A(Array.from(O), T))
            if (O instanceof Set) return new Set(A(Array.from(O), T))
            var U = {}
            for (var P in O)
              if (Object.hasOwnProperty.call(O, P) !== !1) {
                var G = O[P]
                typeof G != "object" || G === null
                  ? (U[P] = G)
                  : G instanceof Date
                    ? (U[P] = new Date(G))
                    : G instanceof Map
                      ? (U[P] = new Map(A(Array.from(G), T)))
                      : G instanceof Set
                        ? (U[P] = new Set(A(Array.from(G), T)))
                        : ArrayBuffer.isView(G)
                          ? (U[P] = a(G))
                          : (U[P] = T(G))
              }
            return U
          }
          function q(O) {
            if (typeof O != "object" || O === null) return O
            if (O instanceof Date) return new Date(O)
            if (Array.isArray(O)) return A(O, q)
            if (O instanceof Map) return new Map(A(Array.from(O), q))
            if (O instanceof Set) return new Set(A(Array.from(O), q))
            var U = {}
            for (var P in O) {
              var G = O[P]
              typeof G != "object" || G === null
                ? (U[P] = G)
                : G instanceof Date
                  ? (U[P] = new Date(G))
                  : G instanceof Map
                    ? (U[P] = new Map(A(Array.from(G), q)))
                    : G instanceof Set
                      ? (U[P] = new Set(A(Array.from(G), q)))
                      : ArrayBuffer.isView(G)
                        ? (U[P] = a(G))
                        : (U[P] = q(G))
            }
            return U
          }
        }
        function v(E) {
          var A = [],
            T = []
          return E.proto ? U : O
          function q(P, G) {
            for (var Y = Object.keys(P), V = new Array(Y.length), ut = 0; ut < Y.length; ut++) {
              var rt = Y[ut],
                i = P[rt]
              if (typeof i != "object" || i === null) V[rt] = i
              else if (i instanceof Date) V[rt] = new Date(i)
              else if (ArrayBuffer.isView(i)) V[rt] = a(i)
              else {
                var g = A.indexOf(i)
                g !== -1 ? (V[rt] = T[g]) : (V[rt] = G(i))
              }
            }
            return V
          }
          function O(P) {
            if (typeof P != "object" || P === null) return P
            if (P instanceof Date) return new Date(P)
            if (Array.isArray(P)) return q(P, O)
            if (P instanceof Map) return new Map(q(Array.from(P), O))
            if (P instanceof Set) return new Set(q(Array.from(P), O))
            var G = {}
            A.push(P), T.push(G)
            for (var Y in P)
              if (Object.hasOwnProperty.call(P, Y) !== !1) {
                var V = P[Y]
                if (typeof V != "object" || V === null) G[Y] = V
                else if (V instanceof Date) G[Y] = new Date(V)
                else if (V instanceof Map) G[Y] = new Map(q(Array.from(V), O))
                else if (V instanceof Set) G[Y] = new Set(q(Array.from(V), O))
                else if (ArrayBuffer.isView(V)) G[Y] = a(V)
                else {
                  var ut = A.indexOf(V)
                  ut !== -1 ? (G[Y] = T[ut]) : (G[Y] = O(V))
                }
              }
            return A.pop(), T.pop(), G
          }
          function U(P) {
            if (typeof P != "object" || P === null) return P
            if (P instanceof Date) return new Date(P)
            if (Array.isArray(P)) return q(P, U)
            if (P instanceof Map) return new Map(q(Array.from(P), U))
            if (P instanceof Set) return new Set(q(Array.from(P), U))
            var G = {}
            A.push(P), T.push(G)
            for (var Y in P) {
              var V = P[Y]
              if (typeof V != "object" || V === null) G[Y] = V
              else if (V instanceof Date) G[Y] = new Date(V)
              else if (V instanceof Map) G[Y] = new Map(q(Array.from(V), U))
              else if (V instanceof Set) G[Y] = new Set(q(Array.from(V), U))
              else if (ArrayBuffer.isView(V)) G[Y] = a(V)
              else {
                var ut = A.indexOf(V)
                ut !== -1 ? (G[Y] = T[ut]) : (G[Y] = U(V))
              }
            }
            return A.pop(), T.pop(), G
          }
        }
      }),
      he = Math.min,
      Vt = Math.max,
      Ne = Math.round,
      ee = (N) => ({ x: N, y: N }),
      me = { left: "right", right: "left", bottom: "top", top: "bottom" },
      pn = { start: "end", end: "start" }
    function ae(N, R, a) {
      return Vt(N, he(R, a))
    }
    function ke(N, R) {
      return typeof N == "function" ? N(R) : N
    }
    function te(N) {
      return N.split("-")[0]
    }
    function Ke(N) {
      return N.split("-")[1]
    }
    function gn(N) {
      return N === "x" ? "y" : "x"
    }
    function Xe(N) {
      return N === "y" ? "height" : "width"
    }
    function Ve(N) {
      return ["top", "bottom"].includes(te(N)) ? "y" : "x"
    }
    function ne(N) {
      return gn(Ve(N))
    }
    function le(N, R, a) {
      a === void 0 && (a = !1)
      let h = Ke(N),
        v = ne(N),
        E = Xe(v),
        A =
          v === "x"
            ? h === (a ? "end" : "start")
              ? "right"
              : "left"
            : h === "start"
              ? "bottom"
              : "top"
      return R.reference[E] > R.floating[E] && (A = be(A)), [A, be(A)]
    }
    function un(N) {
      let R = be(N)
      return [de(N), R, de(R)]
    }
    function de(N) {
      return N.replace(/start|end/g, (R) => pn[R])
    }
    function En(N, R, a) {
      let h = ["left", "right"],
        v = ["right", "left"],
        E = ["top", "bottom"],
        A = ["bottom", "top"]
      switch (N) {
        case "top":
        case "bottom":
          return a ? (R ? v : h) : R ? h : v
        case "left":
        case "right":
          return R ? E : A
        default:
          return []
      }
    }
    function ye(N, R, a, h) {
      let v = Ke(N),
        E = En(te(N), a === "start", h)
      return v && ((E = E.map((A) => A + "-" + v)), R && (E = E.concat(E.map(de)))), E
    }
    function be(N) {
      return N.replace(/left|right|bottom|top/g, (R) => me[R])
    }
    function mn(N) {
      return { top: 0, right: 0, bottom: 0, left: 0, ...N }
    }
    function Pe(N) {
      return typeof N != "number" ? mn(N) : { top: N, right: N, bottom: N, left: N }
    }
    function De(N) {
      return { ...N, top: N.y, left: N.x, right: N.x + N.width, bottom: N.y + N.height }
    }
    function on(N, R, a) {
      let { reference: h, floating: v } = N,
        E = Ve(R),
        A = ne(R),
        T = Xe(A),
        q = te(R),
        O = E === "y",
        U = h.x + h.width / 2 - v.width / 2,
        P = h.y + h.height / 2 - v.height / 2,
        G = h[T] / 2 - v[T] / 2,
        Y
      switch (q) {
        case "top":
          Y = { x: U, y: h.y - v.height }
          break
        case "bottom":
          Y = { x: U, y: h.y + h.height }
          break
        case "right":
          Y = { x: h.x + h.width, y: P }
          break
        case "left":
          Y = { x: h.x - v.width, y: P }
          break
        default:
          Y = { x: h.x, y: h.y }
      }
      switch (Ke(R)) {
        case "start":
          Y[A] -= G * (a && O ? -1 : 1)
          break
        case "end":
          Y[A] += G * (a && O ? -1 : 1)
          break
      }
      return Y
    }
    var He = async (N, R, a) => {
      let {
          placement: h = "bottom",
          strategy: v = "absolute",
          middleware: E = [],
          platform: A,
        } = a,
        T = E.filter(Boolean),
        q = await (A.isRTL == null ? void 0 : A.isRTL(R)),
        O = await A.getElementRects({ reference: N, floating: R, strategy: v }),
        { x: U, y: P } = on(O, h, q),
        G = h,
        Y = {},
        V = 0
      for (let ut = 0; ut < T.length; ut++) {
        let { name: rt, fn: i } = T[ut],
          {
            x: g,
            y: b,
            data: D,
            reset: B,
          } = await i({
            x: U,
            y: P,
            initialPlacement: h,
            placement: G,
            strategy: v,
            middlewareData: Y,
            rects: O,
            platform: A,
            elements: { reference: N, floating: R },
          })
        ;(U = g ?? U),
          (P = b ?? P),
          (Y = { ...Y, [rt]: { ...Y[rt], ...D } }),
          B &&
            V <= 50 &&
            (V++,
            typeof B == "object" &&
              (B.placement && (G = B.placement),
              B.rects &&
                (O =
                  B.rects === !0
                    ? await A.getElementRects({ reference: N, floating: R, strategy: v })
                    : B.rects),
              ({ x: U, y: P } = on(O, G, q))),
            (ut = -1))
      }
      return { x: U, y: P, placement: G, strategy: v, middlewareData: Y }
    }
    async function Qe(N, R) {
      var a
      R === void 0 && (R = {})
      let { x: h, y: v, platform: E, rects: A, elements: T, strategy: q } = N,
        {
          boundary: O = "clippingAncestors",
          rootBoundary: U = "viewport",
          elementContext: P = "floating",
          altBoundary: G = !1,
          padding: Y = 0,
        } = ke(R, N),
        V = Pe(Y),
        ut = T[G ? (P === "floating" ? "reference" : "floating") : P],
        rt = De(
          await E.getClippingRect({
            element:
              (a = await (E.isElement == null ? void 0 : E.isElement(ut))) == null || a
                ? ut
                : ut.contextElement ||
                  (await (E.getDocumentElement == null
                    ? void 0
                    : E.getDocumentElement(T.floating))),
            boundary: O,
            rootBoundary: U,
            strategy: q,
          }),
        ),
        i = P === "floating" ? { ...A.floating, x: h, y: v } : A.reference,
        g = await (E.getOffsetParent == null ? void 0 : E.getOffsetParent(T.floating)),
        b = (await (E.isElement == null ? void 0 : E.isElement(g)))
          ? (await (E.getScale == null ? void 0 : E.getScale(g))) || { x: 1, y: 1 }
          : { x: 1, y: 1 },
        D = De(
          E.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await E.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: T,
                rect: i,
                offsetParent: g,
                strategy: q,
              })
            : i,
        )
      return {
        top: (rt.top - D.top + V.top) / b.y,
        bottom: (D.bottom - rt.bottom + V.bottom) / b.y,
        left: (rt.left - D.left + V.left) / b.x,
        right: (D.right - rt.right + V.right) / b.x,
      }
    }
    var ve = function (N) {
      return (
        N === void 0 && (N = {}),
        {
          name: "flip",
          options: N,
          async fn(R) {
            var a, h
            let {
                placement: v,
                middlewareData: E,
                rects: A,
                initialPlacement: T,
                platform: q,
                elements: O,
              } = R,
              {
                mainAxis: U = !0,
                crossAxis: P = !0,
                fallbackPlacements: G,
                fallbackStrategy: Y = "bestFit",
                fallbackAxisSideDirection: V = "none",
                flipAlignment: ut = !0,
                ...rt
              } = ke(N, R)
            if ((a = E.arrow) != null && a.alignmentOffset) return {}
            let i = te(v),
              g = te(T) === T,
              b = await (q.isRTL == null ? void 0 : q.isRTL(O.floating)),
              D = G || (g || !ut ? [be(T)] : un(T))
            !G && V !== "none" && D.push(...ye(T, ut, V, b))
            let B = [T, ...D],
              z = await Qe(R, rt),
              et = [],
              nt = ((h = E.flip) == null ? void 0 : h.overflows) || []
            if ((U && et.push(z[i]), P)) {
              let lt = le(v, A, b)
              et.push(z[lt[0]], z[lt[1]])
            }
            if (((nt = [...nt, { placement: v, overflows: et }]), !et.every((lt) => lt <= 0))) {
              var ot, yt
              let lt = (((ot = E.flip) == null ? void 0 : ot.index) || 0) + 1,
                ct = B[lt]
              if (ct) return { data: { index: lt, overflows: nt }, reset: { placement: ct } }
              let at =
                (yt = nt
                  .filter((vt) => vt.overflows[0] <= 0)
                  .sort((vt, kt) => vt.overflows[1] - kt.overflows[1])[0]) == null
                  ? void 0
                  : yt.placement
              if (!at)
                switch (Y) {
                  case "bestFit": {
                    var Ct
                    let vt =
                      (Ct = nt
                        .map((kt) => [
                          kt.placement,
                          kt.overflows.filter((Rt) => Rt > 0).reduce((Rt, se) => Rt + se, 0),
                        ])
                        .sort((kt, Rt) => kt[1] - Rt[1])[0]) == null
                        ? void 0
                        : Ct[0]
                    vt && (at = vt)
                    break
                  }
                  case "initialPlacement":
                    at = T
                    break
                }
              if (v !== at) return { reset: { placement: at } }
            }
            return {}
          },
        }
      )
    }
    function Ze(N) {
      let R = he(...N.map((E) => E.left)),
        a = he(...N.map((E) => E.top)),
        h = Vt(...N.map((E) => E.right)),
        v = Vt(...N.map((E) => E.bottom))
      return { x: R, y: a, width: h - R, height: v - a }
    }
    function qe(N) {
      let R = N.slice().sort((v, E) => v.y - E.y),
        a = [],
        h = null
      for (let v = 0; v < R.length; v++) {
        let E = R[v]
        !h || E.y - h.y > h.height / 2 ? a.push([E]) : a[a.length - 1].push(E), (h = E)
      }
      return a.map((v) => De(Ze(v)))
    }
    var tn = function (N) {
        return (
          N === void 0 && (N = {}),
          {
            name: "inline",
            options: N,
            async fn(R) {
              let { placement: a, elements: h, rects: v, platform: E, strategy: A } = R,
                { padding: T = 2, x: q, y: O } = ke(N, R),
                U = Array.from(
                  (await (E.getClientRects == null ? void 0 : E.getClientRects(h.reference))) || [],
                ),
                P = qe(U),
                G = De(Ze(U)),
                Y = Pe(T)
              function V() {
                if (P.length === 2 && P[0].left > P[1].right && q != null && O != null)
                  return (
                    P.find(
                      (rt) =>
                        q > rt.left - Y.left &&
                        q < rt.right + Y.right &&
                        O > rt.top - Y.top &&
                        O < rt.bottom + Y.bottom,
                    ) || G
                  )
                if (P.length >= 2) {
                  if (Ve(a) === "y") {
                    let yt = P[0],
                      Ct = P[P.length - 1],
                      lt = te(a) === "top",
                      ct = yt.top,
                      at = Ct.bottom,
                      vt = lt ? yt.left : Ct.left,
                      kt = lt ? yt.right : Ct.right,
                      Rt = kt - vt,
                      se = at - ct
                    return {
                      top: ct,
                      bottom: at,
                      left: vt,
                      right: kt,
                      width: Rt,
                      height: se,
                      x: vt,
                      y: ct,
                    }
                  }
                  let rt = te(a) === "left",
                    i = Vt(...P.map((yt) => yt.right)),
                    g = he(...P.map((yt) => yt.left)),
                    b = P.filter((yt) => (rt ? yt.left === g : yt.right === i)),
                    D = b[0].top,
                    B = b[b.length - 1].bottom,
                    z = g,
                    et = i,
                    nt = et - z,
                    ot = B - D
                  return {
                    top: D,
                    bottom: B,
                    left: z,
                    right: et,
                    width: nt,
                    height: ot,
                    x: z,
                    y: D,
                  }
                }
                return G
              }
              let ut = await E.getElementRects({
                reference: { getBoundingClientRect: V },
                floating: h.floating,
                strategy: A,
              })
              return v.reference.x !== ut.reference.x ||
                v.reference.y !== ut.reference.y ||
                v.reference.width !== ut.reference.width ||
                v.reference.height !== ut.reference.height
                ? { reset: { rects: ut } }
                : {}
            },
          }
        )
      },
      Ie = function (N) {
        return (
          N === void 0 && (N = {}),
          {
            name: "shift",
            options: N,
            async fn(R) {
              let { x: a, y: h, placement: v } = R,
                {
                  mainAxis: E = !0,
                  crossAxis: A = !1,
                  limiter: T = {
                    fn: (rt) => {
                      let { x: i, y: g } = rt
                      return { x: i, y: g }
                    },
                  },
                  ...q
                } = ke(N, R),
                O = { x: a, y: h },
                U = await Qe(R, q),
                P = Ve(te(v)),
                G = gn(P),
                Y = O[G],
                V = O[P]
              if (E) {
                let rt = G === "y" ? "top" : "left",
                  i = G === "y" ? "bottom" : "right",
                  g = Y + U[rt],
                  b = Y - U[i]
                Y = ae(g, Y, b)
              }
              if (A) {
                let rt = P === "y" ? "top" : "left",
                  i = P === "y" ? "bottom" : "right",
                  g = V + U[rt],
                  b = V - U[i]
                V = ae(g, V, b)
              }
              let ut = T.fn({ ...R, [G]: Y, [P]: V })
              return { ...ut, data: { x: ut.x - a, y: ut.y - h } }
            },
          }
        )
      }
    function Ee(N) {
      return At(N) ? (N.nodeName || "").toLowerCase() : "#document"
    }
    function tt(N) {
      var R
      return (N == null || (R = N.ownerDocument) == null ? void 0 : R.defaultView) || window
    }
    function gt(N) {
      var R
      return (R = (At(N) ? N.ownerDocument : N.document) || window.document) == null
        ? void 0
        : R.documentElement
    }
    function At(N) {
      return N instanceof Node || N instanceof tt(N).Node
    }
    function Lt(N) {
      return N instanceof Element || N instanceof tt(N).Element
    }
    function qt(N) {
      return N instanceof HTMLElement || N instanceof tt(N).HTMLElement
    }
    function St(N) {
      return typeof ShadowRoot > "u" ? !1 : N instanceof ShadowRoot || N instanceof tt(N).ShadowRoot
    }
    function jt(N) {
      let { overflow: R, overflowX: a, overflowY: h, display: v } = Mt(N)
      return (
        /auto|scroll|overlay|hidden|clip/.test(R + h + a) && !["inline", "contents"].includes(v)
      )
    }
    function ce(N) {
      return ["table", "td", "th"].includes(Ee(N))
    }
    function Yt(N) {
      let R = re(),
        a = Mt(N)
      return (
        a.transform !== "none" ||
        a.perspective !== "none" ||
        (a.containerType ? a.containerType !== "normal" : !1) ||
        (!R && (a.backdropFilter ? a.backdropFilter !== "none" : !1)) ||
        (!R && (a.filter ? a.filter !== "none" : !1)) ||
        ["transform", "perspective", "filter"].some((h) => (a.willChange || "").includes(h)) ||
        ["paint", "layout", "strict", "content"].some((h) => (a.contain || "").includes(h))
      )
    }
    function Ht(N) {
      let R = zt(N)
      for (; qt(R) && !Nt(R); ) {
        if (Yt(R)) return R
        R = zt(R)
      }
      return null
    }
    function re() {
      return typeof CSS > "u" || !CSS.supports
        ? !1
        : CSS.supports("-webkit-backdrop-filter", "none")
    }
    function Nt(N) {
      return ["html", "body", "#document"].includes(Ee(N))
    }
    function Mt(N) {
      return tt(N).getComputedStyle(N)
    }
    function fe(N) {
      return Lt(N)
        ? { scrollLeft: N.scrollLeft, scrollTop: N.scrollTop }
        : { scrollLeft: N.pageXOffset, scrollTop: N.pageYOffset }
    }
    function zt(N) {
      if (Ee(N) === "html") return N
      let R = N.assignedSlot || N.parentNode || (St(N) && N.host) || gt(N)
      return St(R) ? R.host : R
    }
    function _e(N) {
      let R = zt(N)
      return Nt(R) ? (N.ownerDocument ? N.ownerDocument.body : N.body) : qt(R) && jt(R) ? R : _e(R)
    }
    function Ue(N, R, a) {
      var h
      R === void 0 && (R = []), a === void 0 && (a = !0)
      let v = _e(N),
        E = v === ((h = N.ownerDocument) == null ? void 0 : h.body),
        A = tt(v)
      return E
        ? R.concat(
            A,
            A.visualViewport || [],
            jt(v) ? v : [],
            A.frameElement && a ? Ue(A.frameElement) : [],
          )
        : R.concat(v, Ue(v, [], a))
    }
    function Se(N) {
      let R = Mt(N),
        a = parseFloat(R.width) || 0,
        h = parseFloat(R.height) || 0,
        v = qt(N),
        E = v ? N.offsetWidth : a,
        A = v ? N.offsetHeight : h,
        T = Ne(a) !== E || Ne(h) !== A
      return T && ((a = E), (h = A)), { width: a, height: h, $: T }
    }
    function Ye(N) {
      return Lt(N) ? N : N.contextElement
    }
    function vn(N) {
      let R = Ye(N)
      if (!qt(R)) return ee(1)
      let a = R.getBoundingClientRect(),
        { width: h, height: v, $: E } = Se(R),
        A = (E ? Ne(a.width) : a.width) / h,
        T = (E ? Ne(a.height) : a.height) / v
      return (
        (!A || !Number.isFinite(A)) && (A = 1),
        (!T || !Number.isFinite(T)) && (T = 1),
        { x: A, y: T }
      )
    }
    var yn = ee(0)
    function wn(N) {
      let R = tt(N)
      return !re() || !R.visualViewport
        ? yn
        : { x: R.visualViewport.offsetLeft, y: R.visualViewport.offsetTop }
    }
    function _n(N, R, a) {
      return R === void 0 && (R = !1), !a || (R && a !== tt(N)) ? !1 : R
    }
    function sn(N, R, a, h) {
      R === void 0 && (R = !1), a === void 0 && (a = !1)
      let v = N.getBoundingClientRect(),
        E = Ye(N),
        A = ee(1)
      R && (h ? Lt(h) && (A = vn(h)) : (A = vn(N)))
      let T = _n(E, a, h) ? wn(E) : ee(0),
        q = (v.left + T.x) / A.x,
        O = (v.top + T.y) / A.y,
        U = v.width / A.x,
        P = v.height / A.y
      if (E) {
        let G = tt(E),
          Y = h && Lt(h) ? tt(h) : h,
          V = G,
          ut = V.frameElement
        for (; ut && h && Y !== V; ) {
          let rt = vn(ut),
            i = ut.getBoundingClientRect(),
            g = Mt(ut),
            b = i.left + (ut.clientLeft + parseFloat(g.paddingLeft)) * rt.x,
            D = i.top + (ut.clientTop + parseFloat(g.paddingTop)) * rt.y
          ;(q *= rt.x),
            (O *= rt.y),
            (U *= rt.x),
            (P *= rt.y),
            (q += b),
            (O += D),
            (V = tt(ut)),
            (ut = V.frameElement)
        }
      }
      return De({ width: U, height: P, x: q, y: O })
    }
    var An = [":popover-open", ":modal"]
    function Tn(N) {
      return An.some((R) => {
        try {
          return N.matches(R)
        } catch {
          return !1
        }
      })
    }
    function Fn(N) {
      let { elements: R, rect: a, offsetParent: h, strategy: v } = N,
        E = v === "fixed",
        A = gt(h),
        T = R ? Tn(R.floating) : !1
      if (h === A || (T && E)) return a
      let q = { scrollLeft: 0, scrollTop: 0 },
        O = ee(1),
        U = ee(0),
        P = qt(h)
      if ((P || (!P && !E)) && ((Ee(h) !== "body" || jt(A)) && (q = fe(h)), qt(h))) {
        let G = sn(h)
        ;(O = vn(h)), (U.x = G.x + h.clientLeft), (U.y = G.y + h.clientTop)
      }
      return {
        width: a.width * O.x,
        height: a.height * O.y,
        x: a.x * O.x - q.scrollLeft * O.x + U.x,
        y: a.y * O.y - q.scrollTop * O.y + U.y,
      }
    }
    function zn(N) {
      return Array.from(N.getClientRects())
    }
    function kn(N) {
      return sn(gt(N)).left + fe(N).scrollLeft
    }
    function Pn(N) {
      let R = gt(N),
        a = fe(N),
        h = N.ownerDocument.body,
        v = Vt(R.scrollWidth, R.clientWidth, h.scrollWidth, h.clientWidth),
        E = Vt(R.scrollHeight, R.clientHeight, h.scrollHeight, h.clientHeight),
        A = -a.scrollLeft + kn(N),
        T = -a.scrollTop
      return (
        Mt(h).direction === "rtl" && (A += Vt(R.clientWidth, h.clientWidth) - v),
        { width: v, height: E, x: A, y: T }
      )
    }
    function d(N, R) {
      let a = tt(N),
        h = gt(N),
        v = a.visualViewport,
        E = h.clientWidth,
        A = h.clientHeight,
        T = 0,
        q = 0
      if (v) {
        ;(E = v.width), (A = v.height)
        let O = re()
        ;(!O || (O && R === "fixed")) && ((T = v.offsetLeft), (q = v.offsetTop))
      }
      return { width: E, height: A, x: T, y: q }
    }
    function M(N, R) {
      let a = sn(N, !0, R === "fixed"),
        h = a.top + N.clientTop,
        v = a.left + N.clientLeft,
        E = qt(N) ? vn(N) : ee(1),
        A = N.clientWidth * E.x,
        T = N.clientHeight * E.y,
        q = v * E.x,
        O = h * E.y
      return { width: A, height: T, x: q, y: O }
    }
    function S(N, R, a) {
      let h
      if (R === "viewport") h = d(N, a)
      else if (R === "document") h = Pn(gt(N))
      else if (Lt(R)) h = M(R, a)
      else {
        let v = wn(N)
        h = { ...R, x: R.x - v.x, y: R.y - v.y }
      }
      return De(h)
    }
    function j(N, R) {
      let a = zt(N)
      return a === R || !Lt(a) || Nt(a) ? !1 : Mt(a).position === "fixed" || j(a, R)
    }
    function I(N, R) {
      let a = R.get(N)
      if (a) return a
      let h = Ue(N, [], !1).filter((T) => Lt(T) && Ee(T) !== "body"),
        v = null,
        E = Mt(N).position === "fixed",
        A = E ? zt(N) : N
      for (; Lt(A) && !Nt(A); ) {
        let T = Mt(A),
          q = Yt(A)
        !q && T.position === "fixed" && (v = null),
          (
            E
              ? !q && !v
              : (!q &&
                  T.position === "static" &&
                  v &&
                  ["absolute", "fixed"].includes(v.position)) ||
                (jt(A) && !q && j(N, A))
          )
            ? (h = h.filter((O) => O !== A))
            : (v = T),
          (A = zt(A))
      }
      return R.set(N, h), h
    }
    function J(N) {
      let { element: R, boundary: a, rootBoundary: h, strategy: v } = N,
        E = [...(a === "clippingAncestors" ? I(R, this._c) : [].concat(a)), h],
        A = E[0],
        T = E.reduce(
          (q, O) => {
            let U = S(R, O, v)
            return (
              (q.top = Vt(U.top, q.top)),
              (q.right = he(U.right, q.right)),
              (q.bottom = he(U.bottom, q.bottom)),
              (q.left = Vt(U.left, q.left)),
              q
            )
          },
          S(R, A, v),
        )
      return { width: T.right - T.left, height: T.bottom - T.top, x: T.left, y: T.top }
    }
    function ft(N) {
      let { width: R, height: a } = Se(N)
      return { width: R, height: a }
    }
    function ht(N, R, a) {
      let h = qt(R),
        v = gt(R),
        E = a === "fixed",
        A = sn(N, !0, E, R),
        T = { scrollLeft: 0, scrollTop: 0 },
        q = ee(0)
      if (h || (!h && !E))
        if (((Ee(R) !== "body" || jt(v)) && (T = fe(R)), h)) {
          let P = sn(R, !0, E, R)
          ;(q.x = P.x + R.clientLeft), (q.y = P.y + R.clientTop)
        } else v && (q.x = kn(v))
      let O = A.left + T.scrollLeft - q.x,
        U = A.top + T.scrollTop - q.y
      return { x: O, y: U, width: A.width, height: A.height }
    }
    function xt(N, R) {
      return !qt(N) || Mt(N).position === "fixed" ? null : R ? R(N) : N.offsetParent
    }
    function It(N, R) {
      let a = tt(N)
      if (!qt(N) || Tn(N)) return a
      let h = xt(N, R)
      for (; h && ce(h) && Mt(h).position === "static"; ) h = xt(h, R)
      return h && (Ee(h) === "html" || (Ee(h) === "body" && Mt(h).position === "static" && !Yt(h)))
        ? a
        : h || Ht(N) || a
    }
    var Kt = async function (N) {
      let R = this.getOffsetParent || It,
        a = this.getDimensions
      return {
        reference: ht(N.reference, await R(N.floating), N.strategy),
        floating: { x: 0, y: 0, ...(await a(N.floating)) },
      }
    }
    function pe(N) {
      return Mt(N).direction === "rtl"
    }
    var ie = {
        convertOffsetParentRelativeRectToViewportRelativeRect: Fn,
        getDocumentElement: gt,
        getClippingRect: J,
        getOffsetParent: It,
        getElementRects: Kt,
        getClientRects: zn,
        getDimensions: ft,
        getScale: vn,
        isElement: Lt,
        isRTL: pe,
      },
      Zt = Ie,
      Tt = ve,
      ue = tn,
      Te = (N, R, a) => {
        let h = new Map(),
          v = { platform: ie, ...a },
          E = { ...v.platform, _c: h }
        return He(N, R, { ...v, platform: E })
      },
      Ge = Object.hasOwnProperty,
      je = Xt(rn(), 1),
      Ce = (0, je.default)(),
      ln = (N, R, a) => {
        let h = new URL(N.getAttribute(R), a)
        N.setAttribute(R, h.pathname + h.hash)
      }
    function Cn(N, R) {
      N.querySelectorAll('[href^="./"], [href^="../"]').forEach((a) => ln(a, "href", R)),
        N.querySelectorAll('[src^="./"], [src^="../"]').forEach((a) => ln(a, "src", R))
    }
    var Dn = new DOMParser()
    async function cn({ clientX: N, clientY: R }) {
      let a = this
      if (a.dataset.noPopover === "true") return
      async function h(V) {
        let { x: ut, y: rt } = await Te(a, V, { middleware: [ue({ x: N, y: R }), Zt(), Tt()] })
        Object.assign(V.style, { left: `${ut}px`, top: `${rt}px` })
      }
      let v = () => [...a.children].some((V) => V.classList.contains("popover"))
      if (v()) return h(a.lastChild)
      let E = new URL(document.location.href)
      ;(E.hash = ""), (E.search = "")
      let A = new URL(a.href),
        T = A.hash
      if (((A.hash = ""), (A.search = ""), E.toString() === A.toString())) return
      let q = await fetch(`${A}`).catch((V) => {
        console.error(V)
      })
      if (v() || !q) return
      let [O] = q.headers.get("Content-Type").split(";"),
        [U, P] = O.split("/"),
        G = document.createElement("div")
      G.classList.add("popover")
      let Y = document.createElement("div")
      switch (
        (Y.classList.add("popover-inner"),
        G.appendChild(Y),
        (Y.dataset.contentType = O ?? void 0),
        U)
      ) {
        case "image":
          let V = document.createElement("img")
          ;(V.src = A.toString()), (V.alt = A.pathname), Y.appendChild(V)
          break
        case "application":
          switch (P) {
            case "pdf":
              let g = document.createElement("iframe")
              ;(g.src = A.toString()), Y.appendChild(g)
              break
            default:
              break
          }
          break
        default:
          let ut = await q.text(),
            rt = Dn.parseFromString(ut, "text/html")
          Cn(rt, A)
          let i
          if (rt.body.dataset.enablePreview === "false") {
            let g = document.createElement("div")
            ;(g.innerHTML = "<p>L'aper\xE7u est d\xE9sactiv\xE9 sur cette page.</p>"), (i = [g])
          } else i = [...rt.getElementsByClassName("popover-hint")]
          if (i.length === 0) return
          i.forEach((g) => Y.appendChild(g))
      }
      if ((h(G), a.appendChild(G), T !== "")) {
        let V = Y.querySelector(T)
        V && Y.scroll({ top: V.offsetTop - 12, behavior: "instant" })
      }
    }
    document.addEventListener("nav", () => {
      let N = [...document.getElementsByClassName("internal")]
      for (let R of N)
        R.addEventListener("mouseenter", cn),
          window.addCleanup(() => R.removeEventListener("mouseenter", cn))
    })
  })(),
  (function () {
    const Be = document.createElement("script")
    ;(Be.src = "https://plausible.io/js/script.manual.js"),
      Be.setAttribute("data-domain", location.hostname),
      (Be.defer = !0),
      document.head.appendChild(Be),
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
    var Be = Object.create,
      Le = Object.defineProperty,
      Oe = Object.getOwnPropertyDescriptor,
      ge = Object.getOwnPropertyNames,
      xe = Object.getPrototypeOf,
      Gt = Object.prototype.hasOwnProperty,
      $e = (tt, gt) => () => (gt || tt((gt = { exports: {} }).exports, gt), gt.exports),
      ze = (tt, gt, At, Lt) => {
        if ((gt && typeof gt == "object") || typeof gt == "function")
          for (let qt of ge(gt))
            !Gt.call(tt, qt) &&
              qt !== At &&
              Le(tt, qt, { get: () => gt[qt], enumerable: !(Lt = Oe(gt, qt)) || Lt.enumerable })
        return tt
      },
      Xt = (tt, gt, At) => (
        (At = tt != null ? Be(xe(tt)) : {}),
        ze(gt || !tt || !tt.__esModule ? Le(At, "default", { value: tt, enumerable: !0 }) : At, tt)
      ),
      rn = $e((tt, gt) => {
        "use strict"
        gt.exports = Lt
        function At(St) {
          return St instanceof Buffer
            ? Buffer.from(St)
            : new St.constructor(St.buffer.slice(), St.byteOffset, St.length)
        }
        function Lt(St) {
          if (((St = St || {}), St.circles)) return qt(St)
          return St.proto ? Yt : ce
          function jt(Ht, re) {
            for (
              var Nt = Object.keys(Ht), Mt = new Array(Nt.length), fe = 0;
              fe < Nt.length;
              fe++
            ) {
              var zt = Nt[fe],
                _e = Ht[zt]
              typeof _e != "object" || _e === null
                ? (Mt[zt] = _e)
                : _e instanceof Date
                  ? (Mt[zt] = new Date(_e))
                  : ArrayBuffer.isView(_e)
                    ? (Mt[zt] = At(_e))
                    : (Mt[zt] = re(_e))
            }
            return Mt
          }
          function ce(Ht) {
            if (typeof Ht != "object" || Ht === null) return Ht
            if (Ht instanceof Date) return new Date(Ht)
            if (Array.isArray(Ht)) return jt(Ht, ce)
            if (Ht instanceof Map) return new Map(jt(Array.from(Ht), ce))
            if (Ht instanceof Set) return new Set(jt(Array.from(Ht), ce))
            var re = {}
            for (var Nt in Ht)
              if (Object.hasOwnProperty.call(Ht, Nt) !== !1) {
                var Mt = Ht[Nt]
                typeof Mt != "object" || Mt === null
                  ? (re[Nt] = Mt)
                  : Mt instanceof Date
                    ? (re[Nt] = new Date(Mt))
                    : Mt instanceof Map
                      ? (re[Nt] = new Map(jt(Array.from(Mt), ce)))
                      : Mt instanceof Set
                        ? (re[Nt] = new Set(jt(Array.from(Mt), ce)))
                        : ArrayBuffer.isView(Mt)
                          ? (re[Nt] = At(Mt))
                          : (re[Nt] = ce(Mt))
              }
            return re
          }
          function Yt(Ht) {
            if (typeof Ht != "object" || Ht === null) return Ht
            if (Ht instanceof Date) return new Date(Ht)
            if (Array.isArray(Ht)) return jt(Ht, Yt)
            if (Ht instanceof Map) return new Map(jt(Array.from(Ht), Yt))
            if (Ht instanceof Set) return new Set(jt(Array.from(Ht), Yt))
            var re = {}
            for (var Nt in Ht) {
              var Mt = Ht[Nt]
              typeof Mt != "object" || Mt === null
                ? (re[Nt] = Mt)
                : Mt instanceof Date
                  ? (re[Nt] = new Date(Mt))
                  : Mt instanceof Map
                    ? (re[Nt] = new Map(jt(Array.from(Mt), Yt)))
                    : Mt instanceof Set
                      ? (re[Nt] = new Set(jt(Array.from(Mt), Yt)))
                      : ArrayBuffer.isView(Mt)
                        ? (re[Nt] = At(Mt))
                        : (re[Nt] = Yt(Mt))
            }
            return re
          }
        }
        function qt(St) {
          var jt = [],
            ce = []
          return St.proto ? re : Ht
          function Yt(Nt, Mt) {
            for (
              var fe = Object.keys(Nt), zt = new Array(fe.length), _e = 0;
              _e < fe.length;
              _e++
            ) {
              var Ue = fe[_e],
                Se = Nt[Ue]
              if (typeof Se != "object" || Se === null) zt[Ue] = Se
              else if (Se instanceof Date) zt[Ue] = new Date(Se)
              else if (ArrayBuffer.isView(Se)) zt[Ue] = At(Se)
              else {
                var Ye = jt.indexOf(Se)
                Ye !== -1 ? (zt[Ue] = ce[Ye]) : (zt[Ue] = Mt(Se))
              }
            }
            return zt
          }
          function Ht(Nt) {
            if (typeof Nt != "object" || Nt === null) return Nt
            if (Nt instanceof Date) return new Date(Nt)
            if (Array.isArray(Nt)) return Yt(Nt, Ht)
            if (Nt instanceof Map) return new Map(Yt(Array.from(Nt), Ht))
            if (Nt instanceof Set) return new Set(Yt(Array.from(Nt), Ht))
            var Mt = {}
            jt.push(Nt), ce.push(Mt)
            for (var fe in Nt)
              if (Object.hasOwnProperty.call(Nt, fe) !== !1) {
                var zt = Nt[fe]
                if (typeof zt != "object" || zt === null) Mt[fe] = zt
                else if (zt instanceof Date) Mt[fe] = new Date(zt)
                else if (zt instanceof Map) Mt[fe] = new Map(Yt(Array.from(zt), Ht))
                else if (zt instanceof Set) Mt[fe] = new Set(Yt(Array.from(zt), Ht))
                else if (ArrayBuffer.isView(zt)) Mt[fe] = At(zt)
                else {
                  var _e = jt.indexOf(zt)
                  _e !== -1 ? (Mt[fe] = ce[_e]) : (Mt[fe] = Ht(zt))
                }
              }
            return jt.pop(), ce.pop(), Mt
          }
          function re(Nt) {
            if (typeof Nt != "object" || Nt === null) return Nt
            if (Nt instanceof Date) return new Date(Nt)
            if (Array.isArray(Nt)) return Yt(Nt, re)
            if (Nt instanceof Map) return new Map(Yt(Array.from(Nt), re))
            if (Nt instanceof Set) return new Set(Yt(Array.from(Nt), re))
            var Mt = {}
            jt.push(Nt), ce.push(Mt)
            for (var fe in Nt) {
              var zt = Nt[fe]
              if (typeof zt != "object" || zt === null) Mt[fe] = zt
              else if (zt instanceof Date) Mt[fe] = new Date(zt)
              else if (zt instanceof Map) Mt[fe] = new Map(Yt(Array.from(zt), re))
              else if (zt instanceof Set) Mt[fe] = new Set(Yt(Array.from(zt), re))
              else if (ArrayBuffer.isView(zt)) Mt[fe] = At(zt)
              else {
                var _e = jt.indexOf(zt)
                _e !== -1 ? (Mt[fe] = ce[_e]) : (Mt[fe] = re(zt))
              }
            }
            return jt.pop(), ce.pop(), Mt
          }
        }
      }),
      he = (tt) => (gt, At) => gt[`node${tt}`] === At[`node${tt}`],
      Vt = he("Name"),
      Ne = he("Type"),
      ee = he("Value")
    function me(tt, gt) {
      if (tt.attributes.length === 0 && gt.attributes.length === 0) return []
      let At = [],
        Lt = new Map(),
        qt = new Map()
      for (let St of tt.attributes) Lt.set(St.name, St.value)
      for (let St of gt.attributes) {
        let jt = Lt.get(St.name)
        St.value === jt
          ? Lt.delete(St.name)
          : (typeof jt < "u" && Lt.delete(St.name), qt.set(St.name, St.value))
      }
      for (let St of Lt.keys()) At.push({ type: 5, name: St })
      for (let [St, jt] of qt.entries()) At.push({ type: 4, name: St, value: jt })
      return At
    }
    function pn(tt, gt = !0) {
      let At = `${tt.localName}`
      for (let { name: Lt, value: qt } of tt.attributes)
        (gt && Lt.startsWith("data-")) || (At += `[${Lt}=${qt}]`)
      return (At += tt.innerHTML), At
    }
    function ae(tt) {
      switch (tt.tagName) {
        case "BASE":
        case "TITLE":
          return tt.localName
        case "META": {
          if (tt.hasAttribute("name")) return `meta[name="${tt.getAttribute("name")}"]`
          if (tt.hasAttribute("property")) return `meta[name="${tt.getAttribute("property")}"]`
          break
        }
        case "LINK": {
          if (tt.hasAttribute("rel") && tt.hasAttribute("href"))
            return `link[rel="${tt.getAttribute("rel")}"][href="${tt.getAttribute("href")}"]`
          if (tt.hasAttribute("href")) return `link[href="${tt.getAttribute("href")}"]`
          break
        }
      }
      return pn(tt)
    }
    function ke(tt) {
      let [gt, At = ""] = tt.split("?")
      return `${gt}?t=${Date.now()}&${At.replace(/t=\d+/g, "")}`
    }
    function te(tt) {
      if (tt.nodeType === 1 && tt.hasAttribute("data-persist")) return tt
      if (tt.nodeType === 1 && tt.localName === "script") {
        let gt = document.createElement("script")
        for (let { name: At, value: Lt } of tt.attributes)
          At === "src" && (Lt = ke(Lt)), gt.setAttribute(At, Lt)
        return (gt.innerHTML = tt.innerHTML), gt
      }
      return tt.cloneNode(!0)
    }
    function Ke(tt, gt) {
      if (tt.children.length === 0 && gt.children.length === 0) return []
      let At = [],
        Lt = new Map(),
        qt = new Map(),
        St = new Map()
      for (let jt of tt.children) Lt.set(ae(jt), jt)
      for (let jt of gt.children) {
        let ce = ae(jt),
          Yt = Lt.get(ce)
        Yt ? pn(jt, !1) !== pn(Yt, !1) && qt.set(ce, te(jt)) : St.set(ce, te(jt)), Lt.delete(ce)
      }
      for (let jt of tt.childNodes) {
        if (jt.nodeType === 1) {
          let ce = ae(jt)
          if (Lt.has(ce)) {
            At.push({ type: 1 })
            continue
          } else if (qt.has(ce)) {
            let Yt = qt.get(ce)
            At.push({ type: 3, attributes: me(jt, Yt), children: gn(jt, Yt) })
            continue
          }
        }
        At.push(void 0)
      }
      for (let jt of St.values()) At.push({ type: 0, node: te(jt) })
      return At
    }
    function gn(tt, gt) {
      let At = [],
        Lt = Math.max(tt.childNodes.length, gt.childNodes.length)
      for (let qt = 0; qt < Lt; qt++) {
        let St = tt.childNodes.item(qt),
          jt = gt.childNodes.item(qt)
        At[qt] = Xe(St, jt)
      }
      return At
    }
    function Xe(tt, gt) {
      if (!tt) return { type: 0, node: te(gt) }
      if (!gt) return { type: 1 }
      if (Ne(tt, gt)) {
        if (tt.nodeType === 3) {
          let At = tt.nodeValue,
            Lt = gt.nodeValue
          if (At.trim().length === 0 && Lt.trim().length === 0) return
        }
        if (tt.nodeType === 1) {
          if (Vt(tt, gt)) {
            let At = tt.tagName === "HEAD" ? Ke : gn
            return { type: 3, attributes: me(tt, gt), children: At(tt, gt) }
          }
          return { type: 2, node: te(gt) }
        } else
          return tt.nodeType === 9
            ? Xe(tt.documentElement, gt.documentElement)
            : ee(tt, gt)
              ? void 0
              : { type: 2, value: gt.nodeValue }
      }
      return { type: 2, node: te(gt) }
    }
    function Ve(tt, gt) {
      if (gt.length !== 0)
        for (let { type: At, name: Lt, value: qt } of gt)
          At === 5 ? tt.removeAttribute(Lt) : At === 4 && tt.setAttribute(Lt, qt)
    }
    async function ne(tt, gt, At) {
      if (!gt) return
      let Lt
      switch (
        (tt.nodeType === 9 ? ((tt = tt.documentElement), (Lt = tt)) : At ? (Lt = At) : (Lt = tt),
        gt.type)
      ) {
        case 0: {
          let { node: qt } = gt
          tt.appendChild(qt)
          return
        }
        case 1: {
          if (!Lt) return
          tt.removeChild(Lt)
          return
        }
        case 2: {
          if (!Lt) return
          let { node: qt, value: St } = gt
          if (typeof St == "string") {
            Lt.nodeValue = St
            return
          }
          Lt.replaceWith(qt)
          return
        }
        case 3: {
          if (!Lt) return
          let { attributes: qt, children: St } = gt
          Ve(Lt, qt)
          let jt = Array.from(Lt.childNodes)
          await Promise.all(St.map((ce, Yt) => ne(Lt, ce, jt[Yt])))
          return
        }
      }
    }
    function le(tt, gt) {
      let At = Xe(tt, gt)
      return ne(tt, At)
    }
    var un = Object.hasOwnProperty,
      de = Xt(rn(), 1),
      En = (0, de.default)()
    function ye(tt) {
      return tt.document.body.dataset.slug
    }
    var be = (tt, gt, At) => {
      let Lt = new URL(tt.getAttribute(gt), At)
      tt.setAttribute(gt, Lt.pathname + Lt.hash)
    }
    function mn(tt, gt) {
      tt.querySelectorAll('[href^="./"], [href^="../"]').forEach((At) => be(At, "href", gt)),
        tt.querySelectorAll('[src^="./"], [src^="../"]').forEach((At) => be(At, "src", gt))
    }
    var Pe = 1,
      De = document.createElement("route-announcer"),
      on = (tt) => tt?.nodeType === Pe,
      He = (tt) => {
        try {
          let gt = new URL(tt)
          if (window.location.origin === gt.origin) return !0
        } catch {}
        return !1
      },
      Qe = (tt) => {
        let gt = tt.origin === window.location.origin,
          At = tt.pathname === window.location.pathname
        return gt && At
      },
      ve = ({ target: tt }) => {
        if (!on(tt) || tt.attributes.getNamedItem("target")?.value === "_blank") return
        let gt = tt.closest("a")
        if (!gt || "routerIgnore" in gt.dataset) return
        let { href: At } = gt
        if (He(At))
          return { url: new URL(At), scroll: "routerNoscroll" in gt.dataset ? !1 : void 0 }
      }
    function Ze(tt) {
      let gt = new CustomEvent("nav", { detail: { url: tt } })
      document.dispatchEvent(gt)
    }
    var qe = new Set()
    window.addCleanup = (tt) => qe.add(tt)
    var tn
    async function Ie(tt, gt = !1) {
      tn = tn || new DOMParser()
      let At = await fetch(`${tt}`)
        .then((St) => {
          if (St.headers.get("content-type")?.startsWith("text/html")) return St.text()
          window.location.assign(tt)
        })
        .catch(() => {
          window.location.assign(tt)
        })
      if (!At) return
      qe.forEach((St) => St()), qe.clear()
      let Lt = tn.parseFromString(At, "text/html")
      mn(Lt, tt)
      let qt = Lt.querySelector("title")?.textContent
      if (qt) document.title = qt
      else {
        let St = document.querySelector("h1")
        qt = St?.innerText ?? St?.textContent ?? tt.pathname
      }
      De.textContent !== qt && (De.textContent = qt),
        (De.dataset.persist = ""),
        Lt.body.appendChild(De),
        le(document.body, Lt.body),
        gt ||
          (tt.hash
            ? document.getElementById(decodeURIComponent(tt.hash.substring(1)))?.scrollIntoView()
            : window.scrollTo({ top: 0 })),
        document.head.querySelectorAll(":not([spa-preserve])").forEach((St) => St.remove()),
        Lt.head
          .querySelectorAll(":not([spa-preserve])")
          .forEach((St) => document.head.appendChild(St)),
        gt || history.pushState({}, "", tt),
        Ze(ye(window)),
        delete De.dataset.persist
    }
    window.spaNavigate = Ie
    function Ee() {
      return (
        typeof window < "u" &&
          (window.addEventListener("click", async (tt) => {
            let { url: gt } = ve(tt) ?? {}
            if (!(!gt || tt.ctrlKey || tt.metaKey)) {
              if ((tt.preventDefault(), Qe(gt) && gt.hash)) {
                document.getElementById(decodeURIComponent(gt.hash.substring(1)))?.scrollIntoView(),
                  history.pushState({}, "", gt)
                return
              }
              try {
                Ie(gt, !1)
              } catch {
                window.location.assign(gt)
              }
            }
          }),
          window.addEventListener("popstate", (tt) => {
            let { url: gt } = ve(tt) ?? {}
            if (!(window.location.hash && window.location.pathname === gt?.pathname))
              try {
                Ie(new URL(window.location.toString()), !0)
              } catch {
                window.location.reload()
              }
          })),
        new (class {
          go(tt) {
            let gt = new URL(tt, window.location.toString())
            return Ie(gt, !1)
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
    if ((Ee(), Ze(ye(window)), !customElements.get("route-announcer"))) {
      let tt = {
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
            for (let [gt, At] of Object.entries(tt)) this.setAttribute(gt, At)
          }
        },
      )
    }
  })()
