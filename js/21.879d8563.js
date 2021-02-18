(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        363: function(t, e, r) {},
        408: function(t, e, r) {
            "use strict";
            var n = r(363);
            r.n(n).a
        },
        438: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = {
                    name: "ProjectsTitle",
                    props: ["selectedTag"]
                },
                o = (r(408), r(18)),
                s = Object(o.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "projects-list"
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "projects-list-grid"
                    }, [r("ProjectsProject", {
                        attrs: {
                            name: "self-care",
                            visible: ["all", "health"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/102596433/Self-care-Mobile-App-Design-Concept-UI-UX",
                            backgroundLight: "#2B4E47",
                            backgroundDark: "#2B4E47"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    attrs: {
                                        src: "/projects/selfcare-light.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Self-care App\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A self-care app that offers a personalized selection of guides and mentors\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("health")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "food-delivery",
                            visible: ["all", "delivery"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/104723621/Food-Delivery-Mobile-App-UIUX-Design",
                            backgroundLight: "#FB6E3B",
                            backgroundDark: "#635F5C"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/projects/fooddelivery-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/projects/fooddelivery-dark.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Food Delivery App\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          An on-demand food delivery app\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("delivery")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "stickers",
                            visible: ["all", "illustrations", "stickers"].includes(t.selectedTag),
                            large: "true",
                            href: "https://www.behance.net/gallery/92092523/Ronas-IT-Stickerpack",
                            backgroundLight: "#FFD700",
                            backgroundDark: "#082B35"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    staticClass: "light-only desktop-only",
                                    attrs: {
                                        src: "/projects/stickerpack-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only desktop-only",
                                    attrs: {
                                        src: "/projects/stickerpack-dark.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "light-only mobile-only",
                                    attrs: {
                                        src: "/projects/card-stickers-mobile-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only mobile-only",
                                    attrs: {
                                        src: "/projects/card-stickers-mobile.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Stickers\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          Telegram Sticker Pack"), r("br"), t._v("for Ronas.IT\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("illustrations")]), t._v(" "), r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("stickers")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "live-workouts",
                            visible: ["all", "fitness", "productivity"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/97844297/Live-Workouts-UIUX-Design",
                            backgroundLight: "#373D43",
                            backgroundDark: "#30353B"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/projects/workouts-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/projects/workouts-dark.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Remote Workouts\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A fitness app for remote group workouts and classes\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("fitness")]), t._v(" "), r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("productivity")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "remote-health-app",
                            visible: ["all", "health", "booking"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/96050091/UIUX-for-Remote-Health-App",
                            backgroundLight: "#BBC8C8",
                            backgroundDark: "#374444"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/projects/healthcare-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/projects/healthcare-dark.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Remote Healthcare\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A telemedicine app that offers remote healthcare services\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("health")]), t._v(" "), r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("booking")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "openi",
                            visible: ["all", "fintech"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/104308325/Openi-Fintech-Website-UIUX-Design",
                            backgroundLight: "#8FABBE",
                            backgroundDark: "#224259"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/projects/openi-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/projects/openi-dark.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Openi\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A matchmaking fintech website for entrepreneurs and investors\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("fintech")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "facta",
                            visible: ["all", "training", "dashboard"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/103472575/HR-Management-Software-UIUX-Website-for-Facta",
                            backgroundLight: "#373E45",
                            backgroundDark: "#373E45"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    attrs: {
                                        src: "/projects/card-facta.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Facta\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          An employee engagement and training web app\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("training")]), t._v(" "), r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("dashboard")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "365-day-bookings",
                            visible: ["all", "booking"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/92161091/365-days-booking-web-based-hotel-management-software",
                            backgroundLight: "#94BB7C",
                            backgroundDark: "#2F4323"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/projects/365days-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/projects/365days-dark.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          365daybookings\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A complex platform for hotel management\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("rental/booking")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "smash-moji",
                            visible: ["all", "chat"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/92100319/SmashMoji-Music-Messenger-App-Concept-UIUX",
                            backgroundLight: "#B8884B",
                            backgroundDark: "#4F412E"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/projects/smashmoji-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/projects/smashmoji-dark.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          SmashMoji\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A messenger app built around music and emojis\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("chat")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "shop-chat",
                            visible: ["all", "e-commerce"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/95144445/ShopChat-UIUX-for-Social-Shopping-App",
                            backgroundLight: "#5B4452",
                            backgroundDark: "#5B4452"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    attrs: {
                                        src: "/projects/shopchat-light.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Shopchat\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A marketplace app with a built-in a messenger\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("e-commerce")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "finance-dashboard",
                            visible: ["all", "fintech"].includes(t.selectedTag),
                            href: "https://dribbble.com/shots/13925844-Finance-Dashboard-Concept",
                            backgroundLight: "#4C4D61",
                            backgroundDark: "#4C4D61"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    attrs: {
                                        src: "/projects/dashboard-light.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Finance Dashboard\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A dashboard of a financial service\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("fintech")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "banking-app",
                            visible: ["all", "fintech"].includes(t.selectedTag),
                            href: "https://dribbble.com/shots/13819519-Banking-App-Design-Concept",
                            backgroundLight: "#878D9F",
                            backgroundDark: "#878D9F"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    attrs: {
                                        src: "/projects/wallet-light.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Wallet\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          A wallet-type app to track financial operations\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("fintech")])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), r("ProjectsProject", {
                        attrs: {
                            name: "logofolio-2019-2020",
                            visible: ["all", "logos"].includes(t.selectedTag),
                            href: "https://www.behance.net/gallery/102597423/Logofolio-2019-2020",
                            backgroundLight: "#21202E",
                            backgroundDark: "#282733"
                        },
                        scopedSlots: t._u([{
                            key: "project-preview",
                            fn: function() {
                                return [r("img-lazy", {
                                    staticClass: "light-only",
                                    attrs: {
                                        src: "/projects/logofolio-light.jpg"
                                    }
                                }), t._v(" "), r("img-lazy", {
                                    staticClass: "dark-only",
                                    attrs: {
                                        src: "/projects/logofolio-dark.jpg"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "project-title",
                            fn: function() {
                                return [t._v("\n          Logofolio\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-description",
                            fn: function() {
                                return [t._v("\n          Logofolio 2019–2020\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "project-tags",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "project-tag"
                                }, [t._v("logos")])]
                            },
                            proxy: !0
                        }])
                    })], 1)])])
                }), [], !1, null, null, null);
            e.default = s.exports
        }
    }
]);