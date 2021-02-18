(window.webpackJsonp = window.webpackJsonp || []).push([
    [23], {
        365: function(t, e, s) {},
        410: function(t, e, s) {
            "use strict";
            var n = s(365);
            s.n(n).a
        },
        440: function(t, e, s) {
            "use strict";
            s.r(e);
            var n = {
                    name: "ProjectsTitle",
                    props: ["selectedTag", "tags"],
                    methods: {
                        selectTag: function(t) {
                            this.$emit("tagChanged", t)
                        }
                    }
                },
                a = (s(410), s(18)),
                c = Object(a.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "page-title projects-title"
                    }, [s("div", {
                        staticClass: "container"
                    }, [s("h4", {
                        staticClass: "headline"
                    }, [t._v("Projects")]), t._v(" "), s("Content", {
                        attrs: {
                            "slot-key": "title"
                        }
                    }), t._v(" "), s("div", {
                        staticClass: "projects-tags"
                    }, [t._l(t.tags, (function(e, n) {
                        return [s("Button", {
                            class: {
                                selected: e.id === t.selectedTag
                            },
                            on: {
                                click: function(s) {
                                    return t.selectTag(e)
                                }
                            }
                        }, [t._v(t._s(e.name))]), t._v(" "), 6 === n ? s("br", {
                            staticClass: "mobile-only"
                        }) : t._e()]
                    }))], 2)], 1)])
                }), [], !1, null, null, null);
            e.default = c.exports
        }
    }
]);