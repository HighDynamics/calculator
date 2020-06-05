(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);function OutputHistory(e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"expression"},sessionStorage.expression),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"evaluation"},sessionStorage.evaluation))}function Output(e){var _=e.input;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"output"},parseFloat(_,10)))}function UtilityList(e){var _=e.utilities,t=e.input,a=e.setInput,r=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{id:"AC",key:"AC",className:"utilities",onClick:function(){return s("AC")}},"AC"),n=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{id:"C",key:"C",className:"utilities",onClick:function(){return s("C")}},"C");function s(e){switch(e){case"AC":sessionStorage.expression="",sessionStorage.evaluation="",a("0");break;case"C":a("0");break;case"+/-":"-"!==t.charAt(0)?a("-"+t):a(t.substring(1));break;case"%":a("0"==t?"0.":(.01*parseFloat(t,10)).toString())}}var o=_.map((function(e,_){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"utilities",key:e,id:"ut"+_,onClick:function(){return s(e)}},e)}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,"0"!==t?n:r,o)}function Utilities(e){var _=e.input,t=e.setInput;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UtilityList,{utilities:["+/-","%"],input:_,setInput:t})}function OperatorList(props){var operators=props.operators,input=props.input,setInput=props.setInput;function saveOrEvalExpression(operator){switch(operator){case"+":sessionStorage.expression=sessionStorage.expression+parseFloat(input,10)+" + ",setInput("0");break;case"-":sessionStorage.expression=sessionStorage.expression+parseFloat(input,10)+" - ",setInput("0");break;case"x":sessionStorage.expression=sessionStorage.expression+parseFloat(input,10)+" * ",setInput("0");break;case String.fromCharCode("0x00F7"):sessionStorage.expression=sessionStorage.expression+parseFloat(input,10)+" / ",setInput("0");break;case"=":sessionStorage.expression=sessionStorage.expression+parseFloat(input,10),sessionStorage.evaluation=eval(sessionStorage.expression),sessionStorage.expression=sessionStorage.expression+" = ",setInput("0")}}var operatorButtons=operators.map((function(e,_){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"operators",key:e,id:"op"+_,onClick:function(){return saveOrEvalExpression(e)}},e)}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,operatorButtons)}function Operators(e){var _=e.input,t=e.setInput,a=["+","-","x",String.fromCharCode("0x00F7"),"="];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OperatorList,{operators:a,input:_,setInput:t}))}function NumberList(e){var _=e.numbers,t=e.input,a=e.setInput,r=_.map((function(e,_){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"numbers",key:e,id:"num"+_,onClick:function(){return a(t+e)}},e)}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,r)}function Numbers(e){var _=e.input,t=e.setInput;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NumberList,{numbers:["0","1","2","3","4","5","6","7","8","9","."],setInput:t,input:_}))}function App(){var e=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_=Object(_home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(e,2),t=_[0],a=_[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"appWrapper"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OutputHistory,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Output,{input:t}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{setInput:a,input:t}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Operators,{setInput:a,input:t}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Utilities,{setInput:a,input:t}))}__webpack_exports__.a=App},,function(e,_,t){e.exports=t(12)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),n=t(2),s=t.n(n),o=(t(10),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.0579846a.chunk.js.map