!function(){function n(n){return n}function t(n){this.name=n,this.setStart=function(t){var e=t.elt[n];return t.$start[n]=e,void 0!==e&&void 0!==t.$end[n]},this.applyCurrent=function(t){t.elt[n]=t.$current[n]}}function e(t,e,r,i){i=i||n,this.name=t,this.setStart=function(n){var e=parseFloat(n.elt.style[t]);return isNaN(e)&&(e=n.$current[t]||r),n.$start[t]=e,void 0!==n.$end[t]},this.applyCurrent=function(n){n.elt.style[t]=i(n.$current[t])+e}}function r(t,e,r,i){i=i||n,this.name=t,this.setStart=function(n){var e=n.$current[t];return void 0===e&&(e=r),n.$start[t]=e,void 0===n.$end[t]&&(n.$end[t]=e),void 0!==e},this.applyCurrent=function(n){var a=n.$current[t];return a!==r&&t+"("+i(a)+e+")"}}function i(n){this.elt=n,this.$current={},this.$pending={}}function a(n){var t=this,e=(Date.now()-t.$startTime)/t.$end.duration,r="";if(n&&t.$end.duration){e=1;var i=["all",t.$end.duration+"ms",t.$end.easing.toCSS()];t.$end.delay&&i.push(t.$end.delay+"ms"),r=i.join(" ")}else if(1>e){if(t.$requestId=window.requestAnimationFrame(a.bind(t,!1)),0>e)return}else t.$end.endCb&&(t.$requestId=window.requestAnimationFrame(t.$end.endCb));var o=t.$end.easing.get(e),s=t.$attributes.reduce(function(n,r){if(1>e){var i=t.$end[r.name]-t.$start[r.name];t.$current[r.name]=t.$start[r.name]+i*o}else t.$current[r.name]=t.$end[r.name];var a=r.applyCurrent(t);return a&&n.push(a),n},[]);s.length&&s.push("translateZ(0)");var d=s.join(" ");t.elt.style.WebkitTransform=d,t.elt.style.MozTransform=d,t.elt.style.transform=d,t.elt.style.WebkitTransition=r,t.elt.style.MozTransition=r,t.elt.style.transition=r,t.$end.stepCb&&t.$end.stepCb()}for(var o=["moz","webkit"],s=0;s<o.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[o[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o[s]+"CancelAnimationFrame"]||window[o[s]+"CancelRequestAnimationFrame"];var d=[new t("scrollTop"),new t("scrollLeft"),new e("opacity","",1),new e("zIndex","",0),new r("translateX","px",0,Math.round),new r("translateY","px",0,Math.round),new r("scale","",1),new r("rotate","deg",0)].concat(["width","height","top","right","bottom","left"].map(function(n){return new e(n,"px",0,Math.round)}));d.map(function(n){return n.name}).concat("duration","easing","delay").forEach(function(n){i.prototype[n]=function(t){return this.$pending[n]=t,this}}),i.prototype.start=function(n,t){var e=this;return e.stop(),e.$start={},e.$end=e.$pending,e.$pending={},e.$attributes=d.filter(function(n){return n.setStart(e)}),e.$end.duration=e.$end.duration||0,e.$end.delay=e.$end.delay||0,e.$end.easing=window.BezierEasing.css[e.$end.easing]||window.BezierEasing.css["ease-out"],e.$end.endCb="function"==typeof n&&n,e.$end.stepCb="function"==typeof t&&t,e.$startTime=Date.now()+e.$end.delay,a.call(e,n===!0),e.elt},i.prototype.stop=function(){window.cancelAnimationFrame(this.$requestId)},Object.defineProperty(window.Element.prototype,"clanim",{get:function(){return Object.defineProperty(this,"clanim",{value:new i(this)}),this.clanim},configurable:!0,writeable:!1})}();