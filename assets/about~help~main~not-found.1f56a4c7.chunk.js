(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{380:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"k",function(){return a}),n.d(t,"l",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return f}),n.d(t,"i",function(){return s}),n.d(t,"f",function(){return p}),n.d(t,"o",function(){return b}),n.d(t,"a",function(){return y}),n.d(t,"e",function(){return d}),n.d(t,"m",function(){return h}),n.d(t,"n",function(){return m}),n.d(t,"b",function(){return g}),n.d(t,"j",function(){return v});var o=n(6),r=n(400),i=Object(r.b)(o.b),a=Object(r.b)(o.x),c=Object(r.b)(o.y),u=Object(r.b)(o.e),l=Object(r.b)(o.t),f=Object(r.b)(o.u,"value"),s=Object(r.b)(o.v,"value"),p=Object(r.b)(o.s,"value"),b=Object(r.b)(o.B,"index"),y=Object(r.b)(o.a),d=Object(r.b)(o.r),h=Object(r.b)(o.z),m=Object(r.b)(o.A),g=Object(r.b)(o.c),v=Object(r.b)(o.d,"modalType")},400:function(e,t,n){"use strict";function o(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];var i={type:e};return n.forEach(function(e,t){i[n[t]]=o[t]}),i}}n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});var r={url:"https://freesound.org/apiv2/",token:"I4LLx1YDPjNbkBCuK0zYbQAV9njbRLJ9ZhctDhGP"}},403:function(e,t,n){"use strict";var o,r=n(20),i=n.n(r),a=(n(11),n(377)),c=n.n(a),u=n(484),l=n.n(u),f=n(472),s=n.n(f),p=n(470),b=n.n(p);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var u=new Array(a),l=0;l<a;l++)u[l]=arguments[l+3];t.children=u}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(o=[{key:"render",value:function(){return d("div",{className:b.a.root},void 0,d("span",{className:b.a.name},void 0,"© Wouter Hisschemoller, 2018"),d("a",{className:b.a.link,href:"http://www.hisschemoller.com"},void 0,"www.hisschemoller.com"))}}])&&h(n.prototype,o),r&&h(n,r),t}(),v=c()(b.a)(g),w=n(468),x=n.n(w),O=n(53);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var C=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return S(o,(n=o=S(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),Object.defineProperty(P(o),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){o.props.onClick&&o.props.onClick(e),!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)&&function(e){return 0===e.button}(e)&&!0!==e.defaultPrevented&&(e.preventDefault(),O.a.push(o.props.to))}}),n))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["to","children"]);return i.a.createElement("a",j({href:t},o,{onClick:this.handleClick}),n)}}])&&k(n.prototype,o),r&&k(n,r),t}();Object.defineProperty(C,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{onClick:null}});var E,T=C,N=n(466),A=n.n(N);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t,n,o){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:E,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function V(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var z,K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(o=[{key:"render",value:function(){return M("div",{className:A.a.root,role:"navigation"},void 0,M(T,{className:A.a.link,to:"main"},void 0,"Transfer"),M("span",{className:A.a.spacer},void 0,"·"),M(T,{className:A.a.link,to:"help"},void 0,"Help"),M("span",{className:A.a.spacer},void 0,"·"),M(T,{className:A.a.link,to:"about"},void 0,"About"))}}])&&R(n.prototype,o),r&&R(n,r),t}();function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t,n,o){z||(z="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:z,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var I=$(c()(A.a)(K),{}),B=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(o=[{key:"render",value:function(){return $("div",{className:x.a.root},void 0,$(T,{className:x.a.brand,to:"main"},void 0,$("span",{className:x.a.brandTxt},void 0,"Volca",$("img",{src:"img/logo.svg",alt:"Volca Freesound logo",className:x.a.brandLogo}),"Freesound")),I)}}])&&D(n.prototype,o),r&&D(n,r),t}(),J=c()(x.a)(B),U=n(103),Y=n(378),q=n.n(Y),G=n(380),W=n(406);var Z,H=n(464),X=n.n(H),ee=n(462),te=n.n(ee);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t,n,o){Z||(Z="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:Z,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function re(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ie(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var ae,ce=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ie(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(o=[{key:"componentDidMount",value:function(){this.props.onClose&&window.addEventListener("keydown",this.listenKeyboard.bind(this),!0)}},{key:"componentWillUnmount",value:function(){this.props.onClose&&window.removeEventListener("keydown",this.listenKeyboard.bind(this),!0)}},{key:"listenKeyboard",value:function(e){"Escape"!==e.key&&27!==e.keyCode||this.props.onClose()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.onClose;return oe("div",{},void 0,oe("div",{className:te.a.overlay}),oe("div",{className:te.a.content,onClick:function(){o()},onKeyUp:function(t){e.listenKeyboard(t)},role:"button",tabIndex:0},void 0,oe("div",{className:te.a.dialog,onClick:function(e){e.stopPropagation()},onKeyUp:function(){return null},role:"button",tabIndex:0},void 0,n)))}}])&&re(n.prototype,o),r&&re(n,r),t}(),ue=q()(c()(te.a))(ce);function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t,n,o){ae||(ae="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:ae,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function se(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function pe(e,t){return!t||"object"!==le(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var be=fe("h2",{},void 0,"Volca Freesound"),ye=fe("p",{},void 0,"Click to enter the Volca Freesound app."),de=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),pe(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this.props.dispatch;return fe(ue,{onClose:function(){e(Object(G.b)())}},void 0,fe("div",{className:X.a.dialog_content},void 0,be,ye,fe("button",{onClick:function(){e(function(e){var t=Object(W.b)(),n=t.createBuffer(1,1,22050),o=t.createBufferSource();o.buffer=n,o.connect(t.destination),void 0===o.start?o.noteOn(0):o.start(0);var r=setInterval(function(){t.currentTime>0&&(clearInterval(r),e(Object(G.c)()))},100)}),e(Object(G.b)())}},void 0,"Ok")))}}])&&se(n.prototype,o),r&&se(n,r),t}();var he=q()(c()(X.a),Object(U.b)(function(){return{}}))(de),me=n(423);function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function we(e,t){return!t||"object"!==ge(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var xe,Oe,_e,je=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),we(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this.props,n=e.modalType,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["modalType"]);if(!n)return null;var r=t.MODAL_COMPONENTS[n];return i.a.createElement(r,o)}}])&&ve(n.prototype,o),r&&ve(n,r),t}();Object.defineProperty(je,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{modalType:null}}),Object.defineProperty(je,"MODAL_COMPONENTS",{configurable:!0,enumerable:!0,writable:!0,value:(xe={},Oe=me.a,_e=he,Oe in xe?Object.defineProperty(xe,Oe,{value:_e,enumerable:!0,configurable:!0,writable:!0}):xe[Oe]=_e,xe)});var ke,Se=Object(U.b)(function(e){return{modalType:e.sounds.modalType}})(je);function Pe(e){return(Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ce(e,t,n,o){ke||(ke="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:ke,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Te(e,t){return!t||"object"!==Pe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var Ne=Ce(J,{}),Ae=Ce(v,{}),Le=Ce(Se,{}),Me=Ce(W.a,{}),Re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Te(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this.props.children;return Ce("div",{className:s.a.root},void 0,Ne,e,Ae,Le,Me)}}])&&Ee(n.prototype,o),r&&Ee(n,r),t}();t.a=c()(l.a,s.a)(Re)},406:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var o,r=n(20),i=n.n(r),a=n(103),c=n(378),u=n.n(c),l=(n(11),n(380)),f=n(423);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){o=new(window.AudioContext||window.webkitAudioContext)({sampleRate:31250}),this.detectIOSDevice()}},{key:"componentWillUnmount",value:function(){o.close()}},{key:"detectIOSDevice",value:function(){/iPhone|iPad|iPod/i.test(navigator.userAgent)?this.props.dispatch(Object(l.j)(f.a)):this.props.dispatch(Object(l.c)())}},{key:"render",value:function(){return null}}])&&p(n.prototype,r),a&&p(n,a),t}();function d(){return o}t.a=u()(Object(a.b)(function(){return{}}))(y)},423:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o="MODAL_UNLOCK_IOS_AUDIO"},461:function(e,t,n){(t=e.exports=n(376)(!1)).push([e.i,':root{--white:#fff;--black:#000;--grey0:#f7f3f0;--grey1:#a69fa6;--grey2:#aaa;--grey3:#888;--grey4:#2f3954;--blue:#5b7bba;--blue-light:#8ab0e2;--red:#af351c;--green:#2e5139;--green-bright:#2d9e51;--font-family-base:"Roboto",sans-serif;--max-content-width:850px;--text-padding:10px;--row-height:40px;--screen-mobile:600px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--show-height:height;--show-time:0.3s;--show-type:linear}.xMVTY{background-color:rgba(0,0,0,.65);height:100%;width:100%;z-index:1000}.si4FQ,.xMVTY{bottom:0;left:0;position:fixed;right:0;top:0}.si4FQ{cursor:pointer;overflow:auto;padding:4px;text-align:center;z-index:10000}.si4FQ:after{content:"";height:100%;margin-left:-.05em}._2bN3p,.si4FQ:after{display:inline-block;vertical-align:middle}._2bN3p{background-color:#f7f3f0;background-color:var(--grey0);border-radius:4px;cursor:default;max-width:auto;outline:0;padding:10px 20px;position:relative;width:auto}',""]),t.locals={overlay:"xMVTY",content:"si4FQ",dialog:"_2bN3p"}},462:function(e,t,n){var o=n(461),r=n(375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},463:function(e,t,n){(e.exports=n(376)(!1)).push([e.i,':root{--white:#fff;--black:#000;--grey0:#f7f3f0;--grey1:#a69fa6;--grey2:#aaa;--grey3:#888;--grey4:#2f3954;--blue:#5b7bba;--blue-light:#8ab0e2;--red:#af351c;--green:#2e5139;--green-bright:#2d9e51;--font-family-base:"Roboto",sans-serif;--max-content-width:850px;--text-padding:10px;--row-height:40px;--screen-mobile:600px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--show-height:height;--show-time:0.3s;--show-type:linear}',""])},464:function(e,t,n){var o=n(463),r=n(375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},465:function(e,t,n){(t=e.exports=n(376)(!1)).push([e.i,"._1cJql{-ms-flex-positive:1;flex-grow:1;text-align:left}._3Mnuh{display:inline-block;text-decoration:none}._3Mnuh,._3Mnuh:active,._3Mnuh:visited{color:var(--grey4)}._3Mnuh:hover{text-decoration:underline}.p7dj4{padding:0 4px}@media (min-width:600px){._1cJql{text-align:right}}",""]),t.locals={root:"_1cJql",link:"_3Mnuh",spacer:"p7dj4"}},466:function(e,t,n){var o=n(465),r=n(375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},467:function(e,t,n){(t=e.exports=n(376)(!1)).push([e.i,':root{--white:#fff;--black:#000;--grey0:#f7f3f0;--grey1:#a69fa6;--grey2:#aaa;--grey3:#888;--grey4:#2f3954;--blue:#5b7bba;--blue-light:#8ab0e2;--red:#af351c;--green:#2e5139;--green-bright:#2d9e51;--font-family-base:"Roboto",sans-serif;--max-content-width:850px;--text-padding:10px;--row-height:40px;--screen-mobile:600px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--show-height:height;--show-time:0.3s;--show-type:linear}._2Q6bl{-ms-flex-align:end;align-items:flex-end;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;max-width:850px;max-width:var(--max-content-width);padding:40px 0 20px}._2fV_A{margin-bottom:20px;text-decoration:none}._1fQV5{color:#af351c;color:var(--red);font-size:38px;font-weight:700}.GMdsB{margin:0 8px 4px;width:27px}@media (min-width:600px){._2Q6bl{padding-bottom:10px}._2fV_A{margin-bottom:0}._1fQV5{font-size:42px}}',""]),t.locals={root:"_2Q6bl",brand:"_2fV_A",brandTxt:"_1fQV5",brandLogo:"GMdsB"}},468:function(e,t,n){var o=n(467),r=n(375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},469:function(e,t,n){(t=e.exports=n(376)(!1)).push([e.i,':root{--white:#fff;--black:#000;--grey0:#f7f3f0;--grey1:#a69fa6;--grey2:#aaa;--grey3:#888;--grey4:#2f3954;--blue:#5b7bba;--blue-light:#8ab0e2;--red:#af351c;--green:#2e5139;--green-bright:#2d9e51;--font-family-base:"Roboto",sans-serif;--max-content-width:850px;--text-padding:10px;--row-height:40px;--screen-mobile:600px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--show-height:height;--show-time:0.3s;--show-type:linear}.EZCFk{margin:0 auto;padding:0 0 40px;max-width:850px;max-width:var(--max-content-width);text-align:center}._3gLnw{display:block;margin-bottom:6px}.uNTkL,.uNTkL:active,.uNTkL:visited{color:#2f3954;color:var(--grey4);text-decoration:none}.uNTkL:hover{text-decoration:underline}',""]),t.locals={root:"EZCFk",name:"_3gLnw",link:"uNTkL"}},470:function(e,t,n){var o=n(469),r=n(375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},471:function(e,t,n){(t=e.exports=n(376)(!1)).push([e.i,':root{--white:#fff;--black:#000;--grey0:#f7f3f0;--grey1:#a69fa6;--grey2:#aaa;--grey3:#888;--grey4:#2f3954;--blue:#5b7bba;--blue-light:#8ab0e2;--red:#af351c;--green:#2e5139;--green-bright:#2d9e51;--font-family-base:"Roboto",sans-serif;--max-content-width:850px;--text-padding:10px;--row-height:40px;--screen-mobile:600px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--show-height:height;--show-time:0.3s;--show-type:linear}*{-webkit-box-sizing:border-box;box-sizing:border-box}html{font-size:1em;font-family:Roboto,sans-serif;font-family:var(--font-family-base)}body,html{background-color:#f7f3f0;background-color:var(--grey0);color:#2f3954;color:var(--grey4)}body{margin:0}::-moz-selection{text-shadow:none}::selection{text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}a,a:visited,button{color:#2f3954;color:var(--grey4)}button{background-color:#f7f3f0;background-color:var(--grey0);border:1px solid #aaa;border:1px solid var(--grey2);cursor:pointer;font-size:14px;margin:7px;outline:none;white-space:nowrap}._1hgA8{padding:0 10px}@media (min-width:600px){._1hgA8{padding:0 20px}}',""]),t.locals={root:"_1hgA8"}},472:function(e,t,n){var o=n(471),r=n(375);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}}}]);
//# sourceMappingURL=about~help~main~not-found.1f56a4c7.chunk.js.map