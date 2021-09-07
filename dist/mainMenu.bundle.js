!function(){"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.skillCollectionLinks={warrior:{strike_w:"./images/cards/warrior/strike.png",bash:"./images/cards/warrior/bash.png",anger:"./images/cards/warrior/anger.png",bodySlam:"./images/cards/warrior/bodySlam.png",perfectedStrike:"./images/cards/warrior/perfectedStrike.png",bludgeon:"./images/cards/warrior/bludgeon.png",defend_w:"./images/cards/warrior/defend_w.png",armaments:"./images/cards/warrior/armaments.png",ironWave:"./images/cards/warrior/ironWave.png",warcry:"./images/cards/warrior/warcry.png",bloodletting:"./images/cards/warrior/bloodletting.png",entrench:"./images/cards/warrior/entrench.png"},rogue:{strike_r:"./images/cards/rogue/strike_G.png",daggerThrow:"./images/cards/rogue/r_dagger-throw.png",flechettes:"./images/cards/rogue/flechettes.png",riddleWithHoles:"./images/cards/rogue/riddleWithHoles.png",slice:"./images/cards/rogue/slice.png",quickSlash:"./images/cards/rogue/quickSlash.png",survivor:"./images/cards/rogue/survivor.png",deflect:"./images/cards/rogue/deflect.png",backFlip:"./images/cards/rogue/backflip.png",prepared:"./images/cards/rogue/prepared.png",expertise:"./images/cards/rogue/expertise.png",dash:"./images/cards/rogue/dash.png"},mage:{strike_m:"./images/cards/mage/strike_P.png",cutThroughFate:"./images/cards/mage/cutThroughFate.png",reachHeaven:"./images/cards/mage/reachHeaven.png",signatureMove:"./images/cards/mage/signatureMove.png",tantrum:"./images/cards/mage/tantrum.png",judgment:"./images/cards/mage/judgment.png",masterReality:"./images/cards/mage/masterReality.png",defend_m:"./images/cards/mage/defend_P.png",meditate:"./images/cards/mage/meditate.png",thirdEye:"./images/cards/mage/thirdEye.png",nirvana:"./images/cards/mage/nirvana.png",alpha:"./images/cards/mage/alpha.png"}},this.animationCollectionLinks={anger:"./images/attack-effects/anger.png",bloodletting:"./images/attack-effects/bloodletting.png",daggersSvg:"./images/attack-effects/daggers.svg",flash:"./images/attack-effects/flash.png",judgmentSvg:"./images/attack-effects/judgment.svg",mageAttack:"./images/attack-effects/mage-attack.png",mageEffect:"./images/attack-effects/mage-effect.png",reachHeaven:"./images/attack-effects/reach-heaven.png",refreshStamina:"./images/attack-effects/refresh-stamina.svg",serpentRing:"./images/attack-effects/serpent-ring.png",smash:"./images/attack-effects/smash.png",warriorAttack:"./images/attack-effects/warrior-attack.png",warriorSmash:"./images/attack-effects/warrior-smash.png",defend:"./images/icons/icon_Block.png",warriorSlash:"./images/attack-effects/warrior-second-attack.png"},this.audioCollectionLinks={anger:"./sounds/anger.ogg",backStab:"./sounds/backstab.ogg",bashAttack:"./sounds/bash-attack.ogg",battleMainTheme:"./sounds/battle-main-theme.ogg",bloodletting:"./sounds/bloodletting.ogg",btnClick:"./sounds/btn-click.ogg",btnHover:"./sounds/btn-hover.ogg",cardRelease:"./sounds/card-grab-cancel.ogg",cardGrab:"./sounds/card-grabbed.ogg",cardSelected:"./sounds/card-selected.ogg",confirmSucces:"./sounds/confirm.ogg",confirmFailed:"./sounds/confirm-failed.ogg",defend:"./sounds/defend.ogg",discardCard:"./sounds/discard-card.ogg",endTurn:"./sounds/end-turn.ogg",expertise:"./sounds/expertice.ogg",flash:"./sounds/flash.ogg",ironWave:"./sounds/ironwave.ogg",judj:"./sounds/judj.ogg",mageAttack:"./sounds/mage-attack.ogg",magePunch:"./sounds/mage-punch.ogg",mageSelected:"./sounds/mage-selected.ogg",mageStrong:"./sounds/mage-strong.ogg",mageUltimate:"./sounds/mage-ultimate.ogg",mainMenuTheme:"./sounds/main-menu-theme.ogg",meditate:"./sounds/meditate.ogg",overlayClose:"./sounds/overlay-close.ogg",overlayOpen:"./sounds/overlay-open.ogg",pushCard:"./sounds/push-card.ogg",rogueAttack:"./sounds/rogue-attack.ogg",rogueSelected:"./sounds/rogue-selected.ogg",strikeAttack:"./sounds/strike-attack.ogg",victory:"./sounds/victory.ogg",warcry:"./sounds/warcry.ogg",warriorSelected:"./sounds/warrior-selected.ogg"},this.cards=null,this.animation=null,this.audio=null,this.init()}var r,n;return r=t,(n=[{key:"init",value:function(){this.cards={warrior:this.preloadSkillImages(this.skillCollectionLinks.warrior),rogue:this.preloadSkillImages(this.skillCollectionLinks.rogue),mage:this.preloadSkillImages(this.skillCollectionLinks.mage)},this.animation=this.preloadSkillImages(this.animationCollectionLinks),this.audio=this.preloadAudio(this.audioCollectionLinks)}},{key:"preloadSkillImages",value:function(e){var t={};for(var r in e)if(/(svg)$/gi.test(r)){var n=document.createElement("object");n.data=e[r],t[r]=n}else{var a=new Image;a.src=e[r],t[r]=a}return t}},{key:"preloadAudio",value:function(e){var t={};for(var r in e){var n=new Audio;n.src=e[r],t[r]=n}return t}}])&&e(r.prototype,n),t}()),r=function(){var e,t=decodeURIComponent(window.location.hash.substr(1)),r=document.querySelector(".sound-icon");(e="battle-field"==t||"restoredGame"==t?document.querySelector(".background-music-battlefield"):document.querySelector(".background-music-main-menu")).paused?(e.play(),r.className="fas fa-volume-up sound-icon"):(e.pause(),r.className="fas fa-volume-mute sound-icon")},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"horizontal",r=document.querySelector(e);switch(t){case"horizontal":r.classList.remove("shake-x"),setTimeout((function(){return r.classList.add("shake-x")}),0),setTimeout((function(){return r.classList.remove("shake-x")}),400);break;case"vertical":r.classList.remove("shake-y"),setTimeout((function(){return r.classList.add("shake-y")}),0),setTimeout((function(){return r.classList.remove("shake-y")}),400);break;case"mix":r.classList.remove("shake-mix"),setTimeout((function(){return r.classList.add("shake-mix")}),0),setTimeout((function(){return r.classList.remove("shake-mix")}),400)}},a=function(e){var t=e;t&&(t.currentTime=0,t.play())};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var a=g(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e}var v=function(){function e(){h(this,e)}return y(e,[{key:"init",value:function(e){this.mainElement=document.querySelector(e),this.source=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},document.querySelector(e).children)}}],[{key:"createMainMenu",value:function(){new b}},{key:"createChooseMenu",value:function(){new k}}]),e}(),b=function(e){c(o,e);var n=l(o);function o(){var e;return h(this,o),(e=n.call(this)).aboutGame=document.querySelector(".about-button"),e.checkContinueCondition(),e.init(".wrapper-main-menu"),e.source[1].addEventListener("click",r),s(e.mainElement.children).forEach((function(e){e.addEventListener("mouseover",(function(){return a(t.audio.btnHover)})),e.addEventListener("click",(function(){return a(t.audio.btnClick)}))})),e.aboutGame.addEventListener("click",(function(){return e.createAboutRules()})),e.rulesPage='<div class = "about-game">\n\t\t\t<p>Defeat your opponent by playing <span style="color:brown">Cards</span><img src="./images/cards/warrior/strike.png" alt="card"> from your hand by swipe it up or drag it in the center of battlefield.</p>\n\t\t\t<p>Cards require <span style="color: orange">Energy</span> to play. You can see it on a card in the top left corner. Once you are out of Energy, <img id = "about-game__stamina" src="./images/icons/out-of-energy.png" alt="cards">end your turn.</p>\n\t\t\t<p>At start of your turn, new cards are drawn and your <span>Energy</span> is replenished.</p>\n\t\t\t<p>Play defensive card to gain <span style="color:blue">Block</span><img src="./images/cards/warrior/defend_w.png" alt="card"> <span>Block</span> reduces incoming attack damage.</p>\n\t\t\t<p>If you want to save your game, just use menu <i class="fas fa-bars"></i> and select "save progress" button.</p>\n\t\t</div>',e}return y(o,[{key:"checkContinueCondition",value:function(){fetch("https://parseapi.back4app.com/classes/CardGameContainer/",{method:"GET",headers:{"X-Parse-Application-Id":"uU4nbtVfuBneX95bxKyjBuyG82Wr3Wg1JrTjEYr7","X-Parse-REST-API-Key":"UAnSqROzrtRZuMkgY3MgoEkhsp0040aUBca0dWGm"}}).then((function(e){if(e.ok)return e.json()})).then((function(e){e.results[0].gameSaved.hasOwnProperty("gameFinished")&&(document.querySelector(".continue-button").addEventListener("click",(function(e){return e.stopPropagation()})),document.querySelector(".continue-button").style.color="grey")}))}},{key:"createAboutRules",value:function(){var e=this,r=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");r.className="players-overlay fade-in-animation",n.className="close-rule-btn",o.innerHTML="".concat(this.rulesPage),n.textContent="Close",r.appendChild(o),r.appendChild(n),this.mainElement.appendChild(r),document.querySelector(".close-rule-btn").addEventListener("click",(function(){return e.removeAboutRules()})),document.querySelector(".close-rule-btn").addEventListener("mouseover",(function(){return a(t.audio.btnHover)})),document.querySelector(".close-rule-btn").addEventListener("click",(function(){return a(t.audio.btnClick)}))}},{key:"removeAboutRules",value:function(){var e=this,t=document.querySelector(".players-overlay");t.className="players-overlay fade-out-animation",setTimeout((function(){return e.mainElement.removeChild(t)}),500)}}]),o}(v),k=function(e){c(i,e);var o=l(i);function i(){var e;h(this,i),e=o.call(this);var c=!0,u=null,l=null,d=null,g=null,m=[{title:"The Viking",profile:"The remaining soldier of the Ironclads. Sold his soul to harness demonic energies",pross:"Losing health goes into a rage. Becomes stronger when the enemy has a lot of health"},{title:"The Silent",profile:"A deadly huntress from the foglands. Eradicates foes with daggers",pross:"Light attacks and the ability to always find the right skill take the enemy by surprise"},{title:"The Watcher",profile:'A blind ascetic who has come to "Evaluate" the Spire. Master of the divine Stances',pross:"Massive magic  can destroy the enemy in a matter of seconds"}];e.init(".wrapper-choose-menu");var f=e.source,p=f[0],y=f[1],v=f[2],b=f[3],k=f[4],w=f[6],S=e.source[4],C=S.firstElementChild,E=S.lastElementChild;return C.maxLength="10",v.addEventListener("click",(function(t){return e.setBackground(t)})),v.addEventListener("click",(function(t){return e.startVisualEffects(t)})),s(v.children).forEach((function(e){return e.addEventListener("mouseover",(function(){return a(t.audio.btnHover)}))})),E.addEventListener("click",(function(){return e.playerChooseCharacter()})),w.addEventListener("click",r),document.addEventListener("keypress",(function(t){"Enter"===t.code&&e.playerChooseCharacter()})),s(document.querySelectorAll(".btn")).forEach((function(e){e.addEventListener("mouseover",(function(){return a(t.audio.btnHover)})),e.addEventListener("click",(function(){return a(t.audio.btnClick)}))})),C.addEventListener("focus",(function(){return e.clearInput()})),e.playerChooseCharacter=function(){var e=this.isValidUserName();if(!this.runAlert(e)){var r=s(v.children).filter((function(e){if(e.classList.contains("in-focus"))return e}));this.recordPlayerChoose(r),this.removeStyles(),this.checkConditionToStartBattle(),a(t.audio.confirmSucces)}},e.isValidUserName=function(){var e=s(v.children).some((function(e){return e.classList.contains("in-focus")})),t=/(\W+|\s+)/g.test(C.value),r=/(^$)/g.test(C.value),n=/(^[a-zA-Z0-9]{1,3}$)/g.test(C.value),a=null;return/(Enter your name)|(Name is too short)|(Use alphanumeric approach)/gi.test(C.value)?a="warning":t?a="symbols":n?a="short":r?a="empty":e||(a="class"),a},e.runAlert=function(e){var t=!1;switch(e){case"warning":this.alertNotification("warning"),t=!0;break;case"symbols":this.alertNotification("symbols"),t=!0;break;case"short":this.alertNotification("short"),t=!0;break;case"empty":this.alertNotification("empty"),t=!0;break;case"class":this.alertClassNotification(),t=!0}return t},e.alertNotification=function(e){var r;switch(a(t.audio.confirmFailed),n(".decision__btn","horizontal"),e){case"empty":r="Enter your name";break;case"short":r="Name is too short";break;case"symbols":r="Use alphanumeric";break;case"warning":return}C.value=r,C.style.color="red",C.style.fontSize="1.5rem"},e.clearInput=function(){C.value="",C.style.color="black",C.style.fontSize="2rem"},e.alertClassNotification=function(){s(v.children).some((function(e){return e.classList.contains("in-focus")}))||(a(t.audio.confirmFailed),n(".options","mix"))},e.recordPlayerChoose=function(e){c?(d=C.value.trim(),u=e[0].dataset.class,p.textContent="Player 2: Choose your character",C.value=""):(g=C.value.trim(),l=e[0].dataset.class,p.textContent="Players chose their characters",C.value=""),c=!1},e.removeStyles=function(){s(v.children).forEach((function(e){e.classList.remove("in-focus")}))},e.checkConditionToStartBattle=function(){if(u&&l){var e=this.prepareToSaveData();v.classList.add("hidden"),k.classList.add("hidden"),y.classList.add("hidden"),localStorage.setItem("playersInfo",JSON.stringify(e)),setTimeout((function(){b.classList.add("visible")}),500)}},e.startVisualEffects=function(e){switch(e.target.className.split(" ")[0]){case"warrior":a(t.audio.warriorSelected);break;case"rogue":a(t.audio.rogueSelected);break;case"mage":a(t.audio.mageSelected)}},e.setCharacterDescription=function(e){var t=Object.keys(m[0]);switch(e){case"warrior":s(y.children).forEach((function(e,r){return e.textContent=m[0][t[r]]}));break;case"rogue":s(y.children).forEach((function(e,r){return e.textContent=m[1][t[r]]}));break;case"mage":s(y.children).forEach((function(e,r){return e.textContent=m[2][t[r]]}))}},e.setBackground=function(e){"options"!==e.target.className&&(this.removeStyles(),e.target.classList.add("in-focus"),this.setCharacterDescription("".concat(e.target.textContent.toLowerCase())),this.mainElement.style.backgroundImage="url('./images/backgrounds/".concat(e.target.textContent.toLowerCase(),".jpg')"))},e.prepareToSaveData=function(){return{playerOneClass:u,playerTwoClass:l,playerOneName:d,playerTwoName:g}},e}return i}(v);v.createMainMenu()}();
//# sourceMappingURL=mainMenu.bundle.js.map