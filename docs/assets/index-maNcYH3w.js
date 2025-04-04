function $2(e, r) {
  for (var i = 0; i < r.length; i++) {
    const l = r[i];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const s in l)
        if (s !== "default" && !(s in e)) {
          const c = Object.getOwnPropertyDescriptor(l, s);
          c &&
            Object.defineProperty(
              e,
              s,
              c.get ? c : { enumerable: !0, get: () => l[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = i(s);
    fetch(s.href, c);
  }
})();
function v1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wd = { exports: {} },
  Pl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bv;
function Z2() {
  if (bv) return Pl;
  bv = 1;
  var e = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function i(l, s, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      s.key !== void 0 && (f = "" + s.key),
      "key" in s)
    ) {
      c = {};
      for (var m in s) m !== "key" && (c[m] = s[m]);
    } else c = s;
    return (
      (s = c.ref),
      { $$typeof: e, type: l, key: f, ref: s !== void 0 ? s : null, props: c }
    );
  }
  return (Pl.Fragment = r), (Pl.jsx = i), (Pl.jsxs = i), Pl;
}
var Sv;
function K2() {
  return Sv || ((Sv = 1), (wd.exports = Z2())), wd.exports;
}
var v = K2(),
  Ed = { exports: {} },
  Ae = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wv;
function W2() {
  if (wv) return Ae;
  wv = 1;
  var e = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function b(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (y && N[y]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    w = {};
  function T(N, $, ce) {
    (this.props = N),
      (this.context = $),
      (this.refs = w),
      (this.updater = ce || S);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (N, $) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, N, $, "setState");
    }),
    (T.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    });
  function M() {}
  M.prototype = T.prototype;
  function R(N, $, ce) {
    (this.props = N),
      (this.context = $),
      (this.refs = w),
      (this.updater = ce || S);
  }
  var O = (R.prototype = new M());
  (O.constructor = R), A(O, T.prototype), (O.isPureReactComponent = !0);
  var L = Array.isArray,
    D = { H: null, A: null, T: null, S: null },
    z = Object.prototype.hasOwnProperty;
  function Y(N, $, ce, de, le, ye) {
    return (
      (ce = ye.ref),
      {
        $$typeof: e,
        type: N,
        key: $,
        ref: ce !== void 0 ? ce : null,
        props: ye,
      }
    );
  }
  function te(N, $) {
    return Y(N.type, $, void 0, void 0, void 0, N.props);
  }
  function Z(N) {
    return typeof N == "object" && N !== null && N.$$typeof === e;
  }
  function ne(N) {
    var $ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (ce) {
        return $[ce];
      })
    );
  }
  var G = /\/+/g;
  function ae(N, $) {
    return typeof N == "object" && N !== null && N.key != null
      ? ne("" + N.key)
      : $.toString(36);
  }
  function q() {}
  function W(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (
          (typeof N.status == "string"
            ? N.then(q, q)
            : ((N.status = "pending"),
              N.then(
                function ($) {
                  N.status === "pending" &&
                    ((N.status = "fulfilled"), (N.value = $));
                },
                function ($) {
                  N.status === "pending" &&
                    ((N.status = "rejected"), (N.reason = $));
                }
              )),
          N.status)
        ) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function fe(N, $, ce, de, le) {
    var ye = typeof N;
    (ye === "undefined" || ye === "boolean") && (N = null);
    var xe = !1;
    if (N === null) xe = !0;
    else
      switch (ye) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case e:
            case r:
              xe = !0;
              break;
            case p:
              return (xe = N._init), fe(xe(N._payload), $, ce, de, le);
          }
      }
    if (xe)
      return (
        (le = le(N)),
        (xe = de === "" ? "." + ae(N, 0) : de),
        L(le)
          ? ((ce = ""),
            xe != null && (ce = xe.replace(G, "$&/") + "/"),
            fe(le, $, ce, "", function (I) {
              return I;
            }))
          : le != null &&
            (Z(le) &&
              (le = te(
                le,
                ce +
                  (le.key == null || (N && N.key === le.key)
                    ? ""
                    : ("" + le.key).replace(G, "$&/") + "/") +
                  xe
              )),
            $.push(le)),
        1
      );
    xe = 0;
    var ue = de === "" ? "." : de + ":";
    if (L(N))
      for (var pe = 0; pe < N.length; pe++)
        (de = N[pe]), (ye = ue + ae(de, pe)), (xe += fe(de, $, ce, ye, le));
    else if (((pe = b(N)), typeof pe == "function"))
      for (N = pe.call(N), pe = 0; !(de = N.next()).done; )
        (de = de.value),
          (ye = ue + ae(de, pe++)),
          (xe += fe(de, $, ce, ye, le));
    else if (ye === "object") {
      if (typeof N.then == "function") return fe(W(N), $, ce, de, le);
      throw (
        (($ = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            ($ === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : $) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return xe;
  }
  function B(N, $, ce) {
    if (N == null) return N;
    var de = [],
      le = 0;
    return (
      fe(N, de, "", "", function (ye) {
        return $.call(ce, ye, le++);
      }),
      de
    );
  }
  function ee(N) {
    if (N._status === -1) {
      var $ = N._result;
      ($ = $()),
        $.then(
          function (ce) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = ce));
          },
          function (ce) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = ce));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = $));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var X =
    typeof reportError == "function"
      ? reportError
      : function (N) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var $ = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof N == "object" &&
                N !== null &&
                typeof N.message == "string"
                  ? String(N.message)
                  : String(N),
              error: N,
            });
            if (!window.dispatchEvent($)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", N);
            return;
          }
          console.error(N);
        };
  function ie() {}
  return (
    (Ae.Children = {
      map: B,
      forEach: function (N, $, ce) {
        B(
          N,
          function () {
            $.apply(this, arguments);
          },
          ce
        );
      },
      count: function (N) {
        var $ = 0;
        return (
          B(N, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (N) {
        return (
          B(N, function ($) {
            return $;
          }) || []
        );
      },
      only: function (N) {
        if (!Z(N))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return N;
      },
    }),
    (Ae.Component = T),
    (Ae.Fragment = i),
    (Ae.Profiler = s),
    (Ae.PureComponent = R),
    (Ae.StrictMode = l),
    (Ae.Suspense = g),
    (Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (Ae.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Ae.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (Ae.cloneElement = function (N, $, ce) {
      if (N == null)
        throw Error(
          "The argument must be a React element, but you passed " + N + "."
        );
      var de = A({}, N.props),
        le = N.key,
        ye = void 0;
      if ($ != null)
        for (xe in ($.ref !== void 0 && (ye = void 0),
        $.key !== void 0 && (le = "" + $.key),
        $))
          !z.call($, xe) ||
            xe === "key" ||
            xe === "__self" ||
            xe === "__source" ||
            (xe === "ref" && $.ref === void 0) ||
            (de[xe] = $[xe]);
      var xe = arguments.length - 2;
      if (xe === 1) de.children = ce;
      else if (1 < xe) {
        for (var ue = Array(xe), pe = 0; pe < xe; pe++)
          ue[pe] = arguments[pe + 2];
        de.children = ue;
      }
      return Y(N.type, le, void 0, void 0, ye, de);
    }),
    (Ae.createContext = function (N) {
      return (
        (N = {
          $$typeof: f,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = { $$typeof: c, _context: N }),
        N
      );
    }),
    (Ae.createElement = function (N, $, ce) {
      var de,
        le = {},
        ye = null;
      if ($ != null)
        for (de in ($.key !== void 0 && (ye = "" + $.key), $))
          z.call($, de) &&
            de !== "key" &&
            de !== "__self" &&
            de !== "__source" &&
            (le[de] = $[de]);
      var xe = arguments.length - 2;
      if (xe === 1) le.children = ce;
      else if (1 < xe) {
        for (var ue = Array(xe), pe = 0; pe < xe; pe++)
          ue[pe] = arguments[pe + 2];
        le.children = ue;
      }
      if (N && N.defaultProps)
        for (de in ((xe = N.defaultProps), xe))
          le[de] === void 0 && (le[de] = xe[de]);
      return Y(N, ye, void 0, void 0, null, le);
    }),
    (Ae.createRef = function () {
      return { current: null };
    }),
    (Ae.forwardRef = function (N) {
      return { $$typeof: m, render: N };
    }),
    (Ae.isValidElement = Z),
    (Ae.lazy = function (N) {
      return { $$typeof: p, _payload: { _status: -1, _result: N }, _init: ee };
    }),
    (Ae.memo = function (N, $) {
      return { $$typeof: h, type: N, compare: $ === void 0 ? null : $ };
    }),
    (Ae.startTransition = function (N) {
      var $ = D.T,
        ce = {};
      D.T = ce;
      try {
        var de = N(),
          le = D.S;
        le !== null && le(ce, de),
          typeof de == "object" &&
            de !== null &&
            typeof de.then == "function" &&
            de.then(ie, X);
      } catch (ye) {
        X(ye);
      } finally {
        D.T = $;
      }
    }),
    (Ae.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (Ae.use = function (N) {
      return D.H.use(N);
    }),
    (Ae.useActionState = function (N, $, ce) {
      return D.H.useActionState(N, $, ce);
    }),
    (Ae.useCallback = function (N, $) {
      return D.H.useCallback(N, $);
    }),
    (Ae.useContext = function (N) {
      return D.H.useContext(N);
    }),
    (Ae.useDebugValue = function () {}),
    (Ae.useDeferredValue = function (N, $) {
      return D.H.useDeferredValue(N, $);
    }),
    (Ae.useEffect = function (N, $) {
      return D.H.useEffect(N, $);
    }),
    (Ae.useId = function () {
      return D.H.useId();
    }),
    (Ae.useImperativeHandle = function (N, $, ce) {
      return D.H.useImperativeHandle(N, $, ce);
    }),
    (Ae.useInsertionEffect = function (N, $) {
      return D.H.useInsertionEffect(N, $);
    }),
    (Ae.useLayoutEffect = function (N, $) {
      return D.H.useLayoutEffect(N, $);
    }),
    (Ae.useMemo = function (N, $) {
      return D.H.useMemo(N, $);
    }),
    (Ae.useOptimistic = function (N, $) {
      return D.H.useOptimistic(N, $);
    }),
    (Ae.useReducer = function (N, $, ce) {
      return D.H.useReducer(N, $, ce);
    }),
    (Ae.useRef = function (N) {
      return D.H.useRef(N);
    }),
    (Ae.useState = function (N) {
      return D.H.useState(N);
    }),
    (Ae.useSyncExternalStore = function (N, $, ce) {
      return D.H.useSyncExternalStore(N, $, ce);
    }),
    (Ae.useTransition = function () {
      return D.H.useTransition();
    }),
    (Ae.version = "19.0.0"),
    Ae
  );
}
var Ev;
function Lh() {
  return Ev || ((Ev = 1), (Ed.exports = W2())), Ed.exports;
}
var _ = Lh();
const kr = v1(_),
  I2 = $2({ __proto__: null, default: kr }, [_]);
var _d = { exports: {} },
  Ql = {},
  Ad = { exports: {} },
  Td = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _v;
function J2() {
  return (
    _v ||
      ((_v = 1),
      (function (e) {
        function r(B, ee) {
          var X = B.length;
          B.push(ee);
          e: for (; 0 < X; ) {
            var ie = (X - 1) >>> 1,
              N = B[ie];
            if (0 < s(N, ee)) (B[ie] = ee), (B[X] = N), (X = ie);
            else break e;
          }
        }
        function i(B) {
          return B.length === 0 ? null : B[0];
        }
        function l(B) {
          if (B.length === 0) return null;
          var ee = B[0],
            X = B.pop();
          if (X !== ee) {
            B[0] = X;
            e: for (var ie = 0, N = B.length, $ = N >>> 1; ie < $; ) {
              var ce = 2 * (ie + 1) - 1,
                de = B[ce],
                le = ce + 1,
                ye = B[le];
              if (0 > s(de, X))
                le < N && 0 > s(ye, de)
                  ? ((B[ie] = ye), (B[le] = X), (ie = le))
                  : ((B[ie] = de), (B[ce] = X), (ie = ce));
              else if (le < N && 0 > s(ye, X))
                (B[ie] = ye), (B[le] = X), (ie = le);
              else break e;
            }
          }
          return ee;
        }
        function s(B, ee) {
          var X = B.sortIndex - ee.sortIndex;
          return X !== 0 ? X : B.id - ee.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          e.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            m = f.now();
          e.unstable_now = function () {
            return f.now() - m;
          };
        }
        var g = [],
          h = [],
          p = 1,
          y = null,
          b = 3,
          S = !1,
          A = !1,
          w = !1,
          T = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          R = typeof setImmediate < "u" ? setImmediate : null;
        function O(B) {
          for (var ee = i(h); ee !== null; ) {
            if (ee.callback === null) l(h);
            else if (ee.startTime <= B)
              l(h), (ee.sortIndex = ee.expirationTime), r(g, ee);
            else break;
            ee = i(h);
          }
        }
        function L(B) {
          if (((w = !1), O(B), !A))
            if (i(g) !== null) (A = !0), W();
            else {
              var ee = i(h);
              ee !== null && fe(L, ee.startTime - B);
            }
        }
        var D = !1,
          z = -1,
          Y = 5,
          te = -1;
        function Z() {
          return !(e.unstable_now() - te < Y);
        }
        function ne() {
          if (D) {
            var B = e.unstable_now();
            te = B;
            var ee = !0;
            try {
              e: {
                (A = !1), w && ((w = !1), M(z), (z = -1)), (S = !0);
                var X = b;
                try {
                  t: {
                    for (
                      O(B), y = i(g);
                      y !== null && !(y.expirationTime > B && Z());

                    ) {
                      var ie = y.callback;
                      if (typeof ie == "function") {
                        (y.callback = null), (b = y.priorityLevel);
                        var N = ie(y.expirationTime <= B);
                        if (((B = e.unstable_now()), typeof N == "function")) {
                          (y.callback = N), O(B), (ee = !0);
                          break t;
                        }
                        y === i(g) && l(g), O(B);
                      } else l(g);
                      y = i(g);
                    }
                    if (y !== null) ee = !0;
                    else {
                      var $ = i(h);
                      $ !== null && fe(L, $.startTime - B), (ee = !1);
                    }
                  }
                  break e;
                } finally {
                  (y = null), (b = X), (S = !1);
                }
                ee = void 0;
              }
            } finally {
              ee ? G() : (D = !1);
            }
          }
        }
        var G;
        if (typeof R == "function")
          G = function () {
            R(ne);
          };
        else if (typeof MessageChannel < "u") {
          var ae = new MessageChannel(),
            q = ae.port2;
          (ae.port1.onmessage = ne),
            (G = function () {
              q.postMessage(null);
            });
        } else
          G = function () {
            T(ne, 0);
          };
        function W() {
          D || ((D = !0), G());
        }
        function fe(B, ee) {
          z = T(function () {
            B(e.unstable_now());
          }, ee);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            A || S || ((A = !0), W());
          }),
          (e.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Y = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return i(g);
          }),
          (e.unstable_next = function (B) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var ee = 3;
                break;
              default:
                ee = b;
            }
            var X = b;
            b = ee;
            try {
              return B();
            } finally {
              b = X;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (B, ee) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var X = b;
            b = B;
            try {
              return ee();
            } finally {
              b = X;
            }
          }),
          (e.unstable_scheduleCallback = function (B, ee, X) {
            var ie = e.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? ie + X : ie))
                : (X = ie),
              B)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = X + N),
              (B = {
                id: p++,
                callback: ee,
                priorityLevel: B,
                startTime: X,
                expirationTime: N,
                sortIndex: -1,
              }),
              X > ie
                ? ((B.sortIndex = X),
                  r(h, B),
                  i(g) === null &&
                    B === i(h) &&
                    (w ? (M(z), (z = -1)) : (w = !0), fe(L, X - ie)))
                : ((B.sortIndex = N), r(g, B), A || S || ((A = !0), W())),
              B
            );
          }),
          (e.unstable_shouldYield = Z),
          (e.unstable_wrapCallback = function (B) {
            var ee = b;
            return function () {
              var X = b;
              b = ee;
              try {
                return B.apply(this, arguments);
              } finally {
                b = X;
              }
            };
          });
      })(Td)),
    Td
  );
}
var Av;
function eE() {
  return Av || ((Av = 1), (Ad.exports = J2())), Ad.exports;
}
var Md = { exports: {} },
  xt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tv;
function tE() {
  if (Tv) return xt;
  Tv = 1;
  var e = Lh();
  function r(g) {
    var h = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        h += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var l = {
      d: {
        f: i,
        r: function () {
          throw Error(r(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function c(g, h, p) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: g,
      containerInfo: h,
      implementation: p,
    };
  }
  var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, h) {
    if (g === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (xt.createPortal = function (g, h) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(r(299));
      return c(g, h, null, p);
    }),
    (xt.flushSync = function (g) {
      var h = f.T,
        p = l.p;
      try {
        if (((f.T = null), (l.p = 2), g)) return g();
      } finally {
        (f.T = h), (l.p = p), l.d.f();
      }
    }),
    (xt.preconnect = function (g, h) {
      typeof g == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        l.d.C(g, h));
    }),
    (xt.prefetchDNS = function (g) {
      typeof g == "string" && l.d.D(g);
    }),
    (xt.preinit = function (g, h) {
      if (typeof g == "string" && h && typeof h.as == "string") {
        var p = h.as,
          y = m(p, h.crossOrigin),
          b = typeof h.integrity == "string" ? h.integrity : void 0,
          S = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        p === "style"
          ? l.d.S(g, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: S,
            })
          : p === "script" &&
            l.d.X(g, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: S,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (xt.preinitModule = function (g, h) {
      if (typeof g == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var p = m(h.as, h.crossOrigin);
            l.d.M(g, {
              crossOrigin: p,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && l.d.M(g);
    }),
    (xt.preload = function (g, h) {
      if (
        typeof g == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var p = h.as,
          y = m(p, h.crossOrigin);
        l.d.L(g, p, {
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (xt.preloadModule = function (g, h) {
      if (typeof g == "string")
        if (h) {
          var p = m(h.as, h.crossOrigin);
          l.d.m(g, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: p,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else l.d.m(g);
    }),
    (xt.requestFormReset = function (g) {
      l.d.r(g);
    }),
    (xt.unstable_batchedUpdates = function (g, h) {
      return g(h);
    }),
    (xt.useFormState = function (g, h, p) {
      return f.H.useFormState(g, h, p);
    }),
    (xt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (xt.version = "19.0.0"),
    xt
  );
}
var Mv;
function y1() {
  if (Mv) return Md.exports;
  Mv = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return e(), (Md.exports = tE()), Md.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cv;
function nE() {
  if (Cv) return Ql;
  Cv = 1;
  var e = eE(),
    r = Lh(),
    i = y1();
  function l(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var c = Symbol.for("react.element"),
    f = Symbol.for("react.transitional.element"),
    m = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    p = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    b = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    A = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    T = Symbol.for("react.suspense_list"),
    M = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    O = Symbol.for("react.offscreen"),
    L = Symbol.for("react.memo_cache_sentinel"),
    D = Symbol.iterator;
  function z(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (D && t[D]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Y = Symbol.for("react.client.reference");
  function te(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Y ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case g:
        return "Fragment";
      case m:
        return "Portal";
      case p:
        return "Profiler";
      case h:
        return "StrictMode";
      case w:
        return "Suspense";
      case T:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case S:
          return (t.displayName || "Context") + ".Provider";
        case b:
          return (t._context.displayName || "Context") + ".Consumer";
        case A:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case M:
          return (
            (n = t.displayName || null), n !== null ? n : te(t.type) || "Memo"
          );
        case R:
          (n = t._payload), (t = t._init);
          try {
            return te(t(n));
          } catch {}
      }
    return null;
  }
  var Z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ne = Object.assign,
    G,
    ae;
  function q(t) {
    if (G === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        (G = (n && n[1]) || ""),
          (ae =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      G +
      t +
      ae
    );
  }
  var W = !1;
  function fe(t, n) {
    if (!t || W) return "";
    W = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var J = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(J.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(J, []);
                } catch (P) {
                  var V = P;
                }
                Reflect.construct(t, [], J);
              } else {
                try {
                  J.call();
                } catch (P) {
                  V = P;
                }
                t.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (P) {
                V = P;
              }
              (J = t()) &&
                typeof J.catch == "function" &&
                J.catch(function () {});
            }
          } catch (P) {
            if (P && V && typeof P.stack == "string") return [P.stack, V.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = o.DetermineComponentFrameRoot(),
        x = d[0],
        E = d[1];
      if (x && E) {
        var C = x.split(`
`),
          U = E.split(`
`);
        for (
          u = o = 0;
          o < C.length && !C[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; u < U.length && !U[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (o === C.length || u === U.length)
          for (
            o = C.length - 1, u = U.length - 1;
            1 <= o && 0 <= u && C[o] !== U[u];

          )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (C[o] !== U[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || C[o] !== U[u])) {
                  var Q =
                    `
` + C[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      Q.includes("<anonymous>") &&
                      (Q = Q.replace("<anonymous>", t.displayName)),
                    Q
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (W = !1), (Error.prepareStackTrace = a);
    }
    return (a = t ? t.displayName || t.name : "") ? q(a) : "";
  }
  function B(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return q(t.type);
      case 16:
        return q("Lazy");
      case 13:
        return q("Suspense");
      case 19:
        return q("SuspenseList");
      case 0:
      case 15:
        return (t = fe(t.type, !1)), t;
      case 11:
        return (t = fe(t.type.render, !1)), t;
      case 1:
        return (t = fe(t.type, !0)), t;
      default:
        return "";
    }
  }
  function ee(t) {
    try {
      var n = "";
      do (n += B(t)), (t = t.return);
      while (t);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function X(t) {
    var n = t,
      a = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), (n.flags & 4098) !== 0 && (a = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? a : null;
  }
  function ie(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function N(t) {
    if (X(t) !== t) throw Error(l(188));
  }
  function $(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = X(t)), n === null)) throw Error(l(188));
      return n !== t ? null : t;
    }
    for (var a = t, o = n; ; ) {
      var u = a.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((o = u.return), o !== null)) {
          a = o;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === a) return N(u), t;
          if (d === o) return N(u), n;
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== o.return) (a = u), (o = d);
      else {
        for (var x = !1, E = u.child; E; ) {
          if (E === a) {
            (x = !0), (a = u), (o = d);
            break;
          }
          if (E === o) {
            (x = !0), (o = u), (a = d);
            break;
          }
          E = E.sibling;
        }
        if (!x) {
          for (E = d.child; E; ) {
            if (E === a) {
              (x = !0), (a = d), (o = u);
              break;
            }
            if (E === o) {
              (x = !0), (o = d), (a = u);
              break;
            }
            E = E.sibling;
          }
          if (!x) throw Error(l(189));
        }
      }
      if (a.alternate !== o) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
    return a.stateNode.current === a ? t : n;
  }
  function ce(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = ce(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var de = Array.isArray,
    le = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ye = { pending: !1, data: null, method: null, action: null },
    xe = [],
    ue = -1;
  function pe(t) {
    return { current: t };
  }
  function I(t) {
    0 > ue || ((t.current = xe[ue]), (xe[ue] = null), ue--);
  }
  function re(t, n) {
    ue++, (xe[ue] = t.current), (t.current = n);
  }
  var se = pe(null),
    F = pe(null),
    Ce = pe(null),
    _e = pe(null);
  function Fe(t, n) {
    switch ((re(Ce, n), re(F, t), re(se, null), (t = n.nodeType), t)) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? Z0(n) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? n.parentNode : n),
          (n = t.tagName),
          (t = t.namespaceURI))
        )
          (t = Z0(t)), (n = K0(t, n));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    I(se), re(se, n);
  }
  function Ve() {
    I(se), I(F), I(Ce);
  }
  function ht(t) {
    t.memoizedState !== null && re(_e, t);
    var n = se.current,
      a = K0(n, t.type);
    n !== a && (re(F, t), re(se, a));
  }
  function zn(t) {
    F.current === t && (I(se), I(F)),
      _e.current === t && (I(_e), (ql._currentValue = ye));
  }
  var fr = Object.prototype.hasOwnProperty,
    mc = e.unstable_scheduleCallback,
    gc = e.unstable_cancelCallback,
    TS = e.unstable_shouldYield,
    MS = e.unstable_requestPaint,
    pn = e.unstable_now,
    CS = e.unstable_getCurrentPriorityLevel,
    km = e.unstable_ImmediatePriority,
    Bm = e.unstable_UserBlockingPriority,
    ko = e.unstable_NormalPriority,
    RS = e.unstable_LowPriority,
    Vm = e.unstable_IdlePriority,
    NS = e.log,
    OS = e.unstable_setDisableYieldValue,
    Ki = null,
    Nt = null;
  function DS(t) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function")
      try {
        Nt.onCommitFiberRoot(Ki, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function dr(t) {
    if (
      (typeof NS == "function" && OS(t),
      Nt && typeof Nt.setStrictMode == "function")
    )
      try {
        Nt.setStrictMode(Ki, t);
      } catch {}
  }
  var Ot = Math.clz32 ? Math.clz32 : US,
    jS = Math.log,
    zS = Math.LN2;
  function US(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((jS(t) / zS) | 0)) | 0;
  }
  var Bo = 128,
    Vo = 4194304;
  function Zr(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function qo(t, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var o = 0,
      u = t.suspendedLanes,
      d = t.pingedLanes,
      x = t.warmLanes;
    t = t.finishedLanes !== 0;
    var E = a & 134217727;
    return (
      E !== 0
        ? ((a = E & ~u),
          a !== 0
            ? (o = Zr(a))
            : ((d &= E),
              d !== 0
                ? (o = Zr(d))
                : t || ((x = E & ~x), x !== 0 && (o = Zr(x)))))
        : ((E = a & ~u),
          E !== 0
            ? (o = Zr(E))
            : d !== 0
            ? (o = Zr(d))
            : t || ((x = a & ~x), x !== 0 && (o = Zr(x)))),
      o === 0
        ? 0
        : n !== 0 &&
          n !== o &&
          (n & u) === 0 &&
          ((u = o & -o),
          (x = n & -n),
          u >= x || (u === 32 && (x & 4194176) !== 0))
        ? n
        : o
    );
  }
  function Wi(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function LS(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qm() {
    var t = Bo;
    return (Bo <<= 1), (Bo & 4194176) === 0 && (Bo = 128), t;
  }
  function Ym() {
    var t = Vo;
    return (Vo <<= 1), (Vo & 62914560) === 0 && (Vo = 4194304), t;
  }
  function pc(t) {
    for (var n = [], a = 0; 31 > a; a++) n.push(t);
    return n;
  }
  function Ii(t, n) {
    (t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function HS(t, n, a, o, u, d) {
    var x = t.pendingLanes;
    (t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0);
    var E = t.entanglements,
      C = t.expirationTimes,
      U = t.hiddenUpdates;
    for (a = x & ~a; 0 < a; ) {
      var Q = 31 - Ot(a),
        J = 1 << Q;
      (E[Q] = 0), (C[Q] = -1);
      var V = U[Q];
      if (V !== null)
        for (U[Q] = null, Q = 0; Q < V.length; Q++) {
          var P = V[Q];
          P !== null && (P.lane &= -536870913);
        }
      a &= ~J;
    }
    o !== 0 && Gm(t, o, 0),
      d !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(x & ~n));
  }
  function Gm(t, n, a) {
    (t.pendingLanes |= n), (t.suspendedLanes &= ~n);
    var o = 31 - Ot(n);
    (t.entangledLanes |= n),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (a & 4194218));
  }
  function Xm(t, n) {
    var a = (t.entangledLanes |= n);
    for (t = t.entanglements; a; ) {
      var o = 31 - Ot(a),
        u = 1 << o;
      (u & n) | (t[o] & n) && (t[o] |= n), (a &= ~u);
    }
  }
  function Fm(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Pm() {
    var t = le.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : mv(t.type));
  }
  function kS(t, n) {
    var a = le.p;
    try {
      return (le.p = t), n();
    } finally {
      le.p = a;
    }
  }
  var hr = Math.random().toString(36).slice(2),
    vt = "__reactFiber$" + hr,
    _t = "__reactProps$" + hr,
    Ua = "__reactContainer$" + hr,
    vc = "__reactEvents$" + hr,
    BS = "__reactListeners$" + hr,
    VS = "__reactHandles$" + hr,
    Qm = "__reactResources$" + hr,
    Ji = "__reactMarker$" + hr;
  function yc(t) {
    delete t[vt], delete t[_t], delete t[vc], delete t[BS], delete t[VS];
  }
  function Kr(t) {
    var n = t[vt];
    if (n) return n;
    for (var a = t.parentNode; a; ) {
      if ((n = a[Ua] || a[vt])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (t = J0(t); t !== null; ) {
            if ((a = t[vt])) return a;
            t = J0(t);
          }
        return n;
      }
      (t = a), (a = t.parentNode);
    }
    return null;
  }
  function La(t) {
    if ((t = t[vt] || t[Ua])) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return t;
    }
    return null;
  }
  function el(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(l(33));
  }
  function Ha(t) {
    var n = t[Qm];
    return (
      n ||
        (n = t[Qm] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function lt(t) {
    t[Ji] = !0;
  }
  var $m = new Set(),
    Zm = {};
  function Wr(t, n) {
    ka(t, n), ka(t + "Capture", n);
  }
  function ka(t, n) {
    for (Zm[t] = n, t = 0; t < n.length; t++) $m.add(n[t]);
  }
  var Un = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    qS = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Km = {},
    Wm = {};
  function YS(t) {
    return fr.call(Wm, t)
      ? !0
      : fr.call(Km, t)
      ? !1
      : qS.test(t)
      ? (Wm[t] = !0)
      : ((Km[t] = !0), !1);
  }
  function Yo(t, n, a) {
    if (YS(n))
      if (a === null) t.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + a);
      }
  }
  function Go(t, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + a);
    }
  }
  function Ln(t, n, a, o) {
    if (o === null) t.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(n, a, "" + o);
    }
  }
  function Vt(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Im(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function GS(t) {
    var n = Im(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      o = "" + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        d = a.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (x) {
            (o = "" + x), d.call(this, x);
          },
        }),
        Object.defineProperty(t, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (x) {
            o = "" + x;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function Xo(t) {
    t._valueTracker || (t._valueTracker = GS(t));
  }
  function Jm(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      o = "";
    return (
      t && (o = Im(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== a ? (n.setValue(t), !0) : !1
    );
  }
  function Fo(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var XS = /[\n"\\]/g;
  function qt(t) {
    return t.replace(XS, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function xc(t, n, a, o, u, d, x, E) {
    (t.name = ""),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (t.type = x)
        : t.removeAttribute("type"),
      n != null
        ? x === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + Vt(n))
          : t.value !== "" + Vt(n) && (t.value = "" + Vt(n))
        : (x !== "submit" && x !== "reset") || t.removeAttribute("value"),
      n != null
        ? bc(t, x, Vt(n))
        : a != null
        ? bc(t, x, Vt(a))
        : o != null && t.removeAttribute("value"),
      u == null && d != null && (t.defaultChecked = !!d),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      E != null &&
      typeof E != "function" &&
      typeof E != "symbol" &&
      typeof E != "boolean"
        ? (t.name = "" + Vt(E))
        : t.removeAttribute("name");
  }
  function eg(t, n, a, o, u, d, x, E) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.type = d),
      n != null || a != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || n != null)) return;
      (a = a != null ? "" + Vt(a) : ""),
        (n = n != null ? "" + Vt(n) : a),
        E || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (o = o ?? u),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = E ? t.checked : !!o),
      (t.defaultChecked = !!o),
      x != null &&
        typeof x != "function" &&
        typeof x != "symbol" &&
        typeof x != "boolean" &&
        (t.name = x);
  }
  function bc(t, n, a) {
    (n === "number" && Fo(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function Ba(t, n, a, o) {
    if (((t = t.options), n)) {
      n = {};
      for (var u = 0; u < a.length; u++) n["$" + a[u]] = !0;
      for (a = 0; a < t.length; a++)
        (u = n.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== u && (t[a].selected = u),
          u && o && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Vt(a), n = null, u = 0; u < t.length; u++) {
        if (t[u].value === a) {
          (t[u].selected = !0), o && (t[u].defaultSelected = !0);
          return;
        }
        n !== null || t[u].disabled || (n = t[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function tg(t, n, a) {
    if (
      n != null &&
      ((n = "" + Vt(n)), n !== t.value && (t.value = n), a == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = a != null ? "" + Vt(a) : "";
  }
  function ng(t, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(l(92));
        if (de(o)) {
          if (1 < o.length) throw Error(l(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), (n = a);
    }
    (a = Vt(n)),
      (t.defaultValue = a),
      (o = t.textContent),
      o === a && o !== "" && o !== null && (t.value = o);
  }
  function Va(t, n) {
    if (n) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var FS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function rg(t, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? o
        ? t.setProperty(n, "")
        : n === "float"
        ? (t.cssFloat = "")
        : (t[n] = "")
      : o
      ? t.setProperty(n, a)
      : typeof a != "number" || a === 0 || FS.has(n)
      ? n === "float"
        ? (t.cssFloat = a)
        : (t[n] = ("" + a).trim())
      : (t[n] = a + "px");
  }
  function ag(t, n, a) {
    if (n != null && typeof n != "object") throw Error(l(62));
    if (((t = t.style), a != null)) {
      for (var o in a)
        !a.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
            ? (t.cssFloat = "")
            : (t[o] = ""));
      for (var u in n)
        (o = n[u]), n.hasOwnProperty(u) && a[u] !== o && rg(t, u, o);
    } else for (var d in n) n.hasOwnProperty(d) && rg(t, d, n[d]);
  }
  function Sc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var PS = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    QS =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Po(t) {
    return QS.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var wc = null;
  function Ec(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var qa = null,
    Ya = null;
  function ig(t) {
    var n = La(t);
    if (n && (t = n.stateNode)) {
      var a = t[_t] || null;
      e: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (xc(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + qt("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var o = a[n];
              if (o !== t && o.form === t.form) {
                var u = o[_t] || null;
                if (!u) throw Error(l(90));
                xc(
                  o,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (n = 0; n < a.length; n++)
              (o = a[n]), o.form === t.form && Jm(o);
          }
          break e;
        case "textarea":
          tg(t, a.value, a.defaultValue);
          break e;
        case "select":
          (n = a.value), n != null && Ba(t, !!a.multiple, n, !1);
      }
    }
  }
  var _c = !1;
  function lg(t, n, a) {
    if (_c) return t(n, a);
    _c = !0;
    try {
      var o = t(n);
      return o;
    } finally {
      if (
        ((_c = !1),
        (qa !== null || Ya !== null) &&
          (Rs(), qa && ((n = qa), (t = Ya), (Ya = qa = null), ig(n), t)))
      )
        for (n = 0; n < t.length; n++) ig(t[n]);
    }
  }
  function tl(t, n) {
    var a = t.stateNode;
    if (a === null) return null;
    var o = a[_t] || null;
    if (o === null) return null;
    a = o[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(l(231, n, typeof a));
    return a;
  }
  var Ac = !1;
  if (Un)
    try {
      var nl = {};
      Object.defineProperty(nl, "passive", {
        get: function () {
          Ac = !0;
        },
      }),
        window.addEventListener("test", nl, nl),
        window.removeEventListener("test", nl, nl);
    } catch {
      Ac = !1;
    }
  var mr = null,
    Tc = null,
    Qo = null;
  function og() {
    if (Qo) return Qo;
    var t,
      n = Tc,
      a = n.length,
      o,
      u = "value" in mr ? mr.value : mr.textContent,
      d = u.length;
    for (t = 0; t < a && n[t] === u[t]; t++);
    var x = a - t;
    for (o = 1; o <= x && n[a - o] === u[d - o]; o++);
    return (Qo = u.slice(t, 1 < o ? 1 - o : void 0));
  }
  function $o(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Zo() {
    return !0;
  }
  function sg() {
    return !1;
  }
  function At(t) {
    function n(a, o, u, d, x) {
      (this._reactName = a),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = x),
        (this.currentTarget = null);
      for (var E in t)
        t.hasOwnProperty(E) && ((a = t[E]), (this[E] = a ? a(d) : d[E]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Zo
          : sg),
        (this.isPropagationStopped = sg),
        this
      );
    }
    return (
      ne(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Zo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Zo));
        },
        persist: function () {},
        isPersistent: Zo,
      }),
      n
    );
  }
  var Ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ko = At(Ir),
    rl = ne({}, Ir, { view: 0, detail: 0 }),
    $S = At(rl),
    Mc,
    Cc,
    al,
    Wo = ne({}, rl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Nc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== al &&
              (al && t.type === "mousemove"
                ? ((Mc = t.screenX - al.screenX), (Cc = t.screenY - al.screenY))
                : (Cc = Mc = 0),
              (al = t)),
            Mc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Cc;
      },
    }),
    ug = At(Wo),
    ZS = ne({}, Wo, { dataTransfer: 0 }),
    KS = At(ZS),
    WS = ne({}, rl, { relatedTarget: 0 }),
    Rc = At(WS),
    IS = ne({}, Ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    JS = At(IS),
    ew = ne({}, Ir, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    tw = At(ew),
    nw = ne({}, Ir, { data: 0 }),
    cg = At(nw),
    rw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    aw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    iw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function lw(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = iw[t])
      ? !!n[t]
      : !1;
  }
  function Nc() {
    return lw;
  }
  var ow = ne({}, rl, {
      key: function (t) {
        if (t.key) {
          var n = rw[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = $o(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? aw[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Nc,
      charCode: function (t) {
        return t.type === "keypress" ? $o(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? $o(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    sw = At(ow),
    uw = ne({}, Wo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    fg = At(uw),
    cw = ne({}, rl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nc,
    }),
    fw = At(cw),
    dw = ne({}, Ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hw = At(dw),
    mw = ne({}, Wo, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    gw = At(mw),
    pw = ne({}, Ir, { newState: 0, oldState: 0 }),
    vw = At(pw),
    yw = [9, 13, 27, 32],
    Oc = Un && "CompositionEvent" in window,
    il = null;
  Un && "documentMode" in document && (il = document.documentMode);
  var xw = Un && "TextEvent" in window && !il,
    dg = Un && (!Oc || (il && 8 < il && 11 >= il)),
    hg = " ",
    mg = !1;
  function gg(t, n) {
    switch (t) {
      case "keyup":
        return yw.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pg(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ga = !1;
  function bw(t, n) {
    switch (t) {
      case "compositionend":
        return pg(n);
      case "keypress":
        return n.which !== 32 ? null : ((mg = !0), hg);
      case "textInput":
        return (t = n.data), t === hg && mg ? null : t;
      default:
        return null;
    }
  }
  function Sw(t, n) {
    if (Ga)
      return t === "compositionend" || (!Oc && gg(t, n))
        ? ((t = og()), (Qo = Tc = mr = null), (Ga = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return dg && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var ww = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function vg(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!ww[t.type] : n === "textarea";
  }
  function yg(t, n, a, o) {
    qa ? (Ya ? Ya.push(o) : (Ya = [o])) : (qa = o),
      (n = zs(n, "onChange")),
      0 < n.length &&
        ((a = new Ko("onChange", "change", null, a, o)),
        t.push({ event: a, listeners: n }));
  }
  var ll = null,
    ol = null;
  function Ew(t) {
    X0(t, 0);
  }
  function Io(t) {
    var n = el(t);
    if (Jm(n)) return t;
  }
  function xg(t, n) {
    if (t === "change") return n;
  }
  var bg = !1;
  if (Un) {
    var Dc;
    if (Un) {
      var jc = "oninput" in document;
      if (!jc) {
        var Sg = document.createElement("div");
        Sg.setAttribute("oninput", "return;"),
          (jc = typeof Sg.oninput == "function");
      }
      Dc = jc;
    } else Dc = !1;
    bg = Dc && (!document.documentMode || 9 < document.documentMode);
  }
  function wg() {
    ll && (ll.detachEvent("onpropertychange", Eg), (ol = ll = null));
  }
  function Eg(t) {
    if (t.propertyName === "value" && Io(ol)) {
      var n = [];
      yg(n, ol, t, Ec(t)), lg(Ew, n);
    }
  }
  function _w(t, n, a) {
    t === "focusin"
      ? (wg(), (ll = n), (ol = a), ll.attachEvent("onpropertychange", Eg))
      : t === "focusout" && wg();
  }
  function Aw(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Io(ol);
  }
  function Tw(t, n) {
    if (t === "click") return Io(n);
  }
  function Mw(t, n) {
    if (t === "input" || t === "change") return Io(n);
  }
  function Cw(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var Dt = typeof Object.is == "function" ? Object.is : Cw;
  function sl(t, n) {
    if (Dt(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(t),
      o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var u = a[o];
      if (!fr.call(n, u) || !Dt(t[u], n[u])) return !1;
    }
    return !0;
  }
  function _g(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ag(t, n) {
    var a = _g(t);
    t = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (((o = t + a.textContent.length), t <= n && o >= n))
          return { node: a, offset: n - t };
        t = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = _g(a);
    }
  }
  function Tg(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Tg(t, n.parentNode)
        : "contains" in t
        ? t.contains(n)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Mg(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = Fo(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = n.contentWindow;
      else break;
      n = Fo(t.document);
    }
    return n;
  }
  function zc(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function Rw(t, n) {
    var a = Mg(n);
    n = t.focusedElem;
    var o = t.selectionRange;
    if (
      a !== n &&
      n &&
      n.ownerDocument &&
      Tg(n.ownerDocument.documentElement, n)
    ) {
      if (o !== null && zc(n)) {
        if (
          ((t = o.start),
          (a = o.end),
          a === void 0 && (a = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(a, n.value.length));
        else if (
          ((a = ((t = n.ownerDocument || document) && t.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var u = n.textContent.length,
            d = Math.min(o.start, u);
          (o = o.end === void 0 ? d : Math.min(o.end, u)),
            !a.extend && d > o && ((u = o), (o = d), (d = u)),
            (u = Ag(n, d));
          var x = Ag(n, o);
          u &&
            x &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== u.node ||
              a.anchorOffset !== u.offset ||
              a.focusNode !== x.node ||
              a.focusOffset !== x.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            a.removeAllRanges(),
            d > o
              ? (a.addRange(t), a.extend(x.node, x.offset))
              : (t.setEnd(x.node, x.offset), a.addRange(t)));
        }
      }
      for (t = [], a = n; (a = a.parentNode); )
        a.nodeType === 1 &&
          t.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (a = t[n]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var Nw = Un && "documentMode" in document && 11 >= document.documentMode,
    Xa = null,
    Uc = null,
    ul = null,
    Lc = !1;
  function Cg(t, n, a) {
    var o =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Lc ||
      Xa == null ||
      Xa !== Fo(o) ||
      ((o = Xa),
      "selectionStart" in o && zc(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (ul && sl(ul, o)) ||
        ((ul = o),
        (o = zs(Uc, "onSelect")),
        0 < o.length &&
          ((n = new Ko("onSelect", "select", null, n, a)),
          t.push({ event: n, listeners: o }),
          (n.target = Xa))));
  }
  function Jr(t, n) {
    var a = {};
    return (
      (a[t.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + t] = "webkit" + n),
      (a["Moz" + t] = "moz" + n),
      a
    );
  }
  var Fa = {
      animationend: Jr("Animation", "AnimationEnd"),
      animationiteration: Jr("Animation", "AnimationIteration"),
      animationstart: Jr("Animation", "AnimationStart"),
      transitionrun: Jr("Transition", "TransitionRun"),
      transitionstart: Jr("Transition", "TransitionStart"),
      transitioncancel: Jr("Transition", "TransitionCancel"),
      transitionend: Jr("Transition", "TransitionEnd"),
    },
    Hc = {},
    Rg = {};
  Un &&
    ((Rg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Fa.animationend.animation,
      delete Fa.animationiteration.animation,
      delete Fa.animationstart.animation),
    "TransitionEvent" in window || delete Fa.transitionend.transition);
  function ea(t) {
    if (Hc[t]) return Hc[t];
    if (!Fa[t]) return t;
    var n = Fa[t],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in Rg) return (Hc[t] = n[a]);
    return t;
  }
  var Ng = ea("animationend"),
    Og = ea("animationiteration"),
    Dg = ea("animationstart"),
    Ow = ea("transitionrun"),
    Dw = ea("transitionstart"),
    jw = ea("transitioncancel"),
    jg = ea("transitionend"),
    zg = new Map(),
    Ug =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function tn(t, n) {
    zg.set(t, n), Wr(n, [t]);
  }
  var Yt = [],
    Pa = 0,
    kc = 0;
  function Jo() {
    for (var t = Pa, n = (kc = Pa = 0); n < t; ) {
      var a = Yt[n];
      Yt[n++] = null;
      var o = Yt[n];
      Yt[n++] = null;
      var u = Yt[n];
      Yt[n++] = null;
      var d = Yt[n];
      if (((Yt[n++] = null), o !== null && u !== null)) {
        var x = o.pending;
        x === null ? (u.next = u) : ((u.next = x.next), (x.next = u)),
          (o.pending = u);
      }
      d !== 0 && Lg(a, u, d);
    }
  }
  function es(t, n, a, o) {
    (Yt[Pa++] = t),
      (Yt[Pa++] = n),
      (Yt[Pa++] = a),
      (Yt[Pa++] = o),
      (kc |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o);
  }
  function Bc(t, n, a, o) {
    return es(t, n, a, o), ts(t);
  }
  function gr(t, n) {
    return es(t, null, null, n), ts(t);
  }
  function Lg(t, n, a) {
    t.lanes |= a;
    var o = t.alternate;
    o !== null && (o.lanes |= a);
    for (var u = !1, d = t.return; d !== null; )
      (d.childLanes |= a),
        (o = d.alternate),
        o !== null && (o.childLanes |= a),
        d.tag === 22 &&
          ((t = d.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = d),
        (d = d.return);
    u &&
      n !== null &&
      t.tag === 3 &&
      ((d = t.stateNode),
      (u = 31 - Ot(a)),
      (d = d.hiddenUpdates),
      (t = d[u]),
      t === null ? (d[u] = [n]) : t.push(n),
      (n.lane = a | 536870912));
  }
  function ts(t) {
    if (50 < zl) throw ((zl = 0), (Pf = null), Error(l(185)));
    for (var n = t.return; n !== null; ) (t = n), (n = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Qa = {},
    Hg = new WeakMap();
  function Gt(t, n) {
    if (typeof t == "object" && t !== null) {
      var a = Hg.get(t);
      return a !== void 0
        ? a
        : ((n = { value: t, source: n, stack: ee(n) }), Hg.set(t, n), n);
    }
    return { value: t, source: n, stack: ee(n) };
  }
  var $a = [],
    Za = 0,
    ns = null,
    rs = 0,
    Xt = [],
    Ft = 0,
    ta = null,
    Hn = 1,
    kn = "";
  function na(t, n) {
    ($a[Za++] = rs), ($a[Za++] = ns), (ns = t), (rs = n);
  }
  function kg(t, n, a) {
    (Xt[Ft++] = Hn), (Xt[Ft++] = kn), (Xt[Ft++] = ta), (ta = t);
    var o = Hn;
    t = kn;
    var u = 32 - Ot(o) - 1;
    (o &= ~(1 << u)), (a += 1);
    var d = 32 - Ot(n) + u;
    if (30 < d) {
      var x = u - (u % 5);
      (d = (o & ((1 << x) - 1)).toString(32)),
        (o >>= x),
        (u -= x),
        (Hn = (1 << (32 - Ot(n) + u)) | (a << u) | o),
        (kn = d + t);
    } else (Hn = (1 << d) | (a << u) | o), (kn = t);
  }
  function Vc(t) {
    t.return !== null && (na(t, 1), kg(t, 1, 0));
  }
  function qc(t) {
    for (; t === ns; )
      (ns = $a[--Za]), ($a[Za] = null), (rs = $a[--Za]), ($a[Za] = null);
    for (; t === ta; )
      (ta = Xt[--Ft]),
        (Xt[Ft] = null),
        (kn = Xt[--Ft]),
        (Xt[Ft] = null),
        (Hn = Xt[--Ft]),
        (Xt[Ft] = null);
  }
  var St = null,
    mt = null,
    ze = !1,
    nn = null,
    vn = !1,
    Yc = Error(l(519));
  function ra(t) {
    var n = Error(l(418, ""));
    throw (dl(Gt(n, t)), Yc);
  }
  function Bg(t) {
    var n = t.stateNode,
      a = t.type,
      o = t.memoizedProps;
    switch (((n[vt] = t), (n[_t] = o), a)) {
      case "dialog":
        Oe("cancel", n), Oe("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Oe("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ll.length; a++) Oe(Ll[a], n);
        break;
      case "source":
        Oe("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Oe("error", n), Oe("load", n);
        break;
      case "details":
        Oe("toggle", n);
        break;
      case "input":
        Oe("invalid", n),
          eg(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          ),
          Xo(n);
        break;
      case "select":
        Oe("invalid", n);
        break;
      case "textarea":
        Oe("invalid", n), ng(n, o.value, o.defaultValue, o.children), Xo(n);
    }
    (a = o.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      o.suppressHydrationWarning === !0 ||
      $0(n.textContent, a)
        ? (o.popover != null && (Oe("beforetoggle", n), Oe("toggle", n)),
          o.onScroll != null && Oe("scroll", n),
          o.onScrollEnd != null && Oe("scrollend", n),
          o.onClick != null && (n.onclick = Us),
          (n = !0))
        : (n = !1),
      n || ra(t);
  }
  function Vg(t) {
    for (St = t.return; St; )
      switch (St.tag) {
        case 3:
        case 27:
          vn = !0;
          return;
        case 5:
        case 13:
          vn = !1;
          return;
        default:
          St = St.return;
      }
  }
  function cl(t) {
    if (t !== St) return !1;
    if (!ze) return Vg(t), (ze = !0), !1;
    var n = !1,
      a;
    if (
      ((a = t.tag !== 3 && t.tag !== 27) &&
        ((a = t.tag === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || ud(t.type, t.memoizedProps))),
        (a = !a)),
      a && (n = !0),
      n && mt && ra(t),
      Vg(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(l(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === "/$")) {
              if (n === 0) {
                mt = an(t.nextSibling);
                break e;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          t = t.nextSibling;
        }
        mt = null;
      }
    } else mt = St ? an(t.stateNode.nextSibling) : null;
    return !0;
  }
  function fl() {
    (mt = St = null), (ze = !1);
  }
  function dl(t) {
    nn === null ? (nn = [t]) : nn.push(t);
  }
  var hl = Error(l(460)),
    qg = Error(l(474)),
    Gc = { then: function () {} };
  function Yg(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function as() {}
  function Gg(t, n, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(n) : a !== n && (n.then(as, as), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), t === hl ? Error(l(483)) : t);
      default:
        if (typeof n.status == "string") n.then(as, as);
        else {
          if (((t = qe), t !== null && 100 < t.shellSuspendCounter))
            throw Error(l(482));
          (t = n),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (n.status === "pending") {
                  var u = n;
                  (u.status = "fulfilled"), (u.value = o);
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var u = n;
                  (u.status = "rejected"), (u.reason = o);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), t === hl ? Error(l(483)) : t);
        }
        throw ((ml = n), hl);
    }
  }
  var ml = null;
  function Xg() {
    if (ml === null) throw Error(l(459));
    var t = ml;
    return (ml = null), t;
  }
  var Ka = null,
    gl = 0;
  function is(t) {
    var n = gl;
    return (gl += 1), Ka === null && (Ka = []), Gg(Ka, t, n);
  }
  function pl(t, n) {
    (n = n.props.ref), (t.ref = n !== void 0 ? n : null);
  }
  function ls(t, n) {
    throw n.$$typeof === c
      ? Error(l(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          l(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t
          )
        ));
  }
  function Fg(t) {
    var n = t._init;
    return n(t._payload);
  }
  function Pg(t) {
    function n(H, j) {
      if (t) {
        var k = H.deletions;
        k === null ? ((H.deletions = [j]), (H.flags |= 16)) : k.push(j);
      }
    }
    function a(H, j) {
      if (!t) return null;
      for (; j !== null; ) n(H, j), (j = j.sibling);
      return null;
    }
    function o(H) {
      for (var j = new Map(); H !== null; )
        H.key !== null ? j.set(H.key, H) : j.set(H.index, H), (H = H.sibling);
      return j;
    }
    function u(H, j) {
      return (H = Mr(H, j)), (H.index = 0), (H.sibling = null), H;
    }
    function d(H, j, k) {
      return (
        (H.index = k),
        t
          ? ((k = H.alternate),
            k !== null
              ? ((k = k.index), k < j ? ((H.flags |= 33554434), j) : k)
              : ((H.flags |= 33554434), j))
          : ((H.flags |= 1048576), j)
      );
    }
    function x(H) {
      return t && H.alternate === null && (H.flags |= 33554434), H;
    }
    function E(H, j, k, K) {
      return j === null || j.tag !== 6
        ? ((j = kf(k, H.mode, K)), (j.return = H), j)
        : ((j = u(j, k)), (j.return = H), j);
    }
    function C(H, j, k, K) {
      var he = k.type;
      return he === g
        ? Q(H, j, k.props.children, K, k.key)
        : j !== null &&
          (j.elementType === he ||
            (typeof he == "object" &&
              he !== null &&
              he.$$typeof === R &&
              Fg(he) === j.type))
        ? ((j = u(j, k.props)), pl(j, k), (j.return = H), j)
        : ((j = _s(k.type, k.key, k.props, null, H.mode, K)),
          pl(j, k),
          (j.return = H),
          j);
    }
    function U(H, j, k, K) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== k.containerInfo ||
        j.stateNode.implementation !== k.implementation
        ? ((j = Bf(k, H.mode, K)), (j.return = H), j)
        : ((j = u(j, k.children || [])), (j.return = H), j);
    }
    function Q(H, j, k, K, he) {
      return j === null || j.tag !== 7
        ? ((j = ha(k, H.mode, K, he)), (j.return = H), j)
        : ((j = u(j, k)), (j.return = H), j);
    }
    function J(H, j, k) {
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return (j = kf("" + j, H.mode, k)), (j.return = H), j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case f:
            return (
              (k = _s(j.type, j.key, j.props, null, H.mode, k)),
              pl(k, j),
              (k.return = H),
              k
            );
          case m:
            return (j = Bf(j, H.mode, k)), (j.return = H), j;
          case R:
            var K = j._init;
            return (j = K(j._payload)), J(H, j, k);
        }
        if (de(j) || z(j))
          return (j = ha(j, H.mode, k, null)), (j.return = H), j;
        if (typeof j.then == "function") return J(H, is(j), k);
        if (j.$$typeof === S) return J(H, Ss(H, j), k);
        ls(H, j);
      }
      return null;
    }
    function V(H, j, k, K) {
      var he = j !== null ? j.key : null;
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return he !== null ? null : E(H, j, "" + k, K);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case f:
            return k.key === he ? C(H, j, k, K) : null;
          case m:
            return k.key === he ? U(H, j, k, K) : null;
          case R:
            return (he = k._init), (k = he(k._payload)), V(H, j, k, K);
        }
        if (de(k) || z(k)) return he !== null ? null : Q(H, j, k, K, null);
        if (typeof k.then == "function") return V(H, j, is(k), K);
        if (k.$$typeof === S) return V(H, j, Ss(H, k), K);
        ls(H, k);
      }
      return null;
    }
    function P(H, j, k, K, he) {
      if (
        (typeof K == "string" && K !== "") ||
        typeof K == "number" ||
        typeof K == "bigint"
      )
        return (H = H.get(k) || null), E(j, H, "" + K, he);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case f:
            return (
              (H = H.get(K.key === null ? k : K.key) || null), C(j, H, K, he)
            );
          case m:
            return (
              (H = H.get(K.key === null ? k : K.key) || null), U(j, H, K, he)
            );
          case R:
            var Me = K._init;
            return (K = Me(K._payload)), P(H, j, k, K, he);
        }
        if (de(K) || z(K)) return (H = H.get(k) || null), Q(j, H, K, he, null);
        if (typeof K.then == "function") return P(H, j, k, is(K), he);
        if (K.$$typeof === S) return P(H, j, k, Ss(j, K), he);
        ls(j, K);
      }
      return null;
    }
    function ve(H, j, k, K) {
      for (
        var he = null, Me = null, be = j, Se = (j = 0), ut = null;
        be !== null && Se < k.length;
        Se++
      ) {
        be.index > Se ? ((ut = be), (be = null)) : (ut = be.sibling);
        var Ue = V(H, be, k[Se], K);
        if (Ue === null) {
          be === null && (be = ut);
          break;
        }
        t && be && Ue.alternate === null && n(H, be),
          (j = d(Ue, j, Se)),
          Me === null ? (he = Ue) : (Me.sibling = Ue),
          (Me = Ue),
          (be = ut);
      }
      if (Se === k.length) return a(H, be), ze && na(H, Se), he;
      if (be === null) {
        for (; Se < k.length; Se++)
          (be = J(H, k[Se], K)),
            be !== null &&
              ((j = d(be, j, Se)),
              Me === null ? (he = be) : (Me.sibling = be),
              (Me = be));
        return ze && na(H, Se), he;
      }
      for (be = o(be); Se < k.length; Se++)
        (ut = P(be, H, Se, k[Se], K)),
          ut !== null &&
            (t &&
              ut.alternate !== null &&
              be.delete(ut.key === null ? Se : ut.key),
            (j = d(ut, j, Se)),
            Me === null ? (he = ut) : (Me.sibling = ut),
            (Me = ut));
      return (
        t &&
          be.forEach(function (zr) {
            return n(H, zr);
          }),
        ze && na(H, Se),
        he
      );
    }
    function we(H, j, k, K) {
      if (k == null) throw Error(l(151));
      for (
        var he = null,
          Me = null,
          be = j,
          Se = (j = 0),
          ut = null,
          Ue = k.next();
        be !== null && !Ue.done;
        Se++, Ue = k.next()
      ) {
        be.index > Se ? ((ut = be), (be = null)) : (ut = be.sibling);
        var zr = V(H, be, Ue.value, K);
        if (zr === null) {
          be === null && (be = ut);
          break;
        }
        t && be && zr.alternate === null && n(H, be),
          (j = d(zr, j, Se)),
          Me === null ? (he = zr) : (Me.sibling = zr),
          (Me = zr),
          (be = ut);
      }
      if (Ue.done) return a(H, be), ze && na(H, Se), he;
      if (be === null) {
        for (; !Ue.done; Se++, Ue = k.next())
          (Ue = J(H, Ue.value, K)),
            Ue !== null &&
              ((j = d(Ue, j, Se)),
              Me === null ? (he = Ue) : (Me.sibling = Ue),
              (Me = Ue));
        return ze && na(H, Se), he;
      }
      for (be = o(be); !Ue.done; Se++, Ue = k.next())
        (Ue = P(be, H, Se, Ue.value, K)),
          Ue !== null &&
            (t &&
              Ue.alternate !== null &&
              be.delete(Ue.key === null ? Se : Ue.key),
            (j = d(Ue, j, Se)),
            Me === null ? (he = Ue) : (Me.sibling = Ue),
            (Me = Ue));
      return (
        t &&
          be.forEach(function (Q2) {
            return n(H, Q2);
          }),
        ze && na(H, Se),
        he
      );
    }
    function Ke(H, j, k, K) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === g &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case f:
            e: {
              for (var he = k.key; j !== null; ) {
                if (j.key === he) {
                  if (((he = k.type), he === g)) {
                    if (j.tag === 7) {
                      a(H, j.sibling),
                        (K = u(j, k.props.children)),
                        (K.return = H),
                        (H = K);
                      break e;
                    }
                  } else if (
                    j.elementType === he ||
                    (typeof he == "object" &&
                      he !== null &&
                      he.$$typeof === R &&
                      Fg(he) === j.type)
                  ) {
                    a(H, j.sibling),
                      (K = u(j, k.props)),
                      pl(K, k),
                      (K.return = H),
                      (H = K);
                    break e;
                  }
                  a(H, j);
                  break;
                } else n(H, j);
                j = j.sibling;
              }
              k.type === g
                ? ((K = ha(k.props.children, H.mode, K, k.key)),
                  (K.return = H),
                  (H = K))
                : ((K = _s(k.type, k.key, k.props, null, H.mode, K)),
                  pl(K, k),
                  (K.return = H),
                  (H = K));
            }
            return x(H);
          case m:
            e: {
              for (he = k.key; j !== null; ) {
                if (j.key === he)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === k.containerInfo &&
                    j.stateNode.implementation === k.implementation
                  ) {
                    a(H, j.sibling),
                      (K = u(j, k.children || [])),
                      (K.return = H),
                      (H = K);
                    break e;
                  } else {
                    a(H, j);
                    break;
                  }
                else n(H, j);
                j = j.sibling;
              }
              (K = Bf(k, H.mode, K)), (K.return = H), (H = K);
            }
            return x(H);
          case R:
            return (he = k._init), (k = he(k._payload)), Ke(H, j, k, K);
        }
        if (de(k)) return ve(H, j, k, K);
        if (z(k)) {
          if (((he = z(k)), typeof he != "function")) throw Error(l(150));
          return (k = he.call(k)), we(H, j, k, K);
        }
        if (typeof k.then == "function") return Ke(H, j, is(k), K);
        if (k.$$typeof === S) return Ke(H, j, Ss(H, k), K);
        ls(H, k);
      }
      return (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
        ? ((k = "" + k),
          j !== null && j.tag === 6
            ? (a(H, j.sibling), (K = u(j, k)), (K.return = H), (H = K))
            : (a(H, j), (K = kf(k, H.mode, K)), (K.return = H), (H = K)),
          x(H))
        : a(H, j);
    }
    return function (H, j, k, K) {
      try {
        gl = 0;
        var he = Ke(H, j, k, K);
        return (Ka = null), he;
      } catch (be) {
        if (be === hl) throw be;
        var Me = Zt(29, be, null, H.mode);
        return (Me.lanes = K), (Me.return = H), Me;
      } finally {
      }
    };
  }
  var aa = Pg(!0),
    Qg = Pg(!1),
    Wa = pe(null),
    os = pe(0);
  function $g(t, n) {
    (t = Zn), re(os, t), re(Wa, n), (Zn = t | n.baseLanes);
  }
  function Xc() {
    re(os, Zn), re(Wa, Wa.current);
  }
  function Fc() {
    (Zn = os.current), I(Wa), I(os);
  }
  var Pt = pe(null),
    yn = null;
  function pr(t) {
    var n = t.alternate;
    re(rt, rt.current & 1),
      re(Pt, t),
      yn === null &&
        (n === null || Wa.current !== null || n.memoizedState !== null) &&
        (yn = t);
  }
  function Zg(t) {
    if (t.tag === 22) {
      if ((re(rt, rt.current), re(Pt, t), yn === null)) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (yn = t);
      }
    } else vr();
  }
  function vr() {
    re(rt, rt.current), re(Pt, Pt.current);
  }
  function Bn(t) {
    I(Pt), yn === t && (yn = null), I(rt);
  }
  var rt = pe(0);
  function ss(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var zw =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                t.forEach(function (a) {
                  return a();
                });
            };
          },
    Uw = e.unstable_scheduleCallback,
    Lw = e.unstable_NormalPriority,
    at = {
      $$typeof: S,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Pc() {
    return { controller: new zw(), data: new Map(), refCount: 0 };
  }
  function vl(t) {
    t.refCount--,
      t.refCount === 0 &&
        Uw(Lw, function () {
          t.controller.abort();
        });
  }
  var yl = null,
    Qc = 0,
    Ia = 0,
    Ja = null;
  function Hw(t, n) {
    if (yl === null) {
      var a = (yl = []);
      (Qc = 0),
        (Ia = ed()),
        (Ja = {
          status: "pending",
          value: void 0,
          then: function (o) {
            a.push(o);
          },
        });
    }
    return Qc++, n.then(Kg, Kg), n;
  }
  function Kg() {
    if (--Qc === 0 && yl !== null) {
      Ja !== null && (Ja.status = "fulfilled");
      var t = yl;
      (yl = null), (Ia = 0), (Ja = null);
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function kw(t, n) {
    var a = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      t.then(
        function () {
          (o.status = "fulfilled"), (o.value = n);
          for (var u = 0; u < a.length; u++) (0, a[u])(n);
        },
        function (u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        }
      ),
      o
    );
  }
  var Wg = Z.S;
  Z.S = function (t, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      Hw(t, n),
      Wg !== null && Wg(t, n);
  };
  var ia = pe(null);
  function $c() {
    var t = ia.current;
    return t !== null ? t : qe.pooledCache;
  }
  function us(t, n) {
    n === null ? re(ia, ia.current) : re(ia, n.pool);
  }
  function Ig() {
    var t = $c();
    return t === null ? null : { parent: at._currentValue, pool: t };
  }
  var yr = 0,
    Te = null,
    He = null,
    Je = null,
    cs = !1,
    ei = !1,
    la = !1,
    fs = 0,
    xl = 0,
    ti = null,
    Bw = 0;
  function Ie() {
    throw Error(l(321));
  }
  function Zc(t, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < t.length; a++)
      if (!Dt(t[a], n[a])) return !1;
    return !0;
  }
  function Kc(t, n, a, o, u, d) {
    return (
      (yr = d),
      (Te = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (Z.H = t === null || t.memoizedState === null ? oa : xr),
      (la = !1),
      (d = a(o, u)),
      (la = !1),
      ei && (d = ep(n, a, o, u)),
      Jg(t),
      d
    );
  }
  function Jg(t) {
    Z.H = xn;
    var n = He !== null && He.next !== null;
    if (((yr = 0), (Je = He = Te = null), (cs = !1), (xl = 0), (ti = null), n))
      throw Error(l(300));
    t === null ||
      ot ||
      ((t = t.dependencies), t !== null && bs(t) && (ot = !0));
  }
  function ep(t, n, a, o) {
    Te = t;
    var u = 0;
    do {
      if ((ei && (ti = null), (xl = 0), (ei = !1), 25 <= u))
        throw Error(l(301));
      if (((u += 1), (Je = He = null), t.updateQueue != null)) {
        var d = t.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (Z.H = sa), (d = n(a, o));
    } while (ei);
    return d;
  }
  function Vw() {
    var t = Z.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? bl(n) : n),
      (t = t.useState()[0]),
      (He !== null ? He.memoizedState : null) !== t && (Te.flags |= 1024),
      n
    );
  }
  function Wc() {
    var t = fs !== 0;
    return (fs = 0), t;
  }
  function Ic(t, n, a) {
    (n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~a);
  }
  function Jc(t) {
    if (cs) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), (t = t.next);
      }
      cs = !1;
    }
    (yr = 0), (Je = He = Te = null), (ei = !1), (xl = fs = 0), (ti = null);
  }
  function Tt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Je === null ? (Te.memoizedState = Je = t) : (Je = Je.next = t), Je;
  }
  function et() {
    if (He === null) {
      var t = Te.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = He.next;
    var n = Je === null ? Te.memoizedState : Je.next;
    if (n !== null) (Je = n), (He = t);
    else {
      if (t === null)
        throw Te.alternate === null ? Error(l(467)) : Error(l(310));
      (He = t),
        (t = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null,
        }),
        Je === null ? (Te.memoizedState = Je = t) : (Je = Je.next = t);
    }
    return Je;
  }
  var ds;
  ds = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function bl(t) {
    var n = xl;
    return (
      (xl += 1),
      ti === null && (ti = []),
      (t = Gg(ti, t, n)),
      (n = Te),
      (Je === null ? n.memoizedState : Je.next) === null &&
        ((n = n.alternate),
        (Z.H = n === null || n.memoizedState === null ? oa : xr)),
      t
    );
  }
  function hs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return bl(t);
      if (t.$$typeof === S) return yt(t);
    }
    throw Error(l(438, String(t)));
  }
  function ef(t) {
    var n = null,
      a = Te.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var o = Te.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = ds()), (Te.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(t), o = 0; o < t; o++) a[o] = L;
    return n.index++, a;
  }
  function Vn(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function ms(t) {
    var n = et();
    return tf(n, He, t);
  }
  function tf(t, n, a) {
    var o = t.queue;
    if (o === null) throw Error(l(311));
    o.lastRenderedReducer = a;
    var u = t.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (u !== null) {
        var x = u.next;
        (u.next = d.next), (d.next = x);
      }
      (n.baseQueue = u = d), (o.pending = null);
    }
    if (((d = t.baseState), u === null)) t.memoizedState = d;
    else {
      n = u.next;
      var E = (x = null),
        C = null,
        U = n,
        Q = !1;
      do {
        var J = U.lane & -536870913;
        if (J !== U.lane ? (je & J) === J : (yr & J) === J) {
          var V = U.revertLane;
          if (V === 0)
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: U.action,
                  hasEagerState: U.hasEagerState,
                  eagerState: U.eagerState,
                  next: null,
                }),
              J === Ia && (Q = !0);
          else if ((yr & V) === V) {
            (U = U.next), V === Ia && (Q = !0);
            continue;
          } else
            (J = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null,
            }),
              C === null ? ((E = C = J), (x = d)) : (C = C.next = J),
              (Te.lanes |= V),
              (Cr |= V);
          (J = U.action),
            la && a(d, J),
            (d = U.hasEagerState ? U.eagerState : a(d, J));
        } else
          (V = {
            lane: J,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          }),
            C === null ? ((E = C = V), (x = d)) : (C = C.next = V),
            (Te.lanes |= J),
            (Cr |= J);
        U = U.next;
      } while (U !== null && U !== n);
      if (
        (C === null ? (x = d) : (C.next = E),
        !Dt(d, t.memoizedState) && ((ot = !0), Q && ((a = Ja), a !== null)))
      )
        throw a;
      (t.memoizedState = d),
        (t.baseState = x),
        (t.baseQueue = C),
        (o.lastRenderedState = d);
    }
    return u === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function nf(t) {
    var n = et(),
      a = n.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = t;
    var o = a.dispatch,
      u = a.pending,
      d = n.memoizedState;
    if (u !== null) {
      a.pending = null;
      var x = (u = u.next);
      do (d = t(d, x.action)), (x = x.next);
      while (x !== u);
      Dt(d, n.memoizedState) || (ot = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (a.lastRenderedState = d);
    }
    return [d, o];
  }
  function tp(t, n, a) {
    var o = Te,
      u = et(),
      d = ze;
    if (d) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = n();
    var x = !Dt((He || u).memoizedState, a);
    if (
      (x && ((u.memoizedState = a), (ot = !0)),
      (u = u.queue),
      lf(ap.bind(null, o, u, t), [t]),
      u.getSnapshot !== n || x || (Je !== null && Je.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        ni(9, rp.bind(null, o, u, a, n), { destroy: void 0 }, null),
        qe === null)
      )
        throw Error(l(349));
      d || (yr & 60) !== 0 || np(o, n, a);
    }
    return a;
  }
  function np(t, n, a) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: a }),
      (n = Te.updateQueue),
      n === null
        ? ((n = ds()), (Te.updateQueue = n), (n.stores = [t]))
        : ((a = n.stores), a === null ? (n.stores = [t]) : a.push(t));
  }
  function rp(t, n, a, o) {
    (n.value = a), (n.getSnapshot = o), ip(n) && lp(t);
  }
  function ap(t, n, a) {
    return a(function () {
      ip(n) && lp(t);
    });
  }
  function ip(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var a = n();
      return !Dt(t, a);
    } catch {
      return !0;
    }
  }
  function lp(t) {
    var n = gr(t, 2);
    n !== null && wt(n, t, 2);
  }
  function rf(t) {
    var n = Tt();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), la)) {
        dr(!0);
        try {
          a();
        } finally {
          dr(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vn,
        lastRenderedState: t,
      }),
      n
    );
  }
  function op(t, n, a, o) {
    return (t.baseState = a), tf(t, He, typeof o == "function" ? o : Vn);
  }
  function qw(t, n, a, o, u) {
    if (vs(t)) throw Error(l(485));
    if (((t = n.action), t !== null)) {
      var d = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (x) {
          d.listeners.push(x);
        },
      };
      Z.T !== null ? a(!0) : (d.isTransition = !1),
        o(d),
        (a = n.pending),
        a === null
          ? ((d.next = n.pending = d), sp(n, d))
          : ((d.next = a.next), (n.pending = a.next = d));
    }
  }
  function sp(t, n) {
    var a = n.action,
      o = n.payload,
      u = t.state;
    if (n.isTransition) {
      var d = Z.T,
        x = {};
      Z.T = x;
      try {
        var E = a(u, o),
          C = Z.S;
        C !== null && C(x, E), up(t, n, E);
      } catch (U) {
        af(t, n, U);
      } finally {
        Z.T = d;
      }
    } else
      try {
        (d = a(u, o)), up(t, n, d);
      } catch (U) {
        af(t, n, U);
      }
  }
  function up(t, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (o) {
            cp(t, n, o);
          },
          function (o) {
            return af(t, n, o);
          }
        )
      : cp(t, n, a);
  }
  function cp(t, n, a) {
    (n.status = "fulfilled"),
      (n.value = a),
      fp(n),
      (t.state = a),
      (n = t.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (t.pending = null) : ((a = a.next), (n.next = a), sp(t, a)));
  }
  function af(t, n, a) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do (n.status = "rejected"), (n.reason = a), fp(n), (n = n.next);
      while (n !== o);
    }
    t.action = null;
  }
  function fp(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function dp(t, n) {
    return n;
  }
  function hp(t, n) {
    if (ze) {
      var a = qe.formState;
      if (a !== null) {
        e: {
          var o = Te;
          if (ze) {
            if (mt) {
              t: {
                for (var u = mt, d = vn; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (((u = an(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (d = u.data), (u = d === "F!" || d === "F" ? u : null);
              }
              if (u) {
                (mt = an(u.nextSibling)), (o = u.data === "F!");
                break e;
              }
            }
            ra(o);
          }
          o = !1;
        }
        o && (n = a[0]);
      }
    }
    return (
      (a = Tt()),
      (a.memoizedState = a.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dp,
        lastRenderedState: n,
      }),
      (a.queue = o),
      (a = Op.bind(null, Te, o)),
      (o.dispatch = a),
      (o = rf(!1)),
      (d = ff.bind(null, Te, !1, o.queue)),
      (o = Tt()),
      (u = { state: n, dispatch: null, action: t, pending: null }),
      (o.queue = u),
      (a = qw.bind(null, Te, u, d, a)),
      (u.dispatch = a),
      (o.memoizedState = t),
      [n, a, !1]
    );
  }
  function mp(t) {
    var n = et();
    return gp(n, He, t);
  }
  function gp(t, n, a) {
    (n = tf(t, n, dp)[0]),
      (t = ms(Vn)[0]),
      (n =
        typeof n == "object" && n !== null && typeof n.then == "function"
          ? bl(n)
          : n);
    var o = et(),
      u = o.queue,
      d = u.dispatch;
    return (
      a !== o.memoizedState &&
        ((Te.flags |= 2048),
        ni(9, Yw.bind(null, u, a), { destroy: void 0 }, null)),
      [n, d, t]
    );
  }
  function Yw(t, n) {
    t.action = n;
  }
  function pp(t) {
    var n = et(),
      a = He;
    if (a !== null) return gp(n, a, t);
    et(), (n = n.memoizedState), (a = et());
    var o = a.queue.dispatch;
    return (a.memoizedState = t), [n, o, !1];
  }
  function ni(t, n, a, o) {
    return (
      (t = { tag: t, create: n, inst: a, deps: o, next: null }),
      (n = Te.updateQueue),
      n === null && ((n = ds()), (Te.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = t.next = t)
        : ((o = a.next), (a.next = t), (t.next = o), (n.lastEffect = t)),
      t
    );
  }
  function vp() {
    return et().memoizedState;
  }
  function gs(t, n, a, o) {
    var u = Tt();
    (Te.flags |= t),
      (u.memoizedState = ni(
        1 | n,
        a,
        { destroy: void 0 },
        o === void 0 ? null : o
      ));
  }
  function ps(t, n, a, o) {
    var u = et();
    o = o === void 0 ? null : o;
    var d = u.memoizedState.inst;
    He !== null && o !== null && Zc(o, He.memoizedState.deps)
      ? (u.memoizedState = ni(n, a, d, o))
      : ((Te.flags |= t), (u.memoizedState = ni(1 | n, a, d, o)));
  }
  function yp(t, n) {
    gs(8390656, 8, t, n);
  }
  function lf(t, n) {
    ps(2048, 8, t, n);
  }
  function xp(t, n) {
    return ps(4, 2, t, n);
  }
  function bp(t, n) {
    return ps(4, 4, t, n);
  }
  function Sp(t, n) {
    if (typeof n == "function") {
      t = t();
      var a = n(t);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function wp(t, n, a) {
    (a = a != null ? a.concat([t]) : null), ps(4, 4, Sp.bind(null, n, t), a);
  }
  function of() {}
  function Ep(t, n) {
    var a = et();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && Zc(n, o[1]) ? o[0] : ((a.memoizedState = [t, n]), t);
  }
  function _p(t, n) {
    var a = et();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && Zc(n, o[1])) return o[0];
    if (((o = t()), la)) {
      dr(!0);
      try {
        t();
      } finally {
        dr(!1);
      }
    }
    return (a.memoizedState = [o, n]), o;
  }
  function sf(t, n, a) {
    return a === void 0 || (yr & 1073741824) !== 0
      ? (t.memoizedState = n)
      : ((t.memoizedState = a), (t = T0()), (Te.lanes |= t), (Cr |= t), a);
  }
  function Ap(t, n, a, o) {
    return Dt(a, n)
      ? a
      : Wa.current !== null
      ? ((t = sf(t, a, o)), Dt(t, n) || (ot = !0), t)
      : (yr & 42) === 0
      ? ((ot = !0), (t.memoizedState = a))
      : ((t = T0()), (Te.lanes |= t), (Cr |= t), n);
  }
  function Tp(t, n, a, o, u) {
    var d = le.p;
    le.p = d !== 0 && 8 > d ? d : 8;
    var x = Z.T,
      E = {};
    (Z.T = E), ff(t, !1, n, a);
    try {
      var C = u(),
        U = Z.S;
      if (
        (U !== null && U(E, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var Q = kw(C, o);
        Sl(t, n, Q, Lt(t));
      } else Sl(t, n, o, Lt(t));
    } catch (J) {
      Sl(t, n, { then: function () {}, status: "rejected", reason: J }, Lt());
    } finally {
      (le.p = d), (Z.T = x);
    }
  }
  function Gw() {}
  function uf(t, n, a, o) {
    if (t.tag !== 5) throw Error(l(476));
    var u = Mp(t).queue;
    Tp(
      t,
      u,
      n,
      ye,
      a === null
        ? Gw
        : function () {
            return Cp(t), a(o);
          }
    );
  }
  function Mp(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ye,
      baseState: ye,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vn,
        lastRenderedState: ye,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function Cp(t) {
    var n = Mp(t).next.queue;
    Sl(t, n, {}, Lt());
  }
  function cf() {
    return yt(ql);
  }
  function Rp() {
    return et().memoizedState;
  }
  function Np() {
    return et().memoizedState;
  }
  function Xw(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = Lt();
          t = wr(a);
          var o = Er(n, t, a);
          o !== null && (wt(o, n, a), _l(o, n, a)),
            (n = { cache: Pc() }),
            (t.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function Fw(t, n, a) {
    var o = Lt();
    (a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vs(t)
        ? Dp(n, a)
        : ((a = Bc(t, n, a, o)), a !== null && (wt(a, t, o), jp(a, n, o)));
  }
  function Op(t, n, a) {
    var o = Lt();
    Sl(t, n, a, o);
  }
  function Sl(t, n, a, o) {
    var u = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vs(t)) Dp(n, u);
    else {
      var d = t.alternate;
      if (
        t.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var x = n.lastRenderedState,
            E = d(x, a);
          if (((u.hasEagerState = !0), (u.eagerState = E), Dt(E, x)))
            return es(t, n, u, 0), qe === null && Jo(), !1;
        } catch {
        } finally {
        }
      if (((a = Bc(t, n, u, o)), a !== null))
        return wt(a, t, o), jp(a, n, o), !0;
    }
    return !1;
  }
  function ff(t, n, a, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: ed(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vs(t))
    ) {
      if (n) throw Error(l(479));
    } else (n = Bc(t, a, o, 2)), n !== null && wt(n, t, 2);
  }
  function vs(t) {
    var n = t.alternate;
    return t === Te || (n !== null && n === Te);
  }
  function Dp(t, n) {
    ei = cs = !0;
    var a = t.pending;
    a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (t.pending = n);
  }
  function jp(t, n, a) {
    if ((a & 4194176) !== 0) {
      var o = n.lanes;
      (o &= t.pendingLanes), (a |= o), (n.lanes = a), Xm(t, a);
    }
  }
  var xn = {
    readContext: yt,
    use: hs,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useLayoutEffect: Ie,
    useInsertionEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
  };
  (xn.useCacheRefresh = Ie),
    (xn.useMemoCache = Ie),
    (xn.useHostTransitionStatus = Ie),
    (xn.useFormState = Ie),
    (xn.useActionState = Ie),
    (xn.useOptimistic = Ie);
  var oa = {
    readContext: yt,
    use: hs,
    useCallback: function (t, n) {
      return (Tt().memoizedState = [t, n === void 0 ? null : n]), t;
    },
    useContext: yt,
    useEffect: yp,
    useImperativeHandle: function (t, n, a) {
      (a = a != null ? a.concat([t]) : null),
        gs(4194308, 4, Sp.bind(null, n, t), a);
    },
    useLayoutEffect: function (t, n) {
      return gs(4194308, 4, t, n);
    },
    useInsertionEffect: function (t, n) {
      gs(4, 2, t, n);
    },
    useMemo: function (t, n) {
      var a = Tt();
      n = n === void 0 ? null : n;
      var o = t();
      if (la) {
        dr(!0);
        try {
          t();
        } finally {
          dr(!1);
        }
      }
      return (a.memoizedState = [o, n]), o;
    },
    useReducer: function (t, n, a) {
      var o = Tt();
      if (a !== void 0) {
        var u = a(n);
        if (la) {
          dr(!0);
          try {
            a(n);
          } finally {
            dr(!1);
          }
        }
      } else u = n;
      return (
        (o.memoizedState = o.baseState = u),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: u,
        }),
        (o.queue = t),
        (t = t.dispatch = Fw.bind(null, Te, t)),
        [o.memoizedState, t]
      );
    },
    useRef: function (t) {
      var n = Tt();
      return (t = { current: t }), (n.memoizedState = t);
    },
    useState: function (t) {
      t = rf(t);
      var n = t.queue,
        a = Op.bind(null, Te, n);
      return (n.dispatch = a), [t.memoizedState, a];
    },
    useDebugValue: of,
    useDeferredValue: function (t, n) {
      var a = Tt();
      return sf(a, t, n);
    },
    useTransition: function () {
      var t = rf(!1);
      return (
        (t = Tp.bind(null, Te, t.queue, !0, !1)),
        (Tt().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, n, a) {
      var o = Te,
        u = Tt();
      if (ze) {
        if (a === void 0) throw Error(l(407));
        a = a();
      } else {
        if (((a = n()), qe === null)) throw Error(l(349));
        (je & 60) !== 0 || np(o, n, a);
      }
      u.memoizedState = a;
      var d = { value: a, getSnapshot: n };
      return (
        (u.queue = d),
        yp(ap.bind(null, o, d, t), [t]),
        (o.flags |= 2048),
        ni(9, rp.bind(null, o, d, a, n), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var t = Tt(),
        n = qe.identifierPrefix;
      if (ze) {
        var a = kn,
          o = Hn;
        (a = (o & ~(1 << (32 - Ot(o) - 1))).toString(32) + a),
          (n = ":" + n + "R" + a),
          (a = fs++),
          0 < a && (n += "H" + a.toString(32)),
          (n += ":");
      } else (a = Bw++), (n = ":" + n + "r" + a.toString(32) + ":");
      return (t.memoizedState = n);
    },
    useCacheRefresh: function () {
      return (Tt().memoizedState = Xw.bind(null, Te));
    },
  };
  (oa.useMemoCache = ef),
    (oa.useHostTransitionStatus = cf),
    (oa.useFormState = hp),
    (oa.useActionState = hp),
    (oa.useOptimistic = function (t) {
      var n = Tt();
      n.memoizedState = n.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (n.queue = a), (n = ff.bind(null, Te, !0, a)), (a.dispatch = n), [t, n]
      );
    });
  var xr = {
    readContext: yt,
    use: hs,
    useCallback: Ep,
    useContext: yt,
    useEffect: lf,
    useImperativeHandle: wp,
    useInsertionEffect: xp,
    useLayoutEffect: bp,
    useMemo: _p,
    useReducer: ms,
    useRef: vp,
    useState: function () {
      return ms(Vn);
    },
    useDebugValue: of,
    useDeferredValue: function (t, n) {
      var a = et();
      return Ap(a, He.memoizedState, t, n);
    },
    useTransition: function () {
      var t = ms(Vn)[0],
        n = et().memoizedState;
      return [typeof t == "boolean" ? t : bl(t), n];
    },
    useSyncExternalStore: tp,
    useId: Rp,
  };
  (xr.useCacheRefresh = Np),
    (xr.useMemoCache = ef),
    (xr.useHostTransitionStatus = cf),
    (xr.useFormState = mp),
    (xr.useActionState = mp),
    (xr.useOptimistic = function (t, n) {
      var a = et();
      return op(a, He, t, n);
    });
  var sa = {
    readContext: yt,
    use: hs,
    useCallback: Ep,
    useContext: yt,
    useEffect: lf,
    useImperativeHandle: wp,
    useInsertionEffect: xp,
    useLayoutEffect: bp,
    useMemo: _p,
    useReducer: nf,
    useRef: vp,
    useState: function () {
      return nf(Vn);
    },
    useDebugValue: of,
    useDeferredValue: function (t, n) {
      var a = et();
      return He === null ? sf(a, t, n) : Ap(a, He.memoizedState, t, n);
    },
    useTransition: function () {
      var t = nf(Vn)[0],
        n = et().memoizedState;
      return [typeof t == "boolean" ? t : bl(t), n];
    },
    useSyncExternalStore: tp,
    useId: Rp,
  };
  (sa.useCacheRefresh = Np),
    (sa.useMemoCache = ef),
    (sa.useHostTransitionStatus = cf),
    (sa.useFormState = pp),
    (sa.useActionState = pp),
    (sa.useOptimistic = function (t, n) {
      var a = et();
      return He !== null
        ? op(a, He, t, n)
        : ((a.baseState = t), [t, a.queue.dispatch]);
    });
  function df(t, n, a, o) {
    (n = t.memoizedState),
      (a = a(o, n)),
      (a = a == null ? n : ne({}, n, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var hf = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? X(t) === t : !1;
    },
    enqueueSetState: function (t, n, a) {
      t = t._reactInternals;
      var o = Lt(),
        u = wr(o);
      (u.payload = n),
        a != null && (u.callback = a),
        (n = Er(t, u, o)),
        n !== null && (wt(n, t, o), _l(n, t, o));
    },
    enqueueReplaceState: function (t, n, a) {
      t = t._reactInternals;
      var o = Lt(),
        u = wr(o);
      (u.tag = 1),
        (u.payload = n),
        a != null && (u.callback = a),
        (n = Er(t, u, o)),
        n !== null && (wt(n, t, o), _l(n, t, o));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var a = Lt(),
        o = wr(a);
      (o.tag = 2),
        n != null && (o.callback = n),
        (n = Er(t, o, a)),
        n !== null && (wt(n, t, a), _l(n, t, a));
    },
  };
  function zp(t, n, a, o, u, d, x) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, d, x)
        : n.prototype && n.prototype.isPureReactComponent
        ? !sl(a, o) || !sl(u, d)
        : !0
    );
  }
  function Up(t, n, a, o) {
    (t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, o),
      n.state !== t && hf.enqueueReplaceState(n, n.state, null);
  }
  function ua(t, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var o in n) o !== "ref" && (a[o] = n[o]);
    }
    if ((t = t.defaultProps)) {
      a === n && (a = ne({}, a));
      for (var u in t) a[u] === void 0 && (a[u] = t[u]);
    }
    return a;
  }
  var ys =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Lp(t) {
    ys(t);
  }
  function Hp(t) {
    console.error(t);
  }
  function kp(t) {
    ys(t);
  }
  function xs(t, n) {
    try {
      var a = t.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Bp(t, n, a) {
    try {
      var o = t.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function mf(t, n, a) {
    return (
      (a = wr(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        xs(t, n);
      }),
      a
    );
  }
  function Vp(t) {
    return (t = wr(t)), (t.tag = 3), t;
  }
  function qp(t, n, a, o) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = o.value;
      (t.payload = function () {
        return u(d);
      }),
        (t.callback = function () {
          Bp(n, a, o);
        });
    }
    var x = a.stateNode;
    x !== null &&
      typeof x.componentDidCatch == "function" &&
      (t.callback = function () {
        Bp(n, a, o),
          typeof u != "function" &&
            (Rr === null ? (Rr = new Set([this])) : Rr.add(this));
        var E = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: E !== null ? E : "",
        });
      });
  }
  function Pw(t, n, a, o, u) {
    if (
      ((a.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && El(n, a, u, !0),
        (a = Pt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              yn === null ? Zf() : a.alternate === null && Ze === 0 && (Ze = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              o === Gc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([o])) : n.add(o),
                  Wf(t, o, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              o === Gc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([o])) : a.add(o)),
                  Wf(t, o, u)),
              !1
            );
        }
        throw Error(l(435, a.tag));
      }
      return Wf(t, o, u), Zf(), !1;
    }
    if (ze)
      return (
        (n = Pt.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = u),
            o !== Yc && ((t = Error(l(422), { cause: o })), dl(Gt(t, a))))
          : (o !== Yc && ((n = Error(l(423), { cause: o })), dl(Gt(n, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (o = Gt(o, a)),
            (u = mf(t.stateNode, o, u)),
            Rf(t, u),
            Ze !== 4 && (Ze = 2)),
        !1
      );
    var d = Error(l(520), { cause: o });
    if (
      ((d = Gt(d, a)),
      Dl === null ? (Dl = [d]) : Dl.push(d),
      Ze !== 4 && (Ze = 2),
      n === null)
    )
      return !0;
    (o = Gt(o, a)), (a = n);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = u & -u),
            (a.lanes |= t),
            (t = mf(a.stateNode, o, t)),
            Rf(a, t),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (d = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (Rr === null || !Rr.has(d)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = Vp(u)),
              qp(u, t, a, o),
              Rf(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Yp = Error(l(461)),
    ot = !1;
  function gt(t, n, a, o) {
    n.child = t === null ? Qg(n, null, a, o) : aa(n, t.child, a, o);
  }
  function Gp(t, n, a, o, u) {
    a = a.render;
    var d = n.ref;
    if ("ref" in o) {
      var x = {};
      for (var E in o) E !== "ref" && (x[E] = o[E]);
    } else x = o;
    return (
      fa(n),
      (o = Kc(t, n, a, x, d, u)),
      (E = Wc()),
      t !== null && !ot
        ? (Ic(t, n, u), qn(t, n, u))
        : (ze && E && Vc(n), (n.flags |= 1), gt(t, n, o, u), n.child)
    );
  }
  function Xp(t, n, a, o, u) {
    if (t === null) {
      var d = a.type;
      return typeof d == "function" &&
        !Hf(d) &&
        d.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = d), Fp(t, n, d, o, u))
        : ((t = _s(a.type, null, o, n, n.mode, u)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((d = t.child), !Ef(t, u))) {
      var x = d.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : sl), a(x, o) && t.ref === n.ref)
      )
        return qn(t, n, u);
    }
    return (
      (n.flags |= 1),
      (t = Mr(d, o)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Fp(t, n, a, o, u) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (sl(d, o) && t.ref === n.ref)
        if (((ot = !1), (n.pendingProps = o = d), Ef(t, u)))
          (t.flags & 131072) !== 0 && (ot = !0);
        else return (n.lanes = t.lanes), qn(t, n, u);
    }
    return gf(t, n, a, o, u);
  }
  function Pp(t, n, a) {
    var o = n.pendingProps,
      u = o.children,
      d = (n.stateNode._pendingVisibility & 2) !== 0,
      x = t !== null ? t.memoizedState : null;
    if ((wl(t, n), o.mode === "hidden" || d)) {
      if ((n.flags & 128) !== 0) {
        if (((o = x !== null ? x.baseLanes | a : a), t !== null)) {
          for (u = n.child = t.child, d = 0; u !== null; )
            (d = d | u.lanes | u.childLanes), (u = u.sibling);
          n.childLanes = d & ~o;
        } else (n.childLanes = 0), (n.child = null);
        return Qp(t, n, o, a);
      }
      if ((a & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && us(n, x !== null ? x.cachePool : null),
          x !== null ? $g(n, x) : Xc(),
          Zg(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Qp(t, n, x !== null ? x.baseLanes | a : a, a)
        );
    } else
      x !== null
        ? (us(n, x.cachePool), $g(n, x), vr(), (n.memoizedState = null))
        : (t !== null && us(n, null), Xc(), vr());
    return gt(t, n, u, a), n.child;
  }
  function Qp(t, n, a, o) {
    var u = $c();
    return (
      (u = u === null ? null : { parent: at._currentValue, pool: u }),
      (n.memoizedState = { baseLanes: a, cachePool: u }),
      t !== null && us(n, null),
      Xc(),
      Zg(n),
      t !== null && El(t, n, o, !0),
      null
    );
  }
  function wl(t, n) {
    var a = n.ref;
    if (a === null) t !== null && t.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(l(284));
      (t === null || t.ref !== a) && (n.flags |= 2097664);
    }
  }
  function gf(t, n, a, o, u) {
    return (
      fa(n),
      (a = Kc(t, n, a, o, void 0, u)),
      (o = Wc()),
      t !== null && !ot
        ? (Ic(t, n, u), qn(t, n, u))
        : (ze && o && Vc(n), (n.flags |= 1), gt(t, n, a, u), n.child)
    );
  }
  function $p(t, n, a, o, u, d) {
    return (
      fa(n),
      (n.updateQueue = null),
      (a = ep(n, o, a, u)),
      Jg(t),
      (o = Wc()),
      t !== null && !ot
        ? (Ic(t, n, d), qn(t, n, d))
        : (ze && o && Vc(n), (n.flags |= 1), gt(t, n, a, d), n.child)
    );
  }
  function Zp(t, n, a, o, u) {
    if ((fa(n), n.stateNode === null)) {
      var d = Qa,
        x = a.contextType;
      typeof x == "object" && x !== null && (d = yt(x)),
        (d = new a(o, d)),
        (n.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = hf),
        (n.stateNode = d),
        (d._reactInternals = n),
        (d = n.stateNode),
        (d.props = o),
        (d.state = n.memoizedState),
        (d.refs = {}),
        Mf(n),
        (x = a.contextType),
        (d.context = typeof x == "object" && x !== null ? yt(x) : Qa),
        (d.state = n.memoizedState),
        (x = a.getDerivedStateFromProps),
        typeof x == "function" && (df(n, a, x, o), (d.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((x = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          x !== d.state && hf.enqueueReplaceState(d, d.state, null),
          Tl(n, o, d, u),
          Al(),
          (d.state = n.memoizedState)),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0);
    } else if (t === null) {
      d = n.stateNode;
      var E = n.memoizedProps,
        C = ua(a, E);
      d.props = C;
      var U = d.context,
        Q = a.contextType;
      (x = Qa), typeof Q == "object" && Q !== null && (x = yt(Q));
      var J = a.getDerivedStateFromProps;
      (Q =
        typeof J == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (E = n.pendingProps !== E),
        Q ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((E || U !== x) && Up(n, d, o, x)),
        (Sr = !1);
      var V = n.memoizedState;
      (d.state = V),
        Tl(n, o, d, u),
        Al(),
        (U = n.memoizedState),
        E || V !== U || Sr
          ? (typeof J == "function" && (df(n, a, J, o), (U = n.memoizedState)),
            (C = Sr || zp(n, a, C, o, V, U, x))
              ? (Q ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = U)),
            (d.props = o),
            (d.state = U),
            (d.context = x),
            (o = C))
          : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1));
    } else {
      (d = n.stateNode),
        Cf(t, n),
        (x = n.memoizedProps),
        (Q = ua(a, x)),
        (d.props = Q),
        (J = n.pendingProps),
        (V = d.context),
        (U = a.contextType),
        (C = Qa),
        typeof U == "object" && U !== null && (C = yt(U)),
        (E = a.getDerivedStateFromProps),
        (U =
          typeof E == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((x !== J || V !== C) && Up(n, d, o, C)),
        (Sr = !1),
        (V = n.memoizedState),
        (d.state = V),
        Tl(n, o, d, u),
        Al();
      var P = n.memoizedState;
      x !== J ||
      V !== P ||
      Sr ||
      (t !== null && t.dependencies !== null && bs(t.dependencies))
        ? (typeof E == "function" && (df(n, a, E, o), (P = n.memoizedState)),
          (Q =
            Sr ||
            zp(n, a, Q, o, V, P, C) ||
            (t !== null && t.dependencies !== null && bs(t.dependencies)))
            ? (U ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, P, C),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, P, C)),
              typeof d.componentDidUpdate == "function" && (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (x === t.memoizedProps && V === t.memoizedState) ||
                (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (x === t.memoizedProps && V === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = P)),
          (d.props = o),
          (d.state = P),
          (d.context = C),
          (o = Q))
        : (typeof d.componentDidUpdate != "function" ||
            (x === t.memoizedProps && V === t.memoizedState) ||
            (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (x === t.memoizedProps && V === t.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      wl(t, n),
      (o = (n.flags & 128) !== 0),
      d || o
        ? ((d = n.stateNode),
          (a =
            o && typeof a.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (n.flags |= 1),
          t !== null && o
            ? ((n.child = aa(n, t.child, null, u)),
              (n.child = aa(n, null, a, u)))
            : gt(t, n, a, u),
          (n.memoizedState = d.state),
          (t = n.child))
        : (t = qn(t, n, u)),
      t
    );
  }
  function Kp(t, n, a, o) {
    return fl(), (n.flags |= 256), gt(t, n, a, o), n.child;
  }
  var pf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vf(t) {
    return { baseLanes: t, cachePool: Ig() };
  }
  function yf(t, n, a) {
    return (t = t !== null ? t.childLanes & ~a : 0), n && (t |= Kt), t;
  }
  function Wp(t, n, a) {
    var o = n.pendingProps,
      u = !1,
      d = (n.flags & 128) !== 0,
      x;
    if (
      ((x = d) ||
        (x =
          t !== null && t.memoizedState === null ? !1 : (rt.current & 2) !== 0),
      x && ((u = !0), (n.flags &= -129)),
      (x = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (ze) {
        if ((u ? pr(n) : vr(), ze)) {
          var E = mt,
            C;
          if ((C = E)) {
            e: {
              for (C = E, E = vn; C.nodeType !== 8; ) {
                if (!E) {
                  E = null;
                  break e;
                }
                if (((C = an(C.nextSibling)), C === null)) {
                  E = null;
                  break e;
                }
              }
              E = C;
            }
            E !== null
              ? ((n.memoizedState = {
                  dehydrated: E,
                  treeContext: ta !== null ? { id: Hn, overflow: kn } : null,
                  retryLane: 536870912,
                }),
                (C = Zt(18, null, null, 0)),
                (C.stateNode = E),
                (C.return = n),
                (n.child = C),
                (St = n),
                (mt = null),
                (C = !0))
              : (C = !1);
          }
          C || ra(n);
        }
        if (
          ((E = n.memoizedState),
          E !== null && ((E = E.dehydrated), E !== null))
        )
          return E.data === "$!" ? (n.lanes = 16) : (n.lanes = 536870912), null;
        Bn(n);
      }
      return (
        (E = o.children),
        (o = o.fallback),
        u
          ? (vr(),
            (u = n.mode),
            (E = bf({ mode: "hidden", children: E }, u)),
            (o = ha(o, u, a, null)),
            (E.return = n),
            (o.return = n),
            (E.sibling = o),
            (n.child = E),
            (u = n.child),
            (u.memoizedState = vf(a)),
            (u.childLanes = yf(t, x, a)),
            (n.memoizedState = pf),
            o)
          : (pr(n), xf(n, E))
      );
    }
    if (
      ((C = t.memoizedState), C !== null && ((E = C.dehydrated), E !== null))
    ) {
      if (d)
        n.flags & 256
          ? (pr(n), (n.flags &= -257), (n = Sf(t, n, a)))
          : n.memoizedState !== null
          ? (vr(), (n.child = t.child), (n.flags |= 128), (n = null))
          : (vr(),
            (u = o.fallback),
            (E = n.mode),
            (o = bf({ mode: "visible", children: o.children }, E)),
            (u = ha(u, E, a, null)),
            (u.flags |= 2),
            (o.return = n),
            (u.return = n),
            (o.sibling = u),
            (n.child = o),
            aa(n, t.child, null, a),
            (o = n.child),
            (o.memoizedState = vf(a)),
            (o.childLanes = yf(t, x, a)),
            (n.memoizedState = pf),
            (n = u));
      else if ((pr(n), E.data === "$!")) {
        if (((x = E.nextSibling && E.nextSibling.dataset), x)) var U = x.dgst;
        (x = U),
          (o = Error(l(419))),
          (o.stack = ""),
          (o.digest = x),
          dl({ value: o, source: null, stack: null }),
          (n = Sf(t, n, a));
      } else if (
        (ot || El(t, n, a, !1), (x = (a & t.childLanes) !== 0), ot || x)
      ) {
        if (((x = qe), x !== null)) {
          if (((o = a & -a), (o & 42) !== 0)) o = 1;
          else
            switch (o) {
              case 2:
                o = 1;
                break;
              case 8:
                o = 4;
                break;
              case 32:
                o = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                o = 64;
                break;
              case 268435456:
                o = 134217728;
                break;
              default:
                o = 0;
            }
          if (
            ((o = (o & (x.suspendedLanes | a)) !== 0 ? 0 : o),
            o !== 0 && o !== C.retryLane)
          )
            throw ((C.retryLane = o), gr(t, o), wt(x, t, o), Yp);
        }
        E.data === "$?" || Zf(), (n = Sf(t, n, a));
      } else
        E.data === "$?"
          ? ((n.flags |= 128),
            (n.child = t.child),
            (n = o2.bind(null, t)),
            (E._reactRetry = n),
            (n = null))
          : ((t = C.treeContext),
            (mt = an(E.nextSibling)),
            (St = n),
            (ze = !0),
            (nn = null),
            (vn = !1),
            t !== null &&
              ((Xt[Ft++] = Hn),
              (Xt[Ft++] = kn),
              (Xt[Ft++] = ta),
              (Hn = t.id),
              (kn = t.overflow),
              (ta = n)),
            (n = xf(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return u
      ? (vr(),
        (u = o.fallback),
        (E = n.mode),
        (C = t.child),
        (U = C.sibling),
        (o = Mr(C, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = C.subtreeFlags & 31457280),
        U !== null ? (u = Mr(U, u)) : ((u = ha(u, E, a, null)), (u.flags |= 2)),
        (u.return = n),
        (o.return = n),
        (o.sibling = u),
        (n.child = o),
        (o = u),
        (u = n.child),
        (E = t.child.memoizedState),
        E === null
          ? (E = vf(a))
          : ((C = E.cachePool),
            C !== null
              ? ((U = at._currentValue),
                (C = C.parent !== U ? { parent: U, pool: U } : C))
              : (C = Ig()),
            (E = { baseLanes: E.baseLanes | a, cachePool: C })),
        (u.memoizedState = E),
        (u.childLanes = yf(t, x, a)),
        (n.memoizedState = pf),
        o)
      : (pr(n),
        (a = t.child),
        (t = a.sibling),
        (a = Mr(a, { mode: "visible", children: o.children })),
        (a.return = n),
        (a.sibling = null),
        t !== null &&
          ((x = n.deletions),
          x === null ? ((n.deletions = [t]), (n.flags |= 16)) : x.push(t)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function xf(t, n) {
    return (
      (n = bf({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function bf(t, n) {
    return E0(t, n, 0, null);
  }
  function Sf(t, n, a) {
    return (
      aa(n, t.child, null, a),
      (t = xf(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function Ip(t, n, a) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n), Af(t.return, n, a);
  }
  function wf(t, n, a, o, u) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: a,
          tailMode: u,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = a),
        (d.tailMode = u));
  }
  function Jp(t, n, a) {
    var o = n.pendingProps,
      u = o.revealOrder,
      d = o.tail;
    if ((gt(t, n, o.children, a), (o = rt.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (n.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Ip(t, a, n);
          else if (t.tag === 19) Ip(t, a, n);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === n) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      o &= 1;
    }
    switch ((re(rt, o), u)) {
      case "forwards":
        for (a = n.child, u = null; a !== null; )
          (t = a.alternate),
            t !== null && ss(t) === null && (u = a),
            (a = a.sibling);
        (a = u),
          a === null
            ? ((u = n.child), (n.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          wf(n, !1, u, a, d);
        break;
      case "backwards":
        for (a = null, u = n.child, n.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && ss(t) === null)) {
            n.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = a), (a = u), (u = t);
        }
        wf(n, !0, a, null, d);
        break;
      case "together":
        wf(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function qn(t, n, a) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (Cr |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((El(t, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(l(153));
    if (n.child !== null) {
      for (
        t = n.child, a = Mr(t, t.pendingProps), n.child = a, a.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (a = a.sibling = Mr(t, t.pendingProps)),
          (a.return = n);
      a.sibling = null;
    }
    return n.child;
  }
  function Ef(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && bs(t)));
  }
  function Qw(t, n, a) {
    switch (n.tag) {
      case 3:
        Fe(n, n.stateNode.containerInfo),
          br(n, at, t.memoizedState.cache),
          fl();
        break;
      case 27:
      case 5:
        ht(n);
        break;
      case 4:
        Fe(n, n.stateNode.containerInfo);
        break;
      case 10:
        br(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (pr(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
            ? Wp(t, n, a)
            : (pr(n), (t = qn(t, n, a)), t !== null ? t.sibling : null);
        pr(n);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((o = (a & n.childLanes) !== 0),
          o || (El(t, n, a, !1), (o = (a & n.childLanes) !== 0)),
          u)
        ) {
          if (o) return Jp(t, n, a);
          n.flags |= 128;
        }
        if (
          ((u = n.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          re(rt, rt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Pp(t, n, a);
      case 24:
        br(n, at, t.memoizedState.cache);
    }
    return qn(t, n, a);
  }
  function e0(t, n, a) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) ot = !0;
      else {
        if (!Ef(t, a) && (n.flags & 128) === 0) return (ot = !1), Qw(t, n, a);
        ot = (t.flags & 131072) !== 0;
      }
    else (ot = !1), ze && (n.flags & 1048576) !== 0 && kg(n, rs, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          t = n.pendingProps;
          var o = n.elementType,
            u = o._init;
          if (((o = u(o._payload)), (n.type = o), typeof o == "function"))
            Hf(o)
              ? ((t = ua(o, t)), (n.tag = 1), (n = Zp(null, n, o, t, a)))
              : ((n.tag = 0), (n = gf(null, n, o, t, a)));
          else {
            if (o != null) {
              if (((u = o.$$typeof), u === A)) {
                (n.tag = 11), (n = Gp(null, n, o, t, a));
                break e;
              } else if (u === M) {
                (n.tag = 14), (n = Xp(null, n, o, t, a));
                break e;
              }
            }
            throw ((n = te(o) || o), Error(l(306, n, "")));
          }
        }
        return n;
      case 0:
        return gf(t, n, n.type, n.pendingProps, a);
      case 1:
        return (o = n.type), (u = ua(o, n.pendingProps)), Zp(t, n, o, u, a);
      case 3:
        e: {
          if ((Fe(n, n.stateNode.containerInfo), t === null))
            throw Error(l(387));
          var d = n.pendingProps;
          (u = n.memoizedState), (o = u.element), Cf(t, n), Tl(n, d, null, a);
          var x = n.memoizedState;
          if (
            ((d = x.cache),
            br(n, at, d),
            d !== u.cache && Tf(n, [at], a, !0),
            Al(),
            (d = x.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: d, isDehydrated: !1, cache: x.cache }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              n = Kp(t, n, d, a);
              break e;
            } else if (d !== o) {
              (o = Gt(Error(l(424)), n)), dl(o), (n = Kp(t, n, d, a));
              break e;
            } else
              for (
                mt = an(n.stateNode.containerInfo.firstChild),
                  St = n,
                  ze = !0,
                  nn = null,
                  vn = !0,
                  a = Qg(n, null, d, a),
                  n.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((fl(), d === o)) {
              n = qn(t, n, a);
              break e;
            }
            gt(t, n, d, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          wl(t, n),
          t === null
            ? (a = rv(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : ze ||
                ((a = n.type),
                (t = n.pendingProps),
                (o = Ls(Ce.current).createElement(a)),
                (o[vt] = n),
                (o[_t] = t),
                pt(o, a, t),
                lt(o),
                (n.stateNode = o))
            : (n.memoizedState = rv(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ht(n),
          t === null &&
            ze &&
            ((o = n.stateNode = ev(n.type, n.pendingProps, Ce.current)),
            (St = n),
            (vn = !0),
            (mt = an(o.firstChild))),
          (o = n.pendingProps.children),
          t !== null || ze ? gt(t, n, o, a) : (n.child = aa(n, null, o, a)),
          wl(t, n),
          n.child
        );
      case 5:
        return (
          t === null &&
            ze &&
            ((u = o = mt) &&
              ((o = E2(o, n.type, n.pendingProps, vn)),
              o !== null
                ? ((n.stateNode = o),
                  (St = n),
                  (mt = an(o.firstChild)),
                  (vn = !1),
                  (u = !0))
                : (u = !1)),
            u || ra(n)),
          ht(n),
          (u = n.type),
          (d = n.pendingProps),
          (x = t !== null ? t.memoizedProps : null),
          (o = d.children),
          ud(u, d) ? (o = null) : x !== null && ud(u, x) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((u = Kc(t, n, Vw, null, null, a)), (ql._currentValue = u)),
          wl(t, n),
          gt(t, n, o, a),
          n.child
        );
      case 6:
        return (
          t === null &&
            ze &&
            ((t = a = mt) &&
              ((a = _2(a, n.pendingProps, vn)),
              a !== null
                ? ((n.stateNode = a), (St = n), (mt = null), (t = !0))
                : (t = !1)),
            t || ra(n)),
          null
        );
      case 13:
        return Wp(t, n, a);
      case 4:
        return (
          Fe(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          t === null ? (n.child = aa(n, null, o, a)) : gt(t, n, o, a),
          n.child
        );
      case 11:
        return Gp(t, n, n.type, n.pendingProps, a);
      case 7:
        return gt(t, n, n.pendingProps, a), n.child;
      case 8:
        return gt(t, n, n.pendingProps.children, a), n.child;
      case 12:
        return gt(t, n, n.pendingProps.children, a), n.child;
      case 10:
        return (
          (o = n.pendingProps),
          br(n, n.type, o.value),
          gt(t, n, o.children, a),
          n.child
        );
      case 9:
        return (
          (u = n.type._context),
          (o = n.pendingProps.children),
          fa(n),
          (u = yt(u)),
          (o = o(u)),
          (n.flags |= 1),
          gt(t, n, o, a),
          n.child
        );
      case 14:
        return Xp(t, n, n.type, n.pendingProps, a);
      case 15:
        return Fp(t, n, n.type, n.pendingProps, a);
      case 19:
        return Jp(t, n, a);
      case 22:
        return Pp(t, n, a);
      case 24:
        return (
          fa(n),
          (o = yt(at)),
          t === null
            ? ((u = $c()),
              u === null &&
                ((u = qe),
                (d = Pc()),
                (u.pooledCache = d),
                d.refCount++,
                d !== null && (u.pooledCacheLanes |= a),
                (u = d)),
              (n.memoizedState = { parent: o, cache: u }),
              Mf(n),
              br(n, at, u))
            : ((t.lanes & a) !== 0 && (Cf(t, n), Tl(n, null, null, a), Al()),
              (u = t.memoizedState),
              (d = n.memoizedState),
              u.parent !== o
                ? ((u = { parent: o, cache: o }),
                  (n.memoizedState = u),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = u),
                  br(n, at, o))
                : ((o = d.cache),
                  br(n, at, o),
                  o !== u.cache && Tf(n, [at], a, !0))),
          gt(t, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  var _f = pe(null),
    ca = null,
    Yn = null;
  function br(t, n, a) {
    re(_f, n._currentValue), (n._currentValue = a);
  }
  function Gn(t) {
    (t._currentValue = _f.current), I(_f);
  }
  function Af(t, n, a) {
    for (; t !== null; ) {
      var o = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Tf(t, n, a, o) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var x = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var E = d;
          d = u;
          for (var C = 0; C < n.length; C++)
            if (E.context === n[C]) {
              (d.lanes |= a),
                (E = d.alternate),
                E !== null && (E.lanes |= a),
                Af(d.return, a, t),
                o || (x = null);
              break e;
            }
          d = E.next;
        }
      } else if (u.tag === 18) {
        if (((x = u.return), x === null)) throw Error(l(341));
        (x.lanes |= a),
          (d = x.alternate),
          d !== null && (d.lanes |= a),
          Af(x, a, t),
          (x = null);
      } else x = u.child;
      if (x !== null) x.return = u;
      else
        for (x = u; x !== null; ) {
          if (x === t) {
            x = null;
            break;
          }
          if (((u = x.sibling), u !== null)) {
            (u.return = x.return), (x = u);
            break;
          }
          x = x.return;
        }
      u = x;
    }
  }
  function El(t, n, a, o) {
    t = null;
    for (var u = n, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var x = u.alternate;
        if (x === null) throw Error(l(387));
        if (((x = x.memoizedProps), x !== null)) {
          var E = u.type;
          Dt(u.pendingProps.value, x.value) ||
            (t !== null ? t.push(E) : (t = [E]));
        }
      } else if (u === _e.current) {
        if (((x = u.alternate), x === null)) throw Error(l(387));
        x.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(ql) : (t = [ql]));
      }
      u = u.return;
    }
    t !== null && Tf(n, t, a, o), (n.flags |= 262144);
  }
  function bs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Dt(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function fa(t) {
    (ca = t),
      (Yn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function yt(t) {
    return t0(ca, t);
  }
  function Ss(t, n) {
    return ca === null && fa(t), t0(t, n);
  }
  function t0(t, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), Yn === null)) {
      if (t === null) throw Error(l(308));
      (Yn = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288);
    } else Yn = Yn.next = n;
    return a;
  }
  var Sr = !1;
  function Mf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Cf(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function wr(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Er(t, n, a) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Qe & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
        (o.pending = n),
        (n = ts(t)),
        Lg(t, null, a),
        n
      );
    }
    return es(t, o, n, a), ts(t);
  }
  function _l(t, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194176) !== 0))
    ) {
      var o = n.lanes;
      (o &= t.pendingLanes), (a |= o), (n.lanes = a), Xm(t, a);
    }
  }
  function Rf(t, n) {
    var a = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), a === o)) {
      var u = null,
        d = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var x = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          d === null ? (u = d = x) : (d = d.next = x), (a = a.next);
        } while (a !== null);
        d === null ? (u = d = n) : (d = d.next = n);
      } else u = d = n;
      (a = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = a);
      return;
    }
    (t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = n) : (t.next = n),
      (a.lastBaseUpdate = n);
  }
  var Nf = !1;
  function Al() {
    if (Nf) {
      var t = Ja;
      if (t !== null) throw t;
    }
  }
  function Tl(t, n, a, o) {
    Nf = !1;
    var u = t.updateQueue;
    Sr = !1;
    var d = u.firstBaseUpdate,
      x = u.lastBaseUpdate,
      E = u.shared.pending;
    if (E !== null) {
      u.shared.pending = null;
      var C = E,
        U = C.next;
      (C.next = null), x === null ? (d = U) : (x.next = U), (x = C);
      var Q = t.alternate;
      Q !== null &&
        ((Q = Q.updateQueue),
        (E = Q.lastBaseUpdate),
        E !== x &&
          (E === null ? (Q.firstBaseUpdate = U) : (E.next = U),
          (Q.lastBaseUpdate = C)));
    }
    if (d !== null) {
      var J = u.baseState;
      (x = 0), (Q = U = C = null), (E = d);
      do {
        var V = E.lane & -536870913,
          P = V !== E.lane;
        if (P ? (je & V) === V : (o & V) === V) {
          V !== 0 && V === Ia && (Nf = !0),
            Q !== null &&
              (Q = Q.next =
                {
                  lane: 0,
                  tag: E.tag,
                  payload: E.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ve = t,
              we = E;
            V = n;
            var Ke = a;
            switch (we.tag) {
              case 1:
                if (((ve = we.payload), typeof ve == "function")) {
                  J = ve.call(Ke, J, V);
                  break e;
                }
                J = ve;
                break e;
              case 3:
                ve.flags = (ve.flags & -65537) | 128;
              case 0:
                if (
                  ((ve = we.payload),
                  (V = typeof ve == "function" ? ve.call(Ke, J, V) : ve),
                  V == null)
                )
                  break e;
                J = ne({}, J, V);
                break e;
              case 2:
                Sr = !0;
            }
          }
          (V = E.callback),
            V !== null &&
              ((t.flags |= 64),
              P && (t.flags |= 8192),
              (P = u.callbacks),
              P === null ? (u.callbacks = [V]) : P.push(V));
        } else
          (P = {
            lane: V,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            Q === null ? ((U = Q = P), (C = J)) : (Q = Q.next = P),
            (x |= V);
        if (((E = E.next), E === null)) {
          if (((E = u.shared.pending), E === null)) break;
          (P = E),
            (E = P.next),
            (P.next = null),
            (u.lastBaseUpdate = P),
            (u.shared.pending = null);
        }
      } while (!0);
      Q === null && (C = J),
        (u.baseState = C),
        (u.firstBaseUpdate = U),
        (u.lastBaseUpdate = Q),
        d === null && (u.shared.lanes = 0),
        (Cr |= x),
        (t.lanes = x),
        (t.memoizedState = J);
    }
  }
  function n0(t, n) {
    if (typeof t != "function") throw Error(l(191, t));
    t.call(n);
  }
  function r0(t, n) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) n0(a[t], n);
  }
  function Ml(t, n) {
    try {
      var a = n.updateQueue,
        o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            o = void 0;
            var d = a.create,
              x = a.inst;
            (o = d()), (x.destroy = o);
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (E) {
      Be(n, n.return, E);
    }
  }
  function _r(t, n, a) {
    try {
      var o = n.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        o = d;
        do {
          if ((o.tag & t) === t) {
            var x = o.inst,
              E = x.destroy;
            if (E !== void 0) {
              (x.destroy = void 0), (u = n);
              var C = a;
              try {
                E();
              } catch (U) {
                Be(u, C, U);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (U) {
      Be(n, n.return, U);
    }
  }
  function a0(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var a = t.stateNode;
      try {
        r0(n, a);
      } catch (o) {
        Be(t, t.return, o);
      }
    }
  }
  function i0(t, n, a) {
    (a.props = ua(t.type, t.memoizedProps)), (a.state = t.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (o) {
      Be(t, n, o);
    }
  }
  function da(t, n) {
    try {
      var a = t.ref;
      if (a !== null) {
        var o = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = o;
            break;
          default:
            u = o;
        }
        typeof a == "function" ? (t.refCleanup = a(u)) : (a.current = u);
      }
    } catch (d) {
      Be(t, n, d);
    }
  }
  function jt(t, n) {
    var a = t.ref,
      o = t.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          Be(t, n, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Be(t, n, u);
        }
      else a.current = null;
  }
  function l0(t) {
    var n = t.type,
      a = t.memoizedProps,
      o = t.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? (o.src = a.src) : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (u) {
      Be(t, t.return, u);
    }
  }
  function o0(t, n, a) {
    try {
      var o = t.stateNode;
      y2(o, t.type, a, n), (o[_t] = n);
    } catch (u) {
      Be(t, t.return, u);
    }
  }
  function s0(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Of(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || s0(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Df(t, n, a) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode),
        n
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(t, n)
            : a.insertBefore(t, n)
          : (a.nodeType === 8
              ? ((n = a.parentNode), n.insertBefore(t, a))
              : ((n = a), n.appendChild(t)),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = Us));
    else if (o !== 4 && o !== 27 && ((t = t.child), t !== null))
      for (Df(t, n, a), t = t.sibling; t !== null; )
        Df(t, n, a), (t = t.sibling);
  }
  function ws(t, n, a) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode), n ? a.insertBefore(t, n) : a.appendChild(t);
    else if (o !== 4 && o !== 27 && ((t = t.child), t !== null))
      for (ws(t, n, a), t = t.sibling; t !== null; )
        ws(t, n, a), (t = t.sibling);
  }
  var Xn = !1,
    $e = !1,
    jf = !1,
    u0 = typeof WeakSet == "function" ? WeakSet : Set,
    st = null,
    c0 = !1;
  function $w(t, n) {
    if (((t = t.containerInfo), (od = Ys), (t = Mg(t)), zc(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var u = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, d.nodeType;
            } catch {
              a = null;
              break e;
            }
            var x = 0,
              E = -1,
              C = -1,
              U = 0,
              Q = 0,
              J = t,
              V = null;
            t: for (;;) {
              for (
                var P;
                J !== a || (u !== 0 && J.nodeType !== 3) || (E = x + u),
                  J !== d || (o !== 0 && J.nodeType !== 3) || (C = x + o),
                  J.nodeType === 3 && (x += J.nodeValue.length),
                  (P = J.firstChild) !== null;

              )
                (V = J), (J = P);
              for (;;) {
                if (J === t) break t;
                if (
                  (V === a && ++U === u && (E = x),
                  V === d && ++Q === o && (C = x),
                  (P = J.nextSibling) !== null)
                )
                  break;
                (J = V), (V = J.parentNode);
              }
              J = P;
            }
            a = E === -1 || C === -1 ? null : { start: E, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      sd = { focusedElem: t, selectionRange: a }, Ys = !1, st = n;
      st !== null;

    )
      if (
        ((n = st), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = n), (st = t);
      else
        for (; st !== null; ) {
          switch (((n = st), (d = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && d !== null) {
                (t = void 0),
                  (a = n),
                  (u = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = a.stateNode);
                try {
                  var ve = ua(a.type, u, a.elementType === a.type);
                  (t = o.getSnapshotBeforeUpdate(ve, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = t);
                } catch (we) {
                  Be(a, a.return, we);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  dd(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      dd(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(l(163));
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (st = t);
            break;
          }
          st = n.return;
        }
    return (ve = c0), (c0 = !1), ve;
  }
  function f0(t, n, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pn(t, a), o & 4 && Ml(5, a);
        break;
      case 1:
        if ((Pn(t, a), o & 4))
          if (((t = a.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (E) {
              Be(a, a.return, E);
            }
          else {
            var u = ua(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(u, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (E) {
              Be(a, a.return, E);
            }
          }
        o & 64 && a0(a), o & 512 && da(a, a.return);
        break;
      case 3:
        if ((Pn(t, a), o & 64 && ((o = a.updateQueue), o !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            r0(o, t);
          } catch (E) {
            Be(a, a.return, E);
          }
        }
        break;
      case 26:
        Pn(t, a), o & 512 && da(a, a.return);
        break;
      case 27:
      case 5:
        Pn(t, a), n === null && o & 4 && l0(a), o & 512 && da(a, a.return);
        break;
      case 12:
        Pn(t, a);
        break;
      case 13:
        Pn(t, a), o & 4 && m0(t, a);
        break;
      case 22:
        if (((u = a.memoizedState !== null || Xn), !u)) {
          n = (n !== null && n.memoizedState !== null) || $e;
          var d = Xn,
            x = $e;
          (Xn = u),
            ($e = n) && !x ? Ar(t, a, (a.subtreeFlags & 8772) !== 0) : Pn(t, a),
            (Xn = d),
            ($e = x);
        }
        o & 512 &&
          (a.memoizedProps.mode === "manual"
            ? da(a, a.return)
            : jt(a, a.return));
        break;
      default:
        Pn(t, a);
    }
  }
  function d0(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), d0(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && yc(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var tt = null,
    zt = !1;
  function Fn(t, n, a) {
    for (a = a.child; a !== null; ) h0(t, n, a), (a = a.sibling);
  }
  function h0(t, n, a) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
      try {
        Nt.onCommitFiberUnmount(Ki, a);
      } catch {}
    switch (a.tag) {
      case 26:
        $e || jt(a, n),
          Fn(t, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        $e || jt(a, n);
        var o = tt,
          u = zt;
        for (
          tt = a.stateNode, Fn(t, n, a), a = a.stateNode, n = a.attributes;
          n.length;

        )
          a.removeAttributeNode(n[0]);
        yc(a), (tt = o), (zt = u);
        break;
      case 5:
        $e || jt(a, n);
      case 6:
        u = tt;
        var d = zt;
        if (((tt = null), Fn(t, n, a), (tt = u), (zt = d), tt !== null))
          if (zt)
            try {
              (t = tt),
                (o = a.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(o)
                  : t.removeChild(o);
            } catch (x) {
              Be(a, n, x);
            }
          else
            try {
              tt.removeChild(a.stateNode);
            } catch (x) {
              Be(a, n, x);
            }
        break;
      case 18:
        tt !== null &&
          (zt
            ? ((n = tt),
              (a = a.stateNode),
              n.nodeType === 8
                ? fd(n.parentNode, a)
                : n.nodeType === 1 && fd(n, a),
              Fl(n))
            : fd(tt, a.stateNode));
        break;
      case 4:
        (o = tt),
          (u = zt),
          (tt = a.stateNode.containerInfo),
          (zt = !0),
          Fn(t, n, a),
          (tt = o),
          (zt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $e || _r(2, a, n), $e || _r(4, a, n), Fn(t, n, a);
        break;
      case 1:
        $e ||
          (jt(a, n),
          (o = a.stateNode),
          typeof o.componentWillUnmount == "function" && i0(a, n, o)),
          Fn(t, n, a);
        break;
      case 21:
        Fn(t, n, a);
        break;
      case 22:
        $e || jt(a, n),
          ($e = (o = $e) || a.memoizedState !== null),
          Fn(t, n, a),
          ($e = o);
        break;
      default:
        Fn(t, n, a);
    }
  }
  function m0(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Fl(t);
      } catch (a) {
        Be(n, n.return, a);
      }
  }
  function Zw(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new u0()), n;
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new u0()),
          n
        );
      default:
        throw Error(l(435, t.tag));
    }
  }
  function zf(t, n) {
    var a = Zw(t);
    n.forEach(function (o) {
      var u = s2.bind(null, t, o);
      a.has(o) || (a.add(o), o.then(u, u));
    });
  }
  function Qt(t, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var u = a[o],
          d = t,
          x = n,
          E = x;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 27:
            case 5:
              (tt = E.stateNode), (zt = !1);
              break e;
            case 3:
              (tt = E.stateNode.containerInfo), (zt = !0);
              break e;
            case 4:
              (tt = E.stateNode.containerInfo), (zt = !0);
              break e;
          }
          E = E.return;
        }
        if (tt === null) throw Error(l(160));
        h0(d, x, u),
          (tt = null),
          (zt = !1),
          (d = u.alternate),
          d !== null && (d.return = null),
          (u.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) g0(n, t), (n = n.sibling);
  }
  var rn = null;
  function g0(t, n) {
    var a = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Qt(n, t),
          $t(t),
          o & 4 && (_r(3, t, t.return), Ml(3, t), _r(5, t, t.return));
        break;
      case 1:
        Qt(n, t),
          $t(t),
          o & 512 && ($e || a === null || jt(a, a.return)),
          o & 64 &&
            Xn &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? o : a.concat(o)))));
        break;
      case 26:
        var u = rn;
        if (
          (Qt(n, t),
          $t(t),
          o & 512 && ($e || a === null || jt(a, a.return)),
          o & 4)
        ) {
          var d = a !== null ? a.memoizedState : null;
          if (((o = t.memoizedState), a === null))
            if (o === null)
              if (t.stateNode === null) {
                e: {
                  (o = t.type),
                    (a = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (o) {
                    case "title":
                      (d = u.getElementsByTagName("title")[0]),
                        (!d ||
                          d[Ji] ||
                          d[vt] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = u.createElement(o)),
                          u.head.insertBefore(
                            d,
                            u.querySelector("head > title")
                          )),
                        pt(d, o, a),
                        (d[vt] = t),
                        lt(d),
                        (o = d);
                      break e;
                    case "link":
                      var x = lv("link", "href", u).get(o + (a.href || ""));
                      if (x) {
                        for (var E = 0; E < x.length; E++)
                          if (
                            ((d = x[E]),
                            d.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              d.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              d.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              d.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            x.splice(E, 1);
                            break t;
                          }
                      }
                      (d = u.createElement(o)),
                        pt(d, o, a),
                        u.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (x = lv("meta", "content", u).get(
                          o + (a.content || "")
                        ))
                      ) {
                        for (E = 0; E < x.length; E++)
                          if (
                            ((d = x[E]),
                            d.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              d.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              d.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              d.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            x.splice(E, 1);
                            break t;
                          }
                      }
                      (d = u.createElement(o)),
                        pt(d, o, a),
                        u.head.appendChild(d);
                      break;
                    default:
                      throw Error(l(468, o));
                  }
                  (d[vt] = t), lt(d), (o = d);
                }
                t.stateNode = o;
              } else ov(u, t.type, t.stateNode);
            else t.stateNode = iv(u, o, t.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : d.count--,
                o === null
                  ? ov(u, t.type, t.stateNode)
                  : iv(u, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                o0(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (o & 4 && t.alternate === null) {
          (u = t.stateNode), (d = t.memoizedProps);
          try {
            for (var C = u.firstChild; C; ) {
              var U = C.nextSibling,
                Q = C.nodeName;
              C[Ji] ||
                Q === "HEAD" ||
                Q === "BODY" ||
                Q === "SCRIPT" ||
                Q === "STYLE" ||
                (Q === "LINK" && C.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(C),
                (C = U);
            }
            for (var J = t.type, V = u.attributes; V.length; )
              u.removeAttributeNode(V[0]);
            pt(u, J, d), (u[vt] = t), (u[_t] = d);
          } catch (ve) {
            Be(t, t.return, ve);
          }
        }
      case 5:
        if (
          (Qt(n, t),
          $t(t),
          o & 512 && ($e || a === null || jt(a, a.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Va(u, "");
          } catch (ve) {
            Be(t, t.return, ve);
          }
        }
        o & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), o0(t, u, a !== null ? a.memoizedProps : u)),
          o & 1024 && (jf = !0);
        break;
      case 6:
        if ((Qt(n, t), $t(t), o & 4)) {
          if (t.stateNode === null) throw Error(l(162));
          (o = t.memoizedProps), (a = t.stateNode);
          try {
            a.nodeValue = o;
          } catch (ve) {
            Be(t, t.return, ve);
          }
        }
        break;
      case 3:
        if (
          ((Bs = null),
          (u = rn),
          (rn = Hs(n.containerInfo)),
          Qt(n, t),
          (rn = u),
          $t(t),
          o & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Fl(n.containerInfo);
          } catch (ve) {
            Be(t, t.return, ve);
          }
        jf && ((jf = !1), p0(t));
        break;
      case 4:
        (o = rn),
          (rn = Hs(t.stateNode.containerInfo)),
          Qt(n, t),
          $t(t),
          (rn = o);
        break;
      case 12:
        Qt(n, t), $t(t);
        break;
      case 13:
        Qt(n, t),
          $t(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Gf = pn()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), zf(t, o)));
        break;
      case 22:
        if (
          (o & 512 && ($e || a === null || jt(a, a.return)),
          (C = t.memoizedState !== null),
          (U = a !== null && a.memoizedState !== null),
          (Q = Xn),
          (J = $e),
          (Xn = Q || C),
          ($e = J || U),
          Qt(n, t),
          ($e = J),
          (Xn = Q),
          $t(t),
          (n = t.stateNode),
          (n._current = t),
          (n._visibility &= -3),
          (n._visibility |= n._pendingVisibility & 2),
          o & 8192 &&
            ((n._visibility = C ? n._visibility & -2 : n._visibility | 1),
            C && ((n = Xn || $e), a === null || U || n || ri(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          e: for (a = null, n = t; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (a === null) {
                U = a = n;
                try {
                  if (((u = U.stateNode), C))
                    (d = u.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    (x = U.stateNode), (E = U.memoizedProps.style);
                    var P =
                      E != null && E.hasOwnProperty("display")
                        ? E.display
                        : null;
                    x.style.display =
                      P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (ve) {
                  Be(U, U.return, ve);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                U = n;
                try {
                  U.stateNode.nodeValue = C ? "" : U.memoizedProps;
                } catch (ve) {
                  Be(U, U.return, ve);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break e;
              a === n && (a = null), (n = n.return);
            }
            a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((a = o.retryQueue),
            a !== null && ((o.retryQueue = null), zf(t, a))));
        break;
      case 19:
        Qt(n, t),
          $t(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), zf(t, o)));
        break;
      case 21:
        break;
      default:
        Qt(n, t), $t(t);
    }
  }
  function $t(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        if (t.tag !== 27) {
          e: {
            for (var a = t.return; a !== null; ) {
              if (s0(a)) {
                var o = a;
                break e;
              }
              a = a.return;
            }
            throw Error(l(160));
          }
          switch (o.tag) {
            case 27:
              var u = o.stateNode,
                d = Of(t);
              ws(t, d, u);
              break;
            case 5:
              var x = o.stateNode;
              o.flags & 32 && (Va(x, ""), (o.flags &= -33));
              var E = Of(t);
              ws(t, E, x);
              break;
            case 3:
            case 4:
              var C = o.stateNode.containerInfo,
                U = Of(t);
              Df(t, U, C);
              break;
            default:
              throw Error(l(161));
          }
        }
      } catch (Q) {
        Be(t, t.return, Q);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function p0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        p0(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Pn(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) f0(t, n.alternate, n), (n = n.sibling);
  }
  function ri(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _r(4, n, n.return), ri(n);
          break;
        case 1:
          jt(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && i0(n, n.return, a),
            ri(n);
          break;
        case 26:
        case 27:
        case 5:
          jt(n, n.return), ri(n);
          break;
        case 22:
          jt(n, n.return), n.memoizedState === null && ri(n);
          break;
        default:
          ri(n);
      }
      t = t.sibling;
    }
  }
  function Ar(t, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        u = t,
        d = n,
        x = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Ar(u, d, a), Ml(4, d);
          break;
        case 1:
          if (
            (Ar(u, d, a),
            (o = d),
            (u = o.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (U) {
              Be(o, o.return, U);
            }
          if (((o = d), (u = o.updateQueue), u !== null)) {
            var E = o.stateNode;
            try {
              var C = u.shared.hiddenCallbacks;
              if (C !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < C.length; u++)
                  n0(C[u], E);
            } catch (U) {
              Be(o, o.return, U);
            }
          }
          a && x & 64 && a0(d), da(d, d.return);
          break;
        case 26:
        case 27:
        case 5:
          Ar(u, d, a), a && o === null && x & 4 && l0(d), da(d, d.return);
          break;
        case 12:
          Ar(u, d, a);
          break;
        case 13:
          Ar(u, d, a), a && x & 4 && m0(u, d);
          break;
        case 22:
          d.memoizedState === null && Ar(u, d, a), da(d, d.return);
          break;
        default:
          Ar(u, d, a);
      }
      n = n.sibling;
    }
  }
  function Uf(t, n) {
    var a = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && vl(a));
  }
  function Lf(t, n) {
    (t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && vl(t));
  }
  function Tr(t, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) v0(t, n, a, o), (n = n.sibling);
  }
  function v0(t, n, a, o) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Tr(t, n, a, o), u & 2048 && Ml(9, n);
        break;
      case 3:
        Tr(t, n, a, o),
          u & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && vl(t)));
        break;
      case 12:
        if (u & 2048) {
          Tr(t, n, a, o), (t = n.stateNode);
          try {
            var d = n.memoizedProps,
              x = d.id,
              E = d.onPostCommit;
            typeof E == "function" &&
              E(
                x,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (C) {
            Be(n, n.return, C);
          }
        } else Tr(t, n, a, o);
        break;
      case 23:
        break;
      case 22:
        (d = n.stateNode),
          n.memoizedState !== null
            ? d._visibility & 4
              ? Tr(t, n, a, o)
              : Cl(t, n)
            : d._visibility & 4
            ? Tr(t, n, a, o)
            : ((d._visibility |= 4),
              ai(t, n, a, o, (n.subtreeFlags & 10256) !== 0)),
          u & 2048 && Uf(n.alternate, n);
        break;
      case 24:
        Tr(t, n, a, o), u & 2048 && Lf(n.alternate, n);
        break;
      default:
        Tr(t, n, a, o);
    }
  }
  function ai(t, n, a, o, u) {
    for (u = u && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var d = t,
        x = n,
        E = a,
        C = o,
        U = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          ai(d, x, E, C, u), Ml(8, x);
          break;
        case 23:
          break;
        case 22:
          var Q = x.stateNode;
          x.memoizedState !== null
            ? Q._visibility & 4
              ? ai(d, x, E, C, u)
              : Cl(d, x)
            : ((Q._visibility |= 4), ai(d, x, E, C, u)),
            u && U & 2048 && Uf(x.alternate, x);
          break;
        case 24:
          ai(d, x, E, C, u), u && U & 2048 && Lf(x.alternate, x);
          break;
        default:
          ai(d, x, E, C, u);
      }
      n = n.sibling;
    }
  }
  function Cl(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = t,
          o = n,
          u = o.flags;
        switch (o.tag) {
          case 22:
            Cl(a, o), u & 2048 && Uf(o.alternate, o);
            break;
          case 24:
            Cl(a, o), u & 2048 && Lf(o.alternate, o);
            break;
          default:
            Cl(a, o);
        }
        n = n.sibling;
      }
  }
  var Rl = 8192;
  function ii(t) {
    if (t.subtreeFlags & Rl)
      for (t = t.child; t !== null; ) y0(t), (t = t.sibling);
  }
  function y0(t) {
    switch (t.tag) {
      case 26:
        ii(t),
          t.flags & Rl &&
            t.memoizedState !== null &&
            H2(rn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ii(t);
        break;
      case 3:
      case 4:
        var n = rn;
        (rn = Hs(t.stateNode.containerInfo)), ii(t), (rn = n);
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Rl), (Rl = 16777216), ii(t), (Rl = n))
            : ii(t));
        break;
      default:
        ii(t);
    }
  }
  function x0(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do (n = t.sibling), (t.sibling = null), (t = n);
      while (t !== null);
    }
  }
  function Nl(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          (st = o), S0(o, t);
        }
      x0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) b0(t), (t = t.sibling);
  }
  function b0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Nl(t), t.flags & 2048 && _r(9, t, t.return);
        break;
      case 3:
        Nl(t);
        break;
      case 12:
        Nl(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -5), Es(t))
          : Nl(t);
        break;
      default:
        Nl(t);
    }
  }
  function Es(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          (st = o), S0(o, t);
        }
      x0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          _r(8, n, n.return), Es(n);
          break;
        case 22:
          (a = n.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), Es(n));
          break;
        default:
          Es(n);
      }
      t = t.sibling;
    }
  }
  function S0(t, n) {
    for (; st !== null; ) {
      var a = st;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          _r(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          vl(a.memoizedState.cache);
      }
      if (((o = a.child), o !== null)) (o.return = a), (st = o);
      else
        e: for (a = t; st !== null; ) {
          o = st;
          var u = o.sibling,
            d = o.return;
          if ((d0(o), o === a)) {
            st = null;
            break e;
          }
          if (u !== null) {
            (u.return = d), (st = u);
            break e;
          }
          st = d;
        }
    }
  }
  function Kw(t, n, a, o) {
    (this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Zt(t, n, a, o) {
    return new Kw(t, n, a, o);
  }
  function Hf(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Mr(t, n) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Zt(t.tag, n, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = n),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 31457280),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function w0(t, n) {
    t.flags &= 31457282;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (n = a.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function _s(t, n, a, o, u, d) {
    var x = 0;
    if (((o = t), typeof t == "function")) Hf(t) && (x = 1);
    else if (typeof t == "string")
      x = U2(t, a, se.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      e: switch (t) {
        case g:
          return ha(a.children, u, d, n);
        case h:
          (x = 8), (u |= 24);
          break;
        case p:
          return (
            (t = Zt(12, a, n, u | 2)), (t.elementType = p), (t.lanes = d), t
          );
        case w:
          return (t = Zt(13, a, n, u)), (t.elementType = w), (t.lanes = d), t;
        case T:
          return (t = Zt(19, a, n, u)), (t.elementType = T), (t.lanes = d), t;
        case O:
          return E0(a, u, d, n);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case y:
              case S:
                x = 10;
                break e;
              case b:
                x = 9;
                break e;
              case A:
                x = 11;
                break e;
              case M:
                x = 14;
                break e;
              case R:
                (x = 16), (o = null);
                break e;
            }
          (x = 29),
            (a = Error(l(130, t === null ? "null" : typeof t, ""))),
            (o = null);
      }
    return (
      (n = Zt(x, a, n, u)), (n.elementType = t), (n.type = o), (n.lanes = d), n
    );
  }
  function ha(t, n, a, o) {
    return (t = Zt(7, t, o, n)), (t.lanes = a), t;
  }
  function E0(t, n, a, o) {
    (t = Zt(22, t, o, n)), (t.elementType = O), (t.lanes = a);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var d = u._current;
        if (d === null) throw Error(l(456));
        if ((u._pendingVisibility & 2) === 0) {
          var x = gr(d, 2);
          x !== null && ((u._pendingVisibility |= 2), wt(x, d, 2));
        }
      },
      attach: function () {
        var d = u._current;
        if (d === null) throw Error(l(456));
        if ((u._pendingVisibility & 2) !== 0) {
          var x = gr(d, 2);
          x !== null && ((u._pendingVisibility &= -3), wt(x, d, 2));
        }
      },
    };
    return (t.stateNode = u), t;
  }
  function kf(t, n, a) {
    return (t = Zt(6, t, null, n)), (t.lanes = a), t;
  }
  function Bf(t, n, a) {
    return (
      (n = Zt(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  function Qn(t) {
    t.flags |= 4;
  }
  function _0(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !sv(n))) {
      if (
        ((n = Pt.current),
        n !== null &&
          ((je & 4194176) === je
            ? yn !== null
            : ((je & 62914560) !== je && (je & 536870912) === 0) || n !== yn))
      )
        throw ((ml = Gc), qg);
      t.flags |= 8192;
    }
  }
  function As(t, n) {
    n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? Ym() : 536870912), (t.lanes |= n), (oi |= n));
  }
  function Ol(t, n) {
    if (!ze)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), (a = a.sibling);
          o === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Pe(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      o = 0;
    if (n)
      for (var u = t.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 31457280),
          (o |= u.flags & 31457280),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= o), (t.childLanes = a), n;
  }
  function Ww(t, n, a) {
    var o = n.pendingProps;
    switch ((qc(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pe(n), null;
      case 1:
        return Pe(n), null;
      case 3:
        return (
          (a = n.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          Gn(at),
          Ve(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (cl(n)
              ? Qn(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), nn !== null && (Qf(nn), (nn = null)))),
          Pe(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          t === null
            ? (Qn(n),
              a !== null ? (Pe(n), _0(n, a)) : (Pe(n), (n.flags &= -16777217)))
            : a
            ? a !== t.memoizedState
              ? (Qn(n), Pe(n), _0(n, a))
              : (Pe(n), (n.flags &= -16777217))
            : (t.memoizedProps !== o && Qn(n), Pe(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        zn(n), (a = Ce.current);
        var u = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== o && Qn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return Pe(n), null;
          }
          (t = se.current),
            cl(n) ? Bg(n) : ((t = ev(u, o, a)), (n.stateNode = t), Qn(n));
        }
        return Pe(n), null;
      case 5:
        if ((zn(n), (a = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== o && Qn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return Pe(n), null;
          }
          if (((t = se.current), cl(n))) Bg(n);
          else {
            switch (((u = Ls(Ce.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof o.is == "string"
                        ? u.createElement("select", { is: o.is })
                        : u.createElement("select")),
                      o.multiple
                        ? (t.multiple = !0)
                        : o.size && (t.size = o.size);
                    break;
                  default:
                    t =
                      typeof o.is == "string"
                        ? u.createElement(a, { is: o.is })
                        : u.createElement(a);
                }
            }
            (t[vt] = n), (t[_t] = o);
            e: for (u = n.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === n) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === n) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            n.stateNode = t;
            e: switch ((pt(t, a, o), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!o.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && Qn(n);
          }
        }
        return Pe(n), (n.flags &= -16777217), null;
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && Qn(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(l(166));
          if (((t = Ce.current), cl(n))) {
            if (
              ((t = n.stateNode),
              (a = n.memoizedProps),
              (o = null),
              (u = St),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            (t[vt] = n),
              (t = !!(
                t.nodeValue === a ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                $0(t.nodeValue, a)
              )),
              t || ra(n);
          } else (t = Ls(t).createTextNode(o)), (t[vt] = n), (n.stateNode = t);
        }
        return Pe(n), null;
      case 13:
        if (
          ((o = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = cl(n)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(l(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(l(317));
              u[vt] = n;
            } else
              fl(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            Pe(n), (u = !1);
          } else nn !== null && (Qf(nn), (nn = null)), (u = !0);
          if (!u) return n.flags & 256 ? (Bn(n), n) : (Bn(n), null);
        }
        if ((Bn(n), (n.flags & 128) !== 0)) return (n.lanes = a), n;
        if (
          ((a = o !== null), (t = t !== null && t.memoizedState !== null), a)
        ) {
          (o = n.child),
            (u = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (u = o.alternate.memoizedState.cachePool.pool);
          var d = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (d = o.memoizedState.cachePool.pool),
            d !== u && (o.flags |= 2048);
        }
        return (
          a !== t && a && (n.child.flags |= 8192),
          As(n, n.updateQueue),
          Pe(n),
          null
        );
      case 4:
        return Ve(), t === null && ad(n.stateNode.containerInfo), Pe(n), null;
      case 10:
        return Gn(n.type), Pe(n), null;
      case 19:
        if ((I(rt), (u = n.memoizedState), u === null)) return Pe(n), null;
        if (((o = (n.flags & 128) !== 0), (d = u.rendering), d === null))
          if (o) Ol(u, !1);
          else {
            if (Ze !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((d = ss(t)), d !== null)) {
                  for (
                    n.flags |= 128,
                      Ol(u, !1),
                      t = d.updateQueue,
                      n.updateQueue = t,
                      As(n, t),
                      n.subtreeFlags = 0,
                      t = a,
                      a = n.child;
                    a !== null;

                  )
                    w0(a, t), (a = a.sibling);
                  return re(rt, (rt.current & 1) | 2), n.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              pn() > Ts &&
              ((n.flags |= 128), (o = !0), Ol(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = ss(d)), t !== null)) {
              if (
                ((n.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                As(n, t),
                Ol(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !d.alternate &&
                  !ze)
              )
                return Pe(n), null;
            } else
              2 * pn() - u.renderingStartTime > Ts &&
                a !== 536870912 &&
                ((n.flags |= 128), (o = !0), Ol(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((d.sibling = n.child), (n.child = d))
            : ((t = u.last),
              t !== null ? (t.sibling = d) : (n.child = d),
              (u.last = d));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = pn()),
            (n.sibling = null),
            (t = rt.current),
            re(rt, o ? (t & 1) | 2 : t & 1),
            n)
          : (Pe(n), null);
      case 22:
      case 23:
        return (
          Bn(n),
          Fc(),
          (o = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (Pe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Pe(n),
          (a = n.updateQueue),
          a !== null && As(n, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== a && (n.flags |= 2048),
          t !== null && I(ia),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          Gn(at),
          Pe(n),
          null
        );
      case 25:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function Iw(t, n) {
    switch ((qc(n), n.tag)) {
      case 1:
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Gn(at),
          Ve(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return zn(n), null;
      case 13:
        if (
          (Bn(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(l(340));
          fl();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return I(rt), null;
      case 4:
        return Ve(), null;
      case 10:
        return Gn(n.type), null;
      case 22:
      case 23:
        return (
          Bn(n),
          Fc(),
          t !== null && I(ia),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return Gn(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function A0(t, n) {
    switch ((qc(n), n.tag)) {
      case 3:
        Gn(at), Ve();
        break;
      case 26:
      case 27:
      case 5:
        zn(n);
        break;
      case 4:
        Ve();
        break;
      case 13:
        Bn(n);
        break;
      case 19:
        I(rt);
        break;
      case 10:
        Gn(n.type);
        break;
      case 22:
      case 23:
        Bn(n), Fc(), t !== null && I(ia);
        break;
      case 24:
        Gn(at);
    }
  }
  var Jw = {
      getCacheForType: function (t) {
        var n = yt(at),
          a = n.data.get(t);
        return a === void 0 && ((a = t()), n.data.set(t, a)), a;
      },
    },
    e2 = typeof WeakMap == "function" ? WeakMap : Map,
    Qe = 0,
    qe = null,
    Re = null,
    je = 0,
    Ye = 0,
    Ut = null,
    $n = !1,
    li = !1,
    Vf = !1,
    Zn = 0,
    Ze = 0,
    Cr = 0,
    ma = 0,
    qf = 0,
    Kt = 0,
    oi = 0,
    Dl = null,
    bn = null,
    Yf = !1,
    Gf = 0,
    Ts = 1 / 0,
    Ms = null,
    Rr = null,
    Cs = !1,
    ga = null,
    jl = 0,
    Xf = 0,
    Ff = null,
    zl = 0,
    Pf = null;
  function Lt() {
    if ((Qe & 2) !== 0 && je !== 0) return je & -je;
    if (Z.T !== null) {
      var t = Ia;
      return t !== 0 ? t : ed();
    }
    return Pm();
  }
  function T0() {
    Kt === 0 && (Kt = (je & 536870912) === 0 || ze ? qm() : 536870912);
    var t = Pt.current;
    return t !== null && (t.flags |= 32), Kt;
  }
  function wt(t, n, a) {
    ((t === qe && Ye === 2) || t.cancelPendingCommit !== null) &&
      (si(t, 0), Kn(t, je, Kt, !1)),
      Ii(t, a),
      ((Qe & 2) === 0 || t !== qe) &&
        (t === qe &&
          ((Qe & 2) === 0 && (ma |= a), Ze === 4 && Kn(t, je, Kt, !1)),
        Sn(t));
  }
  function M0(t, n, a) {
    if ((Qe & 6) !== 0) throw Error(l(327));
    var o = (!a && (n & 60) === 0 && (n & t.expiredLanes) === 0) || Wi(t, n),
      u = o ? r2(t, n) : Kf(t, n, !0),
      d = o;
    do {
      if (u === 0) {
        li && !o && Kn(t, n, 0, !1);
        break;
      } else if (u === 6) Kn(t, n, 0, !$n);
      else {
        if (((a = t.current.alternate), d && !t2(a))) {
          (u = Kf(t, n, !1)), (d = !1);
          continue;
        }
        if (u === 2) {
          if (((d = n), t.errorRecoveryDisabledLanes & d)) var x = 0;
          else
            (x = t.pendingLanes & -536870913),
              (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0);
          if (x !== 0) {
            n = x;
            e: {
              var E = t;
              u = Dl;
              var C = E.current.memoizedState.isDehydrated;
              if ((C && (si(E, x).flags |= 256), (x = Kf(E, x, !1)), x !== 2)) {
                if (Vf && !C) {
                  (E.errorRecoveryDisabledLanes |= d), (ma |= d), (u = 4);
                  break e;
                }
                (d = bn), (bn = u), d !== null && Qf(d);
              }
              u = x;
            }
            if (((d = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          si(t, 0), Kn(t, n, 0, !0);
          break;
        }
        e: {
          switch (((o = t), u)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194176) === n) {
                Kn(o, n, Kt, !$n);
                break e;
              }
              break;
            case 2:
              bn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if (
            ((o.finishedWork = a),
            (o.finishedLanes = n),
            (n & 62914560) === n && ((d = Gf + 300 - pn()), 10 < d))
          ) {
            if ((Kn(o, n, Kt, !$n), qo(o, 0) !== 0)) break e;
            o.timeoutHandle = W0(
              C0.bind(null, o, a, bn, Ms, Yf, n, Kt, ma, oi, $n, 2, -0, 0),
              d
            );
            break e;
          }
          C0(o, a, bn, Ms, Yf, n, Kt, ma, oi, $n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Sn(t);
  }
  function Qf(t) {
    bn === null ? (bn = t) : bn.push.apply(bn, t);
  }
  function C0(t, n, a, o, u, d, x, E, C, U, Q, J, V) {
    var P = n.subtreeFlags;
    if (
      (P & 8192 || (P & 16785408) === 16785408) &&
      ((Vl = { stylesheets: null, count: 0, unsuspend: L2 }),
      y0(n),
      (n = k2()),
      n !== null)
    ) {
      (t.cancelPendingCommit = n(U0.bind(null, t, a, o, u, x, E, C, 1, J, V))),
        Kn(t, d, x, !U);
      return;
    }
    U0(t, a, o, u, x, E, C, Q, J, V);
  }
  function t2(t) {
    for (var n = t; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var o = 0; o < a.length; o++) {
          var u = a[o],
            d = u.getSnapshot;
          u = u.value;
          try {
            if (!Dt(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        (a.return = n), (n = a);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Kn(t, n, a, o) {
    (n &= ~qf),
      (n &= ~ma),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      o && (t.warmLanes |= n),
      (o = t.expirationTimes);
    for (var u = n; 0 < u; ) {
      var d = 31 - Ot(u),
        x = 1 << d;
      (o[d] = -1), (u &= ~x);
    }
    a !== 0 && Gm(t, a, n);
  }
  function Rs() {
    return (Qe & 6) === 0 ? (Ul(0), !1) : !0;
  }
  function $f() {
    if (Re !== null) {
      if (Ye === 0) var t = Re.return;
      else (t = Re), (Yn = ca = null), Jc(t), (Ka = null), (gl = 0), (t = Re);
      for (; t !== null; ) A0(t.alternate, t), (t = t.return);
      Re = null;
    }
  }
  function si(t, n) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var a = t.timeoutHandle;
    a !== -1 && ((t.timeoutHandle = -1), b2(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      $f(),
      (qe = t),
      (Re = a = Mr(t.current, null)),
      (je = n),
      (Ye = 0),
      (Ut = null),
      ($n = !1),
      (li = Wi(t, n)),
      (Vf = !1),
      (oi = Kt = qf = ma = Cr = Ze = 0),
      (bn = Dl = null),
      (Yf = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= n; 0 < o; ) {
        var u = 31 - Ot(o),
          d = 1 << u;
        (n |= t[u]), (o &= ~d);
      }
    return (Zn = n), Jo(), a;
  }
  function R0(t, n) {
    (Te = null),
      (Z.H = xn),
      n === hl
        ? ((n = Xg()), (Ye = 3))
        : n === qg
        ? ((n = Xg()), (Ye = 4))
        : (Ye =
            n === Yp
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (Ut = n),
      Re === null && ((Ze = 1), xs(t, Gt(n, t.current)));
  }
  function N0() {
    var t = Z.H;
    return (Z.H = xn), t === null ? xn : t;
  }
  function O0() {
    var t = Z.A;
    return (Z.A = Jw), t;
  }
  function Zf() {
    (Ze = 4),
      $n || ((je & 4194176) !== je && Pt.current !== null) || (li = !0),
      ((Cr & 134217727) === 0 && (ma & 134217727) === 0) ||
        qe === null ||
        Kn(qe, je, Kt, !1);
  }
  function Kf(t, n, a) {
    var o = Qe;
    Qe |= 2;
    var u = N0(),
      d = O0();
    (qe !== t || je !== n) && ((Ms = null), si(t, n)), (n = !1);
    var x = Ze;
    e: do
      try {
        if (Ye !== 0 && Re !== null) {
          var E = Re,
            C = Ut;
          switch (Ye) {
            case 8:
              $f(), (x = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Pt.current === null && (n = !0);
              var U = Ye;
              if (((Ye = 0), (Ut = null), ui(t, E, C, U), a && li)) {
                x = 0;
                break e;
              }
              break;
            default:
              (U = Ye), (Ye = 0), (Ut = null), ui(t, E, C, U);
          }
        }
        n2(), (x = Ze);
        break;
      } catch (Q) {
        R0(t, Q);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Yn = ca = null),
      (Qe = o),
      (Z.H = u),
      (Z.A = d),
      Re === null && ((qe = null), (je = 0), Jo()),
      x
    );
  }
  function n2() {
    for (; Re !== null; ) D0(Re);
  }
  function r2(t, n) {
    var a = Qe;
    Qe |= 2;
    var o = N0(),
      u = O0();
    qe !== t || je !== n
      ? ((Ms = null), (Ts = pn() + 500), si(t, n))
      : (li = Wi(t, n));
    e: do
      try {
        if (Ye !== 0 && Re !== null) {
          n = Re;
          var d = Ut;
          t: switch (Ye) {
            case 1:
              (Ye = 0), (Ut = null), ui(t, n, d, 1);
              break;
            case 2:
              if (Yg(d)) {
                (Ye = 0), (Ut = null), j0(n);
                break;
              }
              (n = function () {
                Ye === 2 && qe === t && (Ye = 7), Sn(t);
              }),
                d.then(n, n);
              break e;
            case 3:
              Ye = 7;
              break e;
            case 4:
              Ye = 5;
              break e;
            case 7:
              Yg(d)
                ? ((Ye = 0), (Ut = null), j0(n))
                : ((Ye = 0), (Ut = null), ui(t, n, d, 7));
              break;
            case 5:
              var x = null;
              switch (Re.tag) {
                case 26:
                  x = Re.memoizedState;
                case 5:
                case 27:
                  var E = Re;
                  if (!x || sv(x)) {
                    (Ye = 0), (Ut = null);
                    var C = E.sibling;
                    if (C !== null) Re = C;
                    else {
                      var U = E.return;
                      U !== null ? ((Re = U), Ns(U)) : (Re = null);
                    }
                    break t;
                  }
              }
              (Ye = 0), (Ut = null), ui(t, n, d, 5);
              break;
            case 6:
              (Ye = 0), (Ut = null), ui(t, n, d, 6);
              break;
            case 8:
              $f(), (Ze = 6);
              break e;
            default:
              throw Error(l(462));
          }
        }
        a2();
        break;
      } catch (Q) {
        R0(t, Q);
      }
    while (!0);
    return (
      (Yn = ca = null),
      (Z.H = o),
      (Z.A = u),
      (Qe = a),
      Re !== null ? 0 : ((qe = null), (je = 0), Jo(), Ze)
    );
  }
  function a2() {
    for (; Re !== null && !TS(); ) D0(Re);
  }
  function D0(t) {
    var n = e0(t.alternate, t, Zn);
    (t.memoizedProps = t.pendingProps), n === null ? Ns(t) : (Re = n);
  }
  function j0(t) {
    var n = t,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = $p(a, n, n.pendingProps, n.type, void 0, je);
        break;
      case 11:
        n = $p(a, n, n.pendingProps, n.type.render, n.ref, je);
        break;
      case 5:
        Jc(n);
      default:
        A0(a, n), (n = Re = w0(n, Zn)), (n = e0(a, n, Zn));
    }
    (t.memoizedProps = t.pendingProps), n === null ? Ns(t) : (Re = n);
  }
  function ui(t, n, a, o) {
    (Yn = ca = null), Jc(n), (Ka = null), (gl = 0);
    var u = n.return;
    try {
      if (Pw(t, u, n, a, je)) {
        (Ze = 1), xs(t, Gt(a, t.current)), (Re = null);
        return;
      }
    } catch (d) {
      if (u !== null) throw ((Re = u), d);
      (Ze = 1), xs(t, Gt(a, t.current)), (Re = null);
      return;
    }
    n.flags & 32768
      ? (ze || o === 1
          ? (t = !0)
          : li || (je & 536870912) !== 0
          ? (t = !1)
          : (($n = t = !0),
            (o === 2 || o === 3 || o === 6) &&
              ((o = Pt.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        z0(n, t))
      : Ns(n);
  }
  function Ns(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        z0(n, $n);
        return;
      }
      t = n.return;
      var a = Ww(n.alternate, n, Zn);
      if (a !== null) {
        Re = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Re = n;
        return;
      }
      Re = n = t;
    } while (n !== null);
    Ze === 0 && (Ze = 5);
  }
  function z0(t, n) {
    do {
      var a = Iw(t.alternate, t);
      if (a !== null) {
        (a.flags &= 32767), (Re = a);
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        Re = t;
        return;
      }
      Re = t = a;
    } while (t !== null);
    (Ze = 6), (Re = null);
  }
  function U0(t, n, a, o, u, d, x, E, C, U) {
    var Q = Z.T,
      J = le.p;
    try {
      (le.p = 2), (Z.T = null), i2(t, n, a, o, J, u, d, x, E, C, U);
    } finally {
      (Z.T = Q), (le.p = J);
    }
  }
  function i2(t, n, a, o, u, d, x, E) {
    do ci();
    while (ga !== null);
    if ((Qe & 6) !== 0) throw Error(l(327));
    var C = t.finishedWork;
    if (((o = t.finishedLanes), C === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), C === t.current))
      throw Error(l(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var U = C.lanes | C.childLanes;
    if (
      ((U |= kc),
      HS(t, o, U, d, x, E),
      t === qe && ((Re = qe = null), (je = 0)),
      ((C.subtreeFlags & 10256) === 0 && (C.flags & 10256) === 0) ||
        Cs ||
        ((Cs = !0),
        (Xf = U),
        (Ff = a),
        u2(ko, function () {
          return ci(), null;
        })),
      (a = (C.flags & 15990) !== 0),
      (C.subtreeFlags & 15990) !== 0 || a
        ? ((a = Z.T),
          (Z.T = null),
          (d = le.p),
          (le.p = 2),
          (x = Qe),
          (Qe |= 4),
          $w(t, C),
          g0(C, t),
          Rw(sd, t.containerInfo),
          (Ys = !!od),
          (sd = od = null),
          (t.current = C),
          f0(t, C.alternate, C),
          MS(),
          (Qe = x),
          (le.p = d),
          (Z.T = a))
        : (t.current = C),
      Cs ? ((Cs = !1), (ga = t), (jl = o)) : L0(t, U),
      (U = t.pendingLanes),
      U === 0 && (Rr = null),
      DS(C.stateNode),
      Sn(t),
      n !== null)
    )
      for (u = t.onRecoverableError, C = 0; C < n.length; C++)
        (U = n[C]), u(U.value, { componentStack: U.stack });
    return (
      (jl & 3) !== 0 && ci(),
      (U = t.pendingLanes),
      (o & 4194218) !== 0 && (U & 42) !== 0
        ? t === Pf
          ? zl++
          : ((zl = 0), (Pf = t))
        : (zl = 0),
      Ul(0),
      null
    );
  }
  function L0(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), vl(n)));
  }
  function ci() {
    if (ga !== null) {
      var t = ga,
        n = Xf;
      Xf = 0;
      var a = Fm(jl),
        o = Z.T,
        u = le.p;
      try {
        if (((le.p = 32 > a ? 32 : a), (Z.T = null), ga === null)) var d = !1;
        else {
          (a = Ff), (Ff = null);
          var x = ga,
            E = jl;
          if (((ga = null), (jl = 0), (Qe & 6) !== 0)) throw Error(l(331));
          var C = Qe;
          if (
            ((Qe |= 4),
            b0(x.current),
            v0(x, x.current, E, a),
            (Qe = C),
            Ul(0, !1),
            Nt && typeof Nt.onPostCommitFiberRoot == "function")
          )
            try {
              Nt.onPostCommitFiberRoot(Ki, x);
            } catch {}
          d = !0;
        }
        return d;
      } finally {
        (le.p = u), (Z.T = o), L0(t, n);
      }
    }
    return !1;
  }
  function H0(t, n, a) {
    (n = Gt(a, n)),
      (n = mf(t.stateNode, n, 2)),
      (t = Er(t, n, 2)),
      t !== null && (Ii(t, 2), Sn(t));
  }
  function Be(t, n, a) {
    if (t.tag === 3) H0(t, t, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          H0(n, t, a);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Rr === null || !Rr.has(o)))
          ) {
            (t = Gt(a, t)),
              (a = Vp(2)),
              (o = Er(n, a, 2)),
              o !== null && (qp(a, o, n, t), Ii(o, 2), Sn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Wf(t, n, a) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new e2();
      var u = new Set();
      o.set(n, u);
    } else (u = o.get(n)), u === void 0 && ((u = new Set()), o.set(n, u));
    u.has(a) ||
      ((Vf = !0), u.add(a), (t = l2.bind(null, t, n, a)), n.then(t, t));
  }
  function l2(t, n, a) {
    var o = t.pingCache;
    o !== null && o.delete(n),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      qe === t &&
        (je & a) === a &&
        (Ze === 4 || (Ze === 3 && (je & 62914560) === je && 300 > pn() - Gf)
          ? (Qe & 2) === 0 && si(t, 0)
          : (qf |= a),
        oi === je && (oi = 0)),
      Sn(t);
  }
  function k0(t, n) {
    n === 0 && (n = Ym()), (t = gr(t, n)), t !== null && (Ii(t, n), Sn(t));
  }
  function o2(t) {
    var n = t.memoizedState,
      a = 0;
    n !== null && (a = n.retryLane), k0(t, a);
  }
  function s2(t, n) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode,
          u = t.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    o !== null && o.delete(n), k0(t, a);
  }
  function u2(t, n) {
    return mc(t, n);
  }
  var Os = null,
    fi = null,
    If = !1,
    Ds = !1,
    Jf = !1,
    pa = 0;
  function Sn(t) {
    t !== fi &&
      t.next === null &&
      (fi === null ? (Os = fi = t) : (fi = fi.next = t)),
      (Ds = !0),
      If || ((If = !0), f2(c2));
  }
  function Ul(t, n) {
    if (!Jf && Ds) {
      Jf = !0;
      do
        for (var a = !1, o = Os; o !== null; ) {
          if (t !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var x = o.suspendedLanes,
                E = o.pingedLanes;
              (d = (1 << (31 - Ot(42 | t) + 1)) - 1),
                (d &= u & ~(x & ~E)),
                (d = d & 201326677 ? (d & 201326677) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((a = !0), q0(o, d));
          } else
            (d = je),
              (d = qo(o, o === qe ? d : 0)),
              (d & 3) === 0 || Wi(o, d) || ((a = !0), q0(o, d));
          o = o.next;
        }
      while (a);
      Jf = !1;
    }
  }
  function c2() {
    Ds = If = !1;
    var t = 0;
    pa !== 0 && (x2() && (t = pa), (pa = 0));
    for (var n = pn(), a = null, o = Os; o !== null; ) {
      var u = o.next,
        d = B0(o, n);
      d === 0
        ? ((o.next = null),
          a === null ? (Os = u) : (a.next = u),
          u === null && (fi = a))
        : ((a = o), (t !== 0 || (d & 3) !== 0) && (Ds = !0)),
        (o = u);
    }
    Ul(t);
  }
  function B0(t, n) {
    for (
      var a = t.suspendedLanes,
        o = t.pingedLanes,
        u = t.expirationTimes,
        d = t.pendingLanes & -62914561;
      0 < d;

    ) {
      var x = 31 - Ot(d),
        E = 1 << x,
        C = u[x];
      C === -1
        ? ((E & a) === 0 || (E & o) !== 0) && (u[x] = LS(E, n))
        : C <= n && (t.expiredLanes |= E),
        (d &= ~E);
    }
    if (
      ((n = qe),
      (a = je),
      (a = qo(t, t === n ? a : 0)),
      (o = t.callbackNode),
      a === 0 || (t === n && Ye === 2) || t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && gc(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Wi(t, a)) {
      if (((n = a & -a), n === t.callbackPriority)) return n;
      switch ((o !== null && gc(o), Fm(a))) {
        case 2:
        case 8:
          a = Bm;
          break;
        case 32:
          a = ko;
          break;
        case 268435456:
          a = Vm;
          break;
        default:
          a = ko;
      }
      return (
        (o = V0.bind(null, t)),
        (a = mc(a, o)),
        (t.callbackPriority = n),
        (t.callbackNode = a),
        n
      );
    }
    return (
      o !== null && o !== null && gc(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function V0(t, n) {
    var a = t.callbackNode;
    if (ci() && t.callbackNode !== a) return null;
    var o = je;
    return (
      (o = qo(t, t === qe ? o : 0)),
      o === 0
        ? null
        : (M0(t, o, n),
          B0(t, pn()),
          t.callbackNode != null && t.callbackNode === a
            ? V0.bind(null, t)
            : null)
    );
  }
  function q0(t, n) {
    if (ci()) return null;
    M0(t, n, !0);
  }
  function f2(t) {
    S2(function () {
      (Qe & 6) !== 0 ? mc(km, t) : t();
    });
  }
  function ed() {
    return pa === 0 && (pa = qm()), pa;
  }
  function Y0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Po("" + t);
  }
  function G0(t, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      t.id && a.setAttribute("form", t.id),
      n.parentNode.insertBefore(a, n),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function d2(t, n, a, o, u) {
    if (n === "submit" && a && a.stateNode === u) {
      var d = Y0((u[_t] || null).action),
        x = o.submitter;
      x &&
        ((n = (n = x[_t] || null)
          ? Y0(n.formAction)
          : x.getAttribute("formAction")),
        n !== null && ((d = n), (x = null)));
      var E = new Ko("action", "action", null, o, u);
      t.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (pa !== 0) {
                  var C = x ? G0(u, x) : new FormData(u);
                  uf(
                    a,
                    { pending: !0, data: C, method: u.method, action: d },
                    null,
                    C
                  );
                }
              } else
                typeof d == "function" &&
                  (E.preventDefault(),
                  (C = x ? G0(u, x) : new FormData(u)),
                  uf(
                    a,
                    { pending: !0, data: C, method: u.method, action: d },
                    d,
                    C
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var td = 0; td < Ug.length; td++) {
    var nd = Ug[td],
      h2 = nd.toLowerCase(),
      m2 = nd[0].toUpperCase() + nd.slice(1);
    tn(h2, "on" + m2);
  }
  tn(Ng, "onAnimationEnd"),
    tn(Og, "onAnimationIteration"),
    tn(Dg, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(Ow, "onTransitionRun"),
    tn(Dw, "onTransitionStart"),
    tn(jw, "onTransitionCancel"),
    tn(jg, "onTransitionEnd"),
    ka("onMouseEnter", ["mouseout", "mouseover"]),
    ka("onMouseLeave", ["mouseout", "mouseover"]),
    ka("onPointerEnter", ["pointerout", "pointerover"]),
    ka("onPointerLeave", ["pointerout", "pointerover"]),
    Wr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Wr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Wr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Wr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Wr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ll =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    g2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ll)
    );
  function X0(t, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var o = t[a],
        u = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var x = o.length - 1; 0 <= x; x--) {
            var E = o[x],
              C = E.instance,
              U = E.currentTarget;
            if (((E = E.listener), C !== d && u.isPropagationStopped()))
              break e;
            (d = E), (u.currentTarget = U);
            try {
              d(u);
            } catch (Q) {
              ys(Q);
            }
            (u.currentTarget = null), (d = C);
          }
        else
          for (x = 0; x < o.length; x++) {
            if (
              ((E = o[x]),
              (C = E.instance),
              (U = E.currentTarget),
              (E = E.listener),
              C !== d && u.isPropagationStopped())
            )
              break e;
            (d = E), (u.currentTarget = U);
            try {
              d(u);
            } catch (Q) {
              ys(Q);
            }
            (u.currentTarget = null), (d = C);
          }
      }
    }
  }
  function Oe(t, n) {
    var a = n[vc];
    a === void 0 && (a = n[vc] = new Set());
    var o = t + "__bubble";
    a.has(o) || (F0(n, t, 2, !1), a.add(o));
  }
  function rd(t, n, a) {
    var o = 0;
    n && (o |= 4), F0(a, t, o, n);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function ad(t) {
    if (!t[js]) {
      (t[js] = !0),
        $m.forEach(function (a) {
          a !== "selectionchange" && (g2.has(a) || rd(a, !1, t), rd(a, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[js] || ((n[js] = !0), rd("selectionchange", !1, n));
    }
  }
  function F0(t, n, a, o) {
    switch (mv(n)) {
      case 2:
        var u = q2;
        break;
      case 8:
        u = Y2;
        break;
      default:
        u = vd;
    }
    (a = u.bind(null, n, a, t)),
      (u = void 0),
      !Ac ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? t.addEventListener(n, a, { capture: !0, passive: u })
          : t.addEventListener(n, a, !0)
        : u !== void 0
        ? t.addEventListener(n, a, { passive: u })
        : t.addEventListener(n, a, !1);
  }
  function id(t, n, a, o, u) {
    var d = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var x = o.tag;
        if (x === 3 || x === 4) {
          var E = o.stateNode.containerInfo;
          if (E === u || (E.nodeType === 8 && E.parentNode === u)) break;
          if (x === 4)
            for (x = o.return; x !== null; ) {
              var C = x.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = x.stateNode.containerInfo),
                C === u || (C.nodeType === 8 && C.parentNode === u))
              )
                return;
              x = x.return;
            }
          for (; E !== null; ) {
            if (((x = Kr(E)), x === null)) return;
            if (((C = x.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              o = d = x;
              continue e;
            }
            E = E.parentNode;
          }
        }
        o = o.return;
      }
    lg(function () {
      var U = d,
        Q = Ec(a),
        J = [];
      e: {
        var V = zg.get(t);
        if (V !== void 0) {
          var P = Ko,
            ve = t;
          switch (t) {
            case "keypress":
              if ($o(a) === 0) break e;
            case "keydown":
            case "keyup":
              P = sw;
              break;
            case "focusin":
              (ve = "focus"), (P = Rc);
              break;
            case "focusout":
              (ve = "blur"), (P = Rc);
              break;
            case "beforeblur":
            case "afterblur":
              P = Rc;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = ug;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = KS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = fw;
              break;
            case Ng:
            case Og:
            case Dg:
              P = JS;
              break;
            case jg:
              P = hw;
              break;
            case "scroll":
            case "scrollend":
              P = $S;
              break;
            case "wheel":
              P = gw;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = tw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = fg;
              break;
            case "toggle":
            case "beforetoggle":
              P = vw;
          }
          var we = (n & 4) !== 0,
            Ke = !we && (t === "scroll" || t === "scrollend"),
            H = we ? (V !== null ? V + "Capture" : null) : V;
          we = [];
          for (var j = U, k; j !== null; ) {
            var K = j;
            if (
              ((k = K.stateNode),
              (K = K.tag),
              (K !== 5 && K !== 26 && K !== 27) ||
                k === null ||
                H === null ||
                ((K = tl(j, H)), K != null && we.push(Hl(j, K, k))),
              Ke)
            )
              break;
            j = j.return;
          }
          0 < we.length &&
            ((V = new P(V, ve, null, a, Q)),
            J.push({ event: V, listeners: we }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((V = t === "mouseover" || t === "pointerover"),
            (P = t === "mouseout" || t === "pointerout"),
            V &&
              a !== wc &&
              (ve = a.relatedTarget || a.fromElement) &&
              (Kr(ve) || ve[Ua]))
          )
            break e;
          if (
            (P || V) &&
            ((V =
              Q.window === Q
                ? Q
                : (V = Q.ownerDocument)
                ? V.defaultView || V.parentWindow
                : window),
            P
              ? ((ve = a.relatedTarget || a.toElement),
                (P = U),
                (ve = ve ? Kr(ve) : null),
                ve !== null &&
                  ((Ke = X(ve)),
                  (we = ve.tag),
                  ve !== Ke || (we !== 5 && we !== 27 && we !== 6)) &&
                  (ve = null))
              : ((P = null), (ve = U)),
            P !== ve)
          ) {
            if (
              ((we = ug),
              (K = "onMouseLeave"),
              (H = "onMouseEnter"),
              (j = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((we = fg),
                (K = "onPointerLeave"),
                (H = "onPointerEnter"),
                (j = "pointer")),
              (Ke = P == null ? V : el(P)),
              (k = ve == null ? V : el(ve)),
              (V = new we(K, j + "leave", P, a, Q)),
              (V.target = Ke),
              (V.relatedTarget = k),
              (K = null),
              Kr(Q) === U &&
                ((we = new we(H, j + "enter", ve, a, Q)),
                (we.target = k),
                (we.relatedTarget = Ke),
                (K = we)),
              (Ke = K),
              P && ve)
            )
              t: {
                for (we = P, H = ve, j = 0, k = we; k; k = di(k)) j++;
                for (k = 0, K = H; K; K = di(K)) k++;
                for (; 0 < j - k; ) (we = di(we)), j--;
                for (; 0 < k - j; ) (H = di(H)), k--;
                for (; j--; ) {
                  if (we === H || (H !== null && we === H.alternate)) break t;
                  (we = di(we)), (H = di(H));
                }
                we = null;
              }
            else we = null;
            P !== null && P0(J, V, P, we, !1),
              ve !== null && Ke !== null && P0(J, Ke, ve, we, !0);
          }
        }
        e: {
          if (
            ((V = U ? el(U) : window),
            (P = V.nodeName && V.nodeName.toLowerCase()),
            P === "select" || (P === "input" && V.type === "file"))
          )
            var he = xg;
          else if (vg(V))
            if (bg) he = Mw;
            else {
              he = Aw;
              var Me = _w;
            }
          else
            (P = V.nodeName),
              !P ||
              P.toLowerCase() !== "input" ||
              (V.type !== "checkbox" && V.type !== "radio")
                ? U && Sc(U.elementType) && (he = xg)
                : (he = Tw);
          if (he && (he = he(t, U))) {
            yg(J, he, a, Q);
            break e;
          }
          Me && Me(t, V, U),
            t === "focusout" &&
              U &&
              V.type === "number" &&
              U.memoizedProps.value != null &&
              bc(V, "number", V.value);
        }
        switch (((Me = U ? el(U) : window), t)) {
          case "focusin":
            (vg(Me) || Me.contentEditable === "true") &&
              ((Xa = Me), (Uc = U), (ul = null));
            break;
          case "focusout":
            ul = Uc = Xa = null;
            break;
          case "mousedown":
            Lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Lc = !1), Cg(J, a, Q);
            break;
          case "selectionchange":
            if (Nw) break;
          case "keydown":
          case "keyup":
            Cg(J, a, Q);
        }
        var be;
        if (Oc)
          e: {
            switch (t) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          Ga
            ? gg(t, a) && (Se = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (Se = "onCompositionStart");
        Se &&
          (dg &&
            a.locale !== "ko" &&
            (Ga || Se !== "onCompositionStart"
              ? Se === "onCompositionEnd" && Ga && (be = og())
              : ((mr = Q),
                (Tc = "value" in mr ? mr.value : mr.textContent),
                (Ga = !0))),
          (Me = zs(U, Se)),
          0 < Me.length &&
            ((Se = new cg(Se, t, null, a, Q)),
            J.push({ event: Se, listeners: Me }),
            be
              ? (Se.data = be)
              : ((be = pg(a)), be !== null && (Se.data = be)))),
          (be = xw ? bw(t, a) : Sw(t, a)) &&
            ((Se = zs(U, "onBeforeInput")),
            0 < Se.length &&
              ((Me = new cg("onBeforeInput", "beforeinput", null, a, Q)),
              J.push({ event: Me, listeners: Se }),
              (Me.data = be))),
          d2(J, t, U, a, Q);
      }
      X0(J, n);
    });
  }
  function Hl(t, n, a) {
    return { instance: t, listener: n, currentTarget: a };
  }
  function zs(t, n) {
    for (var a = n + "Capture", o = []; t !== null; ) {
      var u = t,
        d = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          d === null ||
          ((u = tl(t, a)),
          u != null && o.unshift(Hl(t, u, d)),
          (u = tl(t, n)),
          u != null && o.push(Hl(t, u, d))),
        (t = t.return);
    }
    return o;
  }
  function di(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function P0(t, n, a, o, u) {
    for (var d = n._reactName, x = []; a !== null && a !== o; ) {
      var E = a,
        C = E.alternate,
        U = E.stateNode;
      if (((E = E.tag), C !== null && C === o)) break;
      (E !== 5 && E !== 26 && E !== 27) ||
        U === null ||
        ((C = U),
        u
          ? ((U = tl(a, d)), U != null && x.unshift(Hl(a, U, C)))
          : u || ((U = tl(a, d)), U != null && x.push(Hl(a, U, C)))),
        (a = a.return);
    }
    x.length !== 0 && t.push({ event: n, listeners: x });
  }
  var p2 = /\r\n?/g,
    v2 = /\u0000|\uFFFD/g;
  function Q0(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        p2,
        `
`
      )
      .replace(v2, "");
  }
  function $0(t, n) {
    return (n = Q0(n)), Q0(t) === n;
  }
  function Us() {}
  function ke(t, n, a, o, u, d) {
    switch (a) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || Va(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            Va(t, "" + o);
        break;
      case "className":
        Go(t, "class", o);
        break;
      case "tabIndex":
        Go(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Go(t, a, o);
        break;
      case "style":
        ag(t, o, d);
        break;
      case "data":
        if (n !== "object") {
          Go(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        (o = Po("" + o)), t.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" &&
            (a === "formAction"
              ? (n !== "input" && ke(t, n, "name", u.name, u, null),
                ke(t, n, "formEncType", u.formEncType, u, null),
                ke(t, n, "formMethod", u.formMethod, u, null),
                ke(t, n, "formTarget", u.formTarget, u, null))
              : (ke(t, n, "encType", u.encType, u, null),
                ke(t, n, "method", u.method, u, null),
                ke(t, n, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(a);
          break;
        }
        (o = Po("" + o)), t.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (t.onclick = Us);
        break;
      case "onScroll":
        o != null && Oe("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Oe("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((a = o.__html), a != null)) {
            if (u.children != null) throw Error(l(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (a = Po("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(a, "" + o)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(a, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? t.setAttribute(a, o)
          : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(a, o)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(a)
          : t.setAttribute(a, o);
        break;
      case "popover":
        Oe("beforetoggle", t), Oe("toggle", t), Yo(t, "popover", o);
        break;
      case "xlinkActuate":
        Ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Ln(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Ln(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Ln(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Ln(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Yo(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = PS.get(a) || a), Yo(t, a, o));
    }
  }
  function ld(t, n, a, o, u, d) {
    switch (a) {
      case "style":
        ag(t, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((a = o.__html), a != null)) {
            if (u.children != null) throw Error(l(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? Va(t, o)
          : (typeof o == "number" || typeof o == "bigint") && Va(t, "" + o);
        break;
      case "onScroll":
        o != null && Oe("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Oe("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Us);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Zm.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (n = a.slice(2, u ? a.length - 7 : void 0)),
              (d = t[_t] || null),
              (d = d != null ? d[a] : null),
              typeof d == "function" && t.removeEventListener(n, d, u),
              typeof o == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(n, o, u);
              break e;
            }
            a in t
              ? (t[a] = o)
              : o === !0
              ? t.setAttribute(a, "")
              : Yo(t, a, o);
          }
    }
  }
  function pt(t, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Oe("error", t), Oe("load", t);
        var o = !1,
          u = !1,
          d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var x = a[d];
            if (x != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, n));
                default:
                  ke(t, n, d, x, a, null);
              }
          }
        u && ke(t, n, "srcSet", a.srcSet, a, null),
          o && ke(t, n, "src", a.src, a, null);
        return;
      case "input":
        Oe("invalid", t);
        var E = (d = x = u = null),
          C = null,
          U = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var Q = a[o];
            if (Q != null)
              switch (o) {
                case "name":
                  u = Q;
                  break;
                case "type":
                  x = Q;
                  break;
                case "checked":
                  C = Q;
                  break;
                case "defaultChecked":
                  U = Q;
                  break;
                case "value":
                  d = Q;
                  break;
                case "defaultValue":
                  E = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null) throw Error(l(137, n));
                  break;
                default:
                  ke(t, n, o, Q, a, null);
              }
          }
        eg(t, d, E, C, U, x, u, !1), Xo(t);
        return;
      case "select":
        Oe("invalid", t), (o = x = d = null);
        for (u in a)
          if (a.hasOwnProperty(u) && ((E = a[u]), E != null))
            switch (u) {
              case "value":
                d = E;
                break;
              case "defaultValue":
                x = E;
                break;
              case "multiple":
                o = E;
              default:
                ke(t, n, u, E, a, null);
            }
        (n = d),
          (a = x),
          (t.multiple = !!o),
          n != null ? Ba(t, !!o, n, !1) : a != null && Ba(t, !!o, a, !0);
        return;
      case "textarea":
        Oe("invalid", t), (d = u = o = null);
        for (x in a)
          if (a.hasOwnProperty(x) && ((E = a[x]), E != null))
            switch (x) {
              case "value":
                o = E;
                break;
              case "defaultValue":
                u = E;
                break;
              case "children":
                d = E;
                break;
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(l(91));
                break;
              default:
                ke(t, n, x, E, a, null);
            }
        ng(t, o, u, d), Xo(t);
        return;
      case "option":
        for (C in a)
          if (a.hasOwnProperty(C) && ((o = a[C]), o != null))
            switch (C) {
              case "selected":
                t.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                ke(t, n, C, o, a, null);
            }
        return;
      case "dialog":
        Oe("cancel", t), Oe("close", t);
        break;
      case "iframe":
      case "object":
        Oe("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ll.length; o++) Oe(Ll[o], t);
        break;
      case "image":
        Oe("error", t), Oe("load", t);
        break;
      case "details":
        Oe("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Oe("error", t), Oe("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in a)
          if (a.hasOwnProperty(U) && ((o = a[U]), o != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, n));
              default:
                ke(t, n, U, o, a, null);
            }
        return;
      default:
        if (Sc(n)) {
          for (Q in a)
            a.hasOwnProperty(Q) &&
              ((o = a[Q]), o !== void 0 && ld(t, n, Q, o, a, void 0));
          return;
        }
    }
    for (E in a)
      a.hasOwnProperty(E) && ((o = a[E]), o != null && ke(t, n, E, o, a, null));
  }
  function y2(t, n, a, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          d = null,
          x = null,
          E = null,
          C = null,
          U = null,
          Q = null;
        for (P in a) {
          var J = a[P];
          if (a.hasOwnProperty(P) && J != null)
            switch (P) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = J;
              default:
                o.hasOwnProperty(P) || ke(t, n, P, null, o, J);
            }
        }
        for (var V in o) {
          var P = o[V];
          if (((J = a[V]), o.hasOwnProperty(V) && (P != null || J != null)))
            switch (V) {
              case "type":
                d = P;
                break;
              case "name":
                u = P;
                break;
              case "checked":
                U = P;
                break;
              case "defaultChecked":
                Q = P;
                break;
              case "value":
                x = P;
                break;
              case "defaultValue":
                E = P;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null) throw Error(l(137, n));
                break;
              default:
                P !== J && ke(t, n, V, P, o, J);
            }
        }
        xc(t, x, E, C, U, Q, d, u);
        return;
      case "select":
        P = x = E = V = null;
        for (d in a)
          if (((C = a[d]), a.hasOwnProperty(d) && C != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                P = C;
              default:
                o.hasOwnProperty(d) || ke(t, n, d, null, o, C);
            }
        for (u in o)
          if (
            ((d = o[u]),
            (C = a[u]),
            o.hasOwnProperty(u) && (d != null || C != null))
          )
            switch (u) {
              case "value":
                V = d;
                break;
              case "defaultValue":
                E = d;
                break;
              case "multiple":
                x = d;
              default:
                d !== C && ke(t, n, u, d, o, C);
            }
        (n = E),
          (a = x),
          (o = P),
          V != null
            ? Ba(t, !!a, V, !1)
            : !!o != !!a &&
              (n != null ? Ba(t, !!a, n, !0) : Ba(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        P = V = null;
        for (E in a)
          if (
            ((u = a[E]),
            a.hasOwnProperty(E) && u != null && !o.hasOwnProperty(E))
          )
            switch (E) {
              case "value":
                break;
              case "children":
                break;
              default:
                ke(t, n, E, null, o, u);
            }
        for (x in o)
          if (
            ((u = o[x]),
            (d = a[x]),
            o.hasOwnProperty(x) && (u != null || d != null))
          )
            switch (x) {
              case "value":
                V = u;
                break;
              case "defaultValue":
                P = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(l(91));
                break;
              default:
                u !== d && ke(t, n, x, u, o, d);
            }
        tg(t, V, P);
        return;
      case "option":
        for (var ve in a)
          if (
            ((V = a[ve]),
            a.hasOwnProperty(ve) && V != null && !o.hasOwnProperty(ve))
          )
            switch (ve) {
              case "selected":
                t.selected = !1;
                break;
              default:
                ke(t, n, ve, null, o, V);
            }
        for (C in o)
          if (
            ((V = o[C]),
            (P = a[C]),
            o.hasOwnProperty(C) && V !== P && (V != null || P != null))
          )
            switch (C) {
              case "selected":
                t.selected =
                  V && typeof V != "function" && typeof V != "symbol";
                break;
              default:
                ke(t, n, C, V, o, P);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var we in a)
          (V = a[we]),
            a.hasOwnProperty(we) &&
              V != null &&
              !o.hasOwnProperty(we) &&
              ke(t, n, we, null, o, V);
        for (U in o)
          if (
            ((V = o[U]),
            (P = a[U]),
            o.hasOwnProperty(U) && V !== P && (V != null || P != null))
          )
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(l(137, n));
                break;
              default:
                ke(t, n, U, V, o, P);
            }
        return;
      default:
        if (Sc(n)) {
          for (var Ke in a)
            (V = a[Ke]),
              a.hasOwnProperty(Ke) &&
                V !== void 0 &&
                !o.hasOwnProperty(Ke) &&
                ld(t, n, Ke, void 0, o, V);
          for (Q in o)
            (V = o[Q]),
              (P = a[Q]),
              !o.hasOwnProperty(Q) ||
                V === P ||
                (V === void 0 && P === void 0) ||
                ld(t, n, Q, V, o, P);
          return;
        }
    }
    for (var H in a)
      (V = a[H]),
        a.hasOwnProperty(H) &&
          V != null &&
          !o.hasOwnProperty(H) &&
          ke(t, n, H, null, o, V);
    for (J in o)
      (V = o[J]),
        (P = a[J]),
        !o.hasOwnProperty(J) ||
          V === P ||
          (V == null && P == null) ||
          ke(t, n, J, V, o, P);
  }
  var od = null,
    sd = null;
  function Ls(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Z0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function K0(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function ud(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cd = null;
  function x2() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === cd
        ? !1
        : ((cd = t), !0)
      : ((cd = null), !1);
  }
  var W0 = typeof setTimeout == "function" ? setTimeout : void 0,
    b2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    I0 = typeof Promise == "function" ? Promise : void 0,
    S2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof I0 < "u"
        ? function (t) {
            return I0.resolve(null).then(t).catch(w2);
          }
        : W0;
  function w2(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function fd(t, n) {
    var a = n,
      o = 0;
    do {
      var u = a.nextSibling;
      if ((t.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$")) {
          if (o === 0) {
            t.removeChild(u), Fl(n);
            return;
          }
          o--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || o++;
      a = u;
    } while (a);
    Fl(n);
  }
  function dd(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          dd(a), yc(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function E2(t, n, a, o) {
    for (; t.nodeType === 1; ) {
      var u = a;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[Ji])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((d = t.getAttribute("rel")),
                d === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== u.rel ||
                t.getAttribute("href") !== (u.href == null ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((d = t.getAttribute("src")),
                (d !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  d &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === d) return t;
      } else return t;
      if (((t = an(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function _2(t, n, a) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = an(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function an(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  function J0(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return t;
          n--;
        } else a === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ev(t, n, a) {
    switch (((n = Ls(a)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(l(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(l(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(l(454));
        return t;
      default:
        throw Error(l(451));
    }
  }
  var Wt = new Map(),
    tv = new Set();
  function Hs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var Wn = le.d;
  le.d = { f: A2, r: T2, D: M2, C: C2, L: R2, m: N2, X: D2, S: O2, M: j2 };
  function A2() {
    var t = Wn.f(),
      n = Rs();
    return t || n;
  }
  function T2(t) {
    var n = La(t);
    n !== null && n.tag === 5 && n.type === "form" ? Cp(n) : Wn.r(t);
  }
  var hi = typeof document > "u" ? null : document;
  function nv(t, n, a) {
    var o = hi;
    if (o && typeof n == "string" && n) {
      var u = qt(n);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        tv.has(u) ||
          (tv.add(u),
          (t = { rel: t, crossOrigin: a, href: n }),
          o.querySelector(u) === null &&
            ((n = o.createElement("link")),
            pt(n, "link", t),
            lt(n),
            o.head.appendChild(n)));
    }
  }
  function M2(t) {
    Wn.D(t), nv("dns-prefetch", t, null);
  }
  function C2(t, n) {
    Wn.C(t, n), nv("preconnect", t, n);
  }
  function R2(t, n, a) {
    Wn.L(t, n, a);
    var o = hi;
    if (o && t && n) {
      var u = 'link[rel="preload"][as="' + qt(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + qt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + qt(a.imageSizes) + '"]'))
        : (u += '[href="' + qt(t) + '"]');
      var d = u;
      switch (n) {
        case "style":
          d = mi(t);
          break;
        case "script":
          d = gi(t);
      }
      Wt.has(d) ||
        ((t = ne(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : t,
            as: n,
          },
          a
        )),
        Wt.set(d, t),
        o.querySelector(u) !== null ||
          (n === "style" && o.querySelector(kl(d))) ||
          (n === "script" && o.querySelector(Bl(d))) ||
          ((n = o.createElement("link")),
          pt(n, "link", t),
          lt(n),
          o.head.appendChild(n)));
    }
  }
  function N2(t, n) {
    Wn.m(t, n);
    var a = hi;
    if (a && t) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        u =
          'link[rel="modulepreload"][as="' + qt(o) + '"][href="' + qt(t) + '"]',
        d = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = gi(t);
      }
      if (
        !Wt.has(d) &&
        ((t = ne({ rel: "modulepreload", href: t }, n)),
        Wt.set(d, t),
        a.querySelector(u) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Bl(d))) return;
        }
        (o = a.createElement("link")),
          pt(o, "link", t),
          lt(o),
          a.head.appendChild(o);
      }
    }
  }
  function O2(t, n, a) {
    Wn.S(t, n, a);
    var o = hi;
    if (o && t) {
      var u = Ha(o).hoistableStyles,
        d = mi(t);
      n = n || "default";
      var x = u.get(d);
      if (!x) {
        var E = { loading: 0, preload: null };
        if ((x = o.querySelector(kl(d)))) E.loading = 5;
        else {
          (t = ne({ rel: "stylesheet", href: t, "data-precedence": n }, a)),
            (a = Wt.get(d)) && hd(t, a);
          var C = (x = o.createElement("link"));
          lt(C),
            pt(C, "link", t),
            (C._p = new Promise(function (U, Q) {
              (C.onload = U), (C.onerror = Q);
            })),
            C.addEventListener("load", function () {
              E.loading |= 1;
            }),
            C.addEventListener("error", function () {
              E.loading |= 2;
            }),
            (E.loading |= 4),
            ks(x, n, o);
        }
        (x = { type: "stylesheet", instance: x, count: 1, state: E }),
          u.set(d, x);
      }
    }
  }
  function D2(t, n) {
    Wn.X(t, n);
    var a = hi;
    if (a && t) {
      var o = Ha(a).hoistableScripts,
        u = gi(t),
        d = o.get(u);
      d ||
        ((d = a.querySelector(Bl(u))),
        d ||
          ((t = ne({ src: t, async: !0 }, n)),
          (n = Wt.get(u)) && md(t, n),
          (d = a.createElement("script")),
          lt(d),
          pt(d, "link", t),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(u, d));
    }
  }
  function j2(t, n) {
    Wn.M(t, n);
    var a = hi;
    if (a && t) {
      var o = Ha(a).hoistableScripts,
        u = gi(t),
        d = o.get(u);
      d ||
        ((d = a.querySelector(Bl(u))),
        d ||
          ((t = ne({ src: t, async: !0, type: "module" }, n)),
          (n = Wt.get(u)) && md(t, n),
          (d = a.createElement("script")),
          lt(d),
          pt(d, "link", t),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(u, d));
    }
  }
  function rv(t, n, a, o) {
    var u = (u = Ce.current) ? Hs(u) : null;
    if (!u) throw Error(l(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = mi(a.href)),
            (a = Ha(u).hoistableStyles),
            (o = a.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = mi(a.href);
          var d = Ha(u).hoistableStyles,
            x = d.get(t);
          if (
            (x ||
              ((u = u.ownerDocument || u),
              (x = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(t, x),
              (d = u.querySelector(kl(t))) &&
                !d._p &&
                ((x.instance = d), (x.state.loading = 5)),
              Wt.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Wt.set(t, a),
                d || z2(u, t, a, x.state))),
            n && o === null)
          )
            throw Error(l(528, ""));
          return x;
        }
        if (n && o !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = gi(a)),
              (a = Ha(u).hoistableScripts),
              (o = a.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, t));
    }
  }
  function mi(t) {
    return 'href="' + qt(t) + '"';
  }
  function kl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function av(t) {
    return ne({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function z2(t, n, a, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = t.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        pt(n, "link", a),
        lt(n),
        t.head.appendChild(n));
  }
  function gi(t) {
    return '[src="' + qt(t) + '"]';
  }
  function Bl(t) {
    return "script[async]" + t;
  }
  function iv(t, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + qt(a.href) + '"]');
          if (o) return (n.instance = o), lt(o), o;
          var u = ne({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            lt(o),
            pt(o, "style", u),
            ks(o, a.precedence, t),
            (n.instance = o)
          );
        case "stylesheet":
          u = mi(a.href);
          var d = t.querySelector(kl(u));
          if (d) return (n.state.loading |= 4), (n.instance = d), lt(d), d;
          (o = av(a)),
            (u = Wt.get(u)) && hd(o, u),
            (d = (t.ownerDocument || t).createElement("link")),
            lt(d);
          var x = d;
          return (
            (x._p = new Promise(function (E, C) {
              (x.onload = E), (x.onerror = C);
            })),
            pt(d, "link", o),
            (n.state.loading |= 4),
            ks(d, a.precedence, t),
            (n.instance = d)
          );
        case "script":
          return (
            (d = gi(a.src)),
            (u = t.querySelector(Bl(d)))
              ? ((n.instance = u), lt(u), u)
              : ((o = a),
                (u = Wt.get(d)) && ((o = ne({}, a)), md(o, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                lt(u),
                pt(u, "link", o),
                t.head.appendChild(u),
                (n.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), ks(o, a.precedence, t));
    return n.instance;
  }
  function ks(t, n, a) {
    for (
      var o = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = o.length ? o[o.length - 1] : null,
        d = u,
        x = 0;
      x < o.length;
      x++
    ) {
      var E = o[x];
      if (E.dataset.precedence === n) d = E;
      else if (d !== u) break;
    }
    d
      ? d.parentNode.insertBefore(t, d.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(t, n.firstChild));
  }
  function hd(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title);
  }
  function md(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity);
  }
  var Bs = null;
  function lv(t, n, a) {
    if (Bs === null) {
      var o = new Map(),
        u = (Bs = new Map());
      u.set(a, o);
    } else (u = Bs), (o = u.get(a)), o || ((o = new Map()), u.set(a, o));
    if (o.has(t)) return o;
    for (
      o.set(t, null), a = a.getElementsByTagName(t), u = 0;
      u < a.length;
      u++
    ) {
      var d = a[u];
      if (
        !(
          d[Ji] ||
          d[vt] ||
          (t === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var x = d.getAttribute(n) || "";
        x = t + x;
        var E = o.get(x);
        E ? E.push(d) : o.set(x, [d]);
      }
    }
    return o;
  }
  function ov(t, n, a) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        n === "title" ? t.querySelector("head > title") : null
      );
  }
  function U2(t, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (t = n.disabled), typeof n.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function sv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Vl = null;
  function L2() {}
  function H2(t, n, a) {
    if (Vl === null) throw Error(l(475));
    var o = Vl;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = mi(a.href),
          d = t.querySelector(kl(u));
        if (d) {
          (t = d._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (o.count++, (o = Vs.bind(o)), t.then(o, o)),
            (n.state.loading |= 4),
            (n.instance = d),
            lt(d);
          return;
        }
        (d = t.ownerDocument || t),
          (a = av(a)),
          (u = Wt.get(u)) && hd(a, u),
          (d = d.createElement("link")),
          lt(d);
        var x = d;
        (x._p = new Promise(function (E, C) {
          (x.onload = E), (x.onerror = C);
        })),
          pt(d, "link", a),
          (n.instance = d);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (o.count++,
          (n = Vs.bind(o)),
          t.addEventListener("load", n),
          t.addEventListener("error", n));
    }
  }
  function k2() {
    if (Vl === null) throw Error(l(475));
    var t = Vl;
    return (
      t.stylesheets && t.count === 0 && gd(t, t.stylesheets),
      0 < t.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && gd(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                (t.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Vs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) gd(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var qs = null;
  function gd(t, n) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (qs = new Map()),
        n.forEach(B2, t),
        (qs = null),
        Vs.call(t));
  }
  function B2(t, n) {
    if (!(n.state.loading & 4)) {
      var a = qs.get(t);
      if (a) var o = a.get(null);
      else {
        (a = new Map()), qs.set(t, a);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            d = 0;
          d < u.length;
          d++
        ) {
          var x = u[d];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") &&
            (a.set(x.dataset.precedence, x), (o = x));
        }
        o && a.set(null, o);
      }
      (u = n.instance),
        (x = u.getAttribute("data-precedence")),
        (d = a.get(x) || o),
        d === o && a.set(null, u),
        a.set(x, u),
        this.count++,
        (o = Vs.bind(this)),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        d
          ? d.parentNode.insertBefore(u, d.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var ql = {
    $$typeof: S,
    Provider: null,
    Consumer: null,
    _currentValue: ye,
    _currentValue2: ye,
    _threadCount: 0,
  };
  function V2(t, n, a, o, u, d, x, E) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = pc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pc(0)),
      (this.hiddenUpdates = pc(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = u),
      (this.onCaughtError = d),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map());
  }
  function uv(t, n, a, o, u, d, x, E, C, U, Q, J) {
    return (
      (t = new V2(t, n, a, x, E, C, U, J)),
      (n = 1),
      d === !0 && (n |= 24),
      (d = Zt(3, null, null, n)),
      (t.current = d),
      (d.stateNode = t),
      (n = Pc()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (d.memoizedState = { element: o, isDehydrated: a, cache: n }),
      Mf(d),
      t
    );
  }
  function cv(t) {
    return t ? ((t = Qa), t) : Qa;
  }
  function fv(t, n, a, o, u, d) {
    (u = cv(u)),
      o.context === null ? (o.context = u) : (o.pendingContext = u),
      (o = wr(n)),
      (o.payload = { element: a }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (a = Er(t, o, n)),
      a !== null && (wt(a, t, n), _l(a, t, n));
  }
  function dv(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function pd(t, n) {
    dv(t, n), (t = t.alternate) && dv(t, n);
  }
  function hv(t) {
    if (t.tag === 13) {
      var n = gr(t, 67108864);
      n !== null && wt(n, t, 67108864), pd(t, 67108864);
    }
  }
  var Ys = !0;
  function q2(t, n, a, o) {
    var u = Z.T;
    Z.T = null;
    var d = le.p;
    try {
      (le.p = 2), vd(t, n, a, o);
    } finally {
      (le.p = d), (Z.T = u);
    }
  }
  function Y2(t, n, a, o) {
    var u = Z.T;
    Z.T = null;
    var d = le.p;
    try {
      (le.p = 8), vd(t, n, a, o);
    } finally {
      (le.p = d), (Z.T = u);
    }
  }
  function vd(t, n, a, o) {
    if (Ys) {
      var u = yd(o);
      if (u === null) id(t, n, o, Gs, a), gv(t, o);
      else if (X2(u, t, n, a, o)) o.stopPropagation();
      else if ((gv(t, o), n & 4 && -1 < G2.indexOf(t))) {
        for (; u !== null; ) {
          var d = La(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var x = Zr(d.pendingLanes);
                  if (x !== 0) {
                    var E = d;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; x; ) {
                      var C = 1 << (31 - Ot(x));
                      (E.entanglements[1] |= C), (x &= ~C);
                    }
                    Sn(d), (Qe & 6) === 0 && ((Ts = pn() + 500), Ul(0));
                  }
                }
                break;
              case 13:
                (E = gr(d, 2)), E !== null && wt(E, d, 2), Rs(), pd(d, 2);
            }
          if (((d = yd(o)), d === null && id(t, n, o, Gs, a), d === u)) break;
          u = d;
        }
        u !== null && o.stopPropagation();
      } else id(t, n, o, null, a);
    }
  }
  function yd(t) {
    return (t = Ec(t)), xd(t);
  }
  var Gs = null;
  function xd(t) {
    if (((Gs = null), (t = Kr(t)), t !== null)) {
      var n = X(t);
      if (n === null) t = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((t = ie(n)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return (Gs = t), null;
  }
  function mv(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (CS()) {
          case km:
            return 2;
          case Bm:
            return 8;
          case ko:
          case RS:
            return 32;
          case Vm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bd = !1,
    Nr = null,
    Or = null,
    Dr = null,
    Yl = new Map(),
    Gl = new Map(),
    jr = [],
    G2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function gv(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        Nr = null;
        break;
      case "dragenter":
      case "dragleave":
        Or = null;
        break;
      case "mouseover":
      case "mouseout":
        Dr = null;
        break;
      case "pointerover":
      case "pointerout":
        Yl.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gl.delete(n.pointerId);
    }
  }
  function Xl(t, n, a, o, u, d) {
    return t === null || t.nativeEvent !== d
      ? ((t = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [u],
        }),
        n !== null && ((n = La(n)), n !== null && hv(n)),
        t)
      : ((t.eventSystemFlags |= o),
        (n = t.targetContainers),
        u !== null && n.indexOf(u) === -1 && n.push(u),
        t);
  }
  function X2(t, n, a, o, u) {
    switch (n) {
      case "focusin":
        return (Nr = Xl(Nr, t, n, a, o, u)), !0;
      case "dragenter":
        return (Or = Xl(Or, t, n, a, o, u)), !0;
      case "mouseover":
        return (Dr = Xl(Dr, t, n, a, o, u)), !0;
      case "pointerover":
        var d = u.pointerId;
        return Yl.set(d, Xl(Yl.get(d) || null, t, n, a, o, u)), !0;
      case "gotpointercapture":
        return (
          (d = u.pointerId), Gl.set(d, Xl(Gl.get(d) || null, t, n, a, o, u)), !0
        );
    }
    return !1;
  }
  function pv(t) {
    var n = Kr(t.target);
    if (n !== null) {
      var a = X(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = ie(a)), n !== null)) {
            (t.blockedOn = n),
              kS(t.priority, function () {
                if (a.tag === 13) {
                  var o = Lt(),
                    u = gr(a, o);
                  u !== null && wt(u, a, o), pd(a, o);
                }
              });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Xs(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var a = yd(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var o = new a.constructor(a.type, a);
        (wc = o), a.target.dispatchEvent(o), (wc = null);
      } else return (n = La(a)), n !== null && hv(n), (t.blockedOn = a), !1;
      n.shift();
    }
    return !0;
  }
  function vv(t, n, a) {
    Xs(t) && a.delete(n);
  }
  function F2() {
    (bd = !1),
      Nr !== null && Xs(Nr) && (Nr = null),
      Or !== null && Xs(Or) && (Or = null),
      Dr !== null && Xs(Dr) && (Dr = null),
      Yl.forEach(vv),
      Gl.forEach(vv);
  }
  function Fs(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      bd ||
        ((bd = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, F2)));
  }
  var Ps = null;
  function yv(t) {
    Ps !== t &&
      ((Ps = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Ps === t && (Ps = null);
        for (var n = 0; n < t.length; n += 3) {
          var a = t[n],
            o = t[n + 1],
            u = t[n + 2];
          if (typeof o != "function") {
            if (xd(o || a) === null) continue;
            break;
          }
          var d = La(a);
          d !== null &&
            (t.splice(n, 3),
            (n -= 3),
            uf(d, { pending: !0, data: u, method: a.method, action: o }, o, u));
        }
      }));
  }
  function Fl(t) {
    function n(C) {
      return Fs(C, t);
    }
    Nr !== null && Fs(Nr, t),
      Or !== null && Fs(Or, t),
      Dr !== null && Fs(Dr, t),
      Yl.forEach(n),
      Gl.forEach(n);
    for (var a = 0; a < jr.length; a++) {
      var o = jr[a];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < jr.length && ((a = jr[0]), a.blockedOn === null); )
      pv(a), a.blockedOn === null && jr.shift();
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (o = 0; o < a.length; o += 3) {
        var u = a[o],
          d = a[o + 1],
          x = u[_t] || null;
        if (typeof d == "function") x || yv(a);
        else if (x) {
          var E = null;
          if (d && d.hasAttribute("formAction")) {
            if (((u = d), (x = d[_t] || null))) E = x.formAction;
            else if (xd(u) !== null) continue;
          } else E = x.action;
          typeof E == "function" ? (a[o + 1] = E) : (a.splice(o, 3), (o -= 3)),
            yv(a);
        }
      }
  }
  function Sd(t) {
    this._internalRoot = t;
  }
  (Qs.prototype.render = Sd.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var a = n.current,
        o = Lt();
      fv(a, o, t, n, null, null);
    }),
    (Qs.prototype.unmount = Sd.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          t.tag === 0 && ci(),
            fv(t.current, 2, null, t, null, null),
            Rs(),
            (n[Ua] = null);
        }
      });
  function Qs(t) {
    this._internalRoot = t;
  }
  Qs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = Pm();
      t = { blockedOn: null, target: t, priority: n };
      for (var a = 0; a < jr.length && n !== 0 && n < jr[a].priority; a++);
      jr.splice(a, 0, t), a === 0 && pv(t);
    }
  };
  var xv = r.version;
  if (xv !== "19.0.0") throw Error(l(527, xv, "19.0.0"));
  le.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(l(188))
        : ((t = Object.keys(t).join(",")), Error(l(268, t)));
    return (
      (t = $(n)),
      (t = t !== null ? ce(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var P2 = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Z,
    findFiberByHostInstance: Kr,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$s.isDisabled && $s.supportsFiber)
      try {
        (Ki = $s.inject(P2)), (Nt = $s);
      } catch {}
  }
  return (
    (Ql.createRoot = function (t, n) {
      if (!s(t)) throw Error(l(299));
      var a = !1,
        o = "",
        u = Lp,
        d = Hp,
        x = kp,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (E = n.unstable_transitionCallbacks)),
        (n = uv(t, 1, !1, null, null, a, o, u, d, x, E, null)),
        (t[Ua] = n.current),
        ad(t.nodeType === 8 ? t.parentNode : t),
        new Sd(n)
      );
    }),
    (Ql.hydrateRoot = function (t, n, a) {
      if (!s(t)) throw Error(l(299));
      var o = !1,
        u = "",
        d = Lp,
        x = Hp,
        E = kp,
        C = null,
        U = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (o = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (d = a.onUncaughtError),
          a.onCaughtError !== void 0 && (x = a.onCaughtError),
          a.onRecoverableError !== void 0 && (E = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (C = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (U = a.formState)),
        (n = uv(t, 1, !0, n, a ?? null, o, u, d, x, E, C, U)),
        (n.context = cv(null)),
        (a = n.current),
        (o = Lt()),
        (u = wr(o)),
        (u.callback = null),
        Er(a, u, o),
        (n.current.lanes = o),
        Ii(n, o),
        Sn(n),
        (t[Ua] = n.current),
        ad(t),
        new Qs(n)
      );
    }),
    (Ql.version = "19.0.0"),
    Ql
  );
}
var Rv;
function rE() {
  if (Rv) return _d.exports;
  Rv = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return e(), (_d.exports = nE()), _d.exports;
}
var aE = rE();
function x1(e) {
  var r,
    i,
    l = "";
  if (typeof e == "string" || typeof e == "number") l += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (r = 0; r < s; r++)
        e[r] && (i = x1(e[r])) && (l && (l += " "), (l += i));
    } else for (i in e) e[i] && (l && (l += " "), (l += i));
  return l;
}
function b1() {
  for (var e, r, i = 0, l = "", s = arguments.length; i < s; i++)
    (e = arguments[i]) && (r = x1(e)) && (l && (l += " "), (l += r));
  return l;
}
const Hh = "-",
  iE = (e) => {
    const r = oE(e),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: l } = e;
    return {
      getClassGroupId: (f) => {
        const m = f.split(Hh);
        return m[0] === "" && m.length !== 1 && m.shift(), S1(m, r) || lE(f);
      },
      getConflictingClassGroupIds: (f, m) => {
        const g = i[f] || [];
        return m && l[f] ? [...g, ...l[f]] : g;
      },
    };
  },
  S1 = (e, r) => {
    var f;
    if (e.length === 0) return r.classGroupId;
    const i = e[0],
      l = r.nextPart.get(i),
      s = l ? S1(e.slice(1), l) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    const c = e.join(Hh);
    return (f = r.validators.find(({ validator: m }) => m(c))) == null
      ? void 0
      : f.classGroupId;
  },
  Nv = /^\[(.+)\]$/,
  lE = (e) => {
    if (Nv.test(e)) {
      const r = Nv.exec(e)[1],
        i = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (i) return "arbitrary.." + i;
    }
  },
  oE = (e) => {
    const { theme: r, classGroups: i } = e,
      l = { nextPart: new Map(), validators: [] };
    for (const s in i) th(i[s], l, s, r);
    return l;
  },
  th = (e, r, i, l) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const c = s === "" ? r : Ov(r, s);
        c.classGroupId = i;
        return;
      }
      if (typeof s == "function") {
        if (sE(s)) {
          th(s(l), r, i, l);
          return;
        }
        r.validators.push({ validator: s, classGroupId: i });
        return;
      }
      Object.entries(s).forEach(([c, f]) => {
        th(f, Ov(r, c), i, l);
      });
    });
  },
  Ov = (e, r) => {
    let i = e;
    return (
      r.split(Hh).forEach((l) => {
        i.nextPart.has(l) ||
          i.nextPart.set(l, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(l));
      }),
      i
    );
  },
  sE = (e) => e.isThemeGetter,
  uE = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      i = new Map(),
      l = new Map();
    const s = (c, f) => {
      i.set(c, f), r++, r > e && ((r = 0), (l = i), (i = new Map()));
    };
    return {
      get(c) {
        let f = i.get(c);
        if (f !== void 0) return f;
        if ((f = l.get(c)) !== void 0) return s(c, f), f;
      },
      set(c, f) {
        i.has(c) ? i.set(c, f) : s(c, f);
      },
    };
  },
  nh = "!",
  rh = ":",
  cE = rh.length,
  fE = (e) => {
    const { prefix: r, experimentalParseClassName: i } = e;
    let l = (s) => {
      const c = [];
      let f = 0,
        m = 0,
        g = 0,
        h;
      for (let A = 0; A < s.length; A++) {
        let w = s[A];
        if (f === 0 && m === 0) {
          if (w === rh) {
            c.push(s.slice(g, A)), (g = A + cE);
            continue;
          }
          if (w === "/") {
            h = A;
            continue;
          }
        }
        w === "[" ? f++ : w === "]" ? f-- : w === "(" ? m++ : w === ")" && m--;
      }
      const p = c.length === 0 ? s : s.substring(g),
        y = dE(p),
        b = y !== p,
        S = h && h > g ? h - g : void 0;
      return {
        modifiers: c,
        hasImportantModifier: b,
        baseClassName: y,
        maybePostfixModifierPosition: S,
      };
    };
    if (r) {
      const s = r + rh,
        c = l;
      l = (f) =>
        f.startsWith(s)
          ? c(f.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: f,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (i) {
      const s = l;
      l = (c) => i({ className: c, parseClassName: s });
    }
    return l;
  },
  dE = (e) =>
    e.endsWith(nh)
      ? e.substring(0, e.length - 1)
      : e.startsWith(nh)
      ? e.substring(1)
      : e,
  hE = (e) => {
    const r = Object.fromEntries(e.orderSensitiveModifiers.map((l) => [l, !0]));
    return (l) => {
      if (l.length <= 1) return l;
      const s = [];
      let c = [];
      return (
        l.forEach((f) => {
          f[0] === "[" || r[f] ? (s.push(...c.sort(), f), (c = [])) : c.push(f);
        }),
        s.push(...c.sort()),
        s
      );
    };
  },
  mE = (e) => ({
    cache: uE(e.cacheSize),
    parseClassName: fE(e),
    sortModifiers: hE(e),
    ...iE(e),
  }),
  gE = /\s+/,
  pE = (e, r) => {
    const {
        parseClassName: i,
        getClassGroupId: l,
        getConflictingClassGroupIds: s,
        sortModifiers: c,
      } = r,
      f = [],
      m = e.trim().split(gE);
    let g = "";
    for (let h = m.length - 1; h >= 0; h -= 1) {
      const p = m[h],
        {
          isExternal: y,
          modifiers: b,
          hasImportantModifier: S,
          baseClassName: A,
          maybePostfixModifierPosition: w,
        } = i(p);
      if (y) {
        g = p + (g.length > 0 ? " " + g : g);
        continue;
      }
      let T = !!w,
        M = l(T ? A.substring(0, w) : A);
      if (!M) {
        if (!T) {
          g = p + (g.length > 0 ? " " + g : g);
          continue;
        }
        if (((M = l(A)), !M)) {
          g = p + (g.length > 0 ? " " + g : g);
          continue;
        }
        T = !1;
      }
      const R = c(b).join(":"),
        O = S ? R + nh : R,
        L = O + M;
      if (f.includes(L)) continue;
      f.push(L);
      const D = s(M, T);
      for (let z = 0; z < D.length; ++z) {
        const Y = D[z];
        f.push(O + Y);
      }
      g = p + (g.length > 0 ? " " + g : g);
    }
    return g;
  };
function vE() {
  let e = 0,
    r,
    i,
    l = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (i = w1(r)) && (l && (l += " "), (l += i));
  return l;
}
const w1 = (e) => {
  if (typeof e == "string") return e;
  let r,
    i = "";
  for (let l = 0; l < e.length; l++)
    e[l] && (r = w1(e[l])) && (i && (i += " "), (i += r));
  return i;
};
function yE(e, ...r) {
  let i,
    l,
    s,
    c = f;
  function f(g) {
    const h = r.reduce((p, y) => y(p), e());
    return (i = mE(h)), (l = i.cache.get), (s = i.cache.set), (c = m), m(g);
  }
  function m(g) {
    const h = l(g);
    if (h) return h;
    const p = pE(g, i);
    return s(g, p), p;
  }
  return function () {
    return c(vE.apply(null, arguments));
  };
}
const ct = (e) => {
    const r = (i) => i[e] || [];
    return (r.isThemeGetter = !0), r;
  },
  E1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  _1 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  xE = /^\d+\/\d+$/,
  bE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  SE =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  wE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  EE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  _E =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  pi = (e) => xE.test(e),
  Ne = (e) => !!e && !Number.isNaN(Number(e)),
  va = (e) => !!e && Number.isInteger(Number(e)),
  Dv = (e) => e.endsWith("%") && Ne(e.slice(0, -1)),
  Ur = (e) => bE.test(e),
  AE = () => !0,
  TE = (e) => SE.test(e) && !wE.test(e),
  kh = () => !1,
  ME = (e) => EE.test(e),
  CE = (e) => _E.test(e),
  RE = (e) => !me(e) && !ge(e),
  NE = (e) => Vi(e, M1, kh),
  me = (e) => E1.test(e),
  ya = (e) => Vi(e, C1, TE),
  Cd = (e) => Vi(e, qE, Ne),
  OE = (e) => Vi(e, A1, kh),
  DE = (e) => Vi(e, T1, CE),
  jE = (e) => Vi(e, kh, ME),
  ge = (e) => _1.test(e),
  Zs = (e) => qi(e, C1),
  zE = (e) => qi(e, YE),
  UE = (e) => qi(e, A1),
  LE = (e) => qi(e, M1),
  HE = (e) => qi(e, T1),
  kE = (e) => qi(e, GE, !0),
  Vi = (e, r, i) => {
    const l = E1.exec(e);
    return l ? (l[1] ? r(l[1]) : i(l[2])) : !1;
  },
  qi = (e, r, i = !1) => {
    const l = _1.exec(e);
    return l ? (l[1] ? r(l[1]) : i) : !1;
  },
  A1 = (e) => e === "position",
  BE = new Set(["image", "url"]),
  T1 = (e) => BE.has(e),
  VE = new Set(["length", "size", "percentage"]),
  M1 = (e) => VE.has(e),
  C1 = (e) => e === "length",
  qE = (e) => e === "number",
  YE = (e) => e === "family-name",
  GE = (e) => e === "shadow",
  XE = () => {
    const e = ct("color"),
      r = ct("font"),
      i = ct("text"),
      l = ct("font-weight"),
      s = ct("tracking"),
      c = ct("leading"),
      f = ct("breakpoint"),
      m = ct("container"),
      g = ct("spacing"),
      h = ct("radius"),
      p = ct("shadow"),
      y = ct("inset-shadow"),
      b = ct("drop-shadow"),
      S = ct("blur"),
      A = ct("perspective"),
      w = ct("aspect"),
      T = ct("ease"),
      M = ct("animate"),
      R = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      O = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      L = () => ["auto", "hidden", "clip", "visible", "scroll"],
      D = () => ["auto", "contain", "none"],
      z = () => [ge, me, g],
      Y = () => [pi, "full", "auto", ...z()],
      te = () => [va, "none", "subgrid", ge, me],
      Z = () => ["auto", { span: ["full", va, ge, me] }, ge, me],
      ne = () => [va, "auto", ge, me],
      G = () => ["auto", "min", "max", "fr", ge, me],
      ae = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
      ],
      q = () => ["start", "end", "center", "stretch"],
      W = () => ["auto", ...z()],
      fe = () => [
        pi,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...z(),
      ],
      B = () => [e, ge, me],
      ee = () => [Dv, ya],
      X = () => ["", "none", "full", h, ge, me],
      ie = () => ["", Ne, Zs, ya],
      N = () => ["solid", "dashed", "dotted", "double"],
      $ = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ce = () => ["", "none", S, ge, me],
      de = () => [
        "center",
        "top",
        "top-right",
        "right",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left",
        "top-left",
        ge,
        me,
      ],
      le = () => ["none", Ne, ge, me],
      ye = () => ["none", Ne, ge, me],
      xe = () => [Ne, ge, me],
      ue = () => [pi, "full", ...z()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ur],
        breakpoint: [Ur],
        color: [AE],
        container: [Ur],
        "drop-shadow": [Ur],
        ease: ["in", "out", "in-out"],
        font: [RE],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ur],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ur],
        shadow: [Ur],
        spacing: ["px", Ne],
        text: [Ur],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", pi, me, ge, w] }],
        container: ["container"],
        columns: [{ columns: [Ne, me, ge, m] }],
        "break-after": [{ "break-after": R() }],
        "break-before": [{ "break-before": R() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...O(), me, ge] }],
        overflow: [{ overflow: L() }],
        "overflow-x": [{ "overflow-x": L() }],
        "overflow-y": [{ "overflow-y": L() }],
        overscroll: [{ overscroll: D() }],
        "overscroll-x": [{ "overscroll-x": D() }],
        "overscroll-y": [{ "overscroll-y": D() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: Y() }],
        "inset-x": [{ "inset-x": Y() }],
        "inset-y": [{ "inset-y": Y() }],
        start: [{ start: Y() }],
        end: [{ end: Y() }],
        top: [{ top: Y() }],
        right: [{ right: Y() }],
        bottom: [{ bottom: Y() }],
        left: [{ left: Y() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [va, "auto", ge, me] }],
        basis: [{ basis: [pi, "full", "auto", m, ...z()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Ne, pi, "auto", "initial", "none", me] }],
        grow: [{ grow: ["", Ne, ge, me] }],
        shrink: [{ shrink: ["", Ne, ge, me] }],
        order: [{ order: [va, "first", "last", "none", ge, me] }],
        "grid-cols": [{ "grid-cols": te() }],
        "col-start-end": [{ col: Z() }],
        "col-start": [{ "col-start": ne() }],
        "col-end": [{ "col-end": ne() }],
        "grid-rows": [{ "grid-rows": te() }],
        "row-start-end": [{ row: Z() }],
        "row-start": [{ "row-start": ne() }],
        "row-end": [{ "row-end": ne() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": G() }],
        "auto-rows": [{ "auto-rows": G() }],
        gap: [{ gap: z() }],
        "gap-x": [{ "gap-x": z() }],
        "gap-y": [{ "gap-y": z() }],
        "justify-content": [{ justify: [...ae(), "normal"] }],
        "justify-items": [{ "justify-items": [...q(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...q()] }],
        "align-content": [{ content: ["normal", ...ae()] }],
        "align-items": [{ items: [...q(), "baseline"] }],
        "align-self": [{ self: ["auto", ...q(), "baseline"] }],
        "place-content": [{ "place-content": ae() }],
        "place-items": [{ "place-items": [...q(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...q()] }],
        p: [{ p: z() }],
        px: [{ px: z() }],
        py: [{ py: z() }],
        ps: [{ ps: z() }],
        pe: [{ pe: z() }],
        pt: [{ pt: z() }],
        pr: [{ pr: z() }],
        pb: [{ pb: z() }],
        pl: [{ pl: z() }],
        m: [{ m: W() }],
        mx: [{ mx: W() }],
        my: [{ my: W() }],
        ms: [{ ms: W() }],
        me: [{ me: W() }],
        mt: [{ mt: W() }],
        mr: [{ mr: W() }],
        mb: [{ mb: W() }],
        ml: [{ ml: W() }],
        "space-x": [{ "space-x": z() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": z() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: fe() }],
        w: [{ w: [m, "screen", ...fe()] }],
        "min-w": [{ "min-w": [m, "screen", "none", ...fe()] }],
        "max-w": [
          { "max-w": [m, "screen", "none", "prose", { screen: [f] }, ...fe()] },
        ],
        h: [{ h: ["screen", ...fe()] }],
        "min-h": [{ "min-h": ["screen", "none", ...fe()] }],
        "max-h": [{ "max-h": ["screen", ...fe()] }],
        "font-size": [{ text: ["base", i, Zs, ya] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [l, ge, Cd] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Dv,
              me,
            ],
          },
        ],
        "font-family": [{ font: [zE, me, r] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, ge, me] }],
        "line-clamp": [{ "line-clamp": [Ne, "none", ge, Cd] }],
        leading: [{ leading: [c, ...z()] }],
        "list-image": [{ "list-image": ["none", ge, me] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ge, me] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: B() }],
        "text-color": [{ text: B() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...N(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Ne, "from-font", "auto", ge, ya] },
        ],
        "text-decoration-color": [{ decoration: B() }],
        "underline-offset": [{ "underline-offset": [Ne, "auto", ge, me] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ge,
              me,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ge, me] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...O(), UE, OE] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", LE, NE] }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  va,
                  ge,
                  me,
                ],
                radial: ["", ge, me],
                conic: [va, ge, me],
              },
              HE,
              DE,
            ],
          },
        ],
        "bg-color": [{ bg: B() }],
        "gradient-from-pos": [{ from: ee() }],
        "gradient-via-pos": [{ via: ee() }],
        "gradient-to-pos": [{ to: ee() }],
        "gradient-from": [{ from: B() }],
        "gradient-via": [{ via: B() }],
        "gradient-to": [{ to: B() }],
        rounded: [{ rounded: X() }],
        "rounded-s": [{ "rounded-s": X() }],
        "rounded-e": [{ "rounded-e": X() }],
        "rounded-t": [{ "rounded-t": X() }],
        "rounded-r": [{ "rounded-r": X() }],
        "rounded-b": [{ "rounded-b": X() }],
        "rounded-l": [{ "rounded-l": X() }],
        "rounded-ss": [{ "rounded-ss": X() }],
        "rounded-se": [{ "rounded-se": X() }],
        "rounded-ee": [{ "rounded-ee": X() }],
        "rounded-es": [{ "rounded-es": X() }],
        "rounded-tl": [{ "rounded-tl": X() }],
        "rounded-tr": [{ "rounded-tr": X() }],
        "rounded-br": [{ "rounded-br": X() }],
        "rounded-bl": [{ "rounded-bl": X() }],
        "border-w": [{ border: ie() }],
        "border-w-x": [{ "border-x": ie() }],
        "border-w-y": [{ "border-y": ie() }],
        "border-w-s": [{ "border-s": ie() }],
        "border-w-e": [{ "border-e": ie() }],
        "border-w-t": [{ "border-t": ie() }],
        "border-w-r": [{ "border-r": ie() }],
        "border-w-b": [{ "border-b": ie() }],
        "border-w-l": [{ "border-l": ie() }],
        "divide-x": [{ "divide-x": ie() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ie() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...N(), "hidden", "none"] }],
        "divide-style": [{ divide: [...N(), "hidden", "none"] }],
        "border-color": [{ border: B() }],
        "border-color-x": [{ "border-x": B() }],
        "border-color-y": [{ "border-y": B() }],
        "border-color-s": [{ "border-s": B() }],
        "border-color-e": [{ "border-e": B() }],
        "border-color-t": [{ "border-t": B() }],
        "border-color-r": [{ "border-r": B() }],
        "border-color-b": [{ "border-b": B() }],
        "border-color-l": [{ "border-l": B() }],
        "divide-color": [{ divide: B() }],
        "outline-style": [{ outline: [...N(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Ne, ge, me] }],
        "outline-w": [{ outline: ["", Ne, Zs, ya] }],
        "outline-color": [{ outline: [e] }],
        shadow: [{ shadow: ["", "none", p, kE, jE] }],
        "shadow-color": [{ shadow: B() }],
        "inset-shadow": [{ "inset-shadow": ["none", ge, me, y] }],
        "inset-shadow-color": [{ "inset-shadow": B() }],
        "ring-w": [{ ring: ie() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: B() }],
        "ring-offset-w": [{ "ring-offset": [Ne, ya] }],
        "ring-offset-color": [{ "ring-offset": B() }],
        "inset-ring-w": [{ "inset-ring": ie() }],
        "inset-ring-color": [{ "inset-ring": B() }],
        opacity: [{ opacity: [Ne, ge, me] }],
        "mix-blend": [{ "mix-blend": [...$(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": $() }],
        filter: [{ filter: ["", "none", ge, me] }],
        blur: [{ blur: ce() }],
        brightness: [{ brightness: [Ne, ge, me] }],
        contrast: [{ contrast: [Ne, ge, me] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", b, ge, me] }],
        grayscale: [{ grayscale: ["", Ne, ge, me] }],
        "hue-rotate": [{ "hue-rotate": [Ne, ge, me] }],
        invert: [{ invert: ["", Ne, ge, me] }],
        saturate: [{ saturate: [Ne, ge, me] }],
        sepia: [{ sepia: ["", Ne, ge, me] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ge, me] }],
        "backdrop-blur": [{ "backdrop-blur": ce() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Ne, ge, me] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Ne, ge, me] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Ne, ge, me] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Ne, ge, me] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Ne, ge, me] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Ne, ge, me] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Ne, ge, me] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Ne, ge, me] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": z() }],
        "border-spacing-x": [{ "border-spacing-x": z() }],
        "border-spacing-y": [{ "border-spacing-y": z() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ge,
              me,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Ne, "initial", ge, me] }],
        ease: [{ ease: ["linear", "initial", T, ge, me] }],
        delay: [{ delay: [Ne, ge, me] }],
        animate: [{ animate: ["none", M, ge, me] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [A, ge, me] }],
        "perspective-origin": [{ "perspective-origin": de() }],
        rotate: [{ rotate: le() }],
        "rotate-x": [{ "rotate-x": le() }],
        "rotate-y": [{ "rotate-y": le() }],
        "rotate-z": [{ "rotate-z": le() }],
        scale: [{ scale: ye() }],
        "scale-x": [{ "scale-x": ye() }],
        "scale-y": [{ "scale-y": ye() }],
        "scale-z": [{ "scale-z": ye() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: xe() }],
        "skew-x": [{ "skew-x": xe() }],
        "skew-y": [{ "skew-y": xe() }],
        transform: [{ transform: [ge, me, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: de() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: ue() }],
        "translate-x": [{ "translate-x": ue() }],
        "translate-y": [{ "translate-y": ue() }],
        "translate-z": [{ "translate-z": ue() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: B() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: B() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ge,
              me,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": z() }],
        "scroll-mx": [{ "scroll-mx": z() }],
        "scroll-my": [{ "scroll-my": z() }],
        "scroll-ms": [{ "scroll-ms": z() }],
        "scroll-me": [{ "scroll-me": z() }],
        "scroll-mt": [{ "scroll-mt": z() }],
        "scroll-mr": [{ "scroll-mr": z() }],
        "scroll-mb": [{ "scroll-mb": z() }],
        "scroll-ml": [{ "scroll-ml": z() }],
        "scroll-p": [{ "scroll-p": z() }],
        "scroll-px": [{ "scroll-px": z() }],
        "scroll-py": [{ "scroll-py": z() }],
        "scroll-ps": [{ "scroll-ps": z() }],
        "scroll-pe": [{ "scroll-pe": z() }],
        "scroll-pt": [{ "scroll-pt": z() }],
        "scroll-pr": [{ "scroll-pr": z() }],
        "scroll-pb": [{ "scroll-pb": z() }],
        "scroll-pl": [{ "scroll-pl": z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ge, me],
          },
        ],
        fill: [{ fill: ["none", ...B()] }],
        "stroke-w": [{ stroke: [Ne, Zs, ya, Cd] }],
        stroke: [{ stroke: ["none", ...B()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "before",
        "after",
        "placeholder",
        "file",
        "marker",
        "selection",
        "first-line",
        "first-letter",
        "backdrop",
        "*",
        "**",
      ],
    };
  },
  FE = yE(XE);
function ar(...e) {
  return FE(b1(e));
}
const To = [
  "SEP",
  "OCT",
  "NOV",
  "DEC",
  "JAN",
  "FEV",
  "MAR",
  "AVR",
  "MAI",
  "JUI",
  "JUIL",
  "AOU",
];
function ft(e) {
  const r = [
      "JAN",
      "FEV",
      "MAR",
      "AVR",
      "MAI",
      "JUI",
      "JUIL",
      "AOU",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    l = new Date(e).getMonth();
  return r[l];
}
function Bh(e) {
  const r = new Date(e),
    l = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ][r.getMonth()],
    s = r.getFullYear();
  return `${l} ${s}`;
}
function PE(e, r) {
  e = e.replace("#", "");
  const i = parseInt(e.substring(0, 2), 16),
    l = parseInt(e.substring(2, 4), 16),
    s = parseInt(e.substring(4, 6), 16);
  return `rgba(${i}, ${l}, ${s}, ${r})`;
}
const Yu = ({ xScale: e, y: r }) => {
  const i = e
    .domain()
    .map((l, s) =>
      v.jsx(
        "g",
        {
          children: v.jsx("text", {
            x: (e(l) ?? 0) + e.bandwidth() / 2,
            y: r,
            textAnchor: "middle",
            alignmentBaseline: "central",
            fontSize: 12,
            fill: "black",
            children: l,
          }),
        },
        s
      )
    );
  return v.jsx("g", { children: i });
};
function uu(e, r) {
  return e == null || r == null
    ? NaN
    : e < r
    ? -1
    : e > r
    ? 1
    : e >= r
    ? 0
    : NaN;
}
function QE(e, r) {
  return e == null || r == null
    ? NaN
    : r < e
    ? -1
    : r > e
    ? 1
    : r >= e
    ? 0
    : NaN;
}
function Vh(e) {
  let r, i, l;
  e.length !== 2
    ? ((r = uu), (i = (m, g) => uu(e(m), g)), (l = (m, g) => e(m) - g))
    : ((r = e === uu || e === QE ? e : $E), (i = e), (l = e));
  function s(m, g, h = 0, p = m.length) {
    if (h < p) {
      if (r(g, g) !== 0) return p;
      do {
        const y = (h + p) >>> 1;
        i(m[y], g) < 0 ? (h = y + 1) : (p = y);
      } while (h < p);
    }
    return h;
  }
  function c(m, g, h = 0, p = m.length) {
    if (h < p) {
      if (r(g, g) !== 0) return p;
      do {
        const y = (h + p) >>> 1;
        i(m[y], g) <= 0 ? (h = y + 1) : (p = y);
      } while (h < p);
    }
    return h;
  }
  function f(m, g, h = 0, p = m.length) {
    const y = s(m, g, h, p - 1);
    return y > h && l(m[y - 1], g) > -l(m[y], g) ? y - 1 : y;
  }
  return { left: s, center: f, right: c };
}
function $E() {
  return 0;
}
function ZE(e) {
  return e === null ? NaN : +e;
}
const KE = Vh(uu),
  WE = KE.right;
Vh(ZE).center;
class jv extends Map {
  constructor(r, i = e_) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: i },
      }),
      r != null)
    )
      for (const [l, s] of r) this.set(l, s);
  }
  get(r) {
    return super.get(zv(this, r));
  }
  has(r) {
    return super.has(zv(this, r));
  }
  set(r, i) {
    return super.set(IE(this, r), i);
  }
  delete(r) {
    return super.delete(JE(this, r));
  }
}
function zv({ _intern: e, _key: r }, i) {
  const l = r(i);
  return e.has(l) ? e.get(l) : i;
}
function IE({ _intern: e, _key: r }, i) {
  const l = r(i);
  return e.has(l) ? e.get(l) : (e.set(l, i), i);
}
function JE({ _intern: e, _key: r }, i) {
  const l = r(i);
  return e.has(l) && ((i = e.get(l)), e.delete(l)), i;
}
function e_(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const t_ = Math.sqrt(50),
  n_ = Math.sqrt(10),
  r_ = Math.sqrt(2);
function yu(e, r, i) {
  const l = (r - e) / Math.max(0, i),
    s = Math.floor(Math.log10(l)),
    c = l / Math.pow(10, s),
    f = c >= t_ ? 10 : c >= n_ ? 5 : c >= r_ ? 2 : 1;
  let m, g, h;
  return (
    s < 0
      ? ((h = Math.pow(10, -s) / f),
        (m = Math.round(e * h)),
        (g = Math.round(r * h)),
        m / h < e && ++m,
        g / h > r && --g,
        (h = -h))
      : ((h = Math.pow(10, s) * f),
        (m = Math.round(e / h)),
        (g = Math.round(r / h)),
        m * h < e && ++m,
        g * h > r && --g),
    g < m && 0.5 <= i && i < 2 ? yu(e, r, i * 2) : [m, g, h]
  );
}
function a_(e, r, i) {
  if (((r = +r), (e = +e), (i = +i), !(i > 0))) return [];
  if (e === r) return [e];
  const l = r < e,
    [s, c, f] = l ? yu(r, e, i) : yu(e, r, i);
  if (!(c >= s)) return [];
  const m = c - s + 1,
    g = new Array(m);
  if (l)
    if (f < 0) for (let h = 0; h < m; ++h) g[h] = (c - h) / -f;
    else for (let h = 0; h < m; ++h) g[h] = (c - h) * f;
  else if (f < 0) for (let h = 0; h < m; ++h) g[h] = (s + h) / -f;
  else for (let h = 0; h < m; ++h) g[h] = (s + h) * f;
  return g;
}
function ah(e, r, i) {
  return (r = +r), (e = +e), (i = +i), yu(e, r, i)[2];
}
function ih(e, r, i) {
  (r = +r), (e = +e), (i = +i);
  const l = r < e,
    s = l ? ah(r, e, i) : ah(e, r, i);
  return (l ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function i_(e, r, i) {
  (e = +e),
    (r = +r),
    (i = (s = arguments.length) < 2 ? ((r = e), (e = 0), 1) : s < 3 ? 1 : +i);
  for (
    var l = -1, s = Math.max(0, Math.ceil((r - e) / i)) | 0, c = new Array(s);
    ++l < s;

  )
    c[l] = e + l * i;
  return c;
}
var l_ = { value: () => {} };
function R1() {
  for (var e = 0, r = arguments.length, i = {}, l; e < r; ++e) {
    if (!(l = arguments[e] + "") || l in i || /[\s.]/.test(l))
      throw new Error("illegal type: " + l);
    i[l] = [];
  }
  return new cu(i);
}
function cu(e) {
  this._ = e;
}
function o_(e, r) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (i) {
      var l = "",
        s = i.indexOf(".");
      if (
        (s >= 0 && ((l = i.slice(s + 1)), (i = i.slice(0, s))),
        i && !r.hasOwnProperty(i))
      )
        throw new Error("unknown type: " + i);
      return { type: i, name: l };
    });
}
cu.prototype = R1.prototype = {
  constructor: cu,
  on: function (e, r) {
    var i = this._,
      l = o_(e + "", i),
      s,
      c = -1,
      f = l.length;
    if (arguments.length < 2) {
      for (; ++c < f; )
        if ((s = (e = l[c]).type) && (s = s_(i[s], e.name))) return s;
      return;
    }
    if (r != null && typeof r != "function")
      throw new Error("invalid callback: " + r);
    for (; ++c < f; )
      if ((s = (e = l[c]).type)) i[s] = Uv(i[s], e.name, r);
      else if (r == null) for (s in i) i[s] = Uv(i[s], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      r = this._;
    for (var i in r) e[i] = r[i].slice();
    return new cu(e);
  },
  call: function (e, r) {
    if ((s = arguments.length - 2) > 0)
      for (var i = new Array(s), l = 0, s, c; l < s; ++l)
        i[l] = arguments[l + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (c = this._[e], l = 0, s = c.length; l < s; ++l) c[l].value.apply(r, i);
  },
  apply: function (e, r, i) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var l = this._[e], s = 0, c = l.length; s < c; ++s)
      l[s].value.apply(r, i);
  },
};
function s_(e, r) {
  for (var i = 0, l = e.length, s; i < l; ++i)
    if ((s = e[i]).name === r) return s.value;
}
function Uv(e, r, i) {
  for (var l = 0, s = e.length; l < s; ++l)
    if (e[l].name === r) {
      (e[l] = l_), (e = e.slice(0, l).concat(e.slice(l + 1)));
      break;
    }
  return i != null && e.push({ name: r, value: i }), e;
}
var lh = "http://www.w3.org/1999/xhtml";
const Lv = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: lh,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function Gu(e) {
  var r = (e += ""),
    i = r.indexOf(":");
  return (
    i >= 0 && (r = e.slice(0, i)) !== "xmlns" && (e = e.slice(i + 1)),
    Lv.hasOwnProperty(r) ? { space: Lv[r], local: e } : e
  );
}
function u_(e) {
  return function () {
    var r = this.ownerDocument,
      i = this.namespaceURI;
    return i === lh && r.documentElement.namespaceURI === lh
      ? r.createElement(e)
      : r.createElementNS(i, e);
  };
}
function c_(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function N1(e) {
  var r = Gu(e);
  return (r.local ? c_ : u_)(r);
}
function f_() {}
function qh(e) {
  return e == null
    ? f_
    : function () {
        return this.querySelector(e);
      };
}
function d_(e) {
  typeof e != "function" && (e = qh(e));
  for (var r = this._groups, i = r.length, l = new Array(i), s = 0; s < i; ++s)
    for (
      var c = r[s], f = c.length, m = (l[s] = new Array(f)), g, h, p = 0;
      p < f;
      ++p
    )
      (g = c[p]) &&
        (h = e.call(g, g.__data__, p, c)) &&
        ("__data__" in g && (h.__data__ = g.__data__), (m[p] = h));
  return new fn(l, this._parents);
}
function h_(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function m_() {
  return [];
}
function O1(e) {
  return e == null
    ? m_
    : function () {
        return this.querySelectorAll(e);
      };
}
function g_(e) {
  return function () {
    return h_(e.apply(this, arguments));
  };
}
function p_(e) {
  typeof e == "function" ? (e = g_(e)) : (e = O1(e));
  for (var r = this._groups, i = r.length, l = [], s = [], c = 0; c < i; ++c)
    for (var f = r[c], m = f.length, g, h = 0; h < m; ++h)
      (g = f[h]) && (l.push(e.call(g, g.__data__, h, f)), s.push(g));
  return new fn(l, s);
}
function D1(e) {
  return function () {
    return this.matches(e);
  };
}
function j1(e) {
  return function (r) {
    return r.matches(e);
  };
}
var v_ = Array.prototype.find;
function y_(e) {
  return function () {
    return v_.call(this.children, e);
  };
}
function x_() {
  return this.firstElementChild;
}
function b_(e) {
  return this.select(e == null ? x_ : y_(typeof e == "function" ? e : j1(e)));
}
var S_ = Array.prototype.filter;
function w_() {
  return Array.from(this.children);
}
function E_(e) {
  return function () {
    return S_.call(this.children, e);
  };
}
function __(e) {
  return this.selectAll(
    e == null ? w_ : E_(typeof e == "function" ? e : j1(e))
  );
}
function A_(e) {
  typeof e != "function" && (e = D1(e));
  for (var r = this._groups, i = r.length, l = new Array(i), s = 0; s < i; ++s)
    for (var c = r[s], f = c.length, m = (l[s] = []), g, h = 0; h < f; ++h)
      (g = c[h]) && e.call(g, g.__data__, h, c) && m.push(g);
  return new fn(l, this._parents);
}
function z1(e) {
  return new Array(e.length);
}
function T_() {
  return new fn(this._enter || this._groups.map(z1), this._parents);
}
function xu(e, r) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = r);
}
xu.prototype = {
  constructor: xu,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, r) {
    return this._parent.insertBefore(e, r);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function M_(e) {
  return function () {
    return e;
  };
}
function C_(e, r, i, l, s, c) {
  for (var f = 0, m, g = r.length, h = c.length; f < h; ++f)
    (m = r[f]) ? ((m.__data__ = c[f]), (l[f] = m)) : (i[f] = new xu(e, c[f]));
  for (; f < g; ++f) (m = r[f]) && (s[f] = m);
}
function R_(e, r, i, l, s, c, f) {
  var m,
    g,
    h = new Map(),
    p = r.length,
    y = c.length,
    b = new Array(p),
    S;
  for (m = 0; m < p; ++m)
    (g = r[m]) &&
      ((b[m] = S = f.call(g, g.__data__, m, r) + ""),
      h.has(S) ? (s[m] = g) : h.set(S, g));
  for (m = 0; m < y; ++m)
    (S = f.call(e, c[m], m, c) + ""),
      (g = h.get(S))
        ? ((l[m] = g), (g.__data__ = c[m]), h.delete(S))
        : (i[m] = new xu(e, c[m]));
  for (m = 0; m < p; ++m) (g = r[m]) && h.get(b[m]) === g && (s[m] = g);
}
function N_(e) {
  return e.__data__;
}
function O_(e, r) {
  if (!arguments.length) return Array.from(this, N_);
  var i = r ? R_ : C_,
    l = this._parents,
    s = this._groups;
  typeof e != "function" && (e = M_(e));
  for (
    var c = s.length,
      f = new Array(c),
      m = new Array(c),
      g = new Array(c),
      h = 0;
    h < c;
    ++h
  ) {
    var p = l[h],
      y = s[h],
      b = y.length,
      S = D_(e.call(p, p && p.__data__, h, l)),
      A = S.length,
      w = (m[h] = new Array(A)),
      T = (f[h] = new Array(A)),
      M = (g[h] = new Array(b));
    i(p, y, w, T, M, S, r);
    for (var R = 0, O = 0, L, D; R < A; ++R)
      if ((L = w[R])) {
        for (R >= O && (O = R + 1); !(D = T[O]) && ++O < A; );
        L._next = D || null;
      }
  }
  return (f = new fn(f, l)), (f._enter = m), (f._exit = g), f;
}
function D_(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function j_() {
  return new fn(this._exit || this._groups.map(z1), this._parents);
}
function z_(e, r, i) {
  var l = this.enter(),
    s = this,
    c = this.exit();
  return (
    typeof e == "function"
      ? ((l = e(l)), l && (l = l.selection()))
      : (l = l.append(e + "")),
    r != null && ((s = r(s)), s && (s = s.selection())),
    i == null ? c.remove() : i(c),
    l && s ? l.merge(s).order() : s
  );
}
function U_(e) {
  for (
    var r = e.selection ? e.selection() : e,
      i = this._groups,
      l = r._groups,
      s = i.length,
      c = l.length,
      f = Math.min(s, c),
      m = new Array(s),
      g = 0;
    g < f;
    ++g
  )
    for (
      var h = i[g], p = l[g], y = h.length, b = (m[g] = new Array(y)), S, A = 0;
      A < y;
      ++A
    )
      (S = h[A] || p[A]) && (b[A] = S);
  for (; g < s; ++g) m[g] = i[g];
  return new fn(m, this._parents);
}
function L_() {
  for (var e = this._groups, r = -1, i = e.length; ++r < i; )
    for (var l = e[r], s = l.length - 1, c = l[s], f; --s >= 0; )
      (f = l[s]) &&
        (c &&
          f.compareDocumentPosition(c) ^ 4 &&
          c.parentNode.insertBefore(f, c),
        (c = f));
  return this;
}
function H_(e) {
  e || (e = k_);
  function r(y, b) {
    return y && b ? e(y.__data__, b.__data__) : !y - !b;
  }
  for (
    var i = this._groups, l = i.length, s = new Array(l), c = 0;
    c < l;
    ++c
  ) {
    for (
      var f = i[c], m = f.length, g = (s[c] = new Array(m)), h, p = 0;
      p < m;
      ++p
    )
      (h = f[p]) && (g[p] = h);
    g.sort(r);
  }
  return new fn(s, this._parents).order();
}
function k_(e, r) {
  return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function B_() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function V_() {
  return Array.from(this);
}
function q_() {
  for (var e = this._groups, r = 0, i = e.length; r < i; ++r)
    for (var l = e[r], s = 0, c = l.length; s < c; ++s) {
      var f = l[s];
      if (f) return f;
    }
  return null;
}
function Y_() {
  let e = 0;
  for (const r of this) ++e;
  return e;
}
function G_() {
  return !this.node();
}
function X_(e) {
  for (var r = this._groups, i = 0, l = r.length; i < l; ++i)
    for (var s = r[i], c = 0, f = s.length, m; c < f; ++c)
      (m = s[c]) && e.call(m, m.__data__, c, s);
  return this;
}
function F_(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function P_(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Q_(e, r) {
  return function () {
    this.setAttribute(e, r);
  };
}
function $_(e, r) {
  return function () {
    this.setAttributeNS(e.space, e.local, r);
  };
}
function Z_(e, r) {
  return function () {
    var i = r.apply(this, arguments);
    i == null ? this.removeAttribute(e) : this.setAttribute(e, i);
  };
}
function K_(e, r) {
  return function () {
    var i = r.apply(this, arguments);
    i == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, i);
  };
}
function W_(e, r) {
  var i = Gu(e);
  if (arguments.length < 2) {
    var l = this.node();
    return i.local ? l.getAttributeNS(i.space, i.local) : l.getAttribute(i);
  }
  return this.each(
    (r == null
      ? i.local
        ? P_
        : F_
      : typeof r == "function"
      ? i.local
        ? K_
        : Z_
      : i.local
      ? $_
      : Q_)(i, r)
  );
}
function U1(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function I_(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function J_(e, r, i) {
  return function () {
    this.style.setProperty(e, r, i);
  };
}
function eA(e, r, i) {
  return function () {
    var l = r.apply(this, arguments);
    l == null ? this.style.removeProperty(e) : this.style.setProperty(e, l, i);
  };
}
function tA(e, r, i) {
  return arguments.length > 1
    ? this.each(
        (r == null ? I_ : typeof r == "function" ? eA : J_)(e, r, i ?? "")
      )
    : Di(this.node(), e);
}
function Di(e, r) {
  return (
    e.style.getPropertyValue(r) ||
    U1(e).getComputedStyle(e, null).getPropertyValue(r)
  );
}
function nA(e) {
  return function () {
    delete this[e];
  };
}
function rA(e, r) {
  return function () {
    this[e] = r;
  };
}
function aA(e, r) {
  return function () {
    var i = r.apply(this, arguments);
    i == null ? delete this[e] : (this[e] = i);
  };
}
function iA(e, r) {
  return arguments.length > 1
    ? this.each((r == null ? nA : typeof r == "function" ? aA : rA)(e, r))
    : this.node()[e];
}
function L1(e) {
  return e.trim().split(/^|\s+/);
}
function Yh(e) {
  return e.classList || new H1(e);
}
function H1(e) {
  (this._node = e), (this._names = L1(e.getAttribute("class") || ""));
}
H1.prototype = {
  add: function (e) {
    var r = this._names.indexOf(e);
    r < 0 &&
      (this._names.push(e),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (e) {
    var r = this._names.indexOf(e);
    r >= 0 &&
      (this._names.splice(r, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function k1(e, r) {
  for (var i = Yh(e), l = -1, s = r.length; ++l < s; ) i.add(r[l]);
}
function B1(e, r) {
  for (var i = Yh(e), l = -1, s = r.length; ++l < s; ) i.remove(r[l]);
}
function lA(e) {
  return function () {
    k1(this, e);
  };
}
function oA(e) {
  return function () {
    B1(this, e);
  };
}
function sA(e, r) {
  return function () {
    (r.apply(this, arguments) ? k1 : B1)(this, e);
  };
}
function uA(e, r) {
  var i = L1(e + "");
  if (arguments.length < 2) {
    for (var l = Yh(this.node()), s = -1, c = i.length; ++s < c; )
      if (!l.contains(i[s])) return !1;
    return !0;
  }
  return this.each((typeof r == "function" ? sA : r ? lA : oA)(i, r));
}
function cA() {
  this.textContent = "";
}
function fA(e) {
  return function () {
    this.textContent = e;
  };
}
function dA(e) {
  return function () {
    var r = e.apply(this, arguments);
    this.textContent = r ?? "";
  };
}
function hA(e) {
  return arguments.length
    ? this.each(e == null ? cA : (typeof e == "function" ? dA : fA)(e))
    : this.node().textContent;
}
function mA() {
  this.innerHTML = "";
}
function gA(e) {
  return function () {
    this.innerHTML = e;
  };
}
function pA(e) {
  return function () {
    var r = e.apply(this, arguments);
    this.innerHTML = r ?? "";
  };
}
function vA(e) {
  return arguments.length
    ? this.each(e == null ? mA : (typeof e == "function" ? pA : gA)(e))
    : this.node().innerHTML;
}
function yA() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xA() {
  return this.each(yA);
}
function bA() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function SA() {
  return this.each(bA);
}
function wA(e) {
  var r = typeof e == "function" ? e : N1(e);
  return this.select(function () {
    return this.appendChild(r.apply(this, arguments));
  });
}
function EA() {
  return null;
}
function _A(e, r) {
  var i = typeof e == "function" ? e : N1(e),
    l = r == null ? EA : typeof r == "function" ? r : qh(r);
  return this.select(function () {
    return this.insertBefore(
      i.apply(this, arguments),
      l.apply(this, arguments) || null
    );
  });
}
function AA() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function TA() {
  return this.each(AA);
}
function MA() {
  var e = this.cloneNode(!1),
    r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function CA() {
  var e = this.cloneNode(!0),
    r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function RA(e) {
  return this.select(e ? CA : MA);
}
function NA(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function OA(e) {
  return function (r) {
    e.call(this, r, this.__data__);
  };
}
function DA(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (r) {
      var i = "",
        l = r.indexOf(".");
      return (
        l >= 0 && ((i = r.slice(l + 1)), (r = r.slice(0, l))),
        { type: r, name: i }
      );
    });
}
function jA(e) {
  return function () {
    var r = this.__on;
    if (r) {
      for (var i = 0, l = -1, s = r.length, c; i < s; ++i)
        (c = r[i]),
          (!e.type || c.type === e.type) && c.name === e.name
            ? this.removeEventListener(c.type, c.listener, c.options)
            : (r[++l] = c);
      ++l ? (r.length = l) : delete this.__on;
    }
  };
}
function zA(e, r, i) {
  return function () {
    var l = this.__on,
      s,
      c = OA(r);
    if (l) {
      for (var f = 0, m = l.length; f < m; ++f)
        if ((s = l[f]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options),
            this.addEventListener(s.type, (s.listener = c), (s.options = i)),
            (s.value = r);
          return;
        }
    }
    this.addEventListener(e.type, c, i),
      (s = { type: e.type, name: e.name, value: r, listener: c, options: i }),
      l ? l.push(s) : (this.__on = [s]);
  };
}
function UA(e, r, i) {
  var l = DA(e + ""),
    s,
    c = l.length,
    f;
  if (arguments.length < 2) {
    var m = this.node().__on;
    if (m) {
      for (var g = 0, h = m.length, p; g < h; ++g)
        for (s = 0, p = m[g]; s < c; ++s)
          if ((f = l[s]).type === p.type && f.name === p.name) return p.value;
    }
    return;
  }
  for (m = r ? zA : jA, s = 0; s < c; ++s) this.each(m(l[s], r, i));
  return this;
}
function V1(e, r, i) {
  var l = U1(e),
    s = l.CustomEvent;
  typeof s == "function"
    ? (s = new s(r, i))
    : ((s = l.document.createEvent("Event")),
      i
        ? (s.initEvent(r, i.bubbles, i.cancelable), (s.detail = i.detail))
        : s.initEvent(r, !1, !1)),
    e.dispatchEvent(s);
}
function LA(e, r) {
  return function () {
    return V1(this, e, r);
  };
}
function HA(e, r) {
  return function () {
    return V1(this, e, r.apply(this, arguments));
  };
}
function kA(e, r) {
  return this.each((typeof r == "function" ? HA : LA)(e, r));
}
function* BA() {
  for (var e = this._groups, r = 0, i = e.length; r < i; ++r)
    for (var l = e[r], s = 0, c = l.length, f; s < c; ++s)
      (f = l[s]) && (yield f);
}
var VA = [null];
function fn(e, r) {
  (this._groups = e), (this._parents = r);
}
function Mo() {
  return new fn([[document.documentElement]], VA);
}
function qA() {
  return this;
}
fn.prototype = Mo.prototype = {
  constructor: fn,
  select: d_,
  selectAll: p_,
  selectChild: b_,
  selectChildren: __,
  filter: A_,
  data: O_,
  enter: T_,
  exit: j_,
  join: z_,
  merge: U_,
  selection: qA,
  order: L_,
  sort: H_,
  call: B_,
  nodes: V_,
  node: q_,
  size: Y_,
  empty: G_,
  each: X_,
  attr: W_,
  style: tA,
  property: iA,
  classed: uA,
  text: hA,
  html: vA,
  raise: xA,
  lower: SA,
  append: wA,
  insert: _A,
  remove: TA,
  clone: RA,
  datum: NA,
  on: UA,
  dispatch: kA,
  [Symbol.iterator]: BA,
};
function Gh(e, r, i) {
  (e.prototype = r.prototype = i), (i.constructor = e);
}
function q1(e, r) {
  var i = Object.create(e.prototype);
  for (var l in r) i[l] = r[l];
  return i;
}
function Co() {}
var co = 0.7,
  bu = 1 / co,
  Mi = "\\s*([+-]?\\d+)\\s*",
  fo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  YA = /^#([0-9a-f]{3,8})$/,
  GA = new RegExp(`^rgb\\(${Mi},${Mi},${Mi}\\)$`),
  XA = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`),
  FA = new RegExp(`^rgba\\(${Mi},${Mi},${Mi},${fo}\\)$`),
  PA = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${fo}\\)$`),
  QA = new RegExp(`^hsl\\(${fo},${Tn},${Tn}\\)$`),
  $A = new RegExp(`^hsla\\(${fo},${Tn},${Tn},${fo}\\)$`),
  Hv = {
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
  };
Gh(Co, Ta, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: kv,
  formatHex: kv,
  formatHex8: ZA,
  formatHsl: KA,
  formatRgb: Bv,
  toString: Bv,
});
function kv() {
  return this.rgb().formatHex();
}
function ZA() {
  return this.rgb().formatHex8();
}
function KA() {
  return Y1(this).formatHsl();
}
function Bv() {
  return this.rgb().formatRgb();
}
function Ta(e) {
  var r, i;
  return (
    (e = (e + "").trim().toLowerCase()),
    (r = YA.exec(e))
      ? ((i = r[1].length),
        (r = parseInt(r[1], 16)),
        i === 6
          ? Vv(r)
          : i === 3
          ? new Rt(
              ((r >> 8) & 15) | ((r >> 4) & 240),
              ((r >> 4) & 15) | (r & 240),
              ((r & 15) << 4) | (r & 15),
              1
            )
          : i === 8
          ? Ks(
              (r >> 24) & 255,
              (r >> 16) & 255,
              (r >> 8) & 255,
              (r & 255) / 255
            )
          : i === 4
          ? Ks(
              ((r >> 12) & 15) | ((r >> 8) & 240),
              ((r >> 8) & 15) | ((r >> 4) & 240),
              ((r >> 4) & 15) | (r & 240),
              (((r & 15) << 4) | (r & 15)) / 255
            )
          : null)
      : (r = GA.exec(e))
      ? new Rt(r[1], r[2], r[3], 1)
      : (r = XA.exec(e))
      ? new Rt((r[1] * 255) / 100, (r[2] * 255) / 100, (r[3] * 255) / 100, 1)
      : (r = FA.exec(e))
      ? Ks(r[1], r[2], r[3], r[4])
      : (r = PA.exec(e))
      ? Ks((r[1] * 255) / 100, (r[2] * 255) / 100, (r[3] * 255) / 100, r[4])
      : (r = QA.exec(e))
      ? Gv(r[1], r[2] / 100, r[3] / 100, 1)
      : (r = $A.exec(e))
      ? Gv(r[1], r[2] / 100, r[3] / 100, r[4])
      : Hv.hasOwnProperty(e)
      ? Vv(Hv[e])
      : e === "transparent"
      ? new Rt(NaN, NaN, NaN, 0)
      : null
  );
}
function Vv(e) {
  return new Rt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Ks(e, r, i, l) {
  return l <= 0 && (e = r = i = NaN), new Rt(e, r, i, l);
}
function WA(e) {
  return (
    e instanceof Co || (e = Ta(e)),
    e ? ((e = e.rgb()), new Rt(e.r, e.g, e.b, e.opacity)) : new Rt()
  );
}
function oh(e, r, i, l) {
  return arguments.length === 1 ? WA(e) : new Rt(e, r, i, l ?? 1);
}
function Rt(e, r, i, l) {
  (this.r = +e), (this.g = +r), (this.b = +i), (this.opacity = +l);
}
Gh(
  Rt,
  oh,
  q1(Co, {
    brighter(e) {
      return (
        (e = e == null ? bu : Math.pow(bu, e)),
        new Rt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? co : Math.pow(co, e)),
        new Rt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rt(Aa(this.r), Aa(this.g), Aa(this.b), Su(this.opacity));
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
      );
    },
    hex: qv,
    formatHex: qv,
    formatHex8: IA,
    formatRgb: Yv,
    toString: Yv,
  })
);
function qv() {
  return `#${_a(this.r)}${_a(this.g)}${_a(this.b)}`;
}
function IA() {
  return `#${_a(this.r)}${_a(this.g)}${_a(this.b)}${_a(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function Yv() {
  const e = Su(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Aa(this.r)}, ${Aa(this.g)}, ${Aa(
    this.b
  )}${e === 1 ? ")" : `, ${e})`}`;
}
function Su(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Aa(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _a(e) {
  return (e = Aa(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function Gv(e, r, i, l) {
  return (
    l <= 0
      ? (e = r = i = NaN)
      : i <= 0 || i >= 1
      ? (e = r = NaN)
      : r <= 0 && (e = NaN),
    new un(e, r, i, l)
  );
}
function Y1(e) {
  if (e instanceof un) return new un(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Co || (e = Ta(e)), !e)) return new un();
  if (e instanceof un) return e;
  e = e.rgb();
  var r = e.r / 255,
    i = e.g / 255,
    l = e.b / 255,
    s = Math.min(r, i, l),
    c = Math.max(r, i, l),
    f = NaN,
    m = c - s,
    g = (c + s) / 2;
  return (
    m
      ? (r === c
          ? (f = (i - l) / m + (i < l) * 6)
          : i === c
          ? (f = (l - r) / m + 2)
          : (f = (r - i) / m + 4),
        (m /= g < 0.5 ? c + s : 2 - c - s),
        (f *= 60))
      : (m = g > 0 && g < 1 ? 0 : f),
    new un(f, m, g, e.opacity)
  );
}
function JA(e, r, i, l) {
  return arguments.length === 1 ? Y1(e) : new un(e, r, i, l ?? 1);
}
function un(e, r, i, l) {
  (this.h = +e), (this.s = +r), (this.l = +i), (this.opacity = +l);
}
Gh(
  un,
  JA,
  q1(Co, {
    brighter(e) {
      return (
        (e = e == null ? bu : Math.pow(bu, e)),
        new un(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? co : Math.pow(co, e)),
        new un(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        r = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        i = this.l,
        l = i + (i < 0.5 ? i : 1 - i) * r,
        s = 2 * i - l;
      return new Rt(
        Rd(e >= 240 ? e - 240 : e + 120, s, l),
        Rd(e, s, l),
        Rd(e < 120 ? e + 240 : e - 120, s, l),
        this.opacity
      );
    },
    clamp() {
      return new un(Xv(this.h), Ws(this.s), Ws(this.l), Su(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Su(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${Xv(this.h)}, ${
        Ws(this.s) * 100
      }%, ${Ws(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  })
);
function Xv(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function Ws(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Rd(e, r, i) {
  return (
    (e < 60
      ? r + ((i - r) * e) / 60
      : e < 180
      ? i
      : e < 240
      ? r + ((i - r) * (240 - e)) / 60
      : r) * 255
  );
}
const Xh = (e) => () => e;
function eT(e, r) {
  return function (i) {
    return e + i * r;
  };
}
function tT(e, r, i) {
  return (
    (e = Math.pow(e, i)),
    (r = Math.pow(r, i) - e),
    (i = 1 / i),
    function (l) {
      return Math.pow(e + l * r, i);
    }
  );
}
function nT(e) {
  return (e = +e) == 1
    ? G1
    : function (r, i) {
        return i - r ? tT(r, i, e) : Xh(isNaN(r) ? i : r);
      };
}
function G1(e, r) {
  var i = r - e;
  return i ? eT(e, i) : Xh(isNaN(e) ? r : e);
}
const wu = (function e(r) {
  var i = nT(r);
  function l(s, c) {
    var f = i((s = oh(s)).r, (c = oh(c)).r),
      m = i(s.g, c.g),
      g = i(s.b, c.b),
      h = G1(s.opacity, c.opacity);
    return function (p) {
      return (
        (s.r = f(p)), (s.g = m(p)), (s.b = g(p)), (s.opacity = h(p)), s + ""
      );
    };
  }
  return (l.gamma = e), l;
})(1);
function rT(e, r) {
  r || (r = []);
  var i = e ? Math.min(r.length, e.length) : 0,
    l = r.slice(),
    s;
  return function (c) {
    for (s = 0; s < i; ++s) l[s] = e[s] * (1 - c) + r[s] * c;
    return l;
  };
}
function aT(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function iT(e, r) {
  var i = r ? r.length : 0,
    l = e ? Math.min(i, e.length) : 0,
    s = new Array(l),
    c = new Array(i),
    f;
  for (f = 0; f < l; ++f) s[f] = Fh(e[f], r[f]);
  for (; f < i; ++f) c[f] = r[f];
  return function (m) {
    for (f = 0; f < l; ++f) c[f] = s[f](m);
    return c;
  };
}
function lT(e, r) {
  var i = new Date();
  return (
    (e = +e),
    (r = +r),
    function (l) {
      return i.setTime(e * (1 - l) + r * l), i;
    }
  );
}
function on(e, r) {
  return (
    (e = +e),
    (r = +r),
    function (i) {
      return e * (1 - i) + r * i;
    }
  );
}
function oT(e, r) {
  var i = {},
    l = {},
    s;
  (e === null || typeof e != "object") && (e = {}),
    (r === null || typeof r != "object") && (r = {});
  for (s in r) s in e ? (i[s] = Fh(e[s], r[s])) : (l[s] = r[s]);
  return function (c) {
    for (s in i) l[s] = i[s](c);
    return l;
  };
}
var sh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Nd = new RegExp(sh.source, "g");
function sT(e) {
  return function () {
    return e;
  };
}
function uT(e) {
  return function (r) {
    return e(r) + "";
  };
}
function X1(e, r) {
  var i = (sh.lastIndex = Nd.lastIndex = 0),
    l,
    s,
    c,
    f = -1,
    m = [],
    g = [];
  for (e = e + "", r = r + ""; (l = sh.exec(e)) && (s = Nd.exec(r)); )
    (c = s.index) > i &&
      ((c = r.slice(i, c)), m[f] ? (m[f] += c) : (m[++f] = c)),
      (l = l[0]) === (s = s[0])
        ? m[f]
          ? (m[f] += s)
          : (m[++f] = s)
        : ((m[++f] = null), g.push({ i: f, x: on(l, s) })),
      (i = Nd.lastIndex);
  return (
    i < r.length && ((c = r.slice(i)), m[f] ? (m[f] += c) : (m[++f] = c)),
    m.length < 2
      ? g[0]
        ? uT(g[0].x)
        : sT(r)
      : ((r = g.length),
        function (h) {
          for (var p = 0, y; p < r; ++p) m[(y = g[p]).i] = y.x(h);
          return m.join("");
        })
  );
}
function Fh(e, r) {
  var i = typeof r,
    l;
  return r == null || i === "boolean"
    ? Xh(r)
    : (i === "number"
        ? on
        : i === "string"
        ? (l = Ta(r))
          ? ((r = l), wu)
          : X1
        : r instanceof Ta
        ? wu
        : r instanceof Date
        ? lT
        : aT(r)
        ? rT
        : Array.isArray(r)
        ? iT
        : (typeof r.valueOf != "function" && typeof r.toString != "function") ||
          isNaN(r)
        ? oT
        : on)(e, r);
}
function cT(e, r) {
  return (
    (e = +e),
    (r = +r),
    function (i) {
      return Math.round(e * (1 - i) + r * i);
    }
  );
}
var Fv = 180 / Math.PI,
  uh = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function F1(e, r, i, l, s, c) {
  var f, m, g;
  return (
    (f = Math.sqrt(e * e + r * r)) && ((e /= f), (r /= f)),
    (g = e * i + r * l) && ((i -= e * g), (l -= r * g)),
    (m = Math.sqrt(i * i + l * l)) && ((i /= m), (l /= m), (g /= m)),
    e * l < r * i && ((e = -e), (r = -r), (g = -g), (f = -f)),
    {
      translateX: s,
      translateY: c,
      rotate: Math.atan2(r, e) * Fv,
      skewX: Math.atan(g) * Fv,
      scaleX: f,
      scaleY: m,
    }
  );
}
var Is;
function fT(e) {
  const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    e + ""
  );
  return r.isIdentity ? uh : F1(r.a, r.b, r.c, r.d, r.e, r.f);
}
function dT(e) {
  return e == null ||
    (Is || (Is = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    Is.setAttribute("transform", e),
    !(e = Is.transform.baseVal.consolidate()))
    ? uh
    : ((e = e.matrix), F1(e.a, e.b, e.c, e.d, e.e, e.f));
}
function P1(e, r, i, l) {
  function s(h) {
    return h.length ? h.pop() + " " : "";
  }
  function c(h, p, y, b, S, A) {
    if (h !== y || p !== b) {
      var w = S.push("translate(", null, r, null, i);
      A.push({ i: w - 4, x: on(h, y) }, { i: w - 2, x: on(p, b) });
    } else (y || b) && S.push("translate(" + y + r + b + i);
  }
  function f(h, p, y, b) {
    h !== p
      ? (h - p > 180 ? (p += 360) : p - h > 180 && (h += 360),
        b.push({ i: y.push(s(y) + "rotate(", null, l) - 2, x: on(h, p) }))
      : p && y.push(s(y) + "rotate(" + p + l);
  }
  function m(h, p, y, b) {
    h !== p
      ? b.push({ i: y.push(s(y) + "skewX(", null, l) - 2, x: on(h, p) })
      : p && y.push(s(y) + "skewX(" + p + l);
  }
  function g(h, p, y, b, S, A) {
    if (h !== y || p !== b) {
      var w = S.push(s(S) + "scale(", null, ",", null, ")");
      A.push({ i: w - 4, x: on(h, y) }, { i: w - 2, x: on(p, b) });
    } else (y !== 1 || b !== 1) && S.push(s(S) + "scale(" + y + "," + b + ")");
  }
  return function (h, p) {
    var y = [],
      b = [];
    return (
      (h = e(h)),
      (p = e(p)),
      c(h.translateX, h.translateY, p.translateX, p.translateY, y, b),
      f(h.rotate, p.rotate, y, b),
      m(h.skewX, p.skewX, y, b),
      g(h.scaleX, h.scaleY, p.scaleX, p.scaleY, y, b),
      (h = p = null),
      function (S) {
        for (var A = -1, w = b.length, T; ++A < w; ) y[(T = b[A]).i] = T.x(S);
        return y.join("");
      }
    );
  };
}
var hT = P1(fT, "px, ", "px)", "deg)"),
  mT = P1(dT, ", ", ")", ")"),
  ji = 0,
  to = 0,
  $l = 0,
  Q1 = 1e3,
  Eu,
  no,
  _u = 0,
  Ma = 0,
  Xu = 0,
  ho = typeof performance == "object" && performance.now ? performance : Date,
  $1 =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Ph() {
  return Ma || ($1(gT), (Ma = ho.now() + Xu));
}
function gT() {
  Ma = 0;
}
function Au() {
  this._call = this._time = this._next = null;
}
Au.prototype = Z1.prototype = {
  constructor: Au,
  restart: function (e, r, i) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    (i = (i == null ? Ph() : +i) + (r == null ? 0 : +r)),
      !this._next &&
        no !== this &&
        (no ? (no._next = this) : (Eu = this), (no = this)),
      (this._call = e),
      (this._time = i),
      ch();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), ch());
  },
};
function Z1(e, r, i) {
  var l = new Au();
  return l.restart(e, r, i), l;
}
function pT() {
  Ph(), ++ji;
  for (var e = Eu, r; e; )
    (r = Ma - e._time) >= 0 && e._call.call(void 0, r), (e = e._next);
  --ji;
}
function Pv() {
  (Ma = (_u = ho.now()) + Xu), (ji = to = 0);
  try {
    pT();
  } finally {
    (ji = 0), yT(), (Ma = 0);
  }
}
function vT() {
  var e = ho.now(),
    r = e - _u;
  r > Q1 && ((Xu -= r), (_u = e));
}
function yT() {
  for (var e, r = Eu, i, l = 1 / 0; r; )
    r._call
      ? (l > r._time && (l = r._time), (e = r), (r = r._next))
      : ((i = r._next), (r._next = null), (r = e ? (e._next = i) : (Eu = i)));
  (no = e), ch(l);
}
function ch(e) {
  if (!ji) {
    to && (to = clearTimeout(to));
    var r = e - Ma;
    r > 24
      ? (e < 1 / 0 && (to = setTimeout(Pv, e - ho.now() - Xu)),
        $l && ($l = clearInterval($l)))
      : ($l || ((_u = ho.now()), ($l = setInterval(vT, Q1))), (ji = 1), $1(Pv));
  }
}
function Qv(e, r, i) {
  var l = new Au();
  return (
    (r = r == null ? 0 : +r),
    l.restart(
      (s) => {
        l.stop(), e(s + r);
      },
      r,
      i
    ),
    l
  );
}
var xT = R1("start", "end", "cancel", "interrupt"),
  bT = [],
  K1 = 0,
  $v = 1,
  fh = 2,
  fu = 3,
  Zv = 4,
  dh = 5,
  du = 6;
function Fu(e, r, i, l, s, c) {
  var f = e.__transition;
  if (!f) e.__transition = {};
  else if (i in f) return;
  ST(e, i, {
    name: r,
    index: l,
    group: s,
    on: xT,
    tween: bT,
    time: c.time,
    delay: c.delay,
    duration: c.duration,
    ease: c.ease,
    timer: null,
    state: K1,
  });
}
function Qh(e, r) {
  var i = gn(e, r);
  if (i.state > K1) throw new Error("too late; already scheduled");
  return i;
}
function On(e, r) {
  var i = gn(e, r);
  if (i.state > fu) throw new Error("too late; already running");
  return i;
}
function gn(e, r) {
  var i = e.__transition;
  if (!i || !(i = i[r])) throw new Error("transition not found");
  return i;
}
function ST(e, r, i) {
  var l = e.__transition,
    s;
  (l[r] = i), (i.timer = Z1(c, 0, i.time));
  function c(h) {
    (i.state = $v),
      i.timer.restart(f, i.delay, i.time),
      i.delay <= h && f(h - i.delay);
  }
  function f(h) {
    var p, y, b, S;
    if (i.state !== $v) return g();
    for (p in l)
      if (((S = l[p]), S.name === i.name)) {
        if (S.state === fu) return Qv(f);
        S.state === Zv
          ? ((S.state = du),
            S.timer.stop(),
            S.on.call("interrupt", e, e.__data__, S.index, S.group),
            delete l[p])
          : +p < r &&
            ((S.state = du),
            S.timer.stop(),
            S.on.call("cancel", e, e.__data__, S.index, S.group),
            delete l[p]);
      }
    if (
      (Qv(function () {
        i.state === fu &&
          ((i.state = Zv), i.timer.restart(m, i.delay, i.time), m(h));
      }),
      (i.state = fh),
      i.on.call("start", e, e.__data__, i.index, i.group),
      i.state === fh)
    ) {
      for (
        i.state = fu, s = new Array((b = i.tween.length)), p = 0, y = -1;
        p < b;
        ++p
      )
        (S = i.tween[p].value.call(e, e.__data__, i.index, i.group)) &&
          (s[++y] = S);
      s.length = y + 1;
    }
  }
  function m(h) {
    for (
      var p =
          h < i.duration
            ? i.ease.call(null, h / i.duration)
            : (i.timer.restart(g), (i.state = dh), 1),
        y = -1,
        b = s.length;
      ++y < b;

    )
      s[y].call(e, p);
    i.state === dh && (i.on.call("end", e, e.__data__, i.index, i.group), g());
  }
  function g() {
    (i.state = du), i.timer.stop(), delete l[r];
    for (var h in l) return;
    delete e.__transition;
  }
}
function wT(e, r) {
  var i = e.__transition,
    l,
    s,
    c = !0,
    f;
  if (i) {
    r = r == null ? null : r + "";
    for (f in i) {
      if ((l = i[f]).name !== r) {
        c = !1;
        continue;
      }
      (s = l.state > fh && l.state < dh),
        (l.state = du),
        l.timer.stop(),
        l.on.call(s ? "interrupt" : "cancel", e, e.__data__, l.index, l.group),
        delete i[f];
    }
    c && delete e.__transition;
  }
}
function ET(e) {
  return this.each(function () {
    wT(this, e);
  });
}
function _T(e, r) {
  var i, l;
  return function () {
    var s = On(this, e),
      c = s.tween;
    if (c !== i) {
      l = i = c;
      for (var f = 0, m = l.length; f < m; ++f)
        if (l[f].name === r) {
          (l = l.slice()), l.splice(f, 1);
          break;
        }
    }
    s.tween = l;
  };
}
function AT(e, r, i) {
  var l, s;
  if (typeof i != "function") throw new Error();
  return function () {
    var c = On(this, e),
      f = c.tween;
    if (f !== l) {
      s = (l = f).slice();
      for (var m = { name: r, value: i }, g = 0, h = s.length; g < h; ++g)
        if (s[g].name === r) {
          s[g] = m;
          break;
        }
      g === h && s.push(m);
    }
    c.tween = s;
  };
}
function TT(e, r) {
  var i = this._id;
  if (((e += ""), arguments.length < 2)) {
    for (var l = gn(this.node(), i).tween, s = 0, c = l.length, f; s < c; ++s)
      if ((f = l[s]).name === e) return f.value;
    return null;
  }
  return this.each((r == null ? _T : AT)(i, e, r));
}
function $h(e, r, i) {
  var l = e._id;
  return (
    e.each(function () {
      var s = On(this, l);
      (s.value || (s.value = {}))[r] = i.apply(this, arguments);
    }),
    function (s) {
      return gn(s, l).value[r];
    }
  );
}
function W1(e, r) {
  var i;
  return (
    typeof r == "number"
      ? on
      : r instanceof Ta
      ? wu
      : (i = Ta(r))
      ? ((r = i), wu)
      : X1
  )(e, r);
}
function MT(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function CT(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function RT(e, r, i) {
  var l,
    s = i + "",
    c;
  return function () {
    var f = this.getAttribute(e);
    return f === s ? null : f === l ? c : (c = r((l = f), i));
  };
}
function NT(e, r, i) {
  var l,
    s = i + "",
    c;
  return function () {
    var f = this.getAttributeNS(e.space, e.local);
    return f === s ? null : f === l ? c : (c = r((l = f), i));
  };
}
function OT(e, r, i) {
  var l, s, c;
  return function () {
    var f,
      m = i(this),
      g;
    return m == null
      ? void this.removeAttribute(e)
      : ((f = this.getAttribute(e)),
        (g = m + ""),
        f === g
          ? null
          : f === l && g === s
          ? c
          : ((s = g), (c = r((l = f), m))));
  };
}
function DT(e, r, i) {
  var l, s, c;
  return function () {
    var f,
      m = i(this),
      g;
    return m == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((f = this.getAttributeNS(e.space, e.local)),
        (g = m + ""),
        f === g
          ? null
          : f === l && g === s
          ? c
          : ((s = g), (c = r((l = f), m))));
  };
}
function jT(e, r) {
  var i = Gu(e),
    l = i === "transform" ? mT : W1;
  return this.attrTween(
    e,
    typeof r == "function"
      ? (i.local ? DT : OT)(i, l, $h(this, "attr." + e, r))
      : r == null
      ? (i.local ? CT : MT)(i)
      : (i.local ? NT : RT)(i, l, r)
  );
}
function zT(e, r) {
  return function (i) {
    this.setAttribute(e, r.call(this, i));
  };
}
function UT(e, r) {
  return function (i) {
    this.setAttributeNS(e.space, e.local, r.call(this, i));
  };
}
function LT(e, r) {
  var i, l;
  function s() {
    var c = r.apply(this, arguments);
    return c !== l && (i = (l = c) && UT(e, c)), i;
  }
  return (s._value = r), s;
}
function HT(e, r) {
  var i, l;
  function s() {
    var c = r.apply(this, arguments);
    return c !== l && (i = (l = c) && zT(e, c)), i;
  }
  return (s._value = r), s;
}
function kT(e, r) {
  var i = "attr." + e;
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (r == null) return this.tween(i, null);
  if (typeof r != "function") throw new Error();
  var l = Gu(e);
  return this.tween(i, (l.local ? LT : HT)(l, r));
}
function BT(e, r) {
  return function () {
    Qh(this, e).delay = +r.apply(this, arguments);
  };
}
function VT(e, r) {
  return (
    (r = +r),
    function () {
      Qh(this, e).delay = r;
    }
  );
}
function qT(e) {
  var r = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? BT : VT)(r, e))
    : gn(this.node(), r).delay;
}
function YT(e, r) {
  return function () {
    On(this, e).duration = +r.apply(this, arguments);
  };
}
function GT(e, r) {
  return (
    (r = +r),
    function () {
      On(this, e).duration = r;
    }
  );
}
function XT(e) {
  var r = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? YT : GT)(r, e))
    : gn(this.node(), r).duration;
}
function FT(e, r) {
  if (typeof r != "function") throw new Error();
  return function () {
    On(this, e).ease = r;
  };
}
function PT(e) {
  var r = this._id;
  return arguments.length ? this.each(FT(r, e)) : gn(this.node(), r).ease;
}
function QT(e, r) {
  return function () {
    var i = r.apply(this, arguments);
    if (typeof i != "function") throw new Error();
    On(this, e).ease = i;
  };
}
function $T(e) {
  if (typeof e != "function") throw new Error();
  return this.each(QT(this._id, e));
}
function ZT(e) {
  typeof e != "function" && (e = D1(e));
  for (var r = this._groups, i = r.length, l = new Array(i), s = 0; s < i; ++s)
    for (var c = r[s], f = c.length, m = (l[s] = []), g, h = 0; h < f; ++h)
      (g = c[h]) && e.call(g, g.__data__, h, c) && m.push(g);
  return new ir(l, this._parents, this._name, this._id);
}
function KT(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var r = this._groups,
      i = e._groups,
      l = r.length,
      s = i.length,
      c = Math.min(l, s),
      f = new Array(l),
      m = 0;
    m < c;
    ++m
  )
    for (
      var g = r[m], h = i[m], p = g.length, y = (f[m] = new Array(p)), b, S = 0;
      S < p;
      ++S
    )
      (b = g[S] || h[S]) && (y[S] = b);
  for (; m < l; ++m) f[m] = r[m];
  return new ir(f, this._parents, this._name, this._id);
}
function WT(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (r) {
      var i = r.indexOf(".");
      return i >= 0 && (r = r.slice(0, i)), !r || r === "start";
    });
}
function IT(e, r, i) {
  var l,
    s,
    c = WT(r) ? Qh : On;
  return function () {
    var f = c(this, e),
      m = f.on;
    m !== l && (s = (l = m).copy()).on(r, i), (f.on = s);
  };
}
function JT(e, r) {
  var i = this._id;
  return arguments.length < 2
    ? gn(this.node(), i).on.on(e)
    : this.each(IT(i, e, r));
}
function eM(e) {
  return function () {
    var r = this.parentNode;
    for (var i in this.__transition) if (+i !== e) return;
    r && r.removeChild(this);
  };
}
function tM() {
  return this.on("end.remove", eM(this._id));
}
function nM(e) {
  var r = this._name,
    i = this._id;
  typeof e != "function" && (e = qh(e));
  for (var l = this._groups, s = l.length, c = new Array(s), f = 0; f < s; ++f)
    for (
      var m = l[f], g = m.length, h = (c[f] = new Array(g)), p, y, b = 0;
      b < g;
      ++b
    )
      (p = m[b]) &&
        (y = e.call(p, p.__data__, b, m)) &&
        ("__data__" in p && (y.__data__ = p.__data__),
        (h[b] = y),
        Fu(h[b], r, i, b, h, gn(p, i)));
  return new ir(c, this._parents, r, i);
}
function rM(e) {
  var r = this._name,
    i = this._id;
  typeof e != "function" && (e = O1(e));
  for (var l = this._groups, s = l.length, c = [], f = [], m = 0; m < s; ++m)
    for (var g = l[m], h = g.length, p, y = 0; y < h; ++y)
      if ((p = g[y])) {
        for (
          var b = e.call(p, p.__data__, y, g),
            S,
            A = gn(p, i),
            w = 0,
            T = b.length;
          w < T;
          ++w
        )
          (S = b[w]) && Fu(S, r, i, w, b, A);
        c.push(b), f.push(p);
      }
  return new ir(c, f, r, i);
}
var aM = Mo.prototype.constructor;
function iM() {
  return new aM(this._groups, this._parents);
}
function lM(e, r) {
  var i, l, s;
  return function () {
    var c = Di(this, e),
      f = (this.style.removeProperty(e), Di(this, e));
    return c === f ? null : c === i && f === l ? s : (s = r((i = c), (l = f)));
  };
}
function I1(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function oM(e, r, i) {
  var l,
    s = i + "",
    c;
  return function () {
    var f = Di(this, e);
    return f === s ? null : f === l ? c : (c = r((l = f), i));
  };
}
function sM(e, r, i) {
  var l, s, c;
  return function () {
    var f = Di(this, e),
      m = i(this),
      g = m + "";
    return (
      m == null && (g = m = (this.style.removeProperty(e), Di(this, e))),
      f === g ? null : f === l && g === s ? c : ((s = g), (c = r((l = f), m)))
    );
  };
}
function uM(e, r) {
  var i,
    l,
    s,
    c = "style." + r,
    f = "end." + c,
    m;
  return function () {
    var g = On(this, e),
      h = g.on,
      p = g.value[c] == null ? m || (m = I1(r)) : void 0;
    (h !== i || s !== p) && (l = (i = h).copy()).on(f, (s = p)), (g.on = l);
  };
}
function cM(e, r, i) {
  var l = (e += "") == "transform" ? hT : W1;
  return r == null
    ? this.styleTween(e, lM(e, l)).on("end.style." + e, I1(e))
    : typeof r == "function"
    ? this.styleTween(e, sM(e, l, $h(this, "style." + e, r))).each(
        uM(this._id, e)
      )
    : this.styleTween(e, oM(e, l, r), i).on("end.style." + e, null);
}
function fM(e, r, i) {
  return function (l) {
    this.style.setProperty(e, r.call(this, l), i);
  };
}
function dM(e, r, i) {
  var l, s;
  function c() {
    var f = r.apply(this, arguments);
    return f !== s && (l = (s = f) && fM(e, f, i)), l;
  }
  return (c._value = r), c;
}
function hM(e, r, i) {
  var l = "style." + (e += "");
  if (arguments.length < 2) return (l = this.tween(l)) && l._value;
  if (r == null) return this.tween(l, null);
  if (typeof r != "function") throw new Error();
  return this.tween(l, dM(e, r, i ?? ""));
}
function mM(e) {
  return function () {
    this.textContent = e;
  };
}
function gM(e) {
  return function () {
    var r = e(this);
    this.textContent = r ?? "";
  };
}
function pM(e) {
  return this.tween(
    "text",
    typeof e == "function"
      ? gM($h(this, "text", e))
      : mM(e == null ? "" : e + "")
  );
}
function vM(e) {
  return function (r) {
    this.textContent = e.call(this, r);
  };
}
function yM(e) {
  var r, i;
  function l() {
    var s = e.apply(this, arguments);
    return s !== i && (r = (i = s) && vM(s)), r;
  }
  return (l._value = e), l;
}
function xM(e) {
  var r = "text";
  if (arguments.length < 1) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, yM(e));
}
function bM() {
  for (
    var e = this._name,
      r = this._id,
      i = J1(),
      l = this._groups,
      s = l.length,
      c = 0;
    c < s;
    ++c
  )
    for (var f = l[c], m = f.length, g, h = 0; h < m; ++h)
      if ((g = f[h])) {
        var p = gn(g, r);
        Fu(g, e, i, h, f, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease,
        });
      }
  return new ir(l, this._parents, e, i);
}
function SM() {
  var e,
    r,
    i = this,
    l = i._id,
    s = i.size();
  return new Promise(function (c, f) {
    var m = { value: f },
      g = {
        value: function () {
          --s === 0 && c();
        },
      };
    i.each(function () {
      var h = On(this, l),
        p = h.on;
      p !== e &&
        ((r = (e = p).copy()),
        r._.cancel.push(m),
        r._.interrupt.push(m),
        r._.end.push(g)),
        (h.on = r);
    }),
      s === 0 && c();
  });
}
var wM = 0;
function ir(e, r, i, l) {
  (this._groups = e), (this._parents = r), (this._name = i), (this._id = l);
}
function J1() {
  return ++wM;
}
var In = Mo.prototype;
ir.prototype = {
  constructor: ir,
  select: nM,
  selectAll: rM,
  selectChild: In.selectChild,
  selectChildren: In.selectChildren,
  filter: ZT,
  merge: KT,
  selection: iM,
  transition: bM,
  call: In.call,
  nodes: In.nodes,
  node: In.node,
  size: In.size,
  empty: In.empty,
  each: In.each,
  on: JT,
  attr: jT,
  attrTween: kT,
  style: cM,
  styleTween: hM,
  text: pM,
  textTween: xM,
  remove: tM,
  tween: TT,
  delay: qT,
  duration: XT,
  ease: PT,
  easeVarying: $T,
  end: SM,
  [Symbol.iterator]: In[Symbol.iterator],
};
function EM(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var _M = { time: null, delay: 0, duration: 250, ease: EM };
function AM(e, r) {
  for (var i; !(i = e.__transition) || !(i = i[r]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${r} not found`);
  return i;
}
function TM(e) {
  var r, i;
  e instanceof ir
    ? ((r = e._id), (e = e._name))
    : ((r = J1()), ((i = _M).time = Ph()), (e = e == null ? null : e + ""));
  for (var l = this._groups, s = l.length, c = 0; c < s; ++c)
    for (var f = l[c], m = f.length, g, h = 0; h < m; ++h)
      (g = f[h]) && Fu(g, e, r, h, f, i || AM(g, r));
  return new ir(l, this._parents, e, r);
}
Mo.prototype.interrupt = ET;
Mo.prototype.transition = TM;
const hh = Math.PI,
  mh = 2 * hh,
  wa = 1e-6,
  MM = mh - wa;
function ex(e) {
  this._ += e[0];
  for (let r = 1, i = e.length; r < i; ++r) this._ += arguments[r] + e[r];
}
function CM(e) {
  let r = Math.floor(e);
  if (!(r >= 0)) throw new Error(`invalid digits: ${e}`);
  if (r > 15) return ex;
  const i = 10 ** r;
  return function (l) {
    this._ += l[0];
    for (let s = 1, c = l.length; s < c; ++s)
      this._ += Math.round(arguments[s] * i) / i + l[s];
  };
}
class RM {
  constructor(r) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = r == null ? ex : CM(r));
  }
  moveTo(r, i) {
    this._append`M${(this._x0 = this._x1 = +r)},${(this._y0 = this._y1 = +i)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(r, i) {
    this._append`L${(this._x1 = +r)},${(this._y1 = +i)}`;
  }
  quadraticCurveTo(r, i, l, s) {
    this._append`Q${+r},${+i},${(this._x1 = +l)},${(this._y1 = +s)}`;
  }
  bezierCurveTo(r, i, l, s, c, f) {
    this._append`C${+r},${+i},${+l},${+s},${(this._x1 = +c)},${(this._y1 =
      +f)}`;
  }
  arcTo(r, i, l, s, c) {
    if (((r = +r), (i = +i), (l = +l), (s = +s), (c = +c), c < 0))
      throw new Error(`negative radius: ${c}`);
    let f = this._x1,
      m = this._y1,
      g = l - r,
      h = s - i,
      p = f - r,
      y = m - i,
      b = p * p + y * y;
    if (this._x1 === null) this._append`M${(this._x1 = r)},${(this._y1 = i)}`;
    else if (b > wa)
      if (!(Math.abs(y * g - h * p) > wa) || !c)
        this._append`L${(this._x1 = r)},${(this._y1 = i)}`;
      else {
        let S = l - f,
          A = s - m,
          w = g * g + h * h,
          T = S * S + A * A,
          M = Math.sqrt(w),
          R = Math.sqrt(b),
          O = c * Math.tan((hh - Math.acos((w + b - T) / (2 * M * R))) / 2),
          L = O / R,
          D = O / M;
        Math.abs(L - 1) > wa && this._append`L${r + L * p},${i + L * y}`,
          this._append`A${c},${c},0,0,${+(y * S > p * A)},${(this._x1 =
            r + D * g)},${(this._y1 = i + D * h)}`;
      }
  }
  arc(r, i, l, s, c, f) {
    if (((r = +r), (i = +i), (l = +l), (f = !!f), l < 0))
      throw new Error(`negative radius: ${l}`);
    let m = l * Math.cos(s),
      g = l * Math.sin(s),
      h = r + m,
      p = i + g,
      y = 1 ^ f,
      b = f ? s - c : c - s;
    this._x1 === null
      ? this._append`M${h},${p}`
      : (Math.abs(this._x1 - h) > wa || Math.abs(this._y1 - p) > wa) &&
        this._append`L${h},${p}`,
      l &&
        (b < 0 && (b = (b % mh) + mh),
        b > MM
          ? this._append`A${l},${l},0,1,${y},${r - m},${
              i - g
            }A${l},${l},0,1,${y},${(this._x1 = h)},${(this._y1 = p)}`
          : b > wa &&
            this._append`A${l},${l},0,${+(b >= hh)},${y},${(this._x1 =
              r + l * Math.cos(c))},${(this._y1 = i + l * Math.sin(c))}`);
  }
  rect(r, i, l, s) {
    this._append`M${(this._x0 = this._x1 = +r)},${(this._y0 = this._y1 =
      +i)}h${(l = +l)}v${+s}h${-l}Z`;
  }
  toString() {
    return this._;
  }
}
function NM(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Tu(e, r) {
  if (
    (i = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var i,
    l = e.slice(0, i);
  return [l.length > 1 ? l[0] + l.slice(2) : l, +e.slice(i + 1)];
}
function zi(e) {
  return (e = Tu(Math.abs(e))), e ? e[1] : NaN;
}
function OM(e, r) {
  return function (i, l) {
    for (
      var s = i.length, c = [], f = 0, m = e[0], g = 0;
      s > 0 &&
      m > 0 &&
      (g + m + 1 > l && (m = Math.max(1, l - g)),
      c.push(i.substring((s -= m), s + m)),
      !((g += m + 1) > l));

    )
      m = e[(f = (f + 1) % e.length)];
    return c.reverse().join(r);
  };
}
function DM(e) {
  return function (r) {
    return r.replace(/[0-9]/g, function (i) {
      return e[+i];
    });
  };
}
var jM =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mu(e) {
  if (!(r = jM.exec(e))) throw new Error("invalid format: " + e);
  var r;
  return new Zh({
    fill: r[1],
    align: r[2],
    sign: r[3],
    symbol: r[4],
    zero: r[5],
    width: r[6],
    comma: r[7],
    precision: r[8] && r[8].slice(1),
    trim: r[9],
    type: r[10],
  });
}
Mu.prototype = Zh.prototype;
function Zh(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
Zh.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function zM(e) {
  e: for (var r = e.length, i = 1, l = -1, s; i < r; ++i)
    switch (e[i]) {
      case ".":
        l = s = i;
        break;
      case "0":
        l === 0 && (l = i), (s = i);
        break;
      default:
        if (!+e[i]) break e;
        l > 0 && (l = 0);
        break;
    }
  return l > 0 ? e.slice(0, l) + e.slice(s + 1) : e;
}
var tx;
function UM(e, r) {
  var i = Tu(e, r);
  if (!i) return e + "";
  var l = i[0],
    s = i[1],
    c = s - (tx = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1,
    f = l.length;
  return c === f
    ? l
    : c > f
    ? l + new Array(c - f + 1).join("0")
    : c > 0
    ? l.slice(0, c) + "." + l.slice(c)
    : "0." + new Array(1 - c).join("0") + Tu(e, Math.max(0, r + c - 1))[0];
}
function Kv(e, r) {
  var i = Tu(e, r);
  if (!i) return e + "";
  var l = i[0],
    s = i[1];
  return s < 0
    ? "0." + new Array(-s).join("0") + l
    : l.length > s + 1
    ? l.slice(0, s + 1) + "." + l.slice(s + 1)
    : l + new Array(s - l.length + 2).join("0");
}
const Wv = {
  "%": (e, r) => (e * 100).toFixed(r),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: NM,
  e: (e, r) => e.toExponential(r),
  f: (e, r) => e.toFixed(r),
  g: (e, r) => e.toPrecision(r),
  o: (e) => Math.round(e).toString(8),
  p: (e, r) => Kv(e * 100, r),
  r: Kv,
  s: UM,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Iv(e) {
  return e;
}
var Jv = Array.prototype.map,
  ey = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function LM(e) {
  var r =
      e.grouping === void 0 || e.thousands === void 0
        ? Iv
        : OM(Jv.call(e.grouping, Number), e.thousands + ""),
    i = e.currency === void 0 ? "" : e.currency[0] + "",
    l = e.currency === void 0 ? "" : e.currency[1] + "",
    s = e.decimal === void 0 ? "." : e.decimal + "",
    c = e.numerals === void 0 ? Iv : DM(Jv.call(e.numerals, String)),
    f = e.percent === void 0 ? "%" : e.percent + "",
    m = e.minus === void 0 ? "−" : e.minus + "",
    g = e.nan === void 0 ? "NaN" : e.nan + "";
  function h(y) {
    y = Mu(y);
    var b = y.fill,
      S = y.align,
      A = y.sign,
      w = y.symbol,
      T = y.zero,
      M = y.width,
      R = y.comma,
      O = y.precision,
      L = y.trim,
      D = y.type;
    D === "n"
      ? ((R = !0), (D = "g"))
      : Wv[D] || (O === void 0 && (O = 12), (L = !0), (D = "g")),
      (T || (b === "0" && S === "=")) && ((T = !0), (b = "0"), (S = "="));
    var z =
        w === "$"
          ? i
          : w === "#" && /[boxX]/.test(D)
          ? "0" + D.toLowerCase()
          : "",
      Y = w === "$" ? l : /[%p]/.test(D) ? f : "",
      te = Wv[D],
      Z = /[defgprs%]/.test(D);
    O =
      O === void 0
        ? 6
        : /[gprs]/.test(D)
        ? Math.max(1, Math.min(21, O))
        : Math.max(0, Math.min(20, O));
    function ne(G) {
      var ae = z,
        q = Y,
        W,
        fe,
        B;
      if (D === "c") (q = te(G) + q), (G = "");
      else {
        G = +G;
        var ee = G < 0 || 1 / G < 0;
        if (
          ((G = isNaN(G) ? g : te(Math.abs(G), O)),
          L && (G = zM(G)),
          ee && +G == 0 && A !== "+" && (ee = !1),
          (ae =
            (ee ? (A === "(" ? A : m) : A === "-" || A === "(" ? "" : A) + ae),
          (q =
            (D === "s" ? ey[8 + tx / 3] : "") +
            q +
            (ee && A === "(" ? ")" : "")),
          Z)
        ) {
          for (W = -1, fe = G.length; ++W < fe; )
            if (((B = G.charCodeAt(W)), 48 > B || B > 57)) {
              (q = (B === 46 ? s + G.slice(W + 1) : G.slice(W)) + q),
                (G = G.slice(0, W));
              break;
            }
        }
      }
      R && !T && (G = r(G, 1 / 0));
      var X = ae.length + G.length + q.length,
        ie = X < M ? new Array(M - X + 1).join(b) : "";
      switch (
        (R &&
          T &&
          ((G = r(ie + G, ie.length ? M - q.length : 1 / 0)), (ie = "")),
        S)
      ) {
        case "<":
          G = ae + G + q + ie;
          break;
        case "=":
          G = ae + ie + G + q;
          break;
        case "^":
          G = ie.slice(0, (X = ie.length >> 1)) + ae + G + q + ie.slice(X);
          break;
        default:
          G = ie + ae + G + q;
          break;
      }
      return c(G);
    }
    return (
      (ne.toString = function () {
        return y + "";
      }),
      ne
    );
  }
  function p(y, b) {
    var S = h(((y = Mu(y)), (y.type = "f"), y)),
      A = Math.max(-8, Math.min(8, Math.floor(zi(b) / 3))) * 3,
      w = Math.pow(10, -A),
      T = ey[8 + A / 3];
    return function (M) {
      return S(w * M) + T;
    };
  }
  return { format: h, formatPrefix: p };
}
var Js, nx, rx;
HM({ thousands: ",", grouping: [3], currency: ["$", ""] });
function HM(e) {
  return (Js = LM(e)), (nx = Js.format), (rx = Js.formatPrefix), Js;
}
function kM(e) {
  return Math.max(0, -zi(Math.abs(e)));
}
function BM(e, r) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(zi(r) / 3))) * 3 - zi(Math.abs(e))
  );
}
function VM(e, r) {
  return (
    (e = Math.abs(e)), (r = Math.abs(r) - e), Math.max(0, zi(r) - zi(e)) + 1
  );
}
function Ro(e, r) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(r).domain(e);
      break;
  }
  return this;
}
const ty = Symbol("implicit");
function Dn() {
  var e = new jv(),
    r = [],
    i = [],
    l = ty;
  function s(c) {
    let f = e.get(c);
    if (f === void 0) {
      if (l !== ty) return l;
      e.set(c, (f = r.push(c) - 1));
    }
    return i[f % i.length];
  }
  return (
    (s.domain = function (c) {
      if (!arguments.length) return r.slice();
      (r = []), (e = new jv());
      for (const f of c) e.has(f) || e.set(f, r.push(f) - 1);
      return s;
    }),
    (s.range = function (c) {
      return arguments.length ? ((i = Array.from(c)), s) : i.slice();
    }),
    (s.unknown = function (c) {
      return arguments.length ? ((l = c), s) : l;
    }),
    (s.copy = function () {
      return Dn(r, i).unknown(l);
    }),
    Ro.apply(s, arguments),
    s
  );
}
function Yi() {
  var e = Dn().unknown(void 0),
    r = e.domain,
    i = e.range,
    l = 0,
    s = 1,
    c,
    f,
    m = !1,
    g = 0,
    h = 0,
    p = 0.5;
  delete e.unknown;
  function y() {
    var b = r().length,
      S = s < l,
      A = S ? s : l,
      w = S ? l : s;
    (c = (w - A) / Math.max(1, b - g + h * 2)),
      m && (c = Math.floor(c)),
      (A += (w - A - c * (b - g)) * p),
      (f = c * (1 - g)),
      m && ((A = Math.round(A)), (f = Math.round(f)));
    var T = i_(b).map(function (M) {
      return A + c * M;
    });
    return i(S ? T.reverse() : T);
  }
  return (
    (e.domain = function (b) {
      return arguments.length ? (r(b), y()) : r();
    }),
    (e.range = function (b) {
      return arguments.length
        ? (([l, s] = b), (l = +l), (s = +s), y())
        : [l, s];
    }),
    (e.rangeRound = function (b) {
      return ([l, s] = b), (l = +l), (s = +s), (m = !0), y();
    }),
    (e.bandwidth = function () {
      return f;
    }),
    (e.step = function () {
      return c;
    }),
    (e.round = function (b) {
      return arguments.length ? ((m = !!b), y()) : m;
    }),
    (e.padding = function (b) {
      return arguments.length ? ((g = Math.min(1, (h = +b))), y()) : g;
    }),
    (e.paddingInner = function (b) {
      return arguments.length ? ((g = Math.min(1, b)), y()) : g;
    }),
    (e.paddingOuter = function (b) {
      return arguments.length ? ((h = +b), y()) : h;
    }),
    (e.align = function (b) {
      return arguments.length ? ((p = Math.max(0, Math.min(1, b))), y()) : p;
    }),
    (e.copy = function () {
      return Yi(r(), [l, s]).round(m).paddingInner(g).paddingOuter(h).align(p);
    }),
    Ro.apply(y(), arguments)
  );
}
function qM(e) {
  return function () {
    return e;
  };
}
function YM(e) {
  return +e;
}
var ny = [0, 1];
function An(e) {
  return e;
}
function gh(e, r) {
  return (r -= e = +e)
    ? function (i) {
        return (i - e) / r;
      }
    : qM(isNaN(r) ? NaN : 0.5);
}
function GM(e, r) {
  var i;
  return (
    e > r && ((i = e), (e = r), (r = i)),
    function (l) {
      return Math.max(e, Math.min(r, l));
    }
  );
}
function XM(e, r, i) {
  var l = e[0],
    s = e[1],
    c = r[0],
    f = r[1];
  return (
    s < l ? ((l = gh(s, l)), (c = i(f, c))) : ((l = gh(l, s)), (c = i(c, f))),
    function (m) {
      return c(l(m));
    }
  );
}
function FM(e, r, i) {
  var l = Math.min(e.length, r.length) - 1,
    s = new Array(l),
    c = new Array(l),
    f = -1;
  for (
    e[l] < e[0] && ((e = e.slice().reverse()), (r = r.slice().reverse()));
    ++f < l;

  )
    (s[f] = gh(e[f], e[f + 1])), (c[f] = i(r[f], r[f + 1]));
  return function (m) {
    var g = WE(e, m, 1, l) - 1;
    return c[g](s[g](m));
  };
}
function Kh(e, r) {
  return r
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function ax() {
  var e = ny,
    r = ny,
    i = Fh,
    l,
    s,
    c,
    f = An,
    m,
    g,
    h;
  function p() {
    var b = Math.min(e.length, r.length);
    return (
      f !== An && (f = GM(e[0], e[b - 1])),
      (m = b > 2 ? FM : XM),
      (g = h = null),
      y
    );
  }
  function y(b) {
    return b == null || isNaN((b = +b))
      ? c
      : (g || (g = m(e.map(l), r, i)))(l(f(b)));
  }
  return (
    (y.invert = function (b) {
      return f(s((h || (h = m(r, e.map(l), on)))(b)));
    }),
    (y.domain = function (b) {
      return arguments.length ? ((e = Array.from(b, YM)), p()) : e.slice();
    }),
    (y.range = function (b) {
      return arguments.length ? ((r = Array.from(b)), p()) : r.slice();
    }),
    (y.rangeRound = function (b) {
      return (r = Array.from(b)), (i = cT), p();
    }),
    (y.clamp = function (b) {
      return arguments.length ? ((f = b ? !0 : An), p()) : f !== An;
    }),
    (y.interpolate = function (b) {
      return arguments.length ? ((i = b), p()) : i;
    }),
    (y.unknown = function (b) {
      return arguments.length ? ((c = b), y) : c;
    }),
    function (b, S) {
      return (l = b), (s = S), p();
    }
  );
}
function ix() {
  return ax()(An, An);
}
function PM(e, r, i, l) {
  var s = ih(e, r, i),
    c;
  switch (((l = Mu(l ?? ",f")), l.type)) {
    case "s": {
      var f = Math.max(Math.abs(e), Math.abs(r));
      return (
        l.precision == null && !isNaN((c = BM(s, f))) && (l.precision = c),
        rx(l, f)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null &&
        !isNaN((c = VM(s, Math.max(Math.abs(e), Math.abs(r))))) &&
        (l.precision = c - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null &&
        !isNaN((c = kM(s))) &&
        (l.precision = c - (l.type === "%") * 2);
      break;
    }
  }
  return nx(l);
}
function lx(e) {
  var r = e.domain;
  return (
    (e.ticks = function (i) {
      var l = r();
      return a_(l[0], l[l.length - 1], i ?? 10);
    }),
    (e.tickFormat = function (i, l) {
      var s = r();
      return PM(s[0], s[s.length - 1], i ?? 10, l);
    }),
    (e.nice = function (i) {
      i == null && (i = 10);
      var l = r(),
        s = 0,
        c = l.length - 1,
        f = l[s],
        m = l[c],
        g,
        h,
        p = 10;
      for (
        m < f && ((h = f), (f = m), (m = h), (h = s), (s = c), (c = h));
        p-- > 0;

      ) {
        if (((h = ah(f, m, i)), h === g)) return (l[s] = f), (l[c] = m), r(l);
        if (h > 0) (f = Math.floor(f / h) * h), (m = Math.ceil(m / h) * h);
        else if (h < 0) (f = Math.ceil(f * h) / h), (m = Math.floor(m * h) / h);
        else break;
        g = h;
      }
      return e;
    }),
    e
  );
}
function No() {
  var e = ix();
  return (
    (e.copy = function () {
      return Kh(e, No());
    }),
    Ro.apply(e, arguments),
    lx(e)
  );
}
function QM(e, r) {
  e = e.slice();
  var i = 0,
    l = e.length - 1,
    s = e[i],
    c = e[l],
    f;
  return (
    c < s && ((f = i), (i = l), (l = f), (f = s), (s = c), (c = f)),
    (e[i] = r.floor(s)),
    (e[l] = r.ceil(c)),
    e
  );
}
function ry(e) {
  return function (r) {
    return r < 0 ? -Math.pow(-r, e) : Math.pow(r, e);
  };
}
function $M(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function ZM(e) {
  return e < 0 ? -e * e : e * e;
}
function KM(e) {
  var r = e(An, An),
    i = 1;
  function l() {
    return i === 1 ? e(An, An) : i === 0.5 ? e($M, ZM) : e(ry(i), ry(1 / i));
  }
  return (
    (r.exponent = function (s) {
      return arguments.length ? ((i = +s), l()) : i;
    }),
    lx(r)
  );
}
function ox() {
  var e = KM(ax());
  return (
    (e.copy = function () {
      return Kh(e, ox()).exponent(e.exponent());
    }),
    Ro.apply(e, arguments),
    e
  );
}
function WM() {
  return ox.apply(null, arguments).exponent(0.5);
}
const Od = new Date(),
  Dd = new Date();
function it(e, r, i, l) {
  function s(c) {
    return e((c = arguments.length === 0 ? new Date() : new Date(+c))), c;
  }
  return (
    (s.floor = (c) => (e((c = new Date(+c))), c)),
    (s.ceil = (c) => (e((c = new Date(c - 1))), r(c, 1), e(c), c)),
    (s.round = (c) => {
      const f = s(c),
        m = s.ceil(c);
      return c - f < m - c ? f : m;
    }),
    (s.offset = (c, f) => (
      r((c = new Date(+c)), f == null ? 1 : Math.floor(f)), c
    )),
    (s.range = (c, f, m) => {
      const g = [];
      if (
        ((c = s.ceil(c)),
        (m = m == null ? 1 : Math.floor(m)),
        !(c < f) || !(m > 0))
      )
        return g;
      let h;
      do g.push((h = new Date(+c))), r(c, m), e(c);
      while (h < c && c < f);
      return g;
    }),
    (s.filter = (c) =>
      it(
        (f) => {
          if (f >= f) for (; e(f), !c(f); ) f.setTime(f - 1);
        },
        (f, m) => {
          if (f >= f)
            if (m < 0) for (; ++m <= 0; ) for (; r(f, -1), !c(f); );
            else for (; --m >= 0; ) for (; r(f, 1), !c(f); );
        }
      )),
    i &&
      ((s.count = (c, f) => (
        Od.setTime(+c), Dd.setTime(+f), e(Od), e(Dd), Math.floor(i(Od, Dd))
      )),
      (s.every = (c) => (
        (c = Math.floor(c)),
        !isFinite(c) || !(c > 0)
          ? null
          : c > 1
          ? s.filter(l ? (f) => l(f) % c === 0 : (f) => s.count(0, f) % c === 0)
          : s
      ))),
    s
  );
}
const Cu = it(
  () => {},
  (e, r) => {
    e.setTime(+e + r);
  },
  (e, r) => r - e
);
Cu.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
    ? it(
        (r) => {
          r.setTime(Math.floor(r / e) * e);
        },
        (r, i) => {
          r.setTime(+r + i * e);
        },
        (r, i) => (i - r) / e
      )
    : Cu
);
Cu.range;
const nr = 1e3,
  en = nr * 60,
  rr = en * 60,
  lr = rr * 24,
  Wh = lr * 7,
  ay = lr * 30,
  jd = lr * 365,
  Ai = it(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, r) => {
      e.setTime(+e + r * nr);
    },
    (e, r) => (r - e) / nr,
    (e) => e.getUTCSeconds()
  );
Ai.range;
const Ih = it(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr);
  },
  (e, r) => {
    e.setTime(+e + r * en);
  },
  (e, r) => (r - e) / en,
  (e) => e.getMinutes()
);
Ih.range;
const IM = it(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, r) => {
    e.setTime(+e + r * en);
  },
  (e, r) => (r - e) / en,
  (e) => e.getUTCMinutes()
);
IM.range;
const Jh = it(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * nr - e.getMinutes() * en
    );
  },
  (e, r) => {
    e.setTime(+e + r * rr);
  },
  (e, r) => (r - e) / rr,
  (e) => e.getHours()
);
Jh.range;
const JM = it(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, r) => {
    e.setTime(+e + r * rr);
  },
  (e, r) => (r - e) / rr,
  (e) => e.getUTCHours()
);
JM.range;
const Oo = it(
  (e) => e.setHours(0, 0, 0, 0),
  (e, r) => e.setDate(e.getDate() + r),
  (e, r) => (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * en) / lr,
  (e) => e.getDate() - 1
);
Oo.range;
const em = it(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, r) => {
    e.setUTCDate(e.getUTCDate() + r);
  },
  (e, r) => (r - e) / lr,
  (e) => e.getUTCDate() - 1
);
em.range;
const eC = it(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, r) => {
    e.setUTCDate(e.getUTCDate() + r);
  },
  (e, r) => (r - e) / lr,
  (e) => Math.floor(e / lr)
);
eC.range;
function ja(e) {
  return it(
    (r) => {
      r.setDate(r.getDate() - ((r.getDay() + 7 - e) % 7)),
        r.setHours(0, 0, 0, 0);
    },
    (r, i) => {
      r.setDate(r.getDate() + i * 7);
    },
    (r, i) =>
      (i - r - (i.getTimezoneOffset() - r.getTimezoneOffset()) * en) / Wh
  );
}
const Pu = ja(0),
  Ru = ja(1),
  tC = ja(2),
  nC = ja(3),
  Ui = ja(4),
  rC = ja(5),
  aC = ja(6);
Pu.range;
Ru.range;
tC.range;
nC.range;
Ui.range;
rC.range;
aC.range;
function za(e) {
  return it(
    (r) => {
      r.setUTCDate(r.getUTCDate() - ((r.getUTCDay() + 7 - e) % 7)),
        r.setUTCHours(0, 0, 0, 0);
    },
    (r, i) => {
      r.setUTCDate(r.getUTCDate() + i * 7);
    },
    (r, i) => (i - r) / Wh
  );
}
const sx = za(0),
  Nu = za(1),
  iC = za(2),
  lC = za(3),
  Li = za(4),
  oC = za(5),
  sC = za(6);
sx.range;
Nu.range;
iC.range;
lC.range;
Li.range;
oC.range;
sC.range;
const Qu = it(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, r) => {
    e.setMonth(e.getMonth() + r);
  },
  (e, r) =>
    r.getMonth() - e.getMonth() + (r.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth()
);
Qu.range;
const uC = it(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, r) => {
    e.setUTCMonth(e.getUTCMonth() + r);
  },
  (e, r) =>
    r.getUTCMonth() -
    e.getUTCMonth() +
    (r.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth()
);
uC.range;
const Cn = it(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, r) => {
    e.setFullYear(e.getFullYear() + r);
  },
  (e, r) => r.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear()
);
Cn.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : it(
        (r) => {
          r.setFullYear(Math.floor(r.getFullYear() / e) * e),
            r.setMonth(0, 1),
            r.setHours(0, 0, 0, 0);
        },
        (r, i) => {
          r.setFullYear(r.getFullYear() + i * e);
        }
      );
Cn.range;
const Ca = it(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, r) => {
    e.setUTCFullYear(e.getUTCFullYear() + r);
  },
  (e, r) => r.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear()
);
Ca.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : it(
        (r) => {
          r.setUTCFullYear(Math.floor(r.getUTCFullYear() / e) * e),
            r.setUTCMonth(0, 1),
            r.setUTCHours(0, 0, 0, 0);
        },
        (r, i) => {
          r.setUTCFullYear(r.getUTCFullYear() + i * e);
        }
      );
Ca.range;
function cC(e, r, i, l, s, c) {
  const f = [
    [Ai, 1, nr],
    [Ai, 5, 5 * nr],
    [Ai, 15, 15 * nr],
    [Ai, 30, 30 * nr],
    [c, 1, en],
    [c, 5, 5 * en],
    [c, 15, 15 * en],
    [c, 30, 30 * en],
    [s, 1, rr],
    [s, 3, 3 * rr],
    [s, 6, 6 * rr],
    [s, 12, 12 * rr],
    [l, 1, lr],
    [l, 2, 2 * lr],
    [i, 1, Wh],
    [r, 1, ay],
    [r, 3, 3 * ay],
    [e, 1, jd],
  ];
  function m(h, p, y) {
    const b = p < h;
    b && ([h, p] = [p, h]);
    const S = y && typeof y.range == "function" ? y : g(h, p, y),
      A = S ? S.range(h, +p + 1) : [];
    return b ? A.reverse() : A;
  }
  function g(h, p, y) {
    const b = Math.abs(p - h) / y,
      S = Vh(([, , T]) => T).right(f, b);
    if (S === f.length) return e.every(ih(h / jd, p / jd, y));
    if (S === 0) return Cu.every(Math.max(ih(h, p, y), 1));
    const [A, w] = f[b / f[S - 1][2] < f[S][2] / b ? S - 1 : S];
    return A.every(w);
  }
  return [m, g];
}
const [fC, dC] = cC(Cn, Qu, Pu, Oo, Jh, Ih);
function zd(e) {
  if (0 <= e.y && e.y < 100) {
    var r = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return r.setFullYear(e.y), r;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ud(e) {
  if (0 <= e.y && e.y < 100) {
    var r = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return r.setUTCFullYear(e.y), r;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Zl(e, r, i) {
  return { y: e, m: r, d: i, H: 0, M: 0, S: 0, L: 0 };
}
function hC(e) {
  var r = e.dateTime,
    i = e.date,
    l = e.time,
    s = e.periods,
    c = e.days,
    f = e.shortDays,
    m = e.months,
    g = e.shortMonths,
    h = Kl(s),
    p = Wl(s),
    y = Kl(c),
    b = Wl(c),
    S = Kl(f),
    A = Wl(f),
    w = Kl(m),
    T = Wl(m),
    M = Kl(g),
    R = Wl(g),
    O = {
      a: ee,
      A: X,
      b: ie,
      B: N,
      c: null,
      d: cy,
      e: cy,
      f: LC,
      g: PC,
      G: $C,
      H: jC,
      I: zC,
      j: UC,
      L: ux,
      m: HC,
      M: kC,
      p: $,
      q: ce,
      Q: hy,
      s: my,
      S: BC,
      u: VC,
      U: qC,
      V: YC,
      w: GC,
      W: XC,
      x: null,
      X: null,
      y: FC,
      Y: QC,
      Z: ZC,
      "%": dy,
    },
    L = {
      a: de,
      A: le,
      b: ye,
      B: xe,
      c: null,
      d: fy,
      e: fy,
      f: JC,
      g: uR,
      G: fR,
      H: KC,
      I: WC,
      j: IC,
      L: fx,
      m: eR,
      M: tR,
      p: ue,
      q: pe,
      Q: hy,
      s: my,
      S: nR,
      u: rR,
      U: aR,
      V: iR,
      w: lR,
      W: oR,
      x: null,
      X: null,
      y: sR,
      Y: cR,
      Z: dR,
      "%": dy,
    },
    D = {
      a: ne,
      A: G,
      b: ae,
      B: q,
      c: W,
      d: sy,
      e: sy,
      f: RC,
      g: oy,
      G: ly,
      H: uy,
      I: uy,
      j: AC,
      L: CC,
      m: _C,
      M: TC,
      p: Z,
      q: EC,
      Q: OC,
      s: DC,
      S: MC,
      u: yC,
      U: xC,
      V: bC,
      w: vC,
      W: SC,
      x: fe,
      X: B,
      y: oy,
      Y: ly,
      Z: wC,
      "%": NC,
    };
  (O.x = z(i, O)),
    (O.X = z(l, O)),
    (O.c = z(r, O)),
    (L.x = z(i, L)),
    (L.X = z(l, L)),
    (L.c = z(r, L));
  function z(I, re) {
    return function (se) {
      var F = [],
        Ce = -1,
        _e = 0,
        Fe = I.length,
        Ve,
        ht,
        zn;
      for (se instanceof Date || (se = new Date(+se)); ++Ce < Fe; )
        I.charCodeAt(Ce) === 37 &&
          (F.push(I.slice(_e, Ce)),
          (ht = iy[(Ve = I.charAt(++Ce))]) != null
            ? (Ve = I.charAt(++Ce))
            : (ht = Ve === "e" ? " " : "0"),
          (zn = re[Ve]) && (Ve = zn(se, ht)),
          F.push(Ve),
          (_e = Ce + 1));
      return F.push(I.slice(_e, Ce)), F.join("");
    };
  }
  function Y(I, re) {
    return function (se) {
      var F = Zl(1900, void 0, 1),
        Ce = te(F, I, (se += ""), 0),
        _e,
        Fe;
      if (Ce != se.length) return null;
      if ("Q" in F) return new Date(F.Q);
      if ("s" in F) return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (
        (re && !("Z" in F) && (F.Z = 0),
        "p" in F && (F.H = (F.H % 12) + F.p * 12),
        F.m === void 0 && (F.m = "q" in F ? F.q : 0),
        "V" in F)
      ) {
        if (F.V < 1 || F.V > 53) return null;
        "w" in F || (F.w = 1),
          "Z" in F
            ? ((_e = Ud(Zl(F.y, 0, 1))),
              (Fe = _e.getUTCDay()),
              (_e = Fe > 4 || Fe === 0 ? Nu.ceil(_e) : Nu(_e)),
              (_e = em.offset(_e, (F.V - 1) * 7)),
              (F.y = _e.getUTCFullYear()),
              (F.m = _e.getUTCMonth()),
              (F.d = _e.getUTCDate() + ((F.w + 6) % 7)))
            : ((_e = zd(Zl(F.y, 0, 1))),
              (Fe = _e.getDay()),
              (_e = Fe > 4 || Fe === 0 ? Ru.ceil(_e) : Ru(_e)),
              (_e = Oo.offset(_e, (F.V - 1) * 7)),
              (F.y = _e.getFullYear()),
              (F.m = _e.getMonth()),
              (F.d = _e.getDate() + ((F.w + 6) % 7)));
      } else
        ("W" in F || "U" in F) &&
          ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0),
          (Fe =
            "Z" in F
              ? Ud(Zl(F.y, 0, 1)).getUTCDay()
              : zd(Zl(F.y, 0, 1)).getDay()),
          (F.m = 0),
          (F.d =
            "W" in F
              ? ((F.w + 6) % 7) + F.W * 7 - ((Fe + 5) % 7)
              : F.w + F.U * 7 - ((Fe + 6) % 7)));
      return "Z" in F
        ? ((F.H += (F.Z / 100) | 0), (F.M += F.Z % 100), Ud(F))
        : zd(F);
    };
  }
  function te(I, re, se, F) {
    for (var Ce = 0, _e = re.length, Fe = se.length, Ve, ht; Ce < _e; ) {
      if (F >= Fe) return -1;
      if (((Ve = re.charCodeAt(Ce++)), Ve === 37)) {
        if (
          ((Ve = re.charAt(Ce++)),
          (ht = D[Ve in iy ? re.charAt(Ce++) : Ve]),
          !ht || (F = ht(I, se, F)) < 0)
        )
          return -1;
      } else if (Ve != se.charCodeAt(F++)) return -1;
    }
    return F;
  }
  function Z(I, re, se) {
    var F = h.exec(re.slice(se));
    return F ? ((I.p = p.get(F[0].toLowerCase())), se + F[0].length) : -1;
  }
  function ne(I, re, se) {
    var F = S.exec(re.slice(se));
    return F ? ((I.w = A.get(F[0].toLowerCase())), se + F[0].length) : -1;
  }
  function G(I, re, se) {
    var F = y.exec(re.slice(se));
    return F ? ((I.w = b.get(F[0].toLowerCase())), se + F[0].length) : -1;
  }
  function ae(I, re, se) {
    var F = M.exec(re.slice(se));
    return F ? ((I.m = R.get(F[0].toLowerCase())), se + F[0].length) : -1;
  }
  function q(I, re, se) {
    var F = w.exec(re.slice(se));
    return F ? ((I.m = T.get(F[0].toLowerCase())), se + F[0].length) : -1;
  }
  function W(I, re, se) {
    return te(I, r, re, se);
  }
  function fe(I, re, se) {
    return te(I, i, re, se);
  }
  function B(I, re, se) {
    return te(I, l, re, se);
  }
  function ee(I) {
    return f[I.getDay()];
  }
  function X(I) {
    return c[I.getDay()];
  }
  function ie(I) {
    return g[I.getMonth()];
  }
  function N(I) {
    return m[I.getMonth()];
  }
  function $(I) {
    return s[+(I.getHours() >= 12)];
  }
  function ce(I) {
    return 1 + ~~(I.getMonth() / 3);
  }
  function de(I) {
    return f[I.getUTCDay()];
  }
  function le(I) {
    return c[I.getUTCDay()];
  }
  function ye(I) {
    return g[I.getUTCMonth()];
  }
  function xe(I) {
    return m[I.getUTCMonth()];
  }
  function ue(I) {
    return s[+(I.getUTCHours() >= 12)];
  }
  function pe(I) {
    return 1 + ~~(I.getUTCMonth() / 3);
  }
  return {
    format: function (I) {
      var re = z((I += ""), O);
      return (
        (re.toString = function () {
          return I;
        }),
        re
      );
    },
    parse: function (I) {
      var re = Y((I += ""), !1);
      return (
        (re.toString = function () {
          return I;
        }),
        re
      );
    },
    utcFormat: function (I) {
      var re = z((I += ""), L);
      return (
        (re.toString = function () {
          return I;
        }),
        re
      );
    },
    utcParse: function (I) {
      var re = Y((I += ""), !0);
      return (
        (re.toString = function () {
          return I;
        }),
        re
      );
    },
  };
}
var iy = { "-": "", _: " ", 0: "0" },
  dt = /^\s*\d+/,
  mC = /^%/,
  gC = /[\\^$*+?|[\]().{}]/g;
function Le(e, r, i) {
  var l = e < 0 ? "-" : "",
    s = (l ? -e : e) + "",
    c = s.length;
  return l + (c < i ? new Array(i - c + 1).join(r) + s : s);
}
function pC(e) {
  return e.replace(gC, "\\$&");
}
function Kl(e) {
  return new RegExp("^(?:" + e.map(pC).join("|") + ")", "i");
}
function Wl(e) {
  return new Map(e.map((r, i) => [r.toLowerCase(), i]));
}
function vC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 1));
  return l ? ((e.w = +l[0]), i + l[0].length) : -1;
}
function yC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 1));
  return l ? ((e.u = +l[0]), i + l[0].length) : -1;
}
function xC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.U = +l[0]), i + l[0].length) : -1;
}
function bC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.V = +l[0]), i + l[0].length) : -1;
}
function SC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.W = +l[0]), i + l[0].length) : -1;
}
function ly(e, r, i) {
  var l = dt.exec(r.slice(i, i + 4));
  return l ? ((e.y = +l[0]), i + l[0].length) : -1;
}
function oy(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.y = +l[0] + (+l[0] > 68 ? 1900 : 2e3)), i + l[0].length) : -1;
}
function wC(e, r, i) {
  var l = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(r.slice(i, i + 6));
  return l
    ? ((e.Z = l[1] ? 0 : -(l[2] + (l[3] || "00"))), i + l[0].length)
    : -1;
}
function EC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 1));
  return l ? ((e.q = l[0] * 3 - 3), i + l[0].length) : -1;
}
function _C(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.m = l[0] - 1), i + l[0].length) : -1;
}
function sy(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.d = +l[0]), i + l[0].length) : -1;
}
function AC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 3));
  return l ? ((e.m = 0), (e.d = +l[0]), i + l[0].length) : -1;
}
function uy(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.H = +l[0]), i + l[0].length) : -1;
}
function TC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.M = +l[0]), i + l[0].length) : -1;
}
function MC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 2));
  return l ? ((e.S = +l[0]), i + l[0].length) : -1;
}
function CC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 3));
  return l ? ((e.L = +l[0]), i + l[0].length) : -1;
}
function RC(e, r, i) {
  var l = dt.exec(r.slice(i, i + 6));
  return l ? ((e.L = Math.floor(l[0] / 1e3)), i + l[0].length) : -1;
}
function NC(e, r, i) {
  var l = mC.exec(r.slice(i, i + 1));
  return l ? i + l[0].length : -1;
}
function OC(e, r, i) {
  var l = dt.exec(r.slice(i));
  return l ? ((e.Q = +l[0]), i + l[0].length) : -1;
}
function DC(e, r, i) {
  var l = dt.exec(r.slice(i));
  return l ? ((e.s = +l[0]), i + l[0].length) : -1;
}
function cy(e, r) {
  return Le(e.getDate(), r, 2);
}
function jC(e, r) {
  return Le(e.getHours(), r, 2);
}
function zC(e, r) {
  return Le(e.getHours() % 12 || 12, r, 2);
}
function UC(e, r) {
  return Le(1 + Oo.count(Cn(e), e), r, 3);
}
function ux(e, r) {
  return Le(e.getMilliseconds(), r, 3);
}
function LC(e, r) {
  return ux(e, r) + "000";
}
function HC(e, r) {
  return Le(e.getMonth() + 1, r, 2);
}
function kC(e, r) {
  return Le(e.getMinutes(), r, 2);
}
function BC(e, r) {
  return Le(e.getSeconds(), r, 2);
}
function VC(e) {
  var r = e.getDay();
  return r === 0 ? 7 : r;
}
function qC(e, r) {
  return Le(Pu.count(Cn(e) - 1, e), r, 2);
}
function cx(e) {
  var r = e.getDay();
  return r >= 4 || r === 0 ? Ui(e) : Ui.ceil(e);
}
function YC(e, r) {
  return (e = cx(e)), Le(Ui.count(Cn(e), e) + (Cn(e).getDay() === 4), r, 2);
}
function GC(e) {
  return e.getDay();
}
function XC(e, r) {
  return Le(Ru.count(Cn(e) - 1, e), r, 2);
}
function FC(e, r) {
  return Le(e.getFullYear() % 100, r, 2);
}
function PC(e, r) {
  return (e = cx(e)), Le(e.getFullYear() % 100, r, 2);
}
function QC(e, r) {
  return Le(e.getFullYear() % 1e4, r, 4);
}
function $C(e, r) {
  var i = e.getDay();
  return (
    (e = i >= 4 || i === 0 ? Ui(e) : Ui.ceil(e)),
    Le(e.getFullYear() % 1e4, r, 4)
  );
}
function ZC(e) {
  var r = e.getTimezoneOffset();
  return (
    (r > 0 ? "-" : ((r *= -1), "+")) +
    Le((r / 60) | 0, "0", 2) +
    Le(r % 60, "0", 2)
  );
}
function fy(e, r) {
  return Le(e.getUTCDate(), r, 2);
}
function KC(e, r) {
  return Le(e.getUTCHours(), r, 2);
}
function WC(e, r) {
  return Le(e.getUTCHours() % 12 || 12, r, 2);
}
function IC(e, r) {
  return Le(1 + em.count(Ca(e), e), r, 3);
}
function fx(e, r) {
  return Le(e.getUTCMilliseconds(), r, 3);
}
function JC(e, r) {
  return fx(e, r) + "000";
}
function eR(e, r) {
  return Le(e.getUTCMonth() + 1, r, 2);
}
function tR(e, r) {
  return Le(e.getUTCMinutes(), r, 2);
}
function nR(e, r) {
  return Le(e.getUTCSeconds(), r, 2);
}
function rR(e) {
  var r = e.getUTCDay();
  return r === 0 ? 7 : r;
}
function aR(e, r) {
  return Le(sx.count(Ca(e) - 1, e), r, 2);
}
function dx(e) {
  var r = e.getUTCDay();
  return r >= 4 || r === 0 ? Li(e) : Li.ceil(e);
}
function iR(e, r) {
  return (e = dx(e)), Le(Li.count(Ca(e), e) + (Ca(e).getUTCDay() === 4), r, 2);
}
function lR(e) {
  return e.getUTCDay();
}
function oR(e, r) {
  return Le(Nu.count(Ca(e) - 1, e), r, 2);
}
function sR(e, r) {
  return Le(e.getUTCFullYear() % 100, r, 2);
}
function uR(e, r) {
  return (e = dx(e)), Le(e.getUTCFullYear() % 100, r, 2);
}
function cR(e, r) {
  return Le(e.getUTCFullYear() % 1e4, r, 4);
}
function fR(e, r) {
  var i = e.getUTCDay();
  return (
    (e = i >= 4 || i === 0 ? Li(e) : Li.ceil(e)),
    Le(e.getUTCFullYear() % 1e4, r, 4)
  );
}
function dR() {
  return "+0000";
}
function dy() {
  return "%";
}
function hy(e) {
  return +e;
}
function my(e) {
  return Math.floor(+e / 1e3);
}
var vi, hx;
hR({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
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
    "Dec",
  ],
});
function hR(e) {
  return (
    (vi = hC(e)), (hx = vi.format), vi.parse, vi.utcFormat, vi.utcParse, vi
  );
}
function mR(e) {
  return new Date(e);
}
function gR(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function mx(e, r, i, l, s, c, f, m, g, h) {
  var p = ix(),
    y = p.invert,
    b = p.domain,
    S = h(".%L"),
    A = h(":%S"),
    w = h("%I:%M"),
    T = h("%I %p"),
    M = h("%a %d"),
    R = h("%b %d"),
    O = h("%B"),
    L = h("%Y");
  function D(z) {
    return (
      g(z) < z
        ? S
        : m(z) < z
        ? A
        : f(z) < z
        ? w
        : c(z) < z
        ? T
        : l(z) < z
        ? s(z) < z
          ? M
          : R
        : i(z) < z
        ? O
        : L
    )(z);
  }
  return (
    (p.invert = function (z) {
      return new Date(y(z));
    }),
    (p.domain = function (z) {
      return arguments.length ? b(Array.from(z, gR)) : b().map(mR);
    }),
    (p.ticks = function (z) {
      var Y = b();
      return e(Y[0], Y[Y.length - 1], z ?? 10);
    }),
    (p.tickFormat = function (z, Y) {
      return Y == null ? D : h(Y);
    }),
    (p.nice = function (z) {
      var Y = b();
      return (
        (!z || typeof z.range != "function") &&
          (z = r(Y[0], Y[Y.length - 1], z ?? 10)),
        z ? b(QM(Y, z)) : p
      );
    }),
    (p.copy = function () {
      return Kh(p, mx(e, r, i, l, s, c, f, m, g, h));
    }),
    p
  );
}
function pR() {
  return Ro.apply(
    mx(fC, dC, Cn, Qu, Pu, Oo, Jh, Ih, Ai, hx).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function Ge(e) {
  return function () {
    return e;
  };
}
const gy = Math.abs,
  bt = Math.atan2,
  xa = Math.cos,
  vR = Math.max,
  Ld = Math.min,
  wn = Math.sin,
  Ti = Math.sqrt,
  Mt = 1e-12,
  mo = Math.PI,
  Ou = mo / 2,
  yR = 2 * mo;
function xR(e) {
  return e > 1 ? 0 : e < -1 ? mo : Math.acos(e);
}
function py(e) {
  return e >= 1 ? Ou : e <= -1 ? -Ou : Math.asin(e);
}
function tm(e) {
  let r = 3;
  return (
    (e.digits = function (i) {
      if (!arguments.length) return r;
      if (i == null) r = null;
      else {
        const l = Math.floor(i);
        if (!(l >= 0)) throw new RangeError(`invalid digits: ${i}`);
        r = l;
      }
      return e;
    }),
    () => new RM(r)
  );
}
function bR(e) {
  return e.innerRadius;
}
function SR(e) {
  return e.outerRadius;
}
function wR(e) {
  return e.startAngle;
}
function ER(e) {
  return e.endAngle;
}
function _R(e) {
  return e && e.padAngle;
}
function AR(e, r, i, l, s, c, f, m) {
  var g = i - e,
    h = l - r,
    p = f - s,
    y = m - c,
    b = y * g - p * h;
  if (!(b * b < Mt))
    return (b = (p * (r - c) - y * (e - s)) / b), [e + b * g, r + b * h];
}
function eu(e, r, i, l, s, c, f) {
  var m = e - i,
    g = r - l,
    h = (f ? c : -c) / Ti(m * m + g * g),
    p = h * g,
    y = -h * m,
    b = e + p,
    S = r + y,
    A = i + p,
    w = l + y,
    T = (b + A) / 2,
    M = (S + w) / 2,
    R = A - b,
    O = w - S,
    L = R * R + O * O,
    D = s - c,
    z = b * w - A * S,
    Y = (O < 0 ? -1 : 1) * Ti(vR(0, D * D * L - z * z)),
    te = (z * O - R * Y) / L,
    Z = (-z * R - O * Y) / L,
    ne = (z * O + R * Y) / L,
    G = (-z * R + O * Y) / L,
    ae = te - T,
    q = Z - M,
    W = ne - T,
    fe = G - M;
  return (
    ae * ae + q * q > W * W + fe * fe && ((te = ne), (Z = G)),
    {
      cx: te,
      cy: Z,
      x01: -p,
      y01: -y,
      x11: te * (s / D - 1),
      y11: Z * (s / D - 1),
    }
  );
}
function TR() {
  var e = bR,
    r = SR,
    i = Ge(0),
    l = null,
    s = wR,
    c = ER,
    f = _R,
    m = null,
    g = tm(h);
  function h() {
    var p,
      y,
      b = +e.apply(this, arguments),
      S = +r.apply(this, arguments),
      A = s.apply(this, arguments) - Ou,
      w = c.apply(this, arguments) - Ou,
      T = gy(w - A),
      M = w > A;
    if ((m || (m = p = g()), S < b && ((y = S), (S = b), (b = y)), !(S > Mt)))
      m.moveTo(0, 0);
    else if (T > yR - Mt)
      m.moveTo(S * xa(A), S * wn(A)),
        m.arc(0, 0, S, A, w, !M),
        b > Mt && (m.moveTo(b * xa(w), b * wn(w)), m.arc(0, 0, b, w, A, M));
    else {
      var R = A,
        O = w,
        L = A,
        D = w,
        z = T,
        Y = T,
        te = f.apply(this, arguments) / 2,
        Z = te > Mt && (l ? +l.apply(this, arguments) : Ti(b * b + S * S)),
        ne = Ld(gy(S - b) / 2, +i.apply(this, arguments)),
        G = ne,
        ae = ne,
        q,
        W;
      if (Z > Mt) {
        var fe = py((Z / b) * wn(te)),
          B = py((Z / S) * wn(te));
        (z -= fe * 2) > Mt
          ? ((fe *= M ? 1 : -1), (L += fe), (D -= fe))
          : ((z = 0), (L = D = (A + w) / 2)),
          (Y -= B * 2) > Mt
            ? ((B *= M ? 1 : -1), (R += B), (O -= B))
            : ((Y = 0), (R = O = (A + w) / 2));
      }
      var ee = S * xa(R),
        X = S * wn(R),
        ie = b * xa(D),
        N = b * wn(D);
      if (ne > Mt) {
        var $ = S * xa(O),
          ce = S * wn(O),
          de = b * xa(L),
          le = b * wn(L),
          ye;
        if (T < mo)
          if ((ye = AR(ee, X, de, le, $, ce, ie, N))) {
            var xe = ee - ye[0],
              ue = X - ye[1],
              pe = $ - ye[0],
              I = ce - ye[1],
              re =
                1 /
                wn(
                  xR(
                    (xe * pe + ue * I) /
                      (Ti(xe * xe + ue * ue) * Ti(pe * pe + I * I))
                  ) / 2
                ),
              se = Ti(ye[0] * ye[0] + ye[1] * ye[1]);
            (G = Ld(ne, (b - se) / (re - 1))),
              (ae = Ld(ne, (S - se) / (re + 1)));
          } else G = ae = 0;
      }
      Y > Mt
        ? ae > Mt
          ? ((q = eu(de, le, ee, X, S, ae, M)),
            (W = eu($, ce, ie, N, S, ae, M)),
            m.moveTo(q.cx + q.x01, q.cy + q.y01),
            ae < ne
              ? m.arc(q.cx, q.cy, ae, bt(q.y01, q.x01), bt(W.y01, W.x01), !M)
              : (m.arc(q.cx, q.cy, ae, bt(q.y01, q.x01), bt(q.y11, q.x11), !M),
                m.arc(
                  0,
                  0,
                  S,
                  bt(q.cy + q.y11, q.cx + q.x11),
                  bt(W.cy + W.y11, W.cx + W.x11),
                  !M
                ),
                m.arc(W.cx, W.cy, ae, bt(W.y11, W.x11), bt(W.y01, W.x01), !M)))
          : (m.moveTo(ee, X), m.arc(0, 0, S, R, O, !M))
        : m.moveTo(ee, X),
        !(b > Mt) || !(z > Mt)
          ? m.lineTo(ie, N)
          : G > Mt
          ? ((q = eu(ie, N, $, ce, b, -G, M)),
            (W = eu(ee, X, de, le, b, -G, M)),
            m.lineTo(q.cx + q.x01, q.cy + q.y01),
            G < ne
              ? m.arc(q.cx, q.cy, G, bt(q.y01, q.x01), bt(W.y01, W.x01), !M)
              : (m.arc(q.cx, q.cy, G, bt(q.y01, q.x01), bt(q.y11, q.x11), !M),
                m.arc(
                  0,
                  0,
                  b,
                  bt(q.cy + q.y11, q.cx + q.x11),
                  bt(W.cy + W.y11, W.cx + W.x11),
                  M
                ),
                m.arc(W.cx, W.cy, G, bt(W.y11, W.x11), bt(W.y01, W.x01), !M)))
          : m.arc(0, 0, b, D, L, M);
    }
    if ((m.closePath(), p)) return (m = null), p + "" || null;
  }
  return (
    (h.centroid = function () {
      var p = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
        y =
          (+s.apply(this, arguments) + +c.apply(this, arguments)) / 2 - mo / 2;
      return [xa(y) * p, wn(y) * p];
    }),
    (h.innerRadius = function (p) {
      return arguments.length
        ? ((e = typeof p == "function" ? p : Ge(+p)), h)
        : e;
    }),
    (h.outerRadius = function (p) {
      return arguments.length
        ? ((r = typeof p == "function" ? p : Ge(+p)), h)
        : r;
    }),
    (h.cornerRadius = function (p) {
      return arguments.length
        ? ((i = typeof p == "function" ? p : Ge(+p)), h)
        : i;
    }),
    (h.padRadius = function (p) {
      return arguments.length
        ? ((l = p == null ? null : typeof p == "function" ? p : Ge(+p)), h)
        : l;
    }),
    (h.startAngle = function (p) {
      return arguments.length
        ? ((s = typeof p == "function" ? p : Ge(+p)), h)
        : s;
    }),
    (h.endAngle = function (p) {
      return arguments.length
        ? ((c = typeof p == "function" ? p : Ge(+p)), h)
        : c;
    }),
    (h.padAngle = function (p) {
      return arguments.length
        ? ((f = typeof p == "function" ? p : Ge(+p)), h)
        : f;
    }),
    (h.context = function (p) {
      return arguments.length ? ((m = p ?? null), h) : m;
    }),
    h
  );
}
function gx(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function px(e) {
  this._context = e;
}
px.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, r) {
    switch (((e = +e), (r = +r), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, r);
        break;
    }
  },
};
function vx(e) {
  return new px(e);
}
function yx(e) {
  return e[0];
}
function xx(e) {
  return e[1];
}
function Du(e, r) {
  var i = Ge(!0),
    l = null,
    s = vx,
    c = null,
    f = tm(m);
  (e = typeof e == "function" ? e : e === void 0 ? yx : Ge(e)),
    (r = typeof r == "function" ? r : r === void 0 ? xx : Ge(r));
  function m(g) {
    var h,
      p = (g = gx(g)).length,
      y,
      b = !1,
      S;
    for (l == null && (c = s((S = f()))), h = 0; h <= p; ++h)
      !(h < p && i((y = g[h]), h, g)) === b &&
        ((b = !b) ? c.lineStart() : c.lineEnd()),
        b && c.point(+e(y, h, g), +r(y, h, g));
    if (S) return (c = null), S + "" || null;
  }
  return (
    (m.x = function (g) {
      return arguments.length
        ? ((e = typeof g == "function" ? g : Ge(+g)), m)
        : e;
    }),
    (m.y = function (g) {
      return arguments.length
        ? ((r = typeof g == "function" ? g : Ge(+g)), m)
        : r;
    }),
    (m.defined = function (g) {
      return arguments.length
        ? ((i = typeof g == "function" ? g : Ge(!!g)), m)
        : i;
    }),
    (m.curve = function (g) {
      return arguments.length ? ((s = g), l != null && (c = s(l)), m) : s;
    }),
    (m.context = function (g) {
      return arguments.length
        ? (g == null ? (l = c = null) : (c = s((l = g))), m)
        : l;
    }),
    m
  );
}
function vy(e, r, i) {
  var l = null,
    s = Ge(!0),
    c = null,
    f = vx,
    m = null,
    g = tm(h);
  (e = typeof e == "function" ? e : e === void 0 ? yx : Ge(+e)),
    (r = typeof r == "function" ? r : Ge(r === void 0 ? 0 : +r)),
    (i = typeof i == "function" ? i : i === void 0 ? xx : Ge(+i));
  function h(y) {
    var b,
      S,
      A,
      w = (y = gx(y)).length,
      T,
      M = !1,
      R,
      O = new Array(w),
      L = new Array(w);
    for (c == null && (m = f((R = g()))), b = 0; b <= w; ++b) {
      if (!(b < w && s((T = y[b]), b, y)) === M)
        if ((M = !M)) (S = b), m.areaStart(), m.lineStart();
        else {
          for (m.lineEnd(), m.lineStart(), A = b - 1; A >= S; --A)
            m.point(O[A], L[A]);
          m.lineEnd(), m.areaEnd();
        }
      M &&
        ((O[b] = +e(T, b, y)),
        (L[b] = +r(T, b, y)),
        m.point(l ? +l(T, b, y) : O[b], i ? +i(T, b, y) : L[b]));
    }
    if (R) return (m = null), R + "" || null;
  }
  function p() {
    return Du().defined(s).curve(f).context(c);
  }
  return (
    (h.x = function (y) {
      return arguments.length
        ? ((e = typeof y == "function" ? y : Ge(+y)), (l = null), h)
        : e;
    }),
    (h.x0 = function (y) {
      return arguments.length
        ? ((e = typeof y == "function" ? y : Ge(+y)), h)
        : e;
    }),
    (h.x1 = function (y) {
      return arguments.length
        ? ((l = y == null ? null : typeof y == "function" ? y : Ge(+y)), h)
        : l;
    }),
    (h.y = function (y) {
      return arguments.length
        ? ((r = typeof y == "function" ? y : Ge(+y)), (i = null), h)
        : r;
    }),
    (h.y0 = function (y) {
      return arguments.length
        ? ((r = typeof y == "function" ? y : Ge(+y)), h)
        : r;
    }),
    (h.y1 = function (y) {
      return arguments.length
        ? ((i = y == null ? null : typeof y == "function" ? y : Ge(+y)), h)
        : i;
    }),
    (h.lineX0 = h.lineY0 =
      function () {
        return p().x(e).y(r);
      }),
    (h.lineY1 = function () {
      return p().x(e).y(i);
    }),
    (h.lineX1 = function () {
      return p().x(l).y(r);
    }),
    (h.defined = function (y) {
      return arguments.length
        ? ((s = typeof y == "function" ? y : Ge(!!y)), h)
        : s;
    }),
    (h.curve = function (y) {
      return arguments.length ? ((f = y), c != null && (m = f(c)), h) : f;
    }),
    (h.context = function (y) {
      return arguments.length
        ? (y == null ? (c = m = null) : (m = f((c = y))), h)
        : c;
    }),
    h
  );
}
function ro(e, r, i) {
  (this.k = e), (this.x = r), (this.y = i);
}
ro.prototype = {
  constructor: ro,
  scale: function (e) {
    return e === 1 ? this : new ro(this.k * e, this.x, this.y);
  },
  translate: function (e, r) {
    return (e === 0) & (r === 0)
      ? this
      : new ro(this.k, this.x + this.k * e, this.y + this.k * r);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
ro.prototype;
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MR = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  bx = (...e) =>
    e
      .filter((r, i, l) => !!r && r.trim() !== "" && l.indexOf(r) === i)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var CR = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RR = _.forwardRef(
  (
    {
      color: e = "currentColor",
      size: r = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: l,
      className: s = "",
      children: c,
      iconNode: f,
      ...m
    },
    g
  ) =>
    _.createElement(
      "svg",
      {
        ref: g,
        ...CR,
        width: r,
        height: r,
        stroke: e,
        strokeWidth: l ? (Number(i) * 24) / Number(r) : i,
        className: bx("lucide", s),
        ...m,
      },
      [
        ...f.map(([h, p]) => _.createElement(h, p)),
        ...(Array.isArray(c) ? c : [c]),
      ]
    )
);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cr = (e, r) => {
  const i = _.forwardRef(({ className: l, ...s }, c) =>
    _.createElement(RR, {
      ref: c,
      iconNode: r,
      className: bx(`lucide-${MR(e)}`, l),
      ...s,
    })
  );
  return (i.displayName = `${e}`), i;
};
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NR = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  OR = cr("Check", NR);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DR = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Sx = cr("ChevronDown", DR);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jR = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  zR = cr("ChevronUp", jR);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UR = [
    ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
    ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }],
  ],
  LR = cr("Equal", UR);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HR = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  kR = cr("Info", HR);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BR = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]],
  VR = cr("Play", BR);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qR = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
  ],
  YR = cr("Square", qR);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GR = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  XR = cr("Star", GR);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FR = [
    [
      "path",
      {
        d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "14u9p9",
      },
    ],
  ],
  yy = cr("Triangle", FR),
  xy = 8,
  PR = 300,
  Lr = 100,
  ba = 50,
  QR = ({ width: e, selectedDate: r, setSelectedDate: i }) => {
    const l = pR()
        .domain([new Date(1995, 0, 1), new Date(2024, 11, 31)])
        .range([0, e - Lr - ba]),
      s = Yi()
        .domain(To)
        .range([0, e - Lr - ba]),
      c = l.ticks(Qu),
      f = l.ticks(Cn),
      [m, g] = _.useState(!1),
      [h, p] = _.useState(!1),
      y = _.useRef(null),
      b = (D) => {
        g(!0), D.preventDefault();
      },
      S = (D) => {
        var Y;
        if (!m) return;
        const z = (Y = y.current) == null ? void 0 : Y.getBoundingClientRect();
        if (z) {
          const te = D.clientX - z.left,
            Z = l.invert(te);
          i(Z);
        }
      },
      A = () => {
        g(!1);
      },
      w = () => {
        p(!0);
      },
      T = () => {
        p(!1);
      };
    _.useEffect(
      () => (
        m
          ? (window.addEventListener("mousemove", S),
            window.addEventListener("mouseup", A))
          : (window.removeEventListener("mousemove", S),
            window.removeEventListener("mouseup", A)),
        () => {
          window.removeEventListener("mousemove", S),
            window.removeEventListener("mouseup", A);
        }
      ),
      [m]
    ),
      _.useEffect(() => {
        let D;
        return (
          h
            ? (D = setInterval(() => {
                const z = new Date(r);
                z.setMonth(r.getMonth() + 1),
                  z > new Date(2024, 11, 31) ? (clearInterval(D), p(!1)) : i(z);
              }, PR))
            : clearInterval(D),
          () => {
            clearInterval(D);
          }
        );
      }, [h, r]);
    const M = v.jsxs("div", {
        style: { width: Lr },
        className: "flex gap-2 items-center",
        children: [
          v.jsx("div", {
            className:
              "h-7 w-7 border rounded-full text-sm flex items-center justify-center cursor-pointer flex-shrink-0",
            style: { backgroundColor: "#F7F5F0" },
            onClick: h ? T : w,
            children: h ? v.jsx(YR, { size: 16 }) : v.jsx(VR, { size: 16 }),
          }),
          v.jsx("span", { children: "1990" }),
        ],
      }),
      R = v.jsxs("div", {
        className: "relative bg-[#F7F5F0] cursor-pointer",
        style: { width: e - Lr - ba, height: xy },
        ref: y,
        onClick: (D) => {
          const z = D.currentTarget.getBoundingClientRect(),
            Y = D.clientX - z.left,
            te = l.invert(Y);
          i(te);
        },
        onMouseDown: b,
        children: [
          v.jsxs("svg", {
            width: e - ba - Lr,
            height: xy,
            className: "pointer-events-none",
            children: [
              c.map((D, z) =>
                v.jsx(
                  "line",
                  {
                    x1: l(D),
                    x2: l(D),
                    y1: 0,
                    y2: 10,
                    stroke: "black",
                    opacity: 0.2,
                    strokeWidth: 0.5,
                  },
                  z
                )
              ),
              f.map((D, z) =>
                v.jsx(
                  "line",
                  {
                    x1: l(D),
                    x2: l(D),
                    y1: 0,
                    y2: 10,
                    stroke: "black",
                    opacity: 0.4,
                    strokeWidth: 0.5,
                  },
                  z
                )
              ),
              f
                .filter((D) => D.getFullYear() % 10 === 0)
                .map((D) =>
                  v.jsx(
                    "line",
                    {
                      x1: l(D),
                      x2: l(D),
                      y1: 0,
                      y2: 10,
                      stroke: "black",
                      opacity: 1,
                      strokeWidth: 1,
                    },
                    D.toISOString()
                  )
                ),
            ],
          }),
          v.jsxs("div", {
            className: "absolute top-0 -translate-y-1 -translate-x-1/2 ",
            style: { left: l(r) },
            children: [
              v.jsx("div", {
                className:
                  "w-8 h-4 border border-black/40 rounded-md bg-[#F7F5F0]",
              }),
              v.jsx("p", {
                className: "text-sm -translate-y-10",
                children: r.getFullYear(),
              }),
            ],
          }),
        ],
      }),
      O = ft(r.getTime()),
      L = s(O);
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("h3", {
          className: "font-semibold bricolageFont",
          children: "Sélectionnez le mois et l’année :",
        }),
        v.jsxs("div", {
          className: "flex items-center mt-4",
          children: [
            M,
            R,
            v.jsx("div", {
              className: "pl-8",
              style: { width: ba },
              children: v.jsx("span", { children: "2024" }),
            }),
          ],
        }),
        v.jsx("div", {
          style: { marginLeft: Lr, width: e - ba - Lr },
          children: v.jsxs("svg", {
            width: e - ba - Lr,
            height: 60,
            children: [
              v.jsx(Yu, { xScale: s, y: 50 }),
              L &&
                v.jsx("line", {
                  x1: L + 5,
                  y1: 35,
                  x2: L + s.bandwidth() - 5,
                  y2: 35,
                  stroke: "black",
                }),
              L &&
                v.jsx("path", {
                  d: $R(l(r), 0, L + s.bandwidth() / 2, 35),
                  stroke: "black",
                  fill: "transparent",
                }),
            ],
          }),
        }),
      ],
    });
  };
function $R(e, r, i, l) {
  const s = e > i,
    c = Math.abs(l - r) / 4,
    f = Math.abs(i - e) / 4;
  return `M ${e} ${r}
          V ${r + c}
          Q ${e} ${r + 2 * c}, ${s ? e - f : e + f} ${r + 2 * c}
          H ${s ? i + f : i - f}
          Q ${i} ${r + 2 * c}, ${i} ${r + 3 * c}
          Q ${i} ${l - c}, ${i} ${l}
          V ${l}`;
}
const wx = [
    "Très bas",
    "Bas",
    "Modérément bas",
    "Normal",
    "Modérément haut",
    "Haut",
    "Très haut",
  ],
  Ex = Dn()
    .domain(wx)
    .range([
      "#AB0107",
      "#E30614",
      "#FACED1",
      "#84D0F0",
      "#009EE0",
      "#005EA8",
      "#324886",
    ]),
  ZR = Dn()
    .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    .range([
      "Très bas",
      "Très bas",
      "Très bas",
      "Bas",
      "Modérément bas",
      "Normal",
      "Normal",
      "Modérément haut",
      "Modérément haut",
      "Haut",
      "Très haut",
      "Très haut",
    ]),
  KR = ["stables", "baissé", "monté", "mitigés"],
  WR = Dn()
    .domain([1, 2, 3, 4])
    .range(["baissé", "stables", "monté", "mitigés"]),
  IR = Dn().domain([1, 2]).range(["Non", "Vigilance"]),
  _i = ({ level: e, alert: r, isPrefectoral: i = !1, cx: l, cy: s, r: c }) => (
    console.log(l, s, c),
    v.jsxs("g", {
      children: [
        v.jsx("defs", {
          children: v.jsxs("pattern", {
            id: "crosses",
            patternUnits: "userSpaceOnUse",
            width: "10",
            height: "10",
            children: [
              v.jsx("line", {
                x1: "0",
                y1: "0",
                x2: "10",
                y2: "10",
                stroke: "black",
                strokeWidth: ".5",
                strokeDasharray: "4 8",
                opacity: 0.7,
              }),
              v.jsx("line", {
                x1: "0",
                y1: "10",
                x2: "10",
                y2: "0",
                stroke: "black",
                strokeWidth: ".5",
                strokeDasharray: "4 8",
                opacity: 0.7,
              }),
            ],
          }),
        }),
        v.jsx("circle", {
          cx: l,
          cy: s,
          r: c,
          fill: e ? Ex(e) : "#F7F5F0",
          stroke: "black",
        }),
        (r === "Vigilance" || r === "Alerte") &&
          v.jsx("circle", {
            cx: l,
            cy: s,
            r: c - 3,
            stroke: "black",
            fill: "transparent",
          }),
        r === "Alerte" &&
          v.jsx("circle", {
            cx: l,
            cy: s,
            r: c - 6,
            stroke: "black",
            fill: "transparent",
          }),
        i &&
          v.jsx("circle", {
            cx: l,
            cy: s,
            r: c,
            stroke: "black",
            fill: "url(#crosses)",
          }),
      ],
    })
  ),
  _x = (e) => {
    const r = () => ({
        width: e.current ? e.current.offsetWidth : 0,
        height: e.current ? e.current.offsetHeight : 0,
      }),
      [i, l] = _.useState(r),
      s = () => {
        l(r());
      };
    return (
      _.useEffect(
        () => (
          window.addEventListener("resize", s),
          () => window.removeEventListener("resize", s)
        ),
        []
      ),
      _.useLayoutEffect(() => {
        s();
      }, []),
      i
    );
  },
  Ax = ({ levelName: e }) =>
    v.jsxs("div", {
      className:
        "h-6 w-6 border border-black rounded-full text-md flex items-center justify-center",
      style: { backgroundColor: "#F7F5F0" },
      children: [
        e === "mitigés" && v.jsx(XR, { size: 14 }),
        e === "baissé" && v.jsx(yy, { size: 14, className: "rotate-180" }),
        e === "monté" && v.jsx(yy, { size: 14, className: "" }),
        e === "stables" && v.jsx(LR, { size: 14 }),
      ],
    }),
  JR = 1920 / 1080,
  eN = Dn()
    .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
    .range([0.625, 0.618, 0.562, 0.522, 0.23]),
  tN = Dn()
    .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
    .range([0.51, 0.69, 0.601, 0.68, 0.62]),
  nN = Dn()
    .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
    .range([0.715, 0.675, 0.453, 0.514, 0.155]),
  rN = Dn()
    .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
    .range([0.461, 0.735, 0.46, 0.753, 0.564]),
  aN = ({ data: e }) => {
    const r = _.useRef(null),
      i = _x(r),
      l = i.width / JR;
    return v.jsxs("div", {
      ref: r,
      className: "relative w-full",
      children: [
        v.jsx("img", { src: "map-bg.svg", className: "block w-full" }),
        v.jsx("svg", {
          className: "absolute inset-0",
          style: { width: i.width, height: l },
          children: e.map((s, c) =>
            v.jsx(
              _i,
              {
                cx: eN(s.CHAMP_CAPTANT) * i.width,
                cy: tN(s.CHAMP_CAPTANT) * l,
                r: 40,
                level: ZR(s.CARACT),
                alert: IR(s.SEUIL),
              },
              c
            )
          ),
        }),
        e.map((s, c) =>
          v.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                left: nN(s.CHAMP_CAPTANT) * i.width,
                top: rN(s.CHAMP_CAPTANT) * l,
              },
              children: v.jsx(Ax, { levelName: WR(s.EVOLUTION) }),
            },
            c
          )
        ),
      ],
    });
  },
  iN =
    "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/2/query?where=1%3D1&outFields=*&returnGeometry=false&f=json",
  lN = (e, r) =>
    e.filter((i) => {
      const l = new Date(i.DATE_OBSERVATION);
      return (
        l.getFullYear() === r.getFullYear() && l.getMonth() === r.getMonth()
      );
    }),
  oN = () => {
    const [e, r] = _.useState([]),
      [i, l] = _.useState(!0),
      [s, c] = _.useState(null),
      [f, m] = _.useState(new Date(2024, 11, 31)),
      g = lN(e, f);
    return (
      _.useEffect(() => {
        (async () => {
          try {
            l(!0);
            const p = await fetch(iN);
            if (!p.ok) throw new Error("Failed to fetch data");
            const y = await p.json();
            r(y.features.map((b) => b.attributes));
          } catch (p) {
            c(p.message);
          } finally {
            l(!1);
          }
        })();
      }, []),
      i
        ? v.jsx("p", { children: "Loading..." })
        : s
        ? v.jsxs("p", { children: ["Error: ", s] })
        : v.jsxs(v.Fragment, {
            children: [
              v.jsx("div", {
                className: "w-full",
                children: v.jsx(aN, { data: g }),
              }),
              v.jsx("div", {
                className: "mt-10 mx-auto w-[700px]",
                children: v.jsx(QR, {
                  width: 700,
                  selectedDate: f,
                  setSelectedDate: m,
                }),
              }),
            ],
          })
    );
  };
var nm = jo(),
  Ee = (e) => Do(e, nm),
  rm = jo();
Ee.write = (e) => Do(e, rm);
var $u = jo();
Ee.onStart = (e) => Do(e, $u);
var am = jo();
Ee.onFrame = (e) => Do(e, am);
var im = jo();
Ee.onFinish = (e) => Do(e, im);
var Ci = [];
Ee.setTimeout = (e, r) => {
  const i = Ee.now() + r,
    l = () => {
      const c = Ci.findIndex((f) => f.cancel == l);
      ~c && Ci.splice(c, 1), (qr -= ~c ? 1 : 0);
    },
    s = { time: i, handler: e, cancel: l };
  return Ci.splice(Tx(i), 0, s), (qr += 1), Mx(), s;
};
var Tx = (e) => ~(~Ci.findIndex((r) => r.time > e) || ~Ci.length);
Ee.cancel = (e) => {
  $u.delete(e), am.delete(e), im.delete(e), nm.delete(e), rm.delete(e);
};
Ee.sync = (e) => {
  (ph = !0), Ee.batchedUpdates(e), (ph = !1);
};
Ee.throttle = (e) => {
  let r;
  function i() {
    try {
      e(...r);
    } finally {
      r = null;
    }
  }
  function l(...s) {
    (r = s), Ee.onStart(i);
  }
  return (
    (l.handler = e),
    (l.cancel = () => {
      $u.delete(i), (r = null);
    }),
    l
  );
};
var lm = typeof window < "u" ? window.requestAnimationFrame : () => {};
Ee.use = (e) => (lm = e);
Ee.now = typeof performance < "u" ? () => performance.now() : Date.now;
Ee.batchedUpdates = (e) => e();
Ee.catch = console.error;
Ee.frameLoop = "always";
Ee.advance = () => {
  Ee.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : Rx();
};
var Vr = -1,
  qr = 0,
  ph = !1;
function Do(e, r) {
  ph ? (r.delete(e), e(0)) : (r.add(e), Mx());
}
function Mx() {
  Vr < 0 && ((Vr = 0), Ee.frameLoop !== "demand" && lm(Cx));
}
function sN() {
  Vr = -1;
}
function Cx() {
  ~Vr && (lm(Cx), Ee.batchedUpdates(Rx));
}
function Rx() {
  const e = Vr;
  Vr = Ee.now();
  const r = Tx(Vr);
  if ((r && (Nx(Ci.splice(0, r), (i) => i.handler()), (qr -= r)), !qr)) {
    sN();
    return;
  }
  $u.flush(),
    nm.flush(e ? Math.min(64, Vr - e) : 16.667),
    am.flush(),
    rm.flush(),
    im.flush();
}
function jo() {
  let e = new Set(),
    r = e;
  return {
    add(i) {
      (qr += r == e && !e.has(i) ? 1 : 0), e.add(i);
    },
    delete(i) {
      return (qr -= r == e && e.has(i) ? 1 : 0), e.delete(i);
    },
    flush(i) {
      r.size &&
        ((e = new Set()),
        (qr -= r.size),
        Nx(r, (l) => l(i) && e.add(l)),
        (qr += e.size),
        (r = e));
    },
  };
}
function Nx(e, r) {
  e.forEach((i) => {
    try {
      r(i);
    } catch (l) {
      Ee.catch(l);
    }
  });
}
var uN = Object.defineProperty,
  cN = (e, r) => {
    for (var i in r) uN(e, i, { get: r[i], enumerable: !0 });
  },
  dn = {};
cN(dn, {
  assign: () => dN,
  colors: () => Yr,
  createStringInterpolator: () => sm,
  skipAnimation: () => Dx,
  to: () => Ox,
  willAdvance: () => um,
});
function vh() {}
var fN = (e, r, i) =>
    Object.defineProperty(e, r, { value: i, writable: !0, configurable: !0 }),
  oe = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function tr(e, r) {
  if (oe.arr(e)) {
    if (!oe.arr(r) || e.length !== r.length) return !1;
    for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) return !1;
    return !0;
  }
  return e === r;
}
var De = (e, r) => e.forEach(r);
function Rn(e, r, i) {
  if (oe.arr(e)) {
    for (let l = 0; l < e.length; l++) r.call(i, e[l], `${l}`);
    return;
  }
  for (const l in e) e.hasOwnProperty(l) && r.call(i, e[l], l);
}
var kt = (e) => (oe.und(e) ? [] : oe.arr(e) ? e : [e]);
function lo(e, r) {
  if (e.size) {
    const i = Array.from(e);
    e.clear(), De(i, r);
  }
}
var ao = (e, ...r) => lo(e, (i) => i(...r)),
  om = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  sm,
  Ox,
  Yr = null,
  Dx = !1,
  um = vh,
  dN = (e) => {
    e.to && (Ox = e.to),
      e.now && (Ee.now = e.now),
      e.colors !== void 0 && (Yr = e.colors),
      e.skipAnimation != null && (Dx = e.skipAnimation),
      e.createStringInterpolator && (sm = e.createStringInterpolator),
      e.requestAnimationFrame && Ee.use(e.requestAnimationFrame),
      e.batchedUpdates && (Ee.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (um = e.willAdvance),
      e.frameLoop && (Ee.frameLoop = e.frameLoop);
  },
  oo = new Set(),
  Jt = [],
  Hd = [],
  ju = 0,
  Zu = {
    get idle() {
      return !oo.size && !Jt.length;
    },
    start(e) {
      ju > e.priority ? (oo.add(e), Ee.onStart(hN)) : (jx(e), Ee(yh));
    },
    advance: yh,
    sort(e) {
      if (ju) Ee.onFrame(() => Zu.sort(e));
      else {
        const r = Jt.indexOf(e);
        ~r && (Jt.splice(r, 1), zx(e));
      }
    },
    clear() {
      (Jt = []), oo.clear();
    },
  };
function hN() {
  oo.forEach(jx), oo.clear(), Ee(yh);
}
function jx(e) {
  Jt.includes(e) || zx(e);
}
function zx(e) {
  Jt.splice(
    mN(Jt, (r) => r.priority > e.priority),
    0,
    e
  );
}
function yh(e) {
  const r = Hd;
  for (let i = 0; i < Jt.length; i++) {
    const l = Jt[i];
    (ju = l.priority), l.idle || (um(l), l.advance(e), l.idle || r.push(l));
  }
  return (ju = 0), (Hd = Jt), (Hd.length = 0), (Jt = r), Jt.length > 0;
}
function mN(e, r) {
  const i = e.findIndex(r);
  return i < 0 ? e.length : i;
}
var gN = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  cn = "[-+]?\\d*\\.?\\d+",
  zu = cn + "%";
function Ku(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var pN = new RegExp("rgb" + Ku(cn, cn, cn)),
  vN = new RegExp("rgba" + Ku(cn, cn, cn, cn)),
  yN = new RegExp("hsl" + Ku(cn, zu, zu)),
  xN = new RegExp("hsla" + Ku(cn, zu, zu, cn)),
  bN = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  SN = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  wN = /^#([0-9a-fA-F]{6})$/,
  EN = /^#([0-9a-fA-F]{8})$/;
function _N(e) {
  let r;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (r = wN.exec(e))
    ? parseInt(r[1] + "ff", 16) >>> 0
    : Yr && Yr[e] !== void 0
    ? Yr[e]
    : (r = pN.exec(e))
    ? ((yi(r[1]) << 24) | (yi(r[2]) << 16) | (yi(r[3]) << 8) | 255) >>> 0
    : (r = vN.exec(e))
    ? ((yi(r[1]) << 24) | (yi(r[2]) << 16) | (yi(r[3]) << 8) | wy(r[4])) >>> 0
    : (r = bN.exec(e))
    ? parseInt(r[1] + r[1] + r[2] + r[2] + r[3] + r[3] + "ff", 16) >>> 0
    : (r = EN.exec(e))
    ? parseInt(r[1], 16) >>> 0
    : (r = SN.exec(e))
    ? parseInt(r[1] + r[1] + r[2] + r[2] + r[3] + r[3] + r[4] + r[4], 16) >>> 0
    : (r = yN.exec(e))
    ? (by(Sy(r[1]), tu(r[2]), tu(r[3])) | 255) >>> 0
    : (r = xN.exec(e))
    ? (by(Sy(r[1]), tu(r[2]), tu(r[3])) | wy(r[4])) >>> 0
    : null;
}
function kd(e, r, i) {
  return (
    i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6
      ? e + (r - e) * 6 * i
      : i < 1 / 2
      ? r
      : i < 2 / 3
      ? e + (r - e) * (2 / 3 - i) * 6
      : e
  );
}
function by(e, r, i) {
  const l = i < 0.5 ? i * (1 + r) : i + r - i * r,
    s = 2 * i - l,
    c = kd(s, l, e + 1 / 3),
    f = kd(s, l, e),
    m = kd(s, l, e - 1 / 3);
  return (
    (Math.round(c * 255) << 24) |
    (Math.round(f * 255) << 16) |
    (Math.round(m * 255) << 8)
  );
}
function yi(e) {
  const r = parseInt(e, 10);
  return r < 0 ? 0 : r > 255 ? 255 : r;
}
function Sy(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function wy(e) {
  const r = parseFloat(e);
  return r < 0 ? 0 : r > 1 ? 255 : Math.round(r * 255);
}
function tu(e) {
  const r = parseFloat(e);
  return r < 0 ? 0 : r > 100 ? 1 : r / 100;
}
function Ey(e) {
  let r = _N(e);
  if (r === null) return e;
  r = r || 0;
  const i = (r & 4278190080) >>> 24,
    l = (r & 16711680) >>> 16,
    s = (r & 65280) >>> 8,
    c = (r & 255) / 255;
  return `rgba(${i}, ${l}, ${s}, ${c})`;
}
var go = (e, r, i) => {
  if (oe.fun(e)) return e;
  if (oe.arr(e)) return go({ range: e, output: r, extrapolate: i });
  if (oe.str(e.output[0])) return sm(e);
  const l = e,
    s = l.output,
    c = l.range || [0, 1],
    f = l.extrapolateLeft || l.extrapolate || "extend",
    m = l.extrapolateRight || l.extrapolate || "extend",
    g = l.easing || ((h) => h);
  return (h) => {
    const p = TN(h, c);
    return AN(h, c[p], c[p + 1], s[p], s[p + 1], g, f, m, l.map);
  };
};
function AN(e, r, i, l, s, c, f, m, g) {
  let h = g ? g(e) : e;
  if (h < r) {
    if (f === "identity") return h;
    f === "clamp" && (h = r);
  }
  if (h > i) {
    if (m === "identity") return h;
    m === "clamp" && (h = i);
  }
  return l === s
    ? l
    : r === i
    ? e <= r
      ? l
      : s
    : (r === -1 / 0
        ? (h = -h)
        : i === 1 / 0
        ? (h = h - r)
        : (h = (h - r) / (i - r)),
      (h = c(h)),
      l === -1 / 0
        ? (h = -h)
        : s === 1 / 0
        ? (h = h + l)
        : (h = h * (s - l) + l),
      h);
}
function TN(e, r) {
  for (var i = 1; i < r.length - 1 && !(r[i] >= e); ++i);
  return i - 1;
}
var MN = { linear: (e) => e },
  po = Symbol.for("FluidValue.get"),
  Hi = Symbol.for("FluidValue.observers"),
  It = (e) => !!(e && e[po]),
  Ct = (e) => (e && e[po] ? e[po]() : e),
  _y = (e) => e[Hi] || null;
function CN(e, r) {
  e.eventObserved ? e.eventObserved(r) : e(r);
}
function vo(e, r) {
  const i = e[Hi];
  i &&
    i.forEach((l) => {
      CN(l, r);
    });
}
var Ux = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      RN(this, e);
    }
  },
  RN = (e, r) => Lx(e, po, r);
function Gi(e, r) {
  if (e[po]) {
    let i = e[Hi];
    i || Lx(e, Hi, (i = new Set())),
      i.has(r) || (i.add(r), e.observerAdded && e.observerAdded(i.size, r));
  }
  return r;
}
function yo(e, r) {
  const i = e[Hi];
  if (i && i.has(r)) {
    const l = i.size - 1;
    l ? i.delete(r) : (e[Hi] = null),
      e.observerRemoved && e.observerRemoved(l, r);
  }
}
var Lx = (e, r, i) =>
    Object.defineProperty(e, r, { value: i, writable: !0, configurable: !0 }),
  hu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  NN =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  Ay = new RegExp(`(${hu.source})(%|[a-z]+)`, "i"),
  ON = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Wu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Hx = (e) => {
    const [r, i] = DN(e);
    if (!r || om()) return e;
    const l = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(r);
    if (l) return l.trim();
    if (i && i.startsWith("--")) {
      const s = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(i);
      return s || e;
    } else {
      if (i && Wu.test(i)) return Hx(i);
      if (i) return i;
    }
    return e;
  },
  DN = (e) => {
    const r = Wu.exec(e);
    if (!r) return [,];
    const [, i, l] = r;
    return [i, l];
  },
  Bd,
  jN = (e, r, i, l, s) =>
    `rgba(${Math.round(r)}, ${Math.round(i)}, ${Math.round(l)}, ${s})`,
  kx = (e) => {
    Bd ||
      (Bd = Yr
        ? new RegExp(`(${Object.keys(Yr).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    const r = e.output.map((c) =>
        Ct(c).replace(Wu, Hx).replace(NN, Ey).replace(Bd, Ey)
      ),
      i = r.map((c) => c.match(hu).map(Number)),
      s = i[0]
        .map((c, f) =>
          i.map((m) => {
            if (!(f in m))
              throw Error('The arity of each "output" value must be equal');
            return m[f];
          })
        )
        .map((c) => go({ ...e, output: c }));
    return (c) => {
      var g;
      const f =
        !Ay.test(r[0]) &&
        ((g = r.find((h) => Ay.test(h))) == null ? void 0 : g.replace(hu, ""));
      let m = 0;
      return r[0].replace(hu, () => `${s[m++](c)}${f || ""}`).replace(ON, jN);
    };
  },
  cm = "react-spring: ",
  Bx = (e) => {
    const r = e;
    let i = !1;
    if (typeof r != "function")
      throw new TypeError(`${cm}once requires a function parameter`);
    return (...l) => {
      i || (r(...l), (i = !0));
    };
  },
  zN = Bx(console.warn);
function UN() {
  zN(`${cm}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var LN = Bx(console.warn);
function HN() {
  LN(
    `${cm}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Iu(e) {
  return (
    oe.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!om() && Wu.test(e)) || e in (Yr || {}))
  );
}
var fm = om() ? _.useEffect : _.useLayoutEffect,
  kN = () => {
    const e = _.useRef(!1);
    return (
      fm(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function Vx() {
  const e = _.useState()[1],
    r = kN();
  return () => {
    r.current && e(Math.random());
  };
}
function BN(e, r) {
  const [i] = _.useState(() => ({ inputs: r, result: e() })),
    l = _.useRef(),
    s = l.current;
  let c = s;
  return (
    c
      ? (r && c.inputs && VN(r, c.inputs)) || (c = { inputs: r, result: e() })
      : (c = i),
    _.useEffect(() => {
      (l.current = c), s == i && (i.inputs = i.result = void 0);
    }, [c]),
    c.result
  );
}
function VN(e, r) {
  if (e.length !== r.length) return !1;
  for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) return !1;
  return !0;
}
var qx = (e) => _.useEffect(e, qN),
  qN = [];
function Ty(e) {
  const r = _.useRef();
  return (
    _.useEffect(() => {
      r.current = e;
    }),
    r.current
  );
}
var xo = Symbol.for("Animated:node"),
  YN = (e) => !!e && e[xo] === e,
  En = (e) => e && e[xo],
  dm = (e, r) => fN(e, xo, r),
  Ju = (e) => e && e[xo] && e[xo].getPayload(),
  Yx = class {
    constructor() {
      dm(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  zo = class extends Yx {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        oe.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new zo(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, r) {
      return (
        oe.num(e) &&
          ((this.lastPosition = e),
          r &&
            ((e = Math.round(e / r) * r),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        oe.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  bo = class extends zo {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = go({ output: [e, e] }));
    }
    static create(e) {
      return new bo(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (oe.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = go({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  Uu = { dependencies: null },
  ec = class extends Yx {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const r = {};
      return (
        Rn(this.source, (i, l) => {
          YN(i)
            ? (r[l] = i.getValue(e))
            : It(i)
            ? (r[l] = Ct(i))
            : e || (r[l] = i);
        }),
        r
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && De(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const r = new Set();
        return Rn(e, this._addToPayload, r), Array.from(r);
      }
    }
    _addToPayload(e) {
      Uu.dependencies && It(e) && Uu.dependencies.add(e);
      const r = Ju(e);
      r && De(r, (i) => this.add(i));
    }
  },
  Gx = class extends ec {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new Gx(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const r = this.getPayload();
      return e.length == r.length
        ? r.map((i, l) => i.setValue(e[l])).some(Boolean)
        : (super.setValue(e.map(GN)), !0);
    }
  };
function GN(e) {
  return (Iu(e) ? bo : zo).create(e);
}
function xh(e) {
  const r = En(e);
  return r ? r.constructor : oe.arr(e) ? Gx : Iu(e) ? bo : zo;
}
var My = (e, r) => {
    const i = !oe.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return _.forwardRef((l, s) => {
      const c = _.useRef(null),
        f =
          i &&
          _.useCallback(
            (A) => {
              c.current = PN(s, A);
            },
            [s]
          ),
        [m, g] = FN(l, r),
        h = Vx(),
        p = () => {
          const A = c.current;
          if (i && !A) return;
          (A ? r.applyAnimatedValues(A, m.getValue(!0)) : !1) === !1 && h();
        },
        y = new XN(p, g),
        b = _.useRef();
      fm(
        () => (
          (b.current = y),
          De(g, (A) => Gi(A, y)),
          () => {
            b.current &&
              (De(b.current.deps, (A) => yo(A, b.current)),
              Ee.cancel(b.current.update));
          }
        )
      ),
        _.useEffect(p, []),
        qx(() => () => {
          const A = b.current;
          De(A.deps, (w) => yo(w, A));
        });
      const S = r.getComponentProps(m.getValue());
      return _.createElement(e, { ...S, ref: f });
    });
  },
  XN = class {
    constructor(e, r) {
      (this.update = e), (this.deps = r);
    }
    eventObserved(e) {
      e.type == "change" && Ee.write(this.update);
    }
  };
function FN(e, r) {
  const i = new Set();
  return (
    (Uu.dependencies = i),
    e.style && (e = { ...e, style: r.createAnimatedStyle(e.style) }),
    (e = new ec(e)),
    (Uu.dependencies = null),
    [e, i]
  );
}
function PN(e, r) {
  return e && (oe.fun(e) ? e(r) : (e.current = r)), r;
}
var Cy = Symbol.for("AnimatedComponent"),
  QN = (
    e,
    {
      applyAnimatedValues: r = () => !1,
      createAnimatedStyle: i = (s) => new ec(s),
      getComponentProps: l = (s) => s,
    } = {}
  ) => {
    const s = {
        applyAnimatedValues: r,
        createAnimatedStyle: i,
        getComponentProps: l,
      },
      c = (f) => {
        const m = Ry(f) || "Anonymous";
        return (
          oe.str(f)
            ? (f = c[f] || (c[f] = My(f, s)))
            : (f = f[Cy] || (f[Cy] = My(f, s))),
          (f.displayName = `Animated(${m})`),
          f
        );
      };
    return (
      Rn(e, (f, m) => {
        oe.arr(e) && (m = Ry(f)), (c[m] = c(f));
      }),
      { animated: c }
    );
  },
  Ry = (e) =>
    oe.str(e)
      ? e
      : e && oe.str(e.displayName)
      ? e.displayName
      : (oe.fun(e) && e.name) || null;
function Ea(e, ...r) {
  return oe.fun(e) ? e(...r) : e;
}
var so = (e, r) =>
    e === !0 || !!(r && e && (oe.fun(e) ? e(r) : kt(e).includes(r))),
  Xx = (e, r) => (oe.obj(e) ? r && e[r] : e),
  Fx = (e, r) => (e.default === !0 ? e[r] : e.default ? e.default[r] : void 0),
  $N = (e) => e,
  hm = (e, r = $N) => {
    let i = ZN;
    e.default && e.default !== !0 && ((e = e.default), (i = Object.keys(e)));
    const l = {};
    for (const s of i) {
      const c = r(e[s], s);
      oe.und(c) || (l[s] = c);
    }
    return l;
  },
  ZN = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  KN = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function WN(e) {
  const r = {};
  let i = 0;
  if (
    (Rn(e, (l, s) => {
      KN[s] || ((r[s] = l), i++);
    }),
    i)
  )
    return r;
}
function Px(e) {
  const r = WN(e);
  if (r) {
    const i = { to: r };
    return Rn(e, (l, s) => s in r || (i[s] = l)), i;
  }
  return { ...e };
}
function So(e) {
  return (
    (e = Ct(e)),
    oe.arr(e)
      ? e.map(So)
      : Iu(e)
      ? dn.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function IN(e) {
  for (const r in e) return !0;
  return !1;
}
function bh(e) {
  return oe.fun(e) || (oe.arr(e) && oe.obj(e[0]));
}
function JN(e, r) {
  var i;
  (i = e.ref) == null || i.delete(e), r == null || r.delete(e);
}
function e3(e, r) {
  var i;
  r &&
    e.ref !== r &&
    ((i = e.ref) == null || i.delete(e), r.add(e), (e.ref = r));
}
var t3 = { default: { tension: 170, friction: 26 } },
  Sh = { ...t3.default, mass: 1, damping: 1, easing: MN.linear, clamp: !1 },
  n3 = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, Sh);
    }
  };
function r3(e, r, i) {
  i && ((i = { ...i }), Ny(i, r), (r = { ...i, ...r })),
    Ny(e, r),
    Object.assign(e, r);
  for (const f in Sh) e[f] == null && (e[f] = Sh[f]);
  let { frequency: l, damping: s } = e;
  const { mass: c } = e;
  return (
    oe.und(l) ||
      (l < 0.01 && (l = 0.01),
      s < 0 && (s = 0),
      (e.tension = Math.pow((2 * Math.PI) / l, 2) * c),
      (e.friction = (4 * Math.PI * s * c) / l)),
    e
  );
}
function Ny(e, r) {
  if (!oe.und(r.decay)) e.duration = void 0;
  else {
    const i = !oe.und(r.tension) || !oe.und(r.friction);
    (i || !oe.und(r.frequency) || !oe.und(r.damping) || !oe.und(r.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      i && (e.frequency = void 0);
  }
}
var Oy = [],
  a3 = class {
    constructor() {
      (this.changed = !1),
        (this.values = Oy),
        (this.toValues = null),
        (this.fromValues = Oy),
        (this.config = new n3()),
        (this.immediate = !1);
    }
  };
function Qx(e, { key: r, props: i, defaultProps: l, state: s, actions: c }) {
  return new Promise((f, m) => {
    let g,
      h,
      p = so(i.cancel ?? (l == null ? void 0 : l.cancel), r);
    if (p) S();
    else {
      oe.und(i.pause) || (s.paused = so(i.pause, r));
      let A = l == null ? void 0 : l.pause;
      A !== !0 && (A = s.paused || so(A, r)),
        (g = Ea(i.delay || 0, r)),
        A ? (s.resumeQueue.add(b), c.pause()) : (c.resume(), b());
    }
    function y() {
      s.resumeQueue.add(b),
        s.timeouts.delete(h),
        h.cancel(),
        (g = h.time - Ee.now());
    }
    function b() {
      g > 0 && !dn.skipAnimation
        ? ((s.delayed = !0),
          (h = Ee.setTimeout(S, g)),
          s.pauseQueue.add(y),
          s.timeouts.add(h))
        : S();
    }
    function S() {
      s.delayed && (s.delayed = !1),
        s.pauseQueue.delete(y),
        s.timeouts.delete(h),
        e <= (s.cancelId || 0) && (p = !0);
      try {
        c.start({ ...i, callId: e, cancel: p }, f);
      } catch (A) {
        m(A);
      }
    }
  });
}
var mm = (e, r) =>
    r.length == 1
      ? r[0]
      : r.some((i) => i.cancelled)
      ? Ri(e.get())
      : r.every((i) => i.noop)
      ? $x(e.get())
      : sn(
          e.get(),
          r.every((i) => i.finished)
        ),
  $x = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  sn = (e, r, i = !1) => ({ value: e, finished: r, cancelled: i }),
  Ri = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Zx(e, r, i, l) {
  const { callId: s, parentId: c, onRest: f } = r,
    { asyncTo: m, promise: g } = i;
  return !c && e === m && !r.reset
    ? g
    : (i.promise = (async () => {
        (i.asyncId = s), (i.asyncTo = e);
        const h = hm(r, (T, M) => (M === "onRest" ? void 0 : T));
        let p, y;
        const b = new Promise((T, M) => ((p = T), (y = M))),
          S = (T) => {
            const M =
              (s <= (i.cancelId || 0) && Ri(l)) ||
              (s !== i.asyncId && sn(l, !1));
            if (M) throw ((T.result = M), y(T), T);
          },
          A = (T, M) => {
            const R = new Dy(),
              O = new jy();
            return (async () => {
              if (dn.skipAnimation)
                throw (wo(i), (O.result = sn(l, !1)), y(O), O);
              S(R);
              const L = oe.obj(T) ? { ...T } : { ...M, to: T };
              (L.parentId = s),
                Rn(h, (z, Y) => {
                  oe.und(L[Y]) && (L[Y] = z);
                });
              const D = await l.start(L);
              return (
                S(R),
                i.paused &&
                  (await new Promise((z) => {
                    i.resumeQueue.add(z);
                  })),
                D
              );
            })();
          };
        let w;
        if (dn.skipAnimation) return wo(i), sn(l, !1);
        try {
          let T;
          oe.arr(e)
            ? (T = (async (M) => {
                for (const R of M) await A(R);
              })(e))
            : (T = Promise.resolve(e(A, l.stop.bind(l)))),
            await Promise.all([T.then(p), b]),
            (w = sn(l.get(), !0, !1));
        } catch (T) {
          if (T instanceof Dy) w = T.result;
          else if (T instanceof jy) w = T.result;
          else throw T;
        } finally {
          s == i.asyncId &&
            ((i.asyncId = c),
            (i.asyncTo = c ? m : void 0),
            (i.promise = c ? g : void 0));
        }
        return (
          oe.fun(f) &&
            Ee.batchedUpdates(() => {
              f(w, l, l.item);
            }),
          w
        );
      })());
}
function wo(e, r) {
  lo(e.timeouts, (i) => i.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    r && (e.cancelId = r);
}
var Dy = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
    }
  },
  jy = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  wh = (e) => e instanceof gm,
  i3 = 1,
  gm = class extends Ux {
    constructor() {
      super(...arguments), (this.id = i3++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = En(this);
      return e && e.getValue();
    }
    to(...e) {
      return dn.to(this, e);
    }
    interpolate(...e) {
      return UN(), dn.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, r = !1) {
      vo(this, { type: "change", parent: this, value: e, idle: r });
    }
    _onPriorityChange(e) {
      this.idle || Zu.sort(this),
        vo(this, { type: "priority", parent: this, priority: e });
    }
  },
  Ra = Symbol.for("SpringPhase"),
  Kx = 1,
  Wx = 2,
  Ix = 4,
  Vd = (e) => (e[Ra] & Kx) > 0,
  Hr = (e) => (e[Ra] & Wx) > 0,
  Il = (e) => (e[Ra] & Ix) > 0,
  zy = (e, r) => (r ? (e[Ra] |= Wx | Kx) : (e[Ra] &= -3)),
  Uy = (e, r) => (r ? (e[Ra] |= Ix) : (e[Ra] &= -5)),
  l3 = class extends gm {
    constructor(e, r) {
      if (
        (super(),
        (this.animation = new a3()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !oe.und(e) || !oe.und(r))
      ) {
        const i = oe.obj(e) ? { ...e } : { ...r, from: e };
        oe.und(i.default) && (i.default = !0), this.start(i);
      }
    }
    get idle() {
      return !(Hr(this) || this._state.asyncTo) || Il(this);
    }
    get goal() {
      return Ct(this.animation.to);
    }
    get velocity() {
      const e = En(this);
      return e instanceof zo
        ? e.lastVelocity || 0
        : e.getPayload().map((r) => r.lastVelocity || 0);
    }
    get hasAnimated() {
      return Vd(this);
    }
    get isAnimating() {
      return Hr(this);
    }
    get isPaused() {
      return Il(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let r = !0,
        i = !1;
      const l = this.animation;
      let { toValues: s } = l;
      const { config: c } = l,
        f = Ju(l.to);
      !f && It(l.to) && (s = kt(Ct(l.to))),
        l.values.forEach((h, p) => {
          if (h.done) return;
          const y = h.constructor == bo ? 1 : f ? f[p].lastPosition : s[p];
          let b = l.immediate,
            S = y;
          if (!b) {
            if (((S = h.lastPosition), c.tension <= 0)) {
              h.done = !0;
              return;
            }
            let A = (h.elapsedTime += e);
            const w = l.fromValues[p],
              T =
                h.v0 != null
                  ? h.v0
                  : (h.v0 = oe.arr(c.velocity) ? c.velocity[p] : c.velocity);
            let M;
            const R =
              c.precision ||
              (w == y ? 0.005 : Math.min(1, Math.abs(y - w) * 0.001));
            if (oe.und(c.duration))
              if (c.decay) {
                const O = c.decay === !0 ? 0.998 : c.decay,
                  L = Math.exp(-(1 - O) * A);
                (S = w + (T / (1 - O)) * (1 - L)),
                  (b = Math.abs(h.lastPosition - S) <= R),
                  (M = T * L);
              } else {
                M = h.lastVelocity == null ? T : h.lastVelocity;
                const O = c.restVelocity || R / 10,
                  L = c.clamp ? 0 : c.bounce,
                  D = !oe.und(L),
                  z = w == y ? h.v0 > 0 : w < y;
                let Y,
                  te = !1;
                const Z = 1,
                  ne = Math.ceil(e / Z);
                for (
                  let G = 0;
                  G < ne &&
                  ((Y = Math.abs(M) > O),
                  !(!Y && ((b = Math.abs(y - S) <= R), b)));
                  ++G
                ) {
                  D &&
                    ((te = S == y || S > y == z),
                    te && ((M = -M * L), (S = y)));
                  const ae = -c.tension * 1e-6 * (S - y),
                    q = -c.friction * 0.001 * M,
                    W = (ae + q) / c.mass;
                  (M = M + W * Z), (S = S + M * Z);
                }
              }
            else {
              let O = 1;
              c.duration > 0 &&
                (this._memoizedDuration !== c.duration &&
                  ((this._memoizedDuration = c.duration),
                  h.durationProgress > 0 &&
                    ((h.elapsedTime = c.duration * h.durationProgress),
                    (A = h.elapsedTime += e))),
                (O = (c.progress || 0) + A / this._memoizedDuration),
                (O = O > 1 ? 1 : O < 0 ? 0 : O),
                (h.durationProgress = O)),
                (S = w + c.easing(O) * (y - w)),
                (M = (S - h.lastPosition) / e),
                (b = O == 1);
            }
            (h.lastVelocity = M),
              Number.isNaN(S) &&
                (console.warn("Got NaN while animating:", this), (b = !0));
          }
          f && !f[p].done && (b = !1),
            b ? (h.done = !0) : (r = !1),
            h.setValue(S, c.round) && (i = !0);
        });
      const m = En(this),
        g = m.getValue();
      if (r) {
        const h = Ct(l.to);
        (g !== h || i) && !c.decay
          ? (m.setValue(h), this._onChange(h))
          : i && c.decay && this._onChange(g),
          this._stop();
      } else i && this._onChange(g);
    }
    set(e) {
      return (
        Ee.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (Hr(this)) {
        const { to: e, config: r } = this.animation;
        Ee.batchedUpdates(() => {
          this._onStart(), r.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, r) {
      let i;
      return (
        oe.und(e)
          ? ((i = this.queue || []), (this.queue = []))
          : (i = [oe.obj(e) ? e : { ...r, to: e }]),
        Promise.all(i.map((l) => this._update(l))).then((l) => mm(this, l))
      );
    }
    stop(e) {
      const { to: r } = this.animation;
      return (
        this._focus(this.get()),
        wo(this._state, e && this._lastCallId),
        Ee.batchedUpdates(() => this._stop(r, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == "change"
        ? this._start()
        : e.type == "priority" && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const r = this.key || "";
      let { to: i, from: l } = e;
      (i = oe.obj(i) ? i[r] : i),
        (i == null || bh(i)) && (i = void 0),
        (l = oe.obj(l) ? l[r] : l),
        l == null && (l = void 0);
      const s = { to: i, from: l };
      return (
        Vd(this) ||
          (e.reverse && ([i, l] = [l, i]),
          (l = Ct(l)),
          oe.und(l) ? En(this) || this._set(i) : this._set(l)),
        s
      );
    }
    _update({ ...e }, r) {
      const { key: i, defaultProps: l } = this;
      e.default &&
        Object.assign(
          l,
          hm(e, (f, m) => (/^on/.test(m) ? Xx(f, i) : f))
        ),
        Hy(this, e, "onProps"),
        eo(this, "onProps", e, this);
      const s = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      const c = this._state;
      return Qx(++this._lastCallId, {
        key: i,
        props: e,
        defaultProps: l,
        state: c,
        actions: {
          pause: () => {
            Il(this) ||
              (Uy(this, !0),
              ao(c.pauseQueue),
              eo(this, "onPause", sn(this, Jl(this, this.animation.to)), this));
          },
          resume: () => {
            Il(this) &&
              (Uy(this, !1),
              Hr(this) && this._resume(),
              ao(c.resumeQueue),
              eo(
                this,
                "onResume",
                sn(this, Jl(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, s),
        },
      }).then((f) => {
        if (e.loop && f.finished && !(r && f.noop)) {
          const m = Jx(e);
          if (m) return this._update(m, !0);
        }
        return f;
      });
    }
    _merge(e, r, i) {
      if (r.cancel) return this.stop(!0), i(Ri(this));
      const l = !oe.und(e.to),
        s = !oe.und(e.from);
      if (l || s)
        if (r.callId > this._lastToId) this._lastToId = r.callId;
        else return i(Ri(this));
      const { key: c, defaultProps: f, animation: m } = this,
        { to: g, from: h } = m;
      let { to: p = g, from: y = h } = e;
      s && !l && (!r.default || oe.und(p)) && (p = y),
        r.reverse && ([p, y] = [y, p]);
      const b = !tr(y, h);
      b && (m.from = y), (y = Ct(y));
      const S = !tr(p, g);
      S && this._focus(p);
      const A = bh(r.to),
        { config: w } = m,
        { decay: T, velocity: M } = w;
      (l || s) && (w.velocity = 0),
        r.config &&
          !A &&
          r3(
            w,
            Ea(r.config, c),
            r.config !== f.config ? Ea(f.config, c) : void 0
          );
      let R = En(this);
      if (!R || oe.und(p)) return i(sn(this, !0));
      const O = oe.und(r.reset)
          ? s && !r.default
          : !oe.und(y) && so(r.reset, c),
        L = O ? y : this.get(),
        D = So(p),
        z = oe.num(D) || oe.arr(D) || Iu(D),
        Y = !A && (!z || so(f.immediate || r.immediate, c));
      if (S) {
        const G = xh(p);
        if (G !== R.constructor)
          if (Y) R = this._set(D);
          else
            throw Error(
              `Cannot animate between ${R.constructor.name} and ${G.name}, as the "to" prop suggests`
            );
      }
      const te = R.constructor;
      let Z = It(p),
        ne = !1;
      if (!Z) {
        const G = O || (!Vd(this) && b);
        (S || G) && ((ne = tr(So(L), D)), (Z = !ne)),
          ((!tr(m.immediate, Y) && !Y) ||
            !tr(w.decay, T) ||
            !tr(w.velocity, M)) &&
            (Z = !0);
      }
      if (
        (ne && Hr(this) && (m.changed && !O ? (Z = !0) : Z || this._stop(g)),
        !A &&
          ((Z || It(g)) &&
            ((m.values = R.getPayload()),
            (m.toValues = It(p) ? null : te == bo ? [1] : kt(D))),
          m.immediate != Y && ((m.immediate = Y), !Y && !O && this._set(g)),
          Z))
      ) {
        const { onRest: G } = m;
        De(s3, (q) => Hy(this, r, q));
        const ae = sn(this, Jl(this, g));
        ao(this._pendingCalls, ae),
          this._pendingCalls.add(i),
          m.changed &&
            Ee.batchedUpdates(() => {
              var q;
              (m.changed = !O),
                G == null || G(ae, this),
                O
                  ? Ea(f.onRest, ae)
                  : (q = m.onStart) == null || q.call(m, ae, this);
            });
      }
      O && this._set(L),
        A
          ? i(Zx(r.to, r, this._state, this))
          : Z
          ? this._start()
          : Hr(this) && !S
          ? this._pendingCalls.add(i)
          : i($x(L));
    }
    _focus(e) {
      const r = this.animation;
      e !== r.to &&
        (_y(this) && this._detach(), (r.to = e), _y(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: r } = this.animation;
      It(r) && (Gi(r, this), wh(r) && (e = r.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      It(e) && yo(e, this);
    }
    _set(e, r = !0) {
      const i = Ct(e);
      if (!oe.und(i)) {
        const l = En(this);
        if (!l || !tr(i, l.getValue())) {
          const s = xh(i);
          !l || l.constructor != s ? dm(this, s.create(i)) : l.setValue(i),
            l &&
              Ee.batchedUpdates(() => {
                this._onChange(i, r);
              });
        }
      }
      return En(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), eo(this, "onStart", sn(this, Jl(this, e.to)), this));
    }
    _onChange(e, r) {
      r || (this._onStart(), Ea(this.animation.onChange, e, this)),
        Ea(this.defaultProps.onChange, e, this),
        super._onChange(e, r);
    }
    _start() {
      const e = this.animation;
      En(this).reset(Ct(e.to)),
        e.immediate || (e.fromValues = e.values.map((r) => r.lastPosition)),
        Hr(this) || (zy(this, !0), Il(this) || this._resume());
    }
    _resume() {
      dn.skipAnimation ? this.finish() : Zu.start(this);
    }
    _stop(e, r) {
      if (Hr(this)) {
        zy(this, !1);
        const i = this.animation;
        De(i.values, (s) => {
          s.done = !0;
        }),
          i.toValues && (i.onChange = i.onPause = i.onResume = void 0),
          vo(this, { type: "idle", parent: this });
        const l = r ? Ri(this.get()) : sn(this.get(), Jl(this, e ?? i.to));
        ao(this._pendingCalls, l),
          i.changed && ((i.changed = !1), eo(this, "onRest", l, this));
      }
    }
  };
function Jl(e, r) {
  const i = So(r),
    l = So(e.get());
  return tr(l, i);
}
function Jx(e, r = e.loop, i = e.to) {
  const l = Ea(r);
  if (l) {
    const s = l !== !0 && Px(l),
      c = (s || e).reverse,
      f = !s || s.reset;
    return Eo({
      ...e,
      loop: r,
      default: !1,
      pause: void 0,
      to: !c || bh(i) ? i : void 0,
      from: f ? e.from : void 0,
      reset: f,
      ...s,
    });
  }
}
function Eo(e) {
  const { to: r, from: i } = (e = Px(e)),
    l = new Set();
  return (
    oe.obj(r) && Ly(r, l),
    oe.obj(i) && Ly(i, l),
    (e.keys = l.size ? Array.from(l) : null),
    e
  );
}
function o3(e) {
  const r = Eo(e);
  return oe.und(r.default) && (r.default = hm(r)), r;
}
function Ly(e, r) {
  Rn(e, (i, l) => i != null && r.add(l));
}
var s3 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Hy(e, r, i) {
  e.animation[i] = r[i] !== Fx(r, i) ? Xx(r[i], e.key) : void 0;
}
function eo(e, r, ...i) {
  var l, s, c, f;
  (s = (l = e.animation)[r]) == null || s.call(l, ...i),
    (f = (c = e.defaultProps)[r]) == null || f.call(c, ...i);
}
var u3 = ["onStart", "onChange", "onRest"],
  c3 = 1,
  f3 = class {
    constructor(e, r) {
      (this.id = c3++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        r && (this._flush = r),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((r, i) => (e[i] = r.get())), e;
    }
    set(e) {
      for (const r in e) {
        const i = e[r];
        oe.und(i) || this.springs[r].set(i);
      }
    }
    update(e) {
      return e && this.queue.push(Eo(e)), this;
    }
    start(e) {
      let { queue: r } = this;
      return (
        e ? (r = kt(e).map(Eo)) : (this.queue = []),
        this._flush ? this._flush(this, r) : (ab(this, r), Eh(this, r))
      );
    }
    stop(e, r) {
      if ((e !== !!e && (r = e), r)) {
        const i = this.springs;
        De(kt(r), (l) => i[l].stop(!!e));
      } else wo(this._state, this._lastAsyncId), this.each((i) => i.stop(!!e));
      return this;
    }
    pause(e) {
      if (oe.und(e)) this.start({ pause: !0 });
      else {
        const r = this.springs;
        De(kt(e), (i) => r[i].pause());
      }
      return this;
    }
    resume(e) {
      if (oe.und(e)) this.start({ pause: !1 });
      else {
        const r = this.springs;
        De(kt(e), (i) => r[i].resume());
      }
      return this;
    }
    each(e) {
      Rn(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: r, onRest: i } = this._events,
        l = this._active.size > 0,
        s = this._changed.size > 0;
      ((l && !this._started) || (s && !this._started)) &&
        ((this._started = !0),
        lo(e, ([m, g]) => {
          (g.value = this.get()), m(g, this, this._item);
        }));
      const c = !l && this._started,
        f = s || (c && i.size) ? this.get() : null;
      s &&
        r.size &&
        lo(r, ([m, g]) => {
          (g.value = f), m(g, this, this._item);
        }),
        c &&
          ((this._started = !1),
          lo(i, ([m, g]) => {
            (g.value = f), m(g, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      Ee.onFrame(this._onFrame);
    }
  };
function Eh(e, r) {
  return Promise.all(r.map((i) => eb(e, i))).then((i) => mm(e, i));
}
async function eb(e, r, i) {
  const { keys: l, to: s, from: c, loop: f, onRest: m, onResolve: g } = r,
    h = oe.obj(r.default) && r.default;
  f && (r.loop = !1), s === !1 && (r.to = null), c === !1 && (r.from = null);
  const p = oe.arr(s) || oe.fun(s) ? s : void 0;
  p
    ? ((r.to = void 0), (r.onRest = void 0), h && (h.onRest = void 0))
    : De(u3, (w) => {
        const T = r[w];
        if (oe.fun(T)) {
          const M = e._events[w];
          (r[w] = ({ finished: R, cancelled: O }) => {
            const L = M.get(T);
            L
              ? (R || (L.finished = !1), O && (L.cancelled = !0))
              : M.set(T, {
                  value: null,
                  finished: R || !1,
                  cancelled: O || !1,
                });
          }),
            h && (h[w] = r[w]);
        }
      });
  const y = e._state;
  r.pause === !y.paused
    ? ((y.paused = r.pause), ao(r.pause ? y.pauseQueue : y.resumeQueue))
    : y.paused && (r.pause = !0);
  const b = (l || Object.keys(e.springs)).map((w) => e.springs[w].start(r)),
    S = r.cancel === !0 || Fx(r, "cancel") === !0;
  (p || (S && y.asyncId)) &&
    b.push(
      Qx(++e._lastAsyncId, {
        props: r,
        state: y,
        actions: {
          pause: vh,
          resume: vh,
          start(w, T) {
            S
              ? (wo(y, e._lastAsyncId), T(Ri(e)))
              : ((w.onRest = m), T(Zx(p, w, y, e)));
          },
        },
      })
    ),
    y.paused &&
      (await new Promise((w) => {
        y.resumeQueue.add(w);
      }));
  const A = mm(e, await Promise.all(b));
  if (f && A.finished && !(i && A.noop)) {
    const w = Jx(r, f, s);
    if (w) return ab(e, [w]), eb(e, w, !0);
  }
  return g && Ee.batchedUpdates(() => g(A, e, e.item)), A;
}
function ky(e, r) {
  const i = { ...e.springs };
  return (
    r &&
      De(kt(r), (l) => {
        oe.und(l.keys) && (l = Eo(l)),
          oe.obj(l.to) || (l = { ...l, to: void 0 }),
          rb(i, l, (s) => nb(s));
      }),
    tb(e, i),
    i
  );
}
function tb(e, r) {
  Rn(r, (i, l) => {
    e.springs[l] || ((e.springs[l] = i), Gi(i, e));
  });
}
function nb(e, r) {
  const i = new l3();
  return (i.key = e), r && Gi(i, r), i;
}
function rb(e, r, i) {
  r.keys &&
    De(r.keys, (l) => {
      (e[l] || (e[l] = i(l)))._prepareNode(r);
    });
}
function ab(e, r) {
  De(r, (i) => {
    rb(e.springs, i, (l) => nb(l, e));
  });
}
var tc = ({ children: e, ...r }) => {
    const i = _.useContext(Lu),
      l = r.pause || !!i.pause,
      s = r.immediate || !!i.immediate;
    r = BN(() => ({ pause: l, immediate: s }), [l, s]);
    const { Provider: c } = Lu;
    return _.createElement(c, { value: r }, e);
  },
  Lu = d3(tc, {});
tc.Provider = Lu.Provider;
tc.Consumer = Lu.Consumer;
function d3(e, r) {
  return (
    Object.assign(e, _.createContext(r)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var h3 = () => {
  const e = [],
    r = function (l) {
      HN();
      const s = [];
      return (
        De(e, (c, f) => {
          if (oe.und(l)) s.push(c.start());
          else {
            const m = i(l, c, f);
            m && s.push(c.start(m));
          }
        }),
        s
      );
    };
  (r.current = e),
    (r.add = function (l) {
      e.includes(l) || e.push(l);
    }),
    (r.delete = function (l) {
      const s = e.indexOf(l);
      ~s && e.splice(s, 1);
    }),
    (r.pause = function () {
      return De(e, (l) => l.pause(...arguments)), this;
    }),
    (r.resume = function () {
      return De(e, (l) => l.resume(...arguments)), this;
    }),
    (r.set = function (l) {
      De(e, (s, c) => {
        const f = oe.fun(l) ? l(c, s) : l;
        f && s.set(f);
      });
    }),
    (r.start = function (l) {
      const s = [];
      return (
        De(e, (c, f) => {
          if (oe.und(l)) s.push(c.start());
          else {
            const m = this._getProps(l, c, f);
            m && s.push(c.start(m));
          }
        }),
        s
      );
    }),
    (r.stop = function () {
      return De(e, (l) => l.stop(...arguments)), this;
    }),
    (r.update = function (l) {
      return De(e, (s, c) => s.update(this._getProps(l, s, c))), this;
    });
  const i = function (l, s, c) {
    return oe.fun(l) ? l(c, s) : l;
  };
  return (r._getProps = i), r;
};
function m3(e, r, i) {
  const l = oe.fun(r) && r;
  l && !i && (i = []);
  const s = _.useMemo(() => (l || arguments.length == 3 ? h3() : void 0), []),
    c = _.useRef(0),
    f = Vx(),
    m = _.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(M, R) {
          const O = ky(M, R);
          return c.current > 0 &&
            !m.queue.length &&
            !Object.keys(O).some((D) => !M.springs[D])
            ? Eh(M, R)
            : new Promise((D) => {
                tb(M, O),
                  m.queue.push(() => {
                    D(Eh(M, R));
                  }),
                  f();
              });
        },
      }),
      []
    ),
    g = _.useRef([...m.ctrls]),
    h = [],
    p = Ty(e) || 0;
  _.useMemo(() => {
    De(g.current.slice(e, p), (M) => {
      JN(M, s), M.stop(!0);
    }),
      (g.current.length = e),
      y(p, e);
  }, [e]),
    _.useMemo(() => {
      y(0, Math.min(p, e));
    }, i);
  function y(M, R) {
    for (let O = M; O < R; O++) {
      const L = g.current[O] || (g.current[O] = new f3(null, m.flush)),
        D = l ? l(O, L) : r[O];
      D && (h[O] = o3(D));
    }
  }
  const b = g.current.map((M, R) => ky(M, h[R])),
    S = _.useContext(tc),
    A = Ty(S),
    w = S !== A && IN(S);
  fm(() => {
    c.current++, (m.ctrls = g.current);
    const { queue: M } = m;
    M.length && ((m.queue = []), De(M, (R) => R())),
      De(g.current, (R, O) => {
        s == null || s.add(R), w && R.start({ default: S });
        const L = h[O];
        L && (e3(R, L.ref), R.ref ? R.queue.push(L) : R.start(L));
      });
  }),
    qx(() => () => {
      De(m.ctrls, (M) => M.stop(!0));
    });
  const T = b.map((M) => ({ ...M }));
  return s ? [T, s] : T;
}
function Xi(e, r) {
  const i = oe.fun(e),
    [[l], s] = m3(1, i ? e : [e], i ? [] : r);
  return i || arguments.length == 2 ? [l, s] : l;
}
var g3 = class extends gm {
  constructor(e, r) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = go(...r));
    const i = this._get(),
      l = xh(i);
    dm(this, l.create(i));
  }
  advance(e) {
    const r = this._get(),
      i = this.get();
    tr(r, i) || (En(this).setValue(r), this._onChange(r, this.idle)),
      !this.idle && By(this._active) && qd(this);
  }
  _get() {
    const e = oe.arr(this.source) ? this.source.map(Ct) : kt(Ct(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !By(this._active) &&
      ((this.idle = !1),
      De(Ju(this), (e) => {
        e.done = !1;
      }),
      dn.skipAnimation
        ? (Ee.batchedUpdates(() => this.advance()), qd(this))
        : Zu.start(this));
  }
  _attach() {
    let e = 1;
    De(kt(this.source), (r) => {
      It(r) && Gi(r, this),
        wh(r) &&
          (r.idle || this._active.add(r), (e = Math.max(e, r.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    De(kt(this.source), (e) => {
      It(e) && yo(e, this);
    }),
      this._active.clear(),
      qd(this);
  }
  eventObserved(e) {
    e.type == "change"
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == "idle"
      ? this._active.delete(e.parent)
      : e.type == "priority" &&
        (this.priority = kt(this.source).reduce(
          (r, i) => Math.max(r, (wh(i) ? i.priority : 0) + 1),
          0
        ));
  }
};
function p3(e) {
  return e.idle !== !1;
}
function By(e) {
  return !e.size || Array.from(e).every(p3);
}
function qd(e) {
  e.idle ||
    ((e.idle = !0),
    De(Ju(e), (r) => {
      r.done = !0;
    }),
    vo(e, { type: "idle", parent: e }));
}
dn.assign({ createStringInterpolator: kx, to: (e, r) => new g3(e, r) });
var Fi = y1();
const v3 = v1(Fi);
var ib = /^--/;
function y3(e, r) {
  return r == null || typeof r == "boolean" || r === ""
    ? ""
    : typeof r == "number" &&
      r !== 0 &&
      !ib.test(e) &&
      !(uo.hasOwnProperty(e) && uo[e])
    ? r + "px"
    : ("" + r).trim();
}
var Vy = {};
function x3(e, r) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const i =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      className: l,
      style: s,
      children: c,
      scrollTop: f,
      scrollLeft: m,
      viewBox: g,
      ...h
    } = r,
    p = Object.values(h),
    y = Object.keys(h).map((b) =>
      i || e.hasAttribute(b)
        ? b
        : Vy[b] || (Vy[b] = b.replace(/([A-Z])/g, (S) => "-" + S.toLowerCase()))
    );
  c !== void 0 && (e.textContent = c);
  for (const b in s)
    if (s.hasOwnProperty(b)) {
      const S = y3(b, s[b]);
      ib.test(b) ? e.style.setProperty(b, S) : (e.style[b] = S);
    }
  y.forEach((b, S) => {
    e.setAttribute(b, p[S]);
  }),
    l !== void 0 && (e.className = l),
    f !== void 0 && (e.scrollTop = f),
    m !== void 0 && (e.scrollLeft = m),
    g !== void 0 && e.setAttribute("viewBox", g);
}
var uo = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  b3 = (e, r) => e + r.charAt(0).toUpperCase() + r.substring(1),
  S3 = ["Webkit", "Ms", "Moz", "O"];
uo = Object.keys(uo).reduce(
  (e, r) => (S3.forEach((i) => (e[b3(i, r)] = e[r])), e),
  uo
);
var w3 = /^(matrix|translate|scale|rotate|skew)/,
  E3 = /^(translate)/,
  _3 = /^(rotate|skew)/,
  Yd = (e, r) => (oe.num(e) && e !== 0 ? e + r : e),
  mu = (e, r) =>
    oe.arr(e)
      ? e.every((i) => mu(i, r))
      : oe.num(e)
      ? e === r
      : parseFloat(e) === r,
  A3 = class extends ec {
    constructor({ x: e, y: r, z: i, ...l }) {
      const s = [],
        c = [];
      (e || r || i) &&
        (s.push([e || 0, r || 0, i || 0]),
        c.push((f) => [
          `translate3d(${f.map((m) => Yd(m, "px")).join(",")})`,
          mu(f, 0),
        ])),
        Rn(l, (f, m) => {
          if (m === "transform")
            s.push([f || ""]), c.push((g) => [g, g === ""]);
          else if (w3.test(m)) {
            if ((delete l[m], oe.und(f))) return;
            const g = E3.test(m) ? "px" : _3.test(m) ? "deg" : "";
            s.push(kt(f)),
              c.push(
                m === "rotate3d"
                  ? ([h, p, y, b]) => [
                      `rotate3d(${h},${p},${y},${Yd(b, g)})`,
                      mu(b, 0),
                    ]
                  : (h) => [
                      `${m}(${h.map((p) => Yd(p, g)).join(",")})`,
                      mu(h, m.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        s.length && (l.transform = new T3(s, c)),
        super(l);
    }
  },
  T3 = class extends Ux {
    constructor(e, r) {
      super(), (this.inputs = e), (this.transforms = r), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = "",
        r = !0;
      return (
        De(this.inputs, (i, l) => {
          const s = Ct(i[0]),
            [c, f] = this.transforms[l](oe.arr(s) ? s : i.map(Ct));
          (e += " " + c), (r = r && f);
        }),
        r ? "none" : e
      );
    }
    observerAdded(e) {
      e == 1 && De(this.inputs, (r) => De(r, (i) => It(i) && Gi(i, this)));
    }
    observerRemoved(e) {
      e == 0 && De(this.inputs, (r) => De(r, (i) => It(i) && yo(i, this)));
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), vo(this, e);
    }
  },
  M3 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
dn.assign({
  batchedUpdates: Fi.unstable_batchedUpdates,
  createStringInterpolator: kx,
  colors: gN,
});
var C3 = QN(M3, {
    applyAnimatedValues: x3,
    createAnimatedStyle: (e) => new A3(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: r, ...i }) => i,
  }),
  Pi = C3.animated;
const R3 = (e) => {
    const { path: r, color: i } = e,
      l = Xi({ to: { path: r } });
    return v.jsx(Pi.path, {
      d: l.path,
      fill: "none",
      stroke: i,
      strokeWidth: 2,
    });
  },
  N3 = (e) => {
    const { cx: r, cy: i } = e,
      l = Xi({ to: { cx: r, cy: i } });
    return v.jsx(Pi.circle, { cx: l.cx, cy: l.cy, r: 6, fill: "#009EE0" });
  },
  pm = ({ interactionData: e }) =>
    e
      ? v.jsxs("div", {
          className:
            "absolute bg-button-background mr-1 px-4 py-3 rounded-2xl border border-black/60",
          style: { left: e.xPos, top: e.tooltipYPos, pointerEvents: "none" },
          children: [
            v.jsx("span", {
              style: { fontWeight: 800 },
              className: "text-bold block",
              children: e.title,
            }),
            v.jsx("div", { className: "text-normal block", children: e.text }),
          ],
        })
      : null,
  vm = ({ interactionData: e }) =>
    e
      ? v.jsxs(v.Fragment, {
          children: [
            v.jsx("line", {
              x1: e.xPos,
              x2: e.xPos,
              y1: e.tooltipYPos,
              y2: e.yPos,
              stroke: "black",
              opacity: 1,
              pointerEvents: "none",
            }),
            v.jsx("circle", {
              cx: e.xPos,
              cy: e.yPos,
              r: 5,
              stroke: "black",
              fill: "white",
              pointerEvents: "none",
            }),
          ],
        })
      : null,
  xi = { top: 70, right: 30, bottom: 0, left: 40 },
  Gd = ({
    width: e,
    height: r,
    data: i,
    min: l,
    max: s,
    title: c,
    unit: f,
    isNormalLabelEnabled: m = !1,
  }) => {
    const [g, h] = _.useState(null),
      p = e - xi.right - xi.left,
      y = r - xi.top - xi.bottom,
      b = _.useMemo(() => No().domain([l, s]).range([y, 0]), [i, r]),
      S = _.useMemo(() => Yi().domain(To).range([0, p]), [i, e]),
      w = Du()
        .x((q) => (S(ft(q.DATE_OBSERVATION)) ?? 0) + S.bandwidth() / 2)
        .y((q) => b(q.MESURE))(i),
      M = Du()
        .x((q) => (S(ft(q.DATE_OBSERVATION)) ?? 0) + S.bandwidth() / 2)
        .y((q) => b(q.NORMALE))(i),
      R = v.jsx("path", {
        d: M,
        fill: "none",
        stroke: "#A1A1A1",
        strokeWidth: 1,
        strokeDasharray: "2, 2",
      }),
      O = i[i.length - 1],
      L = S(ft(O.DATE_OBSERVATION)) || 0,
      D = b(O.NORMALE),
      z = v.jsxs(v.Fragment, {
        children: [
          v.jsx("text", {
            x: L + S.bandwidth() / 2 + 9,
            y: D - 7,
            fill: "#A1A1A1",
            fontSize: 12,
            alignmentBaseline: "middle",
            textAnchor: "left",
            children: "Valeur",
          }),
          v.jsx("text", {
            x: L + S.bandwidth() / 2 + 9,
            y: D + 7,
            fill: "#A1A1A1",
            fontSize: 12,
            alignmentBaseline: "middle",
            textAnchor: "left",
            children: "Normale",
          }),
        ],
      }),
      Y = i.map((q, W) =>
        v.jsx(
          N3,
          {
            cx: (S(ft(q.DATE_OBSERVATION)) ?? 0) + S.bandwidth() / 2,
            cy: b(q.MESURE),
          },
          W
        )
      );
    if (!w) return null;
    const te = b.ticks(3),
      Z = te.map((q, W) => {
        const fe = W === te.length - 1;
        return v.jsxs(
          "g",
          {
            children: [
              v.jsx("line", {
                x1: -40,
                x2: fe || q === 0 ? 0 : -40 / 2,
                y1: Math.floor(b(q)) + 0.5,
                y2: Math.floor(b(q)) + 0.5,
                stroke: "#212121",
                opacity: 0.5,
              }),
              v.jsx("text", {
                x: -40,
                y: b(q) - 10,
                textAnchor: "start",
                alignmentBaseline: "central",
                fontSize: 15,
                fill: "black",
                children: q + " " + (fe ? f : ""),
              }),
            ],
          },
          W
        );
      }),
      ne = S.domain()
        .slice(0, -1)
        .map((q) => {
          const W = S(q) + S.bandwidth();
          return v.jsx(
            "line",
            {
              x1: W,
              x2: W,
              y1: 0,
              y2: r,
              stroke: "#212121",
              strokeOpacity: 0.25,
              strokeWidth: 0.5,
              shapeRendering: "crispEdges",
            },
            q
          );
        }),
      G = (q) => {
        const W = Math.floor(q / S.step());
        return W >= 0 && W < i.length ? i[W] : null;
      },
      ae = (q) => {
        const W = q.currentTarget.getBoundingClientRect(),
          fe = q.clientX - W.left,
          B = G(fe);
        if (B) {
          const { MESURE: ee, DATE_OBSERVATION: X } = B;
          h({
            xPos: (S(ft(X)) ?? 0) + S.bandwidth() / 2,
            yPos: b(ee ?? 0),
            title: Bh(X),
            text: ee ? Math.round(ee * 100) / 100 + f : "-",
            tooltipYPos: -15,
          });
        }
      };
    return v.jsxs("div", {
      className: "relative overflow-visible",
      children: [
        v.jsx("div", {
          className: "absolute inset-0 translate-y-6  pointer-events-none",
          children: v.jsx("span", {
            className: "bricolageFont",
            style: { fontSize: 19, fontWeight: 800 },
            children: c,
          }),
        }),
        v.jsx("svg", {
          width: e,
          height: r,
          className: "overflow-visible",
          children: v.jsxs("g", {
            width: p,
            height: y,
            transform: `translate(${[xi.left, xi.top].join(",")})`,
            children: [
              ne,
              R,
              m && z,
              v.jsx(R3, { path: w, color: "#B3E2F6" }),
              Y,
              Z,
              v.jsx(vm, { interactionData: g }),
              v.jsx("rect", {
                x: 0,
                y: 0,
                width: p,
                height: y,
                onMouseMove: ae,
                onMouseLeave: () => h(null),
                visibility: "hidden",
                pointerEvents: "all",
                cursor: "pointer",
              }),
              v.jsx("line", {
                x1: 0,
                x2: p,
                y1: y + 0.5,
                y2: y + 0.5,
                stroke: "#212121",
                strokeWidth: 0.5,
              }),
            ],
          }),
        }),
        v.jsx(pm, { interactionData: g }),
      ],
    });
  },
  O3 = (e) => {
    const { x: r, y: i, width: l, height: s } = e,
      c = Xi({ to: { x: r, y: i } });
    return v.jsx(Pi.rect, {
      x: c.x,
      y: c.y,
      width: l,
      height: s,
      fill: "#009EE0",
    });
  },
  bi = { top: 70, right: 30, bottom: 40, left: 40 },
  qy = 10,
  D3 = ({ width: e, height: r, data: i, min: l, max: s, title: c }) => {
    const f = e - bi.right - bi.left,
      m = r - bi.top - bi.bottom,
      g = No().domain([l, s]).range([m, 0]),
      h = Yi().domain(To).range([0, f]),
      p = i.map((M, R) =>
        v.jsx(
          O3,
          {
            x: h(ft(M.DATE_OBSERVATION)) ?? 0,
            y: g(M.MESURE) - qy / 2,
            width: h.bandwidth(),
            height: qy,
          },
          R
        )
      ),
      y = i.map((M, R) =>
        v.jsx(
          "line",
          {
            x1: h(ft(M.DATE_OBSERVATION)) ?? 0,
            x2: (h(ft(M.DATE_OBSERVATION)) ?? 0) + h.bandwidth(),
            y1: g(M.NORMALE),
            y2: g(M.NORMALE),
            fill: "none",
            stroke: "#A1A1A1",
            strokeWidth: 1,
            strokeDasharray: "2, 2",
          },
          R
        )
      ),
      b = i.map((M, R) =>
        v.jsx(
          "line",
          {
            x1: h(ft(M.DATE_OBSERVATION)),
            x2: h(ft(M.DATE_OBSERVATION)) ?? 0 + h.bandwidth(),
            y1: g(M.NORMALE),
            y2: g(M.NORMALE),
            width: h.bandwidth(),
            stroke: "black",
          },
          R
        )
      );
    if (!p) return null;
    const S = v.jsx("defs", {
        children: v.jsx("pattern", {
          id: "bgPattern",
          patternUnits: "userSpaceOnUse",
          width: h.bandwidth(),
          height: m,
          children: v.jsx("image", {
            href: "gradient.svg",
            x: "0",
            y: "0",
            width: h.bandwidth(),
            height: m,
          }),
        }),
      }),
      A = i.map((M) =>
        v.jsxs(v.Fragment, {
          children: [
            S,
            v.jsx("rect", {
              x: h(ft(M.DATE_OBSERVATION)) ?? 0,
              y: 0,
              width: h.bandwidth(),
              height: m,
              fill: "url(#bgPattern)",
            }),
          ],
        })
      ),
      w = v.jsxs(v.Fragment, {
        children: [
          v.jsxs("g", {
            children: [
              v.jsx("line", {
                x1: -40,
                x2: 0,
                y1: 0.5,
                y2: 0.5,
                stroke: "#212121",
                opacity: 0.5,
              }),
              v.jsx("text", {
                x: -40,
                y: 13,
                textAnchor: "start",
                alignmentBaseline: "central",
                fontSize: 15,
                fill: "black",
                children: "humide",
              }),
            ],
          }),
          v.jsxs("g", {
            children: [
              v.jsx("line", {
                x1: -40,
                x2: 0,
                y1: m + 0.5,
                y2: m + 0.5,
                stroke: "#212121",
                opacity: 0.5,
              }),
              v.jsx("text", {
                x: -40,
                y: m - 10,
                textAnchor: "start",
                alignmentBaseline: "central",
                fontSize: 15,
                fill: "black",
                children: "sec",
              }),
            ],
          }),
        ],
      }),
      T = h
        .domain()
        .slice(0, -1)
        .map((M, R) => {
          const O = h(M) + h.bandwidth();
          return v.jsx(
            "line",
            {
              x1: O,
              x2: O,
              y1: 0,
              y2: m,
              stroke: "#212121",
              strokeOpacity: 0.25,
              strokeWidth: 0.5,
              shapeRendering: "crispEdges",
            },
            R
          );
        });
    return v.jsxs("div", {
      className: "relative",
      children: [
        v.jsx("div", {
          className: "absolute inset-0 translate-y-6",
          children: v.jsx("span", {
            className: "bricolageFont",
            style: { fontSize: 19, fontWeight: 800 },
            children: c,
          }),
        }),
        v.jsx("svg", {
          width: e,
          height: r,
          children: v.jsxs("g", {
            width: f,
            height: m,
            transform: `translate(${[bi.left, bi.top].join(",")})`,
            children: [
              A,
              v.jsx(Yu, { xScale: h, y: m + 20 }),
              T,
              p,
              b,
              y,
              w,
              v.jsx("line", {
                x1: 0,
                x2: f,
                y1: m + 0.5,
                y2: m + 0.5,
                stroke: "#212121",
                strokeWidth: 0.5,
              }),
            ],
          }),
        }),
      ],
    });
  },
  ym = ({ yearType: e }) =>
    v.jsx("span", {
      className:
        "flex items-center h-7 px-4 py-2 rounded-2xl border border-black text-sm",
      children: "Année " + e.toLowerCase(),
    });
function Yy(e, [r, i]) {
  return Math.min(i, Math.max(r, e));
}
function Xe(e, r, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), i === !1 || !s.defaultPrevented))
      return r == null ? void 0 : r(s);
  };
}
function nc(e, r = []) {
  let i = [];
  function l(c, f) {
    const m = _.createContext(f),
      g = i.length;
    i = [...i, f];
    const h = (y) => {
      var M;
      const { scope: b, children: S, ...A } = y,
        w = ((M = b == null ? void 0 : b[e]) == null ? void 0 : M[g]) || m,
        T = _.useMemo(() => A, Object.values(A));
      return v.jsx(w.Provider, { value: T, children: S });
    };
    h.displayName = c + "Provider";
    function p(y, b) {
      var w;
      const S = ((w = b == null ? void 0 : b[e]) == null ? void 0 : w[g]) || m,
        A = _.useContext(S);
      if (A) return A;
      if (f !== void 0) return f;
      throw new Error(`\`${y}\` must be used within \`${c}\``);
    }
    return [h, p];
  }
  const s = () => {
    const c = i.map((f) => _.createContext(f));
    return function (m) {
      const g = (m == null ? void 0 : m[e]) || c;
      return _.useMemo(() => ({ [`__scope${e}`]: { ...m, [e]: g } }), [m, g]);
    };
  };
  return (s.scopeName = e), [l, j3(s, ...r)];
}
function j3(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const i = () => {
    const l = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (c) {
      const f = l.reduce((m, { useScope: g, scopeName: h }) => {
        const y = g(c)[`__scope${h}`];
        return { ...m, ...y };
      }, {});
      return _.useMemo(() => ({ [`__scope${r.scopeName}`]: f }), [f]);
    };
  };
  return (i.scopeName = r.scopeName), i;
}
function Gy(e, r) {
  if (typeof e == "function") return e(r);
  e != null && (e.current = r);
}
function lb(...e) {
  return (r) => {
    let i = !1;
    const l = e.map((s) => {
      const c = Gy(s, r);
      return !i && typeof c == "function" && (i = !0), c;
    });
    if (i)
      return () => {
        for (let s = 0; s < l.length; s++) {
          const c = l[s];
          typeof c == "function" ? c() : Gy(e[s], null);
        }
      };
  };
}
function nt(...e) {
  return _.useCallback(lb(...e), e);
}
var Na = _.forwardRef((e, r) => {
  const { children: i, ...l } = e,
    s = _.Children.toArray(i),
    c = s.find(U3);
  if (c) {
    const f = c.props.children,
      m = s.map((g) =>
        g === c
          ? _.Children.count(f) > 1
            ? _.Children.only(null)
            : _.isValidElement(f)
            ? f.props.children
            : null
          : g
      );
    return v.jsx(_h, {
      ...l,
      ref: r,
      children: _.isValidElement(f) ? _.cloneElement(f, void 0, m) : null,
    });
  }
  return v.jsx(_h, { ...l, ref: r, children: i });
});
Na.displayName = "Slot";
var _h = _.forwardRef((e, r) => {
  const { children: i, ...l } = e;
  if (_.isValidElement(i)) {
    const s = H3(i),
      c = L3(l, i.props);
    return (
      i.type !== _.Fragment && (c.ref = r ? lb(r, s) : s), _.cloneElement(i, c)
    );
  }
  return _.Children.count(i) > 1 ? _.Children.only(null) : null;
});
_h.displayName = "SlotClone";
var z3 = ({ children: e }) => v.jsx(v.Fragment, { children: e });
function U3(e) {
  return _.isValidElement(e) && e.type === z3;
}
function L3(e, r) {
  const i = { ...r };
  for (const l in r) {
    const s = e[l],
      c = r[l];
    /^on[A-Z]/.test(l)
      ? s && c
        ? (i[l] = (...m) => {
            c(...m), s(...m);
          })
        : s && (i[l] = s)
      : l === "style"
      ? (i[l] = { ...s, ...c })
      : l === "className" && (i[l] = [s, c].filter(Boolean).join(" "));
  }
  return { ...e, ...i };
}
function H3(e) {
  var l, s;
  let r =
      (l = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : l.get,
    i = r && "isReactWarning" in r && r.isReactWarning;
  return i
    ? e.ref
    : ((r =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (i = r && "isReactWarning" in r && r.isReactWarning),
      i ? e.props.ref : e.props.ref || e.ref);
}
function k3(e) {
  const r = e + "CollectionProvider",
    [i, l] = nc(r),
    [s, c] = i(r, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (S) => {
      const { scope: A, children: w } = S,
        T = kr.useRef(null),
        M = kr.useRef(new Map()).current;
      return v.jsx(s, { scope: A, itemMap: M, collectionRef: T, children: w });
    };
  f.displayName = r;
  const m = e + "CollectionSlot",
    g = kr.forwardRef((S, A) => {
      const { scope: w, children: T } = S,
        M = c(m, w),
        R = nt(A, M.collectionRef);
      return v.jsx(Na, { ref: R, children: T });
    });
  g.displayName = m;
  const h = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    y = kr.forwardRef((S, A) => {
      const { scope: w, children: T, ...M } = S,
        R = kr.useRef(null),
        O = nt(A, R),
        L = c(h, w);
      return (
        kr.useEffect(
          () => (
            L.itemMap.set(R, { ref: R, ...M }), () => void L.itemMap.delete(R)
          )
        ),
        v.jsx(Na, { [p]: "", ref: O, children: T })
      );
    });
  y.displayName = h;
  function b(S) {
    const A = c(e + "CollectionConsumer", S);
    return kr.useCallback(() => {
      const T = A.collectionRef.current;
      if (!T) return [];
      const M = Array.from(T.querySelectorAll(`[${p}]`));
      return Array.from(A.itemMap.values()).sort(
        (L, D) => M.indexOf(L.ref.current) - M.indexOf(D.ref.current)
      );
    }, [A.collectionRef, A.itemMap]);
  }
  return [{ Provider: f, Slot: g, ItemSlot: y }, b, l];
}
var B3 = _.createContext(void 0);
function V3(e) {
  const r = _.useContext(B3);
  return e || r || "ltr";
}
var q3 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  We = q3.reduce((e, r) => {
    const i = _.forwardRef((l, s) => {
      const { asChild: c, ...f } = l,
        m = c ? Na : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(m, { ...f, ref: s })
      );
    });
    return (i.displayName = `Primitive.${r}`), { ...e, [r]: i };
  }, {});
function Y3(e, r) {
  e && Fi.flushSync(() => e.dispatchEvent(r));
}
function or(e) {
  const r = _.useRef(e);
  return (
    _.useEffect(() => {
      r.current = e;
    }),
    _.useMemo(
      () =>
        (...i) => {
          var l;
          return (l = r.current) == null ? void 0 : l.call(r, ...i);
        },
      []
    )
  );
}
function G3(e, r = globalThis == null ? void 0 : globalThis.document) {
  const i = or(e);
  _.useEffect(() => {
    const l = (s) => {
      s.key === "Escape" && i(s);
    };
    return (
      r.addEventListener("keydown", l, { capture: !0 }),
      () => r.removeEventListener("keydown", l, { capture: !0 })
    );
  }, [i, r]);
}
var X3 = "DismissableLayer",
  Ah = "dismissableLayer.update",
  F3 = "dismissableLayer.pointerDownOutside",
  P3 = "dismissableLayer.focusOutside",
  Xy,
  ob = _.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  xm = _.forwardRef((e, r) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: s,
        onFocusOutside: c,
        onInteractOutside: f,
        onDismiss: m,
        ...g
      } = e,
      h = _.useContext(ob),
      [p, y] = _.useState(null),
      b =
        (p == null ? void 0 : p.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, S] = _.useState({}),
      A = nt(r, (Y) => y(Y)),
      w = Array.from(h.layers),
      [T] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      M = w.indexOf(T),
      R = p ? w.indexOf(p) : -1,
      O = h.layersWithOutsidePointerEventsDisabled.size > 0,
      L = R >= M,
      D = Z3((Y) => {
        const te = Y.target,
          Z = [...h.branches].some((ne) => ne.contains(te));
        !L ||
          Z ||
          (s == null || s(Y),
          f == null || f(Y),
          Y.defaultPrevented || m == null || m());
      }, b),
      z = K3((Y) => {
        const te = Y.target;
        [...h.branches].some((ne) => ne.contains(te)) ||
          (c == null || c(Y),
          f == null || f(Y),
          Y.defaultPrevented || m == null || m());
      }, b);
    return (
      G3((Y) => {
        R === h.layers.size - 1 &&
          (l == null || l(Y),
          !Y.defaultPrevented && m && (Y.preventDefault(), m()));
      }, b),
      _.useEffect(() => {
        if (p)
          return (
            i &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Xy = b.body.style.pointerEvents),
                (b.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(p)),
            h.layers.add(p),
            Fy(),
            () => {
              i &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (b.body.style.pointerEvents = Xy);
            }
          );
      }, [p, b, i, h]),
      _.useEffect(
        () => () => {
          p &&
            (h.layers.delete(p),
            h.layersWithOutsidePointerEventsDisabled.delete(p),
            Fy());
        },
        [p, h]
      ),
      _.useEffect(() => {
        const Y = () => S({});
        return (
          document.addEventListener(Ah, Y),
          () => document.removeEventListener(Ah, Y)
        );
      }, []),
      v.jsx(We.div, {
        ...g,
        ref: A,
        style: {
          pointerEvents: O ? (L ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Xe(e.onFocusCapture, z.onFocusCapture),
        onBlurCapture: Xe(e.onBlurCapture, z.onBlurCapture),
        onPointerDownCapture: Xe(
          e.onPointerDownCapture,
          D.onPointerDownCapture
        ),
      })
    );
  });
xm.displayName = X3;
var Q3 = "DismissableLayerBranch",
  $3 = _.forwardRef((e, r) => {
    const i = _.useContext(ob),
      l = _.useRef(null),
      s = nt(r, l);
    return (
      _.useEffect(() => {
        const c = l.current;
        if (c)
          return (
            i.branches.add(c),
            () => {
              i.branches.delete(c);
            }
          );
      }, [i.branches]),
      v.jsx(We.div, { ...e, ref: s })
    );
  });
$3.displayName = Q3;
function Z3(e, r = globalThis == null ? void 0 : globalThis.document) {
  const i = or(e),
    l = _.useRef(!1),
    s = _.useRef(() => {});
  return (
    _.useEffect(() => {
      const c = (m) => {
          if (m.target && !l.current) {
            let g = function () {
              sb(F3, i, h, { discrete: !0 });
            };
            const h = { originalEvent: m };
            m.pointerType === "touch"
              ? (r.removeEventListener("click", s.current),
                (s.current = g),
                r.addEventListener("click", s.current, { once: !0 }))
              : g();
          } else r.removeEventListener("click", s.current);
          l.current = !1;
        },
        f = window.setTimeout(() => {
          r.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        window.clearTimeout(f),
          r.removeEventListener("pointerdown", c),
          r.removeEventListener("click", s.current);
      };
    }, [r, i]),
    { onPointerDownCapture: () => (l.current = !0) }
  );
}
function K3(e, r = globalThis == null ? void 0 : globalThis.document) {
  const i = or(e),
    l = _.useRef(!1);
  return (
    _.useEffect(() => {
      const s = (c) => {
        c.target &&
          !l.current &&
          sb(P3, i, { originalEvent: c }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", s),
        () => r.removeEventListener("focusin", s)
      );
    }, [r, i]),
    {
      onFocusCapture: () => (l.current = !0),
      onBlurCapture: () => (l.current = !1),
    }
  );
}
function Fy() {
  const e = new CustomEvent(Ah);
  document.dispatchEvent(e);
}
function sb(e, r, i, { discrete: l }) {
  const s = i.originalEvent.target,
    c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: i });
  r && s.addEventListener(e, r, { once: !0 }),
    l ? Y3(s, c) : s.dispatchEvent(c);
}
var Xd = 0;
function ub() {
  _.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Py()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Py()),
      Xd++,
      () => {
        Xd === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          Xd--;
      }
    );
  }, []);
}
function Py() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Fd = "focusScope.autoFocusOnMount",
  Pd = "focusScope.autoFocusOnUnmount",
  Qy = { bubbles: !1, cancelable: !0 },
  W3 = "FocusScope",
  bm = _.forwardRef((e, r) => {
    const {
        loop: i = !1,
        trapped: l = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: c,
        ...f
      } = e,
      [m, g] = _.useState(null),
      h = or(s),
      p = or(c),
      y = _.useRef(null),
      b = nt(r, (w) => g(w)),
      S = _.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    _.useEffect(() => {
      if (l) {
        let w = function (O) {
            if (S.paused || !m) return;
            const L = O.target;
            m.contains(L) ? (y.current = L) : Br(y.current, { select: !0 });
          },
          T = function (O) {
            if (S.paused || !m) return;
            const L = O.relatedTarget;
            L !== null && (m.contains(L) || Br(y.current, { select: !0 }));
          },
          M = function (O) {
            if (document.activeElement === document.body)
              for (const D of O) D.removedNodes.length > 0 && Br(m);
          };
        document.addEventListener("focusin", w),
          document.addEventListener("focusout", T);
        const R = new MutationObserver(M);
        return (
          m && R.observe(m, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", w),
              document.removeEventListener("focusout", T),
              R.disconnect();
          }
        );
      }
    }, [l, m, S.paused]),
      _.useEffect(() => {
        if (m) {
          Zy.add(S);
          const w = document.activeElement;
          if (!m.contains(w)) {
            const M = new CustomEvent(Fd, Qy);
            m.addEventListener(Fd, h),
              m.dispatchEvent(M),
              M.defaultPrevented ||
                (I3(rO(cb(m)), { select: !0 }),
                document.activeElement === w && Br(m));
          }
          return () => {
            m.removeEventListener(Fd, h),
              setTimeout(() => {
                const M = new CustomEvent(Pd, Qy);
                m.addEventListener(Pd, p),
                  m.dispatchEvent(M),
                  M.defaultPrevented || Br(w ?? document.body, { select: !0 }),
                  m.removeEventListener(Pd, p),
                  Zy.remove(S);
              }, 0);
          };
        }
      }, [m, h, p, S]);
    const A = _.useCallback(
      (w) => {
        if ((!i && !l) || S.paused) return;
        const T = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey,
          M = document.activeElement;
        if (T && M) {
          const R = w.currentTarget,
            [O, L] = J3(R);
          O && L
            ? !w.shiftKey && M === L
              ? (w.preventDefault(), i && Br(O, { select: !0 }))
              : w.shiftKey &&
                M === O &&
                (w.preventDefault(), i && Br(L, { select: !0 }))
            : M === R && w.preventDefault();
        }
      },
      [i, l, S.paused]
    );
    return v.jsx(We.div, { tabIndex: -1, ...f, ref: b, onKeyDown: A });
  });
bm.displayName = W3;
function I3(e, { select: r = !1 } = {}) {
  const i = document.activeElement;
  for (const l of e)
    if ((Br(l, { select: r }), document.activeElement !== i)) return;
}
function J3(e) {
  const r = cb(e),
    i = $y(r, e),
    l = $y(r.reverse(), e);
  return [i, l];
}
function cb(e) {
  const r = [],
    i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (l) => {
        const s = l.tagName === "INPUT" && l.type === "hidden";
        return l.disabled || l.hidden || s
          ? NodeFilter.FILTER_SKIP
          : l.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; i.nextNode(); ) r.push(i.currentNode);
  return r;
}
function $y(e, r) {
  for (const i of e) if (!eO(i, { upTo: r })) return i;
}
function eO(e, { upTo: r }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (r !== void 0 && e === r) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function tO(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Br(e, { select: r = !1 } = {}) {
  if (e && e.focus) {
    const i = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== i && tO(e) && r && e.select();
  }
}
var Zy = nO();
function nO() {
  let e = [];
  return {
    add(r) {
      const i = e[0];
      r !== i && (i == null || i.pause()), (e = Ky(e, r)), e.unshift(r);
    },
    remove(r) {
      var i;
      (e = Ky(e, r)), (i = e[0]) == null || i.resume();
    },
  };
}
function Ky(e, r) {
  const i = [...e],
    l = i.indexOf(r);
  return l !== -1 && i.splice(l, 1), i;
}
function rO(e) {
  return e.filter((r) => r.tagName !== "A");
}
var Et =
    globalThis != null && globalThis.document ? _.useLayoutEffect : () => {},
  aO = I2.useId || (() => {}),
  iO = 0;
function rc(e) {
  const [r, i] = _.useState(aO());
  return (
    Et(() => {
      i((l) => l ?? String(iO++));
    }, [e]),
    e || (r ? `radix-${r}` : "")
  );
}
const lO = ["top", "right", "bottom", "left"],
  Gr = Math.min,
  Ht = Math.max,
  Hu = Math.round,
  nu = Math.floor,
  Mn = (e) => ({ x: e, y: e }),
  oO = { left: "right", right: "left", bottom: "top", top: "bottom" },
  sO = { start: "end", end: "start" };
function Th(e, r, i) {
  return Ht(e, Gr(r, i));
}
function sr(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function ur(e) {
  return e.split("-")[0];
}
function Qi(e) {
  return e.split("-")[1];
}
function Sm(e) {
  return e === "x" ? "y" : "x";
}
function wm(e) {
  return e === "y" ? "height" : "width";
}
function Xr(e) {
  return ["top", "bottom"].includes(ur(e)) ? "y" : "x";
}
function Em(e) {
  return Sm(Xr(e));
}
function uO(e, r, i) {
  i === void 0 && (i = !1);
  const l = Qi(e),
    s = Em(e),
    c = wm(s);
  let f =
    s === "x"
      ? l === (i ? "end" : "start")
        ? "right"
        : "left"
      : l === "start"
      ? "bottom"
      : "top";
  return r.reference[c] > r.floating[c] && (f = ku(f)), [f, ku(f)];
}
function cO(e) {
  const r = ku(e);
  return [Mh(e), r, Mh(r)];
}
function Mh(e) {
  return e.replace(/start|end/g, (r) => sO[r]);
}
function fO(e, r, i) {
  const l = ["left", "right"],
    s = ["right", "left"],
    c = ["top", "bottom"],
    f = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return i ? (r ? s : l) : r ? l : s;
    case "left":
    case "right":
      return r ? c : f;
    default:
      return [];
  }
}
function dO(e, r, i, l) {
  const s = Qi(e);
  let c = fO(ur(e), i === "start", l);
  return (
    s && ((c = c.map((f) => f + "-" + s)), r && (c = c.concat(c.map(Mh)))), c
  );
}
function ku(e) {
  return e.replace(/left|right|bottom|top/g, (r) => oO[r]);
}
function hO(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function fb(e) {
  return typeof e != "number"
    ? hO(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Bu(e) {
  const { x: r, y: i, width: l, height: s } = e;
  return {
    width: l,
    height: s,
    top: i,
    left: r,
    right: r + l,
    bottom: i + s,
    x: r,
    y: i,
  };
}
function Wy(e, r, i) {
  let { reference: l, floating: s } = e;
  const c = Xr(r),
    f = Em(r),
    m = wm(f),
    g = ur(r),
    h = c === "y",
    p = l.x + l.width / 2 - s.width / 2,
    y = l.y + l.height / 2 - s.height / 2,
    b = l[m] / 2 - s[m] / 2;
  let S;
  switch (g) {
    case "top":
      S = { x: p, y: l.y - s.height };
      break;
    case "bottom":
      S = { x: p, y: l.y + l.height };
      break;
    case "right":
      S = { x: l.x + l.width, y };
      break;
    case "left":
      S = { x: l.x - s.width, y };
      break;
    default:
      S = { x: l.x, y: l.y };
  }
  switch (Qi(r)) {
    case "start":
      S[f] -= b * (i && h ? -1 : 1);
      break;
    case "end":
      S[f] += b * (i && h ? -1 : 1);
      break;
  }
  return S;
}
const mO = async (e, r, i) => {
  const {
      placement: l = "bottom",
      strategy: s = "absolute",
      middleware: c = [],
      platform: f,
    } = i,
    m = c.filter(Boolean),
    g = await (f.isRTL == null ? void 0 : f.isRTL(r));
  let h = await f.getElementRects({ reference: e, floating: r, strategy: s }),
    { x: p, y } = Wy(h, l, g),
    b = l,
    S = {},
    A = 0;
  for (let w = 0; w < m.length; w++) {
    const { name: T, fn: M } = m[w],
      {
        x: R,
        y: O,
        data: L,
        reset: D,
      } = await M({
        x: p,
        y,
        initialPlacement: l,
        placement: b,
        strategy: s,
        middlewareData: S,
        rects: h,
        platform: f,
        elements: { reference: e, floating: r },
      });
    (p = R ?? p),
      (y = O ?? y),
      (S = { ...S, [T]: { ...S[T], ...L } }),
      D &&
        A <= 50 &&
        (A++,
        typeof D == "object" &&
          (D.placement && (b = D.placement),
          D.rects &&
            (h =
              D.rects === !0
                ? await f.getElementRects({
                    reference: e,
                    floating: r,
                    strategy: s,
                  })
                : D.rects),
          ({ x: p, y } = Wy(h, b, g))),
        (w = -1));
  }
  return { x: p, y, placement: b, strategy: s, middlewareData: S };
};
async function _o(e, r) {
  var i;
  r === void 0 && (r = {});
  const { x: l, y: s, platform: c, rects: f, elements: m, strategy: g } = e,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: y = "floating",
      altBoundary: b = !1,
      padding: S = 0,
    } = sr(r, e),
    A = fb(S),
    T = m[b ? (y === "floating" ? "reference" : "floating") : y],
    M = Bu(
      await c.getClippingRect({
        element:
          (i = await (c.isElement == null ? void 0 : c.isElement(T))) == null ||
          i
            ? T
            : T.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(m.floating))),
        boundary: h,
        rootBoundary: p,
        strategy: g,
      })
    ),
    R =
      y === "floating"
        ? { x: l, y: s, width: f.floating.width, height: f.floating.height }
        : f.reference,
    O = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(m.floating)),
    L = (await (c.isElement == null ? void 0 : c.isElement(O)))
      ? (await (c.getScale == null ? void 0 : c.getScale(O))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    D = Bu(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: m,
            rect: R,
            offsetParent: O,
            strategy: g,
          })
        : R
    );
  return {
    top: (M.top - D.top + A.top) / L.y,
    bottom: (D.bottom - M.bottom + A.bottom) / L.y,
    left: (M.left - D.left + A.left) / L.x,
    right: (D.right - M.right + A.right) / L.x,
  };
}
const gO = (e) => ({
    name: "arrow",
    options: e,
    async fn(r) {
      const {
          x: i,
          y: l,
          placement: s,
          rects: c,
          platform: f,
          elements: m,
          middlewareData: g,
        } = r,
        { element: h, padding: p = 0 } = sr(e, r) || {};
      if (h == null) return {};
      const y = fb(p),
        b = { x: i, y: l },
        S = Em(s),
        A = wm(S),
        w = await f.getDimensions(h),
        T = S === "y",
        M = T ? "top" : "left",
        R = T ? "bottom" : "right",
        O = T ? "clientHeight" : "clientWidth",
        L = c.reference[A] + c.reference[S] - b[S] - c.floating[A],
        D = b[S] - c.reference[S],
        z = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(h));
      let Y = z ? z[O] : 0;
      (!Y || !(await (f.isElement == null ? void 0 : f.isElement(z)))) &&
        (Y = m.floating[O] || c.floating[A]);
      const te = L / 2 - D / 2,
        Z = Y / 2 - w[A] / 2 - 1,
        ne = Gr(y[M], Z),
        G = Gr(y[R], Z),
        ae = ne,
        q = Y - w[A] - G,
        W = Y / 2 - w[A] / 2 + te,
        fe = Th(ae, W, q),
        B =
          !g.arrow &&
          Qi(s) != null &&
          W !== fe &&
          c.reference[A] / 2 - (W < ae ? ne : G) - w[A] / 2 < 0,
        ee = B ? (W < ae ? W - ae : W - q) : 0;
      return {
        [S]: b[S] + ee,
        data: {
          [S]: fe,
          centerOffset: W - fe - ee,
          ...(B && { alignmentOffset: ee }),
        },
        reset: B,
      };
    },
  }),
  pO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(r) {
          var i, l;
          const {
              placement: s,
              middlewareData: c,
              rects: f,
              initialPlacement: m,
              platform: g,
              elements: h,
            } = r,
            {
              mainAxis: p = !0,
              crossAxis: y = !0,
              fallbackPlacements: b,
              fallbackStrategy: S = "bestFit",
              fallbackAxisSideDirection: A = "none",
              flipAlignment: w = !0,
              ...T
            } = sr(e, r);
          if ((i = c.arrow) != null && i.alignmentOffset) return {};
          const M = ur(s),
            R = Xr(m),
            O = ur(m) === m,
            L = await (g.isRTL == null ? void 0 : g.isRTL(h.floating)),
            D = b || (O || !w ? [ku(m)] : cO(m)),
            z = A !== "none";
          !b && z && D.push(...dO(m, w, A, L));
          const Y = [m, ...D],
            te = await _o(r, T),
            Z = [];
          let ne = ((l = c.flip) == null ? void 0 : l.overflows) || [];
          if ((p && Z.push(te[M]), y)) {
            const W = uO(s, f, L);
            Z.push(te[W[0]], te[W[1]]);
          }
          if (
            ((ne = [...ne, { placement: s, overflows: Z }]),
            !Z.every((W) => W <= 0))
          ) {
            var G, ae;
            const W = (((G = c.flip) == null ? void 0 : G.index) || 0) + 1,
              fe = Y[W];
            if (fe)
              return {
                data: { index: W, overflows: ne },
                reset: { placement: fe },
              };
            let B =
              (ae = ne
                .filter((ee) => ee.overflows[0] <= 0)
                .sort((ee, X) => ee.overflows[1] - X.overflows[1])[0]) == null
                ? void 0
                : ae.placement;
            if (!B)
              switch (S) {
                case "bestFit": {
                  var q;
                  const ee =
                    (q = ne
                      .filter((X) => {
                        if (z) {
                          const ie = Xr(X.placement);
                          return ie === R || ie === "y";
                        }
                        return !0;
                      })
                      .map((X) => [
                        X.placement,
                        X.overflows
                          .filter((ie) => ie > 0)
                          .reduce((ie, N) => ie + N, 0),
                      ])
                      .sort((X, ie) => X[1] - ie[1])[0]) == null
                      ? void 0
                      : q[0];
                  ee && (B = ee);
                  break;
                }
                case "initialPlacement":
                  B = m;
                  break;
              }
            if (s !== B) return { reset: { placement: B } };
          }
          return {};
        },
      }
    );
  };
function Iy(e, r) {
  return {
    top: e.top - r.height,
    right: e.right - r.width,
    bottom: e.bottom - r.height,
    left: e.left - r.width,
  };
}
function Jy(e) {
  return lO.some((r) => e[r] >= 0);
}
const vO = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(r) {
        const { rects: i } = r,
          { strategy: l = "referenceHidden", ...s } = sr(e, r);
        switch (l) {
          case "referenceHidden": {
            const c = await _o(r, { ...s, elementContext: "reference" }),
              f = Iy(c, i.reference);
            return {
              data: { referenceHiddenOffsets: f, referenceHidden: Jy(f) },
            };
          }
          case "escaped": {
            const c = await _o(r, { ...s, altBoundary: !0 }),
              f = Iy(c, i.floating);
            return { data: { escapedOffsets: f, escaped: Jy(f) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function yO(e, r) {
  const { placement: i, platform: l, elements: s } = e,
    c = await (l.isRTL == null ? void 0 : l.isRTL(s.floating)),
    f = ur(i),
    m = Qi(i),
    g = Xr(i) === "y",
    h = ["left", "top"].includes(f) ? -1 : 1,
    p = c && g ? -1 : 1,
    y = sr(r, e);
  let {
    mainAxis: b,
    crossAxis: S,
    alignmentAxis: A,
  } = typeof y == "number"
    ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis,
      };
  return (
    m && typeof A == "number" && (S = m === "end" ? A * -1 : A),
    g ? { x: S * p, y: b * h } : { x: b * h, y: S * p }
  );
}
const xO = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(r) {
          var i, l;
          const { x: s, y: c, placement: f, middlewareData: m } = r,
            g = await yO(r, e);
          return f === ((i = m.offset) == null ? void 0 : i.placement) &&
            (l = m.arrow) != null &&
            l.alignmentOffset
            ? {}
            : { x: s + g.x, y: c + g.y, data: { ...g, placement: f } };
        },
      }
    );
  },
  bO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(r) {
          const { x: i, y: l, placement: s } = r,
            {
              mainAxis: c = !0,
              crossAxis: f = !1,
              limiter: m = {
                fn: (T) => {
                  let { x: M, y: R } = T;
                  return { x: M, y: R };
                },
              },
              ...g
            } = sr(e, r),
            h = { x: i, y: l },
            p = await _o(r, g),
            y = Xr(ur(s)),
            b = Sm(y);
          let S = h[b],
            A = h[y];
          if (c) {
            const T = b === "y" ? "top" : "left",
              M = b === "y" ? "bottom" : "right",
              R = S + p[T],
              O = S - p[M];
            S = Th(R, S, O);
          }
          if (f) {
            const T = y === "y" ? "top" : "left",
              M = y === "y" ? "bottom" : "right",
              R = A + p[T],
              O = A - p[M];
            A = Th(R, A, O);
          }
          const w = m.fn({ ...r, [b]: S, [y]: A });
          return {
            ...w,
            data: { x: w.x - i, y: w.y - l, enabled: { [b]: c, [y]: f } },
          };
        },
      }
    );
  },
  SO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(r) {
          const { x: i, y: l, placement: s, rects: c, middlewareData: f } = r,
            { offset: m = 0, mainAxis: g = !0, crossAxis: h = !0 } = sr(e, r),
            p = { x: i, y: l },
            y = Xr(s),
            b = Sm(y);
          let S = p[b],
            A = p[y];
          const w = sr(m, r),
            T =
              typeof w == "number"
                ? { mainAxis: w, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...w };
          if (g) {
            const O = b === "y" ? "height" : "width",
              L = c.reference[b] - c.floating[O] + T.mainAxis,
              D = c.reference[b] + c.reference[O] - T.mainAxis;
            S < L ? (S = L) : S > D && (S = D);
          }
          if (h) {
            var M, R;
            const O = b === "y" ? "width" : "height",
              L = ["top", "left"].includes(ur(s)),
              D =
                c.reference[y] -
                c.floating[O] +
                ((L && ((M = f.offset) == null ? void 0 : M[y])) || 0) +
                (L ? 0 : T.crossAxis),
              z =
                c.reference[y] +
                c.reference[O] +
                (L ? 0 : ((R = f.offset) == null ? void 0 : R[y]) || 0) -
                (L ? T.crossAxis : 0);
            A < D ? (A = D) : A > z && (A = z);
          }
          return { [b]: S, [y]: A };
        },
      }
    );
  },
  wO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(r) {
          var i, l;
          const { placement: s, rects: c, platform: f, elements: m } = r,
            { apply: g = () => {}, ...h } = sr(e, r),
            p = await _o(r, h),
            y = ur(s),
            b = Qi(s),
            S = Xr(s) === "y",
            { width: A, height: w } = c.floating;
          let T, M;
          y === "top" || y === "bottom"
            ? ((T = y),
              (M =
                b ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(m.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((M = y), (T = b === "end" ? "top" : "bottom"));
          const R = w - p.top - p.bottom,
            O = A - p.left - p.right,
            L = Gr(w - p[T], R),
            D = Gr(A - p[M], O),
            z = !r.middlewareData.shift;
          let Y = L,
            te = D;
          if (
            ((i = r.middlewareData.shift) != null && i.enabled.x && (te = O),
            (l = r.middlewareData.shift) != null && l.enabled.y && (Y = R),
            z && !b)
          ) {
            const ne = Ht(p.left, 0),
              G = Ht(p.right, 0),
              ae = Ht(p.top, 0),
              q = Ht(p.bottom, 0);
            S
              ? (te =
                  A - 2 * (ne !== 0 || G !== 0 ? ne + G : Ht(p.left, p.right)))
              : (Y =
                  w - 2 * (ae !== 0 || q !== 0 ? ae + q : Ht(p.top, p.bottom)));
          }
          await g({ ...r, availableWidth: te, availableHeight: Y });
          const Z = await f.getDimensions(m.floating);
          return A !== Z.width || w !== Z.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ac() {
  return typeof window < "u";
}
function $i(e) {
  return db(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var r;
  return (
    (e == null || (r = e.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function jn(e) {
  var r;
  return (r = (db(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function db(e) {
  return ac() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function hn(e) {
  return ac() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function Nn(e) {
  return ac() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function e1(e) {
  return !ac() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
function Uo(e) {
  const { overflow: r, overflowX: i, overflowY: l, display: s } = mn(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(r + l + i) &&
    !["inline", "contents"].includes(s)
  );
}
function EO(e) {
  return ["table", "td", "th"].includes($i(e));
}
function ic(e) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return e.matches(r);
    } catch {
      return !1;
    }
  });
}
function _m(e) {
  const r = Am(),
    i = hn(e) ? mn(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((l) =>
      i[l] ? i[l] !== "none" : !1
    ) ||
    (i.containerType ? i.containerType !== "normal" : !1) ||
    (!r && (i.backdropFilter ? i.backdropFilter !== "none" : !1)) ||
    (!r && (i.filter ? i.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (l) => (i.willChange || "").includes(l)
    ) ||
    ["paint", "layout", "strict", "content"].some((l) =>
      (i.contain || "").includes(l)
    )
  );
}
function _O(e) {
  let r = Fr(e);
  for (; Nn(r) && !ki(r); ) {
    if (_m(r)) return r;
    if (ic(r)) return null;
    r = Fr(r);
  }
  return null;
}
function Am() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function ki(e) {
  return ["html", "body", "#document"].includes($i(e));
}
function mn(e) {
  return Bt(e).getComputedStyle(e);
}
function lc(e) {
  return hn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Fr(e) {
  if ($i(e) === "html") return e;
  const r = e.assignedSlot || e.parentNode || (e1(e) && e.host) || jn(e);
  return e1(r) ? r.host : r;
}
function hb(e) {
  const r = Fr(e);
  return ki(r)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Nn(r) && Uo(r)
    ? r
    : hb(r);
}
function Ao(e, r, i) {
  var l;
  r === void 0 && (r = []), i === void 0 && (i = !0);
  const s = hb(e),
    c = s === ((l = e.ownerDocument) == null ? void 0 : l.body),
    f = Bt(s);
  if (c) {
    const m = Ch(f);
    return r.concat(
      f,
      f.visualViewport || [],
      Uo(s) ? s : [],
      m && i ? Ao(m) : []
    );
  }
  return r.concat(s, Ao(s, [], i));
}
function Ch(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function mb(e) {
  const r = mn(e);
  let i = parseFloat(r.width) || 0,
    l = parseFloat(r.height) || 0;
  const s = Nn(e),
    c = s ? e.offsetWidth : i,
    f = s ? e.offsetHeight : l,
    m = Hu(i) !== c || Hu(l) !== f;
  return m && ((i = c), (l = f)), { width: i, height: l, $: m };
}
function Tm(e) {
  return hn(e) ? e : e.contextElement;
}
function Ni(e) {
  const r = Tm(e);
  if (!Nn(r)) return Mn(1);
  const i = r.getBoundingClientRect(),
    { width: l, height: s, $: c } = mb(r);
  let f = (c ? Hu(i.width) : i.width) / l,
    m = (c ? Hu(i.height) : i.height) / s;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!m || !Number.isFinite(m)) && (m = 1),
    { x: f, y: m }
  );
}
const AO = Mn(0);
function gb(e) {
  const r = Bt(e);
  return !Am() || !r.visualViewport
    ? AO
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function TO(e, r, i) {
  return r === void 0 && (r = !1), !i || (r && i !== Bt(e)) ? !1 : r;
}
function Oa(e, r, i, l) {
  r === void 0 && (r = !1), i === void 0 && (i = !1);
  const s = e.getBoundingClientRect(),
    c = Tm(e);
  let f = Mn(1);
  r && (l ? hn(l) && (f = Ni(l)) : (f = Ni(e)));
  const m = TO(c, i, l) ? gb(c) : Mn(0);
  let g = (s.left + m.x) / f.x,
    h = (s.top + m.y) / f.y,
    p = s.width / f.x,
    y = s.height / f.y;
  if (c) {
    const b = Bt(c),
      S = l && hn(l) ? Bt(l) : l;
    let A = b,
      w = Ch(A);
    for (; w && l && S !== A; ) {
      const T = Ni(w),
        M = w.getBoundingClientRect(),
        R = mn(w),
        O = M.left + (w.clientLeft + parseFloat(R.paddingLeft)) * T.x,
        L = M.top + (w.clientTop + parseFloat(R.paddingTop)) * T.y;
      (g *= T.x),
        (h *= T.y),
        (p *= T.x),
        (y *= T.y),
        (g += O),
        (h += L),
        (A = Bt(w)),
        (w = Ch(A));
    }
  }
  return Bu({ width: p, height: y, x: g, y: h });
}
function Mm(e, r) {
  const i = lc(e).scrollLeft;
  return r ? r.left + i : Oa(jn(e)).left + i;
}
function pb(e, r, i) {
  i === void 0 && (i = !1);
  const l = e.getBoundingClientRect(),
    s = l.left + r.scrollLeft - (i ? 0 : Mm(e, l)),
    c = l.top + r.scrollTop;
  return { x: s, y: c };
}
function MO(e) {
  let { elements: r, rect: i, offsetParent: l, strategy: s } = e;
  const c = s === "fixed",
    f = jn(l),
    m = r ? ic(r.floating) : !1;
  if (l === f || (m && c)) return i;
  let g = { scrollLeft: 0, scrollTop: 0 },
    h = Mn(1);
  const p = Mn(0),
    y = Nn(l);
  if (
    (y || (!y && !c)) &&
    (($i(l) !== "body" || Uo(f)) && (g = lc(l)), Nn(l))
  ) {
    const S = Oa(l);
    (h = Ni(l)), (p.x = S.x + l.clientLeft), (p.y = S.y + l.clientTop);
  }
  const b = f && !y && !c ? pb(f, g, !0) : Mn(0);
  return {
    width: i.width * h.x,
    height: i.height * h.y,
    x: i.x * h.x - g.scrollLeft * h.x + p.x + b.x,
    y: i.y * h.y - g.scrollTop * h.y + p.y + b.y,
  };
}
function CO(e) {
  return Array.from(e.getClientRects());
}
function RO(e) {
  const r = jn(e),
    i = lc(e),
    l = e.ownerDocument.body,
    s = Ht(r.scrollWidth, r.clientWidth, l.scrollWidth, l.clientWidth),
    c = Ht(r.scrollHeight, r.clientHeight, l.scrollHeight, l.clientHeight);
  let f = -i.scrollLeft + Mm(e);
  const m = -i.scrollTop;
  return (
    mn(l).direction === "rtl" && (f += Ht(r.clientWidth, l.clientWidth) - s),
    { width: s, height: c, x: f, y: m }
  );
}
function NO(e, r) {
  const i = Bt(e),
    l = jn(e),
    s = i.visualViewport;
  let c = l.clientWidth,
    f = l.clientHeight,
    m = 0,
    g = 0;
  if (s) {
    (c = s.width), (f = s.height);
    const h = Am();
    (!h || (h && r === "fixed")) && ((m = s.offsetLeft), (g = s.offsetTop));
  }
  return { width: c, height: f, x: m, y: g };
}
function OO(e, r) {
  const i = Oa(e, !0, r === "fixed"),
    l = i.top + e.clientTop,
    s = i.left + e.clientLeft,
    c = Nn(e) ? Ni(e) : Mn(1),
    f = e.clientWidth * c.x,
    m = e.clientHeight * c.y,
    g = s * c.x,
    h = l * c.y;
  return { width: f, height: m, x: g, y: h };
}
function t1(e, r, i) {
  let l;
  if (r === "viewport") l = NO(e, i);
  else if (r === "document") l = RO(jn(e));
  else if (hn(r)) l = OO(r, i);
  else {
    const s = gb(e);
    l = { x: r.x - s.x, y: r.y - s.y, width: r.width, height: r.height };
  }
  return Bu(l);
}
function vb(e, r) {
  const i = Fr(e);
  return i === r || !hn(i) || ki(i)
    ? !1
    : mn(i).position === "fixed" || vb(i, r);
}
function DO(e, r) {
  const i = r.get(e);
  if (i) return i;
  let l = Ao(e, [], !1).filter((m) => hn(m) && $i(m) !== "body"),
    s = null;
  const c = mn(e).position === "fixed";
  let f = c ? Fr(e) : e;
  for (; hn(f) && !ki(f); ) {
    const m = mn(f),
      g = _m(f);
    !g && m.position === "fixed" && (s = null),
      (
        c
          ? !g && !s
          : (!g &&
              m.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Uo(f) && !g && vb(e, f))
      )
        ? (l = l.filter((p) => p !== f))
        : (s = m),
      (f = Fr(f));
  }
  return r.set(e, l), l;
}
function jO(e) {
  let { element: r, boundary: i, rootBoundary: l, strategy: s } = e;
  const f = [
      ...(i === "clippingAncestors"
        ? ic(r)
          ? []
          : DO(r, this._c)
        : [].concat(i)),
      l,
    ],
    m = f[0],
    g = f.reduce((h, p) => {
      const y = t1(r, p, s);
      return (
        (h.top = Ht(y.top, h.top)),
        (h.right = Gr(y.right, h.right)),
        (h.bottom = Gr(y.bottom, h.bottom)),
        (h.left = Ht(y.left, h.left)),
        h
      );
    }, t1(r, m, s));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top,
  };
}
function zO(e) {
  const { width: r, height: i } = mb(e);
  return { width: r, height: i };
}
function UO(e, r, i) {
  const l = Nn(r),
    s = jn(r),
    c = i === "fixed",
    f = Oa(e, !0, c, r);
  let m = { scrollLeft: 0, scrollTop: 0 };
  const g = Mn(0);
  if (l || (!l && !c))
    if ((($i(r) !== "body" || Uo(s)) && (m = lc(r)), l)) {
      const b = Oa(r, !0, c, r);
      (g.x = b.x + r.clientLeft), (g.y = b.y + r.clientTop);
    } else s && (g.x = Mm(s));
  const h = s && !l && !c ? pb(s, m) : Mn(0),
    p = f.left + m.scrollLeft - g.x - h.x,
    y = f.top + m.scrollTop - g.y - h.y;
  return { x: p, y, width: f.width, height: f.height };
}
function Qd(e) {
  return mn(e).position === "static";
}
function n1(e, r) {
  if (!Nn(e) || mn(e).position === "fixed") return null;
  if (r) return r(e);
  let i = e.offsetParent;
  return jn(e) === i && (i = i.ownerDocument.body), i;
}
function yb(e, r) {
  const i = Bt(e);
  if (ic(e)) return i;
  if (!Nn(e)) {
    let s = Fr(e);
    for (; s && !ki(s); ) {
      if (hn(s) && !Qd(s)) return s;
      s = Fr(s);
    }
    return i;
  }
  let l = n1(e, r);
  for (; l && EO(l) && Qd(l); ) l = n1(l, r);
  return l && ki(l) && Qd(l) && !_m(l) ? i : l || _O(e) || i;
}
const LO = async function (e) {
  const r = this.getOffsetParent || yb,
    i = this.getDimensions,
    l = await i(e.floating);
  return {
    reference: UO(e.reference, await r(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: l.width, height: l.height },
  };
};
function HO(e) {
  return mn(e).direction === "rtl";
}
const kO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: MO,
  getDocumentElement: jn,
  getClippingRect: jO,
  getOffsetParent: yb,
  getElementRects: LO,
  getClientRects: CO,
  getDimensions: zO,
  getScale: Ni,
  isElement: hn,
  isRTL: HO,
};
function xb(e, r) {
  return (
    e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height
  );
}
function BO(e, r) {
  let i = null,
    l;
  const s = jn(e);
  function c() {
    var m;
    clearTimeout(l), (m = i) == null || m.disconnect(), (i = null);
  }
  function f(m, g) {
    m === void 0 && (m = !1), g === void 0 && (g = 1), c();
    const h = e.getBoundingClientRect(),
      { left: p, top: y, width: b, height: S } = h;
    if ((m || r(), !b || !S)) return;
    const A = nu(y),
      w = nu(s.clientWidth - (p + b)),
      T = nu(s.clientHeight - (y + S)),
      M = nu(p),
      O = {
        rootMargin: -A + "px " + -w + "px " + -T + "px " + -M + "px",
        threshold: Ht(0, Gr(1, g)) || 1,
      };
    let L = !0;
    function D(z) {
      const Y = z[0].intersectionRatio;
      if (Y !== g) {
        if (!L) return f();
        Y
          ? f(!1, Y)
          : (l = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      Y === 1 && !xb(h, e.getBoundingClientRect()) && f(), (L = !1);
    }
    try {
      i = new IntersectionObserver(D, { ...O, root: s.ownerDocument });
    } catch {
      i = new IntersectionObserver(D, O);
    }
    i.observe(e);
  }
  return f(!0), c;
}
function VO(e, r, i, l) {
  l === void 0 && (l = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: c = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: m = typeof IntersectionObserver == "function",
      animationFrame: g = !1,
    } = l,
    h = Tm(e),
    p = s || c ? [...(h ? Ao(h) : []), ...Ao(r)] : [];
  p.forEach((M) => {
    s && M.addEventListener("scroll", i, { passive: !0 }),
      c && M.addEventListener("resize", i);
  });
  const y = h && m ? BO(h, i) : null;
  let b = -1,
    S = null;
  f &&
    ((S = new ResizeObserver((M) => {
      let [R] = M;
      R &&
        R.target === h &&
        S &&
        (S.unobserve(r),
        cancelAnimationFrame(b),
        (b = requestAnimationFrame(() => {
          var O;
          (O = S) == null || O.observe(r);
        }))),
        i();
    })),
    h && !g && S.observe(h),
    S.observe(r));
  let A,
    w = g ? Oa(e) : null;
  g && T();
  function T() {
    const M = Oa(e);
    w && !xb(w, M) && i(), (w = M), (A = requestAnimationFrame(T));
  }
  return (
    i(),
    () => {
      var M;
      p.forEach((R) => {
        s && R.removeEventListener("scroll", i),
          c && R.removeEventListener("resize", i);
      }),
        y == null || y(),
        (M = S) == null || M.disconnect(),
        (S = null),
        g && cancelAnimationFrame(A);
    }
  );
}
const qO = xO,
  YO = bO,
  GO = pO,
  XO = wO,
  FO = vO,
  r1 = gO,
  PO = SO,
  QO = (e, r, i) => {
    const l = new Map(),
      s = { platform: kO, ...i },
      c = { ...s.platform, _c: l };
    return mO(e, r, { ...s, platform: c });
  };
var gu = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function Vu(e, r) {
  if (e === r) return !0;
  if (typeof e != typeof r) return !1;
  if (typeof e == "function" && e.toString() === r.toString()) return !0;
  let i, l, s;
  if (e && r && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((i = e.length), i !== r.length)) return !1;
      for (l = i; l-- !== 0; ) if (!Vu(e[l], r[l])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (i = s.length), i !== Object.keys(r).length))
      return !1;
    for (l = i; l-- !== 0; ) if (!{}.hasOwnProperty.call(r, s[l])) return !1;
    for (l = i; l-- !== 0; ) {
      const c = s[l];
      if (!(c === "_owner" && e.$$typeof) && !Vu(e[c], r[c])) return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
}
function bb(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function a1(e, r) {
  const i = bb(e);
  return Math.round(r * i) / i;
}
function $d(e) {
  const r = _.useRef(e);
  return (
    gu(() => {
      r.current = e;
    }),
    r
  );
}
function $O(e) {
  e === void 0 && (e = {});
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: l = [],
      platform: s,
      elements: { reference: c, floating: f } = {},
      transform: m = !0,
      whileElementsMounted: g,
      open: h,
    } = e,
    [p, y] = _.useState({
      x: 0,
      y: 0,
      strategy: i,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [b, S] = _.useState(l);
  Vu(b, l) || S(l);
  const [A, w] = _.useState(null),
    [T, M] = _.useState(null),
    R = _.useCallback((X) => {
      X !== z.current && ((z.current = X), w(X));
    }, []),
    O = _.useCallback((X) => {
      X !== Y.current && ((Y.current = X), M(X));
    }, []),
    L = c || A,
    D = f || T,
    z = _.useRef(null),
    Y = _.useRef(null),
    te = _.useRef(p),
    Z = g != null,
    ne = $d(g),
    G = $d(s),
    ae = $d(h),
    q = _.useCallback(() => {
      if (!z.current || !Y.current) return;
      const X = { placement: r, strategy: i, middleware: b };
      G.current && (X.platform = G.current),
        QO(z.current, Y.current, X).then((ie) => {
          const N = { ...ie, isPositioned: ae.current !== !1 };
          W.current &&
            !Vu(te.current, N) &&
            ((te.current = N),
            Fi.flushSync(() => {
              y(N);
            }));
        });
    }, [b, r, i, G, ae]);
  gu(() => {
    h === !1 &&
      te.current.isPositioned &&
      ((te.current.isPositioned = !1), y((X) => ({ ...X, isPositioned: !1 })));
  }, [h]);
  const W = _.useRef(!1);
  gu(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    []
  ),
    gu(() => {
      if ((L && (z.current = L), D && (Y.current = D), L && D)) {
        if (ne.current) return ne.current(L, D, q);
        q();
      }
    }, [L, D, q, ne, Z]);
  const fe = _.useMemo(
      () => ({ reference: z, floating: Y, setReference: R, setFloating: O }),
      [R, O]
    ),
    B = _.useMemo(() => ({ reference: L, floating: D }), [L, D]),
    ee = _.useMemo(() => {
      const X = { position: i, left: 0, top: 0 };
      if (!B.floating) return X;
      const ie = a1(B.floating, p.x),
        N = a1(B.floating, p.y);
      return m
        ? {
            ...X,
            transform: "translate(" + ie + "px, " + N + "px)",
            ...(bb(B.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: i, left: ie, top: N };
    }, [i, m, B.floating, p.x, p.y]);
  return _.useMemo(
    () => ({ ...p, update: q, refs: fe, elements: B, floatingStyles: ee }),
    [p, q, fe, B, ee]
  );
}
const ZO = (e) => {
    function r(i) {
      return {}.hasOwnProperty.call(i, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(i) {
        const { element: l, padding: s } = typeof e == "function" ? e(i) : e;
        return l && r(l)
          ? l.current != null
            ? r1({ element: l.current, padding: s }).fn(i)
            : {}
          : l
          ? r1({ element: l, padding: s }).fn(i)
          : {};
      },
    };
  },
  KO = (e, r) => ({ ...qO(e), options: [e, r] }),
  WO = (e, r) => ({ ...YO(e), options: [e, r] }),
  IO = (e, r) => ({ ...PO(e), options: [e, r] }),
  JO = (e, r) => ({ ...GO(e), options: [e, r] }),
  e5 = (e, r) => ({ ...XO(e), options: [e, r] }),
  t5 = (e, r) => ({ ...FO(e), options: [e, r] }),
  n5 = (e, r) => ({ ...ZO(e), options: [e, r] });
var r5 = "Arrow",
  Sb = _.forwardRef((e, r) => {
    const { children: i, width: l = 10, height: s = 5, ...c } = e;
    return v.jsx(We.svg, {
      ...c,
      ref: r,
      width: l,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? i : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Sb.displayName = r5;
var a5 = Sb;
function i5(e) {
  const [r, i] = _.useState(void 0);
  return (
    Et(() => {
      if (e) {
        i({ width: e.offsetWidth, height: e.offsetHeight });
        const l = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const c = s[0];
          let f, m;
          if ("borderBoxSize" in c) {
            const g = c.borderBoxSize,
              h = Array.isArray(g) ? g[0] : g;
            (f = h.inlineSize), (m = h.blockSize);
          } else (f = e.offsetWidth), (m = e.offsetHeight);
          i({ width: f, height: m });
        });
        return l.observe(e, { box: "border-box" }), () => l.unobserve(e);
      } else i(void 0);
    }, [e]),
    r
  );
}
var Cm = "Popper",
  [wb, oc] = nc(Cm),
  [l5, Eb] = wb(Cm),
  _b = (e) => {
    const { __scopePopper: r, children: i } = e,
      [l, s] = _.useState(null);
    return v.jsx(l5, { scope: r, anchor: l, onAnchorChange: s, children: i });
  };
_b.displayName = Cm;
var Ab = "PopperAnchor",
  Tb = _.forwardRef((e, r) => {
    const { __scopePopper: i, virtualRef: l, ...s } = e,
      c = Eb(Ab, i),
      f = _.useRef(null),
      m = nt(r, f);
    return (
      _.useEffect(() => {
        c.onAnchorChange((l == null ? void 0 : l.current) || f.current);
      }),
      l ? null : v.jsx(We.div, { ...s, ref: m })
    );
  });
Tb.displayName = Ab;
var Rm = "PopperContent",
  [o5, s5] = wb(Rm),
  Mb = _.forwardRef((e, r) => {
    var ue, pe, I, re, se, F;
    const {
        __scopePopper: i,
        side: l = "bottom",
        sideOffset: s = 0,
        align: c = "center",
        alignOffset: f = 0,
        arrowPadding: m = 0,
        avoidCollisions: g = !0,
        collisionBoundary: h = [],
        collisionPadding: p = 0,
        sticky: y = "partial",
        hideWhenDetached: b = !1,
        updatePositionStrategy: S = "optimized",
        onPlaced: A,
        ...w
      } = e,
      T = Eb(Rm, i),
      [M, R] = _.useState(null),
      O = nt(r, (Ce) => R(Ce)),
      [L, D] = _.useState(null),
      z = i5(L),
      Y = (z == null ? void 0 : z.width) ?? 0,
      te = (z == null ? void 0 : z.height) ?? 0,
      Z = l + (c !== "center" ? "-" + c : ""),
      ne =
        typeof p == "number"
          ? p
          : { top: 0, right: 0, bottom: 0, left: 0, ...p },
      G = Array.isArray(h) ? h : [h],
      ae = G.length > 0,
      q = { padding: ne, boundary: G.filter(c5), altBoundary: ae },
      {
        refs: W,
        floatingStyles: fe,
        placement: B,
        isPositioned: ee,
        middlewareData: X,
      } = $O({
        strategy: "fixed",
        placement: Z,
        whileElementsMounted: (...Ce) =>
          VO(...Ce, { animationFrame: S === "always" }),
        elements: { reference: T.anchor },
        middleware: [
          KO({ mainAxis: s + te, alignmentAxis: f }),
          g &&
            WO({
              mainAxis: !0,
              crossAxis: !1,
              limiter: y === "partial" ? IO() : void 0,
              ...q,
            }),
          g && JO({ ...q }),
          e5({
            ...q,
            apply: ({
              elements: Ce,
              rects: _e,
              availableWidth: Fe,
              availableHeight: Ve,
            }) => {
              const { width: ht, height: zn } = _e.reference,
                fr = Ce.floating.style;
              fr.setProperty("--radix-popper-available-width", `${Fe}px`),
                fr.setProperty("--radix-popper-available-height", `${Ve}px`),
                fr.setProperty("--radix-popper-anchor-width", `${ht}px`),
                fr.setProperty("--radix-popper-anchor-height", `${zn}px`);
            },
          }),
          L && n5({ element: L, padding: m }),
          f5({ arrowWidth: Y, arrowHeight: te }),
          b && t5({ strategy: "referenceHidden", ...q }),
        ],
      }),
      [ie, N] = Nb(B),
      $ = or(A);
    Et(() => {
      ee && ($ == null || $());
    }, [ee, $]);
    const ce = (ue = X.arrow) == null ? void 0 : ue.x,
      de = (pe = X.arrow) == null ? void 0 : pe.y,
      le = ((I = X.arrow) == null ? void 0 : I.centerOffset) !== 0,
      [ye, xe] = _.useState();
    return (
      Et(() => {
        M && xe(window.getComputedStyle(M).zIndex);
      }, [M]),
      v.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...fe,
          transform: ee ? fe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ye,
          "--radix-popper-transform-origin": [
            (re = X.transformOrigin) == null ? void 0 : re.x,
            (se = X.transformOrigin) == null ? void 0 : se.y,
          ].join(" "),
          ...(((F = X.hide) == null ? void 0 : F.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: v.jsx(o5, {
          scope: i,
          placedSide: ie,
          onArrowChange: D,
          arrowX: ce,
          arrowY: de,
          shouldHideArrow: le,
          children: v.jsx(We.div, {
            "data-side": ie,
            "data-align": N,
            ...w,
            ref: O,
            style: { ...w.style, animation: ee ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Mb.displayName = Rm;
var Cb = "PopperArrow",
  u5 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Rb = _.forwardRef(function (r, i) {
    const { __scopePopper: l, ...s } = r,
      c = s5(Cb, l),
      f = u5[c.placedSide];
    return v.jsx("span", {
      ref: c.onArrowChange,
      style: {
        position: "absolute",
        left: c.arrowX,
        top: c.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[c.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[c.placedSide],
        visibility: c.shouldHideArrow ? "hidden" : void 0,
      },
      children: v.jsx(a5, {
        ...s,
        ref: i,
        style: { ...s.style, display: "block" },
      }),
    });
  });
Rb.displayName = Cb;
function c5(e) {
  return e !== null;
}
var f5 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(r) {
    var T, M, R;
    const { placement: i, rects: l, middlewareData: s } = r,
      f = ((T = s.arrow) == null ? void 0 : T.centerOffset) !== 0,
      m = f ? 0 : e.arrowWidth,
      g = f ? 0 : e.arrowHeight,
      [h, p] = Nb(i),
      y = { start: "0%", center: "50%", end: "100%" }[p],
      b = (((M = s.arrow) == null ? void 0 : M.x) ?? 0) + m / 2,
      S = (((R = s.arrow) == null ? void 0 : R.y) ?? 0) + g / 2;
    let A = "",
      w = "";
    return (
      h === "bottom"
        ? ((A = f ? y : `${b}px`), (w = `${-g}px`))
        : h === "top"
        ? ((A = f ? y : `${b}px`), (w = `${l.floating.height + g}px`))
        : h === "right"
        ? ((A = `${-g}px`), (w = f ? y : `${S}px`))
        : h === "left" &&
          ((A = `${l.floating.width + g}px`), (w = f ? y : `${S}px`)),
      { data: { x: A, y: w } }
    );
  },
});
function Nb(e) {
  const [r, i = "center"] = e.split("-");
  return [r, i];
}
var Ob = _b,
  Nm = Tb,
  Db = Mb,
  jb = Rb,
  d5 = "Portal",
  Om = _.forwardRef((e, r) => {
    var m;
    const { container: i, ...l } = e,
      [s, c] = _.useState(!1);
    Et(() => c(!0), []);
    const f =
      i ||
      (s &&
        ((m = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : m.body));
    return f ? v3.createPortal(v.jsx(We.div, { ...l, ref: r }), f) : null;
  });
Om.displayName = d5;
function Rh({ prop: e, defaultProp: r, onChange: i = () => {} }) {
  const [l, s] = h5({ defaultProp: r, onChange: i }),
    c = e !== void 0,
    f = c ? e : l,
    m = or(i),
    g = _.useCallback(
      (h) => {
        if (c) {
          const y = typeof h == "function" ? h(e) : h;
          y !== e && m(y);
        } else s(h);
      },
      [c, e, s, m]
    );
  return [f, g];
}
function h5({ defaultProp: e, onChange: r }) {
  const i = _.useState(e),
    [l] = i,
    s = _.useRef(l),
    c = or(r);
  return (
    _.useEffect(() => {
      s.current !== l && (c(l), (s.current = l));
    }, [l, s, c]),
    i
  );
}
function m5(e) {
  const r = _.useRef({ value: e, previous: e });
  return _.useMemo(
    () => (
      r.current.value !== e &&
        ((r.current.previous = r.current.value), (r.current.value = e)),
      r.current.previous
    ),
    [e]
  );
}
var g5 = "VisuallyHidden",
  zb = _.forwardRef((e, r) =>
    v.jsx(We.span, {
      ...e,
      ref: r,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
zb.displayName = g5;
var p5 = function (e) {
    if (typeof document > "u") return null;
    var r = Array.isArray(e) ? e[0] : e;
    return r.ownerDocument.body;
  },
  Si = new WeakMap(),
  ru = new WeakMap(),
  au = {},
  Zd = 0,
  Ub = function (e) {
    return e && (e.host || Ub(e.parentNode));
  },
  v5 = function (e, r) {
    return r
      .map(function (i) {
        if (e.contains(i)) return i;
        var l = Ub(i);
        return l && e.contains(l)
          ? l
          : (console.error(
              "aria-hidden",
              i,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (i) {
        return !!i;
      });
  },
  y5 = function (e, r, i, l) {
    var s = v5(r, Array.isArray(e) ? e : [e]);
    au[i] || (au[i] = new WeakMap());
    var c = au[i],
      f = [],
      m = new Set(),
      g = new Set(s),
      h = function (y) {
        !y || m.has(y) || (m.add(y), h(y.parentNode));
      };
    s.forEach(h);
    var p = function (y) {
      !y ||
        g.has(y) ||
        Array.prototype.forEach.call(y.children, function (b) {
          if (m.has(b)) p(b);
          else
            try {
              var S = b.getAttribute(l),
                A = S !== null && S !== "false",
                w = (Si.get(b) || 0) + 1,
                T = (c.get(b) || 0) + 1;
              Si.set(b, w),
                c.set(b, T),
                f.push(b),
                w === 1 && A && ru.set(b, !0),
                T === 1 && b.setAttribute(i, "true"),
                A || b.setAttribute(l, "true");
            } catch (M) {
              console.error("aria-hidden: cannot operate on ", b, M);
            }
        });
    };
    return (
      p(r),
      m.clear(),
      Zd++,
      function () {
        f.forEach(function (y) {
          var b = Si.get(y) - 1,
            S = c.get(y) - 1;
          Si.set(y, b),
            c.set(y, S),
            b || (ru.has(y) || y.removeAttribute(l), ru.delete(y)),
            S || y.removeAttribute(i);
        }),
          Zd--,
          Zd ||
            ((Si = new WeakMap()),
            (Si = new WeakMap()),
            (ru = new WeakMap()),
            (au = {}));
      }
    );
  },
  Lb = function (e, r, i) {
    i === void 0 && (i = "data-aria-hidden");
    var l = Array.from(Array.isArray(e) ? e : [e]),
      s = p5(e);
    return s
      ? (l.push.apply(l, Array.from(s.querySelectorAll("[aria-live]"))),
        y5(l, s, i, "aria-hidden"))
      : function () {
          return null;
        };
  },
  _n = function () {
    return (
      (_n =
        Object.assign ||
        function (r) {
          for (var i, l = 1, s = arguments.length; l < s; l++) {
            i = arguments[l];
            for (var c in i)
              Object.prototype.hasOwnProperty.call(i, c) && (r[c] = i[c]);
          }
          return r;
        }),
      _n.apply(this, arguments)
    );
  };
function Hb(e, r) {
  var i = {};
  for (var l in e)
    Object.prototype.hasOwnProperty.call(e, l) &&
      r.indexOf(l) < 0 &&
      (i[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(e); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, l[s]) &&
        (i[l[s]] = e[l[s]]);
  return i;
}
function x5(e, r, i) {
  if (i || arguments.length === 2)
    for (var l = 0, s = r.length, c; l < s; l++)
      (c || !(l in r)) &&
        (c || (c = Array.prototype.slice.call(r, 0, l)), (c[l] = r[l]));
  return e.concat(c || Array.prototype.slice.call(r));
}
var pu = "right-scroll-bar-position",
  vu = "width-before-scroll-bar",
  b5 = "with-scroll-bars-hidden",
  S5 = "--removed-body-scroll-bar-size";
function Kd(e, r) {
  return typeof e == "function" ? e(r) : e && (e.current = r), e;
}
function w5(e, r) {
  var i = _.useState(function () {
    return {
      value: e,
      callback: r,
      facade: {
        get current() {
          return i.value;
        },
        set current(l) {
          var s = i.value;
          s !== l && ((i.value = l), i.callback(l, s));
        },
      },
    };
  })[0];
  return (i.callback = r), i.facade;
}
var E5 = typeof window < "u" ? _.useLayoutEffect : _.useEffect,
  i1 = new WeakMap();
function _5(e, r) {
  var i = w5(null, function (l) {
    return e.forEach(function (s) {
      return Kd(s, l);
    });
  });
  return (
    E5(
      function () {
        var l = i1.get(i);
        if (l) {
          var s = new Set(l),
            c = new Set(e),
            f = i.current;
          s.forEach(function (m) {
            c.has(m) || Kd(m, null);
          }),
            c.forEach(function (m) {
              s.has(m) || Kd(m, f);
            });
        }
        i1.set(i, e);
      },
      [e]
    ),
    i
  );
}
function A5(e) {
  return e;
}
function T5(e, r) {
  r === void 0 && (r = A5);
  var i = [],
    l = !1,
    s = {
      read: function () {
        if (l)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return i.length ? i[i.length - 1] : e;
      },
      useMedium: function (c) {
        var f = r(c, l);
        return (
          i.push(f),
          function () {
            i = i.filter(function (m) {
              return m !== f;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (l = !0; i.length; ) {
          var f = i;
          (i = []), f.forEach(c);
        }
        i = {
          push: function (m) {
            return c(m);
          },
          filter: function () {
            return i;
          },
        };
      },
      assignMedium: function (c) {
        l = !0;
        var f = [];
        if (i.length) {
          var m = i;
          (i = []), m.forEach(c), (f = i);
        }
        var g = function () {
            var p = f;
            (f = []), p.forEach(c);
          },
          h = function () {
            return Promise.resolve().then(g);
          };
        h(),
          (i = {
            push: function (p) {
              f.push(p), h();
            },
            filter: function (p) {
              return (f = f.filter(p)), i;
            },
          });
      },
    };
  return s;
}
function M5(e) {
  e === void 0 && (e = {});
  var r = T5(null);
  return (r.options = _n({ async: !0, ssr: !1 }, e)), r;
}
var kb = function (e) {
  var r = e.sideCar,
    i = Hb(e, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var l = r.read();
  if (!l) throw new Error("Sidecar medium not found");
  return _.createElement(l, _n({}, i));
};
kb.isSideCarExport = !0;
function C5(e, r) {
  return e.useMedium(r), kb;
}
var Bb = M5(),
  Wd = function () {},
  sc = _.forwardRef(function (e, r) {
    var i = _.useRef(null),
      l = _.useState({
        onScrollCapture: Wd,
        onWheelCapture: Wd,
        onTouchMoveCapture: Wd,
      }),
      s = l[0],
      c = l[1],
      f = e.forwardProps,
      m = e.children,
      g = e.className,
      h = e.removeScrollBar,
      p = e.enabled,
      y = e.shards,
      b = e.sideCar,
      S = e.noIsolation,
      A = e.inert,
      w = e.allowPinchZoom,
      T = e.as,
      M = T === void 0 ? "div" : T,
      R = e.gapMode,
      O = Hb(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      L = b,
      D = _5([i, r]),
      z = _n(_n({}, O), s);
    return _.createElement(
      _.Fragment,
      null,
      p &&
        _.createElement(L, {
          sideCar: Bb,
          removeScrollBar: h,
          shards: y,
          noIsolation: S,
          inert: A,
          setCallbacks: c,
          allowPinchZoom: !!w,
          lockRef: i,
          gapMode: R,
        }),
      f
        ? _.cloneElement(_.Children.only(m), _n(_n({}, z), { ref: D }))
        : _.createElement(M, _n({}, z, { className: g, ref: D }), m)
    );
  });
sc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
sc.classNames = { fullWidth: vu, zeroRight: pu };
var R5 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function N5() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var r = R5();
  return r && e.setAttribute("nonce", r), e;
}
function O5(e, r) {
  e.styleSheet
    ? (e.styleSheet.cssText = r)
    : e.appendChild(document.createTextNode(r));
}
function D5(e) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(e);
}
var j5 = function () {
    var e = 0,
      r = null;
    return {
      add: function (i) {
        e == 0 && (r = N5()) && (O5(r, i), D5(r)), e++;
      },
      remove: function () {
        e--,
          !e && r && (r.parentNode && r.parentNode.removeChild(r), (r = null));
      },
    };
  },
  z5 = function () {
    var e = j5();
    return function (r, i) {
      _.useEffect(
        function () {
          return (
            e.add(r),
            function () {
              e.remove();
            }
          );
        },
        [r && i]
      );
    };
  },
  Vb = function () {
    var e = z5(),
      r = function (i) {
        var l = i.styles,
          s = i.dynamic;
        return e(l, s), null;
      };
    return r;
  },
  U5 = { left: 0, top: 0, right: 0, gap: 0 },
  Id = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  L5 = function (e) {
    var r = window.getComputedStyle(document.body),
      i = r[e === "padding" ? "paddingLeft" : "marginLeft"],
      l = r[e === "padding" ? "paddingTop" : "marginTop"],
      s = r[e === "padding" ? "paddingRight" : "marginRight"];
    return [Id(i), Id(l), Id(s)];
  },
  H5 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return U5;
    var r = L5(e),
      i = document.documentElement.clientWidth,
      l = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, l - i + r[2] - r[0]),
    };
  },
  k5 = Vb(),
  Oi = "data-scroll-locked",
  B5 = function (e, r, i, l) {
    var s = e.left,
      c = e.top,
      f = e.right,
      m = e.gap;
    return (
      i === void 0 && (i = "margin"),
      `
  .`
        .concat(
          b5,
          ` {
   overflow: hidden `
        )
        .concat(
          l,
          `;
   padding-right: `
        )
        .concat(m, "px ")
        .concat(
          l,
          `;
  }
  body[`
        )
        .concat(
          Oi,
          `] {
    overflow: hidden `
        )
        .concat(
          l,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            r && "position: relative ".concat(l, ";"),
            i === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `
                )
                .concat(
                  c,
                  `px;
    padding-right: `
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(m, "px ")
                .concat(
                  l,
                  `;
    `
                ),
            i === "padding" &&
              "padding-right: ".concat(m, "px ").concat(l, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }

  .`
        )
        .concat(
          pu,
          ` {
    right: `
        )
        .concat(m, "px ")
        .concat(
          l,
          `;
  }

  .`
        )
        .concat(
          vu,
          ` {
    margin-right: `
        )
        .concat(m, "px ")
        .concat(
          l,
          `;
  }

  .`
        )
        .concat(pu, " .")
        .concat(
          pu,
          ` {
    right: 0 `
        )
        .concat(
          l,
          `;
  }

  .`
        )
        .concat(vu, " .")
        .concat(
          vu,
          ` {
    margin-right: 0 `
        )
        .concat(
          l,
          `;
  }

  body[`
        )
        .concat(
          Oi,
          `] {
    `
        )
        .concat(S5, ": ")
        .concat(
          m,
          `px;
  }
`
        )
    );
  },
  l1 = function () {
    var e = parseInt(document.body.getAttribute(Oi) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  V5 = function () {
    _.useEffect(function () {
      return (
        document.body.setAttribute(Oi, (l1() + 1).toString()),
        function () {
          var e = l1() - 1;
          e <= 0
            ? document.body.removeAttribute(Oi)
            : document.body.setAttribute(Oi, e.toString());
        }
      );
    }, []);
  },
  q5 = function (e) {
    var r = e.noRelative,
      i = e.noImportant,
      l = e.gapMode,
      s = l === void 0 ? "margin" : l;
    V5();
    var c = _.useMemo(
      function () {
        return H5(s);
      },
      [s]
    );
    return _.createElement(k5, { styles: B5(c, !r, s, i ? "" : "!important") });
  },
  Nh = !1;
if (typeof window < "u")
  try {
    var iu = Object.defineProperty({}, "passive", {
      get: function () {
        return (Nh = !0), !0;
      },
    });
    window.addEventListener("test", iu, iu),
      window.removeEventListener("test", iu, iu);
  } catch {
    Nh = !1;
  }
var wi = Nh ? { passive: !1 } : !1,
  Y5 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  qb = function (e, r) {
    if (!(e instanceof Element)) return !1;
    var i = window.getComputedStyle(e);
    return (
      i[r] !== "hidden" &&
      !(i.overflowY === i.overflowX && !Y5(e) && i[r] === "visible")
    );
  },
  G5 = function (e) {
    return qb(e, "overflowY");
  },
  X5 = function (e) {
    return qb(e, "overflowX");
  },
  o1 = function (e, r) {
    var i = r.ownerDocument,
      l = r;
    do {
      typeof ShadowRoot < "u" && l instanceof ShadowRoot && (l = l.host);
      var s = Yb(e, l);
      if (s) {
        var c = Gb(e, l),
          f = c[1],
          m = c[2];
        if (f > m) return !0;
      }
      l = l.parentNode;
    } while (l && l !== i.body);
    return !1;
  },
  F5 = function (e) {
    var r = e.scrollTop,
      i = e.scrollHeight,
      l = e.clientHeight;
    return [r, i, l];
  },
  P5 = function (e) {
    var r = e.scrollLeft,
      i = e.scrollWidth,
      l = e.clientWidth;
    return [r, i, l];
  },
  Yb = function (e, r) {
    return e === "v" ? G5(r) : X5(r);
  },
  Gb = function (e, r) {
    return e === "v" ? F5(r) : P5(r);
  },
  Q5 = function (e, r) {
    return e === "h" && r === "rtl" ? -1 : 1;
  },
  $5 = function (e, r, i, l, s) {
    var c = Q5(e, window.getComputedStyle(r).direction),
      f = c * l,
      m = i.target,
      g = r.contains(m),
      h = !1,
      p = f > 0,
      y = 0,
      b = 0;
    do {
      var S = Gb(e, m),
        A = S[0],
        w = S[1],
        T = S[2],
        M = w - T - c * A;
      (A || M) && Yb(e, m) && ((y += M), (b += A)),
        m instanceof ShadowRoot ? (m = m.host) : (m = m.parentNode);
    } while ((!g && m !== document.body) || (g && (r.contains(m) || r === m)));
    return ((p && Math.abs(y) < 1) || (!p && Math.abs(b) < 1)) && (h = !0), h;
  },
  lu = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  s1 = function (e) {
    return [e.deltaX, e.deltaY];
  },
  u1 = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Z5 = function (e, r) {
    return e[0] === r[0] && e[1] === r[1];
  },
  K5 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  W5 = 0,
  Ei = [];
function I5(e) {
  var r = _.useRef([]),
    i = _.useRef([0, 0]),
    l = _.useRef(),
    s = _.useState(W5++)[0],
    c = _.useState(Vb)[0],
    f = _.useRef(e);
  _.useEffect(
    function () {
      f.current = e;
    },
    [e]
  ),
    _.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var w = x5([e.lockRef.current], (e.shards || []).map(u1), !0).filter(
            Boolean
          );
          return (
            w.forEach(function (T) {
              return T.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                w.forEach(function (T) {
                  return T.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var m = _.useCallback(function (w, T) {
      if (
        ("touches" in w && w.touches.length === 2) ||
        (w.type === "wheel" && w.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var M = lu(w),
        R = i.current,
        O = "deltaX" in w ? w.deltaX : R[0] - M[0],
        L = "deltaY" in w ? w.deltaY : R[1] - M[1],
        D,
        z = w.target,
        Y = Math.abs(O) > Math.abs(L) ? "h" : "v";
      if ("touches" in w && Y === "h" && z.type === "range") return !1;
      var te = o1(Y, z);
      if (!te) return !0;
      if ((te ? (D = Y) : ((D = Y === "v" ? "h" : "v"), (te = o1(Y, z))), !te))
        return !1;
      if (
        (!l.current && "changedTouches" in w && (O || L) && (l.current = D), !D)
      )
        return !0;
      var Z = l.current || D;
      return $5(Z, T, w, Z === "h" ? O : L);
    }, []),
    g = _.useCallback(function (w) {
      var T = w;
      if (!(!Ei.length || Ei[Ei.length - 1] !== c)) {
        var M = "deltaY" in T ? s1(T) : lu(T),
          R = r.current.filter(function (D) {
            return (
              D.name === T.type &&
              (D.target === T.target || T.target === D.shadowParent) &&
              Z5(D.delta, M)
            );
          })[0];
        if (R && R.should) {
          T.cancelable && T.preventDefault();
          return;
        }
        if (!R) {
          var O = (f.current.shards || [])
              .map(u1)
              .filter(Boolean)
              .filter(function (D) {
                return D.contains(T.target);
              }),
            L = O.length > 0 ? m(T, O[0]) : !f.current.noIsolation;
          L && T.cancelable && T.preventDefault();
        }
      }
    }, []),
    h = _.useCallback(function (w, T, M, R) {
      var O = { name: w, delta: T, target: M, should: R, shadowParent: J5(M) };
      r.current.push(O),
        setTimeout(function () {
          r.current = r.current.filter(function (L) {
            return L !== O;
          });
        }, 1);
    }, []),
    p = _.useCallback(function (w) {
      (i.current = lu(w)), (l.current = void 0);
    }, []),
    y = _.useCallback(function (w) {
      h(w.type, s1(w), w.target, m(w, e.lockRef.current));
    }, []),
    b = _.useCallback(function (w) {
      h(w.type, lu(w), w.target, m(w, e.lockRef.current));
    }, []);
  _.useEffect(function () {
    return (
      Ei.push(c),
      e.setCallbacks({
        onScrollCapture: y,
        onWheelCapture: y,
        onTouchMoveCapture: b,
      }),
      document.addEventListener("wheel", g, wi),
      document.addEventListener("touchmove", g, wi),
      document.addEventListener("touchstart", p, wi),
      function () {
        (Ei = Ei.filter(function (w) {
          return w !== c;
        })),
          document.removeEventListener("wheel", g, wi),
          document.removeEventListener("touchmove", g, wi),
          document.removeEventListener("touchstart", p, wi);
      }
    );
  }, []);
  var S = e.removeScrollBar,
    A = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    A ? _.createElement(c, { styles: K5(s) }) : null,
    S ? _.createElement(q5, { gapMode: e.gapMode }) : null
  );
}
function J5(e) {
  for (var r = null; e !== null; )
    e instanceof ShadowRoot && ((r = e.host), (e = e.host)), (e = e.parentNode);
  return r;
}
const e4 = C5(Bb, I5);
var Dm = _.forwardRef(function (e, r) {
  return _.createElement(sc, _n({}, e, { ref: r, sideCar: e4 }));
});
Dm.classNames = sc.classNames;
var t4 = [" ", "Enter", "ArrowUp", "ArrowDown"],
  n4 = [" ", "Enter"],
  Lo = "Select",
  [uc, cc, r4] = k3(Lo),
  [Zi, CD] = nc(Lo, [r4, oc]),
  fc = oc(),
  [a4, Pr] = Zi(Lo),
  [i4, l4] = Zi(Lo),
  Xb = (e) => {
    const {
        __scopeSelect: r,
        children: i,
        open: l,
        defaultOpen: s,
        onOpenChange: c,
        value: f,
        defaultValue: m,
        onValueChange: g,
        dir: h,
        name: p,
        autoComplete: y,
        disabled: b,
        required: S,
        form: A,
      } = e,
      w = fc(r),
      [T, M] = _.useState(null),
      [R, O] = _.useState(null),
      [L, D] = _.useState(!1),
      z = V3(h),
      [Y = !1, te] = Rh({ prop: l, defaultProp: s, onChange: c }),
      [Z, ne] = Rh({ prop: f, defaultProp: m, onChange: g }),
      G = _.useRef(null),
      ae = T ? A || !!T.closest("form") : !0,
      [q, W] = _.useState(new Set()),
      fe = Array.from(q)
        .map((B) => B.props.value)
        .join(";");
    return v.jsx(Ob, {
      ...w,
      children: v.jsxs(a4, {
        required: S,
        scope: r,
        trigger: T,
        onTriggerChange: M,
        valueNode: R,
        onValueNodeChange: O,
        valueNodeHasChildren: L,
        onValueNodeHasChildrenChange: D,
        contentId: rc(),
        value: Z,
        onValueChange: ne,
        open: Y,
        onOpenChange: te,
        dir: z,
        triggerPointerDownPosRef: G,
        disabled: b,
        children: [
          v.jsx(uc.Provider, {
            scope: r,
            children: v.jsx(i4, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: _.useCallback((B) => {
                W((ee) => new Set(ee).add(B));
              }, []),
              onNativeOptionRemove: _.useCallback((B) => {
                W((ee) => {
                  const X = new Set(ee);
                  return X.delete(B), X;
                });
              }, []),
              children: i,
            }),
          }),
          ae
            ? v.jsxs(
                hS,
                {
                  "aria-hidden": !0,
                  required: S,
                  tabIndex: -1,
                  name: p,
                  autoComplete: y,
                  value: Z,
                  onChange: (B) => ne(B.target.value),
                  disabled: b,
                  form: A,
                  children: [
                    Z === void 0 ? v.jsx("option", { value: "" }) : null,
                    Array.from(q),
                  ],
                },
                fe
              )
            : null,
        ],
      }),
    });
  };
Xb.displayName = Lo;
var Fb = "SelectTrigger",
  Pb = _.forwardRef((e, r) => {
    const { __scopeSelect: i, disabled: l = !1, ...s } = e,
      c = fc(i),
      f = Pr(Fb, i),
      m = f.disabled || l,
      g = nt(r, f.onTriggerChange),
      h = cc(i),
      p = _.useRef("touch"),
      [y, b, S] = mS((w) => {
        const T = h().filter((O) => !O.disabled),
          M = T.find((O) => O.value === f.value),
          R = gS(T, w, M);
        R !== void 0 && f.onValueChange(R.value);
      }),
      A = (w) => {
        m || (f.onOpenChange(!0), S()),
          w &&
            (f.triggerPointerDownPosRef.current = {
              x: Math.round(w.pageX),
              y: Math.round(w.pageY),
            });
      };
    return v.jsx(Nm, {
      asChild: !0,
      ...c,
      children: v.jsx(We.button, {
        type: "button",
        role: "combobox",
        "aria-controls": f.contentId,
        "aria-expanded": f.open,
        "aria-required": f.required,
        "aria-autocomplete": "none",
        dir: f.dir,
        "data-state": f.open ? "open" : "closed",
        disabled: m,
        "data-disabled": m ? "" : void 0,
        "data-placeholder": dS(f.value) ? "" : void 0,
        ...s,
        ref: g,
        onClick: Xe(s.onClick, (w) => {
          w.currentTarget.focus(), p.current !== "mouse" && A(w);
        }),
        onPointerDown: Xe(s.onPointerDown, (w) => {
          p.current = w.pointerType;
          const T = w.target;
          T.hasPointerCapture(w.pointerId) &&
            T.releasePointerCapture(w.pointerId),
            w.button === 0 &&
              w.ctrlKey === !1 &&
              w.pointerType === "mouse" &&
              (A(w), w.preventDefault());
        }),
        onKeyDown: Xe(s.onKeyDown, (w) => {
          const T = y.current !== "";
          !(w.ctrlKey || w.altKey || w.metaKey) &&
            w.key.length === 1 &&
            b(w.key),
            !(T && w.key === " ") &&
              t4.includes(w.key) &&
              (A(), w.preventDefault());
        }),
      }),
    });
  });
Pb.displayName = Fb;
var Qb = "SelectValue",
  $b = _.forwardRef((e, r) => {
    const {
        __scopeSelect: i,
        className: l,
        style: s,
        children: c,
        placeholder: f = "",
        ...m
      } = e,
      g = Pr(Qb, i),
      { onValueNodeHasChildrenChange: h } = g,
      p = c !== void 0,
      y = nt(r, g.onValueNodeChange);
    return (
      Et(() => {
        h(p);
      }, [h, p]),
      v.jsx(We.span, {
        ...m,
        ref: y,
        style: { pointerEvents: "none" },
        children: dS(g.value) ? v.jsx(v.Fragment, { children: f }) : c,
      })
    );
  });
$b.displayName = Qb;
var o4 = "SelectIcon",
  Zb = _.forwardRef((e, r) => {
    const { __scopeSelect: i, children: l, ...s } = e;
    return v.jsx(We.span, {
      "aria-hidden": !0,
      ...s,
      ref: r,
      children: l || "▼",
    });
  });
Zb.displayName = o4;
var s4 = "SelectPortal",
  Kb = (e) => v.jsx(Om, { asChild: !0, ...e });
Kb.displayName = s4;
var Da = "SelectContent",
  Wb = _.forwardRef((e, r) => {
    const i = Pr(Da, e.__scopeSelect),
      [l, s] = _.useState();
    if (
      (Et(() => {
        s(new DocumentFragment());
      }, []),
      !i.open)
    ) {
      const c = l;
      return c
        ? Fi.createPortal(
            v.jsx(Ib, {
              scope: e.__scopeSelect,
              children: v.jsx(uc.Slot, {
                scope: e.__scopeSelect,
                children: v.jsx("div", { children: e.children }),
              }),
            }),
            c
          )
        : null;
    }
    return v.jsx(Jb, { ...e, ref: r });
  });
Wb.displayName = Da;
var ln = 10,
  [Ib, Qr] = Zi(Da),
  u4 = "SelectContentImpl",
  Jb = _.forwardRef((e, r) => {
    const {
        __scopeSelect: i,
        position: l = "item-aligned",
        onCloseAutoFocus: s,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        side: m,
        sideOffset: g,
        align: h,
        alignOffset: p,
        arrowPadding: y,
        collisionBoundary: b,
        collisionPadding: S,
        sticky: A,
        hideWhenDetached: w,
        avoidCollisions: T,
        ...M
      } = e,
      R = Pr(Da, i),
      [O, L] = _.useState(null),
      [D, z] = _.useState(null),
      Y = nt(r, (ue) => L(ue)),
      [te, Z] = _.useState(null),
      [ne, G] = _.useState(null),
      ae = cc(i),
      [q, W] = _.useState(!1),
      fe = _.useRef(!1);
    _.useEffect(() => {
      if (O) return Lb(O);
    }, [O]),
      ub();
    const B = _.useCallback(
        (ue) => {
          const [pe, ...I] = ae().map((F) => F.ref.current),
            [re] = I.slice(-1),
            se = document.activeElement;
          for (const F of ue)
            if (
              F === se ||
              (F == null || F.scrollIntoView({ block: "nearest" }),
              F === pe && D && (D.scrollTop = 0),
              F === re && D && (D.scrollTop = D.scrollHeight),
              F == null || F.focus(),
              document.activeElement !== se)
            )
              return;
        },
        [ae, D]
      ),
      ee = _.useCallback(() => B([te, O]), [B, te, O]);
    _.useEffect(() => {
      q && ee();
    }, [q, ee]);
    const { onOpenChange: X, triggerPointerDownPosRef: ie } = R;
    _.useEffect(() => {
      if (O) {
        let ue = { x: 0, y: 0 };
        const pe = (re) => {
            var se, F;
            ue = {
              x: Math.abs(
                Math.round(re.pageX) -
                  (((se = ie.current) == null ? void 0 : se.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(re.pageY) -
                  (((F = ie.current) == null ? void 0 : F.y) ?? 0)
              ),
            };
          },
          I = (re) => {
            ue.x <= 10 && ue.y <= 10
              ? re.preventDefault()
              : O.contains(re.target) || X(!1),
              document.removeEventListener("pointermove", pe),
              (ie.current = null);
          };
        return (
          ie.current !== null &&
            (document.addEventListener("pointermove", pe),
            document.addEventListener("pointerup", I, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", pe),
              document.removeEventListener("pointerup", I, { capture: !0 });
          }
        );
      }
    }, [O, X, ie]),
      _.useEffect(() => {
        const ue = () => X(!1);
        return (
          window.addEventListener("blur", ue),
          window.addEventListener("resize", ue),
          () => {
            window.removeEventListener("blur", ue),
              window.removeEventListener("resize", ue);
          }
        );
      }, [X]);
    const [N, $] = mS((ue) => {
        const pe = ae().filter((se) => !se.disabled),
          I = pe.find((se) => se.ref.current === document.activeElement),
          re = gS(pe, ue, I);
        re && setTimeout(() => re.ref.current.focus());
      }),
      ce = _.useCallback(
        (ue, pe, I) => {
          const re = !fe.current && !I;
          ((R.value !== void 0 && R.value === pe) || re) &&
            (Z(ue), re && (fe.current = !0));
        },
        [R.value]
      ),
      de = _.useCallback(() => (O == null ? void 0 : O.focus()), [O]),
      le = _.useCallback(
        (ue, pe, I) => {
          const re = !fe.current && !I;
          ((R.value !== void 0 && R.value === pe) || re) && G(ue);
        },
        [R.value]
      ),
      ye = l === "popper" ? Oh : eS,
      xe =
        ye === Oh
          ? {
              side: m,
              sideOffset: g,
              align: h,
              alignOffset: p,
              arrowPadding: y,
              collisionBoundary: b,
              collisionPadding: S,
              sticky: A,
              hideWhenDetached: w,
              avoidCollisions: T,
            }
          : {};
    return v.jsx(Ib, {
      scope: i,
      content: O,
      viewport: D,
      onViewportChange: z,
      itemRefCallback: ce,
      selectedItem: te,
      onItemLeave: de,
      itemTextRefCallback: le,
      focusSelectedItem: ee,
      selectedItemText: ne,
      position: l,
      isPositioned: q,
      searchRef: N,
      children: v.jsx(Dm, {
        as: Na,
        allowPinchZoom: !0,
        children: v.jsx(bm, {
          asChild: !0,
          trapped: R.open,
          onMountAutoFocus: (ue) => {
            ue.preventDefault();
          },
          onUnmountAutoFocus: Xe(s, (ue) => {
            var pe;
            (pe = R.trigger) == null || pe.focus({ preventScroll: !0 }),
              ue.preventDefault();
          }),
          children: v.jsx(xm, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: c,
            onPointerDownOutside: f,
            onFocusOutside: (ue) => ue.preventDefault(),
            onDismiss: () => R.onOpenChange(!1),
            children: v.jsx(ye, {
              role: "listbox",
              id: R.contentId,
              "data-state": R.open ? "open" : "closed",
              dir: R.dir,
              onContextMenu: (ue) => ue.preventDefault(),
              ...M,
              ...xe,
              onPlaced: () => W(!0),
              ref: Y,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...M.style,
              },
              onKeyDown: Xe(M.onKeyDown, (ue) => {
                const pe = ue.ctrlKey || ue.altKey || ue.metaKey;
                if (
                  (ue.key === "Tab" && ue.preventDefault(),
                  !pe && ue.key.length === 1 && $(ue.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(ue.key))
                ) {
                  let re = ae()
                    .filter((se) => !se.disabled)
                    .map((se) => se.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(ue.key) &&
                      (re = re.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(ue.key))
                  ) {
                    const se = ue.target,
                      F = re.indexOf(se);
                    re = re.slice(F + 1);
                  }
                  setTimeout(() => B(re)), ue.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Jb.displayName = u4;
var c4 = "SelectItemAlignedPosition",
  eS = _.forwardRef((e, r) => {
    const { __scopeSelect: i, onPlaced: l, ...s } = e,
      c = Pr(Da, i),
      f = Qr(Da, i),
      [m, g] = _.useState(null),
      [h, p] = _.useState(null),
      y = nt(r, (Y) => p(Y)),
      b = cc(i),
      S = _.useRef(!1),
      A = _.useRef(!0),
      {
        viewport: w,
        selectedItem: T,
        selectedItemText: M,
        focusSelectedItem: R,
      } = f,
      O = _.useCallback(() => {
        if (c.trigger && c.valueNode && m && h && w && T && M) {
          const Y = c.trigger.getBoundingClientRect(),
            te = h.getBoundingClientRect(),
            Z = c.valueNode.getBoundingClientRect(),
            ne = M.getBoundingClientRect();
          if (c.dir !== "rtl") {
            const se = ne.left - te.left,
              F = Z.left - se,
              Ce = Y.left - F,
              _e = Y.width + Ce,
              Fe = Math.max(_e, te.width),
              Ve = window.innerWidth - ln,
              ht = Yy(F, [ln, Math.max(ln, Ve - Fe)]);
            (m.style.minWidth = _e + "px"), (m.style.left = ht + "px");
          } else {
            const se = te.right - ne.right,
              F = window.innerWidth - Z.right - se,
              Ce = window.innerWidth - Y.right - F,
              _e = Y.width + Ce,
              Fe = Math.max(_e, te.width),
              Ve = window.innerWidth - ln,
              ht = Yy(F, [ln, Math.max(ln, Ve - Fe)]);
            (m.style.minWidth = _e + "px"), (m.style.right = ht + "px");
          }
          const G = b(),
            ae = window.innerHeight - ln * 2,
            q = w.scrollHeight,
            W = window.getComputedStyle(h),
            fe = parseInt(W.borderTopWidth, 10),
            B = parseInt(W.paddingTop, 10),
            ee = parseInt(W.borderBottomWidth, 10),
            X = parseInt(W.paddingBottom, 10),
            ie = fe + B + q + X + ee,
            N = Math.min(T.offsetHeight * 5, ie),
            $ = window.getComputedStyle(w),
            ce = parseInt($.paddingTop, 10),
            de = parseInt($.paddingBottom, 10),
            le = Y.top + Y.height / 2 - ln,
            ye = ae - le,
            xe = T.offsetHeight / 2,
            ue = T.offsetTop + xe,
            pe = fe + B + ue,
            I = ie - pe;
          if (pe <= le) {
            const se = G.length > 0 && T === G[G.length - 1].ref.current;
            m.style.bottom = "0px";
            const F = h.clientHeight - w.offsetTop - w.offsetHeight,
              Ce = Math.max(ye, xe + (se ? de : 0) + F + ee),
              _e = pe + Ce;
            m.style.height = _e + "px";
          } else {
            const se = G.length > 0 && T === G[0].ref.current;
            m.style.top = "0px";
            const Ce = Math.max(le, fe + w.offsetTop + (se ? ce : 0) + xe) + I;
            (m.style.height = Ce + "px"), (w.scrollTop = pe - le + w.offsetTop);
          }
          (m.style.margin = `${ln}px 0`),
            (m.style.minHeight = N + "px"),
            (m.style.maxHeight = ae + "px"),
            l == null || l(),
            requestAnimationFrame(() => (S.current = !0));
        }
      }, [b, c.trigger, c.valueNode, m, h, w, T, M, c.dir, l]);
    Et(() => O(), [O]);
    const [L, D] = _.useState();
    Et(() => {
      h && D(window.getComputedStyle(h).zIndex);
    }, [h]);
    const z = _.useCallback(
      (Y) => {
        Y && A.current === !0 && (O(), R == null || R(), (A.current = !1));
      },
      [O, R]
    );
    return v.jsx(d4, {
      scope: i,
      contentWrapper: m,
      shouldExpandOnScrollRef: S,
      onScrollButtonChange: z,
      children: v.jsx("div", {
        ref: g,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: L,
        },
        children: v.jsx(We.div, {
          ...s,
          ref: y,
          style: { boxSizing: "border-box", maxHeight: "100%", ...s.style },
        }),
      }),
    });
  });
eS.displayName = c4;
var f4 = "SelectPopperPosition",
  Oh = _.forwardRef((e, r) => {
    const {
        __scopeSelect: i,
        align: l = "start",
        collisionPadding: s = ln,
        ...c
      } = e,
      f = fc(i);
    return v.jsx(Db, {
      ...f,
      ...c,
      ref: r,
      align: l,
      collisionPadding: s,
      style: {
        boxSizing: "border-box",
        ...c.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Oh.displayName = f4;
var [d4, jm] = Zi(Da, {}),
  Dh = "SelectViewport",
  tS = _.forwardRef((e, r) => {
    const { __scopeSelect: i, nonce: l, ...s } = e,
      c = Qr(Dh, i),
      f = jm(Dh, i),
      m = nt(r, c.onViewportChange),
      g = _.useRef(0);
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: l,
        }),
        v.jsx(uc.Slot, {
          scope: i,
          children: v.jsx(We.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...s,
            ref: m,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...s.style,
            },
            onScroll: Xe(s.onScroll, (h) => {
              const p = h.currentTarget,
                { contentWrapper: y, shouldExpandOnScrollRef: b } = f;
              if (b != null && b.current && y) {
                const S = Math.abs(g.current - p.scrollTop);
                if (S > 0) {
                  const A = window.innerHeight - ln * 2,
                    w = parseFloat(y.style.minHeight),
                    T = parseFloat(y.style.height),
                    M = Math.max(w, T);
                  if (M < A) {
                    const R = M + S,
                      O = Math.min(A, R),
                      L = R - O;
                    (y.style.height = O + "px"),
                      y.style.bottom === "0px" &&
                        ((p.scrollTop = L > 0 ? L : 0),
                        (y.style.justifyContent = "flex-end"));
                  }
                }
              }
              g.current = p.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
tS.displayName = Dh;
var nS = "SelectGroup",
  [h4, m4] = Zi(nS),
  g4 = _.forwardRef((e, r) => {
    const { __scopeSelect: i, ...l } = e,
      s = rc();
    return v.jsx(h4, {
      scope: i,
      id: s,
      children: v.jsx(We.div, {
        role: "group",
        "aria-labelledby": s,
        ...l,
        ref: r,
      }),
    });
  });
g4.displayName = nS;
var rS = "SelectLabel",
  p4 = _.forwardRef((e, r) => {
    const { __scopeSelect: i, ...l } = e,
      s = m4(rS, i);
    return v.jsx(We.div, { id: s.id, ...l, ref: r });
  });
p4.displayName = rS;
var qu = "SelectItem",
  [v4, aS] = Zi(qu),
  iS = _.forwardRef((e, r) => {
    const {
        __scopeSelect: i,
        value: l,
        disabled: s = !1,
        textValue: c,
        ...f
      } = e,
      m = Pr(qu, i),
      g = Qr(qu, i),
      h = m.value === l,
      [p, y] = _.useState(c ?? ""),
      [b, S] = _.useState(!1),
      A = nt(r, (R) => {
        var O;
        return (O = g.itemRefCallback) == null ? void 0 : O.call(g, R, l, s);
      }),
      w = rc(),
      T = _.useRef("touch"),
      M = () => {
        s || (m.onValueChange(l), m.onOpenChange(!1));
      };
    if (l === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return v.jsx(v4, {
      scope: i,
      value: l,
      disabled: s,
      textId: w,
      isSelected: h,
      onItemTextChange: _.useCallback((R) => {
        y((O) => O || ((R == null ? void 0 : R.textContent) ?? "").trim());
      }, []),
      children: v.jsx(uc.ItemSlot, {
        scope: i,
        value: l,
        disabled: s,
        textValue: p,
        children: v.jsx(We.div, {
          role: "option",
          "aria-labelledby": w,
          "data-highlighted": b ? "" : void 0,
          "aria-selected": h && b,
          "data-state": h ? "checked" : "unchecked",
          "aria-disabled": s || void 0,
          "data-disabled": s ? "" : void 0,
          tabIndex: s ? void 0 : -1,
          ...f,
          ref: A,
          onFocus: Xe(f.onFocus, () => S(!0)),
          onBlur: Xe(f.onBlur, () => S(!1)),
          onClick: Xe(f.onClick, () => {
            T.current !== "mouse" && M();
          }),
          onPointerUp: Xe(f.onPointerUp, () => {
            T.current === "mouse" && M();
          }),
          onPointerDown: Xe(f.onPointerDown, (R) => {
            T.current = R.pointerType;
          }),
          onPointerMove: Xe(f.onPointerMove, (R) => {
            var O;
            (T.current = R.pointerType),
              s
                ? (O = g.onItemLeave) == null || O.call(g)
                : T.current === "mouse" &&
                  R.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: Xe(f.onPointerLeave, (R) => {
            var O;
            R.currentTarget === document.activeElement &&
              ((O = g.onItemLeave) == null || O.call(g));
          }),
          onKeyDown: Xe(f.onKeyDown, (R) => {
            var L;
            (((L = g.searchRef) == null ? void 0 : L.current) !== "" &&
              R.key === " ") ||
              (n4.includes(R.key) && M(), R.key === " " && R.preventDefault());
          }),
        }),
      }),
    });
  });
iS.displayName = qu;
var io = "SelectItemText",
  lS = _.forwardRef((e, r) => {
    const { __scopeSelect: i, className: l, style: s, ...c } = e,
      f = Pr(io, i),
      m = Qr(io, i),
      g = aS(io, i),
      h = l4(io, i),
      [p, y] = _.useState(null),
      b = nt(
        r,
        (M) => y(M),
        g.onItemTextChange,
        (M) => {
          var R;
          return (R = m.itemTextRefCallback) == null
            ? void 0
            : R.call(m, M, g.value, g.disabled);
        }
      ),
      S = p == null ? void 0 : p.textContent,
      A = _.useMemo(
        () =>
          v.jsx(
            "option",
            { value: g.value, disabled: g.disabled, children: S },
            g.value
          ),
        [g.disabled, g.value, S]
      ),
      { onNativeOptionAdd: w, onNativeOptionRemove: T } = h;
    return (
      Et(() => (w(A), () => T(A)), [w, T, A]),
      v.jsxs(v.Fragment, {
        children: [
          v.jsx(We.span, { id: g.textId, ...c, ref: b }),
          g.isSelected && f.valueNode && !f.valueNodeHasChildren
            ? Fi.createPortal(c.children, f.valueNode)
            : null,
        ],
      })
    );
  });
lS.displayName = io;
var oS = "SelectItemIndicator",
  sS = _.forwardRef((e, r) => {
    const { __scopeSelect: i, ...l } = e;
    return aS(oS, i).isSelected
      ? v.jsx(We.span, { "aria-hidden": !0, ...l, ref: r })
      : null;
  });
sS.displayName = oS;
var jh = "SelectScrollUpButton",
  uS = _.forwardRef((e, r) => {
    const i = Qr(jh, e.__scopeSelect),
      l = jm(jh, e.__scopeSelect),
      [s, c] = _.useState(!1),
      f = nt(r, l.onScrollButtonChange);
    return (
      Et(() => {
        if (i.viewport && i.isPositioned) {
          let m = function () {
            const h = g.scrollTop > 0;
            c(h);
          };
          const g = i.viewport;
          return (
            m(),
            g.addEventListener("scroll", m),
            () => g.removeEventListener("scroll", m)
          );
        }
      }, [i.viewport, i.isPositioned]),
      s
        ? v.jsx(fS, {
            ...e,
            ref: f,
            onAutoScroll: () => {
              const { viewport: m, selectedItem: g } = i;
              m && g && (m.scrollTop = m.scrollTop - g.offsetHeight);
            },
          })
        : null
    );
  });
uS.displayName = jh;
var zh = "SelectScrollDownButton",
  cS = _.forwardRef((e, r) => {
    const i = Qr(zh, e.__scopeSelect),
      l = jm(zh, e.__scopeSelect),
      [s, c] = _.useState(!1),
      f = nt(r, l.onScrollButtonChange);
    return (
      Et(() => {
        if (i.viewport && i.isPositioned) {
          let m = function () {
            const h = g.scrollHeight - g.clientHeight,
              p = Math.ceil(g.scrollTop) < h;
            c(p);
          };
          const g = i.viewport;
          return (
            m(),
            g.addEventListener("scroll", m),
            () => g.removeEventListener("scroll", m)
          );
        }
      }, [i.viewport, i.isPositioned]),
      s
        ? v.jsx(fS, {
            ...e,
            ref: f,
            onAutoScroll: () => {
              const { viewport: m, selectedItem: g } = i;
              m && g && (m.scrollTop = m.scrollTop + g.offsetHeight);
            },
          })
        : null
    );
  });
cS.displayName = zh;
var fS = _.forwardRef((e, r) => {
    const { __scopeSelect: i, onAutoScroll: l, ...s } = e,
      c = Qr("SelectScrollButton", i),
      f = _.useRef(null),
      m = cc(i),
      g = _.useCallback(() => {
        f.current !== null &&
          (window.clearInterval(f.current), (f.current = null));
      }, []);
    return (
      _.useEffect(() => () => g(), [g]),
      Et(() => {
        var p;
        const h = m().find((y) => y.ref.current === document.activeElement);
        (p = h == null ? void 0 : h.ref.current) == null ||
          p.scrollIntoView({ block: "nearest" });
      }, [m]),
      v.jsx(We.div, {
        "aria-hidden": !0,
        ...s,
        ref: r,
        style: { flexShrink: 0, ...s.style },
        onPointerDown: Xe(s.onPointerDown, () => {
          f.current === null && (f.current = window.setInterval(l, 50));
        }),
        onPointerMove: Xe(s.onPointerMove, () => {
          var h;
          (h = c.onItemLeave) == null || h.call(c),
            f.current === null && (f.current = window.setInterval(l, 50));
        }),
        onPointerLeave: Xe(s.onPointerLeave, () => {
          g();
        }),
      })
    );
  }),
  y4 = "SelectSeparator",
  x4 = _.forwardRef((e, r) => {
    const { __scopeSelect: i, ...l } = e;
    return v.jsx(We.div, { "aria-hidden": !0, ...l, ref: r });
  });
x4.displayName = y4;
var Uh = "SelectArrow",
  b4 = _.forwardRef((e, r) => {
    const { __scopeSelect: i, ...l } = e,
      s = fc(i),
      c = Pr(Uh, i),
      f = Qr(Uh, i);
    return c.open && f.position === "popper"
      ? v.jsx(jb, { ...s, ...l, ref: r })
      : null;
  });
b4.displayName = Uh;
function dS(e) {
  return e === "" || e === void 0;
}
var hS = _.forwardRef((e, r) => {
  const { value: i, ...l } = e,
    s = _.useRef(null),
    c = nt(r, s),
    f = m5(i);
  return (
    _.useEffect(() => {
      const m = s.current,
        g = window.HTMLSelectElement.prototype,
        p = Object.getOwnPropertyDescriptor(g, "value").set;
      if (f !== i && p) {
        const y = new Event("change", { bubbles: !0 });
        p.call(m, i), m.dispatchEvent(y);
      }
    }, [f, i]),
    v.jsx(zb, {
      asChild: !0,
      children: v.jsx("select", { ...l, ref: c, defaultValue: i }),
    })
  );
});
hS.displayName = "BubbleSelect";
function mS(e) {
  const r = or(e),
    i = _.useRef(""),
    l = _.useRef(0),
    s = _.useCallback(
      (f) => {
        const m = i.current + f;
        r(m),
          (function g(h) {
            (i.current = h),
              window.clearTimeout(l.current),
              h !== "" && (l.current = window.setTimeout(() => g(""), 1e3));
          })(m);
      },
      [r]
    ),
    c = _.useCallback(() => {
      (i.current = ""), window.clearTimeout(l.current);
    }, []);
  return _.useEffect(() => () => window.clearTimeout(l.current), []), [i, s, c];
}
function gS(e, r, i) {
  const s = r.length > 1 && Array.from(r).every((h) => h === r[0]) ? r[0] : r,
    c = i ? e.indexOf(i) : -1;
  let f = S4(e, Math.max(c, 0));
  s.length === 1 && (f = f.filter((h) => h !== i));
  const g = f.find((h) =>
    h.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return g !== i ? g : void 0;
}
function S4(e, r) {
  return e.map((i, l) => e[(r + l) % e.length]);
}
var w4 = Xb,
  E4 = Pb,
  _4 = $b,
  A4 = Zb,
  T4 = Kb,
  M4 = Wb,
  C4 = tS,
  R4 = iS,
  N4 = lS,
  O4 = sS,
  D4 = uS,
  j4 = cS;
function z4({ ...e }) {
  return v.jsx(w4, { "data-slot": "select", ...e });
}
function U4({ ...e }) {
  return v.jsx(_4, { "data-slot": "select-value", ...e });
}
function L4({ className: e, children: r, ...i }) {
  return v.jsxs(E4, {
    "data-slot": "select-trigger",
    className: ar(
      "cursor-pointer border-black/60 data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-7 px-4 py-2 w-fit items-center justify-between gap-2 rounded-2xl border bg-button-background  text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      e
    ),
    ...i,
    children: [
      r,
      v.jsx(A4, { asChild: !0, children: v.jsx(Sx, { className: "size-4" }) }),
    ],
  });
}
function H4({ className: e, children: r, position: i = "popper", ...l }) {
  return v.jsx(T4, {
    children: v.jsxs(M4, {
      "data-slot": "select-content",
      className: ar(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        i === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: i,
      ...l,
      children: [
        v.jsx(B4, {}),
        v.jsx(C4, {
          className: ar(
            "p-1",
            i === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          ),
          children: r,
        }),
        v.jsx(V4, {}),
      ],
    }),
  });
}
function k4({ className: e, children: r, ...i }) {
  return v.jsxs(R4, {
    "data-slot": "select-item",
    className: ar(
      "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      e
    ),
    ...i,
    children: [
      v.jsx("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: v.jsx(O4, { children: v.jsx(OR, { className: "size-4" }) }),
      }),
      v.jsx(N4, { children: r }),
    ],
  });
}
function B4({ className: e, ...r }) {
  return v.jsx(D4, {
    "data-slot": "select-scroll-up-button",
    className: ar("flex cursor-default items-center justify-center py-1", e),
    ...r,
    children: v.jsx(zR, { className: "size-4" }),
  });
}
function V4({ className: e, ...r }) {
  return v.jsx(j4, {
    "data-slot": "select-scroll-down-button",
    className: ar("flex cursor-default items-center justify-center py-1", e),
    ...r,
    children: v.jsx(Sx, { className: "size-4" }),
  });
}
const q4 = [2018, 2019, 2020, 2021, 2022, 2023, 2024],
  zm = ({ setYear: e, year: r }) =>
    v.jsxs(z4, {
      onValueChange: (i) => e(Number(i)),
      value: String(r),
      children: [
        v.jsx(L4, {
          style: { color: "#212121" },
          children: v.jsx(U4, { children: r - 1 + " - " + r }),
        }),
        v.jsx(H4, {
          children: q4.map((i, l) =>
            v.jsx(k4, { value: String(i), children: i - 1 + " - " + i }, l)
          ),
        }),
      ],
    }),
  Y4 =
    "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/4/query?where=INDICATEUR%3D%27Température%27&outFields=*&returnGeometry=false&f=json",
  G4 =
    "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/M%C3%A9t%C3%A9o_des_nappes/FeatureServer/4/query?where=INDICATEUR%3D%27Précipitations%27&outFields=*&returnGeometry=false&f=json",
  X4 =
    "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/M%C3%A9t%C3%A9o_des_nappes/FeatureServer/4/query?where=INDICATEUR%3D%27Humidit%C3%A9%20sol%27&outFields=*&returnGeometry=false&f=json",
  F4 =
    "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/M%C3%A9t%C3%A9o_des_nappes/FeatureServer/4/query?where=INDICATEUR%3D%27%C3%89vapotranspiration%27&outFields=*&returnGeometry=false&f=json",
  ou = (e, r) =>
    e.filter((i) => {
      const l = new Date(i.DATE_OBSERVATION),
        s = l.getFullYear() === r && l.getMonth() <= 7,
        c = l.getFullYear() === r - 1 && l.getMonth() > 7;
      return s || c;
    }),
  P4 = ({ width: e }) => {
    const r = _.useRef(null),
      [i, l] = _.useState(2024),
      [s, c] = _.useState([]),
      [f, m] = _.useState([]),
      [g, h] = _.useState([]),
      [p, y] = _.useState([]),
      [b, S] = _.useState(!0),
      [A, w] = _.useState(null);
    if (
      (_.useEffect(() => {
        (async () => {
          try {
            S(!0);
            const z = await Promise.all([
              fetch(Y4),
              fetch(G4),
              fetch(X4),
              fetch(F4),
            ]);
            z.forEach((te) => {
              if (!te.ok) throw new Error("Failed to fetch data");
            });
            const Y = await Promise.all(z.map((te) => te.json()));
            c(Y[0].features.map((te) => te.attributes)),
              m(Y[1].features.map((te) => te.attributes)),
              h(Y[2].features.map((te) => te.attributes)),
              y(Y[3].features.map((te) => te.attributes));
          } catch (z) {
            w(z.message);
          } finally {
            S(!1);
          }
        })();
      }, []),
      b)
    )
      return v.jsx("p", { children: "Loading..." });
    if (A) return v.jsxs("p", { children: ["Error: ", A] });
    const T = ou(s, i),
      M = ou(g, i),
      R = ou(p, i),
      O = ou(f, i),
      L = T[0].TYPE_ANNEE;
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("h2", { children: "Le rôle de la météo" }),
        v.jsx("span", {
          className: "subtitle",
          children:
            "Valeurs de l'évapotranspiration, température, précipitations et l’humidité du sol au cours des 12 derniers mois",
        }),
        v.jsxs("div", {
          className: "flex items-center gap-2 my-2",
          children: [
            v.jsx("span", { children: "Selectionnez l'année: " }),
            v.jsx(zm, { setYear: l, year: i }),
            v.jsx(ym, { yearType: L }),
          ],
        }),
        v.jsxs("div", {
          ref: r,
          children: [
            v.jsx(Gd, {
              data: O,
              width: e,
              height: 180,
              min: 0,
              max: 120,
              title: "Précipitations",
              unit: "mm",
              isNormalLabelEnabled: !0,
            }),
            v.jsx(Gd, {
              data: T,
              width: e,
              height: 180,
              min: 0,
              max: 38,
              title: "Température",
              unit: "°C",
            }),
            v.jsx(Gd, {
              data: R,
              width: e,
              height: 180,
              min: 0,
              max: 160,
              title: "Évapotranspiration",
              unit: "mm",
            }),
            v.jsx(D3, {
              data: M,
              width: e,
              height: 220,
              min: 0,
              max: 1.4,
              title: "Humidité",
            }),
          ],
        }),
        v.jsx("div", {
          className: "flex text-sm mt-8",
          style: { fontSize: 11, color: "#212121" },
          children: v.jsx("p", {
            children: "Source et notes: insérer des choses ici.",
          }),
        }),
      ],
    });
  },
  c1 = (e) => {
    const { path: r, areaColor: i, areaOpacity: l } = e,
      s = Xi({ to: { path: r } });
    return v.jsx(Pi.path, { d: s.path, opacity: l, fill: i });
  },
  Q4 = (e) => {
    const { path: r, color: i } = e,
      l = Xi({ to: { path: r } });
    return v.jsx(Pi.path, {
      d: l.path,
      fill: "none",
      stroke: i,
      strokeWidth: 2,
    });
  },
  dc = () =>
    v.jsx("defs", {
      children: v.jsxs("pattern", {
        id: "diagonalLines",
        patternUnits: "userSpaceOnUse",
        width: "10",
        height: "10",
        patternTransform: "rotate(25)",
        children: [
          v.jsx("line", {
            x1: "0",
            y1: "6",
            x2: "0",
            y2: "10",
            stroke: "black",
            strokeWidth: "1",
            strokeDasharray: "4 8",
            opacity: 0.7,
          }),
          v.jsx("line", {
            x1: "4",
            y1: "0",
            x2: "10",
            y2: "0",
            stroke: "black",
            strokeWidth: "1",
            strokeDasharray: "4 8",
            opacity: 0.7,
          }),
        ],
      }),
    });
function $4(e, r) {
  return _.useReducer((i, l) => r[i][l] ?? i, e);
}
var Um = (e) => {
  const { present: r, children: i } = e,
    l = Z4(r),
    s =
      typeof i == "function" ? i({ present: l.isPresent }) : _.Children.only(i),
    c = nt(l.ref, K4(s));
  return typeof i == "function" || l.isPresent
    ? _.cloneElement(s, { ref: c })
    : null;
};
Um.displayName = "Presence";
function Z4(e) {
  const [r, i] = _.useState(),
    l = _.useRef({}),
    s = _.useRef(e),
    c = _.useRef("none"),
    f = e ? "mounted" : "unmounted",
    [m, g] = $4(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    _.useEffect(() => {
      const h = su(l.current);
      c.current = m === "mounted" ? h : "none";
    }, [m]),
    Et(() => {
      const h = l.current,
        p = s.current;
      if (p !== e) {
        const b = c.current,
          S = su(h);
        e
          ? g("MOUNT")
          : S === "none" || (h == null ? void 0 : h.display) === "none"
          ? g("UNMOUNT")
          : g(p && b !== S ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, g]),
    Et(() => {
      if (r) {
        let h;
        const p = r.ownerDocument.defaultView ?? window,
          y = (S) => {
            const w = su(l.current).includes(S.animationName);
            if (S.target === r && w && (g("ANIMATION_END"), !s.current)) {
              const T = r.style.animationFillMode;
              (r.style.animationFillMode = "forwards"),
                (h = p.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = T);
                }));
            }
          },
          b = (S) => {
            S.target === r && (c.current = su(l.current));
          };
        return (
          r.addEventListener("animationstart", b),
          r.addEventListener("animationcancel", y),
          r.addEventListener("animationend", y),
          () => {
            p.clearTimeout(h),
              r.removeEventListener("animationstart", b),
              r.removeEventListener("animationcancel", y),
              r.removeEventListener("animationend", y);
          }
        );
      } else g("ANIMATION_END");
    }, [r, g]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(m),
      ref: _.useCallback((h) => {
        h && (l.current = getComputedStyle(h)), i(h);
      }, []),
    }
  );
}
function su(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function K4(e) {
  var l, s;
  let r =
      (l = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : l.get,
    i = r && "isReactWarning" in r && r.isReactWarning;
  return i
    ? e.ref
    : ((r =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (i = r && "isReactWarning" in r && r.isReactWarning),
      i ? e.props.ref : e.props.ref || e.ref);
}
var Lm = "Popover",
  [pS, RD] = nc(Lm, [oc]),
  Ho = oc(),
  [W4, $r] = pS(Lm),
  vS = (e) => {
    const {
        __scopePopover: r,
        children: i,
        open: l,
        defaultOpen: s,
        onOpenChange: c,
        modal: f = !1,
      } = e,
      m = Ho(r),
      g = _.useRef(null),
      [h, p] = _.useState(!1),
      [y = !1, b] = Rh({ prop: l, defaultProp: s, onChange: c });
    return v.jsx(Ob, {
      ...m,
      children: v.jsx(W4, {
        scope: r,
        contentId: rc(),
        triggerRef: g,
        open: y,
        onOpenChange: b,
        onOpenToggle: _.useCallback(() => b((S) => !S), [b]),
        hasCustomAnchor: h,
        onCustomAnchorAdd: _.useCallback(() => p(!0), []),
        onCustomAnchorRemove: _.useCallback(() => p(!1), []),
        modal: f,
        children: i,
      }),
    });
  };
vS.displayName = Lm;
var yS = "PopoverAnchor",
  I4 = _.forwardRef((e, r) => {
    const { __scopePopover: i, ...l } = e,
      s = $r(yS, i),
      c = Ho(i),
      { onCustomAnchorAdd: f, onCustomAnchorRemove: m } = s;
    return (
      _.useEffect(() => (f(), () => m()), [f, m]),
      v.jsx(Nm, { ...c, ...l, ref: r })
    );
  });
I4.displayName = yS;
var xS = "PopoverTrigger",
  bS = _.forwardRef((e, r) => {
    const { __scopePopover: i, ...l } = e,
      s = $r(xS, i),
      c = Ho(i),
      f = nt(r, s.triggerRef),
      m = v.jsx(We.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": AS(s.open),
        ...l,
        ref: f,
        onClick: Xe(e.onClick, s.onOpenToggle),
      });
    return s.hasCustomAnchor
      ? m
      : v.jsx(Nm, { asChild: !0, ...c, children: m });
  });
bS.displayName = xS;
var Hm = "PopoverPortal",
  [J4, eD] = pS(Hm, { forceMount: void 0 }),
  SS = (e) => {
    const { __scopePopover: r, forceMount: i, children: l, container: s } = e,
      c = $r(Hm, r);
    return v.jsx(J4, {
      scope: r,
      forceMount: i,
      children: v.jsx(Um, {
        present: i || c.open,
        children: v.jsx(Om, { asChild: !0, container: s, children: l }),
      }),
    });
  };
SS.displayName = Hm;
var Bi = "PopoverContent",
  wS = _.forwardRef((e, r) => {
    const i = eD(Bi, e.__scopePopover),
      { forceMount: l = i.forceMount, ...s } = e,
      c = $r(Bi, e.__scopePopover);
    return v.jsx(Um, {
      present: l || c.open,
      children: c.modal
        ? v.jsx(tD, { ...s, ref: r })
        : v.jsx(nD, { ...s, ref: r }),
    });
  });
wS.displayName = Bi;
var tD = _.forwardRef((e, r) => {
    const i = $r(Bi, e.__scopePopover),
      l = _.useRef(null),
      s = nt(r, l),
      c = _.useRef(!1);
    return (
      _.useEffect(() => {
        const f = l.current;
        if (f) return Lb(f);
      }, []),
      v.jsx(Dm, {
        as: Na,
        allowPinchZoom: !0,
        children: v.jsx(ES, {
          ...e,
          ref: s,
          trapFocus: i.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Xe(e.onCloseAutoFocus, (f) => {
            var m;
            f.preventDefault(),
              c.current || (m = i.triggerRef.current) == null || m.focus();
          }),
          onPointerDownOutside: Xe(
            e.onPointerDownOutside,
            (f) => {
              const m = f.detail.originalEvent,
                g = m.button === 0 && m.ctrlKey === !0,
                h = m.button === 2 || g;
              c.current = h;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: Xe(e.onFocusOutside, (f) => f.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  nD = _.forwardRef((e, r) => {
    const i = $r(Bi, e.__scopePopover),
      l = _.useRef(!1),
      s = _.useRef(!1);
    return v.jsx(ES, {
      ...e,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        var f, m;
        (f = e.onCloseAutoFocus) == null || f.call(e, c),
          c.defaultPrevented ||
            (l.current || (m = i.triggerRef.current) == null || m.focus(),
            c.preventDefault()),
          (l.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (c) => {
        var g, h;
        (g = e.onInteractOutside) == null || g.call(e, c),
          c.defaultPrevented ||
            ((l.current = !0),
            c.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const f = c.target;
        ((h = i.triggerRef.current) == null ? void 0 : h.contains(f)) &&
          c.preventDefault(),
          c.detail.originalEvent.type === "focusin" &&
            s.current &&
            c.preventDefault();
      },
    });
  }),
  ES = _.forwardRef((e, r) => {
    const {
        __scopePopover: i,
        trapFocus: l,
        onOpenAutoFocus: s,
        onCloseAutoFocus: c,
        disableOutsidePointerEvents: f,
        onEscapeKeyDown: m,
        onPointerDownOutside: g,
        onFocusOutside: h,
        onInteractOutside: p,
        ...y
      } = e,
      b = $r(Bi, i),
      S = Ho(i);
    return (
      ub(),
      v.jsx(bm, {
        asChild: !0,
        loop: !0,
        trapped: l,
        onMountAutoFocus: s,
        onUnmountAutoFocus: c,
        children: v.jsx(xm, {
          asChild: !0,
          disableOutsidePointerEvents: f,
          onInteractOutside: p,
          onEscapeKeyDown: m,
          onPointerDownOutside: g,
          onFocusOutside: h,
          onDismiss: () => b.onOpenChange(!1),
          children: v.jsx(Db, {
            "data-state": AS(b.open),
            role: "dialog",
            id: b.contentId,
            ...S,
            ...y,
            ref: r,
            style: {
              ...y.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  _S = "PopoverClose",
  rD = _.forwardRef((e, r) => {
    const { __scopePopover: i, ...l } = e,
      s = $r(_S, i);
    return v.jsx(We.button, {
      type: "button",
      ...l,
      ref: r,
      onClick: Xe(e.onClick, () => s.onOpenChange(!1)),
    });
  });
rD.displayName = _S;
var aD = "PopoverArrow",
  iD = _.forwardRef((e, r) => {
    const { __scopePopover: i, ...l } = e,
      s = Ho(i);
    return v.jsx(jb, { ...s, ...l, ref: r });
  });
iD.displayName = aD;
function AS(e) {
  return e ? "open" : "closed";
}
var lD = vS,
  oD = bS,
  sD = SS,
  uD = wS;
function cD({ ...e }) {
  return v.jsx(lD, { "data-slot": "popover", ...e });
}
function fD({ ...e }) {
  return v.jsx(oD, { "data-slot": "popover-trigger", ...e });
}
function dD({ className: e, align: r = "center", sideOffset: i = 4, ...l }) {
  return v.jsx(sD, {
    children: v.jsx(uD, {
      "data-slot": "popover-content",
      align: r,
      sideOffset: i,
      className: ar(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...l,
    }),
  });
}
const hc = ({ content: e }) =>
    v.jsxs(cD, {
      children: [
        v.jsx(fD, {
          children: v.jsx(kR, {
            size: 14,
            color: "grey",
            className: "cursor-pointer pointer-events-auto",
          }),
        }),
        v.jsx(dD, { children: e }),
      ],
    }),
  Jn = { top: 30, right: 30, bottom: 26, left: 40 },
  Jd = ({
    width: e,
    height: r,
    data: i,
    previousYearData: l,
    min: s,
    max: c,
    unit: f,
    infoText: m,
  }) => {
    const [g, h] = _.useState(null),
      p = e - Jn.right - Jn.left,
      y = r - Jn.top - Jn.bottom,
      b = No().domain([s, c]).range([y, 0]),
      S = Yi().domain(To).range([0, p]),
      A = vy()
        .x((G) => (S(ft(G.DATE_OBSERVATION)) ?? 0) + S.bandwidth() / 2)
        .y1((G) => b(G.MESURE))
        .y0(b(s)),
      w = Du()
        .x((G) => (S(ft(G.DATE_OBSERVATION)) ?? 0) + S.bandwidth() / 2)
        .y((G) => b(G.MESURE)),
      T = A(i),
      M = A(l),
      R = w(l),
      L = vy()
        .x((G) => (S(ft(G.DATE_OBSERVATION)) ?? 0) + S.bandwidth() / 2)
        .y1((G) => b(G.NORMALE))
        .y0(b(s))(l);
    if (!T || !M || !R || !L) return null;
    const D = b.ticks(4),
      z = D.map((G, ae) => {
        const q = ae === D.length - 1;
        return v.jsx(
          "g",
          {
            children: v.jsx("line", {
              x1: -40,
              x2: q ? 10 : -40 / 2,
              y1: Math.floor(b(G)) + 0.5,
              y2: Math.floor(b(G)) + 0.5,
              stroke: "#212121",
              opacity: 0.5,
            }),
          },
          ae
        );
      }),
      Y = D.map((G, ae) => {
        const q = ae === D.length - 1;
        return v.jsxs(
          "div",
          {
            className: "absolute flex items-center gap-1",
            style: {
              left: 0 - Jn.left,
              top: b(G) - 24,
              fontSize: 15,
              color: "black",
            },
            children: [
              v.jsx("span", { children: G + " " + (q ? f : "") }),
              q && f !== "m3/s" && v.jsx(hc, { content: m }),
            ],
          },
          ae
        );
      }),
      te = S.domain().map((G) => {
        const ae = S(G) + S.bandwidth();
        return v.jsx(
          "line",
          { x1: ae, x2: ae, y1: 0, y2: r, stroke: "lightgray" },
          G
        );
      }),
      Z = (G) => {
        const ae = Math.floor(G / S.step());
        return ae >= 0 && ae < i.length ? i[ae] : null;
      },
      ne = (G) => {
        const ae = G.currentTarget.getBoundingClientRect(),
          q = G.clientX - ae.left,
          W = Z(q);
        if (W) {
          const { MESURE: fe, DATE_OBSERVATION: B, NORMALE: ee } = W,
            X = new Date(B),
            ie = l.find(($) => {
              const ce = new Date($.DATE_OBSERVATION);
              return (
                ce.getFullYear() === X.getFullYear() - 1 &&
                ce.getMonth() === X.getMonth()
              );
            }),
            N = (S(ft(B)) ?? 0) + S.bandwidth() / 2;
          h({
            xPos: N,
            yPos: b(fe ?? 0),
            title: Bh(B),
            text: v.jsxs("div", {
              className: "text-sm",
              children: [
                v.jsx("div", {
                  children:
                    "Niveau actuel: " +
                    (fe ? Math.round(fe * 100) / 100 + f : "-"),
                }),
                v.jsx("div", {
                  children:
                    "Année passée: " +
                    (ie ? Math.round(ie.MESURE * 100) / 100 + f : "-"),
                }),
                v.jsx("div", {
                  children:
                    "Moyenne: " + (ee ? Math.round(ee * 100) / 100 + f : "-"),
                }),
              ],
            }),
            tooltipYPos: -15,
          });
        }
      };
    return v.jsxs("div", {
      className: "relative",
      children: [
        v.jsx("div", {
          className: "absolute inset-0 pointer-events-none",
          style: {
            width: p,
            height: y,
            transform: `translate(${Jn.left}px, ${Jn.top}px)`,
          },
          children: Y,
        }),
        v.jsxs("svg", {
          width: e,
          height: r,
          children: [
            v.jsx(dc, {}),
            v.jsxs("g", {
              width: p,
              height: y,
              transform: `translate(${[Jn.left, Jn.top].join(",")})`,
              children: [
                te,
                v.jsx(c1, { path: T, areaOpacity: 1, areaColor: "#009EE0" }),
                v.jsx(c1, { path: M, areaOpacity: 0.18, areaColor: "#B3E2F6" }),
                v.jsx(Q4, { path: R, color: "#B3E2F6" }),
                v.jsx("path", {
                  d: L,
                  fill: "url(#diagonalLines)",
                  stroke: "black",
                  fillOpacity: 0.8,
                  strokeOpacity: 0.4,
                }),
                v.jsx(Yu, { xScale: S, y: y + 20 }),
                z,
                v.jsx(vm, { interactionData: g }),
                v.jsx("rect", {
                  x: 0,
                  y: 0,
                  width: p,
                  height: y,
                  onMouseMove: ne,
                  onMouseLeave: () => h(null),
                  visibility: "hidden",
                  pointerEvents: "all",
                  cursor: "pointer",
                }),
              ],
            }),
          ],
        }),
        v.jsx(pm, { interactionData: g }),
      ],
    });
  },
  hD =
    "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/5/query?where=1%3D1&outFields=*&returnGeometry=false&f=json",
  f1 = (e, r) =>
    e.filter((i) => {
      const l = new Date(i.DATE_OBSERVATION),
        s = l.getFullYear() === r && l.getMonth() <= 7,
        c = l.getFullYear() === r - 1 && l.getMonth() > 7;
      return s || c;
    }),
  mD = ({ width: e }) => {
    var S;
    const r = _.useRef(null),
      [i, l] = _.useState(2024),
      [s, c] = _.useState([]),
      [f, m] = _.useState(!0),
      [g, h] = _.useState(null);
    _.useEffect(() => {
      (async () => {
        try {
          m(!0);
          const w = await fetch(hD);
          if (!w.ok) throw new Error("Failed to fetch data");
          const T = await w.json();
          c(T.features.map((M) => M.attributes));
        } catch (w) {
          h(w.message);
        } finally {
          m(!1);
        }
      })();
    }, []);
    const p = f1(s, i),
      y = f1(s, i - 1),
      b = (S = p[0]) == null ? void 0 : S.TYPE_ANNEE;
    return f
      ? v.jsx("p", { children: "Loading..." })
      : g
      ? v.jsxs("p", { children: ["Error: ", g] })
      : v.jsxs(v.Fragment, {
          children: [
            v.jsx("h2", { children: "Tendance des niveaux des eaux" }),
            v.jsx("span", {
              className: "subtitle",
              children:
                "L’évolution des réserves d’eaux sur les 12 derniers mois",
            }),
            v.jsxs("div", {
              className: "my-8",
              children: [
                v.jsxs("div", {
                  className: "flex items-center gap-2 ",
                  children: [
                    v.jsx("span", { children: "Selectionnez l'année: " }),
                    v.jsx(zm, { setYear: l, year: i }),
                    v.jsx(ym, { yearType: b }),
                  ],
                }),
                v.jsxs("div", {
                  className: "flex items-center gap-2 my-2",
                  children: [
                    v.jsx("span", { children: "Clé de lecture" }),
                    v.jsx("div", { className: "w-8 h-6 bg-[#009EE0]" }),
                    v.jsx("span", { children: "Année sélectionnée" }),
                    v.jsx("div", {
                      className: "w-8 h-6  border border-[#B3E2F6]",
                      style: { backgroundColor: "rgba(179, 226, 246, 0.18)" },
                    }),
                    v.jsx("span", { children: "Année précédente" }),
                    v.jsx("div", {
                      className: "w-8 h-6 border border-black",
                      children: v.jsxs("svg", {
                        children: [
                          v.jsx(dc, {}),
                          v.jsx("rect", {
                            x: 0,
                            width: 31,
                            y: 0,
                            height: 23,
                            fill: "url(#diagonalLines)",
                          }),
                        ],
                      }),
                    }),
                    v.jsx("span", { children: "Normale" }),
                    " ",
                    v.jsx(hc, { content: v.jsx("p", { children: "TODO" }) }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              ref: r,
              children: [
                v.jsx("p", {
                  className: "font-bold bricolageFont",
                  style: { fontSize: 19, marginTop: 30 },
                  children: "Nappe de la Craie",
                }),
                v.jsx(Jd, {
                  data: p.filter((A) => A.ENDROIT === "Craie"),
                  previousYearData: y.filter((A) => A.ENDROIT === "Craie"),
                  width: e,
                  height: 300,
                  min: 15,
                  max: 18,
                  unit: "mNGF",
                  infoText: v.jsx("p", { children: "TODO: info section" }),
                }),
                v.jsx("p", {
                  className: "font-bold bricolageFont",
                  style: { fontSize: 19, marginTop: 30 },
                  children: "Rivière Lys",
                }),
                v.jsx(Jd, {
                  data: p.filter((A) => A.ENDROIT === "Lys"),
                  previousYearData: y.filter((A) => A.ENDROIT === "Lys"),
                  width: e,
                  height: 300,
                  min: 0,
                  max: 10,
                  unit: "m3/s",
                  infoText: v.jsx("p", { children: "TODO: info section" }),
                }),
                v.jsx("p", {
                  className: "font-bold bricolageFont",
                  style: { fontSize: 19, marginTop: 30 },
                  children: "Nappe du Carbonifère",
                }),
                v.jsx(Jd, {
                  data: p.filter((A) => A.ENDROIT === "Carbonifère"),
                  previousYearData: y.filter(
                    (A) => A.ENDROIT === "Carbonifère"
                  ),
                  width: e,
                  height: 300,
                  min: -70,
                  max: -50,
                  unit: "mNGF",
                  infoText: v.jsx("p", { children: "TODO: info section" }),
                }),
              ],
            }),
            v.jsx("div", {
              className: "flex text-sm mt-8",
              style: { fontSize: 11, color: "#212121" },
              children: v.jsx("p", {
                children: "Source et notes: insérer des choses ici.",
              }),
            }),
          ],
        });
  },
  d1 = ({ width: e, height: r, max: i, value: l, date: s, style: c }) => {
    const f = WM().domain([0, i]).range([0, r]),
      g = TR()
        .innerRadius(0)
        .outerRadius(f(l))
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)(e / 2),
      h = new Date(s),
      p = new Intl.DateTimeFormat("fr-FR", {
        month: "short",
        year: "numeric",
      }).format(h),
      y = Math.round(l).toLocaleString("en-US").replace(/,/g, " ");
    return v.jsxs("div", {
      className: "flex flex-col items-center gap-2",
      children: [
        v.jsx("span", { className: "font-bold text-md", children: p }),
        v.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            v.jsxs("span", { className: "", children: [y + " m3/j", " "] }),
            v.jsx(hc, { content: v.jsx("p", { children: "TODO" }) }),
          ],
        }),
        v.jsx("svg", {
          width: e,
          height: r,
          children: v.jsx("path", {
            d: g,
            transform: `translate(${e / 2},${r})`,
            style: c,
          }),
        }),
      ],
    });
  },
  gD =
    "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/6/query?where=1%3D1&outFields=*&returnGeometry=false&f=json",
  pD = ({ width: e }) => {
    var y, b;
    const r = _.useRef(null),
      [i, l] = _.useState([]),
      [s, c] = _.useState(!0),
      [f, m] = _.useState(null);
    if (
      (_.useEffect(() => {
        (async () => {
          try {
            c(!0);
            const A = await fetch(gD);
            if (!A.ok) throw new Error("Failed to fetch data");
            const w = await A.json();
            l(w.features.map((T) => T.attributes));
          } catch (A) {
            m(A.message);
          } finally {
            c(!1);
          }
        })();
      }, []),
      s)
    )
      return v.jsx("p", { children: "Loading..." });
    if (f) return v.jsxs("p", { children: ["Error: ", f] });
    const g = i.sort((S, A) => S.DATE_OBSERVATION - A.DATE_OBSERVATION)[
      i.length - 1
    ];
    console.log("lastDataPoint", g);
    const h = new Date(g.DATE_OBSERVATION),
      p = i.filter((S) => {
        const A = new Date(S.DATE_OBSERVATION);
        return (
          A.getFullYear() === h.getFullYear() - 1 &&
          A.getMonth() === h.getMonth()
        );
      });
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("h2", { children: "Et les prélèvements dans tout ça ?" }),
        v.jsx("span", {
          className: "subtitle",
          children: "Quantité d’eau prelevée, toutes sources confondues",
        }),
        v.jsx("div", {
          className: "my-8",
          children: v.jsxs("div", {
            className: "flex items-center gap-2 my-2",
            children: [
              v.jsx("span", { children: "Clé de lecture" }),
              v.jsx("div", { className: "w-8 h-6 bg-[#009EE0]" }),
              v.jsx("span", { children: "Mois dernier" }),
              v.jsx("div", {
                className: "w-8 h-6  border border-[#B3E2F6]",
                style: { backgroundColor: "rgba(179, 226, 246, 0.18)" },
              }),
              v.jsx("span", { children: "Année précédente" }),
            ],
          }),
        }),
        v.jsxs("div", {
          className: "flex gap-8",
          ref: r,
          children: [
            v.jsx(d1, {
              width: e / 2,
              height: 150,
              value: g == null ? void 0 : g.VOLUME_PRELEVE,
              min: 0,
              max: 2e5,
              style: { fill: "#009EE0", stroke: "#009EE0" },
              date: g == null ? void 0 : g.DATE_OBSERVATION,
            }),
            v.jsx(d1, {
              width: e / 2,
              height: 150,
              value: (y = p[0]) == null ? void 0 : y.VOLUME_PRELEVE,
              min: 0,
              max: 2e5,
              style: { fill: PE("#B3E2F6", 0.18), stroke: "#B3E2F6" },
              date: (b = p[0]) == null ? void 0 : b.DATE_OBSERVATION,
            }),
          ],
        }),
        v.jsx("div", {
          className: "flex text-sm mt-8",
          style: { fontSize: 11, color: "#212121" },
          children: v.jsx("p", {
            children: "Source et notes: insérer des choses ici.",
          }),
        }),
      ],
    });
  },
  er = [
    {
      question: v.jsx(v.Fragment, {
        children:
          "Il a plu hier soir chez moi et on a eu un printemps pourri. Il n’y aura donc pas de sécheresse cette année.",
      }),
      goodAnswer: !1,
      explanation: v.jsxs("p", {
        children: [
          v.jsx("b", { children: "Faux!" }),
          v.jsx("br", {}),
          "Cela dépend de la période où il pleut. S’il pleut alors que les sols sont secs, l’eau ruisselle sans recharger les nappes. La recharge hivernale est cruciale pour éviter des arrêtés sécheresse au printemps et en été.",
        ],
      }),
    },
    {
      question: v.jsx(v.Fragment, {
        children: "L’eau du robinet vient des stations d’épuration.",
      }),
      goodAnswer: !1,
      explanation: v.jsxs("p", {
        children: [
          v.jsx("b", { children: "Faux!" }),
          v.jsx("br", {}),
          "L’eau du robinet provient des usines de traitement d’eau potable, issues des cours d’eau ou des nappes souterraines. Les stations d’épuration renvoient l’eau traitée dans les cours d’eau.",
        ],
      }),
    },
    {
      question: v.jsx(v.Fragment, {
        children:
          "Dans le Nord, il pleut tellement de toute manière qu'on ne manquera jamais d'eau",
      }),
      goodAnswer: !1,
      explanation: v.jsxs("p", {
        children: [
          v.jsx("b", { children: "Faux!" }),
          v.jsx("br", {}),
          "Les ressources en eau sont limitées et varient selon les usages et les saisons. Même dans les régions pluvieuses, elles ne sont pas inépuisables, notamment avec le changement climatique.",
        ],
      }),
    },
    {
      question: v.jsx(v.Fragment, {
        children:
          "Les nappes phréatiques se rechargent rapidement après une pluie",
      }),
      goodAnswer: !1,
      explanation: v.jsxs("p", {
        children: [
          v.jsx("b", { children: "Faux!" }),
          v.jsx("br", {}),
          "La recharge des nappes dépend des conditions géologiques. Dans certains cas, elle peut prendre des années, voire des décennies, surtout si la nappe est profonde.",
        ],
      }),
    },
    {
      question: v.jsx(v.Fragment, {
        children:
          "La neige contribue plus que la pluie au remplissage des nappes",
      }),
      goodAnswer: !0,
      explanation: v.jsxs("p", {
        children: [
          v.jsx("b", { children: "Vrai!" }),
          v.jsx("br", {}),
          "La neige fond lentement, humidifie progressivement les sols et favorise une meilleure infiltration de l’eau vers les nappes souterraines.",
        ],
      }),
    },
  ],
  vD = ({ width: e }) => {
    const [r, i] = _.useState(0),
      [l, s] = _.useState(!1),
      [c, f] = _.useState(null);
    return v.jsxs("div", {
      className: "m-2",
      style: { width: e },
      children: [
        v.jsx("div", {
          className: "flex gap-2 mt-2",
          children: er.map((m, g) =>
            v.jsx(
              "div",
              {
                className:
                  "cursor-pointer relative flex justify-center items-center h-4 w-4 rounded-full border border-black",
                onClick: () => {
                  i(g);
                },
                style: { backgroundColor: "#F7F5F0" },
                children:
                  g === r &&
                  v.jsx("div", { className: "h-2 w-2 rounded-full bg-black" }),
              },
              g
            )
          ),
        }),
        v.jsx("div", {
          style: { backgroundColor: "#F7F5F0" },
          className:
            "mt-5 rounded-2xl border border-black min-h-36 p-6 flex items-center max-w-[495px]",
          children: v.jsx("p", { children: er[r].question }),
        }),
        v.jsxs("div", {
          className: "flex gap-4 mt-5",
          children: [
            v.jsx(h1, {
              label: "Vrai",
              onClick: () => {
                s(!0), f(er[r].goodAnswer === !0);
              },
              isRightAnswered: !!(c && er[r].goodAnswer === !0),
              isWrongAnswered: c === !1 && er[r].goodAnswer === !0,
            }),
            v.jsx(h1, {
              label: "Faux",
              onClick: () => {
                s(!0), f(er[r].goodAnswer === !1);
              },
              isRightAnswered: !!(c && er[r].goodAnswer === !1),
              isWrongAnswered: c === !1 && er[r].goodAnswer === !1,
            }),
          ],
        }),
        l &&
          v.jsx("div", {
            className: "mt-10",
            children: v.jsx("p", { children: er[r].explanation }),
          }),
        l &&
          r < 4 &&
          v.jsx("div", {
            style: { backgroundColor: "#F7F5F0" },
            className:
              "mt-5 cursor-pointer rounded-2xl border border-black inline-block px-12 py-2 bricolageFont",
            onClick: () => {
              i(r + 1), s(!1), f(null);
            },
            children: "Continuer",
          }),
      ],
    });
  },
  h1 = ({
    label: e,
    isRightAnswered: r = !1,
    isWrongAnswered: i = !1,
    onClick: l,
  }) =>
    v.jsxs("div", {
      className: ar(
        "relative cursor-pointer rounded-xl border border-black flex items-center px-12 py-3 bricolageFont",
        r ? "bg-[#84D0F0]" : "bg-button-background"
      ),
      onClick: l,
      children: [
        i &&
          v.jsx("div", {
            className:
              "bricolageFont rounded-xl absolute inset-0 bg-[repeating-linear-gradient(#e9e5d8_0px,_#e9e5d8_5px,_black_5px,_black_6px)]",
          }),
        v.jsx("p", { className: "relative", children: e }),
      ],
    }),
  m1 = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  g1 = b1,
  yD = (e, r) => (i) => {
    var l;
    if ((r == null ? void 0 : r.variants) == null)
      return g1(
        e,
        i == null ? void 0 : i.class,
        i == null ? void 0 : i.className
      );
    const { variants: s, defaultVariants: c } = r,
      f = Object.keys(s).map((h) => {
        const p = i == null ? void 0 : i[h],
          y = c == null ? void 0 : c[h];
        if (p === null) return null;
        const b = m1(p) || m1(y);
        return s[h][b];
      }),
      m =
        i &&
        Object.entries(i).reduce((h, p) => {
          let [y, b] = p;
          return b === void 0 || (h[y] = b), h;
        }, {}),
      g =
        r == null || (l = r.compoundVariants) === null || l === void 0
          ? void 0
          : l.reduce((h, p) => {
              let { class: y, className: b, ...S } = p;
              return Object.entries(S).every((A) => {
                let [w, T] = A;
                return Array.isArray(T)
                  ? T.includes({ ...c, ...m }[w])
                  : { ...c, ...m }[w] === T;
              })
                ? [...h, y, b]
                : h;
            }, []);
    return g1(
      e,
      f,
      g,
      i == null ? void 0 : i.class,
      i == null ? void 0 : i.className
    );
  },
  xD = yD(
    "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-4xl text-sm font-thin transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
          destructive:
            "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
          outline:
            "border border-black/60 bg-button-background shadow-xs hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-7 px-6 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  );
function eh({ className: e, variant: r, size: i, asChild: l = !1, ...s }) {
  const c = l ? Na : "button";
  return v.jsx(c, {
    "data-slot": "button",
    className: ar(xD({ variant: r, size: i, className: e })),
    ...s,
  });
}
const bD = (e) => {
    const { height: r, width: i, x: l, y: s } = e,
      c = Xi({ to: { y: s, height: r } });
    return v.jsx(Pi.rect, {
      x: l,
      y: c.y,
      width: i,
      height: c.height,
      stroke: "#009EE0",
      fill: "#009EE0",
      fillOpacity: 1,
      opacity: 1,
      strokeWidth: 1,
      rx: 1,
    });
  },
  Sa = { top: 30, right: 30, bottom: 30, left: 40 },
  SD = 0.3,
  wD = ({ width: e, height: r, data: i, annotation: l }) => {
    const [s, c] = _.useState(null),
      f = e - Sa.right - Sa.left,
      m = r - Sa.top - Sa.bottom,
      g = _.useMemo(() => Yi().domain(To).range([0, f]).padding(SD), [i, e]),
      h = _.useMemo(() => {
        const w = Math.max(
          ...i.map((T) => Math.max(T.MESURE || 0, T.NORMALE || 0))
        );
        return No().domain([0, w]).range([m, 0]);
      }, [i, r]),
      p = i.map((w, T) => {
        const M = g(ft(w.DATE_OBSERVATION));
        return M
          ? v.jsxs(
              "g",
              {
                children: [
                  v.jsx(bD, {
                    x: M,
                    width: g.bandwidth(),
                    y: h(w.MESURE || 0),
                    height: h(0) - h(w.MESURE || 0),
                  }),
                  v.jsx("rect", {
                    x: M,
                    width: g.bandwidth(),
                    y: h(w.NORMALE || 0),
                    height: h(0) - h(w.NORMALE || 0),
                    stroke: "black",
                    fill: "url(#diagonalLines)",
                    fillOpacity: 1,
                    opacity: 1,
                    strokeWidth: 0.5,
                    rx: 1,
                  }),
                ],
              },
              T
            )
          : null;
      }),
      y = h.ticks(5),
      b = y.map((w, T) => {
        const M = T === y.length - 1;
        return v.jsxs(
          "g",
          {
            children: [
              v.jsx("line", {
                x1: -40,
                x2: M ? 10 : -40 / 2,
                y1: Math.floor(h(w)) + 0.5,
                y2: Math.floor(h(w)) + 0.5,
                stroke: "#212121",
                opacity: 0.5,
              }),
              v.jsx("text", {
                x: 0 - Sa.left,
                y: h(w) - 10,
                textAnchor: "start",
                alignmentBaseline: "central",
                fontSize: 15,
                fill: "black",
                children: w + (M ? " mm" : ""),
              }),
            ],
          },
          T
        );
      }),
      S = (w) => {
        const T = Math.floor(w / g.step());
        return T >= 0 && T < i.length ? i[T] : null;
      },
      A = (w) => {
        const T = w.currentTarget.getBoundingClientRect(),
          M = w.clientX - T.left,
          R = S(M);
        if (R) {
          const { MESURE: O, DATE_OBSERVATION: L } = R;
          c({
            xPos: (g(ft(L)) ?? 0) + g.bandwidth() / 2,
            yPos: h(O ?? 0),
            tooltipYPos: -15,
            title: Bh(L),
            text: O ? Math.round(O * 100) / 100 + " mm de recharge" : "-",
          });
        }
      };
    return v.jsxs("div", {
      className: "relative",
      style: { width: e, height: r },
      children: [
        l &&
          v.jsx("div", {
            className:
              "absolute inset-0 w-full h-full flex justify-center items-center",
            children: v.jsx("p", { className: "max-w-72", children: l }),
          }),
        v.jsxs("svg", {
          width: e,
          height: r,
          children: [
            v.jsx(dc, {}),
            v.jsxs("g", {
              width: f,
              height: m,
              transform: `translate(${[Sa.left, Sa.top].join(",")})`,
              children: [
                !l && b,
                p,
                v.jsx(Yu, { xScale: g, y: m + 20 }),
                v.jsx("rect", {
                  x: 0,
                  y: 0,
                  width: f,
                  height: m,
                  onMouseMove: A,
                  onMouseLeave: () => c(null),
                  visibility: "hidden",
                  pointerEvents: "all",
                  cursor: "pointer",
                }),
                v.jsx(vm, { interactionData: s }),
              ],
            }),
          ],
        }),
        v.jsx(pm, { interactionData: s }),
      ],
    });
  },
  ED =
    "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/7/query?where=1%3D1&outFields=*&returnGeometry=false&f=json",
  _D = ({ width: e }) => {
    var A;
    const r = _.useRef(null),
      [i, l] = _.useState(2024),
      [s, c] = _.useState("Craie"),
      [f, m] = _.useState([]),
      [g, h] = _.useState(!0),
      [p, y] = _.useState(null);
    _.useEffect(() => {
      (async () => {
        try {
          h(!0);
          const T = await fetch(ED);
          if (!T.ok) throw new Error("Failed to fetch data");
          const M = await T.json();
          m(M.features.map((R) => R.attributes));
        } catch (T) {
          y(T.message);
        } finally {
          h(!1);
        }
      })();
    }, []);
    const b = f.filter((w) => {
        const T = new Date(w.DATE_OBSERVATION),
          M = T.getFullYear() === i && T.getMonth() <= 7,
          R = T.getFullYear() === i - 1 && T.getMonth() > 7;
        return (M || R) && w.ENDROIT === s;
      }),
      S = (A = b[0]) == null ? void 0 : A.TYPE_ANNEE;
    return g
      ? v.jsx("p", { children: "Loading..." })
      : p
      ? v.jsxs("p", { children: ["Error: ", p] })
      : v.jsxs(v.Fragment, {
          children: [
            v.jsx("h2", { children: "Quel cumul de recharge ?" }),
            v.jsx("span", {
              className: "subtitle",
              children: "L'évolution des recharges sur les 12 derniers mois",
            }),
            v.jsxs("div", {
              className: "flex items-center gap-2 mt-6",
              children: [
                v.jsx("span", { children: "Selectionnez l'année: " }),
                v.jsx(zm, { setYear: l, year: i }),
                v.jsx(ym, { yearType: S }),
              ],
            }),
            v.jsxs("div", {
              className: "flex items-center gap-2 mt-4",
              children: [
                v.jsx("span", { children: "Selectionnez la source: " }),
                v.jsx(eh, {
                  onClick: () => {
                    c("Lys");
                  },
                  variant: s === "Lys" ? "default" : "outline",
                  children: "Lys",
                }),
                v.jsx(eh, {
                  onClick: () => {
                    c("Craie");
                  },
                  variant: s === "Craie" ? "default" : "outline",
                  children: "Craie",
                }),
                v.jsx(eh, {
                  onClick: () => {
                    c("Carbonifère");
                  },
                  variant: s === "Carbonifère" ? "default" : "outline",
                  children: "Carbonifère",
                }),
              ],
            }),
            v.jsxs("div", {
              className: "flex items-center gap-2 mt-6",
              children: [
                v.jsx("span", { children: "Clé de lecture:" }),
                v.jsx("div", { className: "w-8 h-6 bg-[#009EE0]" }),
                v.jsx("span", {
                  className: "mr-4",
                  children: "Année sélectionnée",
                }),
                v.jsx("div", {
                  className: "w-8 h-6 border border-black",
                  children: v.jsxs("svg", {
                    children: [
                      v.jsx(dc, {}),
                      v.jsx("rect", {
                        x: 0,
                        width: 31,
                        y: 0,
                        height: 23,
                        fill: "url(#diagonalLines)",
                      }),
                    ],
                  }),
                }),
                v.jsx("span", { children: "Normale" }),
                " ",
                v.jsx(hc, { content: v.jsx("p", { children: "TODO" }) }),
              ],
            }),
            v.jsx("div", {
              ref: r,
              children: v.jsx(wD, {
                data: b,
                width: e,
                height: 400,
                annotation:
                  s === "Carbonifère"
                    ? v.jsx("p", {
                        children:
                          "Pour la nappe du Carbonifère, la recharge via les pluies est nulle sur le territoire français.",
                      })
                    : void 0,
              }),
            }),
            v.jsx("div", {
              className: "flex text-sm mt-8",
              style: { fontSize: 11, color: "#212121" },
              children: v.jsx("p", {
                children: "Source et notes: insérer des choses ici.",
              }),
            }),
          ],
        });
  },
  AD = () =>
    v.jsxs(v.Fragment, {
      children: [
        v.jsxs("div", {
          className: "mt-4 inline-block",
          children: [
            v.jsx("h3", {
              className: "font-semibold bricolageFont",
              children: "Niveaux d'eau :",
            }),
            v.jsx("p", { className: "mt-2", children: "Ce mois-ci :" }),
            v.jsxs("div", {
              className: "flex gap-4 mt-4 text-sm",
              children: [
                v.jsx(p1, { isSmall: !0, label: "niveaux alarmants" }),
                v.jsx(p1, { isSmall: !1, label: "niveaux confortables" }),
              ],
            }),
          ],
        }),
        v.jsx("p", {
          className: "mt-10",
          children: "Depuis le mois précédent, les niveaux d’eau ont/sont :",
        }),
        v.jsx("div", {
          className: "flex gap-4 mt-4 text-sm",
          children: KR.map((e, r) =>
            v.jsxs(
              "div",
              {
                className: "flex items-center gap-2",
                children: [v.jsx(Ax, { levelName: e }), e],
              },
              r
            )
          ),
        }),
        v.jsx("div", {
          className: "mt-12",
          children: v.jsx("h3", {
            className: "font-semibold mt-12 bricolageFont",
            children: "États d'alerte :",
          }),
        }),
        v.jsx("div", {
          className: "inline-block",
          children: v.jsxs("div", {
            className: "flex gap-12 mt-4 text-sm",
            children: [
              v.jsxs("div", {
                children: [
                  v.jsx("div", {
                    className: "block border-b mb-4 ",
                    children: v.jsx("p", {
                      className: "text-center",
                      children: "sécheresse",
                    }),
                  }),
                  v.jsxs("div", {
                    className: "flex gap-6",
                    children: [
                      v.jsxs("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                          v.jsx("svg", {
                            width: 60,
                            height: 60,
                            className: "overflow-visible",
                            children: v.jsx(_i, {
                              alert: "Non",
                              cx: 30,
                              cy: 30,
                              r: 30,
                            }),
                          }),
                          v.jsx("span", { children: "Non" }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                          v.jsx("svg", {
                            width: 60,
                            height: 60,
                            className: "overflow-visible",
                            children: v.jsx(_i, {
                              alert: "Vigilance",
                              cx: 30,
                              cy: 30,
                              r: 30,
                            }),
                          }),
                          v.jsx("span", { children: "Vigilance" }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                          v.jsx("svg", {
                            width: 60,
                            height: 60,
                            className: "overflow-visible",
                            children: v.jsx(_i, {
                              alert: "Alerte",
                              cx: 30,
                              cy: 30,
                              r: 30,
                            }),
                          }),
                          v.jsx("span", { children: "Alerte" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("div", {
                    className: "block border-b mb-4 ",
                    children: v.jsx("p", {
                      className: "text-center",
                      children: "arrêté préfectoral",
                    }),
                  }),
                  v.jsxs("div", {
                    className: "flex gap-6",
                    children: [
                      v.jsxs("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                          v.jsx("svg", {
                            width: 60,
                            height: 60,
                            className: "overflow-visible",
                            children: v.jsx(_i, {
                              alert: "Non",
                              cx: 30,
                              cy: 30,
                              r: 30,
                            }),
                          }),
                          v.jsx("span", { children: "Non" }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                          v.jsx("svg", {
                            width: 60,
                            height: 60,
                            className: "overflow-visible",
                            children: v.jsx(_i, {
                              alert: "Non",
                              cx: 30,
                              cy: 30,
                              r: 30,
                              isPrefectoral: !0,
                            }),
                          }),
                          v.jsx("span", { children: "Oui" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  p1 = ({ isSmall: e, label: r }) =>
    v.jsxs("div", {
      children: [
        v.jsx("div", {
          className: "block border-b mb-4 ",
          children: v.jsx("p", { className: "text-center", children: r }),
        }),
        v.jsx("div", {
          className: "flex gap-6",
          children: wx.map((i, l) =>
            (e && l > 2) || (!e && l <= 2)
              ? null
              : v.jsxs(
                  "div",
                  {
                    className: "flex items-center",
                    children: [
                      v.jsx("span", {
                        className: "inline-block w-5 h-5 rounded-full ",
                        style: { backgroundColor: Ex(i) },
                      }),
                      v.jsx("span", { className: "ml-2", children: i }),
                    ],
                  },
                  l
                )
          ),
        }),
      ],
    }),
  TD = () =>
    v.jsxs(v.Fragment, {
      children: [
        v.jsx("h2", { children: "L'état des lieux" }),
        v.jsxs("span", {
          className: "subtitle",
          children: [
            "Niveaux d’eau dans les champs captants de la Craie et du Carbonifère, débits sur le cours d’eau de la Lys",
            " ",
          ],
        }),
        v.jsx("div", { className: "w-full", children: v.jsx(AD, {}) }),
      ],
    });
function MD() {
  const e = _.useRef(null),
    i = new URLSearchParams(window.location.search).get("section"),
    l = _x(e);
  return i
    ? v.jsxs("div", {
        className: "w-full",
        ref: e,
        children: [
          i === "recharge" && v.jsx(_D, { width: l.width }),
          i === "meteo" && v.jsx(P4, { width: l.width }),
          i === "niveaux" && v.jsx(mD, { width: l.width }),
          i === "prelevement" && v.jsx(pD, { width: l.width }),
          i === "quizz" && v.jsx(vD, { width: l.width }),
          i === "map" && v.jsx(oN, {}),
          i === "legend" && v.jsx(TD, {}),
        ],
      })
    : v.jsxs(v.Fragment, {
        children: [
          v.jsx("a", {
            href: "http://localhost:5173/MEL/?section=recharge",
            children: "recharge",
          }),
          v.jsx("br", {}),
          v.jsx("a", {
            href: "http://localhost:5173/MEL/?section=meteo",
            children: "meteo",
          }),
          v.jsx("br", {}),
          v.jsx("a", {
            href: "http://localhost:5173/MEL/?section=niveaux",
            children: "niveaux",
          }),
          v.jsx("br", {}),
          v.jsx("a", {
            href: "http://localhost:5173/MEL/?section=prelevement",
            children: "prelevement",
          }),
          v.jsx("br", {}),
          v.jsx("a", {
            href: "http://localhost:5173/MEL/?section=quizz",
            children: "quizz",
          }),
          v.jsx("br", {}),
          v.jsx("a", {
            href: "http://localhost:5173/MEL/?section=map",
            children: "map",
          }),
          v.jsx("br", {}),
          v.jsx("a", {
            href: "http://localhost:5173/MEL/?section=legend",
            children: "legend",
          }),
        ],
      });
}
aE.createRoot(document.getElementById("root")).render(
  v.jsx(_.StrictMode, { children: v.jsx(MD, {}) })
);
