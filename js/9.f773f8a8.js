(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"365c":function(t,e,a){"use strict";var i={baseUrl:"https://gateway.marvel.com",characters:{path:"/v1/public/characters"},comics:{path:"/v1/public/comics"},stories:{path:"/v1/public/stories"}};e["a"]=i},5876:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},t._l(t.stories,(function(t){return a("div",{key:t.id,staticClass:"col-xs-12 col-sm-4 col-lg-3 col-md-3"},[a("story",{attrs:{value:t}})],1)})),0),a("div",{staticClass:"q-pa-lg flex flex-center"},[t.isLoading?t._e():a("q-pagination",{attrs:{color:"black",max:t.total,"max-pages":15,"boundary-numbers":!1},on:{input:function(e){return t.changePage()}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},o=[],c=(a("551c"),a("06db"),a("097d"),a("365c")),s=a("826f"),r=a("62c5"),n=a("dbd5"),d={name:"PageStories",components:{Story:n["a"]},data:function(){return{stories:[],currentPage:1,total:1,count:20,order:"id",isLoading:!1}},methods:{changePage:function(){var t=this,e=c["a"].baseUrl,a=c["a"].stories,i=r["a"].get(),o="".concat(e).concat(a.path);i["orderBy"]=this.order;var n=Object(s["a"])(o,i,this.currentPage,this.count);this.$q.loading.show(),this.isLoading=!0,this.$axios.get(n).then((function(e){200===e.data.code&&(t.total=Math.floor(e.data.data.total/e.data.data.count),t.total=e.data.data.total%e.data.data.count!==0?t.total+1:t.total,t.stories=e.data.data.results)})).catch((function(){})).finally((function(){t.isLoading=!1,t.$q.loading.hide(),window.scrollTo(0,0)}))}},computed:{},beforeMount:function(){this.changePage()}},l=d,u=a("2877"),h=a("eebe"),f=a.n(h),g=a("3b16"),m=Object(u["a"])(l,i,o,!1,null,null,null);e["default"]=m.exports;f()(m,"components",{QPagination:g["a"]})},"62c5":function(t,e,a){"use strict";var i=a("6821f"),o={get:function(){var t="27a16c60f12ffe97705904be77d5f2bd",e=(new Date).getUTCSeconds(),a="2a8213eb9482ee8155dc81aa1e87c1d87b06f777";return{apikey:t,ts:e,hash:i("".concat(e).concat(a).concat(t))}}};e["a"]=o},"826f":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));a("ac6a"),a("cadf"),a("06db"),a("456d");function i(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,o=i,c=(a-1)*o,s="".concat(t,"?limit=").concat(o,"&offset=").concat(c,"&");return Object.keys(e).forEach((function(t){s+="".concat(t,"=").concat(e[t],"&")})),s}function o(t){var e="";console.log(t);var a=t.length,i=1;return t.forEach((function(t){e+="".concat(t.value),e+=i===a?"":",",i++})),e}},"98b3":function(t,e,a){"use strict";a("20d6"),a("7514");var i={comics:window.localStorage.getItem("comics")?JSON.parse(window.localStorage.getItem("comics")):[],characters:window.localStorage.getItem("characters")?JSON.parse(window.localStorage.getItem("characters")):[],stories:window.localStorage.getItem("stories")?JSON.parse(window.localStorage.getItem("stories")):[],storyIds:window.localStorage.getItem("storyIds")?JSON.parse(window.localStorage.getItem("storyIds")):[],comicIds:window.localStorage.getItem("comicIds")?JSON.parse(window.localStorage.getItem("comicIds")):[],characterIds:window.localStorage.getItem("characterIds")?JSON.parse(window.localStorage.getItem("characterIds")):[],saveComic:function(t){this.comics.find((function(e){return e.id===t.id}))||(this.comics.push(t),window.localStorage.setItem("comics",JSON.stringify(this.comics)))},saveComicId:function(t){-1===this.comicIds.indexOf(t)&&(this.comicIds.push(t),window.localStorage.setItem("comicIds",JSON.stringify(this.comicIds)))},saveCharacter:function(t){this.characters.find((function(e){return e.id===t.id}))||(this.characters.push(t),window.localStorage.setItem("characters",JSON.stringify(this.characters)))},saveCharacterId:function(t){-1===this.characterIds.indexOf(t)&&(this.characterIds.push(t),window.localStorage.setItem("characterIds",JSON.stringify(this.characterIds)))},saveStory:function(t){this.stories.find((function(e){return e.id===t.id}))||(this.stories.push(t),window.localStorage.setItem("stories",JSON.stringify(this.stories)))},saveStoryId:function(t){-1===this.storyIds.indexOf(t)&&(this.storyIds.push(t),window.localStorage.setItem("storyIds",JSON.stringify(this.storyIds)))},deleteComicId:function(t){var e=this.comicIds.indexOf(t);-1!==e&&this.comicIds.splice(e,1)},deleteCharacterId:function(t){var e=this.characterIds.indexOf(t);-1!==e&&this.characterIds.splice(e,1)},deleteStoryId:function(t){var e=this.storyIds.indexOf(t);-1!==e&&this.storyIds.splice(e,1)},deleteCharacter:function(t){var e=this.characters.findIndex((function(e){return e.id===t.id}));-1!==e&&(this.characters.splice(e,1),window.localStorage.setItem("characters",JSON.stringify(this.characters)))},deleteComic:function(t){var e=this.comics.findIndex((function(e){return e.id===t.id}));-1!==e&&(this.comics.splice(e,1),window.localStorage.setItem("comics",JSON.stringify(this.characters)))},deleteStory:function(t){var e=this.stories.findIndex((function(e){return e.id===t.id}));-1!==e&&(this.stories.splice(e,1),window.localStorage.setItem("stories",JSON.stringify(this.stories)))},clear:function(){window.localStorage.clear()}};e["a"]=i},dbd5:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[a("q-card",{staticClass:"fit full-height",attrs:{"full-height":"",flat:"",bordered:"",dark:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v(t._s(t.value.title))]),a("div",{staticClass:"text-caption text-grey"})]),a("q-card-actions",[t.isSaved?t._e():a("q-btn",{attrs:{flat:"",round:"",color:"red",icon:"favorite_border"},on:{click:function(e){return t.saveStory()}}}),t.isSaved?a("q-btn",{attrs:{flat:"",round:"",color:"red",icon:"favorite"},on:{click:function(e){return t.deleteStory()}}}):t._e(),a("q-space"),a("q-btn",{attrs:{color:"grey",round:"",flat:"",dense:"",icon:t.expanded?"keyboard_arrow_up":"keyboard_arrow_down"},on:{click:function(e){t.expanded=!t.expanded}}})],1),a("q-slide-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"expanded"}]},[a("q-separator"),a("q-card-section",{staticClass:"text-subitle2"},[t._v("\n            "+t._s(t.value.description)+"\n          ")])],1)])],1)],1)])},o=[],c=a("98b3"),s={name:"story",props:{value:Object},data:function(){return{expanded:!1}},methods:{saveStory:function(){c["a"].saveStory(this.value),c["a"].saveStoryId(this.value.id)},deleteStory:function(){c["a"].deleteStory(this.value),c["a"].deleteStoryId(this.value.id)}},computed:{img:function(){return"".concat(this.value.thumbnail.path,".").concat(this.value.thumbnail.extension)},isSaved:function(){return-1!==c["a"].storyIds.indexOf(this.value.id)}}},r=s,n=a("2877"),d=a("eebe"),l=a.n(d),u=a("f09f"),h=a("a370"),f=a("4b7e"),g=a("9c40"),m=a("2c91"),v=a("e9c1"),w=a("eb85"),p=Object(n["a"])(r,i,o,!1,null,null,null);e["a"]=p.exports;l()(p,"components",{QCard:u["a"],QCardSection:h["a"],QCardActions:f["a"],QBtn:g["a"],QSpace:m["a"],QSlideTransition:v["a"],QSeparator:w["a"]})}}]);