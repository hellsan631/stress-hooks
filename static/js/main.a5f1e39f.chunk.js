(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,_,t){"use strict";t.d(_,"a",function(){return n}),t.d(_,"b",function(){return r}),t.d(_,"c",function(){return a}),t.d(_,"e",function(){return o}),t.d(_,"d",function(){return s}),t.d(_,"f",function(){return c});var n="class ClassComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    const { benchmark, values } = this.props;\n    this.state = { result: benchmark(...values) };\n  }\n\n  render() {\n    return (\n      <>\n        <h2>Class Component</h2>\n        <table>\n          <tbody>\n            <tr>\n              <td>Result</td>\n              <td>{this.state.result}</td>\n            </tr>\n            <tr>\n              <td>Render #</td>\n              <td>{this.props.renderNumber}</td>\n            </tr>\n          </tbody>\n        </table>\n      </>\n    );\n  }\n}",r="function FunctionalComponent(props) {\n  const { benchmark, values } = props;\n  const result = benchmark(...values);\n\n  return (\n    <>\n      <h2>Functional component without Hooks</h2>\n      <table>\n        <tbody>\n          <tr>\n            <td>Result</td>\n            <td>{result}</td>\n          </tr>\n          <tr>\n            <td>Render #</td>\n            <td>{props.renderNumber}</td>\n          </tr>\n        </tbody>\n      </table>\n    </>\n  );\n}",a="function HooksComponent(props) {\n  const { benchmark, values } = props;\n  const [result] = useState(benchmark(...values));\n  return (\n    <>\n      <h2>Functional component with Hooks</h2>\n      <table>\n        <tbody>\n          <tr>\n            <td>Result</td>\n            <td>{result}</td>\n          </tr>\n          <tr>\n            <td>Render #</td>\n            <td>{props.renderNumber}</td>\n          </tr>\n        </tbody>\n      </table>\n    </>\n  );\n}",o="function HooksMemoComponent(props) {\n  const { benchmark, values } = props;\n  const calculatedResult = useMemo(() => benchmark(...values), props.values);\n  const [result] = useState(calculatedResult);\n  return (\n    <>\n      <h2>Functional component with Hooks</h2>\n      <table>\n        <tbody>\n          <tr>\n            <td>Result</td>\n            <td>{result}</td>\n          </tr>\n          <tr>\n            <td>Render #</td>\n            <td>{props.renderNumber}</td>\n          </tr>\n        </tbody>\n      </table>\n    </>\n  );\n}",s="function HooksFunctionComponent(props) {\n  const { benchmark, values } = props;\n  const [result] = useState(() => benchmark(...values));\n  return (\n    <>\n      <h2>Functional component with Hooks</h2>\n      <table>\n        <tbody>\n          <tr>\n            <td>Result</td>\n            <td>{result}</td>\n          </tr>\n          <tr>\n            <td>Render #</td>\n            <td>{props.renderNumber}</td>\n          </tr>\n        </tbody>\n      </table>\n    </>\n  );\n}",c="function HooksRefComponent(props) {\n  const { benchmark, values } = props;\n  const ref = useRef(null);\n  function getCalculatedResult() {\n    let { current } = ref;\n    if (current === null) {\n      current = benchmark(...values);\n    }\n    return current;\n  }\n  const [result] = useState(getCalculatedResult());\n  return (\n    <>\n      <h2>Functional component with Hooks</h2>\n      <table>\n        <tbody>\n          <tr>\n            <td>Result</td>\n            <td>{result}</td>\n          </tr>\n          <tr>\n            <td>Render #</td>\n            <td>{props.renderNumber}</td>\n          </tr>\n        </tbody>\n      </table>\n    </>\n  );\n}"},,,,,,,,,,function(e,_,t){"use strict";_.a="function nthFibonacci(n) {\n  if (n <= 0) return 0;\n  if (n === 1) return 1;\n\n  return nthFibonacci(n - 1) + nthFibonacci(n - 2);\n}"},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(19),react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8__),prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13),prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_9__),prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(39),prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_10__),prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(40),prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_11__),retrieve_arguments__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(20),retrieve_arguments__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(retrieve_arguments__WEBPACK_IMPORTED_MODULE_12__),_components_Benchmark__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(21),_components_ClassComponent__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(22),_components_FunctionalComponent__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(23),_components_HooksComponent__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(24),_components_HooksMemoComponent__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(25),_components_HooksFunctionComponent__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(26),_components_HooksRefComponent__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(27),_components_CodeSnippet__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(28),_utils_sourceCode__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(4),_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(14),_utils_retrieveArrowArguments__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(30),_App_css__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(41),_App_css__WEBPACK_IMPORTED_MODULE_24___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_24__),componentMap={class:_components_ClassComponent__WEBPACK_IMPORTED_MODULE_14__.a,functional:_components_FunctionalComponent__WEBPACK_IMPORTED_MODULE_15__.a,hooks:_components_HooksComponent__WEBPACK_IMPORTED_MODULE_16__.a,hooksMemo:_components_HooksMemoComponent__WEBPACK_IMPORTED_MODULE_17__.a,hooksFunction:_components_HooksFunctionComponent__WEBPACK_IMPORTED_MODULE_18__.a,hooksRef:_components_HooksRefComponent__WEBPACK_IMPORTED_MODULE_19__.a},componentDescriptionMap={class:"ClassComponent",functional:"FunctionalComponent",hooks:"HooksComponent",hooksMemo:"HooksMemoComponent",hooksFunction:"HooksFunctionComponent",hooksRef:"HooksRefComponent"},componentCodeMap={class:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_21__.a,functional:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_21__.b,hooks:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_21__.c,hooksMemo:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_21__.e,hooksFunction:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_21__.d,hooksRef:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_21__.f},specializedHooksComponentStrings=new Set(["hooksMemo","hooksFunction","hooksRef"]),genericHooksComponentStrings=new Set([].concat(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__.a)(specializedHooksComponentStrings),["hooks"])),clearedTimes={startTime:null,endTime:null},defaultBenchmarkFunction;eval("defaultBenchmarkFunction = ".concat(_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_22__.a));var App=function(_React$Component){function App(props){var _this;return Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),_this=Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(App).call(this,props)),_this.catchRuntimeError=function(e){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({runtimeError:e,runBenchmark:!1},clearedTimes))},_this.handleChangeBenchmark=function(e){_this.setState({benchmarkString:e})},_this.handleUpdateBenchmark=function(){try{var benchmark;eval("benchmark = ".concat(_this.state.benchmarkString)),_this.setState({benchmark:benchmark,syntaxError:null})}catch(error){_this.setState({syntaxError:error.message,benchmark:null})}},_this.handleChangeArgument=function(e){return function(_){var t=_this.state.args.slice();t.splice(e,1,_.currentTarget.value),_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({args:t},clearedTimes))}},_this.handleChangeTotalRenders=function(e){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({totalRenders:e.currentTarget.value},clearedTimes))},_this.handleChangeComponent=function(e){return function(){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({component:e},clearedTimes))}},_this.handleChangeComponent=function(e){return function(_){specializedHooksComponentStrings.has(e)&&!_.currentTarget.checked?_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({component:"hooks"},clearedTimes)):_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({component:e},clearedTimes))}},_this.handleClickRunBenchmark=function(e){e.preventDefault();var _=_this.state,t=_.benchmark,n=_.args;try{t.apply(void 0,Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__.a)(n)),_this.setState({runBenchmark:!0,startTime:new Date,runtimeError:null})}catch(r){_this.catchRuntimeError(r.message)}},_this.stopBenchmark=function(){_this.setState({runBenchmark:!1,stopTime:new Date})},_this.isComponent=function(e){return _this.state.component===e},_this.isClassComponent=function(){return _this.isComponent("class")},_this.isFunctionalComponent=function(){return _this.isComponent("functional")},_this.isHooksComponent=function(){return _this.isComponent("hooks")},_this.isHooksMemoComponent=function(){return _this.isComponent("hooksMemo")},_this.isHooksFunctionComponent=function(){return _this.isComponent("hooksFunction")},_this.isHooksRefComponent=function(){return _this.isComponent("hooksRef")},_this.isGenericHooksComponent=function(){return genericHooksComponentStrings.has(_this.state.component)},_this.renderBenchmarkFunction=function(){var e=_this.state.benchmarkString;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",null,"Benchmark function:",react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8___default.a,{value:e,onValueChange:_this.handleChangeBenchmark,highlight:function(e){return Object(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_9__.highlight)(e,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_9__.languages.js)},padding:10,className:"Editor",onBlur:_this.handleUpdateBenchmark})))},_this.renderErrors=function(){var e=_this.state,_=e.syntaxError,t=e.runtimeError;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,Boolean(_)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p__Error"},"Syntax error: ",_),Boolean(t)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p__Error"},"Runtime error: ",t))},_this.renderArgumentInputs=function(){var e=_this.state,_=e.benchmark,t=e.benchmarkString,n=e.args,r=e.syntaxError,a=[];try{a=retrieve_arguments__WEBPACK_IMPORTED_MODULE_12___default()(_)}catch(o){r||(a=Object(_utils_retrieveArrowArguments__WEBPACK_IMPORTED_MODULE_23__.a)(t))}return a.map(function(e,_){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{key:_},e," ="," ",react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{name:e,type:"text",value:n[_],onChange:_this.handleChangeArgument(_),disabled:r}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br",null))})},_this.renderOptions=function(){var e=_this.state,_=e.totalRenders,t=e.syntaxError;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",null,"Total number of renders:"," ",react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{name:"total number of renders",type:"number",value:_,onChange:_this.handleChangeTotalRenders,disabled:t})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"radio"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"radio",value:"class",checked:_this.isClassComponent(),onChange:_this.handleChangeComponent("class"),disabled:t}),componentDescriptionMap.class)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"radio"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"radio",value:"functional",checked:_this.isFunctionalComponent(),onChange:_this.handleChangeComponent("functional"),disabled:t}),componentDescriptionMap.functional)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"radio"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"radio",value:"hooks",checked:_this.isGenericHooksComponent(),onChange:_this.handleChangeComponent("hooks"),disabled:t}),componentDescriptionMap.hooks)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"checkbox",value:"hooksMemo",checked:_this.isHooksMemoComponent(),onChange:_this.handleChangeComponent("hooksMemo"),disabled:!_this.isGenericHooksComponent()||t}),componentDescriptionMap.hooksMemo)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"checkbox",value:"hooksFunction",checked:_this.isHooksFunctionComponent(),onChange:_this.handleChangeComponent("hooksFunction"),disabled:!_this.isGenericHooksComponent()||t}),componentDescriptionMap.hooksFunction)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"checkbox",value:"hooksRef",checked:_this.isHooksRefComponent(),onChange:_this.handleChangeComponent("hooksRef"),disabled:!_this.isGenericHooksComponent()||t}),componentDescriptionMap.hooksRef)))},_this.renderGoButton=function(){var e=_this.state,_=e.syntaxError,t=e.component;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:_this.handleClickRunBenchmark,disabled:_||!t},"Go!")},_this.renderBenchmark=function(){var e=_this.state,_=e.runBenchmark,t=e.component,n=e.benchmark,r=e.args,a=e.totalRenders;return _&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Benchmark__WEBPACK_IMPORTED_MODULE_13__.a,{component:componentMap[t],benchmark:n,args:r,totalRenders:a,stopBenchmark:_this.stopBenchmark})},_this.renderResults=function(){var e=_this.state,_=e.runBenchmark,t=e.startTime,n=e.stopTime,r=e.totalRenders,a=e.component,o=componentDescriptionMap[a];return!_&&Boolean(t)&&Boolean(n)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,"Calculating the function ",r," times took the"," ",o," ",n.getTime()-t.getTime()," ","milliseconds.")},_this.renderBenchmarkCode=function(){var e=_this.state.component;return Boolean(e)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CodeSnippet__WEBPACK_IMPORTED_MODULE_20__.a,{code:componentCodeMap[e]}))},_this.state={benchmark:defaultBenchmarkFunction,component:null,runBenchmark:!1,hooksSelected:!1,args:[35],startTime:null,stopTime:null,totalRenders:10,benchmarkString:_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_22__.a,syntaxError:null,runtimeError:null},_this}return Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App,_React$Component),Object(_home_matthias_Projects_stress_hooks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",null,"Stress Testing React Hooks"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form",null,this.renderBenchmarkFunction(),this.renderErrors(),this.renderArgumentInputs(),this.renderOptions(),this.renderGoButton()),this.renderBenchmark(),this.renderResults(),this.renderBenchmarkCode())}}]),App}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);__webpack_exports__.a=App},,,function(e,_,t){"use strict";var n=t(31),r=t(6),a=t(7),o=t(9),s=t(8),c=t(11),l=t(10),u=t(0),i=t.n(u),m=function(e){function _(e){var t;return Object(r.a)(this,_),(t=Object(o.a)(this,Object(s.a)(_).call(this,e))).state={renderNumber:1},t.increaseRenderNumber=t.increaseRenderNumber.bind(Object(c.a)(t)),t}return Object(l.a)(_,e),Object(a.a)(_,[{key:"componentDidMount",value:function(){this.increaseRenderNumber()}},{key:"increaseRenderNumber",value:function(){var e=this;this.state.renderNumber<=this.props.totalRenders?this.setState(function(e){return{renderNumber:e.renderNumber+1}},function(){setTimeout(e.increaseRenderNumber,0)}):this.props.stopBenchmark()}},{key:"render",value:function(){var e=this.props,_=e.component,t=Object(n.a)(e,["component"]);return i.a.createElement(_,Object.assign({renderNumber:this.state.renderNumber},t))}}]),_}(i.a.Component);_.a=m},function(e,_,t){"use strict";var n=t(2),r=t(6),a=t(7),o=t(9),s=t(8),c=t(10),l=t(0),u=t.n(l),i=function(e){function _(e){var t;Object(r.a)(this,_);var a=(t=Object(o.a)(this,Object(s.a)(_).call(this,e))).props,c=a.benchmark,l=a.args;return t.state={result:c.apply(void 0,Object(n.a)(l))},t}return Object(c.a)(_,e),Object(a.a)(_,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,"Class Component"),u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Result"),u.a.createElement("td",null,this.state.result)),u.a.createElement("tr",null,u.a.createElement("td",null,"Render #"),u.a.createElement("td",null,this.props.renderNumber)))))}}]),_}(u.a.Component);_.a=i},function(e,_,t){"use strict";var n=t(2),r=t(0),a=t.n(r);_.a=function(e){var _=e.benchmark,t=e.args,r=_.apply(void 0,Object(n.a)(t));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Functional component without Hooks"),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Result"),a.a.createElement("td",null,r)),a.a.createElement("tr",null,a.a.createElement("td",null,"Render #"),a.a.createElement("td",null,e.renderNumber)))))}},function(e,_,t){"use strict";var n=t(2),r=t(3),a=t(0),o=t.n(a);_.a=function(e){var _=e.benchmark,t=e.args,s=Object(a.useState)(_.apply(void 0,Object(n.a)(t))),c=Object(r.a)(s,1)[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Functional component with Hooks"),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Result"),o.a.createElement("td",null,c)),o.a.createElement("tr",null,o.a.createElement("td",null,"Render #"),o.a.createElement("td",null,e.renderNumber)))))}},function(e,_,t){"use strict";var n=t(3),r=t(2),a=t(0),o=t.n(a);_.a=function(e){var _=e.benchmark,t=e.args,s=Object(a.useMemo)(function(){return _.apply(void 0,Object(r.a)(t))},e.args),c=Object(a.useState)(s),l=Object(n.a)(c,1)[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Functional component with Hooks"),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Result"),o.a.createElement("td",null,l)),o.a.createElement("tr",null,o.a.createElement("td",null,"Render #"),o.a.createElement("td",null,e.renderNumber)))))}},function(e,_,t){"use strict";var n=t(2),r=t(3),a=t(0),o=t.n(a);_.a=function(e){var _=e.benchmark,t=e.args,s=Object(a.useState)(function(){return _.apply(void 0,Object(n.a)(t))}),c=Object(r.a)(s,1)[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Functional component with Hooks"),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Result"),o.a.createElement("td",null,c)),o.a.createElement("tr",null,o.a.createElement("td",null,"Render #"),o.a.createElement("td",null,e.renderNumber)))))}},function(e,_,t){"use strict";var n=t(3),r=t(2),a=t(0),o=t.n(a);_.a=function(e){var _=e.benchmark,t=e.args,s=Object(a.useRef)(null);null===s.current&&(s.current=_.apply(void 0,Object(r.a)(t)));var c=Object(a.useState)(s.current),l=Object(n.a)(c,1)[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Functional component with Hooks"),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Result"),o.a.createElement("td",null,l)),o.a.createElement("tr",null,o.a.createElement("td",null,"Render #"),o.a.createElement("td",null,e.renderNumber)))))}},function(e,_,t){"use strict";var n=t(0),r=t.n(n),a=t(15);_.a=function(e){return r.a.createElement(a.a,Object.assign({},a.b,{code:e.code,language:"jsx"}),function(e){var _=e.className,t=e.style,n=e.tokens,a=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:_,style:t},n.map(function(e,_){return r.a.createElement("div",a({line:e,key:_}),e.map(function(e,_){return r.a.createElement("span",o({token:e,key:_}))}))}))})}},,function(e,_,t){"use strict";_.a=function(e){var _=e.indexOf("=>");if(-1===_)return[];var t=e.slice(0,_),n=t.indexOf("(");if(-1===n)return[t];var r=t.indexOf(")");return-1===r?[]:t.slice(n+1,r).split(",")}},,function(e,_,t){e.exports=t(33)},function(e,_,t){"use strict";t.r(_);var n=t(0),r=t.n(n),a=t(17),o=t.n(a),s=(t(38),t(18));o.a.render(r.a.createElement(s.a,null),document.getElementById("root"))},,,,,function(e,_,t){},,,function(e,_,t){}],[[32,1,2]]]);
//# sourceMappingURL=main.a5f1e39f.chunk.js.map