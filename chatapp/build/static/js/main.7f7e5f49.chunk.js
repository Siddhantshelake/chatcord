(this.webpackJsonpchatapp = this.webpackJsonpchatapp || []).push([
  [0],
  {
    112: function (e, t, a) {},
    114: function (e, t, a) {},
    137: function (e, t, a) {},
    138: function (e, t, a) {},
    139: function (e, t, a) {},
    140: function (e, t, a) {},
    141: function (e, t, a) {},
    142: function (e, t, a) {},
    143: function (e, t, a) {},
    144: function (e, t, a) {},
    174: function (e, t, a) {},
    177: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a.n(n),
        s = a(39),
        r = a.n(s),
        i = (a(112), a(7)),
        o = a.n(i),
        l = a(16),
        u = a(5),
        j = (a(114), a(40)),
        d = a(15),
        p = a.n(d),
        b = a(194),
        h = function (e, t) {
          switch (t.type) {
            case "LOGIN_START":
              return { user: t.payload, isLoading: !0, error: !1 };
            case "LOGIN_SUCCESS":
              return { user: t.payload, isLoading: !1, error: !1 };
            case "LOGIN_FAILURE":
              return { user: null, isLoading: !1, error: t.payload };
            default:
              return e;
          }
        },
        m = a(1),
        O = {
          user: JSON.parse(localStorage.getItem("user")) || null,
          isFetching: !1,
          error: !1,
        },
        x = Object(n.createContext)(O),
        f = function (e) {
          var t = e.children,
            a = Object(n.useReducer)(h, O),
            c = Object(u.a)(a, 2),
            s = c[0],
            r = c[1];
          return (
            Object(n.useEffect)(
              function () {
                localStorage.setItem("user", JSON.stringify(s.user));
              },
              [s.user]
            ),
            Object(m.jsx)(x.Provider, {
              value: {
                user: s.user,
                isFetching: s.isFetching,
                error: s.error,
                dispatch: r,
              },
              children: t,
            })
          );
        };
      var v = function () {
          var e = Object(n.useState)(),
            t = Object(u.a)(e, 2),
            a = t[0],
            c = t[1],
            s = Object(n.useState)(),
            r = Object(u.a)(s, 2),
            i = r[0],
            d = r[1],
            h = Object(n.useContext)(x),
            O = h.isFetching,
            f = h.dispatch,
            v = "https://api-amigochat.herokuapp.com/";
          console.log(v);
          var g = (function () {
            var e = Object(l.a)(
              o.a.mark(function e(t, a) {
                var n;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            a({ type: "LOGIN_START" }),
                            (e.prev = 1),
                            (e.next = 4),
                            p.a.post(v + "api/auth/signin", t)
                          );
                        case 4:
                          (n = e.sent),
                            a({ type: "LOGIN_SUCCESS", payload: n.data }),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            a({ type: "LOGIN_FAILURE", payload: e.t0 });
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })();
          return Object(m.jsx)("div", {
            className: "signin-container",
            children: Object(m.jsxs)("div", {
              className: "signin-card",
              children: [
                Object(m.jsxs)("form", {
                  onSubmit: function (e) {
                    e.preventDefault(), g({ email: a, password: i }, f);
                  },
                  children: [
                    Object(m.jsx)("h2", {
                      className: "signin-title",
                      children: " Log in",
                    }),
                    Object(m.jsx)("p", { className: "line" }),
                    Object(m.jsxs)("div", {
                      className: "signin-fields",
                      children: [
                        Object(m.jsxs)("label", {
                          htmlFor: "email",
                          children: [
                            " ",
                            Object(m.jsx)("b", { children: "Email" }),
                          ],
                        }),
                        Object(m.jsx)("input", {
                          className: "signin-textbox",
                          type: "email",
                          placeholder: "Enter Email",
                          name: "username",
                          required: !0,
                          onChange: function (e) {
                            c(e.target.value);
                          },
                        }),
                        Object(m.jsx)("label", {
                          htmlFor: "password",
                          children: Object(m.jsx)("b", {
                            children: "Password",
                          }),
                        }),
                        Object(m.jsx)("input", {
                          className: "signin-textbox",
                          type: "password",
                          minLength: "6",
                          placeholder: "Enter Password",
                          name: "psw",
                          required: !0,
                          onChange: function (e) {
                            d(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(m.jsx)("button", {
                      className: "signin-button",
                      disabled: O,
                      children: O ? Object(m.jsx)(b.a, {}) : "Log In",
                    }),
                    Object(m.jsx)("a", {
                      className: "forget-pass",
                      href: "#home",
                      children: "Forgot password?",
                    }),
                  ],
                }),
                Object(m.jsx)("div", {
                  className: "signup-option",
                  children: Object(m.jsxs)("p", {
                    className: "signup-question",
                    children: [
                      "Don't have an account? ",
                      Object(m.jsx)(j.b, {
                        to: "/signup",
                        children: "Sign Up",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        g = a(10);
      a(137);
      var N = function () {
          var e = Object(n.useState)(),
            t = Object(u.a)(e, 2),
            a = t[0],
            c = t[1],
            s = Object(n.useState)(),
            r = Object(u.a)(s, 2),
            i = r[0],
            d = r[1],
            b = Object(n.useState)(),
            h = Object(u.a)(b, 2),
            O = h[0],
            x = h[1],
            f = Object(n.useState)(""),
            v = Object(u.a)(f, 2),
            N = v[0],
            S = v[1],
            w = Object(g.g)(),
            y = "https://api-amigochat.herokuapp.com/";
          console.log(y);
          var k = (function () {
            var e = Object(l.a)(
              o.a.mark(function e(t) {
                var n, c;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (n = {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }),
                            (c = new FormData()).append("username", O),
                            c.append("email", a),
                            c.append("password", i),
                            "" !== N && c.append("photo", N),
                            (e.prev = 7),
                            (e.next = 10),
                            p.a.post(y + "api/auth/signup", c, n)
                          );
                        case 10:
                          w.push("/signin"), (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13), (e.t0 = e.catch(7)), console.log(e.t0);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[7, 13]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Object(m.jsx)("div", {
            className: "signup-container",
            children: Object(m.jsxs)("div", {
              className: "signup-card",
              children: [
                Object(m.jsxs)("form", {
                  onSubmit: k,
                  children: [
                    Object(m.jsx)("h2", {
                      className: "signup-title",
                      children: " Register ",
                    }),
                    Object(m.jsx)("p", { className: "line" }),
                    Object(m.jsxs)("div", {
                      className: "signup-fields",
                      children: [
                        Object(m.jsxs)("label", {
                          htmlFor: "username",
                          children: [
                            " ",
                            " ",
                            " ",
                            Object(m.jsx)("b", { children: "Username" }),
                          ],
                        }),
                        Object(m.jsx)("input", {
                          className: "signup-textbox",
                          type: "text",
                          placeholder: "Enter Username",
                          name: "username",
                          required: !0,
                          onChange: function (e) {
                            x(e.target.value);
                          },
                        }),
                        Object(m.jsxs)("label", {
                          htmlFor: "email",
                          children: [
                            " ",
                            Object(m.jsx)("b", { children: "Email" }),
                          ],
                        }),
                        Object(m.jsx)("input", {
                          className: "signup-textbox",
                          type: "email",
                          placeholder: "Enter Email",
                          name: "email",
                          required: !0,
                          onChange: function (e) {
                            c(e.target.value);
                          },
                        }),
                        Object(m.jsxs)("label", {
                          htmlFor: "password",
                          children: [
                            " ",
                            Object(m.jsx)("b", { children: "Password" }),
                          ],
                        }),
                        Object(m.jsx)("input", {
                          className: "signup-textbox",
                          type: "password",
                          placeholder: "Enter Password",
                          minLength: "6",
                          name: "psw",
                          required: !0,
                          onChange: function (e) {
                            d(e.target.value);
                          },
                        }),
                        Object(m.jsx)("label", {
                          children: Object(m.jsx)("b", {
                            children: "Image(You can add Image later)",
                          }),
                        }),
                        Object(m.jsx)("input", {
                          className: "file-input",
                          type: "file",
                          accept: ".png, .jpg, .jpeg, .gif",
                          name: "photo",
                          onChange: function (e) {
                            S(e.target.files[0]);
                          },
                        }),
                      ],
                    }),
                    Object(m.jsx)("button", {
                      className: "signup-button",
                      children: "Sign Up",
                    }),
                  ],
                }),
                Object(m.jsx)("div", {
                  className: "signup-option",
                  children: Object(m.jsxs)("p", {
                    className: "signup-question",
                    children: [
                      "Have an account? ",
                      Object(m.jsx)(j.b, {
                        to: "/signin",
                        children: "Sign In",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        S = a(65),
        w = (a(138), a(139), a(140), a(141), a(105));
      var y = function (e) {
        var t = e.message,
          a = e.own;
        return Object(m.jsx)("div", {
          children: Object(m.jsxs)("p", {
            className: a ? "message-sent" : "message-received",
            children: [
              Object(m.jsx)("span", { children: t.text }),
              Object(m.jsx)("span", {
                className: "message-time",
                children: Object(w.a)(t.createdAt),
              }),
            ],
          }),
        });
      };
      a(142);
      var k = function (e) {
        var t = e.addchattoggler,
          a = e.addchattoggle,
          c = Object(n.useState)(),
          s = Object(u.a)(c, 2),
          r = s[0],
          i = s[1],
          j = Object(n.useContext)(x).user,
          d = "https://api-amigochat.herokuapp.com/",
          b = (function () {
            var e = Object(l.a)(
              o.a.mark(function e(t) {
                var a, n;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            p.a.get(
                              "".concat(d, "api/users/?username=").concat(r)
                            )
                          );
                        case 4:
                          return (
                            (a = e.sent),
                            i(""),
                            (n = { senderId: j._id, receiverId: a.data._id }),
                            (e.next = 9),
                            p.a.post(d + "api/chatrooms", n)
                          );
                        case 9:
                          e.next = 13;
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(1));
                        case 13:
                          window.location.reload();
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 11]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(m.jsx)("div", {
          className: "add-amigo-background",
          children: Object(m.jsxs)("div", {
            className: a ? "add-amigo-open" : "add-amigo-close",
            children: [
              Object(m.jsx)("div", {
                className: "close-div",
                children: Object(m.jsx)("span", {
                  onClick: t,
                  children: Object(m.jsx)("p", {
                    className: "close-symbol",
                    children: "x",
                  }),
                }),
              }),
              Object(m.jsxs)("form", {
                children: [
                  Object(m.jsx)("img", {
                    className: "add-amigo-img",
                    src: "assets/addamigo.png",
                    alt: "",
                  }),
                  Object(m.jsx)("input", {
                    type: "text",
                    placeholder: "Enter Username of Amigo",
                    value: r,
                    onChange: function (e) {
                      i(e.target.value);
                    },
                    required: !0,
                  }),
                  Object(m.jsx)("button", {
                    onClick: b,
                    children: "ADD AMIGO",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      a(143);
      var C = function (e) {
          var t = e.toggler,
            a = e.togglestate,
            c = Object(n.useContext)(x).user,
            s = Object(n.useState)(c.username),
            r = Object(u.a)(s, 2),
            i = r[0],
            j = r[1],
            d = Object(n.useState)(""),
            b = Object(u.a)(d, 2),
            h = b[0],
            O = b[1],
            f = "https://api-amigochat.herokuapp.com/",
            v = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t) {
                  var a, n, s, r;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (a = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }),
                              (n = new FormData()).append("username", i),
                              "" !== h && n.append("photo", h),
                              (e.prev = 5),
                              (e.next = 8),
                              p.a.put(
                                f +
                                  "api/users/" +
                                  (null === c || void 0 === c ? void 0 : c._id),
                                n,
                                a
                              )
                            );
                          case 8:
                            return (
                              (e.next = 10),
                              p.a.get(
                                f +
                                  "api/users/" +
                                  (null === c || void 0 === c ? void 0 : c._id)
                              )
                            );
                          case 10:
                            (s = e.sent),
                              (r = JSON.stringify(s.data)),
                              localStorage.setItem("user", r),
                              (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(5)),
                              console.log(e.t0);
                          case 18:
                            window.location.reload();
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(m.jsx)("div", {
            className: "profile",
            children: Object(m.jsxs)("div", {
              className: a ? "profile-card-open" : "profile-card-close",
              children: [
                Object(m.jsx)("div", {
                  className: "close-div",
                  children: Object(m.jsx)("span", {
                    onClick: t,
                    children: Object(m.jsx)("p", {
                      className: "close-symbol",
                      children: "x",
                    }),
                  }),
                }),
                Object(m.jsx)("img", {
                  className: "profile-image",
                  src: (null === c || void 0 === c ? void 0 : c.photo)
                    ? f +
                      "photo/" +
                      (null === c || void 0 === c ? void 0 : c.photo)
                    : "assets/noavatar.jpg",
                  alt: "",
                }),
                Object(m.jsxs)("form", {
                  children: [
                    Object(m.jsx)("label", {
                      htmlFor: "username",
                      children: "Username",
                    }),
                    Object(m.jsx)("input", {
                      type: "text",
                      className: "username-input",
                      value: i,
                      onChange: function (e) {
                        j(e.target.value);
                      },
                      required: !0,
                    }),
                    Object(m.jsx)("input", {
                      className: "update-profilepic",
                      type: "file",
                      accept: ".png, .jpg, .jpeg, .gif",
                      name: "photo",
                      onChange: function (e) {
                        O(e.target.files[0]);
                      },
                    }),
                    Object(m.jsx)("button", { onClick: v, children: "UPDATE" }),
                  ],
                }),
              ],
            }),
          });
        },
        I = (a(144), a(58));
      var E = function (e) {
        var t = e.chatroomtile,
          a = e.currentUser,
          c = Object(n.useState)(null),
          s = Object(u.a)(c, 2),
          r = s[0],
          i = s[1],
          j = Object(n.useState)(!1),
          d = Object(u.a)(j, 2),
          b = d[0],
          h = d[1],
          O = Object(n.useRef)(),
          x = "https://api-amigochat.herokuapp.com/";
        return (
          Object(n.useEffect)(
            function () {
              O.current = Object(I.io)(x);
            },
            [x]
          ),
          Object(n.useEffect)(
            function () {
              var e = t.members.find(function (e) {
                return e !== a._id;
              });
              O.current.on("getUsers", function (t) {
                h(
                  t.find(function (t) {
                    return t.userId === e;
                  })
                );
              }),
                (function () {
                  var t = Object(l.a)(
                    o.a.mark(function t() {
                      var a;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  p.a.get(x + "api/users/" + e)
                                );
                              case 3:
                                (a = t.sent), i(a.data), (t.next = 10);
                                break;
                              case 7:
                                (t.prev = 7),
                                  (t.t0 = t.catch(0)),
                                  console.log(t.t0);
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })()();
            },
            [a, t, b, x]
          ),
          Object(m.jsxs)("div", {
            className: "sidebarchat",
            children: [
              Object(m.jsx)("img", {
                className: "amigo-profilepic",
                src: (null === r || void 0 === r ? void 0 : r.photo)
                  ? x +
                    "photo/" +
                    (null === r || void 0 === r ? void 0 : r.photo)
                  : "assets/noavatar.jpg",
                alt: "",
              }),
              Object(m.jsx)("div", { className: b ? "online" : "offile" }),
              Object(m.jsx)("p", {
                className: "sidebarchat-info-name",
                children: null != r ? r.username : "",
              }),
            ],
          })
        );
      };
      a(174);
      var _ = function () {
          return Object(m.jsx)("div", {
            children: Object(m.jsxs)("div", {
              className: "EmptyChatroom",
              children: [
                Object(m.jsx)("img", {
                  className: "emptychatroom-img",
                  src: "assets/home.png",
                  alt: "",
                }),
                Object(m.jsx)("p", {
                  className: "empty-chatroom-mainhead",
                  children: "Start Chatting with Your Amigo\ud83e\udd1d",
                }),
                Object(m.jsx)("p", {
                  className: "empty-chatroom-subhead",
                  children:
                    "Select an Amigo from the Sidebar and Start conversation.Add Amigos by username from the option in the top right corner of the page",
                }),
              ],
            }),
          });
        },
        F = (a(175), a(104)),
        L = a(103),
        A = a.n(L),
        U = a(96),
        D = a.n(U),
        q = a(98),
        T = a.n(q),
        R = a(100),
        P = a.n(R),
        G = a(195),
        J = a(99),
        M = a.n(J),
        z = a(97),
        B = a.n(z),
        Y = a(102),
        H = a.n(Y),
        V = a(101),
        K = a.n(V);
      var Q = function () {
        var e = Object(n.useState)([]),
          t = Object(u.a)(e, 2),
          a = t[0],
          c = t[1],
          s = Object(n.useState)(null),
          r = Object(u.a)(s, 2),
          i = r[0],
          j = r[1],
          d = Object(n.useState)([]),
          b = Object(u.a)(d, 2),
          h = b[0],
          O = b[1],
          f = Object(n.useState)(""),
          v = Object(u.a)(f, 2),
          g = v[0],
          N = v[1],
          w = Object(n.useState)(null),
          L = Object(u.a)(w, 2),
          U = L[0],
          q = L[1],
          R = Object(n.useState)(),
          J = Object(u.a)(R, 2),
          z = J[0],
          Y = J[1],
          V = Object(n.useState)(!1),
          Q = Object(u.a)(V, 2),
          W = Q[0],
          X = Q[1],
          Z = Object(n.useContext)(x).user,
          $ = Object(n.useRef)(),
          ee = Object(n.useRef)(),
          te = "https://api-amigochat.herokuapp.com/";
        Object(n.useEffect)(
          function () {
            (ee.current = Object(I.io)(te)),
              ee.current.on("getMessage", function (e) {
                q({ sender: e.senderId, text: e.text, createdAt: Date.now() });
              });
          },
          [te]
        ),
          Object(n.useEffect)(
            function () {
              U &&
                (null === i || void 0 === i
                  ? void 0
                  : i.members.includes(U.sender)) &&
                O(function (e) {
                  return [].concat(Object(S.a)(e), [U]);
                });
            },
            [U, i]
          ),
          Object(n.useEffect)(
            function () {
              ee.current.emit(
                "addUser",
                null === Z || void 0 === Z ? void 0 : Z._id
              );
            },
            [Z, a, i, ee]
          ),
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(l.a)(
                  o.a.mark(function e() {
                    var t;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                p.a.get(te + "api/chatrooms/" + Z._id)
                              );
                            case 3:
                              (t = e.sent), c(t.data), (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [null === Z || void 0 === Z ? void 0 : Z._id, te]
          ),
          Object(n.useEffect)(
            function () {
              var e =
                null === i || void 0 === i
                  ? void 0
                  : i.members.find(function (e) {
                      return e !== Z._id;
                    });
              (function () {
                var t = Object(l.a)(
                  o.a.mark(function t() {
                    var a;
                    return o.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                p.a.get(te + "api/users/" + e)
                              );
                            case 3:
                              (a = t.sent), Y(a.data), (t.next = 9);
                              break;
                            case 7:
                              (t.prev = 7), (t.t0 = t.catch(0));
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            },
            [Z, i, te]
          ),
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(l.a)(
                  o.a.mark(function e() {
                    var t;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                p.a.get(
                                  te +
                                    "api/messages/" +
                                    (null === i || void 0 === i
                                      ? void 0
                                      : i._id)
                                )
                              );
                            case 3:
                              (t = e.sent), O(t.data), (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [i, te]
          ),
          Object(n.useEffect)(
            function () {
              var e;
              null === (e = $.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth" });
            },
            [h]
          );
        var ae = Object(n.useState)(!1),
          ne = Object(u.a)(ae, 2),
          ce = ne[0],
          se = ne[1],
          re = (function () {
            var e = Object(l.a)(
              o.a.mark(function e(t) {
                var a, n, c;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (a = {
                              chatroomId: i._id,
                              senderId: Z._id,
                              text: g,
                            }),
                            (n = i.members.find(function (e) {
                              return e !== Z._id;
                            })),
                            ee.current.emit("sendMessage", {
                              senderId: Z._id,
                              receiverId: n,
                              text: g,
                            }),
                            (e.prev = 4),
                            (e.next = 7),
                            p.a.post(te + "api/messages/", a)
                          );
                        case 7:
                          (c = e.sent),
                            O([].concat(Object(S.a)(h), [c.data])),
                            N(""),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(4)), console.log(e.t0);
                        case 15:
                          se(!1);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 12]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ie = Object(n.useState)(!1),
          oe = Object(u.a)(ie, 2),
          le = oe[0],
          ue = oe[1],
          je = function () {
            ue(!1 === le), console.log(le);
          },
          de = Object(n.useState)(!1),
          pe = Object(u.a)(de, 2),
          be = pe[0],
          he = pe[1],
          me = function () {
            he(!1 === be);
          };
        return Object(m.jsxs)("div", {
          className: "home",
          children: [
            Object(m.jsx)(k, {
              addchattoggler: function () {
                je();
              },
              addchattoggle: le,
            }),
            Object(m.jsx)(C, {
              toggler: function () {
                me();
              },
              togglestate: be,
            }),
            W
              ? ""
              : Object(m.jsx)("div", {
                  className: "menu-open",
                  onClick: function () {
                    X(!0);
                  },
                  children: Object(m.jsx)(G.a, {
                    children: Object(m.jsx)(D.a, {
                      style: { fontSize: 35, color: "#316af3" },
                    }),
                  }),
                }),
            Object(m.jsx)("div", {
              className: "add-chatroom-icon",
              onClick: je,
              children: Object(m.jsx)(G.a, {
                children: Object(m.jsx)(B.a, {}),
              }),
            }),
            Object(m.jsxs)("div", {
              className: "home-components",
              children: [
                Object(m.jsxs)("div", {
                  className: W ? "sidebar active" : "sidebar",
                  children: [
                    Object(m.jsxs)("div", {
                      className: "sidebar-header",
                      children: [
                        Object(m.jsx)("div", {
                          className: "menu-close",
                          onClick: function () {
                            X(!1);
                          },
                          children: Object(m.jsx)(G.a, {
                            children: Object(m.jsx)(T.a, {
                              style: { fontSize: 35, color: "white" },
                            }),
                          }),
                        }),
                        Object(m.jsx)(G.a, {
                          onClick: function () {
                            me();
                          },
                          children: Object(m.jsx)("img", {
                            className: "user-profile-image",
                            src: (null === Z || void 0 === Z ? void 0 : Z.photo)
                              ? te +
                                "photo/" +
                                (null === Z || void 0 === Z ? void 0 : Z.photo)
                              : "assets/noavatar.jpg",
                            alt: "",
                          }),
                        }),
                        Object(m.jsx)("div", {
                          className: "logout-option",
                          children: Object(m.jsx)(G.a, {
                            onClick: function () {
                              localStorage.removeItem("user"),
                                window.location.reload();
                            },
                            children: Object(m.jsx)(M.a, {}),
                          }),
                        }),
                      ],
                    }),
                    Object(m.jsx)("div", {
                      className: "sidebar-search",
                      children: Object(m.jsxs)("div", {
                        className: "sidebar-search-container",
                        children: [
                          Object(m.jsx)(P.a, {
                            className: "sidebar-searchicon",
                          }),
                          Object(m.jsx)("input", {
                            type: "text",
                            name: "chat-search",
                            placeholder: "Search a Chat",
                          }),
                        ],
                      }),
                    }),
                    Object(m.jsx)("div", {
                      className: "sidebar-chatoptions",
                      children: a.map(function (e) {
                        return Object(m.jsx)(
                          "div",
                          {
                            onClick: function () {
                              j(e), X(!1);
                            },
                            children: Object(m.jsx)(E, {
                              chatroomtile: e,
                              currentUser: Z,
                            }),
                          },
                          null === e || void 0 === e ? void 0 : e._id
                        );
                      }),
                    }),
                  ],
                }),
                Object(m.jsx)("div", {
                  className: "chatroom",
                  children: i
                    ? Object(m.jsxs)(m.Fragment, {
                        children: [
                          Object(m.jsx)("div", {
                            className: "chatroom-header",
                            children: Object(m.jsxs)("div", {
                              className: "chatroom-chatinfo",
                              children: [
                                Object(m.jsx)("img", {
                                  className: "amigo-profilepic",
                                  src: (
                                    null === z || void 0 === z
                                      ? void 0
                                      : z.photo
                                  )
                                    ? te +
                                      "photo/" +
                                      (null === z || void 0 === z
                                        ? void 0
                                        : z.photo)
                                    : "assets/noavatar.jpg",
                                  alt: "",
                                }),
                                Object(m.jsx)("div", {
                                  className: "chatroom-chatinfo-right",
                                  children: Object(m.jsx)("div", {
                                    className: "chatroom-chatinfo-name",
                                    children: Object(m.jsx)("p", {
                                      children:
                                        null === z || void 0 === z
                                          ? void 0
                                          : z.username,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          Object(m.jsx)("div", {
                            className: "chatroom-messages-container",
                            onClick: function () {
                              se(!1);
                            },
                            children: h.map(function (e) {
                              return Object(m.jsx)(
                                "div",
                                {
                                  ref: $,
                                  children: Object(m.jsx)(y, {
                                    message: e,
                                    own:
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.senderId) === Z._id,
                                  }),
                                },
                                null === e || void 0 === e ? void 0 : e._id
                              );
                            }),
                          }),
                          Object(m.jsx)("div", {
                            className: ce
                              ? "emoji-picker-open"
                              : "emoji-picker-close",
                            children: Object(m.jsx)(F.a, {
                              onSelect: function (e) {
                                var t = e.native;
                                N(g + t);
                              },
                              emojiSize: 25,
                            }),
                          }),
                          Object(m.jsxs)("div", {
                            className: "chatroom-footer",
                            children: [
                              Object(m.jsxs)("div", {
                                className: "chatroom-footer-lefticons",
                                children: [
                                  Object(m.jsx)(G.a, {
                                    onClick: function () {
                                      se(!ce);
                                    },
                                    children: Object(m.jsx)(K.a, {}),
                                  }),
                                  Object(m.jsx)(G.a, {
                                    children: Object(m.jsx)(H.a, {}),
                                  }),
                                ],
                              }),
                              Object(m.jsxs)("form", {
                                children: [
                                  Object(m.jsx)("input", {
                                    className: "message-input",
                                    type: "text",
                                    name: "message-input",
                                    placeholder: "Type a message",
                                    onChange: function (e) {
                                      N(e.target.value);
                                    },
                                    value: g,
                                    required: !0,
                                  }),
                                  Object(m.jsx)("button", {
                                    className: "input-button",
                                    onClick: g ? re : null,
                                    children: " Send a Message ",
                                  }),
                                ],
                              }),
                              Object(m.jsx)("div", {
                                className: "chatroom-footer-righticon",
                                onClick: g ? re : null,
                                children: Object(m.jsx)(G.a, {
                                  children: Object(m.jsx)(A.a, {
                                    className: "send-icon",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : Object(m.jsx)(_, {}),
                }),
              ],
            }),
          ],
        });
      };
      var W = function () {
          var e = Object(n.useContext)(x).user;
          return Object(m.jsx)(j.a, {
            children: Object(m.jsx)("div", {
              className: "App",
              children: Object(m.jsxs)(g.d, {
                children: [
                  Object(m.jsx)(g.b, {
                    exact: !0,
                    path: "/",
                    children: e ? Object(m.jsx)(Q, {}) : Object(m.jsx)(v, {}),
                  }),
                  Object(m.jsx)(g.b, {
                    exact: !0,
                    path: "/signin",
                    children: e
                      ? Object(m.jsx)(g.a, { to: "/" })
                      : Object(m.jsx)(v, {}),
                  }),
                  Object(m.jsx)(g.b, {
                    exact: !0,
                    path: "/signup",
                    children: e
                      ? Object(m.jsx)(g.a, { to: "/" })
                      : Object(m.jsx)(N, {}),
                  }),
                ],
              }),
            }),
          });
        },
        X = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 196))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  c = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                a(e), n(e), c(e), s(e), r(e);
              });
        };
      r.a.render(
        Object(m.jsx)(c.a.StrictMode, {
          children: Object(m.jsx)(f, { children: Object(m.jsx)(W, {}) }),
        }),
        document.getElementById("root")
      ),
        X();
    },
  },
  [[177, 1, 2]],
]);
//# sourceMappingURL=main.7f7e5f49.chunk.js.map
