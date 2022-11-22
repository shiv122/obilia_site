(function(o,r){typeof define=="function"&&define.amd?define(["jquery"],r):r(o.jQuery)})(globalThis,function(o){var r={data:{index:0,name:"scrollbar"},macosx:/mac/i.test(navigator.platform),mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)};r.scrolls.add=function(s){this.remove(s).push(s)},r.scrolls.remove=function(s){for(;o.inArray(s,this)>=0;)this.splice(o.inArray(s,this),1);return this};var T={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,scrollx:null,scrolly:null,onDestroy:null,onInit:null,onScroll:null,onUpdate:null},I=function(s){r.scroll||(r.overlay=L(),r.scroll=C(),_(),o(window).resize(function(){var l=!1;if(r.scroll&&(r.scroll.height||r.scroll.width)){var e=C();(e.height!==r.scroll.height||e.width!==r.scroll.width)&&(r.scroll=e,l=!0)}_(l)})),this.container=s,this.namespace=".scrollbar_"+r.data.index++,this.options=o.extend({},T,window.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},s.data(r.data.name,this),r.scrolls.add(this)};I.prototype={destroy:function(){if(!!this.wrapper){this.container.removeData(r.data.name),r.scrolls.remove(this);var s=this.container.scrollLeft(),l=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:"","max-height":""}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(s).scrollTop(l),this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),this.wrapper.remove(),o(document).add("body").off(this.namespace),o.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},init:function(s){var l=this,e=this.container,n=this.containerWrapper||e,c=this.namespace,t=o.extend(this.options,s||{}),a={x:this.scrollx,y:this.scrolly},h=this.wrapper,w={scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop()};if(r.mobile&&t.ignoreMobile||r.overlay&&t.ignoreOverlay||r.macosx&&!r.webkit)return!1;if(h)n.css({height:"auto","margin-bottom":r.scroll.height*-1+"px","margin-right":r.scroll.width*-1+"px","max-height":""});else{if(this.wrapper=h=o("<div>").addClass("scroll-wrapper").addClass(e.attr("class")).css("position",e.css("position")=="absolute"?"absolute":"relative").insertBefore(e).append(e),e.is("textarea")&&(this.containerWrapper=n=o("<div>").insertBefore(e).append(e),h.addClass("scroll-textarea")),n.addClass("scroll-content").css({height:"auto","margin-bottom":r.scroll.height*-1+"px","margin-right":r.scroll.width*-1+"px","max-height":""}),e.on("scroll"+c,function(f){o.isFunction(t.onScroll)&&t.onScroll.call(l,{maxScroll:a.y.maxScrollOffset,scroll:e.scrollTop(),size:a.y.size,visible:a.y.visible},{maxScroll:a.x.maxScrollOffset,scroll:e.scrollLeft(),size:a.x.size,visible:a.x.visible}),a.x.isVisible&&a.x.scroll.bar.css("left",e.scrollLeft()*a.x.kx+"px"),a.y.isVisible&&a.y.scroll.bar.css("top",e.scrollTop()*a.y.kx+"px")}),h.on("scroll"+c,function(){h.scrollTop(0).scrollLeft(0)}),t.disableBodyScroll){var S=function(f){O(f)?a.y.isVisible&&a.y.mousewheel(f):a.x.isVisible&&a.x.mousewheel(f)};h.on("MozMousePixelScroll"+c,S),h.on("mousewheel"+c,S),r.mobile&&h.on("touchstart"+c,function(f){var i=f.originalEvent.touches&&f.originalEvent.touches[0]||f,m={pageX:i.pageX,pageY:i.pageY},v={left:e.scrollLeft(),top:e.scrollTop()};o(document).on("touchmove"+c,function(d){var g=d.originalEvent.targetTouches&&d.originalEvent.targetTouches[0]||d;e.scrollLeft(v.left+m.pageX-g.pageX),e.scrollTop(v.top+m.pageY-g.pageY),d.preventDefault()}),o(document).on("touchend"+c,function(){o(document).off(c)})})}o.isFunction(t.onInit)&&t.onInit.apply(this,[e])}o.each(a,function(f,i){var m=null,v=1,d=f==="x"?"scrollLeft":"scrollTop",g=t.scrollStep,x=function(){var p=e[d]();e[d](p+g),v==1&&p+g>=u&&(p=e[d]()),v==-1&&p+g<=u&&(p=e[d]()),e[d]()==p&&m&&m()},u=0;i.scroll||(i.scroll=l._getScroll(t["scroll"+f]).addClass("scroll-"+f),t.showArrows&&i.scroll.addClass("scroll-element_arrows_visible"),i.mousewheel=function(p){if(!i.isVisible||f==="x"&&O(p))return!0;if(f==="y"&&!O(p))return a.x.mousewheel(p),!0;var b=p.originalEvent.wheelDelta*-1||p.originalEvent.detail,y=i.size-i.visible-i.offset;return(b>0&&u<y||b<0&&u>0)&&(u=u+b,u<0&&(u=0),u>y&&(u=y),l.scrollTo=l.scrollTo||{},l.scrollTo[d]=u,setTimeout(function(){l.scrollTo&&(e.stop().animate(l.scrollTo,240,"linear",function(){u=e[d]()}),l.scrollTo=null)},1)),p.preventDefault(),!1},i.scroll.on("MozMousePixelScroll"+c,i.mousewheel).on("mousewheel"+c,i.mousewheel).on("mouseenter"+c,function(){u=e[d]()}),i.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+c,function(p){if(p.which!=1)return!0;v=1;var b={eventOffset:p[f==="x"?"pageX":"pageY"],maxScrollValue:i.size-i.visible-i.offset,scrollbarOffset:i.scroll.bar.offset()[f==="x"?"left":"top"],scrollbarSize:i.scroll.bar[f==="x"?"outerWidth":"outerHeight"]()},y=0,z=0;return o(this).hasClass("scroll-arrow")?(v=o(this).hasClass("scroll-arrow_more")?1:-1,g=t.scrollStep*v,u=v>0?b.maxScrollValue:0):(v=b.eventOffset>b.scrollbarOffset+b.scrollbarSize?1:b.eventOffset<b.scrollbarOffset?-1:0,g=Math.round(i.visible*.75)*v,u=b.eventOffset-b.scrollbarOffset-(t.stepScrolling?v==1?b.scrollbarSize:0:Math.round(b.scrollbarSize/2)),u=e[d]()+u/i.kx),l.scrollTo=l.scrollTo||{},l.scrollTo[d]=t.stepScrolling?e[d]()+g:u,t.stepScrolling&&(m=function(){u=e[d](),clearInterval(z),clearTimeout(y),y=0,z=0},y=setTimeout(function(){z=setInterval(x,40)},t.duration+100)),setTimeout(function(){l.scrollTo&&(e.animate(l.scrollTo,t.duration),l.scrollTo=null)},1),l._handleMouseDown(m,p)}),i.scroll.bar.on("mousedown"+c,function(p){if(p.which!=1)return!0;var b=p[f==="x"?"pageX":"pageY"],y=e[d]();return i.scroll.addClass("scroll-draggable"),o(document).on("mousemove"+c,function(z){var k=parseInt((z[f==="x"?"pageX":"pageY"]-b)/i.kx,10);e[d](y+k)}),l._handleMouseDown(function(){i.scroll.removeClass("scroll-draggable"),u=e[d]()},p)}))}),o.each(a,function(f,i){var m="scroll-scroll"+f+"_visible",v=f=="x"?a.y:a.x;i.scroll.removeClass(m),v.scroll.removeClass(m),n.removeClass(m)}),o.each(a,function(f,i){o.extend(i,f=="x"?{offset:parseInt(e.css("left"),10)||0,size:e.prop("scrollWidth"),visible:h.width()}:{offset:parseInt(e.css("top"),10)||0,size:e.prop("scrollHeight"),visible:h.height()})}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),o.isFunction(t.onUpdate)&&t.onUpdate.apply(this,[e]),o.each(a,function(f,i){var m=f==="x"?"left":"top",v=f==="x"?"outerWidth":"outerHeight",d=f==="x"?"width":"height",g=parseInt(e.css(m),10)||0,x=i.size,u=i.visible+g,p=i.scroll.size[v]()+(parseInt(i.scroll.size.css(m),10)||0);t.autoScrollSize&&(i.scrollbarSize=parseInt(p*u/x,10),i.scroll.bar.css(d,i.scrollbarSize+"px")),i.scrollbarSize=i.scroll.bar[v](),i.kx=(p-i.scrollbarSize)/(x-u)||1,i.maxScrollOffset=x-u}),e.scrollLeft(w.scrollLeft).scrollTop(w.scrollTop).trigger("scroll")},_getScroll:function(s){var l={advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")};return l[s]&&(s=l[s]),s||(s=l.simple),typeof s=="string"?s=o(s).appendTo(this.wrapper):s=o(s),o.extend(s,{bar:s.find(".scroll-bar"),size:s.find(".scroll-element_size"),track:s.find(".scroll-element_track")}),s},_handleMouseDown:function(s,l){var e=this.namespace;return o(document).on("blur"+e,function(){o(document).add("body").off(e),s&&s()}),o(document).on("dragstart"+e,function(n){return n.preventDefault(),!1}),o(document).on("mouseup"+e,function(){o(document).add("body").off(e),s&&s()}),o("body").on("selectstart"+e,function(n){return n.preventDefault(),!1}),l&&l.preventDefault(),!1},_updateScroll:function(s,l){var e=this.container,n=this.containerWrapper||e,c="scroll-scroll"+s+"_visible",t=s==="x"?this.scrolly:this.scrollx,a=parseInt(this.container.css(s==="x"?"left":"top"),10)||0,h=this.wrapper,w=l.size,S=l.visible+a;l.isVisible=w-S>1,l.isVisible?(l.scroll.addClass(c),t.scroll.addClass(c),n.addClass(c)):(l.scroll.removeClass(c),t.scroll.removeClass(c),n.removeClass(c)),s==="y"&&(e.is("textarea")||w<S?n.css({height:S+r.scroll.height+"px","max-height":"none"}):n.css({"max-height":S+r.scroll.height+"px"})),(l.size!=e.prop("scrollWidth")||t.size!=e.prop("scrollHeight")||l.visible!=h.width()||t.visible!=h.height()||l.offset!=(parseInt(e.css("left"),10)||0)||t.offset!=(parseInt(e.css("top"),10)||0))&&(o.extend(this.scrollx,{offset:parseInt(e.css("left"),10)||0,size:e.prop("scrollWidth"),visible:h.width()}),o.extend(this.scrolly,{offset:parseInt(e.css("top"),10)||0,size:this.container.prop("scrollHeight"),visible:h.height()}),this._updateScroll(s==="x"?"y":"x",t))}};var A=I;o.fn.scrollbar=function(s,l){return typeof s!="string"&&(l=s,s="init"),typeof l>"u"&&(l=[]),o.isArray(l)||(l=[l]),this.not("body, .scroll-wrapper").each(function(){var e=o(this),n=e.data(r.data.name);(n||s==="init")&&(n||(n=new A(e)),n[s]&&n[s].apply(n,l))}),this},o.fn.scrollbar.options=T;var _=function(){var s=0;return function(l){var e,n,c,t,a,h,w;for(e=0;e<r.scrolls.length;e++)t=r.scrolls[e],n=t.container,c=t.options,a=t.wrapper,h=t.scrollx,w=t.scrolly,(l||c.autoUpdate&&a&&a.is(":visible")&&(n.prop("scrollWidth")!=h.size||n.prop("scrollHeight")!=w.size||a.width()!=h.visible||a.height()!=w.visible))&&(t.init(),c.debug&&window.console&&console.log({scrollHeight:n.prop("scrollHeight")+":"+t.scrolly.size,scrollWidth:n.prop("scrollWidth")+":"+t.scrollx.size,visibleHeight:a.height()+":"+t.scrolly.visible,visibleWidth:a.width()+":"+t.scrollx.visible},!0));clearTimeout(s),s=setTimeout(_,300)}}();function C(s){if(r.webkit&&!s)return{height:0,width:0};if(!r.data.outer){var l={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};r.data.inner=o("<div>").css(o.extend({},l)),r.data.outer=o("<div>").css(o.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},l)).append(r.data.inner).appendTo("body")}return r.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(r.data.outer.offset().top-r.data.inner.offset().top||0),width:Math.ceil(r.data.outer.offset().left-r.data.inner.offset().left||0)}}function L(){var s=C(!0);return!(s.height||s.width)}function O(s){var l=s.originalEvent;return!(l.axis&&l.axis===l.HORIZONTAL_AXIS||l.wheelDeltaX)}window.angular&&function(s){s.module("jQueryScrollbar",[]).provider("jQueryScrollbar",function(){var l=T;return{setOptions:function(e){s.extend(l,e)},$get:function(){return{options:s.copy(l)}}}}).directive("jqueryScrollbar",["jQueryScrollbar","$parse",function(l,e){return{restrict:"AC",link:function(n,c,t){var a=e(t.jqueryScrollbar),h=a(n);c.scrollbar(h||l.options).on("$destroy",function(){c.scrollbar("destroy")})}}}])}(window.angular)});