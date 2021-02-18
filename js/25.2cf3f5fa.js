(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        367: function(t, e, n) {},
        412: function(t, e, n) {
            "use strict";
            var i = n(367);
            n.n(i).a
        },
        442: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = {
                    props: ["className", "background"],
                    name: "Section",
                    data: function() {
                        return {
                            percent: 0,
                            opacity: 0,
                            active: !1
                        }
                    },
                    methods: {
                        scroll: function(t) {
                            var e = window.innerHeight - this.$el.getBoundingClientRect().top;
                            this.percent = e / window.innerHeight * 2 * 100, this.percent > 100 && (this.percent = 100), this.percent < 0 && (this.percent = 0), this.opacity = this.percent / 100, 100 == this.percent ? this.active = !0 : this.active = !1
                        }
                    },
                    mounted: function() {
                        window.addEventListener("scroll", this.scroll)
                    }
                },
                c = (n(412), n(18)),
                s = Object(c.a)(i, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("section", {
                        class: ["section", this.className, {
                            "section-active": this.active
                        }]
                    }, [this._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = s.exports
        }
    }
]);