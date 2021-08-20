!function(){"use strict";var e=function(){var e,t=window.location.hash,n=decodeURIComponent(t.substr(1)),r=document.querySelector(".sound-icon");(e="battle-field"==n||"restoredGame"==n?document.querySelector(".background-music-battlefield"):document.querySelector(".background-music-main-menu")).paused?(e.play(),r.className="fas fa-volume-up sound-icon"):(e.pause(),r.className="fas fa-volume-mute sound-icon")},t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"horizontal",n=document.querySelector(e);switch(t){case"horizontal":n.classList.remove("shake-x"),setTimeout((function(){return n.classList.add("shake-x")}),0),setTimeout((function(){return n.classList.remove("shake-x")}),400);break;case"vertical":n.classList.remove("shake-y"),setTimeout((function(){return n.classList.add("shake-y")}),0),setTimeout((function(){return n.classList.remove("shake-y")}),400);break;case"mix":n.classList.remove("shake-mix"),setTimeout((function(){return n.classList.add("shake-mix")}),0),setTimeout((function(){return n.classList.remove("shake-mix")}),400)}},n=function(e){var t=document.querySelector(e);t&&(t.currentTime=0,t.play())};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}var y=function(){function e(){m(this,e)}return p(e,[{key:"init",value:function(e){this.mainElement=document.querySelector(e),this.source=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},document.querySelector(e).children)}}],[{key:"createMainMenu",value:function(){new v}},{key:"createChooseMenu",value:function(){new b}}]),e}(),v=function(t){i(a,t);var r=s(a);function a(){var t;return m(this,a),(t=r.call(this)).aboutGame=document.querySelector(".about-button"),t.checkContinueCondition(),t.init(".wrapper-main-menu"),t.source[1].addEventListener("click",e),o(t.mainElement.children).forEach((function(e){e.addEventListener("mouseover",(function(){return n(".btn-hover-audio")})),e.addEventListener("click",(function(){return n(".btn-click-audio")}))})),t.aboutGame.addEventListener("click",(function(){return t.createAboutRules()})),t.rulesPage='<div class = "about-game">\n\t\t\t<p>Defeat your opponent by playing <span style="color:brown">Cards</span><img src="./images/cards/warrior/strike.png" alt="card"> from your hand by swipe it up or drag it in the center of battlefield.</p>\n\t\t\t<p>Cards require <span style="color: orange">Energy</span> to play. You can see it on a card in the top left corner. Once you are out of Energy, <img id = "about-game__stamina" src="./images/icons/out-of-energy.png" alt="cards">end your turn.</p>\n\t\t\t<p>At start of your turn, new cards are drawn and your <span>Energy</span> is replenished.</p>\n\t\t\t<p>Play defensive card to gain <span style="color:blue">Block</span><img src="./images/cards/warrior/defend_w.png" alt="card"> <span>Block</span> reduces incoming attack damage.</p>\n\t\t\t<p>If you want to save your game, just use menu <i class="fas fa-bars"></i> and select "save progress" button.</p>\n\t\t</div>',t}return p(a,[{key:"checkContinueCondition",value:function(){fetch("https://parseapi.back4app.com/classes/CardGameContainer/",{method:"GET",headers:{"X-Parse-Application-Id":"uU4nbtVfuBneX95bxKyjBuyG82Wr3Wg1JrTjEYr7","X-Parse-REST-API-Key":"UAnSqROzrtRZuMkgY3MgoEkhsp0040aUBca0dWGm"}}).then((function(e){if(e.ok)return e.json()})).then((function(e){e.results[0].gameSaved.hasOwnProperty("gameFinished")&&(document.querySelector(".continue-button").addEventListener("click",(function(e){return e.stopPropagation()})),document.querySelector(".continue-button").style.color="grey")}))}},{key:"createAboutRules",value:function(){var e=this,t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");t.className="players-overlay fade-in-animation",r.className="close-rule-btn",o.innerHTML="".concat(this.rulesPage),r.textContent="Close",t.appendChild(o),t.appendChild(r),this.mainElement.appendChild(t),document.querySelector(".close-rule-btn").addEventListener("click",(function(){return e.removeAboutRules()})),document.querySelector(".close-rule-btn").addEventListener("mouseover",(function(){return n(".btn-hover-audio")})),document.querySelector(".close-rule-btn").addEventListener("click",(function(){return n(".btn-click-audio")}))}},{key:"removeAboutRules",value:function(){var e=this,t=document.querySelector(".players-overlay");t.className="players-overlay fade-out-animation",setTimeout((function(){return e.mainElement.removeChild(t)}),500)}}]),a}(y),b=function(r){i(c,r);var a=s(c);function c(){var r;m(this,c),r=a.call(this);var i=!0,s=null,u=null,l=null,f=null,d=[{title:"The Viking",profile:"The remaining soldier of the Ironclads. Sold his soul to harness demonic energies",pross:"Losing health goes into a rage. Becomes stronger when the enemy has a lot of health"},{title:"The Silent",profile:"A deadly huntress from the foglands. Eradicates foes with daggers",pross:"Light attacks and the ability to always find the right skill take the enemy by surprise"},{title:"The Watcher",profile:'A blind ascetic who has come to "Evaluate" the Spire. Master of the divine Stances',pross:"Massive magic  can destroy the enemy in a matter of seconds"}];r.init(".wrapper-choose-menu");var h=r.source,p=h[0],y=h[1],v=h[2],b=h[3],g=h[4],k=h[6],E=r.source[4],w=E.firstElementChild,S=E.lastElementChild;return w.maxLength="10",v.addEventListener("click",(function(e){return r.setBackground(e)})),v.addEventListener("click",(function(e){return r.startVisualAndSoundEffect(e)})),o(v.children).forEach((function(e){return e.addEventListener("mouseover",(function(){return n(".btn-hover-audio")}))})),S.addEventListener("click",(function(){return r.playerChooseCharacter()})),k.addEventListener("click",e),document.addEventListener("keypress",(function(e){"Enter"===e.code&&r.playerChooseCharacter()})),o(document.querySelectorAll(".btn")).forEach((function(e){e.addEventListener("mouseover",(function(){return n(".btn-hover-audio")})),e.addEventListener("click",(function(){return n(".btn-click-audio")}))})),r.playerChooseCharacter=function(){var e="You forgot enter name"!==w.value,t=o(v.children).some((function(e){return e.classList.contains("in-focus")})),r=/\w/.test(w.value);if(!e||!r)return this.alertEmptyName(),void this.alertClass();if(t){var a=o(v.children).filter((function(e){if(e.classList.contains("in-focus"))return e}));i?(l=w.value.trim(),s=a[0].dataset.class,p.textContent="Player 2: Choose your character",w.value=""):(f=w.value.trim(),u=a[0].dataset.class,p.textContent="Players chose their characters",w.value=""),i=!1,n(".confirm-audio"),this.removeStyles(),this.checkConditionToStartBattle()}else this.alertClass()},r.alertEmptyName=function(){n(".confirm-failed-audio"),t(".decision__btn","horizontal"),w.value="You forgot enter name",w.style.color="red",w.style.fontSize="2rem",setTimeout((function(){w.value="",w.style.color="black",w.style.fontSize="2rem"}),1e3)},r.alertClass=function(){o(v.children).some((function(e){return e.classList.contains("in-focus")}))||(n(".confirm-failed-audio"),t(".options","mix"))},r.removeStyles=function(){o(v.children).forEach((function(e){e.classList.remove("in-focus")}))},r.checkConditionToStartBattle=function(){if(s&&u){var e=this.prepareToSaveData();v.classList.add("hidden"),g.classList.add("hidden"),y.classList.add("hidden"),localStorage.setItem("playersInfo",JSON.stringify(e)),setTimeout((function(){b.classList.add("visible")}),500)}},r.startVisualAndSoundEffect=function(e){switch(e.target.className.split(" ")[0]){case"warrior":n(".warrior-selected-audio");break;case"rogue":n(".rogue-selected-audio");break;case"mage":n(".mage-selected-audio")}},r.setCharacterDescription=function(e){var t=Object.keys(d[0]);switch(e){case"warrior":o(y.children).forEach((function(e,n){return e.textContent=d[0][t[n]]}));break;case"rogue":o(y.children).forEach((function(e,n){return e.textContent=d[1][t[n]]}));break;case"mage":o(y.children).forEach((function(e,n){return e.textContent=d[2][t[n]]}))}},r.setBackground=function(e){"options"!==e.target.className&&(this.removeStyles(),e.target.classList.add("in-focus"),this.setCharacterDescription("".concat(e.target.textContent.toLowerCase())),this.mainElement.style.backgroundImage="url('./images/backgrounds/".concat(e.target.textContent.toLowerCase(),".jpg')"))},r.prepareToSaveData=function(){return{playerOneClass:s,playerTwoClass:u,playerOneName:l,playerTwoName:f}},r}return c}(y);y.createChooseMenu()}();
//# sourceMappingURL=chooseMenu.bundle.js.map