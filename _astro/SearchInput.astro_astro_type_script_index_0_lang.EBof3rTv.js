import{i as H,b as w,a as v,r as j,u as q,t as A,g as N}from"./index.Cggr43eu.js";var O="[object Symbol]";function P(t){return"symbol"==typeof t||H(t)&&w(t)==O}var W=/\s/;function $(t){for(var e=t.length;e--&&W.test(t.charAt(e)););return e}var D=/^\s+/;function K(t){return t&&t.slice(0,$(t)+1).replace(D,"")}var T=NaN,U=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,_=/^0o[0-7]+$/i,G=parseInt;function I(t){if("number"==typeof t)return t;if(P(t))return T;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=K(t);var s=F.test(t);return s||_.test(t)?G(t.slice(2),s?2:8):U.test(t)?T:+t}var k=function(){return j.Date.now()},X="Expected a function",z=Math.max,J=Math.min;function Q(t,e,s){var i,n,r,a,u,l,c=0,h=!1,o=!1,d=!0;if("function"!=typeof t)throw new TypeError(X);function p(e){var s=i,r=n;return i=n=void 0,c=e,a=t.apply(r,s)}function f(t){var s=t-l;return void 0===l||s>=e||s<0||o&&t-c>=r}function m(){var t=k();if(f(t))return g(t);u=setTimeout(m,function(t){var s=e-(t-l);return o?J(s,r-(t-c)):s}(t))}function g(t){return u=void 0,d&&i?p(t):(i=n=void 0,a)}function y(){var t=k(),s=f(t);if(i=arguments,n=this,l=t,s){if(void 0===u)return function(t){return c=t,u=setTimeout(m,e),h?p(t):a}(l);if(o)return clearTimeout(u),u=setTimeout(m,e),p(l)}return void 0===u&&(u=setTimeout(m,e)),a}return e=I(e)||0,v(s)&&(h=!!s.leading,r=(o="maxWait"in s)?z(I(s.maxWait)||0,e):r,d="trailing"in s?!!s.trailing:d),y.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=n=u=void 0},y.flush=function(){return void 0===u?a:g(k())},y}class V extends HTMLElement{connectedCallback(){"true"===this.dataset.blur?.toLowerCase()&&this.classList.add("backdrop-blur-sm")}show(){this.classList.remove("hidden")}hide(){this.classList.add("hidden")}}customElements.define("pagefind-mask",V);const Y=q();class Z extends HTMLElement{constructor(){super(...arguments),this.input=this.querySelector("input"),this.clearBtn=this.querySelector("button"),this.results=this.querySelector("pagefind-search-results"),this.mask=this.querySelector("pagefind-mask"),this.search=Q((async t=>{if(!t.length)return;const e=await pagefind.search(t);this.results.clear(),e.results.length&&this.mask?.show(),e.results.forEach((async t=>{const e=await t.data(),s=e.excerpt.split("<mark>").map((t=>t.split("</mark>"))).flat().map((t=>t.trim()));e.url+=`#:~:text=${encodeURI(s[1])}`,this.results.push(e)}))}),200)}connectedCallback(){const t=()=>{const t=A({locale:N(),text:Y.searchArticle});this.input.placeholder=`🔍 ${t}`};t(),setInterval(t,1e3),this.input.addEventListener("keyup",(t=>{t.isComposing||(this.adjustResultsHeight(),this.search(this.input.value),this.input.value.length?this.clearBtn.classList.remove("hidden"):this.clearBtn.classList.add("hidden"))})),this.input.addEventListener("keydown",(t=>{"Escape"===t.key&&(this.results.clear(),this.mask.hide(),this.input.blur(),t.preventDefault())})),this.input.addEventListener("focus",(()=>{this.adjustResultsHeight(),this.search(this.input.value)})),this.mask.addEventListener("click",(()=>{this.mask.hide(),this.results?.clear()})),this.clearBtn.addEventListener("mousedown",(t=>{this.input.value="",this.mask?.hide(),this.results?.clear(),t.preventDefault()})),document.addEventListener("keydown",(t=>{(t.ctrlKey||t.metaKey)&&"f"===t.key&&!t.shiftKey&&(t.preventDefault(),this.input.focus(),this.mask.show())})),this.input.value.length&&(this.search(this.input.value),this.clearBtn.classList.remove("hidden"))}adjustResultsHeight(){const t=this.results.getBoundingClientRect();this.results.setAttribute("style",`max-height:calc(100vh - ${Math.ceil(t.top)}px);`)}}customElements.define("pagefind-search-input",Z);class S extends HTMLElement{constructor(t){super(),this.result=t,this.template=document.getElementById("template-pagefind-search-result-item"),this.appendChild(this.template.content.cloneNode(!0))}connectedCallback(){const t=this.querySelector("a");t.href=this.result.url,t.textContent=this.result.meta.title||"Untitled";this.querySelector(".excerpt").innerHTML=this.result.excerpt}}customElements.define("pagefind-search-result-item",S);class ee extends HTMLElement{clear(){this.innerHTML=""}push(t){const e=new S(t);this.appendChild(e)}}customElements.define("pagefind-search-results",ee);