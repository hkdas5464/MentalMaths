(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=a(1),u=a(2),l=a(4),i=a(3),m=a(7),p=a.n(m),d=(a(13),function(e){return r.a.createElement("p",{className:"text"},"Your Score:",e.numCorrect,"/",e.numQuestions)}),h=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).makeNewQuestion=function(){var e=Math.floor(100*Math.random()),t=Math.floor(100*Math.random()),a=Math.floor(100*Math.random());return[e,t,a,Math.floor(3*Math.random())+(e+t+a)]},n.updateState=function(e){n.setState(function(t){return{value1:e[0],value2:e[1],value3:e[2],proposedAnswer:e[3]}})},n.handleAnswer=function(e){var t=n.makeNewQuestion();n.updateState(t);var a=n.evaluateAnswer(e.target.name);n.props.handleAnswer(a)};var r=n.makeNewQuestion();return n.state={value1:r[0],value2:r[1],value3:r[2],proposedAnswer:r[3]},n}return Object(u.a)(a,[{key:"evaluateAnswer",value:function(e){var t=this.state,a=t.value1,n=t.value2,r=t.value3,o=t.proposedAnswer,c=a+n+r;return c===o&&"true"===e||c!==o&&"false"===e}},{key:"render",value:function(){var e=this.state,t=e.value1,a=e.value2,n=e.value3,o=e.proposedAnswer;return r.a.createElement("div",null,r.a.createElement("div",{className:"equation"},r.a.createElement("p",{className:"text"},"".concat(t," + ").concat(a," + ").concat(n," = ").concat(o))),r.a.createElement("button",{onClick:this.handleAnswer,name:"true"},"True"),r.a.createElement("button",{name:"false",onClick:this.handleAnswer},"False"))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={correctAnswer:0,numQuestions:0},e.handleAnswer=function(t){t&&e.setState(function(e){return{correctAnswer:e.correctAnswer+1}}),e.setState(function(e){return{numQuestions:e.numQuestions+1}})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"ReactND - Coding Practice")),r.a.createElement("div",{className:"game"},r.a.createElement("h2",null,"Mental Math"),r.a.createElement(h,{handleAnswer:this.handleAnswer}),r.a.createElement(d,{numCorrect:this.state.correctAnswer,numQuestions:this.state.numQuestions})))}}]),a}(n.Component),f=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),f)},7:function(e,t,a){e.exports=a.p+"static/media/logo.00e7fb1d.png"},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0f2d0c39.chunk.js.map