(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],u=0,h=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],r=!0,n=1;n<s.length;n++){var c=s[n];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var r={},a={app:0},o=[];function n(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a749a09d"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,r){s=a[t]=[e,r]}));e.push(s[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=n(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=a[t];if(0!==s){if(s){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,s[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/iu_interview_project/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var r=s("1356"),a=s.n(r);a.a},1356:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("15f5");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-content",[s("router-view")],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:s("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),t._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,s){return r("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,s){return r("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,s){return r("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1)],1)],1)},i=[],c={data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},l=c,u=s("2877"),p=s("6544"),h=s.n(p),m=s("a523"),d=s("0e8f"),f=s("adda"),v=s("a722"),_=Object(u["a"])(l,n,i,!1,null,null,null),g=_.exports;h()(_,{VContainer:m["a"],VFlex:d["a"],VImg:f["a"],VLayout:v["a"]});var b={name:"App",components:{HelloWorld:g},data:()=>({})},y=b,T=(s("034f"),s("7496")),E=s("a75b"),S=Object(u["a"])(y,a,o,!1,null,null,null),x=S.exports;h()(S,{VApp:T["a"],VContent:E["a"]});var A=s("8c4f"),U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-12"},[s("div",{staticClass:"cover-photo"},[s("div",{staticClass:"parallax-img svg-background",style:t.parallax},[t._m(0)])]),s("div",{staticClass:"pa-4 px-12",attrs:{id:"repos-search"}},[s("h1",{staticClass:"py-4"},[t._v("Github repos search")]),s("v-text-field",{staticClass:"mt-4",attrs:{label:"Search by user name",outlined:"","append-icon":"fas fa-search",id:"search-input"},on:{"click:append":function(e){return t.searchUser(t.inputUser)},keydown:t.inputkeyDown},model:{value:t.inputUser,callback:function(e){t.inputUser=e},expression:"inputUser"}}),s("v-list",{attrs:{color:"rgba(0,0,0,0)"}},t._l(t.searchResults,(function(e,r){return s("v-list-item",{key:r,on:{click:function(s){return t.selectUser(e.login)}}},[s("v-avatar",{staticClass:"ma-2"},[s("img",{attrs:{src:e.avatar_url,alt:"avartar"}})]),s("v-list-item-title",[t._v(t._s(e.login))])],1)})),1)],1),s("v-divider"),s("div",{staticClass:"pa-4 px-12",attrs:{id:"repos-result"}},[s("h1",{directives:[{name:"show",rawName:"v-show",value:t.searchedUser,expression:"searchedUser"}],staticClass:"py-4"},[t._v(t._s(t.searchedUser)+"'s repos")]),s("v-select",{attrs:{outlined:"",value:t.sortMethods[0],items:t.sortMethods,label:"Sort method"},on:{change:t.sort}}),t._l(t.repos,(function(e){return s("v-card",{staticClass:"my-5 pa-4"},[s("v-card-title",[t._v(t._s(e.name))]),s("v-card-text",[t._v(t._s(e.description))]),s("v-card-actions",{staticClass:"d-flex justify-end"},[s("a",{attrs:{href:e.html_url,target:"_BLANK"}},[t._v(t._s(e.html_url))])])],1)})),s("div",{staticClass:"d-flex justify-center"},[t.links&&t.links.next?s("v-btn",{staticClass:"caption mt-12",attrs:{outlined:"",text:"",ripple:!0,loading:t.isLoading,disabled:t.isLoading},on:{click:t.loadMoreRepos}},[t._v("show more")]):t._e()],1)],2)],1)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"abs-header pa-12 d-flex flex-column"},[s("h2",{staticClass:"overline mb-3"},[t._v("Github API")]),s("h2",{staticClass:"overline mb-3"},[t._v("parallax scroll")]),s("h2",{staticClass:"overline mb-3"},[t._v("infinite scroll")]),s("h1",{staticStyle:{"text-transform":"uppercase"}},[t._v("Interview project for IU")])])}],O=s("2f62"),L={mounted(){window.addEventListener("scroll",t=>{this.scrollY=window.scrollY}),this.searchUser(),this.selectUser("bubblecigar")},data(){return{inputUser:"bubblecigar",page:1,perpage:2,sortMethods:["created","updated","pushed","full_name"],scrollY:0}},computed:{...Object(O["b"])(["repos","searchResults","links","searchedUser","isLoading"]),parallax(){return`transform: translateY(${.6*this.scrollY}px);`}},methods:{inputkeyDown(t){13===t.keyCode&&this.searchUser()},goToPage(t){window.open(t)},searchUser(){this.$store.dispatch("searchUser",{user:this.inputUser,page:this.page,perpage:10})},getReposByUser(){this.$store.dispatch("getReposByUser",{user:this.inputUser,page:this.page,perpage:this.perpage})},selectUser(t){this.$store.commit("CLEAR_REPOS"),this.$store.dispatch("selectUser",{user:t})},loadMoreRepos(){this.$store.dispatch("loadMoreRepos")},sort(t){this.$store.commit("SET_SORT_METHOD",t),this.$store.dispatch("reSort")}}},C=L,R=(s("cd8c"),s("8212")),k=s("8336"),I=s("b0af"),P=s("99d9"),j=s("ce7e"),D=s("8860"),N=s("da13"),G=s("5d23"),$=s("b974"),V=s("8654"),M=Object(u["a"])(C,U,w,!1,null,"40097e3d",null),B=M.exports;h()(M,{VAvatar:R["a"],VBtn:k["a"],VCard:I["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VDivider:j["a"],VList:D["a"],VListItem:N["a"],VListItemTitle:G["b"],VSelect:$["a"],VTextField:V["a"]}),r["a"].use(A["a"]);var H=new A["a"]({routes:[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:()=>s.e("about").then(s.bind(null,"f820"))}]}),q=s("bc3a"),K=s.n(q);const Y={getReposByUser(t,e,s,r="full_name"){return K.a.get(`https://api.github.com/users/${t}/repos?page=${e}&per_page=${s}&sort=${r}`)},searchUser(t,e,s){return K.a.get(`https://api.github.com/search/users?q=${t}&page=${e}&per_page=${s}`)},getByDirectUrl(t){return K.a.get(t)}};var F=Y;r["a"].use(O["a"]);var W=new O["a"].Store({state:{searchedUser:null,currentPage:1,perpage:3,repos:[],searchResults:[],sortMethod:"created",links:null,isLoading:!1},mutations:{CLEAR_REPOS(t){t.repos.splice(0)},INIT_REPOS(t,e){t.repos=e},PUSH_REPOS(t,e){t.repos.push(...e)},SET_SEARCH_RESULTS(t,e){t.searchResults=e},SET_USER(t,e){t.searchedUser=e},RESET_PAGE(t){t.currentPage=1},NEXT_PAGE(t){t.currentPage++},UPDATE_LINK(t,e){function s(t){if(0===t.length)throw new Error("input must not be of zero length");for(var e=t.split(","),s={},r=0;r<e.length;r++){var a=e[r].split(";");if(2!==a.length)throw new Error("section could not be split on ';'");var o=a[0].replace(/<(.*)>/,"$1").trim(),n=a[1].replace(/rel="(.*)"/,"$1").trim();s[n]=o}return s}t.links=s(e)},SET_SORT_METHOD(t,e){t.sortMethod=e},SET_LOADING_STATE(t,e){t.isLoading=e}},actions:{getReposByUser(t,{user:e,page:s,perpage:r}){t.commit("SET_LOADING_STATE",!0),F.getReposByUser(e,s,r).then(e=>{t.commit("PUSH_REPOS",e.data),t.commit("SET_LOADING_STATE",!1)}).catch(e=>{console.log(e),t.commit("SET_LOADING_STATE",!1)})},getReposByUrl(t,e){t.commit("SET_LOADING_STATE",!0),F.getReposByUrl(e).then(e=>{t.commit("PUSH_REPOS",e.data),t.commit("SET_LOADING_STATE",!1)}).catch(e=>{console.log(e),t.commit("SET_LOADING_STATE",!1)})},searchUser(t,{user:e,page:s,perpage:r}){t.commit("SET_LOADING_STATE",!0),F.searchUser(e,s,r).then(e=>{t.commit("SET_SEARCH_RESULTS",e.data.items),t.commit("SET_LOADING_STATE",!1)}).catch(e=>{console.log(e),t.commit("SET_LOADING_STATE",!1)})},selectUser(t,{user:e}){t.commit("SET_USER",e),t.commit("RESET_PAGE"),t.dispatch("getInitReposByUser",e)},getInitReposByUser(t,e){t.commit("SET_LOADING_STATE",!0),F.getReposByUser(e,t.state.currentPage,t.state.perpage,t.state.sortMethod).then(e=>{t.commit("SET_LOADING_STATE",!1),t.commit("INIT_REPOS",e.data),t.commit("UPDATE_LINK",e.headers.link)}).catch(e=>{t.commit("SET_LOADING_STATE",!1),console.log(e)})},loadMoreRepos(t){t.state.links.next&&(t.commit("SET_LOADING_STATE",!0),F.getByDirectUrl(t.state.links.next).then(e=>{t.commit("SET_LOADING_STATE",!1),t.commit("PUSH_REPOS",e.data),t.commit("UPDATE_LINK",e.headers.link)}).catch(e=>{t.commit("SET_LOADING_STATE",!1),console.log(e)}))},reSort(t){t.commit("SET_LOADING_STATE",!0),F.getReposByUser(t.state.searchedUser,t.state.currentPage,t.state.perpage,t.state.sortMethod).then(e=>{t.commit("SET_LOADING_STATE",!1),t.commit("INIT_REPOS",e.data),t.commit("UPDATE_LINK",e.headers.link)}).catch(t=>{console.log(t)})}}}),J=s("f309");r["a"].use(J["a"]);var z=new J["a"]({icons:{iconfont:"fa"}});r["a"].config.productionTip=!1,new r["a"]({router:H,store:W,vuetify:z,render:t=>t(x)}).$mount("#app")},"927f":function(t,e,s){},"9b19":function(t,e,s){t.exports=s.p+"img/logo.63a7d78d.svg"},cd8c:function(t,e,s){"use strict";var r=s("927f"),a=s.n(r);a.a}});
//# sourceMappingURL=app.a6414712.js.map