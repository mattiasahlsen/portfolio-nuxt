(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(t,e,o){var map={"./background.jpg":169,"./chessgame.mp4":171,"./chessgame.png":172,"./css/tailwind.css":111,"./me.jpg":168,"./spotifyfavourites.png":173,"./spotifyqueue.png":174,"./urlexp.mp4":175,"./urlexp.png":176};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=165},166:function(t,e,o){var content=o(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("ef58e684",content,!0,{sourceMap:!1})},167:function(t,e,o){var content=o(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("f17a6202",content,!0,{sourceMap:!1})},168:function(t,e,o){t.exports=o.p+"img/me.65b4db4.jpg"},169:function(t,e,o){t.exports=o.p+"img/background.a04bfff.jpg"},170:function(t,e,o){"use strict";o.r(e);var n={props:["backgroundImage","video","link","github","description","title"],data:function(){return{hover:!1}},mounted:function(){this.video&&(this.$refs.video.defaultPlaybackRate=2,this.$refs.video.load())},methods:{mouseEnter:function(){this.hover=!0,this.video&&this.$refs.video.play()},mouseLeave:function(){this.hover=!1,this.video&&(this.$refs.video.pause(),this.$refs.video.currentTime=0)}}},r=(o(177),o(19)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-container"},[n("div",{staticClass:"border"},[n("div",[n("div",{staticClass:"aspect-ratio"},[n("div",{staticClass:"image-container",on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave}},[n("a",{staticClass:"project-link",attrs:{target:"_blank",href:t.link}},[t.video?n("video",{ref:"video",staticClass:"project-video",attrs:{poster:o(165)("./"+t.backgroundImage),loop:""}},[n("source",{attrs:{src:o(165)("./"+t.video),type:"video/mp4"}})]):n("div",{staticClass:"project-image",class:{zoom:t.hover},style:{backgroundImage:"url('"+o(165)("./"+t.backgroundImage)+"')"}}),t._v(" "),n("div",{staticClass:"on-hover center-flex"},[n("h2",{staticClass:"link-text",class:{showLink:t.hover}},[t._v("Go to website")]),t._v(" "),n("div",{class:{darken:t.hover}})])])])])])]),t._v(" "),t.github?n("div",{staticClass:"project-links"},[n("a",{attrs:{target:"_blank",href:t.github}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t.description?n("p",[t._v("\n      "+t._s(t.description)+"\n    ")]):t._e()]):t._e()])}),[],!1,null,"73ed1640",null);e.default=component.exports},171:function(t,e,o){t.exports=o.p+"videos/chessgame.4258760.mp4"},172:function(t,e,o){t.exports=o.p+"img/chessgame.50983e2.png"},173:function(t,e,o){t.exports=o.p+"img/spotifyfavourites.4555766.png"},174:function(t,e,o){t.exports=o.p+"img/spotifyqueue.7219f18.png"},175:function(t,e,o){t.exports=o.p+"videos/urlexp.8a64359.mp4"},176:function(t,e,o){t.exports=o.p+"img/urlexp.22c2ef6.png"},177:function(t,e,o){"use strict";var n=o(166);o.n(n).a},178:function(t,e,o){(e=o(23)(!1)).push([t.i,"a[data-v-73ed1640]{color:#485460;text-decoration:none;font-weight:700;font-size:1.5rem}a[data-v-73ed1640]:hover{color:#70d4c0;text-shadow:1px 2px 3px #524e52}.light-link[data-v-73ed1640]{color:#808e9b}.center-flex[data-v-73ed1640]{display:flex;justify-content:center;align-items:center;flex:1}.container[data-v-73ed1640]{margin-left:auto;margin-right:auto}@media (max-width:540px){.hero-text[data-v-73ed1640]{font-size:1.5em}}@media (min-width:540px){.hero-text[data-v-73ed1640]{font-size:2em}.container[data-v-73ed1640]{width:100%}}@media (min-width:720px){.hero-text[data-v-73ed1640]{font-size:3em}.container[data-v-73ed1640]{width:95%}.project[data-v-73ed1640]{margin-left:1em;margin-right:1em}}@media (min-width:960px){.hero-text[data-v-73ed1640]{font-size:4em}.container[data-v-73ed1640]{width:90%}.project[data-v-73ed1640]{margin-left:2em;margin-right:2em}}@media (min-width:1140px){.hero-text[data-v-73ed1640]{font-size:5em}.container[data-v-73ed1640]{width:80%}}.project-container[data-v-73ed1640]{box-shadow:10px 9px 10px -7px #524e52;background-color:#f5f5f5}.aspect-ratio[data-v-73ed1640]{width:100%;padding-top:51%;position:relative;overflow:hidden}.image-container[data-v-73ed1640]{position:absolute;top:0;left:0;right:0;bottom:0}.project-image[data-v-73ed1640]{width:100%;height:100%;background-size:cover;background-position:50%;transition-duration:.2s}.project-video[data-v-73ed1640]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.zoom[data-v-73ed1640]{transform:scale(1.1)}.project-link[data-v-73ed1640]{text-decoration:none}.link-text[data-v-73ed1640]{color:#f5f5f5;z-index:10;transition:opacity .2s;opacity:0;font-size:1.2em;font-weight:700}.showLink[data-v-73ed1640]{opacity:1}.darken[data-v-73ed1640],.on-hover[data-v-73ed1640]{position:absolute;top:0;width:100%;height:100%}.darken[data-v-73ed1640]{background-color:#000;opacity:.5}.border[data-v-73ed1640]{border-top-right-radius:.2em;border-top-left-radius:.2em;background-color:#1e272e;padding:1em;border:none}.project-links[data-v-73ed1640]{margin:2em;border-bottom-right-radius:.2em;border-bottom-left-radius:.2em}",""]),t.exports=e},179:function(t,e,o){"use strict";var n=o(167);o.n(n).a},180:function(t,e,o){var n=o(23),r=o(181),d=o(169);e=n(!1);var c=r(d);e.push([t.i,"a[data-v-008803f2]{color:#485460;text-decoration:none;font-weight:700;font-size:1.5rem}a[data-v-008803f2]:hover{color:#70d4c0;text-shadow:1px 2px 3px #524e52}.light-link[data-v-008803f2]{color:#808e9b}.center-flex[data-v-008803f2]{display:flex;justify-content:center;align-items:center;flex:1}.container[data-v-008803f2]{margin-left:auto;margin-right:auto}@media (max-width:540px){.hero-text[data-v-008803f2]{font-size:1.5em}}@media (min-width:540px){.hero-text[data-v-008803f2]{font-size:2em}.container[data-v-008803f2]{width:100%}}@media (min-width:720px){.hero-text[data-v-008803f2]{font-size:3em}.container[data-v-008803f2]{width:95%}.project[data-v-008803f2]{margin-left:1em;margin-right:1em}}@media (min-width:960px){.hero-text[data-v-008803f2]{font-size:4em}.container[data-v-008803f2]{width:90%}.project[data-v-008803f2]{margin-left:2em;margin-right:2em}}@media (min-width:1140px){.hero-text[data-v-008803f2]{font-size:5em}.container[data-v-008803f2]{width:80%}}.hero-text[data-v-008803f2]{font-weight:700}.name[data-v-008803f2]{color:#70d4c0}.title[data-v-008803f2]{color:#f5f5f5;margin:2rem}.me-container[data-v-008803f2]{flex:0 1 200px}.me[data-v-008803f2]{width:100%}.top-bar[data-v-008803f2]{display:-webkit-flexbox;display:flex;justify-content:flex-start;align-items:center;padding:1em;background-color:#1e272e}.content[data-v-008803f2]{display:flex;justify-content:space-around}.background[data-v-008803f2]{background:linear-gradient(hsla(0,0%,100%,.6),rgba(0,0,0,.8)),url("+c+");background-position:50%;background-size:cover;padding:5em 0}.project[data-v-008803f2]{flex:1 0 0;margin:1em}@media (max-width:540px){.project[data-v-008803f2]{margin-left:.5em;margin-right:.5em}}@media (max-width:960px){.content[data-v-008803f2]{flex-direction:column}}.blinking-cursor[data-v-008803f2]{font-weight:700;color:#2e3d48;-webkit-animation:blink-data-v-008803f2 1s step-end infinite;animation:blink-data-v-008803f2 1s step-end infinite}@-webkit-keyframes blink-data-v-008803f2{0%,to{color:transparent}50%{color:#f5f5f5}}@keyframes blink-data-v-008803f2{0%,to{color:transparent}50%{color:#f5f5f5}}",""]),t.exports=e},181:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},182:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"me-container"},[e("img",{staticClass:"me",attrs:{src:o(168)}})])}],r={components:{Project:o(170).default},data:function(){return{titleText1:"",titleText2:"",titleCursor:!1}},mounted:function(){var t=this;this.titleCursor=!0,setTimeout((function(){var e=setInterval((function(){t.titleText1.length==="".length?t.titleText2.length===" Portfolio".length?(clearInterval(e),t.titleCursor=!1):t.titleText2+=" Portfolio".charAt(t.titleText2.length):t.titleText1+="".charAt(t.titleText1.length)}),100)}),2e3)}},d=(o(179),o(19)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"top-bar"},[t._m(0),t._v(" "),o("div",{staticClass:"center-flex"},[o("h1",{staticClass:"title hero-text"},[o("span",[o("span",{staticClass:"name"},[t._v("Mattias Ahlsén")]),t._v("\n          "+t._s(t.titleText1)+"\n        ")]),t._v(" "),o("span",[t._v("\n          "+t._s(t.titleText2)+"\n        ")]),t._v(" "),t.titleCursor?o("span",{staticClass:"blinking-cursor"},[t._v("|")]):t._e()])])]),t._v(" "),o("div",{staticClass:"background"},[o("main",{staticClass:"container"},[o("div",{staticClass:"content"},[o("Project",{staticClass:"project",attrs:{"background-image":"chessgame.png",video:"chessgame.mp4",link:"https://mattiasahlsen.github.io/jackfish/#/",github:"https://github.com/mattiasahlsen/jackfish",description:"A chess computer made in javascript.",title:"Chess Computer"}}),t._v(" "),o("Project",{staticClass:"project",attrs:{video:"urlexp.mp4","background-image":"urlexp.png",link:"https://urlexp.com/",github:"https://github.com/mattiasahlsen/comments",description:"A website for hosting comment fields for any news articles.",title:"News Website"}})],1),t._v(" "),o("div",{staticClass:"content"},[o("Project",{staticClass:"project",attrs:{"background-image":"spotifyfavourites.png",link:"https://spotifyfavourites.com/",github:"https://github.com/mattiasahlsen/spotify-app",description:"A website for easily seeing your favourite songs and artists on Spotify. Used the Spotify web API.",title:"Spotify Favourites"}}),t._v(" "),o("Project",{staticClass:"project",attrs:{"background-image":"spotifyqueue.png",link:"https://spotifyqueue.com/",github:"https://github.com/mattiasahlsen/spotify-queue",description:"A web application to make shared queues for Spotify. Everybody with the link can add songs. Only the host of the queue needs a Spotify account.",title:"Shared Queues on Spotify"}})],1)])])])}),n,!1,null,"008803f2",null);e.default=component.exports;installComponents(component,{Project:o(170).default})}}]);