(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        347: function(t, s, a) {},
        379: function(t, s, a) {
            "use strict";
            var e = a(347);
            a.n(e).a
        },
        424: function(t, s, a) {
            "use strict";
            a.r(s);
            var e = {
                    name: "About",
                    data: function() {
                        return {
                            eventsAmount: 0,
                            eventsShift: 0,
                            officeAmount: 0,
                            officeShift: 0,
                            topAmount: 0,
                            topShift: 0
                        }
                    },
                    methods: {
                        scroll: function(t) {},
                        draw: function() {
                            var t = this;
                            this.$refs.events && this.$refs.events.getBoundingClientRect() && (this.eventsAmount = -this.$refs.events.getBoundingClientRect().top / (this.$refs.events.offsetHeight - window.innerHeight), this.eventsAmount < 0 && (this.eventsAmount = 0), this.eventsAmount > 1 && (this.eventsAmount = 1), this.eventsShift = -1 * this.eventsAmount * this.$refs.eventsWidth.offsetWidth), this.$refs.office && this.$refs.office.getBoundingClientRect() && (this.officeAmount = -this.$refs.office.getBoundingClientRect().top / (this.$refs.office.offsetHeight - window.innerHeight), this.officeAmount < 0 && (this.officeAmount = 0), this.officeAmount > 1 && (this.officeAmount = 1), this.officeShift = -1 * this.officeAmount * this.$refs.officeWidth.offsetWidth), this.topAmount = (window.innerHeight - this.$refs.top.getBoundingClientRect().top) / (this.$refs.top.offsetHeight + window.innerHeight), this.topAmount > 0 && this.topAmount < 1 && (this.topShift = 50 * this.topAmount), requestAnimationFrame((function() {
                                return t.draw()
                            }))
                        }
                    },
                    mounted: function() {
                        window.addEventListener("scroll", this.scroll), this.draw()
                    }
                },
                i = (a(379), a(18)),
                o = Object(i.a)(e, (function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                        staticClass: "about"
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "row"
                    }, [a("div", {
                        staticClass: "col col-75"
                    }, [a("div", {
                        staticClass: "page-title"
                    }, [a("h4", {
                        staticClass: "headline"
                    }, [t._v("About")]), t._v(" "), a("Content", {
                        attrs: {
                            "slot-key": "title"
                        }
                    })], 1)])])]), t._v(" "), a("div", {
                        ref: "top",
                        staticClass: "about-top"
                    }, [a("img-lazy", {
                        style: "transform: translate(0, " + t.topShift + "%);",
                        attrs: {
                            src: "/img/about-top.jpg"
                        }
                    })], 1), t._v(" "), a("Section", {
                        staticClass: "about-goal"
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("h4", {
                        staticClass: "headline"
                    }, [t._v("Our Goal")]), t._v(" "), a("Content", {
                        attrs: {
                            "slot-key": "goal"
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "about-goal-images"
                    }, [a("div", {
                        staticClass: "row row-smallpadding"
                    }, [a("div", {
                        staticClass: "col col-50"
                    }, [a("img-lazy", {
                        staticClass: "about-goal-img fadeonscroll",
                        attrs: {
                            src: "/img/about-office-1.jpg"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "col col-50"
                    }, [a("img-lazy", {
                        staticClass: "about-goal-img fadeonscroll",
                        attrs: {
                            src: "/img/about-office-2.jpg"
                        }
                    })], 1)])])], 1)]), t._v(" "), a("Section", {
                        staticClass: "about-numbers"
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "row"
                    }, [a("div", {
                        staticClass: "col col-33 col-mobile-50 fadeonscroll"
                    }, [a("strong", [t._v("60+")]), t._v(" employees\n        ")]), t._v(" "), a("div", {
                        staticClass: "col col-33 col-mobile-50 fadeonscroll"
                    }, [a("strong", [t._v("400+")]), t._v(" projects\n        ")]), t._v(" "), a("div", {
                        staticClass: "col col-33 col-mobile-50 fadeonscroll"
                    }, [a("strong", [t._v("13+")]), t._v(" years on the market\n        ")])])])]), t._v(" "), a("Section", {
                        staticClass: "about-events"
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("h1", [t._v("Our Events")])]), t._v(" "), a("div", {
                        ref: "events",
                        staticClass: "events"
                    }, [a("div", {
                        staticClass: "about-events-container"
                    }, [a("div", {
                        ref: "eventsWidth",
                        staticClass: "container"
                    }, [a("div", {
                        ref: "eventsRow",
                        staticClass: "about-events-row",
                        style: "transform: translate(" + t.eventsShift + "px, 0px);"
                    }, [a("div", {
                        staticClass: "event fadeonscroll"
                    }, [a("div", {
                        staticClass: "event-image"
                    }, [a("img-lazy", {
                        attrs: {
                            src: "/img/about-meetups.jpg"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "event-title"
                    }, [t._v("Meetups")]), t._v(" "), a("div", {
                        staticClass: "event-description"
                    }, [t._v("\n            We hold monthly meetups where we share experience and new ideas within the team.\n          ")])]), t._v(" "), a("div", {
                        staticClass: "event fadeonscroll"
                    }, [a("div", {
                        staticClass: "event-image"
                    }, [a("img-lazy", {
                        attrs: {
                            src: "/img/about-communities.jpg"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "event-title"
                    }, [t._v("Professional communities")]), t._v(" "), a("div", {
                        staticClass: "event-description"
                    }, [t._v("\n            We have organized professional communities within our\n            team to develop and maintain work standards and integrate\n            new tools and technologies into our existing workflow.\n          ")])]), t._v(" "), a("div", {
                        staticClass: "event fadeonscroll"
                    }, [a("div", {
                        staticClass: "event-image"
                    }, [a("img-lazy", {
                        attrs: {
                            src: "/img/about-internship.jpg"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "event-title"
                    }, [t._v("Internships")]), t._v(" "), a("div", {
                        staticClass: "event-description"
                    }, [t._v("\n            We help junior developers to start a career\n            in the IT field. During their internship, they create\n            web and mobile applications following internal company\n            standards and best practices of the industry.\n          ")])]), t._v(" "), a("div", {
                        staticClass: "event fadeonscroll"
                    }, [a("div", {
                        staticClass: "event-image"
                    }, [a("img-lazy", {
                        attrs: {
                            src: "/img/about-english.jpg"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "event-title"
                    }, [t._v("English Lessons")]), t._v(" "), a("div", {
                        staticClass: "event-description"
                    }, [t._v("\n            To be closer to our customers, we provide English courses for\n            the team members; they include individual and group lessons\n            for different levels of language proficiency.\n          ")])])])])])])]), t._v(" "), a("Section", {
                        staticClass: "about-office"
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "row office-intro"
                    }, [a("div", {
                        staticClass: "col col-60"
                    }, [a("Content", {
                        attrs: {
                            "slot-key": "office"
                        }
                    })], 1)]), t._v(" "), a("div", {
                        staticClass: "office-addresses"
                    }, [a("div", {
                        staticClass: "row"
                    }, [a("div", {
                        staticClass: "col col-50"
                    }, [a("div", {
                        staticClass: "office-time"
                    }, [t._v("10:00—19:00 GMT+6")]), t._v(" "), a("div", {
                        staticClass: "office-city"
                    }, [t._v("Omsk, Russia")]), t._v(" "), a("div", {
                        staticClass: "office-address"
                    }, [t._v("Gagarina st. 14, office 4052")]), t._v(" "), a("div", {
                        staticClass: "office-postal"
                    }, [t._v("644029")])]), t._v(" "), a("div", {
                        staticClass: "col col-50"
                    }, [a("div", {
                        staticClass: "office-time"
                    }, [t._v("10:00—19:00 GMT+3")]), t._v(" "), a("div", {
                        staticClass: "office-city"
                    }, [t._v("Krasnodar, Russia")]), t._v(" "), a("div", {
                        staticClass: "office-address"
                    }, [t._v("Budennogo st. 129, block A, office A3.3")]), t._v(" "), a("div", {
                        staticClass: "office-postal"
                    }, [t._v("350000")])])])])]), t._v(" "), a("div", {
                        ref: "office",
                        staticClass: "office"
                    }, [a("div", {
                        staticClass: "office-container"
                    }, [a("div", {
                        ref: "officeWidth",
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "office-photos",
                        style: "transform: translate(" + t.officeShift + "px, 0px);"
                    }, [a("div", {
                        staticClass: "office-photo fadeonscroll"
                    }, [a("img-lazy", {
                        attrs: {
                            src: "/img/about-office-3.jpg"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "office-photo fadeonscroll"
                    }, [a("img-lazy", {
                        attrs: {
                            src: "/img/about-office-4.jpg"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "office-photo fadeonscroll"
                    }, [a("img-lazy", {
                        attrs: {
                            src: "/img/about-office-5.jpg"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "office-photo fadeonscroll"
                    }, [a("img-lazy", {
                        attrs: {
                            src: "/img/about-office-6.jpg"
                        }
                    })], 1)])])])])]), t._v(" "), a("Section", {
                        staticClass: "about-awards"
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "row"
                    }, [a("div", {
                        staticClass: "col col-50"
                    }, [a("h1", [t._v("Awards & Recognitions")])])]), t._v(" "), a("div", {
                        staticClass: "awards"
                    }, [a("a", {
                        staticClass: "awards-award fadeonscroll",
                        attrs: {
                            href: "https://www.upwork.com/ag/ronasit/",
                            target: "_blank"
                        }
                    }, [a("span", {
                        staticClass: "awards-site"
                    }, [a("span", {
                        staticClass: "icon icon-mask icon-upwork"
                    })]), t._v(" "), a("span", {
                        staticClass: "awards-title"
                    }, [t._v("Top Rated Plus")]), t._v(" "), a("span", {
                        staticClass: "awards-category"
                    }, [t._v("Status")])]), t._v(" "), a("a", {
                        staticClass: "awards-award fadeonscroll",
                        attrs: {
                            href: "https://clutch.co/press-releases/announces-top-b2b-providers-russia",
                            target: "_blank"
                        }
                    }, [a("span", {
                        staticClass: "awards-site"
                    }, [a("span", {
                        staticClass: "icon icon-mask icon-clutch"
                    })]), t._v(" "), a("span", {
                        staticClass: "awards-title"
                    }, [t._v("Top B2B Companies")]), t._v(" "), a("span", {
                        staticClass: "awards-category"
                    }, [t._v("Russia 2020")])]), t._v(" "), a("a", {
                        staticClass: "awards-award fadeonscroll",
                        attrs: {
                            href: "https://www.awwwards.com/sites/ronas-it-agency-website",
                            target: "_blank"
                        }
                    }, [a("span", {
                        staticClass: "awards-site"
                    }, [a("span", {
                        staticClass: "icon icon-mask icon-awwwards"
                    })]), t._v(" "), a("span", {
                        staticClass: "awards-title"
                    }, [t._v("Honorable Mention")]), t._v(" "), a("span", {
                        staticClass: "awards-category"
                    }, [t._v("December 2020")])]), t._v(" "), a("a", {
                        staticClass: "awards-award fadeonscroll",
                        attrs: {
                            href: "https://www.behance.net/gallery/108317489/Travel-App-Design-Concept-UIUX",
                            target: "_blank"
                        }
                    }, [a("span", {
                        staticClass: "awards-site"
                    }, [a("span", {
                        staticClass: "icon icon-mask icon-behance-large"
                    })]), t._v(" "), a("span", {
                        staticClass: "awards-title"
                    }, [t._v("AIGA Member Gallery")]), t._v(" "), a("span", {
                        staticClass: "awards-category"
                    }, [t._v("December 2020")])]), t._v(" "), a("a", {
                        staticClass: "awards-award fadeonscroll",
                        attrs: {
                            href: "https://www.behance.net/gallery/108317489/Travel-App-Design-Concept-UIUX",
                            target: "_blank"
                        }
                    }, [a("span", {
                        staticClass: "awards-site"
                    }, [a("span", {
                        staticClass: "icon icon-mask icon-behance-large"
                    })]), t._v(" "), a("span", {
                        staticClass: "awards-title"
                    }, [t._v("Adobe Stock Gallery")]), t._v(" "), a("span", {
                        staticClass: "awards-category"
                    }, [t._v("December 2020")])]), t._v(" "), a("a", {
                        staticClass: "awards-award fadeonscroll",
                        attrs: {
                            href: "https://www.behance.net/gallery/108317489/Travel-App-Design-Concept-UIUX",
                            target: "_blank"
                        }
                    }, [a("span", {
                        staticClass: "awards-site"
                    }, [a("span", {
                        staticClass: "icon icon-mask icon-behance-large"
                    })]), t._v(" "), a("span", {
                        staticClass: "awards-title"
                    }, [t._v("UI/UX Gallery")]), t._v(" "), a("span", {
                        staticClass: "awards-category"
                    }, [t._v("January 2021")])])])])]), t._v(" "), a("Section", {
                        staticClass: "about-posts"
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "about-posts-title"
                    }, [a("h1", [t._v("Latest Posts")]), t._v(" "), a("Button", {
                        attrs: {
                            type: "link",
                            href: "/blog/"
                        }
                    }, [t._v("Read More")])], 1), t._v(" "), a("div", {
                        staticClass: "row"
                    }, [a("BlogPost", {
                        staticClass: "fadeonscroll",
                        attrs: {
                            link: "/blog/2020/10/01/how-to-make-an-it-project-description/",
                            image: "/blog/how-to-make-an-it-project-description.jpg",
                            category: "How to",
                            title: "How to make an IT project description",
                            date: "1 Oct 2020",
                            toread: "5 min read"
                        }
                    }), t._v(" "), a("BlogPost", {
                        staticClass: "fadeonscroll",
                        attrs: {
                            link: "/blog/2020/09/25/_7-reasons-to-choose-firebase-for-serverless-architecture/",
                            image: "/blog/firebase-for-serverless-architecture.jpg",
                            category: "Tech",
                            title: "7 reasons to choose Firebase for serverless architecture",
                            date: "25 Sep 2020",
                            toread: "5 min read"
                        }
                    })], 1)])])], 1)
                }), [], !1, null, null, null);
            s.default = o.exports
        }
    }
]);