;(function () {
  var De =
      '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>',
    fe =
      '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>'
  document.addEventListener("nav", () => {
    let le = document.getElementsByTagName("pre")
    for (let Be = 0; Be < le.length; Be++) {
      let Qt = le[Be].getElementsByTagName("code")[0]
      if (Qt) {
        let $e = function () {
          navigator.clipboard.writeText(Ue).then(
            () => {
              Jt.blur(),
                (Jt.innerHTML = fe),
                setTimeout(() => {
                  ;(Jt.innerHTML = De), (Jt.style.borderColor = "")
                }, 2e3)
            },
            (an) => console.error(an),
          )
        }
        var de = $e
        let Ue = Qt.innerText.replace(
            /\n\n/g,
            `
`,
          ),
          Jt = document.createElement("button")
        ;(Jt.className = "clipboard-button"),
          (Jt.type = "button"),
          (Jt.innerHTML = De),
          (Jt.ariaLabel = "Copy source"),
          Jt.addEventListener("click", $e),
          window.addCleanup(() => Jt.removeEventListener("click", $e)),
          le[Be].prepend(Jt)
      }
    }
  })
})(),
  (function () {
    var De = Object.create,
      fe = Object.defineProperty,
      le = Object.getOwnPropertyDescriptor,
      de = Object.getOwnPropertyNames,
      Be = Object.getPrototypeOf,
      Qt = Object.prototype.hasOwnProperty,
      $e = (t, n) => () => (n || t((n = { exports: {} }).exports, n), n.exports),
      Ue = (t, n, i, o) => {
        if ((n && typeof n == "object") || typeof n == "function")
          for (let l of de(n))
            !Qt.call(t, l) &&
              l !== i &&
              fe(t, l, { get: () => n[l], enumerable: !(o = le(n, l)) || o.enumerable })
        return t
      },
      Jt = (t, n, i) => (
        (i = t != null ? De(Be(t)) : {}),
        Ue(n || !t || !t.__esModule ? fe(i, "default", { value: t, enumerable: !0 }) : i, t)
      ),
      an = $e((t, n) => {
        "use strict"
        n.exports = o
        function i(h) {
          return h instanceof Buffer
            ? Buffer.from(h)
            : new h.constructor(h.buffer.slice(), h.byteOffset, h.length)
        }
        function o(h) {
          if (((h = h || {}), h.circles)) return l(h)
          let c = new Map()
          if (
            (c.set(Date, (O) => new Date(O)),
            c.set(Map, (O, S) => new Map(b(Array.from(O), S))),
            c.set(Set, (O, S) => new Set(b(Array.from(O), S))),
            h.constructorHandlers)
          )
            for (let O of h.constructorHandlers) c.set(O[0], O[1])
          let m = null
          return h.proto ? A : w
          function b(O, S) {
            let C = Object.keys(O),
              W = new Array(C.length)
            for (let X = 0; X < C.length; X++) {
              let H = C[X],
                G = O[H]
              typeof G != "object" || G === null
                ? (W[H] = G)
                : G.constructor !== Object && (m = c.get(G.constructor))
                  ? (W[H] = m(G, S))
                  : ArrayBuffer.isView(G)
                    ? (W[H] = i(G))
                    : (W[H] = S(G))
            }
            return W
          }
          function w(O) {
            if (typeof O != "object" || O === null) return O
            if (Array.isArray(O)) return b(O, w)
            if (O.constructor !== Object && (m = c.get(O.constructor))) return m(O, w)
            let S = {}
            for (let C in O) {
              if (Object.hasOwnProperty.call(O, C) === !1) continue
              let W = O[C]
              typeof W != "object" || W === null
                ? (S[C] = W)
                : W.constructor !== Object && (m = c.get(W.constructor))
                  ? (S[C] = m(W, w))
                  : ArrayBuffer.isView(W)
                    ? (S[C] = i(W))
                    : (S[C] = w(W))
            }
            return S
          }
          function A(O) {
            if (typeof O != "object" || O === null) return O
            if (Array.isArray(O)) return b(O, A)
            if (O.constructor !== Object && (m = c.get(O.constructor))) return m(O, A)
            let S = {}
            for (let C in O) {
              let W = O[C]
              typeof W != "object" || W === null
                ? (S[C] = W)
                : W.constructor !== Object && (m = c.get(W.constructor))
                  ? (S[C] = m(W, A))
                  : ArrayBuffer.isView(W)
                    ? (S[C] = i(W))
                    : (S[C] = A(W))
            }
            return S
          }
        }
        function l(h) {
          let c = [],
            m = [],
            b = new Map()
          if (
            (b.set(Date, (C) => new Date(C)),
            b.set(Map, (C, W) => new Map(A(Array.from(C), W))),
            b.set(Set, (C, W) => new Set(A(Array.from(C), W))),
            h.constructorHandlers)
          )
            for (let C of h.constructorHandlers) b.set(C[0], C[1])
          let w = null
          return h.proto ? S : O
          function A(C, W) {
            let X = Object.keys(C),
              H = new Array(X.length)
            for (let G = 0; G < X.length; G++) {
              let yt = X[G],
                Bt = C[yt]
              if (typeof Bt != "object" || Bt === null) H[yt] = Bt
              else if (Bt.constructor !== Object && (w = b.get(Bt.constructor))) H[yt] = w(Bt, W)
              else if (ArrayBuffer.isView(Bt)) H[yt] = i(Bt)
              else {
                let ut = c.indexOf(Bt)
                ut !== -1 ? (H[yt] = m[ut]) : (H[yt] = W(Bt))
              }
            }
            return H
          }
          function O(C) {
            if (typeof C != "object" || C === null) return C
            if (Array.isArray(C)) return A(C, O)
            if (C.constructor !== Object && (w = b.get(C.constructor))) return w(C, O)
            let W = {}
            c.push(C), m.push(W)
            for (let X in C) {
              if (Object.hasOwnProperty.call(C, X) === !1) continue
              let H = C[X]
              if (typeof H != "object" || H === null) W[X] = H
              else if (H.constructor !== Object && (w = b.get(H.constructor))) W[X] = w(H, O)
              else if (ArrayBuffer.isView(H)) W[X] = i(H)
              else {
                let G = c.indexOf(H)
                G !== -1 ? (W[X] = m[G]) : (W[X] = O(H))
              }
            }
            return c.pop(), m.pop(), W
          }
          function S(C) {
            if (typeof C != "object" || C === null) return C
            if (Array.isArray(C)) return A(C, S)
            if (C.constructor !== Object && (w = b.get(C.constructor))) return w(C, S)
            let W = {}
            c.push(C), m.push(W)
            for (let X in C) {
              let H = C[X]
              if (typeof H != "object" || H === null) W[X] = H
              else if (H.constructor !== Object && (w = b.get(H.constructor))) W[X] = w(H, S)
              else if (ArrayBuffer.isView(H)) W[X] = i(H)
              else {
                let G = c.indexOf(H)
                G !== -1 ? (W[X] = m[G]) : (W[X] = S(H))
              }
            }
            return c.pop(), m.pop(), W
          }
        }
      })
    function pe(t, n) {
      if (!t) return
      function i(l) {
        l.target === this && (l.preventDefault(), n())
      }
      function o(l) {
        l.key.startsWith("Esc") && (l.preventDefault(), n())
      }
      t?.addEventListener("click", i),
        window.addCleanup(() => t?.removeEventListener("click", i)),
        document.addEventListener("keydown", o),
        window.addCleanup(() => document.removeEventListener("keydown", o))
    }
    function Ut(t) {
      for (; t.firstChild; ) t.removeChild(t.firstChild)
    }
    function Ne(t, ...n) {
      t &&
        n.forEach(([i, o]) => {
          let l = (h) => o(h)
          t.addEventListener(i, l), window.addCleanup(() => t.removeEventListener(i, l))
        })
    }
    function Le(t, n, i = 1e3) {
      let o = performance.now(),
        l = o + i
      function h() {
        let c = performance.now(),
          m = (c - o) / i,
          b = Math.floor(m * n.length)
        if (c < l) {
          let w = n.substring(0, b) + Kt(n.length - b)
          ;(t.textContent = w), requestAnimationFrame(h)
        } else t.textContent = n
      }
      requestAnimationFrame(h)
    }
    function Kt(t) {
      let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        i = ""
      for (let o = 0; o < t; o++) i += n.charAt(Math.floor(Math.random() * n.length))
      return i
    }
    var yn = { value: () => {} }
    function _e() {
      for (var t = 0, n = arguments.length, i = {}, o; t < n; ++t) {
        if (!(o = arguments[t] + "") || o in i || /[\s.]/.test(o))
          throw new Error("illegal type: " + o)
        i[o] = []
      }
      return new ve(i)
    }
    function ve(t) {
      this._ = t
    }
    function ne(t, n) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function (i) {
          var o = "",
            l = i.indexOf(".")
          if ((l >= 0 && ((o = i.slice(l + 1)), (i = i.slice(0, l))), i && !n.hasOwnProperty(i)))
            throw new Error("unknown type: " + i)
          return { type: i, name: o }
        })
    }
    ve.prototype = _e.prototype = {
      constructor: ve,
      on: function (t, n) {
        var i = this._,
          o = ne(t + "", i),
          l,
          h = -1,
          c = o.length
        if (arguments.length < 2) {
          for (; ++h < c; ) if ((l = (t = o[h]).type) && (l = Je(i[l], t.name))) return l
          return
        }
        if (n != null && typeof n != "function") throw new Error("invalid callback: " + n)
        for (; ++h < c; )
          if ((l = (t = o[h]).type)) i[l] = vn(i[l], t.name, n)
          else if (n == null) for (l in i) i[l] = vn(i[l], t.name, null)
        return this
      },
      copy: function () {
        var t = {},
          n = this._
        for (var i in n) t[i] = n[i].slice()
        return new ve(t)
      },
      call: function (t, n) {
        if ((l = arguments.length - 2) > 0)
          for (var i = new Array(l), o = 0, l, h; o < l; ++o) i[o] = arguments[o + 2]
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
        for (h = this._[t], o = 0, l = h.length; o < l; ++o) h[o].value.apply(n, i)
      },
      apply: function (t, n, i) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
        for (var o = this._[t], l = 0, h = o.length; l < h; ++l) o[l].value.apply(n, i)
      },
    }
    function Je(t, n) {
      for (var i = 0, o = t.length, l; i < o; ++i) if ((l = t[i]).name === n) return l.value
    }
    function vn(t, n, i) {
      for (var o = 0, l = t.length; o < l; ++o)
        if (t[o].name === n) {
          ;(t[o] = yn), (t = t.slice(0, o).concat(t.slice(o + 1)))
          break
        }
      return i != null && t.push({ name: n, value: i }), t
    }
    var Qe = _e,
      Xe = "http://www.w3.org/1999/xhtml",
      qe = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: Xe,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      }
    function me(t) {
      var n = (t += ""),
        i = n.indexOf(":")
      return (
        i >= 0 && (n = t.slice(0, i)) !== "xmlns" && (t = t.slice(i + 1)),
        qe.hasOwnProperty(n) ? { space: qe[n], local: t } : t
      )
    }
    function fn(t) {
      return function () {
        var n = this.ownerDocument,
          i = this.namespaceURI
        return i === Xe && n.documentElement.namespaceURI === Xe
          ? n.createElement(t)
          : n.createElementNS(i, t)
      }
    }
    function we(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    }
    function dn(t) {
      var n = me(t)
      return (n.local ? we : fn)(n)
    }
    function Ze() {}
    function te(t) {
      return t == null
        ? Ze
        : function () {
            return this.querySelector(t)
          }
    }
    function Dn(t) {
      typeof t != "function" && (t = te(t))
      for (var n = this._groups, i = n.length, o = new Array(i), l = 0; l < i; ++l)
        for (var h = n[l], c = h.length, m = (o[l] = new Array(c)), b, w, A = 0; A < c; ++A)
          (b = h[A]) &&
            (w = t.call(b, b.__data__, A, h)) &&
            ("__data__" in b && (w.__data__ = b.__data__), (m[A] = w))
      return new lt(o, this._parents)
    }
    function ke(t) {
      return t == null ? [] : Array.isArray(t) ? t : Array.from(t)
    }
    function be() {
      return []
    }
    function tn(t) {
      return t == null
        ? be
        : function () {
            return this.querySelectorAll(t)
          }
    }
    function Ye(t) {
      return function () {
        return ke(t.apply(this, arguments))
      }
    }
    function wn(t) {
      typeof t == "function" ? (t = Ye(t)) : (t = tn(t))
      for (var n = this._groups, i = n.length, o = [], l = [], h = 0; h < i; ++h)
        for (var c = n[h], m = c.length, b, w = 0; w < m; ++w)
          (b = c[w]) && (o.push(t.call(b, b.__data__, w, c)), l.push(b))
      return new lt(o, l)
    }
    function xn(t) {
      return function () {
        return this.matches(t)
      }
    }
    function un(t) {
      return function (n) {
        return n.matches(t)
      }
    }
    var Se = Array.prototype.find
    function xe(t) {
      return function () {
        return Se.call(this.children, t)
      }
    }
    function We() {
      return this.firstElementChild
    }
    function He(t) {
      return this.select(t == null ? We : xe(typeof t == "function" ? t : un(t)))
    }
    var rt = Array.prototype.filter
    function mt() {
      return Array.from(this.children)
    }
    function Ct(t) {
      return function () {
        return rt.call(this.children, t)
      }
    }
    function Tt(t) {
      return this.selectAll(t == null ? mt : Ct(typeof t == "function" ? t : un(t)))
    }
    function Pt(t) {
      typeof t != "function" && (t = xn(t))
      for (var n = this._groups, i = n.length, o = new Array(i), l = 0; l < i; ++l)
        for (var h = n[l], c = h.length, m = (o[l] = []), b, w = 0; w < c; ++w)
          (b = h[w]) && t.call(b, b.__data__, w, h) && m.push(b)
      return new lt(o, this._parents)
    }
    function Ot(t) {
      return new Array(t.length)
    }
    function It() {
      return new lt(this._enter || this._groups.map(Ot), this._parents)
    }
    function ie(t, n) {
      ;(this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = n)
    }
    ie.prototype = {
      constructor: ie,
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
    function ce(t) {
      return function () {
        return t
      }
    }
    function Ce(t, n, i, o, l, h) {
      for (var c = 0, m, b = n.length, w = h.length; c < w; ++c)
        (m = n[c]) ? ((m.__data__ = h[c]), (o[c] = m)) : (i[c] = new ie(t, h[c]))
      for (; c < b; ++c) (m = n[c]) && (l[c] = m)
    }
    function Pe(t, n, i, o, l, h, c) {
      var m,
        b,
        w = new Map(),
        A = n.length,
        O = h.length,
        S = new Array(A),
        C
      for (m = 0; m < A; ++m)
        (b = n[m]) &&
          ((S[m] = C = c.call(b, b.__data__, m, n) + ""), w.has(C) ? (l[m] = b) : w.set(C, b))
      for (m = 0; m < O; ++m)
        (C = c.call(t, h[m], m, h) + ""),
          (b = w.get(C)) ? ((o[m] = b), (b.__data__ = h[m]), w.delete(C)) : (i[m] = new ie(t, h[m]))
      for (m = 0; m < A; ++m) (b = n[m]) && w.get(S[m]) === b && (l[m] = b)
    }
    function Rt(t) {
      return t.__data__
    }
    function ue(t, n) {
      if (!arguments.length) return Array.from(this, Rt)
      var i = n ? Pe : Ce,
        o = this._parents,
        l = this._groups
      typeof t != "function" && (t = ce(t))
      for (
        var h = l.length, c = new Array(h), m = new Array(h), b = new Array(h), w = 0;
        w < h;
        ++w
      ) {
        var A = o[w],
          O = l[w],
          S = O.length,
          C = Ft(t.call(A, A && A.__data__, w, o)),
          W = C.length,
          X = (m[w] = new Array(W)),
          H = (c[w] = new Array(W)),
          G = (b[w] = new Array(S))
        i(A, O, X, H, G, C, n)
        for (var yt = 0, Bt = 0, ut, St; yt < W; ++yt)
          if ((ut = X[yt])) {
            for (yt >= Bt && (Bt = yt + 1); !(St = H[Bt]) && ++Bt < W; );
            ut._next = St || null
          }
      }
      return (c = new lt(c, o)), (c._enter = m), (c._exit = b), c
    }
    function Ft(t) {
      return typeof t == "object" && "length" in t ? t : Array.from(t)
    }
    function qt() {
      return new lt(this._exit || this._groups.map(Ot), this._parents)
    }
    function he(t, n, i) {
      var o = this.enter(),
        l = this,
        h = this.exit()
      return (
        typeof t == "function" ? ((o = t(o)), o && (o = o.selection())) : (o = o.append(t + "")),
        n != null && ((l = n(l)), l && (l = l.selection())),
        i == null ? h.remove() : i(h),
        o && l ? o.merge(l).order() : l
      )
    }
    function re(t) {
      for (
        var n = t.selection ? t.selection() : t,
          i = this._groups,
          o = n._groups,
          l = i.length,
          h = o.length,
          c = Math.min(l, h),
          m = new Array(l),
          b = 0;
        b < c;
        ++b
      )
        for (var w = i[b], A = o[b], O = w.length, S = (m[b] = new Array(O)), C, W = 0; W < O; ++W)
          (C = w[W] || A[W]) && (S[W] = C)
      for (; b < l; ++b) m[b] = i[b]
      return new lt(m, this._parents)
    }
    function Ee() {
      for (var t = this._groups, n = -1, i = t.length; ++n < i; )
        for (var o = t[n], l = o.length - 1, h = o[l], c; --l >= 0; )
          (c = o[l]) &&
            (h && c.compareDocumentPosition(h) ^ 4 && h.parentNode.insertBefore(c, h), (h = c))
      return this
    }
    function en(t) {
      t || (t = Ve)
      function n(O, S) {
        return O && S ? t(O.__data__, S.__data__) : !O - !S
      }
      for (var i = this._groups, o = i.length, l = new Array(o), h = 0; h < o; ++h) {
        for (var c = i[h], m = c.length, b = (l[h] = new Array(m)), w, A = 0; A < m; ++A)
          (w = c[A]) && (b[A] = w)
        b.sort(n)
      }
      return new lt(l, this._parents).order()
    }
    function Ve(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function Ie() {
      var t = arguments[0]
      return (arguments[0] = this), t.apply(null, arguments), this
    }
    function bn() {
      return Array.from(this)
    }
    function jn() {
      for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
        for (var o = t[n], l = 0, h = o.length; l < h; ++l) {
          var c = o[l]
          if (c) return c
        }
      return null
    }
    function kn() {
      let t = 0
      for (let n of this) ++t
      return t
    }
    function sn() {
      return !this.node()
    }
    function Fn(t) {
      for (var n = this._groups, i = 0, o = n.length; i < o; ++i)
        for (var l = n[i], h = 0, c = l.length, m; h < c; ++h)
          (m = l[h]) && t.call(m, m.__data__, h, l)
      return this
    }
    function Nn(t) {
      return function () {
        this.removeAttribute(t)
      }
    }
    function Bn(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }
    function zn(t, n) {
      return function () {
        this.setAttribute(t, n)
      }
    }
    function Hn(t, n) {
      return function () {
        this.setAttributeNS(t.space, t.local, n)
      }
    }
    function d(t, n) {
      return function () {
        var i = n.apply(this, arguments)
        i == null ? this.removeAttribute(t) : this.setAttribute(t, i)
      }
    }
    function B(t, n) {
      return function () {
        var i = n.apply(this, arguments)
        i == null
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, i)
      }
    }
    function T(t, n) {
      var i = me(t)
      if (arguments.length < 2) {
        var o = this.node()
        return i.local ? o.getAttributeNS(i.space, i.local) : o.getAttribute(i)
      }
      return this.each(
        (n == null
          ? i.local
            ? Bn
            : Nn
          : typeof n == "function"
            ? i.local
              ? B
              : d
            : i.local
              ? Hn
              : zn)(i, n),
      )
    }
    function $(t) {
      return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView
    }
    function P(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }
    function tt(t, n, i) {
      return function () {
        this.style.setProperty(t, n, i)
      }
    }
    function ct(t, n, i) {
      return function () {
        var o = n.apply(this, arguments)
        o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, i)
      }
    }
    function st(t, n, i) {
      return arguments.length > 1
        ? this.each((n == null ? P : typeof n == "function" ? ct : tt)(t, n, i ?? ""))
        : xt(this.node(), t)
    }
    function xt(t, n) {
      return t.style.getPropertyValue(n) || $(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function Vt(t) {
      return function () {
        delete this[t]
      }
    }
    function Gt(t, n) {
      return function () {
        this[t] = n
      }
    }
    function ye(t, n) {
      return function () {
        var i = n.apply(this, arguments)
        i == null ? delete this[t] : (this[t] = i)
      }
    }
    function oe(t, n) {
      return arguments.length > 1
        ? this.each((n == null ? Vt : typeof n == "function" ? ye : Gt)(t, n))
        : this.node()[t]
    }
    function ee(t) {
      return t.trim().split(/^|\s+/)
    }
    function Nt(t) {
      return t.classList || new ae(t)
    }
    function ae(t) {
      ;(this._node = t), (this._names = ee(t.getAttribute("class") || ""))
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
    function Te(t, n) {
      for (var i = Nt(t), o = -1, l = n.length; ++o < l; ) i.add(n[o])
    }
    function ln(t, n) {
      for (var i = Nt(t), o = -1, l = n.length; ++o < l; ) i.remove(n[o])
    }
    function Re(t) {
      return function () {
        Te(this, t)
      }
    }
    function Oe(t) {
      return function () {
        ln(this, t)
      }
    }
    function nn(t, n) {
      return function () {
        ;(n.apply(this, arguments) ? Te : ln)(this, t)
      }
    }
    function Ln(t, n) {
      var i = ee(t + "")
      if (arguments.length < 2) {
        for (var o = Nt(this.node()), l = -1, h = i.length; ++l < h; )
          if (!o.contains(i[l])) return !1
        return !0
      }
      return this.each((typeof n == "function" ? nn : n ? Re : Oe)(i, n))
    }
    function cn() {
      this.textContent = ""
    }
    function En(t) {
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
    function I(t) {
      return arguments.length
        ? this.each(t == null ? cn : (typeof t == "function" ? N : En)(t))
        : this.node().textContent
    }
    function a() {
      this.innerHTML = ""
    }
    function f(t) {
      return function () {
        this.innerHTML = t
      }
    }
    function p(t) {
      return function () {
        var n = t.apply(this, arguments)
        this.innerHTML = n ?? ""
      }
    }
    function x(t) {
      return arguments.length
        ? this.each(t == null ? a : (typeof t == "function" ? p : f)(t))
        : this.node().innerHTML
    }
    function _() {
      this.nextSibling && this.parentNode.appendChild(this)
    }
    function L() {
      return this.each(_)
    }
    function q() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function z() {
      return this.each(q)
    }
    function nt(t) {
      var n = typeof t == "function" ? t : dn(t)
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments))
      })
    }
    function J() {
      return null
    }
    function ht(t, n) {
      var i = typeof t == "function" ? t : dn(t),
        o = n == null ? J : typeof n == "function" ? n : te(n)
      return this.select(function () {
        return this.insertBefore(i.apply(this, arguments), o.apply(this, arguments) || null)
      })
    }
    function U() {
      var t = this.parentNode
      t && t.removeChild(this)
    }
    function Z() {
      return this.each(U)
    }
    function Q() {
      var t = this.cloneNode(!1),
        n = this.parentNode
      return n ? n.insertBefore(t, this.nextSibling) : t
    }
    function R() {
      var t = this.cloneNode(!0),
        n = this.parentNode
      return n ? n.insertBefore(t, this.nextSibling) : t
    }
    function gt(t) {
      return this.select(t ? R : Q)
    }
    function kt(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__
    }
    function $t(t) {
      return function (n) {
        t.call(this, n, this.__data__)
      }
    }
    function r(t) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function (n) {
          var i = "",
            o = n.indexOf(".")
          return o >= 0 && ((i = n.slice(o + 1)), (n = n.slice(0, o))), { type: n, name: i }
        })
    }
    function v(t) {
      return function () {
        var n = this.__on
        if (n) {
          for (var i = 0, o = -1, l = n.length, h; i < l; ++i)
            (h = n[i]),
              (!t.type || h.type === t.type) && h.name === t.name
                ? this.removeEventListener(h.type, h.listener, h.options)
                : (n[++o] = h)
          ++o ? (n.length = o) : delete this.__on
        }
      }
    }
    function k(t, n, i) {
      return function () {
        var o = this.__on,
          l,
          h = $t(n)
        if (o) {
          for (var c = 0, m = o.length; c < m; ++c)
            if ((l = o[c]).type === t.type && l.name === t.name) {
              this.removeEventListener(l.type, l.listener, l.options),
                this.addEventListener(l.type, (l.listener = h), (l.options = i)),
                (l.value = n)
              return
            }
        }
        this.addEventListener(t.type, h, i),
          (l = { type: t.type, name: t.name, value: n, listener: h, options: i }),
          o ? o.push(l) : (this.__on = [l])
      }
    }
    function M(t, n, i) {
      var o = r(t + ""),
        l,
        h = o.length,
        c
      if (arguments.length < 2) {
        var m = this.node().__on
        if (m) {
          for (var b = 0, w = m.length, A; b < w; ++b)
            for (l = 0, A = m[b]; l < h; ++l)
              if ((c = o[l]).type === A.type && c.name === A.name) return A.value
        }
        return
      }
      for (m = n ? k : v, l = 0; l < h; ++l) this.each(m(o[l], n, i))
      return this
    }
    function F(t, n, i) {
      var o = $(t),
        l = o.CustomEvent
      typeof l == "function"
        ? (l = new l(n, i))
        : ((l = o.document.createEvent("Event")),
          i
            ? (l.initEvent(n, i.bubbles, i.cancelable), (l.detail = i.detail))
            : l.initEvent(n, !1, !1)),
        t.dispatchEvent(l)
    }
    function j(t, n) {
      return function () {
        return F(this, t, n)
      }
    }
    function et(t, n) {
      return function () {
        return F(this, t, n.apply(this, arguments))
      }
    }
    function it(t, n) {
      return this.each((typeof n == "function" ? et : j)(t, n))
    }
    function* Y() {
      for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
        for (var o = t[n], l = 0, h = o.length, c; l < h; ++l) (c = o[l]) && (yield c)
    }
    var ot = [null]
    function lt(t, n) {
      ;(this._groups = t), (this._parents = n)
    }
    function At() {
      return new lt([[document.documentElement]], ot)
    }
    function _t() {
      return this
    }
    lt.prototype = At.prototype = {
      constructor: lt,
      select: Dn,
      selectAll: wn,
      selectChild: He,
      selectChildren: Tt,
      filter: Pt,
      data: ue,
      enter: It,
      exit: qt,
      join: he,
      merge: re,
      selection: _t,
      order: Ee,
      sort: en,
      call: Ie,
      nodes: bn,
      node: jn,
      size: kn,
      empty: sn,
      each: Fn,
      attr: T,
      style: st,
      property: oe,
      classed: Ln,
      text: I,
      html: x,
      raise: L,
      lower: z,
      append: nt,
      insert: ht,
      remove: Z,
      clone: gt,
      datum: kt,
      on: M,
      dispatch: it,
      [Symbol.iterator]: Y,
    }
    var wt = At
    function vt(t) {
      return typeof t == "string"
        ? new lt([[document.querySelector(t)]], [document.documentElement])
        : new lt([[t]], ot)
    }
    function zt(t) {
      let n
      for (; (n = t.sourceEvent); ) t = n
      return t
    }
    function Xt(t, n) {
      if (((t = zt(t)), n === void 0 && (n = t.currentTarget), n)) {
        var i = n.ownerSVGElement || n
        if (i.createSVGPoint) {
          var o = i.createSVGPoint()
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
    function je(t) {
      return typeof t == "string"
        ? new lt([document.querySelectorAll(t)], [document.documentElement])
        : new lt([ke(t)], ot)
    }
    var ze = { passive: !1 },
      Fe = { capture: !0, passive: !1 }
    function An(t) {
      t.stopImmediatePropagation()
    }
    function qn(t) {
      t.preventDefault(), t.stopImmediatePropagation()
    }
    function _r(t) {
      var n = t.document.documentElement,
        i = vt(t).on("dragstart.drag", qn, Fe)
      "onselectstart" in n
        ? i.on("selectstart.drag", qn, Fe)
        : ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = "none"))
    }
    function rr(t, n) {
      var i = t.document.documentElement,
        o = vt(t).on("dragstart.drag", null)
      n &&
        (o.on("click.drag", qn, Fe),
        setTimeout(function () {
          o.on("click.drag", null)
        }, 0)),
        "onselectstart" in i
          ? o.on("selectstart.drag", null)
          : ((i.style.MozUserSelect = i.__noselect), delete i.__noselect)
    }
    var Rr = (t) => () => t
    function hi(
      t,
      {
        sourceEvent: n,
        subject: i,
        target: o,
        identifier: l,
        active: h,
        x: c,
        y: m,
        dx: b,
        dy: w,
        dispatch: A,
      },
    ) {
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        subject: { value: i, enumerable: !0, configurable: !0 },
        target: { value: o, enumerable: !0, configurable: !0 },
        identifier: { value: l, enumerable: !0, configurable: !0 },
        active: { value: h, enumerable: !0, configurable: !0 },
        x: { value: c, enumerable: !0, configurable: !0 },
        y: { value: m, enumerable: !0, configurable: !0 },
        dx: { value: b, enumerable: !0, configurable: !0 },
        dy: { value: w, enumerable: !0, configurable: !0 },
        _: { value: A },
      })
    }
    hi.prototype.on = function () {
      var t = this._.on.apply(this._, arguments)
      return t === this._ ? this : t
    }
    function fi(t) {
      return !t.ctrlKey && !t.button
    }
    function Mi() {
      return this.parentNode
    }
    function kr(t, n) {
      return n ?? { x: t.x, y: t.y }
    }
    function Ar() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function Hr() {
      var t = fi,
        n = Mi,
        i = kr,
        o = Ar,
        l = {},
        h = Qe("start", "drag", "end"),
        c = 0,
        m,
        b,
        w,
        A,
        O = 0
      function S(ut) {
        ut.on("mousedown.drag", C)
          .filter(o)
          .on("touchstart.drag", H)
          .on("touchmove.drag", G, ze)
          .on("touchend.drag touchcancel.drag", yt)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      function C(ut, St) {
        if (!(A || !t.call(this, ut, St))) {
          var Yt = Bt(this, n.call(this, ut, St), ut, St, "mouse")
          Yt &&
            (vt(ut.view).on("mousemove.drag", W, Fe).on("mouseup.drag", X, Fe),
            _r(ut.view),
            An(ut),
            (w = !1),
            (m = ut.clientX),
            (b = ut.clientY),
            Yt("start", ut))
        }
      }
      function W(ut) {
        if ((qn(ut), !w)) {
          var St = ut.clientX - m,
            Yt = ut.clientY - b
          w = St * St + Yt * Yt > O
        }
        l.mouse("drag", ut)
      }
      function X(ut) {
        vt(ut.view).on("mousemove.drag mouseup.drag", null),
          rr(ut.view, w),
          qn(ut),
          l.mouse("end", ut)
      }
      function H(ut, St) {
        if (t.call(this, ut, St)) {
          var Yt = ut.changedTouches,
            K = n.call(this, ut, St),
            Dt = Yt.length,
            dt,
            Mt
          for (dt = 0; dt < Dt; ++dt)
            (Mt = Bt(this, K, ut, St, Yt[dt].identifier, Yt[dt])) &&
              (An(ut), Mt("start", ut, Yt[dt]))
        }
      }
      function G(ut) {
        var St = ut.changedTouches,
          Yt = St.length,
          K,
          Dt
        for (K = 0; K < Yt; ++K) (Dt = l[St[K].identifier]) && (qn(ut), Dt("drag", ut, St[K]))
      }
      function yt(ut) {
        var St = ut.changedTouches,
          Yt = St.length,
          K,
          Dt
        for (
          A && clearTimeout(A),
            A = setTimeout(function () {
              A = null
            }, 500),
            K = 0;
          K < Yt;
          ++K
        )
          (Dt = l[St[K].identifier]) && (An(ut), Dt("end", ut, St[K]))
      }
      function Bt(ut, St, Yt, K, Dt, dt) {
        var Mt = h.copy(),
          Ht = Xt(dt || Yt, St),
          Zt,
          pt,
          V
        if (
          (V = i.call(
            ut,
            new hi("beforestart", {
              sourceEvent: Yt,
              target: S,
              identifier: Dt,
              active: c,
              x: Ht[0],
              y: Ht[1],
              dx: 0,
              dy: 0,
              dispatch: Mt,
            }),
            K,
          )) != null
        )
          return (
            (Zt = V.x - Ht[0] || 0),
            (pt = V.y - Ht[1] || 0),
            function Et(at, bt, jt) {
              var Lt = Ht,
                ft
              switch (at) {
                case "start":
                  ;(l[Dt] = Et), (ft = c++)
                  break
                case "end":
                  delete l[Dt], --c
                case "drag":
                  ;(Ht = Xt(jt || bt, St)), (ft = c)
                  break
              }
              Mt.call(
                at,
                ut,
                new hi(at, {
                  sourceEvent: bt,
                  subject: V,
                  target: S,
                  identifier: Dt,
                  active: ft,
                  x: Ht[0] + Zt,
                  y: Ht[1] + pt,
                  dx: Ht[0] - Lt[0],
                  dy: Ht[1] - Lt[1],
                  dispatch: Mt,
                }),
                K,
              )
            }
          )
      }
      return (
        (S.filter = function (ut) {
          return arguments.length ? ((t = typeof ut == "function" ? ut : Rr(!!ut)), S) : t
        }),
        (S.container = function (ut) {
          return arguments.length ? ((n = typeof ut == "function" ? ut : Rr(ut)), S) : n
        }),
        (S.subject = function (ut) {
          return arguments.length ? ((i = typeof ut == "function" ? ut : Rr(ut)), S) : i
        }),
        (S.touchable = function (ut) {
          return arguments.length ? ((o = typeof ut == "function" ? ut : Rr(!!ut)), S) : o
        }),
        (S.on = function () {
          var ut = h.on.apply(h, arguments)
          return ut === h ? S : ut
        }),
        (S.clickDistance = function (ut) {
          return arguments.length ? ((O = (ut = +ut) * ut), S) : Math.sqrt(O)
        }),
        S
      )
    }
    function Gn(t, n, i) {
      ;(t.prototype = n.prototype = i), (i.constructor = t)
    }
    function hr(t, n) {
      var i = Object.create(t.prototype)
      for (var o in n) i[o] = n[o]
      return i
    }
    function _n() {}
    var Cr = 0.7,
      Vr = 1 / Cr,
      fr = "\\s*([+-]?\\d+)\\s*",
      Dr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      fu = /^#([0-9a-f]{3,8})$/,
      du = new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`),
      Fi = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`),
      Ni = new RegExp(`^rgba\\(${fr},${fr},${fr},${Dr}\\)$`),
      gu = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${Dr}\\)$`),
      pu = new RegExp(`^hsl\\(${Dr},${Pn},${Pn}\\)$`),
      Li = new RegExp(`^hsla\\(${Dr},${Pn},${Pn},${Dr}\\)$`),
      dr = {
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
    Gn(_n, rn, {
      copy(t) {
        return Object.assign(new this.constructor(), this, t)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: di,
      formatHex: di,
      formatHex8: Ur,
      formatHsl: mu,
      formatRgb: Br,
      toString: Br,
    })
    function di() {
      return this.rgb().formatHex()
    }
    function Ur() {
      return this.rgb().formatHex8()
    }
    function mu() {
      return Xr(this).formatHsl()
    }
    function Br() {
      return this.rgb().formatRgb()
    }
    function rn(t) {
      var n, i
      return (
        (t = (t + "").trim().toLowerCase()),
        (n = fu.exec(t))
          ? ((i = n[1].length),
            (n = parseInt(n[1], 16)),
            i === 6
              ? gi(n)
              : i === 3
                ? new Ke(
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (n & 240),
                    ((n & 15) << 4) | (n & 15),
                    1,
                  )
                : i === 8
                  ? Wr((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (n & 255) / 255)
                  : i === 4
                    ? Wr(
                        ((n >> 12) & 15) | ((n >> 8) & 240),
                        ((n >> 8) & 15) | ((n >> 4) & 240),
                        ((n >> 4) & 15) | (n & 240),
                        (((n & 15) << 4) | (n & 15)) / 255,
                      )
                    : null)
          : (n = du.exec(t))
            ? new Ke(n[1], n[2], n[3], 1)
            : (n = Fi.exec(t))
              ? new Ke((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
              : (n = Ni.exec(t))
                ? Wr(n[1], n[2], n[3], n[4])
                : (n = gu.exec(t))
                  ? Wr((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
                  : (n = pu.exec(t))
                    ? Mr(n[1], n[2] / 100, n[3] / 100, 1)
                    : (n = Li.exec(t))
                      ? Mr(n[1], n[2] / 100, n[3] / 100, n[4])
                      : dr.hasOwnProperty(t)
                        ? gi(dr[t])
                        : t === "transparent"
                          ? new Ke(NaN, NaN, NaN, 0)
                          : null
      )
    }
    function gi(t) {
      return new Ke((t >> 16) & 255, (t >> 8) & 255, t & 255, 1)
    }
    function Wr(t, n, i, o) {
      return o <= 0 && (t = n = i = NaN), new Ke(t, n, i, o)
    }
    function Ti(t) {
      return (
        t instanceof _n || (t = rn(t)),
        t ? ((t = t.rgb()), new Ke(t.r, t.g, t.b, t.opacity)) : new Ke()
      )
    }
    function ir(t, n, i, o) {
      return arguments.length === 1 ? Ti(t) : new Ke(t, n, i, o ?? 1)
    }
    function Ke(t, n, i, o) {
      ;(this.r = +t), (this.g = +n), (this.b = +i), (this.opacity = +o)
    }
    Gn(
      Ke,
      ir,
      hr(_n, {
        brighter(t) {
          return (
            (t = t == null ? Vr : Math.pow(Vr, t)),
            new Ke(this.r * t, this.g * t, this.b * t, this.opacity)
          )
        },
        darker(t) {
          return (
            (t = t == null ? Cr : Math.pow(Cr, t)),
            new Ke(this.r * t, this.g * t, this.b * t, this.opacity)
          )
        },
        rgb() {
          return this
        },
        clamp() {
          return new Ke(on(this.r), on(this.g), on(this.b), Kr(this.opacity))
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
        formatRgb: pi,
        toString: pi,
      }),
    )
    function Jn() {
      return `#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}`
    }
    function Oi() {
      return `#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}${Qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
    }
    function pi() {
      let t = Kr(this.opacity)
      return `${t === 1 ? "rgb(" : "rgba("}${on(this.r)}, ${on(this.g)}, ${on(this.b)}${t === 1 ? ")" : `, ${t})`}`
    }
    function Kr(t) {
      return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
    }
    function on(t) {
      return Math.max(0, Math.min(255, Math.round(t) || 0))
    }
    function Qn(t) {
      return (t = on(t)), (t < 16 ? "0" : "") + t.toString(16)
    }
    function Mr(t, n, i, o) {
      return (
        o <= 0 ? (t = n = i = NaN) : i <= 0 || i >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
        new Tn(t, n, i, o)
      )
    }
    function Xr(t) {
      if (t instanceof Tn) return new Tn(t.h, t.s, t.l, t.opacity)
      if ((t instanceof _n || (t = rn(t)), !t)) return new Tn()
      if (t instanceof Tn) return t
      t = t.rgb()
      var n = t.r / 255,
        i = t.g / 255,
        o = t.b / 255,
        l = Math.min(n, i, o),
        h = Math.max(n, i, o),
        c = NaN,
        m = h - l,
        b = (h + l) / 2
      return (
        m
          ? (n === h
              ? (c = (i - o) / m + (i < o) * 6)
              : i === h
                ? (c = (o - n) / m + 2)
                : (c = (n - i) / m + 4),
            (m /= b < 0.5 ? h + l : 2 - h - l),
            (c *= 60))
          : (m = b > 0 && b < 1 ? 0 : c),
        new Tn(c, m, b, t.opacity)
      )
    }
    function $i(t, n, i, o) {
      return arguments.length === 1 ? Xr(t) : new Tn(t, n, i, o ?? 1)
    }
    function Tn(t, n, i, o) {
      ;(this.h = +t), (this.s = +n), (this.l = +i), (this.opacity = +o)
    }
    Gn(
      Tn,
      $i,
      hr(_n, {
        brighter(t) {
          return (
            (t = t == null ? Vr : Math.pow(Vr, t)), new Tn(this.h, this.s, this.l * t, this.opacity)
          )
        },
        darker(t) {
          return (
            (t = t == null ? Cr : Math.pow(Cr, t)), new Tn(this.h, this.s, this.l * t, this.opacity)
          )
        },
        rgb() {
          var t = (this.h % 360) + (this.h < 0) * 360,
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            i = this.l,
            o = i + (i < 0.5 ? i : 1 - i) * n,
            l = 2 * i - o
          return new Ke(
            mi(t >= 240 ? t - 240 : t + 120, l, o),
            mi(t, l, o),
            mi(t < 120 ? t + 240 : t - 120, l, o),
            this.opacity,
          )
        },
        clamp() {
          return new Tn(Si(this.h), Fr(this.s), Fr(this.l), Kr(this.opacity))
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
          let t = Kr(this.opacity)
          return `${t === 1 ? "hsl(" : "hsla("}${Si(this.h)}, ${Fr(this.s) * 100}%, ${Fr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`
        },
      }),
    )
    function Si(t) {
      return (t = (t || 0) % 360), t < 0 ? t + 360 : t
    }
    function Fr(t) {
      return Math.max(0, Math.min(1, t || 0))
    }
    function mi(t, n, i) {
      return (
        (t < 60
          ? n + ((i - n) * t) / 60
          : t < 180
            ? i
            : t < 240
              ? n + ((i - n) * (240 - t)) / 60
              : n) * 255
      )
    }
    function ji(t, n, i, o, l) {
      var h = t * t,
        c = h * t
      return (
        ((1 - 3 * t + 3 * h - c) * n +
          (4 - 6 * h + 3 * c) * i +
          (1 + 3 * t + 3 * h - 3 * c) * o +
          c * l) /
        6
      )
    }
    function yu(t) {
      var n = t.length - 1
      return function (i) {
        var o = i <= 0 ? (i = 0) : i >= 1 ? ((i = 1), n - 1) : Math.floor(i * n),
          l = t[o],
          h = t[o + 1],
          c = o > 0 ? t[o - 1] : 2 * l - h,
          m = o < n - 1 ? t[o + 2] : 2 * h - l
        return ji((i - o / n) * n, c, l, h, m)
      }
    }
    function zi(t) {
      var n = t.length
      return function (i) {
        var o = Math.floor(((i %= 1) < 0 ? ++i : i) * n),
          l = t[(o + n - 1) % n],
          h = t[o % n],
          c = t[(o + 1) % n],
          m = t[(o + 2) % n]
        return ji((i - o / n) * n, l, h, c, m)
      }
    }
    var yi = (t) => () => t
    function qi(t, n) {
      return function (i) {
        return t + i * n
      }
    }
    function Qo(t, n, i) {
      return (
        (t = Math.pow(t, i)),
        (n = Math.pow(n, i) - t),
        (i = 1 / i),
        function (o) {
          return Math.pow(t + o * n, i)
        }
      )
    }
    function Zo(t) {
      return (t = +t) == 1
        ? Vn
        : function (n, i) {
            return i - n ? Qo(n, i, t) : yi(isNaN(n) ? i : n)
          }
    }
    function Vn(t, n) {
      var i = n - t
      return i ? qi(t, i) : yi(isNaN(t) ? n : t)
    }
    var Yr = (function t(n) {
      var i = Zo(n)
      function o(l, h) {
        var c = i((l = ir(l)).r, (h = ir(h)).r),
          m = i(l.g, h.g),
          b = i(l.b, h.b),
          w = Vn(l.opacity, h.opacity)
        return function (A) {
          return (l.r = c(A)), (l.g = m(A)), (l.b = b(A)), (l.opacity = w(A)), l + ""
        }
      }
      return (o.gamma = t), o
    })(1)
    function Gr(t) {
      return function (n) {
        var i = n.length,
          o = new Array(i),
          l = new Array(i),
          h = new Array(i),
          c,
          m
        for (c = 0; c < i; ++c)
          (m = ir(n[c])), (o[c] = m.r || 0), (l[c] = m.g || 0), (h[c] = m.b || 0)
        return (
          (o = t(o)),
          (l = t(l)),
          (h = t(h)),
          (m.opacity = 1),
          function (b) {
            return (m.r = o(b)), (m.g = l(b)), (m.b = h(b)), m + ""
          }
        )
      }
    }
    var ta = Gr(yu),
      ea = Gr(zi)
    function Zn(t, n) {
      return (
        (t = +t),
        (n = +n),
        function (i) {
          return t * (1 - i) + n * i
        }
      )
    }
    var Jr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Nr = new RegExp(Jr.source, "g")
    function Pi(t) {
      return function () {
        return t
      }
    }
    function Qr(t) {
      return function (n) {
        return t(n) + ""
      }
    }
    function vu(t, n) {
      var i = (Jr.lastIndex = Nr.lastIndex = 0),
        o,
        l,
        h,
        c = -1,
        m = [],
        b = []
      for (t = t + "", n = n + ""; (o = Jr.exec(t)) && (l = Nr.exec(n)); )
        (h = l.index) > i && ((h = n.slice(i, h)), m[c] ? (m[c] += h) : (m[++c] = h)),
          (o = o[0]) === (l = l[0])
            ? m[c]
              ? (m[c] += l)
              : (m[++c] = l)
            : ((m[++c] = null), b.push({ i: c, x: Zn(o, l) })),
          (i = Nr.lastIndex)
      return (
        i < n.length && ((h = n.slice(i)), m[c] ? (m[c] += h) : (m[++c] = h)),
        m.length < 2
          ? b[0]
            ? Qr(b[0].x)
            : Pi(n)
          : ((n = b.length),
            function (w) {
              for (var A = 0, O; A < n; ++A) m[(O = b[A]).i] = O.x(w)
              return m.join("")
            })
      )
    }
    var Ii = 180 / Math.PI,
      Zr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
    function Ri(t, n, i, o, l, h) {
      var c, m, b
      return (
        (c = Math.sqrt(t * t + n * n)) && ((t /= c), (n /= c)),
        (b = t * i + n * o) && ((i -= t * b), (o -= n * b)),
        (m = Math.sqrt(i * i + o * o)) && ((i /= m), (o /= m), (b /= m)),
        t * o < n * i && ((t = -t), (n = -n), (b = -b), (c = -c)),
        {
          translateX: l,
          translateY: h,
          rotate: Math.atan2(n, t) * Ii,
          skewX: Math.atan(b) * Ii,
          scaleX: c,
          scaleY: m,
        }
      )
    }
    var ti
    function wu(t) {
      let n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "")
      return n.isIdentity ? Zr : Ri(n.a, n.b, n.c, n.d, n.e, n.f)
    }
    function Hi(t) {
      return t == null
        ? Zr
        : (ti || (ti = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          ti.setAttribute("transform", t),
          (t = ti.transform.baseVal.consolidate())
            ? ((t = t.matrix), Ri(t.a, t.b, t.c, t.d, t.e, t.f))
            : Zr)
    }
    function Vi(t, n, i, o) {
      function l(w) {
        return w.length ? w.pop() + " " : ""
      }
      function h(w, A, O, S, C, W) {
        if (w !== O || A !== S) {
          var X = C.push("translate(", null, n, null, i)
          W.push({ i: X - 4, x: Zn(w, O) }, { i: X - 2, x: Zn(A, S) })
        } else (O || S) && C.push("translate(" + O + n + S + i)
      }
      function c(w, A, O, S) {
        w !== A
          ? (w - A > 180 ? (A += 360) : A - w > 180 && (w += 360),
            S.push({ i: O.push(l(O) + "rotate(", null, o) - 2, x: Zn(w, A) }))
          : A && O.push(l(O) + "rotate(" + A + o)
      }
      function m(w, A, O, S) {
        w !== A
          ? S.push({ i: O.push(l(O) + "skewX(", null, o) - 2, x: Zn(w, A) })
          : A && O.push(l(O) + "skewX(" + A + o)
      }
      function b(w, A, O, S, C, W) {
        if (w !== O || A !== S) {
          var X = C.push(l(C) + "scale(", null, ",", null, ")")
          W.push({ i: X - 4, x: Zn(w, O) }, { i: X - 2, x: Zn(A, S) })
        } else (O !== 1 || S !== 1) && C.push(l(C) + "scale(" + O + "," + S + ")")
      }
      return function (w, A) {
        var O = [],
          S = []
        return (
          (w = t(w)),
          (A = t(A)),
          h(w.translateX, w.translateY, A.translateX, A.translateY, O, S),
          c(w.rotate, A.rotate, O, S),
          m(w.skewX, A.skewX, O, S),
          b(w.scaleX, w.scaleY, A.scaleX, A.scaleY, O, S),
          (w = A = null),
          function (C) {
            for (var W = -1, X = S.length, H; ++W < X; ) O[(H = S[W]).i] = H.x(C)
            return O.join("")
          }
        )
      }
    }
    var xu = Vi(wu, "px, ", "px)", "deg)"),
      bu = Vi(Hi, ", ", ")", ")"),
      gr = 1e-12
    function pr(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2
    }
    function Lr(t) {
      return ((t = Math.exp(t)) - 1 / t) / 2
    }
    function Ui(t) {
      return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }
    var ei = (function t(n, i, o) {
        function l(h, c) {
          var m = h[0],
            b = h[1],
            w = h[2],
            A = c[0],
            O = c[1],
            S = c[2],
            C = A - m,
            W = O - b,
            X = C * C + W * W,
            H,
            G
          if (X < gr)
            (G = Math.log(S / w) / n),
              (H = function (K) {
                return [m + K * C, b + K * W, w * Math.exp(n * K * G)]
              })
          else {
            var yt = Math.sqrt(X),
              Bt = (S * S - w * w + o * X) / (2 * w * i * yt),
              ut = (S * S - w * w - o * X) / (2 * S * i * yt),
              St = Math.log(Math.sqrt(Bt * Bt + 1) - Bt),
              Yt = Math.log(Math.sqrt(ut * ut + 1) - ut)
            ;(G = (Yt - St) / n),
              (H = function (K) {
                var Dt = K * G,
                  dt = pr(St),
                  Mt = (w / (i * yt)) * (dt * Ui(n * Dt + St) - Lr(St))
                return [m + Mt * C, b + Mt * W, (w * dt) / pr(n * Dt + St)]
              })
          }
          return (H.duration = (G * 1e3 * n) / Math.SQRT2), H
        }
        return (
          (l.rho = function (h) {
            var c = Math.max(0.001, +h),
              m = c * c,
              b = m * m
            return t(c, m, b)
          }),
          l
        )
      })(Math.SQRT2, 2, 4),
      In = 0,
      tr = 0,
      On = 0,
      Tr = 1e3,
      er,
      mr,
      yr = 0,
      ur = 0,
      or = 0,
      ar = typeof performance == "object" && performance.now ? performance : Date,
      Wi =
        typeof window == "object" && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17)
            }
    function ni() {
      return ur || (Wi(Eu), (ur = ar.now() + or))
    }
    function Eu() {
      ur = 0
    }
    function ri() {
      this._call = this._time = this._next = null
    }
    ri.prototype = Or.prototype = {
      constructor: ri,
      restart: function (t, n, i) {
        if (typeof t != "function") throw new TypeError("callback is not a function")
        ;(i = (i == null ? ni() : +i) + (n == null ? 0 : +n)),
          !this._next && mr !== this && (mr ? (mr._next = this) : (er = this), (mr = this)),
          (this._call = t),
          (this._time = i),
          ii()
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), ii())
      },
    }
    function Or(t, n, i) {
      var o = new ri()
      return o.restart(t, n, i), o
    }
    function Ki() {
      ni(), ++In
      for (var t = er, n; t; ) (n = ur - t._time) >= 0 && t._call.call(void 0, n), (t = t._next)
      --In
    }
    function Xi() {
      ;(ur = (yr = ar.now()) + or), (In = tr = 0)
      try {
        Ki()
      } finally {
        ;(In = 0), Yi(), (ur = 0)
      }
    }
    function _u() {
      var t = ar.now(),
        n = t - yr
      n > Tr && ((or -= n), (yr = t))
    }
    function Yi() {
      for (var t, n = er, i, o = 1 / 0; n; )
        n._call
          ? (o > n._time && (o = n._time), (t = n), (n = n._next))
          : ((i = n._next), (n._next = null), (n = t ? (t._next = i) : (er = i)))
      ;(mr = t), ii(o)
    }
    function ii(t) {
      if (!In) {
        tr && (tr = clearTimeout(tr))
        var n = t - ur
        n > 24
          ? (t < 1 / 0 && (tr = setTimeout(Xi, t - ar.now() - or)), On && (On = clearInterval(On)))
          : (On || ((yr = ar.now()), (On = setInterval(_u, Tr))), (In = 1), Wi(Xi))
      }
    }
    function ui(t, n, i) {
      var o = new ri()
      return (
        (n = n == null ? 0 : +n),
        o.restart(
          (l) => {
            o.stop(), t(l + n)
          },
          n,
          i,
        ),
        o
      )
    }
    var oi = Qe("start", "end", "cancel", "interrupt"),
      Gi = [],
      ai = 0,
      $r = 1,
      vr = 2,
      wr = 3,
      $n = 4,
      Cn = 5,
      si = 6
    function sr(t, n, i, o, l, h) {
      var c = t.__transition
      if (!c) t.__transition = {}
      else if (i in c) return
      ku(t, i, {
        name: n,
        index: o,
        group: l,
        on: oi,
        tween: Gi,
        time: h.time,
        delay: h.delay,
        duration: h.duration,
        ease: h.ease,
        timer: null,
        state: ai,
      })
    }
    function vi(t, n) {
      var i = Sn(t, n)
      if (i.state > ai) throw new Error("too late; already scheduled")
      return i
    }
    function Rn(t, n) {
      var i = Sn(t, n)
      if (i.state > wr) throw new Error("too late; already running")
      return i
    }
    function Sn(t, n) {
      var i = t.__transition
      if (!i || !(i = i[n])) throw new Error("transition not found")
      return i
    }
    function ku(t, n, i) {
      var o = t.__transition,
        l
      ;(o[n] = i), (i.timer = Or(h, 0, i.time))
      function h(w) {
        ;(i.state = $r), i.timer.restart(c, i.delay, i.time), i.delay <= w && c(w - i.delay)
      }
      function c(w) {
        var A, O, S, C
        if (i.state !== $r) return b()
        for (A in o)
          if (((C = o[A]), C.name === i.name)) {
            if (C.state === wr) return ui(c)
            C.state === $n
              ? ((C.state = si),
                C.timer.stop(),
                C.on.call("interrupt", t, t.__data__, C.index, C.group),
                delete o[A])
              : +A < n &&
                ((C.state = si),
                C.timer.stop(),
                C.on.call("cancel", t, t.__data__, C.index, C.group),
                delete o[A])
          }
        if (
          (ui(function () {
            i.state === wr && ((i.state = $n), i.timer.restart(m, i.delay, i.time), m(w))
          }),
          (i.state = vr),
          i.on.call("start", t, t.__data__, i.index, i.group),
          i.state === vr)
        ) {
          for (i.state = wr, l = new Array((S = i.tween.length)), A = 0, O = -1; A < S; ++A)
            (C = i.tween[A].value.call(t, t.__data__, i.index, i.group)) && (l[++O] = C)
          l.length = O + 1
        }
      }
      function m(w) {
        for (
          var A =
              w < i.duration
                ? i.ease.call(null, w / i.duration)
                : (i.timer.restart(b), (i.state = Cn), 1),
            O = -1,
            S = l.length;
          ++O < S;

        )
          l[O].call(t, A)
        i.state === Cn && (i.on.call("end", t, t.__data__, i.index, i.group), b())
      }
      function b() {
        ;(i.state = si), i.timer.stop(), delete o[n]
        for (var w in o) return
        delete t.__transition
      }
    }
    function xr(t, n) {
      var i = t.__transition,
        o,
        l,
        h = !0,
        c
      if (i) {
        n = n == null ? null : n + ""
        for (c in i) {
          if ((o = i[c]).name !== n) {
            h = !1
            continue
          }
          ;(l = o.state > vr && o.state < Cn),
            (o.state = si),
            o.timer.stop(),
            o.on.call(l ? "interrupt" : "cancel", t, t.__data__, o.index, o.group),
            delete i[c]
        }
        h && delete t.__transition
      }
    }
    function Ji(t) {
      return this.each(function () {
        xr(this, t)
      })
    }
    function Au(t, n) {
      var i, o
      return function () {
        var l = Rn(this, t),
          h = l.tween
        if (h !== i) {
          o = i = h
          for (var c = 0, m = o.length; c < m; ++c)
            if (o[c].name === n) {
              ;(o = o.slice()), o.splice(c, 1)
              break
            }
        }
        l.tween = o
      }
    }
    function Cu(t, n, i) {
      var o, l
      if (typeof i != "function") throw new Error()
      return function () {
        var h = Rn(this, t),
          c = h.tween
        if (c !== o) {
          l = (o = c).slice()
          for (var m = { name: n, value: i }, b = 0, w = l.length; b < w; ++b)
            if (l[b].name === n) {
              l[b] = m
              break
            }
          b === w && l.push(m)
        }
        h.tween = l
      }
    }
    function Du(t, n) {
      var i = this._id
      if (((t += ""), arguments.length < 2)) {
        for (var o = Sn(this.node(), i).tween, l = 0, h = o.length, c; l < h; ++l)
          if ((c = o[l]).name === t) return c.value
        return null
      }
      return this.each((n == null ? Au : Cu)(i, t, n))
    }
    function wi(t, n, i) {
      var o = t._id
      return (
        t.each(function () {
          var l = Rn(this, o)
          ;(l.value || (l.value = {}))[n] = i.apply(this, arguments)
        }),
        function (l) {
          return Sn(l, o).value[n]
        }
      )
    }
    function Qi(t, n) {
      var i
      return (typeof n == "number" ? Zn : n instanceof rn ? Yr : (i = rn(n)) ? ((n = i), Yr) : vu)(
        t,
        n,
      )
    }
    function Bu(t) {
      return function () {
        this.removeAttribute(t)
      }
    }
    function Mu(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }
    function Fu(t, n, i) {
      var o,
        l = i + "",
        h
      return function () {
        var c = this.getAttribute(t)
        return c === l ? null : c === o ? h : (h = n((o = c), i))
      }
    }
    function Nu(t, n, i) {
      var o,
        l = i + "",
        h
      return function () {
        var c = this.getAttributeNS(t.space, t.local)
        return c === l ? null : c === o ? h : (h = n((o = c), i))
      }
    }
    function Lu(t, n, i) {
      var o, l, h
      return function () {
        var c,
          m = i(this),
          b
        return m == null
          ? void this.removeAttribute(t)
          : ((c = this.getAttribute(t)),
            (b = m + ""),
            c === b ? null : c === o && b === l ? h : ((l = b), (h = n((o = c), m))))
      }
    }
    function Tu(t, n, i) {
      var o, l, h
      return function () {
        var c,
          m = i(this),
          b
        return m == null
          ? void this.removeAttributeNS(t.space, t.local)
          : ((c = this.getAttributeNS(t.space, t.local)),
            (b = m + ""),
            c === b ? null : c === o && b === l ? h : ((l = b), (h = n((o = c), m))))
      }
    }
    function Ou(t, n) {
      var i = me(t),
        o = i === "transform" ? bu : Qi
      return this.attrTween(
        t,
        typeof n == "function"
          ? (i.local ? Tu : Lu)(i, o, wi(this, "attr." + t, n))
          : n == null
            ? (i.local ? Mu : Bu)(i)
            : (i.local ? Nu : Fu)(i, o, n),
      )
    }
    function $u(t, n) {
      return function (i) {
        this.setAttribute(t, n.call(this, i))
      }
    }
    function Su(t, n) {
      return function (i) {
        this.setAttributeNS(t.space, t.local, n.call(this, i))
      }
    }
    function ju(t, n) {
      var i, o
      function l() {
        var h = n.apply(this, arguments)
        return h !== o && (i = (o = h) && Su(t, h)), i
      }
      return (l._value = n), l
    }
    function zu(t, n) {
      var i, o
      function l() {
        var h = n.apply(this, arguments)
        return h !== o && (i = (o = h) && $u(t, h)), i
      }
      return (l._value = n), l
    }
    function qu(t, n) {
      var i = "attr." + t
      if (arguments.length < 2) return (i = this.tween(i)) && i._value
      if (n == null) return this.tween(i, null)
      if (typeof n != "function") throw new Error()
      var o = me(t)
      return this.tween(i, (o.local ? ju : zu)(o, n))
    }
    function Pu(t, n) {
      return function () {
        vi(this, t).delay = +n.apply(this, arguments)
      }
    }
    function Iu(t, n) {
      return (
        (n = +n),
        function () {
          vi(this, t).delay = n
        }
      )
    }
    function Ru(t) {
      var n = this._id
      return arguments.length
        ? this.each((typeof t == "function" ? Pu : Iu)(n, t))
        : Sn(this.node(), n).delay
    }
    function Hu(t, n) {
      return function () {
        Rn(this, t).duration = +n.apply(this, arguments)
      }
    }
    function Vu(t, n) {
      return (
        (n = +n),
        function () {
          Rn(this, t).duration = n
        }
      )
    }
    function Uu(t) {
      var n = this._id
      return arguments.length
        ? this.each((typeof t == "function" ? Hu : Vu)(n, t))
        : Sn(this.node(), n).duration
    }
    function Wu(t, n) {
      if (typeof n != "function") throw new Error()
      return function () {
        Rn(this, t).ease = n
      }
    }
    function Ku(t) {
      var n = this._id
      return arguments.length ? this.each(Wu(n, t)) : Sn(this.node(), n).ease
    }
    function Xu(t, n) {
      return function () {
        var i = n.apply(this, arguments)
        if (typeof i != "function") throw new Error()
        Rn(this, t).ease = i
      }
    }
    function Yu(t) {
      if (typeof t != "function") throw new Error()
      return this.each(Xu(this._id, t))
    }
    function Gu(t) {
      typeof t != "function" && (t = xn(t))
      for (var n = this._groups, i = n.length, o = new Array(i), l = 0; l < i; ++l)
        for (var h = n[l], c = h.length, m = (o[l] = []), b, w = 0; w < c; ++w)
          (b = h[w]) && t.call(b, b.__data__, w, h) && m.push(b)
      return new Kn(o, this._parents, this._name, this._id)
    }
    function Ju(t) {
      if (t._id !== this._id) throw new Error()
      for (
        var n = this._groups,
          i = t._groups,
          o = n.length,
          l = i.length,
          h = Math.min(o, l),
          c = new Array(o),
          m = 0;
        m < h;
        ++m
      )
        for (var b = n[m], w = i[m], A = b.length, O = (c[m] = new Array(A)), S, C = 0; C < A; ++C)
          (S = b[C] || w[C]) && (O[C] = S)
      for (; m < o; ++m) c[m] = n[m]
      return new Kn(c, this._parents, this._name, this._id)
    }
    function Qu(t) {
      return (t + "")
        .trim()
        .split(/^|\s+/)
        .every(function (n) {
          var i = n.indexOf(".")
          return i >= 0 && (n = n.slice(0, i)), !n || n === "start"
        })
    }
    function Zu(t, n, i) {
      var o,
        l,
        h = Qu(n) ? vi : Rn
      return function () {
        var c = h(this, t),
          m = c.on
        m !== o && (l = (o = m).copy()).on(n, i), (c.on = l)
      }
    }
    function to(t, n) {
      var i = this._id
      return arguments.length < 2 ? Sn(this.node(), i).on.on(t) : this.each(Zu(i, t, n))
    }
    function eo(t) {
      return function () {
        var n = this.parentNode
        for (var i in this.__transition) if (+i !== t) return
        n && n.removeChild(this)
      }
    }
    function no() {
      return this.on("end.remove", eo(this._id))
    }
    function Zi(t) {
      var n = this._name,
        i = this._id
      typeof t != "function" && (t = te(t))
      for (var o = this._groups, l = o.length, h = new Array(l), c = 0; c < l; ++c)
        for (var m = o[c], b = m.length, w = (h[c] = new Array(b)), A, O, S = 0; S < b; ++S)
          (A = m[S]) &&
            (O = t.call(A, A.__data__, S, m)) &&
            ("__data__" in A && (O.__data__ = A.__data__),
            (w[S] = O),
            sr(w[S], n, i, S, w, Sn(A, i)))
      return new Kn(h, this._parents, n, i)
    }
    function ro(t) {
      var n = this._name,
        i = this._id
      typeof t != "function" && (t = tn(t))
      for (var o = this._groups, l = o.length, h = [], c = [], m = 0; m < l; ++m)
        for (var b = o[m], w = b.length, A, O = 0; O < w; ++O)
          if ((A = b[O])) {
            for (
              var S = t.call(A, A.__data__, O, b), C, W = Sn(A, i), X = 0, H = S.length;
              X < H;
              ++X
            )
              (C = S[X]) && sr(C, n, i, X, S, W)
            h.push(S), c.push(A)
          }
      return new Kn(h, c, n, i)
    }
    var io = wt.prototype.constructor
    function uo() {
      return new io(this._groups, this._parents)
    }
    function oo(t, n) {
      var i, o, l
      return function () {
        var h = xt(this, t),
          c = (this.style.removeProperty(t), xt(this, t))
        return h === c ? null : h === i && c === o ? l : (l = n((i = h), (o = c)))
      }
    }
    function tu(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }
    function ao(t, n, i) {
      var o,
        l = i + "",
        h
      return function () {
        var c = xt(this, t)
        return c === l ? null : c === o ? h : (h = n((o = c), i))
      }
    }
    function so(t, n, i) {
      var o, l, h
      return function () {
        var c = xt(this, t),
          m = i(this),
          b = m + ""
        return (
          m == null && (b = m = (this.style.removeProperty(t), xt(this, t))),
          c === b ? null : c === o && b === l ? h : ((l = b), (h = n((o = c), m)))
        )
      }
    }
    function lo(t, n) {
      var i,
        o,
        l,
        h = "style." + n,
        c = "end." + h,
        m
      return function () {
        var b = Rn(this, t),
          w = b.on,
          A = b.value[h] == null ? m || (m = tu(n)) : void 0
        ;(w !== i || l !== A) && (o = (i = w).copy()).on(c, (l = A)), (b.on = o)
      }
    }
    function co(t, n, i) {
      var o = (t += "") == "transform" ? xu : Qi
      return n == null
        ? this.styleTween(t, oo(t, o)).on("end.style." + t, tu(t))
        : typeof n == "function"
          ? this.styleTween(t, so(t, o, wi(this, "style." + t, n))).each(lo(this._id, t))
          : this.styleTween(t, ao(t, o, n), i).on("end.style." + t, null)
    }
    function ho(t, n, i) {
      return function (o) {
        this.style.setProperty(t, n.call(this, o), i)
      }
    }
    function fo(t, n, i) {
      var o, l
      function h() {
        var c = n.apply(this, arguments)
        return c !== l && (o = (l = c) && ho(t, c, i)), o
      }
      return (h._value = n), h
    }
    function go(t, n, i) {
      var o = "style." + (t += "")
      if (arguments.length < 2) return (o = this.tween(o)) && o._value
      if (n == null) return this.tween(o, null)
      if (typeof n != "function") throw new Error()
      return this.tween(o, fo(t, n, i ?? ""))
    }
    function po(t) {
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
    function yo(t) {
      return this.tween(
        "text",
        typeof t == "function" ? mo(wi(this, "text", t)) : po(t == null ? "" : t + ""),
      )
    }
    function vo(t) {
      return function (n) {
        this.textContent = t.call(this, n)
      }
    }
    function Un(t) {
      var n, i
      function o() {
        var l = t.apply(this, arguments)
        return l !== i && (n = (i = l) && vo(l)), n
      }
      return (o._value = t), o
    }
    function wo(t) {
      var n = "text"
      if (arguments.length < 1) return (n = this.tween(n)) && n._value
      if (t == null) return this.tween(n, null)
      if (typeof t != "function") throw new Error()
      return this.tween(n, Un(t))
    }
    function eu() {
      for (
        var t = this._name, n = this._id, i = nu(), o = this._groups, l = o.length, h = 0;
        h < l;
        ++h
      )
        for (var c = o[h], m = c.length, b, w = 0; w < m; ++w)
          if ((b = c[w])) {
            var A = Sn(b, n)
            sr(b, t, i, w, c, {
              time: A.time + A.delay + A.duration,
              delay: 0,
              duration: A.duration,
              ease: A.ease,
            })
          }
      return new Kn(o, this._parents, t, i)
    }
    function Wn() {
      var t,
        n,
        i = this,
        o = i._id,
        l = i.size()
      return new Promise(function (h, c) {
        var m = { value: c },
          b = {
            value: function () {
              --l === 0 && h()
            },
          }
        i.each(function () {
          var w = Rn(this, o),
            A = w.on
          A !== t &&
            ((n = (t = A).copy()), n._.cancel.push(m), n._.interrupt.push(m), n._.end.push(b)),
            (w.on = n)
        }),
          l === 0 && h()
      })
    }
    var xo = 0
    function Kn(t, n, i, o) {
      ;(this._groups = t), (this._parents = n), (this._name = i), (this._id = o)
    }
    function bo(t) {
      return wt().transition(t)
    }
    function nu() {
      return ++xo
    }
    var nr = wt.prototype
    Kn.prototype = bo.prototype = {
      constructor: Kn,
      select: Zi,
      selectAll: ro,
      selectChild: nr.selectChild,
      selectChildren: nr.selectChildren,
      filter: Gu,
      merge: Ju,
      selection: uo,
      transition: eu,
      call: nr.call,
      nodes: nr.nodes,
      node: nr.node,
      size: nr.size,
      empty: nr.empty,
      each: nr.each,
      on: to,
      attr: Ou,
      attrTween: qu,
      style: co,
      styleTween: go,
      text: yo,
      textTween: wo,
      remove: no,
      tween: Du,
      delay: Ru,
      duration: Uu,
      ease: Ku,
      easeVarying: Yu,
      end: Wn,
      [Symbol.iterator]: nr[Symbol.iterator],
    }
    function na(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }
    var ra = { time: null, delay: 0, duration: 250, ease: na }
    function ru(t, n) {
      for (var i; !(i = t.__transition) || !(i = i[n]); )
        if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`)
      return i
    }
    function Eo(t) {
      var n, i
      t instanceof Kn
        ? ((n = t._id), (t = t._name))
        : ((n = nu()), ((i = ra).time = ni()), (t = t == null ? null : t + ""))
      for (var o = this._groups, l = o.length, h = 0; h < l; ++h)
        for (var c = o[h], m = c.length, b, w = 0; w < m; ++w)
          (b = c[w]) && sr(b, t, n, w, c, i || ru(b, n))
      return new Kn(o, this._parents, t, n)
    }
    ;(wt.prototype.interrupt = Ji), (wt.prototype.transition = Eo)
    var { abs: ca, max: ha, min: fa } = Math
    function li(t) {
      return [+t[0], +t[1]]
    }
    function _o(t) {
      return [li(t[0]), li(t[1])]
    }
    var ia = {
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
      ko = {
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
      ua = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(xi),
        input: function (t) {
          return t == null ? null : _o(t)
        },
        output: function (t) {
          return t
        },
      }
    function xi(t) {
      return { type: t }
    }
    function Ao(t, n) {
      var i,
        o = 1
      t == null && (t = 0), n == null && (n = 0)
      function l() {
        var h,
          c = i.length,
          m,
          b = 0,
          w = 0
        for (h = 0; h < c; ++h) (m = i[h]), (b += m.x), (w += m.y)
        for (b = (b / c - t) * o, w = (w / c - n) * o, h = 0; h < c; ++h)
          (m = i[h]), (m.x -= b), (m.y -= w)
      }
      return (
        (l.initialize = function (h) {
          i = h
        }),
        (l.x = function (h) {
          return arguments.length ? ((t = +h), l) : t
        }),
        (l.y = function (h) {
          return arguments.length ? ((n = +h), l) : n
        }),
        (l.strength = function (h) {
          return arguments.length ? ((o = +h), l) : o
        }),
        l
      )
    }
    function Co(t) {
      let n = +this._x.call(null, t),
        i = +this._y.call(null, t)
      return hn(this.cover(n, i), n, i, t)
    }
    function hn(t, n, i, o) {
      if (isNaN(n) || isNaN(i)) return t
      var l,
        h = t._root,
        c = { data: o },
        m = t._x0,
        b = t._y0,
        w = t._x1,
        A = t._y1,
        O,
        S,
        C,
        W,
        X,
        H,
        G,
        yt
      if (!h) return (t._root = c), t
      for (; h.length; )
        if (
          ((X = n >= (O = (m + w) / 2)) ? (m = O) : (w = O),
          (H = i >= (S = (b + A) / 2)) ? (b = S) : (A = S),
          (l = h),
          !(h = h[(G = (H << 1) | X)]))
        )
          return (l[G] = c), t
      if (((C = +t._x.call(null, h.data)), (W = +t._y.call(null, h.data)), n === C && i === W))
        return (c.next = h), l ? (l[G] = c) : (t._root = c), t
      do
        (l = l ? (l[G] = new Array(4)) : (t._root = new Array(4))),
          (X = n >= (O = (m + w) / 2)) ? (m = O) : (w = O),
          (H = i >= (S = (b + A) / 2)) ? (b = S) : (A = S)
      while ((G = (H << 1) | X) === (yt = ((W >= S) << 1) | (C >= O)))
      return (l[yt] = h), (l[G] = c), t
    }
    function Do(t) {
      var n,
        i,
        o = t.length,
        l,
        h,
        c = new Array(o),
        m = new Array(o),
        b = 1 / 0,
        w = 1 / 0,
        A = -1 / 0,
        O = -1 / 0
      for (i = 0; i < o; ++i)
        isNaN((l = +this._x.call(null, (n = t[i])))) ||
          isNaN((h = +this._y.call(null, n))) ||
          ((c[i] = l),
          (m[i] = h),
          l < b && (b = l),
          l > A && (A = l),
          h < w && (w = h),
          h > O && (O = h))
      if (b > A || w > O) return this
      for (this.cover(b, w).cover(A, O), i = 0; i < o; ++i) hn(this, c[i], m[i], t[i])
      return this
    }
    function Bo(t, n) {
      if (isNaN((t = +t)) || isNaN((n = +n))) return this
      var i = this._x0,
        o = this._y0,
        l = this._x1,
        h = this._y1
      if (isNaN(i)) (l = (i = Math.floor(t)) + 1), (h = (o = Math.floor(n)) + 1)
      else {
        for (var c = l - i || 1, m = this._root, b, w; i > t || t >= l || o > n || n >= h; )
          switch (
            ((w = ((n < o) << 1) | (t < i)), (b = new Array(4)), (b[w] = m), (m = b), (c *= 2), w)
          ) {
            case 0:
              ;(l = i + c), (h = o + c)
              break
            case 1:
              ;(i = l - c), (h = o + c)
              break
            case 2:
              ;(l = i + c), (o = h - c)
              break
            case 3:
              ;(i = l - c), (o = h - c)
              break
          }
        this._root && this._root.length && (this._root = m)
      }
      return (this._x0 = i), (this._y0 = o), (this._x1 = l), (this._y1 = h), this
    }
    function Mo() {
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
    function Fo(t) {
      return arguments.length
        ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
        : isNaN(this._x0)
          ? void 0
          : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ]
    }
    function gn(t, n, i, o, l) {
      ;(this.node = t), (this.x0 = n), (this.y0 = i), (this.x1 = o), (this.y1 = l)
    }
    function No(t, n, i) {
      var o,
        l = this._x0,
        h = this._y0,
        c,
        m,
        b,
        w,
        A = this._x1,
        O = this._y1,
        S = [],
        C = this._root,
        W,
        X
      for (
        C && S.push(new gn(C, l, h, A, O)),
          i == null ? (i = 1 / 0) : ((l = t - i), (h = n - i), (A = t + i), (O = n + i), (i *= i));
        (W = S.pop());

      )
        if (
          !(!(C = W.node) || (c = W.x0) > A || (m = W.y0) > O || (b = W.x1) < l || (w = W.y1) < h)
        )
          if (C.length) {
            var H = (c + b) / 2,
              G = (m + w) / 2
            S.push(
              new gn(C[3], H, G, b, w),
              new gn(C[2], c, G, H, w),
              new gn(C[1], H, m, b, G),
              new gn(C[0], c, m, H, G),
            ),
              (X = ((n >= G) << 1) | (t >= H)) &&
                ((W = S[S.length - 1]),
                (S[S.length - 1] = S[S.length - 1 - X]),
                (S[S.length - 1 - X] = W))
          } else {
            var yt = t - +this._x.call(null, C.data),
              Bt = n - +this._y.call(null, C.data),
              ut = yt * yt + Bt * Bt
            if (ut < i) {
              var St = Math.sqrt((i = ut))
              ;(l = t - St), (h = n - St), (A = t + St), (O = n + St), (o = C.data)
            }
          }
      return o
    }
    function Lo(t) {
      if (isNaN((A = +this._x.call(null, t))) || isNaN((O = +this._y.call(null, t)))) return this
      var n,
        i = this._root,
        o,
        l,
        h,
        c = this._x0,
        m = this._y0,
        b = this._x1,
        w = this._y1,
        A,
        O,
        S,
        C,
        W,
        X,
        H,
        G
      if (!i) return this
      if (i.length)
        for (;;) {
          if (
            ((W = A >= (S = (c + b) / 2)) ? (c = S) : (b = S),
            (X = O >= (C = (m + w) / 2)) ? (m = C) : (w = C),
            (n = i),
            !(i = i[(H = (X << 1) | W)]))
          )
            return this
          if (!i.length) break
          ;(n[(H + 1) & 3] || n[(H + 2) & 3] || n[(H + 3) & 3]) && ((o = n), (G = H))
        }
      for (; i.data !== t; ) if (((l = i), !(i = i.next))) return this
      return (
        (h = i.next) && delete i.next,
        l
          ? (h ? (l.next = h) : delete l.next, this)
          : n
            ? (h ? (n[H] = h) : delete n[H],
              (i = n[0] || n[1] || n[2] || n[3]) &&
                i === (n[3] || n[2] || n[1] || n[0]) &&
                !i.length &&
                (o ? (o[G] = i) : (this._root = i)),
              this)
            : ((this._root = h), this)
      )
    }
    function To(t) {
      for (var n = 0, i = t.length; n < i; ++n) this.remove(t[n])
      return this
    }
    function Oo() {
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
    function So(t) {
      var n = [],
        i,
        o = this._root,
        l,
        h,
        c,
        m,
        b
      for (o && n.push(new gn(o, this._x0, this._y0, this._x1, this._y1)); (i = n.pop()); )
        if (!t((o = i.node), (h = i.x0), (c = i.y0), (m = i.x1), (b = i.y1)) && o.length) {
          var w = (h + m) / 2,
            A = (c + b) / 2
          ;(l = o[3]) && n.push(new gn(l, w, A, m, b)),
            (l = o[2]) && n.push(new gn(l, h, A, w, b)),
            (l = o[1]) && n.push(new gn(l, w, c, m, A)),
            (l = o[0]) && n.push(new gn(l, h, c, w, A))
        }
      return this
    }
    function iu(t) {
      var n = [],
        i = [],
        o
      for (
        this._root && n.push(new gn(this._root, this._x0, this._y0, this._x1, this._y1));
        (o = n.pop());

      ) {
        var l = o.node
        if (l.length) {
          var h,
            c = o.x0,
            m = o.y0,
            b = o.x1,
            w = o.y1,
            A = (c + b) / 2,
            O = (m + w) / 2
          ;(h = l[0]) && n.push(new gn(h, c, m, A, O)),
            (h = l[1]) && n.push(new gn(h, A, m, b, O)),
            (h = l[2]) && n.push(new gn(h, c, O, A, w)),
            (h = l[3]) && n.push(new gn(h, A, O, b, w))
        }
        i.push(o)
      }
      for (; (o = i.pop()); ) t(o.node, o.x0, o.y0, o.x1, o.y1)
      return this
    }
    function bi(t) {
      return t[0]
    }
    function uu(t) {
      return arguments.length ? ((this._x = t), this) : this._x
    }
    function pn(t) {
      return t[1]
    }
    function Sr(t) {
      return arguments.length ? ((this._y = t), this) : this._y
    }
    function lr(t, n, i) {
      var o = new Ei(n ?? bi, i ?? pn, NaN, NaN, NaN, NaN)
      return t == null ? o : o.addAll(t)
    }
    function Ei(t, n, i, o, l, h) {
      ;(this._x = t),
        (this._y = n),
        (this._x0 = i),
        (this._y0 = o),
        (this._x1 = l),
        (this._y1 = h),
        (this._root = void 0)
    }
    function _i(t) {
      for (var n = { data: t.data }, i = n; (t = t.next); ) i = i.next = { data: t.data }
      return n
    }
    var mn = (lr.prototype = Ei.prototype)
    ;(mn.copy = function () {
      var t = new Ei(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        n = this._root,
        i,
        o
      if (!n) return t
      if (!n.length) return (t._root = _i(n)), t
      for (i = [{ source: n, target: (t._root = new Array(4)) }]; (n = i.pop()); )
        for (var l = 0; l < 4; ++l)
          (o = n.source[l]) &&
            (o.length
              ? i.push({ source: o, target: (n.target[l] = new Array(4)) })
              : (n.target[l] = _i(o)))
      return t
    }),
      (mn.add = Co),
      (mn.addAll = Do),
      (mn.cover = Bo),
      (mn.data = Mo),
      (mn.extent = Fo),
      (mn.find = No),
      (mn.remove = Lo),
      (mn.removeAll = To),
      (mn.root = Oo),
      (mn.size = $o),
      (mn.visit = So),
      (mn.visitAfter = iu),
      (mn.x = uu),
      (mn.y = Sr)
    function jr(t) {
      return function () {
        return t
      }
    }
    function br(t) {
      return (t() - 0.5) * 1e-6
    }
    function jo(t) {
      return t.index
    }
    function ou(t, n) {
      var i = t.get(n)
      if (!i) throw new Error("node not found: " + n)
      return i
    }
    function zo(t) {
      var n = jo,
        i = O,
        o,
        l = jr(30),
        h,
        c,
        m,
        b,
        w,
        A = 1
      t == null && (t = [])
      function O(H) {
        return 1 / Math.min(m[H.source.index], m[H.target.index])
      }
      function S(H) {
        for (var G = 0, yt = t.length; G < A; ++G)
          for (var Bt = 0, ut, St, Yt, K, Dt, dt, Mt; Bt < yt; ++Bt)
            (ut = t[Bt]),
              (St = ut.source),
              (Yt = ut.target),
              (K = Yt.x + Yt.vx - St.x - St.vx || br(w)),
              (Dt = Yt.y + Yt.vy - St.y - St.vy || br(w)),
              (dt = Math.sqrt(K * K + Dt * Dt)),
              (dt = ((dt - h[Bt]) / dt) * H * o[Bt]),
              (K *= dt),
              (Dt *= dt),
              (Yt.vx -= K * (Mt = b[Bt])),
              (Yt.vy -= Dt * Mt),
              (St.vx += K * (Mt = 1 - Mt)),
              (St.vy += Dt * Mt)
      }
      function C() {
        if (c) {
          var H,
            G = c.length,
            yt = t.length,
            Bt = new Map(c.map((St, Yt) => [n(St, Yt, c), St])),
            ut
          for (H = 0, m = new Array(G); H < yt; ++H)
            (ut = t[H]),
              (ut.index = H),
              typeof ut.source != "object" && (ut.source = ou(Bt, ut.source)),
              typeof ut.target != "object" && (ut.target = ou(Bt, ut.target)),
              (m[ut.source.index] = (m[ut.source.index] || 0) + 1),
              (m[ut.target.index] = (m[ut.target.index] || 0) + 1)
          for (H = 0, b = new Array(yt); H < yt; ++H)
            (ut = t[H]), (b[H] = m[ut.source.index] / (m[ut.source.index] + m[ut.target.index]))
          ;(o = new Array(yt)), W(), (h = new Array(yt)), X()
        }
      }
      function W() {
        if (c) for (var H = 0, G = t.length; H < G; ++H) o[H] = +i(t[H], H, t)
      }
      function X() {
        if (c) for (var H = 0, G = t.length; H < G; ++H) h[H] = +l(t[H], H, t)
      }
      return (
        (S.initialize = function (H, G) {
          ;(c = H), (w = G), C()
        }),
        (S.links = function (H) {
          return arguments.length ? ((t = H), C(), S) : t
        }),
        (S.id = function (H) {
          return arguments.length ? ((n = H), S) : n
        }),
        (S.iterations = function (H) {
          return arguments.length ? ((A = +H), S) : A
        }),
        (S.strength = function (H) {
          return arguments.length ? ((i = typeof H == "function" ? H : jr(+H)), W(), S) : i
        }),
        (S.distance = function (H) {
          return arguments.length ? ((l = typeof H == "function" ? H : jr(+H)), X(), S) : l
        }),
        S
      )
    }
    function qo() {
      let t = 1
      return () => (t = (1664525 * t + 1013904223) % 4294967296) / 4294967296
    }
    function Po(t) {
      return t.x
    }
    function ci(t) {
      return t.y
    }
    var Io = 10,
      Xn = Math.PI * (3 - Math.sqrt(5))
    function ki(t) {
      var n,
        i = 1,
        o = 0.001,
        l = 1 - Math.pow(o, 1 / 300),
        h = 0,
        c = 0.6,
        m = new Map(),
        b = Or(O),
        w = Qe("tick", "end"),
        A = qo()
      t == null && (t = [])
      function O() {
        S(), w.call("tick", n), i < o && (b.stop(), w.call("end", n))
      }
      function S(X) {
        var H,
          G = t.length,
          yt
        X === void 0 && (X = 1)
        for (var Bt = 0; Bt < X; ++Bt)
          for (
            i += (h - i) * l,
              m.forEach(function (ut) {
                ut(i)
              }),
              H = 0;
            H < G;
            ++H
          )
            (yt = t[H]),
              yt.fx == null ? (yt.x += yt.vx *= c) : ((yt.x = yt.fx), (yt.vx = 0)),
              yt.fy == null ? (yt.y += yt.vy *= c) : ((yt.y = yt.fy), (yt.vy = 0))
        return n
      }
      function C() {
        for (var X = 0, H = t.length, G; X < H; ++X) {
          if (
            ((G = t[X]),
            (G.index = X),
            G.fx != null && (G.x = G.fx),
            G.fy != null && (G.y = G.fy),
            isNaN(G.x) || isNaN(G.y))
          ) {
            var yt = Io * Math.sqrt(0.5 + X),
              Bt = X * Xn
            ;(G.x = yt * Math.cos(Bt)), (G.y = yt * Math.sin(Bt))
          }
          ;(isNaN(G.vx) || isNaN(G.vy)) && (G.vx = G.vy = 0)
        }
      }
      function W(X) {
        return X.initialize && X.initialize(t, A), X
      }
      return (
        C(),
        (n = {
          tick: S,
          restart: function () {
            return b.restart(O), n
          },
          stop: function () {
            return b.stop(), n
          },
          nodes: function (X) {
            return arguments.length ? ((t = X), C(), m.forEach(W), n) : t
          },
          alpha: function (X) {
            return arguments.length ? ((i = +X), n) : i
          },
          alphaMin: function (X) {
            return arguments.length ? ((o = +X), n) : o
          },
          alphaDecay: function (X) {
            return arguments.length ? ((l = +X), n) : +l
          },
          alphaTarget: function (X) {
            return arguments.length ? ((h = +X), n) : h
          },
          velocityDecay: function (X) {
            return arguments.length ? ((c = 1 - X), n) : 1 - c
          },
          randomSource: function (X) {
            return arguments.length ? ((A = X), m.forEach(W), n) : A
          },
          force: function (X, H) {
            return arguments.length > 1 ? (H == null ? m.delete(X) : m.set(X, W(H)), n) : m.get(X)
          },
          find: function (X, H, G) {
            var yt = 0,
              Bt = t.length,
              ut,
              St,
              Yt,
              K,
              Dt
            for (G == null ? (G = 1 / 0) : (G *= G), yt = 0; yt < Bt; ++yt)
              (K = t[yt]),
                (ut = X - K.x),
                (St = H - K.y),
                (Yt = ut * ut + St * St),
                Yt < G && ((Dt = K), (G = Yt))
            return Dt
          },
          on: function (X, H) {
            return arguments.length > 1 ? (w.on(X, H), n) : w.on(X)
          },
        })
      )
    }
    function Ro() {
      var t,
        n,
        i,
        o,
        l = jr(-30),
        h,
        c = 1,
        m = 1 / 0,
        b = 0.81
      function w(C) {
        var W,
          X = t.length,
          H = lr(t, Po, ci).visitAfter(O)
        for (o = C, W = 0; W < X; ++W) (n = t[W]), H.visit(S)
      }
      function A() {
        if (t) {
          var C,
            W = t.length,
            X
          for (h = new Array(W), C = 0; C < W; ++C) (X = t[C]), (h[X.index] = +l(X, C, t))
        }
      }
      function O(C) {
        var W = 0,
          X,
          H,
          G = 0,
          yt,
          Bt,
          ut
        if (C.length) {
          for (yt = Bt = ut = 0; ut < 4; ++ut)
            (X = C[ut]) &&
              (H = Math.abs(X.value)) &&
              ((W += X.value), (G += H), (yt += H * X.x), (Bt += H * X.y))
          ;(C.x = yt / G), (C.y = Bt / G)
        } else {
          ;(X = C), (X.x = X.data.x), (X.y = X.data.y)
          do W += h[X.data.index]
          while ((X = X.next))
        }
        C.value = W
      }
      function S(C, W, X, H) {
        if (!C.value) return !0
        var G = C.x - n.x,
          yt = C.y - n.y,
          Bt = H - W,
          ut = G * G + yt * yt
        if ((Bt * Bt) / b < ut)
          return (
            ut < m &&
              (G === 0 && ((G = br(i)), (ut += G * G)),
              yt === 0 && ((yt = br(i)), (ut += yt * yt)),
              ut < c && (ut = Math.sqrt(c * ut)),
              (n.vx += (G * C.value * o) / ut),
              (n.vy += (yt * C.value * o) / ut)),
            !0
          )
        if (!(C.length || ut >= m)) {
          ;(C.data !== n || C.next) &&
            (G === 0 && ((G = br(i)), (ut += G * G)),
            yt === 0 && ((yt = br(i)), (ut += yt * yt)),
            ut < c && (ut = Math.sqrt(c * ut)))
          do
            C.data !== n && ((Bt = (h[C.data.index] * o) / ut), (n.vx += G * Bt), (n.vy += yt * Bt))
          while ((C = C.next))
        }
      }
      return (
        (w.initialize = function (C, W) {
          ;(t = C), (i = W), A()
        }),
        (w.strength = function (C) {
          return arguments.length ? ((l = typeof C == "function" ? C : jr(+C)), A(), w) : l
        }),
        (w.distanceMin = function (C) {
          return arguments.length ? ((c = C * C), w) : Math.sqrt(c)
        }),
        (w.distanceMax = function (C) {
          return arguments.length ? ((m = C * C), w) : Math.sqrt(m)
        }),
        (w.theta = function (C) {
          return arguments.length ? ((b = C * C), w) : Math.sqrt(b)
        }),
        w
      )
    }
    var Er = (t) => () => t
    function zr(t, { sourceEvent: n, target: i, transform: o, dispatch: l }) {
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        target: { value: i, enumerable: !0, configurable: !0 },
        transform: { value: o, enumerable: !0, configurable: !0 },
        _: { value: l },
      })
    }
    function Yn(t, n, i) {
      ;(this.k = t), (this.x = n), (this.y = i)
    }
    Yn.prototype = {
      constructor: Yn,
      scale: function (t) {
        return t === 1 ? this : new Yn(this.k * t, this.x, this.y)
      },
      translate: function (t, n) {
        return (t === 0) & (n === 0)
          ? this
          : new Yn(this.k, this.x + this.k * t, this.y + this.k * n)
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
    var Ai = new Yn(1, 0, 0)
    au.prototype = Yn.prototype
    function au(t) {
      for (; !t.__zoom; ) if (!(t = t.parentNode)) return Ai
      return t.__zoom
    }
    function Ci(t) {
      t.stopImmediatePropagation()
    }
    function qr(t) {
      t.preventDefault(), t.stopImmediatePropagation()
    }
    function Ho(t) {
      return (!t.ctrlKey || t.type === "wheel") && !t.button
    }
    function Vo() {
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
      return this.__zoom || Ai
    }
    function lu(t) {
      return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) * (t.ctrlKey ? 10 : 1)
    }
    function oa() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function Uo(t, n, i) {
      var o = t.invertX(n[0][0]) - i[0][0],
        l = t.invertX(n[1][0]) - i[1][0],
        h = t.invertY(n[0][1]) - i[0][1],
        c = t.invertY(n[1][1]) - i[1][1]
      return t.translate(
        l > o ? (o + l) / 2 : Math.min(0, o) || Math.max(0, l),
        c > h ? (h + c) / 2 : Math.min(0, h) || Math.max(0, c),
      )
    }
    function aa() {
      var t = Ho,
        n = Vo,
        i = Uo,
        o = lu,
        l = oa,
        h = [0, 1 / 0],
        c = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0],
        ],
        m = 250,
        b = ei,
        w = Qe("start", "zoom", "end"),
        A,
        O,
        S,
        C = 500,
        W = 150,
        X = 0,
        H = 10
      function G(V) {
        V.property("__zoom", su)
          .on("wheel.zoom", Dt, { passive: !1 })
          .on("mousedown.zoom", dt)
          .on("dblclick.zoom", Mt)
          .filter(l)
          .on("touchstart.zoom", Ht)
          .on("touchmove.zoom", Zt)
          .on("touchend.zoom touchcancel.zoom", pt)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      ;(G.transform = function (V, Et, at, bt) {
        var jt = V.selection ? V.selection() : V
        jt.property("__zoom", su),
          V !== jt
            ? St(V, Et, at, bt)
            : jt.interrupt().each(function () {
                Yt(this, arguments)
                  .event(bt)
                  .start()
                  .zoom(null, typeof Et == "function" ? Et.apply(this, arguments) : Et)
                  .end()
              })
      }),
        (G.scaleBy = function (V, Et, at, bt) {
          G.scaleTo(
            V,
            function () {
              var jt = this.__zoom.k,
                Lt = typeof Et == "function" ? Et.apply(this, arguments) : Et
              return jt * Lt
            },
            at,
            bt,
          )
        }),
        (G.scaleTo = function (V, Et, at, bt) {
          G.transform(
            V,
            function () {
              var jt = n.apply(this, arguments),
                Lt = this.__zoom,
                ft = at == null ? ut(jt) : typeof at == "function" ? at.apply(this, arguments) : at,
                Wt = Lt.invert(ft),
                se = typeof Et == "function" ? Et.apply(this, arguments) : Et
              return i(Bt(yt(Lt, se), ft, Wt), jt, c)
            },
            at,
            bt,
          )
        }),
        (G.translateBy = function (V, Et, at, bt) {
          G.transform(
            V,
            function () {
              return i(
                this.__zoom.translate(
                  typeof Et == "function" ? Et.apply(this, arguments) : Et,
                  typeof at == "function" ? at.apply(this, arguments) : at,
                ),
                n.apply(this, arguments),
                c,
              )
            },
            null,
            bt,
          )
        }),
        (G.translateTo = function (V, Et, at, bt, jt) {
          G.transform(
            V,
            function () {
              var Lt = n.apply(this, arguments),
                ft = this.__zoom,
                Wt = bt == null ? ut(Lt) : typeof bt == "function" ? bt.apply(this, arguments) : bt
              return i(
                Ai.translate(Wt[0], Wt[1])
                  .scale(ft.k)
                  .translate(
                    typeof Et == "function" ? -Et.apply(this, arguments) : -Et,
                    typeof at == "function" ? -at.apply(this, arguments) : -at,
                  ),
                Lt,
                c,
              )
            },
            bt,
            jt,
          )
        })
      function yt(V, Et) {
        return (Et = Math.max(h[0], Math.min(h[1], Et))), Et === V.k ? V : new Yn(Et, V.x, V.y)
      }
      function Bt(V, Et, at) {
        var bt = Et[0] - at[0] * V.k,
          jt = Et[1] - at[1] * V.k
        return bt === V.x && jt === V.y ? V : new Yn(V.k, bt, jt)
      }
      function ut(V) {
        return [(+V[0][0] + +V[1][0]) / 2, (+V[0][1] + +V[1][1]) / 2]
      }
      function St(V, Et, at, bt) {
        V.on("start.zoom", function () {
          Yt(this, arguments).event(bt).start()
        })
          .on("interrupt.zoom end.zoom", function () {
            Yt(this, arguments).event(bt).end()
          })
          .tween("zoom", function () {
            var jt = this,
              Lt = arguments,
              ft = Yt(jt, Lt).event(bt),
              Wt = n.apply(jt, Lt),
              se = at == null ? ut(Wt) : typeof at == "function" ? at.apply(jt, Lt) : at,
              Me = Math.max(Wt[1][0] - Wt[0][0], Wt[1][1] - Wt[0][1]),
              ge = jt.__zoom,
              Ge = typeof Et == "function" ? Et.apply(jt, Lt) : Et,
              Ae = b(ge.invert(se).concat(Me / ge.k), Ge.invert(se).concat(Me / Ge.k))
            return function (Mn) {
              if (Mn === 1) Mn = Ge
              else {
                var cr = Ae(Mn),
                  Jo = Me / cr[2]
                Mn = new Yn(Jo, se[0] - cr[0] * Jo, se[1] - cr[1] * Jo)
              }
              ft.zoom(null, Mn)
            }
          })
      }
      function Yt(V, Et, at) {
        return (!at && V.__zooming) || new K(V, Et)
      }
      function K(V, Et) {
        ;(this.that = V),
          (this.args = Et),
          (this.active = 0),
          (this.sourceEvent = null),
          (this.extent = n.apply(V, Et)),
          (this.taps = 0)
      }
      K.prototype = {
        event: function (V) {
          return V && (this.sourceEvent = V), this
        },
        start: function () {
          return ++this.active === 1 && ((this.that.__zooming = this), this.emit("start")), this
        },
        zoom: function (V, Et) {
          return (
            this.mouse && V !== "mouse" && (this.mouse[1] = Et.invert(this.mouse[0])),
            this.touch0 && V !== "touch" && (this.touch0[1] = Et.invert(this.touch0[0])),
            this.touch1 && V !== "touch" && (this.touch1[1] = Et.invert(this.touch1[0])),
            (this.that.__zoom = Et),
            this.emit("zoom"),
            this
          )
        },
        end: function () {
          return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this
        },
        emit: function (V) {
          var Et = vt(this.that).datum()
          w.call(
            V,
            this.that,
            new zr(V, {
              sourceEvent: this.sourceEvent,
              target: G,
              type: V,
              transform: this.that.__zoom,
              dispatch: w,
            }),
            Et,
          )
        },
      }
      function Dt(V, ...Et) {
        if (!t.apply(this, arguments)) return
        var at = Yt(this, Et).event(V),
          bt = this.__zoom,
          jt = Math.max(h[0], Math.min(h[1], bt.k * Math.pow(2, o.apply(this, arguments)))),
          Lt = Xt(V)
        if (at.wheel)
          (at.mouse[0][0] !== Lt[0] || at.mouse[0][1] !== Lt[1]) &&
            (at.mouse[1] = bt.invert((at.mouse[0] = Lt))),
            clearTimeout(at.wheel)
        else {
          if (bt.k === jt) return
          ;(at.mouse = [Lt, bt.invert(Lt)]), xr(this), at.start()
        }
        qr(V),
          (at.wheel = setTimeout(ft, W)),
          at.zoom("mouse", i(Bt(yt(bt, jt), at.mouse[0], at.mouse[1]), at.extent, c))
        function ft() {
          ;(at.wheel = null), at.end()
        }
      }
      function dt(V, ...Et) {
        if (S || !t.apply(this, arguments)) return
        var at = V.currentTarget,
          bt = Yt(this, Et, !0).event(V),
          jt = vt(V.view).on("mousemove.zoom", se, !0).on("mouseup.zoom", Me, !0),
          Lt = Xt(V, at),
          ft = V.clientX,
          Wt = V.clientY
        _r(V.view), Ci(V), (bt.mouse = [Lt, this.__zoom.invert(Lt)]), xr(this), bt.start()
        function se(ge) {
          if ((qr(ge), !bt.moved)) {
            var Ge = ge.clientX - ft,
              Ae = ge.clientY - Wt
            bt.moved = Ge * Ge + Ae * Ae > X
          }
          bt.event(ge).zoom(
            "mouse",
            i(Bt(bt.that.__zoom, (bt.mouse[0] = Xt(ge, at)), bt.mouse[1]), bt.extent, c),
          )
        }
        function Me(ge) {
          jt.on("mousemove.zoom mouseup.zoom", null),
            rr(ge.view, bt.moved),
            qr(ge),
            bt.event(ge).end()
        }
      }
      function Mt(V, ...Et) {
        if (t.apply(this, arguments)) {
          var at = this.__zoom,
            bt = Xt(V.changedTouches ? V.changedTouches[0] : V, this),
            jt = at.invert(bt),
            Lt = at.k * (V.shiftKey ? 0.5 : 2),
            ft = i(Bt(yt(at, Lt), bt, jt), n.apply(this, Et), c)
          qr(V),
            m > 0
              ? vt(this).transition().duration(m).call(St, ft, bt, V)
              : vt(this).call(G.transform, ft, bt, V)
        }
      }
      function Ht(V, ...Et) {
        if (t.apply(this, arguments)) {
          var at = V.touches,
            bt = at.length,
            jt = Yt(this, Et, V.changedTouches.length === bt).event(V),
            Lt,
            ft,
            Wt,
            se
          for (Ci(V), ft = 0; ft < bt; ++ft)
            (Wt = at[ft]),
              (se = Xt(Wt, this)),
              (se = [se, this.__zoom.invert(se), Wt.identifier]),
              jt.touch0
                ? !jt.touch1 && jt.touch0[2] !== se[2] && ((jt.touch1 = se), (jt.taps = 0))
                : ((jt.touch0 = se), (Lt = !0), (jt.taps = 1 + !!A))
          A && (A = clearTimeout(A)),
            Lt &&
              (jt.taps < 2 &&
                ((O = se[0]),
                (A = setTimeout(function () {
                  A = null
                }, C))),
              xr(this),
              jt.start())
        }
      }
      function Zt(V, ...Et) {
        if (this.__zooming) {
          var at = Yt(this, Et).event(V),
            bt = V.changedTouches,
            jt = bt.length,
            Lt,
            ft,
            Wt,
            se
          for (qr(V), Lt = 0; Lt < jt; ++Lt)
            (ft = bt[Lt]),
              (Wt = Xt(ft, this)),
              at.touch0 && at.touch0[2] === ft.identifier
                ? (at.touch0[0] = Wt)
                : at.touch1 && at.touch1[2] === ft.identifier && (at.touch1[0] = Wt)
          if (((ft = at.that.__zoom), at.touch1)) {
            var Me = at.touch0[0],
              ge = at.touch0[1],
              Ge = at.touch1[0],
              Ae = at.touch1[1],
              Mn = (Mn = Ge[0] - Me[0]) * Mn + (Mn = Ge[1] - Me[1]) * Mn,
              cr = (cr = Ae[0] - ge[0]) * cr + (cr = Ae[1] - ge[1]) * cr
            ;(ft = yt(ft, Math.sqrt(Mn / cr))),
              (Wt = [(Me[0] + Ge[0]) / 2, (Me[1] + Ge[1]) / 2]),
              (se = [(ge[0] + Ae[0]) / 2, (ge[1] + Ae[1]) / 2])
          } else if (at.touch0) (Wt = at.touch0[0]), (se = at.touch0[1])
          else return
          at.zoom("touch", i(Bt(ft, Wt, se), at.extent, c))
        }
      }
      function pt(V, ...Et) {
        if (this.__zooming) {
          var at = Yt(this, Et).event(V),
            bt = V.changedTouches,
            jt = bt.length,
            Lt,
            ft
          for (
            Ci(V),
              S && clearTimeout(S),
              S = setTimeout(function () {
                S = null
              }, C),
              Lt = 0;
            Lt < jt;
            ++Lt
          )
            (ft = bt[Lt]),
              at.touch0 && at.touch0[2] === ft.identifier
                ? delete at.touch0
                : at.touch1 && at.touch1[2] === ft.identifier && delete at.touch1
          if ((at.touch1 && !at.touch0 && ((at.touch0 = at.touch1), delete at.touch1), at.touch0))
            at.touch0[1] = this.__zoom.invert(at.touch0[0])
          else if (
            (at.end(),
            at.taps === 2 && ((ft = Xt(ft, this)), Math.hypot(O[0] - ft[0], O[1] - ft[1]) < H))
          ) {
            var Wt = vt(this).on("dblclick.zoom")
            Wt && Wt.apply(this, arguments)
          }
        }
      }
      return (
        (G.wheelDelta = function (V) {
          return arguments.length ? ((o = typeof V == "function" ? V : Er(+V)), G) : o
        }),
        (G.filter = function (V) {
          return arguments.length ? ((t = typeof V == "function" ? V : Er(!!V)), G) : t
        }),
        (G.touchable = function (V) {
          return arguments.length ? ((l = typeof V == "function" ? V : Er(!!V)), G) : l
        }),
        (G.extent = function (V) {
          return arguments.length
            ? ((n =
                typeof V == "function"
                  ? V
                  : Er([
                      [+V[0][0], +V[0][1]],
                      [+V[1][0], +V[1][1]],
                    ])),
              G)
            : n
        }),
        (G.scaleExtent = function (V) {
          return arguments.length ? ((h[0] = +V[0]), (h[1] = +V[1]), G) : [h[0], h[1]]
        }),
        (G.translateExtent = function (V) {
          return arguments.length
            ? ((c[0][0] = +V[0][0]),
              (c[1][0] = +V[1][0]),
              (c[0][1] = +V[0][1]),
              (c[1][1] = +V[1][1]),
              G)
            : [
                [c[0][0], c[0][1]],
                [c[1][0], c[1][1]],
              ]
        }),
        (G.constrain = function (V) {
          return arguments.length ? ((i = V), G) : i
        }),
        (G.duration = function (V) {
          return arguments.length ? ((m = +V), G) : m
        }),
        (G.interpolate = function (V) {
          return arguments.length ? ((b = V), G) : b
        }),
        (G.on = function () {
          var V = w.on.apply(w, arguments)
          return V === w ? G : V
        }),
        (G.clickDistance = function (V) {
          return arguments.length ? ((X = (V = +V) * V), G) : Math.sqrt(X)
        }),
        (G.tapDistance = function (V) {
          return arguments.length ? ((H = +V), G) : H
        }),
        G
      )
    }
    var sa = Object.hasOwnProperty,
      Pr = Jt(an(), 1),
      la = (0, Pr.default)()
    function Wo(t) {
      return t.document.body.dataset.slug
    }
    function Ir(t) {
      let n = Go(hu(t, "index"), !0)
      return n.length === 0 ? "/" : n
    }
    function Ko(t) {
      let n = t
        .split("/")
        .filter((i) => i !== "")
        .slice(0, -1)
        .map((i) => "..")
        .join("/")
      return n.length === 0 && (n = "."), n
    }
    function Xo(t, n) {
      return Yo(Ko(t), Ir(n))
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
    function hu(t, n) {
      return cu(t, n) && (t = t.slice(0, -n.length)), t
    }
    function Go(t, n) {
      return (
        t.startsWith("/") && (t = t.substring(1)), !n && t.endsWith("/") && (t = t.slice(0, -1)), t
      )
    }
    var Di = "graph-visited"
    function Bi() {
      return new Set(JSON.parse(localStorage.getItem(Di) ?? "[]"))
    }
    function e(t) {
      let n = Bi()
      n.add(t), localStorage.setItem(Di, JSON.stringify([...n]))
    }
    async function u(t, n) {
      let i = Ir(n),
        o = Bi(),
        l = document.getElementById(t)
      if (!l) return
      Ut(l)
      let {
          drag: h,
          zoom: c,
          depth: m,
          scale: b,
          repelForce: w,
          centerForce: A,
          linkDistance: O,
          fontSize: S,
          opacityScale: C,
          removeTags: W,
          showTags: X,
          focusOnHover: H,
        } = JSON.parse(l.dataset.cfg),
        G = new Map(Object.entries(await fetchData).map(([ft, Wt]) => [Ir(ft), Wt])),
        yt = [],
        Bt = [],
        ut = new Set(G.keys())
      for (let [ft, Wt] of G.entries()) {
        let se = Wt.links ?? []
        for (let Me of se) ut.has(Me) && yt.push({ source: ft, target: Me })
        if (X) {
          let Me = Wt.tags.filter((ge) => !W.includes(ge)).map((ge) => Ir("tags/" + ge))
          Bt.push(...Me.filter((ge) => !Bt.includes(ge)))
          for (let ge of Me) yt.push({ source: ft, target: ge })
        }
      }
      let St = new Set(),
        Yt = [i, "__SENTINEL"]
      if (m >= 0)
        for (; m >= 0 && Yt.length > 0; ) {
          let ft = Yt.shift()
          if (ft === "__SENTINEL") m--, Yt.push("__SENTINEL")
          else {
            St.add(ft)
            let Wt = yt.filter((Me) => Me.source === ft),
              se = yt.filter((Me) => Me.target === ft)
            Yt.push(...Wt.map((Me) => Me.target), ...se.map((Me) => Me.source))
          }
        }
      else ut.forEach((ft) => St.add(ft)), X && Bt.forEach((ft) => St.add(ft))
      let K = {
          nodes: [...St].map((ft) => {
            let Wt = ft.startsWith("tags/") ? "#" + ft.substring(5) : G.get(ft)?.title ?? ft
            return { id: ft, text: Wt, tags: G.get(ft)?.tags ?? [] }
          }),
          links: yt.filter((ft) => St.has(ft.source) && St.has(ft.target)),
        },
        Dt = ki(K.nodes)
          .force("charge", Ro().strength(-100 * w))
          .force(
            "link",
            zo(K.links)
              .id((ft) => ft.id)
              .distance(O),
          )
          .force("center", Ao().strength(A)),
        dt = Math.max(l.offsetHeight, 250),
        Mt = l.offsetWidth,
        Ht = vt("#" + t)
          .append("svg")
          .attr("width", Mt)
          .attr("height", dt)
          .attr("viewBox", [-Mt / 2 / b, -dt / 2 / b, Mt / b, dt / b]),
        Zt = Ht.append("g")
          .selectAll("line")
          .data(K.links)
          .join("line")
          .attr("class", "link")
          .attr("stroke", "var(--lightgray)")
          .attr("stroke-width", 1),
        pt = Ht.append("g").selectAll("g").data(K.nodes).enter().append("g"),
        V = (ft) =>
          ft.id === i
            ? "var(--secondary)"
            : o.has(ft.id) || ft.id.startsWith("tags/")
              ? "var(--tertiary)"
              : "var(--gray)",
        Et = (ft) => {
          function Wt(Ge, Ae) {
            Ge.active || ft.alphaTarget(1).restart(), (Ae.fx = Ae.x), (Ae.fy = Ae.y)
          }
          function se(Ge, Ae) {
            ;(Ae.fx = Ge.x), (Ae.fy = Ge.y)
          }
          function Me(Ge, Ae) {
            Ge.active || ft.alphaTarget(0), (Ae.fx = null), (Ae.fy = null)
          }
          let ge = () => {}
          return Hr()
            .on("start", h ? Wt : ge)
            .on("drag", h ? se : ge)
            .on("end", h ? Me : ge)
        }
      function at(ft) {
        let Wt = yt.filter((se) => se.source.id === ft.id || se.target.id === ft.id).length
        return 2 + Math.sqrt(Wt)
      }
      let bt = [],
        jt = pt
          .append("circle")
          .attr("class", "node")
          .attr("id", (ft) => ft.id)
          .attr("r", at)
          .attr("fill", V)
          .style("cursor", "pointer")
          .on("click", (ft, Wt) => {
            let se = Xo(n, Wt.id)
            window.spaNavigate(new URL(se, window.location.toString()))
          })
          .on("mouseover", function (ft, Wt) {
            let se = Wt.id,
              Me = je(".link").filter((Ae) => Ae.source.id === se || Ae.target.id === se)
            H &&
              ((bt = Me.data().flatMap((Ae) => [Ae.source.id, Ae.target.id])),
              je(".link").style("opacity", 0.2),
              je(".node")
                .filter((Ae) => !bt.includes(Ae.id))
                .style("opacity", 0.2),
              je(".node")
                .filter((Ae) => !bt.includes(Ae.id))
                .nodes()
                .map((Ae) => vt(Ae.parentNode).select("text"))
                .forEach((Ae) => {
                  let Mn = parseFloat(Ae.style("opacity"))
                  Ae.transition()
                    .duration(200)
                    .attr("opacityOld", Mn)
                    .style("opacity", Math.min(Mn, 0.2))
                })),
              Me.attr("stroke", "var(--gray)").attr("stroke-width", 1)
            let ge = S * 1.5,
              Ge = this.parentNode
            vt(Ge)
              .raise()
              .select("text")
              .attr("opacityOld", vt(Ge).select("text").style("opacity"))
              .style("opacity", 1)
              .style("font-size", ge + "em")
          })
          .on("mouseleave", function (ft, Wt) {
            H &&
              (je(".link").style("opacity", 1),
              je(".node").style("opacity", 1),
              je(".node")
                .filter((ge) => !bt.includes(ge.id))
                .nodes()
                .map((ge) => vt(ge.parentNode).select("text"))
                .forEach((ge) =>
                  ge.transition().duration(200).style("opacity", ge.attr("opacityOld")),
                ))
            let se = Wt.id
            je(".link")
              .filter((ge) => ge.source.id === se || ge.target.id === se)
              .attr("stroke", "var(--lightgray)")
            let Me = this.parentNode
            vt(Me)
              .select("text")
              .style("opacity", vt(Me).select("text").attr("opacityOld"))
              .style("font-size", S + "em")
          })
          .call(Et(Dt))
      jt.filter((ft) => ft.id.startsWith("tags/"))
        .attr("stroke", V)
        .attr("stroke-width", 2)
        .attr("fill", "var(--light)")
      let Lt = pt
        .append("text")
        .attr("dx", 0)
        .attr("dy", (ft) => -at(ft) + "px")
        .attr("text-anchor", "middle")
        .text((ft) => ft.text)
        .style("opacity", (C - 1) / 3.75)
        .style("pointer-events", "none")
        .style("font-size", S + "em")
        .raise()
        .call(Et(Dt))
      c &&
        Ht.call(
          aa()
            .extent([
              [0, 0],
              [Mt, dt],
            ])
            .scaleExtent([0.25, 4])
            .on("zoom", ({ transform: ft }) => {
              Zt.attr("transform", ft), jt.attr("transform", ft)
              let Wt = ft.k * C,
                se = Math.max((Wt - 1) / 3.75, 0)
              Lt.attr("transform", ft).style("opacity", se)
            }),
        ),
        Dt.on("tick", () => {
          Zt.attr("x1", (ft) => ft.source.x)
            .attr("y1", (ft) => ft.source.y)
            .attr("x2", (ft) => ft.target.x)
            .attr("y2", (ft) => ft.target.y),
            jt.attr("cx", (ft) => ft.x).attr("cy", (ft) => ft.y),
            Lt.attr("x", (ft) => ft.x).attr("y", (ft) => ft.y)
        })
    }
    function s() {
      let t = Wo(window),
        n = document.getElementById("global-graph-outer"),
        i = n?.closest(".sidebar")
      n?.classList.add("active"), i && (i.style.zIndex = "1"), u("global-graph-container", t)
      function o() {
        n?.classList.remove("active")
        let l = document.getElementById("global-graph-container")
        i && (i.style.zIndex = "unset"), l && Ut(l)
      }
      pe(n, o)
    }
    document.addEventListener("nav", async (t) => {
      let n = t.detail.url
      e(Ir(n)), await u("graph-container", n)
      let i = document.getElementById("global-graph-icon")
      i?.addEventListener("click", s), window.addCleanup(() => i?.removeEventListener("click", s))
    }),
      document.addEventListener("nav", async () => {
        let t = document.getElementById("highlight-modal"),
          n = document.getElementById("shortcut-container"),
          i = document.getElementById("shortcut-key"),
          o = document.getElementsByClassName("keybind")[0],
          l = document.querySelector(".center"),
          h = document.querySelector(".right.sidebar"),
          c = () => {
            l && (l.style.zIndex = "-1"), h && (h.style.zIndex = "-1"), n?.classList.add("active")
          },
          m = () => {
            l && (l.style.zIndex = "unset"),
              h && (h.style.zIndex = "unset"),
              n?.classList.remove("active")
          }
        async function b(O) {
          if (i)
            for (let S of JSON.parse(i.dataset.mapping)) {
              let [C, W] = S.split("--")
              if ((t && A(), O.key === W && (O.ctrlKey || O.metaKey))) {
                O.preventDefault(), n?.classList.contains("active") ? m() : c()
                break
              }
            }
        }
        if (
          (document.addEventListener("keydown", b),
          window.addCleanup(() => document.removeEventListener("keydown", b)),
          pe(o, m),
          !t)
        )
          return
        let w = (O) => {
            n?.classList.contains("active") ||
              (t.classList.add("active"), (t.style.visibility = "visible"))
          },
          A = () => {
            t.classList.remove("active"), (t.style.visibility = "hidden")
          }
        Ne(
          o,
          ["mouseenter", w],
          [
            "mouseleave",
            () => {
              n?.classList.contains("active") || A()
            },
          ],
          [
            "mousemove",
            ({ pageX: O, pageY: S }) => {
              n?.classList.contains("active") ||
                (t.classList.add("active"),
                Object.assign(t.style, { left: `${O + 10}px`, top: `${S + 10}px` }))
            },
          ],
        )
      })
    var g = new Map([
      ["\\", "/"],
      ["l", "/projects"],
      ["j", "/curius"],
    ])
    document.addEventListener("nav", () => {
      let t = document.querySelector("#darkmode-toggle"),
        n = document.getElementById("global-graph-outer"),
        i = document.getElementById("shortcut-container")
      function o(m) {
        t &&
          m.key === "o" &&
          (m.ctrlKey || m.metaKey) &&
          (m.preventDefault(), i?.classList.toggle("active", !1), t.click())
      }
      function l() {
        n?.classList.remove("active")
        let m = document.getElementById("global-graph-container"),
          b = n?.closest(".sidebar")
        m && (b && (b.style.zIndex = "unset"), Ut(m))
      }
      function h(m) {
        m.key === "g" &&
          (m.ctrlKey || m.metaKey) &&
          (m.preventDefault(),
          i?.classList.toggle("active", !1),
          n?.classList.contains("active") ? l() : s())
      }
      function c(m) {
        if (g.get(m.key) !== void 0 && (m.ctrlKey || m.metaKey)) {
          m.preventDefault()
          let b = g.get(m.key)
          if ((i?.classList.toggle("active", !1), window.location.pathname === b)) return
          window.location.href = b
        }
      }
      Ne(document, ["keydown", o], ["keydown", h], ["keydown", c])
    })
    var y = { openllm: "OpenLLM", bentoml: "BentoML", onw: "onw" },
      E = {
        openllm: "Serve, fine-tune and deploy LLMs in production",
        bentoml: "Build Production-grade AI Application",
        onw: "A real-time navigation tools for safer commute",
      },
      D = { openllm: "2023", bentoml: "2023", onw: "2021" }
    document.addEventListener("nav", () => {
      document.querySelectorAll(".project-item").forEach((t) => {
        let n = t.querySelector(".title"),
          i = t.querySelector(".description"),
          o = t.querySelector(".year")
        Le(n, y[n.dataset.name]), Le(i, E[i.dataset.name]), Le(o, D[o.dataset.name])
      })
    })
  })(),
  (function () {
    document.addEventListener("nav", async () => {
      let De = document.getElementById("content-popover")
      De && (De.dataset.show = "true")
    })
  })(),
  (function () {
    document.addEventListener("nav", (De) => {
      if (De.detail.url !== "music") return
      let fe = document.getElementsByClassName("playlists")[0],
        le = document.querySelector(".previous"),
        de = document.querySelector(".next"),
        Be = fe?.querySelectorAll("iframe")
      if (!fe || !Be) return
      let Qt = 0,
        $e = 20,
        Ue = (pe) => {
          let Ut = 0
          for (let Le = 0; Le < pe; Le++) Ut += Be[Le].offsetWidth + $e
          let Ne = Be[pe]
          Ne &&
            ((Ut -= (fe.offsetWidth - Ne.offsetWidth) / 2),
            fe.scrollTo({ left: Ut, behavior: "smooth" }))
        },
        Jt = () => {
          Qt > 0 && (Qt--, Ue(Qt))
        },
        an = () => {
          Qt < Be.length - 1 && (Qt++, Ue(Qt))
        }
      le?.addEventListener("click", Jt),
        window.addCleanup(() => le?.removeEventListener("click", Jt)),
        de?.addEventListener("click", an),
        window.addCleanup(() => de?.removeEventListener("click", an))
    })
  })(),
  (function () {
    var De = (fe) => {
      let le = fe.detail.theme,
        de = document.querySelector("iframe.giscus-frame")
      de &&
        de.contentWindow &&
        de.contentWindow.postMessage({ giscus: { setConfig: { theme: le } } }, "https://giscus.app")
    }
    document.addEventListener("nav", () => {
      let fe = document.querySelector(".giscus")
      if (!fe) return
      let le = document.createElement("script")
      ;(le.src = "https://giscus.app/client.js"),
        (le.async = !0),
        (le.crossOrigin = "anonymous"),
        le.setAttribute("data-loading", "lazy"),
        le.setAttribute("data-emit-metadata", "0"),
        le.setAttribute("data-repo", fe.dataset.repo),
        le.setAttribute("data-repo-id", fe.dataset.repoId),
        le.setAttribute("data-category", fe.dataset.category),
        le.setAttribute("data-category-id", fe.dataset.categoryId),
        le.setAttribute("data-mapping", fe.dataset.mapping),
        le.setAttribute("data-strict", fe.dataset.strict),
        le.setAttribute("data-reactions-enabled", fe.dataset.reactionsEnabled),
        le.setAttribute("data-input-position", fe.dataset.inputPosition),
        le.setAttribute("data-theme", fe.dataset.theme),
        fe.appendChild(le),
        document.addEventListener("themechange", De),
        window.addCleanup(() => document.removeEventListener("themechange", De))
    })
  })(),
  (function () {
    var De = Object.create,
      fe = Object.defineProperty,
      le = Object.getOwnPropertyDescriptor,
      de = Object.getOwnPropertyNames,
      Be = Object.getPrototypeOf,
      Qt = Object.prototype.hasOwnProperty,
      $e = (a, f) => () => (f || a((f = { exports: {} }).exports, f), f.exports),
      Ue = (a, f, p, x) => {
        if ((f && typeof f == "object") || typeof f == "function")
          for (let _ of de(f))
            !Qt.call(a, _) &&
              _ !== p &&
              fe(a, _, { get: () => f[_], enumerable: !(x = le(f, _)) || x.enumerable })
        return a
      },
      Jt = (a, f, p) => (
        (p = a != null ? De(Be(a)) : {}),
        Ue(f || !a || !a.__esModule ? fe(p, "default", { value: a, enumerable: !0 }) : p, a)
      ),
      an = $e(() => {}),
      pe = $e((a, f) => {
        "use strict"
        f.exports = x
        function p(L) {
          return L instanceof Buffer
            ? Buffer.from(L)
            : new L.constructor(L.buffer.slice(), L.byteOffset, L.length)
        }
        function x(L) {
          if (((L = L || {}), L.circles)) return _(L)
          let q = new Map()
          if (
            (q.set(Date, (U) => new Date(U)),
            q.set(Map, (U, Z) => new Map(nt(Array.from(U), Z))),
            q.set(Set, (U, Z) => new Set(nt(Array.from(U), Z))),
            L.constructorHandlers)
          )
            for (let U of L.constructorHandlers) q.set(U[0], U[1])
          let z = null
          return L.proto ? ht : J
          function nt(U, Z) {
            let Q = Object.keys(U),
              R = new Array(Q.length)
            for (let gt = 0; gt < Q.length; gt++) {
              let kt = Q[gt],
                $t = U[kt]
              typeof $t != "object" || $t === null
                ? (R[kt] = $t)
                : $t.constructor !== Object && (z = q.get($t.constructor))
                  ? (R[kt] = z($t, Z))
                  : ArrayBuffer.isView($t)
                    ? (R[kt] = p($t))
                    : (R[kt] = Z($t))
            }
            return R
          }
          function J(U) {
            if (typeof U != "object" || U === null) return U
            if (Array.isArray(U)) return nt(U, J)
            if (U.constructor !== Object && (z = q.get(U.constructor))) return z(U, J)
            let Z = {}
            for (let Q in U) {
              if (Object.hasOwnProperty.call(U, Q) === !1) continue
              let R = U[Q]
              typeof R != "object" || R === null
                ? (Z[Q] = R)
                : R.constructor !== Object && (z = q.get(R.constructor))
                  ? (Z[Q] = z(R, J))
                  : ArrayBuffer.isView(R)
                    ? (Z[Q] = p(R))
                    : (Z[Q] = J(R))
            }
            return Z
          }
          function ht(U) {
            if (typeof U != "object" || U === null) return U
            if (Array.isArray(U)) return nt(U, ht)
            if (U.constructor !== Object && (z = q.get(U.constructor))) return z(U, ht)
            let Z = {}
            for (let Q in U) {
              let R = U[Q]
              typeof R != "object" || R === null
                ? (Z[Q] = R)
                : R.constructor !== Object && (z = q.get(R.constructor))
                  ? (Z[Q] = z(R, ht))
                  : ArrayBuffer.isView(R)
                    ? (Z[Q] = p(R))
                    : (Z[Q] = ht(R))
            }
            return Z
          }
        }
        function _(L) {
          let q = [],
            z = [],
            nt = new Map()
          if (
            (nt.set(Date, (Q) => new Date(Q)),
            nt.set(Map, (Q, R) => new Map(ht(Array.from(Q), R))),
            nt.set(Set, (Q, R) => new Set(ht(Array.from(Q), R))),
            L.constructorHandlers)
          )
            for (let Q of L.constructorHandlers) nt.set(Q[0], Q[1])
          let J = null
          return L.proto ? Z : U
          function ht(Q, R) {
            let gt = Object.keys(Q),
              kt = new Array(gt.length)
            for (let $t = 0; $t < gt.length; $t++) {
              let r = gt[$t],
                v = Q[r]
              if (typeof v != "object" || v === null) kt[r] = v
              else if (v.constructor !== Object && (J = nt.get(v.constructor))) kt[r] = J(v, R)
              else if (ArrayBuffer.isView(v)) kt[r] = p(v)
              else {
                let k = q.indexOf(v)
                k !== -1 ? (kt[r] = z[k]) : (kt[r] = R(v))
              }
            }
            return kt
          }
          function U(Q) {
            if (typeof Q != "object" || Q === null) return Q
            if (Array.isArray(Q)) return ht(Q, U)
            if (Q.constructor !== Object && (J = nt.get(Q.constructor))) return J(Q, U)
            let R = {}
            q.push(Q), z.push(R)
            for (let gt in Q) {
              if (Object.hasOwnProperty.call(Q, gt) === !1) continue
              let kt = Q[gt]
              if (typeof kt != "object" || kt === null) R[gt] = kt
              else if (kt.constructor !== Object && (J = nt.get(kt.constructor))) R[gt] = J(kt, U)
              else if (ArrayBuffer.isView(kt)) R[gt] = p(kt)
              else {
                let $t = q.indexOf(kt)
                $t !== -1 ? (R[gt] = z[$t]) : (R[gt] = U(kt))
              }
            }
            return q.pop(), z.pop(), R
          }
          function Z(Q) {
            if (typeof Q != "object" || Q === null) return Q
            if (Array.isArray(Q)) return ht(Q, Z)
            if (Q.constructor !== Object && (J = nt.get(Q.constructor))) return J(Q, Z)
            let R = {}
            q.push(Q), z.push(R)
            for (let gt in Q) {
              let kt = Q[gt]
              if (typeof kt != "object" || kt === null) R[gt] = kt
              else if (kt.constructor !== Object && (J = nt.get(kt.constructor))) R[gt] = J(kt, Z)
              else if (ArrayBuffer.isView(kt)) R[gt] = p(kt)
              else {
                let $t = q.indexOf(kt)
                $t !== -1 ? (R[gt] = z[$t]) : (R[gt] = Z(kt))
              }
            }
            return q.pop(), z.pop(), R
          }
        }
      }),
      Ut
    function Ne(a) {
      return typeof a < "u" ? a : !0
    }
    function Le(a) {
      let f = Array(a)
      for (let p = 0; p < a; p++) f[p] = Kt()
      return f
    }
    function Kt() {
      return Object.create(null)
    }
    function yn(a, f) {
      return f.length - a.length
    }
    function _e(a) {
      return typeof a == "string"
    }
    function ve(a) {
      return typeof a == "object"
    }
    function ne(a) {
      return typeof a == "function"
    }
    function Je(a, f) {
      var p = vn
      if (
        a &&
        (f && (a = qe(a, f)),
        this.H && (a = qe(a, this.H)),
        this.J && 1 < a.length && (a = qe(a, this.J)),
        p || p === "")
      ) {
        if (((f = a.split(p)), this.filter)) {
          ;(a = this.filter), (p = f.length)
          let x = []
          for (let _ = 0, L = 0; _ < p; _++) {
            let q = f[_]
            q && !a[q] && (x[L++] = q)
          }
          a = x
        } else a = f
        return a
      }
      return a
    }
    var vn = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      Qe = /[\u0300-\u036f]/g
    function Xe(a, f) {
      let p = Object.keys(a),
        x = p.length,
        _ = [],
        L = "",
        q = 0
      for (let z = 0, nt, J; z < x; z++)
        (nt = p[z]),
          (J = a[nt])
            ? ((_[q++] = me(f ? "(?!\\b)" + nt + "(\\b|_)" : nt)), (_[q++] = J))
            : (L += (L ? "|" : "") + nt)
      return L && ((_[q++] = me(f ? "(?!\\b)(" + L + ")(\\b|_)" : "(" + L + ")")), (_[q] = "")), _
    }
    function qe(a, f) {
      for (let p = 0, x = f.length; p < x && ((a = a.replace(f[p], f[p + 1])), a); p += 2);
      return a
    }
    function me(a) {
      return new RegExp(a, "g")
    }
    function fn(a) {
      let f = "",
        p = ""
      for (let x = 0, _ = a.length, L; x < _; x++) (L = a[x]) !== p && (f += p = L)
      return f
    }
    var we = { encode: dn, F: !1, G: "" }
    function dn(a) {
      return Je.call(this, ("" + a).toLowerCase(), !1)
    }
    var Ze = {},
      te = {}
    function Dn(a) {
      ke(a, "add"), ke(a, "append"), ke(a, "search"), ke(a, "update"), ke(a, "remove")
    }
    function ke(a, f) {
      a[f + "Async"] = function () {
        let p = this,
          x = arguments
        var _ = x[x.length - 1]
        let L
        return (
          ne(_) && ((L = _), delete x[x.length - 1]),
          (_ = new Promise(function (q) {
            setTimeout(function () {
              p.async = !0
              let z = p[f].apply(p, x)
              ;(p.async = !1), q(z)
            })
          })),
          L ? (_.then(L), this) : _
        )
      }
    }
    function be(a, f, p, x) {
      let _ = a.length,
        L = [],
        q,
        z,
        nt = 0
      x && (x = [])
      for (let J = _ - 1; 0 <= J; J--) {
        let ht = a[J],
          U = ht.length,
          Z = Kt(),
          Q = !q
        for (let R = 0; R < U; R++) {
          let gt = ht[R],
            kt = gt.length
          if (kt)
            for (let $t = 0, r, v; $t < kt; $t++)
              if (((v = gt[$t]), q)) {
                if (q[v]) {
                  if (!J) {
                    if (p) p--
                    else if (((L[nt++] = v), nt === f)) return L
                  }
                  ;(J || x) && (Z[v] = 1), (Q = !0)
                }
                if (x && ((r = (z[v] || 0) + 1), (z[v] = r), r < _)) {
                  let k = x[r - 2] || (x[r - 2] = [])
                  k[k.length] = v
                }
              } else Z[v] = 1
        }
        if (x) q || (z = Z)
        else if (!Q) return []
        q = Z
      }
      if (x)
        for (let J = x.length - 1, ht, U; 0 <= J; J--) {
          ;(ht = x[J]), (U = ht.length)
          for (let Z = 0, Q; Z < U; Z++)
            if (((Q = ht[Z]), !q[Q])) {
              if (p) p--
              else if (((L[nt++] = Q), nt === f)) return L
              q[Q] = 1
            }
        }
      return L
    }
    function tn(a, f) {
      let p = Kt(),
        x = Kt(),
        _ = []
      for (let L = 0; L < a.length; L++) p[a[L]] = 1
      for (let L = 0, q; L < f.length; L++) {
        q = f[L]
        for (let z = 0, nt; z < q.length; z++)
          (nt = q[z]), p[nt] && !x[nt] && ((x[nt] = 1), (_[_.length] = nt))
      }
      return _
    }
    function Ye(a) {
      ;(this.l = a !== !0 && a), (this.cache = Kt()), (this.h = [])
    }
    function wn(a, f, p) {
      ve(a) && (a = a.query)
      let x = this.cache.get(a)
      return x || ((x = this.search(a, f, p)), this.cache.set(a, x)), x
    }
    ;(Ye.prototype.set = function (a, f) {
      if (!this.cache[a]) {
        var p = this.h.length
        for (p === this.l ? delete this.cache[this.h[p - 1]] : p++, --p; 0 < p; p--)
          this.h[p] = this.h[p - 1]
        this.h[0] = a
      }
      this.cache[a] = f
    }),
      (Ye.prototype.get = function (a) {
        let f = this.cache[a]
        if (this.l && f && (a = this.h.indexOf(a))) {
          let p = this.h[a - 1]
          ;(this.h[a - 1] = this.h[a]), (this.h[a] = p)
        }
        return f
      })
    var xn = {
      memory: { charset: "latin:extra", D: 3, B: 4, m: !1 },
      performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } },
      match: { charset: "latin:extra", G: "reverse" },
      score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } },
      default: {},
    }
    function un(a, f, p, x, _, L, q, z) {
      setTimeout(function () {
        let nt = a(p ? p + "." + x : x, JSON.stringify(q))
        nt && nt.then
          ? nt.then(function () {
              f.export(a, f, p, _, L + 1, z)
            })
          : f.export(a, f, p, _, L + 1, z)
      })
    }
    function Se(a, f) {
      if (!(this instanceof Se)) return new Se(a)
      var p
      if (a) {
        _e(a) ? (a = xn[a]) : (p = a.preset) && (a = Object.assign({}, p[p], a)), (p = a.charset)
        var x = a.lang
        _e(p) && (p.indexOf(":") === -1 && (p += ":default"), (p = te[p])), _e(x) && (x = Ze[x])
      } else a = {}
      let _,
        L,
        q = a.context || {}
      if (
        ((this.encode = a.encode || (p && p.encode) || dn),
        (this.register = f || Kt()),
        (this.D = _ = a.resolution || 9),
        (this.G = f = (p && p.G) || a.tokenize || "strict"),
        (this.depth = f === "strict" && q.depth),
        (this.l = Ne(q.bidirectional)),
        (this.s = L = Ne(a.optimize)),
        (this.m = Ne(a.fastupdate)),
        (this.B = a.minlength || 1),
        (this.C = a.boost),
        (this.map = L ? Le(_) : Kt()),
        (this.A = _ = q.resolution || 1),
        (this.h = L ? Le(_) : Kt()),
        (this.F = (p && p.F) || a.rtl),
        (this.H = (f = a.matcher || (x && x.H)) && Xe(f, !1)),
        (this.J = (f = a.stemmer || (x && x.J)) && Xe(f, !0)),
        (p = f = a.filter || (x && x.filter)))
      ) {
        ;(p = f), (x = Kt())
        for (let z = 0, nt = p.length; z < nt; z++) x[p[z]] = 1
        p = x
      }
      ;(this.filter = p), (this.cache = (f = a.cache) && new Ye(f))
    }
    ;(Ut = Se.prototype),
      (Ut.append = function (a, f) {
        return this.add(a, f, !0)
      }),
      (Ut.add = function (a, f, p, x) {
        if (f && (a || a === 0)) {
          if (!x && !p && this.register[a]) return this.update(a, f)
          if (((f = this.encode(f)), (x = f.length))) {
            let J = Kt(),
              ht = Kt(),
              U = this.depth,
              Z = this.D
            for (let Q = 0; Q < x; Q++) {
              let R = f[this.F ? x - 1 - Q : Q]
              var _ = R.length
              if (R && _ >= this.B && (U || !ht[R])) {
                var L = xe(Z, x, Q),
                  q = ""
                switch (this.G) {
                  case "full":
                    if (2 < _) {
                      for (L = 0; L < _; L++)
                        for (var z = _; z > L; z--)
                          if (z - L >= this.B) {
                            var nt = xe(Z, x, Q, _, L)
                            ;(q = R.substring(L, z)), We(this, ht, q, nt, a, p)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < _) {
                      for (z = _ - 1; 0 < z; z--)
                        (q = R[z] + q),
                          q.length >= this.B && We(this, ht, q, xe(Z, x, Q, _, z), a, p)
                      q = ""
                    }
                  case "forward":
                    if (1 < _) {
                      for (z = 0; z < _; z++)
                        (q += R[z]), q.length >= this.B && We(this, ht, q, L, a, p)
                      break
                    }
                  default:
                    if (
                      (this.C && (L = Math.min((L / this.C(f, R, Q)) | 0, Z - 1)),
                      We(this, ht, R, L, a, p),
                      U && 1 < x && Q < x - 1)
                    ) {
                      for (
                        _ = Kt(), q = this.A, L = R, z = Math.min(U + 1, x - Q), _[L] = 1, nt = 1;
                        nt < z;
                        nt++
                      )
                        if (
                          (R = f[this.F ? x - 1 - Q - nt : Q + nt]) &&
                          R.length >= this.B &&
                          !_[R]
                        ) {
                          _[R] = 1
                          let gt = this.l && R > L
                          We(
                            this,
                            J,
                            gt ? L : R,
                            xe(q + (x / 2 > q ? 0 : 1), x, Q, z - 1, nt - 1),
                            a,
                            p,
                            gt ? R : L,
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
    function xe(a, f, p, x, _) {
      return p && 1 < a
        ? f + (x || 0) <= a
          ? p + (_ || 0)
          : (((a - 1) / (f + (x || 0))) * (p + (_ || 0)) + 1) | 0
        : 0
    }
    function We(a, f, p, x, _, L, q) {
      let z = q ? a.h : a.map
      ;(!f[p] || (q && !f[p][q])) &&
        (a.s && (z = z[x]),
        q ? ((f = f[p] || (f[p] = Kt())), (f[q] = 1), (z = z[q] || (z[q] = Kt()))) : (f[p] = 1),
        (z = z[p] || (z[p] = [])),
        a.s || (z = z[x] || (z[x] = [])),
        (L && z.includes(_)) ||
          ((z[z.length] = _),
          a.m && ((a = a.register[_] || (a.register[_] = [])), (a[a.length] = z))))
    }
    Ut.search = function (a, f, p) {
      p || (!f && ve(a) ? ((p = a), (a = p.query)) : ve(f) && (p = f))
      let x = [],
        _,
        L,
        q = 0
      if (p) {
        ;(a = p.query || a), (f = p.limit), (q = p.offset || 0)
        var z = p.context
        L = p.suggest
      }
      if (a && ((a = this.encode("" + a)), (_ = a.length), 1 < _)) {
        p = Kt()
        var nt = []
        for (let ht = 0, U = 0, Z; ht < _; ht++)
          if ((Z = a[ht]) && Z.length >= this.B && !p[Z])
            if (this.s || L || this.map[Z]) (nt[U++] = Z), (p[Z] = 1)
            else return x
        ;(a = nt), (_ = a.length)
      }
      if (!_) return x
      f || (f = 100), (z = this.depth && 1 < _ && z !== !1), (p = 0)
      let J
      z ? ((J = a[0]), (p = 1)) : 1 < _ && a.sort(yn)
      for (let ht, U; p < _; p++) {
        if (
          ((U = a[p]),
          z
            ? ((ht = He(this, x, L, f, q, _ === 2, U, J)), (L && ht === !1 && x.length) || (J = U))
            : (ht = He(this, x, L, f, q, _ === 1, U)),
          ht)
        )
          return ht
        if (L && p === _ - 1) {
          if (((nt = x.length), !nt)) {
            if (z) {
              ;(z = 0), (p = -1)
              continue
            }
            return x
          }
          if (nt === 1) return rt(x[0], f, q)
        }
      }
      return be(x, f, q, L)
    }
    function He(a, f, p, x, _, L, q, z) {
      let nt = [],
        J = z ? a.h : a.map
      if ((a.s || (J = mt(J, q, z, a.l)), J)) {
        let ht = 0,
          U = Math.min(J.length, z ? a.A : a.D)
        for (
          let Z = 0, Q = 0, R, gt;
          Z < U &&
          !(
            (R = J[Z]) &&
            (a.s && (R = mt(R, q, z, a.l)),
            _ &&
              R &&
              L &&
              ((gt = R.length), gt <= _ ? ((_ -= gt), (R = null)) : ((R = R.slice(_)), (_ = 0))),
            R && ((nt[ht++] = R), L && ((Q += R.length), Q >= x)))
          );
          Z++
        );
        if (ht) {
          if (L) return rt(nt, x, 0)
          f[f.length] = nt
          return
        }
      }
      return !p && nt
    }
    function rt(a, f, p) {
      return (
        (a = a.length === 1 ? a[0] : [].concat.apply([], a)),
        p || a.length > f ? a.slice(p, p + f) : a
      )
    }
    function mt(a, f, p, x) {
      return p ? ((x = x && f > p), (a = (a = a[x ? f : p]) && a[x ? p : f])) : (a = a[f]), a
    }
    ;(Ut.contain = function (a) {
      return !!this.register[a]
    }),
      (Ut.update = function (a, f) {
        return this.remove(a).add(a, f)
      }),
      (Ut.remove = function (a, f) {
        let p = this.register[a]
        if (p) {
          if (this.m) for (let x = 0, _; x < p.length; x++) (_ = p[x]), _.splice(_.indexOf(a), 1)
          else Ct(this.map, a, this.D, this.s), this.depth && Ct(this.h, a, this.A, this.s)
          if ((f || delete this.register[a], this.cache)) {
            f = this.cache
            for (let x = 0, _, L; x < f.h.length; x++)
              (L = f.h[x]),
                (_ = f.cache[L]),
                _.includes(a) && (f.h.splice(x--, 1), delete f.cache[L])
          }
        }
        return this
      })
    function Ct(a, f, p, x, _) {
      let L = 0
      if (a.constructor === Array)
        if (_) (f = a.indexOf(f)), f !== -1 ? 1 < a.length && (a.splice(f, 1), L++) : L++
        else {
          _ = Math.min(a.length, p)
          for (let q = 0, z; q < _; q++)
            (z = a[q]) && ((L = Ct(z, f, p, x, _)), x || L || delete a[q])
        }
      else for (let q in a) (L = Ct(a[q], f, p, x, _)) || delete a[q]
      return L
    }
    ;(Ut.searchCache = wn),
      (Ut.export = function (a, f, p, x, _, L) {
        let q = !0
        typeof L > "u" &&
          (q = new Promise((J) => {
            L = J
          }))
        let z, nt
        switch (_ || (_ = 0)) {
          case 0:
            if (((z = "reg"), this.m)) {
              nt = Kt()
              for (let J in this.register) nt[J] = 1
            } else nt = this.register
            break
          case 1:
            ;(z = "cfg"), (nt = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(z = "map"), (nt = this.map)
            break
          case 3:
            ;(z = "ctx"), (nt = this.h)
            break
          default:
            typeof p > "u" && L && L()
            return
        }
        return un(a, f || this, p, z, x, _, nt, L), q
      }),
      (Ut.import = function (a, f) {
        if (f)
          switch ((_e(f) && (f = JSON.parse(f)), a)) {
            case "cfg":
              this.s = !!f.opt
              break
            case "reg":
              ;(this.m = !1), (this.register = f)
              break
            case "map":
              this.map = f
              break
            case "ctx":
              this.h = f
          }
      }),
      Dn(Se.prototype)
    function Tt(a) {
      a = a.data
      var f = self._index
      let p = a.args
      var x = a.task
      switch (x) {
        case "init":
          ;(x = a.options || {}),
            (a = a.factory),
            (f = x.encode),
            (x.cache = !1),
            f && f.indexOf("function") === 0 && (x.encode = Function("return " + f)()),
            a
              ? (Function("return " + a)()(self),
                (self._index = new self.FlexSearch.Index(x)),
                delete self.FlexSearch)
              : (self._index = new Se(x))
          break
        default:
          ;(a = a.id),
            (f = f[x].apply(f, p)),
            postMessage(x === "search" ? { id: a, msg: f } : { id: a })
      }
    }
    var Pt = 0
    function Ot(a) {
      if (!(this instanceof Ot)) return new Ot(a)
      var f
      a ? ne((f = a.encode)) && (a.encode = f.toString()) : (a = {}),
        (f = (self || window)._factory) && (f = f.toString())
      let p = typeof window > "u" && self.exports,
        x = this
      ;(this.o = ie(f, p, a.worker)),
        (this.h = Kt()),
        this.o &&
          (p
            ? this.o.on("message", function (_) {
                x.h[_.id](_.msg), delete x.h[_.id]
              })
            : (this.o.onmessage = function (_) {
                ;(_ = _.data), x.h[_.id](_.msg), delete x.h[_.id]
              }),
          this.o.postMessage({ task: "init", factory: f, options: a }))
    }
    It("add"), It("append"), It("search"), It("update"), It("remove")
    function It(a) {
      Ot.prototype[a] = Ot.prototype[a + "Async"] = function () {
        let f = this,
          p = [].slice.call(arguments)
        var x = p[p.length - 1]
        let _
        return (
          ne(x) && ((_ = x), p.splice(p.length - 1, 1)),
          (x = new Promise(function (L) {
            setTimeout(function () {
              ;(f.h[++Pt] = L), f.o.postMessage({ task: a, id: Pt, args: p })
            })
          })),
          _ ? (x.then(_), this) : x
        )
      }
    }
    function ie(a, f, p) {
      let x
      try {
        x = f
          ? new (an().Worker)(__dirname + "/node/node.js")
          : a
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + Tt.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(_e(p) ? p : "worker/worker.js", { type: "module" })
      } catch {}
      return x
    }
    function ce(a) {
      if (!(this instanceof ce)) return new ce(a)
      var f = a.document || a.doc || a,
        p
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = Kt()),
        (this.key = ((p = f.key || f.id) && Ce(p, this.A)) || "id"),
        (this.m = Ne(a.fastupdate)),
        (this.C = (p = f.store) && p !== !0 && []),
        (this.store = p && Kt()),
        (this.I = (p = f.tag) && Ce(p, this.A)),
        (this.l = p && Kt()),
        (this.cache = (p = a.cache) && new Ye(p)),
        (a.cache = !1),
        (this.o = a.worker),
        (this.async = !1),
        (p = Kt())
      let x = f.index || f.field || f
      _e(x) && (x = [x])
      for (let _ = 0, L, q; _ < x.length; _++)
        (L = x[_]),
          _e(L) || ((q = L), (L = L.field)),
          (q = ve(q) ? Object.assign({}, a, q) : a),
          this.o && ((p[L] = new Ot(q)), p[L].o || (this.o = !1)),
          this.o || (p[L] = new Se(q, this.register)),
          (this.K[_] = Ce(L, this.A)),
          (this.h[_] = L)
      if (this.C)
        for (a = f.store, _e(a) && (a = [a]), f = 0; f < a.length; f++) this.C[f] = Ce(a[f], this.A)
      this.index = p
    }
    function Ce(a, f) {
      let p = a.split(":"),
        x = 0
      for (let _ = 0; _ < p.length; _++)
        (a = p[_]),
          0 <= a.indexOf("[]") && (a = a.substring(0, a.length - 2)) && (f[x] = !0),
          a && (p[x++] = a)
      return x < p.length && (p.length = x), 1 < x ? p : p[0]
    }
    function Pe(a, f) {
      if (_e(f)) a = a[f]
      else for (let p = 0; a && p < f.length; p++) a = a[f[p]]
      return a
    }
    function Rt(a, f, p, x, _) {
      if (((a = a[_]), x === p.length - 1)) f[_] = a
      else if (a)
        if (a.constructor === Array)
          for (f = f[_] = Array(a.length), _ = 0; _ < a.length; _++) Rt(a, f, p, x, _)
        else (f = f[_] || (f[_] = Kt())), (_ = p[++x]), Rt(a, f, p, x, _)
    }
    function ue(a, f, p, x, _, L, q, z) {
      if ((a = a[q]))
        if (x === f.length - 1) {
          if (a.constructor === Array) {
            if (p[x]) {
              for (f = 0; f < a.length; f++) _.add(L, a[f], !0, !0)
              return
            }
            a = a.join(" ")
          }
          _.add(L, a, z, !0)
        } else if (a.constructor === Array)
          for (q = 0; q < a.length; q++) ue(a, f, p, x, _, L, q, z)
        else (q = f[++x]), ue(a, f, p, x, _, L, q, z)
    }
    ;(Ut = ce.prototype),
      (Ut.add = function (a, f, p) {
        if ((ve(a) && ((f = a), (a = Pe(f, this.key))), f && (a || a === 0))) {
          if (!p && this.register[a]) return this.update(a, f)
          for (let x = 0, _, L; x < this.h.length; x++)
            (L = this.h[x]),
              (_ = this.K[x]),
              _e(_) && (_ = [_]),
              ue(f, _, this.A, 0, this.index[L], a, _[0], p)
          if (this.I) {
            let x = Pe(f, this.I),
              _ = Kt()
            _e(x) && (x = [x])
            for (let L = 0, q, z; L < x.length; L++)
              if (
                ((q = x[L]),
                !_[q] &&
                  ((_[q] = 1), (z = this.l[q] || (this.l[q] = [])), !p || !z.includes(a)) &&
                  ((z[z.length] = a), this.m))
              ) {
                let nt = this.register[a] || (this.register[a] = [])
                nt[nt.length] = z
              }
          }
          if (this.store && (!p || !this.store[a])) {
            let x
            if (this.C) {
              x = Kt()
              for (let _ = 0, L; _ < this.C.length; _++)
                (L = this.C[_]), _e(L) ? (x[L] = f[L]) : Rt(f, x, L, 0, L[0])
            }
            this.store[a] = x || f
          }
        }
        return this
      }),
      (Ut.append = function (a, f) {
        return this.add(a, f, !0)
      }),
      (Ut.update = function (a, f) {
        return this.remove(a).add(a, f)
      }),
      (Ut.remove = function (a) {
        if ((ve(a) && (a = Pe(a, this.key)), this.register[a])) {
          for (
            var f = 0;
            f < this.h.length && (this.index[this.h[f]].remove(a, !this.o), !this.m);
            f++
          );
          if (this.I && !this.m)
            for (let p in this.l) {
              f = this.l[p]
              let x = f.indexOf(a)
              x !== -1 && (1 < f.length ? f.splice(x, 1) : delete this.l[p])
            }
          this.store && delete this.store[a], delete this.register[a]
        }
        return this
      }),
      (Ut.search = function (a, f, p, x) {
        p || (!f && ve(a) ? ((p = a), (a = "")) : ve(f) && ((p = f), (f = 0)))
        let _ = [],
          L = [],
          q,
          z,
          nt,
          J,
          ht,
          U,
          Z = 0
        if (p)
          if (p.constructor === Array) (nt = p), (p = null)
          else {
            if (
              ((a = p.query || a),
              (nt = (q = p.pluck) || p.index || p.field),
              (J = p.tag),
              (z = this.store && p.enrich),
              (ht = p.bool === "and"),
              (f = p.limit || f || 100),
              (U = p.offset || 0),
              J && (_e(J) && (J = [J]), !a))
            ) {
              for (let R = 0, gt; R < J.length; R++)
                (gt = Ft.call(this, J[R], f, U, z)) && ((_[_.length] = gt), Z++)
              return Z ? _ : []
            }
            _e(nt) && (nt = [nt])
          }
        nt || (nt = this.h), (ht = ht && (1 < nt.length || (J && 1 < J.length)))
        let Q = !x && (this.o || this.async) && []
        for (let R = 0, gt, kt, $t; R < nt.length; R++) {
          let r
          if (
            ((kt = nt[R]),
            _e(kt) ||
              ((r = kt),
              (kt = r.field),
              (a = r.query || a),
              (f = r.limit || f),
              (z = r.enrich || z)),
            Q)
          )
            Q[R] = this.index[kt].searchAsync(a, f, r || p)
          else {
            if (
              (x ? (gt = x[R]) : (gt = this.index[kt].search(a, f, r || p)),
              ($t = gt && gt.length),
              J && $t)
            ) {
              let v = [],
                k = 0
              ht && (v[0] = [gt])
              for (let M = 0, F, j; M < J.length; M++)
                (F = J[M]),
                  ($t = (j = this.l[F]) && j.length) && (k++, (v[v.length] = ht ? [j] : j))
              k && ((gt = ht ? be(v, f || 100, U || 0) : tn(gt, v)), ($t = gt.length))
            }
            if ($t) (L[Z] = kt), (_[Z++] = gt)
            else if (ht) return []
          }
        }
        if (Q) {
          let R = this
          return new Promise(function (gt) {
            Promise.all(Q).then(function (kt) {
              gt(R.search(a, f, p, kt))
            })
          })
        }
        if (!Z) return []
        if (q && (!z || !this.store)) return _[0]
        for (let R = 0, gt; R < L.length; R++) {
          if (((gt = _[R]), gt.length && z && (gt = qt.call(this, gt)), q)) return gt
          _[R] = { field: L[R], result: gt }
        }
        return _
      })
    function Ft(a, f, p, x) {
      let _ = this.l[a],
        L = _ && _.length - p
      if (L && 0 < L)
        return (
          (L > f || p) && (_ = _.slice(p, p + f)),
          x && (_ = qt.call(this, _)),
          { tag: a, result: _ }
        )
    }
    function qt(a) {
      let f = Array(a.length)
      for (let p = 0, x; p < a.length; p++) (x = a[p]), (f[p] = { id: x, doc: this.store[x] })
      return f
    }
    ;(Ut.contain = function (a) {
      return !!this.register[a]
    }),
      (Ut.get = function (a) {
        return this.store[a]
      }),
      (Ut.set = function (a, f) {
        return (this.store[a] = f), this
      }),
      (Ut.searchCache = wn),
      (Ut.export = function (a, f, p, x, _, L) {
        let q
        if (
          (typeof L > "u" &&
            (q = new Promise((z) => {
              L = z
            })),
          _ || (_ = 0),
          x || (x = 0),
          x < this.h.length)
        ) {
          let z = this.h[x],
            nt = this.index[z]
          ;(f = this),
            setTimeout(function () {
              nt.export(a, f, _ ? z : "", x, _++, L) || (x++, (_ = 1), f.export(a, f, z, x, _, L))
            })
        } else {
          let z, nt
          switch (_) {
            case 1:
              ;(z = "tag"), (nt = this.l), (p = null)
              break
            case 2:
              ;(z = "store"), (nt = this.store), (p = null)
              break
            default:
              L()
              return
          }
          un(a, this, p, z, x, _, nt, L)
        }
        return q
      }),
      (Ut.import = function (a, f) {
        if (f)
          switch ((_e(f) && (f = JSON.parse(f)), a)) {
            case "tag":
              this.l = f
              break
            case "reg":
              ;(this.m = !1), (this.register = f)
              for (let x = 0, _; x < this.h.length; x++)
                (_ = this.index[this.h[x]]), (_.register = f), (_.m = !1)
              break
            case "store":
              this.store = f
              break
            default:
              a = a.split(".")
              let p = a[0]
              ;(a = a[1]), p && a && this.index[p].import(a, f)
          }
      }),
      Dn(ce.prototype)
    var he = { encode: Ee, F: !1, G: "" },
      re = [
        me("[\xE0\xE1\xE2\xE3\xE4\xE5]"),
        "a",
        me("[\xE8\xE9\xEA\xEB]"),
        "e",
        me("[\xEC\xED\xEE\xEF]"),
        "i",
        me("[\xF2\xF3\xF4\xF5\xF6\u0151]"),
        "o",
        me("[\xF9\xFA\xFB\xFC\u0171]"),
        "u",
        me("[\xFD\u0177\xFF]"),
        "y",
        me("\xF1"),
        "n",
        me("[\xE7c]"),
        "k",
        me("\xDF"),
        "s",
        me(" & "),
        " and ",
      ]
    function Ee(a) {
      var f = (a = "" + a)
      return (
        f.normalize && (f = f.normalize("NFD").replace(Qe, "")),
        Je.call(this, f.toLowerCase(), !a.normalize && re)
      )
    }
    var en = { encode: bn, F: !1, G: "strict" },
      Ve = /[^a-z0-9]+/,
      Ie = {
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
      a = Ee.call(this, a).join(" ")
      let f = []
      if (a) {
        let p = a.split(Ve),
          x = p.length
        for (let _ = 0, L, q = 0; _ < x; _++)
          if ((a = p[_]) && (!this.filter || !this.filter[a])) {
            L = a[0]
            let z = Ie[L] || L,
              nt = z
            for (let J = 1; J < a.length; J++) {
              L = a[J]
              let ht = Ie[L] || L
              ht && ht !== nt && ((z += ht), (nt = ht))
            }
            f[q++] = z
          }
      }
      return f
    }
    var jn = { encode: sn, F: !1, G: "" },
      kn = [
        me("ae"),
        "a",
        me("oe"),
        "o",
        me("sh"),
        "s",
        me("th"),
        "t",
        me("ph"),
        "f",
        me("pf"),
        "f",
        me("(?![aeo])h(?![aeo])"),
        "",
        me("(?!^[aeo])h(?!^[aeo])"),
        "",
      ]
    function sn(a, f) {
      return (
        a &&
          ((a = bn.call(this, a).join(" ")),
          2 < a.length && (a = qe(a, kn)),
          f || (1 < a.length && (a = fn(a)), a && (a = a.split(" ")))),
        a || []
      )
    }
    var Fn = { encode: Bn, F: !1, G: "" },
      Nn = me("(?!\\b)[aeo]")
    function Bn(a) {
      return (
        a &&
          ((a = sn.call(this, a, !0)),
          1 < a.length && (a = a.replace(Nn, "")),
          1 < a.length && (a = fn(a)),
          a && (a = a.split(" "))),
        a || []
      )
    }
    ;(te["latin:default"] = we),
      (te["latin:simple"] = he),
      (te["latin:balance"] = en),
      (te["latin:advanced"] = jn),
      (te["latin:extra"] = Fn)
    var zn = {
      Index: Se,
      Document: ce,
      Worker: Ot,
      registerCharset: function (a, f) {
        te[a] = f
      },
      registerLanguage: function (a, f) {
        Ze[a] = f
      },
    }
    function Hn(a, f) {
      if (!a) return
      function p(_) {
        _.target === this && (_.preventDefault(), f())
      }
      function x(_) {
        _.key.startsWith("Esc") && (_.preventDefault(), f())
      }
      a?.addEventListener("click", p),
        window.addCleanup(() => a?.removeEventListener("click", p)),
        document.addEventListener("keydown", x),
        window.addCleanup(() => document.removeEventListener("keydown", x))
    }
    function d(a) {
      for (; a.firstChild; ) a.removeChild(a.firstChild)
    }
    var B = Object.hasOwnProperty,
      T = Jt(pe(), 1),
      $ = (0, T.default)()
    function P(a) {
      let f = oe(ye(a, "index"), !0)
      return f.length === 0 ? "/" : f
    }
    var tt = (a, f, p) => {
      let x = new URL(a.getAttribute(f), p)
      a.setAttribute(f, x.pathname + x.hash)
    }
    function ct(a, f) {
      a.querySelectorAll('[href^="./"], [href^="../"]').forEach((p) => tt(p, "href", f)),
        a.querySelectorAll('[src^="./"], [src^="../"]').forEach((p) => tt(p, "src", f))
    }
    function st(a) {
      let f = a
        .split("/")
        .filter((p) => p !== "")
        .slice(0, -1)
        .map((p) => "..")
        .join("/")
      return f.length === 0 && (f = "."), f
    }
    function xt(a, f) {
      return Vt(st(a), P(f))
    }
    function Vt(...a) {
      return a
        .filter((f) => f !== "")
        .join("/")
        .replace(/\/\/+/g, "/")
    }
    function Gt(a, f) {
      return a === f || a.endsWith("/" + f)
    }
    function ye(a, f) {
      return Gt(a, f) && (a = a.slice(0, -f.length)), a
    }
    function oe(a, f) {
      return (
        a.startsWith("/") && (a = a.substring(1)), !f && a.endsWith("/") && (a = a.slice(0, -1)), a
      )
    }
    var ee = "basic",
      Nt = "",
      ae = (a) => a.toLowerCase().split(/([^a-z]|[^\x00-\x7F])/),
      Te = new zn.Document({
        charset: "latin:extra",
        encode: ae,
        document: {
          id: "id",
          tag: "tags",
          index: [
            { field: "title", tokenize: "forward" },
            { field: "content", tokenize: "forward" },
            { field: "tags", tokenize: "forward" },
          ],
        },
      }),
      ln = new DOMParser(),
      Re = new Map(),
      Oe = 50,
      nn = 15,
      Ln = 15,
      cn = (a) => {
        let f = a.split(/\s+/).filter((x) => x.trim() !== ""),
          p = f.length
        if (p > 1) for (let x = 1; x < p; x++) f.push(f.slice(0, x + 1).join(" "))
        return f.sort((x, _) => _.length - x.length)
      }
    function En(a, f, p) {
      let x = cn(a),
        _ = f.split(/\s+/).filter((nt) => nt !== ""),
        L = 0,
        q = _.length - 1
      if (p) {
        let nt = (Z) => x.some((Q) => Z.toLowerCase().startsWith(Q.toLowerCase())),
          J = _.map(nt),
          ht = 0,
          U = 0
        for (let Z = 0; Z < Math.max(_.length - Oe, 0); Z++) {
          let Q = J.slice(Z, Z + Oe).reduce((R, gt) => R + (gt ? 1 : 0), 0)
          Q >= ht && ((ht = Q), (U = Z))
        }
        ;(L = Math.max(U - Oe, 0)), (q = Math.min(L + 2 * Oe, _.length - 1)), (_ = _.slice(L, q))
      }
      let z = _.map((nt) => {
        for (let J of x)
          if (nt.toLowerCase().includes(J.toLowerCase())) {
            let ht = new RegExp(J.toLowerCase(), "gi")
            return nt.replace(ht, '<span class="highlight">$&</span>')
          }
        return nt
      }).join(" ")
      return `${L === 0 ? "" : "..."}${z}${q === _.length - 1 ? "" : "..."}`
    }
    function N(a, f) {
      let p = new DOMParser(),
        x = cn(a),
        _ = p.parseFromString(f.innerHTML, "text/html"),
        L = (z) => {
          let nt = document.createElement("span")
          return (nt.className = "highlight"), (nt.textContent = z), nt
        },
        q = (z, nt) => {
          if (z.nodeType === Node.TEXT_NODE) {
            let J = z.nodeValue ?? "",
              ht = new RegExp(nt.toLowerCase(), "gi"),
              U = J.match(ht)
            if (!U || U.length === 0) return
            let Z = document.createElement("span"),
              Q = 0
            for (let R of U) {
              let gt = J.indexOf(R, Q)
              Z.appendChild(document.createTextNode(J.slice(Q, gt))),
                Z.appendChild(L(R)),
                (Q = gt + R.length)
            }
            Z.appendChild(document.createTextNode(J.slice(Q))), z.parentNode?.replaceChild(Z, z)
          } else if (z.nodeType === Node.ELEMENT_NODE) {
            if (z.classList.contains("highlight")) return
            Array.from(z.childNodes).forEach((J) => q(J, nt))
          }
        }
      for (let z of x) q(_.body, z)
      return _.body
    }
    document.addEventListener("nav", async (a) => {
      let f = a.detail.url,
        p = await fetchData,
        x = document.getElementById("search-container"),
        _ = x?.closest(".sidebar"),
        L = document.getElementById("search-icon"),
        q = document.getElementById("search-bar"),
        z = document.getElementById("search-layout"),
        nt = Object.keys(p),
        J = (Y) => {
          z?.querySelector(`#${Y.id}`) === null && z?.appendChild(Y)
        },
        ht = z?.dataset?.preview === "true",
        U,
        Z,
        Q = document.createElement("div")
      ;(Q.id = "results-container"),
        J(Q),
        ht && ((U = document.createElement("div")), (U.id = "preview-container"), J(U))
      function R() {
        x?.classList.remove("active"),
          q && (q.value = ""),
          _ && (_.style.zIndex = "unset"),
          Q && d(Q),
          U && d(U),
          z && z.classList.remove("display-results"),
          (ee = "basic")
      }
      function gt(Y) {
        ;(ee = Y), _ && (_.style.zIndex = "1"), x?.classList.add("active"), q?.focus()
      }
      let kt = null
      async function $t(Y) {
        if (Y.key === "k" && (Y.ctrlKey || Y.metaKey) && !Y.shiftKey) {
          Y.preventDefault(), x?.classList.contains("active") ? R() : gt("basic")
          return
        } else if (Y.shiftKey && (Y.ctrlKey || Y.metaKey) && Y.key.toLowerCase() === "k") {
          Y.preventDefault(),
            x?.classList.contains("active") ? R() : gt("tags"),
            q && (q.value = "#")
          return
        }
        if ((kt && kt.classList.remove("focus"), !!x?.classList.contains("active"))) {
          if (Y.key === "Enter")
            if (Q?.contains(document.activeElement)) {
              let ot = document.activeElement
              if (ot.classList.contains("no-match")) return
              await et(ot), ot.click()
            } else {
              let ot = document.getElementsByClassName("result-card")[0]
              if (!ot || ot?.classList.contains("no-match")) return
              await et(ot), ot.click()
            }
          else if (Y.key === "ArrowUp" || (Y.shiftKey && Y.key === "Tab")) {
            if ((Y.preventDefault(), Q?.contains(document.activeElement))) {
              let ot = kt || document.activeElement,
                lt = ot?.previousElementSibling
              ot?.classList.remove("focus"), lt?.focus(), lt && (kt = lt), await et(lt)
            }
          } else if (
            (Y.key === "ArrowDown" || Y.key === "Tab") &&
            (Y.preventDefault(), document.activeElement === q || kt !== null)
          ) {
            let ot = kt || document.getElementsByClassName("result-card")[0],
              lt = ot?.nextElementSibling
            ot?.classList.remove("focus"), lt?.focus(), lt && (kt = lt), await et(lt)
          }
        }
      }
      let r = (Y, ot) => {
        let lt = nt[ot]
        return {
          id: ot,
          slug: lt,
          title: ee === "tags" ? p[lt].title : En(Y, p[lt].title ?? ""),
          content: En(Y, p[lt].content ?? "", !0),
          tags: v(Y.substring(1), p[lt].tags),
        }
      }
      function v(Y, ot) {
        return !ot || ee !== "tags"
          ? []
          : ot
              .map((lt) =>
                lt.toLowerCase().includes(Y.toLowerCase())
                  ? `<li><p class="match-tag">#${lt}</p></li>`
                  : `<li><p>#${lt}</p></li>`,
              )
              .slice(0, Ln)
      }
      function k(Y) {
        return new URL(xt(f, Y), location.toString())
      }
      let M = ({ slug: Y, title: ot, content: lt, tags: At }) => {
        let _t = At.length > 0 ? `<ul class="tags">${At.join("")}</ul>` : "",
          wt = document.createElement("a")
        wt.classList.add("result-card"),
          (wt.id = Y),
          (wt.href = k(Y).toString()),
          (wt.innerHTML = `<h3>${ot}</h3>${_t}${ht && window.innerWidth > 600 ? "" : `<p>${lt}</p>`}`),
          wt.addEventListener("click", (Xt) => {
            Xt.altKey || Xt.ctrlKey || Xt.metaKey || Xt.shiftKey || R()
          })
        let vt = (Xt) => {
          Xt.altKey || Xt.ctrlKey || Xt.metaKey || Xt.shiftKey || R()
        }
        async function zt(Xt) {
          if (!Xt.target) return
          let je = Xt.target
          await et(je)
        }
        return (
          wt.addEventListener("mouseenter", zt),
          window.addCleanup(() => wt.removeEventListener("mouseenter", zt)),
          wt.addEventListener("click", vt),
          window.addCleanup(() => wt.removeEventListener("click", vt)),
          wt
        )
      }
      async function F(Y) {
        if (Q)
          if (
            (d(Q),
            Y.length === 0
              ? (Q.innerHTML = `<a class="result-card no-match">
          <h3>No results.</h3>
          <p>Try another search term?</p>
      </a>`)
              : Q.append(...Y.map(M)),
            Y.length === 0 && U)
          )
            d(U)
          else {
            let ot = Q.firstElementChild
            ot.classList.add("focus"), (kt = ot), await et(ot)
          }
      }
      async function j(Y) {
        if (Re.has(Y)) return Re.get(Y)
        let ot = k(Y).toString(),
          lt = await fetch(ot)
            .then((At) => At.text())
            .then((At) => {
              if (At === void 0) throw new Error(`Could not fetch ${ot}`)
              let _t = ln.parseFromString(At ?? "", "text/html")
              if (_t.body.dataset.enablePreview === "false") {
                let wt = document.createElement("div")
                return (
                  (wt.innerHTML = "<p>L'aper\xE7u est d\xE9sactiv\xE9 sur cette page.</p>"), [wt]
                )
              }
              return ct(_t, ot), [..._t.getElementsByClassName("popover-hint")]
            })
        return Re.set(Y, lt), lt
      }
      async function et(Y) {
        if (!z || !ht || !Y || !U) return
        let ot = Y.id,
          lt = await j(ot).then((At) => At.flatMap((_t) => [...N(Nt, _t).children]))
        ;(Z = document.createElement("div")),
          Z.classList.add("preview-inner"),
          Z.append(...lt),
          U.replaceChildren(Z),
          [...U.querySelectorAll(".highlight")]
            .sort((At, _t) => _t.innerHTML.length - At.innerHTML.length)[0]
            ?.scrollIntoView({ block: "start" })
      }
      async function it(Y) {
        if (!z || !Te) return
        ;(Nt = Y.target.value),
          z.classList.toggle("display-results", Nt !== ""),
          (ee = Nt.startsWith("#") ? "tags" : "basic")
        let ot
        if (ee === "tags") {
          Nt = Nt.substring(1).trim()
          let _t = Nt.indexOf(" ")
          if (_t != -1) {
            let wt = Nt.substring(0, _t),
              vt = Nt.substring(_t + 1).trim()
            ot = await Te.searchAsync({
              query: vt,
              limit: Math.max(nn, 1e4),
              index: ["title", "content"],
              tag: wt,
            })
            for (let zt of ot) zt.result = zt.result.slice(0, nn)
            ;(ee = "basic"), (Nt = vt)
          } else ot = await Te.searchAsync({ query: Nt, limit: nn, index: ["tags"] })
        } else
          ee === "basic" &&
            (ot = await Te.searchAsync({ query: Nt, limit: nn, index: ["title", "content"] }))
        let lt = (_t) => {
            let wt = ot.filter((vt) => vt.field === _t)
            return wt.length === 0 ? [] : [...wt[0].result]
          },
          At = [...new Set([...lt("title"), ...lt("content"), ...lt("tags")])].map((_t) =>
            r(Nt, _t),
          )
        await F(At)
      }
      document.addEventListener("keydown", $t),
        window.addCleanup(() => document.removeEventListener("keydown", $t)),
        L?.addEventListener("click", () => gt("basic")),
        window.addCleanup(() => L?.removeEventListener("click", () => gt("basic"))),
        q?.addEventListener("input", it),
        window.addCleanup(() => q?.removeEventListener("input", it)),
        Hn(x, R),
        await I(p)
    })
    async function I(a) {
      let f = 0,
        p = []
      for (let [x, _] of Object.entries(a))
        p.push(
          Te.addAsync(f++, { id: f, slug: x, title: _.title, content: _.content, tags: _.tags }),
        )
      return await Promise.all(p)
    }
  })(),
  (function () {
    var De = Object.create,
      fe = Object.defineProperty,
      le = Object.getOwnPropertyDescriptor,
      de = Object.getOwnPropertyNames,
      Be = Object.getPrototypeOf,
      Qt = Object.prototype.hasOwnProperty,
      $e = (e, u) => () => (u || e((u = { exports: {} }).exports, u), u.exports),
      Ue = (e, u, s, g) => {
        if ((u && typeof u == "object") || typeof u == "function")
          for (let y of de(u))
            !Qt.call(e, y) &&
              y !== s &&
              fe(e, y, { get: () => u[y], enumerable: !(g = le(u, y)) || g.enumerable })
        return e
      },
      Jt = (e, u, s) => (
        (s = e != null ? De(Be(e)) : {}),
        Ue(u || !e || !e.__esModule ? fe(s, "default", { value: e, enumerable: !0 }) : s, e)
      ),
      an = $e((e, u) => {
        "use strict"
        u.exports = g
        function s(E) {
          return E instanceof Buffer
            ? Buffer.from(E)
            : new E.constructor(E.buffer.slice(), E.byteOffset, E.length)
        }
        function g(E) {
          if (((E = E || {}), E.circles)) return y(E)
          let D = new Map()
          if (
            (D.set(Date, (l) => new Date(l)),
            D.set(Map, (l, h) => new Map(n(Array.from(l), h))),
            D.set(Set, (l, h) => new Set(n(Array.from(l), h))),
            E.constructorHandlers)
          )
            for (let l of E.constructorHandlers) D.set(l[0], l[1])
          let t = null
          return E.proto ? o : i
          function n(l, h) {
            let c = Object.keys(l),
              m = new Array(c.length)
            for (let b = 0; b < c.length; b++) {
              let w = c[b],
                A = l[w]
              typeof A != "object" || A === null
                ? (m[w] = A)
                : A.constructor !== Object && (t = D.get(A.constructor))
                  ? (m[w] = t(A, h))
                  : ArrayBuffer.isView(A)
                    ? (m[w] = s(A))
                    : (m[w] = h(A))
            }
            return m
          }
          function i(l) {
            if (typeof l != "object" || l === null) return l
            if (Array.isArray(l)) return n(l, i)
            if (l.constructor !== Object && (t = D.get(l.constructor))) return t(l, i)
            let h = {}
            for (let c in l) {
              if (Object.hasOwnProperty.call(l, c) === !1) continue
              let m = l[c]
              typeof m != "object" || m === null
                ? (h[c] = m)
                : m.constructor !== Object && (t = D.get(m.constructor))
                  ? (h[c] = t(m, i))
                  : ArrayBuffer.isView(m)
                    ? (h[c] = s(m))
                    : (h[c] = i(m))
            }
            return h
          }
          function o(l) {
            if (typeof l != "object" || l === null) return l
            if (Array.isArray(l)) return n(l, o)
            if (l.constructor !== Object && (t = D.get(l.constructor))) return t(l, o)
            let h = {}
            for (let c in l) {
              let m = l[c]
              typeof m != "object" || m === null
                ? (h[c] = m)
                : m.constructor !== Object && (t = D.get(m.constructor))
                  ? (h[c] = t(m, o))
                  : ArrayBuffer.isView(m)
                    ? (h[c] = s(m))
                    : (h[c] = o(m))
            }
            return h
          }
        }
        function y(E) {
          let D = [],
            t = [],
            n = new Map()
          if (
            (n.set(Date, (c) => new Date(c)),
            n.set(Map, (c, m) => new Map(o(Array.from(c), m))),
            n.set(Set, (c, m) => new Set(o(Array.from(c), m))),
            E.constructorHandlers)
          )
            for (let c of E.constructorHandlers) n.set(c[0], c[1])
          let i = null
          return E.proto ? h : l
          function o(c, m) {
            let b = Object.keys(c),
              w = new Array(b.length)
            for (let A = 0; A < b.length; A++) {
              let O = b[A],
                S = c[O]
              if (typeof S != "object" || S === null) w[O] = S
              else if (S.constructor !== Object && (i = n.get(S.constructor))) w[O] = i(S, m)
              else if (ArrayBuffer.isView(S)) w[O] = s(S)
              else {
                let C = D.indexOf(S)
                C !== -1 ? (w[O] = t[C]) : (w[O] = m(S))
              }
            }
            return w
          }
          function l(c) {
            if (typeof c != "object" || c === null) return c
            if (Array.isArray(c)) return o(c, l)
            if (c.constructor !== Object && (i = n.get(c.constructor))) return i(c, l)
            let m = {}
            D.push(c), t.push(m)
            for (let b in c) {
              if (Object.hasOwnProperty.call(c, b) === !1) continue
              let w = c[b]
              if (typeof w != "object" || w === null) m[b] = w
              else if (w.constructor !== Object && (i = n.get(w.constructor))) m[b] = i(w, l)
              else if (ArrayBuffer.isView(w)) m[b] = s(w)
              else {
                let A = D.indexOf(w)
                A !== -1 ? (m[b] = t[A]) : (m[b] = l(w))
              }
            }
            return D.pop(), t.pop(), m
          }
          function h(c) {
            if (typeof c != "object" || c === null) return c
            if (Array.isArray(c)) return o(c, h)
            if (c.constructor !== Object && (i = n.get(c.constructor))) return i(c, h)
            let m = {}
            D.push(c), t.push(m)
            for (let b in c) {
              let w = c[b]
              if (typeof w != "object" || w === null) m[b] = w
              else if (w.constructor !== Object && (i = n.get(w.constructor))) m[b] = i(w, h)
              else if (ArrayBuffer.isView(w)) m[b] = s(w)
              else {
                let A = D.indexOf(w)
                A !== -1 ? (m[b] = t[A]) : (m[b] = h(w))
              }
            }
            return D.pop(), t.pop(), m
          }
        }
      }),
      pe = { value: () => {} }
    function Ut() {
      for (var e = 0, u = arguments.length, s = {}, g; e < u; ++e) {
        if (!(g = arguments[e] + "") || g in s || /[\s.]/.test(g))
          throw new Error("illegal type: " + g)
        s[g] = []
      }
      return new Ne(s)
    }
    function Ne(e) {
      this._ = e
    }
    function Le(e, u) {
      return e
        .trim()
        .split(/^|\s+/)
        .map(function (s) {
          var g = "",
            y = s.indexOf(".")
          if ((y >= 0 && ((g = s.slice(y + 1)), (s = s.slice(0, y))), s && !u.hasOwnProperty(s)))
            throw new Error("unknown type: " + s)
          return { type: s, name: g }
        })
    }
    Ne.prototype = Ut.prototype = {
      constructor: Ne,
      on: function (e, u) {
        var s = this._,
          g = Le(e + "", s),
          y,
          E = -1,
          D = g.length
        if (arguments.length < 2) {
          for (; ++E < D; ) if ((y = (e = g[E]).type) && (y = Kt(s[y], e.name))) return y
          return
        }
        if (u != null && typeof u != "function") throw new Error("invalid callback: " + u)
        for (; ++E < D; )
          if ((y = (e = g[E]).type)) s[y] = yn(s[y], e.name, u)
          else if (u == null) for (y in s) s[y] = yn(s[y], e.name, null)
        return this
      },
      copy: function () {
        var e = {},
          u = this._
        for (var s in u) e[s] = u[s].slice()
        return new Ne(e)
      },
      call: function (e, u) {
        if ((y = arguments.length - 2) > 0)
          for (var s = new Array(y), g = 0, y, E; g < y; ++g) s[g] = arguments[g + 2]
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e)
        for (E = this._[e], g = 0, y = E.length; g < y; ++g) E[g].value.apply(u, s)
      },
      apply: function (e, u, s) {
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e)
        for (var g = this._[e], y = 0, E = g.length; y < E; ++y) g[y].value.apply(u, s)
      },
    }
    function Kt(e, u) {
      for (var s = 0, g = e.length, y; s < g; ++s) if ((y = e[s]).name === u) return y.value
    }
    function yn(e, u, s) {
      for (var g = 0, y = e.length; g < y; ++g)
        if (e[g].name === u) {
          ;(e[g] = pe), (e = e.slice(0, g).concat(e.slice(g + 1)))
          break
        }
      return s != null && e.push({ name: u, value: s }), e
    }
    var _e = Ut,
      ve = "http://www.w3.org/1999/xhtml",
      ne = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: ve,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      }
    function Je(e) {
      var u = (e += ""),
        s = u.indexOf(":")
      return (
        s >= 0 && (u = e.slice(0, s)) !== "xmlns" && (e = e.slice(s + 1)),
        ne.hasOwnProperty(u) ? { space: ne[u], local: e } : e
      )
    }
    function vn(e) {
      return function () {
        var u = this.ownerDocument,
          s = this.namespaceURI
        return s === ve && u.documentElement.namespaceURI === ve
          ? u.createElement(e)
          : u.createElementNS(s, e)
      }
    }
    function Qe(e) {
      return function () {
        return this.ownerDocument.createElementNS(e.space, e.local)
      }
    }
    function Xe(e) {
      var u = Je(e)
      return (u.local ? Qe : vn)(u)
    }
    function qe() {}
    function me(e) {
      return e == null
        ? qe
        : function () {
            return this.querySelector(e)
          }
    }
    function fn(e) {
      typeof e != "function" && (e = me(e))
      for (var u = this._groups, s = u.length, g = new Array(s), y = 0; y < s; ++y)
        for (var E = u[y], D = E.length, t = (g[y] = new Array(D)), n, i, o = 0; o < D; ++o)
          (n = E[o]) &&
            (i = e.call(n, n.__data__, o, E)) &&
            ("__data__" in n && (i.__data__ = n.__data__), (t[o] = i))
      return new j(g, this._parents)
    }
    function we(e) {
      return e == null ? [] : Array.isArray(e) ? e : Array.from(e)
    }
    function dn() {
      return []
    }
    function Ze(e) {
      return e == null
        ? dn
        : function () {
            return this.querySelectorAll(e)
          }
    }
    function te(e) {
      return function () {
        return we(e.apply(this, arguments))
      }
    }
    function Dn(e) {
      typeof e == "function" ? (e = te(e)) : (e = Ze(e))
      for (var u = this._groups, s = u.length, g = [], y = [], E = 0; E < s; ++E)
        for (var D = u[E], t = D.length, n, i = 0; i < t; ++i)
          (n = D[i]) && (g.push(e.call(n, n.__data__, i, D)), y.push(n))
      return new j(g, y)
    }
    function ke(e) {
      return function () {
        return this.matches(e)
      }
    }
    function be(e) {
      return function (u) {
        return u.matches(e)
      }
    }
    var tn = Array.prototype.find
    function Ye(e) {
      return function () {
        return tn.call(this.children, e)
      }
    }
    function wn() {
      return this.firstElementChild
    }
    function xn(e) {
      return this.select(e == null ? wn : Ye(typeof e == "function" ? e : be(e)))
    }
    var un = Array.prototype.filter
    function Se() {
      return Array.from(this.children)
    }
    function xe(e) {
      return function () {
        return un.call(this.children, e)
      }
    }
    function We(e) {
      return this.selectAll(e == null ? Se : xe(typeof e == "function" ? e : be(e)))
    }
    function He(e) {
      typeof e != "function" && (e = ke(e))
      for (var u = this._groups, s = u.length, g = new Array(s), y = 0; y < s; ++y)
        for (var E = u[y], D = E.length, t = (g[y] = []), n, i = 0; i < D; ++i)
          (n = E[i]) && e.call(n, n.__data__, i, E) && t.push(n)
      return new j(g, this._parents)
    }
    function rt(e) {
      return new Array(e.length)
    }
    function mt() {
      return new j(this._enter || this._groups.map(rt), this._parents)
    }
    function Ct(e, u) {
      ;(this.ownerDocument = e.ownerDocument),
        (this.namespaceURI = e.namespaceURI),
        (this._next = null),
        (this._parent = e),
        (this.__data__ = u)
    }
    Ct.prototype = {
      constructor: Ct,
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
    function Tt(e) {
      return function () {
        return e
      }
    }
    function Pt(e, u, s, g, y, E) {
      for (var D = 0, t, n = u.length, i = E.length; D < i; ++D)
        (t = u[D]) ? ((t.__data__ = E[D]), (g[D] = t)) : (s[D] = new Ct(e, E[D]))
      for (; D < n; ++D) (t = u[D]) && (y[D] = t)
    }
    function Ot(e, u, s, g, y, E, D) {
      var t,
        n,
        i = new Map(),
        o = u.length,
        l = E.length,
        h = new Array(o),
        c
      for (t = 0; t < o; ++t)
        (n = u[t]) &&
          ((h[t] = c = D.call(n, n.__data__, t, u) + ""), i.has(c) ? (y[t] = n) : i.set(c, n))
      for (t = 0; t < l; ++t)
        (c = D.call(e, E[t], t, E) + ""),
          (n = i.get(c)) ? ((g[t] = n), (n.__data__ = E[t]), i.delete(c)) : (s[t] = new Ct(e, E[t]))
      for (t = 0; t < o; ++t) (n = u[t]) && i.get(h[t]) === n && (y[t] = n)
    }
    function It(e) {
      return e.__data__
    }
    function ie(e, u) {
      if (!arguments.length) return Array.from(this, It)
      var s = u ? Ot : Pt,
        g = this._parents,
        y = this._groups
      typeof e != "function" && (e = Tt(e))
      for (
        var E = y.length, D = new Array(E), t = new Array(E), n = new Array(E), i = 0;
        i < E;
        ++i
      ) {
        var o = g[i],
          l = y[i],
          h = l.length,
          c = ce(e.call(o, o && o.__data__, i, g)),
          m = c.length,
          b = (t[i] = new Array(m)),
          w = (D[i] = new Array(m)),
          A = (n[i] = new Array(h))
        s(o, l, b, w, A, c, u)
        for (var O = 0, S = 0, C, W; O < m; ++O)
          if ((C = b[O])) {
            for (O >= S && (S = O + 1); !(W = w[S]) && ++S < m; );
            C._next = W || null
          }
      }
      return (D = new j(D, g)), (D._enter = t), (D._exit = n), D
    }
    function ce(e) {
      return typeof e == "object" && "length" in e ? e : Array.from(e)
    }
    function Ce() {
      return new j(this._exit || this._groups.map(rt), this._parents)
    }
    function Pe(e, u, s) {
      var g = this.enter(),
        y = this,
        E = this.exit()
      return (
        typeof e == "function" ? ((g = e(g)), g && (g = g.selection())) : (g = g.append(e + "")),
        u != null && ((y = u(y)), y && (y = y.selection())),
        s == null ? E.remove() : s(E),
        g && y ? g.merge(y).order() : y
      )
    }
    function Rt(e) {
      for (
        var u = e.selection ? e.selection() : e,
          s = this._groups,
          g = u._groups,
          y = s.length,
          E = g.length,
          D = Math.min(y, E),
          t = new Array(y),
          n = 0;
        n < D;
        ++n
      )
        for (var i = s[n], o = g[n], l = i.length, h = (t[n] = new Array(l)), c, m = 0; m < l; ++m)
          (c = i[m] || o[m]) && (h[m] = c)
      for (; n < y; ++n) t[n] = s[n]
      return new j(t, this._parents)
    }
    function ue() {
      for (var e = this._groups, u = -1, s = e.length; ++u < s; )
        for (var g = e[u], y = g.length - 1, E = g[y], D; --y >= 0; )
          (D = g[y]) &&
            (E && D.compareDocumentPosition(E) ^ 4 && E.parentNode.insertBefore(D, E), (E = D))
      return this
    }
    function Ft(e) {
      e || (e = qt)
      function u(l, h) {
        return l && h ? e(l.__data__, h.__data__) : !l - !h
      }
      for (var s = this._groups, g = s.length, y = new Array(g), E = 0; E < g; ++E) {
        for (var D = s[E], t = D.length, n = (y[E] = new Array(t)), i, o = 0; o < t; ++o)
          (i = D[o]) && (n[o] = i)
        n.sort(u)
      }
      return new j(y, this._parents).order()
    }
    function qt(e, u) {
      return e < u ? -1 : e > u ? 1 : e >= u ? 0 : NaN
    }
    function he() {
      var e = arguments[0]
      return (arguments[0] = this), e.apply(null, arguments), this
    }
    function re() {
      return Array.from(this)
    }
    function Ee() {
      for (var e = this._groups, u = 0, s = e.length; u < s; ++u)
        for (var g = e[u], y = 0, E = g.length; y < E; ++y) {
          var D = g[y]
          if (D) return D
        }
      return null
    }
    function en() {
      let e = 0
      for (let u of this) ++e
      return e
    }
    function Ve() {
      return !this.node()
    }
    function Ie(e) {
      for (var u = this._groups, s = 0, g = u.length; s < g; ++s)
        for (var y = u[s], E = 0, D = y.length, t; E < D; ++E)
          (t = y[E]) && e.call(t, t.__data__, E, y)
      return this
    }
    function bn(e) {
      return function () {
        this.removeAttribute(e)
      }
    }
    function jn(e) {
      return function () {
        this.removeAttributeNS(e.space, e.local)
      }
    }
    function kn(e, u) {
      return function () {
        this.setAttribute(e, u)
      }
    }
    function sn(e, u) {
      return function () {
        this.setAttributeNS(e.space, e.local, u)
      }
    }
    function Fn(e, u) {
      return function () {
        var s = u.apply(this, arguments)
        s == null ? this.removeAttribute(e) : this.setAttribute(e, s)
      }
    }
    function Nn(e, u) {
      return function () {
        var s = u.apply(this, arguments)
        s == null
          ? this.removeAttributeNS(e.space, e.local)
          : this.setAttributeNS(e.space, e.local, s)
      }
    }
    function Bn(e, u) {
      var s = Je(e)
      if (arguments.length < 2) {
        var g = this.node()
        return s.local ? g.getAttributeNS(s.space, s.local) : g.getAttribute(s)
      }
      return this.each(
        (u == null
          ? s.local
            ? jn
            : bn
          : typeof u == "function"
            ? s.local
              ? Nn
              : Fn
            : s.local
              ? sn
              : kn)(s, u),
      )
    }
    function zn(e) {
      return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView
    }
    function Hn(e) {
      return function () {
        this.style.removeProperty(e)
      }
    }
    function d(e, u, s) {
      return function () {
        this.style.setProperty(e, u, s)
      }
    }
    function B(e, u, s) {
      return function () {
        var g = u.apply(this, arguments)
        g == null ? this.style.removeProperty(e) : this.style.setProperty(e, g, s)
      }
    }
    function T(e, u, s) {
      return arguments.length > 1
        ? this.each((u == null ? Hn : typeof u == "function" ? B : d)(e, u, s ?? ""))
        : $(this.node(), e)
    }
    function $(e, u) {
      return e.style.getPropertyValue(u) || zn(e).getComputedStyle(e, null).getPropertyValue(u)
    }
    function P(e) {
      return function () {
        delete this[e]
      }
    }
    function tt(e, u) {
      return function () {
        this[e] = u
      }
    }
    function ct(e, u) {
      return function () {
        var s = u.apply(this, arguments)
        s == null ? delete this[e] : (this[e] = s)
      }
    }
    function st(e, u) {
      return arguments.length > 1
        ? this.each((u == null ? P : typeof u == "function" ? ct : tt)(e, u))
        : this.node()[e]
    }
    function xt(e) {
      return e.trim().split(/^|\s+/)
    }
    function Vt(e) {
      return e.classList || new Gt(e)
    }
    function Gt(e) {
      ;(this._node = e), (this._names = xt(e.getAttribute("class") || ""))
    }
    Gt.prototype = {
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
    function ye(e, u) {
      for (var s = Vt(e), g = -1, y = u.length; ++g < y; ) s.add(u[g])
    }
    function oe(e, u) {
      for (var s = Vt(e), g = -1, y = u.length; ++g < y; ) s.remove(u[g])
    }
    function ee(e) {
      return function () {
        ye(this, e)
      }
    }
    function Nt(e) {
      return function () {
        oe(this, e)
      }
    }
    function ae(e, u) {
      return function () {
        ;(u.apply(this, arguments) ? ye : oe)(this, e)
      }
    }
    function Te(e, u) {
      var s = xt(e + "")
      if (arguments.length < 2) {
        for (var g = Vt(this.node()), y = -1, E = s.length; ++y < E; )
          if (!g.contains(s[y])) return !1
        return !0
      }
      return this.each((typeof u == "function" ? ae : u ? ee : Nt)(s, u))
    }
    function ln() {
      this.textContent = ""
    }
    function Re(e) {
      return function () {
        this.textContent = e
      }
    }
    function Oe(e) {
      return function () {
        var u = e.apply(this, arguments)
        this.textContent = u ?? ""
      }
    }
    function nn(e) {
      return arguments.length
        ? this.each(e == null ? ln : (typeof e == "function" ? Oe : Re)(e))
        : this.node().textContent
    }
    function Ln() {
      this.innerHTML = ""
    }
    function cn(e) {
      return function () {
        this.innerHTML = e
      }
    }
    function En(e) {
      return function () {
        var u = e.apply(this, arguments)
        this.innerHTML = u ?? ""
      }
    }
    function N(e) {
      return arguments.length
        ? this.each(e == null ? Ln : (typeof e == "function" ? En : cn)(e))
        : this.node().innerHTML
    }
    function I() {
      this.nextSibling && this.parentNode.appendChild(this)
    }
    function a() {
      return this.each(I)
    }
    function f() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function p() {
      return this.each(f)
    }
    function x(e) {
      var u = typeof e == "function" ? e : Xe(e)
      return this.select(function () {
        return this.appendChild(u.apply(this, arguments))
      })
    }
    function _() {
      return null
    }
    function L(e, u) {
      var s = typeof e == "function" ? e : Xe(e),
        g = u == null ? _ : typeof u == "function" ? u : me(u)
      return this.select(function () {
        return this.insertBefore(s.apply(this, arguments), g.apply(this, arguments) || null)
      })
    }
    function q() {
      var e = this.parentNode
      e && e.removeChild(this)
    }
    function z() {
      return this.each(q)
    }
    function nt() {
      var e = this.cloneNode(!1),
        u = this.parentNode
      return u ? u.insertBefore(e, this.nextSibling) : e
    }
    function J() {
      var e = this.cloneNode(!0),
        u = this.parentNode
      return u ? u.insertBefore(e, this.nextSibling) : e
    }
    function ht(e) {
      return this.select(e ? J : nt)
    }
    function U(e) {
      return arguments.length ? this.property("__data__", e) : this.node().__data__
    }
    function Z(e) {
      return function (u) {
        e.call(this, u, this.__data__)
      }
    }
    function Q(e) {
      return e
        .trim()
        .split(/^|\s+/)
        .map(function (u) {
          var s = "",
            g = u.indexOf(".")
          return g >= 0 && ((s = u.slice(g + 1)), (u = u.slice(0, g))), { type: u, name: s }
        })
    }
    function R(e) {
      return function () {
        var u = this.__on
        if (u) {
          for (var s = 0, g = -1, y = u.length, E; s < y; ++s)
            (E = u[s]),
              (!e.type || E.type === e.type) && E.name === e.name
                ? this.removeEventListener(E.type, E.listener, E.options)
                : (u[++g] = E)
          ++g ? (u.length = g) : delete this.__on
        }
      }
    }
    function gt(e, u, s) {
      return function () {
        var g = this.__on,
          y,
          E = Z(u)
        if (g) {
          for (var D = 0, t = g.length; D < t; ++D)
            if ((y = g[D]).type === e.type && y.name === e.name) {
              this.removeEventListener(y.type, y.listener, y.options),
                this.addEventListener(y.type, (y.listener = E), (y.options = s)),
                (y.value = u)
              return
            }
        }
        this.addEventListener(e.type, E, s),
          (y = { type: e.type, name: e.name, value: u, listener: E, options: s }),
          g ? g.push(y) : (this.__on = [y])
      }
    }
    function kt(e, u, s) {
      var g = Q(e + ""),
        y,
        E = g.length,
        D
      if (arguments.length < 2) {
        var t = this.node().__on
        if (t) {
          for (var n = 0, i = t.length, o; n < i; ++n)
            for (y = 0, o = t[n]; y < E; ++y)
              if ((D = g[y]).type === o.type && D.name === o.name) return o.value
        }
        return
      }
      for (t = u ? gt : R, y = 0; y < E; ++y) this.each(t(g[y], u, s))
      return this
    }
    function $t(e, u, s) {
      var g = zn(e),
        y = g.CustomEvent
      typeof y == "function"
        ? (y = new y(u, s))
        : ((y = g.document.createEvent("Event")),
          s
            ? (y.initEvent(u, s.bubbles, s.cancelable), (y.detail = s.detail))
            : y.initEvent(u, !1, !1)),
        e.dispatchEvent(y)
    }
    function r(e, u) {
      return function () {
        return $t(this, e, u)
      }
    }
    function v(e, u) {
      return function () {
        return $t(this, e, u.apply(this, arguments))
      }
    }
    function k(e, u) {
      return this.each((typeof u == "function" ? v : r)(e, u))
    }
    function* M() {
      for (var e = this._groups, u = 0, s = e.length; u < s; ++u)
        for (var g = e[u], y = 0, E = g.length, D; y < E; ++y) (D = g[y]) && (yield D)
    }
    var F = [null]
    function j(e, u) {
      ;(this._groups = e), (this._parents = u)
    }
    function et() {
      return new j([[document.documentElement]], F)
    }
    function it() {
      return this
    }
    j.prototype = et.prototype = {
      constructor: j,
      select: fn,
      selectAll: Dn,
      selectChild: xn,
      selectChildren: We,
      filter: He,
      data: ie,
      enter: mt,
      exit: Ce,
      join: Pe,
      merge: Rt,
      selection: it,
      order: ue,
      sort: Ft,
      call: he,
      nodes: re,
      node: Ee,
      size: en,
      empty: Ve,
      each: Ie,
      attr: Bn,
      style: T,
      property: st,
      classed: Te,
      text: nn,
      html: N,
      raise: a,
      lower: p,
      append: x,
      insert: L,
      remove: z,
      clone: ht,
      datum: U,
      on: kt,
      dispatch: k,
      [Symbol.iterator]: M,
    }
    var Y = et
    function ot(e) {
      return typeof e == "string"
        ? new j([[document.querySelector(e)]], [document.documentElement])
        : new j([[e]], F)
    }
    function lt(e) {
      let u
      for (; (u = e.sourceEvent); ) e = u
      return e
    }
    function At(e, u) {
      if (((e = lt(e)), u === void 0 && (u = e.currentTarget), u)) {
        var s = u.ownerSVGElement || u
        if (s.createSVGPoint) {
          var g = s.createSVGPoint()
          return (
            (g.x = e.clientX),
            (g.y = e.clientY),
            (g = g.matrixTransform(u.getScreenCTM().inverse())),
            [g.x, g.y]
          )
        }
        if (u.getBoundingClientRect) {
          var y = u.getBoundingClientRect()
          return [e.clientX - y.left - u.clientLeft, e.clientY - y.top - u.clientTop]
        }
      }
      return [e.pageX, e.pageY]
    }
    function _t(e) {
      return typeof e == "string"
        ? new j([document.querySelectorAll(e)], [document.documentElement])
        : new j([we(e)], F)
    }
    var wt = { passive: !1 },
      vt = { capture: !0, passive: !1 }
    function zt(e) {
      e.stopImmediatePropagation()
    }
    function Xt(e) {
      e.preventDefault(), e.stopImmediatePropagation()
    }
    function je(e) {
      var u = e.document.documentElement,
        s = ot(e).on("dragstart.drag", Xt, vt)
      "onselectstart" in u
        ? s.on("selectstart.drag", Xt, vt)
        : ((u.__noselect = u.style.MozUserSelect), (u.style.MozUserSelect = "none"))
    }
    function ze(e, u) {
      var s = e.document.documentElement,
        g = ot(e).on("dragstart.drag", null)
      u &&
        (g.on("click.drag", Xt, vt),
        setTimeout(function () {
          g.on("click.drag", null)
        }, 0)),
        "onselectstart" in s
          ? g.on("selectstart.drag", null)
          : ((s.style.MozUserSelect = s.__noselect), delete s.__noselect)
    }
    var Fe = (e) => () => e
    function An(
      e,
      {
        sourceEvent: u,
        subject: s,
        target: g,
        identifier: y,
        active: E,
        x: D,
        y: t,
        dx: n,
        dy: i,
        dispatch: o,
      },
    ) {
      Object.defineProperties(this, {
        type: { value: e, enumerable: !0, configurable: !0 },
        sourceEvent: { value: u, enumerable: !0, configurable: !0 },
        subject: { value: s, enumerable: !0, configurable: !0 },
        target: { value: g, enumerable: !0, configurable: !0 },
        identifier: { value: y, enumerable: !0, configurable: !0 },
        active: { value: E, enumerable: !0, configurable: !0 },
        x: { value: D, enumerable: !0, configurable: !0 },
        y: { value: t, enumerable: !0, configurable: !0 },
        dx: { value: n, enumerable: !0, configurable: !0 },
        dy: { value: i, enumerable: !0, configurable: !0 },
        _: { value: o },
      })
    }
    An.prototype.on = function () {
      var e = this._.on.apply(this._, arguments)
      return e === this._ ? this : e
    }
    function qn(e) {
      return !e.ctrlKey && !e.button
    }
    function _r() {
      return this.parentNode
    }
    function rr(e, u) {
      return u ?? { x: e.x, y: e.y }
    }
    function Rr() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function hi() {
      var e = qn,
        u = _r,
        s = rr,
        g = Rr,
        y = {},
        E = _e("start", "drag", "end"),
        D = 0,
        t,
        n,
        i,
        o,
        l = 0
      function h(C) {
        C.on("mousedown.drag", c)
          .filter(g)
          .on("touchstart.drag", w)
          .on("touchmove.drag", A, wt)
          .on("touchend.drag touchcancel.drag", O)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      function c(C, W) {
        if (!(o || !e.call(this, C, W))) {
          var X = S(this, u.call(this, C, W), C, W, "mouse")
          X &&
            (ot(C.view).on("mousemove.drag", m, vt).on("mouseup.drag", b, vt),
            je(C.view),
            zt(C),
            (i = !1),
            (t = C.clientX),
            (n = C.clientY),
            X("start", C))
        }
      }
      function m(C) {
        if ((Xt(C), !i)) {
          var W = C.clientX - t,
            X = C.clientY - n
          i = W * W + X * X > l
        }
        y.mouse("drag", C)
      }
      function b(C) {
        ot(C.view).on("mousemove.drag mouseup.drag", null), ze(C.view, i), Xt(C), y.mouse("end", C)
      }
      function w(C, W) {
        if (e.call(this, C, W)) {
          var X = C.changedTouches,
            H = u.call(this, C, W),
            G = X.length,
            yt,
            Bt
          for (yt = 0; yt < G; ++yt)
            (Bt = S(this, H, C, W, X[yt].identifier, X[yt])) && (zt(C), Bt("start", C, X[yt]))
        }
      }
      function A(C) {
        var W = C.changedTouches,
          X = W.length,
          H,
          G
        for (H = 0; H < X; ++H) (G = y[W[H].identifier]) && (Xt(C), G("drag", C, W[H]))
      }
      function O(C) {
        var W = C.changedTouches,
          X = W.length,
          H,
          G
        for (
          o && clearTimeout(o),
            o = setTimeout(function () {
              o = null
            }, 500),
            H = 0;
          H < X;
          ++H
        )
          (G = y[W[H].identifier]) && (zt(C), G("end", C, W[H]))
      }
      function S(C, W, X, H, G, yt) {
        var Bt = E.copy(),
          ut = At(yt || X, W),
          St,
          Yt,
          K
        if (
          (K = s.call(
            C,
            new An("beforestart", {
              sourceEvent: X,
              target: h,
              identifier: G,
              active: D,
              x: ut[0],
              y: ut[1],
              dx: 0,
              dy: 0,
              dispatch: Bt,
            }),
            H,
          )) != null
        )
          return (
            (St = K.x - ut[0] || 0),
            (Yt = K.y - ut[1] || 0),
            function Dt(dt, Mt, Ht) {
              var Zt = ut,
                pt
              switch (dt) {
                case "start":
                  ;(y[G] = Dt), (pt = D++)
                  break
                case "end":
                  delete y[G], --D
                case "drag":
                  ;(ut = At(Ht || Mt, W)), (pt = D)
                  break
              }
              Bt.call(
                dt,
                C,
                new An(dt, {
                  sourceEvent: Mt,
                  subject: K,
                  target: h,
                  identifier: G,
                  active: pt,
                  x: ut[0] + St,
                  y: ut[1] + Yt,
                  dx: ut[0] - Zt[0],
                  dy: ut[1] - Zt[1],
                  dispatch: Bt,
                }),
                H,
              )
            }
          )
      }
      return (
        (h.filter = function (C) {
          return arguments.length ? ((e = typeof C == "function" ? C : Fe(!!C)), h) : e
        }),
        (h.container = function (C) {
          return arguments.length ? ((u = typeof C == "function" ? C : Fe(C)), h) : u
        }),
        (h.subject = function (C) {
          return arguments.length ? ((s = typeof C == "function" ? C : Fe(C)), h) : s
        }),
        (h.touchable = function (C) {
          return arguments.length ? ((g = typeof C == "function" ? C : Fe(!!C)), h) : g
        }),
        (h.on = function () {
          var C = E.on.apply(E, arguments)
          return C === E ? h : C
        }),
        (h.clickDistance = function (C) {
          return arguments.length ? ((l = (C = +C) * C), h) : Math.sqrt(l)
        }),
        h
      )
    }
    function fi(e, u, s) {
      ;(e.prototype = u.prototype = s), (s.constructor = e)
    }
    function Mi(e, u) {
      var s = Object.create(e.prototype)
      for (var g in u) s[g] = u[g]
      return s
    }
    function kr() {}
    var Ar = 0.7,
      Hr = 1 / Ar,
      Gn = "\\s*([+-]?\\d+)\\s*",
      hr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      _n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Cr = /^#([0-9a-f]{3,8})$/,
      Vr = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`),
      fr = new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`),
      Dr = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${hr}\\)$`),
      Pn = new RegExp(`^rgba\\(${_n},${_n},${_n},${hr}\\)$`),
      fu = new RegExp(`^hsl\\(${hr},${_n},${_n}\\)$`),
      du = new RegExp(`^hsla\\(${hr},${_n},${_n},${hr}\\)$`),
      Fi = {
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
    fi(kr, dr, {
      copy(e) {
        return Object.assign(new this.constructor(), this, e)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: Ni,
      formatHex: Ni,
      formatHex8: gu,
      formatHsl: pu,
      formatRgb: Li,
      toString: Li,
    })
    function Ni() {
      return this.rgb().formatHex()
    }
    function gu() {
      return this.rgb().formatHex8()
    }
    function pu() {
      return pi(this).formatHsl()
    }
    function Li() {
      return this.rgb().formatRgb()
    }
    function dr(e) {
      var u, s
      return (
        (e = (e + "").trim().toLowerCase()),
        (u = Cr.exec(e))
          ? ((s = u[1].length),
            (u = parseInt(u[1], 16)),
            s === 6
              ? di(u)
              : s === 3
                ? new rn(
                    ((u >> 8) & 15) | ((u >> 4) & 240),
                    ((u >> 4) & 15) | (u & 240),
                    ((u & 15) << 4) | (u & 15),
                    1,
                  )
                : s === 8
                  ? Ur((u >> 24) & 255, (u >> 16) & 255, (u >> 8) & 255, (u & 255) / 255)
                  : s === 4
                    ? Ur(
                        ((u >> 12) & 15) | ((u >> 8) & 240),
                        ((u >> 8) & 15) | ((u >> 4) & 240),
                        ((u >> 4) & 15) | (u & 240),
                        (((u & 15) << 4) | (u & 15)) / 255,
                      )
                    : null)
          : (u = Vr.exec(e))
            ? new rn(u[1], u[2], u[3], 1)
            : (u = fr.exec(e))
              ? new rn((u[1] * 255) / 100, (u[2] * 255) / 100, (u[3] * 255) / 100, 1)
              : (u = Dr.exec(e))
                ? Ur(u[1], u[2], u[3], u[4])
                : (u = Pn.exec(e))
                  ? Ur((u[1] * 255) / 100, (u[2] * 255) / 100, (u[3] * 255) / 100, u[4])
                  : (u = fu.exec(e))
                    ? Oi(u[1], u[2] / 100, u[3] / 100, 1)
                    : (u = du.exec(e))
                      ? Oi(u[1], u[2] / 100, u[3] / 100, u[4])
                      : Fi.hasOwnProperty(e)
                        ? di(Fi[e])
                        : e === "transparent"
                          ? new rn(NaN, NaN, NaN, 0)
                          : null
      )
    }
    function di(e) {
      return new rn((e >> 16) & 255, (e >> 8) & 255, e & 255, 1)
    }
    function Ur(e, u, s, g) {
      return g <= 0 && (e = u = s = NaN), new rn(e, u, s, g)
    }
    function mu(e) {
      return (
        e instanceof kr || (e = dr(e)),
        e ? ((e = e.rgb()), new rn(e.r, e.g, e.b, e.opacity)) : new rn()
      )
    }
    function Br(e, u, s, g) {
      return arguments.length === 1 ? mu(e) : new rn(e, u, s, g ?? 1)
    }
    function rn(e, u, s, g) {
      ;(this.r = +e), (this.g = +u), (this.b = +s), (this.opacity = +g)
    }
    fi(
      rn,
      Br,
      Mi(kr, {
        brighter(e) {
          return (
            (e = e == null ? Hr : Math.pow(Hr, e)),
            new rn(this.r * e, this.g * e, this.b * e, this.opacity)
          )
        },
        darker(e) {
          return (
            (e = e == null ? Ar : Math.pow(Ar, e)),
            new rn(this.r * e, this.g * e, this.b * e, this.opacity)
          )
        },
        rgb() {
          return this
        },
        clamp() {
          return new rn(Ke(this.r), Ke(this.g), Ke(this.b), ir(this.opacity))
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
        hex: gi,
        formatHex: gi,
        formatHex8: Wr,
        formatRgb: Ti,
        toString: Ti,
      }),
    )
    function gi() {
      return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}`
    }
    function Wr() {
      return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}${Jn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
    }
    function Ti() {
      let e = ir(this.opacity)
      return `${e === 1 ? "rgb(" : "rgba("}${Ke(this.r)}, ${Ke(this.g)}, ${Ke(this.b)}${e === 1 ? ")" : `, ${e})`}`
    }
    function ir(e) {
      return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
    }
    function Ke(e) {
      return Math.max(0, Math.min(255, Math.round(e) || 0))
    }
    function Jn(e) {
      return (e = Ke(e)), (e < 16 ? "0" : "") + e.toString(16)
    }
    function Oi(e, u, s, g) {
      return (
        g <= 0 ? (e = u = s = NaN) : s <= 0 || s >= 1 ? (e = u = NaN) : u <= 0 && (e = NaN),
        new on(e, u, s, g)
      )
    }
    function pi(e) {
      if (e instanceof on) return new on(e.h, e.s, e.l, e.opacity)
      if ((e instanceof kr || (e = dr(e)), !e)) return new on()
      if (e instanceof on) return e
      e = e.rgb()
      var u = e.r / 255,
        s = e.g / 255,
        g = e.b / 255,
        y = Math.min(u, s, g),
        E = Math.max(u, s, g),
        D = NaN,
        t = E - y,
        n = (E + y) / 2
      return (
        t
          ? (u === E
              ? (D = (s - g) / t + (s < g) * 6)
              : s === E
                ? (D = (g - u) / t + 2)
                : (D = (u - s) / t + 4),
            (t /= n < 0.5 ? E + y : 2 - E - y),
            (D *= 60))
          : (t = n > 0 && n < 1 ? 0 : D),
        new on(D, t, n, e.opacity)
      )
    }
    function Kr(e, u, s, g) {
      return arguments.length === 1 ? pi(e) : new on(e, u, s, g ?? 1)
    }
    function on(e, u, s, g) {
      ;(this.h = +e), (this.s = +u), (this.l = +s), (this.opacity = +g)
    }
    fi(
      on,
      Kr,
      Mi(kr, {
        brighter(e) {
          return (
            (e = e == null ? Hr : Math.pow(Hr, e)), new on(this.h, this.s, this.l * e, this.opacity)
          )
        },
        darker(e) {
          return (
            (e = e == null ? Ar : Math.pow(Ar, e)), new on(this.h, this.s, this.l * e, this.opacity)
          )
        },
        rgb() {
          var e = (this.h % 360) + (this.h < 0) * 360,
            u = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            s = this.l,
            g = s + (s < 0.5 ? s : 1 - s) * u,
            y = 2 * s - g
          return new rn(
            Xr(e >= 240 ? e - 240 : e + 120, y, g),
            Xr(e, y, g),
            Xr(e < 120 ? e + 240 : e - 120, y, g),
            this.opacity,
          )
        },
        clamp() {
          return new on(Qn(this.h), Mr(this.s), Mr(this.l), ir(this.opacity))
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
          let e = ir(this.opacity)
          return `${e === 1 ? "hsl(" : "hsla("}${Qn(this.h)}, ${Mr(this.s) * 100}%, ${Mr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`
        },
      }),
    )
    function Qn(e) {
      return (e = (e || 0) % 360), e < 0 ? e + 360 : e
    }
    function Mr(e) {
      return Math.max(0, Math.min(1, e || 0))
    }
    function Xr(e, u, s) {
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
    function $i(e, u, s, g, y) {
      var E = e * e,
        D = E * e
      return (
        ((1 - 3 * e + 3 * E - D) * u +
          (4 - 6 * E + 3 * D) * s +
          (1 + 3 * e + 3 * E - 3 * D) * g +
          D * y) /
        6
      )
    }
    function Tn(e) {
      var u = e.length - 1
      return function (s) {
        var g = s <= 0 ? (s = 0) : s >= 1 ? ((s = 1), u - 1) : Math.floor(s * u),
          y = e[g],
          E = e[g + 1],
          D = g > 0 ? e[g - 1] : 2 * y - E,
          t = g < u - 1 ? e[g + 2] : 2 * E - y
        return $i((s - g / u) * u, D, y, E, t)
      }
    }
    function Si(e) {
      var u = e.length
      return function (s) {
        var g = Math.floor(((s %= 1) < 0 ? ++s : s) * u),
          y = e[(g + u - 1) % u],
          E = e[g % u],
          D = e[(g + 1) % u],
          t = e[(g + 2) % u]
        return $i((s - g / u) * u, y, E, D, t)
      }
    }
    var Fr = (e) => () => e
    function mi(e, u) {
      return function (s) {
        return e + s * u
      }
    }
    function ji(e, u, s) {
      return (
        (e = Math.pow(e, s)),
        (u = Math.pow(u, s) - e),
        (s = 1 / s),
        function (g) {
          return Math.pow(e + g * u, s)
        }
      )
    }
    function yu(e) {
      return (e = +e) == 1
        ? zi
        : function (u, s) {
            return s - u ? ji(u, s, e) : Fr(isNaN(u) ? s : u)
          }
    }
    function zi(e, u) {
      var s = u - e
      return s ? mi(e, s) : Fr(isNaN(e) ? u : e)
    }
    var yi = (function e(u) {
      var s = yu(u)
      function g(y, E) {
        var D = s((y = Br(y)).r, (E = Br(E)).r),
          t = s(y.g, E.g),
          n = s(y.b, E.b),
          i = zi(y.opacity, E.opacity)
        return function (o) {
          return (y.r = D(o)), (y.g = t(o)), (y.b = n(o)), (y.opacity = i(o)), y + ""
        }
      }
      return (g.gamma = e), g
    })(1)
    function qi(e) {
      return function (u) {
        var s = u.length,
          g = new Array(s),
          y = new Array(s),
          E = new Array(s),
          D,
          t
        for (D = 0; D < s; ++D)
          (t = Br(u[D])), (g[D] = t.r || 0), (y[D] = t.g || 0), (E[D] = t.b || 0)
        return (
          (g = e(g)),
          (y = e(y)),
          (E = e(E)),
          (t.opacity = 1),
          function (n) {
            return (t.r = g(n)), (t.g = y(n)), (t.b = E(n)), t + ""
          }
        )
      }
    }
    var Qo = qi(Tn),
      Zo = qi(Si)
    function Vn(e, u) {
      return (
        (e = +e),
        (u = +u),
        function (s) {
          return e * (1 - s) + u * s
        }
      )
    }
    var Yr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Gr = new RegExp(Yr.source, "g")
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
    function Zn(e, u) {
      var s = (Yr.lastIndex = Gr.lastIndex = 0),
        g,
        y,
        E,
        D = -1,
        t = [],
        n = []
      for (e = e + "", u = u + ""; (g = Yr.exec(e)) && (y = Gr.exec(u)); )
        (E = y.index) > s && ((E = u.slice(s, E)), t[D] ? (t[D] += E) : (t[++D] = E)),
          (g = g[0]) === (y = y[0])
            ? t[D]
              ? (t[D] += y)
              : (t[++D] = y)
            : ((t[++D] = null), n.push({ i: D, x: Vn(g, y) })),
          (s = Gr.lastIndex)
      return (
        s < u.length && ((E = u.slice(s)), t[D] ? (t[D] += E) : (t[++D] = E)),
        t.length < 2
          ? n[0]
            ? ea(n[0].x)
            : ta(u)
          : ((u = n.length),
            function (i) {
              for (var o = 0, l; o < u; ++o) t[(l = n[o]).i] = l.x(i)
              return t.join("")
            })
      )
    }
    var Jr = 180 / Math.PI,
      Nr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
    function Pi(e, u, s, g, y, E) {
      var D, t, n
      return (
        (D = Math.sqrt(e * e + u * u)) && ((e /= D), (u /= D)),
        (n = e * s + u * g) && ((s -= e * n), (g -= u * n)),
        (t = Math.sqrt(s * s + g * g)) && ((s /= t), (g /= t), (n /= t)),
        e * g < u * s && ((e = -e), (u = -u), (n = -n), (D = -D)),
        {
          translateX: y,
          translateY: E,
          rotate: Math.atan2(u, e) * Jr,
          skewX: Math.atan(n) * Jr,
          scaleX: D,
          scaleY: t,
        }
      )
    }
    var Qr
    function vu(e) {
      let u = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "")
      return u.isIdentity ? Nr : Pi(u.a, u.b, u.c, u.d, u.e, u.f)
    }
    function Ii(e) {
      return e == null
        ? Nr
        : (Qr || (Qr = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          Qr.setAttribute("transform", e),
          (e = Qr.transform.baseVal.consolidate())
            ? ((e = e.matrix), Pi(e.a, e.b, e.c, e.d, e.e, e.f))
            : Nr)
    }
    function Zr(e, u, s, g) {
      function y(i) {
        return i.length ? i.pop() + " " : ""
      }
      function E(i, o, l, h, c, m) {
        if (i !== l || o !== h) {
          var b = c.push("translate(", null, u, null, s)
          m.push({ i: b - 4, x: Vn(i, l) }, { i: b - 2, x: Vn(o, h) })
        } else (l || h) && c.push("translate(" + l + u + h + s)
      }
      function D(i, o, l, h) {
        i !== o
          ? (i - o > 180 ? (o += 360) : o - i > 180 && (i += 360),
            h.push({ i: l.push(y(l) + "rotate(", null, g) - 2, x: Vn(i, o) }))
          : o && l.push(y(l) + "rotate(" + o + g)
      }
      function t(i, o, l, h) {
        i !== o
          ? h.push({ i: l.push(y(l) + "skewX(", null, g) - 2, x: Vn(i, o) })
          : o && l.push(y(l) + "skewX(" + o + g)
      }
      function n(i, o, l, h, c, m) {
        if (i !== l || o !== h) {
          var b = c.push(y(c) + "scale(", null, ",", null, ")")
          m.push({ i: b - 4, x: Vn(i, l) }, { i: b - 2, x: Vn(o, h) })
        } else (l !== 1 || h !== 1) && c.push(y(c) + "scale(" + l + "," + h + ")")
      }
      return function (i, o) {
        var l = [],
          h = []
        return (
          (i = e(i)),
          (o = e(o)),
          E(i.translateX, i.translateY, o.translateX, o.translateY, l, h),
          D(i.rotate, o.rotate, l, h),
          t(i.skewX, o.skewX, l, h),
          n(i.scaleX, i.scaleY, o.scaleX, o.scaleY, l, h),
          (i = o = null),
          function (c) {
            for (var m = -1, b = h.length, w; ++m < b; ) l[(w = h[m]).i] = w.x(c)
            return l.join("")
          }
        )
      }
    }
    var Ri = Zr(vu, "px, ", "px)", "deg)"),
      ti = Zr(Ii, ", ", ")", ")"),
      wu = 1e-12
    function Hi(e) {
      return ((e = Math.exp(e)) + 1 / e) / 2
    }
    function Vi(e) {
      return ((e = Math.exp(e)) - 1 / e) / 2
    }
    function xu(e) {
      return ((e = Math.exp(2 * e)) - 1) / (e + 1)
    }
    var bu = (function e(u, s, g) {
        function y(E, D) {
          var t = E[0],
            n = E[1],
            i = E[2],
            o = D[0],
            l = D[1],
            h = D[2],
            c = o - t,
            m = l - n,
            b = c * c + m * m,
            w,
            A
          if (b < wu)
            (A = Math.log(h / i) / u),
              (w = function (H) {
                return [t + H * c, n + H * m, i * Math.exp(u * H * A)]
              })
          else {
            var O = Math.sqrt(b),
              S = (h * h - i * i + g * b) / (2 * i * s * O),
              C = (h * h - i * i - g * b) / (2 * h * s * O),
              W = Math.log(Math.sqrt(S * S + 1) - S),
              X = Math.log(Math.sqrt(C * C + 1) - C)
            ;(A = (X - W) / u),
              (w = function (H) {
                var G = H * A,
                  yt = Hi(W),
                  Bt = (i / (s * O)) * (yt * xu(u * G + W) - Vi(W))
                return [t + Bt * c, n + Bt * m, (i * yt) / Hi(u * G + W)]
              })
          }
          return (w.duration = (A * 1e3 * u) / Math.SQRT2), w
        }
        return (
          (y.rho = function (E) {
            var D = Math.max(0.001, +E),
              t = D * D,
              n = t * t
            return e(D, t, n)
          }),
          y
        )
      })(Math.SQRT2, 2, 4),
      gr = 0,
      pr = 0,
      Lr = 0,
      Ui = 1e3,
      ei,
      In,
      tr = 0,
      On = 0,
      Tr = 0,
      er = typeof performance == "object" && performance.now ? performance : Date,
      mr =
        typeof window == "object" && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (e) {
              setTimeout(e, 17)
            }
    function yr() {
      return On || (mr(ur), (On = er.now() + Tr))
    }
    function ur() {
      On = 0
    }
    function or() {
      this._call = this._time = this._next = null
    }
    or.prototype = ar.prototype = {
      constructor: or,
      restart: function (e, u, s) {
        if (typeof e != "function") throw new TypeError("callback is not a function")
        ;(s = (s == null ? yr() : +s) + (u == null ? 0 : +u)),
          !this._next && In !== this && (In ? (In._next = this) : (ei = this), (In = this)),
          (this._call = e),
          (this._time = s),
          Or()
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), Or())
      },
    }
    function ar(e, u, s) {
      var g = new or()
      return g.restart(e, u, s), g
    }
    function Wi() {
      yr(), ++gr
      for (var e = ei, u; e; ) (u = On - e._time) >= 0 && e._call.call(void 0, u), (e = e._next)
      --gr
    }
    function ni() {
      ;(On = (tr = er.now()) + Tr), (gr = pr = 0)
      try {
        Wi()
      } finally {
        ;(gr = 0), ri(), (On = 0)
      }
    }
    function Eu() {
      var e = er.now(),
        u = e - tr
      u > Ui && ((Tr -= u), (tr = e))
    }
    function ri() {
      for (var e, u = ei, s, g = 1 / 0; u; )
        u._call
          ? (g > u._time && (g = u._time), (e = u), (u = u._next))
          : ((s = u._next), (u._next = null), (u = e ? (e._next = s) : (ei = s)))
      ;(In = e), Or(g)
    }
    function Or(e) {
      if (!gr) {
        pr && (pr = clearTimeout(pr))
        var u = e - On
        u > 24
          ? (e < 1 / 0 && (pr = setTimeout(ni, e - er.now() - Tr)), Lr && (Lr = clearInterval(Lr)))
          : (Lr || ((tr = er.now()), (Lr = setInterval(Eu, Ui))), (gr = 1), mr(ni))
      }
    }
    function Ki(e, u, s) {
      var g = new or()
      return (
        (u = u == null ? 0 : +u),
        g.restart(
          (y) => {
            g.stop(), e(y + u)
          },
          u,
          s,
        ),
        g
      )
    }
    var Xi = _e("start", "end", "cancel", "interrupt"),
      _u = [],
      Yi = 0,
      ii = 1,
      ui = 2,
      oi = 3,
      Gi = 4,
      ai = 5,
      $r = 6
    function vr(e, u, s, g, y, E) {
      var D = e.__transition
      if (!D) e.__transition = {}
      else if (s in D) return
      si(e, s, {
        name: u,
        index: g,
        group: y,
        on: Xi,
        tween: _u,
        time: E.time,
        delay: E.delay,
        duration: E.duration,
        ease: E.ease,
        timer: null,
        state: Yi,
      })
    }
    function wr(e, u) {
      var s = Cn(e, u)
      if (s.state > Yi) throw new Error("too late; already scheduled")
      return s
    }
    function $n(e, u) {
      var s = Cn(e, u)
      if (s.state > oi) throw new Error("too late; already running")
      return s
    }
    function Cn(e, u) {
      var s = e.__transition
      if (!s || !(s = s[u])) throw new Error("transition not found")
      return s
    }
    function si(e, u, s) {
      var g = e.__transition,
        y
      ;(g[u] = s), (s.timer = ar(E, 0, s.time))
      function E(i) {
        ;(s.state = ii), s.timer.restart(D, s.delay, s.time), s.delay <= i && D(i - s.delay)
      }
      function D(i) {
        var o, l, h, c
        if (s.state !== ii) return n()
        for (o in g)
          if (((c = g[o]), c.name === s.name)) {
            if (c.state === oi) return Ki(D)
            c.state === Gi
              ? ((c.state = $r),
                c.timer.stop(),
                c.on.call("interrupt", e, e.__data__, c.index, c.group),
                delete g[o])
              : +o < u &&
                ((c.state = $r),
                c.timer.stop(),
                c.on.call("cancel", e, e.__data__, c.index, c.group),
                delete g[o])
          }
        if (
          (Ki(function () {
            s.state === oi && ((s.state = Gi), s.timer.restart(t, s.delay, s.time), t(i))
          }),
          (s.state = ui),
          s.on.call("start", e, e.__data__, s.index, s.group),
          s.state === ui)
        ) {
          for (s.state = oi, y = new Array((h = s.tween.length)), o = 0, l = -1; o < h; ++o)
            (c = s.tween[o].value.call(e, e.__data__, s.index, s.group)) && (y[++l] = c)
          y.length = l + 1
        }
      }
      function t(i) {
        for (
          var o =
              i < s.duration
                ? s.ease.call(null, i / s.duration)
                : (s.timer.restart(n), (s.state = ai), 1),
            l = -1,
            h = y.length;
          ++l < h;

        )
          y[l].call(e, o)
        s.state === ai && (s.on.call("end", e, e.__data__, s.index, s.group), n())
      }
      function n() {
        ;(s.state = $r), s.timer.stop(), delete g[u]
        for (var i in g) return
        delete e.__transition
      }
    }
    function sr(e, u) {
      var s = e.__transition,
        g,
        y,
        E = !0,
        D
      if (s) {
        u = u == null ? null : u + ""
        for (D in s) {
          if ((g = s[D]).name !== u) {
            E = !1
            continue
          }
          ;(y = g.state > ui && g.state < ai),
            (g.state = $r),
            g.timer.stop(),
            g.on.call(y ? "interrupt" : "cancel", e, e.__data__, g.index, g.group),
            delete s[D]
        }
        E && delete e.__transition
      }
    }
    function vi(e) {
      return this.each(function () {
        sr(this, e)
      })
    }
    function Rn(e, u) {
      var s, g
      return function () {
        var y = $n(this, e),
          E = y.tween
        if (E !== s) {
          g = s = E
          for (var D = 0, t = g.length; D < t; ++D)
            if (g[D].name === u) {
              ;(g = g.slice()), g.splice(D, 1)
              break
            }
        }
        y.tween = g
      }
    }
    function Sn(e, u, s) {
      var g, y
      if (typeof s != "function") throw new Error()
      return function () {
        var E = $n(this, e),
          D = E.tween
        if (D !== g) {
          y = (g = D).slice()
          for (var t = { name: u, value: s }, n = 0, i = y.length; n < i; ++n)
            if (y[n].name === u) {
              y[n] = t
              break
            }
          n === i && y.push(t)
        }
        E.tween = y
      }
    }
    function ku(e, u) {
      var s = this._id
      if (((e += ""), arguments.length < 2)) {
        for (var g = Cn(this.node(), s).tween, y = 0, E = g.length, D; y < E; ++y)
          if ((D = g[y]).name === e) return D.value
        return null
      }
      return this.each((u == null ? Rn : Sn)(s, e, u))
    }
    function xr(e, u, s) {
      var g = e._id
      return (
        e.each(function () {
          var y = $n(this, g)
          ;(y.value || (y.value = {}))[u] = s.apply(this, arguments)
        }),
        function (y) {
          return Cn(y, g).value[u]
        }
      )
    }
    function Ji(e, u) {
      var s
      return (typeof u == "number" ? Vn : u instanceof dr ? yi : (s = dr(u)) ? ((u = s), yi) : Zn)(
        e,
        u,
      )
    }
    function Au(e) {
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
      var g,
        y = s + "",
        E
      return function () {
        var D = this.getAttribute(e)
        return D === y ? null : D === g ? E : (E = u((g = D), s))
      }
    }
    function wi(e, u, s) {
      var g,
        y = s + "",
        E
      return function () {
        var D = this.getAttributeNS(e.space, e.local)
        return D === y ? null : D === g ? E : (E = u((g = D), s))
      }
    }
    function Qi(e, u, s) {
      var g, y, E
      return function () {
        var D,
          t = s(this),
          n
        return t == null
          ? void this.removeAttribute(e)
          : ((D = this.getAttribute(e)),
            (n = t + ""),
            D === n ? null : D === g && n === y ? E : ((y = n), (E = u((g = D), t))))
      }
    }
    function Bu(e, u, s) {
      var g, y, E
      return function () {
        var D,
          t = s(this),
          n
        return t == null
          ? void this.removeAttributeNS(e.space, e.local)
          : ((D = this.getAttributeNS(e.space, e.local)),
            (n = t + ""),
            D === n ? null : D === g && n === y ? E : ((y = n), (E = u((g = D), t))))
      }
    }
    function Mu(e, u) {
      var s = Je(e),
        g = s === "transform" ? ti : Ji
      return this.attrTween(
        e,
        typeof u == "function"
          ? (s.local ? Bu : Qi)(s, g, xr(this, "attr." + e, u))
          : u == null
            ? (s.local ? Cu : Au)(s)
            : (s.local ? wi : Du)(s, g, u),
      )
    }
    function Fu(e, u) {
      return function (s) {
        this.setAttribute(e, u.call(this, s))
      }
    }
    function Nu(e, u) {
      return function (s) {
        this.setAttributeNS(e.space, e.local, u.call(this, s))
      }
    }
    function Lu(e, u) {
      var s, g
      function y() {
        var E = u.apply(this, arguments)
        return E !== g && (s = (g = E) && Nu(e, E)), s
      }
      return (y._value = u), y
    }
    function Tu(e, u) {
      var s, g
      function y() {
        var E = u.apply(this, arguments)
        return E !== g && (s = (g = E) && Fu(e, E)), s
      }
      return (y._value = u), y
    }
    function Ou(e, u) {
      var s = "attr." + e
      if (arguments.length < 2) return (s = this.tween(s)) && s._value
      if (u == null) return this.tween(s, null)
      if (typeof u != "function") throw new Error()
      var g = Je(e)
      return this.tween(s, (g.local ? Lu : Tu)(g, u))
    }
    function $u(e, u) {
      return function () {
        wr(this, e).delay = +u.apply(this, arguments)
      }
    }
    function Su(e, u) {
      return (
        (u = +u),
        function () {
          wr(this, e).delay = u
        }
      )
    }
    function ju(e) {
      var u = this._id
      return arguments.length
        ? this.each((typeof e == "function" ? $u : Su)(u, e))
        : Cn(this.node(), u).delay
    }
    function zu(e, u) {
      return function () {
        $n(this, e).duration = +u.apply(this, arguments)
      }
    }
    function qu(e, u) {
      return (
        (u = +u),
        function () {
          $n(this, e).duration = u
        }
      )
    }
    function Pu(e) {
      var u = this._id
      return arguments.length
        ? this.each((typeof e == "function" ? zu : qu)(u, e))
        : Cn(this.node(), u).duration
    }
    function Iu(e, u) {
      if (typeof u != "function") throw new Error()
      return function () {
        $n(this, e).ease = u
      }
    }
    function Ru(e) {
      var u = this._id
      return arguments.length ? this.each(Iu(u, e)) : Cn(this.node(), u).ease
    }
    function Hu(e, u) {
      return function () {
        var s = u.apply(this, arguments)
        if (typeof s != "function") throw new Error()
        $n(this, e).ease = s
      }
    }
    function Vu(e) {
      if (typeof e != "function") throw new Error()
      return this.each(Hu(this._id, e))
    }
    function Uu(e) {
      typeof e != "function" && (e = ke(e))
      for (var u = this._groups, s = u.length, g = new Array(s), y = 0; y < s; ++y)
        for (var E = u[y], D = E.length, t = (g[y] = []), n, i = 0; i < D; ++i)
          (n = E[i]) && e.call(n, n.__data__, i, E) && t.push(n)
      return new Un(g, this._parents, this._name, this._id)
    }
    function Wu(e) {
      if (e._id !== this._id) throw new Error()
      for (
        var u = this._groups,
          s = e._groups,
          g = u.length,
          y = s.length,
          E = Math.min(g, y),
          D = new Array(g),
          t = 0;
        t < E;
        ++t
      )
        for (var n = u[t], i = s[t], o = n.length, l = (D[t] = new Array(o)), h, c = 0; c < o; ++c)
          (h = n[c] || i[c]) && (l[c] = h)
      for (; t < g; ++t) D[t] = u[t]
      return new Un(D, this._parents, this._name, this._id)
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
      var g,
        y,
        E = Ku(u) ? wr : $n
      return function () {
        var D = E(this, e),
          t = D.on
        t !== g && (y = (g = t).copy()).on(u, s), (D.on = y)
      }
    }
    function Yu(e, u) {
      var s = this._id
      return arguments.length < 2 ? Cn(this.node(), s).on.on(e) : this.each(Xu(s, e, u))
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
      typeof e != "function" && (e = me(e))
      for (var g = this._groups, y = g.length, E = new Array(y), D = 0; D < y; ++D)
        for (var t = g[D], n = t.length, i = (E[D] = new Array(n)), o, l, h = 0; h < n; ++h)
          (o = t[h]) &&
            (l = e.call(o, o.__data__, h, t)) &&
            ("__data__" in o && (l.__data__ = o.__data__),
            (i[h] = l),
            vr(i[h], u, s, h, i, Cn(o, s)))
      return new Un(E, this._parents, u, s)
    }
    function Zu(e) {
      var u = this._name,
        s = this._id
      typeof e != "function" && (e = Ze(e))
      for (var g = this._groups, y = g.length, E = [], D = [], t = 0; t < y; ++t)
        for (var n = g[t], i = n.length, o, l = 0; l < i; ++l)
          if ((o = n[l])) {
            for (
              var h = e.call(o, o.__data__, l, n), c, m = Cn(o, s), b = 0, w = h.length;
              b < w;
              ++b
            )
              (c = h[b]) && vr(c, u, s, b, h, m)
            E.push(h), D.push(o)
          }
      return new Un(E, D, u, s)
    }
    var to = Y.prototype.constructor
    function eo() {
      return new to(this._groups, this._parents)
    }
    function no(e, u) {
      var s, g, y
      return function () {
        var E = $(this, e),
          D = (this.style.removeProperty(e), $(this, e))
        return E === D ? null : E === s && D === g ? y : (y = u((s = E), (g = D)))
      }
    }
    function Zi(e) {
      return function () {
        this.style.removeProperty(e)
      }
    }
    function ro(e, u, s) {
      var g,
        y = s + "",
        E
      return function () {
        var D = $(this, e)
        return D === y ? null : D === g ? E : (E = u((g = D), s))
      }
    }
    function io(e, u, s) {
      var g, y, E
      return function () {
        var D = $(this, e),
          t = s(this),
          n = t + ""
        return (
          t == null && (n = t = (this.style.removeProperty(e), $(this, e))),
          D === n ? null : D === g && n === y ? E : ((y = n), (E = u((g = D), t)))
        )
      }
    }
    function uo(e, u) {
      var s,
        g,
        y,
        E = "style." + u,
        D = "end." + E,
        t
      return function () {
        var n = $n(this, e),
          i = n.on,
          o = n.value[E] == null ? t || (t = Zi(u)) : void 0
        ;(i !== s || y !== o) && (g = (s = i).copy()).on(D, (y = o)), (n.on = g)
      }
    }
    function oo(e, u, s) {
      var g = (e += "") == "transform" ? Ri : Ji
      return u == null
        ? this.styleTween(e, no(e, g)).on("end.style." + e, Zi(e))
        : typeof u == "function"
          ? this.styleTween(e, io(e, g, xr(this, "style." + e, u))).each(uo(this._id, e))
          : this.styleTween(e, ro(e, g, u), s).on("end.style." + e, null)
    }
    function tu(e, u, s) {
      return function (g) {
        this.style.setProperty(e, u.call(this, g), s)
      }
    }
    function ao(e, u, s) {
      var g, y
      function E() {
        var D = u.apply(this, arguments)
        return D !== y && (g = (y = D) && tu(e, D, s)), g
      }
      return (E._value = u), E
    }
    function so(e, u, s) {
      var g = "style." + (e += "")
      if (arguments.length < 2) return (g = this.tween(g)) && g._value
      if (u == null) return this.tween(g, null)
      if (typeof u != "function") throw new Error()
      return this.tween(g, ao(e, u, s ?? ""))
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
    function ho(e) {
      return this.tween(
        "text",
        typeof e == "function" ? co(xr(this, "text", e)) : lo(e == null ? "" : e + ""),
      )
    }
    function fo(e) {
      return function (u) {
        this.textContent = e.call(this, u)
      }
    }
    function go(e) {
      var u, s
      function g() {
        var y = e.apply(this, arguments)
        return y !== s && (u = (s = y) && fo(y)), u
      }
      return (g._value = e), g
    }
    function po(e) {
      var u = "text"
      if (arguments.length < 1) return (u = this.tween(u)) && u._value
      if (e == null) return this.tween(u, null)
      if (typeof e != "function") throw new Error()
      return this.tween(u, go(e))
    }
    function mo() {
      for (
        var e = this._name, u = this._id, s = eu(), g = this._groups, y = g.length, E = 0;
        E < y;
        ++E
      )
        for (var D = g[E], t = D.length, n, i = 0; i < t; ++i)
          if ((n = D[i])) {
            var o = Cn(n, u)
            vr(n, e, s, i, D, {
              time: o.time + o.delay + o.duration,
              delay: 0,
              duration: o.duration,
              ease: o.ease,
            })
          }
      return new Un(g, this._parents, e, s)
    }
    function yo() {
      var e,
        u,
        s = this,
        g = s._id,
        y = s.size()
      return new Promise(function (E, D) {
        var t = { value: D },
          n = {
            value: function () {
              --y === 0 && E()
            },
          }
        s.each(function () {
          var i = $n(this, g),
            o = i.on
          o !== e &&
            ((u = (e = o).copy()), u._.cancel.push(t), u._.interrupt.push(t), u._.end.push(n)),
            (i.on = u)
        }),
          y === 0 && E()
      })
    }
    var vo = 0
    function Un(e, u, s, g) {
      ;(this._groups = e), (this._parents = u), (this._name = s), (this._id = g)
    }
    function wo(e) {
      return Y().transition(e)
    }
    function eu() {
      return ++vo
    }
    var Wn = Y.prototype
    Un.prototype = wo.prototype = {
      constructor: Un,
      select: Qu,
      selectAll: Zu,
      selectChild: Wn.selectChild,
      selectChildren: Wn.selectChildren,
      filter: Uu,
      merge: Wu,
      selection: eo,
      transition: mo,
      call: Wn.call,
      nodes: Wn.nodes,
      node: Wn.node,
      size: Wn.size,
      empty: Wn.empty,
      each: Wn.each,
      on: Yu,
      attr: Mu,
      attrTween: Ou,
      style: oo,
      styleTween: so,
      text: ho,
      textTween: po,
      remove: Ju,
      tween: ku,
      delay: ju,
      duration: Pu,
      ease: Ru,
      easeVarying: Vu,
      end: yo,
      [Symbol.iterator]: Wn[Symbol.iterator],
    }
    function xo(e) {
      return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
    }
    var Kn = { time: null, delay: 0, duration: 250, ease: xo }
    function bo(e, u) {
      for (var s; !(s = e.__transition) || !(s = s[u]); )
        if (!(e = e.parentNode)) throw new Error(`transition ${u} not found`)
      return s
    }
    function nu(e) {
      var u, s
      e instanceof Un
        ? ((u = e._id), (e = e._name))
        : ((u = eu()), ((s = Kn).time = yr()), (e = e == null ? null : e + ""))
      for (var g = this._groups, y = g.length, E = 0; E < y; ++E)
        for (var D = g[E], t = D.length, n, i = 0; i < t; ++i)
          (n = D[i]) && vr(n, e, u, i, D, s || bo(n, u))
      return new Un(g, this._parents, e, u)
    }
    ;(Y.prototype.interrupt = vi), (Y.prototype.transition = nu)
    var { abs: nr, max: na, min: ra } = Math
    function ru(e) {
      return [+e[0], +e[1]]
    }
    function Eo(e) {
      return [ru(e[0]), ru(e[1])]
    }
    var ca = {
        name: "x",
        handles: ["w", "e"].map(li),
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
      ha = {
        name: "y",
        handles: ["n", "s"].map(li),
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
      fa = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(li),
        input: function (e) {
          return e == null ? null : Eo(e)
        },
        output: function (e) {
          return e
        },
      }
    function li(e) {
      return { type: e }
    }
    function _o(e, u) {
      var s,
        g = 1
      e == null && (e = 0), u == null && (u = 0)
      function y() {
        var E,
          D = s.length,
          t,
          n = 0,
          i = 0
        for (E = 0; E < D; ++E) (t = s[E]), (n += t.x), (i += t.y)
        for (n = (n / D - e) * g, i = (i / D - u) * g, E = 0; E < D; ++E)
          (t = s[E]), (t.x -= n), (t.y -= i)
      }
      return (
        (y.initialize = function (E) {
          s = E
        }),
        (y.x = function (E) {
          return arguments.length ? ((e = +E), y) : e
        }),
        (y.y = function (E) {
          return arguments.length ? ((u = +E), y) : u
        }),
        (y.strength = function (E) {
          return arguments.length ? ((g = +E), y) : g
        }),
        y
      )
    }
    function ia(e) {
      let u = +this._x.call(null, e),
        s = +this._y.call(null, e)
      return ko(this.cover(u, s), u, s, e)
    }
    function ko(e, u, s, g) {
      if (isNaN(u) || isNaN(s)) return e
      var y,
        E = e._root,
        D = { data: g },
        t = e._x0,
        n = e._y0,
        i = e._x1,
        o = e._y1,
        l,
        h,
        c,
        m,
        b,
        w,
        A,
        O
      if (!E) return (e._root = D), e
      for (; E.length; )
        if (
          ((b = u >= (l = (t + i) / 2)) ? (t = l) : (i = l),
          (w = s >= (h = (n + o) / 2)) ? (n = h) : (o = h),
          (y = E),
          !(E = E[(A = (w << 1) | b)]))
        )
          return (y[A] = D), e
      if (((c = +e._x.call(null, E.data)), (m = +e._y.call(null, E.data)), u === c && s === m))
        return (D.next = E), y ? (y[A] = D) : (e._root = D), e
      do
        (y = y ? (y[A] = new Array(4)) : (e._root = new Array(4))),
          (b = u >= (l = (t + i) / 2)) ? (t = l) : (i = l),
          (w = s >= (h = (n + o) / 2)) ? (n = h) : (o = h)
      while ((A = (w << 1) | b) === (O = ((m >= h) << 1) | (c >= l)))
      return (y[O] = E), (y[A] = D), e
    }
    function ua(e) {
      var u,
        s,
        g = e.length,
        y,
        E,
        D = new Array(g),
        t = new Array(g),
        n = 1 / 0,
        i = 1 / 0,
        o = -1 / 0,
        l = -1 / 0
      for (s = 0; s < g; ++s)
        isNaN((y = +this._x.call(null, (u = e[s])))) ||
          isNaN((E = +this._y.call(null, u))) ||
          ((D[s] = y),
          (t[s] = E),
          y < n && (n = y),
          y > o && (o = y),
          E < i && (i = E),
          E > l && (l = E))
      if (n > o || i > l) return this
      for (this.cover(n, i).cover(o, l), s = 0; s < g; ++s) ko(this, D[s], t[s], e[s])
      return this
    }
    function xi(e, u) {
      if (isNaN((e = +e)) || isNaN((u = +u))) return this
      var s = this._x0,
        g = this._y0,
        y = this._x1,
        E = this._y1
      if (isNaN(s)) (y = (s = Math.floor(e)) + 1), (E = (g = Math.floor(u)) + 1)
      else {
        for (var D = y - s || 1, t = this._root, n, i; s > e || e >= y || g > u || u >= E; )
          switch (
            ((i = ((u < g) << 1) | (e < s)), (n = new Array(4)), (n[i] = t), (t = n), (D *= 2), i)
          ) {
            case 0:
              ;(y = s + D), (E = g + D)
              break
            case 1:
              ;(s = y - D), (E = g + D)
              break
            case 2:
              ;(y = s + D), (g = E - D)
              break
            case 3:
              ;(s = y - D), (g = E - D)
              break
          }
        this._root && this._root.length && (this._root = t)
      }
      return (this._x0 = s), (this._y0 = g), (this._x1 = y), (this._y1 = E), this
    }
    function Ao() {
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
    function hn(e, u, s, g, y) {
      ;(this.node = e), (this.x0 = u), (this.y0 = s), (this.x1 = g), (this.y1 = y)
    }
    function Do(e, u, s) {
      var g,
        y = this._x0,
        E = this._y0,
        D,
        t,
        n,
        i,
        o = this._x1,
        l = this._y1,
        h = [],
        c = this._root,
        m,
        b
      for (
        c && h.push(new hn(c, y, E, o, l)),
          s == null ? (s = 1 / 0) : ((y = e - s), (E = u - s), (o = e + s), (l = u + s), (s *= s));
        (m = h.pop());

      )
        if (
          !(!(c = m.node) || (D = m.x0) > o || (t = m.y0) > l || (n = m.x1) < y || (i = m.y1) < E)
        )
          if (c.length) {
            var w = (D + n) / 2,
              A = (t + i) / 2
            h.push(
              new hn(c[3], w, A, n, i),
              new hn(c[2], D, A, w, i),
              new hn(c[1], w, t, n, A),
              new hn(c[0], D, t, w, A),
            ),
              (b = ((u >= A) << 1) | (e >= w)) &&
                ((m = h[h.length - 1]),
                (h[h.length - 1] = h[h.length - 1 - b]),
                (h[h.length - 1 - b] = m))
          } else {
            var O = e - +this._x.call(null, c.data),
              S = u - +this._y.call(null, c.data),
              C = O * O + S * S
            if (C < s) {
              var W = Math.sqrt((s = C))
              ;(y = e - W), (E = u - W), (o = e + W), (l = u + W), (g = c.data)
            }
          }
      return g
    }
    function Bo(e) {
      if (isNaN((o = +this._x.call(null, e))) || isNaN((l = +this._y.call(null, e)))) return this
      var u,
        s = this._root,
        g,
        y,
        E,
        D = this._x0,
        t = this._y0,
        n = this._x1,
        i = this._y1,
        o,
        l,
        h,
        c,
        m,
        b,
        w,
        A
      if (!s) return this
      if (s.length)
        for (;;) {
          if (
            ((m = o >= (h = (D + n) / 2)) ? (D = h) : (n = h),
            (b = l >= (c = (t + i) / 2)) ? (t = c) : (i = c),
            (u = s),
            !(s = s[(w = (b << 1) | m)]))
          )
            return this
          if (!s.length) break
          ;(u[(w + 1) & 3] || u[(w + 2) & 3] || u[(w + 3) & 3]) && ((g = u), (A = w))
        }
      for (; s.data !== e; ) if (((y = s), !(s = s.next))) return this
      return (
        (E = s.next) && delete s.next,
        y
          ? (E ? (y.next = E) : delete y.next, this)
          : u
            ? (E ? (u[w] = E) : delete u[w],
              (s = u[0] || u[1] || u[2] || u[3]) &&
                s === (u[3] || u[2] || u[1] || u[0]) &&
                !s.length &&
                (g ? (g[A] = s) : (this._root = s)),
              this)
            : ((this._root = E), this)
      )
    }
    function Mo(e) {
      for (var u = 0, s = e.length; u < s; ++u) this.remove(e[u])
      return this
    }
    function Fo() {
      return this._root
    }
    function gn() {
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
        g = this._root,
        y,
        E,
        D,
        t,
        n
      for (g && u.push(new hn(g, this._x0, this._y0, this._x1, this._y1)); (s = u.pop()); )
        if (!e((g = s.node), (E = s.x0), (D = s.y0), (t = s.x1), (n = s.y1)) && g.length) {
          var i = (E + t) / 2,
            o = (D + n) / 2
          ;(y = g[3]) && u.push(new hn(y, i, o, t, n)),
            (y = g[2]) && u.push(new hn(y, E, o, i, n)),
            (y = g[1]) && u.push(new hn(y, i, D, t, o)),
            (y = g[0]) && u.push(new hn(y, E, D, i, o))
        }
      return this
    }
    function Lo(e) {
      var u = [],
        s = [],
        g
      for (
        this._root && u.push(new hn(this._root, this._x0, this._y0, this._x1, this._y1));
        (g = u.pop());

      ) {
        var y = g.node
        if (y.length) {
          var E,
            D = g.x0,
            t = g.y0,
            n = g.x1,
            i = g.y1,
            o = (D + n) / 2,
            l = (t + i) / 2
          ;(E = y[0]) && u.push(new hn(E, D, t, o, l)),
            (E = y[1]) && u.push(new hn(E, o, t, n, l)),
            (E = y[2]) && u.push(new hn(E, D, l, o, i)),
            (E = y[3]) && u.push(new hn(E, o, l, n, i))
        }
        s.push(g)
      }
      for (; (g = s.pop()); ) e(g.node, g.x0, g.y0, g.x1, g.y1)
      return this
    }
    function To(e) {
      return e[0]
    }
    function Oo(e) {
      return arguments.length ? ((this._x = e), this) : this._x
    }
    function $o(e) {
      return e[1]
    }
    function So(e) {
      return arguments.length ? ((this._y = e), this) : this._y
    }
    function iu(e, u, s) {
      var g = new bi(u ?? To, s ?? $o, NaN, NaN, NaN, NaN)
      return e == null ? g : g.addAll(e)
    }
    function bi(e, u, s, g, y, E) {
      ;(this._x = e),
        (this._y = u),
        (this._x0 = s),
        (this._y0 = g),
        (this._x1 = y),
        (this._y1 = E),
        (this._root = void 0)
    }
    function uu(e) {
      for (var u = { data: e.data }, s = u; (e = e.next); ) s = s.next = { data: e.data }
      return u
    }
    var pn = (iu.prototype = bi.prototype)
    ;(pn.copy = function () {
      var e = new bi(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        u = this._root,
        s,
        g
      if (!u) return e
      if (!u.length) return (e._root = uu(u)), e
      for (s = [{ source: u, target: (e._root = new Array(4)) }]; (u = s.pop()); )
        for (var y = 0; y < 4; ++y)
          (g = u.source[y]) &&
            (g.length
              ? s.push({ source: g, target: (u.target[y] = new Array(4)) })
              : (u.target[y] = uu(g)))
      return e
    }),
      (pn.add = ia),
      (pn.addAll = ua),
      (pn.cover = xi),
      (pn.data = Ao),
      (pn.extent = Co),
      (pn.find = Do),
      (pn.remove = Bo),
      (pn.removeAll = Mo),
      (pn.root = Fo),
      (pn.size = gn),
      (pn.visit = No),
      (pn.visitAfter = Lo),
      (pn.x = Oo),
      (pn.y = So)
    function Sr(e) {
      return function () {
        return e
      }
    }
    function lr(e) {
      return (e() - 0.5) * 1e-6
    }
    function Ei(e) {
      return e.index
    }
    function _i(e, u) {
      var s = e.get(u)
      if (!s) throw new Error("node not found: " + u)
      return s
    }
    function mn(e) {
      var u = Ei,
        s = l,
        g,
        y = Sr(30),
        E,
        D,
        t,
        n,
        i,
        o = 1
      e == null && (e = [])
      function l(w) {
        return 1 / Math.min(t[w.source.index], t[w.target.index])
      }
      function h(w) {
        for (var A = 0, O = e.length; A < o; ++A)
          for (var S = 0, C, W, X, H, G, yt, Bt; S < O; ++S)
            (C = e[S]),
              (W = C.source),
              (X = C.target),
              (H = X.x + X.vx - W.x - W.vx || lr(i)),
              (G = X.y + X.vy - W.y - W.vy || lr(i)),
              (yt = Math.sqrt(H * H + G * G)),
              (yt = ((yt - E[S]) / yt) * w * g[S]),
              (H *= yt),
              (G *= yt),
              (X.vx -= H * (Bt = n[S])),
              (X.vy -= G * Bt),
              (W.vx += H * (Bt = 1 - Bt)),
              (W.vy += G * Bt)
      }
      function c() {
        if (D) {
          var w,
            A = D.length,
            O = e.length,
            S = new Map(D.map((W, X) => [u(W, X, D), W])),
            C
          for (w = 0, t = new Array(A); w < O; ++w)
            (C = e[w]),
              (C.index = w),
              typeof C.source != "object" && (C.source = _i(S, C.source)),
              typeof C.target != "object" && (C.target = _i(S, C.target)),
              (t[C.source.index] = (t[C.source.index] || 0) + 1),
              (t[C.target.index] = (t[C.target.index] || 0) + 1)
          for (w = 0, n = new Array(O); w < O; ++w)
            (C = e[w]), (n[w] = t[C.source.index] / (t[C.source.index] + t[C.target.index]))
          ;(g = new Array(O)), m(), (E = new Array(O)), b()
        }
      }
      function m() {
        if (D) for (var w = 0, A = e.length; w < A; ++w) g[w] = +s(e[w], w, e)
      }
      function b() {
        if (D) for (var w = 0, A = e.length; w < A; ++w) E[w] = +y(e[w], w, e)
      }
      return (
        (h.initialize = function (w, A) {
          ;(D = w), (i = A), c()
        }),
        (h.links = function (w) {
          return arguments.length ? ((e = w), c(), h) : e
        }),
        (h.id = function (w) {
          return arguments.length ? ((u = w), h) : u
        }),
        (h.iterations = function (w) {
          return arguments.length ? ((o = +w), h) : o
        }),
        (h.strength = function (w) {
          return arguments.length ? ((s = typeof w == "function" ? w : Sr(+w)), m(), h) : s
        }),
        (h.distance = function (w) {
          return arguments.length ? ((y = typeof w == "function" ? w : Sr(+w)), b(), h) : y
        }),
        h
      )
    }
    function jr() {
      let e = 1
      return () => (e = (1664525 * e + 1013904223) % 4294967296) / 4294967296
    }
    function br(e) {
      return e.x
    }
    function jo(e) {
      return e.y
    }
    var ou = 10,
      zo = Math.PI * (3 - Math.sqrt(5))
    function qo(e) {
      var u,
        s = 1,
        g = 0.001,
        y = 1 - Math.pow(g, 1 / 300),
        E = 0,
        D = 0.6,
        t = new Map(),
        n = ar(l),
        i = _e("tick", "end"),
        o = jr()
      e == null && (e = [])
      function l() {
        h(), i.call("tick", u), s < g && (n.stop(), i.call("end", u))
      }
      function h(b) {
        var w,
          A = e.length,
          O
        b === void 0 && (b = 1)
        for (var S = 0; S < b; ++S)
          for (
            s += (E - s) * y,
              t.forEach(function (C) {
                C(s)
              }),
              w = 0;
            w < A;
            ++w
          )
            (O = e[w]),
              O.fx == null ? (O.x += O.vx *= D) : ((O.x = O.fx), (O.vx = 0)),
              O.fy == null ? (O.y += O.vy *= D) : ((O.y = O.fy), (O.vy = 0))
        return u
      }
      function c() {
        for (var b = 0, w = e.length, A; b < w; ++b) {
          if (
            ((A = e[b]),
            (A.index = b),
            A.fx != null && (A.x = A.fx),
            A.fy != null && (A.y = A.fy),
            isNaN(A.x) || isNaN(A.y))
          ) {
            var O = ou * Math.sqrt(0.5 + b),
              S = b * zo
            ;(A.x = O * Math.cos(S)), (A.y = O * Math.sin(S))
          }
          ;(isNaN(A.vx) || isNaN(A.vy)) && (A.vx = A.vy = 0)
        }
      }
      function m(b) {
        return b.initialize && b.initialize(e, o), b
      }
      return (
        c(),
        (u = {
          tick: h,
          restart: function () {
            return n.restart(l), u
          },
          stop: function () {
            return n.stop(), u
          },
          nodes: function (b) {
            return arguments.length ? ((e = b), c(), t.forEach(m), u) : e
          },
          alpha: function (b) {
            return arguments.length ? ((s = +b), u) : s
          },
          alphaMin: function (b) {
            return arguments.length ? ((g = +b), u) : g
          },
          alphaDecay: function (b) {
            return arguments.length ? ((y = +b), u) : +y
          },
          alphaTarget: function (b) {
            return arguments.length ? ((E = +b), u) : E
          },
          velocityDecay: function (b) {
            return arguments.length ? ((D = 1 - b), u) : 1 - D
          },
          randomSource: function (b) {
            return arguments.length ? ((o = b), t.forEach(m), u) : o
          },
          force: function (b, w) {
            return arguments.length > 1 ? (w == null ? t.delete(b) : t.set(b, m(w)), u) : t.get(b)
          },
          find: function (b, w, A) {
            var O = 0,
              S = e.length,
              C,
              W,
              X,
              H,
              G
            for (A == null ? (A = 1 / 0) : (A *= A), O = 0; O < S; ++O)
              (H = e[O]),
                (C = b - H.x),
                (W = w - H.y),
                (X = C * C + W * W),
                X < A && ((G = H), (A = X))
            return G
          },
          on: function (b, w) {
            return arguments.length > 1 ? (i.on(b, w), u) : i.on(b)
          },
        })
      )
    }
    function Po() {
      var e,
        u,
        s,
        g,
        y = Sr(-30),
        E,
        D = 1,
        t = 1 / 0,
        n = 0.81
      function i(c) {
        var m,
          b = e.length,
          w = iu(e, br, jo).visitAfter(l)
        for (g = c, m = 0; m < b; ++m) (u = e[m]), w.visit(h)
      }
      function o() {
        if (e) {
          var c,
            m = e.length,
            b
          for (E = new Array(m), c = 0; c < m; ++c) (b = e[c]), (E[b.index] = +y(b, c, e))
        }
      }
      function l(c) {
        var m = 0,
          b,
          w,
          A = 0,
          O,
          S,
          C
        if (c.length) {
          for (O = S = C = 0; C < 4; ++C)
            (b = c[C]) &&
              (w = Math.abs(b.value)) &&
              ((m += b.value), (A += w), (O += w * b.x), (S += w * b.y))
          ;(c.x = O / A), (c.y = S / A)
        } else {
          ;(b = c), (b.x = b.data.x), (b.y = b.data.y)
          do m += E[b.data.index]
          while ((b = b.next))
        }
        c.value = m
      }
      function h(c, m, b, w) {
        if (!c.value) return !0
        var A = c.x - u.x,
          O = c.y - u.y,
          S = w - m,
          C = A * A + O * O
        if ((S * S) / n < C)
          return (
            C < t &&
              (A === 0 && ((A = lr(s)), (C += A * A)),
              O === 0 && ((O = lr(s)), (C += O * O)),
              C < D && (C = Math.sqrt(D * C)),
              (u.vx += (A * c.value * g) / C),
              (u.vy += (O * c.value * g) / C)),
            !0
          )
        if (!(c.length || C >= t)) {
          ;(c.data !== u || c.next) &&
            (A === 0 && ((A = lr(s)), (C += A * A)),
            O === 0 && ((O = lr(s)), (C += O * O)),
            C < D && (C = Math.sqrt(D * C)))
          do c.data !== u && ((S = (E[c.data.index] * g) / C), (u.vx += A * S), (u.vy += O * S))
          while ((c = c.next))
        }
      }
      return (
        (i.initialize = function (c, m) {
          ;(e = c), (s = m), o()
        }),
        (i.strength = function (c) {
          return arguments.length ? ((y = typeof c == "function" ? c : Sr(+c)), o(), i) : y
        }),
        (i.distanceMin = function (c) {
          return arguments.length ? ((D = c * c), i) : Math.sqrt(D)
        }),
        (i.distanceMax = function (c) {
          return arguments.length ? ((t = c * c), i) : Math.sqrt(t)
        }),
        (i.theta = function (c) {
          return arguments.length ? ((n = c * c), i) : Math.sqrt(n)
        }),
        i
      )
    }
    var ci = (e) => () => e
    function Io(e, { sourceEvent: u, target: s, transform: g, dispatch: y }) {
      Object.defineProperties(this, {
        type: { value: e, enumerable: !0, configurable: !0 },
        sourceEvent: { value: u, enumerable: !0, configurable: !0 },
        target: { value: s, enumerable: !0, configurable: !0 },
        transform: { value: g, enumerable: !0, configurable: !0 },
        _: { value: y },
      })
    }
    function Xn(e, u, s) {
      ;(this.k = e), (this.x = u), (this.y = s)
    }
    Xn.prototype = {
      constructor: Xn,
      scale: function (e) {
        return e === 1 ? this : new Xn(this.k * e, this.x, this.y)
      },
      translate: function (e, u) {
        return (e === 0) & (u === 0)
          ? this
          : new Xn(this.k, this.x + this.k * e, this.y + this.k * u)
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
    var ki = new Xn(1, 0, 0)
    Ro.prototype = Xn.prototype
    function Ro(e) {
      for (; !e.__zoom; ) if (!(e = e.parentNode)) return ki
      return e.__zoom
    }
    function Er(e) {
      e.stopImmediatePropagation()
    }
    function zr(e) {
      e.preventDefault(), e.stopImmediatePropagation()
    }
    function Yn(e) {
      return (!e.ctrlKey || e.type === "wheel") && !e.button
    }
    function Ai() {
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
      return this.__zoom || ki
    }
    function Ci(e) {
      return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1)
    }
    function qr() {
      return navigator.maxTouchPoints || "ontouchstart" in this
    }
    function Ho(e, u, s) {
      var g = e.invertX(u[0][0]) - s[0][0],
        y = e.invertX(u[1][0]) - s[1][0],
        E = e.invertY(u[0][1]) - s[0][1],
        D = e.invertY(u[1][1]) - s[1][1]
      return e.translate(
        y > g ? (g + y) / 2 : Math.min(0, g) || Math.max(0, y),
        D > E ? (E + D) / 2 : Math.min(0, E) || Math.max(0, D),
      )
    }
    function Vo() {
      var e = Yn,
        u = Ai,
        s = Ho,
        g = Ci,
        y = qr,
        E = [0, 1 / 0],
        D = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0],
        ],
        t = 250,
        n = bu,
        i = _e("start", "zoom", "end"),
        o,
        l,
        h,
        c = 500,
        m = 150,
        b = 0,
        w = 10
      function A(K) {
        K.property("__zoom", au)
          .on("wheel.zoom", G, { passive: !1 })
          .on("mousedown.zoom", yt)
          .on("dblclick.zoom", Bt)
          .filter(y)
          .on("touchstart.zoom", ut)
          .on("touchmove.zoom", St)
          .on("touchend.zoom touchcancel.zoom", Yt)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }
      ;(A.transform = function (K, Dt, dt, Mt) {
        var Ht = K.selection ? K.selection() : K
        Ht.property("__zoom", au),
          K !== Ht
            ? W(K, Dt, dt, Mt)
            : Ht.interrupt().each(function () {
                X(this, arguments)
                  .event(Mt)
                  .start()
                  .zoom(null, typeof Dt == "function" ? Dt.apply(this, arguments) : Dt)
                  .end()
              })
      }),
        (A.scaleBy = function (K, Dt, dt, Mt) {
          A.scaleTo(
            K,
            function () {
              var Ht = this.__zoom.k,
                Zt = typeof Dt == "function" ? Dt.apply(this, arguments) : Dt
              return Ht * Zt
            },
            dt,
            Mt,
          )
        }),
        (A.scaleTo = function (K, Dt, dt, Mt) {
          A.transform(
            K,
            function () {
              var Ht = u.apply(this, arguments),
                Zt = this.__zoom,
                pt = dt == null ? C(Ht) : typeof dt == "function" ? dt.apply(this, arguments) : dt,
                V = Zt.invert(pt),
                Et = typeof Dt == "function" ? Dt.apply(this, arguments) : Dt
              return s(S(O(Zt, Et), pt, V), Ht, D)
            },
            dt,
            Mt,
          )
        }),
        (A.translateBy = function (K, Dt, dt, Mt) {
          A.transform(
            K,
            function () {
              return s(
                this.__zoom.translate(
                  typeof Dt == "function" ? Dt.apply(this, arguments) : Dt,
                  typeof dt == "function" ? dt.apply(this, arguments) : dt,
                ),
                u.apply(this, arguments),
                D,
              )
            },
            null,
            Mt,
          )
        }),
        (A.translateTo = function (K, Dt, dt, Mt, Ht) {
          A.transform(
            K,
            function () {
              var Zt = u.apply(this, arguments),
                pt = this.__zoom,
                V = Mt == null ? C(Zt) : typeof Mt == "function" ? Mt.apply(this, arguments) : Mt
              return s(
                ki
                  .translate(V[0], V[1])
                  .scale(pt.k)
                  .translate(
                    typeof Dt == "function" ? -Dt.apply(this, arguments) : -Dt,
                    typeof dt == "function" ? -dt.apply(this, arguments) : -dt,
                  ),
                Zt,
                D,
              )
            },
            Mt,
            Ht,
          )
        })
      function O(K, Dt) {
        return (Dt = Math.max(E[0], Math.min(E[1], Dt))), Dt === K.k ? K : new Xn(Dt, K.x, K.y)
      }
      function S(K, Dt, dt) {
        var Mt = Dt[0] - dt[0] * K.k,
          Ht = Dt[1] - dt[1] * K.k
        return Mt === K.x && Ht === K.y ? K : new Xn(K.k, Mt, Ht)
      }
      function C(K) {
        return [(+K[0][0] + +K[1][0]) / 2, (+K[0][1] + +K[1][1]) / 2]
      }
      function W(K, Dt, dt, Mt) {
        K.on("start.zoom", function () {
          X(this, arguments).event(Mt).start()
        })
          .on("interrupt.zoom end.zoom", function () {
            X(this, arguments).event(Mt).end()
          })
          .tween("zoom", function () {
            var Ht = this,
              Zt = arguments,
              pt = X(Ht, Zt).event(Mt),
              V = u.apply(Ht, Zt),
              Et = dt == null ? C(V) : typeof dt == "function" ? dt.apply(Ht, Zt) : dt,
              at = Math.max(V[1][0] - V[0][0], V[1][1] - V[0][1]),
              bt = Ht.__zoom,
              jt = typeof Dt == "function" ? Dt.apply(Ht, Zt) : Dt,
              Lt = n(bt.invert(Et).concat(at / bt.k), jt.invert(Et).concat(at / jt.k))
            return function (ft) {
              if (ft === 1) ft = jt
              else {
                var Wt = Lt(ft),
                  se = at / Wt[2]
                ft = new Xn(se, Et[0] - Wt[0] * se, Et[1] - Wt[1] * se)
              }
              pt.zoom(null, ft)
            }
          })
      }
      function X(K, Dt, dt) {
        return (!dt && K.__zooming) || new H(K, Dt)
      }
      function H(K, Dt) {
        ;(this.that = K),
          (this.args = Dt),
          (this.active = 0),
          (this.sourceEvent = null),
          (this.extent = u.apply(K, Dt)),
          (this.taps = 0)
      }
      H.prototype = {
        event: function (K) {
          return K && (this.sourceEvent = K), this
        },
        start: function () {
          return ++this.active === 1 && ((this.that.__zooming = this), this.emit("start")), this
        },
        zoom: function (K, Dt) {
          return (
            this.mouse && K !== "mouse" && (this.mouse[1] = Dt.invert(this.mouse[0])),
            this.touch0 && K !== "touch" && (this.touch0[1] = Dt.invert(this.touch0[0])),
            this.touch1 && K !== "touch" && (this.touch1[1] = Dt.invert(this.touch1[0])),
            (this.that.__zoom = Dt),
            this.emit("zoom"),
            this
          )
        },
        end: function () {
          return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this
        },
        emit: function (K) {
          var Dt = ot(this.that).datum()
          i.call(
            K,
            this.that,
            new Io(K, {
              sourceEvent: this.sourceEvent,
              target: A,
              type: K,
              transform: this.that.__zoom,
              dispatch: i,
            }),
            Dt,
          )
        },
      }
      function G(K, ...Dt) {
        if (!e.apply(this, arguments)) return
        var dt = X(this, Dt).event(K),
          Mt = this.__zoom,
          Ht = Math.max(E[0], Math.min(E[1], Mt.k * Math.pow(2, g.apply(this, arguments)))),
          Zt = At(K)
        if (dt.wheel)
          (dt.mouse[0][0] !== Zt[0] || dt.mouse[0][1] !== Zt[1]) &&
            (dt.mouse[1] = Mt.invert((dt.mouse[0] = Zt))),
            clearTimeout(dt.wheel)
        else {
          if (Mt.k === Ht) return
          ;(dt.mouse = [Zt, Mt.invert(Zt)]), sr(this), dt.start()
        }
        zr(K),
          (dt.wheel = setTimeout(pt, m)),
          dt.zoom("mouse", s(S(O(Mt, Ht), dt.mouse[0], dt.mouse[1]), dt.extent, D))
        function pt() {
          ;(dt.wheel = null), dt.end()
        }
      }
      function yt(K, ...Dt) {
        if (h || !e.apply(this, arguments)) return
        var dt = K.currentTarget,
          Mt = X(this, Dt, !0).event(K),
          Ht = ot(K.view).on("mousemove.zoom", Et, !0).on("mouseup.zoom", at, !0),
          Zt = At(K, dt),
          pt = K.clientX,
          V = K.clientY
        je(K.view), Er(K), (Mt.mouse = [Zt, this.__zoom.invert(Zt)]), sr(this), Mt.start()
        function Et(bt) {
          if ((zr(bt), !Mt.moved)) {
            var jt = bt.clientX - pt,
              Lt = bt.clientY - V
            Mt.moved = jt * jt + Lt * Lt > b
          }
          Mt.event(bt).zoom(
            "mouse",
            s(S(Mt.that.__zoom, (Mt.mouse[0] = At(bt, dt)), Mt.mouse[1]), Mt.extent, D),
          )
        }
        function at(bt) {
          Ht.on("mousemove.zoom mouseup.zoom", null),
            ze(bt.view, Mt.moved),
            zr(bt),
            Mt.event(bt).end()
        }
      }
      function Bt(K, ...Dt) {
        if (e.apply(this, arguments)) {
          var dt = this.__zoom,
            Mt = At(K.changedTouches ? K.changedTouches[0] : K, this),
            Ht = dt.invert(Mt),
            Zt = dt.k * (K.shiftKey ? 0.5 : 2),
            pt = s(S(O(dt, Zt), Mt, Ht), u.apply(this, Dt), D)
          zr(K),
            t > 0
              ? ot(this).transition().duration(t).call(W, pt, Mt, K)
              : ot(this).call(A.transform, pt, Mt, K)
        }
      }
      function ut(K, ...Dt) {
        if (e.apply(this, arguments)) {
          var dt = K.touches,
            Mt = dt.length,
            Ht = X(this, Dt, K.changedTouches.length === Mt).event(K),
            Zt,
            pt,
            V,
            Et
          for (Er(K), pt = 0; pt < Mt; ++pt)
            (V = dt[pt]),
              (Et = At(V, this)),
              (Et = [Et, this.__zoom.invert(Et), V.identifier]),
              Ht.touch0
                ? !Ht.touch1 && Ht.touch0[2] !== Et[2] && ((Ht.touch1 = Et), (Ht.taps = 0))
                : ((Ht.touch0 = Et), (Zt = !0), (Ht.taps = 1 + !!o))
          o && (o = clearTimeout(o)),
            Zt &&
              (Ht.taps < 2 &&
                ((l = Et[0]),
                (o = setTimeout(function () {
                  o = null
                }, c))),
              sr(this),
              Ht.start())
        }
      }
      function St(K, ...Dt) {
        if (this.__zooming) {
          var dt = X(this, Dt).event(K),
            Mt = K.changedTouches,
            Ht = Mt.length,
            Zt,
            pt,
            V,
            Et
          for (zr(K), Zt = 0; Zt < Ht; ++Zt)
            (pt = Mt[Zt]),
              (V = At(pt, this)),
              dt.touch0 && dt.touch0[2] === pt.identifier
                ? (dt.touch0[0] = V)
                : dt.touch1 && dt.touch1[2] === pt.identifier && (dt.touch1[0] = V)
          if (((pt = dt.that.__zoom), dt.touch1)) {
            var at = dt.touch0[0],
              bt = dt.touch0[1],
              jt = dt.touch1[0],
              Lt = dt.touch1[1],
              ft = (ft = jt[0] - at[0]) * ft + (ft = jt[1] - at[1]) * ft,
              Wt = (Wt = Lt[0] - bt[0]) * Wt + (Wt = Lt[1] - bt[1]) * Wt
            ;(pt = O(pt, Math.sqrt(ft / Wt))),
              (V = [(at[0] + jt[0]) / 2, (at[1] + jt[1]) / 2]),
              (Et = [(bt[0] + Lt[0]) / 2, (bt[1] + Lt[1]) / 2])
          } else if (dt.touch0) (V = dt.touch0[0]), (Et = dt.touch0[1])
          else return
          dt.zoom("touch", s(S(pt, V, Et), dt.extent, D))
        }
      }
      function Yt(K, ...Dt) {
        if (this.__zooming) {
          var dt = X(this, Dt).event(K),
            Mt = K.changedTouches,
            Ht = Mt.length,
            Zt,
            pt
          for (
            Er(K),
              h && clearTimeout(h),
              h = setTimeout(function () {
                h = null
              }, c),
              Zt = 0;
            Zt < Ht;
            ++Zt
          )
            (pt = Mt[Zt]),
              dt.touch0 && dt.touch0[2] === pt.identifier
                ? delete dt.touch0
                : dt.touch1 && dt.touch1[2] === pt.identifier && delete dt.touch1
          if ((dt.touch1 && !dt.touch0 && ((dt.touch0 = dt.touch1), delete dt.touch1), dt.touch0))
            dt.touch0[1] = this.__zoom.invert(dt.touch0[0])
          else if (
            (dt.end(),
            dt.taps === 2 && ((pt = At(pt, this)), Math.hypot(l[0] - pt[0], l[1] - pt[1]) < w))
          ) {
            var V = ot(this).on("dblclick.zoom")
            V && V.apply(this, arguments)
          }
        }
      }
      return (
        (A.wheelDelta = function (K) {
          return arguments.length ? ((g = typeof K == "function" ? K : ci(+K)), A) : g
        }),
        (A.filter = function (K) {
          return arguments.length ? ((e = typeof K == "function" ? K : ci(!!K)), A) : e
        }),
        (A.touchable = function (K) {
          return arguments.length ? ((y = typeof K == "function" ? K : ci(!!K)), A) : y
        }),
        (A.extent = function (K) {
          return arguments.length
            ? ((u =
                typeof K == "function"
                  ? K
                  : ci([
                      [+K[0][0], +K[0][1]],
                      [+K[1][0], +K[1][1]],
                    ])),
              A)
            : u
        }),
        (A.scaleExtent = function (K) {
          return arguments.length ? ((E[0] = +K[0]), (E[1] = +K[1]), A) : [E[0], E[1]]
        }),
        (A.translateExtent = function (K) {
          return arguments.length
            ? ((D[0][0] = +K[0][0]),
              (D[1][0] = +K[1][0]),
              (D[0][1] = +K[0][1]),
              (D[1][1] = +K[1][1]),
              A)
            : [
                [D[0][0], D[0][1]],
                [D[1][0], D[1][1]],
              ]
        }),
        (A.constrain = function (K) {
          return arguments.length ? ((s = K), A) : s
        }),
        (A.duration = function (K) {
          return arguments.length ? ((t = +K), A) : t
        }),
        (A.interpolate = function (K) {
          return arguments.length ? ((n = K), A) : n
        }),
        (A.on = function () {
          var K = i.on.apply(i, arguments)
          return K === i ? A : K
        }),
        (A.clickDistance = function (K) {
          return arguments.length ? ((b = (K = +K) * K), A) : Math.sqrt(b)
        }),
        (A.tapDistance = function (K) {
          return arguments.length ? ((w = +K), A) : w
        }),
        A
      )
    }
    function su(e, u) {
      if (!e) return
      function s(y) {
        y.target === this && (y.preventDefault(), u())
      }
      function g(y) {
        y.key.startsWith("Esc") && (y.preventDefault(), u())
      }
      e?.addEventListener("click", s),
        window.addCleanup(() => e?.removeEventListener("click", s)),
        document.addEventListener("keydown", g),
        window.addCleanup(() => document.removeEventListener("keydown", g))
    }
    function lu(e) {
      for (; e.firstChild; ) e.removeChild(e.firstChild)
    }
    var oa = Object.hasOwnProperty,
      Uo = Jt(an(), 1),
      aa = (0, Uo.default)()
    function sa(e) {
      return e.document.body.dataset.slug
    }
    function Pr(e) {
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
      return Ir(la(e), Pr(u))
    }
    function Ir(...e) {
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
    function hu() {
      return new Set(JSON.parse(localStorage.getItem(cu) ?? "[]"))
    }
    function Go(e) {
      let u = hu()
      u.add(e), localStorage.setItem(cu, JSON.stringify([...u]))
    }
    async function Di(e, u) {
      let s = Pr(u),
        g = hu(),
        y = document.getElementById(e)
      if (!y) return
      lu(y)
      let {
          drag: E,
          zoom: D,
          depth: t,
          scale: n,
          repelForce: i,
          centerForce: o,
          linkDistance: l,
          fontSize: h,
          opacityScale: c,
          removeTags: m,
          showTags: b,
          focusOnHover: w,
        } = JSON.parse(y.dataset.cfg),
        A = new Map(Object.entries(await fetchData).map(([pt, V]) => [Pr(pt), V])),
        O = [],
        S = [],
        C = new Set(A.keys())
      for (let [pt, V] of A.entries()) {
        let Et = V.links ?? []
        for (let at of Et) C.has(at) && O.push({ source: pt, target: at })
        if (b) {
          let at = V.tags.filter((bt) => !m.includes(bt)).map((bt) => Pr("tags/" + bt))
          S.push(...at.filter((bt) => !S.includes(bt)))
          for (let bt of at) O.push({ source: pt, target: bt })
        }
      }
      let W = new Set(),
        X = [s, "__SENTINEL"]
      if (t >= 0)
        for (; t >= 0 && X.length > 0; ) {
          let pt = X.shift()
          if (pt === "__SENTINEL") t--, X.push("__SENTINEL")
          else {
            W.add(pt)
            let V = O.filter((at) => at.source === pt),
              Et = O.filter((at) => at.target === pt)
            X.push(...V.map((at) => at.target), ...Et.map((at) => at.source))
          }
        }
      else C.forEach((pt) => W.add(pt)), b && S.forEach((pt) => W.add(pt))
      let H = {
          nodes: [...W].map((pt) => {
            let V = pt.startsWith("tags/") ? "#" + pt.substring(5) : A.get(pt)?.title ?? pt
            return { id: pt, text: V, tags: A.get(pt)?.tags ?? [] }
          }),
          links: O.filter((pt) => W.has(pt.source) && W.has(pt.target)),
        },
        G = qo(H.nodes)
          .force("charge", Po().strength(-100 * i))
          .force(
            "link",
            mn(H.links)
              .id((pt) => pt.id)
              .distance(l),
          )
          .force("center", _o().strength(o)),
        yt = Math.max(y.offsetHeight, 250),
        Bt = y.offsetWidth,
        ut = ot("#" + e)
          .append("svg")
          .attr("width", Bt)
          .attr("height", yt)
          .attr("viewBox", [-Bt / 2 / n, -yt / 2 / n, Bt / n, yt / n]),
        St = ut
          .append("g")
          .selectAll("line")
          .data(H.links)
          .join("line")
          .attr("class", "link")
          .attr("stroke", "var(--lightgray)")
          .attr("stroke-width", 1),
        Yt = ut.append("g").selectAll("g").data(H.nodes).enter().append("g"),
        K = (pt) =>
          pt.id === s
            ? "var(--secondary)"
            : g.has(pt.id) || pt.id.startsWith("tags/")
              ? "var(--tertiary)"
              : "var(--gray)",
        Dt = (pt) => {
          function V(jt, Lt) {
            jt.active || pt.alphaTarget(1).restart(), (Lt.fx = Lt.x), (Lt.fy = Lt.y)
          }
          function Et(jt, Lt) {
            ;(Lt.fx = jt.x), (Lt.fy = jt.y)
          }
          function at(jt, Lt) {
            jt.active || pt.alphaTarget(0), (Lt.fx = null), (Lt.fy = null)
          }
          let bt = () => {}
          return hi()
            .on("start", E ? V : bt)
            .on("drag", E ? Et : bt)
            .on("end", E ? at : bt)
        }
      function dt(pt) {
        let V = O.filter((Et) => Et.source.id === pt.id || Et.target.id === pt.id).length
        return 2 + Math.sqrt(V)
      }
      let Mt = [],
        Ht = Yt.append("circle")
          .attr("class", "node")
          .attr("id", (pt) => pt.id)
          .attr("r", dt)
          .attr("fill", K)
          .style("cursor", "pointer")
          .on("click", (pt, V) => {
            let Et = Wo(u, V.id)
            window.spaNavigate(new URL(Et, window.location.toString()))
          })
          .on("mouseover", function (pt, V) {
            let Et = V.id,
              at = _t(".link").filter((Lt) => Lt.source.id === Et || Lt.target.id === Et)
            w &&
              ((Mt = at.data().flatMap((Lt) => [Lt.source.id, Lt.target.id])),
              _t(".link").style("opacity", 0.2),
              _t(".node")
                .filter((Lt) => !Mt.includes(Lt.id))
                .style("opacity", 0.2),
              _t(".node")
                .filter((Lt) => !Mt.includes(Lt.id))
                .nodes()
                .map((Lt) => ot(Lt.parentNode).select("text"))
                .forEach((Lt) => {
                  let ft = parseFloat(Lt.style("opacity"))
                  Lt.transition()
                    .duration(200)
                    .attr("opacityOld", ft)
                    .style("opacity", Math.min(ft, 0.2))
                })),
              at.attr("stroke", "var(--gray)").attr("stroke-width", 1)
            let bt = h * 1.5,
              jt = this.parentNode
            ot(jt)
              .raise()
              .select("text")
              .attr("opacityOld", ot(jt).select("text").style("opacity"))
              .style("opacity", 1)
              .style("font-size", bt + "em")
          })
          .on("mouseleave", function (pt, V) {
            w &&
              (_t(".link").style("opacity", 1),
              _t(".node").style("opacity", 1),
              _t(".node")
                .filter((bt) => !Mt.includes(bt.id))
                .nodes()
                .map((bt) => ot(bt.parentNode).select("text"))
                .forEach((bt) =>
                  bt.transition().duration(200).style("opacity", bt.attr("opacityOld")),
                ))
            let Et = V.id
            _t(".link")
              .filter((bt) => bt.source.id === Et || bt.target.id === Et)
              .attr("stroke", "var(--lightgray)")
            let at = this.parentNode
            ot(at)
              .select("text")
              .style("opacity", ot(at).select("text").attr("opacityOld"))
              .style("font-size", h + "em")
          })
          .call(Dt(G))
      Ht.filter((pt) => pt.id.startsWith("tags/"))
        .attr("stroke", K)
        .attr("stroke-width", 2)
        .attr("fill", "var(--light)")
      let Zt = Yt.append("text")
        .attr("dx", 0)
        .attr("dy", (pt) => -dt(pt) + "px")
        .attr("text-anchor", "middle")
        .text((pt) => pt.text)
        .style("opacity", (c - 1) / 3.75)
        .style("pointer-events", "none")
        .style("font-size", h + "em")
        .raise()
        .call(Dt(G))
      D &&
        ut.call(
          Vo()
            .extent([
              [0, 0],
              [Bt, yt],
            ])
            .scaleExtent([0.25, 4])
            .on("zoom", ({ transform: pt }) => {
              St.attr("transform", pt), Ht.attr("transform", pt)
              let V = pt.k * c,
                Et = Math.max((V - 1) / 3.75, 0)
              Zt.attr("transform", pt).style("opacity", Et)
            }),
        ),
        G.on("tick", () => {
          St.attr("x1", (pt) => pt.source.x)
            .attr("y1", (pt) => pt.source.y)
            .attr("x2", (pt) => pt.target.x)
            .attr("y2", (pt) => pt.target.y),
            Ht.attr("cx", (pt) => pt.x).attr("cy", (pt) => pt.y),
            Zt.attr("x", (pt) => pt.x).attr("y", (pt) => pt.y)
        })
    }
    function Bi() {
      let e = sa(window),
        u = document.getElementById("global-graph-outer"),
        s = u?.closest(".sidebar")
      u?.classList.add("active"), s && (s.style.zIndex = "1"), Di("global-graph-container", e)
      function g() {
        u?.classList.remove("active")
        let y = document.getElementById("global-graph-container")
        s && (s.style.zIndex = "unset"), y && lu(y)
      }
      su(u, g)
    }
    document.addEventListener("nav", async (e) => {
      let u = e.detail.url
      Go(Pr(u)), await Di("graph-container", u)
      let s = document.getElementById("global-graph-icon")
      s?.addEventListener("click", Bi), window.addCleanup(() => s?.removeEventListener("click", Bi))
    })
  })(),
  (function () {
    var De = new IntersectionObserver((de) => {
      for (let Be of de) {
        let Qt = Be.target.id,
          $e = document.querySelector(`a[data-for="${Qt}"]`),
          Ue = Be.rootBounds?.height
        Ue &&
          $e &&
          (Be.boundingClientRect.y < Ue
            ? $e.classList.add("in-view")
            : $e.classList.remove("in-view"))
      }
    })
    function fe() {
      this.classList.toggle("collapsed")
      let de = this.nextElementSibling
      de &&
        (de.classList.toggle("collapsed"),
        (de.style.maxHeight = de.style.maxHeight === "0px" ? de.scrollHeight + "px" : "0px"))
    }
    function le() {
      let de = document.getElementById("toc")
      if (de) {
        let Be = de.classList.contains("collapsed"),
          Qt = de.nextElementSibling
        if (!Qt) return
        ;(Qt.style.maxHeight = Be ? "0px" : Qt.scrollHeight + "px"),
          de.addEventListener("click", fe),
          window.addCleanup(() => de.removeEventListener("click", fe))
      }
    }
    window.addEventListener("resize", le),
      document.addEventListener("nav", () => {
        le(),
          De.disconnect(),
          document
            .querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
            .forEach((de) => De.observe(de))
      })
  })(),
  (function () {
    var De = (r, v) => () => (v || r((v = { exports: {} }).exports, v), v.exports),
      fe = De(() => {})
    function le(r, v) {
      if (!r) return
      function k(F) {
        F.target === this && (F.preventDefault(), v())
      }
      function M(F) {
        F.key.startsWith("Esc") && (F.preventDefault(), v())
      }
      r?.addEventListener("click", k),
        window.addCleanup(() => r?.removeEventListener("click", k)),
        document.addEventListener("keydown", M),
        window.addCleanup(() => document.removeEventListener("keydown", M))
    }
    function de(r) {
      for (; r.firstChild; ) r.removeChild(r.firstChild)
    }
    function Be(r, ...v) {
      r &&
        v.forEach(([k, M]) => {
          let F = (j) => M(j)
          r.addEventListener(k, F), window.addCleanup(() => r.removeEventListener(k, F))
        })
    }
    var Qt = {
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
      $e = {
        propertyDefaults: { title: "Untitled", description: "No description provided" },
        components: {
          callout: {
            note: "Note",
            abstract: "Abstract",
            info: "Info",
            todo: "To-Do",
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
          error: {
            title: "Not Found",
            notFound: "Either this page is private or doesn't exist.",
            home: "Return to Homepage",
          },
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
      Ue = {
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
          contentMeta: { readingTime: ({ minutes: r }) => `${r} min de lecture` },
        },
        pages: {
          rss: {
            recentNotes: "Notes r\xE9centes",
            lastFewNotes: ({ count: r }) => `Les derni\xE8res ${r} notes`,
          },
          error: {
            title: "Introuvable",
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
      Jt = {
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
      an = {
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
      pe = {
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
      Ut = {
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
      Ne = {
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
      Le = {
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
      Kt = {
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
      yn = {
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
      _e = {
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
              `\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0448${ve(r, "\u0443\u044E\u0441\u044F", "\u0438\u0435\u0441\u044F", "\u0438\u0435\u0441\u044F")} ${r} \u2192`,
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
              `\u041F\u043E\u0441\u043B\u0435\u0434\u043D${ve(r, "\u044F\u044F", "\u0438\u0435", "\u0438\u0435")} ${r} \u0437\u0430\u043C\u0435\u0442${ve(r, "\u043A\u0430", "\u043A\u0438", "\u043E\u043A")}`,
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
              `\u0432 \u044D\u0442\u043E\u0439 \u043F\u0430\u043F\u043A\u0435 ${r} \u044D\u043B\u0435\u043C\u0435\u043D\u0442${ve(r, "", "\u0430", "\u043E\u0432")}`,
          },
          tagContent: {
            tag: "\u0422\u0435\u0433",
            tagIndex: "\u0418\u043D\u0434\u0435\u043A\u0441 \u0442\u0435\u0433\u043E\u0432",
            itemsUnderTag: ({ count: r }) =>
              `\u0441 \u044D\u0442\u0438\u043C \u0442\u0435\u0433\u043E\u043C ${r} \u044D\u043B\u0435\u043C\u0435\u043D\u0442${ve(r, "", "\u0430", "\u043E\u0432")}`,
            showingFirst: ({ count: r }) =>
              `\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430${ve(r, "\u0435\u0442\u0441\u044F", "\u044E\u0442\u0441\u044F", "\u044E\u0442\u0441\u044F")} ${r} \u0442\u0435\u0433${ve(r, "", "\u0430", "\u043E\u0432")}`,
            totalTags: ({ count: r }) =>
              `\u0412\u0441\u0435\u0433\u043E ${r} \u0442\u0435\u0433${ve(r, "", "\u0430", "\u043E\u0432")}`,
          },
        },
      }
    function ve(r, v, k, M) {
      let F = r % 100,
        j = F % 10
      return F >= 10 && F <= 20 ? M : j > 1 && j < 5 ? k : j == 1 ? v : M
    }
    var ne = {
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
      Je = {
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
      vn = {
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
      Qe = {
        propertyDefaults: { title: "Sem t\xEDtulo", description: "Sem descri\xE7\xE3o" },
        components: {
          callout: {
            note: "Nota",
            abstract: "Abstrato",
            info: "Info",
            todo: "Pend\xEAncia",
            tip: "Dica",
            success: "Sucesso",
            question: "Pergunta",
            warning: "Aviso",
            failure: "Falha",
            danger: "Perigo",
            bug: "Bug",
            example: "Exemplo",
            quote: "Cita\xE7\xE3o",
          },
          backlinks: { title: "Backlinks", noBacklinksFound: "Sem backlinks encontrados" },
          themeToggle: { lightMode: "Tema claro", darkMode: "Tema escuro" },
          explorer: { title: "Explorador" },
          footer: { createdWith: "Criado com" },
          graph: { title: "Vis\xE3o de gr\xE1fico" },
          recentNotes: {
            title: "Notas recentes",
            seeRemainingMore: ({ remaining: r }) => `Veja mais ${r} \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `Transcrever de ${r}`,
            linkToOriginal: "Link ao original",
          },
          search: { title: "Pesquisar", searchBarPlaceholder: "Pesquisar por algo" },
          tableOfContents: { title: "Sum\xE1rio" },
          contentMeta: { readingTime: ({ minutes: r }) => `Leitura de ${r} min` },
        },
        pages: {
          rss: {
            recentNotes: "Notas recentes",
            lastFewNotes: ({ count: r }) => `\xDAltimas ${r} notas`,
          },
          error: {
            title: "N\xE3o encontrado",
            notFound: "Esta p\xE1gina \xE9 privada ou n\xE3o existe.",
          },
          folderContent: {
            folder: "Arquivo",
            itemsUnderFolder: ({ count: r }) =>
              r === 1 ? "1 item mneste arquivo." : `${r} items neste arquivo.`,
          },
          tagContent: {
            tag: "Tag",
            tagIndex: "Sum\xE1rio de Tags",
            itemsUnderTag: ({ count: r }) =>
              r === 1 ? "1 item com esta tag." : `${r} items com esta tag.`,
            showingFirst: ({ count: r }) => `Mostrando as ${r} primeiras tags.`,
            totalTags: ({ count: r }) => `Encontradas ${r} tags.`,
          },
        },
      },
      Xe = {
        propertyDefaults: { title: "N\xE9vtelen", description: "Nincs le\xEDr\xE1s" },
        components: {
          callout: {
            note: "Jegyzet",
            abstract: "Abstract",
            info: "Inform\xE1ci\xF3",
            todo: "Tennival\xF3",
            tip: "Tipp",
            success: "Siker",
            question: "K\xE9rd\xE9s",
            warning: "Figyelmeztet\xE9s",
            failure: "Hiba",
            danger: "Vesz\xE9ly",
            bug: "Bug",
            example: "P\xE9lda",
            quote: "Id\xE9zet",
          },
          backlinks: { title: "Visszautal\xE1sok", noBacklinksFound: "Nincs visszautal\xE1s" },
          themeToggle: { lightMode: "Vil\xE1gos m\xF3d", darkMode: "S\xF6t\xE9t m\xF3d" },
          explorer: { title: "F\xE1jlb\xF6ng\xE9sz\u0151" },
          footer: { createdWith: "K\xE9sz\xEDtve ezzel:" },
          graph: { title: "Grafikonn\xE9zet" },
          recentNotes: {
            title: "Legut\xF3bbi jegyzetek",
            seeRemainingMore: ({ remaining: r }) => `${r} tov\xE1bbi megtekint\xE9se \u2192`,
          },
          transcludes: {
            transcludeOf: ({ targetSlug: r }) => `${r} \xE1thivatkoz\xE1sa`,
            linkToOriginal: "Hivatkoz\xE1s az eredetire",
          },
          search: { title: "Keres\xE9s", searchBarPlaceholder: "Keress valamire" },
          tableOfContents: { title: "Tartalomjegyz\xE9k" },
          contentMeta: { readingTime: ({ minutes: r }) => `${r} perces olvas\xE1s` },
        },
        pages: {
          rss: {
            recentNotes: "Legut\xF3bbi jegyzetek",
            lastFewNotes: ({ count: r }) => `Legut\xF3bbi ${r} jegyzet`,
          },
          error: {
            title: "Nem tal\xE1lhat\xF3",
            notFound: "Ez a lap vagy priv\xE1t vagy nem l\xE9tezik.",
          },
          folderContent: {
            folder: "Mappa",
            itemsUnderFolder: ({ count: r }) => `Ebben a mapp\xE1ban ${r} elem tal\xE1lhat\xF3.`,
          },
          tagContent: {
            tag: "C\xEDmke",
            tagIndex: "C\xEDmke index",
            itemsUnderTag: ({ count: r }) => `${r} elem tal\xE1lhat\xF3 ezzel a c\xEDmk\xE9vel.`,
            showingFirst: ({ count: r }) => `Els\u0151 ${r} c\xEDmke megjelen\xEDtve.`,
            totalTags: ({ count: r }) => `\xD6sszesen ${r} c\xEDmke tal\xE1lhat\xF3.`,
          },
        },
      },
      qe = {
        "en-US": Qt,
        "en-GB": $e,
        "fr-FR": Ue,
        "it-IT": Jt,
        "ja-JP": an,
        "de-DE": pe,
        "nl-NL": Ut,
        "nl-BE": Ut,
        "ro-RO": Ne,
        "ro-MD": Ne,
        "es-ES": Le,
        "ar-SA": Kt,
        "ar-AE": Kt,
        "ar-QA": Kt,
        "ar-BH": Kt,
        "ar-KW": Kt,
        "ar-OM": Kt,
        "ar-YE": Kt,
        "ar-IR": Kt,
        "ar-SY": Kt,
        "ar-IQ": Kt,
        "ar-JO": Kt,
        "ar-PL": Kt,
        "ar-LB": Kt,
        "ar-EG": Kt,
        "ar-SD": Kt,
        "ar-LY": Kt,
        "ar-MA": Kt,
        "ar-TN": Kt,
        "ar-DZ": Kt,
        "ar-MR": Kt,
        "uk-UA": yn,
        "ru-RU": _e,
        "ko-KR": ne,
        "zh-CN": Je,
        "vi-VN": vn,
        "pt-BR": Qe,
        "hu-HU": Xe,
      },
      me = "en-US",
      fn = (r) => qe[r ?? me],
      we
    function dn(r) {
      return typeof r < "u" ? r : !0
    }
    function Ze(r) {
      let v = Array(r)
      for (let k = 0; k < r; k++) v[k] = te()
      return v
    }
    function te() {
      return Object.create(null)
    }
    function Dn(r, v) {
      return v.length - r.length
    }
    function ke(r) {
      return typeof r == "string"
    }
    function be(r) {
      return typeof r == "object"
    }
    function tn(r) {
      return typeof r == "function"
    }
    function Ye(r, v) {
      var k = wn
      if (
        r &&
        (v && (r = Se(r, v)),
        this.H && (r = Se(r, this.H)),
        this.J && 1 < r.length && (r = Se(r, this.J)),
        k || k === "")
      ) {
        if (((v = r.split(k)), this.filter)) {
          ;(r = this.filter), (k = v.length)
          let M = []
          for (let F = 0, j = 0; F < k; F++) {
            let et = v[F]
            et && !r[et] && (M[j++] = et)
          }
          r = M
        } else r = v
        return r
      }
      return r
    }
    var wn = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      xn = /[\u0300-\u036f]/g
    function un(r, v) {
      let k = Object.keys(r),
        M = k.length,
        F = [],
        j = "",
        et = 0
      for (let it = 0, Y, ot; it < M; it++)
        (Y = k[it]),
          (ot = r[Y])
            ? ((F[et++] = xe(v ? "(?!\\b)" + Y + "(\\b|_)" : Y)), (F[et++] = ot))
            : (j += (j ? "|" : "") + Y)
      return j && ((F[et++] = xe(v ? "(?!\\b)(" + j + ")(\\b|_)" : "(" + j + ")")), (F[et] = "")), F
    }
    function Se(r, v) {
      for (let k = 0, M = v.length; k < M && ((r = r.replace(v[k], v[k + 1])), r); k += 2);
      return r
    }
    function xe(r) {
      return new RegExp(r, "g")
    }
    function We(r) {
      let v = "",
        k = ""
      for (let M = 0, F = r.length, j; M < F; M++) (j = r[M]) !== k && (v += k = j)
      return v
    }
    var He = { encode: rt, F: !1, G: "" }
    function rt(r) {
      return Ye.call(this, ("" + r).toLowerCase(), !1)
    }
    var mt = {},
      Ct = {}
    function Tt(r) {
      Pt(r, "add"), Pt(r, "append"), Pt(r, "search"), Pt(r, "update"), Pt(r, "remove")
    }
    function Pt(r, v) {
      r[v + "Async"] = function () {
        let k = this,
          M = arguments
        var F = M[M.length - 1]
        let j
        return (
          tn(F) && ((j = F), delete M[M.length - 1]),
          (F = new Promise(function (et) {
            setTimeout(function () {
              k.async = !0
              let it = k[v].apply(k, M)
              ;(k.async = !1), et(it)
            })
          })),
          j ? (F.then(j), this) : F
        )
      }
    }
    function Ot(r, v, k, M) {
      let F = r.length,
        j = [],
        et,
        it,
        Y = 0
      M && (M = [])
      for (let ot = F - 1; 0 <= ot; ot--) {
        let lt = r[ot],
          At = lt.length,
          _t = te(),
          wt = !et
        for (let vt = 0; vt < At; vt++) {
          let zt = lt[vt],
            Xt = zt.length
          if (Xt)
            for (let je = 0, ze, Fe; je < Xt; je++)
              if (((Fe = zt[je]), et)) {
                if (et[Fe]) {
                  if (!ot) {
                    if (k) k--
                    else if (((j[Y++] = Fe), Y === v)) return j
                  }
                  ;(ot || M) && (_t[Fe] = 1), (wt = !0)
                }
                if (M && ((ze = (it[Fe] || 0) + 1), (it[Fe] = ze), ze < F)) {
                  let An = M[ze - 2] || (M[ze - 2] = [])
                  An[An.length] = Fe
                }
              } else _t[Fe] = 1
        }
        if (M) et || (it = _t)
        else if (!wt) return []
        et = _t
      }
      if (M)
        for (let ot = M.length - 1, lt, At; 0 <= ot; ot--) {
          ;(lt = M[ot]), (At = lt.length)
          for (let _t = 0, wt; _t < At; _t++)
            if (((wt = lt[_t]), !et[wt])) {
              if (k) k--
              else if (((j[Y++] = wt), Y === v)) return j
              et[wt] = 1
            }
        }
      return j
    }
    function It(r, v) {
      let k = te(),
        M = te(),
        F = []
      for (let j = 0; j < r.length; j++) k[r[j]] = 1
      for (let j = 0, et; j < v.length; j++) {
        et = v[j]
        for (let it = 0, Y; it < et.length; it++)
          (Y = et[it]), k[Y] && !M[Y] && ((M[Y] = 1), (F[F.length] = Y))
      }
      return F
    }
    function ie(r) {
      ;(this.l = r !== !0 && r), (this.cache = te()), (this.h = [])
    }
    function ce(r, v, k) {
      be(r) && (r = r.query)
      let M = this.cache.get(r)
      return M || ((M = this.search(r, v, k)), this.cache.set(r, M)), M
    }
    ;(ie.prototype.set = function (r, v) {
      if (!this.cache[r]) {
        var k = this.h.length
        for (k === this.l ? delete this.cache[this.h[k - 1]] : k++, --k; 0 < k; k--)
          this.h[k] = this.h[k - 1]
        this.h[0] = r
      }
      this.cache[r] = v
    }),
      (ie.prototype.get = function (r) {
        let v = this.cache[r]
        if (this.l && v && (r = this.h.indexOf(r))) {
          let k = this.h[r - 1]
          ;(this.h[r - 1] = this.h[r]), (this.h[r] = k)
        }
        return v
      })
    var Ce = {
      memory: { charset: "latin:extra", D: 3, B: 4, m: !1 },
      performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } },
      match: { charset: "latin:extra", G: "reverse" },
      score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } },
      default: {},
    }
    function Pe(r, v, k, M, F, j, et, it) {
      setTimeout(function () {
        let Y = r(k ? k + "." + M : M, JSON.stringify(et))
        Y && Y.then
          ? Y.then(function () {
              v.export(r, v, k, F, j + 1, it)
            })
          : v.export(r, v, k, F, j + 1, it)
      })
    }
    function Rt(r, v) {
      if (!(this instanceof Rt)) return new Rt(r)
      var k
      if (r) {
        ke(r) ? (r = Ce[r]) : (k = r.preset) && (r = Object.assign({}, k[k], r)), (k = r.charset)
        var M = r.lang
        ke(k) && (k.indexOf(":") === -1 && (k += ":default"), (k = Ct[k])), ke(M) && (M = mt[M])
      } else r = {}
      let F,
        j,
        et = r.context || {}
      if (
        ((this.encode = r.encode || (k && k.encode) || rt),
        (this.register = v || te()),
        (this.D = F = r.resolution || 9),
        (this.G = v = (k && k.G) || r.tokenize || "strict"),
        (this.depth = v === "strict" && et.depth),
        (this.l = dn(et.bidirectional)),
        (this.s = j = dn(r.optimize)),
        (this.m = dn(r.fastupdate)),
        (this.B = r.minlength || 1),
        (this.C = r.boost),
        (this.map = j ? Ze(F) : te()),
        (this.A = F = et.resolution || 1),
        (this.h = j ? Ze(F) : te()),
        (this.F = (k && k.F) || r.rtl),
        (this.H = (v = r.matcher || (M && M.H)) && un(v, !1)),
        (this.J = (v = r.stemmer || (M && M.J)) && un(v, !0)),
        (k = v = r.filter || (M && M.filter)))
      ) {
        ;(k = v), (M = te())
        for (let it = 0, Y = k.length; it < Y; it++) M[k[it]] = 1
        k = M
      }
      ;(this.filter = k), (this.cache = (v = r.cache) && new ie(v))
    }
    ;(we = Rt.prototype),
      (we.append = function (r, v) {
        return this.add(r, v, !0)
      }),
      (we.add = function (r, v, k, M) {
        if (v && (r || r === 0)) {
          if (!M && !k && this.register[r]) return this.update(r, v)
          if (((v = this.encode(v)), (M = v.length))) {
            let ot = te(),
              lt = te(),
              At = this.depth,
              _t = this.D
            for (let wt = 0; wt < M; wt++) {
              let vt = v[this.F ? M - 1 - wt : wt]
              var F = vt.length
              if (vt && F >= this.B && (At || !lt[vt])) {
                var j = ue(_t, M, wt),
                  et = ""
                switch (this.G) {
                  case "full":
                    if (2 < F) {
                      for (j = 0; j < F; j++)
                        for (var it = F; it > j; it--)
                          if (it - j >= this.B) {
                            var Y = ue(_t, M, wt, F, j)
                            ;(et = vt.substring(j, it)), Ft(this, lt, et, Y, r, k)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < F) {
                      for (it = F - 1; 0 < it; it--)
                        (et = vt[it] + et),
                          et.length >= this.B && Ft(this, lt, et, ue(_t, M, wt, F, it), r, k)
                      et = ""
                    }
                  case "forward":
                    if (1 < F) {
                      for (it = 0; it < F; it++)
                        (et += vt[it]), et.length >= this.B && Ft(this, lt, et, j, r, k)
                      break
                    }
                  default:
                    if (
                      (this.C && (j = Math.min((j / this.C(v, vt, wt)) | 0, _t - 1)),
                      Ft(this, lt, vt, j, r, k),
                      At && 1 < M && wt < M - 1)
                    ) {
                      for (
                        F = te(),
                          et = this.A,
                          j = vt,
                          it = Math.min(At + 1, M - wt),
                          F[j] = 1,
                          Y = 1;
                        Y < it;
                        Y++
                      )
                        if (
                          (vt = v[this.F ? M - 1 - wt - Y : wt + Y]) &&
                          vt.length >= this.B &&
                          !F[vt]
                        ) {
                          F[vt] = 1
                          let zt = this.l && vt > j
                          Ft(
                            this,
                            ot,
                            zt ? j : vt,
                            ue(et + (M / 2 > et ? 0 : 1), M, wt, it - 1, Y - 1),
                            r,
                            k,
                            zt ? vt : j,
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
    function ue(r, v, k, M, F) {
      return k && 1 < r
        ? v + (M || 0) <= r
          ? k + (F || 0)
          : (((r - 1) / (v + (M || 0))) * (k + (F || 0)) + 1) | 0
        : 0
    }
    function Ft(r, v, k, M, F, j, et) {
      let it = et ? r.h : r.map
      ;(!v[k] || (et && !v[k][et])) &&
        (r.s && (it = it[M]),
        et
          ? ((v = v[k] || (v[k] = te())), (v[et] = 1), (it = it[et] || (it[et] = te())))
          : (v[k] = 1),
        (it = it[k] || (it[k] = [])),
        r.s || (it = it[M] || (it[M] = [])),
        (j && it.includes(F)) ||
          ((it[it.length] = F),
          r.m && ((r = r.register[F] || (r.register[F] = [])), (r[r.length] = it))))
    }
    we.search = function (r, v, k) {
      k || (!v && be(r) ? ((k = r), (r = k.query)) : be(v) && (k = v))
      let M = [],
        F,
        j,
        et = 0
      if (k) {
        ;(r = k.query || r), (v = k.limit), (et = k.offset || 0)
        var it = k.context
        j = k.suggest
      }
      if (r && ((r = this.encode("" + r)), (F = r.length), 1 < F)) {
        k = te()
        var Y = []
        for (let lt = 0, At = 0, _t; lt < F; lt++)
          if ((_t = r[lt]) && _t.length >= this.B && !k[_t])
            if (this.s || j || this.map[_t]) (Y[At++] = _t), (k[_t] = 1)
            else return M
        ;(r = Y), (F = r.length)
      }
      if (!F) return M
      v || (v = 100), (it = this.depth && 1 < F && it !== !1), (k = 0)
      let ot
      it ? ((ot = r[0]), (k = 1)) : 1 < F && r.sort(Dn)
      for (let lt, At; k < F; k++) {
        if (
          ((At = r[k]),
          it
            ? ((lt = qt(this, M, j, v, et, F === 2, At, ot)),
              (j && lt === !1 && M.length) || (ot = At))
            : (lt = qt(this, M, j, v, et, F === 1, At)),
          lt)
        )
          return lt
        if (j && k === F - 1) {
          if (((Y = M.length), !Y)) {
            if (it) {
              ;(it = 0), (k = -1)
              continue
            }
            return M
          }
          if (Y === 1) return he(M[0], v, et)
        }
      }
      return Ot(M, v, et, j)
    }
    function qt(r, v, k, M, F, j, et, it) {
      let Y = [],
        ot = it ? r.h : r.map
      if ((r.s || (ot = re(ot, et, it, r.l)), ot)) {
        let lt = 0,
          At = Math.min(ot.length, it ? r.A : r.D)
        for (
          let _t = 0, wt = 0, vt, zt;
          _t < At &&
          !(
            (vt = ot[_t]) &&
            (r.s && (vt = re(vt, et, it, r.l)),
            F &&
              vt &&
              j &&
              ((zt = vt.length),
              zt <= F ? ((F -= zt), (vt = null)) : ((vt = vt.slice(F)), (F = 0))),
            vt && ((Y[lt++] = vt), j && ((wt += vt.length), wt >= M)))
          );
          _t++
        );
        if (lt) {
          if (j) return he(Y, M, 0)
          v[v.length] = Y
          return
        }
      }
      return !k && Y
    }
    function he(r, v, k) {
      return (
        (r = r.length === 1 ? r[0] : [].concat.apply([], r)),
        k || r.length > v ? r.slice(k, k + v) : r
      )
    }
    function re(r, v, k, M) {
      return k ? ((M = M && v > k), (r = (r = r[M ? v : k]) && r[M ? k : v])) : (r = r[v]), r
    }
    ;(we.contain = function (r) {
      return !!this.register[r]
    }),
      (we.update = function (r, v) {
        return this.remove(r).add(r, v)
      }),
      (we.remove = function (r, v) {
        let k = this.register[r]
        if (k) {
          if (this.m) for (let M = 0, F; M < k.length; M++) (F = k[M]), F.splice(F.indexOf(r), 1)
          else Ee(this.map, r, this.D, this.s), this.depth && Ee(this.h, r, this.A, this.s)
          if ((v || delete this.register[r], this.cache)) {
            v = this.cache
            for (let M = 0, F, j; M < v.h.length; M++)
              (j = v.h[M]),
                (F = v.cache[j]),
                F.includes(r) && (v.h.splice(M--, 1), delete v.cache[j])
          }
        }
        return this
      })
    function Ee(r, v, k, M, F) {
      let j = 0
      if (r.constructor === Array)
        if (F) (v = r.indexOf(v)), v !== -1 ? 1 < r.length && (r.splice(v, 1), j++) : j++
        else {
          F = Math.min(r.length, k)
          for (let et = 0, it; et < F; et++)
            (it = r[et]) && ((j = Ee(it, v, k, M, F)), M || j || delete r[et])
        }
      else for (let et in r) (j = Ee(r[et], v, k, M, F)) || delete r[et]
      return j
    }
    ;(we.searchCache = ce),
      (we.export = function (r, v, k, M, F, j) {
        let et = !0
        typeof j > "u" &&
          (et = new Promise((ot) => {
            j = ot
          }))
        let it, Y
        switch (F || (F = 0)) {
          case 0:
            if (((it = "reg"), this.m)) {
              Y = te()
              for (let ot in this.register) Y[ot] = 1
            } else Y = this.register
            break
          case 1:
            ;(it = "cfg"), (Y = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(it = "map"), (Y = this.map)
            break
          case 3:
            ;(it = "ctx"), (Y = this.h)
            break
          default:
            typeof k > "u" && j && j()
            return
        }
        return Pe(r, v || this, k, it, M, F, Y, j), et
      }),
      (we.import = function (r, v) {
        if (v)
          switch ((ke(v) && (v = JSON.parse(v)), r)) {
            case "cfg":
              this.s = !!v.opt
              break
            case "reg":
              ;(this.m = !1), (this.register = v)
              break
            case "map":
              this.map = v
              break
            case "ctx":
              this.h = v
          }
      }),
      Tt(Rt.prototype)
    function en(r) {
      r = r.data
      var v = self._index
      let k = r.args
      var M = r.task
      switch (M) {
        case "init":
          ;(M = r.options || {}),
            (r = r.factory),
            (v = M.encode),
            (M.cache = !1),
            v && v.indexOf("function") === 0 && (M.encode = Function("return " + v)()),
            r
              ? (Function("return " + r)()(self),
                (self._index = new self.FlexSearch.Index(M)),
                delete self.FlexSearch)
              : (self._index = new Rt(M))
          break
        default:
          ;(r = r.id),
            (v = v[M].apply(v, k)),
            postMessage(M === "search" ? { id: r, msg: v } : { id: r })
      }
    }
    var Ve = 0
    function Ie(r) {
      if (!(this instanceof Ie)) return new Ie(r)
      var v
      r ? tn((v = r.encode)) && (r.encode = v.toString()) : (r = {}),
        (v = (self || window)._factory) && (v = v.toString())
      let k = typeof window > "u" && self.exports,
        M = this
      ;(this.o = jn(v, k, r.worker)),
        (this.h = te()),
        this.o &&
          (k
            ? this.o.on("message", function (F) {
                M.h[F.id](F.msg), delete M.h[F.id]
              })
            : (this.o.onmessage = function (F) {
                ;(F = F.data), M.h[F.id](F.msg), delete M.h[F.id]
              }),
          this.o.postMessage({ task: "init", factory: v, options: r }))
    }
    bn("add"), bn("append"), bn("search"), bn("update"), bn("remove")
    function bn(r) {
      Ie.prototype[r] = Ie.prototype[r + "Async"] = function () {
        let v = this,
          k = [].slice.call(arguments)
        var M = k[k.length - 1]
        let F
        return (
          tn(M) && ((F = M), k.splice(k.length - 1, 1)),
          (M = new Promise(function (j) {
            setTimeout(function () {
              ;(v.h[++Ve] = j), v.o.postMessage({ task: r, id: Ve, args: k })
            })
          })),
          F ? (M.then(F), this) : M
        )
      }
    }
    function jn(r, v, k) {
      let M
      try {
        M = v
          ? new (fe().Worker)(__dirname + "/node/node.js")
          : r
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + en.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(ke(k) ? k : "worker/worker.js", { type: "module" })
      } catch {}
      return M
    }
    function kn(r) {
      if (!(this instanceof kn)) return new kn(r)
      var v = r.document || r.doc || r,
        k
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = te()),
        (this.key = ((k = v.key || v.id) && sn(k, this.A)) || "id"),
        (this.m = dn(r.fastupdate)),
        (this.C = (k = v.store) && k !== !0 && []),
        (this.store = k && te()),
        (this.I = (k = v.tag) && sn(k, this.A)),
        (this.l = k && te()),
        (this.cache = (k = r.cache) && new ie(k)),
        (r.cache = !1),
        (this.o = r.worker),
        (this.async = !1),
        (k = te())
      let M = v.index || v.field || v
      ke(M) && (M = [M])
      for (let F = 0, j, et; F < M.length; F++)
        (j = M[F]),
          ke(j) || ((et = j), (j = j.field)),
          (et = be(et) ? Object.assign({}, r, et) : r),
          this.o && ((k[j] = new Ie(et)), k[j].o || (this.o = !1)),
          this.o || (k[j] = new Rt(et, this.register)),
          (this.K[F] = sn(j, this.A)),
          (this.h[F] = j)
      if (this.C)
        for (r = v.store, ke(r) && (r = [r]), v = 0; v < r.length; v++) this.C[v] = sn(r[v], this.A)
      this.index = k
    }
    function sn(r, v) {
      let k = r.split(":"),
        M = 0
      for (let F = 0; F < k.length; F++)
        (r = k[F]),
          0 <= r.indexOf("[]") && (r = r.substring(0, r.length - 2)) && (v[M] = !0),
          r && (k[M++] = r)
      return M < k.length && (k.length = M), 1 < M ? k : k[0]
    }
    function Fn(r, v) {
      if (ke(v)) r = r[v]
      else for (let k = 0; r && k < v.length; k++) r = r[v[k]]
      return r
    }
    function Nn(r, v, k, M, F) {
      if (((r = r[F]), M === k.length - 1)) v[F] = r
      else if (r)
        if (r.constructor === Array)
          for (v = v[F] = Array(r.length), F = 0; F < r.length; F++) Nn(r, v, k, M, F)
        else (v = v[F] || (v[F] = te())), (F = k[++M]), Nn(r, v, k, M, F)
    }
    function Bn(r, v, k, M, F, j, et, it) {
      if ((r = r[et]))
        if (M === v.length - 1) {
          if (r.constructor === Array) {
            if (k[M]) {
              for (v = 0; v < r.length; v++) F.add(j, r[v], !0, !0)
              return
            }
            r = r.join(" ")
          }
          F.add(j, r, it, !0)
        } else if (r.constructor === Array)
          for (et = 0; et < r.length; et++) Bn(r, v, k, M, F, j, et, it)
        else (et = v[++M]), Bn(r, v, k, M, F, j, et, it)
    }
    ;(we = kn.prototype),
      (we.add = function (r, v, k) {
        if ((be(r) && ((v = r), (r = Fn(v, this.key))), v && (r || r === 0))) {
          if (!k && this.register[r]) return this.update(r, v)
          for (let M = 0, F, j; M < this.h.length; M++)
            (j = this.h[M]),
              (F = this.K[M]),
              ke(F) && (F = [F]),
              Bn(v, F, this.A, 0, this.index[j], r, F[0], k)
          if (this.I) {
            let M = Fn(v, this.I),
              F = te()
            ke(M) && (M = [M])
            for (let j = 0, et, it; j < M.length; j++)
              if (
                ((et = M[j]),
                !F[et] &&
                  ((F[et] = 1), (it = this.l[et] || (this.l[et] = [])), !k || !it.includes(r)) &&
                  ((it[it.length] = r), this.m))
              ) {
                let Y = this.register[r] || (this.register[r] = [])
                Y[Y.length] = it
              }
          }
          if (this.store && (!k || !this.store[r])) {
            let M
            if (this.C) {
              M = te()
              for (let F = 0, j; F < this.C.length; F++)
                (j = this.C[F]), ke(j) ? (M[j] = v[j]) : Nn(v, M, j, 0, j[0])
            }
            this.store[r] = M || v
          }
        }
        return this
      }),
      (we.append = function (r, v) {
        return this.add(r, v, !0)
      }),
      (we.update = function (r, v) {
        return this.remove(r).add(r, v)
      }),
      (we.remove = function (r) {
        if ((be(r) && (r = Fn(r, this.key)), this.register[r])) {
          for (
            var v = 0;
            v < this.h.length && (this.index[this.h[v]].remove(r, !this.o), !this.m);
            v++
          );
          if (this.I && !this.m)
            for (let k in this.l) {
              v = this.l[k]
              let M = v.indexOf(r)
              M !== -1 && (1 < v.length ? v.splice(M, 1) : delete this.l[k])
            }
          this.store && delete this.store[r], delete this.register[r]
        }
        return this
      }),
      (we.search = function (r, v, k, M) {
        k || (!v && be(r) ? ((k = r), (r = "")) : be(v) && ((k = v), (v = 0)))
        let F = [],
          j = [],
          et,
          it,
          Y,
          ot,
          lt,
          At,
          _t = 0
        if (k)
          if (k.constructor === Array) (Y = k), (k = null)
          else {
            if (
              ((r = k.query || r),
              (Y = (et = k.pluck) || k.index || k.field),
              (ot = k.tag),
              (it = this.store && k.enrich),
              (lt = k.bool === "and"),
              (v = k.limit || v || 100),
              (At = k.offset || 0),
              ot && (ke(ot) && (ot = [ot]), !r))
            ) {
              for (let vt = 0, zt; vt < ot.length; vt++)
                (zt = zn.call(this, ot[vt], v, At, it)) && ((F[F.length] = zt), _t++)
              return _t ? F : []
            }
            ke(Y) && (Y = [Y])
          }
        Y || (Y = this.h), (lt = lt && (1 < Y.length || (ot && 1 < ot.length)))
        let wt = !M && (this.o || this.async) && []
        for (let vt = 0, zt, Xt, je; vt < Y.length; vt++) {
          let ze
          if (
            ((Xt = Y[vt]),
            ke(Xt) ||
              ((ze = Xt),
              (Xt = ze.field),
              (r = ze.query || r),
              (v = ze.limit || v),
              (it = ze.enrich || it)),
            wt)
          )
            wt[vt] = this.index[Xt].searchAsync(r, v, ze || k)
          else {
            if (
              (M ? (zt = M[vt]) : (zt = this.index[Xt].search(r, v, ze || k)),
              (je = zt && zt.length),
              ot && je)
            ) {
              let Fe = [],
                An = 0
              lt && (Fe[0] = [zt])
              for (let qn = 0, _r, rr; qn < ot.length; qn++)
                (_r = ot[qn]),
                  (je = (rr = this.l[_r]) && rr.length) && (An++, (Fe[Fe.length] = lt ? [rr] : rr))
              An && ((zt = lt ? Ot(Fe, v || 100, At || 0) : It(zt, Fe)), (je = zt.length))
            }
            if (je) (j[_t] = Xt), (F[_t++] = zt)
            else if (lt) return []
          }
        }
        if (wt) {
          let vt = this
          return new Promise(function (zt) {
            Promise.all(wt).then(function (Xt) {
              zt(vt.search(r, v, k, Xt))
            })
          })
        }
        if (!_t) return []
        if (et && (!it || !this.store)) return F[0]
        for (let vt = 0, zt; vt < j.length; vt++) {
          if (((zt = F[vt]), zt.length && it && (zt = Hn.call(this, zt)), et)) return zt
          F[vt] = { field: j[vt], result: zt }
        }
        return F
      })
    function zn(r, v, k, M) {
      let F = this.l[r],
        j = F && F.length - k
      if (j && 0 < j)
        return (
          (j > v || k) && (F = F.slice(k, k + v)),
          M && (F = Hn.call(this, F)),
          { tag: r, result: F }
        )
    }
    function Hn(r) {
      let v = Array(r.length)
      for (let k = 0, M; k < r.length; k++) (M = r[k]), (v[k] = { id: M, doc: this.store[M] })
      return v
    }
    ;(we.contain = function (r) {
      return !!this.register[r]
    }),
      (we.get = function (r) {
        return this.store[r]
      }),
      (we.set = function (r, v) {
        return (this.store[r] = v), this
      }),
      (we.searchCache = ce),
      (we.export = function (r, v, k, M, F, j) {
        let et
        if (
          (typeof j > "u" &&
            (et = new Promise((it) => {
              j = it
            })),
          F || (F = 0),
          M || (M = 0),
          M < this.h.length)
        ) {
          let it = this.h[M],
            Y = this.index[it]
          ;(v = this),
            setTimeout(function () {
              Y.export(r, v, F ? it : "", M, F++, j) || (M++, (F = 1), v.export(r, v, it, M, F, j))
            })
        } else {
          let it, Y
          switch (F) {
            case 1:
              ;(it = "tag"), (Y = this.l), (k = null)
              break
            case 2:
              ;(it = "store"), (Y = this.store), (k = null)
              break
            default:
              j()
              return
          }
          Pe(r, this, k, it, M, F, Y, j)
        }
        return et
      }),
      (we.import = function (r, v) {
        if (v)
          switch ((ke(v) && (v = JSON.parse(v)), r)) {
            case "tag":
              this.l = v
              break
            case "reg":
              ;(this.m = !1), (this.register = v)
              for (let M = 0, F; M < this.h.length; M++)
                (F = this.index[this.h[M]]), (F.register = v), (F.m = !1)
              break
            case "store":
              this.store = v
              break
            default:
              r = r.split(".")
              let k = r[0]
              ;(r = r[1]), k && r && this.index[k].import(r, v)
          }
      }),
      Tt(kn.prototype)
    var d = { encode: T, F: !1, G: "" },
      B = [
        xe("[\xE0\xE1\xE2\xE3\xE4\xE5]"),
        "a",
        xe("[\xE8\xE9\xEA\xEB]"),
        "e",
        xe("[\xEC\xED\xEE\xEF]"),
        "i",
        xe("[\xF2\xF3\xF4\xF5\xF6\u0151]"),
        "o",
        xe("[\xF9\xFA\xFB\xFC\u0171]"),
        "u",
        xe("[\xFD\u0177\xFF]"),
        "y",
        xe("\xF1"),
        "n",
        xe("[\xE7c]"),
        "k",
        xe("\xDF"),
        "s",
        xe(" & "),
        " and ",
      ]
    function T(r) {
      var v = (r = "" + r)
      return (
        v.normalize && (v = v.normalize("NFD").replace(xn, "")),
        Ye.call(this, v.toLowerCase(), !r.normalize && B)
      )
    }
    var $ = { encode: ct, F: !1, G: "strict" },
      P = /[^a-z0-9]+/,
      tt = {
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
    function ct(r) {
      r = T.call(this, r).join(" ")
      let v = []
      if (r) {
        let k = r.split(P),
          M = k.length
        for (let F = 0, j, et = 0; F < M; F++)
          if ((r = k[F]) && (!this.filter || !this.filter[r])) {
            j = r[0]
            let it = tt[j] || j,
              Y = it
            for (let ot = 1; ot < r.length; ot++) {
              j = r[ot]
              let lt = tt[j] || j
              lt && lt !== Y && ((it += lt), (Y = lt))
            }
            v[et++] = it
          }
      }
      return v
    }
    var st = { encode: Vt, F: !1, G: "" },
      xt = [
        xe("ae"),
        "a",
        xe("oe"),
        "o",
        xe("sh"),
        "s",
        xe("th"),
        "t",
        xe("ph"),
        "f",
        xe("pf"),
        "f",
        xe("(?![aeo])h(?![aeo])"),
        "",
        xe("(?!^[aeo])h(?!^[aeo])"),
        "",
      ]
    function Vt(r, v) {
      return (
        r &&
          ((r = ct.call(this, r).join(" ")),
          2 < r.length && (r = Se(r, xt)),
          v || (1 < r.length && (r = We(r)), r && (r = r.split(" ")))),
        r || []
      )
    }
    var Gt = { encode: oe, F: !1, G: "" },
      ye = xe("(?!\\b)[aeo]")
    function oe(r) {
      return (
        r &&
          ((r = Vt.call(this, r, !0)),
          1 < r.length && (r = r.replace(ye, "")),
          1 < r.length && (r = We(r)),
          r && (r = r.split(" "))),
        r || []
      )
    }
    ;(Ct["latin:default"] = He),
      (Ct["latin:simple"] = d),
      (Ct["latin:balance"] = $),
      (Ct["latin:advanced"] = st),
      (Ct["latin:extra"] = Gt)
    var ee = {
      Index: Rt,
      Document: kn,
      Worker: Ie,
      registerCharset: function (r, v) {
        Ct[r] = v
      },
      registerLanguage: function (r, v) {
        mt[r] = v
      },
    }
    function Nt(r, v) {
      return v == null && ((v = r), (r = 0)), r + Math.floor(Math.random() * (v - r + 1))
    }
    function ae(r, v) {
      let k = [...r]
      var M = k.length
      v = Math.max(Math.min(v, M), 0)
      for (var F = M - 1, j = 0; j < v; j++) {
        var et = Nt(j, F),
          it = r[j]
        ;(k[j] = k[et]), (k[et] = it)
      }
      return k.slice(0, v)
    }
    var Te = "https://curius.app",
      ln = `${Te}/aaron-pham`,
      Re = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/,
      Oe = { method: "POST", headers: { "Content-Type": "application/json" } },
      nn = {
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
      Ln = {
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
      cn = (r) => Ln[r] ?? null
    function En(r) {
      let v = r.match(Re)
      return v ? v[1] : ""
    }
    function N(r) {
      let v = new Date(),
        k = r instanceof Date ? r : new Date(r),
        M = Math.floor((v.getTime() - k.getTime()) / 1e3),
        F = Math.floor(M / (3600 * 24)),
        j = Math.floor((M % (3600 * 24)) / 3600),
        et = Math.floor((M % 3600) / 60)
      return F > 1
        ? `${F} days ago`
        : F === 1
          ? "1 day ago"
          : j > 1
            ? `${j} hours ago`
            : j === 1
              ? "1 hour ago"
              : et > 1
                ? `${et} minutes ago`
                : et === 1
                  ? "1 minute ago"
                  : "just now"
    }
    var I = { Link: nn, elementType: "div", addFaIcon: !1 },
      a,
      f = (r) => {
        let { Link: v, elementType: k, addFaIcon: M } = { ...I, ...r }
        if (k === void 0) throw new Error("Element type is undefined")
        a = a || new DOMParser()
        let F = document.createElement(k)
        F.classList.add("curius-item-title")
        let j = document.createElement("div")
        j.classList.add("curius-item-link")
        let et = document.createElement("a")
        Object.assign(et, {
          href: v.link,
          target: "_blank",
          rel: "noopener noreferrer",
          innerHTML: v.title,
        }),
          j.appendChild(et)
        let it = document.createElement("div")
        if ((it.classList.add("curius-item-address"), (it.textContent = En(v.link)), M)) {
          let ot = document.createElement("div")
          switch ((ot.classList.add("curius-item-fa"), !0)) {
            case /twitter/.test(v.link):
              ot.innerHTML = cn("twitter")
              break
            case /youtube/.test(v.link):
              ot.innerHTML = cn("youtube")
              break
            case /github/.test(v.link):
              ot.innerHTML = cn("github")
              break
            case /arxiv/.test(v.link):
              ot.innerHTML = cn("arxiv")
              break
            default:
              ot.innerHTML = cn("default")
              break
          }
          F.appendChild(ot)
        }
        F.append(j, it)
        let Y = document.createElement("div")
        if ((Y.classList.add("curius-item-icons"), v.favorite)) {
          let ot = document.createElement("div")
          ot.classList.add("curius-item-favorite"),
            (ot.innerHTML = cn("favourite")),
            Y.appendChild(ot)
        }
        return F.appendChild(Y), F
      }
    async function p() {
      return fetch("https://raw.aarnphm.xyz/api/curius?query=following", Oe)
        .then((r) => r.json())
        .then((r) => {
          if (r === void 0 || r.following === void 0) throw new Error("No following data")
          return r.following
        })
    }
    async function x() {
      let r = await fetch("https://raw.aarnphm.xyz/api/curius?query=user", Oe)
          .then((k) => k.json())
          .then((k) => {
            if (k === void 0 || k.user === void 0) throw new Error("Failed to fetch user")
            return k.user
          }),
        v = await p()
      return {
        links: await fetch("https://raw.aarnphm.xyz/api/curius?query=links", Oe)
          .then((k) => k.json())
          .then((k) => {
            if (k === void 0 || k.links === void 0) throw new Error("Failed to fetch links")
            return k.links
          }),
        user: r,
        following: v,
      }
    }
    function _(r) {
      let v = new Map()
      return (
        (r.links ?? [])
          .filter((k) => k.trails.length > 0)
          .map((k) => {
            k.trails.map((M) => {
              v.has(M.trailName) || v.set(M.trailName, { trail: M, links: new Map() }),
                v.get(M.trailName).links.set(k.id, k)
            })
          }),
        v
      )
    }
    var L = (r) => {
      let v = document.getElementById("trail-list"),
        k = document.getElementsByClassName("curius-trail")[0]
      if (!v || !k) return
      let M = parseInt(k.dataset.limits) ?? 5,
        F = k.dataset.locale
      de(v)
      for (let [j, { trail: et, links: it }] of Array.from(r.entries()).slice(0, 4)) {
        let Y = Array.from(it.values()),
          ot = Math.max(0, Y.length - M)
        v.appendChild(q(j, Y.slice(0, M), et, ot, F))
      }
    }
    function q(r, v, k, M, F) {
      let j = document.createElement("li")
      j.classList.add("trails-li")
      let et = document.createElement("div")
      et.classList.add("curius-trail-header"),
        (et.innerHTML = `<span class="trail-title">sentier: ${r}</span><span class="trail-description">${k.description}</span>`)
      let it = `${Te}/trail/${k.slug}`,
        Y = document.createElement("ul")
      Y.classList.add("trail-ul"),
        Y.append(
          ...v.map((lt) => {
            let At = f({ Link: lt, elementType: "li" })
            return (
              Be(
                At,
                [
                  "mouseenter",
                  () => {
                    let _t = At.querySelector(".curius-item-favorite")
                    _t && _t.classList.add("focus"), At.classList.add("focus")
                  },
                ],
                [
                  "mouseleave",
                  () => {
                    let _t = At.querySelector(".curius-item-favorite")
                    _t && _t.classList.remove("focus"), At.classList.remove("focus")
                  },
                ],
                [
                  "click",
                  (_t) => {
                    _t.target instanceof HTMLAnchorElement || window.open(it, "_blank")
                  },
                ],
              ),
              At
            )
          }),
        )
      let ot = document.createElement("div")
      return (
        ot.classList.add("see-more"),
        (ot.innerHTML = `<span><a href=${it} target="_blank">${M > 0 ? fn(F).components.recentNotes.seeRemainingMore({ remaining: M }) : "Void de plus \u2192"}</a></span>`),
        j.append(et, Y, ot),
        j
      )
    }
    var z = new ee.Document({
        charset: "latin:advanced",
        document: {
          id: "id",
          index: [...Object.keys(nn).map((r) => ({ field: r, tokenize: "forward" }))],
        },
      }),
      nt = 20,
      J = 30,
      ht = (r) => {
        let v = r.split(/\s+/).filter((M) => M.trim() !== ""),
          k = v.length
        if (k > 1) for (let M = 1; M < k; M++) v.push(v.slice(0, M + 1).join(" "))
        return v.sort((M, F) => F.length - M.length)
      }
    function U(r, v, k) {
      let M = ht(r),
        F = v.split(/\s+/).filter((Y) => Y !== ""),
        j = 0,
        et = F.length - 1
      if (k) {
        let Y = (_t) => M.some((wt) => _t.toLowerCase().startsWith(wt.toLowerCase())),
          ot = F.map(Y),
          lt = 0,
          At = 0
        for (let _t = 0; _t < Math.max(F.length - J, 0); _t++) {
          let wt = ot.slice(_t, _t + J).reduce((vt, zt) => vt + (zt ? 1 : 0), 0)
          wt >= lt && ((lt = wt), (At = _t))
        }
        ;(j = Math.max(At - J, 0)), (et = Math.min(j + 2 * J, F.length - 1)), (F = F.slice(j, et))
      }
      let it = F.map((Y) => {
        for (let ot of M)
          if (Y.toLowerCase().includes(ot.toLowerCase())) {
            let lt = new RegExp(ot.toLowerCase(), "gi")
            return Y.replace(lt, '<span class="highlight">$&</span>')
          }
        return Y
      }).join(" ")
      return `${j === 0 ? "" : "..."}${it}${et === F.length - 1 ? "" : "..."}`
    }
    async function Z(r) {
      let v = ae(r, 20),
        k = document.getElementById("curius-bar"),
        M = document.getElementById("curius-search-container")
      async function F(wt) {
        let vt = wt.target.value
        M?.classList.toggle("active", vt !== "")
        let zt =
            (await z?.searchAsync({
              query: vt,
              limit: nt,
              index: ["title", "snippet", "topics"],
            })) ?? [],
          Xt = (ze) => {
            let Fe = zt.filter((An) => An.field === ze)
            return Fe.length === 0 ? [] : [...Fe[0].result]
          },
          je = [...new Set([...Xt("title"), ...Xt("snippet"), ...Xt("topics")])].map((ze) =>
            j(vt, ze),
          )
        it(je)
      }
      let j = (wt, vt) => {
          let zt = r[vt]
          return { ...zt, title: U(wt, zt.title), snippet: U(wt, zt.snippet, !0) }
        },
        et = document.getElementsByClassName("curius-notes")[0]
      function it(wt) {
        M &&
          (de(M),
          wt.length === 0
            ? (M.innerHTML =
                '<a class="curius-search-link"><span class="curius-search-title">No results found.</span><p class="curius-search-snippet">Try another search term?</p></a>')
            : M?.append(...wt.map(_t)))
      }
      function Y(wt) {
        if (wt.key === "k" && (wt.ctrlKey || wt.metaKey)) {
          wt.preventDefault(),
            et?.classList.contains("active") && et.classList.remove("active"),
            M?.classList.contains("active") ? At() : lt(v)
          return
        }
        M?.classList.contains("active") &&
          (wt.key === "Enter"
            ? M?.contains(document.activeElement)
              ? document.activeElement.click()
              : document.getElementsByClassName("curius-search-link")[0]?.click()
            : wt.key === "ArrowUp" || (wt.shiftKey && wt.key === "Tab")
              ? (wt.preventDefault(),
                M?.contains(document.activeElement) &&
                  document.activeElement?.previousElementSibling?.focus())
              : (wt.key === "ArrowDown" || wt.key === "Tab") &&
                (wt.preventDefault(),
                M?.contains(document.activeElement)
                  ? document.activeElement?.nextElementSibling?.focus()
                  : document.getElementsByClassName("curius-search-link")[0]?.focus()))
      }
      function ot() {
        k?.classList.contains("active") ||
          (et?.classList.contains("active") && et.classList.remove("active"),
          M?.classList.contains("active") ? At() : lt(v))
      }
      function lt(wt) {
        M &&
          (M?.classList.add("active"),
          k?.focus(),
          k?.scrollIntoView({ behavior: "smooth" }),
          it(wt))
      }
      function At() {
        M && M.classList.remove("active"), k && (k.value = "")
      }
      function _t(wt) {
        let vt = document.createElement("a")
        vt.classList.add("curius-search-link"),
          (vt.target = "_blank"),
          (vt.href = wt.link),
          (vt.innerHTML = `<span class="curius-search-title">${wt.title}</span><p class="curius-search-snippet">${wt.snippet}</div>`)
        let zt = (Xt) => {
          Xt.altKey || Xt.ctrlKey || Xt.metaKey || Xt.shiftKey || At()
        }
        return (
          vt.addEventListener("click", zt),
          window.addCleanup(() => vt.removeEventListener("click", zt)),
          vt
        )
      }
      document.addEventListener("keydown", Y),
        window.addCleanup(() => document.removeEventListener("keydown", Y)),
        k?.addEventListener("input", F),
        window.addCleanup(() => k?.removeEventListener("input", F)),
        k?.addEventListener("click", ot),
        window.addCleanup(() => k?.removeEventListener("click", ot)),
        le(M, At),
        await Q(r)
    }
    async function Q(r) {
      let v = 0,
        k = []
      for (let M of r) k.push(z.addAsync(v++, { ...M }))
      return await Promise.all(k)
    }
    var R = 2 * 60 * 1e3,
      gt = null
    function kt(r) {
      let v = document.createElement("li")
      ;(v.id = `curius-item-${r.id}`), v.classList.add("curius-item")
      let k = (F) => {
        let j = document.createElement("div")
        j.classList.add("curius-item-metadata")
        let et = document.createElement("ul")
        et.classList.add("curius-item-tags"),
          (et.innerHTML =
            F.topics.length > 0
              ? `${F.topics.map((lt) => (lt.public ? `<li><a href="https://curius.app/aaron-pham/${lt.slug}" target="_blank">${lt.topic}</a></li>` : "")).join("")}`
              : "")
        let it = document.createElement("div")
        it.id = `curius-misc-${F.id}`
        let Y = document.createElement("span")
        Y.id = `curius-span-${F.id}`
        let ot = new Date(F.modifiedDate)
        if (
          ((Y.innerHTML = `<time datetime=${F.modifiedDate} title="${ot.toUTCString()}">${N(F.createdDate)}</time>`),
          it.appendChild(Y),
          F.highlights.length > 0)
        ) {
          let lt = document.createElement("div")
          ;(lt.id = `curius-highlights-${F.id}`),
            (lt.innerHTML = `${F.highlights.length} ${F.highlights.length > 0 ? "highlights" : "highlight"}`),
            it.appendChild(lt)
          let At = document.getElementById("highlight-modal"),
            _t = document.getElementById("highlight-modal-list")
          Be(
            lt,
            [
              "mouseenter",
              () => {
                let wt = F.highlights
                !At ||
                  !_t ||
                  ((_t.innerHTML = ""),
                  v.classList.remove("focus"),
                  wt.forEach((vt) => {
                    let zt = document.createElement("li")
                    ;(zt.textContent = vt.highlight), _t.appendChild(zt)
                  }),
                  (At.style.visibility = "visible"),
                  At.classList.add("active"))
              },
            ],
            [
              "mouseleave",
              () => {
                v.classList.add("focus"),
                  At && ((At.style.visibility = "hidden"), At.classList.remove("active"))
              },
            ],
            [
              "mousemove",
              ({ pageX: wt, pageY: vt }) => {
                v.classList.remove("focus"),
                  At &&
                    (At.classList.add("active"),
                    (At.style.left = `${wt + 10}px`),
                    (At.style.top = `${vt + 10}px`))
              },
            ],
          )
        }
        return j.append(et, it), j
      }
      v.append(f({ Link: r, addFaIcon: !0 }), k(r)), (v.dataset.items = JSON.stringify(!0))
      let M = (F) => {
        let j = document.getElementsByClassName("curius-notes")[0]
        if (!(F.altKey || F.ctrlKey || F.metaKey || F.shiftKey)) {
          if (
            (gt && gt.classList.remove("active"),
            j && j.classList.remove("active"),
            (gt = v),
            gt.classList.add("active"),
            r.highlights.length > 0)
          ) {
            if (!j) return
            j.classList.add("active"), $t(r, j, gt)
          }
          F.target instanceof HTMLAnchorElement ||
            j?.classList.contains("active") ||
            window.open(r.link, "_blank")
        }
      }
      return (
        le(v, () => v.classList.remove("active")),
        Be(
          v,
          ["click", M],
          [
            "mouseenter",
            () => {
              let F = v.querySelector(".curius-item-favorite")
              F && F.classList.add("focus"), v.classList.add("focus")
            },
          ],
          [
            "mouseleave",
            () => {
              let F = v.querySelector(".curius-item-favorite")
              F && F.classList.remove("focus"), v.classList.remove("focus")
            },
          ],
        ),
        v
      )
    }
    function $t(r, v, k) {
      let M = v.querySelector("#note-link"),
        F = v.querySelector(".curius-note-snippet"),
        j = v.querySelector(".curius-note-highlights")
      ;(M.innerHTML = `<span class="curius-item-span">${r.title}</span>`),
        (M.href = r.link),
        (M.target = "_blank"),
        (M.rel = "noopener noreferrer")
      let et = document.querySelector(".icon-container"),
        it = () => {
          v.classList.remove("active"), k.classList.remove("active")
        }
      if (
        (et?.addEventListener("click", it),
        window.addCleanup(() => et?.removeEventListener("click", it)),
        le(v, it),
        de(F),
        (F.textContent = r.metadata ? r.metadata.full_text : r.snippet),
        de(j),
        r.highlights.length !== 0)
      )
        for (let Y of r.highlights) {
          let ot = document.createElement("li"),
            lt = document.createElement("a")
          ;(lt.dataset.highlight = Y.id.toString()),
            (lt.href = `${r.link}?curius=${Y.userId}`),
            (lt.target = "_blank"),
            (lt.rel = "noopener noreferrer"),
            (lt.textContent = Y.highlight),
            ot.appendChild(lt),
            j.appendChild(ot)
        }
    }
    document.addEventListener("nav", async (r) => {
      if (r.detail.url !== "curius") return
      let v = [
        ".curius-container",
        "#curius-fetching-text",
        "#curius-fragments",
        ".navigation-container",
      ].map((_t) => document.querySelector(_t))
      if (v.some((_t) => _t === null)) return
      let [k, M, F, j] = v,
        et = document.querySelector(".curius-friends"),
        it = document.getElementsByClassName("curius-trail")[0]
      ;(M.textContent = "R\xE9cup\xE9ration des liens curius"), M.classList.toggle("active", !0)
      let Y = await x()
      M.classList.toggle("active", !1)
      let ot = (_t) =>
          _t.length === 0
            ? ((k.innerHTML = "<p>\xC9chec de la r\xE9cup\xE9ration des liens.</p>"), [])
            : _t.filter((wt) => wt.trails.length === 0),
        lt = ot(Y.links)
      if (lt.length === 0) return
      L(_(Y)),
        await Z(lt),
        F.append(...lt.map(kt)),
        j.classList.toggle("active", !0),
        et && et.classList.toggle("active", !0),
        it && it.classList.toggle("active", !0)
      let At = document.getElementById("curius-refetch")
      if (At) {
        let _t = (zt) => {
          let Xt = document.getElementById("curius-refetch")
          !Xt ||
            !Xt.classList.contains("disabled") ||
            ((zt.key === "r" || zt.key === "R") &&
              (zt.ctrlKey || zt.metaKey) &&
              (zt.preventDefault(), zt.stopPropagation()))
        }
        document.addEventListener("keydown", _t),
          window.addCleanup(() => document.removeEventListener("keydown", _t))
        let wt = !1,
          vt = async () => {
            if (wt) return
            let zt = document.getElementById("curius-search-container")
            zt?.classList.contains("active") && zt.classList.remove("active"),
              At.classList.add("disabled"),
              (At.style.opacity = "0.5")
            let Xt = document.getElementById("trail-list"),
              je = document.getElementsByClassName("curius-notes")[0]
            de(F),
              de(Xt),
              je?.classList.toggle("active", !1),
              j.classList.toggle("active", !1),
              et?.classList.toggle("active", !1),
              it?.classList.toggle("active", !1),
              M.classList.toggle("active", !0),
              (M.textContent = "Rafra\xEEchissement des liens curius")
            let ze = await x()
            M.classList.toggle("active", !1), L(_(ze))
            let Fe = ot(ze.links)
            Fe.length !== 0 &&
              (await Z(ze.links),
              F.append(...Fe.map(kt)),
              j.classList.toggle("active", !0),
              et?.classList.toggle("active", !0),
              it?.classList.toggle("active", !0),
              (wt = !0),
              setTimeout(() => {
                At.classList.remove("disabled"), (wt = !1)
              }, R))
          }
        At.addEventListener("click", vt),
          window.addCleanup(() => At.removeEventListener("click", vt)),
          Be(
            At,
            [
              "mouseenter",
              () => (At.style.opacity = At.classList.contains("disabled") ? "0.5" : "1"),
            ],
            [
              "mouseleave",
              () => (At.style.opacity = At.classList.contains("disabled") ? "0.5" : "1"),
            ],
          )
      }
    })
  })(),
  (function () {
    var De = (d, B) => () => (B || d((B = { exports: {} }).exports, B), B.exports),
      fe = De(() => {})
    function le(d) {
      for (; d.firstChild; ) d.removeChild(d.firstChild)
    }
    function de(d, ...B) {
      Be(
        d,
        ["mouseenter", () => d.classList.add(...B)],
        ["mouseleave", () => d.classList.remove(...B)],
      )
    }
    function Be(d, ...B) {
      d &&
        B.forEach(([T, $]) => {
          let P = (tt) => $(tt)
          d.addEventListener(T, P), window.addCleanup(() => d.removeEventListener(T, P))
        })
    }
    var Qt
    function $e(d) {
      return typeof d < "u" ? d : !0
    }
    function Ue(d) {
      let B = Array(d)
      for (let T = 0; T < d; T++) B[T] = Jt()
      return B
    }
    function Jt() {
      return Object.create(null)
    }
    function an(d, B) {
      return B.length - d.length
    }
    function pe(d) {
      return typeof d == "string"
    }
    function Ut(d) {
      return typeof d == "object"
    }
    function Ne(d) {
      return typeof d == "function"
    }
    function Le(d, B) {
      var T = Kt
      if (
        d &&
        (B && (d = ve(d, B)),
        this.H && (d = ve(d, this.H)),
        this.J && 1 < d.length && (d = ve(d, this.J)),
        T || T === "")
      ) {
        if (((B = d.split(T)), this.filter)) {
          ;(d = this.filter), (T = B.length)
          let $ = []
          for (let P = 0, tt = 0; P < T; P++) {
            let ct = B[P]
            ct && !d[ct] && ($[tt++] = ct)
          }
          d = $
        } else d = B
        return d
      }
      return d
    }
    var Kt = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
      yn = /[\u0300-\u036f]/g
    function _e(d, B) {
      let T = Object.keys(d),
        $ = T.length,
        P = [],
        tt = "",
        ct = 0
      for (let st = 0, xt, Vt; st < $; st++)
        (xt = T[st]),
          (Vt = d[xt])
            ? ((P[ct++] = ne(B ? "(?!\\b)" + xt + "(\\b|_)" : xt)), (P[ct++] = Vt))
            : (tt += (tt ? "|" : "") + xt)
      return (
        tt && ((P[ct++] = ne(B ? "(?!\\b)(" + tt + ")(\\b|_)" : "(" + tt + ")")), (P[ct] = "")), P
      )
    }
    function ve(d, B) {
      for (let T = 0, $ = B.length; T < $ && ((d = d.replace(B[T], B[T + 1])), d); T += 2);
      return d
    }
    function ne(d) {
      return new RegExp(d, "g")
    }
    function Je(d) {
      let B = "",
        T = ""
      for (let $ = 0, P = d.length, tt; $ < P; $++) (tt = d[$]) !== T && (B += T = tt)
      return B
    }
    var vn = { encode: Qe, F: !1, G: "" }
    function Qe(d) {
      return Le.call(this, ("" + d).toLowerCase(), !1)
    }
    var Xe = {},
      qe = {}
    function me(d) {
      fn(d, "add"), fn(d, "append"), fn(d, "search"), fn(d, "update"), fn(d, "remove")
    }
    function fn(d, B) {
      d[B + "Async"] = function () {
        let T = this,
          $ = arguments
        var P = $[$.length - 1]
        let tt
        return (
          Ne(P) && ((tt = P), delete $[$.length - 1]),
          (P = new Promise(function (ct) {
            setTimeout(function () {
              T.async = !0
              let st = T[B].apply(T, $)
              ;(T.async = !1), ct(st)
            })
          })),
          tt ? (P.then(tt), this) : P
        )
      }
    }
    function we(d, B, T, $) {
      let P = d.length,
        tt = [],
        ct,
        st,
        xt = 0
      $ && ($ = [])
      for (let Vt = P - 1; 0 <= Vt; Vt--) {
        let Gt = d[Vt],
          ye = Gt.length,
          oe = Jt(),
          ee = !ct
        for (let Nt = 0; Nt < ye; Nt++) {
          let ae = Gt[Nt],
            Te = ae.length
          if (Te)
            for (let ln = 0, Re, Oe; ln < Te; ln++)
              if (((Oe = ae[ln]), ct)) {
                if (ct[Oe]) {
                  if (!Vt) {
                    if (T) T--
                    else if (((tt[xt++] = Oe), xt === B)) return tt
                  }
                  ;(Vt || $) && (oe[Oe] = 1), (ee = !0)
                }
                if ($ && ((Re = (st[Oe] || 0) + 1), (st[Oe] = Re), Re < P)) {
                  let nn = $[Re - 2] || ($[Re - 2] = [])
                  nn[nn.length] = Oe
                }
              } else oe[Oe] = 1
        }
        if ($) ct || (st = oe)
        else if (!ee) return []
        ct = oe
      }
      if ($)
        for (let Vt = $.length - 1, Gt, ye; 0 <= Vt; Vt--) {
          ;(Gt = $[Vt]), (ye = Gt.length)
          for (let oe = 0, ee; oe < ye; oe++)
            if (((ee = Gt[oe]), !ct[ee])) {
              if (T) T--
              else if (((tt[xt++] = ee), xt === B)) return tt
              ct[ee] = 1
            }
        }
      return tt
    }
    function dn(d, B) {
      let T = Jt(),
        $ = Jt(),
        P = []
      for (let tt = 0; tt < d.length; tt++) T[d[tt]] = 1
      for (let tt = 0, ct; tt < B.length; tt++) {
        ct = B[tt]
        for (let st = 0, xt; st < ct.length; st++)
          (xt = ct[st]), T[xt] && !$[xt] && (($[xt] = 1), (P[P.length] = xt))
      }
      return P
    }
    function Ze(d) {
      ;(this.l = d !== !0 && d), (this.cache = Jt()), (this.h = [])
    }
    function te(d, B, T) {
      Ut(d) && (d = d.query)
      let $ = this.cache.get(d)
      return $ || (($ = this.search(d, B, T)), this.cache.set(d, $)), $
    }
    ;(Ze.prototype.set = function (d, B) {
      if (!this.cache[d]) {
        var T = this.h.length
        for (T === this.l ? delete this.cache[this.h[T - 1]] : T++, --T; 0 < T; T--)
          this.h[T] = this.h[T - 1]
        this.h[0] = d
      }
      this.cache[d] = B
    }),
      (Ze.prototype.get = function (d) {
        let B = this.cache[d]
        if (this.l && B && (d = this.h.indexOf(d))) {
          let T = this.h[d - 1]
          ;(this.h[d - 1] = this.h[d]), (this.h[d] = T)
        }
        return B
      })
    var Dn = {
      memory: { charset: "latin:extra", D: 3, B: 4, m: !1 },
      performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } },
      match: { charset: "latin:extra", G: "reverse" },
      score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } },
      default: {},
    }
    function ke(d, B, T, $, P, tt, ct, st) {
      setTimeout(function () {
        let xt = d(T ? T + "." + $ : $, JSON.stringify(ct))
        xt && xt.then
          ? xt.then(function () {
              B.export(d, B, T, P, tt + 1, st)
            })
          : B.export(d, B, T, P, tt + 1, st)
      })
    }
    function be(d, B) {
      if (!(this instanceof be)) return new be(d)
      var T
      if (d) {
        pe(d) ? (d = Dn[d]) : (T = d.preset) && (d = Object.assign({}, T[T], d)), (T = d.charset)
        var $ = d.lang
        pe(T) && (T.indexOf(":") === -1 && (T += ":default"), (T = qe[T])), pe($) && ($ = Xe[$])
      } else d = {}
      let P,
        tt,
        ct = d.context || {}
      if (
        ((this.encode = d.encode || (T && T.encode) || Qe),
        (this.register = B || Jt()),
        (this.D = P = d.resolution || 9),
        (this.G = B = (T && T.G) || d.tokenize || "strict"),
        (this.depth = B === "strict" && ct.depth),
        (this.l = $e(ct.bidirectional)),
        (this.s = tt = $e(d.optimize)),
        (this.m = $e(d.fastupdate)),
        (this.B = d.minlength || 1),
        (this.C = d.boost),
        (this.map = tt ? Ue(P) : Jt()),
        (this.A = P = ct.resolution || 1),
        (this.h = tt ? Ue(P) : Jt()),
        (this.F = (T && T.F) || d.rtl),
        (this.H = (B = d.matcher || ($ && $.H)) && _e(B, !1)),
        (this.J = (B = d.stemmer || ($ && $.J)) && _e(B, !0)),
        (T = B = d.filter || ($ && $.filter)))
      ) {
        ;(T = B), ($ = Jt())
        for (let st = 0, xt = T.length; st < xt; st++) $[T[st]] = 1
        T = $
      }
      ;(this.filter = T), (this.cache = (B = d.cache) && new Ze(B))
    }
    ;(Qt = be.prototype),
      (Qt.append = function (d, B) {
        return this.add(d, B, !0)
      }),
      (Qt.add = function (d, B, T, $) {
        if (B && (d || d === 0)) {
          if (!$ && !T && this.register[d]) return this.update(d, B)
          if (((B = this.encode(B)), ($ = B.length))) {
            let Vt = Jt(),
              Gt = Jt(),
              ye = this.depth,
              oe = this.D
            for (let ee = 0; ee < $; ee++) {
              let Nt = B[this.F ? $ - 1 - ee : ee]
              var P = Nt.length
              if (Nt && P >= this.B && (ye || !Gt[Nt])) {
                var tt = tn(oe, $, ee),
                  ct = ""
                switch (this.G) {
                  case "full":
                    if (2 < P) {
                      for (tt = 0; tt < P; tt++)
                        for (var st = P; st > tt; st--)
                          if (st - tt >= this.B) {
                            var xt = tn(oe, $, ee, P, tt)
                            ;(ct = Nt.substring(tt, st)), Ye(this, Gt, ct, xt, d, T)
                          }
                      break
                    }
                  case "reverse":
                    if (1 < P) {
                      for (st = P - 1; 0 < st; st--)
                        (ct = Nt[st] + ct),
                          ct.length >= this.B && Ye(this, Gt, ct, tn(oe, $, ee, P, st), d, T)
                      ct = ""
                    }
                  case "forward":
                    if (1 < P) {
                      for (st = 0; st < P; st++)
                        (ct += Nt[st]), ct.length >= this.B && Ye(this, Gt, ct, tt, d, T)
                      break
                    }
                  default:
                    if (
                      (this.C && (tt = Math.min((tt / this.C(B, Nt, ee)) | 0, oe - 1)),
                      Ye(this, Gt, Nt, tt, d, T),
                      ye && 1 < $ && ee < $ - 1)
                    ) {
                      for (
                        P = Jt(),
                          ct = this.A,
                          tt = Nt,
                          st = Math.min(ye + 1, $ - ee),
                          P[tt] = 1,
                          xt = 1;
                        xt < st;
                        xt++
                      )
                        if (
                          (Nt = B[this.F ? $ - 1 - ee - xt : ee + xt]) &&
                          Nt.length >= this.B &&
                          !P[Nt]
                        ) {
                          P[Nt] = 1
                          let ae = this.l && Nt > tt
                          Ye(
                            this,
                            Vt,
                            ae ? tt : Nt,
                            tn(ct + ($ / 2 > ct ? 0 : 1), $, ee, st - 1, xt - 1),
                            d,
                            T,
                            ae ? Nt : tt,
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
    function tn(d, B, T, $, P) {
      return T && 1 < d
        ? B + ($ || 0) <= d
          ? T + (P || 0)
          : (((d - 1) / (B + ($ || 0))) * (T + (P || 0)) + 1) | 0
        : 0
    }
    function Ye(d, B, T, $, P, tt, ct) {
      let st = ct ? d.h : d.map
      ;(!B[T] || (ct && !B[T][ct])) &&
        (d.s && (st = st[$]),
        ct
          ? ((B = B[T] || (B[T] = Jt())), (B[ct] = 1), (st = st[ct] || (st[ct] = Jt())))
          : (B[T] = 1),
        (st = st[T] || (st[T] = [])),
        d.s || (st = st[$] || (st[$] = [])),
        (tt && st.includes(P)) ||
          ((st[st.length] = P),
          d.m && ((d = d.register[P] || (d.register[P] = [])), (d[d.length] = st))))
    }
    Qt.search = function (d, B, T) {
      T || (!B && Ut(d) ? ((T = d), (d = T.query)) : Ut(B) && (T = B))
      let $ = [],
        P,
        tt,
        ct = 0
      if (T) {
        ;(d = T.query || d), (B = T.limit), (ct = T.offset || 0)
        var st = T.context
        tt = T.suggest
      }
      if (d && ((d = this.encode("" + d)), (P = d.length), 1 < P)) {
        T = Jt()
        var xt = []
        for (let Gt = 0, ye = 0, oe; Gt < P; Gt++)
          if ((oe = d[Gt]) && oe.length >= this.B && !T[oe])
            if (this.s || tt || this.map[oe]) (xt[ye++] = oe), (T[oe] = 1)
            else return $
        ;(d = xt), (P = d.length)
      }
      if (!P) return $
      B || (B = 100), (st = this.depth && 1 < P && st !== !1), (T = 0)
      let Vt
      st ? ((Vt = d[0]), (T = 1)) : 1 < P && d.sort(an)
      for (let Gt, ye; T < P; T++) {
        if (
          ((ye = d[T]),
          st
            ? ((Gt = wn(this, $, tt, B, ct, P === 2, ye, Vt)),
              (tt && Gt === !1 && $.length) || (Vt = ye))
            : (Gt = wn(this, $, tt, B, ct, P === 1, ye)),
          Gt)
        )
          return Gt
        if (tt && T === P - 1) {
          if (((xt = $.length), !xt)) {
            if (st) {
              ;(st = 0), (T = -1)
              continue
            }
            return $
          }
          if (xt === 1) return xn($[0], B, ct)
        }
      }
      return we($, B, ct, tt)
    }
    function wn(d, B, T, $, P, tt, ct, st) {
      let xt = [],
        Vt = st ? d.h : d.map
      if ((d.s || (Vt = un(Vt, ct, st, d.l)), Vt)) {
        let Gt = 0,
          ye = Math.min(Vt.length, st ? d.A : d.D)
        for (
          let oe = 0, ee = 0, Nt, ae;
          oe < ye &&
          !(
            (Nt = Vt[oe]) &&
            (d.s && (Nt = un(Nt, ct, st, d.l)),
            P &&
              Nt &&
              tt &&
              ((ae = Nt.length),
              ae <= P ? ((P -= ae), (Nt = null)) : ((Nt = Nt.slice(P)), (P = 0))),
            Nt && ((xt[Gt++] = Nt), tt && ((ee += Nt.length), ee >= $)))
          );
          oe++
        );
        if (Gt) {
          if (tt) return xn(xt, $, 0)
          B[B.length] = xt
          return
        }
      }
      return !T && xt
    }
    function xn(d, B, T) {
      return (
        (d = d.length === 1 ? d[0] : [].concat.apply([], d)),
        T || d.length > B ? d.slice(T, T + B) : d
      )
    }
    function un(d, B, T, $) {
      return T ? (($ = $ && B > T), (d = (d = d[$ ? B : T]) && d[$ ? T : B])) : (d = d[B]), d
    }
    ;(Qt.contain = function (d) {
      return !!this.register[d]
    }),
      (Qt.update = function (d, B) {
        return this.remove(d).add(d, B)
      }),
      (Qt.remove = function (d, B) {
        let T = this.register[d]
        if (T) {
          if (this.m) for (let $ = 0, P; $ < T.length; $++) (P = T[$]), P.splice(P.indexOf(d), 1)
          else Se(this.map, d, this.D, this.s), this.depth && Se(this.h, d, this.A, this.s)
          if ((B || delete this.register[d], this.cache)) {
            B = this.cache
            for (let $ = 0, P, tt; $ < B.h.length; $++)
              (tt = B.h[$]),
                (P = B.cache[tt]),
                P.includes(d) && (B.h.splice($--, 1), delete B.cache[tt])
          }
        }
        return this
      })
    function Se(d, B, T, $, P) {
      let tt = 0
      if (d.constructor === Array)
        if (P) (B = d.indexOf(B)), B !== -1 ? 1 < d.length && (d.splice(B, 1), tt++) : tt++
        else {
          P = Math.min(d.length, T)
          for (let ct = 0, st; ct < P; ct++)
            (st = d[ct]) && ((tt = Se(st, B, T, $, P)), $ || tt || delete d[ct])
        }
      else for (let ct in d) (tt = Se(d[ct], B, T, $, P)) || delete d[ct]
      return tt
    }
    ;(Qt.searchCache = te),
      (Qt.export = function (d, B, T, $, P, tt) {
        let ct = !0
        typeof tt > "u" &&
          (ct = new Promise((Vt) => {
            tt = Vt
          }))
        let st, xt
        switch (P || (P = 0)) {
          case 0:
            if (((st = "reg"), this.m)) {
              xt = Jt()
              for (let Vt in this.register) xt[Vt] = 1
            } else xt = this.register
            break
          case 1:
            ;(st = "cfg"), (xt = { doc: 0, opt: this.s ? 1 : 0 })
            break
          case 2:
            ;(st = "map"), (xt = this.map)
            break
          case 3:
            ;(st = "ctx"), (xt = this.h)
            break
          default:
            typeof T > "u" && tt && tt()
            return
        }
        return ke(d, B || this, T, st, $, P, xt, tt), ct
      }),
      (Qt.import = function (d, B) {
        if (B)
          switch ((pe(B) && (B = JSON.parse(B)), d)) {
            case "cfg":
              this.s = !!B.opt
              break
            case "reg":
              ;(this.m = !1), (this.register = B)
              break
            case "map":
              this.map = B
              break
            case "ctx":
              this.h = B
          }
      }),
      me(be.prototype)
    function xe(d) {
      d = d.data
      var B = self._index
      let T = d.args
      var $ = d.task
      switch ($) {
        case "init":
          ;($ = d.options || {}),
            (d = d.factory),
            (B = $.encode),
            ($.cache = !1),
            B && B.indexOf("function") === 0 && ($.encode = Function("return " + B)()),
            d
              ? (Function("return " + d)()(self),
                (self._index = new self.FlexSearch.Index($)),
                delete self.FlexSearch)
              : (self._index = new be($))
          break
        default:
          ;(d = d.id),
            (B = B[$].apply(B, T)),
            postMessage($ === "search" ? { id: d, msg: B } : { id: d })
      }
    }
    var We = 0
    function He(d) {
      if (!(this instanceof He)) return new He(d)
      var B
      d ? Ne((B = d.encode)) && (d.encode = B.toString()) : (d = {}),
        (B = (self || window)._factory) && (B = B.toString())
      let T = typeof window > "u" && self.exports,
        $ = this
      ;(this.o = mt(B, T, d.worker)),
        (this.h = Jt()),
        this.o &&
          (T
            ? this.o.on("message", function (P) {
                $.h[P.id](P.msg), delete $.h[P.id]
              })
            : (this.o.onmessage = function (P) {
                ;(P = P.data), $.h[P.id](P.msg), delete $.h[P.id]
              }),
          this.o.postMessage({ task: "init", factory: B, options: d }))
    }
    rt("add"), rt("append"), rt("search"), rt("update"), rt("remove")
    function rt(d) {
      He.prototype[d] = He.prototype[d + "Async"] = function () {
        let B = this,
          T = [].slice.call(arguments)
        var $ = T[T.length - 1]
        let P
        return (
          Ne($) && ((P = $), T.splice(T.length - 1, 1)),
          ($ = new Promise(function (tt) {
            setTimeout(function () {
              ;(B.h[++We] = tt), B.o.postMessage({ task: d, id: We, args: T })
            })
          })),
          P ? ($.then(P), this) : $
        )
      }
    }
    function mt(d, B, T) {
      let $
      try {
        $ = B
          ? new (fe().Worker)(__dirname + "/node/node.js")
          : d
            ? new Worker(
                URL.createObjectURL(
                  new Blob(["onmessage=" + xe.toString()], { type: "text/javascript" }),
                ),
              )
            : new Worker(pe(T) ? T : "worker/worker.js", { type: "module" })
      } catch {}
      return $
    }
    function Ct(d) {
      if (!(this instanceof Ct)) return new Ct(d)
      var B = d.document || d.doc || d,
        T
      ;(this.K = []),
        (this.h = []),
        (this.A = []),
        (this.register = Jt()),
        (this.key = ((T = B.key || B.id) && Tt(T, this.A)) || "id"),
        (this.m = $e(d.fastupdate)),
        (this.C = (T = B.store) && T !== !0 && []),
        (this.store = T && Jt()),
        (this.I = (T = B.tag) && Tt(T, this.A)),
        (this.l = T && Jt()),
        (this.cache = (T = d.cache) && new Ze(T)),
        (d.cache = !1),
        (this.o = d.worker),
        (this.async = !1),
        (T = Jt())
      let $ = B.index || B.field || B
      pe($) && ($ = [$])
      for (let P = 0, tt, ct; P < $.length; P++)
        (tt = $[P]),
          pe(tt) || ((ct = tt), (tt = tt.field)),
          (ct = Ut(ct) ? Object.assign({}, d, ct) : d),
          this.o && ((T[tt] = new He(ct)), T[tt].o || (this.o = !1)),
          this.o || (T[tt] = new be(ct, this.register)),
          (this.K[P] = Tt(tt, this.A)),
          (this.h[P] = tt)
      if (this.C)
        for (d = B.store, pe(d) && (d = [d]), B = 0; B < d.length; B++) this.C[B] = Tt(d[B], this.A)
      this.index = T
    }
    function Tt(d, B) {
      let T = d.split(":"),
        $ = 0
      for (let P = 0; P < T.length; P++)
        (d = T[P]),
          0 <= d.indexOf("[]") && (d = d.substring(0, d.length - 2)) && (B[$] = !0),
          d && (T[$++] = d)
      return $ < T.length && (T.length = $), 1 < $ ? T : T[0]
    }
    function Pt(d, B) {
      if (pe(B)) d = d[B]
      else for (let T = 0; d && T < B.length; T++) d = d[B[T]]
      return d
    }
    function Ot(d, B, T, $, P) {
      if (((d = d[P]), $ === T.length - 1)) B[P] = d
      else if (d)
        if (d.constructor === Array)
          for (B = B[P] = Array(d.length), P = 0; P < d.length; P++) Ot(d, B, T, $, P)
        else (B = B[P] || (B[P] = Jt())), (P = T[++$]), Ot(d, B, T, $, P)
    }
    function It(d, B, T, $, P, tt, ct, st) {
      if ((d = d[ct]))
        if ($ === B.length - 1) {
          if (d.constructor === Array) {
            if (T[$]) {
              for (B = 0; B < d.length; B++) P.add(tt, d[B], !0, !0)
              return
            }
            d = d.join(" ")
          }
          P.add(tt, d, st, !0)
        } else if (d.constructor === Array)
          for (ct = 0; ct < d.length; ct++) It(d, B, T, $, P, tt, ct, st)
        else (ct = B[++$]), It(d, B, T, $, P, tt, ct, st)
    }
    ;(Qt = Ct.prototype),
      (Qt.add = function (d, B, T) {
        if ((Ut(d) && ((B = d), (d = Pt(B, this.key))), B && (d || d === 0))) {
          if (!T && this.register[d]) return this.update(d, B)
          for (let $ = 0, P, tt; $ < this.h.length; $++)
            (tt = this.h[$]),
              (P = this.K[$]),
              pe(P) && (P = [P]),
              It(B, P, this.A, 0, this.index[tt], d, P[0], T)
          if (this.I) {
            let $ = Pt(B, this.I),
              P = Jt()
            pe($) && ($ = [$])
            for (let tt = 0, ct, st; tt < $.length; tt++)
              if (
                ((ct = $[tt]),
                !P[ct] &&
                  ((P[ct] = 1), (st = this.l[ct] || (this.l[ct] = [])), !T || !st.includes(d)) &&
                  ((st[st.length] = d), this.m))
              ) {
                let xt = this.register[d] || (this.register[d] = [])
                xt[xt.length] = st
              }
          }
          if (this.store && (!T || !this.store[d])) {
            let $
            if (this.C) {
              $ = Jt()
              for (let P = 0, tt; P < this.C.length; P++)
                (tt = this.C[P]), pe(tt) ? ($[tt] = B[tt]) : Ot(B, $, tt, 0, tt[0])
            }
            this.store[d] = $ || B
          }
        }
        return this
      }),
      (Qt.append = function (d, B) {
        return this.add(d, B, !0)
      }),
      (Qt.update = function (d, B) {
        return this.remove(d).add(d, B)
      }),
      (Qt.remove = function (d) {
        if ((Ut(d) && (d = Pt(d, this.key)), this.register[d])) {
          for (
            var B = 0;
            B < this.h.length && (this.index[this.h[B]].remove(d, !this.o), !this.m);
            B++
          );
          if (this.I && !this.m)
            for (let T in this.l) {
              B = this.l[T]
              let $ = B.indexOf(d)
              $ !== -1 && (1 < B.length ? B.splice($, 1) : delete this.l[T])
            }
          this.store && delete this.store[d], delete this.register[d]
        }
        return this
      }),
      (Qt.search = function (d, B, T, $) {
        T || (!B && Ut(d) ? ((T = d), (d = "")) : Ut(B) && ((T = B), (B = 0)))
        let P = [],
          tt = [],
          ct,
          st,
          xt,
          Vt,
          Gt,
          ye,
          oe = 0
        if (T)
          if (T.constructor === Array) (xt = T), (T = null)
          else {
            if (
              ((d = T.query || d),
              (xt = (ct = T.pluck) || T.index || T.field),
              (Vt = T.tag),
              (st = this.store && T.enrich),
              (Gt = T.bool === "and"),
              (B = T.limit || B || 100),
              (ye = T.offset || 0),
              Vt && (pe(Vt) && (Vt = [Vt]), !d))
            ) {
              for (let Nt = 0, ae; Nt < Vt.length; Nt++)
                (ae = ie.call(this, Vt[Nt], B, ye, st)) && ((P[P.length] = ae), oe++)
              return oe ? P : []
            }
            pe(xt) && (xt = [xt])
          }
        xt || (xt = this.h), (Gt = Gt && (1 < xt.length || (Vt && 1 < Vt.length)))
        let ee = !$ && (this.o || this.async) && []
        for (let Nt = 0, ae, Te, ln; Nt < xt.length; Nt++) {
          let Re
          if (
            ((Te = xt[Nt]),
            pe(Te) ||
              ((Re = Te),
              (Te = Re.field),
              (d = Re.query || d),
              (B = Re.limit || B),
              (st = Re.enrich || st)),
            ee)
          )
            ee[Nt] = this.index[Te].searchAsync(d, B, Re || T)
          else {
            if (
              ($ ? (ae = $[Nt]) : (ae = this.index[Te].search(d, B, Re || T)),
              (ln = ae && ae.length),
              Vt && ln)
            ) {
              let Oe = [],
                nn = 0
              Gt && (Oe[0] = [ae])
              for (let Ln = 0, cn, En; Ln < Vt.length; Ln++)
                (cn = Vt[Ln]),
                  (ln = (En = this.l[cn]) && En.length) && (nn++, (Oe[Oe.length] = Gt ? [En] : En))
              nn && ((ae = Gt ? we(Oe, B || 100, ye || 0) : dn(ae, Oe)), (ln = ae.length))
            }
            if (ln) (tt[oe] = Te), (P[oe++] = ae)
            else if (Gt) return []
          }
        }
        if (ee) {
          let Nt = this
          return new Promise(function (ae) {
            Promise.all(ee).then(function (Te) {
              ae(Nt.search(d, B, T, Te))
            })
          })
        }
        if (!oe) return []
        if (ct && (!st || !this.store)) return P[0]
        for (let Nt = 0, ae; Nt < tt.length; Nt++) {
          if (((ae = P[Nt]), ae.length && st && (ae = ce.call(this, ae)), ct)) return ae
          P[Nt] = { field: tt[Nt], result: ae }
        }
        return P
      })
    function ie(d, B, T, $) {
      let P = this.l[d],
        tt = P && P.length - T
      if (tt && 0 < tt)
        return (
          (tt > B || T) && (P = P.slice(T, T + B)),
          $ && (P = ce.call(this, P)),
          { tag: d, result: P }
        )
    }
    function ce(d) {
      let B = Array(d.length)
      for (let T = 0, $; T < d.length; T++) ($ = d[T]), (B[T] = { id: $, doc: this.store[$] })
      return B
    }
    ;(Qt.contain = function (d) {
      return !!this.register[d]
    }),
      (Qt.get = function (d) {
        return this.store[d]
      }),
      (Qt.set = function (d, B) {
        return (this.store[d] = B), this
      }),
      (Qt.searchCache = te),
      (Qt.export = function (d, B, T, $, P, tt) {
        let ct
        if (
          (typeof tt > "u" &&
            (ct = new Promise((st) => {
              tt = st
            })),
          P || (P = 0),
          $ || ($ = 0),
          $ < this.h.length)
        ) {
          let st = this.h[$],
            xt = this.index[st]
          ;(B = this),
            setTimeout(function () {
              xt.export(d, B, P ? st : "", $, P++, tt) ||
                ($++, (P = 1), B.export(d, B, st, $, P, tt))
            })
        } else {
          let st, xt
          switch (P) {
            case 1:
              ;(st = "tag"), (xt = this.l), (T = null)
              break
            case 2:
              ;(st = "store"), (xt = this.store), (T = null)
              break
            default:
              tt()
              return
          }
          ke(d, this, T, st, $, P, xt, tt)
        }
        return ct
      }),
      (Qt.import = function (d, B) {
        if (B)
          switch ((pe(B) && (B = JSON.parse(B)), d)) {
            case "tag":
              this.l = B
              break
            case "reg":
              ;(this.m = !1), (this.register = B)
              for (let $ = 0, P; $ < this.h.length; $++)
                (P = this.index[this.h[$]]), (P.register = B), (P.m = !1)
              break
            case "store":
              this.store = B
              break
            default:
              d = d.split(".")
              let T = d[0]
              ;(d = d[1]), T && d && this.index[T].import(d, B)
          }
      }),
      me(Ct.prototype)
    var Ce = { encode: Rt, F: !1, G: "" },
      Pe = [
        ne("[\xE0\xE1\xE2\xE3\xE4\xE5]"),
        "a",
        ne("[\xE8\xE9\xEA\xEB]"),
        "e",
        ne("[\xEC\xED\xEE\xEF]"),
        "i",
        ne("[\xF2\xF3\xF4\xF5\xF6\u0151]"),
        "o",
        ne("[\xF9\xFA\xFB\xFC\u0171]"),
        "u",
        ne("[\xFD\u0177\xFF]"),
        "y",
        ne("\xF1"),
        "n",
        ne("[\xE7c]"),
        "k",
        ne("\xDF"),
        "s",
        ne(" & "),
        " and ",
      ]
    function Rt(d) {
      var B = (d = "" + d)
      return (
        B.normalize && (B = B.normalize("NFD").replace(yn, "")),
        Le.call(this, B.toLowerCase(), !d.normalize && Pe)
      )
    }
    var ue = { encode: he, F: !1, G: "strict" },
      Ft = /[^a-z0-9]+/,
      qt = {
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
    function he(d) {
      d = Rt.call(this, d).join(" ")
      let B = []
      if (d) {
        let T = d.split(Ft),
          $ = T.length
        for (let P = 0, tt, ct = 0; P < $; P++)
          if ((d = T[P]) && (!this.filter || !this.filter[d])) {
            tt = d[0]
            let st = qt[tt] || tt,
              xt = st
            for (let Vt = 1; Vt < d.length; Vt++) {
              tt = d[Vt]
              let Gt = qt[tt] || tt
              Gt && Gt !== xt && ((st += Gt), (xt = Gt))
            }
            B[ct++] = st
          }
      }
      return B
    }
    var re = { encode: en, F: !1, G: "" },
      Ee = [
        ne("ae"),
        "a",
        ne("oe"),
        "o",
        ne("sh"),
        "s",
        ne("th"),
        "t",
        ne("ph"),
        "f",
        ne("pf"),
        "f",
        ne("(?![aeo])h(?![aeo])"),
        "",
        ne("(?!^[aeo])h(?!^[aeo])"),
        "",
      ]
    function en(d, B) {
      return (
        d &&
          ((d = he.call(this, d).join(" ")),
          2 < d.length && (d = ve(d, Ee)),
          B || (1 < d.length && (d = Je(d)), d && (d = d.split(" ")))),
        d || []
      )
    }
    var Ve = { encode: bn, F: !1, G: "" },
      Ie = ne("(?!\\b)[aeo]")
    function bn(d) {
      return (
        d &&
          ((d = en.call(this, d, !0)),
          1 < d.length && (d = d.replace(Ie, "")),
          1 < d.length && (d = Je(d)),
          d && (d = d.split(" "))),
        d || []
      )
    }
    ;(qe["latin:default"] = vn),
      (qe["latin:simple"] = Ce),
      (qe["latin:balance"] = ue),
      (qe["latin:advanced"] = re),
      (qe["latin:extra"] = Ve)
    var jn = {
        Index: be,
        Document: Ct,
        Worker: He,
        registerCharset: function (d, B) {
          qe[d] = B
        },
        registerLanguage: function (d, B) {
          Xe[d] = B
        },
      },
      kn = "https://curius.app",
      sn = `${kn}/aaron-pham`,
      Fn = { method: "POST", headers: { "Content-Type": "application/json" } },
      Nn = {
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
    function Bn(d) {
      let B = new Date(),
        T = d instanceof Date ? d : new Date(d),
        $ = Math.floor((B.getTime() - T.getTime()) / 1e3),
        P = Math.floor($ / (3600 * 24)),
        tt = Math.floor(($ % (3600 * 24)) / 3600),
        ct = Math.floor(($ % 3600) / 60)
      return P > 1
        ? `${P} days ago`
        : P === 1
          ? "1 day ago"
          : tt > 1
            ? `${tt} hours ago`
            : tt === 1
              ? "1 hour ago"
              : ct > 1
                ? `${ct} minutes ago`
                : ct === 1
                  ? "1 minute ago"
                  : "just now"
    }
    async function zn() {
      return fetch("https://raw.aarnphm.xyz/api/curius?query=following", Fn)
        .then((d) => d.json())
        .then((d) => {
          if (d === void 0 || d.following === void 0) throw new Error("No following data")
          return d.following
        })
    }
    var Hn = new jn.Document({
      charset: "latin:advanced",
      document: {
        id: "id",
        index: [...Object.keys(Nn).map((d) => ({ field: d, tokenize: "forward" }))],
      },
    })
    document.addEventListener("nav", async () => {
      let d = document.getElementById("friends-list"),
        B = document.getElementById("see-more-friends")
      if (!d) return
      let T = await zn()
      le(d),
        T.map((P, tt) => {
          let { user: ct, link: st } = P,
            xt = document.createElement("li")
          xt.classList.add("friend-li")
          let Vt = (ae) => {
            ae.target instanceof HTMLAnchorElement || window.open(st.link, "_blank")
          }
          xt.addEventListener("click", Vt),
            window.addCleanup(() => xt.removeEventListener("click", Vt)),
            de(xt, "focus"),
            tt < 4 ? xt.classList.add("active") : (xt.id = "inactive")
          let Gt = document.createElement("div")
          Gt.classList.add("friend-title")
          let ye = document.createElement("a")
          ye.classList.add("friend-name"),
            (ye.innerHTML = `${ct.firstName} ${ct.lastName}`),
            (ye.style.fontWeight = "bold"),
            (ye.href = `https://curius.app/${ct.userLink}`),
            (ye.target = "_blank")
          let oe = document.createElement("span")
          oe.id = `curius-span-${P.link.id}`
          let ee = new Date(st.modifiedDate)
          ;(oe.innerHTML = `<time datetime=${st.modifiedDate} title="${ee.toUTCString()}">${Bn(st.createdDate)}</time>`),
            Gt.append(ye, oe)
          let Nt = document.createElement("div")
          Nt.classList.add("friend-shortcut"),
            (Nt.innerHTML = `in <span style="color: var(--gray) !important">${st.title}</span>`),
            xt.append(Gt, Nt),
            d.appendChild(xt)
        })
      let $ = () => {
        let P = document.getElementById("friends-list"),
          tt = B?.querySelectorAll("svg")[0],
          ct = B?.querySelectorAll("span")[0],
          st = Array.from(P?.children).filter((xt) => xt.id === "inactive")
        B?.classList.contains("expand")
          ? (B.classList.remove("expand"),
            st.map((xt) => xt.classList.remove("active")),
            tt && (tt.classList.remove("fold"), (tt.viewBox.baseVal.y = -10)),
            ct && (ct.textContent = "de plus"))
          : (B?.classList.add("expand"),
            st.map((xt) => xt.classList.add("active")),
            tt && (tt.classList.add("fold"), (tt.viewBox.baseVal.y = 10)),
            ct && (ct.textContent = "moins"))
      }
      B?.addEventListener("click", $), window.addCleanup(() => B?.removeEventListener("click", $))
    })
  })(),
  (function () {
    var De = Object.create,
      fe = Object.defineProperty,
      le = Object.getOwnPropertyDescriptor,
      de = Object.getOwnPropertyNames,
      Be = Object.getPrototypeOf,
      Qt = Object.prototype.hasOwnProperty,
      $e = (N, I) => () => (I || N((I = { exports: {} }).exports, I), I.exports),
      Ue = (N, I, a, f) => {
        if ((I && typeof I == "object") || typeof I == "function")
          for (let p of de(I))
            !Qt.call(N, p) &&
              p !== a &&
              fe(N, p, { get: () => I[p], enumerable: !(f = le(I, p)) || f.enumerable })
        return N
      },
      Jt = (N, I, a) => (
        (a = N != null ? De(Be(N)) : {}),
        Ue(I || !N || !N.__esModule ? fe(a, "default", { value: N, enumerable: !0 }) : a, N)
      ),
      an = $e((N, I) => {
        "use strict"
        I.exports = f
        function a(x) {
          return x instanceof Buffer
            ? Buffer.from(x)
            : new x.constructor(x.buffer.slice(), x.byteOffset, x.length)
        }
        function f(x) {
          if (((x = x || {}), x.circles)) return p(x)
          let _ = new Map()
          if (
            (_.set(Date, (J) => new Date(J)),
            _.set(Map, (J, ht) => new Map(q(Array.from(J), ht))),
            _.set(Set, (J, ht) => new Set(q(Array.from(J), ht))),
            x.constructorHandlers)
          )
            for (let J of x.constructorHandlers) _.set(J[0], J[1])
          let L = null
          return x.proto ? nt : z
          function q(J, ht) {
            let U = Object.keys(J),
              Z = new Array(U.length)
            for (let Q = 0; Q < U.length; Q++) {
              let R = U[Q],
                gt = J[R]
              typeof gt != "object" || gt === null
                ? (Z[R] = gt)
                : gt.constructor !== Object && (L = _.get(gt.constructor))
                  ? (Z[R] = L(gt, ht))
                  : ArrayBuffer.isView(gt)
                    ? (Z[R] = a(gt))
                    : (Z[R] = ht(gt))
            }
            return Z
          }
          function z(J) {
            if (typeof J != "object" || J === null) return J
            if (Array.isArray(J)) return q(J, z)
            if (J.constructor !== Object && (L = _.get(J.constructor))) return L(J, z)
            let ht = {}
            for (let U in J) {
              if (Object.hasOwnProperty.call(J, U) === !1) continue
              let Z = J[U]
              typeof Z != "object" || Z === null
                ? (ht[U] = Z)
                : Z.constructor !== Object && (L = _.get(Z.constructor))
                  ? (ht[U] = L(Z, z))
                  : ArrayBuffer.isView(Z)
                    ? (ht[U] = a(Z))
                    : (ht[U] = z(Z))
            }
            return ht
          }
          function nt(J) {
            if (typeof J != "object" || J === null) return J
            if (Array.isArray(J)) return q(J, nt)
            if (J.constructor !== Object && (L = _.get(J.constructor))) return L(J, nt)
            let ht = {}
            for (let U in J) {
              let Z = J[U]
              typeof Z != "object" || Z === null
                ? (ht[U] = Z)
                : Z.constructor !== Object && (L = _.get(Z.constructor))
                  ? (ht[U] = L(Z, nt))
                  : ArrayBuffer.isView(Z)
                    ? (ht[U] = a(Z))
                    : (ht[U] = nt(Z))
            }
            return ht
          }
        }
        function p(x) {
          let _ = [],
            L = [],
            q = new Map()
          if (
            (q.set(Date, (U) => new Date(U)),
            q.set(Map, (U, Z) => new Map(nt(Array.from(U), Z))),
            q.set(Set, (U, Z) => new Set(nt(Array.from(U), Z))),
            x.constructorHandlers)
          )
            for (let U of x.constructorHandlers) q.set(U[0], U[1])
          let z = null
          return x.proto ? ht : J
          function nt(U, Z) {
            let Q = Object.keys(U),
              R = new Array(Q.length)
            for (let gt = 0; gt < Q.length; gt++) {
              let kt = Q[gt],
                $t = U[kt]
              if (typeof $t != "object" || $t === null) R[kt] = $t
              else if ($t.constructor !== Object && (z = q.get($t.constructor))) R[kt] = z($t, Z)
              else if (ArrayBuffer.isView($t)) R[kt] = a($t)
              else {
                let r = _.indexOf($t)
                r !== -1 ? (R[kt] = L[r]) : (R[kt] = Z($t))
              }
            }
            return R
          }
          function J(U) {
            if (typeof U != "object" || U === null) return U
            if (Array.isArray(U)) return nt(U, J)
            if (U.constructor !== Object && (z = q.get(U.constructor))) return z(U, J)
            let Z = {}
            _.push(U), L.push(Z)
            for (let Q in U) {
              if (Object.hasOwnProperty.call(U, Q) === !1) continue
              let R = U[Q]
              if (typeof R != "object" || R === null) Z[Q] = R
              else if (R.constructor !== Object && (z = q.get(R.constructor))) Z[Q] = z(R, J)
              else if (ArrayBuffer.isView(R)) Z[Q] = a(R)
              else {
                let gt = _.indexOf(R)
                gt !== -1 ? (Z[Q] = L[gt]) : (Z[Q] = J(R))
              }
            }
            return _.pop(), L.pop(), Z
          }
          function ht(U) {
            if (typeof U != "object" || U === null) return U
            if (Array.isArray(U)) return nt(U, ht)
            if (U.constructor !== Object && (z = q.get(U.constructor))) return z(U, ht)
            let Z = {}
            _.push(U), L.push(Z)
            for (let Q in U) {
              let R = U[Q]
              if (typeof R != "object" || R === null) Z[Q] = R
              else if (R.constructor !== Object && (z = q.get(R.constructor))) Z[Q] = z(R, ht)
              else if (ArrayBuffer.isView(R)) Z[Q] = a(R)
              else {
                let gt = _.indexOf(R)
                gt !== -1 ? (Z[Q] = L[gt]) : (Z[Q] = ht(R))
              }
            }
            return _.pop(), L.pop(), Z
          }
        }
      }),
      pe = Math.min,
      Ut = Math.max,
      Ne = Math.round,
      Le = (N) => ({ x: N, y: N }),
      Kt = { left: "right", right: "left", bottom: "top", top: "bottom" },
      yn = { start: "end", end: "start" }
    function _e(N, I, a) {
      return Ut(N, pe(I, a))
    }
    function ve(N, I) {
      return typeof N == "function" ? N(I) : N
    }
    function ne(N) {
      return N.split("-")[0]
    }
    function Je(N) {
      return N.split("-")[1]
    }
    function vn(N) {
      return N === "x" ? "y" : "x"
    }
    function Qe(N) {
      return N === "y" ? "height" : "width"
    }
    function Xe(N) {
      return ["top", "bottom"].includes(ne(N)) ? "y" : "x"
    }
    function qe(N) {
      return vn(Xe(N))
    }
    function me(N, I, a) {
      a === void 0 && (a = !1)
      let f = Je(N),
        p = qe(N),
        x = Qe(p),
        _ =
          p === "x"
            ? f === (a ? "end" : "start")
              ? "right"
              : "left"
            : f === "start"
              ? "bottom"
              : "top"
      return I.reference[x] > I.floating[x] && (_ = te(_)), [_, te(_)]
    }
    function fn(N) {
      let I = te(N)
      return [we(N), I, we(I)]
    }
    function we(N) {
      return N.replace(/start|end/g, (I) => yn[I])
    }
    function dn(N, I, a) {
      let f = ["left", "right"],
        p = ["right", "left"],
        x = ["top", "bottom"],
        _ = ["bottom", "top"]
      switch (N) {
        case "top":
        case "bottom":
          return a ? (I ? p : f) : I ? f : p
        case "left":
        case "right":
          return I ? x : _
        default:
          return []
      }
    }
    function Ze(N, I, a, f) {
      let p = Je(N),
        x = dn(ne(N), a === "start", f)
      return p && ((x = x.map((_) => _ + "-" + p)), I && (x = x.concat(x.map(we)))), x
    }
    function te(N) {
      return N.replace(/left|right|bottom|top/g, (I) => Kt[I])
    }
    function Dn(N) {
      return { top: 0, right: 0, bottom: 0, left: 0, ...N }
    }
    function ke(N) {
      return typeof N != "number" ? Dn(N) : { top: N, right: N, bottom: N, left: N }
    }
    function be(N) {
      let { x: I, y: a, width: f, height: p } = N
      return { width: f, height: p, top: a, left: I, right: I + f, bottom: a + p, x: I, y: a }
    }
    function tn(N, I, a) {
      let { reference: f, floating: p } = N,
        x = Xe(I),
        _ = qe(I),
        L = Qe(_),
        q = ne(I),
        z = x === "y",
        nt = f.x + f.width / 2 - p.width / 2,
        J = f.y + f.height / 2 - p.height / 2,
        ht = f[L] / 2 - p[L] / 2,
        U
      switch (q) {
        case "top":
          U = { x: nt, y: f.y - p.height }
          break
        case "bottom":
          U = { x: nt, y: f.y + f.height }
          break
        case "right":
          U = { x: f.x + f.width, y: J }
          break
        case "left":
          U = { x: f.x - p.width, y: J }
          break
        default:
          U = { x: f.x, y: f.y }
      }
      switch (Je(I)) {
        case "start":
          U[_] -= ht * (a && z ? -1 : 1)
          break
        case "end":
          U[_] += ht * (a && z ? -1 : 1)
          break
      }
      return U
    }
    var Ye = async (N, I, a) => {
      let {
          placement: f = "bottom",
          strategy: p = "absolute",
          middleware: x = [],
          platform: _,
        } = a,
        L = x.filter(Boolean),
        q = await (_.isRTL == null ? void 0 : _.isRTL(I)),
        z = await _.getElementRects({ reference: N, floating: I, strategy: p }),
        { x: nt, y: J } = tn(z, f, q),
        ht = f,
        U = {},
        Z = 0
      for (let Q = 0; Q < L.length; Q++) {
        let { name: R, fn: gt } = L[Q],
          {
            x: kt,
            y: $t,
            data: r,
            reset: v,
          } = await gt({
            x: nt,
            y: J,
            initialPlacement: f,
            placement: ht,
            strategy: p,
            middlewareData: U,
            rects: z,
            platform: _,
            elements: { reference: N, floating: I },
          })
        ;(nt = kt ?? nt),
          (J = $t ?? J),
          (U = { ...U, [R]: { ...U[R], ...r } }),
          v &&
            Z <= 50 &&
            (Z++,
            typeof v == "object" &&
              (v.placement && (ht = v.placement),
              v.rects &&
                (z =
                  v.rects === !0
                    ? await _.getElementRects({ reference: N, floating: I, strategy: p })
                    : v.rects),
              ({ x: nt, y: J } = tn(z, ht, q))),
            (Q = -1))
      }
      return { x: nt, y: J, placement: ht, strategy: p, middlewareData: U }
    }
    async function wn(N, I) {
      var a
      I === void 0 && (I = {})
      let { x: f, y: p, platform: x, rects: _, elements: L, strategy: q } = N,
        {
          boundary: z = "clippingAncestors",
          rootBoundary: nt = "viewport",
          elementContext: J = "floating",
          altBoundary: ht = !1,
          padding: U = 0,
        } = ve(I, N),
        Z = ke(U),
        Q = L[ht ? (J === "floating" ? "reference" : "floating") : J],
        R = be(
          await x.getClippingRect({
            element:
              (a = await (x.isElement == null ? void 0 : x.isElement(Q))) == null || a
                ? Q
                : Q.contextElement ||
                  (await (x.getDocumentElement == null
                    ? void 0
                    : x.getDocumentElement(L.floating))),
            boundary: z,
            rootBoundary: nt,
            strategy: q,
          }),
        ),
        gt = J === "floating" ? { ..._.floating, x: f, y: p } : _.reference,
        kt = await (x.getOffsetParent == null ? void 0 : x.getOffsetParent(L.floating)),
        $t = (await (x.isElement == null ? void 0 : x.isElement(kt)))
          ? (await (x.getScale == null ? void 0 : x.getScale(kt))) || { x: 1, y: 1 }
          : { x: 1, y: 1 },
        r = be(
          x.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await x.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: L,
                rect: gt,
                offsetParent: kt,
                strategy: q,
              })
            : gt,
        )
      return {
        top: (R.top - r.top + Z.top) / $t.y,
        bottom: (r.bottom - R.bottom + Z.bottom) / $t.y,
        left: (R.left - r.left + Z.left) / $t.x,
        right: (r.right - R.right + Z.right) / $t.x,
      }
    }
    var xn = function (N) {
      return (
        N === void 0 && (N = {}),
        {
          name: "flip",
          options: N,
          async fn(I) {
            var a, f
            let {
                placement: p,
                middlewareData: x,
                rects: _,
                initialPlacement: L,
                platform: q,
                elements: z,
              } = I,
              {
                mainAxis: nt = !0,
                crossAxis: J = !0,
                fallbackPlacements: ht,
                fallbackStrategy: U = "bestFit",
                fallbackAxisSideDirection: Z = "none",
                flipAlignment: Q = !0,
                ...R
              } = ve(N, I)
            if ((a = x.arrow) != null && a.alignmentOffset) return {}
            let gt = ne(p),
              kt = ne(L) === L,
              $t = await (q.isRTL == null ? void 0 : q.isRTL(z.floating)),
              r = ht || (kt || !Q ? [te(L)] : fn(L))
            !ht && Z !== "none" && r.push(...Ze(L, Q, Z, $t))
            let v = [L, ...r],
              k = await wn(I, R),
              M = [],
              F = ((f = x.flip) == null ? void 0 : f.overflows) || []
            if ((nt && M.push(k[gt]), J)) {
              let Y = me(p, _, $t)
              M.push(k[Y[0]], k[Y[1]])
            }
            if (((F = [...F, { placement: p, overflows: M }]), !M.every((Y) => Y <= 0))) {
              var j, et
              let Y = (((j = x.flip) == null ? void 0 : j.index) || 0) + 1,
                ot = v[Y]
              if (ot) return { data: { index: Y, overflows: F }, reset: { placement: ot } }
              let lt =
                (et = F.filter((At) => At.overflows[0] <= 0).sort(
                  (At, _t) => At.overflows[1] - _t.overflows[1],
                )[0]) == null
                  ? void 0
                  : et.placement
              if (!lt)
                switch (U) {
                  case "bestFit": {
                    var it
                    let At =
                      (it = F.map((_t) => [
                        _t.placement,
                        _t.overflows.filter((wt) => wt > 0).reduce((wt, vt) => wt + vt, 0),
                      ]).sort((_t, wt) => _t[1] - wt[1])[0]) == null
                        ? void 0
                        : it[0]
                    At && (lt = At)
                    break
                  }
                  case "initialPlacement":
                    lt = L
                    break
                }
              if (p !== lt) return { reset: { placement: lt } }
            }
            return {}
          },
        }
      )
    }
    function un(N) {
      let I = pe(...N.map((x) => x.left)),
        a = pe(...N.map((x) => x.top)),
        f = Ut(...N.map((x) => x.right)),
        p = Ut(...N.map((x) => x.bottom))
      return { x: I, y: a, width: f - I, height: p - a }
    }
    function Se(N) {
      let I = N.slice().sort((p, x) => p.y - x.y),
        a = [],
        f = null
      for (let p = 0; p < I.length; p++) {
        let x = I[p]
        !f || x.y - f.y > f.height / 2 ? a.push([x]) : a[a.length - 1].push(x), (f = x)
      }
      return a.map((p) => be(un(p)))
    }
    var xe = function (N) {
        return (
          N === void 0 && (N = {}),
          {
            name: "inline",
            options: N,
            async fn(I) {
              let { placement: a, elements: f, rects: p, platform: x, strategy: _ } = I,
                { padding: L = 2, x: q, y: z } = ve(N, I),
                nt = Array.from(
                  (await (x.getClientRects == null ? void 0 : x.getClientRects(f.reference))) || [],
                ),
                J = Se(nt),
                ht = be(un(nt)),
                U = ke(L)
              function Z() {
                if (J.length === 2 && J[0].left > J[1].right && q != null && z != null)
                  return (
                    J.find(
                      (R) =>
                        q > R.left - U.left &&
                        q < R.right + U.right &&
                        z > R.top - U.top &&
                        z < R.bottom + U.bottom,
                    ) || ht
                  )
                if (J.length >= 2) {
                  if (Xe(a) === "y") {
                    let et = J[0],
                      it = J[J.length - 1],
                      Y = ne(a) === "top",
                      ot = et.top,
                      lt = it.bottom,
                      At = Y ? et.left : it.left,
                      _t = Y ? et.right : it.right,
                      wt = _t - At,
                      vt = lt - ot
                    return {
                      top: ot,
                      bottom: lt,
                      left: At,
                      right: _t,
                      width: wt,
                      height: vt,
                      x: At,
                      y: ot,
                    }
                  }
                  let R = ne(a) === "left",
                    gt = Ut(...J.map((et) => et.right)),
                    kt = pe(...J.map((et) => et.left)),
                    $t = J.filter((et) => (R ? et.left === kt : et.right === gt)),
                    r = $t[0].top,
                    v = $t[$t.length - 1].bottom,
                    k = kt,
                    M = gt,
                    F = M - k,
                    j = v - r
                  return { top: r, bottom: v, left: k, right: M, width: F, height: j, x: k, y: r }
                }
                return ht
              }
              let Q = await x.getElementRects({
                reference: { getBoundingClientRect: Z },
                floating: f.floating,
                strategy: _,
              })
              return p.reference.x !== Q.reference.x ||
                p.reference.y !== Q.reference.y ||
                p.reference.width !== Q.reference.width ||
                p.reference.height !== Q.reference.height
                ? { reset: { rects: Q } }
                : {}
            },
          }
        )
      },
      We = function (N) {
        return (
          N === void 0 && (N = {}),
          {
            name: "shift",
            options: N,
            async fn(I) {
              let { x: a, y: f, placement: p } = I,
                {
                  mainAxis: x = !0,
                  crossAxis: _ = !1,
                  limiter: L = {
                    fn: (R) => {
                      let { x: gt, y: kt } = R
                      return { x: gt, y: kt }
                    },
                  },
                  ...q
                } = ve(N, I),
                z = { x: a, y: f },
                nt = await wn(I, q),
                J = Xe(ne(p)),
                ht = vn(J),
                U = z[ht],
                Z = z[J]
              if (x) {
                let R = ht === "y" ? "top" : "left",
                  gt = ht === "y" ? "bottom" : "right",
                  kt = U + nt[R],
                  $t = U - nt[gt]
                U = _e(kt, U, $t)
              }
              if (_) {
                let R = J === "y" ? "top" : "left",
                  gt = J === "y" ? "bottom" : "right",
                  kt = Z + nt[R],
                  $t = Z - nt[gt]
                Z = _e(kt, Z, $t)
              }
              let Q = L.fn({ ...I, [ht]: U, [J]: Z })
              return { ...Q, data: { x: Q.x - a, y: Q.y - f } }
            },
          }
        )
      }
    function He(N) {
      return Ct(N) ? (N.nodeName || "").toLowerCase() : "#document"
    }
    function rt(N) {
      var I
      return (N == null || (I = N.ownerDocument) == null ? void 0 : I.defaultView) || window
    }
    function mt(N) {
      var I
      return (I = (Ct(N) ? N.ownerDocument : N.document) || window.document) == null
        ? void 0
        : I.documentElement
    }
    function Ct(N) {
      return N instanceof Node || N instanceof rt(N).Node
    }
    function Tt(N) {
      return N instanceof Element || N instanceof rt(N).Element
    }
    function Pt(N) {
      return N instanceof HTMLElement || N instanceof rt(N).HTMLElement
    }
    function Ot(N) {
      return typeof ShadowRoot > "u" ? !1 : N instanceof ShadowRoot || N instanceof rt(N).ShadowRoot
    }
    function It(N) {
      let { overflow: I, overflowX: a, overflowY: f, display: p } = Ft(N)
      return (
        /auto|scroll|overlay|hidden|clip/.test(I + f + a) && !["inline", "contents"].includes(p)
      )
    }
    function ie(N) {
      return ["table", "td", "th"].includes(He(N))
    }
    function ce(N) {
      return [":popover-open", ":modal"].some((I) => {
        try {
          return N.matches(I)
        } catch {
          return !1
        }
      })
    }
    function Ce(N) {
      let I = Rt(),
        a = Tt(N) ? Ft(N) : N
      return (
        a.transform !== "none" ||
        a.perspective !== "none" ||
        (a.containerType ? a.containerType !== "normal" : !1) ||
        (!I && (a.backdropFilter ? a.backdropFilter !== "none" : !1)) ||
        (!I && (a.filter ? a.filter !== "none" : !1)) ||
        ["transform", "perspective", "filter"].some((f) => (a.willChange || "").includes(f)) ||
        ["paint", "layout", "strict", "content"].some((f) => (a.contain || "").includes(f))
      )
    }
    function Pe(N) {
      let I = he(N)
      for (; Pt(I) && !ue(I); ) {
        if (Ce(I)) return I
        if (ce(I)) return null
        I = he(I)
      }
      return null
    }
    function Rt() {
      return typeof CSS > "u" || !CSS.supports
        ? !1
        : CSS.supports("-webkit-backdrop-filter", "none")
    }
    function ue(N) {
      return ["html", "body", "#document"].includes(He(N))
    }
    function Ft(N) {
      return rt(N).getComputedStyle(N)
    }
    function qt(N) {
      return Tt(N)
        ? { scrollLeft: N.scrollLeft, scrollTop: N.scrollTop }
        : { scrollLeft: N.scrollX, scrollTop: N.scrollY }
    }
    function he(N) {
      if (He(N) === "html") return N
      let I = N.assignedSlot || N.parentNode || (Ot(N) && N.host) || mt(N)
      return Ot(I) ? I.host : I
    }
    function re(N) {
      let I = he(N)
      return ue(I) ? (N.ownerDocument ? N.ownerDocument.body : N.body) : Pt(I) && It(I) ? I : re(I)
    }
    function Ee(N, I, a) {
      var f
      I === void 0 && (I = []), a === void 0 && (a = !0)
      let p = re(N),
        x = p === ((f = N.ownerDocument) == null ? void 0 : f.body),
        _ = rt(p)
      return x
        ? I.concat(
            _,
            _.visualViewport || [],
            It(p) ? p : [],
            _.frameElement && a ? Ee(_.frameElement) : [],
          )
        : I.concat(p, Ee(p, [], a))
    }
    function en(N) {
      let I = Ft(N),
        a = parseFloat(I.width) || 0,
        f = parseFloat(I.height) || 0,
        p = Pt(N),
        x = p ? N.offsetWidth : a,
        _ = p ? N.offsetHeight : f,
        L = Ne(a) !== x || Ne(f) !== _
      return L && ((a = x), (f = _)), { width: a, height: f, $: L }
    }
    function Ve(N) {
      return Tt(N) ? N : N.contextElement
    }
    function Ie(N) {
      let I = Ve(N)
      if (!Pt(I)) return Le(1)
      let a = I.getBoundingClientRect(),
        { width: f, height: p, $: x } = en(I),
        _ = (x ? Ne(a.width) : a.width) / f,
        L = (x ? Ne(a.height) : a.height) / p
      return (
        (!_ || !Number.isFinite(_)) && (_ = 1),
        (!L || !Number.isFinite(L)) && (L = 1),
        { x: _, y: L }
      )
    }
    var bn = Le(0)
    function jn(N) {
      let I = rt(N)
      return !Rt() || !I.visualViewport
        ? bn
        : { x: I.visualViewport.offsetLeft, y: I.visualViewport.offsetTop }
    }
    function kn(N, I, a) {
      return I === void 0 && (I = !1), !a || (I && a !== rt(N)) ? !1 : I
    }
    function sn(N, I, a, f) {
      I === void 0 && (I = !1), a === void 0 && (a = !1)
      let p = N.getBoundingClientRect(),
        x = Ve(N),
        _ = Le(1)
      I && (f ? Tt(f) && (_ = Ie(f)) : (_ = Ie(N)))
      let L = kn(x, a, f) ? jn(x) : Le(0),
        q = (p.left + L.x) / _.x,
        z = (p.top + L.y) / _.y,
        nt = p.width / _.x,
        J = p.height / _.y
      if (x) {
        let ht = rt(x),
          U = f && Tt(f) ? rt(f) : f,
          Z = ht,
          Q = Z.frameElement
        for (; Q && f && U !== Z; ) {
          let R = Ie(Q),
            gt = Q.getBoundingClientRect(),
            kt = Ft(Q),
            $t = gt.left + (Q.clientLeft + parseFloat(kt.paddingLeft)) * R.x,
            r = gt.top + (Q.clientTop + parseFloat(kt.paddingTop)) * R.y
          ;(q *= R.x),
            (z *= R.y),
            (nt *= R.x),
            (J *= R.y),
            (q += $t),
            (z += r),
            (Z = rt(Q)),
            (Q = Z.frameElement)
        }
      }
      return be({ width: nt, height: J, x: q, y: z })
    }
    function Fn(N) {
      let { elements: I, rect: a, offsetParent: f, strategy: p } = N,
        x = p === "fixed",
        _ = mt(f),
        L = I ? ce(I.floating) : !1
      if (f === _ || (L && x)) return a
      let q = { scrollLeft: 0, scrollTop: 0 },
        z = Le(1),
        nt = Le(0),
        J = Pt(f)
      if ((J || (!J && !x)) && ((He(f) !== "body" || It(_)) && (q = qt(f)), Pt(f))) {
        let ht = sn(f)
        ;(z = Ie(f)), (nt.x = ht.x + f.clientLeft), (nt.y = ht.y + f.clientTop)
      }
      return {
        width: a.width * z.x,
        height: a.height * z.y,
        x: a.x * z.x - q.scrollLeft * z.x + nt.x,
        y: a.y * z.y - q.scrollTop * z.y + nt.y,
      }
    }
    function Nn(N) {
      return Array.from(N.getClientRects())
    }
    function Bn(N) {
      return sn(mt(N)).left + qt(N).scrollLeft
    }
    function zn(N) {
      let I = mt(N),
        a = qt(N),
        f = N.ownerDocument.body,
        p = Ut(I.scrollWidth, I.clientWidth, f.scrollWidth, f.clientWidth),
        x = Ut(I.scrollHeight, I.clientHeight, f.scrollHeight, f.clientHeight),
        _ = -a.scrollLeft + Bn(N),
        L = -a.scrollTop
      return (
        Ft(f).direction === "rtl" && (_ += Ut(I.clientWidth, f.clientWidth) - p),
        { width: p, height: x, x: _, y: L }
      )
    }
    function Hn(N, I) {
      let a = rt(N),
        f = mt(N),
        p = a.visualViewport,
        x = f.clientWidth,
        _ = f.clientHeight,
        L = 0,
        q = 0
      if (p) {
        ;(x = p.width), (_ = p.height)
        let z = Rt()
        ;(!z || (z && I === "fixed")) && ((L = p.offsetLeft), (q = p.offsetTop))
      }
      return { width: x, height: _, x: L, y: q }
    }
    function d(N, I) {
      let a = sn(N, !0, I === "fixed"),
        f = a.top + N.clientTop,
        p = a.left + N.clientLeft,
        x = Pt(N) ? Ie(N) : Le(1),
        _ = N.clientWidth * x.x,
        L = N.clientHeight * x.y,
        q = p * x.x,
        z = f * x.y
      return { width: _, height: L, x: q, y: z }
    }
    function B(N, I, a) {
      let f
      if (I === "viewport") f = Hn(N, a)
      else if (I === "document") f = zn(mt(N))
      else if (Tt(I)) f = d(I, a)
      else {
        let p = jn(N)
        f = { ...I, x: I.x - p.x, y: I.y - p.y }
      }
      return be(f)
    }
    function T(N, I) {
      let a = he(N)
      return a === I || !Tt(a) || ue(a) ? !1 : Ft(a).position === "fixed" || T(a, I)
    }
    function $(N, I) {
      let a = I.get(N)
      if (a) return a
      let f = Ee(N, [], !1).filter((L) => Tt(L) && He(L) !== "body"),
        p = null,
        x = Ft(N).position === "fixed",
        _ = x ? he(N) : N
      for (; Tt(_) && !ue(_); ) {
        let L = Ft(_),
          q = Ce(_)
        !q && L.position === "fixed" && (p = null),
          (
            x
              ? !q && !p
              : (!q &&
                  L.position === "static" &&
                  p &&
                  ["absolute", "fixed"].includes(p.position)) ||
                (It(_) && !q && T(N, _))
          )
            ? (f = f.filter((z) => z !== _))
            : (p = L),
          (_ = he(_))
      }
      return I.set(N, f), f
    }
    function P(N) {
      let { element: I, boundary: a, rootBoundary: f, strategy: p } = N,
        x = [...(a === "clippingAncestors" ? (ce(I) ? [] : $(I, this._c)) : [].concat(a)), f],
        _ = x[0],
        L = x.reduce(
          (q, z) => {
            let nt = B(I, z, p)
            return (
              (q.top = Ut(nt.top, q.top)),
              (q.right = pe(nt.right, q.right)),
              (q.bottom = pe(nt.bottom, q.bottom)),
              (q.left = Ut(nt.left, q.left)),
              q
            )
          },
          B(I, _, p),
        )
      return { width: L.right - L.left, height: L.bottom - L.top, x: L.left, y: L.top }
    }
    function tt(N) {
      let { width: I, height: a } = en(N)
      return { width: I, height: a }
    }
    function ct(N, I, a) {
      let f = Pt(I),
        p = mt(I),
        x = a === "fixed",
        _ = sn(N, !0, x, I),
        L = { scrollLeft: 0, scrollTop: 0 },
        q = Le(0)
      if (f || (!f && !x))
        if (((He(I) !== "body" || It(p)) && (L = qt(I)), f)) {
          let J = sn(I, !0, x, I)
          ;(q.x = J.x + I.clientLeft), (q.y = J.y + I.clientTop)
        } else p && (q.x = Bn(p))
      let z = _.left + L.scrollLeft - q.x,
        nt = _.top + L.scrollTop - q.y
      return { x: z, y: nt, width: _.width, height: _.height }
    }
    function st(N) {
      return Ft(N).position === "static"
    }
    function xt(N, I) {
      return !Pt(N) || Ft(N).position === "fixed" ? null : I ? I(N) : N.offsetParent
    }
    function Vt(N, I) {
      let a = rt(N)
      if (ce(N)) return a
      if (!Pt(N)) {
        let p = he(N)
        for (; p && !ue(p); ) {
          if (Tt(p) && !st(p)) return p
          p = he(p)
        }
        return a
      }
      let f = xt(N, I)
      for (; f && ie(f) && st(f); ) f = xt(f, I)
      return f && ue(f) && st(f) && !Ce(f) ? a : f || Pe(N) || a
    }
    var Gt = async function (N) {
      let I = this.getOffsetParent || Vt,
        a = this.getDimensions,
        f = await a(N.floating)
      return {
        reference: ct(N.reference, await I(N.floating), N.strategy),
        floating: { x: 0, y: 0, width: f.width, height: f.height },
      }
    }
    function ye(N) {
      return Ft(N).direction === "rtl"
    }
    var oe = {
        convertOffsetParentRelativeRectToViewportRelativeRect: Fn,
        getDocumentElement: mt,
        getClippingRect: P,
        getOffsetParent: Vt,
        getElementRects: Gt,
        getClientRects: Nn,
        getDimensions: tt,
        getScale: Ie,
        isElement: Tt,
        isRTL: ye,
      },
      ee = We,
      Nt = xn,
      ae = xe,
      Te = (N, I, a) => {
        let f = new Map(),
          p = { platform: oe, ...a },
          x = { ...p.platform, _c: f }
        return Ye(N, I, { ...p, platform: x })
      },
      ln = Object.hasOwnProperty,
      Re = Jt(an(), 1),
      Oe = (0, Re.default)(),
      nn = (N, I, a) => {
        let f = new URL(N.getAttribute(I), a)
        N.setAttribute(I, f.pathname + f.hash)
      }
    function Ln(N, I) {
      N.querySelectorAll('[href^="./"], [href^="../"]').forEach((a) => nn(a, "href", I)),
        N.querySelectorAll('[src^="./"], [src^="../"]').forEach((a) => nn(a, "src", I))
    }
    var cn = new DOMParser()
    async function En({ clientX: N, clientY: I }) {
      let a = this
      if (a.dataset.noPopover === "true") return
      async function f(Z) {
        let { x: Q, y: R } = await Te(a, Z, { middleware: [ae({ x: N, y: I }), ee(), Nt()] })
        Object.assign(Z.style, { left: `${Q}px`, top: `${R}px` })
      }
      let p = () => [...a.children].some((Z) => Z.classList.contains("popover"))
      if (p()) return f(a.lastChild)
      let x = new URL(document.location.href)
      ;(x.hash = ""), (x.search = "")
      let _ = new URL(a.href),
        L = _.hash
      if (((_.hash = ""), (_.search = ""), x.toString() === _.toString())) return
      let q = await fetch(`${_}`).catch((Z) => {
        console.error(Z)
      })
      if (p() || !q) return
      let [z] = q.headers.get("Content-Type").split(";"),
        [nt, J] = z.split("/"),
        ht = document.createElement("div")
      ht.classList.add("popover")
      let U = document.createElement("div")
      switch (
        (U.classList.add("popover-inner"),
        ht.appendChild(U),
        (U.dataset.contentType = z ?? void 0),
        nt)
      ) {
        case "image":
          let Z = document.createElement("img")
          ;(Z.src = _.toString()), (Z.alt = _.pathname), U.appendChild(Z)
          break
        case "application":
          switch (J) {
            case "pdf":
              let kt = document.createElement("iframe")
              ;(kt.src = _.toString()), U.appendChild(kt)
              break
            default:
              break
          }
          break
        default:
          let Q = await q.text(),
            R = cn.parseFromString(Q, "text/html")
          Ln(R, _)
          let gt
          if (R.body.dataset.enablePreview === "false") {
            let kt = document.createElement("div")
            ;(kt.innerHTML = "<p>L'aper\xE7u est d\xE9sactiv\xE9 sur cette page.</p>"), (gt = [kt])
          } else gt = [...R.getElementsByClassName("popover-hint")]
          if (gt.length === 0) return
          gt.forEach((kt) => U.appendChild(kt))
      }
      if ((f(ht), a.appendChild(ht), L !== "")) {
        let Z = U.querySelector(L)
        Z && U.scroll({ top: Z.offsetTop - 12, behavior: "instant" })
      }
    }
    document.addEventListener("nav", () => {
      let N = [...document.getElementsByClassName("internal")]
      for (let I of N)
        I.addEventListener("mouseenter", En),
          window.addCleanup(() => I.removeEventListener("mouseenter", En))
    })
  })(),
  (function () {
    const De = document.createElement("script")
    ;(De.src = "https://plausible.io/js/script.manual.js"),
      De.setAttribute("data-domain", location.hostname),
      (De.defer = !0),
      document.head.appendChild(De),
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
    var De = Object.create,
      fe = Object.defineProperty,
      le = Object.getOwnPropertyDescriptor,
      de = Object.getOwnPropertyNames,
      Be = Object.getPrototypeOf,
      Qt = Object.prototype.hasOwnProperty,
      $e = (rt, mt) => () => (mt || rt((mt = { exports: {} }).exports, mt), mt.exports),
      Ue = (rt, mt, Ct, Tt) => {
        if ((mt && typeof mt == "object") || typeof mt == "function")
          for (let Pt of de(mt))
            !Qt.call(rt, Pt) &&
              Pt !== Ct &&
              fe(rt, Pt, { get: () => mt[Pt], enumerable: !(Tt = le(mt, Pt)) || Tt.enumerable })
        return rt
      },
      Jt = (rt, mt, Ct) => (
        (Ct = rt != null ? De(Be(rt)) : {}),
        Ue(mt || !rt || !rt.__esModule ? fe(Ct, "default", { value: rt, enumerable: !0 }) : Ct, rt)
      ),
      an = $e((rt, mt) => {
        "use strict"
        mt.exports = Tt
        function Ct(Ot) {
          return Ot instanceof Buffer
            ? Buffer.from(Ot)
            : new Ot.constructor(Ot.buffer.slice(), Ot.byteOffset, Ot.length)
        }
        function Tt(Ot) {
          if (((Ot = Ot || {}), Ot.circles)) return Pt(Ot)
          let It = new Map()
          if (
            (It.set(Date, (Rt) => new Date(Rt)),
            It.set(Map, (Rt, ue) => new Map(ce(Array.from(Rt), ue))),
            It.set(Set, (Rt, ue) => new Set(ce(Array.from(Rt), ue))),
            Ot.constructorHandlers)
          )
            for (let Rt of Ot.constructorHandlers) It.set(Rt[0], Rt[1])
          let ie = null
          return Ot.proto ? Pe : Ce
          function ce(Rt, ue) {
            let Ft = Object.keys(Rt),
              qt = new Array(Ft.length)
            for (let he = 0; he < Ft.length; he++) {
              let re = Ft[he],
                Ee = Rt[re]
              typeof Ee != "object" || Ee === null
                ? (qt[re] = Ee)
                : Ee.constructor !== Object && (ie = It.get(Ee.constructor))
                  ? (qt[re] = ie(Ee, ue))
                  : ArrayBuffer.isView(Ee)
                    ? (qt[re] = Ct(Ee))
                    : (qt[re] = ue(Ee))
            }
            return qt
          }
          function Ce(Rt) {
            if (typeof Rt != "object" || Rt === null) return Rt
            if (Array.isArray(Rt)) return ce(Rt, Ce)
            if (Rt.constructor !== Object && (ie = It.get(Rt.constructor))) return ie(Rt, Ce)
            let ue = {}
            for (let Ft in Rt) {
              if (Object.hasOwnProperty.call(Rt, Ft) === !1) continue
              let qt = Rt[Ft]
              typeof qt != "object" || qt === null
                ? (ue[Ft] = qt)
                : qt.constructor !== Object && (ie = It.get(qt.constructor))
                  ? (ue[Ft] = ie(qt, Ce))
                  : ArrayBuffer.isView(qt)
                    ? (ue[Ft] = Ct(qt))
                    : (ue[Ft] = Ce(qt))
            }
            return ue
          }
          function Pe(Rt) {
            if (typeof Rt != "object" || Rt === null) return Rt
            if (Array.isArray(Rt)) return ce(Rt, Pe)
            if (Rt.constructor !== Object && (ie = It.get(Rt.constructor))) return ie(Rt, Pe)
            let ue = {}
            for (let Ft in Rt) {
              let qt = Rt[Ft]
              typeof qt != "object" || qt === null
                ? (ue[Ft] = qt)
                : qt.constructor !== Object && (ie = It.get(qt.constructor))
                  ? (ue[Ft] = ie(qt, Pe))
                  : ArrayBuffer.isView(qt)
                    ? (ue[Ft] = Ct(qt))
                    : (ue[Ft] = Pe(qt))
            }
            return ue
          }
        }
        function Pt(Ot) {
          let It = [],
            ie = [],
            ce = new Map()
          if (
            (ce.set(Date, (Ft) => new Date(Ft)),
            ce.set(Map, (Ft, qt) => new Map(Pe(Array.from(Ft), qt))),
            ce.set(Set, (Ft, qt) => new Set(Pe(Array.from(Ft), qt))),
            Ot.constructorHandlers)
          )
            for (let Ft of Ot.constructorHandlers) ce.set(Ft[0], Ft[1])
          let Ce = null
          return Ot.proto ? ue : Rt
          function Pe(Ft, qt) {
            let he = Object.keys(Ft),
              re = new Array(he.length)
            for (let Ee = 0; Ee < he.length; Ee++) {
              let en = he[Ee],
                Ve = Ft[en]
              if (typeof Ve != "object" || Ve === null) re[en] = Ve
              else if (Ve.constructor !== Object && (Ce = ce.get(Ve.constructor)))
                re[en] = Ce(Ve, qt)
              else if (ArrayBuffer.isView(Ve)) re[en] = Ct(Ve)
              else {
                let Ie = It.indexOf(Ve)
                Ie !== -1 ? (re[en] = ie[Ie]) : (re[en] = qt(Ve))
              }
            }
            return re
          }
          function Rt(Ft) {
            if (typeof Ft != "object" || Ft === null) return Ft
            if (Array.isArray(Ft)) return Pe(Ft, Rt)
            if (Ft.constructor !== Object && (Ce = ce.get(Ft.constructor))) return Ce(Ft, Rt)
            let qt = {}
            It.push(Ft), ie.push(qt)
            for (let he in Ft) {
              if (Object.hasOwnProperty.call(Ft, he) === !1) continue
              let re = Ft[he]
              if (typeof re != "object" || re === null) qt[he] = re
              else if (re.constructor !== Object && (Ce = ce.get(re.constructor)))
                qt[he] = Ce(re, Rt)
              else if (ArrayBuffer.isView(re)) qt[he] = Ct(re)
              else {
                let Ee = It.indexOf(re)
                Ee !== -1 ? (qt[he] = ie[Ee]) : (qt[he] = Rt(re))
              }
            }
            return It.pop(), ie.pop(), qt
          }
          function ue(Ft) {
            if (typeof Ft != "object" || Ft === null) return Ft
            if (Array.isArray(Ft)) return Pe(Ft, ue)
            if (Ft.constructor !== Object && (Ce = ce.get(Ft.constructor))) return Ce(Ft, ue)
            let qt = {}
            It.push(Ft), ie.push(qt)
            for (let he in Ft) {
              let re = Ft[he]
              if (typeof re != "object" || re === null) qt[he] = re
              else if (re.constructor !== Object && (Ce = ce.get(re.constructor)))
                qt[he] = Ce(re, ue)
              else if (ArrayBuffer.isView(re)) qt[he] = Ct(re)
              else {
                let Ee = It.indexOf(re)
                Ee !== -1 ? (qt[he] = ie[Ee]) : (qt[he] = ue(re))
              }
            }
            return It.pop(), ie.pop(), qt
          }
        }
      }),
      pe = (rt) => (mt, Ct) => mt[`node${rt}`] === Ct[`node${rt}`],
      Ut = pe("Name"),
      Ne = pe("Type"),
      Le = pe("Value")
    function Kt(rt, mt) {
      if (rt.attributes.length === 0 && mt.attributes.length === 0) return []
      let Ct = [],
        Tt = new Map(),
        Pt = new Map()
      for (let Ot of rt.attributes) Tt.set(Ot.name, Ot.value)
      for (let Ot of mt.attributes) {
        let It = Tt.get(Ot.name)
        Ot.value === It
          ? Tt.delete(Ot.name)
          : (typeof It < "u" && Tt.delete(Ot.name), Pt.set(Ot.name, Ot.value))
      }
      for (let Ot of Tt.keys()) Ct.push({ type: 5, name: Ot })
      for (let [Ot, It] of Pt.entries()) Ct.push({ type: 4, name: Ot, value: It })
      return Ct
    }
    function yn(rt, mt = !0) {
      let Ct = `${rt.localName}`
      for (let { name: Tt, value: Pt } of rt.attributes)
        (mt && Tt.startsWith("data-")) || (Ct += `[${Tt}=${Pt}]`)
      return (Ct += rt.innerHTML), Ct
    }
    function _e(rt) {
      switch (rt.tagName) {
        case "BASE":
        case "TITLE":
          return rt.localName
        case "META": {
          if (rt.hasAttribute("name")) return `meta[name="${rt.getAttribute("name")}"]`
          if (rt.hasAttribute("property")) return `meta[name="${rt.getAttribute("property")}"]`
          break
        }
        case "LINK": {
          if (rt.hasAttribute("rel") && rt.hasAttribute("href"))
            return `link[rel="${rt.getAttribute("rel")}"][href="${rt.getAttribute("href")}"]`
          if (rt.hasAttribute("href")) return `link[href="${rt.getAttribute("href")}"]`
          break
        }
      }
      return yn(rt)
    }
    function ve(rt) {
      let [mt, Ct = ""] = rt.split("?")
      return `${mt}?t=${Date.now()}&${Ct.replace(/t=\d+/g, "")}`
    }
    function ne(rt) {
      if (rt.nodeType === 1 && rt.hasAttribute("data-persist")) return rt
      if (rt.nodeType === 1 && rt.localName === "script") {
        let mt = document.createElement("script")
        for (let { name: Ct, value: Tt } of rt.attributes)
          Ct === "src" && (Tt = ve(Tt)), mt.setAttribute(Ct, Tt)
        return (mt.innerHTML = rt.innerHTML), mt
      }
      return rt.cloneNode(!0)
    }
    function Je(rt, mt) {
      if (rt.children.length === 0 && mt.children.length === 0) return []
      let Ct = [],
        Tt = new Map(),
        Pt = new Map(),
        Ot = new Map()
      for (let It of rt.children) Tt.set(_e(It), It)
      for (let It of mt.children) {
        let ie = _e(It),
          ce = Tt.get(ie)
        ce ? yn(It, !1) !== yn(ce, !1) && Pt.set(ie, ne(It)) : Ot.set(ie, ne(It)), Tt.delete(ie)
      }
      for (let It of rt.childNodes) {
        if (It.nodeType === 1) {
          let ie = _e(It)
          if (Tt.has(ie)) {
            Ct.push({ type: 1 })
            continue
          } else if (Pt.has(ie)) {
            let ce = Pt.get(ie)
            Ct.push({ type: 3, attributes: Kt(It, ce), children: vn(It, ce) })
            continue
          }
        }
        Ct.push(void 0)
      }
      for (let It of Ot.values()) Ct.push({ type: 0, node: ne(It) })
      return Ct
    }
    function vn(rt, mt) {
      let Ct = [],
        Tt = Math.max(rt.childNodes.length, mt.childNodes.length)
      for (let Pt = 0; Pt < Tt; Pt++) {
        let Ot = rt.childNodes.item(Pt),
          It = mt.childNodes.item(Pt)
        Ct[Pt] = Qe(Ot, It)
      }
      return Ct
    }
    function Qe(rt, mt) {
      if (!rt) return { type: 0, node: ne(mt) }
      if (!mt) return { type: 1 }
      if (Ne(rt, mt)) {
        if (rt.nodeType === 3) {
          let Ct = rt.nodeValue,
            Tt = mt.nodeValue
          if (Ct.trim().length === 0 && Tt.trim().length === 0) return
        }
        if (rt.nodeType === 1) {
          if (Ut(rt, mt)) {
            let Ct = rt.tagName === "HEAD" ? Je : vn
            return { type: 3, attributes: Kt(rt, mt), children: Ct(rt, mt) }
          }
          return { type: 2, node: ne(mt) }
        } else
          return rt.nodeType === 9
            ? Qe(rt.documentElement, mt.documentElement)
            : Le(rt, mt)
              ? void 0
              : { type: 2, value: mt.nodeValue }
      }
      return { type: 2, node: ne(mt) }
    }
    function Xe(rt, mt) {
      if (mt.length !== 0)
        for (let { type: Ct, name: Tt, value: Pt } of mt)
          Ct === 5 ? rt.removeAttribute(Tt) : Ct === 4 && rt.setAttribute(Tt, Pt)
    }
    async function qe(rt, mt, Ct) {
      if (!mt) return
      let Tt
      switch (
        (rt.nodeType === 9 ? ((rt = rt.documentElement), (Tt = rt)) : Ct ? (Tt = Ct) : (Tt = rt),
        mt.type)
      ) {
        case 0: {
          let { node: Pt } = mt
          rt.appendChild(Pt)
          return
        }
        case 1: {
          if (!Tt) return
          rt.removeChild(Tt)
          return
        }
        case 2: {
          if (!Tt) return
          let { node: Pt, value: Ot } = mt
          if (typeof Ot == "string") {
            Tt.nodeValue = Ot
            return
          }
          Tt.replaceWith(Pt)
          return
        }
        case 3: {
          if (!Tt) return
          let { attributes: Pt, children: Ot } = mt
          Xe(Tt, Pt)
          let It = Array.from(Tt.childNodes)
          await Promise.all(Ot.map((ie, ce) => qe(Tt, ie, It[ce])))
          return
        }
      }
    }
    function me(rt, mt) {
      let Ct = Qe(rt, mt)
      return qe(rt, Ct)
    }
    var fn = Object.hasOwnProperty,
      we = Jt(an(), 1),
      dn = (0, we.default)()
    function Ze(rt) {
      return rt.document.body.dataset.slug
    }
    var te = (rt, mt, Ct) => {
      let Tt = new URL(rt.getAttribute(mt), Ct)
      rt.setAttribute(mt, Tt.pathname + Tt.hash)
    }
    function Dn(rt, mt) {
      rt.querySelectorAll('[href^="./"], [href^="../"]').forEach((Ct) => te(Ct, "href", mt)),
        rt.querySelectorAll('[src^="./"], [src^="../"]').forEach((Ct) => te(Ct, "src", mt))
    }
    var ke = 1,
      be = document.createElement("route-announcer"),
      tn = (rt) => rt?.nodeType === ke,
      Ye = (rt) => {
        try {
          let mt = new URL(rt)
          if (window.location.origin === mt.origin) return !0
        } catch {}
        return !1
      },
      wn = (rt) => {
        let mt = rt.origin === window.location.origin,
          Ct = rt.pathname === window.location.pathname
        return mt && Ct
      },
      xn = ({ target: rt }) => {
        if (!tn(rt) || rt.attributes.getNamedItem("target")?.value === "_blank") return
        let mt = rt.closest("a")
        if (!mt || "routerIgnore" in mt.dataset) return
        let { href: Ct } = mt
        if (Ye(Ct))
          return { url: new URL(Ct), scroll: "routerNoscroll" in mt.dataset ? !1 : void 0 }
      }
    function un(rt) {
      let mt = new CustomEvent("nav", { detail: { url: rt } })
      document.dispatchEvent(mt)
    }
    var Se = new Set()
    window.addCleanup = (rt) => Se.add(rt)
    var xe
    async function We(rt, mt = !1) {
      xe = xe || new DOMParser()
      let Ct = await fetch(`${rt}`)
        .then((Ot) => {
          if (Ot.headers.get("content-type")?.startsWith("text/html")) return Ot.text()
          window.location.assign(rt)
        })
        .catch(() => {
          window.location.assign(rt)
        })
      if (!Ct) return
      Se.forEach((Ot) => Ot()), Se.clear()
      let Tt = xe.parseFromString(Ct, "text/html")
      Dn(Tt, rt)
      let Pt = Tt.querySelector("title")?.textContent
      if (Pt) document.title = Pt
      else {
        let Ot = document.querySelector("h1")
        Pt = Ot?.innerText ?? Ot?.textContent ?? rt.pathname
      }
      be.textContent !== Pt && (be.textContent = Pt),
        (be.dataset.persist = ""),
        Tt.body.appendChild(be),
        me(document.body, Tt.body),
        mt ||
          (rt.hash
            ? document.getElementById(decodeURIComponent(rt.hash.substring(1)))?.scrollIntoView()
            : window.scrollTo({ top: 0 })),
        document.head.querySelectorAll(":not([spa-preserve])").forEach((Ot) => Ot.remove()),
        Tt.head
          .querySelectorAll(":not([spa-preserve])")
          .forEach((Ot) => document.head.appendChild(Ot)),
        mt || history.pushState({}, "", rt),
        un(Ze(window)),
        delete be.dataset.persist
    }
    window.spaNavigate = We
    function He() {
      return (
        typeof window < "u" &&
          (window.addEventListener("click", async (rt) => {
            let { url: mt } = xn(rt) ?? {}
            if (!(!mt || rt.ctrlKey || rt.metaKey)) {
              if ((rt.preventDefault(), wn(mt) && mt.hash)) {
                document.getElementById(decodeURIComponent(mt.hash.substring(1)))?.scrollIntoView(),
                  history.pushState({}, "", mt)
                return
              }
              try {
                We(mt, !1)
              } catch {
                window.location.assign(mt)
              }
            }
          }),
          window.addEventListener("popstate", (rt) => {
            let { url: mt } = xn(rt) ?? {}
            if (!(window.location.hash && window.location.pathname === mt?.pathname))
              try {
                We(new URL(window.location.toString()), !0)
              } catch {
                window.location.reload()
              }
          })),
        new (class {
          go(rt) {
            let mt = new URL(rt, window.location.toString())
            return We(mt, !1)
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
    if ((He(), un(Ze(window)), !customElements.get("route-announcer"))) {
      let rt = {
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
            for (let [mt, Ct] of Object.entries(rt)) this.setAttribute(mt, Ct)
          }
        },
      )
    }
  })()
