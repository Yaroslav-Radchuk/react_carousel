(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),s=n(2),r=n(3),c=n(5),o=n(4),l=n(1),u=n.n(l),m=(n(12),n(13),n(0)),p=function(t){var e=t.name,n=t.min,a=t.max,i=t.step,s=t.defaultValue,r=t.onChange;return Object(m.jsxs)("label",{htmlFor:e,children:["set ".concat(e),Object(m.jsx)("input",{id:e,type:"range",defaultValue:s,min:n,max:a,step:i,onChange:function(t){r(+t.target.value)}})]})},h=function(t){var e=t.newItemWidth,n=t.newStep,a=t.newDuration,i=t.newFrameSize;return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{name:"width",defaultValue:130,min:50,max:260,step:10,onChange:e}),Object(m.jsx)(p,{name:"step",defaultValue:3,min:1,max:10,step:1,onChange:n}),Object(m.jsx)(p,{name:"duration",defaultValue:1e3,min:500,max:3e3,step:500,onChange:a}),Object(m.jsx)(p,{name:"frame-size",defaultValue:3,min:1,max:10,step:1,onChange:i})]})},j=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={itemWidth:130,frameSize:3,step:3,animationDuration:1e3,translate:0,infinite:!1},t.stepPrev=function(){var e=t.state,n=e.step,a=e.itemWidth;e.translate+n*a>0?t.setState({translate:0}):t.setState((function(t){return{translate:t.translate+n*a}}))},t.stepNext=function(){var e=t.state,n=e.itemWidth,a=e.frameSize,i=e.step,s=e.translate,r=-(n*t.props.images.length-a*n);s-i*n<r?t.setState({translate:r}):t.setState((function(t){return{translate:t.translate-i*n}}))},t.newItemWidth=function(e){t.setState({itemWidth:e})},t.newFrameSize=function(e){t.setState({frameSize:e})},t.newDuration=function(e){t.setState({animationDuration:e})},t.newStep=function(e){t.setState({step:e})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props.images,e=this.state,n=e.itemWidth,a=e.frameSize,i=e.animationDuration,s=e.translate,r=e.infinite;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsxs)("div",{className:"Carousel__wrapper",style:{width:"".concat(n*a,"px")},children:[r,Object(m.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(s,"px)"),transition:"transform ".concat(i,"ms")},children:t.map((function(t,e){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:t,alt:"".concat(e),style:{width:"".concat(n,"px")}})},t)}))}),Object(m.jsxs)("div",{className:"Carousel__buttons",children:[Object(m.jsx)("button",{type:"button",onClick:this.stepPrev,children:"Prev"}),Object(m.jsx)("button",{"data-cy":"next",type:"button",onClick:this.stepNext,children:"Next"})]})]}),Object(m.jsx)(h,{newItemWidth:this.newItemWidth,newStep:this.newStep,newDuration:this.newDuration,newFrameSize:this.newFrameSize})]})}}]),n}(u.a.Component),d=j,g=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{"data-cy":"title",children:["Carousel with"," ",t.length," ","images"]}),Object(m.jsx)(d,{images:t})]})}}]),n}(u.a.Component),f=g;i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.60eefdf2.chunk.js.map