(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{221:function(e,t,a){"use strict";function n(e,t){var a=t.left,n=t.right,r=t.mirror,o=t.opposite,l=(a?1:0)|(n?2:0)|(r?16:0)|(o?32:0)|(e?64:0);if(u.hasOwnProperty(l))return u[l];if(!r!=!(e&&o)){var i=[n,a];a=i[0],n=i[1]}var s=a?"-100%":n?"100%":"0",g=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+s+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+s+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return u[l]=(0,c.animation)(g),u[l]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,o=e.duration,l=void 0===o?c.defaults.duration:o,s=e.delay,g=void 0===s?c.defaults.delay:s,u=e.count,d=void 0===u?c.defaults.count:u,m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),p={make:n,duration:void 0===r?l:r,delay:g,forever:a,count:d,style:{animationFillMode:"both"}};return m.left,m.right,m.mirror,m.opposite,(0,i.default)(m,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,l=a(76),i=(o=l)&&o.__esModule?o:{default:o},s=a(2),c=a(57),g={out:s.bool,left:s.bool,right:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},u={};r.propTypes=g,t.default=r,e.exports=t.default},236:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s}),a.d(t,"d",function(){return c}),a.d(t,"c",function(){return g});var n=a(53),r=a(9),o=a(5),l=a.n(o),i=function(e,t){return function(a){l.a.post(r.R,{email:e,password:t}).then(function(e){var t=e.data;return a({type:n.a,payload:t})}).catch(function(e){console.log(e)})}},s=function(e){return function(t){e=[],t({type:n.b,payload:e})}},c=function(e,t){return function(a){l.a.post(r.mb,{token:t,user_id:e}).then(function(e){var t={delivery_user:e.data,order_history:e.data.data.orders};return a({type:n.d,payload:t})}).catch(function(e){console.log(e)})}},g=function(e){return function(t){t({type:n.c,payload:e})}}},326:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(7),l=a(6),i=a(8),s=a(0),c=a.n(s),g=a(43),u=a(356),d=a(16),m=a(33),p=a(236),f=a(27),v=a(13),y=a(221),h=a.n(y),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!1,email:"",password:"",error:!1},a.handleOnChange=function(e){a.props.getSingleLanguageData(e.target.value),localStorage.setItem("userPreferedLanguage",e.target.value)},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.handleLogin=function(e){e.preventDefault(),a.setState({loading:!0}),a.props.loginDeliveryUser(a.state.email,a.state.password)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getSettings(),this.props.getAllLanguages(),document.getElementsByTagName("body")[0].classList.remove("bg-grey"),document.getElementsByTagName("body")[0].classList.add("delivery-dark-bg")}},{key:"componentWillReceiveProps",value:function(e){if(this.props.delivery_user!==e.delivery_user&&(this.setState({loading:!1}),!1===e.delivery_user.success&&this.setState({error:!0})),e.delivery_user.success,this.props.languages!==e.languages)if(localStorage.getItem("userPreferedLanguage"))this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));else if(e.languages.length){var t=e.languages.filter(function(e){return 1===e.is_default})[0].id;this.props.getSingleLanguageData(t)}}},{key:"render",value:function(){return window.innerWidth>768?c.a.createElement(u.a,{to:"/"}):this.props.delivery_user.success?c.a.createElement(u.a,{to:"/delivery"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{seotitle:"Login",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),this.state.error&&c.a.createElement("div",{className:"auth-error"},c.a.createElement("div",{className:"error-shake"},localStorage.getItem("emailPassDonotMatch"))),this.state.loading&&c.a.createElement(v.a,null),c.a.createElement("div",{className:"mt-50 mb-50"},c.a.createElement("div",{className:"text-center clipped-delivery-login-header"},c.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120",class:"delivery-login-logo"}),c.a.createElement(h.a,{left:!0,duration:1e3},c.a.createElement("img",{src:"/assets/img/various/delivery-bike.svg",alt:this.props.title,className:"delivery-bike-img"}))),c.a.createElement("div",{className:"delivery-login-texts px-15 mt-50 pb-10 text-center"},c.a.createElement("span",{className:"delivery-login-title"},localStorage.getItem("loginLoginTitle")),c.a.createElement("br",null),c.a.createElement("span",{className:"delivery-login-subtitle"},localStorage.getItem("loginLoginSubTitle"))),c.a.createElement("div",{className:"height-70 delivery-dark-bg"},c.a.createElement("form",{onSubmit:this.handleLogin},c.a.createElement("div",{className:"form-group px-15 pt-30"},c.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginEmailLabel")),c.a.createElement("div",{className:"col-md-9 pb-5"},c.a.createElement("input",{type:"text",name:"email",onChange:this.handleInputEmail,className:"form-control delivery-login-input"})),c.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginPasswordLabel")),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("input",{type:"password",name:"password",onChange:this.handleInputPassword,className:"form-control delivery-login-input"}))),c.a.createElement("div",{className:"mt-20 px-30 button-block"},c.a.createElement("button",{type:"submit",className:"btn delivery-login-button",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("loginLoginTitle")))),this.props.languages&&this.props.languages.length>1&&c.a.createElement("div",{className:"mt-100 d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"mr-2 edit-address-input-label"},localStorage.getItem("changeLanguageText")),c.a.createElement("select",{onChange:this.handleOnChange,defaultValue:localStorage.getItem("userPreferedLanguage")?localStorage.getItem("userPreferedLanguage"):this.props.languages.filter(function(e){return 1===e.is_default})[0].id,className:"form-control delivery-language-select"},this.props.languages.map(function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.language_name)}))))))}}]),t}(s.Component);b.contextTypes={router:function(){return null}};t.default=Object(d.b)(function(e){return{delivery_user:e.delivery_user.delivery_user,languages:e.languages.languages,language:e.languages.language}},{loginDeliveryUser:p.a,getSettings:m.a,getAllLanguages:f.a,getSingleLanguageData:f.b})(b)}}]);