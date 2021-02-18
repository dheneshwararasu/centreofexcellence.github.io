(window.webpackJsonp = window.webpackJsonp || []).push([
    [27], {
        369: function(t, i, s) {},
        414: function(t, i, s) {
            "use strict";
            var e = s(369);
            s.n(e).a
        },
        448: function(t, i, s) {
            "use strict";
            s.r(i);
            var e = {
                    name: "HomeProject",
                    data: function() {
                        return {
                            extent: 1,
                            top: 1,
                            bottom: 1,
                            opacity: 1,
                            amount: 0,
                            curving: 0,
                            radius: 0,
                            aspect: 1,
                            active: !1,
                            animated: !1,
                            id: null
                        }
                    },
                    methods: {
                        scroll: function(t) {
                            if (this.$el.getBoundingClientRect()) {
                                if (this.amount = (window.innerHeight - this.$el.getBoundingClientRect().top) / window.innerHeight - .5, this.amount > .1 && this.amount < .5) {
                                    var i = this.$refs.image.getBoundingClientRect();
                                    i.right - i.left != 0 && (this.aspect = (i.bottom - i.top) / (i.right - i.left)), this.radius = (this.amount - .1) / .4 * 1.4
                                }
                                this.amount > .5 && (this.radius = 1.4), this.amount > 0 && this.amount < 1.5 ? this.active = !0 : this.active = !1, this.amount > 1 ? (this.opacity = 1 - 5 * (this.amount - 1), this.opacity < 0 && (this.opacity = 0)) : this.opacity = 1
                            }
                        }
                    },
                    mounted: function() {
                        window.addEventListener("scroll", this.scroll), this.id = this._uid
                    }
                },
                a = (s(414), s(18)),
                c = Object(a.a)(e, (function() {
                    var t = this,
                        i = t.$createElement,
                        s = t._self._c || i;
                    return s("div", {
                        staticClass: "service",
                        class: {
                            "service-active": t.active
                        }
                    }, [s("svg", {
                        attrs: {
                            width: "0",
                            height: "0"
                        }
                    }, [s("defs", [s("clipPath", {
                        attrs: {
                            id: t.id,
                            clipPathUnits: "objectBoundingBox"
                        }
                    }, [s("circle", {
                        attrs: {
                            cx: "0.5",
                            cy: "1.2",
                            r: t.radius,
                            transform: "translate(0.5 1.2) scale(" + t.aspect + " 1) translate(-0.5 -1.2)"
                        }
                    })])])]), t._v(" "), s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "row"
                    }, [s("div", {
                        staticClass: "col col-50"
                    }, [s("div", {
                        staticClass: "service-group headline"
                    }, [t._t("service-group")], 2), t._v(" "), s("div", {
                        staticClass: "service-title"
                    }, [t._t("service-title")], 2), t._v(" "), s("div", {
                        staticClass: "service-description"
                    }, [t._t("service-description")], 2)])])]), t._v(" "), s("div", {
                        staticClass: "service-preview-wrap"
                    }, [s("div", {
                        ref: "image",
                        staticClass: "service-preview",
                        style: {
                            clipPath: "url(#" + t.id + ")",
                            opacity: t.opacity
                        }
                    }, [s("a", {
                        staticClass: "service-link",
                        attrs: {
                            href: ""
                        }
                    }), t._v(" "), s("div", {
                        staticClass: "service-image"
                    }, [t._t("service-preview")], 2)])])])
                }), [], !1, null, "25b9fe30", null);
            i.default = c.exports
        }
    }
]);