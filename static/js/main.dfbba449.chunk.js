(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),ExpressionContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null),EvaluationContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);function OutputHistory(_){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"expression"},_.expression),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"evaluation"},_.evaluation))}function Output(_){var e=_.input;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"output"},parseFloat(e,10)))}function UtilityList(_){var e=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ExpressionContext),t=Object(_home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(e,2),a=(t[0],t[1]),r=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(EvaluationContext),n=Object(_home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(r,2),s=(n[0],n[1]),o=_.utilities,u=_.input,E=_.setInput,c=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{id:"AC",key:"AC",className:"utilities",onClick:function(){return i("AC")}},"AC"),l=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{id:"C",key:"C",className:"utilities",onClick:function(){return i("C")}},"C");function i(_){switch(_){case"AC":a(""),s(""),E(0);break;case"C":E(0);break;case"+/-":"-"!==u.charAt(0)?E("-"+u):E(u.substring(1));break;case"%":E(0===u?0:(.01*parseFloat(u,10)).toString())}}var p=o.map((function(_,e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"utilities",key:_,id:"ut"+e,onClick:function(){return i(_)}},_)}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,0===u?c:l,p)}function Utilities(_){var e=_.input,t=_.setInput;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UtilityList,{utilities:["+/-","%"],input:e,setInput:t})}function OperatorList(props){var _useContext5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ExpressionContext),_useContext6=Object(_home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useContext5,2),expression=_useContext6[0],setExpression=_useContext6[1],_useContext7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(EvaluationContext),_useContext8=Object(_home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useContext7,2),evaluation=_useContext8[0],setEvaluation=_useContext8[1],operators=props.operators,input=props.input,setInput=props.setInput;function saveOrEvalExpression(operator){switch(operator){case"+":setExpression(expression+parseFloat(input,10)+" + "),setInput(0);break;case"-":setExpression(expression+parseFloat(input,10)+" - "),setInput(0);break;case"x":setExpression(expression+parseFloat(input,10)+" * "),setInput(0);break;case String.fromCharCode("0x00F7"):setExpression(expression+parseFloat(input,10)+" / "),setInput(0);break;case"=":setExpression(expression+parseFloat(input,10)+" ="),setEvaluation(eval(expression+parseFloat(input,10))),setInput(0)}}var operatorButtons=operators.map((function(_,e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"operators",key:_,id:"op"+e,onClick:function(){return saveOrEvalExpression(_)}},_)}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,operatorButtons)}function Operators(_){var e=_.input,t=_.setInput,a=["+","-","x",String.fromCharCode("0x00F7"),"="];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OperatorList,{operators:a,input:e,setInput:t}))}function NumberList(_){var e=_.numbers,t=_.input,a=_.setInput,r=e.map((function(_,e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"numbers",key:_,id:"num"+e,onClick:function(){return a("".concat(t).concat(_))}},_)}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,r)}function Numbers(_){var e=_.input,t=_.setInput;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NumberList,{numbers:[0,1,2,3,4,5,6,7,8,9,"."],setInput:t,input:e}))}function App(){var _=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),e=Object(_home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_,2),t=e[0],a=e[1],r=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),n=Object(_home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(r,2),s=n[0],o=n[1],u=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),E=Object(_home_highdynamics_repos_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(u,2),c=E[0],l=E[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"appWrapper"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OutputHistory,{expression:s,evaluation:c}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Output,{input:t}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Numbers,{setInput:a,input:t}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExpressionContext.Provider,{value:[s,o]},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EvaluationContext.Provider,{value:[c,l]},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Operators,{setInput:a,input:t}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Utilities,{setInput:a,input:t})))))}__webpack_exports__.a=App},function(_,e,t){_.exports=t(11)},,,,,function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),n=t(3),s=t.n(n),o=t(4);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.addEventListener("resize",(function(){document.querySelector(":root").style.setProperty("--vh",window.innerHeight/100+"px")})),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.dfbba449.chunk.js.map