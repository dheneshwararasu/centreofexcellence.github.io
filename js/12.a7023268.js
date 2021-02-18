(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        353: function(t, a, o) {},
        396: function(t, a, o) {
            "use strict";
            var s = o(353);
            o.n(s).a
        },
        429: function(t, a, o) {
            "use strict";
            o.r(a);
            var s = {
                    name: "Footer",
                    computed: {
                        showContact: function() {
                            return "/contact/" != this.$route.path
                        }
                    },
                    mounted: function() {},
                    methods: {
                        contactLinkClicked: function(t) {
                            this.$metrika.reachGoal("click-footer-".concat(t))
                        }
                    }
                },
                i = (o(396), o(18)),
                c = Object(i.a)(s, (function() {
                    var t = this,
                        a = t.$createElement,
                        o = t._self._c || a;
                    return o("Section", {
                        class: {
                            "footer-smaller": !t.showContact
                        },
                        attrs: {
                            className: "footer"
                        }
                    }, [o("div", {
                        staticClass: "container"
                    }, [t.showContact ? o("div", {
                        staticClass: "footer-getintouch"
                    }, [o("h2", {
                        staticClass: "headline"
                    }, [t._v("Contacts")]), t._v(" "), o("a", {
                        staticClass: "underlined underlined-waved",
                        attrs: {
                            href: "/contact"
                        }
                    }, [t._v("Get In Touch")])]) : t._e(), t._v(" "), o("div", {
                        staticClass: "footer-contacts"
                    }, [o("div", {
                        staticClass: "row row-smallpadding"
                    }, [o("div", {
                        staticClass: "col col-25 col-mobile-50"
                    }, [o("strong", [t._v("Call")]), t._v(" "), o("a", {
                        attrs: {
                            href: "tel:+79953940476"
                        },
                        on: {
                            click: function(a) {
                                return t.contactLinkClicked("phone-number")
                            }
                        }
                    }, [t._v("+7 995 394-04-76")]), o("br")]), t._v(" "), o("div", {
                        staticClass: "col col-25 col-mobile-50"
                    }, [o("strong", [t._v("Write")]), t._v(" "), o("div", [o("a", {
                        staticClass: "lined",
                        attrs: {
                            href: "mailto:info@ronasit.com"
                        },
                        on: {
                            click: function(a) {
                                return t.contactLinkClicked("email")
                            }
                        }
                    }, [t._v("info@ronasit.com")])]), t._v(" "), o("div", [o("a", {
                        staticClass: "lined",
                        attrs: {
                            href: "https://t.me/ronas_it",
                            target: "_blank"
                        },
                        on: {
                            click: function(a) {
                                return t.contactLinkClicked("telegram")
                            }
                        }
                    }, [t._v("Telegram")])]), t._v(" "), o("div", [o("a", {
                        staticClass: "lined",
                        attrs: {
                            href: "https://wa.me/79953940476?text=Hi%20Ronas,%20I%20want%20you%20to%20help%20me%20with",
                            target: "_blank"
                        },
                        on: {
                            click: function(a) {
                                return t.contactLinkClicked("whatsapp")
                            }
                        }
                    }, [t._v("Whatsapp")])])]), t._v(" "), o("div", {
                        staticClass: "col col-25 col-mobile-50"
                    }, [o("strong", [t._v("Omsk office")]), t._v(" "), o("span", [t._v("\n            644099"), o("br"), t._v("\n            Gagarina st. 14, office 405"), o("br"), t._v("\n            Omsk, Russia"), o("br")])]), t._v(" "), o("div", {
                        staticClass: "col col-25 col-mobile-50"
                    }, [o("strong", [t._v("Krasnodar office")]), t._v(" "), o("span", [t._v("\n            350000"), o("br"), t._v("\n            Budennogo st. 129, block A, office A3.3"), o("br"), t._v("\n            Krasnodar, Russia"), o("br")])])])]), t._v(" "), o("div", {
                        staticClass: "footer-socials"
                    }, [o("Socials")], 1), t._v(" "), o("div", {
                        staticClass: "row row-smallpadding footer-bottom"
                    }, [o("div", {
                        staticClass: "footer-copy"
                    }, [t._v("© 2020 Ronas IT."), o("br", {
                        staticClass: "mobile-only"
                    }), t._v(" All rights reserved.")]), t._v(" "), o("div", {
                        staticClass: "footer-policies"
                    }, [o("router-link", {
                        staticClass: "lined",
                        attrs: {
                            to: "/privacy-policy"
                        }
                    }, [t._v("Privacy Policy")])], 1)])])])
                }), [], !1, null, "836cd5f2", null);
            a.default = c.exports
        }
    }
]);