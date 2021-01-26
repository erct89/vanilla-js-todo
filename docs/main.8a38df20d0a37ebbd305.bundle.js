(()=>{"use strict";function a(d){if(c[d])return c[d].exports;var e=c[d]={exports:{}};return b[d](e,e.exports,a),e.exports}var b={694:(a,b,c)=>{function d(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function e(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function f(d,a,b){return a&&e(d.prototype,a),b&&e(d,b),d}function g(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function h(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function i(d,a,b){return a&&h(d.prototype,a),b&&h(d,b),d}c.d(b,{y:()=>q});var j=function(){function h(a){var b=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];d(this,h),this.completado=b,this.creado=new Date,this.id=new Date().getTime(),this.tarea=a}return f(h,null,[{key:"fromJson",value:function(a){var b=a.id,c=a.creado,d=a.completado,e=a.tarea,f=new h(e);return f.id=b,f.creado=c,f.completado=d,f}}]),h}();var k=document.querySelector("ul.todo-list"),l=document.querySelector("input.new-todo"),m=document.querySelector("button.clear-completed"),n=document.querySelector("ul.filters"),o=function(d){var a="\n  <li class=\"".concat(d.completado?"completed":"","\" data-id=\"").concat(d.id,"\">\n    <div class=\"view\">\n      <input class=\"toggle\" type=\"checkbox\" ").concat(d.completed?"checked":"",">\n      <label>").concat(d.tarea,"</label>\n      <button class=\"destroy\"></button>\n    </div>\n    <input class=\"edit\" value=\"").concat(d.tarea,"\">\n  </li>\n  "),b=document.createElement("div");b.innerHTML=a,k.appendChild(b.firstElementChild)};l.addEventListener("keyup",function(e){var a=e.keyCode,b=e.target;if(13===a&&!!l.value.length){var c=new j(l.value);q.addToDo(c),l.value="",o(c)}}),k.addEventListener("click",function(f){var a=f.target,b=f.path,c=b.find(function(b){return!!b.getAttribute("data-id")}),d=+c.getAttribute("data-id");switch(a.tagName){case"INPUT":q.completedToDo(d),c.classList.toggle("completed");break;case"BUTTON":q.deleteToDo(d),k.removeChild(c);}}),m.addEventListener("click",function(){q.deleteCompleted(),Array.from(k.children).forEach(function(b){b.classList.contains("completed")&&k.removeChild(b)})}),n.addEventListener("click",function(d){var e=d.target,a=(e.text||"").toUpperCase();a&&(n.querySelector(".selected").classList.remove("selected"),e.classList.add("selected"),Array.from(k.children).forEach(function(b){b.classList.remove("hidden");var a=b.classList.contains("completed");switch(e.text.toUpperCase()){case"PENDIENTES":a&&b.classList.add("hidden");break;case"COMPLETADOS":a||b.classList.add("hidden");}}))});var p=function(){function b(){g(this,b),this.load()}return i(b,[{key:"addToDo",value:function(b){this.tasks.push(b),this.save()}},{key:"deleteToDo",value:function(c){this.tasks=this.tasks.filter(function(a){return a.id===c}),this.save()}},{key:"completedToDo",value:function(c){var a=this.tasks.find(function(a){return a.id===c});a.completado=!a.completado,this.save()}},{key:"deleteCompleted",value:function(){this.tasks=this.tasks.filter(function(b){return!b.completed}),this.save()}},{key:"load",value:function(){this.tasks=JSON.parse(localStorage.getItem("todo"))||[],this.tasks=this.tasks.map(j.fromJson),console.info("Load localstorage ".concat(JSON.stringify(this.tasks)))}},{key:"save",value:function(){localStorage.setItem("todo",JSON.stringify(this.tasks)),console.info("Save in localStorage ".concat(JSON.stringify(this.tasks)))}}]),b}();var q=new p;q.tasks.forEach(o)}},c={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})(),a(694)})();