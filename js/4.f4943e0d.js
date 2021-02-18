(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        328: function(t, n, e) {},
        329: function(t, n, e) {},
        330: function(t, n, e) {
            "use strict";
            var r = e(328);
            e.n(r).a
        },
        331: function(t, n, e) {
            "use strict";
            var r = e(329);
            e.n(r).a
        },
        332: function(t, n, e) {
            var r = e(190),
                i = e(183),
                o = e(333),
                a = e(337);
            t.exports = function(t, n) {
                if (null == t) return {};
                var e = r(a(t), (function(t) {
                    return [t]
                }));
                return n = i(n), o(t, e, (function(t, e) {
                    return n(t, e[0])
                }))
            }
        },
        333: function(t, n, e) {
            var r = e(118),
                i = e(334),
                o = e(111);
            t.exports = function(t, n, e) {
                for (var a = -1, s = n.length, u = {}; ++a < s;) {
                    var c = n[a],
                        p = r(t, c);
                    e(p, c) && i(u, o(c, t), p)
                }
                return u
            }
        },
        334: function(t, n, e) {
            var r = e(335),
                i = e(111),
                o = e(116),
                a = e(79),
                s = e(58);
            t.exports = function(t, n, e, u) {
                if (!a(t)) return t;
                for (var c = -1, p = (n = i(n, t)).length, l = p - 1, f = t; null != f && ++c < p;) {
                    var v = s(n[c]),
                        g = e;
                    if (c != l) {
                        var h = f[v];
                        void 0 === (g = u ? u(h, v, f) : void 0) && (g = a(h) ? h : o(n[c + 1]) ? [] : {})
                    }
                    r(f, v, g), f = f[v]
                }
                return t
            }
        },
        335: function(t, n, e) {
            var r = e(336),
                i = e(115),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t, n, e) {
                var a = t[n];
                o.call(t, n) && i(a, e) && (void 0 !== e || n in t) || r(t, n, e)
            }
        },
        336: function(t, n, e) {
            var r = e(191);
            t.exports = function(t, n, e) {
                "__proto__" == n && r ? r(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                }) : t[n] = e
            }
        },
        337: function(t, n, e) {
            var r = e(184),
                i = e(338),
                o = e(340);
            t.exports = function(t) {
                return r(t, o, i)
            }
        },
        338: function(t, n, e) {
            var r = e(114),
                i = e(339),
                o = e(185),
                a = e(186),
                s = Object.getOwnPropertySymbols ? function(t) {
                    for (var n = []; t;) r(n, o(t)), t = i(t);
                    return n
                } : a;
            t.exports = s
        },
        339: function(t, n, e) {
            var r = e(189)(Object.getPrototypeOf, Object);
            t.exports = r
        },
        340: function(t, n, e) {
            var r = e(187),
                i = e(341),
                o = e(117);
            t.exports = function(t) {
                return o(t) ? r(t, !0) : i(t)
            }
        },
        341: function(t, n, e) {
            var r = e(79),
                i = e(188),
                o = e(342),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return o(t);
                var n = i(t),
                    e = [];
                for (var s in t)("constructor" != s || !n && a.call(t, s)) && e.push(s);
                return e
            }
        },
        342: function(t, n) {
            t.exports = function(t) {
                var n = [];
                if (null != t)
                    for (var e in Object(t)) n.push(e);
                return n
            }
        },
        344: function(t, n, e) {},
        374: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return o
            }));
            e(14);
            var r = {
                    data: function() {
                        return {
                            comp: null
                        }
                    },
                    computed: {
                        page: function() {
                            return this.$pagination.paginationIndex + 1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        e.e(2).then(e.t.bind(null, 419, 7)).then((function(n) {
                            t.comp = n.default
                        }))
                    },
                    methods: {
                        clickCallback: function(t) {
                            var n = this.$pagination.getSpecificPageLink(t - 1);
                            this.$router.push(n)
                        }
                    }
                },
                i = (e(330), e(18)),
                o = Object(i.a)(r, (function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return t.comp ? e(t.comp, {
                        tag: "component",
                        attrs: {
                            value: t.page,
                            "page-count": t.$pagination.length,
                            "click-handler": t.clickCallback,
                            "prev-text": t.$pagination.prevText,
                            "next-text": t.$pagination.nextText,
                            "container-class": "pagination",
                            "page-class": "page-item"
                        }
                    }) : t._e()
                }), [], !1, null, null, null).exports,
                a = (e(331), Object(i.a)({}, (function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", {
                        staticClass: "pagination simple-pagination"
                    }, [t.$pagination.hasPrev ? e("router-link", {
                        attrs: {
                            to: t.$pagination.prevLink
                        }
                    }, [t._v("\n    " + t._s(t.$pagination.prevText) + "\n  ")]) : t._e(), t._v(" "), t.$pagination.hasNext ? e("router-link", {
                        attrs: {
                            to: t.$pagination.nextLink
                        }
                    }, [t._v("\n    " + t._s(t.$pagination.nextText) + "\n  ")]) : t._e()], 1)
                }), [], !1, null, null, null).exports, e(180), e(82)),
                s = e.n(a),
                u = e(332),
                c = e.n(u),
                p = {
                    props: {
                        title: {
                            type: [String, Function],
                            required: !1
                        },
                        issueId: {
                            type: [String, Number],
                            required: !1
                        },
                        options: {
                            type: Object,
                            required: !1
                        },
                        shortname: {
                            type: String,
                            required: !1
                        },
                        identifier: {
                            type: String,
                            required: !1
                        },
                        url: {
                            type: String,
                            required: !1
                        },
                        remote_auth_s3: {
                            type: String,
                            required: !1
                        },
                        api_key: {
                            type: String,
                            required: !1
                        },
                        sso_config: {
                            type: Object,
                            required: !1
                        },
                        language: {
                            type: String,
                            required: !1
                        }
                    },
                    computed: {
                        propsWithoutEmptyProperties: function() {
                            return c()(this.$props, s.a)
                        },
                        commentProps: function() {
                            return Object.assign({}, this.propsWithoutEmptyProperties, this.$frontmatter.comment)
                        },
                        vssueProps: function() {
                            return Object.assign({
                                title: this.$page.title
                            }, this.commentProps)
                        },
                        disqusProps: function() {
                            return Object.assign({
                                identifier: this.$page.key
                            }, this.commentProps)
                        }
                    }
                };
            Object(i.a)(p, (function() {
                var t = this.$createElement,
                    n = this._self._c || t;
                return "vssue" === this.$service.comment.service ? n("Vssue", this._b({}, "Vssue", this.vssueProps, !1)) : "disqus" === this.$service.comment.service ? n("Disqus", this._b({}, "Disqus", this.disqusProps, !1)) : this._e()
            }), [], !1, null, null, null).exports
        },
        376: function(t, n, e) {
            "use strict";
            var r = e(344);
            e.n(r).a
        },
        422: function(t, n, e) {
            "use strict";
            e.r(n);
            var r = {
                    name: "IndexPost",
                    components: {
                        Pagination: e(374).a
                    }
                },
                i = (e(376), e(18)),
                o = Object(i.a)(r, (function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("Section", {
                        attrs: {
                            className: "blog"
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("h1", {
                        staticClass: "page-title"
                    }, [t._v("Latest posts")]), t._v(" "), e("div", {
                        staticClass: "blog-posts"
                    }, t._l(t.$pagination.pages, (function(n, r) {
                        return e("BlogPost", {
                            class: {
                                large: 0 == r
                            },
                            attrs: {
                                link: n.path,
                                image: n.frontmatter.cover,
                                category: n.frontmatter.category,
                                title: n.title,
                                date: t._f("dateFormat")(new Date(n.frontmatter.date), "D MMM YYYY"),
                                toread: n.frontmatter.toread
                            }
                        })
                    })), 1)])])
                }), [], !1, null, null, null);
            n.default = o.exports
        }
    }
]);