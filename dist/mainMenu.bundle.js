!function(){"use strict";function e(){var e,t=window.location.hash,n=decodeURIComponent(t.substr(1)),r=document.querySelector(".soundIcon");(e="battle-field"==n?document.querySelector(".background-music-battlefield"):document.querySelector(".background-music-main-menu")).paused?(e.play(),r.className="fas fa-volume-up soundIcon"):(e.pause(),r.className="fas fa-volume-mute soundIcon")}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"horizontal",n=document.querySelector(e);switch(t){case"horizontal":n.classList.remove("shakeX"),setTimeout((function(){return n.classList.add("shakeX")}),0),setTimeout((function(){return n.classList.remove("shakeX")}),400);break;case"vertical":n.classList.remove("shakeY"),setTimeout((function(){return n.classList.add("shakeY")}),0),setTimeout((function(){return n.classList.remove("shakeY")}),400);break;case"mix":n.classList.remove("shakeMix"),setTimeout((function(){return n.classList.add("shakeMix")}),0),setTimeout((function(){return n.classList.remove("shakeMix")}),400)}}function n(e){var t=document.querySelector(e);t&&(t.currentTime=0,t.play())}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".background-music-main-menu"),document.querySelector(".background-music-battlefield"),document.querySelectorAll(".music");var y=function(){function e(){h(this,e)}var t,n,r;return t=e,r=[{key:"createMainMenu",value:function(){new p}},{key:"createChooseMenu",value:function(){new v}}],(n=[{key:"init",value:function(e){this.mainElement=document.querySelector(e),this.source=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},document.querySelector(e).children)}}])&&m(t.prototype,n),r&&m(t,r),e}(),p=function(t){a(i,t);var r=s(i);function i(){var t;return h(this,i),(t=r.call(this)).init(".wrapper-main-menu"),t.source[1].addEventListener("click",e),o(t.mainElement.children).forEach((function(e){e.addEventListener("mouseover",(function(){return n(".btn-hover-audio")})),e.addEventListener("click",(function(){return n(".btn-click-audio")}))})),t}return i}(y),v=function(r){a(c,r);var i=s(c);function c(){var r;h(this,c),r=i.call(this);var a=!0,s=null,u=null,l=null,f=null,d=[{title:"The Viking",profile:"The remaining soldier of the Ironclads. Sold his soul to harness demonic energies",pross:"Losing health goes into a rage. Becomes stronger when the enemy has a lot of health"},{title:"The Silent",profile:"A deadly huntress from the foglands. Eradicates foes with daggers",pross:"Light attacks and the ability to always find the right skill take the enemy by surprise"},{title:"The Watcher",profile:'A blind ascetic who has come to "Evaluate" the Spire. Master of the divine Stances',pross:"Massive magic  can destroy the enemy in a matter of seconds"}];r.init(".wrapper-choose-menu");var m=r.source,y=m[0],p=m[1],v=m[2],b=m[3],g=m[4],k=m[6],w=r.source[4],S=w.firstElementChild,E=w.lastElementChild;return r.playerChooseCharacter=function(){if(S.value.length>=1&&"You forgot enter name"!==S.value&&o(v.children).some((function(e){return e.classList.contains("in-focus")}))){var e=o(v.children).filter((function(e){if(e.classList.contains("in-focus"))return e}));a?(l=S.value,s=e[0].dataset.class,y.textContent="Player 2: Choose your character",S.value=""):(f=S.value,u=e[0].dataset.class,y.textContent="Players chose their characters",S.value=""),a=!1,n(".confirm-audio"),this.removeStyles(),this.checkConditionToStartBattle()}else this.allertEmptyName()},r.allertEmptyName=function(){n(".confirm-failed-audio"),S.value.length<=1&&(t(".decision-btn","horizontal"),S.value="You forgot enter name",S.style.color="red",S.style.fontSize="2rem",setTimeout((function(){S.value="",S.style.color="black",S.style.fontSize="2rem"}),1e3)),o(v.children).some((function(e){return e.classList.contains("in-focus")}))||t(".options","mix")},r.checkConditionToStartBattle=function(){if(s&&u){var e=this.prepareToExtract();v.classList.add("hidden"),g.classList.add("hidden"),p.classList.add("hidden"),localStorage.setItem("playersInfo",JSON.stringify(e)),setTimeout((function(){b.classList.add("visible")}),500)}},r.removeStyles=function(){o(v.children).forEach((function(e){e.classList.remove("in-focus")}))},r.startVisualAndSoundEffect=function(e){switch(e.target.className.split(" ")[0]){case"warrior":t(".wrapper-choose-menu"),n(".warrior-selected-audio");break;case"rogue":t(".wrapper-choose-menu"),n(".rogue-selected-audio");break;case"mage":t(".wrapper-choose-menu"),n(".mage-selected-audio")}},r.setCharacterDescription=function(e){var t=Object.keys(d[0]);switch(e){case"warrior":o(p.children).forEach((function(e,n){return e.textContent=d[0][t[n]]}));break;case"rogue":o(p.children).forEach((function(e,n){return e.textContent=d[1][t[n]]}));break;case"mage":o(p.children).forEach((function(e,n){return e.textContent=d[2][t[n]]}))}},r.setBackground=function(e){"options"!==e.target.className&&(this.removeStyles(),e.target.classList.add("in-focus"),this.setCharacterDescription("".concat(e.target.textContent.toLowerCase())),this.mainElement.style.backgroundImage="url('images/backgrounds/".concat(e.target.textContent.toLowerCase(),".jpg')"))},r.prepareToExtract=function(){return{playerOneClass:s,playerTwoClass:u,playerOneName:l,playerTwoName:f}},v.addEventListener("click",(function(e){return r.setBackground(e)})),v.addEventListener("click",(function(e){return r.startVisualAndSoundEffect(e)})),o(v.children).forEach((function(e){return e.addEventListener("mouseover",(function(){return n(".btn-hover-audio")}))})),E.addEventListener("click",(function(){return r.playerChooseCharacter()})),k.addEventListener("click",e),document.addEventListener("keypress",(function(e){"Enter"===e.code&&r.playerChooseCharacter()})),o(document.querySelectorAll(".btn")).forEach((function(e){e.addEventListener("mouseover",(function(){return n(".btn-hover-audio")})),e.addEventListener("click",(function(){return n(".btn-click-audio")}))})),r}return c}(y);y.createMainMenu()}();
//# sourceMappingURL=mainMenu.bundle.js.map