(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        360: function(e, i, s) {},
        403: function(e, i, s) {
            "use strict";
            var t = s(360);
            s.n(t).a
        },
        434: function(e, i, s) {
            "use strict";
            s.r(i);
            var t = {
                    name: "HomeServices",
                    props: ["service"],
                    methods: {
                        moreLinkClicked: function(e) {
                            this.$metrika.reachGoal("click-main-".concat(e, "-more"))
                        }
                    }
                },
                n = (s(403), s(18)),
                o = Object(n.a)(t, (function() {
                    var e = this,
                        i = e.$createElement,
                        s = e._self._c || i;
                    return s("div", [s("Section", {
                        attrs: {
                            className: "home-services"
                        }
                    }, [s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "row"
                    }, [s("div", {
                        staticClass: "col col-40"
                    }, [s("h2", {
                        staticClass: "fadeonscroll"
                    }, [s("div", {
                        staticClass: "home-services-number"
                    }, [e._v("01")]), e._v("\n            Design\n          ")])]), e._v(" "), s("div", {
                        staticClass: "col col-60"
                    }, [s("div", {
                        staticClass: "home-services-description fadeonscroll"
                    }, [e._v("Establishing the right visual connection with your customers and users by creating eye-catching and memorable designs as well as meaningful user experience.")]), e._v(" "), s("Button", {
                        staticClass: "more fadeonscroll",
                        attrs: {
                            href: "/services/#design"
                        },
                        on: {
                            click: function(i) {
                                return e.moreLinkClicked("design")
                            }
                        }
                    }, [e._v("View More")]), e._v(" "), s("div", {
                        staticClass: "home-services-details fadeonscroll"
                    }, [s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/websites.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Websites and Platforms")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              We design projects of different complexity and size. No matter if it is a simple single-page website or a complex admin panel with numerous dashboards - we will make it visually pleasing, consistent, and user-friendly.\n            ")]), e._v(" "), s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/mobile-apps.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Mobile Applications")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              We don’t simply design beautiful interfaces but craft them in accordance with each platforms’ guidelines to make the use of your app intuitive to users.\n            ")]), e._v(" "), s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/branding.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Strategy and Branding")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products.\n            ")]), e._v(" "), s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/concept.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Design"), s("br"), e._v("Concept")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              We’ll make a design concept for a site or mobile application to attract your audience and make your awesome product even more awesome.\n            ")])], 1)], 1)])])]), e._v(" "), s("Section", {
                        attrs: {
                            className: "home-services"
                        }
                    }, [s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "row"
                    }, [s("div", {
                        staticClass: "col col-40"
                    }, [s("h2", {
                        staticClass: "fadeonscroll"
                    }, [s("div", {
                        staticClass: "home-services-number"
                    }, [e._v("02")]), e._v("\n            Development\n          ")])]), e._v(" "), s("div", {
                        staticClass: "col col-60"
                    }, [s("div", {
                        staticClass: "home-services-description fadeonscroll"
                    }, [e._v("Implementing your project with scalable architecture design, modern technology, and an excellent level of data security.")]), e._v(" "), s("Button", {
                        staticClass: "more fadeonscroll",
                        attrs: {
                            href: "/services/#development"
                        },
                        on: {
                            click: function(i) {
                                return e.moreLinkClicked("development")
                            }
                        }
                    }, [e._v("View More")]), e._v(" "), s("div", {
                        staticClass: "home-services-details fadeonscroll"
                    }, [s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/web-services.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Web"), s("br"), e._v("Services")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              We create web products tailored exclusively for your business goals, be it a high converting landing page, a complex web app to automate your processes or a high-load platform with sensitive data.\n            ")]), e._v(" "), s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/native.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Native Mobile Development")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              We build custom mobile applications for both iOS (with Swift) and Android (with Kotlin) according to Apple and Google guidelines and can get them released to stores quickly.\n            ")]), e._v(" "), s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/hybrid.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Hybrid Mobile Development")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              With this approach we develop a single app for use on multiple platforms like Android and iOS (with React Native and Flutter).\n            ")]), e._v(" "), s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/quality.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Quality"), s("br"), e._v("Assurance")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              We safeguard your product’s quality and success and with manual and automated testing.\n            ")])], 1)], 1)])])]), e._v(" "), s("Section", {
                        attrs: {
                            className: "home-services"
                        }
                    }, [s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "row"
                    }, [s("div", {
                        staticClass: "col col-40"
                    }, [s("h2", {
                        staticClass: "fadeonscroll"
                    }, [s("div", {
                        staticClass: "home-services-number"
                    }, [e._v("03")]), e._v("\n            Maintenance\n          ")])]), e._v(" "), s("div", {
                        staticClass: "col col-60"
                    }, [s("div", {
                        staticClass: "home-services-description fadeonscroll"
                    }, [e._v("Establishing the right visual connection with your customers and users by creating eye-catching and memorable designs as well as meaningful user experience.")]), e._v(" "), s("Button", {
                        staticClass: "more fadeonscroll",
                        attrs: {
                            href: "/services/#maintenance"
                        },
                        on: {
                            click: function(i) {
                                return e.moreLinkClicked("maintainance")
                            }
                        }
                    }, [e._v("View More")]), e._v(" "), s("div", {
                        staticClass: "home-services-details fadeonscroll"
                    }, [s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/postrelease.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("Post-release support")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              We help to keep projects up to date – from technology updates to new functionality implementation.\n            ")]), e._v(" "), s("HomeService", {
                        attrs: {
                            link: "/services",
                            image: "/img/administration.jpg"
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("System Administration")]
                            },
                            proxy: !0
                        }])
                    }, [e._v("\n              Keeping your project up and running 24/7/365 is important. We make this process easy and stress-free for you.\n            ")])], 1)], 1)])])])], 1)
                }), [], !1, null, null, null);
            i.default = o.exports
        }
    }
]);