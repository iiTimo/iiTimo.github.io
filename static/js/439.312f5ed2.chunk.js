"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[439],{439:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),i=n(2791),o=n(6035),l=n(3624),a=n(5605),u=n.n(a),c=n(184);function s(e){var t,n=e.route,a=(0,i.useState)(d()),s=(0,r.Z)(a,2),f=s[0],h=s[1];(0,i.useEffect)((function(){function e(){h(d())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var g=null;if(l.q.map((function(e){return n===e.path&&(g=e),null})),null==g)return(0,c.jsx)(o.Z,{});console.log(g.images);var v={width:853,height:480};switch(!0){case f.innerWidth>=1536:v.width=1100,v.height=618;break;case f.innerWidth>=1280:case f.innerWidth>=1024:v.width=956,v.height=542;break;case f.innerWidth>=768:v.width=768,v.height=432;break;case f.innerWidth>=640:case f.innerWidth>=258:v.width="100%",v.height=360;break;case f.innerWidth>=375:v.width="100%",v.height=210;break;default:v.width=853,v.height=480}return(0,c.jsxs)("main",{children:[(0,c.jsx)("div",{className:"flex justify-center mb-6",children:(0,c.jsx)("div",{className:"flex flex-col items-center",children:(0,c.jsx)("h1",{className:"font-bold text-4xl font-inter",children:g.title})})}),(0,c.jsx)("div",{className:"flex justify-center",children:g.images?(0,c.jsx)(u(),{bgColor:"rgba(0,0,0,0)",width:v.width,height:v.height,images:null!==(t=g.images)&&void 0!==t?t:[{url:"../images/Forbidden_Symbol.svg"}],style:{borderRadius:"0.75rem"},showBullets:!0,showNavs:!0}):(0,c.jsx)(c.Fragment,{})}),(0,c.jsx)("div",{className:"flex justify-center mt-6",children:(0,c.jsx)("div",{className:"flex flex-col items-center",style:{maxWidth:"100%"!==v.width?v.width+"px":v.width},children:(0,c.jsx)("p",{className:"font-quicksand text-center text-xl",children:g.description})})})]})}function d(){var e=window;return{innerWidth:e.innerWidth,innerHeight:e.innerHeight}}},5605:function(e,t,n){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(u){a=!0,i=u}finally{try{l||null==n.return||n.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var c=n(2791);function s(e){return e&&"object"===u(e)&&"default"in e?e:{default:e}}var d,f,h=s(c),g=function(){var e,t={},n=[],r=function(){"function"===typeof Image&&(e=new Array(3).fill(0).map((function(){return new Image})))};return r(),{load:function(i){if(e){if(i&&!t[i])if(0===e.length)n.push(i);else{var o=e.shift();o.src=i,o.onload=function(){t[i]=!0,n.length>0?o.src=n.shift():e.push(o)}}}else r()}}}();!function(e){e[e.NORMAL=1]="NORMAL",e[e.BOLD=2]="BOLD"}(d||(d={})),function(e){e.LEFT="left",e.RIGHT="right"}(f||(f={}));var v=function(e){return h.default.createElement(h.default.Fragment,null,e.visible&&h.default.createElement("button",{type:"button",style:w.getNavStyle(e.direction,e.size,e.margin),onClick:e.onClickNav(e.direction)},h.default.createElement("img",{src:e.type===d.NORMAL?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='8utpkffr2a' width='171.8%25' height='232.4%25' x='-35.9%25' y='-66.2%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3e %3c/filter%3e %3cpath id='6inzdknobb' d='M20 6.999L20.707 7.706 12.354 16.06 4 7.706 4.707 6.999 12.354 14.646z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-67 -27) translate(67 27) rotate(90 12.354 11.53)'%3e %3cuse fill='black' filter='url(%238utpkffr2a)' xlink:href='%236inzdknobb'/%3e %3cuse fill='white' xlink:href='%236inzdknobb'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='0ls8o9a99a' width='168.9%25' height='218.6%25' x='-34.5%25' y='-59.3%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/%3e %3c/filter%3e %3cpath id='rs87bry78b' d='M19 7L20.413 8.414 11.707 17.12 2.999 8.414 4.413 7 11.707 14.291z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-24 -27) translate(24 27) rotate(90 11.707 12.06)'%3e %3cuse fill='black' filter='url(%230ls8o9a99a)' xlink:href='%23rs87bry78b'/%3e %3cuse fill='white' xlink:href='%23rs87bry78b'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e",style:l({width:"100%"},e.direction===f.RIGHT&&{transform:"rotate(180deg)"}),alt:e.direction===f.LEFT?"slide to left":"slide to right"})))},m={display:"block",margin:"0",padding:"0",border:"0"},p={position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"cover"},b={position:"absolute",top:"50%",cursor:"pointer",outline:"none",background:"none"},x={position:"absolute",left:"50%",bottom:"15px"},y={display:"inline-block",cursor:"pointer",outline:"none",background:"none",boxShadow:"1px 1px 1px 0px #1a1a1a",borderRadius:"50%",border:"1px solid #FFFFFF",width:"".concat(15,"px"),height:"".concat(15,"px"),marginLeft:"".concat(3,"px"),marginRight:"".concat(3,"px")},w={ImageSlider:l(l({},m),{position:"absolute",left:0,top:0,width:"100%",height:"100%"}),ImageSlideCurrent:l(l({},p),{},{overflow:"hidden"}),ImageSlideNext:l(l({},p),{},{overflow:"hidden"}),NavLeft:l(l(l({},m),b),{},{left:"30px",marginTop:"-25px"}),NavRight:l(l(l({},m),b),{},{right:"30px",marginTop:"-25px"}),BulletNormal:l(l({},m),y),BulletActive:l(l(l({},m),y),{},{background:"#FFF"}),getRootContainer:function(e,t,n){return l(l({},m),{},{overflow:"hidden",width:e,height:t,backgroundColor:n})},getSubContainer:function(e,t){return l(l({},m),{},{position:"absolute",overflow:"hidden",width:e,height:t})},getBulletContainer:function(e){return l(l(l({},m),x),{},{marginLeft:"-".concat(21*e/2,"px")})},getImageSlide:function(e,t,n,r){return l(l({},p),{},{overflow:"hidden",transition:"".concat(t,"s"),backgroundImage:"url(".concat(e,")"),transform:r?"translate3d(".concat(100*n,"%, 0px, 0px)"):"translate(".concat(100*n,"%, 0px)")})},getNavStyle:function(e,t,n){return l(l(l(l({},m),b),e===f.LEFT?{left:"".concat(n,"px")}:{right:"".concat(n,"px")}),{},{marginTop:"-".concat(Math.floor(t/2),"px"),width:"".concat(t,"px")})}},k=function(e){var t=e.visible,n=e.length,r=e.currentIdx,i=e.onClickBullets;return h.default.createElement(h.default.Fragment,null,t&&n>0&&h.default.createElement("div",{style:w.getBulletContainer(n)},Array.from(Array(n).keys()).map((function(e){return h.default.createElement("button",{key:"bullet-".concat(e),type:"button","data-id":"bullet-".concat(e),style:e===r?w.BulletActive:w.BulletNormal,onClick:function(){return i(e)}})}))))},S=function(e){var t=e.startIndex,n=e.imageCount,i=e.autoPlay,o=e.autoPlayDelay,l=r(c.useState(t<n?t:0),2),a=l[0],u=l[1],s=c.useRef(!0),d=c.useRef(a),f=c.useRef(null),h=function(){null!==f.current&&(clearTimeout(f.current),f.current=null)},g=function(e){return e>=n?0:e<0?n-1:e},v=function(e){s.current=e>a,d.current=a,u(g(e))};return c.useEffect((function(){var e;return h(),e=a+1,i&&!f.current&&(f.current=setTimeout((function(){v(e)}),1e3*o)),h}),[a]),{slideIdx:a,updateSlideIdx:v,getNextLoopingIdx:g,isRightDirection:s.current,previousSlideIdx:d.current}},O=function(e,t){var n;return(null===(n=e[t])||void 0===n?void 0:n.url)||e[t]};e.exports=function(e){var t=e.width,n=e.height,i=e.images,o=e.showNavs,a=e.showBullets,u=e.loop,s=void 0===u||u,m=e.autoPlay,p=void 0!==m&&m,b=e.autoPlayDelay,x=void 0===b?2:b,y=e.startIndex,I=void 0===y?0:y,C=e.style,j=void 0===C?void 0:C,N=e.slideDuration,E=void 0===N?.5:N,B=e.bgColor,R=void 0===B?"#000":B,L=e.useGPURender,A=void 0===L||L,F=e.navSize,P=void 0===F?50:F,T=e.navMargin,D=void 0===T?30:T,z=e.navStyle,M=void 0===z?d.NORMAL:z,W=e.onClick,G=void 0===W?void 0:W,H=e.onClickNav,U=void 0===H?void 0:H,q=e.onClickBullets,Z=void 0===q?void 0:q,$=e.onStartSlide,_=void 0===$?void 0:$,J=e.onCompleteSlide,K=void 0===J?void 0:J,Q=c.useMemo((function(){return w.getRootContainer(t,n,R)}),[t,n,R]),V=S({imageCount:i.length,startIndex:I,autoPlay:p,autoPlayDelay:x+E}),X=V.slideIdx,Y=V.updateSlideIdx,ee=V.isRightDirection,te=V.getNextLoopingIdx,ne=V.previousSlideIdx,re=r(c.useState(w.getImageSlide(O(i,I),E,0,A)),2),ie=re[0],oe=re[1],le=r(c.useState(w.getImageSlide(O(i,I+1),E,1,A)),2),ae=le[0],ue=le[1],ce=c.useRef(!1),se=c.useCallback((function(e){null===G||void 0===G||G(X,e)}),[X]),de=c.useCallback((function(e){return function(){if(!ce.current){var t=e===f.RIGHT;null===U||void 0===U||U(t),Y(t?X+1:X-1)}}}),[U,X,Y]),fe=c.useCallback((function(e){e===X||ce.current||(null===Z||void 0===Z||Z(e),Y(e))}),[Z,X,Y]);c.useEffect((function(){if(X!==ne){var e=O(i,te(ee?X-1:X+1)),t=O(i,X),n=ee?-1:1,r=ee?1:-1;null===_||void 0===_||_(X+1,i.length),ue(w.getImageSlide(t,0,r,A)),setTimeout((function(){ce.current=!0,oe(w.getImageSlide(e,E,n,A)),ue(w.getImageSlide(t,E,0,A))}),50)}}),[_,X,ee]);var he=c.useCallback((function(){ce.current=!1,g.load(O(i,X+2)),oe(w.getImageSlide(O(i,X),0,0,A)),null===K||void 0===K||K(X+1,i.length)}),[K,X]);return h.default.createElement("div",{style:l(l({},Q),j)},h.default.createElement("div",{style:w.getSubContainer(t,n)},h.default.createElement("div",{style:w.ImageSlider,onClick:se,className:"rsis-container"},h.default.createElement("div",{style:ie,onTransitionEnd:he,className:"rsis-image"}),i.length>1&&h.default.createElement("div",{style:ae})),(s||X>0)&&h.default.createElement(v,{direction:f.LEFT,visible:o&&i.length>0,type:M,size:P,margin:D,onClickNav:de}),(s||X<i.length-1)&&h.default.createElement(v,{direction:f.RIGHT,visible:o&&i.length>0,type:M,size:P,margin:D,onClickNav:de}),h.default.createElement(k,{visible:a,length:i.length,currentIdx:X,onClickBullets:fe})))}}}]);
//# sourceMappingURL=439.312f5ed2.chunk.js.map