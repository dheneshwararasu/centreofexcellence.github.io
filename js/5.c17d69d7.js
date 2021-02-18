(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        350: function(e, r, t) {},
        382: function(e, r, t) {
            "use strict";
            var s = t(3),
                a = t(40).every,
                o = t(41),
                n = t(26),
                i = o("every"),
                c = n("every");
            s({
                target: "Array",
                proto: !0,
                forced: !i || !c
            }, {
                every: function(e) {
                    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        383: function(e, r, t) {
            "use strict";
            var s = t(3),
                a = t(384),
                o = t(15),
                n = t(20),
                i = t(55),
                c = t(113);
            s({
                target: "Array",
                proto: !0
            }, {
                flat: function() {
                    var e = arguments.length ? arguments[0] : void 0,
                        r = o(this),
                        t = n(r.length),
                        s = c(r, 0);
                    return s.length = a(s, r, r, t, 0, void 0 === e ? 1 : i(e)), s
                }
            })
        },
        384: function(e, r, t) {
            "use strict";
            var s = t(42),
                a = t(20),
                o = t(60),
                n = function(e, r, t, i, c, d, m, l) {
                    for (var v, f = c, u = 0, p = !!m && o(m, l, 3); u < i;) {
                        if (u in t) {
                            if (v = p ? p(t[u], u, r) : t[u], d > 0 && s(v)) f = n(e, r, v, a(v.length), f, d - 1) - 1;
                            else {
                                if (f >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                                e[f] = v
                            }
                            f++
                        }
                        u++
                    }
                    return f
                };
            e.exports = n
        },
        385: function(e, r, t) {
            "use strict";
            var s = t(3),
                a = t(40).some,
                o = t(41),
                n = t(26),
                i = o("some"),
                c = n("some");
            s({
                target: "Array",
                proto: !0,
                forced: !i || !c
            }, {
                some: function(e) {
                    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        386: function(e, r, t) {
            "use strict";
            var s = t(3),
                a = t(112),
                o = t(55),
                n = t(20),
                i = t(15),
                c = t(113),
                d = t(63),
                m = t(61),
                l = t(26),
                v = m("splice"),
                f = l("splice", {
                    ACCESSORS: !0,
                    0: 0,
                    1: 2
                }),
                u = Math.max,
                p = Math.min;
            s({
                target: "Array",
                proto: !0,
                forced: !v || !f
            }, {
                splice: function(e, r) {
                    var t, s, m, l, v, f, h = i(this),
                        S = n(h.length),
                        g = a(e, S),
                        y = arguments.length;
                    if (0 === y ? t = s = 0 : 1 === y ? (t = 0, s = S - g) : (t = y - 2, s = p(u(o(r), 0), S - g)), S + t - s > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
                    for (m = c(h, s), l = 0; l < s; l++)(v = g + l) in h && d(m, l, h[v]);
                    if (m.length = s, t < s) {
                        for (l = g; l < S - s; l++) f = l + t, (v = l + s) in h ? h[f] = h[v] : delete h[f];
                        for (l = S; l > S - s + t; l--) delete h[l - 1]
                    } else if (t > s)
                        for (l = S - s; l > g; l--) f = l + t - 1, (v = l + s - 1) in h ? h[f] = h[v] : delete h[f];
                    for (l = 0; l < t; l++) h[l + g] = arguments[l + 2];
                    return h.length = S - s + t, m
                }
            })
        },
        387: function(e, r, t) {
            t(81)("flat")
        },
        388: function(e, r, t) {
            var s = t(3),
                a = t(389).values;
            s({
                target: "Object",
                stat: !0
            }, {
                values: function(e) {
                    return a(e)
                }
            })
        },
        389: function(e, r, t) {
            var s = t(10),
                a = t(59),
                o = t(21),
                n = t(83).f,
                i = function(e) {
                    return function(r) {
                        for (var t, i = o(r), c = a(i), d = c.length, m = 0, l = []; d > m;) t = c[m++], s && !n.call(i, t) || l.push(e ? [t, i[t]] : i[t]);
                        return l
                    }
                };
            e.exports = {
                entries: i(!0),
                values: i(!1)
            }
        },
        390: function(e, r, t) {
            var s = t(3),
                a = t(10);
            s({
                target: "Object",
                stat: !0,
                forced: !a,
                sham: !a
            }, {
                defineProperties: t(192)
            })
        },
        391: function(e, r, t) {
            var s = t(3),
                a = t(4),
                o = t(21),
                n = t(29).f,
                i = t(10),
                c = a((function() {
                    n(1)
                }));
            s({
                target: "Object",
                stat: !0,
                forced: !i || c,
                sham: !i
            }, {
                getOwnPropertyDescriptor: function(e, r) {
                    return n(o(e), r)
                }
            })
        },
        392: function(e, r, t) {
            "use strict";
            var s = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
            r.validate = function(e) {
                if (!e) return !1;
                if (e.length > 254) return !1;
                if (!s.test(e)) return !1;
                var r = e.split("@");
                return !(r[0].length > 64) && !r[1].split(".").some((function(e) {
                    return e.length > 63
                }))
            }
        },
        393: function(e, r, t) {
            "use strict";
            var s = t(350);
            t.n(s).a
        },
        420: function(e, r, t) {
            "use strict";
            t.r(r);
            t(194), t(382), t(383), t(120), t(62), t(385), t(386), t(387), t(64), t(80), t(14), t(388), t(30), t(35), t(195), t(43), t(34), t(56), t(390), t(121), t(391), t(193), t(84), t(57);
            var s = t(110);

            function a(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    r && (s = s.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, s)
                }
                return t
            }

            function o(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? a(Object(t), !0).forEach((function(r) {
                        Object(s.a)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            t(119);
            var n = t(74),
                i = t(392),
                c = t.n(i),
                d = {
                    name: "Contact",
                    data: function() {
                        return {
                            form: null,
                            formErrors: null,
                            isFormSubmitted: !1,
                            isFormSent: !1
                        }
                    },
                    computed: {
                        isAttachmentsLoading: function() {
                            return !!this.form.attachments.length && this.form.attachments.some((function(e) {
                                return e.isLoading
                            }))
                        }
                    },
                    created: function() {
                        this.resetForm(), this.resetFormErrors()
                    },
                    watch: {
                        "form.name": function() {
                            this.validateForm()
                        },
                        "form.email": function() {
                            this.validateForm()
                        },
                        "form.message": function() {
                            this.validateForm()
                        },
                        "form.isPrivacyPolicyAccepted": function() {
                            this.validateForm()
                        }
                    },
                    methods: {
                        scrollToFirstError: function() {
                            var e = this.$el.querySelector(".form-error");
                            e && e.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            })
                        },
                        onFormSubmit: function(e) {
                            var r = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                var s, a, n;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.preventDefault(), r.isFormSubmitted = !0, r.resetFormErrors(), r.validateForm(), Object.values(r.formErrors).flat().map((function(e) {
                                                    return Object.values(e)
                                                })).flat().every((function(e) {
                                                    return !e
                                                }))) {
                                                t.next = 8;
                                                break
                                            }
                                            return setTimeout((function() {
                                                r.scrollToFirstError()
                                            })), t.abrupt("return");
                                        case 8:
                                            return s = o({}, r.form), r.resetForm(), r.resetFormErrors(), r.isFormSent = !0, r.isFormSubmitted = !1, a = r.$firebase.functions(), n = a.httpsCallable("sendEmailToServiceDesk"), t.next = 17, n(s);
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        detectFiles: function(e) {
                            var r = this;
                            this.resetIsFormSent(), Array.from(Array(e.length).keys()).map((function(t) {
                                r.uploadAttachment(e[t])
                            }))
                        },
                        uploadAttachment: function(e) {
                            var r = this,
                                t = this.form.attachments.push({
                                    name: e.name,
                                    isLoading: !0
                                }) - 1,
                                s = this.$firebase.storage().ref("website/".concat((new Date).valueOf(), "_").concat(e.name)).put(e);
                            s.on("state_changed", null, null, Object(n.a)(regeneratorRuntime.mark((function e() {
                                var a;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (void 0 === r.form.attachments[t]) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 3, s.snapshot.ref.getDownloadURL();
                                        case 3:
                                            a = e.sent, r.form.attachments[t].isLoading = !1, r.form.attachments[t].downloadURL = a;
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))))
                        },
                        removeAttachment: function(e) {
                            this.form.attachments.splice(e, 1)
                        },
                        resetForm: function() {
                            this.form = {
                                neededServices: [],
                                name: "",
                                email: "",
                                message: "",
                                budget: "",
                                isPrivacyPolicyAccepted: !1,
                                sendNDA: !1,
                                attachments: []
                            }
                        },
                        resetFormErrors: function() {
                            this.formErrors = {
                                name: {
                                    required: !1
                                },
                                email: {
                                    required: !1,
                                    invalid: !1
                                },
                                message: {
                                    required: !1
                                },
                                isPrivacyPolicyAccepted: {
                                    required: !1
                                }
                            }
                        },
                        validateForm: function() {
                            this.formErrors.name.required = !this.form.name, this.formErrors.email.required = !this.form.email, this.formErrors.email.invalid = !c.a.validate(this.form.email), this.formErrors.message.required = !this.form.message, this.formErrors.isPrivacyPolicyAccepted.required = !this.form.isPrivacyPolicyAccepted
                        },
                        resetIsFormSent: function() {
                            this.isFormSent = !1
                        }
                    }
                },
                m = (t(393), t(18)),
                l = Object(m.a)(d, (function() {
                    var e = this,
                        r = e.$createElement,
                        t = e._self._c || r;
                    return t("div", [t("div", {
                        staticClass: "contact",
                        class: {
                            "contact-hidden": e.isFormSent
                        }
                    }, [t("div", {
                        staticClass: "container"
                    }, [t("div", {
                        staticClass: "row"
                    }, [t("div", {
                        staticClass: "col col-50"
                    }, [t("div", {
                        staticClass: "page-title"
                    }, [t("Content", {
                        attrs: {
                            "slot-key": "title"
                        }
                    })], 1)])]), e._v(" "), t("form", {
                        on: {
                            submit: e.onFormSubmit
                        }
                    }, [t("input", {
                        staticClass: "contact-form-type",
                        attrs: {
                            type: "radio",
                            name: "formtype",
                            id: "work",
                            checked: ""
                        }
                    }), e._v(" "), t("input", {
                        staticClass: "contact-form-type",
                        attrs: {
                            type: "radio",
                            name: "formtype",
                            id: "sayhi"
                        }
                    }), e._v(" "), e._m(0), e._v(" "), t("div", {
                        staticClass: "form contact-form"
                    }, [t("div", {
                        staticClass: "form-group contact-services"
                    }, [t("div", {
                        staticClass: "form-label"
                    }, [e._v("I need")]), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "branding",
                            value: "Branding"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "Branding") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = e._i(t, "Branding");
                                    s.checked ? o < 0 && e.$set(e.form, "neededServices", t.concat(["Branding"])) : o > -1 && e.$set(e.form, "neededServices", t.slice(0, o).concat(t.slice(o + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("Branding")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "webdesign",
                            value: "Web design"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "Web design") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "Web design",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("Web design")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "appdesign",
                            value: "App design"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "App design") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "App design",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("App design")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "illustrations",
                            value: "Illustrations"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "Illustrations") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "Illustrations",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("Illustrations")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "html",
                            value: "HTML/CSS coding"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "HTML/CSS coding") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "HTML/CSS coding",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("HTML/CSS coding")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "ios",
                            value: "iOS Development"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "iOS Development") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "iOS Development",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("iOS Dev"), t("span", {
                        staticClass: "desktop-only"
                    }, [e._v("elopment")])])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "android",
                            value: "Site from Scratch"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "Site from Scratch") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "Site from Scratch",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("Site from scratch")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "android",
                            value: "App from Scratch"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "App from Scratch") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "App from Scratch",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("App from scratch")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "android",
                            value: "Android Development"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "Android Development") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "Android Development",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("Android Dev"), t("span", {
                        staticClass: "desktop-only"
                    }, [e._v("elopment")])])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "backend",
                            value: "Backend development"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "Backend development") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = "Backend development",
                                        n = e._i(t, o);
                                    s.checked ? n < 0 && e.$set(e.form, "neededServices", t.concat([o])) : n > -1 && e.$set(e.form, "neededServices", t.slice(0, n).concat(t.slice(n + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("Backend dev"), t("span", {
                        staticClass: "desktop-only"
                    }, [e._v("elopment")])])], 1), e._v(" "), t("label", {
                        staticClass: "contact-checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.neededServices,
                            expression: "form.neededServices"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "consulting",
                            value: "Other"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.neededServices) ? e._i(e.form.neededServices, "Other") > -1 : e.form.neededServices
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.neededServices,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = e._i(t, "Other");
                                    s.checked ? o < 0 && e.$set(e.form, "neededServices", t.concat(["Other"])) : o > -1 && e.$set(e.form, "neededServices", t.slice(0, o).concat(t.slice(o + 1)))
                                } else e.$set(e.form, "neededServices", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), t("Option", [e._v("Other")])], 1)]), e._v(" "), t("div", {
                        staticClass: "row"
                    }, [t("div", {
                        staticClass: "col col-50"
                    }, [t("div", {
                        staticClass: "form-group",
                        class: {
                            "form-hasinput": e.form.name
                        }
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.name,
                            expression: "form.name"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            id: "name"
                        },
                        domProps: {
                            value: e.form.name
                        },
                        on: {
                            change: function(r) {
                                return e.resetIsFormSent()
                            },
                            input: function(r) {
                                r.target.composing || e.$set(e.form, "name", r.target.value)
                            }
                        }
                    }), e._v(" "), t("label", {
                        staticClass: "form-label",
                        attrs: {
                            for: "name"
                        }
                    }, [e._v("Your name")]), e._v(" "), e.isFormSubmitted && e.formErrors.name.required ? t("div", {
                        staticClass: "form-error"
                    }, [e._v("Please enter a valid email address")]) : e._e()])]), e._v(" "), t("div", {
                        staticClass: "col col-50"
                    }, [t("div", {
                        staticClass: "form-group",
                        class: {
                            "form-hasinput": e.form.email
                        }
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.email,
                            expression: "form.email"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            id: "email"
                        },
                        domProps: {
                            value: e.form.email
                        },
                        on: {
                            change: function(r) {
                                return e.resetIsFormSent()
                            },
                            input: function(r) {
                                r.target.composing || e.$set(e.form, "email", r.target.value)
                            }
                        }
                    }), e._v(" "), t("label", {
                        staticClass: "form-label",
                        attrs: {
                            for: "email"
                        }
                    }, [e._v("Your Email")]), e._v(" "), e.isFormSubmitted && (e.formErrors.email.required || e.formErrors.email.invalid) ? t("div", {
                        staticClass: "form-error"
                    }, [e._v("Please enter a valid email address")]) : e._e()])])]), e._v(" "), t("div", {
                        staticClass: "form-group",
                        class: {
                            "form-hasinput": e.form.message
                        }
                    }, [t("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.message,
                            expression: "form.message"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            id: "message"
                        },
                        domProps: {
                            value: e.form.message
                        },
                        on: {
                            change: function(r) {
                                return e.resetIsFormSent()
                            },
                            input: function(r) {
                                r.target.composing || e.$set(e.form, "message", r.target.value)
                            }
                        }
                    }), e._v(" "), t("label", {
                        staticClass: "form-label contact-work-label",
                        attrs: {
                            for: "message"
                        }
                    }, [e._v("About your project")]), e._v(" "), t("label", {
                        staticClass: "form-label contact-sayhi-label",
                        attrs: {
                            for: "message"
                        }
                    }, [e._v("Your message")]), e._v(" "), e.isFormSubmitted && e.formErrors.message.required ? t("div", {
                        staticClass: "form-error"
                    }, [e._v("Please enter you message")]) : e._e()]), e._v(" "), t("div", {
                        staticClass: "form-group contact-files"
                    }, [e._l(e.form.attachments, (function(r, s) {
                        return t("div", {
                            staticClass: "form-file-attachment",
                            class: {
                                loading: r.isLoading
                            }
                        }, [t("span", {
                            staticClass: "form-file-name"
                        }, [e._v(e._s(r.name))]), e._v(" "), t("a", {
                            staticClass: "form-file-delete",
                            on: {
                                click: function(r) {
                                    return e.removeAttachment(s)
                                }
                            }
                        }, [t("span", {
                            staticClass: "icon icon-cross"
                        })])])
                    })), e._v(" "), t("Button", {
                        staticClass: "form-file-button",
                        attrs: {
                            type: "file",
                            "data-fill": "#26A0F8",
                            "data-opacity": "1"
                        }
                    }, [t("input", {
                        attrs: {
                            type: "file",
                            multiple: ""
                        },
                        on: {
                            change: function(r) {
                                return e.detectFiles(r.target.files)
                            }
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "form-file-inner mouse-target"
                    }, [t("span", {
                        staticClass: "icon icon-mask icon-attach"
                    }), e._v(" Add attachment")])])], 2), e._v(" "), t("div", {
                        staticClass: "form-group contact-budget"
                    }, [t("div", {
                        staticClass: "form-label"
                    }, [e._v("Budget")]), e._v(" "), t("label", {
                        staticClass: "contact-radio"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.budget,
                            expression: "form.budget"
                        }],
                        attrs: {
                            type: "radio",
                            name: "budget",
                            value: "Less than $5k"
                        },
                        domProps: {
                            checked: e._q(e.form.budget, "Less than $5k")
                        },
                        on: {
                            change: [function(r) {
                                return e.$set(e.form, "budget", "Less than $5k")
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), e._v(" "), t("Option", [e._v("Less than $5k")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-radio"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.budget,
                            expression: "form.budget"
                        }],
                        attrs: {
                            type: "radio",
                            name: "budget",
                            value: "$5–10k"
                        },
                        domProps: {
                            checked: e._q(e.form.budget, "$5–10k")
                        },
                        on: {
                            change: [function(r) {
                                return e.$set(e.form, "budget", "$5–10k")
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), e._v(" "), t("Option", [e._v("$5–10k")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-radio"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.budget,
                            expression: "form.budget"
                        }],
                        attrs: {
                            type: "radio",
                            name: "budget",
                            value: "$10–30k"
                        },
                        domProps: {
                            checked: e._q(e.form.budget, "$10–30k")
                        },
                        on: {
                            change: [function(r) {
                                return e.$set(e.form, "budget", "$10–30k")
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), e._v(" "), t("Option", [e._v("$10–30k")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-radio"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.budget,
                            expression: "form.budget"
                        }],
                        attrs: {
                            type: "radio",
                            name: "budget",
                            value: "more than $30k"
                        },
                        domProps: {
                            checked: e._q(e.form.budget, "more than $30k")
                        },
                        on: {
                            change: [function(r) {
                                return e.$set(e.form, "budget", "more than $30k")
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), e._v(" "), t("Option", [e._v("more than $30k")])], 1), e._v(" "), t("label", {
                        staticClass: "contact-radio"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.budget,
                            expression: "form.budget"
                        }],
                        attrs: {
                            type: "radio",
                            name: "budget",
                            value: "Help me estimate",
                            checked: ""
                        },
                        domProps: {
                            checked: e._q(e.form.budget, "Help me estimate")
                        },
                        on: {
                            change: [function(r) {
                                return e.$set(e.form, "budget", "Help me estimate")
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), e._v(" "), t("Option", [e._v("Help me estimate")])], 1)]), e._v(" "), t("div", {
                        staticClass: "row contact-checks"
                    }, [t("div", {
                        staticClass: "col col-50"
                    }, [t("label", {
                        staticClass: "checkbox"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.isPrivacyPolicyAccepted,
                            expression: "form.isPrivacyPolicyAccepted"
                        }],
                        staticClass: "checkbox-input",
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.isPrivacyPolicyAccepted) ? e._i(e.form.isPrivacyPolicyAccepted, null) > -1 : e.form.isPrivacyPolicyAccepted
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.isPrivacyPolicyAccepted,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = e._i(t, null);
                                    s.checked ? o < 0 && e.$set(e.form, "isPrivacyPolicyAccepted", t.concat([null])) : o > -1 && e.$set(e.form, "isPrivacyPolicyAccepted", t.slice(0, o).concat(t.slice(o + 1)))
                                } else e.$set(e.form, "isPrivacyPolicyAccepted", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), e._v(" "), e._m(1), e._v("\n              I accept your "), t("a", {
                        attrs: {
                            href: "/privacy-policy",
                            target: "_blank"
                        }
                    }, [e._v("Privacy Policy")])]), e._v(" "), e.isFormSubmitted && e.formErrors.isPrivacyPolicyAccepted.required ? t("div", {
                        staticClass: "form-error"
                    }, [e._v("You should accept Privacy Policy")]) : e._e()]), e._v(" "), t("div", {
                        staticClass: "col col-50"
                    }, [t("label", {
                        staticClass: "checkbox contact-nda"
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.form.sendNDA,
                            expression: "form.sendNDA"
                        }],
                        staticClass: "checkbox-input",
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.form.sendNDA) ? e._i(e.form.sendNDA, null) > -1 : e.form.sendNDA
                        },
                        on: {
                            change: [function(r) {
                                var t = e.form.sendNDA,
                                    s = r.target,
                                    a = !!s.checked;
                                if (Array.isArray(t)) {
                                    var o = e._i(t, null);
                                    s.checked ? o < 0 && e.$set(e.form, "sendNDA", t.concat([null])) : o > -1 && e.$set(e.form, "sendNDA", t.slice(0, o).concat(t.slice(o + 1)))
                                } else e.$set(e.form, "sendNDA", a)
                            }, function(r) {
                                return e.resetIsFormSent()
                            }]
                        }
                    }), e._v(" "), e._m(2), e._v("\n              Send me NDA\n            ")])])]), e._v(" "), t("div", {
                        staticClass: "form-buttons"
                    }, [t("Button", {
                        attrs: {
                            type: "submit",
                            variant: "filled",
                            disabled: e.isAttachmentsLoading
                        }
                    }, [e._v("Send Request")])], 1)])])])]), e._v(" "), e.isFormSent ? t("div", {
                        staticClass: "contact-sent "
                    }, [t("div", {
                        staticClass: "container"
                    }, [t("div", {
                        staticClass: "page-title"
                    }, [t("Content", {
                        attrs: {
                            "slot-key": "success"
                        }
                    })], 1), e._v(" "), t("Button", {
                        staticClass: "more",
                        attrs: {
                            href: "https://clutch.co/profile/ronas-it#reviews",
                            target: "_blank",
                            variant: "filled header-estimate"
                        }
                    }, [e._v("See Our Clutch Reviews")])], 1)]) : e._e()])
                }), [function() {
                    var e = this.$createElement,
                        r = this._self._c || e;
                    return r("div", {
                        staticClass: "tabs"
                    }, [r("label", {
                        staticClass: "contact-tabs-work tabs-tab",
                        attrs: {
                            for: "work"
                        }
                    }, [this._v("Work with us")]), this._v(" "), r("label", {
                        staticClass: "contact-tabs-sayhi tabs-tab",
                        attrs: {
                            for: "sayhi"
                        }
                    }, [this._v("Say Hi")])])
                }, function() {
                    var e = this.$createElement,
                        r = this._self._c || e;
                    return r("span", {
                        staticClass: "checkbox-icon"
                    }, [r("span", {
                        staticClass: "icon icon-mask icon-tick"
                    })])
                }, function() {
                    var e = this.$createElement,
                        r = this._self._c || e;
                    return r("span", {
                        staticClass: "checkbox-icon"
                    }, [r("span", {
                        staticClass: "icon icon-mask icon-tick"
                    })])
                }], !1, null, null, null);
            r.default = l.exports
        }
    }
]);