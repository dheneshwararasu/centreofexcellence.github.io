(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        437: function(e, t, a) {
            "use strict";
            a.r(t);
            var i = {
                    name: "Projects",
                    data: function() {
                        return {
                            selectedTag: "all",
                            tags: [{
                                id: "all",
                                name: "All projects"
                            }, {
                                id: "health",
                                name: "Health"
                            }, {
                                id: "fintech",
                                name: "Fintech"
                            }, {
                                id: "productivity",
                                name: "Productivity"
                            }, {
                                id: "fitness",
                                name: "Fitness"
                            }, {
                                id: "booking",
                                name: "Rental/Booking"
                            }, {
                                id: "e-commerce",
                                name: "E-Commerce"
                            }, {
                                id: "delivery",
                                name: "Delivery"
                            }, {
                                id: "illustrations",
                                name: "Illustrations"
                            }, {
                                id: "logos",
                                name: "Logos"
                            }, {
                                id: "stickers",
                                name: "Stickers"
                            }, {
                                id: "dashboard",
                                name: "Dashboard"
                            }, {
                                id: "training",
                                name: "Training"
                            }, {
                                id: "chat",
                                name: "Chat"
                            }]
                        }
                    },
                    methods: {
                        changeTag: function(e) {
                            this.selectedTag = e.id
                        }
                    }
                },
                n = a(18),
                s = Object(n.a)(i, (function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("ProjectsTitle", {
                        attrs: {
                            tags: this.tags,
                            selectedTag: this.selectedTag
                        },
                        on: {
                            tagChanged: this.changeTag
                        }
                    }), this._v(" "), t("ProjectsList", {
                        attrs: {
                            selectedTag: this.selectedTag
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = s.exports
        }
    }
]);