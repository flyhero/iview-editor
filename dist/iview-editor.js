!
    function (e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("iviewEditor", [], t) : "object" == typeof exports ? exports.iviewEditor = t() : e.iviewEditor = t()
    }("undefined" != typeof self ? self : this,
        function () {
            return function (e) {
                function t(Z) {
                    if (Y[Z]) return Y[Z].exports;
                    var n = Y[Z] = {
                        i: Z,
                        l: !1,
                        exports: {}
                    };
                    return e[Z].call(n.exports, n, n.exports, t),
                        n.l = !0,
                        n.exports
                }
                var Y = {};
                return t.m = e,
                    t.c = Y,
                    t.d = function (e, Y, Z) {
                        t.o(e, Y) || Object.defineProperty(e, Y, {
                            configurable: !1,
                            enumerable: !0,
                            get: Z
                        })
                    },
                    t.n = function (e) {
                        var Y = e && e.__esModule ?
                            function () {
                                return e.
                                    default
                            } :
                            function () {
                                return e
                            };
                        return t.d(Y, "a", Y),
                            Y
                    },
                    t.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    },
                    t.p = "/dist/",
                    t(t.s = 4)
            }([function (e, t) {
                e.exports = function (e, t, Y, Z, n, L) {
                    var X, J = e = e || {},
                        S = typeof e.
                            default;
                    "object" !== S && "function" !== S || (X = e, J = e.
                        default);
                    var r = "function" == typeof J ? J.options : J;
                    t && (r.render = t.render, r.staticRenderFns = t.staticRenderFns, r._compiled = !0),
                        Y && (r.functional = !0),
                        n && (r._scopeId = n);
                    var i;
                    if (L ? (i = function (e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                            e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                            Z && Z.call(this, e),
                            e && e._registeredComponents && e._registeredComponents.add(L)
                    },
                        r._ssrRegister = i) : Z && (i = Z), i) {
                        var s = r.functional,
                            o = s ? r.render : r.beforeCreate;
                        s ? (r._injectStyles = i, r.render = function (e, t) {
                            return i.call(t),
                                o(e, t)
                        }) : r.beforeCreate = o ? [].concat(o, i) : [i]
                    }
                    return {
                        esModule: X,
                        exports: J,
                        options: r
                    }
                }
            },
            function (e, t, Y) {
                "use strict";
                function Z(e) {
                    return e && e.__esModule ? e : {
                        default:
                            e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = Y(6),
                    L = Z(n),
                    X = Y(7),
                    J = Z(X),
                    S = Y(9),
                    r = Z(S);
                t.
                    default = {
                        name: "iEditor",
                        components: {
                            Upload: J.
                                default,
                            Markdown: r.
                                default
                        },
                        props: {
                            affix: Boolean,
                            offsetTop: Number,
                            placeholder: String,
                            autosize: Object,
                            writeName: {
                                type: String,
                                default:
                                    "内容"
                            },
                            changeScroll: Boolean,
                            cover: String,
                            showSummary: {
                                type: Boolean,
                                default:
                                    !1
                            },
                            config: {
                                type: Object,
                                default:
                                    function () {
                                        return {
                                            action:
                                                "/",
                                            maxSize: 5120
                                        }
                                    }
                            },
                            value: {
                                type: String,
                                default:
                                    ""
                            },
                            beforeUpload: {
                                type: Function,
                                default:
                                    function () {
                                        return !0
                                    }
                            },
                            imgUrl: {
                                type: Function,
                                default:
                                    function (e) {
                                        return e
                                    }
                            },
                            highlight: {
                                type: Function,
                                default:
                                    function (e) {
                                        return e
                                    }
                            },
                            paste: {
                                type: Boolean,
                                default:
                                    !1
                            }
                        },
                        data: function () {
                            return {
                                tabType: "write",
                                content: this.value,
                                showMdTip: !1,
                                showDiff: !1,
                                showDiffEditor: !1,
                                summary: ""
                            }
                        },
                        watch: {
                            showDiff: function (e) {
                                var t = this;
                                this.$nextTick(function () {
                                    t.showDiffEditor = e
                                })
                            },
                            value: function (e) {
                                this.content = e
                            },
                            content: function (e) {
                                this.$emit("input", e)
                            }
                        },
                        computed: {},
                        methods: {
                            handleChangeTab: function (e) {
                                var t = this;
                                "write" === e ? this.$nextTick(function () {
                                    t.$refs.content.focus()
                                }) : "preview" === e ? this.changeScroll && this.$nextTick(function () {
                                    var e = t.$refs.markdown.$el;
                                    window.scrollTo(0, e.offsetTop)
                                }) : "summary" === e && this.$nextTick(function () {
                                    t.$refs.summary.focus()
                                })
                            },
                            handleUploadSuccess: function (e) {
                                var t = this,
                                    Y = this.imgUrl(e),
                                    Z = "![](" + Y + ")",
                                    n = this.$refs.content.$refs.textarea; (0, L.
                                        default)(n, Z),
                                        this.$nextTick(function () {
                                            t.content = n.value,
                                                t.$refs.content.focus()
                                        })
                            },
                            handleImportMd: function (e) {
                                var t = this;
                                "" !== this.content ? this.$Modal.confirm({
                                    title: "导入确认",
                                    content: "导入后将覆盖您已经输入的内容，是否继续导入？",
                                    onOk: function () {
                                        t.content = e
                                    }
                                }) : this.content = e
                            },
                            focus: function () {
                                this.$refs.content && this.$refs.content.focus()
                            }
                        }
                    }
            },
            function (e, t, Y) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.
                        default = {
                        props: {
                            type: {
                                type: String,
                                default:
                                    "select"
                            },
                            styles: {
                                type: Number,
                                default:
                                    0
                            },
                            cover: String,
                            info: {
                                type: Boolean,
                                default:
                                    !1
                            },
                            showBtn: Boolean,
                            config: Object,
                            beforeUpload: Function,
                            paste: Boolean
                        },
                        data: function () {
                            return {
                                uploadForm: {},
                                uploadPercent: 0,
                                uploadStatus: 0,
                                noUploadAccess: !1
                            }
                        },
                        computed: {},
                        methods: {
                            beforeUploadFile: function (e) {
                                if (6 === this.styles) {
                                    if ("text/markdown" !== e.type) return this.$Notice.warning({
                                        title: "文件格式不正确",
                                        desc: "您上传的文件 " + e.name + " 格式不符合要求，请上传 .md 格式的文件。",
                                        duration: 6
                                    }),
                                        !1;
                                    var t = new FileReader;
                                    t.readAsText(e);
                                    var Y = this;
                                    return t.onload = function () {
                                        Y.$emit("on-success", this.result)
                                    },
                                        !1
                                }
                                return this.beforeUpload(e)
                            },
                            handleSuccess: function (e) {
                                this.uploadStatus = 0,
                                    3 === this.styles && 100 === this.uploadPercent && this.showUploadProgress && (this.showUploadProgress(), this.showUploadProgress = null),
                                    this.$emit("on-success", e)
                            },
                            handleError: function () {
                                this.uploadStatus = 0,
                                    this.$emit("on-error"),
                                    3 === this.styles && this.showUploadProgress && (this.showUploadProgress(), this.showUploadProgress = null)
                            },
                            handleFormatError: function (e) {
                                this.$Notice.warning({
                                    title: "文件格式不正确",
                                    desc: "您上传的文件 " + e.name + " 格式不符合要求，请上传 jpg、png、gif 格式的文件。",
                                    duration: 6
                                })
                            },
                            handleMaxSize: function (e) {
                                this.$Notice.warning({
                                    title: "文件过大",
                                    desc: "您上传的文件 " + e.name + " 体积过大，请上传不超过 " + this.config.maxSize / 1024 + " 的文件。",
                                    duration: 6
                                })
                            },
                            handleProgress: function (e) {
                                var t = this;
                                if (this.$emit("on-progress", e), this.uploadStatus = 1, this.uploadPercent = parseInt(e.percent), 3 === this.styles) {
                                    if (this.noUploadAccess) return;
                                    this.showUploadProgress || (this.showUploadProgress = this.$Message.loading({
                                        duration: 0,
                                        render: function (e) {
                                            return e("span", "图片上传中（" + t.uploadPercent + "%）")
                                        }
                                    }))
                                }
                            }
                        }
                    }
            },
            function (e, t, Y) {
                "use strict";
                function Z(e) {
                    return e && e.__esModule ? e : {
                        default:
                            e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = Y(10),
                    L = Z(n),
                    X = Y(12),
                    J = Z(X);
                t.
                    default = {
                        props: {
                            content: String,
                            highlight: Function
                        },
                        data: function () {
                            return {
                                html: ""
                            }
                        },
                        watch: {
                            content: function () {
                                this.renderMd()
                            }
                        },
                        methods: {
                            renderMd: function () {
                                var e = new L.
                                    default.Renderer;
                                e.heading = function (e, t) {
                                    var Y = J.
                                        default.getFirstLetter(e);
                                    return Y = Y.replace(/\s/g, "_").replace(/\?|？|,/g, ""),
                                        "<h" + t + ' id="' + Y + '">' + e + "</h" + t + ">"
                                };
                                var t = this;
                                this.html = (0, L.
                                    default)(this.content, {
                                        breaks: !0,
                                        headerIds: !1,
                                        highlight: function (e) {
                                            return t.highlight(e)
                                        },
                                        renderer: e
                                    })
                            }
                        },
                        mounted: function () {
                            this.renderMd()
                        }
                    }
            },
            function (e, t, Y) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var Z = Y(5),
                    n = function (e) {
                        return e && e.__esModule ? e : {
                            default:
                                e
                        }
                    }(Z),
                    L = {
                        iEditor: n.
                            default
                    },
                    X = function (e) {
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        e.component("i-editor", n.
                            default)
                    };
                "undefined" != typeof window && window.Vue && X(window.Vue),
                    t.
                        default = Object.assign(L, {
                            install: X
                        })
            },
            function (e, t, Y) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var Z = Y(1),
                    n = Y.n(Z);
                for (var L in Z) "default" !== L &&
                    function (e) {
                        Y.d(t, e,
                            function () {
                                return Z[e]
                            })
                    }(L);
                var X = Y(15),
                    J = Y(0),
                    S = J(n.a, X.a, !1, null, null, null);
                t.
                    default = S.exports
            },
            function (e, t, Y) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.
                        default = function (e, t) {
                            if (document.selection) {
                                document.selection.createRange().text = t
                            } else if ("number" == typeof e.selectionStart && "number" == typeof e.selectionEnd) {
                                var Y = e.selectionStart,
                                    Z = e.selectionEnd,
                                    n = Y,
                                    L = e.value;
                                e.value = L.substring(0, Y) + t + L.substring(Z, L.length),
                                    n += t.length,
                                    e.selectionStart = e.selectionEnd = n
                            } else e.value += t
                        }
            },
            function (e, t, Y) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var Z = Y(2),
                    n = Y.n(Z);
                for (var L in Z) "default" !== L &&
                    function (e) {
                        Y.d(t, e,
                            function () {
                                return Z[e]
                            })
                    }(L);
                var X = Y(8),
                    J = Y(0),
                    S = J(n.a, X.a, !1, null, null, null);
                t.
                    default = S.exports
            },
            function (e, t, Y) {
                "use strict";
                var Z = function () {
                    var e = this,
                        t = e.$createElement,
                        Y = e._self._c || t;
                    return Y("Upload", {
                        attrs: {
                            type: e.type,
                            paste: e.paste,
                            action: e.config.action,
                            "show-upload-list": !1,
                            data: e.config.uploadForm,
                            format: ["jpg", "jpeg", "png", "gif"],
                            "on-format-error": e.handleFormatError,
                            "max-size": e.config.maxSize,
                            "on-exceeded-size": e.handleMaxSize,
                            "before-upload": e.beforeUploadFile,
                            "on-success": e.handleSuccess,
                            "on-error": e.handleError,
                            "on-progress": e.handleProgress
                        }
                    },
                        [e._t("default", [1 === e.styles ? Y("Button", {
                            staticClass: "i-editor-upload-item",
                            attrs: {
                                type: "text",
                                size: "small",
                                disabled: 1 === e.uploadStatus
                            }
                        },
                            [Y("Tooltip", {
                                attrs: {
                                    content: "上传图片",
                                    transfer: ""
                                }
                            },
                                [Y("Icon", {
                                    attrs: {
                                        type: "ios-image"
                                    }
                                })], 1), e._v(" "), Y("span", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.uploadStatus,
                                        expression: "uploadStatus"
                                    }]
                                },
                                    [e._v("(" + e._s(e.uploadPercent) + "%)")])], 1) : e._e(), e._v(" "), 6 === e.styles ? Y("Button", {
                                        staticClass: "i-editor-upload-item",
                                        attrs: {
                                            type: "text",
                                            size: "small"
                                        }
                                    },
                                        [Y("Tooltip", {
                                            attrs: {
                                                content: "导入 Markdown 文件",
                                                transfer: ""
                                            }
                                        },
                                            [Y("Icon", {
                                                attrs: {
                                                    type: "md-document"
                                                }
                                            })], 1)], 1) : e._e()])], 2)
                },
                    n = [],
                    L = {
                        render: Z,
                        staticRenderFns: n
                    };
                t.a = L
            },
            function (e, t, Y) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var Z = Y(3),
                    n = Y.n(Z);
                for (var L in Z) "default" !== L &&
                    function (e) {
                        Y.d(t, e,
                            function () {
                                return Z[e]
                            })
                    }(L);
                var X = Y(14),
                    J = Y(0),
                    S = J(n.a, X.a, !1, null, null, null);
                t.
                    default = S.exports
            },
            function (e, t, Y) {
                (function (t) {
                    !
                    function (t) {
                        "use strict";
                        function Y(e) {
                            this.tokens = [],
                                this.tokens.links = {},
                                this.options = e || C.defaults,
                                this.rules = Q.normal,
                                this.options.gfm && (this.options.tables ? this.rules = Q.tables : this.rules = Q.gfm)
                        }
                        function Z(e, t) {
                            if (this.options = t || C.defaults, this.links = e, this.rules = a.normal, this.renderer = this.options.renderer || new n, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                            this.options.gfm ? this.options.breaks ? this.rules = a.breaks : this.rules = a.gfm : this.options.pedantic && (this.rules = a.pedantic)
                        }
                        function n(e) {
                            this.options = e || {}
                        }
                        function L() { }
                        function X(e) {
                            this.tokens = [],
                                this.token = null,
                                this.options = e || C.defaults,
                                this.options.renderer = this.options.renderer || new n,
                                this.renderer = this.options.renderer,
                                this.renderer.options = this.options
                        }
                        function J(e, t) {
                            return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                        }
                        function S(e) {
                            return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
                                function (e, t) {
                                    return t = t.toLowerCase(),
                                        "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+ t.substring(1)) : ""
                                })
                        }
                        function r(e, t) {
                            return e = e.source,
                                t = t || "",
                                {
                                    replace: function (t, Y) {
                                        return Y = Y.source || Y,
                                            Y = Y.replace(/(^|[^\[])\^/g, "$1"),
                                            e = e.replace(t, Y),
                                            this
                                    },
                                    getRegex: function () {
                                        return new RegExp(e, t)
                                    }
                                }
                        }
                        function i(e, t) {
                            return T[" " + e] || (/^[^:]+:\/*[^\/]*$/.test(e) ? T[" " + e] = e + "/" : T[" " + e] = e.replace(/[^\/]*$/, "")),
                                e = T[" " + e],
                                "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t
                        }
                        function s() { }
                        function o(e) {
                            for (var t, Y, Z = 1; Z < arguments.length; Z++) {
                                t = arguments[Z];
                                for (Y in t) Object.prototype.hasOwnProperty.call(t, Y) && (e[Y] = t[Y])
                            }
                            return e
                        }
                        function C(e, t, Z) {
                            if (void 0 === e || null === e) throw new Error("marked(): input parameter is undefined or null");
                            if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                            if (Z || "function" == typeof t) {
                                Z || (Z = t, t = null),
                                    t = o({},
                                        C.defaults, t || {});
                                var n, L, S = t.highlight,
                                    r = 0;
                                try {
                                    n = Y.lex(e, t)
                                } catch (e) {
                                    return Z(e)
                                }
                                L = n.length;
                                var i = function (e) {
                                    if (e) return t.highlight = S,
                                        Z(e);
                                    var Y;
                                    try {
                                        Y = X.parse(n, t)
                                    } catch (t) {
                                        e = t
                                    }
                                    return t.highlight = S,
                                        e ? Z(e) : Z(null, Y)
                                };
                                if (!S || S.length < 3) return i();
                                if (delete t.highlight, !L) return i();
                                for (; r < n.length; r++) !
                                    function (e) {
                                        "code" !== e.type ? --L || i() : S(e.text, e.lang,
                                            function (t, Y) {
                                                return t ? i(t) : null == Y || Y === e.text ? --L || i() : (e.text = Y, e.escaped = !0, void (--L || i()))
                                            })
                                    }(n[r])
                            } else try {
                                return t && (t = o({},
                                    C.defaults, t)),
                                    X.parse(Y.lex(e, t), t)
                            } catch (e) {
                                if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || C.defaults).silent) return "<p>An error occurred:</p><pre>" + J(e.message + "", !0) + "</pre>";
                                throw e
                            }
                        }
                        var Q = {
                            newline: /^\n+/,
                            code: /^( {4}[^\n]+\n*)+/,
                            fences: s,
                            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                            nptable: s,
                            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                            html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                            table: s,
                            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                            paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
                            text: /^[^\n]+/
                        };
                        Q._label = /(?:\\[\[\]]|[^\[\]])+/,
                            Q._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,
                            Q.def = r(Q.def).replace("label", Q._label).replace("title", Q._title).getRegex(),
                            Q.bullet = /(?:[*+-]|\d+\.)/,
                            Q.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,
                            Q.item = r(Q.item, "gm").replace(/bull/g, Q.bullet).getRegex(),
                            Q.list = r(Q.list).replace(/bull/g, Q.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + Q.def.source + ")").getRegex(),
                            Q._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
                            Q.html = r(Q.html).replace("comment", /<!--[\s\S]*?-->/).replace("closed", /<(tag)[\s\S]+?<\/\1>/).replace("closing", /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g, Q._tag).getRegex(),
                            Q.paragraph = r(Q.paragraph).replace("hr", Q.hr).replace("heading", Q.heading).replace("lheading", Q.lheading).replace("tag", "<" + Q._tag).getRegex(),
                            Q.blockquote = r(Q.blockquote).replace("paragraph", Q.paragraph).getRegex(),
                            Q.normal = o({},
                                Q),
                            Q.gfm = o({},
                                Q.normal, {
                                fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
                                paragraph: /^/,
                                heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                            }),
                            Q.gfm.paragraph = r(Q.paragraph).replace("(?!", "(?!" + Q.gfm.fences.source.replace("\\1", "\\2") + "|" + Q.list.source.replace("\\1", "\\3") + "|").getRegex(),
                            Q.tables = o({},
                                Q.gfm, {
                                nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                                table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
                            }),
                            Y.rules = Q,
                            Y.lex = function (e, t) {
                                return new Y(t).lex(e)
                            },
                            Y.prototype.lex = function (e) {
                                return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"),
                                    this.token(e, !0)
                            },
                            Y.prototype.token = function (e, t) {
                                e = e.replace(/^ +$/gm, "");
                                for (var Y, Z, n, L, X, J, S, r, i, s, o; e;) if ((n = this.rules.newline.exec(e)) && (e = e.substring(n[0].length), n[0].length > 1 && this.tokens.push({
                                    type: "space"
                                })), n = this.rules.code.exec(e)) e = e.substring(n[0].length),
                                    n = n[0].replace(/^ {4}/gm, ""),
                                    this.tokens.push({
                                        type: "code",
                                        text: this.options.pedantic ? n : n.replace(/\n+$/, "")
                                    });
                                else if (n = this.rules.fences.exec(e)) e = e.substring(n[0].length),
                                    this.tokens.push({
                                        type: "code",
                                        lang: n[2],
                                        text: n[3] || ""
                                    });
                                else if (n = this.rules.heading.exec(e)) e = e.substring(n[0].length),
                                    this.tokens.push({
                                        type: "heading",
                                        depth: n[1].length,
                                        text: n[2]
                                    });
                                else if (t && (n = this.rules.nptable.exec(e))) {
                                    for (e = e.substring(n[0].length), J = {
                                        type: "table",
                                        header: n[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                        align: n[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                        cells: n[3].replace(/\n$/, "").split("\n")
                                    },
                                        r = 0; r < J.align.length; r++) / ^*-+:*$ /.test(J.align[r]) ? J.align[r] = "right" : /^ *:-+: *$/.test(J.align[r]) ? J.align[r] = "center" : /^ *:-+ *$/.test(J.align[r]) ? J.align[r] = "left" : J.align[r] = null;
                                    for (r = 0; r < J.cells.length; r++) J.cells[r] = J.cells[r].split(/ *\| */);
                                    this.tokens.push(J)
                                } else if (n = this.rules.hr.exec(e)) e = e.substring(n[0].length),
                                    this.tokens.push({
                                        type: "hr"
                                    });
                                else if (n = this.rules.blockquote.exec(e)) e = e.substring(n[0].length),
                                    this.tokens.push({
                                        type: "blockquote_start"
                                    }),
                                    n = n[0].replace(/^ *> ?/gm, ""),
                                    this.token(n, t),
                                    this.tokens.push({
                                        type: "blockquote_end"
                                    });
                                else if (n = this.rules.list.exec(e)) {
                                    for (e = e.substring(n[0].length), L = n[2], o = L.length > 1, this.tokens.push({
                                        type: "list_start",
                                        ordered: o,
                                        start: o ? +L : ""
                                    }), n = n[0].match(this.rules.item), Y = !1, s = n.length, r = 0; r < s; r++) J = n[r],
                                        S = J.length,
                                        J = J.replace(/^ *([*+-]|\d+\.) +/, ""),
                                        ~J.indexOf("\n ") && (S -= J.length, J = this.options.pedantic ? J.replace(/^ {1,4}/gm, "") : J.replace(new RegExp("^ {1," + S + "}", "gm"), "")),
                                        this.options.smartLists && r !== s - 1 && (X = Q.bullet.exec(n[r + 1])[0], L === X || L.length > 1 && X.length > 1 || (e = n.slice(r + 1).join("\n") + e, r = s - 1)),
                                        Z = Y || /\n\n(?!\s*$)/.test(J),
                                        r !== s - 1 && (Y = "\n" === J.charAt(J.length - 1), Z || (Z = Y)),
                                        this.tokens.push({
                                            type: Z ? "loose_item_start" : "list_item_start"
                                        }),
                                        this.token(J, !1),
                                        this.tokens.push({
                                            type: "list_item_end"
                                        });
                                    this.tokens.push({
                                        type: "list_end"
                                    })
                                } else if (n = this.rules.html.exec(e)) e = e.substring(n[0].length),
                                    this.tokens.push({
                                        type: this.options.sanitize ? "paragraph" : "html",
                                        pre: !this.options.sanitizer && ("pre" === n[1] || "script" === n[1] || "style" === n[1]),
                                        text: n[0]
                                    });
                                else if (t && (n = this.rules.def.exec(e))) e = e.substring(n[0].length),
                                    n[3] && (n[3] = n[3].substring(1, n[3].length - 1)),
                                    i = n[1].toLowerCase(),
                                    this.tokens.links[i] || (this.tokens.links[i] = {
                                        href: n[2],
                                        title: n[3]
                                    });
                                else if (t && (n = this.rules.table.exec(e))) {
                                    for (e = e.substring(n[0].length), J = {
                                        type: "table",
                                        header: n[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                        align: n[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                        cells: n[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                                    },
                                        r = 0; r < J.align.length; r++) / ^*-+:*$ /.test(J.align[r]) ? J.align[r] = "right" : /^ *:-+: *$/.test(J.align[r]) ? J.align[r] = "center" : /^ *:-+ *$/.test(J.align[r]) ? J.align[r] = "left" : J.align[r] = null;
                                    for (r = 0; r < J.cells.length; r++) J.cells[r] = J.cells[r].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                                    this.tokens.push(J)
                                } else if (n = this.rules.lheading.exec(e)) e = e.substring(n[0].length),
                                    this.tokens.push({
                                        type: "heading",
                                        depth: "=" === n[2] ? 1 : 2,
                                        text: n[1]
                                    });
                                else if (t && (n = this.rules.paragraph.exec(e))) e = e.substring(n[0].length),
                                    this.tokens.push({
                                        type: "paragraph",
                                        text: "\n" === n[1].charAt(n[1].length - 1) ? n[1].slice(0, -1) : n[1]
                                    });
                                else if (n = this.rules.text.exec(e)) e = e.substring(n[0].length),
                                    this.tokens.push({
                                        type: "text",
                                        text: n[0]
                                    });
                                else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                                return this.tokens
                            };
                        var a = {
                            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                            url: s,
                            tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
                            link: /^!?\[(inside)\]\(href\)/,
                            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                            nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
                            strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                            em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
                            code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
                            br: /^ {2,}\n(?!\s*$)/,
                            del: s,
                            text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
                        };
                        a._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
                            a._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
                            a.autolink = r(a.autolink).replace("scheme", a._scheme).replace("email", a._email).getRegex(),
                            a._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,
                            a._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,
                            a.link = r(a.link).replace("inside", a._inside).replace("href", a._href).getRegex(),
                            a.reflink = r(a.reflink).replace("inside", a._inside).getRegex(),
                            a.normal = o({},
                                a),
                            a.pedantic = o({},
                                a.normal, {
                                strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                                em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                            }),
                            a.gfm = o({},
                                a.normal, {
                                escape: r(a.escape).replace("])", "~|])").getRegex(),
                                url: r(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email", a._email).getRegex(),
                                _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                                del: /^~~(?=\S)([\s\S]*?\S)~~/,
                                text: r(a.text).replace("]|", "~]|").replace("|", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()
                            }),
                            a.breaks = o({},
                                a.gfm, {
                                br: r(a.br).replace("{2,}", "*").getRegex(),
                                text: r(a.gfm.text).replace("{2,}", "*").getRegex()
                            }),
                            Z.rules = a,
                            Z.output = function (e, t, Y) {
                                return new Z(t, Y).output(e)
                            },
                            Z.prototype.output = function (e) {
                                for (var t, Y, Z, n, L = ""; e;) if (n = this.rules.escape.exec(e)) e = e.substring(n[0].length),
                                    L += n[1];
                                else if (n = this.rules.autolink.exec(e)) e = e.substring(n[0].length),
                                    "@" === n[2] ? (Y = J(this.mangle(n[1])), Z = "mailto:" + Y) : (Y = J(n[1]), Z = Y),
                                    L += this.renderer.link(Z, null, Y);
                                else if (this.inLink || !(n = this.rules.url.exec(e))) {
                                    if (n = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(n[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(n[0]) && (this.inLink = !1),
                                        e = e.substring(n[0].length),
                                        L += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : J(n[0]) : n[0];
                                    else if (n = this.rules.link.exec(e)) e = e.substring(n[0].length),
                                        this.inLink = !0,
                                        L += this.outputLink(n, {
                                            href: n[2],
                                            title: n[3]
                                        }),
                                        this.inLink = !1;
                                    else if ((n = this.rules.reflink.exec(e)) || (n = this.rules.nolink.exec(e))) {
                                        if (e = e.substring(n[0].length), t = (n[2] || n[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                                            L += n[0].charAt(0),
                                                e = n[0].substring(1) + e;
                                            continue
                                        }
                                        this.inLink = !0,
                                            L += this.outputLink(n, t),
                                            this.inLink = !1
                                    } else if (n = this.rules.strong.exec(e)) e = e.substring(n[0].length),
                                        L += this.renderer.strong(this.output(n[2] || n[1]));
                                    else if (n = this.rules.em.exec(e)) e = e.substring(n[0].length),
                                        L += this.renderer.em(this.output(n[2] || n[1]));
                                    else if (n = this.rules.code.exec(e)) e = e.substring(n[0].length),
                                        L += this.renderer.codespan(J(n[2].trim(), !0));
                                    else if (n = this.rules.br.exec(e)) e = e.substring(n[0].length),
                                        L += this.renderer.br();
                                    else if (n = this.rules.del.exec(e)) e = e.substring(n[0].length),
                                        L += this.renderer.del(this.output(n[1]));
                                    else if (n = this.rules.text.exec(e)) e = e.substring(n[0].length),
                                        L += this.renderer.text(J(this.smartypants(n[0])));
                                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                                } else n[0] = this.rules._backpedal.exec(n[0])[0],
                                    e = e.substring(n[0].length),
                                    "@" === n[2] ? (Y = J(n[0]), Z = "mailto:" + Y) : (Y = J(n[0]), Z = "www." === n[1] ? "http://" + Y : Y),
                                    L += this.renderer.link(Z, null, Y);
                                return L
                            },
                            Z.prototype.outputLink = function (e, t) {
                                var Y = J(t.href),
                                    Z = t.title ? J(t.title) : null;
                                return "!" !== e[0].charAt(0) ? this.renderer.link(Y, Z, this.output(e[1])) : this.renderer.image(Y, Z, J(e[1]))
                            },
                            Z.prototype.smartypants = function (e) {
                                return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
                            },
                            Z.prototype.mangle = function (e) {
                                if (!this.options.mangle) return e;
                                for (var t, Y = "",
                                    Z = e.length,
                                    n = 0; n < Z; n++) t = e.charCodeAt(n),
                                        Math.random() > .5 && (t = "x" + t.toString(16)),
                                        Y += "&#" + t + ";";
                                return Y
                            },
                            n.prototype.code = function (e, t, Y) {
                                if (this.options.highlight) {
                                    var Z = this.options.highlight(e, t);
                                    null != Z && Z !== e && (Y = !0, e = Z)
                                }
                            return t ? '<pre><div class="vditor-copy"><span aria-label="复制" class="vditor-tooltipped vditor-tooltipped__w" onclick="this.previousElementSibling.select();document.execCommand("copy");this.setAttribute("aria-label", "已复制")"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"> <path d="M28.681 11.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.379 0-2.5 1.121-2.5 2.5v23c0 1.378 1.121 2.5 2.5 2.5h19c1.378 0 2.5-1.122 2.5-2.5v-15.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 9.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-19c-0.271 0-0.5-0.229-0.5-0.5v-23c0-0.271 0.229-0.5 0.5-0.5 0 0 11.499-0 11.5 0v7c0 0.552 0.448 1 1 1h7v15.5zM18.841 1.319c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.378 0-2.5 1.121-2.5 2.5v23c0 1.207 0.86 2.217 2 2.45v-25.45c0-0.271 0.229-0.5 0.5-0.5h15.215c-0.301-0.248-0.595-0.477-0.873-0.681z"></path> </svg></span></div><code class="' + this.options.langPrefix + J(t, !0) + '">' + (Y ? e : J(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (Y ? e : J(e, !0)) + "\n</code></pre>"
                            },
                            n.prototype.blockquote = function (e) {
                                return "<blockquote>\n" + e + "</blockquote>\n"
                            },
                            n.prototype.html = function (e) {
                                return e
                            },
                            n.prototype.heading = function (e, t, Y) {
                                return "<h" + t + ' id="' + this.options.headerPrefix + Y.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
                            },
                            n.prototype.hr = function () {
                                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                            },
                            n.prototype.list = function (e, t, Y) {
                                var Z = t ? "ol" : "ul";
                                return "<" + Z + (t && 1 !== Y ? ' start="' + Y + '"' : "") + ">\n" + e + "</" + Z + ">\n"
                            },
                            n.prototype.listitem = function (e) {
                                return "<li>" + e + "</li>\n"
                            },
                            n.prototype.paragraph = function (e) {
                                return "<p>" + e + "</p>\n"
                            },
                            n.prototype.table = function (e, t) {
                                return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
                            },
                            n.prototype.tablerow = function (e) {
                                return "<tr>\n" + e + "</tr>\n"
                            },
                            n.prototype.tablecell = function (e, t) {
                                var Y = t.header ? "th" : "td";
                                return (t.align ? "<" + Y + ' style="text-align:' + t.align + '">' : "<" + Y + ">") + e + "</" + Y + ">\n"
                            },
                            n.prototype.strong = function (e) {
                                return "<strong>" + e + "</strong>"
                            },
                            n.prototype.em = function (e) {
                                return "<em>" + e + "</em>"
                            },
                            n.prototype.codespan = function (e) {
                                return "<code>" + e + "</code>"
                            },
                            n.prototype.br = function () {
                                return this.options.xhtml ? "<br/>" : "<br>"
                            },
                            n.prototype.del = function (e) {
                                return "<del>" + e + "</del>"
                            },
                            n.prototype.link = function (e, t, Y) {
                                if (this.options.sanitize) {
                                    try {
                                        var Z = decodeURIComponent(S(e)).replace(/[^\w:]/g, "").toLowerCase()
                                    } catch (e) {
                                        return Y
                                    }
                                    if (0 === Z.indexOf("javascript:") || 0 === Z.indexOf("vbscript:") || 0 === Z.indexOf("data:")) return Y
                                }
                                this.options.baseUrl && !H.test(e) && (e = i(this.options.baseUrl, e));
                                var n = '<a href="' + e + '"';
                                return t && (n += ' title="' + t + '"'),
                                    n += ">" + Y + "</a>"
                            },
                            n.prototype.image = function (e, t, Y) {
                                this.options.baseUrl && !H.test(e) && (e = i(this.options.baseUrl, e));
                                var Z = '<img src="' + e + '" alt="' + Y + '"';
                                return t && (Z += ' title="' + t + '"'),
                                    Z += this.options.xhtml ? "/>" : ">"
                            },
                            n.prototype.text = function (e) {
                                return e
                            },
                            L.prototype.strong = L.prototype.em = L.prototype.codespan = L.prototype.del = L.prototype.text = function (e) {
                                return e
                            },
                            L.prototype.link = L.prototype.image = function (e, t, Y) {
                                return "" + Y
                            },
                            L.prototype.br = function () {
                                return ""
                            },
                            X.parse = function (e, t) {
                                return new X(t).parse(e)
                            },
                            X.prototype.parse = function (e) {
                                this.inline = new Z(e.links, this.options),
                                    this.inlineText = new Z(e.links, o({},
                                        this.options, {
                                        renderer: new L
                                    })),
                                    this.tokens = e.reverse();
                                for (var t = ""; this.next();) t += this.tok();
                                return t
                            },
                            X.prototype.next = function () {
                                return this.token = this.tokens.pop()
                            },
                            X.prototype.peek = function () {
                                return this.tokens[this.tokens.length - 1] || 0
                            },
                            X.prototype.parseText = function () {
                                for (var e = this.token.text;
                                    "text" === this.peek().type;) e += "\n" + this.next().text;
                                return this.inline.output(e)
                            },
                            X.prototype.tok = function () {
                                switch (this.token.type) {
                                    case "space":
                                        return "";
                                    case "hr":
                                        return this.renderer.hr();
                                    case "heading":
                                        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, S(this.inlineText.output(this.token.text)));
                                    case "code":
                                        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                                    case "table":
                                        var e, t, Y, Z, n = "",
                                            L = "";
                                        for (Y = "", e = 0; e < this.token.header.length; e++) Y += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                                            header: !0,
                                            align: this.token.align[e]
                                        });
                                        for (n += this.renderer.tablerow(Y), e = 0; e < this.token.cells.length; e++) {
                                            for (t = this.token.cells[e], Y = "", Z = 0; Z < t.length; Z++) Y += this.renderer.tablecell(this.inline.output(t[Z]), {
                                                header: !1,
                                                align: this.token.align[Z]
                                            });
                                            L += this.renderer.tablerow(Y)
                                        }
                                        return this.renderer.table(n, L);
                                    case "blockquote_start":
                                        for (L = "";
                                            "blockquote_end" !== this.next().type;) L += this.tok();
                                        return this.renderer.blockquote(L);
                                    case "list_start":
                                        L = "";
                                        for (var X = this.token.ordered,
                                            J = this.token.start;
                                            "list_end" !== this.next().type;) L += this.tok();
                                        return this.renderer.list(L, X, J);
                                    case "list_item_start":
                                        for (L = "";
                                            "list_item_end" !== this.next().type;) L += "text" === this.token.type ? this.parseText() : this.tok();
                                        return this.renderer.listitem(L);
                                    case "loose_item_start":
                                        for (L = "";
                                            "list_item_end" !== this.next().type;) L += this.tok();
                                        return this.renderer.listitem(L);
                                    case "html":
                                        var r = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                                        return this.renderer.html(r);
                                    case "paragraph":
                                        return this.renderer.paragraph(this.inline.output(this.token.text));
                                    case "text":
                                        return this.renderer.paragraph(this.parseText())
                                }
                            };
                        var T = {},
                            H = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
                        s.exec = s,
                            C.options = C.setOptions = function (e) {
                                return o(C.defaults, e),
                                    C
                            },
                            C.defaults = {
                                gfm: !0,
                                tables: !0,
                                breaks: !1,
                                pedantic: !1,
                                sanitize: !1,
                                sanitizer: null,
                                mangle: !0,
                                smartLists: !1,
                                silent: !1,
                                highlight: null,
                                langPrefix: "lang-",
                                smartypants: !1,
                                headerPrefix: "",
                                renderer: new n,
                                xhtml: !1,
                                baseUrl: null
                            },
                            C.Parser = X,
                            C.parser = X.parse,
                            C.Renderer = n,
                            C.TextRenderer = L,
                            C.Lexer = Y,
                            C.lexer = Y.lex,
                            C.InlineLexer = Z,
                            C.inlineLexer = Z.output,
                            C.parse = C,
                            e.exports = C
                    }(this || "undefined" != typeof window && window)
                }).call(t, Y(11))
            },
            function (e, t) {
                var Y;
                Y = function () {
                    return this
                }();
                try {
                    Y = Y || Function("return this")() || (0, eval)("this")
                } catch (e) {
                    "object" == typeof window && (Y = window)
                }
                e.exports = Y
            },
            function (e, t, Y) {
                "use strict";
                function Z(e, t, Y) {
                    t = t || "";
                    for (var Z = [""], n = [], X = 0; X < e.length; X++) {
                        n = [];
                        for (var J = e[X].split(t), S = 0; S < J.length; S++) for (var r = 0; r < Z.length; r++) n.push(Z[r] + (Z[r] ? Y : "") + J[S]);
                        Z = n
                    }
                    return L(Z)
                }
                function n(e, t, Y, Z) {
                    var n = window.pinyin_dict_polyphone,
                        L = n[e];
                    if (L) {
                        L = L.split(" ");
                        for (var X = 0; X < L.length; X++) t[X] = L[X] || t[X],
                            Z || (t[X] = s.removeTone(t[X]));
                        return t.join(Y)
                    }
                    for (var X = 0; X < e.length; X++) {
                        L = "";
                        for (var J = 0; J < 7 && X + J < e.length && /^[\u2E80-\u9FFF]+$/.test(e[X + J]); J++) {
                            L += e[X + J];
                            var S = n[L];
                            if (S) {
                                S = S.split(" ");
                                for (var r = 0; r <= J; r++) S[r] && (t[X + r] = Z ? S[r] : s.removeTone(S[r]));
                                break
                            }
                        }
                    }
                    for (var X = 0; X < t.length; X++) t[X] = t[X].replace(/ .*$/g, "");
                    return t.join(Y)
                }
                function L(e) {
                    for (var t = [], Y = {},
                        Z = 0; Z < e.length; Z++) {
                        var n = X(e[Z]) + e[Z];
                        Y[n] || (t.push(e[Z]), Y[n] = !0)
                    }
                    return t
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                    function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    J = Y(13),
                    S = function (e) {
                        return e && e.__esModule ? e : {
                            default:
                                e
                        }
                    }(J),
                    r = {
                        "ā": "a1",
                        "á": "a2",
                        "ǎ": "a3",
                        "à": "a4",
                        "ō": "o1",
                        "ó": "o2",
                        "ǒ": "o3",
                        "ò": "o4",
                        "ē": "e1",
                        "é": "e2",
                        "ě": "e3",
                        "è": "e4",
                        "ī": "i1",
                        "í": "i2",
                        "ǐ": "i3",
                        "ì": "i4",
                        "ū": "u1",
                        "ú": "u2",
                        "ǔ": "u3",
                        "ù": "u4",
                        "ü": "v0",
                        "ǖ": "v1",
                        "ǘ": "v2",
                        "ǚ": "v3",
                        "ǜ": "v4",
                        "ń": "n2",
                        "ň": "n3",
                        "": "m2"
                    },
                    i = {},
                    s = {
                        parseDict: function () {
                            if (S.
                                default && (i.firstletter = S.
                                    default), window.pinyin_dict_notone) {
                                i.notone = {},
                                    i.py2hz = pinyin_dict_notone;
                                for (var e in pinyin_dict_notone) for (var t = pinyin_dict_notone[e], Y = 0, Z = t.length; Y < Z; Y++) i.notone[t[Y]] || (i.notone[t[Y]] = e)
                            }
                            if (window.pinyin_dict_withtone) {
                                i.withtone = {};
                                for (var t = pinyin_dict_withtone.split(","), e = 0, Z = t.length; e < Z; e++) i.withtone[String.fromCharCode(e + 19968)] = t[e];
                                if (window.pinyin_dict_notone) i.py2hz = pinyin_dict_notone;
                                else {
                                    for (var n, L, X = s.removeTone(pinyin_dict_withtone).split(","), J = {},
                                        e = 0, Z = X.length; e < Z; e++) {
                                        L = String.fromCharCode(e + 19968),
                                            n = X[e].split(" ");
                                        for (var Y = 0; Y < n.length; Y++) J[n[Y]] = (J[n[Y]] || "") + L
                                    }
                                    i.py2hz = J
                                }
                            }
                        },
                        getPinyin: function (e, t, Y, L) {
                            if (!e || /^ +$/g.test(e)) return "";
                            t = void 0 == t ? " " : t,
                                Y = void 0 == Y || Y,
                                L = void 0 != L && L;
                            var X = [];
                            if (i.withtone) {
                                for (var J = "",
                                    S = 0,
                                    r = e.length; S < r; S++) {
                                    var s = i.withtone[e[S]];
                                    s ? (L || (s = s.replace(/ .*$/g, "")), Y || (s = this.removeTone(s)), J && (X.push(J), J = ""), X.push(s)) : !e[S] || /^ +$/g.test(e[S]) ? J && (X.push(J), J = "") : J += e[S]
                                }
                                J && (X.push(J), J = "")
                            } else {
                                if (!i.notone) throw "抱歉，未找到合适的拼音字典文件！";
                                Y && console.warn("pinyin_dict_notone 字典文件不支持声调！"),
                                    L && console.warn("pinyin_dict_notone 字典文件不支持多音字！");
                                for (var J = "",
                                    S = 0,
                                    r = e.length; S < r; S++) {
                                    var o = e.charAt(S),
                                        s = i.notone[o];
                                    s ? (J && (X.push(J), J = ""), X.push(s)) : !o || /^ +$/g.test(o) ? J && (X.push(J), J = "") : J += o
                                }
                                J && (X.push(J), J = "")
                            }
                            return L ? window.pinyin_dict_polyphone ? n(e, X, t, Y) : Z(X, " ", t) : X.join(t)
                        },
                        getFirstLetter: function (e, t) {
                            if (t = void 0 != t && t, !e || /^ +$/g.test(e)) return "";
                            if (i.firstletter) {
                                for (var Y = [], n = 0; n < e.length; n++) {
                                    var X = e.charCodeAt(n),
                                        J = e.charAt(n);
                                    X >= 19968 && X <= 40869 && (J = i.firstletter.all.charAt(X - 19968), t && (J = i.firstletter.polyphone[X] || J)),
                                        Y.push(J)
                                }
                                return t ? Z(Y, "", "") : Y.join("")
                            }
                            var S = this.getPinyin(e, " ", !1, t);
                            S = S instanceof Array ? S : [S];
                            for (var Y = [], n = 0; n < S.length; n++) Y.push(S[n].replace(/(^| )(\w)\w*/g,
                                function (e, t, Y) {
                                    return Y.toUpperCase()
                                }));
                            return t ? L(Y) : Y[0]
                        },
                        getHanzi: function (e) {
                            if (!i.py2hz) throw "抱歉，未找到合适的拼音字典文件！";
                            return i.py2hz[this.removeTone(e)] || ""
                        },
                        getSameVoiceWord: function (e, t) {
                            return t = t || !1,
                                this.getHanzi(this.getPinyin(e, " ", !1))
                        },
                        removeTone: function (e) {
                            return e.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g,
                                function (e) {
                                    return r[e][0]
                                })
                        },
                        getTone: function (e) {
                            var t = {};
                            for (var Y in r) t[r[Y]] = Y;
                            return (e || "").replace(/[a-z]\d/g,
                                function (e) {
                                    return t[e] || e
                                })
                        }
                    };
                s.parseDict(),
                    s.dict = i,
                    t.
                        default = s
            },
            function (e, t, Y) {
                "use strict";
                function Z(e, t, Y) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: Y,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = Y,
                        e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n, L = {};
                L.all = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY",
                    L.polyphone = (n = {
                        19969: "DZ",
                        19975: "WM",
                        19988: "QJ",
                        20048: "YL",
                        20056: "SC",
                        20060: "NM",
                        20094: "QG",
                        20127: "QJ",
                        20167: "QC",
                        20193: "YG",
                        20250: "KH",
                        20256: "ZC",
                        20282: "SC",
                        20285: "QJG",
                        20291: "TD",
                        20314: "YD",
                        20340: "NE",
                        20375: "TD",
                        20389: "YJ",
                        20391: "CZ",
                        20415: "PB",
                        20446: "YS",
                        20447: "SQ",
                        20504: "TC",
                        20608: "KG",
                        20854: "QJ",
                        20857: "ZC",
                        20911: "PF"
                    },
                        Z(n, "20504", "TC"), Z(n, "20608", "KG"), Z(n, "20854", "QJ"), Z(n, "20857", "ZC"), Z(n, "20911", "PF"), Z(n, "20985", "AW"), Z(n, "21032", "PB"), Z(n, "21048", "XQ"), Z(n, "21049", "SC"), Z(n, "21089", "YS"), Z(n, "21119", "JC"), Z(n, "21242", "SB"), Z(n, "21273", "SC"), Z(n, "21305", "YP"), Z(n, "21306", "QO"), Z(n, "21330", "ZC"), Z(n, "21333", "SDC"), Z(n, "21345", "QK"), Z(n, "21378", "CA"), Z(n, "21397", "SC"), Z(n, "21414", "XS"), Z(n, "21442", "SC"), Z(n, "21477", "JG"), Z(n, "21480", "TD"), Z(n, "21484", "ZS"), Z(n, "21494", "YX"), Z(n, "21505", "YX"), Z(n, "21512", "HG"), Z(n, "21523", "XH"), Z(n, "21537", "PB"), Z(n, "21542", "PF"), Z(n, "21549", "KH"), Z(n, "21571", "E"), Z(n, "21574", "DA"), Z(n, "21588", "TD"), Z(n, "21589", "O"), Z(n, "21618", "ZC"), Z(n, "21621", "KHA"), Z(n, "21632", "ZJ"), Z(n, "21654", "KG"), Z(n, "21679", "LKG"), Z(n, "21683", "KH"), Z(n, "21710", "A"), Z(n, "21719", "YH"), Z(n, "21734", "WOE"), Z(n, "21769", "A"), Z(n, "21780", "WN"), Z(n, "21804", "XH"), Z(n, "21834", "A"), Z(n, "21899", "ZD"), Z(n, "21903", "RN"), Z(n, "21908", "WO"), Z(n, "21939", "ZC"), Z(n, "21956", "SA"), Z(n, "21964", "YA"), Z(n, "21970", "TD"), Z(n, "22003", "A"), Z(n, "22031", "JG"), Z(n, "22040", "XS"), Z(n, "22060", "ZC"), Z(n, "22066", "ZC"), Z(n, "22079", "MH"), Z(n, "22129", "XJ"), Z(n, "22179", "XA"), Z(n, "22237", "NJ"), Z(n, "22244", "TD"), Z(n, "22280", "JQ"), Z(n, "22300", "YH"), Z(n, "22313", "XW"), Z(n, "22331", "YQ"), Z(n, "22343", "YJ"), Z(n, "22351", "PH"), Z(n, "22395", "DC"), Z(n, "22412", "TD"), Z(n, "22484", "PB"), Z(n, "22500", "PB"), Z(n, "22534", "ZD"), Z(n, "22549", "DH"), Z(n, "22561", "PB"), Z(n, "22612", "TD"), Z(n, "22771", "KQ"), Z(n, "22831", "HB"), Z(n, "22841", "JG"), Z(n, "22855", "QJ"), Z(n, "22865", "XQ"), Z(n, "23013", "ML"), Z(n, "23081", "WM"), Z(n, "23487", "SX"), Z(n, "23558", "QJ"), Z(n, "23561", "YW"), Z(n, "23586", "YW"), Z(n, "23614", "YW"), Z(n, "23615", "SN"), Z(n, "23631", "PB"), Z(n, "23646", "ZS"), Z(n, "23663", "ZT"), Z(n, "23673", "YG"), Z(n, "23762", "TD"), Z(n, "23769", "ZS"), Z(n, "23780", "QJ"), Z(n, "23884", "QK"), Z(n, "24055", "XH"), Z(n, "24113", "DC"), Z(n, "24162", "ZC"), Z(n, "24191", "GA"), Z(n, "24273", "QJ"), Z(n, "24324", "NL"), Z(n, "24377", "TD"), Z(n, "24378", "QJ"), Z(n, "24439", "PF"), Z(n, "24554", "ZS"), Z(n, "24683", "TD"), Z(n, "24694", "WE"), Z(n, "24733", "LK"), Z(n, "24925", "TN"), Z(n, "25094", "ZG"), Z(n, "25100", "XQ"), Z(n, "25103", "XH"), Z(n, "25153", "PB"), Z(n, "25170", "PB"), Z(n, "25179", "KG"), Z(n, "25203", "PB"), Z(n, "25240", "ZS"), Z(n, "25282", "FB"), Z(n, "25303", "NA"), Z(n, "25324", "KG"), Z(n, "25341", "ZY"), Z(n, "25373", "WZ"), Z(n, "25375", "XJ"), Z(n, "25384", "A"), Z(n, "25457", "A"), Z(n, "25528", "SD"), Z(n, "25530", "SC"), Z(n, "25552", "TD"), Z(n, "25774", "ZC"), Z(n, "25874", "ZC"), Z(n, "26044", "YW"), Z(n, "26080", "WM"), Z(n, "26292", "PB"), Z(n, "26333", "PB"), Z(n, "26355", "ZY"), Z(n, "26366", "CZ"), Z(n, "26397", "ZC"), Z(n, "26399", "QJ"), Z(n, "26415", "ZS"), Z(n, "26451", "SB"), Z(n, "26526", "ZC"), Z(n, "26552", "JG"), Z(n, "26561", "TD"), Z(n, "26588", "JG"), Z(n, "26597", "CZ"), Z(n, "26629", "ZS"), Z(n, "26638", "YL"), Z(n, "26646", "XQ"), Z(n, "26653", "KG"), Z(n, "26657", "XJ"), Z(n, "26727", "HG"), Z(n, "26894", "ZC"), Z(n, "26937", "ZS"), Z(n, "26946", "ZC"), Z(n, "26999", "KJ"), Z(n, "27099", "KJ"), Z(n, "27449", "YQ"), Z(n, "27481", "XS"), Z(n, "27542", "ZS"), Z(n, "27663", "ZS"), Z(n, "27748", "TS"), Z(n, "27784", "SC"), Z(n, "27788", "ZD"), Z(n, "27795", "TD"), Z(n, "27812", "O"), Z(n, "27850", "PB"), Z(n, "27852", "MB"), Z(n, "27895", "SL"), Z(n, "27898", "PL"), Z(n, "27973", "QJ"), Z(n, "27981", "KH"), Z(n, "27986", "HX"), Z(n, "27994", "XJ"), Z(n, "28044", "YC"), Z(n, "28065", "WG"), Z(n, "28177", "SM"), Z(n, "28267", "QJ"), Z(n, "28291", "KH"), Z(n, "28337", "ZQ"), Z(n, "28463", "TL"), Z(n, "28548", "DC"), Z(n, "28601", "TD"), Z(n, "28689", "PB"), Z(n, "28805", "JG"), Z(n, "28820", "QG"), Z(n, "28846", "PB"), Z(n, "28952", "TD"), Z(n, "28975", "ZC"), Z(n, "29100", "A"), Z(n, "29325", "QJ"), Z(n, "29575", "SL"), Z(n, "29602", "FB"), Z(n, "30010", "TD"), Z(n, "30044", "CX"), Z(n, "30058", "PF"), Z(n, "30091", "YSP"), Z(n, "30111", "YN"), Z(n, "30229", "XJ"), Z(n, "30427", "SC"), Z(n, "30465", "SX"), Z(n, "30631", "YQ"), Z(n, "30655", "QJ"), Z(n, "30684", "QJG"), Z(n, "30707", "SD"), Z(n, "30729", "XH"), Z(n, "30796", "LG"), Z(n, "30917", "PB"), Z(n, "31074", "NM"), Z(n, "31085", "JZ"), Z(n, "31109", "SC"), Z(n, "31181", "ZC"), Z(n, "31192", "MLB"), Z(n, "31293", "JQ"), Z(n, "31400", "YX"), Z(n, "31584", "YJ"), Z(n, "31896", "ZN"), Z(n, "31909", "ZY"), Z(n, "31995", "XJ"), Z(n, "32321", "PF"), Z(n, "32327", "ZY"), Z(n, "32418", "HG"), Z(n, "32420", "XQ"), Z(n, "32421", "HG"), Z(n, "32438", "LG"), Z(n, "32473", "GJ"), Z(n, "32488", "TD"), Z(n, "32521", "QJ"), Z(n, "32527", "PB"), Z(n, "32562", "ZSQ"), Z(n, "32564", "JZ"), Z(n, "32735", "ZD"), Z(n, "32793", "PB"), Z(n, "33071", "PF"), Z(n, "33098", "XL"), Z(n, "33100", "YA"), Z(n, "33152", "PB"), Z(n, "33261", "CX"), Z(n, "33324", "BP"), Z(n, "33333", "TD"), Z(n, "33406", "YA"), Z(n, "33426", "WM"), Z(n, "33432", "PB"), Z(n, "33445", "JG"), Z(n, "33486", "ZN"), Z(n, "33493", "TS"), Z(n, "33507", "QJ"), Z(n, "33540", "QJ"), Z(n, "33544", "ZC"), Z(n, "33564", "XQ"), Z(n, "33617", "YT"), Z(n, "33632", "QJ"), Z(n, "33636", "XH"), Z(n, "33637", "YX"), Z(n, "33694", "WG"), Z(n, "33705", "PF"), Z(n, "33728", "YW"), Z(n, "33882", "SR"), Z(n, "34067", "WM"), Z(n, "34074", "YW"), Z(n, "34121", "QJ"), Z(n, "34255", "ZC"), Z(n, "34259", "XL"), Z(n, "34425", "JH"), Z(n, "34430", "XH"), Z(n, "34485", "KH"), Z(n, "34503", "YS"), Z(n, "34532", "HG"), Z(n, "34552", "XS"), Z(n, "34558", "YE"), Z(n, "34593", "ZL"), Z(n, "34660", "YQ"), Z(n, "34892", "XH"), Z(n, "34928", "SC"), Z(n, "34999", "QJ"), Z(n, "35048", "PB"), Z(n, "35059", "SC"), Z(n, "35098", "ZC"), Z(n, "35203", "TQ"), Z(n, "35265", "JX"), Z(n, "35299", "JX"), Z(n, "35782", "SZ"), Z(n, "35828", "YS"), Z(n, "35830", "E"), Z(n, "35843", "TD"), Z(n, "35895", "YG"), Z(n, "35977", "MH"), Z(n, "36158", "JG"), Z(n, "36228", "QJ"), Z(n, "36426", "XQ"), Z(n, "36466", "DC"), Z(n, "36710", "JC"), Z(n, "36711", "ZYG"), Z(n, "36767", "PB"), Z(n, "36866", "SK"), Z(n, "36951", "YW"), Z(n, "37034", "YX"), Z(n, "37063", "XH"), Z(n, "37218", "ZC"), Z(n, "37325", "ZC"), Z(n, "38063", "PB"), Z(n, "38079", "TD"), Z(n, "38085", "QY"), Z(n, "38107", "DC"), Z(n, "38116", "TD"), Z(n, "38123", "YD"), Z(n, "38224", "HG"), Z(n, "38241", "XTC"), Z(n, "38271", "ZC"), Z(n, "38415", "YE"), Z(n, "38426", "KH"), Z(n, "38461", "YD"), Z(n, "38463", "AE"), Z(n, "38466", "PB"), Z(n, "38477", "XJ"), Z(n, "38518", "YT"), Z(n, "38551", "WK"), Z(n, "38585", "ZC"), Z(n, "38704", "XS"), Z(n, "38739", "LJ"), Z(n, "38761", "GJ"), Z(n, "38808", "SQ"), Z(n, "39048", "JG"), Z(n, "39049", "XJ"), Z(n, "39052", "HG"), Z(n, "39076", "CZ"), Z(n, "39271", "XT"), Z(n, "39534", "TD"), Z(n, "39552", "TD"), Z(n, "39584", "PB"), Z(n, "39647", "SB"), Z(n, "39730", "LG"), Z(n, "39748", "TPB"), Z(n, "40109", "ZQ"), Z(n, "40479", "ND"), Z(n, "40516", "HG"), Z(n, "40536", "HG"), Z(n, "40583", "QJ"), Z(n, "40765", "YQ"), Z(n, "40784", "QJ"), Z(n, "40840", "YK"), Z(n, "40863", "QJG"), n),
                    t.
                        default = L
            },
            function (e, t, Y) {
                "use strict";
                var Z = function () {
                    var e = this,
                        t = e.$createElement,
                        Y = e._self._c || t;
                    return Y("div", {
                        staticClass: "i-editor-md"
                    },
                        [e._t("default"), e._v(" "), Y("div", {
                            ref: "content",
                            staticClass: "dev-md-content",
                            domProps: {
                                innerHTML: e._s(e.html)
                            }
                        })], 2)
                },
                    n = [],
                    L = {
                        render: Z,
                        staticRenderFns: n
                    };
                t.a = L
            },
            function (e, t, Y) {
                "use strict";
                var Z = function () {
                    var e = this,
                        t = e.$createElement,
                        Y = e._self._c || t;
                    return Y("div", {
                        staticClass: "i-editor"
                    },
                        [e.affix ? Y("Affix", {
                            attrs: {
                                "offset-top": e.offsetTop
                            }
                        },
                            [Y("div", {
                                staticClass: "i-editor-tabs"
                            },
                                [Y("Tabs", {
                                    attrs: {
                                        animated: !1
                                    },
                                    on: {
                                        "on-click": e.handleChangeTab
                                    },
                                    model: {
                                        value: e.tabType,
                                        callback: function (t) {
                                            e.tabType = t
                                        },
                                        expression: "tabType"
                                    }
                                },
                                    [Y("TabPane", {
                                        attrs: {
                                            label: e.writeName,
                                            name: "write"
                                        }
                                    }), e._v(" "), Y("TabPane", {
                                        attrs: {
                                            label: "预览",
                                            name: "preview"
                                        }
                                    }), e._v(" "), e.showSummary ? Y("TabPane", {
                                        attrs: {
                                            label: "写摘要",
                                            name: "summary"
                                        }
                                    }) : e._e(), e._v(" "), Y("div", {
                                        staticClass: "i-editor-upload",
                                        attrs: {
                                            slot: "extra"
                                        },
                                        slot: "extra"
                                    },
                                        [Y("Upload", {
                                            attrs: {
                                                config: e.config,
                                                "before-upload": e.beforeUpload,
                                                styles: 1
                                            },
                                            on: {
                                                "on-success": e.handleUploadSuccess
                                            }
                                        }), e._v(" "), Y("Upload", {
                                            attrs: {
                                                config: e.config,
                                                styles: 6
                                            },
                                            on: {
                                                "on-success": e.handleImportMd
                                            }
                                        }), e._v(" "), Y("Button", {
                                            staticClass: "i-editor-upload-item",
                                            attrs: {
                                                type: "text",
                                                size: "small"
                                            },
                                            on: {
                                                click: function (t) {
                                                    e.showDiff = !0
                                                }
                                            }
                                        },
                                            [Y("Tooltip", {
                                                attrs: {
                                                    content: "全屏编辑",
                                                    transfer: ""
                                                }
                                            },
                                                [Y("Icon", {
                                                    attrs: {
                                                        type: "md-expand"
                                                    }
                                                })], 1)], 1), e._v(" "), Y("Button", {
                                                    staticClass: "i-editor-upload-item",
                                                    attrs: {
                                                        type: "text",
                                                        size: "small"
                                                    },
                                                    on: {
                                                        click: function (t) {
                                                            e.showMdTip = !0
                                                        }
                                                    }
                                                },
                                                    [Y("Tooltip", {
                                                        attrs: {
                                                            content: "Markdown 语法提示",
                                                            transfer: ""
                                                        }
                                                    },
                                                        [Y("Icon", {
                                                            attrs: {
                                                                type: "logo-markdown"
                                                            }
                                                        })], 1)], 1)], 1)], 1)], 1)]) : Y("div", {
                                                            staticClass: "i-editor-tabs"
                                                        },
                                                            [Y("Tabs", {
                                                                attrs: {
                                                                    animated: !1
                                                                },
                                                                on: {
                                                                    "on-click": e.handleChangeTab
                                                                },
                                                                model: {
                                                                    value: e.tabType,
                                                                    callback: function (t) {
                                                                        e.tabType = t
                                                                    },
                                                                    expression: "tabType"
                                                                }
                                                            },
                                                                [Y("TabPane", {
                                                                    attrs: {
                                                                        label: e.writeName,
                                                                        name: "write"
                                                                    }
                                                                }), e._v(" "), Y("TabPane", {
                                                                    attrs: {
                                                                        label: "预览",
                                                                        name: "preview"
                                                                    }
                                                                }), e._v(" "), e.showSummary ? Y("TabPane", {
                                                                    attrs: {
                                                                        label: "写摘要",
                                                                        name: "summary"
                                                                    }
                                                                }) : e._e(), e._v(" "), Y("div", {
                                                                    staticClass: "i-editor-upload",
                                                                    attrs: {
                                                                        slot: "extra"
                                                                    },
                                                                    slot: "extra"
                                                                },
                                                                    [Y("Upload", {
                                                                        attrs: {
                                                                            config: e.config,
                                                                            "before-upload": e.beforeUpload,
                                                                            styles: 1
                                                                        },
                                                                        on: {
                                                                            "on-success": e.handleUploadSuccess
                                                                        }
                                                                    }), e._v(" "), Y("Upload", {
                                                                        attrs: {
                                                                            config: e.config,
                                                                            styles: 6
                                                                        },
                                                                        on: {
                                                                            "on-success": e.handleImportMd
                                                                        }
                                                                    }), e._v(" "), Y("Button", {
                                                                        staticClass: "i-editor-upload-item",
                                                                        attrs: {
                                                                            type: "text",
                                                                            size: "small"
                                                                        },
                                                                        on: {
                                                                            click: function (t) {
                                                                                e.showDiff = !0
                                                                            }
                                                                        }
                                                                    },
                                                                        [Y("Tooltip", {
                                                                            attrs: {
                                                                                content: "全屏编辑",
                                                                                transfer: ""
                                                                            }
                                                                        },
                                                                            [Y("Icon", {
                                                                                attrs: {
                                                                                    type: "md-expand"
                                                                                }
                                                                            })], 1)], 1), e._v(" "), Y("Button", {
                                                                                staticClass: "i-editor-upload-item",
                                                                                attrs: {
                                                                                    type: "text",
                                                                                    size: "small"
                                                                                },
                                                                                on: {
                                                                                    click: function (t) {
                                                                                        e.showMdTip = !0
                                                                                    }
                                                                                }
                                                                            },
                                                                                [Y("Tooltip", {
                                                                                    attrs: {
                                                                                        content: "Markdown 语法提示",
                                                                                        transfer: ""
                                                                                    }
                                                                                },
                                                                                    [Y("Icon", {
                                                                                        attrs: {
                                                                                            type: "logo-markdown"
                                                                                        }
                                                                                    })], 1)], 1)], 1)], 1)], 1), e._v(" "), Y("div", {
                                                                                        staticClass: "i-editor-md"
                                                                                    },
                                                                                        [e.showDiff ? e._e() : Y("div", {
                                                                                            directives: [{
                                                                                                name: "show",
                                                                                                rawName: "v-show",
                                                                                                value: "write" === e.tabType,
                                                                                                expression: "tabType === 'write'"
                                                                                            }],
                                                                                            staticClass: "i-editor-wrapper"
                                                                                        },
                                                                                            [Y("Upload", {
                                                                                                attrs: {
                                                                                                    paste: e.paste,
                                                                                                    config: e.config,
                                                                                                    "before-upload": e.beforeUpload,
                                                                                                    type: "drag",
                                                                                                    styles: 3
                                                                                                },
                                                                                                on: {
                                                                                                    "on-success": e.handleUploadSuccess
                                                                                                },
                                                                                                nativeOn: {
                                                                                                    click: function (e) {
                                                                                                        e.preventDefault(),
                                                                                                            e.stopPropagation()
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                                [Y("Input", {
                                                                                                    ref: "content",
                                                                                                    attrs: {
                                                                                                        placeholder: e.placeholder,
                                                                                                        type: "textarea",
                                                                                                        autosize: e.autosize
                                                                                                    },
                                                                                                    model: {
                                                                                                        value: e.content,
                                                                                                        callback: function (t) {
                                                                                                            e.content = t
                                                                                                        },
                                                                                                        expression: "content"
                                                                                                    }
                                                                                                })], 1)], 1), e._v(" "), "preview" === e.tabType ? Y("div", {
                                                                                                    staticClass: "i-editor-wrapper"
                                                                                                },
                                                                                                    [Y("Markdown", {
                                                                                                        ref: "markdown",
                                                                                                        attrs: {
                                                                                                            content: e.content,
                                                                                                            highlight: e.highlight
                                                                                                        }
                                                                                                    })], 1) : e._e(), e._v(" "), "summary" === e.tabType ? Y("div", {
                                                                                                        staticClass: "i-editor-wrapper"
                                                                                                    },
                                                                                                        [Y("Input", {
                                                                                                            ref: "summary",
                                                                                                            attrs: {
                                                                                                                placeholder: "摘要会在文章列表显示，只支持纯文本。",
                                                                                                                type: "textarea",
                                                                                                                autosize: {
                                                                                                                    minRows: 6
                                                                                                                }
                                                                                                            },
                                                                                                            model: {
                                                                                                                value: e.summary,
                                                                                                                callback: function (t) {
                                                                                                                    e.summary = t
                                                                                                                },
                                                                                                                expression: "summary"
                                                                                                            }
                                                                                                        })], 1) : e._e()]), e._v(" "), Y("Modal", {
                                                                                                            staticClass: "i-editor-md-tip",
                                                                                                            attrs: {
                                                                                                                title: "常用 Markdown 语法",
                                                                                                                scrollable: "",
                                                                                                                width: "300",
                                                                                                                draggable: "",
                                                                                                                "footer-hide": ""
                                                                                                            },
                                                                                                            model: {
                                                                                                                value: e.showMdTip,
                                                                                                                callback: function (t) {
                                                                                                                    e.showMdTip = t
                                                                                                                },
                                                                                                                expression: "showMdTip"
                                                                                                            }
                                                                                                        },
                                                                                                            [Y("row", [Y("i-col", {
                                                                                                                attrs: {
                                                                                                                    span: "10"
                                                                                                                }
                                                                                                            },
                                                                                                                [Y("div", [Y("strong", [e._v("Markdown")])]), e._v(" "), Y("div", [e._v("# 标题")]), e._v(" "), Y("div", [e._v("## 标题")]), e._v(" "), Y("div", [e._v("**粗体**")]), e._v(" "), Y("div", [e._v("*斜体*")]), e._v(" "), Y("div", [e._v("[描述](http://)")]), e._v(" "), Y("div", [e._v("`code`")]), e._v(" "), Y("div", [e._v("```code```")]), e._v(" "), Y("div", [e._v("![alt](http://)")]), e._v(" "), Y("div", [e._v("- item")]), e._v(" "), Y("div", [e._v("1. item")]), e._v(" "), Y("div", [e._v("> 引用内容")])]), e._v(" "), Y("i-col", {
                                                                                                                    attrs: {
                                                                                                                        span: "14"
                                                                                                                    }
                                                                                                                },
                                                                                                                    [Y("div", [Y("strong", [e._v("结果")])]), e._v(" "), Y("div", [e._v("H1")]), e._v(" "), Y("div", [e._v("H2")]), e._v(" "), Y("div", [Y("strong", [e._v("粗体")])]), e._v(" "), Y("div", [Y("i", [e._v("斜体")])]), e._v(" "), Y("div", [Y("a", {
                                                                                                                        attrs: {
                                                                                                                            href: "javascript:void(0)"
                                                                                                                        }
                                                                                                                    },
                                                                                                                        [e._v("链接")])]), e._v(" "), Y("div", [Y("code", [e._v("Inline Code")])]), e._v(" "), Y("div", [Y("code", [e._v("Code")])]), e._v(" "), Y("div", [e._v("图片")]), e._v(" "), Y("div", [Y("ul", [Y("li", [e._v("无序列表")])])]), e._v(" "), Y("div", [Y("ol", [Y("li", [e._v("有序列表")])])]), e._v(" "), Y("div", [Y("blockquote", [e._v("引用内容")])])])], 1), e._v(" "), Y("a", {
                                                                                                                            attrs: {
                                                                                                                                href: "http://wowubuntu.com/markdown/",
                                                                                                                                target: "_blank"
                                                                                                                            }
                                                                                                                        },
                                                                                                                            [e._v("更多语法")])], 1), e._v(" "), Y("Modal", {
                                                                                                                                attrs: {
                                                                                                                                    closable: !1,
                                                                                                                                    "mask-closable": !1,
                                                                                                                                    width: "100",
                                                                                                                                    "class-name": "i-editor-fullscreen",
                                                                                                                                    "footer-hide": "",
                                                                                                                                    "transition-names": ["", ""]
                                                                                                                                },
                                                                                                                                model: {
                                                                                                                                    value: e.showDiff,
                                                                                                                                    callback: function (t) {
                                                                                                                                        e.showDiff = t
                                                                                                                                    },
                                                                                                                                    expression: "showDiff"
                                                                                                                                }
                                                                                                                            },
                                                                                                                                [e.showDiff ? Y("div", {
                                                                                                                                    staticClass: "i-editor-fullscreen-container"
                                                                                                                                },
                                                                                                                                    [Y("div", {
                                                                                                                                        staticClass: "i-editor-fullscreen-header",
                                                                                                                                        attrs: {
                                                                                                                                            slot: "header"
                                                                                                                                        },
                                                                                                                                        slot: "header"
                                                                                                                                    },
                                                                                                                                        [Y("p", [e._v("全屏编辑")]), e._v(" "), Y("div", {
                                                                                                                                            staticClass: "i-editor-fullscreen-header-tip"
                                                                                                                                        },
                                                                                                                                            [Y("Upload", {
                                                                                                                                                attrs: {
                                                                                                                                                    config: e.config,
                                                                                                                                                    "before-upload": e.beforeUpload,
                                                                                                                                                    styles: 1
                                                                                                                                                },
                                                                                                                                                on: {
                                                                                                                                                    "on-success": e.handleUploadSuccess
                                                                                                                                                }
                                                                                                                                            }), e._v(" "), Y("Button", {
                                                                                                                                                staticClass: "i-editor-item",
                                                                                                                                                attrs: {
                                                                                                                                                    type: "text",
                                                                                                                                                    size: "small"
                                                                                                                                                },
                                                                                                                                                on: {
                                                                                                                                                    click: function (t) {
                                                                                                                                                        e.showDiff = !1
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                                [Y("Tooltip", {
                                                                                                                                                    attrs: {
                                                                                                                                                        content: "退出全屏",
                                                                                                                                                        transfer: ""
                                                                                                                                                    }
                                                                                                                                                },
                                                                                                                                                    [Y("Icon", {
                                                                                                                                                        attrs: {
                                                                                                                                                            type: "md-contract"
                                                                                                                                                        }
                                                                                                                                                    })], 1)], 1)], 1)]), e._v(" "), Y("div", {
                                                                                                                                                        staticClass: "i-editor-fullscreen-main"
                                                                                                                                                    },
                                                                                                                                                        [Y("row", {
                                                                                                                                                            attrs: {
                                                                                                                                                                gutter: 32
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                            [Y("i-col", {
                                                                                                                                                                attrs: {
                                                                                                                                                                    span: "12"
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                                [e.showDiffEditor ? Y("Upload", {
                                                                                                                                                                    attrs: {
                                                                                                                                                                        paste: e.paste,
                                                                                                                                                                        config: e.config,
                                                                                                                                                                        "before-upload": e.beforeUpload,
                                                                                                                                                                        type: "drag",
                                                                                                                                                                        styles: 3
                                                                                                                                                                    },
                                                                                                                                                                    on: {
                                                                                                                                                                        "on-success": e.handleUploadSuccess
                                                                                                                                                                    },
                                                                                                                                                                    nativeOn: {
                                                                                                                                                                        click: function (e) {
                                                                                                                                                                            e.preventDefault(),
                                                                                                                                                                                e.stopPropagation()
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                },
                                                                                                                                                                    [Y("Input", {
                                                                                                                                                                        ref: "content",
                                                                                                                                                                        attrs: {
                                                                                                                                                                            placeholder: e.placeholder,
                                                                                                                                                                            type: "textarea",
                                                                                                                                                                            autosize: e.autosize
                                                                                                                                                                        },
                                                                                                                                                                        model: {
                                                                                                                                                                            value: e.content,
                                                                                                                                                                            callback: function (t) {
                                                                                                                                                                                e.content = t
                                                                                                                                                                            },
                                                                                                                                                                            expression: "content"
                                                                                                                                                                        }
                                                                                                                                                                    })], 1) : e._e()], 1), e._v(" "), Y("i-col", {
                                                                                                                                                                        attrs: {
                                                                                                                                                                            span: "12"
                                                                                                                                                                        }
                                                                                                                                                                    },
                                                                                                                                                                        [Y("Markdown", {
                                                                                                                                                                            attrs: {
                                                                                                                                                                                content: e.content,
                                                                                                                                                                                highlight: e.highlight
                                                                                                                                                                            }
                                                                                                                                                                        })], 1)], 1)], 1), e._v(" "), Y("div", {
                                                                                                                                                                            staticClass: "i-editor-fullscreen-tail"
                                                                                                                                                                        })]) : e._e()])], 1)
                },
                    n = [],
                    L = {
                        render: Z,
                        staticRenderFns: n
                    };
                t.a = L
            }])
        });
//# sourceMappingURL=iview-editor.js.map
