webpackJsonp([ 4 ], {
    "247": function(e, t, n) {
        "use strict";
        function u(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var r = n(31), c = u(r), o = n(15), l = u(o), i = n(20), f = u(i), a = n(17), d = u(a), s = n(16), p = u(s), m = n(2), _ = u(m), v = n(252), E = n(175), b = function(e) {
            function t() {
                return (0, l["default"])(this, t), (0, d["default"])(this, (t.__proto__ || (0, c["default"])(t)).apply(this, arguments));
            }
            return (0, p["default"])(t, e), (0, f["default"])(t, [ {
                "key": "render",
                "value": function() {
                    var e = this;
                    return _["default"].createElement("div", null, _["default"].createElement("div", null, "这个待审批页面"), _["default"].createElement("div", null, "当前计数为", this.props.counter.count), _["default"].createElement("button", {
                        "onClick": function() {
                            return e.props.increment();
                        }
                    }, "自增"), _["default"].createElement("button", {
                        "onClick": function() {
                            return e.props.decrement();
                        }
                    }, "自减"), _["default"].createElement("button", {
                        "onClick": function() {
                            return e.props.reset();
                        }
                    }, "重置"));
                }
            } ]), t;
        }(m.Component), h = function(e) {
            return {
                "counter": e.counter
            };
        }, k = function(e) {
            return {
                "increment": function() {
                    e((0, v.increment)());
                },
                "decrement": function() {
                    e((0, v.decrement)());
                },
                "reset": function() {
                    e((0, v.reset)());
                }
            };
        };
        t["default"] = (0, E.connect)(h, k)(b);
    }
});