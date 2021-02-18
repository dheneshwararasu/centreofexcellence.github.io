(window.webpackJsonp = window.webpackJsonp || []).push([
    [38], {
        447: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = {
                    name: "ServicesMaintenance"
                },
                n = s(18),
                i = Object(n.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", [s("Section", {
                        attrs: {
                            className: "services-title"
                        }
                    }, [s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "row"
                    }, [s("div", {
                        staticClass: "col col-60"
                    }, [s("div", {
                        staticClass: "services-service"
                    }, [s("Content", {
                        attrs: {
                            "slot-key": "maintenance"
                        }
                    })], 1)])])])]), e._v(" "), s("ServicesService", {
                        scopedSlots: e._u([{
                            key: "service-preview",
                            fn: function() {
                                return [s("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/services/service-postrelease-dark.jpg"
                                    }
                                }), e._v(" "), s("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/services/service-postrelease-light.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "service-group",
                            fn: function() {
                                return [e._v("\n      Maintenance\n    ")]
                            },
                            proxy: !0
                        }, {
                            key: "service-title",
                            fn: function() {
                                return [e._v("\n      Post-release support\n    ")]
                            },
                            proxy: !0
                        }, {
                            key: "service-description",
                            fn: function() {
                                return [e._v("\n      We help to keep projects up to date – from technology updates to new functionality implementation.\n    ")]
                            },
                            proxy: !0
                        }])
                    }), e._v(" "), s("ServicesService", {
                        scopedSlots: e._u([{
                            key: "service-preview",
                            fn: function() {
                                return [s("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/services/service-administration-dark.jpg"
                                    }
                                }), e._v(" "), s("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/services/service-administration-light.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "service-group",
                            fn: function() {
                                return [e._v("\n      Maintenance\n    ")]
                            },
                            proxy: !0
                        }, {
                            key: "service-title",
                            fn: function() {
                                return [e._v("\n      System Administration Support\n    ")]
                            },
                            proxy: !0
                        }, {
                            key: "service-description",
                            fn: function() {
                                return [e._v("\n      Every project involves stages of target audience research and prototype testing. The result? A product that’s perfectly suited to your users.\n    ")]
                            },
                            proxy: !0
                        }])
                    })], 1)
                }), [], !1, null, null, null);
            t.default = i.exports
        }
    }
]);