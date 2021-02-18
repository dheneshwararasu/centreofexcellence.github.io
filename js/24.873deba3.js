(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        366: function(t, s, e) {},
        411: function(t, s, e) {
            "use strict";
            var a = e(366);
            e.n(a).a
        },
        441: function(t, s, e) {
            "use strict";
            e.r(s);
            var a = {
                    name: "RelatedPosts",
                    props: ["items"]
                },
                i = (e(411), e(18)),
                l = Object(i.a)(a, (function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "related-posts"
                    }, [e("h3", {
                        staticClass: "related-posts-heading"
                    }, [t._v("Related Posts")]), t._v(" "), e("div", {
                        staticClass: "related-posts-items"
                    }, t._l(t.items, (function(s) {
                        return e("div", {
                            staticClass: "related-posts-item"
                        }, [e("router-link", {
                            staticClass: "related-posts-link",
                            attrs: {
                                to: s.link
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "related-posts-image"
                        }, [e("img-lazy", {
                            attrs: {
                                src: s.image
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "related-posts-details"
                        }, [e("div", {
                            staticClass: "related-posts-category"
                        }, [t._v(t._s(s.category))]), t._v(" "), e("div", {
                            staticClass: "related-posts-title"
                        }, [t._v(t._s(s.title))]), t._v(" "), e("div", {
                            staticClass: "related-posts-text"
                        }), t._v(" "), e("div", {
                            staticClass: "related-posts-date"
                        }, [t._v(t._s(s.date) + " • " + t._s(s.toread))])])], 1)
                    })), 0)])
                }), [], !1, null, "745d4b3e", null);
            s.default = l.exports
        }
    }
]);