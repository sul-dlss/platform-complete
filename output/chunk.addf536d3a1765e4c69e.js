(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2752:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),i=n(1),s=n.n(i),a=n(4),c=n(7),u=n(2),l=n(20),f=n(2989),p=n(2973),d=n(415),m=n(0);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,r,o=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).getInitialValues=function(){var e,n,r,o=t.props.resources,i=null!==(e=null==o||null===(n=o.urlCustomization)||void 0===n||null===(r=n.records)||void 0===r?void 0:r[0])&&void 0!==e?e:{};return Object(a.cloneDeep)(i)},t.handleClose=function(){var e=t.props,n=e.location,r=e.match;e.history.push("".concat(d.h.urlCustomizerView(r.params.platformId,r.params.templateId)).concat(n.search))},t.handleSubmit=function(e){var n=t.props,r=n.history,o=n.location,i=n.mutator,s=n.match.params.platformId;return i.urlCustomization.PUT(e).then((function(e){var n=e.id;t.context.sendCallout({message:Object(m.jsx)(l.a,{id:"ui-agreements.platform.urlCustomization.update.callout"})}),r.push("".concat(d.h.urlCustomizerView(s,n)).concat(o.search))}))},t.fetchIsPending=function(){return Object.values(t.props.resources).filter((function(e){return e&&"urlCustomization"!==e.resource})).some((function(e){return e.isPending}))},t.state={hasPerms:e.stripes.hasPerm("ui-agreements.platforms.edit")},t}return t=i,(n=[{key:"render",value:function(){return this.state.hasPerms?this.fetchIsPending()?Object(m.jsx)(u.R,{dismissible:!0,onClose:this.handleClose}):Object(m.jsx)(f.a,{handlers:{onClose:this.handleClose},initialValues:this.getInitialValues(),onSubmit:this.handleSubmit}):Object(m.jsx)(p.a,{})}}])&&h(t.prototype,n),r&&h(t,r),i}(o.a.Component);g.manifest=Object.freeze({urlCustomization:{type:"okapi",path:"erm/sts/:{templateId}",shouldRefresh:function(){return!1}}}),g.propTypes={history:s.a.shape({push:s.a.func.isRequired}).isRequired,location:s.a.shape({search:s.a.string.isRequired}).isRequired,match:s.a.shape({params:s.a.shape({platformId:s.a.string,templateId:s.a.string}).isRequired}).isRequired,mutator:s.a.shape({urlCustomization:s.a.shape({PUT:s.a.func.isRequired})}).isRequired,resources:s.a.shape({platform:s.a.object,urlCustomization:s.a.object}).isRequired,stripes:s.a.shape({hasPerm:s.a.func.isRequired}).isRequired},g.contextType=c.c,t.default=Object(c.o)(g)},2973:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(3);var r=n(29),o=n(2),i=n(0),s=function(){return Object(i.jsxs)(o.M,{className:"textCentered",children:[Object(i.jsx)("h2",{children:Object(i.jsx)(r.a,{id:"stripes-smart-components.permissionError"})}),Object(i.jsx)("p",{children:Object(i.jsx)(r.a,{id:"stripes-smart-components.permissionsDoNotAllowAccess"})})]})}},2989:function(e,t,n){"use strict";var r=n(3),o=n.n(r),i=n(1),s=n.n(i),a=n(4),c=n(29),u=n(120),l=n(1391),f=n(82),p=n(7),d=n(8),m=n(2),b=n(22),h=n(2990),j=n.n(h),y=n(0);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(i,e);var t,n,r,o=C(i);function i(){var e;v(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))).shortcuts=[{name:"save",handler:function(t){return Object(l.a)(t,e.props)}},{name:"expandAllSections",handler:function(t){return Object(m.Jb)(t,e.accordionStatusRef)}},{name:"collapseAllSections",handler:function(t){return Object(m.Eb)(t,e.accordionStatusRef)}}],e}return t=i,(n=[{key:"renderPaneFooter",value:function(){var e=this.props,t=e.handlers,n=e.handleSubmit,r=e.pristine,o=e.submitting,i=e.values;return Object(y.jsx)(m.gb,{renderEnd:Object(y.jsx)(m.f,{buttonStyle:"primary mega",disabled:r||o,id:i.id?"clickable-update-url-customiser":"clickable-create-url-customiser",marginBottom0:!0,onClick:n,type:"submit",children:Object(y.jsx)(c.a,{id:"stripes-components.saveAndClose"})}),renderStart:Object(y.jsx)(m.f,{buttonStyle:"default mega",id:"clickable-cancel",marginBottom0:!0,onClick:t.onClose,children:Object(y.jsx)(c.a,{id:"stripes-components.cancel"})})})}},{key:"renderFirstMenu",value:function(){var e=this;return Object(y.jsx)(m.jb,{children:Object(y.jsx)(c.a,{id:"ui-agreements.platform.urlCustomizer.closeEdit",children:function(t){return Object(y.jsx)(m.H,{"aria-label":t,icon:"times",id:"close-url-customiser-form-button",onClick:e.props.handlers.onClose})}})})}},{key:"render",value:function(){var e=this,t=this.props,n=t.form,r=t.values,o=r.id,i=r.name,s=n.getRegisteredFields().length>0;return Object(y.jsx)(m.C,{commands:this.shortcuts,isWithinScope:m.Db,scope:document.body,children:Object(y.jsx)(m.kb,{children:Object(y.jsx)(c.a,{id:"ui-agreements.create",children:function(t){return Object(y.jsx)(m.db,{centerContent:!0,defaultWidth:"100%",firstMenu:e.renderFirstMenu(),footer:e.renderPaneFooter(),id:"pane-url-customizer-form",paneTitle:o?i:Object(y.jsx)(c.a,{id:"ui-agreements.platform.newUrlCustomization"}),children:Object(y.jsx)(p.k,{record:o?i:t,children:Object(y.jsxs)("form",{id:"form-url-customization",children:[s?Object(y.jsx)("div",{id:"form-loaded"}):null,Object(y.jsx)(m.sb,{children:Object(y.jsx)(d.a,{component:m.zb,label:Object(y.jsx)(c.a,{id:"ui-agreements.platform.urlCustomization.name"}),name:"name",required:!0,validate:Object(f.a)(f.c)})}),Object(y.jsx)(m.sb,{children:Object(y.jsx)(d.a,{component:m.yb,fullWidth:!0,label:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{id:"ui-agreements.platform.urlCustomization.customizationCode"}),Object(y.jsx)(m.I,{allowAnchorClick:!0,buttonHref:"https://wiki.folio.org/display/FOLIOtips/Proxy+server+configuration+and+URL+customizations",buttonLabel:Object(y.jsx)(c.a,{id:"ui-agreements.platform.urlCustomizationCode.learnMore"}),content:Object(y.jsx)(c.a,{id:"ui-agreements.platform.urlCustomizationCode.info"}),contentClass:j.a.infoPopoverContent,hideOnButtonClick:!0})]}),name:"rule",required:!0,validate:f.c})}),Object(y.jsx)(m.sb,{children:Object(y.jsxs)(m.M,{className:"display-flex flex-direction-column padding-bottom-gutter",children:[Object(y.jsx)(c.a,{id:"ui-agreements.platform.urlCustomizationCode.variables",tagName:"div"}),Object(y.jsx)(c.a,{id:"ui-agreements.platform.urlCustomizationCode.helpers",tagName:"div"})]})})]})})})}})})})}}])&&g(t.prototype,n),r&&g(t,r),i}(o.a.Component);P.propTypes={form:s.a.shape({getRegisteredFields:s.a.func.isRequired}).isRequired,handlers:s.a.PropTypes.shape({onClose:s.a.func.isRequired}),handleSubmit:s.a.func.isRequired,pristine:s.a.bool,submitting:s.a.bool,values:s.a.object},t.a=Object(b.a)({initialValuesEqual:function(e,t){return Object(a.isEqual)(e,t)},keepDirtyOnReinitialize:!0,subscription:{values:!0},mutators:{setFieldData:u.a},navigationCheck:!0})(P)},2990:function(e,t,n){e.exports={infoPopoverContent:"infoPopoverContent---1eOY0"}}}]);