(function(){"use strict";var e={49:function(e,t,n){var r=n(751),l=n(641);const a={id:"app"};function o(e,t,n,r,o,s){const u=(0,l.g2)("TopBar"),i=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",a,[(0,l.bF)(u,{class:"topbar"}),(0,l.bF)(i,{class:"view"})])}const s={class:"bar-header"},u={class:"content"};function i(e,t,n,r,a,o){const i=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.Lk)("div",u,[t[2]||(t[2]=(0,l.Lk)("h1",null,[(0,l.Lk)("a",{href:"https://taiben.qingyi-studio.top/"},"青衣台本站")],-1)),(0,l.bF)(i,{to:"/search"},{default:(0,l.k6)((()=>t[0]||(t[0]=[(0,l.Lk)("span",null,"搜索",-1)]))),_:1}),(0,l.bF)(i,{to:"/license"},{default:(0,l.k6)((()=>t[1]||(t[1]=[(0,l.Lk)("span",null,"版权声明",-1)]))),_:1})])])}var c={name:"TopBar"},p=n(262);const d=(0,p.A)(c,[["render",i],["__scopeId","data-v-42259254"]]);var h=d,v={name:"App",components:{TopBar:h},mounted(){document.title="青衣台本站"}};const k=(0,p.A)(v,[["render",o]]);var f=k,y=n(220),L=n(33);const b={class:"search-settings"},m={class:"search-options"},g={class:"source-options"},_={class:"search-results"},T={key:0};function O(e,t,n,a,o,s){const u=(0,l.g2)("ResultItem");return(0,l.uX)(),(0,l.CE)("div",null,[t[19]||(t[19]=(0,l.Lk)("h1",null,"青衣台本站",-1)),(0,l.bo)((0,l.Lk)("input",{class:"search-box","onUpdate:modelValue":t[0]||(t[0]=e=>o.query=e),onInput:t[1]||(t[1]=(...e)=>s.search&&s.search(...e)),onKeyup:t[2]||(t[2]=(0,r.jR)(((...e)=>s.search&&s.search(...e)),["enter"])),placeholder:"搜索台本..."},null,544),[[r.Jo,o.query]]),(0,l.Lk)("button",{class:"search-button",onClick:t[3]||(t[3]=(...e)=>s.search&&s.search(...e))},t[9]||(t[9]=[(0,l.Lk)("span",{style:{"font-size":"larger"}},"🔍",-1)])),(0,l.Lk)("div",b,[(0,l.Lk)("div",m,[t[15]||(t[15]=(0,l.Lk)("h3",null,"搜索类型",-1)),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",value:"title","onUpdate:modelValue":t[4]||(t[4]=e=>o.searchType=e)},null,512),[[r.XL,o.searchType]]),t[10]||(t[10]=(0,l.Lk)("span",null,"书名",-1))]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",value:"author",disabled:"","onUpdate:modelValue":t[5]||(t[5]=e=>o.searchType=e)},null,512),[[r.XL,o.searchType]]),t[11]||(t[11]=(0,l.Lk)("span",{style:{color:"grey"}},"作者",-1)),t[12]||(t[12]=(0,l.Lk)("span",{style:{"font-size":"smaller","vertical-align":"super"},title:"暂不支持"},"ℹ",-1))]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",value:"tag",disabled:"","onUpdate:modelValue":t[6]||(t[6]=e=>o.searchType=e)},null,512),[[r.XL,o.searchType]]),t[13]||(t[13]=(0,l.Lk)("span",{style:{color:"grey"}},"标签",-1)),t[14]||(t[14]=(0,l.Lk)("span",{style:{"font-size":"smaller","vertical-align":"super"},title:"暂不支持"},"ℹ",-1))])]),(0,l.Lk)("div",g,[t[18]||(t[18]=(0,l.Lk)("h3",null,"搜索源",-1)),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",value:"site","onUpdate:modelValue":t[7]||(t[7]=e=>o.searchSource=e)},null,512),[[r.XL,o.searchSource]]),t[16]||(t[16]=(0,l.Lk)("span",null,"站点数据库",-1))]),(0,l.Lk)("label",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",value:"twitter","onUpdate:modelValue":t[8]||(t[8]=e=>o.searchSource=e)},null,512),[[r.XL,o.searchSource]]),t[17]||(t[17]=(0,l.Lk)("span",null,"X (Twitter)",-1))])])]),(0,l.Lk)("div",_,[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.results,(e=>((0,l.uX)(),(0,l.Wv)(u,{key:e._id,result:e},null,8,["result"])))),128))]),0===o.results.length&&o.query?((0,l.uX)(),(0,l.CE)("p",T,'未找到 "'+(0,L.v_)(o.query)+'" 的结果。',1)):(0,l.Q3)("",!0)])])}var X=n(335);const w={class:"container"},C={class:"item"};function E(e,t,n,r,a,o){const s=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("div",w,[(0,l.Lk)("li",C,[(0,l.Lk)("h3",null,[(0,l.bF)(s,{to:{name:"NovelDetail",query:{id:n.result._id,url:n.result.contentUrl}}},{default:(0,l.k6)((()=>[(0,l.eW)((0,L.v_)(n.result.title),1)])),_:1},8,["to"])]),(0,l.Lk)("p",null,[(0,l.Lk)("span",null,"by "+(0,L.v_)(n.result.author),1)]),(0,l.Lk)("p",null,[(0,l.Lk)("span",null,"简介："+(0,L.v_)(n.result.description),1)])]),t[0]||(t[0]=(0,l.Lk)("br",null,null,-1))])}var S={props:{result:{type:Object,default:()=>({})}},name:"ResultItem"};const q=(0,p.A)(S,[["render",E],["__scopeId","data-v-7036d264"]]);var j=q,A={components:{ResultItem:j},data(){return{query:"",results:[],searchType:"title",searchSource:"site"}},methods:{async search(){if(this.query)try{X.A.defaults.withCredentials=!0;const e=await X.A.get(`https://taiben-backend.qingyi-studio.top/search?query=${this.query}&source=${this.searchSource}`);this.results=e.data}catch(e){console.error("搜索失败:",e)}else this.results=[]}}};const I=(0,p.A)(A,[["render",O],["__scopeId","data-v-43705980"]]);var F=I;const U={class:"taiben-license"};function V(e,t,n,r,a,o){return(0,l.uX)(),(0,l.CE)("div",U,t[0]||(t[0]=[(0,l.Lk)("h1",null,"版权声明",-1),(0,l.Lk)("div",{class:"content"},[(0,l.Lk)("p",null,"Copyright 2024 ©, Grey Wind"),(0,l.Lk)("p",null,"特此免费授予任何人获得本软件和软件相关文档文件的副本，允许使用、复制、修改、合并、发布本软件副本的权利，并允许提供本软件的人这样做，但须符合以下条件:"),(0,l.Lk)("p",null,"版权声明和本许可声明应包含在本软件的所有副本或主要部分中。"),(0,l.Lk)("p",null,"本软件“按原样”提供，不提供任何形式的明示或暗示的保证，包括但不限于适销性、适用于特定目的和不侵权的保证。在任何情况下，作者或版权所有人都不承担任何索赔、损害赔偿或其他责任，无论是在合同诉讼、侵权行为或其他诉讼中，由软件、软件的使用或其他交易引起的或与之有关的。 "),(0,l.Lk)("p",null,[(0,l.eW)("以上所有条款不包括内部收录的文章，"),(0,l.Lk)("strong",null,"收录的文章的版权由原作者所有！禁止任何非授权的台本转载！")])],-1)]))}var x={name:"TaiBenLicense"};const B=(0,p.A)(x,[["render",V],["__scopeId","data-v-142446b4"]]);var N=B;function P(e,t,n,r,a,o){return(0,l.uX)(),(0,l.CE)("div",null,t[0]||(t[0]=[(0,l.Lk)("p",null,"TEST",-1)]))}var R={name:"NovelDetail",props:{novel:{type:Object,required:!0}}};const W=(0,p.A)(R,[["render",P]]);var $=W;const z=[{path:"/",name:"Home",component:f,redirect:"/search",meta:{title:"青衣台本公益搜索站"}},{path:"/search",name:"Search",component:F},{path:"/license",name:"License",component:N},{path:"/novel-detail",name:"NovelDetail",component:$}],D=(0,y.aE)({history:(0,y.Bt)(),routes:z});var K=D;D.beforeEach(((e,t,n)=>{console.log(`Navigating to: ${e.path}`),n()}));var M=n(278),G=(0,M.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.Ef)(f).use(G).use(K).mount("#app")}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,l,a){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],l=e[c][1],a=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var i=l();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,l,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,a,o=r[0],s=r[1],u=r[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(u)var c=u(n)}for(t&&t(r);i<o.length;i++)a=o[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunktaiben"]=self["webpackChunktaiben"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(49)}));r=n.O(r)})();
//# sourceMappingURL=app.2c7fabc6.js.map