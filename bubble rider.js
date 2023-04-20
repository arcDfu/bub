import {m as O, b as d, q as P, w as x, f as r, z as Ca, g as L, i as k, t as h, V as E, h as p, A as te, B as ae, e as m, _ as A, s as U, D as se, l as N, n as B, F as$, E as M, y as T, G as q, r as S, H as Ea, I as ne, J as re, K as ie, L as $a, M as le, O as V, P as Ta, o as Va, a as Aa, Q as Na, R as Ma, U as Da, W as G, k as D, X as Ha, Y as oe, Z as ce, $as Fa, a0 as qa, a1 as Ga, a2 as Wa, T as Ja, a3 as ue, a4 as de, u as za, a5 as Ka, a6 as Ya, a7 as Qa, a8 as Xa, __tla as Za} from "./index-f6a8e6ab.js";
let pe, es = Promise.all([(()=>{
    try {
        return Za
    } catch {}
}
)()]).then(async()=>{
    const ve = ["innerHTML"]
      , fe = r("hr", {
        class: "divider-line"
    }, null, -1)
      , me = {
        __name: "BaseModal",
        props: {
            isShow: {
                type: Boolean,
                default: !1
            },
            modalTitle: {
                type: String,
                default: ""
            },
            buttonText: {
                type: String,
                default: "Okay"
            },
            isDisableOverlay: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["close"],
        setup(s, {emit: a}) {
            const t = s
              , i = O({
                get() {
                    return t.isShow
                },
                set(n) {
                    !n && !t.isDisableOverlay && a("close")
                }
            });
            return (n,e)=>(d(),
            P(ae, {
                class: "base-modal",
                modelValue: p(i),
                "onUpdate:modelValue": e[1] || (e[1] = c=>te(i) ? i.value = c : null)
            }, {
                default: x(()=>[r("h1", {
                    class: "modal-title",
                    innerHTML: s.modalTitle
                }, null, 8, ve), fe, Ca(n.$slots, "default"), L(E, {
                    class: "button",
                    onClick: e[0] || (e[0] = c=>n.$emit("close"))
                }, {
                    default: x(()=>[k(h(s.buttonText), 1)]),
                    _: 1
                })]),
                _: 3
            }, 8, ["modelValue"]))
        }
    }
      , ge = {
        class: "non-desktop__bubble-rider"
    }
      , be = r("div", {
        class: "content-bg"
    }, null, -1)
      , ye = r("div", {
        class: "content-ball-bg"
    }, null, -1)
      , he = {
        class: "content"
    }
      , we = r("h1", {
        class: "title"
    }, [k("UH OH, LOOKS LIKE"), r("br"), k("YOU\u2019RE ON MOBILE.")], -1)
      , _e = r("p", {
        class: "subtitle"
    }, [k("This game can only be played on the"), r("br"), r("strong", null, "desktop\xA0"), k(".")], -1);
    function ke(s, a) {
        return d(),
        m("div", ge, [be, ye, r("div", he, [we, _e, L(E, {
            class: "button",
            to: "/"
        }, {
            default: x(()=>[k("Back to Rides")]),
            _: 1
        })])])
    }
    const Le = {}
      , Pe = A(Le, [["render", ke]])
      , Se = ["onClick"]
      , Ie = {
        class: "title"
    }
      , Re = {
        class: "yellow"
    }
      , Oe = {
        class: "subtitle"
    }
      , je = {
        class: "option-box__description"
    }
      , xe = {
        __name: "BRiderOptionList",
        setup(s) {
            const a = U()
              , t = [{
                titleHighlight: "Public",
                title: "League",
                subtitle: "Open For All",
                description: "No Entry Requirements",
                value: "public"
            }, {
                titleHighlight: "Private",
                title: "Leagues",
                subtitle: "IO Buddies",
                description: "NFT Holder Of Respective Projects",
                value: "private"
            }]
              , i = n=>{
                a.setActiveLeague(n)
            }
            ;
            return se(()=>{
                const n = new URLSearchParams(document.location.search).get("code")
                  , e = window.localStorage.getItem("brider-league");
                n && e && (i(e),
                window.localStorage.removeItem("brider-league"))
            }
            ),
            (n,e)=>(d(),
            m($, null, N(t, (c,l)=>r("div", {
                class: "bubble-rider__option-list",
                key: l
            }, [r("button", {
                class: B(["option-box", `box--${c.value}`]),
                type: "button",
                onClick: v=>i(c.value)
            }, [r("h3", Ie, [r("span", Re, h(c.titleHighlight) + "\xA0", 1), k(h(c.title), 1)]), r("h5", Oe, h(c.subtitle), 1)], 10, Se), r("span", je, h(c.description), 1)])), 64))
        }
    }
      , W = {
        __name: "DiscordConnectButton",
        props: {
            isPrivate: {
                type: Boolean,
                default: !1
            },
            selectedPartner: {
                type: Object,
                default: ()=>{}
            }
        },
        setup(s) {
            const a = s
              , t = M()
              , i = T("emitter")
              , n = q()
              , e = U()
              , c = S(new URLSearchParams(document.location.search).get("code"))
              , l = S(!!c.value)
              , v = async(g,b)=>{
                let f;
                if (b)
                    try {
                        if (f = await le.discordAuthorize(g, b),
                        f.status === 200)
                            return f.data.token ? (re(f.data.token),
                            f.data) : null
                    } catch {
                        return null
                    }
            }
              , o = async()=>{
                l.value = !0;
                try {
                    let g = await le.retieveDiscordAuthURL();
                    g.status === 200 ? (g = g.data.redirectTo,
                    g ? (window.localStorage.setItem("brider-league", e.activeLeague),
                    window.location.href = g) : l.value = !1) : l.value = !1
                } catch {
                    l.value = !1
                }
            }
              , y = async()=>{
                if (n.isLoggedIn) {
                    l.value = !0,
                    w();
                    return
                }
                if (a.isPrivate && typeof a.selectedPartner.id < "u" && window.localStorage.setItem("brider-partner", a.selectedPartner.id),
                !c.value) {
                    o();
                    return
                }
                let g;
                try {
                    g = ne(),
                    g = g && g !== "" && g !== "undefined" && g !== "null" ? g : null
                } catch {}
                let b;
                if (c.value)
                    try {
                        b = await v(g, c.value)
                    } catch {}
                if (b && !b.error) {
                    l.value = !0,
                    re(b.token);
                    try {
                        const f = await ie();
                        f && !(f instanceof Error) && (l.value = !0,
                        t.replace({
                            query: null
                        }),
                        c.value = null,
                        w())
                    } catch {}
                } else if (n.discordId !== "") {
                    if (!await ie()) {
                        l.value = !1;
                        return
                    }
                    g ? (l.value = !0,
                    w()) : l.value = !1
                } else
                    l.value = !1
            }
              , w = async()=>{
                a.isPrivate ? await $a(a.selectedPartner.id) ? R() : (l.value = !1,
                i.emit("discord-role-error")) : R()
            }
              , R = ()=>{
                i.emit("game-auth", typeof a.selectedPartner < "u" ? a.selectedPartner.id : "1")
            }
            ;
            return se(()=>{
                Ea(),
                c.value && y()
            }
            ),
            (g,b)=>(d(),
            P(E, {
                class: "connect-discord-button",
                onClick: y,
                loading: l.value
            }, {
                default: x(()=>[k("Let's Race")]),
                _: 1
            }, 8, ["loading"]))
        }
    }
      , Ue = {
        class: "bubble-rider__public-cta"
    }
      , Be = {
        class: "bubble-rider__cta-content"
    }
      , Ce = r("h2", {
        class: "cta-title"
    }, "Public", -1)
      , Ee = r("h4", {
        class: "cta-subtitle"
    }, "League", -1)
      , $e = ["src"]
      , Te = r("p", {
        class: "cta__image-description"
    }, "Challenge our public league to win an exclusive VIP allowlist for our Imaginary Rides collection. Free for all to play.", -1)
      , Ve = {
        class: "cta-button__container"
    }
      , Ae = r("p", {
        class: "cta__button-description"
    }, "Verified discord needed", -1)
      , Ne = {
        __name: "BRiderPublicCTA",
        setup(s) {
            const a = new URL("/assets/rides-banner-8283e336.mp4",self.location).href;
            return (t,i)=>(d(),
            m("div", Ue, [r("div", Be, [Ce, Ee, r("video", {
                class: "cta-video",
                ref: "videoRef",
                src: p(a),
                autoplay: !0,
                muted: !0,
                loop: !0,
                playsinline: !0,
                controls: !1
            }, null, 8, $e), Te, r("div", Ve, [L(W), Ae])])]))
        }
    }
      , Me = {
        class: "bubble-rider-league__container"
    }
      , De = {
        class: "bubble-rider-league__content"
    }
      , He = {
        class: "header-container"
    }
      , Fe = {
        class: "header-title"
    }
      , qe = r("h3", null, "League", -1)
      , Ge = {
        class: "search-bar__wrapper"
    }
      , We = r("i", {
        class: "icon-search"
    }, null, -1)
      , Je = r("i", {
        class: "icon-cross"
    }, null, -1)
      , ze = [Je]
      , Ke = ["onClick"]
      , Ye = {
        class: "text"
    }
      , Qe = r("span", {
        class: "overlay"
    }, null, -1)
      , Xe = {
        key: 1,
        class: "no-partner__text"
    }
      , Ze = r("h3", null, "No partner found.", -1)
      , et = [Ze]
      , tt = {
        class: "cta-button__container"
    }
      , at = r("h4", {
        class: "description"
    }, "Verified Discord needed", -1)
      , st = {
        __name: "BRiderPrivateCTA",
        props: {
            preSelectedPartner: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            const a = s
              , t = T("emitter")
              , i = U()
              , n = q()
              , e = S([])
              , c = S("")
              , l = S({})
              , v = S(!1)
              , o = O(()=>{
                let u = e.value;
                return c.value && (u = e.value.filter(_=>_.name.toLowerCase().includes(c.value.toLowerCase()))),
                u
            }
            );
            O(()=>n.gameData.find(u=>u.partnerId === l.value.id));
            const y = ()=>{
                e.value = i.qualifiedPartners.filter(u=>!u.feOnly),
                i.lastSelectedPrivateLeaguePartner ? (f(i.lastSelectedPrivateLeaguePartner),
                i.lastSelectedPrivateLeaguePartner = null) : o.value && o.value[0] && f(o.value[0])
            }
              , w = u=>u.media ? `https://assets.imaginaryones.com/rides${JSON.parse(u.media).resource}` : "";
            V(l, ()=>{
                Object.keys(i.userLeaderboardList).filter(u=>u.includes("private/")).forEach(u=>{
                    i.userLeaderboardList[u] && delete i.userLeaderboardList[u]
                }
                ),
                Ta(l.value.id),
                t.emit("partner-selected", l.value || {})
            }
            ),
            V(()=>i.partners, async()=>{
                y();
                let u = window.localStorage.getItem("brider-partner");
                if (u = u && u !== "" && u !== "undefined" && u !== "null" ? u : null,
                u) {
                    const _ = o.value.find(j=>j.id === u);
                    c.value = _.name,
                    f(_),
                    window.localStorage.removeItem("brider-partner")
                }
            }
            ),
            Va(()=>{
                if (y(),
                a.preSelectedPartner !== "" && !n.hasSeenPropsPreslected) {
                    const u = o.value.find(_=>_.id === a.preSelectedPartner);
                    c.value = u.name,
                    f(u),
                    n.hasSeenPropsPreslected = !0
                }
            }
            ),
            Aa(()=>{
                c.value = ""
            }
            );
            const R = ()=>{
                const u = document.querySelector(".partner-league__list");
                u.scrollHeight - u.scrollTop < u.clientHeight + 100 ? v.value = !0 : v.value = !1
            }
              , g = Na.debounce(()=>{
                !o.value.find(u=>u.id === l.value.id) && o.value.length && f(o.value[0])
            }
            )
              , b = ()=>{
                c.value = ""
            }
              , f = u=>{
                l.value = u
            }
            ;
            return (u,_)=>(d(),
            m("div", {
                class: B(["bubble-rider__private-cta", {
                    "is-max-scroll-bottom": v.value
                }])
            }, [r("div", Me, [r("div", De, [r("div", He, [r("div", Fe, [r("h1", null, h(l.value.name), 1), qe]), r("div", Ge, [Ma(r("input", {
                class: "search-input",
                type: "text",
                placeholder: "Search for project...",
                "onUpdate:modelValue": _[0] || (_[0] = j=>c.value = j),
                onInput: _[1] || (_[1] = (...j)=>p(g) && p(g)(...j))
            }, null, 544), [[Da, c.value]]), We, r("button", {
                class: B(["btn-clear-keyword", {
                    "is-show": c.value
                }]),
                type: "button",
                onClick: b
            }, ze, 2)])]), p(o) && p(o).length ? (d(),
            m("div", {
                key: 0,
                class: "partner-league__list",
                onScroll: R
            }, [(d(!0),
            m($, null, N(p(o), (j,Ba)=>(d(),
            m("div", {
                class: B(["partner-league__item", {
                    "is-selected": j.id === l.value.id
                }]),
                key: Ba,
                onClick: ts=>f(j)
            }, [L(G, {
                src: w(j)
            }, null, 8, ["src"]), r("h4", Ye, h(j.name), 1), Qe], 10, Ke))), 128))], 32)) : (d(),
            m("div", Xe, et))])]), r("div", tt, [L(W, {
                "is-private": !0,
                "selected-partner": l.value
            }, null, 8, ["selected-partner"]), at])], 2))
        }
    }
      , nt = {
        class: "bubble-rider__info"
    }
      , rt = r("h3", {
        class: "section-title"
    }, "Rewards", -1)
      , it = {
        class: "rewards__list"
    }
      , lt = r("div", {
        class: "gradient-circle"
    }, null, -1)
      , ot = {
        class: "list-item-content"
    }
      , ct = {
        class: "rewards-image__container"
    }
      , ut = ["src"]
      , dt = ["src"]
      , pt = r("span", {
        class: "glow"
    }, null, -1)
      , vt = {
        key: 0,
        class: "reward-detail"
    }
      , ft = {
        class: "rewards-title"
    }
      , mt = r("p", {
        class: "rewards-subtitle"
    }, [k("Win 1x\xA0"), r("span", {
        class: "purple"
    }, "VIP Allowlist")], -1)
      , gt = {
        key: 1
    }
      , bt = {
        key: 0,
        class: "reward-detail"
    }
      , yt = {
        class: "rewards-title"
    }
      , ht = r("p", {
        class: "rewards-subtitle"
    }, [k("Win 1x\xA0"), r("span", {
        class: "purple"
    }, "Imaginary Rides")], -1)
      , wt = {
        class: "reward-detail"
    }
      , _t = {
        class: "rewards-title"
    }
      , kt = r("p", {
        class: "rewards-subtitle"
    }, [k("Win 1x\xA0"), r("span", {
        class: "purple"
    }, "VIP Allowlist")], -1)
      , Lt = {
        class: "rewards__list-item is-overall-reward"
    }
      , Pt = r("div", {
        class: "gradient-circle"
    }, null, -1)
      , St = {
        class: "list-item-content"
    }
      , It = {
        class: "rewards-image__container"
    }
      , Rt = ["src"]
      , Ot = r("span", {
        class: "glow"
    }, null, -1)
      , jt = r("h5", {
        class: "rewards-title"
    }, "Global Prizes", -1)
      , xt = {
        class: "rewards-subtitle subtitle--small"
    }
      , Ut = r("h3", {
        class: "section-title"
    }, "Top 10 Riders", -1)
      , Bt = r("h4", {
        class: "section-subtitle"
    }, "Rank 1 - 10", -1)
      , Ct = {
        key: 0,
        class: "rank__list-container"
    }
      , Et = {
        class: "rank__list"
    }
      , $t = ["src"]
      , Tt = {
        class: "item-rank"
    }
      , Vt = ["src"]
      , At = {
        class: "item-details"
    }
      , Nt = {
        class: "item-name"
    }
      , Mt = {
        class: "item-point"
    }
      , Dt = {
        class: "rank__list"
    }
      , Ht = {
        class: "item-rank"
    }
      , Ft = ["src"]
      , qt = {
        class: "item-details"
    }
      , Gt = {
        class: "item-name"
    }
      , Wt = {
        class: "item-point"
    }
      , Jt = {
        key: 1,
        class: "leaderboard-info__loader"
    }
      , zt = {
        __name: "BRiderLeagueInfo",
        props: {
            isPublic: {
                type: Boolean,
                default: !1
            }
        },
        setup(s) {
            const a = s
              , t = new URL("/assets/ride-1-28cb97ef.png",self.location).href
              , i = new URL("/assets/ride-3-d72ff9ba.png",self.location).href
              , n = new URL("/assets/ride-2-86fa264f.png",self.location).href
              , e = new URL("/assets/crown-icon-plain-81ca06a2.png",self.location).href
              , c = M()
              , l = U()
              , v = T("emitter")
              , o = S({})
              , y = O(()=>{
                let b = !1;
                if (typeof l.userLeaderboardList[`${l.activeLeague}/top-x`] > "u")
                    return b;
                let f = l.userLeaderboardList[`${l.activeLeague}/top-x`];
                for (let u = 0; u < f.length; u++)
                    typeof f[u] == "object" ? b = !0 : b = !1;
                return typeof f == "object" && f.length === 0 && (b = !0),
                b
            }
            )
              , w = O(()=>{
                var u;
                const b = o.value.allowlistSlots
                  , f = ((u = l.partners.find(_=>parseInt(_.id) === 1)) == null ? void 0 : u.allowlistSlots) || "";
                return a.isPublic ? f : b
            }
            )
              , R = (b=0,f=5)=>l.userLeaderboardList[`${l.activeLeague}/top-x`].slice(b, f)
              , g = ()=>{
                c.push("/b-rider/leaderboard"),
                l.setActiveLeaderboardType("overall"),
                l.isFromRootLeague = !0,
                o.value.id && (l.lastSelectedPrivateLeaguePartner = o.value)
            }
            ;
            return v.on("partner-selected", b=>{
                b.id !== o.value.id && (o.value = b)
            }
            ),
            (b,f)=>(d(),
            m("div", nt, [rt, r("div", it, [r("div", {
                class: B(["rewards__list-item", {
                    "is-private": !s.isPublic,
                    "has-allowlist": !!o.value.airdropSlots
                }])
            }, [lt, r("div", ot, [r("div", ct, [s.isPublic ? (d(),
            m("img", {
                key: 0,
                class: "rewards-image",
                src: p(i)
            }, null, 8, ut)) : (d(),
            m("img", {
                key: 1,
                class: "rewards-image",
                src: p(n)
            }, null, 8, dt)), pt]), s.isPublic ? (d(),
            m("div", vt, [r("h5", ft, "Top " + h(p(w)) + " Riders", 1), mt])) : (d(),
            m("div", gt, [!s.isPublic && o.value.airdropSlots ? (d(),
            m("div", bt, [r("h5", yt, "Rank 1 - " + h(o.value.airdropSlots), 1), ht])) : D("", !0), r("div", wt, [r("h5", _t, "Rank " + h(o.value.airdropSlots + 1) + " - " + h(o.value.allowlistSlots), 1), kt])]))])], 2), r("div", Lt, [Pt, r("div", St, [r("div", It, [r("img", {
                class: "rewards-image",
                src: p(t)
            }, null, 8, Rt), Ot]), jt, r("p", xt, "For the top " + h(p(Ha)) + " global Riders", 1), L(E, {
                class: "rewards-button",
                onClick: g
            }, {
                default: x(()=>[k("Check Out Prizes")]),
                _: 1
            })])])]), Ut, Bt, p(y) ? (d(),
            m("div", Ct, [r("div", Et, [(d(!0),
            m($, null, N(R(0, 5), (u,_)=>(d(),
            m("div", {
                class: B(["rank__list-item", {
                    "item--top-rank": u.rank === 1
                }]),
                key: `top-${_ + 1}`
            }, [u.rank === 1 ? (d(),
            m("img", {
                key: 0,
                class: "crown-icon",
                src: p(e)
            }, null, 8, $t)) : D("", !0), r("p", Tt, h(u.rank), 1), r("img", {
                class: "item-image",
                src: p(oe)(u.discord, u.avatar)
            }, null, 8, Vt), r("div", At, [r("p", Nt, h(u.username), 1), r("p", Mt, h(p(ce)(u.score)), 1)])], 2))), 128))]), r("div", Dt, [(d(!0),
            m($, null, N(R(5, 10), (u,_)=>(d(),
            m("div", {
                class: "rank__list-item",
                key: `last-${_ + 1}`
            }, [r("p", Ht, h(u.rank), 1), r("img", {
                class: "item-image",
                src: p(oe)(u.discord, u.avatar)
            }, null, 8, Ft), r("div", qt, [r("p", Gt, h(u.username), 1), r("p", Wt, h(p(ce)(u.score)), 1)])]))), 128))])])) : (d(),
            m("div", Jt, [L(Fa, {
                indeterminate: ""
            })]))]))
        }
    }
      , Kt = r("i", {
        class: "icon-cross modal-icon"
    }, null, -1)
      , Yt = r("h1", {
        class: "modal-title"
    }, "Engine Stalled...", -1)
      , Qt = r("hr", {
        class: "divider-line"
    }, null, -1)
      , Xt = r("h3", null, "Discord Role Not Detected.", -1)
      , Zt = r("h4", null, "You do not have a verified holder role for the selected NFT project.", -1)
      , ea = r("h4", null, "Please contact your NFT project manager if this was an error.", -1)
      , ta = {
        __name: "DiscordErrorModal",
        props: {
            isShow: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["close"],
        setup(s, {emit: a}) {
            const t = s
              , i = O({
                get() {
                    return t.isShow
                },
                set(n) {
                    n || a("close")
                }
            });
            return (n,e)=>(d(),
            P(ae, {
                class: "discord-error__modal",
                modelValue: p(i),
                "onUpdate:modelValue": e[1] || (e[1] = c=>te(i) ? i.value = c : null)
            }, {
                default: x(()=>[Kt, Yt, Qt, Xt, Zt, ea, L(E, {
                    onClick: e[0] || (e[0] = c=>n.$emit("close"))
                }, {
                    default: x(()=>[k("Okay")]),
                    _: 1
                })]),
                _: 1
            }, 8, ["modelValue"]))
        }
    }
      , aa = {
        class: "league-cta"
    }
      , sa = {
        __name: "BRiderLeague",
        props: {
            preSelectedPartner: {
                type: String,
                default: ""
            }
        },
        emits: ["close"],
        setup(s, {emit: a}) {
            const t = U()
              , i = T("emitter")
              , n = S(!1)
              , e = O(()=>t.activeLeague === "public");
            i.on("discord-role-error", ()=>{
                c(!0)
            }
            );
            const c = l=>{
                n.value = l
            }
            ;
            return (l,v)=>(d(),
            m("div", {
                class: B(["bubble-rider__league-container", {
                    "league--private": !p(e)
                }])
            }, [r("div", aa, [p(e) ? (d(),
            P(Ne, {
                key: 0
            })) : (d(),
            P(st, {
                key: 1,
                "pre-selected-partner": s.preSelectedPartner
            }, null, 8, ["pre-selected-partner"]))]), L(zt, {
                "is-public": p(e)
            }, null, 8, ["is-public"]), L(ta, {
                "is-show": n.value,
                onClose: v[0] || (v[0] = o=>c(!1))
            }, null, 8, ["is-show"])], 2))
        }
    };
    var H = function(s, a) {
        return H = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, i) {
            t.__proto__ = i
        }
        || function(t, i) {
            for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        ,
        H(s, a)
    };
    function na(s, a) {
        if (typeof a != "function" && a !== null)
            throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
        H(s, a);
        function t() {
            this.constructor = s
        }
        s.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype,
        new t)
    }
    var F = function() {
        return F = Object.assign || function(s) {
            for (var a, t = 1, i = arguments.length; t < i; t++) {
                a = arguments[t];
                for (var n in a)
                    Object.prototype.hasOwnProperty.call(a, n) && (s[n] = a[n])
            }
            return s
        }
        ,
        F.apply(this, arguments)
    };
    function ra(s, a, t, i) {
        function n(e) {
            return e instanceof t ? e : new t(function(c) {
                c(e)
            }
            )
        }
        return new (t || (t = Promise))(function(e, c) {
            function l(y) {
                try {
                    o(i.next(y))
                } catch (w) {
                    c(w)
                }
            }
            function v(y) {
                try {
                    o(i.throw(y))
                } catch (w) {
                    c(w)
                }
            }
            function o(y) {
                y.done ? e(y.value) : n(y.value).then(l, v)
            }
            o((i = i.apply(s, a || [])).next())
        }
        )
    }
    function ia(s, a) {
        var t = {
            label: 0,
            sent: function() {
                if (e[0] & 1)
                    throw e[1];
                return e[1]
            },
            trys: [],
            ops: []
        }, i, n, e, c;
        return c = {
            next: l(0),
            throw: l(1),
            return: l(2)
        },
        typeof Symbol == "function" && (c[Symbol.iterator] = function() {
            return this
        }
        ),
        c;
        function l(o) {
            return function(y) {
                return v([o, y])
            }
        }
        function v(o) {
            if (i)
                throw new TypeError("Generator is already executing.");
            for (; t; )
                try {
                    if (i = 1,
                    n && (e = o[0] & 2 ? n.return : o[0] ? n.throw || ((e = n.return) && e.call(n),
                    0) : n.next) && !(e = e.call(n, o[1])).done)
                        return e;
                    switch (n = 0,
                    e && (o = [o[0] & 2, e.value]),
                    o[0]) {
                    case 0:
                    case 1:
                        e = o;
                        break;
                    case 4:
                        return t.label++,
                        {
                            value: o[1],
                            done: !1
                        };
                    case 5:
                        t.label++,
                        n = o[1],
                        o = [0];
                        continue;
                    case 7:
                        o = t.ops.pop(),
                        t.trys.pop();
                        continue;
                    default:
                        if (e = t.trys,
                        !(e = e.length > 0 && e[e.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                            t = 0;
                            continue
                        }
                        if (o[0] === 3 && (!e || o[1] > e[0] && o[1] < e[3])) {
                            t.label = o[1];
                            break
                        }
                        if (o[0] === 6 && t.label < e[1]) {
                            t.label = e[1],
                            e = o;
                            break
                        }
                        if (e && t.label < e[2]) {
                            t.label = e[2],
                            t.ops.push(o);
                            break
                        }
                        e[2] && t.ops.pop(),
                        t.trys.pop();
                        continue
                    }
                    o = a.call(s, t)
                } catch (y) {
                    o = [6, y],
                    n = 0
                } finally {
                    i = e = 0
                }
            if (o[0] & 5)
                throw o[1];
            return {
                value: o[0] ? o[1] : void 0,
                done: !0
            }
        }
    }
    var I = "__UnityLib__"
      , C = new Map
      , la = function() {
        function s() {
            window !== void 0 && window[I] === void 0 && (window[I] = {})
        }
        return s.prototype.setGlobalName = function(a) {
            if (!window[a]) {
                var t = I;
                window[a] = window[I],
                I = a,
                delete window[t]
            }
        }
        ,
        Object.defineProperty(s.prototype, "global_name", {
            get: function() {
                return I
            },
            enumerable: !1,
            configurable: !0
        }),
        s.prototype.on = function(a, t) {
            return C.set(a, t),
            window[I] !== void 0 && (window[I][a] = t),
            this
        }
        ,
        s.prototype.once = function(a, t) {
            var i = function() {
                t && t.apply(this, arguments),
                this.off(a)
            };
            return this.on(a, i.bind(this)),
            this
        }
        ,
        s.prototype.off = function(a) {
            return C.delete(a),
            window[I] !== void 0 && delete window[I][a],
            this
        }
        ,
        s.prototype.clear = function() {
            return window[I] !== void 0 && C.forEach(function(a, t) {
                delete window[I][t]
            }),
            C.clear(),
            this
        }
        ,
        s.prototype.emit = function(a) {
            for (var t = [], i = 1; i < arguments.length; i++)
                t[i - 1] = arguments[i];
            var n = C.get(a);
            return n !== void 0 && n.apply(this, t),
            this
        }
        ,
        s
    }();
    function oa(s, a) {
        var t = a.resolve
          , i = a.reject;
        if (!s) {
            i && i(new Error("UnityWebgl: loaderUrl not found."));
            return
        }
        if (typeof window.createUnityInstance == "function") {
            t && t();
            return
        }
        function n(v) {
            v === "ready" ? t && t() : i && i(new Error("'UnityWebgl: ".concat(s, "' loading failure.")))
        }
        var e = document.querySelector('script[src="'.concat(s, '"]'));
        if (e === null) {
            e = document.createElement("script"),
            e.src = s,
            e.async = !0,
            e.setAttribute("data-status", "loading"),
            document.body.appendChild(e);
            var c = function(v) {
                var o = v.type === "load" ? "ready" : "error";
                e == null || e.setAttribute("data-status", o)
            };
            e.addEventListener("load", c),
            e.addEventListener("error", c)
        } else
            n(e.getAttribute("data-status"));
        var l = function(v) {
            n(v.type === "load" ? "ready" : "error")
        };
        return e.addEventListener("load", l),
        e.addEventListener("error", l),
        function() {
            e && (e.removeEventListener("load", l),
            e.removeEventListener("error", l),
            document.body.removeChild(e))
        }
    }
    var ca = function(s) {
        return Object.prototype.toString.call(s) === "[object Object]"
    };
    function J(s) {
        return s instanceof HTMLCanvasElement ? s : typeof s == "string" ? document.querySelector(s) : null
    }
    var z = {
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Unity.com",
        productName: "Unity"
    };
    function ua(s) {
        var a = F({}, s.unityConfig);
        return a.print = function(t) {
            s.emit("debug", t)
        }
        ,
        a.printError = function(t) {
            s.emit("error", t)
        }
        ,
        a
    }
    var da = function(s) {
        na(a, s);
        function a(t, i) {
            var n = s.call(this) || this;
            if (n.canvasElement = null,
            n.unityLoader = null,
            n.unityInstance = null,
            ca(t) && !i)
                n.unityConfig = Object.assign({}, z, t);
            else {
                n.unityConfig = Object.assign({}, z, i);
                var e = J(t);
                e && n.create(e)
            }
            return n
        }
        return a.prototype.create = function(t) {
            if (!(this.unityInstance && this.canvasElement && this.unityLoader)) {
                var i = J(t);
                if (i) {
                    this.canvasElement = i;
                    var n = this
                      , e = ua(this)
                      , c = oa(e.loaderUrl, {
                        resolve: function() {
                            try {
                                window.createUnityInstance(i, e, function(l) {
                                    return n._setProgression(l)
                                }).then(function(l) {
                                    n.unityInstance = l,
                                    n.emit("created", l)
                                }).catch(function(l) {
                                    n.unityInstance = null,
                                    n.emit("error", l)
                                })
                            } catch (l) {
                                n.unityInstance = null,
                                n.emit("error", l)
                            }
                        },
                        reject: function(l) {}
                    });
                    typeof c == "function" && (this.unityLoader = c)
                }
            }
        }
        ,
        a.prototype._setProgression = function(t) {
            t === 1 && this.emit("loaded"),
            this.emit("progress", t)
        }
        ,
        a.prototype.send = function(t, i, n) {
            if (this.unityInstance !== null)
                if (n == null)
                    this.unityInstance.SendMessage(t, i);
                else {
                    var e = typeof n == "object" ? JSON.stringify(n) : n;
                    this.unityInstance.SendMessage(t, i, e)
                }
            return this
        }
        ,
        a.prototype.requestPointerLock = function() {
            var t, i, n = this.canvasElement || ((i = (t = this.unityInstance) === null || t === void 0 ? void 0 : t.Module) === null || i === void 0 ? void 0 : i.canvas);
            n && n.requestPointerLock()
        }
        ,
        a.prototype.takeScreenshot = function(t, i) {
            var n, e, c;
            t === void 0 && (t = "image/jpeg");
            var l = this.canvasElement || ((e = (n = this.unityInstance) === null || n === void 0 ? void 0 : n.Module) === null || e === void 0 ? void 0 : e.canvas);
            if (l)
                return (c = this.unityConfig.webglContextAttributes) === null || c === void 0 || c.preserveDrawingBuffer,
                l.toDataURL(t, i)
        }
        ,
        a.prototype.setFullscreen = function(t) {
            this.unityInstance && this.unityInstance.SetFullscreen(t ? 1 : 0)
        }
        ,
        a.prototype.unload = function() {
            var t = this;
            return this.unityInstance === null ? Promise.reject() : (this.unityLoader && (this.unityLoader(),
            this.unityLoader = null),
            this.unityInstance.Quit().then(function() {
                t.unityInstance = null,
                t.emit("destroyed")
            }))
        }
        ,
        a.prototype._unsafe_unload = function() {
            return ra(this, void 0, void 0, function() {
                var t;
                return ia(this, function(i) {
                    switch (i.label) {
                    case 0:
                        return this.unityInstance === null || !this.unityInstance.Module.canvas ? [2, Promise.reject()] : (t = this.unityInstance.Module.canvas,
                        document.body.appendChild(t),
                        t.style.display = "none",
                        [4, this.unload()]);
                    case 1:
                        return i.sent(),
                        t.remove(),
                        [2]
                    }
                })
            })
        }
        ,
        a
    }(la)
      , K = 0;
    function Y(s) {
        var a = /^\d+(px|em|%|vw|vh|rem)?$/;
        return typeof s == "number" ? s + "px" : a.test(s) ? isNaN(s) ? s : s + "px" : "100%"
    }
    var pa = qa({
        name: "UnityWebglComponent",
        props: {
            unity: {
                type: Object
            },
            width: {
                type: [String, Number],
                default: "100%"
            },
            height: {
                type: [String, Number],
                default: "100%"
            }
        },
        computed: {
            canvasStyle: function() {
                var s = this
                  , a = s.width
                  , t = s.height;
                return {
                    width: Y(a),
                    height: Y(t)
                }
            }
        },
        mounted: function() {
            var s, a = this.$refs.canvas;
            a && ((s = this.unity) === null || s === void 0 || s.create(a))
        },
        beforeDestroy: function() {
            var s;
            (s = this.unity) === null || s === void 0 || s._unsafe_unload()
        },
        render: function() {
            return K++,
            Ga("canvas", {
                ref: "canvas",
                id: "unity-canvas-".concat(K),
                style: this.canvasStyle
            })
        }
    });
    const va = "/assets/2-4e40e2af.png"
      , fa = "/assets/3-b275acb5.png"
      , ma = "/assets/4-d3eb844c.png"
      , ga = "/assets/5-0404dbd3.png"
      , ba = "/assets/6-609a79be.png"
      , ya = "/assets/7-01d38f58.png"
      , ha = "/assets/8-0bd31f9f.png"
      , wa = "/assets/9-8f1cfe6b.png"
      , _a = s=>(ue("data-v-8f864e60"),
    s = s(),
    de(),
    s)
      , ka = {
        class: "brider__loader"
    }
      , La = {
        class: "loader__content"
    }
      , Pa = {
        class: "content__progress"
    }
      , Sa = _a(()=>r("div", {
        class: "content__text"
    }, "Loading...", -1))
      , Ia = {
        __name: "BRiderGameLoader",
        props: {
            progress: {
                type: Number,
                default: 0
            }
        },
        setup(s) {
            const a = s
              , t = new URL("/assets/1-f5d6c768.jpg",self.location).href
              , i = O(()=>{
                let e = Math.round(a.progress * 10);
                return e > 9 && (e = 9),
                e > 1 ? new URL(Object.assign({
                    "../../../assets/images/bubble-rider/game-loader/2.png": va,
                    "../../../assets/images/bubble-rider/game-loader/3.png": fa,
                    "../../../assets/images/bubble-rider/game-loader/4.png": ma,
                    "../../../assets/images/bubble-rider/game-loader/5.png": ga,
                    "../../../assets/images/bubble-rider/game-loader/6.png": ba,
                    "../../../assets/images/bubble-rider/game-loader/7.png": ya,
                    "../../../assets/images/bubble-rider/game-loader/8.png": ha,
                    "../../../assets/images/bubble-rider/game-loader/9.png": wa
                })[`../../../assets/images/bubble-rider/game-loader/${e}.png`],self.location).href : ""
            }
            )
              , n = O(()=>{
                let e = Math.round(a.progress * 100);
                return e >= 100 && (e = 100),
                e
            }
            );
            return (e,c)=>(d(),
            P(Ja, {
                name: "fade"
            }, {
                default: x(()=>[r("div", ka, [L(G, {
                    src: p(t),
                    cover: ""
                }, {
                    default: x(()=>[L(G, {
                        class: "loader__overlay",
                        src: p(i)
                    }, null, 8, ["src"]), r("div", La, [L(Wa, {
                        class: "header__logo is-light",
                        "no-redirect": !0
                    }), r("div", Pa, h(p(n)) + "%", 1), Sa])]),
                    _: 1
                }, 8, ["src"])])]),
                _: 1
            }))
        }
    }
      , Ra = A(Ia, [["__scopeId", "data-v-8f864e60"]])
      , Oa = {
        __name: "BRiderGameFrame",
        props: {
            jwtToken: {
                type: String,
                default: ""
            },
            partnerId: {
                type: String,
                default: ""
            },
            gameVersion: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            const a = s
              , t = q()
              , i = za()
              , n = "https://rides-game.imaginaryones.com"
              , e = "src"
              , c = S(0)
              , l = new da({
                loaderUrl: `${n}/Build/${e}.loader.js?v=${a.gameVersion}`,
                dataUrl: `${n}/Build/${e}.data?v=${a.gameVersion}`,
                frameworkUrl: `${n}/Build/${e}.framework.js?v=${a.gameVersion}`,
                codeUrl: `${n}/Build/${e}.wasm?v=${a.gameVersion}`,
                streamingAssetsUrl: `${n}/StreamingAssets`,
                companyName: "Imaginary Ones",
                productName: "Imaginary Rides",
                devicePixelRatio: 1,
                productVersion: a.gameVersion || "0.0.0"
            });
            return l.on("progress", v=>{
                c.value = v
            }
            ),
            l.on("created", ()=>{
                i.pauseBGM(),
                setTimeout(()=>{
                    l.send("JavaScriptHook", "SetJwtToken", {
                        jwtToken: a.jwtToken,
                        partnerId: a.partnerId,
                        wallet: t.wallet
                    })
                }
                , 500)
            }
            ),
            (v,o)=>(d(),
            m($, null, [c.value < 1 ? (d(),
            P(Ra, {
                key: 0,
                progress: c.value
            }, null, 8, ["progress"])) : D("", !0), L(p(pa), {
                id: "ir__canvas",
                unity: p(l),
                width: "100%",
                height: "100%"
            }, null, 8, ["unity"])], 64))
        }
    }
      , ja = {
        class: "game",
        id: "game__container"
    }
      , xa = {
        __name: "BRiderGame",
        props: {
            partnerId: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            const a = M()
              , t = U()
              , i = S(t.version !== "")
              , n = O(()=>{
                const e = ne();
                return e && e !== "" && e !== "undefined" && e !== "null" ? e : null
            }
            );
            return V(n, ()=>{
                n.value || a.push("/b-rider")
            }
            ),
            V(()=>t.version, ()=>{
                i.value = !0
            }
            ),
            (e,c)=>(d(),
            m("div", ja, [i.value ? (d(),
            P(Oa, {
                key: 0,
                "jwt-token": p(n),
                "partner-id": s.partnerId,
                "game-version": p(t).version
            }, null, 8, ["jwt-token", "partner-id", "game-version"])) : D("", !0)]))
        }
    }
      , Ua = A(xa, [["__scopeId", "data-v-d1e59270"]]);
    let Q, X, Z, ee;
    Q = s=>(ue("data-v-43389086"),
    s = s(),
    de(),
    s),
    X = {
        class: "bubble-rider__wrapper"
    },
    Z = Q(()=>r("h4", {
        class: "modal-description"
    }, [k("Bubble Riders is not available on Safari, you can play our game"), r("br"), k("on a different browser like Chrome or Brave.")], -1)),
    ee = {
        __name: "BubbleRider",
        setup(s) {
            Ka();
            const a = T("emitter")
              , t = Qa()
              , i = M()
              , n = Ya()
              , e = U()
              , c = S(!1)
              , l = S("")
              , v = S("")
              , o = O(()=>t.params.slug)
              , y = O(()=>screen.width <= Xa);
            return a.on("game-auth", w=>{
                l.value = w,
                c.value = !0
            }
            ),
            V(()=>e.partners, ()=>{
                if (o.value)
                    if (o.value === "public")
                        e.activeLeague = o.value;
                    else {
                        const w = e.partners.find(R=>R.slug === o.value);
                        w ? (e.activeLeague = "private",
                        v.value = w.id) : (a.emit("notify", {
                            msg: "Invalid IO Buddy League",
                            type: "error"
                        }),
                        i.push("/b-rider"))
                    }
            }
            ),
            (w,R)=>(d(),
            m("div", X, [p(y) ? (d(),
            P(Pe, {
                key: 0
            })) : p(n) ? (d(),
            P(me, {
                key: 1,
                class: "not-support-safari__modal",
                "is-show": !0,
                "is-disable-overlay": !0,
                "modal-title": "Uh oh, this game isn\u2019t supported for Safari.",
                "button-text": "Back to rides",
                onClose: R[0] || (R[0] = g=>p(i).push("/"))
            }, {
                default: x(()=>[Z]),
                _: 1
            })) : p(e).activeLeague ? c.value ? (d(),
            P(Ua, {
                key: 3,
                "partner-id": l.value
            }, null, 8, ["partner-id"])) : (d(),
            P(sa, {
                key: 4,
                "pre-selected-partner": v.value
            }, null, 8, ["pre-selected-partner"])) : (d(),
            P(xe, {
                key: 2
            }))]))
        }
    },
    pe = A(ee, [["__scopeId", "data-v-43389086"]])
}
);
export {es as __tla, pe as default};
