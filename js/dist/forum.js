module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},,function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e,n){t.exports=function t(e,n,o){function r(i,c){if(!n[i]){if(!e[i]){if(a)return a(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var s=n[i]={exports:{}};e[i][0].call(s.exports,(function(t){return r(e[i][1][t]||t)}),s,s.exports,t,e,n,o)}return n[i].exports}for(var a=!1,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(t,e,n){"use strict";function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.IS_BROWSER=void 0;var i="undefined"!=typeof window;n.IS_BROWSER=i;var c=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i){this.options=Object.assign({},{id:"feedback",endpoint:"",events:!1,emailField:!1,forceShowButton:!1,btnTitle:"Feedback",title:"Feedback",contactText:"Want to chat?",contactLink:"",typeMessage:"What feedback do you have?",success:"Thanks! 👊",inputPlaceholder:"Your feedback goes here!",submitText:"Submit",backText:"Back",failedTitle:"Oops, an error ocurred!",failedMessage:"Please try again. If this keeps happening, try to send an email instead.",position:"right",primary:"rgb(53, 222, 118)",background:"#fff",color:"#000",types:{general:{text:"General Feedback",icon:"😁"},idea:{text:"I have an idea",icon:"💡"},bug:{text:"I found an issue",icon:"🐞"}}},e);var n=document.createElement("div");n.id="feedback-root",document.body.insertBefore(n,document.body.firstChild),this.root=n;var o=document.createComment("feedback-js modal code");document.body.insertBefore(o,document.body.firstChild),this._addStyle()}else console.warn("Detected environment without a `window` object")}var e,n;return e=t,(n=[{key:"renderButton",value:function(){var t=this;if(this.root){this.showDefaultBtn=!0;var e='\n\t\t\t<div class="feedback-btn-wrapper">\n\t\t\t\t<button id="feedback-btn" title="Give feedback">\n\t\t\t\t\t<svg class="inline w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>\n\t\t\t\t\t<span>'.concat(this.options.btnTitle,"</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t");this.root.innerHTML=e,document.getElementById("feedback-btn").addEventListener("click",(function(){t.renderModal()}))}}},{key:"renderModal",value:function(){var t=this;if(this.root){var e='\n\t\t\t<div class="feedback-wrapper">\n\t\t\t\t<div class="feedback-main">\n\t\t\t\t\t<div class="feedback-header">\n\t\t\t\t\t\t<p>'.concat(this.options.title,"</p>\n\t\t\t\t\t\t").concat(this.options.contactLink.length>0?"<a href="+this.options.contactLink+">"+this.options.contactText+"</a>":"",'\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="feedback-content">\n\t\t\t\t\t\t<p>').concat(this.options.typeMessage,'</p>\n\t\t\t\t\t\t<div class="feedback-content-list">\n\t\t\t\t\t\t\t').concat(Object.entries(this.options.types).reduce((function(t,e){var n=o(e,2),r=n[0],a=n[1];return t+'<button id="feedback-item-'.concat(r,'" class="feedback-item"><span>').concat(a.icon,"</span>").concat(a.text,"</button>")}),""),'\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="feedback-close">\n\t\t\t\t\t<button id="feedback-close">\n\t\t\t\t\t\t<svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t');this.root.innerHTML=e,document.getElementById("feedback-close").addEventListener("click",(function(){t.closeModal()})),Object.keys(this.options.types).forEach((function(e){document.getElementById("feedback-item-".concat(e)).onclick=function(){t.renderForm(e)}}))}}},{key:"renderForm",value:function(t){var e=this;if(this.root){var n=this.options.types[t],o='\n\t\t\t<div class="feedback-wrapper">\n\t\t\t\t<div class="feedback-main">\n\t\t\t\t\t<div class="feedback-header">\n\t\t\t\t\t\t<p>'.concat(n.icon," ").concat(n.text,'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="feedback-content">\n\t\t\t\t\t\t\t').concat(this.options.emailField?'<input id="feedback-email" type="email" name="email" placeholder="Email address (optional)">':"",'\n\t\t\t\t\t\t\t<textarea id="feedback-message" name="feedback" autofocus type="text" maxlength="500" rows="5" placeholder="').concat(this.options.inputPlaceholder,'"></textarea>\n\t\t\t\t\t\t\t<div id="feedback-actions" class="feedback-actions">\n\t\t\t\t\t\t\t\t<button type="button" id="feedback-back">').concat(this.options.backText,'</button>\n\t\t\t\t\t\t\t\t<button type="submit" id="feedback-submit">').concat(this.options.submitText,'</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="feedback-close">\n\t\t\t\t\t<button id="feedback-close">\n\t\t\t\t\t\t<svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t');this.current=t,this.root.innerHTML=o,document.getElementById("feedback-message").focus(),document.getElementById("feedback-close").addEventListener("click",(function(){e.closeModal()})),document.getElementById("feedback-back").addEventListener("click",(function(){e.renderModal()})),document.getElementById("feedback-submit").addEventListener("click",(function(){e.submitForm()}))}}},{key:"closeModal",value:function(){this.root.innerHTML="",this.showDefaultBtn&&this.renderButton()}},{key:"submitForm",value:function(){var t=document.getElementById("feedback-message").value,e=this.options.emailField?document.getElementById("feedback-email").value:void 0,n={id:this.options.id,email:e,feedbackType:this.current,url:window.location.href,message:t};if(this.options.events){var o=new CustomEvent("feedback-submit",{detail:n});return window.dispatchEvent(o),void this.renderSuccess()}this.sendToEndpoint(n)}},{key:"sendToEndpoint",value:function(t){var e=this;this.renderLoading();var n=new XMLHttpRequest;n.open("POST",this.options.endpoint),n.setRequestHeader("Content-type","application/json"),n.send(JSON.stringify(t)),n.onreadystatechange=function(){if(4===n.readyState){if(200===n.status)return e.renderSuccess();e.renderFailed()}}}},{key:"renderLoading",value:function(){var t=this;this.root&&(document.getElementById("feedback-actions").innerHTML='\n\t\t\t<button id="feedback-loading"><div class="feedback-loader"><div></div><div></div><div></div><div></div></div>Loading</button>\n\t\t',document.getElementById("feedback-close").addEventListener("click",(function(){t.closeModal()})))}},{key:"renderSuccess",value:function(){var t=this;if(this.root){var e='\n\t\t\t<div class="feedback-btn-wrapper">\n\t\t\t\t<button id="feedback-btn" title="Give feedback">\n\t\t\t\t\t<span>'.concat(this.options.success,"</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t");this.root.innerHTML=e,setTimeout((function(){t.renderButton()}),3e3)}}},{key:"renderFailed",value:function(){var t=this;if(this.root){var e='\n\t\t\t<div class="feedback-wrapper">\n\t\t\t\t<div class="feedback-main">\n\t\t\t\t\t<div class="feedback-header">\n\t\t\t\t\t\t<p>'.concat(this.options.failedTitle,'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="feedback-content">\n\t\t\t\t\t\t<p>').concat(this.options.failedMessage,'</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="feedback-close">\n\t\t\t\t\t<button id="feedback-close">\n\t\t\t\t\t\t<svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t');this.root.innerHTML=e,document.getElementById("feedback-close").addEventListener("click",(function(){t.closeModal()}))}}},{key:"_addStyle",value:function(){var t="\n\t\t\t#feedback-root{\n\t\t\t\tfont-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\n\t\t\t}\n\n\t\t\t.feedback-wrapper{\n\t\t\t\tposition: fixed;\n\t\t\t\tz-index: 1000;\n\t\t\t\tbottom: 0;\n\t\t\t\t".concat("left"===this.options.position?"left: 0":"right: 0",";\n\t\t\t\tmargin: 2rem;\n\t\t\t\twidth: 100%;\n\t\t\t\tmax-width: 20rem;\n\t\t\t}\n\n\t\t\t.feedback-main{\n\t\t\t\tbackground-color: ").concat(this.options.background,";\n\t\t\t\tcolor: ").concat(this.options.color,";\n\t\t\t\tborder-radius: 0.6rem;\n\t\t\t\ttext-align: center;\n\t\t\t\toverflow: hidden;\n\t\t\t\tbox-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);\n\t\t\t}\n\n\t\t\t.feedback-header{\n\t\t\t\tcolor: ").concat(this.options.background,";\n\t\t\t\tbackground-color: ").concat(this.options.primary,";\n\t\t\t\tpadding: 0.8rem 1.25rem;\n\t\t\t}\n\n\t\t\t.feedback-header p{\n\t\t\t\tmargin: 0;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tfont-size: 1.2rem;\n\t\t\t}\n\n\t\t\t.feedback-header a{\n\t\t\t\tmargin: 0;\n\t\t\t\toutline: 0;\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tmargin-top: 0.5rem;\n\t\t\t\tdisplay: block;\n\t\t\t\tcolor: ").concat(this.options.background,";\n\t\t\t\tborder: 2px solid ").concat(this.options.primary,";\n\t\t\t\ttext-decoration: none;\n\t\t\t\tpadding: 5px 10px\n\t\t\t}\n\n\t\t\t.feedback-header a:hover{\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\n\t\t\t.feedback-header a:focus{\n\t\t\t\tborder: 2px solid ").concat(this.options.background,";\n\t\t\t\tborder-radius: 5px;\n\t\t\t}\n\n\t\t\t.feedback-content{\n\t\t\t\tpadding: 0.7rem 1.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\n\t\t\t.feedback-content p{\n\t\t\t\tmargin: 0;\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tmargin-top: 0.5rem;\n\t\t\t\tmargin-bottom: 0.6rem;\n\t\t\t}\n\n\t\t\t.feedback-content input{\n\t\t\t\tborder: 3px solid ").concat(this.options.background,";\n\t\t\t\tfilter: brightness(95%);\n\t\t\t\tborder-radius: 10px;\n\t\t\t\toutline: 0;\n\t\t\t\tpadding: 10px;\n\t\t\t\tmargin-bottom: 0.5rem;\n\t\t\t\twidth: 100%;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tfont-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\n\t\t\t}\n\n\t\t\t.feedback-content textarea{\n\t\t\t\toverflow: auto;\n\t\t\t\tborder: 3px solid ").concat(this.options.background,";\n\t\t\t\tfilter: brightness(95%);\n\t\t\t\tborder-radius: 10px;\n\t\t\t\toutline: 0;\n\t\t\t\tpadding: 10px;\n\t\t\t\twidth: 100%;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tresize: none;\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tfont-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\n\t\t\t}\n\n\t\t\t.feedback-content textarea:focus,\n\t\t\t.feedback-content input:focus{\n\t\t\t\tborder: 3px solid ").concat(this.options.primary,";\n\t\t\t}\n\n\t\t\t.feedback-actions{\n\t\t\t\tdisplay: flex;\n\t\t\t\tmargin-top: 1rem;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t.feedback-actions button{\n\t\t\t\tpadding: 0.5rem;\n\t\t\t\tborder-radius: 10px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tmargin: 0;\n\t\t\t\toutline: 0;\n\t\t\t\tborder: 3px solid rgba(255, 255, 255, 0);\n\t\t\t\tappearance: none;\n\t\t\t\tfont-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\n\t\t\t\tuser-select: none;\n\t\t\t\tbox-shadow: 0 1px 3px 0 rgba(0,0,0,.1);\n\t\t\t}\n\n\t\t\t.feedback-actions button:focus {\n\t\t\t\tborder: 3px solid ").concat(this.options.primary,";\n\t\t\t\tfilter: brightness(105%);\n\t\t\t}\n\t\t\t\n\t\t\t.feedback-actions button:active {\n\t\t\t\ttransform: scale(0.95);\n\t\t\t}\n\n\t\t\t#feedback-back{\n\t\t\t\tbackground: ").concat(this.options.background,";\n\t\t\t\tcolor: rgba(58,71,65);\n\t\t\t}\n\n\t\t\t#feedback-submit{\n\t\t\t\tmargin-left: auto;\n\t\t\t\tbackground: ").concat(this.options.primary,";\n\t\t\t\tcolor: ").concat(this.options.background,";\n\t\t\t\tfont-weight: 700;\n\t\t\t}\n\n\t\t\t#feedback-loading{\n\t\t\t\tmargin-left: auto;\n\t\t\t\tbackground: ").concat(this.options.primary,";\n\t\t\t\tcolor: ").concat(this.options.background,";\n\t\t\t\tfont-weight: 700;\n\t\t\t}\n\n\t\t\t.feedback-loader{\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 15px;\n\t\t\t\theight: 15px;\n\t\t\t\tmargin-right: 1rem;\n\t\t\t}\n\n\t\t\t.feedback-loader div {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tmargin: 0;\n\t\t\t\tborder: 3px solid ").concat(this.options.background,";\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tanimation: feedback-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n\t\t\t\tborder-color: ").concat(this.options.background," transparent transparent transparent;\n\t\t\t}\n\n\t\t\t.feedback-loader div:nth-child(1) {\n\t\t\t\tanimation-delay: -0.45s;\n\t\t\t}\n\n\t\t\t.feedback-loader div:nth-child(2) {\n\t\t\t\tanimation-delay: -0.3s;\n\t\t\t}\n\n\t\t\t.feedback-loader div:nth-child(3) {\n\t\t\t\tanimation-delay: -0.15s;\n\t\t\t}\n\n\t\t\t@keyframes feedback-loader {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: rotate(0deg);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: rotate(360deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t  \n\t\t\t.feedback-content-list{\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: flex-start;\n\t\t\t\tmargin-left: auto;\n\t\t\t\tmargin-right: auto;\n\t\t\t\tmargin-bottom: 1rem;\n\t\t\t}\n\n\t\t\t.feedback-item {\n\t\t\t\twidth: 100%;\n\t\t\t\tcursor: pointer;\n\t\t\t\tuser-select:none;\n\t\t\t\tborder:0;\n\t\t\t\toutline: 0;\n\t\t\t\tbackground: 0;\n\t\t\t\tfont-size: 0.9rem;\n\t\t\t\ttext-align: left;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tflex-direction: row;\n\t\t\t\tcolor: ").concat(this.options.color,";\n\t\t\t\tbackground-color: ").concat(this.options.background,";\n\t\t\t\tborder: 2px solid ").concat(this.options.background,";\n\t\t\t\tborder-radius: 10px;\n\t\t\t\tpadding: 10px;\n\t\t\t}\n\n\t\t\t.feedback-item:hover{\n\t\t\t\tfilter: brightness(95%);\n\t\t\t}\n\n\t\t\t.feedback-item:focus{\n\t\t\t\tborder: 2px solid ").concat(this.options.primary,";\n\t\t\t\tborder-radius: 5px;\n\t\t\t}\n\n\t\t\t.feedback-item span{\n\t\t\t\twidth: 1.5rem;\n\t\t\t\tmargin-right: 0.2rem;\n\t\t\t\tdisplay: block;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.feedback-close{\n\t\t\t\tmargin-top: .75rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: ").concat("left"===this.options.position?"flex-start":"flex-end",";\n\t\t\t\tflex-direction: row;\n\t\t\t}\n\n\t\t\t.feedback-close button{\n\t\t\t\tbox-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);\n\t\t\t\tcursor: pointer;\n\t\t\t\tuser-select:none;\n\t\t\t\tborder:0;\n\t\t\t\toutline: 0;\n\t\t\t\tborder-radius: 9999px;\n\t\t\t\tpadding: .5rem;\n\t\t\t\tbackground: ").concat(this.options.background,";\n\t\t\t\tcolor: ").concat(this.options.color,";\n\t\t\t\tborder: 2px solid ").concat(this.options.background,";\n\t\t\t}\n\n\t\t\t.feedback-close button:focus{\n\t\t\t\tborder: 2px solid ").concat(this.options.primary,";\n\t\t\t}\n\n\t\t\t.feedback-close button:hover{\n\t\t\t\tfilter: brightness(95%);\n\t\t\t}\n\n\t\t\t.feedback-close button:active {\n\t\t\t\ttransform: scale(0.95);\n\t\t\t}\n\n\t\t\t.feedback-close svg{\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 1.25rem;\n\t\t\t\theight: 1.25rem;\n\t\t\t}\n\n\t\t\t.feedback-btn-wrapper{\n\t\t\t\tposition: fixed;\n\t\t\t\tz-index: 1000;\n\t\t\t\tbottom: 0;\n\t\t\t\t").concat("left"===this.options.position?"left: 0":"right: 0",";\n\t\t\t\tmargin: 2rem;\n\t\t\t}\n\n\t\t\t#feedback-btn{\n\t\t\t\theight: 30px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 1.2rem 0.7rem;\n\t\t\t\tborder-radius: 0.4rem;\n\t\t\t\tcursor: pointer;\n\t\t\t\tbox-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);\n\t\t\t\tuser-select:none;\n\t\t\t\tborder:0;\n\t\t\t\toutline: 0;\n\t\t\t\tcolor: ").concat(this.options.background,";\n\t\t\t\tbackground-color: ").concat(this.options.primary,";\n\t\t\t\ttransition: filter .4s ease;\n\t\t\t}\n\n\t\t\t#feedback-btn:hover, #feedback-btn:focus{\n\t\t\t\tfilter: brightness(105%);\n\t\t\t}\n\n\t\t\t#feedback-btn:active {\n\t\t\t\ttransform: scale(0.95);\n\t\t\t}\n\n\t\t\t#feedback-btn svg{\n\t\t\t\twidth: 1.25rem;\n\t\t\t\theight: 1.25rem;\n\t\t\t}\n\n\t\t\t#feedback-btn span{\n\t\t\t\tfont-weight: 700;\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tmargin-left: .5rem;\n\t\t\t}\n\t\t"),e=document.createComment("feedback-js stylesheet");document.head.appendChild(e);var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(t)),document.head.appendChild(n)}}])&&a(e.prototype,n),t}();n.default=c},{}],2:[function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var e=function(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return t}();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var i=r?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=t[a]}return n.default=t,e&&e.set(t,n),n}(t("./feedback")),a=r.default;n.default=a,r.IS_BROWSER?function(){var t=document.querySelector("[data-feedback-opts]"),e=document.querySelector("[data-feedback-endpoint]"),n=document.querySelectorAll("[data-feedback-trigger]");if(!t&&!e&&n.length<1)window.Feedback=r.default;else{var o=t&&t.getAttribute("data-feedback-opts")||"{}",a=e&&{endpoint:e.getAttribute("data-feedback-endpoint")}||{},i=Object.assign({},JSON.parse(o),a);window.addEventListener("load",(function(){window.feedback=new r.default(i);var t=n.length<1;(t||window.feedback.options.forceShowButton)&&window.feedback.renderButton(),t||n.forEach((function(t){t.addEventListener("click",(function(){window.feedback.renderModal()}))}))}))}}():console.warn("[feedback-js] Detected environment without a `window` object")},{"./feedback":1}]},{},[2])(2)},,function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),i=n(3),c=n.n(i),d=n(4),s=n.n(d);r.a.initializers.add("justoverclock/flarum-ext-feedback",(function(){Object(a.extend)(c.a.prototype,"oninit",(function(t){var e=r.a.forum.attribute("apiUrl")+"/feedback",n=r.a.forum.attribute("feedback");if(n){var o={endpoint:e,events:!0,emailField:n.email,btnTitle:r.a.translator.trans("justoverclock-feedback.forum.button-title"),title:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.title"),inputPlaceholder:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.placeholder"),submitText:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.submit"),backText:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.back"),contactText:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.contact-text"),typeMessage:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.type-message"),success:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.success"),position:n.position,primary:r.a.forum.attribute("themePrimaryColor"),background:n.backgroundColor,color:n.fontColor,types:{general:{text:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.types.general"),icon:"⚠️"},idea:{text:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.types.idea"),icon:"💡"},love:{text:r.a.translator.trans("justoverclock-feedback.forum.feedback-widget.types.love"),icon:"💖"}}};new s.a(o).renderButton(),window.addEventListener("feedback-submit",(function(t){r.a.request({method:"POST",url:e,body:t.detail})}))}else console.warn("justoverclock/flarum-ext-feedback is not correctly configured!")}))}))}]);
//# sourceMappingURL=forum.js.map