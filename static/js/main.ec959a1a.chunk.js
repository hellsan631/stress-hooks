(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";var _=n(0),a=n.n(_);t.a=function(e){var t=e.children,n=e.handleCloseModal;return a.a.createElement("div",{className:"screen",onClick:n},a.a.createElement("div",{className:"modal",onClick:function(e){e.stopPropagation()}},t))}},13:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});var _=n(3),a=n(4),r=new Set(["memoHooks","functionHooks","refHooks"]),o=new Set([].concat(Object(_.a)(r),["naiveHooks"])),s=new Set(Object.keys(a.c))},18:function(e,t,n){"use strict";t.a="function nthFibonacci(n) {\n  n = Number(n)\n  if (n <= 0) return 0;\n  if (n === 1) return 1;\n\n  return nthFibonacci(n - 1) + nthFibonacci(n - 2);\n}"},25:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(26),react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8__),lodash_debounce__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(27),lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__),prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(16),prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10__),prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(52),prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_11__),prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(53),prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_12__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(28),_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(29),_components_Modal__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(12),_components_Benchmark__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(30),_components_ComponentSelect__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(34),_components_ParametersSelect__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(35),_utils_componentMaps__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(4),_utils_stringSets__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(13),_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(18),_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(33),_App_css__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(59),_App_css__WEBPACK_IMPORTED_MODULE_23___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_23__),clearedTimesState={startTime:null,endTime:null},defaultBenchmarkFunction;eval("defaultBenchmarkFunction = ".concat(_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_21__.a));var App=function(_React$Component){function App(props){var _this;return Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,App),_this=Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.a)(this,Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.a)(App).call(this,props)),_this.catchRuntimeError=function(e){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({runtimeError:e,runBenchmark:!1},clearedTimesState))},_this.handleCloseModal=function(e){e&&e.preventDefault(),_this.setState(clearedTimesState)},_this.handleKeyPress=function(e){27===e.keyCode&&_this.handleCloseModal()},_this.handleChangeBenchmark=function(e){_this.setState({benchmarkString:e},_this.handleUpdateBenchmark)},_this.handleUpdateBenchmark=function(){try{var benchmark;eval("benchmark = ".concat(_this.state.benchmarkString)),_this.setState({benchmark:benchmark,syntaxError:null})}catch(error){_this.setState({syntaxError:error.message,benchmark:null})}},_this.handleChangeArgument=function(e){return function(t){var n=_this.state.args.slice();n.splice(e,1,t.currentTarget.value),_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({args:n},clearedTimesState))}},_this.handleChangeTotalRenders=function(e){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({totalRenders:e.currentTarget.value},clearedTimesState))},_this.handleChangeComponent=function(e){return function(){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({component:e},clearedTimesState))}},_this.handleChangeComponent=function(e){return function(t){_utils_stringSets__WEBPACK_IMPORTED_MODULE_20__.c.has(e)&&!t.currentTarget.checked?_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({component:"naiveHooks"},clearedTimesState)):_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({component:e},clearedTimesState))}},_this.handleRunBenchmark=function(e){e.preventDefault(),_this.setState({runValidation:!0})},_this.runBenchmarkAfterValidation=function(){_this.setState({runBenchmark:!0,runValidation:!1,runtimeError:null,startTime:new Date})},_this.stopBenchmark=function(){var e=new Date;setTimeout(function(){_this.setState({runBenchmark:!1,stopTime:e})},1e3)},_this.renderBenchmarkFunction=function(){var e=_this.state.benchmarkString;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"benchmarkEditor",className:"benchmarkEditor__label"},"1. Enter benchmark function (or use the one provided)"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8___default.a,{id:"benchmarkEditor",value:e,onValueChange:_this.handleChangeBenchmark,highlight:function(e){return Object(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10__.highlight)(e,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10__.languages.js)},padding:10,className:"Editor"}))},_this.renderSyntaxError=function(){var e=_this.state.syntaxError;return Boolean(e)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p--Error"},"Syntax error: ",e)},_this.renderRuntimeError=function(){var e=_this.state.runtimeError;return Boolean(e)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p--Error"},"Runtime error: ",e)},_this.renderTotalRendersError=function(){var e=_this.state.totalRenders;return!e||e<1?react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p--Error"},"Total number of renders must be at least 0."):null},_this.renderRunButton=function(){var e=_this.state,t=e.component,n=e.totalRenders,_=e.syntaxError;if(!t)return null;var a="runButton".concat(!n||n<1||_?" runButton--disabled":"");return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:_this.handleRunBenchmark,className:a},"4. Run benchmark!")},_this.renderValidation=function(){var e=_this.state,t=e.benchmark,n=e.runValidation,_=e.benchmarkString,a=e.args;if(n)if(_this.worker){var r=JSON.stringify(a);_this.worker.postMessage({benchmarkString:_,argsSerialized:r}),_this.worker.onmessage=function(e){setTimeout(function(){var t=e.data.runtimeError;t?_this.setState({runValidation:!1},function(){_this.catchRuntimeError(t)}):_this.runBenchmarkAfterValidation()},500)}}else try{t.apply(void 0,Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(a)),_this.runBenchmarkAfterValitation()}catch(o){_this.catchRuntimeError(o.message)}return n&&_this.worker?react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_15__.a,{handleCloseModal:_this.handleCloseModal},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2",null,"Analyzing"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img",{src:"spinner.svg",alt:"Analyzing..."}))):null},_this.renderBenchmark=function(){var e=_this.state,t=e.runBenchmark,n=e.component,_=e.benchmark,a=e.args,r=e.totalRenders;return t&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Benchmark__WEBPACK_IMPORTED_MODULE_16__.a,{component:_utils_componentMaps__WEBPACK_IMPORTED_MODULE_19__.c[n],benchmark:_,args:a,totalRenders:r,stopBenchmark:_this.stopBenchmark,handleCloseModal:_this.handleCloseModal})},_this.renderResults=function(){var e=_this.state,t=e.runBenchmark,n=e.startTime,_=e.stopTime,a=e.totalRenders,r=e.component,o=e.runValidation,s=_utils_componentMaps__WEBPACK_IMPORTED_MODULE_19__.b[r];return!o&&!t&&Boolean(n)&&Boolean(_)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_15__.a,{handleCloseModal:_this.handleCloseModal},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2",null,"Result"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,"It took the ",s," ",Object(_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_22__.a)(_.getTime()-n.getTime())," ","milliseconds to render ",a," times."),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"modal__buttonContainer"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:_this.runBenchmarkAfterValidation},"Run again"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:_this.handleCloseModal},"Close")))},_this.state={benchmark:defaultBenchmarkFunction,component:null,runBenchmark:!1,hooksSelected:!1,args:[35],startTime:null,stopTime:null,totalRenders:10,benchmarkString:_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_21__.a,syntaxError:null,runtimeError:null,runValidation:!1},_this.handleUpdateBenchmark=lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(_this.handleUpdateBenchmark,300),_this.worker=window.Worker?new Worker("worker.js"):null,_this}return Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.a)(App,_React$Component),Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(App,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress,!1)}},{key:"render",value:function(){var e=this.state,t=e.args,n=e.benchmark,_=e.benchmarkString,a=e.component,r=e.syntaxError,o=e.totalRenders;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",{className:"h1__title"},"Stress Testing React Hooks"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"div__subtitle"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span",null,"by ",react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a",{href:"https://www.matthiasjenny.com/#home"},"Matthias Jenny")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a",{href:"https://github.com/m1010j/stress-hooks"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__.a,{icon:_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.a}))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form",null,this.renderBenchmarkFunction(),this.renderSyntaxError(),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ParametersSelect__WEBPACK_IMPORTED_MODULE_18__.a,{args:t,benchmark:n,benchmarkString:_,handleChangeArgument:this.handleChangeArgument,handleChangeTotalRenders:this.handleChangeTotalRenders,syntaxError:r,totalRenders:o}),this.renderRuntimeError(),this.renderTotalRendersError(),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ComponentSelect__WEBPACK_IMPORTED_MODULE_17__.a,{syntaxError:r,component:a,handleChangeComponent:this.handleChangeComponent}),this.renderRunButton()),this.renderValidation(),this.renderBenchmark(),this.renderResults())}}]),App}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);__webpack_exports__.a=App},30:function(e,t,n){"use strict";var _=n(36),a=n(7),r=n(8),o=n(10),s=n(9),c=n(14),l=n(11),i=n(0),m=n.n(i),u=n(12),d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={renderNumber:1},n.increaseRenderNumber=n.increaseRenderNumber.bind(Object(c.a)(n)),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.increaseRenderNumber()}},{key:"increaseRenderNumber",value:function(){var e=this;this.state.renderNumber<this.props.totalRenders?this.setState(function(e){return{renderNumber:e.renderNumber+1}},function(){setTimeout(e.increaseRenderNumber,0)}):this.props.stopBenchmark()}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.handleCloseModal,a=Object(_.a)(e,["component","handleCloseModal"]);return m.a.createElement(u.a,{handleCloseModal:n},m.a.createElement(t,Object.assign({renderNumber:this.state.renderNumber},a)))}}]),t}(m.a.Component);t.a=d},33:function(e,t,n){"use strict";t.a=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},34:function(e,t,n){"use strict";var _=n(0),a=n.n(_),r=n(19);var o=function(e){return a.a.createElement(r.a,Object.assign({},r.b,{code:e.code,language:"jsx"}),function(e){var t=e.className,n=e.style,_=e.tokens,r=e.getLineProps,o=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},_.map(function(e,t){return a.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return a.a.createElement("span",o({token:e,key:t}))}))}))})},s=n(4),c=n(13);function l(e,t){return e===t}t.a=function(e){var t=e.syntaxError,n=e.component,_=e.handleChangeComponent,r=l(n,"class"),i=function(e){return l(e,"functional")}(n),m=function(e){return c.b.has(e)}(n),u=function(e){return l(e,"naiveHooks")}(n),d=function(e){return l(e,"memoHooks")}(n),h=function(e){return l(e,"functionHooks")}(n),E=function(e){return l(e,"refHooks")}(n),p=function(e){return c.a.has(e)}(n),b="radioContainer".concat(t?" radioContainer--disabled":""),k="memoRadioContainer".concat(!m||t?" memoRadioContainer--disabled":""),O="componentSelectContainer".concat(p?" componentSelectContainer--selected":"");return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"p__componentSelect".concat(t?" p__componentSelect--disabled":"")},"3. Select component to benchmark"),a.a.createElement("div",{className:O},a.a.createElement("div",{className:"".concat(b).concat(r?" radioContainer--checked":"")},a.a.createElement("input",{id:"radioInput--class",type:"radio",value:"class",checked:r,onChange:_("class"),disabled:t}),a.a.createElement("label",{htmlFor:"radioInput--class"},s.d.class)),a.a.createElement("div",{className:"".concat(b).concat(i?" radioContainer--checked":"")},a.a.createElement("input",{id:"radioInput--functional",type:"radio",value:"functional",checked:i,onChange:_("functional"),disabled:t}),a.a.createElement("label",{htmlFor:"radioInput--functional"},s.d.functional)),a.a.createElement("div",{className:"".concat(b).concat(m?" radioContainer--checked":"")},a.a.createElement("input",{id:"radioInput--hooks",type:"radio",value:"naiveHooks",checked:m,onChange:_("naiveHooks"),disabled:t}),a.a.createElement("label",{htmlFor:"radioInput--hooks"},s.d.naiveHooks))),a.a.createElement("div",{className:"benchmarkCode"},m&&a.a.createElement("div",{className:"hooksComponentSelectContainer"},a.a.createElement("div",{className:"".concat(k).concat(u?" memoRadioContainer--checked":""),id:"memoRadioContainer--naive"},a.a.createElement("input",{id:"checkboxInput--naive",type:"radio",value:"naiveHooks",checked:u,onChange:_("naiveHooks"),disabled:!m||t}),a.a.createElement("label",{htmlFor:"checkboxInput--naive"},"Naive")),a.a.createElement("div",{className:"".concat(k).concat(d?" memoRadioContainer--checked":""),id:"memoRadioContainer--memo"},a.a.createElement("input",{id:"checkboxInput--memo",type:"radio",value:"memoHooks",checked:d,onChange:_("memoHooks"),disabled:!m||t}),a.a.createElement("label",{htmlFor:"checkboxInput--memo"},s.d.memoHooks)),a.a.createElement("div",{className:"".concat(k).concat(h?" memoRadioContainer--checked":""),id:"memoRadioContainer--function"},a.a.createElement("input",{id:"checkboxInput--function",type:"radio",value:"functionHooks",checked:h,onChange:_("functionHooks"),disabled:!m||t}),a.a.createElement("label",{htmlFor:"checkboxInput--function"},s.d.functionHooks)),a.a.createElement("div",{className:"".concat(k).concat(E?" memoRadioContainer--checked":""),id:"memoRadioContainer--ref"},a.a.createElement("input",{id:"checkboxInput--ref",type:"radio",value:"refHooks",checked:E,onChange:_("refHooks"),disabled:!m||t}),a.a.createElement("label",{htmlFor:"checkboxInput--ref"},s.d.refHooks))),!t&&Boolean(n)&&a.a.createElement(o,{code:s.a[n]})))}},35:function(e,t,n){"use strict";var _=n(0),a=n.n(_),r=n(32),o=n.n(r);var s=function(e){var t=e.indexOf("=>");if(-1===t)return[];var n=e.slice(0,t),_=n.indexOf("(");if(-1===_)return[n];var a=n.indexOf(")");return-1===a?[]:n.slice(_+1,a).split(",")},c="\xa0";t.a=function(e){var t=e.args,n=e.benchmark,_=e.benchmarkString,r=e.handleChangeArgument,l=e.handleChangeTotalRenders,i=e.syntaxError,m=e.totalRenders,u=[];try{u=o()(n)}catch(p){i||(u=s(_))}var d=u.map(function(e,n){var _="benchmarkArgumentInputItem".concat(u.length>1?" benchmarkArgumentInputItem--multipleArgs":"").concat(n%3===2?" benchmarkArgumentInputItem--lastInRow":"");return a.a.createElement("div",{className:_,key:n},a.a.createElement("label",{htmlFor:"benchmarkArgument_".concat(n)},e,c,"=",c),a.a.createElement("input",{id:"benchmarkArgument_".concat(n),name:e,type:"text",value:t[n],onChange:r(n),disabled:i}))}),h="totalRendersContainer".concat(2===u.length?" totalRendersContainer--twoArgs":""),E=a.a.createElement("div",{className:h},a.a.createElement("label",{htmlFor:"totalRendersInput"},"Total number of renders:",c,c),a.a.createElement("input",{id:"totalRendersInput",name:"total number of renders",type:"number",value:m,onChange:l,disabled:i}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"p__parameters".concat(i?" p__parameters--disabled":"")},"2. Select parameters (or use the ones provided)"),a.a.createElement("div",{className:"parametersContainer".concat(i?" parametersContainer--disabled":"")},d,u.length<3&&E),u.length>2&&E)}},37:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var _=n(0),a=n.n(_),r=n(24),o=n.n(r),s=(n(43),n(25));o.a.render(a.a.createElement(s.a,null),document.getElementById("root"))},4:function(e,t,n){"use strict";var _=n(5),a=n(3),r=n(7),o=n(8),s=n(10),c=n(9),l=n(11),i=n(0),m=n.n(i),u=function(e){function t(e){var n;Object(r.a)(this,t);var _=(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).props,o=_.benchmark,l=_.args;return n.state={result:o.apply(void 0,Object(a.a)(l))},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",null,"ClassComponent"),m.a.createElement("div",null,m.a.createElement("p",null,"Result: ",this.state.result),m.a.createElement("p",null,"Render #: ",this.props.renderNumber)))}}]),t}(m.a.Component);var d=function(e){var t=e.benchmark,n=e.args,_=t.apply(void 0,Object(a.a)(n));return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",null,"FunctionalComponent"),m.a.createElement("div",null,m.a.createElement("p",null,"Result: ",_),m.a.createElement("p",null,"Render #: ",e.renderNumber)))},h=n(15);var E=function(e){var t=e.benchmark,n=e.args,_=Object(i.useState)(t.apply(void 0,Object(a.a)(n))),r=Object(h.a)(_,1)[0];return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",null,"HooksComponent"),m.a.createElement("div",null,m.a.createElement("p",null,"Result: ",r),m.a.createElement("p",null,"Render #: ",e.renderNumber)))};var p=function(e){var t=e.benchmark,n=e.args,_=Object(i.useMemo)(function(){return t.apply(void 0,Object(a.a)(n))},n);return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",null,"MemoHooksComponent"),m.a.createElement("div",null,m.a.createElement("p",null,"Result: ",_),m.a.createElement("p",null,"Render #: ",e.renderNumber)))};var b=function(e){var t=e.benchmark,n=e.args,_=Object(i.useState)(function(){return t.apply(void 0,Object(a.a)(n))}),r=Object(h.a)(_,1)[0];return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",null,"FunctionHooksComponent"),m.a.createElement("div",null,m.a.createElement("p",null,"Result: ",r),m.a.createElement("p",null,"Render #: ",e.renderNumber)))};var k=function(e){var t=e.benchmark,n=e.args,_=Object(i.useRef)(null);return null===_.current&&(_.current=t.apply(void 0,Object(a.a)(n))),m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",null,"RefHooksComponent"),m.a.createElement("div",null,m.a.createElement("p",null,"Result: ",_.current),m.a.createElement("p",null,"Render #: ",e.renderNumber)))};n.d(t,"c",function(){return O}),n.d(t,"d",function(){return M}),n.d(t,"b",function(){return P}),n.d(t,"a",function(){return C});var O={class:u,functional:d,naiveHooks:E,memoHooks:p,functionHooks:b,refHooks:k},M={class:"ClassComponent",functional:"FunctionalComponent",naiveHooks:"HooksComponent",memoHooks:"Memo",functionHooks:"Function",refHooks:"Ref"},P=Object(_.a)({},M,{naiveHooks:"NaiveHooksComponent",memoHooks:"MemoHooksComponent",functionHooks:"FunctionHooksComponent",refHooks:"RefHooksComponent"}),C={class:"class ClassComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    const { benchmark, args } = this.props;\n    this.state = { result: benchmark(...args) };\n  }\n\n  render() {\n    return (\n      <>\n        <h2>ClassComponent</h2>\n        <div>\n          <p>Result: {this.state.result}</p>\n          <p>Render #: {this.props.renderNumber}</p>\n        </div>\n      </>\n    );\n  }\n}",functional:"function FunctionalComponent(props) {\n  const { benchmark, args } = props;\n  const result = benchmark(...args);\n\n  return (\n    <>\n      <h2>FunctionalComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}",naiveHooks:"function NaiveHooksComponent(props) {\n  const { benchmark, args } = props;\n  const [result] = useState(benchmark(...args));\n  return (\n    <>\n      <h2>HooksComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}",memoHooks:"function MemoHooksComponent(props) {\n  const { benchmark, args } = props;\n  const result = useMemo(() => benchmark(...args), args);\n  return (\n    <>\n      <h2>MemoHooksComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}",functionHooks:"function FunctionHooksComponent(props) {\n  const { benchmark, args } = props;\n  const [result] = useState(() => benchmark(...args));\n  return (\n    <>\n      <h2>FunctionHooksComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}",refHooks:"function RefHooksComponent(props) {\n  const { benchmark, args } = props;\n  const ref = useRef(null);\n  if (ref.current === null) {\n    ref.current = benchmark(...args);\n  }\n  return (\n    <>\n      <h2>RefHooksComponent</h2>\n      <div>\n        <p>Result: {ref.current}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}"}},43:function(e,t,n){},59:function(e,t,n){}},[[37,1,2]]]);
//# sourceMappingURL=main.ec959a1a.chunk.js.map