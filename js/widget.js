! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 25)
}({
    25: function(e, t, n) {
        e.exports = n(26)
    },
    26: function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        window.CLUTCHCO = window.CLUTCHCO || {
            loaded: !1
        }, window.CLUTCHCO.items = [], window.CLUTCHCO.Init = function() {
            function e(e) {
                this.id = Math.random(), this.container = e;
                let t = e.getAttribute("data-url"),
                    n = e.getAttribute("data-clutchcompany-id"),
                    i = e.getAttribute("data-widget-type"),
                    o = e.getAttribute("data-darkbg"),
                    r = e.getAttribute("data-clutchcompany-domain"),
                    a = function(e) {
                        let t = /(px|%)/i,
                            n = "";
                        return e && e.length > 0 && (n = t.test(e) ? e : e + "px"), n
                    }(e.getAttribute("data-height")),
                    d = document.createElement("iframe"),
                    c = "",
                    s = e.getAttribute("data-theme"),
                    u = e.getAttribute("data-header-color"),
                    l = e.getAttribute("data-header-text-color"),
                    f = e.getAttribute("data-footer-color"),
                    m = e.getAttribute("data-footer-text-color"),
                    g = e.getAttribute("data-primary-color"),
                    h = e.getAttribute("data-secondary-color"),
                    p = e.getAttribute("data-background-color"),
                    w = e.getAttribute("data-review-card-color");
                "https://clutch.co" !== t && "http://clutch.co" !== t && "http://widget.clutch.co" !== t || (t = "https://widget.clutch.co"), d.setAttribute("id", "iframe-" + this.id), o && (c = " Dark"), window.addEventListener("message", (function(e) {
                    d.setAttribute("title", e.data + i + c)
                })), d.style.border = "none", d.allowTransparency = !0, d.width = "100%";
                let b = "?ref_domain=" + window.location.hostname;
                n && (b += "&uid=" + n), r && (b += "&domain=" + r), s && (b += "&theme=" + s), u && (b += "&header_color=" + encodeURIComponent(u)), l && (b += "&header_text_color=" + encodeURIComponent(l)), f && (b += "&footer_color=" + encodeURIComponent(f)), m && (b += "&footer_text_color=" + encodeURIComponent(m)), g && (b += "&primary_color=" + encodeURIComponent(g)), h && (b += "&secondary_color=" + encodeURIComponent(h)), p && (b += "&background_color=" + encodeURIComponent(p)), w && (b += "&review_card_color=" + encodeURIComponent(w)), b += "&ref_path=" + window.location.pathname, d.src = o ? t + "/widgets/get/" + i + "/darkbg" + b : t + "/widgets/get/" + i + b, d.height = "4" === i || "5" === i && "autopx" === a ? "600px" : "autopx" === a ? "auto" : a, e.appendChild(d), "true" === e.getAttribute("data-expandifr") && iFrameResize({
                    log: !1,
                    checkOrigin: !1,
                    inPageLinks: !0,
                    heightCalculationMethod: "bodyOffset"
                }, d), d.onload = function() {
                    d.style.display = "block"
                }, window.CLUTCHCO.items.push(d)
            }
            let t;
            if (document.getElementsByClassName) t = document.getElementsByClassName("clutch-widget");
            else if (document.querySelectorAll) t = document.querySelectorAll(".clutch-widget");
            else {
                let e = [],
                    n = new RegExp("(^| )clutch-widget( |$)"),
                    i = document.body.getElementsByTagName("*");
                for (let t = 0, o = i.length; t < o; t++) n.test(i[t].className) && e.push(i[t]);
                t = e
            }
            if (!t || t.length < 1) return;
            let n = t.length;
            for (let i = 0; i < n; i++) {
                let n = t[i];
                n.querySelector("iframe") || new e(n)
            }
        }, window.CLUTCHCO.Destroy = function() {
            for (let e = 0; e < window.CLUTCHCO.items.length; e++) window.CLUTCHCO.items[e].parentElement.removeChild(window.CLUTCHCO.items[e]);
            window.CLUTCHCO.items = []
        }, document.addEventListener("readystatechange", (function(e) {
            "loading" !== e.target.readyState && !1 === window.CLUTCHCO.loaded && window.CLUTCHCO.Init()
        }))
    },
    27: function(e, t, n) {
        var i, o, r;
        /*! iFrame Resizer (iframeSizer.min.js ) - v4.3.1 - 2021-01-11
         *  Desc: Force cross domain iframes to size to content.
         *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
         *  Copyright: (c) 2021 David J. Bradshaw - dave@bradshaw.net
         *  License: MIT
         */
        ! function(n) {
            if ("undefined" != typeof window) {
                var a, d = 0,
                    c = !1,
                    s = !1,
                    u = "message".length,
                    l = "[iFrameSizer]",
                    f = l.length,
                    m = null,
                    g = window.requestAnimationFrame,
                    h = {
                        max: 1,
                        scroll: 1,
                        bodyScroll: 1,
                        documentElementScroll: 1
                    },
                    p = {},
                    w = null,
                    b = {
                        autoResize: !0,
                        bodyBackground: null,
                        bodyMargin: null,
                        bodyMarginV1: 8,
                        bodyPadding: null,
                        checkOrigin: !0,
                        inPageLinks: !1,
                        enablePublicMethods: !0,
                        heightCalculationMethod: "bodyOffset",
                        id: "iFrameResizer",
                        interval: 32,
                        log: !1,
                        maxHeight: 1 / 0,
                        maxWidth: 1 / 0,
                        minHeight: 0,
                        minWidth: 0,
                        mouseEvents: !0,
                        resizeFrom: "parent",
                        scrolling: !1,
                        sizeHeight: !0,
                        sizeWidth: !1,
                        warningTimeout: 5e3,
                        tolerance: 0,
                        widthCalculationMethod: "scroll",
                        onClose: function() {
                            return !0
                        },
                        onClosed: function() {},
                        onInit: function() {},
                        onMessage: function() {
                            k("onMessage function not defined")
                        },
                        onMouseEnter: function() {},
                        onMouseLeave: function() {},
                        onResized: function() {},
                        onScroll: function() {
                            return !0
                        }
                    },
                    y = {};
                window.jQuery && ((a = window.jQuery).fn ? a.fn.iFrameResize || (a.fn.iFrameResize = function(e) {
                    return this.filter("iframe").each((function(t, n) {
                        P(n, e)
                    })).end()
                }) : M("", "Unable to bind to jQuery, it is not fully loaded.")), o = [], void 0 !== (r = "function" == typeof(i = V) ? i.apply(t, o) : i) && (e.exports = r), window.iFrameResize = window.iFrameResize || V()
            }

            function v() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function C(e, t, n) {
                e.addEventListener(t, n, !1)
            }

            function x(e, t, n) {
                e.removeEventListener(t, n, !1)
            }

            function O(e) {
                return p[e] ? p[e].log : c
            }

            function I(e, t) {
                T("log", e, t, O(e))
            }

            function M(e, t) {
                T("info", e, t, O(e))
            }

            function k(e, t) {
                T("warn", e, t, !0)
            }

            function T(e, t, n, i) {
                !0 === i && "object" == typeof window.console && console[e](function(e) {
                    return l + "[" + function(e) {
                        var t = "Host page: " + e;
                        return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), t
                    }(e) + "]"
                }(t), n)
            }

            function R(e) {
                function t() {
                    n("Height"), n("Width"), U((function() {
                        L(P), N(_), s("onResized", P)
                    }), P, "init")
                }

                function n(e) {
                    var t = Number(p[_]["max" + e]),
                        n = Number(p[_]["min" + e]),
                        i = e.toLowerCase(),
                        o = Number(P[i]);
                    I(_, "Checking " + i + " is in range " + n + "-" + t), o < n && (o = n, I(_, "Set " + i + " to min value")), t < o && (o = t, I(_, "Set " + i + " to max value")), P[i] = "" + o
                }

                function i(e) {
                    return z.substr(z.indexOf(":") + u + e)
                }

                function o(e, t) {
                    ! function(e, t, n) {
                        y[n] || (y[n] = setTimeout((function() {
                            y[n] = null, e()
                        }), 32))
                    }((function() {
                        W("Send Page Info", "pageInfo:" + function() {
                            var e = document.body.getBoundingClientRect(),
                                t = P.iframe.getBoundingClientRect();
                            return JSON.stringify({
                                iframeHeight: t.height,
                                iframeWidth: t.width,
                                clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                                clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                offsetTop: parseInt(t.top - e.top, 10),
                                offsetLeft: parseInt(t.left - e.left, 10),
                                scrollTop: window.pageYOffset,
                                scrollLeft: window.pageXOffset,
                                documentHeight: document.documentElement.clientHeight,
                                documentWidth: document.documentElement.clientWidth,
                                windowHeight: window.innerHeight,
                                windowWidth: window.innerWidth
                            })
                        }(), e, t)
                    }), 0, t)
                }

                function r(e) {
                    var t = e.getBoundingClientRect();
                    return A(_), {
                        x: Math.floor(Number(t.left) + Number(m.x)),
                        y: Math.floor(Number(t.top) + Number(m.y))
                    }
                }

                function a(e) {
                    var t = e ? r(P.iframe) : {
                            x: 0,
                            y: 0
                        },
                        n = {
                            x: Number(P.width) + t.x,
                            y: Number(P.height) + t.y
                        };
                    I(_, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"), window.top !== window.self ? window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : k(_, "Unable to scroll to requested position, window.parentIFrame not found") : (m = n, d(), I(_, "--"))
                }

                function d() {
                    !1 !== s("onScroll", m) ? N(_) : H()
                }

                function c(e) {
                    var t = {};
                    if (0 === Number(P.width) && 0 === Number(P.height)) {
                        var n = i(9).split(":");
                        t = {
                            x: n[1],
                            y: n[0]
                        }
                    } else t = {
                        x: P.width,
                        y: P.height
                    };
                    s(e, {
                        iframe: P.iframe,
                        screenX: Number(t.x),
                        screenY: Number(t.y),
                        type: P.type
                    })
                }

                function s(e, t) {
                    return F(_, e, t)
                }
                var g, h, w, b, v, O, T, R, z = e.data,
                    P = {},
                    _ = null;
                "[iFrameResizerChild]Ready" === z ? function() {
                    for (var e in p) W("iFrame requested init", j(e), p[e].iframe, e)
                }() : l === ("" + z).substr(0, f) && z.substr(f).split(":")[0] in p ? (O = (v = z.substr(f).split(":"))[1] ? parseInt(v[1], 10) : 0, T = p[v[0]] && p[v[0]].iframe, R = getComputedStyle(T), P = {
                    iframe: T,
                    id: v[0],
                    height: O + function(e) {
                        return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0)
                    }(R) + function(e) {
                        return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0)
                    }(R),
                    width: v[2],
                    type: v[3]
                }, _ = P.id, p[_] && (p[_].loaded = !0), (b = P.type in {
                    true: 1,
                    false: 1,
                    undefined: 1
                }) && I(_, "Ignoring init message from meta parent page"), !b && (w = !0, p[h = _] || (w = !1, k(P.type + " No settings for " + h + ". Message was: " + z)), w) && (I(_, "Received: " + z), g = !0, null === P.iframe && (k(_, "IFrame (" + P.id + ") not found"), g = !1), g && function() {
                    var t, n = e.origin,
                        i = p[_] && p[_].checkOrigin;
                    if (i && "" + n != "null" && !(i.constructor === Array ? function() {
                            var e = 0,
                                t = !1;
                            for (I(_, "Checking connection is from allowed list of origins: " + i); e < i.length; e++)
                                if (i[e] === n) {
                                    t = !0;
                                    break
                                } return t
                        }() : (t = p[_] && p[_].remoteHost, I(_, "Checking connection is from: " + t), n === t))) throw new Error("Unexpected message received from: " + n + " for " + P.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                    return !0
                }() && function() {
                    switch (p[_] && p[_].firstRun && p[_] && (p[_].firstRun = !1), P.type) {
                        case "close":
                            E(P.iframe);
                            break;
                        case "message":
                            ! function(e) {
                                I(_, "onMessage passed: {iframe: " + P.iframe.id + ", message: " + e + "}"), s("onMessage", {
                                    iframe: P.iframe,
                                    message: JSON.parse(e)
                                }), I(_, "--")
                            }(i(6));
                            break;
                        case "mouseenter":
                            c("onMouseEnter");
                            break;
                        case "mouseleave":
                            c("onMouseLeave");
                            break;
                        case "autoResize":
                            p[_].autoResize = JSON.parse(i(9));
                            break;
                        case "scrollTo":
                            a(!1);
                            break;
                        case "scrollToOffset":
                            a(!0);
                            break;
                        case "pageInfo":
                            o(p[_] && p[_].iframe, _),
                                function() {
                                    function e(e, i) {
                                        function r() {
                                            p[n] ? o(p[n].iframe, n) : t()
                                        } ["scroll", "resize"].forEach((function(t) {
                                            I(n, e + t + " listener for sendPageInfo"), i(window, t, r)
                                        }))
                                    }

                                    function t() {
                                        e("Remove ", x)
                                    }
                                    var n = _;
                                    e("Add ", C), p[n] && (p[n].stopPageInfo = t)
                                }();
                            break;
                        case "pageInfoStop":
                            p[_] && p[_].stopPageInfo && (p[_].stopPageInfo(), delete p[_].stopPageInfo);
                            break;
                        case "inPageLink":
                            ! function(e) {
                                var t, n = e.split("#")[1] || "",
                                    i = decodeURIComponent(n),
                                    o = document.getElementById(i) || document.getElementsByName(i)[0];
                                o ? (t = r(o), I(_, "Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y), m = {
                                    x: t.x,
                                    y: t.y
                                }, d(), I(_, "--")) : window.top !== window.self ? window.parentIFrame ? window.parentIFrame.moveToAnchor(n) : I(_, "In page link #" + n + " not found and window.parentIFrame not found") : I(_, "In page link #" + n + " not found")
                            }(i(9));
                            break;
                        case "reset":
                            S(P);
                            break;
                        case "init":
                            t(), s("onInit", P.iframe);
                            break;
                        default:
                            0 === Number(P.width) && 0 === Number(P.height) ? k("Unsupported message received (" + P.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page") : t()
                    }
                }())) : M(_, "Ignored: " + z)
            }

            function F(e, t, n) {
                var i = null,
                    o = null;
                if (p[e]) {
                    if ("function" != typeof(i = p[e][t])) throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                    o = i(n)
                }
                return o
            }

            function z(e) {
                var t = e.id;
                delete p[t]
            }

            function E(e) {
                var t = e.id;
                if (!1 !== F(t, "onClose", t)) {
                    I(t, "Removing iFrame: " + t);
                    try {
                        e.parentNode && e.parentNode.removeChild(e)
                    } catch (e) {
                        k(e)
                    }
                    F(t, "onClosed", t), I(t, "--"), z(e)
                } else I(t, "Close iframe cancelled by onClose event")
            }

            function A(e) {
                null === m && I(e, "Get page position: " + (m = {
                    x: window.pageXOffset !== n ? window.pageXOffset : document.documentElement.scrollLeft,
                    y: window.pageYOffset !== n ? window.pageYOffset : document.documentElement.scrollTop
                }).x + "," + m.y)
            }

            function N(e) {
                null !== m && (window.scrollTo(m.x, m.y), I(e, "Set page position: " + m.x + "," + m.y), H())
            }

            function H() {
                m = null
            }

            function S(e) {
                I(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), A(e.id), U((function() {
                    L(e), W("reset", "reset", e.iframe, e.id)
                }), e, "reset")
            }

            function L(e) {
                function t(t) {
                    ! function(t) {
                        e.id ? (e.iframe.style[t] = e[t] + "px", I(e.id, "IFrame (" + n + ") " + t + " set to " + e[t] + "px")) : I("undefined", "messageData id not set")
                    }(t),
                    function(t) {
                        s || "0" !== e[t] || (s = !0, I(n, "Hidden iFrame detected, creating visibility listener"), function() {
                            function e() {
                                Object.keys(p).forEach((function(e) {
                                    ! function(e) {
                                        function t(t) {
                                            return "0px" === (p[e] && p[e].iframe.style[t])
                                        }
                                        p[e] && null !== p[e].iframe.offsetParent && (t("height") || t("width")) && W("Visibility change", "resize", p[e].iframe, e)
                                    }(e)
                                }))
                            }

                            function t(t) {
                                I("window", "Mutation observed: " + t[0].target + " " + t[0].type), _(e, 16)
                            }
                            var n = v();
                            n && function() {
                                var e = document.querySelector("body");
                                new n(t).observe(e, {
                                    attributes: !0,
                                    attributeOldValue: !1,
                                    characterData: !0,
                                    characterDataOldValue: !1,
                                    childList: !0,
                                    subtree: !0
                                })
                            }()
                        }())
                    }(t)
                }
                var n = e.iframe.id;
                p[n] && (p[n].sizeHeight && t("height"), p[n].sizeWidth && t("width"))
            }

            function U(e, t, n) {
                n !== t.type && g && !window.jasmine ? (I(t.id, "Requesting animation frame"), g(e)) : e()
            }

            function W(e, t, n, i, o) {
                var r, a = !1;
                i = i || n.id, p[i] && (n && "contentWindow" in n && null !== n.contentWindow ? (r = p[i] && p[i].targetOrigin, I(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + t + ") targetOrigin: " + r), n.contentWindow.postMessage(l + t, r)) : k(i, "[" + e + "] IFrame(" + i + ") not found"), o && p[i] && p[i].warningTimeout && (p[i].msgTimeout = setTimeout((function() {
                    !p[i] || p[i].loaded || a || (a = !0, k(i, "IFrame has not responded within " + p[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
                }), p[i].warningTimeout)))
            }

            function j(e) {
                return e + ":" + p[e].bodyMarginV1 + ":" + p[e].sizeWidth + ":" + p[e].log + ":" + p[e].interval + ":" + p[e].enablePublicMethods + ":" + p[e].autoResize + ":" + p[e].bodyMargin + ":" + p[e].heightCalculationMethod + ":" + p[e].bodyBackground + ":" + p[e].bodyPadding + ":" + p[e].tolerance + ":" + p[e].inPageLinks + ":" + p[e].resizeFrom + ":" + p[e].widthCalculationMethod + ":" + p[e].mouseEvents
            }

            function P(e, t) {
                var i, o, r, a, s, u, l = ("" === (o = e.id) && (e.id = (i = t && t.id || b.id + d++, null !== document.getElementById(i) && (i += d++), o = i), c = (t || {}).log, I(o, "Added missing iframe ID: " + o + " (" + e.src + ")")), o);

                function f(t) {
                    1 / 0 !== p[l][t] && 0 !== p[l][t] && (e.style[t] = p[l][t] + "px", I(l, "Set " + t + " = " + p[l][t] + "px"))
                }

                function m(e) {
                    if (p[l]["min" + e] > p[l]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e)
                }
                l in p && "iFrameResizer" in e ? k(l, "Ignored iFrame, already setup.") : (u = (u = t) || {}, p[l] = {
                    firstRun: !0,
                    iframe: e,
                    remoteHost: e.src && e.src.split("/").slice(0, 3).join("/")
                }, function(e) {
                    if ("object" != typeof e) throw new TypeError("Options is not an object")
                }(u), Object.keys(u).forEach((function(e) {
                    var t = e.split("Callback");
                    if (2 === t.length) {
                        var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
                        this[n] = this[e], delete this[e], k(l, "Deprecated: '" + e + "' has been renamed '" + n + "'. The old method will be removed in the next major version.")
                    }
                }), u), function(e) {
                    for (var t in b) Object.prototype.hasOwnProperty.call(b, t) && (p[l][t] = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : b[t])
                }(u), p[l] && (p[l].targetOrigin = !0 === p[l].checkOrigin ? function(e) {
                    return "" === e || null !== e.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : e
                }(p[l].remoteHost) : "*"), function() {
                    switch (I(l, "IFrame scrolling " + (p[l] && p[l].scrolling ? "enabled" : "disabled") + " for " + l), e.style.overflow = !1 === (p[l] && p[l].scrolling) ? "hidden" : "auto", p[l] && p[l].scrolling) {
                        case "omit":
                            break;
                        case !0:
                            e.scrolling = "yes";
                            break;
                        case !1:
                            e.scrolling = "no";
                            break;
                        default:
                            e.scrolling = p[l] ? p[l].scrolling : "no"
                    }
                }(), m("Height"), m("Width"), f("maxHeight"), f("minHeight"), f("maxWidth"), f("minWidth"), "number" != typeof(p[l] && p[l].bodyMargin) && "0" !== (p[l] && p[l].bodyMargin) || (p[l].bodyMarginV1 = p[l].bodyMargin, p[l].bodyMargin = p[l].bodyMargin + "px"), r = j(l), (s = v()) && (a = s, e.parentNode && new a((function(t) {
                    t.forEach((function(t) {
                        Array.prototype.slice.call(t.removedNodes).forEach((function(t) {
                            t === e && E(e)
                        }))
                    }))
                })).observe(e.parentNode, {
                    childList: !0
                })), C(e, "load", (function() {
                    W("iFrame.onload", r, e, n, !0),
                        function() {
                            var t = p[l] && p[l].firstRun,
                                n = p[l] && p[l].heightCalculationMethod in h;
                            !t && n && S({
                                iframe: e,
                                height: 0,
                                width: 0,
                                type: "init"
                            })
                        }()
                })), W("init", r, e, n, !0), p[l] && (p[l].iframe.iFrameResizer = {
                    close: E.bind(null, p[l].iframe),
                    removeListeners: z.bind(null, p[l].iframe),
                    resize: W.bind(null, "Window resize", "resize", p[l].iframe),
                    moveToAnchor: function(e) {
                        W("Move to anchor", "moveToAnchor:" + e, p[l].iframe, l)
                    },
                    sendMessage: function(e) {
                        W("Send Message", "message:" + (e = JSON.stringify(e)), p[l].iframe, l)
                    }
                }))
            }

            function _(e, t) {
                null === w && (w = setTimeout((function() {
                    w = null, e()
                }), t))
            }

            function B() {
                "hidden" !== document.visibilityState && (I("document", "Trigger event: Visiblity change"), _((function() {
                    q("Tab Visable", "resize")
                }), 16))
            }

            function q(e, t) {
                Object.keys(p).forEach((function(n) {
                    ! function(e) {
                        return p[e] && "parent" === p[e].resizeFrom && p[e].autoResize && !p[e].firstRun
                    }(n) || W(e, t, p[n].iframe, n)
                }))
            }

            function V() {
                function e(e, n) {
                    n && (function() {
                        if (!n.tagName) throw new TypeError("Object is not a valid DOM element");
                        if ("IFRAME" !== n.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">")
                    }(), P(n, e), t.push(n))
                }
                var t;
                return function() {
                        var e, t = ["moz", "webkit", "o", "ms"];
                        for (e = 0; e < t.length && !g; e += 1) g = window[t[e] + "RequestAnimationFrame"];
                        g ? g = g.bind(window) : I("setup", "RequestAnimationFrame not supported")
                    }(), C(window, "message", R), C(window, "resize", (function() {
                        ! function(e) {
                            I("window", "Trigger event: " + e), _((function() {
                                q("Window " + e, "resize")
                            }), 16)
                        }("resize")
                    })), C(document, "visibilitychange", B), C(document, "-webkit-visibilitychange", B),
                    function(i, o) {
                        switch (t = [], function(e) {
                                e && e.enablePublicMethods && k("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
                            }(i), typeof o) {
                            case "undefined":
                            case "string":
                                Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), e.bind(n, i));
                                break;
                            case "object":
                                e(i, o);
                                break;
                            default:
                                throw new TypeError("Unexpected data type (" + typeof o + ")")
                        }
                        return t
                    }
            }
        }()
    }
});