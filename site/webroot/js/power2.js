if(typeof $WowheadPower=="undefined"){var $WowheadPower=new function(){function ce(z,p){var r=document.createElement(z);if(p){cO(r,p);}return r;}function ae(z,y){return z.appendChild(y);}function aE(z,y,x){if(window.attachEvent){z.attachEvent("on"+y,x);}else{z.addEventListener(y,x,false);}}function cO(d,s){for(var p in s){if(typeof s[p]=="object"){if(!d[p]){d[p]={};}cO(d[p],s[p]);}else{d[p]=s[p];}}}function $E(e){if(!e){e=event;}if(!e._button){e._button=e.which?e.which:e.button;e._target=e.target?e.target:e.srcElement;}return e;}function getWindowSize(){var _d=0,height=0;if(typeof window.innerWidth=="number"){_d=window.innerWidth;height=window.innerHeight;}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){_d=document.documentElement.clientWidth;height=document.documentElement.clientHeight;}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){_d=document.body.clientWidth;height=document.body.clientHeight;}}}return {w:_d,h:height};}function getScroll(){var x=0,y=0;if(typeof (window.pageYOffset)=="number"){x=window.pageXOffset;y=window.pageYOffset;}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){x=document.body.scrollLeft;y=document.body.scrollTop;}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){x=document.documentElement.scrollLeft;y=document.documentElement.scrollTop;}}}return {x:x,y:y};}function getCursorPos(e){var x,y;if(window.innerHeight){x=e.pageX;y=e.pageY;}else{var _11=getScroll();x=e.clientX+_11.x;y=e.clientY+_11.y;}return {x:x,y:y};}var _12,currentId,cursorX,cursorY,head=document.getElementsByTagName("head")[0],items=[],spells=[],tooltip,tooltipTable,tooltipTd,tooltipIcon,showIcon=1,ie=!!(window.attachEvent&&!window.opera),ie7=navigator.userAgent.indexOf("MSIE 7.0")!=-1,ie6=navigator.userAgent.indexOf("MSIE 6.0")!=-1&&!ie7,LANG={loading:"Loading...",noresponse:"No response from server :("},TYPE_ITEM=1,TYPE_SPELL=2,CURSOR_HSPACE=15,CURSOR_VSPACE=15,LOOKUPS={1:[items,"item"],2:[spells,"spell"]};function init(){ae(head,ce("link",{type:"text/css",href:"http://www.wowhead.com/widgets/power/power.css?2",rel:"stylesheet"}));if(ie){ae(head,ce("link",{type:"text/css",href:"http://www.wowhead.com/widgets/power/power_ie.css",rel:"stylesheet"}));if(ie6){ae(head,ce("link",{type:"text/css",href:"http://www.wowhead.com/widgets/power/power_ie6.css",rel:"stylesheet"}));}}aE(document,"mouseover",onMouseOver);}function updateCursorPos(e){var pos=getCursorPos(e);cursorX=pos.x;cursorY=pos.y;}function onMouseOver(e){e=$E(e);var t=e._target;if(t.nodeName!="A"){t=t.parentNode; if(t.nodeName!="A"){return;}}if(!t.href.length){return;}var m=t.href.match(/http:\/\/(www\.)?wowhead\.com\/\?(item|spell)=([0-9]+)/);if(m){if(!t.onmousemove){t.onmousemove=onMouseMove;t.onmouseout=onMouseOut;}updateCursorPos(e);if(m[2]=="item"){display(TYPE_ITEM,m[3]);}else{display(TYPE_SPELL,m[3]);}}}function onMouseMove(e){e=$E(e);updateCursorPos(e);moveTooltip();}function onMouseOut(){_12=null;hideTooltip();}function initTooltip(){if(!tooltip){var d=ce("div"),t=ce("table"),tb=ce("tbody"),tr1=ce("tr"),tr2=ce("tr"),td=ce("td"),th1=ce("th"),th2=ce("th"),th3=ce("th");d.className="wowhead-tooltip";th1.style.backgroundPosition="top right";th2.style.backgroundPosition="bottom left";th3.style.backgroundPosition="bottom right";ae(tr1,td);ae(tr1,th1);ae(tb,tr1);ae(tr2,th2);ae(tr2,th3);ae(tb,tr2);ae(t,tb);tooltipIcon=ce("p");tooltipIcon.style.display="none";ae(tooltipIcon,ce("div"));ae(d,tooltipIcon);ae(d,t);ae(document.body,d);tooltip=d;tooltipTable=t;tooltipTd=td;hideTooltip();}}function showTooltip(_1a,_1b){if(!tooltip){initTooltip();}if(showIcon&&_1b){tooltipIcon.style.backgroundImage="url(http://www.wowhead.com/images/icons/medium/"+_1b.toLowerCase()+".jpg)";tooltipIcon.style.display="";}else{tooltipIcon.style.backgroundImage="none";tooltipIcon.style.display="none";}tooltip.style.display="";tooltip.style.width="320px";tooltipTd.innerHTML=_1a;fixTooltip();moveTooltip();tooltip.style.visibility="visible";}function hideTooltip(){if(!tooltip){return;}tooltip.style.display="none";tooltip.style.visibility="hidden";}function fixTooltip(){var c=tooltipTd.childNodes;if(c.length>=2&&c[0].nodeName=="TABLE"&&c[1].nodeName=="TABLE"){var m;if(c[1].offsetWidth>300){m=Math.max(300,c[0].offsetWidth)+20;}else{m=Math.max(c[0].offsetWidth,c[1].offsetWidth)+20;}if(m>20){tooltip.style.width=m+"px";c[0].style.width=c[1].style.width="100%";}}else{tooltip.style.width=tooltipTable.offsetWidth+"px";}}function moveTooltip(){if(!tooltip){return;}if(cursorX==null){return;}var _1e=getWindowSize(),scroll=getScroll(),bcw=_1e.w,bch=_1e.h,bsl=scroll.x,bst=scroll.y,tow=tooltipTable.offsetWidth,toh=tooltipTable.offsetHeight,left=cursorX+CURSOR_HSPACE,top=cursorY-toh-CURSOR_VSPACE;if(left+CURSOR_HSPACE+tow+4>=bsl+bcw){var foo=cursorX-tow-CURSOR_HSPACE;if(foo>=0){left=foo;}else{left=bsl+bcw-tow-CURSOR_HSPACE-4;}}if(top<bst){top=cursorY+CURSOR_VSPACE;if(top+toh>bst+bch){top=bst+bch-toh;if(showIcon){if(cursorX>=left-48&&cursorX<=left&&cursorY>=top-4&&cursorY<=top+48){top-=48-(cursorY-top);}}}}tooltip.style.left=left+"px";tooltip.style.top=top+"px";}function display(_20,id){_12=_20;currentId=id;var arr=LOOKUPS[_20][0];if(typeof arr[id]=="object"){showTooltip(arr[id].tooltip,arr[id].icon);}else{if(!arr[id]){request(_20,id);}else{showTooltip(LANG.loading);}}}function request(_23,id){var arr=LOOKUPS[_23][0];arr[id]=setTimeout(function(){showLoading.apply(this,[_23,id]);},150);ajaxIshRequest("http://www.wowhead.com/?"+LOOKUPS[_23][1]+"="+id+"&power");}function ajaxIshRequest(url){ae(head,ce("script",{type:"text/javascript",src:url}));}function showLoading(_27,id){if(_12==_27&&currentId==id){showTooltip(LANG.loading);var arr=LOOKUPS[_27][0];arr[currentId]=setTimeout(function(){notFound.apply(this,[_27,id]);},3850);}}function notFound(_2a,id){var arr=LOOKUPS[_2a][0];arr[id]=undefined;if(_12==_2a&&currentId==id){showTooltip(LANG.noresponse);}}this.register=function(_2d,id,_2f){var arr=LOOKUPS[_2d][0];clearTimeout(arr[id]);arr[id]=_2f;if(_12==_2d&&id==currentId){showTooltip(arr[id].tooltip,arr[id].icon);}};this.registerItem=function(id,_32){this.register(TYPE_ITEM,id,_32);};this.registerSpell=function(id,_34){this.register(TYPE_SPELL,id,_34);};init();};}