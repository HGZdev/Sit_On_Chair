/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded",()=>{console.log("JS ready...");const a=["black","red","orange"],b=document.querySelector(".slider"),c=b.querySelector(".prev"),d=b.querySelector(".next"),e=b.querySelector(".image"),f=(a,b)=>{e.style.backgroundImage="url(\"./dist/images/"+a[b]+".png\")",e.dataset.idx=b};f(a,0),(()=>{c.addEventListener("click",function(){let b=e.dataset.idx;0===+b&&(b=a.length),b--,f(a,b)}),d.addEventListener("click",function(){let b=e.dataset.idx;+b===a.length-1&&(b=-1),b++,f(a,b)})})();const g=document.querySelector(".calculator"),h=g.querySelector(".choice_part"),i=h.querySelectorAll(".list_label"),j=h.querySelectorAll(".list_arrow"),k=h.querySelectorAll(".list_panel"),l=h.querySelectorAll("li"),m=h.querySelector("#transport"),n=h.querySelector("#checkbox_label:after"),o=g.querySelector(".summary_part"),p=o.querySelector(".summary_panel"),q=p.querySelectorAll(".value"),r=p.querySelector(".sum"),s=()=>{let a=0;for(let b=0;b<q.length;b++)a+=+q[b].innerText;r.innerText=a};(()=>{for(let a=0;a<j.length;a++)j[a].parentElement.children[2].classList.add("hidden")})(),(()=>{for(let a=0;a<j.length;a++)j[a].addEventListener("click",function(){this.parentElement.children[2].classList.remove("hidden")}),k[a].addEventListener("mouseleave",function(){this.classList.add("hidden")})})(),s(),(()=>{for(let a=0;a<l.length;a++)l[a].addEventListener("click",function(){this.parentElement.classList.add("hidden");let a=p.querySelector("."+this.parentElement.id+".name"),b=p.querySelector("."+this.parentElement.id+".value"),c=this.parentElement.parentElement.firstElementChild;a.innerText=this.innerText,b.innerText=this.dataset.price,c.innerText=this.innerText,c.style.color="#575757",s()})})(),(()=>{m.addEventListener("change",function(){let a=p.querySelector("."+this.id+".name"),b=p.querySelector("."+this.id+".value");this.checked?(a.innerText=this.id,b.innerText=this.dataset.price):(a.innerText="",b.innerText=""),s()})})()});

/***/ })
/******/ ]);