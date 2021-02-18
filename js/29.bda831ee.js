(window.webpackJsonp = window.webpackJsonp || []).push([
    [29], {
        371: function(t, e, n) {},
        416: function(t, e, n) {
            "use strict";
            var i = n(371);
            n.n(i).a
        },
        450: function(t, e, n) {
            "use strict";
            n.r(e);
            n(180);
            var i = {
                    props: {
                        count: Number,
                        root: {
                            type: Boolean,
                            default: !0
                        },
                        iteration: {
                            type: Number,
                            default: 0
                        }
                    },
                    name: "Slices",
                    computed: {
                        sliceWidth: function() {
                            return this.root ? 100 / this.count : 100
                        },
                        indent: function() {
                            return -100 * this.iteration
                        }
                    }
                },
                o = (n(416), n(18)),
                s = Object(o.a)(i, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("span", {
                        staticClass: "slice",
                        class: {
                            "slice-root": t.root
                        },
                        style: {
                            width: t.sliceWidth + "%"
                        }
                    }, [n("div", {
                        staticClass: "slice-content",
                        style: {
                            textIndent: t.indent + "%"
                        }
                    }, [t._t("default")], 2), t._v(" "), t.count > 1 ? [n("Slices", {
                        attrs: {
                            count: t.count - 1,
                            root: !1,
                            iteration: t.iteration + 1
                        }
                    }, [t._t("default")], 2)] : t._e()], 2)
                }), [], !1, null, "c7e24140", null);
            e.default = s.exports
        }
    }
]);