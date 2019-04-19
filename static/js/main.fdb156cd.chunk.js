(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,_,t){"use strict";t.d(_,"a",function(){return n}),t.d(_,"b",function(){return a}),t.d(_,"c",function(){return o}),t.d(_,"e",function(){return r}),t.d(_,"d",function(){return s}),t.d(_,"f",function(){return c});var n="class ClassComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    const { benchmark, args } = this.props;\n    this.state = { result: benchmark(...args) };\n  }\n\n  render() {\n    return (\n      <>\n        <h2>ClassComponent</h2>\n        <div>\n          <p>Result: {this.state.result}</p>\n          <p>Render #: {this.props.renderNumber}</p>\n        </div>\n      </>\n    );\n  }\n}",a="function FunctionalComponent(props) {\n  const { benchmark, args } = props;\n  const result = benchmark(...args);\n\n  return (\n    <>\n      <h2>FunctionalComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}",o="function HooksComponent(props) {\n  const { benchmark, args } = props;\n  const [result] = useState(benchmark(...args));\n  return (\n    <>\n      <h2>HooksComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}",r="function HooksMemoComponent(props) {\n  const { benchmark, args } = props;\n  const calculatedResult = useMemo(() => benchmark(...args), props.args);\n  const [result] = useState(calculatedResult);\n  return (\n    <>\n      <h2>HooksMemoComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}",s="function HooksFunctionComponent(props) {\n  const { benchmark, args } = props;\n  const [result] = useState(() => benchmark(...args));\n  return (\n    <>\n      <h2>HooksFunctionComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}",c="function HooksRefComponent(props) {\n  const { benchmark, args } = props;\n  const ref = useRef(null);\n  if (ref.current === null) {\n    ref.current = benchmark(...args);\n  }\n  const [result] = useState(ref.current);\n  return (\n    <>\n      <h2>HooksRefComponent</h2>\n      <div>\n        <p>Result: {result}</p>\n        <p>Render #: {props.renderNumber}</p>\n      </div>\n    </>\n  );\n}"},,,,,,function(e,_,t){"use strict";var n=t(1),a=t.n(n);_.a=function(e){var _=e.children,t=e.handleCloseModal;return a.a.createElement("div",{className:"screen",onClick:t},a.a.createElement("div",{className:"modal",onClick:function(e){e.stopPropagation()}},_))}},,,,function(e,_,t){"use strict";_.a="function nthFibonacci(n) {\n  if (n <= 0) return 0;\n  if (n === 1) return 1;\n\n  return nthFibonacci(n - 1) + nthFibonacci(n - 2);\n}"},,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(23),react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8__),lodash_debounce__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(24),lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__),prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(14),prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10__),prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(53),prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_11__),prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(54),prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_12__),retrieve_arguments__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(25),retrieve_arguments__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(retrieve_arguments__WEBPACK_IMPORTED_MODULE_13__),_components_Modal__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(11),_components_Benchmark__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(26),_components_ClassComponent__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(27),_components_FunctionalComponent__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(28),_components_HooksComponent__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(29),_components_HooksMemoComponent__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(30),_components_HooksFunctionComponent__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(31),_components_HooksRefComponent__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(32),_components_CodeSnippet__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(33),_utils_sourceCode__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(5),_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(15),_utils_retrieveArrowArguments__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(35),_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(36),_App_css__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__(55),_App_css__WEBPACK_IMPORTED_MODULE_27___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_27__),space="\xa0",componentMap={class:_components_ClassComponent__WEBPACK_IMPORTED_MODULE_16__.a,functional:_components_FunctionalComponent__WEBPACK_IMPORTED_MODULE_17__.a,hooks:_components_HooksComponent__WEBPACK_IMPORTED_MODULE_18__.a,hooksMemo:_components_HooksMemoComponent__WEBPACK_IMPORTED_MODULE_19__.a,hooksFunction:_components_HooksFunctionComponent__WEBPACK_IMPORTED_MODULE_20__.a,hooksRef:_components_HooksRefComponent__WEBPACK_IMPORTED_MODULE_21__.a},componentShortDescriptionMap={class:"ClassComponent",functional:"FunctionalComponent",hooks:"HooksComponent",hooksMemo:"Memo",hooksFunction:"Function",hooksRef:"Ref"},componentFullDescriptionMap=Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({},componentShortDescriptionMap,{hooksMemo:"HooksMemoComponent",hooksFunction:"HooksFunctionComponent",hooksRef:"HooksRefComponent"}),componentCodeMap={class:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_23__.a,functional:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_23__.b,hooks:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_23__.c,hooksMemo:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_23__.e,hooksFunction:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_23__.d,hooksRef:_utils_sourceCode__WEBPACK_IMPORTED_MODULE_23__.f},specializedHooksComponentStrings=new Set(["hooksMemo","hooksFunction","hooksRef"]),genericHooksComponentStrings=new Set([].concat(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__.a)(specializedHooksComponentStrings),["hooks"])),clearedTimesState={startTime:null,endTime:null},runBenchmarkState={runBenchmark:!0,runValidation:!1,runtimeError:null},defaultBenchmarkFunction;eval("defaultBenchmarkFunction = ".concat(_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_24__.a));var App=function(_React$Component){function App(props){var _this;return Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.catchRuntimeError=function(e){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({runtimeError:e,runBenchmark:!1},clearedTimesState))},_this.handleCloseModal=function(e){e&&e.preventDefault(),_this.setState(clearedTimesState)},_this.handleKeyPress=function(e){27===e.keyCode&&_this.handleCloseModal()},_this.handleChangeBenchmark=function(e){_this.setState({benchmarkString:e},_this.handleUpdateBenchmark)},_this.handleUpdateBenchmark=function(){try{var benchmark;eval("benchmark = ".concat(_this.state.benchmarkString)),_this.setState({benchmark:benchmark,syntaxError:null})}catch(error){_this.setState({syntaxError:error.message,benchmark:null})}},_this.handleChangeArgument=function(e){return function(_){var t=_this.state.args.slice();t.splice(e,1,_.currentTarget.value),_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({args:t},clearedTimesState))}},_this.handleChangeTotalRenders=function(e){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({totalRenders:e.currentTarget.value},clearedTimesState))},_this.handleChangeComponent=function(e){return function(){_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({component:e},clearedTimesState))}},_this.handleChangeComponent=function(e){return function(_){specializedHooksComponentStrings.has(e)&&!_.currentTarget.checked?_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({component:"hooks"},clearedTimesState)):_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({component:e},clearedTimesState))}},_this.handleRunBenchmark=function(e){e.preventDefault(),_this.setState({runValidation:!0})},_this.stopBenchmark=function(){var e=new Date;setTimeout(function(){_this.setState({runBenchmark:!1,stopTime:e})},1e3)},_this.isComponent=function(e){return _this.state.component===e},_this.isClassComponent=function(){return _this.isComponent("class")},_this.isFunctionalComponent=function(){return _this.isComponent("functional")},_this.isHooksComponent=function(){return _this.isComponent("hooks")},_this.isHooksMemoComponent=function(){return _this.isComponent("hooksMemo")},_this.isHooksFunctionComponent=function(){return _this.isComponent("hooksFunction")},_this.isHooksRefComponent=function(){return _this.isComponent("hooksRef")},_this.isGenericHooksComponent=function(){return genericHooksComponentStrings.has(_this.state.component)},_this.renderBenchmarkFunction=function(){var e=_this.state.benchmarkString;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"benchmarkEditor",className:"benchmarkEditor__label"},"1. Enter benchmark function (or use the one provided)"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_8___default.a,{id:"benchmarkEditor",value:e,onValueChange:_this.handleChangeBenchmark,highlight:function(e){return Object(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10__.highlight)(e,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_10__.languages.js)},padding:10,className:"Editor"}))},_this.renderErrors=function(){var e=_this.state,_=e.syntaxError,t=e.runtimeError;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,Boolean(_)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p--Error"},"Syntax error: ",_),Boolean(t)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p--Error"},"Runtime error: ",t))},_this.renderParametersSelect=function(){var e=_this.state,_=e.benchmark,t=e.benchmarkString,n=e.args,a=e.syntaxError,o=e.totalRenders,r=[];try{r=retrieve_arguments__WEBPACK_IMPORTED_MODULE_13___default()(_)}catch(l){a||(r=Object(_utils_retrieveArrowArguments__WEBPACK_IMPORTED_MODULE_25__.a)(t))}var s=r.map(function(e,_){var t="benchmarkArgumentInputItem".concat(r.length>1?" benchmarkArgumentInputItem--multipleArgs":"").concat(_%3===2?" benchmarkArgumentInputItem--lastInRow":"");return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:t,key:_},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"benchmarkArgument_".concat(_)},e,space,"=",space),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"benchmarkArgument_".concat(_),name:e,type:"text",value:n[_],onChange:_this.handleChangeArgument(_),disabled:a}))}),c="totalRendersContainer".concat(2===r.length?" totalRendersContainer--twoArgs":""),i=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:c},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"totalRendersInput"},"Total number of renders:",space,space),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"totalRendersInput",name:"total number of renders",type:"number",value:o,onChange:_this.handleChangeTotalRenders,disabled:a}));return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p__parameters".concat(a?" p__parameters--disabled":"")},"2. Select parameters (or use the ones provided)"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"parametersContainer".concat(a?" parametersContainer--disabled":"")},s,r.length<3&&i),r.length>2&&i)},_this.renderComponentSelect=function(){var e=_this.state.syntaxError,_="radioContainer".concat(e?" radioContainer--disabled":""),t="memoRadioContainer".concat(!_this.isGenericHooksComponent()||e?" memoRadioContainer--disabled":"");return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{className:"p__componentSelect".concat(e?" p__componentSelect--disabled":"")},"3. Select component to benchmark"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"componentSelectContainer"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"".concat(_).concat(_this.isClassComponent()?" radioContainer--checked":"")},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"radioInput--class",type:"radio",value:"class",checked:_this.isClassComponent(),onChange:_this.handleChangeComponent("class"),disabled:e}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"radioInput--class"},componentShortDescriptionMap.class)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"".concat(_).concat(_this.isFunctionalComponent()?" radioContainer--checked":"")},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"radioInput--functional",type:"radio",value:"functional",checked:_this.isFunctionalComponent(),onChange:_this.handleChangeComponent("functional"),disabled:e}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"radioInput--functional"},componentShortDescriptionMap.functional)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"".concat(_).concat(_this.isGenericHooksComponent()?" radioContainer--checked":"")},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"radioInput--hooks",type:"radio",value:"hooks",checked:_this.isGenericHooksComponent(),onChange:_this.handleChangeComponent("hooks"),disabled:e}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"radioInput--hooks"},componentShortDescriptionMap.hooks))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"benchmarkCode"},_this.isGenericHooksComponent()&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"hooksComponentSelectContainer"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"".concat(t).concat(_this.isHooksComponent()?" memoRadioContainer--checked":""),id:"memoRadioContainer--naive"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"checkboxInput--naive",type:"radio",value:"hooks",checked:_this.isHooksComponent(),onChange:_this.handleChangeComponent("hooks"),disabled:!_this.isGenericHooksComponent()||e}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"checkboxInput--naive"},"Naive")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"".concat(t).concat(_this.isHooksMemoComponent()?" memoRadioContainer--checked":""),id:"memoRadioContainer--memo"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"checkboxInput--memo",type:"radio",value:"hooksMemo",checked:_this.isHooksMemoComponent(),onChange:_this.handleChangeComponent("hooksMemo"),disabled:!_this.isGenericHooksComponent()||e}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"checkboxInput--memo"},componentShortDescriptionMap.hooksMemo)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"".concat(t).concat(_this.isHooksFunctionComponent()?" memoRadioContainer--checked":""),id:"memoRadioContainer--function"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"checkboxInput--function",type:"radio",value:"hooksFunction",checked:_this.isHooksFunctionComponent(),onChange:_this.handleChangeComponent("hooksFunction"),disabled:!_this.isGenericHooksComponent()||e}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"checkboxInput--function"},componentShortDescriptionMap.hooksFunction)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"".concat(t).concat(_this.isHooksRefComponent()?" memoRadioContainer--checked":""),id:"memoRadioContainer--ref"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"checkboxInput--ref",type:"radio",value:"hooksRef",checked:_this.isHooksRefComponent(),onChange:_this.handleChangeComponent("hooksRef"),disabled:!_this.isGenericHooksComponent()||e}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label",{htmlFor:"checkboxInput--ref"},componentShortDescriptionMap.hooksRef))),!e&&_this.renderBenchmarkCode()))},_this.renderRunButton=function(){return _this.state.component?react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:_this.handleRunBenchmark,className:"runButton"},"4. Run benchmark!"):null},_this.renderValidation=function(){var e=_this.state,_=e.benchmark,t=e.runValidation,n=e.benchmarkString,a=e.args;if(t)if(_this.worker){var o=JSON.stringify(a);_this.worker.postMessage({benchmarkString:n,argsSerialized:o}),_this.worker.onmessage=function(e){setTimeout(function(){var _=e.data.runtimeError;_?_this.setState({runValidation:!1},function(){_this.catchRuntimeError(_)}):_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({},runBenchmarkState,{startTime:new Date}))},500)}}else try{_.apply(void 0,Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__.a)(a)),_this.setState(Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a)({},runBenchmarkState,{startTime:new Date}))}catch(r){_this.catchRuntimeError(r.message)}return t&&_this.worker?react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_14__.a,{handleCloseModal:_this.handleCloseModal},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2",null,"Analyzing"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img",{src:"spinner.svg",alt:"Analyzing..."}))):null},_this.renderBenchmark=function(){var e=_this.state,_=e.runBenchmark,t=e.component,n=e.benchmark,a=e.args,o=e.totalRenders;return _&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Benchmark__WEBPACK_IMPORTED_MODULE_15__.a,{component:componentMap[t],benchmark:n,args:a,totalRenders:o,stopBenchmark:_this.stopBenchmark,handleCloseModal:_this.handleCloseModal})},_this.renderResults=function(){var e=_this.state,_=e.runBenchmark,t=e.startTime,n=e.stopTime,a=e.totalRenders,o=e.component,r=componentFullDescriptionMap[o];return!_&&Boolean(t)&&Boolean(n)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_14__.a,{handleCloseModal:_this.handleCloseModal},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2",null,"Result"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,"It took the ",r," ",Object(_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_26__.a)(n.getTime()-t.getTime())," ","milliseconds to calculate the function ",a," times."),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"modal__buttonContainer"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:_this.handleRunBenchmark},"Run again"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:_this.handleCloseModal},"Close")))},_this.renderBenchmarkCode=function(){var e=_this.state.component;return Boolean(e)&&react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CodeSnippet__WEBPACK_IMPORTED_MODULE_22__.a,{code:componentCodeMap[e]}))},_this.state={benchmark:defaultBenchmarkFunction,component:null,runBenchmark:!1,hooksSelected:!1,args:[35],startTime:null,stopTime:null,totalRenders:10,benchmarkString:_utils_defaultBenchmark__WEBPACK_IMPORTED_MODULE_24__.a,syntaxError:null,runtimeError:null,runValidation:!1},_this.handleUpdateBenchmark=lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(_this.handleUpdateBenchmark,300),_this.worker=window.Worker?new Worker("worker.js"):null,_this}return Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component),Object(_home_matthias_Projects_stress_hooks_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress,!1)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",{className:"h1__title"},"Stress Testing React Hooks"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form",null,this.renderBenchmarkFunction(),this.renderErrors(),this.renderParametersSelect(),this.renderComponentSelect(),!this.state.syntaxError&&this.renderRunButton()),this.renderValidation(),this.renderBenchmark(),this.renderResults())}}]),App}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);__webpack_exports__.a=App},,,,function(e,_,t){"use strict";var n=t(37),a=t(6),o=t(7),r=t(9),s=t(8),c=t(13),i=t(10),l=t(1),m=t.n(l),u=t(11),E=function(e){function _(e){var t;return Object(a.a)(this,_),(t=Object(r.a)(this,Object(s.a)(_).call(this,e))).state={renderNumber:1},t.increaseRenderNumber=t.increaseRenderNumber.bind(Object(c.a)(t)),t}return Object(i.a)(_,e),Object(o.a)(_,[{key:"componentDidMount",value:function(){this.increaseRenderNumber()}},{key:"increaseRenderNumber",value:function(){var e=this;this.state.renderNumber<this.props.totalRenders?this.setState(function(e){return{renderNumber:e.renderNumber+1}},function(){setTimeout(e.increaseRenderNumber,0)}):this.props.stopBenchmark()}},{key:"render",value:function(){var e=this.props,_=e.component,t=e.handleCloseModal,a=Object(n.a)(e,["component","handleCloseModal"]);return m.a.createElement(u.a,{handleCloseModal:t},m.a.createElement(_,Object.assign({renderNumber:this.state.renderNumber},a)))}}]),_}(m.a.Component);_.a=E},function(e,_,t){"use strict";var n=t(2),a=t(6),o=t(7),r=t(9),s=t(8),c=t(10),i=t(1),l=t.n(i),m=function(e){function _(e){var t;Object(a.a)(this,_);var o=(t=Object(r.a)(this,Object(s.a)(_).call(this,e))).props,c=o.benchmark,i=o.args;return t.state={result:c.apply(void 0,Object(n.a)(i))},t}return Object(c.a)(_,e),Object(o.a)(_,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"ClassComponent"),l.a.createElement("div",null,l.a.createElement("p",null,"Result: ",this.state.result),l.a.createElement("p",null,"Render #: ",this.props.renderNumber)))}}]),_}(l.a.Component);_.a=m},function(e,_,t){"use strict";var n=t(2),a=t(1),o=t.n(a);_.a=function(e){var _=e.benchmark,t=e.args,a=_.apply(void 0,Object(n.a)(t));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"FunctionalComponent"),o.a.createElement("div",null,o.a.createElement("p",null,"Result: ",a),o.a.createElement("p",null,"Render #: ",e.renderNumber)))}},function(e,_,t){"use strict";var n=t(2),a=t(4),o=t(1),r=t.n(o);_.a=function(e){var _=e.benchmark,t=e.args,s=Object(o.useState)(_.apply(void 0,Object(n.a)(t))),c=Object(a.a)(s,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"HooksComponent"),r.a.createElement("div",null,r.a.createElement("p",null,"Result: ",c),r.a.createElement("p",null,"Render #: ",e.renderNumber)))}},function(e,_,t){"use strict";var n=t(4),a=t(2),o=t(1),r=t.n(o);_.a=function(e){var _=e.benchmark,t=e.args,s=Object(o.useMemo)(function(){return _.apply(void 0,Object(a.a)(t))},e.args),c=Object(o.useState)(s),i=Object(n.a)(c,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"HooksMemoComponent"),r.a.createElement("div",null,r.a.createElement("p",null,"Result: ",i),r.a.createElement("p",null,"Render #: ",e.renderNumber)))}},function(e,_,t){"use strict";var n=t(2),a=t(4),o=t(1),r=t.n(o);_.a=function(e){var _=e.benchmark,t=e.args,s=Object(o.useState)(function(){return _.apply(void 0,Object(n.a)(t))}),c=Object(a.a)(s,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"HooksFunctionComponent"),r.a.createElement("div",null,r.a.createElement("p",null,"Result: ",c),r.a.createElement("p",null,"Render #: ",e.renderNumber)))}},function(e,_,t){"use strict";var n=t(4),a=t(2),o=t(1),r=t.n(o);_.a=function(e){var _=e.benchmark,t=e.args,s=Object(o.useRef)(null);null===s.current&&(s.current=_.apply(void 0,Object(a.a)(t)));var c=Object(o.useState)(s.current),i=Object(n.a)(c,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"HooksRefComponent"),r.a.createElement("div",null,r.a.createElement("p",null,"Result: ",i),r.a.createElement("p",null,"Render #: ",e.renderNumber)))}},function(e,_,t){"use strict";var n=t(1),a=t.n(n),o=t(16);_.a=function(e){return a.a.createElement(o.a,Object.assign({},o.b,{code:e.code,language:"jsx"}),function(e){var _=e.className,t=e.style,n=e.tokens,o=e.getLineProps,r=e.getTokenProps;return a.a.createElement("pre",{className:_,style:t},n.map(function(e,_){return a.a.createElement("div",o({line:e,key:_}),e.map(function(e,_){return a.a.createElement("span",r({token:e,key:_}))}))}))})}},,function(e,_,t){"use strict";_.a=function(e){var _=e.indexOf("=>");if(-1===_)return[];var t=e.slice(0,_),n=t.indexOf("(");if(-1===n)return[t];var a=t.indexOf(")");return-1===a?[]:t.slice(n+1,a).split(",")}},function(e,_,t){"use strict";_.a=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},,function(e,_,t){e.exports=t(39)},function(e,_,t){"use strict";t.r(_);var n=t(1),a=t.n(n),o=t(21),r=t.n(o),s=(t(44),t(22));r.a.render(a.a.createElement(s.a,null),document.getElementById("root"))},,,,,function(e,_,t){},,,,,,,,,,,function(e,_,t){}],[[38,1,2]]]);
//# sourceMappingURL=main.fdb156cd.chunk.js.map