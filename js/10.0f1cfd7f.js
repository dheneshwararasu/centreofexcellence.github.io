(window.webpackJsonp = window.webpackJsonp || []).push([
    [10], {
        351: function(e, t, i) {},
        394: function(e, t, i) {
            "use strict";
            var o = i(351);
            i.n(o).a
        },
        427: function(e, t, i) {
            "use strict";
            i.r(t);
            var o = {
                    name: "CookiesNotification",
                    data: function() {
                        return {
                            areCookiesAccepted: !0
                        }
                    },
                    mounted: function() {
                        this.areCookiesAccepted = "true" === window.localStorage.getItem("areCookiesAccepted")
                    },
                    methods: {
                        acceptCookies: function() {
                            this.areCookiesAccepted = !0, window.localStorage.setItem("areCookiesAccepted", "true")
                        }
                    }
                },
                n = (i(394), i(18)),
                s = Object(n.a)(o, (function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "cookies-notification",
                        class: {
                            hidden: e.areCookiesAccepted
                        }
                    }, [e._m(0), e._v(" "), i("div", {
                        staticClass: "cookies-notification-actions"
                    }, [i("Button", {
                        attrs: {
                            type: "link",
                            variant: "filled"
                        },
                        on: {
                            click: function(t) {
                                return e.acceptCookies()
                            }
                        }
                    }, [e._v("Accept Cookies")])], 1)])
                }), [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "cookies-notification-text"
                    }, [this._v("\n    We use cookies to enable necessary site functionality, to provide the best possible user experience, and to tailor future communications."), t("br"), this._v(" \n    By using this website, you agree to the use of cookies as outlined in Ronas IT’s online "), t("a", {
                        attrs: {
                            href: "/privacy-policy",
                            target: "_blank"
                        }
                    }, [this._v("Privacy Policy")])])
                }], !1, null, null, null);
            t.default = s.exports
        }
    }
]);