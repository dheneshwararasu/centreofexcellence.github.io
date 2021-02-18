(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        354: function(t, e, s) {},
        397: function(t, e, s) {
            "use strict";
            var a = s(354);
            s.n(a).a
        },
        430: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = {
                    name: "Header",
                    data: function() {
                        return {
                            scrolled: !1
                        }
                    },
                    methods: {
                        scroll: function(t) {
                            window.scrollY > 100 ? this.scrolled = !0 : this.scrolled = !1
                        },
                        hideMenu: function() {
                            console.log("click handler fired"), document.getElementById("menu-checkbox").checked = !1
                        }
                    },
                    mounted: function() {
                        window.addEventListener("scroll", this.scroll)
                    }
                },
                i = (s(397), s(18)),
                n = Object(i.a)(a, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", [s("header", {
                        class: ["header", {
                            "header-scrolled": t.scrolled
                        }]
                    }, [t._m(0), t._v(" "), s("div", {
                        staticClass: "container container-large"
                    }, [s("ul", {
                        staticClass: "header-menu"
                    }, [s("li", {
                        staticClass: "header-item"
                    }, [s("router-link", {
                        staticClass: "header-link",
                        attrs: {
                            "active-class": "header-link-active",
                            to: "/services"
                        }
                    }, [t._v("Services")])], 1), t._v(" "), s("li", {
                        staticClass: "header-item"
                    }, [s("router-link", {
                        staticClass: "header-link",
                        attrs: {
                            "active-class": "header-link-active",
                            to: "/projects"
                        }
                    }, [t._v("Projects")])], 1), t._v(" "), s("li", {
                        staticClass: "header-item"
                    }, [s("router-link", {
                        staticClass: "header-link",
                        attrs: {
                            "active-class": "header-link-active",
                            to: "/about"
                        }
                    }, [t._v("About")])], 1), t._v(" "), s("li", {
                        staticClass: "header-item"
                    }, [s("router-link", {
                        staticClass: "header-link",
                        attrs: {
                            "active-class": "header-link-active",
                            to: "/blog"
                        }
                    }, [t._v("Blog")])], 1), t._v(" "), t._m(1), t._v(" "), t._m(2)])]), t._v(" "), t._m(3), t._v(" "), s("div", {
                        staticClass: "menu"
                    }, [s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "menu-main"
                    }, [s("div", {
                        staticClass: "row"
                    }, [s("div", {
                        staticClass: "col col-33 menu-menu"
                    }, [s("h3", {
                        staticClass: "headline"
                    }, [t._v("Menu")]), t._v(" "), s("ul", [s("img-lazy", {
                        staticClass: "menu-img",
                        attrs: {
                            src: "/img/menu.jpg",
                            srcset: "/img/menu.jpg 1000w, /img/blank.png 10w",
                            sizes: "(max-width: 767px) 5px, 30vw"
                        }
                    }), t._v(" "), s("li", [s("router-link", {
                        staticClass: "menu-item",
                        attrs: {
                            to: "/services",
                            "active-class": "menu-item-active"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.hideMenu(e)
                            }
                        }
                    }, [s("img-lazy", {
                        staticClass: "menu-img",
                        attrs: {
                            src: "/img/menu-services.jpg",
                            srcset: "/img/menu-services.jpg 1000w, /img/blank.png 10w",
                            sizes: "(max-width: 767px) 5px, 30vw"
                        }
                    }), t._v("\n                        Services\n                    ")], 1)], 1), t._v(" "), s("li", [s("router-link", {
                        staticClass: "menu-item",
                        attrs: {
                            to: "/projects",
                            "active-class": "menu-item-active"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.hideMenu(e)
                            }
                        }
                    }, [s("img-lazy", {
                        staticClass: "menu-img dark-only",
                        attrs: {
                            src: "/img/menu-projects.jpg",
                            srcset: "/img/menu-projects.jpg 1000w, /img/blank.png 10w",
                            sizes: "(max-width: 767px) 5px, 30vw"
                        }
                    }), t._v(" "), s("img-lazy", {
                        staticClass: "menu-img light-only",
                        attrs: {
                            src: "/img/menu-projects-light.jpg",
                            srcset: "/img/menu-projects-light.jpg 1000w, /img/blank.png 10w",
                            sizes: "(max-width: 767px) 5px, 30vw"
                        }
                    }), t._v("\n                      Projects\n                    ")], 1)], 1), t._v(" "), s("li", [s("router-link", {
                        staticClass: "menu-item",
                        attrs: {
                            to: "/about",
                            "active-class": "menu-item-active"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.hideMenu(e)
                            }
                        }
                    }, [s("img-lazy", {
                        staticClass: "menu-img",
                        attrs: {
                            src: "/img/menu.jpg",
                            srcset: "/img/menu.jpg 1000w, /img/blank.png 100w",
                            sizes: "(max-width: 767px) 5px, 30vw"
                        }
                    }), t._v("\n                        About\n                    ")], 1)], 1), t._v(" "), s("li", [s("router-link", {
                        staticClass: "menu-item",
                        attrs: {
                            to: "/blog",
                            "active-class": "menu-item-active"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.hideMenu(e)
                            }
                        }
                    }, [s("img-lazy", {
                        staticClass: "menu-img",
                        attrs: {
                            src: "/img/menu-blog.jpg",
                            srcset: "/img/menu-blog.jpg 1000w, /img/blank.png 10w",
                            sizes: "(max-width: 767px) 5px, 30vw"
                        }
                    }), t._v("\n                        Blog\n                    ")], 1)], 1), t._v(" "), s("li", [s("router-link", {
                        staticClass: "menu-item",
                        attrs: {
                            to: "/contact",
                            "active-class": "menu-item-active"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.hideMenu(e)
                            }
                        }
                    }, [s("img-lazy", {
                        staticClass: "menu-img",
                        attrs: {
                            src: "/img/menu-contacts.jpg",
                            srcset: "/img/menu-contacts.jpg 1000w, /img/blank.png 10w",
                            sizes: "(max-width: 767px) 5px, 30vw"
                        }
                    }), t._v("\n                        Contacts\n                    ")], 1)], 1)], 1)]), t._v(" "), t._m(4)])]), t._v(" "), t._m(5)])])]), t._v(" "), s("Button", {
                        attrs: {
                            href: "/contact",
                            variant: "filled header-estimate"
                        }
                    }, [t._v("Estimate Project")])], 1)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        staticClass: "header-logo",
                        attrs: {
                            href: "/"
                        }
                    }, [e("span", {
                        staticClass: "header-logo-img"
                    }), this._v(" "), e("span", {
                        staticClass: "header-logo-text"
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", {
                        staticClass: "header-item header-theme"
                    }, [e("label", {
                        attrs: {
                            for: "theme-checkbox"
                        }
                    }, [e("span", {
                        staticClass: "header-theme-icon header-theme-icon-light"
                    }), this._v(" "), e("span", {
                        staticClass: "header-theme-icon header-theme-icon-dark"
                    })])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", {
                        staticClass: "header-item header-lang"
                    }, [e("div", {
                        staticClass: "header-lang-dropdown"
                    }, [e("button", {
                        staticClass: "header-lang-trigger"
                    }, [this._v("En "), e("span", {
                        staticClass: "icon icon-mask icon-dropdown"
                    })]), this._v(" "), e("div", {
                        staticClass: "header-lang-content"
                    }, [e("span", {
                        staticClass: "header-lang-item"
                    }, [this._v("En")]), this._v(" "), e("a", {
                        staticClass: "header-lang-item"
                    }, [this._v("Ru")])])])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("label", {
                        staticClass: "header-menu-toggle",
                        attrs: {
                            for: "menu-checkbox"
                        }
                    }, [e("span", {
                        staticClass: "header-menu-bars"
                    }), this._v(" "), e("span", {
                        staticClass: "header-menu-close"
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "col col-33 menu-supplements"
                    }, [s("div", {
                        staticClass: "menu-getintouch"
                    }, [s("h3", {
                        staticClass: "headline"
                    }, [t._v("Get in touch")]), t._v(" "), s("a", {
                        staticClass: "underlined underlined-waved",
                        attrs: {
                            href: "mailto:info@ronasit.com"
                        }
                    }, [t._v("info@ronasit.com")])]), t._v(" "), s("div", {
                        staticClass: "menu-theme"
                    }, [s("h3", {
                        staticClass: "headline"
                    }, [t._v("UI Theme")]), t._v(" "), s("label", {
                        staticClass: "menu-theme-switch",
                        attrs: {
                            for: "theme-checkbox"
                        }
                    }, [s("span", {
                        staticClass: "menu-theme-label"
                    }, [t._v("Dark")]), t._v(" "), s("span", {
                        staticClass: "menu-theme-label"
                    }, [t._v("Light")])])])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "menu-footer"
                    }, [e("span", [this._v("English")]), this._v(" / "), e("a", {
                        attrs: {
                            href: "/ru"
                        }
                    }, [this._v("Russian")])])
                }], !1, null, null, null);
            e.default = n.exports
        }
    }
]);