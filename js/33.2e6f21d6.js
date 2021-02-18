(window.webpackJsonp = window.webpackJsonp || []).push([
    [33], {
        346: function(t, a, s) {},
        378: function(t, a, s) {
            "use strict";
            var e = s(346);
            s.n(e).a
        },
        423: function(t, a, s) {
            "use strict";
            s.r(a);
            var e = {
                    name: "Post"
                },
                n = (s(378), s(18)),
                r = Object(n.a)(e, (function() {
                    var t = this,
                        a = t.$createElement,
                        s = t._self._c || a;
                    return s("Section", {
                        attrs: {
                            className: "post"
                        }
                    }, [s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "post-category"
                    }, [s("span", {
                        staticClass: "post-category-link"
                    }, [t._v(t._s(t.$page.frontmatter.category))])]), t._v(" "), s("h1", {
                        staticClass: "post-title"
                    }, [t._v(t._s(t.$page.frontmatter.title))]), t._v(" "), s("div", {
                        staticClass: "post-date"
                    }, [t._v(t._s(t._f("dateFormat")(new Date(t.$page.frontmatter.date), "D MMM YYYY")) + " "), s("span", {
                        staticClass: "separator"
                    }, [t._v("•")]), t._v(" " + t._s(t.$page.frontmatter.toread))]), t._v(" "), s("img-lazy", {
                        staticClass: "post-cover",
                        attrs: {
                            src: t.$page.frontmatter.cover
                        }
                    })], 1), t._v(" "), s("div", {
                        staticClass: "container container-small"
                    }, [s("Content")], 1)])
                }), [], !1, null, null, null);
            a.default = r.exports
        }
    }
]);