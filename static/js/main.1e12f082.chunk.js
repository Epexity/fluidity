(this.webpackJsonpfluidity=this.webpackJsonpfluidity||[]).push([[0],{100:function(n,e,t){n.exports=t(221)},105:function(n,e,t){},106:function(n,e,t){},221:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(79),c=t.n(o),i=(t(105),t(106),t(6)),l=t(3),u=t(4),s=t(97),p={get:function(){var n=localStorage.getItem("search-settings");if(n)return p.parse(n)},set:function(n){return localStorage.setItem("search-settings",JSON.stringify(n))},parse:function(n){return JSON.parse(n)}},d={get:function(){var n=localStorage.getItem("link-groups");if(n)return d.parse(n)},set:function(n){return localStorage.setItem("link-groups",JSON.stringify(n))},parse:function(n){return JSON.parse(n)}},f=function(){var n=localStorage.getItem("design");if(n)return m.parse(n)},v=function(n){return localStorage.setItem("design",JSON.stringify(n))},g=function(n){return localStorage.setItem("themes",JSON.stringify(n))},m={get:function(){var n=localStorage.getItem("themes");if(n)return JSON.parse(n)},add:function(n){var e=m.get();e&&g([].concat(Object(s.a)(e),[n])),g([n])},remove:function(n){var e=m.get();e&&g(e.filter((function(e){return e.name!==n})))},parse:function(n){return JSON.parse(n)}};function b(){var n=Object(l.a)(["\n    transform: rotate(90deg);\n    min-width: max-content;\n    color: ",";\n    transition: .5s;\n    letter-spacing: 5px;\n"]);return b=function(){return n},n}function h(){var n=Object(l.a)(["\n    padding: 0;\n    background-color: var(--bg-color);\n    border: 4px solid var(--accent-color);\n    height: 100%;\n    width: 90px;\n    cursor: ",';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.8;\n    position: relative;\n    ::before {\n        content: "";\n        position: absolute;\n        bottom: 0px;\n        width: 100%;\n        height: ',";\n        background-color: var(--accent-color);\n        transition:  ",";\n    }\n    :hover, :focus{\n        outline: none;\n        ","\n    }\n\n    > .wave {\n        /* Waves Source: https://codepen.io/mburakerman/pen/eRZZEv */\n        width: 82px;\n        height: 50px;\n        position: absolute;\n        top: ",";\n        overflow: hidden;\n        transition:  ",';\n        ::before{\n            content:"";\n            width: 180px;\n            height: 185px;\n            position: absolute;\n            top: -25%;\n            left: 50%;\n            margin-left: -90px;\n            margin-top: -140px;\n            border-radius: 37%;\n            background-color: var(--bg-color);\n            animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);\n        }\n        @keyframes wave {\n            from { transform: rotate(0deg);}\n            from { transform: rotate(360deg);}\n        }\n    }\n\n\n    ',";\n"]);return h=function(){return n},n}function x(){var n=Object(l.a)(["\n    height: 100%;\n    width: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow: hidden;\n    transition:.3s;\n"]);return x=function(){return n},n}function w(){var n=Object(l.a)(["\n    height: 400px;\n    display: flex;\n    padding: 0 10px;\n    flex-direction: row;\n    border-right:3px solid var(--default-color);\n    :first-of-type{\n        border-left:3px solid var(--default-color);\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n    margin-left: 100px;\n    display:flex;\n    width:calc(100% - 400px - 100px);\n\n    @media only screen and (max-width: 1730px) {\n"]);return y=function(){return n},n}var E=u.a.div(y()),j=function(n){return a.a.createElement(E,null,n.children)},k=u.a.div(w()),O=u.a.div(x(),(function(n){return n.width+"px"})),S=u.a.button(h(),(function(n){return n.active?"default":"pointer"}),(function(n){return n.active?"390px":"0"}),(function(n){return n.active?"1s":".5s"}),(function(n){return!n.active&&"\n            ::before {\n                height: 50%;\n            }\n            > .wave {\n                top: 180px;\n                ::before{\n                    animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);\n                    top: -25%;\n                    left: 50%;\n                }\n            }\n        "}),(function(n){return n.active?"0px":"350px"}),(function(n){return n.active?"1s":".5s"}),(function(n){return!n.active&&"\n        :hover{\n            > * {\n                color: var(--bg-color);\n                text-shadow:\n                    5px 0px 0 var(--accent-color),\n                    4px 0px 0 var(--accent-color),\n                    3px 0px 0 var(--accent-color),\n                    2px 0px 0 var(--accent-color),\n                    1px 0px 0 var(--accent-color),\n                    -1px 0px 0 var(--accent-color),\n                    0px 1px 0 var(--accent-color),\n                    0px -1px 0 var(--accent-color);\n            }\n        }\n    "})),C=u.a.h1(b(),(function(n){return n.active?"var(--bg-color)":"var(--default-color)"})),A=function(n){var e,t=n.active,o=n.title,c=n.children,l=n.onClick,u=Object(r.useState)(t?500:0),s=Object(i.a)(u,2),p=s[0],d=s[1];return Object(r.useEffect)((function(){d(e&&t?e.clientWidth-113*e.children.length-3:0)}),[t]),a.a.createElement(k,{ref:function(n){return e=null===n||void 0===n?void 0:n.parentElement}},a.a.createElement(S,{active:t,onClick:l,tabIndex:t?-1:void 0},a.a.createElement("div",{className:"wave"}),a.a.createElement(C,{active:t,title:o},o)),a.a.createElement(O,{width:p,"aria-hidden":!t||void 0},c))},z=t(49),I=t.n(z),_=t(81),D=t.n(_),J=t(82),B=t.n(J),N=t(83),L=t.n(N),T=t(84),V=t.n(T),P=t(85),F=t.n(P),G=t(86),M=t.n(G),U=t(87),W=t.n(U),q=[{title:"Reddit",links:[{label:"r/startpages",value:"https://www.reddit.com/r/startpages/"},{label:"r/unixporn",value:"https://www.reddit.com/r/unixporn/"},{label:"r/rainmeter",value:"https://www.reddit.com/r/rainmeter/"},{label:"r/AnimalsBeingDerps",value:"https://www.reddit.com/r/AnimalsBeingDerps/"}]},{title:"3D Modelling",links:[{label:"Blender",value:"https://www.blender.org/"},{label:"BlenderGuru",value:"https://www.blenderguru.com/"},{label:"Poliigon",value:"https://www.poliigon.com/"},{label:"Blender tutorial",value:"https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U"},{label:"The other Blender tutorial",value:"https://www.youtube.com/watch?v=bpvh-9H8S1g&list=PL8eKBkZzqDiU-qcoaghCz04sMitC1yx6k&index=1"}]},{title:"Design",links:[{label:"PixlrX",value:"https://pixlr.com/x/"},{label:"AI Image Enlarger",value:"https://bigjpg.com/en"},{label:"Img to Svg Converter",value:"https://picsvg.com/"},{label:"Affinity",value:"https://affinity.serif.com/en-us/tutorials/designer/desktop/"},{label:"Affinity - YT",value:"https://www.youtube.com/c/AffinityRevolution/playlists"}]},{title:"Music",links:[{label:"i wanna be a cowboy",value:"https://www.youtube.com/watch?v=8zWz92f_HGs"},{label:"let the bodies hit the floor",value:"https://www.youtube.com/watch?v=b--VKaCB9u0"},{label:"Nobody Kanna Cross It",value:"https://www.youtube.com/watch?v=2wqTnwJGvtc"},{label:"Smug Dancin",value:"https://www.youtube.com/watch?v=eNZ9Od1jQ4Q"},{label:"Utamaru - The Sanctified Mind Cover",value:"https://www.youtube.com/watch?v=MHlJKLlS07U"}]},{title:"Sauce",links:[{label:"JS Library - React",value:"https://reactjs.org/"},{label:"CSS Writing Library - EmotionJS",value:"https://emotion.sh/docs/introduction"},{label:"Pictures - DeathAndMilk",value:"https://www.instagram.com/deathandmilk_/"},{label:"Icons - FontAwesome",value:"https://fontawesome.com/icons"},{label:"Text Flicker - CodeMyUI",value:"https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/"},{label:"Wave Animation - mburakerman",value:"https://codepen.io/mburakerman/pen/eRZZEv"},{label:"About me t(\u0ca0\u76ca\u0ca0t)",value:"/"},{label:"Da real sauce \u0505(\u2661\ufe43\u2661\u0505)",value:"https://www.youtube.com/watch?v=qr89xoZyE1g"},{label:"Even more real sauce ( \u0361\xb0 \u035c\u0296 \u0361\xb0)",value:"https://www.youtube.com/watch?v=VLhJOd_TFiI"}]}],R=[{label:"pic_1",value:I.a},{label:"pic_2",value:D.a},{label:"pic_3",value:B.a},{label:"pic_4",value:L.a},{label:"pic_5",value:V.a},{label:"pic_6",value:F.a},{label:"pic_7",value:M.a},{label:"pic_8",value:W.a}],K=[{label:"DuckDuckGo",value:"duckduckgo.com/"},{label:"Google",value:"google.com/search"},{label:"Qwant",value:"qwant.com/"}],Z={engine:K[0].value,fastForward:{deepl:"https://deepl.com/",maps:"https://google.de/maps/"}},Y=[{name:"default",image:I.a,colors:{"--bg-color":"rgb(46, 46, 46)","--default-color":"rgb(230, 230, 230)","--accent-color":"rgb(255, 180, 230)","--accent-color2":"rgb(180, 255, 230)"}},{name:"Pop!OS",image:"https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",colors:{"--bg-color":"#333136","--default-color":"#2BC5EB","--accent-color":"#FCD307","--accent-color2":"#2BC5EB"}},{name:"Dark Souls",image:"https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",colors:{"--bg-color":"#32323C","--default-color":"#A0A08C","--accent-color":"#9A6650","--accent-color2":"#461E28"}}];function H(){var n=Object(l.a)(['\n    width: fit-content;\n    white-space: nowrap;\n    position:relative;\n    padding: 10px 0 10px 30px;\n    font-size:1rem;\n\n    ::before{\n        position:absolute;\n        left:0px;\n        bottom:5px;\n        z-index:0;\n        content: "";\n        height:5px;\n        width:100%;\n        background-color: var(--accent-color);\n        transition:.5s;\n        opacity:.7;\n    }\n\n    :hover, :focus {\n        color: var(--accent-color2);\n        animation:text-flicker 0.01s ease 0s infinite alternate;\n        outline: none;\n    }\n\n']);return H=function(){return n},n}var Q=u.a.a(H()),X=function(){var n=Object(r.useState)(0),e=Object(i.a)(n,2),t=e[0],o=e[1],c=q;try{var l=d.get();l&&(c=l)}catch(u){console.error("Links could not be loaded.")}return console.log(c),a.a.createElement(j,null,c.map((function(n,e){return a.a.createElement(A,{key:"AccordionGroup"+e,active:t===e,title:n.title,onClick:function(){return o(e)}},n.links.map((function(n,r){return a.a.createElement(Q,{tabIndex:t!==e?-1:void 0,key:"LinkItem"+r,href:n.value},n.label)})))})))},$=t(88),nn=t.n($),en=t(89),tn=t.n(en),rn=t(90),an=t.n(rn);function on(){var n=Object(l.a)(["\n    position: fixed;\n    left: 35px;\n    bottom: 40px;\n    height: 2.9rem;\n    width: 2.9rem;\n\n    background: var(--default-color);\n    \n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(",");\n    mask-image: url(",");\n"]);return on=function(){return n},n}function cn(){var n=Object(l.a)(["\n    width: 100%;\n    font-size: 30pt;\n    \n    background-color: rgba(0,0,0,0);\n    color: var(--default-color);\n    transition: .3s;\n    border: none;\n    border-bottom: 2px solid var(--default-color);\n    opacity: 0.3;\n    \n    ::placeholder {\n        color: var(--default-color);\n    }\n    \n    :hover, :focus {\n        opacity: 1;\n        outline: none;\n    }\n"]);return cn=function(){return n},n}function ln(){var n=Object(l.a)(["\n    position: fixed;\n    left: 100px;\n    right: 50px;\n    bottom: 40px;\n    height:min-content;\n    "]);return ln=function(){return n},n}var un=u.a.div(ln()),sn=u.a.input(cn()),pn=u.a.div(on(),(function(n){return n.src}),(function(n){return n.src})),dn=function(){var n,e=(null===(n=p.get())||void 0===n?void 0:n.engine)||"duckduckgo.com/",t=tn.a;e.startsWith("google")?t=nn.a:e.startsWith("qwant")&&(t=an.a);return a.a.createElement(un,null,a.a.createElement(sn,{placeholder:"Always stay clean!",type:"input",onKeyUp:function(n){return 13===n.which&&(t=n.currentTarget.value,void(window.location.href="https://"+e+"?q="+t));var t},autoFocus:!0}),a.a.createElement(pn,{src:t}))},fn=t(7),vn=t(30),gn=t(98);function mn(){var n=Object(l.a)(["\n    color: ",";\n    background-color: transparent;\n    min-width:50px;\n\tfont-size: 20px;\n    border: none;\n\topacity: 0.7;\n\tcursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    :enabled:hover{\n        ",";\n    }\n    :focus{\n        outline: none;\n    }\n    :disabled{\n        opacity: 0.2;\n        cursor: default;\n    }\n\n    > span{\n        margin-right:10px;\n    }\n"]);return mn=function(){return n},n}var bn=u.a.button(mn(),(function(n){return n.inverted?"var(--bg-color)":"var(--default-color)"}),(function(n){return n.inverted?"filter: \n            drop-shadow(2px 2px 0 var(--accent-color))\n            drop-shadow(-2px -2px 0 var(--accent-color))\n            drop-shadow(-2px 2px 0 var(--accent-color))\n            drop-shadow(2px -2px 0 var(--accent-color))":"animation: box-flicker 0.01s ease 0s infinite alternate"})),hn=function(n){var e=n.icon,t=n.text,r=Object(gn.a)(n,["icon","text"]);return a.a.createElement(bn,r,t&&a.a.createElement("span",null,t),a.a.createElement(vn.a,{icon:e}))};function xn(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    color: var(--default-color);\n    border: none;\n    height: 100%;\n    width: 100%;\n    outline: none;\n    resize: none;\n"]);return xn=function(){return n},n}function wn(){var n=Object(l.a)(["\n    position: relative;\n    border: 2px solid var(--default-color);\n    display:flex;\n    padding: 10px 0 10px 20px;\n    height: calc(100% - 40px);\n    ","\n"]);return wn=function(){return n},n}var yn=u.a.div(wn(),(function(n){var e=n.error;return e&&'\n        ::after{\n            content: "'.concat(e,'";\n            color: var(--accent-color);\n            position: absolute;\n            top: 10px;\n            right: 15px;\n            font-size: 0.8rem;\n        }\n    ')})),En=u.a.textarea(xn()),jn=JSON.stringify([{title:"Title",links:[{label:"label",value:"url"},{label:"label",value:"url"},{label:"label",value:"url"}]}],null,4),kn=function(n){var e=n.initialValue,t=n.onChange,o=Object(r.useState)(void 0),c=Object(i.a)(o,2),l=c[0],u=c[1];return a.a.createElement(yn,{error:l},a.a.createElement(En,{onKeyUp:function(n){return function(n){try{var e=d.parse(n);u(void 0),t(e)}catch(r){u("Your links are not parseable. Probably you have a Syntax Error?")}}(n.currentTarget.value)},placeholder:jn,defaultValue:JSON.stringify(e,null,4)}))};function On(){var n=Object(l.a)(["\n    width: 100%;\n"]);return On=function(){return n},n}var Sn=u.a.div(On()),Cn=function(n){var e=n.linkGroups,t=n.setLinkGroups;return a.a.createElement(Sn,null,a.a.createElement(_e,null,"Links"),a.a.createElement(kn,{onChange:t,initialValue:e}))},An=t(8);function zn(){var n=Object(l.a)(["\n    height: 20px;\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    align-items: space-between;\n    justify-content: space-between;\n    padding:5px 0;\n"]);return zn=function(){return n},n}var In=u.a.div(zn()),_n=function(n){var e=n.values,t=n.onChange,o=n.currentValue,c=Object(r.useState)(0),l=Object(i.a)(c,2),u=l[0],s=l[1];Object(r.useEffect)((function(){e.forEach((function(n,e){o===n.value&&e!==u&&s(e)}))}),[]);var p=function(n){s(n),t(e[n].value)};return a.a.createElement(In,null,a.a.createElement(hn,{disabled:u<=0,onClick:function(){p(u-1)},icon:fn.a}),e[u].label,a.a.createElement(hn,{disabled:u>=e.length-1,onClick:function(){return p(u+1)},icon:fn.b}))};function Dn(){var n=Object(l.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 1fr;\n    grid-column-gap: 40px;\n"]);return Dn=function(){return n},n}var Jn=u.a.div(Dn()),Bn=function(n){var e,t=n.searchSettings,r=n.setSearchSettings,o=(null===(e=p.get())||void 0===e?void 0:e.engine)||K[0].value;return a.a.createElement(Jn,null,a.a.createElement("div",null,a.a.createElement(_e,null,"Searchbar"),a.a.createElement(De,null,a.a.createElement(_n,{currentValue:o,values:K,onChange:function(n){return r(Object(An.a)(Object(An.a)({},t),{},{engine:n}))}})),a.a.createElement("br",null),a.a.createElement(_e,null,"More settings comming soon")))};function Nn(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    color: var(--default-color);\n    border: none;\n    height:100%;\n    outline:none;\n    width: calc(100% - 82px);\n"]);return Nn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    border: 2px solid var(--default-color);\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 0 10px 20px;\n    width:376px;\n"]);return Ln=function(){return n},n}var Tn=u.a.div(Ln()),Vn=u.a.input(Nn()),Pn=function(n){var e=n.currentValue,t=n.onChange,o=Object(r.useState)(e),c=Object(i.a)(o,2),l=c[0],u=c[1];return a.a.createElement(Tn,null,a.a.createElement(Vn,{type:"text",onKeyUp:function(n){return 13===n.which?t(l):u(n.currentTarget.value)},placeholder:"Picture URL",defaultValue:l}),a.a.createElement(hn,{icon:fn.c,onClick:function(n){return t(l)}}))},Fn=t(96);function Gn(){var n=Object(l.a)(["\n    > div * {\n        background-color: var(--bg-color)!important;\n        color: var(--default-color)!important;\n        box-shadow: none;\n    }\n    > div{\n        border: 2px solid var(--default-color);\n    }\n"]);return Gn=function(){return n},n}function Mn(){var n=Object(l.a)(["\n    width: 100%;\n    padding: 5px 0;\n    cursor: pointer;\n    opacity: ",";\n    color: ",";\n    :hover {\n        color: var(--accent-color2);\n        animation:text-flicker 0.01s ease 0s infinite alternate;\n    }\n"]);return Mn=function(){return n},n}function Un(){var n=Object(l.a)(["\n    height: 200px;\n    display: flex;\n    > div {\n        padding: 0 10px;\n        width: 180px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n"]);return Un=function(){return n},n}var Wn=u.a.div(Un()),qn=u.a.div(Mn(),(function(n){return!n.active&&"0.7"}),(function(n){return n.active&&"var(--accent-color)"})),Rn=u.a.div(Gn()),Kn=function(n){var e=n.colors,t=n.setColors,o=Object(r.useState)(Object.keys(Y[0].colors)[0]),c=Object(i.a)(o,2),l=c[0],u=c[1];return a.a.createElement(Wn,null,a.a.createElement("div",null,Object.keys(e).map((function(n){return a.a.createElement(qn,{key:n,active:n===l,onClick:function(){return u(n)}},n)}))),a.a.createElement(Rn,null,a.a.createElement(Fn.a,{color:e[l],onChange:function(n){return n&&function(n){var r=Object(An.a)({},e);r[l]=n.hex,t(r)}(n)}})))};function Zn(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    margin: 10px;\n    > * {\n        margin-left: 30px;\n    }\n"]);return Zn=function(){return n},n}function Yn(){var n=Object(l.a)(["\n    transform: rotate(90deg);\n    min-width: max-content;\n    color: var(--bg-color);\n    transition: .5s;\n    letter-spacing: 5px;\n"]);return Yn=function(){return n},n}function Hn(){var n=Object(l.a)(["\n    border: 4px solid ",';\n    height: 300px;\n    width: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    ::before {\n        content: "";\n        position: absolute;\n        bottom: 0px;\n        width: 100%;\n        height: 100%;\n        background-color: ',';\n    }\n\n   > .wave {\n        width: 80px;\n        height: 50px;\n        position: absolute;\n        top: 0px;\n        overflow: hidden;\n        ::before{\n            content:"";\n            width: 180px;\n            height: 185px;\n            position: absolute;\n            top: -25%;\n            left: 50%;\n            margin-left: -90px;\n            margin-top: -140px;\n            border-radius: 37%;\n            background: var(--bg-color);\n            animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);\n        }\n        @keyframes wave {\n            from { transform: rotate(0deg);}\n            from { transform: rotate(360deg);}\n        }\n    }\n']);return Hn=function(){return n},n}function Qn(){var n=Object(l.a)(["\n    margin: 10px; \n    height: 300px;\n    width: 300px;\n    border: 1px solid var(--default-color);\n    padding: 5px;\n    object-fit:cover;\n\n    animation:circling-shadow-small 4s ease 0s infinite normal;\n"]);return Qn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n    background-color:",';\n    display: flex;\n    justify-content: space-evenly;\n    align-items:center;\n    border: 2px solid var(--accent-color);\n    width: calc(100% - 400px);\n    height: 100%;\n    position: relative;\n    ::before{\n        content: "Design Preview";\n        color: var(--accent-color);\n        position: absolute;\n        top: 10px;\n        right: 15px;\n        font-size: 0.8rem;\n    }\n']);return Xn=function(){return n},n}var $n=u.a.div(Xn(),(function(n){return n.color})),ne=u.a.img(Qn()),ee=u.a.div(Hn(),(function(n){return n.color}),(function(n){return n.color})),te=u.a.h2(Yn()),re=u.a.div(Zn()),ae=function(n){var e=n.title,t=n.color;return a.a.createElement(ee,{color:t},a.a.createElement("div",{className:"wave"}),a.a.createElement(te,null,e))},oe=function(n){var e=n.design,t=n.setDesign;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ie,null,a.a.createElement(_e,null,"Theme"),a.a.createElement(De,null,a.a.createElement(_n,{currentValue:"",values:[{label:"Upcoming Feature",value:""}],onChange:function(){}})),a.a.createElement(De,null,a.a.createElement(_n,{currentValue:e.image,values:R,onChange:function(n){return t(Object(An.a)(Object(An.a)({},e),{},{image:n}))}})),a.a.createElement(De,null,a.a.createElement(Pn,{currentValue:e.image,onChange:function(n){return t(Object(An.a)(Object(An.a)({},e),{},{image:n}))}})),a.a.createElement(De,null,a.a.createElement(Kn,{colors:e.colors,setColors:function(n){return t(Object(An.a)(Object(An.a)({},e),{},{colors:n}))}})),a.a.createElement(De,null,a.a.createElement(Be,{onClick:function(){},text:"Add Theme",icon:fn.f,disabled:!0}),a.a.createElement(Be,{onClick:function(){},text:"Remove Theme",icon:fn.e,disabled:!0}))),a.a.createElement($n,{color:e.colors["--bg-color"]},a.a.createElement(ne,{src:e.image}),a.a.createElement(re,null,a.a.createElement(ae,{title:"Default",color:e.colors["--default-color"]}),a.a.createElement(ae,{title:"Accent",color:e.colors["--accent-color"]}),a.a.createElement(ae,{title:"Accent 2",color:e.colors["--accent-color2"]}))))},ce=[{version:"0.2.1",changes:["Optimized keyboard control","Restructured settings"]},{version:"0.2.0",changes:["Added this changelog","Added tabs in settings","Added design preview",'Added "Discard Changes" button in settings',"Added project logo","Changed structure of settings","I think I enhanced stability overall a bit"]},{version:"0.1.0",description:"The initial state of this project."}],ie=t(95),le=t.n(ie);function ue(){var n=Object(l.a)(["\n    width:600px;\n"]);return ue=function(){return n},n}function se(){var n=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: auto;\n    > h1 {\n        font-weight: 500;\n    }\n    > img {\n        width: 180px;\n        height: 180px;\n    }\n"]);return se=function(){return n},n}var pe=u.a.div(se()),de=u.a.div(ue()),fe=function(){return a.a.createElement(pe,null,a.a.createElement("img",{src:le.a,alt:"logo"}),a.a.createElement("h1",null,"Changelog"),ce.map((function(n){return a.a.createElement(ve,n)})))},ve=function(n){var e=n.version,t=n.description,r=n.changes;return a.a.createElement(de,null,a.a.createElement("h2",null,"v",e),t&&a.a.createElement("p",null,t),null===r||void 0===r?void 0:r.map((function(n){return a.a.createElement("li",null,n)})))};function ge(){var n=Object(l.a)(["\n    font-size: 1rem;\n    font-weight: 500;\n    transition: .3s;\n    height: 100%;\n    min-width: 150px;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: ",";\n    ",";\n    :hover {\n        text-shadow: var(--text-shadow-downwards);\n    }\n"]);return ge=function(){return n},n}function me(){var n=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]);return me=function(){return n},n}function be(){var n=Object(l.a)(["\n    background-color: var(--default-color);\n    color: var(--bg-color);\n    font-size: 1rem;\n    padding: 10px 20px;\n    :enabled:hover{\n        animation: circling-shadow-small 2s ease 0s infinite normal;\n    }\n"]);return be=function(){return n},n}function he(){var n=Object(l.a)(["\n    z-index:15;\n    height:30px;\n    opacity: 1;\n    padding:0;\n"]);return he=function(){return n},n}function xe(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    position: relative;\n    padding: 10px 0px;\n    z-index: 10;\n    display:flex;\n    justify-content: space-between;\n"]);return xe=function(){return n},n}function we(){var n=Object(l.a)(["\n    font-size: 1rem;\n    padding: 10px 0;\n"]);return we=function(){return n},n}function ye(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    width:400px;\n    height:100%;\n    margin-right:30px;\n    padding-right:20px;\n    overflow-y: auto;\n"]);return ye=function(){return n},n}function Ee(){var n=Object(l.a)(["\n    display:flex;\n    justify-content: space-between;\n    position:absolute;\n    left:30px;\n    right:30px;\n    bottom:30px;\n"]);return Ee=function(){return n},n}function je(){var n=Object(l.a)(['\n    ::before{\n        content:"Settings";\n        margin: 5px 20px 0 10px;\n    }\n    color: var(--bg-color);\n    background-color: var(--default-color);\n    width:100%;\n    height: 32px;\n    position:absolute;\n    left:0;\n    top:0;\n    display:flex;\n    justify-content: space-between;\n']);return je=function(){return n},n}function ke(){var n=Object(l.a)(["\n    width: 100%;\n    height: calc(100% - 80px);\n    display:flex;\n"]);return ke=function(){return n},n}function Oe(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    position: relative;\n    border: 2px solid var(--default-color);\n    width: 100%;\n    height: 100%;\n    padding: 60px 30px 30px 30px;\n    box-shadow: 10px 10px 0px var(--accent-color);\n"]);return Oe=function(){return n},n}var Se=u.a.div(Oe()),Ce=u.a.div(ke()),Ae=u.a.div(je()),ze=u.a.div(Ee()),Ie=u.a.div(ye()),_e=u.a.p(we()),De=u.a.div(xe()),Je=Object(u.a)(hn)(he()),Be=Object(u.a)(hn)(be()),Ne=u.a.div(me()),Le=u.a.button(ge(),(function(n){return n.active?"default":"pointer"}),(function(n){return n.active&&"text-shadow: var(--text-shadow-downwards)"})),Te=["Links","Appearance","Searchbar","Changelog"],Ve=function(n){var e=n.hidePopup,t=Object(r.useState)(Y[0]),o=Object(i.a)(t,2),c=o[0],l=o[1],u=Object(r.useState)(Te[0]),s=Object(i.a)(u,2),g=s[0],m=s[1],b=Object(r.useState)(q),h=Object(i.a)(b,2),x=h[0],w=h[1],y=Object(r.useState)(Z),E=Object(i.a)(y,2),j=E[0],k=E[1];Object(r.useEffect)((function(){try{var n=p.get();n&&k(n)}catch(r){console.error("Your currently applied search settings appear to be corrupted.")}try{var e=f();e&&l(e)}catch(a){console.error("Your currently applied design appears to be corrupted.")}try{var t=d.get();t&&w(t)}catch(o){console.error("Your currently applied links appear to be corrupted.")}}),[]);return a.a.createElement(Se,null,a.a.createElement(Ae,null,a.a.createElement(Ne,null,Te.map((function(n){return a.a.createElement(Le,{key:n,active:n===g,onClick:function(){return m(n)}},n)}))),a.a.createElement(Je,{inverted:!0,onClick:function(){return e()},icon:fn.i})),a.a.createElement(Ce,null,"Links"===g&&a.a.createElement(Cn,{linkGroups:x,setLinkGroups:w}),"Appearance"===g&&a.a.createElement(oe,{design:c,setDesign:l}),"Searchbar"===g&&a.a.createElement(Bn,{searchSettings:j,setSearchSettings:k}),"Changelog"===g&&a.a.createElement(fe,null)),"Changelog"!==g&&a.a.createElement(ze,null,a.a.createElement(Be,{onClick:function(){return v(c),p.set(j),d.set(x),void window.location.reload(!1)},text:"Apply Changes",icon:fn.g}),a.a.createElement(Be,{onClick:function(){window.location.reload(!1)},text:"Discard Changes",icon:fn.d}),a.a.createElement(Be,{onClick:function(){localStorage.clear(),window.location.reload(!1)},text:"Delete All Settings",icon:fn.j})))};function Pe(){var n=Object(l.a)(["\n    position: absolute;\n\ttop:0px;\n    left:0px;\n    right:0px;\n    bottom:0px;\n    padding:100px;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"]);return Pe=function(){return n},n}function Fe(){var n=Object(l.a)(["\n    position: fixed;\n\tleft:0px;\n    width:100%;\n    height:100%;\n    background-color: var(--bg-color);\n    opacity: 0.7;\n"]);return Fe=function(){return n},n}function Ge(){var n=Object(l.a)(["\n\tposition: fixed;\n\ttop: 20px;\n\tright:20px;\n\tfont-size: 20px;\n\n\tcolor: var(--default-color);\n    background-color:transparent;\n    border:none;\n\topacity: 0.3;\n\n\tcursor: pointer;\n\ttransition: .3s;\n\n    :hover{\n        opacity: .5;\n        color: var(--accent-color2);\n        animation:box-flicker 0.01s ease 0s infinite alternate;\n    }\n    :focus{\n        outline: none;\n    }\n"]);return Ge=function(){return n},n}var Me=u.a.button(Ge()),Ue=u.a.div(Fe()),We=u.a.div(Pe()),qe=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],o=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Me,{onClick:function(){return o(!0)}},a.a.createElement(vn.a,{icon:fn.h})),t&&a.a.createElement(We,null,a.a.createElement(Ue,{onClick:function(){}}),a.a.createElement(Ve,{hidePopup:function(){return o(!1)}})))};function Re(){var n=Object(l.a)(["\n    height:400px;\n    width:400px;\n    border: 2px solid var(--default-color);\n    padding: 10px;\n    object-fit:cover;\n\n    animation:circling-shadow 4s ease 0s infinite normal;\n"]);return Re=function(){return n},n}function Ke(){var n=Object(l.a)(["\n    padding:0px 100px;\n    display:flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items:center;\n    height:calc(100% - 100px);\n"]);return Ke=function(){return n},n}var Ze=u.a.div(Ke()),Ye=u.a.img(Re()),He=function(){var n,e=Object(r.useState)((null===(n=f())||void 0===n?void 0:n.image)||R[0].value),t=Object(i.a)(e,2),o=t[0],c=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ze,null,a.a.createElement("div",null,a.a.createElement(Ye,{src:o,onError:function(){return c(R[0].value)}})),a.a.createElement(X,null)),a.a.createElement(dn,null),a.a.createElement(qe,null))},Qe=function(){var n=document.documentElement;try{var e,t=null===(e=f())||void 0===e?void 0:e.colors;t&&Object.keys(t).forEach((function(e){n.style.setProperty(e,t[e])}))}catch(r){}return a.a.createElement(He,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},49:function(n,e,t){n.exports=t.p+"static/media/pic_1.03400a86.jpg"},81:function(n,e,t){n.exports=t.p+"static/media/pic_2.42b93d95.jpg"},82:function(n,e,t){n.exports=t.p+"static/media/pic_3.8796fde5.jpg"},83:function(n,e,t){n.exports=t.p+"static/media/pic_4.66ccb182.jpg"},84:function(n,e,t){n.exports=t.p+"static/media/pic_5.6e9543cd.jpg"},85:function(n,e,t){n.exports=t.p+"static/media/pic_6.65b20253.jpg"},86:function(n,e,t){n.exports=t.p+"static/media/pic_7.6516acf6.jpg"},87:function(n,e,t){n.exports=t.p+"static/media/pic_8.ba1342f4.png"},88:function(n,e,t){n.exports=t.p+"static/media/google.9ef22081.svg"},89:function(n,e,t){n.exports=t.p+"static/media/duckduckgo.e5067b7c.svg"},90:function(n,e,t){n.exports=t.p+"static/media/qwant.f90c346a.svg"},95:function(n,e,t){n.exports=t.p+"static/media/logo.06ef2568.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.1e12f082.chunk.js.map