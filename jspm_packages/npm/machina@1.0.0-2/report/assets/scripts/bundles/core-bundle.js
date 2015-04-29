/* */ 
"format cjs";
(function(process) {
  !function(a, b) {
    function c(a) {
      var b = ob[a] = {};
      return $.each(a.split(bb), function(a, c) {
        b[c] = !0;
      }), b;
    }
    function d(a, c, d) {
      if (d === b && 1 === a.nodeType) {
        var e = "data-" + c.replace(qb, "-$1").toLowerCase();
        if (d = a.getAttribute(e), "string" == typeof d) {
          try {
            d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : pb.test(d) ? $.parseJSON(d) : d;
          } catch (f) {}
          $.data(a, c, d);
        } else
          d = b;
      }
      return d;
    }
    function e(a) {
      var b;
      for (b in a)
        if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b)
          return !1;
      return !0;
    }
    function f() {
      return !1;
    }
    function g() {
      return !0;
    }
    function h(a) {
      return !a || !a.parentNode || 11 === a.parentNode.nodeType;
    }
    function i(a, b) {
      do
        a = a[b];
 while (a && 1 !== a.nodeType);
      return a;
    }
    function j(a, b, c) {
      if (b = b || 0, $.isFunction(b))
        return $.grep(a, function(a, d) {
          var e = !!b.call(a, d, a);
          return e === c;
        });
      if (b.nodeType)
        return $.grep(a, function(a) {
          return a === b === c;
        });
      if ("string" == typeof b) {
        var d = $.grep(a, function(a) {
          return 1 === a.nodeType;
        });
        if (Kb.test(b))
          return $.filter(b, d, !c);
        b = $.filter(b, d);
      }
      return $.grep(a, function(a) {
        return $.inArray(a, b) >= 0 === c;
      });
    }
    function k(a) {
      var b = Nb.split("|"),
          c = a.createDocumentFragment();
      if (c.createElement)
        for (; b.length; )
          c.createElement(b.pop());
      return c;
    }
    function l(a, b) {
      return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b));
    }
    function m(a, b) {
      if (1 === b.nodeType && $.hasData(a)) {
        var c,
            d,
            e,
            f = $._data(a),
            g = $._data(b, f),
            h = f.events;
        if (h) {
          delete g.handle, g.events = {};
          for (c in h)
            for (d = 0, e = h[c].length; e > d; d++)
              $.event.add(b, c, h[c][d]);
        }
        g.data && (g.data = $.extend({}, g.data));
      }
    }
    function n(a, b) {
      var c;
      1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute($.expando));
    }
    function o(a) {
      return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : [];
    }
    function p(a) {
      Xb.test(a.type) && (a.defaultChecked = a.checked);
    }
    function q(a, b) {
      if (b in a)
        return b;
      for (var c = b.charAt(0).toUpperCase() + b.slice(1),
          d = b,
          e = rc.length; e--; )
        if (b = rc[e] + c, b in a)
          return b;
      return d;
    }
    function r(a, b) {
      return a = b || a, "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a);
    }
    function s(a, b) {
      for (var c,
          d,
          e = [],
          f = 0,
          g = a.length; g > f; f++)
        c = a[f], c.style && (e[f] = $._data(c, "olddisplay"), b ? (!e[f] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cc(c, "display"), !e[f] && "none" !== d && $._data(c, "olddisplay", d)));
      for (f = 0; g > f; f++)
        c = a[f], c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
      return a;
    }
    function t(a, b, c) {
      var d = kc.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function u(a, b, c, d) {
      for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          f = 0; 4 > e; e += 2)
        "margin" === c && (f += $.css(a, c + qc[e], !0)), d ? ("content" === c && (f -= parseFloat(cc(a, "padding" + qc[e])) || 0), "margin" !== c && (f -= parseFloat(cc(a, "border" + qc[e] + "Width")) || 0)) : (f += parseFloat(cc(a, "padding" + qc[e])) || 0, "padding" !== c && (f += parseFloat(cc(a, "border" + qc[e] + "Width")) || 0));
      return f;
    }
    function v(a, b, c) {
      var d = "width" === b ? a.offsetWidth : a.offsetHeight,
          e = !0,
          f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
      if (0 >= d || null == d) {
        if (d = cc(a, b), (0 > d || null == d) && (d = a.style[b]), lc.test(d))
          return d;
        e = f && ($.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0;
      }
      return d + u(a, b, c || (f ? "border" : "content"), e) + "px";
    }
    function w(a) {
      if (nc[a])
        return nc[a];
      var b = $("<" + a + ">").appendTo(P.body),
          c = b.css("display");
      return b.remove(), ("none" === c || "" === c) && (dc = P.body.appendChild(dc || $.extend(P.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      })), ec && dc.createElement || (ec = (dc.contentWindow || dc.contentDocument).document, ec.write("<!doctype html><html><body>"), ec.close()), b = ec.body.appendChild(ec.createElement(a)), c = cc(b, "display"), P.body.removeChild(dc)), nc[a] = c, c;
    }
    function x(a, b, c, d) {
      var e;
      if ($.isArray(b))
        $.each(b, function(b, e) {
          c || uc.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        });
      else if (c || "object" !== $.type(b))
        d(a, b);
      else
        for (e in b)
          x(a + "[" + e + "]", b[e], c, d);
    }
    function y(a) {
      return function(b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d,
            e,
            f,
            g = b.toLowerCase().split(bb),
            h = 0,
            i = g.length;
        if ($.isFunction(c))
          for (; i > h; h++)
            d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c);
      };
    }
    function z(a, c, d, e, f, g) {
      f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
      for (var h,
          i = a[f],
          j = 0,
          k = i ? i.length : 0,
          l = a === Kc; k > j && (l || !h); j++)
        h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = z(a, c, d, e, h, g)));
      return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)), h;
    }
    function A(a, c) {
      var d,
          e,
          f = $.ajaxSettings.flatOptions || {};
      for (d in c)
        c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
      e && $.extend(!0, a, e);
    }
    function B(a, c, d) {
      var e,
          f,
          g,
          h,
          i = a.contents,
          j = a.dataTypes,
          k = a.responseFields;
      for (f in k)
        f in d && (c[k[f]] = d[f]);
      for (; "*" === j[0]; )
        j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
      if (e)
        for (f in i)
          if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break;
          }
      if (j[0] in d)
        g = j[0];
      else {
        for (f in d) {
          if (!j[0] || a.converters[f + " " + j[0]]) {
            g = f;
            break;
          }
          h || (h = f);
        }
        g = g || h;
      }
      return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0;
    }
    function C(a, b) {
      var c,
          d,
          e,
          f,
          g = a.dataTypes.slice(),
          h = g[0],
          i = {},
          j = 0;
      if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1])
        for (c in a.converters)
          i[c.toLowerCase()] = a.converters[c];
      for (; e = g[++j]; )
        if ("*" !== e) {
          if ("*" !== h && h !== e) {
            if (c = i[h + " " + e] || i["* " + e], !c)
              for (d in i)
                if (f = d.split(" "), f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
                  c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                  break;
                }
            if (c !== !0)
              if (c && a["throws"])
                b = c(b);
              else
                try {
                  b = c(b);
                } catch (k) {
                  return {
                    state: "parsererror",
                    error: c ? k : "No conversion from " + h + " to " + e
                  };
                }
          }
          h = e;
        }
      return {
        state: "success",
        data: b
      };
    }
    function D() {
      try {
        return new a.XMLHttpRequest;
      } catch (b) {}
    }
    function E() {
      try {
        return new a.ActiveXObject("Microsoft.XMLHTTP");
      } catch (b) {}
    }
    function F() {
      return setTimeout(function() {
        Vc = b;
      }, 0), Vc = $.now();
    }
    function G(a, b) {
      $.each(b, function(b, c) {
        for (var d = (_c[b] || []).concat(_c["*"]),
            e = 0,
            f = d.length; f > e; e++)
          if (d[e].call(a, b, c))
            return ;
      });
    }
    function H(a, b, c) {
      var d,
          e = 0,
          f = $c.length,
          g = $.Deferred().always(function() {
            delete h.elem;
          }),
          h = function() {
            for (var b = Vc || F(),
                c = Math.max(0, i.startTime + i.duration - b),
                d = c / i.duration || 0,
                e = 1 - d,
                f = 0,
                h = i.tweens.length; h > f; f++)
              i.tweens[f].run(e);
            return g.notifyWith(a, [i, e, c]), 1 > e && h ? c : (g.resolveWith(a, [i]), !1);
          },
          i = g.promise({
            elem: a,
            props: $.extend({}, b),
            opts: $.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Vc || F(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
              var d = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
              return i.tweens.push(d), d;
            },
            stop: function(b) {
              for (var c = 0,
                  d = b ? i.tweens.length : 0; d > c; c++)
                i.tweens[c].run(1);
              return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this;
            }
          }),
          j = i.props;
      for (I(j, i.opts.specialEasing); f > e; e++)
        if (d = $c[e].call(i, a, j, i.opts))
          return d;
      return G(i, j), $.isFunction(i.opts.start) && i.opts.start.call(a, i), $.fx.timer($.extend(h, {
        anim: i,
        queue: i.opts.queue,
        elem: a
      })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always);
    }
    function I(a, b) {
      var c,
          d,
          e,
          f,
          g;
      for (c in a)
        if (d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = $.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];
          for (c in f)
            c in a || (a[c] = f[c], b[c] = e);
        } else
          b[d] = e;
    }
    function J(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = this,
          n = a.style,
          o = {},
          p = [],
          q = a.nodeType && r(a);
      c.queue || (k = $._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() {
        k.unqueued || l();
      }), k.unqueued++, m.always(function() {
        m.always(function() {
          k.unqueued--, $.queue(a, "fx").length || k.empty.fire();
        });
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", $.support.shrinkWrapBlocks || m.done(function() {
        n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
      }));
      for (d in b)
        if (f = b[d], Xc.exec(f)) {
          if (delete b[d], i = i || "toggle" === f, f === (q ? "hide" : "show"))
            continue;
          p.push(d);
        }
      if (g = p.length) {
        h = $._data(a, "fxshow") || $._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? $(a).show() : m.done(function() {
          $(a).hide();
        }), m.done(function() {
          var b;
          $.removeData(a, "fxshow", !0);
          for (b in o)
            $.style(a, b, o[b]);
        });
        for (d = 0; g > d; d++)
          e = p[d], j = m.createTween(e, q ? h[e] : 0), o[e] = h[e] || $.style(a, e), e in h || (h[e] = j.start, q && (j.end = j.start, j.start = "width" === e || "height" === e ? 1 : 0));
      }
    }
    function K(a, b, c, d, e) {
      return new K.prototype.init(a, b, c, d, e);
    }
    function L(a, b) {
      var c,
          d = {height: a},
          e = 0;
      for (b = b ? 1 : 0; 4 > e; e += 2 - b)
        c = qc[e], d["margin" + c] = d["padding" + c] = a;
      return b && (d.opacity = d.width = a), d;
    }
    function M(a) {
      return $.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    var N,
        O,
        P = a.document,
        Q = a.location,
        R = a.navigator,
        S = a.jQuery,
        T = a.$,
        U = Array.prototype.push,
        V = Array.prototype.slice,
        W = Array.prototype.indexOf,
        X = Object.prototype.toString,
        Y = Object.prototype.hasOwnProperty,
        Z = String.prototype.trim,
        $ = function(a, b) {
          return new $.fn.init(a, b, N);
        },
        _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        ab = /\S/,
        bb = /\s+/,
        cb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        db = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        eb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fb = /^[\],:{}\s]*$/,
        gb = /(?:^|:|,)(?:\s*\[)+/g,
        hb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ib = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        jb = /^-ms-/,
        kb = /-([\da-z])/gi,
        lb = function(a, b) {
          return (b + "").toUpperCase();
        },
        mb = function() {
          P.addEventListener ? (P.removeEventListener("DOMContentLoaded", mb, !1), $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", mb), $.ready());
        },
        nb = {};
    $.fn = $.prototype = {
      constructor: $,
      init: function(a, c, d) {
        var e,
            f,
            g;
        if (!a)
          return this;
        if (a.nodeType)
          return this.context = this[0] = a, this.length = 1, this;
        if ("string" == typeof a) {
          if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : db.exec(a), e && (e[1] || !c)) {
            if (e[1])
              return c = c instanceof $ ? c[0] : c, g = c && c.nodeType ? c.ownerDocument || c : P, a = $.parseHTML(e[1], g, !0), eb.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0), $.merge(this, a);
            if (f = P.getElementById(e[2]), f && f.parentNode) {
              if (f.id !== e[2])
                return d.find(a);
              this.length = 1, this[0] = f;
            }
            return this.context = P, this.selector = a, this;
          }
          return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
        }
        return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this));
      },
      selector: "",
      jquery: "1.8.3",
      length: 0,
      size: function() {
        return this.length;
      },
      toArray: function() {
        return V.call(this);
      },
      get: function(a) {
        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
      },
      pushStack: function(a, b, c) {
        var d = $.merge(this.constructor(), a);
        return d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d;
      },
      each: function(a, b) {
        return $.each(this, a, b);
      },
      ready: function(a) {
        return $.ready.promise().done(a), this;
      },
      eq: function(a) {
        return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1);
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      slice: function() {
        return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","));
      },
      map: function(a) {
        return this.pushStack($.map(this, function(b, c) {
          return a.call(b, c, b);
        }));
      },
      end: function() {
        return this.prevObject || this.constructor(null);
      },
      push: U,
      sort: [].sort,
      splice: [].splice
    }, $.fn.init.prototype = $.fn, $.extend = $.fn.extend = function() {
      var a,
          c,
          d,
          e,
          f,
          g,
          h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;
      for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" != typeof h && !$.isFunction(h) && (h = {}), j === i && (h = this, --i); j > i; i++)
        if (null != (a = arguments[i]))
          for (c in a)
            d = h[c], e = a[c], h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1, g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {}, h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e));
      return h;
    }, $.extend({
      noConflict: function(b) {
        return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? $.readyWait++ : $.ready(!0);
      },
      ready: function(a) {
        if (a === !0 ? !--$.readyWait : !$.isReady) {
          if (!P.body)
            return setTimeout($.ready, 1);
          $.isReady = !0, a !== !0 && --$.readyWait > 0 || (O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready"));
        }
      },
      isFunction: function(a) {
        return "function" === $.type(a);
      },
      isArray: Array.isArray || function(a) {
        return "array" === $.type(a);
      },
      isWindow: function(a) {
        return null != a && a == a.window;
      },
      isNumeric: function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      },
      type: function(a) {
        return null == a ? String(a) : nb[X.call(a)] || "object";
      },
      isPlainObject: function(a) {
        if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a))
          return !1;
        try {
          if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf"))
            return !1;
        } catch (c) {
          return !1;
        }
        var d;
        for (d in a)
          ;
        return d === b || Y.call(a, d);
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a)
          return !1;
        return !0;
      },
      error: function(a) {
        throw new Error(a);
      },
      parseHTML: function(a, b, c) {
        var d;
        return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || P, (d = eb.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null : []), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null;
      },
      parseJSON: function(b) {
        return b && "string" == typeof b ? (b = $.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : fb.test(b.replace(hb, "@").replace(ib, "]").replace(gb, "")) ? new Function("return " + b)() : ($.error("Invalid JSON: " + b), void 0)) : null;
      },
      parseXML: function(c) {
        var d,
            e;
        if (!c || "string" != typeof c)
          return null;
        try {
          a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c));
        } catch (f) {
          d = b;
        }
        return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c), d;
      },
      noop: function() {},
      globalEval: function(b) {
        b && ab.test(b) && (a.execScript || function(b) {
          a.eval.call(a, b);
        })(b);
      },
      camelCase: function(a) {
        return a.replace(jb, "ms-").replace(kb, lb);
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function(a, c, d) {
        var e,
            f = 0,
            g = a.length,
            h = g === b || $.isFunction(a);
        if (d)
          if (h) {
            for (e in a)
              if (c.apply(a[e], d) === !1)
                break;
          } else
            for (; g > f && c.apply(a[f++], d) !== !1; )
              ;
        else if (h) {
          for (e in a)
            if (c.call(a[e], e, a[e]) === !1)
              break;
        } else
          for (; g > f && c.call(a[f], f, a[f++]) !== !1; )
            ;
        return a;
      },
      trim: Z && !Z.call("﻿ ") ? function(a) {
        return null == a ? "" : Z.call(a);
      } : function(a) {
        return null == a ? "" : (a + "").replace(cb, "");
      },
      makeArray: function(a, b) {
        var c,
            d = b || [];
        return null != a && (c = $.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)), d;
      },
      inArray: function(a, b, c) {
        var d;
        if (b) {
          if (W)
            return W.call(b, a, c);
          for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
            if (c in b && b[c] === a)
              return c;
        }
        return -1;
      },
      merge: function(a, c) {
        var d = c.length,
            e = a.length,
            f = 0;
        if ("number" == typeof d)
          for (; d > f; f++)
            a[e++] = c[f];
        else
          for (; c[f] !== b; )
            a[e++] = c[f++];
        return a.length = e, a;
      },
      grep: function(a, b, c) {
        var d,
            e = [],
            f = 0,
            g = a.length;
        for (c = !!c; g > f; f++)
          d = !!b(a[f], f), c !== d && e.push(a[f]);
        return e;
      },
      map: function(a, c, d) {
        var e,
            f,
            g = [],
            h = 0,
            i = a.length,
            j = a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a));
        if (j)
          for (; i > h; h++)
            e = c(a[h], h, d), null != e && (g[g.length] = e);
        else
          for (f in a)
            e = c(a[f], f, d), null != e && (g[g.length] = e);
        return g.concat.apply([], g);
      },
      guid: 1,
      proxy: function(a, c) {
        var d,
            e,
            f;
        return "string" == typeof c && (d = a[c], c = a, a = d), $.isFunction(a) ? (e = V.call(arguments, 2), f = function() {
          return a.apply(c, e.concat(V.call(arguments)));
        }, f.guid = a.guid = a.guid || $.guid++, f) : b;
      },
      access: function(a, c, d, e, f, g, h) {
        var i,
            j = null == d,
            k = 0,
            l = a.length;
        if (d && "object" == typeof d) {
          for (k in d)
            $.access(a, c, k, d[k], 1, g, e);
          f = 1;
        } else if (e !== b) {
          if (i = h === b && $.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
            return i.call($(a), c);
          }) : (c.call(a, e), c = null)), c)
            for (; l > k; k++)
              c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
          f = 1;
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g;
      },
      now: function() {
        return (new Date).getTime();
      }
    }), $.ready.promise = function(b) {
      if (!O)
        if (O = $.Deferred(), "complete" === P.readyState)
          setTimeout($.ready, 1);
        else if (P.addEventListener)
          P.addEventListener("DOMContentLoaded", mb, !1), a.addEventListener("load", $.ready, !1);
        else {
          P.attachEvent("onreadystatechange", mb), a.attachEvent("onload", $.ready);
          var c = !1;
          try {
            c = null == a.frameElement && P.documentElement;
          } catch (d) {}
          c && c.doScroll && function e() {
            if (!$.isReady) {
              try {
                c.doScroll("left");
              } catch (a) {
                return setTimeout(e, 50);
              }
              $.ready();
            }
          }();
        }
      return O.promise(b);
    }, $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
      nb["[object " + b + "]"] = b.toLowerCase();
    }), N = $(P);
    var ob = {};
    $.Callbacks = function(a) {
      a = "string" == typeof a ? ob[a] || c(a) : $.extend({}, a);
      var d,
          e,
          f,
          g,
          h,
          i,
          j = [],
          k = !a.once && [],
          l = function(b) {
            for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
              if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                d = !1;
                break;
              }
            f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable());
          },
          m = {
            add: function() {
              if (j) {
                var b = j.length;
                !function c(b) {
                  $.each(b, function(b, d) {
                    var e = $.type(d);
                    "function" === e ? (!a.unique || !m.has(d)) && j.push(d) : d && d.length && "string" !== e && c(d);
                  });
                }(arguments), f ? h = j.length : d && (g = b, l(d));
              }
              return this;
            },
            remove: function() {
              return j && $.each(arguments, function(a, b) {
                for (var c; (c = $.inArray(b, j, c)) > -1; )
                  j.splice(c, 1), f && (h >= c && h--, i >= c && i--);
              }), this;
            },
            has: function(a) {
              return $.inArray(a, j) > -1;
            },
            empty: function() {
              return j = [], this;
            },
            disable: function() {
              return j = k = d = b, this;
            },
            disabled: function() {
              return !j;
            },
            lock: function() {
              return k = b, d || m.disable(), this;
            },
            locked: function() {
              return !k;
            },
            fireWith: function(a, b) {
              return b = b || [], b = [a, b.slice ? b.slice() : b], j && (!e || k) && (f ? k.push(b) : l(b)), this;
            },
            fire: function() {
              return m.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!e;
            }
          };
      return m;
    }, $.extend({
      Deferred: function(a) {
        var b = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]],
            c = "pending",
            d = {
              state: function() {
                return c;
              },
              always: function() {
                return e.done(arguments).fail(arguments), this;
              },
              then: function() {
                var a = arguments;
                return $.Deferred(function(c) {
                  $.each(b, function(b, d) {
                    var f = d[0],
                        g = a[b];
                    e[d[1]]($.isFunction(g) ? function() {
                      var a = g.apply(this, arguments);
                      a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a]);
                    } : c[f]);
                  }), a = null;
                }).promise();
              },
              promise: function(a) {
                return null != a ? $.extend(a, d) : d;
              }
            },
            e = {};
        return d.pipe = d.then, $.each(b, function(a, f) {
          var g = f[2],
              h = f[3];
          d[f[1]] = g.add, h && g.add(function() {
            c = h;
          }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith;
        }), d.promise(e), a && a.call(e, e), e;
      },
      when: function(a) {
        var b,
            c,
            d,
            e = 0,
            f = V.call(arguments),
            g = f.length,
            h = 1 !== g || a && $.isFunction(a.promise) ? g : 0,
            i = 1 === h ? a : $.Deferred(),
            j = function(a, c, d) {
              return function(e) {
                c[a] = this, d[a] = arguments.length > 1 ? V.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
              };
            };
        if (g > 1)
          for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
            f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
        return h || i.resolveWith(d, f), i.promise();
      }
    }), $.support = function() {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = P.createElement("div");
      if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !d || !c.length)
        return {};
      e = P.createElement("select"), f = e.appendChild(P.createElement("option")), g = m.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
        leadingWhitespace: 3 === m.firstChild.nodeType,
        tbody: !m.getElementsByTagName("tbody").length,
        htmlSerialize: !!m.getElementsByTagName("link").length,
        style: /top/.test(d.getAttribute("style")),
        hrefNormalized: "/a" === d.getAttribute("href"),
        opacity: /^0.5/.test(d.style.opacity),
        cssFloat: !!d.style.cssFloat,
        checkOn: "on" === g.value,
        optSelected: f.selected,
        getSetAttribute: "t" !== m.className,
        enctype: !!P.createElement("form").enctype,
        html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
        boxModel: "CSS1Compat" === P.compatMode,
        submitBubbles: !0,
        changeBubbles: !0,
        focusinBubbles: !1,
        deleteExpando: !0,
        noCloneEvent: !0,
        inlineBlockNeedsLayout: !1,
        shrinkWrapBlocks: !1,
        reliableMarginRight: !0,
        boxSizingReliable: !0,
        pixelPosition: !1
      }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
      try {
        delete m.test;
      } catch (n) {
        b.deleteExpando = !1;
      }
      if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function() {
        b.noCloneEvent = !1;
      }), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = P.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = P.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)
        for (j in {
          submit: !0,
          change: !0,
          focusin: !0
        })
          i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]), b[j + "Bubbles"] = k;
      return $(function() {
        var c,
            d,
            e,
            f,
            g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
            h = P.getElementsByTagName("body")[0];
        h && (c = P.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = P.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {width: "4px"}).width, f = P.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null);
      }), h.removeChild(m), c = d = e = f = g = h = m = null, b;
    }();
    var pb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        qb = /([A-Z])/g;
    $.extend({
      cache: {},
      deletedIds: [],
      uuid: 0,
      expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
      noData: {
        embed: !0,
        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet: !0
      },
      hasData: function(a) {
        return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando], !!a && !e(a);
      },
      data: function(a, c, d, e) {
        if ($.acceptData(a)) {
          var f,
              g,
              h = $.expando,
              i = "string" == typeof c,
              j = a.nodeType,
              k = j ? $.cache : a,
              l = j ? a[h] : a[h] && h;
          if (l && k[l] && (e || k[l].data) || !i || d !== b)
            return l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = $.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[$.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[$.camelCase(c)])) : g = f, g;
        }
      },
      removeData: function(a, b, c) {
        if ($.acceptData(a)) {
          var d,
              f,
              g,
              h = a.nodeType,
              i = h ? $.cache : a,
              j = h ? a[$.expando] : $.expando;
          if (i[j]) {
            if (b && (d = c ? i[j] : i[j].data)) {
              $.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b), b = b in d ? [b] : b.split(" ")));
              for (f = 0, g = b.length; g > f; f++)
                delete d[b[f]];
              if (!(c ? e : $.isEmptyObject)(d))
                return ;
            }
            (c || (delete i[j].data, e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null);
          }
        }
      },
      _data: function(a, b, c) {
        return $.data(a, b, c, !0);
      },
      acceptData: function(a) {
        var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
        return !b || b !== !0 && a.getAttribute("classid") === b;
      }
    }), $.fn.extend({
      data: function(a, c) {
        var e,
            f,
            g,
            h,
            i,
            j = this[0],
            k = 0,
            l = null;
        if (a === b) {
          if (this.length && (l = $.data(j), 1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
            for (g = j.attributes, i = g.length; i > k; k++)
              h = g[k].name, h.indexOf("data-") || (h = $.camelCase(h.substring(5)), d(j, h, l[h]));
            $._data(j, "parsedAttrs", !0);
          }
          return l;
        }
        return "object" == typeof a ? this.each(function() {
          $.data(this, a);
        }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", $.access(this, function(c) {
          return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = $.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, this.each(function() {
            var b = $(this);
            b.triggerHandler("setData" + f, e), $.data(this, a, c), b.triggerHandler("changeData" + f, e);
          }), void 0);
        }, null, c, arguments.length > 1, null, !1));
      },
      removeData: function(a) {
        return this.each(function() {
          $.removeData(this, a);
        });
      }
    }), $.extend({
      queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = $._data(a, b), c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)), d || []) : void 0;
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = $.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = $._queueHooks(a, b),
            g = function() {
              $.dequeue(a, b);
            };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return $._data(a, c) || $._data(a, c, {empty: $.Callbacks("once memory").add(function() {
            $.removeData(a, b + "queue", !0), $.removeData(a, c, !0);
          })});
      }
    }), $.fn.extend({
      queue: function(a, c) {
        var d = 2;
        return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function() {
          var b = $.queue(this, a, c);
          $._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a);
        });
      },
      dequeue: function(a) {
        return this.each(function() {
          $.dequeue(this, a);
        });
      },
      delay: function(a, b) {
        return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
          var d = setTimeout(b, a);
          c.stop = function() {
            clearTimeout(d);
          };
        });
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", []);
      },
      promise: function(a, c) {
        var d,
            e = 1,
            f = $.Deferred(),
            g = this,
            h = this.length,
            i = function() {
              --e || f.resolveWith(g, [g]);
            };
        for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; )
          d = $._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
        return i(), f.promise(c);
      }
    });
    var rb,
        sb,
        tb,
        ub = /[\t\r\n]/g,
        vb = /\r/g,
        wb = /^(?:button|input)$/i,
        xb = /^(?:button|input|object|select|textarea)$/i,
        yb = /^a(?:rea|)$/i,
        zb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ab = $.support.getSetAttribute;
    $.fn.extend({
      attr: function(a, b) {
        return $.access(this, $.attr, a, b, arguments.length > 1);
      },
      removeAttr: function(a) {
        return this.each(function() {
          $.removeAttr(this, a);
        });
      },
      prop: function(a, b) {
        return $.access(this, $.prop, a, b, arguments.length > 1);
      },
      removeProp: function(a) {
        return a = $.propFix[a] || a, this.each(function() {
          try {
            this[a] = b, delete this[a];
          } catch (c) {}
        });
      },
      addClass: function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h;
        if ($.isFunction(a))
          return this.each(function(b) {
            $(this).addClass(a.call(this, b, this.className));
          });
        if (a && "string" == typeof a)
          for (b = a.split(bb), c = 0, d = this.length; d > c; c++)
            if (e = this[c], 1 === e.nodeType)
              if (e.className || 1 !== b.length) {
                for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++)
                  f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                e.className = $.trim(f);
              } else
                e.className = a;
        return this;
      },
      removeClass: function(a) {
        var c,
            d,
            e,
            f,
            g,
            h,
            i;
        if ($.isFunction(a))
          return this.each(function(b) {
            $(this).removeClass(a.call(this, b, this.className));
          });
        if (a && "string" == typeof a || a === b)
          for (c = (a || "").split(bb), h = 0, i = this.length; i > h; h++)
            if (e = this[h], 1 === e.nodeType && e.className) {
              for (d = (" " + e.className + " ").replace(ub, " "), f = 0, g = c.length; g > f; f++)
                for (; d.indexOf(" " + c[f] + " ") >= 0; )
                  d = d.replace(" " + c[f] + " ", " ");
              e.className = a ? $.trim(d) : "";
            }
        return this;
      },
      toggleClass: function(a, b) {
        var c = typeof a,
            d = "boolean" == typeof b;
        return $.isFunction(a) ? this.each(function(c) {
          $(this).toggleClass(a.call(this, c, this.className, b), b);
        }) : this.each(function() {
          if ("string" === c)
            for (var e,
                f = 0,
                g = $(this),
                h = b,
                i = a.split(bb); e = i[f++]; )
              h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
          else
            ("undefined" === c || "boolean" === c) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : $._data(this, "__className__") || "");
        });
      },
      hasClass: function(a) {
        for (var b = " " + a + " ",
            c = 0,
            d = this.length; d > c; c++)
          if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)
            return !0;
        return !1;
      },
      val: function(a) {
        var c,
            d,
            e,
            f = this[0];
        {
          if (arguments.length)
            return e = $.isFunction(a), this.each(function(d) {
              var f,
                  g = $(this);
              1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : $.isArray(f) && (f = $.map(f, function(a) {
                return null == a ? "" : a + "";
              })), c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f));
            });
          if (f)
            return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(vb, "") : null == d ? "" : d);
        }
      }
    }), $.extend({
      valHooks: {
        option: {get: function(a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          }},
        select: {
          get: function(a) {
            for (var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0; h > i; i++)
              if (c = d[i], !(!c.selected && i !== e || ($.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && $.nodeName(c.parentNode, "optgroup"))) {
                if (b = $(c).val(), f)
                  return b;
                g.push(b);
              }
            return g;
          },
          set: function(a, b) {
            var c = $.makeArray(b);
            return $(a).find("option").each(function() {
              this.selected = $.inArray($(this).val(), c) >= 0;
            }), c.length || (a.selectedIndex = -1), c;
          }
        }
      },
      attrFn: {},
      attr: function(a, c, d, e) {
        var f,
            g,
            h,
            i = a.nodeType;
        if (a && 3 !== i && 8 !== i && 2 !== i)
          return e && $.isFunction($.fn[c]) ? $(a)[c](d) : "undefined" == typeof a.getAttribute ? $.prop(a, c, d) : (h = 1 !== i || !$.isXMLDoc(a), h && (c = c.toLowerCase(), g = $.attrHooks[c] || (zb.test(c) ? sb : rb)), d !== b ? null === d ? ($.removeAttr(a, c), void 0) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f));
      },
      removeAttr: function(a, b) {
        var c,
            d,
            e,
            f,
            g = 0;
        if (b && 1 === a.nodeType)
          for (d = b.split(bb); g < d.length; g++)
            e = d[g], e && (c = $.propFix[e] || e, f = zb.test(e), f || $.attr(a, e, ""), a.removeAttribute(Ab ? e : c), f && c in a && (a[c] = !1));
      },
      attrHooks: {
        type: {set: function(a, b) {
            if (wb.test(a.nodeName) && a.parentNode)
              $.error("type property can't be changed");
            else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          }},
        value: {
          get: function(a, b) {
            return rb && $.nodeName(a, "button") ? rb.get(a, b) : b in a ? a.value : null;
          },
          set: function(a, b, c) {
            return rb && $.nodeName(a, "button") ? rb.set(a, b, c) : (a.value = b, void 0);
          }
        }
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
      prop: function(a, c, d) {
        var e,
            f,
            g,
            h = a.nodeType;
        if (a && 3 !== h && 8 !== h && 2 !== h)
          return g = 1 !== h || !$.isXMLDoc(a), g && (c = $.propFix[c] || c, f = $.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c];
      },
      propHooks: {tabIndex: {get: function(a) {
            var c = a.getAttributeNode("tabindex");
            return c && c.specified ? parseInt(c.value, 10) : xb.test(a.nodeName) || yb.test(a.nodeName) && a.href ? 0 : b;
          }}}
    }), sb = {
      get: function(a, c) {
        var d,
            e = $.prop(a, c);
        return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b;
      },
      set: function(a, b, c) {
        var d;
        return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c;
      }
    }, Ab || (tb = {
      name: !0,
      id: !0,
      coords: !0
    }, rb = $.valHooks.button = {
      get: function(a, c) {
        var d;
        return d = a.getAttributeNode(c), d && (tb[c] ? "" !== d.value : d.specified) ? d.value : b;
      },
      set: function(a, b, c) {
        var d = a.getAttributeNode(c);
        return d || (d = P.createAttribute(c), a.setAttributeNode(d)), d.value = b + "";
      }
    }, $.each(["width", "height"], function(a, b) {
      $.attrHooks[b] = $.extend($.attrHooks[b], {set: function(a, c) {
          return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
        }});
    }), $.attrHooks.contenteditable = {
      get: rb.get,
      set: function(a, b, c) {
        "" === b && (b = "false"), rb.set(a, b, c);
      }
    }), $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function(a, c) {
      $.attrHooks[c] = $.extend($.attrHooks[c], {get: function(a) {
          var d = a.getAttribute(c, 2);
          return null === d ? b : d;
        }});
    }), $.support.style || ($.attrHooks.style = {
      get: function(a) {
        return a.style.cssText.toLowerCase() || b;
      },
      set: function(a, b) {
        return a.style.cssText = b + "";
      }
    }), $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {get: function(a) {
        var b = a.parentNode;
        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
      }})), $.support.enctype || ($.propFix.enctype = "encoding"), $.support.checkOn || $.each(["radio", "checkbox"], function() {
      $.valHooks[this] = {get: function(a) {
          return null === a.getAttribute("value") ? "on" : a.value;
        }};
    }), $.each(["radio", "checkbox"], function() {
      $.valHooks[this] = $.extend($.valHooks[this], {set: function(a, b) {
          return $.isArray(b) ? a.checked = $.inArray($(a).val(), b) >= 0 : void 0;
        }});
    });
    var Bb = /^(?:textarea|input|select)$/i,
        Cb = /^([^\.]*|)(?:\.(.+)|)$/,
        Db = /(?:^|\s)hover(\.\S+|)\b/,
        Eb = /^key/,
        Fb = /^(?:mouse|contextmenu)|click/,
        Gb = /^(?:focusinfocus|focusoutblur)$/,
        Hb = function(a) {
          return $.event.special.hover ? a : a.replace(Db, "mouseenter$1 mouseleave$1");
        };
    $.event = {
      add: function(a, c, d, e, f) {
        var g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q;
        if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
          for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = $.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
            return "undefined" == typeof $ || a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments);
          }, h.elem = a), c = $.trim(Hb(c)).split(" "), j = 0; j < c.length; j++)
            k = Cb.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = $.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = $.event.special[l] || {}, n = $.extend({
              type: l,
              origType: k[1],
              data: e,
              handler: d,
              guid: d.guid,
              selector: f,
              needsContext: f && $.expr.match.needsContext.test(f),
              namespace: m.join(".")
            }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), $.event.global[l] = !0;
          a = null;
        }
      },
      global: {},
      remove: function(a, b, c, d, e) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q = $.hasData(a) && $._data(a);
        if (q && (m = q.events)) {
          for (b = $.trim(Hb(b || "")).split(" "), f = 0; f < b.length; f++)
            if (g = Cb.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
              for (n = $.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++)
                p = o[l], !(!e && i !== p.origType || c && c.guid !== p.guid || j && !j.test(p.namespace) || d && d !== p.selector && ("**" !== d || !p.selector) || (o.splice(l--, 1), p.selector && o.delegateCount--, !n.remove || !n.remove.call(a, p)));
              0 === o.length && k !== o.length && ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) && $.removeEvent(a, h, q.handle), delete m[h]);
            } else
              for (h in m)
                $.event.remove(a, h + b[f], c, d, !0);
          $.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0));
        }
      },
      customEvent: {
        getData: !0,
        setData: !0,
        changeData: !0
      },
      trigger: function(c, d, e, f) {
        if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
          var g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q = c.type || c,
              r = [];
          if (Gb.test(q + $.event.triggered))
            return ;
          if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || $.event.customEvent[q]) && !$.event.global[q])
            return ;
          if (c = "object" == typeof c ? c[$.expando] ? c : new $.Event(q, c) : new $.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", !e) {
            g = $.cache;
            for (i in g)
              g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
            return ;
          }
          if (c.result = b, c.target || (c.target = e), d = null != d ? $.makeArray(d) : [], d.unshift(c), m = $.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1)
            return ;
          if (o = [[e, m.bindType || q]], !f && !m.noBubble && !$.isWindow(e)) {
            for (p = m.delegateType || q, j = Gb.test(p + q) ? e : e.parentNode, k = e; j; j = j.parentNode)
              o.push([j, p]), k = j;
            k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p]);
          }
          for (i = 0; i < o.length && !c.isPropagationStopped(); i++)
            j = o[i][0], c.type = o[i][1], n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
          return c.type = q, !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && $.nodeName(e, "a") || !$.acceptData(e) || !l || !e[q] || ("focus" === q || "blur" === q) && 0 === c.target.offsetWidth || $.isWindow(e) || (k = e[l], k && (e[l] = null), $.event.triggered = q, e[q](), $.event.triggered = b, !k || !(e[l] = k))), c.result;
        }
      },
      dispatch: function(c) {
        c = $.event.fix(c || a.event);
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = ($._data(this, "events") || {})[c.type] || [],
            n = m.delegateCount,
            o = V.call(arguments),
            p = !c.exclusive && !c.namespace,
            q = $.event.special[c.type] || {},
            r = [];
        if (o[0] = c, c.delegateTarget = this, !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
          if (n && (!c.button || "click" !== c.type))
            for (f = c.target; f != this; f = f.parentNode || this)
              if (f.disabled !== !0 || "click" !== c.type) {
                for (h = {}, j = [], d = 0; n > d; d++)
                  k = m[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length), h[l] && j.push(k);
                j.length && r.push({
                  elem: f,
                  matches: j
                });
              }
          for (m.length > n && r.push({
            elem: this,
            matches: m.slice(n)
          }), d = 0; d < r.length && !c.isPropagationStopped(); d++)
            for (i = r[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++)
              k = i.matches[e], (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
          return q.postDispatch && q.postDispatch.call(this, c), c.result;
        }
      },
      props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(a, c) {
          var d,
              e,
              f,
              g = c.button,
              h = c.fromElement;
          return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || P, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
        }
      },
      fix: function(a) {
        if (a[$.expando])
          return a;
        var b,
            c,
            d = a,
            e = $.event.fixHooks[a.type] || {},
            f = e.props ? this.props.concat(e.props) : this.props;
        for (a = $.Event(d), b = f.length; b; )
          c = f[--b], a[c] = d[c];
        return a.target || (a.target = d.srcElement || P), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a;
      },
      special: {
        load: {noBubble: !0},
        focus: {delegateType: "focusin"},
        blur: {delegateType: "focusout"},
        beforeunload: {
          setup: function(a, b, c) {
            $.isWindow(this) && (this.onbeforeunload = c);
          },
          teardown: function(a, b) {
            this.onbeforeunload === b && (this.onbeforeunload = null);
          }
        }
      },
      simulate: function(a, b, c, d) {
        var e = $.extend(new $.Event, c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
      }
    }, $.event.handle = $.event.dispatch, $.removeEvent = P.removeEventListener ? function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
      var d = "on" + b;
      a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
    }, $.Event = function(a, b) {
      return this instanceof $.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0, void 0) : new $.Event(a, b);
    }, $.Event.prototype = {
      preventDefault: function() {
        this.isDefaultPrevented = g;
        var a = this.originalEvent;
        a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
      },
      stopPropagation: function() {
        this.isPropagationStopped = g;
        var a = this.originalEvent;
        a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = g, this.stopPropagation();
      },
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f
    }, $.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, function(a, b) {
      $.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
          return f.selector, (!e || e !== d && !$.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
        }
      };
    }), $.support.submitBubbles || ($.event.special.submit = {
      setup: function() {
        return $.nodeName(this, "form") ? !1 : ($.event.add(this, "click._submit keypress._submit", function(a) {
          var c = a.target,
              d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
          d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function(a) {
            a._submit_bubble = !0;
          }), $._data(d, "_submit_attached", !0));
        }), void 0);
      },
      postDispatch: function(a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0));
      },
      teardown: function() {
        return $.nodeName(this, "form") ? !1 : ($.event.remove(this, "._submit"), void 0);
      }
    }), $.support.changeBubbles || ($.event.special.change = {
      setup: function() {
        return Bb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function(a) {
          "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
        }), $.event.add(this, "click._change", function(a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, a, !0);
        })), !1) : ($.event.add(this, "beforeactivate._change", function(a) {
          var b = a.target;
          Bb.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function(a) {
            this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0);
          }), $._data(b, "_change_attached", !0));
        }), void 0);
      },
      handle: function(a) {
        var b = a.target;
        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
      },
      teardown: function() {
        return $.event.remove(this, "._change"), !Bb.test(this.nodeName);
      }
    }), $.support.focusinBubbles || $.each({
      focus: "focusin",
      blur: "focusout"
    }, function(a, b) {
      var c = 0,
          d = function(a) {
            $.event.simulate(b, a.target, $.event.fix(a), !0);
          };
      $.event.special[b] = {
        setup: function() {
          0 === c++ && P.addEventListener(a, d, !0);
        },
        teardown: function() {
          0 === --c && P.removeEventListener(a, d, !0);
        }
      };
    }), $.fn.extend({
      on: function(a, c, d, e, g) {
        var h,
            i;
        if ("object" == typeof a) {
          "string" != typeof c && (d = d || c, c = b);
          for (i in a)
            this.on(i, c, d, a[i], g);
          return this;
        }
        if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)
          e = f;
        else if (!e)
          return this;
        return 1 === g && (h = e, e = function(a) {
          return $().off(a), h.apply(this, arguments);
        }, e.guid = h.guid || (h.guid = $.guid++)), this.each(function() {
          $.event.add(this, a, e, d, c);
        });
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function(a, c, d) {
        var e,
            g;
        if (a && a.preventDefault && a.handleObj)
          return e = a.handleObj, $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
        if ("object" == typeof a) {
          for (g in a)
            this.off(g, c, a[g]);
          return this;
        }
        return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = f), this.each(function() {
          $.event.remove(this, a, d, c);
        });
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function(a, b) {
        return this.off(a, null, b);
      },
      live: function(a, b, c) {
        return $(this.context).on(a, this.selector, b, c), this;
      },
      die: function(a, b) {
        return $(this.context).off(a, this.selector || "**", b), this;
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
      },
      trigger: function(a, b) {
        return this.each(function() {
          $.event.trigger(a, b, this);
        });
      },
      triggerHandler: function(a, b) {
        return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0;
      },
      toggle: function(a) {
        var b = arguments,
            c = a.guid || $.guid++,
            d = 0,
            e = function(c) {
              var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
              return $._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1;
            };
        for (e.guid = c; d < b.length; )
          b[d++].guid = c;
        return this.click(e);
      },
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      }
    }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
      $.fn[b] = function(a, c) {
        return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
      }, Eb.test(b) && ($.event.fixHooks[b] = $.event.keyHooks), Fb.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks);
    }), function(a, b) {
      function c(a, b, c, d) {
        c = c || [], b = b || F;
        var e,
            f,
            g,
            h,
            i = b.nodeType;
        if (!a || "string" != typeof a)
          return c;
        if (1 !== i && 9 !== i)
          return [];
        if (g = v(b), !g && !d && (e = cb.exec(a)))
          if (h = e[1]) {
            if (9 === i) {
              if (f = b.getElementById(h), !f || !f.parentNode)
                return c;
              if (f.id === h)
                return c.push(f), c;
            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h)
              return c.push(f), c;
          } else {
            if (e[2])
              return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
            if ((h = e[3]) && mb && b.getElementsByClassName)
              return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c;
          }
        return p(a.replace(Z, "$1"), b, c, d, g);
      }
      function d(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function e(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function f(a) {
        return N(function(b) {
          return b = +b, N(function(c, d) {
            for (var e,
                f = a([], c.length, b),
                g = f.length; g--; )
              c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          });
        });
      }
      function g(a, b, c) {
        if (a === b)
          return c;
        for (var d = a.nextSibling; d; ) {
          if (d === b)
            return -1;
          d = d.nextSibling;
        }
        return 1;
      }
      function h(a, b) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = Q[D][a + " "];
        if (k)
          return b ? 0 : k.slice(0);
        for (h = a, i = [], j = t.preFilter; h; ) {
          (!d || (e = _.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ab.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " "));
          for (g in t.filter)
            (e = hb[g].exec(h)) && (!j[g] || (e = j[g](e))) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
          if (!d)
            break;
        }
        return b ? h.length : h ? c.error(a) : Q(a, i).slice(0);
      }
      function i(a, b, c) {
        var d = b.dir,
            e = c && "parentNode" === b.dir,
            f = I++;
        return b.first ? function(b, c, f) {
          for (; b = b[d]; )
            if (e || 1 === b.nodeType)
              return a(b, c, f);
        } : function(b, c, g) {
          if (g) {
            for (; b = b[d]; )
              if ((e || 1 === b.nodeType) && a(b, c, g))
                return b;
          } else
            for (var h,
                i = H + " " + f + " ",
                j = i + r; b = b[d]; )
              if (e || 1 === b.nodeType) {
                if ((h = b[D]) === j)
                  return b.sizset;
                if ("string" == typeof h && 0 === h.indexOf(i)) {
                  if (b.sizset)
                    return b;
                } else {
                  if (b[D] = j, a(b, c, g))
                    return b.sizset = !0, b;
                  b.sizset = !1;
                }
              }
        };
      }
      function j(a) {
        return a.length > 1 ? function(b, c, d) {
          for (var e = a.length; e--; )
            if (!a[e](b, c, d))
              return !1;
          return !0;
        } : a[0];
      }
      function k(a, b, c, d, e) {
        for (var f,
            g = [],
            h = 0,
            i = a.length,
            j = null != b; i > h; h++)
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g;
      }
      function l(a, b, c, d, e, f) {
        return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function(f, g, h, i) {
          var j,
              l,
              m,
              n = [],
              p = [],
              q = g.length,
              r = f || o(b || "*", h.nodeType ? [h] : h, []),
              s = !a || !f && b ? r : k(r, n, a, h, i),
              t = c ? e || (f ? a : q || d) ? [] : g : s;
          if (c && c(s, t, h, i), d)
            for (j = k(t, p), d(j, [], h, i), l = j.length; l--; )
              (m = j[l]) && (t[p[l]] = !(s[p[l]] = m));
          if (f) {
            if (e || a) {
              if (e) {
                for (j = [], l = t.length; l--; )
                  (m = t[l]) && j.push(s[l] = m);
                e(null, t = [], j, i);
              }
              for (l = t.length; l--; )
                (m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m));
            }
          } else
            t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t);
        });
      }
      function m(a) {
        for (var b,
            c,
            d,
            e = a.length,
            f = t.relative[a[0].type],
            g = f || t.relative[" "],
            h = f ? 1 : 0,
            k = i(function(a) {
              return a === b;
            }, g, !0),
            n = i(function(a) {
              return M.call(b, a) > -1;
            }, g, !0),
            o = [function(a, c, d) {
              return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d));
            }]; e > h; h++)
          if (c = t.relative[a[h].type])
            o = [i(j(o), c)];
          else {
            if (c = t.filter[a[h].type].apply(null, a[h].matches), c[D]) {
              for (d = ++h; e > d && !t.relative[a[d].type]; d++)
                ;
              return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""));
            }
            o.push(c);
          }
        return j(o);
      }
      function n(a, b) {
        var d = b.length > 0,
            e = a.length > 0,
            f = function(g, h, i, j, l) {
              var m,
                  n,
                  o,
                  p = [],
                  q = 0,
                  s = "0",
                  u = g && [],
                  v = null != l,
                  w = A,
                  x = g || e && t.find.TAG("*", l && h.parentNode || h),
                  y = H += null == w ? 1 : Math.E;
              for (v && (A = h !== F && h, r = f.el); null != (m = x[s]); s++) {
                if (e && m) {
                  for (n = 0; o = a[n]; n++)
                    if (o(m, h, i)) {
                      j.push(m);
                      break;
                    }
                  v && (H = y, r = ++f.el);
                }
                d && ((m = !o && m) && q--, g && u.push(m));
              }
              if (q += s, d && s !== q) {
                for (n = 0; o = b[n]; n++)
                  o(u, p, h, i);
                if (g) {
                  if (q > 0)
                    for (; s--; )
                      !u[s] && !p[s] && (p[s] = J.call(j));
                  p = k(p);
                }
                K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j);
              }
              return v && (H = y, A = w), u;
            };
        return f.el = 0, d ? N(f) : f;
      }
      function o(a, b, d) {
        for (var e = 0,
            f = b.length; f > e; e++)
          c(a, b[e], d);
        return d;
      }
      function p(a, b, c, d, e) {
        var f,
            g,
            i,
            j,
            k,
            l = h(a);
        if (l.length, !d && 1 === l.length) {
          if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
            if (b = t.find.ID(i.matches[0].replace(gb, ""), b, e)[0], !b)
              return c;
            a = a.slice(g.shift().length);
          }
          for (f = hb.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f], !t.relative[j = i.type]); f--)
            if ((k = t.find[j]) && (d = k(i.matches[0].replace(gb, ""), db.test(g[0].type) && b.parentNode || b, e))) {
              if (g.splice(f, 1), a = d.length && g.join(""), !a)
                return K.apply(c, L.call(d, 0)), c;
              break;
            }
        }
        return x(a, l)(d, b, e, c, db.test(a)), c;
      }
      function q() {}
      var r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B = !0,
          C = "undefined",
          D = ("sizcache" + Math.random()).replace(".", ""),
          E = String,
          F = a.document,
          G = F.documentElement,
          H = 0,
          I = 0,
          J = [].pop,
          K = [].push,
          L = [].slice,
          M = [].indexOf || function(a) {
            for (var b = 0,
                c = this.length; c > b; b++)
              if (this[b] === a)
                return b;
            return -1;
          },
          N = function(a, b) {
            return a[D] = null == b || b, a;
          },
          O = function() {
            var a = {},
                b = [];
            return N(function(c, d) {
              return b.push(c) > t.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }, a);
          },
          P = O(),
          Q = O(),
          R = O(),
          S = "[\\x20\\t\\r\\n\\f]",
          T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
          U = T.replace("w", "w#"),
          V = "([*^$|!~]?=)",
          W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]",
          X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)",
          Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)",
          Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"),
          _ = new RegExp("^" + S + "*," + S + "*"),
          ab = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"),
          bb = new RegExp(X),
          cb = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
          db = /[\x20\t\r\n\f]*[+~]/,
          eb = /h\d/i,
          fb = /input|select|textarea|button/i,
          gb = /\\(?!\\)/g,
          hb = {
            ID: new RegExp("^#(" + T + ")"),
            CLASS: new RegExp("^\\.(" + T + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
            TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + X),
            POS: new RegExp(Y, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
            needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
          },
          ib = function(a) {
            var b = F.createElement("div");
            try {
              return a(b);
            } catch (c) {
              return !1;
            } finally {
              b = null;
            }
          },
          jb = ib(function(a) {
            return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length;
          }),
          kb = ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href");
          }),
          lb = ib(function(a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b;
          }),
          mb = ib(function(a) {
            return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1;
          }),
          nb = ib(function(a) {
            a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
            var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
            return s = !F.getElementById(D), G.removeChild(a), b;
          });
      try {
        L.call(G.childNodes, 0)[0].nodeType;
      } catch (ob) {
        L = function(a) {
          for (var b,
              c = []; b = this[a]; a++)
            c.push(b);
          return c;
        };
      }
      c.matches = function(a, b) {
        return c(a, null, null, b);
      }, c.matchesSelector = function(a, b) {
        return c(b, null, null, [a]).length > 0;
      }, u = c.getText = function(a) {
        var b,
            c = "",
            d = 0,
            e = a.nodeType;
        if (e) {
          if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof a.textContent)
              return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling)
              c += u(a);
          } else if (3 === e || 4 === e)
            return a.nodeValue;
        } else
          for (; b = a[d]; d++)
            c += u(b);
        return c;
      }, v = c.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1;
      }, w = c.contains = G.contains ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d));
      } : G.compareDocumentPosition ? function(a, b) {
        return b && !!(16 & a.compareDocumentPosition(b));
      } : function(a, b) {
        for (; b = b.parentNode; )
          if (b === a)
            return !0;
        return !1;
      }, c.attr = function(a, b) {
        var c,
            d = v(a);
        return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || lb ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null);
      }, t = c.selectors = {
        cacheLength: 50,
        createPseudo: N,
        match: hb,
        attrHandle: kb ? {} : {
          href: function(a) {
            return a.getAttribute("href", 2);
          },
          type: function(a) {
            return a.getAttribute("type");
          }
        },
        find: {
          ID: s ? function(a, b, c) {
            if (typeof b.getElementById !== C && !c) {
              var d = b.getElementById(a);
              return d && d.parentNode ? [d] : [];
            }
          } : function(a, c, d) {
            if (typeof c.getElementById !== C && !d) {
              var e = c.getElementById(a);
              return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : [];
            }
          },
          TAG: jb ? function(a, b) {
            return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0;
          } : function(a, b) {
            var c = b.getElementsByTagName(a);
            if ("*" === a) {
              for (var d,
                  e = [],
                  f = 0; d = c[f]; f++)
                1 === d.nodeType && e.push(d);
              return e;
            }
            return c;
          },
          NAME: nb && function(a, b) {
            return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0;
          },
          CLASS: mb && function(a, b, c) {
            return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a);
          }
        },
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {dir: "parentNode"},
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {dir: "previousSibling"}
        },
        preFilter: {
          ATTR: function(a) {
            return a[1] = a[1].replace(gb, ""), a[3] = (a[4] || a[5] || "").replace(gb, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
          },
          CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]), a;
          },
          PSEUDO: function(a) {
            var b,
                c;
            return hb.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[3] : (b = a[4]) && (bb.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3));
          }
        },
        filter: {
          ID: s ? function(a) {
            return a = a.replace(gb, ""), function(b) {
              return b.getAttribute("id") === a;
            };
          } : function(a) {
            return a = a.replace(gb, ""), function(b) {
              var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
              return c && c.value === a;
            };
          },
          TAG: function(a) {
            return "*" === a ? function() {
              return !0;
            } : (a = a.replace(gb, "").toLowerCase(), function(b) {
              return b.nodeName && b.nodeName.toLowerCase() === a;
            });
          },
          CLASS: function(a) {
            var b = P[D][a + " "];
            return b || (b = new RegExp("(^|" + S + ")" + a + "(" + S + "|$)")) && P(a, function(a) {
              return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "");
            });
          },
          ATTR: function(a, b, d) {
            return function(e) {
              var f = c.attr(e, a);
              return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.substr(f.length - d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0;
            };
          },
          CHILD: function(a, b, c, d) {
            return "nth" === a ? function(a) {
              var b,
                  e,
                  f = a.parentNode;
              if (1 === c && 0 === d)
                return !0;
              if (f)
                for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling)
                  ;
              return e -= d, e === c || 0 === e % c && e / c >= 0;
            } : function(b) {
              var c = b;
              switch (a) {
                case "only":
                case "first":
                  for (; c = c.previousSibling; )
                    if (1 === c.nodeType)
                      return !1;
                  if ("first" === a)
                    return !0;
                  c = b;
                case "last":
                  for (; c = c.nextSibling; )
                    if (1 === c.nodeType)
                      return !1;
                  return !0;
              }
            };
          },
          PSEUDO: function(a, b) {
            var d,
                e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
            return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function(a, c) {
              for (var d,
                  f = e(a, b),
                  g = f.length; g--; )
                d = M.call(a, f[g]), a[d] = !(c[d] = f[g]);
            }) : function(a) {
              return e(a, 0, d);
            }) : e;
          }
        },
        pseudos: {
          not: N(function(a) {
            var b = [],
                c = [],
                d = x(a.replace(Z, "$1"));
            return d[D] ? N(function(a, b, c, e) {
              for (var f,
                  g = d(a, null, e, []),
                  h = a.length; h--; )
                (f = g[h]) && (a[h] = !(b[h] = f));
            }) : function(a, e, f) {
              return b[0] = a, d(b, null, f, c), !c.pop();
            };
          }),
          has: N(function(a) {
            return function(b) {
              return c(a, b).length > 0;
            };
          }),
          contains: N(function(a) {
            return function(b) {
              return (b.textContent || b.innerText || u(b)).indexOf(a) > -1;
            };
          }),
          enabled: function(a) {
            return a.disabled === !1;
          },
          disabled: function(a) {
            return a.disabled === !0;
          },
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected;
          },
          selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
          },
          parent: function(a) {
            return !t.pseudos.empty(a);
          },
          empty: function(a) {
            var b;
            for (a = a.firstChild; a; ) {
              if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b)
                return !1;
              a = a.nextSibling;
            }
            return !0;
          },
          header: function(a) {
            return eb.test(a.nodeName);
          },
          text: function(a) {
            var b,
                c;
            return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b);
          },
          radio: d("radio"),
          checkbox: d("checkbox"),
          file: d("file"),
          password: d("password"),
          image: d("image"),
          submit: e("submit"),
          reset: e("reset"),
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b;
          },
          input: function(a) {
            return fb.test(a.nodeName);
          },
          focus: function(a) {
            var b = a.ownerDocument;
            return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
          },
          active: function(a) {
            return a === a.ownerDocument.activeElement;
          },
          first: f(function() {
            return [0];
          }),
          last: f(function(a, b) {
            return [b - 1];
          }),
          eq: f(function(a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: f(function(a, b) {
            for (var c = 0; b > c; c += 2)
              a.push(c);
            return a;
          }),
          odd: f(function(a, b) {
            for (var c = 1; b > c; c += 2)
              a.push(c);
            return a;
          }),
          lt: f(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0; )
              a.push(d);
            return a;
          }),
          gt: f(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b; )
              a.push(d);
            return a;
          })
        }
      }, y = G.compareDocumentPosition ? function(a, b) {
        return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1;
      } : function(a, b) {
        if (a === b)
          return z = !0, 0;
        if (a.sourceIndex && b.sourceIndex)
          return a.sourceIndex - b.sourceIndex;
        var c,
            d,
            e = [],
            f = [],
            h = a.parentNode,
            i = b.parentNode,
            j = h;
        if (h === i)
          return g(a, b);
        if (!h)
          return -1;
        if (!i)
          return 1;
        for (; j; )
          e.unshift(j), j = j.parentNode;
        for (j = i; j; )
          f.unshift(j), j = j.parentNode;
        c = e.length, d = f.length;
        for (var k = 0; c > k && d > k; k++)
          if (e[k] !== f[k])
            return g(e[k], f[k]);
        return k === c ? g(a, f[k], -1) : g(e[k], b, 1);
      }, [0, 0].sort(y), B = !z, c.uniqueSort = function(a) {
        var b,
            c = [],
            d = 1,
            e = 0;
        if (z = B, a.sort(y), z) {
          for (; b = a[d]; d++)
            b === a[d - 1] && (e = c.push(d));
          for (; e--; )
            a.splice(c[e], 1);
        }
        return a;
      }, c.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }, x = c.compile = function(a, b) {
        var c,
            d = [],
            e = [],
            f = R[D][a + " "];
        if (!f) {
          for (b || (b = h(a)), c = b.length; c--; )
            f = m(b[c]), f[D] ? d.push(f) : e.push(f);
          f = R(a, n(e, d));
        }
        return f;
      }, F.querySelectorAll && function() {
        var a,
            b = p,
            d = /'|\\/g,
            e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            f = [":focus"],
            g = [":active"],
            i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
        ib(function(a) {
          a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked");
        }), ib(function(a) {
          a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled");
        }), f = new RegExp(f.join("|")), p = function(a, c, e, g, i) {
          if (!g && !i && !f.test(a)) {
            var j,
                k,
                l = !0,
                m = D,
                n = c,
                o = 9 === c.nodeType && a;
            if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
              for (j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length; k--; )
                j[k] = m + j[k].join("");
              n = db.test(a) && c.parentNode || c, o = j.join(",");
            }
            if (o)
              try {
                return K.apply(e, L.call(n.querySelectorAll(o), 0)), e;
              } catch (p) {} finally {
                l || c.removeAttribute("id");
              }
          }
          return b(a, c, e, g, i);
        }, i && (ib(function(b) {
          a = i.call(b, "div");
          try {
            i.call(b, "[test!='']:sizzle"), g.push("!=", X);
          } catch (c) {}
        }), g = new RegExp(g.join("|")), c.matchesSelector = function(b, d) {
          if (d = d.replace(e, "='$1']"), !v(b) && !g.test(d) && !f.test(d))
            try {
              var h = i.call(b, d);
              if (h || a || b.document && 11 !== b.document.nodeType)
                return h;
            } catch (j) {}
          return c(d, null, null, [b]).length > 0;
        });
      }(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = $.attr, $.find = c, $.expr = c.selectors, $.expr[":"] = $.expr.pseudos, $.unique = c.uniqueSort, $.text = c.getText, $.isXMLDoc = c.isXML, $.contains = c.contains;
    }(a);
    var Ib = /Until$/,
        Jb = /^(?:parents|prev(?:Until|All))/,
        Kb = /^.[^:#\[\.,]*$/,
        Lb = $.expr.match.needsContext,
        Mb = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
    $.fn.extend({
      find: function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = this;
        if ("string" != typeof a)
          return $(a).filter(function() {
            for (b = 0, c = h.length; c > b; b++)
              if ($.contains(h[b], this))
                return !0;
          });
        for (g = this.pushStack("", "find", a), b = 0, c = this.length; c > b; b++)
          if (d = g.length, $.find(a, this[b], g), b > 0)
            for (e = d; e < g.length; e++)
              for (f = 0; d > f; f++)
                if (g[f] === g[e]) {
                  g.splice(e--, 1);
                  break;
                }
        return g;
      },
      has: function(a) {
        var b,
            c = $(a, this),
            d = c.length;
        return this.filter(function() {
          for (b = 0; d > b; b++)
            if ($.contains(this, c[b]))
              return !0;
        });
      },
      not: function(a) {
        return this.pushStack(j(this, a, !1), "not", a);
      },
      filter: function(a) {
        return this.pushStack(j(this, a, !0), "filter", a);
      },
      is: function(a) {
        return !!a && ("string" == typeof a ? Lb.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0);
      },
      closest: function(a, b) {
        for (var c,
            d = 0,
            e = this.length,
            f = [],
            g = Lb.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; e > d; d++)
          for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType; ) {
            if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
              f.push(c);
              break;
            }
            c = c.parentNode;
          }
        return f = f.length > 1 ? $.unique(f) : f, this.pushStack(f, "closest", a);
      },
      index: function(a) {
        return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
      },
      add: function(a, b) {
        var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a),
            d = $.merge(this.get(), c);
        return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d));
      },
      addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
      }
    }), $.fn.andSelf = $.fn.addBack, $.each({
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function(a) {
        return $.dir(a, "parentNode");
      },
      parentsUntil: function(a, b, c) {
        return $.dir(a, "parentNode", c);
      },
      next: function(a) {
        return i(a, "nextSibling");
      },
      prev: function(a) {
        return i(a, "previousSibling");
      },
      nextAll: function(a) {
        return $.dir(a, "nextSibling");
      },
      prevAll: function(a) {
        return $.dir(a, "previousSibling");
      },
      nextUntil: function(a, b, c) {
        return $.dir(a, "nextSibling", c);
      },
      prevUntil: function(a, b, c) {
        return $.dir(a, "previousSibling", c);
      },
      siblings: function(a) {
        return $.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function(a) {
        return $.sibling(a.firstChild);
      },
      contents: function(a) {
        return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes);
      }
    }, function(a, b) {
      $.fn[a] = function(c, d) {
        var e = $.map(this, b, c);
        return Ib.test(a) || (d = c), d && "string" == typeof d && (e = $.filter(d, e)), e = this.length > 1 && !Mb[a] ? $.unique(e) : e, this.length > 1 && Jb.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(","));
      };
    }), $.extend({
      filter: function(a, b, c) {
        return c && (a = ":not(" + a + ")"), 1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b);
      },
      dir: function(a, c, d) {
        for (var e = [],
            f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d)); )
          1 === f.nodeType && e.push(f), f = f[c];
        return e;
      },
      sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      }
    });
    var Nb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ob = / jQuery\d+="(?:null|\d+)"/g,
        Pb = /^\s+/,
        Qb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Rb = /<([\w:]+)/,
        Sb = /<tbody/i,
        Tb = /<|&#?\w+;/,
        Ub = /<(?:script|style|link)/i,
        Vb = /<(?:script|object|embed|option|style)/i,
        Wb = new RegExp("<(?:" + Nb + ")[\\s/>]", "i"),
        Xb = /^(?:checkbox|radio)$/,
        Yb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Zb = /\/(java|ecma)script/i,
        $b = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        _b = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          area: [1, "<map>", "</map>"],
          _default: [0, "", ""]
        },
        ac = k(P),
        bc = ac.appendChild(P.createElement("div"));
    _b.optgroup = _b.option, _b.tbody = _b.tfoot = _b.colgroup = _b.caption = _b.thead, _b.th = _b.td, $.support.htmlSerialize || (_b._default = [1, "X<div>", "</div>"]), $.fn.extend({
      text: function(a) {
        return $.access(this, function(a) {
          return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a));
        }, null, a, arguments.length);
      },
      wrapAll: function(a) {
        if ($.isFunction(a))
          return this.each(function(b) {
            $(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
              a = a.firstChild;
            return a;
          }).append(this);
        }
        return this;
      },
      wrapInner: function(a) {
        return $.isFunction(a) ? this.each(function(b) {
          $(this).wrapInner(a.call(this, b));
        }) : this.each(function() {
          var b = $(this),
              c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a);
        });
      },
      wrap: function(a) {
        var b = $.isFunction(a);
        return this.each(function(c) {
          $(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function() {
        return this.parent().each(function() {
          $.nodeName(this, "body") || $(this).replaceWith(this.childNodes);
        }).end();
      },
      append: function() {
        return this.domManip(arguments, !0, function(a) {
          (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a);
        });
      },
      prepend: function() {
        return this.domManip(arguments, !0, function(a) {
          (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild);
        });
      },
      before: function() {
        if (!h(this[0]))
          return this.domManip(arguments, !1, function(a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = $.clean(arguments);
          return this.pushStack($.merge(a, this), "before", this.selector);
        }
      },
      after: function() {
        if (!h(this[0]))
          return this.domManip(arguments, !1, function(a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = $.clean(arguments);
          return this.pushStack($.merge(this, a), "after", this.selector);
        }
      },
      remove: function(a, b) {
        for (var c,
            d = 0; null != (c = this[d]); d++)
          (!a || $.filter(a, [c]).length) && (!b && 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
        return this;
      },
      empty: function() {
        for (var a,
            b = 0; null != (a = this[b]); b++)
          for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild; )
            a.removeChild(a.firstChild);
        return this;
      },
      clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
          return $.clone(this, a, b);
        });
      },
      html: function(a) {
        return $.access(this, function(a) {
          var c = this[0] || {},
              d = 0,
              e = this.length;
          if (a === b)
            return 1 === c.nodeType ? c.innerHTML.replace(Ob, "") : b;
          if (!("string" != typeof a || Ub.test(a) || !$.support.htmlSerialize && Wb.test(a) || !$.support.leadingWhitespace && Pb.test(a) || _b[(Rb.exec(a) || ["", ""])[1].toLowerCase()])) {
            a = a.replace(Qb, "<$1></$2>");
            try {
              for (; e > d; d++)
                c = this[d] || {}, 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
              c = 0;
            } catch (f) {}
          }
          c && this.empty().append(a);
        }, null, a, arguments.length);
      },
      replaceWith: function(a) {
        return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function(b) {
          var c = $(this),
              d = c.html();
          c.replaceWith(a.call(this, b, d));
        }) : ("string" != typeof a && (a = $(a).detach()), this.each(function() {
          var b = this.nextSibling,
              c = this.parentNode;
          $(this).remove(), b ? $(b).before(a) : $(c).append(a);
        }));
      },
      detach: function(a) {
        return this.remove(a, !0);
      },
      domManip: function(a, c, d) {
        a = [].concat.apply([], a);
        var e,
            f,
            g,
            h,
            i = 0,
            j = a[0],
            k = [],
            m = this.length;
        if (!$.support.checkClone && m > 1 && "string" == typeof j && Yb.test(j))
          return this.each(function() {
            $(this).domManip(a, c, d);
          });
        if ($.isFunction(j))
          return this.each(function(e) {
            var f = $(this);
            a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d);
          });
        if (this[0]) {
          if (e = $.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f)
            for (c = c && $.nodeName(f, "tr"), h = e.cacheable || m - 1; m > i; i++)
              d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0));
          g = f = null, k.length && $.each(k, function(a, b) {
            b.src ? $.ajax ? $.ajax({
              url: b.src,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              "throws": !0
            }) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($b, "")), b.parentNode && b.parentNode.removeChild(b);
          });
        }
        return this;
      }
    }), $.buildFragment = function(a, c, d) {
      var e,
          f,
          g,
          h = a[0];
      return c = c || P, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, 1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0) && !Vb.test(h) && ($.support.checkClone || !Yb.test(h)) && ($.support.html5Clone || !Wb.test(h)) && (f = !0, e = $.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)), {
        fragment: e,
        cacheable: f
      };
    }, $.fragments = {}, $.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(a, b) {
      $.fn[a] = function(c) {
        var d,
            e = 0,
            f = [],
            g = $(c),
            h = g.length,
            i = 1 === this.length && this[0].parentNode;
        if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h)
          return g[b](this[0]), this;
        for (; h > e; e++)
          d = (e > 0 ? this.clone(!0) : this).get(), $(g[e])[b](d), f = f.concat(d);
        return this.pushStack(f, a, g.selector);
      };
    }), $.extend({
      clone: function(a, b, c) {
        var d,
            e,
            f,
            g;
        if ($.support.html5Clone || $.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bc.innerHTML = a.outerHTML, bc.removeChild(g = bc.firstChild)), !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))
          for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f)
            e[f] && n(d[f], e[f]);
        if (b && (m(a, g), c))
          for (d = o(a), e = o(g), f = 0; d[f]; ++f)
            m(d[f], e[f]);
        return d = e = null, g;
      },
      clean: function(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j,
            l,
            m,
            n,
            o,
            q,
            r = b === P && ac,
            s = [];
        for (b && "undefined" != typeof b.createDocumentFragment || (b = P), e = 0; null != (g = a[e]); e++)
          if ("number" == typeof g && (g += ""), g) {
            if ("string" == typeof g)
              if (Tb.test(g)) {
                for (r = r || k(b), l = b.createElement("div"), r.appendChild(l), g = g.replace(Qb, "<$1></$2>"), h = (Rb.exec(g) || ["", ""])[1].toLowerCase(), i = _b[h] || _b._default, j = i[0], l.innerHTML = i[1] + g + i[2]; j--; )
                  l = l.lastChild;
                if (!$.support.tbody)
                  for (m = Sb.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes, f = n.length - 1; f >= 0; --f)
                    $.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
                !$.support.leadingWhitespace && Pb.test(g) && l.insertBefore(b.createTextNode(Pb.exec(g)[0]), l.firstChild), g = l.childNodes, l.parentNode.removeChild(l);
              } else
                g = b.createTextNode(g);
            g.nodeType ? s.push(g) : $.merge(s, g);
          }
        if (l && (g = l = r = null), !$.support.appendChecked)
          for (e = 0; null != (g = s[e]); e++)
            $.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
        if (c)
          for (o = function(a) {
            return !a.type || Zb.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0;
          }, e = 0; null != (g = s[e]); e++)
            $.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(q)), e += q.length));
        return s;
      },
      cleanData: function(a, b) {
        for (var c,
            d,
            e,
            f,
            g = 0,
            h = $.expando,
            i = $.cache,
            j = $.support.deleteExpando,
            k = $.event.special; null != (e = a[g]); g++)
          if ((b || $.acceptData(e)) && (d = e[h], c = d && i[d])) {
            if (c.events)
              for (f in c.events)
                k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
            i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, $.deletedIds.push(d));
          }
      }
    }), function() {
      var a,
          b;
      $.uaMatch = function(a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
          browser: b[1] || "",
          version: b[2] || "0"
        };
      }, a = $.uaMatch(R.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), $.browser = b, $.sub = function() {
        function a(b, c) {
          return new a.fn.init(b, c);
        }
        $.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
          return d && d instanceof $ && !(d instanceof a) && (d = a(d)), $.fn.init.call(this, c, d, b);
        }, a.fn.init.prototype = a.fn;
        var b = a(P);
        return a;
      };
    }();
    var cc,
        dc,
        ec,
        fc = /alpha\([^)]*\)/i,
        gc = /opacity=([^)]*)/,
        hc = /^(top|right|bottom|left)$/,
        ic = /^(none|table(?!-c[ea]).+)/,
        jc = /^margin/,
        kc = new RegExp("^(" + _ + ")(.*)$", "i"),
        lc = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        mc = new RegExp("^([-+])=(" + _ + ")", "i"),
        nc = {BODY: "block"},
        oc = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        pc = {
          letterSpacing: 0,
          fontWeight: 400
        },
        qc = ["Top", "Right", "Bottom", "Left"],
        rc = ["Webkit", "O", "Moz", "ms"],
        sc = $.fn.toggle;
    $.fn.extend({
      css: function(a, c) {
        return $.access(this, function(a, c, d) {
          return d !== b ? $.style(a, c, d) : $.css(a, c);
        }, a, c, arguments.length > 1);
      },
      show: function() {
        return s(this, !0);
      },
      hide: function() {
        return s(this);
      },
      toggle: function(a, b) {
        var c = "boolean" == typeof a;
        return $.isFunction(a) && $.isFunction(b) ? sc.apply(this, arguments) : this.each(function() {
          (c ? a : r(this)) ? $(this).show() : $(this).hide();
        });
      }
    }), $.extend({
      cssHooks: {opacity: {get: function(a, b) {
            if (b) {
              var c = cc(a, "opacity");
              return "" === c ? "1" : c;
            }
          }}},
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {"float": $.support.cssFloat ? "cssFloat" : "styleFloat"},
      style: function(a, c, d, e) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var f,
              g,
              h,
              i = $.camelCase(c),
              j = a.style;
          if (c = $.cssProps[i] || ($.cssProps[i] = q(j, i)), h = $.cssHooks[c] || $.cssHooks[i], d === b)
            return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
          if (g = typeof d, "string" === g && (f = mc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" === g && !$.cssNumber[i] && (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b)))
            try {
              j[c] = d;
            } catch (k) {}
        }
      },
      css: function(a, c, d, e) {
        var f,
            g,
            h,
            i = $.camelCase(c);
        return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)), h = $.cssHooks[c] || $.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = cc(a, c)), "normal" === f && c in pc && (f = pc[c]), d || e !== b ? (g = parseFloat(f), d || $.isNumeric(g) ? g || 0 : f) : f;
      },
      swap: function(a, b, c) {
        var d,
            e,
            f = {};
        for (e in b)
          f[e] = a.style[e], a.style[e] = b[e];
        d = c.call(a);
        for (e in b)
          a.style[e] = f[e];
        return d;
      }
    }), a.getComputedStyle ? cc = function(b, c) {
      var d,
          e,
          f,
          g,
          h = a.getComputedStyle(b, null),
          i = b.style;
      return h && (d = h.getPropertyValue(c) || h[c], "" === d && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)), lc.test(d) && jc.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d;
    } : P.documentElement.currentStyle && (cc = function(a, b) {
      var c,
          d,
          e = a.currentStyle && a.currentStyle[b],
          f = a.style;
      return null == e && f && f[b] && (e = f[b]), lc.test(e) && !hc.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e;
    }), $.each(["height", "width"], function(a, b) {
      $.cssHooks[b] = {
        get: function(a, c, d) {
          return c ? 0 === a.offsetWidth && ic.test(cc(a, "display")) ? $.swap(a, oc, function() {
            return v(a, b, d);
          }) : v(a, b, d) : void 0;
        },
        set: function(a, c, d) {
          return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0);
        }
      };
    }), $.support.opacity || ($.cssHooks.opacity = {
      get: function(a, b) {
        return gc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
      },
      set: function(a, b) {
        var c = a.style,
            d = a.currentStyle,
            e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = d && d.filter || c.filter || "";
        c.zoom = 1, b >= 1 && "" === $.trim(f.replace(fc, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = fc.test(f) ? f.replace(fc, e) : f + " " + e);
      }
    }), $(function() {
      $.support.reliableMarginRight || ($.cssHooks.marginRight = {get: function(a, b) {
          return $.swap(a, {display: "inline-block"}, function() {
            return b ? cc(a, "marginRight") : void 0;
          });
        }}), !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function(a, b) {
        $.cssHooks[b] = {get: function(a, c) {
            if (c) {
              var d = cc(a, b);
              return lc.test(d) ? $(a).position()[b] + "px" : d;
            }
          }};
      });
    }), $.expr && $.expr.filters && ($.expr.filters.hidden = function(a) {
      return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cc(a, "display"));
    }, $.expr.filters.visible = function(a) {
      return !$.expr.filters.hidden(a);
    }), $.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(a, b) {
      $.cssHooks[a + b] = {expand: function(c) {
          var d,
              e = "string" == typeof c ? c.split(" ") : [c],
              f = {};
          for (d = 0; 4 > d; d++)
            f[a + qc[d] + b] = e[d] || e[d - 2] || e[0];
          return f;
        }}, jc.test(a) || ($.cssHooks[a + b].set = t);
    });
    var tc = /%20/g,
        uc = /\[\]$/,
        vc = /\r?\n/g,
        wc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        xc = /^(?:select|textarea)/i;
    $.fn.extend({
      serialize: function() {
        return $.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          return this.elements ? $.makeArray(this.elements) : this;
        }).filter(function() {
          return this.name && !this.disabled && (this.checked || xc.test(this.nodeName) || wc.test(this.type));
        }).map(function(a, b) {
          var c = $(this).val();
          return null == c ? null : $.isArray(c) ? $.map(c, function(a) {
            return {
              name: b.name,
              value: a.replace(vc, "\r\n")
            };
          }) : {
            name: b.name,
            value: c.replace(vc, "\r\n")
          };
        }).get();
      }
    }), $.param = function(a, c) {
      var d,
          e = [],
          f = function(a, b) {
            b = $.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
          };
      if (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || a.jquery && !$.isPlainObject(a))
        $.each(a, function() {
          f(this.name, this.value);
        });
      else
        for (d in a)
          x(d, a[d], c, f);
      return e.join("&").replace(tc, "+");
    };
    var yc,
        zc,
        Ac = /#.*$/,
        Bc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cc = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Dc = /^(?:GET|HEAD)$/,
        Ec = /^\/\//,
        Fc = /\?/,
        Gc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hc = /([?&])_=[^&]*/,
        Ic = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Jc = $.fn.load,
        Kc = {},
        Lc = {},
        Mc = ["*/"] + ["*"];
    try {
      zc = Q.href;
    } catch (Nc) {
      zc = P.createElement("a"), zc.href = "", zc = zc.href;
    }
    yc = Ic.exec(zc.toLowerCase()) || [], $.fn.load = function(a, c, d) {
      if ("string" != typeof a && Jc)
        return Jc.apply(this, arguments);
      if (!this.length)
        return this;
      var e,
          f,
          g,
          h = this,
          i = a.indexOf(" ");
      return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), $.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), $.ajax({
        url: a,
        type: f,
        dataType: "html",
        data: c,
        complete: function(a, b) {
          d && h.each(d, g || [a.responseText, b, a]);
        }
      }).done(function(a) {
        g = arguments, h.html(e ? $("<div>").append(a.replace(Gc, "")).find(e) : a);
      }), this;
    }, $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
      $.fn[b] = function(a) {
        return this.on(b, a);
      };
    }), $.each(["get", "post"], function(a, c) {
      $[c] = function(a, d, e, f) {
        return $.isFunction(d) && (f = f || e, e = d, d = b), $.ajax({
          type: c,
          url: a,
          data: d,
          success: e,
          dataType: f
        });
      };
    }), $.extend({
      getScript: function(a, c) {
        return $.get(a, b, c, "script");
      },
      getJSON: function(a, b, c) {
        return $.get(a, b, c, "json");
      },
      ajaxSetup: function(a, b) {
        return b ? A(a, $.ajaxSettings) : (b = a, a = $.ajaxSettings), A(a, b), a;
      },
      ajaxSettings: {
        url: zc,
        isLocal: Cc.test(yc[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": Mc
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText"
        },
        converters: {
          "* text": a.String,
          "text html": !0,
          "text json": $.parseJSON,
          "text xml": $.parseXML
        },
        flatOptions: {
          context: !0,
          url: !0
        }
      },
      ajaxPrefilter: y(Kc),
      ajaxTransport: y(Lc),
      ajax: function(a, c) {
        function d(a, c, d, g) {
          var j,
              l,
              s,
              t,
              v,
              x = c;
          2 !== u && (u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = B(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && ($.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && ($.etag[e] = v)), 304 === a ? (x = "notmodified", j = !0) : (j = C(m, t), x = j.state, l = j.data, s = j.error, j = !s)) : (s = x, (!x || a) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop")));
        }
        "object" == typeof a && (c = a, a = b), c = c || {};
        var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = $.ajaxSetup({}, c),
            n = m.context || m,
            o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event,
            p = $.Deferred(),
            q = $.Callbacks("once memory"),
            r = m.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = {
              readyState: 0,
              setRequestHeader: function(a, b) {
                if (!u) {
                  var c = a.toLowerCase();
                  a = t[c] = t[c] || a, s[a] = b;
                }
                return this;
              },
              getAllResponseHeaders: function() {
                return 2 === u ? f : null;
              },
              getResponseHeader: function(a) {
                var c;
                if (2 === u) {
                  if (!g)
                    for (g = {}; c = Bc.exec(f); )
                      g[c[1].toLowerCase()] = c[2];
                  c = g[a.toLowerCase()];
                }
                return c === b ? null : c;
              },
              overrideMimeType: function(a) {
                return u || (m.mimeType = a), this;
              },
              abort: function(a) {
                return a = a || v, h && h.abort(a), d(0, a), this;
              }
            };
        if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function(a) {
          if (a) {
            var b;
            if (2 > u)
              for (b in a)
                r[b] = [r[b], a[b]];
            else
              b = a[w.status], w.always(b);
          }
          return this;
        }, m.url = ((a || m.url) + "").replace(Ac, "").replace(Ec, yc[1] + "//"), m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(bb), null == m.crossDomain && (j = Ic.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === yc[1] && j[2] === yc[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (yc[3] || ("http:" === yc[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)), z(Kc, m, c, w), 2 === u)
          return w;
        if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Dc.test(m.type), k && 0 === $.active++ && $.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Fc.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
          var x = $.now(),
              y = m.url.replace(Hc, "$1_=" + x);
          m.url = y + (y === m.url ? (Fc.test(m.url) ? "&" : "?") + "_=" + x : "");
        }
        (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mc + "; q=0.01" : "") : m.accepts["*"]);
        for (l in m.headers)
          w.setRequestHeader(l, m.headers[l]);
        if (!m.beforeSend || m.beforeSend.call(n, w, m) !== !1 && 2 !== u) {
          v = "abort";
          for (l in {
            success: 1,
            error: 1,
            complete: 1
          })
            w[l](m[l]);
          if (h = z(Lc, m, c, w)) {
            w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
              w.abort("timeout");
            }, m.timeout));
            try {
              u = 1, h.send(s, d);
            } catch (A) {
              if (!(2 > u))
                throw A;
              d(-1, A);
            }
          } else
            d(-1, "No Transport");
          return w;
        }
        return w.abort();
      },
      active: 0,
      lastModified: {},
      etag: {}
    });
    var Oc = [],
        Pc = /\?/,
        Qc = /(=)\?(?=&|$)|\?\?/,
        Rc = $.now();
    $.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = Oc.pop() || $.expando + "_" + Rc++;
        return this[a] = !0, a;
      }
    }), $.ajaxPrefilter("json jsonp", function(c, d, e) {
      var f,
          g,
          h,
          i = c.data,
          j = c.url,
          k = c.jsonp !== !1,
          l = k && Qc.test(j),
          m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qc.test(i);
      return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Qc, "$1" + f) : m ? c.data = i.replace(Qc, "$1" + f) : k && (c.url += (Pc.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
        return h || $.error(f + " was not called"), h[0];
      }, c.dataTypes[0] = "json", a[f] = function() {
        h = arguments;
      }, e.always(function() {
        a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Oc.push(f)), h && $.isFunction(g) && g(h[0]), h = g = b;
      }), "script") : void 0;
    }), $.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /javascript|ecmascript/},
      converters: {"text script": function(a) {
          return $.globalEval(a), a;
        }}
    }), $.ajaxPrefilter("script", function(a) {
      a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), $.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var c,
            d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
        return {
          send: function(e, f) {
            c = P.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
              (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"));
            }, d.insertBefore(c, d.firstChild);
          },
          abort: function() {
            c && c.onload(0, 1);
          }
        };
      }
    });
    var Sc,
        Tc = a.ActiveXObject ? function() {
          for (var a in Sc)
            Sc[a](0, 1);
        } : !1,
        Uc = 0;
    $.ajaxSettings.xhr = a.ActiveXObject ? function() {
      return !this.isLocal && D() || E();
    } : D, function(a) {
      $.extend($.support, {
        ajax: !!a,
        cors: !!a && "withCredentials" in a
      });
    }($.ajaxSettings.xhr()), $.support.ajax && $.ajaxTransport(function(c) {
      if (!c.crossDomain || $.support.cors) {
        var d;
        return {
          send: function(e, f) {
            var g,
                h,
                i = c.xhr();
            if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
              for (h in c.xhrFields)
                i[h] = c.xhrFields[h];
            c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
            try {
              for (h in e)
                i.setRequestHeader(h, e[h]);
            } catch (j) {}
            i.send(c.hasContent && c.data || null), d = function(a, e) {
              var h,
                  j,
                  k,
                  l,
                  m;
              try {
                if (d && (e || 4 === i.readyState))
                  if (d = b, g && (i.onreadystatechange = $.noop, Tc && delete Sc[g]), e)
                    4 !== i.readyState && i.abort();
                  else {
                    h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                    try {
                      l.text = i.responseText;
                    } catch (n) {}
                    try {
                      j = i.statusText;
                    } catch (n) {
                      j = "";
                    }
                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404;
                  }
              } catch (o) {
                e || f(-1, o);
              }
              l && f(h, j, l, k);
            }, c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Uc, Tc && (Sc || (Sc = {}, $(a).unload(Tc)), Sc[g] = d), i.onreadystatechange = d) : d();
          },
          abort: function() {
            d && d(0, 1);
          }
        };
      }
    });
    var Vc,
        Wc,
        Xc = /^(?:toggle|show|hide)$/,
        Yc = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"),
        Zc = /queueHooks$/,
        $c = [J],
        _c = {"*": [function(a, b) {
            var c,
                d,
                e = this.createTween(a, b),
                f = Yc.exec(b),
                g = e.cur(),
                h = +g || 0,
                i = 1,
                j = 20;
            if (f) {
              if (c = +f[2], d = f[3] || ($.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                h = $.css(e.elem, a, !0) || c || 1;
                do
                  i = i || ".5", h /= i, $.style(e.elem, a, h + d);
 while (i !== (i = e.cur() / g) && 1 !== i && --j);
              }
              e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c;
            }
            return e;
          }]};
    $.Animation = $.extend(H, {
      tweener: function(a, b) {
        $.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c,
            d = 0,
            e = a.length; e > d; d++)
          c = a[d], _c[c] = _c[c] || [], _c[c].unshift(b);
      },
      prefilter: function(a, b) {
        b ? $c.unshift(a) : $c.push(a);
      }
    }), $.Tween = K, K.prototype = {
      constructor: K,
      init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px");
      },
      cur: function() {
        var a = K.propHooks[this.prop];
        return a && a.get ? a.get(this) : K.propHooks._default.get(this);
      },
      run: function(a) {
        var b,
            c = K.propHooks[this.prop];
        return this.pos = b = this.options.duration ? $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this;
      }
    }, K.prototype.init.prototype = K.prototype, K.propHooks = {_default: {
        get: function(a) {
          var b;
          return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
        },
        set: function(a) {
          $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
        }
      }}, K.propHooks.scrollTop = K.propHooks.scrollLeft = {set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      }}, $.each(["toggle", "show", "hide"], function(a, b) {
      var c = $.fn[b];
      $.fn[b] = function(d, e, f) {
        return null == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f);
      };
    }), $.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(r).css("opacity", 0).show().end().animate({opacity: b}, a, c, d);
      },
      animate: function(a, b, c, d) {
        var e = $.isEmptyObject(a),
            f = $.speed(b, c, d),
            g = function() {
              var b = H(this, $.extend({}, a), f);
              e && b.stop(!0);
            };
        return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function(a, c, d) {
        var e = function(a) {
          var b = a.stop;
          delete a.stop, b(d);
        };
        return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
              c = null != a && a + "queueHooks",
              f = $.timers,
              g = $._data(this);
          if (c)
            g[c] && g[c].stop && e(g[c]);
          else
            for (c in g)
              g[c] && g[c].stop && Zc.test(c) && e(g[c]);
          for (c = f.length; c--; )
            f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
          (b || !d) && $.dequeue(this, a);
        });
      }
    }), $.each({
      slideDown: L("show"),
      slideUp: L("hide"),
      slideToggle: L("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function(a, b) {
      $.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d);
      };
    }), $.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? $.extend({}, a) : {
        complete: c || !c && b || $.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !$.isFunction(b) && b
      };
      return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        $.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue);
      }, d;
    }, $.easing = {
      linear: function(a) {
        return a;
      },
      swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2;
      }
    }, $.timers = [], $.fx = K.prototype.init, $.fx.tick = function() {
      var a,
          c = $.timers,
          d = 0;
      for (Vc = $.now(); d < c.length; d++)
        a = c[d], !a() && c[d] === a && c.splice(d--, 1);
      c.length || $.fx.stop(), Vc = b;
    }, $.fx.timer = function(a) {
      a() && $.timers.push(a) && !Wc && (Wc = setInterval($.fx.tick, $.fx.interval));
    }, $.fx.interval = 13, $.fx.stop = function() {
      clearInterval(Wc), Wc = null;
    }, $.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, $.fx.step = {}, $.expr && $.expr.filters && ($.expr.filters.animated = function(a) {
      return $.grep($.timers, function(b) {
        return a === b.elem;
      }).length;
    });
    var ad = /^(?:body|html)$/i;
    $.fn.offset = function(a) {
      if (arguments.length)
        return a === b ? this : this.each(function(b) {
          $.offset.setOffset(this, a, b);
        });
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j = {
            top: 0,
            left: 0
          },
          k = this[0],
          l = k && k.ownerDocument;
      if (l)
        return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement, $.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = M(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
          top: j.top + h - f,
          left: j.left + i - g
        }) : j);
    }, $.offset = {
      bodyOffset: function(a) {
        var b = a.offsetTop,
            c = a.offsetLeft;
        return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0, c += parseFloat($.css(a, "marginLeft")) || 0), {
          top: b,
          left: c
        };
      },
      setOffset: function(a, b, c) {
        var d = $.css(a, "position");
        "static" === d && (a.style.position = "relative");
        var e,
            f,
            g = $(a),
            h = g.offset(),
            i = $.css(a, "top"),
            j = $.css(a, "left"),
            k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1,
            l = {},
            m = {};
        k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), $.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l);
      }
    }, $.fn.extend({
      position: function() {
        if (this[0]) {
          var a = this[0],
              b = this.offsetParent(),
              c = this.offset(),
              d = ad.test(b[0].nodeName) ? {
                top: 0,
                left: 0
              } : b.offset();
          return c.top -= parseFloat($.css(a, "marginTop")) || 0, c.left -= parseFloat($.css(a, "marginLeft")) || 0, d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0, {
            top: c.top - d.top,
            left: c.left - d.left
          };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var a = this.offsetParent || P.body; a && !ad.test(a.nodeName) && "static" === $.css(a, "position"); )
            a = a.offsetParent;
          return a || P.body;
        });
      }
    }), $.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(a, c) {
      var d = /Y/.test(c);
      $.fn[a] = function(e) {
        return $.access(this, function(a, e, f) {
          var g = M(a);
          return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f, void 0);
        }, a, e, arguments.length, null);
      };
    }), $.each({
      Height: "height",
      Width: "width"
    }, function(a, c) {
      $.each({
        padding: "inner" + a,
        content: c,
        "": "outer" + a
      }, function(d, e) {
        $.fn[e] = function(e, f) {
          var g = arguments.length && (d || "boolean" != typeof e),
              h = d || (e === !0 || f === !0 ? "margin" : "border");
          return $.access(this, function(c, d, e) {
            var f;
            return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h);
          }, c, g ? e : b, g, null);
        };
      });
    }), a.jQuery = a.$ = $, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
      return $;
    });
  }(window), function(a, b) {
    function c(a) {
      return a && "object" == typeof a && a.__wrapped__ ? a : this instanceof c ? (this.__wrapped__ = a, void 0) : new c(a);
    }
    function d(a, b, c) {
      b || (b = 0);
      var d = a.length,
          e = d - b >= (c || db);
      if (e)
        for (var f = {},
            c = b - 1; ++c < d; ) {
          var g = a[c] + "";
          (xb.call(f, g) ? f[g] : f[g] = []).push(a[c]);
        }
      return function(c) {
        if (e) {
          var d = c + "";
          return xb.call(f, d) && -1 < P(f[d], c);
        }
        return -1 < P(a, c, b);
      };
    }
    function e(a) {
      return a.charCodeAt(0);
    }
    function f(a, b) {
      var c = a.b,
          d = b.b,
          a = a.a,
          b = b.a;
      if (a !== b) {
        if (a > b || "undefined" == typeof a)
          return 1;
        if (b > a || "undefined" == typeof b)
          return -1;
      }
      return d > c ? -1 : 1;
    }
    function g(a, b, c) {
      function d() {
        var h = arguments,
            i = f ? this : b;
        return e || (a = b[g]), c.length && (h = h.length ? c.concat(n(h)) : c), this instanceof d ? (m.prototype = a.prototype, i = new m, m.prototype = null, h = a.apply(i, h), x(h) ? h : i) : a.apply(i, h);
      }
      var e = w(a),
          f = !c,
          g = b;
      return f && (c = b), e || (b = a), d;
    }
    function h(a, b, c) {
      return a ? "function" != typeof a ? function(b) {
        return b[a];
      } : "undefined" != typeof b ? c ? function(c, d, e, f) {
        return a.call(b, c, d, e, f);
      } : function(c, d, e) {
        return a.call(b, c, d, e);
      } : a : U;
    }
    function i() {
      for (var a,
          b = {
            b: "",
            c: "",
            e: Z,
            f: Ub,
            g: "",
            h: Wb,
            i: Zb,
            j: sb,
            k: "",
            l: !0
          },
          c = 0; a = arguments[c]; c++)
        for (var d in a)
          b[d] = a[d];
      if (a = b.a, b.d = /^[^,]+/.exec(a)[0], c = Function, d = "var i,l=" + b.d + ",t=" + b.d + ";if(!" + b.d + ")return t;" + b.k + ";", b.b ? (d += "var m=l.length;i=-1;if(typeof m=='number'){", b.i && (d += "if(k(l)){l=l.split('')}"), d += "while(++i<m){" + b.b + "}}else {") : b.h && (d += "var m=l.length;i=-1;if(m&&j(l)){while(++i<m){i+='';" + b.g + "}}else {"), b.e || (d += "var u=typeof l=='function'&&s.call(l,'prototype');"), b.f && b.l ? (d += "var q=-1,r=p[typeof l]?n(l):[],m=r.length;while(++q<m){i=r[q];", b.e || (d += "if(!(u&&i=='prototype')){"), d += b.g + "", b.e || (d += "}")) : (d += "for(i in l){", (!b.e || b.l) && (d += "if(", b.e || (d += "!(u&&i=='prototype')"), !b.e && b.l && (d += "&&"), b.l && (d += "h.call(l,i)"), d += "){"), d += b.g + ";", (!b.e || b.l) && (d += "}")), d += "}", b.e) {
        d += "var f=l.constructor;";
        for (var e = 0; 7 > e; e++)
          d += "i='" + b.j[e] + "';if(", "constructor" == b.j[e] && (d += "!(f&&f.prototype===l)&&"), d += "h.call(l,i)){" + b.g + "}";
      }
      return (b.b || b.h) && (d += "}"), d += b.c + ";return t", c("e,h,j,k,p,n,s", "return function(" + a + "){" + d + "}")(h, xb, p, z, cc, Fb, zb);
    }
    function j(a) {
      return "\\" + dc[a];
    }
    function k(a) {
      return lc[a];
    }
    function l(a) {
      return "function" != typeof a.toString && "string" == typeof(a + "");
    }
    function m() {}
    function n(a, b, c) {
      b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
      for (var d = -1,
          c = c - b || 0,
          e = Array(0 > c ? 0 : c); ++d < c; )
        e[d] = a[b + d];
      return e;
    }
    function o(a) {
      return mc[a];
    }
    function p(a) {
      return Ab.call(a) == Jb;
    }
    function q(a) {
      var b = !1;
      if (!a || "object" != typeof a || p(a))
        return b;
      var c = a.constructor;
      return !w(c) && (!$b || !l(a)) || c instanceof c ? $ ? (jc(a, function(a, c, d) {
        return b = !xb.call(d, c), !1;
      }), !1 === b) : (jc(a, function(a, c) {
        b = c;
      }), !1 === b || xb.call(a, b)) : b;
    }
    function r(a) {
      var b = [];
      return kc(a, function(a, c) {
        b.push(c);
      }), b;
    }
    function s(a, b, c, d, e) {
      if (null == a)
        return a;
      if (c && (b = !1), c = x(a)) {
        var f = Ab.call(a);
        if (!ac[f] || $b && l(a))
          return a;
        var g = oc(a);
      }
      if (!c || !b)
        return c ? g ? n(a) : ic({}, a) : a;
      switch (c = bc[f], f) {
        case Lb:
        case Mb:
          return new c(+a);
        case Nb:
        case Qb:
          return new c(a);
        case Pb:
          return c(a.source, kb.exec(a));
      }
      for (d || (d = []), e || (e = []), f = d.length; f--; )
        if (d[f] == a)
          return e[f];
      var h = g ? c(a.length) : {};
      return d.push(a), e.push(h), (g ? G : kc)(a, function(a, c) {
        h[c] = s(a, b, null, d, e);
      }), g && (xb.call(a, "index") && (h.index = a.index), xb.call(a, "input") && (h.input = a.input)), h;
    }
    function t(a) {
      var b = [];
      return jc(a, function(a, c) {
        w(a) && b.push(c);
      }), b.sort();
    }
    function u(a) {
      var b = {};
      return kc(a, function(a, c) {
        b[a] = c;
      }), b;
    }
    function v(a, b, c, d) {
      if (a === b)
        return 0 !== a || 1 / a == 1 / b;
      if (null == a || null == b)
        return a === b;
      var e = Ab.call(a),
          f = Ab.call(b);
      if (e == Jb && (e = Ob), f == Jb && (f = Ob), e != f)
        return !1;
      switch (e) {
        case Lb:
        case Mb:
          return +a == +b;
        case Nb:
          return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
        case Pb:
        case Qb:
          return a == b + "";
      }
      if (f = e == Kb, !f) {
        if (a.__wrapped__ || b.__wrapped__)
          return v(a.__wrapped__ || a, b.__wrapped__ || b);
        if (e != Ob || $b && (l(a) || l(b)))
          return !1;
        var e = !Xb && p(a) ? Object : a.constructor,
            g = !Xb && p(b) ? Object : b.constructor;
        if (!(e == g || w(e) && e instanceof e && w(g) && g instanceof g))
          return !1;
      }
      for (c || (c = []), d || (d = []), e = c.length; e--; )
        if (c[e] == a)
          return d[e] == b;
      var h = !0,
          i = 0;
      if (c.push(a), d.push(b), f) {
        if (i = a.length, h = i == b.length)
          for (; i-- && (h = v(a[i], b[i], c, d)); )
            ;
        return h;
      }
      return jc(a, function(a, e, f) {
        return xb.call(f, e) ? (i++, h = xb.call(b, e) && v(a, b[e], c, d)) : void 0;
      }), h && jc(b, function(a, b, c) {
        return xb.call(c, b) ? h = -1 < --i : void 0;
      }), h;
    }
    function w(a) {
      return "function" == typeof a;
    }
    function x(a) {
      return a ? cc[typeof a] : !1;
    }
    function y(a) {
      return "number" == typeof a || Ab.call(a) == Nb;
    }
    function z(a) {
      return "string" == typeof a || Ab.call(a) == Qb;
    }
    function A(a, b, c) {
      var d = arguments,
          e = 0,
          f = 2,
          g = d[3],
          h = d[4];
      for (c !== cb && (g = [], h = [], "number" != typeof c && (f = d.length)); ++e < f; )
        kc(d[e], function(b, c) {
          var d,
              e,
              f;
          if (b && ((e = oc(b)) || pc(b))) {
            for (var i = g.length; i-- && !(d = g[i] == b); )
              ;
            d ? a[c] = h[i] : (g.push(b), h.push((f = a[c], f = e ? oc(f) ? f : [] : pc(f) ? f : {})), a[c] = A(f, b, cb, g, h));
          } else
            null != b && (a[c] = b);
        });
      return a;
    }
    function B(a) {
      var b = [];
      return kc(a, function(a) {
        b.push(a);
      }), b;
    }
    function C(a, b, c) {
      var d = -1,
          e = a ? a.length : 0,
          f = !1,
          c = (0 > c ? Gb(0, e + c) : c) || 0;
      return "number" == typeof e ? f = -1 < (z(a) ? a.indexOf(b, c) : P(a, b, c)) : hc(a, function(a) {
        return ++d >= c ? !(f = a === b) : void 0;
      }), f;
    }
    function D(a, b, c) {
      var d = !0,
          b = h(b, c);
      if (oc(a))
        for (var c = -1,
            e = a.length; ++c < e && (d = !!b(a[c], c, a)); )
          ;
      else
        hc(a, function(a, c, e) {
          return d = !!b(a, c, e);
        });
      return d;
    }
    function E(a, b, c) {
      var d = [],
          b = h(b, c);
      if (oc(a))
        for (var c = -1,
            e = a.length; ++c < e; ) {
          var f = a[c];
          b(f, c, a) && d.push(f);
        }
      else
        hc(a, function(a, c, e) {
          b(a, c, e) && d.push(a);
        });
      return d;
    }
    function F(a, b, c) {
      var d,
          b = h(b, c);
      return G(a, function(a, c, e) {
        return b(a, c, e) ? (d = a, !1) : void 0;
      }), d;
    }
    function G(a, b, c) {
      if (b && "undefined" == typeof c && oc(a))
        for (var c = -1,
            d = a.length; ++c < d && !1 !== b(a[c], c, a); )
          ;
      else
        hc(a, b, c);
      return a;
    }
    function H(a, b, c) {
      var d = -1,
          e = a ? a.length : 0,
          f = Array("number" == typeof e ? e : 0),
          b = h(b, c);
      if (oc(a))
        for (; ++d < e; )
          f[d] = b(a[d], d, a);
      else
        hc(a, function(a, c, e) {
          f[++d] = b(a, c, e);
        });
      return f;
    }
    function I(a, b, c) {
      var d = -1 / 0,
          f = -1,
          g = a ? a.length : 0,
          i = d;
      if (b || !oc(a))
        b = !b && z(a) ? e : h(b, c), hc(a, function(a, c, e) {
          c = b(a, c, e), c > d && (d = c, i = a);
        });
      else
        for (; ++f < g; )
          a[f] > i && (i = a[f]);
      return i;
    }
    function J(a, b) {
      return H(a, b + "");
    }
    function K(a, b, c, d) {
      var e = 3 > arguments.length,
          b = h(b, d, cb);
      if (oc(a)) {
        var f = -1,
            g = a.length;
        for (e && (c = a[++f]); ++f < g; )
          c = b(c, a[f], f, a);
      } else
        hc(a, function(a, d, f) {
          c = e ? (e = !1, a) : b(c, a, d, f);
        });
      return c;
    }
    function L(a, b, c, d) {
      var e = a,
          f = a ? a.length : 0,
          g = 3 > arguments.length;
      if ("number" != typeof f)
        var i = qc(a),
            f = i.length;
      else
        Zb && z(a) && (e = a.split(""));
      return b = h(b, d, cb), G(a, function(a, d, h) {
        d = i ? i[--f] : --f, c = g ? (g = !1, e[d]) : b(c, e[d], d, h);
      }), c;
    }
    function M(a, b, c) {
      var d,
          b = h(b, c);
      if (oc(a))
        for (var c = -1,
            e = a.length; ++c < e && !(d = b(a[c], c, a)); )
          ;
      else
        hc(a, function(a, c, e) {
          return !(d = b(a, c, e));
        });
      return !!d;
    }
    function N(a, b, c) {
      if (a) {
        var d = a.length;
        return null == b || c ? a[0] : n(a, 0, Hb(Gb(0, b), d));
      }
    }
    function O(a, b) {
      for (var c = -1,
          d = a ? a.length : 0,
          e = []; ++c < d; ) {
        var f = a[c];
        oc(f) ? yb.apply(e, b ? f : O(f)) : e.push(f);
      }
      return e;
    }
    function P(a, b, c) {
      var d = -1,
          e = a ? a.length : 0;
      if ("number" == typeof c)
        d = (0 > c ? Gb(0, e + c) : c || 0) - 1;
      else if (c)
        return d = R(a, b), a[d] === b ? d : -1;
      for (; ++d < e; )
        if (a[d] === b)
          return d;
      return -1;
    }
    function Q(a, b, c) {
      return n(a, null == b || c ? 1 : Gb(0, b));
    }
    function R(a, b, c, d) {
      for (var e = 0,
          f = a ? a.length : e,
          c = c ? h(c, d) : U,
          b = c(b); f > e; )
        d = e + f >>> 1, c(a[d]) < b ? e = d + 1 : f = d;
      return e;
    }
    function S(a, b, c, d) {
      var e = -1,
          f = a ? a.length : 0,
          g = [],
          i = g;
      "function" == typeof b && (d = c, c = b, b = !1);
      var j = !b && f >= 75;
      if (j)
        var k = {};
      for (c && (i = [], c = h(c, d)); ++e < f; ) {
        var d = a[e],
            l = c ? c(d, e, a) : d;
        if (j)
          var m = l + "",
              m = xb.call(k, m) ? !(i = k[m]) : i = k[m] = [];
        (b ? !e || i[i.length - 1] !== l : m || 0 > P(i, l)) && ((c || j) && i.push(l), g.push(d));
      }
      return g;
    }
    function T(a, b) {
      return Tb || Bb && 2 < arguments.length ? Bb.call.apply(Bb, arguments) : g(a, b, n(arguments, 2));
    }
    function U(a) {
      return a;
    }
    function V(a) {
      G(t(a), function(b) {
        var d = c[b] = a[b];
        c.prototype[b] = function() {
          var a = [this.__wrapped__];
          return yb.apply(a, arguments), a = d.apply(c, a), new c(a);
        };
      });
    }
    function W() {
      return this.__wrapped__;
    }
    var X = "object" == typeof exports && exports,
        Y = "object" == typeof global && global;
    Y.global === Y && (a = Y);
    var Z,
        $,
        _ = [],
        ab = new function() {},
        bb = 0,
        cb = ab,
        db = 30,
        eb = a._,
        fb = /[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/,
        gb = /&(?:amp|lt|gt|quot|#x27);/g,
        hb = /\b__p\+='';/g,
        ib = /\b(__p\+=)''\+/g,
        jb = /(__e\(.*?\)|\b__t\))\+'';/g,
        kb = /\w*$/,
        lb = /(?:__e|__t=)\(\s*(?![\d\s"']|this\.)/g,
        mb = RegExp("^" + (ab.valueOf + "").replace(/[.*+?^=!:${}()|[\]\/\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
        nb = /\$\{((?:(?=\\?)\\?[\s\S])*?)}/g,
        ob = /<%=([\s\S]+?)%>/g,
        pb = /($^)/,
        qb = /[&<>"']/g,
        rb = /['\n\r\t\u2028\u2029\\]/g,
        sb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        tb = Math.ceil,
        ub = _.concat,
        vb = Math.floor,
        wb = mb.test(wb = Object.getPrototypeOf) && wb,
        xb = ab.hasOwnProperty,
        yb = _.push,
        zb = ab.propertyIsEnumerable,
        Ab = ab.toString,
        Bb = mb.test(Bb = n.bind) && Bb,
        Cb = mb.test(Cb = Array.isArray) && Cb,
        Db = a.isFinite,
        Eb = a.isNaN,
        Fb = mb.test(Fb = Object.keys) && Fb,
        Gb = Math.max,
        Hb = Math.min,
        Ib = Math.random,
        Jb = "[object Arguments]",
        Kb = "[object Array]",
        Lb = "[object Boolean]",
        Mb = "[object Date]",
        Nb = "[object Number]",
        Ob = "[object Object]",
        Pb = "[object RegExp]",
        Qb = "[object String]",
        Rb = !!a.attachEvent,
        Sb = Bb && !/\n|true/.test(Bb + Rb),
        Tb = Bb && !Sb,
        Ub = Fb && (Rb || Sb),
        Vb = (Vb = {
          0: 1,
          length: 1
        }, _.splice.call(Vb, 0, 1), Vb[0]),
        Wb = !0;
    !function() {
      function a() {
        this.x = 1;
      }
      var b = [];
      a.prototype = {
        valueOf: 1,
        y: 1
      };
      for (var c in new a)
        b.push(c);
      for (c in arguments)
        Wb = !c;
      Z = !/valueOf/.test(b), $ = "x" != b[0];
    }(1);
    var Xb = arguments.constructor == Object,
        Yb = !p(arguments),
        Zb = "xx" != "x"[0] + Object("x")[0];
    try {
      var $b = Ab.call(document) == Ob;
    } catch (_b) {}
    var ac = {"[object Function]": !1};
    ac[Jb] = ac[Kb] = ac[Lb] = ac[Mb] = ac[Nb] = ac[Ob] = ac[Pb] = ac[Qb] = !0;
    var bc = {};
    bc[Kb] = Array, bc[Lb] = Boolean, bc[Mb] = Date, bc[Ob] = Object, bc[Nb] = Number, bc[Pb] = RegExp, bc[Qb] = String;
    var cc = {
      "boolean": !1,
      "function": !0,
      object: !0,
      number: !1,
      string: !1,
      undefined: !1
    },
        dc = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "	": "t",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
    c.templateSettings = {
      escape: /<%-([\s\S]+?)%>/g,
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: ob,
      variable: ""
    };
    var ec = {
      a: "o,v,g",
      k: "for(var a=1,b=typeof g=='number'?2:arguments.length;a<b;a++){if((l=arguments[a])){",
      g: "t[i]=l[i]",
      c: "}}"
    },
        fc = {
          a: "d,c,w",
          k: "c=c&&typeof w=='undefined'?c:e(c,w)",
          b: "if(c(l[i],i,d)===false)return t",
          g: "if(c(l[i],i,d)===false)return t"
        },
        gc = {b: null},
        hc = i(fc),
        ic = i(ec);
    Yb && (p = function(a) {
      return a ? xb.call(a, "callee") : !1;
    });
    var jc = i(fc, gc, {l: !1}),
        kc = i(fc, gc),
        lc = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;"
        },
        mc = u(lc),
        nc = i(ec, {g: "if(t[i]==null)" + ec.g}),
        oc = Cb || function(a) {
          return Xb && a instanceof Array || Ab.call(a) == Kb;
        };
    w(/x/) && (w = function(a) {
      return a instanceof Function || "[object Function]" == Ab.call(a);
    });
    var pc = wb ? function(a) {
      if (!a || "object" != typeof a)
        return !1;
      var b = a.valueOf,
          c = "function" == typeof b && (c = wb(b)) && wb(c);
      return c ? a == c || wb(a) == c && !p(a) : q(a);
    } : q,
        qc = Fb ? function(a) {
          return "function" == typeof a && zb.call(a, "prototype") ? r(a) : x(a) ? Fb(a) : [];
        } : r;
    c.after = function(a, b) {
      return 1 > a ? b() : function() {
        return 1 > --a ? b.apply(this, arguments) : void 0;
      };
    }, c.assign = ic, c.bind = T, c.bindAll = function(a) {
      for (var b = arguments,
          c = 1 < b.length ? 0 : (b = t(a), -1),
          d = b.length; ++c < d; ) {
        var e = b[c];
        a[e] = T(a[e], a);
      }
      return a;
    }, c.bindKey = function(a, b) {
      return g(a, b, n(arguments, 2));
    }, c.compact = function(a) {
      for (var b = -1,
          c = a ? a.length : 0,
          d = []; ++b < c; ) {
        var e = a[b];
        e && d.push(e);
      }
      return d;
    }, c.compose = function() {
      var a = arguments;
      return function() {
        for (var b = arguments,
            c = a.length; c--; )
          b = [a[c].apply(this, b)];
        return b[0];
      };
    }, c.countBy = function(a, b, c) {
      var d = {},
          b = h(b, c);
      return G(a, function(a, c, e) {
        c = b(a, c, e), xb.call(d, c) ? d[c]++ : d[c] = 1;
      }), d;
    }, c.debounce = function(a, b, c) {
      function d() {
        h = null, c || (f = a.apply(g, e));
      }
      var e,
          f,
          g,
          h;
      return function() {
        var i = c && !h;
        return e = arguments, g = this, clearTimeout(h), h = setTimeout(d, b), i && (f = a.apply(g, e)), f;
      };
    }, c.defaults = nc, c.defer = function(a) {
      var c = n(arguments, 1);
      return setTimeout(function() {
        a.apply(b, c);
      }, 1);
    }, c.delay = function(a, c) {
      var d = n(arguments, 2);
      return setTimeout(function() {
        a.apply(b, d);
      }, c);
    }, c.difference = function(a) {
      for (var b = -1,
          c = a ? a.length : 0,
          e = ub.apply(_, arguments),
          e = d(e, c),
          f = []; ++b < c; ) {
        var g = a[b];
        e(g) || f.push(g);
      }
      return f;
    }, c.filter = E, c.flatten = O, c.forEach = G, c.forIn = jc, c.forOwn = kc, c.functions = t, c.groupBy = function(a, b, c) {
      var d = {},
          b = h(b, c);
      return G(a, function(a, c, e) {
        c = b(a, c, e), (xb.call(d, c) ? d[c] : d[c] = []).push(a);
      }), d;
    }, c.initial = function(a, b, c) {
      if (!a)
        return [];
      var d = a.length;
      return n(a, 0, Hb(Gb(0, d - (null == b || c ? 1 : b || 0)), d));
    }, c.intersection = function(a) {
      var b = arguments,
          c = b.length,
          e = {0: {}},
          f = -1,
          g = a ? a.length : 0,
          h = g >= 100,
          i = [],
          j = i;
      a: for (; ++f < g; ) {
        var k = a[f];
        if (h)
          var l = k + "",
              l = xb.call(e[0], l) ? !(j = e[0][l]) : j = e[0][l] = [];
        if (l || 0 > P(j, k)) {
          h && j.push(k);
          for (var m = c; --m; )
            if (!(e[m] || (e[m] = d(b[m], 0, 100)))(k))
              continue a;
          i.push(k);
        }
      }
      return i;
    }, c.invert = u, c.invoke = function(a, b) {
      var c = n(arguments, 2),
          d = "function" == typeof b,
          e = [];
      return G(a, function(a) {
        e.push((d ? b : a[b]).apply(a, c));
      }), e;
    }, c.keys = qc, c.map = H, c.max = I, c.memoize = function(a, b) {
      var c = {};
      return function() {
        var d = b ? b.apply(this, arguments) : arguments[0];
        return xb.call(c, d) ? c[d] : c[d] = a.apply(this, arguments);
      };
    }, c.merge = A, c.min = function(a, b, c) {
      var d = 1 / 0,
          f = -1,
          g = a ? a.length : 0,
          i = d;
      if (b || !oc(a))
        b = !b && z(a) ? e : h(b, c), hc(a, function(a, c, e) {
          c = b(a, c, e), d > c && (d = c, i = a);
        });
      else
        for (; ++f < g; )
          a[f] < i && (i = a[f]);
      return i;
    }, c.object = function(a, b) {
      for (var c = -1,
          d = a ? a.length : 0,
          e = {}; ++c < d; ) {
        var f = a[c];
        b ? e[f] = b[c] : e[f[0]] = f[1];
      }
      return e;
    }, c.omit = function(a, b, c) {
      var d = "function" == typeof b,
          e = {};
      if (d)
        b = h(b, c);
      else
        var f = ub.apply(_, arguments);
      return jc(a, function(a, c, g) {
        (d ? !b(a, c, g) : 0 > P(f, c, 1)) && (e[c] = a);
      }), e;
    }, c.once = function(a) {
      var b,
          c = !1;
      return function() {
        return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b);
      };
    }, c.pairs = function(a) {
      var b = [];
      return kc(a, function(a, c) {
        b.push([c, a]);
      }), b;
    }, c.partial = function(a) {
      return g(a, n(arguments, 1));
    }, c.pick = function(a, b, c) {
      var d = {};
      if ("function" != typeof b)
        for (var e = 0,
            f = ub.apply(_, arguments),
            g = f.length; ++e < g; ) {
          var i = f[e];
          i in a && (d[i] = a[i]);
        }
      else
        b = h(b, c), jc(a, function(a, c, e) {
          b(a, c, e) && (d[c] = a);
        });
      return d;
    }, c.pluck = J, c.range = function(a, b, c) {
      a = +a || 0, c = +c || 1, null == b && (b = a, a = 0);
      for (var d = -1,
          b = Gb(0, tb((b - a) / c)),
          e = Array(b); ++d < b; )
        e[d] = a, a += c;
      return e;
    }, c.reject = function(a, b, c) {
      return b = h(b, c), E(a, function(a, c, d) {
        return !b(a, c, d);
      });
    }, c.rest = Q, c.shuffle = function(a) {
      var b = -1,
          c = Array(a ? a.length : 0);
      return G(a, function(a) {
        var d = vb(Ib() * (++b + 1));
        c[b] = c[d], c[d] = a;
      }), c;
    }, c.sortBy = function(a, b, c) {
      var d = [],
          b = h(b, c);
      for (G(a, function(a, c, e) {
        d.push({
          a: b(a, c, e),
          b: c,
          c: a
        });
      }), a = d.length, d.sort(f); a--; )
        d[a] = d[a].c;
      return d;
    }, c.tap = function(a, b) {
      return b(a), a;
    }, c.throttle = function(a, b) {
      function c() {
        h = new Date, g = null, e = a.apply(f, d);
      }
      var d,
          e,
          f,
          g,
          h = 0;
      return function() {
        var i = new Date,
            j = b - (i - h);
        return d = arguments, f = this, 0 >= j ? (clearTimeout(g), g = null, h = i, e = a.apply(f, d)) : g || (g = setTimeout(c, j)), e;
      };
    }, c.times = function(a, b, c) {
      for (var a = +a || 0,
          d = -1,
          e = Array(a); ++d < a; )
        e[d] = b.call(c, d);
      return e;
    }, c.toArray = function(a) {
      return "number" == typeof(a ? a.length : 0) ? Zb && z(a) ? a.split("") : n(a) : B(a);
    }, c.union = function() {
      return S(ub.apply(_, arguments));
    }, c.uniq = S, c.values = B, c.where = function(a, b) {
      var c = qc(b);
      return E(a, function(a) {
        for (var d = c.length; d--; ) {
          var e = a[c[d]] === b[c[d]];
          if (!e)
            break;
        }
        return !!e;
      });
    }, c.without = function(a) {
      for (var b = -1,
          c = a ? a.length : 0,
          e = d(arguments, 1, 20),
          f = []; ++b < c; ) {
        var g = a[b];
        e(g) || f.push(g);
      }
      return f;
    }, c.wrap = function(a, b) {
      return function() {
        var c = [a];
        return yb.apply(c, arguments), b.apply(this, c);
      };
    }, c.zip = function(a) {
      for (var b = -1,
          c = a ? I(J(arguments, "length")) : 0,
          d = Array(c); ++b < c; )
        d[b] = J(arguments, b);
      return d;
    }, c.collect = H, c.drop = Q, c.each = G, c.extend = ic, c.methods = t, c.select = E, c.tail = Q, c.unique = S, V(c), c.clone = s, c.cloneDeep = function(a) {
      return s(a, !0);
    }, c.contains = C, c.escape = function(a) {
      return null == a ? "" : (a + "").replace(qb, k);
    }, c.every = D, c.find = F, c.has = function(a, b) {
      return a ? xb.call(a, b) : !1;
    }, c.identity = U, c.indexOf = P, c.isArguments = p, c.isArray = oc, c.isBoolean = function(a) {
      return !0 === a || !1 === a || Ab.call(a) == Lb;
    }, c.isDate = function(a) {
      return a instanceof Date || Ab.call(a) == Mb;
    }, c.isElement = function(a) {
      return a ? 1 === a.nodeType : !1;
    }, c.isEmpty = function(a) {
      var b = !0;
      if (!a)
        return b;
      var c = Ab.call(a),
          d = a.length;
      return c == Kb || c == Qb || c == Jb || Yb && p(a) || c == Ob && "number" == typeof d && w(a.splice) ? !d : (kc(a, function() {
        return b = !1;
      }), b);
    }, c.isEqual = v, c.isFinite = function(a) {
      return Db(a) && !Eb(parseFloat(a));
    }, c.isFunction = w, c.isNaN = function(a) {
      return y(a) && a != +a;
    }, c.isNull = function(a) {
      return null === a;
    }, c.isNumber = y, c.isObject = x, c.isPlainObject = pc, c.isRegExp = function(a) {
      return a instanceof RegExp || Ab.call(a) == Pb;
    }, c.isString = z, c.isUndefined = function(a) {
      return "undefined" == typeof a;
    }, c.lastIndexOf = function(a, b, c) {
      var d = a ? a.length : 0;
      for ("number" == typeof c && (d = (0 > c ? Gb(0, d + c) : Hb(c, d - 1)) + 1); d--; )
        if (a[d] === b)
          return d;
      return -1;
    }, c.mixin = V, c.noConflict = function() {
      return a._ = eb, this;
    }, c.random = function(a, b) {
      return null == a && null == b && (b = 1), a = +a || 0, null == b && (b = a, a = 0), a + vb(Ib() * ((+b || 0) - a + 1));
    }, c.reduce = K, c.reduceRight = L, c.result = function(a, b) {
      var c = a ? a[b] : null;
      return w(c) ? a[b]() : c;
    }, c.size = function(a) {
      var b = a ? a.length : 0;
      return "number" == typeof b ? b : qc(a).length;
    }, c.some = M, c.sortedIndex = R, c.template = function(a, b, d) {
      a || (a = ""), d || (d = {});
      var e,
          f,
          g = c.templateSettings,
          h = 0,
          i = d.interpolate || g.interpolate || pb,
          k = "__p+='",
          l = d.variable || g.variable,
          m = l;
      a.replace(RegExp((d.escape || g.escape || pb).source + "|" + i.source + "|" + (i === ob ? nb : pb).source + "|" + (d.evaluate || g.evaluate || pb).source + "|$", "g"), function(b, c, d, f, g, i) {
        return d || (d = f), k += a.slice(h, i).replace(rb, j), c && (k += "'+__e(" + c + ")+'"), g && (k += "';" + g + ";__p+='"), d && (k += "'+((__t=(" + d + "))==null?'':__t)+'"), e || (e = g || fb.test(c || d)), h = i + b.length, b;
      }), k += "';\n", m || (l = "obj", e ? k = "with(" + l + "){" + k + "}" : (d = RegExp("(\\(\\s*)" + l + "\\." + l + "\\b", "g"), k = k.replace(lb, "$&" + l + ".").replace(d, "$1__d"))), k = (e ? k.replace(hb, "") : k).replace(ib, "$1").replace(jb, "$1;"), k = "function(" + l + "){" + (m ? "" : l + "||(" + l + "={});") + "var __t,__p='',__e=_.escape" + (e ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : (m ? "" : ",__d=" + l + "." + l + "||" + l) + ";") + k + "return __p}";
      try {
        f = Function("_", "return " + k)(c);
      } catch (n) {
        throw n.source = k, n;
      }
      return b ? f(b) : (f.source = k, f);
    }, c.unescape = function(a) {
      return null == a ? "" : (a + "").replace(gb, o);
    }, c.uniqueId = function(a) {
      return (null == a ? "" : a + "") + ++bb;
    }, c.all = D, c.any = M, c.detect = F, c.foldl = K, c.foldr = L, c.include = C, c.inject = K, kc(c, function(a, b) {
      c.prototype[b] || (c.prototype[b] = function() {
        var b = [this.__wrapped__];
        return yb.apply(b, arguments), a.apply(c, b);
      });
    }), c.first = N, c.last = function(a, b, c) {
      if (a) {
        var d = a.length;
        return null == b || c ? a[d - 1] : n(a, Gb(0, d - b));
      }
    }, c.take = N, c.head = N, kc(c, function(a, b) {
      c.prototype[b] || (c.prototype[b] = function(b, d) {
        var e = a(this.__wrapped__, b, d);
        return null == b || d ? e : new c(e);
      });
    }), c.VERSION = "1.0.0-rc.3", c.prototype.toString = function() {
      return this.__wrapped__ + "";
    }, c.prototype.value = W, c.prototype.valueOf = W, hc(["join", "pop", "shift"], function(a) {
      var b = _[a];
      c.prototype[a] = function() {
        return b.apply(this.__wrapped__, arguments);
      };
    }), hc(["push", "reverse", "sort", "unshift"], function(a) {
      var b = _[a];
      c.prototype[a] = function() {
        return b.apply(this.__wrapped__, arguments), this;
      };
    }), hc(["concat", "slice", "splice"], function(a) {
      var b = _[a];
      c.prototype[a] = function() {
        var a = b.apply(this.__wrapped__, arguments);
        return new c(a);
      };
    }), Vb && hc(["pop", "shift", "splice"], function(a) {
      var b = _[a],
          d = "splice" == a;
      c.prototype[a] = function() {
        var a = this.__wrapped__,
            e = b.apply(a, arguments);
        return 0 === a.length && delete a[0], d ? new c(e) : e;
      };
    }), "function" == typeof define && "object" == typeof define.amd && define.amd ? (a._ = c, define(function() {
      return c;
    })) : X ? "object" == typeof module && module && module.exports == X ? (module.exports = c)._ = c : X._ = c : a._ = c;
  }(this), function(a) {
    var b,
        c,
        d = "0.3.4",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = "*",
        h = function() {},
        i = function(a, b) {
          return a - b;
        },
        j = {n: {}},
        k = function(a, d) {
          var e,
              f = c,
              g = Array.prototype.slice.call(arguments, 2),
              h = k.listeners(a),
              j = 0,
              l = [],
              m = {},
              n = [],
              o = b;
          b = a, c = 0;
          for (var p = 0,
              q = h.length; q > p; p++)
            "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
          for (l.sort(i); l[j] < 0; )
            if (e = m[l[j++]], n.push(e.apply(d, g)), c)
              return c = f, n;
          for (p = 0; q > p; p++)
            if (e = h[p], "zIndex" in e)
              if (e.zIndex == l[j]) {
                if (n.push(e.apply(d, g)), c)
                  break;
                do
                  if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c)
                    break;
 while (e);
              } else
                m[e.zIndex] = e;
            else if (n.push(e.apply(d, g)), c)
              break;
          return c = f, b = o, n.length ? n : null;
        };
    k.listeners = function(a) {
      var b,
          c,
          d,
          e,
          h,
          i,
          k,
          l,
          m = a.split(f),
          n = j,
          o = [n],
          p = [];
      for (e = 0, h = m.length; h > e; e++) {
        for (l = [], i = 0, k = o.length; k > i; i++)
          for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--; )
            b = c[d], b && (l.push(b), p = p.concat(b.f || []));
        o = l;
      }
      return p;
    }, k.on = function(a, b) {
      for (var c = a.split(f),
          d = j,
          e = 0,
          g = c.length; g > e; e++)
        d = d.n, !d[c[e]] && (d[c[e]] = {n: {}}), d = d[c[e]];
      for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
        if (d.f[e] == b)
          return h;
      return d.f.push(b), function(a) {
        +a == +a && (b.zIndex = +a);
      };
    }, k.stop = function() {
      c = 1;
    }, k.nt = function(a) {
      return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b;
    }, k.off = k.unbind = function(a, b) {
      var c,
          d,
          h,
          i,
          k,
          l,
          m,
          n = a.split(f),
          o = [j];
      for (i = 0, k = n.length; k > i; i++)
        for (l = 0; l < o.length; l += h.length - 2) {
          if (h = [l, 1], c = o[l].n, n[i] != g)
            c[n[i]] && h.push(c[n[i]]);
          else
            for (d in c)
              c[e](d) && h.push(c[d]);
          o.splice.apply(o, h);
        }
      for (i = 0, k = o.length; k > i; i++)
        for (c = o[i]; c.n; ) {
          if (b) {
            if (c.f) {
              for (l = 0, m = c.f.length; m > l; l++)
                if (c.f[l] == b) {
                  c.f.splice(l, 1);
                  break;
                }
              !c.f.length && delete c.f;
            }
            for (d in c.n)
              if (c.n[e](d) && c.n[d].f) {
                var p = c.n[d].f;
                for (l = 0, m = p.length; m > l; l++)
                  if (p[l] == b) {
                    p.splice(l, 1);
                    break;
                  }
                !p.length && delete c.n[d].f;
              }
          } else {
            delete c.f;
            for (d in c.n)
              c.n[e](d) && c.n[d].f && delete c.n[d].f;
          }
          c = c.n;
        }
    }, k.once = function(a, b) {
      var c = function() {
        var d = b.apply(this, arguments);
        return k.unbind(a, c), d;
      };
      return k.on(a, c);
    }, k.version = d, k.toString = function() {
      return "You are running Eve " + d;
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
      return k;
    }) : a.eve = k;
  }(this), function() {
    function a(a) {
      for (var b = 0; b < fc.length; b++)
        fc[b].el.paper == a && fc.splice(b--, 1);
    }
    function b(a, b, c, e, g, h) {
      c = Z(c);
      var i,
          j,
          k,
          l,
          m,
          n,
          o = a.ms,
          p = {},
          q = {},
          s = {};
      if (e)
        for (v = 0, w = fc.length; w > v; v++) {
          var t = fc[v];
          if (t.el.id == b.id && t.anim == a) {
            t.percent != c ? (fc.splice(v, 1), k = 1) : j = t, b.attr(t.totalOrigin);
            break;
          }
        }
      else
        e = +q;
      for (var v = 0,
          w = a.percents.length; w > v; v++) {
        if (a.percents[v] == c || a.percents[v] > e * a.top) {
          c = a.percents[v], m = a.percents[v - 1] || 0, o = o / a.top * (c - m), l = a.percents[v + 1], i = a.anim[c];
          break;
        }
        e && b.attr(a.anim[a.percents[v]]);
      }
      if (i) {
        if (j)
          j.initstatus = e, j.start = new Date - j.ms * e;
        else {
          for (var y in i)
            if (i[x](y) && (bb[x](y) || b.paper.customAttributes[x](y)))
              switch (p[y] = b.attr(y), null == p[y] && (p[y] = ab[y]), q[y] = i[y], bb[y]) {
                case R:
                  s[y] = (q[y] - p[y]) / o;
                  break;
                case "colour":
                  p[y] = r.getRGB(p[y]);
                  var z = r.getRGB(q[y]);
                  s[y] = {
                    r: (z.r - p[y].r) / o,
                    g: (z.g - p[y].g) / o,
                    b: (z.b - p[y].b) / o
                  };
                  break;
                case "path":
                  var A = Ib(p[y], q[y]),
                      B = A[1];
                  for (p[y] = A[0], s[y] = [], v = 0, w = p[y].length; w > v; v++) {
                    s[y][v] = [0];
                    for (var D = 1,
                        E = p[y][v].length; E > D; D++)
                      s[y][v][D] = (B[v][D] - p[y][v][D]) / o;
                  }
                  break;
                case "transform":
                  var F = b._,
                      I = Nb(F[y], q[y]);
                  if (I)
                    for (p[y] = I.from, q[y] = I.to, s[y] = [], s[y].real = !0, v = 0, w = p[y].length; w > v; v++)
                      for (s[y][v] = [p[y][v][0]], D = 1, E = p[y][v].length; E > D; D++)
                        s[y][v][D] = (q[y][v][D] - p[y][v][D]) / o;
                  else {
                    var J = b.matrix || new f,
                        K = {
                          _: {transform: F.transform},
                          getBBox: function() {
                            return b.getBBox(1);
                          }
                        };
                    p[y] = [J.a, J.b, J.c, J.d, J.e, J.f], Lb(K, q[y]), q[y] = K._.transform, s[y] = [(K.matrix.a - J.a) / o, (K.matrix.b - J.b) / o, (K.matrix.c - J.c) / o, (K.matrix.d - J.d) / o, (K.matrix.e - J.e) / o, (K.matrix.f - J.f) / o];
                  }
                  break;
                case "csv":
                  var L = G(i[y])[H](u),
                      M = G(p[y])[H](u);
                  if ("clip-rect" == y)
                    for (p[y] = M, s[y] = [], v = M.length; v--; )
                      s[y][v] = (L[v] - p[y][v]) / o;
                  q[y] = L;
                  break;
                default:
                  for (L = [][C](i[y]), M = [][C](p[y]), s[y] = [], v = b.paper.customAttributes[y].length; v--; )
                    s[y][v] = ((L[v] || 0) - (M[v] || 0)) / o;
              }
          var N = i.easing,
              O = r.easing_formulas[N];
          if (!O)
            if (O = G(N).match(X), O && 5 == O.length) {
              var P = O;
              O = function(a) {
                return d(a, +P[1], +P[2], +P[3], +P[4], o);
              };
            } else
              O = lb;
          if (n = i.start || a.start || +new Date, t = {
            anim: a,
            percent: c,
            timestamp: n,
            start: n + (a.del || 0),
            status: 0,
            initstatus: e || 0,
            stop: !1,
            ms: o,
            easing: O,
            from: p,
            diff: s,
            to: q,
            el: b,
            callback: i.callback,
            prev: m,
            next: l,
            repeat: h || a.times,
            origin: b.attr(),
            totalOrigin: g
          }, fc.push(t), e && !j && !k && (t.stop = !0, t.start = new Date - o * e, 1 == fc.length))
            return hc();
          k && (t.start = new Date - t.ms * e), 1 == fc.length && gc(hc);
        }
        eve("raphael.anim.start." + b.id, b, a);
      }
    }
    function c(a, b) {
      var c = [],
          d = {};
      if (this.ms = b, this.times = 1, a) {
        for (var e in a)
          a[x](e) && (d[Z(e)] = a[e], c.push(Z(e)));
        c.sort(jb);
      }
      this.anim = d, this.top = c[c.length - 1], this.percents = c;
    }
    function d(a, b, c, d, e, f) {
      function g(a, b) {
        var c,
            d,
            e,
            f,
            g,
            h;
        for (e = a, h = 0; 8 > h; h++) {
          if (f = i(e) - a, O(f) < b)
            return e;
          if (g = (3 * l * e + 2 * k) * e + j, O(g) < 1e-6)
            break;
          e -= f / g;
        }
        if (c = 0, d = 1, e = a, c > e)
          return c;
        if (e > d)
          return d;
        for (; d > c; ) {
          if (f = i(e), O(f - a) < b)
            return e;
          a > f ? c = e : d = e, e = (d - c) / 2 + c;
        }
        return e;
      }
      function h(a, b) {
        var c = g(a, b);
        return ((o * c + n) * c + m) * c;
      }
      function i(a) {
        return ((l * a + k) * a + j) * a;
      }
      var j = 3 * b,
          k = 3 * (d - b) - j,
          l = 1 - j - k,
          m = 3 * c,
          n = 3 * (e - c) - m,
          o = 1 - m - n;
      return h(a, 1 / (200 * f));
    }
    function e() {
      return this.x + F + this.y + F + this.width + " × " + this.height;
    }
    function f(a, b, c, d, e, f) {
      null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
    }
    function g(a, b, c) {
      a = r._path2curve(a), b = r._path2curve(b);
      for (var d,
          e,
          f,
          g,
          i,
          j,
          k,
          l,
          m,
          n,
          o = c ? 0 : [],
          p = 0,
          q = a.length; q > p; p++) {
        var s = a[p];
        if ("M" == s[0])
          d = i = s[1], e = j = s[2];
        else {
          "C" == s[0] ? (m = [d, e].concat(s.slice(1)), d = m[6], e = m[7]) : (m = [d, e, d, e, i, j, i, j], d = i, e = j);
          for (var t = 0,
              u = b.length; u > t; t++) {
            var v = b[t];
            if ("M" == v[0])
              f = k = v[1], g = l = v[2];
            else {
              "C" == v[0] ? (n = [f, g].concat(v.slice(1)), f = n[6], g = n[7]) : (n = [f, g, f, g, k, l, k, l], f = k, g = l);
              var w = h(m, n, c);
              if (c)
                o += w;
              else {
                for (var x = 0,
                    y = w.length; y > x; x++)
                  w[x].segment1 = p, w[x].segment2 = t, w[x].bez1 = m, w[x].bez2 = n;
                o = o.concat(w);
              }
            }
          }
        }
      }
      return o;
    }
    function h(a, b, c) {
      var d = r.bezierBBox(a),
          e = r.bezierBBox(b);
      if (!r.isBBoxIntersect(d, e))
        return c ? 0 : [];
      for (var f = k.apply(0, a),
          g = k.apply(0, b),
          h = ~~(f / 5),
          j = ~~(g / 5),
          l = [],
          m = [],
          n = {},
          o = c ? 0 : [],
          p = 0; h + 1 > p; p++) {
        var q = r.findDotsAtSegment.apply(r, a.concat(p / h));
        l.push({
          x: q.x,
          y: q.y,
          t: p / h
        });
      }
      for (p = 0; j + 1 > p; p++)
        q = r.findDotsAtSegment.apply(r, b.concat(p / j)), m.push({
          x: q.x,
          y: q.y,
          t: p / j
        });
      for (p = 0; h > p; p++)
        for (var s = 0; j > s; s++) {
          var t = l[p],
              u = l[p + 1],
              v = m[s],
              w = m[s + 1],
              x = O(u.x - t.x) < .001 ? "y" : "x",
              y = O(w.x - v.x) < .001 ? "y" : "x",
              z = i(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
          if (z) {
            if (n[z.x.toFixed(4)] == z.y.toFixed(4))
              continue;
            n[z.x.toFixed(4)] = z.y.toFixed(4);
            var A = t.t + O((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
                B = v.t + O((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
            A >= 0 && 1 >= A && B >= 0 && 1 >= B && (c ? o++ : o.push({
              x: z.x,
              y: z.y,
              t1: A,
              t2: B
            }));
          }
        }
      return o;
    }
    function i(a, b, c, d, e, f, g, h) {
      if (!(M(a, c) < N(e, g) || N(a, c) > M(e, g) || M(b, d) < N(f, h) || N(b, d) > M(f, h))) {
        var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
            j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
            k = (a - c) * (f - h) - (b - d) * (e - g);
        if (!k)
          return ;
        var l = i / k,
            m = j / k,
            n = +l.toFixed(2),
            o = +m.toFixed(2);
        if (n < +N(a, c).toFixed(2) || n > +M(a, c).toFixed(2) || n < +N(e, g).toFixed(2) || n > +M(e, g).toFixed(2) || o < +N(b, d).toFixed(2) || o > +M(b, d).toFixed(2) || o < +N(f, h).toFixed(2) || o > +M(f, h).toFixed(2))
          return ;
        return {
          x: l,
          y: m
        };
      }
    }
    function j(a, b, c, d, e, f, g, h, i) {
      if (!(0 > i || k(a, b, c, d, e, f, g, h) < i)) {
        var j,
            l = 1,
            m = l / 2,
            n = l - m,
            o = .01;
        for (j = k(a, b, c, d, e, f, g, h, n); O(j - i) > o; )
          m /= 2, n += (i > j ? 1 : -1) * m, j = k(a, b, c, d, e, f, g, h, n);
        return n;
      }
    }
    function k(a, b, c, d, e, f, g, h, i) {
      null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
      for (var j = i / 2,
          k = 12,
          m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816],
          n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
          o = 0,
          p = 0; k > p; p++) {
        var q = j * m[p] + j,
            r = l(q, a, c, e, g),
            s = l(q, b, d, f, h),
            t = r * r + s * s;
        o += n[p] * L.sqrt(t);
      }
      return j * o;
    }
    function l(a, b, c, d, e) {
      var f = -3 * b + 9 * c - 9 * d + 3 * e,
          g = a * f + 6 * b - 12 * c + 6 * d;
      return a * g - 3 * b + 3 * c;
    }
    function m(a, b) {
      for (var c = [],
          d = 0,
          e = a.length; e - 2 * !b > d; d += 2) {
        var f = [{
          x: +a[d - 2],
          y: +a[d - 1]
        }, {
          x: +a[d],
          y: +a[d + 1]
        }, {
          x: +a[d + 2],
          y: +a[d + 3]
        }, {
          x: +a[d + 4],
          y: +a[d + 5]
        }];
        b ? d ? e - 4 == d ? f[3] = {
          x: +a[0],
          y: +a[1]
        } : e - 2 == d && (f[2] = {
          x: +a[0],
          y: +a[1]
        }, f[3] = {
          x: +a[2],
          y: +a[3]
        }) : f[0] = {
          x: +a[e - 2],
          y: +a[e - 1]
        } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
          x: +a[d],
          y: +a[d + 1]
        }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y]);
      }
      return c;
    }
    function n() {
      return this.hex;
    }
    function o(a, b, c) {
      function d() {
        var e = Array.prototype.slice.call(arguments, 0),
            f = e.join("␀"),
            g = d.cache = d.cache || {},
            h = d.count = d.count || [];
        return g[x](f) ? (p(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a[B](b, e), c ? c(g[f]) : g[f]);
      }
      return d;
    }
    function p(a, b) {
      for (var c = 0,
          d = a.length; d > c; c++)
        if (a[c] === b)
          return a.push(a.splice(c, 1)[0]);
    }
    function q(a) {
      if (Object(a) !== a)
        return a;
      var b = new a.constructor;
      for (var c in a)
        a[x](c) && (b[c] = q(a[c]));
      return b;
    }
    function r(a) {
      if (r.is(a, "function"))
        return s ? a() : eve.on("raphael.DOMload", a);
      if (r.is(a, T))
        return r._engine.create[B](r, a.splice(0, 3 + r.is(a[0], R))).add(a);
      var b = Array.prototype.slice.call(arguments, 0);
      if (r.is(b[b.length - 1], "function")) {
        var c = b.pop();
        return s ? c.call(r._engine.create[B](r, b)) : eve.on("raphael.DOMload", function() {
          c.call(r._engine.create[B](r, b));
        });
      }
      return r._engine.create[B](r, arguments);
    }
    r.version = "2.1.0", r.eve = eve;
    var s,
        t,
        u = /[, ]+/,
        v = {
          circle: 1,
          rect: 1,
          path: 1,
          ellipse: 1,
          text: 1,
          image: 1
        },
        w = /\{(\d+)\}/g,
        x = "hasOwnProperty",
        y = {
          doc: document,
          win: window
        },
        z = {
          was: Object.prototype[x].call(y.win, "Raphael"),
          is: y.win.Raphael
        },
        A = function() {
          this.ca = this.customAttributes = {};
        },
        B = "apply",
        C = "concat",
        D = "createTouch" in y.doc,
        E = "",
        F = " ",
        G = String,
        H = "split",
        I = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[H](F),
        J = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend"
        },
        K = G.prototype.toLowerCase,
        L = Math,
        M = L.max,
        N = L.min,
        O = L.abs,
        P = L.pow,
        Q = L.PI,
        R = "number",
        S = "string",
        T = "array",
        U = Object.prototype.toString,
        V = (r._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        W = {
          NaN: 1,
          Infinity: 1,
          "-Infinity": 1
        },
        X = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        Y = L.round,
        Z = parseFloat,
        $ = parseInt,
        _ = G.prototype.toUpperCase,
        ab = r._availableAttrs = {
          "arrow-end": "none",
          "arrow-start": "none",
          blur: 0,
          "clip-rect": "0 0 1e9 1e9",
          cursor: "default",
          cx: 0,
          cy: 0,
          fill: "#fff",
          "fill-opacity": 1,
          font: '10px "Arial"',
          "font-family": '"Arial"',
          "font-size": "10",
          "font-style": "normal",
          "font-weight": 400,
          gradient: 0,
          height: 0,
          href: "http://raphaeljs.com/",
          "letter-spacing": 0,
          opacity: 1,
          path: "M0,0",
          r: 0,
          rx: 0,
          ry: 0,
          src: "",
          stroke: "#000",
          "stroke-dasharray": "",
          "stroke-linecap": "butt",
          "stroke-linejoin": "butt",
          "stroke-miterlimit": 0,
          "stroke-opacity": 1,
          "stroke-width": 1,
          target: "_blank",
          "text-anchor": "middle",
          title: "Raphael",
          transform: "",
          width: 0,
          x: 0,
          y: 0
        },
        bb = r._availableAnimAttrs = {
          blur: R,
          "clip-rect": "csv",
          cx: R,
          cy: R,
          fill: "colour",
          "fill-opacity": R,
          "font-size": R,
          height: R,
          opacity: R,
          path: "path",
          r: R,
          rx: R,
          ry: R,
          stroke: "colour",
          "stroke-opacity": R,
          "stroke-width": R,
          transform: "transform",
          width: R,
          x: R,
          y: R
        },
        cb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        db = {
          hs: 1,
          rg: 1
        },
        eb = /,?([achlmqrstvxz]),?/gi,
        fb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        gb = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        hb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        ib = (r._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        jb = function(a, b) {
          return Z(a) - Z(b);
        },
        kb = function() {},
        lb = function(a) {
          return a;
        },
        mb = r._rectPath = function(a, b, c, d, e) {
          return e ? [["M", a + e, b], ["l", c - 2 * e, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - 2 * e], ["a", e, e, 0, 0, 1, -e, e], ["l", 2 * e - c, 0], ["a", e, e, 0, 0, 1, -e, -e], ["l", 0, 2 * e - d], ["a", e, e, 0, 0, 1, e, -e], ["z"]] : [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]];
        },
        nb = function(a, b, c, d) {
          return null == d && (d = c), [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]];
        },
        ob = r._getPath = {
          path: function(a) {
            return a.attr("path");
          },
          circle: function(a) {
            var b = a.attrs;
            return nb(b.cx, b.cy, b.r);
          },
          ellipse: function(a) {
            var b = a.attrs;
            return nb(b.cx, b.cy, b.rx, b.ry);
          },
          rect: function(a) {
            var b = a.attrs;
            return mb(b.x, b.y, b.width, b.height, b.r);
          },
          image: function(a) {
            var b = a.attrs;
            return mb(b.x, b.y, b.width, b.height);
          },
          text: function(a) {
            var b = a._getBBox();
            return mb(b.x, b.y, b.width, b.height);
          }
        },
        pb = r.mapPath = function(a, b) {
          if (!b)
            return a;
          var c,
              d,
              e,
              f,
              g,
              h,
              i;
          for (a = Ib(a), e = 0, g = a.length; g > e; e++)
            for (i = a[e], f = 1, h = i.length; h > f; f += 2)
              c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
          return a;
        };
    if (r._g = y, r.type = y.win.SVGAngle || y.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == r.type) {
      var qb,
          rb = y.doc.createElement("div");
      if (rb.innerHTML = '<v:shape adj="1"/>', qb = rb.firstChild, qb.style.behavior = "url(#default#VML)", !qb || "object" != typeof qb.adj)
        return r.type = E;
      rb = null;
    }
    r.svg = !(r.vml = "VML" == r.type), r._Paper = A, r.fn = t = A.prototype = r.prototype, r._id = 0, r._oid = 0, r.is = function(a, b) {
      return b = K.call(b), "finite" == b ? !W[x](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || U.call(a).slice(8, -1).toLowerCase() == b;
    }, r.angle = function(a, b, c, d, e, f) {
      if (null == e) {
        var g = a - c,
            h = b - d;
        return g || h ? (180 + 180 * L.atan2(-h, -g) / Q + 360) % 360 : 0;
      }
      return r.angle(a, b, e, f) - r.angle(c, d, e, f);
    }, r.rad = function(a) {
      return a % 360 * Q / 180;
    }, r.deg = function(a) {
      return 180 * a / Q % 360;
    }, r.snapTo = function(a, b, c) {
      if (c = r.is(c, "finite") ? c : 10, r.is(a, T)) {
        for (var d = a.length; d--; )
          if (O(a[d] - b) <= c)
            return a[d];
      } else {
        a = +a;
        var e = b % a;
        if (c > e)
          return b - e;
        if (e > a - c)
          return b - e + a;
      }
      return b;
    }, r.createUUID = function(a, b) {
      return function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase();
      };
    }(/[xy]/g, function(a) {
      var b = 0 | 16 * L.random(),
          c = "x" == a ? b : 8 | 3 & b;
      return c.toString(16);
    }), r.setWindow = function(a) {
      eve("raphael.setWindow", r, y.win, a), y.win = a, y.doc = y.win.document, r._engine.initWin && r._engine.initWin(y.win);
    };
    var sb = function(a) {
      if (r.vml) {
        var b,
            c = /^\s+|\s+$/g;
        try {
          var d = new ActiveXObject("htmlfile");
          d.write("<body>"), d.close(), b = d.body;
        } catch (e) {
          b = createPopup().document.body;
        }
        var f = b.createTextRange();
        sb = o(function(a) {
          try {
            b.style.color = G(a).replace(c, E);
            var d = f.queryCommandValue("ForeColor");
            return d = (255 & d) << 16 | 65280 & d | (16711680 & d) >>> 16, "#" + ("000000" + d.toString(16)).slice(-6);
          } catch (e) {
            return "none";
          }
        });
      } else {
        var g = y.doc.createElement("i");
        g.title = "Raphaël Colour Picker", g.style.display = "none", y.doc.body.appendChild(g), sb = o(function(a) {
          return g.style.color = a, y.doc.defaultView.getComputedStyle(g, E).getPropertyValue("color");
        });
      }
      return sb(a);
    },
        tb = function() {
          return "hsb(" + [this.h, this.s, this.b] + ")";
        },
        ub = function() {
          return "hsl(" + [this.h, this.s, this.l] + ")";
        },
        vb = function() {
          return this.hex;
        },
        wb = function(a, b, c) {
          if (null == b && r.is(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && r.is(a, S)) {
            var d = r.getRGB(a);
            a = d.r, b = d.g, c = d.b;
          }
          return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c];
        },
        xb = function(a, b, c, d) {
          a *= 255, b *= 255, c *= 255;
          var e = {
            r: a,
            g: b,
            b: c,
            hex: r.rgb(a, b, c),
            toString: vb
          };
          return r.is(d, "finite") && (e.opacity = d), e;
        };
    r.color = function(a) {
      var b;
      return r.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = r.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : r.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = r.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (r.is(a, "string") && (a = r.getRGB(a)), r.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = r.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = r.rgb2hsb(a), a.v = b.b) : (a = {hex: "none"}, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = vb, a;
    }, r.hsb2rgb = function(a, b, c, d) {
      this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
      var e,
          f,
          g,
          h,
          i;
      return a = a % 360 / 60, i = c * b, h = i * (1 - O(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], xb(e, f, g, d);
    }, r.hsl2rgb = function(a, b, c, d) {
      this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
      var e,
          f,
          g,
          h,
          i;
      return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - O(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], xb(e, f, g, d);
    }, r.rgb2hsb = function(a, b, c) {
      c = wb(a, b, c), a = c[0], b = c[1], c = c[2];
      var d,
          e,
          f,
          g;
      return f = M(a, b, c), g = f - N(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
        h: d,
        s: e,
        b: f,
        toString: tb
      };
    }, r.rgb2hsl = function(a, b, c) {
      c = wb(a, b, c), a = c[0], b = c[1], c = c[2];
      var d,
          e,
          f,
          g,
          h,
          i;
      return g = M(a, b, c), h = N(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
        h: d,
        s: e,
        l: f,
        toString: ub
      };
    }, r._path2string = function() {
      return this.join(",").replace(eb, "$1");
    }, r._preload = function(a, b) {
      var c = y.doc.createElement("img");
      c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
        b.call(this), this.onload = null, y.doc.body.removeChild(this);
      }, c.onerror = function() {
        y.doc.body.removeChild(this);
      }, y.doc.body.appendChild(c), c.src = a;
    }, r.getRGB = o(function(a) {
      if (!a || (a = G(a)).indexOf("-") + 1)
        return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: n
        };
      if ("none" == a)
        return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          toString: n
        };
      !db[x](a.toLowerCase().substring(0, 2)) && "#" != a.charAt() && (a = sb(a));
      var b,
          c,
          d,
          e,
          f,
          g,
          h = a.match(V);
      return h ? (h[2] && (d = $(h[2].substring(5), 16), c = $(h[2].substring(3, 5), 16), b = $(h[2].substring(1, 3), 16)), h[3] && (d = $((f = h[3].charAt(3)) + f, 16), c = $((f = h[3].charAt(2)) + f, 16), b = $((f = h[3].charAt(1)) + f, 16)), h[4] && (g = h[4][H](cb), b = Z(g[0]), "%" == g[0].slice(-1) && (b *= 2.55), c = Z(g[1]), "%" == g[1].slice(-1) && (c *= 2.55), d = Z(g[2]), "%" == g[2].slice(-1) && (d *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (e = Z(g[3])), g[3] && "%" == g[3].slice(-1) && (e /= 100)), h[5] ? (g = h[5][H](cb), b = Z(g[0]), "%" == g[0].slice(-1) && (b *= 2.55), c = Z(g[1]), "%" == g[1].slice(-1) && (c *= 2.55), d = Z(g[2]), "%" == g[2].slice(-1) && (d *= 2.55), ("deg" == g[0].slice(-3) || "°" == g[0].slice(-1)) && (b /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (e = Z(g[3])), g[3] && "%" == g[3].slice(-1) && (e /= 100), r.hsb2rgb(b, c, d, e)) : h[6] ? (g = h[6][H](cb), b = Z(g[0]), "%" == g[0].slice(-1) && (b *= 2.55), c = Z(g[1]), "%" == g[1].slice(-1) && (c *= 2.55), d = Z(g[2]), "%" == g[2].slice(-1) && (d *= 2.55), ("deg" == g[0].slice(-3) || "°" == g[0].slice(-1)) && (b /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (e = Z(g[3])), g[3] && "%" == g[3].slice(-1) && (e /= 100), r.hsl2rgb(b, c, d, e)) : (h = {
        r: b,
        g: c,
        b: d,
        toString: n
      }, h.hex = "#" + (16777216 | d | c << 8 | b << 16).toString(16).slice(1), r.is(e, "finite") && (h.opacity = e), h)) : {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: n
      };
    }, r), r.hsb = o(function(a, b, c) {
      return r.hsb2rgb(a, b, c).hex;
    }), r.hsl = o(function(a, b, c) {
      return r.hsl2rgb(a, b, c).hex;
    }), r.rgb = o(function(a, b, c) {
      return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1);
    }), r.getColor = function(a) {
      var b = this.getColor.start = this.getColor.start || {
        h: 0,
        s: 1,
        b: a || .75
      },
          c = this.hsb2rgb(b.h, b.s, b.b);
      return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
        h: 0,
        s: 1,
        b: b.b
      })), c.hex;
    }, r.getColor.reset = function() {
      delete this.start;
    }, r.parsePathString = function(a) {
      if (!a)
        return null;
      var b = yb(a);
      if (b.arr)
        return Ab(b.arr);
      var c = {
        a: 7,
        c: 6,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        z: 0
      },
          d = [];
      return r.is(a, T) && r.is(a[0], T) && (d = Ab(a)), d.length || G(a).replace(fb, function(a, b, e) {
        var f = [],
            g = b.toLowerCase();
        if (e.replace(hb, function(a, b) {
          b && f.push(+b);
        }), "m" == g && f.length > 2 && (d.push([b][C](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g)
          d.push([b][C](f));
        else
          for (; f.length >= c[g] && (d.push([b][C](f.splice(0, c[g]))), c[g]); )
            ;
      }), d.toString = r._path2string, b.arr = Ab(d), d;
    }, r.parseTransformString = o(function(a) {
      if (!a)
        return null;
      var b = [];
      return r.is(a, T) && r.is(a[0], T) && (b = Ab(a)), b.length || G(a).replace(gb, function(a, c, d) {
        var e = [];
        K.call(c), d.replace(hb, function(a, b) {
          b && e.push(+b);
        }), b.push([c][C](e));
      }), b.toString = r._path2string, b;
    });
    var yb = function(a) {
      var b = yb.ps = yb.ps || {};
      return b[a] ? b[a].sleep = 100 : b[a] = {sleep: 100}, setTimeout(function() {
        for (var c in b)
          b[x](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]);
      }), b[a];
    };
    r.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
      var j = 1 - i,
          k = P(j, 3),
          l = P(j, 2),
          m = i * i,
          n = m * i,
          o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
          p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
          q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
          r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
          s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
          t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
          u = j * a + i * c,
          v = j * b + i * d,
          w = j * e + i * g,
          x = j * f + i * h,
          y = 90 - 180 * L.atan2(q - s, r - t) / Q;
      return (q > s || t > r) && (y += 180), {
        x: o,
        y: p,
        m: {
          x: q,
          y: r
        },
        n: {
          x: s,
          y: t
        },
        start: {
          x: u,
          y: v
        },
        end: {
          x: w,
          y: x
        },
        alpha: y
      };
    }, r.bezierBBox = function(a, b, c, d, e, f, g, h) {
      r.is(a, "array") || (a = [a, b, c, d, e, f, g, h]);
      var i = Hb.apply(null, a);
      return {
        x: i.min.x,
        y: i.min.y,
        x2: i.max.x,
        y2: i.max.y,
        width: i.max.x - i.min.x,
        height: i.max.y - i.min.y
      };
    }, r.isPointInsideBBox = function(a, b, c) {
      return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2;
    }, r.isBBoxIntersect = function(a, b) {
      var c = r.isPointInsideBBox;
      return c(b, a.x, a.y) || c(b, a.x2, a.y) || c(b, a.x, a.y2) || c(b, a.x2, a.y2) || c(a, b.x, b.y) || c(a, b.x2, b.y) || c(a, b.x, b.y2) || c(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y);
    }, r.pathIntersection = function(a, b) {
      return g(a, b);
    }, r.pathIntersectionNumber = function(a, b) {
      return g(a, b, 1);
    }, r.isPointInsidePath = function(a, b, c) {
      var d = r.pathBBox(a);
      return r.isPointInsideBBox(d, b, c) && 1 == g(a, [["M", b, c], ["H", d.x2 + 10]], 1) % 2;
    }, r._removedFactory = function(a) {
      return function() {
        eve("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a);
      };
    };
    var zb = r.pathBBox = function(a) {
      var b = yb(a);
      if (b.bbox)
        return b.bbox;
      if (!a)
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          x2: 0,
          y2: 0
        };
      a = Ib(a);
      for (var c,
          d = 0,
          e = 0,
          f = [],
          g = [],
          h = 0,
          i = a.length; i > h; h++)
        if (c = a[h], "M" == c[0])
          d = c[1], e = c[2], f.push(d), g.push(e);
        else {
          var j = Hb(d, e, c[1], c[2], c[3], c[4], c[5], c[6]);
          f = f[C](j.min.x, j.max.x), g = g[C](j.min.y, j.max.y), d = c[5], e = c[6];
        }
      var k = N[B](0, f),
          l = N[B](0, g),
          m = M[B](0, f),
          n = M[B](0, g),
          o = {
            x: k,
            y: l,
            x2: m,
            y2: n,
            width: m - k,
            height: n - l
          };
      return b.bbox = q(o), o;
    },
        Ab = function(a) {
          var b = q(a);
          return b.toString = r._path2string, b;
        },
        Bb = r._pathToRelative = function(a) {
          var b = yb(a);
          if (b.rel)
            return Ab(b.rel);
          r.is(a, T) && r.is(a && a[0], T) || (a = r.parsePathString(a));
          var c = [],
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0;
          "M" == a[0][0] && (d = a[0][1], e = a[0][2], f = d, g = e, h++, c.push(["M", d, e]));
          for (var i = h,
              j = a.length; j > i; i++) {
            var k = c[i] = [],
                l = a[i];
            if (l[0] != K.call(l[0]))
              switch (k[0] = K.call(l[0]), k[0]) {
                case "a":
                  k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] - d).toFixed(3), k[7] = +(l[7] - e).toFixed(3);
                  break;
                case "v":
                  k[1] = +(l[1] - e).toFixed(3);
                  break;
                case "m":
                  f = l[1], g = l[2];
                default:
                  for (var m = 1,
                      n = l.length; n > m; m++)
                    k[m] = +(l[m] - (m % 2 ? d : e)).toFixed(3);
              }
            else {
              k = c[i] = [], "m" == l[0] && (f = l[1] + d, g = l[2] + e);
              for (var o = 0,
                  p = l.length; p > o; o++)
                c[i][o] = l[o];
            }
            var q = c[i].length;
            switch (c[i][0]) {
              case "z":
                d = f, e = g;
                break;
              case "h":
                d += +c[i][q - 1];
                break;
              case "v":
                e += +c[i][q - 1];
                break;
              default:
                d += +c[i][q - 2], e += +c[i][q - 1];
            }
          }
          return c.toString = r._path2string, b.rel = Ab(c), c;
        },
        Cb = r._pathToAbsolute = function(a) {
          var b = yb(a);
          if (b.abs)
            return Ab(b.abs);
          if (r.is(a, T) && r.is(a && a[0], T) || (a = r.parsePathString(a)), !a || !a.length)
            return [["M", 0, 0]];
          var c = [],
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0;
          "M" == a[0][0] && (d = +a[0][1], e = +a[0][2], f = d, g = e, h++, c[0] = ["M", d, e]);
          for (var i,
              j,
              k = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(),
              l = h,
              n = a.length; n > l; l++) {
            if (c.push(i = []), j = a[l], j[0] != _.call(j[0]))
              switch (i[0] = _.call(j[0]), i[0]) {
                case "A":
                  i[1] = j[1], i[2] = j[2], i[3] = j[3], i[4] = j[4], i[5] = j[5], i[6] = +(j[6] + d), i[7] = +(j[7] + e);
                  break;
                case "V":
                  i[1] = +j[1] + e;
                  break;
                case "H":
                  i[1] = +j[1] + d;
                  break;
                case "R":
                  for (var o = [d, e][C](j.slice(1)),
                      p = 2,
                      q = o.length; q > p; p++)
                    o[p] = +o[p] + d, o[++p] = +o[p] + e;
                  c.pop(), c = c[C](m(o, k));
                  break;
                case "M":
                  f = +j[1] + d, g = +j[2] + e;
                default:
                  for (p = 1, q = j.length; q > p; p++)
                    i[p] = +j[p] + (p % 2 ? d : e);
              }
            else if ("R" == j[0])
              o = [d, e][C](j.slice(1)), c.pop(), c = c[C](m(o, k)), i = ["R"][C](j.slice(-2));
            else
              for (var s = 0,
                  t = j.length; t > s; s++)
                i[s] = j[s];
            switch (i[0]) {
              case "Z":
                d = f, e = g;
                break;
              case "H":
                d = i[1];
                break;
              case "V":
                e = i[1];
                break;
              case "M":
                f = i[i.length - 2], g = i[i.length - 1];
              default:
                d = i[i.length - 2], e = i[i.length - 1];
            }
          }
          return c.toString = r._path2string, b.abs = Ab(c), c;
        },
        Db = function(a, b, c, d) {
          return [a, b, c, d, c, d];
        },
        Eb = function(a, b, c, d, e, f) {
          var g = 1 / 3,
              h = 2 / 3;
          return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f];
        },
        Fb = function(a, b, c, d, e, f, g, h, i, j) {
          var k,
              l = 120 * Q / 180,
              m = Q / 180 * (+e || 0),
              n = [],
              p = o(function(a, b, c) {
                var d = a * L.cos(c) - b * L.sin(c),
                    e = a * L.sin(c) + b * L.cos(c);
                return {
                  x: d,
                  y: e
                };
              });
          if (j)
            y = j[0], z = j[1], w = j[2], x = j[3];
          else {
            k = p(a, b, -m), a = k.x, b = k.y, k = p(h, i, -m), h = k.x, i = k.y;
            var q = (L.cos(Q / 180 * e), L.sin(Q / 180 * e), (a - h) / 2),
                r = (b - i) / 2,
                s = q * q / (c * c) + r * r / (d * d);
            s > 1 && (s = L.sqrt(s), c = s * c, d = s * d);
            var t = c * c,
                u = d * d,
                v = (f == g ? -1 : 1) * L.sqrt(O((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                w = v * c * r / d + (a + h) / 2,
                x = v * -d * q / c + (b + i) / 2,
                y = L.asin(((b - x) / d).toFixed(9)),
                z = L.asin(((i - x) / d).toFixed(9));
            y = w > a ? Q - y : y, z = w > h ? Q - z : z, 0 > y && (y = 2 * Q + y), 0 > z && (z = 2 * Q + z), g && y > z && (y -= 2 * Q), !g && z > y && (z -= 2 * Q);
          }
          var A = z - y;
          if (O(A) > l) {
            var B = z,
                D = h,
                E = i;
            z = y + l * (g && z > y ? 1 : -1), h = w + c * L.cos(z), i = x + d * L.sin(z), n = Fb(h, i, c, d, e, 0, g, D, E, [z, B, w, x]);
          }
          A = z - y;
          var F = L.cos(y),
              G = L.sin(y),
              I = L.cos(z),
              J = L.sin(z),
              K = L.tan(A / 4),
              M = 4 / 3 * c * K,
              N = 4 / 3 * d * K,
              P = [a, b],
              R = [a + M * G, b - N * F],
              S = [h + M * J, i - N * I],
              T = [h, i];
          if (R[0] = 2 * P[0] - R[0], R[1] = 2 * P[1] - R[1], j)
            return [R, S, T][C](n);
          n = [R, S, T][C](n).join()[H](",");
          for (var U = [],
              V = 0,
              W = n.length; W > V; V++)
            U[V] = V % 2 ? p(n[V - 1], n[V], m).y : p(n[V], n[V + 1], m).x;
          return U;
        },
        Gb = function(a, b, c, d, e, f, g, h, i) {
          var j = 1 - i;
          return {
            x: P(j, 3) * a + 3 * P(j, 2) * i * c + 3 * j * i * i * e + P(i, 3) * g,
            y: P(j, 3) * b + 3 * P(j, 2) * i * d + 3 * j * i * i * f + P(i, 3) * h
          };
        },
        Hb = o(function(a, b, c, d, e, f, g, h) {
          var i,
              j = e - 2 * c + a - (g - 2 * e + c),
              k = 2 * (c - a) - 2 * (e - c),
              l = a - c,
              m = (-k + L.sqrt(k * k - 4 * j * l)) / 2 / j,
              n = (-k - L.sqrt(k * k - 4 * j * l)) / 2 / j,
              o = [b, h],
              p = [a, g];
          return O(m) > "1e12" && (m = .5), O(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Gb(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Gb(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + L.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - L.sqrt(k * k - 4 * j * l)) / 2 / j, O(m) > "1e12" && (m = .5), O(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Gb(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Gb(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
            min: {
              x: N[B](0, p),
              y: N[B](0, o)
            },
            max: {
              x: M[B](0, p),
              y: M[B](0, o)
            }
          };
        }),
        Ib = r._path2curve = o(function(a, b) {
          var c = !b && yb(a);
          if (!b && c.curve)
            return Ab(c.curve);
          for (var d = Cb(a),
              e = b && Cb(b),
              f = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              },
              g = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              },
              h = (function(a, b) {
                var c,
                    d;
                if (!a)
                  return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                switch (!(a[0] in {
                  T: 1,
                  Q: 1
                }) && (b.qx = b.qy = null), a[0]) {
                  case "M":
                    b.X = a[1], b.Y = a[2];
                    break;
                  case "A":
                    a = ["C"][C](Fb[B](0, [b.x, b.y][C](a.slice(1))));
                    break;
                  case "S":
                    c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d][C](a.slice(1));
                    break;
                  case "T":
                    b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"][C](Eb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                    break;
                  case "Q":
                    b.qx = a[1], b.qy = a[2], a = ["C"][C](Eb(b.x, b.y, a[1], a[2], a[3], a[4]));
                    break;
                  case "L":
                    a = ["C"][C](Db(b.x, b.y, a[1], a[2]));
                    break;
                  case "H":
                    a = ["C"][C](Db(b.x, b.y, a[1], b.y));
                    break;
                  case "V":
                    a = ["C"][C](Db(b.x, b.y, b.x, a[1]));
                    break;
                  case "Z":
                    a = ["C"][C](Db(b.x, b.y, b.X, b.Y));
                }
                return a;
              }),
              i = function(a, b) {
                if (a[b].length > 7) {
                  a[b].shift();
                  for (var c = a[b]; c.length; )
                    a.splice(b++, 0, ["C"][C](c.splice(0, 6)));
                  a.splice(b, 1), l = M(d.length, e && e.length || 0);
                }
              },
              j = function(a, b, c, f, g) {
                a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = M(d.length, e && e.length || 0));
              },
              k = 0,
              l = M(d.length, e && e.length || 0); l > k; k++) {
            d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
            var m = d[k],
                n = e && e[k],
                o = m.length,
                p = e && n.length;
            f.x = m[o - 2], f.y = m[o - 1], f.bx = Z(m[o - 4]) || f.x, f.by = Z(m[o - 3]) || f.y, g.bx = e && (Z(n[p - 4]) || g.x), g.by = e && (Z(n[p - 3]) || g.y), g.x = e && n[p - 2], g.y = e && n[p - 1];
          }
          return e || (c.curve = Ab(d)), e ? [d, e] : d;
        }, null, Ab),
        Jb = (r._parseDots = o(function(a) {
          for (var b = [],
              c = 0,
              d = a.length; d > c; c++) {
            var e = {},
                f = a[c].match(/^([^:]*):?([\d\.]*)/);
            if (e.color = r.getRGB(f[1]), e.color.error)
              return null;
            e.color = e.color.hex, f[2] && (e.offset = f[2] + "%"), b.push(e);
          }
          for (c = 1, d = b.length - 1; d > c; c++)
            if (!b[c].offset) {
              for (var g = Z(b[c - 1].offset || 0),
                  h = 0,
                  i = c + 1; d > i; i++)
                if (b[i].offset) {
                  h = b[i].offset;
                  break;
                }
              h || (h = 100, i = d), h = Z(h);
              for (var j = (h - g) / (i - c + 1); i > c; c++)
                g += j, b[c].offset = g + "%";
            }
          return b;
        }), r._tear = function(a, b) {
          a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next);
        }),
        Kb = (r._tofront = function(a, b) {
          b.top !== a && (Jb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a);
        }, r._toback = function(a, b) {
          b.bottom !== a && (Jb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a);
        }, r._insertafter = function(a, b, c) {
          Jb(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a;
        }, r._insertbefore = function(a, b, c) {
          Jb(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b;
        }, r.toMatrix = function(a, b) {
          var c = zb(a),
              d = {
                _: {transform: E},
                getBBox: function() {
                  return c;
                }
              };
          return Lb(d, b), d.matrix;
        }),
        Lb = (r.transformPath = function(a, b) {
          return pb(a, Kb(a, b));
        }, r._extractTransform = function(a, b) {
          if (null == b)
            return a._.transform;
          b = G(b).replace(/\.{3}|\u2026/g, a._.transform || E);
          var c = r.parseTransformString(b),
              d = 0,
              e = 0,
              g = 0,
              h = 1,
              i = 1,
              j = a._,
              k = new f;
          if (j.transform = c || [], c)
            for (var l = 0,
                m = c.length; m > l; l++) {
              var n,
                  o,
                  p,
                  q,
                  s,
                  t = c[l],
                  u = t.length,
                  v = G(t[0]).toLowerCase(),
                  w = t[0] != v,
                  x = w ? k.invert() : 0;
              "t" == v && 3 == u ? w ? (n = x.x(0, 0), o = x.y(0, 0), p = x.x(t[1], t[2]), q = x.y(t[1], t[2]), k.translate(p - n, q - o)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), d += t[1]) : 4 == u && (w ? (p = x.x(t[2], t[3]), q = x.y(t[2], t[3]), k.rotate(t[1], p, q)) : k.rotate(t[1], t[2], t[3]), d += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (p = x.x(t[3], t[4]), q = x.y(t[3], t[4]), k.scale(t[1], t[2], p, q)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k;
            }
          a.matrix = k, j.sx = h, j.sy = i, j.deg = d, j.dx = e = k.e, j.dy = g = k.f, 1 == h && 1 == i && !d && j.bbox ? (j.bbox.x += +e, j.bbox.y += +g) : j.dirtyT = 1;
        }),
        Mb = function(a) {
          var b = a[0];
          switch (b.toLowerCase()) {
            case "t":
              return [b, 0, 0];
            case "m":
              return [b, 1, 0, 0, 1, 0, 0];
            case "r":
              return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
            case "s":
              return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1];
          }
        },
        Nb = r._equaliseTransform = function(a, b) {
          b = G(b).replace(/\.{3}|\u2026/g, a), a = r.parseTransformString(a) || [], b = r.parseTransformString(b) || [];
          for (var c,
              d,
              e,
              f,
              g = M(a.length, b.length),
              h = [],
              i = [],
              j = 0; g > j; j++) {
            if (e = a[j] || Mb(b[j]), f = b[j] || Mb(e), e[0] != f[0] || "r" == e[0].toLowerCase() && (e[2] != f[2] || e[3] != f[3]) || "s" == e[0].toLowerCase() && (e[3] != f[3] || e[4] != f[4]))
              return ;
            for (h[j] = [], i[j] = [], c = 0, d = M(e.length, f.length); d > c; c++)
              c in e && (h[j][c] = e[c]), c in f && (i[j][c] = f[c]);
          }
          return {
            from: h,
            to: i
          };
        };
    r._getContainer = function(a, b, c, d) {
      var e;
      return e = null != d || r.is(a, "object") ? a : y.doc.getElementById(a), null != e ? e.tagName ? null == b ? {
        container: e,
        width: e.style.pixelWidth || e.offsetWidth,
        height: e.style.pixelHeight || e.offsetHeight
      } : {
        container: e,
        width: b,
        height: c
      } : {
        container: 1,
        x: a,
        y: b,
        width: c,
        height: d
      } : void 0;
    }, r.pathToRelative = Bb, r._engine = {}, r.path2curve = Ib, r.matrix = function(a, b, c, d, e, g) {
      return new f(a, b, c, d, e, g);
    }, function(a) {
      function b(a) {
        var b = L.sqrt(c(a));
        a[0] && (a[0] /= b), a[1] && (a[1] /= b);
      }
      function c(a) {
        return a[0] * a[0] + a[1] * a[1];
      }
      a.add = function(a, b, c, d, e, g) {
        var h,
            i,
            j,
            k,
            l = [[], [], []],
            m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
            n = [[a, c, e], [b, d, g], [0, 0, 1]];
        for (a && a instanceof f && (n = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]), h = 0; 3 > h; h++)
          for (i = 0; 3 > i; i++) {
            for (k = 0, j = 0; 3 > j; j++)
              k += m[h][j] * n[j][i];
            l[h][i] = k;
          }
        this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2];
      }, a.invert = function() {
        var a = this,
            b = a.a * a.d - a.b * a.c;
        return new f(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b);
      }, a.clone = function() {
        return new f(this.a, this.b, this.c, this.d, this.e, this.f);
      }, a.translate = function(a, b) {
        this.add(1, 0, 0, 1, a, b);
      }, a.scale = function(a, b, c, d) {
        null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d);
      }, a.rotate = function(a, b, c) {
        a = r.rad(a), b = b || 0, c = c || 0;
        var d = +L.cos(a).toFixed(9),
            e = +L.sin(a).toFixed(9);
        this.add(d, e, -e, d, b, c), this.add(1, 0, 0, 1, -b, -c);
      }, a.x = function(a, b) {
        return a * this.a + b * this.c + this.e;
      }, a.y = function(a, b) {
        return a * this.b + b * this.d + this.f;
      }, a.get = function(a) {
        return +this[G.fromCharCode(97 + a)].toFixed(4);
      }, a.toString = function() {
        return r.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
      }, a.toFilter = function() {
        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
      }, a.offset = function() {
        return [this.e.toFixed(4), this.f.toFixed(4)];
      }, a.split = function() {
        var a = {};
        a.dx = this.e, a.dy = this.f;
        var d = [[this.a, this.c], [this.b, this.d]];
        a.scalex = L.sqrt(c(d[0])), b(d[0]), a.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1], d[1] = [d[1][0] - d[0][0] * a.shear, d[1][1] - d[0][1] * a.shear], a.scaley = L.sqrt(c(d[1])), b(d[1]), a.shear /= a.scaley;
        var e = -d[0][1],
            f = d[1][1];
        return 0 > f ? (a.rotate = r.deg(L.acos(f)), 0 > e && (a.rotate = 360 - a.rotate)) : a.rotate = r.deg(L.asin(e)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a;
      }, a.toTransformString = function(a) {
        var b = a || this[H]();
        return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : E) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : E) + (b.rotate ? "r" + [b.rotate, 0, 0] : E)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
      };
    }(f.prototype);
    var Ob = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    t.safari = "Apple Computer, Inc." == navigator.vendor && (Ob && Ob[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Ob && Ob[1] < 8 ? function() {
      var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
      setTimeout(function() {
        a.remove();
      });
    } : kb;
    for (var Pb = function() {
      this.returnValue = !1;
    },
        Qb = function() {
          return this.originalEvent.preventDefault();
        },
        Rb = function() {
          this.cancelBubble = !0;
        },
        Sb = function() {
          return this.originalEvent.stopPropagation();
        },
        Tb = function() {
          return y.doc.addEventListener ? function(a, b, c, d) {
            var e = D && J[b] ? J[b] : b,
                f = function(e) {
                  var f = y.doc.documentElement.scrollTop || y.doc.body.scrollTop,
                      g = y.doc.documentElement.scrollLeft || y.doc.body.scrollLeft,
                      h = e.clientX + g,
                      i = e.clientY + f;
                  if (D && J[x](b))
                    for (var j = 0,
                        k = e.targetTouches && e.targetTouches.length; k > j; j++)
                      if (e.targetTouches[j].target == a) {
                        var l = e;
                        e = e.targetTouches[j], e.originalEvent = l, e.preventDefault = Qb, e.stopPropagation = Sb;
                        break;
                      }
                  return c.call(d, e, h, i);
                };
            return a.addEventListener(e, f, !1), function() {
              return a.removeEventListener(e, f, !1), !0;
            };
          } : y.doc.attachEvent ? function(a, b, c, d) {
            var e = function(a) {
              a = a || y.win.event;
              var b = y.doc.documentElement.scrollTop || y.doc.body.scrollTop,
                  e = y.doc.documentElement.scrollLeft || y.doc.body.scrollLeft,
                  f = a.clientX + e,
                  g = a.clientY + b;
              return a.preventDefault = a.preventDefault || Pb, a.stopPropagation = a.stopPropagation || Rb, c.call(d, a, f, g);
            };
            a.attachEvent("on" + b, e);
            var f = function() {
              return a.detachEvent("on" + b, e), !0;
            };
            return f;
          } : void 0;
        }(),
        Ub = [],
        Vb = function(a) {
          for (var b,
              c = a.clientX,
              d = a.clientY,
              e = y.doc.documentElement.scrollTop || y.doc.body.scrollTop,
              f = y.doc.documentElement.scrollLeft || y.doc.body.scrollLeft,
              g = Ub.length; g--; ) {
            if (b = Ub[g], D) {
              for (var h,
                  i = a.touches.length; i--; )
                if (h = a.touches[i], h.identifier == b.el._drag.id) {
                  c = h.clientX, d = h.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                  break;
                }
            } else
              a.preventDefault();
            var j,
                k = b.el.node,
                l = k.nextSibling,
                m = k.parentNode,
                n = k.style.display;
            y.win.opera && m.removeChild(k), k.style.display = "none", j = b.el.paper.getElementByPoint(c, d), k.style.display = n, y.win.opera && (l ? m.insertBefore(k, l) : m.appendChild(k)), j && eve("raphael.drag.over." + b.el.id, b.el, j), c += f, d += e, eve("raphael.drag.move." + b.el.id, b.move_scope || b.el, c - b.el._drag.x, d - b.el._drag.y, c, d, a);
          }
        },
        Wb = function(a) {
          r.unmousemove(Vb).unmouseup(Wb);
          for (var b,
              c = Ub.length; c--; )
            b = Ub[c], b.el._drag = {}, eve("raphael.drag.end." + b.el.id, b.end_scope || b.start_scope || b.move_scope || b.el, a);
          Ub = [];
        },
        Xb = r.el = {},
        Yb = I.length; Yb--; )
      (function(a) {
        r[a] = Xb[a] = function(b, c) {
          return r.is(b, "function") && (this.events = this.events || [], this.events.push({
            name: a,
            f: b,
            unbind: Tb(this.shape || this.node || y.doc, a, b, c || this)
          })), this;
        }, r["un" + a] = Xb["un" + a] = function(b) {
          for (var c = this.events || [],
              d = c.length; d--; )
            if (c[d].name == a && c[d].f == b)
              return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
          return this;
        };
      })(I[Yb]);
    Xb.data = function(a, b) {
      var c = ib[this.id] = ib[this.id] || {};
      if (1 == arguments.length) {
        if (r.is(a, "object")) {
          for (var d in a)
            a[x](d) && this.data(d, a[d]);
          return this;
        }
        return eve("raphael.data.get." + this.id, this, c[a], a), c[a];
      }
      return c[a] = b, eve("raphael.data.set." + this.id, this, b, a), this;
    }, Xb.removeData = function(a) {
      return null == a ? ib[this.id] = {} : ib[this.id] && delete ib[this.id][a], this;
    }, Xb.hover = function(a, b, c, d) {
      return this.mouseover(a, c).mouseout(b, d || c);
    }, Xb.unhover = function(a, b) {
      return this.unmouseover(a).unmouseout(b);
    };
    var Zb = [];
    Xb.drag = function(a, b, c, d, e, f) {
      function g(g) {
        (g.originalEvent || g).preventDefault();
        var h = y.doc.documentElement.scrollTop || y.doc.body.scrollTop,
            i = y.doc.documentElement.scrollLeft || y.doc.body.scrollLeft;
        this._drag.x = g.clientX + i, this._drag.y = g.clientY + h, this._drag.id = g.identifier, !Ub.length && r.mousemove(Vb).mouseup(Wb), Ub.push({
          el: this,
          move_scope: d,
          start_scope: e,
          end_scope: f
        }), b && eve.on("raphael.drag.start." + this.id, b), a && eve.on("raphael.drag.move." + this.id, a), c && eve.on("raphael.drag.end." + this.id, c), eve("raphael.drag.start." + this.id, e || d || this, g.clientX + i, g.clientY + h, g);
      }
      return this._drag = {}, Zb.push({
        el: this,
        start: g
      }), this.mousedown(g), this;
    }, Xb.onDragOver = function(a) {
      a ? eve.on("raphael.drag.over." + this.id, a) : eve.unbind("raphael.drag.over." + this.id);
    }, Xb.undrag = function() {
      for (var a = Zb.length; a--; )
        Zb[a].el == this && (this.unmousedown(Zb[a].start), Zb.splice(a, 1), eve.unbind("raphael.drag.*." + this.id));
      !Zb.length && r.unmousemove(Vb).unmouseup(Wb);
    }, t.circle = function(a, b, c) {
      var d = r._engine.circle(this, a || 0, b || 0, c || 0);
      return this.__set__ && this.__set__.push(d), d;
    }, t.rect = function(a, b, c, d, e) {
      var f = r._engine.rect(this, a || 0, b || 0, c || 0, d || 0, e || 0);
      return this.__set__ && this.__set__.push(f), f;
    }, t.ellipse = function(a, b, c, d) {
      var e = r._engine.ellipse(this, a || 0, b || 0, c || 0, d || 0);
      return this.__set__ && this.__set__.push(e), e;
    }, t.path = function(a) {
      a && !r.is(a, S) && !r.is(a[0], T) && (a += E);
      var b = r._engine.path(r.format[B](r, arguments), this);
      return this.__set__ && this.__set__.push(b), b;
    }, t.image = function(a, b, c, d, e) {
      var f = r._engine.image(this, a || "about:blank", b || 0, c || 0, d || 0, e || 0);
      return this.__set__ && this.__set__.push(f), f;
    }, t.text = function(a, b, c) {
      var d = r._engine.text(this, a || 0, b || 0, G(c));
      return this.__set__ && this.__set__.push(d), d;
    }, t.set = function(a) {
      !r.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
      var b = new jc(a);
      return this.__set__ && this.__set__.push(b), b;
    }, t.setStart = function(a) {
      this.__set__ = a || this.set();
    }, t.setFinish = function() {
      var a = this.__set__;
      return delete this.__set__, a;
    }, t.setSize = function(a, b) {
      return r._engine.setSize.call(this, a, b);
    }, t.setViewBox = function(a, b, c, d, e) {
      return r._engine.setViewBox.call(this, a, b, c, d, e);
    }, t.top = t.bottom = null, t.raphael = r;
    var $b = function(a) {
      var b = a.getBoundingClientRect(),
          c = a.ownerDocument,
          d = c.body,
          e = c.documentElement,
          f = e.clientTop || d.clientTop || 0,
          g = e.clientLeft || d.clientLeft || 0,
          h = b.top + (y.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
          i = b.left + (y.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
      return {
        y: h,
        x: i
      };
    };
    t.getElementByPoint = function(a, b) {
      var c = this,
          d = c.canvas,
          e = y.doc.elementFromPoint(a, b);
      if (y.win.opera && "svg" == e.tagName) {
        var f = $b(d),
            g = d.createSVGRect();
        g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
        var h = d.getIntersectionList(g, null);
        h.length && (e = h[h.length - 1]);
      }
      if (!e)
        return null;
      for (; e.parentNode && e != d.parentNode && !e.raphael; )
        e = e.parentNode;
      return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null;
    }, t.getById = function(a) {
      for (var b = this.bottom; b; ) {
        if (b.id == a)
          return b;
        b = b.next;
      }
      return null;
    }, t.forEach = function(a, b) {
      for (var c = this.bottom; c; ) {
        if (a.call(b, c) === !1)
          return this;
        c = c.next;
      }
      return this;
    }, t.getElementsByPoint = function(a, b) {
      var c = this.set();
      return this.forEach(function(d) {
        d.isPointInside(a, b) && c.push(d);
      }), c;
    }, Xb.isPointInside = function(a, b) {
      var c = this.realPath = this.realPath || ob[this.type](this);
      return r.isPointInsidePath(c, a, b);
    }, Xb.getBBox = function(a) {
      if (this.removed)
        return {};
      var b = this._;
      return a ? ((b.dirty || !b.bboxwt) && (this.realPath = ob[this.type](this), b.bboxwt = zb(this.realPath), b.bboxwt.toString = e, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = ob[this.type](this)), b.bbox = zb(pb(this.realPath, this.matrix)), b.bbox.toString = e, b.dirty = b.dirtyT = 0), b.bbox);
    }, Xb.clone = function() {
      if (this.removed)
        return null;
      var a = this.paper[this.type]().attr(this.attr());
      return this.__set__ && this.__set__.push(a), a;
    }, Xb.glow = function(a) {
      if ("text" == this.type)
        return null;
      a = a || {};
      var b = {
        width: (a.width || 10) + (+this.attr("stroke-width") || 1),
        fill: a.fill || !1,
        opacity: a.opacity || .5,
        offsetx: a.offsetx || 0,
        offsety: a.offsety || 0,
        color: a.color || "#000"
      },
          c = b.width / 2,
          d = this.paper,
          e = d.set(),
          f = this.realPath || ob[this.type](this);
      f = this.matrix ? pb(f, this.matrix) : f;
      for (var g = 1; c + 1 > g; g++)
        e.push(d.path(f).attr({
          stroke: b.color,
          fill: b.fill ? b.color : "none",
          "stroke-linejoin": "round",
          "stroke-linecap": "round",
          "stroke-width": +(b.width / c * g).toFixed(3),
          opacity: +(b.opacity / c).toFixed(3)
        }));
      return e.insertBefore(this).translate(b.offsetx, b.offsety);
    };
    var _b = function(a, b, c, d, e, f, g, h, i) {
      return null == i ? k(a, b, c, d, e, f, g, h) : r.findDotsAtSegment(a, b, c, d, e, f, g, h, j(a, b, c, d, e, f, g, h, i));
    },
        ac = function(a, b) {
          return function(c, d, e) {
            c = Ib(c);
            for (var f,
                g,
                h,
                i,
                j,
                k = "",
                l = {},
                m = 0,
                n = 0,
                o = c.length; o > n; n++) {
              if (h = c[n], "M" == h[0])
                f = +h[1], g = +h[2];
              else {
                if (i = _b(f, g, h[1], h[2], h[3], h[4], h[5], h[6]), m + i > d) {
                  if (b && !l.start) {
                    if (j = _b(f, g, h[1], h[2], h[3], h[4], h[5], h[6], d - m), k += ["C" + j.start.x, j.start.y, j.m.x, j.m.y, j.x, j.y], e)
                      return k;
                    l.start = k, k = ["M" + j.x, j.y + "C" + j.n.x, j.n.y, j.end.x, j.end.y, h[5], h[6]].join(), m += i, f = +h[5], g = +h[6];
                    continue;
                  }
                  if (!a && !b)
                    return j = _b(f, g, h[1], h[2], h[3], h[4], h[5], h[6], d - m), {
                      x: j.x,
                      y: j.y,
                      alpha: j.alpha
                    };
                }
                m += i, f = +h[5], g = +h[6];
              }
              k += h.shift() + h;
            }
            return l.end = k, j = a ? m : b ? l : r.findDotsAtSegment(f, g, h[0], h[1], h[2], h[3], h[4], h[5], 1), j.alpha && (j = {
              x: j.x,
              y: j.y,
              alpha: j.alpha
            }), j;
          };
        },
        bc = ac(1),
        cc = ac(),
        dc = ac(0, 1);
    r.getTotalLength = bc, r.getPointAtLength = cc, r.getSubpath = function(a, b, c) {
      if (this.getTotalLength(a) - c < 1e-6)
        return dc(a, b).end;
      var d = dc(a, c, 1);
      return b ? dc(d, b).end : d;
    }, Xb.getTotalLength = function() {
      return "path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : bc(this.attrs.path) : void 0;
    }, Xb.getPointAtLength = function(a) {
      return "path" == this.type ? cc(this.attrs.path, a) : void 0;
    }, Xb.getSubpath = function(a, b) {
      return "path" == this.type ? r.getSubpath(this.attrs.path, a, b) : void 0;
    };
    var ec = r.easing_formulas = {
      linear: function(a) {
        return a;
      },
      "<": function(a) {
        return P(a, 1.7);
      },
      ">": function(a) {
        return P(a, .48);
      },
      "<>": function(a) {
        var b = .48 - a / 1.04,
            c = L.sqrt(.1734 + b * b),
            d = c - b,
            e = P(O(d), 1 / 3) * (0 > d ? -1 : 1),
            f = -c - b,
            g = P(O(f), 1 / 3) * (0 > f ? -1 : 1),
            h = e + g + .5;
        return 3 * (1 - h) * h * h + h * h * h;
      },
      backIn: function(a) {
        var b = 1.70158;
        return a * a * ((b + 1) * a - b);
      },
      backOut: function(a) {
        a -= 1;
        var b = 1.70158;
        return a * a * ((b + 1) * a + b) + 1;
      },
      elastic: function(a) {
        return a == !!a ? a : P(2, -10 * a) * L.sin(2 * (a - .075) * Q / .3) + 1;
      },
      bounce: function(a) {
        var b,
            c = 7.5625,
            d = 2.75;
        return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b;
      }
    };
    ec.easeIn = ec["ease-in"] = ec["<"], ec.easeOut = ec["ease-out"] = ec[">"], ec.easeInOut = ec["ease-in-out"] = ec["<>"], ec["back-in"] = ec.backIn, ec["back-out"] = ec.backOut;
    var fc = [],
        gc = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
          setTimeout(a, 16);
        },
        hc = function() {
          for (var a = +new Date,
              c = 0; c < fc.length; c++) {
            var d = fc[c];
            if (!d.el.removed && !d.paused) {
              var e,
                  f,
                  g = a - d.start,
                  h = d.ms,
                  i = d.easing,
                  j = d.from,
                  k = d.diff,
                  l = d.to,
                  m = (d.t, d.el),
                  n = {},
                  o = {};
              if (d.initstatus ? (g = (d.initstatus * d.anim.top - d.prev) / (d.percent - d.prev) * h, d.status = d.initstatus, delete d.initstatus, d.stop && fc.splice(c--, 1)) : d.status = (d.prev + (d.percent - d.prev) * (g / h)) / d.anim.top, !(0 > g))
                if (h > g) {
                  var p = i(g / h);
                  for (var q in j)
                    if (j[x](q)) {
                      switch (bb[q]) {
                        case R:
                          e = +j[q] + p * h * k[q];
                          break;
                        case "colour":
                          e = "rgb(" + [ic(Y(j[q].r + p * h * k[q].r)), ic(Y(j[q].g + p * h * k[q].g)), ic(Y(j[q].b + p * h * k[q].b))].join(",") + ")";
                          break;
                        case "path":
                          e = [];
                          for (var s = 0,
                              t = j[q].length; t > s; s++) {
                            e[s] = [j[q][s][0]];
                            for (var u = 1,
                                v = j[q][s].length; v > u; u++)
                              e[s][u] = +j[q][s][u] + p * h * k[q][s][u];
                            e[s] = e[s].join(F);
                          }
                          e = e.join(F);
                          break;
                        case "transform":
                          if (k[q].real)
                            for (e = [], s = 0, t = j[q].length; t > s; s++)
                              for (e[s] = [j[q][s][0]], u = 1, v = j[q][s].length; v > u; u++)
                                e[s][u] = j[q][s][u] + p * h * k[q][s][u];
                          else {
                            var w = function(a) {
                              return +j[q][a] + p * h * k[q][a];
                            };
                            e = [["m", w(0), w(1), w(2), w(3), w(4), w(5)]];
                          }
                          break;
                        case "csv":
                          if ("clip-rect" == q)
                            for (e = [], s = 4; s--; )
                              e[s] = +j[q][s] + p * h * k[q][s];
                          break;
                        default:
                          var y = [][C](j[q]);
                          for (e = [], s = m.paper.customAttributes[q].length; s--; )
                            e[s] = +y[s] + p * h * k[q][s];
                      }
                      n[q] = e;
                    }
                  m.attr(n), function(a, b, c) {
                    setTimeout(function() {
                      eve("raphael.anim.frame." + a, b, c);
                    });
                  }(m.id, m, d.anim);
                } else {
                  if (function(a, b, c) {
                    setTimeout(function() {
                      eve("raphael.anim.frame." + b.id, b, c), eve("raphael.anim.finish." + b.id, b, c), r.is(a, "function") && a.call(b);
                    });
                  }(d.callback, m, d.anim), m.attr(l), fc.splice(c--, 1), d.repeat > 1 && !d.next) {
                    for (f in l)
                      l[x](f) && (o[f] = d.totalOrigin[f]);
                    d.el.attr(o), b(d.anim, d.el, d.anim.percents[0], null, d.totalOrigin, d.repeat - 1);
                  }
                  d.next && !d.stop && b(d.anim, d.el, d.next, null, d.totalOrigin, d.repeat);
                }
            }
          }
          r.svg && m && m.paper && m.paper.safari(), fc.length && gc(hc);
        },
        ic = function(a) {
          return a > 255 ? 255 : 0 > a ? 0 : a;
        };
    Xb.animateWith = function(a, d, e, f, g, h) {
      var i = this;
      if (i.removed)
        return h && h.call(i), i;
      var j = e instanceof c ? e : r.animation(e, f, g, h);
      b(j, i, j.percents[0], null, i.attr());
      for (var k = 0,
          l = fc.length; l > k; k++)
        if (fc[k].anim == d && fc[k].el == a) {
          fc[l - 1].start = fc[k].start;
          break;
        }
      return i;
    }, Xb.onAnimation = function(a) {
      return a ? eve.on("raphael.anim.frame." + this.id, a) : eve.unbind("raphael.anim.frame." + this.id), this;
    }, c.prototype.delay = function(a) {
      var b = new c(this.anim, this.ms);
      return b.times = this.times, b.del = +a || 0, b;
    }, c.prototype.repeat = function(a) {
      var b = new c(this.anim, this.ms);
      return b.del = this.del, b.times = L.floor(M(a, 0)) || 1, b;
    }, r.animation = function(a, b, d, e) {
      if (a instanceof c)
        return a;
      (r.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
      var f,
          g,
          h = {};
      for (g in a)
        a[x](g) && Z(g) != g && Z(g) + "%" != g && (f = !0, h[g] = a[g]);
      return f ? (d && (h.easing = d), e && (h.callback = e), new c({100: h}, b)) : new c(a, b);
    }, Xb.animate = function(a, d, e, f) {
      var g = this;
      if (g.removed)
        return f && f.call(g), g;
      var h = a instanceof c ? a : r.animation(a, d, e, f);
      return b(h, g, h.percents[0], null, g.attr()), g;
    }, Xb.setTime = function(a, b) {
      return a && null != b && this.status(a, N(b, a.ms) / a.ms), this;
    }, Xb.status = function(a, c) {
      var d,
          e,
          f = [],
          g = 0;
      if (null != c)
        return b(a, this, -1, N(c, 1)), this;
      for (d = fc.length; d > g; g++)
        if (e = fc[g], e.el.id == this.id && (!a || e.anim == a)) {
          if (a)
            return e.status;
          f.push({
            anim: e.anim,
            status: e.status
          });
        }
      return a ? 0 : f;
    }, Xb.pause = function(a) {
      for (var b = 0; b < fc.length; b++)
        fc[b].el.id == this.id && (!a || fc[b].anim == a) && eve("raphael.anim.pause." + this.id, this, fc[b].anim) !== !1 && (fc[b].paused = !0);
      return this;
    }, Xb.resume = function(a) {
      for (var b = 0; b < fc.length; b++)
        if (fc[b].el.id == this.id && (!a || fc[b].anim == a)) {
          var c = fc[b];
          eve("raphael.anim.resume." + this.id, this, c.anim) !== !1 && (delete c.paused, this.status(c.anim, c.status));
        }
      return this;
    }, Xb.stop = function(a) {
      for (var b = 0; b < fc.length; b++)
        fc[b].el.id == this.id && (!a || fc[b].anim == a) && eve("raphael.anim.stop." + this.id, this, fc[b].anim) !== !1 && fc.splice(b--, 1);
      return this;
    }, eve.on("raphael.remove", a), eve.on("raphael.clear", a), Xb.toString = function() {
      return "Raphaël’s object";
    };
    var jc = function(a) {
      if (this.items = [], this.length = 0, this.type = "set", a)
        for (var b = 0,
            c = a.length; c > b; b++)
          a[b] && (a[b].constructor == Xb.constructor || a[b].constructor == jc) && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++);
    },
        kc = jc.prototype;
    kc.push = function() {
      for (var a,
          b,
          c = 0,
          d = arguments.length; d > c; c++)
        a = arguments[c], a && (a.constructor == Xb.constructor || a.constructor == jc) && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
      return this;
    }, kc.pop = function() {
      return this.length && delete this[this.length--], this.items.pop();
    }, kc.forEach = function(a, b) {
      for (var c = 0,
          d = this.items.length; d > c; c++)
        if (a.call(b, this.items[c], c) === !1)
          return this;
      return this;
    };
    for (var lc in Xb)
      Xb[x](lc) && (kc[lc] = function(a) {
        return function() {
          var b = arguments;
          return this.forEach(function(c) {
            c[a][B](c, b);
          });
        };
      }(lc));
    kc.attr = function(a, b) {
      if (a && r.is(a, T) && r.is(a[0], "object"))
        for (var c = 0,
            d = a.length; d > c; c++)
          this.items[c].attr(a[c]);
      else
        for (var e = 0,
            f = this.items.length; f > e; e++)
          this.items[e].attr(a, b);
      return this;
    }, kc.clear = function() {
      for (; this.length; )
        this.pop();
    }, kc.splice = function(a, b) {
      a = 0 > a ? M(this.length + a, 0) : a, b = M(0, N(this.length - a, b));
      var c,
          d = [],
          e = [],
          f = [];
      for (c = 2; c < arguments.length; c++)
        f.push(arguments[c]);
      for (c = 0; b > c; c++)
        e.push(this[a + c]);
      for (; c < this.length - a; c++)
        d.push(this[a + c]);
      var g = f.length;
      for (c = 0; c < g + d.length; c++)
        this.items[a + c] = this[a + c] = g > c ? f[c] : d[c - g];
      for (c = this.items.length = this.length -= b - g; this[c]; )
        delete this[c++];
      return new jc(e);
    }, kc.exclude = function(a) {
      for (var b = 0,
          c = this.length; c > b; b++)
        if (this[b] == a)
          return this.splice(b, 1), !0;
    }, kc.animate = function(a, b, c, d) {
      (r.is(c, "function") || !c) && (d = c || null);
      var e,
          f,
          g = this.items.length,
          h = g,
          i = this;
      if (!g)
        return this;
      d && (f = function() {
        !--g && d.call(i);
      }), c = r.is(c, S) ? c : f;
      var j = r.animation(a, b, c, f);
      for (e = this.items[--h].animate(j); h--; )
        this.items[h] && !this.items[h].removed && this.items[h].animateWith(e, j, j);
      return this;
    }, kc.insertAfter = function(a) {
      for (var b = this.items.length; b--; )
        this.items[b].insertAfter(a);
      return this;
    }, kc.getBBox = function() {
      for (var a = [],
          b = [],
          c = [],
          d = [],
          e = this.items.length; e--; )
        if (!this.items[e].removed) {
          var f = this.items[e].getBBox();
          a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height);
        }
      return a = N[B](0, a), b = N[B](0, b), c = M[B](0, c), d = M[B](0, d), {
        x: a,
        y: b,
        x2: c,
        y2: d,
        width: c - a,
        height: d - b
      };
    }, kc.clone = function(a) {
      a = new jc;
      for (var b = 0,
          c = this.items.length; c > b; b++)
        a.push(this.items[b].clone());
      return a;
    }, kc.toString = function() {
      return "Raphaël‘s set";
    }, r.registerFont = function(a) {
      if (!a.face)
        return a;
      this.fonts = this.fonts || {};
      var b = {
        w: a.w,
        face: {},
        glyphs: {}
      },
          c = a.face["font-family"];
      for (var d in a.face)
        a.face[x](d) && (b.face[d] = a.face[d]);
      if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
        b.face["units-per-em"] = $(a.face["units-per-em"], 10);
        for (var e in a.glyphs)
          if (a.glyphs[x](e)) {
            var f = a.glyphs[e];
            if (b.glyphs[e] = {
              w: f.w,
              k: {},
              d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                return {
                  l: "L",
                  c: "C",
                  x: "z",
                  t: "m",
                  r: "l",
                  v: "c"
                }[a] || "M";
              }) + "z"
            }, f.k)
              for (var g in f.k)
                f[x](g) && (b.glyphs[e].k[g] = f.k[g]);
          }
      }
      return a;
    }, t.getFont = function(a, b, c, d) {
      if (d = d || "normal", c = c || "normal", b = +b || {
        normal: 400,
        bold: 700,
        lighter: 300,
        bolder: 800
      }[b] || 400, r.fonts) {
        var e = r.fonts[a];
        if (!e) {
          var f = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
          for (var g in r.fonts)
            if (r.fonts[x](g) && f.test(g)) {
              e = r.fonts[g];
              break;
            }
        }
        var h;
        if (e)
          for (var i = 0,
              j = e.length; j > i && (h = e[i], h.face["font-weight"] != b || h.face["font-style"] != c && h.face["font-style"] || h.face["font-stretch"] != d); i++)
            ;
        return h;
      }
    }, t.print = function(a, b, c, d, e, f, g) {
      f = f || "middle", g = M(N(g || 0, 1), -1);
      var h,
          i = G(c)[H](E),
          j = 0,
          k = 0,
          l = E;
      if (r.is(d, c) && (d = this.getFont(d)), d) {
        h = (e || 16) / d.face["units-per-em"];
        for (var m = d.face.bbox[H](u),
            n = +m[0],
            o = m[3] - m[1],
            p = 0,
            q = +m[1] + ("baseline" == f ? o + +d.face.descent : o / 2),
            s = 0,
            t = i.length; t > s; s++) {
          if ("\n" == i[s])
            j = 0, w = 0, k = 0, p += o;
          else {
            var v = k && d.glyphs[i[s - 1]] || {},
                w = d.glyphs[i[s]];
            j += k ? (v.w || d.w) + (v.k && v.k[i[s]] || 0) + d.w * g : 0, k = 1;
          }
          w && w.d && (l += r.transformPath(w.d, ["t", j * h, p * h, "s", h, h, n, q, "t", (a - n) / h, (b - q) / h]));
        }
      }
      return this.path(l).attr({
        fill: "#000",
        stroke: "none"
      });
    }, t.add = function(a) {
      if (r.is(a, "array"))
        for (var b,
            c = this.set(),
            d = 0,
            e = a.length; e > d; d++)
          b = a[d] || {}, v[x](b.type) && c.push(this[b.type]().attr(b));
      return c;
    }, r.format = function(a, b) {
      var c = r.is(b, T) ? [0][C](b) : arguments;
      return a && r.is(a, S) && c.length - 1 && (a = a.replace(w, function(a, b) {
        return null == c[++b] ? E : c[b];
      })), a || E;
    }, r.fullfill = function() {
      var a = /\{([^\}]+)\}/g,
          b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
          c = function(a, c, d) {
            var e = d;
            return c.replace(b, function(a, b, c, d, f) {
              b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()));
            }), e = (null == e || e == d ? a : e) + "";
          };
      return function(b, d) {
        return String(b).replace(a, function(a, b) {
          return c(a, b, d);
        });
      };
    }(), r.ninja = function() {
      return z.was ? y.win.Raphael = z.is : delete Raphael, r;
    }, r.st = kc, function(a, b, c) {
      function d() {
        /in/.test(a.readyState) ? setTimeout(d, 9) : r.eve("raphael.DOMload");
      }
      null == a.readyState && a.addEventListener && (a.addEventListener(b, c = function() {
        a.removeEventListener(b, c, !1), a.readyState = "complete";
      }, !1), a.readyState = "loading"), d();
    }(document, "DOMContentLoaded"), z.was ? y.win.Raphael = r : Raphael = r, eve.on("raphael.DOMload", function() {
      s = !0;
    });
  }(), window.Raphael.svg && function(a) {
    var b = "hasOwnProperty",
        c = String,
        d = parseFloat,
        e = parseInt,
        f = Math,
        g = f.max,
        h = f.abs,
        i = f.pow,
        j = /[, ]+/,
        k = a.eve,
        l = "",
        m = " ",
        n = "http://www.w3.org/1999/xlink",
        o = {
          block: "M5,0 0,2.5 5,5z",
          classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
          diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
          open: "M6,1 1,3.5 6,6",
          oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
        },
        p = {};
    a.toString = function() {
      return "Your browser supports SVG.\nYou are running Raphaël " + this.version;
    };
    var q = function(d, e) {
      if (e) {
        "string" == typeof d && (d = q(d));
        for (var f in e)
          e[b](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), c(e[f])) : d.setAttribute(f, c(e[f])));
      } else
        d = a._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
      return d;
    },
        r = function(b, e) {
          var j = "linear",
              k = b.id + e,
              m = .5,
              n = .5,
              o = b.node,
              p = b.paper,
              r = o.style,
              s = a._g.doc.getElementById(k);
          if (!s) {
            if (e = c(e).replace(a._radial_gradient, function(a, b, c) {
              if (j = "radial", b && c) {
                m = d(b), n = d(c);
                var e = 2 * (n > .5) - 1;
                i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e);
              }
              return l;
            }), e = e.split(/\s*\-\s*/), "linear" == j) {
              var t = e.shift();
              if (t = -d(t), isNaN(t))
                return null;
              var u = [0, 0, f.cos(a.rad(t)), f.sin(a.rad(t))],
                  v = 1 / (g(h(u[2]), h(u[3])) || 1);
              u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0);
            }
            var w = a._parseDots(e);
            if (!w)
              return null;
            if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), b.gradient && k != b.gradient.id && (p.defs.removeChild(b.gradient), delete b.gradient), !b.gradient) {
              s = q(j + "Gradient", {id: k}), b.gradient = s, q(s, "radial" == j ? {
                fx: m,
                fy: n
              } : {
                x1: u[0],
                y1: u[1],
                x2: u[2],
                y2: u[3],
                gradientTransform: b.matrix.invert()
              }), p.defs.appendChild(s);
              for (var x = 0,
                  y = w.length; y > x; x++)
                s.appendChild(q("stop", {
                  offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                  "stop-color": w[x].color || "#fff"
                }));
            }
          }
          return q(o, {
            fill: "url(#" + k + ")",
            opacity: 1,
            "fill-opacity": 1
          }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1;
        },
        s = function(a) {
          var b = a.getBBox(1);
          q(a.pattern, {patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"});
        },
        t = function(d, e, f) {
          if ("path" == d.type) {
            for (var g,
                h,
                i,
                j,
                k,
                m = c(e).toLowerCase().split("-"),
                n = d.paper,
                r = f ? "end" : "start",
                s = d.node,
                t = d.attrs,
                u = t["stroke-width"],
                v = m.length,
                w = "classic",
                x = 3,
                y = 3,
                z = 5; v--; )
              switch (m[v]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  w = m[v];
                  break;
                case "wide":
                  y = 5;
                  break;
                case "narrow":
                  y = 2;
                  break;
                case "long":
                  x = 5;
                  break;
                case "short":
                  x = 2;
              }
            if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {
              fill: "none",
              stroke: t.stroke
            }) : (j = i = x / 2, k = {
              fill: t.stroke,
              stroke: "none"
            }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
              var A = "raphael-marker-" + w,
                  B = "raphael-marker-" + r + w + x + y;
              a._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {
                "stroke-linecap": "round",
                d: o[w],
                id: A
              })), p[A] = 1);
              var C,
                  D = a._g.doc.getElementById(B);
              D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {
                id: B,
                markerHeight: y,
                markerWidth: x,
                orient: "auto",
                refX: j,
                refY: y / 2
              }), C = q(q("use"), {
                "xlink:href": "#" + A,
                transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
              }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
              var E = i * ("diamond" != w && "oval" != w);
              f ? (g = d._.arrows.startdx * u || 0, h = a.getTotalLength(t.path) - E * u) : (g = E * u, h = a.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = Raphael.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e;
            } else
              f ? (g = d._.arrows.startdx * u || 0, h = a.getTotalLength(t.path) - g) : (g = 0, h = a.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {d: Raphael.getSubpath(t.path, g, h)}), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
            for (k in p)
              if (p[b](k) && !p[k]) {
                var F = a._g.doc.getElementById(k);
                F && F.parentNode.removeChild(F);
              }
          }
        },
        u = {
          "": [0],
          none: [0],
          "-": [3, 1],
          ".": [1, 1],
          "-.": [3, 1, 1, 1],
          "-..": [3, 1, 1, 1, 1, 1],
          ". ": [1, 3],
          "- ": [4, 3],
          "--": [8, 3],
          "- .": [4, 3, 1, 3],
          "--.": [8, 3, 1, 3],
          "--..": [8, 3, 1, 3, 1, 3]
        },
        v = function(a, b, d) {
          if (b = u[c(b).toLowerCase()]) {
            for (var e = a.attrs["stroke-width"] || "1",
                f = {
                  round: e,
                  square: e,
                  butt: 0
                }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0,
                g = [],
                h = b.length; h--; )
              g[h] = b[h] * e + (h % 2 ? 1 : -1) * f;
            q(a.node, {"stroke-dasharray": g.join(",")});
          }
        },
        w = function(d, f) {
          var i = d.node,
              k = d.attrs,
              m = i.style.visibility;
          i.style.visibility = "hidden";
          for (var o in f)
            if (f[b](o)) {
              if (!a._availableAttrs[b](o))
                continue;
              var p = f[o];
              switch (k[o] = p, o) {
                case "blur":
                  d.blur(p);
                  break;
                case "href":
                case "title":
                case "target":
                  var u = i.parentNode;
                  if ("a" != u.tagName.toLowerCase()) {
                    var w = q("a");
                    u.insertBefore(w, i), w.appendChild(i), u = w;
                  }
                  "target" == o ? u.setAttributeNS(n, "show", "blank" == p ? "new" : p) : u.setAttributeNS(n, o, p);
                  break;
                case "cursor":
                  i.style.cursor = p;
                  break;
                case "transform":
                  d.transform(p);
                  break;
                case "arrow-start":
                  t(d, p);
                  break;
                case "arrow-end":
                  t(d, p, 1);
                  break;
                case "clip-rect":
                  var x = c(p).split(j);
                  if (4 == x.length) {
                    d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                    var z = q("clipPath"),
                        A = q("rect");
                    z.id = a.createUUID(), q(A, {
                      x: x[0],
                      y: x[1],
                      width: x[2],
                      height: x[3]
                    }), z.appendChild(A), d.paper.defs.appendChild(z), q(i, {"clip-path": "url(#" + z.id + ")"}), d.clip = A;
                  }
                  if (!p) {
                    var B = i.getAttribute("clip-path");
                    if (B) {
                      var C = a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g, l));
                      C && C.parentNode.removeChild(C), q(i, {"clip-path": l}), delete d.clip;
                    }
                  }
                  break;
                case "path":
                  "path" == d.type && (q(i, {d: p ? k.path = a._pathToAbsolute(p) : "M0,0"}), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                  break;
                case "width":
                  if (i.setAttribute(o, p), d._.dirty = 1, !k.fx)
                    break;
                  o = "x", p = k.x;
                case "x":
                  k.fx && (p = -k.x - (k.width || 0));
                case "rx":
                  if ("rx" == o && "rect" == d.type)
                    break;
                case "cx":
                  i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                  break;
                case "height":
                  if (i.setAttribute(o, p), d._.dirty = 1, !k.fy)
                    break;
                  o = "y", p = k.y;
                case "y":
                  k.fy && (p = -k.y - (k.height || 0));
                case "ry":
                  if ("ry" == o && "rect" == d.type)
                    break;
                case "cy":
                  i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                  break;
                case "r":
                  "rect" == d.type ? q(i, {
                    rx: p,
                    ry: p
                  }) : i.setAttribute(o, p), d._.dirty = 1;
                  break;
                case "src":
                  "image" == d.type && i.setAttributeNS(n, "href", p);
                  break;
                case "stroke-width":
                  (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                  break;
                case "stroke-dasharray":
                  v(d, p, f);
                  break;
                case "fill":
                  var D = c(p).match(a._ISURL);
                  if (D) {
                    z = q("pattern");
                    var E = q("image");
                    z.id = a.createUUID(), q(z, {
                      x: 0,
                      y: 0,
                      patternUnits: "userSpaceOnUse",
                      height: 1,
                      width: 1
                    }), q(E, {
                      x: 0,
                      y: 0,
                      "xlink:href": D[1]
                    }), z.appendChild(E), function(b) {
                      a._preload(D[1], function() {
                        var a = this.offsetWidth,
                            c = this.offsetHeight;
                        q(b, {
                          width: a,
                          height: c
                        }), q(E, {
                          width: a,
                          height: c
                        }), d.paper.safari();
                      });
                    }(z), d.paper.defs.appendChild(z), q(i, {fill: "url(#" + z.id + ")"}), d.pattern = z, d.pattern && s(d);
                    break;
                  }
                  var F = a.getRGB(p);
                  if (F.error) {
                    if (("circle" == d.type || "ellipse" == d.type || "r" != c(p).charAt()) && r(d, p)) {
                      if ("opacity" in k || "fill-opacity" in k) {
                        var G = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                        if (G) {
                          var H = G.getElementsByTagName("stop");
                          q(H[H.length - 1], {"stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)});
                        }
                      }
                      k.gradient = p, k.fill = "none";
                      break;
                    }
                  } else
                    delete f.gradient, delete k.gradient, !a.is(k.opacity, "undefined") && a.is(f.opacity, "undefined") && q(i, {opacity: k.opacity}), !a.is(k["fill-opacity"], "undefined") && a.is(f["fill-opacity"], "undefined") && q(i, {"fill-opacity": k["fill-opacity"]});
                  F[b]("opacity") && q(i, {"fill-opacity": F.opacity > 1 ? F.opacity / 100 : F.opacity});
                case "stroke":
                  F = a.getRGB(p), i.setAttribute(o, F.hex), "stroke" == o && F[b]("opacity") && q(i, {"stroke-opacity": F.opacity > 1 ? F.opacity / 100 : F.opacity}), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                  break;
                case "gradient":
                  ("circle" == d.type || "ellipse" == d.type || "r" != c(p).charAt()) && r(d, p);
                  break;
                case "opacity":
                  k.gradient && !k[b]("stroke-opacity") && q(i, {"stroke-opacity": p > 1 ? p / 100 : p});
                case "fill-opacity":
                  if (k.gradient) {
                    G = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), G && (H = G.getElementsByTagName("stop"), q(H[H.length - 1], {"stop-opacity": p}));
                    break;
                  }
                default:
                  "font-size" == o && (p = e(p, 10) + "px");
                  var I = o.replace(/(\-.)/g, function(a) {
                    return a.substring(1).toUpperCase();
                  });
                  i.style[I] = p, d._.dirty = 1, i.setAttribute(o, p);
              }
            }
          y(d, f), i.style.visibility = m;
        },
        x = 1.2,
        y = function(d, f) {
          if ("text" == d.type && (f[b]("text") || f[b]("font") || f[b]("font-size") || f[b]("x") || f[b]("y"))) {
            var g = d.attrs,
                h = d.node,
                i = h.firstChild ? e(a._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
            if (f[b]("text")) {
              for (g.text = f.text; h.firstChild; )
                h.removeChild(h.firstChild);
              for (var j,
                  k = c(f.text).split("\n"),
                  m = [],
                  n = 0,
                  o = k.length; o > n; n++)
                j = q("tspan"), n && q(j, {
                  dy: i * x,
                  x: g.x
                }), j.appendChild(a._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j;
            } else
              for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++)
                n ? q(m[n], {
                  dy: i * x,
                  x: g.x
                }) : q(m[0], {dy: 0});
            q(h, {
              x: g.x,
              y: g.y
            }), d._.dirty = 1;
            var p = d._getBBox(),
                r = g.y - (p.y + p.height / 2);
            r && a.is(r, "finite") && q(m[0], {dy: r});
          }
        },
        z = function(b, c) {
          this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.matrix = a.matrix(), this.realPath = null, this.paper = c, this.attrs = this.attrs || {}, this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
          }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null;
        },
        A = a.el;
    z.prototype = A, A.constructor = z, a._engine.path = function(a, b) {
      var c = q("path");
      b.canvas && b.canvas.appendChild(c);
      var d = new z(c, b);
      return d.type = "path", w(d, {
        fill: "none",
        stroke: "#000",
        path: a
      }), d;
    }, A.rotate = function(a, b, e) {
      if (this.removed)
        return this;
      if (a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e), null == b || null == e) {
        var f = this.getBBox(1);
        b = f.x + f.width / 2, e = f.y + f.height / 2;
      }
      return this.transform(this._.transform.concat([["r", a, b, e]])), this;
    }, A.scale = function(a, b, e, f) {
      if (this.removed)
        return this;
      if (a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == b && (b = a), null == f && (e = f), null == e || null == f)
        var g = this.getBBox(1);
      return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, b, e, f]])), this;
    }, A.translate = function(a, b) {
      return this.removed ? this : (a = c(a).split(j), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this.transform(this._.transform.concat([["t", a, b]])), this);
    }, A.transform = function(c) {
      var d = this._;
      if (null == c)
        return d.transform;
      if (a._extractTransform(this, c), this.clip && q(this.clip, {transform: this.matrix.invert()}), this.pattern && s(this), this.node && q(this.node, {transform: this.matrix}), 1 != d.sx || 1 != d.sy) {
        var e = this.attrs[b]("stroke-width") ? this.attrs["stroke-width"] : 1;
        this.attr({"stroke-width": e});
      }
      return this;
    }, A.hide = function() {
      return !this.removed && this.paper.safari(this.node.style.display = "none"), this;
    }, A.show = function() {
      return !this.removed && this.paper.safari(this.node.style.display = ""), this;
    }, A.remove = function() {
      if (!this.removed && this.node.parentNode) {
        var b = this.paper;
        b.__set__ && b.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && b.defs.removeChild(this.gradient), a._tear(this, b), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
        for (var c in this)
          this[c] = "function" == typeof this[c] ? a._removedFactory(c) : null;
        this.removed = !0;
      }
    }, A._getBBox = function() {
      if ("none" == this.node.style.display) {
        this.show();
        var a = !0;
      }
      var b = {};
      try {
        b = this.node.getBBox();
      } catch (c) {} finally {
        b = b || {};
      }
      return a && this.hide(), b;
    }, A.attr = function(c, d) {
      if (this.removed)
        return this;
      if (null == c) {
        var e = {};
        for (var f in this.attrs)
          this.attrs[b](f) && (e[f] = this.attrs[f]);
        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e;
      }
      if (null == d && a.is(c, "string")) {
        if ("fill" == c && "none" == this.attrs.fill && this.attrs.gradient)
          return this.attrs.gradient;
        if ("transform" == c)
          return this._.transform;
        for (var g = c.split(j),
            h = {},
            i = 0,
            l = g.length; l > i; i++)
          c = g[i], h[c] = c in this.attrs ? this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? this.paper.customAttributes[c].def : a._availableAttrs[c];
        return l - 1 ? h : h[g[0]];
      }
      if (null == d && a.is(c, "array")) {
        for (h = {}, i = 0, l = c.length; l > i; i++)
          h[c[i]] = this.attr(c[i]);
        return h;
      }
      if (null != d) {
        var m = {};
        m[c] = d;
      } else
        null != c && a.is(c, "object") && (m = c);
      for (var n in m)
        k("raphael.attr." + n + "." + this.id, this, m[n]);
      for (n in this.paper.customAttributes)
        if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) {
          var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
          this.attrs[n] = m[n];
          for (var p in o)
            o[b](p) && (m[p] = o[p]);
        }
      return w(this, m), this;
    }, A.toFront = function() {
      if (this.removed)
        return this;
      "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
      var b = this.paper;
      return b.top != this && a._tofront(this, b), this;
    }, A.toBack = function() {
      if (this.removed)
        return this;
      var b = this.node.parentNode;
      return "a" == b.tagName.toLowerCase() ? b.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : b.firstChild != this.node && b.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper), this.paper, this;
    }, A.insertAfter = function(b) {
      if (this.removed)
        return this;
      var c = b.node || b[b.length - 1].node;
      return c.nextSibling ? c.parentNode.insertBefore(this.node, c.nextSibling) : c.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper), this;
    }, A.insertBefore = function(b) {
      if (this.removed)
        return this;
      var c = b.node || b[0].node;
      return c.parentNode.insertBefore(this.node, c), a._insertbefore(this, b, this.paper), this;
    }, A.blur = function(b) {
      var c = this;
      if (0 !== +b) {
        var d = q("filter"),
            e = q("feGaussianBlur");
        c.attrs.blur = b, d.id = a.createUUID(), q(e, {stdDeviation: +b || 1.5}), d.appendChild(e), c.paper.defs.appendChild(d), c._blur = d, q(c.node, {filter: "url(#" + d.id + ")"});
      } else
        c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur), c.node.removeAttribute("filter");
    }, a._engine.circle = function(a, b, c, d) {
      var e = q("circle");
      a.canvas && a.canvas.appendChild(e);
      var f = new z(e, a);
      return f.attrs = {
        cx: b,
        cy: c,
        r: d,
        fill: "none",
        stroke: "#000"
      }, f.type = "circle", q(e, f.attrs), f;
    }, a._engine.rect = function(a, b, c, d, e, f) {
      var g = q("rect");
      a.canvas && a.canvas.appendChild(g);
      var h = new z(g, a);
      return h.attrs = {
        x: b,
        y: c,
        width: d,
        height: e,
        r: f || 0,
        rx: f || 0,
        ry: f || 0,
        fill: "none",
        stroke: "#000"
      }, h.type = "rect", q(g, h.attrs), h;
    }, a._engine.ellipse = function(a, b, c, d, e) {
      var f = q("ellipse");
      a.canvas && a.canvas.appendChild(f);
      var g = new z(f, a);
      return g.attrs = {
        cx: b,
        cy: c,
        rx: d,
        ry: e,
        fill: "none",
        stroke: "#000"
      }, g.type = "ellipse", q(f, g.attrs), g;
    }, a._engine.image = function(a, b, c, d, e, f) {
      var g = q("image");
      q(g, {
        x: c,
        y: d,
        width: e,
        height: f,
        preserveAspectRatio: "none"
      }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
      var h = new z(g, a);
      return h.attrs = {
        x: c,
        y: d,
        width: e,
        height: f,
        src: b
      }, h.type = "image", h;
    }, a._engine.text = function(b, c, d, e) {
      var f = q("text");
      b.canvas && b.canvas.appendChild(f);
      var g = new z(f, b);
      return g.attrs = {
        x: c,
        y: d,
        "text-anchor": "middle",
        text: e,
        font: a._availableAttrs.font,
        stroke: "none",
        fill: "#000"
      }, g.type = "text", w(g, g.attrs), g;
    }, a._engine.setSize = function(a, b) {
      return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
    }, a._engine.create = function() {
      var b = a._getContainer.apply(0, arguments),
          c = b && b.container,
          d = b.x,
          e = b.y,
          f = b.width,
          g = b.height;
      if (!c)
        throw new Error("SVG container not found.");
      var h,
          i = q("svg"),
          j = "overflow:hidden;";
      return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {
        height: g,
        version: 1.1,
        width: f,
        xmlns: "http://www.w3.org/2000/svg"
      }), 1 == c ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", a._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i)), c = new a._Paper, c.width = f, c.height = g, c.canvas = i, c.clear(), c._left = c._top = 0, h && (c.renderfix = function() {}), c.renderfix(), c;
    }, a._engine.setViewBox = function(a, b, c, d, e) {
      k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
      var f,
          h,
          i = g(c / this.width, d / this.height),
          j = this.top,
          l = e ? "meet" : "xMinYMin";
      for (null == a ? (this._vbSize && (i = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = i, f = a + m + b + m + c + m + d), q(this.canvas, {
        viewBox: f,
        preserveAspectRatio: l
      }); i && j; )
        h = "stroke-width" in j.attrs ? j.attrs["stroke-width"] : 1, j.attr({"stroke-width": h}), j._.dirty = 1, j._.dirtyT = 1, j = j.prev;
      return this._viewBox = [a, b, c, d, !!e], this;
    }, a.prototype.renderfix = function() {
      var a,
          b = this.canvas,
          c = b.style;
      try {
        a = b.getScreenCTM() || b.createSVGMatrix();
      } catch (d) {
        a = b.createSVGMatrix();
      }
      var e = -a.e % 1,
          f = -a.f % 1;
      (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px"));
    }, a.prototype.clear = function() {
      a.eve("raphael.clear", this);
      for (var b = this.canvas; b.firstChild; )
        b.removeChild(b.firstChild);
      this.bottom = this.top = null, (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël " + a.version)), b.appendChild(this.desc), b.appendChild(this.defs = q("defs"));
    }, a.prototype.remove = function() {
      k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
      for (var b in this)
        this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
    };
    var B = a.st;
    for (var C in A)
      A[b](C) && !B[b](C) && (B[C] = function(a) {
        return function() {
          var b = arguments;
          return this.forEach(function(c) {
            c[a].apply(c, b);
          });
        };
      }(C));
  }(window.Raphael), window.Raphael.vml && function(a) {
    var b = "hasOwnProperty",
        c = String,
        d = parseFloat,
        e = Math,
        f = e.round,
        g = e.max,
        h = e.min,
        i = e.abs,
        j = "fill",
        k = /[, ]+/,
        l = a.eve,
        m = " progid:DXImageTransform.Microsoft",
        n = " ",
        o = "",
        p = {
          M: "m",
          L: "l",
          C: "c",
          Z: "x",
          m: "t",
          l: "r",
          c: "v",
          z: "x"
        },
        q = /([clmz]),?([^clmz]*)/gi,
        r = / progid:\S+Blur\([^\)]+\)/g,
        s = /-?[^,\s-]+/g,
        t = "position:absolute;left:0;top:0;width:1px;height:1px",
        u = 21600,
        v = {
          path: 1,
          rect: 1,
          image: 1
        },
        w = {
          circle: 1,
          ellipse: 1
        },
        x = function(b) {
          var d = /[ahqstv]/gi,
              e = a._pathToAbsolute;
          if (c(b).match(d) && (e = a._path2curve), d = /[clmz]/g, e == a._pathToAbsolute && !c(b).match(d)) {
            var g = c(b).replace(q, function(a, b, c) {
              var d = [],
                  e = "m" == b.toLowerCase(),
                  g = p[b];
              return c.replace(s, function(a) {
                e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u));
              }), g + d;
            });
            return g;
          }
          var h,
              i,
              j = e(b);
          g = [];
          for (var k = 0,
              l = j.length; l > k; k++) {
            h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x");
            for (var m = 1,
                r = h.length; r > m; m++)
              i += f(h[m] * u) + (m != r - 1 ? "," : o);
            g.push(i);
          }
          return g.join(n);
        },
        y = function(b, c, d) {
          var e = a.matrix();
          return e.rotate(-b, .5, .5), {
            dx: e.x(c, d),
            dy: e.y(c, d)
          };
        },
        z = function(a, b, c, d, e, f) {
          var g = a._,
              h = a.matrix,
              k = g.fillpos,
              l = a.node,
              m = l.style,
              o = 1,
              p = "",
              q = u / b,
              r = u / c;
          if (m.visibility = "hidden", b && c) {
            if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) {
              var s = y(f, d, e);
              d = s.dx, e = s.dy;
            }
            if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
              var t = l.getElementsByTagName(j);
              t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t);
            }
            m.visibility = "visible";
          }
        };
    a.toString = function() {
      return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version;
    };
    var A = function(a, b, d) {
      for (var e = c(b).toLowerCase().split("-"),
          f = d ? "end" : "start",
          g = e.length,
          h = "classic",
          i = "medium",
          j = "medium"; g--; )
        switch (e[g]) {
          case "block":
          case "classic":
          case "oval":
          case "diamond":
          case "open":
          case "none":
            h = e[g];
            break;
          case "wide":
          case "narrow":
            j = e[g];
            break;
          case "long":
          case "short":
            i = e[g];
        }
      var k = a.node.getElementsByTagName("stroke")[0];
      k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j;
    },
        B = function(e, i) {
          e.attrs = e.attrs || {};
          var l = e.node,
              m = e.attrs,
              p = l.style,
              q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
              r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
              s = e;
          for (var t in i)
            i[b](t) && (m[t] = i[t]);
          if (q && (m.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~c(m.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
            var y = +m.cx,
                B = +m.cy,
                D = +m.rx || +m.r || 0,
                E = +m.ry || +m.r || 0;
            l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u));
          }
          if ("clip-rect" in i) {
            var G = c(i["clip-rect"]).split(k);
            if (4 == G.length) {
              G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
              var H = l.clipRect || a._g.doc.createElement("div"),
                  I = H.style;
              I.clip = a.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H);
            }
            i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto");
          }
          if (e.textpath) {
            var J = e.textpath.style;
            i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"]);
          }
          if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
            var K = l.getElementsByTagName(j),
                L = !1;
            if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
              var M = c(i.fill).match(a._ISURL);
              if (M) {
                K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile";
                var N = e.getBBox(1);
                K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], a._preload(M[1], function() {
                  e._.fillsize = [this.offsetWidth, this.offsetHeight];
                });
              } else
                K.color = a.getRGB(i.fill).hex, K.src = o, K.type = "solid", a.getRGB(i.fill).error && (s.type in {
                  circle: 1,
                  ellipse: 1
                } || "r" != c(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1);
            }
            if ("fill-opacity" in i || "opacity" in i) {
              var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+a.getRGB(i.fill).o + 1 || 2) - 1);
              O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none");
            }
            l.appendChild(K);
            var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                Q = !1;
            !P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
            var R = a.getRGB(i.stroke);
            P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1);
            var S = .75 * (d(i["stroke-width"]) || 1);
            if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), i["stroke-dasharray"]) {
              var T = {
                "-": "shortdash",
                ".": "shortdot",
                "-.": "shortdashdot",
                "-..": "shortdashdotdot",
                ". ": "dot",
                "- ": "dash",
                "--": "longdash",
                "- .": "dashdot",
                "--.": "longdashdot",
                "--..": "longdashdotdot"
              };
              P.dashstyle = T[b](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o;
            }
            Q && l.appendChild(P);
          }
          if ("text" == s.type) {
            s.paper.canvas.style.display = o;
            var U = s.paper.span,
                V = 100,
                W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
            p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = c(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var X = U.getBoundingClientRect();
            s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = a.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
            for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"],
                Z = 0,
                $ = Y.length; $ > Z; Z++)
              if (Y[Z] in i) {
                s._.dirty = 1;
                break;
              }
            switch (m["text-anchor"]) {
              case "start":
                s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                break;
              case "end":
                s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                break;
              default:
                s.textpath.style["v-text-align"] = "center", s.bbx = 0;
            }
            s.textpath.style["v-text-kern"] = !0;
          }
        },
        C = function(b, f, g) {
          b.attrs = b.attrs || {};
          var h = (b.attrs, Math.pow),
              i = "linear",
              j = ".5 .5";
          if (b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, function(a, b, c) {
            return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o;
          }), f = f.split(/\s*\-\s*/), "linear" == i) {
            var k = f.shift();
            if (k = -d(k), isNaN(k))
              return null;
          }
          var l = a._parseDots(f);
          if (!l)
            return null;
          if (b = b.shape || b.node, l.length) {
            b.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
            for (var m = [],
                p = 0,
                q = l.length; q > p; p++)
              l[p].offset && m.push(l[p].offset + n + l[p].color);
            g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), b.appendChild(g);
          }
          return 1;
        },
        D = function(b, c) {
          this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = c, this.matrix = a.matrix(), this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
          }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null;
        },
        E = a.el;
    D.prototype = E, E.constructor = D, E.transform = function(b) {
      if (null == b)
        return this._.transform;
      var d,
          e = this.paper._viewBoxShift,
          f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
      e && (d = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || o)), a._extractTransform(this, f + b);
      var g,
          h = this.matrix.clone(),
          i = this.skew,
          j = this.node,
          k = ~c(this.attrs.fill).indexOf("-"),
          l = !c(this.attrs.fill).indexOf("url(");
      if (h.translate(-.5, -.5), l || k || "image" == this.type)
        if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
          j.style.filter = h.toFilter();
          var m = this.getBBox(),
              p = this.getBBox(1),
              q = m.x - p.x,
              r = m.y - p.y;
          j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0);
        } else
          j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
      else
        j.style.filter = o, i.matrix = c(h), i.offset = h.offset();
      return d && (this._.transform = d), this;
    }, E.rotate = function(a, b, e) {
      if (this.removed)
        return this;
      if (null != a) {
        if (a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e), null == b || null == e) {
          var f = this.getBBox(1);
          b = f.x + f.width / 2, e = f.y + f.height / 2;
        }
        return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", a, b, e]])), this;
      }
    }, E.translate = function(a, b) {
      return this.removed ? this : (a = c(a).split(k), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([["t", a, b]])), this);
    }, E.scale = function(a, b, e, f) {
      if (this.removed)
        return this;
      if (a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == b && (b = a), null == f && (e = f), null == e || null == f)
        var g = this.getBBox(1);
      return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, b, e, f]])), this._.dirtyT = 1, this;
    }, E.hide = function() {
      return !this.removed && (this.node.style.display = "none"), this;
    }, E.show = function() {
      return !this.removed && (this.node.style.display = o), this;
    }, E._getBBox = function() {
      return this.removed ? {} : {
        x: this.X + (this.bbx || 0) - this.W / 2,
        y: this.Y - this.H,
        width: this.W,
        height: this.H
      };
    }, E.remove = function() {
      if (!this.removed && this.node.parentNode) {
        this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("raphael.*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
        for (var b in this)
          this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
        this.removed = !0;
      }
    }, E.attr = function(c, d) {
      if (this.removed)
        return this;
      if (null == c) {
        var e = {};
        for (var f in this.attrs)
          this.attrs[b](f) && (e[f] = this.attrs[f]);
        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e;
      }
      if (null == d && a.is(c, "string")) {
        if (c == j && "none" == this.attrs.fill && this.attrs.gradient)
          return this.attrs.gradient;
        for (var g = c.split(k),
            h = {},
            i = 0,
            m = g.length; m > i; i++)
          c = g[i], h[c] = c in this.attrs ? this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? this.paper.customAttributes[c].def : a._availableAttrs[c];
        return m - 1 ? h : h[g[0]];
      }
      if (this.attrs && null == d && a.is(c, "array")) {
        for (h = {}, i = 0, m = c.length; m > i; i++)
          h[c[i]] = this.attr(c[i]);
        return h;
      }
      var n;
      null != d && (n = {}, n[c] = d), null == d && a.is(c, "object") && (n = c);
      for (var o in n)
        l("raphael.attr." + o + "." + this.id, this, n[o]);
      if (n) {
        for (o in this.paper.customAttributes)
          if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) {
            var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
            this.attrs[o] = n[o];
            for (var q in p)
              p[b](q) && (n[q] = p[q]);
          }
        n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n);
      }
      return this;
    }, E.toFront = function() {
      return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper), this;
    }, E.toBack = function() {
      return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper)), this);
    }, E.insertAfter = function(b) {
      return this.removed ? this : (b.constructor == a.st.constructor && (b = b[b.length - 1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper), this);
    }, E.insertBefore = function(b) {
      return this.removed ? this : (b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), a._insertbefore(this, b, this.paper), this);
    }, E.blur = function(b) {
      var c = this.node.runtimeStyle,
          d = c.filter;
      d = d.replace(r, o), 0 !== +b ? (this.attrs.blur = b, c.filter = d + n + m + ".Blur(pixelradius=" + (+b || 1.5) + ")", c.margin = a.format("-{0}px 0 0 -{0}px", f(+b || 1.5))) : (c.filter = d, c.margin = 0, delete this.attrs.blur);
    }, a._engine.path = function(a, b) {
      var c = F("shape");
      c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
      var d = new D(c, b),
          e = {
            fill: "none",
            stroke: "#000"
          };
      a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
      var f = F("skew");
      return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d;
    }, a._engine.rect = function(b, c, d, e, f, g) {
      var h = a._rectPath(c, d, e, f, g),
          i = b.path(h),
          j = i.attrs;
      return i.X = j.x = c, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i;
    }, a._engine.ellipse = function(a, b, c, d, e) {
      var f = a.path();
      return f.attrs, f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
        cx: b,
        cy: c,
        rx: d,
        ry: e
      }), f;
    }, a._engine.circle = function(a, b, c, d) {
      var e = a.path();
      return e.attrs, e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
        cx: b,
        cy: c,
        r: d
      }), e;
    }, a._engine.image = function(b, c, d, e, f, g) {
      var h = a._rectPath(d, e, f, g),
          i = b.path(h).attr({stroke: "none"}),
          k = i.attrs,
          l = i.node,
          m = l.getElementsByTagName(j)[0];
      return k.src = c, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = c, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i;
    }, a._engine.text = function(b, d, e, g) {
      var h = F("shape"),
          i = F("path"),
          j = F("textpath");
      d = d || 0, e = e || 0, g = g || "", i.v = a.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = c(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
      var k = new D(h, b),
          l = {
            fill: "#000",
            stroke: "none",
            font: a._availableAttrs.font,
            text: g
          };
      k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = c(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), b.canvas.appendChild(h);
      var m = F("skew");
      return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k;
    }, a._engine.setSize = function(b, c) {
      var d = this.canvas.style;
      return this.width = b, this.height = c, b == +b && (b += "px"), c == +c && (c += "px"), d.width = b, d.height = c, d.clip = "rect(0 " + b + " " + c + " 0)", this._viewBox && a._engine.setViewBox.apply(this, this._viewBox), this;
    }, a._engine.setViewBox = function(b, c, d, e, f) {
      a.eve("raphael.setViewBox", this, this._viewBox, [b, c, d, e, f]);
      var h,
          i,
          j = this.width,
          k = this.height,
          l = 1 / g(d / j, e / k);
      return f && (h = k / e, i = j / d, j > d * h && (b -= (j - d * h) / 2 / h), k > e * i && (c -= (k - e * i) / 2 / i)), this._viewBox = [b, c, d, e, !!f], this._viewBoxShift = {
        dx: -b,
        dy: -c,
        scale: l
      }, this.forEach(function(a) {
        a.transform("...");
      }), this;
    };
    var F;
    a._engine.initWin = function(a) {
      var b = a.document;
      b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
      try {
        !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
          return b.createElement("<rvml:" + a + ' class="rvml">');
        };
      } catch (c) {
        F = function(a) {
          return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
        };
      }
    }, a._engine.initWin(a._g.win), a._engine.create = function() {
      var b = a._getContainer.apply(0, arguments),
          c = b.container,
          d = b.height,
          e = b.width,
          f = b.x,
          g = b.y;
      if (!c)
        throw new Error("VML container not found.");
      var h = new a._Paper,
          i = h.canvas = a._g.doc.createElement("div"),
          j = i.style;
      return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = a._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == c ? (a._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i), h.renderfix = function() {}, h;
    }, a.prototype.clear = function() {
      a.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = a._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null;
    }, a.prototype.remove = function() {
      a.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
      for (var b in this)
        this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
      return !0;
    };
    var G = a.st;
    for (var H in E)
      E[b](H) && !G[b](H) && (G[H] = function(a) {
        return function() {
          var b = arguments;
          return this.forEach(function(c) {
            c[a].apply(c, b);
          });
        };
      }(H));
  }(window.Raphael), function() {
    var a,
        b,
        c,
        d,
        e = [].slice,
        f = {}.hasOwnProperty,
        g = function(a, b) {
          function c() {
            this.constructor = a;
          }
          for (var d in b)
            f.call(b, d) && (a[d] = b[d]);
          return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a;
        },
        h = function(a, b) {
          return function() {
            return a.apply(b, arguments);
          };
        },
        i = [].indexOf || function(a) {
          for (var b = 0,
              c = this.length; c > b; b++)
            if (b in this && this[b] === a)
              return b;
          return -1;
        };
    b = window.Morris = {}, a = jQuery, b.EventEmitter = function() {
      function a() {}
      return a.prototype.on = function(a, b) {
        return null == this.handlers && (this.handlers = {}), null == this.handlers[a] && (this.handlers[a] = []), this.handlers[a].push(b);
      }, a.prototype.fire = function() {
        var a,
            b,
            c,
            d,
            f,
            g,
            h;
        if (c = arguments[0], a = 2 <= arguments.length ? e.call(arguments, 1) : [], null != this.handlers && null != this.handlers[c]) {
          for (g = this.handlers[c], h = [], d = 0, f = g.length; f > d; d++)
            b = g[d], h.push(b.apply(null, a));
          return h;
        }
      }, a;
    }(), b.commas = function(a) {
      var b,
          c,
          d,
          e;
      return null != a ? (d = 0 > a ? "-" : "", b = Math.abs(a), c = Math.floor(b).toFixed(0), d += c.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), e = b.toString(), e.length > c.length && (d += e.slice(c.length)), d) : "-";
    }, b.pad2 = function(a) {
      return (10 > a ? "0" : "") + a;
    }, b.Grid = function(c) {
      function d(b) {
        if (this.el = "string" == typeof b.element ? a(document.getElementById(b.element)) : a(b.element), null == this.el || 0 === this.el.length)
          throw new Error("Graph container element not found");
        this.options = a.extend({}, this.gridDefaults, this.defaults || {}, b), void 0 !== this.options.data && 0 !== this.options.data.length && ("string" == typeof this.options.units && (this.options.postUnits = b.units), this.r = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.init && this.init(), this.setData(this.options.data));
      }
      return g(d, c), d.prototype.gridDefaults = {
        dateFormat: null,
        gridLineColor: "#aaa",
        gridStrokeWidth: .5,
        gridTextColor: "#888",
        gridTextSize: 12,
        numLines: 5,
        padding: 25,
        parseTime: !0,
        postUnits: "",
        preUnits: "",
        ymax: "auto",
        ymin: "auto 0",
        goals: [],
        goalStrokeWidth: 1,
        goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
        events: [],
        eventStrokeWidth: 1,
        eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"]
      }, d.prototype.setData = function(a, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o;
        return null == c && (c = !0), m = this.cumulative ? 0 : null, n = this.cumulative ? 0 : null, this.options.goals.length > 0 && (h = Math.min.apply(null, this.options.goals), g = Math.max.apply(null, this.options.goals), n = null != n ? Math.min(n, h) : h, m = null != m ? Math.max(m, g) : g), this.data = function() {
          var c,
              d,
              g;
          for (g = [], f = c = 0, d = a.length; d > c; f = ++c)
            j = a[f], i = {}, i.label = j[this.options.xkey], this.options.parseTime ? (i.x = b.parseDate(i.label), this.options.dateFormat ? i.label = this.options.dateFormat(i.x) : "number" == typeof i.label && (i.label = new Date(i.label).toString())) : i.x = f, k = 0, i.y = function() {
              var a,
                  b,
                  c,
                  d;
              for (c = this.options.ykeys, d = [], e = a = 0, b = c.length; b > a; e = ++a)
                l = c[e], o = j[l], "string" == typeof o && (o = parseFloat(o)), null != o && "number" != typeof o && (o = null), null != o && (this.cumulative ? k += o : null != m ? (m = Math.max(o, m), n = Math.min(o, n)) : m = n = o), this.cumulative && null != k && (m = Math.max(k, m), n = Math.min(k, n)), d.push(o);
              return d;
            }.call(this), g.push(i);
          return g;
        }.call(this), this.options.parseTime && (this.data = this.data.sort(function(a, b) {
          return (a.x > b.x) - (b.x > a.x);
        })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.parseTime && this.options.events.length > 0 && (this.events = function() {
          var a,
              c,
              e,
              f;
          for (e = this.options.events, f = [], a = 0, c = e.length; c > a; a++)
            d = e[a], f.push(b.parseDate(d));
          return f;
        }.call(this), this.xmax = Math.max(this.xmax, Math.max.apply(null, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(null, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), "string" == typeof this.options.ymax ? "auto" === this.options.ymax.slice(0, 4) ? this.options.ymax.length > 5 ? (this.ymax = parseInt(this.options.ymax.slice(5), 10), null != m && (this.ymax = Math.max(m, this.ymax))) : this.ymax = null != m ? m : 0 : this.ymax = parseInt(this.options.ymax, 10) : this.ymax = this.options.ymax, "string" == typeof this.options.ymin ? "auto" === this.options.ymin.slice(0, 4) ? this.options.ymin.length > 5 ? (this.ymin = parseInt(this.options.ymin.slice(5), 10), null != n && (this.ymin = Math.min(n, this.ymin))) : this.ymin = null !== n ? n : 0 : this.ymin = parseInt(this.options.ymin, 10) : this.ymin = this.options.ymin, this.ymin === this.ymax && (n && (this.ymin -= 1), this.ymax += 1), this.yInterval = (this.ymax - this.ymin) / (this.options.numLines - 1), this.precision = this.yInterval > 0 && this.yInterval < 1 ? -Math.floor(Math.log(this.yInterval) / Math.log(10)) : 0, this.dirty = !0, c ? this.redraw() : void 0;
      }, d.prototype._calc = function() {
        var a,
            b,
            c;
        return c = this.el.width(), a = this.el.height(), (this.elementWidth !== c || this.elementHeight !== a || this.dirty) && (this.elementWidth = c, this.elementHeight = a, this.dirty = !1, b = Math.max(this.measureText(this.yAxisFormat(this.ymin), this.options.gridTextSize).width, this.measureText(this.yAxisFormat(this.ymax), this.options.gridTextSize).width), this.left = b + this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding - 1.5 * this.options.gridTextSize, this.width = this.right - this.left, this.height = this.bottom - this.top, this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0;
      }, d.prototype.transY = function(a) {
        return this.bottom - (a - this.ymin) * this.dy;
      }, d.prototype.transX = function(a) {
        return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (a - this.xmin) * this.dx;
      }, d.prototype.redraw = function() {
        return this.r.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0;
      }, d.prototype.drawGoals = function() {
        var a,
            b,
            c,
            d,
            e,
            f;
        for (e = this.options.goals, f = [], b = c = 0, d = e.length; d > c; b = ++c)
          a = e[b], f.push(this.r.path("M" + this.left + "," + this.transY(a) + "H" + (this.left + this.width)).attr("stroke", this.options.goalLineColors[b % this.options.goalLineColors.length]).attr("stroke-width", this.options.goalStrokeWidth));
        return f;
      }, d.prototype.drawEvents = function() {
        var a,
            b,
            c,
            d,
            e,
            f;
        for (e = this.events, f = [], b = c = 0, d = e.length; d > c; b = ++c)
          a = e[b], f.push(this.r.path("M" + this.transX(a) + "," + this.bottom + "V" + this.top).attr("stroke", this.options.eventLineColors[b % this.options.eventLineColors.length]).attr("stroke-width", this.options.eventStrokeWidth));
        return f;
      }, d.prototype.drawGrid = function() {
        var a,
            b,
            c,
            d,
            e,
            f,
            g,
            h;
        for (a = this.ymin, b = this.ymax, h = [], c = f = a, g = this.yInterval; b >= a ? b >= f : f >= b; c = f += g)
          d = parseFloat(c.toFixed(this.precision)), e = this.transY(d), this.r.text(this.left - this.options.padding / 2, e, this.yAxisFormat(d)).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor).attr("text-anchor", "end"), h.push(this.r.path("M" + this.left + "," + e + "H" + (this.left + this.width)).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth));
        return h;
      }, d.prototype.measureText = function(a, b) {
        var c,
            d;
        return null == b && (b = 12), d = this.r.text(100, 100, a).attr("font-size", b), c = d.getBBox(), d.remove(), c;
      }, d.prototype.yAxisFormat = function(a) {
        return this.yLabelFormat(a);
      }, d.prototype.yLabelFormat = function(a) {
        return "" + this.options.preUnits + b.commas(a) + this.options.postUnits;
      }, d;
    }(b.EventEmitter), b.parseDate = function(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l;
      return "number" == typeof a ? a : (c = a.match(/^(\d+) Q(\d)$/), e = a.match(/^(\d+)-(\d+)$/), f = a.match(/^(\d+)-(\d+)-(\d+)$/), h = a.match(/^(\d+) W(\d+)$/), i = a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), j = a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), c ? new Date(parseInt(c[1], 10), 3 * parseInt(c[2], 10) - 1, 1).getTime() : e ? new Date(parseInt(e[1], 10), parseInt(e[2], 10) - 1, 1).getTime() : f ? new Date(parseInt(f[1], 10), parseInt(f[2], 10) - 1, parseInt(f[3], 10)).getTime() : h ? (k = new Date(parseInt(h[1], 10), 0, 1), 4 !== k.getDay() && k.setMonth(0, 1 + (4 - k.getDay() + 7) % 7), k.getTime() + 6048e5 * parseInt(h[2], 10)) : i ? i[6] ? (g = 0, "Z" !== i[6] && (g = 60 * parseInt(i[8], 10) + parseInt(i[9], 10), "+" === i[7] && (g = 0 - g)), Date.UTC(parseInt(i[1], 10), parseInt(i[2], 10) - 1, parseInt(i[3], 10), parseInt(i[4], 10), parseInt(i[5], 10) + g)) : new Date(parseInt(i[1], 10), parseInt(i[2], 10) - 1, parseInt(i[3], 10), parseInt(i[4], 10), parseInt(i[5], 10)).getTime() : j ? (l = parseFloat(j[6]), b = Math.floor(l), d = Math.round(1e3 * (l - b)), j[8] ? (g = 0, "Z" !== j[8] && (g = 60 * parseInt(j[10], 10) + parseInt(j[11], 10), "+" === j[9] && (g = 0 - g)), Date.UTC(parseInt(j[1], 10), parseInt(j[2], 10) - 1, parseInt(j[3], 10), parseInt(j[4], 10), parseInt(j[5], 10) + g, b, d)) : new Date(parseInt(j[1], 10), parseInt(j[2], 10) - 1, parseInt(j[3], 10), parseInt(j[4], 10), parseInt(j[5], 10), b, d).getTime()) : new Date(parseInt(a, 10), 0, 1).getTime());
    }, b.Line = function(a) {
      function c(a) {
        return this.updateHilight = h(this.updateHilight, this), this.hilight = h(this.hilight, this), this.updateHover = h(this.updateHover, this), this instanceof b.Line ? (c.__super__.constructor.call(this, a), void 0) : new b.Line(a);
      }
      return g(c, a), c.prototype.init = function() {
        var a,
            b = this;
        return this.pointGrow = Raphael.animation({r: this.options.pointSize + 3}, 25, "linear"), this.pointShrink = Raphael.animation({r: this.options.pointSize}, 25, "linear"), this.prevHilight = null, this.el.mousemove(function(a) {
          return b.updateHilight(a.pageX);
        }), this.options.hideHover && this.el.mouseout(function() {
          return b.hilight(null);
        }), a = function(a) {
          var c;
          return c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], b.updateHilight(c.pageX), c;
        }, this.el.bind("touchstart", a), this.el.bind("touchmove", a), this.el.bind("touchend", a), this.el.bind("click", function() {
          return null !== b.prevHilight ? b.fire("click", b.prevHilight, b.data[b.prevHilight]) : void 0;
        });
      }, c.prototype.defaults = {
        lineWidth: 3,
        pointSize: 4,
        lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
        pointWidths: [1],
        pointStrokeColors: ["#ffffff"],
        pointFillColors: [],
        hoverPaddingX: 10,
        hoverPaddingY: 5,
        hoverMargin: 10,
        hoverFillColor: "#fff",
        hoverBorderColor: "#ccc",
        hoverBorderWidth: 2,
        hoverOpacity: .95,
        hoverLabelColor: "#444",
        hoverFontSize: 12,
        smooth: !0,
        hideHover: !1,
        xLabels: "auto",
        xLabelFormat: null,
        continuousLine: !0
      }, c.prototype.calc = function() {
        return this.calcPoints(), this.generatePaths(), this.calcHoverMargins();
      }, c.prototype.calcPoints = function() {
        var a,
            b,
            c,
            d,
            e,
            f;
        for (e = this.data, f = [], c = 0, d = e.length; d > c; c++)
          a = e[c], a._x = this.transX(a.x), f.push(a._y = function() {
            var c,
                d,
                e,
                f;
            for (e = a.y, f = [], c = 0, d = e.length; d > c; c++)
              b = e[c], null != b ? f.push(this.transY(b)) : f.push(b);
            return f;
          }.call(this));
        return f;
      }, c.prototype.calcHoverMargins = function() {
        var a,
            b;
        return this.hoverMargins = function() {
          var c,
              d,
              e,
              f;
          for (e = this.data.slice(1), f = [], a = c = 0, d = e.length; d > c; a = ++c)
            b = e[a], f.push((b._x + this.data[a]._x) / 2);
          return f;
        }.call(this);
      }, c.prototype.generatePaths = function() {
        var a,
            c,
            d,
            e,
            f;
        return this.paths = function() {
          var g,
              h,
              j,
              k;
          for (k = [], d = g = 0, h = this.options.ykeys.length; h >= 0 ? h > g : g > h; d = h >= 0 ? ++g : --g)
            f = this.options.smooth === !0 || (j = this.options.ykeys[d], i.call(this.options.smooth, j) >= 0), c = function() {
              var a,
                  b,
                  c,
                  f;
              for (c = this.data, f = [], a = 0, b = c.length; b > a; a++)
                e = c[a], void 0 !== e._y[d] && f.push({
                  x: e._x,
                  y: e._y[d]
                });
              return f;
            }.call(this), this.options.continuousLine && (c = function() {
              var b,
                  d,
                  e;
              for (e = [], b = 0, d = c.length; d > b; b++)
                a = c[b], null !== a.y && e.push(a);
              return e;
            }()), c.length > 1 ? k.push(b.Line.createPath(c, f, this.bottom)) : k.push(null);
          return k;
        }.call(this);
      }, c.prototype.draw = function() {
        return this.drawXAxis(), this.drawSeries(), this.drawHover(), this.hilight(this.options.hideHover ? null : this.data.length - 1);
      }, c.prototype.drawXAxis = function() {
        var a,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = this;
        for (h = this.bottom + 1.25 * this.options.gridTextSize, g = 50, e = null, a = function(a, b) {
          var c,
              d;
          return c = l.r.text(l.transX(b), h, a).attr("font-size", l.options.gridTextSize).attr("fill", l.options.gridTextColor), d = c.getBBox(), (null == e || e >= d.x + d.width) && d.x >= 0 && d.x + d.width < l.el.width() ? e = d.x - g : c.remove();
        }, d = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [[this.data[0].label, this.data[0].x]] : b.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
          var a,
              b,
              c,
              d;
          for (c = this.data, d = [], a = 0, b = c.length; b > a; a++)
            f = c[a], d.push([f.label, f.x]);
          return d;
        }.call(this), d.reverse(), k = [], i = 0, j = d.length; j > i; i++)
          c = d[i], k.push(a(c[0], c[1]));
        return k;
      }, c.prototype.drawSeries = function() {
        var a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i;
        for (b = e = g = this.options.ykeys.length - 1; 0 >= g ? 0 >= e : e >= 0; b = 0 >= g ? ++e : --e)
          c = this.paths[b], null !== c && this.r.path(c).attr("stroke", this.colorForSeries(b)).attr("stroke-width", this.options.lineWidth);
        for (this.seriesPoints = function() {
          var a,
              c,
              d;
          for (d = [], b = a = 0, c = this.options.ykeys.length; c >= 0 ? c > a : a > c; b = c >= 0 ? ++a : --a)
            d.push([]);
          return d;
        }.call(this), i = [], b = f = h = this.options.ykeys.length - 1; 0 >= h ? 0 >= f : f >= 0; b = 0 >= h ? ++f : --f)
          i.push(function() {
            var c,
                e,
                f,
                g;
            for (f = this.data, g = [], c = 0, e = f.length; e > c; c++)
              d = f[c], a = null != d._y[b] ? this.r.circle(d._x, d._y[b], this.options.pointSize).attr("fill", this.pointFillColorForSeries(b) || this.colorForSeries(b)).attr("stroke-width", this.strokeWidthForSeries(b)).attr("stroke", this.strokeForSeries(b)) : null, g.push(this.seriesPoints[b].push(a));
            return g;
          }.call(this));
        return i;
      }, c.createPath = function(a, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r;
        for (k = "", c && (g = b.Line.gradients(a)), l = {y: null}, h = q = 0, r = a.length; r > q; h = ++q)
          e = a[h], null != e.y && (null != l.y ? c ? (f = g[h], j = g[h - 1], i = (e.x - l.x) / 4, m = l.x + i, o = Math.min(d, l.y + i * j), n = e.x - i, p = Math.min(d, e.y - i * f), k += "C" + m + "," + o + "," + n + "," + p + "," + e.x + "," + e.y) : k += "L" + e.x + "," + e.y : c && null == g[h] || (k += "M" + e.x + "," + e.y)), l = e;
        return k;
      }, c.gradients = function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i;
        for (c = function(a, b) {
          return (a.y - b.y) / (a.x - b.x);
        }, i = [], d = g = 0, h = a.length; h > g; d = ++g)
          b = a[d], null != b.y ? (e = a[d + 1] || {y: null}, f = a[d - 1] || {y: null}, null != f.y && null != e.y ? i.push(c(f, e)) : null != f.y ? i.push(c(f, b)) : null != e.y ? i.push(c(b, e)) : i.push(null)) : i.push(null);
        return i;
      }, c.prototype.drawHover = function() {
        var a,
            b,
            c,
            d,
            e,
            f;
        for (this.hoverHeight = 1.5 * this.options.hoverFontSize * (this.options.ykeys.length + 1), this.hover = this.r.rect(-10, -this.hoverHeight / 2 - this.options.hoverPaddingY, 20, this.hoverHeight + 2 * this.options.hoverPaddingY, 10).attr("fill", this.options.hoverFillColor).attr("stroke", this.options.hoverBorderColor).attr("stroke-width", this.options.hoverBorderWidth).attr("opacity", this.options.hoverOpacity), this.xLabel = this.r.text(0, .75 * this.options.hoverFontSize - this.hoverHeight / 2, "").attr("fill", this.options.hoverLabelColor).attr("font-weight", "bold").attr("font-size", this.options.hoverFontSize), this.hoverSet = this.r.set(), this.hoverSet.push(this.hover), this.hoverSet.push(this.xLabel), this.yLabels = [], f = [], a = d = 0, e = this.options.ykeys.length; e >= 0 ? e > d : d > e; a = e >= 0 ? ++d : --d)
          b = this.cumulative ? this.options.ykeys.length - a - 1 : a, c = this.r.text(0, 1.5 * this.options.hoverFontSize * (b + 1.5) - this.hoverHeight / 2, "").attr("fill", this.colorForSeries(a)).attr("font-size", this.options.hoverFontSize), this.yLabels.push(c), f.push(this.hoverSet.push(c));
        return f;
      }, c.prototype.updateHover = function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k;
        for (this.hoverSet.show(), e = this.data[a], this.xLabel.attr("text", e.label), k = e.y, b = i = 0, j = k.length; j > i; b = ++i)
          g = k[b], this.yLabels[b].attr("text", "" + this.options.labels[b] + ": " + this.yLabelFormat(g));
        return d = Math.max.apply(null, function() {
          var a,
              b,
              d,
              e;
          for (d = this.yLabels, e = [], a = 0, b = d.length; b > a; a++)
            c = d[a], e.push(c.getBBox().width);
          return e;
        }.call(this)), d = Math.max(d, this.xLabel.getBBox().width), this.hover.attr("width", d + 2 * this.options.hoverPaddingX), this.hover.attr("x", -this.options.hoverPaddingX - d / 2), h = Math.min.apply(null, function() {
          var a,
              b,
              c,
              d;
          for (c = e._y, d = [], a = 0, b = c.length; b > a; a++)
            g = c[a], null != g && d.push(g);
          return d;
        }().concat(this.bottom)), h = h > this.hoverHeight + 2 * this.options.hoverPaddingY + this.options.hoverMargin + this.top ? h - this.hoverHeight / 2 - this.options.hoverPaddingY - this.options.hoverMargin : h + this.hoverHeight / 2 + this.options.hoverPaddingY + this.options.hoverMargin, h = Math.max(this.top + this.hoverHeight / 2 + this.options.hoverPaddingY, h), h = Math.min(this.bottom - this.hoverHeight / 2 - this.options.hoverPaddingY, h), f = Math.min(this.right - d / 2 - this.options.hoverPaddingX, this.data[a]._x), f = Math.max(this.left + d / 2 + this.options.hoverPaddingX, f), this.hoverSet.attr("transform", "t" + f + "," + h);
      }, c.prototype.hideHover = function() {
        return this.hoverSet.hide();
      }, c.prototype.hilight = function(a) {
        var b,
            c,
            d,
            e,
            f;
        if (null !== this.prevHilight && this.prevHilight !== a)
          for (b = c = 0, e = this.seriesPoints.length - 1; e >= 0 ? e >= c : c >= e; b = e >= 0 ? ++c : --c)
            this.seriesPoints[b][this.prevHilight] && this.seriesPoints[b][this.prevHilight].animate(this.pointShrink);
        if (null !== a && this.prevHilight !== a) {
          for (b = d = 0, f = this.seriesPoints.length - 1; f >= 0 ? f >= d : d >= f; b = f >= 0 ? ++d : --d)
            this.seriesPoints[b][a] && this.seriesPoints[b][a].animate(this.pointGrow);
          this.updateHover(a);
        }
        return this.prevHilight = a, null == a ? this.hideHover() : void 0;
      }, c.prototype.updateHilight = function(a) {
        var b,
            c,
            d;
        for (a -= this.el.offset().left, b = c = 0, d = this.hoverMargins.length; (d >= 0 ? d > c : c > d) && !(this.hoverMargins[b] > a); b = d >= 0 ? ++c : --c)
          ;
        return this.hilight(b);
      }, c.prototype.colorForSeries = function(a) {
        return this.options.lineColors[a % this.options.lineColors.length];
      }, c.prototype.strokeWidthForSeries = function(a) {
        return this.options.pointWidths[a % this.options.pointWidths.length];
      }, c.prototype.strokeForSeries = function(a) {
        return this.options.pointStrokeColors[a % this.options.pointStrokeColors.length];
      }, c.prototype.pointFillColorForSeries = function(a) {
        return this.options.pointFillColors[a % this.options.pointFillColors.length];
      }, c;
    }(b.Grid), b.labelSeries = function(c, d, e, f, g) {
      var h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r;
      if (j = 200 * (d - c) / e, i = new Date(c), n = b.LABEL_SPECS[f], void 0 === n)
        for (r = b.AUTO_LABEL_ORDER, p = 0, q = r.length; q > p; p++)
          if (k = r[p], m = b.LABEL_SPECS[k], j >= m.span) {
            n = m;
            break;
          }
      for (void 0 === n && (n = b.LABEL_SPECS.second), g && (n = a.extend({}, n, {fmt: g})), h = n.start(i), l = []; (o = h.getTime()) <= d; )
        o >= c && l.push([n.fmt(h), o]), n.incr(h);
      return l;
    }, c = function(a) {
      return {
        span: 1e3 * 60 * a,
        start: function(a) {
          return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours());
        },
        fmt: function(a) {
          return "" + b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes());
        },
        incr: function(b) {
          return b.setMinutes(b.getMinutes() + a);
        }
      };
    }, d = function(a) {
      return {
        span: 1e3 * a,
        start: function(a) {
          return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes());
        },
        fmt: function(a) {
          return "" + b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes()) + ":" + b.pad2(a.getSeconds());
        },
        incr: function(b) {
          return b.setSeconds(b.getSeconds() + a);
        }
      };
    }, b.LABEL_SPECS = {
      decade: {
        span: 1728e8,
        start: function(a) {
          return new Date(a.getFullYear() - a.getFullYear() % 10, 0, 1);
        },
        fmt: function(a) {
          return "" + a.getFullYear();
        },
        incr: function(a) {
          return a.setFullYear(a.getFullYear() + 10);
        }
      },
      year: {
        span: 1728e7,
        start: function(a) {
          return new Date(a.getFullYear(), 0, 1);
        },
        fmt: function(a) {
          return "" + a.getFullYear();
        },
        incr: function(a) {
          return a.setFullYear(a.getFullYear() + 1);
        }
      },
      month: {
        span: 24192e5,
        start: function(a) {
          return new Date(a.getFullYear(), a.getMonth(), 1);
        },
        fmt: function(a) {
          return "" + a.getFullYear() + "-" + b.pad2(a.getMonth() + 1);
        },
        incr: function(a) {
          return a.setMonth(a.getMonth() + 1);
        }
      },
      day: {
        span: 864e5,
        start: function(a) {
          return new Date(a.getFullYear(), a.getMonth(), a.getDate());
        },
        fmt: function(a) {
          return "" + a.getFullYear() + "-" + b.pad2(a.getMonth() + 1) + "-" + b.pad2(a.getDate());
        },
        incr: function(a) {
          return a.setDate(a.getDate() + 1);
        }
      },
      hour: c(60),
      "30min": c(30),
      "15min": c(15),
      "10min": c(10),
      "5min": c(5),
      minute: c(1),
      "30sec": d(30),
      "15sec": d(15),
      "10sec": d(10),
      "5sec": d(5),
      second: d(1)
    }, b.AUTO_LABEL_ORDER = ["decade", "year", "month", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], b.Area = function(a) {
      function c(a) {
        return this instanceof b.Area ? (this.cumulative = !0, c.__super__.constructor.call(this, a), void 0) : new b.Area(a);
      }
      return g(c, a), c.prototype.calcPoints = function() {
        var a,
            b,
            c,
            d,
            e,
            f,
            g;
        for (f = this.data, g = [], d = 0, e = f.length; e > d; d++)
          a = f[d], a._x = this.transX(a.x), b = 0, g.push(a._y = function() {
            var d,
                e,
                f,
                g;
            for (f = a.y, g = [], d = 0, e = f.length; e > d; d++)
              c = f[d], b += c || 0, g.push(this.transY(b));
            return g;
          }.call(this));
        return g;
      }, c.prototype.drawSeries = function() {
        var a,
            b,
            d,
            e;
        for (a = d = e = this.options.ykeys.length - 1; 0 >= e ? 0 >= d : d >= 0; a = 0 >= e ? ++d : --d)
          b = this.paths[a], null !== b && (b += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.r.path(b).attr("fill", this.fillForSeries(a)).attr("stroke-width", 0));
        return c.__super__.drawSeries.call(this);
      }, c.prototype.fillForSeries = function(a) {
        var b;
        return b = Raphael.rgb2hsl(this.colorForSeries(a)), Raphael.hsl(b.h, Math.min(255, .75 * b.s), Math.min(255, 1.25 * b.l));
      }, c;
    }(b.Line), b.Bar = function(c) {
      function d(c) {
        return this.updateHilight = h(this.updateHilight, this), this.hilight = h(this.hilight, this), this.updateHover = h(this.updateHover, this), this instanceof b.Bar ? (d.__super__.constructor.call(this, a.extend({}, c, {parseTime: !1})), void 0) : new b.Bar(c);
      }
      return g(d, c), d.prototype.init = function() {
        var a,
            b = this;
        return this.cumulative = this.options.stacked, this.prevHilight = null, this.el.mousemove(function(a) {
          return b.updateHilight(a.pageX);
        }), this.options.hideHover && this.el.mouseout(function() {
          return b.hilight(null);
        }), a = function(a) {
          var c;
          return c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], b.updateHilight(c.pageX), c;
        }, this.el.bind("touchstart", a), this.el.bind("touchmove", a), this.el.bind("touchend", a), this.el.bind("click", function() {
          return null !== b.prevHilight ? b.fire("click", b.prevHilight, b.data[b.prevHilight]) : void 0;
        });
      }, d.prototype.defaults = {
        barSizeRatio: .75,
        barGap: 3,
        barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
        hoverPaddingX: 10,
        hoverPaddingY: 5,
        hoverMargin: 10,
        hoverFillColor: "#fff",
        hoverBorderColor: "#ccc",
        hoverBorderWidth: 2,
        hoverOpacity: .95,
        hoverLabelColor: "#444",
        hoverFontSize: 12,
        hideHover: !1
      }, d.prototype.calc = function() {
        return this.calcBars(), this.calcHoverMargins();
      }, d.prototype.calcBars = function() {
        var a,
            b,
            c,
            d,
            e,
            f,
            g;
        for (f = this.data, g = [], a = d = 0, e = f.length; e > d; a = ++d)
          b = f[a], b._x = this.left + this.width * (a + .5) / this.data.length, g.push(b._y = function() {
            var a,
                d,
                e,
                f;
            for (e = b.y, f = [], a = 0, d = e.length; d > a; a++)
              c = e[a], null != c ? f.push(this.transY(c)) : f.push(null);
            return f;
          }.call(this));
        return g;
      }, d.prototype.calcHoverMargins = function() {
        var a;
        return this.hoverMargins = function() {
          var b,
              c,
              d;
          for (d = [], a = b = 1, c = this.data.length; c >= 1 ? c > b : b > c; a = c >= 1 ? ++b : --b)
            d.push(this.left + a * this.width / this.data.length);
          return d;
        }.call(this);
      }, d.prototype.draw = function() {
        return this.drawXAxis(), this.drawSeries(), this.drawHover(), this.hilight(this.options.hideHover ? null : this.data.length - 1);
      }, d.prototype.drawXAxis = function() {
        var a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j;
        for (g = this.bottom + 1.25 * this.options.gridTextSize, f = 50, d = null, j = [], a = h = 0, i = this.data.length; i >= 0 ? i > h : h > i; a = i >= 0 ? ++h : --h)
          e = this.data[this.data.length - 1 - a], b = this.r.text(e._x, g, e.label).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor), c = b.getBBox(), (null == d || d >= c.x + c.width) && c.x >= 0 && c.x + c.width < this.el.width() ? j.push(d = c.x - f) : j.push(b.remove());
        return j;
      }, d.prototype.drawSeries = function() {
        var a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n;
        return c = this.width / this.options.data.length, h = null != this.options.stacked ? 1 : this.options.ykeys.length, a = (c * this.options.barSizeRatio - this.options.barGap * (h - 1)) / h, g = c * (1 - this.options.barSizeRatio) / 2, n = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() {
          var h,
              o,
              p,
              q;
          for (p = this.data, q = [], d = h = 0, o = p.length; o > h; d = ++h)
            i = p[d], e = 0, q.push(function() {
              var h,
                  o,
                  p,
                  q;
              for (p = i._y, q = [], j = h = 0, o = p.length; o > h; j = ++h)
                m = p[j], null !== m ? (n ? (l = Math.min(m, n), b = Math.max(m, n)) : (l = m, b = this.bottom), f = this.left + d * c + g, this.options.stacked || (f += j * (a + this.options.barGap)), k = b - l, this.options.stacked && (l -= e), this.r.rect(f, l, a, k).attr("fill", this.colorFor(i, j, "bar")).attr("stroke-width", 0), q.push(e += k)) : q.push(null);
              return q;
            }.call(this));
          return q;
        }.call(this);
      }, d.prototype.drawHover = function() {
        var a,
            b,
            c,
            d,
            e;
        for (this.hoverHeight = 1.5 * this.options.hoverFontSize * (this.options.ykeys.length + 1), this.hover = this.r.rect(-10, -this.hoverHeight / 2 - this.options.hoverPaddingY, 20, this.hoverHeight + 2 * this.options.hoverPaddingY, 10).attr("fill", this.options.hoverFillColor).attr("stroke", this.options.hoverBorderColor).attr("stroke-width", this.options.hoverBorderWidth).attr("opacity", this.options.hoverOpacity), this.xLabel = this.r.text(0, .75 * this.options.hoverFontSize - this.hoverHeight / 2, "").attr("fill", this.options.hoverLabelColor).attr("font-weight", "bold").attr("font-size", this.options.hoverFontSize), this.hoverSet = this.r.set(), this.hoverSet.push(this.hover), this.hoverSet.push(this.xLabel), this.yLabels = [], e = [], a = c = 0, d = this.options.ykeys.length; d >= 0 ? d > c : c > d; a = d >= 0 ? ++c : --c)
          b = this.r.text(0, 1.5 * this.options.hoverFontSize * (a + 1.5) - this.hoverHeight / 2, "").attr("font-size", this.options.hoverFontSize), this.yLabels.push(b), e.push(this.hoverSet.push(b));
        return e;
      }, d.prototype.updateHover = function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k;
        for (this.hoverSet.show(), e = this.data[a], this.xLabel.attr("text", e.label), k = e.y, b = i = 0, j = k.length; j > i; b = ++i)
          g = k[b], this.yLabels[b].attr("fill", this.colorFor(e, b, "hover")), this.yLabels[b].attr("text", "" + this.options.labels[b] + ": " + this.yLabelFormat(g));
        return d = Math.max.apply(null, function() {
          var a,
              b,
              d,
              e;
          for (d = this.yLabels, e = [], a = 0, b = d.length; b > a; a++)
            c = d[a], e.push(c.getBBox().width);
          return e;
        }.call(this)), d = Math.max(d, this.xLabel.getBBox().width), this.hover.attr("width", d + 2 * this.options.hoverPaddingX), this.hover.attr("x", -this.options.hoverPaddingX - d / 2), h = (this.bottom + this.top) / 2, f = Math.min(this.right - d / 2 - this.options.hoverPaddingX, this.data[a]._x), f = Math.max(this.left + d / 2 + this.options.hoverPaddingX, f), this.hoverSet.attr("transform", "t" + f + "," + h);
      }, d.prototype.hideHover = function() {
        return this.hoverSet.hide();
      }, d.prototype.hilight = function(a) {
        return null !== a && this.prevHilight !== a && this.updateHover(a), this.prevHilight = a, null == a ? this.hideHover() : void 0;
      }, d.prototype.updateHilight = function(a) {
        var b,
            c,
            d;
        for (a -= this.el.offset().left, b = c = 0, d = this.hoverMargins.length; (d >= 0 ? d > c : c > d) && !(this.hoverMargins[b] > a); b = d >= 0 ? ++c : --c)
          ;
        return this.hilight(b);
      }, d.prototype.colorFor = function(a, b, c) {
        var d,
            e;
        return "function" == typeof this.options.barColors ? (d = {
          x: a.x,
          y: a.y[b],
          label: a.label
        }, e = {
          index: b,
          key: this.options.ykeys[b],
          label: this.options.labels[b]
        }, this.options.barColors.call(this, d, e, c)) : this.options.barColors[b % this.options.barColors.length];
      }, d;
    }(b.Grid), b.Donut = function(c) {
      function d(c) {
        if (this.click = h(this.click, this), this.select = h(this.select, this), !(this instanceof b.Donut))
          return new b.Donut(c);
        if (this.el = "string" == typeof c.element ? a(document.getElementById(c.element)) : a(c.element), this.options = a.extend({}, this.defaults, c), null === this.el || 0 === this.el.length)
          throw new Error("Graph placeholder not found.");
        void 0 !== c.data && 0 !== c.data.length && (this.data = c.data, this.redraw());
      }
      return g(d, c), d.prototype.defaults = {
        colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
        formatter: b.commas
      }, d.prototype.redraw = function() {
        var a,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y;
        for (this.el.empty(), this.r = new Raphael(this.el[0]), c = this.el.width() / 2, d = this.el.height() / 2, n = (Math.min(c, d) - 10) / 3, m = 0, v = this.data, p = 0, s = v.length; s > p; p++)
          o = v[p], m += o.value;
        for (j = 5 / (2 * n), a = 1.9999 * Math.PI - j * this.data.length, h = 0, g = 0, this.segments = [], w = this.data, f = q = 0, t = w.length; t > q; f = ++q)
          e = w[f], k = h + j + a * (e.value / m), l = new b.DonutSegment(c, d, 2 * n, n, h, k, this.options.colors[g % this.options.colors.length], e, f), l.render(this.r), this.segments.push(l), l.on("hover", this.select), l.on("click", this.click), h = k, g += 1;
        for (this.text1 = this.r.text(c, d - 10, "").attr({
          "font-size": 15,
          "font-weight": 800
        }), this.text2 = this.r.text(c, d + 10, "").attr({"font-size": 14}), i = Math.max.apply(null, function() {
          var a,
              b,
              c,
              d;
          for (c = this.data, d = [], a = 0, b = c.length; b > a; a++)
            e = c[a], d.push(e.value);
          return d;
        }.call(this)), g = 0, x = this.data, y = [], r = 0, u = x.length; u > r; r++) {
          if (e = x[r], e.value === i) {
            this.select(g);
            break;
          }
          y.push(g += 1);
        }
        return y;
      }, d.prototype.select = function(a) {
        var b,
            c,
            d,
            e,
            f;
        for (f = this.segments, d = 0, e = f.length; e > d; d++)
          b = f[d], b.deselect();
        return c = "number" == typeof a ? this.segments[a] : a, c.select(), this.setLabels(c.data.label, this.options.formatter(c.data.value, c.data));
      }, d.prototype.click = function(a, b) {
        return this.fire("click", a, b);
      }, d.prototype.setLabels = function(a, b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j;
        return c = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, f = 1.8 * c, e = c / 2, d = c / 3, this.text1.attr({
          text: a,
          transform: ""
        }), g = this.text1.getBBox(), h = Math.min(f / g.width, e / g.height), this.text1.attr({transform: "S" + h + "," + h + "," + (g.x + g.width / 2) + "," + (g.y + g.height)}), this.text2.attr({
          text: b,
          transform: ""
        }), i = this.text2.getBBox(), j = Math.min(f / i.width, d / i.height), this.text2.attr({transform: "S" + j + "," + j + "," + (i.x + i.width / 2) + "," + i.y});
      }, d;
    }(b.EventEmitter), b.DonutSegment = function(a) {
      function b(a, b, c, d, e, f, g, i, j) {
        this.cx = a, this.cy = b, this.inner = c, this.outer = d, this.color = g, this.data = i, this.i = j, this.deselect = h(this.deselect, this), this.select = h(this.select, this), this.sin_p0 = Math.sin(e), this.cos_p0 = Math.cos(e), this.sin_p1 = Math.sin(f), this.cos_p1 = Math.cos(f), this.long = f - e > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner);
      }
      return g(b, a), b.prototype.calcArcPoints = function(a) {
        return [this.cx + a * this.sin_p0, this.cy + a * this.cos_p0, this.cx + a * this.sin_p1, this.cy + a * this.cos_p1];
      }, b.prototype.calcSegment = function(a, b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l;
        return k = this.calcArcPoints(a), c = k[0], e = k[1], d = k[2], f = k[3], l = this.calcArcPoints(b), g = l[0], i = l[1], h = l[2], j = l[3], "M" + c + "," + e + ("A" + a + "," + a + ",0," + this.long + ",0," + d + "," + f) + ("L" + h + "," + j) + ("A" + b + "," + b + ",0," + this.long + ",1," + g + "," + i) + "Z";
      }, b.prototype.calcArc = function(a) {
        var b,
            c,
            d,
            e,
            f;
        return f = this.calcArcPoints(a), b = f[0], d = f[1], c = f[2], e = f[3], "M" + b + "," + d + ("A" + a + "," + a + ",0," + this.long + ",0," + c + "," + e);
      }, b.prototype.render = function(a) {
        var b = this;
        return this.arc = a.path(this.hilight).attr({
          stroke: this.color,
          "stroke-width": 2,
          opacity: 0
        }), this.seg = a.path(this.path).attr({
          fill: this.color,
          stroke: "white",
          "stroke-width": 3
        }).hover(function() {
          return b.fire("hover", b);
        }).click(function() {
          return b.fire("click", b.i, b.data);
        });
      }, b.prototype.select = function() {
        return this.selected ? void 0 : (this.seg.animate({path: this.selectedPath}, 150, "<>"), this.arc.animate({opacity: 1}, 150, "<>"), this.selected = !0);
      }, b.prototype.deselect = function() {
        return this.selected ? (this.seg.animate({path: this.path}, 150, "<>"), this.arc.animate({opacity: 0}, 150, "<>"), this.selected = !1) : void 0;
      }, b;
    }(b.EventEmitter);
  }.call(this), function(a) {
    a.fn.fitText = function(b, c) {
      var d = b || 1,
          e = a.extend({
            minFontSize: Number.NEGATIVE_INFINITY,
            maxFontSize: Number.POSITIVE_INFINITY
          }, c);
      return this.each(function() {
        var b = a(this),
            c = function() {
              b.css("font-size", Math.max(Math.min(b.width() / (10 * d), parseFloat(e.maxFontSize)), parseFloat(e.minFontSize)));
            };
        c(), a(window).on("resize", c);
      });
    };
  }(jQuery), +function(a) {
    "use strict";
    var b = function(a, b) {
      this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
    };
    b.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1
    }, b.prototype.init = function(b, c, d) {
      this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
      for (var e = this.options.trigger.split(" "),
          f = e.length; f--; ) {
        var g = e[f];
        if ("click" == g)
          this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
        else if ("manual" != g) {
          var h = "hover" == g ? "mouseenter" : "focus",
              i = "hover" == g ? "mouseleave" : "blur";
          this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
        }
      }
      this.options.selector ? this._options = a.extend({}, this.options, {
        trigger: "manual",
        selector: ""
      }) : this.fixTitle();
    }, b.prototype.getDefaults = function() {
      return b.DEFAULTS;
    }, b.prototype.getOptions = function(b) {
      return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
        show: b.delay,
        hide: b.delay
      }), b;
    }, b.prototype.getDelegateOptions = function() {
      var b = {},
          c = this.getDefaults();
      return this._options && a.each(this._options, function(a, d) {
        c[a] != d && (b[a] = d);
      }), b;
    }, b.prototype.enter = function(b) {
      var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
      return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() {
        "in" == c.hoverState && c.show();
      }, c.options.delay.show), void 0) : c.show();
    }, b.prototype.leave = function(b) {
      var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
      return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() {
        "out" == c.hoverState && c.hide();
      }, c.options.delay.hide), void 0) : c.hide();
    }, b.prototype.show = function() {
      var b = a.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
        if (this.$element.trigger(b), b.isDefaultPrevented())
          return ;
        var c = this.tip();
        this.setContent(), this.options.animation && c.addClass("fade");
        var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
            e = /\s?auto?\s?/i,
            f = e.test(d);
        f && (d = d.replace(e, "") || "top"), c.detach().css({
          top: 0,
          left: 0,
          display: "block"
        }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
        var g = this.getPosition(),
            h = c[0].offsetWidth,
            i = c[0].offsetHeight;
        if (f) {
          var j = this.$element.parent(),
              k = d,
              l = document.documentElement.scrollTop || document.body.scrollTop,
              m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
              n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
              o = "body" == this.options.container ? 0 : j.offset().left;
          d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d);
        }
        var p = this.getCalculatedOffset(d, g, h, i);
        this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type);
      }
    }, b.prototype.applyPlacement = function(a, b) {
      var c,
          d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
      isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
      var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
      if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
        var k = 0;
        a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left");
      } else
        this.replaceArrow(j - f, j, "top");
      c && d.offset(a);
    }, b.prototype.replaceArrow = function(a, b, c) {
      this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
    }, b.prototype.setContent = function() {
      var a = this.tip(),
          b = this.getTitle();
      a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, b.prototype.hide = function() {
      function b() {
        "in" != c.hoverState && d.detach();
      }
      var c = this,
          d = this.tip(),
          e = a.Event("hide.bs." + this.type);
      return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this);
    }, b.prototype.fixTitle = function() {
      var a = this.$element;
      (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, b.prototype.hasContent = function() {
      return this.getTitle();
    }, b.prototype.getPosition = function() {
      var b = this.$element[0];
      return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
        width: b.offsetWidth,
        height: b.offsetHeight
      }, this.$element.offset());
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
      return "bottom" == a ? {
        top: b.top + b.height,
        left: b.left + b.width / 2 - c / 2
      } : "top" == a ? {
        top: b.top - d,
        left: b.left + b.width / 2 - c / 2
      } : "left" == a ? {
        top: b.top + b.height / 2 - d / 2,
        left: b.left - c
      } : {
        top: b.top + b.height / 2 - d / 2,
        left: b.left + b.width
      };
    }, b.prototype.getTitle = function() {
      var a,
          b = this.$element,
          c = this.options;
      return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, b.prototype.tip = function() {
      return this.$tip = this.$tip || a(this.options.template);
    }, b.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, b.prototype.validate = function() {
      this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    }, b.prototype.enable = function() {
      this.enabled = !0;
    }, b.prototype.disable = function() {
      this.enabled = !1;
    }, b.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled;
    }, b.prototype.toggle = function(b) {
      var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
      c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, b.prototype.destroy = function() {
      this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
      return this.each(function() {
        var d = a(this),
            e = d.data("bs.tooltip"),
            f = "object" == typeof c && c;
        e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]();
      });
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
      return a.fn.tooltip = c, this;
    };
  }(window.jQuery), +function(a) {
    "use strict";
    var b = function(a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip)
      throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
      return b.DEFAULTS;
    }, b.prototype.setContent = function() {
      var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
      a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, b.prototype.hasContent = function() {
      return this.getTitle() || this.getContent();
    }, b.prototype.getContent = function() {
      var a = this.$element,
          b = this.options;
      return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, b.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, b.prototype.tip = function() {
      return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
      return this.each(function() {
        var d = a(this),
            e = d.data("bs.popover"),
            f = "object" == typeof c && c;
        e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]();
      });
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
      return a.fn.popover = c, this;
    };
  }(window.jQuery);
})(require("process"));