(function() {
    function Mb(aa) {
        var Ia = 0;
        return function() {
            return Ia < aa.length ? {
                done: !1,
                value: aa[Ia++]
            } : {
                done: !0
            }
        }
    }
    var Yb = "function" == typeof Object.defineProperties ? Object.defineProperty : function(aa, Ia, ib) {
        aa != Array.prototype && aa != Object.prototype && (aa[Ia] = ib.value)
    };

    function Pd(aa) {
        aa = ["object" == typeof globalThis && globalThis, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, aa];
        for (var Ia = 0; Ia < aa.length; ++Ia) {
            var ib = aa[Ia];
            if (ib && ib.Math == Math) return ib
        }
        throw Error("Cannot find global object");
    }
    var uf = Pd(this);

    function vf() {
        vf = function() {};
        uf.Symbol || (uf.Symbol = mi)
    }

    function ni(aa, Ia) {
        this.Eh = aa;
        Yb(this, "description", {
            configurable: !0,
            writable: !0,
            value: Ia
        })
    }
    ni.prototype.toString = function() {
        return this.Eh
    };
    var mi = function() {
        function aa(ib) {
            if (this instanceof aa) throw new TypeError("Symbol is not a constructor");
            return new ni("jscomp_symbol_" + (ib || "") + "_" + Ia++, ib)
        }
        var Ia = 0;
        return aa
    }();

    function oi() {
        vf();
        var aa = uf.Symbol.iterator;
        aa || (aa = uf.Symbol.iterator = uf.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[aa] && Yb(Array.prototype, aa, {
            configurable: !0,
            writable: !0,
            value: function() {
                return pi(Mb(this))
            }
        });
        oi = function() {}
    }

    function pi(aa) {
        oi();
        aa = {
            next: aa
        };
        aa[uf.Symbol.iterator] = function() {
            return this
        };
        return aa
    }
    try {
        (function() {
            function aa(a, c, b, d) {
                d = w(d, "target");
                (d = Zb(a, d, "button,input")) && "submit" === d.type && (d = Zb(a, d, "form")) && (b.push(d), Z(a, V([!1, a, c, b, d], Ia), 300))
            }

            function Ia(a, c, b, d, e) {
                var f, g = jb(c)(e, d),
                    l = -1 !== g;
                if (a || l) {
                    l && d.splice(g, 1);
                    var m = (f = {}, f.i = e.getAttribute && e.getAttribute("id"), f.n = e.getAttribute && e.getAttribute("name"), f.p = wf(c, e), f);
                    D(function(p) {
                        var r = m[p];
                        r ? m[p] = xf[p] ? r.slice(0, xf[p]) : r : delete m[p]
                    }, Ba(m));
                    a = "?" + Uc(m);
                    $b(b) || Ga(c, "Form goal. Counter " + b.id + ". Form: " + a + ".");
                    yf(c, b,
                        "form")(a)
                }
            }

            function ib(a) {
                a = bb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = da("canPlayType", a),
                        b = D(c, zf).join("x"),
                        d = vb(function(e) {
                            return D(x(N, da("concat", e + "; codecs="), c), qi)
                        }, zf).join("x");
                    return b + "x" + d
                } catch (e) {
                    return "canPlayType"
                }
            }

            function ri(a) {
                var c = w(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = B(c, a.speechSynthesis);
                return vb(function(b) {
                    return D(z(b, w), si)
                }, a()).join("x")
            }

            function ti(a) {
                var c = Af("navigator.", ui, a),
                    b = w(a, "navigator.getGamepads");
                b = wb(b, "getGamepads") || z([], N);
                a = B(b, w(a,
                    "navigator"));
                return c + "x" + (a() || []).length
            }

            function vi(a) {
                a = bb(a)("canvas");
                var c = w(a, "getContext");
                if (!c) return "";
                try {
                    var b = B(c, a)("2d");
                    b.font = "72px mmmmmmmmmmlli";
                    a = [];
                    var d = b.measureText("mmmmmmmmmmlli").width;
                    c = void 0;
                    for (var e = 0; e < Bf.length; e += 1) b.font = "72px " + Bf[e], c = b.measureText("mmmmmmmmmmlli").width, a.push("" + (d === c));
                    return a.join("x")
                } catch (f) {
                    return ""
                }
            }

            function wi(a) {
                var c = w(a, "matchMedia");
                if (!c || !la("matchMedia", c)) return "";
                var b = da("matchMedia", a);
                return D(function(d) {
                    return b("(" +
                        d + ")")
                }, xi).join("x")
            }

            function yi() {
                return {
                    Ii: zi,
                    Qi: Ai
                }
            }

            function Ai(a, c) {
                var b = c.zi;
                if (!Bi(a, b)) return "";
                var d = [],
                    e = b.createBuffer();
                if (!e) return "";
                b.bindBuffer(b.ARRAY_BUFFER, e);
                var f = new a.Float32Array(Ci);
                b.bufferData(b.ARRAY_BUFFER, f, b.STATIC_DRAW);
                e.uj = 3;
                e.Fj = 3;
                f = b.createProgram();
                var g = b.createShader(b.VERTEX_SHADER);
                b.shaderSource(g, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                b.compileShader(g);
                b.attachShader(f, g);
                g = b.createShader(b.FRAGMENT_SHADER);
                b.shaderSource(g, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                b.compileShader(g);
                b.attachShader(f, g);
                b.linkProgram(f);
                b.useProgram(f);
                f.zk = b.getAttribLocation(f, "attrVertex");
                f.Hj = b.getUniformLocation(f, "uniformOffset");
                b.enableVertexAttribArray(f.Ll);
                b.vertexAttribPointer(f.zk, e.uj, b.FLOAT, !1, 0, 0);
                b.uniform2f(f.Hj, 1, 1);
                b.drawArrays(b.TRIANGLE_STRIP, 0,
                    e.Fj);
                e = b.canvas;
                null != e && d.push(Di(e));
                e = b.getSupportedExtensions().join(";");
                f = Qd(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                g = Qd(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                var l = b.getParameter(b.ALPHA_BITS),
                    m = b.getContextAttributes().antialias ? "yes" : "no",
                    p = b.getParameter(b.BLUE_BITS),
                    r = b.getParameter(b.DEPTH_BITS),
                    t = b.getParameter(b.GREEN_BITS),
                    v = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (v) {
                    var q = b.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === q && (q = 2)
                }
                q = {
                    al: e,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": g,
                    "webgl alpha bits": l,
                    "webgl antialiasing": m,
                    "webgl blue bits": p,
                    "webgl depth bits": r,
                    "webgl green bits": t,
                    "webgl max anisotropy": v ? q : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": Qd(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                Rd(d, q, ": ");
                try {
                    var k = b.getExtension("WEBGL_debug_renderer_info");
                    k && Rd(d, {
                        "webgl unmasked vendor": b.getParameter(k.UNMASKED_VENDOR_WEBGL),
                        "webgl unmasked renderer": b.getParameter(k.UNMASKED_RENDERER_WEBGL)
                    })
                } catch (h) {}
                if (!b.getShaderPrecisionFormat) return d.join("~");
                k = b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_FLOAT);
                q = b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_FLOAT);
                e = b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_FLOAT);
                f = b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_FLOAT);
                g = b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_FLOAT);
                l = b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_FLOAT);
                m = b.getShaderPrecisionFormat(b.VERTEX_SHADER,
                    b.HIGH_INT);
                p = b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_INT);
                r = b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_INT);
                t = b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_INT);
                v = b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_INT);
                b = b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_INT);
                Rd(d, {
                    "webgl vertex shader high float precision": k.precision,
                    "webgl vertex shader high float precision rangeMin:": k.rangeMin,
                    "webgl vertex shader high float precision rangeMax:": k.rangeMax,
                    "webgl vertex shader medium float precision:": q.precision,
                    "webgl vertex shader medium float precision rangeMin": q.rangeMin,
                    "webgl vertex shader medium float precision rangeMax": q.rangeMax,
                    "webgl vertex shader low float precision:": e.precision,
                    "webgl vertex shader low float precision rangeMin": e.rangeMin,
                    "webgl vertex shader low float precision rangeMax": e.rangeMax,
                    "webgl fragment shader high float precision": f.precision,
                    "webgl fragment shader high float precision rangeMin:": f.rangeMin,
                    "webgl fragment shader high float precision rangeMax:": f.rangeMax,
                    "webgl fragment shader medium float precision:": g.precision,
                    "webgl fragment shader medium float precision rangeMin": g.rangeMin,
                    "webgl fragment shader medium float precision rangeMax": g.rangeMax,
                    "webgl fragment shader low float precision:": l.precision,
                    "webgl fragment shader low float precision rangeMin": l.rangeMin,
                    "webgl fragment shader low float precision rangeMax": l.rangeMax,
                    "webgl vertex shader high int precision": m.precision,
                    "webgl vertex shader high int precision rangeMin:": m.rangeMin,
                    "webgl vertex shader high int precision rangeMax:": m.rangeMax,
                    "webgl vertex shader medium int precision:": p.precision,
                    "webgl vertex shader medium int precision rangeMin": p.rangeMin,
                    "webgl vertex shader medium int precision rangeMax": p.rangeMax,
                    "webgl vertex shader low int precision:": r.precision,
                    "webgl vertex shader low int precision rangeMin": r.rangeMin,
                    "webgl vertex shader low int precision rangeMax": r.rangeMax,
                    "webgl fragment shader high int precision": t.precision,
                    "webgl fragment shader high int precision rangeMin:": t.rangeMin,
                    "webgl fragment shader high int precision rangeMax:": t.rangeMax,
                    "webgl fragment shader medium int precision:": v.precision,
                    "webgl fragment shader medium int precision rangeMin": v.rangeMin,
                    "webgl fragment shader medium int precision rangeMax": v.rangeMax,
                    "webgl fragment shader low int precision:": b.precision,
                    "webgl fragment shader low int precision rangeMin": b.rangeMin,
                    "webgl fragment shader low int precision rangeMax": b.rangeMax
                });
                return d.join("~")
            }

            function Bi(a, c) {
                if (!U(a.Float32Array)) return !1;
                var b = w(c, "canvas");
                if (!b || !la("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function Rd(a,
                c, b) {
                void 0 === b && (b = ":");
                return E(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, Da(c))
            }

            function Qd(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + a[0] + ", " + a[1] + "]"
            }

            function Ei(a) {
                return function(c) {
                    var b = bb(c);
                    if (!b) return "";
                    b = b("canvas");
                    var d = [],
                        e = a(),
                        f = e.Qi;
                    e = e.Ii;
                    try {
                        var g = da("getContext", b);
                        d = D(x(N, g), e)
                    } catch (l) {
                        return ""
                    }
                    return (g = La(N, d)) ? f(c, {
                        canvas: b,
                        zi: g
                    }) : ""
                }
            }

            function Fi(a) {
                function c(b) {
                    return [b.description,
                        b.suffixes, b.type
                    ].join()
                }
                a = w(a, "navigator.plugins") || [];
                return ac(a) ? x(na, Cf(function(b, d) {
                    return b.name > d.name ? 1 : 2
                }), Ra(function(b) {
                    var d = ac(b) ? b : [];
                    return [b.name, b.description, x(na, qc(Boolean), Ra(c), da("join"), z(","), ea)(d)].join()
                }), da("join"), z(","), ea)(a) : ""
            }

            function Gi(a) {
                var c = w(a, "ApplePaySession"),
                    b = O(a).protocol;
                return !c || "https:" !== b || nb(a) ? "" : S(function(d, e, f) {
                    e = "" + (f + 1);
                    var g = c.supportsVersion;
                    return U(g) ? g.call(c, f + 1) ? d + e : d + "0" : d
                }, "", Hi(9)) + c.canMakePayments()
            }

            function Ii(a) {
                a = w(a,
                    "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }

            function Ji(a, c) {
                var b = Ki(a),
                    d = oa(a, "r", c),
                    e = C(a, "rts.p");
                return Ma(Sa(P(c))).then(B(S, null, function(f, g) {
                    var l = {
                        id: g.Ei,
                        ra: g.ra
                    };
                    l = d({
                        ja: g.Nj,
                        Y: pa(g.xi),
                        J: g.ha,
                        rc: g.rc
                    }, l, g.Uj)["catch"](e);
                    return f.then(z(l, N))
                }, Q.resolve(""), b))["catch"](e)
            }

            function Li(a, c) {
                return xa(a).D(a, "load", B(Sd, null, a, c, !0))
            }

            function Sd(a, c, b) {
                void 0 === b && (b = !1);
                c = Vc(a, void 0, c);
                c = xb(a, decodeURIComponent(c.o("mp2_substs") || ""));
                a = Df(a);
                return c && 0 < c.length &&
                    a.Tg(c, b)
            }

            function Mi(a, c, b) {
                if ("adv" === b.type) return Ni(a, b, c);
                var d = a.document.referrer;
                return yb(a, d || "").host === O(a).host ? !1 : Ca(function(e) {
                    return (e = d.match(new RegExp(e, "i"))) && Oi(b.params || [], e[1])
                }, b.patterns || [])
            }

            function Oi(a, c) {
                if (!a.length) return !0;
                var b = x(function(d) {
                    return (d || "").replace(/\+/g, "%20")
                }, Wc)(c);
                b = ya(b);
                return Ca(x(Wc, b), a)
            }

            function Ni(a, c, b) {
                function d(r) {
                    return Xa(new RegExp(r, "i"))
                }
                var e = yb(a, O(a).href),
                    f = e.query,
                    g = e.hash;
                a = a.document.referrer;
                e = Td(f || "");
                f = Pi(f || "", g ||
                    "");
                g = Qi(e);
                var l = (b = b.Ki) ? c.direct_orders : c.direct_camp,
                    m = c.ServiceNamePattern,
                    p = c.RefererPattern;
                m = Ca(x(d, z(b && "direct.yandex.ru" || f.service || g.source), ea), m || []);
                c.yandex_direct || (m = m || Ca(d(a), p || []));
                return (m = m || c.google_adwords && e.gclid) && l && l.length ? Ca(x(Ri, ya("" + (b || f.campaign || g.campaign))), l) : m
            }

            function Pi(a, c) {
                var b = ["service", "campaign", "ad", "source"],
                    d = Td(a)._openstat;
                d || (d = La(x(Td, W("_openstat")), c.replace("#", "").split("?") || []) || "");
                var e = "";
                return (e = -1 === d.indexOf(";") ? x(Ud, Ef, function(f) {
                    if (f) {
                        for (var g =
                                "", l = 0; l < f.length;) {
                            var m = f.charCodeAt(l);
                            if (128 > m) g += String.fromCharCode(m), l++;
                            else if (191 < m && 224 > m) {
                                var p = f.charCodeAt(l + 1);
                                g += String.fromCharCode((m & 31) << 6 | p & 63);
                                l += 2
                            } else {
                                p = f.charCodeAt(l + 1);
                                var r = f.charCodeAt(l + 2);
                                g += String.fromCharCode((m & 15) << 12 | (p & 63) << 6 | r & 63);
                                l += 3
                            }
                        }
                        f = g
                    }
                    return f
                })(d || "") : Wc(d)) ? S(function(f, g, l) {
                    f[b[l]] = g;
                    return f
                }, {}, e.split(";")) : {}
            }

            function Qi(a) {
                return S(function(c, b) {
                    a["utm_" + b] && (c[b] = a["utm_" + b]);
                    return c
                }, {}, ["source", "medium", "campaign", "term", "content"])
            }

            function Si(a,
                c) {
                var b = c.substr(1),
                    d = c[0],
                    e = [];
                "#" === d ? (b = a.document.getElementById(b)) && e.push(b) : "." === d && (e = na(a.document.getElementsByClassName(b)));
                return e
            }

            function Ti(a, c) {
                try {
                    var b = c.origin
                } catch (d) {}
                b && Ca(x(Xa, z(b), ea), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]) && (b = xb(a, c.data), "appendremote" === w(b, "action") && Ui(w(b, "resource") || "") && Vi(a, c, b))
            }

            function Wi(a, c) {
                var b = bb(a);
                if (b) {
                    b = b("div");
                    var d = zb(a);
                    if (d) {
                        b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var e = b.firstChild;
                        e.onload = function() {
                            bc(e.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = e;
                        d.appendChild(b);
                        b.removeChild(e);
                        var f = null;
                        b.attachShadow ? f = b.attachShadow({
                            mode: "open"
                        }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
                        f ? f.appendChild(e) : (d.appendChild(e), a._ym__remoteIframeContainer = e)
                    }
                }
            }

            function Xi(a, c) {
                var b = Na(a),
                    d = P(c),
                    e = "wv2rf:" + d,
                    f = c.Zb,
                    g = Vd(a),
                    l = b.o(e),
                    m = c.mk;
                return R(g) || Ya(l) ? Ma(Sa(d)).then(function(p) {
                    var r = w(p, "settings.webvisor.forms");
                    g = Vd(a) || w(p, "settings.eu");
                    b.C(e, Yi(r));
                    return {
                        Zb: f,
                        Ag: !!g,
                        Rg: !!r,
                        qh: m
                    }
                }) : Q.resolve({
                    Zb: f,
                    Ag: g,
                    Rg: !!parseInt(l, 10),
                    qh: m
                })
            }

            function Zi() {
                var a, c = (a = {}, a.mousemove = {
                    Db: 0,
                    Fc: 1 / .68
                }, a.click = {
                    Db: 0,
                    Fc: 1 / .00975
                }, a.input = {
                    Db: 0,
                    Fc: 1 / .0116
                }, a.scroll = {
                    Db: 0,
                    Fc: 1 / .31
                }, a);
                return {
                    ui: function(b) {
                        if (b.length) return {
                            type: "activity",
                            data: S(function(d, e) {
                                var f = c[e];
                                return Math.round(d + f.Db * f.Fc)
                            }, 0, Ba(c))
                        }
                    },
                    Ij: function(b) {
                        if (b = c[b.data.type]) b.Db += 1
                    }
                }
            }

            function $i(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page":
                        var c =
                            a.data,
                            b = c.Ia,
                            d = c.Qb,
                            e = c.content;
                        delete c.Ia;
                        delete c.Qb;
                        delete c.content;
                        c = {
                            type: "page",
                            data: {
                                ca: a.ca || 0,
                                content: e,
                                Ia: b,
                                Qb: d,
                                fa: c
                            }
                        };
                        a.da && (c.da = a.da);
                        return c;
                    case "event":
                        a: {
                            c = {
                                type: "event",
                                da: a.da,
                                data: {
                                    ca: a.ca,
                                    type: a.event,
                                    fa: {}
                                }
                            };b = F({}, a.data);
                            switch (a.event) {
                                case "zoom":
                                    c.data.fa = {
                                        Kd: {
                                            x: 0,
                                            y: 0,
                                            Ld: 0
                                        },
                                        Md: b,
                                        duration: 1
                                    };
                                    break;
                                case "keystroke":
                                    c.data.fa = a.data.Va;
                                    break;
                                case "deviceRotation":
                                case "resize":
                                    c.data.fa = b;
                                    break;
                                case "windowfocus":
                                case "windowblur":
                                case "focus":
                                    c.data.target = b.target;
                                    c.data.fa =
                                        null;
                                    break;
                                case "touchmove":
                                case "touchstart":
                                case "touchend":
                                case "touchcancel":
                                case "touchforcechange":
                                case "scroll":
                                case "change":
                                case "mousemove":
                                case "mousedown":
                                case "mouseup":
                                case "selection":
                                    c.data.target = b.target;
                                    delete b.target;
                                    c.data.fa = b;
                                    break;
                                case "srcset":
                                    a = {
                                        type: "mutation",
                                        da: a.da,
                                        data: {
                                            ca: a.ca,
                                            fa: {
                                                Za: [{
                                                    Oa: [{
                                                        id: b.target,
                                                        xa: {
                                                            src: {
                                                                gb: "",
                                                                n: b.value,
                                                                r: !1
                                                            }
                                                        },
                                                        qa: 0
                                                    }]
                                                }],
                                                index: 0
                                            }
                                        }
                                    };
                                    break a
                            }
                            a = c
                        }
                        break;
                    case "mutation":
                        return aj(a)
                }
                return a
            }

            function aj(a) {
                var c = F({}, a.data),
                    b = [];
                switch (a.event) {
                    case "tc":
                        b = [{
                            d: [{
                                id: c.target,
                                $a: {
                                    gb: "",
                                    n: c.value
                                },
                                qa: c.index
                            }]
                        }];
                        break;
                    case "ac":
                        b = [{
                            Oa: [{
                                id: c.target,
                                xa: S(function(d, e) {
                                    var f = e[1];
                                    d[e[0]] = {
                                        gb: "",
                                        n: f,
                                        r: ta(f)
                                    };
                                    return d
                                }, {}, Da(c.attributes)),
                                qa: c.index
                            }]
                        }];
                        break;
                    case "re":
                        b = [{
                            ob: D(function(d) {
                                return {
                                    id: d,
                                    qa: c.index
                                }
                            }, c.fb)
                        }];
                        break;
                    case "ad":
                        b = [{
                            qb: D(function(d) {
                                return {
                                    id: d.id,
                                    jd: d.name,
                                    md: d.Fg,
                                    vb: d.parent,
                                    wb: d.nc,
                                    ub: d.next,
                                    xa: d.attributes,
                                    qa: c.index,
                                    $a: d.content,
                                    Sa: d.hidden
                                }
                            }, c.fb)
                        }]
                }
                return {
                    type: "mutation",
                    da: a.da,
                    data: {
                        ca: a.ca,
                        fa: {
                            Za: b,
                            index: c.index
                        }
                    }
                }
            }

            function bj(a) {
                return {
                    Yi: function() {
                        var c =
                            a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    $i: function() {
                        if (a.document.doctype) {
                            var c = F({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""].join("") + ">"
                        }
                        return null
                    },
                    ij: function() {
                        try {
                            if (!a.sessionStorage) return null;
                            var c = a.sessionStorage.getItem("__vw_tab_guid"),
                                b = !1;
                            try {
                                var d = a.opener ? a.opener.sessionStorage : null;
                                b = !!d && c === d.getItem("__vw_tab_guid")
                            } catch (e) {
                                b = !0
                            }
                            if (!c || b) c = Ff(), a.sessionStorage.setItem("__vw_tab_guid", c);
                            return c
                        } catch (e) {
                            return null
                        }
                    }
                }
            }

            function cj(a, c, b) {
                var d = rc(a),
                    e = xa(a),
                    f = nb(a),
                    g = c.qe(),
                    l = !w(a, "postMessage") || f && !w(a, "parent.postMessage"),
                    m = z(d, N);
                if (l) {
                    if (!g) return Z(a, B(d.ma, d, "i", {
                        Ha: !1
                    }), 10), {
                        Ib: m,
                        bh: J,
                        stop: J
                    };
                    throw ob();
                }
                d.D("sr", function(q) {
                    var k, h = Gf(a, q.source);
                    h && Wd(a, q.source, (k = {}, k.type = "sr:r", k.frameId = c.bb().ia(h), k))
                });
                d.D("sd", function(q) {
                    var k = q.data;
                    q = q.source;
                    (a === q || Gf(a, q)) && d.ma("sdr", {
                        data: k.data,
                        ca: k.frameId
                    })
                });
                if (f && !g) {
                    var p = !1,
                        r = 0,
                        t = function() {
                            var q;
                            Wd(a, a.parent, (q = {}, q.type = "sr", q));
                            r = Z(a, t, 100, "if.i")
                        };
                    t();
                    var v = function(q) {
                        d.Aa("sr:r", v);
                        ua(a, r);
                        var k = yb(a, q.origin).host;
                        p || q.source !== a.parent || !q.data.frameId || "about:blank" !== O(a).host && !K(k, b) || (p = !0, d.ma("i", {
                            ca: q.data.frameId,
                            Ha: !0
                        }))
                    };
                    d.D("sr:r", v);
                    Z(a, function() {
                        d.Aa("sr:r", v);
                        ua(a, r);
                        p || (p = !0, d.ma("i", {
                            Ha: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.D(a, "message", function(q) {
                    var k = xb(a, q.data);
                    k && k.type && K(k.type, dj) && d.ma(k.type, {
                        data: k,
                        source: q.source,
                        origin: q.origin
                    })
                });
                return {
                    Ib: m,
                    bh: function(q) {
                        var k;
                        return Wd(a, a.parent, (k = {}, k.frameId = c.qe(), k.data = q, k.type = "sd", k))
                    },
                    stop: e
                }
            }

            function Gf(a, c) {
                try {
                    return La(x(W("contentWindow"), ya(c)), na(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function Wd(a, c, b) {
                a = cb(a, b);
                c.postMessage(a, "*")
            }

            function Ff() {
                return Ab() + Ab() + "-" + Ab() + "-" + Ab() + "-" + Ab() + "-" + Ab() + Ab() + Ab()
            }

            function Ab() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function ej(a, c, b, d) {
                void 0 === d && (d = {});
                var e = qa(c),
                    f = F(S(function(g,
                        l) {
                        g[l.name] = l.value;
                        return g
                    }, {}, na(c.attributes)), d);
                E(function(g) {
                    var l = g[0];
                    g = Xd(a, c, l, g[1], b);
                    ta(g) ? delete f[l] : f[l] = g
                }, Da(f));
                if (d = ("IMG" === e || Xc(c)) && cc(a, c) && sc(c)) f.width = d.width, f.height = d.height;
                return f
            }

            function Xd(a, c, b, d, e) {
                var f = qa(c);
                if (Xc(c))
                    if ("value" === b) {
                        if (b = e.Ag, e = e.Rg, f = cc(a, c), ((e ? dc(a, c, b) : !Yc(c)) || f) && !ta(d)) return D(z("\u2022", N), ("" + d).split("")).join("")
                    } else {
                        if ("checked" === b && Hf.test(c.getAttribute("type"))) return c.checked ? "checked" : null
                    }
                else {
                    if ("IMG" === f && "src" === b) return cc(a,
                        c) ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" : c.currentSrc || c.src;
                    if ("A" === f && "href" === b) return d ? "#" : "";
                    if (K(b, ["srcset", "integrity", "crossorigin"]) || fj.test(b) || "IFRAME" === f && "src" === b || "SCRIPT" === f && K(b, ["src", "type"])) return null
                }
                return d
            }

            function Yd(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    X: function(e, f) {
                        return C(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function If(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ?
                        gj(a, c, da("push", e), d) : Ta(e, Jf(a, c, d)));
                    E(b, e)
                }
            }

            function gj(a, c, b, d) {
                function e(f) {
                    return U(d) ? d(f) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                if (U(b) && e(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Zd(c)))
                    for (c = a.document.createTreeWalker(c, -1, d ? {
                            acceptNode: e
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Jf(a, c, b) {
                var d = [],
                    e = x(N, da("push", d));
                U(b) ? (b = b(c), (ta(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Jf(a, c[b]);
                        E(e, g)
                    }
                }
                return d
            }

            function Kf(a, c) {
                function b(e) {
                    w(c, d) ? e() : Z(a, z(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return new Q(b)
            }

            function hj(a) {
                var c = ij[a[1]];
                return "event" === a[0] && c ? [Lf(c, a[2], "items")] : []
            }

            function jj(a, c, b) {
                var d = !1,
                    e = "";
                if (!ec(c)) return Ga(b, "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        va(f) && f.length ? (d = Zc(function(g) {
                            return ec(g) && (db(g.id) ||
                                $d(b, g.id) || db(g.name))
                        }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        $d(b, c.id) || db(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                Ga(b, e);
                return d
            }

            function Lf(a, c, b) {
                var d, e, f = Ba(c),
                    g = !1;
                if (c[b]) {
                    var l = (d = {}, d[a] = (e = {}, e.products = c[b], e), d);
                    1 < f.length && (l[a].actionField = S(function(m, p) {
                        var r = kj[p];
                        r ? m[r] = c[p] : "currency" === p ? g = c[p] : p !== b && (m[p] = c[p]);
                        return m
                    }, {}, f));
                    g && (l.currencyCode = g);
                    return l
                }
            }

            function lj(a, c) {
                var b = Mf(a),
                    d = P(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.oj = !0;
                if (b = e.hh) d = Nf(a), E(d, b)
            }

            function mj(a, c, b, d) {
                var e;
                if (a = Ua(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    K(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.fh((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function nj(a, c) {
                var b = Na(a);
                if ("" !== b.o("cc")) return 0;
                var d = z("cc", b.C);
                d(0);
                var e = ca(a),
                    f = X(a);
                f = x(W(Ea({
                    qc: 1
                }) + ".c"), $c(function(g) {
                    d(g +
                        "&" + e(eb))
                }), z("cc", f.C));
                oa(a, "6", c)({}).then(f)["catch"](x($c(function() {
                    var g = e(eb);
                    b.C("cc", "&" + g)
                }), C(a, "cc")))
            }

            function oj(a, c) {
                var b;
                a((b = {}, b.clickmap = R(c) ? !0 : c, b))
            }

            function pj(a, c, b, d, e) {
                function f() {
                    m && m.stop()
                }
                if (!c.Tb) return Q.resolve(J);
                var g = oa(a, "4", c),
                    l = {
                        J: {
                            "wv-type": "0"
                        },
                        Y: pa()
                    };
                b = new qj(a, b, function(p, r) {
                    if (g) {
                        var t = "wv-data=" + Of(p, !0);
                        g(F({}, l, {
                            ja: t,
                            J: {
                                "wv-check": ad(p),
                                "wv-type": "0"
                            }
                        }), c, r)["catch"](C(a, "m.n.m.s"))
                    }
                });
                var m = rj(a, b, d, e);
                return Ma(Sa(P(c))).then(function(p) {
                    p && X(a).C("isEU",
                        w(p, "settings.eu"));
                    !ae(a) && m && Pf(a, p) && m.start();
                    return f
                })
            }

            function Pf(a, c) {
                var b = fc(a),
                    d = b.o("visorc");
                K(d, ["w", "b"]) || (d = "");
                Qf(a) && Rf(a, gc, "visorc") && !sj.test(pb(a) || "") || (d = "b");
                var e = w(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = X(a).o("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.C("visorc", d, 30);
                return "w" === d
            }

            function rj(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = xa(a),
                    l = ":submit" + Math.random(),
                    m = [],
                    p = B(c.flush, c),
                    r = G(function(q, k) {
                        C(a, "hfv." + q, function() {
                            try {
                                var h = k.type
                            } catch (n) {
                                return
                            }
                            h = -1 !== jb(a)(h, d);
                            c.push(k, {
                                type: q
                            });
                            h && p()
                        })()
                    }),
                    t = C(a, "sfv", function() {
                        if (!be(a, w(a, "location.hostname"))) {
                            var q = b(a),
                                k = tj(a);
                            E(function(h) {
                                f.push(g.D(h.target, h.event, r(h.type)))
                            }, q);
                            E(function(h) {
                                f.push(g.D(h.target, h.event, C(a, "hff." + h.target, function(n) {
                                    E(x(z({
                                        b: a,
                                        Da: n,
                                        flush: p
                                    }), ea), h.ga)
                                })))
                            }, k);
                            m = Sf(a, "form", e);
                            e.attachEvent && (q = Sf(a, "form *", e), E(function(h) {
                                f.push(g.D(h, "submit", r("form")))
                            }, m), E(function(h) {
                                ce(h) && f.push(g.D(h, "change", r("formInput")))
                            }, q));
                            E(function(h) {
                                var n = h.submit;
                                if (U(n) ||
                                    "object" === typeof n && uj.test("" + n)) h[l] = n, h.submit = C(a, "fv", function() {
                                    r("document", {
                                        target: h,
                                        type: "submit"
                                    });
                                    return h[l]()
                                })
                            }, m)
                        }
                    }),
                    v = C(a, "ufv", function() {
                        E(ea, f);
                        E(function(q) {
                            q && (q.submit = q[l])
                        }, m);
                        c.flush()
                    });
                return {
                    start: t,
                    stop: v
                }
            }

            function vj(a, c) {
                var b = Y(function(e) {
                        return 0 < e.ga.length
                    }, c),
                    d = Tf({
                        target: a.document,
                        type: "document"
                    });
                return D(x(N, d, wj(a)), b)
            }

            function Uf(a, c) {
                var b = a.b,
                    d = [],
                    e = c.form;
                if (!c[Ha] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var l = f[g];
                        bd(l) && !l[Ha] && Ta(d,
                            Nb(b, l))
                    }
                } else Ta(d, Nb(b, c));
                return d
            }

            function de(a) {
                if (tc) {
                    tc = !1;
                    var c = fb(a.b),
                        b = [];
                    Va(a.b, b, 15) ? a = [] : (L(b, c), a = b);
                    return a
                }
            }

            function Vf(a) {
                if (!tc) {
                    tc = !0;
                    a = fb(a.b);
                    var c = [];
                    qb(c, 14);
                    L(c, a);
                    return c
                }
            }

            function xj(a, c, b) {
                var d = c[Ha];
                if (d) {
                    a: {
                        var e = fb(a),
                            f = c[Ha];
                        if (0 < f) {
                            var g = [];
                            c = ee(a, c);
                            var l = Ob[f],
                                m = c[0] + "x" + c[1],
                                p = c[2] + "x" + c[3];
                            if (m !== l.G) {
                                l.G = m;
                                if (Va(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                L(g, e);
                                L(g, f);
                                L(g, c[0]);
                                L(g, c[1])
                            }
                            if (p !== l.size) {
                                l.size = p;
                                if (Va(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                L(g, e);
                                L(g, f);
                                L(g, c[2]);
                                L(g, c[3])
                            }
                            if (g.length) {
                                a =
                                    g;
                                break a
                            }
                        }
                        a = []
                    }
                    Ta(b, a)
                }
                return d
            }

            function dc(a, c, b) {
                void 0 === b && (b = !1);
                if ("button" === c.getAttribute("type")) return !1;
                var d = Yc(c),
                    e = cd(c);
                a = Wf(a, c) || b && e;
                return !d && a
            }

            function Wf(a, c) {
                return Xf(a, c) || uc(a, c) ? !0 : cc(a, c)
            }

            function cd(a) {
                if (!a) return !1;
                var c = a.placeholder;
                a = [a.className, a.id, a.name];
                return Ca(Xa(yj), a) || zj.test(c)
            }

            function Xc(a) {
                var c = a.type;
                return dd(a) ? !c || Aj.test(c) : Bj(a)
            }

            function Yf(a, c) {
                return c && Bb("(ym-disable-submit|-metrika-noform)", c)
            }

            function Yc(a) {
                return a && Bb("ym-record-keys",
                    a)
            }

            function Cj(a, c) {
                return D(function(b) {
                    return a.isNaN(b) ? Dj.test(b) ? (b = b.toUpperCase() === b ? Ej : Fj, String.fromCharCode(kb(a, b[0], b[1]))) : b : "" + kb(a, 0, 9)
                }, c.split("")).join("")
            }

            function cc(a, c) {
                if (ta(c)) return !1;
                if (Zd(c)) {
                    var b = c.parentNode;
                    return (ta(b) ? 0 : 11 === b.nodeType) ? !1 : cc(a, c.parentNode)
                }
                if (Gj.test(c.className)) return !0;
                b = Zf(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content *");
                return d && (Hj.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            }

            function Ij(a, c, b, d, e) {
                var f;
                c = {
                    Y: pa(),
                    J: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f)
                };
                d(c, e)["catch"](C(a, "c.s.c"))
            }

            function Jj(a, c, b, d, e, f) {
                if (vc(a, "ymDisabledClickmap") || be(a, f) || !c || !c.element) return !1;
                a = qa(c.element);
                if (e && !e(c.element, a) || K(c.button, [2, 3]) && "A" !== a || Ca(ya(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (Kj(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function Lj(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function Mj(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function $f(a, c) {
                var b = zb(a),
                    d = fe(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Nj(a) {
                var c = C(a, "i.clch", Oj);
                xa(a).D(a.document, "click", B(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d =
                        ha.Pa,
                        e = a.Ya[ha.Ic],
                        f = !!e._informer;
                    e._informer = F({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || bc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function Pj(a, c, b) {
                return oa(a, "s", c)(Qj(), D(function(d) {
                    return d.host + ":" + d.port + "/p"
                }, b), {
                    Ah: !1,
                    Wj: !0,
                    Jd: !0
                })
            }

            function Rj(a, c, b) {
                var d = c || {},
                    e = oa(a, "u", b),
                    f = Na(a);
                return {
                    o: function(g, l) {
                        return R(d[g]) ? f.o(g, l) : d[g]
                    },
                    C: function(g, l) {
                        var m, p = "" + l;
                        d[g] = p;
                        f.C(g, p);
                        return e({
                            J: (m = {}, m.key = g, m.value = p, m)
                        }, [ha.Pa + "//mc.yandex.ru/user_storage_set"], {})["catch"](C(a,
                            "u.d.s.s"))
                    }
                }
            }

            function Sj(a, c) {
                if (a.jk()) {
                    var b = null;
                    try {
                        b = c.target || c.srcElement
                    } catch (k) {}
                    if (b) {
                        3 === b.nodeType && (b = b.parentNode);
                        for (var d = b && b.nodeName && ("" + b.nodeName).toLowerCase(); w(b, "parentNode.nodeName") && ("a" !== d && "area" !== d || !b.href && !b.getAttribute("xlink:href"));) d = (b = b.parentNode) && b.nodeName && ("" + b.nodeName).toLowerCase();
                        var e = b.href ? b : null
                    } else e = null;
                    if (e && !Bb("ym-disable-tracklink", e)) {
                        var f = a.b,
                            g = a.globalStorage;
                        b = a.Fi;
                        var l = a.Gi,
                            m = a.mj,
                            p = a.sender,
                            r = a.Ri,
                            t = l.Uc,
                            v = e.href;
                        d = ed(e &&
                            e.innerHTML && e.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        d = v === d ? "" : d;
                        if (Bb("ym-external-link", e)) fd(f, l, {
                            url: v,
                            Ce: !0,
                            title: d,
                            sender: p
                        });
                        else {
                            t = t ? yb(f, t).hostname : O(f).hostname;
                            r = RegExp("\\.(" + D(Tj, r).join("|") + ")$", "i");
                            var q = e.protocol + "//" + e.hostname + e.pathname;
                            r = ag.test(q) || ag.test(v) || r.test(v) || r.test(q);
                            e = e.hostname;
                            (t ? t.replace(/^www\./, "") : "").toLowerCase() === (e ? e.replace(/^www\./, "") : "").toLowerCase() ? r ? fd(f, l, {
                                url: v,
                                Be: !0,
                                title: d,
                                sender: p
                            }) : ((m = (f = g.o("pai", J)()) && f + "-" + m) && b.C("pai", m), d &&
                                b.C("il", ed(d).slice(0, 100))) : v && Uj.test(v) || fd(f, l, {
                                url: v,
                                kd: !0,
                                Ce: !0,
                                Be: r,
                                title: d,
                                sender: p
                            })
                        }
                    }
                }
            }

            function fd(a, c, b) {
                var d, e = pa();
                b.Be && e.C("dl", "1");
                b.Ce && e.C("ln", "1");
                e = {
                    Y: e,
                    title: b.title,
                    kd: !!b.kd,
                    ha: b.ha,
                    J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.Uc || O(a).href, d)
                };
                b.sender(e, c).then(V([a, B(b.Eb || J, b.b)], Cb), C(a, "cl.p.s"))
            }

            function Vj(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function gd(a, c) {
                return x(bg(c), ge(a))
            }

            function wc(a, c) {
                return x(Wj(c),
                    ge(a))
            }

            function ge(a) {
                a = X(a);
                var c = a.o("dsjf") || gb({});
                a.ib("dsjf", c);
                return c
            }

            function cg(a) {
                var c = dg(a).isEnabled,
                    b = !1;
                try {
                    b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
                } catch (d) {}
                return Zc(Boolean, [!c, b, a.Uint8Array, w(a, "Uint8Array.prototype.slice")])
            }

            function hd(a) {
                return va(a) ? D(hd, a) : ta(a) || "object" !== typeof a ? a : S(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = Xj[d];
                    R(f) && (f = d);
                    e = K(f, Yj) ? e : hd(e);
                    f ? c[f] = e : c[d] = e;
                    return c
                }, {}, Da(a))
            }

            function Ga() {
                var a = wa(arguments),
                    c = a.slice(1);
                eg(a[0]).log.apply(Ga, c)
            }

            function dg(a) {
                var c = fc(a),
                    b = O(a);
                c = "1" === c.o("debug");
                b = -1 < b.href.indexOf("_ym_debug=1");
                a = a._ym_debug;
                return {
                    lj: c,
                    rj: a || b,
                    isEnabled: Ca(Boolean, [c, a, b])
                }
            }

            function Zj(a, c, b) {
                var d;
                (d = ra[c]) || (d = Fa);
                d = d.slice();
                d.unshift(ak);
                d.unshift(bk);
                return D(x(V([a, c, b]), ea), d)
            }

            function fg(a, c) {
                var b = O(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!db(c) || R(c)) return d;
                b = c.replace(gg, "");
                if (-1 !== b.search(ck)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/),
                        -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, d.join("/");
                return ""
            }

            function bk(a) {
                return {
                    va: function(c, b) {
                        ae(a) || b()
                    }
                }
            }

            function ae(a) {
                var c = !!X(a).o("oo");
                var b = O(a).hostname;
                return c = c || be(a, b)
            }

            function be(a, c) {
                return "MetrikaPlayer" === a.name || dk.test(c)
            }

            function ek(a) {
                a = fk(a);
                return gk[a] || a
            }

            function hk(a) {
                a = hg(a);
                return ik[a] || "ru"
            }

            function Ua(a, c) {
                var b = X(a).o("counters", {}),
                    d =
                    P(c);
                return b[d]
            }

            function ak(a, c, b) {
                return {
                    va: function(d, e) {
                        jk(a, d, b, e)
                    }
                }
            }

            function jk(a, c, b, d) {
                if (b.Fk) d();
                else {
                    var e = he(a),
                        f = c.Y,
                        g = Vc(a, "");
                    c = g.o("gdpr");
                    d = f ? x(function() {
                        var q = g.o("gdpr");
                        q = K(q, Db) ? "-" + q : "";
                        f.C("gdpr", "" + ig(e) + q)
                    }, d) : d;
                    if (3 === b.id) d();
                    else {
                        var l = jg(a),
                            m = X(a),
                            p = z(e, kk),
                            r = m.o("f1");
                        if (r) r(d);
                        else if (r = (r = ig(e)) ? D(z(id, w), r.split(",")) : [], kg(r)) d();
                        else {
                            var t = O(a),
                                v = l && (-1 !== t.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                            g.o("yandex_login") ? (r.push("13"), g.C("gdpr", hc, 525600)) :
                                l ? K(c, Db) ? c === ie ? r.push("12") : r.push("3") : lg(a) || jd(a) ? r.push("17") : lk(a) && r.push("28") : r.push("14");
                            kg(r) ? (E(p, r), d()) : (kd.push(d), m.C("f1", function(q, k) {
                                var h = 0;
                                if (k) {
                                    var n = cb(a, k) || "";
                                    h += n.length
                                }
                                kd.push(q);
                                1E6 >= h && kd.push(q)
                            }), (0, je[0])(a).then(W("params.eu")).then(function(q) {
                                if (q || v) {
                                    g.C("gdpr_popup", ie);
                                    mk(a, b);
                                    if (nb(a)) return nk(a, p, b);
                                    var k = mg(a, e);
                                    if (k) return ok(a, p, k, b)
                                }
                                q || p("8");
                                return Q.resolve({
                                    value: hc,
                                    De: !0
                                })
                            }).then(function(q) {
                                g.Gb("gdpr_popup");
                                if (q) {
                                    var k = q.value;
                                    q = q.De;
                                    K(k, Db) &&
                                        g.C("gdpr", k, q ? void 0 : 525600)
                                }
                                k = ld(kd, ea);
                                ng(a, k, 20)(og(C(a, "gdr"), J));
                                m.C("f1", ea)
                            })["catch"](C(a, "gdp.a")))
                        }
                    }
                }
            }

            function nk(a, c, b) {
                var d = md(a, b);
                return new Q(function(e) {
                    var f;
                    if (d) {
                        var g = d.na;
                        d.fh((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.D(ia(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ke).join(","), function(m) {
                                e({
                                    value: pg(m[1].type)
                                })
                            })) : (c("6"), e())
                        })["catch"](function() {
                            c("4");
                            e()
                        })
                    } else e({
                        value: ie,
                        De: !0
                    })
                })
            }

            function mk(a, c) {
                var b = md(a, c);
                b && b.na.D("isYandex", function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = jg(a), d
                });
                return b
            }

            function ok(a, c, b, d) {
                var e = pk(a, d.Gk),
                    f = md(a, d);
                if (!f) return Q.resolve({
                    value: hc,
                    De: !0
                });
                var g = bc(a, {
                    src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + ".js"
                });
                return new Q(function(l, m) {
                    g ? (c("7"), g.onerror = function() {
                            var p;
                            c("9");
                            f.eh((p = {}, p.type = "GDPR-ok-view-default", p));
                            l()
                        }, g.onload = function() {
                            c("10");
                            b.D(ia(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ke).join(","), function(p) {
                                var r;
                                p = p.type;
                                f.eh((r = {}, r.type = p, r));
                                l({
                                    value: pg(p)
                                })
                            })
                        }) :
                        (c("9"), m(ob("gdp.e")))
                })
            }

            function pk(a, c) {
                var b = c || hg(a);
                return K(b, qk) ? b : "en"
            }

            function qg(a, c) {
                var b = rg(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = rk(a, b.lf),
                    g = sk(f);
                b.na.D("initToParent", function(l) {
                    g(d, b.$b[l[1].counterId])
                }).D("parentConnect", function(l) {
                    g(e, b.mc[l[1].counterId])
                });
                return {
                    na: b.na,
                    Hl: function(l, m) {
                        return new Q(function(p, r) {
                            b.lf(l, m, function(t, v) {
                                p([t, v])
                            });
                            Z(a, z(ob(), r), 5100, "is.o")
                        })
                    },
                    eh: function(l) {
                        var m = {
                            gh: [],
                            Bf: [],
                            data: l
                        };
                        d.push(m);
                        return f(b.$b, m, l)
                    },
                    fh: function(l) {
                        var m = {
                            gh: [],
                            Bf: [],
                            data: l
                        };
                        e.push(m);
                        return f(b.mc, m, l)
                    }
                }
            }

            function nd() {
                return function(a, c, b) {
                    return {
                        va: function(d, e) {
                            var f, g = d.Y,
                                l = d.J;
                            if (g && l) {
                                var m = K(l["wv-type"], tk);
                                if (!l["wv-type"] || m) {
                                    var p = ca(a);
                                    g.qf("rqnl", 1);
                                    g = g.b();
                                    for (var r = xc(a), t = 1; r[t];) t += 1;
                                    d.rc = t;
                                    r[t] = (f = {}, f.protocol = ha.Pa, f.host = "mc.yandex.ru", f.resource = m ? "webvisor" : "watch", f.postParams = d.ja, f.time = p(fa), f.counterType = b.ra, f.params = l, f.browserInfo = g, f.counterId = b.id, f.ghid = ic(a), f);
                                    le(a)
                                }
                            }
                            e()
                        },
                        pb: function(d, e) {
                            sg(a, d);
                            e()
                        }
                    }
                }
            }

            function sg(a,
                c) {
                var b = xc(a);
                c.Y && !Ya(b) && (delete b[c.rc], le(a))
            }

            function le(a) {
                var c = xc(a);
                Na(a).C("retryReqs", c)
            }

            function od(a, c, b) {
                var d = rb(a, c);
                return function(e, f, g) {
                    var l = F({
                        Y: pa()
                    }, e);
                    l.J || (l.J = {});
                    var m = l.J;
                    m.wmode = "0";
                    m["wv-part"] = "" + g;
                    m["wv-hit"] = m["wv-hit"] || "" + ic(a);
                    m["page-url"] = m["page-url"] || a.location.href;
                    e = m["wv-type"] ? Q.resolve(m["wv-type"]) : uk(P(f), !!l.zg);
                    m.rn = m.rn || "" + kb(a);
                    var p = ha.Pa + "//mc.yandex.ru/webvisor/" + f.id;
                    return e.then(function(r) {
                        m["wv-type"] = r;
                        return Eb(a, b, l, !0).then(function() {
                            var t;
                            return d(F(l, {
                                J: m
                            }), [p], {
                                oc: (t = {}, t["Content-Type"] = "text/plain", t),
                                zh: "POST",
                                ja: l.ja
                            })
                        }).then(function(t) {
                            return Eb(a, b, l).then(z(t, N))
                        })
                    })
                }
            }

            function uk(a, c) {
                return Ma(Sa(a)).then(function(b) {
                    b = !!w(b, "settings.publisher.schema");
                    var d = "4",
                        e = "2";
                    c && (d = "5", e = "3");
                    return b ? d : e
                })
            }

            function vk(a, c, b, d) {
                c = d.o("cc");
                d = V(["cc", ""], d.C);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && parseInt(e, 10)) && 1440 < ca(a)(eb) - e) return d();
                    b.C("cc", c)
                } else ya(0, c) || d()
            }

            function wk(a, c, b, d) {
                return Ma(Sa(P(c))).then(function(e) {
                    if ("0" ===
                        w(e, "settings.pcs") && !yc(a))
                        if (e = d.o("zzlc"), R(e) || Ya(e) || "na" === e) {
                            e = "ru";
                            var f = tg(a, 68),
                                g = ug(a, 79);
                            if (f || g) e = "md";
                            if (f = bb(a)) {
                                var l = f("iframe");
                                F(l.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                l.src = "https://mc.yandex." + e + Ef("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = zb(a)) {
                                    e.appendChild(l);
                                    var m = 0,
                                        p = xa(a).D(a, "message", C(a, "zz.m", function(r) {
                                            (r = w(r, "data")) && r.substr && "__ym__zz" === r.substr(0, 8) && (jc(l), r = r.substr(8), d.C("zzlc", r), b.C("zzlc", r), p(), ua(a, m))
                                        }));
                                    m = Z(a, x(p, z(l, jc)), 3E3,
                                        "zz.i")
                                }
                            }
                        } else b.C("zzlc", e)
                })
            }

            function xk(a, c, b, d, e, f, g, l) {
                var m = b.o(f);
                ta(m) && (b.C(f, g), e(a, c, b, d), m = b.o(f, g));
                R(l) || l.qf(f, "" + m);
                return m
            }

            function vg(a) {
                var c;
                a: {
                    if ((c = pb(a)) && (c = yk.exec(c)) && 1 < c.length) {
                        c = parseInt(c[1], 10);
                        break a
                    }
                    c = 0
                }
                return 50 <= c && 99 >= c || ug(a, 79) ? !1 : !me(a) || lg(a)
            }

            function tg(a, c) {
                if (ne(a) && c) {
                    var b = pb(a).match(zk);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function ug(a, c) {
                var b = pb(a);
                return b && (b = b.match(Ak)) && 1 < b.length ? parseInt(b[1], 10) >= c : !1
            }

            function Bk(a, c, b) {
                var d, e;
                c = La(z(a,
                    w), Ck);
                c = R(c) ? null : w(a, c);
                if (w(a, "navigator.onLine") && c && c && w(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = w(f, "createDataChannel");
                    U(a) && (B(a, f, "y.metrika")(), a = w(f, "createOffer"), U(a) && !a.length && (a = B(a, f)(), d = w(a, "then"), U(d) && B(d, a, function(g) {
                        var l = w(f, "setLocalDescription");
                        U(l) && B(l, f, g, J, J)()
                    })(), F(f, (e = {}, e.onicecandidate = function() {
                        var g, l = w(f, "close");
                        if (U(l)) {
                            l = B(l, f);
                            try {
                                var m = (g = w(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (p) {
                                f.onicecandidate =
                                    J;
                                "closed" !== f.iceConnectionState && l();
                                return
                            }
                            m && 0 < m.length && (g = zc(m[1]), b.C("pp", g));
                            f.onicecandidate = J;
                            l()
                        }
                    }, e))))
                }
            }

            function Dk(a, c, b) {
                var d, e = rg(a, c);
                if (e) {
                    e.na.D("gpu-get", function() {
                        var l;
                        return l = {}, l.type = "gpu-get", l.pu = b.o("pu"), l
                    });
                    var f = w(a, "opener");
                    if (f) {
                        var g = Z(a, V([a, c, b], wg), 200, "pu.m");
                        e.lf(f, (d = {}, d.type = "gpu-get", d), function(l, m) {
                            var p = w(m, "pu");
                            p && (ua(a, g), b.C("pu", p))
                        })
                    } else wg(a, c, b)
                }
            }

            function wg(a, c, b) {
                var d = w(a, "location.host");
                a = oe(a, c.Ie, c.Mb);
                b.C("pu", "" + zc(d) + a)
            }

            function Ek(a,
                c) {
                var b = pd(a);
                c.D("initToParent", function(d) {
                    var e = d[1];
                    b.$b[e.counterId] = {
                        info: e,
                        window: d[0].source
                    }
                }).D("initToChild", function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.ma("parentConnect", [e, d])
                }).D("parentConnect", function(d) {
                    var e = d[1];
                    e.counterId && (b.mc[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function pe(a, c, b) {
                return {
                    va: function(d, e) {
                        var f = d.Y;
                        if (f && (!b || b.dh)) {
                            var g = a.document.title;
                            d.title && (g = d.title);
                            var l = Fb("getElementsByTagName", a.document);
                            "string" !== typeof g && l && (g = l("title"),
                                g = (g = w(g, "0.innerHtml")) ? g : "");
                            g = g.slice(0, ha.$h);
                            f.C("t", g)
                        }
                        e()
                    }
                }
            }

            function Pb(a) {
                void 0 === a && (a = Fk);
                return function(c, b, d) {
                    return {
                        va: function(e, f) {
                            var g = e.Y,
                                l = e.J;
                            g && l && E(function(m) {
                                C(c, "bi:" + m, x(V([c, d, e], lb[m]), B(g.qf, g, m)))()
                            }, a);
                            f()
                        }
                    }
                }
            }

            function oe(a, c, b) {
                var d = c || "uid";
                c = c ? a.location.hostname : void 0;
                var e = fc(a),
                    f = Na(a),
                    g = ca(a),
                    l = g(qd),
                    m = f.o(d),
                    p = e.o("d"),
                    r = e.o(d),
                    t = !1;
                !r && m && (r = m, t = !0);
                if (!r) r = [g(qd), kb(a)].join(""), t = !0;
                else if (!p || 15768E3 < l - parseInt(p, 10)) t = !0;
                t && !b && (e.C(d, r, 525600, c), e.C("d",
                    "" + l, 525600, c));
                f.C(d, r);
                return r
            }

            function Qf(a, c, b) {
                Ac(a, "metrika_enabled", "1", 0, c, b);
                (b = gc(a, "metrika_enabled")) && Ac(a, "metrika_enabled", "", -100, c, void 0);
                return !!b
            }

            function gc(a, c) {
                var b = null;
                try {
                    b = a.document.cookie
                } catch (d) {
                    return null
                }
                return (b = (new RegExp("(?:^|;\\s*)" + c + "=([^;]*)")).exec(b)) && 2 <= b.length ? b[1] : null
            }

            function Rf(a, c, b) {
                K(b, ["gdpr", "gdpr_popup", "metrika_enabled"]) ? a = !0 : (b = he(a), b = xg(b), a = c(a, "gdpr"), a = Y(sb(Gk), b).length ? !0 : K(a, [hc, Hk]));
                return a
            }

            function pg(a) {
                if (K(a, ["GDPR-ok-view-default",
                        "GDPR-ok-view-detailed"
                    ])) return hc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return K(a, Db) ? a : hc
            }

            function mg(a, c, b) {
                void 0 === b && (b = N);
                var d = rc(a);
                b(d);
                var e = G(Ik)(d);
                qe(a, c, function(f) {
                    f.D(e)
                });
                return d
            }

            function Ik(a, c) {
                var b = w(c, "ymetrikaEvent");
                b && a.ma(w(b, "type"), b)
            }

            function qe(a, c, b) {
                void 0 === b && (b = J);
                var d = yg(a);
                if (c && U(c.push)) {
                    var e = c.push;
                    c.push = function() {
                        var f = wa(arguments),
                            g = e.apply(c, f);
                        d.ma(f[0]);
                        return g
                    };
                    b(d);
                    E(B(d.ma, d), c);
                    return d
                }
            }

            function he(a) {
                a = X(a);
                var c = a.o("dataLayer", []);
                a.C("dataLayer", c);
                return c
            }

            function kk(a, c) {
                var b, d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function ic(a) {
                var c = X(a),
                    b = c.o("hitId");
                b || (b = kb(a), c.C("hitId", b));
                return b
            }

            function Of(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >>
                        6 & 63
                    ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63]])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "="]);
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b &
                            63
                        ], "="])
                }
                e = e.join("");
                return c ? Ud(e, !0) : e
            }

            function Ef(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Ud(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > l || 0 > m) return null;
                    var p = f << 18 | g << 12 | l << 6 | m;
                    f = p >> 16 & 255;
                    g = p >> 8 & 255;
                    p &= 255;
                    d = 64 === l ? d + String.fromCharCode(f) : 64 === m ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, p)
                } while (e < b.length);
                return d
            }

            function Ud(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return Jk[b] || b
                }) : ""
            }

            function zg(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Ae: Kk(a),
                    o: function(e, f) {
                        var g = Ag(a, "" + d + e);
                        return Ya(g) && !R(f) ? f : g
                    },
                    C: function(e, f) {
                        Bg(a, "" + d + e,
                            f);
                        return this
                    },
                    Gb: function(e) {
                        Cg(a, "" + d + e);
                        return this
                    }
                }
            }

            function Bg(a, c, b) {
                var d = re(a);
                a = cb(a, b);
                if (!Ya(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function Ag(a, c) {
                var b = re(a);
                try {
                    return xb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Cg(a, c) {
                var b = re(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function re(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function Dg(a, c) {
                var b = a.length ? D(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                E(x(N, da("push", a)), c);
                return Y(ya(null), b).length === a.length ?
                    null : b
            }

            function Eg(a, c, b) {
                return D(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (U(e)) return e(a, c) || null;
                    if (U(f)) return null;
                    var g = !(!c[e] || !c[f]);
                    !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Fg[d[0]] || Fg[g]));
                    return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
                }, b)
            }

            function Bc(a, c, b) {
                return {
                    va: function(d, e) {
                        var f = Gg(b),
                            g = d.Y;
                        g ? g.o("pv") && !g.o("ar") ? (f.rg = g, e()) : (f = f.je, !0 === f ? e() : f.push(e)) : e()
                    },
                    pb: function(d, e) {
                        var f = d.Y,
                            g = d.Vj,
                            l = Gg(b);
                        if (f) {
                            var m =
                                l.je;
                            l.rg === f && !0 !== m && (g && X(a).C("isEU", w(g, "settings.eu")), E(ea, m), l.je = !0)
                        }
                        e()
                    }
                }
            }

            function se(a) {
                return {
                    va: function(c, b) {
                        var d = a.document,
                            e = c.Y;
                        if (e && te(a)) {
                            var f = xa(a);
                            f.D(d, "webkitvisibilitychange,visibilitychange", Hg(a, f, b));
                            e.C("pr", "1")
                        } else b()
                    }
                }
            }

            function Ja(a, c, b) {
                var d = rb(a, c);
                return function(e, f) {
                    var g, l = F({
                            Y: pa()
                        }, e),
                        m = ha.Pa + "//" + Lk(a) + "/watch/" + f.id,
                        p = l.J,
                        r = l.Y;
                    p = (g = {}, g["page-url"] = p && p["page-url"] || "", g.charset = "utf-8", g);
                    "0" !== f.ra && (p["cnt-class"] = f.ra);
                    var t = F(l, {
                        J: F(l.J || {}, p)
                    });
                    return Eb(a, b, l, !0)["catch"](C(a, "h.m.b")).then(function() {
                        return d(t, ["" + m], {
                            ja: l.ja,
                            Jd: !(!r.o("pv") || r.o("ar") || r.o("wh"))
                        })
                    }).then(function(v) {
                        l.Vj = v.qc;
                        return Eb(a, b, l).then(z(v.qc, N))
                    })
                }
            }

            function Lk(a) {
                var c = "mc.yandex.ru",
                    b = w(a, "document.referrer");
                if (!b) return c;
                (a = yb(a, b).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) ? (a = a[0].split("yandex").reverse()[0].substring(1), a = K(a, Ig) ? a : !1) : a = !1;
                return "mc.yandex." + (a || "ru")
            }

            function Mk(a, c) {
                return a && c ? Jg(a) === Jg(c) : a || c ? !1 : !0
            }

            function Jg(a) {
                return (a.split(":")[1] ||
                    "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Kg(a) {
                return -1 !== O(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
            }

            function O(a) {
                return S(function(c, b) {
                    var d = w(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Nk)
            }

            function rb(a, c) {
                return function(b, d, e) {
                    void 0 === e && (e = {});
                    return Lg(a, c, d, b, F(e, {
                        ab: b.ab || []
                    }))
                }
            }

            function Lg(a, c, b, d, e, f, g) {
                var l;
                void 0 === f && (f = 0);
                void 0 === g && (g = 0);
                var m = F({}, e),
                    p = c[g],
                    r = p[0];
                p = p[1];
                var t = F({}, d.J),
                    v = ca(a);
                d.Y && (t["browser-info"] =
                    pa(d.Y.b()).C("ti", r).C("st", v(qd)).yb());
                v = b[f];
                m.oc && m.oc["Content-Type"] || !m.ja || (m.oc = F({}, m.oc, (l = {}, l["Content-Type"] = "application/x-www-form-urlencoded", l)), m.ja = "site-info=" + ue(m.ja));
                m.zh = m.ja ? "POST" : "GET";
                m.pc = t;
                m.ab.push(r);
                return p("" + v + (d.Cj ? "/1" : ""), m).then(function(q) {
                    return {
                        qc: q,
                        vk: f
                    }
                })["catch"](function(q) {
                    var k = g + 1 >= c.length,
                        h = f + 1 >= b.length;
                    if (k && h) throw q;
                    return Lg(a, c, b, d, e, !h && k ? f + 1 : f, k ? 0 : g + 1)
                })
            }

            function Eb(a, c, b, d) {
                void 0 === d && (d = !1);
                return new Q(function(e, f) {
                    var g = x(Gb, ea,
                            e),
                        l = ld(c.slice().concat([{
                            va: g,
                            pb: g
                        }]), function(m, p) {
                            var r = d ? m.va : m.pb;
                            if (r) try {
                                r(b, p)
                            } catch (t) {
                                l(Ok), f(t)
                            } else p()
                        });
                    l(ve(a))
                })
            }

            function Pk(a) {
                a.flush = !0
            }

            function ng(a, c, b, d) {
                function e(f, g) {
                    function l() {
                        try {
                            var p = c(we(a, b));
                            m = m.concat(p)
                        } catch (r) {
                            f(r)
                        }
                        c(Mg);
                        if (c(Cc)) return g(m);
                        e.flush ? (c(we(a, 1E4)), g(m)) : Z(a, l, d)
                    }
                    var m = [];
                    l()
                }
                void 0 === b && (b = 1);
                void 0 === d && (d = 200);
                return gb(e)
            }

            function xe(a) {
                return gb(function(c, b) {
                    b(a)
                })
            }

            function ld(a, c) {
                void 0 === c && (c = N);
                return gb({
                    hd: a,
                    Cg: c,
                    vc: !1,
                    cb: 0
                })
            }

            function Qk(a) {
                if (Cc(a)) throw Error("i");
                var c = a.Cg(a.hd[a.cb]);
                a.cb += 1;
                return c
            }

            function Mg(a) {
                a.vc = !1
            }

            function Rk(a) {
                a.vc = !0
            }

            function Ok(a) {
                a.cb = a.hd.length
            }

            function Cc(a) {
                return a.vc || a.hd.length <= a.cb
            }

            function fb(a) {
                a = ca(a);
                return Math.round(a(rd) / 50)
            }

            function rd(a) {
                var c = a.vd,
                    b = c[1];
                a = c[0] && b ? b() : fa(a) - a.nj;
                return Math.round(a)
            }

            function qd(a) {
                return Math.round(fa(a) / 1E3)
            }

            function eb(a) {
                return Math.floor(fa(a) / 1E3 / 60)
            }

            function fa(a) {
                var c = a.Df;
                return 0 !== c ? c : ye(a.b, a.vd)
            }

            function Ng(a) {
                return a.vd[0]
            }

            function Og(a) {
                var c = xa(a),
                    b = Pg(a),
                    d = {
                        b: a,
                        Df: 0,
                        vd: b,
                        nj: ye(a, b)
                    };
                c.D(a, "beforeunload,unload", function() {
                    0 === d.Df && (d.Df = ye(a, d.vd))
                });
                return gb(d)
            }

            function Sk(a) {
                return (10 >= a ? "0" : "") + a
            }

            function ye(a, c) {
                var b = c || Pg(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && U(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function Pg(a) {
                a = ze(a);
                var c = w(a, "timing.navigationStart"),
                    b = w(a, "now");
                b && (b = B(b, a));
                return [c, b]
            }

            function ze(a) {
                return w(a, "performance") || w(a, "webkitPerformance")
            }

            function rc(a) {
                var c = {};
                return {
                    D: function(b, d) {
                        E(function(e) {
                            w(c,
                                e) || (c[e] = yg(a));
                            c[e].D(d)
                        }, b.split(","));
                        return this
                    },
                    Aa: function(b, d) {
                        E(function(e) {
                            w(c, e) && c[e].Aa(d)
                        }, b.split(","));
                        return this
                    },
                    ma: function(b, d) {
                        return S(function(e, f) {
                            return w(c, f) ? e.concat(C(a, "e." + f, c[f].ma)(d)) : e
                        }, [], b.split(","))
                    }
                }
            }

            function yg(a) {
                var c = [],
                    b = {};
                b.D = x(da("push", c), z(b, N));
                b.Aa = x(Qb(jb(a))(c), Qb(da("splice", c))(1), z(b, N));
                b.ma = x(N, Qb(ea), Tk(c));
                return b
            }

            function Uk(a, c) {
                var b = a.document;
                if (K(b.readyState, ["interactive", "complete"])) Z(a, c, 0);
                else {
                    var d = xa(a),
                        e = d.D,
                        f = d.wc,
                        g =
                        function() {
                            f(b, "DOMContentLoaded", g);
                            f(a, "load", g);
                            c()
                        };
                    e(b, "DOMContentLoaded", g);
                    e(a, "load", g)
                }
            }

            function Qg(a, c, b, d, e) {
                var f = Rg(a, Sg),
                    g = Rg(a, Tg);
                if (f || g) {
                    var l = f ? Sg : Tg;
                    g = l[0];
                    l = l[1];
                    B.apply(void 0, ia([a[e ? l : g], a], f ? [c, b, d] : ["on" + c, b]))()
                }
            }

            function Rg(a, c) {
                return S(function(b, d) {
                    return b && a[d]
                }, !0, c)
            }

            function Vk(a, c) {
                return a.clearInterval(c)
            }

            function Wk(a, c, b, d) {
                return a.setInterval(C(a, "i.err." + (d || "def"), c), b)
            }

            function Z(a, c, b, d) {
                return sd(a, C(a, "d.err." + (d || "def"), c), b)
            }

            function I(a, c, b) {
                return function() {
                    return C(arguments[0],
                        a, c, b).apply(this, arguments)
                }
            }

            function C(a, c, b, d, e) {
                function f(l) {
                    throw l;
                }
                var g = b || f;
                return function() {
                    var l = d;
                    try {
                        l = g.apply(e || null, arguments)
                    } catch (m) {
                        td(a, c, m)
                    }
                    return l
                }
            }

            function td(a, c, b) {
                var d, e, f, g, l, m;
                if (!(.01 >= a.Math.random())) {
                    var p = "u.a.e",
                        r = "";
                    b && ("object" === typeof b ? (p = b.message, r = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : p = "" + b);
                    if (!Xk(p) && !Ca(x(da("indexOf", p), ya(-1), Rb), Yk)) {
                        b = ha.Pa + "//mc.yandex.ru/watch/" + ha.Th;
                        try {
                            var t = Ae(a, "er")[0];
                            var v = void 0 === t ? [] :
                                t;
                            var q = v[1];
                            var k = void 0 === q ? null : q
                        } catch (h) {
                            return
                        }
                        t = (d = {}, d["browser-info"] = "ar:1:pv:1:v:" + ha.Cb + ":vf:" + Hb.version, d["page-url"] = a.location && "" + a.location.href, d);
                        a = cb(a, (e = {}, e.jserrs = (f = {}, f[ha.Cb] = (g = {}, g[p] = (l = {}, l[c] = (m = {}, m[a.location.href] = r, m), l), g), f), e));
                        if (k && a) k(b, {
                            pc: t,
                            ab: [],
                            ja: "site-info=" + ue(a)
                        })["catch"](J)
                    }
                }
            }

            function tb(a) {
                return D(function(c) {
                    return !c || K(c, a) ? c : 0
                }, Sb)
            }

            function Ug(a) {
                var c = w(a, "navigator.sendBeacon");
                return c && la("sendBeacon", c) && !jd(a) ? Zk(a, B(c, w(a, "navigator"))) :
                    !1
            }

            function Be(a) {
                return bb(a) ? $k(a) : !1
            }

            function al(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function kb(a, c, b) {
                var d = R(b);
                R(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function $d(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
            }

            function Dc(a) {
                var c = bb(a);
                return c ? bl(a, c) : !1
            }

            function Sf(a, c, b) {
                if (a.document.querySelectorAll && la("querySelectorAll", w(a, "Element.prototype.querySelectorAll"))) return na(b.querySelectorAll(c));
                var d = Vg(c.split(" "), b);
                return Y(function(e, f) {
                    return jb(a)(e, d) === f
                }, d)
            }

            function Vg(a, c) {
                var b = ia(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? vb(z(b, Vg), na(d)) : na(d)
            }

            function Tb(a, c, b) {
                return c ? (a = c.querySelectorAll(b)) ? na(a) : [] : []
            }

            function bc(a, c) {
                var b = a.document,
                    d = F({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = bb(a);
                if (e) {
                    var f = e("script");
                    Ce(Da, Ra(function(p) {
                        var r = p[0];
                        p = p[1];
                        "async" === r && p ? f.async = !0 : f[r] = p
                    }))(d);
                    try {
                        var g = Fb("getElementsByTagName",
                                b),
                            l = g("head")[0];
                        if (!l) {
                            var m = g("html")[0];
                            l = e("head");
                            m && m.appendChild(l)
                        }
                        l.insertBefore(f, l.firstChild);
                        return f
                    } catch (p) {}
                }
            }

            function Wg(a, c) {
                var b = "",
                    d = "width height align title alt name".split(" "),
                    e = qa(c);
                "IMG" === e && (b += c.src.toLowerCase());
                "A" === e && (b += c.href.toLowerCase());
                b += ("" + (c.className || "")).toLowerCase();
                for (e = 0; e < d.length; e += 1) c.getAttribute && (b += ("" + (c.getAttribute(d[e]) || "")).toLowerCase());
                return ad(b.replace(/[\u0000-\u0020]+/g, ""))
            }

            function Xg(a, c) {
                for (var b = "", d = c.childNodes,
                        e = d.length, f = 0; f < e; f += 1) d[f] && 3 === d[f].nodeType && (b += d[f].nodeValue);
                return ad(b.replace(/[\u0000-\u0020]+/g, ""))
            }

            function cl(a, c) {
                var b = va(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) return b = D(function(e) {
                    return "." + e
                }, b).join(","), na(c.querySelectorAll(b));
                if (c.getElementsByClassName) return vb(x(da("getElementsByClassName", c), na), b);
                var d = c.getElementsByTagName("*");
                return Y(z("(" + b.join("|") + ")", Bb), na(d))
            }

            function wf(a, c) {
                for (var b = "", d = c, e = dl(), f = qa(d) || "*"; d && d.parentNode && !K(f, ["BODY", "HTML"]);) b +=
                    e[f] || "*", b += Yg(a, d) || "", d = d.parentElement, f = qa(d) || "*";
                return ed(b, 128)
            }

            function Yg(a, c) {
                var b = Ec(a, c);
                if (b) {
                    b = b.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < b.length; f += 1)
                        if (d === (b[f] && b[f].nodeName)) {
                            if (c === b[f]) return e;
                            e += 1
                        }
                }
                return 0
            }

            function Ec(a, c) {
                var b = w(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === Ub(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }

            function ee(a, c) {
                var b = De(a, c),
                    d = b.left;
                b = b.top;
                var e = ud(a, c);
                return [d, b, e[0], e[1]]
            }

            function ud(a, c) {
                var b =
                    w(a, "document");
                if (c === Ub(a) || c === b.documentElement) {
                    b = zb(a);
                    var d = Fc(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = sc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function De(a, c) {
                var b = c,
                    d = w(a, "document"),
                    e = qa(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === Ub(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = b.getBoundingClientRect && sc(b)) return b = fe(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b =
                    b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function Zb(a, c, b) {
                if (!(a && a.Element && a.Element.prototype && a.document)) return null;
                if (a.Element.prototype.closest && la("closest", a.Element.prototype.closest)) return c.closest(b);
                var d = Zf(a);
                if (d) {
                    for (; c && 1 === c.nodeType && !d.call(c, b);) c = c.parentElement || c.parentNode;
                    return c && 1 === c.nodeType ? c : null
                }
                if (a.document.querySelectorAll && la("querySelectorAll", w(a, "Element.prototype.querySelectorAll"))) {
                    for (b = na((a.document || a.ownerDocument).querySelectorAll(b)); c && 1 === c.nodeType &&
                        -1 === jb(a)(c, b);) c = c.parentElement || c.parentNode;
                    return c && 1 === c.nodeType ? c : null
                }
                return null
            }

            function Zg(a) {
                return dd(a) && !Ca(ya(a.type), el) ? $g(a) ? !a.checked : !a.value : fl(a) ? !a.value : gl(a) ? 0 > a.selectedIndex : !0
            }

            function qa(a) {
                if (a) try {
                    var c = db(a.nodeName) ? a.nodeName : null,
                        b = db(a.tagName) ? a.tagName : null;
                    return c || b || void 0
                } catch (d) {}
            }

            function ah(a, c) {
                var b = a.document.getElementsByTagName("form");
                return jb(a)(c, na(b))
            }

            function hl(a, c, b) {
                b = Fb("dispatchEvent", b || a.document);
                var d = null;
                if (!R(a.Event)) try {
                    d =
                        new a.Event(c)
                } catch (e) {
                    if ((a = Fb("createEvent", w(a, "document"))) && U(a)) {
                        try {
                            d = a(c)
                        } catch (f) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function sc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Gg && c.Gg & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function fe(a) {
                var c = Ub(a),
                    b = w(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement &&
                        b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Fc(a) {
                var c = Ee(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = zb(a);
                return [w(c, "clientWidth") || a.innerWidth, w(c, "clientHeight") || a.innerHeight]
            }

            function Ee(a) {
                var c = w(a, "visualViewport.width"),
                    b = w(a, "visualViewport.height");
                a = w(a, "visualViewport.scale");
                return ta(c) || ta(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function zb(a) {
                var c = w(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Ub(a) || b
            }

            function Ub(a) {
                a =
                    w(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function Bb(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function Vb(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function jc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Zd(a) {
                if (ta(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function Ib(a) {
                var c;
                if (c =
                    w(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (il.test(a.location.host) && a.opera && U(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    } return c ? jl(a) : !1
            }

            function kl(a, c, b, d, e, f, g, l) {
                if (4 === c.readyState)
                    if (200 !== c.status && g(b), e) f(c.responseText);
                    else {
                        e = null;
                        if (d) try {
                            (e = xb(a, c.responseText)) || g(b)
                        } catch (m) {
                            g(b)
                        }
                        f(e)
                    } return l
            }

            function bh(a, c, b) {
                (b = Uc(b)) && (a += "?" + b);
                c.ja && (a += (b ? "&" : "?") + c.ja);
                return a
            }

            function Fe() {
                for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
                throw ob.apply(void 0, a);
            }

            function ob(a) {
                var c = "";
                va(a) ? c = a.join(".") : db(a) && (c = a);
                return Error("err.kn(" + ha.Cb + ")" + c)
            }

            function pa(a) {
                var c = a || {};
                return {
                    b: z(c, N),
                    o: function(b, d) {
                        var e = c[b];
                        return R(e) && !R(d) ? d : e
                    },
                    C: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    qf: function(b, d) {
                        return "" === d || ta(d) ? this : this.C(b, d)
                    },
                    yb: z(c, x(Da, Cf(function(b, d) {
                        return "t" === b[0] ? 1 : "t" === d[0] ? -1 : 0
                    }), kc(function(b, d) {
                        b.push(d.join(":"));
                        return b
                    }, []), da("join"), z(":"), ea))
                }
            }

            function cb() {
                var a,
                    c = wa(arguments),
                    b = c[0];
                c = c.slice(1);
                try {
                    return (a = b.JSON).stringify.apply(a, c)
                } catch (d) {
                    return null
                }
            }

            function Uc(a) {
                return a ? x(Da, kc(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    R(e) || ta(e) || c.push(d + "=" + ue(e));
                    return c
                }, []))(a).join("&") : ""
            }

            function Td(a) {
                return a ? x(Ra(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], ta(b) ? void 0 : Wc(b)]
                }), kc(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function Wc(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function ue(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a =
                    Y(function(c) {
                        return 55296 >= c.charCodeAt(0)
                    }, a.split("")).join("");
                return encodeURIComponent(a)
            }

            function ll(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    ra: d,
                    Jc: e,
                    ha: b
                };
                a = S(function(g, l) {
                    var m = l[1],
                        p = m.Dj;
                    m = f[m.Kg];
                    g[l[0]] = p ? p(m) : m;
                    return g
                }, {}, Da(c));
                ch(a, a.ha || {});
                return a
            }

            function ml(a, c) {
                return S(function(b, d) {
                    b[c[d[0]].Kg] = d[1];
                    return b
                }, {}, Da(a))
            }

            function dh(a) {
                a = P(a);
                return !(!ub[a] || !ub[a].hk)
            }

            function ch(a, c) {
                var b = P(a),
                    d = w(c, "__ym.turbo_page"),
                    e = w(c, "__ym.turbo_page_id");
                ub[b] || (ub[b] = {});
                if (d || e) ub[b].hk = d, ub[b].oh = e
            }

            function P(a) {
                return a.id + ":" + a.ra
            }

            function te(a) {
                return K("prerender", D(z(w(a, "document"), w), ["webkitVisibilityState", "visibilityState"]))
            }

            function eh(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function na(a) {
                if (a) {
                    if (!va(a)) {
                        vf();
                        if ("undefined" === typeof Symbol) var c = !1;
                        else try {
                            vf(), oi(), c = U(a[Symbol.iterator])
                        } catch (b) {
                            c = !1
                        }
                        a = c && la("from", Array.from) ? Array.from(a) : "number" === typeof a.length && 0 <= a.length ? wa(a) : []
                    }
                } else a = [];
                return a
            }

            function Hi(a) {
                if (0 > a) return [];
                for (var c = [], b = 0; b <= a; b += 1) c.push(b);
                return c
            }

            function vd(a, c, b) {
                return b ? a : c
            }

            function wd() {
                return []
            }

            function xd() {
                return {}
            }

            function x() {
                var a = wa(arguments);
                return function() {
                    var c = wa(arguments);
                    return S(function(b, d, e) {
                        b = d.apply(void 0, b);
                        return e + 1 === a.length ? b : [b]
                    }, c, a)
                }
            }

            function Cb(a, c) {
                try {
                    if (U(c)) {
                        var b = wa(arguments).slice(2);
                        c.apply(void 0, b)
                    }
                } catch (d) {
                    sd(a, function() {
                        throw d;
                    }, 0)
                }
            }

            function ea(a, c) {
                return c ? a(c) : a()
            }

            function J() {}

            function sd(a, c, b) {
                return Fb("setTimeout", a)(c, b)
            }

            function ua(a, c) {
                return Fb("clearTimeout",
                    a)(c)
            }

            function Fb(a, c) {
                var b = w(c, a),
                    d = w(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function A(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : N;
                return function() {
                    var f = wa(arguments),
                        g = e.apply(void 0, f),
                        l = fh(g, d);
                    if (-1 !== l) return b[l];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Rb(a) {
                return !a
            }

            function Gb(a, c) {
                return c
            }

            function N(a) {
                return a
            }

            function jb(a) {
                if (Ge) return Ge;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b =
                    wb(a.Array.prototype.indexOf, "indexOf");
                return Ge = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : nl
            }

            function nl(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function gh(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    ib: function(b, d) {
                        He.call(c, b) || (c[b] = d);
                        return this
                    },
                    C: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    o: function(b, d) {
                        var e = c[b];
                        return He.call(c, b) || R(d) ? e : d
                    }
                }
            }

            function hh(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                S(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    b[d] = e ===
                        a.length - 2 ? a[e + 1] : b[d] || {};
                    return b[d]
                }, c, a);
                return c
            }

            function w(a, c) {
                return a ? S(function(b, d) {
                    if (ta(b)) return b;
                    var e = null;
                    try {
                        e = b[d]
                    } catch (f) {}
                    return e
                }, a, c.split(".")) : null
            }

            function wb(a, c) {
                return la(c, a) && a
            }

            function ol(a) {
                return R(a) ? [] : Gc(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], ih(a))
            }

            function pl(a, c) {
                return Gc(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(va(d) ? d : [d])
                }, [], c)
            }

            function ql(a, c) {
                return Gc(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function rl() {
                var a = wa(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = ia(d, wa(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, ia([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && jh(f, e, b);
                        delete b[f];
                        return e
                    }
                    return jh(c, e)
                }
            }

            function jh(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                U(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function sl() {
                var a = wa(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) vc(b, d) && (c[d] = b[d]);
                    vc(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function ih(a) {
                var c = [],
                    b;
                for (b in a) vc(a, b) && c.push(b);
                return c
            }

            function tl(a, c) {
                return 1 <= kh(ya(a), c).length
            }

            function kh(a, c) {
                return Gc(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function Gc(a, c, b) {
                var d = 0,
                    e = b.length;
                R(c) && (c = b[0], d += 1);
                for (; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function vc(a, c) {
                return ta(a) ? !1 : He.call(a, c)
            }

            function va(a) {
                return la("isArray", Array.isArray) ?
                    Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
            }

            function la(a, c) {
                return c && "function" === typeof c ? (new RegExp("function\\s*(" + a + ")?\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", "i")).test("" + c) : !1
            }

            function ec(a) {
                return !Ya(a) && !R(a) && "[object Object]" === Object.prototype.toString.call(a)
            }

            function ta(a) {
                return R(a) || Ya(a)
            }

            function U(a) {
                return "function" === typeof a
            }

            function Qb(a) {
                return G(function(c, b) {
                    return a(b, c)
                })
            }

            function G() {
                var a = wa(arguments),
                    c = a[0],
                    b = a.slice(1);
                return function() {
                    var d =
                        wa(arguments);
                    return c.length > d.length + b.length ? G.apply(void 0, ia([c], b, d)) : c.apply(void 0, ia(b, d))
                }
            }

            function wa(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b[d] = a[d];
                return b
            }

            function Ie(a, c) {
                Ie = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Ie(a, c)
            }

            function Tj(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g,
                    "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function ed(a, c) {
                if (a) {
                    var b = ("" + a).replace(gg, "");
                    return c && b.length > c ? b.substr(0, c) : b
                }
                return ""
            }

            function Ri(a) {
                return "" + a
            }

            function db(a) {
                return "[object String]" === Object.prototype.toString.call(a)
            }

            function za(a, c) {
                function b() {
                    this.constructor = a
                }
                Ie(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function ia() {
                for (var a = 0, c = 0, b = arguments.length; c <
                    b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function ul() {}

            function vl(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function sa(a) {
                if (!(this instanceof sa)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Xa = 0;
                this.Sf = !1;
                this.mb = void 0;
                this.Vb = [];
                lh(a, this)
            }

            function mh(a, c) {
                for (; 3 === a.Xa;) a = a.mb;
                0 === a.Xa ? a.Vb.push(c) : (a.Sf = !0, sa.Tf(function() {
                    var b =
                        1 === a.Xa ? c.Jj : c.Kj;
                    if (null === b)(1 === a.Xa ? Je : Hc)(c.xb, a.mb);
                    else {
                        try {
                            var d = b(a.mb)
                        } catch (e) {
                            Hc(c.xb, e);
                            return
                        }
                        Je(c.xb, d)
                    }
                }))
            }

            function Je(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof sa) {
                            a.Xa = 3;
                            a.mb = c;
                            Ke(a);
                            return
                        }
                        if ("function" === typeof b) {
                            lh(vl(b, c), a);
                            return
                        }
                    }
                    a.Xa = 1;
                    a.mb = c;
                    Ke(a)
                } catch (d) {
                    Hc(a, d)
                }
            }

            function Hc(a, c) {
                a.Xa = 2;
                a.mb = c;
                Ke(a)
            }

            function Ke(a) {
                2 === a.Xa && 0 === a.Vb.length && sa.Tf(function() {
                    a.Sf ||
                        sa.si(a.mb)
                });
                for (var c = 0, b = a.Vb.length; c < b; c++) mh(a, a.Vb[c]);
                a.Vb = null
            }

            function wl(a, c, b) {
                this.Jj = "function" === typeof a ? a : null;
                this.Kj = "function" === typeof c ? c : null;
                this.xb = b
            }

            function lh(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Je(c, d))
                    }, function(d) {
                        b || (b = !0, Hc(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Hc(c, d))
                }
            }

            function ad(a) {
                for (var c = a.length, b = 0, d = 255, e = 255, f, g, l; c;) {
                    f = 21 < c ? 21 : c;
                    c -= f;
                    do g = "string" === typeof a ? a.charCodeAt(b) : a[b], b += 1, 255 < g && (l = g >> 8, g &= 255, g ^= l), d += g, e += d; while (--f);
                    d = (d & 255) + (d >> 8);
                    e = (e & 255) +
                        (e >> 8)
                }
                a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
                return 65535 === a ? 0 : a
            }

            function xb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function Ae(a, c) {
                var b;
                (b = c ? ma[c] : Sb) || (b = []);
                b = S(function(d, e, f) {
                    (e = e && e(a)) && d.push([f, e]);
                    return d
                }, [], b);
                b.length || Fe();
                return b
            }

            function yb(a, c) {
                var b = xl(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") +
                        b.search,
                    href: b.href
                }) : {}
            }

            function Ac(a, c, b, d, e, f) {
                if (Rf(a, gc, c)) {
                    c = [c + "=" + encodeURIComponent(b)];
                    c = c.concat(yl(a));
                    d && (b = new Date, b.setTime(b.getTime() + 6E4 * d), c.push("expires=" + b.toUTCString()));
                    e && (d = e.replace(zl, ""), c.push("domain=" + d));
                    c.push("path=" + (f || "/"));
                    f = c.join(";");
                    try {
                        a.document.cookie = f
                    } catch (g) {}
                }
            }

            function Vc(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Al(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    Gb: function(g, l, m) {
                        Ac(a, "" + c + g + f, "", -100, l || e, m);
                        return this
                    },
                    o: function(g) {
                        return gc(a, "" + c + g + f)
                    },
                    C: function(g, l, m, p, r) {
                        Ac(a, "" + c + g + f, l, m, p || e, r);
                        return this
                    }
                }
            }

            function zc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function Za(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] *
                    c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Jb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] <<
                    16 | b[1], b[2] << 16 | b[3]
                ]
            }

            function lc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function Wa(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ja(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function nh(a) {
                a = ja(a, [0, a[0] >>> 1]);
                a = Za(a, [4283543511, 3981806797]);
                a = ja(a, [0, a[0] >>> 1]);
                a = Za(a, [3301882366, 444984403]);
                return a = ja(a, [0, a[0] >>> 1])
            }

            function Bl(a, c) {
                var b = c || "",
                    d = a || 0,
                    e = b.length % 16,
                    f = b.length - e,
                    g = [0, d];
                d = [0, d];
                var l = [2277735313, 289559509],
                    m = [1291169091, 658871167],
                    p;
                for (p = 0; p < f; p += 16) {
                    var r = [b.charCodeAt(p + 4) & 255 | (b.charCodeAt(p + 5) & 255) << 8 | (b.charCodeAt(p + 6) & 255) << 16 | (b.charCodeAt(p + 7) & 255) << 24, b.charCodeAt(p) & 255 | (b.charCodeAt(p + 1) & 255) << 8 | (b.charCodeAt(p + 2) & 255) << 16 | (b.charCodeAt(p + 3) & 255) << 24];
                    var t = [b.charCodeAt(p + 12) & 255 | (b.charCodeAt(p + 13) & 255) << 8 | (b.charCodeAt(p + 14) & 255) << 16 | (b.charCodeAt(p + 15) & 255) << 24, b.charCodeAt(p + 8) & 255 | (b.charCodeAt(p + 9) & 255) << 8 | (b.charCodeAt(p +
                        10) & 255) << 16 | (b.charCodeAt(p + 11) & 255) << 24];
                    r = Za(r, l);
                    r = lc(r, 31);
                    r = Za(r, m);
                    g = ja(g, r);
                    g = lc(g, 27);
                    g = Jb(g, d);
                    g = Jb(Za(g, [0, 5]), [0, 1390208809]);
                    t = Za(t, m);
                    t = lc(t, 33);
                    t = Za(t, l);
                    d = ja(d, t);
                    d = lc(d, 31);
                    d = Jb(d, g);
                    d = Jb(Za(d, [0, 5]), [0, 944331445])
                }
                r = [0, 0];
                t = [0, 0];
                switch (e) {
                    case 15:
                        t = ja(t, Wa([0, b.charCodeAt(p + 14)], 48));
                    case 14:
                        t = ja(t, Wa([0, b.charCodeAt(p + 13)], 40));
                    case 13:
                        t = ja(t, Wa([0, b.charCodeAt(p + 12)], 32));
                    case 12:
                        t = ja(t, Wa([0, b.charCodeAt(p + 11)], 24));
                    case 11:
                        t = ja(t, Wa([0, b.charCodeAt(p + 10)], 16));
                    case 10:
                        t = ja(t,
                            Wa([0, b.charCodeAt(p + 9)], 8));
                    case 9:
                        t = ja(t, [0, b.charCodeAt(p + 8)]), t = Za(t, m), t = lc(t, 33), t = Za(t, l), d = ja(d, t);
                    case 8:
                        r = ja(r, Wa([0, b.charCodeAt(p + 7)], 56));
                    case 7:
                        r = ja(r, Wa([0, b.charCodeAt(p + 6)], 48));
                    case 6:
                        r = ja(r, Wa([0, b.charCodeAt(p + 5)], 40));
                    case 5:
                        r = ja(r, Wa([0, b.charCodeAt(p + 4)], 32));
                    case 4:
                        r = ja(r, Wa([0, b.charCodeAt(p + 3)], 24));
                    case 3:
                        r = ja(r, Wa([0, b.charCodeAt(p + 2)], 16));
                    case 2:
                        r = ja(r, Wa([0, b.charCodeAt(p + 1)], 8));
                    case 1:
                        r = ja(r, [0, b.charCodeAt(p)]), r = Za(r, l), r = lc(r, 31), r = Za(r, m), g = ja(g, r)
                }
                g = ja(g, [0, b.length]);
                d = ja(d, [0, b.length]);
                g = Jb(g, d);
                d = Jb(d, g);
                g = nh(g);
                d = nh(d);
                g = Jb(g, d);
                d = Jb(d, g);
                return ("00000000" + (g[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (g[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
            }

            function Ic(a, c, b) {
                return (a = Tb(a, c, b)) && a.length ? a[0] : null
            }

            function Jc(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = Tb(a, c, '[itemprop~="' + b + '"]');
                return d ? Y(function(e) {
                    return e.parentNode && Zb(a, e.parentNode, "[itemtype]") === c
                }, b) : b
            }

            function Oa(a,
                c, b) {
                return (a = Jc(a, c, b)) && a.length ? a[0] : null
            }

            function Ka(a) {
                if (!a) return "";
                a = va(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || a[0].innerText || "" : ""
            }

            function oh(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Ka(a) : ""
            }

            function ph(a) {
                return (a = O(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function Cl(a, c) {
                var b = ph(a);
                qh = Wk(a, function() {
                    var d = ph(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return B(Vk, null, a, qh)
            }

            function Dl(a, c, b) {
                var d, e, f = c.ra,
                    g = c.Ff,
                    l = c.Uc,
                    m = X(a),
                    p = pa((d = {}, d.wh = "1", d.pv = "1", d));
                "1" === f && a.ri && a.ri.Ik && p.C("ad", "1");
                g && p.C("ut", "1");
                f = m.o("lastReferrer");
                d = O(a).href;
                l = {
                    J: (e = {}, e["page-url"] = l || d, e["page-ref"] = f, e),
                    Y: p
                };
                b(l, c)["catch"](C(a, "g.s"));
                m.C("lastReferrer", d)
            }

            function El(a, c) {
                if (Le(a)) return ua(a, c);
                Me[c] = !0;
                return ua(a, yd[c] || 0)
            }

            function Fl(a, c, b) {
                function d() {
                    r || (p = !0, t = !1, r = !0, f())
                }

                function e() {
                    Me[h] = !0;
                    g(!1);
                    c()
                }

                function f() {
                    ua(a, yd[h]);
                    if (Me[h]) g(!1);
                    else {
                        var u = Math.max(0, b - (t ? v : v + m(fa) - q));
                        u ? yd[h] = Z(a, e, u, "u.t.d.c") : e()
                    }
                }

                function g(u) {
                    E(function(M) {
                        var y =
                            M[0],
                            H = M[1];
                        M = M[2];
                        u ? k.D(y, H, M) : k.wc(y, H, M)
                    }, n)
                }
                var l = z(!1, g);
                if (Le(a)) return {
                    id: Z(a, c, b, "u.t.d"),
                    Yf: l
                };
                var m = ca(a),
                    p = !1,
                    r = !1,
                    t = !0,
                    v = 0,
                    q = m(fa),
                    k = xa(a),
                    h = rh;
                rh += 1;
                yd[h] = 0;
                var n = [
                    [a, "blur", function() {
                        t = p = r = !0;
                        v += m(fa) - q;
                        q = m(fa);
                        f()
                    }],
                    [a, "focus", function() {
                        p || r || (v = 0);
                        q = m(fa);
                        p = r = !0;
                        t = !1;
                        f()
                    }],
                    [a.document, "click", d],
                    [a.document, "mousemove", d],
                    [a.document, "keydown", d],
                    [a.document, "scroll", d]
                ];
                g(!0);
                f();
                return {
                    id: h,
                    Yf: l
                }
            }

            function Oj(a, c) {
                var b, d = Vb(c),
                    e = ha.Ic;
                if (d && Bb("ym-advanced-informer", d)) {
                    var f =
                        d.getAttribute("data-lang"),
                        g = parseInt(d.getAttribute("data-cid") || "", 10);
                    if (g || 0 === g) w(a, "Ya." + e + ".informer")((b = {}, b.i = d, b.id = g, b.lang = f, b)), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function uc(a, c, b) {
                a = c && Bb(Gl, c);
                return b && c ? a || !!cl(sh, c).length : a
            }

            function Xf(a, c) {
                return dd(c) ? "password" === c.type || c.name && th.test(c.name) || c.id && th.test(c.id) : !1
            }

            function Kc(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Ta(a, [b >> 8, b & 255])
            }

            function qb(a, c) {
                Ta(a, [c & 255])
            }

            function Va(a, c,
                b) {
                return -1 !== jb(a)(b, Hl) ? (qb(c, b), !1) : !0
            }

            function L(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Ta(a, [b & 127 | 128]), b >>= 7;
                Ta(a, [b])
            }

            function Ne(a, c) {
                L(a, c.length);
                for (var b = 0; b < c.length; b += 1) L(a, c.charCodeAt(b))
            }

            function Oe(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) Kc(a, b.charCodeAt(d))
            }

            function Il(a, c) {
                var b = [];
                if (Va(a, b, 27)) return [];
                L(b, c);
                return b
            }

            function Jl(a, c) {
                var b = qa(c);
                if (!b) return c[Ha] = -1, null;
                var d = +c[Ha];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e =
                            c; e;) {
                        if (e.attributes.Qk) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = 0,
                    g = Ec(a, c),
                    l = g && g[Ha] ? g[Ha] : 0;
                0 > l && (l = 0);
                b = (b || "").toUpperCase();
                var m = Kl()[b];
                m || (e |= 2);
                var p = Yg(a, c);
                p || (e |= 4);
                var r = ee(a, c);
                (g = g ? ee(a, g) : null) && r[0] === g[0] && r[1] === g[1] && r[2] === g[2] && r[3] === g[3] && (e |= 8);
                Ob[d].G = r[0] + "x" + r[1];
                Ob[d].size = r[2] + "x" + r[3];
                c.id && "string" === typeof c.id && (e |= 32);
                (g = Xg(a, c)) && (e |= 16);
                var t = Wg(a, c);
                t && (f |= 2);
                var v = 0;
                a: {
                    var q = Ec(a, c),
                        k = qa(c);
                    var h = [];
                    if (q && (q = q.childNodes))
                        for (var n = q.length, u = 0; u < n; u += 1) {
                            var M =
                                q[u];
                            "INPUT" === M.nodeName && M.type && "hidden" === M.type.toLocaleLowerCase() || k && M.nodeName !== k || h.push(M)
                        }
                    for (k = 0; k < h.length; k += 1)
                        if ((!h[k].id || "string" !== typeof h[k].id) && Wg(a, h[k]) === t && Xg(a, h[k]) === g) {
                            h = !0;
                            break a
                        } h = !1
                }
                if (h) {
                    e |= 1;
                    v = "";
                    try {
                        v = c.innerHTML || ""
                    } catch (y) {}
                    v = ad(v.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
                }
                h = [];
                if (Va(a, h, 1)) return null;
                L(h, d);
                qb(h, e);
                L(h, l);
                m ? qb(h, m) : Oe(h, b);
                p && L(h, p);
                e & 8 || (L(h, r[0]), L(h, r[1]), L(h, r[2]), L(h, r[3]));
                e & 32 && Oe(h, c.id);
                g && Kc(h, g);
                e & 1 && Kc(h, v);
                qb(h, f);
                t && Kc(h, t);
                return h
            }

            function Ll(a, c) {
                var b = c[Ha];
                if (!b || 0 > b || !ce(c) || !c.form || Yf(a, c.form)) return [];
                var d = ah(a, c.form);
                if (0 > d) return [];
                if (dd(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        Oc: 0,
                        Zk: 0,
                        "datetime-local": 0,
                        email: 0,
                        Gg: 0,
                        Dl: 0,
                        search: 0,
                        Jl: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Ml: 0,
                        password: 2,
                        Cl: 3,
                        Wk: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        Mk: 1,
                        Ok: 5
                    };
                    var f = qa(c);
                    e = R(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, l = g.length, m = 0, p = 0; m < l; m += 1)
                    if (g[m].name === c.name) {
                        if (g[m] === c) {
                            f = p;
                            break
                        }
                        p += 1
                    } if (0 > f) return [];
                g = [];
                if (Va(a, g, 7)) return [];
                L(g, b);
                L(g, d);
                L(g, e);
                Ne(g, c.name || "");
                L(g, f);
                return g
            }

            function Ml(a, c, b) {
                var d = ah(a, b);
                if (0 > d) return [];
                var e = b.elements,
                    f = e.length;
                b = [];
                for (var g = 0; g < f; g += 1)
                    if (!Zg(e[g])) {
                        var l = e[g][Ha];
                        l && 0 < l && b.push(l)
                    } e = [];
                if (Va(a, e, 11)) return [];
                L(e, c);
                L(e, d);
                L(e, b.length);
                for (a = 0; a < b.length; a += 1) L(e, b[a]);
                return e
            }

            function Nb(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !xj(a, c, b); c = Ec(a, c)) d.push(c);
                E(function(e) {
                    Ob.Xd += 1;
                    var f = Ob.Xd;
                    e[Ha] = f;
                    Ob[f] = {};
                    f = Jl(a, e);
                    e = Ll(a, e);
                    f && e && (Ta(b, f), Ta(b,
                        e))
                }, d.reverse());
                return b
            }

            function Nl(a) {
                var c = a.Da;
                if (!tc || c && !c.fromElement) return Vf(a)
            }

            function Ol(a) {
                var c = a.Da;
                if (c && !c.toElement) return de(a)
            }

            function uh(a) {
                var c = Vb(a.Da);
                if (c && bd(c)) {
                    var b = Uf(a, c);
                    var d = fb(a.b),
                        e = [];
                    Va(a.b, e, 17) ? a = [] : (L(e, d), L(e, c[Ha]), a = e);
                    return ia(b, a)
                }
            }

            function vh(a) {
                var c = a.b,
                    b = a.Da.target;
                if (b && bd(b)) {
                    c = Nb(c, b);
                    var d = fb(a.b),
                        e = [];
                    Va(a.b, e, 18) ? a = [] : (L(e, d), L(e, b[Ha]), a = e);
                    return ia(c, a)
                }
            }

            function wh(a) {
                var c = a.b,
                    b = Vb(a.Da);
                if (!b || Xf(c, b) || uc(c, b)) return [];
                if (ce(b)) {
                    var d =
                        X(c).o("isEU"),
                        e = dc(c, b, d);
                    d = dc(c, b);
                    if ($g(b)) var f = b.checked;
                    else f = b.value, f = e ? xh(f.split("")).join("") : f;
                    c = Nb(c, b);
                    e = fb(a.b);
                    var g = [];
                    Va(a.b, g, 39) ? a = [] : (L(g, e), L(g, b[Ha]), Oe(g, String(f)), qb(g, d ? 1 : 0), a = g);
                    return ia(c, a)
                }
            }

            function zd(a) {
                var c = a.b,
                    b = a.Da,
                    d = Vb(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = Ta(e);
                d && bd(d) ? f(Uf(a, d)) : f(Nb(c, d));
                var g = $f(c, b);
                a = fb(a.b);
                f = b.type;
                var l = [g.x, g.y];
                g = b.which;
                b = b.button;
                var m;
                var p = ud(c, d);
                var r = p[0];
                for (p = p[1]; d && (!r || !p);)
                    if (d = Ec(c, d)) p = ud(c, d), r =
                        p[0], p = p[1];
                d ? (r = d[Ha], !r || 0 > r ? c = [] : (p = (m = {}, m.mousemove = 2, m.click = 32, m.dblclick = 33, m.mousedown = 4, m.mouseup = 30, m.touch = 12, m)[f]) ? (m = [], d = De(c, d), Va(c, m, p) ? c = [] : (L(m, a), L(m, r), L(m, Math.max(0, l[0] - d.left)), L(m, Math.max(0, l[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, qb(m, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = m)) : c = []) : c = [];
                return ia(e, c)
            }

            function Pl(a) {
                var c = null,
                    b = a.b,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Ya(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection &&
                    d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = dc(b, c) || uc(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = dc(b, d) || uc(b, d, !0), f += 1;
                if (e !== Pe) return Pe = e, d = d ? xh(e.split("")).join("") : e, e = fb(a.b), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length -
                    97)), c = [], Va(a.b, c, 29) ? a = [] : (L(c, e), Ne(c, b), Ne(c, d), a = c), a
            }

            function Ql(a) {
                return ia(zd(a), Pl(a) || [])
            }

            function yh(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function zh(a) {
                var c = [];
                Qe || (Qe = !0, Pe && c.push.apply(c, Il(a.b, fb(a.b))), Z(a.b, function() {
                    Qe = !1
                }, 1, "fv.c"));
                return c
            }

            function Ah(a, c, b, d) {
                var e = Vb(c);
                if (!e || Wf(a, e)) return [];
                var f = Yc(e),
                    g = cd(e);
                c = dc(a, e);
                var l = X(a);
                if (!f && (g && l.o("isEU") || uc(a, e))) a = [];
                else {
                    f = Nb(a, e);
                    l = fb(a);
                    g = [];
                    if (Va(a, g,
                            38)) a = [];
                    else {
                        L(g, l);
                        Kc(g, b);
                        qb(g, d);
                        a = e[Ha];
                        if (!a || 0 > a) a = 0;
                        L(g, a);
                        qb(g, c ? 1 : 0);
                        a = g
                    }
                    a = ia(f, a)
                }
                return a
            }

            function Rl(a) {
                var c = a.b,
                    b = a.Da,
                    d = b.keyCode,
                    e = yh(b),
                    f = [],
                    g = Ta(f);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    } [d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Ah(c, b, d, e | 16)), Re = !1, Z(c, function() {
                    Re = !0
                }, 1, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(zh(a));
                return f
            }

            function Sl(a) {
                var c =
                    a.b;
                a = a.Da;
                var b = [];
                Re && !Se && 0 !== a.which && (b.push.apply(b, Ah(c, a, a.charCode || a.keyCode, yh(a))), Se = !0, Z(c, function() {
                    Se = !1
                }, 1, "fv.kp"));
                return b
            }

            function Bh(a) {
                var c = a.b,
                    b = Vb(a.Da);
                if (!b || Yf(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) Zg(e[f]) || d.push.apply(d, Nb(c, e[f]));
                    d.push.apply(d, Ml(c, fb(a.b), b))
                }
                return d
            }

            function Tl(a) {
                var c = a.flush;
                a = Vb(a.Da);
                "BODY" === qa(a) && c()
            }

            function Ul(a, c, b) {
                return function() {
                    var d = Ua(a, c),
                        e = wa(arguments);
                    b.apply(void 0, e);
                    return d
                }
            }

            function Vl(a, c, b, d) {
                return function() {
                    for (var e = [], f = 0; f < arguments.length; f++) e[f] = arguments[f];
                    f = Zc(function(g) {
                        return !1 === g
                    }, e);
                    return 0 < e.length && f || !b.length || !d ? d : x.apply(void 0, S(function(g, l, m) {
                        return !1 === e[m] ? g : g.concat(function() {
                            for (var p = [], r = 0; r < arguments.length; r++) p[r] = arguments[r];
                            return l.apply(void 0, ia([a, c], p))
                        })
                    }, [], b))(d)
                }
            }

            function Te(a, c, b) {
                return function() {
                    var d = Ua(a, c),
                        e = wa(arguments);
                    if (d) return b.apply(void 0, e)
                }
            }

            function Di(a) {
                try {
                    return a.toDataURL()
                } catch (c) {
                    return ""
                }
            }
            var gg = /^\s+|\s+$/g,
                ya = G(function(a, c) {
                    return a === c
                }),
                $c = G(function(a, c) {
                    a(c);
                    return c
                }),
                gb = G(function(a, c) {
                    return c(a)
                }),
                Ya = ya(null),
                R = ya(void 0),
                He = Object.prototype.hasOwnProperty,
                Ch = wb(Array.prototype.reduce, "reduce"),
                S = Ch ? function(a, c, b) {
                    return Ch.call(b, a, c)
                } : Gc,
                kc = G(S),
                W = Qb(w),
                ac = W("length"),
                Dh = wb(Array.prototype.map, "map"),
                D = Dh ? function(a, c) {
                    return c && 0 < c.length ? Dh.call(c, a) : []
                } : ql,
                E = D,
                vb = Array.prototype.flatMap ? function(a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : pl,
                Ra = G(D),
                Tk = Qb(D),
                Da =
                Object.entries ? function(a) {
                    return a ? Object.entries(a) : []
                } : ol,
                Ba = Object.keys ? Object.keys : ih,
                F = Object.assign || sl,
                Tf = G(function(a, c) {
                    return F({}, a, c)
                }),
                Ge, fh = jb(window),
                Wl = Qb(fh),
                X = A(gh),
                Ce = x,
                Eh = wb(Function.prototype.bind, "bind"),
                B = Eh ? function() {
                    var a = wa(arguments);
                    return Eh.apply(a[0], ia([a[1]], a.slice(2)))
                } : rl,
                V = G(function(a, c) {
                    return B.apply(void 0, ia([c, null], a))
                }),
                z = G(function(a, c) {
                    return V([a], c)
                }),
                da = G(function(a, c) {
                    return B(c[a], c)
                }),
                Xa = da("test"),
                Zc = Array.prototype.every ? function(a, c) {
                    return Array.prototype.every.call(c,
                        a)
                } : function(a, c) {
                    return S(function(b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                },
                Fh = wb(Array.prototype.filter, "filter"),
                Y = Fh ? function(a, c) {
                    return Fh.call(c, a)
                } : kh,
                qc = G(Y),
                La = vd(function(a, c) {
                    return Array.prototype.find.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (a.call(c, c[b], b)) return c[b]
                }, la("find", Array.prototype.find)),
                K = Array.prototype.includes ? function(a, c) {
                    return Array.prototype.includes.call(c, a)
                } : tl,
                sb = Qb(K),
                Ca = vd(function(a, c) {
                    return Array.prototype.some.call(c, a)
                }, function(a, c) {
                    for (var b =
                            0; b < c.length; b += 1)
                        if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, la("some", Array.prototype.some)),
                Ad = A(jb),
                Cf = G(eh),
                Ta = G(function(a, c) {
                    E(x(N, da("push", a)), c);
                    return a
                }),
                Gh = A(function(a) {
                    a = w(a, "navigator") || {};
                    var c = w(a, "userAgent") || "";
                    return {
                        yg: -1 < (w(a, "vendor") || "").indexOf("Apple"),
                        uh: c
                    }
                }),
                yc = A(x(W("String.fromCharCode"), z("fromCharCode", la), Rb)),
                pb = A(W("navigator.userAgent")),
                Hh = A(x(pb, Xa(/ipad|iphone|ipod/i))),
                Ue = A(function(a) {
                    return w(a, "navigator.platform") || ""
                }),
                lg = A(function(a) {
                    a = Gh(a);
                    var c =
                        a.uh;
                    return a.yg && (!c.match(/Safari/) && c.match(/Mobile/) || c.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== c.indexOf("FB_IAB") || -1 !== c.indexOf("FBAV") || -1 !== c.indexOf("OKApp") || -1 !== c.indexOf("GSA/"))
                }),
                Ve = A(function(a) {
                    a = Gh(a);
                    var c = a.uh;
                    return a.yg && !c.match("CriOS")
                }),
                jd = A(x(pb, da("test", /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/))),
                Xl = /Chrome\/(\d+)\./,
                Yl = A(function(a) {
                    return (a = (w(a, "navigator.userAgent") || "").match(Xl)) && a.length ? 76 <= parseInt(a[1], 10) : !1
                }),
                We = A(function(a) {
                    var c = (pb(a) || "").toLowerCase();
                    a = Ue(a);
                    return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }),
                Zl = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                $l = A(function(a) {
                    var c = w(a, "navigator.connection.type");
                    if (R(c)) return null;
                    a = Ad(a)(c, Zl);
                    return -1 === a ? c : "" + a
                }),
                Le = A(x(W("document.addEventListener"), Rb)),
                Ih = A(function(a) {
                    var c =
                        w(a, "navigator") || {};
                    return S(function(b, d) {
                        return b || w(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                hg = A(function(a) {
                    var c = w(a, "navigator") || {};
                    a = Ih(a);
                    db(a) || (a = "", c = w(c, "languages.0"), db(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                nb = A(function(a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {}
                    return c
                }),
                am = A(function(a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow || !0
                    } catch (b) {}
                    return c
                }),
                bm = A(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                cm = A(function(a) {
                    var c =
                        "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = w(a, "external");
                    b = -1 !== (w(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = w(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Ca(z(a, w), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ca(z(w(a, "document"),
                        w), c) || b || d && Ca(B(d.getAttribute, d), e))
                }),
                dm = A(function(a) {
                    return !!(Ca(z(a, w), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(pb(a)) || w(a, "navigator.webdriver") || w(a, "isChrome") && !w(a, "chrome"))
                }),
                em = A(function(a) {
                    return Zc(z(a, w), ["ia_document.shareURL", "ia_document.referrer"])
                }),
                fm = A(function(a) {
                    a = w(a, "navigator.plugins");
                    return !!(a && ac(a) && Ca(x(W("name"), Xa(/Chrome PDF Viewer/)), a))
                }),
                gm = new RegExp("yandex.com/bots|Googlebot|APIs-Google|Mediapartners-Google|AdsBot-Google|FeedFetcher-Google|Google-Read-Aloud|DuplexWeb-Google|Google Favicon|googleweblight|Mail.RU_Bot|StackRambler|Slurp|msnbot|bingbot|www.baidu.com/search/spi_?der.htm".replace(/[./]/g,
                    "\\$&")),
                lk = A(x(W("navigator.userAgent"), Xa(gm))),
                me = A(function(a) {
                    var c = pb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (Hh(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Ve(a)
                }),
                ne = A(function(a) {
                    var c = w(a, "document.documentElement.style");
                    a = w(a, "InstallTrigger");
                    return !(!(c && "MozAppearance" in c) || ta(a))
                }),
                Hb = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "65gwaazdbuxw99r"
                },
                hm = Hb.construct,
                Xe = Le(window),
                ha = {
                    bi: 24226447,
                    Th: 26302566,
                    hi: 51533966,
                    Pa: "https:",
                    Cb: "400",
                    Ic: hm,
                    ai: Xe ? 512 : 2048,
                    Zh: Xe ? 512 : 2048,
                    $h: Xe ? 100 : 400,
                    Jk: 100,
                    Kk: "noindex"
                },
                ub = {},
                im = setTimeout;
            sa.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            sa.prototype.then = function(a, c) {
                var b = new this.constructor(ul);
                mh(this, new wl(a, c, b));
                return b
            };
            sa.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            sa.all = function(a) {
                return new sa(function(c, b) {
                    function d(l, m) {
                        try {
                            if (m && ("object" === typeof m || "function" === typeof m)) {
                                var p = m.then;
                                if ("function" === typeof p) {
                                    p.call(m, function(r) {
                                        d(l, r)
                                    }, b);
                                    return
                                }
                            }
                            e[l] = m;
                            0 === --f && c(e)
                        } catch (r) {
                            b(r)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            sa.resolve = function(a) {
                return a && "object" === typeof a && a.constructor ===
                    sa ? a : new sa(function(c) {
                        c(a)
                    })
            };
            sa.reject = function(a) {
                return new sa(function(c, b) {
                    b(a)
                })
            };
            sa.race = function(a) {
                return new sa(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) sa.resolve(a[d]).then(c, b)
                })
            };
            sa.Tf = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                im(a, 0)
            };
            sa.si = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var Q =
                window.Promise;
            Q = la("Promise", Q) && !K(!1, [la("resolve", Q.resolve), la("reject", Q.reject), la("all", Q.all)]) ? Q : sa;
            var Yk = ["network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Xk = da("test", /^err.kn/),
                il = /[^a-z0-9.:-]/,
                jl = G(function(a, c, b) {
                    var d, e = new a.XMLHttpRequest,
                        f = b.ja,
                        g = F(b.Jd ? (d = {}, d.wmode = "7", d) : {}, b.pc);
                    return new Q(function(l, m) {
                        e.open(b.zh || "GET", c + "?" + Uc(g), !0);
                        e.withCredentials = !1 !== b.Ah;
                        b.tf && (e.timeout = b.tf);
                        Ce(Da, Ra(function(r) {
                            e.setRequestHeader(r[0], r[1])
                        }))(b.oc);
                        var p = G(kl)(a, e, ob(b.ab), b.Jd, b.Wj, l, m);
                        e.onreadystatechange = p;
                        e.send(f)
                    })
                }),
                jm = A(function(a) {
                    a = w(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                bb = A(x(W("document"), z("createElement", Fb))),
                Zf = A(function(a) {
                    var c = w(a, "Element.prototype");
                    return c ? (a = La(function(b) {
                        return la(b, c[b])
                    }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                km = ya("INPUT"),
                dd = x(qa, km),
                lm = ya("TEXTAREA"),
                fl = x(qa, lm),
                mm = ya("SELECT"),
                gl = x(qa, mm),
                $g = x(W("type"), Xa(/^(checkbox|radio)$/)),
                ce = x(qa, Xa(/^INPUT|SELECT|TEXTAREA$/)),
                bd = x(qa, Xa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Ye = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                Bj = x(qa, Xa(new RegExp("^(" + Ye.join("|") + ")$", "i"))),
                el = ["submit", "image", "hidden"],
                Jh = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                dl = A(function() {
                    for (var a = 59, c = {}, b = 0; b < Jh.length; b += 1) c[Jh[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                bl = G(function(a, c, b, d) {
                    return new Q(function(e, f) {
                        var g = zb(a),
                            l = c("img"),
                            m = x(z(l, jc), z(ob(d.ab), f)),
                            p = sd(a, m, d.tf || 3E3);
                        l.onerror = m;
                        l.onload = x(z(l, jc), z(null, e), V([a, p], ua));
                        m = F({}, d.pc);
                        delete m.wmode;
                        l.src = bh(b, d, m);
                        Ve(a) && (F(l.style, {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px"
                        }), g.appendChild(l))
                    })
                }),
                $k = G(function(a, c, b) {
                    return new Q(function(d, e) {
                        var f, g, l = "_ymjsp" + kb(a),
                            m = F((f = {}, f.callback = l, f), b.pc),
                            p = V([a, l], al);
                        a[l] = function(t) {
                            try {
                                p(), jc(r), d(t)
                            } catch (v) {
                                e(v)
                            }
                        };
                        m.wmode = "5";
                        var r = bc(a, (g = {}, g.src = bh(c, b, m), g));
                        if (!r) return p(), e(Error("jp.s"));
                        f = z(r, jc);
                        f = x(f, z(ob(b.ab), e));
                        g = sd(a, f, b.tf || 1E4);
                        g = V([a, g], ua);
                        r.onload = g;
                        r.onerror = x(p, g, f)
                    })
                }),
                Zk = G(function(a, c, b, d) {
                    return new Q(function(e, f) {
                        if (!w(a, "navigator.onLine")) return f();
                        var g = F(d.pc, {
                            "force-urlencoded": 1
                        });
                        return c(b + "?" + Uc(g), d.ja) ? e("") : f()
                    })
                }),
                Lc;
            var Sb = [Ug, 0, Ib, Be, Dc];
            var Kh = [Ib];
            Kh.push(Be);
            var Lh =
                tb(Kh),
                Mc = tb([Dc]),
                nm = tb([Ug, Dc]),
                Bd = tb([0, Ib, Be, Dc]);
            var ma = (Lc = {}, Lc.h = Lh, Lc.f = Lh, Lc.er = Mc, Lc);
            ma.d = Mc;
            ma.s = tb([Ib]);
            ma.S = ma.s;
            ma.u = Mc;
            ma.m = nm;
            ma["2"] = Sb;
            ma["6"] = tb([0, Ib]);
            ma.t = Sb;
            ma.a = Bd;
            ma.n = Sb;
            ma.p = tb([0, Ib]);
            ma["4"] = tb([0, Ib, Dc]);
            ma.r = Bd;
            ma["1"] = Bd;
            ma.g = Bd;
            ma.c = Mc;
            ma.e = Sb;
            ma.adb = Mc;
            ma.W = tb([0, Ib]);
            ma["5"] = Sb;
            var Sg = ["addEventListener", "removeEventListener"],
                Tg = ["attachEvent", "detachEvent"],
                om = A(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", J, b)
                    } catch (d) {}
                    return c
                }),
                pm = G(function(a, c) {
                    return a ? F({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                xa = A(function(a) {
                    function c(e, f, g) {
                        g = d(g);
                        e = G(e)(g);
                        E(e, f.split(","))
                    }
                    var b = [];
                    a = om(a);
                    var d = pm(a);
                    return {
                        D: function(e, f, g, l) {
                            var m = this;
                            c(function(p, r) {
                                var t = [e, r, g, p];
                                b.push(t);
                                Qg.apply(void 0, t.concat(!1))
                            }, f, l);
                            return function() {
                                return m.wc(e, f, g, l)
                            }
                        },
                        wc: function(e, f, g, l) {
                            c(function(m, p) {
                                var r = [e, p, g],
                                    t = S(function(v, q, k) {
                                        Y(sb(q), r).length === r.length &&
                                            (v = k);
                                        return v
                                    }, -1, b); - 1 !== t && (Qg.apply(void 0, b[t].concat(!0)), b.splice(t, 1))
                            }, f, l)
                        }
                    }
                }),
                ca = A(Og),
                Mh = G(function(a, c) {
                    for (var b = []; !Cc(c);) {
                        var d = Qk(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                we = G(function(a, c, b) {
                    var d = ca(a),
                        e = d(fa);
                    return Mh(function(f, g) {
                        d(fa) - e >= c && g(Rk)
                    }, b)
                }),
                ve = G(function(a, c) {
                    if (c.vc) Z(a, V([a, c], ve), 0);
                    else
                        for (; !Cc(c);)
                            if (c.vc = !0, c.Cg(c.hd[c.cb], z(c, Mg)), c.cb += 1, Cc(c)) {
                                ve(a, c);
                                break
                            }
                }),
                og = G(function(a, c, b) {
                    return b(a, c)
                }),
                qm = G(function(a, c) {
                    return gb(function(b, d) {
                        return c(b,
                            function(e) {
                                d(a(e))
                            })
                    })
                }),
                Aa = {
                    id: "id",
                    Ff: "ut",
                    ra: "type",
                    Ie: "ldc",
                    Mb: "nck",
                    Uc: "url",
                    Vi: "referrer"
                },
                rm = /^\d+$/,
                Wb = {
                    id: function(a) {
                        a = "" + (a || "0");
                        rm.test(a) || (a = "0");
                        try {
                            var c = parseInt(a, 10)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    ra: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    Mb: Boolean,
                    Ff: Boolean
                };
            Aa.Jc = "defer";
            Wb.Jc = Boolean;
            Aa.Fk = "yaDisableGDPR";
            Aa.Gk = "yaGDPRLang";
            Aa.exp = "experiments";
            Aa.Zf = "ecommerce";
            Aa.ha = "params";
            Aa.Id = "userParams";
            Aa.Cc = "accurateTrackBounce";
            Aa.ph = "triggerEvent";
            Wb.ph = Boolean;
            Aa.dh = "sendTitle";
            Wb.dh =
                function(a) {
                    return !!a || R(a)
                };
            Aa.Af = "trackHash";
            Wb.Af = Boolean;
            Aa.Ki = "directCampaign";
            Aa.Bi = "clickmap";
            Aa.Tb = "webvisor";
            Wb.Tb = Boolean;
            Aa.mk = "trustedDomains";
            Aa.Zb = "childIframe";
            Wb.Zb = Boolean;
            Aa.Gd = "trackLinks";
            Aa.Mi = "enableAll";
            var Nh = S(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        Kg: c[1],
                        Dj: Wb[b]
                    };
                    return a
                }, {}, Da(Aa)),
                Nk = "hash host hostname href pathname port protocol search".split(" "),
                Ig = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "),
                fk = A(function(a) {
                    a = O(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                sm = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site)$/,
                jg = A(function(a) {
                    a = O(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(sm));
                    return c
                }),
                tm = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                um = A(function(a) {
                    a = O(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(tm));
                    return c
                }),
                vm = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/,
                wm = A(function(a) {
                    a = O(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(vm));
                    return c
                }),
                xl = A(function(a) {
                    if (a = bb(a)) return a("a")
                }),
                Hg = G(function(a, c, b, d) {
                    var e = a.document;
                    te(a) || (c.wc(e, "webkitvisibilitychange,visibilitychange", Hg), b());
                    return d
                }),
                Kb = V([1, null], vd),
                Yi = V([1, 0], vd),
                Gg = A(function() {
                    return {
                        rg: null,
                        je: []
                    }
                }, P),
                $a, xm = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                Fg = ($a = {}, $a.responseEnd = 1, $a.domInteractive = 1, $a.domContentLoadedEventStart = 1, $a.domContentLoadedEventEnd = 1, $a.domComplete = 1, $a.loadEventStart = 1, $a.loadEventEnd = 1, $a.unloadEventStart = 1, $a.unloadEventEnd = 1, $a.secureConnectionStart = 1, $a),
                zm = A(wd),
                Am = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd",
                        "connectStart"
                    ],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return w(c, "redirectCount") || w(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                Bm = A(wd),
                Kk = A(function(a) {
                    Bg(a, "_ymBRC",
                        "1");
                    var c = "1" !== Ag(a, "_ymBRC");
                    c || Cg(a, "_ymBRC");
                    return c
                }),
                Na = A(zg),
                Nc = A(zg, function(a, c, b) {
                    return "" + c + b
                }),
                Jk = {
                    "*": "+",
                    "-": "/",
                    Pk: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                Oh = x(function(a) {
                    var c;
                    return function() {
                        var b = wa(arguments),
                            d = b[0];
                        b = b.slice(1);
                        if (c) return c.apply(void 0, ia([d], b));
                        var e = gh(d),
                            f = e.o("m");
                        f || (f = A, e.C("m", f));
                        c = f(a);
                        return c.apply(void 0, ia([d], b))
                    }
                }(function(a) {
                    a = (w(a, "document.interestCohort") || J)();
                    if (!a) return null;
                    var c = [];
                    w(a, "then") && a.then(da("push", c), J);
                    return c
                }), W("0")),
                Ph =
                /\/$/,
                Cm = A(xd),
                Dm = A(xd),
                Em = A(function(a) {
                    var c = w(a, "webkitRequestFileSystem");
                    if (U(c) && !We(a)) return (new Q(B(c, a, 0, 0))).then(function() {
                        var d = w(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](z(!0, N));
                    if (ne(a)) return c = w(a, "navigator.serviceWorker"), Q.resolve(R(c));
                    c = w(a, "openDatabase");
                    if (Ve(a) && U(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return Q.resolve(b)
                    }
                    return Q.resolve(!w(a, "indexedDB") && (w(a, "PointerEvent") ||
                        w(a, "MSPointerEvent")))
                }),
                yl = A(function(a) {
                    var c = [];
                    Yl(a) && "https:" === O(a).protocol && (c.push("SameSite=None"), c.push("Secure"));
                    return c
                }),
                Db = ["0", "1", "2", "3"],
                hc = Db[0],
                ie = Db[1],
                Hk = Db[2],
                ke = D(x(N, da("concat", "GDPR-ok-view-detailed-")), Db),
                id = ia("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), ke, ["28"]),
                Gk = "3 13 14 15 16 17 28".split(" "),
                xg = x(Ra(W("ymetrikaEvent.type")), qc(sb(id))),
                zl = /:\d+$/,
                Al = A(function(a) {
                    var c =
                        (O(a).host || "").split(".");
                    return 1 === c.length ? c[0] : S(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = c.slice(-e).join("."), Qf(a, e) && (b = e));
                        return b
                    }, null, c)
                }),
                fc = A(Vc),
                Fm = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Gm = A(function(a, c) {
                    var b = fc(a),
                        d = O(a).search.match(Fm);
                    return d && 2 <= d.length ? (d = d[2], c.Mb || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : ""
                }),
                Hm = A(function(a, c) {
                    return oe(a, c.Ie, c.Mb)
                }, Gb),
                Im = x(ca, gb(function(a) {
                    return -(new a.b.Date).getTimezoneOffset()
                })),
                Jm = x(ca, gb(function(a) {
                    a = new a.b.Date;
                    return D(Sk, [a.getFullYear(),
                        a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()
                    ]).join("")
                })),
                Km = x(ca, gb(qd)),
                Lm = x(ca, gb(Ng)),
                ba, mb, Mm = A(function(a) {
                    a = X(a);
                    var c = a.o("counterNum", 0) + 1;
                    a.C("counterNum", c);
                    return c
                }, x(Gb, P)),
                lb = (ba = {}, ba.vf = z(Hb.version, N), ba.nt = $l, ba.fp = function(a, c, b) {
                        if (b.J && b.J.nohit) return null;
                        c = P(c);
                        b = Cm(a);
                        if (b[c]) return null;
                        a: {
                            var d = ca(a)(Ng),
                                e = w(a, "performance.getEntriesByType");
                            if (U(e)) {
                                if (a = Y(x(N, W("name"), ya("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                    a =
                                        a[0].startTime;
                                    break a
                                }
                            } else {
                                e = w(a, "chrome.loadTimes");
                                if (U(e) && (e = e.call(a.chrome), e = w(e, "firstPaintTime"), d && e)) {
                                    a = 1E3 * e - d;
                                    break a
                                }
                                if (a = w(a, "performance.timing.msFirstPaint")) {
                                    a -= d;
                                    break a
                                }
                            }
                            a = void 0
                        }
                        return a ? (b[c] = a, Math.round(a)) : null
                    }, ba.fu = function(a, c, b) {
                        var d = b.J;
                        if (!d) return null;
                        c = (w(a, "document.referrer") || "").replace(Ph, "");
                        b = (d["page-ref"] || "").replace(Ph, "");
                        d = d["page-url"];
                        a = O(a).href !== d;
                        c = c !== b;
                        b = 0;
                        a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                        return b
                    }, ba.en = jm, ba.la = Ih, ba.ut = function(a, c, b) {
                        var d = b.kd;
                        (b = b.J) && (wm(a) || c.Ff || d) && (b.ut = "noindex");
                        return null
                    }, ba.v = z(ha.Cb, N), ba.cn = Mm, ba.dp = function(a) {
                        var c = X(a),
                            b = c.o("bt", {});
                        if (R(c.o("bt"))) {
                            var d = w(a, "navigator.getBattery");
                            try {
                                b.p = d ? d.call(a.navigator) : null
                            } catch (e) {}
                            c.C("bt", b);
                            b.p && b.p.then && b.p.then(function(e) {
                                b.xk = e.charging && 0 === e.chargingTime
                            })
                        }
                        return b.xk ? "1" : "0"
                    }, ba.ls = A(function(a, c) {
                        var b = Nc(a, c.id),
                            d = ca(a),
                            e = b.o("lsid");
                        return +e ? e : (d = kb(a, 0, d(fa)), b.C("lsid", d), d)
                    }, Gb), ba.hid = ic, ba.z = Im, ba.i = Jm, ba.et = Km, ba.c = x(W("navigator.cookieEnabled"),
                        Kb), ba.rn = x(N, kb), ba.rqn = function(a, c, b) {
                        b = b.J;
                        if (!b || b.nohit) return null;
                        a = Nc(a, c.id);
                        c = (a.o("reqNum", 0) || 0) + 1;
                        a.C("reqNum", c);
                        if (a.o("reqNum") === c) return c;
                        a.Gb("reqNum");
                        return null
                    }, ba.u = Hm, ba.tp = x(Gb, dh, Kb), ba.tpid = x(Gb, function(a) {
                        a = P(a);
                        return ub[a] && ub[a].oh ? ub[a].oh : void 0
                    }), ba.w = function(a) {
                        a = Fc(a);
                        return a[0] + "x" + a[1]
                    }, ba.s = function(a) {
                        var c = w(a, "screen");
                        if (c) {
                            a = w(c, "width");
                            var b = w(c, "height");
                            c = w(c, "colorDepth") || w(c, "pixelDepth");
                            return [a, b, c].join("x")
                        }
                        return null
                    }, ba.sk = W("devicePixelRatio"),
                    ba.ifr = x(nb, Kb), ba.j = x(bm, Kb), ba.sti = function(a) {
                        return nb(a) ? am(a) ? "1" : null : null
                    }, ba);
            lb.pri = function(a) {
                if (jd(a)) return null;
                var c = Dm(a),
                    b = c.Mg;
                R(b) && (c.Mg = null, Em(a).then(function(d) {
                    c.Mg = d
                }));
                return b ? 1 : null
            };
            F(lb, (mb = {}, mb.iss = x(cm, Kb), mb.hdl = x(dm, Kb), mb.iia = x(em, Kb), mb.cpf = x(fm, Kb), mb.ntf = function(a) {
                a: switch (w(a, "Notification.permission")) {
                    case "denied":
                        a = !1;
                        break a;
                    case "granted":
                        a = !0;
                        break a;
                    default:
                        a = null
                }
                return Ya(a) ? null : a ? 2 : 1
            }, mb.eu = function(a) {
                return X(a).o("isEU")
            }, mb.ns = Lm, mb.np = function(a) {
                if (kb(a,
                        0, 100)) a = null;
                else {
                    a = ed(Ue(a), 100);
                    for (var c = [], b = 0; b < a.length; b++) {
                        var d = a.charCodeAt(b);
                        128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                    }
                    a = Of(c)
                }
                return a
            }, mb));
            lb.wv = z(2, N);
            lb.ds = function(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = ze(a);
                c = P(c);
                if (!a) return null;
                b = w(a, "timing");
                if (!b) return null;
                a = Eg(a, b, Am);
                c = Bm(c);
                return (c = Dg(c, a)) && c.join(",")
            };
            lb.dsn = function(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = ze(a);
                c = P(c);
                if (!a) return null;
                b = null;
                if (U(a.getEntriesByType)) {
                    var d = w(a.getEntriesByType("navigation"), "0");
                    d && (b = d)
                }
                if (!b) return null;
                a = Eg(a, b, xm);
                c = zm(c);
                return (c = Dg(c, a)) && c.join(",")
            };
            lb.flo = Oh;
            lb.bu = function(a) {
                return U(w(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
            };
            lb.td = Gm;
            var Fk = Ba(lb),
                Ck = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                pd = A(function() {
                    return {
                        mc: {},
                        pending: {},
                        $b: {}
                    }
                }),
                Ze = W("postMessage"),
                Nm = G(function(a, c, b, d) {
                    var e, f = {
                        Oc: ca(a)(fa),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.Oc = parseInt(b[0], 10), f.key = parseFloat(b[1]), f.dir = parseInt(b[2], 10));
                    F(d, c);
                    c = (e = {
                        data: d
                    }, e.__yminfo = ["__yminfo", f.Oc, f.key, f.dir].join(":"), e);
                    return {
                        fa: f,
                        M: cb(a, c) || ""
                    }
                }),
                Om = G(function(a, c, b, d, e) {
                    c = c(d);
                    var f = pd(a),
                        g = [c.fa.Oc, c.fa.key].join(":");
                    if (Ze(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.M, "*")
                        } catch (l) {
                            delete f.pending[g];
                            return
                        }
                        Z(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                Pm = I("s.f", Om),
                Qm = G(function(a, c, b, d, e, f) {
                    var g = null,
                        l = null,
                        m = pd(a),
                        p = null;
                    try {
                        g = xb(a, f.data), l = g.__yminfo,
                            p = g.data
                    } catch (r) {
                        return
                    }
                    if (!ta(l) && l.substring && "__yminfo" === l.substring(0, 8) && !ta(p) && (g = l.split(":"), 4 === g.length))
                        if (l = c.id, c = g[1], a = g[2], g = g[3], p.type && "0" === g && p.counterId) {
                            if (!p.toCounter || p.toCounter == l) {
                                m = null;
                                try {
                                    m = f.source
                                } catch (r) {}!Ya(m) && Ze(m) && (f = d.ma(p.type, [f, p]), e = D(x(N, Tf(e)), f.concat([{}])), p = b([c, a, p.counterId], e), m.postMessage(p.M, "*"))
                            }
                        } else g === "" + l && va(p) && Y(function(r) {
                            return r.hid && r.counterId
                        }, p).length === p.length && (b = m.pending[[c, a].join(":")]) && b.apply(null, [f].concat(p))
                }),
                Rm = I("s.fh", Qm),
                rg = A(function(a, c) {
                    var b, d = Fb("getElementsByTagName", w(a, "document")),
                        e = pd(a),
                        f = Ze(a),
                        g = rc(a),
                        l = xa(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + ic(a), b);
                    Ek(a, g);
                    b = Nm(a, f);
                    var m = Pm(a, b([]));
                    E(function(p) {
                        var r = null;
                        try {
                            r = p.contentWindow
                        } catch (t) {}
                        r && m(r, {
                            type: "initToChild"
                        }, function(t, v) {
                            g.ma("initToParent", [t, v])
                        })
                    }, d);
                    nb(a) && m(a.parent, {
                        type: "initToParent"
                    }, function(p, r) {
                        g.ma("parentConnect", [p, r])
                    });
                    l.D(a, "message", Rm(a, c, b, g, f));
                    return {
                        na: g,
                        mc: e.mc,
                        $b: e.$b,
                        lf: m
                    }
                }, x(Gb, P)),
                Sm = G(function(a, c, b) {
                    var d = b[a];
                    d ? (d.Pj = c, d.Wg = !0, d.Vg ? d.Vg(c) : d.xb = Q.resolve(c)) : b[a] = {
                        xb: Q.resolve(c),
                        Pj: c,
                        Wg: !0
                    }
                }),
                Sa = G(function(a, c) {
                    if (!c[a]) {
                        var b, d = new Q(function(e) {
                            b = e
                        });
                        c[a] = {
                            Vg: b,
                            xb: d,
                            Wg: !1
                        }
                    }
                    return c[a].xb
                }),
                Ma = gb({}),
                zk = /Firefox\/([0-9]+)/,
                yk = /\sYptp\/\d\.(\d+)\s/,
                Ak = /Edg\/(\d+)\./,
                $e = A(function(a, c, b) {
                    var d = X(a);
                    c = Na(a);
                    var e = [];
                    b = V([a, b, d, c], xk);
                    jd(a) || e.push(V([Bk, "pp", ""], b));
                    var f = vg(a) && !tg(a, 68);
                    f || e.push(V([Dk, "pu", ""], b));
                    f || c.Ae || me(a) || (e.push(V([wk,
                        "zzlc", "na"
                    ], b)), e.push(V([vk, "cc", ""], b)));
                    return e.length ? {
                        pb: function(g, l) {
                            if (0 === d.o("isEU")) try {
                                E(x(N, ea), e)
                            } catch (m) {}
                            l()
                        },
                        va: function(g, l) {
                            var m = g.Y;
                            if (m && 0 === d.o("isEU")) try {
                                E(x(z(m), ea), e)
                            } catch (p) {}
                            l()
                        }
                    } : {}
                }, function(a, c, b) {
                    return P(b)
                }),
                tk = ["0"],
                xc = A(function(a) {
                    return Na(a).o("retryReqs", {})
                }),
                Ki = I("g.r", function(a) {
                    var c = ca(a),
                        b = xc(a);
                    return x(Da, qc(function(d) {
                        return (d = d[1]) && d.ghid && d.ghid !== ic(a) && d.time && d.time + 864E5 > c(fa) && 2 >= d.browserInfo.rqnl
                    }), Ra(function(d) {
                        var e = d[1];
                        return {
                            protocol: e.protocol,
                            host: e.host,
                            Uj: e.resource,
                            Nj: e.postParams,
                            ha: e.params,
                            xi: e.browserInfo,
                            hl: e.ghid,
                            time: e.time,
                            rc: parseInt(d[0], 10),
                            Ei: e.counterId,
                            ra: e.counterType
                        }
                    }))(b) || []
                }),
                je = [],
                rk = G(function(a, c, b, d, e) {
                    return (new Q(function(f, g) {
                        var l = Ba(b),
                            m = x(d.resolve ? d.resolve : N, $c(f)),
                            p = x(d.reject ? d.reject : N, $c(g));
                        d.resolve = m;
                        d.reject = p;
                        E(function(r) {
                                var t;
                                d.Bf.push(r);
                                var v = b[r],
                                    q = Z(a, z(ob(), p), 5100, "is.m");
                                c(v.window, F(e, (t = {}, t.toCounter = parseInt(r, 10), t)), function(k, h) {
                                    ua(a, q);
                                    d.gh.push(r);
                                    d.resolve && d.resolve(h)
                                })
                            },
                            l)
                    }))["catch"](C(a, "if.b"))
                }),
                sk = G(function(a, c, b) {
                    c = Y(function(d) {
                        return !K(b.info.counterId, d.Bf)
                    }, c);
                    E(function(d) {
                        var e;
                        b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                    }, c)
                }),
                md = A(qg, x(Gb, P)),
                qk = "ru en et fi lt lv pl".split(" "),
                kd = [],
                ig = x(xg, Ra(Wl(id)), da("join"), z(","), ea),
                kg = x(qc(sb(id)), ac, Boolean),
                Qh = A(wd),
                af, Pa, ab, Rh = {
                    "mc.edadeal.ru": {
                        wd: /^([^/]+\.)?edadeal\.ru$/,
                        wf: "ru"
                    },
                    "mc.yandexsport.ru": {
                        wd: /^([^/]+\.)?yandexsport\.ru$/,
                        wf: "ru"
                    },
                    "mc.beru.ru": {
                        wd: /^([^/]+\.)?beru\.ru$/,
                        wf: "ru"
                    },
                    "mc.kinopoisk.ru": {
                        wd: /^([^/]+\.)?kinopoisk\.ru$/,
                        wf: "ru"
                    }
                },
                Tm = (af = {}, af["mc.admetrica.ru"] = "SYNCED_ADM", af),
                ik = (Pa = {}, Pa.ka = "ge", Pa.ro = "md", Pa.tg = "tj", Pa.tk = "tm", Pa.et = "ee", Pa.hy = "com.am", Pa.he = "co.li", Pa.ky = "kg", Pa.uk = "ua", Pa.be = "by", Pa.tr = "com.tr", Pa.kk = "kz", Pa),
                Sh = A(wd),
                gk = (ab = {}, ab.am = "com.am", ab.tr = "com.tr", ab.ge = "com.ge", ab.il = "co.il", ab["\u0440\u0444"] = "ru", ab["xn--p1ai"] = "ru", ab["\u0443\u043a\u0440"] = "ua", ab["xn--j1amh"] = "ua", ab["\u0431\u0435\u043b"] = "by", ab["xn--90ais"] = "by", ab),
                Um = A(function() {
                    var a =
                        x(qc(x(N, ya("ru"), Rb)), kc(function(c, b) {
                            c[b] = ["mc.yandex." + b];
                            return c
                        }, {}))(Ig);
                    Ce(Da, Ra(function(c) {
                        c = c[0];
                        a[c] = [c]
                    }))(Rh);
                    return a
                }),
                Vm = A(function(a) {
                    var c = O(a).hostname;
                    return (a = La(function(b) {
                        return b[1].wd.test(c)
                    }, Da(Rh))) ? a[0] : ""
                }),
                Wm = G(function(a, c) {
                    var b = Kg(c),
                        d = hk(c),
                        e = Vm(c) || ek(c),
                        f = ca(c),
                        g = Na(c),
                        l = g.o("synced", {}),
                        m = Tm["mc.admetrica.ru"];
                    b = b ? [e, d, m] : [];
                    l && (b = Y(function(p) {
                        var r = (l[p] || 1) + 1440 < f(eb);
                        r && delete l[p];
                        return r
                    }, b));
                    g.C("synced", l);
                    return S(function(p, r) {
                        E(function(t) {
                            p.push({
                                domain: t,
                                yj: r
                            })
                        }, r === m ? ["mc.admetrica.ru"] : a[r] || []);
                        return p
                    }, [], b)
                }),
                Xm = function(a, c) {
                    return function(b) {
                        var d = Um(),
                            e = Wm(d);
                        return me(b) ? {} : {
                            va: function(f, g) {
                                var l = f.Y,
                                    m = X(b);
                                if (!Kg(b) || nb(b) || !l || !l.o("pv")) return g();
                                l = e(b);
                                if (!l.length) return g();
                                if (m.o("startSync")) Sh(b).push(g);
                                else {
                                    m.C("startSync", !0);
                                    m = je[0];
                                    if (!m) return g();
                                    m(b).then(V([b, l], a)).then(g, x(C(b, c), g))
                                }
                            }
                        }
                    }
                }(function(a, c) {
                    var b = ca(a),
                        d = X(a),
                        e = Na(a),
                        f = Ae(a, "c"),
                        g = rb(a, f);
                    return S(function(l, m) {
                        function p() {
                            var v = e.o("synced");
                            d.C("startSync",
                                !1);
                            v && (v[m.yj] = t, e.C("synced", v));
                            E(ea, Sh(a))
                        }
                        var r = g({
                                ab: ["sync.cook"]
                            }, [ha.Pa + "//" + m.domain + "/sync_cookie_image_check"]),
                            t;
                        r.then(function() {
                            t = b(eb);
                            p()
                        })["catch"](function() {
                            t = b(eb) - 1435;
                            p()
                        });
                        r = z(r, N);
                        return l.then(r)
                    }, Q.resolve(""), c)["catch"](C(a, "ctl"))
                }, "sy.c"),
                dk = /^.+\.mtproxy\.yandex\.net$/,
                ck = /^[a-z][\w.+-]+:/i,
                Th = {},
                Af = G(function(a, c, b) {
                    return D(x(N, da("concat", "" + a), z(b, w)), c).join("x")
                }),
                Ym = I("fip", function(a, c) {
                    if (!vg(a) || ne(a)) {
                        var b = Na(a);
                        if (!b.o("fip")) {
                            var d = x(Ra(x(function(e,
                                f) {
                                return I("fip." + f, e)(a)
                            }, B(Bl, null, 210))), da("join"), z("-"), ea)(c);
                            b.C("fip", d)
                        }
                    }
                }),
                Ea = x(Ba, W("0"));
            Ea({
                kl: 1
            });
            Ea({
                bl: 1
            });
            var Cd, Fa = [se, Bc, Pb(), pe],
                bf = Pb("et w v z i u vf".split(" "));
            Fa.push(Xm);
            Fa.unshift(function(a, c, b) {
                return {
                    pb: function(d, e) {
                        var f = Ua(a, b);
                        (f = f && f.userParams) && d.Id && f(d.Id);
                        e()
                    }
                }
            });
            Fa.unshift(function(a, c, b) {
                return {
                    va: function(d, e) {
                        if (d.ha && (ch(b, d.ha), !d.ja && d.Y && d.J)) {
                            var f = cb(a, d.ha),
                                g = Qh(a),
                                l = d.Y.o("pv");
                            f && !d.J.nohit && (l ? encodeURIComponent(f).length > ha.Zh ? g.push([d.Y,
                                d.ha
                            ]) : d.J["site-info"] = f : (d.ja = f, d.Cj = !0))
                        }
                        e()
                    },
                    pb: function(d, e) {
                        var f = Qh(a),
                            g = Ua(a, b),
                            l = g && g.params;
                        l && (g = Y(x(W("0"), ya(d.Y)), f), E(function(m) {
                            l(m[1]);
                            m = Ad(a)(m, f);
                            f.splice(m, 1)
                        }, g));
                        e()
                    }
                }
            });
            Fa.push(nd());
            Fa.push(function(a) {
                return {
                    va: function(c, b) {
                        var d = c.Y;
                        if (d) {
                            var e = X(a).o("adBlockEnabled");
                            e && d.C("adb", e)
                        }
                        b()
                    }
                }
            });
            Fa.push($e);
            Fa.push(function(a) {
                return {
                    va: function(c, b) {
                        var d = c.Y,
                            e = Na(a).o("fip");
                        e && d && d.C("fip", e);
                        b()
                    }
                }
            });
            var ra = (Cd = {}, Cd.h = Fa, Cd.er = [], Cd);
            ra.adb = [];
            var Uh = [Pb(), pe];
            Uh.push($e);
            ra.f = Uh;
            ra["2"] = Fa;
            ra["1"] = function(a, c) {
                return Y(x(sb(c), Rb), a)
            }(Fa, [pe]);
            ra.a = Fa;
            ra.g = Fa;
            ra.e = Fa;
            var Vh = [Bc];
            Vh.push(function() {
                return function(a) {
                    return {
                        va: function(c, b) {
                            var d = c.Y,
                                e = void 0 === d ? pa() : d,
                                f = c.rc,
                                g = xc(a);
                            d = e.o("rqnl", 0) + 1;
                            e.C("rqnl", d);
                            if (e = w(g, [f, "browserInfo"].join("."))) e.rqnl = d, le(a);
                            b()
                        },
                        pb: function(c, b) {
                            sg(a, c);
                            b()
                        }
                    }
                }
            }());
            ra.r = Vh;
            var cf = [];
            cf.push(bf);
            cf.push(nd());
            ra.p = cf;
            ra["6"] = [Bc];
            ra.t = Fa;
            ra["4"] = [bf];
            ra.W = [bf];
            var df = [se, Bc, Pb()];
            df.push(nd());
            df.push($e);
            ra.n = df;
            ra.d = [Pb(["v",
                "vf"
            ])];
            ra.m = [Pb(["u", "v", "vf"]), nd()];
            ra.s = [];
            ra.u = [];
            ra.S = [Pb(["v", "u", "rn"])];
            Fa.unshift(function(a, c, b) {
                return {
                    va: function(d, e) {
                        var f = d.Y,
                            g = d.J;
                        if (!f || !g) return e();
                        !Th[b.id] && f.o("pv") && b.exp && !g.nohit && (g.exp = b.exp, Th[b.id] = !0);
                        f = g["page-ref"];
                        var l = g["page-url"];
                        f && l !== f ? g["page-ref"] = fg(a, f) : delete g["page-ref"];
                        g["page-url"] = fg(a, l).slice(0, ha.ai);
                        return e()
                    }
                }
            });
            ra["5"] = Y(x(sb([se, Bc]), Rb), Fa);
            var Dd, Wh = B(Q.reject, Q, ob()),
                ka = (Dd = {}, Dd.h = Ja, Dd.er = z(Wh, N), Dd);
            ka.a = Ja;
            ka.p = od;
            ka["4"] = od;
            ka.f =
                Ja;
            ka.n = Ja;
            ka["6"] = function(a, c, b) {
                var d = rb(a, c);
                return function(e) {
                    return Eb(a, b, e, !0).then(V([e, ["https://mc.yandex.md/cc"], {
                        Jd: !0,
                        Ah: !1
                    }], d))
                }
            };
            ka["1"] = Ja;
            ka.n = Ja;
            ka.c = rb;
            ka.g = Ja;
            ka.e = Ja;
            ka["2"] = Ja;
            ka.r = function(a, c, b) {
                var d = od(a, c, b),
                    e = Ja(a, c, b);
                return function(f, g, l) {
                    return "webvisor" === l ? d(f, g, f.J["wv-part"]) : e(f, g)
                }
            };
            ka.adb = function(a, c, b) {
                var d = rb(a, c);
                return function(e, f, g) {
                    void 0 === g && (g = {});
                    return Eb(a, b, e, !0).then(V([e, f, g], d))
                }
            };
            ka.s = rb;
            ka.S = Ja;
            ka.u = rb;
            ka.m = function(a, c, b) {
                return function(d,
                    e) {
                    var f, g = ha.Pa + "//mc.yandex.ru/clmap/" + e.id,
                        l = d.J;
                    l = (f = {}, f["page-url"] = l && l["page-url"] || "", f);
                    f = F(d, {
                        J: F(d.J || {}, l)
                    });
                    l = rb(a, c);
                    return Eb(a, b, d, !0)["catch"](C(a, "m.m.b")).then(V([f, [g]], l)).then(function(m) {
                        return Eb(a, b, d).then(z(m.qc, N))
                    })["catch"](C(a, "2.m.m.b"))
                }
            };
            ka.d = Ja;
            ka.t = Ja;
            ka.W = od;
            ka["5"] = Ja;
            var oa = I("g.sen", function(a, c, b) {
                    var d = Ae(a, c);
                    b = Zj(a, c, b);
                    var e = ka[c],
                        f = e ? e(a, d, b) : Ja(a, d, b);
                    return function() {
                        var g = wa(arguments),
                            l = g.slice(1);
                        g = F(g[0], {
                            ab: [c]
                        });
                        return f.apply(void 0, ia([g],
                            l))
                    }
                }, Wh),
                Ed = A(function(a) {
                    a = w(a, "console");
                    var c = w(a, "log");
                    c = wb(c, "log") || J;
                    var b = w(a, "warn"),
                        d = w(a, "error");
                    c = B(c, a);
                    return {
                        log: c,
                        error: la("error", d) ? B(d, a) : c,
                        warn: la("warn", b) ? B(b, a) : c
                    }
                }),
                Zm = {
                    log: J,
                    warn: J,
                    error: J
                },
                $m = I("dc.init", function(a) {
                    var c = O(a),
                        b = Ed(a),
                        d = fc(a),
                        e = dg(a),
                        f = e.rj;
                    e = e.lj;
                    f && !e && d.C("debug", "1", void 0, c.host);
                    return ae(a) || !f && !e ? Zm : b
                }),
                eg = A($m),
                $b = A(x(W("id"), sb([26812653])), P),
                an = C(window, "h.p", function(a, c) {
                    var b, d, e = oa(a, "h", c),
                        f = c.Uc || "" + O(a).href,
                        g = c.Vi || a.document.referrer,
                        l = {
                            Y: pa((b = {}, b.pv = 1, b)),
                            J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d)
                        };
                    l.ha = c.ha;
                    l.Id = c.Id;
                    c.Jc && l.J && (l.J.nohit = "1");
                    return e(l, c).then(function(m) {
                        m && (c.Jc || $b(c) || Ga(a, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + (g + ". Params: "), c.ha), Ma(Sm(P(c), m)))
                    })["catch"](C(a, "h.g.s"))
                }),
                Oc = A(xd, P),
                bn = I("p.ar", function(a, c) {
                    var b = oa(a, "a", c);
                    return function(d, e, f, g, l, m) {
                        var p, r, t = {
                            J: {},
                            Y: pa((p = {}, p.pv = 1, p.ar = 1, p))
                        };
                        d && (e = ec(e) ? {
                            title: e.title,
                            Sg: e.referer,
                            ha: e.params,
                            Eb: e.callback,
                            b: e.ctx
                        } : {
                            title: e,
                            Sg: f,
                            ha: g,
                            Eb: l,
                            b: m
                        }, f = Oc(c), f.url !== d && (f.Tj = f.url, f.url = d), d = d || O(a).href, f = e.Sg || f.Tj || a.document.referrer, $b(c) || Ga(a, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f + ". Params: ", e.ha), b(F(t, {
                            ha: e.ha,
                            title: e.title,
                            J: F(t.J, (r = {}, r["page-url"] = d, r["page-ref"] = f, r))
                        }), c).then(V([a, B(e.Eb || J, e.b)], Cb), C(a, "p.ar.s")))
                    }
                }),
                Xj = {
                    da: "stamp",
                    ca: "frameId",
                    fa: "meta",
                    Ec: "base",
                    cd: "hasBase",
                    Dc: "address",
                    Hd: "ua",
                    nc: "prev",
                    Fg: "namespace",
                    Va: "keystrokes",
                    ed: "isMeta",
                    Lb: "modifier",
                    ud: "pageWidth",
                    sd: "pageHeight",
                    Ed: "startNode",
                    Qc: "endNode",
                    Kd: "zoomFrom",
                    Md: "zoomTo",
                    qa: "i",
                    gb: "o",
                    n: "n",
                    r: "r",
                    $a: "ct",
                    xa: "at",
                    jd: "nm",
                    md: "ns",
                    vb: "pa",
                    wb: "pr",
                    ub: "nx",
                    Sa: "h",
                    Za: "changes",
                    ob: "a",
                    qb: "b",
                    Oa: "c"
                },
                Yj = ["attributes", "attrs"],
                Fd = function() {
                    function a(c) {
                        this.b = c
                    }
                    a.prototype.yb = function(c) {
                        var b = hd(c);
                        c = D(B(this.hb, this), b);
                        return xe(cb(this.b, D(function(d, e) {
                            var f;
                            return F({}, b[e], (f = {}, f.data = d, f))
                        }, c)))
                    };
                    a.prototype.hb = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = cb(this.b, hd(c.data)));
                        return b
                    };
                    a.prototype.tb = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.Dd = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function() {
                        return !!this.b.JSON
                    };
                    return a
                }(),
                Xh = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {},
                ef = function(a) {
                    return a && a.Rf && Object.prototype.hasOwnProperty.call(a, "default") ? a["default"] : a
                }(function(a, c) {
                    return c = {
                        exports: {}
                    }, a(c, c.exports), c.exports
                }(function(a) {
                    try {
                        a.exports =
                            function(c) {
                                function b(e) {
                                    if (d[e]) return d[e].exports;
                                    var f = d[e] = {
                                        qa: e,
                                        wj: !1,
                                        exports: {}
                                    };
                                    c[e].call(f.exports, f, f.exports, b);
                                    f.wj = !0;
                                    return f.exports
                                }
                                var d = {};
                                b.yl = c;
                                b.Oa = d;
                                b.d = function(e, f, g) {
                                    b.gb(e, f) || Object.defineProperty(e, f, {
                                        enumerable: !0,
                                        get: g
                                    })
                                };
                                b.r = function(e) {
                                    vf();
                                    vf();
                                    vf();
                                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                        value: "Module"
                                    });
                                    Object.defineProperty(e, "__esModule", {
                                        value: !0
                                    })
                                };
                                b.t = function(e, f) {
                                    1 & f && (e = b(e));
                                    if (8 & f || 4 & f && "object" == typeof e &&
                                        e && e.Rf) return e;
                                    var g = Object.create(null);
                                    b.r(g);
                                    Object.defineProperty(g, "default", {
                                        enumerable: !0,
                                        value: e
                                    });
                                    if (2 & f && "string" != typeof e)
                                        for (var l in e) b.d(g, l, function(m) {
                                            return e[m]
                                        }.bind(null, l));
                                    return g
                                };
                                b.n = function(e) {
                                    var f = e && e.Rf ? function() {
                                        return e["default"]
                                    } : function() {
                                        return e
                                    };
                                    b.d(f, "a", f);
                                    return f
                                };
                                b.gb = function(e, f) {
                                    return Object.prototype.hasOwnProperty.call(e, f)
                                };
                                b.p = "";
                                return b(b.Fl = 4)
                            }([function(c, b, d) {
                                function e(g, l, m) {
                                    for (var p = Object.keys(l), r = 0; r < p.length; ++r) void 0 !== g[p[r]] &&
                                        m || (g[p[r]] = l[p[r]]);
                                    return g
                                }

                                function f(g) {
                                    function l(m, p) {
                                        if (!(this instanceof l)) return new l(m, p);
                                        Object.defineProperty(this, "message", {
                                            get: function() {
                                                return m
                                            }
                                        });
                                        Error.captureStackTrace ? Error.captureStackTrace(this, l) : Object.defineProperty(this, "stack", {
                                            value: Error().stack || ""
                                        });
                                        p && e(this, p)
                                    }(l.prototype = Object.create(Error.prototype)).constructor = l;
                                    Object.defineProperty(l.prototype, "name", {
                                        get: function() {
                                            return g
                                        }
                                    });
                                    l.prototype.toString = function() {
                                        return this.name + ": " + this.message
                                    };
                                    return l
                                }
                                b.Tk = d(6);
                                b.vi = d(7);
                                b.Mf = d(8);
                                b.Qa = d(9);
                                b.vg = d(10);
                                b.Gf = d(11);
                                b.Mj = d(12);
                                b.Ub = d(13);
                                b.global = "undefined" != typeof window && window || "undefined" != typeof Xh && Xh || "undefined" != typeof self && self || this;
                                b.ta = Object.freeze ? Object.freeze([]) : [];
                                b.fe = Object.freeze ? Object.freeze({}) : {};
                                b.nl = !!(b.global.Ng && b.global.Ng.yk && b.global.Ng.yk.node);
                                b.isInteger = Number.isInteger || function(g) {
                                    return "number" == typeof g && isFinite(g) && Math.floor(g) === g
                                };
                                b.Ee = function(g) {
                                    return "string" == typeof g || g instanceof String
                                };
                                b.ol =
                                    function(g) {
                                        return g && "object" == typeof g
                                    };
                                b.ql = b.pl = function(g, l) {
                                    var m = g[l];
                                    return !(null == m || !g.hasOwnProperty(l)) && ("object" != typeof m || 0 < (Array.isArray(m) ? m.length : Object.keys(m).length))
                                };
                                b.sa = function() {
                                    try {
                                        var g = b.vg("buffer").sa;
                                        return g.prototype.vh ? g : null
                                    } catch (l) {
                                        return null
                                    }
                                }();
                                b.Bc = null;
                                b.Ac = null;
                                b.Bj = function() {
                                    var g = [];
                                    return "number" == typeof g ? b.sa ? b.Ac(g) : new b.Array(g) : b.sa ? b.Bc(g) : "undefined" == typeof Uint8Array ? g : new Uint8Array(g)
                                };
                                b.Array = "undefined" != typeof Uint8Array ? Uint8Array :
                                    Array;
                                b.La = b.global.Ji && b.global.Ji.La || b.global.La || b.vg("long");
                                b.rl = /^true|false|0|1$/;
                                b.sl = /^-?(?:0|[1-9][0-9]*)$/;
                                b.tl = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
                                b.wl = function(g) {
                                    return g ? b.Ub.from(g).gk() : b.Ub.Hk
                                };
                                b.vl = function(g, l) {
                                    var m = b.Ub.Xi(g);
                                    return b.La ? b.La.Wi(m.aa, m.ea, l) : m.nh(!!l)
                                };
                                b.zj = e;
                                b.ul = function(g) {
                                    return g.charAt(0).toLowerCase() + g.substring(1)
                                };
                                b.zl = f;
                                b.Lk = f("ProtocolError");
                                b.Hg = function(g) {
                                    for (var l = {}, m = 0; m < g.length; ++m) l[g[m]] = 1;
                                    return function() {
                                        for (var p = Object.keys(this),
                                                r = p.length - 1; - 1 < r; --r)
                                            if (1 === l[p[r]] && void 0 !== this[p[r]] && null !== this[p[r]]) return p[r]
                                    }
                                };
                                b.Ig = function(g) {
                                    return function(l) {
                                        for (var m = 0; m < g.length; ++m) g[m] !== l && delete this[g[m]]
                                    }
                                };
                                b.Kl = {
                                    xl: String,
                                    $k: String,
                                    Yb: String,
                                    json: !0
                                };
                                b.Ca = function() {
                                    var g = b.sa;
                                    g ? (b.Bc = g.from !== Uint8Array.from && g.from || function(l, m) {
                                        return new g(l, m)
                                    }, b.Ac = g.Rk || function(l) {
                                        return new g(l)
                                    }) : b.Bc = b.Ac = null
                                }
                            }, function(c, b, d) {
                                c.exports = d(5)
                            }, function(c, b, d) {
                                function e() {
                                    return k.sa ? function() {
                                            return (m.create = function() {
                                                return new q
                                            })()
                                        } :
                                        function() {
                                            return new m
                                        }
                                }

                                function f(y, H, T) {
                                    this.rb = y;
                                    this.ba = H;
                                    this.next = void 0;
                                    this.yh = T
                                }

                                function g() {}

                                function l(y) {
                                    this.head = y.head;
                                    this.za = y.za;
                                    this.ba = y.ba;
                                    this.next = y.jb
                                }

                                function m() {
                                    this.ba = 0;
                                    this.za = this.head = new f(g, 0, 0);
                                    this.jb = null
                                }

                                function p(y, H, T) {
                                    H[T] = 255 & y
                                }

                                function r(y, H) {
                                    this.ba = y;
                                    this.next = void 0;
                                    this.yh = H
                                }

                                function t(y, H, T) {
                                    for (; y.ea;) H[T++] = 127 & y.aa | 128, y.aa = (y.aa >>> 7 | y.ea << 25) >>> 0, y.ea >>>= 7;
                                    for (; 127 < y.aa;) H[T++] = 127 & y.aa | 128, y.aa >>>= 7;
                                    H[T++] = y.aa
                                }

                                function v(y, H, T) {
                                    H[T] = 255 & y;
                                    H[T +
                                        1] = y >>> 8 & 255;
                                    H[T + 2] = y >>> 16 & 255;
                                    H[T + 3] = y >>> 24
                                }
                                c.exports = m;
                                var q, k = d(0),
                                    h = k.Ub,
                                    n = k.vi,
                                    u = k.Gf;
                                m.create = e();
                                m.Xb = function(y) {
                                    return new k.Array(y)
                                };
                                k.Array !== Array && (m.Xb = k.Mj(m.Xb, k.Array.prototype.subarray));
                                m.prototype.wa = function(y, H, T) {
                                    this.za = this.za.next = new f(y, H, T);
                                    this.ba += H;
                                    return this
                                };
                                r.prototype = Object.create(f.prototype);
                                r.prototype.rb = function(y, H, T) {
                                    for (; 127 < y;) H[T++] = 127 & y | 128, y >>>= 7;
                                    H[T] = y
                                };
                                m.prototype.l = function(y) {
                                    this.ba += (this.za = this.za.next = new r(128 > (y >>>= 0) ? 1 : 16384 > y ? 2 : 2097152 >
                                        y ? 3 : 268435456 > y ? 4 : 5, y)).ba;
                                    return this
                                };
                                m.prototype.F = function(y) {
                                    0 > y ? this.wa(t, 10, h.ne(y)) : this.l(y)
                                };
                                m.prototype.tc = function(y) {
                                    this.l((y << 1 ^ y >> 31) >>> 0)
                                };
                                m.prototype.rh = function(y) {
                                    y = h.from(y);
                                    return this.wa(t, y.length(), y)
                                };
                                m.prototype.wg = m.prototype.rh;
                                m.prototype.bk = function(y) {
                                    y = h.from(y).Dh();
                                    return this.wa(t, y.length(), y)
                                };
                                m.prototype.Fa = function(y) {
                                    this.wa(p, 1, y ? 1 : 0)
                                };
                                m.prototype.eg = function(y) {
                                    y = h.from(y);
                                    return this.wa(v, 4, y.aa).wa(v, 4, y.ea)
                                };
                                m.prototype.ak = m.prototype.eg;
                                m.prototype.Qa =
                                    function(y) {
                                        return this.wa(k.Qa.Bh, 4, y)
                                    };
                                var M = k.Array.prototype.set ? function(y, H, T) {
                                    H.set(y, T)
                                } : function(y, H, T) {
                                    for (var mc = 0; mc < y.length; ++mc) H[T + mc] = y[mc]
                                };
                                m.prototype.Yb = function(y) {
                                    var H = y.length >>> 0;
                                    if (!H) return this.wa(p, 1, 0);
                                    if (k.Ee(y)) {
                                        var T = m.Xb(H = n.length(y));
                                        n.decode(y, T, 0);
                                        y = T
                                    }
                                    return this.l(H).wa(M, H, y)
                                };
                                m.prototype.M = function(y) {
                                    var H = u.length(y);
                                    return H ? this.l(H).wa(u.write, H, y) : this.wa(p, 1, 0)
                                };
                                m.prototype.K = function() {
                                    this.jb = new l(this);
                                    this.head = this.za = new f(g, 0, 0);
                                    this.ba = 0;
                                    return this
                                };
                                m.prototype.reset = function() {
                                    this.jb ? (this.head = this.jb.head, this.za = this.jb.za, this.ba = this.jb.ba, this.jb = this.jb.next) : (this.head = this.za = new f(g, 0, 0), this.ba = 0);
                                    return this
                                };
                                m.prototype.L = function() {
                                    var y = this.head,
                                        H = this.za,
                                        T = this.ba;
                                    this.reset().l(T);
                                    T && (this.za.next = y.next, this.za = H, this.ba += T);
                                    return this
                                };
                                m.prototype.finish = function() {
                                    for (var y = this.head.next, H = this.constructor.Xb(this.ba), T = 0; y;) y.rb(y.yh, H, T), T += y.ba, y = y.next;
                                    return H
                                };
                                m.Ca = function(y) {
                                    q = y;
                                    m.create = e();
                                    q.Ca()
                                }
                            }, function(c,
                                b, d) {
                                function e() {
                                    return t.sa ? function(n) {
                                        return (g.create = function(u) {
                                            return t.sa.isBuffer(u) ? new r(u) : h(u)
                                        })(n)
                                    } : h
                                }

                                function f(n, u) {
                                    return RangeError("index out of range: " + n.G + " + " + (u || 1) + " > " + n.ba)
                                }

                                function g(n) {
                                    this.$ = n;
                                    this.G = 0;
                                    this.ba = n.length
                                }

                                function l() {
                                    var n = new v(0, 0),
                                        u = 0;
                                    if (!(4 < this.ba - this.G)) {
                                        for (; 3 > u; ++u) {
                                            if (this.G >= this.ba) throw f(this);
                                            n.aa = (n.aa | (127 & this.$[this.G]) << 7 * u) >>> 0;
                                            if (128 > this.$[this.G++]) return n
                                        }
                                        n.aa = (n.aa | (127 & this.$[this.G++]) << 7 * u) >>> 0;
                                        return n
                                    }
                                    for (; 4 > u; ++u)
                                        if (n.aa =
                                            (n.aa | (127 & this.$[this.G]) << 7 * u) >>> 0, 128 > this.$[this.G++]) return n;
                                    n.aa = (n.aa | (127 & this.$[this.G]) << 28) >>> 0;
                                    n.ea = (n.ea | (127 & this.$[this.G]) >> 4) >>> 0;
                                    if (128 > this.$[this.G++]) return n;
                                    u = 0;
                                    if (4 < this.ba - this.G)
                                        for (; 5 > u; ++u) {
                                            if (n.ea = (n.ea | (127 & this.$[this.G]) << 7 * u + 3) >>> 0, 128 > this.$[this.G++]) return n
                                        } else
                                            for (; 5 > u; ++u) {
                                                if (this.G >= this.ba) throw f(this);
                                                n.ea = (n.ea | (127 & this.$[this.G]) << 7 * u + 3) >>> 0;
                                                if (128 > this.$[this.G++]) return n
                                            }
                                    throw Error("invalid varint encoding");
                                }

                                function m(n, u) {
                                    return (n[u - 4] | n[u - 3] <<
                                        8 | n[u - 2] << 16 | n[u - 1] << 24) >>> 0
                                }

                                function p() {
                                    if (this.G + 8 > this.ba) throw f(this, 8);
                                    return new v(m(this.$, this.G += 4), m(this.$, this.G += 4))
                                }
                                c.exports = g;
                                var r, t = d(0),
                                    v = t.Ub,
                                    q = t.Gf,
                                    k, h = "undefined" != typeof Uint8Array ? function(n) {
                                        if (n instanceof Uint8Array || Array.isArray(n)) return new g(n);
                                        throw Error("illegal buffer");
                                    } : function(n) {
                                        if (Array.isArray(n)) return new g(n);
                                        throw Error("illegal buffer");
                                    };
                                g.create = e();
                                g.prototype.Uf = t.Array.prototype.subarray || t.Array.prototype.slice;
                                g.prototype.l = (k = 4294967295, function() {
                                    k =
                                        (127 & this.$[this.G]) >>> 0;
                                    if (128 > this.$[this.G++]) return k;
                                    k = (k | (127 & this.$[this.G]) << 7) >>> 0;
                                    if (128 > this.$[this.G++]) return k;
                                    k = (k | (127 & this.$[this.G]) << 14) >>> 0;
                                    if (128 > this.$[this.G++]) return k;
                                    k = (k | (127 & this.$[this.G]) << 21) >>> 0;
                                    if (128 > this.$[this.G++]) return k;
                                    k = (k | (15 & this.$[this.G]) << 28) >>> 0;
                                    if (128 > this.$[this.G++]) return k;
                                    if ((this.G += 5) > this.ba) throw this.G = this.ba, f(this, 10);
                                    return k
                                });
                                g.prototype.F = function() {
                                    this.l()
                                };
                                g.prototype.tc = function() {
                                    this.l()
                                };
                                g.prototype.Fa = function() {
                                    this.l()
                                };
                                g.prototype.Qa = function() {
                                    if (this.G + 4 > this.ba) throw f(this, 4);
                                    var n = t.Qa.Qg(this.$, this.G);
                                    this.G += 4;
                                    return n
                                };
                                g.prototype.Yb = function() {
                                    var n = this.l(),
                                        u = this.G,
                                        M = this.G + n;
                                    if (M > this.ba) throw f(this, n);
                                    this.G += n;
                                    return Array.isArray(this.$) ? this.$.slice(u, M) : u === M ? new this.$.constructor(0) : this.Uf.call(this.$, u, M)
                                };
                                g.prototype.M = function() {
                                    var n = this.Yb();
                                    return q.read(n, 0, n.length)
                                };
                                g.Ca = function(n) {
                                    r = n;
                                    g.create = e();
                                    r.Ca();
                                    var u = t.La ? "toLong" : "toNumber";
                                    t.zj(g.prototype, {
                                        wg: function() {
                                            return l.call(this)[u](!1)
                                        },
                                        rh: function() {
                                            return l.call(this)[u](!0)
                                        },
                                        bk: function() {
                                            return l.call(this).Ch()[u](!1)
                                        },
                                        eg: function() {
                                            return p.call(this)[u](!0)
                                        },
                                        ak: function() {
                                            return p.call(this)[u](!1)
                                        }
                                    })
                                }
                            }, function(c, b, d) {
                                d.r(b);
                                d.d(b, "ru", function() {
                                    return l
                                });
                                d.d(b, "default", function() {
                                    return g
                                });
                                c = d(1);
                                var e = c.Pf,
                                    f = c.xh,
                                    g = c.Xg["default"] || (c.Xg["default"] = {}),
                                    l = g.V = function() {
                                        var m = {};
                                        m.T = function() {
                                            var p = {};
                                            p.N = function() {
                                                var r = {};
                                                r.R = function() {
                                                    var t = {};
                                                    t.O = function() {
                                                        var v = {};
                                                        v.Lf = function() {
                                                            function q(k) {
                                                                this.buffer = [];
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.buffer = f.ta;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                if (null != k.buffer && k.buffer.length)
                                                                    for (var n = 0; n < k.buffer.length; ++n) g.V.T.N.R.O.sa.encode(k.buffer[n], h.l(10).K()).L();
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.sa = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.da = 0;
                                                            q.prototype.data = null;
                                                            q.prototype.page =
                                                                0;
                                                            q.prototype.Wd = f.Bj();
                                                            q.prototype.end = !1;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.da && h.l(8).F(k.da);
                                                                null != k.data && g.V.T.N.R.O.Of.encode(k.data, h.l(18).K()).L();
                                                                null != k.page && h.l(24).F(k.page);
                                                                null != k.Wd && h.l(34).Yb(k.Wd);
                                                                null != k.end && h.l(40).Fa(k.end);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Of = function() {
                                                            function q(h) {
                                                                if (h)
                                                                    for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                            }
                                                            q.prototype.page = null;
                                                            q.prototype.Me = null;
                                                            q.prototype.event = null;
                                                            q.prototype.Sd = null;
                                                            q.prototype.cf = null;
                                                            q.prototype.Qd = 0;
                                                            var k;
                                                            Object.defineProperty(q.prototype, "data", {
                                                                get: f.Hg(k = "page mutation event articleInfo publishersHeader activity".split(" ")),
                                                                set: f.Ig(k)
                                                            });
                                                            q.create = function(h) {
                                                                return new q(h)
                                                            };
                                                            q.encode = function(h, n) {
                                                                n || (n = e.create());
                                                                null != h.page && g.V.T.N.R.O.lb.encode(h.page, n.l(10).K()).L();
                                                                null != h.Me && g.V.T.N.R.O.Ma.encode(h.Me, n.l(18).K()).L();
                                                                null != h.event && g.V.T.N.R.O.Event.encode(h.event, n.l(26).K()).L();
                                                                null != h.Sd && g.V.T.N.R.O.Hh.encode(h.Sd,
                                                                    n.l(34).K()).L();
                                                                null != h.cf && g.V.T.N.R.O.gi.encode(h.cf, n.l(42).K()).L();
                                                                null != h.Qd && n.l(48).l(h.Qd);
                                                                return n
                                                            };
                                                            return q
                                                        }();
                                                        v.lb = function() {
                                                            function q(k) {
                                                                this.content = [];
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.fa = null;
                                                            q.prototype.content = f.ta;
                                                            q.prototype.ca = 0;
                                                            q.prototype.Qb = "";
                                                            q.prototype.Ia = f.La ? f.La.Wi(0, 0, !1) : 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.fa && g.V.T.N.R.O.lb.Od.encode(k.fa, h.l(10).K()).L();
                                                                if (null != k.content && k.content.length)
                                                                    for (var n = 0; n < k.content.length; ++n) g.V.T.N.R.O.lb.Qh.encode(k.content[n], h.l(18).K()).L();
                                                                null != k.ca && h.l(24).tc(k.ca);
                                                                null != k.Qb && h.l(34).M(k.Qb);
                                                                null != k.Ia && h.l(40).wg(k.Ia);
                                                                return h
                                                            };
                                                            q.Kf = function() {
                                                                function k(h) {
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.width = 0;
                                                                k.prototype.height = 0;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.width && n.l(8).F(h.width);
                                                                    null != h.height &&
                                                                        n.l(16).F(h.height);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.Location = function() {
                                                                function k(h) {
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.host = "";
                                                                k.prototype.protocol = "";
                                                                k.prototype.path = "";
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.host && n.l(10).M(h.host);
                                                                    null != h.protocol && n.l(18).M(h.protocol);
                                                                    null != h.path && n.l(26).M(h.path);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.ki = function() {
                                                                function k(h) {
                                                                    this.scroll = [];
                                                                    if (h)
                                                                        for (var n = Object.keys(h),
                                                                                u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.target = 0;
                                                                k.prototype.scroll = f.ta;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.target && n.l(8).F(h.target);
                                                                    if (null != h.scroll && h.scroll.length) {
                                                                        n.l(18).K();
                                                                        for (var u = 0; u < h.scroll.length; ++u) n.F(h.scroll[u]);
                                                                        n.L()
                                                                    }
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.Od = function() {
                                                                function k(h) {
                                                                    this.ic = [];
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.doctype = "";
                                                                k.prototype.title =
                                                                    "";
                                                                k.prototype.Dc = "";
                                                                k.prototype.Hd = "";
                                                                k.prototype.referrer = "";
                                                                k.prototype.Ec = "";
                                                                k.prototype.cd = !1;
                                                                k.prototype.screen = null;
                                                                k.prototype.viewport = null;
                                                                k.prototype.location = null;
                                                                k.prototype.ic = f.ta;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.doctype && n.l(10).M(h.doctype);
                                                                    null != h.title && n.l(18).M(h.title);
                                                                    null != h.Dc && n.l(26).M(h.Dc);
                                                                    null != h.Hd && n.l(34).M(h.Hd);
                                                                    null != h.referrer && n.l(42).M(h.referrer);
                                                                    null != h.Ec && n.l(50).M(h.Ec);
                                                                    null != h.cd && n.l(56).Fa(h.cd);
                                                                    null !=
                                                                        h.screen && g.V.T.N.R.O.lb.Kf.encode(h.screen, n.l(66).K()).L();
                                                                    null != h.viewport && g.V.T.N.R.O.lb.Kf.encode(h.viewport, n.l(74).K()).L();
                                                                    null != h.location && g.V.T.N.R.O.lb.Location.encode(h.location, n.l(82).K()).L();
                                                                    if (null != h.ic && h.ic.length)
                                                                        for (var u = 0; u < h.ic.length; ++u) g.V.T.N.R.O.lb.ki.encode(h.ic[u], n.l(90).K()).L();
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.Qh = function() {
                                                                function k(h) {
                                                                    this.attributes = {};
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.id = 0;
                                                                k.prototype.name =
                                                                    "";
                                                                k.prototype.attributes = f.fe;
                                                                k.prototype.parent = 0;
                                                                k.prototype.content = "";
                                                                k.prototype.next = 0;
                                                                k.prototype.nc = 0;
                                                                k.prototype.hidden = !1;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.id && n.l(8).F(h.id);
                                                                    null != h.name && n.l(18).M(h.name);
                                                                    if (null != h.attributes)
                                                                        for (var u = Object.keys(h.attributes), M = 0; M < u.length; ++M) n.l(26).K().l(10).M(u[M]).l(18).M(h.attributes[u[M]]).L();
                                                                    null != h.parent && n.l(32).F(h.parent);
                                                                    null != h.content && n.l(42).M(h.content);
                                                                    null != h.next && n.l(48).F(h.next);
                                                                    null != h.nc && n.l(56).F(h.nc);
                                                                    null != h.hidden && n.l(64).Fa(h.hidden);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            return q
                                                        }();
                                                        v.Ma = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.target = 0;
                                                            q.prototype.da = 0;
                                                            q.prototype.fa = null;
                                                            q.prototype.ca = 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.target && h.l(8).F(k.target);
                                                                null != k.da && h.l(16).F(k.da);
                                                                null != k.fa && g.V.T.N.R.O.Ma.Od.encode(k.fa, h.l(26).K()).L();
                                                                null != k.ca &&
                                                                    h.l(32).tc(k.ca);
                                                                return h
                                                            };
                                                            q.Rh = function() {
                                                                function k(h) {
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.id = 0;
                                                                k.prototype.wb = 0;
                                                                k.prototype.ub = 0;
                                                                k.prototype.vb = 0;
                                                                k.prototype.qa = 0;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.id && n.l(8).F(h.id);
                                                                    null != h.wb && n.l(16).F(h.wb);
                                                                    null != h.ub && n.l(24).F(h.ub);
                                                                    null != h.vb && n.l(32).F(h.vb);
                                                                    null != h.qa && n.l(40).F(h.qa);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.Fh = function() {
                                                                function k(h) {
                                                                    this.xa = {};
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.id = 0;
                                                                k.prototype.jd = "";
                                                                k.prototype.vb = 0;
                                                                k.prototype.md = "";
                                                                k.prototype.wb = 0;
                                                                k.prototype.xa = f.fe;
                                                                k.prototype.$a = "";
                                                                k.prototype.ub = 0;
                                                                k.prototype.qa = 0;
                                                                k.prototype.Sa = !1;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.id && n.l(8).F(h.id);
                                                                    null != h.jd && n.l(18).M(h.jd);
                                                                    null != h.vb && n.l(24).F(h.vb);
                                                                    null != h.md && n.l(34).M(h.md);
                                                                    null != h.wb && n.l(40).F(h.wb);
                                                                    if (null != h.xa)
                                                                        for (var u =
                                                                                Object.keys(h.xa), M = 0; M < u.length; ++M) n.l(50).K().l(10).M(u[M]).l(18).M(h.xa[u[M]]).L();
                                                                    null != h.$a && n.l(58).M(h.$a);
                                                                    null != h.ub && n.l(64).F(h.ub);
                                                                    null != h.qa && n.l(72).F(h.qa);
                                                                    null != h.Sa && n.l(80).Fa(h.Sa);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.Jf = function() {
                                                                function k(h) {
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.gb = "";
                                                                k.prototype.n = "";
                                                                k.prototype.r = !1;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.gb && n.l(10).M(h.gb);
                                                                    null !=
                                                                        h.n && n.l(18).M(h.n);
                                                                    null != h.r && n.l(24).Fa(h.r);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.Lh = function() {
                                                                function k(h) {
                                                                    this.xa = {};
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.id = 0;
                                                                k.prototype.xa = f.fe;
                                                                k.prototype.qa = 0;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.id && n.l(8).F(h.id);
                                                                    if (null != h.xa)
                                                                        for (var u = Object.keys(h.xa), M = 0; M < u.length; ++M) n.l(18).K().l(10).M(u[M]), g.V.T.N.R.O.Ma.Jf.encode(h.xa[u[M]], n.l(18).K()).L().L();
                                                                    null !=
                                                                        h.qa && n.l(24).F(h.qa);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.oi = function() {
                                                                function k(h) {
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.id = 0;
                                                                k.prototype.$a = null;
                                                                k.prototype.qa = 0;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.id && n.l(8).F(h.id);
                                                                    null != h.$a && g.V.T.N.R.O.Ma.Jf.encode(h.$a, n.l(18).K()).L();
                                                                    null != h.qa && n.l(24).F(h.qa);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.Ph = function() {
                                                                function k(h) {
                                                                    this.ob = [];
                                                                    this.qb = [];
                                                                    this.Oa = [];
                                                                    this.d = [];
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.ob = f.ta;
                                                                k.prototype.qb = f.ta;
                                                                k.prototype.Oa = f.ta;
                                                                k.prototype.d = f.ta;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    if (null != h.ob && h.ob.length)
                                                                        for (var u = 0; u < h.ob.length; ++u) g.V.T.N.R.O.Ma.Rh.encode(h.ob[u], n.l(10).K()).L();
                                                                    if (null != h.qb && h.qb.length)
                                                                        for (u = 0; u < h.qb.length; ++u) g.V.T.N.R.O.Ma.Fh.encode(h.qb[u], n.l(18).K()).L();
                                                                    if (null != h.Oa && h.Oa.length)
                                                                        for (u = 0; u < h.Oa.length; ++u) g.V.T.N.R.O.Ma.Lh.encode(h.Oa[u],
                                                                            n.l(26).K()).L();
                                                                    if (null != h.d && h.d.length)
                                                                        for (u = 0; u < h.d.length; ++u) g.V.T.N.R.O.Ma.oi.encode(h.d[u], n.l(34).K()).L();
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            q.Od = function() {
                                                                function k(h) {
                                                                    this.Za = [];
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.index = 0;
                                                                k.prototype.Za = f.ta;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.index && n.l(8).F(h.index);
                                                                    if (null != h.Za && h.Za.length)
                                                                        for (var u = 0; u < h.Za.length; ++u) g.V.T.N.R.O.Ma.Ph.encode(h.Za[u],
                                                                            n.l(18).K()).L();
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            return q
                                                        }();
                                                        v.Event = function() {
                                                            function q(h) {
                                                                if (h)
                                                                    for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                            }
                                                            q.prototype.type = 0;
                                                            q.prototype.target = 0;
                                                            q.prototype.ca = 0;
                                                            q.prototype.Le = null;
                                                            q.prototype.hf = null;
                                                            q.prototype.Hf = null;
                                                            q.prototype.jf = null;
                                                            q.prototype.Ud = null;
                                                            q.prototype.zf = null;
                                                            q.prototype.Eg = null;
                                                            q.prototype.Pg = null;
                                                            q.prototype.If = null;
                                                            q.prototype.ef = null;
                                                            q.prototype.Ge = null;
                                                            q.prototype.ee = null;
                                                            q.prototype.ke = null;
                                                            q.prototype.xe =
                                                                null;
                                                            var k;
                                                            Object.defineProperty(q.prototype, "meta", {
                                                                get: f.Hg(k = "mouseEvent scrollEvent windowEvent selectionEvent changeEvent touchEvent methodEvent propertyEvent zoomEvent resizeEvent keystrokesEvent deviceRotationEvent fatalErrorEvent hashchangeEvent".split(" ")),
                                                                set: f.Ig(k)
                                                            });
                                                            q.create = function(h) {
                                                                return new q(h)
                                                            };
                                                            q.encode = function(h, n) {
                                                                n || (n = e.create());
                                                                null != h.type && n.l(8).F(h.type);
                                                                null != h.target && n.l(16).tc(h.target);
                                                                null != h.ca && n.l(24).tc(h.ca);
                                                                null != h.Le && g.V.T.N.R.O.MouseEvent.encode(h.Le,
                                                                    n.l(34).K()).L();
                                                                null != h.hf && g.V.T.N.R.O.li.encode(h.hf, n.l(42).K()).L();
                                                                null != h.Hf && g.V.T.N.R.O.pi.encode(h.Hf, n.l(50).K()).L();
                                                                null != h.jf && g.V.T.N.R.O.mi.encode(h.jf, n.l(58).K()).L();
                                                                null != h.Ud && g.V.T.N.R.O.Oh.encode(h.Ud, n.l(66).K()).L();
                                                                null != h.zf && g.V.T.N.R.O.TouchEvent.encode(h.zf, n.l(74).K()).L();
                                                                null != h.Eg && g.V.T.N.R.O.ci.encode(h.Eg, n.l(82).K()).L();
                                                                null != h.Pg && g.V.T.N.R.O.fi.encode(h.Pg, n.l(90).K()).L();
                                                                null != h.If && g.V.T.N.R.O.Pd.encode(h.If, n.l(98).K()).L();
                                                                null != h.ef && g.V.T.N.R.O.ji.encode(h.ef,
                                                                    n.l(106).K()).L();
                                                                null != h.Ge && g.V.T.N.R.O.Nf.encode(h.Ge, n.l(114).K()).L();
                                                                null != h.ee && g.V.T.N.R.O.Sh.encode(h.ee, n.l(122).K()).L();
                                                                null != h.ke && g.V.T.N.R.O.Vh.encode(h.ke, n.l(130).K()).L();
                                                                null != h.xe && g.V.T.N.R.O.Wh.encode(h.xe, n.l(138).K()).L();
                                                                return n
                                                            };
                                                            return q
                                                        }();
                                                        v.MouseEvent = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.x = 0;
                                                            q.prototype.y = 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.x && h.l(8).F(k.x);
                                                                null != k.y && h.l(16).F(k.y);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.li = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.x = 0;
                                                            q.prototype.y = 0;
                                                            q.prototype.page = !1;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.x && h.l(8).F(k.x);
                                                                null != k.y && h.l(16).F(k.y);
                                                                null != k.page && h.l(24).Fa(k.page);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.pi = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null !=
                                                                        k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.mi = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.start = 0;
                                                            q.prototype.end = 0;
                                                            q.prototype.Ed = 0;
                                                            q.prototype.Qc = 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.start && h.l(8).F(k.start);
                                                                null != k.end && h.l(16).F(k.end);
                                                                null != k.Ed && h.l(24).F(k.Ed);
                                                                null != k.Qc && h.l(32).F(k.Qc);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Oh = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.value = "";
                                                            q.prototype.checked = !1;
                                                            q.prototype.hidden = !1;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.value && h.l(10).M(k.value);
                                                                null != k.checked && h.l(16).Fa(k.checked);
                                                                null != k.hidden && h.l(24).Fa(k.hidden);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.TouchEvent = function() {
                                                            function q(k) {
                                                                this.touches = [];
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n <
                                                                        h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.touches = f.ta;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                if (null != k.touches && k.touches.length)
                                                                    for (var n = 0; n < k.touches.length; ++n) g.V.T.N.R.O.TouchEvent.ni.encode(k.touches[n], h.l(10).K()).L();
                                                                return h
                                                            };
                                                            q.ni = function() {
                                                                function k(h) {
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.id = "";
                                                                k.prototype.x = 0;
                                                                k.prototype.y = 0;
                                                                k.prototype.force = 0;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.id && n.l(10).M(h.id);
                                                                    null != h.x && n.l(21).Qa(h.x);
                                                                    null != h.y && n.l(29).Qa(h.y);
                                                                    null != h.force && n.l(37).Qa(h.force);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            return q
                                                        }();
                                                        v.Pd = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.Kd = null;
                                                            q.prototype.Md = null;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.Kd && g.V.T.N.R.O.Pd.Qf.encode(k.Kd, h.l(10).K()).L();
                                                                null != k.Md && g.V.T.N.R.O.Pd.Qf.encode(k.Md,
                                                                    h.l(18).K()).L();
                                                                return h
                                                            };
                                                            q.Qf = function() {
                                                                function k(h) {
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.level = 0;
                                                                k.prototype.x = 0;
                                                                k.prototype.y = 0;
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.level && n.l(13).Qa(h.level);
                                                                    null != h.x && n.l(16).F(h.x);
                                                                    null != h.y && n.l(24).F(h.y);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            return q
                                                        }();
                                                        v.ji = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.width = 0;
                                                            q.prototype.height = 0;
                                                            q.prototype.ud = 0;
                                                            q.prototype.sd = 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.width && h.l(8).F(k.width);
                                                                null != k.height && h.l(16).F(k.height);
                                                                null != k.ud && h.l(24).F(k.ud);
                                                                null != k.sd && h.l(32).F(k.sd);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.ci = function() {
                                                            function q(k) {
                                                                this.Na = [];
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.method = "";
                                                            q.prototype.Na = f.ta;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.method && h.l(10).M(k.method);
                                                                if (null != k.Na && k.Na.length)
                                                                    for (var n = 0; n < k.Na.length; ++n) h.l(18).M(k.Na[n]);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.fi = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.Og = "";
                                                            q.prototype.value = "";
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.Og && h.l(10).M(k.Og);
                                                                null != k.value && h.l(18).M(k.value);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Nf = function() {
                                                            function q(k) {
                                                                this.Va = [];
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.Va = f.ta;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                if (null != k.Va && k.Va.length)
                                                                    for (var n = 0; n < k.Va.length; ++n) g.V.T.N.R.O.Nf.Xh.encode(k.Va[n], h.l(10).K()).L();
                                                                return h
                                                            };
                                                            q.Xh = function() {
                                                                function k(h) {
                                                                    if (h)
                                                                        for (var n = Object.keys(h), u = 0; u < n.length; ++u) null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                }
                                                                k.prototype.id = 0;
                                                                k.prototype.key = "";
                                                                k.prototype.ed = !1;
                                                                k.prototype.Lb = "";
                                                                k.create = function(h) {
                                                                    return new k(h)
                                                                };
                                                                k.encode = function(h, n) {
                                                                    n || (n = e.create());
                                                                    null != h.id && n.l(8).F(h.id);
                                                                    null != h.key && n.l(18).M(h.key);
                                                                    null != h.ed && n.l(24).Fa(h.ed);
                                                                    null != h.Lb && n.l(34).M(h.Lb);
                                                                    return n
                                                                };
                                                                return k
                                                            }();
                                                            return q
                                                        }();
                                                        v.Sh = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.width = 0;
                                                            q.prototype.height = 0;
                                                            q.prototype.orientation = 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.width && h.l(8).F(k.width);
                                                                null != k.height && h.l(16).F(k.height);
                                                                null != k.orientation && h.l(24).F(k.orientation);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Vh = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.code = "";
                                                            q.prototype.bg = "";
                                                            q.prototype.stack = "";
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.code && h.l(10).M(k.code);
                                                                null != k.bg && h.l(18).M(k.bg);
                                                                null != k.stack && h.l(26).M(k.stack);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Wh = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n <
                                                                        h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.hash = "";
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.hash && h.l(10).M(k.hash);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Uh = function() {
                                                            var q = {},
                                                                k = Object.create(q);
                                                            k[q[0] = "mousemove"] = 0;
                                                            k[q[1] = "mouseup"] = 1;
                                                            k[q[2] = "mousedown"] = 2;
                                                            k[q[3] = "click"] = 3;
                                                            k[q[4] = "scroll"] = 4;
                                                            k[q[5] = "windowblur"] = 5;
                                                            k[q[6] = "windowfocus"] = 6;
                                                            k[q[7] = "focus"] = 7;
                                                            k[q[8] = "blur"] = 8;
                                                            k[q[9] = "eof"] = 9;
                                                            k[q[10] = "selection"] = 10;
                                                            k[q[11] = "change"] = 11;
                                                            k[q[12] = "input"] =
                                                                12;
                                                            k[q[13] = "touchmove"] = 13;
                                                            k[q[14] = "touchstart"] = 14;
                                                            k[q[15] = "touchend"] = 15;
                                                            k[q[16] = "touchcancel"] = 16;
                                                            k[q[17] = "touchforcechange"] = 17;
                                                            k[q[18] = "canvasMethod"] = 18;
                                                            k[q[19] = "canvasProperty"] = 19;
                                                            k[q[20] = "zoom"] = 20;
                                                            k[q[21] = "resize"] = 21;
                                                            k[q[22] = "mediaMethod"] = 22;
                                                            k[q[23] = "mediaProperty"] = 23;
                                                            k[q[24] = "keystroke"] = 24;
                                                            k[q[25] = "deviceRotation"] = 25;
                                                            k[q[26] = "fatalError"] = 26;
                                                            k[q[27] = "hashchange"] = 27;
                                                            return k
                                                        }();
                                                        v.gi = function() {
                                                            function q(k) {
                                                                this.Ab = [];
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] &&
                                                                        (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.Ab = f.ta;
                                                            q.prototype.Ga = 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                if (null != k.Ab && k.Ab.length)
                                                                    for (var n = 0; n < k.Ab.length; ++n) g.V.T.N.R.O.Ih.encode(k.Ab[n], h.l(10).K()).L();
                                                                null != k.Ga && h.l(16).F(k.Ga);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Ih = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.id = 0;
                                                            q.prototype.x = 0;
                                                            q.prototype.y = 0;
                                                            q.prototype.width = 0;
                                                            q.prototype.height = 0;
                                                            q.prototype.Ga =
                                                                0;
                                                            q.prototype.Ke = 0;
                                                            q.prototype.Fb = 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.id && h.l(8).l(k.id);
                                                                null != k.x && h.l(16).F(k.x);
                                                                null != k.y && h.l(24).F(k.y);
                                                                null != k.width && h.l(32).F(k.width);
                                                                null != k.height && h.l(40).F(k.height);
                                                                null != k.Ga && h.l(48).F(k.Ga);
                                                                null != k.Ke && h.l(61).Qa(k.Ke);
                                                                null != k.Fb && h.l(64).F(k.Fb);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Hh = function() {
                                                            function q(k) {
                                                                this.Bb = [];
                                                                this.Sb = [];
                                                                this.Ob = [];
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] =
                                                                        k[h[n]])
                                                            }
                                                            q.prototype.id = 0;
                                                            q.prototype.Ue = "";
                                                            q.prototype.Te = "";
                                                            q.prototype.Bb = f.ta;
                                                            q.prototype.Sb = f.ta;
                                                            q.prototype.bf = "";
                                                            q.prototype.Fb = 0;
                                                            q.prototype.Ob = f.ta;
                                                            q.prototype.Ef = "";
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.id && h.l(8).l(k.id);
                                                                null != k.Ue && h.l(18).M(k.Ue);
                                                                null != k.Te && h.l(26).M(k.Te);
                                                                if (null != k.Bb && k.Bb.length)
                                                                    for (var n = 0; n < k.Bb.length; ++n) g.V.T.N.R.O.Gh.encode(k.Bb[n], h.l(34).K()).L();
                                                                if (null != k.Sb && k.Sb.length)
                                                                    for (n = 0; n < k.Sb.length; ++n) g.V.T.N.R.O.Kh.encode(k.Sb[n],
                                                                        h.l(42).K()).L();
                                                                null != k.bf && h.l(50).M(k.bf);
                                                                null != k.Fb && h.l(56).F(k.Fb);
                                                                if (null != k.Ob && k.Ob.length)
                                                                    for (n = 0; n < k.Ob.length; ++n) g.V.T.N.R.O.Jh.encode(k.Ob[n], h.l(66).K()).L();
                                                                null != k.Ef && h.l(74).M(k.Ef);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Gh = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.name = "";
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.name && h.l(10).M(k.name);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Kh = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h =
                                                                            Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.name = "";
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.name && h.l(10).M(k.name);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        v.Jh = function() {
                                                            function q(k) {
                                                                if (k)
                                                                    for (var h = Object.keys(k), n = 0; n < h.length; ++n) null != k[h[n]] && (this[h[n]] = k[h[n]])
                                                            }
                                                            q.prototype.name = "";
                                                            q.prototype.position = 0;
                                                            q.create = function(k) {
                                                                return new q(k)
                                                            };
                                                            q.encode = function(k, h) {
                                                                h || (h = e.create());
                                                                null != k.name && h.l(10).M(k.name);
                                                                null != k.position &&
                                                                    h.l(16).F(k.position);
                                                                return h
                                                            };
                                                            return q
                                                        }();
                                                        return v
                                                    }();
                                                    return t
                                                }();
                                                return r
                                            }();
                                            return p
                                        }();
                                        return m
                                    }()
                            }, function(c, b, d) {
                                function e() {
                                    f.xh.Ca();
                                    f.Pf.Ca(f.Nh);
                                    f.ii.Ca(f.Mh)
                                }
                                var f = b;
                                f.Vk = "minimal";
                                f.Pf = d(2);
                                f.Nh = d(14);
                                f.ii = d(3);
                                f.Mh = d(15);
                                f.xh = d(0);
                                f.El = d(16);
                                f.Xg = d(18);
                                f.Xk = e;
                                e()
                            }, function(c) {
                                c.exports = function(b, d) {
                                    for (var e = Array(arguments.length - 1), f = 0, g = 2, l = !0; g < arguments.length;) e[f++] = arguments[g++];
                                    return new Promise(function(m, p) {
                                        e[f] = function(r) {
                                            if (l)
                                                if (l = !1, r) p(r);
                                                else {
                                                    for (var t = Array(arguments.length -
                                                            1), v = 0; v < t.length;) t[v++] = arguments[v];
                                                    m.apply(null, t)
                                                }
                                        };
                                        try {
                                            b.apply(d || null, e)
                                        } catch (r) {
                                            l && (l = !1, p(r))
                                        }
                                    })
                                }
                            }, function(c, b) {
                                b.length = function(g) {
                                    var l = g.length;
                                    if (!l) return 0;
                                    for (var m = 0; 1 < --l % 4 && "=" === g.charAt(l);) ++m;
                                    return Math.ceil(3 * g.length) / 4 - m
                                };
                                for (var d = Array(64), e = Array(123), f = 0; 64 > f;) e[d[f] = 26 > f ? f + 65 : 52 > f ? f + 71 : 62 > f ? f - 4 : f - 59 | 43] = f++;
                                b.encode = function(g, l, m) {
                                    for (var p, r = null, t = [], v = 0, q = 0; l < m;) {
                                        var k = g[l++];
                                        switch (q) {
                                            case 0:
                                                t[v++] = d[k >> 2];
                                                p = (3 & k) << 4;
                                                q = 1;
                                                break;
                                            case 1:
                                                t[v++] = d[p | k >> 4];
                                                p = (15 &
                                                    k) << 2;
                                                q = 2;
                                                break;
                                            case 2:
                                                t[v++] = d[p | k >> 6], t[v++] = d[63 & k], q = 0
                                        }
                                        8191 < v && ((r || (r = [])).push(String.fromCharCode.apply(String, t)), v = 0)
                                    }
                                    q && (t[v++] = d[p], t[v++] = 61, 1 === q && (t[v++] = 61));
                                    return r ? (v && r.push(String.fromCharCode.apply(String, t.slice(0, v))), r.join("")) : String.fromCharCode.apply(String, t.slice(0, v))
                                };
                                b.decode = function(g, l, m) {
                                    for (var p, r = m, t = 0, v = 0; v < g.length;) {
                                        var q = g.charCodeAt(v++);
                                        if (61 === q && 1 < t) break;
                                        if (void 0 === (q = e[q])) throw Error("invalid encoding");
                                        switch (t) {
                                            case 0:
                                                p = q;
                                                t = 1;
                                                break;
                                            case 1:
                                                l[m++] =
                                                    p << 2 | (48 & q) >> 4;
                                                p = q;
                                                t = 2;
                                                break;
                                            case 2:
                                                l[m++] = (15 & p) << 4 | (60 & q) >> 2;
                                                p = q;
                                                t = 3;
                                                break;
                                            case 3:
                                                l[m++] = (3 & p) << 6 | q, t = 0
                                        }
                                    }
                                    if (1 === t) throw Error("invalid encoding");
                                    return m - r
                                };
                                b.test = function(g) {
                                    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(g)
                                }
                            }, function(c) {
                                function b() {
                                    this.zb = {}
                                }
                                c.exports = b;
                                b.prototype.D = function(d, e, f) {
                                    (this.zb[d] || (this.zb[d] = [])).push({
                                        rb: e,
                                        b: f || this
                                    });
                                    return this
                                };
                                b.prototype.Aa = function(d, e) {
                                    if (void 0 === d) this.zb = {};
                                    else if (void 0 === e) this.zb[d] = [];
                                    else
                                        for (var f =
                                                this.zb[d], g = 0; g < f.length;) f[g].rb === e ? f.splice(g, 1) : ++g;
                                    return this
                                };
                                b.prototype.Li = function(d) {
                                    var e = this.zb[d];
                                    if (e) {
                                        for (var f = [], g = 1; g < arguments.length;) f.push(arguments[g++]);
                                        for (g = 0; g < e.length;) e[g].rb.apply(e[g++].b, f)
                                    }
                                    return this
                                }
                            }, function(c) {
                                function b(l) {
                                    "undefined" != typeof Float32Array ? function() {
                                        function m(h, n, u) {
                                            v[0] = h;
                                            n[u] = q[0];
                                            n[u + 1] = q[1];
                                            n[u + 2] = q[2];
                                            n[u + 3] = q[3]
                                        }

                                        function p(h, n, u) {
                                            v[0] = h;
                                            n[u] = q[3];
                                            n[u + 1] = q[2];
                                            n[u + 2] = q[1];
                                            n[u + 3] = q[0]
                                        }

                                        function r(h, n) {
                                            q[0] = h[n];
                                            q[1] = h[n + 1];
                                            q[2] = h[n + 2];
                                            q[3] = h[n + 3];
                                            return v[0]
                                        }

                                        function t(h, n) {
                                            q[3] = h[n];
                                            q[2] = h[n + 1];
                                            q[1] = h[n + 2];
                                            q[0] = h[n + 3];
                                            return v[0]
                                        }
                                        var v = new Float32Array([-0]),
                                            q = new Uint8Array(v.buffer),
                                            k = 128 === q[3];
                                        l.Bh = k ? m : p;
                                        l.Ek = k ? p : m;
                                        l.Qg = k ? r : t;
                                        l.Sj = k ? t : r
                                    }() : function() {
                                        function m(r, t, v, q) {
                                            var k = 0 > t ? 1 : 0;
                                            k && (t = -t);
                                            if (0 === t) r(0 < 1 / t ? 0 : 2147483648, v, q);
                                            else if (isNaN(t)) r(2143289344, v, q);
                                            else if (3.4028234663852886E38 < t) r((k << 31 | 2139095040) >>> 0, v, q);
                                            else if (1.1754943508222875E-38 > t) r((k << 31 | Math.round(t / 1.401298464324817E-45)) >>> 0, v, q);
                                            else {
                                                var h = Math.floor(Math.log(t) /
                                                    Math.LN2);
                                                r((k << 31 | h + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -h) * 8388608)) >>> 0, v, q)
                                            }
                                        }

                                        function p(r, t, v) {
                                            v = r(t, v);
                                            r = 2 * (v >> 31) + 1;
                                            t = v >>> 23 & 255;
                                            v &= 8388607;
                                            return 255 === t ? v ? NaN : 1 / 0 * r : 0 === t ? 1.401298464324817E-45 * r * v : r * Math.pow(2, t - 150) * (v + 8388608)
                                        }
                                        l.Bh = m.bind(null, d);
                                        l.Ek = m.bind(null, e);
                                        l.Qg = p.bind(null, f);
                                        l.Sj = p.bind(null, g)
                                    }();
                                    "undefined" != typeof Float64Array ? function() {
                                        function m(h, n, u) {
                                            v[0] = h;
                                            n[u] = q[0];
                                            n[u + 1] = q[1];
                                            n[u + 2] = q[2];
                                            n[u + 3] = q[3];
                                            n[u + 4] = q[4];
                                            n[u + 5] = q[5];
                                            n[u + 6] = q[6];
                                            n[u + 7] = q[7]
                                        }

                                        function p(h, n,
                                            u) {
                                            v[0] = h;
                                            n[u] = q[7];
                                            n[u + 1] = q[6];
                                            n[u + 2] = q[5];
                                            n[u + 3] = q[4];
                                            n[u + 4] = q[3];
                                            n[u + 5] = q[2];
                                            n[u + 6] = q[1];
                                            n[u + 7] = q[0]
                                        }

                                        function r(h, n) {
                                            q[0] = h[n];
                                            q[1] = h[n + 1];
                                            q[2] = h[n + 2];
                                            q[3] = h[n + 3];
                                            q[4] = h[n + 4];
                                            q[5] = h[n + 5];
                                            q[6] = h[n + 6];
                                            q[7] = h[n + 7];
                                            return v[0]
                                        }

                                        function t(h, n) {
                                            q[7] = h[n];
                                            q[6] = h[n + 1];
                                            q[5] = h[n + 2];
                                            q[4] = h[n + 3];
                                            q[3] = h[n + 4];
                                            q[2] = h[n + 5];
                                            q[1] = h[n + 6];
                                            q[0] = h[n + 7];
                                            return v[0]
                                        }
                                        var v = new Float64Array([-0]),
                                            q = new Uint8Array(v.buffer),
                                            k = 128 === q[7];
                                        l.Dk = k ? m : p;
                                        l.Ck = k ? p : m;
                                        l.Rj = k ? r : t;
                                        l.Qj = k ? t : r
                                    }() : function() {
                                        function m(r, t, v, q, k, h) {
                                            var n =
                                                0 > q ? 1 : 0;
                                            n && (q = -q);
                                            if (0 === q) r(0, k, h + t), r(0 < 1 / q ? 0 : 2147483648, k, h + v);
                                            else if (isNaN(q)) r(0, k, h + t), r(2146959360, k, h + v);
                                            else if (1.7976931348623157E308 < q) r(0, k, h + t), r((n << 31 | 2146435072) >>> 0, k, h + v);
                                            else if (2.2250738585072014E-308 > q) q /= 4.9E-324, r(q >>> 0, k, h + t), r((n << 31 | q / 4294967296) >>> 0, k, h + v);
                                            else {
                                                var u = Math.floor(Math.log(q) / Math.LN2);
                                                1024 === u && (u = 1023);
                                                q *= Math.pow(2, -u);
                                                r(4503599627370496 * q >>> 0, k, h + t);
                                                r((n << 31 | u + 1023 << 20 | 1048576 * q & 1048575) >>> 0, k, h + v)
                                            }
                                        }

                                        function p(r, t, v, q, k) {
                                            t = r(q, k + t);
                                            q = r(q, k + v);
                                            r = 2 * (q >>
                                                31) + 1;
                                            v = q >>> 20 & 2047;
                                            t = 4294967296 * (1048575 & q) + t;
                                            return 2047 === v ? t ? NaN : 1 / 0 * r : 0 === v ? 4.9E-324 * r * t : r * Math.pow(2, v - 1075) * (t + 4503599627370496)
                                        }
                                        l.Dk = m.bind(null, d, 0, 4);
                                        l.Ck = m.bind(null, e, 4, 0);
                                        l.Rj = p.bind(null, f, 0, 4);
                                        l.Qj = p.bind(null, g, 4, 0)
                                    }();
                                    return l
                                }

                                function d(l, m, p) {
                                    m[p] = 255 & l;
                                    m[p + 1] = l >>> 8 & 255;
                                    m[p + 2] = l >>> 16 & 255;
                                    m[p + 3] = l >>> 24
                                }

                                function e(l, m, p) {
                                    m[p] = l >>> 24;
                                    m[p + 1] = l >>> 16 & 255;
                                    m[p + 2] = l >>> 8 & 255;
                                    m[p + 3] = 255 & l
                                }

                                function f(l, m) {
                                    return (l[m] | l[m + 1] << 8 | l[m + 2] << 16 | l[m + 3] << 24) >>> 0
                                }

                                function g(l, m) {
                                    return (l[m] << 24 | l[m +
                                        1] << 16 | l[m + 2] << 8 | l[m + 3]) >>> 0
                                }
                                c.exports = b(b)
                            }, function(c) {
                                c.exports = function() {
                                    return null
                                }
                            }, function(c, b) {
                                b.length = function(d) {
                                    for (var e = 0, f, g = 0; g < d.length; ++g) f = d.charCodeAt(g), 128 > f ? e += 1 : 2048 > f ? e += 2 : 55296 == (64512 & f) && 56320 == (64512 & d.charCodeAt(g + 1)) ? (++g, e += 4) : e += 3;
                                    return e
                                };
                                b.read = function(d, e, f) {
                                    if (1 > f - e) return "";
                                    for (var g, l = null, m = [], p = 0; e < f;) g = d[e++], 128 > g ? m[p++] = g : 191 < g && 224 > g ? m[p++] = (31 & g) << 6 | 63 & d[e++] : 239 < g && 365 > g ? (g = ((7 & g) << 18 | (63 & d[e++]) << 12 | (63 & d[e++]) << 6 | 63 & d[e++]) - 65536, m[p++] = 55296 +
                                        (g >> 10), m[p++] = 56320 + (1023 & g)) : m[p++] = (15 & g) << 12 | (63 & d[e++]) << 6 | 63 & d[e++], 8191 < p && ((l || (l = [])).push(String.fromCharCode.apply(String, m)), p = 0);
                                    return l ? (p && l.push(String.fromCharCode.apply(String, m.slice(0, p))), l.join("")) : String.fromCharCode.apply(String, m.slice(0, p))
                                };
                                b.write = function(d, e, f) {
                                    for (var g, l, m = f, p = 0; p < d.length; ++p) g = d.charCodeAt(p), 128 > g ? e[f++] = g : (2048 > g ? e[f++] = g >> 6 | 192 : (55296 == (64512 & g) && 56320 == (64512 & (l = d.charCodeAt(p + 1))) ? (g = 65536 + ((1023 & g) << 10) + (1023 & l), ++p, e[f++] = g >> 18 | 240, e[f++] =
                                        g >> 12 & 63 | 128) : e[f++] = g >> 12 | 224, e[f++] = g >> 6 & 63 | 128), e[f++] = 63 & g | 128);
                                    return f - m
                                }
                            }, function(c) {
                                c.exports = function(b, d, e) {
                                    var f = e || 8192,
                                        g = f >>> 1,
                                        l = null,
                                        m = f;
                                    return function(p) {
                                        if (1 > p || p > g) return b(p);
                                        m + p > f && (l = b(f), m = 0);
                                        p = d.call(l, m, m += p);
                                        7 & m && (m = 1 + (7 | m));
                                        return p
                                    }
                                }
                            }, function(c, b, d) {
                                function e(p, r) {
                                    this.aa = p >>> 0;
                                    this.ea = r >>> 0
                                }
                                c.exports = e;
                                var f = d(0),
                                    g = e.Nl = new e(0, 0);
                                g.nh = function() {
                                    return 0
                                };
                                g.Dh = g.Ch = function() {
                                    return this
                                };
                                g.length = function() {
                                    return 1
                                };
                                var l = e.Hk = "\x00\x00\x00\x00\x00\x00\x00\x00";
                                e.ne =
                                    function(p) {
                                        if (0 === p) return g;
                                        var r = 0 > p;
                                        r && (p = -p);
                                        var t = p >>> 0;
                                        p = (p - t) / 4294967296 >>> 0;
                                        r && (p = ~p >>> 0, t = ~t >>> 0, 4294967295 < ++t && (t = 0, 4294967295 < ++p && (p = 0)));
                                        return new e(t, p)
                                    };
                                e.from = function(p) {
                                    if ("number" == typeof p) return e.ne(p);
                                    if (f.Ee(p)) {
                                        if (!f.La) return e.ne(parseInt(p, 10));
                                        p = f.La.el(p)
                                    }
                                    return p.low || p.high ? new e(p.low >>> 0, p.high >>> 0) : g
                                };
                                e.prototype.nh = function(p) {
                                    if (!p && this.ea >>> 31) {
                                        p = 1 + ~this.aa >>> 0;
                                        var r = ~this.ea >>> 0;
                                        p || (r = r + 1 >>> 0);
                                        return -(p + 4294967296 * r)
                                    }
                                    return this.aa + 4294967296 * this.ea
                                };
                                var m =
                                    String.prototype.charCodeAt;
                                e.Xi = function(p) {
                                    return p === l ? g : new e((m.call(p, 0) | m.call(p, 1) << 8 | m.call(p, 2) << 16 | m.call(p, 3) << 24) >>> 0, (m.call(p, 4) | m.call(p, 5) << 8 | m.call(p, 6) << 16 | m.call(p, 7) << 24) >>> 0)
                                };
                                e.prototype.gk = function() {
                                    return String.fromCharCode(255 & this.aa, this.aa >>> 8 & 255, this.aa >>> 16 & 255, this.aa >>> 24, 255 & this.ea, this.ea >>> 8 & 255, this.ea >>> 16 & 255, this.ea >>> 24)
                                };
                                e.prototype.Dh = function() {
                                    var p = this.ea >> 31;
                                    this.ea = ((this.ea << 1 | this.aa >>> 31) ^ p) >>> 0;
                                    this.aa = (this.aa << 1 ^ p) >>> 0;
                                    return this
                                };
                                e.prototype.Ch =
                                    function() {
                                        var p = -(1 & this.aa);
                                        this.aa = ((this.aa >>> 1 | this.ea << 31) ^ p) >>> 0;
                                        this.ea = (this.ea >>> 1 ^ p) >>> 0;
                                        return this
                                    };
                                e.prototype.length = function() {
                                    var p = this.aa,
                                        r = (this.aa >>> 28 | this.ea << 4) >>> 0,
                                        t = this.ea >>> 24;
                                    return 0 === t ? 0 === r ? 16384 > p ? 128 > p ? 1 : 2 : 2097152 > p ? 3 : 4 : 16384 > r ? 128 > r ? 5 : 6 : 2097152 > r ? 7 : 8 : 128 > t ? 9 : 10
                                }
                            }, function(c, b, d) {
                                function e() {
                                    g.call(this)
                                }

                                function f(m, p, r) {
                                    40 > m.length ? l.Gf.write(m, p, r) : p.vh ? p.vh(m, r) : p.write(m, r)
                                }
                                c.exports = e;
                                var g = d(2);
                                (e.prototype = Object.create(g.prototype)).constructor = e;
                                var l =
                                    d(0);
                                e.Ca = function() {
                                    e.Xb = l.Ac;
                                    e.Bk = l.sa && l.sa.prototype instanceof Uint8Array && "set" === l.sa.prototype.set.name ? function(m, p, r) {
                                        p.set(m, r)
                                    } : function(m, p, r) {
                                        if (m.Di) m.Di(p, r, 0, m.length);
                                        else
                                            for (var t = 0; t < m.length;) p[r++] = m[t++]
                                    }
                                };
                                e.prototype.Yb = function(m) {
                                    l.Ee(m) && (m = l.Bc(m, "base64"));
                                    var p = m.length >>> 0;
                                    this.l(p);
                                    p && this.wa(e.Bk, p, m);
                                    return this
                                };
                                e.prototype.M = function(m) {
                                    var p = l.sa.byteLength(m);
                                    this.l(p);
                                    p && this.wa(f, p, m);
                                    return this
                                };
                                e.Ca()
                            }, function(c, b, d) {
                                function e(l) {
                                    f.call(this, l)
                                }
                                c.exports =
                                    e;
                                var f = d(3);
                                (e.prototype = Object.create(f.prototype)).constructor = e;
                                var g = d(0);
                                e.Ca = function() {
                                    g.sa && (e.prototype.Uf = g.sa.prototype.slice)
                                };
                                e.prototype.M = function() {
                                    var l = this.l();
                                    return this.$.wk ? this.$.wk(this.G, this.G = Math.min(this.G + l, this.ba)) : this.$.toString("utf-8", this.G, this.G = Math.min(this.G + l, this.ba))
                                };
                                e.Ca()
                            }, function(c, b, d) {
                                b.Nk = d(17)
                            }, function(c, b, d) {
                                function e(g) {
                                    if ("function" != typeof g) throw TypeError("rpcImpl must be a function");
                                    f.Mf.call(this);
                                    this.gf = g
                                }
                                c.exports = e;
                                var f = d(0);
                                (e.prototype = Object.create(f.Mf.prototype)).constructor = e;
                                e.prototype.end = function(g) {
                                    this.gf && (g || this.gf(null, null, null), this.gf = null, this.Li("end").Aa());
                                    return this
                                }
                            }, function(c) {
                                c.exports = {}
                            }])
                    } catch (c) {}
                })),
                cn = {
                    Sb: "topics",
                    bf: "publicationDate",
                    Ue: "pageUrlCanonical",
                    Ef: "updateDate",
                    Bb: "authors",
                    Sd: "articleInfo",
                    Ob: "rubric",
                    cf: "publishersHeader",
                    Ga: "involvedTime",
                    Te: "pageTitle",
                    Ke: "maxScrolled",
                    Fb: "chars",
                    Ab: "articleMeta"
                },
                dn = function() {
                    function a(c) {
                        this.b = c;
                        this.jc = x(Da, kc(function(b, d) {
                            b[d[1]] =
                                d[0];
                            return b
                        }, {}))(cn);
                        if ("undefined" === typeof ef) return this;
                        try {
                            this.Wa = w(ef, "ru").T.N.R.O
                        } catch (b) {}
                    }
                    a.prototype.kh = function(c) {
                        var b, d = this.Xe(c.data);
                        return {
                            da: ca(this.b)(rd),
                            data: (b = {}, b[this.jc[c.type]] = d, b)
                        }
                    };
                    a.prototype.Xe = function(c) {
                        var b = this;
                        return va(c) ? D(B(this.Xe, this), c) : ec(c) ? x(Da, kc(function(d, e) {
                            var f = e[0];
                            d[b.jc[f] || f] = b.Xe(e[1]);
                            return d
                        }, {}))(c) : ta(c) ? "" : c
                    };
                    a.prototype.hb = function(c) {
                        return this.Wa.sa.encode(this.kh(c)).finish()
                    };
                    a.prototype.tb = function(c) {
                        return (new this.b.Blob([c])).size
                    };
                    a.prototype.Dd = function(c) {
                        return [c]
                    };
                    a.prototype.yb = function(c) {
                        c = this.Wa.Lf.encode({
                            buffer: D(B(this.kh, this), c)
                        });
                        return xe(c.finish())
                    };
                    a.prototype.isEnabled = function() {
                        return this.Wa && cg(this.b)
                    };
                    return a
                }(),
                Yh = function() {
                    function a(c, b, d) {
                        this.Xf = 0;
                        this.We = 1;
                        this.Nd = 5E3;
                        this.b = c;
                        this.Ja = b;
                        this.nf = d
                    }
                    a.prototype.Cd = function() {
                        this.Xf = Z(this.b, x(B(this.flush, this), B(this.Cd, this)), this.Nd, "b.f")
                    };
                    a.prototype.send = function(c) {
                        this.nf(c, this.We);
                        this.We += 1
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush =
                        function() {};
                    return a
                }(),
                ff, gf = (ff = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.yf = 0;
                        d.Wb = 0;
                        d.xf = 0;
                        d.buffer = [];
                        d.Nd = 2E3;
                        d.na = rc(b);
                        d.Cd();
                        d.xf = f;
                        return d
                    }
                    za(c, a);
                    c.prototype.ig = function(b) {
                        return Y(Boolean, this.na.ma("ag", b))
                    };
                    c.prototype.hg = function(b, d) {
                        var e = this;
                        b(og(C(this.b, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.ck = function(b, d) {
                        var e = this;
                        ua(this.b, this.Xf);
                        var f = Math.ceil(this.Ja.tb(d) / 63E4),
                            g = this.Ja.Dd(d, f);
                        E(function(l, m) {
                            var p, r = e.Ja.yb([F({},
                                b, (p = {}, p.data = l, p.partNum = m + 1, p.end = m + 1 === f, p))]);
                            e.hg(r, [b])
                        }, g);
                        this.Cd()
                    };
                    c.prototype.send = function(b, d) {
                        this.na.ma("se", d);
                        a.prototype.send.call(this, b)
                    };
                    c.pe = function(b, d, e, f, g) {
                        c.Td["" + b + d] || (this.Td[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.Td[d]
                    };
                    c.prototype.tj = function() {
                        return this.xf && this.yf >= this.xf
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.tj()) {
                            this.na.ma("p", b);
                            var e = this.Ja.hb(b),
                                f = this.Ja.tb(e);
                            7E5 < f ? this.ck(b, e) : (e = this.ig(this.buffer.concat([b])), e = S(function(g,
                                l) {
                                return g + d.Ja.tb(d.Ja.hb(l))
                            }, 0, e), this.Wb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Wb += f)
                        }
                    };
                    c.prototype.D = function(b, d) {
                        this.na.D(b, d)
                    };
                    c.prototype.Aa = function(b, d) {
                        this.na.Aa(b, d)
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer.concat(this.ig(this.buffer));
                        if (b.length) {
                            this.buffer = [];
                            this.yf += this.Wb;
                            this.Wb = 0;
                            var d = this.Ja.yb(b);
                            this.hg(d, b)
                        }
                    };
                    return c
                }(Yh), ff.Td = {}, ff),
                Pc, hf = (Pc = {}, Pc[1] = 500, Pc[2] = 500, Pc[3] = 0, Pc),
                jf = function() {
                    function a(c) {
                        var b, d = this;
                        this.id = "a";
                        this.ze = !1;
                        this.bc = {};
                        this.Pb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Jg: ["article"]
                        };
                        this.Cf = (b = {}, b.Answer = 3, b.Review = 2, b);
                        this.Ci = A(function(e, f) {
                            Ga(d.b, "Warning: content has only " + f.chars + " chars. Required " + hf[f.type], f)
                        });
                        this.b = c;
                        this.root = zb(c)
                    }
                    a.prototype.sb = function(c) {
                        return c.element
                    };
                    a.prototype.kg = function(c, b) {
                        var d = this,
                            e;
                        C(this.b, "P.s." + b, function() {
                            e = d.bc[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.Oj = function(c) {
                        var b = F({}, c);
                        this.ze && !b.id && K(c.type, [3, 2]) &&
                            (c = D(W("name"), b.authors || []).join(", "), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.jj(b.ac));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.gj());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Ra = function(c) {
                        var b = this,
                            d = {},
                            e = this.sb(c);
                        if (!e) return null;
                        d.type = c.type;
                        E(function(g) {
                            d[g] = b.kg(c, g)
                        }, Ba(this.bc));
                        var f = ca(this.b);
                        d.stamp = f(rd);
                        d.element = c.element;
                        d.ac = e;
                        d = this.Oj(d);
                        d.id = d.id ? zc(d.id) :
                            1;
                        d.update = B(this.kg, this, c);
                        return d
                    };
                    a.prototype.jj = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Ka(Ic(this.b, c, "h" + b));
                            if (d) return d
                        }
                    };
                    a.prototype.gj = function() {
                        var c = Ic(this.b, this.root, '[rel="canonical"]');
                        if (c) return c.href
                    };
                    a.prototype.og = function() {
                        return 1
                    };
                    a.prototype.Tc = function() {
                        return []
                    };
                    a.prototype.Si = function() {
                        var c = this,
                            b = this.Tc(),
                            d = 1;
                        return S(function(e, f) {
                            var g = c.Ra({
                                element: f,
                                type: c.og(f)
                            }) || [];
                            va(g) || (g = [g]);
                            g = S(function(l, m) {
                                var p = l.values,
                                    r = l.sg;
                                m && m.chars > hf[m.type] && !K(m.id,
                                    r) ? (p.push(m), r.push(m.id)) : m && m.chars <= hf[m.type] && c.Ci(m.id, m);
                                return {
                                    values: p,
                                    sg: r
                                }
                            }, {
                                values: [],
                                sg: D(W("id"), e)
                            }, g).values;
                            return e.concat(D(function(l) {
                                var m;
                                l = F((m = {
                                    index: d,
                                    mf: !1
                                }, m.involvedTime = 0, m), l);
                                d += 1;
                                return l
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                Zh = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.ze = !0;
                        d.Wf = 'script[type="application/ld+json"],script[type="application/json+ld"],script[type="ld+json"],script[type="json+ld"]';
                        d.bc = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && e && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            return "string" === typeof e.data.text ? e.data.text.length : this.sb(e).innerText.length
                        }, b.authors = function(e) {
                            var f = [];
                            f = f.concat(this.Sc(e.data, "author"));
                            f = f.concat(this.Sc(e.data.mainEntity, "author"));
                            return f.concat(this.Sc(e.data.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data.headline || "";
                            e.data.Sk && (f += " " + e.data.alternativeHeadline);
                            "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed &&
                                (f = e.data.itemReviewed));
                            3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                            return f
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.Sc(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.sb(e);
                            e = Y(Boolean, D(function(l) {
                                if (l = xb(f.b, l.innerText)) {
                                    var m = f.lg(l);
                                    if (m) return S(function(p, r) {
                                        return p ? p : "BreadcrumbList" ===
                                            r["@type"] ? r : p
                                    }, null, m);
                                    if ("BreadcrumbList" === l["@type"]) return l
                                }
                                return null
                            }, [e.element].concat(na(Tb(this.b, document.body === g ? document.documentElement : g, this.Wf)))));
                            return e.length && (e = e[0].itemListElement, va(e)) ? Y(Boolean, D(function(l) {
                                return l.item && !f.b.isNaN(l.position) ? {
                                    name: l.item.name || l.name,
                                    position: l.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    za(c, a);
                    c.prototype.Sc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = va(b[d]) ? b[d] : [b[d]];
                        b = Y(Boolean, D(function(f) {
                            return f ? "string" ===
                                typeof f ? f : S(function(g, l) {
                                    return g || f[l]
                                }, null, e) : null
                        }, b));
                        return D(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.sb = function(b) {
                        var d = b.element,
                            e = b.data["@id"],
                            f = b.data.url;
                        b = null;
                        f && "string" === typeof f && (b = this.cg(f));
                        !b && e && "string" === typeof e && (b = this.cg(e));
                        b || (b = e = d.parentNode, !Zb(this.b, d, "head") && e && 0 !== e.innerText.length) || (b = this.b.document.body);
                        return b
                    };
                    c.prototype.cg = function(b) {
                        try {
                            var d = yb(this.b, b).hash;
                            if (d) {
                                var e = Ic(this.b, this.b.document.body, d);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.Ve = function(b) {
                        return this.Cf[b["@type"]] || 1
                    };
                    c.prototype.Ra = function(b) {
                        var d = this,
                            e = b.element;
                        if (!b.data && (b.data = xb(this.b, e.innerText), !b.data || !/schema\.org/.test(b.data["@context"]) && !va(b.data))) return null;
                        var f = this.lg(b.data);
                        if (f) return D(function(l) {
                            if (!K(l["@type"], d.Pb["schema.org"])) return null;
                            l = {
                                element: e,
                                data: l,
                                type: d.Ve(l)
                            };
                            return a.prototype.Ra.call(d, l)
                        }, f);
                        if ("QAPage" === b.data["@type"]) {
                            var g = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!g) return null
                        }
                        "Question" ===
                        b.data["@type"] && (g = b.data);
                        return g ? (b = vb(z(g, w), ["acceptedAnswer", "suggestedAnswer"]), D(function(l) {
                            var m;
                            if (!l || !K(l["@type"], d.Pb["schema.org"])) return null;
                            l = {
                                element: e,
                                type: d.Ve(l),
                                data: F((m = {}, m.parentItem = g, m), l)
                            };
                            return a.prototype.Ra.call(d, l)
                        }, b)) : K(b.data["@type"], this.Pb["schema.org"]) ? a.prototype.Ra.call(this, F(b, {
                            type: this.Ve(b.data)
                        })) : null
                    };
                    c.prototype.Tc = function() {
                        return Tb(this.b, this.root, this.Wf)
                    };
                    c.prototype.lg = function(b) {
                        return va(b) && b || b && va(b["@graph"]) && b["@graph"]
                    };
                    return c
                }(jf),
                kf = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.ze = !0;
                        d.nk = da("exec", new RegExp("schema.org\\/(" + Ba(d.Cf).join("|") + ")$"));
                        d.bc = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = Oa(this.b, e, "identifier");
                            return f ? Ka(f) : (f = Oa(this.b, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], l = 0; l < g.length; l += 1) {
                                var m = Oa(this.b, e,
                                    g[l]);
                                if (m) {
                                    f = Ka(m).length;
                                    break
                                }
                            }
                            0 === f && e.innerText && (f += e.innerText.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = Jc(this.b, e.element, "about");
                            return D(function(l) {
                                var m = {
                                    name: Ka(l)
                                };
                                if (g = Oa(f.b, l, "name")) m.name = Ka(g);
                                return m
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = Ic(this.b, e.element, '[itemtype$="schema.org/BreadcrumbList"]')) || (e = Ic(this.b, this.root, '[itemtype$="schema.org/BreadcrumbList"]'));
                            return e ? D(function(g) {
                                return {
                                    name: Ka(Oa(f.b, g, "name")),
                                    position: Ka(Oa(f.b, g, "position"))
                                }
                            }, Jc(this.b,
                                e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = Oa(this.b, e.element, "dateModified")) ? oh(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = Oa(this.b, e.element, "datePublished")) ? oh(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = Jc(this.b, e.element, "url");
                            return e.length ? e[0].href ? e[0].href : Ka(e) : null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                l = Oa(this.b, g, "headline");
                            l && (f += Ka(l));
                            (l = Oa(this.b, g, "alternativeHeadline")) && (f += " " + Ka(l));
                            "" === f && ((l = Oa(this.b, g, "name")) || (l = Oa(this.b, g, "itemReviewed")),
                                l && (f += Ka(l)));
                            3 === e.type && (e = Zb(this.b, g, '[itemtype$="schema.org/Question"]')) && (e = Oa(this.b, e, "text")) && (f += Ka(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = Jc(this.b, e.element, "author");
                            return D(function(g) {
                                var l, m = (l = {}, l.name = "", l);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (l = Oa(f.b, g, "name")) && (m.name = Ka(l));
                                m.name || (m.name = g.getAttribute("content") || g.innerText || g.getAttribute("href"));
                                return m
                            }, e)
                        }, b);
                        return d
                    }
                    za(c, a);
                    c.prototype.og = function(b) {
                        b = b.getAttribute("itemtype") ||
                            "";
                        return (b = this.nk(b)) ? this.Cf[b[1]] : 1
                    };
                    c.prototype.Ra = function(b) {
                        return b.element && b.element.innerText && b.element.innerText.length ? a.prototype.Ra.call(this, b) : null
                    };
                    c.prototype.Tc = function() {
                        var b = D(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.Pb["schema.org"]).join(",");
                        return Tb(this.b, this.root, b)
                    };
                    return c
                }(jf),
                $h = function(a) {
                    function c(b) {
                        var d;
                        b = a.call(this, b) || this;
                        b.id = "o";
                        b.bc = (d = {}, d.chars = function(e) {
                                e = this.sb(e);
                                return e.innerText ? e.innerText.length : 0
                            }, d.authors = function(e) {
                                return this.oe(e.data.author)
                            },
                            d.pageTitle = function(e) {
                                return this.Zc(e.data.title) || ""
                            }, d.updateDate = function(e) {
                                return this.Zc(e.data.modified_time)
                            }, d.publicationDate = function(e) {
                                return this.Zc(e.data.published_time)
                            }, d.pageUrlCanonical = function(e) {
                                return this.Zc(e.data.url)
                            }, d.rubric = function(e) {
                                return this.oe(e.data.section)
                            }, d.topics = function(e) {
                                return this.oe(e.data.tag)
                            }, d);
                        b.Ni = new RegExp("^(og:)?((" + b.Pb.Jg.join("|") + "):)?");
                        return b
                    }
                    za(c, a);
                    c.prototype.oe = function(b) {
                        var d;
                        return b ? va(b) ? D(function(e) {
                            var f;
                            return f = {}, f.name = e, f
                        }, b) : [(d = {}, d.name = b, d)] : []
                    };
                    c.prototype.Zc = function(b) {
                        return va(b) ? b.length ? b[0] : null : b
                    };
                    c.prototype.Tc = function() {
                        var b = Tb(this.b, this.b.document.body, 'meta[property="og:type"]');
                        return [this.b.document.head].concat(b)
                    };
                    c.prototype.aj = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.sb(b);
                        e = Tb(this.b, e === this.b.document.head ? e : g, "meta[property]");
                        if (e.length) E(function(l) {
                            try {
                                if (l.parentNode === g || l.parentNode === d.b.document.head) {
                                    var m = l.getAttribute("property").replace(d.Ni, ""),
                                        p = Ka(l);
                                    f[m] ? va(f[m]) ? f[m].push(p) : f[m] = [f[m], p] : f[m] = p
                                }
                            } catch (r) {
                                td(d.b, "og.ed", r)
                            }
                        }, e);
                        else return null;
                        return K(f.type, this.Pb.Jg) ? F(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.sb = function(b) {
                        b = b.element;
                        var d = this.b.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Ra = function(b) {
                        return (b = this.aj(b)) ? a.prototype.Ra.call(this, b) : null
                    };
                    return c
                }(jf),
                ai = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                en = function() {
                    function a(c, b, d) {
                        this.fd = !1;
                        this.fa = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.Ga = this.Dg = 0;
                        this.Ne = this.Lg = "";
                        this.ya = [];
                        this.kb = 0;
                        this.xc = {
                            Sa: 0,
                            Ak: 0
                        };
                        this.buffer = d;
                        this.zc = B(this.zc, this);
                        this.Wc = B(this.Wc, this);
                        this.od = B(this.od, this);
                        this.b = c;
                        this.zd = b;
                        this.Fe = "pai" + b.id;
                        this.dc();
                        this.$f = xa(this.b);
                        this.time = ca(this.b);
                        this.th();
                        this.$c = X(this.b)
                    }
                    a.prototype.start = function() {
                        var c = this;
                        if (!this.fd) {
                            this.buffer.D("ag", this.Wc);
                            this.buffer.D("se", this.od);
                            this.dk();
                            var b = this.$c.o(this.Fe, []),
                                d = !b.length;
                            b.push(B(this.vj, this));
                            this.$c.ib(this.Fe,
                                b);
                            d && this.Yg();
                            this.$c.ib("pai", function() {
                                return c.ya.length ? S(function(e, f) {
                                    return (e.visibility || 0) <= (f.visibility || 0) ? f : e
                                }, c.ya[0], c.ya.slice(1)).id : 0
                            });
                            this.zc({
                                type: "page",
                                target: this.b
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.buffer.Aa("se", this.od);
                        this.buffer.Aa("ag", this.Wc);
                        this.pk();
                        this.fd = !0
                    };
                    a.prototype.Bg = function(c) {
                        return Zb(this.b, c, "html") !== this.b.document.documentElement
                    };
                    a.prototype.Yg = function() {
                        var c = this;
                        C(this.b, "p.ic" + this.zd.id, function() {
                            if (!c.fd) {
                                var b = c.$c.o(c.Fe),
                                    d = c.zd.Si();
                                E(function(e) {
                                    var f = D(function(g) {
                                        return F({}, g)
                                    }, d);
                                    U(e) && e(f)
                                }, b);
                                c.kb = Z(c.b, B(c.Yg, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.vj = function(c) {
                        this.fd || (this.qk(c), this.rk(), this.Yj())
                    };
                    a.prototype.zc = function(c) {
                        var b = this;
                        C(this.b, "p.ec." + this.zd.id, function() {
                            try {
                                var d = c.type;
                                var e = c.target
                            } catch (m) {
                                return
                            }
                            var f = "page" === d;
                            if ("scroll" === d || f) {
                                var g = [b.b, b.b.document, b.b.document.documentElement, Ub(b.b)];
                                K(e, g) && b.dc()
                            }("resize" === d || f) && b.th();
                            d = b.time(fa);
                            var l = Math.min(d - b.Dg, 5E3);
                            b.Ga += Math.round(l);
                            b.Dg =
                                d;
                            b.fa && b.scroll && b.xc && (b.ya = D(function(m) {
                                var p = F({}, m),
                                    r = b.fa[p.id];
                                m = sc(m.ac);
                                if (!r || b.Bg(p.element) || !m) return p;
                                m = b.b.Math;
                                var t = m.max((b.scroll.y + b.xc.Sa - r.y) / r.height, 0),
                                    v = m.min(b.scroll.y + b.xc.Sa, r.y + r.height);
                                r = m.max(b.scroll.y, r.y);
                                p.visibility = m.max((v - r) / b.xc.Sa, 0);
                                p.involvedTime += m.round(l * p.visibility);
                                p.maxScrolled = m.round(1E4 * t) / 1E4;
                                return p
                            }, b.ya))
                        })()
                    };
                    a.prototype.qk = function(c) {
                        var b = D(function(d) {
                            return d.id
                        }, this.ya);
                        this.ya = this.ya.concat(Y(function(d) {
                            return !K(d.id, b)
                        }, c))
                    };
                    a.prototype.th = function() {
                        var c = Ee(this.b) || Fc(this.b);
                        this.xc = {
                            Ak: c[0],
                            Sa: c[1]
                        }
                    };
                    a.prototype.rk = function() {
                        var c = this;
                        C(this.b, "p.um." + this.zd.id, function() {
                            var b = [];
                            c.dc();
                            c.fa = S(function(d, e) {
                                var f;
                                if (c.Bg(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") : 0, f);
                                    e.ac && (f = sc(e.ac)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width =
                                        Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.ya);
                            E(function(d) {
                                d = Ad(c.b)(d, c.ya);
                                c.ya.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.od = function() {
                        this.Lg = this.Ne
                    };
                    a.prototype.Wc = function() {
                        var c, b, d = D(z(this.fa, w), Ba(this.fa));
                        return d.length && (this.Ne = cb(this.b, d), this.Lg !== this.Ne) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Ga, b), c) : null
                    };
                    a.prototype.Yj = function() {
                        var c = this;
                        if (this.ya.length) {
                            var b = Y(function(d) {
                                return !d.mf
                            }, this.ya);
                            E(function(d) {
                                var e, f = F({}, d);
                                delete f.ac;
                                delete f.mf;
                                delete f.index;
                                delete f.involvedTime;
                                delete f.visibility;
                                delete f.Gl;
                                delete f.maxScrolled;
                                delete f.update;
                                delete f.element;
                                delete f.type;
                                c.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e));
                                d.mf = !0
                            }, b);
                            b.length && Ga(this.b, "Publisher content info found: ", b)
                        }
                    };
                    a.prototype.dk = function() {
                        this.$f.D(this.b, ai.join(","), this.zc)
                    };
                    a.prototype.pk = function() {
                        this.$f.wc(this.b, ai.join(","), this.zc)
                    };
                    a.prototype.dc = function() {
                        this.scroll = {
                            x: this.b.pageXOffset || this.b.document.documentElement.scrollLeft,
                            y: this.b.pageYOffset || this.b.document.documentElement.scrollTop
                        }
                    };
                    return a
                }(),
                Qc = {};
            Zh && (Qc.json_ld = Zh);
            kf && (Qc.schema = kf, Qc.microdata = kf);
            $h && (Qc.opengraph = $h);
            var fn = I("p.p", function(a, c) {
                    function b(p, r) {
                        e(F({}, m, {
                            ja: p
                        }), c, r)["catch"](C(a, "s.ww.p"))
                    }
                    if (!la("querySelectorAll", a.document.querySelectorAll)) return Q.resolve();
                    var d = [new Fd(a)];
                    d.unshift(new dn(a));
                    var e = oa(a, "p", c),
                        f = La(function(p) {
                            return p.isEnabled()
                        }, d);
                    d = pa();
                    var g =
                        Nc(a, c.id),
                        l = g.o("pai");
                    l && (g.Gb("pai"), d.C("pai", l));
                    var m = {
                        J: {},
                        Y: d,
                        zg: !(f instanceof Fd)
                    };
                    return Ma(Sa(P(c))).then(function(p) {
                        if (p = w(p, "settings.publisher.schema")) {
                            p = dh(c) ? "microdata" : p;
                            var r = Qc[p];
                            if (r && f) {
                                var t = gf.pe(P(c), "e", b, f, a);
                                r = new r(a);
                                (new en(a, r, t)).start();
                                Ga(a, 'Publishers analytics schema "' + p + '"')
                            }
                        }
                    }, J)["catch"](J)
                }),
                bg = G(function(a, c) {
                    return c[a] || {}
                }),
                Wj = G(function(a, c, b) {
                    var d = bg(a, b);
                    b[a] = F(d, c)
                }),
                gn = G(function(a, c) {
                    delete c[a]
                }),
                hn = I("c.c.cc", function(a) {
                    var c = X(a),
                        b = x(z(a,
                            gd), ea, function(d) {
                            var e;
                            return F({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = d.clickmap && !!d.clickmap, e))
                        });
                    return C(a, "g.c.cc", x(B(c.o, c, "counters", {}), Ba, z(b, D)))
                }),
                jn = I("gt.c.rs", function(a, c) {
                    var b, d = P(c),
                        e = wc(a, d),
                        f = c.id,
                        g = c.ra,
                        l = c.Bi,
                        m = c.Tb,
                        p = c.Af;
                    d = x(z(d, gn), ge(a));
                    e((b = {}, b.id = f, b.type = +g, b.clickmap = l, b.webvisor = !!m, b.trackHash = !!p, b));
                    return d
                }),
                qh, kn = I("th.e", function(a, c) {
                    function b() {
                        f || (l = vc(a, "onhashchange") ? xa(a).D(a, "hashchange", g) : Cl(a, g))
                    }
                    var d = oa(a, "t", c),
                        e = wc(a, P(c)),
                        f = !1,
                        g = C(a,
                            "h.h.ch", B(Dl, null, a, c, d)),
                        l = J;
                    c.Af && (b(), f = !0);
                    return {
                        ik: C(a, "tr.hs.h", function(m) {
                            var p;
                            m ? b() : l();
                            f = !!m;
                            e((p = {}, p.trackHash = f, p))
                        }),
                        unsubscribe: l
                    }
                }),
                ln = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                rh = 1,
                Me = {},
                yd = {},
                nn = I("nb.p", function(a, c) {
                    function b(n) {
                        m() || (n = "number" === typeof n ? n : 15E3, n = Fl(a, d(!1), n),
                            q = n.id, h = n.Yf, p())
                    }

                    function d(n) {
                        return function(u) {
                            var M, y, H;
                            void 0 === u && (u = (M = {}, M.ctx = {}, M.callback = J, M));
                            if (n || !v && !l.Ae) {
                                v = !0;
                                p();
                                q && El(a, q);
                                var T = r(fa);
                                M = (parseInt(l.o("lastHit"), 10) || 0) < T - 18E5;
                                var mc = .1 > Math.random();
                                l.C("lastHit", T);
                                T = pa((y = {}, y.nb = "1", y.cl = k, y.ar = "1", y));
                                y = Oc(c);
                                y = {
                                    J: (H = {}, H["page-url"] = y.url || O(a).href, H),
                                    Y: T
                                };
                                H = Ed(a).warn;
                                !u.callback && u.ctx && H('"callback" argument missing');
                                (n || M || mc || !Mk(a.location.href, a.document.referrer)) && f(y, c).then(function() {
                                    if (!n) {
                                        var nc = .002,
                                            oc = c.id === ha.bi ? 1 : .002,
                                            pc, Gd, lf, Hd, mf, nf;
                                        void 0 === nc && (nc = 1);
                                        void 0 === oc && (oc = 1);
                                        var Rc = a.performance;
                                        if (Rc && U(Rc.getEntriesByType) && (nc = Math.random() > nc, oc = Math.random() > oc, !nc || !oc)) {
                                            Rc = a.performance.getEntriesByType("resource");
                                            for (var Id = {}, of = {}, Jd = {}, pf = 0; pf < Rc.length; pf += 1) {
                                                var hb = Rc[pf],
                                                    Kd = hb.name.replace(/^https?:\/\//, "").split("?")[0],
                                                    mn = zc(Kd),
                                                    bi = (pc = {}, pc.dns = Math.round(hb.domainLookupEnd - hb.domainLookupStart), pc.tcp = Math.round(hb.connectEnd - hb.connectStart), pc.duration = Math.round(hb.duration),
                                                        pc.response = Math.round(hb.responseEnd - hb.requestStart), pc);
                                                "script" !== hb.initiatorType || nc || ( of [Kd] = F(bi, (Gd = {}, Gd.name = hb.name, Gd.decodedBodySize = hb.decodedBodySize, Gd)));
                                                !ln[mn] || Id[Kd] || oc || (Id[Kd] = F(bi, (lf = {}, lf.pages = a.location.href, lf)))
                                            }
                                            Ba(Id).length && (Jd.timings8 = Id);
                                            Ba( of ).length && (Jd.scripts = of );
                                            if (Ba(Jd).length) oa(a, "d", c)({
                                                Y: pa((Hd = {}, Hd.ar = "1", Hd.pv = "1", Hd)),
                                                ja: cb(a, Jd) || void 0,
                                                J: (mf = {}, mf["page-url"] = a.location && "" + a.location.href, mf)
                                            }, F(c, (nf = {}, nf.id = ha.hi, nf)))["catch"](C(a, "r.tim.ng2"))
                                        }
                                    }
                                }).then(V([a,
                                    B(u.callback || J, u.ctx)
                                ], Cb), C(a, "l.o.l"))
                            }
                        }
                    }
                    var e, f = oa(a, "n", c),
                        g = P(c),
                        l = Nc(a, c.id),
                        m = z(gd(a, g), x(ea, W("accurateTrackBounce"))),
                        p = z((e = {}, e.accurateTrackBounce = !0, e), wc(a, g)),
                        r = ca(a),
                        t = r(fa),
                        v = !1,
                        q = 0,
                        k = 0,
                        h;
                    Ma(Sa(P(c))).then(function() {
                        k = r(fa) - t
                    });
                    c.Cc && b(c.Cc);
                    return {
                        Ej: d(!0),
                        Cc: b,
                        de: h
                    }
                }),
                qf = ["yandex_metrika_callback" + Hb.callbackPostfix, "yandex_metrika_callbacks" + Hb.callbackPostfix],
                on = I("cb.i", function(a) {
                    var c = qf[0],
                        b = qf[1];
                    if (U(a[c])) a[c]();
                    "object" === typeof a[b] && E(function(d, e) {
                        a[b][e] = null;
                        Cb(a, d)
                    }, a[b]);
                    E(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, qf)
                }),
                ci = {
                    jl: Xa(/[/&=?#]/)
                },
                yf = I("go.in", function(a, c, b) {
                    void 0 === b && (b = "goal");
                    return function(d, e, f, g) {
                        var l, m;
                        if (!(!d || ci[b] && ci[b](d))) {
                            var p = e,
                                r = f || J;
                            U(e) && (r = e, p = void 0, g = f);
                            $b(c) || "goal" !== b || Ga(a, "Reach goal. Counter: " + c.id + ". Goal id: " + d + ". Params: ", p);
                            e = oa(a, "g", c);
                            f = b;
                            var t = O(a);
                            var v = t.hostname;
                            t = t.href;
                            var q = Oc(c).url;
                            q && (t = yb(a, q), v = t.hostname, t = t.href);
                            f = [f + "://" + v + "/" + d, t || ""];
                            d = f[0];
                            f = f[1];
                            e({
                                ha: p,
                                Y: pa((l = {}, l.ar =
                                    1, l)),
                                J: (m = {}, m["page-url"] = d, m["page-ref"] = f, m)
                            }, c).then(B(Cb, null, a, B(r, g)), C(a, "g.s"))
                        }
                    }
                }),
                Uj = /^ *(data|javascript):/i,
                ag = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
                pn = G(function(a, c) {
                    db(c) ? a.push(c) :
                        E(x(N, da("push", a)), c)
                }),
                qn = I("cl.p", function(a, c) {
                    function b(r, t, v, q) {
                        void 0 === q && (q = {});
                        v ? (Ga(a, (r ? "File" : "Ext link") + ". Counter " + c.id + ". Url: " + v + ". Params:", q), fd(a, c, {
                            url: v,
                            Ce: !0,
                            Be: r,
                            kd: t,
                            sender: d,
                            b: q.ctx,
                            Eb: q.callback,
                            title: q.title,
                            ha: q.params
                        })) : f.warn("Empty link")
                    }
                    var d = oa(a, "2", c),
                        e = [],
                        f = Ed(a),
                        g = P(c),
                        l = C(a, "s.s.tr", z(wc(a, g), Vj));
                    g = {
                        b: a,
                        Gi: c,
                        Ri: e,
                        sender: d,
                        globalStorage: X(a),
                        Fi: Nc(a, c.id),
                        mj: ic(a),
                        jk: z(gd(a, g), x(ea, W("trackLinks")))
                    };
                    g = C(a, "cl.p.c", z(g, Sj));
                    g = xa(a).D(a, "click", g);
                    c.Gd &&
                        l(c.Gd);
                    var m = C(a, "file.clc", V([!0, !1], b)),
                        p = C(a, "e.l.l.clc", V([!1, !0], b));
                    e = C(a, "add.f.e.clc", pn(e));
                    return {
                        file: m,
                        Pi: p,
                        ti: e,
                        Gd: l,
                        de: g
                    }
                }),
                rn = [{
                    host: "http://127.0.0.1",
                    port: 30102
                }, {
                    host: "http://127.0.0.1",
                    port: 29009
                }],
                sn = [{
                    host: "https://yandexmetrica.com",
                    port: 30103
                }, {
                    host: "https://yandexmetrica.com",
                    port: 29010
                }],
                Qj = A(function() {
                    return {
                        J: {
                            t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                        }
                    }
                }),
                tn = [39370095, 1282253, 29302335, 43653484, 41734944, 31048081, 16443139, 27737346, 41870499, 33911514, 30744873, 42080444, 5564395,
                    2580487
                ],
                di = {
                    id: 42822899,
                    ra: "0"
                },
                un = I("s", function(a, c) {
                    return Ma(Sa(P(c))).then(function(b) {
                        var d = ca(a),
                            e = X(a),
                            f = We(a),
                            g = x(Ue, sb(["iPhone", "iPad"]))(a),
                            l = "https:" === O(a).protocol,
                            m = Rj(a, b ? b.userData : {}, c);
                        b = ["0" === c.ra, !e.o("dSync", !1), 60 < d(eb) - parseInt("" + m.o("ds", 0), 10), f || g, um(a) || b && b.settings && "0" === b.settings.pcs && .1 >= Math.random() && K(c.id, tn)];
                        if (!K(!1, b)) {
                            e.C("dSync", !0);
                            if (f || g && !l) var p = rn;
                            else if (g) p = sn;
                            else return;
                            return Pj(a, c, p).then(function(r) {
                                var t = r.qc;
                                r = r.vk;
                                if (w(t, "settings")) return Q.reject();
                                m.C("ds", d(eb));
                                r = p[r].port;
                                var v, q;
                                t = pa((v = {}, v.di = t, v.dip = r, v.vf = null === Hb || void 0 === Hb ? void 0 : Hb.version, v));
                                v = (q = {}, q["page-url"] = O(a).href, q);
                                return oa(a, "S", di)({
                                    Y: t,
                                    J: v
                                }, di)
                            })["catch"](function(r) {
                                m.C("ds", d(eb) - 60 + 15);
                                td(a, "d.s", r)
                            })
                        }
                    })
                }),
                Kj = G(Bb)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                vn = I("clm.p", function(a, c) {
                    if (yc(a)) return J;
                    var b = oa(a, "m", c),
                        d = P(c),
                        e = ca(a),
                        f = e(fa),
                        g = z(gd(a, d), x(ea, W("clickmap"))),
                        l, m = null;
                    d = C(a, "clm.p.c", function(p) {
                        var r = g();
                        if (r) {
                            var t = "object" === typeof r ? r : {},
                                v = t.filter;
                            r = t.isTrackHash || !1;
                            var q = D(function(n) {
                                return ("" + n).toUpperCase()
                            }, t.ignoreTags || []);
                            R(l) && (l = t.quota || null);
                            var k = !!t.quota;
                            p = {
                                element: Lj(a, p),
                                position: $f(a, p),
                                button: Mj(p),
                                time: e(fa)
                            };
                            var h = O(a);
                            t = h.href;
                            if (Jj(a, p, m, q, v, h.hostname)) {
                                if (k) {
                                    if (!l) return;
                                    --l
                                }
                                q = ud(a, p.element);
                                v = q[0];
                                q = q[1];
                                k = De(a, p.element);
                                v = ["rn", kb(a), "x", Math.floor(65535 * (p.position.x - k.left) / (v || 1)), "y", Math.floor(65535 * (p.position.y - k.top) / (q || 1)), "t", Math.floor((p.time - f) / 100), "p", wf(a, p.element), "X", p.position.x,
                                    "Y", p.position.y
                                ].join(":");
                                r && (v += ":wh:1");
                                Ij(a, t, v, b, c);
                                m = p
                            }
                        }
                    });
                    return xa(a).D(w(a, "document"), "click", d)
                }),
                Vd = I("i.e", function(a) {
                    var c = X(a),
                        b = c.o("isEU");
                    if (R(b)) {
                        var d = parseInt(gc(a, "is_gdpr") || "", 10);
                        if (K(d, [0, 1])) c.C("isEU", d), b = !!d;
                        else if (a = Na(a).o("wasSynced"), a = w(a, "params.eu")) c.C("isEU", a), b = !!a
                    }
                    return b
                }),
                wn = function() {
                    function a(c, b) {
                        this.b = c;
                        this.Zi = b
                    }
                    a.prototype.yb = function(c) {
                        return xe(vb(B(this.hb, this), c))
                    };
                    a.prototype.hb = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.Zi(this.b, b && b.type,
                                c.type);
                        f && (e = vb(function(g) {
                            return g({
                                b: d.b,
                                Da: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.tb = function(c) {
                        return c.length
                    };
                    a.prototype.Dd = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                qj = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.Yh = 7500;
                        b.Nd = 3E4;
                        b.Cd();
                        return b
                    }
                    za(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.Ja.hb(b, d);
                        Ta(this.buffer, e);
                        this.Ja.tb(this.buffer) > this.Yh && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b),
                            this.buffer = [])
                    };
                    return c
                }(Yh),
                Ha = "metrikaId_" + Math.random(),
                Ob = {
                    Xd: 0
                },
                ei = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Gj = /ym-hide-content/,
                Hj = /ym-show-content/,
                Dj = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                Ej = [65, 90],
                Fj = [97, 122],
                Aj = /^color|radio|checkbox|date|datetime-local|email|month|number|password|range|search|tel|text|time|url|week$/i,
                yj = new RegExp("(" + ei.join("|") + ")", "i"),
                th = /^(password|passwd|pswd)$/,
                sh = ["ym-disable-keys", "-metrika-nokeys"],
                Gl = "(" + sh.join("|") + ")",
                zj = new RegExp("(" + ei.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" ")).join("|") +
                    ")", "i"),
                Kl = A(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML = 43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT =
                        47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX = 100, a
                }),
                Hl = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                xh =
                Ra(z(function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        fl: new RegExp("(" + a.join("|") + ")", "i"),
                        Bl: new RegExp("(" + a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";")).join("|") +
                            ")", "i"),
                        dl: /ym-record-keys/i,
                        Gj: "\u2022",
                        Al: 88
                    }
                }().Gj, N)),
                tc = !0,
                Pe = "",
                Qe = !1,
                Re = !0,
                Se = !1,
                wj = G(function(a, c) {
                    var b = V([a, "efv." + c.event], C);
                    c.ga = D(x(N, b), c.ga);
                    return c
                }),
                fi = A(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(de), b.push(Nl), b.push(Ol));
                    a.document.addEventListener ? c.push(vh) : (b.push(uh), d.push(vh));
                    c = ia([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        ga: [J]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        ga: [J]
                    }, {
                        event: "click",
                        ga: [zd]
                    }, {
                        event: "dblclick",
                        ga: [zd]
                    }, {
                        event: "mousedown",
                        ga: [zd]
                    }, {
                        event: "mouseup",
                        ga: [Ql]
                    }, {
                        event: "keydown",
                        ga: [Rl]
                    }, {
                        event: "keypress",
                        ga: [Sl]
                    }, {
                        event: "copy",
                        ga: [zh]
                    }, {
                        event: "blur",
                        ga: c
                    }, {
                        event: "focusin",
                        ga: b
                    }, {
                        event: "focusout",
                        ga: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        ga: [Vf]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        ga: [de]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        ga: [uh]
                    }, {
                        event: "change",
                        ga: [wh]
                    }, {
                        event: "submit",
                        ga: [Bh]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        ga: [wh]
                    }, {
                        type: "form",
                        event: "submit",
                        ga: [Bh]
                    }]);
                    return vj(a,
                        c)
                }),
                tj = A(function(a) {
                    return ia(Ub(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        ga: [Tl]
                    }] : [])
                }),
                xn = ["submit", "beforeunload", "unload"],
                yn = A(function(a, c) {
                    var b = c(a);
                    return S(function(d, e) {
                        d[e.type + ":" + e.event] = e.ga;
                        return d
                    }, {}, b)
                }),
                zn = z(fi, function(a, c, b, d) {
                    return yn(c, a)[b + ":" + d] || []
                }),
                uj = /^\s*function submit\(\)/,
                sj = /opera mini/i,
                An = I("fw.p", function(a, c) {
                    if (!c.Tb) return Q.resolve(J);
                    var b = new wn(a, zn);
                    return pj(a, c, b, fi, xn)
                }),
                Bn = I("pr.p", function(a, c) {
                    var b, d;
                    if (te(a)) {
                        var e = oa(a, "5", c),
                            f =
                            pa((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            Y: f,
                            J: (d = {}, d["page-url"] = O(a).href, d["page-ref"] = w(a, "document.referrer") || "", d)
                        }, c)["catch"](C(a, "pr.p.s"))
                    }
                }),
                Cn = I("c.m.p", function(a, c) {
                    var b = P(c);
                    return z(wc(a, b), oj)
                }),
                Dn = I("e.a.p", function(a, c) {
                    var b = Ua(a, c);
                    b = V([x(N, z(!0), ea), Y(Boolean, D(z(b, w), ["clickmap", "trackLinks", "accurateTrackBounce"]))], D);
                    c.Mi && b();
                    return b
                }),
                En = I("cc.i", function(a, c) {
                    var b = V([a, c], nj);
                    b = V([a, b, 300], Z);
                    Ma(Sa(P(c))).then(b)
                }),
                Fn = I("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e =
                        Na(a),
                        f = ca(a),
                        g = e.o("wasSynced"),
                        l = {
                            id: 3,
                            ra: "0"
                        };
                    return c && g && g.time + 864E5 > f(fa) ? Q.resolve(g) : oa(a, "f", l)({
                        Y: pa((b = {}, b.pv = 1, b)),
                        J: (d = {}, d["page-url"] = O(a).href, d["page-ref"] = a.document.referrer, d)
                    }, l).then(function(m) {
                        var p;
                        m = (p = {}, p.time = f(fa), p.params = w(m, "settings"), p.bkParams = w(m, "userData"), p);
                        e.C("wasSynced", m);
                        return m
                    })["catch"](C(a, "f.h"))
                }),
                Gn = I("pa.int", function(a, c) {
                    return C(a, "pa.c", function() {
                        var b, d;
                        var e = wa(arguments),
                            f = J;
                        var g = null;
                        var l = e.length;
                        if (0 !== e.length && e[0]) {
                            var m = e.slice(-1)[0];
                            U(m) && (f = m, l = e.length + -1);
                            var p = e.slice(-2)[0];
                            U(p) && (f = p, g = m, l = e.length + -2);
                            l = e.slice(0, l);
                            g = {
                                Hi: g,
                                Eb: f,
                                ha: 1 === l.length ? e[0] : hh(l)
                            }
                        } else g = void 0;
                        if (g && (e = g.Hi, f = g.ha, g = g.Eb, ec(f) || va(f))) {
                            l = oa(a, "1", c);
                            m = Oc(c).url;
                            p = w(f, "__ym.user_id");
                            var r = Ba(f),
                                t = K("__ymu", r);
                            r = K("__ym", r) && p;
                            $b(c) || (r ? Ga(a, "Set user id " + p) : Ga(a, (t ? "User p" : "P") + "arams. Counter " + c.id + ". Params: " + JSON.stringify(f)));
                            l({
                                ha: f,
                                Y: pa((b = {}, b.pa = 1, b.ar = 1, b)),
                                J: (d = {}, d["page-url"] = m || O(a).href, d)
                            }, c).then(B(Cb, null, a, B(g, e)), C(a,
                                "p.s"))
                        }
                    })
                }),
                Hn = I("exps.int", function(a, c) {
                    return C(a, "e.m", function(b, d, e) {
                        var f, g;
                        void 0 === d && (d = J);
                        if (b && 0 < b.length) {
                            var l = oa(a, "e", c),
                                m = Oc(c).url;
                            return l({
                                Y: pa((f = {}, f.ex = 1, f.ar = 1, f)),
                                J: (g = {}, g["page-url"] = m || O(a).href, g.exp = b, g)
                            }, c).then(B(Cb, null, a, B(d, e)), C(a, "exps.s"))
                        }
                    })
                }),
                In = I("y.p", function(a, c) {
                    var b = qg(a, c);
                    if (b) {
                        var d = he(a),
                            e = G(mj)(a, b, c);
                        mg(a, d, function(f) {
                            f.D("params", e)
                        });
                        b.na.D("params", x(W("1"), e))
                    }
                }),
                Mf = A(xd),
                Nf = G(function(a, c) {
                    var b = Mf(a),
                        d = na(c),
                        e = d[0],
                        f = d[1];
                    d = d.slice(2);
                    if (f) {
                        var g =
                            "" + e;
                        var l = {
                            id: 1,
                            ra: "0"
                        };
                        if (-1 === g.indexOf(":")) l.id = parseInt(g, 10);
                        else {
                            g = g.split(":");
                            var m = g[1];
                            l.id = parseInt(g[0], 10);
                            l.ra = m
                        }
                        g = [Ua(a, l), l];
                        l = g[0];
                        g = g[1];
                        m = P(g);
                        b[m] || (b[m] = {});
                        b = b[m];
                        "init" === f ? (e = "yaCounter" + g.id, a[e] || (a[e] = new a.Ya[ha.Ic](F({}, d[0], g)))) : l && l[f] && b.oj ? l[f].apply(l, d) : (l = b.hh, l || (l = [], b.hh = l), l.push(ia([e, f], d)))
                    }
                }),
                Ld, Xb, kj = (Ld = {}, Ld.transaction_id = "id", Ld.value = "revenue", Ld),
                ij = (Xb = {}, Xb.view_item = "detail", Xb.add_to_cart = "add", Xb.remove_from_cart = "remove", Xb.begin_checkout =
                    "checkout", Xb.purchase = "purchase", Xb),
                Jn = "currencyCode add delete remove purchase checkout detail".split(" "),
                gi = I("dl.w", function(a, c, b) {
                    var d;
                    qe(a, a[c], function(e) {
                        b(e)
                    }) || (d = Z(a, function() {
                        gi(a, c, b)
                    }, 1E3, "ec.dl"));
                    return B(ua, null, a, d)
                }),
                Kn = G(function(a, c, b) {
                    var d, e, f = w(b, "ecommerce") || {};
                    a = Y(sb(Jn), Ba(f));
                    var g = S(function(l, m) {
                        l[m] = f[m];
                        return l
                    }, {}, a);
                    a = [];
                    Ba(g).length && a.push(g);
                    b = hj(b);
                    a = a.concat(b);
                    a.length && c && c((d = {}, d.__ym = (e = {}, e.ecommerce = a, e), d))
                }),
                Ln = I("p.e", function(a, c) {
                    var b = Ua(a,
                        c);
                    if (b && c.Zf) {
                        b = B(b.params, b);
                        var d = Kn(a, b);
                        return gi(a, c.Zf, function(e) {
                            e.D(d)
                        })
                    }
                }),
                Md = G(function(a, c, b, d) {
                    var e, f;
                    (b = Ua(c, b)) && jj(a, d, c) && (c = B(b.params, b), (a = Lf(a, d, "goods")) && c && c((e = {}, e.__ym = (f = {}, f.ecommerce = [a], f), e)))
                }),
                Mn = I("ecm.a", Md("add")),
                Nn = I("ecm.r", Md("remove")),
                On = I("ecm.d", Md("detail")),
                Pn = I("ecm.p", Md("purchase")),
                rf = G(function(a, c) {
                    var b;
                    return b = {}, b[Ea(a)] = c, b
                }),
                Qn = function() {
                    function a(c) {
                        var b;
                        this.isSync = !1;
                        this.Mc = [];
                        this.ag = [];
                        this.tb = ac;
                        this.b = c;
                        this.jc = (b = {}, b.event =
                            B(this.Oi, this), b.page = rf({
                                page: 1
                            }), b.mutation = rf({
                                Me: 1
                            }), b.activity = rf({
                                Qd: 1
                            }), b);
                        try {
                            this.Wa = w(ef, "ru").T.N.R.O
                        } catch (d) {}
                        this.Wa && (this.ag = [
                            [
                                ["scroll"], {
                                    hf: 1
                                }
                            ],
                            [
                                ["selection"], {
                                    jf: 1
                                }
                            ],
                            [
                                ["change", "input"], {
                                    Ud: 1
                                }
                            ],
                            [
                                ["keystroke"], {
                                    Ge: 1
                                }, {
                                    Va: 1
                                }
                            ],
                            [
                                ["zoom"], {
                                    If: 1
                                }
                            ],
                            [
                                ["resize"], {
                                    ef: 1
                                }
                            ],
                            [
                                ["windowfocus", "windowblur", "focus", "blur", "eof"], {
                                    Hf: 1
                                }
                            ],
                            [
                                ["mousemove", "mouseup", "mousedown", "click"], {
                                    Le: 1
                                }
                            ],
                            [
                                ["deviceRotation"], {
                                    ee: 1
                                }
                            ],
                            [
                                ["fatalError"], {
                                    ke: 1
                                }
                            ],
                            [
                                ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                                {
                                    zf: 1
                                }, {
                                    touches: 1
                                }, {
                                    touches: 1
                                }
                            ],
                            [
                                ["hashchange"], {
                                    xe: 1
                                }
                            ]
                        ])
                    }
                    a.prototype.Oi = function(c) {
                        var b, d, e = c.type,
                            f = La(x(W("0"), z(e, K)), this.ag);
                        if (!f) throw Error("vem." + e);
                        "eof" === e && (this.isSync = !0, E(x(z(Pk), ea), this.Mc));
                        var g = f[1],
                            l = f[2];
                        f = f[3];
                        var m = c.fa;
                        return {
                            event: (b = {
                                type: this.Wa.Uh[e],
                                target: c.target,
                                ca: c.ca
                            }, b[Ea(g)] = l ? (d = {}, d[Ea(l)] = f ? m[Ea(f)] : m, d) : m, b)
                        }
                    };
                    a.prototype.yb = function(c) {
                        var b = this;
                        c = ld(c, function(e) {
                            var f = !R(e.partNum);
                            return {
                                data: f ? null : b.jc[e.type](e.data),
                                Wd: f ? e.data : null,
                                page: e.partNum,
                                end: e.end,
                                da: e.da
                            }
                        });
                        var d = ng(this.b, c, this.isSync ? Infinity : 20);
                        this.Mc.push(d);
                        return d(qm(function(e) {
                            e = b.Wa.Lf.encode({
                                buffer: e
                            });
                            var f = Ad(b.b)(d, b.Mc);
                            b.Mc.splice(f, 1);
                            return e.finish()
                        }))
                    };
                    a.prototype.hb = function(c) {
                        return this.Wa.Of.encode(this.jc[c.type](c.data)).finish()
                    };
                    a.prototype.Dd = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function() {
                        return this.Wa && cg(this.b)
                    };
                    return a
                }(),
                Qa = function() {
                    function a(c, b) {
                        this.xj =
                            "wv2.c";
                        this.ua = "a";
                        this.lc = [];
                        this.Ta = {};
                        this.b = c;
                        this.Z = Yd(c, this, this.ua, this.xj);
                        this.H = b;
                        this.Hb = this.H.bj();
                        this.start = this.Z.X(this.start, "st");
                        this.stop = this.Z.X(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.lc = D(function(b) {
                            var d = b[0],
                                e = b[1];
                            b = U(e) ? e : e.ve;
                            e = U(e) ? c.b : e.target;
                            b = B(c.Z.X(b, d), c);
                            return c.Hb.D(e, d, b)
                        }, Da(this.Ta))
                    };
                    a.prototype.stop = function() {
                        E(ea, this.lc)
                    };
                    a.prototype.ia = function(c) {
                        return this.H.bb().ia(c)
                    };
                    return a
                }(),
                Rn = /svg/,
                Hf = /^checkbox|radio$/i,
                fj = /^on.+/,
                sf = W("location.href"),
                Sn = function(a) {
                    function c(b, d) {
                        var e = a.call(this, b, d) || this;
                        e.ua = "mu";
                        e.Ea = {
                            elements: [],
                            attributes: []
                        };
                        e.index = 0;
                        e.Pe = e.Z.X(e.Pe, "o");
                        e.$d = e.Z.X(e.$d, "io");
                        e.Rd = e.Z.X(e.Rd, "ao");
                        e.$e = e.Z.X(e.$e, "a");
                        e.Ye = e.Z.X(e.Ye, "at");
                        e.af = e.Z.X(e.af, "r");
                        e.Ze = e.Z.X(e.Ze, "c");
                        e.nd = new b.MutationObserver(e.Pe);
                        return e
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        this.nd.observe(this.b.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.nd.disconnect()
                    };
                    c.prototype.Rd = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e = this.Ea.elements.indexOf(d); - 1 === e && (e = this.Ea.elements.push(d) - 1, this.Ea.attributes[e] = {});
                        this.Ea.attributes[e] || (this.Ea.attributes[e] = {});
                        this.Ea.attributes[e][b] = d.getAttribute(b)
                    };
                    c.prototype.$d = function(b) {
                        function d(m) {
                            var p = jb(e.b)(m, f);
                            return -1 === p ? (f.push(m), m = {
                                le: {}
                            }, g.push(m), m) : g[p]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        E(function(m) {
                            var p = m.attributeName,
                                r = m.removedNodes,
                                t = m.oldValue,
                                v = m.target,
                                q = m.nextSibling,
                                k = m.previousSibling;
                            switch (m.type) {
                                case "attributes":
                                    e.Rd(m);
                                    var h = d(v);
                                    h.le[p] || (h.le[p] = Xd(e.b, v, p, t, e.H.se()));
                                    break;
                                case "childList":
                                    r && E(function(n) {
                                        h = d(n);
                                        h.fg || F(h, {
                                            fg: v,
                                            Ti: q ? q : void 0,
                                            Ui: k ? k : void 0
                                        })
                                    }, na(r));
                                    break;
                                case "characterData":
                                    h = d(v), h.gg || (h.gg = t)
                            }
                        }, b);
                        var l = this.H.bb();
                        E(function(m, p) {
                            l.pf(m, g[p])
                        }, f)
                    };
                    c.prototype.Pe = function(b) {
                        var d = this;
                        if (sf(this.b)) {
                            var e = this.H.da();
                            this.$d(b);
                            E(function(f) {
                                var g = f.addedNodes,
                                    l = f.removedNodes,
                                    m = f.target;
                                switch (f.type) {
                                    case "childList":
                                        l &&
                                            l.length && d.af(na(l), e);
                                        g && g.length && d.$e(na(g), e);
                                        break;
                                    case "characterData":
                                        d.Ze(m, e)
                                }
                            }, b);
                            this.Ye(e)
                        } else this.stop()
                    };
                    c.prototype.Ye = function(b) {
                        var d = this;
                        E(function(e, f) {
                            var g = d.Xc();
                            d.H.oa("mutation", {
                                index: g,
                                attributes: d.Ea.attributes[f],
                                target: d.ia(e)
                            }, "ac", b)
                        }, this.Ea.elements);
                        this.Ea.elements = [];
                        this.Ea.attributes = []
                    };
                    c.prototype.$e = function(b, d) {
                        var e = this,
                            f = this.Xc();
                        this.H.bb().bd({
                            fb: b,
                            Bd: function(g) {
                                g = D(function(l) {
                                    l = F({}, l);
                                    delete l.node;
                                    return l
                                }, g);
                                e.H.oa("mutation", {
                                        index: f,
                                        fb: g
                                    },
                                    "ad", d)
                            }
                        })
                    };
                    c.prototype.af = function(b, d) {
                        var e = this,
                            f = this.Xc(),
                            g = this.H.bb(),
                            l = D(function(m) {
                                var p = g.removeNode(m);
                                If(e.b, m, function(r) {
                                    g.removeNode(r)
                                });
                                return p
                            }, b);
                        this.H.oa("mutation", {
                            index: f,
                            fb: l
                        }, "re", d)
                    };
                    c.prototype.Ze = function(b, d) {
                        var e = this.Xc();
                        this.H.oa("mutation", {
                            value: b.textContent,
                            target: this.ia(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.Xc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(Qa),
                Tn = function() {
                    function a(c, b) {
                        var d = this;
                        this.Rc = [];
                        this.Oe = 1;
                        this.kb = 0;
                        this.Nb = {};
                        this.hc = [];
                        this.removeNode = function(f) {
                            var g = d.ia(f),
                                l = qa(f);
                            if (!R(l)) return d.na.ma("NR:" + l.toLowerCase(), {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.$j = function(f) {
                            var g = [];
                            If(d.b, f, function(l) {
                                var m = d.Jb(l);
                                Ya(m) || g.push(l)
                            });
                            return g
                        };
                        this.Jb = function(f) {
                            if (f) {
                                var g = qa(f);
                                if (g) return f.__ym_indexer || (f.__ym_indexer = {
                                    id: d.Oe
                                }, d.Oe += 1, d.na.ma("NA:" + g.toLowerCase(), {
                                    data: {
                                        node: f,
                                        id: f.__ym_indexer.id
                                    }
                                })), f.__ym_indexer.id
                            }
                            return null
                        };
                        this.b = c;
                        var e = Yd(c, this, "i");
                        this.na = rc(c);
                        this.options = b;
                        this.start = e.X(this.start,
                            "st");
                        this.stop = e.X(this.stop, "sp");
                        this.ia = e.X(this.ia, "i");
                        this.pf = e.X(this.pf, "o");
                        this.bd = e.X(this.bd, "a");
                        this.removeNode = e.X(this.removeNode, "r");
                        this.Ba = e.X(this.Ba, "s")
                    }
                    a.prototype.pf = function(c, b) {
                        var d = La(function(e) {
                            return e.element === c
                        }, this.hc);
                        d ? (d.options.push(b), this.ia(c)) : this.hc.push({
                            element: c,
                            options: [b]
                        })
                    };
                    a.prototype.Ib = function() {
                        return this.na
                    };
                    a.prototype.start = function() {
                        this.kb = Z(this.b, x(B(this.Ba, this, !1), this.start), 50, "i.s")
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        ua(this.b, this.kb);
                        this.Rc = []
                    };
                    a.prototype.bd = function(c) {
                        var b = this,
                            d = vb(this.$j, c.fb),
                            e = {
                                Bd: c.Bd,
                                result: [],
                                dd: 0,
                                fb: d
                            };
                        this.Rc.push(e);
                        E(function(f, g) {
                            var l = b.Jb(f);
                            Ya(l) || (b.Nb[l] && b.ia(f), b.Nb[l] = {
                                node: f,
                                event: e,
                                lk: g
                            })
                        }, d)
                    };
                    a.prototype.ia = function(c) {
                        if (c === this.b) return 0;
                        var b = this.Jb(c),
                            d = this.Nb[b];
                        if (d) {
                            var e = d.event;
                            d = d.lk;
                            var f = this.cj(c),
                                g = f.fg,
                                l = f.le,
                                m = f.gg,
                                p = this.b.document.documentElement === c,
                                r = f.Ti || c.nextSibling,
                                t = f.Ui || c.previousSibling;
                            f = !p && r ? this.Jb(r) : null;
                            t = !p && t ? this.Jb(t) :
                                null;
                            p = this.b;
                            r = this.options;
                            g = this.Jb(g || c.parentNode || c.parentElement) || 0;
                            void 0 === t && (t = null);
                            void 0 === f && (f = null);
                            void 0 === l && (l = {});
                            var v = qa(c);
                            if (R(v)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    nc: t !== g ? t : null,
                                    next: f !== g ? f : null,
                                    parent: g,
                                    name: v.toLowerCase(),
                                    node: c
                                };
                                if (Zd(c)) {
                                    if (l = m || c.textContent || c.data || c.nodeValue || "", m = {
                                            attributes: {},
                                            content: l
                                        }, l && (c = cc(p, c))) m.content = "" !== l.trim() ? Cj(p, l) : l, m.hidden = c
                                } else {
                                    m = {
                                        attributes: ej(p, c, r, l)
                                    };
                                    if (p = Xc(c) && cd(c)) m.hidden = p;
                                    c.namespaceURI && Rn.test(c.namespaceURI) && (m.Fg =
                                        c.namespaceURI)
                                }
                                c = F(g, m)
                            }
                            if (R(c)) return;
                            delete this.Nb[b];
                            e.result[d] = c;
                            e.dd += 1;
                            this.na.ma("NI:" + c.name, {
                                data: c
                            });
                            e.fb.length === e.dd && e.Bd(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.Ba(!0)
                    };
                    a.prototype.Ba = function(c) {
                        var b = this;
                        if (sf(this.b)) {
                            var d = Ba(this.Nb);
                            d = D(function(e) {
                                return b.Nb[e].node
                            }, d);
                            d = ld(d, this.ia);
                            c = c ? Mh(J) : we(this.b, 20);
                            d(c);
                            this.Rc = Y(function(e) {
                                return e.dd !== e.result.length
                            }, this.Rc)
                        }
                    };
                    a.prototype.cj = function(c) {
                        var b = La(function(e) {
                            return e.element === c
                        }, this.hc);
                        if (b) {
                            var d =
                                b.options.shift() || {};
                            b.options.length || (this.hc = Y(function(e) {
                                return e !== b
                            }, this.hc));
                            return d
                        }
                        return {}
                    };
                    return a
                }(),
                Un = ["input", "change", "keyup", "paste", "cut"],
                Vn = function(a) {
                    function c(b, d) {
                        var e = a.call(this, b, d) || this;
                        e.ua = "in";
                        e.inputs = [];
                        e.ce = !1;
                        e.root = zb(b);
                        e.pd = e.Z.X(e.pd, "ii");
                        e.qd = e.Z.X(e.qd, "ir");
                        e.xd = e.Z.X(e.xd, "ri");
                        e.ue = e.Z.X(e.ue, "ce");
                        e.ad = e.Z.X(e.ad, "vc");
                        return e
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.H.bb().Ib();
                        this.ce = this.Ai();
                        E(function(e) {
                            e = e.toLowerCase();
                            d.D("NA:" + e, B(b.pd, b)).D("NR:" + e, B(b.qd, b))
                        }, Ye);
                        this.lc = [this.Hb.D(this.b.document, Un.join(","), B(this.ue, this)), function() {
                            E(function(e) {
                                e = e.toLowerCase();
                                d.Aa("NA:" + e, b.pd).Aa("NR:" + e, b.qd)
                            }, Ye);
                            E(function(e) {
                                return b.sh(e.element)
                            }, b.inputs)
                        }]
                    };
                    c.prototype.sh = function(b) {
                        var d = this;
                        this.inputs = Y(function(e) {
                            var f = e.Lj,
                                g = e.Vd;
                            return e.element === b ? (d.ce && f && d.b.Object.defineProperty(b, d.Yc(g), f), !1) : !0
                        }, this.inputs)
                    };
                    c.prototype.qd = function(b) {
                        this.sh(b.data.node)
                    };
                    c.prototype.pd = function(b) {
                        this.xd(b.data.node)
                    };
                    c.prototype.Yc = function(b) {
                        return b ? "checked" : "value"
                    };
                    c.prototype.Vc = function(b) {
                        return Y(function(d) {
                            return b === d.element
                        }, this.inputs).shift()
                    };
                    c.prototype.ue = function(b) {
                        if (b = b.target) {
                            var d = this.Vc(b);
                            if (!d && (this.xd(b), d = this.Vc(b), !d)) return;
                            this.ad(b[this.Yc(d.Vd)], b)
                        }
                    };
                    c.prototype.ad = function(b, d) {
                        var e = this.Vc(d),
                            f = e.Vd,
                            g = e.value,
                            l = this.Yc(f);
                        b && !K(typeof b, ["string", "boolean", "number"]) || b === g || (g = Xd(this.b, d, l, b, this.H.se()), f ? this.H.oa("event", {
                                target: this.ia(d),
                                checked: !!b
                            }, "change") :
                            (f = Yc(d), l = cd(d), this.H.oa("event", {
                                value: g,
                                hidden: l && !f,
                                target: this.ia(d)
                            }, "change")), e.value = b)
                    };
                    c.prototype.xd = function(b) {
                        if (Xc(b) && "__ym_input_override_test" !== b.getAttribute("class") && !this.Vc(b)) {
                            var d = Hf.test(b.getAttribute("type")),
                                e = this.Yc(d),
                                f = this.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), e) || {},
                                g = this.b.Object.getOwnPropertyDescriptor(b, e) || {},
                                l = F({}, f, g);
                            d = {
                                element: b,
                                Vd: d,
                                value: b[e]
                            };
                            if (this.ce && la("((set)?(\\s?" + e + ")?)?", l.set)) {
                                var m = this;
                                try {
                                    this.b.Object.defineProperty(b,
                                        e, F({}, l, {
                                            configurable: !0,
                                            set: function(p) {
                                                m.ad(p, this);
                                                return l.set.call(this, p)
                                            }
                                        }))
                                } catch (p) {}
                                d.Lj = l
                            }
                            this.inputs.push(d)
                        }
                    };
                    c.prototype.Ai = function() {
                        var b = !0,
                            d = bb(this.b)("input");
                        try {
                            d = bb(this.b)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            this.root.appendChild(d);
                            var e = this.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.b.Object.getOwnPropertyDescriptor(d,
                                    "value") || {},
                                g = F({}, e, f);
                            this.b.Object.defineProperty(d, "value", F({}, g, {
                                configurable: !0,
                                set: function(l) {
                                    return g.set.call(d, l)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (l) {
                            b = !1
                        }
                        d && this.root && this.root.removeChild(d);
                        return b
                    };
                    return c
                }(Qa),
                Wn = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.ua = "rz";
                        d.ff = !1;
                        d.Ta = (b = {}, b.resize = function() {
                            if (this.ff) this.ff = !1;
                            else {
                                var e = this.pg();
                                e && this.H.Ba(e)
                            }
                        }, b.orientationchange = function() {
                            this.ff = !0
                        }, b);
                        return d
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.ah()
                    };
                    c.prototype.pg = function(b) {
                        void 0 === b && (b = this.H.da());
                        var d = this.H.cc(),
                            e = Fc(this.b),
                            f = e[0];
                        e = e[1];
                        return (d = d.te()) && 0 < f && 0 < e ? this.H.jg("event", {
                            width: f,
                            height: e,
                            ud: d.scrollWidth,
                            sd: d.scrollHeight
                        }, "resize", b) : null
                    };
                    c.prototype.ah = function() {
                        var b = this.pg(0);
                        b ? this.H.Ba(b) : Z(this.b, B(this.ah, this), 300)
                    };
                    return c
                }(Qa),
                Nd = function() {
                    function a(c) {
                        this.index = 0;
                        this.Rb = {};
                        this.b = c
                    }
                    a.prototype.Lc = function(c, b,
                        d) {
                        void 0 === d && (d = {});
                        var e = ca(this.b),
                            f = this.index;
                        this.index += 1;
                        this.Rb[f] = {
                            kb: 0,
                            sc: !1,
                            rb: c,
                            Na: [],
                            He: e(fa)
                        };
                        var g = this;
                        return function() {
                            var l = wa(arguments),
                                m = d.dg && !g.Rb[f].sc,
                                p = g.Rb[f];
                            ua(g.b, p.kb);
                            p.Na = l;
                            p.sc = !0;
                            var r = e(fa);
                            if (m || r - p.He >= b) c.apply(void 0, l), p.He = r;
                            p.kb = Z(g.b, function() {
                                m || (c.apply(void 0, l), p.He = e(fa));
                                p.sc = !1;
                                p.Na = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        E(function(b) {
                            var d = c.Rb[b],
                                e = d.kb,
                                f = d.rb,
                                g = d.Na;
                            d.sc && (c.Rb[b].sc = !1, f.apply(void 0, g), ua(c.b, e))
                        }, Ba(this.Rb))
                    };
                    return a
                }(),
                Xn = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.ua = "sc";
                        f.lh = [];
                        f.Ta = (e = {}, e.scroll = function(g) {
                            if (this.H.cc().xg()) this.rd(g);
                            else {
                                var l = g.target,
                                    m = Y(function(p) {
                                        return p[0] === l
                                    }, this.lh).pop();
                                m ? m = m[1] : (m = this.Ka.Lc(B(this.rd, this), 100, {
                                    dg: !0
                                }), this.lh.push([l, m]));
                                m(g)
                            }
                        }, e);
                        f.Ka = new Nd(b);
                        f.rd = f.Z.X(f.rd, "o");
                        return f
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.H.oa("event", {
                            x: Math.max(this.b.scrollX, 0),
                            y: Math.max(this.b.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ka.flush()
                    };
                    c.prototype.rd = function(b) {
                        var d = this.H.cc().te();
                        b = b.target;
                        var e = this.dc(b);
                        d = Ca(ya(b), [d, this.b, this.b.document, this.b.document.body]);
                        this.H.oa("event", {
                            x: Math.max(e.left, 0),
                            y: Math.max(e.top, 0),
                            page: d,
                            target: d ? -1 : this.ia(b)
                        }, "scroll")
                    };
                    c.prototype.dc = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            l = e.body;
                        return b !== e || (b = this.H.cc().te(), b) ? K(b, [f, l]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(Qa),
                Yn = ["mousemove", "mousedown", "mouseup"],
                Zn = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.ua = "mo";
                        f.Ta = (e = {}, e[Yn.join(",")] = function(g) {
                            "mousemove" === g.type ? this.ek(g) : this.ld(g)
                        }, e);
                        f.Ka = new Nd(b);
                        f.ld = f.Z.X(f.ld, "n");
                        f.ek = f.Z.X(f.Ka.Lc(B(f.ld, f), 100), "t");
                        return f
                    }
                    za(c, a);
                    c.prototype.stop =
                        function() {
                            a.prototype.stop.call(this);
                            this.Ka.flush()
                        };
                    c.prototype.ld = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.b.document.elementFromPoint(e, f);
                        this.H.oa("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.ia(b)
                        }, d)
                    };
                    return c
                }(Qa),
                $n = ["focus", "blur"],
                ao = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.ua = "f";
                        d.Ta = (b = {}, b[$n.join(",")] = function(e) {
                            var f = e.target;
                            e = e.type;
                            this.H.oa("event", {
                                target: this.ia(f === this.b ? this.b.document.documentElement :
                                    f)
                            }, e)
                        }, b);
                        return d
                    }
                    za(c, a);
                    return c
                }(Qa),
                bo = A(function(a) {
                    var c = wb(a.getSelection, "getSelection");
                    return c ? B(c, a) : J
                }),
                co = x(bo, ea),
                eo = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                fo = /text|search|password|tel|url/,
                go = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.ua = "se";
                        d.we = !1;
                        d.Ta = (b = {}, b[eo.join(",")] = function(e) {
                            var f = this.H,
                                g = e.type,
                                l = e.which;
                            e = e.target;
                            if ("mousemove" !== g || 1 === l)(g = "select" === g ? this.hj(e) : this.fj()) && g.start !== g.end ? (this.we = !0, f.oa("event",
                                g, "selection")) : this.we && (this.we = !1, f.oa("event", {
                                start: 0,
                                end: 0
                            }, "selection"))
                        }, b);
                        return d
                    }
                    za(c, a);
                    c.prototype.fj = function() {
                        var b = co(this.b);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.b.document.createRange();
                            var d = this.ia(b.startContainer),
                                e = this.ia(b.endContainer);
                            if (!R(d) && !R(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                Ed: d,
                                Qc: e
                            }
                        }
                    };
                    c.prototype.hj = function(b) {
                        if (fo.test(b.type || "")) {
                            var d = this.ia(b);
                            if (!R(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(Qa),
                ho = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                io = function(a) {
                    function c(b, d) {
                        var e = a.call(this, b, d) || this;
                        e.ua = "wf";
                        e.visibility = null;
                        R(e.b.document.hidden) ? R(e.b.document.msHidden) ? R(e.b.document.webkitHidden) || (e.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : e.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : e.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        };
                        e.handleEvent = e.Z.X(e.handleEvent, "e");
                        return e
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        this.lc = [this.Hb.D(this.b, (this.visibility ? [this.visibility.event] : ["focus", "blur"]).join(","), B(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.H.oa("event", {}, ho[this.visibility ? this.b.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(Qa),
                jo = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                ko = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.ua = "to";
                        f.Fd = {};
                        f.scrolling = !1;
                        f.Zg = 0;
                        f.Ta = (e = {}, e.scroll = {
                            ve: function() {
                                var g = this;
                                this.scrolling = !0;
                                ua(this.b, this.Zg);
                                this.Zg = Z(this.b, function() {
                                    g.scrolling = !1
                                }, 150)
                            },
                            target: f.b.document
                        }, e[jo.join(",")] = {
                            ve: function(g) {
                                var l = this,
                                    m = "touchcancel" === g.type || "touchend" === g.type;
                                g.changedTouches && 0 < g.changedTouches.length && E(function(p) {
                                    var r = l.kj(p);
                                    p.__ym_touch_id = r;
                                    m && delete l.Fd[p.identifier]
                                }, na(g.changedTouches));
                                "touchmove" === g.type ? this.scrolling ? this.kc(g) : this.fk(g, this.H.da()) : this.kc(g)
                            },
                            target: f.b.document
                        }, e);
                        f.Ka = new Nd(b);
                        f.kc = f.Z.X(f.kc, "nh");
                        f.fk = f.Z.X(f.Ka.Lc(f.kc, f.H.cc().xg() ? 0 : 50, {
                            dg: !0
                        }), "th");
                        return f
                    }
                    za(c, a);
                    c.prototype.kj = function(b) {
                        this.Fd[b.identifier] ||
                            (this.Fd[b.identifier] = Ff());
                        return this.Fd[b.identifier]
                    };
                    c.prototype.kc = function(b, d) {
                        void 0 === d && (d = this.H.da());
                        var e = b.type,
                            f = D(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, na(b.changedTouches));
                        0 < f.length && this.H.oa("event", {
                            touches: f,
                            target: this.ia(b.target)
                        }, e, d)
                    };
                    return c
                }(Qa),
                lo = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.ua = "src";
                        d.Ta = (b = {}, b.load = {
                            ve: function(e) {
                                e = e.target;
                                "IMG" === qa(e) && e.getAttribute("srcset") &&
                                    this.H.oa("event", {
                                        target: this.ia(e),
                                        value: e.currentSrc
                                    }, "srcset")
                            },
                            target: d.b.document
                        }, b);
                        return d
                    }
                    za(c, a);
                    return c
                }(Qa),
                mo = function(a) {
                    function c(b, d) {
                        var e = a.call(this, b, d) || this;
                        e.ua = "zo";
                        e.Ld = 1;
                        e.Ka = new Nd(b);
                        e.Hc = e.Z.X(e.Hc, "z");
                        return e
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        if (this.qg()) {
                            a.prototype.start.call(this);
                            this.Hc();
                            var b = this.Hb.D(w(this.b, "visualViewport"), "resize", this.Ka.Lc(this.Hc, 10));
                            this.lc.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ka.flush()
                    };
                    c.prototype.Hc = function() {
                        var b = this.qg();
                        b && b !== this.Ld && (this.Ld = b, this.Zj(b))
                    };
                    c.prototype.qg = function() {
                        var b = Ee(this.b);
                        return b ? b[2] : null
                    };
                    c.prototype.Zj = function(b) {
                        var d = fe(this.b);
                        this.H.oa("event", {
                            x: d.x,
                            y: d.y,
                            Ld: b
                        }, "zoom")
                    };
                    return c
                }(Qa),
                Sc, Od = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                hi = {
                    "super": 1,
                    Yk: 2,
                    alt: 3,
                    shift: 4,
                    Il: 5,
                    "delete": 6,
                    Uk: 6
                },
                no = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                ii = (Sc = {}, Sc["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Sc["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Sc.Aj = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Sc),
                oo = /flash/,
                po = /ym-disable-keys/,
                qo = /^&#/,
                ro = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.ua = "ks";
                        f.Kb = {};
                        f.eb = 0;
                        f.Ua = [];
                        f.jh = [];
                        f.Pc = 0;
                        f.Ug = 0;
                        f.Ta = (e = {}, e.keydown = function(g) {
                            if (this.gd(g) && !1 === this.sj(g)) {
                                var l = g.keyCode;
                                g.repeat ||
                                    this.Kb[l] || (this.Kb[g.keyCode] = !0, Od[g.keyCode] && !this.eb ? (this.eb += 1, this.rf(g), this.reset(300)) : this.eb ? (this.yi(), this.df(g), this.ie()) : (this.reset(), this.df(g)))
                            }
                        }, e.keyup = function(g) {
                            if (this.gd(g)) {
                                var l = g.keyCode,
                                    m = Od[g.keyCode];
                                this.Kb[g.keyCode] && (this.Kb[l] = !1);
                                m && this.eb && (this.eb = 0, this.Kb = {});
                                1 === this.Ua.length && (g = this.Ua[0], K(g.keyCode, no) && (this.Ad([g], !0), this.reset()));
                                this.Ua = Y(x(ya(l), Rb), this.Ua);
                                ua(this.b, this.Pc)
                            }
                        }, e);
                        f.ei = -1 !== (w(b, "navigator.appVersion") || "").indexOf("Mac") ?
                            "1" : "2";
                        f.gd = f.Z.X(f.gd, "v");
                        f.ie = f.Z.X(f.ie, "ec");
                        f.Ad = f.Z.X(f.Ad, "sk");
                        f.re = f.Z.X(f.re, "gk");
                        f.rf = f.Z.X(f.rf, "sc");
                        f.Gc = f.Z.X(f.Gc, "cc");
                        f.reset = f.Z.X(f.reset, "r");
                        f.yd = f.Z.X(f.yd, "rs");
                        return f
                    }
                    za(c, a);
                    c.prototype.gd = function(b) {
                        var d = this.b.document.activeElement;
                        b = b.target;
                        return !Ca(Boolean, [d && "OBJECT" === d.nodeName && oo.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && po.test(b.className)])
                    };
                    c.prototype.ie = function() {
                        this.jh = this.Ua.slice(0);
                        ua(this.b,
                            this.Pc);
                        this.Pc = Z(this.b, z(this.jh, B(this.Ad, this)), 0, "e.c")
                    };
                    c.prototype.Ad = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.re(b);
                            this.H.oa("event", {
                                Va: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.re = function(b) {
                        var d = this;
                        b = D(function(e) {
                            e = e.keyCode;
                            var f = Od[e],
                                g = d.dj(e);
                            return {
                                id: e,
                                key: g,
                                ed: !!f && qo.test(g),
                                Lb: f
                            }
                        }, b);
                        return eh(function(e, f) {
                            return (hi[e.Lb] || 100) - (hi[f.Lb] || 100)
                        }, b)
                    };
                    c.prototype.dj = function(b) {
                        return ii[this.ei][b] || ii.Aj[b] || String.fromCharCode(b)
                    };
                    c.prototype.df = function(b) {
                        K(b,
                            this.Ua) || this.Ua.push(b)
                    };
                    c.prototype.rf = function(b) {
                        this.df(b);
                        this.Gc()
                    };
                    c.prototype.Gc = function() {
                        this.eb ? Z(this.b, this.Gc, 100) : this.Ua = []
                    };
                    c.prototype.yi = function() {
                        ua(this.b, this.Ug)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.Ug = Z(this.b, B(this.yd, this), b) : this.yd()
                    };
                    c.prototype.yd = function() {
                        this.eb = 0;
                        this.Ua = [];
                        this.Kb = {};
                        ua(this.b, this.Pc)
                    };
                    c.prototype.sj = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Od[b.keyCode] : !1
                    };
                    return c
                }(Qa),
                dj = ["sr", "sd",
                    "sr:r"
                ],
                so = /allow-same-origin/,
                to = function(a) {
                    function c(b, d) {
                        var e = a.call(this, b, d) || this;
                        e.ua = "if";
                        e.uc = [];
                        e.me = {};
                        e.Qe = e.Z.X(e.Qe, "fi");
                        e.Re = e.Z.X(e.Re, "sd");
                        e.Se = e.Z.X(e.Se, "src");
                        e.nd = new MutationObserver(e.Se);
                        return e
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.H.se().Zb && this.H.bb().Ib().D("NA:iframe", B(this.Qe, this));
                        this.H.mg().Ib().D("sdr", B(this.Re, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        E(function(b) {
                            b.H.stop()
                        }, this.uc)
                    };
                    c.prototype.Se =
                        function(b) {
                            var d = b.pop().target;
                            if (b = La(function(f) {
                                    return f.ug === d
                                }, this.uc)) {
                                this.uc = Y(function(f) {
                                    return f.ug !== d
                                }, this.uc);
                                var e = b.H.qe();
                                try {
                                    b.H.stop()
                                } catch (f) {}
                                this.Kc(d, e)
                            }
                        };
                    c.prototype.Qe = function(b) {
                        var d = b.data.node;
                        this.nd.observe(d, {
                            attributes: !0,
                            attributeFilter: ["src"]
                        });
                        this.Kc(d, b.data.id)
                    };
                    c.prototype.Kc = function(b, d) {
                        var e = this;
                        if (this.qj(b)) Kf(this.b, b).then(function() {
                            var f = e.H.Kc(b.contentWindow, d);
                            e.uc.push({
                                H: f,
                                ug: b
                            })
                        })["catch"](J)
                    };
                    c.prototype.Re = function(b) {
                        var d = this,
                            e =
                            b.ca;
                        b = b.data;
                        this.me[e] || (this.me[e] = {
                            data: []
                        });
                        var f = this.me[e];
                        f.data = f.data.concat(b);
                        this.b.isNaN(f.ae) && E(function(g) {
                            "page" === g.type && (f.ae = g.data.Ia - d.H.ng())
                        }, f.data);
                        this.b.isNaN(f.ae) || (this.H.Ba(D(function(g) {
                            g.da += f.ae;
                            g.da = d.b.Math.max(0, g.da);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.qj = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return e && !e.match(so) || d && "about:blank" !== d && (d = yb(this.b, d).host) && O(this.b).host !== d ? !1 : w(b, "contentWindow.location.href")
                    };
                    return c
                }(Qa),
                uo = function(a) {
                    function c(b, d) {
                        var e = a.call(this, b, d) || this;
                        e.ua = "pa";
                        e.kf = e.Z.X(e.kf, "ps");
                        return e
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        this.H.bb().bd({
                            fb: [this.b.document.documentElement],
                            Bd: this.kf
                        })
                    };
                    c.prototype.kf = function(b) {
                        var d = this.H.ej(),
                            e = d.Yi(),
                            f = O(this.b),
                            g = f.host,
                            l = f.protocol;
                        f = f.pathname;
                        var m = Fc(this.b),
                            p = m[0];
                        m = m[1];
                        this.H.oa("page", {
                            content: D(function(r) {
                                r = F({}, r);
                                delete r.node;
                                return r
                            }, b),
                            Ec: e || "",
                            cd: !!e,
                            viewport: {
                                width: p,
                                height: m
                            },
                            title: this.b.document.title,
                            doctype: d.$i() ||
                                "",
                            Dc: this.b.location.href,
                            Hd: this.b.navigator.userAgent,
                            referrer: this.b.document.referrer,
                            screen: {
                                width: this.b.screen.width,
                                height: this.b.screen.height
                            },
                            location: {
                                host: g,
                                protocol: l,
                                path: f
                            },
                            Ia: this.H.ng(),
                            Qb: d.ij()
                        }, "page", 0)
                    };
                    return c
                }(Qa),
                tf = [Sn, Vn, Wn, Xn, Zn, ao, go, io, ko, lo, mo, ro];
            tf.push(to);
            tf.push(uo);
            var vo = A(function(a) {
                    var c = a.document;
                    return {
                        te: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
                            return c.documentElement.scrollHeight >=
                                w(c, "body.scrollHeight") ? b : null
                        },
                        gl: function() {
                            var b = a.screen,
                                d = La(z(b, w), ["orientation", "mozOrientation", "msOrientation"]);
                            return w(b, d + ".angle") || 0
                        },
                        ml: z(a, nb),
                        xg: z(a, We),
                        ll: z(a, Hh)
                    }
                }),
                wo = function() {
                    function a(c, b) {
                        var d = this;
                        this.ua = "R";
                        this.fc = 0;
                        this.Nc = [];
                        this.ec = null;
                        this.Ha = this.yc = this.ih = !1;
                        this.Ia = 0;
                        this.ej = function() {
                            return d.page
                        };
                        this.qe = function() {
                            return d.fc
                        };
                        this.ng = function() {
                            return d.Ia
                        };
                        this.bj = function() {
                            return d.Hb
                        };
                        this.mg = function() {
                            return d.ec
                        };
                        this.bb = function() {
                            return d.ye
                        };
                        this.da = function() {
                            return d.uf ? d.uf(rd) : 0
                        };
                        this.se = function() {
                            return d.options
                        };
                        this.cc = function() {
                            return d.wi
                        };
                        this.oa = function(g, l, m, p) {
                            void 0 === p && (p = d.da());
                            g = d.jg(g, l, m, p);
                            d.Ba(g)
                        };
                        this.jg = function(g, l, m, p) {
                            void 0 === p && (p = d.da());
                            return {
                                type: g,
                                data: l,
                                da: p,
                                ca: d.fc,
                                event: m || g
                            }
                        };
                        this.Ba = function(g) {
                            g = va(g) ? g : [g];
                            d.ih && !d.yc ? d.Ha ? (g = D(function(l) {
                                return l.ca ? l : F(l, {
                                    ca: d.fc
                                })
                            }, g), d.mg().bh(g)) : (g = D($i, g), d.nf(g)) : d.Nc = d.Nc.concat(g)
                        };
                        this.b = c;
                        var e = Yd(c, this, "R");
                        this.sf = e.X(this.sf, "s");
                        this.Ba =
                            e.X(this.Ba, "sd");
                        try {
                            var f = X(c);
                            f.o("wv2e") && Fe();
                            f.C("wv2e", !0);
                            this.options = b;
                            this.Hb = xa(c);
                            this.ye = new Tn(this.b, b);
                            this.wi = vo(c);
                            this.Vf = D(function(g) {
                                return new g(c, d)
                            }, tf);
                            this.pj();
                            this.page = bj(this.b);
                            this.sf()
                        } catch (g) {
                            throw td(this.b, "ww2.R.c", g), g;
                        }
                    }
                    a.prototype.start = function(c) {
                        this.ih = !0;
                        this.nf = c;
                        this.$g()
                    };
                    a.prototype.stop = function() {
                        sf(this.b) && (E(function(c) {
                            return c.stop()
                        }, this.Vf), this.ye.stop(), this.ec && this.ec.stop(), this.Ha || this.oa("event", {}, "eof"))
                    };
                    a.prototype.Kc = function(c,
                        b) {
                        var d = new a(c, F({}, this.options, {
                            ca: b
                        }));
                        d.start(J);
                        return d
                    };
                    a.prototype.pj = function() {
                        var c = this;
                        this.Ha = !!this.options.ca;
                        this.fc = this.options.ca || 0;
                        this.yc = !this.Ha;
                        var b = this.options.qh || [];
                        b.push(O(this.b).host);
                        this.ec = cj(this.b, this, b);
                        b = this.ec.Ib();
                        nb(this.b) ? this.yc && b.D("i", function(d) {
                            c.Ha = d.Ha;
                            c.yc = !1;
                            d.ca && (c.fc = d.ca);
                            c.$g()
                        }) : this.yc = this.Ha = !1
                    };
                    a.prototype.$g = function() {
                        var c = this.Nc.splice(0, this.Nc.length);
                        this.Ba(c)
                    };
                    a.prototype.sf = function() {
                        this.uf = Og(this.b);
                        this.Ia = this.uf(fa);
                        E(function(c) {
                            c.start()
                        }, this.Vf);
                        this.ye.start()
                    };
                    return a
                }(),
                xo = I("w2", function(a, c) {
                    var b = X(a),
                        d = P(c);
                    if (yc(a) || !la("MutationObserver", a.MutationObserver)) return Q.resolve();
                    var e = Ma(Sa(d)),
                        f = V([a, c], Xi);
                    f = Kf(a).then(f).then(function(g) {
                        return new wo(a, g)
                    });
                    return Q.all([f, e]).then(function(g) {
                        function l() {
                            p || (p = !0, m.stop())
                        }
                        var m = g[0];
                        g = g[1];
                        var p = !1,
                            r = b.o("wv2Counter");
                        if (!Pf(a, g) || r) m.stop();
                        else {
                            xa(a).D(a, "beforeunload,unload", l);
                            b.C("wv2Counter", d);
                            b.C("stopRecorder", l);
                            g = [new Fd(a)];
                            g.unshift(new Qn(a));
                            var t = La(function(h) {
                                return h.isEnabled()
                            }, g);
                            if (t) {
                                var v = oa(a, "W", c);
                                g = function(h, n, u) {
                                    n = {
                                        J: {},
                                        Y: pa(),
                                        ja: n,
                                        zg: !(t instanceof Fd)
                                    };
                                    "m" === h && n.Y.C("bt", 1);
                                    v(n, c, u)["catch"](C(a, "s.w2.p"))
                                };
                                var q = gf.pe(d, "m", z("m", g), t, a),
                                    k = gf.pe(d, "e", z("e", g), t, a);
                                g = Zi();
                                r = g.Ij;
                                k.D("ag", g.ui);
                                k.D("p", r);
                                g = Ra(function(h) {
                                    "eof" === w(h, "data.type") ? (k.push(h), q.push(h), k.flush(), q.flush()) : ("event" === h.type ? k : q).push(h)
                                });
                                m.start(g)
                            }
                        }
                    })["catch"](C(a, "rdr.sett"))
                }),
                Ui = Xa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Vi = A(function(a, c, b) {
                    var d = b.resource;
                    b.inline ? bc(a, {
                        src: d
                    }) : (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Wi(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                Df = A(function(a) {
                    function c(d, e, f) {
                        f && (e && b.push([f, f.innerHTML]), f.innerHTML = d)
                    }
                    var b = [];
                    return {
                        Tg: function(d, e) {
                            void 0 === e && (e = !1);
                            return S(function(f, g) {
                                var l = g.text;
                                return !!x(B(Si, null, a), Ra(B(c, null, l, e)), ac)(g.selector) || f
                            }, !1, d || [])
                        },
                        Xj: function() {
                            E(function(d) {
                                d[0].innerHTML = d[1]
                            }, b)
                        }
                    }
                }),
                yo =
                I("ph.p", function(a, c) {
                    if (yc(a)) return J;
                    var b = Df(a),
                        d = c.id,
                        e = Vc(a, void 0, d);
                    Li(a, d);
                    Sd(a, d, !0);
                    Ma(Sa(P(c))).then(function(f) {
                        var g = w(f, "settings.mp2.conditions");
                        f = w(f, "settings.mp2.substs");
                        var l = (g = (g = La(B(Mi, null, a, c), g || [])) && g.track_id) && f && f[g];
                        g && l || (l = (g = e.o("mp2_track") || "") && f && f[g]);
                        g && l ? (e.C("mp2_substs", cb(a, l) || "").C("mp2_track", "" + g, 43200), f = b.Tg(l), Ua(a, c).params("__ym", f ? "mp_trackid" : "mp_trackid_bad", g)) : (b.Xj(), e.Gb("mp2_substs").Gb("mp2_track"))
                    });
                    return B(I("ph.fc", Sd), null, a,
                        c.id, !1)
                }),
                zo = I("up.int", function(a, c) {
                    return C(a, "up.c", function(b, d, e) {
                        var f, g = Ua(a, c),
                            l = eg(a).warn;
                        g ? ec(b) ? (b = (f = {}, f.__ymu = b, f), (f = g.params) && f(b, d || J, e)) : l("Wrong user params") : l("No counter instance found")
                    })
                }),
                Ao = I("trigger.in", function(a, c) {
                    c.ph && Z(a, V([a, "yacounter" + c.id + "inited"], hl), 0, "t.i")
                }),
                Bo = I("destruct.e", function(a, c, b) {
                    return function() {
                        var d = X(a),
                            e = c.id;
                        E(function(f, g) {
                            return U(f) && C(a, "dest.fr." + g, f)()
                        }, b);
                        delete d.o("counters")[P(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                Co = ha.Pa + "//mc.yandex.ru/metrika/",
                Do = [97, 100, 118, 101, 114, 116, 46, 103, 105, 102],
                Eo = I("ad", function(a, c) {
                    if (!yc(a) && !c.Mb) {
                        var b = fc(a),
                            d = X(a),
                            e = function(p) {
                                K(p, ["2", "1"]) && d.C("adBlockEnabled", p)
                            },
                            f = b.o("isad");
                        if (f) e(f);
                        else {
                            var g = B(d.C, d, "adStatus"),
                                l = function(p) {
                                    p = p ? "1" : "2";
                                    e(p);
                                    g("complete");
                                    b.C("isad", p, 1200);
                                    return p
                                },
                                m = oa(a, "adb", c);
                            f = function() {
                                g("process");
                                var p = "" + Co + String.fromCharCode.apply(String, Do);
                                Uk(a, function() {
                                    return m({}, [p]).then(z(!1, l))["catch"](z(!0, l))
                                })
                            };
                            d.o("adStatus") || f()
                        }
                    }
                }),
                Fo = I("pa.plgn", function(a, c) {
                    var b =
                        md(a, c);
                    b && b.na.D("pluginInfo", C(a, "c.plgn", function() {
                        return ml(c, Nh)
                    }))
                }),
                Go = I("suid.int", function(a, c) {
                    return C(a, "suid.c", function(b, d, e) {
                        var f = Ua(a, c),
                            g = Ed(a);
                        db(b) || $d(a, b) ? (b = hh(["__ym", "user_id", b]), f.params(b, d || J, e)) : g.error("Incorrect user ID")
                    })
                }),
                Ho = I("guid.int", function(a, c) {
                    return C(a, "guid.c", function(b) {
                        var d = oe(a, c.Ie, c.Mb);
                        b && Cb(a, b, d);
                        return d
                    })
                }),
                Io = G(function(a, c) {
                    0 === parseFloat(w(c, "settings.c_recp")) && (a.Je.C("ymoo" + a.Zd, a.mh(eb)), a.Yd && a.Yd.destruct && a.Yd.destruct())
                }),
                Jo =
                I("wsa", function(a, c) {
                    var b = {
                            Zd: P(c),
                            Yd: Ua(a, c),
                            mh: ca(a),
                            Je: Na(a)
                        },
                        d = b.mh(eb);
                    if (b.Je.Ae) return !1;
                    var e = b.Je.o("ymoo" + b.Zd);
                    if (e && 30 > d - e) return !0;
                    Ma(Sa(b.Zd)).then(Io(b))["catch"](C(a, "d.f"));
                    return !1
                }),
                Ci = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                zi = ["webgl", "experimental-webgl"],
                xi = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Bf = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                ui = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                Ko = x(W("performance.memory.jsHeapSizeLimit"), da("concat", "")),
                Lo = Af("screen.", ["availWidth", "availHeight", "availTop"]),
                si = ["name", "lang", "localService", "voiceURI", "default"],
                zf = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                qi = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                Tc, xf = (Tc = {},
                    Tc.i = 100, Tc.n = 100, Tc.p = 500, Tc),
                Mo = z(!0, Ia),
                No = I("s.f.i", function(a, c) {
                    return Ma(Sa(P(c))).then(function(b) {
                        if (w(b, "settings.form_goals") || -1 !== O(a).href.indexOf("yagoalsforms=1")) b = [], xa(a).D(a, "click", C(a, "s.f.c", V([a, c, b], aa))), xa(a).D(a, "submit", C(a, "s.f.e", x(W("target"), V([a, c, b], Mo)))), $b(c) || Ga(a, "Form goal. Counter " + c.id + ". Init.")
                    })
                }),
                Lb = X(window);
            Lb.ib("hitParam", {});
            Lb.ib("lastReferrer", window.location.href);
            Lb.ib("getCounters", hn(window));
            je.push(Fn);
            var ji = function() {
                return function(a,
                    c, b, d) {
                    var e = this;
                    return C(window, "c.i", function() {
                        function f(h) {
                            return Te(l, m, h)(l, m)
                        }

                        function g(h) {
                            return Vl(l, m, v, h)
                        }(!window || isNaN(a) && !a) && Fe();
                        var l = window,
                            m = ll(a, Nh, c, b, d);
                        m.id || Ga(l, "Invalid Metrika id: " + m.id);
                        var p = P(m),
                            r = Lb.o("counters", {}),
                            t = [],
                            v = [Te, Ul];
                        if (r[p]) return Ga(l, "Duplicate counter " + p + " initialization"), r[p];
                        var q = !1,
                            k = Lb.o("hitParam", {});
                        k[p] && (q = !("1" !== m.ra || r[p]));
                        k[p] = 1;
                        e._webvisor = m.Tb || !1;
                        r[p] = e;
                        Lb.C("counters", r);
                        Lb.ib("counter", e);
                        k = jn(window, m);
                        t.push(k);
                        Vd(window);
                        Jo(window, m) && delete r[p];
                        f(Eo);
                        Ym(l, [Ei(yi), Fi, Gi, Ii, vi, ti, Ko, Lo, ri, ib, wi]);
                        f(an);
                        f(Ji);
                        e.replacePhones = f(yo) || J;
                        e.hit = g(bn(l, m))();
                        e.params = g(Gn(l, m))();
                        p = f(kn);
                        t.push(w(p, Ea({
                            unsubscribe: 1
                        })));
                        e.trackHash = Te(l, m, w(p, Ea({
                            ik: 1
                        })));
                        e.reachGoal = g(yf(l, m))();
                        e.experiments = g(Hn(l, m))();
                        f(Ao);
                        f(fn);
                        q || f(An);
                        f(Oh);
                        q = f(nn);
                        t.push(w(q, Ea({
                            de: 1
                        })));
                        e.notBounce = g(w(q, Ea({
                            Ej: 1
                        })))();
                        e.accurateTrackBounce = g(w(q, Ea({
                            Cc: 1
                        })))();
                        f(In);
                        q = f(qn);
                        t.push(w(q, Ea({
                            de: 1
                        })));
                        e.extLink = g(w(q, Ea({
                            Pi: 1
                        })))();
                        e.addFileExtension =
                            g(w(q, Ea({
                                ti: 1
                            })))();
                        e.file = g(w(q, Ea({
                            file: 1
                        })))();
                        e.trackLinks = g(w(q, Ea({
                            Gd: 1
                        })))();
                        t.push(Ln(l, m));
                        e.ecommerceAdd = g(Mn(l, m))();
                        e.ecommerceRemove = g(Nn(l, m))();
                        e.ecommerceDetail = g(On(l, m))();
                        e.ecommercePurchase = g(Pn(l, m))();
                        q = f(zo);
                        e.userParams = g(q || J)();
                        e.destruct = g(Bo(l, m, t))(!0, !1);
                        f(Fo);
                        f(un);
                        q = f(Go);
                        e.setUserID = g(q || J)();
                        e.getClientID = f(Ho) || J;
                        t.push(f(vn));
                        e.clickmap = g(Cn(l, m))();
                        m.Tb && f(xo);
                        f(Bn);
                        e.enableAll = g(Dn(l, m))();
                        f(No);
                        f(En);
                        f(lj)
                    })()
                }
            }();
            (function(a) {
                var c = X(a);
                if (!c.o("i")) {
                    var b =
                        zc("Wjw75ghm7fa7JW8p"),
                        d = "assessor" + ha.Cb + b;
                    if ("1" === gc(a, d) || "" + ha.Cb + b === O(a).hash) c.ib("oo", !0), c.o("stopRecorder", J)(), Ac(a, d, "1"), bc(a, {
                        src: "https://yastatic.net/metrika-static-watch/assessor-init.js"
                    });
                    c.C("i", !0);
                    xa(a).D(a, "message", z(a, Ti))
                }
            })(window);
            if (window.Ya && ji) {
                var ki = ha.Ic;
                window.Ya[ki] = ji;
                on(window);
                var li = window.Ya[ki];
                li.informer = Nj(window);
                li.counters = Lb.o("getCounters")
            }(function(a) {
                var c = w(a, "ym");
                if (c) {
                    var b = w(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = Nf(a);
                    qe(a, b, function(e) {
                        e.D(d)
                    })
                }
            })(window)
        })()
    } catch (aa) {};
}).call(this)