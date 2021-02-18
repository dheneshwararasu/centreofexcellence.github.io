(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        356: function(t, e, n) {},
        399: function(t, e, n) {
            "use strict";
            var a = n(356);
            n.n(a).a
        },
        431: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = {
                    methods: {
                        linkClicked: function() {
                            this.$metrika.reachGoal("click-main-what-we-do-more")
                        }
                    }
                },
                o = (n(399), n(18)),
                s = Object(o.a)(a, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("Section", {
                        attrs: {
                            className: "home-about",
                            background: "#eee"
                        }
                    }, [n("div", {
                        staticClass: "container fadeonscroll"
                    }, [n("h2", {
                        staticClass: "headline"
                    }, [t._v("What We Do")]), t._v(" "), n("div", {
                        staticClass: "home-about-content"
                    }, [n("Content", {
                        attrs: {
                            "slot-key": "about"
                        }
                    })], 1), t._v(" "), n("Button", {
                        staticClass: "more",
                        attrs: {
                            href: "/services"
                        },
                        on: {
                            click: function(e) {
                                return t.linkClicked()
                            }
                        }
                    }, [t._v("View More")])], 1)])
                }), [], !1, null, null, null);
            e.default = s.exports
        }
    }
]);