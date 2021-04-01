(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},s={app:0},a=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+".js"}function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],o=s[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=s[t]=[e,n]}));e.push(o[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=i(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(d);var o=s[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}s[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/taskan/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0d17":function(t,e,o){"use strict";var n=o("a30c"),s=o.n(n);s.a},4468:function(t,e,o){"use strict";var n=o("aaed"),s=o.n(n);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("AppTop")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("div",{staticClass:"container"},[o("router-view")],1),o("footer")])},a=[],i=(o("5c0b"),o("2877")),r={},c=Object(i["a"])(r,s,a,!1,null,null,null),l=c.exports,d=(o("d3b7"),o("8c4f")),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",["LIST"===t.mode?o("ProjectList",{attrs:{projects:t.projects},on:{addProject:t.addProject,edit:t.toEdit,deleteProject:t.deleteProject,deleteTask:t.deleteTask}}):t._e(),"FORM"===t.mode?o("ProjectForm",{on:{back:t.toList,create:t.sendPost}}):t._e(),"EDIT"===t.mode?o("ProjectEditForm",{attrs:{project:t.pickupRec},on:{back:t.toList,update:t.sendPut}}):t._e()],1)},p=[],m=(o("4de4"),o("4160"),o("159b"),o("bc3a")),f=o.n(m),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-list"},[o("h2",[t._v("Project list")]),t._l(t.projects,(function(e){return o("ProjectCard",{key:e.id,attrs:{project:e},on:{deleteProject:t.deleteProject,deleteTask:t.deleteTask}})})),o("div",{staticClass:"center"},[o("button",{staticClass:"button-primary",on:{click:t.addProject}},[t._v("Add Project")])])],2)},v=[],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("div",{staticClass:"row"},[o("div",{staticClass:"eleven columns"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],staticClass:"project-name",attrs:{type:"text"},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}})]),o("div",{staticClass:"one column"})]),o("TaskList",{attrs:{tasks:t.project.tasks},on:{delete:t.deleteTask}}),o("span",{staticClass:"material-icons text-button",on:{click:function(e){return t.addTask(t.project.id)}}},[t._v("add")]),o("br"),o("div",{staticClass:"right-button"},[o("span",{staticClass:"material-icons text-button",on:{click:function(e){return t.del(t.project.id)}}},[t._v("delete")])])],1)},k=[],_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"task-list"},t._l(t.tasks,(function(e){return o("div",{key:e.id,staticClass:"task"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"t.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{change:function(o){var n=e.done,s=o.target,a=!!s.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);s.checked?r<0&&t.$set(e,"done",n.concat([i])):r>-1&&t.$set(e,"done",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(e,"done",a)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"t.name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(o){o.target.composing||t.$set(e,"name",o.target.value)}}}),o("span",{staticClass:"text-button material-icons",on:{click:function(o){return t.deleteTask(e.id)}}},[t._v("delete")]),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.showChildren[e.id]&&e.sub_tasks.length>0,expression:"!showChildren[t.id] && t.sub_tasks.length > 0"}],staticClass:"text-button material-icons",on:{click:function(o){return t.toggleShowChildren(e.id)}}},[t._v("expand_more")]),o("span",{directives:[{name:"show",rawName:"v-show",value:t.showChildren[e.id]&&e.sub_tasks.length>0,expression:"showChildren[t.id] && t.sub_tasks.length > 0"}],staticClass:"text-button material-icons",on:{click:function(o){return t.toggleShowChildren(e.id)}}},[t._v("expand_less")]),t.showChildren[e.id]?o("TaskList",{attrs:{tasks:e.sub_tasks},on:{delete:t.deleteTask}}):t._e(),o("span",{directives:[{name:"show",rawName:"v-show",value:t.showChildren[e.id]||0==e.sub_tasks.length,expression:"showChildren[t.id] || t.sub_tasks.length == 0"}],staticClass:"add-task-button text-button material-icons",on:{click:function(o){return t.addSubTask(e.id)}}},[t._v("add")]),o("br")],1)})),0)},j=[],b=(o("13d5"),{name:"TaskList",props:{tasks:Array},data:function(){return{showChildren:[]}},mounted:function(){console.log("aaaa"),this.showChildren=this.tasks.reduce((function(t,e){return t[e.id]=!1,t}),{})},methods:{addRec:function(){console.log("add"),this.$emit("addRec")},showDetail:function(t){this.$emit("detail",t)},edit:function(t){this.$emit("edit",t)},del:function(t){this.$emit("delete",t)},toggleShowChildren:function(t){this.showChildren[t]=!this.showChildren[t]},addSubTask:function(t){var e=this.tasks.filter((function(e){return e.id==t}))[0];console.log(e);var o={end:"2021/03/02 21:16:56.000000",name:"",parent_task_id:null,done:!1,progress:100,start:"2021/03/02 21:16:56.000000",sub_tasks:[]};console.log(t);var n=localStorage.getItem("max_id_tsk");n++,o.id=n,e.sub_tasks.push(o),localStorage.setItem("max_id_tsk",n)},deleteTask:function(t){this.$emit("delete",t)}}}),w=b,C=(o("0d17"),Object(i["a"])(w,_,j,!1,null,"1821ae29",null)),P=C.exports,x={name:"ProjectCard",components:{TaskList:P},props:{msg:String,project:Object},methods:{addRec:function(){console.log("add"),this.$emit("addRec")},showDetail:function(t){this.$emit("detail",t)},edit:function(t){this.$emit("edit",t)},del:function(t){this.$emit("deleteProject",t)},addTask:function(t){var e={end:"2021/03/02 21:16:56.000000",name:"",parent_task_id:null,done:!1,progress:100,start:"2021/03/02 21:16:56.000000",sub_tasks:[]};console.log(t);var o=localStorage.getItem("max_id_tsk");o++,e.id=o,localStorage.setItem("max_id_tsk",o),this.project.tasks.push(e)},deleteTask:function(t){this.$emit("deleteTask",t)}}},T=x,y=(o("4468"),Object(i["a"])(T,g,k,!1,null,"4133dbfb",null)),S=y.exports,$={name:"ProjectList",components:{ProjectCard:S},props:{msg:String,projects:Array},data:function(){return{db:void 0}},methods:{addProject:function(){console.log("add"),this.$emit("addProject")},showDetail:function(t){this.$emit("detail",t)},edit:function(t){this.$emit("edit",t)},del:function(t){this.$emit("delete",t)},addTask:function(t){alert(t),this.projects.push("a")},deleteTask:function(t){this.$emit("deleteTask",t)},deleteProject:function(t){this.$emit("deleteProject",t)}}},E=$,I=(o("5b5a"),Object(i["a"])(E,h,v,!1,null,"def07c4e",null)),O=I.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h2",[t._v("Item form")]),o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"project_name",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),o("label",{attrs:{for:"project_name"}},[t._v("project_name")])])]),o("a",{staticClass:"waves-effect waves-light btn grey",on:{click:t.back}},[t._v("戻る")]),t._v(" "),o("a",{staticClass:"waves-effect waves-light btn",on:{click:t.send}},[t._v("登録")])])},R=[],A=(o("b0c0"),{name:"ProjectForm",props:{msg:String},data:function(){return{name:"",tasks:[]}},methods:{back:function(){this.$emit("back")},send:function(){this.$emit("create",{name:this.name,tasks:this.tasks})}}}),N=A,D=Object(i["a"])(N,L,R,!1,null,"162a65e6",null),F=D.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h2",[t._v("Item form")]),o("div",{staticClass:"card-panel"},[o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],attrs:{id:"project_name",type:"text"},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),o("label",{attrs:{for:"project_name"}},[t._v("project_name")])])])]),o("a",{staticClass:"waves-effect waves-light btn grey",on:{click:t.back}},[t._v("戻る")]),t._v(" "),o("a",{staticClass:"waves-effect waves-light btn",on:{click:t.send}},[t._v("登録")])])},J=[],U={name:"ItemEditForm",props:{project:Object},methods:{back:function(){this.$emit("back")},send:function(){this.$emit("update",this.project)}}},V=U,q=Object(i["a"])(V,M,J,!1,null,"63fe546b",null),z=q.exports,B={name:"AppTop",components:{ProjectForm:F,ProjectList:O,ProjectEditForm:z},props:{msg:String},data:function(){return{mode:"LIST",projects:JSON.parse(localStorage.getItem("projects"))||[],pickupRec:null,apiUrl:"http://"+location.hostname+":8080/api/projects"}},mounted:function(){},watch:{projects:{handler:function(t,e){console.log(t),console.log(e),console.log("change!"),localStorage.setItem("projects",JSON.stringify(t))},deep:!0}},methods:{deleteTask:function(t){var e=this;console.log("delete"),console.log(t),this.projects.forEach((function(o){o.tasks=e.deleteTaskRecursive(t,o.tasks)}))},deleteTaskRecursive:function(t,e){var o=this;return e=e.filter((function(e){return e.id!==t})),e.forEach((function(e){e.sub_tasks=o.deleteTaskRecursive(t,e.sub_tasks)})),e},addProject:function(){var t={name:"untitled project",done:!1,tasks:[]},e=localStorage.getItem("max_id_prj");e++,t.id=e,this.projects.push(t),localStorage.setItem("max_id_prj",e)},deleteProject:function(t){console.log("delete project"),console.log(t),this.projects=this.projects.filter((function(e){return e.id!==t}))},_DEV_changeDataScm:function(){this.projects.forEach((function(t){t.done=!1,t.tasks.forEach((function(t){t.done=!1,t.sub_tasks.forEach((function(t){t.done=!1}))}))}))},_DEV_setId:function(){var t=0,e=0;this.projects.forEach((function(o){void 0!==o.id&&o.id>t&&(t=o.id),o.tasks.forEach((function(t){void 0!==t.id&&t.id>e&&(e=t.id),t.sub_tasks.forEach((function(t){void 0!==t.id&&t.id>e&&(e=t.id)}))}))})),console.log(t),console.log(e),localStorage.setItem("max_id_prj",t),localStorage.setItem("max_id_tsk",e),this.projects.forEach((function(o){void 0===o.id&&(o.id=t,t++),o.tasks.forEach((function(t){void 0===t.id&&(t.id=e,e++),t.sub_tasks.forEach((function(t){void 0===t.id&&(t.id=e,e++)}))}))})),console.log(t),console.log(e),localStorage.setItem("projects",JSON.stringify(this.projects)),localStorage.setItem("max_id_prj",t),localStorage.setItem("max_id_tsk",e)},getRecords:function(){var t=this;f.a.get(this.apiUrl).then((function(e){console.log(e),t.projects=e.data}))},sendPost:function(t){var e=this;console.log(t),f.a.post(this.apiUrl,t).then((function(t){console.log("send!"),console.log(t),e.mode="LIST",e.getRecords()}))},sendPut:function(t){var e=this;console.log("put!"),console.log(t),f.a.put(this.apiUrl+"/"+t.id,t).then((function(t){console.log("send!"),console.log(t),e.mode="LIST",e.getRecords()}))},deleteRecord:function(t){var e=this;console.log(t),f.a.delete(this.apiUrl+"/"+t,{data:t}).then((function(t){console.log("delete!"),console.log(t),e.mode="LIST",e.getRecords()}))},toCreate:function(){console.log("create"),this.mode="FORM"},toEdit:function(t){this.pickupRec=this.projects.filter((function(e){return e.id==t}))[0],this.mode="EDIT"},toList:function(){this.mode="LIST"}}},G=B,H=Object(i["a"])(G,u,p,!1,null,"2d407fa2",null),K=H.exports;n["a"].use(d["a"]);var Q=[{path:"/",name:"AppTop",component:K},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],W=new d["a"]({mode:"history",base:"/taskan/",routes:Q}),X=W,Y=o("2f62");n["a"].use(Y["a"]);var Z=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:X,store:Z,render:function(t){return t(l)}}).$mount("#app")},"5b5a":function(t,e,o){"use strict";var n=o("b588"),s=o.n(n);s.a},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),s=o.n(n);s.a},"9c0c":function(t,e,o){},a30c:function(t,e,o){},aaed:function(t,e,o){},b588:function(t,e,o){}});