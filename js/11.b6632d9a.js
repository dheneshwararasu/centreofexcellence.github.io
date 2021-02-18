(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        352: function(t, e, a) {},
        395: function(t, e, a) {
            "use strict";
            var s = a(352);
            a.n(s).a
        },
        428: function(t, e, a) {
            "use strict";
            a.r(e);
            a(56), a(57);
            var s = {
                    name: "Feedbacks",
                    data: function() {
                        return {
                            feedbacks: [{
                                rating: "5.0",
                                text: "Ronas IT demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
                                name: "Bob Glazebrook",
                                company: "Principal, Visual Engineering Inc."
                            }, {
                                rating: "5.0",
                                text: "Fantastic service. The guys went above and beyond. They also suggested improvements to my app which I really appreciated - as apposed to doing exactly what I asked, it resulted in a better product. I also had a view of project progress and things that were done and getting done. Very effective.",
                                name: "Craig Barber",
                                company: "Founder, Logobly"
                            }, {
                                rating: "5.0",
                                text: "A technically skilled team, Ronas IT goes the extra mile to deliver high-quality solutions. With a broad understanding of both the product and current technologies, they provide impactful, timely, and flexible support.",
                                name: "Rivget Raut",
                                company: "Founder, Machine E-Commerce Platform"
                            }, {
                                rating: "4.9",
                                text: "The quality of their work stands out the most. They’re knowledgeable and provide useful feedback.",
                                name: "Adrian Lunga",
                                company: "Founder, 365daybookings"
                            }],
                            active: null,
                            mobile: !1
                        }
                    },
                    methods: {
                        scroll: function(t) {
                            this.active = null, this.$refs.feedback.forEach((function(t, e) {
                                t.getBoundingClientRect().top < window.innerHeight / 2 ? (this.active = e, e > 0 && (this.$refs.inputs[e - 1].checked = !1), e < this.$refs.inputs.length - 1 && (this.$refs.inputs[e + 1].checked = !1)) : this.$refs.inputs[e].checked = !1
                            }), this), null != this.active && (this.$refs.inputs[this.active].checked = !0)
                        }
                    },
                    mounted: function() {
                        window.innerWidth > 767 ? window.addEventListener("scroll", this.scroll) : this.mobile = !0
                    }
                },
                i = (a(395), a(18)),
                n = Object(i.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("Section", {
                        attrs: {
                            className: "section-feedbacks"
                        }
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "feedbacks"
                    }, [t._l(t.feedbacks, (function(e, s) {
                        return [a("input", {
                            ref: "inputs",
                            refInFor: !0,
                            staticClass: "feedbacks-radio",
                            attrs: {
                                type: "radio",
                                name: "feedback",
                                id: "feedback" + s
                            },
                            domProps: {
                                checked: t.mobile && 0 == s
                            }
                        })]
                    })), t._v(" "), a("div", {
                        staticClass: "row feedbacks-content"
                    }, [a("div", {
                        staticClass: "col col-25"
                    }, [a("div", {
                        staticClass: "feedbacks-authors"
                    }, [t._l(t.feedbacks, (function(e, s) {
                        return [a("label", {
                            ref: "authors",
                            refInFor: !0,
                            staticClass: "feedbacks-author",
                            attrs: {
                                for: "feedback" + s
                            }
                        }, [a("span", {
                            staticClass: "feedbacks-avatar"
                        }), t._v(" "), a("span", {
                            staticClass: "feedbacks-name"
                        }, [t._v(t._s(e.name))]), t._v(" "), a("span", {
                            staticClass: "feedbacks-company"
                        }, [t._v(t._s(e.company))])])]
                    })), t._v(" "), a("div", {
                        staticClass: "clutch-widget",
                        attrs: {
                            "data-url": "https://widget.clutch.co",
                            "data-widget-type": "1",
                            "data-height": "50",
                            "data-clutchcompany-id": "188927"
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "clutch-widget clutch-widget-dark",
                        attrs: {
                            "data-url": "https://widget.clutch.co",
                            "data-widget-type": "1",
                            "data-height": "50",
                            "data-darkbg": "1",
                            "data-clutchcompany-id": "188927"
                        }
                    })], 2)]), t._v(" "), a("div", {
                        staticClass: "col col-75"
                    }, [a("div", {
                        staticClass: "feedbacks-contents"
                    }, [t._l(t.feedbacks, (function(e) {
                        return [a("div", {
                            ref: "feedback",
                            refInFor: !0,
                            staticClass: "feedback"
                        }, [a("div", {
                            staticClass: "feedback-rating"
                        }, [a("div", {
                            staticClass: "feedback-rating-stars"
                        }, [a("span", {
                            staticClass: "icon icon-star"
                        }), t._v(" "), a("span", {
                            staticClass: "icon icon-star"
                        }), t._v(" "), a("span", {
                            staticClass: "icon icon-star"
                        }), t._v(" "), a("span", {
                            staticClass: "icon icon-star"
                        }), t._v(" "), a("span", {
                            staticClass: "icon icon-star"
                        })]), t._v("\n                  " + t._s(e.rating) + "\n                ")]), t._v(" "), a("div", {
                            staticClass: "feedback-text"
                        }, [t._v(t._s(e.text))]), t._v(" "), a("Button", {
                            staticClass: "more",
                            attrs: {
                                href: "https://clutch.co/profile/ronas-it"
                            }
                        }, [t._v("View on Clutch")])], 1)]
                    }))], 2)])])], 2)])])
                }), [], !1, null, null, null);
            e.default = n.exports
        }
    }
]);