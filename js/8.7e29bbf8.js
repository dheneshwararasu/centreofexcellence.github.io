(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        348: function(s, t, a) {},
        380: function(s, t, a) {
            "use strict";
            var i = a(348);
            a.n(i).a
        },
        425: function(s, t, a) {
            "use strict";
            a.r(t);
            var i = {
                    props: {
                        link: "",
                        image: "",
                        category: "",
                        title: "",
                        date: "",
                        toread: ""
                    },
                    name: "BlogPost"
                },
                l = (a(380), a(18)),
                o = Object(l.a)(i, (function() {
                    var s = this,
                        t = s.$createElement,
                        a = s._self._c || t;
                    return a("div", {
                        staticClass: "blog-posts-item"
                    }, [a("router-link", {
                        staticClass: "blog-posts-link",
                        attrs: {
                            to: s.link
                        }
                    }), s._v(" "), a("div", {
                        staticClass: "blog-posts-image"
                    }, [a("div", {
                        staticClass: "blog-posts-wrap"
                    }, [a("img-lazy", {
                        attrs: {
                            src: s.image
                        }
                    })], 1)]), s._v(" "), a("div", {
                        staticClass: "blog-posts-details"
                    }, [a("div", {
                        staticClass: "blog-posts-category"
                    }, [a("a", {
                        staticClass: "blog-posts-category-link"
                    }, [s._v(s._s(s.category))])]), s._v(" "), a("div", {
                        staticClass: "blog-posts-title"
                    }, [s._v(s._s(s.title))]), s._v(" "), a("div", {
                        staticClass: "blog-posts-date"
                    }, [s._v(s._s(s.date) + " "), a("span", {
                        staticClass: "separator"
                    }, [s._v("•")]), s._v(" " + s._s(s.toread))])])], 1)
                }), [], !1, null, null, null);
            t.default = o.exports
        }
    }
]);