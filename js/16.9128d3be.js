(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        357: function(t, i, e) {},
        400: function(t, i, e) {
            "use strict";
            var a = e(357);
            e.n(a).a
        },
        432: function(t, i, e) {
            "use strict";
            e.r(i);
            e(80);
            var a = {
                    props: ["name", "link"],
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
                                if (this.amount = (window.innerHeight - this.$el.getBoundingClientRect().top) / window.innerHeight - .5, this.amount > 0 && this.amount < .4) {
                                    var i = this.$refs.image.getBoundingClientRect();
                                    i.right - i.left != 0 && (this.aspect = (i.bottom - i.top) / (i.right - i.left)), this.radius = (this.amount - 0) / .4 * 1.4
                                }
                                this.amount > .4 && (this.radius = 1.4), this.amount > 0 && this.amount < 1.5 ? this.active = !0 : this.active = !1, this.amount > 1 ? (this.opacity = 1 - 2 * (this.amount - 1), this.opacity < 0 && (this.opacity = 0)) : this.opacity = 1
                            }
                        },
                        moreLinkClicked: function() {
                            this.$metrika.reachGoal("click-main-".concat(this.name, "-more"))
                        }
                    },
                    mounted: function() {
                        window.addEventListener("scroll", this.scroll), this.id = this._uid
                    }
                },
                s = (e(400), e(18)),
                c = Object(s.a)(a, (function() {
                    var t = this,
                        i = t.$createElement,
                        e = t._self._c || i;
                    return e("div", {
                        staticClass: "project",
                        class: {
                            "project-active": t.active
                        }
                    }, [e("svg", {
                        attrs: {
                            width: "0",
                            height: "0"
                        }
                    }, [e("defs", [e("clipPath", {
                        attrs: {
                            id: t.id,
                            clipPathUnits: "objectBoundingBox"
                        }
                    }, [e("circle", {
                        attrs: {
                            cx: "0.5",
                            cy: "1.2",
                            r: t.radius,
                            transform: "translate(0.5 1.2) scale(" + t.aspect + " 1) translate(-0.5 -1.2)"
                        }
                    })])])]), t._v(" "), e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-50"
                    }, [e("div", {
                        staticClass: "project-title headline"
                    }, [t._t("project-title")], 2), t._v(" "), e("div", {
                        staticClass: "project-description"
                    }, [t._t("project-description")], 2), t._v(" "), e("div", {
                        staticClass: "project-tags"
                    }, [t._t("project-tags")], 2), t._v(" "), e("Button", {
                        staticClass: "more",
                        attrs: {
                            href: t.link,
                            target: "_blank"
                        },
                        on: {
                            click: function(i) {
                                return t.moreLinkClicked()
                            }
                        }
                    }, [t._v("View more")])], 1)])]), t._v(" "), e("div", {
                        staticClass: "project-preview-wrap"
                    }, [e("div", {
                        ref: "image",
                        staticClass: "project-preview",
                        style: {
                            clipPath: "url(#" + t.id + ")",
                            opacity: t.opacity
                        }
                    }, [e("a", {
                        staticClass: "project-link",
                        attrs: {
                            target: "_blank",
                            href: t.link
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "project-image"
                    }, [t._t("project-preview")], 2)])])])
                }), [], !1, null, "5b01a66e", null);
            i.default = c.exports
        }
    }
]);