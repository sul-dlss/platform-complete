(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2747:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n.n(r),o=n(1),a=n.n(o),s=n(142),c=n.n(s),u=n(4),l=n(7),d=n(20),b=n(863),p=n(2988),f=n(415),j=n(0);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=["linkedResource","coverage"];function y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(o,e);var t,n,r,i=S(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).getCompositeLine=function(){var e,n,r,i,o=t.props.resources,a=null!==(e=null===(n=o.line)||void 0===n||null===(r=n.records)||void 0===r?void 0:r[0])&&void 0!==e?e:{},s=(null===(i=o.orderLines)||void 0===i?void 0:i.records)||[],c=(a.poLines||[]).map((function(e){return s.find((function(t){return t.id===e.poLineId}))})).filter((function(e){return e}));return g(g({},a),{},{poLines:c})},t.handleClose=function(){var e=t.props,n=e.history,r=e.location,i=e.match.params.agreementId;n.push("".concat(f.h.agreementView(i)).concat(r.search))},t.handleSubmit=function(e){var n,r=t.props.match.params.agreementId,i=e.linkedResource,o=e.coverage,a=y(e,m);n="packages"===(null==i?void 0:i.type)||"resources"===(null==i?void 0:i.type)?g({type:"external",authority:"packages"===(null==i?void 0:i.type)?"ekb-package":"ekb-title",reference:i.id},a):Object(u.isEmpty)(i)?g(g({type:"detached"},a),{},{resource:null,coverage:[]}):g({resource:i,coverage:Object(b.a)(i)?[]:o},a);var s=t.props,c=s.history,l=s.location;return s.mutator.entitlements.POST(g(g({},n),{},{owner:r})).then((function(e){var n=e.id;t.context.sendCallout({message:Object(j.jsx)(d.a,{id:"ui-agreements.line.create.callout"})}),c.push("".concat(f.h.agreementLineView(r,n)).concat(l.search))}))},t.state={isEholdingsEnabled:e.stripes.hasPerm("module.eholdings.enabled")},t}return t=o,(n=[{key:"render",value:function(){var e,t=this.props,n=t.resources,r=t.isSuppressFromDiscoveryEnabled;return Object(j.jsx)(p.a,{data:{basket:null!==(e=null==n?void 0:n.basket)&&void 0!==e?e:[]},handlers:g(g({},this.props.handlers),{},{isSuppressFromDiscoveryEnabled:r,onClose:this.handleClose}),isEholdingsEnabled:this.state.isEholdingsEnabled,onSubmit:this.handleSubmit})}}])&&k(t.prototype,n),r&&k(t,r),o}(i.a.Component);R.manifest=Object.freeze({entitlements:{type:"okapi",path:"erm/entitlements",fetch:!1},basket:{initialValue:[]}}),R.propTypes={handlers:a.a.object,history:a.a.shape({push:a.a.func.isRequired}).isRequired,isSuppressFromDiscoveryEnabled:a.a.func.isRequired,location:a.a.shape({search:a.a.string.isRequired}).isRequired,match:a.a.shape({params:a.a.shape({agreementId:a.a.string.isRequired}).isRequired}).isRequired,mutator:a.a.shape({entitlements:a.a.shape({POST:a.a.func.isRequired})}),resources:a.a.shape({basket:a.a.arrayOf(a.a.object),line:a.a.object,orderLines:a.a.object}).isRequired,stripes:a.a.shape({hasInterface:a.a.func.isRequired,hasPerm:a.a.func.isRequired}).isRequired},R.contextType=l.c,t.default=c()(l.o,f.j)(R)},2988:function(e,t,n){"use strict";var r=n(3),i=n(1),o=n.n(i),a=n(4),s=n(29),c=n(120),u=n(1391),l=n(2),d=n(7),b=n(22),p=n(2992),f=n(993),j=n(415),h=n(0);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k={data:o.a.shape({basket:o.a.arrayOf(o.a.object),line:o.a.shape({resource:o.a.shape({_object:o.a.object})}),settings:o.a.object}),form:o.a.shape({mutators:o.a.shape({setFieldData:o.a.func}),getRegisteredFields:o.a.func.isRequired}).isRequired,handlers:o.a.PropTypes.shape({isSuppressFromDiscoveryEnabled:o.a.func.isRequired,onClose:o.a.func.isRequired}),handleSubmit:o.a.func.isRequired,isEholdingsEnabled:o.a.bool,lineId:o.a.string,onSubmit:o.a.func,pristine:o.a.bool,submitting:o.a.bool,values:o.a.object},x=function(e){var t,n,i=e.data,o=i.basket,c=void 0===o?[]:o,b=i.line,m=void 0===b?{}:b,O=e.form,v=e.handlers,k=e.handleSubmit,x=e.isEholdingsEnabled,S=e.lineId,w=void 0===S?"":S,E=e.pristine,R=e.submitting,P=e.values,C=O.getRegisteredFields().length>0,D=Object(j.f)(m)?m:null!==(t=null===(n=m.resource)||void 0===n?void 0:n._object)&&void 0!==t?t:{},q=g(Object(r.useState)("basket"),2),I=q[0],T=q[1],F=Object(r.useRef)(),L=[{name:"save",handler:function(e){return Object(u.a)(e,{handleSubmit:k,pristine:E,submitting:R})}},{name:"expandAllSections",handler:function(e){return Object(l.Jb)(e,F)}},{name:"collapseAllSections",handler:function(e){return Object(l.Eb)(e,F)}}],_=function(){return{addButtonTooltipId:"ui-agreements.agreementLine.addCustomCoverageTootlip",agreementLineSource:I,basket:c,isSuppressFromDiscoveryEnabled:v.isSuppressFromDiscoveryEnabled,line:m,lineId:w,resource:D,setFieldData:O.mutators.setFieldData,values:P}};return Object(h.jsx)(l.C,{commands:L,isWithinScope:l.Db,scope:document.body,children:Object(h.jsx)(l.kb,{children:Object(h.jsxs)(l.db,{appIcon:Object(h.jsx)(d.b,{app:"agreements"}),centerContent:!0,defaultWidth:"100%",dismissible:!0,footer:Object(h.jsx)(l.gb,{renderEnd:Object(h.jsx)(l.f,{buttonStyle:"primary mega",disabled:E||R,id:"clickable-update-agreement-line",marginBottom0:!0,onClick:k,type:"submit",children:Object(h.jsx)(s.a,{id:"stripes-components.saveAndClose"})}),renderStart:Object(h.jsx)(l.f,{buttonStyle:"default mega",id:"clickable-cancel",marginBottom0:!0,onClick:v.onClose,children:Object(h.jsx)(s.a,{id:"stripes-components.cancel"})})}),id:"pane-agreement-line-form",onClose:v.onClose,paneTitle:w?Object(h.jsx)(s.a,{id:"ui-agreements.line.edit"}):Object(h.jsx)(s.a,{id:"ui-agreements.line.new"}),children:[C?Object(h.jsx)("div",{id:"form-loaded"}):null,(!m.id||Object(j.e)(m))&&(x?Object(h.jsx)(f.default,{children:function(e){return e.isEnabled?Object(h.jsxs)(l.g,{children:[Object(h.jsx)(l.f,{buttonStyle:"basket"===I?"primary":"default",disabled:"eholdings"===I&&!Object(a.isEmpty)(P.linkedResource),id:"clickable-nav-agreements",onClick:function(){T("basket")},children:Object(h.jsx)(s.a,{id:"ui-agreements.agreementLine.basket"})}),Object(h.jsx)(l.f,{buttonStyle:"eholdings"===I?"primary":"default",disabled:"basket"===I&&!Object(a.isEmpty)(P.linkedResource),id:"clickable-nav-eresources",onClick:function(){T("eholdings")},children:Object(h.jsx)(s.a,{id:"ui-agreements.agreementLine.eholdings"})})]}):(T("eholdings"),null)}}):Object(h.jsx)(f.default,{children:function(e){var t=e.isEnabled;return T(t?"basket":""),null}})),Object(h.jsx)(p.c,y({},_())),Object(h.jsx)(p.d,y({},_())),Object(h.jsxs)(l.c,{ref:F,children:[Object(h.jsx)(l.sb,{end:"xs",children:Object(h.jsx)(l.k,{xs:!0,children:Object(h.jsx)(l.v,{id:"clickable-expand-all"})})}),Object(h.jsxs)(l.b,{children:[Object(h.jsx)(p.e,y({},_())),"basket"===I&&Object(h.jsx)(p.b,y({},_()))]})]})]})})})};x.propTypes=k,t.a=Object(b.a)({initialValuesEqual:function(e,t){return Object(a.isEqual)(e,t)},keepDirtyOnReinitialize:!0,subscription:{values:!0},mutators:{setFieldData:c.a},navigationCheck:!0})(x)}}]);