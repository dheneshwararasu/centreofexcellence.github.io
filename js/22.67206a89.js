(window.webpackJsonp = window.webpackJsonp || []).push([
    [22], {
        364: function(t, e, c) {},
        409: function(t, e, c) {
            "use strict";
            var i = c(364);
            c.n(i).a
        },
        439: function(t, e, c) {
            "use strict";
            c.r(e);
            c(80);
            var i = {
                    name: "HomeProject",
                    props: ["name", "large", "href", "backgroundLight", "backgroundDark", "visible"],
                    data: function() {
                        return {
                            amount: 0,
                            active: !1,
                            id: null
                        }
                    },
                    methods: {
                        scroll: function() {
                            this.amount = (window.innerHeight - this.$el.getBoundingClientRect().top) / window.innerHeight, this.active = this.amount > 0
                        },
                        projectLinkClicked: function() {
                            this.$metrika.reachGoal("click-projects-".concat(this.name))
                        }
                    },
                    mounted: function() {
                        window.addEventListener("scroll", this.scroll), this.id = this._uid
                    }
                },
                s = (c(409), c(18)),
                r = Object(s.a)(i, (function() {
                    var t = this,
                        e = t.$createElement,
                        c = t._self._c || e;
                    return c("div", {
                        staticClass: "projects-project",
                        class: {
                            "projects-project-active": t.active, "projects-project-large": t.large, hidden: !t.visible
                        }
                    }, [c("span", {
                        staticClass: "projects-project-background light-only",
                        style: "background:" + t.backgroundLight + ";"
                    }), t._v(" "), c("span", {
                        staticClass: "projects-project-background dark-only",
                        style: "background:" + t.backgroundDark + ";"
                    }), t._v(" "), c("a", {
                        staticClass: "projects-project-link",
                        attrs: {
                            href: t.href,
                            target: "_blank"
                        },
                        on: {
                            click: function(e) {
                                return t.projectLinkClicked()
                            }
                        }
                    }), t._v(" "), c("div", {
                        staticClass: "projects-project-image"
                    }, [c("div", {
                        staticClass: "projects-project-wrap"
                    }, [t._t("project-preview")], 2)]), t._v(" "), c("div", {
                        staticClass: "projects-project-details"
                    }, [c("div", {
                        staticClass: "projects-project-title"
                    }, [t._t("project-title")], 2), t._v(" "), c("div", {
                        staticClass: "projects-project-description"
                    }, [t._t("project-description")], 2), t._v(" "), c("div", {
                        staticClass: "projects-project-tags"
                    }, [t._t("project-tags")], 2)])])
                }), [], !1, null, "0e4362d4", null);
            e.default = r.exports
        }
    }
]);